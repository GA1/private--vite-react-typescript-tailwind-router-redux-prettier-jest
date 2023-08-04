import { BrowserRouter } from 'react-router-dom'
import { Router } from './general/Router.jsx'

export const App = () => (
  <BrowserRouter>
    <div className='h-full bg-red-50 p-4 lg:p-24'>
      <Router />
    </div>
  </BrowserRouter>
)
