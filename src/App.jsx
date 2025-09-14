import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './index.css'

//brands
import Suzuki from './pages/brands/suzuki.jsx'
import Yamaha from './pages/brands/yamaha.jsx'
import Kawasaki from './pages/brands/kawasaki.jsx'
import Honda from './pages/brands/honda.jsx'
import Vespa from './pages/brands/vespa.jsx'
import BMW from './pages/brands/bmw.jsx'
import Ducati from './pages/brands/ducati.jsx'


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
            <Route path='/suzuki' element={<Suzuki />} />
            <Route path='/yamaha' element={<Yamaha />} />
            <Route path='/kawasaki' element={<Kawasaki />} />
            <Route path='/honda' element={<Honda />} />
            <Route path='/vespa' element={<Vespa />} />
            <Route path='/bmw' element={<BMW />} />
            <Route path='/ducati' element={<Ducati />} />
          </Routes>
        
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
