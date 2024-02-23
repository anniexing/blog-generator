"use service"

export async function addTokens () {
    await fetch('/api/addTokens', {
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
    });
}
