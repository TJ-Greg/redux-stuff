import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
	// We don't need a constructor here, because we get the state from Redux

	componentDidMount() {
		this.props.fetchPosts();
	}

	// Since we are using a dummy database, we can't write to it. So we add the new post to the state manually
	componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
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

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
};

const mapStateToProps = state => ({
	// we get 'posts' from the root reducer
	posts: state.posts.items,
	newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
