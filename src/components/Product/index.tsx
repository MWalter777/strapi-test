'use client';
import { useAppDispatch } from '@/hooks/reduxHooks';
import {
	addItemToCheckout,
	removeItemFromCheckout,
} from '@/redux/productSlide';
import { CartItemType, ProductType } from '@/types/Product';
import React from 'react';

type Props = {
	product: ProductType;
	checkoutItems: CartItemType[];
};

const Product = ({ product, checkoutItems }: Props) => {
	const dispatch = useAppDispatch();

	const hasStock = () => {
		return product.stock > 0;
	};

	const AddProduct = () => {
		dispatch(addItemToCheckout(product));
	};

	const removeProduct = () => {
		dispatch(removeItemFromCheckout(product));
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
					<div className='mt-4 flex items-center gap-2'>
						{hasStock() ? (
							<button
								onClick={AddProduct}
								className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
							>
								Add
							</button>
						) : (
							<span className='text-red-600 font-bold'>Out of Stock</span>
						)}
						{checkoutItems.some((ci) => ci.id == product.id) && (
							<button
								onClick={removeProduct}
								className='mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-green-700'
							>
								remove
							</button>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Product;
