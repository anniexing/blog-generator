import { NextResponse } from 'next/server'
import { getSession } from '@auth0/nextjs-auth0'
import { connectDB } from '@/lib/connectedDB'
import clientPromise from '@/lib/mongodb'

export async  function POST(req:Request) {
    const session = await getSession();
    if(!session) {
        throw new Error("Requires authentication")
    }
    const { user } = session;
    const {db}= await connectDB();
    const userProfile = db.collection('users').findOne({
        auth0Id: user.sub
    })
    return NextResponse.json({ userProfile }, {status: 200});
}
