import React, { Component } from 'react';
import './Introflip.css';

class Introflip extends Component{
	render() {
		return (
			
			<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
				<div className="flipper">
					<div className="front">
						<img src="../img/jp_profile.jpg" alt="Jeopardy" />
					</div>
					<div className="back">
						<img src="../img/jp_profile.jpg"/>
					</div>
				</div>
			</div>
			
		);
	}
}

export default Introflip;
