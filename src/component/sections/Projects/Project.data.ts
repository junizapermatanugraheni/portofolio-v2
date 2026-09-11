import { Project } from "./Project.type";

export const ProjectData: Project[] = [
  {
    id: 1,
    year: "2025",
    label: "E-Commerce · AI Shopping Assistant",
    title: "Mini Store",
    description:
      "Modern e-commerce platform with an AI Shopping Assistant. Users describe what they need in plain language and the assistant queries the DummyJSON catalog to suggest the best matches, complete with wishlist, cart, and side-by-side product comparison.",
    role: "Frontend Developer",
    keyFeatures: [
      "AI Shopping Assistant: Natural-language product suggestions via DummyJSON API",
      "Live Catalog: 30+ products with category filtering, search, and price sorting",
      "Comparison Drawer: Compare up to 4 products side by side",
      "Wishlist & Cart: Client-side state with item management",
      "Responsive UI: Built with Next.js App Router and Tailwind CSS",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DummyJSON API",
      "Vercel",
    ],
    github: "https://github.com/junizapermatanugraheni/mini-store",
    link: "https://mini-store-ashy.vercel.app/",
    image: "/images/projects/mini-store.png",
    featured: true,
    previewType: "insightfull",
  },
];