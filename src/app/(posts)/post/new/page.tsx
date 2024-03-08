'use client'
import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { generatePost } from '@/services/Posts'
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
        generatePost({topic, keywords}).then(data => {
            dispatchGeneratePost(data)
            if(data?.postId){
                router.push(`/post/${data.postId}`)
            }
        }).finally(()=>{
            setIsGenerating(false);
        })

    }

    useEffect(() => {

    }, [])



    return (
        <section className="h-svh p-5 flex align-middle">
            <form onSubmit={onHandleSubmit} className="m-auto w-full max-w-screen-sm bg-slate-100 p-4 rounded-md shadow-xl border border-slate-200 shadow-slate-200 ">
                <div>
                    <label htmlFor="topic"> Please input the topic that you want to be generated</label>
                    <textarea
                        name="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full block border border-slate-500 resize-none my-2 px-4 py-2 rounded-sm" />
                </div>
                <div>
                    <label htmlFor="keywords"> Please input the keywords that you want to be generated</label>
                    <textarea
                        name="keywords"
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
