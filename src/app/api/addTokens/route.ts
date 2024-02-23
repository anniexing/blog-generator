import { getSession } from '@auth0/nextjs-auth0'
import { connectDB } from '@/lib/connectedDB'
import { NextResponse } from 'next/server'

export async function POST(request:Request){
    const session = await getSession();
    if(!session){
        throw new Error("Authentication Required");
    }
    const { user} = session;
    const {db} = await connectDB();
    const userProfile = await db.collection('users').updateOne({
        auth0Id: user.sub
    },{
        $inc:{
            availableTokens: 10
        },
        $setOnInsert:{
         auth0Id: user.sub
        }
    },
        {
            upsert: true
        }
    );
    return NextResponse.json({message:"Add Tokens successful "}, {status: 200})
}
