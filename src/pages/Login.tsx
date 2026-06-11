import React, { useState } from 'react';
import { Zap, ArrowRight, Lock, Mail } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
  onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onLoginSuccess();
  };

  return (
    <div className="page-container animate-fade-in" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'url(/assets/images/control_room.png) center/cover no-repeat',
      position: 'relative'
    }}>
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)' }}></div>
      
      <div className="card" style={{ 
        width: '100%', 
        maxWidth: '400px', 
        zIndex: 10,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        padding: '40px 32px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div className="brand-icon pulse-glow" style={{ width: '48px', height: '48px' }}>
              <Zap size={24} strokeWidth={2.5} />
            </div>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>Masuk ke Dashboard</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>Silakan masukkan kredensial admin Anda.</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="var(--text-tertiary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@volt-grid.com"
                style={{ 
                  width: '100%', padding: '12px 12px 12px 40px', 
                  borderRadius: '12px', border: '1px solid var(--glass-border)', 
                  background: 'var(--bg-color-secondary)', color: 'var(--text-primary)',
                  fontSize: '1rem', outline: 'none'
                }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="var(--text-tertiary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{ 
                  width: '100%', padding: '12px 12px 12px 40px', 
                  borderRadius: '12px', border: '1px solid var(--glass-border)', 
                  background: 'var(--bg-color-secondary)', color: 'var(--text-primary)',
                  fontSize: '1rem', outline: 'none'
                }} 
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="#" style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'none' }}>Lupa Password?</a>
          </div>

          <button type="submit" style={{ 
            width: '100%', padding: '14px', borderRadius: '12px', 
            background: 'var(--accent-primary)', color: '#fff', border: 'none', 
            cursor: 'pointer', fontWeight: 700, fontSize: '1rem', 
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', 
            marginTop: '8px', boxShadow: '0 8px 24px var(--accent-primary-glow)' 
          }}>
            Login <ArrowRight size={18} />
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>
            &larr; Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
