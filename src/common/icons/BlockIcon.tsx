import React from 'react'

function BlockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.30039 0.206233C8.75039 0.035585 9.24961 0.035585 9.69961 0.206233L16.7309 2.87336C17.4937 3.1634 18 3.89535 18 4.7145V13.2856C18 14.1047 17.4937 14.836 16.7309 15.1278L9.69961 17.7926C9.24961 17.9332 8.75039 17.9332 8.30039 17.7926L1.27055 15.1278C0.505898 14.836 0 14.1047 0 13.2856V4.7145C0 3.89535 0.505898 3.1634 1.27055 2.87336L8.30039 0.206233ZM9.09844 1.78387C9.03516 1.75961 8.9332 1.75961 8.90156 1.78387L2.23664 4.3102L9 6.96801L15.7641 4.3102L9.09844 1.78387ZM1.86891 13.5493L8.15625 15.9329V8.4516L1.6875 5.90981V13.2856C1.6875 13.4016 1.75992 13.5071 1.86891 13.5493ZM9.84375 15.9329L16.1297 13.5493C16.2387 13.5071 16.3125 13.4016 16.3125 13.2856V5.90981L9.84375 8.4516V15.9329Z" fill="#B8B8B8"/>
    </svg>
  )
}

export default BlockIcon