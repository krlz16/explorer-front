import React from 'react';

function HashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} version="1.1" viewBox="0 0 32 32">
      <path d="M24.24.05l4.73.73-4.98 31.24-4.73-.72z"></path>
      <path d="M.97 21.31L1 26.06l29.89-.2-.03-4.74z"></path>
      <path d="M9.38.05l4.72.73-4.98 31.25-4.72-.73z"></path>
      <path d="M1.81 7.18l.03 4.75 29.89-.2-.03-4.75z"></path>
    </svg>
  );
}

export default HashIcon;
