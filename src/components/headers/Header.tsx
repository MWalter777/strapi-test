'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import useDebounce from '@/hooks/useDebounce';
import { FaShoppingCart } from 'react-icons/fa';
import { useAppSelector } from '@/hooks/reduxHooks';

type Props = {
	// search function
	onSearch?: (query: string) => void;
};

const Header = ({ onSearch }: Props) => {
	const { debounce } = useDebounce();
	const router = useRouter();
	const { checkoutItems } = useAppSelector((state) => state.products);
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onSearch) {
			debounce(() => {
				console.log(event.target.value);
				onSearch(event.target.value);
			}, 500);
		}
	};

	const makePayment = async () => {
		if (checkoutItems.length === 0) return;
		//call api to make payment
		const response = await fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ items: checkoutItems }),
		});
		const data = await response.json();
		console.log('data', data);
		//redirect to checkout
		if (data.url) {
			router.push(data.url);
		}
	};

	return (
		<header className='p-4 bg-blue-500 flex justify-center text-white'>
			<div className='flex w-10/12 gap-3 items-center justify-between'>
				<h1 className='text-2xl font-bold'>Stripe Webhook</h1>
				{/* search bar */}
				<input
					type='text'
					placeholder='Search...'
					className='mt-2 p-2 rounded text-white outline-none bg-blue-400 placeholder-white w-2xl'
					onChange={handleSearch}
				/>
				<button
					onClick={makePayment}
					className='text-white flex gap-1 items-center px-4 py-2 rounded hover:text-gray-200 hover:cursor-pointer disabled:text-gray-400 hover:disabled:cursor-not-allowed'
					disabled={checkoutItems.length === 0}
				>
					<span className='font-bold'>{checkoutItems.length}</span>
					<FaShoppingCart />
				</button>
			</div>
		</header>
	);
};

export default Header;
