import React, { Component } from 'react';
import "./About.css";
import bruh from '../assets/profilepic.jpg'
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
			<div className="split left">
				<div className="centered">
					<img 
					className="profile_image"
					src={bruh} alt="Profile Pic" 
					></img>
				</div>
			</div>
			<div className="split right">
				<div className="centered">
					<div className="name_title">Kenan Erol</div>
					<div className="brief_description">
					Hello! I am a software and computer engineer who is interested in hardware applications of artificial intelligence. In my free time, I enjoy reading, hiking, and playing the guitar.
					</div>
				</div>
			</div>
		</div>
      </div>
    )
  }
}