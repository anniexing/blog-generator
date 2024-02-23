import { getSession } from '@auth0/nextjs-auth0'
import { connectDB } from '@/lib/connectedDB'

export async function getUserData() {
    const session = await getSession();

    if(!session) {
        throw new Error('Authentication required');
    }

    const { user }= session;

    const {db} = await connectDB();
    const userProfile = await db.collection("users").findOne({
        auth0Id: user.sub
    })

    return {userProfile}
}
