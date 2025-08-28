'use client';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { FaCartPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import {
	addItemToCheckout,
	removeItemFromCheckout,
} from '@/redux/productSlide';
import { CartItemType, ProductType } from '@/types/Product';
import React from 'react';
import AddButtons from '../AddButtons';

type Props = {
	product: ProductType;
	checkoutItems: CartItemType[];
};

const Product = ({ product, checkoutItems }: Props) => {
	const dispatch = useAppDispatch();

	const addProduct = () => {
		dispatch(addItemToCheckout(product));
	};

	const removeProduct = () => {
		dispatch(removeItemFromCheckout(product));
	};

	return (
		<div className='w-full'>
			<section className='p-1 sm:px-6 lg:px-8'>
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
						<AddButtons
							addProduct={addProduct}
							checkoutItems={checkoutItems}
							product={product}
							removeProduct={removeProduct}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Product;
