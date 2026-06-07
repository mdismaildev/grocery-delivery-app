import { FaApple, FaGooglePlay } from 'react-icons/fa';
import ilustrationImg from '../../assets/ilustration.png';

const DownloadSection = () => {
  return (
    <section className="">
      <div className="container mx-auto px-6 md:px-15 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#032E15] py-16 md:py-20 rounded-3xl overflow-hidden">
        {/* Left Content */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-normal font-title leading-tight mb-6">
            Get fresh groceries in minutes
          </h2>
          <p className="text-[#FFFFFF]/70 text-base mb-8">
            Download the Instacart app for exclusive deals, real-time tracking,
            and the freshest selection delivered right to your door.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-white text-[#0B3B24] px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all text-base">
              <FaApple className="text-2xl" /> App Store
            </button>
            <button className="bg-[#1A5237] text-base text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 border border-[#FFFFFF]/20 hover:bg-[#1f6343] transition-all">
              <FaGooglePlay className="text-xl" /> Google Play
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full max-w-sm lg:max-w-md">
          <img
            src={ilustrationImg}
            alt="Delivery Service"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
