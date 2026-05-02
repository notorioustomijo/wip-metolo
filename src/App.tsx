// import PlantIntroAnimation from "./components/Loader"
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Bio from './pages/About/Bio/Bio';
import Work from './pages/Work/Work';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact';

function App() {


  return (
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/bio" element={<Bio />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
  )
}

export default App
