import React from 'react';
import { ArrowRight, Zap, Shield, Camera, MessageCircle, Sun, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in" style={{ background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '160px 5% 100px 5%', 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center',
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

      {/* Terangin-style Product Section 1 */}
      <section id="produk" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '800px', background: '#0a192f', color: '#fff' }}>
        {/* Left Image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="/assets/images/event_concert.png" alt="VOLT PRO MAX" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        </div>
        
        {/* Right Content */}
        <div style={{ padding: '80px 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px', color: '#fff' }}>VOLT PRO MAX</h2>
          <span style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', display: 'block' }}>(Stage Edition)</span>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '40px', fontSize: '1rem' }}>
            Untuk mensuplai energi panggung konser dan event berskala besar, VOLT-GRID menawarkan kabinet baterai raksasa berkapasitas 10 kWh. Berkualitas tinggi, bebas emisi, dan tanpa suara mesin genset. Sangat kompetitif, hubungi kami untuk kustomisasi daya.
          </p>

          {/* Pricing Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', color: 'rgba(255,255,255,0.6)' }}>PAKET HARIAN!</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through', marginBottom: '8px' }}>Rp. 750.000</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', color: '#fff' }}>Rp. 500.000</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Per Hari!</div>
              
              <div style={{ textAlign: 'left', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                Termasuk:<br/>
                – Baterai 10 kWh<br/>
                – Kabel PDU Komplit<br/>
                – Standby Technician
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', color: 'rgba(255,255,255,0.6)' }}>BUSINESS SUBSCRIPTION!</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '16px', lineHeight: 1.5 }}>Menggunakan produk dalam jangka waktu panjang</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', color: '#fff' }}>Rp. 9.500.000</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Per Bulan</div>
            </div>
          </div>

          {/* Value Banner */}
          <div style={{ background: '#fff', color: '#0a192f', padding: '16px 24px', borderRadius: '8px', fontWeight: 800, textAlign: 'center', letterSpacing: '2px', marginBottom: '32px' }}>
            VALUE
          </div>

          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', alignItems: 'center' }}>
            <div style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1, color: '#fff' }}>4</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.4, paddingRight: '24px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
              Pilihan Skema<br/>Tersedia
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.8 }}>
              1. Sewa Harian Lepas Kunci<br/>
              2. Full Service dengan Teknisi<br/>
              3. Paket Mingguan Festival<br/>
              4. Custom Output Relay
            </div>
          </div>

          {/* Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Shield size={40} strokeWidth={1.5} color="#fff" />
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Instalasi Berkualitas</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Garansi 0 Downtime*</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Camera size={40} strokeWidth={1.5} color="#fff" />
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Dokumentasi Gratis dengan Drone**</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <MessageCircle size={40} strokeWidth={1.5} color="#fff" />
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Konsultasi Daya Gratis</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Sun size={40} strokeWidth={1.5} color="#fff" />
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Cocok untuk Indoor & Outdoor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terangin-style Product Section 2 (Flipped) */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '800px', background: '#0a192f', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {/* Left Content */}
        <div style={{ padding: '80px 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px', color: '#fff' }}>VOLT BASIC</h2>
          <span style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', display: 'block' }}>(Food Festival)</span>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '40px', fontSize: '1rem' }}>
            Didesain khusus untuk operasional tenan event seperti food truck dan pop-up booth. Menyediakan energi bersih tanpa asap buang yang mengganggu pengunjung festival makanan.
          </p>

          {/* Pricing Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', color: 'rgba(255,255,255,0.6)' }}>PAKET TENAN!</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', color: '#fff' }}>Rp. 150.000</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Per Hari!</div>
              
              <div style={{ textAlign: 'left', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                Termasuk:<br/>
                – Baterai 2 kWh<br/>
                – Colokan AC Standar<br/>
                – Setup Langsung
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <button onClick={() => navigate('/sewa')} style={{ padding: '16px 24px', background: '#fff', color: '#0a192f', border: 'none', borderRadius: '50px', fontWeight: 800, cursor: 'pointer', width: '100%' }}>Pesan Sekarang</button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="/assets/images/event_foodtruck.png" alt="VOLT BASIC" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        </div>
      </section>

    </div>
  );
};

export default LandingHome;
