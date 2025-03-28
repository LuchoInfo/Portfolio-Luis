import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    //Navbar
    home: "Home",
    about: "About",
    education: "Education & Experience",
    projects: "Projects",
    contact: "Contact",
    aboutTitle: "About Me",
    //Hero
    heroGreeting: "Hi👋, I'm",
    heroRole: "Full-Stack Developer | .NET Stack Enthusiast",
    heroDescription: "Backend and full-stack developer. I combine efficiency and creativity to transform ideas into digital solutions. Contact me!",
    heroDownload: "Download CV",
    //About me
    aboutDescription1:
      "I am a backend developer passionate about creating scalable and efficient solutions. With experience in ASP.NET Core and strong database management skills, I specialize in developing and optimizing system performance.",
    aboutDescription2:
      "Beyond programming, I enjoy problem-solving and collaborating with teams to deliver high-quality software.",
    aboutDescription3:
      "Currently, I am expanding my skills by integrating frontend technologies like React into my projects, allowing me to develop full-stack applications with seamless communication between backend services and user interfaces. I am always ready to take on new challenges and innovate in software development.",
    mySkills: "My Skills",
    // Education & Experience
    educationTitle: "Education",
    experienceTitle: "Experience",
    educationList: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Global Tech University",
        year: "2021 - 2023",
        description: "Focused on software architecture, AI, and full-stack development.",
        icon: "🎓",
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "Innovate University",
        year: "2017 - 2021",
        description: "Developed strong programming skills and worked on various software projects.",
        icon: "🎓",
      },
      {
        degree: "High School Diploma",
        institution: "Tech Valley High School",
        year: "2015 - 2017",
        description: "Graduated with honors in mathematics and computer science.",
        icon: "🎓",
      },
    ],
    experienceList: [
      {
        role: "Full-Stack Developer",
        company: "NextGen Solutions",
        year: "2023 - Present",
        description: "Building scalable web applications using React, Node.js, and .NET.",
        icon: "💻",
      },
      {
        role: "Software Engineer Intern",
        company: "Digital Innovators Inc.",
        year: "2022",
        description: "Assisted in the development of a cloud-based analytics platform.",
        icon: "💼",
      },
    ],
    // Projects
    viewProject: "View Project",
    github: "Github",
    // Contact Section
    contactTitle: "Contact",
    email: "Email",
    phone: "Phone",
    followMe: "Follow Me",
    getInTouch: "Get in Touch",
    name: "Name",
    yourEmail: "Your Email",
    yourName: "Your Name",
    message: "Message",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    //footer Section
    footerText: "All rights reserved.",
  },
  es: {
    //Navbar
    home: "Inicio",
    about: "Sobre mí",
    education: "Educación & Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    aboutTitle: "Sobre mí",
    //About me
    aboutDescription1:
      "Soy un desarrollador backend apasionado por crear soluciones escalables y eficientes. Con experiencia en ASP.NET Core y sólidos conocimientos en gestión de bases de datos, me especializo en el desarrollo y la optimización del rendimiento de sistemas.",
    aboutDescription2:
      "Más allá de la programación, disfruto resolver problemas y colaborar con equipos para generar software de alta calidad.",
    aboutDescription3:
      "Actualmente, amplío mis habilidades integrando tecnologías frontend como React en mis proyectos, lo que me permite desarrollar aplicaciones full-stack con comunicación fluida entre servicios backend e interfaces de usuario. Siempre estoy listo para afrontar nuevos retos e innovar en el desarrollo de software.",
    mySkills: "Mis habilidades",
    //Hero
    heroGreeting: "Hola👋, soy",
    heroRole: "Desarrollador Full-Stack | Entusiasta de .NET",
    heroDescription: "Desarrollador backend y full-stack. Combino eficiencia y creatividad para transformar ideas en soluciones digitales. ¡Contáctame!",
    heroDownload: "Descargar CV",
    // Educación & Experiencia
    educationTitle: "Educación",
    experienceTitle: "Experiencia",
    educationList: [
      {
        degree: "Maestría en Ciencias de la Computación",
        institution: "Universidad Global Tech",
        year: "2021 - 2023",
        description: "Enfocado en arquitectura de software, IA y desarrollo full-stack.",
        icon: "🎓",
      },
      {
        degree: "Licenciatura en Ingeniería de Software",
        institution: "Universidad Innovate",
        year: "2017 - 2021",
        description: "Desarrollé habilidades sólidas en programación y trabajé en varios proyectos de software.",
        icon: "🎓",
      },
      {
        degree: "Diploma de Bachillerato",
        institution: "Tech Valley High School",
        year: "2015 - 2017",
        description: "Graduado con honores en matemáticas y ciencias de la computación.",
        icon: "🎓",
      },
    ],
    experienceList: [
      {
        role: "Desarrollador Full-Stack",
        company: "NextGen Solutions",
        year: "2023 - Presente",
        description: "Construyendo aplicaciones web escalables con React, Node.js y .NET.",
        icon: "💻",
      },
      {
        role: "Practicante de Ingeniería de Software",
        company: "Digital Innovators Inc.",
        year: "2022",
        description: "Asistí en el desarrollo de una plataforma de análisis en la nube.",
        icon: "💼",
      },
    ],
    // Proyectos
    viewProject: "Ver Proyecto",
    github: "Github",
    // Contact Section
    contactTitle: "Contacto",
    email: "Correo electrónico",
    phone: "Teléfono",
    followMe: "Sígueme",
    getInTouch: "Ponte en contacto",
    name: "Nombre",
    yourEmail: "Tu correo electrónico",
    yourName: "Tu nombre",
    message: "Mensaje",
    yourMessage: "Tu mensaje",
    sendMessage: "Enviar Mensaje",
    //Footer Section
    footerText: "Todos los derechos reservados.",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ translations: translations[language], language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
