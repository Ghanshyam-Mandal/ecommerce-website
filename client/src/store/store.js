import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import adminProudctsSlice from './admin/products-slice';
import shopProductsSlice from './shop/product-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProudctsSlice,
    shopProducts: shopProductsSlice,
  },
});

export default store;
