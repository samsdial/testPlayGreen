
import { useContext, useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom'
import { AuthContext } from './context/auth-context'
import RequireAuth from './components/require-auth'
import Login from './routes/login'
import Home from './routes/home'

function App() {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // NOTE: console log for testing purposes
  console.log('User:', !!currentUser);

  // Check if the current user exists on the initial render.
  useEffect(() => {
    if (currentUser) {
      navigate('/profile')
    }
  }, [currentUser])
  
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="profile" element={
        <RequireAuth>
          <Home />
        </RequireAuth>
      } />
    </Routes>
  )
}

export default App
