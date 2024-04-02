type RawRestauration = [string, string, number, number];

type Restauration = {
    key:string;
    name:string;
    category:string;
    lat:number;
    lng:number;
};

const restaurations: RawRestauration[] = [
    ["Restauration 1", "restauration", 48.86166941965869, 2.232097049184163],
    ["Restauration 2", "restauration", 48.857611564470915, 2.2353784973104274],
    ["Restauration 3", "restauration", 48.855675930725326, 2.230360078045841],
    ["Restauration 4", "restauration", 48.85330374961591, 2.2316611730294333],
];

const formatted: Restauration[] = restaurations.map(([name, category, lat, lng]) => ({
    name,
    category,
    lat,
    lng,
    key:JSON.stringify({name, category, lat, lng}),
}));

export default formatted;