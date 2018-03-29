import React from 'react';
import Post from './Post.jsx';

const Table = (props) => {
	let postsArr = [];
	for (let i = 0; i < props.postList.length; i++){
		postsArr.push(<Post key={i} addComment={props.addComment} post={props.postList[i]} />);
	}
	return (
		<div className="Table">
			{postsArr}
		</div>
	);
}

export default Table;