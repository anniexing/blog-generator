import { NextRequest, NextResponse } from 'next/server'
import stripe from "@/config/stripe";
import { connectDB } from '@/lib/connectedDB'

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

const POST = async (req: NextRequest) => {
    if (req.method !== 'POST') {
        return NextResponse.json(null, { status: 405 });
    }
    try {
        const body = await req.text();
        const signature = req.headers.get("stripe-signature") || "";
        const event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
        let paymentIntent = null;
        switch(event.type){
            case "checkout.session.completed": {
                paymentIntent = event.data.object;
                const auth0Id = paymentIntent.metadata?.sub;
                const {db} = await connectDB();
                const updateData = {
                    $inc: {
                        availableTokens: Number(paymentIntent.metadata?.addedTokens),
                    },
                    $setOnInsert: {
                        auth0Id,
                    },
                };
                const options = {
                    upsert: true,
                };
                await db.collection('users').updateOne(
                    {
                        auth0Id,
                    },
                    updateData,
                    options
                );
                return NextResponse.json({ received: true }, {status: 200});
            }
            default :
                console.log("UNHANDLED EVENT:" + event.type);
        }

    }catch (error) {
        console.error(error);
        return NextResponse.json({ message: "something went wrong", ok: false, }, { status: 500 });
    }
}

//export default POST;
