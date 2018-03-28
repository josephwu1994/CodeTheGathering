import { combineReducers } from 'redux';
import postsReducers from './postsReducer';

const reducers = combineReducers({
	posts: postsReducers,
})

export default reducers;