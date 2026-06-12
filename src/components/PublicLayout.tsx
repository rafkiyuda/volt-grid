import React, { useState } from 'react';
import { Zap, QrCode } from 'lucide-react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { ScannerModal } from './ScannerModal';

const PublicLayout: React.FC = () => {
  const navigate = useNavigate();
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const handleScanSuccess = () => {
    setIsScannerOpen(false);
    // Simulate successful scan redirecting to Rent page (or a specific rented product)
    alert("Berhasil scan barcode perangkat! Mengarahkan ke form penyewaan...");
    navigate('/sewa');
  };

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden', position: 'relative' }}>
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

      {/* Floating Action Button */}
      <div style={{ position: 'fixed', bottom: '40px', right: '40px', zIndex: 9000 }}>
        <button 
          onClick={() => setIsScannerOpen(true)}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '16px 24px', borderRadius: '50px', 
            background: 'var(--status-success)', color: '#fff', 
            border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '1.1rem',
            boxShadow: '0 10px 20px rgba(16, 185, 129, 0.4)', transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <QrCode size={24} /> Scan & Rent
        </button>
      </div>

      <ScannerModal 
        isOpen={isScannerOpen} 
        onClose={() => setIsScannerOpen(false)} 
        onSuccess={handleScanSuccess} 
      />

      {/* Footer */}
      <footer style={{ background: '#020617', color: 'rgba(255,255,255,0.7)', padding: '80px 5% 40px 5%', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '64px', marginBottom: '64px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '36px', height: '36px', background: 'var(--accent-primary)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                <Zap size={20} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>VOLT-GRID</span>
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: '24px', fontSize: '0.95rem' }}>
              Penyedia infrastruktur energi bersih portabel untuk industri kreatif dan mega event. Silent power, zero emission.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>IG</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>LI</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>YT</div>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px' }}>Produk</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/sewa" style={{ color: 'inherit', textDecoration: 'none' }}>VOLT PRO MAX (Stage)</Link></li>
              <li><Link to="/sewa" style={{ color: 'inherit', textDecoration: 'none' }}>VOLT PRO (Medium)</Link></li>
              <li><Link to="/sewa" style={{ color: 'inherit', textDecoration: 'none' }}>VOLT BASIC (Tenant)</Link></li>
              <li><Link to="/sewa" style={{ color: 'inherit', textDecoration: 'none' }}>Custom PDU Setup</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px' }}>Perusahaan</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/tentang" style={{ color: 'inherit', textDecoration: 'none' }}>Tentang Kami</Link></li>
              <li><Link to="/tentang" style={{ color: 'inherit', textDecoration: 'none' }}>Visi & Misi</Link></li>
              <li><Link to="#" style={{ color: 'inherit', textDecoration: 'none' }}>Karir</Link></li>
              <li><Link to="#" style={{ color: 'inherit', textDecoration: 'none' }}>Blog & Berita</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px' }}>Hubungi Kami</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>Gedung VOLT Tower, Jl. Energi Bersih No. 12, Jakarta Selatan</li>
              <li>halo@voltgrid.co.id</li>
              <li>+62 811 9999 8888</li>
            </ul>
          </div>
        </div>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
          <p>&copy; 2026 VOLT-GRID Technologies. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Kebijakan Privasi</span>
            <span>Syarat & Ketentuan</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
