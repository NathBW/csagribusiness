import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white p-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <Logo className="h-14 mb-6 md:mb-0" />
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            
            <div className="flex items-start space-x-2">
              <span className="font-semibold">Teléfono:</span>
              <span>+57 (601) 4661725</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="font-semibold">Correo:</span>
              <a 
                href="mailto:csagribusiness@gmail.com" 
                className="hover:underline transition-colors"
              >
                csagribusiness@gmail.com
              </a>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="font-semibold">Dirección:</span>
              <span>Calle 106 #54-73 Ofc. 703</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span>Torre Empresarial Baikal Aqua</span>
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