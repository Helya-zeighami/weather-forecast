
# Weather Forecast App 🌦️

This is a **Weather Forecast Application** built with **React**, **Mantine**, and **Tailwind CSS**.  
It fetches **current weather data** and a **7-day forecast** using the **Weatherbit API**.  
The app supports **unit switching (°C/°F)**, **refreshing weather data**, and **toggleable forecasts**.

---

## Features

- 🌍 **Geolocation Support** – Detects the user's location automatically.
- 🔍 **Search Bar** – Allows searching weather by city name.
- 🌡️ **Unit Switcher** – Toggle between **Celsius (°C)** and **Fahrenheit (°F)**.
- 🔄 **Refresh Button** – Refreshes the current weather data on demand.
- 📅 **7-Day Forecast Toggle** – Displays or hides the forecast with a button.

---

## Requirements

- **Node.js** >= 16
- **pnpm** (Package Manager)

---

## Installation

### Step 1: Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

> **Note**: If you don’t have **npm** installed, first install **Node.js** from [here](https://nodejs.org/).

### Step 2: Clone the Repository

```bash
git clone https://github.com/your-repository/weather-app.git
cd weather-app
```

### Step 3: Install Dependencies

```bash
pnpm install
```

---

## Setting Up Environment Variables

### Step 1: Create a `.env` File

1. Copy the provided `env.sample` file:


2. Open the `.env` file and replace the placeholder values with your **Weatherbit API Key**.

### Example `.env` File

```
# Weather API Key
VITE_WEATHER_API_KEY=your-weather-api-key-here



# Base URL for APIs
VITE_API_BASE_URL=https://api.weatherbit.io/v2.0


```

---

## Running the Application

### Step 1: Start the Development Server

```bash
pnpm run dev
```

### Step 2: Open in Browser

The app should be accessible at:

```
http://localhost:5173
```

---

## Technologies Used

- **React.js** – Frontend framework for building user interfaces.
- **Mantine** – Modern UI components for styling.
- **Tailwind CSS** – Utility-first CSS framework for responsive design.
- **Weatherbit API** – Provides real-time weather data and forecasts.
- **pnpm** – Fast and efficient package manager for Node.js projects.

---

## Credits

Developed by **Helya Zeighami**.  
API powered by **[Weatherbit](https://www.weatherbit.io/)**.

---

## Troubleshooting

### 1. Command Not Found: pnpm

Make sure you have **pnpm** installed globally:

```bash
npm install -g pnpm
```

### 2. Environment Variables Not Loaded

Check that you have copied `env.sample` to `.env` and filled in the correct values.

### 3. Dependencies Not Found

Run the following command to reinstall dependencies:

```bash
pnpm install
```

