import { IPost, IPostForm, ParamsProps } from '@/models/Post'
export async function generatePost({topic, keywords}:IPostForm) {
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

export async function archivePost(postId:string) {
    try {
        const response = await fetch(`/api/archivePost/${postId}`, {method: 'POST'});
        if(!response.ok){
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
