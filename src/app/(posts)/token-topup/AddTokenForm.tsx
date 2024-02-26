'use client'
import { FormEvent, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';

const  AddTokenForm = () => {
    const [addedTokens, setAddedTokens] = useState(10);
     const onHandlerSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
         try {
         const stripe = await loadStripe(process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string);
         if (!stripe) throw new Error('Stripe failed to initialize.');

         const checkoutResponse = await fetch('/api/addTokens', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({addedTokens}),
            });
             const {sessionId} = await checkoutResponse.json();
             const stripeError = await stripe.redirectToCheckout({sessionId});
             if (stripeError) {
                 console.error(stripeError);
             }
        } catch (error) {
            console.log(error);
        }


    }
    return (
        <form onSubmit={onHandlerSubmit}
              className="m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200 ">
            <div>
                <label htmlFor="tokens">Add Tokens number</label>
                <input
                    type="number"
                    name="tokensNumber"
                    value={addedTokens}
                    className="w-full block border border-slate-500 my-2 px-4 py-2 rounded-sm"
                    onChange={e => setAddedTokens(Number(e.target.value))} />
            </div>
            <button type="submit" className="btn" disabled={!addedTokens}>Add Tokens</button>
        </form>
    )
}

export default AddTokenForm;
