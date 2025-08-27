import React from 'react';
import Product from './Product';
import { ProductType } from '@/types/Product';

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

const ProductList = () => {
	return (
		<div className='grid grid-cols-4 gap-1 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</div>
	);
};

export default ProductList;
