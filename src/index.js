import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';

//Components
import Posts from './components/posts';
import Profile from './components/profile';
import Lifecycle from './components/lifecycle';
import PostsItem from './components/posts_item';
import NotFound from './components/404';

class App extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}


ReactDOM.render(<BrowserRouter>

    <div>
        <header>
            <Link to = '/'>Home</Link><br/>
            <Link to = '/posts'>Posts</Link><br/>
            <Link to = '/profile'>Profile</Link><br/>
            <Link to = '/lifecycle'>LIFE</Link>
            <hr/>
        </header>
    <Switch>
    <Route path = '/posts/:id' component={PostsItem}></Route>
    <Route path = '/profile' component={Profile}></Route>
    <Route path = '/posts' component={Posts}></Route>
    <Route path = '/lifecycle' component={Lifecycle}></Route>
    <Route exact path = '/' component={App}></Route>
    <Route path = '*' component={NotFound}></Route>
    
    </Switch>
    </div>
    </BrowserRouter>
    ,document.querySelector('#root'));