import React, { useState } from 'react';
import { Activity, Thermometer, Zap, Download, Search, Filter, MoreVertical, CheckCircle, AlertTriangle } from 'lucide-react';

const mockData = [
  { id: 'V-PRO-882', location: 'Hub #1 (Kemang)', status: 'Warning', temp: 45.2, volt: 47.8, current: 15.2, health: 88, lastUpdate: '2 mins ago' },
  { id: 'V-MAX-104', location: 'Gudang Pusat', status: 'Active', temp: 32.1, volt: 51.2, current: -2.1, health: 100, lastUpdate: 'Just now' },
  { id: 'V-MIN-553', location: 'Hub #4 (Sudirman)', status: 'Active', temp: 28.5, volt: 12.4, current: -0.5, health: 96, lastUpdate: '5 mins ago' },
  { id: 'V-BAS-991', location: 'Hub #2 (Tebet)', status: 'Idle', temp: 26.0, volt: 24.1, current: 0.0, health: 91, lastUpdate: '1 hr ago' },
  { id: 'V-PRO-112', location: 'Hub #1 (Kemang)', status: 'Active', temp: 34.6, volt: 48.1, current: 12.5, health: 94, lastUpdate: 'Just now' },
  { id: 'V-MAX-209', location: 'Event (Senayan)', status: 'Critical', temp: 52.3, volt: 46.5, current: 45.0, health: 82, lastUpdate: '1 min ago' },
  { id: 'V-BAS-441', location: 'Hub #2 (Tebet)', status: 'Active', temp: 30.2, volt: 24.5, current: 5.2, health: 92, lastUpdate: '10 mins ago' },
];

const Analytics: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="page-container animate-fade-in" style={{ paddingBottom: '100px' }}>
      {/* Header section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Fleet Analytics Report</h2>
          <p style={{ color: 'var(--text-secondary)' }}>System overview & telemetry data (ERP View)</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--text-primary)', color: 'var(--bg-color)', borderRadius: '12px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
          <Download size={18} /> Export CSV
        </button>
      </div>

      {/* KPI Cards */}
      <div className="responsive-grid-4" style={{ marginBottom: '24px' }}>
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '4px solid var(--status-success)' }}>
          <div style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Total Active Units</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>1,204</div>
          <div style={{ color: 'var(--status-success)', fontSize: '0.8rem', fontWeight: 600 }}>↑ 12% vs last month</div>
        </div>
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
          <div style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Energy Dispatched</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>45.2 MWh</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Today's cumulative</div>
        </div>
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '4px solid var(--status-warning)' }}>
          <div style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>System Warnings</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>24</div>
          <div style={{ color: 'var(--status-warning)', fontSize: '0.8rem', fontWeight: 600 }}>Needs attention</div>
        </div>
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '4px solid var(--status-error)' }}>
          <div style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Critical Alerts</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>3</div>
          <div style={{ color: 'var(--status-error)', fontSize: '0.8rem', fontWeight: 600 }}>Requires immediate action</div>
        </div>
      </div>

      {/* ERP Table */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        {/* Toolbar */}
        <div style={{ padding: '20px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-color-secondary)' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
            <input 
              type="text" 
              placeholder="Search Unit ID or Location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-primary)', outline: 'none' }}
            />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-secondary)', cursor: 'pointer', fontWeight: 600 }}>
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* Table Content */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-tertiary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <th style={{ padding: '16px 20px', fontWeight: 600 }}>Unit ID</th>
                <th style={{ padding: '16px 20px', fontWeight: 600 }}>Location</th>
                <th style={{ padding: '16px 20px', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '16px 20px', fontWeight: 600 }}>Temp (°C)</th>
                <th style={{ padding: '16px 20px', fontWeight: 600 }}>Voltage (V)</th>
                <th style={{ padding: '16px 20px', fontWeight: 600 }}>Current (A)</th>
                <th style={{ padding: '16px 20px', fontWeight: 600 }}>Health</th>
                <th style={{ padding: '16px 20px', fontWeight: 600 }}>Last Update</th>
                <th style={{ padding: '16px 20px', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockData.filter(d => d.id.toLowerCase().includes(searchTerm.toLowerCase()) || d.location.toLowerCase().includes(searchTerm.toLowerCase())).map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)', transition: 'background 0.2s' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 700 }}>{row.id}</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>{row.location}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{ 
                      padding: '4px 10px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px',
                      background: row.status === 'Active' ? 'rgba(16, 185, 129, 0.1)' : row.status === 'Warning' ? 'rgba(245, 158, 11, 0.1)' : row.status === 'Critical' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(107, 114, 128, 0.1)',
                      color: row.status === 'Active' ? 'var(--status-success)' : row.status === 'Warning' ? 'var(--status-warning)' : row.status === 'Critical' ? 'var(--status-error)' : 'var(--text-secondary)'
                    }}>
                      {row.status === 'Active' && <CheckCircle size={14} />}
                      {(row.status === 'Warning' || row.status === 'Critical') && <AlertTriangle size={14} />}
                      {row.status === 'Idle' && <Activity size={14} />}
                      {row.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', color: row.temp > 40 ? 'var(--status-warning)' : row.temp > 50 ? 'var(--status-error)' : 'var(--text-primary)', fontWeight: row.temp > 40 ? 700 : 500 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Thermometer size={16} /> {row.temp}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={16} color="var(--accent-secondary)" /> {row.volt}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>{row.current}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '40px', height: '6px', background: 'var(--glass-border)', borderRadius: '10px', overflow: 'hidden' }}>
                        <div style={{ width: `${row.health}%`, height: '100%', background: row.health < 90 ? 'var(--status-warning)' : 'var(--status-success)' }}></div>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{row.health}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{row.lastUpdate}</td>
                  <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                    <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><MoreVertical size={18} /></button>
                  </td>
                </tr>
              ))}
              {mockData.length === 0 && (
                <tr>
                  <td colSpan={9} style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
