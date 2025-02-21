import React from 'react';

function ArrowDownIcon({ className = 'fill-white' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0552 6.3716L7.902 10.3091C7.76538 10.4458 7.60144 10.5005 7.4375 10.5005C7.27356 10.5005 7.10962 10.4458 6.973 10.3091L2.81982 6.3716C2.5739 6.12551 2.54658 5.71535 2.81982 5.46926C3.06573 5.19582 3.47558 5.16848 3.74882 5.44192L7.4375 8.94191L11.1262 5.44192C11.3994 5.16848 11.8093 5.19582 12.0552 5.46926C12.3284 5.71535 12.3011 6.12551 12.0552 6.3716Z"
        fill="white"
      />
    </svg>
  );
}

export default ArrowDownIcon;
