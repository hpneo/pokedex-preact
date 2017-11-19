import { h, Component } from 'preact';
import { NavLink } from 'react-router-dom';
import style from './style';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>Preact App</h1>
        <nav>
          <NavLink exact activeClassName={style.active} to="/">Home</NavLink>
          <NavLink activeClassName={style.active} to="/profile/me">Me</NavLink>
          <NavLink activeClassName={style.active} to="/profile/john">John</NavLink>
        </nav>
      </header>
    );
  }
}
