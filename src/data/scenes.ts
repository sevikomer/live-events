type RawScene = [string, string, number, number];

type Scene = {
    key:string;
    name:string;
    category:string;
    lat:number;
    lng:number;
};

const scenes: RawScene[] = [
    ["Scène 1", "scene", 48.862567934734884, 2.2325034009802547],
    ["Scène 2", "scene", 48.861391464821985, 2.236034700131828],
    ["Scène 3", "scene", 48.85786635740332, 2.2309550575939907],
    ["Scène 4", "scene", 48.85703977485524, 2.2359803690941593],
    ["Scène 5", "scene", 48.853694581968135, 2.2337167140205327],
];

const formatted: Scene[] = scenes.map(([name, category, lat, lng]) => ({
    name,
    category,
    lat,
    lng,
    key:JSON.stringify({name, category, lat, lng}),
}));

export default formatted;