import React, { Component } from 'react';
import './Points.css';

class Points extends Component{
	render() {
		return (
			
			<div className="points-container" ontouchstart="this.classList.toggle('hover');">
				<div className="points">
					<div className="frontcard">
						<h2>Hello</h2>
					</div>
					<div className="backcard">
						<h2>Bye</h2>
					</div>
				</div>
			</div>
			
		);
	}
}

export default Points;