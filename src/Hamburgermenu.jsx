import React from 'react'

const Hamburgermenu = ({ isOpen, onClick }) => {
    return (
      <div>
        <button
        className={`hamburger-menu ${isOpen ? 'open' : ''}`}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        </button>
        <div className={isOpen ? "block": "hidden"}>
            <div className='absolute top-30 right-0 bg-green-400 h-[60vh] w-4/6'>
                <div className='text-center z-100 mt-2 py-10 h-full flex justify-between items-center flex-col text-white font-serif uppercase'>
                    <li class="list-none">Home</li>
                    <li class="list-none">about</li>
                    <li class="list-none">Blog</li>
                    <li class="list-none">Login/signUp</li>
                </div>
            </div>
        </div>
      </div>
    );
  };

export default Hamburgermenu
