import { EXPERIENCE_ENDPOINT } from './endpoints';
import { ExperienceItem } from '@/interfaces/experience';

/**
 * Fetches the experience archive data from the API.
 * @async
 * @function
 * @returns {Promise<ExperienceItem[]>} A promise that resolves to an array of ExperienceItem objects representing the experience archive data.
 */
export const getExperienceArchive = async () => {
  const response = await fetch(EXPERIENCE_ENDPOINT + '?per_page=20&orderby=scpo_order', {
    next: { revalidate: 60 },
  });
  const data: ExperienceItem[] = await response.json();
  return data;
};
