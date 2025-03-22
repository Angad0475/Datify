import { configureStore } from '@reduxjs/toolkit';
import datePickerReducer from '@/Redux/datePickerSlice';

const store = configureStore({
  reducer: {
    datePicker: datePickerReducer,
  },
});

export default store;