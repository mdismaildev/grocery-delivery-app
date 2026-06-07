import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { FiTruck, FiClock, FiShield } from 'react-icons/fi';

const features = [
  { icon: FiTruck, title: 'Free Delivery', desc: 'Orders over $20' },
  {
    icon: FaCanadianMapleLeaf,
    title: '100% Organic',
    desc: 'Certified products',
  },
  { icon: FiClock, title: 'Same Day', desc: 'Express delivery' },
  { icon: FiShield, title: 'Secure Pay', desc: 'Safe checkout' },
];

const FeatureCard = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] py-5 px-8 flex flex-wrap gap-6 justify-between items-center">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-4 flex-1 min-w-50">
            {/* Icon Box */}
            <div className="bg-[#FAF7F2] p-3 rounded-xl">
              <item.icon className="h-6 w-6 text-[#0B3B24]" />
            </div>
            {/* Text Content */}
            <div>
              <h3 className="font-semibold text-sm text-[#1B3022]">
                {item.title}
              </h3>
              <p className="text-sm font-normal text-[#6B7280]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
