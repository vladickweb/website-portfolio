import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slides from './Slides'
import './Slider.css'

const Slider = ({ language }) => {
	return (
		<div className='carousel-container'>
			<div className='carousel-title'>{language === 'en' ? <h2>My Projects</h2> : <h2>Mis Proyectos</h2>}</div>

			<Carousel
				arrows
				slidesPerPage={3}
				infinite
				animationSpeed={200}
				centered
				offset={50}
				itemWidth={400}
				slides={Slides}
				breakpoints={{
					960: {
						slidesPerPage: 1,
						arrows: false,
						itemWidth: 250
					}
				}}
			/>
		</div>
	)
}

export default Slider
