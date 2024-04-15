const SwapButton = ({onClick}) => {
  return (
    
    <button
      className="shadow-2xl  rounded-xl bg-gray-100 border"
      width="32"
      onClick={onClick}
    >
      <svg
        className="shadow-2xl  rounded-xl"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </button>
  );
};

export default SwapButton;
