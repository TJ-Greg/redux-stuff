import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Posts extends Component {
	// We don't need a constructor here, because we get the state from Redux
	render() {
		const postItems = this.state.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}
