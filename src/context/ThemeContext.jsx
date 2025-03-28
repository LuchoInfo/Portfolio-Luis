import { createContext, useState, useEffect, useContext } from 'react';
import { animate } from "framer-motion"; // Importar animaciones

export const ThemeContext = createContext();

// Agregamos el hook personalizado para usar el contexto
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    // Animación al cambiar tema
    animate(
      document.documentElement,
      { opacity: [0, 1] }, // Efecto de fade-in
      { duration: 0.5 } // Duración de 0.5s
    );

  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
