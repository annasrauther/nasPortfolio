import {
  Technology,
  TechStack,
  ExperienceItem,
  PortfolioWorkItem,
} from '@/lib/interfaces'

import * as Icons from '@/lib/icons'
export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
];

export const personalActions = [
  'Playing Chess',
  'Having Fun',
  'Listening to 70s Music',
  'Reading Articles',
  'Learning New Things',
  'Probably at Gym',
  'Most likely Sleeping',
  'Exploring Nature',
  'Attending Events',
  'An Bad Cook',
  'Solving Puzzles',
  'Watching Movies',
  'Walking on the Park',
  'Meditating',
  'Designing Websites',
  'Organizing his Desk',
  'Coding a Side Project',
  'Reading Tech Blogs',
  'Playing with Pets',
];

export const aboutBioImages = [
  '/about/bio-1.png',
  '/about/bio-2.png',
  '/about/bio-3.png',
  '/about/bio-4.png',
  '/about/bio-5.png',
  '/about/bio-6.png',
  '/about/bio-7.png',
  '/about/bio-8.png',
];

export const heroStacks = [
  {
    label: 'React',
  }
]

export const technologies: Technology[] = [
  {
    "title": "React",
    "icon": Icons.FaReact,
    "color": "#61DAFB",
    "type": "Front End",
    "description": "JavaScript library for UI."
  },
  {
    "title": "HTML",
    "icon": Icons.FaHtml5,
    "color": "#E44D26",
    "type": "Front End",
    "description": "Web markup language for pages."
  },
  {
    "title": "CSS",
    "icon": Icons.FaCss3,
    "color": "#2965F1",
    "type": "Front End",
    "description": "Stylesheet language for web design."
  },
  {
    "title": "JavaScript",
    "icon": Icons.FaJs,
    "color": "#F7DF1E",
    "type": "Front End",
    "description": "Programming language for web pages."
  },
  {
    "title": "Tailwind",
    "icon": Icons.BiLogoTailwindCss,
    "color": "#38B2AC",
    "type": "Front End",
    "description": "Utility-first CSS framework."
  },
  {
    "title": "Bootstrap",
    "icon": Icons.FaBootstrap,
    "color": "#7952B3",
    "type": "Front End",
    "description": "Popular responsive CSS framework."
  },
  {
    "title": "SASS",
    "icon": Icons.FaSass,
    "color": "#CC6699",
    "type": "Front End",
    "description": "CSS preprocessor with nesting."
  },
  {
    "title": "LESS",
    "icon": Icons.FaLess,
    "color": "#1D365D",
    "type": "Front End",
    "description": "Leaner CSS preprocessor."
  },
  {
    "title": "Stylus",
    "icon": Icons.SiStylus,
    "color": "#333333",
    "type": "Front End",
    "description": "Expressive CSS preprocessor."
  },
  {
    "title": "jQuery",
    "icon": Icons.BiLogoJquery,
    "color": "#0769AD",
    "type": "Front End",
    "description": "Feature-rich JavaScript library."
  },
  {
    "title": "AngularJS (1x)",
    "icon": Icons.RiAngularjsFill,
    "color": "#DD1B16",
    "type": "Front End",
    "description": "Powerful JavaScript framework."
  },
  {
    "title": "Angular Material",
    "icon": Icons.DiMaterializecss,
    "color": "#DD1B16",
    "type": "Front End",
    "description": "UI component library for Angular."
  },
  {
    "title": "Material UI",
    "icon": Icons.SiMaterialdesign,
    "color": "#0081CB",
    "type": "Front End",
    "description": "React component library."
  },
  {
    "title": "VueJS",
    "icon": Icons.FaVuejs,
    "color": "#4FC08D",
    "type": "Front End",
    "description": "Progressive JavaScript framework."
  },
  {
    "title": "Vuetify",
    "icon": Icons.SiVuetify,
    "color": "#1867C0",
    "type": "Front End",
    "description": "Material Design component framework for Vue."
  },
  
  {
    "title": "Redux",
    "icon": Icons.SiRedux,
    "color": "#764ABC",
    "type": "Front End",
    "description": "State management for JS apps."
  },
  {
    "title": "Lodash",
    "icon": Icons.SiLodash,
    "color": "#0769AD",
    "type": "Front End",
    "description": "JavaScript utility library."
  },
  {
    "title": "Moment",
    "icon": Icons.SiMomenteo,
    "color": "#000",
    "type": "Front End",
    "description": "JavaScript date library."
  },
  {
    "title": "Axios",
    "icon": Icons.SiAxios,
    "color": "#000",
    "type": "Front End",
    "description": "Promise-based HTTP client."
  },
  {
    "title": "WordPress",
    "icon": Icons.FaWordpress,
    "color": "#21759B",
    "type": "CMS",
    "description": "Popular content management system."
  },
  {
    "title": "WooCommerce",
    "icon": Icons.SiWoocommerce,
    "color": "#764ABC",
    "type": "CMS",
    "description": "E-commerce plugin for WordPress."
  },
  {
    "title": "Elementor",
    "icon": Icons.FaElementor,
    "color": "#29B6F6",
    "type": "CMS",
    "description": "WordPress website builder plugin."
  },
  {
    "title": "LightSpeed E-Commerce",
    "icon": Icons.GiLightningHelix,
    "color": "#f84c52",
    "type": "CMS",
    "description": "E-commerce platform."
  },
  {
    "title": "Dukaan",
    "icon": Icons.AiFillShop,
    "color": "#000",
    "type": "CMS",
    "description": "Online store builder."
  },
  {
    "title": "NextJS",
    "icon": Icons.TbBrandNextjs,
    "color": "#000000",
    "type": "Backend/FullStack",
    "description": "React framework for server-rendered apps."
  },
  {
    "title": "ExpressJS",
    "icon": Icons.SiExpress,
    "color": "#000000",
    "type": "Backend/FullStack",
    "description": "Web application framework for Node.js."
  },
  {
    "title": "Riak KV",
    "icon": Icons.BsDatabase,
    "color": "#7A8F99",
    "type": "Database, Search",
    "description": "Distributed NoSQL database."
  },
  {
    "title": "mySQL",
    "icon": Icons.SiMysql,
    "color": "#4479A1",
    "type": "Database, Search",
    "description": "Relational database management system."
  },
  {
    "title": "PostgresQL",
    "icon": Icons.BiLogoPostgresql,
    "color": "#336791",
    "type": "Database, Search",
    "description": "Open-source relational database."
  },
  {
    "title": "Apache Solr",
    "icon": Icons.SiApachesolr,
    "color": "#D9411E",
    "type": "Database, Search",
    "description": "Search platform built on Apache Lucene."
  },
  {
    "title": "Sequelize",
    "icon": Icons.SiSequelize,
    "color": "#1B3F56",
    "type": "Database, Search",
    "description": "Promise-based ORM for Node.js."
  },
  {
    "title": "Redis",
    "icon": Icons.SiRedis,
    "color": "#D82C20",
    "type": "Database, Search",
    "description": "In-memory data structure store."
  },
  {
    "title": "Rackspace",
    "icon": Icons.DiRackspace,
    "color": "#002E5D",
    "type": "Hosting",
    "description": "Cloud computing services."
  },
  {
    "title": "GCP",
    "icon": Icons.SiGooglecloud,
    "color": "#4285F4",
    "type": "Hosting",
    "description": "Google Cloud Platform."
  },
  {
    "title": "Jenkins",
    "icon": Icons.DiJenkins,
    "color": "#D33837",
    "type": "CI/CD",
    "description": "Open-source automation server."
  },
  {
    "title": "Docker",
    "icon": Icons.FaDocker,
    "color": "#2496ED",
    "type": "CI/CD",
    "description": "Containerization platform."
  },
  {
    "title": "Vagrant",
    "icon": Icons.SiVagrant,
    "color": "#1563FF",
    "type": "CI/CD",
    "description": "Development environment automation."
  },
  {
    "title": "Git",
    "icon": Icons.BsGit,
    "color": "#f34f29",
    "type": "Version Control",
    "description": "Version control system."
  },
  {
    "title": "Github",
    "icon": Icons.BsGithub,
    "color": "#4078c0",
    "type": "Version Control",
    "description": "Web-based hosting service for Git."
  },
  {
    "title": "Gitlab",
    "icon": Icons.FaGitlab,
    "color": "#fca326",
    "type": "Version Control",
    "description": "Git repository management tool."
  },
  {
    "title": "Bitbucket",
    "icon": Icons.DiBitbucket,
    "color": "#253858",
    "type": "Version Control",
    "description": "Git code management solution."
  },
  {
    "title": "SalesForce",
    "icon": Icons.FaSalesforce,
    "color": "#0093db",
    "type": "CRM",
    "description": "Customer relationship management platform."
  },
  {
    "title": "HubSpot",
    "icon": Icons.FaHubspot,
    "color": "#f47859",
    "type": "CRM",
    "description": "Marketing and sales platform."
  },
  {
    "title": "OutReach",
    "icon": Icons.AiOutlineAreaChart,
    "color": "#5952ff",
    "type": "CRM",
    "description": "Sales engagement platform."
  },
  {
    "title": "Slack",
    "icon": Icons.FaSlack,
    "color": "#36c5f0",
    "type": "Tools",
    "description": "Team communication platform."
  },
  {
    "title": "Skype",
    "icon": Icons.FaSkype,
    "color": "#00AFF0",
    "type": "Tools",
    "description": "Video and voice call application."
  },
  {
    "title": "Microsoft Teams",
    "icon": Icons.BiLogoMicrosoftTeams,
    "color": "#6264A7",
    "type": "Tools",
    "description": "Collaboration platform."
  },
  {
    "title": "VS Code",
    "icon": Icons.TbBrandVscode,
    "color": "#007ACC",
    "type": "Tools",
    "description": "Code editor developed by Microsoft."
  },
  {
    "title": "Sublime Text",
    "icon": Icons.SiSublimetext,
    "color": "#4c4c4c",
    "type": "Tools",
    "description": "Text editor for code, markup, and prose."
  },
  {
    "title": "JIRA",
    "icon": Icons.SiJira,
    "color": "#0052CC",
    "type": "Tools",
    "description": "Issue tracking and project management."
  },
  {
    "title": "Confluence",
    "icon": Icons.FaConfluence,
    "color": "#999999",
    "type": "Tools",
    "description": "Team collaboration software."
  },
  {
    "title": "Brave",
    "icon": Icons.SiBrave,
    "color": "#6a0b1a",
    "type": "Tools",
    "description": "Privacy-focused web browser."
  },
  {
    "title": "Chrome",
    "icon": Icons.FaChrome,
    "color": "#1a73e8",
    "type": "Tools",
    "description": "Web browser developed by Google."
  },
  {
    "title": "Firefox",
    "icon": Icons.FaFirefox,
    "color": "#E66000",
    "type": "Tools",
    "description": "Open-source web browser."
  },
  {
    "title": "Safari",
    "icon": Icons.FaSafari,
    "color": "#006CFF",
    "type": "Tools",
    "description": "Web browser developed by Apple."
  },
  {
    "title": "Figma",
    "icon": Icons.FaFigma,
    "color": "#b4c4f4",
    "type": "Tools",
    "description": "Collaborative interface design tool."
  },
  {
    "title": "Avocode",
    "icon": Icons.CiAvocado,
    "color": "#568203",
    "type": "Tools",
    "description": "Design collaboration platform."
  },
  {
    "title": "Postman",
    "icon": Icons.SiPostman,
    "color": "#ef5b25",
    "type": "Tools",
    "description": "API development environment."
  },
  {
    "title": "FileZilla",
    "icon": Icons.SiFilezilla,
    "color": "#BF0000",
    "type": "Tools",
    "description": "FTP client for file transfers."
  }
];

