import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Footer from './components/Footer/Footer'
import Header from "./components/Header/header"
import { Outlet } from "react-router-dom"
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      console.log(userData)
      if (userData) {
        dispatch(login({ ...userData }))
      }
      else {
        dispatch(logout())
      }
    }).finally(() => setLoading(false));

  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#333333] text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
