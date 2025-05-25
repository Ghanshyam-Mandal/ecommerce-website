import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import adminProudctsSlice from './admin/products-slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProudctsSlice
  },
});

export default store;
