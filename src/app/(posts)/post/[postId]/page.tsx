import PostContent from '@/app/(posts)/post/[postId]/PostContent'
import { Suspense } from 'react'

export default function Page() {
    return (
        <section className="overflow-auto h-svh">
            <Suspense fallback={<div>Loading post content</div>}>
                <PostContent />
            </Suspense>

        </section>
    )
}



