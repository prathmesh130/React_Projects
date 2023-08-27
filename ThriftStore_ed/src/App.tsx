import { Outlet } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header"

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
