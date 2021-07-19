import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../redux";


export default function Posts() {
    const dispatch = useDispatch();
    const { posts } = useSelector(({ users }) => (users));

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])


    return (
        <div>
            <h1>All Posts</h1>

            {
                posts && posts.map((value, index) => {
                    return <div key={index}>
                        <div>
                            User {value.userId}  post {value.id}

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