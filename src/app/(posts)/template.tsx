'use client'
import React, { useEffect } from 'react'
import usePost from '@/hooks/usePost'
import { getPosts } from '@/services/Posts'

export default function Template({ children }: { children: React.ReactNode }) {
    const { dispatchFetchPosts } = usePost();
    useEffect(() => {
        getPosts().then(data => {
            dispatchFetchPosts(data.posts);
        })
    },[])
    return <div>{children}</div>
}
