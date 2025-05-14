import React from 'react';
//import { Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/*<Leaf className="text-white mr-2" size={24} />
      <div className="text-white font-bold text-lg leading-none">
        <span>CS</span>
        <br />
        <span className="text-xs tracking-wider">AGRIBUSINESS S.A.S.</span>
      </div>*/}
      {/* Imagen del logo */}
      <img
        src="/src/assets/images/Logo_CS.png"
        alt="Logo CS"
        className="h-14 mr-2"
      />
    </div>
  );
};

export default Logo;