import { useCallback, useReducer } from 'react'
import { IPost, IPostsState, PostActions, PostActionType } from '@/models/Post'

export const initPostsState: IPostsState = { posts: [], popOverPostId:'' }

export const postReducer = (
    state: IPostsState = initPostsState,
    action: PostActions,
): IPostsState => {
    switch (action.type) {
        case PostActionType.GENERATE_POST: {
            if (!action.payload) {
                throw new Error('action.payload is missing in GENERATE_POST')
            }
            const post = action.payload;
            const filterPost = state.posts.filter(postItem => postItem.postId !==  post.postId);
            if(filterPost && filterPost.length > 0) {
                return {...state, posts: [post, ...state.posts]}
            }
            return state;
        }
        case PostActionType.FETCH_POSTS: {
            return { ...state, posts: action.payload }
        }
        case PostActionType.DELETE_POST: {
            const postId = action.payload;
            const newPosts = state.posts?.filter((postItem:IPost) => postItem._id !== postId);
            return {...state, posts: newPosts}
        }
        case PostActionType.FETCH_POST_BY_ID: {
            return state
        }

        case PostActionType.POPOVER_ACTIONS: {
            const postId = action.payload;
            return {...state, popOverPostId: postId}
        }

        case PostActionType.ARCHIVE_POST: {
            debugger;
            const posts = state.posts.filter(post => post._id !== action.payload.postId)
            return {...state, posts}
        }
        default: {
            return state
        }
    }
}

export const usePostContext = () => {
    const [state, dispatch] = useReducer(postReducer, initPostsState)
    const posts = state.posts
    const popOverPostId = state.popOverPostId;
    const dispatchGeneratePost = useCallback((post:IPost) => dispatch({ type: PostActionType.GENERATE_POST, payload: post}),[])

    const dispatchFetchPosts = (posts: IPost[]) =>
        dispatch({ type: PostActionType.FETCH_POSTS, payload: posts })

    const dispatchGetPostById = useCallback((post: IPost) => dispatch({type: PostActionType.FETCH_POST_BY_ID, payload: post}), [])

    const dispatchDeletePost = useCallback((postId: string) => dispatch({type: PostActionType.DELETE_POST, payload: { postId }}), [])

    const dispatchPopOverPostId = useCallback((postId:string)=>dispatch({type: PostActionType.POPOVER_ACTIONS, payload: postId}), [])

    const dispatchArchivePost = useCallback((post:IPost) => dispatch({type: PostActionType.ARCHIVE_POST, payload: post}), [])
    return {
        posts,
        popOverPostId,
        dispatchFetchPosts,
        dispatchGeneratePost,
        dispatchDeletePost,
        dispatchGetPostById,
        dispatchPopOverPostId,
        dispatchArchivePost
    }
}
