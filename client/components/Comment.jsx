import React from 'react';

const Comment = (props) => {

	return (
		<div className="commentLists">
			<ul>
				<li className="comment">{props.comment}</li>
			</ul>
		</div>
	)
}

export default Comment;

