import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import TopMenu from './components/TopMenu';
import './css/index.css';
import './css/responsive.css';

class App extends Component {
	onScroll = () => {
		if (window.scrollY !== 0) {
			document.querySelector('.top-bar').classList.add('dark');
		} else {
			document.querySelector('.top-bar').classList.remove('dark');
		}
	}

	componentDidMount() {	
		window.addEventListener('scroll', this.onScroll);
	}

	render() {
		return (
			<div className="animated zoomIn">
				<TopMenu />
				<Header />
				<Content />
			</div>
		);
	}
}

export default App;
