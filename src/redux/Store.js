import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice/CartSlice';
import productReducer from './productsSlice/productsSlice';
import categoriesReducer from './categoriesSlice/categoriesSlice';
import barsReducer from './barsSlice/barsSlice';

const reducers = combineReducers({
	cart: cartReducer,
	product: productReducer,
	categories: categoriesReducer,
	bars: barsReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
