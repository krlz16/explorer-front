import React from 'react'

function TokenIcon({ className }: { className?: string }) {
  return (
    <svg className={`${className} fill-white-400`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 7.3125C0 4.51758 4.02891 2.25 9 2.25C13.9711 2.25 18 4.51758 18 7.3125V11.25C18 13.7355 13.9711 15.75 9 15.75C4.02891 15.75 0 13.7355 0 11.25V7.3125ZM14.5371 9.39023C15.9223 8.64141 16.3125 7.8293 16.3125 7.3125C16.3125 6.7957 15.9223 5.98359 14.5371 5.20312C13.2047 4.4543 11.25 3.9375 9 3.9375C6.71836 3.9375 4.79531 4.4543 3.46324 5.20312C2.07809 5.98359 1.6875 6.7957 1.6875 7.3125C1.6875 7.8293 2.07809 8.64141 3.46324 9.39023C4.79531 10.1707 6.71836 10.6875 9 10.6875C11.25 10.6875 13.2047 10.1707 14.5371 9.39023ZM9 12.375C8.52188 12.375 8.05078 12.3539 7.59375 12.3152V14.0027C8.04727 14.0414 8.51836 14.0625 9 14.0625C9.48164 14.0625 9.95273 14.0414 10.4062 14.0027V12.3152C9.91758 12.3539 9.47812 12.375 9 12.375ZM4.21875 13.2785C4.87617 13.5246 5.63555 13.725 6.46875 13.8621V12.1711C5.66719 12.041 4.91133 11.816 4.21875 11.6016V13.2785ZM3.09375 11.134C2.56781 10.8738 2.09531 10.582 1.6875 10.234V11.2184C1.6875 11.4891 1.90582 12.1008 3.09375 12.7652V11.134ZM11.5312 12.1711V13.8621C12.3645 13.725 13.1238 13.5246 13.7812 13.2785V11.6016C13.0887 11.816 12.3328 12.041 11.5312 12.1711ZM16.3125 10.234C15.9047 10.582 15.402 10.8738 14.9062 11.134V12.7652C16.0945 12.1008 16.3125 11.4891 16.3125 11.25V10.234Z" />
    </svg>
  )
}

export default TokenIcon