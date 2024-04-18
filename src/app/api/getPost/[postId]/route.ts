import { connectDB } from '@/lib/connectedDB'
import { ObjectId } from 'mongodb';
import { type NextRequest, NextResponse } from 'next/server'
import { getUserData } from '@/utils/getUserData'

//route: { params: { postId: string } }
export async function GET(request: NextRequest, { params }: { params: { postId: string}}) {
    const {db} = await connectDB();
    const { userProfile } = await getUserData();
    const postsCollection =  db.collection("posts");
    const query = {
        _id: new ObjectId(params?.postId),
        userId: userProfile?._id
    };
    const post = await postsCollection.findOne(query);
    return NextResponse.json({
        _id: params?.postId,
        keywords: post?.keywords,
        topic: post?.topic,
        postContent: post?.postContent,
        title:post?.title,
        metaDescription: post?.metaDescription,
        userId: userProfile?._id,
        isArchived: post?.isArchived,
        created: post?.created
    }, { status:200});

}
