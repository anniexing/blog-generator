'use client'
import { useEffect, useState } from 'react'
import { getPosts } from '@/app/(posts)/sidebar/services'
import { IPost} from '@/models/Post'
import Link from 'next/link';

const PostList = () => {
   const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts().then(data => setPosts(data.posts))
    }, [])
    return (
        <ul>
            {posts && posts.length > 0 && posts.map(post => (
                <li key={post?._id} className="relative grow overflow-hidden whitespace-nowrap hover:bg-stone-200 hover:text-black rounded py-2">
                    <Link href={`/post/${post._id}`} className="">
                        {post?.topic}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PostList;
