import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type AppState = {
  isOnboardingFinished: boolean;
  privacyData: {
    policy: string;
  };
  isPolicyLoaded: boolean;
};

const initialState: AppState = {
  isOnboardingFinished: false,
  privacyData: {
    policy: '',
  },
  isPolicyLoaded: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsOnboardingFinished: (state, action: PayloadAction<boolean>) => {
      state.isOnboardingFinished = action.payload;
    },
    saveData: (state, action: PayloadAction<any>) => {
      state.privacyData.policy = action.payload;
      state.isPolicyLoaded = true;
    },
  },
});

export const {setIsOnboardingFinished, saveData} = appSlice.actions;

export const selectAppPrivacyData = (state: RootState) => state.app.privacyData;
export const selectIsPolicyLoaded = (state: RootState) =>
  state.app.isPolicyLoaded;

export const isOnboardingFinished = (state: RootState) =>
  state.app.isOnboardingFinished;

export default appSlice.reducer;
