# Spatial-Map

This project is a React application that displays a map with multiple point data layers, a polygon layer, and interactive features using the Leaflet library.

## Features

- Displays a map centered on Washington, D.C.
- Adds multiple markers with popup labels for point data
- Adds a polygon layer
- Handles map click events to display latitude and longitude
- Provides navigation buttons for zooming in, zooming out, and resetting the view

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/spatial-map.git
    cd spatial-map
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the development server:

    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/components/MapComponent.jsx`: The main component that renders the map, markers, polygon, and handles interactions.
- `src/App.js`: The main application component that includes the `MapComponent`.
- `src/App.css`: Styles for the application, including navigation buttons.

## Dependencies

- [React](https://reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [React-Leaflet](https://react-leaflet.js.org/)

## Code Overview

### MapComponent.jsx
