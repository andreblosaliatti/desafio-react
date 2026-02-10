import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeContent />} />
          <Route path='/products' element={<Products />} />
            <Route path='/computers' element={<Computers />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/books' element={<Books />} />
          <Route /> 
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


