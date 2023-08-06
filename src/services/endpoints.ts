/**
 * Base URL for the WordPress API.
 * @constant {string} API_BASE - The base URL for the WordPress API.
 */
export const API_BASE = process.env.NEXTJS_PUBLIC_WORDPRESS_API_URL;

/**
 * Endpoint for the 'experience' API.
 * @constant {string} EXPERIENCE_ENDPOINT - The endpoint for the 'experience' API.
 */
export const EXPERIENCE_ENDPOINT = API_BASE + 'experience';

/**
 * Endpoint for the 'portfolio' API.
 * @constant {string} PORTFOLIO_ENDPOINT - The endpoint for the 'portfolio' API.
 */
export const PORTFOLIO_ENDPOINT = API_BASE + 'portfolio';

/**
 * Endpoint for the 'skill' API.
 * @constant {string} SKILL_ENDPOINT - The endpoint for the 'skill' API.
 */
export const SKILL_ENDPOINT = API_BASE + 'skill';

/**
 * Query string for ordering the API results.
 * @constant {string} ORDER_QUERY - The query string for ordering the API results.
 */
export const ORDER_QUERY = '?orderby=menu_order&sort=asc';
