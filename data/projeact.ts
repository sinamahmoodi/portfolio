const SAFESUB_GALLERY = [
  {
    label: "Storefront",
    caption:
      "A modern subscription storefront featuring digital services, featured products, and category-based navigation.",
    src: "/images/safesub/Hero.png",
  },
  {
    label: "Product catalog",
    caption:
      "A searchable product catalog with category filtering and subscription offerings.",
    src: "/images/safesub/product.png",
  },
  {
    label: "Subscription details",
    caption:
      "Detailed subscription pages displaying available plans, pricing, features, and purchase options.",
    src: "/images/safesub/order.png",
  },
];

const SAFESUB_OVERVIEW = {
  title: "Overview",
  description:
    "SafeSub is a digital subscription marketplace designed to make purchasing premium digital services easier through a centralized, modern, and user-friendly storefront.",
};

const SAFESUB_PROBLEM = {
  title: "The problem",
  description:
    "Purchasing digital subscriptions from different providers can be complicated, inconsistent, and difficult to compare. SafeSub aims to bring these services together in one organized marketplace with transparent pricing and a streamlined purchasing experience.",
};

const SAFESUB_APPROACH = {
  title: "The approach",
  description:
    "Build a responsive storefront using Next.js and React, integrate product and subscription data through Django REST APIs, and manage application-wide shopping state using Redux Toolkit.",
};

const SAFESUB_FEATURES = [
  "Product browsing and category filtering",
  "Search and subscription plan discovery",
  "Product details and subscription options",
  "Shopping cart and checkout flow",
  "User registration and authentication",
  "User profile management",
  "Backend API integration",
  "Responsive interface and loading states",
];

const SAFESUB_CONTRIBUTIONS = [
  "Lead frontend development and build the customer-facing marketplace using React and Next.js.",
  "Develop reusable components and organize application pages using Next.js App Router.",
  "Integrate product, category, subscription, authentication, and profile APIs with Django REST Framework.",
  "Implement shopping cart state management using Redux Toolkit.",
  "Develop registration, login, checkout, and profile experiences.",
  "Handle API errors, loading states, and backend communication failures.",
  "Improve responsive layouts and maintain a consistent visual experience.",
];

const SAFESUB_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Axios",
  "Django",
  "Django REST Framework",
];

const SAFESUB_AI_TOOLS = [
  {
    name: "ChatGPT",
    use: "Analyze application architecture, troubleshoot frontend and API integration issues, review implementation approaches, and improve React and Next.js components.",
  },
  {
    name: "OpenCode",
    use: "AI-assisted development, codebase exploration, implementation support, and debugging during frontend development.",
  },
];

const SAFESUB_REFLECTIONS = {
  challenge: {
    title: "A key challenge",
    description:
      "Building a consistent shopping experience while coordinating frontend state, authentication, subscription data, and backend API responses across multiple application flows.",
  },
  learned: {
    title: "What I learned",
    description:
      "Strengthened my understanding of Next.js App Router, frontend architecture, API integration, application state management, and building a complete e-commerce experience.",
  },
};

// ---------- AdminPanelCheque

const CHEQUE_GALLERY = [
  {
    label: "Admin dashboard",
    caption:
      "An administrative interface for accessing cheque management operations and business information.",
    src: "/images/adminpanelcheque/dashboard.png",
  },
  {
    label: "Cheque management",
    caption:
      "Data-driven administrative screens for managing cheque-related records and operations.",
    src: "/images/adminpanelcheque/management.png",
  },
  {
    label: "Reports and analytics",
    caption:
      "Financial reporting interfaces displaying daily transactions, amounts, and payment statuses.",
    src: "/images/adminpanelcheque/reports.png",
  },
];

const CHEQUE_OVERVIEW = {
  title: "Overview",
  description:
    "An enterprise administrative web application designed to manage cheque-related workflows, provide operational visibility, and simplify financial reporting through a structured interface.",
};

const CHEQUE_PROBLEM = {
  title: "The problem",
  description:
    "Managing cheque-related operations requires access to structured financial data, transaction statuses, and reporting information. Presenting this information efficiently while keeping administrative workflows easy to navigate is a key challenge.",
};

