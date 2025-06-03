import { createRoot } from 'react-dom/client'
import { route } from './routes/route.js'
import './index.css'

import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
	<RouterProvider router={route} />
)
