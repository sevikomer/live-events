"use client";

import React from 'react';
import {
    useMap,
    AdvancedMarker,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import { useEffect, useState, useRef, useMemo } from "react";
import Filter from './Filter.js';


type Point = google.maps.LatLngLiteral & { key: string } & { name:string } & {category:string};
type Props = { points: Point[], icon };

const Markers = ({ points, icon }: Props) => {
    
    const [open, setOpen] = useState(false);  
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