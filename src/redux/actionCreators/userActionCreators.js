import {getAllPosts, getAllPostsId, getAllUsers} from "../../services/app"
import {SET_POSTS, SET_POSTS_ID, SET_USERS} from "../actionTypes";

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

export const setUsers = (payload) => ({type:SET_USERS, payload})
export const setPosts = (payload) => ({type:SET_POSTS, payload})
export const setPostsId = (payload) => ({type:SET_POSTS_ID, payload})
