# Vite + React + TypeScript + TailwindCSS + Storybook Project

This is a **React + TypeScript** project built using **Vite**, with optional support for **TailwindCSS** and **Storybook**. It provides a modern development environment for building scalable and maintainable web applications.

## 🚀 Features

-   ⚡ Fast bundling with [Vite](https://vitejs.dev/)
-   ⚛️ React 18 with TypeScript
-   📂 Organized project structure
-   🎨 TailwindCSS support (optional)

## 📦 Installation

Clone the repository and install dependencies:

``` bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

## 🏃 Running the Project

Start the development server:

``` bash
npm run dev
```

Build for production:

``` bash
npm run build
```

Preview the production build:

``` bash
npm run preview
```

## 📂 Project Structure

    my-app/
    ├── public/            # Static assets
    ├── src/               # Application source code
    │   ├── components/    # Reusable components
    │   │   ├── DataTable/ # DataTable component
    │   │   ├── InputField/ # InputField component
    │   ├── App.tsx        # Root component
    │   ├── main.tsx       # Entry point
    │   └── index.ts       # Exports for cleaner imports
    ├── index.html         # HTML entry
    ├── package.json       # Dependencies and scripts
    ├── tsconfig.json      # TypeScript config
    └── vite.config.ts     # Vite config

## 🛠️ Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build production bundle
-   `npm run preview` - Preview production build
-   `npm run storybook` - Start Storybook

## 📸 Screenshots of Storybook Components

DataTable Component

### Documentation
![DataTable Docs](./src/assets/Screenshot%202025-08-21%20065214.png)

### Default
![DataTable Default](./src/assets/Screenshot%202025-08-21%20072923.png)

### Loading
![DataTable Loading](./src/assets/Screenshot%202025-08-21%20072929.png)

### Empty
![DataTable Empty](./src/assets/Screenshot%202025-08-21%20072934.png)

### Selectable
![DataTable Selectable](./src/assets/Screenshot%202025-08-21%20072943.png)

InputField Component

### Documentation
![InputField Docs](./src/assets/Screenshot%202025-08-21%20073005.png)

### Default
![InputField Default](./src/assets/Screenshot%202025-08-21%20073020.png)

### Error
![InputField Error](./src/assets/Screenshot%202025-08-21%20073025.png)

### Disabled
![InputField Disabled](./src/assets/Screenshot%202025-08-21%20073029.png)

### Password
![InputField Password](./src/assets/Screenshot%202025-08-21%20073034.png)

### Clearable
![InputField Clearable](./src/assets/Screenshot%202025-08-21%20073038.png)