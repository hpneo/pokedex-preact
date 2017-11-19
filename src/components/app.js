import { h, Component } from 'preact';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header';
import Home from '../routes/home';
import PokemonProfile from '../routes/profile';

import store from '../redux/store';

export default class App extends Component {
	render() {
		return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <Switch>
              <Route exact path="/pokemons/:name" component={PokemonProfile} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
		);
	}
}
