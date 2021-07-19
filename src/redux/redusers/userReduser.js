import {SET_USERS, SET_POSTS, SET_POSTS_ID} from "../actionTypes";

const initialState = {
    users:[],
    posts:[],
    port:[]
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

        default: return state
    }
}