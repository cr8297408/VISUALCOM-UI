import { hexToRGB } from '@/utils/hexToRgba';
import React, { useState } from 'react'

export default function InitialButton({ path1, path2, onClick = () => {}}: { path1: string; path2?: string, onClick?: any }) {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <button onMouseLeave={handleHover} onMouseEnter={handleHover} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '2rem',
          height: '2rem',
          ...(isHover
            ? {
                color: hexToRGB('#000000', 1),
                transition: 'all 0.2s ease',
              }
            : null),
        }}
        className="flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d={path1} />
        ({path2 ? <path d={path2} />: null})
      </svg>
    </button>
  );
}
