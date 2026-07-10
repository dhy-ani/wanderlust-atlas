// Rich destination content for the detail panel. Coordinates/airport codes are
// authoritative in the backend (backend/data/destinations.json) and merged in at
// runtime; this file holds the descriptive content the UI renders.
export const DESTINATIONS = [
  { id: 'chongqing', name: 'Chongqing', country: 'China', lat: 29.563, lng: 106.5516,
    tagline: 'The mountain city that glows like a sci-fi film set at night.',
    bestTime: 'Mar–May, Sep–Nov', days: 3, budgetLow: 60, budgetHigh: 90, airport: 'CKG',
    attractions: [
      { name: 'Hongyadong', desc: '11-story stilt complex lit up gold above the river.' },
      { name: 'Ciqikou Ancient Town', desc: 'Ming-dynasty river town, stone lanes, tea houses.' },
      { name: 'Yangtze River Cableway', desc: 'Cross the river suspended in a vintage cable car.' },
      { name: 'Eling Park', desc: 'Best panoramic skyline view, especially at dusk.' }],
    activities: ['Night river cruise', 'Hotpot cooking class', 'Ride the cable car', 'Explore the "8D" overpasses'],
    famous: ['Numbing-spicy hotpot', 'Monorail through a building (Liziba)', 'Maze-like 8D roads'] },

  { id: 'hawaii', name: 'Hawaiian Mountains', country: 'USA · Big Island', lat: 19.8968, lng: -155.5828,
    tagline: 'Stargazing above the clouds on the tallest mountain on Earth (base to peak).',
    bestTime: 'Apr–Jun, Sep–Oct', days: 5, budgetLow: 150, budgetHigh: 250, airport: 'KOA',
    attractions: [
      { name: 'Mauna Kea Summit', desc: 'Sunset above the clouds, then world-class stargazing.' },
      { name: 'Waipio Valley Lookout', desc: 'Dramatic cliff-lined valley, black sand below.' },
      { name: 'Kilauea / Volcanoes NP', desc: 'Walk a crater rim beside an active volcano.' },
      { name: 'Akaka Falls', desc: '442-ft waterfall on an easy rainforest loop.' }],
    activities: ['Summit stargazing tour', 'Hike the Kilauea crater rim', 'Helicopter volcano tour', 'Snorkel Kealakekua Bay'],
    famous: ['Tallest mountain base-to-peak', 'Active shield volcanoes', 'Astronomical observatories'] },

  { id: 'italy', name: 'Italy', country: 'Rome · Florence · Venice', lat: 41.9028, lng: 12.4964,
    tagline: 'An ancient empire with an espresso in one hand and gelato in the other.',
    bestTime: 'Apr–Jun, Sep–Oct', days: 10, budgetLow: 120, budgetHigh: 200, airport: 'FCO',
    attractions: [
      { name: 'Colosseum & Roman Forum', desc: 'Walk the arena floor of the gladiators.' },
      { name: 'Vatican & Sistine Chapel', desc: "Michelangelo's ceiling, up close." },
      { name: 'Trevi Fountain', desc: 'Toss a coin to guarantee your return to Rome.' },
      { name: 'Uffizi & the Duomo', desc: 'Renaissance masterworks and a rust-red skyline.' },
      { name: 'Venice & Amalfi Coast', desc: 'Gondola rides and cliffside pastel towns.' }],
    activities: ['Colosseum underground tour', 'Sunset gondola ride', 'Pasta & pizza class', 'Tuscany wine tasting'],
    famous: ['Renaissance art', 'Gelato & espresso culture', 'The Trevi coin toss'] },

  { id: 'paris', name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522,
    tagline: 'The city of light, one croissant at a time.',
    bestTime: 'Apr–Jun, Sep–Oct', days: 5, budgetLow: 130, budgetHigh: 220, airport: 'CDG',
    attractions: [
      { name: 'Eiffel Tower', desc: 'Sparkles for 5 minutes on the hour after dark.' },
      { name: 'The Louvre', desc: 'Home of the Mona Lisa and 35,000 other works.' },
      { name: 'Notre-Dame & Île de la Cité', desc: 'The historic heart of the city.' },
      { name: 'Montmartre & Sacré-Cœur', desc: "Artists' quarter with the best skyline view." },
      { name: 'Palace of Versailles', desc: 'A day trip into pure royal excess.' }],
    activities: ['Seine river cruise', 'Skip-the-line Louvre tour', 'Café-hopping in Le Marais', 'Champs-Élysées walk'],
    famous: ['The Mona Lisa', 'Croissants & macarons', 'The Eiffel Tower light show'] },

  { id: 'switzerland', name: 'Switzerland — Lindt Factory', country: 'Kilchberg', lat: 47.3175, lng: 8.541,
    tagline: 'Where a chocolate pilgrimage meets Alpine scenery.',
    bestTime: 'Jun–Sep', days: 3, budgetLow: 180, budgetHigh: 280, airport: 'ZRH',
    attractions: [
      { name: 'Lindt Home of Chocolate', desc: "The world's tallest chocolate fountain — 9m of cocoa." },
      { name: 'Lake Zurich Promenade', desc: 'Swans, sailboats, and Alp views from the city.' },
      { name: 'Jungfraujoch "Top of Europe"', desc: 'A train to a glacier plateau at 3,454m.' },
      { name: 'Rhine Falls', desc: "Europe's largest waterfall, an easy day trip." }],
    activities: ['Chocolate-making workshop', 'Watch the chocolate fountain', 'Glacier Express train', 'Lake Zurich cruise'],
    famous: ["World's tallest chocolate fountain", 'Swiss chocolate tastings', 'Alpine trains'] },

  { id: 'rio', name: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lng: -43.1729,
    tagline: 'Samba, sand, and a saint watching over it all from the mountaintop.',
    bestTime: 'Dec–Mar', days: 5, budgetLow: 80, budgetHigh: 140, airport: 'GIG',
    attractions: [
      { name: 'Christ the Redeemer', desc: 'Iconic 30m statue atop Corcovado mountain.' },
      { name: 'Sugarloaf Mountain', desc: 'Cable car ride with a 360° harbor view.' },
      { name: 'Copacabana & Ipanema', desc: 'The most famous beaches on the continent.' },
      { name: 'Tijuca Forest', desc: "World's largest urban rainforest." },
      { name: 'Selarón Steps', desc: '253 tiled steps covered in mosaic art.' }],
    activities: ['Sugarloaf cable car at sunset', 'Beach volleyball on Copacabana', 'Live samba show', 'Favela community tour'],
    famous: ['Carnival', 'Christ the Redeemer', 'Copacabana beach culture'] },

  { id: 'georgia', name: 'Georgia', country: 'Tbilisi · Kazbegi', lat: 41.7151, lng: 44.8271,
    tagline: "Wine's 8,000-year-old birthplace, tucked into the Caucasus.",
    bestTime: 'May–Jun, Sep–Oct', days: 6, budgetLow: 50, budgetHigh: 80, airport: 'TBS',
    attractions: [
      { name: 'Narikala Fortress & Old Tbilisi', desc: 'Hilltop fortress over balconied streets.' },
      { name: 'Gergeti Trinity Church', desc: "A lone church beneath Mt Kazbek's glacier." },
      { name: 'Abanotubani Sulfur Baths', desc: 'Centuries-old bathhouses under brick domes.' },
      { name: 'Kakheti Wine Region', desc: 'Vineyards using the ancient qvevri clay-pot method.' }],
    activities: ['Qvevri wine cellar tour', 'Hike to Gergeti Trinity', 'Cable car over Tbilisi', 'Sulfur bathhouse spa'],
    famous: ["World's oldest winemaking", 'Khachapuri cheese bread', 'Caucasus mountains'] },

  { id: 'dubai', name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708,
    tagline: 'Desert dreams engineered straight into the sky.',
    bestTime: 'Nov–Mar', days: 4, budgetLow: 150, budgetHigh: 250, airport: 'DXB',
    attractions: [
      { name: 'Burj Khalifa', desc: "World's tallest building — deck at 555m." },
      { name: 'Desert Safari', desc: '4x4 dune bashing then a Bedouin-style dinner.' },
      { name: 'Palm Jumeirah & Atlantis', desc: 'Man-made island with an underwater aquarium.' },
      { name: 'Dubai Mall & Fountain', desc: "World's largest mall with a choreographed water show." }],
    activities: ['Desert safari + camel ride', 'Burj Khalifa "At the Top"', 'Dhow dinner cruise', 'Gold & Spice Souk'],
    famous: ["World's tallest building", 'Indoor ski slope', 'Gold Souk'] },

  { id: 'tokyo', name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503,
    tagline: 'Neon-lit future built on top of an ancient soul.',
    bestTime: 'Mar–May, Oct–Nov', days: 6, budgetLow: 100, budgetHigh: 180, airport: 'HND',
    attractions: [
      { name: 'Shibuya Crossing & Sky', desc: "World's busiest crossing, viewed from above." },
      { name: 'Senso-ji Temple', desc: "Tokyo's oldest and most vibrant temple." },
      { name: 'Meiji Shrine', desc: 'A forested shrine in the middle of the city.' },
      { name: 'Tsukiji Outer Market', desc: 'Fresh sushi breakfast among the stalls.' },
      { name: 'teamLab', desc: 'Immersive digital art you walk through barefoot.' }],
    activities: ['Sushi-making class', 'Akihabara arcade night', 'Cherry blossom picnic', 'Day trip to Mt Fuji'],
    famous: ['Sushi & ramen culture', 'Cherry blossom season', 'Shibuya Crossing'] },

  { id: 'fuji', name: 'Mt Fuji', country: 'Japan', lat: 35.3606, lng: 138.7274,
    tagline: "Japan's sacred, snow-capped silhouette.",
    bestTime: 'Jul–Sep (climbing)', days: 2, budgetLow: 90, budgetHigh: 150, airport: 'HND',
    attractions: [
      { name: 'Chureito Pagoda', desc: 'The classic five-story pagoda + Fuji view.' },
      { name: 'Lake Kawaguchiko', desc: 'Fuji reflected in the lake, blossoms in spring.' },
      { name: 'Fuji Summit Trail', desc: 'Official climbing-season sunrise hike.' },
      { name: 'Hakone Ropeway & Onsen', desc: 'Volcanic hot springs with a mountain view.' }],
    activities: ['Sunrise summit hike', 'Onsen soak with a Fuji view', 'Cycle Lake Kawaguchiko', 'Hakone Open-Air Museum'],
    famous: ['UNESCO World Heritage', "Japan's iconic silhouette", 'Five surrounding lakes'] },

  { id: 'jaipur', name: 'Jaipur', country: 'India · Rajasthan', lat: 26.9124, lng: 75.7873,
    tagline: 'The Pink City, built by maharajas and still ruled by color.',
    bestTime: 'Oct–Mar', days: 3, budgetLow: 40, budgetHigh: 70, airport: 'JAI',
    attractions: [
      { name: 'Amber Fort', desc: 'Hilltop fort of mirrored halls.' },
      { name: 'Hawa Mahal', desc: 'The honeycomb "Palace of Winds" facade.' },
      { name: 'City Palace', desc: 'Still home to the royal family, part museum.' },
      { name: 'Jantar Mantar', desc: '18th-century astronomical instruments, UNESCO listed.' },
      { name: 'Nahargarh Fort', desc: 'Best sunset view over the Pink City.' }],
    activities: ['Jeep up to Amber Fort', 'Block-printing workshop', 'Shop Johari Bazaar', 'Rajasthani thali + folk dance'],
    famous: ['Pink sandstone old city', 'Rajput heritage', 'Vibrant bazaars & textiles'] },

  { id: 'ooty', name: 'Ooty', country: 'India · Nilgiris', lat: 11.4064, lng: 76.6932,
    tagline: 'Queen of the Nilgiri hills, wrapped in tea gardens.',
    bestTime: 'Oct–Jun', days: 3, budgetLow: 30, budgetHigh: 50, airport: 'CJB',
    attractions: [
      { name: 'Nilgiri Mountain Railway', desc: 'UNESCO-listed toy train through the hills.' },
      { name: 'Ooty Botanical Garden', desc: 'Terraced gardens laid out in 1848.' },
      { name: 'Doddabetta Peak', desc: 'Highest point in the Nilgiris, sweeping views.' },
      { name: 'Ooty Lake', desc: 'Boating framed by eucalyptus groves.' }],
    activities: ['Toy train from Mettupalayam', 'Tea factory tour', 'Boating on Ooty Lake', 'Trek the tea estates'],
    famous: ['UNESCO toy train', 'Rolling tea plantations', 'Colonial architecture'] },

  { id: 'himalayas', name: 'Himalayas', country: 'Nepal · Everest Region', lat: 27.9881, lng: 86.925,
    tagline: 'Standing at the roof of the world.',
    bestTime: 'Mar–May, Sep–Nov', days: 12, budgetLow: 50, budgetHigh: 100, airport: 'KTM',
    attractions: [
      { name: 'Everest Base Camp Trek', desc: 'The ultimate bucket-list trek.' },
      { name: 'Tengboche Monastery', desc: 'Famous monastery with an Everest backdrop.' },
      { name: 'Kala Patthar', desc: 'Best sunrise view of Everest itself.' },
      { name: 'Namche Bazaar', desc: 'Sherpa capital and trekking hub.' }],
    activities: ['Teahouse trekking', 'Monastery visits', 'Scenic Everest flight', 'Sherpa culture & cuisine'],
    famous: ["World's highest peak", 'Sherpa mountaineering', 'The classic EBC trek'] },

  { id: 'ranthambore', name: 'Ranthambore', country: 'India · Rajasthan', lat: 26.0173, lng: 76.5026,
    tagline: 'Wild tigers prowling among 10th-century ruins.',
    bestTime: 'Oct–Jun', days: 2, budgetLow: 60, budgetHigh: 100, airport: 'JAI',
    attractions: [
      { name: 'Ranthambore National Park', desc: "India's best odds for a wild tiger." },
      { name: 'Ranthambore Fort', desc: 'A 10th-century fort inside the reserve.' },
      { name: 'Padam Talao & Jogi Mahal', desc: 'Lake framed by an old hunting lodge.' },
      { name: 'Surwal Lake', desc: 'Quieter spot for birdwatching.' }],
    activities: ['Dawn & dusk jeep safaris', 'Explore the jungle fort', 'Wildlife photography', 'Village visit'],
    famous: ['High tiger sighting odds', 'A fort reclaimed by jungle', 'Rajasthani wildlife'] },

  { id: 'sanfrancisco', name: 'San Francisco', country: 'USA · California', lat: 37.7749, lng: -122.4194,
    tagline: 'Fog, hills, and the bridge that started it all.',
    bestTime: 'Sep–Nov', days: 4, budgetLow: 150, budgetHigh: 220, airport: 'SFO',
    attractions: [
      { name: 'Golden Gate Bridge', desc: 'Walk or bike the most photographed bridge on Earth.' },
      { name: 'Alcatraz Island', desc: 'Former federal prison, now a haunting audio tour.' },
      { name: "Fisherman's Wharf & Pier 39", desc: 'Sea lions, sourdough, and bay views.' },
      { name: 'Cable Cars & Lombard Street', desc: 'The steepest, crookedest street in the city.' }],
    activities: ['Alcatraz night tour', 'Bike the Golden Gate', 'Sourdough at the Wharf', 'Chinatown food walk'],
    famous: ['The Golden Gate Bridge', 'Alcatraz history', 'Historic cable cars'] },
];

export const byId = (id) => DESTINATIONS.find((d) => d.id === id);

// Runtime (custom) destinations added by the user via "add to destinations".
export function addRuntimeDestination(d) {
  if (!DESTINATIONS.some((x) => x.id === d.id)) DESTINATIONS.push(d);
  return d;
}
export function removeRuntimeDestination(id) {
  const i = DESTINATIONS.findIndex((x) => x.id === id);
  if (i >= 0) DESTINATIONS.splice(i, 1);
}