const CHEQUE_APPROACH = {
  title: "The approach",
  description:
    "Develop reusable React interfaces, organize complex administrative screens into maintainable components, and connect frontend workflows to backend REST APIs. Focus on consistent data presentation, form handling, authentication, and reporting.",
};

const CHEQUE_FEATURES = [
  "Administrative dashboard",
  "Cheque-related data management",
  "Data tables and filtering",
  "Financial and transaction reports",
  "Daily amount and status reporting",
  "Transaction status visualization",
  "User authentication",
  "Captcha verification",
  "Change password functionality",
  "REST API integration",
];

const CHEQUE_CONTRIBUTIONS = [
  "Develop the enterprise dashboard and administrative interfaces using React and TypeScript.",
  "Implement cheque management workflows and data-driven management screens.",
  "Develop financial reporting interfaces and transaction monitoring views.",
  "Build reusable components for complex tables, forms, and administrative workflows.",
  "Integrate frontend modules with backend REST APIs.",
  "Implement authentication, login, and CAPTCHA verification flows.",
  "Develop the change password functionality and user account workflows.",
  "Manage application state and user sessions using Zustand.",
  "Implement API data fetching and mutations using React Query.",
  "Handle API errors, form validation, and user feedback notifications.",
];

const CHEQUE_STACK = [
  "React",
  "TypeScript",
  "JavaScript",
  "React Router",
  "React Query",
  "Redux ToolKit",
  "Ant Design",
  "REST API",
  "Axios",
];

const CHEQUE_AI_TOOLS = [
  {
    name: "ChatGPT",
    use: "Investigate React issues, analyze API responses, debug authentication workflows, and explore component implementation approaches.",
  },
];

const CHEQUE_REFLECTIONS = {
  challenge: {
    title: "A key challenge",
    description:
      "Maintaining reliable frontend workflows while handling changing backend response structures, authentication state, form validation, and complex administrative interactions.",
  },
  learned: {
    title: "What I learned",
    description:
      "Improved my experience working with enterprise React applications, API-driven interfaces, session management, reusable components, and complex business workflows.",
  },
};

// --------- AdminPanelSafeSub

const SAFESUB_ADMIN_GALLERY = [
  {
    label: "dashboard",
    caption:
      "A centralized administrative dashboard for monitoring subscription marketplace operations.",
    src: "/images/adminpanelsafesub/dashboard.png",
  },
  {
    label: "products",
    caption:
      "An administrative interface for managing subscription products, categories, pricing, and availability.",
    src: "/images/adminpanelsafesub/products.png",
  },
  {
    label: "plans",
    caption:
      "A structured order management interface for reviewing customer purchases and order statuses.",
    src: "/images/adminpanelsafesub/plans.png",
  },
];

const SAFESUB_ADMIN_OVERVIEW = {
  title: "Overview",
  description:
    "SafeSub Admin Panel is a dedicated administrative application built to manage the operations of the SafeSub digital subscription marketplace, providing tools for product management, order tracking, and business reporting.",
};

const SAFESUB_ADMIN_PROBLEM = {
  title: "The problem",
  description:
    "Managing a subscription marketplace requires a centralized administrative system to control products, monitor orders, review operational data, and access financial reports without relying on manual processes.",
};

const SAFESUB_ADMIN_APPROACH = {
  title: "The approach",
  description:
    "Build a modular administrative interface using Next.js, React, and TypeScript. Organize management workflows into reusable components, implement structured navigation, and connect dashboard and reporting interfaces to backend APIs.",
};

const SAFESUB_ADMIN_FEATURES = [
  "Administrative dashboard",
  "Product management and CRUD operations",
  "Product categories and subscription plans",
  "Product availability and status management",
  "Order management",
  "Order status tracking",
  "Financial reporting",
  "Daily sales and payment reports",
  "Authentication and protected admin areas",
  "Persian language and RTL interface",
  "Reusable administrative components",
];

const SAFESUB_ADMIN_CONTRIBUTIONS = [
  "Lead the end-to-end frontend development of the SafeSub administration panel.",
  "Design and implement the complete administrative dashboard using Next.js and TypeScript.",
  "Develop product management workflows, including product creation, editing, and status management.",
  "Build order management interfaces for monitoring and managing customer orders.",
  "Design and implement financial reporting dashboards and data visualization components.",
  "Develop daily sales, payment, and transaction reporting interfaces.",
  "Integrate administrative modules with backend APIs.",
  "Build reusable components and establish a modular frontend architecture.",
  "Implement authentication, protected application areas, and shared application state.",
  "Develop Persian localization and RTL layouts with Jalali date support.",
  "Create a consistent dark UI aligned with the SafeSub brand.",
];

