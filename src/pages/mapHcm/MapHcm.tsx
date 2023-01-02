import { Search } from "@mui/icons-material";
import DirectionsIcon from "@mui/icons-material/Directions";
import MenuIcon from "@mui/icons-material/Menu";
import PlaceIcon from "@mui/icons-material/Place";
import { Collapse, TextField } from "@mui/material";
import { Box } from "@mui/system";
import L from "leaflet";
import "leaflet-routing-machine";
import React, { useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { HeaderAToB, SearchScreen } from "../../components";
import { DetailBuilding } from "../../components/DetailBuilding";
import useDebounce from "../../hooks/useDebounce";
import { DrawableMenu } from "../../navigation";
import { colors } from "../../themes";
import { getWindowDimensions } from "../../ultils";
import { HCM_LOCATION } from "../../ultils/coordinatesFPOLY";
import tileLayer from "../../ultils/tileLayer";
import OverlayImage from "./components/OverlayImage";
import ClearIcon from "@mui/icons-material/Clear";
import LayersIcon from "@mui/icons-material/Layers";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";

const pointerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/5193/5193743.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [20, 58], // changed marker icon position
  popupAnchor: [0, -60], // changed popup position
});

const MapHcm = () => {
  const { width, height } = getWindowDimensions();
  const [map, setMap] = useState<any>(null);
  const tipChoose = useRef<Number>(1);
  const [searchStart, setSearchStart] = useState("");
  const [searchEnd, setSearchEnd] = useState("");
  const [searchFind, setSearchFind] = useState("");
  const [showScreenSearchStart, setShowScreenSearchStart] = useState(false);
  const [showScreenSearchEnd, setShowScreenSearchEnd] = useState(false);
  const [showHeaderAToB, setShowHeaderAToB] = useState(false);
  const [showModalSearchFind, setShowModalSearchFind] = useState(false);
  const [openDrawable, setOpenDrawable] = useState(false);
  const [openLayer, setOpenLayer] = useState(false);
  const [locationFind, setLocationFind] = useState<any>(
    HCM_LOCATION[0].coordinates
  );
  const [locationStart, setLocationStart] = useState();
  const [locationEnd, setLocationEnd] = useState();
  const [lengthRun, setLengthRun] = useState("");
  const [openDetailBuilding, setOpenDetailBuilding] = useState(false);
  const [suggestSearch, setSuggestSearch] = useState(HCM_LOCATION);
  const debouncedValue = useDebounce<string>(searchFind, 300);

  useEffect(() => {
    const filterData = HCM_LOCATION.filter((item) =>
      item.name.toLowerCase().includes(debouncedValue.toLowerCase())
    );
    setSuggestSearch(filterData);
  }, [debouncedValue]);

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 10000,
  });

  const handleSwapLocation = () => {
    const locationA = locationStart;
    const searchA = searchStart;

    setLocationStart(locationEnd);
    setLocationEnd(locationA);

    setSearchStart(searchEnd);
    setSearchEnd(searchA);
  };

  const handleCloseMenu = (location: any, dataChoosoe: string) => {
    setLocationFind(location);
    setShowModalSearchFind(false);
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
        height={60}
        zIndex={1000}
        justifyContent="center"
        display="flex"
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <MenuIcon
            onClick={() => setOpenDrawable(true)}
            style={{ width: 25, color: colors.primary, marginRight: 10 }}
          />

          <TextField
            id="search-find"
            variant="standard"
            type="text"
            value={searchFind}
            onChange={(e) => {
              if (!showModalSearchFind) {
                setShowModalSearchFind(true);
              }
              setSearchFind(e.target.value);
            }}
            style={{
              borderRadius: 15,
              backgroundColor: colors.primary,
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
              ),
              endAdornment:
                searchFind.length > 0 ? (
                  <ClearIcon
                    onClick={() => setSearchFind("")}
                    style={{ width: 16, color: "white", marginRight: 5 }}
                  />
                ) : (
                  <DirectionsIcon
                    style={{ width: 16, color: "white", marginRight: 5 }}
                    onClick={() => {
                      setShowHeaderAToB(true);
                    }}
                  />
                ),

              disableUnderline: true,
              style: { fontSize: 12, color: "white" },
            }}
          />

          {/* Modal search find */}
          {showModalSearchFind ? (
            <Box
              top={65}
              left={0}
              right={0}
              width={width}
              height={height}
              position="absolute"
              zIndex={10004}
              bgcolor="rgba(236, 236, 236, 0.5)"
              display="flex"
              flex={1}
              onClick={() => setShowModalSearchFind(false)}
              // justifyItems="center"
              // alignItems="center"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                zIndex={10005}
                bgcolor={colors.white}
                borderRadius={2}
                paddingX={2}
                paddingY={1}
                width={335}
                alignSelf="center"
                marginX="auto"
              >
                {suggestSearch.map((item) => (
                  <Box
                    onClick={() => handleCloseMenu(item.coordinates, item.name)}
                    display="flex"
                    alignItems="center"
                    height={35}
                    fontSize={12}
                  >
                    <PlaceIcon
                      style={{ width: 16, color: colors.gray4, marginRight: 5 }}
                    />
                    {item.name}
                  </Box>
                ))}
                <Box
                  onClick={() => {
                    if (coords?.latitude && coords?.longitude) {
                      handleCloseMenu(
                        [coords?.latitude, coords?.longitude],
                        "Vị trí của tôi"
                      );
                    }
                  }}
                  display="flex"
                  alignItems="center"
                  height={35}
                  fontSize={12}
                >
                  <PlaceIcon
                    style={{ width: 16, color: colors.gray4, marginRight: 5 }}
                  />
                  Vị trí của tôi
                </Box>
              </Box>
            </Box>
          ) : null}

          {/* <Box right={100} height={120} zIndex={1000} position="absolute">
            {lengthRun}
          </Box> */}
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

        {/* <Marker
          icon={pointerIcon}
          position={locationFind}
          eventHandlers={{
            click: (e) => {
              // map.setView(e.target.getLatLng(), 15);
              setOpenDetailBuilding(true);
            },
          }}
        /> */}

        <OverlayImage
          locationStart={locationStart}
          locationEnd={locationEnd}
          setLengthRun={setLengthRun}
          setOpenDetailBuilding={setOpenDetailBuilding}
        />
      </MapContainer>

      {/* Floor */}
      <Box
        position="absolute"
        top={150}
        right={15}
        zIndex={10006}
        display="flex"
      >
        <Collapse orientation="horizontal" in={openLayer}>
          <Box
            bgcolor={colors.white}
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingX={1}
            height={35}
            borderRadius={10}
            fontSize={12}
            fontWeight="bold"
            marginRight={-3}
            paddingLeft={2}
          >
            Tầng
            <Box
              height={25}
              width={25}
              borderRadius={1}
              bgcolor={colors.orange8}
              display="flex"
              justifyContent="center"
              alignItems="center"
              color={colors.gray4}
              marginLeft={1}
            >
              1
            </Box>
            <Box
              height={25}
              marginLeft={1}
              marginRight={3}
              width={25}
              borderRadius={1}
              bgcolor={colors.orange8}
              display="flex"
              justifyContent="center"
              alignItems="center"
              color={colors.gray4}
            >
              2
            </Box>
          </Box>
        </Collapse>
        <Box
          sx={{
            boxShadow:
              "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
          }}
          borderRadius={100}
          bgcolor={colors.white}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={35}
          width={35}
          onClick={() => setOpenLayer(!openLayer)}
        >
          <LayersIcon style={{ width: 20, color: colors.primary }} />
        </Box>
      </Box>

      {/* Zoom in Map building */}
      <Box
        position="absolute"
        bottom={150}
        right={15}
        zIndex={10006}
        display="flex"
      >
        <Box
          sx={{
            boxShadow:
              "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
          }}
          borderRadius={100}
          bgcolor={colors.white}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={35}
          width={35}
          onClick={() => {
            map.panTo(
              new L.LatLng(
                HCM_LOCATION[0].coordinates[0],
                HCM_LOCATION[0].coordinates[1]
              )
            );
            map.setZoom(17);
          }}
        >
          <ZoomInMapIcon style={{ width: 20, color: colors.primary }} />
        </Box>
      </Box>

      {showHeaderAToB ? (
        <HeaderAToB
          setShowScreenSearchEnd={setShowScreenSearchEnd}
          valueSearchA={searchStart}
          setShowScreenSearchStart={setShowScreenSearchStart}
          valueSearchB={searchEnd}
          handleSwapLocation={handleSwapLocation}
          setShowHeaderAToB={setShowHeaderAToB}
        />
      ) : null}

      {showScreenSearchStart ? (
        <SearchScreen
          setShowScreenSearch={setShowScreenSearchStart}
          setValueSearch={setSearchStart}
          valueSearch={searchStart}
          setLocation={setLocationStart}
          coords={coords}
        />
      ) : null}

      {showScreenSearchEnd ? (
        <SearchScreen
          setShowScreenSearch={setShowScreenSearchEnd}
          setValueSearch={setSearchEnd}
          valueSearch={searchEnd}
          setLocation={setLocationEnd}
          coords={coords}
        />
      ) : null}

      <DrawableMenu
        setOpenDrawable={setOpenDrawable}
        openDrawable={openDrawable}
        setShowHeaderAToB={setShowHeaderAToB}
      />

      <DetailBuilding
        open={openDetailBuilding}
        setOpen={setOpenDetailBuilding}
        {...HCM_LOCATION[0]}
      />
    </Box>
  );
};

export default MapHcm;
