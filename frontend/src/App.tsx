import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { Navbar } from './components/Navbar/Navbar'
import { ServicesPage } from './pages/Services'

export default function App() {
  return (
    <div className="App min-h-screen bg-[#fafaf5]">
      <Navbar />
      <main className="pt-[88px]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
