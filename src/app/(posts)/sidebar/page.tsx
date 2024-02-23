'use client'
import SideBarFooter from '@/app/(posts)/sidebar/footer'
import Link from 'next/link'
import { Logo } from '@/components/Logo';

export default function SideBar(){
    return (
        <div className="grid grid-rows_[1fr_50px] bg-cyan-950 text-white h-svh max-h-screen">
           <div className="flex flex-col text-white overflow-hidden">
               <div className='p-5'>
                   <div className="p-5"><Logo /></div>
                   <div className='pb-0.5 last:pb-0'>
                       <Link className='btn'
                             href='/post/new'>
                           New Post</Link>
                   </div>
                   <div className='p-5'><Link href="/token-topup">0 tokens available</Link></div>

               </div>
               <div className='flex-1 overflow-auto p-5'>
               list of posts
               </div>
               <SideBarFooter />
           </div>

        </div>
    )
}
