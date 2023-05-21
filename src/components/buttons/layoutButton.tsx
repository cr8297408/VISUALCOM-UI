import { hexToRGB } from '@/utils/hexToRgba';
import React, { useState } from 'react'

export default function LayoutButton({
  onClick,
  condition = false,
  tittle,
  isChildren = false,
}: {
  onClick: any;
  condition?: boolean;
  tittle: string;
  isChildren?: boolean;
}) {
  const [isHover, setIsHover] = useState(false)
  
  const handleHover = () => {
    setIsHover(!isHover);
  }
  
  return (
    <button
      onClick={onClick}
      className={`w-auto flex items-center p-2 rounded-lg justify-around text-gray-950 transition duration-75  dark:text-black group ${
        isChildren ? 'chidren-butt' : ''
      }`}
      style={{
        ...(condition
          ? {
              background: hexToRGB('#08B2FF', 0.25),
              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.20)',
            }
          : {}),
        ...(isChildren
          ? {
              marginLeft: '2rem',
              marginTop: '1rem',
              ...(isHover
                ? {
                    boxShadow: ' 0 4px 16px rgba(0, 0, 0, 0.2)',
                    color: hexToRGB('#000000', 0.6),
                    transition: 'all 0.2s ease',
                  }
                : null),
            }
          : {}),
      }}
      onMouseLeave={handleHover}
      onMouseEnter={handleHover}
    >
      {!isChildren ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={`bi bi-chevron-right m-1 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 ${
            condition ? 'rotate-90' : ''
          }`}
          viewBox="0 0 16 16"
          focusable="false"
          data-prefix="fas"
          data-icon="gem"
          role="img"
        >
          <path
            fill="currentColor"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      ) : null}
      {tittle}
    </button>
  );
}
