'use client'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function SideBarFooter() {
    const { user } = useUser();
    const [isShow, setIsShow] = useState(false);
    const onHandleShow = () => {
        setIsShow(!isShow);
    }
    return (
        <div className="border-t border-t-slate-300 p-5 @apply text-slate-700 relative">
            {!!user ?
                <>
                    <div className='min-w-[50px] flex flex-row gap-2 items-center'>
                        <Image src={user?.picture!} alt={user?.name!} width={50} height={50} className="rounded-full" />
                        <div className='flex flex-col'>
                            <span onClick={() => onHandleShow()}>
                               {user.name}
                            </span>
                        </div>
                    </div>
                    <div className={`absolute -top-full  left-5 z-100 bg-white p-5 popover min-w-[210px] max-w-xs rounded-lg border ${isShow ? '' : "hidden"}`}>
                        <ul>
                            {/** <li>Archived Posts </li>**/}
                            <li><Link href='/api/auth/logout'>Log out</Link></li>
                        </ul>
                    </div>
                </> : <Link href='/api/auth/login'>Login</Link>}

        </div>
    )
}

