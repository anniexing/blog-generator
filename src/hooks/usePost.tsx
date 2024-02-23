import { PostContextType, PostContext } from '@/context/PostProvider'
import { useContext } from 'react'

const usePost = (): PostContextType => {
    return useContext(PostContext)
}

export default usePost
