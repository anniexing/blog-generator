'use client'
import { useState} from 'react'
import { addTokens } from '@/app/(posts)/token-topup/services'

const  AddTokenForm = () => {
    const [tokensNumber, setTokensNumber] = useState(10);
    return (
        <form onSubmit={addTokens}
              className="m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200 ">
            <div>
                <label htmlFor="tokens">Add Tokens number</label>
                <input type="number" name="tokensNumber" value={tokensNumber} className="w-full block border border-slate-500 my-2 px-4 py-2 rounded-sm" onChange={e => setTokensNumber(Number(e.target.value))} />
            </div>
            <button type="button" className="btn" disabled={!tokensNumber}>Add Tokens</button>
        </form>
    )
}

export default AddTokenForm;
