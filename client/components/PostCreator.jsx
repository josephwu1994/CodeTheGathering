import React, { Component } from 'react';

class PostCreator extends Component {
	constructor(props){
		super(props);
		this.state = { value: ''}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e) {
		this.setState({ value: e.target.value});
	}
	handleSubmit() {
		this.props.addPost(this.state.value);
		this.setState({ value: ''});
	}

	render() {
		return (
			<div className="PCreator">
				<textarea type="text" placeholder="What's New?.." onChange={this.handleChange} value={this.state.value}/>
				<button type="button" onClick={this.handleSubmit} >Post</button>
			</div>
		);
	}
}

export default PostCreator;