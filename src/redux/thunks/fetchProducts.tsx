import { ProductType } from '@/types/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';
const products: ProductType[] = [
	{
		id: 1,
		title: 'Product 1',
		name: 'Awesome Product 1',
		description:
			'This is an amazing product that you will love! It has many features and benefits that will make your life easier and more enjoyable.',
		price: 49.99,
	},
	{
		id: 2,
		title: 'Product 2',
		name: 'Awesome Product 2',
		description:
			'This is an amazing product that you will love! It has many features and benefits that will make your life easier and more enjoyable.',
		price: 59.99,
	},
	{
		id: 3,
		title: 'Product 3',
		name: 'Awesome Product 3',
		description:
			'This is an amazing product that you will love! It has many features and benefits that will make your life easier and more enjoyable.',
		price: 69.99,
	},
	{
		id: 4,
		title: 'Product 4',
		name: 'Awesome Product 4',
		description:
			'This is an amazing product that you will love! It has many features and benefits that will make your life easier and more enjoyable.',
		price: 79.99,
	},
];

export const fetchAllProducts = createAsyncThunk<ProductType[]>(
	'products/fetchAll',
	async () => {
		console.log('Fetching products...');
		// Simulate an API call with a delay
		await new Promise((resolve) => setTimeout(resolve, 5000));
		throw new Error('Simulated fetch error');
		console.log('Products fetched:', products);
		return products;
	}
);
