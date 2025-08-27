'use client';
import React from 'react';
import Header from './Header';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateQuery } from '@/redux/searchSlide';

const HeaderSearch = () => {
	const dispatch = useAppDispatch();
	const searchValue = useAppSelector((state) => state.search.value);
	console.log('searching...', searchValue);

	const onSearch = (query: string) => {
		dispatch(updateQuery(query));
	};

	return <Header onSearch={onSearch} />;
};

export default HeaderSearch;
