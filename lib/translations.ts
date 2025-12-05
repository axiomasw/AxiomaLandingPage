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
      subtitle: "Soluciones integrales para cada necesidad",
      webDev: {
        title: "Desarrollo Web",
        description: "Aplicaciones web modernas, responsivas y escalables utilizando las últimas tecnologías.",
      },
      mobileDev: {
        title: "Aplicaciones Móviles",
        description: "Apps nativas y multiplataforma para iOS y Android con experiencias excepcionales.",
      },
      consulting: {
        title: "Consultoría Técnica",
        description: "Asesoramiento experto en arquitectura, migración de sistemas y mejores prácticas.",
      },
      maintenance: {
        title: "Mantenimiento & Soporte",
        description: "Actualizaciones continuas, monitoreo y soporte técnico para garantizar el rendimiento óptimo.",
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
      subtitle: "Comprehensive solutions for every need",
      webDev: {
        title: "Web Development",
        description: "Modern, responsive and scalable web applications using the latest technologies.",
      },
      mobileDev: {
        title: "Mobile Applications",
        description: "Native and cross-platform apps for iOS and Android with exceptional experiences.",
      },
      consulting: {
        title: "Technical Consulting",
        description: "Expert advice on architecture, system migration and best practices.",
      },
      maintenance: {
        title: "Maintenance & Support",
        description: "Continuous updates, monitoring and technical support to ensure optimal performance.",
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
