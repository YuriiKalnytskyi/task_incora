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
export {
    getAllUsers, getAllPosts ,getAllPostsId
}