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
    <div className={hideHeader ? "" : "page-container animate-fade-in"} style={{ background: '#020617', minHeight: '100vh', color: '#fff' }}>
      {!hideHeader && (
        <div style={{ marginBottom: '48px', textAlign: 'center', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px', color: '#fff' }}>Katalog Sewa VOLT-GRID</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Pilih paket baterai portabel sesuai dengan kebutuhan daya dan durasi operasional event Anda.</p>
        </div>
      )}

      <div className="responsive-grid-2" style={{ paddingBottom: '64px', maxWidth: '1400px', margin: '0 auto' }}>
        {products.map((product) => (
          <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px' }}>
            <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '80%', height: '80%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.6rem', color: '#fff', marginBottom: '8px' }}>{product.name}</div>
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>{product.desc}</div>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--status-success)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                {product.capacity}
              </div>
            </div>
            
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '32px', marginTop: '16px' }}>
              {formatRupiah(product.price)}<span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>/hari</span>
            </div>

            <button 
              onClick={() => setSelectedProduct(product)}
              style={{ width: '100%', padding: '16px', borderRadius: '50px', background: '#fff', color: '#020617', border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '1.05rem', transition: 'all 0.2s', marginTop: 'auto' }}
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
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}>
          <div style={{
            background: '#0a192f', width: '100%', maxWidth: '600px',
            borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#fff' }}>Detail Spesifikasi</h3>
              <button onClick={() => setSelectedProduct(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <X size={20} />
              </button>
            </div>
            
            <div style={{ padding: '32px', maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '32px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
              </div>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px' }}>{selectedProduct.name}</div>
                <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>{formatRupiah(selectedProduct.price)} <span style={{fontSize: '0.9rem'}}>/hari</span></div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Battery size={16} /> Kapasitas</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{selectedProduct.capacity}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={16} /> Output Max</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{selectedProduct.output}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={16} /> Battery Health</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--status-success)' }}>{selectedProduct.health}%</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> Ketersediaan</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Tersedia (Ready)</div>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}><Clock size={18} color="var(--accent-primary)" /> Estimasi Pemakaian Daya</h4>
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                  {selectedProduct.estimations.map((est, i) => (
                    <div key={i} style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i !== selectedProduct.estimations.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>{est.device}</div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{est.watts}</div>
                      </div>
                      <div style={{ fontWeight: 800, color: 'var(--status-success)', fontSize: '1.1rem' }}>{est.hours}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>Lokasi Pengambilan</h4>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{selectedProduct.location}</p>
              </div>

            </div>

            <div style={{ padding: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', background: '#020617' }}>
              <button onClick={() => { if(onRentAction) onRentAction(); else alert('Fungsi penyewaan akan diarahkan ke WhatsApp/Login'); }} style={{ width: '100%', padding: '18px', borderRadius: '50px', background: 'var(--status-success)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)', transition: 'transform 0.2s' }}>
                Pesan Sekarang <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rent;
