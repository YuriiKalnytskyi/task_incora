import {SET_USERS, SET_POSTS, SET_POSTS_ID, SET_COMMENTS_ID, DELETE_POSTS} from "../actionTypes";

const initialState = {
    users:[],
    posts:[],
    comments:[]
}
export const userReduser =(state=initialState , action)=>{
    switch (action.type) {
        case SET_USERS:{
            return {
                ...state,
                users: action.payload
            }
        }
        case SET_POSTS:{
            return {
                ...state,
                posts: action.payload
            }
        }
        case SET_POSTS_ID:{
            return {
                ...state,
                posts: action.payload
            }
        }
        case SET_COMMENTS_ID:{
            return {
                ...state,
                comments: action.payload
            }
        }
        case DELETE_POSTS:{
            return {
                ...state,
                posts: action.payload
            }
        }

        default: return state
    }
}