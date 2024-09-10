import React from 'react'
import PostProvider from '@/app/PostProvider';
import Toggle from '@/app/(posts)/sidebar/Toggle';
export default function Layout({
children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="grid md:grid-cols-[260px_1fr] gap-0 ">
            <PostProvider>
                <Toggle />
                <div>{children}</div>
            </PostProvider>
        </section>
    )

}
