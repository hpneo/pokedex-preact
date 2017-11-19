import { h, Component } from 'preact';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import ProfileEditor from '../routes/profile-editor';

import store from '../redux/store';

export default class App extends Component {
	render() {
		return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Header />
            <Switch>
              <Route exact path="/profile/:user" component={Profile} />
              <Route exact path="/profile/:user/edit" component={ProfileEditor} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
		);
	}
}
