import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

// Menu items data
const menuItems = [
  { label: 'Plaguicidas', path: '/categoria/plaguicidas' },
  { label: 'Fertilizantes', path: '/categoria/fertilizantes' },
  { label: 'Coadyuvantes', path: '/categoria/coadyuvantes' },
  { label: 'Insumos', path: '/categoria/insumos' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-10 md:h-12" />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-white hover:text-[#FDDBAB] transition-colors px-1 py-2 ${
                location.pathname === item.path ? 'border-b-2 border-white font-medium' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón de inicio de sesión (desktop) */}
        <div className="hidden md:block">
          <Link
            to="/auth"
            className="text-surface-dark bg-secondary px-4 py-2 rounded border border-[#7CD1FD] hover:bg-secondary-dark transition-colors"
          >
            Iniciar Sesión
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-primary border-t border-white">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`text-white hover:text-[#FDDBAB] transition-colors py-1 ${
                  location.pathname === item.path ? 'font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/auth"
              onClick={() => setIsMobileOpen(false)}
              className="text-surface-dark bg-secondary px-4 py-2 rounded border border-[#7CD1FD] hover:bg-secondary-dark  transition-colors mt-2 w-fit"
            >
              Iniciar Sesión
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
