// src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../components/NotFound'
import Ecommerce from '../pages/Ecommerce'
import LogoModel from '../components/LogoModel'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/e-commerce" element={<Ecommerce />} />
      <Route path="*" element={<NotFound/>} />
      <Route path='/model' element={<LogoModel />} />
    </Routes>
  )
}