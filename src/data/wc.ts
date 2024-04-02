type RawWc = [string, string, number, number];

type Wc = {
    key:string;
    name:string;
    category:string;
    lat:number;
    lng:number;
};

const wcs: RawWc[] = [
    ["WC 1", "wc", 48.85892227519203, 2.232077827194243],
    ["WC 2", "wc", 48.85543869637124, 2.2326754299229856],
];

const formatted: Wc[] = wcs.map(([name, category, lat, lng]) => ({
    name,
    category,
    lat,
    lng,
    key:JSON.stringify({name, category, lat, lng}),
}));

export default formatted;