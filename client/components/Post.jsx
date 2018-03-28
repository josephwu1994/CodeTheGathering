import React from 'react';
import Comment from './Comment.jsx'

const Post = (props) => {
	let comment = '';
	let comments = [];
	for(let i = 0 ; i < props.post.commentList.length; i++) {
		comments.push(<Comment comment={props.post.commentList[i]} />);
	}

	return (
		<div className="outterBox">
			<div className="postBox">
				<p><label> New Info: </label></p>
				<p><label> {props.post.content} </label></p>
			</div>
			<div className="commentBox">
				<input type="text" onChange={(e)=>{comment = e.target.value}} />
				<button type="button" onClick={()=> {props.addComment(props.post.id, comment)}} ></button>
			</div>
			{comments}
		</div>
	);
}

export default Post;