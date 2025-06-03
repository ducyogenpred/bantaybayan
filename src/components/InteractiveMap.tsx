import Map, { NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import CustomMarker from "./CustomMarker";
import snatchingYellow from "../assets/snatching-yellow.svg";
import snatchingOrange from "../assets/snatching-orange.svg";
import snatchingRed from "../assets/snatching-red.svg";
import pickpocketOrange from "../assets/pickpocket-orange.svg";
import hazardYellow from "../assets/hazard-yellow.svg";

export const InteractiveMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: 121.023415,
        latitude: 14.550556,
        zoom: 17,
        pitch: 20,
      }}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=Dzm0n2s5xNv2pF6cdQGS"
      attributionControl={false}
    >
      <NavigationControl />
      <CustomMarker
        longitude={121.023415}
        latitude={14.550556}
        iconSrc={snatchingYellow}
        popupText=""
      />
      <CustomMarker
        longitude={121.022915}
        latitude={14.550976}
        iconSrc={snatchingOrange}
        popupText=""
      />
      <CustomMarker
        longitude={121.025115}
        latitude={14.550276}
        iconSrc={snatchingRed}
        popupText=""
      />
      <CustomMarker
        longitude={121.023115}
        latitude={14.551886}
        iconSrc={hazardYellow}
        popupText=""
      />
      <CustomMarker
        longitude={121.025015}
        latitude={14.549236}
        iconSrc={pickpocketOrange}
        popupText=""
      />
    </Map>
  );
};
