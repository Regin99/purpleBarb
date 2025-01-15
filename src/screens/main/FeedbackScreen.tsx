import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../constants/colors';
import {FEEDBACKS} from '../../mocks/data';

import {StarFeedbackIcon} from '../../components/icons';
import {Screen, TabsHeader} from '../../components';

export const FeedbackScreen = () => {
  const renderFeedbackItem = ({item}: {item: (typeof FEEDBACKS)[0]}) => (
    <View style={styles.feedbackItemContainer}>
      <Text style={styles.feedbackName}>{item.name}</Text>
      <View style={styles.feedbackMessageContainer}>
        <Text style={styles.feedbackMessage}>{item.message}</Text>
        <View style={styles.feedbackRatingContainer}>
          {Array.from({length: item.rating}, (_, index) => (
            <StarFeedbackIcon key={index} />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <Screen>
      <TabsHeader label="Feedback" />
      <FlatList
        data={FEEDBACKS}
        contentContainerStyle={styles.feedbackListContainer}
        renderItem={renderFeedbackItem}
        style={styles.listContainer}
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Add Feedback</Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  feedbackListContainer: {
    gap: 16,
  },
  feedbackItemContainer: {
    gap: 8,
  },
  feedbackName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    marginTop: 16,
  },
  feedbackMessageContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.foreground,
    minHeight: 110,
  },
  feedbackMessage: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  feedbackRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  submitButton: {
    alignSelf: 'center',
    marginBottom: 18,
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
});
