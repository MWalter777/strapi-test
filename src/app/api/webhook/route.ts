import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
	const body = await request.text();
	const headersList = await headers();
	const sig = headersList.get('stripe-signature');
	let event: Stripe.Event;
	try {
		if (!sig) throw new Error('No signature found');
		event = stripeClient.webhooks.constructEvent(body, sig, endpointSecret);
		console.log('✅ Success:', event.id);
		// Handle the event
		switch (event.type) {
			case 'checkout.session.completed':
				const session = event.data.object as Stripe.Checkout.Session;
				console.log('session', session);
				console.log(`🔔 Payment received!`);
				break;
			default:
				console.log(`Unhandled event type ${event.type}`);
		}
	} catch (err) {
		console.log(`❌ Error message: ${err instanceof Error ? err.message : ''}`);
		return new Response(
			`Webhook Error: ${err instanceof Error ? err.message : ''}`,
			{ status: 400 }
		);
	}
	return new Response('Webhook received', { status: 200 });
}
