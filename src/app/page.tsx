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
                    The AI-powered SAAS solution to generate SEO-optimized blog posts in
                    minutes. Get high-quality content, without sacrificing your time.
                </p>
                <Link href="/token-topup" className="btn text-left">
                    Start
                </Link>
            </div>
        </main>
    );
}
