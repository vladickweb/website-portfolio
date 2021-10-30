import React, { useState, useEffect } from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'

const Cover = ({ language }) => {
	const [ isPreload, setIsPreload ] = useState(false)

	useEffect(() => {
		const video = document.querySelector('.video')
    
		video.addEventListener('loadeddata', e => {
			video.readyState >= 3 && setIsPreload(true)
		})
	}, [])

	return (
		<div className='cover-container'>
    
			<video className='video' src={coverVideo} autoPlay loop muted preload={'auto'} />
			<h1>Vladyslav Kapkan</h1>
			{language === 'en' ? <p>Full Stack Web Developer</p> : <p>Desarrollador Web Full Stack</p>}
		</div>
	)
}

export default Cover
