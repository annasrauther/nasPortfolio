/**
 * Interface representing a Skill item.
 * @interface Skill
 */
export interface Skill {
  /**
   * The title of the skill.
   * @property {object} title - The title object.
   * @property {string} title.rendered - The rendered title.
   */
  title: {
    rendered: string;
  };

  /**
   * The payload data of the skill item.
   * @property {object} payload - The payload object.
   * @property {string} payload.skill_image - The URL of the image representing the skill.
   * @property {string} payload.skill_url - The URL of the skill.
   * @property {string} payload.description - The description of the skill.
   * @property {string} payload.skill_type - The type of the skill.
   */
  payload: {
    skill_image: string;
    skill_url: string;
    description: string;
    skill_type: string;
  };
}
