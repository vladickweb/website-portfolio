import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'

const Cover = ({ language }) => {
	return (
		<div className='cover-container'>
			<video className='video' src={coverVideo} autoPlay loop muted />
			<h1>Vladyslav Kapkan</h1>
			{language === 'en' ? <p>Full Stack Web Developer</p> : <p>Desarrollador Web Full Stack</p>}
		</div>
	)
}

export default Cover
