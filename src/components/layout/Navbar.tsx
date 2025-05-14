import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import { useAuth } from '../layout/AuthContext'; // Asegúrate de importar el hook
import { KeyIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'; // o /outline



const menuItems = [
  { label: 'Fertilizantes', path: '/categoria/fertilizantes' },
  { label: 'Plaguicidas', path: '/categoria/plaguicidas' },
  { label: 'Coadyuvantes', path: '/categoria/coadyuvantes' },
  { label: 'Bioinsumos', path: '/categoria/bioinsumos' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.reload(); // o usa navigate('/') si prefieres
  };

  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-16 md:h-20" />
        </Link>

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

          {user && (
            <Link
              to="/admin"
              className={`text-white hover:text-[#FDDBAB] transition-colors px-1 py-2 ${
                location.pathname === '/admin' ? 'border-b-2 border-white font-medium' : ''
              }`}
            >
              Admin
            </Link>
          )}
        </nav>

        <div className="hidden md:block">
          {user ? (
            /*<button
              onClick={handleLogout}
              className="text-surface-dark bg-red-400 border border-red-700 px-4 py-2 rounded-md hover:bg-red-700 text-white"
            >
              Cerrar Sesión
            </button>*/
            <button
              onClick={handleLogout}
              className=" h-10 w-10 flex items-center justify-center text-surface-dark bg-red-300 border border-red-700  rounded-full hover:bg-red-500 text-white transition-colors"
            >
              <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-red-700" />
            </button>
          ) : (
            /*<Link
              to="/auth"
              className="text-surface-dark bg-secondary border border-secondary-dark px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors"
            >
              Iniciar Sesión
            </Link>*/
            <Link
              to="/auth"
              className="flex items-center gap-2 text-surface-dark bg-secondary rounded-full border border-[#017EC2] px-2 py-2 rounded-2lg hover:bg-secondary-dark transition-colors"
            >
            <KeyIcon className="h-5 w-5 text-[#017EC2]" />
            </Link>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {isMobileOpen && (
        <div className="md:hidden bg-primary border-t border-white">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className="text-white hover:text-[#FDDBAB] py-1"
              >
                {item.label}
              </Link>
            ))}
                    {user && (
          <Link
            to="/admin"
            onClick={() => setIsMobileOpen(false)}
            className="text-white hover:text-[#FDDBAB] transition-colors py-1"
          >
            Admin
          </Link>
        )}
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileOpen(false);
                }}
                className="bg-red-400 px-4 py-2 border border-red-700 text-white rounded-md hover:bg-red-700 mt-2 w-fit"
              >
                Cerrar Sesión
              </button>
            ) : (
              <Link
                to="/auth"
                onClick={() => setIsMobileOpen(false)}
                className="text-surface-dark bg-secondary border border-secondary-dark px-4 py-2 rounded-md hover:bg-secondary-dark mt-2 w-fit"
              >
                Iniciar Sesión
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
