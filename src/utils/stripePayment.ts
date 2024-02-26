import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server'
import { Claims } from '@auth0/nextjs-auth0'
import {headers} from "next/headers";

const STRIPE_SECRET_KEY= process.env.STRIPE_SECRET_KEY || '';
const STRIPE_PRODUCT_PRICE_ID = process.env.STRIPE_PRODUCT_PRICE_ID;
const stripe = new Stripe(STRIPE_SECRET_KEY);
export async function stripePayment(request: Request, user:Claims) {
    const headersList = headers();
    const body = await request.json();
    const { addTokens } = body;

    const lineItems = {
        price: STRIPE_PRODUCT_PRICE_ID,
        quantity: addTokens ? addTokens/10 : 0,
    }

    const checkoutSession = stripe.checkout.sessions.create({
        line_items: [lineItems],
        mode: "payment",
        success_url:`${headersList.get("origin")}/success`,
        cancel_url: `${headersList.get("origin")}/`,
        payment_intent_data: {
            metadata: {
                sub: user.sub,
            },
        },
        metadata: {
            sub: user.sub,
        },

    })
    return {checkoutSession};
}
