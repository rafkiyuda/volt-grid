import React from 'react';
import { Zap } from 'lucide-react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      {/* Navigation */}
      <nav className="app-header" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <div className="brand-icon" style={{ width: '36px', height: '36px' }}>
            <Zap size={20} strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>VOLT-GRID</span>
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', fontWeight: 600, fontSize: '0.95rem' }} className="desktop-nav">
          <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Beranda</Link>
          <Link to="/tentang" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Tentang Kami</Link>
          <Link to="/sewa" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Paket Sewa</Link>
        </div>

        <div>
          <button 
            onClick={() => navigate('/login')}
            style={{ 
              padding: '10px 24px', borderRadius: '50px', background: 'var(--accent-primary)', 
              color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700,
              boxShadow: '0 4px 12px var(--accent-primary-glow)', transition: 'transform 0.2s'
            }}
          >
            Login Dashboard
          </button>
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ padding: '40px 5%', background: 'var(--bg-color-secondary)', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>&copy; 2026 VOLT-GRID Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PublicLayout;
