# Project: spatial-automata-website

## Project Overview

This is the official website for Spatial Automata, a company focused on AEC (Architecture, Engineering, and Construction) automation. The website is built using the Next.js framework, React, and TypeScript, providing a modern, fast, and responsive user experience. It serves as a marketing platform to showcase the company's products and provide information about the company.

The project is structured as a standard Next.js application with a clear separation of concerns. It utilizes Tailwind CSS for styling, with a custom theme defined in `tailwind.config.js`. The UI is built with a combination of custom React components and components from the shadcn/ui library, which is based on Radix UI and Lucide React icons.

## Getting Started

To get the project up and running for development, you'll need to have Node.js and npm installed.

1.  **Install Dependencies:**
    Clone the repository and install the necessary dependencies using npm.

    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    Once the dependencies are installed, you can start the development server.

    ```bash
    npm run dev
    ```

    This will start the application on `http://localhost:3000`. The page will auto-update as you make changes to the code.

### Other Commands

*   **Build for Production:**
    ```bash
    npm run build
    ```
*   **Start Production Server:**
    ```bash
    npm run start
    ```
*   **Lint the Code:**
    ```bash
    npm run lint
    ```

## Project Structure

*   `src/app/`: Contains the core application logic, including page routes and layouts.
    *   `src/app/page.tsx`: The main entry point for the homepage.
    *   `src/app/layout.tsx`: The root layout for the application.
    *   `src/app/products/`: Contains the pages for each of the company's products.
*   `src/components/`: Contains reusable React components used throughout the application, such as the navbar, footer, and UI elements.
*   `public/`: Contains static assets like images, fonts, and favicons.
*   `tailwind.config.js`: The configuration file for Tailwind CSS, where the custom theme is defined.
*   `next.config.ts`: The configuration file for Next.js.
*   `tsconfig.json`: The configuration file for TypeScript.

## Key Technologies

*   **Next.js:** A React framework for building server-side rendered and static websites.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **shadcn/ui:** A collection of reusable UI components.
*   **Vercel:** The project is set up for easy deployment on the Vercel platform.

## Development Conventions

*   When writing body text, use `&quot;` instead of quotes.
*   Before every commit, run `npm run build` to ensure the project can build correctly.
