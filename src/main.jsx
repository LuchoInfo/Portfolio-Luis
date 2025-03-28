import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "../src/context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { LoadingScreen } from "./components/LoadingScreen"; // Importa tu pantalla de carga

const Root = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Estado para controlar la carga

  return (
    <StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
          {/* Muestra la pantalla de carga si isLoaded es false */}
          {isLoaded && <App />}{" "}
          {/* Renderiza la aplicación cuando isLoaded es true */}
        </LanguageProvider>
      </ThemeProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);