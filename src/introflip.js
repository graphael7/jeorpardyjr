import React, { Component } from 'react';
import './trivia.css';
import './introflip.css';

class Introflip extends Component{
	render() {
		return (

			<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
				<div className="flipper">
					<div className="front">
						<img src='../img/jp_profile.jpg'/>
					</div>
					<div className="back">
						<img src='../img/jp_profile.jpg'/>
					</div>
				</div>
			</div>
		)



}
export default Introflip;