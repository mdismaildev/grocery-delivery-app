import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import svg from '../../assets/SVG2.png';

const Footer = () => {
  return (
    <footer className="bg-[#1B3022] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={svg} alt="" />
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Instacart
              </h2>
            </div>
            <p className="text-[#FFFFFF]/70 font-normal text-sm max-w-xs opacity-80 leading-relaxed ">
              Bringing fresh, organic groceries straight from local farms to
              your doorstep. Nourish your home with Earth's finest.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-[#1A5237] p-3 rounded-lg cursor-pointer hover:bg-emerald-700 transition-colors"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-6">QUICK LINKS</h3>
            <ul className="space-y-4 text-[#FFFFFF]/70 font-normal text-sm opacity-80">
              {[
                'All Products',
                'Flash Deals',
                'Track Order',
                'Delivery Partner',
              ].map(link => (
                <li
                  key={link}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="font-semibold text-xl mb-6">CUSTOMER SERVICE</h3>
            <ul className="space-y-4 text-[#FFFFFF]/70 font-normal text-sm opacity-80">
              {['My Account', 'Order History', 'Addresses', 'Help Center'].map(
                link => (
                  <li
                    key={link}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-6">
            <h3 className="font-semibold text-xl mb-6">CONTACT US</h3>
            <div className="flex items-start gap-3 text-[#FFFFFF]/70 font-normal text-sm ">
              <FiMapPin className="text-xl mt-1" />{' '}
              <span>123 Green Valley Rd, Portland</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-100 opacity-80">
              <FiPhone /> <span>+1 (111) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-100 opacity-80">
              <FiMail /> <span>hello@example.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-100 opacity-70">
          <p>© 2026 Greatstack. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
