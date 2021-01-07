import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import generateBgGradient from '../../utils/generateBgGradient';

import iconFacebook from "../../iconfacebook.png";
import iconLinkedIn from "../../iconlinkedin.png";
import iconSoundcloud from "../../iconsoundcloud.png";
import iconTwitter from "../../icontwitter.png";



export default class HeroImage extends Component {
	render() {
		return (
			<Fragment>
				<HeroImageWrapper 
					imageSrc="https://res.cloudinary.com/katedorse/image/upload/v1609963430/pexels-freestocksorg-64057_ojmy2l.jpg"
		  			color="#555555"
      				gradientDirection="to bottom right"
      				height="60vh"
      				opacity="0.8"
				    parallax textPosition="center">
					<ChildrenWrapper
						style={{ color: '#fdf6e3' }}
					>
		  				<h1>THE VOICE YOU WANT TO LISTEN TO</h1>
						<a href="https://soundcloud.com/danielvox" target="_blank" rel="noreferrer noopener" aria-label="This is an external link to soundcloud (opens in a new tab)"><img  src={iconSoundcloud} alt="soundcloud"/></a>
						<a href="https://www.linkedin.com/in/daniel-dorse-b8b20046/" target="_blank" rel="noreferrer noopener" aria-label="This is an external link to linkedin (opens in a new tab)"><img  src={iconLinkedIn} alt="linkedin"/></a> 
						<a href="https://www.facebook.com/daniel.dorse/" target="_blank" rel="noreferrer noopener" aria-label="This is an external link to facebook (opens in a new tab)"><img  src={iconFacebook} alt="facebook"/></a>
						<a href="https://twitter.com/danielvox1" target="_blank" rel="noreferrer noopener" aria-label="This is an external link to twitter (opens in a new tab)"><img  src={iconTwitter} alt="twitter"/></a>
					</ChildrenWrapper>
				</HeroImageWrapper>
			</Fragment>
		);
	}
}

const HeroImageWrapper = styled.div`
	align-items: center;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	position: relative;
	text-align: center;
	width: auto;
	height: ${props => props.height};
	/* Determine parallax behavior based on our 'parallax' prop */
	background-attachment: ${props =>
		props.parallax ? 'fixed' : 'scroll'};
	/* Dynamically set this property based on our 'textPosition' prop */
	justify-content: ${props => {
		switch (props.textPosition) {
			case 'center':
				return 'center';
			case 'left':
				return 'flex-start';
			case 'right':
				return 'flex-end';
			default:
				return 'center';
		}
	}};
	/* 
		We stitch together our background-image property by generating a gradient (util function) 
		and getting the 'imageSrc' prop value 
	*/
	background-image: ${props =>
			generateBgGradient(
				props.gradientDirection,
				props.color,
				props.opacity
			)},
		url(${props => props.imageSrc});
`;

const ChildrenWrapper = styled.div``;