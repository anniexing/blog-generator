import { connectDB } from '@/lib/connectedDB'
import { ObjectId } from 'mongodb';
import { type NextRequest, NextResponse } from 'next/server'
import { getUserData } from '@/utils/getUserData'

//route: { params: { postId: string } }
export async function GET(request: NextRequest, { params }: { params: { postId: string}}) {
    const {db} = await connectDB();
    const { userProfile } = await getUserData();
    const post = await db.collection("posts").findOne({
        _id: new ObjectId(params?.postId),
        userId: userProfile?._id
    })
    return NextResponse.json({
        id: post?._id,
        title: post?.title,
        metaDescription: post?.metaDescription,
        postContent: post?.postContent,
        topic: post?.topic,
        keywords: post?.keywords,
    })
}
