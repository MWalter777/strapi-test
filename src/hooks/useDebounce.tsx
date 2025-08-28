import { useRef } from 'react';

type ReturnValue = {
	debounce: (callback: () => void, wait: number) => void;
};

const useDebounce = (): ReturnValue => {
	const timeoutHandlerDebounce = useRef<NodeJS.Timeout>(undefined);

	const debounce = (callback: () => void, wait: number): void => {
		if (timeoutHandlerDebounce.current) {
			clearTimeout(timeoutHandlerDebounce.current);
		}
		timeoutHandlerDebounce.current = setTimeout(() => {
			callback();
			timeoutHandlerDebounce.current = undefined;
		}, wait);
	};

	return { debounce };
};

export default useDebounce;
