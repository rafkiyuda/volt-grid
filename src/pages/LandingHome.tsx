import React from 'react';
import { ArrowRight, Zap, Shield, Camera, MessageCircle, Sun, CheckCircle2, Music, Utensils, Star, BatteryCharging } from 'lucide-react';
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

      {/* Trusted By Section */}
      <section style={{ padding: '60px 5%', background: '#fff', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px' }}>
            Dipercaya Oleh Lebih Dari 50+ Event Organizer & Production House
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '64px', opacity: 0.5, filter: 'grayscale(100%)' }}>
            {/* Placeholder Logos */}
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>LIVE NATION</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, fontStyle: 'italic' }}>ISMAYA LIVE</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>SOUNDRHYTHM</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'serif' }}>JAVA FESTIVAL</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>WE THE FEST</div>
          </div>
        </div>
      </section>

      {/* Why Choose VOLT-GRID */}
      <section style={{ padding: '100px 5%', background: 'var(--bg-color)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Mengapa Memilih VOLT-GRID?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Kami memikirkan ulang cara event diselenggarakan dengan menyediakan infrastruktur energi modern yang tidak hanya kuat, tapi juga berwawasan masa depan.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'var(--bg-color-secondary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(5, 150, 105, 0.1)', color: 'var(--status-success)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>Zero Emission & Noise</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Tidak ada asap knalpot, tidak ada suara bising generator diesel. Berikan pengalaman audio terbaik untuk penonton dan *environment* yang nyaman.</p>
            </div>
            <div style={{ background: 'var(--bg-color-secondary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                <Shield size={32} />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>Arus Stabil (Pure Sine Wave)</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Melindungi instrumen musik mahal, *lighting rig*, dan *LED screen* Anda dari fluktuasi voltase yang sering terjadi pada genset konvensional.</p>
            </div>
            <div style={{ background: 'var(--bg-color-secondary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--status-warning)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                <Zap size={32} />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>Skalabilitas Tinggi</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Mulai dari kebutuhan 2 kWh untuk pop-up cafe hingga puluhan MWh (megawatt-hour) tersinkronisasi untuk panggung utama konser mega.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Product Showcase (Restored Grid) */}
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

      {/* FAQ Section */}
      <section style={{ padding: '100px 5%', background: 'var(--bg-color)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Pertanyaan yang sering diajukan mengenai layanan penyewaan VOLT-GRID.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* FAQ 1 */}
            <div style={{ background: 'var(--bg-color-secondary)', padding: '32px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>Apakah VOLT-GRID aman digunakan di area outdoor saat hujan?</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Ya, unit seri VOLT PRO dan PRO MAX memiliki sertifikasi IP65 yang dirancang khusus untuk operasional event outdoor. Bodi kabinet kedap air sehingga aman meski terkena guyuran hujan.</p>
            </div>
            {/* FAQ 2 */}
            <div style={{ background: 'var(--bg-color-secondary)', padding: '32px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>Bagaimana jika daya baterai habis di tengah acara?</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Untuk paket *Full Service*, kami menyediakan *backup unit* di lokasi event. Teknisi kami yang *standby* akan melakukan proses *hot-swap* (pergantian baterai) tanpa menyebabkan *downtime* atau matinya aliran listrik.</p>
            </div>
            {/* FAQ 3 */}
            <div style={{ background: 'var(--bg-color-secondary)', padding: '32px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>Berapa lama baterai bisa bertahan?</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Ketahanan baterai berbanding lurus dengan beban daya yang Anda gunakan. Tim konsultan daya kami akan menghitung *load* alat-alat Anda (lighting, sound system, mesin pembuat kopi) untuk memberikan estimasi dan rekomendasi kapasitas yang tepat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Masih Ada Pertanyaan) */}
      <section style={{ padding: '0 5% 100px 5%', background: 'var(--bg-color)' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          background: '#0ea5e9', /* A pleasant green/teal brand color */
          backgroundImage: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          borderRadius: '24px', 
          padding: '64px', 
          textAlign: 'center',
          color: '#fff',
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>Masih Ada Pertanyaan?</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Tim kami siap membantu Anda. Hubungi kami untuk informasi lebih lanjut.
          </p>
          <button style={{ 
            padding: '16px 32px', 
            background: '#ffffff', 
            color: '#059669', 
            border: 'none', 
            borderRadius: '12px', 
            fontWeight: 800, 
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
          }}>
            Hubungi Kami via WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
};

export default LandingHome;
