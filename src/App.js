import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import PostsDetail from "./components/PostsDetail";


function App() {
    return (
        <div className="App">
            <Router>
                <div><Link to={'/users'}>users</Link></div>
                <Switch>
                    <Route path={'/users'} render={()=>{
                        return <Users/>
                    }}/>
                    <Route exact path={'/posts'} render={()=>{
                        return <Posts/>
                    }}/>
                    <Route path={'/posts/:id'} render={({match:{params:{id}}})=>{
                        return <PostsDetail id={id}/>
                    }}/>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
