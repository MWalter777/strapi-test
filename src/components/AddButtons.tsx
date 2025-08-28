import { CartItemType, ProductType } from '@/types/Product';
import React from 'react';
import { FaCartPlus, FaTrashAlt, FaPlus } from 'react-icons/fa';

type Props = {
	product: ProductType;
	checkoutItems: CartItemType[];
	addProduct: () => void;
	removeProduct: () => void;
};

const AddButtons = ({
	checkoutItems,
	product,
	addProduct,
	removeProduct,
}: Props) => {
	if (checkoutItems.some((ci) => ci.id == product.id)) {
		return (
			<div className='mt-4 flex gap-2 items-center justify-between w-full border border-blue-600 rounded-3xl'>
				<button
					onClick={addProduct}
					disabled={product.stock <= 0}
					className='hover:cursor-pointer text-white bg-blue-500 p-2 rounded-l-3xl w-3/12 flex justify-center items-center hover:bg-blue-600'
				>
					<FaPlus />
				</button>
				<span>{checkoutItems.find((ci) => ci.id == product.id)?.quantity}</span>
				<button
					onClick={removeProduct}
					className='hover:cursor-pointer text-white bg-red-500 p-2 rounded-r-3xl w-3/12 flex justify-center items-center hover:bg-red-600'
				>
					<FaTrashAlt />
				</button>
			</div>
		);
	}

	if (product.stock <= 0) {
		return <span className='text-red-600 font-bold'>Out of Stock</span>;
	}

	return (
		<button
			onClick={addProduct}
			className='mt-4 w-full justify-center flex gap-1 items-center bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 hover:cursor-pointer'
		>
			<FaCartPlus />
			Add to cart
		</button>
	);
};

export default AddButtons;
