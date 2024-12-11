# Welcome to the YENİ Marketplace !
This is an application that provides specific products and their details.
The user can find the product list on the Marketplace Page and the related product's details are given in the Product Detail page. 
There are 2 product list on the Marketplace page; horizontal and vertical. The user can display them with pagination. 
In the Product Detail page, related product's image, brand, name and attributes are given. 
With the logo in the header, the page will be routed to the marketplace(main) page.

## Technologies Used
### Frontend
React: For building user interfaces.
React DOM: To connect React components to the browser DOM.
Material-UI (@mui/material): For modern and responsive UI components.
Emotion (@emotion/react, @emotion/styled): For styling and compatibility with Material-UI.
### Backend & Server
Remix (@remix-run/node, @remix-run/react, @remix-run/serve): For server-side rendering and routing.
### Type Checking & Linting
TypeScript: Ensures type safety.
ESLint: For code quality and style checks, with plugins for React, hooks, and TypeScript.
### Styling
Tailwind CSS: Utility-first CSS framework.
PostCSS & Autoprefixer: For processing and browser compatibility.
### Build Tools
Vite: Fast development server and build tool.
vite-tsconfig-paths: Supports TypeScript path aliases in Vite.
### Runtime
Node.js (>=20.0.0): JavaScript runtime for server-side execution.
### Testing
Jest: JavaScript testing framework for unit and integration tests.
React Testing Library: For testing React components, with utilities like @testing-library/react and @testing-library/user-event.
Jest-DOM: Provides custom matchers for asserting on DOM elements.
ts-jest: TypeScript preprocessor for Jest, enabling testing with TypeScript.


## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
