import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Cerca from "./components/Cerca"

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cerca" element={<Cerca />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App