import { CartItemType, ProductType } from '@/types/Product';
import stripe from 'stripe';

const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY!);
type RequestBody = { items: CartItemType[] };

export async function POST(request: Request) {
	const { items }: RequestBody = await request.json();
	const line_items = items.map((item) => ({
		price_data: {
			currency: 'usd',
			product_data: {
				name: item.name,
				images: [item.image],
				description: item.description,
			},
			unit_amount: Math.round(item.price * 100),
		},
		quantity: item.quantity,
	}));
	const products = items.map((item) => ({
		productId: item.id,
		quantity: item.quantity,
		price: item.price,
	}));
	const session = await stripeClient.checkout.sessions.create({
		success_url: 'http://localhost:3000/success',
		line_items: line_items,
		//automatic_tax: { enabled: true },
		metadata: {
			products: JSON.stringify(products),
		},
		mode: 'payment',
	});
	return new Response(JSON.stringify(session), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}
