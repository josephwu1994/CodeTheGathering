import React, { Component } from 'react';

const PostCreator = props => {
	let newPost = '';

	return (
		<div className="PCreator">
			<label>Something New: </label>
			<input type="text" onChange={(e) => {newPost = e.target.value}} />
			<button type="button" onClick={()=>{props.addPost(newPost)}} >Post</button>
		</div>
	);
}

export default PostCreator;