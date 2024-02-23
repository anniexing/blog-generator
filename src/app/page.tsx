import SideBar from '@/app/(posts)/sidebar/page'
import NewPost from '@/app/(posts)/post/new/page'


export default function Home() {
    return (
    <main className="w-screen h-screen">
        <section className="grid grid-cols-[260px_1fr] gap-0">
            <SideBar />
            <NewPost />
        </section>
    </main>
  );
}
