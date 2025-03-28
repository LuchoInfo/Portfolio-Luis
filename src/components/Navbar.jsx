import React, { useState, useContext } from "react";
import Logo from "../assets/Logo.png";
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useLanguage } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { translations, switchLanguage } = useLanguage();

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-500 -mb-7 z-50 w-full py-3 fixed shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0">
        {/* Logo section */}
        <div>
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[170px]" />
          </a>
        </div>
        {/* Menu section */}
        <nav className="hidden md:block">
          <ul className="flex gap-7 text-xl items-center font-semibold">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0});
              }}
            >
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
                {translations.home}
              </li>
            </a>
            <a href="#about">
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
                {translations.about}
              </li>
            </a>
            <a href="#education">
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
                {translations.education}
              </li>
            </a>
            <a href="#project">
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
                {translations.projects}
              </li>
            </a>
            <a href="#contact">
              <button className="px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-md shadow-blue-500 border-2 border-blue-400 hover:bg-blue-600 transition-colors duration-300">
                {translations.contact} <FaChevronRight />
              </button>
            </a>
            {/* Botón para cambiar idioma */}
            <button
              onClick={switchLanguage}
              className="px-3 py-1 rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white transition-colors duration-300"
            >
              🌍 {translations.contact === "Contact" ? "ES" : "EN"}
            </button>
            {/* Botón para cambiar el tema */}
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1 rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white transition-colors duration-300"
            >
              {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
            </button>
          </ul>
        </nav>
        {/* Iconos de menú responsivo */}
        <div className="md:hidden text-gray-900 dark:text-white text-4xl transition-colors duration-300">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
