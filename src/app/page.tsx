import Image from 'next/image'
import BgImage from '../../public/bg.jpg';
import Link from 'next/link';
import { Logo } from "@/components/Logo"



export default function Home() {
    return (
        <main className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
            <Image src={BgImage} alt="OPENAI" fill className="absolute" />
            <div
                className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
                <Logo />
                <p>
                    Discover the power of our AI-driven SaaS solution that crafts SEO-optimized blog posts in just minutes. Achieve high-quality content effortlessly, saving you time and enhancing your digital presence.
                </p>
                <Link href="/post/new" className="btn text-left">
                    Start
                </Link>
            </div>
        </main>
    );
}
