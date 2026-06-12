import React from 'react';
import { ArrowRight, Leaf, Sun, Wind, Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ 
        padding: '160px 5% 100px 5%', 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center',
        background: 'var(--bg-color)' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50px', color: 'var(--status-success)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '24px' }}>
              <Leaf size={16} /> Solusi Energi Bersih & Pengolahan
            </div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-1px' }}>
              Pembangkit Energi <span className="gradient-text">Untuk Pengolahan.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '90%' }}>
              VOLT-GRID menghadirkan sistem teknologi energi terbarukan—mulai dari turbin angin skala kecil hingga panel surya penggerak irigasi—untuk sektor pertanian dan industri pengolahan.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={() => document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ 
                  padding: '16px 32px', borderRadius: '50px', background: 'var(--text-primary)', 
                  color: 'var(--bg-color)', border: 'none', cursor: 'pointer', fontWeight: 700,
                  fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px'
                }}
              >
                Lihat Produk <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Visual composition of products */}
            <div style={{ position: 'relative', height: '600px', width: '100%' }}>
              <img src="/assets/images/product_solar.png" alt="Solar Irrigation Box" style={{ position: 'absolute', bottom: '0', left: '0', width: '70%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 2 }} />
              <img src="/assets/images/product_wind.png" alt="Wind Turbine" style={{ position: 'absolute', top: '0', right: '0', width: '55%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Produk Pengolahan Section */}
      <section id="produk" style={{ padding: '100px 5%', background: 'var(--bg-color-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Produk Pengolahan Energi</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Dirancang khusus untuk mendukung operasional pengolahan dan agrikultur dengan kemandirian energi.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {/* Product 1 */}
            <div className="card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', borderRadius: '24px' }}>
                <img src="/assets/images/product_wind.png" alt="Turbin Angin Agri-Wind" style={{ maxHeight: '90%', mixBlendMode: 'multiply' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 12px', background: 'rgba(5, 150, 105, 0.1)', color: 'var(--status-success)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Wind size={14} /> Tenaga Angin
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>Turbin Angin Skala Kecil</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                Pembangkit listrik tenaga angin yang dirancang untuk ladang pertanian terbuka. Efisiensi tinggi pada kecepatan angin rendah, cocok untuk menggerakkan mesin pengolahan panen.
              </p>
              <button onClick={() => navigate('/sewa')} style={{ padding: '12px 24px', background: 'transparent', border: '2px solid var(--text-primary)', color: 'var(--text-primary)', borderRadius: '50px', fontWeight: 700, cursor: 'pointer' }}>Lihat Paket Sewa</button>
            </div>

            {/* Product 2 */}
            <div className="card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', borderRadius: '24px' }}>
                <img src="/assets/images/product_solar.png" alt="Sistem Surya Irigasi" style={{ maxHeight: '90%', mixBlendMode: 'multiply' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 12px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--status-warning)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sun size={14} /> Tenaga Surya
                </span>
                <span style={{ padding: '6px 12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Droplet size={14} /> Irigasi
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>Solar Energy Box & Irigasi</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                Integrasi panel surya cerdas dengan pompa air untuk aerasi kolam ikan dan sistem irigasi cerdas. Tidak perlu tarik kabel panjang, energi langsung dari matahari.
              </p>
              <button onClick={() => navigate('/sewa')} style={{ padding: '12px 24px', background: 'transparent', border: '2px solid var(--text-primary)', color: 'var(--text-primary)', borderRadius: '50px', fontWeight: 700, cursor: 'pointer' }}>Lihat Paket Sewa</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHome;
