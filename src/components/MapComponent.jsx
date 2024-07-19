import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const MapComponent = () => {
  const centerPosition = [38.9072, -77.0369]; // Washington, D.C. coordinates
  const initialZoom = 13;

  const points = [
    { position: [38.89511, -77.03637], label: 'Point 1' },
    { position: [38.8895, -77.0353], label: 'Point 2' },
    { position: [38.8958, -77.0202], label: 'Point 3' }
  ];

  const polygonPositions = [
    [38.8921, -77.0497],
    [38.8921, -77.0337],
    [38.8833, -77.0337],
    [38.8833, -77.0497]
  ];

  const [mapData, setMapData] = useState(null);
  const mapRef = useRef(null);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setMapData(`Clicked at ${e.latlng.lat}, ${e.latlng.lng}`);
      },
    });
    return null;
  };

  const handleZoomIn = () => {
    const map = mapRef.current;
    if (map) {
      map.setZoom(map.getZoom() + 1);
    }
  };

  const handleZoomOut = () => {
    const map = mapRef.current;
    if (map) {
      map.setZoom(map.getZoom() - 1);
    }
  };

  const handleResetView = () => {
    const map = mapRef.current;
    if (map) {
      map.setView(centerPosition, initialZoom);
    }
  };

  return (
    <div>
      <MapContainer
        center={centerPosition}
        zoom={initialZoom}
        style={{ height: "100vh", width: "100%" }}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        />
        {points.map((point, idx) => (
          <Marker key={idx} position={point.position}>
            <Popup>{point.label}</Popup>
          </Marker>
        ))}
        <Polygon positions={polygonPositions} color="red" />
        <MapEvents />
      </MapContainer>
      {mapData && <div className="map-info">{mapData}</div>}
      <div className="navigation-buttons">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handleResetView}>Reset View</button>
      </div>
    </div>
  );
};

export default MapComponent;
