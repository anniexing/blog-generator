'use client'
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'
import { generatePosts } from '@/services/Posts'
import usePost from '@/hooks/usePost'

export default function Page() {
    const router = useRouter();
    const [isGenerating, setIsGenerating] = useState(false);
    const [topic, setTopic] = useState('');
    const [keywords, setKeywords] = useState('');

    const {dispatchGeneratePost} = usePost();

    const onHandleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsGenerating(true);
        generatePosts({topic, keywords}).then(data => {
            dispatchGeneratePost({topic, keywords});
            if(data?.postId){
                router.push(`/post/${data.postId}`)
            }
        }).finally(()=>{
            setIsGenerating(false);
        })

    }

    return (
        <section className="h-svh p-5 flex align-middle">
            <form onSubmit={onHandleSubmit} className="m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200 ">
                <div>
                    <label htmlFor="topic"> Please input the topic that you want to be generated</label>
                    <textarea
                        name="topic"
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full block border border-slate-500 resize-none my-2 px-4 py-2 rounded-sm" />
                </div>
                <div>
                    <label htmlFor="keywords"> Please input the keywords that you want to be generated</label>
                    <textarea
                        name="keywords"
                        id="keyword"
                        value={keywords}
                        onChange={(e)=> setKeywords(e.target.value)}
                        className="w-full block border border-slate-500 resize-none my-2 px-4 py-2 rounded-sm" />
                    <strong><small><em>Using comma to separate the keywords</em></small></strong>
                </div>
                {isGenerating && <p>Generating Blog, Please wait ...</p>}
                <button type="submit" className="btn" disabled={!topic.trim() || !keywords.trim() || isGenerating}>Generate Blogs</button>
            </form>
        </section>
    )
}
