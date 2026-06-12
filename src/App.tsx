import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import PublicLayout from './components/PublicLayout';
import LandingHome from './pages/LandingHome';
import About from './pages/About';
import PublicRent from './pages/PublicRent';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Operation from './pages/Operation';
import Analytics from './pages/Analytics';
import Rent from './pages/Rent';
import Login from './pages/Login';

export type TabType = 'home' | 'collection' | 'operation' | 'analytics' | 'rent';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const navigate = useNavigate();

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'collection': return <Collection />;
      case 'operation': return <Operation />;
      case 'analytics': return <Analytics />;
      case 'rent': return <Rent onRentAction={() => navigate('/login')} />;
      default: return <Home />;
    }
  };

  return (
    <Routes>
      {/* Public Pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingHome />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/sewa" element={<PublicRent />} />
      </Route>

      {/* Auth */}
      <Route 
        path="/login" 
        element={<Login onLoginSuccess={() => navigate('/dashboard')} onBack={() => navigate(-1)} />} 
      />

      {/* Dashboard System */}
      <Route 
        path="/dashboard/*" 
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            {renderDashboardContent()}
          </Layout>
        } 
      />
    </Routes>
  );
}

export default App;
