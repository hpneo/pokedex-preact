import { h, Component } from 'preact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {
	render() {
		return (
      <Router>
			  <div id="app">
          <Header />
          <Switch>
            <Route path="/profile/:user" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
			  </div>
      </Router>
		);
	}
}
