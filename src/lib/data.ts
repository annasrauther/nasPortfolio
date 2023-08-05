import {
  Technology,
  TechStack,
  PortfolioWorkItem,
} from '@/lib/interfaces'


import * as Icons from '@/lib/icons'
export const navigation = [
  { name: 'home', href: '/', label: 'Welcome' },
  { name: 'about', href: '/about', label: 'Who I am' },
  { name: 'skills', href: '/skills', label: 'What I do' },
  { name: 'experience', href: '/experience', label: 'Where I work' },
  { name: 'projects', href: '/projects', label: 'See my work' },
  { name: 'contact', href: '/contact', label: 'Get in Touch' },
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
    "type": "Backend / FullStack",
    "description": "React framework for server-rendered apps."
  },
  {
    "title": "ExpressJS",
    "icon": Icons.SiExpress,
    "color": "#000000",
    "type": "Backend / FullStack",
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
    "title": "Vercel",
    "icon": Icons.SiVercel,
    "color": "black",
    "type": "Hosting",
    "description": "Vercel Cloud Services."
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
    "color": "#ef5b25",
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
