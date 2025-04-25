import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <Logo className="h-14 mb-6 md:mb-0" />
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            
            <div className="flex items-start space-x-2">
              <span className="font-medium">Teléfono:</span>
              <span>43435465475</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="font-medium">Correo:</span>
              <a 
                href="mailto:csagribusiness@gmail.com" 
                className="hover:underline transition-colors"
              >
                csagribusiness@gmail.com
              </a>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="font-medium">Dirección:</span>
              <span>106 #78 c 78</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span>Torreo Baikal.</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-4 text-center text-sm">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;