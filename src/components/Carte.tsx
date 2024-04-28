import React from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import Markers from './Markers.tsx';
import Filter from './Filter.js';
import scenes from "../data/scenes.ts";
import wc from "../data/wc.ts";
import shop from "../data/shop.ts";
import restaurant from "../data/restauration.ts";
import buvette from "../data/buvette.ts";

type Point = google.maps.LatLngLiteral & { key: string } & { name:string } & {category:string};
type Props = {
  points: Point[];
};

const MARKERS_OPTIONS = [
    {
        points: scenes, 
        icon: "🎶" ,
    },
    {
        points: wc, 
        icon: "🚾" ,
    },
    {
        points: shop, 
        icon: "🛒" ,
    },
    {
        points: restaurant, 
        icon: "🍴" ,
    },
    {
        points: buvette, 
        icon: "🍹" ,
    },
];

const Carte = ({points}: Props ) => {
   
const [selectedCategory, setSelectedCategory] = useState([]);
const position = { lat: 48.86, lng: 2.237992 };
const [open, setOpen] = useState(false);


const updateSelectedCategories = (points : never) => {
  if (selectedCategory.find((category) => category === points)) {
    const updatedCategories = selectedCategory.filter((category) => category !== points);
         setSelectedCategory(updatedCategories);
     } else {
        setSelectedCategory([...selectedCategory, points]);
     }
 }

  const resetSelectedCategories = () => {
    setSelectedCategory([]);
  };

    return (
        <>
            <div className='text-orange bg-black p-8'>
                <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase'>carte interactive</h1>
            </div>
            <div className=''>
           <Filter setSelectedCategory={updateSelectedCategories}
           selectedCategory={selectedCategory}
           resetSelectedCategories={resetSelectedCategories}/>
                    <div>
                <APIProvider apiKey={'AIzaSyCX1gIY8TBO0lKODgdYnD2hZFMDNx76bsA'}>
                    <div style={{ height: "100vh", width: "100%"}}>
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
                            {
                            MARKERS_OPTIONS.map((option) => (
                                <Markers
                                selectedCategory={selectedCategory}
                                onSelect={updateSelectedCategories}
                                points={option.points}
                                icon={option.icon}
                                />
                            ))
                            }
                        </Map>
                    </div>
                </APIProvider>
            </div> 
            </div>
    
        </>
    );
};

export default Carte;