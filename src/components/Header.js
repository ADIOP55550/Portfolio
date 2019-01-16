import React, { Component } from 'react';
import Baffle from "baffle-react";

export class Header extends Component {
	render() {
		return (
			<header>
				<h1>
					<Baffle speed={50} characters="!@#$%^&*" obfuscate={ false } revealDuration={1000} revealDelay={1000}>
                        Generalnie to niezaawansowany programista, ale zna się na rzeczy
					</Baffle>
				</h1>
			</header>
		);
	}
}

export default Header;
