import React from 'react';
import { ArrowRight, Zap, Music, Utensils, Star, BatteryCharging } from 'lucide-react';
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
              <Zap size={16} /> Solusi Energi Cerdas Tanpa Asap
            </div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-1px' }}>
              Silent Power <span className="gradient-text">Untuk Event Anda.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '90%' }}>
              Lupakan genset diesel yang bising dan berpolusi. VOLT-GRID menyewakan baterai portabel kapasitas raksasa untuk menghidupkan panggung konser, festival kuliner, dan exhibition *outdoor* secara senyap dan ramah lingkungan.
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
                Jelajahi Produk <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Visual composition of VOLT batteries at events */}
            <div style={{ position: 'relative', height: '600px', width: '100%' }}>
              <img src="/assets/images/event_foodtruck.png" alt="VOLT Battery at Food Festival" style={{ position: 'absolute', bottom: '0', left: '0', width: '70%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 2 }} />
              <img src="/assets/images/event_concert.png" alt="VOLT Mobile Cabinet at Concert Stage" style={{ position: 'absolute', top: '0', right: '0', width: '55%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Product Showcase */}
      <section id="produk" style={{ padding: '100px 5%', background: 'var(--bg-color-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Lini Produk Utama</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Infrastruktur energi profesional yang didesain khusus untuk memenuhi kebutuhan produksi event skala kecil hingga mega konser.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {/* Product 1 */}
            <div className="card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', borderRadius: '24px', overflow: 'hidden' }}>
                <img src="/assets/images/event_concert.png" alt="VOLT PRO MAX Stage Power" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Music size={14} /> Mega Concert
                </span>
                <span style={{ padding: '6px 12px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--status-warning)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <BatteryCharging size={14} /> 10 kWh
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>VOLT PRO MAX (Stage Edition)</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                Solusi power distribution unit (PDU) berbentuk kabinet berkapasitas 10 kWh. Sanggup menyuplai daya untuk tata cahaya (lighting rig), sound system FOH, dan LED Screen raksasa secara stabil tanpa fluktuasi arus.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: 'var(--text-primary)', fontWeight: 600 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><Star size={16} color="var(--accent-primary)" /> Output hingga 10,000W</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><Star size={16} color="var(--accent-primary)" /> Zero Noise & Zero Emission</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Star size={16} color="var(--accent-primary)" /> Cocok untuk main stage & rigging</li>
              </ul>
              <button onClick={() => navigate('/sewa')} style={{ padding: '12px 24px', background: 'var(--text-primary)', color: 'var(--bg-color)', border: 'none', borderRadius: '50px', fontWeight: 700, cursor: 'pointer' }}>Lihat Detail Sewa</button>
            </div>

            {/* Product 2 */}
            <div className="card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', background: 'var(--glass-bg)', borderRadius: '24px', overflow: 'hidden' }}>
                <img src="/assets/images/event_foodtruck.png" alt="VOLT BASIC Food Festival" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 12px', background: 'rgba(5, 150, 105, 0.1)', color: 'var(--status-success)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Utensils size={14} /> Food Festival
                </span>
                <span style={{ padding: '6px 12px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--status-warning)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <BatteryCharging size={14} /> 2 kWh - 5 kWh
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>VOLT PRO & BASIC</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                Baterai portabel yang dirancang untuk mendukung operasional tenan event seperti *food truck*, *pop-up booth*, dan instalasi seni interaktif. Ukurannya ringkas namun bertenaga tinggi.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: 'var(--text-primary)', fontWeight: 600 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><Star size={16} color="var(--accent-primary)" /> Output 1000W - 5000W</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><Star size={16} color="var(--accent-primary)" /> Plug & Play (Colokan AC standar)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Star size={16} color="var(--accent-primary)" /> Cocok untuk booth kuliner & mesin espresso</li>
              </ul>
              <button onClick={() => navigate('/sewa')} style={{ padding: '12px 24px', background: 'var(--text-primary)', color: 'var(--bg-color)', border: 'none', borderRadius: '50px', fontWeight: 700, cursor: 'pointer' }}>Lihat Detail Sewa</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHome;
