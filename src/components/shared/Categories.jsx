import { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="bg-[#FAF9F5] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-0">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-[#1B3022] text-2xl font-semibold mb-1">
            Browse Categories
          </h2>
          <p className="text-[#6B7280] text-sm md:text-sm font-normal">
            Find exactly what you need using
          </p>
        </div>

        {/* Categories List */}
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <span className="loading loading-spinner text-[#FF8904] loading-lg"></span>
          </div>
        ) : (
          <div className="flex overflow-x-auto pb-6 gap-4 md:gap-6 lg:justify-between scrollbar-hide">
            {categories.map(cat => (
              <div
                key={cat._id || cat.id}
                className="flex flex-col items-center min-w-25 md:min-w-25 cursor-pointer group"
              >
                {/* Image Box */}
                <div className="w-25 h-25 md:w-32.5 md:h-32.5 bg-[#FFEDD4] rounded-3xl md:rounded-4xl flex items-center justify-center p-3 mb-4 transition-all duration-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 mix-blend-multiply group-hover:-translate-y-2"
                  />
                </div>
                {/* Category Title */}
                <span className="text-xs font-medium text-[#52525C] text-center font-sans transition-colors duration-300 group-hover:text-[#FF8904]">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
