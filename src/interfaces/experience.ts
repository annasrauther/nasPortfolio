/**
 * Interface representing an ExperienceItem.
 * @interface ExperienceItem
 */
export interface ExperienceItem {
  /**
   * The title of the experience item.
   * @property {object} title - The title object.
   * @property {string} title.rendered - The rendered title.
   */
  title: {
    rendered: string;
  };
  /**
   * The payload data of the experience item.
   * @property {object} payload - The payload object.
   * @property {string} payload.company_name - The name of the company.
   * @property {string} payload.company_logo - The URL of the company logo.
   * @property {string} payload.company_url - The URL of the company website.
   * @property {string} payload.duration - The duration of the experience.
   * @property {string} payload.description - The description of the experience.
   */
  payload: {
    company_name: string;
    company_logo: string;
    company_url: string;
    duration: string;
    description: string;
  };
}
