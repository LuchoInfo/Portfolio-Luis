import React from 'react';
import { FaGithub } from 'react-icons/fa';
import projects from "../data/projects";
import { useLanguage } from '../context/LanguageContext';

const Project = () => {
  const { translations, language } = useLanguage();

  return (
    <section
      id='project'
      className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-300 mb-12 transition-colors duration-500">
          {translations.projects}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 h-[500px] bg-white dark:bg-gray-950 transition-colors duration-500"
            >
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-300 transition-colors duration-500">
                  {project.title[language]}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-500">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 transition-colors duration-500"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    {translations.viewProject}
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="flex gap-2 items-center bg-gray-800 dark:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <FaGithub /> {translations.github}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
