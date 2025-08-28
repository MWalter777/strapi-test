import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './thunks/fetchProducts';
import { CartItemType, ProductType } from '@/types/Product';

type ProductState = {
	products: ProductType[];
	filteredProducts: ProductType[];
	checkoutItems: CartItemType[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
};

const initialState: ProductState = {
	products: [],
	filteredProducts: [],
	checkoutItems: [],
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
			state.filteredProducts = action.payload;
			state.status = 'succeeded';
		});
		builder.addCase(fetchAllProducts.rejected, (state, action) => {
			state.status = 'failed';
			state.products = [];
			state.error = action.error.message || 'Failed to fetch products';
		});
	},
	reducers: {
		findProductsByName: (state, action) => {
			const query = action.payload.toLowerCase();
			state.filteredProducts = state.products.filter((product) =>
				product.name.toLowerCase().includes(query)
			);
		},
		addItemToCheckout: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.checkoutItems.find(
				(item) => item.id === newItem.id
			);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.checkoutItems.push({
					...newItem,
					quantity: 1,
					totalPrice: newItem.price,
				});
			}
			// Decrease stock in products array
			const product = state.filteredProducts.find((p) => p.id === newItem.id);
			if (product && product.stock > 0) {
				product.stock -= 1;
			}
		},
		removeItemFromCheckout: (state, action) => {
			const itemId = action.payload.id;
			const item = state.checkoutItems.find((ci) => ci.id == itemId);
			if (item) {
				state.checkoutItems = state.checkoutItems.flatMap((ci) => {
					if (ci.id === itemId) {
						if (ci.quantity === 1) {
							return [];
						}
						return { ...ci, quantity: ci.quantity - 1 };
					}
					return ci;
				});
				// Increase stock in products array
				const product = state.filteredProducts.find((p) => p.id === itemId);
				if (product) {
					product.stock += 1;
				}
			}
		},
	},
});

// Action creators are generated for each case reducer function

export const { findProductsByName, addItemToCheckout, removeItemFromCheckout } =
	productSlice.actions;

export default productSlice.reducer;
