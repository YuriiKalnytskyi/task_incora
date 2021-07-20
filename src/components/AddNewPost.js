import {useState} from "react";

import {putPostService} from "../services/app";

export default function AddNewPost({ id }) {

    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    const add = (e) =>{
        e.preventDefault()
        const a ={ userId: +id , title, body }
        putPostService(a).then(value => console.log(value))
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <form>
                    <input placeholder={'title'} onChange={(event => setTitle(event.target.value))}/>
                    <input placeholder={'body'} onChange={(event => setBody(event.target.value))}/>
                    <button onClick={add}>add</button>
                </form>
            </div>
        </div>
    )
}