import React, { Component } from 'react';
import Comment from './Comment.jsx'
import Linkify from 'linkifyjs/react'


class Post extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' }
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit() {
		this.props.addComment(this.props.post.id, this.state.value);
		this.setState({ value: ''});
	}

	render() {
		let commentsArr = [];
		for (let i = 0; i < this.props.post.commentList.length; i++) {
			commentsArr.push(<Comment key={i} comment={this.props.post.commentList[i]} />);
		}
		return (
			<div className="outterBox">
				<div className="postBox">
					<p id="newinfo"><label> New Info: </label></p>
					<Linkify tagName="p" id="content"><label> {this.props.post.content} </label></Linkify>
				</div>
				<div className="commentBox">
					<input type="text" placeholder="Add a Comment..." onChange={this.handleChange} value={this.state.value} />
					<button type="button" onClick={this.handleSubmit} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGHSURBVEhL7da/K0ZRHMfxB4UUZZUMFkwUfwFGRZkM1qcsBv4Ni4HBZLEgGfwLhGLwY6YwiSikFN6f4dRx+p7n3nO7TxmeT72me7/n+zzdc7/nVhr5z+nAKKYwh0kMoQl1yTT28Y4fwz3WMIhSMowjWM0sX9AP6EThzOINVoMsl+hHctT0G9aied2hF7kzgtizTHWMNuTKIaxFnB10e15h3ecsITMzsIp9W/DzAus+5wldqBm9MlaxL7WxzCMaDYcPWIW+Io13Ec0YrKIDbHsW4WcT/vUzhGvcIBqNwbBA+pCSBYRrfCIazd6wQMpoLO0wo4FvFZTRWPsgGp0yYYErevZswM8t/OvW8LlGNDraHhAWhYrs6lXUjE4Wq9BXpPE4amYAOtqsYie1sV6vXB8K67AWcE5Q9WQNHW3aXNFcvYC1SKoVJEWHuD5nrMXy2kMLktODU1iLZtE/LdTUpRXLeITVIHSOCZQWPXcdbfoI0MDX7FUj7egr6D3VK9OMuic6exv5m0rlF5w/YhT3fKONAAAAAElFTkSuQmCC" /></button>
				</div>
				{commentsArr}
			</div>
		);
	}
}


export default Post;