export const techStack: TechStack[] = [
  {
    name: 'Nextjs',
    icon: Icons.TbBrandNextjs,
    color: '#000000',
  },
  {
    name: 'React',
    icon: Icons.FaReact,
    color: '#61DBFB',
  },
  {
    name: 'Typescript',
    icon: Icons.SiTypescript,
    color: '#007ACC',
  },
  {
    name: 'NodeJS',
    icon: Icons.SiNodedotjs,
    color: '#339933',
  },
  {
    name: 'ExpressJs',
    icon: Icons.SiExpress,
    color: '#000000',
  },
  {
    name: 'TailwindCSS',
    icon: Icons.SiTailwindcss,
    color: '#38B2AC',
  },
  {
    name: 'VueJS',
    icon: Icons.SiVuedotjs,
    color: '#4FC08D',
  },
  {
    name: 'AngularJS',
    icon: Icons.SiAngularjs,
    color: '#DD0031',
  },
  {
    name: 'WordPress',
    icon: Icons.FaWordpressSimple,
    color: '#DD0031',
  },
];

export const aboutContent = [
  '',
  '',
  '',
];

export const workExperience: ExperienceItem[] = [
  {
    title: 'FullStack Developer (JavaScript)',
    company: {
      name: 'Nexsales Corporation',
      logo: '/experience/nexsales.jpeg',
      url: 'https://www.nexsales.com/',
    },
    duration: 'Apr 2017 - Jan 2023',
    description: [
      'Proficient in seamless integration, UI component development, and API implementation for dynamic web applications.Strong focus on performance optimization and user experience.',
      'By adopting best practices and maintaining clean code, I ensure the scalability and maintainability of projects while promoting a smooth development process.',
      'Integration of data storage solutions.My expertise allows me to efficiently connect various data storage systems and databases, ensuring data is managed effectively and accessed when needed.',
      'Work on Proof of Concepts(POCs) and seamlessly integrating them into the product.Through this process, I explore and validate innovative solutions before implementing them into the final product, ensuring its continuous improvement and better user experience.',
      'I leverage my real- world usage experience to influence and shape product features and APIs.By gaining insights from practical usage scenarios, I contribute valuable feedback to optimize and enhance the product\'s functionality, ensuring it aligns with users\' needs and delivers an exceptional user experience.',
      'Proficient in Git for managing topic branches and Pull Requests, enabling seamless collaboration and efficient code integration.',
      'Accurately estimate engineering work effort, effectively identifying and prioritizing high - impact tasks for the engineering team.',
      'Collaborate with teams to drive projects from concept to completion, leveraging agile SDLC methodology for efficient and successful project execution.',
      'Specialize in building new products and converting legacy systems in PHP to API - driven microservices running on Node.js.By adopting microservices architecture, I deliver scalable and modular solutions for improved performance and flexibility.',
      'Conduct thorough code reviews and offer constructive feedback on best practices and performance enhancements.By ensuring adherence to coding standards and recommending optimizations, I contribute to the development of high - quality and efficient software solutions.',
      'Identify, evaluate, and suggest relevant key technologies to support and enhance business processes, aligning with organizational objectives and improving overall efficiency.',
      'Proficiently troubleshoot and provide production support, promptly resolving issues and ensuring continuous operations for seamless functionality.'
    ],
  },
  {
    title: 'Developer - Wordpress & Lightspeed E-Commerce',
    company: {
      name: 'Philippe Oorts (MarketingPartner.be)',
      logo: '/experience/philippeoorts.png',
      url: 'https://www.marketingpartner.be/',
    },
    location: 'Remote',
    duration: 'June 2019 - Oct 2019 (Contract - 10 hours per week) ',
    description: [
      'Modify and adapt existing WordPress themes to match client\'s unique branding and design requirements.',
      'Tailor Lightspeed Ecommerce themes to create visually appealing and user-friendly online stores for clients.',
      'Integrate and set up customized themes on client\'s websites or online stores, ensuring a smooth and efficient transition.',
      'Optimize themes for speed and performance to ensure quick loading times and enhanced user engagement',
      'Manage multiple projects on a service basis, ensuring timely delivery and meeting project deadlines.',
    ],
  },
  {
    title: 'Theme Developer - LightSpeed E-Commerce ',
    company: {
      name: 'Disrupt Make Work Smile',
      logo: '/experience/dmws.svg',
      url: 'https://www.dmws.nl/',
    },
    location: 'Remote',
    duration: 'May 2018 - Dec 2018 (Contract - 10 hours per week) ',
    description: [
      'Develop Lightspeed E-Commerce\'s game - changers: "Theme Performance" for lightning - fast load times and "Theme Conversion" to boost customer conversions.',
      'Crafting custom themes that reflect the unique brand identity and business requirements of clients, ensuring a seamless and visually captivating shopping experience for their customers.',
      'Performing rigorous testing and self-quality assurance to maintain the highest standards of excellence, delivering error-free and reliable results.',
      'Maintaining open and effective communication with clients throughout the development process, actively seeking feedback to align implementations with their expectations and vision.',
    ],
  },
  {
    title: 'Developer - LightSpeed E-Commerce (Themes)',
    company: {
      name: 'Advision E-Commerce Solutions',
      logo: '/experience/advision.jpeg',
      url: 'https://advision-ecommerce.com/',
    },
    location: 'Remote',
    duration: 'Mar 2017 - Aug 2019 (Contract - 10 hours per week) ',
    description: [
      'Offer specialized theme customization and development services tailored for the Lightspeed Ecommerce platform.',
      'Create custom themes that align with your brand and business needs, providing a seamless and visually appealing shopping experience for your customers.',
      'Conduct thorough testing and review(Self QA) of my work to ensure its quality and accuracy.This meticulous process allows me to deliver reliable and error- free results, meeting the highest standards of excellence.',
      'I maintain open communication with clients to ensure that the implementations align with their expectations.By actively engaging with them and seeking feedback throughout the development process, I guarantee that the end product fulfills their requirements and vision, leading to satisfied and contented clients.',
    ],
  },
  {
    title: 'Front End Lead & ReactJs Developer',
    company: {
      name: 'Wisdmlabs',
      logo: '/experience/wisdmlabs.svg',
      url: 'https://wisdmlabs.com/',
    },
    duration: 'Feb 2016 - March 2017',
    description: [
      'Work closely with clients to analyze their requirements and assist in translating these possibilities to the sales team.',
      'As part of my role, I am responsible for providing project estimations and effort assessments to support the sales team in their client engagements.',
      'In collaboration with the Project Architect, I engage in detailed discussions and analysis to define various aspects crucial to the project&apos;s success. We delve into functionality requirements, map out user flows, establish UI architecture, design smooth navigation, and plan interactions to create an intuitive and seamless user experience.',
      'Throughout my experience, I have collaborated closely with various teams, including the Design Team, Front End Developers (my team), Quality Assurance, and Project Managers, to ensure the timely delivery of projects. By fostering effective communication and a collaborative work environment, we successfully meet project deadlines and deliver high-quality results.',
      'Mentoring and training novice developers, helping them grow their skills and confidence in front-end development. I conduct regular code reviews to provide constructive feedback and ensure adherence to best practices. Additionally, I lead weekly front-end developer meetings, fostering knowledge sharing and team collaboration to enhance our collective expertise and productivity.',
      'Conduct technical interviews for candidates during the selection process. I assess their skills, problem-solving abilities, and technical knowledge to determine their suitability for the position. Through a comprehensive evaluation, I aim to identify candidates who align with our team&apos;s requirements and possess the potential to excel in the role.',
      'In my capacity as a front-end developer, I have conducted 4-5 comprehensive training sessions. These sessions were designed to educate fellow developers on specific technologies relevant to front-end development. By sharing my expertise and insights, I aimed to enhance their understanding and proficiency in these technologies, fostering a more skilled and cohesive development team.'
    ],
  },
  {
    title: 'Front End Developer',
    company: {
      name: 'Wisdmlabs',
      logo: '/experience/wisdmlabs.svg',
      url: 'https://wisdmlabs.com/',
    },
    duration: 'Aug 2015 - Feb 2016',
    description: [
      'In my role, I specialize in creating WordPress Themes tailored to the unique needs of clients. I take pride in developing cross-browser compatible and highly responsive user interfaces that ensure a seamless experience for all users across different devices and platforms. My expertise in WordPress customization allows me to deliver visually appealing and functional themes that meet and exceed client expectations.',
      'I have a proven track record of successfully working both collaboratively with teams and independently on numerous projects in fast-paced environments with tight deadlines. My ability to adapt and remain focused enables me to deliver high-quality results efficiently, ensuring that all project requirements are met on time and with precision.',
      'Skilled in crafting custom email templates (newsletters) for the Marketing Team, ensuring impactful and engaging communication.',
      'I provided valuable assistance to back-end developers by handling front-end related tasks in their projects. This collaboration ensured a seamless integration of front-end and back-end components, resulting in cohesive and successful projects.',
      'I possess the expertise to create visually captivating transitions and effects using JavaScript/jQuery and CSS animations. By leveraging these tools, I enhance the user experience, adding a touch of creativity and interactivity to the user interface, resulting in engaging and visually appealing designs.',
      'I actively provide valuable assistance to back-end developers in troubleshooting and coding tasks. My collaborative approach and technical expertise allow me to identify and resolve issues efficiently, contributing to the smooth functioning of projects and ensuring the successful implementation of back-end functionalities.',
    ],
  },

];

