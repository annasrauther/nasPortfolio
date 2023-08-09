import * as Icons from '@/lib/icons'

/**
 * Interface representing a navigation item.
 * @interface
 * @property {string} name - The name of the navigation item.
 * @property {string} href - The href of the navigation item.
 * @property {string} label - The label of the navigation item.
 */
export interface NavigationItem {
  name: string;
  href: string;
  label: string;
}

/**
 * List of navigation items.
 * 
 * @interface {NavigationItem[]}
 * @example
 * { name: 'home', href: '/', label: 'Welcome' }
 */
export const navigation = [
  { name: 'home', href: '/', label: 'Welcome' },
  { name: 'about', href: '/about', label: 'Who I am' },
  { name: 'skills', href: '/skills', label: 'What I do' },
  { name: 'experience', href: '/experience', label: 'Where I work' },
  { name: 'projects', href: '/projects', label: 'See my work' },
  { name: 'contact', href: '/contact', label: 'Get in Touch' },
];

/**
 * List of personal actions.
 * 
 * @interface {string[]}
 */
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

/**
 * Interface representing a TechStack item.
 * @interface
 * @property {string} name - The name of the tech stack.
 * @property {IconType} icon - The icon of the tech stack.
 * @property {string} color - The color of the tech stack.
 * @example
 * {
 *  name: 'Nextjs',
 *  icon: TbBrandNextjs,
 *  color: '#000000',
 * }
 * 
 */
export interface TechStack {
  name: string;
  icon: any;
  color: string;
}

/**
 * List of tech stacks.
 * 
 * @interface {TechStack[]}
 */
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

/**
 * List of work technologies.
 * 
 * @interface {string[]}
 */
export const workTechnologiesList: string[] = [
  'NextJS',
  'WordPress',
  'AngularJS',
  'VueJS',
  'Lightspeed'
];
