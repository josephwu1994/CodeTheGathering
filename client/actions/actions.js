import * as types from '../constants/actionTypes'

export const addPost = (content) => ({
	type: types.ADD_POST,
	content,
});

export const addComment = (id, comment) => ({
	type: types.ADD_COMMENT,
	id, comment,
});
