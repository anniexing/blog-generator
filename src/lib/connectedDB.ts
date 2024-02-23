import clientPromise from '@/lib/mongodb';
export async function connectDB() {
    const client = await clientPromise;
    const db = client.db('BlogGenerator');
    return {db}
}
