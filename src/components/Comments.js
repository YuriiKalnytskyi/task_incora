import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCommentsId} from "../redux";

export default function Comments ({id}) {

    const dispatch = useDispatch();
    const { comments } = useSelector(({ users }) => (users));

    useEffect(()=>{
        dispatch(fetchCommentsId(id))
    },[dispatch, id])

    return (
        <div>
            <br/>
            <h2>Post {id}</h2><br/>
            {
                comments && comments.map((value, index) => {
                    return <div key={index}>
                        <div>
                            comment {value.id}
                            <p>Name: {value.name}</p>
                            <li>title: {value.email}</li>
                            <li>body: {value.body}</li>
                        </div>
                        <br/>
                        <br/>
                    </div>
                })
            }
        </div>
    )
}