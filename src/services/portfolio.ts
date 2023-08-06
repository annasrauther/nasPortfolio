import { PORTFOLIO_ENDPOINT } from './endpoints';
import { PortfolioItem } from '@/interfaces/portfolio';

/**
 * Fetches the portfolio archive data from the API.
 * @async
 * @function
 * @returns {Promise<PortfolioItem[]>} A promise that resolves to an array of PortfolioItem objects representing the portfolio archive data.
 */
export const getPortfolioArchive = async () => {
  const response = await fetch(PORTFOLIO_ENDPOINT + '?per_page=100&orderby=scpo_order', {
    next: { revalidate: 60 },
  });
  const data: PortfolioItem[] = await response.json();
  return data;
};
