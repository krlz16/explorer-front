import React from 'react'

function ArrowLeftIcon({ className = 'fill-white2' }: { className?:string }) {
  return (
    <svg className={className} width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.1284 0.944815L0.190907 5.098C0.0541887 5.23462 -0.000498772 5.39856 -0.000498772 5.5625C-0.000498772 5.72644 0.0541887 5.89038 0.190907 6.027L4.1284 10.1802C4.37449 10.4261 4.78465 10.4534 5.03074 10.1802C5.30418 9.93427 5.33152 9.52442 5.05808 9.25118L1.55809 5.5625L5.05808 1.87382C5.33152 1.60058 5.30418 1.19073 5.03074 0.944815C4.78465 0.671579 4.37449 0.698903 4.1284 0.944815Z" />
    </svg>

  )
}

export default ArrowLeftIcon
