import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
