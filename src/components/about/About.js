import React from 'react'
import './About.css'
import vladickPicture from '../../media/IMG_20210712_121108_695 (1).jpg'

const About = ({ language }) => {
	return (
		<div className='about-container body'>
			<div className='about-desc'>
				{language === 'en' ? (
					<h3>
						Hi I'm Vladick 👋
						<br />
						<br /> After starting with several Udemy courses, I decided to take the Ironhack Web Development
						Bootcamp. <br /> <br /> It was the hardest thing I've ever done. <br />
						<br /> The best thing about it? That after surviving so many hours reading and writing code, I'm
						ready to be part of a team where I can learn and contribute my ideas!
					</h3>
				) : (
					<h3>
						Hola soy Vladick 👋
						<br />
						<br /> Tras empezar con varios cursos de Udemy, decidí hacer el Bootcamp de Desarrollo Web de
						Ironhack. <br />
						<br /> Fue, sin lugar a dudas, una de las experiencias más difíciles que he tenido hasta el
						momento. <br /> <br /> ¿Lo mejor de todo? Que he sobrevivido a tantas horas de leer y escribir
						código. ¡Estoy listo para formar parte de un equipo donde poder aprender y contribuir con mis
						ideas!
					</h3>
				)}
				<p />
			</div>
			<div className='about-img'>
				<img src={vladickPicture} alt='about' />
			</div>
		</div>
	)
}

export default About
