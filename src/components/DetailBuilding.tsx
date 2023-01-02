import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import "leaflet-routing-machine";
import { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BottomSheet } from "react-spring-bottom-sheet";
import { getWindowDimensions } from "../ultils";
import { colors } from "../themes";
import DirectionsIcon from "@mui/icons-material/Directions";

type DetailBuildingProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
  name?: string;
  describtion?: string;
};

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

const responsive = {
  2000: {
    items: 10,
    itemsFit: "fit",
  },
  800: {
    items: 5,
    itemsFit: "fit",
  },
  300: {
    items: 3,
    itemsFit: "fit",
  },
  0: {
    items: 1,
    itemsFit: "fit",
  },
};

export const DetailBuilding: FC<DetailBuildingProps> = (props) => {
  const { setOpen, open, name, describtion } = props;
  const { width } = getWindowDimensions();

  return (
    <BottomSheet
      open={open}
      onDismiss={() => setOpen(false)}
      snapPoints={({ minHeight }) => minHeight}
    >
      <Box paddingX={1}>
        <Slide appear={false} direction="right" in={true}>
          <AliceCarousel mouseTracking responsive={responsive}>
            {itemData.map((item) => (
              <Box paddingRight={10}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    height: 150,
                    width:
                      width < 300
                        ? width * 0.8
                        : width < 800
                        ? width * 0.3
                        : width < 2000
                        ? width * 0.15
                        : width * 0.09,
                    borderRadius: 10,
                  }}
                />
              </Box>
            ))}
          </AliceCarousel>
        </Slide>

        <Box color={colors.gray4} fontWeight="bold" fontSize={16}>
          {name}
        </Box>
        <Box color={colors.gray4} fontWeight="medium" fontSize={14}>
          {describtion}
        </Box>

        <Box
          bgcolor={colors.primary}
          borderRadius={10}
          color={colors.white}
          fontWeight="bold"
          fontSize={14}
          paddingX={2}
          paddingY={1}
          width="auto"
          marginY={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DirectionsIcon
            style={{ width: 20, color: colors.white, marginRight: 10 }}
          />
          Dẫn đường
        </Box>
      </Box>
    </BottomSheet>
  );
};
