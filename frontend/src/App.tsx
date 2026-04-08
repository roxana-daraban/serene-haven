import { Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer'
import { ServicesPage } from './pages/Services'
import { ContactPage } from './pages/Contact'

export default function App() {
  return (
    <div className="App flex min-h-screen flex-col bg-[#fafaf5]">
      <ScrollToTop />
      <Navbar />
      <main className="w-full flex-1 pt-[88px]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
