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
