import SideBar from '@/app/(posts)/sidebar/page'
import NewPost from '@/app/(posts)/post/new/page'
import { getPosts } from '@/services/Posts'

export default function MainPage() {
    return (
        <section>
            <SideBar />
            <NewPost />
        </section>
    )
}
