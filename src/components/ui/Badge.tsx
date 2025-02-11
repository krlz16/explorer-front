import React from 'react';

type props = {
  text: string | undefined;
  type: 'success' | 'fail' | 'info' | 'pending';
  className?: string;
};

function Badge({ text, type, className }: props) {
  const TYPE = {
    info: 'bg-gray-600 text-white-400',
    success: 'bg-success text-success',
    fail: 'bg-fail text-fail',
    pending: 'bg-pending text-pending',
  };
  return (
    <span
      className={`rounded-md px-1 ${TYPE[type]} ${className} h-5 flex items-center justify-center w-fit`}
    >
      {text}
    </span>
  );
}

export default Badge;
