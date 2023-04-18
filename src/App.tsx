
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { Navbar } from "./components/Navbar"
import { Register } from "./pages/Register"
import { SellTracks } from "./pages/SellTracks"
import { BuyTracks } from "./pages/BuyTracks"


function App() {


  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<Profile />}/> 
          <Route path="/buytracks" element={<BuyTracks />}/>
          <Route path="/selltracks" element={<SellTracks />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
