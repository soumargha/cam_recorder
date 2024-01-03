/* eslint-disable no-unused-vars */
import { Room } from "@material-ui/icons";
import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

const token =
  "pk.eyJ1Ijoic291bWFyZ2hhIiwiYSI6ImNscXhkMWw3ZTA2NDkyaW8xYmQ3bDhpZ2wifQ.avqAYw1JBKU67IAxj_Doyw";

function PolicePage() {
  const [newPlace, setNewPlace] = useState(null);
  const [viewPort, setviewPort] = useState({
    latitude: 28.6448,
    longitude: 77.216,
    zoom: 8,
  });



function handleClick(e) {
  const { lng, lat } = e.lngLat || {};
  
  if (lng && lat) {
    setNewPlace({
      lat,
      long: lng,
    });
  }
}


  return (
    <div>
      <form className="mt-4">
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            All categories{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mockups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logos
                </button>
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      {/* Leaflet Map in a Box */}

      <div style={{ width: "100vw", height: "100vh", zIndex: 999 }}>
        <ReactMapGl
          {...viewPort}
          mapboxAccessToken={token}
          width="100%"
          height="100%"
          transitionDuration="200"
          mapStyle="mapbox://styles/soumargha/clqxeyjqb001101p57j62b9hi"
          onViewportChange={(viewPort) => setviewPort(viewPort)}
          onDblClick={handleClick}
        >
          {newPlace ? (
            <>
              <Marker
                latitude={newPlace?.lat}
                longitude={newPlace?.long}
                offsetTop={-20}
                offsetLeft={-10}
              >
                <Room
                  style={{
                    fontSize: 20,
                    color: "tomato",
                    cursor: "pointer",
                  }}
                />
              </Marker>
            </>
          ) : null}
        </ReactMapGl>
      </div>
    </div>
  );
}

export default PolicePage;
