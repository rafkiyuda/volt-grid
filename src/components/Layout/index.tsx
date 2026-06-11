import React from 'react';
import Header from './Header';
import type { TabType } from '../../App';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content page-enter" key={activeTab}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
