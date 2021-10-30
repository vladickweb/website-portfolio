import React from 'react'
import './Footer.css'
import resume from '../../media/CV-Europass.pdf'

const Footer = ({ language }) => {
	return (
		<footer className='footer'>
			<div className='footer-info'>
				<h1>Vladyslav Kapkan</h1>
				{language === 'en' ? <p>Based in Murcia, Spain</p> : <p>Residiendo en Murcia, España</p>}
			</div>
			<div className='footer-contact'>
				{language === 'en' ? <h3>Contact me</h3> : <h3>Contáctame</h3>}

				{language === 'en' ? (
					<a target='_blank' className='btn btn-outline-primary' rel='noreferrer' href={resume}>
						My resume
					</a>
				) : (
					<a target='_blank' className='btn btn-outline-primary' rel='noreferrer' href={resume}>
						Mi CV
					</a>
				)}
			</div>
			<div className='footer-sns'>
				<div className='design-by'>Vladyslav Kapkan - 2021</div>
				<div className='sns-links'>
					<a href='https://linkedin.com/in/vladick-kapkan' target='_blank' rel='noreferrer'>
						<i className='fab fa-linkedin linkedin' />
					</a>
					<a href='https://github.com/vladickweb' target='_blank' rel='noreferrer'>
						<i class='fab fa-github github' />
					</a>
					<a href='mailto:vladickbaraza@gmail.com'>
						<i class='far fa-envelope-open mail' />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
