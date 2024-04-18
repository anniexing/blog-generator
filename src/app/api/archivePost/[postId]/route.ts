import { getUserData } from '@/utils/getUserData'
import { connectDB } from '@/lib/connectedDB'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request, { params }: { params: {postId: string }}){
    const { userProfile } = await getUserData();
    const {db} = await connectDB();

    const postsColl = db.collection('posts');
    const filter = {
        _id: new ObjectId(params?.postId),
        userId: userProfile?._id
    }
    const post = await postsColl.findOne(filter);

    const update = {
        $set:{
            isArchived: true
        }
    }

    const options = {
        upsert: true
    }

    if(!post?.isArchived){
        await postsColl.updateOne(filter,update, options)
    }

    return NextResponse.json({...post, isArchived: true, postId: post?._id}, { status:200})

}
