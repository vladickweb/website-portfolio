import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Spinner from './components/spinner/Spinner'

const App = React.lazy(() => import('./App'))

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<Spinner />}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
)
