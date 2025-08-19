import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Modal } from 'antd'
import HomeRoute from './Components/HomeRoutes/HomeRoute'
import ReloadModelsfirst from './Components/ReloadModels/ReloadModelsfirst'
import ReloadModelsSecond from './Components/ReloadModels/ReloadModelsSecond'
import WhatsAppBtn from './Components/WhatsAppBtn/WhatsAppBtn'
import FinancialDocuments from './Components/FinancialDocuments/FinancialDocuments'
import NavigationBar from './Components/OtherRoutes/NavigationBar/NavigationBar'
import Services from './Components/OtherRoutes/Services/Services'
import About from './Components/OtherRoutes/About/About'
import Footer from './Components/OtherRoutes/Footer/Footer'

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  const [count, setCount] = useState(0)
  const [showSecondModal, setShowSecondModal] = useState(false)
  const [modalsClosed, setModalsClosed] = useState(false)

  const handleFirstModalClose = () => {
    // console.log("First modal closed, showing second modal")
    setShowSecondModal(true)
  }

  const handleSecondModalClose = () => {
    console.log("Second modal closed")
    setShowSecondModal(false)
    setModalsClosed(true) // Mark that all modals are closed
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavigationBar />
        {/* Logo background when modals are active */}
        {!modalsClosed && (
          <div className="logo-background">
            <img
              src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/munoth_logo.jpeg"
              alt="Munoth Capital Logo"
              className="centered-logo"
            />
          </div>
        )}

        <ReloadModelsfirst onClose={handleFirstModalClose} />
        <ReloadModelsSecond isOpen={showSecondModal} onClose={handleSecondModalClose} />

        {/* Only render main components after modals are closed */}
        {modalsClosed && (
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/financial-documents" element={<FinancialDocuments />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        )}

        {/* WhatsApp Button - Always visible */}
        <WhatsAppBtn />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
