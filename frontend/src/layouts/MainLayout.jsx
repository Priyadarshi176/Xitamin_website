// src/layouts/MainLayout.jsx

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import CursorGlow from '../components/motion/CursorGlow'
import PageLoader from '../components/motion/PageLoader'
import ScrollProgress from '../components/motion/ScrollProgress'
import CalculateIcon from '@mui/icons-material/Calculate';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MainLayout({ children }) {

  const routeTo = useNavigate();
  const location = useLocation().pathname;


  return (
    <>
      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <Header />

      {location !== "/calculator" && <div onClick={()=>{routeTo("/calculator")}} className='fixed bottom-5 z-30 p-5 bg-[#ff6200] rounded-full left-5 cursor-pointer'>
        <CalculateIcon sx={{color:"white",fontSize:40}}/>
      </div>}
      
      <main id="main-content">
        {children}
      </main>

      <Footer />
    </>
  )
}