import React from 'react';
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
  
  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-10 md:h-12" />
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
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white p-2">
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
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu (hidden by default) */}
      {/* Add mobile menu implementation as needed */}
    </header>
  );
};

export default Navbar;