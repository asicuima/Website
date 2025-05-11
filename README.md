# asicuima - Personal Website

A modern React-based personal website built with React 18, Bootstrap, and React Router.

## Features

- Modern React 18 with latest features
- Responsive design using Bootstrap 5
- Client-side routing with React Router
- SEO optimization with React Helmet
- Icon support with React Icons
- Security features with DOMPurify

## Prerequisites

- Docker (for containerized deployment)
- Git (for version control)

Optional (if you want to run without Docker):
- Node.js (v18 or higher)
- npm (v8 or higher)

## Getting Started

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/asicuima/Website.git
cd Website
```

2. Build and run using Docker Compose:
```bash
docker-compose up --build
```

The website will be available at http://localhost:3000.

### Without Docker (Alternative)

1. Clone the repository:
```bash
git clone https://github.com/asicuima/Website.git
cd Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```
The development server will run on http://localhost:3000.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Deployment

### Docker Deployment

1. Build and run using Docker Compose:
```bash
docker-compose up --build
```

The containerized application will be available at http://localhost:3000.

### Static Deployment

1. Build the production version:
```bash
npm run build
```

2. The `build` folder contains the production-ready static files that can be deployed to:
   - Netlify: Connect your repository and set the build command to `npm run build`
   - Vercel: Connect your repository and set the build command to `npm run build`
   - GitHub Pages: Use `gh-pages` package and set the build command
   - AWS S3 + CloudFront: Upload the contents of the `build` folder to your S3 bucket
   - Any static hosting service: Upload the contents of the `build` folder

## Project Structure

```
├── public/          # Static files
├── src/            # Source code
│   ├── components/ # React components
│   ├── pages/      # Page components
│   ├── assets/     # Images and other assets
│   └── App.js      # Main application component
├── Dockerfile      # Docker configuration
├── docker-compose.yml # Docker Compose configuration
└── nginx.conf      # Nginx configuration
```

## Technologies Used

- React 18
- React Router 6
- Bootstrap 5
- React Bootstrap
- React Helmet Async
- React Icons
- DOMPurify
- Docker
- Nginx

## Credits

This project is based on the original code from [Zara Siddique's personal website](https://github.com/zarasiddique). Special thanks for the inspiration and foundation of this project.

