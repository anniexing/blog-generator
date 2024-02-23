import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse} from 'next/server'
import { connectDB } from '@/lib/connectedDB'
import { openAIMain } from '@/app/api/generatePost/openaiAPI'
import { getUserData } from '@/utils/getUserData'


export async function POST(request: Request) {
    try{
        const {db} = await connectDB();
        const { userProfile }  = await getUserData();

        if(!userProfile?.availableTokens) {
            return NextResponse.json({}, {status: 403})
        }

        const body = await request.json();
        const { topic, keywords} = body;

        if(!topic || !keywords){
            return NextResponse.json("topic and keyword are should not be empty", {status: 403})
        }

        if(topic.length > 100 || keywords.length > 100){
            return NextResponse.json("topic or keywords is too long", {status: 422})
        }

        const { postContent, title, metaDescription} = await openAIMain({topic, keywords})

        const post = await db.collection("posts").insertOne({
            postContent: postContent || '',
            title: title || '',
            metaDescription: metaDescription || '',
            topic,
            keywords,
            userId: userProfile._id,
            created: new Date(),
        })
        return NextResponse.json({postId: post.insertedId}, {status:200})

    }catch (e) {
        return NextResponse.json({error: "Failed to load data"}, {status:500})
    }
};
