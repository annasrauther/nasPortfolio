import { SKILL_ENDPOINT, ORDER_QUERY } from './endpoints';
import { Skill } from '@/interfaces/skill';

/**
 * Fetches the skill archive data from the API.
 * @async
 * @function
 * @returns {Promise<Skill[]>} A promise that resolves to an array of Skill objects representing the skill archive data.
 */
export const getSkillArchive = async () => {
  const response = await fetch(SKILL_ENDPOINT + ORDER_QUERY, {
    next: { revalidate: 5 },
  });
  const data: Skill[] = await response.json();
  return data;
};
