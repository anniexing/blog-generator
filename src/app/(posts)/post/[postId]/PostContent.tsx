'use client'
import { useEffect, useState } from 'react'
import { getPostByPostId, ParamsProps } from '@/app/(posts)/post/[postId]/services'
import { useParams } from 'next/navigation'


interface Post {
    title: string;
    metaDescription: string;
    postContent: string;
    keywords: string;
    topic: string;

}
export default function PostContent(){
  const [post, setPost] = useState<Post>();
  const params:ParamsProps = useParams();
    useEffect(() => {
        getPostByPostId(params).then(data => setPost(data));
    }, [params])
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
