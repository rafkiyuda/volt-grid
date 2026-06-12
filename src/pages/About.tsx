import React from 'react';
import { Shield, Globe, Activity } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Vision Section */}
      <section style={{ padding: '160px 5% 100px 5%', background: 'var(--bg-color-secondary)' }}>
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
      <section style={{ padding: '100px 5%', background: 'var(--bg-color)' }}>
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
    </div>
  );
};

export default About;
