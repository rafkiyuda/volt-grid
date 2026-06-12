import React, { useState, useEffect } from 'react';
import { X, QrCode } from 'lucide-react';

interface ScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const ScannerModal: React.FC<ScannerModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [scanning, setScanning] = useState(true);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setScanning(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSimulateScan = () => {
    setScanning(false);
    setTimeout(() => {
      onSuccess();
    }, 1500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.9)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      {/* Header/Close button */}
      <div style={{ position: 'absolute', top: '40px', right: '40px' }}>
        <button 
          onClick={onClose} 
          style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: '#fff', transition: 'background 0.2s' }}
        >
          <X size={24} />
        </button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>Scan QR Alat</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Posisikan QR Code perangkat di dalam area kotak.</p>
      </div>

      {/* Scanner UI */}
      <div style={{ position: 'relative', width: '300px', height: '300px' }}>
        {/* Borders */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '4px solid var(--status-success)', borderLeft: '4px solid var(--status-success)' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: '4px solid var(--status-success)', borderRight: '4px solid var(--status-success)' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', borderBottom: '4px solid var(--status-success)', borderLeft: '4px solid var(--status-success)' }}></div>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '4px solid var(--status-success)', borderRight: '4px solid var(--status-success)' }}></div>
        
        {/* Animated Laser Line */}
        {scanning ? (
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '10%', 
            width: '80%', 
            height: '2px', 
            background: 'var(--status-success)', 
            boxShadow: '0 0 10px var(--status-success), 0 0 20px var(--status-success)',
            animation: 'scanLaser 2s infinite alternate ease-in-out'
          }}></div>
        ) : (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--status-success)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, animation: 'pulse 1s infinite' }}>Memproses...</div>
          </div>
        )}
        
        {/* Overlay Dark inside scanner */}
        <div style={{ width: '100%', height: '100%', background: 'rgba(16, 185, 129, 0.05)' }}></div>
      </div>

      {/* Simulator Button (For Demo Purposes) */}
      {scanning && (
        <div style={{ marginTop: '64px' }}>
          <button 
            onClick={handleSimulateScan}
            style={{ padding: '16px 32px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(4px)' }}
          >
            <QrCode size={20} /> [Demo] Simulasi Berhasil Scan
          </button>
        </div>
      )}

      <style>
        {`
          @keyframes scanLaser {
            0% { top: 10%; }
            100% { top: 90%; }
          }
          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
};
