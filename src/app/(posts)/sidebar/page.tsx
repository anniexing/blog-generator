'use client'
import SideBarFooter from '@/app/(posts)/sidebar/footer'
import Link from 'next/link'

export default function SideBar(){
    const onHandlerAddToken = async () => {
        await fetch('/api/addTokens', {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
        });

    }
    return (
        <div className="grid grid-rows_[1fr_50px] bg-cyan-950 text-white h-svh max-h-screen">
           <div className="flex flex-col text-white overflow-hidden">
               <div className="p-5">
                   <div>Logo</div>
                   <div className="pb-0.5 last:pb-0">
                       <Link  className="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-medium hover:bg-token-sidebar-surface-secondary" href="/post/new">New Post</Link>
                   </div>
                   <div>
                       <strong>0 tokens available</strong>
                       <button
                           type="button"
                           className="btn"
                           onClick={onHandlerAddToken}
                       > Add Tokens</button>
                   </div>

               </div>
               <div className="flex-1 overflow-auto p-5">
                   list of posts
               </div>
               <SideBarFooter />
           </div>

        </div>
    )
}
