import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/Main/Main';
import AddPost from './components/AddPost/AddPost';
import Header from './components/Header/Header';
import './App.css';

function App() {
  if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify([
      {
        title: "First post",
        description: "Some text",
        likes: 0
      }
    ]))
  }

  const [posts, setPosts] = 
    React.useState(JSON.parse(localStorage.getItem('posts')));

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact> <Main posts={posts} setPosts={setPosts} /> </Route>
        <Route path='/add'> <AddPost posts={posts} setPosts={setPosts} /> </Route>
        {/* <Redirect to={'/'}/> */}
      </Switch>
    </div>
  );
}

export default App;