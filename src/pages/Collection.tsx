import React from 'react';
import { ExternalLink, CheckCircle, Package } from 'lucide-react';

const partners = [
  { id: 1, name: 'Waste4Change', desc: 'Official drop point for electronic waste.', status: 'Connected', color: 'var(--accent-primary)' },
  { id: 2, name: 'Rekosistem', desc: 'Community recycling hub network.', status: 'Connected', color: 'var(--accent-primary)' },
  { id: 3, name: 'E-Waste Bank', desc: 'Local electronic waste bank program.', status: 'Pending sync', color: 'var(--status-warning)' }
];

const Collection: React.FC = () => {
  return (
    <div className="page-container animate-fade-in">
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Collection Hub</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Manage raw material intake from partner portals.</p>
      </div>

      <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
        <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '12px' }}>
          <Package color="var(--accent-secondary)" size={24} />
        </div>
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>1,450 Units</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Batteries collected this week</div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.1rem', marginTop: '24px', marginBottom: '16px' }}>Partner Portals</h3>
      
      <div className="responsive-grid-2">
        {partners.map(partner => (
          <div key={partner.id} className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--bg-color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, border: '1px solid var(--glass-border)' }}>
                  {partner.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>{partner.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{partner.desc}</div>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: partner.color }}>
                {partner.status === 'Connected' ? <CheckCircle size={14} /> : <div style={{width:'8px', height:'8px', borderRadius:'50%', background:partner.color}}></div>}
                {partner.status}
              </div>
              <button style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                Open Portal <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Wrapper Preview Concept */}
      <div style={{ marginTop: '32px', textAlign: 'center', color: 'var(--text-tertiary)' }}>
        <div style={{ border: '1px dashed var(--glass-border)', padding: '32px', borderRadius: '16px', background: 'rgba(0,0,0,0.2)' }}>
          <p style={{ fontSize: '0.9rem' }}>Select a partner to open their wrapper view.</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
