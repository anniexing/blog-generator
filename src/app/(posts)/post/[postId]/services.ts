export interface  ParamsProps {
    postId?: string;
}

export async function getPostByPostId(params:ParamsProps){
    const response = await fetch(`/api/getPost/${params.postId}`, {
        method:'GET'
    });
    if(!response.ok) {
        throw new Error("Failed to get post by postId");
    }


    return await response.json();
}
