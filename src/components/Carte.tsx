import React from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import {useState} from "react";
import Markers from './Markers.tsx';
import Filter from './Filter.js';
import scenes from "../data/scenes.ts";
import wc from "../data/wc.ts";
import shop from "../data/shop.ts";
import restaurant from "../data/restauration.ts";
import buvette from "../data/buvette.ts";

type Point = google.maps.LatLngLiteral & { key: string } & { name:string } & {category:string};
type Props = {
  onSelect(category:string):void;
  points: Point[];
};

const Carte = ({ onSelect, points}: Props ) => {
   
    const [selectedCategory, setSelectedCategory] = useState("");

    const position = { lat: 48.862117, lng: 2.237992 };
    const [open, setOpen] = useState(false);
//     const splitCategory = points?.flatMap((point) => point.category.split("|"));
//   const categories = Array.from(new Set(splitCategory))


function getFilteredList() {
    if (selectedCategory?.length === 0) {
      return <Markers 
      selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                            points={points} 
                            icon={icon} />
      };
    return points.filter((point) => point.category.includes(selectedCategory));
  };

  const updateSelectedCategories = (points:Point[]) => {
    if (points.find((category) => category === points.category)) {
      const updatedCategories = selectedCategory.filter((category) => category !== points.category);
      setSelectedCategory(updatedCategories);
    } else {
      setSelectedCategory([...selectedCategory, points]);
    }
  }

  const resetSelectedCategories = () => {
    setSelectedCategory("");
  };

    return (
        <>
            <div className='text-white bg-black p-8'>
                <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2'>CARTE INTERACTIVE</h1>
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
                            <Markers 
                            selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                            points={scenes} 
                            icon='🎶' />
                            <Markers
                            selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory} 
                            points={wc}
                            icon='🚾' />
                            <Markers 
                            selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                            points={shop} 
                            icon='🛒' />
                            <Markers 
                            selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                            points={restaurant} 
                            icon='🍴' />
                            <Markers 
                            selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                            points={buvette} 
                            icon='🍹' />
                        </Map>
                    </div>
                </APIProvider>
            </div> 
            </div>
    
        </>
    );
};

export default Carte;