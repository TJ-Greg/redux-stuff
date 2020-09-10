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
