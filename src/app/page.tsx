import Image from 'next/image'
import BgImage from '../../public/bg.jpg';
import Link from 'next/link';
import { Logo } from "@/components/Logo"



export default function Home() {
    return (
        <main className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
            <Image src={BgImage} alt="OPENAI" fill className="absolute" />
            <div
                className="relative z-10 text-white px-10 py-5 text-left max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
                <Logo />
                <div className="my-5">
                    <p className="py-0 m-0">Unleash the full potential of your digital presence with our cutting-edge AI-driven SaaS solution. In mere minutes, transform your content creation process:</p>
                    <ol className="mx-5 list-disc">
                        <li>Craft SEO-optimized blog posts that dominate search rankings</li>
                        <li>Generate high-quality, engaging content that resonates with your audience</li>
                        <li>Save hours of valuable time, freeing you to focus on strategy and growth</li>
                    </ol>
                    <p>Ready to redefine your content game? Start your journey to unparalleled productivity and impact today!</p>
                </div>
                <Link href="/post/new" className="btn flex w-auto m-auto m:w-1/3 lg:w-1/4 self-center items-center justify-center text-center">
                    Start
                </Link>
            </div>
        </main>
    );
}
