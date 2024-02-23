import SideBar from '@/app/(posts)/sidebar/page'
import NewPost from '@/app/(posts)/post/new/page'

export default function MainPage() {
    return (
        <section>
            <SideBar />
            <NewPost />
        </section>
    )
}
