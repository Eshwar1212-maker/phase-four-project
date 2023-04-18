
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { Navbar } from "./components/Navbar"
import { FindBeats } from "./pages/FindBeats"
import { Seller } from "./pages/Seller"

function App() {


  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/> 
          <Route path="/seller" element={<Seller />}/>
          <Route path="/findBeats" element={<FindBeats />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
