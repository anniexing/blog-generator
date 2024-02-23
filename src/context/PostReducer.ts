import { useReducer } from 'react'
import {
    PostActionType,
    IPost,
    IPostsState,
    PostActions,
} from '@/models/Post'

export const initPostsState: IPostsState = { posts: [] }

export const postReducer = (
    state: IPostsState = initPostsState,
    action: PostActions,
): IPostsState => {
    switch (action.type) {
        case PostActionType.FETCH_POSTS: {
            return { ...state, posts: action.payload }
        }

        default: {
            return state
        }
    }
}

export const usePostContext = () => {
    const [state, dispatch] = useReducer(postReducer, initPostsState)
    const posts = state.posts

    const dispatchFetchPosts = (posts: IPost[] | undefined) =>
        dispatch({ type: PostActionType.FETCH_POSTS, payload: posts })

    const dispatchGeneratePost = ({topic,keywords}:IPost) => dispatch({ type: PostActionType.GENERATE_POST, payload:{topic, keywords}})

    return { dispatch, posts, dispatchFetchPosts, dispatchGeneratePost }
}
