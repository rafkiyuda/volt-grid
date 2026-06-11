import React from 'react';
import { Zap, ArrowRight, Shield, Globe, Activity } from 'lucide-react';
import Rent from './Rent';

interface LandingPageProps {
  onLoginClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 100, 
        background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--glass-border)', padding: '16px 5%'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="brand-icon" style={{ width: '36px', height: '36px' }}>
              <Zap size={20} strokeWidth={2.5} />
            </div>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>VOLT-GRID</span>
          </div>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', fontWeight: 600, fontSize: '0.95rem' }} className="desktop-nav">
            <a href="#beranda" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Beranda</a>
            <a href="#visi" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Visi</a>
            <a href="#analitik" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Analitik AI</a>
            <a href="#sewa" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Paket Sewa</a>
          </div>

          <div>
            <button 
              onClick={onLoginClick}
              style={{ 
                padding: '10px 24px', borderRadius: '50px', background: 'var(--accent-primary)', 
                color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700,
                boxShadow: '0 4px 12px var(--accent-primary-glow)', transition: 'transform 0.2s'
              }}
            >
              Login Dashboard
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" style={{ paddingTop: '160px', paddingBottom: '100px', paddingLeft: '5%', paddingRight: '5%', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 80% 30%, rgba(5, 150, 105, 0.05), transparent 50%)', zIndex: 0 }}></div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', position: 'relative', zIndex: 10 }}>
          <div>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(5, 150, 105, 0.1)', color: 'var(--accent-primary)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Energy-as-a-Service 2026</span>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-1px' }}>
              Energi Portabel, <br/>
              <span style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tanpa Batas.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '500px' }}>
              Solusi baterai pintar untuk mobilitas, UMKM, dan masa depan kota berkelanjutan. Akses energi bersih kapan saja, di mana saja.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={onLoginClick} style={{ padding: '16px 32px', borderRadius: '16px', background: 'var(--text-primary)', color: 'var(--bg-color)', border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Coba Dashboard <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="/assets/images/hero_battery.png" alt="VOLT Battery" style={{ width: '100%', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', animation: 'float 6s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '24px', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(5, 150, 105, 0.1)', padding: '12px', borderRadius: '50%' }}><Zap size={24} color="var(--accent-primary)" /></div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>100%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Zero Emissions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="visi" style={{ padding: '100px 5%', background: 'var(--bg-color-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div style={{ order: 2 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '24px' }}>Mewujudkan Kota Pintar yang Sebenarnya.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              Visi kami adalah menciptakan ekosistem infrastruktur yang berkelanjutan. VOLT-GRID mengintegrasikan penyimpanan energi terdistribusi dengan tata kota modern untuk mengurangi jejak karbon secara drastis.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <Shield size={32} color="var(--accent-primary)" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>Renewable Source</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Setiap unit kami diisi menggunakan tenaga surya dan angin.</p>
              </div>
              <div>
                <Globe size={32} color="var(--accent-secondary)" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>Decentralized</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mendistribusikan energi secara merata ke seluruh pelosok kota.</p>
              </div>
            </div>
          </div>
          <div style={{ order: 1 }}>
            <img src="/assets/images/smart_city.png" alt="Smart City Vision" style={{ width: '100%', borderRadius: '48px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }} />
          </div>
        </div>
      </section>

      {/* Data & AI Section */}
      <section id="analitik" style={{ padding: '100px 5%', background: 'var(--bg-color)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', background: 'var(--text-primary)', borderRadius: '48px', padding: '64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: 'radial-gradient(circle at 80% 50%, rgba(5, 150, 105, 0.2), transparent 60%)' }}></div>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '24px' }}>Analitik AI untuk Manajemen Energi Terpusat.</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '40px' }}>
              VOLT-GRID bukan sekadar hardware. Platform kami dilengkapi dengan analitik AI yang memprediksi kebutuhan daya secara *real-time*, memantau kesehatan baterai, dan melacak distribusi unit di seluruh kota.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Activity size={24} color="var(--accent-primary)" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Live Uptime</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>99.9%</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <img src="/assets/images/control_room.png" alt="Control Room Dashboard" style={{ width: '100%', borderRadius: '24px', border: '8px solid rgba(255,255,255,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Rent Catalog Section */}
      <section id="sewa" style={{ padding: '100px 5%', background: 'var(--bg-color-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '16px' }}>Pilih Paket Energi Anda.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Pilih baterai yang sesuai dengan kebutuhan daya Anda. Pesan sekarang dan ambil di Hub terdekat.</p>
          </div>
          
          {/* We reuse the Rent component here */}
          <Rent onRentAction={onLoginClick} hideHeader={true} />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 5%', background: 'var(--bg-color-secondary)', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>&copy; 2026 VOLT-GRID Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