export const workPortfolio: PortfolioWorkItem[] = [
  {
    title: 'Avatarixt',
    id: 'avatarixt',
    client: 'Personal',
    screenshot: '/portfolio/rl-preview.webp',
    logo: '/portfolio/rl-preview.webp',
    url: 'https://avatarixt.vercel.app/',
    description: [
      'Avatarixt is a web application that allows users to create their own avatars.',
      'A Better UI for Bigheads.io Editor.',
    ],
    technologies: [
      {
        name: 'React',
        icon: Icons.SiReact,
      },
      {
        name: 'NextJS',
        icon: Icons.SiNextdotjs,
      },
      {
        name: 'TypeScript',
        icon: Icons.SiTypescript,
      },
    ]
  },
  {
    title: 'Goldmine',
    id: 'goldmine',
    client: 'Nexsales',
    screenshot: '/portfolio/rl-preview.webp',
    logo: '/portfolio/rl-preview.webp',
    url: 'https://beta.da.rightleads.io/',
    description: [
      'Goldmine is a CRM platform that helps operations teams to manage their leads and accounts.',
      'Internal Project for Nexsales.',
      'Worked on the complete frontend of the application.',
      'Developed API endpoints for the frontend.',
    ],
    technologies: [
      {
        name: 'VueJS',
        icon: Icons.SiVuedotjs,
      },
      {
        name: 'Vuetify',
        icon: Icons.SiVuetify,
      },
      {
        name: 'ExpressJS',
        icon: Icons.SiExpress,
      },
      {
        name: 'Auth0',
        icon: Icons.SiAuth0,
      },
      {
        name: 'PostgreSQL',
        icon: Icons.SiPostgresql,
      },
      {
        name: 'Seqeulize',
        icon: Icons.SiSequelize,
      },
      {
        name: 'Google Cloud Platform',
        icon: Icons.SiGooglecloud,
      },
    ]
  },
  {
    title: 'RightLeads',
    id: 'rightleads',
    client: 'Nexsales',
    screenshot: '/portfolio/rl-preview.webp',
    logo: '/portfolio/rl-preview.webp',
    url: 'https://my.rightleads.io/',
    description: [
      'Rightleads is a CRM platform for Nexsales Proprietory database',
      'We had several instances of Rightleads which served External Clients, Internal Operations Team and also served as Demo Platforms to Showcase Quality of Leads in Nexsales Properioty Database',
      'Worked on the complete frontend of the application.',
      'Developed API endpoints for the frontend.',
    ],
    technologies: [
      {
        name: 'AngularJS',
        icon: Icons.SiAngularjs,
      },
      {
        name: 'Stylus',
        icon: Icons.SiStylus,
      },
      {
        name: 'Materialize UI',
        icon: Icons.SiMaterialdesign,
      },
      {
        name: 'ExpressJS',
        icon: Icons.SiExpress,
      },
      {
        name: 'Auth0',
        icon: Icons.SiAuth0,
      },
      {
        name: 'Riak KV',
        icon: Icons.BsDatabase,
      },
      {
        name: 'Redis',
        icon: Icons.SiRedis,
      },
      {
        name: 'Apache Solr',
        icon: Icons.SiApachesolr,
      },
      {
        name: 'Beanstalk',
        icon: Icons.GiBeanstalk,
      },
      {
        name: 'Google Cloud Platform',
        icon: Icons.SiGooglecloud,
      },
      {
        name: 'Jenkins',
        icon: Icons.SiJenkins,
      },
    ]
  },
]

export const workTechnologiesList: string[] = [
  'React',
  'NextJS',
  'WordPress',
  'AngularJS',
  'VueJS',
  'Lightspeed'
];
