import React, { Component } from 'react';
import Comb from './Content/Comb';

export class Content extends Component {
	render() {
		return (
			<ul className="container">
				<Comb href="#" title="YouTube" src="https://simpleicons.org/icons/youtube.svg" />
				<Comb href="#" title="GitHub" src="https://simpleicons.org/icons/github.svg" />
				<Comb href="#" title="Facebook" src="https://simpleicons.org/icons/facebook.svg" />
				<Comb href="#" title="Discord" src="https://simpleicons.org/icons/discord.svg" />
				<Comb href="#" title="Stack Overflow" src="https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg" />
			</ul>
		);
	}
}

export default Content;
