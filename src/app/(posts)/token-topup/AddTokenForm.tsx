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
        <section
            className='m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200 '>
            <h2 className="flex flex-row items-center gap-2 py-5">
                <svg className='h-30 w-30 text-slate-700' width='48' height='48' viewBox='0 0 24 24' strokeWidth='2'
                     stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <rect x='3' y='8' width='18' height='4' rx='1' />
                    <line x1='12' y1='8' x2='12' y2='21' />
                    <path d='M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7' />
                    <path d='M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5' />
                </svg>
                You have 60 Tokens available
            </h2>
            <form onSubmit={onHandlerSubmit}>
                <label htmlFor='tokens'>Buy Tokens</label>
                <input
                    type='number'
                    id='tokens'
                    step={10}
                    value={addedTokens}
                    className='w-full block border border-slate-500 my-2 px-4 py-2 rounded'
                    onChange={e => setAddedTokens(Number(e.target.value))} />
                <div className="w-full items-center"><small> 1 token = 1 post</small></div>
                <div className="w-full items"><small> Buy 10 tokens for 40SEK</small></div>
                <button type='submit' className='btn' disabled={!addedTokens}>Buy Tokens</button>
        </form>
        </section>
    )
}

export default AddTokenForm;
