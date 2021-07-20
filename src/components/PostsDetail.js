import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deletePostId, fetchPostsId} from "../redux";
import {Link} from "react-router-dom";
import {deletePostService} from "../services/app";

export default function PostsDetail({id}) {
    const dispatch = useDispatch();
    const { posts } = useSelector(({ users }) => (users));

    useEffect(()=>{
        dispatch(fetchPostsId(id))
    },[dispatch, id])


    const deleteOnePost = (id) =>{
        // dispatch(deletePostId(id))

        deletePostService(id).then(value => console.log(value))

    }

    return (
        <div>
            <h2>User {id}</h2><br/>
            {
                posts && posts.map((value, index) => {
                    return <div key={index}>
                        <div>
                             post {value.id}
                            <li>title {value.title}</li>
                            <li>body {value.body}</li>
                        </div>
                        <Link to={`/posts/${value.id}/update`}><button>Edit</button></Link>
                        <button onClick={()=>deleteOnePost(value.id)} >Delete</button>
                            <Link to={`/comments/${value.id}`}><button>comments</button></Link>                                <br/>
                        <br/>

                    </div>
                })
            }
            <Link to={`/posts/${id}/add`}><button>Add new post</button></Link>


        </div>
    )
}