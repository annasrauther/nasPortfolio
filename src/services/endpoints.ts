/**
 * Base URL for the WordPress API.
 * @constant {string} API_BASE - The base URL for the WordPress API.
 */
export const API_BASE = process.env.NEXTJS_PUBLIC_WORDPRESS_API_URL;

/**
 * Endpoint for the 'experience' API.
 * @constant {string} EXPERIENCE_ENDPOINT - The endpoint for the 'experience' API.
 */
export const EXPERIENCE_ENDPOINT = API_BASE + 'experience?per_page=20';

/**
 * Endpoint for the 'portfolio' API.
 * @constant {string} PORTFOLIO_ENDPOINT - The endpoint for the 'portfolio' API.
 */
export const PORTFOLIO_ENDPOINT = API_BASE + 'portfolio?per_page=100';

/**
 * Endpoint for the 'skill' API.
 * @constant {string} SKILL_ENDPOINT - The endpoint for the 'skill' API.
 */
export const SKILL_ENDPOINT = API_BASE + 'skill?per_page=100';
