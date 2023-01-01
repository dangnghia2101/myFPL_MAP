import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Marker,
  useMap,
  Popup,
} from "react-leaflet";
import React, { useState, useEffect, useRef, FC } from "react";
import L, { LatLngBoundsExpression } from "leaflet";
import "leaflet-routing-machine";
import newMarker from "../data/pin.png";
import tileLayer from "../util/tileLayer";
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine";
import { useGeolocated } from "react-geolocated";
import { Box, Container } from "@mui/system";
import { Menu, MenuItem, MenuList, TextField } from "@mui/material";
import { AccountCircle, Flag, LocationOn, Search } from "@mui/icons-material";
import { HCM_LOCATION } from "../util/coordinatesFPOLY";
import "./style_test.css";

const pointerIcon = new L.Icon({
  iconUrl: newMarker,
  iconSize: [50, 58], // size of the icon
  iconAnchor: [20, 58], // changed marker icon position
  popupAnchor: [0, -60], // changed popup position
});

type OverLayProps = {
  locationEnd: any;
  locationStart: any;
  setLengthRun: any;
};

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
const imageBounds: LatLngBoundsExpression = [
  [10.8398, 106.61814], //position x, y
  // [10.8398, 146.61814], //position x, y
  [10.8478, 106.62804],
]; //         widtth

const OverlayImage: FC<OverLayProps> = ({
  locationEnd,
  locationStart,
  setLengthRun,
}) => {
  const map = useMap();

  // map.fitBounds(imageBounds);
  map.panTo(
    new L.LatLng(HCM_LOCATION.building_T[0], HCM_LOCATION.building_T[1])
  );

  const [currentLocation, setCurrentLocation] = useState<any>(undefined);
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
    if (locationEnd && locationStart) {
      // L.Routing.RouteLayer.extend({
      //   creaetStartMarker: () => {

      //   },
      // });

      L.Routing.control({
        waypoints: [
          L.latLng(locationStart[0], locationStart[1]),
          L.latLng(locationEnd[0], locationEnd[1]),
        ],
        // LineOptions: {   NEW
        //   styles: [
        //     {
        //       color: "blue",
        //       weight: 4,
        //       opacity: 0.7,
        //     },
        //   ],
        // },
        routeWhileDragging: true,
        addWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
        // draggableWaypoints: false, NEW
        show: false,

        // autoRoute: true,
      })
        .addTo(map)
        .on("routesfound", function (e) {
          var routes = e.routes;
          var summary = routes[0].summary;
          // alert distance and time in km and minutes
          setLengthRun(
            "Quãng đường: " +
              summary.totalDistance +
              " m \n Thời gian di chuyển " +
              Math.round((summary.totalTime % 3600) / 60) +
              " phút"
          );
        });
    }
  }, [locationEnd, locationStart]);

  return (
    <ImageOverlay
      url={imageUrl}
      // fitBounds={true}
      bounds={imageBounds}
      opacity={1}
    />
  );
};

