import React, { useState } from 'react';
import { Zap, Battery, MapPin, Activity, Clock, X, ChevronRight, QrCode } from 'lucide-react';
import { ScannerModal } from '../components/ScannerModal';

export interface Product {
  id: string;
  name: string;
  capacity: string;
  desc: string;
  price: number;
  output: string;
  health: number;
  location: string;
  image: string;
  estimations: { device: string; watts: string; hours: string }[];
}

export const products: Product[] = [
  {
    id: 'mini',
    name: 'VOLT MINI',
    capacity: '500 Wh',
    desc: 'Cocok untuk lampu & charger',
    price: 50000,
    output: '300W',
    health: 98,
    location: 'Hub #1 (Kemang), Hub #4 (Sudirman)',
    image: '/assets/images/product_mini.png',
    estimations: [
      { device: 'Lampu LED', watts: '10W', hours: '50 jam' },
      { device: 'Charger HP', watts: '18W', hours: '25x full' },
      { device: 'Kipas Angin Kecil', watts: '30W', hours: '16 jam' },
    ]
  },
  {
    id: 'basic',
    name: 'VOLT BASIC',
    capacity: '2 kWh',
    desc: 'Cocok untuk UMKM',
    price: 150000,
    output: '1000W',
    health: 91,
    location: 'Hub #2 (Tebet), Hub #4 (Sudirman)',
    image: '/assets/images/product_basic.png',
    estimations: [
      { device: 'Lampu', watts: '20W', hours: '100 jam' },
      { device: 'Kipas', watts: '50W', hours: '40 jam' },
      { device: 'Mesin Kasir', watts: '100W', hours: '20 jam' },
    ]
  },
  {
    id: 'pro',
    name: 'VOLT PRO',
    capacity: '5 kWh',
    desc: 'Untuk profesional & backup rumah',
    price: 300000,
    output: '2500W',
    health: 95,
    location: 'Hub #1 (Kemang), Gudang Pusat',
    image: '/assets/images/product_pro.png',
    estimations: [
      { device: 'Kulkas Showcase', watts: '250W', hours: '20 jam' },
      { device: 'AC 1/2 PK', watts: '400W', hours: '12 jam' },
      { device: 'PC & Monitor', watts: '300W', hours: '16 jam' },
    ]
  },
  {
    id: 'promax',
    name: 'VOLT PRO MAX',
    capacity: '10 kWh',
    desc: 'Untuk event & operasional berat',
    price: 500000,
    output: '5000W',
    health: 100,
    location: 'Gudang Pusat (Delivery Available)',
    image: '/assets/images/product_promax.png',
    estimations: [
      { device: 'Sound System Event', watts: '1000W', hours: '10 jam' },
      { device: 'Food Truck Full', watts: '2000W', hours: '5 jam' },
      { device: 'Lighting Rig', watts: '800W', hours: '12 jam' },
    ]
  }
];

interface RentProps {
  onRentAction?: () => void;
  hideHeader?: boolean;
}

export const Rent: React.FC<RentProps> = ({ onRentAction, hideHeader }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  const handleScanSuccess = () => {
    setIsScannerOpen(false);
    setSelectedProduct(null); // close modal
    if (onRentAction) onRentAction();
    else alert('Scan berhasil! Mengarahkan ke proses pembayaran / dashboard...');
  };

  return (
    <div className={hideHeader ? "" : "page-container animate-fade-in"} style={{ background: '#f8fafc', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {!hideHeader && (
        <div style={{ marginBottom: '48px', textAlign: 'center', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>Katalog Sewa VOLT-GRID</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Pilih paket baterai portabel sesuai dengan kebutuhan daya dan durasi operasional event Anda.</p>
        </div>
      )}

      <div className="responsive-grid-2" style={{ paddingBottom: '64px', maxWidth: '1400px', margin: '0 auto' }}>
        {products.map((product) => (
          <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '32px', background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '80%', height: '80%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>{product.name}</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{product.desc}</div>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--status-success)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                {product.capacity}
              </div>
            </div>
            
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '32px', marginTop: '16px' }}>
              {formatRupiah(product.price)}<span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-secondary)' }}>/hari</span>
            </div>

            <button 
              onClick={() => setSelectedProduct(product)}
              style={{ width: '100%', padding: '16px', borderRadius: '50px', background: 'var(--status-success)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '1.05rem', transition: 'all 0.2s', marginTop: 'auto', boxShadow: '0 8px 16px rgba(16, 185, 129, 0.2)' }}
            >
              Lihat Detail Spesifikasi
            </button>
          </div>
        ))}
      </div>

      {/* Modal Detail Produk */}
      {selectedProduct && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}>
          <div style={{
            background: '#ffffff', width: '100%', maxWidth: '600px',
            borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>Detail Spesifikasi</h3>
              <button onClick={() => setSelectedProduct(null)} style={{ background: '#ffffff', border: '1px solid var(--glass-border)', cursor: 'pointer', color: 'var(--text-primary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <X size={20} />
              </button>
            </div>
            
            <div style={{ padding: '32px', maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '32px', background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }} />
              </div>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>{selectedProduct.name}</div>
                <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginTop: '8px' }}>{formatRupiah(selectedProduct.price)} <span style={{fontSize: '0.9rem'}}>/hari</span></div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Battery size={16} /> Kapasitas</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selectedProduct.capacity}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={16} /> Output Max</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selectedProduct.output}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={16} /> Battery Health</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--status-success)' }}>{selectedProduct.health}%</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> Ketersediaan</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Tersedia (Ready)</div>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}><Clock size={18} color="var(--status-success)" /> Estimasi Pemakaian Daya</h4>
                <div style={{ background: '#f8fafc', borderRadius: '16px', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
                  {selectedProduct.estimations.map((est, i) => (
                    <div key={i} style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i !== selectedProduct.estimations.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{est.device}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{est.watts}</div>
                      </div>
                      <div style={{ fontWeight: 800, color: 'var(--status-success)', fontSize: '1.1rem' }}>{est.hours}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>Lokasi Pengambilan</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selectedProduct.location}</p>
              </div>

            </div>

            <div style={{ padding: '32px', borderTop: '1px solid var(--glass-border)', background: '#f8fafc', display: 'flex', gap: '16px' }}>
              <button onClick={() => setIsScannerOpen(true)} style={{ flex: 1, padding: '18px', borderRadius: '50px', background: '#fff', color: 'var(--text-primary)', border: '2px solid var(--glass-border)', cursor: 'pointer', fontWeight: 800, fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', transition: 'transform 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <QrCode size={20} /> Scan QR Alat
              </button>
              <button onClick={() => { if(onRentAction) onRentAction(); else alert('Fungsi penyewaan akan diarahkan ke WhatsApp/Login'); }} style={{ flex: 1, padding: '18px', borderRadius: '50px', background: 'var(--status-success)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)', transition: 'transform 0.2s' }}>
                Pesan <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Local Scanner Modal for the Rent page specifically */}
      <ScannerModal 
        isOpen={isScannerOpen} 
        onClose={() => setIsScannerOpen(false)} 
        onSuccess={handleScanSuccess} 
      />
    </div>
  );
};

export default Rent;
