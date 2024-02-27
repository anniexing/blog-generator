import { IPost } from '@/models/Post'
export async function generatePosts({topic, keywords}:IPost) {
    try {
        const response = await fetch('/api/generatePost', {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({topic, keywords}),
        })
        if (!response.ok) {
            throw new Error('Failed to submit the data. Please try again.')
        }
        return await response.json();
    }catch (e){
        console.log(e);
    }
}

export async function getPosts() {
    try {
        const response = await fetch('/api/getPosts', {method: 'GET'});
        if(!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        return await response.json()
    }catch (e) {
        console.log(e)
    }
}

export interface  ParamsProps {
    postId?: string;
}

export async function getPostByPostId(params:ParamsProps){
    try {
        const response = await fetch(`/api/getPost/${params.postId}`, {
            method:'GET'
        });
        if(!response.ok) {
            throw new Error("Failed to get post by postId");
        }
        return await response.json();
    }catch (e){
        console.log(e);
    }

}

export async function deletePost({postId}: ParamsProps) {
    try {
        const response = await fetch(`/api/deletePost/${postId}`, {method: 'DELETE'});
        if(!response.ok){
            throw new Error("Failed to get post by postId");
        }

    }catch (e){
        console.log(e);
    }
}
