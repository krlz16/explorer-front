import React from 'react';

type props = {
  children: React.ReactNode;
  className?: string;
};
function ListContent({ children, className }: props) {
  return (
    <div
      className={`w-full overflow-x-scroll sm:overflow-hidden text-white-400 bg-secondary rounded-lg p-4 mb-4 ${className}`}
    >
      <div className='max-w-fit sm:w-full sm:max-w-full'>{children}</div>
    </div>
  );
}

export default ListContent;
