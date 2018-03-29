import React from 'react';
import Linkify from 'linkifyjs/react';

const Comment = (props) => {

	return (
		<div className="commentLists">
			<Linkify tagName="p" className="comment">{props.comment}</Linkify>
		</div>
	)
}

export default Comment;

