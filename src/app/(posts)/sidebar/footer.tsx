'use client'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function SideBarFooter() {
    const { user } = useUser();
    return (
        <div className="border-t border-t-black/50 p-5">
            {!!user ?
                (<div><p>{user.name}</p>
                    <Link href="/api/auth/logout">Log out</Link></div>)
                : <Link href="/api/auth/login">Login</Link>
            }

        </div>
    )
}

