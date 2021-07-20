import {getCommentsId, getAllPosts, getAllPostsId, getAllUsers, deletePostService} from "../../services/app"
import {DELETE_POSTS, SET_COMMENTS_ID, SET_POSTS, SET_POSTS_ID, SET_USERS} from "../actionTypes";

export const fetchUsers = () => async (dispatch) => {
    try {
        const res = await getAllUsers().then()
        const data = await res.data
        // console.log(data)
        dispatch(setUsers(data))
    }
    catch (e){
        console.log(e)
    }
}
export const fetchPosts = () => async (dispatch) => {
    try {
        const res = await getAllPosts().then()
        const data = await res.data
        console.log(data)
        dispatch(setPosts(data))
    }
    catch (e){
        console.log(e)
    }
}
export const fetchPostsId = (id) => async (dispatch) => {
    try {
        const res = await getAllPostsId(id).then()
        const data = await res.data
        console.log(data)
        dispatch(setPostsId(data))
    }
    catch (e){
        console.log(e)
    }
}
export const fetchCommentsId = (id) => async (dispatch) => {
    try {
        const res = await getCommentsId(id).then()
        const data = await res.data
        console.log(data)
        dispatch(setCommentsId(data))
    }
    catch (e){
        console.log(e)
    }
}


export const deletePostId = (id) => async (dispatch) => {
    try {
        const res1 = await deletePostService(id)
        console.log(res1)
        // const data = await res1.status
        // console.log(data)
        // dispatch(deletePosts(data))

        const res = await getAllPostsId(id)
        // console.log(res)
        const data = await res.data
        console.log(data)
        dispatch(setPosts(data))


    }
    catch (e){
        console.log(e)
    }
}

export const setUsers = (payload) => ({type:SET_USERS, payload})
export const setPosts = (payload) => ({type:SET_POSTS, payload})
export const setPostsId = (payload) => ({type:SET_POSTS_ID, payload})
export const setCommentsId = (payload) => ({type:SET_COMMENTS_ID, payload})
export const deletePosts = (payload) => ({type:DELETE_POSTS, payload})

