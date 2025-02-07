function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 14.5C11.0899 14.5 14 11.5899 14 8C14 4.41015 11.0899 1.5 7.5 1.5C3.91015 1.5 1 4.41015 1 8C1 11.5899 3.91015 14.5 7.5 14.5Z"
        stroke="#B8B8B8"
        strokeWidth="1.5"
      />
      <path
        d="M7.5 11.2496V7.34961"
        stroke="#B8B8B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5001 4.7498C7.85908 4.7498 8.1501 5.04082 8.1501 5.3998C8.1501 5.75879 7.85908 6.0498 7.5001 6.0498C7.14111 6.0498 6.8501 5.75879 6.8501 5.3998C6.8501 5.04082 7.14111 4.7498 7.5001 4.7498Z"
        fill="#B8B8B8"
      />
    </svg>
  );
}

export default InfoIcon;
