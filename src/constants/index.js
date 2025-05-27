// import {
//   web,
//   frontend,
//   design,
//   backend,
//   fullStack,
//   cloud,
//   html,
//   css,
//   javascript,
//   reactjs,
//   formik,
//   redux,
//   mui,
//   tailwind,
//   scss,
//   nodejs,
//   expressjs,
//   mongodb,
//   mongoose,
//   git,
//   github,
//   EC2,
//   S3,
//   vscode,
//   ChatGPT,
//   chrome,
//   mongodbCompass,
//   postman,
//   ubuntu,
//   Impress,
//   e_commerce,
//   proConnectup,
//   portfolio,
// } from "../assets";

import shopImage from "../assets/social-media-concept.webp";
import English from "../assets/ppc.jpg";
import ProConn from "../assets/OIP.jpg";


const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "SEO Specialist",
    icon: require("../assets/seo.png"),
  },
  {
    title: "Social Media Marketer",
    icon: require("../assets/smm.png"),
  },
  {
    title: "Google Ads Expert",
    icon: require("../assets/gae.png"),
  },
  {
    title: "Digital Marketing Strategist",
    icon: require("../assets/dme.png"),
  },
  
];


const technologies = [
  {
    name: "HTML 5",
    icon: require("../assets/tech/html.png"),
  },
  {
    name: "CSS 3",
    icon: require("../assets/tech/css.png"),
  },

  {
    name: "google Ads",
    icon: require("../assets/gae.png"),
  },

  {
    name: "Social media",
    icon: require("../assets/smm.png"),
  },

  {
    name: "SEO",
    icon: require("../assets/seo.png"),
  },

  {
    name: "Digital Marketing",
    icon: require("../assets/dme.png"),
  },

  {
    name: "Email Marketing",
    icon: require("../assets/emicon.png"),
  },

  {
    name: "Meta Ads",
    icon: require("../assets/meta.png"),
  },

  




  // {
  //   name: "JavaScript",
  //   icon: require("../assets/tech/javascript.png"),
  // },
  // {
  //   name: "Bootstrap",
  //   icon: require("../assets/tech/bootstrap.png"),
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: require("../assets/tech/tailwind.png"),
  // },
  // {
  //   name: "React JS",
  //   icon: require("../assets/tech/reactjs.png"),
  // },
  // {
  //   name: "Redux",
  //   icon: require("../assets/tech/redux.png"),
  // },
  
  // {
  //   name: "Matirial UI",
  //   icon: require("../assets/tech/material-ui.png"),
  // },

  // {
  //   name: "Scss",
  //   icon: require("../assets/tech/scss.png"),
  // },
  // {
  //   name: "Node JS",
  //   icon: require("../assets/tech/nodejs.png"),
  // },
  // {
  //   name: "Express JS",
  //   icon: require("../assets/tech/expressjs.png"),
  // },
  // {
  //   name: "MongoDB",
  //   icon: require("../assets/tech/mongodb.png"),
  // },
  // {
  //   name: "Mongoose",
  //   icon: require("../assets/tech/mongoose.png"),
  // },
  // {
  //   name: "Git",
  //   icon: require("../assets/tech/git.png"),
  // },
  // {
  //   name: "GitHup",
  //   icon: require("../assets/github.png"),
  // },
  
];

const tools = [
  {
    name: "VS Code",
    icon: require("../assets/tools/vscode.png"),
  },
  {
    name: "ChatGPT",
    icon: require("../assets/tools/ChatGPT.png"),
  },
  {
    name: "Chrome",
    icon: require("../assets/tools/chrome.png"),
  },
  
  {
    name: "Meta Manager",
    icon: require("../assets/meta.png"),
  },

  {
    name: "Mailchimp",
    icon: require("../assets/MC_Logo.jpg"),
  },

  {
    name: "Brevo",
    icon: require("../assets/brevo1.png"),
  },

  {
    name: "Google Analytics",
    icon: require("../assets/ga.png"),
  },

  {
    name: "Canva",
    icon: require("../assets/c.png"),
  },

  {
    name: "Google Search Control",
    icon: require("../assets/Google-Search-Console.jpg"),
  },

  {
    name: "Semrush",
    icon: require("../assets/semrush-lockup-vertical-rgb.png"),
  },

  {
    name: "Ahrefs",
    icon: require("../assets/ahrefs-logo.jpg"),
  },
  // {
  //   name: "Postman",
  //   icon: require("../assets/tools/postman.png"),
  // },
  // {
  //   name: "Ubuntu",
  //   icon: require("../assets/tools/ubuntu.png"),
  // },
];

