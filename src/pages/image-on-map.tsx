import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Marker,
  useMap,
  Popup,
} from "react-leaflet";
import React, { useState, useEffect, useRef, FC } from "react";
import L, {
  Control,
  IconOptions,
  LatLngBoundsExpression,
  LatLngExpression,
} from "leaflet";
import "leaflet-routing-machine";
import newMarker from "../data/pin.png";
import tileLayer from "../util/tileLayer";
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine";
import { useGeolocated } from "react-geolocated";
import { Box, Container } from "@mui/system";
import {
  Button,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  MenuList,
  TextField,
} from "@mui/material";
import { AccountCircle, Flag, LocationOn, Search } from "@mui/icons-material";
import { HCM_LOCATION } from "../util/coordinatesFPOLY";
import "./style_test.css";
import { BottomSheet } from "react-spring-bottom-sheet";

const itemData = [
  {
    img: "https://lh5.googleusercontent.com/p/AF1QipOcmayZe5vz5YxFYK0JCC6-0naNMHXCj3qBJuUw=s812-k-no",
    title: "Breakfast",
  },
  {
    img: "https://lh5.googleusercontent.com/p/AF1QipOLLAQ82xx_eXMM_hUyDMY7kp3oWD8Lkc7dLo3L=w203-h270-k-no",
    title: "Burger",
  },
  {
    img: "https://lh5.googleusercontent.com/p/AF1QipNrmVPu6ZNqMp2hi4xQi2teobNHMUpX5909DibF=s1160-k-no-pi0-ya20-ro0-fo100",
    title: "Camera",
  },
];

const pointerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/5193/5193743.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [20, 58], // changed marker icon position
  popupAnchor: [0, -60], // changed popup position
});

type OverLayProps = {
  locationEnd: any;
  locationStart: any;
  setLengthRun: any;
  tipChoose: number;
};

const customPopup = (
  <Box width={"100%"} zIndex={10000}>
    <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{
              height: 150,
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Button
      style={{ marginTop: 20, marginBottom: 20 }}
      color="success"
      variant="contained"
    >
      Dẫn đường
    </Button>
    <Box>
      Với triết lý đào tạo “Thực học – Thực nghiệp”, Cao đẳng FPT Polytechnic
      hướng tới đào tạo nguồn nhân lực chất lượng cao với phương pháp giảng dạy
      qua dự án thật.
    </Box>
  </Box>
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
  const routeControl = useRef<Control>(undefined);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 10000,
    });

  useEffect(() => {
    if (locationEnd && locationStart) {
      if (routeControl.current) {
        map.removeControl(routeControl.current);
      }

      routeControl.current = L.Routing.control({
        waypoints: [
          L.latLng(locationStart[0], locationStart[1]),
          L.latLng(locationEnd[0], locationEnd[1]),
        ],

        lineOptions: {
          styles: [{ color: "orange", opacity: 1, weight: 5 }],
        },
        routeWhileDragging: true,
        addWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
        // draggableWaypoints: false, NEW
        show: false,
        plan: L.Routing.plan(
          [
            L.latLng(locationStart[0], locationStart[1]),
            L.latLng(locationEnd[0], locationEnd[1]),
          ],
          {
            createMarker: function (i, wp) {
              var iconOptions: IconOptions = {
                iconUrl:
                  i === 0
                    ? "https://www.freeiconspng.com/thumbs/bee-png/best-free-bee-png-image-5.png"
                    : "https://cdn-icons-png.flaticon.com/512/424/424052.png",
                iconSize: [50, 50],
              };
              // Creating a custom icon

              // Creating Marker Options
              var markerOptions = {
                title: "MyLocation",
                clickable: true,
                draggable: true,
                icon: L.icon(iconOptions),
              };

              return L.marker(wp.latLng, markerOptions);
            },
          }
        ),
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
              Math.round((summary.totalTime % 3600) / 45) +
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
  const [locationFind, setLocationFind] = useState<any>(
    HCM_LOCATION.building_T
  );
  const [locationStart, setLocationStart] = useState();
  const [locationEnd, setLocationEnd] = useState();
  const [lengthRun, setLengthRun] = useState("");
  const [anchorElStart, setAnchorElStart] = React.useState<null | HTMLElement>(
    null
  );
  const [openDetailBuilding, setOpenDetailBuilding] = useState(false);

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 10000,
  });

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
    map.setZoom(17);

    map.panTo(new L.LatLng(location[0], location[1]));

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
          <MenuItem
            onClick={() => {
              if (coords?.latitude && coords?.longitude) {
                handleCloseMenu(
                  [coords?.latitude, coords?.longitude],
                  "Vị trí của tôi"
                );
              }
            }}
          >
            Vị trí của tôi
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
        zoom={17}
        maxZoom={22}
        scrollWheelZoom={true}
      >
        <TileLayer {...tileLayer} />

        <Marker
          icon={pointerIcon}
          position={locationFind}
          eventHandlers={{
            click: (e) => {
              // map.setView(e.target.getLatLng(), 15);
              setOpenDetailBuilding(true);
            },
          }}
        >
          <Popup keepInView={true}>{customPopup}</Popup>
        </Marker>

        <OverlayImage
          locationStart={locationStart}
          locationEnd={locationEnd}
          setLengthRun={setLengthRun}
          tipChoose={tipChoose.current}
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
