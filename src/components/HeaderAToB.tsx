import { Flag, LocationOn } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "leaflet-routing-machine";
import { FC } from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type HeaderAToBProps = {
  valueSearchA: string;
  setShowScreenSearchEnd: (showScreenSearchEnd: boolean) => void;
  valueSearchB: string;
  setShowScreenSearchStart: (showScreenSearchStart: boolean) => void;
  setShowHeaderAToB: (showHeaderAToB: boolean) => void;
  handleSwapLocation: () => void;
};

export const HeaderAToB: FC<HeaderAToBProps> = (props) => {
  const {
    valueSearchA,
    valueSearchB,
    setShowScreenSearchEnd,
    setShowScreenSearchStart,
    handleSwapLocation,
    setShowHeaderAToB,
  } = props;
  return (
    <Box
      bgcolor="orange"
      width={"100%"}
      zIndex={10001}
      position="absolute"
      top={0}
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Box
        marginLeft={1}
        marginRight={1}
        marginTop={-5}
        width={30}
        display="flex"
        justifyContent="center"
      >
        <ArrowBackIcon
          onClick={() => setShowHeaderAToB(false)}
          style={{ color: "white" }}
          height={40}
          width={30}
        />
      </Box>
      <Box flex={1} alignItems="center" marginBottom={2} marginTop={2}>
        <TextField
          id="search-start"
          variant="standard"
          type="text"
          value={valueSearchA}
          //   disabled
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
          placeholder="Nhập địa điểm bắt đầu"
          InputProps={{
            startAdornment: (
              <Flag style={{ width: 16, color: "orange", marginRight: 5 }} />
            ),
            disableUnderline: true,
            style: { fontSize: 12, color: "orange" },
          }}
          onClick={(e) => {
            setShowScreenSearchStart(true);
          }}
        />
        <TextField
          id="search-end"
          variant="standard"
          type="text"
          value={valueSearchB}
          //   disabled
          style={{
            borderRadius: 15,
            backgroundColor: "white",
            borderWidth: 0,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 10,
            height: 30,
            justifyContent: "center",
            // width: 'w',
            display: "flex",
          }}
          placeholder="Nhập địa điểm kết thúc"
          InputProps={{
            startAdornment: (
              <LocationOn
                style={{ width: 16, color: "orange", marginRight: 5 }}
              />
            ),
            disableUnderline: true,
            style: { fontSize: 12, color: "orange" },
          }}
          onClick={(e) => {
            setShowScreenSearchEnd(true);
          }}
        />
      </Box>
      <Box
        width={60}
        alignItems="center"
        marginBottom={2}
        marginTop={2}
        justifyContent="center"
      >
        <Button onClick={handleSwapLocation}>
          <SwapVertIcon style={{ color: "white" }} height={50} width={50} />
        </Button>
      </Box>
    </Box>
  );
};
