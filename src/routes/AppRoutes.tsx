import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Conferences from '../pages/Conferences'
import ConferenceDetailsPage from '../pages/ConferenceDetailsPage'
import Speakers from '../pages/Speakers'
import Registration from '../pages/Registration'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import { useScrollToTop } from '../hooks/useScrollToTop'

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
