import React, { useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import Markers from "./Markers.tsx";
import Filter from "./Filter.js";
import axios from "axios";

type Point = google.maps.LatLngLiteral & { key: string } & { name: string } & {
  category: string;
};
type Props = {
  points: Point[];
};

type MarkerOptions = { points: Point[]; icon: String }[];

const Carte = ({ points }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const position = { lat: 48.86, lng: 2.237992 };
  const [open, setOpen] = useState(false);

  const [markerOptions, setMarkerOptions] = useState<MarkerOptions>();

  useEffect(() => {
    const initMap = async () => {
      const resVenues = await axios.get(
        `https://${process.env.REACT_APP_WP_API_URL}/wp-json/tribe/events/v1/venues/?per_page=16`
      );

      const formattedVenues = resVenues?.data?.venues?.map((v) => {
        return {
          category: v.zip,
          lat: !isNaN(v.address) ? +v.address : 0,
          lng: !isNaN(v.city) ? +v.city : 0,
          name: v.venue,
          key: JSON.stringify({
            name: v.venue,
            category: v.zip,
            lat: !isNaN(v.address) ? +v.address : 0,
            lng: !isNaN(v.city) ? +v.city : 0,
          }),
        };
      });
      const scene = formattedVenues.filter((v) => v.category === "scene");
      const wc = formattedVenues.filter((v) => v.category === "wc");
      const shop = formattedVenues.filter((v) => v.category === "shop");
      const restauration = formattedVenues.filter(
        (v) => v.category === "restauration"
      );
      const buvette = formattedVenues.filter((v) => v.category === "buvette");

      setMarkerOptions([
        {
          points: scene,
          icon: "🎶",
        },
        {
          points: wc,
          icon: "🚾",
        },
        {
          points: shop,
          icon: "🛒",
        },
        {
          points: restauration,
          icon: "🍴",
        },
        {
          points: buvette,
          icon: "🍹",
        },
      ]);
    };
    initMap();
  }, []);

  const updateSelectedCategories = (points: never) => {
    if (selectedCategory.find((category) => category === points)) {
      const updatedCategories = selectedCategory.filter(
        (category) => category !== points
      );
      setSelectedCategory(updatedCategories);
    } else {
      setSelectedCategory([...selectedCategory, points]);
    }
  };

  const resetSelectedCategories = () => {
    setSelectedCategory([]);
  };

  return (
    <>
      <div className="text-orange p-8 bg-black">
        <h1 className="lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase ">
          carte interactive
        </h1>
      </div>
      <div className="">
        <Filter
          setSelectedCategory={updateSelectedCategories}
          selectedCategory={selectedCategory}
          resetSelectedCategories={resetSelectedCategories}
        />
        <div>
          <APIProvider apiKey={"AIzaSyCX1gIY8TBO0lKODgdYnD2hZFMDNx76bsA"}>
            <div style={{ height: "100vh", width: "100%" }}>
              <Map zoom={15} center={position} mapId={"ca193f28f30fec32"}>
                <AdvancedMarker
                  position={position}
                  onClick={() => setOpen(true)}
                >
                  <Pin
                    background={"grey"}
                    borderColor={"green"}
                    glyphColor={"blue"}
                  />
                </AdvancedMarker>
                {open && (
                  <InfoWindow
                    position={position}
                    onCloseClick={() => setOpen(false)}
                  >
                    <p>Vous êtes ici au Nation Sound</p>
                  </InfoWindow>
                )}
                {markerOptions?.map((option, index) => (
                  <Markers
                    key={`markers-cat-${index}`}
                    selectedCategory={selectedCategory}
                    onSelect={updateSelectedCategories}
                    points={option.points}
                    icon={option.icon}
                  />
                ))}
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
    </>
  );
};

export default Carte;
