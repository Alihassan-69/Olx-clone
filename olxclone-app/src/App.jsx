import './App.css'
import Contextallpost from './components/contextstore/Allpostcontext'
import ContextAuth from './components/contextstore/AuthContext'
import ContextPost from './components/contextstore/PostContext'
import MainRoutes from './Routes/MainRoutes'
function App() {

  return (
    <>
    <ContextAuth>
    <Contextallpost>
      <ContextPost>
        <MainRoutes/>
      </ContextPost>
    </Contextallpost>
    </ContextAuth>
    </>
  )
}

export default App
