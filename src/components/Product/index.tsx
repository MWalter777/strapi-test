'use client';
import { ProductType } from '@/types/Product';
import React from 'react';

type Props = {
	product: ProductType;
};

const Product = ({ product }: Props) => {
	const buyProduct = () => {
		throw new Error('Function not implemented.');
	};

	return (
		<div className='w-full bg-amber-500'>
			<section className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-extrabold text-white mb-6'>
					{product.title}
				</h2>
				<div className='bg-white rounded-lg shadow-lg p-6'>
					<h3 className='text-xl font-bold mb-4'>{product.name}</h3>
					<p className='text-gray-700 mb-4'>{product.description}</p>
					<p className='text-gray-900 font-bold text-lg'>${product.price}</p>
					{/* product image */}
					{product.image && (
						<img
							src={product.image}
							alt={product.name}
							className='w-full h-64 object-cover mt-4 rounded'
						/>
					)}
					<button
						onClick={buyProduct}
						className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
					>
						Buy Now
					</button>
				</div>
			</section>
		</div>
	);
};

export default Product;
