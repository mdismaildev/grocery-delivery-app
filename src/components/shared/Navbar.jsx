import { NavLink } from 'react-router';
import {
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
  FiMenu,
} from 'react-icons/fi';
import { MdOutlinePedalBike } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 md:px-8 py-3 border-b border-gray-100">
      {/* 1. Mobile Menu (Hamburger) & Logo */}
      <div className="navbar-start w-auto lg:w-1/4">
        {/* Mobile Dropdown for Nav Links */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <FiMenu className="h-6 w-6 text-gray-700" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/deals" className="text-[#F37B24] font-medium">
                Deals
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-[#0B3B24]"
        >
          <MdOutlinePedalBike className="h-8 w-8" />
          <span className="hidden sm:block tracking-tight">Instacart</span>
        </NavLink>
      </div>

      {/* 2. Desktop Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 text-[15px] text-gray-600 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#0B3B24] font-semibold'
                  : 'hover:text-[#0B3B24] transition-colors'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#0B3B24] font-semibold'
                  : 'hover:text-[#0B3B24] transition-colors'
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/deals"
              className="text-[#F37B24] hover:text-orange-600 transition-colors"
            >
              Deals
            </NavLink>
          </li>
        </ul>
      </div>

      {/* 3. Right Side (Search, Cart, User Profile) */}
      <div className="navbar-end w-full lg:w-auto flex-1 lg:flex-none gap-3 sm:gap-6 justify-end">
        {/* Search Bar (Hidden on very small screens, visible on md and up) */}
        <div className="hidden md:flex relative w-full max-w-[320px]">
          <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
            <FiSearch className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search for groceries..."
            className="w-full bg-[#FFF6F0] text-sm text-gray-700 rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:ring-1 focus:ring-orange-200"
          />
        </div>

        {/* Search Icon for Mobile (Shows when Search Bar is hidden) */}
        <button className="btn btn-ghost btn-circle md:hidden">
          <FiSearch className="h-5 w-5 text-gray-600" />
        </button>

        {/* Cart Icon with DaisyUI Indicator */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <span className="indicator-item badge bg-[#F37B24] text-white border-none w-5 h-5 p-0 text-[10px] rounded-full">
              5
            </span>
            <FiShoppingCart className="h-6 w-6 text-gray-800" />
          </div>
        </button>

        {/* User Profile Dropdown (DaisyUI) */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 p-1 rounded-full pr-2 transition-colors"
          >
            {/* User Avatar Circle */}
            <div className="w-9 h-9 rounded-full bg-[#0B3B24] text-white flex items-center justify-center font-semibold text-lg">
              J
            </div>
            {/* Dropdown Arrow */}
            <FiChevronDown className="h-4 w-4 text-gray-500 hidden sm:block" />
          </div>

          {/* Dropdown Menu Items */}
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-48 mt-4 border border-gray-100"
          >
            <li>
              <NavLink to="/my-orders">My Orders</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
            <div className="divider my-0"></div>
            <li>
              <button className="text-red-500 hover:bg-red-50 font-medium">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
