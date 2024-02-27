import { connectDB } from '@/lib/connectedDB'
import { ObjectId } from 'mongodb';
import { type NextRequest, NextResponse } from 'next/server'
import { getUserData } from '@/utils/getUserData'

//route: { params: { postId: string } }
export async function DELETE(request: NextRequest, { params }: { params: { postId: string}}) {
    const {db} = await connectDB();
    const { userProfile } = await getUserData();
    const postsCollection =  db.collection("posts");
    const query = {
        _id: new ObjectId(params?.postId),
        userId: userProfile?._id
    };
    const result = await postsCollection.deleteOne(query);
    if (result.deletedCount === 1) {
        return NextResponse.json({message: "Successfully deleted one post."}, { status: 200})
    } else {
        return NextResponse.json({message: "No documents matched the query. Deleted 0 documents."}, { status: 403})
    }

}
