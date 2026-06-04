import { Link } from 'react-router';
import { MdOutlinePedalBike } from 'react-icons/md';
import { FiMail, FiLock } from 'react-icons/fi';
import herobg from '../../assets/hero_bg.jpg';
import svg from '../../assets/SVG.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className="hidden md:flex md:w-1/2 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="absolute inset-0 bg-[#1B3022]/80"></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-10">
          <h1 className="text-2`xl lg:text-4xl font-semibold text-white mb-4">
            Welcome back to Instacart
          </h1>
          <p className="text-[#FFFFFF]/60 font-normal text-sm lg:text-xl max-w-md font-title">
            Fresh groceries and organic produce, delivered to your doorstep.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#FAF8F5] p-8 min-h-screen md:min-h-0">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center gap-2 text-2xl font-semibold text-[#1B3022] mb-8">
            <img src={svg} alt="" />
            <span>Instacart</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Sign in to your account
            </h2>
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-[#F37B24] font-medium hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
          {/* --- Social Login Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Google Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <FcGoogle className="h-6 w-6" />
              Google
            </button>

            {/* GitHub Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#24292F] hover:bg-[#1b1f23] text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <FaGithub className="h-5 w-5" />
              GitHub
            </button>
          </div>
          {/* --- Divider (Or continue with) --- */}
          <div className="flex items-center my-6">
            <div className="grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or continue with</span>
            <div className="grow border-t border-gray-300"></div>
          </div>

          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3B24]/20 focus:border-[#0B3B24] transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3B24]/20 focus:border-[#0B3B24] transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0B3B24] hover:bg-[#072a19] text-white font-medium py-3 rounded-lg transition-colors mt-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
