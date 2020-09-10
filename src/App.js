import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Posts from './components/Posts';
import PostForm from './components/Postform';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<PostForm />
					<Posts />
				</div>
			</Provider>
		);
	}
}
