import React, { useState } from "react";

function AdminNavtab() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-12/12 px-10 lg:px-40 bg-[#B36824] mx-auto mx-auto flex flex-row py-5 items-center justify-between">
      <div className="w-fit">
        <p className="text-3xl font-bold text-white"><a href="/admin/indexnanny">Admin</a></p>
      </div>

      <div className="hidden md:flex w-fit">
        <ul className="text-white text-sm font-medium flex gap-x-10">
          <li><a href="/admin/indexnanny">Nannies</a></li>
        </ul>
      </div>

      <div className="w-fit md:hidden">
        <button
          className="text-primary text-sm p-4 bg-white border border-primary rounded-3xl"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"
          onClick={closeMenu}
        >
          <div className={`w-72 h-full bg-white fixed top-0 right-0 shadow-lg flex flex-col items-center justify-center transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button
              className="text-primary text-sm p-4 bg-white border border-primary rounded-full absolute top-5 right-5"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="text-secondary text-xl font-medium">
              <li className="py-2 mb-5"><a href="/admin/indexnanny">Nannies</a></li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}

export default AdminNavtab;
