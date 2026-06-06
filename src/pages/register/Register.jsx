import { Link, useNavigate } from 'react-router';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import svg from '../../assets/SVG.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = e => {
    e.preventDefault();
    console.log('submited');
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, email, password });

    createUser(email, password, name)
      .then(user => {
        console.log('current user', user);
        alert('User create successful, please login');

        const userInfo = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };

        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        })
          .then(res => res.json())
          .then(data => {
            console.log('after save user on database', data);
          });

        console.log('thsi user data that you save database', userInfo);

        navigate('/');
      })
      .catch(err => {
        console.log('Error details:', err.message);
        alert(err.message);
      });
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className="hidden md:flex md:w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#1B3022]/80"></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-10">
          <h1 className="text-2`xl lg:text-4xl font-semibold text-white mb-4">
            Join Instacart Today
          </h1>
          <p className="text-[#FFFFFF]/60 font-normal text-sm lg:text-xl max-w-md font-title">
            Start getting your favorite groceries delivered directly to your
            home.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#FAF8F5] p-8 min-h-screen md:min-h-0">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center gap-2 text-2xl font-semibold text-[#1B3022] mb-8">
            <img src={svg} alt="" />
            <span>Instacart</span>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-[#1B3022] mb-2">
              Create an account
            </h2>
            <p className="text-sm text-[#6B7280]">
              Already have an account?{' '}
              <Link
                to="/"
                className="text-[#FF6900] font-semibold text-sm hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* --- Social Login Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
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

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3B24]/20 focus:border-[#0B3B24] transition-all"
                  required
                />
              </div>
            </div>

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
                  name="email"
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
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3B24]/20 focus:border-[#0B3B24] transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B3B24] hover:bg-[#072a19] text-white font-medium py-3 rounded-lg transition-colors mt-2"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
