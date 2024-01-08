/* eslint-disable no-unused-vars */
import { Room } from "@material-ui/icons";
import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

const token =
  "pk.eyJ1Ijoic291bWFyZ2hhIiwiYSI6ImNscXhkMWw3ZTA2NDkyaW8xYmQ3bDhpZ2wifQ.avqAYw1JBKU67IAxj_Doyw";

function PolicePage() {
  const [newPlace, setNewPlace] = useState(null);
  const [viewPort, setViewPort] = useState({
    latitude: 26.9124,
    longitude: 75.7873,
    zoom: 8,
  });

  function handleClick(e) {
    const { lngLat } = e;
    if (lngLat) {
      const { lat, lng } = lngLat;
      setNewPlace({
        lat: lat,
        long: lng,
      });
    }
  }

  console.log(newPlace);

  return (
    <div>
      <div
        style={{
          width: "80vw",
          height: "80vh",
          zIndex: 999,
          margin: "auto",
          position: "relative",
          paddingBottom: "15px",
          paddingTop: "20px",
        }}
      >
        <ReactMapGl
          {...viewPort}
          mapboxAccessToken={token}
          width="100%"
          height="100%"
          transitionDuration="200"
          mapStyle="mapbox://styles/soumargha/clqxeyjqb001101p57j62b9hi"
          onViewportChange={(viewPort) => setViewPort(viewPort)}
          onDblClick={handleClick}
          getCursor={({ isHovering, isDragging }) =>
            isHovering && isDragging ? "grabbing" : "crosshair"
          }
        >
          {newPlace && (
            <Marker
              latitude={newPlace.lat}
              longitude={newPlace.long}
              offsetTop={-20}
              offsetLeft={-10}
            >
              <div>
                <Room
                  style={{
                    fontSize: 14,
                    color: "tomato",
                    cursor: "pointer",
                  }}
                />
              </div>
            </Marker>
          )}
        </ReactMapGl>
      </div>
    </div>
  );
}

export default PolicePage;
