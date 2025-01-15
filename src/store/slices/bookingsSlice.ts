import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type Booking = {
  id: number;
  addressId: number;
  haircutId: number;
  date: string;
  time: string;
};

type BookingsState = {
  bookings: Booking[];
};

const initialState: BookingsState = {
  bookings: [],
};

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload);
    },
    removeBooking: (state, action: PayloadAction<number>) => {
      state.bookings = state.bookings.filter(
        booking => booking.id !== action.payload,
      );
    },
  },
});

export const {addBooking, removeBooking} = bookingsSlice.actions;

export const selectBookings = (state: RootState) => state.bookings;

export default bookingsSlice.reducer;
