import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type ProfileState = {
  photo?: string;
  name?: string;
  age?: number;
};

const initialState: ProfileState = {
  photo: '',
  name: '',
  age: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeProfileData: (state, action: PayloadAction<ProfileState>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const {changeProfileData} = profileSlice.actions;

export const selectProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
