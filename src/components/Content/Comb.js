import React, { Component } from 'react';

export class Comb extends Component {
	render() {
		return (
			<li className="item"><a href={this.props.href} title={this.props.title}><img src={this.props.src} alt={this.props.title} height="96" width="96" /></a></li>
		);
	}
}

export default Comb;
