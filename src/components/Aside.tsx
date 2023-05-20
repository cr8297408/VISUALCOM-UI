import React, { useState } from 'react';

// export interface AsideProps {
//   hidden: boolean;
// }

export default function Aside() {
  enum ULKEY {
    ht = 'ht',
  }

  const [showUl, setShowUl] = useState({
    [ULKEY.ht]: false,
  });

  const showList = (key: ULKEY) => {
    setShowUl({
      [key]: !showUl[key],
    });
  };

  console.log(showList);
  return (
    <aside
      id="separator-sidebar"
      className={`top-0 left-0 z-40 w-72 w-min-70 h-screen transition-transform -translate-x-full sm:translate-x-0`}
      aria-label="Sidebar"
      style={{
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',
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
            <a
              href="#"
              className="w-auto flex items-center p-2 text-gray-900 transition duration-75 rounded-lg  dark:text-black group"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                focusable="false"
                data-prefix="fas"
                data-icon="gem"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                ></path>
              </svg>
              <span className="ml-4">Upgrade to Pro</span>
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                showList(ULKEY.ht);
              }}
              className="w-auto flex items-center p-2 rounded-lg justify-around text-gray-900 transition duration-75  dark:text-black group"
              style={
                showUl[ULKEY.ht]
                  ? {
                      background: '#08B2FF',
                      opacity: 0.25,
                      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.30)',
                    }
                  : {}
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className={`bi bi-chevron-right m-1 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 ${
                  showUl[ULKEY.ht] ? 'rotate-90' : ''
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
              Historial de Traducciones
            </button>
            {showUl[ULKEY.ht] ? (
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
}
