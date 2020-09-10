import { NEW_POST, FETCH_POSTS } from './types';

// This doesn't export correctly to Posts component if it's declared as a normal function(),not exactly sure why.
export const fetchPosts = () => dispatch => {
	// This will fetch the data and send the payload(data + type) to the appropriate reducer
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(posts =>
			dispatch({
				type: FETCH_POSTS,
				payload: posts
			})
		);
};

export const createPost = postData => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(postData)
	})
		.then(res => res.json())
		.then(post =>
			dispatch({
				type: NEW_POST,
				payload: post
			})
		);
};
