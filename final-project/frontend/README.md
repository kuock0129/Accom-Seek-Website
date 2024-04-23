# Frontend Setup Instructions

## Getting Started

These instructions will guide you through setting up the project on your local development environment.

### Installation

To install the necessary dependencies, follow these steps:

```
npm install
```

### Environment Configuration

Make sure you add `.env.local` into the frontend folder. This file should contain all necessary environment variables for local server.

```
NEXT_PUBLIC_API_URL=127.0.0.1:8000
```

### Running the Development Server

Once the installation is complete, you can start the development server:

```
npm run dev
```

This will start the Next.js application in development mode on http://localhost:3000. Open this URL in your browser to view your application.

### Building for Production

To build the application for production use:

```
npm run build
```

This command generates a .next folder containing a production build of your app. To start the production server, run:

```
npm start
```
