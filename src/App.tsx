import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Operation from './pages/Operation'
import Analytics from './pages/Analytics'
import Rent from './pages/Rent'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'

export type TabType = 'home' | 'collection' | 'operation' | 'analytics' | 'rent';
export type ViewType = 'landing' | 'login' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing')
  const [activeTab, setActiveTab] = useState<TabType>('home')

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'home': return <Home />
      case 'collection': return <Collection />
      case 'operation': return <Operation />
      case 'analytics': return <Analytics />
      case 'rent': return <Rent />
      default: return <Home />
    }
  }

  if (currentView === 'landing') {
    return <LandingPage onLoginClick={() => setCurrentView('login')} />
  }

  if (currentView === 'login') {
    return <Login onLoginSuccess={() => setCurrentView('dashboard')} onBack={() => setCurrentView('landing')} />
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderDashboardContent()}
    </Layout>
  )
}

export default App
