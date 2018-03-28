import React from 'react';

const PostCreator = (props) => {
	let newPost = '';

	return (
		<div className="PCreator">
			<textarea type="text" placeholder="What's New?.." onChange={(e) => {newPost = e.target.value}} />
			<button type="button" onClick={()=>{props.addPost(newPost)}} >Post</button>
		</div>
	);
}

export default PostCreator;