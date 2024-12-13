import React from 'react'

function ArrowRightIcon({ className = 'fill-white2' }: { className?: string }) {
  return (
    <svg className={className} width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.8716 0.944815L5.80909 5.098C5.94581 5.23462 6.0005 5.39856 6.0005 5.5625C6.0005 5.72644 5.94581 5.89038 5.80909 6.027L1.8716 10.1802C1.62551 10.4261 1.21535 10.4534 0.969261 10.1802C0.695824 9.93427 0.668481 9.52442 0.941918 9.25118L4.44191 5.5625L0.941918 1.87382C0.668481 1.60058 0.695824 1.19073 0.969261 0.944815C1.21535 0.671579 1.62551 0.698903 1.8716 0.944815Z" />
    </svg>
  )
}

export default ArrowRightIcon
