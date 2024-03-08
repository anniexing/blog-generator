'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function SideBarFooter() {
    const { user } = useUser();
    return (
        <div className="border-t border-t-slate-300 p-5 @apply text-slate-700">
            {!!user ?
                <>
                    <div className='min-w-[50px]'>
                        <div className='flex flex-col'>
                            {user.name}
                            <Link href='/api/auth/logout'>Log out</Link>
                        </div>
                    </div>
                </> : <Link href='/api/auth/login'>Login</Link> }

        </div>
    )
}

