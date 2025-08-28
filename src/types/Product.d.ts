export type ProductType = {
	id: number;
	title: string;
	name: string;
	description: string;
	price: number;
	image: string;
	stock: number;
};

export type CartItemType = ProductType & {
	quantity: number;
	totalPrice: number;
};
