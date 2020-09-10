import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
	// We don't need a constructor here, because we get the state from Redux

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const postItems = this.props.posts.map(post => (
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

const mapStateToProps = state => ({
	// we get 'posts' from the root reducer
	posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
