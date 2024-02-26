import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import stripe from '@/config/stripe';
import { getUserData } from '@/utils/getUserData'
export async function POST(req:NextRequest, res: NextResponse){
    const { userProfile } = await getUserData();
 const headersList = headers();
 const { addedTokens }= await req.json();
 const lineItems = [{
     price: process.env.STRIPE_PRODUCT_PRICE_ID,
     quantity: addedTokens ? addedTokens / 10 : 0,
 }]
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            payment_intent_data: {
                metadata: {
                    sub: userProfile?.sub,
                    addedTokens,
                },
            },
            metadata:{
                sub: userProfile?.sub,
                addedTokens,
            },
            success_url: `${headersList.get("origin")}/token-topup/success`,
            cancel_url: `${headersList.get("origin")}/`,
        });

        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        return NextResponse.json({error: "Error creating checkout session"});
    }
}
