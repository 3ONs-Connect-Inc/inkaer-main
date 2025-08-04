

import { bombardier, google, microsoft, pwc } from '@/assets';
import { UpgradeBanner } from '@/components/ui/upgrade-banner';

const EndorsementSection = () => {
  return (
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
    <div className="text-center mb-8">
      <p className="text-base xs:text-lg text-gray-600 font-sora mb-4 xs:mb-6">
        Endorsed by early contributors from:
      </p>

      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 xs:gap-x-12 mb-10 xs:mb-8">
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

      <div className="max-w-md mx-auto px-4 ">
        <UpgradeBanner
          buttonText="Inkaer is free to use"
          description="with verified skill assessments"
         
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default EndorsementSection;
