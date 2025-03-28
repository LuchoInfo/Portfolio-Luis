import React, { useContext } from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "../Css/Hero.css";

const Hero = () => {
  const { translations } = useLanguage();
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`h-max md:h-screen flex flex-col justify-center items-center relative z-10 pb-10 transition-colors duration-500 
      ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            {translations.heroGreeting}{" "}
            <p className="text-blue-400">Luis Santibañez</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3"
          >
            {translations.heroRole}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className={`lg:w-[600px] mb-4 md:mb-0 text-sm ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {translations.heroDescription}
          </motion.p>

          {/* Enlace de descarga con el botón */}
          <motion.a 
  href="/cv.pdf"
  download="Curriculum_Vitae"
  className='px-4 py-2 flex items-center justify-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-lg border-2 border-blue-400 transition-all text-sm w-auto max-w-xs'
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.4, delay: 0.5 }}>
  <Download className='w-5 h-5' /> {translations.heroDownload}
</motion.a>

          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <FaFacebook className="hover:text-blue-400" />
            <FaInstagram className="hover:text-blue-400" />
            <FaLinkedin className="hover:text-blue-400" />
            <FaSquareXTwitter className="hover:text-blue-400" />
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Profile}
            alt="Profile"
            className="rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-lg shadow-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
