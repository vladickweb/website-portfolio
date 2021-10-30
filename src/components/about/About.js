import React from 'react'
import './About.css'
import vladickPicture from '../../media/IMG_20210712_121108_695 (1).jpg'

const About = () => {
	return (
		<div className='about-container'>
			<div className='about-desc'>
				<h3>
					Hi I'm Vladick 👋
					<br />
					<br /> After starting with several Udemy courses, I decided to take the Ironhack Web Development
					Bootcamp. <br /> <br /> It was the hardest thing I've ever done. <br />
					<br /> The best thing about it? That after surviving so many hours reading and writing code, I'm
					ready to be part of a team where I can learn and contribute my ideas!
				</h3>
				<p />
			</div>
			<div className='about-img'>
				<img src={vladickPicture} alt='about' />
			</div>
		</div>
	)
}

export default About
