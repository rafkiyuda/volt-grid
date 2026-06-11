import React from 'react';
import { Activity, Thermometer, Zap, Navigation, AlertOctagon } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="page-container animate-fade-in">
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Monitoring & Analytics</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Real-time telemetry and fleet intelligence.</p>
      </div>

      {/* Main Graph Area (Mock) */}
      <div className="card" style={{ padding: '24px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ fontWeight: 600 }}>Fleet Battery Health</div>
          <div style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>+2.4% this month</div>
        </div>
        
        {/* CSS Mock Chart */}
        <div style={{ height: '120px', display: 'flex', alignItems: 'flex-end', gap: '8px', marginTop: '16px' }}>
          {[60, 65, 58, 70, 75, 82, 92].map((height, i) => (
            <div key={i} style={{ 
              flex: 1, 
              height: `${height}%`, 
              background: i === 6 ? 'var(--accent-primary)' : 'rgba(16, 185, 129, 0.2)', 
              borderRadius: '4px 4px 0 0',
              transition: 'height 0.5s ease-out'
            }}></div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>

      <div className="responsive-grid-4">
        <div className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Thermometer size={18} color="var(--status-warning)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Avg Temp</span>
          </div>
          <div className="stat-value">32.4°C</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--status-success)' }}>Normal range</div>
        </div>
        
        <div className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Zap size={18} color="var(--accent-secondary)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Avg Voltage</span>
          </div>
          <div className="stat-value">48.2V</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--status-success)' }}>Stable</div>
        </div>
        
        <div className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Activity size={18} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Avg Current</span>
          </div>
          <div className="stat-value">12.5A</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Discharging</div>
        </div>
        
        <div className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Navigation size={18} color="var(--status-info)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Active GPS</span>
          </div>
          <div className="stat-value">1,104</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Units tracking</div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Recent Anomalies</h3>
      <div className="card" style={{ borderLeft: '3px solid var(--status-warning)', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <AlertOctagon size={18} color="var(--status-warning)" style={{ marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Temperature Spike Detected</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Unit V-PRO-882 (South Jakarta) reached 45°C. Cooling protocol initiated automatically.</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>12 mins ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
