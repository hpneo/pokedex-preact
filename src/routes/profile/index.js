import { h, Component } from 'preact';
import { connect } from 'react-redux';

import {
	increment,
	changeTime,
	selectCount,
	selectTime,
} from '../../redux/ducks/increment';
import style from './style';

class Profile extends Component {
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.props.dispatch(changeTime());
		// this.setState({ time: Date.now() });
	};

	increment = () => {
		this.props.dispatch(increment());
		// this.setState({ count: this.state.count+1 });
	};

	render(props) {
		const { match: { params: { user } } } = props;
		const { time, count } = props;

		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		time: selectTime(state),
		count: selectCount(state),
	}
);

export default connect(mapStateToProps)(Profile);
