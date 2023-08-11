/**
 * Interface representing a PortfolioItem.
 * @interface PortfolioItem
 */
export interface PortfolioItem {
  /**
   * The title of the portfolio item.
   * @property {object} title - The title object.
   * @property {string} title.rendered - The rendered title.
   */
  title: {
    rendered: string;
  };

  /**
   * The payload data of the portfolio item.
   * @property {object} payload - The payload object.
   * @property {string} payload.client - The client associated with the portfolio item.
   * @property {string} payload.url - The URL of the portfolio item.
   * @property {string} payload.description - The description of the portfolio item.
   * @property {PortfolioSkills[]} payload.skills - An array of skills associated with the portfolio item.
   * @property {string} payload.screenshot_url - The URL of the screenshot image for the portfolio item.
   */
  payload: {
    client: string;
    url: string;
    description: string;
    skills: PortfolioSkills[];
    screenshot_url: string;
  };
}

/**
 * Interface representing a PortfolioSkill.
 * @interface PortfolioSkills
 */
export interface PortfolioSkills {
  /**
   * The title of the skill.
   * @property {string} title - The title of the skill.
   */
  title: string;

  /**
   * The URL of the image representing the skill.
   * @property {string} skill_image - The URL of the skill image.
   */
  skill_image: string;
}
/**
 * Interface representing a PostArchive.
 * @interface PostArchive
 * @property {number} id - The ID of the post.
 * @property {string} title - The title of the post.
 * @property {string} slug - The slug of the post.
 */

export interface PostArchive {
  id: number
  title: {
    rendered: string
  },
  slug: string
}