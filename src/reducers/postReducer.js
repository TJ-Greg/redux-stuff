import { FETCH_POSTS, NEW_POST } from '../actions/types';

// items will be the array of items we fetch from the API
// item will be the post we are adding to the items array
const initialState = {
	items: [],
	item: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload
			};
		case NEW_POST:
			return {
				...state,
				item: action.payload
			};
		default:
			return state;
	}
}
