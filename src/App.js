import React, { useState, useEffect } from 'react'
import './App.css'
import Cover from './components/cover/Cover'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Slider from './components/slider/Slider'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import Tools from './components/tools/Tools'

function App() {
	const [ scrollHeight, setScrollHeight ] = useState(0)
	const [ language, setLanguage ] = useState('en')
  

	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollHeight(position)
	}

	useEffect(
		() => {
			window.addEventListener('scroll', handleScroll)
		},
		[ scrollHeight ]
	)

	return (
		<div className='App'>
			<Navbar isScrolling={scrollHeight} setLanguage={setLanguage} />
			<Cover language={language} />
			<About language={language} />
			<Slider language={language} />
			<Tools language={language} />
			<Info language={language} />
			<Footer language={language} />
		</div>
	)
}

export default App
