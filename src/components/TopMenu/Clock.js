import { Component } from 'react';

const getCurrentDate = () => {
	const date = new Date();
	const str = `${date.getFullYear()}-${((date.getMonth() + 1) > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1).toString())}-${date.getDate()} ${date.getHours() + ":" + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())}:${date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds().toString()}`;
    
	return str;
};

export class Clock extends Component {
	state = {
		clock: getCurrentDate()
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				clock: getCurrentDate()
			});
		}, 1000);
	}

	render() {
		return (
			this.state.clock
		);
	}
	}

export default Clock;
