'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AvailableTokens() {

    return (
        <div>
            <Link href="/token-topup">60 available tokens</Link>
        </div>
    )
}
