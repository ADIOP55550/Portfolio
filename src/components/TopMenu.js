import React, { Component } from 'react';
import Clock from './TopMenu/Clock';

export class TopMenu extends Component {
	render() {
		return (
			<div className="top-bar">
				<Clock />    
			</div>
		);
	}
}

export default TopMenu;
