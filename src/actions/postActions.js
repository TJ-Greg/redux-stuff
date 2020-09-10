import { NEW_POST, FETCH_POSTS } from './types';

export default function fetchPosts() {
	return function (dispatch) {
		// This will fetch the data and send the payload(data + type) to the appropriate reducer
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(posts =>
				dispatch({
					type: 'FETCH_POSTS',
					payload: posts
				})
			);
	};
}
