import SideBarFooter from '@/app/(posts)/sidebar/footer'
import Link from 'next/link'
import PostList from '@/app/(posts)/sidebar/PostList'
import AvailableTokens from '@/app/(posts)/sidebar/AvailableTokens'

export default function SideBar(){
    return (
        <div className="grid grid-rows_[1fr_50px] bg-stone-100 text-black h-full max-h-screen">
           <div className="flex flex-col text-black overflow-hidden">
               <div className='px-2'>
                   <div className="w-full flex">
                       <Link className='p-2 flex-1 flex flex-row items-center hover:bg-stone-200 hover:text-black rounded text-slate-700'
                             href='/post/new'>
                           <span className="flex-1">New Post</span>
                           <svg className="h-4 w-4 text-slate-700" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                               <path stroke="none" d="M0 0h24v24H0z" />
                               <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                               <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                               <line x1="16" y1="5" x2="19" y2="8" />
                           </svg>
                       </Link>
                   </div>
                   <AvailableTokens />
               </div>
               <div className='flex-1 overflow-auto p-2 pt-0'>
                   <PostList />
               </div>
               <SideBarFooter />
           </div>

        </div>
    )
}
