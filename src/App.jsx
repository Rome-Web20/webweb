import { Route, BrowserRouter, HashRouter, Routes } from 'react-router-dom'
import './index.css'

//Components
import Nav from './components/Navbar.jsx'
import Footer from './components/footer.jsx'

//Pages
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
