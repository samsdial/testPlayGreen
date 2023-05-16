
import { useContext, useEffect, useState } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom'
import { AuthContext } from './context/auth-context'
import RequireAuth from './components/require-auth'
import Navigation from './components/Navigation'
import Login from './routes/login'
import Home from './routes/home'
import History from './routes/history'
import Light from "./components/icons/Light";
import Night from "./components/icons/Night";

function App() {
  const  [theme, setTheme] = useState('dark');
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const toggleTheme = () => {
    if (theme === 'dark'){
      setTheme('light');
    } else {
      setTheme('dark')
    }
  }

  // NOTE: console log for testing purposes
  console.log('User:', !!currentUser);

  // Check if the current user exists on the initial render.
  useEffect(() => {
    if (currentUser) {
      navigate('/home')
    }
  }, [currentUser])
  
  return (
    <div className={`container ${theme}`}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={
          <RequireAuth>
            <div className="box-icon-home box-icon" onClick={toggleTheme}>
              {theme === 'dark' ? <Light /> : <Night />}
            </div>
            <Home theme={theme} />
            <Navigation theme={theme} />
          </RequireAuth>
        } />
        <Route path="history" element={
          <RequireAuth>
            <History theme={theme} />
            <Navigation theme={theme} />
          </RequireAuth>
        } />
      </Routes>

    </div>
  )
}

export default App
