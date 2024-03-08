export interface IPost {
    _id: string;
    postId?:string;
    title?: string;
    metaDescription?: string;
    postContent?: string;
    topic: string;
    keywords: string;
    created?: Date;
    isArchived?:boolean
}

export interface IPostForm {
    topic: string;
    keywords: string;
}

export interface  ParamsProps {
    postId?: string;
}

export interface IPostsState {
    posts: IPost[];
    popOverPostId?: string;
}

export enum PostActionType {
    GENERATE_POST = 'GENERATE_POST',
    FETCH_POST_BY_ID= 'FETCH_POST_BY_ID',
    FETCH_POSTS = 'FETCH_POSTS',
    DELETE_POST = 'DELETE_POST',
    ADD_TOKENS = 'ADD_TOKENS',
    POPOVER_ACTIONS = 'POPOVER_ACTIONS',
    ARCHIVE_POST = 'ARCHIVE_POST',
}

interface GeneratePostAction {
    type: PostActionType.GENERATE_POST,
    payload: IPost
}
interface FetchPostByIdAction {
    type: PostActionType.FETCH_POST_BY_ID,
    payload: IPost
}

interface FetchPostsAction {
    type: PostActionType.FETCH_POSTS,
    payload: IPost[]
}

interface ArchivePostAction {
    type: PostActionType.ARCHIVE_POST,
    payload: IPost
}

interface DeletePostAction {
    type: PostActionType.DELETE_POST,
    payload: ParamsProps
}

interface AddTokensAction {
    type: PostActionType.ADD_TOKENS,
    payload:number
}

interface PopOverAction {
    type: PostActionType.POPOVER_ACTIONS,
    payload: string
}

export type PostActions =
    | GeneratePostAction
    | FetchPostByIdAction
    | FetchPostsAction
    | DeletePostAction
    | AddTokensAction
    | PopOverAction
    | ArchivePostAction
