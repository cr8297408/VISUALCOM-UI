import { hexToRGB } from '@/utils/hexToRgba';
import React, { useState } from 'react';
import LayoutButton from './buttons/layoutButton';

// export interface AsideProps {
//   hidden: boolean;
// }

export default function Aside() {
  enum ULKEY {
    ht = 'ht',
    opt2 = 'opt2',
    opt3 = 'opt3',
  }

  const [showUl, setShowUl] = useState({
    [ULKEY.ht]: false,
    [ULKEY.opt2]: false,
    [ULKEY.opt3]: false,
  });

  const showList = (key: ULKEY) => {
    setShowUl({
      ...showUl,
      [key]: !showUl[key],
    });
  };

  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <aside
      id="separator-sidebar"
      className={`top-0 left-0 z-40 w-72 w-min-70 h-screen transition-transform -translate-x-full sm:translate-x-0`}
      aria-label="Sidebar"
      style={{
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.20)',
      }}
    >
      <div className="w-auto h-full px-3 py-4 overflow-y-auto bg-white transition-transform -translate-x-full sm:translate-x-0">
        <ul className="space-y-2 font-medium w-auto">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg  dark:text-black group w-auto"
            >
              <div className="flex rounded-full bg-gray-400 w-12 h-12 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-person flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </div>
              <ul className="ml-4 font-serif text-sm">
                <li>Usuario</li>
                <li>user@mail.com</li>
                <li>Oyente</li>
              </ul>
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 w-auto font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <LayoutButton
              onClick={() => {
                showList(ULKEY.ht);
              }}
              condition={showUl[ULKEY.ht]}
              tittle="Historial de Traducciones"
            />
            {showUl[ULKEY.ht] ? (
              <ul>
                <li>
                  <LayoutButton
                    onClick={() => {}}
                    tittle="Opción Hijo"
                    isChildren={true}
                  />
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>
          <li>
            <LayoutButton
              onClick={() => {
                showList(ULKEY.opt2);
              }}
              condition={showUl[ULKEY.opt2]}
              tittle="Opcion layout dos"
            />
            {showUl[ULKEY.opt2] ? (
              <ul>
                <li>
                  <LayoutButton
                    onClick={() => {}}
                    tittle="Opción Hijo"
                    isChildren={true}
                  />
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>
          <li>
            <LayoutButton
              onClick={() => {
                showList(ULKEY.opt3);
              }}
              condition={showUl[ULKEY.opt3]}
              tittle="Opcion layout tres"
            />
            {showUl[ULKEY.opt3] ? (
              <ul>
                <li>
                  <LayoutButton
                    onClick={() => {}}
                    tittle="Opcion Hija"
                    isChildren={true}
                  />
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 w-auto font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <LayoutButton
              onClick={() => {}}
              tittle="Cerrar Sección"
              isChildren={true}
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
