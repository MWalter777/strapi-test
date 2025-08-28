'use client';
import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlide';
import productSlice from './productSlide';

export const store = configureStore({
	reducer: {
		search: searchSlice,
		products: productSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
