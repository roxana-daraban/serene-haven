import { Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { Navbar } from './components/Navbar/Navbar'
import { ServicesPage } from './pages/Services'
import { ContactPage } from './pages/Contact'

export default function App() {
  return (
    <div className="App min-h-screen bg-[#fafaf5]">
      <ScrollToTop />
      <Navbar />
      <main className="pt-[88px]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
