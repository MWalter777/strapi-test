import stripe from 'stripe';

console.log('process.env.STRIPE_SECRET_KEY', process.env.STRIPE_SECRET_KEY);
const stripeClient = new stripe(
	'sk_test_51S0wKQHtkbCOOK7qMdXUKuxybHYbuLTDl4zN1ZRJzEvBY4CBMLtl4pl2r3mbY6WlUXU1CDFMzLqB73STlsaaL8wV00kCBmSrvg'
);

export async function POST(request: Request) {
	const { items } = await request.json();
	console.log('items', items);
	const line_items = items.map((item: any) => ({
		price_data: {
			currency: 'usd',
			product_data: {
				name: item.name,
				images: [item.image],
				description: item.description,
			},
			unit_amount: item.price * 100,
		},
		quantity: item.quantity,
	}));
	const products = items.map((item: any) => ({
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
