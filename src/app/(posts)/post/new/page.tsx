'use client'
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();
    const [isGenerating, setIsGenerating] = useState(false);
    const [topic, setTopic] = useState('');
    const [keywords, setKeywords] = useState('');

    const onHandleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsGenerating(true);
        try {

            const response = await fetch('/api/generatePost', {
                method:'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify({topic, keywords}),
            })
            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }
            const data = await response.json();
            if(data?.postId){
                router.push(`/post/${data.postId}`)
            }
        }catch (error) {
            throw new Error('Get post error');
        }finally {
            setIsGenerating(false);
        }

    }

    return (
        <section className="h-svh p-5 align-middle">
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
                <button type="submit" className="btn" disabled={!topic.trim() || !keywords.trim()}>Generate Blogs</button>
            </form>
        </section>
    )
}
