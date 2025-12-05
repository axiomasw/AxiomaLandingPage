export const translations = {
  es: {
    slogan: "La distancia más corta entre el problema y la solución",
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      tagline: "Desarrollo de Software Personalizado",
      title: "Transformamos tus ideas en soluciones digitales innovadoras",
      description:
        "Especializados en crear aplicaciones web y móviles escalables, diseñadas para impulsar tu negocio al siguiente nivel. La distancia más corta entre el problema y la solución.",
      cta: "Solicita una consulta",
      ctaSecondary: "Ver proyectos",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones digitales que impulsan tu negocio",
      landingPages: {
        title: "Landing Pages",
        description: "P\u00e1ginas web optimizadas para conversi\u00f3n, dise\u00f1adas para captar clientes y generar resultados medibles.",
      },
      ecommerce: {
        title: "Ecommerce",
        description: "Tiendas online completas con sistemas de pago, gesti\u00f3n de inventario y experiencia de compra excepcional.",
      },
      customSoftware: {
        title: "Software Personalizado",
        description: "Desarrollo de aplicaciones a medida para resolver necesidades espec\u00edficas de tu empresa y optimizar procesos.",
      },
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Casos de éxito que generan resultados",
      viewProject: "Ver proyecto",
    },
    contact: {
      title: "¿Tienes un proyecto en mente?",
      description:
        "Estamos listos para convertir tu visión en realidad. Contáctanos y comencemos a construir algo increíble juntos.",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        message: "Cuéntanos sobre tu proyecto",
        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Te contactaremos pronto.",
      },
    },
    footer: {
      tagline: "Innovación digital que impulsa tu negocio",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    slogan: "The shortest distance between problem and solution",
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      tagline: "Custom Software Development",
      title: "We transform your ideas into innovative digital solutions",
      description:
        "Specialized in creating scalable web and mobile applications, designed to take your business to the next level. The shortest distance between problem and solution.",
      cta: "Request a consultation",
      ctaSecondary: "View projects",
    },
    services: {
      title: "Our Services",
      subtitle: "Digital solutions that drive your business",
      landingPages: {
        title: "Landing Pages",
        description: "Conversion-optimized web pages designed to capture customers and generate measurable results.",
      },
      ecommerce: {
        title: "Ecommerce",
        description: "Complete online stores with payment systems, inventory management and exceptional shopping experience.",
      },
      customSoftware: {
        title: "Custom Software",
        description: "Tailored application development to solve your company's specific needs and optimize processes.",
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Success stories that deliver results",
      viewProject: "View project",
    },
    contact: {
      title: "Have a project in mind?",
      description:
        "We're ready to turn your vision into reality. Contact us and let's start building something amazing together.",
      form: {
        name: "Full name",
        email: "Email address",
        message: "Tell us about your project",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent! We'll contact you soon.",
      },
    },
    footer: {
      tagline: "Digital innovation that drives your business",
      rights: "All rights reserved.",
    },
  },
}

export type Language = keyof typeof translations
