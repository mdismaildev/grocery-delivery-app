import { FaArrowRight } from 'react-icons/fa';
import banner from '../../assets/banner.jpg';
import rounded from '../../assets/rounded2.png';

const Hero = () => {
  return (
    <div className=" container mx-auto">
      <div className="rounded-3xl overflow-hidden mt-8 md:mt-10 lg:mt-12 relative">
        {/* Banner Image */}
        <img src={banner} alt="Banner" className="w-full h-auto object-cover" />

        {/* Absolute Content Over Image */}
        <div className="absolute top-6 left-6 md:top-40 md:left-30 z-10 flex items-center gap-12">
          <div className="">
            <div className="bg-[#FFB86A]/10 flex items-center gap-2 max-w-46 px-4 py-1.5 rounded-2x rounded-2xl">
              <svg
                width="15"
                height="15"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.49999 10C4.62202 10.0027 3.77512 9.67525 3.12725 9.08271C2.47938 8.49017 2.07787 7.67577 2.00236 6.80105C1.92684 5.92633 2.18283 5.05518 2.71956 4.36037C3.25629 3.66556 4.03455 3.19785 4.89999 3.05C7.74999 2.5 8.49999 2.24 9.49999 1C9.99999 2 10.5 3.09 10.5 5C10.5 7.75 8.10999 10 5.49999 10Z"
                  stroke="#FFB86A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10.5C1 9 1.925 7.82 3.54 7.5C4.75 7.26 6 6.5 6.5 6"
                  stroke="#FFB86A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#FFB86A] text-xs font-medium">
                Farm-Fresh & Organic
              </span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl  mt-4 font-title font-normal sm:leading-10 lg:leading-16">
              Nourish your home <br /> with
              <span className="text-[#FFB86A]"> Earth's finest</span>
            </h2>

            <p className="text-[#FFFFFF]/70 font-normal text-base leading-4 lg:leading-7 py-5">
              Fresh, organic groceries delivered from local farms to your <br />
              doorstep. Quality you can taste, convenience you deserve.
            </p>
            <div className="flex items-center gap-6">
              {/* Shop Now Button */}
              <button className="group flex items-center gap-3 py-2 px-7 rounded-2xl bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/20 hover:bg-[#FF8904] transition-all duration-300 text-white text-base font-medium hover:scale-105 active:scale-95">
                Shop Now
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Browse Categories Button */}
              <button className="py-2 px-4 rounded-2xl bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/20 hover:bg-[#FF8904] transition-all duration-300 text-white text-base font-medium hover:scale-105 active:scale-95">
                Browse Categories
              </button>
            </div>
          </div>
          <div className="w-96 h-96">
            <img
              src={rounded}
              alt="Rotating Element"
              className="w-full h-full animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
