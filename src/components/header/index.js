import { h, Component } from 'preact';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='navbar'>
        <nav />
        <h1>Pokedex</h1>
        <nav />
      </header>
    );
  }
}
