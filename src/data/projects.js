import Digital from "../assets/Digital.png";
import Nike from "../assets/Nike.png";
import Clothify from "../assets/Clothify.png";

const projects = [
  {
    title: { 
      en: "Digital Marketing", 
      es: "Marketing Digital" 
    },
    description: {
      en: "A modern digital marketing platform that helps businesses manage campaigns, track analytics, and optimize their reach.",
      es: "Una plataforma moderna de marketing digital que ayuda a las empresas a gestionar campañas, realizar seguimiento de analíticas y optimizar su alcance."
    },
    techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "https://business420.netlify.app/",
    github: "https://github.com/rohitsingh93300/YTBusiness",
    image: Digital,
  },
  {
    title: { 
      en: "Nike Shoes", 
      es: "Zapatos Nike" 
    },
    description: {
      en: "An e-commerce website for Nike products, featuring a seamless shopping experience, cart management, and secure payments.",
      es: "Un sitio web de comercio electrónico para productos Nike, que ofrece una experiencia de compra fluida, gestión de carrito y pagos seguros."
    },
    techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
    link: "https://nike-topaz-delta.vercel.app/",
    github: "https://github.com/rohitsingh93300/YT-Nike",
    image: Nike,
  },
  {
    title: { 
      en: "Clothify", 
      es: "Clothify" 
    },
    description: {
      en: "A fashion e-commerce platform where users can explore trendy clothing, manage orders, and authenticate securely.",
      es: "Una plataforma de comercio electrónico de moda donde los usuarios pueden explorar ropa de tendencia, gestionar pedidos y autenticarse de forma segura."
    },
    techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
    link: "https://clothify-two.vercel.app/",
    github: "https://github.com/rohitsingh93300/YT-Clothify",
    image: Clothify,
  },
];

export default projects;
