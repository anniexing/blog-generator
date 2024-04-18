'use client'
import Link from 'next/link'

export default function AvailableTokens() {

    return (
        <div className="w-full text-slate-700">
            <Link className="flex flow-row items-center py-3 p-2 hover:bg-stone-200 hover:text-black rounded" href="/token-topup">
                <span className="flex-1">60 available tokens</span>
                <svg className="h-4 w-4 text-slate-700" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="8" width="18" height="4" rx="1" />
                    <line x1="12" y1="8" x2="12" y2="21" />
                    <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                </svg>
            </Link>
        </div>
    )
}
