import { Marker, Popup } from "react-map-gl/maplibre";
import { useState, useCallback, useMemo } from "react";

interface CustomMarkerProps {
  longitude: number;
  latitude: number;
  size?: number;
  iconSrc?: string;
  popupText?: string;
}

export default function CustomMarker({
  longitude,
  latitude,
  size = 40,
  iconSrc,
  popupText,
}: CustomMarkerProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = useCallback(() => {
    setShowPopup((prev) => !prev);
  }, []);

  const markerStyle = useMemo(
    () => ({
      width: size,
      height: size,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.2s",
      overflow: "hidden",
    }),
    [size],
  );

  return (
    <>
      <Marker longitude={longitude} latitude={latitude} anchor="center">
        <div
          onClick={handleClick}
          style={markerStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {iconSrc ? (
            <img
              src={iconSrc}
              alt="Marker Icon"
              style={{ width: "100%", height: "100%" }}
            />
          ) : null}
        </div>
      </Marker>

      {showPopup && popupText && (
        <Popup
          longitude={longitude}
          latitude={latitude}
          onClose={() => setShowPopup(false)}
        >
          <div className="">{popupText}</div>
        </Popup>
      )}
    </>
  );
}
