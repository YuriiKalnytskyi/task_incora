import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../redux";
import {Link} from "react-router-dom";


export default function Users() {
    const dispatch = useDispatch();
    const { users } = useSelector(({users}) => (users));

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])


    return (
        <div>
            <h1>All Users</h1>
            {
                users && users.map((value, index)=>{
                    return <div key={index}>{value.id} {value.name}
                        <Link to={`/posts/${value.id}`}><button>Detail</button></Link>
                    </div>
                })

            }
            <Link to={'/posts'}><button>Posts</button></Link>
        </div>
    )
}