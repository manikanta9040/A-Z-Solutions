import { Outlet } from 'react-router-dom'
import TopHeader from '../components/TopHeader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <TopHeader />
    <Navbar />
    <main className="relative">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default Layout
