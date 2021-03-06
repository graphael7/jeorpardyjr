import React, { Component } from 'react';
import './trivia.css';
import arr from './questions.js';
import ShowQuestion from './ShowQuestion.js';
import Points from './Points.js';

class Trivia extends Component{

	constructor() {
    super();
    this.state = { question: "" } ;
  }

	// componentWillMount(){
    
 //    this.setState({ flipper: true });
	// } 

  clickHandler(event){
      var lengthofarray = arr.length
      
      for (var i = 0; i < lengthofarray; i++){
        if (arr[i].category == event.target.className && arr[i].points ==  event.target.innerHTML){
          this.setState({question: arr[i].question});
        }
      }
  }

	render() {

    console.log(arr);
  


		return (
      <div>
        { <ShowQuestion question= {this.state.question}/>}
        { <Points />}
			<div id="board" onClick ={this.clickHandler.bind(this)}>
			<h2 className="container big">Jeopardy Jr</h2>
    		<table className="racer_table">
    			<tbody>
      				<tr id="top_categories">
        				<td id="category_one">US Geography</td>
        				<td id="category_two">Sports</td>
        				<td id="category_three">Animals</td>
        				<td id="category_four">Science </td>
        				<td id="category_five">Television</td>
        				<td id="category_six">History</td>
      				</tr>
      				<tr id="100">
        				<td className="geography">100</td>
        				<td className="sports">100</td>
        				<td className="animals">100</td>
        				<td className="science">100 </td>
        				<td className="television">100</td>
        				<td className="history">100</td>
      				</tr>
      				<tr id="200">
        				<td className="geography">200</td>
        				<td className="sports">200</td>
        				<td className="animals">200</td>
       		 			<td className="science">200 </td>
        				<td className="television">200</td>
        				<td className="history">200</td>
      				</tr>
      				<tr id="300">
        				<td className="geography">300</td>
        				<td className="sports">300</td>
        				<td className="animals">300</td>
        				<td className="science">300 </td>
        				<td className="television">300</td>
        				<td className="history">300</td>
      				</tr>
      				<tr id="400">
        				<td className="geography">400</td>
        				<td className="sports">400</td>
        				<td className="animals">400</td>
        				<td className="science">400 </td>
        				<td className="television">400</td>
        				<td className="history">400</td>
      				</tr>
      				<tr id="500">
        				<td className="geography">500</td>
        				<td className="sports">500</td>
        				<td className="animals">500</td>
        				<td className="science">500</td>
        				<td className="television">500</td>
        				<td className="history">500</td>
      				</tr>
      			</tbody>
    		</table>
    		</div>
        </div>
		);
	}
}

export default Trivia;