import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import SkeletonCard from '../ui/SkeletonCard';

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [isLoding, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3000/letest-product')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPopularProducts(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-12 bg-[#FAF9F5]">
      <div className="container mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-[#1B3022] text-2xl font-semibold mb-1">
              Browse Categories
            </h2>
            <p className="text-[#6B7280] text-sm md:text-sm font-normal">
              Find exactly what you need using
            </p>
          </div>
          <button className="text-[#FF8904] font-medium hover:underline flex items-center gap-1">
            View All <span>→</span>
          </button>
        </div>

        {/* Grid Container */}
        <div className=" relative min-h-100">
          {isLoding ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[...Array(10)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {popularProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-2xl shadow-sm transition-all duration-300 group"
                >
                  {/* Discount Badge */}
                  {product.discount && (
                    <span className="bg-[#F97316] text-white text-[10px] font-semibold px-2 py-1 rounded-lg">
                      {product.discount}
                    </span>
                  )}

                  {/* Image */}
                  <div className="h-32 flex items-center justify-center my-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  {/* Details */}
                  <h3 className="font-medium text-[#3F3F46] text-sm">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[#F59E0B] text-xs my-1">
                    <FaStar />{' '}
                    <span className="text-[#1B3022] font-medium text-xs">
                      {product.rating}
                    </span>
                    <span className="text-[#6B7280] text-xs font-medium">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price & Add Button */}
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <span className="font-medium text-base text-[#3F3F46]">
                          ${product.price}
                        </span>
                        <span className="text-xs font-normal text-[#6B7280]">
                          /{product.unit}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {product.originalPrice && (
                          <span className="block text-xs text-[#6B7280] font-normal line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="bg-[#FF8904] text-white p-2 rounded-full hover:bg-[#e07803] transition-colors">
                      <FiPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
