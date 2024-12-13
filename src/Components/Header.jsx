import React, { useState, useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import logo from "../assets/images/logo.png";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const { darkmode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
    navigate('/login'); // Redirect to login page
  };

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Properties', path: 'properties' },
    { link: 'Services', path: 'services' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact', path: 'contact' },
  ];

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return (
    <nav className={`flex justify-between items-center lg:px-20 px-4 py-3 top-0 z-30 ${darkmode ? 'dark bg-black' : 'light bg-[#f3f3f3]'}`}>
      <div id="logo">
        <img src={logo} alt="logo" className="lg:w-[150px] w-[120px] dark:invert" />
      </div>
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-500 hover:text-white"
          >
            {link}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
