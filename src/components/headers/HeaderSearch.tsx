'use client';
import React from 'react';
import Header from './Header';

const HeaderSearch = () => {
	const onSearch = (query: string) => {
		console.log('Search query:', query);
		// Implement your search logic here
	};

	return <Header onSearch={onSearch} />;
};

export default HeaderSearch;
