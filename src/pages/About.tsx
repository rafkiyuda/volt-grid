import React from 'react';
import { Shield, Globe, Activity, Users, BatteryCharging, Clock, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in" style={{ background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      {/* Vision Section */}
      <section style={{ padding: '160px 5% 100px 5%', background: 'var(--bg-color-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div style={{ order: 2 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '24px' }}>Mewujudkan Infrastruktur Event yang Hijau dan Andal.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              Berawal dari kegelisahan terhadap polusi suara dan emisi gas buang dari generator diesel konvensional di berbagai konser dan festival, VOLT-GRID hadir sebagai solusi energi bersih portabel skala besar.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <Shield size={32} color="var(--status-success)" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>100% Zero Emission</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Memberikan kenyamanan maksimal bagi penonton tanpa asap knalpot dan bau bahan bakar.</p>
              </div>
              <div>
                <Globe size={32} color="#3b82f6" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>Silent Operation</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Menghilangkan polusi suara sehingga kualitas audio acara Anda tidak terganggu.</p>
              </div>
            </div>
          </div>
          <div style={{ order: 1 }}>
            <img src="/assets/images/event_concert.png" alt="Concert Stage Vision" style={{ width: '100%', borderRadius: '48px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
          </div>
        </div>
      </section>

      {/* Data & Parameters Section */}
      <section style={{ padding: '80px 5%', background: '#ffffff', color: 'var(--text-primary)', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '64px', color: 'var(--text-primary)' }}>VOLT-GRID Dalam Angka</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            <div style={{ padding: '32px', background: '#f8fafc', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <Users size={48} color="var(--status-success)" style={{ margin: '0 auto 24px auto' }} />
              <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '8px' }}>500+</div>
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Event Terlayani</div>
            </div>
            <div style={{ padding: '32px', background: '#f8fafc', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <BatteryCharging size={48} color="var(--status-success)" style={{ margin: '0 auto 24px auto' }} />
              <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '8px' }}>50 MWh</div>
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Kapasitas Tersedia</div>
            </div>
            <div style={{ padding: '32px', background: '#f8fafc', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <CheckCircle2 size={48} color="var(--status-success)" style={{ margin: '0 auto 24px auto' }} />
              <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '8px' }}>100%</div>
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Uptime Record</div>
            </div>
            <div style={{ padding: '32px', background: '#f8fafc', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <Clock size={48} color="var(--status-success)" style={{ margin: '0 auto 24px auto' }} />
              <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '8px' }}>24/7</div>
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Support Teknisi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section style={{ padding: '100px 5%', background: 'var(--bg-color)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', background: '#1e293b', borderRadius: '48px', padding: '64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: 'radial-gradient(circle at 80% 50%, rgba(5, 150, 105, 0.15), transparent 60%)' }}></div>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '24px' }}>Sistem Manajemen Daya Cerdas.</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '40px' }}>
              Setiap kabinet VOLT PRO MAX dilengkapi dengan sistem telemetri jarak jauh. Tim kami dapat memantau konsumsi daya event Anda, memprediksi sisa baterai, dan menyeimbangkan beban listrik secara *real-time* dari *command center* kami.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Activity size={24} color="var(--accent-primary)" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Real-time Monitoring</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>Active</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <img src="/assets/images/control_room.png" alt="Command Center Dashboard" style={{ width: '100%', borderRadius: '24px', border: '8px solid rgba(255,255,255,0.1)' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