const experiences = [
  {
    title: "Digital Marketing Specialist",
    company_name: "SEO, SEM, Social Media",
    icon: require("../assets/dme.png"),
    iconBg: "#2C3E50",
    date: "2025 - Present",
    points: [
      "Planning and executing comprehensive digital marketing strategies across SEO, PPC, and social media channels.",
      "Managing and optimizing Google Ads and Facebook Ads campaigns to drive traffic and conversions.",
      "Conducting keyword research and on-page/off-page SEO to improve search engine rankings.",
      "Creating engaging content for blogs, social platforms, and email marketing campaigns.",
      "Analyzing marketing performance using tools like Google Analytics and Search Console.",
      "Collaborating with design and development teams to align branding and campaign goals.",
    ],
  },
  
  {
    title: "Digital Marketing Specialist",
    company_name: "SEO | SEM | Social Media | Google Analytics",
    icon: require("../assets/seo.png"),
    iconBg: "white",
    date: "December 2024",
    points: [
      "Planning and executing end-to-end digital marketing campaigns across SEO, SEM, and social media platforms.",
      "Optimizing website content and metadata to improve organic visibility and keyword rankings.",
      "Running paid ad campaigns on Google Ads and Meta Ads to generate leads and conversions.",
      "Analyzing marketing performance with Google Analytics, Search Console, and social media insights.",
      "Developing engaging content strategies tailored for platforms like Instagram, LinkedIn, and YouTube.",
      "Collaborating with design and development teams to ensure brand consistency and marketing goals.",
    ],
  },
  

  {
    title: "Digital Marketing Specialist",
    company_name: "Celestezoi Private Limited",
    icon: require("../assets/smm.png"), // Replace with the correct path/icon
    iconBg: "#FF914D",
    date: "July 2024",
    points: [
      "Planning and executing digital marketing campaigns across platforms such as Google Ads, Facebook, and Instagram.",
      "Optimizing SEO strategies to improve website visibility and organic search rankings.",
      "Creating compelling content for blogs, social media, and email marketing to drive user engagement.",
      "Analyzing web traffic and user behavior using tools like Google Analytics and Search Console.",
      "Managing and growing social media presence through creative campaigns and audience targeting.",
      "Implementing A/B testing to optimize ad performance and landing page conversion rates.",
      "Running influencer and affiliate marketing campaigns to boost brand awareness and sales.",
      "Conducting market research and competitor analysis to identify growth opportunities.",
      "Generating performance reports and providing strategic insights to stakeholders.",
      "Collaborating with design and development teams to ensure branding consistency and optimized UX.",
    ],
  },
  
  {
    title: "Digital Marketing Executive",
    company_name: "Aditya Music India Privated Limited",
    icon: require("../assets/meta.png"),
    iconBg: "#1E2A38",
    date: "March 2023",
    points: [
      "Crafted and executed integrated digital campaigns to drive online presence, user engagement, and customer acquisition.",
      "Optimized website content, meta tags, and technical elements to improve SEO performance and search visibility.",
      "Analyzed campaign metrics to refine targeting strategies and enhance ad performance across Google Ads and Meta platforms.",
      "Produced compelling content for blogs, newsletters, and social channels aligned with brand messaging and target audience.",
      "Managed CRM workflows and segmentation to increase email marketing conversions and reduce churn.",
      "Collaborated with creative teams to develop high-performing visuals and ad creatives tailored to digital platforms.",
      "Monitored and responded to trends, audience feedback, and analytics to maintain a data-driven marketing approach.",
      "Executed influencer collaborations and social promotions to expand brand reach and engagement.",
      "Maintained a consistent brand voice across all digital touchpoints while aligning campaigns with business goals.",
    ],
  },
  

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rajesh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Rajesh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rajesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Socila Media Marketing",
    description:
      "A digital marketing platform focused on enhancing brand presence through social media channels. Enables campaign creation, audience targeting, and performance tracking. Admins can manage posts, ads, engagement analytics, and audience insights—providing businesses with an effective solution for growing and engaging their audience online.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Retux",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: shopImage, // ✅ Fixed image path
    alt: "E-Commerce",
    source_code_link: "https://github.com/Raja0136/MEAN-STACK",
    // live_link: "http://3.82.129.40:8000/",
  },
  {
    name: "PPC",
    description:
      "A PPC campaign management platform that allows businesses to target the right audience through paid search ads. Users can manage ad campaigns, track conversions, optimize bids, and analyze performance across platforms like Google Ads and Bing Ads, ensuring maximum ROI for paid advertising efforts.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: English,
    alt: "Pro Connect Up",
    
    source_code_link: "https://github.com/Raja0136/Bootstrap-Project",
    // live_link: "https://github.com/Rajeshesh/ProConnectUp",
  },
  {
    name: "SEO & Meta Ads",
    description:
      "My portfolio features a collection of My portfolio features a collection of campaigns that reflect my dedication to delivering high-performance SEO strategies and impactful Meta (Facebook & Instagram) Ads. I take pride in optimizing digital presence, driving targeted traffic, and achieving measurable results through data-driven marketing. that reflect my commitment to delivering top-tier web solutions. ",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: ProConn,
    alt: "Portfolio",
    source_code_link: "https://github.com/Raja0136/Bootstrap-Project",
    // live_link: "https://mern-rajesh-portfolio.web.app/",
  },
  // {
  //   name: "PG Management",
  //   description:
  //     "A comprehensive PG Management platform that allows Admin to manage people who are staying in their PG and provide them with the best possible service.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: 'https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/portfolio.png',
  //   source_code_link: "https://github.com/Rajeshesh",
  //   live_link: "http://3.82.129.40:8000/",
  // },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
