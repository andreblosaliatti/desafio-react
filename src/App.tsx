import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Routes/Home/Home'
import HomeContent from './Routes/Home/HomeContent'
import Products from './Routes/Products/Products'
import Computers from './Routes/Products/Computers/Computers'
import Electronics from './Routes/Products/Electronics/Electronics'
import Books from './Routes/Products/Books/Books'
import About from './Routes/About/About'
import NotFound from './Routes/NotFound/NotFound'

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeContent />} />
          <Route path='products' element={<Products />}>
            <Route index element={<Computers />} />
            <Route path='electronics' element={<Electronics />} />
            <Route path='books' element={<Books />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </BrowserRouter>
  )
}


