import React, { useState } from 'react';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';
import type { TabType } from '../../App';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'collection', label: 'Collection' },
  { id: 'operation', label: 'Operation' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'rent', label: 'Rent' },
];

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="app-header">
        <div className="header-brand" onClick={() => handleNavClick('home')}>
          <div className="brand-icon pulse-glow">
            <Zap size={18} strokeWidth={2.5} />
          </div>
          <span className="brand-title text-gradient">VOLT-GRID</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`desktop-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id as TabType)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="primary-btn hidden md:flex">
            Get Started <ArrowRight size={14} />
          </button>
          
          <button className="icon-btn mobile-menu-btn" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Sheet Overlay */}
      <div 
        className={`mobile-sheet-overlay ${mobileOpen ? 'open' : ''}`} 
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* Mobile Sheet */}
      <div className={`mobile-sheet ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-sheet-header">
          <span className="brand-title text-gradient">Menu</span>
          <button className="icon-btn" onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-nav-list">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id as TabType)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
