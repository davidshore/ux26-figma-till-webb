import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'
import './styles.css'

const isAdmin = ['/admin', '/admin/'].includes(window.location.pathname)
document.title = isAdmin ? 'Admin · Fotoworkshopen' : 'Fotoworkshopen'

function App() {
  return (
    <div className="site">
      <nav aria-label="Huvudmeny">
        <a href="/" aria-current={isAdmin ? undefined : 'page'}>Hem</a>
        <a href="/admin" aria-current={isAdmin ? 'page' : undefined}>Admin</a>
      </nav>
      <main>{isAdmin ? <Admin /> : <Home />}</main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
