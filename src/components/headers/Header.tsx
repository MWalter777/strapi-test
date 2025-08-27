import useDebounce from '@/hooks/useDebounce';
import React from 'react';
/**
para renunciar, nombre completo, dui y firma... a nombre de focus el salvador
a generalista

Carta de recomendaciones, podemos poner a Monica Montes Navarro como referencia

*/

type Props = {
	// search function
	onSearch?: (query: string) => void;
};

const Header = ({ onSearch }: Props) => {
	const { debounce } = useDebounce();
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onSearch) {
			debounce(() => {
				console.log(event.target.value);
				onSearch(event.target.value);
			}, 500);
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
			</div>
		</header>
	);
};

export default Header;
