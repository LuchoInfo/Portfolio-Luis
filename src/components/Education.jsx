import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { translations } = useLanguage();

  return (
    <section
      id='education'
      className='py-16 px-6 bg-gray-100 dark:bg-gray-950 transition-colors duration-500'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-gray-300 mb-12 transition-colors duration-500'>
          {translations.education}
        </h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Sección de Educación */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-6 transition-colors duration-500'>
              {translations.educationTitle}
            </h3>
            {translations.educationList.map((edu, index) => (
              <div
                key={index}
                className='flex items-start bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6 transition-colors duration-500'
              >
                <div className='text-4xl mr-6 text-blue-600 dark:text-blue-400 transition-colors duration-500'>
                  {edu.icon}
                </div>
                <div>
                  <h4 className='text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-500'>
                    {edu.degree}
                  </h4>
                  <p className='text-gray-700 dark:text-gray-300 transition-colors duration-500'>
                    {edu.institution}
                  </p>
                  <p className='text-gray-600 dark:text-gray-400 text-sm italic transition-colors duration-500'>
                    {edu.year}
                  </p>
                  <p className='text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-500'>
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sección de Experiencia */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-6 transition-colors duration-500'>
              {translations.experienceTitle}
            </h3>
            {translations.experienceList.map((exp, index) => (
              <div
                key={index}
                className='flex items-start bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6 transition-colors duration-500'
              >
                <div className='text-4xl mr-6 text-blue-600 dark:text-blue-400 transition-colors duration-500'>
                  {exp.icon}
                </div>
                <div>
                  <h4 className='text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-500'>
                    {exp.role}
                  </h4>
                  <p className='text-gray-700 dark:text-gray-300 transition-colors duration-500'>
                    {exp.company}
                  </p>
                  <p className='text-gray-600 dark:text-gray-400 text-sm italic transition-colors duration-500'>
                    {exp.year}
                  </p>
                  <p className='text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-500'>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
