import { SKILL_ENDPOINT } from './endpoints';
import { Skill } from '@/interfaces/skill';

/**
 * Fetches the skill archive data from the API.
 * @async
 * @function
 * @returns {Promise<Skill[]>} A promise that resolves to an array of Skill objects representing the skill archive data.
 */
export const getSkillArchive = async () => {
  const response = await fetch(SKILL_ENDPOINT + '?per_page=100&orderby=scpo_order', {
    next: { revalidate: 60 },
  });
  const data: Skill[] = await response.json();
  return data;
};
