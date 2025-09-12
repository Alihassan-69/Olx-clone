import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextAllPost from './components/contextstore/AllPostContext.jsx'
import ContextPost from './components/contextstore/PostContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextAllPost>
      <ContextPost>
        

    <App />
        
    </ContextPost>
    </ContextAllPost>
  </StrictMode>,
)
