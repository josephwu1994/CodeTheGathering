import * as types from '../constants/actionTypes';

const initialState = {
	lastPostId: 0,
	content: '',
	postList: [],
}

const postsReducer = (state = initialState, action) => {
	let postList, lastPostId;

	switch (action.type) {
		case types.ADD_POST:
			// Add a post to the existing table

			const newPost = {
				id: state.lastPostId,
				content: action.content,
				commentList: [],
			}
			postList = state.postList.slice();
			postList.push(newPost);

			lastPostId = state.lastPostId + 1;

			return {
				...state,
				lastPostId,
				postList,
			};
		case types.ADD_COMMENT:
			postList = state.postList.slice();

			return {
				...state,
				postList: postList.map((el) => {
					if (el.id === action.id) {
						el.commentList.push(action.comment);
					}
					return el;
				})
			};
			default: 
				return state;
	}
};

export default postsReducer;