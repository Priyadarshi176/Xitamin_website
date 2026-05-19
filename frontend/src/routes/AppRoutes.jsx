import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
<<<<<<< HEAD
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'
=======
import NotFound from '../components/NotFound'
import Ecommerce from '../pages/Ecommerce'
import LogoModel from '../components/LogoModel'
>>>>>>> 0b8a055853b9663f7cd1cad5191146b29635d3c6

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<<<<<<< HEAD
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
=======
      <Route path="/e-commerce" element={<Ecommerce />} />
      <Route path="*" element={<NotFound/>} />
      <Route path='/model' element={<LogoModel />} />
>>>>>>> 0b8a055853b9663f7cd1cad5191146b29635d3c6
    </Routes>
  )
}
