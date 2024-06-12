import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "../assets/icon-start.png";
import locations from "./location.json";

// Membuat ikon khusus untuk marker
const customIcon = new L.Icon({
  iconUrl: iconUrl,
  iconSize: 15, // ukuran ikon
});

// Koordinat batas-batas untuk Sabang dan Merauke
const bounds = [
  [0.0611859, 110.2875025], // Barat daya Indonesia
  [0.5916, 140.6689], // Timur laut Indonesia
];

const MapView = () => {
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        paddingBottom: "60px",
        backgroundColor: "green ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={[-2.548926, 118.0148634]}
        zoom={1}
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "red",
          scale: "1.36",
          marginLeft: "70px",
          marginTop: "70px",
        }}
        // Koordinat batas-batas untuk Sabang dan Merauke
        bounds={bounds}
        // maxZoom={5} // Mencegah pengguna memperbesar peta
        minZoom={5} // Mencegah pengguna memperkecil peta
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => {
          return (
            <Marker
              key={location.id}
              position={location.position}
              icon={customIcon}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
};

export default MapView;
