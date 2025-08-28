'use client';
import { useAppSelector } from '@/hooks/reduxHooks';
import React from 'react';

const checkout = () => {
	const { checkoutItems } = useAppSelector((state) => state.products);
	return (
		<div>
			{checkoutItems.map((item) => (
				<div key={item.id}>
					<p>{item.name}</p>
					<p>{item.price}</p>
					<p>{item.quantity}</p>
				</div>
			))}
		</div>
	);
};

export default checkout;
