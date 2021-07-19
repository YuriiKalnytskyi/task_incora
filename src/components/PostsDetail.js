import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPostsId} from "../redux";

export default function PostsDetail({id}) {
    const dispatch = useDispatch();
    const { posts } = useSelector(({ users }) => (users));

    useEffect(()=>{
        dispatch(fetchPostsId(id))
    },[dispatch, id])

    console.log(id)
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
                        <br/>
                    </div>
                })
            }
        </div>
    )
}