const SAFESUB_ADMIN_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Axios",
  "REST API",
  "Day.js",
  "Jalali Date Handling",
  "React Context API",
];

const SAFESUB_ADMIN_AI_TOOLS = [
  {
    name: "ChatGPT",
    use: "Discuss application architecture, troubleshoot API integration, and review React and TypeScript implementation approaches.",
  },
  {
    name: "Cursor",
    use: "AI-assisted coding, understanding existing code, implementing administrative components, and exploring refactoring solutions.",
  },
];

const SAFESUB_ADMIN_REFLECTIONS = {
  challenge: {
    title: "A key challenge",
    description:
      "Designing a maintainable administrative architecture while handling complex product and order workflows, reporting data, and consistent application-wide UI patterns.",
  },
  learned: {
    title: "What I learned",
    description:
      "Improved my skills in building modular admin dashboards, designing reusable React components, working with TypeScript, integrating reporting APIs, and organizing larger frontend applications.",
  },
};

export type CaseStudyData = {
  card: {
    label: string;
    title: string;
    description: string;
    privateLabel?: string;
    liveUrl?: string;
    githubUrl?: string;
  };

  gallery: {
    label: string;
    caption: string;
    src: string;
  }[];

  overview: {
    title: string;
    description: string;
  };

  problem: {
    title: string;
    description: string;
  };

  approach: {
    title: string;
    description: string;
  };

  features: string[];
  contributions: string[];
  stack: string[];

  aiTools: {
    name: string;
    use: string;
  }[];

  reflections: {
    challenge: {
      title: string;
      description: string;
    };

    learned: {
      title: string;
      description: string;
    };
  };
};

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  safesub: {
    card: {
      label: "Featured product",
      title: "SafeSub",
      description:
        "A modern subscription marketplace for digital services, designed with a premium SaaS-style experience.",
      liveUrl: "https://safesub.ir",
    },
    gallery: SAFESUB_GALLERY,
    overview: SAFESUB_OVERVIEW,
    problem: SAFESUB_PROBLEM,
    approach: SAFESUB_APPROACH,
    features: SAFESUB_FEATURES,
    contributions: SAFESUB_CONTRIBUTIONS,
    stack: SAFESUB_STACK,
    aiTools: SAFESUB_AI_TOOLS,
    reflections: SAFESUB_REFLECTIONS,
  },

  "cheque-management": {
    card: {
      label: "Enterprise application",
      title: "Cheque Management System",
      description:
        "An enterprise administrative web application for managing cheque-related workflows, financial reports, and operations.",
      privateLabel: "Professional Project",
    },
    gallery: CHEQUE_GALLERY,
    overview: CHEQUE_OVERVIEW,
    problem: CHEQUE_PROBLEM,
    approach: CHEQUE_APPROACH,
    features: CHEQUE_FEATURES,
    contributions: CHEQUE_CONTRIBUTIONS,
    stack: CHEQUE_STACK,
    aiTools: CHEQUE_AI_TOOLS,
    reflections: CHEQUE_REFLECTIONS,
  },

  "safesub-panel": {
    card: {
      label: "UI engineering",
      title: "SafeSub Admin Panel",
      description:
        "A complete administrative dashboard for managing products, orders, users, and financial reports with interactive charts and a Persian RTL interface.",
      privateLabel: "Professional Project",
    },
    gallery: SAFESUB_ADMIN_GALLERY,
    overview: SAFESUB_ADMIN_OVERVIEW,
    problem: SAFESUB_ADMIN_PROBLEM,
    approach: SAFESUB_ADMIN_APPROACH,
    features: SAFESUB_ADMIN_FEATURES,
    contributions: SAFESUB_ADMIN_CONTRIBUTIONS,
    stack: SAFESUB_ADMIN_STACK,
    aiTools: SAFESUB_ADMIN_AI_TOOLS,
    reflections: SAFESUB_ADMIN_REFLECTIONS,
  },
};
