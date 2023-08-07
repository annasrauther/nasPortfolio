# Developer Portfolio Site with WordPress and Next.js

## Introduction

Welcome to my personal developer portfolio site repository! This project showcases my skills and projects using a powerful combination of WordPress as the backend and Next.js on the frontend. As an accomplished front-end developer experienced in full-stack applications, I've embraced a versatile approach to web development.

## Technical Details

This project utilizes the following libraries and technologies:

- Next.js 13 (App Router) for the frontend development, offering server-side rendering and optimized performance.
- WordPress as the backend platform, providing a user-friendly content management system.
- TypeScript for static typing and enhanced developer productivity.
- Framer Motion for smooth and interactive animations.
- React Icons for a wide range of customizable icons.
- Yarn for package management.
- ESLint for code linting and maintaining code quality.
- VS Code as the code editor.

The `package.json` file contains the complete list of dependencies used in this project.

## WordPress Plugin - Developer Portfolio CPT Plugin

If you want to use WordPress as your backend or CMS for managing content in your WordPress Admin, you can use the Developer Portfolio CPT Plugin. This user-friendly custom post type plugin is designed for individuals and businesses who want to use WordPress to manage content for their portfolio websites. The plugin seamlessly registers custom post types (CPTs) to help you showcase your skills, experiences, and portfolios, making it easy to create an impressive portfolio website.

GitHub Repository: [Developer Portfolio CPT Plugin](https://github.com/annasrauther/developer-portfolio-cpt-plugin)

## WordPress Theme - Developer Portfolio Headless Theme

For headless CMS setups where the front end is handled separately using a headless CMS or a static site generator, you can use the Developer Portfolio Headless Theme. This custom WordPress theme is designed to disable the front end and redirect to the Site URL. It's primarily intended for headless WordPress setups, enabling you to handle the front end separately while still leveraging the power of WordPress as a headless CMS.

GitHub Repository: [Developer Portfolio Headless Theme](https://github.com/annasrauther/developer-portfolio-headless-theme)

## Deploying the Portfolio Site

To set up your own portfolio site using this repository, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install the necessary dependencies using Yarn:

   ```
   yarn install
   ```

3. Configure the WordPress Backend:

   - Ensure you have a WordPress site set up with the necessary data for your portfolio items, such as experience, portfolio, and skills.
   - Set the base URL for the WordPress API in the `.env.local` file:

     ```
     NEXTJS_PUBLIC_WORDPRESS_API_URL=<your_wordpress_api_url>
     ```

4. Customize Your Portfolio Data:

   - Update the API endpoints in the `endpoints.js` file to match your WordPress API setup.

   ```javascript
   // endpoints.js

   // Endpoint for the 'experience' API.
   export const EXPERIENCE_ENDPOINT = API_BASE + 'experience';

   // Endpoint for the 'portfolio' API.
   export const PORTFOLIO_ENDPOINT = API_BASE + 'portfolio';

   // Endpoint for the 'skill' API.
   export const SKILL_ENDPOINT = API_BASE + 'skill';
   ```

   - Implement the necessary API calls to fetch your experience, portfolio, and skill data. The functions for fetching experience, portfolio, and skill archive data are provided in the `services` directory. Customize them as needed to fit your API endpoints and data structures.

5. Start the development server:

   ```
   yarn dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to see your portfolio site in action.

7. Build the Next.js project:

   ```
   yarn build
   ```

8. Deploy the built project using your preferred hosting service (e.g., Vercel, Netlify, etc.).

## Contributing

While this repository is not a template, feel free to use it as a starting point for your own portfolio site. You can modify and customize the code to suit your needs. If you'd like to contribute to the project or report any issues, feel free to submit a pull request or open an issue in the GitHub repository.

## License

This project is licensed under the GNU General Public License - see the [LICENSE](LICENSE) file for details.