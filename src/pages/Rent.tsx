import React, { useState } from 'react';
import { Zap, Battery, MapPin, Activity, Clock, X, ChevronRight } from 'lucide-react';

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

  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className={hideHeader ? "" : "page-container animate-fade-in"}>
      {!hideHeader && (
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>Sewa Energi</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Pilih paket baterai sesuai kebutuhan operasional Anda.</p>
        </div>
      )}

      <div className="responsive-grid-2" style={{ paddingBottom: '24px' }}>
        {products.map((product) => (
          <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '24px' }}>
            <div style={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', background: '#fff' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{product.name}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{product.desc}</div>
              </div>
              <div style={{ background: 'rgba(5, 150, 105, 0.1)', color: 'var(--accent-primary)', padding: '6px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700 }}>
                {product.capacity}
              </div>
            </div>
            
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
              {formatRupiah(product.price)}<span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)' }}>/hari</span>
            </div>

            <button 
              onClick={() => setSelectedProduct(product)}
              style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--accent-primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '1rem', transition: 'all 0.2s', marginTop: 'auto', boxShadow: '0 4px 12px var(--accent-primary-glow)' }}
            >
              Detail & Sewa
            </button>
          </div>
        ))}
      </div>

      {/* Modal Detail Produk */}
      {selectedProduct && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}>
          <div style={{
            background: 'var(--bg-color)', width: '100%', maxWidth: '500px',
            borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>Detail Produk</h3>
              <button onClick={() => setSelectedProduct(null)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <X size={24} />
              </button>
            </div>
            
            <div style={{ padding: '24px', maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{selectedProduct.name}</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{formatRupiah(selectedProduct.price)}/hari</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--glass-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}><Battery size={16} /> Kapasitas</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{selectedProduct.capacity}</div>
                </div>
                <div style={{ background: 'var(--glass-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={16} /> Output Max</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{selectedProduct.output}</div>
                </div>
                <div style={{ background: 'var(--glass-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={16} /> Battery Health</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--status-success)' }}>{selectedProduct.health}%</div>
                </div>
                <div style={{ background: 'var(--glass-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> Lokasi</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Tersedia</div>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={18} /> Estimasi Pemakaian</h4>
                <div style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
                  {selectedProduct.estimations.map((est, i) => (
                    <div key={i} style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i !== selectedProduct.estimations.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{est.device}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{est.watts}</div>
                      </div>
                      <div style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{est.hours}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Lokasi Pengambilan</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selectedProduct.location}</p>
              </div>

            </div>

            <div style={{ padding: '24px', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-color-secondary)' }}>
              <button onClick={() => { if(onRentAction) onRentAction(); else alert('Fungsi penyewaan segera hadir!'); }} style={{ width: '100%', padding: '16px', borderRadius: '16px', background: 'var(--accent-primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px var(--accent-primary-glow)', transition: 'transform 0.2s' }}>
                Sewa Sekarang <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rent;
