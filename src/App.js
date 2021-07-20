import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import PostsDetail from "./components/PostsDetail";
import Comments from "./components/Comments";
import AddNewPost from "./components/AddNewPost";
import UpdatePost from "./components/UpdatePost";


function App() {
    return (
        <div className="App">
            <Router>
                <div><Link to={'/users'}><button>users</button></Link></div>
                <Switch>
                    <Route  path={'/users'} render={()=>{
                        return <Users/>
                    }}/>
                    <Route exact path={'/posts'} render={()=>{
                        return <Posts/>
                    }}/>
                    <Route exact path={'/posts/:id'} render={({match:{params:{id}}})=>{
                        return <PostsDetail id={id}/>
                    }}/>
                    <Route exact path={'/comments/:id'} render={({match:{params:{id}}})=>{
                        return <Comments id={id}/>
                    }}/>
                    <Route  path={'/posts/:id/update'} render={({match:{params:{id}}})=>{
                        return <UpdatePost id={id}/>
                    }}/>
                    <Route  path={'/posts/:id/add'} render={({match:{params:{id}}})=>{
                        return <AddNewPost id={id}/>
                    }}/>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
