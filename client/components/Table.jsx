import React, { Component } from 'react';
import Post from './Post.jsx';
import Comment from './Comment.jsx';

const Table = (props) => {
	let posts = [];
	for (let i = 0; i < props.post; i++){
		posts.push(<Post key={i} addComment={props.addComment} post={props.post[i]} />);
	}
	return (
		<div className="Table">
			<h4 id="header">Posts</h4>
			{posts}
		</div>
	);
}

export default Table;