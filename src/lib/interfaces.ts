import { IconType } from 'react-icons';

/**
 * Interface representing a Technology item.
 */
export interface Technology {
  title: string;
  icon: React.ElementType;
  color: string;
  type: string;
  description: string;
}

/**
 * Interface representing a TechStack item.
 */
export interface TechStack {
  name: string;
  icon: any;
  color: string;
}

/**
 * Interface representing an ExperienceItem.
 */
export interface ExperienceItem {
  title: string;
  company: {
    name: string;
    logo: string;
    url: string;
  };
  location?: string;
  duration: string;
  description: string[];
}

/**
 * Interface representing a PortfolioItemTechnology.
 */
export interface PortfolioItemTechnology {
  name: string;
  icon: IconType;
}

/**
 * Interface representing a PortfolioWorkItem.
 */
export interface PortfolioWorkItem {
  title: string;
  id: string;
  client: string;
  screenshot: string;
  logo: string;
  url: string;
  description: string[];
  technologies: PortfolioItemTechnology[];
}
