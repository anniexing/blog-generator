'use client'
import { IPost} from '@/models/Post'
import Link from 'next/link';
import usePost from '@/hooks/usePost'
import { useEffect, useState } from 'react'
import { getPosts } from '@/services/Posts'

const PostList = () => {
    const [isShowMore,setIsShowMore] = useState<boolean>(false);
    const { posts, dispatchFetchPosts } = usePost();

    useEffect(() => {
        getPosts().then(data => {
            dispatchFetchPosts(data.posts);
        })

    }, [])
    return (
        <ul>
            {posts && posts.length > 0 && posts.map((post:IPost) => (
                <li key={post?._id}
                    className='relative grow overflow-hidden whitespace-nowrap hover:bg-stone-200 hover:text-black rounded'>
                    <div className="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                        <Link href={`/post/${post._id}`} className='flex items-center gap-2 p-2'>
                        <span className='relative flex-1 mr-5 w-10 overflow-hidden'>
                            {post?.topic}
                            <div
                                className='absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-token-sidebar-surface-primary w-8 from-token-sidebar-surface-primary from-0% group-hover:w-20 group-hover:from-token-sidebar-surface-secondary group-hover:from-60%'>

                            </div>
                        </span>
                        <span className="bg-stone-200" onMouseEnter={(event) => { event.preventDefault(); setIsShowMore(true)}}>
                            <svg className='h-4 w-4 text-slate-900'
                                 viewBox='0 0 24 24' fill='none'
                                 stroke='currentColor'
                                 strokeWidth='2'
                                 strokeLinecap='round'
                                 strokeLinejoin='round'>
                                <circle cx='12' cy='12' r='1' />
                                <circle cx='19' cy='12' r='1' />
                                <circle cx='5' cy='12' r='1' />
                            </svg>
                        </span>
                        </Link>
                        {isShowMore && <div className="absolute top-0 right-0 hidden">
                            <ul>
                                <li className="leading-3">
                                    <button type='button' className='flex flex-row'>
                                        <svg className='h-4 w-4 text-slate-900'
                                             viewBox='0 0 24 24'
                                             strokeWidth='2' stroke='currentColor'
                                             fill='none'
                                             strokeLinecap='round'
                                             strokeLinejoin='round'>
                                            <path stroke='none' d='M0 0h24v24H0z' />
                                            <path d='M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                                            <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                                            <line x1='16' y1='5' x2='19' y2='8' />
                                        </svg>
                                        <span className='text-xs ml-2'>Rename</span>
                                    </button>

                                </li>
                                <li>
                                    <button type="button" className="flex flex-row">
                                        <svg className="h-4 w-4 text-slate-900"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             strokeWidth="2"
                                             stroke="currentColor"
                                             fill="none"
                                             strokeLinecap="round"
                                             strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1="4" y1="7" x2="20" y2="7" />
                                            <line x1="10" y1="11" x2="10" y2="17" />
                                            <line x1="14" y1="11" x2="14" y2="17" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>
                                        <span className="text-xs ml-2">Delete Blog</span>
                                    </button>
                                </li>
                            </ul>
                        </div>}

                    </div>

                </li>
            ))}
        </ul>
    )
}

export default PostList
