'use client';
import React from 'react';
import Header from './Header';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { findProductsByName } from '@/redux/productSlide';

const HeaderSearch = () => {
	const dispatch = useAppDispatch();

	const onSearch = (query: string) => {
		dispatch(findProductsByName(query));
	};

	return <Header onSearch={onSearch} />;
};

export default HeaderSearch;
