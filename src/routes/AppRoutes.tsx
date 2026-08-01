import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Conferences from '../pages/Conferences'
import ConferenceDetailsPage from '../pages/ConferenceDetailsPage'
import Speakers from '../pages/Speakers'
import Registration from '../pages/Registration'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import { useScrollToTop } from '../hooks/useScrollToTop'
import AdminLogin from '../pages/AdminLogin'
import AdminDashboard from '../pages/AdminDashboard'
import AdminConferences from '../pages/AdminConferences'
import AdminSpeakers from '../pages/AdminSpeakers'
import AdminRegistrations from '../pages/AdminRegistrations'
import AdminNews from '../pages/AdminNews'

export default function AppRoutes() {
  useScrollToTop()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Conferences />} />
      <Route path="/services/:id" element={<ConferenceDetailsPage />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={localStorage.getItem('adminToken') ? <AdminDashboard /> : <Navigate to="/admin/login" replace />} />
      <Route path="/admin/conferences" element={localStorage.getItem('adminToken') ? <AdminConferences /> : <Navigate to="/admin/login" replace />} />
      <Route path="/admin/speakers" element={localStorage.getItem('adminToken') ? <AdminSpeakers /> : <Navigate to="/admin/login" replace />} />
      <Route path="/admin/registrations" element={localStorage.getItem('adminToken') ? <AdminRegistrations /> : <Navigate to="/admin/login" replace />} />
      <Route path="/admin/news" element={localStorage.getItem('adminToken') ? <AdminNews /> : <Navigate to="/admin/login" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
