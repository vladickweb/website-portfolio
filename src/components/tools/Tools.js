import React from 'react'
import './tools.css'

export default function Tools({ language }) {
	return (
		<div className='tools-container text-center body '>
			<div className='tools'>
				{language === 'en' ? <h1 className='mb-5'>Technologies</h1> : <h1 className='mb-5'>Tecnologías</h1>}
				<div className='row justify-content-center text-center align-items-center h-100'>
					<div className='col-6 mb-5 col-md-3'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
							alt='React'
						/>
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png'
							alt='Node'
						/>
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img
							src='https://geekflare.com/wp-content/uploads/2019/04/express-routing-logo-65137ed3c844d05124dcfdab28263c21-ec9c1-e1554576195344.png'
							alt='Express'
						/>
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png'
							alt='MongoDB'
						/>
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' alt='HTML5' />
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' alt='CSS3' />
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'
							alt='JavaScript'
						/>
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img
							src='https://servidor.codeandcoke.com/_media/apuntes:boostrap.png?cache='
							alt='Bootstrap'
						/>
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png'
							alt='Git'
						/>
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img src='https://icones.pro/wp-content/uploads/2021/06/icone-github-rouge.png' alt='Github' />
					</div>
					<div className='col-6 mb-5 col-md-3'>
						<img
							src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa4e2a5-78d4-4924-8c60-6e53429eaf65/dc5p21n-8119c7a9-d550-424f-a1be-a7d47e32cc9c.png/v1/fill/w_894,h_894,strp/unix_terminal_logo_by_dollarakshay_dc5p21n-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2FhYTRlMmE1LTc4ZDQtNDkyNC04YzYwLTZlNTM0MjllYWY2NVwvZGM1cDIxbi04MTE5YzdhOS1kNTUwLTQyNGYtYTFiZS1hN2Q0N2UzMmNjOWMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BV2sSGQ9KaMjy2OWzOfOg5fLvtwO6LHL7XeI5CkjLNc'
							alt='Terminal'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
