import { createContext, ReactElement } from 'react'
import { usePostContext } from './PostReducer'

export type PostContextType = ReturnType<typeof usePostContext>

const initPostContextState: PostContextType = {
    dispatch: () => {},
    dispatchFetchPosts: () => {},
    posts: [],
}

type Children = { children?: ReactElement | ReactElement[] }

export const PostContext = createContext<PostContextType>(
    initPostContextState,
)
export const PostProvider = ({ children }: Children): ReactElement => {
    return (
        <PostContext.Provider value={usePostContext()}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider
