'use client';
import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	// eslint-disable-next-line
	static getDerivedStateFromError(_: Error): State {
		// Actualiza el estado para mostrar el fallback
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// Aquí puedes loguear el error en un servicio externo (Sentry, LogRocket, etc.)
		console.error('ErrorBoundary caught an error:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback || <h2>⚠️ Something went wrong.</h2>;
		}
		return this.props.children;
	}
}
