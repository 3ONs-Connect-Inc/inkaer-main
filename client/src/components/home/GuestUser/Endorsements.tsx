
import { bombardier, google, microsoft, pwc } from '@/assets';
import React from 'react';

const Endorsements: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl padding">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-8">Our talent has worked with</p>
          <div className="flex items-center justify-center gap-8 opacity-60 flex-wrap">
           
        <img
          src={google}
          alt="Google"
          className="h-6 xs:h-8 opacity-60 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        <img
          src={microsoft}
          alt="Microsoft"
          className="h-6 xs:h-8 opacity-60 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        <img
          src={pwc}
          alt="PwC"
          className="h-6 xs:h-8 opacity-60 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        <img
          src={bombardier}
          alt="Bombardier"
          className="h-6 xs:h-8 opacity-60 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
     

          </div>
        </div>
      </div>
    </section>
  );
};

export default Endorsements;
