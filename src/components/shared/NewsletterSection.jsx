import { FiMail } from 'react-icons/fi';

const NewsletterSection = () => {
  return (
    <section className="container mx-auto bg-white rounded-2xl my-32">
      <div className=" max-w-2xl mx-auto text-center py-20 px-6 ">
        {/* Mail Icon */}
        <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FiMail className="text-2xl text-[#0B3B24]" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B24] mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Get weekly updates on fresh produce, seasonal offers, and exclusive
          discounts right to your inbox.
        </p>

        {/* Input Form */}
        <form className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-[#0B3B24] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1a5237] transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
