import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Table.jsx';
import PostCreator from './PostCreator.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
	postList: store.posts.postList,
});

const mapDispatchToProps = dispatch => ({
	addPost: (content) => dispatch(actions.addPost(content)),
	addComment: (id, comment)=> dispatch(actions.addComment(id, comment)),
});

class Wrapper extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className="wrapper">
				<div className="Box">
					<h1 id="header"> Code Feeds </h1>
					<PostCreator addPost={this.props.addPost} />
					<h1 id="header">Posts</h1>
					<Table addComment={this.props.addComment} postList={this.props.postList} />
				</div>
				
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);