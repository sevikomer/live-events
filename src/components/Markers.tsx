import React from 'react';
import {
    useMap,
    AdvancedMarker,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import { useEffect, useState, useRef, useCallback } from "react";

type Point = google.maps.LatLngLiteral & { key: string } & { name:string } & {category:string};
type Props = {
  selectedCategory: string;
  onSelect(category:string):void;
  points: Point[];
  icon 
};

const Markers = ({ selectedCategory, points, icon}: Props ) => {
    
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

  const setMarkerRef = useCallback((marker: Marker | null, key: string) => {
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
  });

  const filteredList = selectedCategory
  ? points.filter((point) => point.category.includes(selectedCategory))
  : points;
  /*const [selectedCategories, setSelectedCategories] = useState(points);
  const filteredList = useMemo(getFilteredList, [selectedCategories, icon, open, setMarkerRef, points]);*/



  return (
    <> 
      {filteredList.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
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
}

export default Markers