import React from 'react'
import PostProvider from '@/app/PostProvider';
import SideBar from '@/app/(posts)/sidebar/SideBar'
export default function Layout({
children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="grid grid-cols-[260px_1fr] gap-0">
            <PostProvider>
                <div><SideBar /></div>
                <div>{children}</div>
            </PostProvider>
        </section>
    )

}
