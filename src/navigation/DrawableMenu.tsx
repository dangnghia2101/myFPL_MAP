import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import "leaflet-routing-machine";
import { FC } from "react";
import { colors } from "../themes";
import { getWindowDimensions } from "../ultils";
import DirectionsIcon from "@mui/icons-material/Directions";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LocationCityIcon from "@mui/icons-material/LocationCity";

type DrawableMenuProps = {
  setOpenDrawable: (openDrawable: boolean) => void;
  openDrawable: boolean;
  setShowHeaderAToB: (showHeaderAToB: boolean) => void;
};

export const DrawableMenu: FC<DrawableMenuProps> = (props) => {
  const { setOpenDrawable, openDrawable, setShowHeaderAToB } = props;
  const { width } = getWindowDimensions();
  return (
    <Drawer
      anchor="left"
      open={openDrawable}
      onClose={() => setOpenDrawable(false)}
    >
      {/*  */}
      <Box width={width > 300 ? 300 : width * 0.8}>
        <Box
          display="flex"
          alignItems="center"
          borderBottom={1}
          borderColor={colors.gray14}
          paddingTop={2}
          paddingBottom={2}
          paddingLeft={2}
        >
          <img
            src="https://www.freeiconspng.com/thumbs/bee-png/best-free-bee-png-image-5.png"
            style={{ width: 50 }}
          />
          <Box
            fontSize={18}
            fontWeight="bold"
            color={colors.primary}
            marginTop={2}
            marginLeft={1}
          >
            poly
          </Box>
          <Box
            fontSize={25}
            fontWeight="bold"
            color={colors.primary}
            marginTop={2}
          >
            Fly
          </Box>
        </Box>
        <Box
          display="flex"
          borderBottom={1}
          borderColor={colors.gray14}
          paddingTop={2}
          paddingBottom={2}
          paddingLeft={3}
          flexDirection="column"
        >
          <Box fontSize={14} fontWeight="bold" color={colors.gray8} flex={1}>
            Tính năng
          </Box>
          <Box
            fontSize={13}
            fontWeight="medium"
            color={colors.gray3}
            marginTop={1}
            alignItems="center"
            display="flex"
            onClick={() => {
              setShowHeaderAToB(true);
              setOpenDrawable(false);
            }}
          >
            <DirectionsIcon
              style={{ width: 16, color: colors.gray3, marginRight: 5 }}
            />
            Dẫn đường
          </Box>

          <Box
            fontSize={13}
            fontWeight="medium"
            color={colors.gray3}
            marginTop={1}
            alignItems="center"
            display="flex"
          >
            <TravelExploreIcon
              style={{ width: 16, color: colors.gray3, marginRight: 5 }}
            />
            Khám phá FPY POLYTECHNIC
          </Box>
        </Box>

        <Box
          display="flex"
          borderBottom={1}
          borderColor={colors.gray14}
          paddingTop={2}
          paddingBottom={2}
          paddingLeft={3}
          flexDirection="column"
        >
          <Box fontSize={14} fontWeight="bold" color={colors.gray8} flex={1}>
            Cơ sở
          </Box>
          <Box
            fontSize={13}
            fontWeight="medium"
            color={colors.gray3}
            marginTop={1}
            alignItems="center"
            display="flex"
          >
            <LocationCityIcon
              style={{ width: 16, color: colors.red1, marginRight: 5 }}
            />
            Hà Nội
          </Box>

          <Box
            fontSize={13}
            fontWeight="medium"
            color={colors.gray3}
            marginTop={1}
            alignItems="center"
            display="flex"
          >
            <LocationCityIcon
              style={{ width: 16, color: colors.oceanBlue, marginRight: 5 }}
            />
            Hồ Chí Minh
          </Box>
          <Box
            fontSize={13}
            fontWeight="medium"
            color={colors.gray3}
            marginTop={1}
            alignItems="center"
            display="flex"
          >
            <LocationCityIcon
              style={{ width: 16, color: colors.orange1, marginRight: 5 }}
            />
            Đà Nẵng
          </Box>
          <Box
            fontSize={13}
            fontWeight="medium"
            color={colors.gray3}
            marginTop={1}
            alignItems="center"
            display="flex"
          >
            <LocationCityIcon
              style={{ width: 16, color: colors.green1, marginRight: 5 }}
            />
            Cần Thơ
          </Box>
          <Box
            fontSize={13}
            fontWeight="medium"
            color={colors.gray3}
            marginTop={1}
            alignItems="center"
            display="flex"
          >
            <LocationCityIcon
              style={{ width: 16, color: colors.gray3, marginRight: 5 }}
            />
            Tây Nguyên
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};
