const nestchat = {
  slug: "nestchat",
  category: "fullstack",
  overview: {
    title: "NestChat - Real-Time Messenger",
    shortDescription: "A high-performance chat application leveraging Redis Pub/Sub and WebSockets for instantaneous, scalable communication.",
  },
  description: `NestChat is a real-time messaging platform designed for speed. By utilizing Redis as a message broker and Socket.io for persistent connections, the app handles message delivery with sub-millisecond latency. 

The project focuses on horizontal scalability, ensuring that even as user traffic increases, the Pub/Sub architecture keeps chat rooms synchronized across multiple server instances. Authentication is handled via NextAuth with Google integration for a seamless onboarding experience.`,

  // Highlighting the technical architecture as "Goals"
  goals: [
    "Real-Time Sync: Sub-millisecond message delivery using Socket.io.",
    "Redis Pub/Sub: Ensuring message persistence and cross-server synchronization.",
    "Google OAuth: Secure and fast user authentication flow.",
    "Presence Tracking: Real-time 'Online/Offline' status for all contacts.",
    "Optimistic Updates: Instant UI feedback for sent messages before server confirmation.",
    "Responsive Design: A desktop-class chat experience on mobile devices.",
  ],

  techStack: ["Next.js", "TypeScript", "Redis", "Socket.io", "NextAuth", "Tailwind CSS", "ShadCN UI"],

  links: {
    github: "https://github.com/chrlesdev/NestChat",
    demo: "https://nestchat-demo.vercel.app", // Replace with actual if available
  },

  screenshots: [
    {
      title: "Login Page",
      image: "/ProjectImages/nestchat/login.jpg",
      description: "Google sign-in screen with NestChat branding.",
    },
    {
      title: "Chat Interface",
      image: "/ProjectImages/nestchat/chat-ui.jpg",
      description: "Clean real-time chat UI with message bubbles and live typing.",
    },
    {
      title: "dashboard",
      image: "/ProjectImages/nestchat/dashboard.jpg",
      description: "dashboard you could see your recent chat.",
    },
    {
      title: "friend request",
      image: "/ProjectImages/nestchat/friendRequest.jpg",
      description: "friend request ui.",
    },
    {
      title: "add friend",
      image: "/ProjectImages/nestchat/addFriend.jpg",
      description: "friend request ui.",
    },
  ],
};

export default nestchat;
