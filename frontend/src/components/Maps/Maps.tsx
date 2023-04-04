import React from "react";
import styled from "@emotion/styled";

//container that holds the map data
const MapContainer = styled.div({
  width: "379px",
  height: "655px",
  radius: "10px",
});

const Maps = () => {
  return (
    <MapContainer>
      <img
        style={{
          width: "379px",
          height: "655px",
          borderRadius: "10px",
          objectFit: "cover",
        }}
        src="/map_image.png"
        alt="Map image"
      />
    </MapContainer>
  );
};

export default Maps;
