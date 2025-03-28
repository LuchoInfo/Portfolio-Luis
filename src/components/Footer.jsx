import React from 'react'
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer className='bg-white dark:bg-gray-900 text-dark dark:text-white py-4 text-center'>
      <p>&copy; {new Date().getFullYear()} Luis Santibañez. {translations.footerText}</p>
    </footer>
  )
}

export default Footer
