import './Header.css';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <ul>
        <li><NavLink to='/' className="header__link" exact>Main</NavLink></li>
        <li><NavLink to='/add' className="header__link" >Add post</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;