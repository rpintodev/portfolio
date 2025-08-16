import {
  angular,
  backend,
  caliaguaImages,
  vialappIamges,
  sgc1Images,
  csharp,
  css,
  expressjs,
  flutter,
  git,
  html,
  javascript,
  vpmobileImages,
  mobile,
  mongodb,
  netCore,
  nodejs,
  reactjs,
  senagua,
  tailwind,
  threejs,
  tripguide,
  typescript,
  unach,
  vial25,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre Mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: ".Net",
    icon: netCore,
  },
  {
    name: "ExpressJs",
    icon: expressjs,
  },
  
];

const experiences = [
  {
    title: "Desarrollador de Software",
    company_name: "Ministerio del Ambiente, Agua y Transición Ecológica",
    icon: senagua,
    iconBg: "#E6DEDD",
    date: "Octubre 2022 - Febrero 2023",
    points: [
      "Desarrolle una aplicacion web con Php 8 para la gestion de fichas de calidad del agua, la cual sirvio a las comunidades aledañas de Riobamba verificar la los niveles del contaminación del agua",
      
    ],
  },
  {
    title: "Analista de sistemas",
    company_name: "Unach",
    icon: unach,
    iconBg: "#383E56",
    date: "Mayo 2023 - Agosto 2024",
    points: [
      "Desarrolle una aplicacion web con Net Core 7 para el departamento de relaciones Nacionales e Internacionales de la UNACH",
      "Participe en el desarrollo de servicios para la notificacion de correos de la aplicacion web",

    ],
  },
  {
    title: "Auditor y Desarrollador de Software",
    company_name: "Vial25",
    icon: vial25,
    iconBg: "#E6DEDD",
    date: "Julio 2024 - Actualidad",
    points: [
      "Desarrollo y analisis de informes acerca de las discrepancias del sistema de peaje SYRIC",
      "Colabore con el equipo de TI para el mantenimiento de servidores HPE ProLiant, NAS y NVRs",
      "Desarrolle e implemente VialApp una aplicacion web y mobil para la gestion de denominacion de la boveda con Flutter, Nodejs y Angular",
    ],
  },
  
];

const projects = [
  {
    name: "Caliagua",
    description:
      "Aplicacion web para la gestion de fichas de calidad de agua, con generacion de reportes de fichas, estadisticos y gestion de usuarios por roles.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: caliaguaImages,
    source_code_link: "https://github.com/rpintodev/caliagua",
  },
  
  {
    name: "SGIC",
    description:
      "Aplicacion web para la gestión de instrumentos de cooperación, generacion de reportes y notificaciones por correo para seguimiento de las dependencias",
    tags: [
      {
        name: ".netcore",
        color: "blue-text-gradient",
      },
      {
        name: "blazor",
        color: "green-text-gradient",
      },
      {
        name: "apirest",
        color: "pink-text-gradient",
      },
   
    ],
    image: sgc1Images,
    source_code_link: "https://github.com/",
  },
  {
    name: "VialApp - Mobile",
    description:
      "Aplicacion mobile para la gestion de denominaciones en tiempo real, control de las transacciones entre los cajeros y supervisores, generación de informes operativos y sincronización offline para transacciones sin conexion",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "SocketIO",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "orange-text-gradient",
      },
      {
        name: "RestApi",
        color: "blue-text-gradient",
      },
    ],
    image: vpmobileImages,
    source_code_link: "https://github.com/rpintodev/vialapp-front-flutter",
  },
  {
    name: "VialApp - Web",
    description:
      "Aplicacion web para la gestion de denominaciones en tiempo real, dashboard de boveda y transacciones, generación de informes operativos y control de roles de usuarios",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "SocketIO",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "orange-text-gradient",
      },
      {
        name: "RestApi",
        color: "blue-text-gradient",
      },
    ],
    image: vialappIamges,
    source_code_link: "https://github.com/rpintodev/vialapp-web",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


export { experiences,projects, services, technologies, testimonials };
