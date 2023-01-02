import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HistoryIcon from "@mui/icons-material/History";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "leaflet-routing-machine";
import { FC, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { colors } from "../themes";
import { HCM_LOCATION } from "../ultils/coordinatesFPOLY";

type SearchScreenProps = {
  valueSearch: string;
  setValueSearch: (valueSearch: string) => void;
  setShowScreenSearch: (showScreenSearch: boolean) => void;
  setLocation: (location: any) => void;
  coords: GeolocationCoordinates;
};

type ItemHistoryProps = {
  text: string;
  key?: number;
  isHistory?: boolean;
  setValueSearch: (valueSearch: string) => void;
  setShowScreenSearch: (showScreenSearch: boolean) => void;
  setLocation: (location: any) => void;
  coordinates: number[];
};

const data = [
  {
    key: 1,
    text: "Toà nhà F",
    coordinates: [10.852916504306314, 106.62954760810882],
  },
  {
    key: 1,
    text: "Toà nhà P",
    coordinates: [10.852916504306314, 106.62954760810882],
  },
  {
    key: 1,
    text: "Toà nhà T",
    coordinates: [10.852916504306314, 106.62954760810882],
  },
];

const ItemHistory: FC<ItemHistoryProps> = (props) => {
  const {
    text,
    isHistory,
    setValueSearch,
    setShowScreenSearch,
    setLocation,
    coordinates,
  } = props;
  return (
    <Button
      onClick={() => {
        setValueSearch(text);
        setShowScreenSearch(false);
        setLocation(coordinates);
      }}
      color="warning"
      style={{ display: "flex", width: "100%" }}
    >
      <Box
        paddingTop={1}
        paddingBottom={1}
        display="flex"
        alignItems="center"
        borderBottom={1}
        borderColor={colors.gray15}
        width="100%"
      >
        {isHistory ? (
          <HistoryIcon style={{ width: 16, color: colors.gray3 }} />
        ) : (
          <LocationOnIcon style={{ width: 16, color: colors.gray3 }} />
        )}

        <Box color={colors.gray3} marginLeft={1} fontSize={12}>
          {text}
        </Box>
      </Box>
    </Button>
  );
};

export const SearchScreen: FC<SearchScreenProps> = (props) => {
  const { setLocation, setValueSearch, setShowScreenSearch, coords } = props;
  const [search, setSearch] = useState("");
  const [suggestSearch, setSuggestSearch] = useState(HCM_LOCATION);
  const debouncedValue = useDebounce<string>(search, 300);

  useEffect(() => {
    const filterData = HCM_LOCATION.filter((item) =>
      item.name.toLowerCase().includes(debouncedValue.toLowerCase())
    );
    setSuggestSearch(filterData);
  }, [debouncedValue]);

  return (
    <Box
      bgcolor="white"
      width={"100%"}
      height="100%"
      zIndex={10002}
      position="absolute"
      top={0}
      display="flex"
      flexDirection="column"
    >
      <Box
        bgcolor="orange"
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={2}
        paddingRight={2}
      >
        <Box flex={1} alignItems="center">
          <TextField
            id="search-start"
            variant="standard"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              borderRadius: 15,
              backgroundColor: "white",
              borderWidth: 0,
              paddingLeft: 10,
              paddingRight: 10,
              height: 30,
              justifyContent: "center",
              // width: 300,
              display: "flex",
              flex: 1,
            }}
            placeholder="Nhập địa điểm tìm kiếm"
            InputProps={{
              startAdornment: (
                <ArrowBackIosIcon
                  onClick={() => {
                    setShowScreenSearch(false);
                  }}
                  style={{ width: 16, color: "orange", marginRight: 5 }}
                />
              ),
              endAdornment: (
                <HighlightOffIcon
                  style={{ width: 16, color: "orange", marginRight: 5 }}
                />
              ),
              disableUnderline: true,
              style: { fontSize: 12, color: "orange" },
            }}
            onClick={(e) => {
              console.log("CLICK NE");
              //   handleClick(e, 3);
            }}
          />
          {search.length === 0 ? (
            <>
              <Box
                onClick={() => {
                  setValueSearch("Vị trí của bạn");
                  setShowScreenSearch(false);
                  setLocation([coords?.latitude, coords?.longitude]);
                }}
                marginTop={2}
                flexDirection="row"
                display="flex"
                alignItems="center"
              >
                <Box
                  bgcolor="white"
                  width={25}
                  height={25}
                  borderRadius={100}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                >
                  <LocationOnIcon style={{ width: 16, color: "orange" }} />
                </Box>
                <Box marginLeft={1} fontSize={12} color={colors.white}>
                  Vị trí của bạn
                </Box>
              </Box>

              <Box
                marginTop={2}
                flexDirection="row"
                display="flex"
                alignItems="center"
              >
                <Box
                  bgcolor="white"
                  width={25}
                  height={25}
                  borderRadius={100}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                >
                  <MapIcon style={{ width: 16, color: "orange" }} />
                </Box>
                <Box marginLeft={1} fontSize={12} color={colors.white}>
                  Chọn trên bản đồ
                </Box>
              </Box>
            </>
          ) : null}
        </Box>
      </Box>

      <Box paddingLeft={2} paddingTop={2} paddingRight={2}>
        {search.length === 0 ? (
          <>
            <Box color={colors.primary} fontWeight="bold" fontSize={14}>
              Lịch sử
            </Box>
            <Box>
              {data?.map((item) => (
                <ItemHistory
                  text={item.text}
                  key={item?.key}
                  isHistory={true}
                  setValueSearch={setValueSearch}
                  setShowScreenSearch={setShowScreenSearch}
                  setLocation={setLocation}
                  coordinates={item.coordinates}
                />
              ))}
            </Box>
          </>
        ) : null}

        {search.length > 0 ? (
          <>
            <Box color={colors.primary} fontWeight="bold" fontSize={14}>
              Gợi ý
            </Box>
            <Box>
              {suggestSearch?.map((item) => (
                <ItemHistory
                  text={item.name}
                  isHistory={false}
                  setValueSearch={setValueSearch}
                  setShowScreenSearch={setShowScreenSearch}
                  setLocation={setLocation}
                  coordinates={item.coordinates}
                />
              ))}
            </Box>
          </>
        ) : null}
      </Box>
    </Box>
  );
};
