type RawShop = [string, string, number, number];

type Shop = {
    key:string;
    name:string;
    category:string;
    lat:number;
    lng:number;
};

const shops: RawShop[] = [
    ["Shop 1", "shop", 48.859978793687404, 2.230922229326846],
    ["Shop 2", "shop", 48.85972821571346, 2.2359561986821275],
];

const formatted: Shop[] = shops.map(([name, category, lat, lng]) => ({
    name,
    category,
    lat,
    lng,
    key:JSON.stringify({name, category, lat, lng}),
}));

export default formatted;