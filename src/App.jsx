import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Search from './pages/Search'
import InstallerSetup from './pages/InstallerSetup'
import InstallerDashboard from './pages/InstallerDashboard'
import CustomerDashboard from './pages/CustomerDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/installer/setup" element={<InstallerSetup />} />
      <Route path="/installer/dashboard" element={<InstallerDashboard />} />
      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
    </Routes>
  )
}

export default App