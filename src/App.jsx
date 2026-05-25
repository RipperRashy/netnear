import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Search from './pages/Search'
import InstallerSetup from './pages/InstallerSetup'
import InstallerDashboard from './pages/InstallerDashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import InstallerProfile from './pages/InstallerProfile'
import Booking from './pages/Booking'
import Pricing from './pages/Pricing'
import ForInstallers from './pages/ForInstallers'
import HowItWorks from './pages/HowItWorks'
import NotFound from './pages/NotFound'
import Chat from './pages/Chat'
import Review from './pages/Review'
import CustomerProfile from './pages/CustomerProfile'
import Notifications from './pages/Notifications'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/installer/:id" element={<InstallerProfile />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/for-installers" element={<ForInstallers />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/booking/:id" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
      <Route path="/installer/setup" element={<ProtectedRoute><InstallerSetup /></ProtectedRoute>} />
      <Route path="/installer/dashboard" element={<ProtectedRoute><InstallerDashboard /></ProtectedRoute>} />
      <Route path="/customer/dashboard" element={<ProtectedRoute><CustomerDashboard /></ProtectedRoute>} />
      <Route path="/customer/profile" element={<ProtectedRoute><CustomerProfile /></ProtectedRoute>} />
      <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
      <Route path="/review/:id" element={<ProtectedRoute><Review /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App