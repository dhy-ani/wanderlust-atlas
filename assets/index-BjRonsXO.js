(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();const pn=[{id:"chongqing",name:"Chongqing",country:"China",lat:29.563,lng:106.5516,tagline:"The mountain city that glows like a sci-fi film set at night.",bestTime:"Mar–May, Sep–Nov",days:3,budgetLow:60,budgetHigh:90,airport:"CKG",attractions:[{name:"Hongyadong",desc:"11-story stilt complex lit up gold above the river."},{name:"Ciqikou Ancient Town",desc:"Ming-dynasty river town, stone lanes, tea houses."},{name:"Yangtze River Cableway",desc:"Cross the river suspended in a vintage cable car."},{name:"Eling Park",desc:"Best panoramic skyline view, especially at dusk."}],activities:["Night river cruise","Hotpot cooking class","Ride the cable car",'Explore the "8D" overpasses'],famous:["Numbing-spicy hotpot","Monorail through a building (Liziba)","Maze-like 8D roads"]},{id:"hawaii",name:"Hawaiian Mountains",country:"USA · Big Island",lat:19.8968,lng:-155.5828,tagline:"Stargazing above the clouds on the tallest mountain on Earth (base to peak).",bestTime:"Apr–Jun, Sep–Oct",days:5,budgetLow:150,budgetHigh:250,airport:"KOA",attractions:[{name:"Mauna Kea Summit",desc:"Sunset above the clouds, then world-class stargazing."},{name:"Waipio Valley Lookout",desc:"Dramatic cliff-lined valley, black sand below."},{name:"Kilauea / Volcanoes NP",desc:"Walk a crater rim beside an active volcano."},{name:"Akaka Falls",desc:"442-ft waterfall on an easy rainforest loop."}],activities:["Summit stargazing tour","Hike the Kilauea crater rim","Helicopter volcano tour","Snorkel Kealakekua Bay"],famous:["Tallest mountain base-to-peak","Active shield volcanoes","Astronomical observatories"]},{id:"italy",name:"Italy",country:"Rome · Florence · Venice",lat:41.9028,lng:12.4964,tagline:"An ancient empire with an espresso in one hand and gelato in the other.",bestTime:"Apr–Jun, Sep–Oct",days:10,budgetLow:120,budgetHigh:200,airport:"FCO",attractions:[{name:"Colosseum & Roman Forum",desc:"Walk the arena floor of the gladiators."},{name:"Vatican & Sistine Chapel",desc:"Michelangelo's ceiling, up close."},{name:"Trevi Fountain",desc:"Toss a coin to guarantee your return to Rome."},{name:"Uffizi & the Duomo",desc:"Renaissance masterworks and a rust-red skyline."},{name:"Venice & Amalfi Coast",desc:"Gondola rides and cliffside pastel towns."}],activities:["Colosseum underground tour","Sunset gondola ride","Pasta & pizza class","Tuscany wine tasting"],famous:["Renaissance art","Gelato & espresso culture","The Trevi coin toss"]},{id:"paris",name:"Paris",country:"France",lat:48.8566,lng:2.3522,tagline:"The city of light, one croissant at a time.",bestTime:"Apr–Jun, Sep–Oct",days:5,budgetLow:130,budgetHigh:220,airport:"CDG",attractions:[{name:"Eiffel Tower",desc:"Sparkles for 5 minutes on the hour after dark."},{name:"The Louvre",desc:"Home of the Mona Lisa and 35,000 other works."},{name:"Notre-Dame & Île de la Cité",desc:"The historic heart of the city."},{name:"Montmartre & Sacré-Cœur",desc:"Artists' quarter with the best skyline view."},{name:"Palace of Versailles",desc:"A day trip into pure royal excess."}],activities:["Seine river cruise","Skip-the-line Louvre tour","Café-hopping in Le Marais","Champs-Élysées walk"],famous:["The Mona Lisa","Croissants & macarons","The Eiffel Tower light show"]},{id:"switzerland",name:"Switzerland — Lindt Factory",country:"Kilchberg",lat:47.3175,lng:8.541,tagline:"Where a chocolate pilgrimage meets Alpine scenery.",bestTime:"Jun–Sep",days:3,budgetLow:180,budgetHigh:280,airport:"ZRH",attractions:[{name:"Lindt Home of Chocolate",desc:"The world's tallest chocolate fountain — 9m of cocoa."},{name:"Lake Zurich Promenade",desc:"Swans, sailboats, and Alp views from the city."},{name:'Jungfraujoch "Top of Europe"',desc:"A train to a glacier plateau at 3,454m."},{name:"Rhine Falls",desc:"Europe's largest waterfall, an easy day trip."}],activities:["Chocolate-making workshop","Watch the chocolate fountain","Glacier Express train","Lake Zurich cruise"],famous:["World's tallest chocolate fountain","Swiss chocolate tastings","Alpine trains"]},{id:"rio",name:"Rio de Janeiro",country:"Brazil",lat:-22.9068,lng:-43.1729,tagline:"Samba, sand, and a saint watching over it all from the mountaintop.",bestTime:"Dec–Mar",days:5,budgetLow:80,budgetHigh:140,airport:"GIG",attractions:[{name:"Christ the Redeemer",desc:"Iconic 30m statue atop Corcovado mountain."},{name:"Sugarloaf Mountain",desc:"Cable car ride with a 360° harbor view."},{name:"Copacabana & Ipanema",desc:"The most famous beaches on the continent."},{name:"Tijuca Forest",desc:"World's largest urban rainforest."},{name:"Selarón Steps",desc:"253 tiled steps covered in mosaic art."}],activities:["Sugarloaf cable car at sunset","Beach volleyball on Copacabana","Live samba show","Favela community tour"],famous:["Carnival","Christ the Redeemer","Copacabana beach culture"]},{id:"georgia",name:"Georgia",country:"Tbilisi · Kazbegi",lat:41.7151,lng:44.8271,tagline:"Wine's 8,000-year-old birthplace, tucked into the Caucasus.",bestTime:"May–Jun, Sep–Oct",days:6,budgetLow:50,budgetHigh:80,airport:"TBS",attractions:[{name:"Narikala Fortress & Old Tbilisi",desc:"Hilltop fortress over balconied streets."},{name:"Gergeti Trinity Church",desc:"A lone church beneath Mt Kazbek's glacier."},{name:"Abanotubani Sulfur Baths",desc:"Centuries-old bathhouses under brick domes."},{name:"Kakheti Wine Region",desc:"Vineyards using the ancient qvevri clay-pot method."}],activities:["Qvevri wine cellar tour","Hike to Gergeti Trinity","Cable car over Tbilisi","Sulfur bathhouse spa"],famous:["World's oldest winemaking","Khachapuri cheese bread","Caucasus mountains"]},{id:"dubai",name:"Dubai",country:"UAE",lat:25.2048,lng:55.2708,tagline:"Desert dreams engineered straight into the sky.",bestTime:"Nov–Mar",days:4,budgetLow:150,budgetHigh:250,airport:"DXB",attractions:[{name:"Burj Khalifa",desc:"World's tallest building — deck at 555m."},{name:"Desert Safari",desc:"4x4 dune bashing then a Bedouin-style dinner."},{name:"Palm Jumeirah & Atlantis",desc:"Man-made island with an underwater aquarium."},{name:"Dubai Mall & Fountain",desc:"World's largest mall with a choreographed water show."}],activities:["Desert safari + camel ride",'Burj Khalifa "At the Top"',"Dhow dinner cruise","Gold & Spice Souk"],famous:["World's tallest building","Indoor ski slope","Gold Souk"]},{id:"tokyo",name:"Tokyo",country:"Japan",lat:35.6762,lng:139.6503,tagline:"Neon-lit future built on top of an ancient soul.",bestTime:"Mar–May, Oct–Nov",days:6,budgetLow:100,budgetHigh:180,airport:"HND",attractions:[{name:"Shibuya Crossing & Sky",desc:"World's busiest crossing, viewed from above."},{name:"Senso-ji Temple",desc:"Tokyo's oldest and most vibrant temple."},{name:"Meiji Shrine",desc:"A forested shrine in the middle of the city."},{name:"Tsukiji Outer Market",desc:"Fresh sushi breakfast among the stalls."},{name:"teamLab",desc:"Immersive digital art you walk through barefoot."}],activities:["Sushi-making class","Akihabara arcade night","Cherry blossom picnic","Day trip to Mt Fuji"],famous:["Sushi & ramen culture","Cherry blossom season","Shibuya Crossing"]},{id:"fuji",name:"Mt Fuji",country:"Japan",lat:35.3606,lng:138.7274,tagline:"Japan's sacred, snow-capped silhouette.",bestTime:"Jul–Sep (climbing)",days:2,budgetLow:90,budgetHigh:150,airport:"HND",attractions:[{name:"Chureito Pagoda",desc:"The classic five-story pagoda + Fuji view."},{name:"Lake Kawaguchiko",desc:"Fuji reflected in the lake, blossoms in spring."},{name:"Fuji Summit Trail",desc:"Official climbing-season sunrise hike."},{name:"Hakone Ropeway & Onsen",desc:"Volcanic hot springs with a mountain view."}],activities:["Sunrise summit hike","Onsen soak with a Fuji view","Cycle Lake Kawaguchiko","Hakone Open-Air Museum"],famous:["UNESCO World Heritage","Japan's iconic silhouette","Five surrounding lakes"]},{id:"jaipur",name:"Jaipur",country:"India · Rajasthan",lat:26.9124,lng:75.7873,tagline:"The Pink City, built by maharajas and still ruled by color.",bestTime:"Oct–Mar",days:3,budgetLow:40,budgetHigh:70,airport:"JAI",attractions:[{name:"Amber Fort",desc:"Hilltop fort of mirrored halls."},{name:"Hawa Mahal",desc:'The honeycomb "Palace of Winds" facade.'},{name:"City Palace",desc:"Still home to the royal family, part museum."},{name:"Jantar Mantar",desc:"18th-century astronomical instruments, UNESCO listed."},{name:"Nahargarh Fort",desc:"Best sunset view over the Pink City."}],activities:["Jeep up to Amber Fort","Block-printing workshop","Shop Johari Bazaar","Rajasthani thali + folk dance"],famous:["Pink sandstone old city","Rajput heritage","Vibrant bazaars & textiles"]},{id:"ooty",name:"Ooty",country:"India · Nilgiris",lat:11.4064,lng:76.6932,tagline:"Queen of the Nilgiri hills, wrapped in tea gardens.",bestTime:"Oct–Jun",days:3,budgetLow:30,budgetHigh:50,airport:"CJB",attractions:[{name:"Nilgiri Mountain Railway",desc:"UNESCO-listed toy train through the hills."},{name:"Ooty Botanical Garden",desc:"Terraced gardens laid out in 1848."},{name:"Doddabetta Peak",desc:"Highest point in the Nilgiris, sweeping views."},{name:"Ooty Lake",desc:"Boating framed by eucalyptus groves."}],activities:["Toy train from Mettupalayam","Tea factory tour","Boating on Ooty Lake","Trek the tea estates"],famous:["UNESCO toy train","Rolling tea plantations","Colonial architecture"]},{id:"himalayas",name:"Himalayas",country:"Nepal · Everest Region",lat:27.9881,lng:86.925,tagline:"Standing at the roof of the world.",bestTime:"Mar–May, Sep–Nov",days:12,budgetLow:50,budgetHigh:100,airport:"KTM",attractions:[{name:"Everest Base Camp Trek",desc:"The ultimate bucket-list trek."},{name:"Tengboche Monastery",desc:"Famous monastery with an Everest backdrop."},{name:"Kala Patthar",desc:"Best sunrise view of Everest itself."},{name:"Namche Bazaar",desc:"Sherpa capital and trekking hub."}],activities:["Teahouse trekking","Monastery visits","Scenic Everest flight","Sherpa culture & cuisine"],famous:["World's highest peak","Sherpa mountaineering","The classic EBC trek"]},{id:"ranthambore",name:"Ranthambore",country:"India · Rajasthan",lat:26.0173,lng:76.5026,tagline:"Wild tigers prowling among 10th-century ruins.",bestTime:"Oct–Jun",days:2,budgetLow:60,budgetHigh:100,airport:"JAI",attractions:[{name:"Ranthambore National Park",desc:"India's best odds for a wild tiger."},{name:"Ranthambore Fort",desc:"A 10th-century fort inside the reserve."},{name:"Padam Talao & Jogi Mahal",desc:"Lake framed by an old hunting lodge."},{name:"Surwal Lake",desc:"Quieter spot for birdwatching."}],activities:["Dawn & dusk jeep safaris","Explore the jungle fort","Wildlife photography","Village visit"],famous:["High tiger sighting odds","A fort reclaimed by jungle","Rajasthani wildlife"]},{id:"sanfrancisco",name:"San Francisco",country:"USA · California",lat:37.7749,lng:-122.4194,tagline:"Fog, hills, and the bridge that started it all.",bestTime:"Sep–Nov",days:4,budgetLow:150,budgetHigh:220,airport:"SFO",attractions:[{name:"Golden Gate Bridge",desc:"Walk or bike the most photographed bridge on Earth."},{name:"Alcatraz Island",desc:"Former federal prison, now a haunting audio tour."},{name:"Fisherman's Wharf & Pier 39",desc:"Sea lions, sourdough, and bay views."},{name:"Cable Cars & Lombard Street",desc:"The steepest, crookedest street in the city."}],activities:["Alcatraz night tour","Bike the Golden Gate","Sourdough at the Wharf","Chinatown food walk"],famous:["The Golden Gate Bridge","Alcatraz history","Historic cable cars"]}],Zc=i=>pn.find(t=>t.id===i);function qc(i){return pn.some(t=>t.id===i.id)||pn.push(i),i}function Yc(i){const t=pn.findIndex(e=>e.id===i);t>=0&&pn.splice(t,1)}const jc="wa_hidden_builtins";function Kc(){try{return JSON.parse(localStorage.getItem(jc))||[]}catch{return[]}}function Uu(i){const t=Kc();t.includes(i)||(t.push(i),localStorage.setItem(jc,JSON.stringify(t))),Yc(i)}const Nu="https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg",Ou="https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png",fa={name:"New York (JFK/EWR)",lat:40.7128,lng:-74.006},Fu=/^[A-Za-z0-9À-ÖØ-öø-ÿ0-9 '’\-,.()&/]+/;function ol(i){if(!i)return i;const t=i.match(Fu);return(t?t[0].trim():i).replace(/[\s,-]+$/,"")||i}const ll={JFK:[40.6413,-73.7781],EWR:[40.6895,-74.1745]},Bu={1:1.02,2:.92,3:.95,4:1,5:1.06,6:1.18,7:1.28,8:1.24,9:1,10:.96,11:.98,12:1.22},cl=["United","Delta","American","Lufthansa","Emirates","Qatar","Turkish","ANA"],$c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],hl=850,Jc="wa_custom_destinations";function Ps(i,t,e,s){const l=Math.PI/180,h=(e-i)*l,c=(s-t)*l,d=Math.sin(h/2)**2+Math.cos(i*l)*Math.cos(e*l)*Math.sin(c/2)**2;return 2*6371*Math.asin(Math.sqrt(d))}const Cs=()=>{try{return JSON.parse(localStorage.getItem(Jc))||[]}catch{return[]}},ul=i=>localStorage.setItem(Jc,JSON.stringify(i)),so=i=>pn.find(t=>t.id===i)||Cs().find(t=>t.id===i);function zu(i,t){const[e,s]=ll[i]||ll.JFK,a=so(t);return a?Ps(e,s,a.lat,a.lng):6e3}function Er(i,t,e,s){const a=zu(t,i),l=120+.055*a+9e-7*a*a,h=Math.max(s,0),c=.55*Math.exp(-h/18),d=.1*Math.max(0,(h-120)/240);let f=1+c+d;h>=40&&h<=75&&(f*=.9);const m=Bu[e]||1,p=t==="JFK"?1:1.015;return Math.round(l*f*m*p*100)/100}function dl(i){const t=so(i),e=t?t.lat:20,s=[];for(let a=1;a<=12;a++){const l=e>=0?Math.cos(2*Math.PI*(a-7)/12):Math.cos(2*Math.PI*(a-1)/12),h=27-Math.abs(e)*.35,c=Math.round((h+l*(6+Math.abs(e)*.18))*10)/10,d=Math.max(0,Math.round(90+70*Math.sin(2*Math.PI*(a-4)/12)-Math.abs(e))),f=Math.max(0,Math.min(100,100-Math.abs(c-22)*3.2-d*.18));s.push({month:a,month_name:$c[a-1],avg_temp_c:c,rain_mm:d,comfort_score:Math.round(f*10)/10})}return s}function fl(...i){let t=2166136261;const e=i.join("|");for(let s=0;s<e.length;s++)t^=e.charCodeAt(s),t=Math.imul(t,16777619);return t>>>0}const ku={health:async()=>({status:"ok",static:!0,live:{flights_amadeus:!1,weather_openweather:!1,places_google:!1}}),destinations:async()=>Cs(),addDestination:async i=>{const t=(i.name||"place").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"place";let e="JFK",s=1/0;for(const h of pn.filter(c=>!c.custom&&c.airport)){const c=Ps(i.lat,i.lng,h.lat,h.lng);c<s&&(s=c,e=h.airport)}const a={id:`custom-${t}-${fl(i.name,i.lat).toString(16).slice(0,4)}`,name:i.name,country:i.country||"Custom pin",lat:i.lat,lng:i.lng,airport:e,days:4,budgetLow:80,budgetHigh:150,bestTime:"Year-round",custom:!0},l=Cs();return l.push(a),ul(l),a},deleteDestination:async i=>(ul(Cs().filter(t=>t.id!==i)),{removed:i}),flights:async(i,t="JFK")=>{const e=so(i),s=new Date(Date.now()+60*864e5),l=Er(i,t,s.getMonth()+1,60),h=[];for(let c=0;c<5;c++){const d=fl(t,i,c),f=(d>>3)%3,m=Math.max(120,Math.round(l*(.9+d%45/100))-f*35);h.push({origin:t,destination:(e==null?void 0:e.airport)||"???",price_usd:m,airline:cl[d%cl.length],stops:f,depart_date:s.toISOString().slice(0,10),duration:`${7+d%15}h ${d%6*10}m`,source:"mock"})}return h.sort((c,d)=>c.price_usd-d.price_usd),{origin:t,destination:(e==null?void 0:e.airport)||"???",cheapest:h[0],offers:h,source:"mock"}},weather:async i=>{const t=dl(i),e=[...t].sort((s,a)=>a.comfort_score-s.comfort_score).slice(0,3).map(s=>s.month_name);return{destination_id:i,months:t,best_months:e,source:"climate-model"}},predictPrice:async(i,t="JFK",e=60,s)=>{const a=s||new Date(Date.now()+e*864e5).getMonth()+1,l=[];for(let g=3;g<300;g+=7)l.push({days_before_departure:g,predicted_price_usd:Er(i,t,a,g)});const h=Er(i,t,a,e),c=l.reduce((g,x)=>x.predicted_price_usd<g.predicted_price_usd?x:g,l[0]),d=h?Math.round(100*(h-c.predicted_price_usd)/h*10)/10:0;let f;e<=c.days_before_departure+7&&d<6?f="BOOK NOW — you're already near the cheapest window.":d>=12?f=`WAIT — prices are expected to fall ~${Math.round(d)}% toward ${c.days_before_departure} days out.`:f=`SOON — modest ~${Math.round(d)}% savings expected; book within a few weeks.`;const m=[];for(let g=1;g<=12;g++)m.push(Er(i,t,g,60));const p=m.indexOf(Math.min(...m));return{destination_id:i,origin:t,depart_month:a,current_days_out:e,predicted_price_now:h,cheapest_price:c.predicted_price_usd,cheapest_days_out:c.days_before_departure,expected_drop_pct:d,recommendation:f,best_month_to_fly:p+1,best_month_price:Math.round(m[p]*100)/100,curve:l,monthly:m.map(g=>Math.round(g*100)/100),model:"heuristic"}},bestTime:async(i,t="JFK",e=.5)=>{const s=[];for(let m=1;m<=12;m++)s.push(Er(i,t,m,60));const a=dl(i).map(m=>m.comfort_score),l=Math.min(...s),h=Math.max(...s),c=Math.max(0,Math.min(1,e)),d=s.map((m,p)=>{const g=h===l?50:100*(h-m)/(h-l),x=c*g+(1-c)*a[p];return{month:p+1,month_name:$c[p],price:Math.round(m*100)/100,price_score:Math.round(g*10)/10,comfort_score:Math.round(a[p]*10)/10,overall_score:Math.round(x*10)/10}}),f=d.reduce((m,p)=>p.overall_score>m.overall_score?p:m,d[0]);return{destination_id:i,origin:t,months:d,best_month:f,weather_source:"climate-model",price_model:"heuristic"}},planRoute:async(i,t=!1)=>{let e=i;if(t&&i.length>2){const l=[...i];e=[];let h=[40.7128,-74.006];for(;l.length;){let c=0,d=1/0;l.forEach((m,p)=>{const g=Ps(h[0],h[1],m.lat,m.lng);g<d&&(d=g,c=p)});const f=l.splice(c,1)[0];e.push(f),h=[f.lat,f.lng]}}const s=[];let a=0;for(let l=0;l<e.length-1;l++){const h=e[l],c=e[l+1],d=Ps(h.lat,h.lng,c.lat,c.lng);a+=d,s.push({from_name:h.name,to_name:c.name,distance_km:Math.round(d*10)/10,est_flight_hours:Math.round(d/hl*10)/10})}return{stops:e,legs:s,total_distance_km:Math.round(a*10)/10,total_flight_hours:Math.round(a/hl*10)/10,optimized:!!t}},places:async(i,t,e="",s=4e4)=>{const l=new URLSearchParams({q:e||"tourist attraction",format:"jsonv2",limit:"10","accept-language":"en",viewbox:`${t-1.2},${i+1.2},${t+1.2},${i-1.2}`,bounded:"1"}),d=(await(await fetch(`https://nominatim.openstreetmap.org/search?${l}`)).json()).map(f=>({name:ol((f.display_name||"").split(",")[0]),lat:+f.lat,lng:+f.lon,category:f.type,address:f.display_name,source:"nominatim"}));return{query:e,results:d,source:"nominatim"}},geocode:async i=>{const t=new URLSearchParams({q:i,format:"jsonv2",limit:"8",addressdetails:"1","accept-language":"en"}),a=(await(await fetch(`https://nominatim.openstreetmap.org/search?${t}`)).json()).map(l=>{var h;return{name:ol((l.display_name||"").split(",")[0]),lat:+l.lat,lng:+l.lon,category:l.type,address:l.display_name,country:(h=l.address)==null?void 0:h.country,source:"nominatim"}});return{query:i,results:a,source:"nominatim"}}},Hn=ku;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="160",Hu=0,pl=1,Gu=2,Qc=1,Vu=2,zn=3,ii=0,je=1,Ln=2,ti=0,tr=1,ml=2,_l=3,gl=4,Wu=5,xi=100,Xu=101,Zu=102,vl=103,xl=104,qu=200,Yu=201,ju=202,Ku=203,Za=204,qa=205,$u=206,Ju=207,Qu=208,td=209,ed=210,nd=211,id=212,rd=213,sd=214,ad=0,od=1,ld=2,Is=3,cd=4,hd=5,ud=6,dd=7,oo=0,fd=1,pd=2,ei=0,md=1,_d=2,gd=3,vd=4,xd=5,yd=6,th=300,nr=301,ir=302,Ya=303,ja=304,zs=306,Ka=1e3,Mn=1001,$a=1002,Ye=1003,yl=1004,pa=1005,un=1006,Md=1007,Rr=1008,ni=1009,Sd=1010,Ed=1011,lo=1012,eh=1013,Jn=1014,Qn=1015,Ir=1016,nh=1017,ih=1018,Mi=1020,Td=1021,Sn=1023,bd=1024,wd=1025,Si=1026,rr=1027,Ad=1028,rh=1029,Ld=1030,sh=1031,ah=1033,ma=33776,_a=33777,ga=33778,va=33779,Ml=35840,Sl=35841,El=35842,Tl=35843,oh=36196,bl=37492,wl=37496,Al=37808,Ll=37809,Pl=37810,Cl=37811,Rl=37812,Il=37813,Dl=37814,Ul=37815,Nl=37816,Ol=37817,Fl=37818,Bl=37819,zl=37820,kl=37821,xa=36492,Hl=36494,Gl=36495,Pd=36283,Vl=36284,Wl=36285,Xl=36286,lh=3e3,Ei=3001,Cd=3200,Rd=3201,ch=0,Id=1,fn="",ze="srgb",Gn="srgb-linear",co="display-p3",ks="display-p3-linear",Ds="linear",ve="srgb",Us="rec709",Ns="p3",Di=7680,Zl=519,Dd=512,Ud=513,Nd=514,hh=515,Od=516,Fd=517,Bd=518,zd=519,ql=35044,Yl="300 es",Ja=1035,kn=2e3,Os=2001;class ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(e)===-1&&s[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const a=s.slice(0);for(let l=0,h=a.length;l<h;l++)a[l].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const Lr=Math.PI/180,Dr=180/Math.PI;function or(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function ho(i,t){return(i%t+t)%t}function kd(i,t,e,s,a){return s+(i-t)*(a-s)/(e-t)}function Hd(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Gd(i,t,e,s){return Pr(i,t,1-Math.exp(-e*s))}function Vd(i,t=1){return t-Math.abs(ho(i,t*2)-t)}function Wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qd(i,t){return i+Math.random()*(t-i)}function Yd(i){return i*(.5-Math.random())}function jd(i){i!==void 0&&(jl=i);let t=jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kd(i){return i*Lr}function $d(i){return i*Dr}function Qa(i){return(i&i-1)===0&&i!==0}function Jd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qd(i,t,e,s,a){const l=Math.cos,h=Math.sin,c=l(e/2),d=h(e/2),f=l((t+s)/2),m=h((t+s)/2),p=l((t-s)/2),g=h((t-s)/2),x=l((s-t)/2),S=h((s-t)/2);switch(a){case"XYX":i.set(c*m,d*p,d*g,c*f);break;case"YZY":i.set(d*g,c*m,d*p,c*f);break;case"ZXZ":i.set(d*p,d*g,c*m,c*f);break;case"XZX":i.set(c*m,d*S,d*x,c*f);break;case"YXY":i.set(d*x,c*m,d*S,c*f);break;case"ZYZ":i.set(d*S,d*x,c*m,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const to={DEG2RAD:Lr,RAD2DEG:Dr,generateUUID:or,clamp:We,euclideanModulo:ho,mapLinear:kd,inverseLerp:Hd,lerp:Pr,damp:Gd,pingpong:Vd,smoothstep:Wd,smootherstep:Xd,randInt:Zd,randFloat:qd,randFloatSpread:Yd,seededRandom:jd,degToRad:Kd,radToDeg:$d,isPowerOfTwo:Qa,ceilPowerOfTwo:Jd,floorPowerOfTwo:Fs,setQuaternionFromProperEuler:Qd,normalize:Ze,denormalize:ji};class ie{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,s=this.y,a=t.elements;return this.x=a[0]*e+a[3]*s+a[6],this.y=a[1]*e+a[4]*s+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(We(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const s=Math.cos(e),a=Math.sin(e),l=this.x-t.x,h=this.y-t.y;return this.x=l*s-h*a+t.x,this.y=l*a+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,s,a,l,h,c,d,f){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,s,a,l,h,c,d,f)}set(t,e,s,a,l,h,c,d,f){const m=this.elements;return m[0]=t,m[1]=a,m[2]=c,m[3]=e,m[4]=l,m[5]=d,m[6]=s,m[7]=h,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],this}extractBasis(t,e,s){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,a=e.elements,l=this.elements,h=s[0],c=s[3],d=s[6],f=s[1],m=s[4],p=s[7],g=s[2],x=s[5],S=s[8],M=a[0],y=a[3],v=a[6],C=a[1],b=a[4],I=a[7],B=a[2],R=a[5],U=a[8];return l[0]=h*M+c*C+d*B,l[3]=h*y+c*b+d*R,l[6]=h*v+c*I+d*U,l[1]=f*M+m*C+p*B,l[4]=f*y+m*b+p*R,l[7]=f*v+m*I+p*U,l[2]=g*M+x*C+S*B,l[5]=g*y+x*b+S*R,l[8]=g*v+x*I+S*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[1],a=t[2],l=t[3],h=t[4],c=t[5],d=t[6],f=t[7],m=t[8];return e*h*m-e*c*f-s*l*m+s*c*d+a*l*f-a*h*d}invert(){const t=this.elements,e=t[0],s=t[1],a=t[2],l=t[3],h=t[4],c=t[5],d=t[6],f=t[7],m=t[8],p=m*h-c*f,g=c*d-m*l,x=f*l-h*d,S=e*p+s*g+a*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return t[0]=p*M,t[1]=(a*f-m*s)*M,t[2]=(c*s-a*h)*M,t[3]=g*M,t[4]=(m*e-a*d)*M,t[5]=(a*l-c*e)*M,t[6]=x*M,t[7]=(s*d-f*e)*M,t[8]=(h*e-s*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,s,a,l,h,c){const d=Math.cos(l),f=Math.sin(l);return this.set(s*d,s*f,-s*(d*h+f*c)+h+t,-a*f,a*d,-a*(-f*h+d*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,s,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,s=t.elements;for(let a=0;a<9;a++)if(e[a]!==s[a])return!1;return!0}fromArray(t,e=0){for(let s=0;s<9;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new ne;function uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tf(){const i=Ur("canvas");return i.style.display="block",i}const Kl={};function Cr(i){i in Kl||(Kl[i]=!0,console.warn(i))}const $l=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jl=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[Gn]:{transfer:Ds,primaries:Us,toReference:i=>i,fromReference:i=>i},[ze]:{transfer:ve,primaries:Us,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ks]:{transfer:Ds,primaries:Ns,toReference:i=>i.applyMatrix3(Jl),fromReference:i=>i.applyMatrix3($l)},[co]:{transfer:ve,primaries:Ns,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jl),fromReference:i=>i.applyMatrix3($l).convertLinearToSRGB()}},ef=new Set([Gn,ks]),pe={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ef.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const s=is[t].toReference,a=is[e].fromReference;return a(s(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return is[i].primaries},getTransfer:function(i){return i===fn?Ds:is[i].transfer}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class dh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Ur("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const a=s.getImageData(0,0,t.width,t.height),l=a.data;for(let h=0;h<l.length;h++)l[h]=er(l[h]/255)*255;return s.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let s=0;s<e.length;s++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[s]=Math.floor(er(e[s]/255)*255):e[s]=er(e[s]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=or(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let h=0,c=a.length;h<c;h++)a[h].isDataTexture?l.push(Sa(a[h].image)):l.push(Sa(a[h]))}else l=Sa(a);s.url=l}return e||(t.images[this.uuid]=s),s}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class $e extends ar{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,s=Mn,a=Mn,l=un,h=Rr,c=Sn,d=ni,f=$e.DEFAULT_ANISOTROPY,m=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=or(),this.name="",this.source=new fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=h,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Ei?ze:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),e||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Ei:lh}set encoding(t){Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ei?ze:fn}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=th;$e.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,s=0,a=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=s,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,s,a){return this.x=t,this.y=e,this.z=s,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,s=this.y,a=this.z,l=this.w,h=t.elements;return this.x=h[0]*e+h[4]*s+h[8]*a+h[12]*l,this.y=h[1]*e+h[5]*s+h[9]*a+h[13]*l,this.z=h[2]*e+h[6]*s+h[10]*a+h[14]*l,this.w=h[3]*e+h[7]*s+h[11]*a+h[15]*l,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,s,a,l;const d=t.elements,f=d[0],m=d[4],p=d[8],g=d[1],x=d[5],S=d[9],M=d[2],y=d[6],v=d[10];if(Math.abs(m-g)<.01&&Math.abs(p-M)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(p+M)<.1&&Math.abs(S+y)<.1&&Math.abs(f+x+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(f+1)/2,I=(x+1)/2,B=(v+1)/2,R=(m+g)/4,U=(p+M)/4,it=(S+y)/4;return b>I&&b>B?b<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(b),a=R/s,l=U/s):I>B?I<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(I),s=R/a,l=it/a):B<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),s=U/l,a=it/l),this.set(s,a,l,e),this}let C=Math.sqrt((y-S)*(y-S)+(p-M)*(p-M)+(g-m)*(g-m));return Math.abs(C)<.001&&(C=1),this.x=(y-S)/C,this.y=(p-M)/C,this.z=(g-m)/C,this.w=Math.acos((f+x+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this.w=t.w+(e.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sf extends ar{constructor(t=1,e=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const a={width:t,height:e,depth:1};s.encoding!==void 0&&(Cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Ei?ze:fn),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new $e(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(t,e,s=1){(this.width!==t||this.height!==e||this.depth!==s)&&(this.width=t,this.height=e,this.depth=s,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends sf{constructor(t=1,e=1,s={}){super(t,e,s),this.isWebGLRenderTarget=!0}}class ph extends $e{constructor(t=null,e=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:s,depth:a},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class af extends $e{constructor(t=null,e=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:s,depth:a},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=0,e=0,s=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=s,this._w=a}static slerpFlat(t,e,s,a,l,h,c){let d=s[a+0],f=s[a+1],m=s[a+2],p=s[a+3];const g=l[h+0],x=l[h+1],S=l[h+2],M=l[h+3];if(c===0){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=p;return}if(c===1){t[e+0]=g,t[e+1]=x,t[e+2]=S,t[e+3]=M;return}if(p!==M||d!==g||f!==x||m!==S){let y=1-c;const v=d*g+f*x+m*S+p*M,C=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const B=Math.sqrt(b),R=Math.atan2(B,v*C);y=Math.sin(y*R)/B,c=Math.sin(c*R)/B}const I=c*C;if(d=d*y+g*I,f=f*y+x*I,m=m*y+S*I,p=p*y+M*I,y===1-c){const B=1/Math.sqrt(d*d+f*f+m*m+p*p);d*=B,f*=B,m*=B,p*=B}}t[e]=d,t[e+1]=f,t[e+2]=m,t[e+3]=p}static multiplyQuaternionsFlat(t,e,s,a,l,h){const c=s[a],d=s[a+1],f=s[a+2],m=s[a+3],p=l[h],g=l[h+1],x=l[h+2],S=l[h+3];return t[e]=c*S+m*p+d*x-f*g,t[e+1]=d*S+m*g+f*p-c*x,t[e+2]=f*S+m*x+c*g-d*p,t[e+3]=m*S-c*p-d*g-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,a){return this._x=t,this._y=e,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const s=t._x,a=t._y,l=t._z,h=t._order,c=Math.cos,d=Math.sin,f=c(s/2),m=c(a/2),p=c(l/2),g=d(s/2),x=d(a/2),S=d(l/2);switch(h){case"XYZ":this._x=g*m*p+f*x*S,this._y=f*x*p-g*m*S,this._z=f*m*S+g*x*p,this._w=f*m*p-g*x*S;break;case"YXZ":this._x=g*m*p+f*x*S,this._y=f*x*p-g*m*S,this._z=f*m*S-g*x*p,this._w=f*m*p+g*x*S;break;case"ZXY":this._x=g*m*p-f*x*S,this._y=f*x*p+g*m*S,this._z=f*m*S+g*x*p,this._w=f*m*p-g*x*S;break;case"ZYX":this._x=g*m*p-f*x*S,this._y=f*x*p+g*m*S,this._z=f*m*S-g*x*p,this._w=f*m*p+g*x*S;break;case"YZX":this._x=g*m*p+f*x*S,this._y=f*x*p+g*m*S,this._z=f*m*S-g*x*p,this._w=f*m*p-g*x*S;break;case"XZY":this._x=g*m*p-f*x*S,this._y=f*x*p-g*m*S,this._z=f*m*S+g*x*p,this._w=f*m*p+g*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,a=Math.sin(s);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],a=e[4],l=e[8],h=e[1],c=e[5],d=e[9],f=e[2],m=e[6],p=e[10],g=s+c+p;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-f)*x,this._z=(h-a)*x}else if(s>c&&s>p){const x=2*Math.sqrt(1+s-c-p);this._w=(m-d)/x,this._x=.25*x,this._y=(a+h)/x,this._z=(l+f)/x}else if(c>p){const x=2*Math.sqrt(1+c-s-p);this._w=(l-f)/x,this._x=(a+h)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+p-s-c);this._w=(h-a)/x,this._x=(l+f)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(s===0)return this;const a=Math.min(1,e/s);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,a=t._y,l=t._z,h=t._w,c=e._x,d=e._y,f=e._z,m=e._w;return this._x=s*m+h*c+a*f-l*d,this._y=a*m+h*d+l*c-s*f,this._z=l*m+h*f+s*d-a*c,this._w=h*m-s*c-a*d-l*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const s=this._x,a=this._y,l=this._z,h=this._w;let c=h*t._w+s*t._x+a*t._y+l*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=h,this._x=s,this._y=a,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-e;return this._w=x*h+e*this._w,this._x=x*s+e*this._x,this._y=x*a+e*this._y,this._z=x*l+e*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,c),p=Math.sin((1-e)*m)/f,g=Math.sin(e*m)/f;return this._w=h*p+this._w*g,this._x=s*p+this._x*g,this._y=a*p+this._y*g,this._z=l*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,s){return this.copy(t).slerp(e,s)}random(){const t=Math.random(),e=Math.sqrt(1-t),s=Math.sqrt(t),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(e*Math.cos(a),s*Math.sin(l),s*Math.cos(l),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,s=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=s}set(t,e,s){return s===void 0&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[3]*s+l[6]*a,this.y=l[1]*e+l[4]*s+l[7]*a,this.z=l[2]*e+l[5]*s+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,a=this.z,l=t.elements,h=1/(l[3]*e+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*e+l[4]*s+l[8]*a+l[12])*h,this.y=(l[1]*e+l[5]*s+l[9]*a+l[13])*h,this.z=(l[2]*e+l[6]*s+l[10]*a+l[14])*h,this}applyQuaternion(t){const e=this.x,s=this.y,a=this.z,l=t.x,h=t.y,c=t.z,d=t.w,f=2*(h*a-c*s),m=2*(c*e-l*a),p=2*(l*s-h*e);return this.x=e+d*f+h*p-c*m,this.y=s+d*m+c*f-l*p,this.z=a+d*p+l*m-h*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[4]*s+l[8]*a,this.y=l[1]*e+l[5]*s+l[9]*a,this.z=l[2]*e+l[6]*s+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,a=t.y,l=t.z,h=e.x,c=e.y,d=e.z;return this.x=a*d-l*c,this.y=l*h-s*d,this.z=s*c-a*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(We(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,a=this.z-t.z;return e*e+s*s+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const a=Math.sin(e)*t;return this.x=a*Math.sin(s),this.y=Math.cos(e)*t,this.z=a*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,s=Math.sqrt(1-t**2);return this.x=s*Math.cos(e),this.y=s*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new G,Ql=new Fr;class Br{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,s=t.count;e<s;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const s=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const l=s.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let h=0,c=l.count;h<c;h++)t.isMesh===!0?t.getVertexPosition(h,gn):gn.fromBufferAttribute(l,h),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rs.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rs.copy(s.boundingBox)),rs.applyMatrix4(t.matrixWorld),this.union(rs)}const a=t.children;for(let l=0,h=a.length;l<h;l++)this.expandByObject(a[l],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,s;return t.normal.x>0?(e=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),e<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),ss.subVectors(this.max,Tr),Ni.subVectors(t.a,Tr),Oi.subVectors(t.b,Tr),Fi.subVectors(t.c,Tr),qn.subVectors(Oi,Ni),Yn.subVectors(Fi,Oi),fi.subVectors(Ni,Fi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-fi.z,fi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,fi.z,0,-fi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-fi.y,fi.x,0];return!Ta(e,Ni,Oi,Fi,ss)||(e=[1,0,0,0,1,0,0,0,1],!Ta(e,Ni,Oi,Fi,ss))?!1:(as.crossVectors(qn,Yn),e=[as.x,as.y,as.z],Ta(e,Ni,Oi,Fi,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new G,new G,new G,new G,new G,new G,new G,new G],gn=new G,rs=new Br,Ni=new G,Oi=new G,Fi=new G,qn=new G,Yn=new G,fi=new G,Tr=new G,ss=new G,as=new G,pi=new G;function Ta(i,t,e,s,a){for(let l=0,h=i.length-3;l<=h;l+=3){pi.fromArray(i,l);const c=a.x*Math.abs(pi.x)+a.y*Math.abs(pi.y)+a.z*Math.abs(pi.z),d=t.dot(pi),f=e.dot(pi),m=s.dot(pi);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>c)return!1}return!0}const of=new Br,br=new G,ba=new G;class zr{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const s=this.center;e!==void 0?s.copy(e):of.setFromPoints(t).getCenter(s);let a=0;for(let l=0,h=t.length;l<h;l++)a=Math.max(a,s.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const s=this.center.distanceToSquared(t);return e.copy(t),s>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const s=Math.sqrt(e),a=(s-this.radius)*.5;this.center.addScaledVector(br,a/s),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(ba)),this.expandByPoint(br.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new G,wa=new G,os=new G,jn=new G,Aa=new G,ls=new G,La=new G;class Hs{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const s=e.dot(this.direction);return s<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,s,a){wa.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(wa);const l=t.distanceTo(e)*.5,h=-this.direction.dot(os),c=jn.dot(this.direction),d=-jn.dot(os),f=jn.lengthSq(),m=Math.abs(1-h*h);let p,g,x,S;if(m>0)if(p=h*d-c,g=h*c-d,S=l*m,p>=0)if(g>=-S)if(g<=S){const M=1/m;p*=M,g*=M,x=p*(p+h*g+2*c)+g*(h*p+g+2*d)+f}else g=l,p=Math.max(0,-(h*g+c)),x=-p*p+g*(g+2*d)+f;else g=-l,p=Math.max(0,-(h*g+c)),x=-p*p+g*(g+2*d)+f;else g<=-S?(p=Math.max(0,-(-h*l+c)),g=p>0?-l:Math.min(Math.max(-l,-d),l),x=-p*p+g*(g+2*d)+f):g<=S?(p=0,g=Math.min(Math.max(-l,-d),l),x=g*(g+2*d)+f):(p=Math.max(0,-(h*l+c)),g=p>0?l:Math.min(Math.max(-l,-d),l),x=-p*p+g*(g+2*d)+f);else g=h>0?-l:l,p=Math.max(0,-(h*g+c)),x=-p*p+g*(g+2*d)+f;return s&&s.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(wa).addScaledVector(os,g),x}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const s=Nn.dot(this.direction),a=Nn.dot(Nn)-s*s,l=t.radius*t.radius;if(a>l)return null;const h=Math.sqrt(l-a),c=s-h,d=s+h;return d<0?null:c<0?this.at(d,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/e;return s>=0?s:null}intersectPlane(t,e){const s=this.distanceToPlane(t);return s===null?null:this.at(s,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let s,a,l,h,c,d;const f=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,g=this.origin;return f>=0?(s=(t.min.x-g.x)*f,a=(t.max.x-g.x)*f):(s=(t.max.x-g.x)*f,a=(t.min.x-g.x)*f),m>=0?(l=(t.min.y-g.y)*m,h=(t.max.y-g.y)*m):(l=(t.max.y-g.y)*m,h=(t.min.y-g.y)*m),s>h||l>a||((l>s||isNaN(s))&&(s=l),(h<a||isNaN(a))&&(a=h),p>=0?(c=(t.min.z-g.z)*p,d=(t.max.z-g.z)*p):(c=(t.max.z-g.z)*p,d=(t.min.z-g.z)*p),s>d||c>a)||((c>s||s!==s)&&(s=c),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,s,a,l){Aa.subVectors(e,t),ls.subVectors(s,t),La.crossVectors(Aa,ls);let h=this.direction.dot(La),c;if(h>0){if(a)return null;c=1}else if(h<0)c=-1,h=-h;else return null;jn.subVectors(this.origin,t);const d=c*this.direction.dot(ls.crossVectors(jn,ls));if(d<0)return null;const f=c*this.direction.dot(Aa.cross(jn));if(f<0||d+f>h)return null;const m=-c*jn.dot(La);return m<0?null:this.at(m/h,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,s,a,l,h,c,d,f,m,p,g,x,S,M,y){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,s,a,l,h,c,d,f,m,p,g,x,S,M,y)}set(t,e,s,a,l,h,c,d,f,m,p,g,x,S,M,y){const v=this.elements;return v[0]=t,v[4]=e,v[8]=s,v[12]=a,v[1]=l,v[5]=h,v[9]=c,v[13]=d,v[2]=f,v[6]=m,v[10]=p,v[14]=g,v[3]=x,v[7]=S,v[11]=M,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],this}copyPosition(t){const e=this.elements,s=t.elements;return e[12]=s[12],e[13]=s[13],e[14]=s[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,s){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,e,s){return this.set(t.x,e.x,s.x,0,t.y,e.y,s.y,0,t.z,e.z,s.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,s=t.elements,a=1/Bi.setFromMatrixColumn(t,0).length(),l=1/Bi.setFromMatrixColumn(t,1).length(),h=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=s[0]*a,e[1]=s[1]*a,e[2]=s[2]*a,e[3]=0,e[4]=s[4]*l,e[5]=s[5]*l,e[6]=s[6]*l,e[7]=0,e[8]=s[8]*h,e[9]=s[9]*h,e[10]=s[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,s=t.x,a=t.y,l=t.z,h=Math.cos(s),c=Math.sin(s),d=Math.cos(a),f=Math.sin(a),m=Math.cos(l),p=Math.sin(l);if(t.order==="XYZ"){const g=h*m,x=h*p,S=c*m,M=c*p;e[0]=d*m,e[4]=-d*p,e[8]=f,e[1]=x+S*f,e[5]=g-M*f,e[9]=-c*d,e[2]=M-g*f,e[6]=S+x*f,e[10]=h*d}else if(t.order==="YXZ"){const g=d*m,x=d*p,S=f*m,M=f*p;e[0]=g+M*c,e[4]=S*c-x,e[8]=h*f,e[1]=h*p,e[5]=h*m,e[9]=-c,e[2]=x*c-S,e[6]=M+g*c,e[10]=h*d}else if(t.order==="ZXY"){const g=d*m,x=d*p,S=f*m,M=f*p;e[0]=g-M*c,e[4]=-h*p,e[8]=S+x*c,e[1]=x+S*c,e[5]=h*m,e[9]=M-g*c,e[2]=-h*f,e[6]=c,e[10]=h*d}else if(t.order==="ZYX"){const g=h*m,x=h*p,S=c*m,M=c*p;e[0]=d*m,e[4]=S*f-x,e[8]=g*f+M,e[1]=d*p,e[5]=M*f+g,e[9]=x*f-S,e[2]=-f,e[6]=c*d,e[10]=h*d}else if(t.order==="YZX"){const g=h*d,x=h*f,S=c*d,M=c*f;e[0]=d*m,e[4]=M-g*p,e[8]=S*p+x,e[1]=p,e[5]=h*m,e[9]=-c*m,e[2]=-f*m,e[6]=x*p+S,e[10]=g-M*p}else if(t.order==="XZY"){const g=h*d,x=h*f,S=c*d,M=c*f;e[0]=d*m,e[4]=-p,e[8]=f*m,e[1]=g*p+M,e[5]=h*m,e[9]=x*p-S,e[2]=S*p-x,e[6]=c*m,e[10]=M*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lf,t,cf)}lookAt(t,e,s){const a=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Kn.crossVectors(s,Qe),Kn.lengthSq()===0&&(Math.abs(s.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Kn.crossVectors(s,Qe)),Kn.normalize(),cs.crossVectors(Qe,Kn),a[0]=Kn.x,a[4]=cs.x,a[8]=Qe.x,a[1]=Kn.y,a[5]=cs.y,a[9]=Qe.y,a[2]=Kn.z,a[6]=cs.z,a[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,a=e.elements,l=this.elements,h=s[0],c=s[4],d=s[8],f=s[12],m=s[1],p=s[5],g=s[9],x=s[13],S=s[2],M=s[6],y=s[10],v=s[14],C=s[3],b=s[7],I=s[11],B=s[15],R=a[0],U=a[4],it=a[8],w=a[12],D=a[1],Q=a[5],rt=a[9],pt=a[13],F=a[2],$=a[6],tt=a[10],st=a[14],X=a[3],V=a[7],z=a[11],et=a[15];return l[0]=h*R+c*D+d*F+f*X,l[4]=h*U+c*Q+d*$+f*V,l[8]=h*it+c*rt+d*tt+f*z,l[12]=h*w+c*pt+d*st+f*et,l[1]=m*R+p*D+g*F+x*X,l[5]=m*U+p*Q+g*$+x*V,l[9]=m*it+p*rt+g*tt+x*z,l[13]=m*w+p*pt+g*st+x*et,l[2]=S*R+M*D+y*F+v*X,l[6]=S*U+M*Q+y*$+v*V,l[10]=S*it+M*rt+y*tt+v*z,l[14]=S*w+M*pt+y*st+v*et,l[3]=C*R+b*D+I*F+B*X,l[7]=C*U+b*Q+I*$+B*V,l[11]=C*it+b*rt+I*tt+B*z,l[15]=C*w+b*pt+I*st+B*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[4],a=t[8],l=t[12],h=t[1],c=t[5],d=t[9],f=t[13],m=t[2],p=t[6],g=t[10],x=t[14],S=t[3],M=t[7],y=t[11],v=t[15];return S*(+l*d*p-a*f*p-l*c*g+s*f*g+a*c*x-s*d*x)+M*(+e*d*x-e*f*g+l*h*g-a*h*x+a*f*m-l*d*m)+y*(+e*f*p-e*c*x-l*h*p+s*h*x+l*c*m-s*f*m)+v*(-a*c*m-e*d*p+e*c*g+a*h*p-s*h*g+s*d*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,s){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=s),this}invert(){const t=this.elements,e=t[0],s=t[1],a=t[2],l=t[3],h=t[4],c=t[5],d=t[6],f=t[7],m=t[8],p=t[9],g=t[10],x=t[11],S=t[12],M=t[13],y=t[14],v=t[15],C=p*y*f-M*g*f+M*d*x-c*y*x-p*d*v+c*g*v,b=S*g*f-m*y*f-S*d*x+h*y*x+m*d*v-h*g*v,I=m*M*f-S*p*f+S*c*x-h*M*x-m*c*v+h*p*v,B=S*p*d-m*M*d-S*c*g+h*M*g+m*c*y-h*p*y,R=e*C+s*b+a*I+l*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return t[0]=C*U,t[1]=(M*g*l-p*y*l-M*a*x+s*y*x+p*a*v-s*g*v)*U,t[2]=(c*y*l-M*d*l+M*a*f-s*y*f-c*a*v+s*d*v)*U,t[3]=(p*d*l-c*g*l-p*a*f+s*g*f+c*a*x-s*d*x)*U,t[4]=b*U,t[5]=(m*y*l-S*g*l+S*a*x-e*y*x-m*a*v+e*g*v)*U,t[6]=(S*d*l-h*y*l-S*a*f+e*y*f+h*a*v-e*d*v)*U,t[7]=(h*g*l-m*d*l+m*a*f-e*g*f-h*a*x+e*d*x)*U,t[8]=I*U,t[9]=(S*p*l-m*M*l-S*s*x+e*M*x+m*s*v-e*p*v)*U,t[10]=(h*M*l-S*c*l+S*s*f-e*M*f-h*s*v+e*c*v)*U,t[11]=(m*c*l-h*p*l-m*s*f+e*p*f+h*s*x-e*c*x)*U,t[12]=B*U,t[13]=(m*M*a-S*p*a+S*s*g-e*M*g-m*s*y+e*p*y)*U,t[14]=(S*c*a-h*M*a-S*s*d+e*M*d+h*s*y-e*c*y)*U,t[15]=(h*p*a-m*c*a+m*s*d-e*p*d-h*s*g+e*c*g)*U,this}scale(t){const e=this.elements,s=t.x,a=t.y,l=t.z;return e[0]*=s,e[4]*=a,e[8]*=l,e[1]*=s,e[5]*=a,e[9]*=l,e[2]*=s,e[6]*=a,e[10]*=l,e[3]*=s,e[7]*=a,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,s,a))}makeTranslation(t,e,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,s,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const s=Math.cos(e),a=Math.sin(e),l=1-s,h=t.x,c=t.y,d=t.z,f=l*h,m=l*c;return this.set(f*h+s,f*c-a*d,f*d+a*c,0,f*c+a*d,m*c+s,m*d-a*h,0,f*d-a*c,m*d+a*h,l*d*d+s,0,0,0,0,1),this}makeScale(t,e,s){return this.set(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,e,s,a,l,h){return this.set(1,s,l,0,t,1,h,0,e,a,1,0,0,0,0,1),this}compose(t,e,s){const a=this.elements,l=e._x,h=e._y,c=e._z,d=e._w,f=l+l,m=h+h,p=c+c,g=l*f,x=l*m,S=l*p,M=h*m,y=h*p,v=c*p,C=d*f,b=d*m,I=d*p,B=s.x,R=s.y,U=s.z;return a[0]=(1-(M+v))*B,a[1]=(x+I)*B,a[2]=(S-b)*B,a[3]=0,a[4]=(x-I)*R,a[5]=(1-(g+v))*R,a[6]=(y+C)*R,a[7]=0,a[8]=(S+b)*U,a[9]=(y-C)*U,a[10]=(1-(g+M))*U,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,s){const a=this.elements;let l=Bi.set(a[0],a[1],a[2]).length();const h=Bi.set(a[4],a[5],a[6]).length(),c=Bi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),t.x=a[12],t.y=a[13],t.z=a[14],vn.copy(this);const f=1/l,m=1/h,p=1/c;return vn.elements[0]*=f,vn.elements[1]*=f,vn.elements[2]*=f,vn.elements[4]*=m,vn.elements[5]*=m,vn.elements[6]*=m,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,e.setFromRotationMatrix(vn),s.x=l,s.y=h,s.z=c,this}makePerspective(t,e,s,a,l,h,c=kn){const d=this.elements,f=2*l/(e-t),m=2*l/(s-a),p=(e+t)/(e-t),g=(s+a)/(s-a);let x,S;if(c===kn)x=-(h+l)/(h-l),S=-2*h*l/(h-l);else if(c===Os)x=-h/(h-l),S=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=m,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=S,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,s,a,l,h,c=kn){const d=this.elements,f=1/(e-t),m=1/(s-a),p=1/(h-l),g=(e+t)*f,x=(s+a)*m;let S,M;if(c===kn)S=(h+l)*p,M=-2*p;else if(c===Os)S=l*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=M,d[14]=-S,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,s=t.elements;for(let a=0;a<16;a++)if(e[a]!==s[a])return!1;return!0}fromArray(t,e=0){for(let s=0;s<16;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t[e+9]=s[9],t[e+10]=s[10],t[e+11]=s[11],t[e+12]=s[12],t[e+13]=s[13],t[e+14]=s[14],t[e+15]=s[15],t}}const Bi=new G,vn=new Se,lf=new G(0,0,0),cf=new G(1,1,1),Kn=new G,cs=new G,Qe=new G,tc=new Se,ec=new Fr;class Gs{constructor(t=0,e=0,s=0,a=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=s,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,s,a=this._order){return this._x=t,this._y=e,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,s=!0){const a=t.elements,l=a[0],h=a[4],c=a[8],d=a[1],f=a[5],m=a[9],p=a[2],g=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-We(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-p,l),this._z=0);break;case"ZXY":this._x=Math.asin(We(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-h,f)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-h,f));break;case"YZX":this._z=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-p,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,s){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,s)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hf=0;const nc=new G,zi=new Fr,On=new Se,hs=new G,wr=new G,uf=new G,df=new Fr,ic=new G(1,0,0),rc=new G(0,1,0),sc=new G(0,0,1),ff={type:"added"},pf={type:"removed"};class Ue extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new G,e=new Gs,s=new Fr,a=new G(1,1,1);function l(){s.setFromEuler(e,!1)}function h(){e.setFromQuaternion(s,void 0,!1)}e._onChange(l),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Se},normalMatrix:{value:new ne}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(rc,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(rc,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,s){t.isVector3?hs.copy(t):hs.set(t,e,s);const a=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(wr,hs,this.up):On.lookAt(hs,wr,this.up),this.quaternion.setFromRotationMatrix(On),a&&(On.extractRotation(a.matrixWorld),zi.setFromRotationMatrix(On),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let s=0,a=this.children.length;s<a;s++){const h=this.children[s].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e,s=[]){this[t]===e&&s.push(this);const a=this.children;for(let l=0,h=a.length;l<h;l++)a[l].getObjectsByProperty(t,e,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let s=0,a=e.length;s<a;s++)e[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let s=0,a=e.length;s<a;s++)e[s].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let s=0,a=e.length;s<a;s++){const l=e[s];(l.matrixWorldAutoUpdate===!0||t===!0)&&l.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const s=this.parent;if(t===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let l=0,h=a.length;l<h;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",s={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const p=d[f];l(t.shapes,p)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(l(t.materials,this.material[d]));a.material=c}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];a.animations.push(l(t.animations,d))}}if(e){const c=h(t.geometries),d=h(t.materials),f=h(t.textures),m=h(t.images),p=h(t.shapes),g=h(t.skeletons),x=h(t.animations),S=h(t.nodes);c.length>0&&(s.geometries=c),d.length>0&&(s.materials=d),f.length>0&&(s.textures=f),m.length>0&&(s.images=m),p.length>0&&(s.shapes=p),g.length>0&&(s.skeletons=g),x.length>0&&(s.animations=x),S.length>0&&(s.nodes=S)}return s.object=a,s;function h(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let s=0;s<t.children.length;s++){const a=t.children[s];this.add(a.clone())}return this}}Ue.DEFAULT_UP=new G(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new G,Fn=new G,Pa=new G,Bn=new G,ki=new G,Hi=new G,ac=new G,Ca=new G,Ra=new G,Ia=new G;let us=!1;class yn{constructor(t=new G,e=new G,s=new G){this.a=t,this.b=e,this.c=s}static getNormal(t,e,s,a){a.subVectors(s,e),xn.subVectors(t,e),a.cross(xn);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,e,s,a,l){xn.subVectors(a,e),Fn.subVectors(s,e),Pa.subVectors(t,e);const h=xn.dot(xn),c=xn.dot(Fn),d=xn.dot(Pa),f=Fn.dot(Fn),m=Fn.dot(Pa),p=h*f-c*c;if(p===0)return l.set(0,0,0),null;const g=1/p,x=(f*d-c*m)*g,S=(h*m-c*d)*g;return l.set(1-x-S,S,x)}static containsPoint(t,e,s,a){return this.getBarycoord(t,e,s,a,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(t,e,s,a,l,h,c,d){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(t,e,s,a,l,h,c,d)}static getInterpolation(t,e,s,a,l,h,c,d){return this.getBarycoord(t,e,s,a,Bn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Bn.x),d.addScaledVector(h,Bn.y),d.addScaledVector(c,Bn.z),d)}static isFrontFacing(t,e,s,a){return xn.subVectors(s,e),Fn.subVectors(t,e),xn.cross(Fn).dot(a)<0}set(t,e,s){return this.a.copy(t),this.b.copy(e),this.c.copy(s),this}setFromPointsAndIndices(t,e,s,a){return this.a.copy(t[e]),this.b.copy(t[s]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,s,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),xn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,s,a,l){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),yn.getInterpolation(t,this.a,this.b,this.c,e,s,a,l)}getInterpolation(t,e,s,a,l){return yn.getInterpolation(t,this.a,this.b,this.c,e,s,a,l)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const s=this.a,a=this.b,l=this.c;let h,c;ki.subVectors(a,s),Hi.subVectors(l,s),Ca.subVectors(t,s);const d=ki.dot(Ca),f=Hi.dot(Ca);if(d<=0&&f<=0)return e.copy(s);Ra.subVectors(t,a);const m=ki.dot(Ra),p=Hi.dot(Ra);if(m>=0&&p<=m)return e.copy(a);const g=d*p-m*f;if(g<=0&&d>=0&&m<=0)return h=d/(d-m),e.copy(s).addScaledVector(ki,h);Ia.subVectors(t,l);const x=ki.dot(Ia),S=Hi.dot(Ia);if(S>=0&&x<=S)return e.copy(l);const M=x*f-d*S;if(M<=0&&f>=0&&S<=0)return c=f/(f-S),e.copy(s).addScaledVector(Hi,c);const y=m*S-x*p;if(y<=0&&p-m>=0&&x-S>=0)return ac.subVectors(l,a),c=(p-m)/(p-m+(x-S)),e.copy(a).addScaledVector(ac,c);const v=1/(y+M+g);return h=M*v,c=g*v,e.copy(s).addScaledVector(ki,h).addScaledVector(Hi,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class le{constructor(t,e,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,s)}set(t,e,s){if(e===void 0&&s===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,s,a=pe.workingColorSpace){return this.r=t,this.g=e,this.b=s,pe.toWorkingColorSpace(this,a),this}setHSL(t,e,s,a=pe.workingColorSpace){if(t=ho(t,1),e=We(e,0,1),s=We(s,0,1),e===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+e):s+e-s*e,h=2*s-l;this.r=Da(h,l,t+1/3),this.g=Da(h,l,t),this.b=Da(h,l,t-1/3)}return pe.toWorkingColorSpace(this,a),this}setStyle(t,e=ze){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const h=a[1],c=a[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const s=mh[t.toLowerCase()];return s!==void 0?this.setHex(s,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return pe.fromWorkingColorSpace(Ve.copy(this),t),Math.round(We(Ve.r*255,0,255))*65536+Math.round(We(Ve.g*255,0,255))*256+Math.round(We(Ve.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ve.copy(this),e);const s=Ve.r,a=Ve.g,l=Ve.b,h=Math.max(s,a,l),c=Math.min(s,a,l);let d,f;const m=(c+h)/2;if(c===h)d=0,f=0;else{const p=h-c;switch(f=m<=.5?p/(h+c):p/(2-h-c),h){case s:d=(a-l)/p+(a<l?6:0);break;case a:d=(l-s)/p+2;break;case l:d=(s-a)/p+4;break}d/=6}return t.h=d,t.s=f,t.l=m,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=ze){pe.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,s=Ve.g,a=Ve.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(t,e,s){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,s){return this.r=t.r+(e.r-t.r)*s,this.g=t.g+(e.g-t.g)*s,this.b=t.b+(e.b-t.b)*s,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(ds);const s=Pr($n.h,ds.h,e),a=Pr($n.s,ds.s,e),l=Pr($n.l,ds.l,e);return this.setHSL(s,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,s=this.g,a=this.b,l=t.elements;return this.r=l[0]*e+l[3]*s+l[6]*a,this.g=l[1]*e+l[4]*s+l[7]*a,this.b=l[2]*e+l[5]*s+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new le;le.NAMES=mh;let mf=0;class wi extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=or(),this.name="",this.type="Material",this.blending=tr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=qa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const s=t[e];if(s===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[e]=s}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(s.blending=this.blending),this.side!==ii&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Za&&(s.blendSrc=this.blendSrc),this.blendDst!==qa&&(s.blendDst=this.blendDst),this.blendEquation!==xi&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const h=[];for(const c in l){const d=l[c];delete d.metadata,h.push(d)}return h}if(e){const l=a(t.textures),h=a(t.images);l.length>0&&(s.textures=l),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let s=null;if(e!==null){const a=e.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=e[l].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Nr extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new G,fs=new ie;class En{constructor(t,e,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=s,this.usage=ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,s){t*=this.itemSize,s*=e.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=e.array[s+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,s=this.count;e<s;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,s=this.count;e<s;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,s=this.count;e<s;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let s=this.array[t*this.itemSize+e];return this.normalized&&(s=ji(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Ze(s,this.array)),this.array[t*this.itemSize+e]=s,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=s,this}setXYZ(t,e,s,a){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),s=Ze(s,this.array),a=Ze(a,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=a,this}setXYZW(t,e,s,a,l){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),s=Ze(s,this.array),a=Ze(a,this.array),l=Ze(l,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}}class _h extends En{constructor(t,e,s){super(new Uint16Array(t),e,s)}}class gh extends En{constructor(t,e,s){super(new Uint32Array(t),e,s)}}class ke extends En{constructor(t,e,s){super(new Float32Array(t),e,s)}}let _f=0;const hn=new Se,Ua=new Ue,Gi=new G,tn=new Br,Ar=new Br,Ie=new G;class Je extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?gh:_h)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,s=0){this.groups.push({start:t,count:e,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ne().getNormalMatrix(t);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,s){return hn.makeTranslation(t,e,s),this.applyMatrix4(hn),this}scale(t,e,s){return hn.makeScale(t,e,s),this.applyMatrix4(hn),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=[];for(let s=0,a=t.length;s<a;s++){const l=t[s];e.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const l=e[s];tn.setFromBufferAttribute(l),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let l=0,h=e.length;l<h;l++){const c=e[l];Ar.setFromBufferAttribute(c),this.morphTargetsRelative?(Ie.addVectors(tn.min,Ar.min),tn.expandByPoint(Ie),Ie.addVectors(tn.max,Ar.max),tn.expandByPoint(Ie)):(tn.expandByPoint(Ar.min),tn.expandByPoint(Ar.max))}tn.getCenter(s);let a=0;for(let l=0,h=t.count;l<h;l++)Ie.fromBufferAttribute(t,l),a=Math.max(a,s.distanceToSquared(Ie));if(e)for(let l=0,h=e.length;l<h;l++){const c=e[l],d=this.morphTargetsRelative;for(let f=0,m=c.count;f<m;f++)Ie.fromBufferAttribute(c,f),d&&(Gi.fromBufferAttribute(t,f),Ie.add(Gi)),a=Math.max(a,s.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.array,a=e.position.array,l=e.normal.array,h=e.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,f=[],m=[];for(let D=0;D<c;D++)f[D]=new G,m[D]=new G;const p=new G,g=new G,x=new G,S=new ie,M=new ie,y=new ie,v=new G,C=new G;function b(D,Q,rt){p.fromArray(a,D*3),g.fromArray(a,Q*3),x.fromArray(a,rt*3),S.fromArray(h,D*2),M.fromArray(h,Q*2),y.fromArray(h,rt*2),g.sub(p),x.sub(p),M.sub(S),y.sub(S);const pt=1/(M.x*y.y-y.x*M.y);isFinite(pt)&&(v.copy(g).multiplyScalar(y.y).addScaledVector(x,-M.y).multiplyScalar(pt),C.copy(x).multiplyScalar(M.x).addScaledVector(g,-y.x).multiplyScalar(pt),f[D].add(v),f[Q].add(v),f[rt].add(v),m[D].add(C),m[Q].add(C),m[rt].add(C))}let I=this.groups;I.length===0&&(I=[{start:0,count:s.length}]);for(let D=0,Q=I.length;D<Q;++D){const rt=I[D],pt=rt.start,F=rt.count;for(let $=pt,tt=pt+F;$<tt;$+=3)b(s[$+0],s[$+1],s[$+2])}const B=new G,R=new G,U=new G,it=new G;function w(D){U.fromArray(l,D*3),it.copy(U);const Q=f[D];B.copy(Q),B.sub(U.multiplyScalar(U.dot(Q))).normalize(),R.crossVectors(it,Q);const pt=R.dot(m[D])<0?-1:1;d[D*4]=B.x,d[D*4+1]=B.y,d[D*4+2]=B.z,d[D*4+3]=pt}for(let D=0,Q=I.length;D<Q;++D){const rt=I[D],pt=rt.start,F=rt.count;for(let $=pt,tt=pt+F;$<tt;$+=3)w(s[$+0]),w(s[$+1]),w(s[$+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",s);else for(let g=0,x=s.count;g<x;g++)s.setXYZ(g,0,0,0);const a=new G,l=new G,h=new G,c=new G,d=new G,f=new G,m=new G,p=new G;if(t)for(let g=0,x=t.count;g<x;g+=3){const S=t.getX(g+0),M=t.getX(g+1),y=t.getX(g+2);a.fromBufferAttribute(e,S),l.fromBufferAttribute(e,M),h.fromBufferAttribute(e,y),m.subVectors(h,l),p.subVectors(a,l),m.cross(p),c.fromBufferAttribute(s,S),d.fromBufferAttribute(s,M),f.fromBufferAttribute(s,y),c.add(m),d.add(m),f.add(m),s.setXYZ(S,c.x,c.y,c.z),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(y,f.x,f.y,f.z)}else for(let g=0,x=e.count;g<x;g+=3)a.fromBufferAttribute(e,g+0),l.fromBufferAttribute(e,g+1),h.fromBufferAttribute(e,g+2),m.subVectors(h,l),p.subVectors(a,l),m.cross(p),s.setXYZ(g+0,m.x,m.y,m.z),s.setXYZ(g+1,m.x,m.y,m.z),s.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,s=t.count;e<s;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(c,d){const f=c.array,m=c.itemSize,p=c.normalized,g=new f.constructor(d.length*m);let x=0,S=0;for(let M=0,y=d.length;M<y;M++){c.isInterleavedBufferAttribute?x=d[M]*c.data.stride+c.offset:x=d[M]*m;for(let v=0;v<m;v++)g[S++]=f[x++]}return new En(g,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,s=this.index.array,a=this.attributes;for(const c in a){const d=a[c],f=t(d,s);e.setAttribute(c,f)}const l=this.morphAttributes;for(const c in l){const d=[],f=l[c];for(let m=0,p=f.length;m<p;m++){const g=f[m],x=t(g,s);d.push(x)}e.morphAttributes[c]=d}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let c=0,d=h.length;c<d;c++){const f=h[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const s=this.attributes;for(const d in s){const f=s[d];t.data.attributes[d]=f.toJSON(t.data)}const a={};let l=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let p=0,g=f.length;p<g;p++){const x=f[p];m.push(x.toJSON(t.data))}m.length>0&&(a[d]=m,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(e));const a=t.attributes;for(const f in a){const m=a[f];this.setAttribute(f,m.clone(e))}const l=t.morphAttributes;for(const f in l){const m=[],p=l[f];for(let g=0,x=p.length;g<x;g++)m.push(p[g].clone(e));this.morphAttributes[f]=m}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let f=0,m=h.length;f<m;f++){const p=h[f];this.addGroup(p.start,p.count,p.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new Se,mi=new Hs,ps=new zr,lc=new G,Vi=new G,Wi=new G,Xi=new G,Na=new G,ms=new G,_s=new ie,gs=new ie,vs=new ie,cc=new G,hc=new G,uc=new G,xs=new G,ys=new G;class en extends Ue{constructor(t=new Je,e=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const a=e[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=a.length;l<h;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(t,e){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,h=s.morphTargetsRelative;e.fromBufferAttribute(a,t);const c=this.morphTargetInfluences;if(l&&c){ms.set(0,0,0);for(let d=0,f=l.length;d<f;d++){const m=c[d],p=l[d];m!==0&&(Na.fromBufferAttribute(p,t),h?ms.addScaledVector(Na,m):ms.addScaledVector(Na.sub(e),m))}e.add(ms)}return e}raycast(t,e){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ps.copy(s.boundingSphere),ps.applyMatrix4(l),mi.copy(t.ray).recast(t.near),!(ps.containsPoint(mi.origin)===!1&&(mi.intersectSphere(ps,lc)===null||mi.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(oc.copy(l).invert(),mi.copy(t.ray).applyMatrix4(oc),!(s.boundingBox!==null&&mi.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,s){let a;const l=this.geometry,h=this.material,c=l.index,d=l.attributes.position,f=l.attributes.uv,m=l.attributes.uv1,p=l.attributes.normal,g=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(h))for(let S=0,M=g.length;S<M;S++){const y=g[S],v=h[y.materialIndex],C=Math.max(y.start,x.start),b=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let I=C,B=b;I<B;I+=3){const R=c.getX(I),U=c.getX(I+1),it=c.getX(I+2);a=Ms(this,v,t,s,f,m,p,R,U,it),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{const S=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let y=S,v=M;y<v;y+=3){const C=c.getX(y),b=c.getX(y+1),I=c.getX(y+2);a=Ms(this,h,t,s,f,m,p,C,b,I),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(h))for(let S=0,M=g.length;S<M;S++){const y=g[S],v=h[y.materialIndex],C=Math.max(y.start,x.start),b=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let I=C,B=b;I<B;I+=3){const R=I,U=I+1,it=I+2;a=Ms(this,v,t,s,f,m,p,R,U,it),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{const S=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let y=S,v=M;y<v;y+=3){const C=y,b=y+1,I=y+2;a=Ms(this,h,t,s,f,m,p,C,b,I),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}}}function gf(i,t,e,s,a,l,h,c){let d;if(t.side===je?d=s.intersectTriangle(h,l,a,!0,c):d=s.intersectTriangle(a,l,h,t.side===ii,c),d===null)return null;ys.copy(c),ys.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(ys);return f<e.near||f>e.far?null:{distance:f,point:ys.clone(),object:i}}function Ms(i,t,e,s,a,l,h,c,d,f){i.getVertexPosition(c,Vi),i.getVertexPosition(d,Wi),i.getVertexPosition(f,Xi);const m=gf(i,t,e,s,Vi,Wi,Xi,xs);if(m){a&&(_s.fromBufferAttribute(a,c),gs.fromBufferAttribute(a,d),vs.fromBufferAttribute(a,f),m.uv=yn.getInterpolation(xs,Vi,Wi,Xi,_s,gs,vs,new ie)),l&&(_s.fromBufferAttribute(l,c),gs.fromBufferAttribute(l,d),vs.fromBufferAttribute(l,f),m.uv1=yn.getInterpolation(xs,Vi,Wi,Xi,_s,gs,vs,new ie),m.uv2=m.uv1),h&&(cc.fromBufferAttribute(h,c),hc.fromBufferAttribute(h,d),uc.fromBufferAttribute(h,f),m.normal=yn.getInterpolation(xs,Vi,Wi,Xi,cc,hc,uc,new G),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const p={a:c,b:d,c:f,normal:new G,materialIndex:0};yn.getNormal(Vi,Wi,Xi,p.normal),m.face=p}return m}class kr extends Je{constructor(t=1,e=1,s=1,a=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:s,widthSegments:a,heightSegments:l,depthSegments:h};const c=this;a=Math.floor(a),l=Math.floor(l),h=Math.floor(h);const d=[],f=[],m=[],p=[];let g=0,x=0;S("z","y","x",-1,-1,s,e,t,h,l,0),S("z","y","x",1,-1,s,e,-t,h,l,1),S("x","z","y",1,1,t,s,e,a,h,2),S("x","z","y",1,-1,t,s,-e,a,h,3),S("x","y","z",1,-1,t,e,s,a,l,4),S("x","y","z",-1,-1,t,e,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(m,3)),this.setAttribute("uv",new ke(p,2));function S(M,y,v,C,b,I,B,R,U,it,w){const D=I/U,Q=B/it,rt=I/2,pt=B/2,F=R/2,$=U+1,tt=it+1;let st=0,X=0;const V=new G;for(let z=0;z<tt;z++){const et=z*Q-pt;for(let at=0;at<$;at++){const W=at*D-rt;V[M]=W*C,V[y]=et*b,V[v]=F,f.push(V.x,V.y,V.z),V[M]=0,V[y]=0,V[v]=R>0?1:-1,m.push(V.x,V.y,V.z),p.push(at/U),p.push(1-z/it),st+=1}}for(let z=0;z<it;z++)for(let et=0;et<U;et++){const at=g+et+$*z,W=g+et+$*(z+1),nt=g+(et+1)+$*(z+1),lt=g+(et+1)+$*z;d.push(at,W,lt),d.push(W,nt,lt),X+=6}c.addGroup(x,X,w),x+=X,g+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(i){const t={};for(const e in i){t[e]={};for(const s in i[e]){const a=i[e][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][s]=null):t[e][s]=a.clone():Array.isArray(a)?t[e][s]=a.slice():t[e][s]=a}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const s=sr(i[e]);for(const a in s)t[a]=s[a]}return t}function vf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vh(i){return i.getRenderTarget()===null?i.outputColorSpace:pe.workingColorSpace}const xf={clone:sr,merge:qe};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const h=this.uniforms[a].value;h&&h.isTexture?e.uniforms[a]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[a]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[a]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[a]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[a]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[a]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[a]={type:"m4",value:h.toArray()}:e.uniforms[a]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(e.extensions=s),e}}class xh extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends xh{constructor(t=50,e=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,s,a,l,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,s=2*e,a=this.aspect*s,l=-.5*a;const h=this.view;if(this.view!==null&&this.view.enabled){const d=h.fullWidth,f=h.fullHeight;l+=h.offsetX*a/d,e-=h.offsetY*s/f,a*=h.width/d,s*=h.height/f}const c=this.filmOffset;c!==0&&(l+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,e,e-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,qi=1;class Sf extends Ue{constructor(t,e,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new dn(Zi,qi,t,e);a.layers=this.layers,this.add(a);const l=new dn(Zi,qi,t,e);l.layers=this.layers,this.add(l);const h=new dn(Zi,qi,t,e);h.layers=this.layers,this.add(h);const c=new dn(Zi,qi,t,e);c.layers=this.layers,this.add(c);const d=new dn(Zi,qi,t,e);d.layers=this.layers,this.add(d);const f=new dn(Zi,qi,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[s,a,l,h,c,d]=e;for(const f of e)this.remove(f);if(t===kn)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Os)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,h,c,d,f,m]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,a),t.render(e,l),t.setRenderTarget(s,1,a),t.render(e,h),t.setRenderTarget(s,2,a),t.render(e,c),t.setRenderTarget(s,3,a),t.render(e,d),t.setRenderTarget(s,4,a),t.render(e,f),s.texture.generateMipmaps=M,t.setRenderTarget(s,5,a),t.render(e,m),t.setRenderTarget(p,g,x),t.xr.enabled=S,s.texture.needsPMREMUpdate=!0}}class yh extends $e{constructor(t,e,s,a,l,h,c,d,f,m){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,s,a,l,h,c,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ef extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},a=[s,s,s,s,s,s];e.encoding!==void 0&&(Cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ei?ze:fn),this.texture=new yh(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new kr(5,5,5),l=new bi({name:"CubemapFromEquirect",uniforms:sr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:je,blending:ti});l.uniforms.tEquirect.value=e;const h=new en(a,l),c=e.minFilter;return e.minFilter===Rr&&(e.minFilter=un),new Sf(1,10,this).update(t,h),e.minFilter=c,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,s,a){const l=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,s,a);t.setRenderTarget(l)}}const Oa=new G,Tf=new G,bf=new ne;class gi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,s,a){return this.normal.set(t,e,s),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,s){const a=Oa.subVectors(s,e).cross(Tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const s=t.delta(Oa),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return e<0&&s>0||s<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const s=e||bf.getNormalMatrix(t),a=this.coplanarPoint(Oa).applyMatrix4(t),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new zr,Ss=new G;class fo{constructor(t=new gi,e=new gi,s=new gi,a=new gi,l=new gi,h=new gi){this.planes=[t,e,s,a,l,h]}set(t,e,s,a,l,h){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(s),c[3].copy(a),c[4].copy(l),c[5].copy(h),this}copy(t){const e=this.planes;for(let s=0;s<6;s++)e[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,e=kn){const s=this.planes,a=t.elements,l=a[0],h=a[1],c=a[2],d=a[3],f=a[4],m=a[5],p=a[6],g=a[7],x=a[8],S=a[9],M=a[10],y=a[11],v=a[12],C=a[13],b=a[14],I=a[15];if(s[0].setComponents(d-l,g-f,y-x,I-v).normalize(),s[1].setComponents(d+l,g+f,y+x,I+v).normalize(),s[2].setComponents(d+h,g+m,y+S,I+C).normalize(),s[3].setComponents(d-h,g-m,y-S,I-C).normalize(),s[4].setComponents(d-c,g-p,y-M,I-b).normalize(),e===kn)s[5].setComponents(d+c,g+p,y+M,I+b).normalize();else if(e===Os)s[5].setComponents(c,p,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,s=t.center,a=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let s=0;s<6;s++){const a=e[s];if(Ss.x=a.normal.x>0?t.max.x:t.min.x,Ss.y=a.normal.y>0?t.max.y:t.min.y,Ss.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let s=0;s<6;s++)if(e[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let i=null,t=!1,e=null,s=null;function a(l,h){e(l,h),s=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(s=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){i=l}}}function wf(i,t){const e=t.isWebGL2,s=new WeakMap;function a(f,m){const p=f.array,g=f.usage,x=p.byteLength,S=i.createBuffer();i.bindBuffer(m,S),i.bufferData(m,p,g),f.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(e)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function l(f,m,p){const g=m.array,x=m._updateRange,S=m.updateRanges;if(i.bindBuffer(p,f),x.count===-1&&S.length===0&&i.bufferSubData(p,0,g),S.length!==0){for(let M=0,y=S.length;M<y;M++){const v=S[M];e?i.bufferSubData(p,v.start*g.BYTES_PER_ELEMENT,g,v.start,v.count):i.bufferSubData(p,v.start*g.BYTES_PER_ELEMENT,g.subarray(v.start,v.start+v.count))}m.clearUpdateRanges()}x.count!==-1&&(e?i.bufferSubData(p,x.offset*g.BYTES_PER_ELEMENT,g,x.offset,x.count):i.bufferSubData(p,x.offset*g.BYTES_PER_ELEMENT,g.subarray(x.offset,x.offset+x.count)),x.count=-1),m.onUploadCallback()}function h(f){return f.isInterleavedBufferAttribute&&(f=f.data),s.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=s.get(f);m&&(i.deleteBuffer(m.buffer),s.delete(f))}function d(f,m){if(f.isGLBufferAttribute){const g=s.get(f);(!g||g.version<f.version)&&s.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=s.get(f);if(p===void 0)s.set(f,a(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(p.buffer,f,m),p.version=f.version}}return{get:h,remove:c,update:d}}class po extends Je{constructor(t=1,e=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:s,heightSegments:a};const l=t/2,h=e/2,c=Math.floor(s),d=Math.floor(a),f=c+1,m=d+1,p=t/c,g=e/d,x=[],S=[],M=[],y=[];for(let v=0;v<m;v++){const C=v*g-h;for(let b=0;b<f;b++){const I=b*p-l;S.push(I,-C,0),M.push(0,0,1),y.push(b/c),y.push(1-v/d)}}for(let v=0;v<d;v++)for(let C=0;C<c;C++){const b=C+f*v,I=C+f*(v+1),B=C+1+f*(v+1),R=C+1+f*v;x.push(b,I,R),x.push(I,B,R)}this.setIndex(x),this.setAttribute("position",new ke(S,3)),this.setAttribute("normal",new ke(M,3)),this.setAttribute("uv",new ke(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ap=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Af,alphahash_pars_fragment:Lf,alphamap_fragment:Pf,alphamap_pars_fragment:Cf,alphatest_fragment:Rf,alphatest_pars_fragment:If,aomap_fragment:Df,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Of,begin_vertex:Ff,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:kf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:Zf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:jf,common:Kf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:tp,emissivemap_fragment:ep,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:rp,envmap_fragment:sp,envmap_common_pars_fragment:ap,envmap_pars_fragment:op,envmap_pars_vertex:lp,envmap_physical_pars_fragment:yp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_fragment:mp,lightmap_pars_fragment:_p,lights_lambert_fragment:gp,lights_lambert_pars_fragment:vp,lights_pars_begin:xp,lights_toon_fragment:Mp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:bp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ap,lights_fragment_maps:Lp,lights_fragment_end:Pp,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Dp,map_fragment:Up,map_pars_fragment:Np,map_particle_fragment:Op,map_particle_pars_fragment:Fp,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:zp,morphcolor_vertex:kp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Vp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:Zp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Qp,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:rm,dithering_pars_fragment:sm,roughnessmap_fragment:am,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:dm,skinning_pars_vertex:fm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:_m,specularmap_pars_fragment:gm,tonemapping_fragment:vm,tonemapping_pars_fragment:xm,transmission_fragment:ym,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:Em,uv_vertex:Tm,worldpos_vertex:bm,background_vert:wm,background_frag:Am,backgroundCube_vert:Lm,backgroundCube_frag:Pm,cube_vert:Cm,cube_frag:Rm,depth_vert:Im,depth_frag:Dm,distanceRGBA_vert:Um,distanceRGBA_frag:Nm,equirect_vert:Om,equirect_frag:Fm,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:km,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Vm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:Zm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:jm,meshphysical_vert:Km,meshphysical_frag:$m,meshtoon_vert:Jm,meshtoon_frag:Qm,points_vert:t_,points_frag:e_,shadow_vert:n_,shadow_frag:i_,sprite_vert:r_,sprite_frag:s_},_t={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},An={basic:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new le(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:qe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:qe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new le(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:qe([_t.points,_t.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:qe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:qe([_t.common,_t.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:qe([_t.sprite,_t.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:qe([_t.common,_t.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:qe([_t.lights,_t.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};An.physical={uniforms:qe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Es={r:0,b:0,g:0};function a_(i,t,e,s,a,l,h){const c=new le(0);let d=l===!0?0:1,f,m,p=null,g=0,x=null;function S(y,v){let C=!1,b=v.isScene===!0?v.background:null;b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b)),b===null?M(c,d):b&&b.isColor&&(M(b,1),C=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(i.autoClear||C)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===zs)?(m===void 0&&(m=new en(new kr(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:sr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=pe.getTransfer(b.colorSpace)!==ve,(p!==b||g!==b.version||x!==i.toneMapping)&&(m.material.needsUpdate=!0,p=b,g=b.version,x=i.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(f===void 0&&(f=new en(new po(2,2),new bi({name:"BackgroundMaterial",uniforms:sr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=b,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=pe.getTransfer(b.colorSpace)!==ve,b.matrixAutoUpdate===!0&&b.updateMatrix(),f.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||g!==b.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,p=b,g=b.version,x=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null))}function M(y,v){y.getRGB(Es,vh(i)),s.buffers.color.setClear(Es.r,Es.g,Es.b,v,h)}return{getClearColor:function(){return c},setClearColor:function(y,v=1){c.set(y),d=v,M(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(y){d=y,M(c,d)},render:S}}function o_(i,t,e,s){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:t.get("OES_vertex_array_object"),h=s.isWebGL2||l!==null,c={},d=y(null);let f=d,m=!1;function p(F,$,tt,st,X){let V=!1;if(h){const z=M(st,tt,$);f!==z&&(f=z,x(f.object)),V=v(F,st,tt,X),V&&C(F,st,tt,X)}else{const z=$.wireframe===!0;(f.geometry!==st.id||f.program!==tt.id||f.wireframe!==z)&&(f.geometry=st.id,f.program=tt.id,f.wireframe=z,V=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(V||m)&&(m=!1,it(F,$,tt,st),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function g(){return s.isWebGL2?i.createVertexArray():l.createVertexArrayOES()}function x(F){return s.isWebGL2?i.bindVertexArray(F):l.bindVertexArrayOES(F)}function S(F){return s.isWebGL2?i.deleteVertexArray(F):l.deleteVertexArrayOES(F)}function M(F,$,tt){const st=tt.wireframe===!0;let X=c[F.id];X===void 0&&(X={},c[F.id]=X);let V=X[$.id];V===void 0&&(V={},X[$.id]=V);let z=V[st];return z===void 0&&(z=y(g()),V[st]=z),z}function y(F){const $=[],tt=[],st=[];for(let X=0;X<a;X++)$[X]=0,tt[X]=0,st[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:tt,attributeDivisors:st,object:F,attributes:{},index:null}}function v(F,$,tt,st){const X=f.attributes,V=$.attributes;let z=0;const et=tt.getAttributes();for(const at in et)if(et[at].location>=0){const nt=X[at];let lt=V[at];if(lt===void 0&&(at==="instanceMatrix"&&F.instanceMatrix&&(lt=F.instanceMatrix),at==="instanceColor"&&F.instanceColor&&(lt=F.instanceColor)),nt===void 0||nt.attribute!==lt||lt&&nt.data!==lt.data)return!0;z++}return f.attributesNum!==z||f.index!==st}function C(F,$,tt,st){const X={},V=$.attributes;let z=0;const et=tt.getAttributes();for(const at in et)if(et[at].location>=0){let nt=V[at];nt===void 0&&(at==="instanceMatrix"&&F.instanceMatrix&&(nt=F.instanceMatrix),at==="instanceColor"&&F.instanceColor&&(nt=F.instanceColor));const lt={};lt.attribute=nt,nt&&nt.data&&(lt.data=nt.data),X[at]=lt,z++}f.attributes=X,f.attributesNum=z,f.index=st}function b(){const F=f.newAttributes;for(let $=0,tt=F.length;$<tt;$++)F[$]=0}function I(F){B(F,0)}function B(F,$){const tt=f.newAttributes,st=f.enabledAttributes,X=f.attributeDivisors;tt[F]=1,st[F]===0&&(i.enableVertexAttribArray(F),st[F]=1),X[F]!==$&&((s.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,$),X[F]=$)}function R(){const F=f.newAttributes,$=f.enabledAttributes;for(let tt=0,st=$.length;tt<st;tt++)$[tt]!==F[tt]&&(i.disableVertexAttribArray(tt),$[tt]=0)}function U(F,$,tt,st,X,V,z){z===!0?i.vertexAttribIPointer(F,$,tt,X,V):i.vertexAttribPointer(F,$,tt,st,X,V)}function it(F,$,tt,st){if(s.isWebGL2===!1&&(F.isInstancedMesh||st.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const X=st.attributes,V=tt.getAttributes(),z=$.defaultAttributeValues;for(const et in V){const at=V[et];if(at.location>=0){let W=X[et];if(W===void 0&&(et==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),et==="instanceColor"&&F.instanceColor&&(W=F.instanceColor)),W!==void 0){const nt=W.normalized,lt=W.itemSize,ft=e.get(W);if(ft===void 0)continue;const St=ft.buffer,Ut=ft.type,Zt=ft.bytesPerElement,Nt=s.isWebGL2===!0&&(Ut===i.INT||Ut===i.UNSIGNED_INT||W.gpuType===eh);if(W.isInterleavedBufferAttribute){const re=W.data,Z=re.stride,Ae=W.offset;if(re.isInstancedInterleavedBuffer){for(let It=0;It<at.locationSize;It++)B(at.location+It,re.meshPerAttribute);F.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let It=0;It<at.locationSize;It++)I(at.location+It);i.bindBuffer(i.ARRAY_BUFFER,St);for(let It=0;It<at.locationSize;It++)U(at.location+It,lt/at.locationSize,Ut,nt,Z*Zt,(Ae+lt/at.locationSize*It)*Zt,Nt)}else{if(W.isInstancedBufferAttribute){for(let re=0;re<at.locationSize;re++)B(at.location+re,W.meshPerAttribute);F.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let re=0;re<at.locationSize;re++)I(at.location+re);i.bindBuffer(i.ARRAY_BUFFER,St);for(let re=0;re<at.locationSize;re++)U(at.location+re,lt/at.locationSize,Ut,nt,lt*Zt,lt/at.locationSize*re*Zt,Nt)}}else if(z!==void 0){const nt=z[et];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(at.location,nt);break;case 3:i.vertexAttrib3fv(at.location,nt);break;case 4:i.vertexAttrib4fv(at.location,nt);break;default:i.vertexAttrib1fv(at.location,nt)}}}}R()}function w(){rt();for(const F in c){const $=c[F];for(const tt in $){const st=$[tt];for(const X in st)S(st[X].object),delete st[X];delete $[tt]}delete c[F]}}function D(F){if(c[F.id]===void 0)return;const $=c[F.id];for(const tt in $){const st=$[tt];for(const X in st)S(st[X].object),delete st[X];delete $[tt]}delete c[F.id]}function Q(F){for(const $ in c){const tt=c[$];if(tt[F.id]===void 0)continue;const st=tt[F.id];for(const X in st)S(st[X].object),delete st[X];delete tt[F.id]}}function rt(){pt(),m=!0,f!==d&&(f=d,x(f.object))}function pt(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:p,reset:rt,resetDefaultState:pt,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:Q,initAttributes:b,enableAttribute:I,disableUnusedAttributes:R}}function l_(i,t,e,s){const a=s.isWebGL2;let l;function h(m){l=m}function c(m,p){i.drawArrays(l,m,p),e.update(p,l,1)}function d(m,p,g){if(g===0)return;let x,S;if(a)x=i,S="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](l,m,p,g),e.update(p,l,g)}function f(m,p,g){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<g;S++)this.render(m[S],p[S]);else{x.multiDrawArraysWEBGL(l,m,0,p,0,g);let S=0;for(let M=0;M<g;M++)S+=p[M];e.update(S,l,1)}}this.setMode=h,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function c_(i,t,e){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=h||t.has("WEBGL_draw_buffers"),m=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,I=h||t.has("OES_texture_float"),B=b&&I,R=h?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:f,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:C,vertexTextures:b,floatFragmentTextures:I,floatVertexTextures:B,maxSamples:R}}function h_(i){const t=this;let e=null,s=0,a=!1,l=!1;const h=new gi,c=new ne,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const x=p.length!==0||g||s!==0||a;return a=g,s=p.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(p,g){e=m(p,g,0)},this.setState=function(p,g,x){const S=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,v=i.get(p);if(!a||S===null||S.length===0||l&&!y)l?m(null):f();else{const C=l?0:s,b=C*4;let I=v.clippingState||null;d.value=I,I=m(S,g,b,x);for(let B=0;B!==b;++B)I[B]=e[B];v.clippingState=I,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function m(p,g,x,S){const M=p!==null?p.length:0;let y=null;if(M!==0){if(y=d.value,S!==!0||y===null){const v=x+M*4,C=g.matrixWorldInverse;c.getNormalMatrix(C),(y===null||y.length<v)&&(y=new Float32Array(v));for(let b=0,I=x;b!==M;++b,I+=4)h.copy(p[b]).applyMatrix4(C,c),h.normal.toArray(y,I),y[I+3]=h.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function u_(i){let t=new WeakMap;function e(h,c){return c===Ya?h.mapping=nr:c===ja&&(h.mapping=ir),h}function s(h){if(h&&h.isTexture){const c=h.mapping;if(c===Ya||c===ja)if(t.has(h)){const d=t.get(h).texture;return e(d,h.mapping)}else{const d=h.image;if(d&&d.height>0){const f=new Ef(d.height/2);return f.fromEquirectangularTexture(i,h),t.set(h,f),h.addEventListener("dispose",a),e(f.texture,h.mapping)}else return null}}return h}function a(h){const c=h.target;c.removeEventListener("dispose",a);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function l(){t=new WeakMap}return{get:s,dispose:l}}class Sh extends xh{constructor(t=-1,e=1,s=1,a=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=s,this.bottom=a,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,s,a,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-t,h=s+t,c=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=f*this.view.offsetX,h=l+f*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,h,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,dc=[.125,.215,.35,.446,.526,.582],yi=20,Fa=new Sh,fc=new le;let Ba=null,za=0,ka=0;const vi=(1+Math.sqrt(5))/2,Yi=1/vi,pc=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,vi,Yi),new G(0,vi,-Yi),new G(Yi,0,vi),new G(-Yi,0,vi),new G(vi,Yi,0),new G(-vi,Yi,0)];class mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,s=.1,a=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,s,a,l),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,za,ka),t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel();const s=e||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,s={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ir,format:Sn,colorSpace:Gn,depthBuffer:!1},a=_c(t,e,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d_(l)),this._blurMaterial=f_(l,t,e)}return a}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,s,a){const c=new dn(90,1,e,s),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,p=m.autoClear,g=m.toneMapping;m.getClearColor(fc),m.toneMapping=ei,m.autoClear=!1;const x=new Nr({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),S=new en(new kr,x);let M=!1;const y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,M=!0):(x.color.copy(fc),M=!0);for(let v=0;v<6;v++){const C=v%3;C===0?(c.up.set(0,d[v],0),c.lookAt(f[v],0,0)):C===1?(c.up.set(0,0,d[v]),c.lookAt(0,f[v],0)):(c.up.set(0,d[v],0),c.lookAt(0,0,f[v]));const b=this._cubeSize;Ts(a,C*b,v>2?b:0,b,b),m.setRenderTarget(a),M&&m.render(S,c),m.render(t,c)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=g,m.autoClear=p,t.background=y}_textureToCubeUV(t,e){const s=this._renderer,a=t.mapping===nr||t.mapping===ir;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const l=a?this._cubemapMaterial:this._equirectMaterial,h=new en(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=t;const d=this._cubeSize;Ts(e,0,0,3*d,2*d),s.setRenderTarget(e),s.render(h,Fa)}_applyPMREM(t){const e=this._renderer,s=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=pc[(a-1)%pc.length];this._blur(t,a-1,a,l,h)}e.autoClear=s}_blur(t,e,s,a,l){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,s,a,"latitudinal",l),this._halfBlur(h,t,s,s,a,"longitudinal",l)}_halfBlur(t,e,s,a,l,h,c){const d=this._renderer,f=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new en(this._lodPlanes[a],f),g=f.uniforms,x=this._sizeLods[s]-1,S=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*yi-1),M=l/S,y=isFinite(l)?1+Math.floor(m*M):yi;y>yi&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yi}`);const v=[];let C=0;for(let U=0;U<yi;++U){const it=U/M,w=Math.exp(-it*it/2);v.push(w),U===0?C+=w:U<y&&(C+=2*w)}for(let U=0;U<v.length;U++)v[U]=v[U]/C;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=h==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:b}=this;g.dTheta.value=S,g.mipInt.value=b-s;const I=this._sizeLods[a],B=3*I*(a>b-$i?a-b+$i:0),R=4*(this._cubeSize-I);Ts(e,B,R,3*I,2*I),d.setRenderTarget(e),d.render(p,Fa)}}function d_(i){const t=[],e=[],s=[];let a=i;const l=i-$i+1+dc.length;for(let h=0;h<l;h++){const c=Math.pow(2,a);e.push(c);let d=1/c;h>i-$i?d=dc[h-i+$i-1]:h===0&&(d=0),s.push(d);const f=1/(c-2),m=-f,p=1+f,g=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,S=6,M=3,y=2,v=1,C=new Float32Array(M*S*x),b=new Float32Array(y*S*x),I=new Float32Array(v*S*x);for(let R=0;R<x;R++){const U=R%3*2/3-1,it=R>2?0:-1,w=[U,it,0,U+2/3,it,0,U+2/3,it+1,0,U,it,0,U+2/3,it+1,0,U,it+1,0];C.set(w,M*S*R),b.set(g,y*S*R);const D=[R,R,R,R,R,R];I.set(D,v*S*R)}const B=new Je;B.setAttribute("position",new En(C,M)),B.setAttribute("uv",new En(b,y)),B.setAttribute("faceIndex",new En(I,v)),t.push(B),a>$i&&a--}return{lodPlanes:t,sizeLods:e,sigmas:s}}function _c(i,t,e){const s=new Ti(i,t,e);return s.texture.mapping=zs,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ts(i,t,e,s,a){i.viewport.set(t,e,s,a),i.scissor.set(t,e,s,a)}function f_(i,t,e){const s=new Float32Array(yi),a=new G(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function gc(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function vc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p_(i){let t=new WeakMap,e=null;function s(c){if(c&&c.isTexture){const d=c.mapping,f=d===Ya||d===ja,m=d===nr||d===ir;if(f||m)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=t.get(c);return e===null&&(e=new mc(i)),p=f?e.fromEquirectangular(c,p):e.fromCubemap(c,p),t.set(c,p),p.texture}else{if(t.has(c))return t.get(c).texture;{const p=c.image;if(f&&p&&p.height>0||m&&p&&a(p)){e===null&&(e=new mc(i));const g=f?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,g),c.addEventListener("dispose",l),g.texture}else return null}}}return c}function a(c){let d=0;const f=6;for(let m=0;m<f;m++)c[m]!==void 0&&d++;return d===f}function l(c){const d=c.target;d.removeEventListener("dispose",l);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:s,dispose:h}}function m_(i){const t={};function e(s){if(t[s]!==void 0)return t[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return t[s]=a,a}return{has:function(s){return e(s)!==null},init:function(s){s.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(s){const a=e(s);return a===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function __(i,t,e,s){const a={},l=new WeakMap;function h(p){const g=p.target;g.index!==null&&t.remove(g.index);for(const S in g.attributes)t.remove(g.attributes[S]);for(const S in g.morphAttributes){const M=g.morphAttributes[S];for(let y=0,v=M.length;y<v;y++)t.remove(M[y])}g.removeEventListener("dispose",h),delete a[g.id];const x=l.get(g);x&&(t.remove(x),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(p,g){return a[g.id]===!0||(g.addEventListener("dispose",h),a[g.id]=!0,e.memory.geometries++),g}function d(p){const g=p.attributes;for(const S in g)t.update(g[S],i.ARRAY_BUFFER);const x=p.morphAttributes;for(const S in x){const M=x[S];for(let y=0,v=M.length;y<v;y++)t.update(M[y],i.ARRAY_BUFFER)}}function f(p){const g=[],x=p.index,S=p.attributes.position;let M=0;if(x!==null){const C=x.array;M=x.version;for(let b=0,I=C.length;b<I;b+=3){const B=C[b+0],R=C[b+1],U=C[b+2];g.push(B,R,R,U,U,B)}}else if(S!==void 0){const C=S.array;M=S.version;for(let b=0,I=C.length/3-1;b<I;b+=3){const B=b+0,R=b+1,U=b+2;g.push(B,R,R,U,U,B)}}else return;const y=new(uh(g)?gh:_h)(g,1);y.version=M;const v=l.get(p);v&&t.remove(v),l.set(p,y)}function m(p){const g=l.get(p);if(g){const x=p.index;x!==null&&g.version<x.version&&f(p)}else f(p);return l.get(p)}return{get:c,update:d,getWireframeAttribute:m}}function g_(i,t,e,s){const a=s.isWebGL2;let l;function h(x){l=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function m(x,S){i.drawElements(l,S,c,x*d),e.update(S,l,1)}function p(x,S,M){if(M===0)return;let y,v;if(a)y=i,v="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](l,S,c,x*d,M),e.update(S,l,M)}function g(x,S,M){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<M;v++)this.render(x[v]/d,S[v]);else{y.multiDrawElementsWEBGL(l,S,0,c,x,0,M);let v=0;for(let C=0;C<M;C++)v+=S[C];e.update(v,l,1)}}this.setMode=h,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function v_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,h,c){switch(e.calls++,h){case i.TRIANGLES:e.triangles+=c*(l/3);break;case i.LINES:e.lines+=c*(l/2);break;case i.LINE_STRIP:e.lines+=c*(l-1);break;case i.LINE_LOOP:e.lines+=c*l;break;case i.POINTS:e.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:s}}function x_(i,t){return i[0]-t[0]}function y_(i,t){return Math.abs(t[1])-Math.abs(i[1])}function M_(i,t,e){const s={},a=new Float32Array(8),l=new WeakMap,h=new De,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function d(f,m,p){const g=f.morphTargetInfluences;if(t.isWebGL2===!0){const S=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,M=S!==void 0?S.length:0;let y=l.get(m);if(y===void 0||y.count!==M){let $=function(){pt.dispose(),l.delete(m),m.removeEventListener("dispose",$)};var x=$;y!==void 0&&y.texture.dispose();const b=m.morphAttributes.position!==void 0,I=m.morphAttributes.normal!==void 0,B=m.morphAttributes.color!==void 0,R=m.morphAttributes.position||[],U=m.morphAttributes.normal||[],it=m.morphAttributes.color||[];let w=0;b===!0&&(w=1),I===!0&&(w=2),B===!0&&(w=3);let D=m.attributes.position.count*w,Q=1;D>t.maxTextureSize&&(Q=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const rt=new Float32Array(D*Q*4*M),pt=new ph(rt,D,Q,M);pt.type=Qn,pt.needsUpdate=!0;const F=w*4;for(let tt=0;tt<M;tt++){const st=R[tt],X=U[tt],V=it[tt],z=D*Q*4*tt;for(let et=0;et<st.count;et++){const at=et*F;b===!0&&(h.fromBufferAttribute(st,et),rt[z+at+0]=h.x,rt[z+at+1]=h.y,rt[z+at+2]=h.z,rt[z+at+3]=0),I===!0&&(h.fromBufferAttribute(X,et),rt[z+at+4]=h.x,rt[z+at+5]=h.y,rt[z+at+6]=h.z,rt[z+at+7]=0),B===!0&&(h.fromBufferAttribute(V,et),rt[z+at+8]=h.x,rt[z+at+9]=h.y,rt[z+at+10]=h.z,rt[z+at+11]=V.itemSize===4?h.w:1)}}y={count:M,texture:pt,size:new ie(D,Q)},l.set(m,y),m.addEventListener("dispose",$)}let v=0;for(let b=0;b<g.length;b++)v+=g[b];const C=m.morphTargetsRelative?1:1-v;p.getUniforms().setValue(i,"morphTargetBaseInfluence",C),p.getUniforms().setValue(i,"morphTargetInfluences",g),p.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),p.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{const S=g===void 0?0:g.length;let M=s[m.id];if(M===void 0||M.length!==S){M=[];for(let I=0;I<S;I++)M[I]=[I,0];s[m.id]=M}for(let I=0;I<S;I++){const B=M[I];B[0]=I,B[1]=g[I]}M.sort(y_);for(let I=0;I<8;I++)I<S&&M[I][1]?(c[I][0]=M[I][0],c[I][1]=M[I][1]):(c[I][0]=Number.MAX_SAFE_INTEGER,c[I][1]=0);c.sort(x_);const y=m.morphAttributes.position,v=m.morphAttributes.normal;let C=0;for(let I=0;I<8;I++){const B=c[I],R=B[0],U=B[1];R!==Number.MAX_SAFE_INTEGER&&U?(y&&m.getAttribute("morphTarget"+I)!==y[R]&&m.setAttribute("morphTarget"+I,y[R]),v&&m.getAttribute("morphNormal"+I)!==v[R]&&m.setAttribute("morphNormal"+I,v[R]),a[I]=U,C+=U):(y&&m.hasAttribute("morphTarget"+I)===!0&&m.deleteAttribute("morphTarget"+I),v&&m.hasAttribute("morphNormal"+I)===!0&&m.deleteAttribute("morphNormal"+I),a[I]=0)}const b=m.morphTargetsRelative?1:1-C;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:d}}function S_(i,t,e,s){let a=new WeakMap;function l(d){const f=s.render.frame,m=d.geometry,p=t.get(d,m);if(a.get(p)!==f&&(t.update(p),a.set(p,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),a.get(d)!==f&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,f))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==f&&(g.update(),a.set(g,f))}return p}function h(){a=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:l,dispose:h}}class Eh extends $e{constructor(t,e,s,a,l,h,c,d,f,m){if(m=m!==void 0?m:Si,m!==Si&&m!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===Si&&(s=Jn),s===void 0&&m===rr&&(s=Mi),super(null,a,l,h,c,d,m,s,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:Ye,this.minFilter=d!==void 0?d:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Th=new $e,bh=new Eh(1,1);bh.compareFunction=hh;const wh=new ph,Ah=new af,Lh=new yh,xc=[],yc=[],Mc=new Float32Array(16),Sc=new Float32Array(9),Ec=new Float32Array(4);function lr(i,t,e){const s=i[0];if(s<=0||s>0)return i;const a=t*e;let l=xc[a];if(l===void 0&&(l=new Float32Array(a),xc[a]=l),t!==0){s.toArray(l,0);for(let h=1,c=0;h!==t;++h)c+=e,i[h].toArray(l,c)}return l}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,s=i.length;e<s;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,s=t.length;e<s;e++)i[e]=t[e]}function Vs(i,t){let e=yc[t];e===void 0&&(e=new Int32Array(t),yc[t]=e);for(let s=0;s!==t;++s)e[s]=i.allocateTextureUnit();return e}function E_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function T_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function b_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function w_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function A_(i,t){const e=this.cache,s=t.elements;if(s===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,s))return;Ec.set(s),i.uniformMatrix2fv(this.addr,!1,Ec),Ce(e,s)}}function L_(i,t){const e=this.cache,s=t.elements;if(s===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,s))return;Sc.set(s),i.uniformMatrix3fv(this.addr,!1,Sc),Ce(e,s)}}function P_(i,t){const e=this.cache,s=t.elements;if(s===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,s))return;Mc.set(s),i.uniformMatrix4fv(this.addr,!1,Mc),Ce(e,s)}}function C_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function D_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function U_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function N_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function F_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function B_(i,t,e){const s=this.cache,a=e.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);const l=this.type===i.SAMPLER_2D_SHADOW?bh:Th;e.setTexture2D(t||l,a)}function z_(i,t,e){const s=this.cache,a=e.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),e.setTexture3D(t||Ah,a)}function k_(i,t,e){const s=this.cache,a=e.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),e.setTextureCube(t||Lh,a)}function H_(i,t,e){const s=this.cache,a=e.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),e.setTexture2DArray(t||wh,a)}function G_(i){switch(i){case 5126:return E_;case 35664:return T_;case 35665:return b_;case 35666:return w_;case 35674:return A_;case 35675:return L_;case 35676:return P_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return I_;case 35669:case 35673:return D_;case 5125:return U_;case 36294:return N_;case 36295:return O_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return H_}}function V_(i,t){i.uniform1fv(this.addr,t)}function W_(i,t){const e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function X_(i,t){const e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function Z_(i,t){const e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function q_(i,t){const e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y_(i,t){const e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j_(i,t){const e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K_(i,t){i.uniform1iv(this.addr,t)}function $_(i,t){i.uniform2iv(this.addr,t)}function J_(i,t){i.uniform3iv(this.addr,t)}function Q_(i,t){i.uniform4iv(this.addr,t)}function tg(i,t){i.uniform1uiv(this.addr,t)}function eg(i,t){i.uniform2uiv(this.addr,t)}function ng(i,t){i.uniform3uiv(this.addr,t)}function ig(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){const s=this.cache,a=t.length,l=Vs(e,a);Pe(s,l)||(i.uniform1iv(this.addr,l),Ce(s,l));for(let h=0;h!==a;++h)e.setTexture2D(t[h]||Th,l[h])}function sg(i,t,e){const s=this.cache,a=t.length,l=Vs(e,a);Pe(s,l)||(i.uniform1iv(this.addr,l),Ce(s,l));for(let h=0;h!==a;++h)e.setTexture3D(t[h]||Ah,l[h])}function ag(i,t,e){const s=this.cache,a=t.length,l=Vs(e,a);Pe(s,l)||(i.uniform1iv(this.addr,l),Ce(s,l));for(let h=0;h!==a;++h)e.setTextureCube(t[h]||Lh,l[h])}function og(i,t,e){const s=this.cache,a=t.length,l=Vs(e,a);Pe(s,l)||(i.uniform1iv(this.addr,l),Ce(s,l));for(let h=0;h!==a;++h)e.setTexture2DArray(t[h]||wh,l[h])}function lg(i){switch(i){case 5126:return V_;case 35664:return W_;case 35665:return X_;case 35666:return Z_;case 35674:return q_;case 35675:return Y_;case 35676:return j_;case 5124:case 35670:return K_;case 35667:case 35671:return $_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}class cg{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.setValue=G_(e.type)}}class hg{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lg(e.type)}}class ug{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,s){const a=this.seq;for(let l=0,h=a.length;l!==h;++l){const c=a[l];c.setValue(t,e[c.id],s)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Tc(i,t){i.seq.push(t),i.map[t.id]=t}function dg(i,t,e){const s=i.name,a=s.length;for(Ha.lastIndex=0;;){const l=Ha.exec(s),h=Ha.lastIndex;let c=l[1];const d=l[2]==="]",f=l[3];if(d&&(c=c|0),f===void 0||f==="["&&h+2===a){Tc(e,f===void 0?new cg(c,i,t):new hg(c,i,t));break}else{let p=e.map[c];p===void 0&&(p=new ug(c),Tc(e,p)),e=p}}}class Rs{constructor(t,e){this.seq=[],this.map={};const s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=t.getActiveUniform(e,a),h=t.getUniformLocation(e,l.name);dg(l,h,this)}}setValue(t,e,s,a){const l=this.map[e];l!==void 0&&l.setValue(t,s,a)}setOptional(t,e,s){const a=e[s];a!==void 0&&this.setValue(t,s,a)}static upload(t,e,s,a){for(let l=0,h=e.length;l!==h;++l){const c=e[l],d=s[c.id];d.needsUpdate!==!1&&c.setValue(t,d.value,a)}}static seqWithValue(t,e){const s=[];for(let a=0,l=t.length;a!==l;++a){const h=t[a];h.id in e&&s.push(h)}return s}}function bc(i,t,e){const s=i.createShader(t);return i.shaderSource(s,e),i.compileShader(s),s}const fg=37297;let pg=0;function mg(i,t){const e=i.split(`
`),s=[],a=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let h=a;h<l;h++){const c=h+1;s.push(`${c===t?">":" "} ${c}: ${e[h]}`)}return s.join(`
`)}function _g(i){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(i);let s;switch(t===e?s="":t===Ns&&e===Us?s="LinearDisplayP3ToLinearSRGB":t===Us&&e===Ns&&(s="LinearSRGBToLinearDisplayP3"),i){case Gn:case ks:return[s,"LinearTransferOETF"];case ze:case co:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}}function wc(i,t,e){const s=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const h=parseInt(l[1]);return e.toUpperCase()+`

`+a+`

`+mg(i.getShaderSource(t),h)}else return a}function gg(i,t){const e=_g(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vg(i,t){let e;switch(t){case md:e="Linear";break;case _d:e="Reinhard";break;case gd:e="OptimizedCineon";break;case vd:e="ACESFilmic";break;case yd:e="AgX";break;case xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function xg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ji).join(`
`)}function yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ji).join(`
`)}function Mg(i){const t=[];for(const e in i){const s=i[e];s!==!1&&t.push("#define "+e+" "+s)}return t.join(`
`)}function Sg(i,t){const e={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(t,a),h=l.name;let c=1;l.type===i.FLOAT_MAT2&&(c=2),l.type===i.FLOAT_MAT3&&(c=3),l.type===i.FLOAT_MAT4&&(c=4),e[h]={type:l.type,location:i.getAttribLocation(t,h),locationSize:c}}return e}function Ji(i){return i!==""}function Ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Eg,bg)}const Tg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bg(i,t){let e=Qt[t];if(e===void 0){const s=Tg.get(t);if(s!==void 0)e=Qt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return eo(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(i){return i.replace(wg,Ag)}function Ag(i,t,e,s){let a="";for(let l=parseInt(t);l<parseInt(e);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Cc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function Rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oo:t="ENVMAP_BLENDING_MULTIPLY";break;case fd:t="ENVMAP_BLENDING_MIX";break;case pd:t="ENVMAP_BLENDING_ADD";break}return t}function Ig(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:s,maxMip:e}}function Dg(i,t,e,s){const a=i.getContext(),l=e.defines;let h=e.vertexShader,c=e.fragmentShader;const d=Lg(e),f=Pg(e),m=Cg(e),p=Rg(e),g=Ig(e),x=e.isWebGL2?"":xg(e),S=yg(e),M=Mg(l),y=a.createProgram();let v,C,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ji).join(`
`),v.length>0&&(v+=`
`),C=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ji).join(`
`),C.length>0&&(C+=`
`)):(v=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),C=[x,Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",e.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ei?vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),h=eo(h),h=Ac(h,e),h=Lc(h,e),c=eo(c),c=Ac(c,e),c=Lc(c,e),h=Pc(h),c=Pc(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,C=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const I=b+v+h,B=b+C+c,R=bc(a,a.VERTEX_SHADER,I),U=bc(a,a.FRAGMENT_SHADER,B);a.attachShader(y,R),a.attachShader(y,U),e.index0AttributeName!==void 0?a.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function it(rt){if(i.debug.checkShaderErrors){const pt=a.getProgramInfoLog(y).trim(),F=a.getShaderInfoLog(R).trim(),$=a.getShaderInfoLog(U).trim();let tt=!0,st=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,y,R,U);else{const X=wc(a,R,"vertex"),V=wc(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Program Info Log: `+pt+`
`+X+`
`+V)}else pt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pt):(F===""||$==="")&&(st=!1);st&&(rt.diagnostics={runnable:tt,programLog:pt,vertexShader:{log:F,prefix:v},fragmentShader:{log:$,prefix:C}})}a.deleteShader(R),a.deleteShader(U),w=new Rs(a,y),D=Sg(a,y)}let w;this.getUniforms=function(){return w===void 0&&it(this),w};let D;this.getAttributes=function(){return D===void 0&&it(this),D};let Q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=a.getProgramParameter(y,fg)),Q},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=U,this}let Ug=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,s=t.fragmentShader,a=this._getShaderStage(e),l=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(a)===!1&&(h.add(a),a.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const s of e)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let s=e.get(t);return s===void 0&&(s=new Set,e.set(t,s)),s}_getShaderStage(t){const e=this.shaderCache;let s=e.get(t);return s===void 0&&(s=new Og(t),e.set(t,s)),s}}class Og{constructor(t){this.id=Ug++,this.code=t,this.usedTimes=0}}function Fg(i,t,e,s,a,l,h){const c=new uo,d=new Ng,f=[],m=a.isWebGL2,p=a.logarithmicDepthBuffer,g=a.vertexTextures;let x=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return w===0?"uv":`uv${w}`}function y(w,D,Q,rt,pt){const F=rt.fog,$=pt.geometry,tt=w.isMeshStandardMaterial?rt.environment:null,st=(w.isMeshStandardMaterial?e:t).get(w.envMap||tt),X=st&&st.mapping===zs?st.image.height:null,V=S[w.type];w.precision!==null&&(x=a.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const z=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,et=z!==void 0?z.length:0;let at=0;$.morphAttributes.position!==void 0&&(at=1),$.morphAttributes.normal!==void 0&&(at=2),$.morphAttributes.color!==void 0&&(at=3);let W,nt,lt,ft;if(V){const Le=An[V];W=Le.vertexShader,nt=Le.fragmentShader}else W=w.vertexShader,nt=w.fragmentShader,d.update(w),lt=d.getVertexShaderID(w),ft=d.getFragmentShaderID(w);const St=i.getRenderTarget(),Ut=pt.isInstancedMesh===!0,Zt=pt.isBatchedMesh===!0,Nt=!!w.map,re=!!w.matcap,Z=!!st,Ae=!!w.aoMap,It=!!w.lightMap,Gt=!!w.bumpMap,wt=!!w.normalMap,me=!!w.displacementMap,Vt=!!w.emissiveMap,P=!!w.metalnessMap,T=!!w.roughnessMap,q=w.anisotropy>0,ut=w.clearcoat>0,ht=w.iridescence>0,dt=w.sheen>0,At=w.transmission>0,vt=q&&!!w.anisotropyMap,Et=ut&&!!w.clearcoatMap,Ot=ut&&!!w.clearcoatNormalMap,Kt=ut&&!!w.clearcoatRoughnessMap,ct=ht&&!!w.iridescenceMap,ce=ht&&!!w.iridescenceThicknessMap,te=dt&&!!w.sheenColorMap,kt=dt&&!!w.sheenRoughnessMap,Ct=!!w.specularMap,Tt=!!w.specularColorMap,Yt=!!w.specularIntensityMap,ae=At&&!!w.transmissionMap,xe=At&&!!w.thicknessMap,Jt=!!w.gradientMap,mt=!!w.alphaMap,O=w.alphaTest>0,gt=!!w.alphaHash,xt=!!w.extensions,Bt=!!$.attributes.uv1,Dt=!!$.attributes.uv2,ue=!!$.attributes.uv3;let de=ei;return w.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(de=i.toneMapping),{isWebGL2:m,shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:W,fragmentShader:nt,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Zt,instancing:Ut,instancingColor:Ut&&pt.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Gn,map:Nt,matcap:re,envMap:Z,envMapMode:Z&&st.mapping,envMapCubeUVHeight:X,aoMap:Ae,lightMap:It,bumpMap:Gt,normalMap:wt,displacementMap:g&&me,emissiveMap:Vt,normalMapObjectSpace:wt&&w.normalMapType===Id,normalMapTangentSpace:wt&&w.normalMapType===ch,metalnessMap:P,roughnessMap:T,anisotropy:q,anisotropyMap:vt,clearcoat:ut,clearcoatMap:Et,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Kt,iridescence:ht,iridescenceMap:ct,iridescenceThicknessMap:ce,sheen:dt,sheenColorMap:te,sheenRoughnessMap:kt,specularMap:Ct,specularColorMap:Tt,specularIntensityMap:Yt,transmission:At,transmissionMap:ae,thicknessMap:xe,gradientMap:Jt,opaque:w.transparent===!1&&w.blending===tr,alphaMap:mt,alphaTest:O,alphaHash:gt,combine:w.combine,mapUv:Nt&&M(w.map.channel),aoMapUv:Ae&&M(w.aoMap.channel),lightMapUv:It&&M(w.lightMap.channel),bumpMapUv:Gt&&M(w.bumpMap.channel),normalMapUv:wt&&M(w.normalMap.channel),displacementMapUv:me&&M(w.displacementMap.channel),emissiveMapUv:Vt&&M(w.emissiveMap.channel),metalnessMapUv:P&&M(w.metalnessMap.channel),roughnessMapUv:T&&M(w.roughnessMap.channel),anisotropyMapUv:vt&&M(w.anisotropyMap.channel),clearcoatMapUv:Et&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:te&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:kt&&M(w.sheenRoughnessMap.channel),specularMapUv:Ct&&M(w.specularMap.channel),specularColorMapUv:Tt&&M(w.specularColorMap.channel),specularIntensityMapUv:Yt&&M(w.specularIntensityMap.channel),transmissionMapUv:ae&&M(w.transmissionMap.channel),thicknessMapUv:xe&&M(w.thicknessMap.channel),alphaMapUv:mt&&M(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(wt||q),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Bt,vertexUv2s:Dt,vertexUv3s:ue,pointsUvs:pt.isPoints===!0&&!!$.attributes.uv&&(Nt||mt),fog:!!F,useFog:w.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:pt.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:at,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Nt&&w.map.isVideoTexture===!0&&pe.getTransfer(w.map.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ln,flipSided:w.side===je,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:xt&&w.extensions.derivatives===!0,extensionFragDepth:xt&&w.extensions.fragDepth===!0,extensionDrawBuffers:xt&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&w.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:m||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function v(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const Q in w.defines)D.push(Q),D.push(w.defines[Q]);return w.isRawShaderMaterial===!1&&(C(D,w),b(D,w),D.push(i.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function C(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function b(w,D){c.disableAll(),D.isWebGL2&&c.enable(0),D.supportsVertexTextures&&c.enable(1),D.instancing&&c.enable(2),D.instancingColor&&c.enable(3),D.matcap&&c.enable(4),D.envMap&&c.enable(5),D.normalMapObjectSpace&&c.enable(6),D.normalMapTangentSpace&&c.enable(7),D.clearcoat&&c.enable(8),D.iridescence&&c.enable(9),D.alphaTest&&c.enable(10),D.vertexColors&&c.enable(11),D.vertexAlphas&&c.enable(12),D.vertexUv1s&&c.enable(13),D.vertexUv2s&&c.enable(14),D.vertexUv3s&&c.enable(15),D.vertexTangents&&c.enable(16),D.anisotropy&&c.enable(17),D.alphaHash&&c.enable(18),D.batching&&c.enable(19),w.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.skinning&&c.enable(4),D.morphTargets&&c.enable(5),D.morphNormals&&c.enable(6),D.morphColors&&c.enable(7),D.premultipliedAlpha&&c.enable(8),D.shadowMapEnabled&&c.enable(9),D.useLegacyLights&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),w.push(c.mask)}function I(w){const D=S[w.type];let Q;if(D){const rt=An[D];Q=xf.clone(rt.uniforms)}else Q=w.uniforms;return Q}function B(w,D){let Q;for(let rt=0,pt=f.length;rt<pt;rt++){const F=f[rt];if(F.cacheKey===D){Q=F,++Q.usedTimes;break}}return Q===void 0&&(Q=new Dg(i,D,w,l),f.push(Q)),Q}function R(w){if(--w.usedTimes===0){const D=f.indexOf(w);f[D]=f[f.length-1],f.pop(),w.destroy()}}function U(w){d.remove(w)}function it(){d.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:I,acquireProgram:B,releaseProgram:R,releaseShaderCache:U,programs:f,dispose:it}}function Bg(){let i=new WeakMap;function t(l){let h=i.get(l);return h===void 0&&(h={},i.set(l,h)),h}function e(l){i.delete(l)}function s(l,h,c){i.get(l)[h]=c}function a(){i=new WeakMap}return{get:t,remove:e,update:s,dispose:a}}function zg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ic(){const i=[];let t=0;const e=[],s=[],a=[];function l(){t=0,e.length=0,s.length=0,a.length=0}function h(p,g,x,S,M,y){let v=i[t];return v===void 0?(v={id:p.id,object:p,geometry:g,material:x,groupOrder:S,renderOrder:p.renderOrder,z:M,group:y},i[t]=v):(v.id=p.id,v.object=p,v.geometry=g,v.material=x,v.groupOrder=S,v.renderOrder=p.renderOrder,v.z=M,v.group=y),t++,v}function c(p,g,x,S,M,y){const v=h(p,g,x,S,M,y);x.transmission>0?s.push(v):x.transparent===!0?a.push(v):e.push(v)}function d(p,g,x,S,M,y){const v=h(p,g,x,S,M,y);x.transmission>0?s.unshift(v):x.transparent===!0?a.unshift(v):e.unshift(v)}function f(p,g){e.length>1&&e.sort(p||zg),s.length>1&&s.sort(g||Rc),a.length>1&&a.sort(g||Rc)}function m(){for(let p=t,g=i.length;p<g;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:s,transparent:a,init:l,push:c,unshift:d,finish:m,sort:f}}function kg(){let i=new WeakMap;function t(s,a){const l=i.get(s);let h;return l===void 0?(h=new Ic,i.set(s,[h])):a>=l.length?(h=new Ic,l.push(h)):h=l[a],h}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new le};break;case"SpotLight":e={position:new G,direction:new G,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vg=0;function Wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xg(i,t){const e=new Hg,s=Gg(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new G);const l=new G,h=new Se,c=new Se;function d(m,p){let g=0,x=0,S=0;for(let rt=0;rt<9;rt++)a.probe[rt].set(0,0,0);let M=0,y=0,v=0,C=0,b=0,I=0,B=0,R=0,U=0,it=0,w=0;m.sort(Wg);const D=p===!0?Math.PI:1;for(let rt=0,pt=m.length;rt<pt;rt++){const F=m[rt],$=F.color,tt=F.intensity,st=F.distance,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=$.r*tt*D,x+=$.g*tt*D,S+=$.b*tt*D;else if(F.isLightProbe){for(let V=0;V<9;V++)a.probe[V].addScaledVector(F.sh.coefficients[V],tt);w++}else if(F.isDirectionalLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*D),F.castShadow){const z=F.shadow,et=s.get(F);et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,a.directionalShadow[M]=et,a.directionalShadowMap[M]=X,a.directionalShadowMatrix[M]=F.shadow.matrix,I++}a.directional[M]=V,M++}else if(F.isSpotLight){const V=e.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy($).multiplyScalar(tt*D),V.distance=st,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,a.spot[v]=V;const z=F.shadow;if(F.map&&(a.spotLightMap[U]=F.map,U++,z.updateMatrices(F),F.castShadow&&it++),a.spotLightMatrix[v]=z.matrix,F.castShadow){const et=s.get(F);et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,a.spotShadow[v]=et,a.spotShadowMap[v]=X,R++}v++}else if(F.isRectAreaLight){const V=e.get(F);V.color.copy($).multiplyScalar(tt),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),a.rectArea[C]=V,C++}else if(F.isPointLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*D),V.distance=F.distance,V.decay=F.decay,F.castShadow){const z=F.shadow,et=s.get(F);et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,et.shadowCameraNear=z.camera.near,et.shadowCameraFar=z.camera.far,a.pointShadow[y]=et,a.pointShadowMap[y]=X,a.pointShadowMatrix[y]=F.shadow.matrix,B++}a.point[y]=V,y++}else if(F.isHemisphereLight){const V=e.get(F);V.skyColor.copy(F.color).multiplyScalar(tt*D),V.groundColor.copy(F.groundColor).multiplyScalar(tt*D),a.hemi[b]=V,b++}}C>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=_t.LTC_FLOAT_1,a.rectAreaLTC2=_t.LTC_FLOAT_2):(a.rectAreaLTC1=_t.LTC_HALF_1,a.rectAreaLTC2=_t.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=_t.LTC_FLOAT_1,a.rectAreaLTC2=_t.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=_t.LTC_HALF_1,a.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=x,a.ambient[2]=S;const Q=a.hash;(Q.directionalLength!==M||Q.pointLength!==y||Q.spotLength!==v||Q.rectAreaLength!==C||Q.hemiLength!==b||Q.numDirectionalShadows!==I||Q.numPointShadows!==B||Q.numSpotShadows!==R||Q.numSpotMaps!==U||Q.numLightProbes!==w)&&(a.directional.length=M,a.spot.length=v,a.rectArea.length=C,a.point.length=y,a.hemi.length=b,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=B,a.pointShadowMap.length=B,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=B,a.spotLightMatrix.length=R+U-it,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=it,a.numLightProbes=w,Q.directionalLength=M,Q.pointLength=y,Q.spotLength=v,Q.rectAreaLength=C,Q.hemiLength=b,Q.numDirectionalShadows=I,Q.numPointShadows=B,Q.numSpotShadows=R,Q.numSpotMaps=U,Q.numLightProbes=w,a.version=Vg++)}function f(m,p){let g=0,x=0,S=0,M=0,y=0;const v=p.matrixWorldInverse;for(let C=0,b=m.length;C<b;C++){const I=m[C];if(I.isDirectionalLight){const B=a.directional[g];B.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(v),g++}else if(I.isSpotLight){const B=a.spot[S];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(v),B.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(v),S++}else if(I.isRectAreaLight){const B=a.rectArea[M];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(v),c.identity(),h.copy(I.matrixWorld),h.premultiply(v),c.extractRotation(h),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),B.halfWidth.applyMatrix4(c),B.halfHeight.applyMatrix4(c),M++}else if(I.isPointLight){const B=a.point[x];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(v),x++}else if(I.isHemisphereLight){const B=a.hemi[y];B.direction.setFromMatrixPosition(I.matrixWorld),B.direction.transformDirection(v),y++}}}return{setup:d,setupView:f,state:a}}function Dc(i,t){const e=new Xg(i,t),s=[],a=[];function l(){s.length=0,a.length=0}function h(p){s.push(p)}function c(p){a.push(p)}function d(p){e.setup(s,p)}function f(p){e.setupView(s,p)}return{init:l,state:{lightsArray:s,shadowsArray:a,lights:e},setupLights:d,setupLightsView:f,pushLight:h,pushShadow:c}}function Zg(i,t){let e=new WeakMap;function s(l,h=0){const c=e.get(l);let d;return c===void 0?(d=new Dc(i,t),e.set(l,[d])):h>=c.length?(d=new Dc(i,t),c.push(d)):d=c[h],d}function a(){e=new WeakMap}return{get:s,dispose:a}}class qg extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yg extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $g(i,t,e){let s=new fo;const a=new ie,l=new ie,h=new De,c=new qg({depthPacking:Rd}),d=new Yg,f={},m=e.maxTextureSize,p={[ii]:je,[je]:ii,[Ln]:Ln},g=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:jg,fragmentShader:Kg}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const S=new Je;S.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new en(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let v=this.type;this.render=function(R,U,it){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||R.length===0)return;const w=i.getRenderTarget(),D=i.getActiveCubeFace(),Q=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(ti),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const pt=v!==zn&&this.type===zn,F=v===zn&&this.type!==zn;for(let $=0,tt=R.length;$<tt;$++){const st=R[$],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const V=X.getFrameExtents();if(a.multiply(V),l.copy(X.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/V.x),a.x=l.x*V.x,X.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/V.y),a.y=l.y*V.y,X.mapSize.y=l.y)),X.map===null||pt===!0||F===!0){const et=this.type!==zn?{minFilter:Ye,magFilter:Ye}:{};X.map!==null&&X.map.dispose(),X.map=new Ti(a.x,a.y,et),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const z=X.getViewportCount();for(let et=0;et<z;et++){const at=X.getViewport(et);h.set(l.x*at.x,l.y*at.y,l.x*at.z,l.y*at.w),rt.viewport(h),X.updateMatrices(st,et),s=X.getFrustum(),I(U,it,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===zn&&C(X,it),X.needsUpdate=!1}v=this.type,y.needsUpdate=!1,i.setRenderTarget(w,D,Q)};function C(R,U){const it=t.update(M);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,x.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ti(a.x,a.y)),g.uniforms.shadow_pass.value=R.map.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(U,null,it,g,M,null),x.uniforms.shadow_pass.value=R.mapPass.texture,x.uniforms.resolution.value=R.mapSize,x.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(U,null,it,x,M,null)}function b(R,U,it,w){let D=null;const Q=it.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(Q!==void 0)D=Q;else if(D=it.isPointLight===!0?d:c,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const rt=D.uuid,pt=U.uuid;let F=f[rt];F===void 0&&(F={},f[rt]=F);let $=F[pt];$===void 0&&($=D.clone(),F[pt]=$,U.addEventListener("dispose",B)),D=$}if(D.visible=U.visible,D.wireframe=U.wireframe,w===zn?D.side=U.shadowSide!==null?U.shadowSide:U.side:D.side=U.shadowSide!==null?U.shadowSide:p[U.side],D.alphaMap=U.alphaMap,D.alphaTest=U.alphaTest,D.map=U.map,D.clipShadows=U.clipShadows,D.clippingPlanes=U.clippingPlanes,D.clipIntersection=U.clipIntersection,D.displacementMap=U.displacementMap,D.displacementScale=U.displacementScale,D.displacementBias=U.displacementBias,D.wireframeLinewidth=U.wireframeLinewidth,D.linewidth=U.linewidth,it.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const rt=i.properties.get(D);rt.light=it}return D}function I(R,U,it,w,D){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&D===zn)&&(!R.frustumCulled||s.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld);const pt=t.update(R),F=R.material;if(Array.isArray(F)){const $=pt.groups;for(let tt=0,st=$.length;tt<st;tt++){const X=$[tt],V=F[X.materialIndex];if(V&&V.visible){const z=b(R,V,w,D);R.onBeforeShadow(i,R,U,it,pt,z,X),i.renderBufferDirect(it,null,pt,z,R,X),R.onAfterShadow(i,R,U,it,pt,z,X)}}}else if(F.visible){const $=b(R,F,w,D);R.onBeforeShadow(i,R,U,it,pt,$,null),i.renderBufferDirect(it,null,pt,$,R,null),R.onAfterShadow(i,R,U,it,pt,$,null)}}const rt=R.children;for(let pt=0,F=rt.length;pt<F;pt++)I(rt[pt],U,it,w,D)}function B(R){R.target.removeEventListener("dispose",B);for(const it in f){const w=f[it],D=R.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function Jg(i,t,e){const s=e.isWebGL2;function a(){let O=!1;const gt=new De;let xt=null;const Bt=new De(0,0,0,0);return{setMask:function(Dt){xt!==Dt&&!O&&(i.colorMask(Dt,Dt,Dt,Dt),xt=Dt)},setLocked:function(Dt){O=Dt},setClear:function(Dt,ue,de,Ee,Le){Le===!0&&(Dt*=Ee,ue*=Ee,de*=Ee),gt.set(Dt,ue,de,Ee),Bt.equals(gt)===!1&&(i.clearColor(Dt,ue,de,Ee),Bt.copy(gt))},reset:function(){O=!1,xt=null,Bt.set(-1,0,0,0)}}}function l(){let O=!1,gt=null,xt=null,Bt=null;return{setTest:function(Dt){Dt?Zt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(Dt){gt!==Dt&&!O&&(i.depthMask(Dt),gt=Dt)},setFunc:function(Dt){if(xt!==Dt){switch(Dt){case ad:i.depthFunc(i.NEVER);break;case od:i.depthFunc(i.ALWAYS);break;case ld:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case cd:i.depthFunc(i.EQUAL);break;case hd:i.depthFunc(i.GEQUAL);break;case ud:i.depthFunc(i.GREATER);break;case dd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Dt}},setLocked:function(Dt){O=Dt},setClear:function(Dt){Bt!==Dt&&(i.clearDepth(Dt),Bt=Dt)},reset:function(){O=!1,gt=null,xt=null,Bt=null}}}function h(){let O=!1,gt=null,xt=null,Bt=null,Dt=null,ue=null,de=null,Ee=null,Le=null;return{setTest:function(fe){O||(fe?Zt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(fe){gt!==fe&&!O&&(i.stencilMask(fe),gt=fe)},setFunc:function(fe,Ne,nn){(xt!==fe||Bt!==Ne||Dt!==nn)&&(i.stencilFunc(fe,Ne,nn),xt=fe,Bt=Ne,Dt=nn)},setOp:function(fe,Ne,nn){(ue!==fe||de!==Ne||Ee!==nn)&&(i.stencilOp(fe,Ne,nn),ue=fe,de=Ne,Ee=nn)},setLocked:function(fe){O=fe},setClear:function(fe){Le!==fe&&(i.clearStencil(fe),Le=fe)},reset:function(){O=!1,gt=null,xt=null,Bt=null,Dt=null,ue=null,de=null,Ee=null,Le=null}}}const c=new a,d=new l,f=new h,m=new WeakMap,p=new WeakMap;let g={},x={},S=new WeakMap,M=[],y=null,v=!1,C=null,b=null,I=null,B=null,R=null,U=null,it=null,w=new le(0,0,0),D=0,Q=!1,rt=null,pt=null,F=null,$=null,tt=null;const st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=V>=2);let et=null,at={};const W=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),lt=new De().fromArray(W),ft=new De().fromArray(nt);function St(O,gt,xt,Bt){const Dt=new Uint8Array(4),ue=i.createTexture();i.bindTexture(O,ue),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<xt;de++)s&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(gt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(gt+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return ue}const Ut={};Ut[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Ut[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),Zt(i.DEPTH_TEST),d.setFunc(Is),Vt(!1),P(pl),Zt(i.CULL_FACE),wt(ti);function Zt(O){g[O]!==!0&&(i.enable(O),g[O]=!0)}function Nt(O){g[O]!==!1&&(i.disable(O),g[O]=!1)}function re(O,gt){return x[O]!==gt?(i.bindFramebuffer(O,gt),x[O]=gt,s&&(O===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=gt),O===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=gt)),!0):!1}function Z(O,gt){let xt=M,Bt=!1;if(O)if(xt=S.get(gt),xt===void 0&&(xt=[],S.set(gt,xt)),O.isWebGLMultipleRenderTargets){const Dt=O.texture;if(xt.length!==Dt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,de=Dt.length;ue<de;ue++)xt[ue]=i.COLOR_ATTACHMENT0+ue;xt.length=Dt.length,Bt=!0}}else xt[0]!==i.COLOR_ATTACHMENT0&&(xt[0]=i.COLOR_ATTACHMENT0,Bt=!0);else xt[0]!==i.BACK&&(xt[0]=i.BACK,Bt=!0);Bt&&(e.isWebGL2?i.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function Ae(O){return y!==O?(i.useProgram(O),y=O,!0):!1}const It={[xi]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};if(s)It[vl]=i.MIN,It[xl]=i.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(It[vl]=O.MIN_EXT,It[xl]=O.MAX_EXT)}const Gt={[qu]:i.ZERO,[Yu]:i.ONE,[ju]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[Qu]:i.DST_COLOR,[$u]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[qa]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[Ju]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[sd]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(O,gt,xt,Bt,Dt,ue,de,Ee,Le,fe){if(O===ti){v===!0&&(Nt(i.BLEND),v=!1);return}if(v===!1&&(Zt(i.BLEND),v=!0),O!==Wu){if(O!==C||fe!==Q){if((b!==xi||R!==xi)&&(i.blendEquation(i.FUNC_ADD),b=xi,R=xi),fe)switch(O){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}I=null,B=null,U=null,it=null,w.set(0,0,0),D=0,C=O,Q=fe}return}Dt=Dt||gt,ue=ue||xt,de=de||Bt,(gt!==b||Dt!==R)&&(i.blendEquationSeparate(It[gt],It[Dt]),b=gt,R=Dt),(xt!==I||Bt!==B||ue!==U||de!==it)&&(i.blendFuncSeparate(Gt[xt],Gt[Bt],Gt[ue],Gt[de]),I=xt,B=Bt,U=ue,it=de),(Ee.equals(w)===!1||Le!==D)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Le),w.copy(Ee),D=Le),C=O,Q=!1}function me(O,gt){O.side===Ln?Nt(i.CULL_FACE):Zt(i.CULL_FACE);let xt=O.side===je;gt&&(xt=!xt),Vt(xt),O.blending===tr&&O.transparent===!1?wt(ti):wt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),d.setFunc(O.depthFunc),d.setTest(O.depthTest),d.setMask(O.depthWrite),c.setMask(O.colorWrite);const Bt=O.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Zt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(O){rt!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),rt=O)}function P(O){O!==Hu?(Zt(i.CULL_FACE),O!==pt&&(O===pl?i.cullFace(i.BACK):O===Gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),pt=O}function T(O){O!==F&&(X&&i.lineWidth(O),F=O)}function q(O,gt,xt){O?(Zt(i.POLYGON_OFFSET_FILL),($!==gt||tt!==xt)&&(i.polygonOffset(gt,xt),$=gt,tt=xt)):Nt(i.POLYGON_OFFSET_FILL)}function ut(O){O?Zt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function ht(O){O===void 0&&(O=i.TEXTURE0+st-1),et!==O&&(i.activeTexture(O),et=O)}function dt(O,gt,xt){xt===void 0&&(et===null?xt=i.TEXTURE0+st-1:xt=et);let Bt=at[xt];Bt===void 0&&(Bt={type:void 0,texture:void 0},at[xt]=Bt),(Bt.type!==O||Bt.texture!==gt)&&(et!==xt&&(i.activeTexture(xt),et=xt),i.bindTexture(O,gt||Ut[O]),Bt.type=O,Bt.texture=gt)}function At(){const O=at[et];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Kt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(O){lt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),lt.copy(O))}function ae(O){ft.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function xe(O,gt){let xt=p.get(gt);xt===void 0&&(xt=new WeakMap,p.set(gt,xt));let Bt=xt.get(O);Bt===void 0&&(Bt=i.getUniformBlockIndex(gt,O.name),xt.set(O,Bt))}function Jt(O,gt){const Bt=p.get(gt).get(O);m.get(gt)!==Bt&&(i.uniformBlockBinding(gt,Bt,O.__bindingPointIndex),m.set(gt,Bt))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),s===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},et=null,at={},x={},S=new WeakMap,M=[],y=null,v=!1,C=null,b=null,I=null,B=null,R=null,U=null,it=null,w=new le(0,0,0),D=0,Q=!1,rt=null,pt=null,F=null,$=null,tt=null,lt.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:Zt,disable:Nt,bindFramebuffer:re,drawBuffers:Z,useProgram:Ae,setBlending:wt,setMaterial:me,setFlipSided:Vt,setCullFace:P,setLineWidth:T,setPolygonOffset:q,setScissorTest:ut,activeTexture:ht,bindTexture:dt,unbindTexture:At,compressedTexImage2D:vt,compressedTexImage3D:Et,texImage2D:Ct,texImage3D:Tt,updateUBOMapping:xe,uniformBlockBinding:Jt,texStorage2D:te,texStorage3D:kt,texSubImage2D:Ot,texSubImage3D:Kt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ce,scissor:Yt,viewport:ae,reset:mt}}function Qg(i,t,e,s,a,l,h){const c=a.isWebGL2,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let p;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,T){return x?new OffscreenCanvas(P,T):Ur("canvas")}function M(P,T,q,ut){let ht=1;if((P.width>ut||P.height>ut)&&(ht=ut/Math.max(P.width,P.height)),ht<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const dt=T?Fs:Math.floor,At=dt(ht*P.width),vt=dt(ht*P.height);p===void 0&&(p=S(At,vt));const Et=q?S(At,vt):p;return Et.width=At,Et.height=vt,Et.getContext("2d").drawImage(P,0,0,At,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+At+"x"+vt+")."),Et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return Qa(P.width)&&Qa(P.height)}function v(P){return c?!1:P.wrapS!==Mn||P.wrapT!==Mn||P.minFilter!==Ye&&P.minFilter!==un}function C(P,T){return P.generateMipmaps&&T&&P.minFilter!==Ye&&P.minFilter!==un}function b(P){i.generateMipmap(P)}function I(P,T,q,ut,ht=!1){if(c===!1)return T;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt=T;if(T===i.RED&&(q===i.FLOAT&&(dt=i.R32F),q===i.HALF_FLOAT&&(dt=i.R16F),q===i.UNSIGNED_BYTE&&(dt=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(dt=i.R8UI),q===i.UNSIGNED_SHORT&&(dt=i.R16UI),q===i.UNSIGNED_INT&&(dt=i.R32UI),q===i.BYTE&&(dt=i.R8I),q===i.SHORT&&(dt=i.R16I),q===i.INT&&(dt=i.R32I)),T===i.RG&&(q===i.FLOAT&&(dt=i.RG32F),q===i.HALF_FLOAT&&(dt=i.RG16F),q===i.UNSIGNED_BYTE&&(dt=i.RG8)),T===i.RGBA){const At=ht?Ds:pe.getTransfer(ut);q===i.FLOAT&&(dt=i.RGBA32F),q===i.HALF_FLOAT&&(dt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(dt=At===ve?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function B(P,T,q){return C(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==Ye&&P.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function R(P){return P===Ye||P===yl||P===pa?i.NEAREST:i.LINEAR}function U(P){const T=P.target;T.removeEventListener("dispose",U),w(T),T.isVideoTexture&&m.delete(T)}function it(P){const T=P.target;T.removeEventListener("dispose",it),Q(T)}function w(P){const T=s.get(P);if(T.__webglInit===void 0)return;const q=P.source,ut=g.get(q);if(ut){const ht=ut[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&D(P),Object.keys(ut).length===0&&g.delete(q)}s.remove(P)}function D(P){const T=s.get(P);i.deleteTexture(T.__webglTexture);const q=P.source,ut=g.get(q);delete ut[T.__cacheKey],h.memory.textures--}function Q(P){const T=P.texture,q=s.get(P),ut=s.get(T);if(ut.__webglTexture!==void 0&&(i.deleteTexture(ut.__webglTexture),h.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(q.__webglFramebuffer[ht]))for(let dt=0;dt<q.__webglFramebuffer[ht].length;dt++)i.deleteFramebuffer(q.__webglFramebuffer[ht][dt]);else i.deleteFramebuffer(q.__webglFramebuffer[ht]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[ht])}else{if(Array.isArray(q.__webglFramebuffer))for(let ht=0;ht<q.__webglFramebuffer.length;ht++)i.deleteFramebuffer(q.__webglFramebuffer[ht]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ht=0;ht<q.__webglColorRenderbuffer.length;ht++)q.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[ht]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ht=0,dt=T.length;ht<dt;ht++){const At=s.get(T[ht]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),h.memory.textures--),s.remove(T[ht])}s.remove(T),s.remove(P)}let rt=0;function pt(){rt=0}function F(){const P=rt;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),rt+=1,P}function $(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function tt(P,T){const q=s.get(P);if(P.isVideoTexture&&me(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const ut=P.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(q,P,T);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function st(P,T){const q=s.get(P);if(P.version>0&&q.__version!==P.version){lt(q,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function X(P,T){const q=s.get(P);if(P.version>0&&q.__version!==P.version){lt(q,P,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function V(P,T){const q=s.get(P);if(P.version>0&&q.__version!==P.version){ft(q,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}const z={[Ka]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},et={[Ye]:i.NEAREST,[yl]:i.NEAREST_MIPMAP_NEAREST,[pa]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Md]:i.LINEAR_MIPMAP_NEAREST,[Rr]:i.LINEAR_MIPMAP_LINEAR},at={[Dd]:i.NEVER,[zd]:i.ALWAYS,[Ud]:i.LESS,[hh]:i.LEQUAL,[Nd]:i.EQUAL,[Bd]:i.GEQUAL,[Od]:i.GREATER,[Fd]:i.NOTEQUAL};function W(P,T,q){if(q?(i.texParameteri(P,i.TEXTURE_WRAP_S,z[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,z[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,z[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,et[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,et[T.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==Mn||T.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,R(T.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,R(T.minFilter)),T.minFilter!==Ye&&T.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,at[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ut=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ye||T.minFilter!==pa&&T.minFilter!==Rr||T.type===Qn&&t.has("OES_texture_float_linear")===!1||c===!1&&T.type===Ir&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||s.get(T).__currentAnisotropy)&&(i.texParameterf(P,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy)}}function nt(P,T){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",U));const ut=T.source;let ht=g.get(ut);ht===void 0&&(ht={},g.set(ut,ht));const dt=$(T);if(dt!==P.__cacheKey){ht[dt]===void 0&&(ht[dt]={texture:i.createTexture(),usedTimes:0},h.memory.textures++,q=!0),ht[dt].usedTimes++;const At=ht[P.__cacheKey];At!==void 0&&(ht[P.__cacheKey].usedTimes--,At.usedTimes===0&&D(T)),P.__cacheKey=dt,P.__webglTexture=ht[dt].texture}return q}function lt(P,T,q){let ut=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=i.TEXTURE_3D);const ht=nt(P,T),dt=T.source;e.bindTexture(ut,P.__webglTexture,i.TEXTURE0+q);const At=s.get(dt);if(dt.version!==At.__version||ht===!0){e.activeTexture(i.TEXTURE0+q);const vt=pe.getPrimaries(pe.workingColorSpace),Et=T.colorSpace===fn?null:pe.getPrimaries(T.colorSpace),Ot=T.colorSpace===fn||vt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Kt=v(T)&&y(T.image)===!1;let ct=M(T.image,Kt,!1,a.maxTextureSize);ct=Vt(T,ct);const ce=y(ct)||c,te=l.convert(T.format,T.colorSpace);let kt=l.convert(T.type),Ct=I(T.internalFormat,te,kt,T.colorSpace,T.isVideoTexture);W(ut,T,ce);let Tt;const Yt=T.mipmaps,ae=c&&T.isVideoTexture!==!0&&Ct!==oh,xe=At.__version===void 0||ht===!0,Jt=B(T,ct,ce);if(T.isDepthTexture)Ct=i.DEPTH_COMPONENT,c?T.type===Qn?Ct=i.DEPTH_COMPONENT32F:T.type===Jn?Ct=i.DEPTH_COMPONENT24:T.type===Mi?Ct=i.DEPTH24_STENCIL8:Ct=i.DEPTH_COMPONENT16:T.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Si&&Ct===i.DEPTH_COMPONENT&&T.type!==lo&&T.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Jn,kt=l.convert(T.type)),T.format===rr&&Ct===i.DEPTH_COMPONENT&&(Ct=i.DEPTH_STENCIL,T.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Mi,kt=l.convert(T.type))),xe&&(ae?e.texStorage2D(i.TEXTURE_2D,1,Ct,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ct,ct.width,ct.height,0,te,kt,null));else if(T.isDataTexture)if(Yt.length>0&&ce){ae&&xe&&e.texStorage2D(i.TEXTURE_2D,Jt,Ct,Yt[0].width,Yt[0].height);for(let mt=0,O=Yt.length;mt<O;mt++)Tt=Yt[mt],ae?e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,te,kt,Tt.data):e.texImage2D(i.TEXTURE_2D,mt,Ct,Tt.width,Tt.height,0,te,kt,Tt.data);T.generateMipmaps=!1}else ae?(xe&&e.texStorage2D(i.TEXTURE_2D,Jt,Ct,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,te,kt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,ct.width,ct.height,0,te,kt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,Ct,Yt[0].width,Yt[0].height,ct.depth);for(let mt=0,O=Yt.length;mt<O;mt++)Tt=Yt[mt],T.format!==Sn?te!==null?ae?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,ct.depth,te,Tt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Ct,Tt.width,Tt.height,ct.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,ct.depth,te,kt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Ct,Tt.width,Tt.height,ct.depth,0,te,kt,Tt.data)}else{ae&&xe&&e.texStorage2D(i.TEXTURE_2D,Jt,Ct,Yt[0].width,Yt[0].height);for(let mt=0,O=Yt.length;mt<O;mt++)Tt=Yt[mt],T.format!==Sn?te!==null?ae?e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,te,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Ct,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,te,kt,Tt.data):e.texImage2D(i.TEXTURE_2D,mt,Ct,Tt.width,Tt.height,0,te,kt,Tt.data)}else if(T.isDataArrayTexture)ae?(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,Ct,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,te,kt,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,ct.width,ct.height,ct.depth,0,te,kt,ct.data);else if(T.isData3DTexture)ae?(xe&&e.texStorage3D(i.TEXTURE_3D,Jt,Ct,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,te,kt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,ct.width,ct.height,ct.depth,0,te,kt,ct.data);else if(T.isFramebufferTexture){if(xe)if(ae)e.texStorage2D(i.TEXTURE_2D,Jt,Ct,ct.width,ct.height);else{let mt=ct.width,O=ct.height;for(let gt=0;gt<Jt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Ct,mt,O,0,te,kt,null),mt>>=1,O>>=1}}else if(Yt.length>0&&ce){ae&&xe&&e.texStorage2D(i.TEXTURE_2D,Jt,Ct,Yt[0].width,Yt[0].height);for(let mt=0,O=Yt.length;mt<O;mt++)Tt=Yt[mt],ae?e.texSubImage2D(i.TEXTURE_2D,mt,0,0,te,kt,Tt):e.texImage2D(i.TEXTURE_2D,mt,Ct,te,kt,Tt);T.generateMipmaps=!1}else ae?(xe&&e.texStorage2D(i.TEXTURE_2D,Jt,Ct,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,te,kt,ct)):e.texImage2D(i.TEXTURE_2D,0,Ct,te,kt,ct);C(T,ce)&&b(ut),At.__version=dt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ft(P,T,q){if(T.image.length!==6)return;const ut=nt(P,T),ht=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const dt=s.get(ht);if(ht.version!==dt.__version||ut===!0){e.activeTexture(i.TEXTURE0+q);const At=pe.getPrimaries(pe.workingColorSpace),vt=T.colorSpace===fn?null:pe.getPrimaries(T.colorSpace),Et=T.colorSpace===fn||At===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Ot=T.isCompressedTexture||T.image[0].isCompressedTexture,Kt=T.image[0]&&T.image[0].isDataTexture,ct=[];for(let mt=0;mt<6;mt++)!Ot&&!Kt?ct[mt]=M(T.image[mt],!1,!0,a.maxCubemapSize):ct[mt]=Kt?T.image[mt].image:T.image[mt],ct[mt]=Vt(T,ct[mt]);const ce=ct[0],te=y(ce)||c,kt=l.convert(T.format,T.colorSpace),Ct=l.convert(T.type),Tt=I(T.internalFormat,kt,Ct,T.colorSpace),Yt=c&&T.isVideoTexture!==!0,ae=dt.__version===void 0||ut===!0;let xe=B(T,ce,te);W(i.TEXTURE_CUBE_MAP,T,te);let Jt;if(Ot){Yt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Tt,ce.width,ce.height);for(let mt=0;mt<6;mt++){Jt=ct[mt].mipmaps;for(let O=0;O<Jt.length;O++){const gt=Jt[O];T.format!==Sn?kt!==null?Yt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O,0,0,gt.width,gt.height,kt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O,Tt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O,0,0,gt.width,gt.height,kt,Ct,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O,Tt,gt.width,gt.height,0,kt,Ct,gt.data)}}}else{Jt=T.mipmaps,Yt&&ae&&(Jt.length>0&&xe++,e.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Tt,ct[0].width,ct[0].height));for(let mt=0;mt<6;mt++)if(Kt){Yt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ct[mt].width,ct[mt].height,kt,Ct,ct[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,ct[mt].width,ct[mt].height,0,kt,Ct,ct[mt].data);for(let O=0;O<Jt.length;O++){const xt=Jt[O].image[mt].image;Yt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O+1,0,0,xt.width,xt.height,kt,Ct,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O+1,Tt,xt.width,xt.height,0,kt,Ct,xt.data)}}else{Yt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,kt,Ct,ct[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,kt,Ct,ct[mt]);for(let O=0;O<Jt.length;O++){const gt=Jt[O];Yt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O+1,0,0,kt,Ct,gt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O+1,Tt,kt,Ct,gt.image[mt])}}}C(T,te)&&b(i.TEXTURE_CUBE_MAP),dt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function St(P,T,q,ut,ht,dt){const At=l.convert(q.format,q.colorSpace),vt=l.convert(q.type),Et=I(q.internalFormat,At,vt,q.colorSpace);if(!s.get(T).__hasExternalTextures){const Kt=Math.max(1,T.width>>dt),ct=Math.max(1,T.height>>dt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,dt,Et,Kt,ct,T.depth,0,At,vt,null):e.texImage2D(ht,dt,Et,Kt,ct,0,At,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),wt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ht,s.get(q).__webglTexture,0,Gt(T)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,ht,s.get(q).__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(P,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let ut=c===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||wt(T)){const ht=T.depthTexture;ht&&ht.isDepthTexture&&(ht.type===Qn?ut=i.DEPTH_COMPONENT32F:ht.type===Jn&&(ut=i.DEPTH_COMPONENT24));const dt=Gt(T);wt(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,ut,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ut,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ut,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const ut=Gt(T);q&&wt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,T.width,T.height):wt(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const ut=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ht=0;ht<ut.length;ht++){const dt=ut[ht],At=l.convert(dt.format,dt.colorSpace),vt=l.convert(dt.type),Et=I(dt.internalFormat,At,vt,dt.colorSpace),Ot=Gt(T);q&&wt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Et,T.width,T.height):wt(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,Et,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Et,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),tt(T.depthTexture,0);const ut=s.get(T.depthTexture).__webglTexture,ht=Gt(T);if(T.depthTexture.format===Si)wt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(T.depthTexture.format===rr)wt(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Nt(P){const T=s.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Zt(T.__webglFramebuffer,P)}else if(q){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]=i.createRenderbuffer(),Ut(T.__webglDepthbuffer[ut],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),Ut(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(P,T,q){const ut=s.get(P);T!==void 0&&St(ut.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Nt(P)}function Z(P){const T=P.texture,q=s.get(P),ut=s.get(T);P.addEventListener("dispose",it),P.isWebGLMultipleRenderTargets!==!0&&(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=T.version,h.memory.textures++);const ht=P.isWebGLCubeRenderTarget===!0,dt=P.isWebGLMultipleRenderTargets===!0,At=y(P)||c;if(ht){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(c&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let Et=0;Et<T.mipmaps.length;Et++)q.__webglFramebuffer[vt][Et]=i.createFramebuffer()}else q.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)q.__webglFramebuffer[vt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(dt)if(a.drawBuffers){const vt=P.texture;for(let Et=0,Ot=vt.length;Et<Ot;Et++){const Kt=s.get(vt[Et]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&P.samples>0&&wt(P)===!1){const vt=dt?T:[T];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Et=0;Et<vt.length;Et++){const Ot=vt[Et];q.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Et]);const Kt=l.convert(Ot.format,Ot.colorSpace),ct=l.convert(Ot.type),ce=I(Ot.internalFormat,Kt,ct,Ot.colorSpace,P.isXRRenderTarget===!0),te=Gt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ce,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,q.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),W(i.TEXTURE_CUBE_MAP,T,At);for(let vt=0;vt<6;vt++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)St(q.__webglFramebuffer[vt][Et],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Et);else St(q.__webglFramebuffer[vt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);C(T,At)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const vt=P.texture;for(let Et=0,Ot=vt.length;Et<Ot;Et++){const Kt=vt[Et],ct=s.get(Kt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),W(i.TEXTURE_2D,Kt,At),St(q.__webglFramebuffer,P,Kt,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),C(Kt,At)&&b(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(c?vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ut.__webglTexture),W(vt,T,At),c&&T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)St(q.__webglFramebuffer[Et],P,T,i.COLOR_ATTACHMENT0,vt,Et);else St(q.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,vt,0);C(T,At)&&b(vt),e.unbindTexture()}P.depthBuffer&&Nt(P)}function Ae(P){const T=y(P)||c,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ut=0,ht=q.length;ut<ht;ut++){const dt=q[ut];if(C(dt,T)){const At=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=s.get(dt).__webglTexture;e.bindTexture(At,vt),b(At),e.unbindTexture()}}}function It(P){if(c&&P.samples>0&&wt(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,ut=P.height;let ht=i.COLOR_BUFFER_BIT;const dt=[],At=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=s.get(P),Et=P.isWebGLMultipleRenderTargets===!0;if(Et)for(let Ot=0;Ot<T.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ot=0;Ot<T.length;Ot++){dt.push(i.COLOR_ATTACHMENT0+Ot),P.depthBuffer&&dt.push(At);const Kt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Kt===!1&&(P.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Et&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Ot]),Kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[At]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[At])),Et){const ct=s.get(T[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,q,ut,0,0,q,ut,ht,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Ot=0;Ot<T.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Ot]);const Kt=s.get(T[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Gt(P){return Math.min(a.maxSamples,P.samples)}function wt(P){const T=s.get(P);return c&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(P){const T=h.render.frame;m.get(P)!==T&&(m.set(P,T),P.update())}function Vt(P,T){const q=P.colorSpace,ut=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ja||q!==Gn&&q!==fn&&(pe.getTransfer(q)===ve?c===!1?t.has("EXT_sRGB")===!0&&ut===Sn?(P.format=Ja,P.minFilter=un,P.generateMipmaps=!1):T=dh.sRGBToLinear(T):(ut!==Sn||ht!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=F,this.resetTextureUnits=pt,this.setTexture2D=tt,this.setTexture2DArray=st,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=re,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=wt}function tv(i,t,e){const s=e.isWebGL2;function a(l,h=fn){let c;const d=pe.getTransfer(h);if(l===ni)return i.UNSIGNED_BYTE;if(l===nh)return i.UNSIGNED_SHORT_4_4_4_4;if(l===ih)return i.UNSIGNED_SHORT_5_5_5_1;if(l===Sd)return i.BYTE;if(l===Ed)return i.SHORT;if(l===lo)return i.UNSIGNED_SHORT;if(l===eh)return i.INT;if(l===Jn)return i.UNSIGNED_INT;if(l===Qn)return i.FLOAT;if(l===Ir)return s?i.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===Td)return i.ALPHA;if(l===Sn)return i.RGBA;if(l===bd)return i.LUMINANCE;if(l===wd)return i.LUMINANCE_ALPHA;if(l===Si)return i.DEPTH_COMPONENT;if(l===rr)return i.DEPTH_STENCIL;if(l===Ja)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===Ad)return i.RED;if(l===rh)return i.RED_INTEGER;if(l===Ld)return i.RG;if(l===sh)return i.RG_INTEGER;if(l===ah)return i.RGBA_INTEGER;if(l===ma||l===_a||l===ga||l===va)if(d===ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===ma)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===_a)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===ga)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===va)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===ma)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===_a)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===ga)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===va)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Ml||l===Sl||l===El||l===Tl)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Ml)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Sl)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===El)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Tl)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===oh)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===bl||l===wl)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(l===bl)return d===ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===wl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Al||l===Ll||l===Pl||l===Cl||l===Rl||l===Il||l===Dl||l===Ul||l===Nl||l===Ol||l===Fl||l===Bl||l===zl||l===kl)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Al)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Ll)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Pl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Cl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Rl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Il)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Dl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Ul)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Nl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Ol)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Fl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Bl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===zl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===kl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===xa||l===Hl||l===Gl)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(l===xa)return d===ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Hl)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Gl)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===Pd||l===Vl||l===Wl||l===Xl)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(l===xa)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Vl)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Wl)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Xl)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Mi?s?i.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[l]!==void 0?i[l]:null}return{convert:a}}class ev extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qi extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nv={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const s of t.hand.values())this._getHandJoint(e,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,s){let a=null,l=null,h=null;const c=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){h=!0;for(const M of t.hand.values()){const y=e.getJointPose(M,s),v=this._getHandJoint(f,M);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const m=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],g=m.position.distanceTo(p.position),x=.02,S=.005;f.inputState.pinching&&g>x+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=x-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(a=e.getPose(t.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(nv)))}return c!==null&&(c.visible=a!==null),d!==null&&(d.visible=l!==null),f!==null&&(f.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const s=new Qi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[e.jointName]=s,t.add(s)}return t.joints[e.jointName]}}class iv extends ar{constructor(t,e){super();const s=this;let a=null,l=1,h=null,c="local-floor",d=1,f=null,m=null,p=null,g=null,x=null,S=null;const M=e.getContextAttributes();let y=null,v=null;const C=[],b=[],I=new ie;let B=null;const R=new dn;R.layers.enable(1),R.viewport=new De;const U=new dn;U.layers.enable(2),U.viewport=new De;const it=[R,U],w=new ev;w.layers.enable(1),w.layers.enable(2);let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let nt=C[W];return nt===void 0&&(nt=new Ga,C[W]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(W){let nt=C[W];return nt===void 0&&(nt=new Ga,C[W]=nt),nt.getGripSpace()},this.getHand=function(W){let nt=C[W];return nt===void 0&&(nt=new Ga,C[W]=nt),nt.getHandSpace()};function rt(W){const nt=b.indexOf(W.inputSource);if(nt===-1)return;const lt=C[nt];lt!==void 0&&(lt.update(W.inputSource,W.frame,f||h),lt.dispatchEvent({type:W.type,data:W.inputSource}))}function pt(){a.removeEventListener("select",rt),a.removeEventListener("selectstart",rt),a.removeEventListener("selectend",rt),a.removeEventListener("squeeze",rt),a.removeEventListener("squeezestart",rt),a.removeEventListener("squeezeend",rt),a.removeEventListener("end",pt),a.removeEventListener("inputsourceschange",F);for(let W=0;W<C.length;W++){const nt=b[W];nt!==null&&(b[W]=null,C[W].disconnect(nt))}D=null,Q=null,t.setRenderTarget(y),x=null,g=null,p=null,a=null,v=null,at.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){l=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){c=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||h},this.setReferenceSpace=function(W){f=W},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return p},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(y=t.getRenderTarget(),a.addEventListener("select",rt),a.addEventListener("selectstart",rt),a.addEventListener("selectend",rt),a.addEventListener("squeeze",rt),a.addEventListener("squeezestart",rt),a.addEventListener("squeezeend",rt),a.addEventListener("end",pt),a.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(I),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:a.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,e,nt),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new Ti(x.framebufferWidth,x.framebufferHeight,{format:Sn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let nt=null,lt=null,ft=null;M.depth&&(ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=M.stencil?rr:Si,lt=M.stencil?Mi:Jn);const St={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:l};p=new XRWebGLBinding(a,e),g=p.createProjectionLayer(St),a.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),v=new Ti(g.textureWidth,g.textureHeight,{format:Sn,type:ni,depthTexture:new Eh(g.textureWidth,g.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const Ut=t.properties.get(v);Ut.__ignoreDepthValues=g.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(d),f=null,h=await a.requestReferenceSpace(c),at.setContext(a),at.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function F(W){for(let nt=0;nt<W.removed.length;nt++){const lt=W.removed[nt],ft=b.indexOf(lt);ft>=0&&(b[ft]=null,C[ft].disconnect(lt))}for(let nt=0;nt<W.added.length;nt++){const lt=W.added[nt];let ft=b.indexOf(lt);if(ft===-1){for(let Ut=0;Ut<C.length;Ut++)if(Ut>=b.length){b.push(lt),ft=Ut;break}else if(b[Ut]===null){b[Ut]=lt,ft=Ut;break}if(ft===-1)break}const St=C[ft];St&&St.connect(lt)}}const $=new G,tt=new G;function st(W,nt,lt){$.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(lt.matrixWorld);const ft=$.distanceTo(tt),St=nt.projectionMatrix.elements,Ut=lt.projectionMatrix.elements,Zt=St[14]/(St[10]-1),Nt=St[14]/(St[10]+1),re=(St[9]+1)/St[5],Z=(St[9]-1)/St[5],Ae=(St[8]-1)/St[0],It=(Ut[8]+1)/Ut[0],Gt=Zt*Ae,wt=Zt*It,me=ft/(-Ae+It),Vt=me*-Ae;nt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Vt),W.translateZ(me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const P=Zt+me,T=Nt+me,q=Gt-Vt,ut=wt+(ft-Vt),ht=re*Nt/T*P,dt=Z*Nt/T*P;W.projectionMatrix.makePerspective(q,ut,ht,dt,P,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,nt){nt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(nt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;w.near=U.near=R.near=W.near,w.far=U.far=R.far=W.far,(D!==w.near||Q!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,Q=w.far);const nt=W.parent,lt=w.cameras;X(w,nt);for(let ft=0;ft<lt.length;ft++)X(lt[ft],nt);lt.length===2?st(w,R,U):w.projectionMatrix.copy(R.projectionMatrix),V(W,w,nt)};function V(W,nt,lt){lt===null?W.matrix.copy(nt.matrixWorld):(W.matrix.copy(lt.matrixWorld),W.matrix.invert(),W.matrix.multiply(nt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(nt.projectionMatrix),W.projectionMatrixInverse.copy(nt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Dr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&x===null))return d},this.setFoveation=function(W){d=W,g!==null&&(g.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)};let z=null;function et(W,nt){if(m=nt.getViewerPose(f||h),S=nt,m!==null){const lt=m.views;x!==null&&(t.setRenderTargetFramebuffer(v,x.framebuffer),t.setRenderTarget(v));let ft=!1;lt.length!==w.cameras.length&&(w.cameras.length=0,ft=!0);for(let St=0;St<lt.length;St++){const Ut=lt[St];let Zt=null;if(x!==null)Zt=x.getViewport(Ut);else{const re=p.getViewSubImage(g,Ut);Zt=re.viewport,St===0&&(t.setRenderTargetTextures(v,re.colorTexture,g.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(v))}let Nt=it[St];Nt===void 0&&(Nt=new dn,Nt.layers.enable(St),Nt.viewport=new De,it[St]=Nt),Nt.matrix.fromArray(Ut.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ut.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),St===0&&(w.matrix.copy(Nt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ft===!0&&w.cameras.push(Nt)}}for(let lt=0;lt<C.length;lt++){const ft=b[lt],St=C[lt];ft!==null&&St!==void 0&&St.update(ft,nt,f||h)}z&&z(W,nt),nt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:nt}),S=null}const at=new Mh;at.setAnimationLoop(et),this.setAnimationLoop=function(W){z=W},this.dispose=function(){}}}function rv(i,t){function e(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,vh(i)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,C,b,I){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),p(y,v)):v.isMeshPhongMaterial?(l(y,v),m(y,v)):v.isMeshStandardMaterial?(l(y,v),g(y,v),v.isMeshPhysicalMaterial&&x(y,v,I)):v.isMeshMatcapMaterial?(l(y,v),S(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),M(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?d(y,v,C,b):v.isSpriteMaterial?f(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,e(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===je&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,e(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===je&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,e(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,e(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const C=t.get(v).envMap;if(C&&(y.envMap.value=C,y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*b,e(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function d(y,v,C,b){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*C,y.scale.value=b*.5,v.map&&(y.map.value=v.map,e(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function p(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,y.roughnessMapTransform)),t.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function x(y,v,C){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===je&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,v){v.matcap&&(y.matcap.value=v.matcap)}function M(y,v){const C=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function sv(i,t,e,s){let a={},l={},h=[];const c=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(C,b){const I=b.program;s.uniformBlockBinding(C,I)}function f(C,b){let I=a[C.id];I===void 0&&(S(C),I=m(C),a[C.id]=I,C.addEventListener("dispose",y));const B=b.program;s.updateUBOMapping(C,B);const R=t.render.frame;l[C.id]!==R&&(g(C),l[C.id]=R)}function m(C){const b=p();C.__bindingPointIndex=b;const I=i.createBuffer(),B=C.__size,R=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,B,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,I),I}function p(){for(let C=0;C<c;C++)if(h.indexOf(C)===-1)return h.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const b=a[C.id],I=C.uniforms,B=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,U=I.length;R<U;R++){const it=Array.isArray(I[R])?I[R]:[I[R]];for(let w=0,D=it.length;w<D;w++){const Q=it[w];if(x(Q,R,w,B)===!0){const rt=Q.__offset,pt=Array.isArray(Q.value)?Q.value:[Q.value];let F=0;for(let $=0;$<pt.length;$++){const tt=pt[$],st=M(tt);typeof tt=="number"||typeof tt=="boolean"?(Q.__data[0]=tt,i.bufferSubData(i.UNIFORM_BUFFER,rt+F,Q.__data)):tt.isMatrix3?(Q.__data[0]=tt.elements[0],Q.__data[1]=tt.elements[1],Q.__data[2]=tt.elements[2],Q.__data[3]=0,Q.__data[4]=tt.elements[3],Q.__data[5]=tt.elements[4],Q.__data[6]=tt.elements[5],Q.__data[7]=0,Q.__data[8]=tt.elements[6],Q.__data[9]=tt.elements[7],Q.__data[10]=tt.elements[8],Q.__data[11]=0):(tt.toArray(Q.__data,F),F+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,Q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(C,b,I,B){const R=C.value,U=b+"_"+I;if(B[U]===void 0)return typeof R=="number"||typeof R=="boolean"?B[U]=R:B[U]=R.clone(),!0;{const it=B[U];if(typeof R=="number"||typeof R=="boolean"){if(it!==R)return B[U]=R,!0}else if(it.equals(R)===!1)return it.copy(R),!0}return!1}function S(C){const b=C.uniforms;let I=0;const B=16;for(let U=0,it=b.length;U<it;U++){const w=Array.isArray(b[U])?b[U]:[b[U]];for(let D=0,Q=w.length;D<Q;D++){const rt=w[D],pt=Array.isArray(rt.value)?rt.value:[rt.value];for(let F=0,$=pt.length;F<$;F++){const tt=pt[F],st=M(tt),X=I%B;X!==0&&B-X<st.boundary&&(I+=B-X),rt.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=I,I+=st.storage}}}const R=I%B;return R>0&&(I+=B-R),C.__size=I,C.__cache={},this}function M(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function y(C){const b=C.target;b.removeEventListener("dispose",y);const I=h.indexOf(b.__bindingPointIndex);h.splice(I,1),i.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function v(){for(const C in a)i.deleteBuffer(a[C]);h=[],a={},l={}}return{bind:d,update:f,dispose:v}}class Ph{constructor(t={}){const{canvas:e=tf(),context:s=null,depth:a=!0,stencil:l=!0,alpha:h=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let g;s!==null?g=s.getContextAttributes().alpha:g=h;const x=new Uint32Array(4),S=new Int32Array(4);let M=null,y=null;const v=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this._useLegacyLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const b=this;let I=!1,B=0,R=0,U=null,it=-1,w=null;const D=new De,Q=new De;let rt=null;const pt=new le(0);let F=0,$=e.width,tt=e.height,st=1,X=null,V=null;const z=new De(0,0,$,tt),et=new De(0,0,$,tt);let at=!1;const W=new fo;let nt=!1,lt=!1,ft=null;const St=new Se,Ut=new ie,Zt=new G,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return U===null?st:1}let Z=s;function Ae(A,k){for(let K=0;K<A.length;K++){const J=A[K],Y=e.getContext(J,k);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ao}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",gt,!1),Z===null){const k=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&k.shift(),Z=Ae(k,A),Z===null)throw Ae(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let It,Gt,wt,me,Vt,P,T,q,ut,ht,dt,At,vt,Et,Ot,Kt,ct,ce,te,kt,Ct,Tt,Yt,ae;function xe(){It=new m_(Z),Gt=new c_(Z,It,t),It.init(Gt),Tt=new tv(Z,It,Gt),wt=new Jg(Z,It,Gt),me=new v_(Z),Vt=new Bg,P=new Qg(Z,It,wt,Vt,Gt,Tt,me),T=new u_(b),q=new p_(b),ut=new wf(Z,Gt),Yt=new o_(Z,It,ut,Gt),ht=new __(Z,ut,me,Yt),dt=new S_(Z,ht,ut,me),te=new M_(Z,Gt,P),Kt=new h_(Vt),At=new Fg(b,T,q,It,Gt,Yt,Kt),vt=new rv(b,Vt),Et=new kg,Ot=new Zg(It,Gt),ce=new a_(b,T,q,wt,dt,g,d),ct=new $g(b,dt,Gt),ae=new sv(Z,me,Gt,wt),kt=new l_(Z,It,me,Gt),Ct=new g_(Z,It,me,Gt),me.programs=At.programs,b.capabilities=Gt,b.extensions=It,b.properties=Vt,b.renderLists=Et,b.shadowMap=ct,b.state=wt,b.info=me}xe();const Jt=new iv(b,Z);this.xr=Jt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=It.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=It.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(A){A!==void 0&&(st=A,this.setSize($,tt,!1))},this.getSize=function(A){return A.set($,tt)},this.setSize=function(A,k,K=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,tt=k,e.width=Math.floor(A*st),e.height=Math.floor(k*st),K===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set($*st,tt*st).floor()},this.setDrawingBufferSize=function(A,k,K){$=A,tt=k,st=K,e.width=Math.floor(A*K),e.height=Math.floor(k*K),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,k,K,J){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,k,K,J),wt.viewport(D.copy(z).multiplyScalar(st).floor())},this.getScissor=function(A){return A.copy(et)},this.setScissor=function(A,k,K,J){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,k,K,J),wt.scissor(Q.copy(et).multiplyScalar(st).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){wt.setScissorTest(at=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(A=!0,k=!0,K=!0){let J=0;if(A){let Y=!1;if(U!==null){const yt=U.texture.format;Y=yt===ah||yt===sh||yt===rh}if(Y){const yt=U.texture.type,Lt=yt===ni||yt===Jn||yt===lo||yt===Mi||yt===nh||yt===ih,Rt=ce.getClearColor(),zt=ce.getClearAlpha(),$t=Rt.r,Wt=Rt.g,qt=Rt.b;Lt?(x[0]=$t,x[1]=Wt,x[2]=qt,x[3]=zt,Z.clearBufferuiv(Z.COLOR,0,x)):(S[0]=$t,S[1]=Wt,S[2]=qt,S[3]=zt,Z.clearBufferiv(Z.COLOR,0,S))}else J|=Z.COLOR_BUFFER_BIT}k&&(J|=Z.DEPTH_BUFFER_BIT),K&&(J|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Et.dispose(),Ot.dispose(),Vt.dispose(),T.dispose(),q.dispose(),dt.dispose(),Yt.dispose(),ae.dispose(),At.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",Le),Jt.removeEventListener("sessionend",fe),ft&&(ft.dispose(),ft=null),Ne.stop()};function mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=me.autoReset,k=ct.enabled,K=ct.autoUpdate,J=ct.needsUpdate,Y=ct.type;xe(),me.autoReset=A,ct.enabled=k,ct.autoUpdate=K,ct.needsUpdate=J,ct.type=Y}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const k=A.target;k.removeEventListener("dispose",xt),Bt(k)}function Bt(A){Dt(A),Vt.remove(A)}function Dt(A){const k=Vt.get(A).programs;k!==void 0&&(k.forEach(function(K){At.releaseProgram(K)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,K,J,Y,yt){k===null&&(k=Nt);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,Rt=dr(A,k,K,J,Y);wt.setMaterial(J,Lt);let zt=K.index,$t=1;if(J.wireframe===!0){if(zt=ht.getWireframeAttribute(K),zt===void 0)return;$t=2}const Wt=K.drawRange,qt=K.attributes.position;let Me=Wt.start*$t,Oe=(Wt.start+Wt.count)*$t;yt!==null&&(Me=Math.max(Me,yt.start*$t),Oe=Math.min(Oe,(yt.start+yt.count)*$t)),zt!==null?(Me=Math.max(Me,0),Oe=Math.min(Oe,zt.count)):qt!=null&&(Me=Math.max(Me,0),Oe=Math.min(Oe,qt.count));const ye=Oe-Me;if(ye<0||ye===1/0)return;Yt.setup(Y,J,Rt,K,zt);let sn,_e=kt;if(zt!==null&&(sn=ut.get(zt),_e=Ct,_e.setIndex(sn)),Y.isMesh)J.wireframe===!0?(wt.setLineWidth(J.wireframeLinewidth*re()),_e.setMode(Z.LINES)):_e.setMode(Z.TRIANGLES);else if(Y.isLine){let Xt=J.linewidth;Xt===void 0&&(Xt=1),wt.setLineWidth(Xt*re()),Y.isLineSegments?_e.setMode(Z.LINES):Y.isLineLoop?_e.setMode(Z.LINE_LOOP):_e.setMode(Z.LINE_STRIP)}else Y.isPoints?_e.setMode(Z.POINTS):Y.isSprite&&_e.setMode(Z.TRIANGLES);if(Y.isBatchedMesh)_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)_e.renderInstances(Me,ye,Y.count);else if(K.isInstancedBufferGeometry){const Xt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,se=Math.min(K.instanceCount,Xt);_e.renderInstances(Me,ye,se)}else _e.render(Me,ye)};function ue(A,k,K){A.transparent===!0&&A.side===Ln&&A.forceSinglePass===!1?(A.side=je,A.needsUpdate=!0,ri(A,k,K),A.side=ii,A.needsUpdate=!0,ri(A,k,K),A.side=Ln):ri(A,k,K)}this.compile=function(A,k,K=null){K===null&&(K=A),y=Ot.get(K),y.init(),C.push(y),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),A!==K&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(b._useLegacyLights);const J=new Set;return A.traverse(function(Y){const yt=Y.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){const Rt=yt[Lt];ue(Rt,K,Y),J.add(Rt)}else ue(yt,K,Y),J.add(yt)}),C.pop(),y=null,J},this.compileAsync=function(A,k,K=null){const J=this.compile(A,k,K);return new Promise(Y=>{function yt(){if(J.forEach(function(Lt){Vt.get(Lt).currentProgram.isReady()&&J.delete(Lt)}),J.size===0){Y(A);return}setTimeout(yt,10)}It.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let de=null;function Ee(A){de&&de(A)}function Le(){Ne.stop()}function fe(){Ne.start()}const Ne=new Mh;Ne.setAnimationLoop(Ee),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(A){de=A,Jt.setAnimationLoop(A),A===null?Ne.stop():Ne.start()},Jt.addEventListener("sessionstart",Le),Jt.addEventListener("sessionend",fe),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(k),k=Jt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,k,U),y=Ot.get(A,C.length),y.init(),C.push(y),St.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(St),lt=this.localClippingEnabled,nt=Kt.init(this.clippingPlanes,lt),M=Et.get(A,v.length),M.init(),v.push(M),nn(A,k,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(X,V),this.info.render.frame++,nt===!0&&Kt.beginShadows();const K=y.state.shadowsArray;if(ct.render(K,A,k),nt===!0&&Kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(M,A),y.setupLights(b._useLegacyLights),k.isArrayCamera){const J=k.cameras;for(let Y=0,yt=J.length;Y<yt;Y++){const Lt=J[Y];Hr(M,A,Lt,Lt.viewport)}}else Hr(M,A,k);U!==null&&(P.updateMultisampleRenderTarget(U),P.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(b,A,k),Yt.resetDefaultState(),it=-1,w=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,v.pop(),v.length>0?M=v[v.length-1]:M=null};function nn(A,k,K,J){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){J&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);const Lt=dt.update(A),Rt=A.material;Rt.visible&&M.push(A,Lt,Rt,K,Zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const Lt=dt.update(A),Rt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Zt.copy(Lt.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(Rt)){const zt=Lt.groups;for(let $t=0,Wt=zt.length;$t<Wt;$t++){const qt=zt[$t],Me=Rt[qt.materialIndex];Me&&Me.visible&&M.push(A,Lt,Me,K,Zt.z,qt)}}else Rt.visible&&M.push(A,Lt,Rt,K,Zt.z,null)}}const yt=A.children;for(let Lt=0,Rt=yt.length;Lt<Rt;Lt++)nn(yt[Lt],k,K,J)}function Hr(A,k,K,J){const Y=A.opaque,yt=A.transmissive,Lt=A.transparent;y.setupLightsView(K),nt===!0&&Kt.setGlobalState(b.clippingPlanes,K),yt.length>0&&rn(Y,yt,k,K),J&&wt.viewport(D.copy(J)),Y.length>0&&bt(Y,k,K),yt.length>0&&bt(yt,k,K),Lt.length>0&&bt(Lt,k,K),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function rn(A,k,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const yt=Gt.isWebGL2;ft===null&&(ft=new Ti(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")?Ir:ni,minFilter:Rr,samples:yt?4:0})),b.getDrawingBufferSize(Ut),yt?ft.setSize(Ut.x,Ut.y):ft.setSize(Fs(Ut.x),Fs(Ut.y));const Lt=b.getRenderTarget();b.setRenderTarget(ft),b.getClearColor(pt),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear();const Rt=b.toneMapping;b.toneMapping=ei,bt(A,K,J),P.updateMultisampleRenderTarget(ft),P.updateRenderTargetMipmap(ft);let zt=!1;for(let $t=0,Wt=k.length;$t<Wt;$t++){const qt=k[$t],Me=qt.object,Oe=qt.geometry,ye=qt.material,sn=qt.group;if(ye.side===Ln&&Me.layers.test(J.layers)){const _e=ye.side;ye.side=je,ye.needsUpdate=!0,cr(Me,K,J,Oe,ye,sn),ye.side=_e,ye.needsUpdate=!0,zt=!0}}zt===!0&&(P.updateMultisampleRenderTarget(ft),P.updateRenderTargetMipmap(ft)),b.setRenderTarget(Lt),b.setClearColor(pt,F),b.toneMapping=Rt}function bt(A,k,K){const J=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,yt=A.length;Y<yt;Y++){const Lt=A[Y],Rt=Lt.object,zt=Lt.geometry,$t=J===null?Lt.material:J,Wt=Lt.group;Rt.layers.test(K.layers)&&cr(Rt,k,K,zt,$t,Wt)}}function cr(A,k,K,J,Y,yt){A.onBeforeRender(b,k,K,J,Y,yt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(b,k,K,J,A,yt),Y.transparent===!0&&Y.side===Ln&&Y.forceSinglePass===!1?(Y.side=je,Y.needsUpdate=!0,b.renderBufferDirect(K,k,J,Y,A,yt),Y.side=ii,Y.needsUpdate=!0,b.renderBufferDirect(K,k,J,Y,A,yt),Y.side=Ln):b.renderBufferDirect(K,k,J,Y,A,yt),A.onAfterRender(b,k,K,J,Y,yt)}function ri(A,k,K){k.isScene!==!0&&(k=Nt);const J=Vt.get(A),Y=y.state.lights,yt=y.state.shadowsArray,Lt=Y.state.version,Rt=At.getParameters(A,Y.state,yt,k,K),zt=At.getProgramCacheKey(Rt);let $t=J.programs;J.environment=A.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(A.isMeshStandardMaterial?q:T).get(A.envMap||J.environment),$t===void 0&&(A.addEventListener("dispose",xt),$t=new Map,J.programs=$t);let Wt=$t.get(zt);if(Wt!==void 0){if(J.currentProgram===Wt&&J.lightsStateVersion===Lt)return ur(A,Rt),Wt}else Rt.uniforms=At.getUniforms(A),A.onBuild(K,Rt,b),A.onBeforeCompile(Rt,b),Wt=At.acquireProgram(Rt,zt),$t.set(zt,Wt),J.uniforms=Rt.uniforms;const qt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=Kt.uniform),ur(A,Rt),J.needsLights=Wn(A),J.lightsStateVersion=Lt,J.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Wt,J.uniformsList=null,Wt}function hr(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Rs.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ur(A,k){const K=Vt.get(A);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function dr(A,k,K,J,Y){k.isScene!==!0&&(k=Nt),P.resetTextureUnits();const yt=k.fog,Lt=J.isMeshStandardMaterial?k.environment:null,Rt=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Gn,zt=(J.isMeshStandardMaterial?q:T).get(J.envMap||Lt),$t=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Wt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),qt=!!K.morphAttributes.position,Me=!!K.morphAttributes.normal,Oe=!!K.morphAttributes.color;let ye=ei;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ye=b.toneMapping);const sn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=sn!==void 0?sn.length:0,Xt=Vt.get(J),se=y.state.lights;if(nt===!0&&(lt===!0||A!==w)){const Fe=A===w&&J.id===it;Kt.setState(J,A,Fe)}let Ht=!1;J.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==se.state.version||Xt.outputColorSpace!==Rt||Y.isBatchedMesh&&Xt.batching===!1||!Y.isBatchedMesh&&Xt.batching===!0||Y.isInstancedMesh&&Xt.instancing===!1||!Y.isInstancedMesh&&Xt.instancing===!0||Y.isSkinnedMesh&&Xt.skinning===!1||!Y.isSkinnedMesh&&Xt.skinning===!0||Y.isInstancedMesh&&Xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xt.instancingColor===!1&&Y.instanceColor!==null||Xt.envMap!==zt||J.fog===!0&&Xt.fog!==yt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Kt.numPlanes||Xt.numIntersection!==Kt.numIntersection)||Xt.vertexAlphas!==$t||Xt.vertexTangents!==Wt||Xt.morphTargets!==qt||Xt.morphNormals!==Me||Xt.morphColors!==Oe||Xt.toneMapping!==ye||Gt.isWebGL2===!0&&Xt.morphTargetsCount!==_e)&&(Ht=!0):(Ht=!0,Xt.__version=J.version);let an=Xt.currentProgram;Ht===!0&&(an=ri(J,k,Y));let Pn=!1,on=!1,si=!1;const Pt=an.getUniforms(),he=Xt.uniforms;if(wt.useProgram(an.program)&&(Pn=!0,on=!0,si=!0),J.id!==it&&(it=J.id,on=!0),Pn||w!==A){Pt.setValue(Z,"projectionMatrix",A.projectionMatrix),Pt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Fe=Pt.map.cameraPosition;Fe!==void 0&&Fe.setValue(Z,Zt.setFromMatrixPosition(A.matrixWorld)),Gt.logarithmicDepthBuffer&&Pt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,on=!0,si=!0)}if(Y.isSkinnedMesh){Pt.setOptional(Z,Y,"bindMatrix"),Pt.setOptional(Z,Y,"bindMatrixInverse");const Fe=Y.skeleton;Fe&&(Gt.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),Pt.setValue(Z,"boneTexture",Fe.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Pt.setOptional(Z,Y,"batchingTexture"),Pt.setValue(Z,"batchingTexture",Y._matricesTexture,P));const ai=K.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0&&Gt.isWebGL2===!0)&&te.update(Y,K,an),(on||Xt.receiveShadow!==Y.receiveShadow)&&(Xt.receiveShadow=Y.receiveShadow,Pt.setValue(Z,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(he.envMap.value=zt,he.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),on&&(Pt.setValue(Z,"toneMappingExposure",b.toneMappingExposure),Xt.needsLights&&Gr(he,si),yt&&J.fog===!0&&vt.refreshFogUniforms(he,yt),vt.refreshMaterialUniforms(he,J,st,tt,ft),Rs.upload(Z,hr(Xt),he,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Rs.upload(Z,hr(Xt),he,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pt.setValue(Z,"center",Y.center),Pt.setValue(Z,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(Z,"normalMatrix",Y.normalMatrix),Pt.setValue(Z,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Fe=J.uniformsGroups;for(let He=0,Ws=Fe.length;He<Ws;He++)if(Gt.isWebGL2){const oi=Fe[He];ae.update(oi,an),ae.bind(oi,an)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return an}function Gr(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Wn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,k,K){Vt.get(A.texture).__webglTexture=k,Vt.get(A.depthTexture).__webglTexture=K;const J=Vt.get(A);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const K=Vt.get(A);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,K=0){U=A,B=k,R=K;let J=!0,Y=null,yt=!1,Lt=!1;if(A){const zt=Vt.get(A);zt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(Z.FRAMEBUFFER,null),J=!1):zt.__webglFramebuffer===void 0?P.setupRenderTarget(A):zt.__hasExternalTextures&&P.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const Wt=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?Y=Wt[k][K]:Y=Wt[k],yt=!0):Gt.isWebGL2&&A.samples>0&&P.useMultisampledRTT(A)===!1?Y=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[K]:Y=Wt,D.copy(A.viewport),Q.copy(A.scissor),rt=A.scissorTest}else D.copy(z).multiplyScalar(st).floor(),Q.copy(et).multiplyScalar(st).floor(),rt=at;if(wt.bindFramebuffer(Z.FRAMEBUFFER,Y)&&Gt.drawBuffers&&J&&wt.drawBuffers(A,Y),wt.viewport(D),wt.scissor(Q),wt.setScissorTest(rt),yt){const zt=Vt.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+k,zt.__webglTexture,K)}else if(Lt){const zt=Vt.get(A.texture),$t=k||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,zt.__webglTexture,K||0,$t)}it=-1},this.readRenderTargetPixels=function(A,k,K,J,Y,yt,Lt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Rt=Rt[Lt]),Rt){wt.bindFramebuffer(Z.FRAMEBUFFER,Rt);try{const zt=A.texture,$t=zt.format,Wt=zt.type;if($t!==Sn&&Tt.convert($t)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=Wt===Ir&&(It.has("EXT_color_buffer_half_float")||Gt.isWebGL2&&It.has("EXT_color_buffer_float"));if(Wt!==ni&&Tt.convert(Wt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===Qn&&(Gt.isWebGL2||It.has("OES_texture_float")||It.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-J&&K>=0&&K<=A.height-Y&&Z.readPixels(k,K,J,Y,Tt.convert($t),Tt.convert(Wt),yt)}finally{const zt=U!==null?Vt.get(U).__webglFramebuffer:null;wt.bindFramebuffer(Z.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(A,k,K=0){const J=Math.pow(2,-K),Y=Math.floor(k.image.width*J),yt=Math.floor(k.image.height*J);P.setTexture2D(k,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,K,0,0,A.x,A.y,Y,yt),wt.unbindTexture()},this.copyTextureToTexture=function(A,k,K,J=0){const Y=k.image.width,yt=k.image.height,Lt=Tt.convert(K.format),Rt=Tt.convert(K.type);P.setTexture2D(K,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,J,A.x,A.y,Y,yt,Lt,Rt,k.image.data):k.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,J,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Lt,k.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,J,A.x,A.y,Lt,Rt,k.image),J===0&&K.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,k,K,J,Y=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=A.max.x-A.min.x+1,Lt=A.max.y-A.min.y+1,Rt=A.max.z-A.min.z+1,zt=Tt.convert(J.format),$t=Tt.convert(J.type);let Wt;if(J.isData3DTexture)P.setTexture3D(J,0),Wt=Z.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)P.setTexture2DArray(J,0),Wt=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,J.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,J.unpackAlignment);const qt=Z.getParameter(Z.UNPACK_ROW_LENGTH),Me=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Oe=Z.getParameter(Z.UNPACK_SKIP_PIXELS),ye=Z.getParameter(Z.UNPACK_SKIP_ROWS),sn=Z.getParameter(Z.UNPACK_SKIP_IMAGES),_e=K.isCompressedTexture?K.mipmaps[Y]:K.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,_e.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,_e.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,A.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,A.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?Z.texSubImage3D(Wt,Y,k.x,k.y,k.z,yt,Lt,Rt,zt,$t,_e.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Wt,Y,k.x,k.y,k.z,yt,Lt,Rt,zt,_e.data)):Z.texSubImage3D(Wt,Y,k.x,k.y,k.z,yt,Lt,Rt,zt,$t,_e),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,qt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Me),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Oe),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ye),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,sn),Y===0&&J.generateMipmaps&&Z.generateMipmap(Wt),wt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){B=0,R=0,U=null,wt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===co?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Ei:lh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ei?ze:Gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class av extends Ph{}av.prototype.isWebGL1Renderer=!0;class ov extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ch extends wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Uc=new G,Nc=new G,Oc=new Se,Va=new Hs,bs=new zr;class lv extends Ue{constructor(t=new Je,e=new Ch){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,s=[0];for(let a=1,l=e.count;a<l;a++)Uc.fromBufferAttribute(e,a-1),Nc.fromBufferAttribute(e,a),s[a]=s[a-1],s[a]+=Uc.distanceTo(Nc);t.setAttribute("lineDistance",new ke(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const s=this.geometry,a=this.matrixWorld,l=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bs.copy(s.boundingSphere),bs.applyMatrix4(a),bs.radius+=l,t.ray.intersectsSphere(bs)===!1)return;Oc.copy(a).invert(),Va.copy(t.ray).applyMatrix4(Oc);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=new G,m=new G,p=new G,g=new G,x=this.isLineSegments?2:1,S=s.index,y=s.attributes.position;if(S!==null){const v=Math.max(0,h.start),C=Math.min(S.count,h.start+h.count);for(let b=v,I=C-1;b<I;b+=x){const B=S.getX(b),R=S.getX(b+1);if(f.fromBufferAttribute(y,B),m.fromBufferAttribute(y,R),Va.distanceSqToSegment(f,m,g,p)>d)continue;g.applyMatrix4(this.matrixWorld);const it=t.ray.origin.distanceTo(g);it<t.near||it>t.far||e.push({distance:it,point:p.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,h.start),C=Math.min(y.count,h.start+h.count);for(let b=v,I=C-1;b<I;b+=x){if(f.fromBufferAttribute(y,b),m.fromBufferAttribute(y,b+1),Va.distanceSqToSegment(f,m,g,p)>d)continue;g.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(g);R<t.near||R>t.far||e.push({distance:R,point:p.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const a=e[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=a.length;l<h;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}class Rh extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fc=new Se,no=new Hs,ws=new zr,As=new G;class cv extends Ue{constructor(t=new Je,e=new Rh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const s=this.geometry,a=this.matrixWorld,l=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ws.copy(s.boundingSphere),ws.applyMatrix4(a),ws.radius+=l,t.ray.intersectsSphere(ws)===!1)return;Fc.copy(a).invert(),no.copy(t.ray).applyMatrix4(Fc);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=s.index,p=s.attributes.position;if(f!==null){const g=Math.max(0,h.start),x=Math.min(f.count,h.start+h.count);for(let S=g,M=x;S<M;S++){const y=f.getX(S);As.fromBufferAttribute(p,y),Bc(As,y,d,a,t,e,this)}}else{const g=Math.max(0,h.start),x=Math.min(p.count,h.start+h.count);for(let S=g,M=x;S<M;S++)As.fromBufferAttribute(p,S),Bc(As,S,d,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const a=e[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=a.length;l<h;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Bc(i,t,e,s,a,l,h){const c=no.distanceSqToPoint(i);if(c<e){const d=new G;no.closestPointToPoint(i,d),d.applyMatrix4(s);const f=a.ray.origin.distanceTo(d);if(f<a.near||f>a.far)return;l.push({distance:f,distanceToRay:Math.sqrt(c),point:d,index:t,face:null,object:h})}}class _o extends Je{constructor(t=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],e=12,s=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:s,phiLength:a},e=Math.floor(e),a=We(a,0,Math.PI*2);const l=[],h=[],c=[],d=[],f=[],m=1/e,p=new G,g=new ie,x=new G,S=new G,M=new G;let y=0,v=0;for(let C=0;C<=t.length-1;C++)switch(C){case 0:y=t[C+1].x-t[C].x,v=t[C+1].y-t[C].y,x.x=v*1,x.y=-y,x.z=v*0,M.copy(x),x.normalize(),d.push(x.x,x.y,x.z);break;case t.length-1:d.push(M.x,M.y,M.z);break;default:y=t[C+1].x-t[C].x,v=t[C+1].y-t[C].y,x.x=v*1,x.y=-y,x.z=v*0,S.copy(x),x.x+=M.x,x.y+=M.y,x.z+=M.z,x.normalize(),d.push(x.x,x.y,x.z),M.copy(S)}for(let C=0;C<=e;C++){const b=s+C*m*a,I=Math.sin(b),B=Math.cos(b);for(let R=0;R<=t.length-1;R++){p.x=t[R].x*I,p.y=t[R].y,p.z=t[R].x*B,h.push(p.x,p.y,p.z),g.x=C/e,g.y=R/(t.length-1),c.push(g.x,g.y);const U=d[3*R+0]*I,it=d[3*R+1],w=d[3*R+0]*B;f.push(U,it,w)}}for(let C=0;C<e;C++)for(let b=0;b<t.length-1;b++){const I=b+C*t.length,B=I,R=I+t.length,U=I+t.length+1,it=I+1;l.push(B,R,it),l.push(U,it,R)}this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("uv",new ke(c,2)),this.setAttribute("normal",new ke(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.points,t.segments,t.phiStart,t.phiLength)}}class go extends Je{constructor(t=1,e=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:s,thetaLength:a},e=Math.max(3,e);const l=[],h=[],c=[],d=[],f=new G,m=new ie;h.push(0,0,0),c.push(0,0,1),d.push(.5,.5);for(let p=0,g=3;p<=e;p++,g+=3){const x=s+p/e*a;f.x=t*Math.cos(x),f.y=t*Math.sin(x),h.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(h[g]/t+1)/2,m.y=(h[g+1]/t+1)/2,d.push(m.x,m.y)}for(let p=1;p<=e;p++)l.push(p,p+1,0);this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Or extends Je{constructor(t=1,e=32,s=16,a=0,l=Math.PI*2,h=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:s,phiStart:a,phiLength:l,thetaStart:h,thetaLength:c},e=Math.max(3,Math.floor(e)),s=Math.max(2,Math.floor(s));const d=Math.min(h+c,Math.PI);let f=0;const m=[],p=new G,g=new G,x=[],S=[],M=[],y=[];for(let v=0;v<=s;v++){const C=[],b=v/s;let I=0;v===0&&h===0?I=.5/e:v===s&&d===Math.PI&&(I=-.5/e);for(let B=0;B<=e;B++){const R=B/e;p.x=-t*Math.cos(a+R*l)*Math.sin(h+b*c),p.y=t*Math.cos(h+b*c),p.z=t*Math.sin(a+R*l)*Math.sin(h+b*c),S.push(p.x,p.y,p.z),g.copy(p).normalize(),M.push(g.x,g.y,g.z),y.push(R+I,1-b),C.push(f++)}m.push(C)}for(let v=0;v<s;v++)for(let C=0;C<e;C++){const b=m[v][C+1],I=m[v][C],B=m[v+1][C],R=m[v+1][C+1];(v!==0||h>0)&&x.push(b,I,R),(v!==s-1||d<Math.PI)&&x.push(I,B,R)}this.setIndex(x),this.setAttribute("position",new ke(S,3)),this.setAttribute("normal",new ke(M,3)),this.setAttribute("uv",new ke(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ih extends wi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hv extends Ch{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const zc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class uv{constructor(t,e,s){const a=this;let l=!1,h=0,c=0,d;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this.itemStart=function(m){c++,l===!1&&a.onStart!==void 0&&a.onStart(m,h,c),l=!0},this.itemEnd=function(m){h++,a.onProgress!==void 0&&a.onProgress(m,h,c),h===c&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,p){return f.push(m,p),this},this.removeHandler=function(m){const p=f.indexOf(m);return p!==-1&&f.splice(p,2),this},this.getHandler=function(m){for(let p=0,g=f.length;p<g;p+=2){const x=f[p],S=f[p+1];if(x.global&&(x.lastIndex=0),x.test(m))return S}return null}}}const dv=new uv;class vo{constructor(t){this.manager=t!==void 0?t:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const s=this;return new Promise(function(a,l){s.load(t,a,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vo.DEFAULT_MATERIAL_NAME="__DEFAULT";class fv extends vo{constructor(t){super(t)}load(t,e,s,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,h=zc.get(t);if(h!==void 0)return l.manager.itemStart(t),setTimeout(function(){e&&e(h),l.manager.itemEnd(t)},0),h;const c=Ur("img");function d(){m(),zc.add(t,this),e&&e(this),l.manager.itemEnd(t)}function f(p){m(),a&&a(p),l.manager.itemError(t),l.manager.itemEnd(t)}function m(){c.removeEventListener("load",d,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(t),c.src=t,c}}class pv extends vo{constructor(t){super(t)}load(t,e,s,a){const l=new $e,h=new fv(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(c){l.image=c,l.needsUpdate=!0,e!==void 0&&e(l)},s,a),l}}class Dh extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Wa=new Se,kc=new G,Hc=new G;class mv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,s=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _v extends mv{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gv extends Dh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vv extends Dh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class xv{constructor(t,e,s=0,a=1/0){this.ray=new Hs(t,e),this.near=s,this.far=a,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,s=[]){return io(t,this,s,e),s.sort(Gc),s}intersectObjects(t,e=!0,s=[]){for(let a=0,l=t.length;a<l;a++)io(t[a],this,s,e);return s.sort(Gc),s}}function Gc(i,t){return i.distance-t.distance}function io(i,t,e,s){if(i.layers.test(t.layers)&&i.raycast(t,e),s===!0){const a=i.children;for(let l=0,h=a.length;l<h;l++)io(a[l],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);const yv=[[0,0],[.014,.014],[.033,.04],[.05,.076],[.057,.115],[.055,.154],[.042,.19],[.022,.215],[0,.225]].map(([i,t])=>new ie(i,t)),Xa=15352629,Mv=16740178;function Sv(i){const t=new _o(yv,24),e=new Or(.024,16,16),s=new go(.03,20);function a(h,c,d=i){const f=(90-h)*(Math.PI/180),m=(c+180)*(Math.PI/180);return new G(-d*Math.sin(f)*Math.cos(m),d*Math.cos(f),d*Math.sin(f)*Math.sin(m))}function l(h,c,d=Xa){const f=a(h,c),m=f.clone().normalize(),p=new Ih({color:d,shininess:60,specular:4465186}),g=new en(t,p);g.position.copy(f),g.quaternion.setFromUnitVectors(new G(0,1,0),m);const x=new en(e,new Nr({color:16777215}));x.position.set(0,.13,0),g.add(x);const S=new en(s,new Nr({color:0,transparent:!0,opacity:.28,side:Ln}));return S.position.copy(m.clone().multiplyScalar(i+.002)),S.lookAt(0,0,0),g.userData={dot:x,ring:S,baseColor:d,hotColor:d===Xa?Mv:d},{mesh:g,ring:S}}return{create:l,latLngToVec3:a,RED:Xa}}function Ev(i,t,e,s=96,a=1.02){const l=i.clone().normalize(),h=t.clone().normalize(),c=[];for(let d=0;d<=s;d++){const f=d/s,m=to.clamp(l.dot(h),-1,1),p=Math.acos(m);let g;if(p<1e-4)g=l.clone();else{const S=Math.sin((1-f)*p)/Math.sin(p),M=Math.sin(f*p)/Math.sin(p);g=l.clone().multiplyScalar(S).add(h.clone().multiplyScalar(M))}const x=1+.12*Math.sin(Math.PI*f);c.push(g.normalize().multiplyScalar(e*a*x))}return c}function Tv(i){function t(e,s=16765514){const a=new Qi;for(let l=0;l<e.length-1;l++){const h=Ev(e[l],e[l+1],i),c=new Je().setFromPoints(h),d=new hv({color:s,dashSize:.12,gapSize:.08,transparent:!0,opacity:.95,linewidth:2}),f=new lv(c,d);f.computeLineDistances(),a.add(f)}return a}return{createRoute:t}}const Ls=2.6;function bv(i,{onSelect:t}={}){const e=new Ph({canvas:i,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new ov,a=new dn(45,innerWidth/innerHeight,.1,1e3);a.position.set(0,0,7.2);const l=new Qi;s.add(l);const h=new Or(Ls,96,96),c=new Ih({color:2771562,shininess:8}),d=new en(h,c);l.add(d);const f=new pv;f.setCrossOrigin("anonymous"),f.load(Nu,V=>{c.map=V,c.color.set(16777215),c.needsUpdate=!0}),f.load(Ou,V=>{c.bumpMap=V,c.bumpScale=.04,c.needsUpdate=!0});const m=new en(new Or(Ls*1.03,32,32),new Nr({color:9358335,transparent:!0,opacity:.1,side:je}));l.add(m),s.add(new vv(16777215,.85));const p=new gv(16777215,.6);p.position.set(5,3,6),s.add(p);{const V=new Je,z=900,et=new Float32Array(z*3);for(let at=0;at<z;at++){const W=40+Math.random()*60,nt=Math.random()*Math.PI*2,lt=Math.acos(Math.random()*2-1);et[at*3]=W*Math.sin(lt)*Math.cos(nt),et[at*3+1]=W*Math.sin(lt)*Math.sin(nt),et[at*3+2]=W*Math.cos(lt)}V.setAttribute("position",new En(et,3)),s.add(new cv(V,new Rh({color:15919315,size:.09,transparent:!0,opacity:.55})))}const g=Sv(Ls),x=Tv(Ls),S=[];let M=null,y=null;const v=new Map;function C(V){const{mesh:z,ring:et}=g.create(V.lat,V.lng);z.userData.id=V.id,l.add(z),l.add(et),S.push({mesh:z,id:V.id,ring:et}),v.set(V.id,[V.lat,V.lng])}function b(V){V.forEach(C)}function I(V,z,et){const{mesh:at,ring:W}=g.create(V,z,16757504);at.userData.id=et,l.add(at),l.add(W);const nt={mesh:at,id:et,ring:W,custom:!0};return S.push(nt),nt}function B(V){const z=S.findIndex(W=>W.id===V);if(z===-1)return;const{mesh:et,ring:at}=S[z];l.remove(et,at),S.splice(z,1),v.delete(V)}function R(V){if(y&&(l.remove(y),y=null),!V||V.length<2)return;const z=V.map(et=>g.latLngToVec3(et.lat,et.lng));y=x.createRoute(z),l.add(y)}function U(V,z){rt=!1,F={y:-(z+180)*(Math.PI/180)-Math.PI/2,x:to.clamp(V*(Math.PI/180),-1.1,1.1)},setTimeout(()=>rt=!0,6e3)}function it(V){M=V,v.has(V)&&U(...w(V))}function w(V){return v.get(V)||[0,0]}let D=!1,Q=!1,rt=!0,pt={x:0,y:0},F=null;i.addEventListener("pointerdown",V=>{D=!0,rt=!1,Q=!1,F=null,pt={x:V.clientX,y:V.clientY}}),addEventListener("pointerup",()=>{D=!1,setTimeout(()=>rt=!0,3e3)}),addEventListener("pointermove",V=>{if(!D)return;const z=V.clientX-pt.x,et=V.clientY-pt.y;(Math.abs(z)>2||Math.abs(et)>2)&&(Q=!0),l.rotation.y+=z*.005,l.rotation.x=to.clamp(l.rotation.x+et*.005,-1.1,1.1),pt={x:V.clientX,y:V.clientY}});const $=new xv,tt=new ie;i.addEventListener("click",V=>{if(Q)return;tt.x=V.clientX/innerWidth*2-1,tt.y=-(V.clientY/innerHeight)*2+1,$.setFromCamera(tt,a);const z=$.intersectObjects(S.map(et=>et.mesh));z.length&&t&&t(z[0].object.userData.id)});function st(){e.setSize(innerWidth,innerHeight),a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix()}addEventListener("resize",st),st();function X(){requestAnimationFrame(X),F?(l.rotation.y+=(F.y-l.rotation.y)*.08,l.rotation.x+=(F.x-l.rotation.x)*.08):rt&&!D&&(l.rotation.y+=.0015);const V=performance.now()*.002;S.forEach(({mesh:z,id:et,ring:at})=>{const W=M===et,nt=W?1.4+Math.sin(V*2)*.08:1;z.scale.setScalar(nt),at.scale.setScalar(W?1+Math.sin(V*2)*.25:1),z.material.color.set(W?z.userData.hotColor:z.userData.baseColor)}),e.render(s,a)}return X(),{addDestinations:b,addDestination:C,addCustomPin:I,removePin:B,setRoute:R,focusOn:U,select:it,setSelected(V){M=V}}}const Uh="wa_user_name";function Nh(){return localStorage.getItem(Uh)||null}function wv(i){const t=(i||"").trim();return t?(localStorage.setItem(Uh,t),t):Nh()}function Oh(){let i=Nh();return i||(i=wv(prompt("What should we call you? (shown on things you add)","")||"Guest")),i}function Av(i,t=260,e=60,s="var(--brass)"){if(!i.length)return"";const a=Math.min(...i),h=Math.max(...i)-a||1,c=i.map((p,g)=>{const x=g/(i.length-1)*t,S=e-(p-a)/h*(e-8)-4;return`${x.toFixed(1)},${S.toFixed(1)}`}).join(" "),f=i.indexOf(a)/(i.length-1)*t,m=e-(a-a)/h*(e-8)-4;return`<svg viewBox="0 0 ${t} ${e}" width="100%" height="${e}" preserveAspectRatio="none">
    <polyline points="${c}" fill="none" stroke="${s}" stroke-width="2"/>
    <circle cx="${f.toFixed(1)}" cy="${m.toFixed(1)}" r="3.5" fill="var(--pine)"/>
  </svg>`}function Lv(i){const t=i.source==="amadeus"?"live · Amadeus":"demo data",e=i.offers.slice(0,4).map(s=>`
    <div class="flightRow">
      <span class="fAir">${s.airline}</span>
      <span class="fMeta">${s.stops===0?"nonstop":s.stops+" stop"} · ${s.duration}</span>
      <span class="fPrice">$${Math.round(s.price_usd)}</span>
    </div>`).join("");return`<div class="sectionTitle">Flights from ${i.origin} <span class="srcTag">${t}</span></div>${e}`}function Pv(i){const t=i.recommendation.startsWith("BOOK")?"now":i.recommendation.startsWith("WAIT")?"wait":"soon",e=i.model==="gradient-boosting"?"ML · GradientBoosting":"heuristic",s=i.curve.map(a=>a.predicted_price_usd);return`
    <div class="sectionTitle">Price Intelligence <span class="srcTag">${e}</span></div>
    <div class="predictBadge ${t}">${i.recommendation}</div>
    <div class="predictStats">
      <div><b>$${Math.round(i.predicted_price_now)}</b><span>now (${i.current_days_out}d out)</span></div>
      <div><b>$${Math.round(i.cheapest_price)}</b><span>low @ ${i.cheapest_days_out}d out</span></div>
      <div><b>${i.expected_drop_pct}%</b><span>expected drop</span></div>
    </div>
    <div class="chartLabel">Price vs. days before departure</div>
    ${Av(s)}
  `}const Vc=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Cv(i){const t=i.best_month,e=i.months.map(s=>{const a=Math.max(4,s.overall_score);return`<div class="btBar ${s.month===t.month?"best":""}" style="height:${a}%" title="${s.month_name}: score ${s.overall_score}, $${Math.round(s.price)}, comfort ${s.comfort_score}"></div>`}).join("");return`
    <div class="sectionTitle">Best Time to Travel <span class="srcTag">price + weather</span></div>
    <div class="bestPick">🌤️ <b>${Vc[t.month-1]}</b> — cheap tickets ($${Math.round(t.price)}) &amp; great weather (comfort ${t.comfort_score})</div>
    <div class="btChart">${e}</div>
    <div class="btAxis">${Vc.map(s=>`<span>${s[0]}</span>`).join("")}</div>
  `}const Rv=[2026,2027,2028,2029,2030,2031,2032];function Iv({onAddBucket:i,onAddRoute:t,onOpenMap:e,onSearchNearby:s,onRemoveDestination:a,getBucketYears:l}){const h=document.getElementById("detailPanel"),c=document.getElementById("panelScroll");document.getElementById("closeDetail").onclick=()=>h.classList.remove("open");let d=null;function f(p){d=p;const g=l(p.id),x=p.attractions||[],S=p.activities||[],M=p.famous||[],y=x.length||S.length||M.length?`${x.length?`<div class="sectionTitle">Must-Visit Spots, Ranked</div>
          ${x.map((I,B)=>`<div class="attrItem"><div class="attrRank">${B+1}</div>
            <div><div class="attrName">${I.name}</div><div class="attrDesc">${I.desc}</div></div></div>`).join("")}`:""}
         ${S.length?`<div class="sectionTitle">Top Activities</div>
          <div class="pillList">${S.map(I=>`<div class="pill">${I}</div>`).join("")}</div>`:""}
         ${M.length?`<div class="sectionTitle">Famous For</div>
          <div class="pillList">${M.map(I=>`<div class="pill famousPill">${I}</div>`).join("")}</div>`:""}`:`<div class="customNote">✨ Your custom destination. Live flights, prices &amp; weather are above.
           Use <b>🔍 Nearby places</b> to explore what's around it.</div>`;c.innerHTML=`
      <div class="eyebrow">${p.country} · ✈ ${p.airport}${p.custom?" · custom":""}${p.added_by?` · added by ${p.added_by}`:""}</div>
      <h2>${p.name}</h2>
      ${p.tagline?`<div class="tagline">${p.tagline}</div>`:""}

      <div class="actionBar">
        <button class="actBtn" id="btnMap">🛰️ Map / Street View</button>
        <button class="actBtn" id="btnRoute">➕ Add to route</button>
        <button class="actBtn" id="btnNearby">🔍 Nearby places</button>
        <button class="actBtn danger" id="btnRemove">🗑️ Remove</button>
      </div>

      <div class="metaRow">
        <div class="metaChip"><b>Best time:</b> ${p.bestTime}</div>
        <div class="metaChip"><b>Suggested:</b> ${p.days} days</div>
        <div class="metaChip"><b>Budget:</b> $${p.budgetLow}–$${p.budgetHigh}/day</div>
      </div>

      <div id="liveIntel" class="liveIntel"><div class="loading">Loading live flights, prices &amp; weather…</div></div>

      ${y}

      <div class="addBucketBox">
        <label>Add to bucket list for</label>
        <select id="yearSelect">
          ${Rv.map(I=>`<option value="${I}" ${g.includes(I)?"disabled":""}>${I}${g.includes(I)?" (added)":""}</option>`).join("")}
        </select>
        <label>Number of days</label>
        <input type="number" id="daysInput" value="${p.days}" min="1" max="60"/>
        <label>Estimated trip budget ($ total)</label>
        <input type="number" id="budgetInput" value="${p.budgetLow*p.days}" min="0"/>
        <button id="addBucketBtn">✦ Add to Bucket List</button>
      </div>`,h.classList.add("open"),document.getElementById("btnMap").onclick=()=>e(p),document.getElementById("btnRoute").onclick=()=>t(p),document.getElementById("btnNearby").onclick=()=>s(p),document.getElementById("btnRemove").onclick=()=>{confirm(`Remove "${p.name}" from your destinations?`)&&(a(p),h.classList.remove("open"))};const v=document.getElementById("daysInput"),C=document.getElementById("budgetInput");let b=!1;C.addEventListener("input",()=>{b=!0}),v.addEventListener("input",()=>{const I=Math.max(1,parseInt(v.value,10)||1);b||(C.value=p.budgetLow*I)}),document.getElementById("addBucketBtn").onclick=()=>{const I=parseInt(document.getElementById("yearSelect").value,10),B=Math.max(1,parseInt(v.value,10)||p.days),R=parseFloat(C.value)||0;i(p,I,R,B,Oh());const U=document.getElementById("addBucketBtn");U.textContent="✓ Added!",U.classList.add("added"),setTimeout(()=>f(p),700)},m(p)}async function m(p){const g=document.getElementById("liveIntel");try{const[x,S,M]=await Promise.all([Hn.flights(p.id,"JFK"),Hn.predictPrice(p.id,"JFK",60),Hn.bestTime(p.id,"JFK",.5)]);if((d==null?void 0:d.id)!==p.id)return;g.innerHTML=Lv(x)+Pv(S)+Cv(M)}catch(x){g.innerHTML=`<div class="loading err">Couldn't load live data: ${x.message}. Is the backend running on :8000?</div>`}}return{open:f,close:()=>h.classList.remove("open")}}var Dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ro={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(i,t){(function(e,s){s(t)})(Dv,function(e){var s="1.9.4";function a(n){var r,o,u,_;for(o=1,u=arguments.length;o<u;o++){_=arguments[o];for(r in _)n[r]=_[r]}return n}var l=Object.create||function(){function n(){}return function(r){return n.prototype=r,new n}}();function h(n,r){var o=Array.prototype.slice;if(n.bind)return n.bind.apply(n,o.call(arguments,1));var u=o.call(arguments,2);return function(){return n.apply(r,u.length?u.concat(o.call(arguments)):arguments)}}var c=0;function d(n){return"_leaflet_id"in n||(n._leaflet_id=++c),n._leaflet_id}function f(n,r,o){var u,_,E,N;return N=function(){u=!1,_&&(E.apply(o,_),_=!1)},E=function(){u?_=arguments:(n.apply(o,arguments),setTimeout(N,r),u=!0)},E}function m(n,r,o){var u=r[1],_=r[0],E=u-_;return n===u&&o?n:((n-_)%E+E)%E+_}function p(){return!1}function g(n,r){if(r===!1)return n;var o=Math.pow(10,r===void 0?6:r);return Math.round(n*o)/o}function x(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function S(n){return x(n).split(/\s+/)}function M(n,r){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?l(n.options):{});for(var o in r)n.options[o]=r[o];return n.options}function y(n,r,o){var u=[];for(var _ in n)u.push(encodeURIComponent(o?_.toUpperCase():_)+"="+encodeURIComponent(n[_]));return(!r||r.indexOf("?")===-1?"?":"&")+u.join("&")}var v=/\{ *([\w_ -]+) *\}/g;function C(n,r){return n.replace(v,function(o,u){var _=r[u];if(_===void 0)throw new Error("No value provided for variable "+o);return typeof _=="function"&&(_=_(r)),_})}var b=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function I(n,r){for(var o=0;o<n.length;o++)if(n[o]===r)return o;return-1}var B="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function R(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var U=0;function it(n){var r=+new Date,o=Math.max(0,16-(r-U));return U=r+o,window.setTimeout(n,o)}var w=window.requestAnimationFrame||R("RequestAnimationFrame")||it,D=window.cancelAnimationFrame||R("CancelAnimationFrame")||R("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function Q(n,r,o){if(o&&w===it)n.call(r);else return w.call(window,h(n,r))}function rt(n){n&&D.call(window,n)}var pt={__proto__:null,extend:a,create:l,bind:h,get lastId(){return c},stamp:d,throttle:f,wrapNum:m,falseFn:p,formatNum:g,trim:x,splitWords:S,setOptions:M,getParamString:y,template:C,isArray:b,indexOf:I,emptyImageUrl:B,requestFn:w,cancelFn:D,requestAnimFrame:Q,cancelAnimFrame:rt};function F(){}F.extend=function(n){var r=function(){M(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},o=r.__super__=this.prototype,u=l(o);u.constructor=r,r.prototype=u;for(var _ in this)Object.prototype.hasOwnProperty.call(this,_)&&_!=="prototype"&&_!=="__super__"&&(r[_]=this[_]);return n.statics&&a(r,n.statics),n.includes&&($(n.includes),a.apply(null,[u].concat(n.includes))),a(u,n),delete u.statics,delete u.includes,u.options&&(u.options=o.options?l(o.options):{},a(u.options,n.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){o.callInitHooks&&o.callInitHooks.call(this),this._initHooksCalled=!0;for(var E=0,N=u._initHooks.length;E<N;E++)u._initHooks[E].call(this)}},r},F.include=function(n){var r=this.prototype.options;return a(this.prototype,n),n.options&&(this.prototype.options=r,this.mergeOptions(n.options)),this},F.mergeOptions=function(n){return a(this.prototype.options,n),this},F.addInitHook=function(n){var r=Array.prototype.slice.call(arguments,1),o=typeof n=="function"?n:function(){this[n].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(o),this};function $(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=b(n)?n:[n];for(var r=0;r<n.length;r++)n[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var tt={on:function(n,r,o){if(typeof n=="object")for(var u in n)this._on(u,n[u],r);else{n=S(n);for(var _=0,E=n.length;_<E;_++)this._on(n[_],r,o)}return this},off:function(n,r,o){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var u in n)this._off(u,n[u],r);else{n=S(n);for(var _=arguments.length===1,E=0,N=n.length;E<N;E++)_?this._off(n[E]):this._off(n[E],r,o)}return this},_on:function(n,r,o,u){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(n,r,o)===!1){o===this&&(o=void 0);var _={fn:r,ctx:o};u&&(_.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(_)}},_off:function(n,r,o){var u,_,E;if(this._events&&(u=this._events[n],!!u)){if(arguments.length===1){if(this._firingCount)for(_=0,E=u.length;_<E;_++)u[_].fn=p;delete this._events[n];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var N=this._listens(n,r,o);if(N!==!1){var H=u[N];this._firingCount&&(H.fn=p,this._events[n]=u=u.slice()),u.splice(N,1)}}},fire:function(n,r,o){if(!this.listens(n,o))return this;var u=a({},r,{type:n,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var _=this._events[n];if(_){this._firingCount=this._firingCount+1||1;for(var E=0,N=_.length;E<N;E++){var H=_[E],j=H.fn;H.once&&this.off(n,j,H.ctx),j.call(H.ctx||this,u)}this._firingCount--}}return o&&this._propagateEvent(u),this},listens:function(n,r,o,u){typeof n!="string"&&console.warn('"string" type argument expected');var _=r;typeof r!="function"&&(u=!!r,_=void 0,o=void 0);var E=this._events&&this._events[n];if(E&&E.length&&this._listens(n,_,o)!==!1)return!0;if(u){for(var N in this._eventParents)if(this._eventParents[N].listens(n,r,o,u))return!0}return!1},_listens:function(n,r,o){if(!this._events)return!1;var u=this._events[n]||[];if(!r)return!!u.length;o===this&&(o=void 0);for(var _=0,E=u.length;_<E;_++)if(u[_].fn===r&&u[_].ctx===o)return _;return!1},once:function(n,r,o){if(typeof n=="object")for(var u in n)this._on(u,n[u],r,!0);else{n=S(n);for(var _=0,E=n.length;_<E;_++)this._on(n[_],r,o,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[d(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[d(n)],this},_propagateEvent:function(n){for(var r in this._eventParents)this._eventParents[r].fire(n.type,a({layer:n.target,propagatedFrom:n.target},n),!0)}};tt.addEventListener=tt.on,tt.removeEventListener=tt.clearAllEventListeners=tt.off,tt.addOneTimeEventListener=tt.once,tt.fireEvent=tt.fire,tt.hasEventListeners=tt.listens;var st=F.extend(tt);function X(n,r,o){this.x=o?Math.round(n):n,this.y=o?Math.round(r):r}var V=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};X.prototype={clone:function(){return new X(this.x,this.y)},add:function(n){return this.clone()._add(z(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(z(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new X(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new X(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=V(this.x),this.y=V(this.y),this},distanceTo:function(n){n=z(n);var r=n.x-this.x,o=n.y-this.y;return Math.sqrt(r*r+o*o)},equals:function(n){return n=z(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=z(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+g(this.x)+", "+g(this.y)+")"}};function z(n,r,o){return n instanceof X?n:b(n)?new X(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new X(n.x,n.y):new X(n,r,o)}function et(n,r){if(n)for(var o=r?[n,r]:n,u=0,_=o.length;u<_;u++)this.extend(o[u])}et.prototype={extend:function(n){var r,o;if(!n)return this;if(n instanceof X||typeof n[0]=="number"||"x"in n)r=o=z(n);else if(n=at(n),r=n.min,o=n.max,!r||!o)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=o.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(o.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(o.y,this.max.y)),this},getCenter:function(n){return z((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return z(this.min.x,this.max.y)},getTopRight:function(){return z(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var r,o;return typeof n[0]=="number"||n instanceof X?n=z(n):n=at(n),n instanceof et?(r=n.min,o=n.max):r=o=n,r.x>=this.min.x&&o.x<=this.max.x&&r.y>=this.min.y&&o.y<=this.max.y},intersects:function(n){n=at(n);var r=this.min,o=this.max,u=n.min,_=n.max,E=_.x>=r.x&&u.x<=o.x,N=_.y>=r.y&&u.y<=o.y;return E&&N},overlaps:function(n){n=at(n);var r=this.min,o=this.max,u=n.min,_=n.max,E=_.x>r.x&&u.x<o.x,N=_.y>r.y&&u.y<o.y;return E&&N},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var r=this.min,o=this.max,u=Math.abs(r.x-o.x)*n,_=Math.abs(r.y-o.y)*n;return at(z(r.x-u,r.y-_),z(o.x+u,o.y+_))},equals:function(n){return n?(n=at(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function at(n,r){return!n||n instanceof et?n:new et(n,r)}function W(n,r){if(n)for(var o=r?[n,r]:n,u=0,_=o.length;u<_;u++)this.extend(o[u])}W.prototype={extend:function(n){var r=this._southWest,o=this._northEast,u,_;if(n instanceof lt)u=n,_=n;else if(n instanceof W){if(u=n._southWest,_=n._northEast,!u||!_)return this}else return n?this.extend(ft(n)||nt(n)):this;return!r&&!o?(this._southWest=new lt(u.lat,u.lng),this._northEast=new lt(_.lat,_.lng)):(r.lat=Math.min(u.lat,r.lat),r.lng=Math.min(u.lng,r.lng),o.lat=Math.max(_.lat,o.lat),o.lng=Math.max(_.lng,o.lng)),this},pad:function(n){var r=this._southWest,o=this._northEast,u=Math.abs(r.lat-o.lat)*n,_=Math.abs(r.lng-o.lng)*n;return new W(new lt(r.lat-u,r.lng-_),new lt(o.lat+u,o.lng+_))},getCenter:function(){return new lt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new lt(this.getNorth(),this.getWest())},getSouthEast:function(){return new lt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof lt||"lat"in n?n=ft(n):n=nt(n);var r=this._southWest,o=this._northEast,u,_;return n instanceof W?(u=n.getSouthWest(),_=n.getNorthEast()):u=_=n,u.lat>=r.lat&&_.lat<=o.lat&&u.lng>=r.lng&&_.lng<=o.lng},intersects:function(n){n=nt(n);var r=this._southWest,o=this._northEast,u=n.getSouthWest(),_=n.getNorthEast(),E=_.lat>=r.lat&&u.lat<=o.lat,N=_.lng>=r.lng&&u.lng<=o.lng;return E&&N},overlaps:function(n){n=nt(n);var r=this._southWest,o=this._northEast,u=n.getSouthWest(),_=n.getNorthEast(),E=_.lat>r.lat&&u.lat<o.lat,N=_.lng>r.lng&&u.lng<o.lng;return E&&N},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,r){return n?(n=nt(n),this._southWest.equals(n.getSouthWest(),r)&&this._northEast.equals(n.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function nt(n,r){return n instanceof W?n:new W(n,r)}function lt(n,r,o){if(isNaN(n)||isNaN(r))throw new Error("Invalid LatLng object: ("+n+", "+r+")");this.lat=+n,this.lng=+r,o!==void 0&&(this.alt=+o)}lt.prototype={equals:function(n,r){if(!n)return!1;n=ft(n);var o=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return o<=(r===void 0?1e-9:r)},toString:function(n){return"LatLng("+g(this.lat,n)+", "+g(this.lng,n)+")"},distanceTo:function(n){return Ut.distance(this,ft(n))},wrap:function(){return Ut.wrapLatLng(this)},toBounds:function(n){var r=180*n/40075017,o=r/Math.cos(Math.PI/180*this.lat);return nt([this.lat-r,this.lng-o],[this.lat+r,this.lng+o])},clone:function(){return new lt(this.lat,this.lng,this.alt)}};function ft(n,r,o){return n instanceof lt?n:b(n)&&typeof n[0]!="object"?n.length===3?new lt(n[0],n[1],n[2]):n.length===2?new lt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new lt(n.lat,"lng"in n?n.lng:n.lon,n.alt):r===void 0?null:new lt(n,r,o)}var St={latLngToPoint:function(n,r){var o=this.projection.project(n),u=this.scale(r);return this.transformation._transform(o,u)},pointToLatLng:function(n,r){var o=this.scale(r),u=this.transformation.untransform(n,o);return this.projection.unproject(u)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var r=this.projection.bounds,o=this.scale(n),u=this.transformation.transform(r.min,o),_=this.transformation.transform(r.max,o);return new et(u,_)},infinite:!1,wrapLatLng:function(n){var r=this.wrapLng?m(n.lng,this.wrapLng,!0):n.lng,o=this.wrapLat?m(n.lat,this.wrapLat,!0):n.lat,u=n.alt;return new lt(o,r,u)},wrapLatLngBounds:function(n){var r=n.getCenter(),o=this.wrapLatLng(r),u=r.lat-o.lat,_=r.lng-o.lng;if(u===0&&_===0)return n;var E=n.getSouthWest(),N=n.getNorthEast(),H=new lt(E.lat-u,E.lng-_),j=new lt(N.lat-u,N.lng-_);return new W(H,j)}},Ut=a({},St,{wrapLng:[-180,180],R:6371e3,distance:function(n,r){var o=Math.PI/180,u=n.lat*o,_=r.lat*o,E=Math.sin((r.lat-n.lat)*o/2),N=Math.sin((r.lng-n.lng)*o/2),H=E*E+Math.cos(u)*Math.cos(_)*N*N,j=2*Math.atan2(Math.sqrt(H),Math.sqrt(1-H));return this.R*j}}),Zt=6378137,Nt={R:Zt,MAX_LATITUDE:85.0511287798,project:function(n){var r=Math.PI/180,o=this.MAX_LATITUDE,u=Math.max(Math.min(o,n.lat),-o),_=Math.sin(u*r);return new X(this.R*n.lng*r,this.R*Math.log((1+_)/(1-_))/2)},unproject:function(n){var r=180/Math.PI;return new lt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*r,n.x*r/this.R)},bounds:function(){var n=Zt*Math.PI;return new et([-n,-n],[n,n])}()};function re(n,r,o,u){if(b(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=r,this._c=o,this._d=u}re.prototype={transform:function(n,r){return this._transform(n.clone(),r)},_transform:function(n,r){return r=r||1,n.x=r*(this._a*n.x+this._b),n.y=r*(this._c*n.y+this._d),n},untransform:function(n,r){return r=r||1,new X((n.x/r-this._b)/this._a,(n.y/r-this._d)/this._c)}};function Z(n,r,o,u){return new re(n,r,o,u)}var Ae=a({},Ut,{code:"EPSG:3857",projection:Nt,transformation:function(){var n=.5/(Math.PI*Nt.R);return Z(n,.5,-n,.5)}()}),It=a({},Ae,{code:"EPSG:900913"});function Gt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function wt(n,r){var o="",u,_,E,N,H,j;for(u=0,E=n.length;u<E;u++){for(H=n[u],_=0,N=H.length;_<N;_++)j=H[_],o+=(_?"L":"M")+j.x+" "+j.y;o+=r?bt.svg?"z":"x":""}return o||"M0 0"}var me=document.documentElement.style,Vt="ActiveXObject"in window,P=Vt&&!document.addEventListener,T="msLaunchUri"in navigator&&!("documentMode"in document),q=rn("webkit"),ut=rn("android"),ht=rn("android 2")||rn("android 3"),dt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),At=ut&&rn("Google")&&dt<537&&!("AudioNode"in window),vt=!!window.opera,Et=!T&&rn("chrome"),Ot=rn("gecko")&&!q&&!vt&&!Vt,Kt=!Et&&rn("safari"),ct=rn("phantom"),ce="OTransition"in me,te=navigator.platform.indexOf("Win")===0,kt=Vt&&"transition"in me,Ct="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ht,Tt="MozPerspective"in me,Yt=!window.L_DISABLE_3D&&(kt||Ct||Tt)&&!ce&&!ct,ae=typeof orientation<"u"||rn("mobile"),xe=ae&&q,Jt=ae&&Ct,mt=!window.PointerEvent&&window.MSPointerEvent,O=!!(window.PointerEvent||mt),gt="ontouchstart"in window||!!window.TouchEvent,xt=!window.L_NO_TOUCH&&(gt||O),Bt=ae&&vt,Dt=ae&&Ot,ue=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,de=function(){var n=!1;try{var r=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",p,r),window.removeEventListener("testPassiveEventSupport",p,r)}catch{}return n}(),Ee=function(){return!!document.createElement("canvas").getContext}(),Le=!!(document.createElementNS&&Gt("svg").createSVGRect),fe=!!Le&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ne=!Le&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var r=n.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}}(),nn=navigator.platform.indexOf("Mac")===0,Hr=navigator.platform.indexOf("Linux")===0;function rn(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var bt={ie:Vt,ielt9:P,edge:T,webkit:q,android:ut,android23:ht,androidStock:At,opera:vt,chrome:Et,gecko:Ot,safari:Kt,phantom:ct,opera12:ce,win:te,ie3d:kt,webkit3d:Ct,gecko3d:Tt,any3d:Yt,mobile:ae,mobileWebkit:xe,mobileWebkit3d:Jt,msPointer:mt,pointer:O,touch:xt,touchNative:gt,mobileOpera:Bt,mobileGecko:Dt,retina:ue,passiveEvents:de,canvas:Ee,svg:Le,vml:Ne,inlineSvg:fe,mac:nn,linux:Hr},cr=bt.msPointer?"MSPointerDown":"pointerdown",ri=bt.msPointer?"MSPointerMove":"pointermove",hr=bt.msPointer?"MSPointerUp":"pointerup",ur=bt.msPointer?"MSPointerCancel":"pointercancel",dr={touchstart:cr,touchmove:ri,touchend:hr,touchcancel:ur},Gr={touchstart:zt,touchmove:Rt,touchend:Rt,touchcancel:Rt},Wn={},A=!1;function k(n,r,o){return r==="touchstart"&&Lt(),Gr[r]?(o=Gr[r].bind(this,o),n.addEventListener(dr[r],o,!1),o):(console.warn("wrong event specified:",r),p)}function K(n,r,o){if(!dr[r]){console.warn("wrong event specified:",r);return}n.removeEventListener(dr[r],o,!1)}function J(n){Wn[n.pointerId]=n}function Y(n){Wn[n.pointerId]&&(Wn[n.pointerId]=n)}function yt(n){delete Wn[n.pointerId]}function Lt(){A||(document.addEventListener(cr,J,!0),document.addEventListener(ri,Y,!0),document.addEventListener(hr,yt,!0),document.addEventListener(ur,yt,!0),A=!0)}function Rt(n,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var o in Wn)r.touches.push(Wn[o]);r.changedTouches=[r],n(r)}}function zt(n,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&Be(r),Rt(n,r)}function $t(n){var r={},o,u;for(u in n)o=n[u],r[u]=o&&o.bind?o.bind(n):o;return n=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var Wt=200;function qt(n,r){n.addEventListener("dblclick",r);var o=0,u;function _(E){if(E.detail!==1){u=E.detail;return}if(!(E.pointerType==="mouse"||E.sourceCapabilities&&!E.sourceCapabilities.firesTouchEvents)){var N=Eo(E);if(!(N.some(function(j){return j instanceof HTMLLabelElement&&j.attributes.for})&&!N.some(function(j){return j instanceof HTMLInputElement||j instanceof HTMLSelectElement}))){var H=Date.now();H-o<=Wt?(u++,u===2&&r($t(E))):u=1,o=H}}}return n.addEventListener("click",_),{dblclick:r,simDblclick:_}}function Me(n,r){n.removeEventListener("dblclick",r.dblclick),n.removeEventListener("click",r.simDblclick)}var Oe=oi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ye=oi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),sn=ye==="webkitTransition"||ye==="OTransition"?ye+"End":"transitionend";function _e(n){return typeof n=="string"?document.getElementById(n):n}function Xt(n,r){var o=n.style[r]||n.currentStyle&&n.currentStyle[r];if((!o||o==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(n,null);o=u?u[r]:null}return o==="auto"?null:o}function se(n,r,o){var u=document.createElement(n);return u.className=r||"",o&&o.appendChild(u),u}function Ht(n){var r=n.parentNode;r&&r.removeChild(n)}function an(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Pn(n){var r=n.parentNode;r&&r.lastChild!==n&&r.appendChild(n)}function on(n){var r=n.parentNode;r&&r.firstChild!==n&&r.insertBefore(n,r.firstChild)}function si(n,r){if(n.classList!==void 0)return n.classList.contains(r);var o=Fe(n);return o.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(o)}function Pt(n,r){if(n.classList!==void 0)for(var o=S(r),u=0,_=o.length;u<_;u++)n.classList.add(o[u]);else if(!si(n,r)){var E=Fe(n);ai(n,(E?E+" ":"")+r)}}function he(n,r){n.classList!==void 0?n.classList.remove(r):ai(n,x((" "+Fe(n)+" ").replace(" "+r+" "," ")))}function ai(n,r){n.className.baseVal===void 0?n.className=r:n.className.baseVal=r}function Fe(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function He(n,r){"opacity"in n.style?n.style.opacity=r:"filter"in n.style&&Ws(n,r)}function Ws(n,r){var o=!1,u="DXImageTransform.Microsoft.Alpha";try{o=n.filters.item(u)}catch{if(r===1)return}r=Math.round(r*100),o?(o.Enabled=r!==100,o.Opacity=r):n.style.filter+=" progid:"+u+"(opacity="+r+")"}function oi(n){for(var r=document.documentElement.style,o=0;o<n.length;o++)if(n[o]in r)return n[o];return!1}function li(n,r,o){var u=r||new X(0,0);n.style[Oe]=(bt.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(o?" scale("+o+")":"")}function Te(n,r){n._leaflet_pos=r,bt.any3d?li(n,r):(n.style.left=r.x+"px",n.style.top=r.y+"px")}function ci(n){return n._leaflet_pos||new X(0,0)}var fr,pr,Xs;if("onselectstart"in document)fr=function(){jt(window,"selectstart",Be)},pr=function(){ge(window,"selectstart",Be)};else{var mr=oi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);fr=function(){if(mr){var n=document.documentElement.style;Xs=n[mr],n[mr]="none"}},pr=function(){mr&&(document.documentElement.style[mr]=Xs,Xs=void 0)}}function Zs(){jt(window,"dragstart",Be)}function qs(){ge(window,"dragstart",Be)}var Vr,Ys;function js(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(Wr(),Vr=n,Ys=n.style.outlineStyle,n.style.outlineStyle="none",jt(window,"keydown",Wr))}function Wr(){Vr&&(Vr.style.outlineStyle=Ys,Vr=void 0,Ys=void 0,ge(window,"keydown",Wr))}function Mo(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Ks(n){var r=n.getBoundingClientRect();return{x:r.width/n.offsetWidth||1,y:r.height/n.offsetHeight||1,boundingClientRect:r}}var kh={__proto__:null,TRANSFORM:Oe,TRANSITION:ye,TRANSITION_END:sn,get:_e,getStyle:Xt,create:se,remove:Ht,empty:an,toFront:Pn,toBack:on,hasClass:si,addClass:Pt,removeClass:he,setClass:ai,getClass:Fe,setOpacity:He,testProp:oi,setTransform:li,setPosition:Te,getPosition:ci,get disableTextSelection(){return fr},get enableTextSelection(){return pr},disableImageDrag:Zs,enableImageDrag:qs,preventOutline:js,restoreOutline:Wr,getSizedParentNode:Mo,getScale:Ks};function jt(n,r,o,u){if(r&&typeof r=="object")for(var _ in r)Js(n,_,r[_],o);else{r=S(r);for(var E=0,N=r.length;E<N;E++)Js(n,r[E],o,u)}return this}var Tn="_leaflet_events";function ge(n,r,o,u){if(arguments.length===1)So(n),delete n[Tn];else if(r&&typeof r=="object")for(var _ in r)Qs(n,_,r[_],o);else if(r=S(r),arguments.length===2)So(n,function(H){return I(r,H)!==-1});else for(var E=0,N=r.length;E<N;E++)Qs(n,r[E],o,u);return this}function So(n,r){for(var o in n[Tn]){var u=o.split(/\d/)[0];(!r||r(u))&&Qs(n,u,null,null,o)}}var $s={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Js(n,r,o,u){var _=r+d(o)+(u?"_"+d(u):"");if(n[Tn]&&n[Tn][_])return this;var E=function(H){return o.call(u||n,H||window.event)},N=E;!bt.touchNative&&bt.pointer&&r.indexOf("touch")===0?E=k(n,r,E):bt.touch&&r==="dblclick"?E=qt(n,E):"addEventListener"in n?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?n.addEventListener($s[r]||r,E,bt.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(E=function(H){H=H||window.event,ea(n,H)&&N(H)},n.addEventListener($s[r],E,!1)):n.addEventListener(r,N,!1):n.attachEvent("on"+r,E),n[Tn]=n[Tn]||{},n[Tn][_]=E}function Qs(n,r,o,u,_){_=_||r+d(o)+(u?"_"+d(u):"");var E=n[Tn]&&n[Tn][_];if(!E)return this;!bt.touchNative&&bt.pointer&&r.indexOf("touch")===0?K(n,r,E):bt.touch&&r==="dblclick"?Me(n,E):"removeEventListener"in n?n.removeEventListener($s[r]||r,E,!1):n.detachEvent("on"+r,E),n[Tn][_]=null}function hi(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function ta(n){return Js(n,"wheel",hi),this}function _r(n){return jt(n,"mousedown touchstart dblclick contextmenu",hi),n._leaflet_disable_click=!0,this}function Be(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function ui(n){return Be(n),hi(n),this}function Eo(n){if(n.composedPath)return n.composedPath();for(var r=[],o=n.target;o;)r.push(o),o=o.parentNode;return r}function To(n,r){if(!r)return new X(n.clientX,n.clientY);var o=Ks(r),u=o.boundingClientRect;return new X((n.clientX-u.left)/o.x-r.clientLeft,(n.clientY-u.top)/o.y-r.clientTop)}var Hh=bt.linux&&bt.chrome?window.devicePixelRatio:bt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function bo(n){return bt.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Hh:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ea(n,r){var o=r.relatedTarget;if(!o)return!0;try{for(;o&&o!==n;)o=o.parentNode}catch{return!1}return o!==n}var Gh={__proto__:null,on:jt,off:ge,stopPropagation:hi,disableScrollPropagation:ta,disableClickPropagation:_r,preventDefault:Be,stop:ui,getPropagationPath:Eo,getMousePosition:To,getWheelDelta:bo,isExternalTarget:ea,addListener:jt,removeListener:ge},wo=st.extend({run:function(n,r,o,u){this.stop(),this._el=n,this._inProgress=!0,this._duration=o||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=ci(n),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Q(this._animate,this),this._step()},_step:function(n){var r=+new Date-this._startTime,o=this._duration*1e3;r<o?this._runFrame(this._easeOut(r/o),n):(this._runFrame(1),this._complete())},_runFrame:function(n,r){var o=this._startPos.add(this._offset.multiplyBy(n));r&&o._round(),Te(this._el,o),this.fire("step")},_complete:function(){rt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),oe=st.extend({options:{crs:Ae,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,r){r=M(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(ft(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ye&&bt.any3d&&!bt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),jt(this._proxy,sn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,r,o){if(r=r===void 0?this._zoom:this._limitZoom(r),n=this._limitCenter(ft(n),r,this.options.maxBounds),o=o||{},this._stop(),this._loaded&&!o.reset&&o!==!0){o.animate!==void 0&&(o.zoom=a({animate:o.animate},o.zoom),o.pan=a({animate:o.animate,duration:o.duration},o.pan));var u=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,r,o.zoom):this._tryAnimatedPan(n,o.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(n,r,o.pan&&o.pan.noMoveStart),this},setZoom:function(n,r){return this._loaded?this.setView(this.getCenter(),n,{zoom:r}):(this._zoom=n,this)},zoomIn:function(n,r){return n=n||(bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,r)},zoomOut:function(n,r){return n=n||(bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,r)},setZoomAround:function(n,r,o){var u=this.getZoomScale(r),_=this.getSize().divideBy(2),E=n instanceof X?n:this.latLngToContainerPoint(n),N=E.subtract(_).multiplyBy(1-1/u),H=this.containerPointToLatLng(_.add(N));return this.setView(H,r,{zoom:o})},_getBoundsCenterZoom:function(n,r){r=r||{},n=n.getBounds?n.getBounds():nt(n);var o=z(r.paddingTopLeft||r.padding||[0,0]),u=z(r.paddingBottomRight||r.padding||[0,0]),_=this.getBoundsZoom(n,!1,o.add(u));if(_=typeof r.maxZoom=="number"?Math.min(r.maxZoom,_):_,_===1/0)return{center:n.getCenter(),zoom:_};var E=u.subtract(o).divideBy(2),N=this.project(n.getSouthWest(),_),H=this.project(n.getNorthEast(),_),j=this.unproject(N.add(H).divideBy(2).add(E),_);return{center:j,zoom:_}},fitBounds:function(n,r){if(n=nt(n),!n.isValid())throw new Error("Bounds are not valid.");var o=this._getBoundsCenterZoom(n,r);return this.setView(o.center,o.zoom,r)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,r){return this.setView(n,this._zoom,{pan:r})},panBy:function(n,r){if(n=z(n).round(),r=r||{},!n.x&&!n.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new wo,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){Pt(this._mapPane,"leaflet-pan-anim");var o=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,o,r.duration||.25,r.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,r,o){if(o=o||{},o.animate===!1||!bt.any3d)return this.setView(n,r,o);this._stop();var u=this.project(this.getCenter()),_=this.project(n),E=this.getSize(),N=this._zoom;n=ft(n),r=r===void 0?N:r;var H=Math.max(E.x,E.y),j=H*this.getZoomScale(N,r),ot=_.distanceTo(u)||1,Mt=1.42,Ft=Mt*Mt;function ee(be){var ns=be?-1:1,Cu=be?j:H,Ru=j*j-H*H+ns*Ft*Ft*ot*ot,Iu=2*Cu*Ft*ot,da=Ru/Iu,al=Math.sqrt(da*da+1)-da,Du=al<1e-9?-18:Math.log(al);return Du}function Xe(be){return(Math.exp(be)-Math.exp(-be))/2}function Re(be){return(Math.exp(be)+Math.exp(-be))/2}function cn(be){return Xe(be)/Re(be)}var Ke=ee(0);function Ii(be){return H*(Re(Ke)/Re(Ke+Mt*be))}function wu(be){return H*(Re(Ke)*cn(Ke+Mt*be)-Xe(Ke))/Ft}function Au(be){return 1-Math.pow(1-be,1.5)}var Lu=Date.now(),rl=(ee(1)-Ke)/Mt,Pu=o.duration?1e3*o.duration:1e3*rl*.8;function sl(){var be=(Date.now()-Lu)/Pu,ns=Au(be)*rl;be<=1?(this._flyToFrame=Q(sl,this),this._move(this.unproject(u.add(_.subtract(u).multiplyBy(wu(ns)/ot)),N),this.getScaleZoom(H/Ii(ns),N),{flyTo:!0})):this._move(n,r)._moveEnd(!0)}return this._moveStart(!0,o.noMoveStart),sl.call(this),this},flyToBounds:function(n,r){var o=this._getBoundsCenterZoom(n,r);return this.flyTo(o.center,o.zoom,r)},setMaxBounds:function(n){return n=nt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var r=this.options.minZoom;return this.options.minZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var r=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,r){this._enforcingBounds=!0;var o=this.getCenter(),u=this._limitCenter(o,this._zoom,nt(n));return o.equals(u)||this.panTo(u,r),this._enforcingBounds=!1,this},panInside:function(n,r){r=r||{};var o=z(r.paddingTopLeft||r.padding||[0,0]),u=z(r.paddingBottomRight||r.padding||[0,0]),_=this.project(this.getCenter()),E=this.project(n),N=this.getPixelBounds(),H=at([N.min.add(o),N.max.subtract(u)]),j=H.getSize();if(!H.contains(E)){this._enforcingBounds=!0;var ot=E.subtract(H.getCenter()),Mt=H.extend(E).getSize().subtract(j);_.x+=ot.x<0?-Mt.x:Mt.x,_.y+=ot.y<0?-Mt.y:Mt.y,this.panTo(this.unproject(_),r),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=a({animate:!1,pan:!0},n===!0?{animate:!0}:n);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),u=r.divideBy(2).round(),_=o.divideBy(2).round(),E=u.subtract(_);return!E.x&&!E.y?this:(n.animate&&n.pan?this.panBy(E):(n.pan&&this._rawPanBy(E),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:o}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=a({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=h(this._handleGeolocationResponse,this),o=h(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,o,n):navigator.geolocation.getCurrentPosition(r,o,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var r=n.code,o=n.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+o+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var r=n.coords.latitude,o=n.coords.longitude,u=new lt(r,o),_=u.toBounds(n.coords.accuracy*2),E=this._locateOptions;if(E.setView){var N=this.getBoundsZoom(_);this.setView(u,E.maxZoom?Math.min(N,E.maxZoom):N)}var H={latlng:u,bounds:_,timestamp:n.timestamp};for(var j in n.coords)typeof n.coords[j]=="number"&&(H[j]=n.coords[j]);this.fire("locationfound",H)}},addHandler:function(n,r){if(!r)return this;var o=this[n]=new r(this);return this._handlers.push(o),this.options[n]&&o.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ht(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(rt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Ht(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,r){var o="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),u=se("div",o,r||this._mapPane);return n&&(this._panes[n]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),r=this.unproject(n.getBottomLeft()),o=this.unproject(n.getTopRight());return new W(r,o)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,r,o){n=nt(n),o=z(o||[0,0]);var u=this.getZoom()||0,_=this.getMinZoom(),E=this.getMaxZoom(),N=n.getNorthWest(),H=n.getSouthEast(),j=this.getSize().subtract(o),ot=at(this.project(H,u),this.project(N,u)).getSize(),Mt=bt.any3d?this.options.zoomSnap:1,Ft=j.x/ot.x,ee=j.y/ot.y,Xe=r?Math.max(Ft,ee):Math.min(Ft,ee);return u=this.getScaleZoom(Xe,u),Mt&&(u=Math.round(u/(Mt/100))*(Mt/100),u=r?Math.ceil(u/Mt)*Mt:Math.floor(u/Mt)*Mt),Math.max(_,Math.min(E,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new X(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,r){var o=this._getTopLeftPoint(n,r);return new et(o,o.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,r){var o=this.options.crs;return r=r===void 0?this._zoom:r,o.scale(n)/o.scale(r)},getScaleZoom:function(n,r){var o=this.options.crs;r=r===void 0?this._zoom:r;var u=o.zoom(n*o.scale(r));return isNaN(u)?1/0:u},project:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(ft(n),r)},unproject:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(z(n),r)},layerPointToLatLng:function(n){var r=z(n).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(n){var r=this.project(ft(n))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(ft(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(nt(n))},distance:function(n,r){return this.options.crs.distance(ft(n),ft(r))},containerPointToLayerPoint:function(n){return z(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return z(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var r=this.containerPointToLayerPoint(z(n));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ft(n)))},mouseEventToContainerPoint:function(n){return To(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var r=this._container=_e(n);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");jt(r,"scroll",this._onScroll,this),this._containerId=d(r)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&bt.any3d,Pt(n,"leaflet-container"+(bt.touch?" leaflet-touch":"")+(bt.retina?" leaflet-retina":"")+(bt.ielt9?" leaflet-oldie":"")+(bt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=Xt(n,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Te(this._mapPane,new X(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Pt(n.markerPane,"leaflet-zoom-hide"),Pt(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,r,o){Te(this._mapPane,new X(0,0));var u=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var _=this._zoom!==r;this._moveStart(_,o)._move(n,r)._moveEnd(_),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(n,r){return n&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(n,r,o,u){r===void 0&&(r=this._zoom);var _=this._zoom!==r;return this._zoom=r,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),u?o&&o.pinch&&this.fire("zoom",o):((_||o&&o.pinch)&&this.fire("zoom",o),this.fire("move",o)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return rt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Te(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[d(this._container)]=this;var r=n?ge:jt;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),bt.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){rt(this._resizeRequest),this._resizeRequest=Q(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,r){for(var o=[],u,_=r==="mouseout"||r==="mouseover",E=n.target||n.srcElement,N=!1;E;){if(u=this._targets[d(E)],u&&(r==="click"||r==="preclick")&&this._draggableMoved(u)){N=!0;break}if(u&&u.listens(r,!0)&&(_&&!ea(E,n)||(o.push(u),_))||E===this._container)break;E=E.parentNode}return!o.length&&!N&&!_&&this.listens(r,!0)&&(o=[this]),o},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var r=n.target||n.srcElement;if(!(!this._loaded||r._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(r))){var o=n.type;o==="mousedown"&&js(r),this._fireDOMEvent(n,o)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,r,o){if(n.type==="click"){var u=a({},n);u.type="preclick",this._fireDOMEvent(u,u.type,o)}var _=this._findEventTargets(n,r);if(o){for(var E=[],N=0;N<o.length;N++)o[N].listens(r,!0)&&E.push(o[N]);_=E.concat(_)}if(_.length){r==="contextmenu"&&Be(n);var H=_[0],j={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ot=H.getLatLng&&(!H._radius||H._radius<=10);j.containerPoint=ot?this.latLngToContainerPoint(H.getLatLng()):this.mouseEventToContainerPoint(n),j.layerPoint=this.containerPointToLayerPoint(j.containerPoint),j.latlng=ot?H.getLatLng():this.layerPointToLatLng(j.layerPoint)}for(N=0;N<_.length;N++)if(_[N].fire(r,j,!0),j.originalEvent._stopped||_[N].options.bubblingMouseEvents===!1&&I(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,r=this._handlers.length;n<r;n++)this._handlers[n].disable()},whenReady:function(n,r){return this._loaded?n.call(r||this,{target:this}):this.on("load",n,r),this},_getMapPanePos:function(){return ci(this._mapPane)||new X(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,r){var o=n&&r!==void 0?this._getNewPixelOrigin(n,r):this.getPixelOrigin();return o.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,r){var o=this.getSize()._divideBy(2);return this.project(n,r)._subtract(o)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,r,o){var u=this._getNewPixelOrigin(o,r);return this.project(n,r)._subtract(u)},_latLngBoundsToNewLayerBounds:function(n,r,o){var u=this._getNewPixelOrigin(o,r);return at([this.project(n.getSouthWest(),r)._subtract(u),this.project(n.getNorthWest(),r)._subtract(u),this.project(n.getSouthEast(),r)._subtract(u),this.project(n.getNorthEast(),r)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,r,o){if(!o)return n;var u=this.project(n,r),_=this.getSize().divideBy(2),E=new et(u.subtract(_),u.add(_)),N=this._getBoundsOffset(E,o,r);return Math.abs(N.x)<=1&&Math.abs(N.y)<=1?n:this.unproject(u.add(N),r)},_limitOffset:function(n,r){if(!r)return n;var o=this.getPixelBounds(),u=new et(o.min.add(n),o.max.add(n));return n.add(this._getBoundsOffset(u,r))},_getBoundsOffset:function(n,r,o){var u=at(this.project(r.getNorthEast(),o),this.project(r.getSouthWest(),o)),_=u.min.subtract(n.min),E=u.max.subtract(n.max),N=this._rebound(_.x,-E.x),H=this._rebound(_.y,-E.y);return new X(N,H)},_rebound:function(n,r){return n+r>0?Math.round(n-r)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(r))},_limitZoom:function(n){var r=this.getMinZoom(),o=this.getMaxZoom(),u=bt.any3d?this.options.zoomSnap:1;return u&&(n=Math.round(n/u)*u),Math.max(r,Math.min(o,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){he(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,r){var o=this._getCenterOffset(n)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(o)?!1:(this.panBy(o,r),!0)},_createAnimProxy:function(){var n=this._proxy=se("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(r){var o=Oe,u=this._proxy.style[o];li(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),u===this._proxy.style[o]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ht(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),r=this.getZoom();li(this._proxy,this.project(n,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,r,o){if(this._animatingZoom)return!0;if(o=o||{},!this._zoomAnimated||o.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(r),_=this._getCenterOffset(n)._divideBy(1-1/u);return o.animate!==!0&&!this.getSize().contains(_)?!1:(Q(function(){this._moveStart(!0,o.noMoveStart||!1)._animateZoom(n,r,!0)},this),!0)},_animateZoom:function(n,r,o,u){this._mapPane&&(o&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=r,Pt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:r,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&he(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Vh(n,r){return new oe(n,r)}var mn=F.extend({options:{position:"topright"},initialize:function(n){M(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var r=this._map;return r&&r.removeControl(this),this.options.position=n,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var r=this._container=this.onAdd(n),o=this.getPosition(),u=n._controlCorners[o];return Pt(r,"leaflet-control"),o.indexOf("bottom")!==-1?u.insertBefore(r,u.firstChild):u.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ht(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),gr=function(n){return new mn(n)};oe.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},r="leaflet-",o=this._controlContainer=se("div",r+"control-container",this._container);function u(_,E){var N=r+_+" "+r+E;n[_+E]=se("div",N,o)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Ht(this._controlCorners[n]);Ht(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Ao=mn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,r,o,u){return o<u?-1:u<o?1:0}},initialize:function(n,r,o){M(this,o),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in n)this._addLayer(n[u],u);for(u in r)this._addLayer(r[u],u,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return mn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,r){return this._addLayer(n,r),this._map?this._update():this},addOverlay:function(n,r){return this._addLayer(n,r,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var r=this._getLayer(d(n));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){Pt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Pt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):he(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return he(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",r=this._container=se("div",n),o=this.options.collapsed;r.setAttribute("aria-haspopup",!0),_r(r),ta(r);var u=this._section=se("section",n+"-list");o&&(this._map.on("click",this.collapse,this),jt(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var _=this._layersLink=se("a",n+"-toggle",r);_.href="#",_.title="Layers",_.setAttribute("role","button"),jt(_,{keydown:function(E){E.keyCode===13&&this._expandSafely()},click:function(E){Be(E),this._expandSafely()}},this),o||this.expand(),this._baseLayersList=se("div",n+"-base",u),this._separator=se("div",n+"-separator",u),this._overlaysList=se("div",n+"-overlays",u),r.appendChild(u)},_getLayer:function(n){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&d(this._layers[r].layer)===n)return this._layers[r]},_addLayer:function(n,r,o){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:r,overlay:o}),this.options.sortLayers&&this._layers.sort(h(function(u,_){return this.options.sortFunction(u.layer,_.layer,u.name,_.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;an(this._baseLayersList),an(this._overlaysList),this._layerControlInputs=[];var n,r,o,u,_=0;for(o=0;o<this._layers.length;o++)u=this._layers[o],this._addItem(u),r=r||u.overlay,n=n||!u.overlay,_+=u.overlay?0:1;return this.options.hideSingleBase&&(n=n&&_>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=r&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var r=this._getLayer(d(n.target)),o=r.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;o&&this._map.fire(o,r)},_createRadioElement:function(n,r){var o='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(r?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=o,u.firstChild},_addItem:function(n){var r=document.createElement("label"),o=this._map.hasLayer(n.layer),u;n.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=o):u=this._createRadioElement("leaflet-base-layers_"+d(this),o),this._layerControlInputs.push(u),u.layerId=d(n.layer),jt(u,"click",this._onInputClick,this);var _=document.createElement("span");_.innerHTML=" "+n.name;var E=document.createElement("span");r.appendChild(E),E.appendChild(u),E.appendChild(_);var N=n.overlay?this._overlaysList:this._baseLayersList;return N.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,r,o,u=[],_=[];this._handlingClick=!0;for(var E=n.length-1;E>=0;E--)r=n[E],o=this._getLayer(r.layerId).layer,r.checked?u.push(o):r.checked||_.push(o);for(E=0;E<_.length;E++)this._map.hasLayer(_[E])&&this._map.removeLayer(_[E]);for(E=0;E<u.length;E++)this._map.hasLayer(u[E])||this._map.addLayer(u[E]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,r,o,u=this._map.getZoom(),_=n.length-1;_>=0;_--)r=n[_],o=this._getLayer(r.layerId).layer,r.disabled=o.options.minZoom!==void 0&&u<o.options.minZoom||o.options.maxZoom!==void 0&&u>o.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,jt(n,"click",Be),this.expand();var r=this;setTimeout(function(){ge(n,"click",Be),r._preventClick=!1})}}),Wh=function(n,r,o){return new Ao(n,r,o)},na=mn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var r="leaflet-control-zoom",o=se("div",r+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,r+"-in",o,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,r+"-out",o,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),o},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,r,o,u,_){var E=se("a",o,u);return E.innerHTML=n,E.href="#",E.title=r,E.setAttribute("role","button"),E.setAttribute("aria-label",r),_r(E),jt(E,"click",ui),jt(E,"click",_,this),jt(E,"click",this._refocusOnMap,this),E},_updateDisabled:function(){var n=this._map,r="leaflet-disabled";he(this._zoomInButton,r),he(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Pt(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Pt(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});oe.mergeOptions({zoomControl:!0}),oe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new na,this.addControl(this.zoomControl))});var Xh=function(n){return new na(n)},Lo=mn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var r="leaflet-control-scale",o=se("div",r),u=this.options;return this._addScales(u,r+"-line",o),n.on(u.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),o},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,r,o){n.metric&&(this._mScale=se("div",r,o)),n.imperial&&(this._iScale=se("div",r,o))},_update:function(){var n=this._map,r=n.getSize().y/2,o=n.distance(n.containerPointToLatLng([0,r]),n.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(o)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var r=this._getRoundNum(n),o=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,o,r/n)},_updateImperial:function(n){var r=n*3.2808399,o,u,_;r>5280?(o=r/5280,u=this._getRoundNum(o),this._updateScale(this._iScale,u+" mi",u/o)):(_=this._getRoundNum(r),this._updateScale(this._iScale,_+" ft",_/r))},_updateScale:function(n,r,o){n.style.width=Math.round(this.options.maxWidth*o)+"px",n.innerHTML=r},_getRoundNum:function(n){var r=Math.pow(10,(Math.floor(n)+"").length-1),o=n/r;return o=o>=10?10:o>=5?5:o>=3?3:o>=2?2:1,r*o}}),Zh=function(n){return new Lo(n)},qh='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ia=mn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(bt.inlineSvg?qh+" ":"")+"Leaflet</a>"},initialize:function(n){M(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=se("div","leaflet-control-attribution"),_r(this._container);for(var r in n._layers)n._layers[r].getAttribution&&this.addAttribution(n._layers[r].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var r in this._attributions)this._attributions[r]&&n.push(r);var o=[];this.options.prefix&&o.push(this.options.prefix),n.length&&o.push(n.join(", ")),this._container.innerHTML=o.join(' <span aria-hidden="true">|</span> ')}}});oe.mergeOptions({attributionControl:!0}),oe.addInitHook(function(){this.options.attributionControl&&new ia().addTo(this)});var Yh=function(n){return new ia(n)};mn.Layers=Ao,mn.Zoom=na,mn.Scale=Lo,mn.Attribution=ia,gr.layers=Wh,gr.zoom=Xh,gr.scale=Zh,gr.attribution=Yh;var bn=F.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});bn.addTo=function(n,r){return n.addHandler(r,this),this};var jh={Events:tt},Po=bt.touch?"touchstart mousedown":"mousedown",Xn=st.extend({options:{clickTolerance:3},initialize:function(n,r,o,u){M(this,u),this._element=n,this._dragStartTarget=r||n,this._preventOutline=o},enable:function(){this._enabled||(jt(this._dragStartTarget,Po,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Xn._dragging===this&&this.finishDrag(!0),ge(this._dragStartTarget,Po,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!si(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Xn._dragging===this&&this.finishDrag();return}if(!(Xn._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Xn._dragging=this,this._preventOutline&&js(this._element),Zs(),fr(),!this._moving)){this.fire("down");var r=n.touches?n.touches[0]:n,o=Mo(this._element);this._startPoint=new X(r.clientX,r.clientY),this._startPos=ci(this._element),this._parentScale=Ks(o);var u=n.type==="mousedown";jt(document,u?"mousemove":"touchmove",this._onMove,this),jt(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var r=n.touches&&n.touches.length===1?n.touches[0]:n,o=new X(r.clientX,r.clientY)._subtract(this._startPoint);!o.x&&!o.y||Math.abs(o.x)+Math.abs(o.y)<this.options.clickTolerance||(o.x/=this._parentScale.x,o.y/=this._parentScale.y,Be(n),this._moved||(this.fire("dragstart"),this._moved=!0,Pt(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Pt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(o),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Te(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){he(document.body,"leaflet-dragging"),this._lastTarget&&(he(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ge(document,"mousemove touchmove",this._onMove,this),ge(document,"mouseup touchend touchcancel",this._onUp,this),qs(),pr();var r=this._moved&&this._moving;this._moving=!1,Xn._dragging=!1,r&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Co(n,r,o){var u,_=[1,4,2,8],E,N,H,j,ot,Mt,Ft,ee;for(E=0,Mt=n.length;E<Mt;E++)n[E]._code=di(n[E],r);for(H=0;H<4;H++){for(Ft=_[H],u=[],E=0,Mt=n.length,N=Mt-1;E<Mt;N=E++)j=n[E],ot=n[N],j._code&Ft?ot._code&Ft||(ee=Xr(ot,j,Ft,r,o),ee._code=di(ee,r),u.push(ee)):(ot._code&Ft&&(ee=Xr(ot,j,Ft,r,o),ee._code=di(ee,r),u.push(ee)),u.push(j));n=u}return n}function Ro(n,r){var o,u,_,E,N,H,j,ot,Mt;if(!n||n.length===0)throw new Error("latlngs not passed");ln(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Ft=ft([0,0]),ee=nt(n),Xe=ee.getNorthWest().distanceTo(ee.getSouthWest())*ee.getNorthEast().distanceTo(ee.getNorthWest());Xe<1700&&(Ft=ra(n));var Re=n.length,cn=[];for(o=0;o<Re;o++){var Ke=ft(n[o]);cn.push(r.project(ft([Ke.lat-Ft.lat,Ke.lng-Ft.lng])))}for(H=j=ot=0,o=0,u=Re-1;o<Re;u=o++)_=cn[o],E=cn[u],N=_.y*E.x-E.y*_.x,j+=(_.x+E.x)*N,ot+=(_.y+E.y)*N,H+=N*3;H===0?Mt=cn[0]:Mt=[j/H,ot/H];var Ii=r.unproject(z(Mt));return ft([Ii.lat+Ft.lat,Ii.lng+Ft.lng])}function ra(n){for(var r=0,o=0,u=0,_=0;_<n.length;_++){var E=ft(n[_]);r+=E.lat,o+=E.lng,u++}return ft([r/u,o/u])}var Kh={__proto__:null,clipPolygon:Co,polygonCenter:Ro,centroid:ra};function Io(n,r){if(!r||!n.length)return n.slice();var o=r*r;return n=Qh(n,o),n=Jh(n,o),n}function Do(n,r,o){return Math.sqrt(vr(n,r,o,!0))}function $h(n,r,o){return vr(n,r,o)}function Jh(n,r){var o=n.length,u=typeof Uint8Array<"u"?Uint8Array:Array,_=new u(o);_[0]=_[o-1]=1,sa(n,_,r,0,o-1);var E,N=[];for(E=0;E<o;E++)_[E]&&N.push(n[E]);return N}function sa(n,r,o,u,_){var E=0,N,H,j;for(H=u+1;H<=_-1;H++)j=vr(n[H],n[u],n[_],!0),j>E&&(N=H,E=j);E>o&&(r[N]=1,sa(n,r,o,u,N),sa(n,r,o,N,_))}function Qh(n,r){for(var o=[n[0]],u=1,_=0,E=n.length;u<E;u++)tu(n[u],n[_])>r&&(o.push(n[u]),_=u);return _<E-1&&o.push(n[E-1]),o}var Uo;function No(n,r,o,u,_){var E=u?Uo:di(n,o),N=di(r,o),H,j,ot;for(Uo=N;;){if(!(E|N))return[n,r];if(E&N)return!1;H=E||N,j=Xr(n,r,H,o,_),ot=di(j,o),H===E?(n=j,E=ot):(r=j,N=ot)}}function Xr(n,r,o,u,_){var E=r.x-n.x,N=r.y-n.y,H=u.min,j=u.max,ot,Mt;return o&8?(ot=n.x+E*(j.y-n.y)/N,Mt=j.y):o&4?(ot=n.x+E*(H.y-n.y)/N,Mt=H.y):o&2?(ot=j.x,Mt=n.y+N*(j.x-n.x)/E):o&1&&(ot=H.x,Mt=n.y+N*(H.x-n.x)/E),new X(ot,Mt,_)}function di(n,r){var o=0;return n.x<r.min.x?o|=1:n.x>r.max.x&&(o|=2),n.y<r.min.y?o|=4:n.y>r.max.y&&(o|=8),o}function tu(n,r){var o=r.x-n.x,u=r.y-n.y;return o*o+u*u}function vr(n,r,o,u){var _=r.x,E=r.y,N=o.x-_,H=o.y-E,j=N*N+H*H,ot;return j>0&&(ot=((n.x-_)*N+(n.y-E)*H)/j,ot>1?(_=o.x,E=o.y):ot>0&&(_+=N*ot,E+=H*ot)),N=n.x-_,H=n.y-E,u?N*N+H*H:new X(_,E)}function ln(n){return!b(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Oo(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ln(n)}function Fo(n,r){var o,u,_,E,N,H,j,ot;if(!n||n.length===0)throw new Error("latlngs not passed");ln(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Mt=ft([0,0]),Ft=nt(n),ee=Ft.getNorthWest().distanceTo(Ft.getSouthWest())*Ft.getNorthEast().distanceTo(Ft.getNorthWest());ee<1700&&(Mt=ra(n));var Xe=n.length,Re=[];for(o=0;o<Xe;o++){var cn=ft(n[o]);Re.push(r.project(ft([cn.lat-Mt.lat,cn.lng-Mt.lng])))}for(o=0,u=0;o<Xe-1;o++)u+=Re[o].distanceTo(Re[o+1])/2;if(u===0)ot=Re[0];else for(o=0,E=0;o<Xe-1;o++)if(N=Re[o],H=Re[o+1],_=N.distanceTo(H),E+=_,E>u){j=(E-u)/_,ot=[H.x-j*(H.x-N.x),H.y-j*(H.y-N.y)];break}var Ke=r.unproject(z(ot));return ft([Ke.lat+Mt.lat,Ke.lng+Mt.lng])}var eu={__proto__:null,simplify:Io,pointToSegmentDistance:Do,closestPointOnSegment:$h,clipSegment:No,_getEdgeIntersection:Xr,_getBitCode:di,_sqClosestPointOnSegment:vr,isFlat:ln,_flat:Oo,polylineCenter:Fo},aa={project:function(n){return new X(n.lng,n.lat)},unproject:function(n){return new lt(n.y,n.x)},bounds:new et([-180,-90],[180,90])},oa={R:6378137,R_MINOR:6356752314245179e-9,bounds:new et([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var r=Math.PI/180,o=this.R,u=n.lat*r,_=this.R_MINOR/o,E=Math.sqrt(1-_*_),N=E*Math.sin(u),H=Math.tan(Math.PI/4-u/2)/Math.pow((1-N)/(1+N),E/2);return u=-o*Math.log(Math.max(H,1e-10)),new X(n.lng*r*o,u)},unproject:function(n){for(var r=180/Math.PI,o=this.R,u=this.R_MINOR/o,_=Math.sqrt(1-u*u),E=Math.exp(-n.y/o),N=Math.PI/2-2*Math.atan(E),H=0,j=.1,ot;H<15&&Math.abs(j)>1e-7;H++)ot=_*Math.sin(N),ot=Math.pow((1-ot)/(1+ot),_/2),j=Math.PI/2-2*Math.atan(E*ot)-N,N+=j;return new lt(N*r,n.x*r/o)}},nu={__proto__:null,LonLat:aa,Mercator:oa,SphericalMercator:Nt},iu=a({},Ut,{code:"EPSG:3395",projection:oa,transformation:function(){var n=.5/(Math.PI*oa.R);return Z(n,.5,-n,.5)}()}),Bo=a({},Ut,{code:"EPSG:4326",projection:aa,transformation:Z(1/180,1,-1/180,.5)}),ru=a({},St,{projection:aa,transformation:Z(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,r){var o=r.lng-n.lng,u=r.lat-n.lat;return Math.sqrt(o*o+u*u)},infinite:!0});St.Earth=Ut,St.EPSG3395=iu,St.EPSG3857=Ae,St.EPSG900913=It,St.EPSG4326=Bo,St.Simple=ru;var _n=st.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[d(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[d(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var r=n.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var o=this.getEvents();r.on(o,this),this.once("remove",function(){r.off(o,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});oe.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var r=d(n);return this._layers[r]?this:(this._layers[r]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var r=d(n);return this._layers[r]?(this._loaded&&n.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return d(n)in this._layers},eachLayer:function(n,r){for(var o in this._layers)n.call(r,this._layers[o]);return this},_addLayers:function(n){n=n?b(n)?n:[n]:[];for(var r=0,o=n.length;r<o;r++)this.addLayer(n[r])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[d(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var r=d(n);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,r=-1/0,o=this._getZoomSpan();for(var u in this._zoomBoundLayers){var _=this._zoomBoundLayers[u].options;n=_.minZoom===void 0?n:Math.min(n,_.minZoom),r=_.maxZoom===void 0?r:Math.max(r,_.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=n===1/0?void 0:n,o!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ai=_n.extend({initialize:function(n,r){M(this,r),this._layers={};var o,u;if(n)for(o=0,u=n.length;o<u;o++)this.addLayer(n[o])},addLayer:function(n){var r=this.getLayerId(n);return this._layers[r]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var r=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(n){var r=typeof n=="number"?n:this.getLayerId(n);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var r=Array.prototype.slice.call(arguments,1),o,u;for(o in this._layers)u=this._layers[o],u[n]&&u[n].apply(u,r);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,r){for(var o in this._layers)n.call(r,this._layers[o]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return d(n)}}),su=function(n,r){return new Ai(n,r)},Cn=Ai.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Ai.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Ai.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new W;for(var r in this._layers){var o=this._layers[r];n.extend(o.getBounds?o.getBounds():o.getLatLng())}return n}}),au=function(n,r){return new Cn(n,r)},Li=F.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){M(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,r){var o=this._getIconUrl(n);if(!o){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(o,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(u,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(n,r){var o=this.options,u=o[r+"Size"];typeof u=="number"&&(u=[u,u]);var _=z(u),E=z(r==="shadow"&&o.shadowAnchor||o.iconAnchor||_&&_.divideBy(2,!0));n.className="leaflet-marker-"+r+" "+(o.className||""),E&&(n.style.marginLeft=-E.x+"px",n.style.marginTop=-E.y+"px"),_&&(n.style.width=_.x+"px",n.style.height=_.y+"px")},_createImg:function(n,r){return r=r||document.createElement("img"),r.src=n,r},_getIconUrl:function(n){return bt.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function ou(n){return new Li(n)}var xr=Li.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof xr.imagePath!="string"&&(xr.imagePath=this._detectIconPath()),(this.options.imagePath||xr.imagePath)+Li.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var r=function(o,u,_){var E=u.exec(o);return E&&E[_]};return n=r(n,/^url\((['"])?(.+)\1\)$/,2),n&&r(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=se("div","leaflet-default-icon-path",document.body),r=Xt(n,"background-image")||Xt(n,"backgroundImage");if(document.body.removeChild(n),r=this._stripUrl(r),r)return r;var o=document.querySelector('link[href$="leaflet.css"]');return o?o.href.substring(0,o.href.length-11-1):""}}),zo=bn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Xn(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Pt(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&he(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var r=this._marker,o=r._map,u=this._marker.options.autoPanSpeed,_=this._marker.options.autoPanPadding,E=ci(r._icon),N=o.getPixelBounds(),H=o.getPixelOrigin(),j=at(N.min._subtract(H).add(_),N.max._subtract(H).subtract(_));if(!j.contains(E)){var ot=z((Math.max(j.max.x,E.x)-j.max.x)/(N.max.x-j.max.x)-(Math.min(j.min.x,E.x)-j.min.x)/(N.min.x-j.min.x),(Math.max(j.max.y,E.y)-j.max.y)/(N.max.y-j.max.y)-(Math.min(j.min.y,E.y)-j.min.y)/(N.min.y-j.min.y)).multiplyBy(u);o.panBy(ot,{animate:!1}),this._draggable._newPos._add(ot),this._draggable._startPos._add(ot),Te(r._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=Q(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(rt(this._panRequest),this._panRequest=Q(this._adjustPan.bind(this,n)))},_onDrag:function(n){var r=this._marker,o=r._shadow,u=ci(r._icon),_=r._map.layerPointToLatLng(u);o&&Te(o,u),r._latlng=_,n.latlng=_,n.oldLatLng=this._oldLatLng,r.fire("move",n).fire("drag",n)},_onDragEnd:function(n){rt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Zr=_n.extend({options:{icon:new xr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,r){M(this,r),this._latlng=ft(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var r=this._latlng;return this._latlng=ft(n),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),o=n.icon.createIcon(this._icon),u=!1;o!==this._icon&&(this._icon&&this._removeIcon(),u=!0,n.title&&(o.title=n.title),o.tagName==="IMG"&&(o.alt=n.alt||"")),Pt(o,r),n.keyboard&&(o.tabIndex="0",o.setAttribute("role","button")),this._icon=o,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&jt(o,"focus",this._panOnFocus,this);var _=n.icon.createShadow(this._shadow),E=!1;_!==this._shadow&&(this._removeShadow(),E=!0),_&&(Pt(_,r),_.alt=""),this._shadow=_,n.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),_&&E&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ge(this._icon,"focus",this._panOnFocus,this),Ht(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ht(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Te(this._icon,n),this._shadow&&Te(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&(Pt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),zo)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new zo(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&He(this._icon,n),this._shadow&&He(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var r=this.options.icon.options,o=r.iconSize?z(r.iconSize):z(0,0),u=r.iconAnchor?z(r.iconAnchor):z(0,0);n.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:o.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function lu(n,r){return new Zr(n,r)}var Zn=_n.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return M(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),qr=Zn.extend({options:{fill:!0,radius:10},initialize:function(n,r){M(this,r),this._latlng=ft(n),this._radius=this.options.radius},setLatLng:function(n){var r=this._latlng;return this._latlng=ft(n),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var r=n&&n.radius||this._radius;return Zn.prototype.setStyle.call(this,n),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,r=this._radiusY||n,o=this._clickTolerance(),u=[n+o,r+o];this._pxBounds=new et(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function cu(n,r){return new qr(n,r)}var la=qr.extend({initialize:function(n,r,o){if(typeof r=="number"&&(r=a({},o,{radius:r})),M(this,r),this._latlng=ft(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new W(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Zn.prototype.setStyle,_project:function(){var n=this._latlng.lng,r=this._latlng.lat,o=this._map,u=o.options.crs;if(u.distance===Ut.distance){var _=Math.PI/180,E=this._mRadius/Ut.R/_,N=o.project([r+E,n]),H=o.project([r-E,n]),j=N.add(H).divideBy(2),ot=o.unproject(j).lat,Mt=Math.acos((Math.cos(E*_)-Math.sin(r*_)*Math.sin(ot*_))/(Math.cos(r*_)*Math.cos(ot*_)))/_;(isNaN(Mt)||Mt===0)&&(Mt=E/Math.cos(Math.PI/180*r)),this._point=j.subtract(o.getPixelOrigin()),this._radius=isNaN(Mt)?0:j.x-o.project([ot,n-Mt]).x,this._radiusY=j.y-N.y}else{var Ft=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=o.latLngToLayerPoint(this._latlng),this._radius=this._point.x-o.latLngToLayerPoint(Ft).x}this._updateBounds()}});function hu(n,r,o){return new la(n,r,o)}var Rn=Zn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,r){M(this,r),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var r=1/0,o=null,u=vr,_,E,N=0,H=this._parts.length;N<H;N++)for(var j=this._parts[N],ot=1,Mt=j.length;ot<Mt;ot++){_=j[ot-1],E=j[ot];var Ft=u(n,_,E,!0);Ft<r&&(r=Ft,o=u(n,_,E))}return o&&(o.distance=Math.sqrt(r)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Fo(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,r){return r=r||this._defaultShape(),n=ft(n),r.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new W,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return ln(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var r=[],o=ln(n),u=0,_=n.length;u<_;u++)o?(r[u]=ft(n[u]),this._bounds.extend(r[u])):r[u]=this._convertLatLngs(n[u]);return r},_project:function(){var n=new et;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),r=new X(n,n);this._rawPxBounds&&(this._pxBounds=new et([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(n,r,o){var u=n[0]instanceof lt,_=n.length,E,N;if(u){for(N=[],E=0;E<_;E++)N[E]=this._map.latLngToLayerPoint(n[E]),o.extend(N[E]);r.push(N)}else for(E=0;E<_;E++)this._projectLatlngs(n[E],r,o)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,o,u,_,E,N,H,j;for(o=0,_=0,E=this._rings.length;o<E;o++)for(j=this._rings[o],u=0,N=j.length;u<N-1;u++)H=No(j[u],j[u+1],n,u,!0),H&&(r[_]=r[_]||[],r[_].push(H[0]),(H[1]!==j[u+1]||u===N-2)&&(r[_].push(H[1]),_++))}},_simplifyPoints:function(){for(var n=this._parts,r=this.options.smoothFactor,o=0,u=n.length;o<u;o++)n[o]=Io(n[o],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,r){var o,u,_,E,N,H,j=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(o=0,E=this._parts.length;o<E;o++)for(H=this._parts[o],u=0,N=H.length,_=N-1;u<N;_=u++)if(!(!r&&u===0)&&Do(n,H[_],H[u])<=j)return!0;return!1}});function uu(n,r){return new Rn(n,r)}Rn._flat=Oo;var Pi=Rn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ro(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var r=Rn.prototype._convertLatLngs.call(this,n),o=r.length;return o>=2&&r[0]instanceof lt&&r[0].equals(r[o-1])&&r.pop(),r},_setLatLngs:function(n){Rn.prototype._setLatLngs.call(this,n),ln(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ln(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,r=this.options.weight,o=new X(r,r);if(n=new et(n.min.subtract(o),n.max.add(o)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,_=this._rings.length,E;u<_;u++)E=Co(this._rings[u],n,!0),E.length&&this._parts.push(E)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var r=!1,o,u,_,E,N,H,j,ot;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(E=0,j=this._parts.length;E<j;E++)for(o=this._parts[E],N=0,ot=o.length,H=ot-1;N<ot;H=N++)u=o[N],_=o[H],u.y>n.y!=_.y>n.y&&n.x<(_.x-u.x)*(n.y-u.y)/(_.y-u.y)+u.x&&(r=!r);return r||Rn.prototype._containsPoint.call(this,n,!0)}});function du(n,r){return new Pi(n,r)}var In=Cn.extend({initialize:function(n,r){M(this,r),this._layers={},n&&this.addData(n)},addData:function(n){var r=b(n)?n:n.features,o,u,_;if(r){for(o=0,u=r.length;o<u;o++)_=r[o],(_.geometries||_.geometry||_.features||_.coordinates)&&this.addData(_);return this}var E=this.options;if(E.filter&&!E.filter(n))return this;var N=Yr(n,E);return N?(N.feature=$r(n),N.defaultOptions=N.options,this.resetStyle(N),E.onEachFeature&&E.onEachFeature(n,N),this.addLayer(N)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=a({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(r){this._setLayerStyle(r,n)},this)},_setLayerStyle:function(n,r){n.setStyle&&(typeof r=="function"&&(r=r(n.feature)),n.setStyle(r))}});function Yr(n,r){var o=n.type==="Feature"?n.geometry:n,u=o?o.coordinates:null,_=[],E=r&&r.pointToLayer,N=r&&r.coordsToLatLng||ca,H,j,ot,Mt;if(!u&&!o)return null;switch(o.type){case"Point":return H=N(u),ko(E,n,H,r);case"MultiPoint":for(ot=0,Mt=u.length;ot<Mt;ot++)H=N(u[ot]),_.push(ko(E,n,H,r));return new Cn(_);case"LineString":case"MultiLineString":return j=jr(u,o.type==="LineString"?0:1,N),new Rn(j,r);case"Polygon":case"MultiPolygon":return j=jr(u,o.type==="Polygon"?1:2,N),new Pi(j,r);case"GeometryCollection":for(ot=0,Mt=o.geometries.length;ot<Mt;ot++){var Ft=Yr({geometry:o.geometries[ot],type:"Feature",properties:n.properties},r);Ft&&_.push(Ft)}return new Cn(_);case"FeatureCollection":for(ot=0,Mt=o.features.length;ot<Mt;ot++){var ee=Yr(o.features[ot],r);ee&&_.push(ee)}return new Cn(_);default:throw new Error("Invalid GeoJSON object.")}}function ko(n,r,o,u){return n?n(r,o):new Zr(o,u&&u.markersInheritOptions&&u)}function ca(n){return new lt(n[1],n[0],n[2])}function jr(n,r,o){for(var u=[],_=0,E=n.length,N;_<E;_++)N=r?jr(n[_],r-1,o):(o||ca)(n[_]),u.push(N);return u}function ha(n,r){return n=ft(n),n.alt!==void 0?[g(n.lng,r),g(n.lat,r),g(n.alt,r)]:[g(n.lng,r),g(n.lat,r)]}function Kr(n,r,o,u){for(var _=[],E=0,N=n.length;E<N;E++)_.push(r?Kr(n[E],ln(n[E])?0:r-1,o,u):ha(n[E],u));return!r&&o&&_.length>0&&_.push(_[0].slice()),_}function Ci(n,r){return n.feature?a({},n.feature,{geometry:r}):$r(r)}function $r(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var ua={toGeoJSON:function(n){return Ci(this,{type:"Point",coordinates:ha(this.getLatLng(),n)})}};Zr.include(ua),la.include(ua),qr.include(ua),Rn.include({toGeoJSON:function(n){var r=!ln(this._latlngs),o=Kr(this._latlngs,r?1:0,!1,n);return Ci(this,{type:(r?"Multi":"")+"LineString",coordinates:o})}}),Pi.include({toGeoJSON:function(n){var r=!ln(this._latlngs),o=r&&!ln(this._latlngs[0]),u=Kr(this._latlngs,o?2:r?1:0,!0,n);return r||(u=[u]),Ci(this,{type:(o?"Multi":"")+"Polygon",coordinates:u})}}),Ai.include({toMultiPoint:function(n){var r=[];return this.eachLayer(function(o){r.push(o.toGeoJSON(n).geometry.coordinates)}),Ci(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(n){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(n);var o=r==="GeometryCollection",u=[];return this.eachLayer(function(_){if(_.toGeoJSON){var E=_.toGeoJSON(n);if(o)u.push(E.geometry);else{var N=$r(E);N.type==="FeatureCollection"?u.push.apply(u,N.features):u.push(N)}}}),o?Ci(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function Ho(n,r){return new In(n,r)}var fu=Ho,Jr=_n.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,r,o){this._url=n,this._bounds=nt(r),M(this,o)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Pt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ht(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Pn(this._image),this},bringToBack:function(){return this._map&&on(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=nt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",r=this._image=n?this._url:se("img");if(Pt(r,"leaflet-image-layer"),this._zoomAnimated&&Pt(r,"leaflet-zoom-animated"),this.options.className&&Pt(r,this.options.className),r.onselectstart=p,r.onmousemove=p,r.onload=h(this.fire,this,"load"),r.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(n){var r=this._map.getZoomScale(n.zoom),o=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;li(this._image,o,r)},_reset:function(){var n=this._image,r=new et(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),o=r.getSize();Te(n,r.min),n.style.width=o.x+"px",n.style.height=o.y+"px"},_updateOpacity:function(){He(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),pu=function(n,r,o){return new Jr(n,r,o)},Go=Jr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",r=this._image=n?this._url:se("video");if(Pt(r,"leaflet-image-layer"),this._zoomAnimated&&Pt(r,"leaflet-zoom-animated"),this.options.className&&Pt(r,this.options.className),r.onselectstart=p,r.onmousemove=p,r.onloadeddata=h(this.fire,this,"load"),n){for(var o=r.getElementsByTagName("source"),u=[],_=0;_<o.length;_++)u.push(o[_].src);this._url=o.length>0?u:[r.src];return}b(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var E=0;E<this._url.length;E++){var N=se("source");N.src=this._url[E],r.appendChild(N)}}});function mu(n,r,o){return new Go(n,r,o)}var Vo=Jr.extend({_initImage:function(){var n=this._image=this._url;Pt(n,"leaflet-image-layer"),this._zoomAnimated&&Pt(n,"leaflet-zoom-animated"),this.options.className&&Pt(n,this.options.className),n.onselectstart=p,n.onmousemove=p}});function _u(n,r,o){return new Vo(n,r,o)}var wn=_n.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,r){n&&(n instanceof lt||b(n))?(this._latlng=ft(n),M(this,r)):(M(this,n),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&He(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&He(this._container,1),this.bringToFront(),this.options.interactive&&(Pt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(He(this._container,0),this._removeTimeout=setTimeout(h(Ht,void 0,this._container),200)):Ht(this._container),this.options.interactive&&(he(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=ft(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Pn(this._container),this},bringToBack:function(){return this._map&&on(this._container),this},_prepareOpen:function(n){var r=this._source;if(!r._map)return!1;if(r instanceof Cn){r=null;var o=this._source._layers;for(var u in o)if(o[u]._map){r=o[u];break}if(!r)return!1;this._source=r}if(!n)if(r.getCenter)n=r.getCenter();else if(r.getLatLng)n=r.getLatLng();else if(r.getBounds)n=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")n.innerHTML=r;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),r=z(this.options.offset),o=this._getAnchor();this._zoomAnimated?Te(this._container,n.add(o)):r=r.add(n).add(o);var u=this._containerBottom=-r.y,_=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=u+"px",this._container.style.left=_+"px"}},_getAnchor:function(){return[0,0]}});oe.include({_initOverlay:function(n,r,o,u){var _=r;return _ instanceof n||(_=new n(u).setContent(r)),o&&_.setLatLng(o),_}}),_n.include({_initOverlay:function(n,r,o,u){var _=o;return _ instanceof n?(M(_,u),_._source=this):(_=r&&!u?r:new n(u,this),_.setContent(o)),_}});var Qr=wn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,wn.prototype.openOn.call(this,n)},onAdd:function(n){wn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Zn||this._source.on("preclick",hi))},onRemove:function(n){wn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Zn||this._source.off("preclick",hi))},getEvents:function(){var n=wn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",r=this._container=se("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),o=this._wrapper=se("div",n+"-content-wrapper",r);if(this._contentNode=se("div",n+"-content",o),_r(r),ta(this._contentNode),jt(r,"contextmenu",hi),this._tipContainer=se("div",n+"-tip-container",r),this._tip=se("div",n+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=se("a",n+"-close-button",r);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',jt(u,"click",function(_){Be(_),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,r=n.style;r.width="",r.whiteSpace="nowrap";var o=n.offsetWidth;o=Math.min(o,this.options.maxWidth),o=Math.max(o,this.options.minWidth),r.width=o+1+"px",r.whiteSpace="",r.height="";var u=n.offsetHeight,_=this.options.maxHeight,E="leaflet-popup-scrolled";_&&u>_?(r.height=_+"px",Pt(n,E)):he(n,E),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),o=this._getAnchor();Te(this._container,r.add(o))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,r=parseInt(Xt(this._container,"marginBottom"),10)||0,o=this._container.offsetHeight+r,u=this._containerWidth,_=new X(this._containerLeft,-o-this._containerBottom);_._add(ci(this._container));var E=n.layerPointToContainerPoint(_),N=z(this.options.autoPanPadding),H=z(this.options.autoPanPaddingTopLeft||N),j=z(this.options.autoPanPaddingBottomRight||N),ot=n.getSize(),Mt=0,Ft=0;E.x+u+j.x>ot.x&&(Mt=E.x+u-ot.x+j.x),E.x-Mt-H.x<0&&(Mt=E.x-H.x),E.y+o+j.y>ot.y&&(Ft=E.y+o-ot.y+j.y),E.y-Ft-H.y<0&&(Ft=E.y-H.y),(Mt||Ft)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Mt,Ft]))}},_getAnchor:function(){return z(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),gu=function(n,r){return new Qr(n,r)};oe.mergeOptions({closePopupOnClick:!0}),oe.include({openPopup:function(n,r,o){return this._initOverlay(Qr,n,r,o).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),_n.include({bindPopup:function(n,r){return this._popup=this._initOverlay(Qr,this._popup,n,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Cn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){ui(n);var r=n.layer||n.target;if(this._popup._source===r&&!(r instanceof Zn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=r,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var ts=wn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){wn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){wn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=wn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",r=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=se("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var r,o,u=this._map,_=this._container,E=u.latLngToContainerPoint(u.getCenter()),N=u.layerPointToContainerPoint(n),H=this.options.direction,j=_.offsetWidth,ot=_.offsetHeight,Mt=z(this.options.offset),Ft=this._getAnchor();H==="top"?(r=j/2,o=ot):H==="bottom"?(r=j/2,o=0):H==="center"?(r=j/2,o=ot/2):H==="right"?(r=0,o=ot/2):H==="left"?(r=j,o=ot/2):N.x<E.x?(H="right",r=0,o=ot/2):(H="left",r=j+(Mt.x+Ft.x)*2,o=ot/2),n=n.subtract(z(r,o,!0)).add(Mt).add(Ft),he(_,"leaflet-tooltip-right"),he(_,"leaflet-tooltip-left"),he(_,"leaflet-tooltip-top"),he(_,"leaflet-tooltip-bottom"),Pt(_,"leaflet-tooltip-"+H),Te(_,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&He(this._container,n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(r)},_getAnchor:function(){return z(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),vu=function(n,r){return new ts(n,r)};oe.include({openTooltip:function(n,r,o){return this._initOverlay(ts,n,r,o).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),_n.include({bindTooltip:function(n,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ts,this._tooltip,n,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var r=n?"off":"on",o={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?o.add=this._openTooltip:(o.mouseover=this._openTooltip,o.mouseout=this.closeTooltip,o.click=this._openTooltip,this._map?this._addFocusListeners():o.add=this._addFocusListeners),this._tooltip.options.sticky&&(o.mousemove=this._moveTooltip),this[r](o),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Cn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&(jt(r,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),jt(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var r=n.latlng,o,u;this._tooltip.options.sticky&&n.originalEvent&&(o=this._map.mouseEventToContainerPoint(n.originalEvent),u=this._map.containerPointToLayerPoint(o),r=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(r)}});var Wo=Li.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var r=n&&n.tagName==="DIV"?n:document.createElement("div"),o=this.options;if(o.html instanceof Element?(an(r),r.appendChild(o.html)):r.innerHTML=o.html!==!1?o.html:"",o.bgPos){var u=z(o.bgPos);r.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function xu(n){return new Wo(n)}Li.Default=xr;var yr=_n.extend({options:{tileSize:256,opacity:1,updateWhenIdle:bt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){M(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Ht(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Pn(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(on(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof X?n:new X(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var r=this.getPane().children,o=-n(-1/0,1/0),u=0,_=r.length,E;u<_;u++)E=r[u].style.zIndex,r[u]!==this._container&&E&&(o=n(o,+E));isFinite(o)&&(this.options.zIndex=o+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!bt.ielt9){He(this._container,this.options.opacity);var n=+new Date,r=!1,o=!1;for(var u in this._tiles){var _=this._tiles[u];if(!(!_.current||!_.loaded)){var E=Math.min(1,(n-_.loaded)/200);He(_.el,E),E<1?r=!0:(_.active?o=!0:this._onOpaqueTile(_),_.active=!0)}}o&&!this._noPrune&&this._pruneTiles(),r&&(rt(this._fadeFrame),this._fadeFrame=Q(this._updateOpacity,this))}},_onOpaqueTile:p,_initContainer:function(){this._container||(this._container=se("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,r=this.options.maxZoom;if(n!==void 0){for(var o in this._levels)o=Number(o),this._levels[o].el.children.length||o===n?(this._levels[o].el.style.zIndex=r-Math.abs(n-o),this._onUpdateLevel(o)):(Ht(this._levels[o].el),this._removeTilesAtZoom(o),this._onRemoveLevel(o),delete this._levels[o]);var u=this._levels[n],_=this._map;return u||(u=this._levels[n]={},u.el=se("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=r,u.origin=_.project(_.unproject(_.getPixelOrigin()),n).round(),u.zoom=n,this._setZoomTransform(u,_.getCenter(),_.getZoom()),p(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:p,_onRemoveLevel:p,_onCreateLevel:p,_pruneTiles:function(){if(this._map){var n,r,o=this._map.getZoom();if(o>this.options.maxZoom||o<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)r=this._tiles[n],r.retain=r.current;for(n in this._tiles)if(r=this._tiles[n],r.current&&!r.active){var u=r.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var r in this._tiles)this._tiles[r].coords.z===n&&this._removeTile(r)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Ht(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,r,o,u){var _=Math.floor(n/2),E=Math.floor(r/2),N=o-1,H=new X(+_,+E);H.z=+N;var j=this._tileCoordsToKey(H),ot=this._tiles[j];return ot&&ot.active?(ot.retain=!0,!0):(ot&&ot.loaded&&(ot.retain=!0),N>u?this._retainParent(_,E,N,u):!1)},_retainChildren:function(n,r,o,u){for(var _=2*n;_<2*n+2;_++)for(var E=2*r;E<2*r+2;E++){var N=new X(_,E);N.z=o+1;var H=this._tileCoordsToKey(N),j=this._tiles[H];if(j&&j.active){j.retain=!0;continue}else j&&j.loaded&&(j.retain=!0);o+1<u&&this._retainChildren(_,E,o+1,u)}},_resetView:function(n){var r=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var r=this.options;return r.minNativeZoom!==void 0&&n<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<n?r.maxNativeZoom:n},_setView:function(n,r,o,u){var _=Math.round(r);this.options.maxZoom!==void 0&&_>this.options.maxZoom||this.options.minZoom!==void 0&&_<this.options.minZoom?_=void 0:_=this._clampZoom(_);var E=this.options.updateWhenZooming&&_!==this._tileZoom;(!u||E)&&(this._tileZoom=_,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),_!==void 0&&this._update(n),o||this._pruneTiles(),this._noPrune=!!o),this._setZoomTransforms(n,r)},_setZoomTransforms:function(n,r){for(var o in this._levels)this._setZoomTransform(this._levels[o],n,r)},_setZoomTransform:function(n,r,o){var u=this._map.getZoomScale(o,n.zoom),_=n.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(r,o)).round();bt.any3d?li(n.el,_,u):Te(n.el,_)},_resetGrid:function(){var n=this._map,r=n.options.crs,o=this._tileSize=this.getTileSize(),u=this._tileZoom,_=this._map.getPixelWorldBounds(this._tileZoom);_&&(this._globalTileRange=this._pxBoundsToTileRange(_)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,r.wrapLng[0]],u).x/o.x),Math.ceil(n.project([0,r.wrapLng[1]],u).x/o.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([r.wrapLat[0],0],u).y/o.x),Math.ceil(n.project([r.wrapLat[1],0],u).y/o.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var r=this._map,o=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),u=r.getZoomScale(o,this._tileZoom),_=r.project(n,this._tileZoom).floor(),E=r.getSize().divideBy(u*2);return new et(_.subtract(E),_.add(E))},_update:function(n){var r=this._map;if(r){var o=this._clampZoom(r.getZoom());if(n===void 0&&(n=r.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(n),_=this._pxBoundsToTileRange(u),E=_.getCenter(),N=[],H=this.options.keepBuffer,j=new et(_.getBottomLeft().subtract([H,-H]),_.getTopRight().add([H,-H]));if(!(isFinite(_.min.x)&&isFinite(_.min.y)&&isFinite(_.max.x)&&isFinite(_.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ot in this._tiles){var Mt=this._tiles[ot].coords;(Mt.z!==this._tileZoom||!j.contains(new X(Mt.x,Mt.y)))&&(this._tiles[ot].current=!1)}if(Math.abs(o-this._tileZoom)>1){this._setView(n,o);return}for(var Ft=_.min.y;Ft<=_.max.y;Ft++)for(var ee=_.min.x;ee<=_.max.x;ee++){var Xe=new X(ee,Ft);if(Xe.z=this._tileZoom,!!this._isValidTile(Xe)){var Re=this._tiles[this._tileCoordsToKey(Xe)];Re?Re.current=!0:N.push(Xe)}}if(N.sort(function(Ke,Ii){return Ke.distanceTo(E)-Ii.distanceTo(E)}),N.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var cn=document.createDocumentFragment();for(ee=0;ee<N.length;ee++)this._addTile(N[ee],cn);this._level.el.appendChild(cn)}}}},_isValidTile:function(n){var r=this._map.options.crs;if(!r.infinite){var o=this._globalTileRange;if(!r.wrapLng&&(n.x<o.min.x||n.x>o.max.x)||!r.wrapLat&&(n.y<o.min.y||n.y>o.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(n);return nt(this.options.bounds).overlaps(u)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var r=this._map,o=this.getTileSize(),u=n.scaleBy(o),_=u.add(o),E=r.unproject(u,n.z),N=r.unproject(_,n.z);return[E,N]},_tileCoordsToBounds:function(n){var r=this._tileCoordsToNwSe(n),o=new W(r[0],r[1]);return this.options.noWrap||(o=this._map.wrapLatLngBounds(o)),o},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var r=n.split(":"),o=new X(+r[0],+r[1]);return o.z=+r[2],o},_removeTile:function(n){var r=this._tiles[n];r&&(Ht(r.el),delete this._tiles[n],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Pt(n,"leaflet-tile");var r=this.getTileSize();n.style.width=r.x+"px",n.style.height=r.y+"px",n.onselectstart=p,n.onmousemove=p,bt.ielt9&&this.options.opacity<1&&He(n,this.options.opacity)},_addTile:function(n,r){var o=this._getTilePos(n),u=this._tileCoordsToKey(n),_=this.createTile(this._wrapCoords(n),h(this._tileReady,this,n));this._initTile(_),this.createTile.length<2&&Q(h(this._tileReady,this,n,null,_)),Te(_,o),this._tiles[u]={el:_,coords:n,current:!0},r.appendChild(_),this.fire("tileloadstart",{tile:_,coords:n})},_tileReady:function(n,r,o){r&&this.fire("tileerror",{error:r,tile:o,coords:n});var u=this._tileCoordsToKey(n);o=this._tiles[u],o&&(o.loaded=+new Date,this._map._fadeAnimated?(He(o.el,0),rt(this._fadeFrame),this._fadeFrame=Q(this._updateOpacity,this)):(o.active=!0,this._pruneTiles()),r||(Pt(o.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:o.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),bt.ielt9||!this._map._fadeAnimated?Q(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var r=new X(this._wrapX?m(n.x,this._wrapX):n.x,this._wrapY?m(n.y,this._wrapY):n.y);return r.z=n.z,r},_pxBoundsToTileRange:function(n){var r=this.getTileSize();return new et(n.min.unscaleBy(r).floor(),n.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function yu(n){return new yr(n)}var Ri=yr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,r){this._url=n,r=M(this,r),r.detectRetina&&bt.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,r){return this._url===n&&r===void 0&&(r=!0),this._url=n,r||this.redraw(),this},createTile:function(n,r){var o=document.createElement("img");return jt(o,"load",h(this._tileOnLoad,this,r,o)),jt(o,"error",h(this._tileOnError,this,r,o)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(o.referrerPolicy=this.options.referrerPolicy),o.alt="",o.src=this.getTileUrl(n),o},getTileUrl:function(n){var r={r:bt.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var o=this._globalTileRange.max.y-n.y;this.options.tms&&(r.y=o),r["-y"]=o}return C(this._url,a(r,this.options))},_tileOnLoad:function(n,r){bt.ielt9?setTimeout(h(n,this,null,r),0):n(null,r)},_tileOnError:function(n,r,o){var u=this.options.errorTileUrl;u&&r.getAttribute("src")!==u&&(r.src=u),n(o,r)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,r=this.options.maxZoom,o=this.options.zoomReverse,u=this.options.zoomOffset;return o&&(n=r-n),n+u},_getSubdomain:function(n){var r=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var n,r;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(r=this._tiles[n].el,r.onload=p,r.onerror=p,!r.complete)){r.src=B;var o=this._tiles[n].coords;Ht(r),delete this._tiles[n],this.fire("tileabort",{tile:r,coords:o})}},_removeTile:function(n){var r=this._tiles[n];if(r)return r.el.setAttribute("src",B),yr.prototype._removeTile.call(this,n)},_tileReady:function(n,r,o){if(!(!this._map||o&&o.getAttribute("src")===B))return yr.prototype._tileReady.call(this,n,r,o)}});function Xo(n,r){return new Ri(n,r)}var Zo=Ri.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,r){this._url=n;var o=a({},this.defaultWmsParams);for(var u in r)u in this.options||(o[u]=r[u]);r=M(this,r);var _=r.detectRetina&&bt.retina?2:1,E=this.getTileSize();o.width=E.x*_,o.height=E.y*_,this.wmsParams=o},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,Ri.prototype.onAdd.call(this,n)},getTileUrl:function(n){var r=this._tileCoordsToNwSe(n),o=this._crs,u=at(o.project(r[0]),o.project(r[1])),_=u.min,E=u.max,N=(this._wmsVersion>=1.3&&this._crs===Bo?[_.y,_.x,E.y,E.x]:[_.x,_.y,E.x,E.y]).join(","),H=Ri.prototype.getTileUrl.call(this,n);return H+y(this.wmsParams,H,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+N},setParams:function(n,r){return a(this.wmsParams,n),r||this.redraw(),this}});function Mu(n,r){return new Zo(n,r)}Ri.WMS=Zo,Xo.wms=Mu;var Dn=_n.extend({options:{padding:.1},initialize:function(n){M(this,n),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Pt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,r){var o=this._map.getZoomScale(r,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),_=this._map.project(this._center,r),E=u.multiplyBy(-o).add(_).subtract(this._map._getNewPixelOrigin(n,r));bt.any3d?li(this._container,E,o):Te(this._container,E)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,r=this._map.getSize(),o=this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();this._bounds=new et(o,o.add(r.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),qo=Dn.extend({options:{tolerance:0},getEvents:function(){var n=Dn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Dn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");jt(n,"mousemove",this._onMouseMove,this),jt(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),jt(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){rt(this._redrawRequest),delete this._ctx,Ht(this._container),ge(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var r in this._layers)n=this._layers[r],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Dn.prototype._update.call(this);var n=this._bounds,r=this._container,o=n.getSize(),u=bt.retina?2:1;Te(r,n.min),r.width=u*o.x,r.height=u*o.y,r.style.width=o.x+"px",r.style.height=o.y+"px",bt.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Dn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[d(n)]=n;var r=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var r=n._order,o=r.next,u=r.prev;o?o.prev=u:this._drawLast=u,u?u.next=o:this._drawFirst=o,delete n._order,delete this._layers[d(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var r=n.options.dashArray.split(/[, ]+/),o=[],u,_;for(_=0;_<r.length;_++){if(u=Number(r[_]),isNaN(u))return;o.push(u)}n.options._dashArray=o}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||Q(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var r=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new et,this._redrawBounds.extend(n._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(n._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var r=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,r=this._redrawBounds;if(this._ctx.save(),r){var o=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,o.x,o.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)n=u.layer,(!r||n._pxBounds&&n._pxBounds.intersects(r))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,r){if(this._drawing){var o,u,_,E,N=n._parts,H=N.length,j=this._ctx;if(H){for(j.beginPath(),o=0;o<H;o++){for(u=0,_=N[o].length;u<_;u++)E=N[o][u],j[u?"lineTo":"moveTo"](E.x,E.y);r&&j.closePath()}this._fillStroke(j,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var r=n._point,o=this._ctx,u=Math.max(Math.round(n._radius),1),_=(Math.max(Math.round(n._radiusY),1)||u)/u;_!==1&&(o.save(),o.scale(1,_)),o.beginPath(),o.arc(r.x,r.y/_,u,0,Math.PI*2,!1),_!==1&&o.restore(),this._fillStroke(o,n)}},_fillStroke:function(n,r){var o=r.options;o.fill&&(n.globalAlpha=o.fillOpacity,n.fillStyle=o.fillColor||o.color,n.fill(o.fillRule||"evenodd")),o.stroke&&o.weight!==0&&(n.setLineDash&&n.setLineDash(r.options&&r.options._dashArray||[]),n.globalAlpha=o.opacity,n.lineWidth=o.weight,n.strokeStyle=o.color,n.lineCap=o.lineCap,n.lineJoin=o.lineJoin,n.stroke())},_onClick:function(n){for(var r=this._map.mouseEventToLayerPoint(n),o,u,_=this._drawFirst;_;_=_.next)o=_.layer,o.options.interactive&&o._containsPoint(r)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(o))&&(u=o);this._fireEvent(u?[u]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,r)}},_handleMouseOut:function(n){var r=this._hoveredLayer;r&&(he(this._container,"leaflet-interactive"),this._fireEvent([r],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,r){if(!this._mouseHoverThrottled){for(var o,u,_=this._drawFirst;_;_=_.next)o=_.layer,o.options.interactive&&o._containsPoint(r)&&(u=o);u!==this._hoveredLayer&&(this._handleMouseOut(n),u&&(Pt(this._container,"leaflet-interactive"),this._fireEvent([u],n,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,r,o){this._map._fireDOMEvent(r,o||r.type,n)},_bringToFront:function(n){var r=n._order;if(r){var o=r.next,u=r.prev;if(o)o.prev=u;else return;u?u.next=o:o&&(this._drawFirst=o),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(n)}},_bringToBack:function(n){var r=n._order;if(r){var o=r.next,u=r.prev;if(u)u.next=o;else return;o?o.prev=u:u&&(this._drawLast=u),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(n)}}});function Yo(n){return bt.canvas?new qo(n):null}var Mr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Su={_initContainer:function(){this._container=se("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Dn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var r=n._container=Mr("shape");Pt(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",n._path=Mr("path"),r.appendChild(n._path),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){var r=n._container;this._container.appendChild(r),n.options.interactive&&n.addInteractiveTarget(r)},_removePath:function(n){var r=n._container;Ht(r),n.removeInteractiveTarget(r),delete this._layers[d(n)]},_updateStyle:function(n){var r=n._stroke,o=n._fill,u=n.options,_=n._container;_.stroked=!!u.stroke,_.filled=!!u.fill,u.stroke?(r||(r=n._stroke=Mr("stroke")),_.appendChild(r),r.weight=u.weight+"px",r.color=u.color,r.opacity=u.opacity,u.dashArray?r.dashStyle=b(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=u.lineCap.replace("butt","flat"),r.joinstyle=u.lineJoin):r&&(_.removeChild(r),n._stroke=null),u.fill?(o||(o=n._fill=Mr("fill")),_.appendChild(o),o.color=u.fillColor||u.color,o.opacity=u.fillOpacity):o&&(_.removeChild(o),n._fill=null)},_updateCircle:function(n){var r=n._point.round(),o=Math.round(n._radius),u=Math.round(n._radiusY||o);this._setPath(n,n._empty()?"M0 0":"AL "+r.x+","+r.y+" "+o+","+u+" 0,"+65535*360)},_setPath:function(n,r){n._path.v=r},_bringToFront:function(n){Pn(n._container)},_bringToBack:function(n){on(n._container)}},es=bt.vml?Mr:Gt,Sr=Dn.extend({_initContainer:function(){this._container=es("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=es("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ht(this._container),ge(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Dn.prototype._update.call(this);var n=this._bounds,r=n.getSize(),o=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,o.setAttribute("width",r.x),o.setAttribute("height",r.y)),Te(o,n.min),o.setAttribute("viewBox",[n.min.x,n.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(n){var r=n._path=es("path");n.options.className&&Pt(r,n.options.className),n.options.interactive&&Pt(r,"leaflet-interactive"),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Ht(n._path),n.removeInteractiveTarget(n._path),delete this._layers[d(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var r=n._path,o=n.options;r&&(o.stroke?(r.setAttribute("stroke",o.color),r.setAttribute("stroke-opacity",o.opacity),r.setAttribute("stroke-width",o.weight),r.setAttribute("stroke-linecap",o.lineCap),r.setAttribute("stroke-linejoin",o.lineJoin),o.dashArray?r.setAttribute("stroke-dasharray",o.dashArray):r.removeAttribute("stroke-dasharray"),o.dashOffset?r.setAttribute("stroke-dashoffset",o.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),o.fill?(r.setAttribute("fill",o.fillColor||o.color),r.setAttribute("fill-opacity",o.fillOpacity),r.setAttribute("fill-rule",o.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(n,r){this._setPath(n,wt(n._parts,r))},_updateCircle:function(n){var r=n._point,o=Math.max(Math.round(n._radius),1),u=Math.max(Math.round(n._radiusY),1)||o,_="a"+o+","+u+" 0 1,0 ",E=n._empty()?"M0 0":"M"+(r.x-o)+","+r.y+_+o*2+",0 "+_+-o*2+",0 ";this._setPath(n,E)},_setPath:function(n,r){n._path.setAttribute("d",r)},_bringToFront:function(n){Pn(n._path)},_bringToBack:function(n){on(n._path)}});bt.vml&&Sr.include(Su);function jo(n){return bt.svg||bt.vml?new Sr(n):null}oe.include({getRenderer:function(n){var r=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var r=this._paneRenderers[n];return r===void 0&&(r=this._createRenderer({pane:n}),this._paneRenderers[n]=r),r},_createRenderer:function(n){return this.options.preferCanvas&&Yo(n)||jo(n)}});var Ko=Pi.extend({initialize:function(n,r){Pi.prototype.initialize.call(this,this._boundsToLatLngs(n),r)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=nt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Eu(n,r){return new Ko(n,r)}Sr.create=es,Sr.pointsToPath=wt,In.geometryToLayer=Yr,In.coordsToLatLng=ca,In.coordsToLatLngs=jr,In.latLngToCoords=ha,In.latLngsToCoords=Kr,In.getFeature=Ci,In.asFeature=$r,oe.mergeOptions({boxZoom:!0});var $o=bn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){jt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ge(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ht(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),fr(),Zs(),this._startPoint=this._map.mouseEventToContainerPoint(n),jt(document,{contextmenu:ui,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=se("div","leaflet-zoom-box",this._container),Pt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var r=new et(this._point,this._startPoint),o=r.getSize();Te(this._box,r.min),this._box.style.width=o.x+"px",this._box.style.height=o.y+"px"},_finish:function(){this._moved&&(Ht(this._box),he(this._container,"leaflet-crosshair")),pr(),qs(),ge(document,{contextmenu:ui,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var r=new W(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});oe.addInitHook("addHandler","boxZoom",$o),oe.mergeOptions({doubleClickZoom:!0});var Jo=bn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var r=this._map,o=r.getZoom(),u=r.options.zoomDelta,_=n.originalEvent.shiftKey?o-u:o+u;r.options.doubleClickZoom==="center"?r.setZoom(_):r.setZoomAround(n.containerPoint,_)}});oe.addInitHook("addHandler","doubleClickZoom",Jo),oe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Qo=bn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Xn(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Pt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){he(this._map._container,"leaflet-grab"),he(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=nt(this._map.options.maxBounds);this._offsetLimit=at(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var r=this._lastTime=+new Date,o=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(o),this._times.push(r),this._prunePositions(r)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,r){return n-(n-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;n.x<r.min.x&&(n.x=this._viscousLimit(n.x,r.min.x)),n.y<r.min.y&&(n.y=this._viscousLimit(n.y,r.min.y)),n.x>r.max.x&&(n.x=this._viscousLimit(n.x,r.max.x)),n.y>r.max.y&&(n.y=this._viscousLimit(n.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,r=Math.round(n/2),o=this._initialWorldOffset,u=this._draggable._newPos.x,_=(u-r+o)%n+r-o,E=(u+r+o)%n-r-o,N=Math.abs(_+o)<Math.abs(E+o)?_:E;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=N},_onDragEnd:function(n){var r=this._map,o=r.options,u=!o.inertia||n.noInertia||this._times.length<2;if(r.fire("dragend",n),u)r.fire("moveend");else{this._prunePositions(+new Date);var _=this._lastPos.subtract(this._positions[0]),E=(this._lastTime-this._times[0])/1e3,N=o.easeLinearity,H=_.multiplyBy(N/E),j=H.distanceTo([0,0]),ot=Math.min(o.inertiaMaxSpeed,j),Mt=H.multiplyBy(ot/j),Ft=ot/(o.inertiaDeceleration*N),ee=Mt.multiplyBy(-Ft/2).round();!ee.x&&!ee.y?r.fire("moveend"):(ee=r._limitOffset(ee,r.options.maxBounds),Q(function(){r.panBy(ee,{duration:Ft,easeLinearity:N,noMoveStart:!0,animate:!0})}))}}});oe.addInitHook("addHandler","dragging",Qo),oe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var tl=bn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),jt(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ge(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,r=document.documentElement,o=n.scrollTop||r.scrollTop,u=n.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(u,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var r=this._panKeys={},o=this.keyCodes,u,_;for(u=0,_=o.left.length;u<_;u++)r[o.left[u]]=[-1*n,0];for(u=0,_=o.right.length;u<_;u++)r[o.right[u]]=[n,0];for(u=0,_=o.down.length;u<_;u++)r[o.down[u]]=[0,n];for(u=0,_=o.up.length;u<_;u++)r[o.up[u]]=[0,-1*n]},_setZoomDelta:function(n){var r=this._zoomKeys={},o=this.keyCodes,u,_;for(u=0,_=o.zoomIn.length;u<_;u++)r[o.zoomIn[u]]=n;for(u=0,_=o.zoomOut.length;u<_;u++)r[o.zoomOut[u]]=-n},_addHooks:function(){jt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ge(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var r=n.keyCode,o=this._map,u;if(r in this._panKeys){if(!o._panAnim||!o._panAnim._inProgress)if(u=this._panKeys[r],n.shiftKey&&(u=z(u).multiplyBy(3)),o.options.maxBounds&&(u=o._limitOffset(z(u),o.options.maxBounds)),o.options.worldCopyJump){var _=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(u)));o.panTo(_)}else o.panBy(u)}else if(r in this._zoomKeys)o.setZoom(o.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&o._popup&&o._popup.options.closeOnEscapeKey)o.closePopup();else return;ui(n)}}});oe.addInitHook("addHandler","keyboard",tl),oe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var el=bn.extend({addHooks:function(){jt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ge(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var r=bo(n),o=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var u=Math.max(o-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),u),ui(n)},_performZoom:function(){var n=this._map,r=n.getZoom(),o=this._map.options.zoomSnap||0;n._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),_=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,E=o?Math.ceil(_/o)*o:_,N=n._limitZoom(r+(this._delta>0?E:-E))-r;this._delta=0,this._startTime=null,N&&(n.options.scrollWheelZoom==="center"?n.setZoom(r+N):n.setZoomAround(this._lastMousePos,r+N))}});oe.addInitHook("addHandler","scrollWheelZoom",el);var Tu=600;oe.mergeOptions({tapHold:bt.touchNative&&bt.safari&&bt.mobile,tapTolerance:15});var nl=bn.extend({addHooks:function(){jt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ge(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var r=n.touches[0];this._startPos=this._newPos=new X(r.clientX,r.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(jt(document,"touchend",Be),jt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),Tu),jt(document,"touchend touchcancel contextmenu",this._cancel,this),jt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){ge(document,"touchend",Be),ge(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),ge(document,"touchend touchcancel contextmenu",this._cancel,this),ge(document,"touchmove",this._onMove,this)},_onMove:function(n){var r=n.touches[0];this._newPos=new X(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,r){var o=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});o._simulated=!0,r.target.dispatchEvent(o)}});oe.addInitHook("addHandler","tapHold",nl),oe.mergeOptions({touchZoom:bt.touch,bounceAtZoomLimits:!0});var il=bn.extend({addHooks:function(){Pt(this._map._container,"leaflet-touch-zoom"),jt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){he(this._map._container,"leaflet-touch-zoom"),ge(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var r=this._map;if(!(!n.touches||n.touches.length!==2||r._animatingZoom||this._zooming)){var o=r.mouseEventToContainerPoint(n.touches[0]),u=r.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(o.add(u)._divideBy(2))),this._startDist=o.distanceTo(u),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),jt(document,"touchmove",this._onTouchMove,this),jt(document,"touchend touchcancel",this._onTouchEnd,this),Be(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var r=this._map,o=r.mouseEventToContainerPoint(n.touches[0]),u=r.mouseEventToContainerPoint(n.touches[1]),_=o.distanceTo(u)/this._startDist;if(this._zoom=r.getScaleZoom(_,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&_<1||this._zoom>r.getMaxZoom()&&_>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,_===1)return}else{var E=o._add(u)._divideBy(2)._subtract(this._centerPoint);if(_===1&&E.x===0&&E.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(E),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),rt(this._animRequest);var N=h(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Q(N,this,!0),Be(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,rt(this._animRequest),ge(document,"touchmove",this._onTouchMove,this),ge(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});oe.addInitHook("addHandler","touchZoom",il),oe.BoxZoom=$o,oe.DoubleClickZoom=Jo,oe.Drag=Qo,oe.Keyboard=tl,oe.ScrollWheelZoom=el,oe.TapHold=nl,oe.TouchZoom=il,e.Bounds=et,e.Browser=bt,e.CRS=St,e.Canvas=qo,e.Circle=la,e.CircleMarker=qr,e.Class=F,e.Control=mn,e.DivIcon=Wo,e.DivOverlay=wn,e.DomEvent=Gh,e.DomUtil=kh,e.Draggable=Xn,e.Evented=st,e.FeatureGroup=Cn,e.GeoJSON=In,e.GridLayer=yr,e.Handler=bn,e.Icon=Li,e.ImageOverlay=Jr,e.LatLng=lt,e.LatLngBounds=W,e.Layer=_n,e.LayerGroup=Ai,e.LineUtil=eu,e.Map=oe,e.Marker=Zr,e.Mixin=jh,e.Path=Zn,e.Point=X,e.PolyUtil=Kh,e.Polygon=Pi,e.Polyline=Rn,e.Popup=Qr,e.PosAnimation=wo,e.Projection=nu,e.Rectangle=Ko,e.Renderer=Dn,e.SVG=Sr,e.SVGOverlay=Vo,e.TileLayer=Ri,e.Tooltip=ts,e.Transformation=re,e.Util=pt,e.VideoOverlay=Go,e.bind=h,e.bounds=at,e.canvas=Yo,e.circle=hu,e.circleMarker=cu,e.control=gr,e.divIcon=xu,e.extend=a,e.featureGroup=au,e.geoJSON=Ho,e.geoJson=fu,e.gridLayer=yu,e.icon=ou,e.imageOverlay=pu,e.latLng=ft,e.latLngBounds=nt,e.layerGroup=su,e.map=Vh,e.marker=lu,e.point=z,e.polygon=du,e.polyline=uu,e.popup=gu,e.rectangle=Eu,e.setOptions=M,e.stamp=d,e.svg=jo,e.svgOverlay=_u,e.tileLayer=Xo,e.tooltip=vu,e.transformation=Z,e.version=s,e.videoOverlay=mu;var bu=window.L;e.noConflict=function(){return window.L=bu,this},window.L=e})})(ro,ro.exports);var Nv=ro.exports;const Ki=Uv(Nv),Ov="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",Fv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",Bv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";Ki.Icon.Default.mergeOptions({iconRetinaUrl:Ov,iconUrl:Fv,shadowUrl:Bv});function zv(){var i;return(i=window.google)!=null&&i.maps?Promise.resolve(window.google):Promise.reject(new Error("no key"))}function kv({onPinGlobe:i,onAddRoute:t,onAddDestination:e}){const s=document.getElementById("mapModal"),a=document.getElementById("mapCanvas"),l=document.getElementById("streetView"),h=document.getElementById("mapTitle"),c=document.getElementById("placeResults"),d=document.getElementById("placeSearchInput");let f=null,m="satellite",p=null,g=null,x=null,S=null,M=!1;document.getElementById("closeMap").onclick=()=>{s.classList.remove("open")},document.querySelectorAll("#mapModal .viewBtn").forEach(R=>{R.onclick=()=>b(R.dataset.mode)}),document.getElementById("placeSearchBtn").onclick=()=>I(d.value),d.addEventListener("keydown",R=>{R.key==="Enter"&&I(d.value)}),document.getElementById("nearbyBtn").onclick=()=>I("");async function y(R,U={}){f=R,h.textContent=`${R.name} — ${R.country}`,s.classList.add("open"),c.innerHTML='<div class="loading">Tip: search a place or hit “Nearby famous places”.</div>',d.value="",U.nearby&&I("");try{await zv(),M=!0,document.getElementById("svBtnWrap").style.display="",await v(R)}catch{M=!1,document.getElementById("svBtnWrap").style.display="none",C(R)}b("satellite")}async function v(R){const U=window.google,it={lat:R.lat,lng:R.lng};p=new U.maps.Map(a,{center:it,zoom:12,mapTypeId:"satellite",streetViewControl:!1}),new U.maps.Marker({position:it,map:p,title:R.name}),g=new U.maps.StreetViewPanorama(l,{position:it,pov:{heading:34,pitch:8},zoom:1})}function C(R){x&&(x.remove(),x=null),x=Ki.map(a,{zoomControl:!0}).setView([R.lat,R.lng],11);const U=Ki.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap"}),it=Ki.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles © Esri"});S={osm:U,sat:it},it.addTo(x),Ki.marker([R.lat,R.lng]).addTo(x).bindPopup(R.name).openPopup(),setTimeout(()=>x.invalidateSize(),60)}function b(R){m=R,document.querySelectorAll("#mapModal .viewBtn").forEach(it=>it.classList.toggle("active",it.dataset.mode===R));const U=R==="street";l.style.display=U?"block":"none",a.style.display=U?"none":"block",M?(R==="map"&&p.setMapTypeId("roadmap"),R==="satellite"&&p.setMapTypeId("satellite"),R==="street"&&g&&g.setVisible(!0)):(R==="map"&&(S.sat.remove(),S.osm.addTo(x)),R==="satellite"&&(S.osm.remove(),S.sat.addTo(x)),setTimeout(()=>x.invalidateSize(),60))}async function I(R){if(f){c.innerHTML='<div class="loading">Searching…</div>';try{const U=await Hn.places(f.lat,f.lng,R.trim());if(!U.results.length){c.innerHTML='<div class="loading">No places found.</div>';return}c.innerHTML=U.results.map((it,w)=>`
        <div class="placeCard" data-i="${w}">
          <div class="pcMain">
            <div class="pcName">${it.name}</div>
            <div class="pcMeta">${it.category||"place"}${it.rating?" · ★ "+it.rating:""} · ${U.source}</div>
          </div>
          <div class="pcBtns">
            <button data-act="focus" data-i="${w}" title="Show on map">🗺️</button>
            <button data-act="pin" data-i="${w}" title="Pin on globe">📍</button>
            <button data-act="route" data-i="${w}" title="Add to route">➕</button>
            <button data-act="dest" data-i="${w}" title="Add as destination">⭐</button>
          </div>
        </div>`).join(""),c.querySelectorAll("button").forEach(it=>{it.onclick=()=>{const w=U.results[+it.dataset.i],D=it.dataset.act;D==="focus"&&B(w),D==="pin"&&i(w),D==="route"&&t({id:"place:"+w.name,name:w.name,lat:w.lat,lng:w.lng}),D==="dest"&&e(w)}})}catch(U){c.innerHTML=`<div class="loading err">Search failed: ${U.message}</div>`}}}function B(R){M&&p?(p.panTo({lat:R.lat,lng:R.lng}),p.setZoom(15),new window.google.maps.Marker({position:{lat:R.lat,lng:R.lng},map:p,title:R.name}),m==="street"&&g&&g.setPosition({lat:R.lat,lng:R.lng})):x&&(x.setView([R.lat,R.lng],15),Ki.marker([R.lat,R.lng]).addTo(x).bindPopup(R.name).openPopup())}return{open:y}}function Hv({globe:i}){const t=document.getElementById("routePanel"),e=document.getElementById("routeStops"),s=document.getElementById("routeSummary"),a=document.getElementById("routeBadge");let l=[],h=!0,c=!1;document.getElementById("routeToggle").onclick=()=>t.classList.toggle("open"),document.getElementById("closeRoute").onclick=()=>t.classList.remove("open"),document.getElementById("optFromNYC").onchange=g=>{h=g.target.checked,p()},document.getElementById("optOptimize").onchange=g=>{c=g.target.checked,p()},document.getElementById("clearRoute").onclick=()=>{l=[],p()};function d(g){l.some(x=>x.id===g.id)||(l.push({id:g.id,name:g.name,lat:g.lat,lng:g.lng}),t.classList.add("open"),p())}function f(g){l=l.filter(x=>x.id!==g),p()}function m(){return[...h?[{name:fa.name,lat:fa.lat,lng:fa.lng}]:[],...l.map(x=>({name:x.name,lat:x.lat,lng:x.lng}))]}async function p(){if(a.textContent=l.length,l.length===0){e.innerHTML='<div class="emptyState">No stops yet. Open a destination and hit “➕ Add to route”, or add places from the map.</div>',s.innerHTML="",i.setRoute(null);return}const g=m();if(i.setRoute(g),e.innerHTML=l.map((x,S)=>`
      <div class="routeStop">
        <span class="rsNum">${S+1}</span>
        <span class="rsName">${x.name}</span>
        <button class="rsRemove" data-id="${x.id}">✕</button>
      </div>`).join(""),e.querySelectorAll(".rsRemove").forEach(x=>x.onclick=()=>f(x.dataset.id)),g.length<2){s.innerHTML='<div class="hintSmall">Add one more stop to draw a route.</div>';return}try{const x=await Hn.planRoute(g,c,!1);c&&i.setRoute(x.stops),s.innerHTML=`
        <div class="summaryRow"><span>Stops</span><span>${x.stops.length}</span></div>
        <div class="summaryRow"><span>Total distance</span><span>${Math.round(x.total_distance_km).toLocaleString()} km</span></div>
        <div class="summaryRow total"><span>Flight time (approx)</span><span>${x.total_flight_hours} h</span></div>`}catch(x){s.innerHTML=`<div class="hintSmall err">Route calc failed: ${x.message}</div>`}}return p(),{addStop:d,getStops:()=>l.slice()}}function Gv(i,t,e){const s=Math.max(1,Math.min(60,Math.round(e)||t)),a=t>0?i/t:0;return{days:s,budget:Math.round(a*s)}}function Vv(i,t){const e=Math.max(1,t||1);return i.reduce((s,a)=>s+a.budget,0)*e}function Wv(i){return i.reduce((t,e)=>t+e.days,0)}function Xv(i,t){const e=Math.max(1,t||1),s={};return i.forEach((a,l)=>{const h=a.year;(s[h]||(s[h]={year:h,items:[],subtotal:0})).items.push({...a,_idx:l}),s[h].subtotal+=a.budget*e}),Object.values(s).sort((a,l)=>a.year-l.year)}const Fh="wa_bucket";function Zv(){try{return JSON.parse(localStorage.getItem(Fh))||[]}catch{return[]}}function qv(i){localStorage.setItem(Fh,JSON.stringify(i))}function Yv(){const i=document.getElementById("bucketDrawer"),t=document.getElementById("yearsCol"),e=document.getElementById("summaryCol"),s=document.getElementById("statCount"),a=document.getElementById("bucketBadge");let l=Zv(),h=1;document.getElementById("bucketToggle").onclick=()=>i.classList.add("open"),document.getElementById("closeDrawer").onclick=()=>i.classList.remove("open");function c(){qv(l)}function d(S,M,y,v=S.days,C="Guest"){l.push({destId:S.id,name:S.name,country:S.country,year:M,budget:y,days:v,addedBy:C}),c(),x()}function f(S){l.splice(S,1),c(),x()}function m(S){return l.filter(M=>M.destId===S).map(M=>M.year)}function p(){const S=new Map;return l.forEach(M=>{S.has(M.destId)||S.set(M.destId,{destId:M.destId,name:M.name})}),[...S.values()]}function g(S,M){const y=l[S];if(!y)return;const v=Gv(y.budget,y.days,M);y.days=v.days,y.budget=v.budget,c(),x()}function x(){if(s.textContent=l.length,a.textContent=l.length,l.length===0){t.innerHTML='<div class="emptyState">Your atlas is empty.<br>Add a destination or click a pin to plan a trip.</div>',e.innerHTML='<h4>Budget Summary</h4><div class="summaryRow total"><span>Grand total</span><span>$0</span></div>';return}const S=Xv(l,h);t.innerHTML=S.map(({year:M,items:y,subtotal:v})=>`
      <div class="yearGroup">
        <div class="yearTitle"><span>${M}</span><span>$${v.toLocaleString()}</span></div>
        ${y.map(C=>`<div class="bucketCard">
          <div><div class="bcName">${C.name}</div>
          <div class="bcMeta">${C.country} ·
            <input type="number" class="bcDaysInput" data-idx="${C._idx}" value="${C.days}" min="1" max="60"/> days ·
            $${(C.budget*h).toLocaleString()}</div>
          <div class="bcAddedBy">added by ${C.addedBy||"Guest"}</div></div>
          <button class="bcRemove" data-idx="${C._idx}">✕</button></div>`).join("")}
      </div>`).join(""),t.querySelectorAll(".bcRemove").forEach(M=>M.onclick=()=>f(+M.dataset.idx)),t.querySelectorAll(".bcDaysInput").forEach(M=>{M.onclick=y=>y.stopPropagation(),M.onchange=()=>g(+M.dataset.idx,M.value)}),e.innerHTML=`<h4>Budget Summary</h4>
      <div class="summaryRow"><span>Destinations added</span><span>${l.length}</span></div>
      <div class="summaryRow"><span>Total travel days</span><span>${Wv(l)}</span></div>
      <div class="summaryRow"><span>Years spanned</span><span>${S.length}</span></div>
      <div class="summaryRow total"><span>Grand total</span><span>$${Vv(l,h).toLocaleString()}</span></div>
      <div class="peopleInput"><label>People traveling</label>
        <input type="number" id="peopleInput" value="${h}" min="1"></div>`,document.getElementById("peopleInput").onchange=M=>{h=Math.max(1,parseInt(M.target.value,10)||1),x()}}return x(),{add:d,yearsFor:m,listDestinations:p}}function jv({onAdd:i}){const t=document.getElementById("addDestModal"),e=document.getElementById("addSearchInput"),s=document.getElementById("addResults");document.getElementById("addDestToggle").onclick=a,document.getElementById("closeAddDest").onclick=()=>t.classList.remove("open"),document.getElementById("addSearchBtn").onclick=()=>l(e.value),e.addEventListener("keydown",h=>{h.key==="Enter"&&l(e.value)});function a(){t.classList.add("open"),s.innerHTML='<div class="loading">Type a city, landmark, or place (e.g. “Kyoto”, “Machu Picchu”) and hit Search.</div>',e.value="",setTimeout(()=>e.focus(),50)}async function l(h){if(h=h.trim(),!!h){s.innerHTML='<div class="loading">Searching worldwide…</div>';try{const c=await Hn.geocode(h);if(!c.results.length){s.innerHTML='<div class="loading">No matches. Try a more specific name.</div>';return}s.innerHTML=c.results.map((d,f)=>`
        <div class="placeCard">
          <div class="pcMain">
            <div class="pcName">${d.name}</div>
            <div class="pcMeta">${d.country||d.address||""} · ${d.lat.toFixed(2)}, ${d.lng.toFixed(2)} · ${c.source}</div>
          </div>
          <button class="addOneBtn" data-i="${f}">Add</button>
        </div>`).join(""),s.querySelectorAll(".addOneBtn").forEach(d=>{d.onclick=async()=>{d.disabled=!0,d.textContent="…";try{await i(c.results[+d.dataset.i]),d.textContent="✓ Added"}catch{d.disabled=!1,d.textContent="Retry"}}})}catch(c){s.innerHTML=`<div class="loading err">Search failed: ${c.message}. Is the backend running?</div>`}}}return{open:a}}function Kv({getBucketDestinations:i}){const t=document.getElementById("negotiationModal"),e=document.getElementById("negotiationBody");document.getElementById("negotiationToggle").onclick=()=>{t.classList.add("open"),s()},document.getElementById("closeNegotiation").onclick=()=>t.classList.remove("open");function s(){return a()}function a(){e.innerHTML=`
      <div class="negoIntro">Group trip planning runs a real multi-agent backend
        (FastAPI + LangGraph + GraphRAG) to negotiate a route between each
        member's Digital Twin — that needs a live Python server, which this
        static demo (GitHub Pages) doesn't run.</div>
      <div class="negoCard">
        <h4>Run it locally to try this feature</h4>
        <div class="hintSmall">
          <code>docker compose up --build</code> — then open
          <b>http://localhost:8080</b> and click <b>🤝 Group Plan</b> again.<br/><br/>
          Or see <code>docs/architecture-v2/SYSTEM_ARCHITECTURE.md</code> in the
          repo for the full design (cost-controlled LLM calls, GraphRAG-driven
          reconfiguration, Reddit trending signal, hard spend guardrails).
        </div>
      </div>`}return{open:()=>{t.classList.add("open"),s()}}}const Wc=new Set(Kc());if(Wc.size)for(let i=pn.length-1;i>=0;i--)Wc.has(pn[i].id)&&pn.splice(i,1);const Vn=bv(document.getElementById("globeCanvas"),{onSelect:i=>yo(i)});Vn.addDestinations(pn);const Bs=Yv(),Bh=Hv({globe:Vn}),Xc=kv({onPinGlobe:i=>Vn.addCustomPin(i.lat,i.lng,"place:"+i.name),onAddRoute:i=>Bh.addStop(i),onAddDestination:i=>zh(i)}),$v=Iv({onAddBucket:(i,t,e,s,a)=>Bs.add(i,t,e,s,a),onAddRoute:i=>Bh.addStop({id:i.id,name:i.name,lat:i.lat,lng:i.lng}),onOpenMap:i=>Xc.open(i),onSearchNearby:i=>Xc.open(i,{nearby:!0}),onRemoveDestination:i=>Qv(i),getBucketYears:i=>Bs.yearsFor(i)});jv({onAdd:i=>zh(i)});Kv({getBucketDestinations:()=>Bs.listDestinations()});const Jv=document.getElementById("navListItems");function xo(i,t=document.querySelectorAll(".navItem").length){const e=document.createElement("div");e.className="navItem",e.dataset.id=i.id,e.innerHTML=`<span class="dot"></span>${i.name}<span class="rankTag">${i.custom?"★":String(t+1).padStart(2,"0")}</span>`,e.onclick=()=>yo(i.id),Jv.appendChild(e)}pn.forEach((i,t)=>xo(i,t));function yo(i){const t=Zc(i);t&&(Vn.setSelected(i),Vn.focusOn(t.lat,t.lng),document.querySelectorAll(".navItem").forEach(e=>e.classList.toggle("active",e.dataset.id===i)),$v.open(t))}async function zh(i){const t=Oh(),e={name:i.name,country:i.country||(i.address?i.address.split(",").slice(-1)[0].trim():"Custom pin"),lat:i.lat,lng:i.lng,added_by:t},s=await Hn.addDestination(e);qc(s),xo(s),Vn.removePin("place:"+i.name),Vn.addDestination(s),document.getElementById("addDestModal").classList.remove("open");const a=new Date().getFullYear()+1;return Bs.add(s,a,s.budgetLow*s.days,s.days,t),yo(s.id),s}async function Qv(i){var t;if(i.custom){try{await Hn.deleteDestination(i.id)}catch{}Yc(i.id)}else Uu(i.id);Vn.removePin(i.id),(t=document.querySelector(`.navItem[data-id="${i.id}"]`))==null||t.remove()}Hn.destinations().then(i=>{i.filter(t=>t.custom&&!Zc(t.id)).forEach(t=>{qc(t),xo(t),Vn.addDestination(t)})}).catch(()=>{});
