import React from 'react';

type props = {
  children: React.ReactNode;
  className?: string;
  pd?: 'p0' | 'p3' | 'p4' | 'p6';
};
function Card({ children, className, pd = 'p6' }: props) {
  const PD = {
    p6: 'p-6',
    p4: 'p-4',
    p3: 'p-3',
    p0: '',
  };
  return <div className={`${PD[pd]} rounded-xl ${className}`}>{children}</div>;
}

export default Card;
