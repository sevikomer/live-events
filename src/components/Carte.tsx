"use client";

import React from 'react';
import {
    APIProvider,
    Map,
    useMap,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import { useEffect, useState, useRef, useMemo } from "react";
import Filter from './Filter.js';
import scenes from "../data/scenes.ts";
import wc from "../data/wc.ts";
import shop from "../data/shop.ts";
import restaurant from "../data/restauration.ts";
import buvette from "../data/buvette.ts";


export default function Carte() {
    const position = { lat: 48.862117, lng: 2.237992 };
    const [open, setOpen] = useState(false);

    type Point = google.maps.LatLngLiteral & { key: string } & { name:string } & {category:string};
    type Props = { points: Point[], icon };

const Markers = ({ points, icon }: Props) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const filteredList = useMemo(getFilteredList, [selectedCategories, points, icon]);

  function getFilteredList() {
    if (selectedCategories?.length === 0) {
      return < Markers points={points} icon={icon} />;
    } 
    return points.filter((points) => (points.category.includes(selectedCategories)));
  }

  const updateSelectedCategories = (value) => {
    if (selectedCategories.find((category) => category === value)) {
        const updatedCategories = selectedCategories.filter((category) => category !== value);
        setSelectedCategories(updatedCategories);
    } else {
        setSelectedCategories([...selectedCategories, value]);
    }
}

const resetSelectedCategories = () => {
    setSelectedCategories([]);
}

  return (
    <>
    <div>
                <Filter 
                    filteredList={filteredList}
                    setSelectedCategories={updateSelectedCategories}
                    resetSelectedCategories={resetSelectedCategories}
                    selectedCategories={selectedCategories}
                    />
            </div>
      {points.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
          name={point.name}
          ref={(marker) => setMarkerRef(marker, point.key)}
          onClick={() => setOpen(true)}
        >
          <span style={{ fontSize: "1.5rem" }}>{icon}</span>
          {open && (
            <InfoWindow position={point} onCloseClick={() => setOpen(false)}>
                <p>{point.name}</p>
            </InfoWindow>
            )}
        </AdvancedMarker>
      ))
      }

    </>
  );
};

    return (
        <>
            <div className='text-white bg-black p-8'>
                <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2'>CARTE INTERACTIVE</h1>
            </div>
            <div>
                <APIProvider apiKey={'AIzaSyCX1gIY8TBO0lKODgdYnD2hZFMDNx76bsA'}>
                    <div style={{ height: "100vh", width: "100%" }}>
                        <Map zoom={15} center={position} mapId={'ca193f28f30fec32'}>
                            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                                <Pin
                                    background={"grey"}
                                    borderColor={"green"}
                                    glyphColor={"blue"}
                                />
                            </AdvancedMarker>
                            {open && (
                                <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                                    <p>Vous êtes ici au Nation Sound</p>
                                </InfoWindow>
                            )}
                            <Markers points={scenes} icon='🎶' />
                            <Markers points={wc} icon='🚾' />
                            <Markers points={shop} icon='🛒' />
                            <Markers points={restaurant} icon='🍴' />
                            <Markers points={buvette} icon='🍹' />
                        </Map>
                    </div>
                </APIProvider>
            </div>

        </>
    );
};