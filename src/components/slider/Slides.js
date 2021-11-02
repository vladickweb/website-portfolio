import React from 'react'
import './Slider.css'
import gamePicture from '../../media/kvalifik-Qp0sNSZhFx4-unsplash.jpg'
import eventator from '../../media/jade-masri-74tlEYKgrBE-unsplash.jpg'
import englissue from '../../media/sigmund-C713D7KSkaY-unsplash.jpg'

const slidesInfo = [
	{
		src: gamePicture,
		alt: 'Project 1',
		desc: 'Square Invaders',
		link: 'https://vladickweb.github.io/square-invaders/'
	},
	{
		src: eventator,
		alt: 'Project 2',
		desc: 'Eventator',
		link: 'https://eventator.herokuapp.com/'
	},
	{
		src: englissue,
		alt: 'Project 3',
		desc: 'Englissue',
		link: 'https://englissue.herokuapp.com/'
	}
]

const slides = slidesInfo.map(slide => (
	<a target='_blank' href={slide.link} rel='noreferrer' className='slide-container'>
		<img src={slide.src} alt={slide.alt} />
		<div className='slide-desc'>
			<span>{slide.desc}</span>
		</div>
	</a>
))

export default slides
