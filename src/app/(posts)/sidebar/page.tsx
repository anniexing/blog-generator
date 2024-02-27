import SideBarFooter from '@/app/(posts)/sidebar/footer'
import Link from 'next/link'
import { Logo } from '@/components/Logo';
import PostList from '@/app/(posts)/sidebar/PostList'
import AvailableTokens from '@/app/(posts)/sidebar/AvailableTokens'

export default function SideBar(){
    return (
        <div className="grid grid-rows_[1fr_50px] bg-stone-100 text-black h-full max-h-screen">
           <div className="flex flex-col text-black overflow-hidden">
               <div className='p-5'>
                   <Logo />
                   <div className="my-5">
                       <Link className='btn' href='/post/new'>New Post</Link>
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
