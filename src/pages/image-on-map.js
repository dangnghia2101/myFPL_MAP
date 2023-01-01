import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Marker,
  useMap,
  Popup,
} from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import newMarker from "../data/pin.png";
import tileLayer from "../util/tileLayer";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import { useGeolocated } from "react-geolocated";
import { Box, Container } from "@mui/system";

const center = [10.8538, 106.62814];

const pointerIcon = new L.Icon({
  iconUrl: newMarker,
  iconSize: [50, 58], // size of the icon
  iconAnchor: [20, 58], // changed marker icon position
  popupAnchor: [0, -60], // changed popup position
});

const customPopup = (
  <div className="customPopup">
    <figure>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/A-10_Sukiennice_w_Krakowie_Krak%C3%B3w%2C_Rynek_G%C5%82%C3%B3wny_MM.jpg/1920px-A-10_Sukiennice_w_Krakowie_Krak%C3%B3w%2C_Rynek_G%C5%82%C3%B3wny_MM.jpg"
        alt="Kraków"
        width="100%"
      />
      <figcaption>Source: wikipedia.org</figcaption>
    </figure>
    <div>
      Kraków,[a] also written in English as Krakow and traditionally known as
      Cracow, is the second-largest and one of the oldest cities in Poland.
      Situated on the Vistula River in Lesser Poland Voivodeship...{" "}
      <a
        href="https://en.wikipedia.org/wiki/Krak%C3%B3w"
        target="_blank"
        rel="noreferrer"
      >
        → show more
      </a>
    </div>
  </div>
);

// image
const imageUrl =
  "https://firebasestorage.googleapis.com/v0/b/duantotnghiep-e8aff.appspot.com/o/images%2FmapHCM_photos_v2_x4_colored.jpg?alt=media&token=39546f12-1055-4fd1-abbe-7687594b1ad3";

// add image to map ;)
const imageBounds = [
  [10.8398, 106.61814], //position x, y
  // [10.8398, 146.61814], //position x, y
  [10.8478, 106.62804],
]; //         widtth

const OverlayImage = () => {
  const map = useMap();

  map.fitBounds(imageBounds);

  const [currentLocation, setCurrentLocation] = useState(undefined);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      setCurrentLocation([coords.longitude, coords.latitude]);
    }
  }, [coords]);

  useEffect(() => {
    if (currentLocation) {
      L.Routing.control({
        waypoints: [
          L.latLng(currentLocation[1], currentLocation[0]),
          L.latLng(10.852704, 106.629588),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        addWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
        // autoRoute: true,
      })
        .addTo(map)
        .on("routesfound", function (e) {
          var routes = e.routes;
          var summary = routes[0].summary;
          // alert distance and time in km and minutes
          // alert(
          //   "Total distance is " +
          //     summary.totalDistance / 1000 +
          //     " km and total time is " +
          //     Math.round((summary.totalTime % 3600) / 60) +
          //     " minutes"
          // );
        });
    }
  }, [currentLocation]);

  return (
    <ImageOverlay
      url={imageUrl}
      fitBounds={true}
      bounds={imageBounds}
      opacity={1}
    />
  );
};

const MapWrapper = () => {
  const [map, setMap] = useState(null);

  return (
    <Box height="100%" width="100%" position="fixed">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        whenCreated={setMap}
        center={center}
        zoom={100}
        scrollWheelZoom={true}
      >
        <TileLayer {...tileLayer} />

        <Marker
          icon={pointerIcon}
          position={center}
          eventHandlers={{
            click: (e) => {
              map.setView(e.target.getLatLng(), 15);
            },
          }}
        >
          <Popup keepInView={true} minWidth={220}>
            {customPopup}
          </Popup>
        </Marker>

        {/* <OverlayImage /> */}
      </MapContainer>
    </Box>
  );
};

export default MapWrapper;
