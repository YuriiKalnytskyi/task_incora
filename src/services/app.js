import axios from "axios";

let options = {
    baseURL:'https://jsonplaceholder.typicode.com'
}

let axiosInstance = axios.create(options);

const getAllUsers = () => {
    return axiosInstance.get('/users')
}
const getAllPosts = () => {
    return axiosInstance.get('/posts')
}
const getAllPostsId = (id) => {
    return axiosInstance.get('/posts?userId='+id)
}
const getCommentsId = (id) => {
    return axiosInstance.get('/comments?postId='+id)
}
const postPost = (a) => {
    return axiosInstance.post('/posts',a)
}
const putPostService = (id,a) => {
    return axiosInstance.put(`/posts/${id}`,a)
}
const deletePostService = (id) => {
    return axiosInstance.delete(`/posts/${id}`)
}


export {
    getAllUsers, getAllPosts ,getAllPostsId, getCommentsId , postPost, putPostService, deletePostService
}