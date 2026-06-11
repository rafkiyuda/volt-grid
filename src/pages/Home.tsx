import React from 'react';
import { Battery, Zap, AlertTriangle, ArrowRight, Activity } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="page-container animate-fade-in">
      <div style={{ marginBottom: '48px', paddingLeft: '8px' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>Hello, Admin 👋</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Welcome back to VOLT-GRID control center.</p>
      </div>

      <div className="card" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(255, 255, 255, 0.8))', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="stat-label">System Status</div>
            <div className="stat-value" style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></div>
              Optimal
            </div>
          </div>
          <div style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '12px' }}>
            <Activity color="var(--accent-primary)" />
          </div>
        </div>
        <div style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
          All hubs are operating normally. Energy distribution is stable.
        </div>
      </div>

      <div className="responsive-grid-4">
        <div className="card" style={{ marginBottom: 0 }}>
          <Zap size={20} color="var(--status-warning)" style={{ marginBottom: '8px' }} />
          <div className="stat-label">Energy Dist.</div>
          <div className="stat-value">4.2 <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>MWh</span></div>
        </div>
        <div className="card" style={{ marginBottom: 0 }}>
          <Battery size={20} color="var(--accent-secondary)" style={{ marginBottom: '8px' }} />
          <div className="stat-label">Active Units</div>
          <div className="stat-value">1,284</div>
        </div>
        <div className="card" style={{ marginBottom: 0 }}>
          <Activity size={20} color="var(--accent-primary)" style={{ marginBottom: '8px' }} />
          <div className="stat-label">Avg Health</div>
          <div className="stat-value">92%</div>
        </div>
        <div className="card" style={{ marginBottom: 0 }}>
          <Zap size={20} color="var(--status-info)" style={{ marginBottom: '8px' }} />
          <div className="stat-label">Charging</div>
          <div className="stat-value">342</div>
        </div>
      </div>

      <div className="card" style={{ borderLeft: '4px solid var(--status-danger)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{ padding: '8px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>
            <AlertTriangle color="var(--status-danger)" size={20} />
          </div>
          <div style={{ fontWeight: 600 }}>Action Required</div>
        </div>
        <p style={{ fontSize: '0.9rem', marginBottom: '12px' }}>Hub #4 (Sudirman) is reporting low capacity for swap units during peak hours.</p>
        <button style={{ 
          background: 'rgba(239, 68, 68, 0.1)', 
          color: 'var(--status-danger)', 
          border: '1px solid rgba(239, 68, 68, 0.3)', 
          padding: '8px 16px', 
          borderRadius: '8px',
          fontSize: '0.85rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          Resolve Alert <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
};

export default Home;
