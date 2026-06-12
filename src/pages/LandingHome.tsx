import React from 'react';
import { ArrowRight, Zap, Settings, Activity, Cpu } from 'lucide-react';
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
              <Zap size={16} /> Tenaga Baterai Portabel untuk Industri
            </div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-1px' }}>
              Energi Mobilitas <span className="gradient-text">Untuk Pengolahan.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '90%' }}>
              VOLT-GRID memberdayakan sektor industri dan pertanian dengan baterai portabel berkapasitas tinggi. Nyalakan mesin pengolahan Anda di mana saja tanpa genset bising atau kabel panjang.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={() => document.getElementById('penggunaan')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ 
                  padding: '16px 32px', borderRadius: '50px', background: 'var(--text-primary)', 
                  color: 'var(--bg-color)', border: 'none', cursor: 'pointer', fontWeight: 700,
                  fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px'
                }}
              >
                Lihat Solusi <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Visual composition of VOLT batteries powering machines */}
            <div style={{ position: 'relative', height: '600px', width: '100%' }}>
              <img src="/assets/images/pengolahan_industri.png" alt="VOLT Battery Powering Industrial Machine" style={{ position: 'absolute', bottom: '0', left: '0', width: '70%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 2 }} />
              <img src="/assets/images/pengolahan_agrikultur.png" alt="VOLT Mobile Cabinet for Agriculture" style={{ position: 'absolute', top: '0', right: '0', width: '55%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Penggunaan Baterai untuk Mesin Pengolahan Section */}
      <section id="penggunaan" style={{ padding: '100px 5%', background: 'var(--bg-color-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Dukungan VOLT-GRID untuk Mesin Pengolahan</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Jangan biarkan keterbatasan listrik menghambat produksi Anda. Baterai sewa kami sanggup menyuplai daya untuk mesin berat Anda.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {/* Use Case 1 */}
            <div className="card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', borderRadius: '24px', overflow: 'hidden' }}>
                <img src="/assets/images/pengolahan_industri.png" alt="Pengolahan Industri Kecil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Settings size={14} /> Industri Kecil
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>Penggerak Mesin Mixer & Prosesor</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                Seri VOLT PRO dan VOLT BASIC (Output hingga 5000W) sangat ideal untuk menyalakan mesin pengaduk, pemanas, dan mixer pada pabrik skala kecil di area tanpa instalasi listrik 3-phase.
              </p>
              <button onClick={() => navigate('/sewa')} style={{ padding: '12px 24px', background: 'transparent', border: '2px solid var(--text-primary)', color: 'var(--text-primary)', borderRadius: '50px', fontWeight: 700, cursor: 'pointer' }}>Sewa VOLT PRO</button>
            </div>

            {/* Use Case 2 */}
            <div className="card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', borderRadius: '24px', overflow: 'hidden' }}>
                <img src="/assets/images/pengolahan_agrikultur.png" alt="Pengolahan Hasil Panen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 12px', background: 'rgba(5, 150, 105, 0.1)', color: 'var(--status-success)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Activity size={14} /> Agrikultur
                </span>
                <span style={{ padding: '6px 12px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--status-warning)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Cpu size={14} /> Heavy Duty
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>Pengolahan Hasil Panen On-Site</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                Bawa kabinet VOLT PRO MAX langsung ke ladang pertanian Anda. Tenagai mesin penggiling, mesin sortir padi, dan penyaring gandum di tengah sawah tanpa pusing mencari colokan listrik.
              </p>
              <button onClick={() => navigate('/sewa')} style={{ padding: '12px 24px', background: 'transparent', border: '2px solid var(--text-primary)', color: 'var(--text-primary)', borderRadius: '50px', fontWeight: 700, cursor: 'pointer' }}>Sewa VOLT PRO MAX</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHome;
