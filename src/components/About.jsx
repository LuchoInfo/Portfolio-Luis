import React from "react";
import AboutImg from "../assets/About.webp";
import { FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext"; 

const About = () => {
  const { translations } = useLanguage();
  const { theme } = useTheme(); 

  // Clases condicionales para modo claro y oscuro
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-800";
  const cardBg = theme === "dark" ? "bg-gray-950" : "bg-white";
  const shadowColor = theme === "dark" ? "shadow-blue-500" : "shadow-gray-400";
  const borderColor = theme === "dark" ? "border-blue-600" : "border-gray-400";

  return (
    <div id="about" className={`py-20 z-50 ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">
          {translations.aboutTitle}
        </h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* img section */}
          <div className={`relative border hidden md:block ${borderColor} p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] ${shadowColor}`}>
            <img
              src={AboutImg}
              alt="About Me"
              className={`w-[300px] md:w-[1500px] rounded-full ${borderColor} border ${shadowColor}`}
            />
          </div>
          {/* paragraph section */}
          <div className={`p-5 md:p-10 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] ${shadowColor} h-[600px] flex flex-col ${cardBg}`}>
            <div className="overflow-auto flex-grow">
              <p className="text-lg leading-7 mb-6">
                {translations.aboutDescription1}
              </p>
              <p className="text-lg leading-7 mb-6">
                {translations.aboutDescription2}
              </p>
              <p className="text-lg leading-7">
                {translations.aboutDescription3}
              </p>
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-2xl mb-5 text-blue-400">
                {translations.mySkills}
              </h1>
              <div className="flex flex-wrap gap-4 mb-5 text-sm">
                {[
                  "React",
                  "Next.js",
                  "Tailwind Css",
                  "Redux",
                  "Node.js",
                  "Github",
                ].map((skill) => (
                  <p
                    key={skill}
                    className={`cursor-pointer px-2 py-1 rounded-full ${bgColor} ${textColor}`}
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <button className="px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1">
                {translations.contact}
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
