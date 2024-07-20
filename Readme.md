# Accom-Seek-Website
This is a platform designed to help users find suitable and affordable accommodation across the United States.

# Step-by-Step Guide

1. Download the final-project folder.
2. Download the frontend and backend folders separately.
3. Run the setup: Follow the instructions below for both the frontend and backend setups.


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




# Backend Setup Instructions

## Prerequisites
Before you start, ensure you have Python installed on your system. You can download it from [python.org](https://www.python.org/downloads/).

## Installation

Follow these steps to set up your environment and start the server:

### 1. Platform-Specific Setup
**macOS**

1. Install Xcode Command Line Tools (if not already installed):
    ```
    xcode-select --install
    ```
2. Install MariaDB:
    ```
    brew install mariadb
    ```
3. Install OpenSSL (required for some Python packages):
    ```
    brew install openssl
    export LDFLAGS="-L$(brew --prefix openssl)/lib"
    export CPPFLAGS="-I$(brew --prefix openssl)/include"
    ```
4. Install MySQL client library:
    ```
    pip install mysqlclient
    ```

**Linux (Debian/Ubuntu)**
1. Install MariaDB development files:
    ```
    sudo apt-get install libmariadb-dev
    sudo apt install pkg-config
    ```
2. Install MySQL client library:
    ```
    pip install mysqlclient
    ```

### 2. Install Python dependencies
```
pip3 install -r requirement.txt
```

### 3. Environment Configuration
Make sure you add `db.env` into the `/myapp` folder. This file should contain all necessary environment variables for database configuration.

## Start the Server
Run the Django server
```
python3 manage.py runserver
```


** Comtributor **
Thanks for my excellent teammate in UIUC MCS:
@ patrick wu
@ willy cheng
@ lin-sheng-min
@ Chen-Si-An