const MapWrapper = () => {
  const [map, setMap] = useState<any>(null);
  const tipChoose = useRef<Number>(1);
  const [searchStart, setSearchStart] = useState("");
  const [searchEnd, setSearchEnd] = useState("");
  const [searchFind, setSearchFind] = useState("");
  const [locationFind, setLocationFind] = useState<number[]>(
    HCM_LOCATION.building_T
  );
  const [locationStart, setLocationStart] = useState();
  const [locationEnd, setLocationEnd] = useState();
  const [lengthRun, setLengthRun] = useState("");
  const [anchorElStart, setAnchorElStart] = React.useState<null | HTMLElement>(
    null
  );
  const openMenuSearch = Boolean(anchorElStart);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    position: Number
  ) => {
    setAnchorElStart(event.currentTarget);
    tipChoose.current = position;
  };
  const handleClose = () => {
    setAnchorElStart(null);
  };

  const handleCloseMenu = (location: any, dataChoosoe: string) => {
    setLocationFind(location);
    setAnchorElStart(null);
    map.setZoom(10000);

    map.panTo(new L.LatLng(location[0], location[1]));
    // map.flyTo(new L.LatLng(location[0], location[1], 20));
    // map.setView(new L.LatLng(location[0], location[1], 20));

    switch (tipChoose.current) {
      case 1:
        setSearchFind(dataChoosoe);
        break;
      case 2:
        setSearchStart(dataChoosoe);
        setLocationStart(location);
        break;
      case 3:
        setSearchEnd(dataChoosoe);
        setLocationEnd(location);
        break;
      default:
        console.log("[Defaul]");
    }
  };

  return (
    <Box height="100%" width="100%" position="fixed">
      <Box
        width="100%"
        alignItems="center"
        height={120}
        zIndex={1000}
        justifyContent="center"
        display="flex"
        flexDirection="column"
      >
        <TextField
          id="search-find"
          variant="standard"
          type="text"
          value={searchFind}
          onChange={(e) => setSearchFind(e.target.value)}
          style={{
            borderRadius: 15,
            backgroundColor: "#f1c232",
            borderWidth: 0,
            paddingLeft: 10,
            paddingRight: 10,
            height: 30,
            justifyContent: "center",
            width: 300,
          }}
          placeholder="Nhập địa điểm tìm kiếm"
          InputProps={{
            startAdornment: (
              <Search style={{ width: 16, color: "white", marginRight: 5 }} />
            ), // <== adjusted this
            disableUnderline: true, // <== added this
            style: { fontSize: 12, color: "white" },
          }}
          onClick={(e) => {
            handleClick(e, 1);
          }}
        />
        <TextField
          id="search-start"
          variant="standard"
          type="text"
          value={searchStart}
          onChange={(e) => setSearchStart(e.target.value)}
          style={{
            borderRadius: 15,
            backgroundColor: "#f1c232",
            borderWidth: 0,
            paddingLeft: 10,
            paddingRight: 10,
            height: 30,
            justifyContent: "center",
            width: 300,
            marginTop: 10,
          }}
          placeholder="Nhập địa điểm bắt đầu"
          InputProps={{
            startAdornment: (
              <Flag style={{ width: 16, color: "white", marginRight: 5 }} />
            ), // <== adjusted this
            disableUnderline: true, // <== added this
            style: { fontSize: 12, color: "white" },
          }}
          onClick={(e) => {
            handleClick(e, 2);
          }}
        />
        <TextField
          id="search-end"
          variant="standard"
          type="text"
          value={searchEnd}
          onChange={(e) => setSearchEnd(e.target.value)}
          style={{
            borderRadius: 15,
            backgroundColor: "#f1c232",
            borderWidth: 0,
            paddingLeft: 10,
            paddingRight: 10,
            height: 30,
            justifyContent: "center",
            width: 300,
            marginTop: 10,
          }}
          placeholder="Nhập địa điểm kết thúc"
          InputProps={{
            startAdornment: (
              <LocationOn
                style={{ width: 16, color: "white", marginRight: 5 }}
              />
            ), // <== adjusted this
            disableUnderline: true, // <== added this
            style: { fontSize: 12, color: "white" },
          }}
          onClick={(e) => {
            handleClick(e, 3);
          }}
        />
        <Menu
          id="menu-start"
          open={openMenuSearch}
          anchorEl={anchorElStart}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          style={{ marginTop: 30 }}
        >
          <MenuItem
            onClick={() => handleCloseMenu(HCM_LOCATION.building_P, "Toà P")}
          >
            Toà P
          </MenuItem>
          <MenuItem
            onClick={() => handleCloseMenu(HCM_LOCATION.building_T, "Toà T")}
          >
            Toà T
          </MenuItem>
          <MenuItem
            onClick={() => handleCloseMenu(HCM_LOCATION.building_F, "Toà F")}
          >
            Toà F
          </MenuItem>
        </Menu>

        <Box right={100} height={120} zIndex={1000} position="absolute">
          {lengthRun}
        </Box>
      </Box>

      <MapContainer
        style={{ height: "100%", width: "100%" }}
        whenCreated={setMap}
        center={locationFind}
        zoom={1000}
        scrollWheelZoom={true}
      >
        <TileLayer {...tileLayer} />

        <Marker
          icon={pointerIcon}
          position={locationFind}
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

        <OverlayImage
          locationStart={locationStart}
          locationEnd={locationEnd}
          setLengthRun={setLengthRun}
        />
      </MapContainer>
    </Box>
  );
};

const styles = {
  //style for font size
  resize: {
    fontSize: 50,
  },
};

export default MapWrapper;
