import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navigation';
import Intro from './components/intro';
import Projects from './components/projects';
import Experience from './components/experience';
import Skills from './components/skills';
import Blog from './components/blog';
import Contact from './components/contact';
import { ROUTES } from './constants';
import style from './common/style.css';
 
class App extends React.Component {
	render() {
		return (
			<div>
				{/* <Navigation routes={ROUTES} /> */}
				<Intro />
				{/* <Projects />
				<Experience />
				<Skills />
				<Blog />
				<Contact /> */}
			</div>
		);
	}
}
 
ReactDOM.render(<App/>, document.getElementById('app'));