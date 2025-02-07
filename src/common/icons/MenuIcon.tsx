import React from 'react';

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66675 12.6787H13.3334"
        stroke="#FBFBFB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.66675 8.67871H13.3334"
        stroke="#FBFBFB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.66675 4.67871H13.3334"
        stroke="#FBFBFB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default MenuIcon;
