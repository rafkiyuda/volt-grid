import React from 'react';
import { Rent } from './Rent';
import { useNavigate } from 'react-router-dom';

const PublicRent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in" style={{ paddingTop: '100px', paddingBottom: '100px', background: 'var(--bg-color)' }}>
      <Rent onRentAction={() => navigate('/login')} />
    </div>
  );
};

export default PublicRent;
