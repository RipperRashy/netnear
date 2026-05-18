import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Search from './pages/Search'
import InstallerSetup from './pages/InstallerSetup'
import InstallerDashboard from './pages/InstallerDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/installer/setup" element={<InstallerSetup />} />
      <Route path="/installer/dashboard" element={<InstallerDashboard />} />
    </Routes>
  )
}

export default App