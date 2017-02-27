import React, { Component } from 'react';
import './ShowQuestion.css';

class ShowQuestion extends Component{
	render() {
		return (
			
			<div className="showquestion-container">
				<h2>Question</h2>
				<h3>{this.props.question}</h3>
			</div>
			
		);
	}
}

export default ShowQuestion;
