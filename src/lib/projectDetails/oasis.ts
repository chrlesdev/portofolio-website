const oasis = {
  slug: "oasis",
  category: "fullstack",
  overview: {
    title: "Oasis - Property Rental Platform",
    shortDescription: "A modern property platform bridging owners and travelers through smart search and secure booking.",
  },
  description: `Oasis enables users to browse, filter, and book properties with features like real-time availability, wallet-based payments, and geolocation search. 

The platform handles complex business logic, including dynamic pricing for peak seasons and a dual-dashboard system for both property owners (tenants) and travelers.`,

  goals: [
    "Dual Authentication: Separate logic for owners and users with social login.",
    "Smart Browsing: Search by destination with advanced price filtering.",
    "Real-Time Availability: Instant updates to prevent double-booking.",
    "Dynamic Pricing: Automated price adjustments for peak seasons.",
    "Multi-Property Management: Scale from one room to multiple listings.",
    "Digital Wallet: Secure credit storage and transaction history.",
    "Geolocation Search: Finding properties via Google Maps integration.",
  ],

  techStack: ["Next.js", "Express.js", "Prisma", "MySQL", "Cloudinary", "Zod", "Tailwind CSS"],

  links: {
    github: "https://github.com/chrlesdev/oasis",
    demo: "https://oasis-rent.vercel.app",
  },

  screenshots: [
    {
      title: "Tenant Dashboard",
      image: "/ProjectImages/ProjectDetail/tenantPage.jpg",
      description: "Overview for property owners to manage and monitor their listings in one place.",
    },
    {
      title: "Property Detail Page",
      image: "/ProjectImages/ProjectDetail/property-detail-page.jpg",
      description: "Full info about a selected property — images, availability, amenities, and more.",
    },
    {
      title: "Create Room",
      image: "/ProjectImages/ProjectDetail/create-room-picture.jpg",
      description: "Form to create rooms with pricing, capacity, and media for each listing.",
    },
    {
      title: "Geolocation Integration",
      image: "/ProjectImages/ProjectDetail/edit-property-page.jpg",
      description: "Automatically pin properties on the map with latitude/longitude input.",
    },
  ],
};

export default oasis;
