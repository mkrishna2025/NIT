import React, { Component } from 'react';
import img2 from '../../images/special/2.png';
import img3 from '../../images/special/3.png';
import img4 from '../../images/special/4.png';
import img5 from '../../images/special/5.png';
import img6 from '../../images/special/6.png';
import img7 from '../../images/special/7.png';
import img8 from '../../images/special/8.png';
import img9 from '../../images/special/9.png';

export default class Main extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	slideIndex:0
	    }
		this.nextDiv = this.nextDiv.bind(this);
		this.previousDiv = this.previousDiv.bind(this);
		this.showDivs = this.showDivs.bind(this);
	}

	nextDiv() {
		this.state.slideIndex = this.state.slideIndex + 1;
		this.showDivs(this.state.slideIndex);
	}

	previousDiv() {
		this.state.slideIndex = this.state.slideIndex - 1;
		this.showDivs(this.state.slideIndex);
	}

	showDivs(n) {
		var i;
		var images = document.getElementsByClassName("mySlides");
		debugger;
		if (n > images.length) {
			this.state.slideIndex = 1
		}
		if (n < 1) {
			this.state.slideIndex = images.length
		}
		for (i = 0; i < images.length; i++) {
			images[i].style.display = "none";
		}
		images[this.state.slideIndex].style.display = "block";
	}

  render() {
    return (
		<div className="slides">
			<div className="w3-content w3-display-container">
				<img className="mySlides" src={img2} style= {{ display:"block"}}/>
				<img className="mySlides" src={img3} style= {{ display:"none"}}/>
				<img className="mySlides" src={img4} style= {{ display:"none"}} />
				<img className="mySlides" src={img5} style= {{ display:"none"}}/>
				<img className="mySlides" src={img6} style= {{ display:"none"}}/>
				<img className="mySlides" src={img7} style= {{ display:"none"}}/>
				<img className="mySlides" src={img8} style= {{ display:"none"}}/>
				<img className="mySlides" src={img9} style= {{ display:"none"}}/>
				<button className="w3-button w3-display-left" onClick={this.previousDiv}>&#10094;</button>
				<button className="w3-button w3-display-right" onClick={this.nextDiv}>&#10095;</button>
			</div>
		</div>
    );
  }
}
