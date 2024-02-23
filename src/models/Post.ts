export interface IPost {
    _id?:string;
    title?: string;
    metaDescription?: string;
    postContent?: string;
    topic: string;
    keywords: string;
}


export interface IPostsState {
    posts?: IPost[] | undefined;
}

export enum PostActionType {
    GENERATE_POST = 'GENERATE_POST',
    FETCH_POST_BY_ID= 'FETCH_POST_BY_ID',
    FETCH_POSTS = 'FETCH_POSTS',
    DELETE_POST = 'DELETE_POST',
    ADD_TOKENS = 'ADD_TOKENS'
}

interface GeneratePostAction {
    type: PostActionType.GENERATE_POST,
    payload?:{topic:string; keywords:string}
}
interface FetchPostByIdAction {
    type: PostActionType.FETCH_POST_BY_ID,
}

interface FetchPostsAction {
    type: PostActionType.FETCH_POSTS,
    payload?: IPost[] | undefined
}

interface DeletePostAction {
    type: PostActionType.DELETE_POST
}

interface AddTokensAction {
    type: PostActionType.ADD_TOKENS,
    payload?:{
        tokensNumber: number
    }
}

export type PostActions =
    | GeneratePostAction
    | FetchPostByIdAction
    | FetchPostsAction
    | DeletePostAction
    | AddTokensAction
