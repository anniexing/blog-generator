import { connectDB } from '@/lib/connectedDB'
import { getUserData } from '@/utils/getUserData'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const {db} = await connectDB();
    const { userProfile } = await getUserData();

    const posts = await db.collection("posts").find({
        userId: userProfile?._id,
        isArchived: false,
    }).sort({created:-1}).toArray();

    return NextResponse.json({posts}, {status: 200})
}
