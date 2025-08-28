'use client';
import React, { useEffect } from 'react';
import Product from '../Product';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchAllProducts } from '@/redux/thunks/fetchProducts';
import Loading from '../Loading/Loading';
import { ErrorBoundary } from '../ErrorBoundary';

const ProductList = () => {
	const dispatch = useAppDispatch();
	const { status, error, filteredProducts } = useAppSelector(
		(state) => state.products
	);

	useEffect(() => {
		dispatch(fetchAllProducts());
		return () => {};
	}, [dispatch]);

	return (
		<div className='grid grid-cols-4 gap-1 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
			{status === 'loading' && <Loading />}
			{status === 'failed' && <div>Error: {error}</div>}
			{filteredProducts.map((product) => (
				<ErrorBoundary key={product.id}>
					<Product product={product} />
				</ErrorBoundary>
			))}
		</div>
	);
};

export default ProductList;
