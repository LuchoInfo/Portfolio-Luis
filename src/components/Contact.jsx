import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { translations } = useLanguage(); 

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-950 py-16 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-300 mb-12">{translations.contact}</h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-300">{translations.contact}</h1>
              <p className="text-gray-700 dark:text-gray-300 my-5">{translations.aboutDescription2}</p>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">{translations.email}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">youremail@example.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">{translations.phone}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">+123 456 7890</a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">{translations.followMe}</h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                <FaFacebook className="text-blue-600 dark:text-blue-400" />
                <FaInstagram className="text-blue-600 dark:text-blue-400" />
                <FaLinkedin className="text-blue-600 dark:text-blue-400" />
                <FaSquareXTwitter className="text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-blue-500 p-8 transition-colors">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-6">{translations.getInTouch}</h3>
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300">{translations.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 w-full p-3 border bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder={translations.yourName} 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300">{translations.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 w-full p-3 border bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder={translations.yourEmail} 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300">{translations.message}</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="mt-1 w-full p-3 border bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder={translations.yourMessage}></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                {translations.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
