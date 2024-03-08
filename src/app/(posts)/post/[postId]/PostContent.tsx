'use client'
import { useEffect, useState } from 'react'
import { getPostByPostId, getPosts } from '@/services/Posts'
import { useParams, useRouter } from 'next/navigation'
import { IPost } from '@/models/Post'
import usePost from '@/hooks/usePost'
import { ParamsProps } from '@/models/Post'

export default function PostContent(){
    const router = useRouter();
    const { dispatchGetPostById, dispatchFetchPosts }= usePost();
  const [post, setPost] = useState<IPost>();
  const params:ParamsProps = useParams();
    useEffect(() => {
        getPostByPostId(params).then(data => {
         dispatchGetPostById(data)
            if(data.isArchived) {
                router.push("/post/new");
            } else {
                setPost(data)
            }

         })
    }, [params.postId, dispatchGetPostById])
    useEffect(() => {
        getPosts().then(data => {
            dispatchFetchPosts(data.posts);
        })
    },[])


        return (
            <div className="p-5">
                <div className="text-sm font-bold mt-6 p-2 bg-stone-200 rounded-sm">
                    SEO title and meta description
                </div>
                <div className="p-4 my-2 border border-stone-200 rounded-md">
                    <div className="text-blue-600 text-2xl font-bold">{post?.title}</div>
                    <div className="mt-2">{post?.metaDescription}</div>
                </div>
                <div className="text-sm font-bold mt-6 p-2 bg-stone-200 rounded-sm">
                    Keywords
                </div>
                <div className="flex flex-wrap pt-2 gap-1">
                    {post?.keywords?.split(',').map((keyword, i) => (
                        <div key={i} className="p-2 rounded-full bg-slate-800 text-white">
                            # {keyword}
                        </div>
                    ))}
                </div>
                <div className="text-sm font-bold mt-6 p-2 bg-stone-200 rounded-sm">
                    Blog post
                </div>
                <div dangerouslySetInnerHTML={{ __html: post?.postContent || '' }} />
            </div>
        )
}
