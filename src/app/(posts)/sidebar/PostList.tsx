'use client'
import { IPost} from '@/models/Post'
import Link from 'next/link';
import usePost from '@/hooks/usePost'
import { MouseEventHandler, useEffect, useState } from 'react'
import { archivePost, getPosts } from '@/services/Posts'
import { redirect, useParams, useRouter } from 'next/navigation'

const PostList = () => {
    const { posts, dispatchPopOverPostId, dispatchArchivePost, dispatchFetchPosts }= usePost();
    const [hoveredPostId, setHoveredPostId] = useState("");
    const [activePosts, setActivePosts] = useState<IPost[]>([]);
    const params = useParams();
    const router = useRouter();
    useEffect(() => {
        //setActivePosts(posts.filter(post => !post?.isArchived))
    }, [posts])
    const handleMouseEnter = (postId:string) => {
        setHoveredPostId(postId)
    }

    const handleMouseLeave = () => {
        setHoveredPostId("")
    }

    const handleArchivePost =(postId:string)=> {
        archivePost(postId).then(data => {
            debugger;
            dispatchArchivePost(data);
            if(params.postId === postId) {
                router.push("/post/new");
            }
        })
    }

    return (
        <ul>
            {posts && posts.length > 0 && posts.map((post:IPost) => (
                <li key={post._id} onMouseEnter={() => handleMouseEnter(post._id)} onMouseLeave={handleMouseLeave}
                    className='relative grow  whitespace-nowrap hover:bg-stone-200 hover:text-black rounded'>
                    <div
                        className="group rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                        <Link href={`/post/${post._id}`}
                              className='flex items-center gap-2 p-2 @apply text-slate-700 text-base'>
                            <div className='relative flex-1 overflow-hidden whitespace-nowrap'>
                                <span className='relative z-1 overflow-hidden'>{post?.topic}</span>
                                <div
                                    className='absolute bottom-0 right-0 top-0 bg-gradient-to-l  to-transparent from-stone-100 w-8 from-0% group-hover:w-20 group-hover:from-stone-200 group-hover:from-0%'></div>
                            </div>
                            <div className={`relative pl-3 ${hoveredPostId === post._id ? '' : 'hidden'}`}
                                 title="Archive"
                                 onClick={() => handleArchivePost(post._id)}>
                                {
                                    /**
                                     * <svg className='h-4 w-4 text-slate-900'
                                     *                                      viewBox='0 0 24 24' fill='none'
                                     *                                      stroke='currentColor'
                                     *                                      strokeWidth='2'
                                     *                                      strokeLinecap='round'
                                     *                                      strokeLinejoin='round'>
                                     *                                     <circle cx='12' cy='12' r='1' />
                                     *                                     <circle cx='19' cy='12' r='1' />
                                     *                                     <circle cx='5' cy='12' r='1' />
                                     *                                 </svg>
                                     */
                                }

                                <svg className="h-4 w-4 text-slate-900" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>

                            </div>

                        </Link>


                    </div>

                </li>
            ))}
        </ul>
    )
}

export default PostList
