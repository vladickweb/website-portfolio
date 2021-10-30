import React from 'react'
import './Info.css'

const Info = ({ language }) => {
	return (
		<div className='info-container body'>
			<div className='info'>
				{language === 'en' ? (
					<h1>Let's work together and create something unique</h1>
				) : (
					<h1>Vamos a trabajar y hagamos algo único</h1>
				)}
			</div>
		</div>
	)
}

export default Info
