export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Quienes somos",
      contact: "Contacto",
    },
    hero: {
      tagline: "Desarrollo de Software Personalizado",
      title: "Transformamos tus ideas en soluciones digitales innovadoras",
      description:
        "Especializados en crear aplicaciones web y móviles escalables, diseñadas para impulsar tu negocio al siguiente nivel.",
      cta: "Solicita una consulta",
      ctaSecondary: "Ver proyectos",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales para cada necesidad",
      webDev: {
        title: "Desarrollo Web",
        price: "$150.000 /USD",
        features: [
          "Sitios web adaptables y modernos",
          "Diseño personalizado según tus necesidades",
          "Optimización para motores de búsqueda",
          "Integración con sistemas de pago",
          "Panel de administración incluido",
        ],
      },
      mobileDev: {
        title: "Aplicaciones Móviles",
        price: "$200.000 /USD",
        features: [
          "Apps para iOS y Android",
          "Interfaz intuitiva y atractiva",
          "Sincronización en la nube",
          "Notificaciones push",
          "Publicación en tiendas oficiales",
        ],
      },
      consulting: {
        title: "Consultoría Técnica",
        price: "$80.000 /USD",
        features: [
          "Análisis de arquitectura de sistemas",
          "Recomendaciones de mejoras",
          "Planificación de migraciones",
          "Revisión de código",
          "Capacitación a tu equipo",
        ],
      },
      maintenance: {
        title: "Mantenimiento & Soporte",
        price: "$50.000 /USD",
        features: [
          "Actualizaciones regulares",
          "Respaldo de información",
          "Soporte técnico prioritario",
          "Monitoreo 24/7",
          "Reportes mensuales de rendimiento",
        ],
      },
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Casos de éxito que generan resultados",
      viewProject: "Ver proyecto",
    },
    about: {
      title: "Quienes somos",
      subtitle: "Conoce al equipo detrás de AXIOMA",
      person1: {
        name: "Nombre Persona 1",
        description: "Descripción de la primera persona. Experta en desarrollo de software con años de experiencia.",
      },
      person2: {
        name: "Nombre Persona 2",
        description: "Descripción de la segunda persona. Especialista en diseño y experiencia de usuario.",
      },
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
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About us",
      contact: "Contact",
    },
    hero: {
      tagline: "Custom Software Development",
      title: "We transform your ideas into innovative digital solutions",
      description:
        "Specialized in creating scalable web and mobile applications, designed to take your business to the next level.",
      cta: "Request a consultation",
      ctaSecondary: "View projects",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for every need",
      webDev: {
        title: "Web Development",
        price: "$150.000 /USD",
        features: [
          "Modern and responsive websites",
          "Custom design tailored to your needs",
          "Search engine optimization",
          "Payment systems integration",
          "Admin panel included",
        ],
      },
      mobileDev: {
        title: "Mobile Applications",
        price: "$200.000 /USD",
        features: [
          "iOS and Android apps",
          "Intuitive and attractive interface",
          "Cloud synchronization",
          "Push notifications",
          "Official store publication",
        ],
      },
      consulting: {
        title: "Technical Consulting",
        price: "$80.000 /USD",
        features: [
          "System architecture analysis",
          "Improvement recommendations",
          "Migration planning",
          "Code review",
          "Team training",
        ],
      },
      maintenance: {
        title: "Maintenance & Support",
        price: "$50.000 /USD",
        features: [
          "Regular updates",
          "Data backup",
          "Priority technical support",
          "24/7 monitoring",
          "Monthly performance reports",
        ],
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Success stories that deliver results",
      viewProject: "View project",
    },
    about: {
      title: "About us",
      subtitle: "Meet the team behind AXIOMA",
      person1: {
        name: "Person 1 Name",
        description: "Description of the first person. Expert in software development with years of experience.",
      },
      person2: {
        name: "Person 2 Name",
        description: "Description of the second person. Specialist in design and user experience.",
      },
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
