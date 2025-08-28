import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './thunks/fetchProducts';
import { ProductType } from '@/types/Product';

type ProductState = {
	products: ProductType[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
};

const initialState: ProductState = {
	products: [],
	status: 'idle',
	error: null,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	// async thunks, load from an API
	extraReducers: (builder) => {
		builder.addCase(fetchAllProducts.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.status = 'succeeded';
		});
		builder.addCase(fetchAllProducts.rejected, (state, action) => {
			state.status = 'failed';
			state.products = [];
			state.error = action.error.message || 'Failed to fetch products';
		});
	},
	reducers: {},
});

// Action creators are generated for each case reducer function

export default productSlice.reducer;
