import React from 'react'
import SideBar from '@/app/(posts)/sidebar/page'

export default function PostsLayout({
children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="grid grid-cols-[300px_1fr] gap-0">
            <div><SideBar /></div>
            <div>{children}</div>
        </section>
    )

}
