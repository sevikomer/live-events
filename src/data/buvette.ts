type RawBuvette= [string, string, number, number];

type Buvette = {
    key:string;
    name:string;
    category:string;
    lat:number;
    lng:number;
};

const buvettes: RawBuvette[] = [
    ["Buvette 1", "buvette", 48.854809509294725, 2.231021733352545],
    ["Buvette 2", "buvette", 48.86112547271567, 2.2319943928066843],
    ["Buvette 3", "buvette", 48.8588365635834, 2.235791839676562],
];

const formatted: Buvette[] = buvettes.map(([name, category, lat, lng]) => ({
    name,
    category,
    lat,
    lng,
    key:JSON.stringify({name, category, lat, lng}),
}));

export default formatted;