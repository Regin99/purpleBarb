import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {Screen, TabsHeader} from '../../components';
import {Calendar, DateData} from 'react-native-calendars';
import {COLORS} from '../../constants/colors';
import {useDispatch} from 'react-redux';
import {addBooking} from '../../store/slices';
import {RootStackScreenProps} from '../../navigation/types';

const AVAILABLE_TIMES = ['11:00', '13:30', '16:00', '17:30'];

export const SelectTimeScreen = ({
  navigation,
  route,
}: RootStackScreenProps<'SelectTime'>) => {
  const dispatch = useDispatch();
  const minDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <Screen containerStyle={styles.screenContainer}>
      <TabsHeader label="Book Barbershop" withBack />

      <Calendar
        minDate={minDate}
        hideExtraDays
        firstDay={1}
        disableAllTouchEventsForDisabledDays
        markedDates={{
          [selectedDate]: {
            selected: true,
          },
        }}
        onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
        theme={{
          monthTextColor: '#E0E0E0',
          textMonthFontSize: 20,
          textMonthFontWeight: '600',
          arrowColor: COLORS.foreground,
          calendarBackground: 'transparent',
          dayTextColor: '#E0E0E0',
          textInactiveColor: 'rgba(224, 224, 224, 0.5)',
          textDisabledColor: 'rgba(224, 224, 224, 0.5)',
          textSectionTitleColor: '#E0E0E0',
          todayButtonTextColor: '#E0E0E0',
          todayTextColor: '#E0E0E0',
          selectedDayBackgroundColor: '#7B61FF',
          selectedDayTextColor: COLORS.white,
          'stylesheet.calendar.header': {
            dayTextAtIndex5: {
              color: '#FF3B30',
            },
            dayTextAtIndex6: {
              color: '#FF3B30',
            },
          },
        }}
        style={styles.calendar}
      />
      <Text style={styles.selectTimeText}>Select the recording time</Text>
      <View style={styles.timeButtonsContainer}>
        {AVAILABLE_TIMES.map((time, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedTime(time)}
            style={[
              styles.timeButton,
              time === selectedTime && styles.selectedTimeButton,
            ]}>
            <Text style={styles.timeButtonText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.submitButton, !selectedTime && styles.disabledButton]}
        disabled={!selectedTime}
        onPress={() => {
          selectedTime &&
            dispatch(
              addBooking({
                id: Date.now(),
                date: selectedDate,
                time: selectedTime,
                addressId: route.params.addressId,
                haircutId: route.params.haircutId,
              }),
            );
          navigation.navigate('SuccessBooking');
        }}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 16,
  },
  calendar: {
    marginTop: 24,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: COLORS.foreground,
  },
  selectTimeText: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
  },
  timeButtonsContainer: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 14,
    flex: 1,
  },
  timeButton: {
    backgroundColor: '#D9D9D9',
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 16,
    opacity: 0.5,
  },
  selectedTimeButton: {
    opacity: 1,
  },
  timeButtonText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  submitButton: {
    alignSelf: 'center',
    marginVertical: 18,
    minWidth: 210,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    paddingVertical: 6,
  },
  submitText: {
    fontSize: 21,
    fontWeight: '600',
    color: COLORS.primary,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
