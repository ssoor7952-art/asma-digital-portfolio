export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  sector: string;
  goal: string;
  url: string;
  description: string;
  image: string;
  mockupDesktop: string;
  mockupMobile: string;
  gallery: string[];
  features: string[];
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "dr-abdelkebir-kostas",
    number: "01",
    title: "DR. ABDELKEBIR KOSTAS",
    client: "Dr. Abdelkebir Kostas",
    category: "Santé · Ophtalmologie",
    sector: "Ophtalmologie & Chirurgie Oculaire",
    goal: "Moderniser l'image digitale du cabinet médical, faciliter la prise de rendez-vous en ligne et présenter l'expertise chirurgicale de pointe (laser, cataracte, rétine).",
    url: "https://scintillating-parfait-c109b4.netlify.app/",
    description: "Site web médical de référence pour un cabinet d'ophtalmologie de renom. Design épuré, parcours patient fluide et mise en valeur des équipements technologiques de pointe.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    mockupDesktop: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    mockupMobile: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Prise de rendez-vous en ligne intuitive",
      "Présentation détaillée des spécialités chirurgicales",
      "Espace information et conseils patients",
      "Design responsive et accessibilité optimale"
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"]
  },
  {
    id: "dr-asmae-bekkali",
    number: "02",
    title: "DR ASMAE BEKKALI",
    client: "Dr. Asmae Bekkali",
    category: "Médecine esthétique · Bien-être",
    sector: "Médecine Esthétique & Anti-âge",
    goal: "Créer une vitrine digitale luxueuse et rassurante mettant en valeur l'expertise en médecine esthétique, les protocoles de soins et l'excellence du cabinet.",
    url: "https://polite-crisp-74486a.netlify.app/",
    description: "Plateforme élégante et raffinée dédiée à la médecine esthétique et au bien-être. Une esthétique haut de gamme combinant confiance, naturalité et innovation.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    mockupDesktop: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
    mockupMobile: "https://images.unsplash.com/photo-1512290900722-9a70f8a82f39?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Catalogue interactif des soins visage et corps",
      "Galerie avant / après éthique et professionnelle",
      "Système de consultation et contact direct",
      "Direction artistique minimaliste et luxueuse"
    ],
    technologies: ["React", "Tailwind CSS", "Motion", "Vite"]
  },
  {
    id: "the-dark-ride",
    number: "03",
    title: "THE DARK RIDE",
    client: "The Dark Ride",
    category: "Mobilité · Location de motos · Expérience premium",
    sector: "Location de Motos d'Exception & Road Trips",
    goal: "Concevoir une expérience web immersive et rebelle pour les passionnés de deux-roues haut de gamme, avec réservation de modèles iconiques et carnets de voyage.",
    url: "https://fluffy-kheer-44f3fe.netlify.app/",
    description: "Site immersif de location de motos haut de gamme et d'organisation de road trips d'exception. Expérience utilisateur cinématique et design sombre sophistiqué.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200",
    mockupDesktop: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1000",
    mockupMobile: "https://images.unsplash.com/photo-1609630875171-b13213777e4d?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1558981285-6f0c94be58bb?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Catalogue de flotte de motos premium interactif",
      "Module de réservation et tarification dynamique",
      "Photographie cinématique et ambiance immersive",
      "Section road trips et carnets de route"
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "GSAP"]
  },
  {
    id: "lumiere-paris",
    number: "04",
    title: "LUMIÈRE PARIS",
    client: "Lumière Paris",
    category: "Voyage · Tourisme · Expérience immersive",
    sector: "Tourisme de Luxe & Expériences Culturelles",
    goal: "Proposer un portail touristique d'exception pour découvrir Paris à travers des visites privées, des hébergements de prestige et une direction artistique éditoriale.",
    url: "https://paris-travel-website-lime.vercel.app/",
    description: "Portail touristique immersif pour découvrir Paris à travers des visites guidées d'exception, des hébergements de prestige et des expériences culturelles sur mesure.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    mockupDesktop: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=1000",
    mockupMobile: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Sélection d'expériences exclusives et sur mesure",
      "Mise en page éditoriale inspirée des magazines de voyage",
      "Système de conciergerie et demandes privées",
      "Multilingue et design responsive sophistiqué"
    ],
    technologies: ["React", "Next.js architecture", "Tailwind CSS", "Motion"]
  },
  {
    id: "be-wow-beauty",
    number: "05",
    title: "BE WOW BEAUTY",
    client: "Be Wow Beauty",
    category: "Beauté · Spa · Salon",
    sector: "Spa de Luxe & Soins Esthétiques",
    goal: "Développer une plateforme digitale raffinée pour un spa et salon de beauté haut de gamme, permettant de réserver des soins signatures et de découvrir l'univers de la marque.",
    url: "https://bewowbeauty.com/fr",
    description: "Site web pour un spa et salon de beauté de luxe. Réservation de soins signatures, catalogue de prestations haut de gamme et ambiance visuelle sophistiquée.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
    mockupDesktop: "https://images.unsplash.com/photo-1560750588-73607b0ae520?auto=format&fit=crop&q=80&w=1000",
    mockupMobile: "https://images.unsplash.com/photo-1512290900722-9a70f8a82f39?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Menu des soins et rituels bien-être détaillé",
      "Système de réservation en ligne intégré",
      "Cartes cadeaux électroniques",
      "Design chaleureux et épuré"
    ],
    technologies: ["React", "Shopify / Headless", "Tailwind CSS", "JavaScript"]
  },
  {
    id: "solam-beauty",
    number: "06",
    title: "SOLAM BEAUTY",
    client: "Solam Beauty",
    category: "Beauté · Esthétique · Nails",
    sector: "Prothésie Ongulaire & Esthétique",
    goal: "Créer une application web moderne et une vitrine interactive pour un salon spécialisé en nail art et beauté des mains, mettant en avant le portfolio de créations.",
    url: "https://solam-beauty-demo.vercel.app/",
    description: "Application web et vitrine interactive pour un salon d'esthétique et de prothésie ongulaire haut de gamme. Présentation des portfolios de nail art et prise de rendez-vous fluide.",
    image: "https://images.unsplash.com/photo-1632345031435-8777f6c9ae8c?auto=format&fit=crop&q=80&w=1200",
    mockupDesktop: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000",
    mockupMobile: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Galerie de nail art interactive et filtrable",
      "Réservation de créneaux en temps réel",
      "Tarifs et prestations clairs",
      "Interface mobile-first optimisée"
    ],
    technologies: ["React", "Tailwind CSS", "Vite", "TypeScript"]
  }
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "creation-sites-web",
    number: "01",
    title: "Création de sites web",
    description: "Des sites modernes, professionnels et adaptés aux objectifs de chaque entreprise.",
    details: ["Sites vitrines sur mesure", "Refonte graphique et technique", "Optimisation performances & SEO", "Expérience utilisateur immersive"]
  },
  {
    id: "design-ui-ux",
    number: "02",
    title: "Design UI/UX",
    description: "Des interfaces intuitives, esthétiques et pensées pour les utilisateurs.",
    details: ["Parcours utilisateurs et wireframes", "Design system exclusif", "Prototypage haute fidélité", "Ergonomie et accessibilité"]
  },
  {
    id: "e-commerce",
    number: "03",
    title: "E-commerce",
    description: "Des boutiques en ligne conçues pour présenter les produits et faciliter les achats.",
    details: ["Boutiques Shopify & WooCommerce", "Tunnel d'achat optimisé", "Intégration paiements sécurisés", "Catalogue produits sur mesure"]
  },
  {
    id: "social-media",
    number: "04",
    title: "Social Media Management",
    description: "Une présence digitale cohérente et professionnelle sur les réseaux sociaux.",
    details: ["Stratégie de contenu social", "Planning éditorial et publication", "Community management de marque", "Rapports d'impact et croissance"]
  },
  {
    id: "creation-contenu",
    number: "05",
    title: "Création de contenu",
    description: "Des visuels, publications, vidéos courtes et contenus adaptés à chaque marque.",
    details: ["Direction artistique visuelle", "Rédaction web et copy", "Création de visuels publicitaires", "Montage vidéo et reels"]
  },
  {
    id: "strategie-digitale",
    number: "06",
    title: "Stratégie digitale",
    description: "Des solutions de communication pour développer la visibilité des entreprises.",
    details: ["Audit de positionnement", "Plan d'action marketing digital", "Campagnes d'acquisition ciblées", "Accompagnement et conseil"]
  }
];
