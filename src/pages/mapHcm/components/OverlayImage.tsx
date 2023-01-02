import L, { Control, IconOptions, LatLngBoundsExpression } from "leaflet";
import "leaflet-routing-machine";
import { FC, useEffect, useRef } from "react";
import { ImageOverlay, useMap } from "react-leaflet";
import { HCM_LOCATION } from "../../../ultils";

type OverLayProps = {
  locationEnd: any;
  locationStart: any;
  setLengthRun: any;
  setOpenDetailBuilding: (openDetailBuilding: boolean) => void;
};

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
  setOpenDetailBuilding,
}) => {
  const map = useMap();
  const routeControl = useRef<Control>();

  useEffect(() => {
    const iconOptions: IconOptions = {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/5193/5193743.png",
      iconSize: [50, 50],
    };

    const markerOptions = {
      title: "MyLocation",
      clickable: true,
      draggable: true,
      icon: L.icon(iconOptions),
    };

    L.marker(
      [HCM_LOCATION[0].coordinates[0], HCM_LOCATION[0].coordinates[1]],
      markerOptions
    )
      .addTo(map)
      .addEventListener("click", (e) => setOpenDetailBuilding(true));

    L.marker(
      [HCM_LOCATION[1].coordinates[0], HCM_LOCATION[1].coordinates[1]],
      markerOptions
    )
      .addTo(map)
      .addEventListener("click", (e) => setOpenDetailBuilding(true));

    L.marker(
      [HCM_LOCATION[2].coordinates[0], HCM_LOCATION[2].coordinates[1]],
      markerOptions
    )
      .addTo(map)
      .addEventListener("click", (e) => setOpenDetailBuilding(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        // lineOptions: {
        //   styles: [{ color: "orange", opacity: 1, weight: 5 }],
        // },
        routeWhileDragging: true,
        addWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
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
                iconSize: [40, 40],
              };

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

      let routingControlContainer = routeControl.current.getContainer();
      let controlContainerParent = routingControlContainer?.parentNode;
      routingControlContainer &&
        controlContainerParent?.removeChild(routingControlContainer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default OverlayImage;
