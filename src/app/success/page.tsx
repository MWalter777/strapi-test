'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
	const router = useRouter();

	const handleGoHome = () => {
		router.push('/');
	};

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<div className='w-8/12 min-h-96 flex flex-col items-center justify-center bg-gray-100 py-2 text-center mt-20'>
				<h1 className='text-4xl font-bold text-green-600'>
					Payment Successful!
				</h1>
				<p className='mt-4 text-lg'>
					Thank you for your purchase. Your payment has been processed
					successfully.
				</p>
				<button
					className='mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
					onClick={handleGoHome}
				>
					Go to Home
				</button>
			</div>
		</div>
	);
};

export default page;
