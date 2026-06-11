import React from 'react';
import { Settings, CheckCircle2, Wrench, RefreshCw } from 'lucide-react';

const Operation: React.FC = () => {
  return (
    <div className="page-container animate-fade-in">
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Operation & Swap</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Track sorting, assembly, and hub charging status.</p>
      </div>

      {/* Sorting & Grading */}
      <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Sorting & Grading</h3>
      <div className="responsive-grid-4">
        {[
          { label: 'Received', count: 1450, color: 'var(--text-primary)' },
          { label: 'Testing', count: 320, color: 'var(--status-warning)' },
          { label: 'Passed', count: 890, color: 'var(--status-success)' },
          { label: 'Rejected', count: 240, color: 'var(--status-danger)' },
        ].map((item, i) => (
          <div key={i} className="card" style={{ padding: '12px', textAlign: 'center', marginBottom: 0 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: item.color }}>{item.count}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Assembly */}
      <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Assembly Progress</h3>
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ padding: '8px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
            <Wrench color="var(--accent-secondary)" size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>VOLT Basic Batch #42</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>50 units in production</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '8px' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Cell Arrangement</span>
          <span style={{ color: 'var(--status-success)', display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={12} /> Done</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '8px' }}>
          <span style={{ color: 'var(--text-secondary)' }}>BMS Integration</span>
          <span style={{ color: 'var(--status-success)', display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={12} /> Done</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '16px' }}>
          <span style={{ color: 'var(--text-primary)' }}>Final Enclosure</span>
          <span style={{ color: 'var(--status-warning)', display: 'flex', alignItems: 'center', gap: '4px' }}><Settings size={12} className="pulse-glow" /> In Progress</span>
        </div>
        
        <div style={{ width: '100%', height: '6px', background: 'var(--bg-color-secondary)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: '85%', height: '100%', background: 'var(--accent-secondary)', borderRadius: '3px' }}></div>
        </div>
      </div>

      {/* Charging & Swap */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Charging Hubs</h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}><RefreshCw size={12} /> Live</span>
      </div>
      
      <div className="card" style={{ background: 'linear-gradient(to right, rgba(16, 185, 129, 0.05), rgba(255, 255, 255, 0.5))' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ fontWeight: 600 }}>Hub #1 (Kemang)</div>
          <div style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-primary)', borderRadius: '12px' }}>Solar Active</div>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Ready to Swap</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-primary)' }}>24 <span style={{fontSize: '0.9rem', fontWeight: 400, color: 'var(--text-tertiary)'}}>/ 40</span></div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Charging</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--status-warning)' }}>16</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Operation;
