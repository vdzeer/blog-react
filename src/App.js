import './App.css';
import {Switch, NavLink, Route, Redirect} from 'react-router-dom';
import Main from './components/Main/Main';
import AddPost from './components/AddPost/AddPost';

function App() {
  return (
    <div className="App">
      <NavLink to='/' exact>To main</NavLink>
      <br />
      <NavLink to='/add'>Add post</NavLink>


      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/add' component={AddPost}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

export default App;