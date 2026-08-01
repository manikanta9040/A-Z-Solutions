import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import Conferences from '../pages/Conferences'
import ConferenceDetails from '../pages/ConferenceDetails'
import Speakers from '../pages/Speakers'
import Committee from '../pages/Committee'
import Registration from '../pages/Registration'
import AbstractSubmission from '../pages/AbstractSubmission'
import About from '../pages/About'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import Blog from '../pages/Blog'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Terms from '../pages/Terms'
import NotFound from '../pages/NotFound'
import AdminLogin from '../pages/AdminLogin'
import AdminDashboard from '../pages/AdminDashboard'
import AdminConferences from '../pages/AdminConferences'
import AdminSpeakers from '../pages/AdminSpeakers'
import AdminRegistrations from '../pages/AdminRegistrations'
import AdminNews from '../pages/AdminNews'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="conferences" element={<Conferences />} />
      <Route path="conferences/:slug" element={<ConferenceDetails />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="committee" element={<Committee />} />
      <Route path="registration" element={<Registration />} />
      <Route path="abstract-submission" element={<AbstractSubmission />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="blog" element={<Blog />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>

    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={localStorage.getItem('adminToken') ? <AdminDashboard /> : <Navigate to="/admin/login" replace />} />
    <Route path="/admin/conferences" element={localStorage.getItem('adminToken') ? <AdminConferences /> : <Navigate to="/admin/login" replace />} />
    <Route path="/admin/speakers" element={localStorage.getItem('adminToken') ? <AdminSpeakers /> : <Navigate to="/admin/login" replace />} />
    <Route path="/admin/registrations" element={localStorage.getItem('adminToken') ? <AdminRegistrations /> : <Navigate to="/admin/login" replace />} />
    <Route path="/admin/news" element={localStorage.getItem('adminToken') ? <AdminNews /> : <Navigate to="/admin/login" replace />} />
  </Routes>
)

export default AppRoutes
