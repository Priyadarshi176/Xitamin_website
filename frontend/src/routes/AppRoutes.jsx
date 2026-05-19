import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'
import NotFound from '../components/NotFound'
import Ecommerce from '../pages/Ecommerce'
import LogoModel from '../components/LogoModel'
import Calculator from '../pages/Calculator'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/e-commerce" element={<Ecommerce />} />
      <Route path="*" element={<NotFound/>} />
      <Route path='/model' element={<LogoModel />} />
      <Route path="/calculator" element={<Calculator/>}/>
    </Routes>
  )
}
