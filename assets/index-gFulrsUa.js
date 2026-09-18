(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=e(o);fetch(o.href,l)}})();const Su="https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg",Eu="https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png",ho={name:"New York (JFK/EWR)",lat:40.7128,lng:-74.006},Tu="wa_auth_user";function kc(){try{return JSON.parse(localStorage.getItem(Tu))}catch{return null}}const bu=/^[A-Za-z0-9À-ÖØ-öø-ÿ0-9 '’\-,.()&/]+/;function ol(r){if(!r)return r;const t=r.match(bu);return(t?t[0].trim():r).replace(/[\s,-]+$/,"")||r}const Hc="wa_static_atlas",al=850;function ll(r,t,e,s){const l=Math.PI/180,h=(e-r)*l,c=(s-t)*l,d=Math.sin(h/2)**2+Math.cos(r*l)*Math.cos(e*l)*Math.sin(c/2)**2;return 2*6371*Math.asin(Math.sqrt(d))}const uo=()=>{try{return JSON.parse(localStorage.getItem(Hc))||[]}catch{return[]}},cl=r=>localStorage.setItem(Hc,JSON.stringify(r));function wu(...r){let t=2166136261;const e=r.join("|");for(let s=0;s<e.length;s++)t^=e.charCodeAt(s),t=Math.imul(t,16777619);return t>>>0}const fo={status:"not_configured",message:"This is the static GitHub Pages demo — live web-search data needs the full backend (Vercel deployment or local server). See the README for how to run it."},Au={health:async()=>({status:"ok",static:!0,live:{live_data_agent:!1,places_google:!1}}),atlas:async()=>uo(),addToAtlas:async r=>{const e={id:`${(r.name||"place").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"place"}-${wu(r.name,r.lat).toString(16).slice(0,4)}`,name:r.name,country:r.country||"",lat:r.lat,lng:r.lng,airport:r.airport||"",days:r.days||4,budgetLow:r.budgetLow||100,budgetHigh:r.budgetHigh||200,tagline:r.tagline||"",custom:!0},s=uo();return s.push(e),cl(s),e},removeFromAtlas:async r=>(cl(uo().filter(t=>t.id!==r)),{removed:r}),flights:async()=>({...fo,origin:"JFK"}),bestTime:async()=>({...fo}),tradeoff:async()=>({...fo}),planRoute:async(r,t=!1)=>{let e=r;if(t&&r.length>2){const l=[...r];e=[];let h=[40.7128,-74.006];for(;l.length;){let c=0,d=1/0;l.forEach((p,m)=>{const v=ll(h[0],h[1],p.lat,p.lng);v<d&&(d=v,c=m)});const f=l.splice(c,1)[0];e.push(f),h=[f.lat,f.lng]}}const s=[];let o=0;for(let l=0;l<e.length-1;l++){const h=e[l],c=e[l+1],d=ll(h.lat,h.lng,c.lat,c.lng);o+=d,s.push({from_name:h.name,to_name:c.name,distance_km:Math.round(d*10)/10,est_flight_hours:Math.round(d/al*10)/10})}return{stops:e,legs:s,total_distance_km:Math.round(o*10)/10,total_flight_hours:Math.round(o/al*10)/10,optimized:!!t}},places:async(r,t,e="",s=4e4)=>{const l=new URLSearchParams({q:e||"tourist attraction",format:"jsonv2",limit:"10","accept-language":"en",viewbox:`${t-1.2},${r+1.2},${t+1.2},${r-1.2}`,bounded:"1"}),d=(await(await fetch(`https://nominatim.openstreetmap.org/search?${l}`)).json()).map(f=>({name:ol((f.display_name||"").split(",")[0]),lat:+f.lat,lng:+f.lon,category:f.type,address:f.display_name,source:"nominatim"}));return{query:e,results:d,source:d.length?"nominatim":"unavailable"}},geocode:async r=>{const t=new URLSearchParams({q:r,format:"jsonv2",limit:"8",addressdetails:"1","accept-language":"en"}),o=(await(await fetch(`https://nominatim.openstreetmap.org/search?${t}`)).json()).map(l=>{var h;return{name:ol((l.display_name||"").split(",")[0]),lat:+l.lat,lng:+l.lon,category:l.type,address:l.display_name,country:(h=l.address)==null?void 0:h.country,source:"nominatim"}});return{query:r,results:o,source:o.length?"nominatim":"unavailable"}}},Hn=Au;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="160",Lu=0,hl=1,Pu=2,Gc=1,Ru=2,Bn=3,ni=0,je=1,An=2,Qn=0,tr=1,ul=2,dl=3,fl=4,Cu=5,xi=100,Iu=101,Du=102,pl=103,ml=104,Uu=200,Nu=201,Ou=202,Fu=203,Zo=204,qo=205,Bu=206,zu=207,ku=208,Hu=209,Gu=210,Vu=211,Wu=212,Xu=213,Zu=214,qu=0,Yu=1,ju=2,Ps=3,Ku=4,$u=5,Ju=6,Qu=7,oa=0,td=1,ed=2,ti=0,nd=1,id=2,rd=3,sd=4,od=5,ad=6,Vc=300,nr=301,ir=302,Yo=303,jo=304,Os=306,Ko=1e3,yn=1001,$o=1002,Ye=1003,_l=1004,po=1005,un=1006,ld=1007,Rr=1008,ei=1009,cd=1010,hd=1011,aa=1012,Wc=1013,$n=1014,Jn=1015,Cr=1016,Xc=1017,Zc=1018,Mi=1020,ud=1021,Mn=1023,dd=1024,fd=1025,Si=1026,rr=1027,pd=1028,qc=1029,md=1030,Yc=1031,jc=1033,mo=33776,_o=33777,go=33778,vo=33779,gl=35840,vl=35841,xl=35842,yl=35843,Kc=36196,Ml=37492,Sl=37496,El=37808,Tl=37809,bl=37810,wl=37811,Al=37812,Ll=37813,Pl=37814,Rl=37815,Cl=37816,Il=37817,Dl=37818,Ul=37819,Nl=37820,Ol=37821,xo=36492,Fl=36494,Bl=36495,_d=36283,zl=36284,kl=36285,Hl=36286,$c=3e3,Ei=3001,gd=3200,vd=3201,Jc=0,xd=1,fn="",ze="srgb",Gn="srgb-linear",la="display-p3",Fs="display-p3-linear",Rs="linear",ve="srgb",Cs="rec709",Is="p3",Di=7680,Gl=519,yd=512,Md=513,Sd=514,Qc=515,Ed=516,Td=517,bd=518,wd=519,Vl=35044,Wl="300 es",Jo=1035,kn=2e3,Ds=2001;class or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(e)===-1&&s[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const l=o.indexOf(e);l!==-1&&o.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let l=0,h=o.length;l<h;l++)o[l].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const Ar=Math.PI/180,Ir=180/Math.PI;function ar(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]).toLowerCase()}function We(r,t,e){return Math.max(t,Math.min(e,r))}function ca(r,t){return(r%t+t)%t}function Ad(r,t,e,s,o){return s+(r-t)*(o-s)/(e-t)}function Ld(r,t,e){return r!==t?(e-r)/(t-r):0}function Lr(r,t,e){return(1-e)*r+e*t}function Pd(r,t,e,s){return Lr(r,t,1-Math.exp(-e*s))}function Rd(r,t=1){return t-Math.abs(ca(r,t*2)-t)}function Cd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Id(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Dd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ud(r,t){return r+Math.random()*(t-r)}function Nd(r){return r*(.5-Math.random())}function Od(r){r!==void 0&&(Xl=r);let t=Xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fd(r){return r*Ar}function Bd(r){return r*Ir}function Qo(r){return(r&r-1)===0&&r!==0}function zd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Us(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kd(r,t,e,s,o){const l=Math.cos,h=Math.sin,c=l(e/2),d=h(e/2),f=l((t+s)/2),p=h((t+s)/2),m=l((t-s)/2),v=h((t-s)/2),x=l((s-t)/2),S=h((s-t)/2);switch(o){case"XYX":r.set(c*p,d*m,d*v,c*f);break;case"YZY":r.set(d*v,c*p,d*m,c*f);break;case"ZXZ":r.set(d*m,d*v,c*p,c*f);break;case"XZX":r.set(c*p,d*S,d*x,c*f);break;case"YXY":r.set(d*x,c*p,d*S,c*f);break;case"ZYZ":r.set(d*S,d*x,c*p,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ji(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ta={DEG2RAD:Ar,RAD2DEG:Ir,generateUUID:ar,clamp:We,euclideanModulo:ca,mapLinear:Ad,inverseLerp:Ld,lerp:Lr,damp:Pd,pingpong:Rd,smoothstep:Cd,smootherstep:Id,randInt:Dd,randFloat:Ud,randFloatSpread:Nd,seededRandom:Od,degToRad:Fd,radToDeg:Bd,isPowerOfTwo:Qo,ceilPowerOfTwo:zd,floorPowerOfTwo:Us,setQuaternionFromProperEuler:kd,normalize:Ze,denormalize:ji};class ie{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,s=this.y,o=t.elements;return this.x=o[0]*e+o[3]*s+o[6],this.y=o[1]*e+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(We(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const s=Math.cos(e),o=Math.sin(e),l=this.x-t.x,h=this.y-t.y;return this.x=l*s-h*o+t.x,this.y=l*o+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,s,o,l,h,c,d,f){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,s,o,l,h,c,d,f)}set(t,e,s,o,l,h,c,d,f){const p=this.elements;return p[0]=t,p[1]=o,p[2]=c,p[3]=e,p[4]=l,p[5]=d,p[6]=s,p[7]=h,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],this}extractBasis(t,e,s){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,o=e.elements,l=this.elements,h=s[0],c=s[3],d=s[6],f=s[1],p=s[4],m=s[7],v=s[2],x=s[5],S=s[8],M=o[0],y=o[3],g=o[6],P=o[1],b=o[4],D=o[7],B=o[2],I=o[5],U=o[8];return l[0]=h*M+c*P+d*B,l[3]=h*y+c*b+d*I,l[6]=h*g+c*D+d*U,l[1]=f*M+p*P+m*B,l[4]=f*y+p*b+m*I,l[7]=f*g+p*D+m*U,l[2]=v*M+x*P+S*B,l[5]=v*y+x*b+S*I,l[8]=v*g+x*D+S*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[1],o=t[2],l=t[3],h=t[4],c=t[5],d=t[6],f=t[7],p=t[8];return e*h*p-e*c*f-s*l*p+s*c*d+o*l*f-o*h*d}invert(){const t=this.elements,e=t[0],s=t[1],o=t[2],l=t[3],h=t[4],c=t[5],d=t[6],f=t[7],p=t[8],m=p*h-c*f,v=c*d-p*l,x=f*l-h*d,S=e*m+s*v+o*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return t[0]=m*M,t[1]=(o*f-p*s)*M,t[2]=(c*s-o*h)*M,t[3]=v*M,t[4]=(p*e-o*d)*M,t[5]=(o*l-c*e)*M,t[6]=x*M,t[7]=(s*d-f*e)*M,t[8]=(h*e-s*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,s,o,l,h,c){const d=Math.cos(l),f=Math.sin(l);return this.set(s*d,s*f,-s*(d*h+f*c)+h+t,-o*f,o*d,-o*(-f*h+d*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(yo.makeScale(t,e)),this}rotate(t){return this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,s,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,s=t.elements;for(let o=0;o<9;o++)if(e[o]!==s[o])return!1;return!0}fromArray(t,e=0){for(let s=0;s<9;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new ne;function th(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Dr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hd(){const r=Dr("canvas");return r.style.display="block",r}const Zl={};function Pr(r){r in Zl||(Zl[r]=!0,console.warn(r))}const ql=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yl=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Gn]:{transfer:Rs,primaries:Cs,toReference:r=>r,fromReference:r=>r},[ze]:{transfer:ve,primaries:Cs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fs]:{transfer:Rs,primaries:Is,toReference:r=>r.applyMatrix3(Yl),fromReference:r=>r.applyMatrix3(ql)},[la]:{transfer:ve,primaries:Is,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Yl),fromReference:r=>r.applyMatrix3(ql).convertLinearToSRGB()}},Gd=new Set([Gn,Fs]),pe={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Gd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const s=ns[t].toReference,o=ns[e].fromReference;return o(s(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ns[r].primaries},getTransfer:function(r){return r===fn?Rs:ns[r].transfer}};function er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ui;class eh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Dr("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),l=o.data;for(let h=0;h<l.length;h++)l[h]=er(l[h]/255)*255;return s.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let s=0;s<e.length;s++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[s]=Math.floor(er(e[s]/255)*255):e[s]=er(e[s]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vd=0;class nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ar(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let h=0,c=o.length;h<c;h++)o[h].isDataTexture?l.push(So(o[h].image)):l.push(So(o[h]))}else l=So(o);s.url=l}return e||(t.images[this.uuid]=s),s}}function So(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wd=0;class $e extends or{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,s=yn,o=yn,l=un,h=Rr,c=Mn,d=ei,f=$e.DEFAULT_ANISOTROPY,p=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=ar(),this.name="",this.source=new nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=h,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Ei?ze:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),e||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Ei:$c}set encoding(t){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ei?ze:fn}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Vc;$e.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,s=0,o=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,s,o){return this.x=t,this.y=e,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,s=this.y,o=this.z,l=this.w,h=t.elements;return this.x=h[0]*e+h[4]*s+h[8]*o+h[12]*l,this.y=h[1]*e+h[5]*s+h[9]*o+h[13]*l,this.z=h[2]*e+h[6]*s+h[10]*o+h[14]*l,this.w=h[3]*e+h[7]*s+h[11]*o+h[15]*l,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,s,o,l;const d=t.elements,f=d[0],p=d[4],m=d[8],v=d[1],x=d[5],S=d[9],M=d[2],y=d[6],g=d[10];if(Math.abs(p-v)<.01&&Math.abs(m-M)<.01&&Math.abs(S-y)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+M)<.1&&Math.abs(S+y)<.1&&Math.abs(f+x+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(f+1)/2,D=(x+1)/2,B=(g+1)/2,I=(p+v)/4,U=(m+M)/4,nt=(S+y)/4;return b>D&&b>B?b<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(b),o=I/s,l=U/s):D>B?D<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),s=I/o,l=nt/o):B<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),s=U/l,o=nt/l),this.set(s,o,l,e),this}let P=Math.sqrt((y-S)*(y-S)+(m-M)*(m-M)+(v-p)*(v-p));return Math.abs(P)<.001&&(P=1),this.x=(y-S)/P,this.y=(m-M)/P,this.z=(v-p)/P,this.w=Math.acos((f+x+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this.w=t.w+(e.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xd extends or{constructor(t=1,e=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const o={width:t,height:e,depth:1};s.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Ei?ze:fn),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new $e(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(t,e,s=1){(this.width!==t||this.height!==e||this.depth!==s)&&(this.width=t,this.height=e,this.depth=s,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Xd{constructor(t=1,e=1,s={}){super(t,e,s),this.isWebGLRenderTarget=!0}}class ih extends $e{constructor(t=null,e=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:s,depth:o},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zd extends $e{constructor(t=null,e=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:s,depth:o},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(t=0,e=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=s,this._w=o}static slerpFlat(t,e,s,o,l,h,c){let d=s[o+0],f=s[o+1],p=s[o+2],m=s[o+3];const v=l[h+0],x=l[h+1],S=l[h+2],M=l[h+3];if(c===0){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=m;return}if(c===1){t[e+0]=v,t[e+1]=x,t[e+2]=S,t[e+3]=M;return}if(m!==M||d!==v||f!==x||p!==S){let y=1-c;const g=d*v+f*x+p*S+m*M,P=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const B=Math.sqrt(b),I=Math.atan2(B,g*P);y=Math.sin(y*I)/B,c=Math.sin(c*I)/B}const D=c*P;if(d=d*y+v*D,f=f*y+x*D,p=p*y+S*D,m=m*y+M*D,y===1-c){const B=1/Math.sqrt(d*d+f*f+p*p+m*m);d*=B,f*=B,p*=B,m*=B}}t[e]=d,t[e+1]=f,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,s,o,l,h){const c=s[o],d=s[o+1],f=s[o+2],p=s[o+3],m=l[h],v=l[h+1],x=l[h+2],S=l[h+3];return t[e]=c*S+p*m+d*x-f*v,t[e+1]=d*S+p*v+f*m-c*x,t[e+2]=f*S+p*x+c*v-d*m,t[e+3]=p*S-c*m-d*v-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,o){return this._x=t,this._y=e,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const s=t._x,o=t._y,l=t._z,h=t._order,c=Math.cos,d=Math.sin,f=c(s/2),p=c(o/2),m=c(l/2),v=d(s/2),x=d(o/2),S=d(l/2);switch(h){case"XYZ":this._x=v*p*m+f*x*S,this._y=f*x*m-v*p*S,this._z=f*p*S+v*x*m,this._w=f*p*m-v*x*S;break;case"YXZ":this._x=v*p*m+f*x*S,this._y=f*x*m-v*p*S,this._z=f*p*S-v*x*m,this._w=f*p*m+v*x*S;break;case"ZXY":this._x=v*p*m-f*x*S,this._y=f*x*m+v*p*S,this._z=f*p*S+v*x*m,this._w=f*p*m-v*x*S;break;case"ZYX":this._x=v*p*m-f*x*S,this._y=f*x*m+v*p*S,this._z=f*p*S-v*x*m,this._w=f*p*m+v*x*S;break;case"YZX":this._x=v*p*m+f*x*S,this._y=f*x*m+v*p*S,this._z=f*p*S-v*x*m,this._w=f*p*m-v*x*S;break;case"XZY":this._x=v*p*m-f*x*S,this._y=f*x*m-v*p*S,this._z=f*p*S+v*x*m,this._w=f*p*m+v*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],o=e[4],l=e[8],h=e[1],c=e[5],d=e[9],f=e[2],p=e[6],m=e[10],v=s+c+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-d)*x,this._y=(l-f)*x,this._z=(h-o)*x}else if(s>c&&s>m){const x=2*Math.sqrt(1+s-c-m);this._w=(p-d)/x,this._x=.25*x,this._y=(o+h)/x,this._z=(l+f)/x}else if(c>m){const x=2*Math.sqrt(1+c-s-m);this._w=(l-f)/x,this._x=(o+h)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+m-s-c);this._w=(h-o)/x,this._x=(l+f)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,e/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,o=t._y,l=t._z,h=t._w,c=e._x,d=e._y,f=e._z,p=e._w;return this._x=s*p+h*c+o*f-l*d,this._y=o*p+h*d+l*c-s*f,this._z=l*p+h*f+s*d-o*c,this._w=h*p-s*c-o*d-l*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const s=this._x,o=this._y,l=this._z,h=this._w;let c=h*t._w+s*t._x+o*t._y+l*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=h,this._x=s,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-e;return this._w=x*h+e*this._w,this._x=x*s+e*this._x,this._y=x*o+e*this._y,this._z=x*l+e*this._z,this.normalize(),this}const f=Math.sqrt(d),p=Math.atan2(f,c),m=Math.sin((1-e)*p)/f,v=Math.sin(e*p)/f;return this._w=h*m+this._w*v,this._x=s*m+this._x*v,this._y=o*m+this._y*v,this._z=l*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,s){return this.copy(t).slerp(e,s)}random(){const t=Math.random(),e=Math.sqrt(1-t),s=Math.sqrt(t),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(e*Math.cos(o),s*Math.sin(l),s*Math.cos(l),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,s=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=s}set(t,e,s){return s===void 0&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,o=this.z,l=t.elements;return this.x=l[0]*e+l[3]*s+l[6]*o,this.y=l[1]*e+l[4]*s+l[7]*o,this.z=l[2]*e+l[5]*s+l[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,o=this.z,l=t.elements,h=1/(l[3]*e+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*e+l[4]*s+l[8]*o+l[12])*h,this.y=(l[1]*e+l[5]*s+l[9]*o+l[13])*h,this.z=(l[2]*e+l[6]*s+l[10]*o+l[14])*h,this}applyQuaternion(t){const e=this.x,s=this.y,o=this.z,l=t.x,h=t.y,c=t.z,d=t.w,f=2*(h*o-c*s),p=2*(c*e-l*o),m=2*(l*s-h*e);return this.x=e+d*f+h*m-c*p,this.y=s+d*p+c*f-l*m,this.z=o+d*m+l*p-h*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,o=this.z,l=t.elements;return this.x=l[0]*e+l[4]*s+l[8]*o,this.y=l[1]*e+l[5]*s+l[9]*o,this.z=l[2]*e+l[6]*s+l[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,o=t.y,l=t.z,h=e.x,c=e.y,d=e.z;return this.x=o*d-l*c,this.y=l*h-s*d,this.z=s*c-o*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(We(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return e*e+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const o=Math.sin(e)*t;return this.x=o*Math.sin(s),this.y=Math.cos(e)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,s=Math.sqrt(1-t**2);return this.x=s*Math.cos(e),this.y=s*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new G,jl=new Or;class Fr{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,s=t.count;e<s;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const s=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const l=s.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let h=0,c=l.count;h<c;h++)t.isMesh===!0?t.getVertexPosition(h,_n):_n.fromBufferAttribute(l,h),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),is.copy(s.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const o=t.children;for(let l=0,h=o.length;l<h;l++)this.expandByObject(o[l],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,s;return t.normal.x>0?(e=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),e<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),rs.subVectors(this.max,Er),Ni.subVectors(t.a,Er),Oi.subVectors(t.b,Er),Fi.subVectors(t.c,Er),Zn.subVectors(Oi,Ni),qn.subVectors(Fi,Oi),fi.subVectors(Ni,Fi);let e=[0,-Zn.z,Zn.y,0,-qn.z,qn.y,0,-fi.z,fi.y,Zn.z,0,-Zn.x,qn.z,0,-qn.x,fi.z,0,-fi.x,-Zn.y,Zn.x,0,-qn.y,qn.x,0,-fi.y,fi.x,0];return!To(e,Ni,Oi,Fi,rs)||(e=[1,0,0,0,1,0,0,0,1],!To(e,Ni,Oi,Fi,rs))?!1:(ss.crossVectors(Zn,qn),e=[ss.x,ss.y,ss.z],To(e,Ni,Oi,Fi,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new G,new G,new G,new G,new G,new G,new G,new G],_n=new G,is=new Fr,Ni=new G,Oi=new G,Fi=new G,Zn=new G,qn=new G,fi=new G,Er=new G,rs=new G,ss=new G,pi=new G;function To(r,t,e,s,o){for(let l=0,h=r.length-3;l<=h;l+=3){pi.fromArray(r,l);const c=o.x*Math.abs(pi.x)+o.y*Math.abs(pi.y)+o.z*Math.abs(pi.z),d=t.dot(pi),f=e.dot(pi),p=s.dot(pi);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>c)return!1}return!0}const qd=new Fr,Tr=new G,bo=new G;class Br{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const s=this.center;e!==void 0?s.copy(e):qd.setFromPoints(t).getCenter(s);let o=0;for(let l=0,h=t.length;l<h;l++)o=Math.max(o,s.distanceToSquared(t[l]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const s=this.center.distanceToSquared(t);return e.copy(t),s>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const s=Math.sqrt(e),o=(s-this.radius)*.5;this.center.addScaledVector(Tr,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(bo)),this.expandByPoint(Tr.copy(t.center).sub(bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new G,wo=new G,os=new G,Yn=new G,Ao=new G,as=new G,Lo=new G;class Bs{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const s=e.dot(this.direction);return s<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,s,o){wo.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(wo);const l=t.distanceTo(e)*.5,h=-this.direction.dot(os),c=Yn.dot(this.direction),d=-Yn.dot(os),f=Yn.lengthSq(),p=Math.abs(1-h*h);let m,v,x,S;if(p>0)if(m=h*d-c,v=h*c-d,S=l*p,m>=0)if(v>=-S)if(v<=S){const M=1/p;m*=M,v*=M,x=m*(m+h*v+2*c)+v*(h*m+v+2*d)+f}else v=l,m=Math.max(0,-(h*v+c)),x=-m*m+v*(v+2*d)+f;else v=-l,m=Math.max(0,-(h*v+c)),x=-m*m+v*(v+2*d)+f;else v<=-S?(m=Math.max(0,-(-h*l+c)),v=m>0?-l:Math.min(Math.max(-l,-d),l),x=-m*m+v*(v+2*d)+f):v<=S?(m=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+f):(m=Math.max(0,-(h*l+c)),v=m>0?l:Math.min(Math.max(-l,-d),l),x=-m*m+v*(v+2*d)+f);else v=h>0?-l:l,m=Math.max(0,-(h*v+c)),x=-m*m+v*(v+2*d)+f;return s&&s.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(wo).addScaledVector(os,v),x}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const s=Un.dot(this.direction),o=Un.dot(Un)-s*s,l=t.radius*t.radius;if(o>l)return null;const h=Math.sqrt(l-o),c=s-h,d=s+h;return d<0?null:c<0?this.at(d,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/e;return s>=0?s:null}intersectPlane(t,e){const s=this.distanceToPlane(t);return s===null?null:this.at(s,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let s,o,l,h,c,d;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return f>=0?(s=(t.min.x-v.x)*f,o=(t.max.x-v.x)*f):(s=(t.max.x-v.x)*f,o=(t.min.x-v.x)*f),p>=0?(l=(t.min.y-v.y)*p,h=(t.max.y-v.y)*p):(l=(t.max.y-v.y)*p,h=(t.min.y-v.y)*p),s>h||l>o||((l>s||isNaN(s))&&(s=l),(h<o||isNaN(o))&&(o=h),m>=0?(c=(t.min.z-v.z)*m,d=(t.max.z-v.z)*m):(c=(t.max.z-v.z)*m,d=(t.min.z-v.z)*m),s>d||c>o)||((c>s||s!==s)&&(s=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,s,o,l){Ao.subVectors(e,t),as.subVectors(s,t),Lo.crossVectors(Ao,as);let h=this.direction.dot(Lo),c;if(h>0){if(o)return null;c=1}else if(h<0)c=-1,h=-h;else return null;Yn.subVectors(this.origin,t);const d=c*this.direction.dot(as.crossVectors(Yn,as));if(d<0)return null;const f=c*this.direction.dot(Ao.cross(Yn));if(f<0||d+f>h)return null;const p=-c*Yn.dot(Lo);return p<0?null:this.at(p/h,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,s,o,l,h,c,d,f,p,m,v,x,S,M,y){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,s,o,l,h,c,d,f,p,m,v,x,S,M,y)}set(t,e,s,o,l,h,c,d,f,p,m,v,x,S,M,y){const g=this.elements;return g[0]=t,g[4]=e,g[8]=s,g[12]=o,g[1]=l,g[5]=h,g[9]=c,g[13]=d,g[2]=f,g[6]=p,g[10]=m,g[14]=v,g[3]=x,g[7]=S,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],this}copyPosition(t){const e=this.elements,s=t.elements;return e[12]=s[12],e[13]=s[13],e[14]=s[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,s){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,e,s){return this.set(t.x,e.x,s.x,0,t.y,e.y,s.y,0,t.z,e.z,s.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,s=t.elements,o=1/Bi.setFromMatrixColumn(t,0).length(),l=1/Bi.setFromMatrixColumn(t,1).length(),h=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=s[0]*o,e[1]=s[1]*o,e[2]=s[2]*o,e[3]=0,e[4]=s[4]*l,e[5]=s[5]*l,e[6]=s[6]*l,e[7]=0,e[8]=s[8]*h,e[9]=s[9]*h,e[10]=s[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,s=t.x,o=t.y,l=t.z,h=Math.cos(s),c=Math.sin(s),d=Math.cos(o),f=Math.sin(o),p=Math.cos(l),m=Math.sin(l);if(t.order==="XYZ"){const v=h*p,x=h*m,S=c*p,M=c*m;e[0]=d*p,e[4]=-d*m,e[8]=f,e[1]=x+S*f,e[5]=v-M*f,e[9]=-c*d,e[2]=M-v*f,e[6]=S+x*f,e[10]=h*d}else if(t.order==="YXZ"){const v=d*p,x=d*m,S=f*p,M=f*m;e[0]=v+M*c,e[4]=S*c-x,e[8]=h*f,e[1]=h*m,e[5]=h*p,e[9]=-c,e[2]=x*c-S,e[6]=M+v*c,e[10]=h*d}else if(t.order==="ZXY"){const v=d*p,x=d*m,S=f*p,M=f*m;e[0]=v-M*c,e[4]=-h*m,e[8]=S+x*c,e[1]=x+S*c,e[5]=h*p,e[9]=M-v*c,e[2]=-h*f,e[6]=c,e[10]=h*d}else if(t.order==="ZYX"){const v=h*p,x=h*m,S=c*p,M=c*m;e[0]=d*p,e[4]=S*f-x,e[8]=v*f+M,e[1]=d*m,e[5]=M*f+v,e[9]=x*f-S,e[2]=-f,e[6]=c*d,e[10]=h*d}else if(t.order==="YZX"){const v=h*d,x=h*f,S=c*d,M=c*f;e[0]=d*p,e[4]=M-v*m,e[8]=S*m+x,e[1]=m,e[5]=h*p,e[9]=-c*p,e[2]=-f*p,e[6]=x*m+S,e[10]=v-M*m}else if(t.order==="XZY"){const v=h*d,x=h*f,S=c*d,M=c*f;e[0]=d*p,e[4]=-m,e[8]=f*p,e[1]=v*m+M,e[5]=h*p,e[9]=x*m-S,e[2]=S*m-x,e[6]=c*p,e[10]=M*m+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yd,t,jd)}lookAt(t,e,s){const o=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),jn.crossVectors(s,Qe),jn.lengthSq()===0&&(Math.abs(s.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),jn.crossVectors(s,Qe)),jn.normalize(),ls.crossVectors(Qe,jn),o[0]=jn.x,o[4]=ls.x,o[8]=Qe.x,o[1]=jn.y,o[5]=ls.y,o[9]=Qe.y,o[2]=jn.z,o[6]=ls.z,o[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,o=e.elements,l=this.elements,h=s[0],c=s[4],d=s[8],f=s[12],p=s[1],m=s[5],v=s[9],x=s[13],S=s[2],M=s[6],y=s[10],g=s[14],P=s[3],b=s[7],D=s[11],B=s[15],I=o[0],U=o[4],nt=o[8],w=o[12],C=o[1],$=o[5],rt=o[9],pt=o[13],F=o[2],J=o[6],tt=o[10],st=o[14],X=o[3],V=o[7],z=o[11],et=o[15];return l[0]=h*I+c*C+d*F+f*X,l[4]=h*U+c*$+d*J+f*V,l[8]=h*nt+c*rt+d*tt+f*z,l[12]=h*w+c*pt+d*st+f*et,l[1]=p*I+m*C+v*F+x*X,l[5]=p*U+m*$+v*J+x*V,l[9]=p*nt+m*rt+v*tt+x*z,l[13]=p*w+m*pt+v*st+x*et,l[2]=S*I+M*C+y*F+g*X,l[6]=S*U+M*$+y*J+g*V,l[10]=S*nt+M*rt+y*tt+g*z,l[14]=S*w+M*pt+y*st+g*et,l[3]=P*I+b*C+D*F+B*X,l[7]=P*U+b*$+D*J+B*V,l[11]=P*nt+b*rt+D*tt+B*z,l[15]=P*w+b*pt+D*st+B*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[4],o=t[8],l=t[12],h=t[1],c=t[5],d=t[9],f=t[13],p=t[2],m=t[6],v=t[10],x=t[14],S=t[3],M=t[7],y=t[11],g=t[15];return S*(+l*d*m-o*f*m-l*c*v+s*f*v+o*c*x-s*d*x)+M*(+e*d*x-e*f*v+l*h*v-o*h*x+o*f*p-l*d*p)+y*(+e*f*m-e*c*x-l*h*m+s*h*x+l*c*p-s*f*p)+g*(-o*c*p-e*d*m+e*c*v+o*h*m-s*h*v+s*d*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=s),this}invert(){const t=this.elements,e=t[0],s=t[1],o=t[2],l=t[3],h=t[4],c=t[5],d=t[6],f=t[7],p=t[8],m=t[9],v=t[10],x=t[11],S=t[12],M=t[13],y=t[14],g=t[15],P=m*y*f-M*v*f+M*d*x-c*y*x-m*d*g+c*v*g,b=S*v*f-p*y*f-S*d*x+h*y*x+p*d*g-h*v*g,D=p*M*f-S*m*f+S*c*x-h*M*x-p*c*g+h*m*g,B=S*m*d-p*M*d-S*c*v+h*M*v+p*c*y-h*m*y,I=e*P+s*b+o*D+l*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return t[0]=P*U,t[1]=(M*v*l-m*y*l-M*o*x+s*y*x+m*o*g-s*v*g)*U,t[2]=(c*y*l-M*d*l+M*o*f-s*y*f-c*o*g+s*d*g)*U,t[3]=(m*d*l-c*v*l-m*o*f+s*v*f+c*o*x-s*d*x)*U,t[4]=b*U,t[5]=(p*y*l-S*v*l+S*o*x-e*y*x-p*o*g+e*v*g)*U,t[6]=(S*d*l-h*y*l-S*o*f+e*y*f+h*o*g-e*d*g)*U,t[7]=(h*v*l-p*d*l+p*o*f-e*v*f-h*o*x+e*d*x)*U,t[8]=D*U,t[9]=(S*m*l-p*M*l-S*s*x+e*M*x+p*s*g-e*m*g)*U,t[10]=(h*M*l-S*c*l+S*s*f-e*M*f-h*s*g+e*c*g)*U,t[11]=(p*c*l-h*m*l-p*s*f+e*m*f+h*s*x-e*c*x)*U,t[12]=B*U,t[13]=(p*M*o-S*m*o+S*s*v-e*M*v-p*s*y+e*m*y)*U,t[14]=(S*c*o-h*M*o-S*s*d+e*M*d+h*s*y-e*c*y)*U,t[15]=(h*m*o-p*c*o+p*s*d-e*m*d-h*s*v+e*c*v)*U,this}scale(t){const e=this.elements,s=t.x,o=t.y,l=t.z;return e[0]*=s,e[4]*=o,e[8]*=l,e[1]*=s,e[5]*=o,e[9]*=l,e[2]*=s,e[6]*=o,e[10]*=l,e[3]*=s,e[7]*=o,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,s,o))}makeTranslation(t,e,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,s,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const s=Math.cos(e),o=Math.sin(e),l=1-s,h=t.x,c=t.y,d=t.z,f=l*h,p=l*c;return this.set(f*h+s,f*c-o*d,f*d+o*c,0,f*c+o*d,p*c+s,p*d-o*h,0,f*d-o*c,p*d+o*h,l*d*d+s,0,0,0,0,1),this}makeScale(t,e,s){return this.set(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,e,s,o,l,h){return this.set(1,s,l,0,t,1,h,0,e,o,1,0,0,0,0,1),this}compose(t,e,s){const o=this.elements,l=e._x,h=e._y,c=e._z,d=e._w,f=l+l,p=h+h,m=c+c,v=l*f,x=l*p,S=l*m,M=h*p,y=h*m,g=c*m,P=d*f,b=d*p,D=d*m,B=s.x,I=s.y,U=s.z;return o[0]=(1-(M+g))*B,o[1]=(x+D)*B,o[2]=(S-b)*B,o[3]=0,o[4]=(x-D)*I,o[5]=(1-(v+g))*I,o[6]=(y+P)*I,o[7]=0,o[8]=(S+b)*U,o[9]=(y-P)*U,o[10]=(1-(v+M))*U,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,s){const o=this.elements;let l=Bi.set(o[0],o[1],o[2]).length();const h=Bi.set(o[4],o[5],o[6]).length(),c=Bi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),t.x=o[12],t.y=o[13],t.z=o[14],gn.copy(this);const f=1/l,p=1/h,m=1/c;return gn.elements[0]*=f,gn.elements[1]*=f,gn.elements[2]*=f,gn.elements[4]*=p,gn.elements[5]*=p,gn.elements[6]*=p,gn.elements[8]*=m,gn.elements[9]*=m,gn.elements[10]*=m,e.setFromRotationMatrix(gn),s.x=l,s.y=h,s.z=c,this}makePerspective(t,e,s,o,l,h,c=kn){const d=this.elements,f=2*l/(e-t),p=2*l/(s-o),m=(e+t)/(e-t),v=(s+o)/(s-o);let x,S;if(c===kn)x=-(h+l)/(h-l),S=-2*h*l/(h-l);else if(c===Ds)x=-h/(h-l),S=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=S,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,s,o,l,h,c=kn){const d=this.elements,f=1/(e-t),p=1/(s-o),m=1/(h-l),v=(e+t)*f,x=(s+o)*p;let S,M;if(c===kn)S=(h+l)*m,M=-2*m;else if(c===Ds)S=l*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=M,d[14]=-S,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,s=t.elements;for(let o=0;o<16;o++)if(e[o]!==s[o])return!1;return!0}fromArray(t,e=0){for(let s=0;s<16;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t[e+9]=s[9],t[e+10]=s[10],t[e+11]=s[11],t[e+12]=s[12],t[e+13]=s[13],t[e+14]=s[14],t[e+15]=s[15],t}}const Bi=new G,gn=new Se,Yd=new G(0,0,0),jd=new G(1,1,1),jn=new G,ls=new G,Qe=new G,Kl=new Se,$l=new Or;class zs{constructor(t=0,e=0,s=0,o=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,s,o=this._order){return this._x=t,this._y=e,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,s=!0){const o=t.elements,l=o[0],h=o[4],c=o[8],d=o[1],f=o[5],p=o[9],m=o[2],v=o[6],x=o[10];switch(e){case"XYZ":this._y=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-m,l),this._z=0);break;case"ZXY":this._x=Math.asin(We(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-h,f)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-We(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-h,f));break;case"YZX":this._z=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,s){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,s)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class ha{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kd=0;const Jl=new G,zi=new Or,Nn=new Se,cs=new G,br=new G,$d=new G,Jd=new Or,Ql=new G(1,0,0),tc=new G(0,1,0),ec=new G(0,0,1),Qd={type:"added"},tf={type:"removed"};class Ue extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new G,e=new zs,s=new Or,o=new G(1,1,1);function l(){s.setFromEuler(e,!1)}function h(){e.setFromQuaternion(s,void 0,!1)}e._onChange(l),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Se},normalMatrix:{value:new ne}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Ql,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ql,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,s){t.isVector3?cs.copy(t):cs.set(t,e,s);const o=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(br,cs,this.up):Nn.lookAt(cs,br,this.up),this.quaternion.setFromRotationMatrix(Nn),o&&(Nn.extractRotation(o.matrixWorld),zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let s=0,o=this.children.length;s<o;s++){const h=this.children[s].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e,s=[]){this[t]===e&&s.push(this);const o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].getObjectsByProperty(t,e,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,$d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let s=0,o=e.length;s<o;s++)e[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let s=0,o=e.length;s<o;s++)e[s].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let s=0,o=e.length;s<o;s++){const l=e[s];(l.matrixWorldAutoUpdate===!0||t===!0)&&l.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const s=this.parent;if(t===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let l=0,h=o.length;l<h;l++){const c=o[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",s={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const m=d[f];l(t.shapes,m)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(l(t.materials,this.material[d]));o.material=c}else o.material=l(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(t.animations,d))}}if(e){const c=h(t.geometries),d=h(t.materials),f=h(t.textures),p=h(t.images),m=h(t.shapes),v=h(t.skeletons),x=h(t.animations),S=h(t.nodes);c.length>0&&(s.geometries=c),d.length>0&&(s.materials=d),f.length>0&&(s.textures=f),p.length>0&&(s.images=p),m.length>0&&(s.shapes=m),v.length>0&&(s.skeletons=v),x.length>0&&(s.animations=x),S.length>0&&(s.nodes=S)}return s.object=o,s;function h(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}Ue.DEFAULT_UP=new G(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new G,On=new G,Po=new G,Fn=new G,ki=new G,Hi=new G,nc=new G,Ro=new G,Co=new G,Io=new G;let hs=!1;class xn{constructor(t=new G,e=new G,s=new G){this.a=t,this.b=e,this.c=s}static getNormal(t,e,s,o){o.subVectors(s,e),vn.subVectors(t,e),o.cross(vn);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(t,e,s,o,l){vn.subVectors(o,e),On.subVectors(s,e),Po.subVectors(t,e);const h=vn.dot(vn),c=vn.dot(On),d=vn.dot(Po),f=On.dot(On),p=On.dot(Po),m=h*f-c*c;if(m===0)return l.set(0,0,0),null;const v=1/m,x=(f*d-c*p)*v,S=(h*p-c*d)*v;return l.set(1-x-S,S,x)}static containsPoint(t,e,s,o){return this.getBarycoord(t,e,s,o,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(t,e,s,o,l,h,c,d){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),this.getInterpolation(t,e,s,o,l,h,c,d)}static getInterpolation(t,e,s,o,l,h,c,d){return this.getBarycoord(t,e,s,o,Fn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Fn.x),d.addScaledVector(h,Fn.y),d.addScaledVector(c,Fn.z),d)}static isFrontFacing(t,e,s,o){return vn.subVectors(s,e),On.subVectors(t,e),vn.cross(On).dot(o)<0}set(t,e,s){return this.a.copy(t),this.b.copy(e),this.c.copy(s),this}setFromPointsAndIndices(t,e,s,o){return this.a.copy(t[e]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,s,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),vn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,s,o,l){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),xn.getInterpolation(t,this.a,this.b,this.c,e,s,o,l)}getInterpolation(t,e,s,o,l){return xn.getInterpolation(t,this.a,this.b,this.c,e,s,o,l)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const s=this.a,o=this.b,l=this.c;let h,c;ki.subVectors(o,s),Hi.subVectors(l,s),Ro.subVectors(t,s);const d=ki.dot(Ro),f=Hi.dot(Ro);if(d<=0&&f<=0)return e.copy(s);Co.subVectors(t,o);const p=ki.dot(Co),m=Hi.dot(Co);if(p>=0&&m<=p)return e.copy(o);const v=d*m-p*f;if(v<=0&&d>=0&&p<=0)return h=d/(d-p),e.copy(s).addScaledVector(ki,h);Io.subVectors(t,l);const x=ki.dot(Io),S=Hi.dot(Io);if(S>=0&&x<=S)return e.copy(l);const M=x*f-d*S;if(M<=0&&f>=0&&S<=0)return c=f/(f-S),e.copy(s).addScaledVector(Hi,c);const y=p*S-x*m;if(y<=0&&m-p>=0&&x-S>=0)return nc.subVectors(l,o),c=(m-p)/(m-p+(x-S)),e.copy(o).addScaledVector(nc,c);const g=1/(y+M+v);return h=M*g,c=v*g,e.copy(s).addScaledVector(ki,h).addScaledVector(Hi,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Do(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class le{constructor(t,e,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,s)}set(t,e,s){if(e===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,s,o=pe.workingColorSpace){return this.r=t,this.g=e,this.b=s,pe.toWorkingColorSpace(this,o),this}setHSL(t,e,s,o=pe.workingColorSpace){if(t=ca(t,1),e=We(e,0,1),s=We(s,0,1),e===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+e):s+e-s*e,h=2*s-l;this.r=Do(h,l,t+1/3),this.g=Do(h,l,t),this.b=Do(h,l,t-1/3)}return pe.toWorkingColorSpace(this,o),this}setStyle(t,e=ze){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const h=o[1],c=o[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=o[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const s=rh[t.toLowerCase()];return s!==void 0?this.setHex(s,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return pe.fromWorkingColorSpace(Ve.copy(this),t),Math.round(We(Ve.r*255,0,255))*65536+Math.round(We(Ve.g*255,0,255))*256+Math.round(We(Ve.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ve.copy(this),e);const s=Ve.r,o=Ve.g,l=Ve.b,h=Math.max(s,o,l),c=Math.min(s,o,l);let d,f;const p=(c+h)/2;if(c===h)d=0,f=0;else{const m=h-c;switch(f=p<=.5?m/(h+c):m/(2-h-c),h){case s:d=(o-l)/m+(o<l?6:0);break;case o:d=(l-s)/m+2;break;case l:d=(s-o)/m+4;break}d/=6}return t.h=d,t.s=f,t.l=p,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=ze){pe.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,s=Ve.g,o=Ve.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,e,s){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,s){return this.r=t.r+(e.r-t.r)*s,this.g=t.g+(e.g-t.g)*s,this.b=t.b+(e.b-t.b)*s,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(us);const s=Lr(Kn.h,us.h,e),o=Lr(Kn.s,us.s,e),l=Lr(Kn.l,us.l,e);return this.setHSL(s,o,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,s=this.g,o=this.b,l=t.elements;return this.r=l[0]*e+l[3]*s+l[6]*o,this.g=l[1]*e+l[4]*s+l[7]*o,this.b=l[2]*e+l[5]*s+l[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new le;le.NAMES=rh;let ef=0;class wi extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=tr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=qo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const s=t[e];if(s===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[e]=s}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(s.blending=this.blending),this.side!==ni&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zo&&(s.blendSrc=this.blendSrc),this.blendDst!==qo&&(s.blendDst=this.blendDst),this.blendEquation!==xi&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const h=[];for(const c in l){const d=l[c];delete d.metadata,h.push(d)}return h}if(e){const l=o(t.textures),h=o(t.images);l.length>0&&(s.textures=l),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let s=null;if(e!==null){const o=e.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=e[l].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ur extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new G,ds=new ie;class Sn{constructor(t,e,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=s,this.usage=Vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,s){t*=this.itemSize,s*=e.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[t+o]=e.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,s=this.count;e<s;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,s=this.count;e<s;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,s=this.count;e<s;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let s=this.array[t*this.itemSize+e];return this.normalized&&(s=ji(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Ze(s,this.array)),this.array[t*this.itemSize+e]=s,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=s,this}setXYZ(t,e,s,o){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),s=Ze(s,this.array),o=Ze(o,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,e,s,o,l){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),s=Ze(s,this.array),o=Ze(o,this.array),l=Ze(l,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}}class sh extends Sn{constructor(t,e,s){super(new Uint16Array(t),e,s)}}class oh extends Sn{constructor(t,e,s){super(new Uint32Array(t),e,s)}}class ke extends Sn{constructor(t,e,s){super(new Float32Array(t),e,s)}}let nf=0;const hn=new Se,Uo=new Ue,Gi=new G,tn=new Fr,wr=new Fr,Ie=new G;class Je extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?oh:sh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,s=0){this.groups.push({start:t,count:e,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ne().getNormalMatrix(t);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,s){return hn.makeTranslation(t,e,s),this.applyMatrix4(hn),this}scale(t,e,s){return hn.makeScale(t,e,s),this.applyMatrix4(hn),this}lookAt(t){return Uo.lookAt(t),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=[];for(let s=0,o=t.length;s<o;s++){const l=t[s];e.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const l=e[s];tn.setFromBufferAttribute(l),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let l=0,h=e.length;l<h;l++){const c=e[l];wr.setFromBufferAttribute(c),this.morphTargetsRelative?(Ie.addVectors(tn.min,wr.min),tn.expandByPoint(Ie),Ie.addVectors(tn.max,wr.max),tn.expandByPoint(Ie)):(tn.expandByPoint(wr.min),tn.expandByPoint(wr.max))}tn.getCenter(s);let o=0;for(let l=0,h=t.count;l<h;l++)Ie.fromBufferAttribute(t,l),o=Math.max(o,s.distanceToSquared(Ie));if(e)for(let l=0,h=e.length;l<h;l++){const c=e[l],d=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)Ie.fromBufferAttribute(c,f),d&&(Gi.fromBufferAttribute(t,f),Ie.add(Gi)),o=Math.max(o,s.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.array,o=e.position.array,l=e.normal.array,h=e.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,f=[],p=[];for(let C=0;C<c;C++)f[C]=new G,p[C]=new G;const m=new G,v=new G,x=new G,S=new ie,M=new ie,y=new ie,g=new G,P=new G;function b(C,$,rt){m.fromArray(o,C*3),v.fromArray(o,$*3),x.fromArray(o,rt*3),S.fromArray(h,C*2),M.fromArray(h,$*2),y.fromArray(h,rt*2),v.sub(m),x.sub(m),M.sub(S),y.sub(S);const pt=1/(M.x*y.y-y.x*M.y);isFinite(pt)&&(g.copy(v).multiplyScalar(y.y).addScaledVector(x,-M.y).multiplyScalar(pt),P.copy(x).multiplyScalar(M.x).addScaledVector(v,-y.x).multiplyScalar(pt),f[C].add(g),f[$].add(g),f[rt].add(g),p[C].add(P),p[$].add(P),p[rt].add(P))}let D=this.groups;D.length===0&&(D=[{start:0,count:s.length}]);for(let C=0,$=D.length;C<$;++C){const rt=D[C],pt=rt.start,F=rt.count;for(let J=pt,tt=pt+F;J<tt;J+=3)b(s[J+0],s[J+1],s[J+2])}const B=new G,I=new G,U=new G,nt=new G;function w(C){U.fromArray(l,C*3),nt.copy(U);const $=f[C];B.copy($),B.sub(U.multiplyScalar(U.dot($))).normalize(),I.crossVectors(nt,$);const pt=I.dot(p[C])<0?-1:1;d[C*4]=B.x,d[C*4+1]=B.y,d[C*4+2]=B.z,d[C*4+3]=pt}for(let C=0,$=D.length;C<$;++C){const rt=D[C],pt=rt.start,F=rt.count;for(let J=pt,tt=pt+F;J<tt;J+=3)w(s[J+0]),w(s[J+1]),w(s[J+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",s);else for(let v=0,x=s.count;v<x;v++)s.setXYZ(v,0,0,0);const o=new G,l=new G,h=new G,c=new G,d=new G,f=new G,p=new G,m=new G;if(t)for(let v=0,x=t.count;v<x;v+=3){const S=t.getX(v+0),M=t.getX(v+1),y=t.getX(v+2);o.fromBufferAttribute(e,S),l.fromBufferAttribute(e,M),h.fromBufferAttribute(e,y),p.subVectors(h,l),m.subVectors(o,l),p.cross(m),c.fromBufferAttribute(s,S),d.fromBufferAttribute(s,M),f.fromBufferAttribute(s,y),c.add(p),d.add(p),f.add(p),s.setXYZ(S,c.x,c.y,c.z),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(y,f.x,f.y,f.z)}else for(let v=0,x=e.count;v<x;v+=3)o.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),h.fromBufferAttribute(e,v+2),p.subVectors(h,l),m.subVectors(o,l),p.cross(m),s.setXYZ(v+0,p.x,p.y,p.z),s.setXYZ(v+1,p.x,p.y,p.z),s.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,s=t.count;e<s;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(c,d){const f=c.array,p=c.itemSize,m=c.normalized,v=new f.constructor(d.length*p);let x=0,S=0;for(let M=0,y=d.length;M<y;M++){c.isInterleavedBufferAttribute?x=d[M]*c.data.stride+c.offset:x=d[M]*p;for(let g=0;g<p;g++)v[S++]=f[x++]}return new Sn(v,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,s=this.index.array,o=this.attributes;for(const c in o){const d=o[c],f=t(d,s);e.setAttribute(c,f)}const l=this.morphAttributes;for(const c in l){const d=[],f=l[c];for(let p=0,m=f.length;p<m;p++){const v=f[p],x=t(v,s);d.push(x)}e.morphAttributes[c]=d}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let c=0,d=h.length;c<d;c++){const f=h[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const s=this.attributes;for(const d in s){const f=s[d];t.data.attributes[d]=f.toJSON(t.data)}const o={};let l=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let m=0,v=f.length;m<v;m++){const x=f[m];p.push(x.toJSON(t.data))}p.length>0&&(o[d]=p,l=!0)}l&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(e));const o=t.attributes;for(const f in o){const p=o[f];this.setAttribute(f,p.clone(e))}const l=t.morphAttributes;for(const f in l){const p=[],m=l[f];for(let v=0,x=m.length;v<x;v++)p.push(m[v].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let f=0,p=h.length;f<p;f++){const m=h[f];this.addGroup(m.start,m.count,m.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new Se,mi=new Bs,fs=new Br,rc=new G,Vi=new G,Wi=new G,Xi=new G,No=new G,ps=new G,ms=new ie,_s=new ie,gs=new ie,sc=new G,oc=new G,ac=new G,vs=new G,xs=new G;class en extends Ue{constructor(t=new Je,e=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const o=e[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(t,e){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,h=s.morphTargetsRelative;e.fromBufferAttribute(o,t);const c=this.morphTargetInfluences;if(l&&c){ps.set(0,0,0);for(let d=0,f=l.length;d<f;d++){const p=c[d],m=l[d];p!==0&&(No.fromBufferAttribute(m,t),h?ps.addScaledVector(No,p):ps.addScaledVector(No.sub(e),p))}e.add(ps)}return e}raycast(t,e){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),fs.copy(s.boundingSphere),fs.applyMatrix4(l),mi.copy(t.ray).recast(t.near),!(fs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(fs,rc)===null||mi.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(ic.copy(l).invert(),mi.copy(t.ray).applyMatrix4(ic),!(s.boundingBox!==null&&mi.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,s){let o;const l=this.geometry,h=this.material,c=l.index,d=l.attributes.position,f=l.attributes.uv,p=l.attributes.uv1,m=l.attributes.normal,v=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(h))for(let S=0,M=v.length;S<M;S++){const y=v[S],g=h[y.materialIndex],P=Math.max(y.start,x.start),b=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let D=P,B=b;D<B;D+=3){const I=c.getX(D),U=c.getX(D+1),nt=c.getX(D+2);o=ys(this,g,t,s,f,p,m,I,U,nt),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{const S=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let y=S,g=M;y<g;y+=3){const P=c.getX(y),b=c.getX(y+1),D=c.getX(y+2);o=ys(this,h,t,s,f,p,m,P,b,D),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}else if(d!==void 0)if(Array.isArray(h))for(let S=0,M=v.length;S<M;S++){const y=v[S],g=h[y.materialIndex],P=Math.max(y.start,x.start),b=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let D=P,B=b;D<B;D+=3){const I=D,U=D+1,nt=D+2;o=ys(this,g,t,s,f,p,m,I,U,nt),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{const S=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let y=S,g=M;y<g;y+=3){const P=y,b=y+1,D=y+2;o=ys(this,h,t,s,f,p,m,P,b,D),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}}}function rf(r,t,e,s,o,l,h,c){let d;if(t.side===je?d=s.intersectTriangle(h,l,o,!0,c):d=s.intersectTriangle(o,l,h,t.side===ni,c),d===null)return null;xs.copy(c),xs.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(xs);return f<e.near||f>e.far?null:{distance:f,point:xs.clone(),object:r}}function ys(r,t,e,s,o,l,h,c,d,f){r.getVertexPosition(c,Vi),r.getVertexPosition(d,Wi),r.getVertexPosition(f,Xi);const p=rf(r,t,e,s,Vi,Wi,Xi,vs);if(p){o&&(ms.fromBufferAttribute(o,c),_s.fromBufferAttribute(o,d),gs.fromBufferAttribute(o,f),p.uv=xn.getInterpolation(vs,Vi,Wi,Xi,ms,_s,gs,new ie)),l&&(ms.fromBufferAttribute(l,c),_s.fromBufferAttribute(l,d),gs.fromBufferAttribute(l,f),p.uv1=xn.getInterpolation(vs,Vi,Wi,Xi,ms,_s,gs,new ie),p.uv2=p.uv1),h&&(sc.fromBufferAttribute(h,c),oc.fromBufferAttribute(h,d),ac.fromBufferAttribute(h,f),p.normal=xn.getInterpolation(vs,Vi,Wi,Xi,sc,oc,ac,new G),p.normal.dot(s.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:d,c:f,normal:new G,materialIndex:0};xn.getNormal(Vi,Wi,Xi,m.normal),p.face=m}return p}class zr extends Je{constructor(t=1,e=1,s=1,o=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:s,widthSegments:o,heightSegments:l,depthSegments:h};const c=this;o=Math.floor(o),l=Math.floor(l),h=Math.floor(h);const d=[],f=[],p=[],m=[];let v=0,x=0;S("z","y","x",-1,-1,s,e,t,h,l,0),S("z","y","x",1,-1,s,e,-t,h,l,1),S("x","z","y",1,1,t,s,e,o,h,2),S("x","z","y",1,-1,t,s,-e,o,h,3),S("x","y","z",1,-1,t,e,s,o,l,4),S("x","y","z",-1,-1,t,e,-s,o,l,5),this.setIndex(d),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(m,2));function S(M,y,g,P,b,D,B,I,U,nt,w){const C=D/U,$=B/nt,rt=D/2,pt=B/2,F=I/2,J=U+1,tt=nt+1;let st=0,X=0;const V=new G;for(let z=0;z<tt;z++){const et=z*$-pt;for(let ot=0;ot<J;ot++){const W=ot*C-rt;V[M]=W*P,V[y]=et*b,V[g]=F,f.push(V.x,V.y,V.z),V[M]=0,V[y]=0,V[g]=I>0?1:-1,p.push(V.x,V.y,V.z),m.push(ot/U),m.push(1-z/nt),st+=1}}for(let z=0;z<nt;z++)for(let et=0;et<U;et++){const ot=v+et+J*z,W=v+et+J*(z+1),it=v+(et+1)+J*(z+1),lt=v+(et+1)+J*z;d.push(ot,W,lt),d.push(W,it,lt),X+=6}c.addGroup(x,X,w),x+=X,v+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(r){const t={};for(const e in r){t[e]={};for(const s in r[e]){const o=r[e][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][s]=null):t[e][s]=o.clone():Array.isArray(o)?t[e][s]=o.slice():t[e][s]=o}}return t}function qe(r){const t={};for(let e=0;e<r.length;e++){const s=sr(r[e]);for(const o in s)t[o]=s[o]}return t}function sf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ah(r){return r.getRenderTarget()===null?r.outputColorSpace:pe.workingColorSpace}const of={clone:sr,merge:qe};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?e.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[o]={type:"m4",value:h.toArray()}:e.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(e.extensions=s),e}}class lh extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends lh{constructor(t=50,e=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,s,o,l,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,s=2*e,o=this.aspect*s,l=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const d=h.fullWidth,f=h.fullHeight;l+=h.offsetX*o/d,e-=h.offsetY*s/f,o*=h.width/d,s*=h.height/f}const c=this.filmOffset;c!==0&&(l+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,e,e-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,qi=1;class cf extends Ue{constructor(t,e,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new dn(Zi,qi,t,e);o.layers=this.layers,this.add(o);const l=new dn(Zi,qi,t,e);l.layers=this.layers,this.add(l);const h=new dn(Zi,qi,t,e);h.layers=this.layers,this.add(h);const c=new dn(Zi,qi,t,e);c.layers=this.layers,this.add(c);const d=new dn(Zi,qi,t,e);d.layers=this.layers,this.add(d);const f=new dn(Zi,qi,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[s,o,l,h,c,d]=e;for(const f of e)this.remove(f);if(t===kn)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Ds)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,h,c,d,f,p]=this.children,m=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(e,l),t.setRenderTarget(s,1,o),t.render(e,h),t.setRenderTarget(s,2,o),t.render(e,c),t.setRenderTarget(s,3,o),t.render(e,d),t.setRenderTarget(s,4,o),t.render(e,f),s.texture.generateMipmaps=M,t.setRenderTarget(s,5,o),t.render(e,p),t.setRenderTarget(m,v,x),t.xr.enabled=S,s.texture.needsPMREMUpdate=!0}}class ch extends $e{constructor(t,e,s,o,l,h,c,d,f,p){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,s,o,l,h,c,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hf extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];e.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ei?ze:fn),this.texture=new ch(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new zr(5,5,5),l=new bi({name:"CubemapFromEquirect",uniforms:sr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:je,blending:Qn});l.uniforms.tEquirect.value=e;const h=new en(o,l),c=e.minFilter;return e.minFilter===Rr&&(e.minFilter=un),new cf(1,10,this).update(t,h),e.minFilter=c,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,s,o){const l=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,s,o);t.setRenderTarget(l)}}const Oo=new G,uf=new G,df=new ne;class gi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,s,o){return this.normal.set(t,e,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,s){const o=Oo.subVectors(s,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const s=t.delta(Oo),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return e<0&&s>0||s<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const s=e||df.getNormalMatrix(t),o=this.coplanarPoint(Oo).applyMatrix4(t),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Br,Ms=new G;class ua{constructor(t=new gi,e=new gi,s=new gi,o=new gi,l=new gi,h=new gi){this.planes=[t,e,s,o,l,h]}set(t,e,s,o,l,h){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(s),c[3].copy(o),c[4].copy(l),c[5].copy(h),this}copy(t){const e=this.planes;for(let s=0;s<6;s++)e[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,e=kn){const s=this.planes,o=t.elements,l=o[0],h=o[1],c=o[2],d=o[3],f=o[4],p=o[5],m=o[6],v=o[7],x=o[8],S=o[9],M=o[10],y=o[11],g=o[12],P=o[13],b=o[14],D=o[15];if(s[0].setComponents(d-l,v-f,y-x,D-g).normalize(),s[1].setComponents(d+l,v+f,y+x,D+g).normalize(),s[2].setComponents(d+h,v+p,y+S,D+P).normalize(),s[3].setComponents(d-h,v-p,y-S,D-P).normalize(),s[4].setComponents(d-c,v-m,y-M,D-b).normalize(),e===kn)s[5].setComponents(d+c,v+m,y+M,D+b).normalize();else if(e===Ds)s[5].setComponents(c,m,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,s=t.center,o=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let s=0;s<6;s++){const o=e[s];if(Ms.x=o.normal.x>0?t.max.x:t.min.x,Ms.y=o.normal.y>0?t.max.y:t.min.y,Ms.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let s=0;s<6;s++)if(e[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hh(){let r=null,t=!1,e=null,s=null;function o(l,h){e(l,h),s=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(s=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){r=l}}}function ff(r,t){const e=t.isWebGL2,s=new WeakMap;function o(f,p){const m=f.array,v=f.usage,x=m.byteLength,S=r.createBuffer();r.bindBuffer(p,S),r.bufferData(p,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(m instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(e)M=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function l(f,p,m){const v=p.array,x=p._updateRange,S=p.updateRanges;if(r.bindBuffer(m,f),x.count===-1&&S.length===0&&r.bufferSubData(m,0,v),S.length!==0){for(let M=0,y=S.length;M<y;M++){const g=S[M];e?r.bufferSubData(m,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):r.bufferSubData(m,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}p.clearUpdateRanges()}x.count!==-1&&(e?r.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function h(f){return f.isInterleavedBufferAttribute&&(f=f.data),s.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=s.get(f);p&&(r.deleteBuffer(p.buffer),s.delete(f))}function d(f,p){if(f.isGLBufferAttribute){const v=s.get(f);(!v||v.version<f.version)&&s.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=s.get(f);if(m===void 0)s.set(f,o(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(m.buffer,f,p),m.version=f.version}}return{get:h,remove:c,update:d}}class da extends Je{constructor(t=1,e=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:s,heightSegments:o};const l=t/2,h=e/2,c=Math.floor(s),d=Math.floor(o),f=c+1,p=d+1,m=t/c,v=e/d,x=[],S=[],M=[],y=[];for(let g=0;g<p;g++){const P=g*v-h;for(let b=0;b<f;b++){const D=b*m-l;S.push(D,-P,0),M.push(0,0,1),y.push(b/c),y.push(1-g/d)}}for(let g=0;g<d;g++)for(let P=0;P<c;P++){const b=P+f*g,D=P+f*(g+1),B=P+1+f*(g+1),I=P+1+f*g;x.push(b,D,I),x.push(D,B,I)}this.setIndex(x),this.setAttribute("position",new ke(S,3)),this.setAttribute("normal",new ke(M,3)),this.setAttribute("uv",new ke(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.width,t.height,t.widthSegments,t.heightSegments)}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Lf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`
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
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Om=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,km=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:_f,alphamap_pars_fragment:gf,alphatest_fragment:vf,alphatest_pars_fragment:xf,aomap_fragment:yf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:Ef,begin_vertex:Tf,beginnormal_vertex:bf,bsdfs:wf,iridescence_fragment:Af,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:If,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Of,common:Ff,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:kf,displacementmap_vertex:Hf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:Zf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:ap,envmap_vertex:Kf,fog_vertex:$f,fog_pars_vertex:Jf,fog_fragment:Qf,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:rp,lights_lambert_pars_fragment:sp,lights_pars_begin:op,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:_p,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:yp,map_fragment:Mp,map_pars_fragment:Sp,map_particle_fragment:Ep,map_particle_pars_fragment:Tp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:wp,morphcolor_vertex:Ap,morphnormal_vertex:Lp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Ip,normal_pars_fragment:Dp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:kp,opaque_fragment:Hp,packing:Gp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:Zp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Kp,shadowmap_vertex:$p,shadowmask_pars_fragment:Jp,skinbase_vertex:Qp,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:rm,tonemapping_fragment:sm,tonemapping_pars_fragment:om,transmission_fragment:am,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:_m,cube_vert:gm,cube_frag:vm,depth_vert:xm,depth_frag:ym,distanceRGBA_vert:Mm,distanceRGBA_frag:Sm,equirect_vert:Em,equirect_frag:Tm,linedashed_vert:bm,linedashed_frag:wm,meshbasic_vert:Am,meshbasic_frag:Lm,meshlambert_vert:Pm,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Im,meshnormal_vert:Dm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Om,meshphysical_vert:Fm,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:km,points_vert:Hm,points_frag:Gm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:Zm},_t={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},wn={basic:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new le(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:qe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:qe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new le(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:qe([_t.points,_t.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:qe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:qe([_t.common,_t.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:qe([_t.sprite,_t.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:qe([_t.common,_t.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:qe([_t.lights,_t.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};wn.physical={uniforms:qe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Ss={r:0,b:0,g:0};function qm(r,t,e,s,o,l,h){const c=new le(0);let d=l===!0?0:1,f,p,m=null,v=0,x=null;function S(y,g){let P=!1,b=g.isScene===!0?g.background:null;b&&b.isTexture&&(b=(g.backgroundBlurriness>0?e:t).get(b)),b===null?M(c,d):b&&b.isColor&&(M(b,1),P=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,h):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||P)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Os)?(p===void 0&&(p=new en(new zr(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:sr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=pe.getTransfer(b.colorSpace)!==ve,(m!==b||v!==b.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,m=b,v=b.version,x=r.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(f===void 0&&(f=new en(new da(2,2),new bi({name:"BackgroundMaterial",uniforms:sr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=b,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=pe.getTransfer(b.colorSpace)!==ve,b.matrixAutoUpdate===!0&&b.updateMatrix(),f.material.uniforms.uvTransform.value.copy(b.matrix),(m!==b||v!==b.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,m=b,v=b.version,x=r.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null))}function M(y,g){y.getRGB(Ss,ah(r)),s.buffers.color.setClear(Ss.r,Ss.g,Ss.b,g,h)}return{getClearColor:function(){return c},setClearColor:function(y,g=1){c.set(y),d=g,M(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(y){d=y,M(c,d)},render:S}}function Ym(r,t,e,s){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:t.get("OES_vertex_array_object"),h=s.isWebGL2||l!==null,c={},d=y(null);let f=d,p=!1;function m(F,J,tt,st,X){let V=!1;if(h){const z=M(st,tt,J);f!==z&&(f=z,x(f.object)),V=g(F,st,tt,X),V&&P(F,st,tt,X)}else{const z=J.wireframe===!0;(f.geometry!==st.id||f.program!==tt.id||f.wireframe!==z)&&(f.geometry=st.id,f.program=tt.id,f.wireframe=z,V=!0)}X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(V||p)&&(p=!1,nt(F,J,tt,st),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function v(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function x(F){return s.isWebGL2?r.bindVertexArray(F):l.bindVertexArrayOES(F)}function S(F){return s.isWebGL2?r.deleteVertexArray(F):l.deleteVertexArrayOES(F)}function M(F,J,tt){const st=tt.wireframe===!0;let X=c[F.id];X===void 0&&(X={},c[F.id]=X);let V=X[J.id];V===void 0&&(V={},X[J.id]=V);let z=V[st];return z===void 0&&(z=y(v()),V[st]=z),z}function y(F){const J=[],tt=[],st=[];for(let X=0;X<o;X++)J[X]=0,tt[X]=0,st[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:tt,attributeDivisors:st,object:F,attributes:{},index:null}}function g(F,J,tt,st){const X=f.attributes,V=J.attributes;let z=0;const et=tt.getAttributes();for(const ot in et)if(et[ot].location>=0){const it=X[ot];let lt=V[ot];if(lt===void 0&&(ot==="instanceMatrix"&&F.instanceMatrix&&(lt=F.instanceMatrix),ot==="instanceColor"&&F.instanceColor&&(lt=F.instanceColor)),it===void 0||it.attribute!==lt||lt&&it.data!==lt.data)return!0;z++}return f.attributesNum!==z||f.index!==st}function P(F,J,tt,st){const X={},V=J.attributes;let z=0;const et=tt.getAttributes();for(const ot in et)if(et[ot].location>=0){let it=V[ot];it===void 0&&(ot==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),ot==="instanceColor"&&F.instanceColor&&(it=F.instanceColor));const lt={};lt.attribute=it,it&&it.data&&(lt.data=it.data),X[ot]=lt,z++}f.attributes=X,f.attributesNum=z,f.index=st}function b(){const F=f.newAttributes;for(let J=0,tt=F.length;J<tt;J++)F[J]=0}function D(F){B(F,0)}function B(F,J){const tt=f.newAttributes,st=f.enabledAttributes,X=f.attributeDivisors;tt[F]=1,st[F]===0&&(r.enableVertexAttribArray(F),st[F]=1),X[F]!==J&&((s.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,J),X[F]=J)}function I(){const F=f.newAttributes,J=f.enabledAttributes;for(let tt=0,st=J.length;tt<st;tt++)J[tt]!==F[tt]&&(r.disableVertexAttribArray(tt),J[tt]=0)}function U(F,J,tt,st,X,V,z){z===!0?r.vertexAttribIPointer(F,J,tt,X,V):r.vertexAttribPointer(F,J,tt,st,X,V)}function nt(F,J,tt,st){if(s.isWebGL2===!1&&(F.isInstancedMesh||st.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const X=st.attributes,V=tt.getAttributes(),z=J.defaultAttributeValues;for(const et in V){const ot=V[et];if(ot.location>=0){let W=X[et];if(W===void 0&&(et==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),et==="instanceColor"&&F.instanceColor&&(W=F.instanceColor)),W!==void 0){const it=W.normalized,lt=W.itemSize,ft=e.get(W);if(ft===void 0)continue;const St=ft.buffer,Ut=ft.type,Zt=ft.bytesPerElement,Nt=s.isWebGL2===!0&&(Ut===r.INT||Ut===r.UNSIGNED_INT||W.gpuType===Wc);if(W.isInterleavedBufferAttribute){const re=W.data,Z=re.stride,Ae=W.offset;if(re.isInstancedInterleavedBuffer){for(let It=0;It<ot.locationSize;It++)B(ot.location+It,re.meshPerAttribute);F.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let It=0;It<ot.locationSize;It++)D(ot.location+It);r.bindBuffer(r.ARRAY_BUFFER,St);for(let It=0;It<ot.locationSize;It++)U(ot.location+It,lt/ot.locationSize,Ut,it,Z*Zt,(Ae+lt/ot.locationSize*It)*Zt,Nt)}else{if(W.isInstancedBufferAttribute){for(let re=0;re<ot.locationSize;re++)B(ot.location+re,W.meshPerAttribute);F.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let re=0;re<ot.locationSize;re++)D(ot.location+re);r.bindBuffer(r.ARRAY_BUFFER,St);for(let re=0;re<ot.locationSize;re++)U(ot.location+re,lt/ot.locationSize,Ut,it,lt*Zt,lt/ot.locationSize*re*Zt,Nt)}}else if(z!==void 0){const it=z[et];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(ot.location,it);break;case 3:r.vertexAttrib3fv(ot.location,it);break;case 4:r.vertexAttrib4fv(ot.location,it);break;default:r.vertexAttrib1fv(ot.location,it)}}}}I()}function w(){rt();for(const F in c){const J=c[F];for(const tt in J){const st=J[tt];for(const X in st)S(st[X].object),delete st[X];delete J[tt]}delete c[F]}}function C(F){if(c[F.id]===void 0)return;const J=c[F.id];for(const tt in J){const st=J[tt];for(const X in st)S(st[X].object),delete st[X];delete J[tt]}delete c[F.id]}function $(F){for(const J in c){const tt=c[J];if(tt[F.id]===void 0)continue;const st=tt[F.id];for(const X in st)S(st[X].object),delete st[X];delete tt[F.id]}}function rt(){pt(),p=!0,f!==d&&(f=d,x(f.object))}function pt(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:m,reset:rt,resetDefaultState:pt,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:$,initAttributes:b,enableAttribute:D,disableUnusedAttributes:I}}function jm(r,t,e,s){const o=s.isWebGL2;let l;function h(p){l=p}function c(p,m){r.drawArrays(l,p,m),e.update(m,l,1)}function d(p,m,v){if(v===0)return;let x,S;if(o)x=r,S="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](l,p,m,v),e.update(m,l,v)}function f(p,m,v){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v;S++)this.render(p[S],m[S]);else{x.multiDrawArraysWEBGL(l,p,0,m,0,v);let S=0;for(let M=0;M<v;M++)S+=m[M];e.update(S,l,1)}}this.setMode=h,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function Km(r,t,e){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=h||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),M=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,D=h||t.has("OES_texture_float"),B=b&&D,I=h?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:f,getMaxAnisotropy:o,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:P,vertexTextures:b,floatFragmentTextures:D,floatVertexTextures:B,maxSamples:I}}function $m(r){const t=this;let e=null,s=0,o=!1,l=!1;const h=new gi,c=new ne,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||s!==0||o;return o=v,s=m.length,x},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,v){e=p(m,v,0)},this.setState=function(m,v,x){const S=m.clippingPlanes,M=m.clipIntersection,y=m.clipShadows,g=r.get(m);if(!o||S===null||S.length===0||l&&!y)l?p(null):f();else{const P=l?0:s,b=P*4;let D=g.clippingState||null;d.value=D,D=p(S,v,b,x);for(let B=0;B!==b;++B)D[B]=e[B];g.clippingState=D,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function p(m,v,x,S){const M=m!==null?m.length:0;let y=null;if(M!==0){if(y=d.value,S!==!0||y===null){const g=x+M*4,P=v.matrixWorldInverse;c.getNormalMatrix(P),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,D=x;b!==M;++b,D+=4)h.copy(m[b]).applyMatrix4(P,c),h.normal.toArray(y,D),y[D+3]=h.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function Jm(r){let t=new WeakMap;function e(h,c){return c===Yo?h.mapping=nr:c===jo&&(h.mapping=ir),h}function s(h){if(h&&h.isTexture){const c=h.mapping;if(c===Yo||c===jo)if(t.has(h)){const d=t.get(h).texture;return e(d,h.mapping)}else{const d=h.image;if(d&&d.height>0){const f=new hf(d.height/2);return f.fromEquirectangularTexture(r,h),t.set(h,f),h.addEventListener("dispose",o),e(f.texture,h.mapping)}else return null}}return h}function o(h){const c=h.target;c.removeEventListener("dispose",o);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function l(){t=new WeakMap}return{get:s,dispose:l}}class uh extends lh{constructor(t=-1,e=1,s=1,o=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=s,this.bottom=o,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,s,o,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-t,h=s+t,c=o+e,d=o-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=f*this.view.offsetX,h=l+f*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(l,h,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,lc=[.125,.215,.35,.446,.526,.582],yi=20,Fo=new uh,cc=new le;let Bo=null,zo=0,ko=0;const vi=(1+Math.sqrt(5))/2,Yi=1/vi,hc=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,vi,Yi),new G(0,vi,-Yi),new G(Yi,0,vi),new G(-Yi,0,vi),new G(vi,Yi,0),new G(-vi,Yi,0)];class uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,s=.1,o=100){Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,s,o,l),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo,zo,ko),t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel();const s=e||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,s={magFilter:un,minFilter:un,generateMipmaps:!1,type:Cr,format:Mn,colorSpace:Gn,depthBuffer:!1},o=dc(t,e,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(l)),this._blurMaterial=t_(l,t,e)}return o}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,s,o){const c=new dn(90,1,e,s),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,v=p.toneMapping;p.getClearColor(cc),p.toneMapping=ti,p.autoClear=!1;const x=new Ur({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),S=new en(new zr,x);let M=!1;const y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,M=!0):(x.color.copy(cc),M=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(c.up.set(0,d[g],0),c.lookAt(f[g],0,0)):P===1?(c.up.set(0,0,d[g]),c.lookAt(0,f[g],0)):(c.up.set(0,d[g],0),c.lookAt(0,0,f[g]));const b=this._cubeSize;Es(o,P*b,g>2?b:0,b,b),p.setRenderTarget(o),M&&p.render(S,c),p.render(t,c)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=v,p.autoClear=m,t.background=y}_textureToCubeUV(t,e){const s=this._renderer,o=t.mapping===nr||t.mapping===ir;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const l=o?this._cubemapMaterial:this._equirectMaterial,h=new en(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=t;const d=this._cubeSize;Es(e,0,0,3*d,2*d),s.setRenderTarget(e),s.render(h,Fo)}_applyPMREM(t){const e=this._renderer,s=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=hc[(o-1)%hc.length];this._blur(t,o-1,o,l,h)}e.autoClear=s}_blur(t,e,s,o,l){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,s,o,"latitudinal",l),this._halfBlur(h,t,s,s,o,"longitudinal",l)}_halfBlur(t,e,s,o,l,h,c){const d=this._renderer,f=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new en(this._lodPlanes[o],f),v=f.uniforms,x=this._sizeLods[s]-1,S=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*yi-1),M=l/S,y=isFinite(l)?1+Math.floor(p*M):yi;y>yi&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yi}`);const g=[];let P=0;for(let U=0;U<yi;++U){const nt=U/M,w=Math.exp(-nt*nt/2);g.push(w),U===0?P+=w:U<y&&(P+=2*w)}for(let U=0;U<g.length;U++)g[U]=g[U]/P;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=h==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:b}=this;v.dTheta.value=S,v.mipInt.value=b-s;const D=this._sizeLods[o],B=3*D*(o>b-$i?o-b+$i:0),I=4*(this._cubeSize-D);Es(e,B,I,3*D,2*D),d.setRenderTarget(e),d.render(m,Fo)}}function Qm(r){const t=[],e=[],s=[];let o=r;const l=r-$i+1+lc.length;for(let h=0;h<l;h++){const c=Math.pow(2,o);e.push(c);let d=1/c;h>r-$i?d=lc[h-r+$i-1]:h===0&&(d=0),s.push(d);const f=1/(c-2),p=-f,m=1+f,v=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,S=6,M=3,y=2,g=1,P=new Float32Array(M*S*x),b=new Float32Array(y*S*x),D=new Float32Array(g*S*x);for(let I=0;I<x;I++){const U=I%3*2/3-1,nt=I>2?0:-1,w=[U,nt,0,U+2/3,nt,0,U+2/3,nt+1,0,U,nt,0,U+2/3,nt+1,0,U,nt+1,0];P.set(w,M*S*I),b.set(v,y*S*I);const C=[I,I,I,I,I,I];D.set(C,g*S*I)}const B=new Je;B.setAttribute("position",new Sn(P,M)),B.setAttribute("uv",new Sn(b,y)),B.setAttribute("faceIndex",new Sn(D,g)),t.push(B),o>$i&&o--}return{lodPlanes:t,sizeLods:e,sigmas:s}}function dc(r,t,e){const s=new Ti(r,t,e);return s.texture.mapping=Os,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Es(r,t,e,s,o){r.viewport.set(t,e,s,o),r.scissor.set(t,e,s,o)}function t_(r,t,e){const s=new Float32Array(yi),o=new G(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function fc(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function pc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function e_(r){let t=new WeakMap,e=null;function s(c){if(c&&c.isTexture){const d=c.mapping,f=d===Yo||d===jo,p=d===nr||d===ir;if(f||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let m=t.get(c);return e===null&&(e=new uc(r)),m=f?e.fromEquirectangular(c,m):e.fromCubemap(c,m),t.set(c,m),m.texture}else{if(t.has(c))return t.get(c).texture;{const m=c.image;if(f&&m&&m.height>0||p&&m&&o(m)){e===null&&(e=new uc(r));const v=f?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,v),c.addEventListener("dispose",l),v.texture}else return null}}}return c}function o(c){let d=0;const f=6;for(let p=0;p<f;p++)c[p]!==void 0&&d++;return d===f}function l(c){const d=c.target;d.removeEventListener("dispose",l);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:s,dispose:h}}function n_(r){const t={};function e(s){if(t[s]!==void 0)return t[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return t[s]=o,o}return{has:function(s){return e(s)!==null},init:function(s){s.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(s){const o=e(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function i_(r,t,e,s){const o={},l=new WeakMap;function h(m){const v=m.target;v.index!==null&&t.remove(v.index);for(const S in v.attributes)t.remove(v.attributes[S]);for(const S in v.morphAttributes){const M=v.morphAttributes[S];for(let y=0,g=M.length;y<g;y++)t.remove(M[y])}v.removeEventListener("dispose",h),delete o[v.id];const x=l.get(v);x&&(t.remove(x),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function c(m,v){return o[v.id]===!0||(v.addEventListener("dispose",h),o[v.id]=!0,e.memory.geometries++),v}function d(m){const v=m.attributes;for(const S in v)t.update(v[S],r.ARRAY_BUFFER);const x=m.morphAttributes;for(const S in x){const M=x[S];for(let y=0,g=M.length;y<g;y++)t.update(M[y],r.ARRAY_BUFFER)}}function f(m){const v=[],x=m.index,S=m.attributes.position;let M=0;if(x!==null){const P=x.array;M=x.version;for(let b=0,D=P.length;b<D;b+=3){const B=P[b+0],I=P[b+1],U=P[b+2];v.push(B,I,I,U,U,B)}}else if(S!==void 0){const P=S.array;M=S.version;for(let b=0,D=P.length/3-1;b<D;b+=3){const B=b+0,I=b+1,U=b+2;v.push(B,I,I,U,U,B)}}else return;const y=new(th(v)?oh:sh)(v,1);y.version=M;const g=l.get(m);g&&t.remove(g),l.set(m,y)}function p(m){const v=l.get(m);if(v){const x=m.index;x!==null&&v.version<x.version&&f(m)}else f(m);return l.get(m)}return{get:c,update:d,getWireframeAttribute:p}}function r_(r,t,e,s){const o=s.isWebGL2;let l;function h(x){l=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function p(x,S){r.drawElements(l,S,c,x*d),e.update(S,l,1)}function m(x,S,M){if(M===0)return;let y,g;if(o)y=r,g="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](l,S,c,x*d,M),e.update(S,l,M)}function v(x,S,M){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<M;g++)this.render(x[g]/d,S[g]);else{y.multiDrawElementsWEBGL(l,S,0,c,x,0,M);let g=0;for(let P=0;P<M;P++)g+=S[P];e.update(g,l,1)}}this.setMode=h,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function s_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,h,c){switch(e.calls++,h){case r.TRIANGLES:e.triangles+=c*(l/3);break;case r.LINES:e.lines+=c*(l/2);break;case r.LINE_STRIP:e.lines+=c*(l-1);break;case r.LINE_LOOP:e.lines+=c*l;break;case r.POINTS:e.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:s}}function o_(r,t){return r[0]-t[0]}function a_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function l_(r,t,e){const s={},o=new Float32Array(8),l=new WeakMap,h=new De,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function d(f,p,m){const v=f.morphTargetInfluences;if(t.isWebGL2===!0){const S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=S!==void 0?S.length:0;let y=l.get(p);if(y===void 0||y.count!==M){let J=function(){pt.dispose(),l.delete(p),p.removeEventListener("dispose",J)};var x=J;y!==void 0&&y.texture.dispose();const b=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,B=p.morphAttributes.color!==void 0,I=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],nt=p.morphAttributes.color||[];let w=0;b===!0&&(w=1),D===!0&&(w=2),B===!0&&(w=3);let C=p.attributes.position.count*w,$=1;C>t.maxTextureSize&&($=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const rt=new Float32Array(C*$*4*M),pt=new ih(rt,C,$,M);pt.type=Jn,pt.needsUpdate=!0;const F=w*4;for(let tt=0;tt<M;tt++){const st=I[tt],X=U[tt],V=nt[tt],z=C*$*4*tt;for(let et=0;et<st.count;et++){const ot=et*F;b===!0&&(h.fromBufferAttribute(st,et),rt[z+ot+0]=h.x,rt[z+ot+1]=h.y,rt[z+ot+2]=h.z,rt[z+ot+3]=0),D===!0&&(h.fromBufferAttribute(X,et),rt[z+ot+4]=h.x,rt[z+ot+5]=h.y,rt[z+ot+6]=h.z,rt[z+ot+7]=0),B===!0&&(h.fromBufferAttribute(V,et),rt[z+ot+8]=h.x,rt[z+ot+9]=h.y,rt[z+ot+10]=h.z,rt[z+ot+11]=V.itemSize===4?h.w:1)}}y={count:M,texture:pt,size:new ie(C,$)},l.set(p,y),p.addEventListener("dispose",J)}let g=0;for(let b=0;b<v.length;b++)g+=v[b];const P=p.morphTargetsRelative?1:1-g;m.getUniforms().setValue(r,"morphTargetBaseInfluence",P),m.getUniforms().setValue(r,"morphTargetInfluences",v),m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,e),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const S=v===void 0?0:v.length;let M=s[p.id];if(M===void 0||M.length!==S){M=[];for(let D=0;D<S;D++)M[D]=[D,0];s[p.id]=M}for(let D=0;D<S;D++){const B=M[D];B[0]=D,B[1]=v[D]}M.sort(a_);for(let D=0;D<8;D++)D<S&&M[D][1]?(c[D][0]=M[D][0],c[D][1]=M[D][1]):(c[D][0]=Number.MAX_SAFE_INTEGER,c[D][1]=0);c.sort(o_);const y=p.morphAttributes.position,g=p.morphAttributes.normal;let P=0;for(let D=0;D<8;D++){const B=c[D],I=B[0],U=B[1];I!==Number.MAX_SAFE_INTEGER&&U?(y&&p.getAttribute("morphTarget"+D)!==y[I]&&p.setAttribute("morphTarget"+D,y[I]),g&&p.getAttribute("morphNormal"+D)!==g[I]&&p.setAttribute("morphNormal"+D,g[I]),o[D]=U,P+=U):(y&&p.hasAttribute("morphTarget"+D)===!0&&p.deleteAttribute("morphTarget"+D),g&&p.hasAttribute("morphNormal"+D)===!0&&p.deleteAttribute("morphNormal"+D),o[D]=0)}const b=p.morphTargetsRelative?1:1-P;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:d}}function c_(r,t,e,s){let o=new WeakMap;function l(d){const f=s.render.frame,p=d.geometry,m=t.get(d,p);if(o.get(m)!==f&&(t.update(m),o.set(m,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==f&&(e.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,r.ARRAY_BUFFER),o.set(d,f))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return m}function h(){o=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:l,dispose:h}}class dh extends $e{constructor(t,e,s,o,l,h,c,d,f,p){if(p=p!==void 0?p:Si,p!==Si&&p!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&p===Si&&(s=$n),s===void 0&&p===rr&&(s=Mi),super(null,o,l,h,c,d,p,s,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:Ye,this.minFilter=d!==void 0?d:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fh=new $e,ph=new dh(1,1);ph.compareFunction=Qc;const mh=new ih,_h=new Zd,gh=new ch,mc=[],_c=[],gc=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);function lr(r,t,e){const s=r[0];if(s<=0||s>0)return r;const o=t*e;let l=mc[o];if(l===void 0&&(l=new Float32Array(o),mc[o]=l),t!==0){s.toArray(l,0);for(let h=1,c=0;h!==t;++h)c+=e,r[h].toArray(l,c)}return l}function Pe(r,t){if(r.length!==t.length)return!1;for(let e=0,s=r.length;e<s;e++)if(r[e]!==t[e])return!1;return!0}function Re(r,t){for(let e=0,s=t.length;e<s;e++)r[e]=t[e]}function ks(r,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let s=0;s!==t;++s)e[s]=r.allocateTextureUnit();return e}function h_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function u_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2fv(this.addr,t),Re(e,t)}}function d_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;r.uniform3fv(this.addr,t),Re(e,t)}}function f_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4fv(this.addr,t),Re(e,t)}}function p_(r,t){const e=this.cache,s=t.elements;if(s===void 0){if(Pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Pe(e,s))return;xc.set(s),r.uniformMatrix2fv(this.addr,!1,xc),Re(e,s)}}function m_(r,t){const e=this.cache,s=t.elements;if(s===void 0){if(Pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Pe(e,s))return;vc.set(s),r.uniformMatrix3fv(this.addr,!1,vc),Re(e,s)}}function __(r,t){const e=this.cache,s=t.elements;if(s===void 0){if(Pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Pe(e,s))return;gc.set(s),r.uniformMatrix4fv(this.addr,!1,gc),Re(e,s)}}function g_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function v_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2iv(this.addr,t),Re(e,t)}}function x_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3iv(this.addr,t),Re(e,t)}}function y_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4iv(this.addr,t),Re(e,t)}}function M_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function S_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2uiv(this.addr,t),Re(e,t)}}function E_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3uiv(this.addr,t),Re(e,t)}}function T_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4uiv(this.addr,t),Re(e,t)}}function b_(r,t,e){const s=this.cache,o=e.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);const l=this.type===r.SAMPLER_2D_SHADOW?ph:fh;e.setTexture2D(t||l,o)}function w_(r,t,e){const s=this.cache,o=e.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),e.setTexture3D(t||_h,o)}function A_(r,t,e){const s=this.cache,o=e.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),e.setTextureCube(t||gh,o)}function L_(r,t,e){const s=this.cache,o=e.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),e.setTexture2DArray(t||mh,o)}function P_(r){switch(r){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return __;case 5124:case 35670:return g_;case 35667:case 35671:return v_;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return S_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return L_}}function R_(r,t){r.uniform1fv(this.addr,t)}function C_(r,t){const e=lr(t,this.size,2);r.uniform2fv(this.addr,e)}function I_(r,t){const e=lr(t,this.size,3);r.uniform3fv(this.addr,e)}function D_(r,t){const e=lr(t,this.size,4);r.uniform4fv(this.addr,e)}function U_(r,t){const e=lr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function N_(r,t){const e=lr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function O_(r,t){const e=lr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function F_(r,t){r.uniform1iv(this.addr,t)}function B_(r,t){r.uniform2iv(this.addr,t)}function z_(r,t){r.uniform3iv(this.addr,t)}function k_(r,t){r.uniform4iv(this.addr,t)}function H_(r,t){r.uniform1uiv(this.addr,t)}function G_(r,t){r.uniform2uiv(this.addr,t)}function V_(r,t){r.uniform3uiv(this.addr,t)}function W_(r,t){r.uniform4uiv(this.addr,t)}function X_(r,t,e){const s=this.cache,o=t.length,l=ks(e,o);Pe(s,l)||(r.uniform1iv(this.addr,l),Re(s,l));for(let h=0;h!==o;++h)e.setTexture2D(t[h]||fh,l[h])}function Z_(r,t,e){const s=this.cache,o=t.length,l=ks(e,o);Pe(s,l)||(r.uniform1iv(this.addr,l),Re(s,l));for(let h=0;h!==o;++h)e.setTexture3D(t[h]||_h,l[h])}function q_(r,t,e){const s=this.cache,o=t.length,l=ks(e,o);Pe(s,l)||(r.uniform1iv(this.addr,l),Re(s,l));for(let h=0;h!==o;++h)e.setTextureCube(t[h]||gh,l[h])}function Y_(r,t,e){const s=this.cache,o=t.length,l=ks(e,o);Pe(s,l)||(r.uniform1iv(this.addr,l),Re(s,l));for(let h=0;h!==o;++h)e.setTexture2DArray(t[h]||mh,l[h])}function j_(r){switch(r){case 5126:return R_;case 35664:return C_;case 35665:return I_;case 35666:return D_;case 35674:return U_;case 35675:return N_;case 35676:return O_;case 5124:case 35670:return F_;case 35667:case 35671:return B_;case 35668:case 35672:return z_;case 35669:case 35673:return k_;case 5125:return H_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}class K_{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.setValue=P_(e.type)}}class $_{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j_(e.type)}}class J_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,s){const o=this.seq;for(let l=0,h=o.length;l!==h;++l){const c=o[l];c.setValue(t,e[c.id],s)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function yc(r,t){r.seq.push(t),r.map[t.id]=t}function Q_(r,t,e){const s=r.name,o=s.length;for(Ho.lastIndex=0;;){const l=Ho.exec(s),h=Ho.lastIndex;let c=l[1];const d=l[2]==="]",f=l[3];if(d&&(c=c|0),f===void 0||f==="["&&h+2===o){yc(e,f===void 0?new K_(c,r,t):new $_(c,r,t));break}else{let m=e.map[c];m===void 0&&(m=new J_(c),yc(e,m)),e=m}}}class Ls{constructor(t,e){this.seq=[],this.map={};const s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=t.getActiveUniform(e,o),h=t.getUniformLocation(e,l.name);Q_(l,h,this)}}setValue(t,e,s,o){const l=this.map[e];l!==void 0&&l.setValue(t,s,o)}setOptional(t,e,s){const o=e[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,e,s,o){for(let l=0,h=e.length;l!==h;++l){const c=e[l],d=s[c.id];d.needsUpdate!==!1&&c.setValue(t,d.value,o)}}static seqWithValue(t,e){const s=[];for(let o=0,l=t.length;o!==l;++o){const h=t[o];h.id in e&&s.push(h)}return s}}function Mc(r,t,e){const s=r.createShader(t);return r.shaderSource(s,e),r.compileShader(s),s}const tg=37297;let eg=0;function ng(r,t){const e=r.split(`
`),s=[],o=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let h=o;h<l;h++){const c=h+1;s.push(`${c===t?">":" "} ${c}: ${e[h]}`)}return s.join(`
`)}function ig(r){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(r);let s;switch(t===e?s="":t===Is&&e===Cs?s="LinearDisplayP3ToLinearSRGB":t===Cs&&e===Is&&(s="LinearSRGBToLinearDisplayP3"),r){case Gn:case Fs:return[s,"LinearTransferOETF"];case ze:case la:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Sc(r,t,e){const s=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const h=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+ng(r.getShaderSource(t),h)}else return o}function rg(r,t){const e=ig(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sg(r,t){let e;switch(t){case nd:e="Linear";break;case id:e="Reinhard";break;case rd:e="OptimizedCineon";break;case sd:e="ACESFilmic";break;case ad:e="AgX";break;case od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function og(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ji).join(`
`)}function ag(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ji).join(`
`)}function lg(r){const t=[];for(const e in r){const s=r[e];s!==!1&&t.push("#define "+e+" "+s)}return t.join(`
`)}function cg(r,t){const e={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(t,o),h=l.name;let c=1;l.type===r.FLOAT_MAT2&&(c=2),l.type===r.FLOAT_MAT3&&(c=3),l.type===r.FLOAT_MAT4&&(c=4),e[h]={type:l.type,location:r.getAttribLocation(t,h),locationSize:c}}return e}function Ji(r){return r!==""}function Ec(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(r){return r.replace(hg,dg)}const ug=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dg(r,t){let e=Qt[t];if(e===void 0){const s=ug.get(t);if(s!==void 0)e=Qt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ea(e)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(r){return r.replace(fg,pg)}function pg(r,t,e,s){let o="";for(let l=parseInt(t);l<parseInt(e);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function wc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function _g(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function vg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case oa:t="ENVMAP_BLENDING_MULTIPLY";break;case td:t="ENVMAP_BLENDING_MIX";break;case ed:t="ENVMAP_BLENDING_ADD";break}return t}function xg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:s,maxMip:e}}function yg(r,t,e,s){const o=r.getContext(),l=e.defines;let h=e.vertexShader,c=e.fragmentShader;const d=mg(e),f=_g(e),p=gg(e),m=vg(e),v=xg(e),x=e.isWebGL2?"":og(e),S=ag(e),M=lg(l),y=o.createProgram();let g,P,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ji).join(`
`),g.length>0&&(g+=`
`),P=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ji).join(`
`),P.length>0&&(P+=`
`)):(g=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),P=[x,wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ti?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,rg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),h=ea(h),h=Ec(h,e),h=Tc(h,e),c=ea(c),c=Ec(c,e),c=Tc(c,e),h=bc(h),c=bc(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,P=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const D=b+g+h,B=b+P+c,I=Mc(o,o.VERTEX_SHADER,D),U=Mc(o,o.FRAGMENT_SHADER,B);o.attachShader(y,I),o.attachShader(y,U),e.index0AttributeName!==void 0?o.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function nt(rt){if(r.debug.checkShaderErrors){const pt=o.getProgramInfoLog(y).trim(),F=o.getShaderInfoLog(I).trim(),J=o.getShaderInfoLog(U).trim();let tt=!0,st=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,y,I,U);else{const X=Sc(o,I,"vertex"),V=Sc(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Program Info Log: `+pt+`
`+X+`
`+V)}else pt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pt):(F===""||J==="")&&(st=!1);st&&(rt.diagnostics={runnable:tt,programLog:pt,vertexShader:{log:F,prefix:g},fragmentShader:{log:J,prefix:P}})}o.deleteShader(I),o.deleteShader(U),w=new Ls(o,y),C=cg(o,y)}let w;this.getUniforms=function(){return w===void 0&&nt(this),w};let C;this.getAttributes=function(){return C===void 0&&nt(this),C};let $=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=o.getProgramParameter(y,tg)),$},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=U,this}let Mg=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(e),l=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const s of e)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let s=e.get(t);return s===void 0&&(s=new Set,e.set(t,s)),s}_getShaderStage(t){const e=this.shaderCache;let s=e.get(t);return s===void 0&&(s=new Eg(t),e.set(t,s)),s}}class Eg{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}}function Tg(r,t,e,s,o,l,h){const c=new ha,d=new Sg,f=[],p=o.isWebGL2,m=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return w===0?"uv":`uv${w}`}function y(w,C,$,rt,pt){const F=rt.fog,J=pt.geometry,tt=w.isMeshStandardMaterial?rt.environment:null,st=(w.isMeshStandardMaterial?e:t).get(w.envMap||tt),X=st&&st.mapping===Os?st.image.height:null,V=S[w.type];w.precision!==null&&(x=o.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const z=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,et=z!==void 0?z.length:0;let ot=0;J.morphAttributes.position!==void 0&&(ot=1),J.morphAttributes.normal!==void 0&&(ot=2),J.morphAttributes.color!==void 0&&(ot=3);let W,it,lt,ft;if(V){const Le=wn[V];W=Le.vertexShader,it=Le.fragmentShader}else W=w.vertexShader,it=w.fragmentShader,d.update(w),lt=d.getVertexShaderID(w),ft=d.getFragmentShaderID(w);const St=r.getRenderTarget(),Ut=pt.isInstancedMesh===!0,Zt=pt.isBatchedMesh===!0,Nt=!!w.map,re=!!w.matcap,Z=!!st,Ae=!!w.aoMap,It=!!w.lightMap,Gt=!!w.bumpMap,wt=!!w.normalMap,me=!!w.displacementMap,Vt=!!w.emissiveMap,R=!!w.metalnessMap,T=!!w.roughnessMap,q=w.anisotropy>0,ut=w.clearcoat>0,ht=w.iridescence>0,dt=w.sheen>0,At=w.transmission>0,vt=q&&!!w.anisotropyMap,Et=ut&&!!w.clearcoatMap,Ot=ut&&!!w.clearcoatNormalMap,Kt=ut&&!!w.clearcoatRoughnessMap,ct=ht&&!!w.iridescenceMap,ce=ht&&!!w.iridescenceThicknessMap,te=dt&&!!w.sheenColorMap,kt=dt&&!!w.sheenRoughnessMap,Rt=!!w.specularMap,Tt=!!w.specularColorMap,Yt=!!w.specularIntensityMap,oe=At&&!!w.transmissionMap,xe=At&&!!w.thicknessMap,Jt=!!w.gradientMap,mt=!!w.alphaMap,O=w.alphaTest>0,gt=!!w.alphaHash,xt=!!w.extensions,Bt=!!J.attributes.uv1,Dt=!!J.attributes.uv2,ue=!!J.attributes.uv3;let de=ti;return w.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(de=r.toneMapping),{isWebGL2:p,shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:W,fragmentShader:it,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Zt,instancing:Ut,instancingColor:Ut&&pt.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Gn,map:Nt,matcap:re,envMap:Z,envMapMode:Z&&st.mapping,envMapCubeUVHeight:X,aoMap:Ae,lightMap:It,bumpMap:Gt,normalMap:wt,displacementMap:v&&me,emissiveMap:Vt,normalMapObjectSpace:wt&&w.normalMapType===xd,normalMapTangentSpace:wt&&w.normalMapType===Jc,metalnessMap:R,roughnessMap:T,anisotropy:q,anisotropyMap:vt,clearcoat:ut,clearcoatMap:Et,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Kt,iridescence:ht,iridescenceMap:ct,iridescenceThicknessMap:ce,sheen:dt,sheenColorMap:te,sheenRoughnessMap:kt,specularMap:Rt,specularColorMap:Tt,specularIntensityMap:Yt,transmission:At,transmissionMap:oe,thicknessMap:xe,gradientMap:Jt,opaque:w.transparent===!1&&w.blending===tr,alphaMap:mt,alphaTest:O,alphaHash:gt,combine:w.combine,mapUv:Nt&&M(w.map.channel),aoMapUv:Ae&&M(w.aoMap.channel),lightMapUv:It&&M(w.lightMap.channel),bumpMapUv:Gt&&M(w.bumpMap.channel),normalMapUv:wt&&M(w.normalMap.channel),displacementMapUv:me&&M(w.displacementMap.channel),emissiveMapUv:Vt&&M(w.emissiveMap.channel),metalnessMapUv:R&&M(w.metalnessMap.channel),roughnessMapUv:T&&M(w.roughnessMap.channel),anisotropyMapUv:vt&&M(w.anisotropyMap.channel),clearcoatMapUv:Et&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:te&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:kt&&M(w.sheenRoughnessMap.channel),specularMapUv:Rt&&M(w.specularMap.channel),specularColorMapUv:Tt&&M(w.specularColorMap.channel),specularIntensityMapUv:Yt&&M(w.specularIntensityMap.channel),transmissionMapUv:oe&&M(w.transmissionMap.channel),thicknessMapUv:xe&&M(w.thicknessMap.channel),alphaMapUv:mt&&M(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(wt||q),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:Bt,vertexUv2s:Dt,vertexUv3s:ue,pointsUvs:pt.isPoints===!0&&!!J.attributes.uv&&(Nt||mt),fog:!!F,useFog:w.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:pt.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ot,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&$.length>0,shadowMapType:r.shadowMap.type,toneMapping:de,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Nt&&w.map.isVideoTexture===!0&&pe.getTransfer(w.map.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===An,flipSided:w.side===je,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:xt&&w.extensions.derivatives===!0,extensionFragDepth:xt&&w.extensions.fragDepth===!0,extensionDrawBuffers:xt&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&w.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function g(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const $ in w.defines)C.push($),C.push(w.defines[$]);return w.isRawShaderMaterial===!1&&(P(C,w),b(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function P(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function b(w,C){c.disableAll(),C.isWebGL2&&c.enable(0),C.supportsVertexTextures&&c.enable(1),C.instancing&&c.enable(2),C.instancingColor&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),w.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.skinning&&c.enable(4),C.morphTargets&&c.enable(5),C.morphNormals&&c.enable(6),C.morphColors&&c.enable(7),C.premultipliedAlpha&&c.enable(8),C.shadowMapEnabled&&c.enable(9),C.useLegacyLights&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),w.push(c.mask)}function D(w){const C=S[w.type];let $;if(C){const rt=wn[C];$=of.clone(rt.uniforms)}else $=w.uniforms;return $}function B(w,C){let $;for(let rt=0,pt=f.length;rt<pt;rt++){const F=f[rt];if(F.cacheKey===C){$=F,++$.usedTimes;break}}return $===void 0&&($=new yg(r,C,w,l),f.push($)),$}function I(w){if(--w.usedTimes===0){const C=f.indexOf(w);f[C]=f[f.length-1],f.pop(),w.destroy()}}function U(w){d.remove(w)}function nt(){d.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:B,releaseProgram:I,releaseShaderCache:U,programs:f,dispose:nt}}function bg(){let r=new WeakMap;function t(l){let h=r.get(l);return h===void 0&&(h={},r.set(l,h)),h}function e(l){r.delete(l)}function s(l,h,c){r.get(l)[h]=c}function o(){r=new WeakMap}return{get:t,remove:e,update:s,dispose:o}}function wg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ac(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lc(){const r=[];let t=0;const e=[],s=[],o=[];function l(){t=0,e.length=0,s.length=0,o.length=0}function h(m,v,x,S,M,y){let g=r[t];return g===void 0?(g={id:m.id,object:m,geometry:v,material:x,groupOrder:S,renderOrder:m.renderOrder,z:M,group:y},r[t]=g):(g.id=m.id,g.object=m,g.geometry=v,g.material=x,g.groupOrder=S,g.renderOrder=m.renderOrder,g.z=M,g.group=y),t++,g}function c(m,v,x,S,M,y){const g=h(m,v,x,S,M,y);x.transmission>0?s.push(g):x.transparent===!0?o.push(g):e.push(g)}function d(m,v,x,S,M,y){const g=h(m,v,x,S,M,y);x.transmission>0?s.unshift(g):x.transparent===!0?o.unshift(g):e.unshift(g)}function f(m,v){e.length>1&&e.sort(m||wg),s.length>1&&s.sort(v||Ac),o.length>1&&o.sort(v||Ac)}function p(){for(let m=t,v=r.length;m<v;m++){const x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:s,transparent:o,init:l,push:c,unshift:d,finish:p,sort:f}}function Ag(){let r=new WeakMap;function t(s,o){const l=r.get(s);let h;return l===void 0?(h=new Lc,r.set(s,[h])):o>=l.length?(h=new Lc,l.push(h)):h=l[o],h}function e(){r=new WeakMap}return{get:t,dispose:e}}function Lg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new le};break;case"SpotLight":e={position:new G,direction:new G,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=e,e}}}function Pg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Rg=0;function Cg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ig(r,t){const e=new Lg,s=Pg(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new G);const l=new G,h=new Se,c=new Se;function d(p,m){let v=0,x=0,S=0;for(let rt=0;rt<9;rt++)o.probe[rt].set(0,0,0);let M=0,y=0,g=0,P=0,b=0,D=0,B=0,I=0,U=0,nt=0,w=0;p.sort(Cg);const C=m===!0?Math.PI:1;for(let rt=0,pt=p.length;rt<pt;rt++){const F=p[rt],J=F.color,tt=F.intensity,st=F.distance,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=J.r*tt*C,x+=J.g*tt*C,S+=J.b*tt*C;else if(F.isLightProbe){for(let V=0;V<9;V++)o.probe[V].addScaledVector(F.sh.coefficients[V],tt);w++}else if(F.isDirectionalLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const z=F.shadow,et=s.get(F);et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,o.directionalShadow[M]=et,o.directionalShadowMap[M]=X,o.directionalShadowMatrix[M]=F.shadow.matrix,D++}o.directional[M]=V,M++}else if(F.isSpotLight){const V=e.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(J).multiplyScalar(tt*C),V.distance=st,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,o.spot[g]=V;const z=F.shadow;if(F.map&&(o.spotLightMap[U]=F.map,U++,z.updateMatrices(F),F.castShadow&&nt++),o.spotLightMatrix[g]=z.matrix,F.castShadow){const et=s.get(F);et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,o.spotShadow[g]=et,o.spotShadowMap[g]=X,I++}g++}else if(F.isRectAreaLight){const V=e.get(F);V.color.copy(J).multiplyScalar(tt),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),o.rectArea[P]=V,P++}else if(F.isPointLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*C),V.distance=F.distance,V.decay=F.decay,F.castShadow){const z=F.shadow,et=s.get(F);et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,et.shadowCameraNear=z.camera.near,et.shadowCameraFar=z.camera.far,o.pointShadow[y]=et,o.pointShadowMap[y]=X,o.pointShadowMatrix[y]=F.shadow.matrix,B++}o.point[y]=V,y++}else if(F.isHemisphereLight){const V=e.get(F);V.skyColor.copy(F.color).multiplyScalar(tt*C),V.groundColor.copy(F.groundColor).multiplyScalar(tt*C),o.hemi[b]=V,b++}}P>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=_t.LTC_FLOAT_1,o.rectAreaLTC2=_t.LTC_FLOAT_2):(o.rectAreaLTC1=_t.LTC_HALF_1,o.rectAreaLTC2=_t.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=_t.LTC_FLOAT_1,o.rectAreaLTC2=_t.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=_t.LTC_HALF_1,o.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=S;const $=o.hash;($.directionalLength!==M||$.pointLength!==y||$.spotLength!==g||$.rectAreaLength!==P||$.hemiLength!==b||$.numDirectionalShadows!==D||$.numPointShadows!==B||$.numSpotShadows!==I||$.numSpotMaps!==U||$.numLightProbes!==w)&&(o.directional.length=M,o.spot.length=g,o.rectArea.length=P,o.point.length=y,o.hemi.length=b,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=B,o.pointShadowMap.length=B,o.spotShadow.length=I,o.spotShadowMap.length=I,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=B,o.spotLightMatrix.length=I+U-nt,o.spotLightMap.length=U,o.numSpotLightShadowsWithMaps=nt,o.numLightProbes=w,$.directionalLength=M,$.pointLength=y,$.spotLength=g,$.rectAreaLength=P,$.hemiLength=b,$.numDirectionalShadows=D,$.numPointShadows=B,$.numSpotShadows=I,$.numSpotMaps=U,$.numLightProbes=w,o.version=Rg++)}function f(p,m){let v=0,x=0,S=0,M=0,y=0;const g=m.matrixWorldInverse;for(let P=0,b=p.length;P<b;P++){const D=p[P];if(D.isDirectionalLight){const B=o.directional[v];B.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(g),v++}else if(D.isSpotLight){const B=o.spot[S];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(g),B.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(g),S++}else if(D.isRectAreaLight){const B=o.rectArea[M];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(g),c.identity(),h.copy(D.matrixWorld),h.premultiply(g),c.extractRotation(h),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),B.halfWidth.applyMatrix4(c),B.halfHeight.applyMatrix4(c),M++}else if(D.isPointLight){const B=o.point[x];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(g),x++}else if(D.isHemisphereLight){const B=o.hemi[y];B.direction.setFromMatrixPosition(D.matrixWorld),B.direction.transformDirection(g),y++}}}return{setup:d,setupView:f,state:o}}function Pc(r,t){const e=new Ig(r,t),s=[],o=[];function l(){s.length=0,o.length=0}function h(m){s.push(m)}function c(m){o.push(m)}function d(m){e.setup(s,m)}function f(m){e.setupView(s,m)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:e},setupLights:d,setupLightsView:f,pushLight:h,pushShadow:c}}function Dg(r,t){let e=new WeakMap;function s(l,h=0){const c=e.get(l);let d;return c===void 0?(d=new Pc(r,t),e.set(l,[d])):h>=c.length?(d=new Pc(r,t),c.push(d)):d=c[h],d}function o(){e=new WeakMap}return{get:s,dispose:o}}class Ug extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ng extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Bg(r,t,e){let s=new ua;const o=new ie,l=new ie,h=new De,c=new Ug({depthPacking:vd}),d=new Ng,f={},p=e.maxTextureSize,m={[ni]:je,[je]:ni,[An]:An},v=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Og,fragmentShader:Fg}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const S=new Je;S.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new en(S,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let g=this.type;this.render=function(I,U,nt){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),$=r.getActiveMipmapLevel(),rt=r.state;rt.setBlending(Qn),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const pt=g!==Bn&&this.type===Bn,F=g===Bn&&this.type!==Bn;for(let J=0,tt=I.length;J<tt;J++){const st=I[J],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const V=X.getFrameExtents();if(o.multiply(V),l.copy(X.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/V.x),o.x=l.x*V.x,X.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/V.y),o.y=l.y*V.y,X.mapSize.y=l.y)),X.map===null||pt===!0||F===!0){const et=this.type!==Bn?{minFilter:Ye,magFilter:Ye}:{};X.map!==null&&X.map.dispose(),X.map=new Ti(o.x,o.y,et),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const z=X.getViewportCount();for(let et=0;et<z;et++){const ot=X.getViewport(et);h.set(l.x*ot.x,l.y*ot.y,l.x*ot.z,l.y*ot.w),rt.viewport(h),X.updateMatrices(st,et),s=X.getFrustum(),D(U,nt,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===Bn&&P(X,nt),X.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(w,C,$)};function P(I,U){const nt=t.update(M);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ti(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(U,null,nt,v,M,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(U,null,nt,x,M,null)}function b(I,U,nt,w){let C=null;const $=nt.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if($!==void 0)C=$;else if(C=nt.isPointLight===!0?d:c,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const rt=C.uuid,pt=U.uuid;let F=f[rt];F===void 0&&(F={},f[rt]=F);let J=F[pt];J===void 0&&(J=C.clone(),F[pt]=J,U.addEventListener("dispose",B)),C=J}if(C.visible=U.visible,C.wireframe=U.wireframe,w===Bn?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:m[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,nt.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const rt=r.properties.get(C);rt.light=nt}return C}function D(I,U,nt,w,C){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Bn)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,I.matrixWorld);const pt=t.update(I),F=I.material;if(Array.isArray(F)){const J=pt.groups;for(let tt=0,st=J.length;tt<st;tt++){const X=J[tt],V=F[X.materialIndex];if(V&&V.visible){const z=b(I,V,w,C);I.onBeforeShadow(r,I,U,nt,pt,z,X),r.renderBufferDirect(nt,null,pt,z,I,X),I.onAfterShadow(r,I,U,nt,pt,z,X)}}}else if(F.visible){const J=b(I,F,w,C);I.onBeforeShadow(r,I,U,nt,pt,J,null),r.renderBufferDirect(nt,null,pt,J,I,null),I.onAfterShadow(r,I,U,nt,pt,J,null)}}const rt=I.children;for(let pt=0,F=rt.length;pt<F;pt++)D(rt[pt],U,nt,w,C)}function B(I){I.target.removeEventListener("dispose",B);for(const nt in f){const w=f[nt],C=I.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function zg(r,t,e){const s=e.isWebGL2;function o(){let O=!1;const gt=new De;let xt=null;const Bt=new De(0,0,0,0);return{setMask:function(Dt){xt!==Dt&&!O&&(r.colorMask(Dt,Dt,Dt,Dt),xt=Dt)},setLocked:function(Dt){O=Dt},setClear:function(Dt,ue,de,Ee,Le){Le===!0&&(Dt*=Ee,ue*=Ee,de*=Ee),gt.set(Dt,ue,de,Ee),Bt.equals(gt)===!1&&(r.clearColor(Dt,ue,de,Ee),Bt.copy(gt))},reset:function(){O=!1,xt=null,Bt.set(-1,0,0,0)}}}function l(){let O=!1,gt=null,xt=null,Bt=null;return{setTest:function(Dt){Dt?Zt(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(Dt){gt!==Dt&&!O&&(r.depthMask(Dt),gt=Dt)},setFunc:function(Dt){if(xt!==Dt){switch(Dt){case qu:r.depthFunc(r.NEVER);break;case Yu:r.depthFunc(r.ALWAYS);break;case ju:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case Ku:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case Ju:r.depthFunc(r.GREATER);break;case Qu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xt=Dt}},setLocked:function(Dt){O=Dt},setClear:function(Dt){Bt!==Dt&&(r.clearDepth(Dt),Bt=Dt)},reset:function(){O=!1,gt=null,xt=null,Bt=null}}}function h(){let O=!1,gt=null,xt=null,Bt=null,Dt=null,ue=null,de=null,Ee=null,Le=null;return{setTest:function(fe){O||(fe?Zt(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(fe){gt!==fe&&!O&&(r.stencilMask(fe),gt=fe)},setFunc:function(fe,Ne,nn){(xt!==fe||Bt!==Ne||Dt!==nn)&&(r.stencilFunc(fe,Ne,nn),xt=fe,Bt=Ne,Dt=nn)},setOp:function(fe,Ne,nn){(ue!==fe||de!==Ne||Ee!==nn)&&(r.stencilOp(fe,Ne,nn),ue=fe,de=Ne,Ee=nn)},setLocked:function(fe){O=fe},setClear:function(fe){Le!==fe&&(r.clearStencil(fe),Le=fe)},reset:function(){O=!1,gt=null,xt=null,Bt=null,Dt=null,ue=null,de=null,Ee=null,Le=null}}}const c=new o,d=new l,f=new h,p=new WeakMap,m=new WeakMap;let v={},x={},S=new WeakMap,M=[],y=null,g=!1,P=null,b=null,D=null,B=null,I=null,U=null,nt=null,w=new le(0,0,0),C=0,$=!1,rt=null,pt=null,F=null,J=null,tt=null;const st=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=V>=2);let et=null,ot={};const W=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),lt=new De().fromArray(W),ft=new De().fromArray(it);function St(O,gt,xt,Bt){const Dt=new Uint8Array(4),ue=r.createTexture();r.bindTexture(O,ue),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<xt;de++)s&&(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)?r.texImage3D(gt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(gt+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return ue}const Ut={};Ut[r.TEXTURE_2D]=St(r.TEXTURE_2D,r.TEXTURE_2D,1),Ut[r.TEXTURE_CUBE_MAP]=St(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Ut[r.TEXTURE_2D_ARRAY]=St(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ut[r.TEXTURE_3D]=St(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),Zt(r.DEPTH_TEST),d.setFunc(Ps),Vt(!1),R(hl),Zt(r.CULL_FACE),wt(Qn);function Zt(O){v[O]!==!0&&(r.enable(O),v[O]=!0)}function Nt(O){v[O]!==!1&&(r.disable(O),v[O]=!1)}function re(O,gt){return x[O]!==gt?(r.bindFramebuffer(O,gt),x[O]=gt,s&&(O===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=gt),O===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=gt)),!0):!1}function Z(O,gt){let xt=M,Bt=!1;if(O)if(xt=S.get(gt),xt===void 0&&(xt=[],S.set(gt,xt)),O.isWebGLMultipleRenderTargets){const Dt=O.texture;if(xt.length!==Dt.length||xt[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,de=Dt.length;ue<de;ue++)xt[ue]=r.COLOR_ATTACHMENT0+ue;xt.length=Dt.length,Bt=!0}}else xt[0]!==r.COLOR_ATTACHMENT0&&(xt[0]=r.COLOR_ATTACHMENT0,Bt=!0);else xt[0]!==r.BACK&&(xt[0]=r.BACK,Bt=!0);Bt&&(e.isWebGL2?r.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function Ae(O){return y!==O?(r.useProgram(O),y=O,!0):!1}const It={[xi]:r.FUNC_ADD,[Iu]:r.FUNC_SUBTRACT,[Du]:r.FUNC_REVERSE_SUBTRACT};if(s)It[pl]=r.MIN,It[ml]=r.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(It[pl]=O.MIN_EXT,It[ml]=O.MAX_EXT)}const Gt={[Uu]:r.ZERO,[Nu]:r.ONE,[Ou]:r.SRC_COLOR,[Zo]:r.SRC_ALPHA,[Gu]:r.SRC_ALPHA_SATURATE,[ku]:r.DST_COLOR,[Bu]:r.DST_ALPHA,[Fu]:r.ONE_MINUS_SRC_COLOR,[qo]:r.ONE_MINUS_SRC_ALPHA,[Hu]:r.ONE_MINUS_DST_COLOR,[zu]:r.ONE_MINUS_DST_ALPHA,[Vu]:r.CONSTANT_COLOR,[Wu]:r.ONE_MINUS_CONSTANT_COLOR,[Xu]:r.CONSTANT_ALPHA,[Zu]:r.ONE_MINUS_CONSTANT_ALPHA};function wt(O,gt,xt,Bt,Dt,ue,de,Ee,Le,fe){if(O===Qn){g===!0&&(Nt(r.BLEND),g=!1);return}if(g===!1&&(Zt(r.BLEND),g=!0),O!==Cu){if(O!==P||fe!==$){if((b!==xi||I!==xi)&&(r.blendEquation(r.FUNC_ADD),b=xi,I=xi),fe)switch(O){case tr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ul:r.blendFunc(r.ONE,r.ONE);break;case dl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case tr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ul:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}D=null,B=null,U=null,nt=null,w.set(0,0,0),C=0,P=O,$=fe}return}Dt=Dt||gt,ue=ue||xt,de=de||Bt,(gt!==b||Dt!==I)&&(r.blendEquationSeparate(It[gt],It[Dt]),b=gt,I=Dt),(xt!==D||Bt!==B||ue!==U||de!==nt)&&(r.blendFuncSeparate(Gt[xt],Gt[Bt],Gt[ue],Gt[de]),D=xt,B=Bt,U=ue,nt=de),(Ee.equals(w)===!1||Le!==C)&&(r.blendColor(Ee.r,Ee.g,Ee.b,Le),w.copy(Ee),C=Le),P=O,$=!1}function me(O,gt){O.side===An?Nt(r.CULL_FACE):Zt(r.CULL_FACE);let xt=O.side===je;gt&&(xt=!xt),Vt(xt),O.blending===tr&&O.transparent===!1?wt(Qn):wt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),d.setFunc(O.depthFunc),d.setTest(O.depthTest),d.setMask(O.depthWrite),c.setMask(O.colorWrite);const Bt=O.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Zt(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(O){rt!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),rt=O)}function R(O){O!==Lu?(Zt(r.CULL_FACE),O!==pt&&(O===hl?r.cullFace(r.BACK):O===Pu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),pt=O}function T(O){O!==F&&(X&&r.lineWidth(O),F=O)}function q(O,gt,xt){O?(Zt(r.POLYGON_OFFSET_FILL),(J!==gt||tt!==xt)&&(r.polygonOffset(gt,xt),J=gt,tt=xt)):Nt(r.POLYGON_OFFSET_FILL)}function ut(O){O?Zt(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function ht(O){O===void 0&&(O=r.TEXTURE0+st-1),et!==O&&(r.activeTexture(O),et=O)}function dt(O,gt,xt){xt===void 0&&(et===null?xt=r.TEXTURE0+st-1:xt=et);let Bt=ot[xt];Bt===void 0&&(Bt={type:void 0,texture:void 0},ot[xt]=Bt),(Bt.type!==O||Bt.texture!==gt)&&(et!==xt&&(r.activeTexture(xt),et=xt),r.bindTexture(O,gt||Ut[O]),Bt.type=O,Bt.texture=gt)}function At(){const O=ot[et];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function vt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Kt(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(O){lt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),lt.copy(O))}function oe(O){ft.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function xe(O,gt){let xt=m.get(gt);xt===void 0&&(xt=new WeakMap,m.set(gt,xt));let Bt=xt.get(O);Bt===void 0&&(Bt=r.getUniformBlockIndex(gt,O.name),xt.set(O,Bt))}function Jt(O,gt){const Bt=m.get(gt).get(O);p.get(gt)!==Bt&&(r.uniformBlockBinding(gt,Bt,O.__bindingPointIndex),p.set(gt,Bt))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},et=null,ot={},x={},S=new WeakMap,M=[],y=null,g=!1,P=null,b=null,D=null,B=null,I=null,U=null,nt=null,w=new le(0,0,0),C=0,$=!1,rt=null,pt=null,F=null,J=null,tt=null,lt.set(0,0,r.canvas.width,r.canvas.height),ft.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:Zt,disable:Nt,bindFramebuffer:re,drawBuffers:Z,useProgram:Ae,setBlending:wt,setMaterial:me,setFlipSided:Vt,setCullFace:R,setLineWidth:T,setPolygonOffset:q,setScissorTest:ut,activeTexture:ht,bindTexture:dt,unbindTexture:At,compressedTexImage2D:vt,compressedTexImage3D:Et,texImage2D:Rt,texImage3D:Tt,updateUBOMapping:xe,uniformBlockBinding:Jt,texStorage2D:te,texStorage3D:kt,texSubImage2D:Ot,texSubImage3D:Kt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ce,scissor:Yt,viewport:oe,reset:mt}}function kg(r,t,e,s,o,l,h){const c=o.isWebGL2,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,T){return x?new OffscreenCanvas(R,T):Dr("canvas")}function M(R,T,q,ut){let ht=1;if((R.width>ut||R.height>ut)&&(ht=ut/Math.max(R.width,R.height)),ht<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const dt=T?Us:Math.floor,At=dt(ht*R.width),vt=dt(ht*R.height);m===void 0&&(m=S(At,vt));const Et=q?S(At,vt):m;return Et.width=At,Et.height=vt,Et.getContext("2d").drawImage(R,0,0,At,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+At+"x"+vt+")."),Et}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return Qo(R.width)&&Qo(R.height)}function g(R){return c?!1:R.wrapS!==yn||R.wrapT!==yn||R.minFilter!==Ye&&R.minFilter!==un}function P(R,T){return R.generateMipmaps&&T&&R.minFilter!==Ye&&R.minFilter!==un}function b(R){r.generateMipmap(R)}function D(R,T,q,ut,ht=!1){if(c===!1)return T;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt=T;if(T===r.RED&&(q===r.FLOAT&&(dt=r.R32F),q===r.HALF_FLOAT&&(dt=r.R16F),q===r.UNSIGNED_BYTE&&(dt=r.R8)),T===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(dt=r.R8UI),q===r.UNSIGNED_SHORT&&(dt=r.R16UI),q===r.UNSIGNED_INT&&(dt=r.R32UI),q===r.BYTE&&(dt=r.R8I),q===r.SHORT&&(dt=r.R16I),q===r.INT&&(dt=r.R32I)),T===r.RG&&(q===r.FLOAT&&(dt=r.RG32F),q===r.HALF_FLOAT&&(dt=r.RG16F),q===r.UNSIGNED_BYTE&&(dt=r.RG8)),T===r.RGBA){const At=ht?Rs:pe.getTransfer(ut);q===r.FLOAT&&(dt=r.RGBA32F),q===r.HALF_FLOAT&&(dt=r.RGBA16F),q===r.UNSIGNED_BYTE&&(dt=At===ve?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function B(R,T,q){return P(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function I(R){return R===Ye||R===_l||R===po?r.NEAREST:r.LINEAR}function U(R){const T=R.target;T.removeEventListener("dispose",U),w(T),T.isVideoTexture&&p.delete(T)}function nt(R){const T=R.target;T.removeEventListener("dispose",nt),$(T)}function w(R){const T=s.get(R);if(T.__webglInit===void 0)return;const q=R.source,ut=v.get(q);if(ut){const ht=ut[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&C(R),Object.keys(ut).length===0&&v.delete(q)}s.remove(R)}function C(R){const T=s.get(R);r.deleteTexture(T.__webglTexture);const q=R.source,ut=v.get(q);delete ut[T.__cacheKey],h.memory.textures--}function $(R){const T=R.texture,q=s.get(R),ut=s.get(T);if(ut.__webglTexture!==void 0&&(r.deleteTexture(ut.__webglTexture),h.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(q.__webglFramebuffer[ht]))for(let dt=0;dt<q.__webglFramebuffer[ht].length;dt++)r.deleteFramebuffer(q.__webglFramebuffer[ht][dt]);else r.deleteFramebuffer(q.__webglFramebuffer[ht]);q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[ht])}else{if(Array.isArray(q.__webglFramebuffer))for(let ht=0;ht<q.__webglFramebuffer.length;ht++)r.deleteFramebuffer(q.__webglFramebuffer[ht]);else r.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ht=0;ht<q.__webglColorRenderbuffer.length;ht++)q.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[ht]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ht=0,dt=T.length;ht<dt;ht++){const At=s.get(T[ht]);At.__webglTexture&&(r.deleteTexture(At.__webglTexture),h.memory.textures--),s.remove(T[ht])}s.remove(T),s.remove(R)}let rt=0;function pt(){rt=0}function F(){const R=rt;return R>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),rt+=1,R}function J(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function tt(R,T){const q=s.get(R);if(R.isVideoTexture&&me(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const ut=R.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(q,R,T);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+T)}function st(R,T){const q=s.get(R);if(R.version>0&&q.__version!==R.version){lt(q,R,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+T)}function X(R,T){const q=s.get(R);if(R.version>0&&q.__version!==R.version){lt(q,R,T);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+T)}function V(R,T){const q=s.get(R);if(R.version>0&&q.__version!==R.version){ft(q,R,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+T)}const z={[Ko]:r.REPEAT,[yn]:r.CLAMP_TO_EDGE,[$o]:r.MIRRORED_REPEAT},et={[Ye]:r.NEAREST,[_l]:r.NEAREST_MIPMAP_NEAREST,[po]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[ld]:r.LINEAR_MIPMAP_NEAREST,[Rr]:r.LINEAR_MIPMAP_LINEAR},ot={[yd]:r.NEVER,[wd]:r.ALWAYS,[Md]:r.LESS,[Qc]:r.LEQUAL,[Sd]:r.EQUAL,[bd]:r.GEQUAL,[Ed]:r.GREATER,[Td]:r.NOTEQUAL};function W(R,T,q){if(q?(r.texParameteri(R,r.TEXTURE_WRAP_S,z[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,z[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,z[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,et[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,et[T.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==yn||T.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I(T.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I(T.minFilter)),T.minFilter!==Ye&&T.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ot[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ut=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ye||T.minFilter!==po&&T.minFilter!==Rr||T.type===Jn&&t.has("OES_texture_float_linear")===!1||c===!1&&T.type===Cr&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||s.get(T).__currentAnisotropy)&&(r.texParameterf(R,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy)}}function it(R,T){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",U));const ut=T.source;let ht=v.get(ut);ht===void 0&&(ht={},v.set(ut,ht));const dt=J(T);if(dt!==R.__cacheKey){ht[dt]===void 0&&(ht[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),ht[dt].usedTimes++;const At=ht[R.__cacheKey];At!==void 0&&(ht[R.__cacheKey].usedTimes--,At.usedTimes===0&&C(T)),R.__cacheKey=dt,R.__webglTexture=ht[dt].texture}return q}function lt(R,T,q){let ut=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=r.TEXTURE_3D);const ht=it(R,T),dt=T.source;e.bindTexture(ut,R.__webglTexture,r.TEXTURE0+q);const At=s.get(dt);if(dt.version!==At.__version||ht===!0){e.activeTexture(r.TEXTURE0+q);const vt=pe.getPrimaries(pe.workingColorSpace),Et=T.colorSpace===fn?null:pe.getPrimaries(T.colorSpace),Ot=T.colorSpace===fn||vt===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Kt=g(T)&&y(T.image)===!1;let ct=M(T.image,Kt,!1,o.maxTextureSize);ct=Vt(T,ct);const ce=y(ct)||c,te=l.convert(T.format,T.colorSpace);let kt=l.convert(T.type),Rt=D(T.internalFormat,te,kt,T.colorSpace,T.isVideoTexture);W(ut,T,ce);let Tt;const Yt=T.mipmaps,oe=c&&T.isVideoTexture!==!0&&Rt!==Kc,xe=At.__version===void 0||ht===!0,Jt=B(T,ct,ce);if(T.isDepthTexture)Rt=r.DEPTH_COMPONENT,c?T.type===Jn?Rt=r.DEPTH_COMPONENT32F:T.type===$n?Rt=r.DEPTH_COMPONENT24:T.type===Mi?Rt=r.DEPTH24_STENCIL8:Rt=r.DEPTH_COMPONENT16:T.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Si&&Rt===r.DEPTH_COMPONENT&&T.type!==aa&&T.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=$n,kt=l.convert(T.type)),T.format===rr&&Rt===r.DEPTH_COMPONENT&&(Rt=r.DEPTH_STENCIL,T.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Mi,kt=l.convert(T.type))),xe&&(oe?e.texStorage2D(r.TEXTURE_2D,1,Rt,ct.width,ct.height):e.texImage2D(r.TEXTURE_2D,0,Rt,ct.width,ct.height,0,te,kt,null));else if(T.isDataTexture)if(Yt.length>0&&ce){oe&&xe&&e.texStorage2D(r.TEXTURE_2D,Jt,Rt,Yt[0].width,Yt[0].height);for(let mt=0,O=Yt.length;mt<O;mt++)Tt=Yt[mt],oe?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,te,kt,Tt.data):e.texImage2D(r.TEXTURE_2D,mt,Rt,Tt.width,Tt.height,0,te,kt,Tt.data);T.generateMipmaps=!1}else oe?(xe&&e.texStorage2D(r.TEXTURE_2D,Jt,Rt,ct.width,ct.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct.width,ct.height,te,kt,ct.data)):e.texImage2D(r.TEXTURE_2D,0,Rt,ct.width,ct.height,0,te,kt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&xe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Jt,Rt,Yt[0].width,Yt[0].height,ct.depth);for(let mt=0,O=Yt.length;mt<O;mt++)Tt=Yt[mt],T.format!==Mn?te!==null?oe?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,ct.depth,te,Tt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Rt,Tt.width,Tt.height,ct.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,ct.depth,te,kt,Tt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,mt,Rt,Tt.width,Tt.height,ct.depth,0,te,kt,Tt.data)}else{oe&&xe&&e.texStorage2D(r.TEXTURE_2D,Jt,Rt,Yt[0].width,Yt[0].height);for(let mt=0,O=Yt.length;mt<O;mt++)Tt=Yt[mt],T.format!==Mn?te!==null?oe?e.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,te,Tt.data):e.compressedTexImage2D(r.TEXTURE_2D,mt,Rt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,te,kt,Tt.data):e.texImage2D(r.TEXTURE_2D,mt,Rt,Tt.width,Tt.height,0,te,kt,Tt.data)}else if(T.isDataArrayTexture)oe?(xe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Jt,Rt,ct.width,ct.height,ct.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,te,kt,ct.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Rt,ct.width,ct.height,ct.depth,0,te,kt,ct.data);else if(T.isData3DTexture)oe?(xe&&e.texStorage3D(r.TEXTURE_3D,Jt,Rt,ct.width,ct.height,ct.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,te,kt,ct.data)):e.texImage3D(r.TEXTURE_3D,0,Rt,ct.width,ct.height,ct.depth,0,te,kt,ct.data);else if(T.isFramebufferTexture){if(xe)if(oe)e.texStorage2D(r.TEXTURE_2D,Jt,Rt,ct.width,ct.height);else{let mt=ct.width,O=ct.height;for(let gt=0;gt<Jt;gt++)e.texImage2D(r.TEXTURE_2D,gt,Rt,mt,O,0,te,kt,null),mt>>=1,O>>=1}}else if(Yt.length>0&&ce){oe&&xe&&e.texStorage2D(r.TEXTURE_2D,Jt,Rt,Yt[0].width,Yt[0].height);for(let mt=0,O=Yt.length;mt<O;mt++)Tt=Yt[mt],oe?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,te,kt,Tt):e.texImage2D(r.TEXTURE_2D,mt,Rt,te,kt,Tt);T.generateMipmaps=!1}else oe?(xe&&e.texStorage2D(r.TEXTURE_2D,Jt,Rt,ct.width,ct.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,te,kt,ct)):e.texImage2D(r.TEXTURE_2D,0,Rt,te,kt,ct);P(T,ce)&&b(ut),At.__version=dt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ft(R,T,q){if(T.image.length!==6)return;const ut=it(R,T),ht=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+q);const dt=s.get(ht);if(ht.version!==dt.__version||ut===!0){e.activeTexture(r.TEXTURE0+q);const At=pe.getPrimaries(pe.workingColorSpace),vt=T.colorSpace===fn?null:pe.getPrimaries(T.colorSpace),Et=T.colorSpace===fn||At===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Ot=T.isCompressedTexture||T.image[0].isCompressedTexture,Kt=T.image[0]&&T.image[0].isDataTexture,ct=[];for(let mt=0;mt<6;mt++)!Ot&&!Kt?ct[mt]=M(T.image[mt],!1,!0,o.maxCubemapSize):ct[mt]=Kt?T.image[mt].image:T.image[mt],ct[mt]=Vt(T,ct[mt]);const ce=ct[0],te=y(ce)||c,kt=l.convert(T.format,T.colorSpace),Rt=l.convert(T.type),Tt=D(T.internalFormat,kt,Rt,T.colorSpace),Yt=c&&T.isVideoTexture!==!0,oe=dt.__version===void 0||ut===!0;let xe=B(T,ce,te);W(r.TEXTURE_CUBE_MAP,T,te);let Jt;if(Ot){Yt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xe,Tt,ce.width,ce.height);for(let mt=0;mt<6;mt++){Jt=ct[mt].mipmaps;for(let O=0;O<Jt.length;O++){const gt=Jt[O];T.format!==Mn?kt!==null?Yt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O,0,0,gt.width,gt.height,kt,gt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O,Tt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O,0,0,gt.width,gt.height,kt,Rt,gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O,Tt,gt.width,gt.height,0,kt,Rt,gt.data)}}}else{Jt=T.mipmaps,Yt&&oe&&(Jt.length>0&&xe++,e.texStorage2D(r.TEXTURE_CUBE_MAP,xe,Tt,ct[0].width,ct[0].height));for(let mt=0;mt<6;mt++)if(Kt){Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ct[mt].width,ct[mt].height,kt,Rt,ct[mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,ct[mt].width,ct[mt].height,0,kt,Rt,ct[mt].data);for(let O=0;O<Jt.length;O++){const xt=Jt[O].image[mt].image;Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O+1,0,0,xt.width,xt.height,kt,Rt,xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O+1,Tt,xt.width,xt.height,0,kt,Rt,xt.data)}}else{Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,kt,Rt,ct[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,kt,Rt,ct[mt]);for(let O=0;O<Jt.length;O++){const gt=Jt[O];Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O+1,0,0,kt,Rt,gt.image[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,O+1,Tt,kt,Rt,gt.image[mt])}}}P(T,te)&&b(r.TEXTURE_CUBE_MAP),dt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function St(R,T,q,ut,ht,dt){const At=l.convert(q.format,q.colorSpace),vt=l.convert(q.type),Et=D(q.internalFormat,At,vt,q.colorSpace);if(!s.get(T).__hasExternalTextures){const Kt=Math.max(1,T.width>>dt),ct=Math.max(1,T.height>>dt);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?e.texImage3D(ht,dt,Et,Kt,ct,T.depth,0,At,vt,null):e.texImage2D(ht,dt,Et,Kt,ct,0,At,vt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),wt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,ht,s.get(q).__webglTexture,0,Gt(T)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,ht,s.get(q).__webglTexture,dt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(R,T,q){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ut=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(q||wt(T)){const ht=T.depthTexture;ht&&ht.isDepthTexture&&(ht.type===Jn?ut=r.DEPTH_COMPONENT32F:ht.type===$n&&(ut=r.DEPTH_COMPONENT24));const dt=Gt(T);wt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,ut,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,ut,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ut,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ut=Gt(T);q&&wt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,r.DEPTH24_STENCIL8,T.width,T.height):wt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ut=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ht=0;ht<ut.length;ht++){const dt=ut[ht],At=l.convert(dt.format,dt.colorSpace),vt=l.convert(dt.type),Et=D(dt.internalFormat,At,vt,dt.colorSpace),Ot=Gt(T);q&&wt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,Et,T.width,T.height):wt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot,Et,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Et,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Zt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),tt(T.depthTexture,0);const ut=s.get(T.depthTexture).__webglTexture,ht=Gt(T);if(T.depthTexture.format===Si)wt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ut,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ut,0);else if(T.depthTexture.format===rr)wt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ut,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Nt(R){const T=s.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Zt(T.__webglFramebuffer,R)}else if(q){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]=r.createRenderbuffer(),Ut(T.__webglDepthbuffer[ut],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Ut(T.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,T,q){const ut=s.get(R);T!==void 0&&St(ut.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Nt(R)}function Z(R){const T=R.texture,q=s.get(R),ut=s.get(T);R.addEventListener("dispose",nt),R.isWebGLMultipleRenderTargets!==!0&&(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=T.version,h.memory.textures++);const ht=R.isWebGLCubeRenderTarget===!0,dt=R.isWebGLMultipleRenderTargets===!0,At=y(R)||c;if(ht){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(c&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let Et=0;Et<T.mipmaps.length;Et++)q.__webglFramebuffer[vt][Et]=r.createFramebuffer()}else q.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)q.__webglFramebuffer[vt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(dt)if(o.drawBuffers){const vt=R.texture;for(let Et=0,Ot=vt.length;Et<Ot;Et++){const Kt=s.get(vt[Et]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=r.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&R.samples>0&&wt(R)===!1){const vt=dt?T:[T];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Et=0;Et<vt.length;Et++){const Ot=vt[Et];q.__webglColorRenderbuffer[Et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Et]);const Kt=l.convert(Ot.format,Ot.colorSpace),ct=l.convert(Ot.type),ce=D(Ot.internalFormat,Kt,ct,Ot.colorSpace,R.isXRRenderTarget===!0),te=Gt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,q.__webglColorRenderbuffer[Et])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){e.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),W(r.TEXTURE_CUBE_MAP,T,At);for(let vt=0;vt<6;vt++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)St(q.__webglFramebuffer[vt][Et],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Et);else St(q.__webglFramebuffer[vt],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);P(T,At)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const vt=R.texture;for(let Et=0,Ot=vt.length;Et<Ot;Et++){const Kt=vt[Et],ct=s.get(Kt);e.bindTexture(r.TEXTURE_2D,ct.__webglTexture),W(r.TEXTURE_2D,Kt,At),St(q.__webglFramebuffer,R,Kt,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,0),P(Kt,At)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let vt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(c?vt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ut.__webglTexture),W(vt,T,At),c&&T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)St(q.__webglFramebuffer[Et],R,T,r.COLOR_ATTACHMENT0,vt,Et);else St(q.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,vt,0);P(T,At)&&b(vt),e.unbindTexture()}R.depthBuffer&&Nt(R)}function Ae(R){const T=y(R)||c,q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ut=0,ht=q.length;ut<ht;ut++){const dt=q[ut];if(P(dt,T)){const At=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,vt=s.get(dt).__webglTexture;e.bindTexture(At,vt),b(At),e.unbindTexture()}}}function It(R){if(c&&R.samples>0&&wt(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],q=R.width,ut=R.height;let ht=r.COLOR_BUFFER_BIT;const dt=[],At=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=s.get(R),Et=R.isWebGLMultipleRenderTargets===!0;if(Et)for(let Ot=0;Ot<T.length;Ot++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ot=0;Ot<T.length;Ot++){dt.push(r.COLOR_ATTACHMENT0+Ot),R.depthBuffer&&dt.push(At);const Kt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Kt===!1&&(R.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),Et&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Ot]),Kt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[At]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[At])),Et){const ct=s.get(T[Ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,q,ut,0,0,q,ut,ht,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Et)for(let Ot=0;Ot<T.length;Ot++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Ot]);const Kt=s.get(T[Ot]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,Kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Gt(R){return Math.min(o.maxSamples,R.samples)}function wt(R){const T=s.get(R);return c&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(R){const T=h.render.frame;p.get(R)!==T&&(p.set(R,T),R.update())}function Vt(R,T){const q=R.colorSpace,ut=R.format,ht=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Jo||q!==Gn&&q!==fn&&(pe.getTransfer(q)===ve?c===!1?t.has("EXT_sRGB")===!0&&ut===Mn?(R.format=Jo,R.minFilter=un,R.generateMipmaps=!1):T=eh.sRGBToLinear(T):(ut!==Mn||ht!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=F,this.resetTextureUnits=pt,this.setTexture2D=tt,this.setTexture2DArray=st,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=re,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=wt}function Hg(r,t,e){const s=e.isWebGL2;function o(l,h=fn){let c;const d=pe.getTransfer(h);if(l===ei)return r.UNSIGNED_BYTE;if(l===Xc)return r.UNSIGNED_SHORT_4_4_4_4;if(l===Zc)return r.UNSIGNED_SHORT_5_5_5_1;if(l===cd)return r.BYTE;if(l===hd)return r.SHORT;if(l===aa)return r.UNSIGNED_SHORT;if(l===Wc)return r.INT;if(l===$n)return r.UNSIGNED_INT;if(l===Jn)return r.FLOAT;if(l===Cr)return s?r.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===ud)return r.ALPHA;if(l===Mn)return r.RGBA;if(l===dd)return r.LUMINANCE;if(l===fd)return r.LUMINANCE_ALPHA;if(l===Si)return r.DEPTH_COMPONENT;if(l===rr)return r.DEPTH_STENCIL;if(l===Jo)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===pd)return r.RED;if(l===qc)return r.RED_INTEGER;if(l===md)return r.RG;if(l===Yc)return r.RG_INTEGER;if(l===jc)return r.RGBA_INTEGER;if(l===mo||l===_o||l===go||l===vo)if(d===ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===mo)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===_o)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===go)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===vo)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===mo)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===_o)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===go)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===vo)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===gl||l===vl||l===xl||l===yl)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===gl)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===vl)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===xl)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===yl)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Kc)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Ml||l===Sl)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Ml)return d===ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Sl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===El||l===Tl||l===bl||l===wl||l===Al||l===Ll||l===Pl||l===Rl||l===Cl||l===Il||l===Dl||l===Ul||l===Nl||l===Ol)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(l===El)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Tl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===bl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===wl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Al)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Ll)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Pl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Rl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Cl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Il)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Dl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Ul)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Nl)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Ol)return d===ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===xo||l===Fl||l===Bl)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(l===xo)return d===ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Fl)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Bl)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===_d||l===zl||l===kl||l===Hl)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(l===xo)return c.COMPRESSED_RED_RGTC1_EXT;if(l===zl)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===kl)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Hl)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Mi?s?r.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:o}}class Gg extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qi extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vg={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const s of t.hand.values())this._getHandJoint(e,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,s){let o=null,l=null,h=null;const c=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){h=!0;for(const M of t.hand.values()){const y=e.getJointPose(M,s),g=this._getHandJoint(f,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],v=p.position.distanceTo(m.position),x=.02,S=.005;f.inputState.pinching&&v>x+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&v<=x-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=e.getPose(t.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),f!==null&&(f.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const s=new Qi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[e.jointName]=s,t.add(s)}return t.joints[e.jointName]}}class Wg extends or{constructor(t,e){super();const s=this;let o=null,l=1,h=null,c="local-floor",d=1,f=null,p=null,m=null,v=null,x=null,S=null;const M=e.getContextAttributes();let y=null,g=null;const P=[],b=[],D=new ie;let B=null;const I=new dn;I.layers.enable(1),I.viewport=new De;const U=new dn;U.layers.enable(2),U.viewport=new De;const nt=[I,U],w=new Gg;w.layers.enable(1),w.layers.enable(2);let C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=P[W];return it===void 0&&(it=new Go,P[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=P[W];return it===void 0&&(it=new Go,P[W]=it),it.getGripSpace()},this.getHand=function(W){let it=P[W];return it===void 0&&(it=new Go,P[W]=it),it.getHandSpace()};function rt(W){const it=b.indexOf(W.inputSource);if(it===-1)return;const lt=P[it];lt!==void 0&&(lt.update(W.inputSource,W.frame,f||h),lt.dispatchEvent({type:W.type,data:W.inputSource}))}function pt(){o.removeEventListener("select",rt),o.removeEventListener("selectstart",rt),o.removeEventListener("selectend",rt),o.removeEventListener("squeeze",rt),o.removeEventListener("squeezestart",rt),o.removeEventListener("squeezeend",rt),o.removeEventListener("end",pt),o.removeEventListener("inputsourceschange",F);for(let W=0;W<P.length;W++){const it=b[W];it!==null&&(b[W]=null,P[W].disconnect(it))}C=null,$=null,t.setRenderTarget(y),x=null,v=null,m=null,o=null,g=null,ot.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(D.width,D.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){l=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){c=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||h},this.setReferenceSpace=function(W){f=W},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(y=t.getRenderTarget(),o.addEventListener("select",rt),o.addEventListener("selectstart",rt),o.addEventListener("selectend",rt),o.addEventListener("squeeze",rt),o.addEventListener("squeezestart",rt),o.addEventListener("squeezeend",rt),o.addEventListener("end",pt),o.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(D),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const it={antialias:o.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,e,it),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),g=new Ti(x.framebufferWidth,x.framebufferHeight,{format:Mn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let it=null,lt=null,ft=null;M.depth&&(ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=M.stencil?rr:Si,lt=M.stencil?Mi:$n);const St={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:l};m=new XRWebGLBinding(o,e),v=m.createProjectionLayer(St),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),g=new Ti(v.textureWidth,v.textureHeight,{format:Mn,type:ei,depthTexture:new dh(v.textureWidth,v.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const Ut=t.properties.get(g);Ut.__ignoreDepthValues=v.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(d),f=null,h=await o.requestReferenceSpace(c),ot.setContext(o),ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function F(W){for(let it=0;it<W.removed.length;it++){const lt=W.removed[it],ft=b.indexOf(lt);ft>=0&&(b[ft]=null,P[ft].disconnect(lt))}for(let it=0;it<W.added.length;it++){const lt=W.added[it];let ft=b.indexOf(lt);if(ft===-1){for(let Ut=0;Ut<P.length;Ut++)if(Ut>=b.length){b.push(lt),ft=Ut;break}else if(b[Ut]===null){b[Ut]=lt,ft=Ut;break}if(ft===-1)break}const St=P[ft];St&&St.connect(lt)}}const J=new G,tt=new G;function st(W,it,lt){J.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(lt.matrixWorld);const ft=J.distanceTo(tt),St=it.projectionMatrix.elements,Ut=lt.projectionMatrix.elements,Zt=St[14]/(St[10]-1),Nt=St[14]/(St[10]+1),re=(St[9]+1)/St[5],Z=(St[9]-1)/St[5],Ae=(St[8]-1)/St[0],It=(Ut[8]+1)/Ut[0],Gt=Zt*Ae,wt=Zt*It,me=ft/(-Ae+It),Vt=me*-Ae;it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Vt),W.translateZ(me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const R=Zt+me,T=Nt+me,q=Gt-Vt,ut=wt+(ft-Vt),ht=re*Nt/T*R,dt=Z*Nt/T*R;W.projectionMatrix.makePerspective(q,ut,ht,dt,R,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;w.near=U.near=I.near=W.near,w.far=U.far=I.far=W.far,(C!==w.near||$!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,$=w.far);const it=W.parent,lt=w.cameras;X(w,it);for(let ft=0;ft<lt.length;ft++)X(lt[ft],it);lt.length===2?st(w,I,U):w.projectionMatrix.copy(I.projectionMatrix),V(W,w,it)};function V(W,it,lt){lt===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(lt.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ir*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(W){d=W,v!==null&&(v.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)};let z=null;function et(W,it){if(p=it.getViewerPose(f||h),S=it,p!==null){const lt=p.views;x!==null&&(t.setRenderTargetFramebuffer(g,x.framebuffer),t.setRenderTarget(g));let ft=!1;lt.length!==w.cameras.length&&(w.cameras.length=0,ft=!0);for(let St=0;St<lt.length;St++){const Ut=lt[St];let Zt=null;if(x!==null)Zt=x.getViewport(Ut);else{const re=m.getViewSubImage(v,Ut);Zt=re.viewport,St===0&&(t.setRenderTargetTextures(g,re.colorTexture,v.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(g))}let Nt=nt[St];Nt===void 0&&(Nt=new dn,Nt.layers.enable(St),Nt.viewport=new De,nt[St]=Nt),Nt.matrix.fromArray(Ut.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ut.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),St===0&&(w.matrix.copy(Nt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ft===!0&&w.cameras.push(Nt)}}for(let lt=0;lt<P.length;lt++){const ft=b[lt],St=P[lt];ft!==null&&St!==void 0&&St.update(ft,it,f||h)}z&&z(W,it),it.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:it}),S=null}const ot=new hh;ot.setAnimationLoop(et),this.setAnimationLoop=function(W){z=W},this.dispose=function(){}}}function Xg(r,t){function e(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,ah(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function o(y,g,P,b,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),m(y,g)):g.isMeshPhongMaterial?(l(y,g),p(y,g)):g.isMeshStandardMaterial?(l(y,g),v(y,g),g.isMeshPhysicalMaterial&&x(y,g,D)):g.isMeshMatcapMaterial?(l(y,g),S(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),M(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&c(y,g)):g.isPointsMaterial?d(y,g,P,b):g.isSpriteMaterial?f(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,e(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===je&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,e(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===je&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,e(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,e(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const P=t.get(g).envMap;if(P&&(y.envMap.value=P,y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;const b=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*b,e(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform))}function c(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function d(y,g,P,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*P,y.scale.value=b*.5,g.map&&(y.map.value=g.map,e(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,y.roughnessMapTransform)),t.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function x(y,g,P){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===je&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){const P=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function Zg(r,t,e,s){let o={},l={},h=[];const c=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(P,b){const D=b.program;s.uniformBlockBinding(P,D)}function f(P,b){let D=o[P.id];D===void 0&&(S(P),D=p(P),o[P.id]=D,P.addEventListener("dispose",y));const B=b.program;s.updateUBOMapping(P,B);const I=t.render.frame;l[P.id]!==I&&(v(P),l[P.id]=I)}function p(P){const b=m();P.__bindingPointIndex=b;const D=r.createBuffer(),B=P.__size,I=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,D),D}function m(){for(let P=0;P<c;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const b=o[P.id],D=P.uniforms,B=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let I=0,U=D.length;I<U;I++){const nt=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,C=nt.length;w<C;w++){const $=nt[w];if(x($,I,w,B)===!0){const rt=$.__offset,pt=Array.isArray($.value)?$.value:[$.value];let F=0;for(let J=0;J<pt.length;J++){const tt=pt[J],st=M(tt);typeof tt=="number"||typeof tt=="boolean"?($.__data[0]=tt,r.bufferSubData(r.UNIFORM_BUFFER,rt+F,$.__data)):tt.isMatrix3?($.__data[0]=tt.elements[0],$.__data[1]=tt.elements[1],$.__data[2]=tt.elements[2],$.__data[3]=0,$.__data[4]=tt.elements[3],$.__data[5]=tt.elements[4],$.__data[6]=tt.elements[5],$.__data[7]=0,$.__data[8]=tt.elements[6],$.__data[9]=tt.elements[7],$.__data[10]=tt.elements[8],$.__data[11]=0):(tt.toArray($.__data,F),F+=st.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,rt,$.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(P,b,D,B){const I=P.value,U=b+"_"+D;if(B[U]===void 0)return typeof I=="number"||typeof I=="boolean"?B[U]=I:B[U]=I.clone(),!0;{const nt=B[U];if(typeof I=="number"||typeof I=="boolean"){if(nt!==I)return B[U]=I,!0}else if(nt.equals(I)===!1)return nt.copy(I),!0}return!1}function S(P){const b=P.uniforms;let D=0;const B=16;for(let U=0,nt=b.length;U<nt;U++){const w=Array.isArray(b[U])?b[U]:[b[U]];for(let C=0,$=w.length;C<$;C++){const rt=w[C],pt=Array.isArray(rt.value)?rt.value:[rt.value];for(let F=0,J=pt.length;F<J;F++){const tt=pt[F],st=M(tt),X=D%B;X!==0&&B-X<st.boundary&&(D+=B-X),rt.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=D,D+=st.storage}}}const I=D%B;return I>0&&(D+=B-I),P.__size=D,P.__cache={},this}function M(P){const b={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(b.boundary=4,b.storage=4):P.isVector2?(b.boundary=8,b.storage=8):P.isVector3||P.isColor?(b.boundary=16,b.storage=12):P.isVector4?(b.boundary=16,b.storage=16):P.isMatrix3?(b.boundary=48,b.storage=48):P.isMatrix4?(b.boundary=64,b.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),b}function y(P){const b=P.target;b.removeEventListener("dispose",y);const D=h.indexOf(b.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function g(){for(const P in o)r.deleteBuffer(o[P]);h=[],o={},l={}}return{bind:d,update:f,dispose:g}}class vh{constructor(t={}){const{canvas:e=Hd(),context:s=null,depth:o=!0,stencil:l=!0,alpha:h=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let v;s!==null?v=s.getContextAttributes().alpha:v=h;const x=new Uint32Array(4),S=new Int32Array(4);let M=null,y=null;const g=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const b=this;let D=!1,B=0,I=0,U=null,nt=-1,w=null;const C=new De,$=new De;let rt=null;const pt=new le(0);let F=0,J=e.width,tt=e.height,st=1,X=null,V=null;const z=new De(0,0,J,tt),et=new De(0,0,J,tt);let ot=!1;const W=new ua;let it=!1,lt=!1,ft=null;const St=new Se,Ut=new ie,Zt=new G,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return U===null?st:1}let Z=s;function Ae(A,k){for(let K=0;K<A.length;K++){const Q=A[K],Y=e.getContext(Q,k);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sa}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",gt,!1),Z===null){const k=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&k.shift(),Z=Ae(k,A),Z===null)throw Ae(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let It,Gt,wt,me,Vt,R,T,q,ut,ht,dt,At,vt,Et,Ot,Kt,ct,ce,te,kt,Rt,Tt,Yt,oe;function xe(){It=new n_(Z),Gt=new Km(Z,It,t),It.init(Gt),Tt=new Hg(Z,It,Gt),wt=new zg(Z,It,Gt),me=new s_(Z),Vt=new bg,R=new kg(Z,It,wt,Vt,Gt,Tt,me),T=new Jm(b),q=new e_(b),ut=new ff(Z,Gt),Yt=new Ym(Z,It,ut,Gt),ht=new i_(Z,ut,me,Yt),dt=new c_(Z,ht,ut,me),te=new l_(Z,Gt,R),Kt=new $m(Vt),At=new Tg(b,T,q,It,Gt,Yt,Kt),vt=new Xg(b,Vt),Et=new Ag,Ot=new Dg(It,Gt),ce=new qm(b,T,q,wt,dt,v,d),ct=new Bg(b,dt,Gt),oe=new Zg(Z,me,Gt,wt),kt=new jm(Z,It,me,Gt),Rt=new r_(Z,It,me,Gt),me.programs=At.programs,b.capabilities=Gt,b.extensions=It,b.properties=Vt,b.renderLists=Et,b.shadowMap=ct,b.state=wt,b.info=me}xe();const Jt=new Wg(b,Z);this.xr=Jt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=It.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=It.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(A){A!==void 0&&(st=A,this.setSize(J,tt,!1))},this.getSize=function(A){return A.set(J,tt)},this.setSize=function(A,k,K=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,tt=k,e.width=Math.floor(A*st),e.height=Math.floor(k*st),K===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(J*st,tt*st).floor()},this.setDrawingBufferSize=function(A,k,K){J=A,tt=k,st=K,e.width=Math.floor(A*K),e.height=Math.floor(k*K),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,k,K,Q){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,k,K,Q),wt.viewport(C.copy(z).multiplyScalar(st).floor())},this.getScissor=function(A){return A.copy(et)},this.setScissor=function(A,k,K,Q){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,k,K,Q),wt.scissor($.copy(et).multiplyScalar(st).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){wt.setScissorTest(ot=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(A=!0,k=!0,K=!0){let Q=0;if(A){let Y=!1;if(U!==null){const yt=U.texture.format;Y=yt===jc||yt===Yc||yt===qc}if(Y){const yt=U.texture.type,Lt=yt===ei||yt===$n||yt===aa||yt===Mi||yt===Xc||yt===Zc,Ct=ce.getClearColor(),zt=ce.getClearAlpha(),$t=Ct.r,Wt=Ct.g,qt=Ct.b;Lt?(x[0]=$t,x[1]=Wt,x[2]=qt,x[3]=zt,Z.clearBufferuiv(Z.COLOR,0,x)):(S[0]=$t,S[1]=Wt,S[2]=qt,S[3]=zt,Z.clearBufferiv(Z.COLOR,0,S))}else Q|=Z.COLOR_BUFFER_BIT}k&&(Q|=Z.DEPTH_BUFFER_BIT),K&&(Q|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Et.dispose(),Ot.dispose(),Vt.dispose(),T.dispose(),q.dispose(),dt.dispose(),Yt.dispose(),oe.dispose(),At.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",Le),Jt.removeEventListener("sessionend",fe),ft&&(ft.dispose(),ft=null),Ne.stop()};function mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const A=me.autoReset,k=ct.enabled,K=ct.autoUpdate,Q=ct.needsUpdate,Y=ct.type;xe(),me.autoReset=A,ct.enabled=k,ct.autoUpdate=K,ct.needsUpdate=Q,ct.type=Y}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const k=A.target;k.removeEventListener("dispose",xt),Bt(k)}function Bt(A){Dt(A),Vt.remove(A)}function Dt(A){const k=Vt.get(A).programs;k!==void 0&&(k.forEach(function(K){At.releaseProgram(K)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,K,Q,Y,yt){k===null&&(k=Nt);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ct=dr(A,k,K,Q,Y);wt.setMaterial(Q,Lt);let zt=K.index,$t=1;if(Q.wireframe===!0){if(zt=ht.getWireframeAttribute(K),zt===void 0)return;$t=2}const Wt=K.drawRange,qt=K.attributes.position;let Me=Wt.start*$t,Oe=(Wt.start+Wt.count)*$t;yt!==null&&(Me=Math.max(Me,yt.start*$t),Oe=Math.min(Oe,(yt.start+yt.count)*$t)),zt!==null?(Me=Math.max(Me,0),Oe=Math.min(Oe,zt.count)):qt!=null&&(Me=Math.max(Me,0),Oe=Math.min(Oe,qt.count));const ye=Oe-Me;if(ye<0||ye===1/0)return;Yt.setup(Y,Q,Ct,K,zt);let sn,_e=kt;if(zt!==null&&(sn=ut.get(zt),_e=Rt,_e.setIndex(sn)),Y.isMesh)Q.wireframe===!0?(wt.setLineWidth(Q.wireframeLinewidth*re()),_e.setMode(Z.LINES)):_e.setMode(Z.TRIANGLES);else if(Y.isLine){let Xt=Q.linewidth;Xt===void 0&&(Xt=1),wt.setLineWidth(Xt*re()),Y.isLineSegments?_e.setMode(Z.LINES):Y.isLineLoop?_e.setMode(Z.LINE_LOOP):_e.setMode(Z.LINE_STRIP)}else Y.isPoints?_e.setMode(Z.POINTS):Y.isSprite&&_e.setMode(Z.TRIANGLES);if(Y.isBatchedMesh)_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)_e.renderInstances(Me,ye,Y.count);else if(K.isInstancedBufferGeometry){const Xt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,se=Math.min(K.instanceCount,Xt);_e.renderInstances(Me,ye,se)}else _e.render(Me,ye)};function ue(A,k,K){A.transparent===!0&&A.side===An&&A.forceSinglePass===!1?(A.side=je,A.needsUpdate=!0,ri(A,k,K),A.side=ni,A.needsUpdate=!0,ri(A,k,K),A.side=An):ri(A,k,K)}this.compile=function(A,k,K=null){K===null&&(K=A),y=Ot.get(K),y.init(),P.push(y),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),A!==K&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(b._useLegacyLights);const Q=new Set;return A.traverse(function(Y){const yt=Y.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){const Ct=yt[Lt];ue(Ct,K,Y),Q.add(Ct)}else ue(yt,K,Y),Q.add(yt)}),P.pop(),y=null,Q},this.compileAsync=function(A,k,K=null){const Q=this.compile(A,k,K);return new Promise(Y=>{function yt(){if(Q.forEach(function(Lt){Vt.get(Lt).currentProgram.isReady()&&Q.delete(Lt)}),Q.size===0){Y(A);return}setTimeout(yt,10)}It.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let de=null;function Ee(A){de&&de(A)}function Le(){Ne.stop()}function fe(){Ne.start()}const Ne=new hh;Ne.setAnimationLoop(Ee),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(A){de=A,Jt.setAnimationLoop(A),A===null?Ne.stop():Ne.start()},Jt.addEventListener("sessionstart",Le),Jt.addEventListener("sessionend",fe),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(k),k=Jt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,k,U),y=Ot.get(A,P.length),y.init(),P.push(y),St.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(St),lt=this.localClippingEnabled,it=Kt.init(this.clippingPlanes,lt),M=Et.get(A,g.length),M.init(),g.push(M),nn(A,k,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(X,V),this.info.render.frame++,it===!0&&Kt.beginShadows();const K=y.state.shadowsArray;if(ct.render(K,A,k),it===!0&&Kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(M,A),y.setupLights(b._useLegacyLights),k.isArrayCamera){const Q=k.cameras;for(let Y=0,yt=Q.length;Y<yt;Y++){const Lt=Q[Y];kr(M,A,Lt,Lt.viewport)}}else kr(M,A,k);U!==null&&(R.updateMultisampleRenderTarget(U),R.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(b,A,k),Yt.resetDefaultState(),nt=-1,w=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function nn(A,k,K,Q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){Q&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);const Lt=dt.update(A),Ct=A.material;Ct.visible&&M.push(A,Lt,Ct,K,Zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const Lt=dt.update(A),Ct=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Zt.copy(Lt.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(Ct)){const zt=Lt.groups;for(let $t=0,Wt=zt.length;$t<Wt;$t++){const qt=zt[$t],Me=Ct[qt.materialIndex];Me&&Me.visible&&M.push(A,Lt,Me,K,Zt.z,qt)}}else Ct.visible&&M.push(A,Lt,Ct,K,Zt.z,null)}}const yt=A.children;for(let Lt=0,Ct=yt.length;Lt<Ct;Lt++)nn(yt[Lt],k,K,Q)}function kr(A,k,K,Q){const Y=A.opaque,yt=A.transmissive,Lt=A.transparent;y.setupLightsView(K),it===!0&&Kt.setGlobalState(b.clippingPlanes,K),yt.length>0&&rn(Y,yt,k,K),Q&&wt.viewport(C.copy(Q)),Y.length>0&&bt(Y,k,K),yt.length>0&&bt(yt,k,K),Lt.length>0&&bt(Lt,k,K),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function rn(A,k,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const yt=Gt.isWebGL2;ft===null&&(ft=new Ti(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")?Cr:ei,minFilter:Rr,samples:yt?4:0})),b.getDrawingBufferSize(Ut),yt?ft.setSize(Ut.x,Ut.y):ft.setSize(Us(Ut.x),Us(Ut.y));const Lt=b.getRenderTarget();b.setRenderTarget(ft),b.getClearColor(pt),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear();const Ct=b.toneMapping;b.toneMapping=ti,bt(A,K,Q),R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft);let zt=!1;for(let $t=0,Wt=k.length;$t<Wt;$t++){const qt=k[$t],Me=qt.object,Oe=qt.geometry,ye=qt.material,sn=qt.group;if(ye.side===An&&Me.layers.test(Q.layers)){const _e=ye.side;ye.side=je,ye.needsUpdate=!0,cr(Me,K,Q,Oe,ye,sn),ye.side=_e,ye.needsUpdate=!0,zt=!0}}zt===!0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft)),b.setRenderTarget(Lt),b.setClearColor(pt,F),b.toneMapping=Ct}function bt(A,k,K){const Q=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,yt=A.length;Y<yt;Y++){const Lt=A[Y],Ct=Lt.object,zt=Lt.geometry,$t=Q===null?Lt.material:Q,Wt=Lt.group;Ct.layers.test(K.layers)&&cr(Ct,k,K,zt,$t,Wt)}}function cr(A,k,K,Q,Y,yt){A.onBeforeRender(b,k,K,Q,Y,yt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(b,k,K,Q,A,yt),Y.transparent===!0&&Y.side===An&&Y.forceSinglePass===!1?(Y.side=je,Y.needsUpdate=!0,b.renderBufferDirect(K,k,Q,Y,A,yt),Y.side=ni,Y.needsUpdate=!0,b.renderBufferDirect(K,k,Q,Y,A,yt),Y.side=An):b.renderBufferDirect(K,k,Q,Y,A,yt),A.onAfterRender(b,k,K,Q,Y,yt)}function ri(A,k,K){k.isScene!==!0&&(k=Nt);const Q=Vt.get(A),Y=y.state.lights,yt=y.state.shadowsArray,Lt=Y.state.version,Ct=At.getParameters(A,Y.state,yt,k,K),zt=At.getProgramCacheKey(Ct);let $t=Q.programs;Q.environment=A.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(A.isMeshStandardMaterial?q:T).get(A.envMap||Q.environment),$t===void 0&&(A.addEventListener("dispose",xt),$t=new Map,Q.programs=$t);let Wt=$t.get(zt);if(Wt!==void 0){if(Q.currentProgram===Wt&&Q.lightsStateVersion===Lt)return ur(A,Ct),Wt}else Ct.uniforms=At.getUniforms(A),A.onBuild(K,Ct,b),A.onBeforeCompile(Ct,b),Wt=At.acquireProgram(Ct,zt),$t.set(zt,Wt),Q.uniforms=Ct.uniforms;const qt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=Kt.uniform),ur(A,Ct),Q.needsLights=Vn(A),Q.lightsStateVersion=Lt,Q.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=Wt,Q.uniformsList=null,Wt}function hr(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Ls.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ur(A,k){const K=Vt.get(A);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function dr(A,k,K,Q,Y){k.isScene!==!0&&(k=Nt),R.resetTextureUnits();const yt=k.fog,Lt=Q.isMeshStandardMaterial?k.environment:null,Ct=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Gn,zt=(Q.isMeshStandardMaterial?q:T).get(Q.envMap||Lt),$t=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Wt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qt=!!K.morphAttributes.position,Me=!!K.morphAttributes.normal,Oe=!!K.morphAttributes.color;let ye=ti;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ye=b.toneMapping);const sn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=sn!==void 0?sn.length:0,Xt=Vt.get(Q),se=y.state.lights;if(it===!0&&(lt===!0||A!==w)){const Fe=A===w&&Q.id===nt;Kt.setState(Q,A,Fe)}let Ht=!1;Q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==se.state.version||Xt.outputColorSpace!==Ct||Y.isBatchedMesh&&Xt.batching===!1||!Y.isBatchedMesh&&Xt.batching===!0||Y.isInstancedMesh&&Xt.instancing===!1||!Y.isInstancedMesh&&Xt.instancing===!0||Y.isSkinnedMesh&&Xt.skinning===!1||!Y.isSkinnedMesh&&Xt.skinning===!0||Y.isInstancedMesh&&Xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xt.instancingColor===!1&&Y.instanceColor!==null||Xt.envMap!==zt||Q.fog===!0&&Xt.fog!==yt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Kt.numPlanes||Xt.numIntersection!==Kt.numIntersection)||Xt.vertexAlphas!==$t||Xt.vertexTangents!==Wt||Xt.morphTargets!==qt||Xt.morphNormals!==Me||Xt.morphColors!==Oe||Xt.toneMapping!==ye||Gt.isWebGL2===!0&&Xt.morphTargetsCount!==_e)&&(Ht=!0):(Ht=!0,Xt.__version=Q.version);let on=Xt.currentProgram;Ht===!0&&(on=ri(Q,k,Y));let Ln=!1,an=!1,si=!1;const Pt=on.getUniforms(),he=Xt.uniforms;if(wt.useProgram(on.program)&&(Ln=!0,an=!0,si=!0),Q.id!==nt&&(nt=Q.id,an=!0),Ln||w!==A){Pt.setValue(Z,"projectionMatrix",A.projectionMatrix),Pt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Fe=Pt.map.cameraPosition;Fe!==void 0&&Fe.setValue(Z,Zt.setFromMatrixPosition(A.matrixWorld)),Gt.logarithmicDepthBuffer&&Pt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Pt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,an=!0,si=!0)}if(Y.isSkinnedMesh){Pt.setOptional(Z,Y,"bindMatrix"),Pt.setOptional(Z,Y,"bindMatrixInverse");const Fe=Y.skeleton;Fe&&(Gt.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),Pt.setValue(Z,"boneTexture",Fe.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Pt.setOptional(Z,Y,"batchingTexture"),Pt.setValue(Z,"batchingTexture",Y._matricesTexture,R));const oi=K.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0&&Gt.isWebGL2===!0)&&te.update(Y,K,on),(an||Xt.receiveShadow!==Y.receiveShadow)&&(Xt.receiveShadow=Y.receiveShadow,Pt.setValue(Z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(he.envMap.value=zt,he.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),an&&(Pt.setValue(Z,"toneMappingExposure",b.toneMappingExposure),Xt.needsLights&&Hr(he,si),yt&&Q.fog===!0&&vt.refreshFogUniforms(he,yt),vt.refreshMaterialUniforms(he,Q,st,tt,ft),Ls.upload(Z,hr(Xt),he,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ls.upload(Z,hr(Xt),he,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Pt.setValue(Z,"center",Y.center),Pt.setValue(Z,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(Z,"normalMatrix",Y.normalMatrix),Pt.setValue(Z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Fe=Q.uniformsGroups;for(let He=0,Hs=Fe.length;He<Hs;He++)if(Gt.isWebGL2){const ai=Fe[He];oe.update(ai,on),oe.bind(ai,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function Hr(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Vn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,k,K){Vt.get(A.texture).__webglTexture=k,Vt.get(A.depthTexture).__webglTexture=K;const Q=Vt.get(A);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const K=Vt.get(A);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,K=0){U=A,B=k,I=K;let Q=!0,Y=null,yt=!1,Lt=!1;if(A){const zt=Vt.get(A);zt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(Z.FRAMEBUFFER,null),Q=!1):zt.__webglFramebuffer===void 0?R.setupRenderTarget(A):zt.__hasExternalTextures&&R.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const Wt=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?Y=Wt[k][K]:Y=Wt[k],yt=!0):Gt.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?Y=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[K]:Y=Wt,C.copy(A.viewport),$.copy(A.scissor),rt=A.scissorTest}else C.copy(z).multiplyScalar(st).floor(),$.copy(et).multiplyScalar(st).floor(),rt=ot;if(wt.bindFramebuffer(Z.FRAMEBUFFER,Y)&&Gt.drawBuffers&&Q&&wt.drawBuffers(A,Y),wt.viewport(C),wt.scissor($),wt.setScissorTest(rt),yt){const zt=Vt.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+k,zt.__webglTexture,K)}else if(Lt){const zt=Vt.get(A.texture),$t=k||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,zt.__webglTexture,K||0,$t)}nt=-1},this.readRenderTargetPixels=function(A,k,K,Q,Y,yt,Lt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ct=Ct[Lt]),Ct){wt.bindFramebuffer(Z.FRAMEBUFFER,Ct);try{const zt=A.texture,$t=zt.format,Wt=zt.type;if($t!==Mn&&Tt.convert($t)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=Wt===Cr&&(It.has("EXT_color_buffer_half_float")||Gt.isWebGL2&&It.has("EXT_color_buffer_float"));if(Wt!==ei&&Tt.convert(Wt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===Jn&&(Gt.isWebGL2||It.has("OES_texture_float")||It.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Q&&K>=0&&K<=A.height-Y&&Z.readPixels(k,K,Q,Y,Tt.convert($t),Tt.convert(Wt),yt)}finally{const zt=U!==null?Vt.get(U).__webglFramebuffer:null;wt.bindFramebuffer(Z.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(A,k,K=0){const Q=Math.pow(2,-K),Y=Math.floor(k.image.width*Q),yt=Math.floor(k.image.height*Q);R.setTexture2D(k,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,K,0,0,A.x,A.y,Y,yt),wt.unbindTexture()},this.copyTextureToTexture=function(A,k,K,Q=0){const Y=k.image.width,yt=k.image.height,Lt=Tt.convert(K.format),Ct=Tt.convert(K.type);R.setTexture2D(K,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Q,A.x,A.y,Y,yt,Lt,Ct,k.image.data):k.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Q,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Lt,k.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,Q,A.x,A.y,Lt,Ct,k.image),Q===0&&K.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,k,K,Q,Y=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=A.max.x-A.min.x+1,Lt=A.max.y-A.min.y+1,Ct=A.max.z-A.min.z+1,zt=Tt.convert(Q.format),$t=Tt.convert(Q.type);let Wt;if(Q.isData3DTexture)R.setTexture3D(Q,0),Wt=Z.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)R.setTexture2DArray(Q,0),Wt=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment);const qt=Z.getParameter(Z.UNPACK_ROW_LENGTH),Me=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Oe=Z.getParameter(Z.UNPACK_SKIP_PIXELS),ye=Z.getParameter(Z.UNPACK_SKIP_ROWS),sn=Z.getParameter(Z.UNPACK_SKIP_IMAGES),_e=K.isCompressedTexture?K.mipmaps[Y]:K.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,_e.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,_e.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,A.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,A.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?Z.texSubImage3D(Wt,Y,k.x,k.y,k.z,yt,Lt,Ct,zt,$t,_e.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Wt,Y,k.x,k.y,k.z,yt,Lt,Ct,zt,_e.data)):Z.texSubImage3D(Wt,Y,k.x,k.y,k.z,yt,Lt,Ct,zt,$t,_e),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,qt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Me),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Oe),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ye),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,sn),Y===0&&Q.generateMipmaps&&Z.generateMipmap(Wt),wt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){B=0,I=0,U=null,wt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===la?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===Fs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Ei:$c}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ei?ze:Gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class qg extends vh{}qg.prototype.isWebGL1Renderer=!0;class Yg extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class xh extends wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rc=new G,Cc=new G,Ic=new Se,Vo=new Bs,Ts=new Br;class jg extends Ue{constructor(t=new Je,e=new xh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,s=[0];for(let o=1,l=e.count;o<l;o++)Rc.fromBufferAttribute(e,o-1),Cc.fromBufferAttribute(e,o),s[o]=s[o-1],s[o]+=Rc.distanceTo(Cc);t.setAttribute("lineDistance",new ke(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const s=this.geometry,o=this.matrixWorld,l=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ts.copy(s.boundingSphere),Ts.applyMatrix4(o),Ts.radius+=l,t.ray.intersectsSphere(Ts)===!1)return;Ic.copy(o).invert(),Vo.copy(t.ray).applyMatrix4(Ic);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=new G,p=new G,m=new G,v=new G,x=this.isLineSegments?2:1,S=s.index,y=s.attributes.position;if(S!==null){const g=Math.max(0,h.start),P=Math.min(S.count,h.start+h.count);for(let b=g,D=P-1;b<D;b+=x){const B=S.getX(b),I=S.getX(b+1);if(f.fromBufferAttribute(y,B),p.fromBufferAttribute(y,I),Vo.distanceSqToSegment(f,p,v,m)>d)continue;v.applyMatrix4(this.matrixWorld);const nt=t.ray.origin.distanceTo(v);nt<t.near||nt>t.far||e.push({distance:nt,point:m.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,h.start),P=Math.min(y.count,h.start+h.count);for(let b=g,D=P-1;b<D;b+=x){if(f.fromBufferAttribute(y,b),p.fromBufferAttribute(y,b+1),Vo.distanceSqToSegment(f,p,v,m)>d)continue;v.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(v);I<t.near||I>t.far||e.push({distance:I,point:m.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const o=e[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}class yh extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dc=new Se,na=new Bs,bs=new Br,ws=new G;class Kg extends Ue{constructor(t=new Je,e=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const s=this.geometry,o=this.matrixWorld,l=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bs.copy(s.boundingSphere),bs.applyMatrix4(o),bs.radius+=l,t.ray.intersectsSphere(bs)===!1)return;Dc.copy(o).invert(),na.copy(t.ray).applyMatrix4(Dc);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=s.index,m=s.attributes.position;if(f!==null){const v=Math.max(0,h.start),x=Math.min(f.count,h.start+h.count);for(let S=v,M=x;S<M;S++){const y=f.getX(S);ws.fromBufferAttribute(m,y),Uc(ws,y,d,o,t,e,this)}}else{const v=Math.max(0,h.start),x=Math.min(m.count,h.start+h.count);for(let S=v,M=x;S<M;S++)ws.fromBufferAttribute(m,S),Uc(ws,S,d,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const o=e[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Uc(r,t,e,s,o,l,h){const c=na.distanceSqToPoint(r);if(c<e){const d=new G;na.closestPointToPoint(r,d),d.applyMatrix4(s);const f=o.ray.origin.distanceTo(d);if(f<o.near||f>o.far)return;l.push({distance:f,distanceToRay:Math.sqrt(c),point:d,index:t,face:null,object:h})}}class pa extends Je{constructor(t=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],e=12,s=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:s,phiLength:o},e=Math.floor(e),o=We(o,0,Math.PI*2);const l=[],h=[],c=[],d=[],f=[],p=1/e,m=new G,v=new ie,x=new G,S=new G,M=new G;let y=0,g=0;for(let P=0;P<=t.length-1;P++)switch(P){case 0:y=t[P+1].x-t[P].x,g=t[P+1].y-t[P].y,x.x=g*1,x.y=-y,x.z=g*0,M.copy(x),x.normalize(),d.push(x.x,x.y,x.z);break;case t.length-1:d.push(M.x,M.y,M.z);break;default:y=t[P+1].x-t[P].x,g=t[P+1].y-t[P].y,x.x=g*1,x.y=-y,x.z=g*0,S.copy(x),x.x+=M.x,x.y+=M.y,x.z+=M.z,x.normalize(),d.push(x.x,x.y,x.z),M.copy(S)}for(let P=0;P<=e;P++){const b=s+P*p*o,D=Math.sin(b),B=Math.cos(b);for(let I=0;I<=t.length-1;I++){m.x=t[I].x*D,m.y=t[I].y,m.z=t[I].x*B,h.push(m.x,m.y,m.z),v.x=P/e,v.y=I/(t.length-1),c.push(v.x,v.y);const U=d[3*I+0]*D,nt=d[3*I+1],w=d[3*I+0]*B;f.push(U,nt,w)}}for(let P=0;P<e;P++)for(let b=0;b<t.length-1;b++){const D=b+P*t.length,B=D,I=D+t.length,U=D+t.length+1,nt=D+1;l.push(B,I,nt),l.push(U,nt,I)}this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("uv",new ke(c,2)),this.setAttribute("normal",new ke(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.points,t.segments,t.phiStart,t.phiLength)}}class ma extends Je{constructor(t=1,e=32,s=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:s,thetaLength:o},e=Math.max(3,e);const l=[],h=[],c=[],d=[],f=new G,p=new ie;h.push(0,0,0),c.push(0,0,1),d.push(.5,.5);for(let m=0,v=3;m<=e;m++,v+=3){const x=s+m/e*o;f.x=t*Math.cos(x),f.y=t*Math.sin(x),h.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(h[v]/t+1)/2,p.y=(h[v+1]/t+1)/2,d.push(p.x,p.y)}for(let m=1;m<=e;m++)l.push(m,m+1,0);this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Nr extends Je{constructor(t=1,e=32,s=16,o=0,l=Math.PI*2,h=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:s,phiStart:o,phiLength:l,thetaStart:h,thetaLength:c},e=Math.max(3,Math.floor(e)),s=Math.max(2,Math.floor(s));const d=Math.min(h+c,Math.PI);let f=0;const p=[],m=new G,v=new G,x=[],S=[],M=[],y=[];for(let g=0;g<=s;g++){const P=[],b=g/s;let D=0;g===0&&h===0?D=.5/e:g===s&&d===Math.PI&&(D=-.5/e);for(let B=0;B<=e;B++){const I=B/e;m.x=-t*Math.cos(o+I*l)*Math.sin(h+b*c),m.y=t*Math.cos(h+b*c),m.z=t*Math.sin(o+I*l)*Math.sin(h+b*c),S.push(m.x,m.y,m.z),v.copy(m).normalize(),M.push(v.x,v.y,v.z),y.push(I+D,1-b),P.push(f++)}p.push(P)}for(let g=0;g<s;g++)for(let P=0;P<e;P++){const b=p[g][P+1],D=p[g][P],B=p[g+1][P],I=p[g+1][P+1];(g!==0||h>0)&&x.push(b,D,I),(g!==s-1||d<Math.PI)&&x.push(D,B,I)}this.setIndex(x),this.setAttribute("position",new ke(S,3)),this.setAttribute("normal",new ke(M,3)),this.setAttribute("uv",new ke(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Mh extends wi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $g extends xh{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Nc={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Jg{constructor(t,e,s){const o=this;let l=!1,h=0,c=0,d;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this.itemStart=function(p){c++,l===!1&&o.onStart!==void 0&&o.onStart(p,h,c),l=!0},this.itemEnd=function(p){h++,o.onProgress!==void 0&&o.onProgress(p,h,c),h===c&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,v=f.length;m<v;m+=2){const x=f[m],S=f[m+1];if(x.global&&(x.lastIndex=0),x.test(p))return S}return null}}}const Qg=new Jg;class _a{constructor(t){this.manager=t!==void 0?t:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const s=this;return new Promise(function(o,l){s.load(t,o,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}_a.DEFAULT_MATERIAL_NAME="__DEFAULT";class tv extends _a{constructor(t){super(t)}load(t,e,s,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,h=Nc.get(t);if(h!==void 0)return l.manager.itemStart(t),setTimeout(function(){e&&e(h),l.manager.itemEnd(t)},0),h;const c=Dr("img");function d(){p(),Nc.add(t,this),e&&e(this),l.manager.itemEnd(t)}function f(m){p(),o&&o(m),l.manager.itemError(t),l.manager.itemEnd(t)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(t),c.src=t,c}}class ev extends _a{constructor(t){super(t)}load(t,e,s,o){const l=new $e,h=new tv(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(c){l.image=c,l.needsUpdate=!0,e!==void 0&&e(l)},s,o),l}}class Sh extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Wo=new Se,Oc=new G,Fc=new G;class nv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,s=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iv extends nv{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rv extends Sh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sv extends Sh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ov{constructor(t,e,s=0,o=1/0){this.ray=new Bs(t,e),this.near=s,this.far=o,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,s=[]){return ia(t,this,s,e),s.sort(Bc),s}intersectObjects(t,e=!0,s=[]){for(let o=0,l=t.length;o<l;o++)ia(t[o],this,s,e);return s.sort(Bc),s}}function Bc(r,t){return r.distance-t.distance}function ia(r,t,e,s){if(r.layers.test(t.layers)&&r.raycast(t,e),s===!0){const o=r.children;for(let l=0,h=o.length;l<h;l++)ia(o[l],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);const av=[[0,0],[.014,.014],[.033,.04],[.05,.076],[.057,.115],[.055,.154],[.042,.19],[.022,.215],[0,.225]].map(([r,t])=>new ie(r,t)),Xo=15352629,lv=16740178;function cv(r){const t=new pa(av,24),e=new Nr(.024,16,16),s=new ma(.03,20);function o(h,c,d=r){const f=(90-h)*(Math.PI/180),p=(c+180)*(Math.PI/180);return new G(-d*Math.sin(f)*Math.cos(p),d*Math.cos(f),d*Math.sin(f)*Math.sin(p))}function l(h,c,d=Xo){const f=o(h,c),p=f.clone().normalize(),m=new Mh({color:d,shininess:60,specular:4465186}),v=new en(t,m);v.position.copy(f),v.quaternion.setFromUnitVectors(new G(0,1,0),p);const x=new en(e,new Ur({color:16777215}));x.position.set(0,.13,0),v.add(x);const S=new en(s,new Ur({color:0,transparent:!0,opacity:.28,side:An}));return S.position.copy(p.clone().multiplyScalar(r+.002)),S.lookAt(0,0,0),v.userData={dot:x,ring:S,baseColor:d,hotColor:d===Xo?lv:d},{mesh:v,ring:S}}return{create:l,latLngToVec3:o,RED:Xo}}function hv(r,t,e,s=96,o=1.02){const l=r.clone().normalize(),h=t.clone().normalize(),c=[];for(let d=0;d<=s;d++){const f=d/s,p=ta.clamp(l.dot(h),-1,1),m=Math.acos(p);let v;if(m<1e-4)v=l.clone();else{const S=Math.sin((1-f)*m)/Math.sin(m),M=Math.sin(f*m)/Math.sin(m);v=l.clone().multiplyScalar(S).add(h.clone().multiplyScalar(M))}const x=1+.12*Math.sin(Math.PI*f);c.push(v.normalize().multiplyScalar(e*o*x))}return c}function uv(r){function t(e,s=16765514){const o=new Qi;for(let l=0;l<e.length-1;l++){const h=hv(e[l],e[l+1],r),c=new Je().setFromPoints(h),d=new $g({color:s,dashSize:.12,gapSize:.08,transparent:!0,opacity:.95,linewidth:2}),f=new jg(c,d);f.computeLineDistances(),o.add(f)}return o}return{createRoute:t}}const As=2.6;function dv(r,{onSelect:t}={}){const e=new vh({canvas:r,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new Yg,o=new dn(45,innerWidth/innerHeight,.1,1e3);o.position.set(0,0,7.2);const l=new Qi;s.add(l);const h=new Nr(As,96,96),c=new Mh({color:2771562,shininess:8}),d=new en(h,c);l.add(d);const f=new ev;f.setCrossOrigin("anonymous"),f.load(Su,V=>{c.map=V,c.color.set(16777215),c.needsUpdate=!0}),f.load(Eu,V=>{c.bumpMap=V,c.bumpScale=.04,c.needsUpdate=!0});const p=new en(new Nr(As*1.03,32,32),new Ur({color:9358335,transparent:!0,opacity:.1,side:je}));l.add(p),s.add(new sv(16777215,.85));const m=new rv(16777215,.6);m.position.set(5,3,6),s.add(m);{const V=new Je,z=900,et=new Float32Array(z*3);for(let ot=0;ot<z;ot++){const W=40+Math.random()*60,it=Math.random()*Math.PI*2,lt=Math.acos(Math.random()*2-1);et[ot*3]=W*Math.sin(lt)*Math.cos(it),et[ot*3+1]=W*Math.sin(lt)*Math.sin(it),et[ot*3+2]=W*Math.cos(lt)}V.setAttribute("position",new Sn(et,3)),s.add(new Kg(V,new yh({color:15919315,size:.09,transparent:!0,opacity:.55})))}const v=cv(As),x=uv(As),S=[];let M=null,y=null;const g=new Map;function P(V){const{mesh:z,ring:et}=v.create(V.lat,V.lng);z.userData.id=V.id,l.add(z),l.add(et),S.push({mesh:z,id:V.id,ring:et}),g.set(V.id,[V.lat,V.lng])}function b(V){V.forEach(P)}function D(V,z,et){const{mesh:ot,ring:W}=v.create(V,z,16757504);ot.userData.id=et,l.add(ot),l.add(W);const it={mesh:ot,id:et,ring:W,custom:!0};return S.push(it),it}function B(V){const z=S.findIndex(W=>W.id===V);if(z===-1)return;const{mesh:et,ring:ot}=S[z];l.remove(et,ot),S.splice(z,1),g.delete(V)}function I(V){if(y&&(l.remove(y),y=null),!V||V.length<2)return;const z=V.map(et=>v.latLngToVec3(et.lat,et.lng));y=x.createRoute(z),l.add(y)}function U(V,z){rt=!1,F={y:-(z+180)*(Math.PI/180)-Math.PI/2,x:ta.clamp(V*(Math.PI/180),-1.1,1.1)},setTimeout(()=>rt=!0,6e3)}function nt(V){M=V,g.has(V)&&U(...w(V))}function w(V){return g.get(V)||[0,0]}let C=!1,$=!1,rt=!0,pt={x:0,y:0},F=null;r.addEventListener("pointerdown",V=>{C=!0,rt=!1,$=!1,F=null,pt={x:V.clientX,y:V.clientY}}),addEventListener("pointerup",()=>{C=!1,setTimeout(()=>rt=!0,3e3)}),addEventListener("pointermove",V=>{if(!C)return;const z=V.clientX-pt.x,et=V.clientY-pt.y;(Math.abs(z)>2||Math.abs(et)>2)&&($=!0),l.rotation.y+=z*.005,l.rotation.x=ta.clamp(l.rotation.x+et*.005,-1.1,1.1),pt={x:V.clientX,y:V.clientY}});const J=new ov,tt=new ie;r.addEventListener("click",V=>{if($)return;tt.x=V.clientX/innerWidth*2-1,tt.y=-(V.clientY/innerHeight)*2+1,J.setFromCamera(tt,o);const z=J.intersectObjects(S.map(et=>et.mesh));z.length&&t&&t(z[0].object.userData.id)});function st(){e.setSize(innerWidth,innerHeight),o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix()}addEventListener("resize",st),st();function X(){requestAnimationFrame(X),F?(l.rotation.y+=(F.y-l.rotation.y)*.08,l.rotation.x+=(F.x-l.rotation.x)*.08):rt&&!C&&(l.rotation.y+=.0015);const V=performance.now()*.002;S.forEach(({mesh:z,id:et,ring:ot})=>{const W=M===et,it=W?1.4+Math.sin(V*2)*.08:1;z.scale.setScalar(it),ot.scale.setScalar(W?1+Math.sin(V*2)*.25:1),z.material.color.set(W?z.userData.hotColor:z.userData.baseColor)}),e.render(s,o)}return X(),{addDestinations:b,addDestination:P,addCustomPin:D,removePin:B,setRoute:I,focusOn:U,select:nt,setSelected(V){M=V}}}function ga(r){return!r||!r.length?"":`<div class="srcTag">sourced from ${r.length} live web result${r.length>1?"s":""}</div>`}function va(r,t){const e=t.status==="not_configured"?"Live web search isn’t configured for this deployment.":t.message||"No real data available right now.";return`<div class="sectionTitle">${r} <span class="srcTag">not available</span></div>
    <div class="loading err">${e}</div>`}function fv(r){if(r.status!=="ok")return va("Flights from "+(r.origin||"JFK"),r);const t=r.budget_option||{},e=r.luxury_option||{},s=(o,l)=>`
    <div class="flightRow">
      <span class="fAir">${o}</span>
      <span class="fMeta">${l.airline_or_source||""}${l.notes?" · "+l.notes:""}</span>
      <span class="fPrice">${l.price_usd!=null?"$"+Math.round(l.price_usd):"n/a"}</span>
    </div>`;return`<div class="sectionTitle">Flights from ${r.origin} <span class="srcTag">web research</span></div>
    ${s("Budget",t)}${s("Luxury",e)}
    ${r.summary?`<div class="bestPick">${r.summary}</div>`:""}
    ${ga(r.sources)}`}function pv(r){var e;return r.status!=="ok"?va("Best Time to Travel",r):`
    <div class="sectionTitle">Best Time to Travel <span class="srcTag">web research</span></div>
    <div class="bestPick"><b>${(r.best_months||[]).join(", ")||"not specified"}</b></div>
    <div class="loading">${r.narrative||""}</div>
    ${(e=r.avoid_months)!=null&&e.length?`<div class="loading err">Consider avoiding: ${r.avoid_months.join(", ")}</div>`:""}
    ${ga(r.sources)}`}function mv(r,t){if(r.status!=="ok")return va("Budget vs. luxury",r);const e=(o,l)=>`
    <div class="predictStats"><div>
      <b>${l.est_total_usd!=null?"$"+Math.round(l.est_total_usd):"n/a"}</b>
      <span>${o}</span>
    </div></div>
    <div class="loading">${l.flight_style||""}${l.flight_style&&l.stay_style?" · ":""}${l.stay_style||""}${l.notes?" — "+l.notes:""}</div>`,s=r.fits_budget==="luxury"?"now":r.fits_budget==="neither"?"wait":"soon";return`
    <div class="sectionTitle">Budget vs. Luxury <span class="srcTag">web research, $${Math.round(t)} budget</span></div>
    <div class="predictBadge ${s}">Fits: ${r.fits_budget||"unknown"}</div>
    ${e("budget tier",r.budget_tier||{})}
    ${e("luxury tier",r.luxury_tier||{})}
    ${r.recommendation?`<div class="bestPick">${r.recommendation}</div>`:""}
    ${ga(r.sources)}`}const _v=[2026,2027,2028,2029,2030,2031,2032];function gv({onAddBucket:r,onAddRoute:t,onOpenMap:e,onSearchNearby:s,onRemoveDestination:o,getBucketYears:l}){const h=document.getElementById("detailPanel"),c=document.getElementById("panelScroll");document.getElementById("closeDetail").onclick=()=>h.classList.remove("open");let d=null,f=null;function p(x){d=x;const S=l(x.id),M=x.attractions||[],y=x.activities||[],g=x.famous||[],P=x.budgetLow*x.days,b=M.length||y.length||g.length?`${M.length?`<div class="sectionTitle">Must-Visit Spots, Ranked</div>
          ${M.map((C,$)=>`<div class="attrItem"><div class="attrRank">${$+1}</div>
            <div><div class="attrName">${C.name}</div><div class="attrDesc">${C.desc}</div></div></div>`).join("")}`:""}
         ${y.length?`<div class="sectionTitle">Top Activities</div>
          <div class="pillList">${y.map(C=>`<div class="pill">${C}</div>`).join("")}</div>`:""}
         ${g.length?`<div class="sectionTitle">Famous For</div>
          <div class="pillList">${g.map(C=>`<div class="pill famousPill">${C}</div>`).join("")}</div>`:""}`:`<div class="customNote">Your custom destination. Live flights and best-time data are above.
           Use <b>Nearby places</b> to explore what's around it.</div>`;c.innerHTML=`
      <div class="eyebrow">${x.country} · ${x.airport||"nearest airport TBD"}${x.custom?" · custom":""}</div>
      <h2>${x.name}</h2>
      ${x.tagline?`<div class="tagline">${x.tagline}</div>`:""}

      <div class="actionBar">
        <button class="actBtn" id="btnMap">Map / Street View</button>
        <button class="actBtn" id="btnRoute">Add to route</button>
        <button class="actBtn" id="btnNearby">Nearby places</button>
        <button class="actBtn danger" id="btnRemove">Remove</button>
      </div>

      <div class="metaRow">
        <div class="metaChip"><b>Suggested:</b> ${x.days} days</div>
        <div class="metaChip"><b>Reference budget:</b> $${x.budgetLow}–$${x.budgetHigh}/day</div>
      </div>

      <div id="liveIntel" class="liveIntel"><div class="loading">Loading live flights &amp; best-time data…</div></div>

      <div class="peopleInput">
        <label>Total trip budget ($)</label>
        <input type="number" id="tradeoffBudget" value="${P}" min="0" step="50"/>
      </div>
      <input type="range" id="tradeoffSlider" min="200" max="10000" step="50" value="${P}" style="width:100%;margin:6px 0 12px;"/>
      <div id="tradeoffBox"><div class="loading">Adjust the budget above to compare budget vs. luxury options.</div></div>

      ${b}

      <div class="addBucketBox">
        <label>Add to bucket list for</label>
        <select id="yearSelect">
          ${_v.map(C=>`<option value="${C}" ${S.includes(C)?"disabled":""}>${C}${S.includes(C)?" (added)":""}</option>`).join("")}
        </select>
        <label>Number of days</label>
        <input type="number" id="daysInput" value="${x.days}" min="1" max="60"/>
        <label>Estimated trip budget ($ total)</label>
        <input type="number" id="budgetInput" value="${P}" min="0"/>
        <button id="addBucketBtn">Add to Bucket List</button>
      </div>`,h.classList.add("open"),document.getElementById("btnMap").onclick=()=>e(x),document.getElementById("btnRoute").onclick=()=>t(x),document.getElementById("btnNearby").onclick=()=>s(x),document.getElementById("btnRemove").onclick=()=>{confirm(`Remove "${x.name}" from your atlas?`)&&(o(x),h.classList.remove("open"))};const D=document.getElementById("daysInput"),B=document.getElementById("budgetInput");let I=!1;B.addEventListener("input",()=>{I=!0}),D.addEventListener("input",()=>{const C=Math.max(1,parseInt(D.value,10)||1);I||(B.value=x.budgetLow*C)}),document.getElementById("addBucketBtn").onclick=()=>{var F;const C=parseInt(document.getElementById("yearSelect").value,10),$=Math.max(1,parseInt(D.value,10)||x.days),rt=parseFloat(B.value)||0;r(x,C,rt,$,((F=kc())==null?void 0:F.name)||"Guest");const pt=document.getElementById("addBucketBtn");pt.textContent="Added!",pt.classList.add("added"),setTimeout(()=>p(x),700)};const U=document.getElementById("tradeoffSlider"),nt=document.getElementById("tradeoffBudget"),w=C=>{U.value=C,nt.value=C,clearTimeout(f),f=setTimeout(()=>v(x,Number(C)),400)};U.addEventListener("input",()=>w(U.value)),nt.addEventListener("input",()=>w(nt.value)),m(x),v(x,P)}async function m(x){const S=document.getElementById("liveIntel");try{const[M,y]=await Promise.all([Hn.flights(x.name,x.country),Hn.bestTime(x.name,x.country)]);if((d==null?void 0:d.id)!==x.id)return;S.innerHTML=fv(M)+pv(y)}catch(M){S.innerHTML=`<div class="loading err">Couldn't reach the backend: ${M.message}. Is it running on :8000?</div>`}}async function v(x,S){const M=document.getElementById("tradeoffBox");if(M){M.innerHTML='<div class="loading">Comparing budget vs. luxury options…</div>';try{const y=await Hn.tradeoff(x.name,x.country,S);if((d==null?void 0:d.id)!==x.id)return;M.innerHTML=mv(y,S)}catch(y){M.innerHTML=`<div class="loading err">Couldn't reach the backend: ${y.message}.</div>`}}}return{open:p,close:()=>h.classList.remove("open")}}var vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ra={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(r,t){(function(e,s){s(t)})(vv,function(e){var s="1.9.4";function o(n){var i,a,u,_;for(a=1,u=arguments.length;a<u;a++){_=arguments[a];for(i in _)n[i]=_[i]}return n}var l=Object.create||function(){function n(){}return function(i){return n.prototype=i,new n}}();function h(n,i){var a=Array.prototype.slice;if(n.bind)return n.bind.apply(n,a.call(arguments,1));var u=a.call(arguments,2);return function(){return n.apply(i,u.length?u.concat(a.call(arguments)):arguments)}}var c=0;function d(n){return"_leaflet_id"in n||(n._leaflet_id=++c),n._leaflet_id}function f(n,i,a){var u,_,E,N;return N=function(){u=!1,_&&(E.apply(a,_),_=!1)},E=function(){u?_=arguments:(n.apply(a,arguments),setTimeout(N,i),u=!0)},E}function p(n,i,a){var u=i[1],_=i[0],E=u-_;return n===u&&a?n:((n-_)%E+E)%E+_}function m(){return!1}function v(n,i){if(i===!1)return n;var a=Math.pow(10,i===void 0?6:i);return Math.round(n*a)/a}function x(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function S(n){return x(n).split(/\s+/)}function M(n,i){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?l(n.options):{});for(var a in i)n.options[a]=i[a];return n.options}function y(n,i,a){var u=[];for(var _ in n)u.push(encodeURIComponent(a?_.toUpperCase():_)+"="+encodeURIComponent(n[_]));return(!i||i.indexOf("?")===-1?"?":"&")+u.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function P(n,i){return n.replace(g,function(a,u){var _=i[u];if(_===void 0)throw new Error("No value provided for variable "+a);return typeof _=="function"&&(_=_(i)),_})}var b=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function D(n,i){for(var a=0;a<n.length;a++)if(n[a]===i)return a;return-1}var B="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function I(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var U=0;function nt(n){var i=+new Date,a=Math.max(0,16-(i-U));return U=i+a,window.setTimeout(n,a)}var w=window.requestAnimationFrame||I("RequestAnimationFrame")||nt,C=window.cancelAnimationFrame||I("CancelAnimationFrame")||I("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function $(n,i,a){if(a&&w===nt)n.call(i);else return w.call(window,h(n,i))}function rt(n){n&&C.call(window,n)}var pt={__proto__:null,extend:o,create:l,bind:h,get lastId(){return c},stamp:d,throttle:f,wrapNum:p,falseFn:m,formatNum:v,trim:x,splitWords:S,setOptions:M,getParamString:y,template:P,isArray:b,indexOf:D,emptyImageUrl:B,requestFn:w,cancelFn:C,requestAnimFrame:$,cancelAnimFrame:rt};function F(){}F.extend=function(n){var i=function(){M(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},a=i.__super__=this.prototype,u=l(a);u.constructor=i,i.prototype=u;for(var _ in this)Object.prototype.hasOwnProperty.call(this,_)&&_!=="prototype"&&_!=="__super__"&&(i[_]=this[_]);return n.statics&&o(i,n.statics),n.includes&&(J(n.includes),o.apply(null,[u].concat(n.includes))),o(u,n),delete u.statics,delete u.includes,u.options&&(u.options=a.options?l(a.options):{},o(u.options,n.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){a.callInitHooks&&a.callInitHooks.call(this),this._initHooksCalled=!0;for(var E=0,N=u._initHooks.length;E<N;E++)u._initHooks[E].call(this)}},i},F.include=function(n){var i=this.prototype.options;return o(this.prototype,n),n.options&&(this.prototype.options=i,this.mergeOptions(n.options)),this},F.mergeOptions=function(n){return o(this.prototype.options,n),this},F.addInitHook=function(n){var i=Array.prototype.slice.call(arguments,1),a=typeof n=="function"?n:function(){this[n].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(a),this};function J(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=b(n)?n:[n];for(var i=0;i<n.length;i++)n[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var tt={on:function(n,i,a){if(typeof n=="object")for(var u in n)this._on(u,n[u],i);else{n=S(n);for(var _=0,E=n.length;_<E;_++)this._on(n[_],i,a)}return this},off:function(n,i,a){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var u in n)this._off(u,n[u],i);else{n=S(n);for(var _=arguments.length===1,E=0,N=n.length;E<N;E++)_?this._off(n[E]):this._off(n[E],i,a)}return this},_on:function(n,i,a,u){if(typeof i!="function"){console.warn("wrong listener type: "+typeof i);return}if(this._listens(n,i,a)===!1){a===this&&(a=void 0);var _={fn:i,ctx:a};u&&(_.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(_)}},_off:function(n,i,a){var u,_,E;if(this._events&&(u=this._events[n],!!u)){if(arguments.length===1){if(this._firingCount)for(_=0,E=u.length;_<E;_++)u[_].fn=m;delete this._events[n];return}if(typeof i!="function"){console.warn("wrong listener type: "+typeof i);return}var N=this._listens(n,i,a);if(N!==!1){var H=u[N];this._firingCount&&(H.fn=m,this._events[n]=u=u.slice()),u.splice(N,1)}}},fire:function(n,i,a){if(!this.listens(n,a))return this;var u=o({},i,{type:n,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var _=this._events[n];if(_){this._firingCount=this._firingCount+1||1;for(var E=0,N=_.length;E<N;E++){var H=_[E],j=H.fn;H.once&&this.off(n,j,H.ctx),j.call(H.ctx||this,u)}this._firingCount--}}return a&&this._propagateEvent(u),this},listens:function(n,i,a,u){typeof n!="string"&&console.warn('"string" type argument expected');var _=i;typeof i!="function"&&(u=!!i,_=void 0,a=void 0);var E=this._events&&this._events[n];if(E&&E.length&&this._listens(n,_,a)!==!1)return!0;if(u){for(var N in this._eventParents)if(this._eventParents[N].listens(n,i,a,u))return!0}return!1},_listens:function(n,i,a){if(!this._events)return!1;var u=this._events[n]||[];if(!i)return!!u.length;a===this&&(a=void 0);for(var _=0,E=u.length;_<E;_++)if(u[_].fn===i&&u[_].ctx===a)return _;return!1},once:function(n,i,a){if(typeof n=="object")for(var u in n)this._on(u,n[u],i,!0);else{n=S(n);for(var _=0,E=n.length;_<E;_++)this._on(n[_],i,a,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[d(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[d(n)],this},_propagateEvent:function(n){for(var i in this._eventParents)this._eventParents[i].fire(n.type,o({layer:n.target,propagatedFrom:n.target},n),!0)}};tt.addEventListener=tt.on,tt.removeEventListener=tt.clearAllEventListeners=tt.off,tt.addOneTimeEventListener=tt.once,tt.fireEvent=tt.fire,tt.hasEventListeners=tt.listens;var st=F.extend(tt);function X(n,i,a){this.x=a?Math.round(n):n,this.y=a?Math.round(i):i}var V=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};X.prototype={clone:function(){return new X(this.x,this.y)},add:function(n){return this.clone()._add(z(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(z(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new X(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new X(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=V(this.x),this.y=V(this.y),this},distanceTo:function(n){n=z(n);var i=n.x-this.x,a=n.y-this.y;return Math.sqrt(i*i+a*a)},equals:function(n){return n=z(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=z(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+v(this.x)+", "+v(this.y)+")"}};function z(n,i,a){return n instanceof X?n:b(n)?new X(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new X(n.x,n.y):new X(n,i,a)}function et(n,i){if(n)for(var a=i?[n,i]:n,u=0,_=a.length;u<_;u++)this.extend(a[u])}et.prototype={extend:function(n){var i,a;if(!n)return this;if(n instanceof X||typeof n[0]=="number"||"x"in n)i=a=z(n);else if(n=ot(n),i=n.min,a=n.max,!i||!a)return this;return!this.min&&!this.max?(this.min=i.clone(),this.max=a.clone()):(this.min.x=Math.min(i.x,this.min.x),this.max.x=Math.max(a.x,this.max.x),this.min.y=Math.min(i.y,this.min.y),this.max.y=Math.max(a.y,this.max.y)),this},getCenter:function(n){return z((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return z(this.min.x,this.max.y)},getTopRight:function(){return z(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var i,a;return typeof n[0]=="number"||n instanceof X?n=z(n):n=ot(n),n instanceof et?(i=n.min,a=n.max):i=a=n,i.x>=this.min.x&&a.x<=this.max.x&&i.y>=this.min.y&&a.y<=this.max.y},intersects:function(n){n=ot(n);var i=this.min,a=this.max,u=n.min,_=n.max,E=_.x>=i.x&&u.x<=a.x,N=_.y>=i.y&&u.y<=a.y;return E&&N},overlaps:function(n){n=ot(n);var i=this.min,a=this.max,u=n.min,_=n.max,E=_.x>i.x&&u.x<a.x,N=_.y>i.y&&u.y<a.y;return E&&N},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var i=this.min,a=this.max,u=Math.abs(i.x-a.x)*n,_=Math.abs(i.y-a.y)*n;return ot(z(i.x-u,i.y-_),z(a.x+u,a.y+_))},equals:function(n){return n?(n=ot(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function ot(n,i){return!n||n instanceof et?n:new et(n,i)}function W(n,i){if(n)for(var a=i?[n,i]:n,u=0,_=a.length;u<_;u++)this.extend(a[u])}W.prototype={extend:function(n){var i=this._southWest,a=this._northEast,u,_;if(n instanceof lt)u=n,_=n;else if(n instanceof W){if(u=n._southWest,_=n._northEast,!u||!_)return this}else return n?this.extend(ft(n)||it(n)):this;return!i&&!a?(this._southWest=new lt(u.lat,u.lng),this._northEast=new lt(_.lat,_.lng)):(i.lat=Math.min(u.lat,i.lat),i.lng=Math.min(u.lng,i.lng),a.lat=Math.max(_.lat,a.lat),a.lng=Math.max(_.lng,a.lng)),this},pad:function(n){var i=this._southWest,a=this._northEast,u=Math.abs(i.lat-a.lat)*n,_=Math.abs(i.lng-a.lng)*n;return new W(new lt(i.lat-u,i.lng-_),new lt(a.lat+u,a.lng+_))},getCenter:function(){return new lt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new lt(this.getNorth(),this.getWest())},getSouthEast:function(){return new lt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof lt||"lat"in n?n=ft(n):n=it(n);var i=this._southWest,a=this._northEast,u,_;return n instanceof W?(u=n.getSouthWest(),_=n.getNorthEast()):u=_=n,u.lat>=i.lat&&_.lat<=a.lat&&u.lng>=i.lng&&_.lng<=a.lng},intersects:function(n){n=it(n);var i=this._southWest,a=this._northEast,u=n.getSouthWest(),_=n.getNorthEast(),E=_.lat>=i.lat&&u.lat<=a.lat,N=_.lng>=i.lng&&u.lng<=a.lng;return E&&N},overlaps:function(n){n=it(n);var i=this._southWest,a=this._northEast,u=n.getSouthWest(),_=n.getNorthEast(),E=_.lat>i.lat&&u.lat<a.lat,N=_.lng>i.lng&&u.lng<a.lng;return E&&N},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,i){return n?(n=it(n),this._southWest.equals(n.getSouthWest(),i)&&this._northEast.equals(n.getNorthEast(),i)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function it(n,i){return n instanceof W?n:new W(n,i)}function lt(n,i,a){if(isNaN(n)||isNaN(i))throw new Error("Invalid LatLng object: ("+n+", "+i+")");this.lat=+n,this.lng=+i,a!==void 0&&(this.alt=+a)}lt.prototype={equals:function(n,i){if(!n)return!1;n=ft(n);var a=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return a<=(i===void 0?1e-9:i)},toString:function(n){return"LatLng("+v(this.lat,n)+", "+v(this.lng,n)+")"},distanceTo:function(n){return Ut.distance(this,ft(n))},wrap:function(){return Ut.wrapLatLng(this)},toBounds:function(n){var i=180*n/40075017,a=i/Math.cos(Math.PI/180*this.lat);return it([this.lat-i,this.lng-a],[this.lat+i,this.lng+a])},clone:function(){return new lt(this.lat,this.lng,this.alt)}};function ft(n,i,a){return n instanceof lt?n:b(n)&&typeof n[0]!="object"?n.length===3?new lt(n[0],n[1],n[2]):n.length===2?new lt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new lt(n.lat,"lng"in n?n.lng:n.lon,n.alt):i===void 0?null:new lt(n,i,a)}var St={latLngToPoint:function(n,i){var a=this.projection.project(n),u=this.scale(i);return this.transformation._transform(a,u)},pointToLatLng:function(n,i){var a=this.scale(i),u=this.transformation.untransform(n,a);return this.projection.unproject(u)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var i=this.projection.bounds,a=this.scale(n),u=this.transformation.transform(i.min,a),_=this.transformation.transform(i.max,a);return new et(u,_)},infinite:!1,wrapLatLng:function(n){var i=this.wrapLng?p(n.lng,this.wrapLng,!0):n.lng,a=this.wrapLat?p(n.lat,this.wrapLat,!0):n.lat,u=n.alt;return new lt(a,i,u)},wrapLatLngBounds:function(n){var i=n.getCenter(),a=this.wrapLatLng(i),u=i.lat-a.lat,_=i.lng-a.lng;if(u===0&&_===0)return n;var E=n.getSouthWest(),N=n.getNorthEast(),H=new lt(E.lat-u,E.lng-_),j=new lt(N.lat-u,N.lng-_);return new W(H,j)}},Ut=o({},St,{wrapLng:[-180,180],R:6371e3,distance:function(n,i){var a=Math.PI/180,u=n.lat*a,_=i.lat*a,E=Math.sin((i.lat-n.lat)*a/2),N=Math.sin((i.lng-n.lng)*a/2),H=E*E+Math.cos(u)*Math.cos(_)*N*N,j=2*Math.atan2(Math.sqrt(H),Math.sqrt(1-H));return this.R*j}}),Zt=6378137,Nt={R:Zt,MAX_LATITUDE:85.0511287798,project:function(n){var i=Math.PI/180,a=this.MAX_LATITUDE,u=Math.max(Math.min(a,n.lat),-a),_=Math.sin(u*i);return new X(this.R*n.lng*i,this.R*Math.log((1+_)/(1-_))/2)},unproject:function(n){var i=180/Math.PI;return new lt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*i,n.x*i/this.R)},bounds:function(){var n=Zt*Math.PI;return new et([-n,-n],[n,n])}()};function re(n,i,a,u){if(b(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=i,this._c=a,this._d=u}re.prototype={transform:function(n,i){return this._transform(n.clone(),i)},_transform:function(n,i){return i=i||1,n.x=i*(this._a*n.x+this._b),n.y=i*(this._c*n.y+this._d),n},untransform:function(n,i){return i=i||1,new X((n.x/i-this._b)/this._a,(n.y/i-this._d)/this._c)}};function Z(n,i,a,u){return new re(n,i,a,u)}var Ae=o({},Ut,{code:"EPSG:3857",projection:Nt,transformation:function(){var n=.5/(Math.PI*Nt.R);return Z(n,.5,-n,.5)}()}),It=o({},Ae,{code:"EPSG:900913"});function Gt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function wt(n,i){var a="",u,_,E,N,H,j;for(u=0,E=n.length;u<E;u++){for(H=n[u],_=0,N=H.length;_<N;_++)j=H[_],a+=(_?"L":"M")+j.x+" "+j.y;a+=i?bt.svg?"z":"x":""}return a||"M0 0"}var me=document.documentElement.style,Vt="ActiveXObject"in window,R=Vt&&!document.addEventListener,T="msLaunchUri"in navigator&&!("documentMode"in document),q=rn("webkit"),ut=rn("android"),ht=rn("android 2")||rn("android 3"),dt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),At=ut&&rn("Google")&&dt<537&&!("AudioNode"in window),vt=!!window.opera,Et=!T&&rn("chrome"),Ot=rn("gecko")&&!q&&!vt&&!Vt,Kt=!Et&&rn("safari"),ct=rn("phantom"),ce="OTransition"in me,te=navigator.platform.indexOf("Win")===0,kt=Vt&&"transition"in me,Rt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ht,Tt="MozPerspective"in me,Yt=!window.L_DISABLE_3D&&(kt||Rt||Tt)&&!ce&&!ct,oe=typeof orientation<"u"||rn("mobile"),xe=oe&&q,Jt=oe&&Rt,mt=!window.PointerEvent&&window.MSPointerEvent,O=!!(window.PointerEvent||mt),gt="ontouchstart"in window||!!window.TouchEvent,xt=!window.L_NO_TOUCH&&(gt||O),Bt=oe&&vt,Dt=oe&&Ot,ue=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,de=function(){var n=!1;try{var i=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",m,i),window.removeEventListener("testPassiveEventSupport",m,i)}catch{}return n}(),Ee=function(){return!!document.createElement("canvas").getContext}(),Le=!!(document.createElementNS&&Gt("svg").createSVGRect),fe=!!Le&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ne=!Le&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var i=n.firstChild;return i.style.behavior="url(#default#VML)",i&&typeof i.adj=="object"}catch{return!1}}(),nn=navigator.platform.indexOf("Mac")===0,kr=navigator.platform.indexOf("Linux")===0;function rn(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var bt={ie:Vt,ielt9:R,edge:T,webkit:q,android:ut,android23:ht,androidStock:At,opera:vt,chrome:Et,gecko:Ot,safari:Kt,phantom:ct,opera12:ce,win:te,ie3d:kt,webkit3d:Rt,gecko3d:Tt,any3d:Yt,mobile:oe,mobileWebkit:xe,mobileWebkit3d:Jt,msPointer:mt,pointer:O,touch:xt,touchNative:gt,mobileOpera:Bt,mobileGecko:Dt,retina:ue,passiveEvents:de,canvas:Ee,svg:Le,vml:Ne,inlineSvg:fe,mac:nn,linux:kr},cr=bt.msPointer?"MSPointerDown":"pointerdown",ri=bt.msPointer?"MSPointerMove":"pointermove",hr=bt.msPointer?"MSPointerUp":"pointerup",ur=bt.msPointer?"MSPointerCancel":"pointercancel",dr={touchstart:cr,touchmove:ri,touchend:hr,touchcancel:ur},Hr={touchstart:zt,touchmove:Ct,touchend:Ct,touchcancel:Ct},Vn={},A=!1;function k(n,i,a){return i==="touchstart"&&Lt(),Hr[i]?(a=Hr[i].bind(this,a),n.addEventListener(dr[i],a,!1),a):(console.warn("wrong event specified:",i),m)}function K(n,i,a){if(!dr[i]){console.warn("wrong event specified:",i);return}n.removeEventListener(dr[i],a,!1)}function Q(n){Vn[n.pointerId]=n}function Y(n){Vn[n.pointerId]&&(Vn[n.pointerId]=n)}function yt(n){delete Vn[n.pointerId]}function Lt(){A||(document.addEventListener(cr,Q,!0),document.addEventListener(ri,Y,!0),document.addEventListener(hr,yt,!0),document.addEventListener(ur,yt,!0),A=!0)}function Ct(n,i){if(i.pointerType!==(i.MSPOINTER_TYPE_MOUSE||"mouse")){i.touches=[];for(var a in Vn)i.touches.push(Vn[a]);i.changedTouches=[i],n(i)}}function zt(n,i){i.MSPOINTER_TYPE_TOUCH&&i.pointerType===i.MSPOINTER_TYPE_TOUCH&&Be(i),Ct(n,i)}function $t(n){var i={},a,u;for(u in n)a=n[u],i[u]=a&&a.bind?a.bind(n):a;return n=i,i.type="dblclick",i.detail=2,i.isTrusted=!1,i._simulated=!0,i}var Wt=200;function qt(n,i){n.addEventListener("dblclick",i);var a=0,u;function _(E){if(E.detail!==1){u=E.detail;return}if(!(E.pointerType==="mouse"||E.sourceCapabilities&&!E.sourceCapabilities.firesTouchEvents)){var N=Sa(E);if(!(N.some(function(j){return j instanceof HTMLLabelElement&&j.attributes.for})&&!N.some(function(j){return j instanceof HTMLInputElement||j instanceof HTMLSelectElement}))){var H=Date.now();H-a<=Wt?(u++,u===2&&i($t(E))):u=1,a=H}}}return n.addEventListener("click",_),{dblclick:i,simDblclick:_}}function Me(n,i){n.removeEventListener("dblclick",i.dblclick),n.removeEventListener("click",i.simDblclick)}var Oe=ai(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ye=ai(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),sn=ye==="webkitTransition"||ye==="OTransition"?ye+"End":"transitionend";function _e(n){return typeof n=="string"?document.getElementById(n):n}function Xt(n,i){var a=n.style[i]||n.currentStyle&&n.currentStyle[i];if((!a||a==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(n,null);a=u?u[i]:null}return a==="auto"?null:a}function se(n,i,a){var u=document.createElement(n);return u.className=i||"",a&&a.appendChild(u),u}function Ht(n){var i=n.parentNode;i&&i.removeChild(n)}function on(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Ln(n){var i=n.parentNode;i&&i.lastChild!==n&&i.appendChild(n)}function an(n){var i=n.parentNode;i&&i.firstChild!==n&&i.insertBefore(n,i.firstChild)}function si(n,i){if(n.classList!==void 0)return n.classList.contains(i);var a=Fe(n);return a.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(a)}function Pt(n,i){if(n.classList!==void 0)for(var a=S(i),u=0,_=a.length;u<_;u++)n.classList.add(a[u]);else if(!si(n,i)){var E=Fe(n);oi(n,(E?E+" ":"")+i)}}function he(n,i){n.classList!==void 0?n.classList.remove(i):oi(n,x((" "+Fe(n)+" ").replace(" "+i+" "," ")))}function oi(n,i){n.className.baseVal===void 0?n.className=i:n.className.baseVal=i}function Fe(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function He(n,i){"opacity"in n.style?n.style.opacity=i:"filter"in n.style&&Hs(n,i)}function Hs(n,i){var a=!1,u="DXImageTransform.Microsoft.Alpha";try{a=n.filters.item(u)}catch{if(i===1)return}i=Math.round(i*100),a?(a.Enabled=i!==100,a.Opacity=i):n.style.filter+=" progid:"+u+"(opacity="+i+")"}function ai(n){for(var i=document.documentElement.style,a=0;a<n.length;a++)if(n[a]in i)return n[a];return!1}function li(n,i,a){var u=i||new X(0,0);n.style[Oe]=(bt.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(a?" scale("+a+")":"")}function Te(n,i){n._leaflet_pos=i,bt.any3d?li(n,i):(n.style.left=i.x+"px",n.style.top=i.y+"px")}function ci(n){return n._leaflet_pos||new X(0,0)}var fr,pr,Gs;if("onselectstart"in document)fr=function(){jt(window,"selectstart",Be)},pr=function(){ge(window,"selectstart",Be)};else{var mr=ai(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);fr=function(){if(mr){var n=document.documentElement.style;Gs=n[mr],n[mr]="none"}},pr=function(){mr&&(document.documentElement.style[mr]=Gs,Gs=void 0)}}function Vs(){jt(window,"dragstart",Be)}function Ws(){ge(window,"dragstart",Be)}var Gr,Xs;function Zs(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(Vr(),Gr=n,Xs=n.style.outlineStyle,n.style.outlineStyle="none",jt(window,"keydown",Vr))}function Vr(){Gr&&(Gr.style.outlineStyle=Xs,Gr=void 0,Xs=void 0,ge(window,"keydown",Vr))}function ya(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function qs(n){var i=n.getBoundingClientRect();return{x:i.width/n.offsetWidth||1,y:i.height/n.offsetHeight||1,boundingClientRect:i}}var Lh={__proto__:null,TRANSFORM:Oe,TRANSITION:ye,TRANSITION_END:sn,get:_e,getStyle:Xt,create:se,remove:Ht,empty:on,toFront:Ln,toBack:an,hasClass:si,addClass:Pt,removeClass:he,setClass:oi,getClass:Fe,setOpacity:He,testProp:ai,setTransform:li,setPosition:Te,getPosition:ci,get disableTextSelection(){return fr},get enableTextSelection(){return pr},disableImageDrag:Vs,enableImageDrag:Ws,preventOutline:Zs,restoreOutline:Vr,getSizedParentNode:ya,getScale:qs};function jt(n,i,a,u){if(i&&typeof i=="object")for(var _ in i)js(n,_,i[_],a);else{i=S(i);for(var E=0,N=i.length;E<N;E++)js(n,i[E],a,u)}return this}var En="_leaflet_events";function ge(n,i,a,u){if(arguments.length===1)Ma(n),delete n[En];else if(i&&typeof i=="object")for(var _ in i)Ks(n,_,i[_],a);else if(i=S(i),arguments.length===2)Ma(n,function(H){return D(i,H)!==-1});else for(var E=0,N=i.length;E<N;E++)Ks(n,i[E],a,u);return this}function Ma(n,i){for(var a in n[En]){var u=a.split(/\d/)[0];(!i||i(u))&&Ks(n,u,null,null,a)}}var Ys={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function js(n,i,a,u){var _=i+d(a)+(u?"_"+d(u):"");if(n[En]&&n[En][_])return this;var E=function(H){return a.call(u||n,H||window.event)},N=E;!bt.touchNative&&bt.pointer&&i.indexOf("touch")===0?E=k(n,i,E):bt.touch&&i==="dblclick"?E=qt(n,E):"addEventListener"in n?i==="touchstart"||i==="touchmove"||i==="wheel"||i==="mousewheel"?n.addEventListener(Ys[i]||i,E,bt.passiveEvents?{passive:!1}:!1):i==="mouseenter"||i==="mouseleave"?(E=function(H){H=H||window.event,Js(n,H)&&N(H)},n.addEventListener(Ys[i],E,!1)):n.addEventListener(i,N,!1):n.attachEvent("on"+i,E),n[En]=n[En]||{},n[En][_]=E}function Ks(n,i,a,u,_){_=_||i+d(a)+(u?"_"+d(u):"");var E=n[En]&&n[En][_];if(!E)return this;!bt.touchNative&&bt.pointer&&i.indexOf("touch")===0?K(n,i,E):bt.touch&&i==="dblclick"?Me(n,E):"removeEventListener"in n?n.removeEventListener(Ys[i]||i,E,!1):n.detachEvent("on"+i,E),n[En][_]=null}function hi(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function $s(n){return js(n,"wheel",hi),this}function _r(n){return jt(n,"mousedown touchstart dblclick contextmenu",hi),n._leaflet_disable_click=!0,this}function Be(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function ui(n){return Be(n),hi(n),this}function Sa(n){if(n.composedPath)return n.composedPath();for(var i=[],a=n.target;a;)i.push(a),a=a.parentNode;return i}function Ea(n,i){if(!i)return new X(n.clientX,n.clientY);var a=qs(i),u=a.boundingClientRect;return new X((n.clientX-u.left)/a.x-i.clientLeft,(n.clientY-u.top)/a.y-i.clientTop)}var Ph=bt.linux&&bt.chrome?window.devicePixelRatio:bt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ta(n){return bt.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Ph:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function Js(n,i){var a=i.relatedTarget;if(!a)return!0;try{for(;a&&a!==n;)a=a.parentNode}catch{return!1}return a!==n}var Rh={__proto__:null,on:jt,off:ge,stopPropagation:hi,disableScrollPropagation:$s,disableClickPropagation:_r,preventDefault:Be,stop:ui,getPropagationPath:Sa,getMousePosition:Ea,getWheelDelta:Ta,isExternalTarget:Js,addListener:jt,removeListener:ge},ba=st.extend({run:function(n,i,a,u){this.stop(),this._el=n,this._inProgress=!0,this._duration=a||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=ci(n),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=$(this._animate,this),this._step()},_step:function(n){var i=+new Date-this._startTime,a=this._duration*1e3;i<a?this._runFrame(this._easeOut(i/a),n):(this._runFrame(1),this._complete())},_runFrame:function(n,i){var a=this._startPos.add(this._offset.multiplyBy(n));i&&a._round(),Te(this._el,a),this.fire("step")},_complete:function(){rt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ae=st.extend({options:{crs:Ae,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,i){i=M(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),i.zoom!==void 0&&(this._zoom=this._limitZoom(i.zoom)),i.center&&i.zoom!==void 0&&this.setView(ft(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ye&&bt.any3d&&!bt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),jt(this._proxy,sn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,i,a){if(i=i===void 0?this._zoom:this._limitZoom(i),n=this._limitCenter(ft(n),i,this.options.maxBounds),a=a||{},this._stop(),this._loaded&&!a.reset&&a!==!0){a.animate!==void 0&&(a.zoom=o({animate:a.animate},a.zoom),a.pan=o({animate:a.animate,duration:a.duration},a.pan));var u=this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,i,a.zoom):this._tryAnimatedPan(n,a.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(n,i,a.pan&&a.pan.noMoveStart),this},setZoom:function(n,i){return this._loaded?this.setView(this.getCenter(),n,{zoom:i}):(this._zoom=n,this)},zoomIn:function(n,i){return n=n||(bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,i)},zoomOut:function(n,i){return n=n||(bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,i)},setZoomAround:function(n,i,a){var u=this.getZoomScale(i),_=this.getSize().divideBy(2),E=n instanceof X?n:this.latLngToContainerPoint(n),N=E.subtract(_).multiplyBy(1-1/u),H=this.containerPointToLatLng(_.add(N));return this.setView(H,i,{zoom:a})},_getBoundsCenterZoom:function(n,i){i=i||{},n=n.getBounds?n.getBounds():it(n);var a=z(i.paddingTopLeft||i.padding||[0,0]),u=z(i.paddingBottomRight||i.padding||[0,0]),_=this.getBoundsZoom(n,!1,a.add(u));if(_=typeof i.maxZoom=="number"?Math.min(i.maxZoom,_):_,_===1/0)return{center:n.getCenter(),zoom:_};var E=u.subtract(a).divideBy(2),N=this.project(n.getSouthWest(),_),H=this.project(n.getNorthEast(),_),j=this.unproject(N.add(H).divideBy(2).add(E),_);return{center:j,zoom:_}},fitBounds:function(n,i){if(n=it(n),!n.isValid())throw new Error("Bounds are not valid.");var a=this._getBoundsCenterZoom(n,i);return this.setView(a.center,a.zoom,i)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,i){return this.setView(n,this._zoom,{pan:i})},panBy:function(n,i){if(n=z(n).round(),i=i||{},!n.x&&!n.y)return this.fire("moveend");if(i.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new ba,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),i.animate!==!1){Pt(this._mapPane,"leaflet-pan-anim");var a=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,a,i.duration||.25,i.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,i,a){if(a=a||{},a.animate===!1||!bt.any3d)return this.setView(n,i,a);this._stop();var u=this.project(this.getCenter()),_=this.project(n),E=this.getSize(),N=this._zoom;n=ft(n),i=i===void 0?N:i;var H=Math.max(E.x,E.y),j=H*this.getZoomScale(N,i),at=_.distanceTo(u)||1,Mt=1.42,Ft=Mt*Mt;function ee(be){var es=be?-1:1,vu=be?j:H,xu=j*j-H*H+es*Ft*Ft*at*at,yu=2*vu*Ft*at,co=xu/yu,sl=Math.sqrt(co*co+1)-co,Mu=sl<1e-9?-18:Math.log(sl);return Mu}function Xe(be){return(Math.exp(be)-Math.exp(-be))/2}function Ce(be){return(Math.exp(be)+Math.exp(-be))/2}function cn(be){return Xe(be)/Ce(be)}var Ke=ee(0);function Ii(be){return H*(Ce(Ke)/Ce(Ke+Mt*be))}function pu(be){return H*(Ce(Ke)*cn(Ke+Mt*be)-Xe(Ke))/Ft}function mu(be){return 1-Math.pow(1-be,1.5)}var _u=Date.now(),il=(ee(1)-Ke)/Mt,gu=a.duration?1e3*a.duration:1e3*il*.8;function rl(){var be=(Date.now()-_u)/gu,es=mu(be)*il;be<=1?(this._flyToFrame=$(rl,this),this._move(this.unproject(u.add(_.subtract(u).multiplyBy(pu(es)/at)),N),this.getScaleZoom(H/Ii(es),N),{flyTo:!0})):this._move(n,i)._moveEnd(!0)}return this._moveStart(!0,a.noMoveStart),rl.call(this),this},flyToBounds:function(n,i){var a=this._getBoundsCenterZoom(n,i);return this.flyTo(a.center,a.zoom,i)},setMaxBounds:function(n){return n=it(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var i=this.options.minZoom;return this.options.minZoom=n,this._loaded&&i!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var i=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&i!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,i){this._enforcingBounds=!0;var a=this.getCenter(),u=this._limitCenter(a,this._zoom,it(n));return a.equals(u)||this.panTo(u,i),this._enforcingBounds=!1,this},panInside:function(n,i){i=i||{};var a=z(i.paddingTopLeft||i.padding||[0,0]),u=z(i.paddingBottomRight||i.padding||[0,0]),_=this.project(this.getCenter()),E=this.project(n),N=this.getPixelBounds(),H=ot([N.min.add(a),N.max.subtract(u)]),j=H.getSize();if(!H.contains(E)){this._enforcingBounds=!0;var at=E.subtract(H.getCenter()),Mt=H.extend(E).getSize().subtract(j);_.x+=at.x<0?-Mt.x:Mt.x,_.y+=at.y<0?-Mt.y:Mt.y,this.panTo(this.unproject(_),i),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=o({animate:!1,pan:!0},n===!0?{animate:!0}:n);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var a=this.getSize(),u=i.divideBy(2).round(),_=a.divideBy(2).round(),E=u.subtract(_);return!E.x&&!E.y?this:(n.animate&&n.pan?this.panBy(E):(n.pan&&this._rawPanBy(E),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:a}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=o({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=h(this._handleGeolocationResponse,this),a=h(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,a,n):navigator.geolocation.getCurrentPosition(i,a,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var i=n.code,a=n.message||(i===1?"permission denied":i===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+a+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var i=n.coords.latitude,a=n.coords.longitude,u=new lt(i,a),_=u.toBounds(n.coords.accuracy*2),E=this._locateOptions;if(E.setView){var N=this.getBoundsZoom(_);this.setView(u,E.maxZoom?Math.min(N,E.maxZoom):N)}var H={latlng:u,bounds:_,timestamp:n.timestamp};for(var j in n.coords)typeof n.coords[j]=="number"&&(H[j]=n.coords[j]);this.fire("locationfound",H)}},addHandler:function(n,i){if(!i)return this;var a=this[n]=new i(this);return this._handlers.push(a),this.options[n]&&a.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ht(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(rt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Ht(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,i){var a="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),u=se("div",a,i||this._mapPane);return n&&(this._panes[n]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),i=this.unproject(n.getBottomLeft()),a=this.unproject(n.getTopRight());return new W(i,a)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,i,a){n=it(n),a=z(a||[0,0]);var u=this.getZoom()||0,_=this.getMinZoom(),E=this.getMaxZoom(),N=n.getNorthWest(),H=n.getSouthEast(),j=this.getSize().subtract(a),at=ot(this.project(H,u),this.project(N,u)).getSize(),Mt=bt.any3d?this.options.zoomSnap:1,Ft=j.x/at.x,ee=j.y/at.y,Xe=i?Math.max(Ft,ee):Math.min(Ft,ee);return u=this.getScaleZoom(Xe,u),Mt&&(u=Math.round(u/(Mt/100))*(Mt/100),u=i?Math.ceil(u/Mt)*Mt:Math.floor(u/Mt)*Mt),Math.max(_,Math.min(E,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new X(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,i){var a=this._getTopLeftPoint(n,i);return new et(a,a.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,i){var a=this.options.crs;return i=i===void 0?this._zoom:i,a.scale(n)/a.scale(i)},getScaleZoom:function(n,i){var a=this.options.crs;i=i===void 0?this._zoom:i;var u=a.zoom(n*a.scale(i));return isNaN(u)?1/0:u},project:function(n,i){return i=i===void 0?this._zoom:i,this.options.crs.latLngToPoint(ft(n),i)},unproject:function(n,i){return i=i===void 0?this._zoom:i,this.options.crs.pointToLatLng(z(n),i)},layerPointToLatLng:function(n){var i=z(n).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(n){var i=this.project(ft(n))._round();return i._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(ft(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(it(n))},distance:function(n,i){return this.options.crs.distance(ft(n),ft(i))},containerPointToLayerPoint:function(n){return z(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return z(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var i=this.containerPointToLayerPoint(z(n));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ft(n)))},mouseEventToContainerPoint:function(n){return Ea(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var i=this._container=_e(n);if(i){if(i._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");jt(i,"scroll",this._onScroll,this),this._containerId=d(i)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&bt.any3d,Pt(n,"leaflet-container"+(bt.touch?" leaflet-touch":"")+(bt.retina?" leaflet-retina":"")+(bt.ielt9?" leaflet-oldie":"")+(bt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=Xt(n,"position");i!=="absolute"&&i!=="relative"&&i!=="fixed"&&i!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Te(this._mapPane,new X(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Pt(n.markerPane,"leaflet-zoom-hide"),Pt(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,i,a){Te(this._mapPane,new X(0,0));var u=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var _=this._zoom!==i;this._moveStart(_,a)._move(n,i)._moveEnd(_),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(n,i){return n&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(n,i,a,u){i===void 0&&(i=this._zoom);var _=this._zoom!==i;return this._zoom=i,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),u?a&&a.pinch&&this.fire("zoom",a):((_||a&&a.pinch)&&this.fire("zoom",a),this.fire("move",a)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return rt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Te(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[d(this._container)]=this;var i=n?ge:jt;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),bt.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){rt(this._resizeRequest),this._resizeRequest=$(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,i){for(var a=[],u,_=i==="mouseout"||i==="mouseover",E=n.target||n.srcElement,N=!1;E;){if(u=this._targets[d(E)],u&&(i==="click"||i==="preclick")&&this._draggableMoved(u)){N=!0;break}if(u&&u.listens(i,!0)&&(_&&!Js(E,n)||(a.push(u),_))||E===this._container)break;E=E.parentNode}return!a.length&&!N&&!_&&this.listens(i,!0)&&(a=[this]),a},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var i=n.target||n.srcElement;if(!(!this._loaded||i._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(i))){var a=n.type;a==="mousedown"&&Zs(i),this._fireDOMEvent(n,a)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,i,a){if(n.type==="click"){var u=o({},n);u.type="preclick",this._fireDOMEvent(u,u.type,a)}var _=this._findEventTargets(n,i);if(a){for(var E=[],N=0;N<a.length;N++)a[N].listens(i,!0)&&E.push(a[N]);_=E.concat(_)}if(_.length){i==="contextmenu"&&Be(n);var H=_[0],j={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var at=H.getLatLng&&(!H._radius||H._radius<=10);j.containerPoint=at?this.latLngToContainerPoint(H.getLatLng()):this.mouseEventToContainerPoint(n),j.layerPoint=this.containerPointToLayerPoint(j.containerPoint),j.latlng=at?H.getLatLng():this.layerPointToLatLng(j.layerPoint)}for(N=0;N<_.length;N++)if(_[N].fire(i,j,!0),j.originalEvent._stopped||_[N].options.bubblingMouseEvents===!1&&D(this._mouseEvents,i)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,i=this._handlers.length;n<i;n++)this._handlers[n].disable()},whenReady:function(n,i){return this._loaded?n.call(i||this,{target:this}):this.on("load",n,i),this},_getMapPanePos:function(){return ci(this._mapPane)||new X(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,i){var a=n&&i!==void 0?this._getNewPixelOrigin(n,i):this.getPixelOrigin();return a.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,i){var a=this.getSize()._divideBy(2);return this.project(n,i)._subtract(a)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,i,a){var u=this._getNewPixelOrigin(a,i);return this.project(n,i)._subtract(u)},_latLngBoundsToNewLayerBounds:function(n,i,a){var u=this._getNewPixelOrigin(a,i);return ot([this.project(n.getSouthWest(),i)._subtract(u),this.project(n.getNorthWest(),i)._subtract(u),this.project(n.getSouthEast(),i)._subtract(u),this.project(n.getNorthEast(),i)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,i,a){if(!a)return n;var u=this.project(n,i),_=this.getSize().divideBy(2),E=new et(u.subtract(_),u.add(_)),N=this._getBoundsOffset(E,a,i);return Math.abs(N.x)<=1&&Math.abs(N.y)<=1?n:this.unproject(u.add(N),i)},_limitOffset:function(n,i){if(!i)return n;var a=this.getPixelBounds(),u=new et(a.min.add(n),a.max.add(n));return n.add(this._getBoundsOffset(u,i))},_getBoundsOffset:function(n,i,a){var u=ot(this.project(i.getNorthEast(),a),this.project(i.getSouthWest(),a)),_=u.min.subtract(n.min),E=u.max.subtract(n.max),N=this._rebound(_.x,-E.x),H=this._rebound(_.y,-E.y);return new X(N,H)},_rebound:function(n,i){return n+i>0?Math.round(n-i)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(i))},_limitZoom:function(n){var i=this.getMinZoom(),a=this.getMaxZoom(),u=bt.any3d?this.options.zoomSnap:1;return u&&(n=Math.round(n/u)*u),Math.max(i,Math.min(a,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){he(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,i){var a=this._getCenterOffset(n)._trunc();return(i&&i.animate)!==!0&&!this.getSize().contains(a)?!1:(this.panBy(a,i),!0)},_createAnimProxy:function(){var n=this._proxy=se("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(i){var a=Oe,u=this._proxy.style[a];li(this._proxy,this.project(i.center,i.zoom),this.getZoomScale(i.zoom,1)),u===this._proxy.style[a]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ht(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),i=this.getZoom();li(this._proxy,this.project(n,i),this.getZoomScale(i,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,i,a){if(this._animatingZoom)return!0;if(a=a||{},!this._zoomAnimated||a.animate===!1||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(i),_=this._getCenterOffset(n)._divideBy(1-1/u);return a.animate!==!0&&!this.getSize().contains(_)?!1:($(function(){this._moveStart(!0,a.noMoveStart||!1)._animateZoom(n,i,!0)},this),!0)},_animateZoom:function(n,i,a,u){this._mapPane&&(a&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=i,Pt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:i,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&he(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ch(n,i){return new ae(n,i)}var pn=F.extend({options:{position:"topright"},initialize:function(n){M(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var i=this._map;return i&&i.removeControl(this),this.options.position=n,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var i=this._container=this.onAdd(n),a=this.getPosition(),u=n._controlCorners[a];return Pt(i,"leaflet-control"),a.indexOf("bottom")!==-1?u.insertBefore(i,u.firstChild):u.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ht(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),gr=function(n){return new pn(n)};ae.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},i="leaflet-",a=this._controlContainer=se("div",i+"control-container",this._container);function u(_,E){var N=i+_+" "+i+E;n[_+E]=se("div",N,a)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Ht(this._controlCorners[n]);Ht(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var wa=pn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,i,a,u){return a<u?-1:u<a?1:0}},initialize:function(n,i,a){M(this,a),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in n)this._addLayer(n[u],u);for(u in i)this._addLayer(i[u],u,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return pn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,i){return this._addLayer(n,i),this._map?this._update():this},addOverlay:function(n,i){return this._addLayer(n,i,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var i=this._getLayer(d(n));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){Pt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Pt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):he(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return he(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",i=this._container=se("div",n),a=this.options.collapsed;i.setAttribute("aria-haspopup",!0),_r(i),$s(i);var u=this._section=se("section",n+"-list");a&&(this._map.on("click",this.collapse,this),jt(i,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var _=this._layersLink=se("a",n+"-toggle",i);_.href="#",_.title="Layers",_.setAttribute("role","button"),jt(_,{keydown:function(E){E.keyCode===13&&this._expandSafely()},click:function(E){Be(E),this._expandSafely()}},this),a||this.expand(),this._baseLayersList=se("div",n+"-base",u),this._separator=se("div",n+"-separator",u),this._overlaysList=se("div",n+"-overlays",u),i.appendChild(u)},_getLayer:function(n){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&d(this._layers[i].layer)===n)return this._layers[i]},_addLayer:function(n,i,a){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:i,overlay:a}),this.options.sortLayers&&this._layers.sort(h(function(u,_){return this.options.sortFunction(u.layer,_.layer,u.name,_.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;on(this._baseLayersList),on(this._overlaysList),this._layerControlInputs=[];var n,i,a,u,_=0;for(a=0;a<this._layers.length;a++)u=this._layers[a],this._addItem(u),i=i||u.overlay,n=n||!u.overlay,_+=u.overlay?0:1;return this.options.hideSingleBase&&(n=n&&_>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=i&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var i=this._getLayer(d(n.target)),a=i.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;a&&this._map.fire(a,i)},_createRadioElement:function(n,i){var a='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(i?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=a,u.firstChild},_addItem:function(n){var i=document.createElement("label"),a=this._map.hasLayer(n.layer),u;n.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=a):u=this._createRadioElement("leaflet-base-layers_"+d(this),a),this._layerControlInputs.push(u),u.layerId=d(n.layer),jt(u,"click",this._onInputClick,this);var _=document.createElement("span");_.innerHTML=" "+n.name;var E=document.createElement("span");i.appendChild(E),E.appendChild(u),E.appendChild(_);var N=n.overlay?this._overlaysList:this._baseLayersList;return N.appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,i,a,u=[],_=[];this._handlingClick=!0;for(var E=n.length-1;E>=0;E--)i=n[E],a=this._getLayer(i.layerId).layer,i.checked?u.push(a):i.checked||_.push(a);for(E=0;E<_.length;E++)this._map.hasLayer(_[E])&&this._map.removeLayer(_[E]);for(E=0;E<u.length;E++)this._map.hasLayer(u[E])||this._map.addLayer(u[E]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,i,a,u=this._map.getZoom(),_=n.length-1;_>=0;_--)i=n[_],a=this._getLayer(i.layerId).layer,i.disabled=a.options.minZoom!==void 0&&u<a.options.minZoom||a.options.maxZoom!==void 0&&u>a.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,jt(n,"click",Be),this.expand();var i=this;setTimeout(function(){ge(n,"click",Be),i._preventClick=!1})}}),Ih=function(n,i,a){return new wa(n,i,a)},Qs=pn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var i="leaflet-control-zoom",a=se("div",i+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,i+"-in",a,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,i+"-out",a,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),a},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,i,a,u,_){var E=se("a",a,u);return E.innerHTML=n,E.href="#",E.title=i,E.setAttribute("role","button"),E.setAttribute("aria-label",i),_r(E),jt(E,"click",ui),jt(E,"click",_,this),jt(E,"click",this._refocusOnMap,this),E},_updateDisabled:function(){var n=this._map,i="leaflet-disabled";he(this._zoomInButton,i),he(this._zoomOutButton,i),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Pt(this._zoomOutButton,i),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Pt(this._zoomInButton,i),this._zoomInButton.setAttribute("aria-disabled","true"))}});ae.mergeOptions({zoomControl:!0}),ae.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Qs,this.addControl(this.zoomControl))});var Dh=function(n){return new Qs(n)},Aa=pn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var i="leaflet-control-scale",a=se("div",i),u=this.options;return this._addScales(u,i+"-line",a),n.on(u.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),a},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,i,a){n.metric&&(this._mScale=se("div",i,a)),n.imperial&&(this._iScale=se("div",i,a))},_update:function(){var n=this._map,i=n.getSize().y/2,a=n.distance(n.containerPointToLatLng([0,i]),n.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(a)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var i=this._getRoundNum(n),a=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,a,i/n)},_updateImperial:function(n){var i=n*3.2808399,a,u,_;i>5280?(a=i/5280,u=this._getRoundNum(a),this._updateScale(this._iScale,u+" mi",u/a)):(_=this._getRoundNum(i),this._updateScale(this._iScale,_+" ft",_/i))},_updateScale:function(n,i,a){n.style.width=Math.round(this.options.maxWidth*a)+"px",n.innerHTML=i},_getRoundNum:function(n){var i=Math.pow(10,(Math.floor(n)+"").length-1),a=n/i;return a=a>=10?10:a>=5?5:a>=3?3:a>=2?2:1,i*a}}),Uh=function(n){return new Aa(n)},Nh='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',to=pn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(bt.inlineSvg?Nh+" ":"")+"Leaflet</a>"},initialize:function(n){M(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=se("div","leaflet-control-attribution"),_r(this._container);for(var i in n._layers)n._layers[i].getAttribution&&this.addAttribution(n._layers[i].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var i in this._attributions)this._attributions[i]&&n.push(i);var a=[];this.options.prefix&&a.push(this.options.prefix),n.length&&a.push(n.join(", ")),this._container.innerHTML=a.join(' <span aria-hidden="true">|</span> ')}}});ae.mergeOptions({attributionControl:!0}),ae.addInitHook(function(){this.options.attributionControl&&new to().addTo(this)});var Oh=function(n){return new to(n)};pn.Layers=wa,pn.Zoom=Qs,pn.Scale=Aa,pn.Attribution=to,gr.layers=Ih,gr.zoom=Dh,gr.scale=Uh,gr.attribution=Oh;var Tn=F.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Tn.addTo=function(n,i){return n.addHandler(i,this),this};var Fh={Events:tt},La=bt.touch?"touchstart mousedown":"mousedown",Wn=st.extend({options:{clickTolerance:3},initialize:function(n,i,a,u){M(this,u),this._element=n,this._dragStartTarget=i||n,this._preventOutline=a},enable:function(){this._enabled||(jt(this._dragStartTarget,La,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Wn._dragging===this&&this.finishDrag(!0),ge(this._dragStartTarget,La,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!si(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Wn._dragging===this&&this.finishDrag();return}if(!(Wn._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Wn._dragging=this,this._preventOutline&&Zs(this._element),Vs(),fr(),!this._moving)){this.fire("down");var i=n.touches?n.touches[0]:n,a=ya(this._element);this._startPoint=new X(i.clientX,i.clientY),this._startPos=ci(this._element),this._parentScale=qs(a);var u=n.type==="mousedown";jt(document,u?"mousemove":"touchmove",this._onMove,this),jt(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var i=n.touches&&n.touches.length===1?n.touches[0]:n,a=new X(i.clientX,i.clientY)._subtract(this._startPoint);!a.x&&!a.y||Math.abs(a.x)+Math.abs(a.y)<this.options.clickTolerance||(a.x/=this._parentScale.x,a.y/=this._parentScale.y,Be(n),this._moved||(this.fire("dragstart"),this._moved=!0,Pt(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Pt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(a),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Te(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){he(document.body,"leaflet-dragging"),this._lastTarget&&(he(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ge(document,"mousemove touchmove",this._onMove,this),ge(document,"mouseup touchend touchcancel",this._onUp,this),Ws(),pr();var i=this._moved&&this._moving;this._moving=!1,Wn._dragging=!1,i&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Pa(n,i,a){var u,_=[1,4,2,8],E,N,H,j,at,Mt,Ft,ee;for(E=0,Mt=n.length;E<Mt;E++)n[E]._code=di(n[E],i);for(H=0;H<4;H++){for(Ft=_[H],u=[],E=0,Mt=n.length,N=Mt-1;E<Mt;N=E++)j=n[E],at=n[N],j._code&Ft?at._code&Ft||(ee=Wr(at,j,Ft,i,a),ee._code=di(ee,i),u.push(ee)):(at._code&Ft&&(ee=Wr(at,j,Ft,i,a),ee._code=di(ee,i),u.push(ee)),u.push(j));n=u}return n}function Ra(n,i){var a,u,_,E,N,H,j,at,Mt;if(!n||n.length===0)throw new Error("latlngs not passed");ln(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Ft=ft([0,0]),ee=it(n),Xe=ee.getNorthWest().distanceTo(ee.getSouthWest())*ee.getNorthEast().distanceTo(ee.getNorthWest());Xe<1700&&(Ft=eo(n));var Ce=n.length,cn=[];for(a=0;a<Ce;a++){var Ke=ft(n[a]);cn.push(i.project(ft([Ke.lat-Ft.lat,Ke.lng-Ft.lng])))}for(H=j=at=0,a=0,u=Ce-1;a<Ce;u=a++)_=cn[a],E=cn[u],N=_.y*E.x-E.y*_.x,j+=(_.x+E.x)*N,at+=(_.y+E.y)*N,H+=N*3;H===0?Mt=cn[0]:Mt=[j/H,at/H];var Ii=i.unproject(z(Mt));return ft([Ii.lat+Ft.lat,Ii.lng+Ft.lng])}function eo(n){for(var i=0,a=0,u=0,_=0;_<n.length;_++){var E=ft(n[_]);i+=E.lat,a+=E.lng,u++}return ft([i/u,a/u])}var Bh={__proto__:null,clipPolygon:Pa,polygonCenter:Ra,centroid:eo};function Ca(n,i){if(!i||!n.length)return n.slice();var a=i*i;return n=Hh(n,a),n=kh(n,a),n}function Ia(n,i,a){return Math.sqrt(vr(n,i,a,!0))}function zh(n,i,a){return vr(n,i,a)}function kh(n,i){var a=n.length,u=typeof Uint8Array<"u"?Uint8Array:Array,_=new u(a);_[0]=_[a-1]=1,no(n,_,i,0,a-1);var E,N=[];for(E=0;E<a;E++)_[E]&&N.push(n[E]);return N}function no(n,i,a,u,_){var E=0,N,H,j;for(H=u+1;H<=_-1;H++)j=vr(n[H],n[u],n[_],!0),j>E&&(N=H,E=j);E>a&&(i[N]=1,no(n,i,a,u,N),no(n,i,a,N,_))}function Hh(n,i){for(var a=[n[0]],u=1,_=0,E=n.length;u<E;u++)Gh(n[u],n[_])>i&&(a.push(n[u]),_=u);return _<E-1&&a.push(n[E-1]),a}var Da;function Ua(n,i,a,u,_){var E=u?Da:di(n,a),N=di(i,a),H,j,at;for(Da=N;;){if(!(E|N))return[n,i];if(E&N)return!1;H=E||N,j=Wr(n,i,H,a,_),at=di(j,a),H===E?(n=j,E=at):(i=j,N=at)}}function Wr(n,i,a,u,_){var E=i.x-n.x,N=i.y-n.y,H=u.min,j=u.max,at,Mt;return a&8?(at=n.x+E*(j.y-n.y)/N,Mt=j.y):a&4?(at=n.x+E*(H.y-n.y)/N,Mt=H.y):a&2?(at=j.x,Mt=n.y+N*(j.x-n.x)/E):a&1&&(at=H.x,Mt=n.y+N*(H.x-n.x)/E),new X(at,Mt,_)}function di(n,i){var a=0;return n.x<i.min.x?a|=1:n.x>i.max.x&&(a|=2),n.y<i.min.y?a|=4:n.y>i.max.y&&(a|=8),a}function Gh(n,i){var a=i.x-n.x,u=i.y-n.y;return a*a+u*u}function vr(n,i,a,u){var _=i.x,E=i.y,N=a.x-_,H=a.y-E,j=N*N+H*H,at;return j>0&&(at=((n.x-_)*N+(n.y-E)*H)/j,at>1?(_=a.x,E=a.y):at>0&&(_+=N*at,E+=H*at)),N=n.x-_,H=n.y-E,u?N*N+H*H:new X(_,E)}function ln(n){return!b(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Na(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ln(n)}function Oa(n,i){var a,u,_,E,N,H,j,at;if(!n||n.length===0)throw new Error("latlngs not passed");ln(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Mt=ft([0,0]),Ft=it(n),ee=Ft.getNorthWest().distanceTo(Ft.getSouthWest())*Ft.getNorthEast().distanceTo(Ft.getNorthWest());ee<1700&&(Mt=eo(n));var Xe=n.length,Ce=[];for(a=0;a<Xe;a++){var cn=ft(n[a]);Ce.push(i.project(ft([cn.lat-Mt.lat,cn.lng-Mt.lng])))}for(a=0,u=0;a<Xe-1;a++)u+=Ce[a].distanceTo(Ce[a+1])/2;if(u===0)at=Ce[0];else for(a=0,E=0;a<Xe-1;a++)if(N=Ce[a],H=Ce[a+1],_=N.distanceTo(H),E+=_,E>u){j=(E-u)/_,at=[H.x-j*(H.x-N.x),H.y-j*(H.y-N.y)];break}var Ke=i.unproject(z(at));return ft([Ke.lat+Mt.lat,Ke.lng+Mt.lng])}var Vh={__proto__:null,simplify:Ca,pointToSegmentDistance:Ia,closestPointOnSegment:zh,clipSegment:Ua,_getEdgeIntersection:Wr,_getBitCode:di,_sqClosestPointOnSegment:vr,isFlat:ln,_flat:Na,polylineCenter:Oa},io={project:function(n){return new X(n.lng,n.lat)},unproject:function(n){return new lt(n.y,n.x)},bounds:new et([-180,-90],[180,90])},ro={R:6378137,R_MINOR:6356752314245179e-9,bounds:new et([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var i=Math.PI/180,a=this.R,u=n.lat*i,_=this.R_MINOR/a,E=Math.sqrt(1-_*_),N=E*Math.sin(u),H=Math.tan(Math.PI/4-u/2)/Math.pow((1-N)/(1+N),E/2);return u=-a*Math.log(Math.max(H,1e-10)),new X(n.lng*i*a,u)},unproject:function(n){for(var i=180/Math.PI,a=this.R,u=this.R_MINOR/a,_=Math.sqrt(1-u*u),E=Math.exp(-n.y/a),N=Math.PI/2-2*Math.atan(E),H=0,j=.1,at;H<15&&Math.abs(j)>1e-7;H++)at=_*Math.sin(N),at=Math.pow((1-at)/(1+at),_/2),j=Math.PI/2-2*Math.atan(E*at)-N,N+=j;return new lt(N*i,n.x*i/a)}},Wh={__proto__:null,LonLat:io,Mercator:ro,SphericalMercator:Nt},Xh=o({},Ut,{code:"EPSG:3395",projection:ro,transformation:function(){var n=.5/(Math.PI*ro.R);return Z(n,.5,-n,.5)}()}),Fa=o({},Ut,{code:"EPSG:4326",projection:io,transformation:Z(1/180,1,-1/180,.5)}),Zh=o({},St,{projection:io,transformation:Z(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,i){var a=i.lng-n.lng,u=i.lat-n.lat;return Math.sqrt(a*a+u*u)},infinite:!0});St.Earth=Ut,St.EPSG3395=Xh,St.EPSG3857=Ae,St.EPSG900913=It,St.EPSG4326=Fa,St.Simple=Zh;var mn=st.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[d(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[d(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var i=n.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var a=this.getEvents();i.on(a,this),this.once("remove",function(){i.off(a,this)},this)}this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this})}}});ae.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var i=d(n);return this._layers[i]?this:(this._layers[i]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var i=d(n);return this._layers[i]?(this._loaded&&n.onRemove(this),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return d(n)in this._layers},eachLayer:function(n,i){for(var a in this._layers)n.call(i,this._layers[a]);return this},_addLayers:function(n){n=n?b(n)?n:[n]:[];for(var i=0,a=n.length;i<a;i++)this.addLayer(n[i])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[d(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var i=d(n);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,i=-1/0,a=this._getZoomSpan();for(var u in this._zoomBoundLayers){var _=this._zoomBoundLayers[u].options;n=_.minZoom===void 0?n:Math.min(n,_.minZoom),i=_.maxZoom===void 0?i:Math.max(i,_.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=n===1/0?void 0:n,a!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ai=mn.extend({initialize:function(n,i){M(this,i),this._layers={};var a,u;if(n)for(a=0,u=n.length;a<u;a++)this.addLayer(n[a])},addLayer:function(n){var i=this.getLayerId(n);return this._layers[i]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var i=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(n){var i=typeof n=="number"?n:this.getLayerId(n);return i in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var i=Array.prototype.slice.call(arguments,1),a,u;for(a in this._layers)u=this._layers[a],u[n]&&u[n].apply(u,i);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,i){for(var a in this._layers)n.call(i,this._layers[a]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return d(n)}}),qh=function(n,i){return new Ai(n,i)},Pn=Ai.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Ai.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Ai.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new W;for(var i in this._layers){var a=this._layers[i];n.extend(a.getBounds?a.getBounds():a.getLatLng())}return n}}),Yh=function(n,i){return new Pn(n,i)},Li=F.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){M(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,i){var a=this._getIconUrl(n);if(!a){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(a,i&&i.tagName==="IMG"?i:null);return this._setIconStyles(u,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(n,i){var a=this.options,u=a[i+"Size"];typeof u=="number"&&(u=[u,u]);var _=z(u),E=z(i==="shadow"&&a.shadowAnchor||a.iconAnchor||_&&_.divideBy(2,!0));n.className="leaflet-marker-"+i+" "+(a.className||""),E&&(n.style.marginLeft=-E.x+"px",n.style.marginTop=-E.y+"px"),_&&(n.style.width=_.x+"px",n.style.height=_.y+"px")},_createImg:function(n,i){return i=i||document.createElement("img"),i.src=n,i},_getIconUrl:function(n){return bt.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function jh(n){return new Li(n)}var xr=Li.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof xr.imagePath!="string"&&(xr.imagePath=this._detectIconPath()),(this.options.imagePath||xr.imagePath)+Li.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var i=function(a,u,_){var E=u.exec(a);return E&&E[_]};return n=i(n,/^url\((['"])?(.+)\1\)$/,2),n&&i(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=se("div","leaflet-default-icon-path",document.body),i=Xt(n,"background-image")||Xt(n,"backgroundImage");if(document.body.removeChild(n),i=this._stripUrl(i),i)return i;var a=document.querySelector('link[href$="leaflet.css"]');return a?a.href.substring(0,a.href.length-11-1):""}}),Ba=Tn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Wn(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Pt(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&he(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var i=this._marker,a=i._map,u=this._marker.options.autoPanSpeed,_=this._marker.options.autoPanPadding,E=ci(i._icon),N=a.getPixelBounds(),H=a.getPixelOrigin(),j=ot(N.min._subtract(H).add(_),N.max._subtract(H).subtract(_));if(!j.contains(E)){var at=z((Math.max(j.max.x,E.x)-j.max.x)/(N.max.x-j.max.x)-(Math.min(j.min.x,E.x)-j.min.x)/(N.min.x-j.min.x),(Math.max(j.max.y,E.y)-j.max.y)/(N.max.y-j.max.y)-(Math.min(j.min.y,E.y)-j.min.y)/(N.min.y-j.min.y)).multiplyBy(u);a.panBy(at,{animate:!1}),this._draggable._newPos._add(at),this._draggable._startPos._add(at),Te(i._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=$(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(rt(this._panRequest),this._panRequest=$(this._adjustPan.bind(this,n)))},_onDrag:function(n){var i=this._marker,a=i._shadow,u=ci(i._icon),_=i._map.layerPointToLatLng(u);a&&Te(a,u),i._latlng=_,n.latlng=_,n.oldLatLng=this._oldLatLng,i.fire("move",n).fire("drag",n)},_onDragEnd:function(n){rt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Xr=mn.extend({options:{icon:new xr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,i){M(this,i),this._latlng=ft(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var i=this._latlng;return this._latlng=ft(n),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),a=n.icon.createIcon(this._icon),u=!1;a!==this._icon&&(this._icon&&this._removeIcon(),u=!0,n.title&&(a.title=n.title),a.tagName==="IMG"&&(a.alt=n.alt||"")),Pt(a,i),n.keyboard&&(a.tabIndex="0",a.setAttribute("role","button")),this._icon=a,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&jt(a,"focus",this._panOnFocus,this);var _=n.icon.createShadow(this._shadow),E=!1;_!==this._shadow&&(this._removeShadow(),E=!0),_&&(Pt(_,i),_.alt=""),this._shadow=_,n.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),_&&E&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ge(this._icon,"focus",this._panOnFocus,this),Ht(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ht(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Te(this._icon,n),this._shadow&&Te(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var i=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(Pt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ba)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ba(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&He(this._icon,n),this._shadow&&He(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var i=this.options.icon.options,a=i.iconSize?z(i.iconSize):z(0,0),u=i.iconAnchor?z(i.iconAnchor):z(0,0);n.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:a.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Kh(n,i){return new Xr(n,i)}var Xn=mn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return M(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Zr=Xn.extend({options:{fill:!0,radius:10},initialize:function(n,i){M(this,i),this._latlng=ft(n),this._radius=this.options.radius},setLatLng:function(n){var i=this._latlng;return this._latlng=ft(n),this.redraw(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var i=n&&n.radius||this._radius;return Xn.prototype.setStyle.call(this,n),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,i=this._radiusY||n,a=this._clickTolerance(),u=[n+a,i+a];this._pxBounds=new et(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function $h(n,i){return new Zr(n,i)}var so=Zr.extend({initialize:function(n,i,a){if(typeof i=="number"&&(i=o({},a,{radius:i})),M(this,i),this._latlng=ft(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new W(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Xn.prototype.setStyle,_project:function(){var n=this._latlng.lng,i=this._latlng.lat,a=this._map,u=a.options.crs;if(u.distance===Ut.distance){var _=Math.PI/180,E=this._mRadius/Ut.R/_,N=a.project([i+E,n]),H=a.project([i-E,n]),j=N.add(H).divideBy(2),at=a.unproject(j).lat,Mt=Math.acos((Math.cos(E*_)-Math.sin(i*_)*Math.sin(at*_))/(Math.cos(i*_)*Math.cos(at*_)))/_;(isNaN(Mt)||Mt===0)&&(Mt=E/Math.cos(Math.PI/180*i)),this._point=j.subtract(a.getPixelOrigin()),this._radius=isNaN(Mt)?0:j.x-a.project([at,n-Mt]).x,this._radiusY=j.y-N.y}else{var Ft=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(Ft).x}this._updateBounds()}});function Jh(n,i,a){return new so(n,i,a)}var Rn=Xn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,i){M(this,i),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var i=1/0,a=null,u=vr,_,E,N=0,H=this._parts.length;N<H;N++)for(var j=this._parts[N],at=1,Mt=j.length;at<Mt;at++){_=j[at-1],E=j[at];var Ft=u(n,_,E,!0);Ft<i&&(i=Ft,a=u(n,_,E))}return a&&(a.distance=Math.sqrt(i)),a},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Oa(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,i){return i=i||this._defaultShape(),n=ft(n),i.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new W,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return ln(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var i=[],a=ln(n),u=0,_=n.length;u<_;u++)a?(i[u]=ft(n[u]),this._bounds.extend(i[u])):i[u]=this._convertLatLngs(n[u]);return i},_project:function(){var n=new et;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),i=new X(n,n);this._rawPxBounds&&(this._pxBounds=new et([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)]))},_projectLatlngs:function(n,i,a){var u=n[0]instanceof lt,_=n.length,E,N;if(u){for(N=[],E=0;E<_;E++)N[E]=this._map.latLngToLayerPoint(n[E]),a.extend(N[E]);i.push(N)}else for(E=0;E<_;E++)this._projectLatlngs(n[E],i,a)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var i=this._parts,a,u,_,E,N,H,j;for(a=0,_=0,E=this._rings.length;a<E;a++)for(j=this._rings[a],u=0,N=j.length;u<N-1;u++)H=Ua(j[u],j[u+1],n,u,!0),H&&(i[_]=i[_]||[],i[_].push(H[0]),(H[1]!==j[u+1]||u===N-2)&&(i[_].push(H[1]),_++))}},_simplifyPoints:function(){for(var n=this._parts,i=this.options.smoothFactor,a=0,u=n.length;a<u;a++)n[a]=Ca(n[a],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,i){var a,u,_,E,N,H,j=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(a=0,E=this._parts.length;a<E;a++)for(H=this._parts[a],u=0,N=H.length,_=N-1;u<N;_=u++)if(!(!i&&u===0)&&Ia(n,H[_],H[u])<=j)return!0;return!1}});function Qh(n,i){return new Rn(n,i)}Rn._flat=Na;var Pi=Rn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ra(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var i=Rn.prototype._convertLatLngs.call(this,n),a=i.length;return a>=2&&i[0]instanceof lt&&i[0].equals(i[a-1])&&i.pop(),i},_setLatLngs:function(n){Rn.prototype._setLatLngs.call(this,n),ln(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ln(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,i=this.options.weight,a=new X(i,i);if(n=new et(n.min.subtract(a),n.max.add(a)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,_=this._rings.length,E;u<_;u++)E=Pa(this._rings[u],n,!0),E.length&&this._parts.push(E)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var i=!1,a,u,_,E,N,H,j,at;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(E=0,j=this._parts.length;E<j;E++)for(a=this._parts[E],N=0,at=a.length,H=at-1;N<at;H=N++)u=a[N],_=a[H],u.y>n.y!=_.y>n.y&&n.x<(_.x-u.x)*(n.y-u.y)/(_.y-u.y)+u.x&&(i=!i);return i||Rn.prototype._containsPoint.call(this,n,!0)}});function tu(n,i){return new Pi(n,i)}var Cn=Pn.extend({initialize:function(n,i){M(this,i),this._layers={},n&&this.addData(n)},addData:function(n){var i=b(n)?n:n.features,a,u,_;if(i){for(a=0,u=i.length;a<u;a++)_=i[a],(_.geometries||_.geometry||_.features||_.coordinates)&&this.addData(_);return this}var E=this.options;if(E.filter&&!E.filter(n))return this;var N=qr(n,E);return N?(N.feature=Kr(n),N.defaultOptions=N.options,this.resetStyle(N),E.onEachFeature&&E.onEachFeature(n,N),this.addLayer(N)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=o({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(i){this._setLayerStyle(i,n)},this)},_setLayerStyle:function(n,i){n.setStyle&&(typeof i=="function"&&(i=i(n.feature)),n.setStyle(i))}});function qr(n,i){var a=n.type==="Feature"?n.geometry:n,u=a?a.coordinates:null,_=[],E=i&&i.pointToLayer,N=i&&i.coordsToLatLng||oo,H,j,at,Mt;if(!u&&!a)return null;switch(a.type){case"Point":return H=N(u),za(E,n,H,i);case"MultiPoint":for(at=0,Mt=u.length;at<Mt;at++)H=N(u[at]),_.push(za(E,n,H,i));return new Pn(_);case"LineString":case"MultiLineString":return j=Yr(u,a.type==="LineString"?0:1,N),new Rn(j,i);case"Polygon":case"MultiPolygon":return j=Yr(u,a.type==="Polygon"?1:2,N),new Pi(j,i);case"GeometryCollection":for(at=0,Mt=a.geometries.length;at<Mt;at++){var Ft=qr({geometry:a.geometries[at],type:"Feature",properties:n.properties},i);Ft&&_.push(Ft)}return new Pn(_);case"FeatureCollection":for(at=0,Mt=a.features.length;at<Mt;at++){var ee=qr(a.features[at],i);ee&&_.push(ee)}return new Pn(_);default:throw new Error("Invalid GeoJSON object.")}}function za(n,i,a,u){return n?n(i,a):new Xr(a,u&&u.markersInheritOptions&&u)}function oo(n){return new lt(n[1],n[0],n[2])}function Yr(n,i,a){for(var u=[],_=0,E=n.length,N;_<E;_++)N=i?Yr(n[_],i-1,a):(a||oo)(n[_]),u.push(N);return u}function ao(n,i){return n=ft(n),n.alt!==void 0?[v(n.lng,i),v(n.lat,i),v(n.alt,i)]:[v(n.lng,i),v(n.lat,i)]}function jr(n,i,a,u){for(var _=[],E=0,N=n.length;E<N;E++)_.push(i?jr(n[E],ln(n[E])?0:i-1,a,u):ao(n[E],u));return!i&&a&&_.length>0&&_.push(_[0].slice()),_}function Ri(n,i){return n.feature?o({},n.feature,{geometry:i}):Kr(i)}function Kr(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var lo={toGeoJSON:function(n){return Ri(this,{type:"Point",coordinates:ao(this.getLatLng(),n)})}};Xr.include(lo),so.include(lo),Zr.include(lo),Rn.include({toGeoJSON:function(n){var i=!ln(this._latlngs),a=jr(this._latlngs,i?1:0,!1,n);return Ri(this,{type:(i?"Multi":"")+"LineString",coordinates:a})}}),Pi.include({toGeoJSON:function(n){var i=!ln(this._latlngs),a=i&&!ln(this._latlngs[0]),u=jr(this._latlngs,a?2:i?1:0,!0,n);return i||(u=[u]),Ri(this,{type:(a?"Multi":"")+"Polygon",coordinates:u})}}),Ai.include({toMultiPoint:function(n){var i=[];return this.eachLayer(function(a){i.push(a.toGeoJSON(n).geometry.coordinates)}),Ri(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(n){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(i==="MultiPoint")return this.toMultiPoint(n);var a=i==="GeometryCollection",u=[];return this.eachLayer(function(_){if(_.toGeoJSON){var E=_.toGeoJSON(n);if(a)u.push(E.geometry);else{var N=Kr(E);N.type==="FeatureCollection"?u.push.apply(u,N.features):u.push(N)}}}),a?Ri(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function ka(n,i){return new Cn(n,i)}var eu=ka,$r=mn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,i,a){this._url=n,this._bounds=it(i),M(this,a)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Pt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ht(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Ln(this._image),this},bringToBack:function(){return this._map&&an(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=it(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",i=this._image=n?this._url:se("img");if(Pt(i,"leaflet-image-layer"),this._zoomAnimated&&Pt(i,"leaflet-zoom-animated"),this.options.className&&Pt(i,this.options.className),i.onselectstart=m,i.onmousemove=m,i.onload=h(this.fire,this,"load"),i.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=i.src;return}i.src=this._url,i.alt=this.options.alt},_animateZoom:function(n){var i=this._map.getZoomScale(n.zoom),a=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;li(this._image,a,i)},_reset:function(){var n=this._image,i=new et(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),a=i.getSize();Te(n,i.min),n.style.width=a.x+"px",n.style.height=a.y+"px"},_updateOpacity:function(){He(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),nu=function(n,i,a){return new $r(n,i,a)},Ha=$r.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",i=this._image=n?this._url:se("video");if(Pt(i,"leaflet-image-layer"),this._zoomAnimated&&Pt(i,"leaflet-zoom-animated"),this.options.className&&Pt(i,this.options.className),i.onselectstart=m,i.onmousemove=m,i.onloadeddata=h(this.fire,this,"load"),n){for(var a=i.getElementsByTagName("source"),u=[],_=0;_<a.length;_++)u.push(a[_].src);this._url=a.length>0?u:[i.src];return}b(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(i.style,"objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop,i.muted=!!this.options.muted,i.playsInline=!!this.options.playsInline;for(var E=0;E<this._url.length;E++){var N=se("source");N.src=this._url[E],i.appendChild(N)}}});function iu(n,i,a){return new Ha(n,i,a)}var Ga=$r.extend({_initImage:function(){var n=this._image=this._url;Pt(n,"leaflet-image-layer"),this._zoomAnimated&&Pt(n,"leaflet-zoom-animated"),this.options.className&&Pt(n,this.options.className),n.onselectstart=m,n.onmousemove=m}});function ru(n,i,a){return new Ga(n,i,a)}var bn=mn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,i){n&&(n instanceof lt||b(n))?(this._latlng=ft(n),M(this,i)):(M(this,n),this._source=i),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&He(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&He(this._container,1),this.bringToFront(),this.options.interactive&&(Pt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(He(this._container,0),this._removeTimeout=setTimeout(h(Ht,void 0,this._container),200)):Ht(this._container),this.options.interactive&&(he(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=ft(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ln(this._container),this},bringToBack:function(){return this._map&&an(this._container),this},_prepareOpen:function(n){var i=this._source;if(!i._map)return!1;if(i instanceof Pn){i=null;var a=this._source._layers;for(var u in a)if(a[u]._map){i=a[u];break}if(!i)return!1;this._source=i}if(!n)if(i.getCenter)n=i.getCenter();else if(i.getLatLng)n=i.getLatLng();else if(i.getBounds)n=i.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,i=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof i=="string")n.innerHTML=i;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),i=z(this.options.offset),a=this._getAnchor();this._zoomAnimated?Te(this._container,n.add(a)):i=i.add(n).add(a);var u=this._containerBottom=-i.y,_=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=u+"px",this._container.style.left=_+"px"}},_getAnchor:function(){return[0,0]}});ae.include({_initOverlay:function(n,i,a,u){var _=i;return _ instanceof n||(_=new n(u).setContent(i)),a&&_.setLatLng(a),_}}),mn.include({_initOverlay:function(n,i,a,u){var _=a;return _ instanceof n?(M(_,u),_._source=this):(_=i&&!u?i:new n(u,this),_.setContent(a)),_}});var Jr=bn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,bn.prototype.openOn.call(this,n)},onAdd:function(n){bn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Xn||this._source.on("preclick",hi))},onRemove:function(n){bn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Xn||this._source.off("preclick",hi))},getEvents:function(){var n=bn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",i=this._container=se("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),a=this._wrapper=se("div",n+"-content-wrapper",i);if(this._contentNode=se("div",n+"-content",a),_r(i),$s(this._contentNode),jt(i,"contextmenu",hi),this._tipContainer=se("div",n+"-tip-container",i),this._tip=se("div",n+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=se("a",n+"-close-button",i);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',jt(u,"click",function(_){Be(_),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,i=n.style;i.width="",i.whiteSpace="nowrap";var a=n.offsetWidth;a=Math.min(a,this.options.maxWidth),a=Math.max(a,this.options.minWidth),i.width=a+1+"px",i.whiteSpace="",i.height="";var u=n.offsetHeight,_=this.options.maxHeight,E="leaflet-popup-scrolled";_&&u>_?(i.height=_+"px",Pt(n,E)):he(n,E),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var i=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),a=this._getAnchor();Te(this._container,i.add(a))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,i=parseInt(Xt(this._container,"marginBottom"),10)||0,a=this._container.offsetHeight+i,u=this._containerWidth,_=new X(this._containerLeft,-a-this._containerBottom);_._add(ci(this._container));var E=n.layerPointToContainerPoint(_),N=z(this.options.autoPanPadding),H=z(this.options.autoPanPaddingTopLeft||N),j=z(this.options.autoPanPaddingBottomRight||N),at=n.getSize(),Mt=0,Ft=0;E.x+u+j.x>at.x&&(Mt=E.x+u-at.x+j.x),E.x-Mt-H.x<0&&(Mt=E.x-H.x),E.y+a+j.y>at.y&&(Ft=E.y+a-at.y+j.y),E.y-Ft-H.y<0&&(Ft=E.y-H.y),(Mt||Ft)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Mt,Ft]))}},_getAnchor:function(){return z(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),su=function(n,i){return new Jr(n,i)};ae.mergeOptions({closePopupOnClick:!0}),ae.include({openPopup:function(n,i,a){return this._initOverlay(Jr,n,i,a).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),mn.include({bindPopup:function(n,i){return this._popup=this._initOverlay(Jr,this._popup,n,i),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Pn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){ui(n);var i=n.layer||n.target;if(this._popup._source===i&&!(i instanceof Xn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=i,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Qr=bn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){bn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){bn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=bn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",i=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=se("div",i),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var i,a,u=this._map,_=this._container,E=u.latLngToContainerPoint(u.getCenter()),N=u.layerPointToContainerPoint(n),H=this.options.direction,j=_.offsetWidth,at=_.offsetHeight,Mt=z(this.options.offset),Ft=this._getAnchor();H==="top"?(i=j/2,a=at):H==="bottom"?(i=j/2,a=0):H==="center"?(i=j/2,a=at/2):H==="right"?(i=0,a=at/2):H==="left"?(i=j,a=at/2):N.x<E.x?(H="right",i=0,a=at/2):(H="left",i=j+(Mt.x+Ft.x)*2,a=at/2),n=n.subtract(z(i,a,!0)).add(Mt).add(Ft),he(_,"leaflet-tooltip-right"),he(_,"leaflet-tooltip-left"),he(_,"leaflet-tooltip-top"),he(_,"leaflet-tooltip-bottom"),Pt(_,"leaflet-tooltip-"+H),Te(_,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&He(this._container,n)},_animateZoom:function(n){var i=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(i)},_getAnchor:function(){return z(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),ou=function(n,i){return new Qr(n,i)};ae.include({openTooltip:function(n,i,a){return this._initOverlay(Qr,n,i,a).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),mn.include({bindTooltip:function(n,i){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Qr,this._tooltip,n,i),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var i=n?"off":"on",a={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?a.add=this._openTooltip:(a.mouseover=this._openTooltip,a.mouseout=this.closeTooltip,a.click=this._openTooltip,this._map?this._addFocusListeners():a.add=this._addFocusListeners),this._tooltip.options.sticky&&(a.mousemove=this._moveTooltip),this[i](a),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Pn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var i=typeof n.getElement=="function"&&n.getElement();i&&(jt(i,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),jt(i,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var i=typeof n.getElement=="function"&&n.getElement();i&&i.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var i=this;this._map.once("moveend",function(){i._openOnceFlag=!1,i._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var i=n.latlng,a,u;this._tooltip.options.sticky&&n.originalEvent&&(a=this._map.mouseEventToContainerPoint(n.originalEvent),u=this._map.containerPointToLayerPoint(a),i=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(i)}});var Va=Li.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var i=n&&n.tagName==="DIV"?n:document.createElement("div"),a=this.options;if(a.html instanceof Element?(on(i),i.appendChild(a.html)):i.innerHTML=a.html!==!1?a.html:"",a.bgPos){var u=z(a.bgPos);i.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});function au(n){return new Va(n)}Li.Default=xr;var yr=mn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:bt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){M(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Ht(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ln(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(an(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof X?n:new X(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var i=this.getPane().children,a=-n(-1/0,1/0),u=0,_=i.length,E;u<_;u++)E=i[u].style.zIndex,i[u]!==this._container&&E&&(a=n(a,+E));isFinite(a)&&(this.options.zIndex=a+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!bt.ielt9){He(this._container,this.options.opacity);var n=+new Date,i=!1,a=!1;for(var u in this._tiles){var _=this._tiles[u];if(!(!_.current||!_.loaded)){var E=Math.min(1,(n-_.loaded)/200);He(_.el,E),E<1?i=!0:(_.active?a=!0:this._onOpaqueTile(_),_.active=!0)}}a&&!this._noPrune&&this._pruneTiles(),i&&(rt(this._fadeFrame),this._fadeFrame=$(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=se("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,i=this.options.maxZoom;if(n!==void 0){for(var a in this._levels)a=Number(a),this._levels[a].el.children.length||a===n?(this._levels[a].el.style.zIndex=i-Math.abs(n-a),this._onUpdateLevel(a)):(Ht(this._levels[a].el),this._removeTilesAtZoom(a),this._onRemoveLevel(a),delete this._levels[a]);var u=this._levels[n],_=this._map;return u||(u=this._levels[n]={},u.el=se("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=i,u.origin=_.project(_.unproject(_.getPixelOrigin()),n).round(),u.zoom=n,this._setZoomTransform(u,_.getCenter(),_.getZoom()),m(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var n,i,a=this._map.getZoom();if(a>this.options.maxZoom||a<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)i=this._tiles[n],i.retain=i.current;for(n in this._tiles)if(i=this._tiles[n],i.current&&!i.active){var u=i.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var i in this._tiles)this._tiles[i].coords.z===n&&this._removeTile(i)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Ht(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,i,a,u){var _=Math.floor(n/2),E=Math.floor(i/2),N=a-1,H=new X(+_,+E);H.z=+N;var j=this._tileCoordsToKey(H),at=this._tiles[j];return at&&at.active?(at.retain=!0,!0):(at&&at.loaded&&(at.retain=!0),N>u?this._retainParent(_,E,N,u):!1)},_retainChildren:function(n,i,a,u){for(var _=2*n;_<2*n+2;_++)for(var E=2*i;E<2*i+2;E++){var N=new X(_,E);N.z=a+1;var H=this._tileCoordsToKey(N),j=this._tiles[H];if(j&&j.active){j.retain=!0;continue}else j&&j.loaded&&(j.retain=!0);a+1<u&&this._retainChildren(_,E,a+1,u)}},_resetView:function(n){var i=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var i=this.options;return i.minNativeZoom!==void 0&&n<i.minNativeZoom?i.minNativeZoom:i.maxNativeZoom!==void 0&&i.maxNativeZoom<n?i.maxNativeZoom:n},_setView:function(n,i,a,u){var _=Math.round(i);this.options.maxZoom!==void 0&&_>this.options.maxZoom||this.options.minZoom!==void 0&&_<this.options.minZoom?_=void 0:_=this._clampZoom(_);var E=this.options.updateWhenZooming&&_!==this._tileZoom;(!u||E)&&(this._tileZoom=_,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),_!==void 0&&this._update(n),a||this._pruneTiles(),this._noPrune=!!a),this._setZoomTransforms(n,i)},_setZoomTransforms:function(n,i){for(var a in this._levels)this._setZoomTransform(this._levels[a],n,i)},_setZoomTransform:function(n,i,a){var u=this._map.getZoomScale(a,n.zoom),_=n.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(i,a)).round();bt.any3d?li(n.el,_,u):Te(n.el,_)},_resetGrid:function(){var n=this._map,i=n.options.crs,a=this._tileSize=this.getTileSize(),u=this._tileZoom,_=this._map.getPixelWorldBounds(this._tileZoom);_&&(this._globalTileRange=this._pxBoundsToTileRange(_)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,i.wrapLng[0]],u).x/a.x),Math.ceil(n.project([0,i.wrapLng[1]],u).x/a.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([i.wrapLat[0],0],u).y/a.x),Math.ceil(n.project([i.wrapLat[1],0],u).y/a.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var i=this._map,a=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),u=i.getZoomScale(a,this._tileZoom),_=i.project(n,this._tileZoom).floor(),E=i.getSize().divideBy(u*2);return new et(_.subtract(E),_.add(E))},_update:function(n){var i=this._map;if(i){var a=this._clampZoom(i.getZoom());if(n===void 0&&(n=i.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(n),_=this._pxBoundsToTileRange(u),E=_.getCenter(),N=[],H=this.options.keepBuffer,j=new et(_.getBottomLeft().subtract([H,-H]),_.getTopRight().add([H,-H]));if(!(isFinite(_.min.x)&&isFinite(_.min.y)&&isFinite(_.max.x)&&isFinite(_.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var at in this._tiles){var Mt=this._tiles[at].coords;(Mt.z!==this._tileZoom||!j.contains(new X(Mt.x,Mt.y)))&&(this._tiles[at].current=!1)}if(Math.abs(a-this._tileZoom)>1){this._setView(n,a);return}for(var Ft=_.min.y;Ft<=_.max.y;Ft++)for(var ee=_.min.x;ee<=_.max.x;ee++){var Xe=new X(ee,Ft);if(Xe.z=this._tileZoom,!!this._isValidTile(Xe)){var Ce=this._tiles[this._tileCoordsToKey(Xe)];Ce?Ce.current=!0:N.push(Xe)}}if(N.sort(function(Ke,Ii){return Ke.distanceTo(E)-Ii.distanceTo(E)}),N.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var cn=document.createDocumentFragment();for(ee=0;ee<N.length;ee++)this._addTile(N[ee],cn);this._level.el.appendChild(cn)}}}},_isValidTile:function(n){var i=this._map.options.crs;if(!i.infinite){var a=this._globalTileRange;if(!i.wrapLng&&(n.x<a.min.x||n.x>a.max.x)||!i.wrapLat&&(n.y<a.min.y||n.y>a.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(n);return it(this.options.bounds).overlaps(u)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var i=this._map,a=this.getTileSize(),u=n.scaleBy(a),_=u.add(a),E=i.unproject(u,n.z),N=i.unproject(_,n.z);return[E,N]},_tileCoordsToBounds:function(n){var i=this._tileCoordsToNwSe(n),a=new W(i[0],i[1]);return this.options.noWrap||(a=this._map.wrapLatLngBounds(a)),a},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var i=n.split(":"),a=new X(+i[0],+i[1]);return a.z=+i[2],a},_removeTile:function(n){var i=this._tiles[n];i&&(Ht(i.el),delete this._tiles[n],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Pt(n,"leaflet-tile");var i=this.getTileSize();n.style.width=i.x+"px",n.style.height=i.y+"px",n.onselectstart=m,n.onmousemove=m,bt.ielt9&&this.options.opacity<1&&He(n,this.options.opacity)},_addTile:function(n,i){var a=this._getTilePos(n),u=this._tileCoordsToKey(n),_=this.createTile(this._wrapCoords(n),h(this._tileReady,this,n));this._initTile(_),this.createTile.length<2&&$(h(this._tileReady,this,n,null,_)),Te(_,a),this._tiles[u]={el:_,coords:n,current:!0},i.appendChild(_),this.fire("tileloadstart",{tile:_,coords:n})},_tileReady:function(n,i,a){i&&this.fire("tileerror",{error:i,tile:a,coords:n});var u=this._tileCoordsToKey(n);a=this._tiles[u],a&&(a.loaded=+new Date,this._map._fadeAnimated?(He(a.el,0),rt(this._fadeFrame),this._fadeFrame=$(this._updateOpacity,this)):(a.active=!0,this._pruneTiles()),i||(Pt(a.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:a.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),bt.ielt9||!this._map._fadeAnimated?$(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var i=new X(this._wrapX?p(n.x,this._wrapX):n.x,this._wrapY?p(n.y,this._wrapY):n.y);return i.z=n.z,i},_pxBoundsToTileRange:function(n){var i=this.getTileSize();return new et(n.min.unscaleBy(i).floor(),n.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function lu(n){return new yr(n)}var Ci=yr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,i){this._url=n,i=M(this,i),i.detectRetina&&bt.retina&&i.maxZoom>0?(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom=Math.min(i.maxZoom,i.minZoom+1)):(i.zoomOffset++,i.maxZoom=Math.max(i.minZoom,i.maxZoom-1)),i.minZoom=Math.max(0,i.minZoom)):i.zoomReverse?i.minZoom=Math.min(i.maxZoom,i.minZoom):i.maxZoom=Math.max(i.minZoom,i.maxZoom),typeof i.subdomains=="string"&&(i.subdomains=i.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,i){return this._url===n&&i===void 0&&(i=!0),this._url=n,i||this.redraw(),this},createTile:function(n,i){var a=document.createElement("img");return jt(a,"load",h(this._tileOnLoad,this,i,a)),jt(a,"error",h(this._tileOnError,this,i,a)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(a.referrerPolicy=this.options.referrerPolicy),a.alt="",a.src=this.getTileUrl(n),a},getTileUrl:function(n){var i={r:bt.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var a=this._globalTileRange.max.y-n.y;this.options.tms&&(i.y=a),i["-y"]=a}return P(this._url,o(i,this.options))},_tileOnLoad:function(n,i){bt.ielt9?setTimeout(h(n,this,null,i),0):n(null,i)},_tileOnError:function(n,i,a){var u=this.options.errorTileUrl;u&&i.getAttribute("src")!==u&&(i.src=u),n(a,i)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,i=this.options.maxZoom,a=this.options.zoomReverse,u=this.options.zoomOffset;return a&&(n=i-n),n+u},_getSubdomain:function(n){var i=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var n,i;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(i=this._tiles[n].el,i.onload=m,i.onerror=m,!i.complete)){i.src=B;var a=this._tiles[n].coords;Ht(i),delete this._tiles[n],this.fire("tileabort",{tile:i,coords:a})}},_removeTile:function(n){var i=this._tiles[n];if(i)return i.el.setAttribute("src",B),yr.prototype._removeTile.call(this,n)},_tileReady:function(n,i,a){if(!(!this._map||a&&a.getAttribute("src")===B))return yr.prototype._tileReady.call(this,n,i,a)}});function Wa(n,i){return new Ci(n,i)}var Xa=Ci.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,i){this._url=n;var a=o({},this.defaultWmsParams);for(var u in i)u in this.options||(a[u]=i[u]);i=M(this,i);var _=i.detectRetina&&bt.retina?2:1,E=this.getTileSize();a.width=E.x*_,a.height=E.y*_,this.wmsParams=a},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,Ci.prototype.onAdd.call(this,n)},getTileUrl:function(n){var i=this._tileCoordsToNwSe(n),a=this._crs,u=ot(a.project(i[0]),a.project(i[1])),_=u.min,E=u.max,N=(this._wmsVersion>=1.3&&this._crs===Fa?[_.y,_.x,E.y,E.x]:[_.x,_.y,E.x,E.y]).join(","),H=Ci.prototype.getTileUrl.call(this,n);return H+y(this.wmsParams,H,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+N},setParams:function(n,i){return o(this.wmsParams,n),i||this.redraw(),this}});function cu(n,i){return new Xa(n,i)}Ci.WMS=Xa,Wa.wms=cu;var In=mn.extend({options:{padding:.1},initialize:function(n){M(this,n),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Pt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,i){var a=this._map.getZoomScale(i,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),_=this._map.project(this._center,i),E=u.multiplyBy(-a).add(_).subtract(this._map._getNewPixelOrigin(n,i));bt.any3d?li(this._container,E,a):Te(this._container,E)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,i=this._map.getSize(),a=this._map.containerPointToLayerPoint(i.multiplyBy(-n)).round();this._bounds=new et(a,a.add(i.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Za=In.extend({options:{tolerance:0},getEvents:function(){var n=In.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){In.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");jt(n,"mousemove",this._onMouseMove,this),jt(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),jt(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){rt(this._redrawRequest),delete this._ctx,Ht(this._container),ge(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var i in this._layers)n=this._layers[i],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){In.prototype._update.call(this);var n=this._bounds,i=this._container,a=n.getSize(),u=bt.retina?2:1;Te(i,n.min),i.width=u*a.x,i.height=u*a.y,i.style.width=a.x+"px",i.style.height=a.y+"px",bt.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){In.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[d(n)]=n;var i=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var i=n._order,a=i.next,u=i.prev;a?a.prev=u:this._drawLast=u,u?u.next=a:this._drawFirst=a,delete n._order,delete this._layers[d(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var i=n.options.dashArray.split(/[, ]+/),a=[],u,_;for(_=0;_<i.length;_++){if(u=Number(i[_]),isNaN(u))return;a.push(u)}n.options._dashArray=a}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||$(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var i=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new et,this._redrawBounds.extend(n._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(n._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var i=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,i.x,i.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,i=this._redrawBounds;if(this._ctx.save(),i){var a=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,a.x,a.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)n=u.layer,(!i||n._pxBounds&&n._pxBounds.intersects(i))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,i){if(this._drawing){var a,u,_,E,N=n._parts,H=N.length,j=this._ctx;if(H){for(j.beginPath(),a=0;a<H;a++){for(u=0,_=N[a].length;u<_;u++)E=N[a][u],j[u?"lineTo":"moveTo"](E.x,E.y);i&&j.closePath()}this._fillStroke(j,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var i=n._point,a=this._ctx,u=Math.max(Math.round(n._radius),1),_=(Math.max(Math.round(n._radiusY),1)||u)/u;_!==1&&(a.save(),a.scale(1,_)),a.beginPath(),a.arc(i.x,i.y/_,u,0,Math.PI*2,!1),_!==1&&a.restore(),this._fillStroke(a,n)}},_fillStroke:function(n,i){var a=i.options;a.fill&&(n.globalAlpha=a.fillOpacity,n.fillStyle=a.fillColor||a.color,n.fill(a.fillRule||"evenodd")),a.stroke&&a.weight!==0&&(n.setLineDash&&n.setLineDash(i.options&&i.options._dashArray||[]),n.globalAlpha=a.opacity,n.lineWidth=a.weight,n.strokeStyle=a.color,n.lineCap=a.lineCap,n.lineJoin=a.lineJoin,n.stroke())},_onClick:function(n){for(var i=this._map.mouseEventToLayerPoint(n),a,u,_=this._drawFirst;_;_=_.next)a=_.layer,a.options.interactive&&a._containsPoint(i)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(a))&&(u=a);this._fireEvent(u?[u]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var i=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,i)}},_handleMouseOut:function(n){var i=this._hoveredLayer;i&&(he(this._container,"leaflet-interactive"),this._fireEvent([i],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,i){if(!this._mouseHoverThrottled){for(var a,u,_=this._drawFirst;_;_=_.next)a=_.layer,a.options.interactive&&a._containsPoint(i)&&(u=a);u!==this._hoveredLayer&&(this._handleMouseOut(n),u&&(Pt(this._container,"leaflet-interactive"),this._fireEvent([u],n,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,i,a){this._map._fireDOMEvent(i,a||i.type,n)},_bringToFront:function(n){var i=n._order;if(i){var a=i.next,u=i.prev;if(a)a.prev=u;else return;u?u.next=a:a&&(this._drawFirst=a),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(n)}},_bringToBack:function(n){var i=n._order;if(i){var a=i.next,u=i.prev;if(u)u.next=a;else return;a?a.prev=u:u&&(this._drawLast=u),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(n)}}});function qa(n){return bt.canvas?new Za(n):null}var Mr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),hu={_initContainer:function(){this._container=se("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(In.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var i=n._container=Mr("shape");Pt(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",n._path=Mr("path"),i.appendChild(n._path),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){var i=n._container;this._container.appendChild(i),n.options.interactive&&n.addInteractiveTarget(i)},_removePath:function(n){var i=n._container;Ht(i),n.removeInteractiveTarget(i),delete this._layers[d(n)]},_updateStyle:function(n){var i=n._stroke,a=n._fill,u=n.options,_=n._container;_.stroked=!!u.stroke,_.filled=!!u.fill,u.stroke?(i||(i=n._stroke=Mr("stroke")),_.appendChild(i),i.weight=u.weight+"px",i.color=u.color,i.opacity=u.opacity,u.dashArray?i.dashStyle=b(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=u.lineCap.replace("butt","flat"),i.joinstyle=u.lineJoin):i&&(_.removeChild(i),n._stroke=null),u.fill?(a||(a=n._fill=Mr("fill")),_.appendChild(a),a.color=u.fillColor||u.color,a.opacity=u.fillOpacity):a&&(_.removeChild(a),n._fill=null)},_updateCircle:function(n){var i=n._point.round(),a=Math.round(n._radius),u=Math.round(n._radiusY||a);this._setPath(n,n._empty()?"M0 0":"AL "+i.x+","+i.y+" "+a+","+u+" 0,"+65535*360)},_setPath:function(n,i){n._path.v=i},_bringToFront:function(n){Ln(n._container)},_bringToBack:function(n){an(n._container)}},ts=bt.vml?Mr:Gt,Sr=In.extend({_initContainer:function(){this._container=ts("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ts("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ht(this._container),ge(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){In.prototype._update.call(this);var n=this._bounds,i=n.getSize(),a=this._container;(!this._svgSize||!this._svgSize.equals(i))&&(this._svgSize=i,a.setAttribute("width",i.x),a.setAttribute("height",i.y)),Te(a,n.min),a.setAttribute("viewBox",[n.min.x,n.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(n){var i=n._path=ts("path");n.options.className&&Pt(i,n.options.className),n.options.interactive&&Pt(i,"leaflet-interactive"),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Ht(n._path),n.removeInteractiveTarget(n._path),delete this._layers[d(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var i=n._path,a=n.options;i&&(a.stroke?(i.setAttribute("stroke",a.color),i.setAttribute("stroke-opacity",a.opacity),i.setAttribute("stroke-width",a.weight),i.setAttribute("stroke-linecap",a.lineCap),i.setAttribute("stroke-linejoin",a.lineJoin),a.dashArray?i.setAttribute("stroke-dasharray",a.dashArray):i.removeAttribute("stroke-dasharray"),a.dashOffset?i.setAttribute("stroke-dashoffset",a.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),a.fill?(i.setAttribute("fill",a.fillColor||a.color),i.setAttribute("fill-opacity",a.fillOpacity),i.setAttribute("fill-rule",a.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(n,i){this._setPath(n,wt(n._parts,i))},_updateCircle:function(n){var i=n._point,a=Math.max(Math.round(n._radius),1),u=Math.max(Math.round(n._radiusY),1)||a,_="a"+a+","+u+" 0 1,0 ",E=n._empty()?"M0 0":"M"+(i.x-a)+","+i.y+_+a*2+",0 "+_+-a*2+",0 ";this._setPath(n,E)},_setPath:function(n,i){n._path.setAttribute("d",i)},_bringToFront:function(n){Ln(n._path)},_bringToBack:function(n){an(n._path)}});bt.vml&&Sr.include(hu);function Ya(n){return bt.svg||bt.vml?new Sr(n):null}ae.include({getRenderer:function(n){var i=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var i=this._paneRenderers[n];return i===void 0&&(i=this._createRenderer({pane:n}),this._paneRenderers[n]=i),i},_createRenderer:function(n){return this.options.preferCanvas&&qa(n)||Ya(n)}});var ja=Pi.extend({initialize:function(n,i){Pi.prototype.initialize.call(this,this._boundsToLatLngs(n),i)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=it(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function uu(n,i){return new ja(n,i)}Sr.create=ts,Sr.pointsToPath=wt,Cn.geometryToLayer=qr,Cn.coordsToLatLng=oo,Cn.coordsToLatLngs=Yr,Cn.latLngToCoords=ao,Cn.latLngsToCoords=jr,Cn.getFeature=Ri,Cn.asFeature=Kr,ae.mergeOptions({boxZoom:!0});var Ka=Tn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){jt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ge(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ht(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),fr(),Vs(),this._startPoint=this._map.mouseEventToContainerPoint(n),jt(document,{contextmenu:ui,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=se("div","leaflet-zoom-box",this._container),Pt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var i=new et(this._point,this._startPoint),a=i.getSize();Te(this._box,i.min),this._box.style.width=a.x+"px",this._box.style.height=a.y+"px"},_finish:function(){this._moved&&(Ht(this._box),he(this._container,"leaflet-crosshair")),pr(),Ws(),ge(document,{contextmenu:ui,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var i=new W(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ae.addInitHook("addHandler","boxZoom",Ka),ae.mergeOptions({doubleClickZoom:!0});var $a=Tn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var i=this._map,a=i.getZoom(),u=i.options.zoomDelta,_=n.originalEvent.shiftKey?a-u:a+u;i.options.doubleClickZoom==="center"?i.setZoom(_):i.setZoomAround(n.containerPoint,_)}});ae.addInitHook("addHandler","doubleClickZoom",$a),ae.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ja=Tn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Wn(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Pt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){he(this._map._container,"leaflet-grab"),he(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=it(this._map.options.maxBounds);this._offsetLimit=ot(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var i=this._lastTime=+new Date,a=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(a),this._times.push(i),this._prunePositions(i)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,i){return n-(n-i)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;n.x<i.min.x&&(n.x=this._viscousLimit(n.x,i.min.x)),n.y<i.min.y&&(n.y=this._viscousLimit(n.y,i.min.y)),n.x>i.max.x&&(n.x=this._viscousLimit(n.x,i.max.x)),n.y>i.max.y&&(n.y=this._viscousLimit(n.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,i=Math.round(n/2),a=this._initialWorldOffset,u=this._draggable._newPos.x,_=(u-i+a)%n+i-a,E=(u+i+a)%n-i-a,N=Math.abs(_+a)<Math.abs(E+a)?_:E;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=N},_onDragEnd:function(n){var i=this._map,a=i.options,u=!a.inertia||n.noInertia||this._times.length<2;if(i.fire("dragend",n),u)i.fire("moveend");else{this._prunePositions(+new Date);var _=this._lastPos.subtract(this._positions[0]),E=(this._lastTime-this._times[0])/1e3,N=a.easeLinearity,H=_.multiplyBy(N/E),j=H.distanceTo([0,0]),at=Math.min(a.inertiaMaxSpeed,j),Mt=H.multiplyBy(at/j),Ft=at/(a.inertiaDeceleration*N),ee=Mt.multiplyBy(-Ft/2).round();!ee.x&&!ee.y?i.fire("moveend"):(ee=i._limitOffset(ee,i.options.maxBounds),$(function(){i.panBy(ee,{duration:Ft,easeLinearity:N,noMoveStart:!0,animate:!0})}))}}});ae.addInitHook("addHandler","dragging",Ja),ae.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Qa=Tn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),jt(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ge(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,i=document.documentElement,a=n.scrollTop||i.scrollTop,u=n.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(u,a)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var i=this._panKeys={},a=this.keyCodes,u,_;for(u=0,_=a.left.length;u<_;u++)i[a.left[u]]=[-1*n,0];for(u=0,_=a.right.length;u<_;u++)i[a.right[u]]=[n,0];for(u=0,_=a.down.length;u<_;u++)i[a.down[u]]=[0,n];for(u=0,_=a.up.length;u<_;u++)i[a.up[u]]=[0,-1*n]},_setZoomDelta:function(n){var i=this._zoomKeys={},a=this.keyCodes,u,_;for(u=0,_=a.zoomIn.length;u<_;u++)i[a.zoomIn[u]]=n;for(u=0,_=a.zoomOut.length;u<_;u++)i[a.zoomOut[u]]=-n},_addHooks:function(){jt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ge(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var i=n.keyCode,a=this._map,u;if(i in this._panKeys){if(!a._panAnim||!a._panAnim._inProgress)if(u=this._panKeys[i],n.shiftKey&&(u=z(u).multiplyBy(3)),a.options.maxBounds&&(u=a._limitOffset(z(u),a.options.maxBounds)),a.options.worldCopyJump){var _=a.wrapLatLng(a.unproject(a.project(a.getCenter()).add(u)));a.panTo(_)}else a.panBy(u)}else if(i in this._zoomKeys)a.setZoom(a.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[i]);else if(i===27&&a._popup&&a._popup.options.closeOnEscapeKey)a.closePopup();else return;ui(n)}}});ae.addInitHook("addHandler","keyboard",Qa),ae.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var tl=Tn.extend({addHooks:function(){jt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ge(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var i=Ta(n),a=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var u=Math.max(a-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),u),ui(n)},_performZoom:function(){var n=this._map,i=n.getZoom(),a=this._map.options.zoomSnap||0;n._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),_=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,E=a?Math.ceil(_/a)*a:_,N=n._limitZoom(i+(this._delta>0?E:-E))-i;this._delta=0,this._startTime=null,N&&(n.options.scrollWheelZoom==="center"?n.setZoom(i+N):n.setZoomAround(this._lastMousePos,i+N))}});ae.addInitHook("addHandler","scrollWheelZoom",tl);var du=600;ae.mergeOptions({tapHold:bt.touchNative&&bt.safari&&bt.mobile,tapTolerance:15});var el=Tn.extend({addHooks:function(){jt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ge(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var i=n.touches[0];this._startPos=this._newPos=new X(i.clientX,i.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(jt(document,"touchend",Be),jt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",i))},this),du),jt(document,"touchend touchcancel contextmenu",this._cancel,this),jt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){ge(document,"touchend",Be),ge(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),ge(document,"touchend touchcancel contextmenu",this._cancel,this),ge(document,"touchmove",this._onMove,this)},_onMove:function(n){var i=n.touches[0];this._newPos=new X(i.clientX,i.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,i){var a=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY});a._simulated=!0,i.target.dispatchEvent(a)}});ae.addInitHook("addHandler","tapHold",el),ae.mergeOptions({touchZoom:bt.touch,bounceAtZoomLimits:!0});var nl=Tn.extend({addHooks:function(){Pt(this._map._container,"leaflet-touch-zoom"),jt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){he(this._map._container,"leaflet-touch-zoom"),ge(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var i=this._map;if(!(!n.touches||n.touches.length!==2||i._animatingZoom||this._zooming)){var a=i.mouseEventToContainerPoint(n.touches[0]),u=i.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),i.options.touchZoom!=="center"&&(this._pinchStartLatLng=i.containerPointToLatLng(a.add(u)._divideBy(2))),this._startDist=a.distanceTo(u),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),jt(document,"touchmove",this._onTouchMove,this),jt(document,"touchend touchcancel",this._onTouchEnd,this),Be(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var i=this._map,a=i.mouseEventToContainerPoint(n.touches[0]),u=i.mouseEventToContainerPoint(n.touches[1]),_=a.distanceTo(u)/this._startDist;if(this._zoom=i.getScaleZoom(_,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&_<1||this._zoom>i.getMaxZoom()&&_>1)&&(this._zoom=i._limitZoom(this._zoom)),i.options.touchZoom==="center"){if(this._center=this._startLatLng,_===1)return}else{var E=a._add(u)._divideBy(2)._subtract(this._centerPoint);if(_===1&&E.x===0&&E.y===0)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(E),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),rt(this._animRequest);var N=h(i._move,i,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=$(N,this,!0),Be(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,rt(this._animRequest),ge(document,"touchmove",this._onTouchMove,this),ge(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ae.addInitHook("addHandler","touchZoom",nl),ae.BoxZoom=Ka,ae.DoubleClickZoom=$a,ae.Drag=Ja,ae.Keyboard=Qa,ae.ScrollWheelZoom=tl,ae.TapHold=el,ae.TouchZoom=nl,e.Bounds=et,e.Browser=bt,e.CRS=St,e.Canvas=Za,e.Circle=so,e.CircleMarker=Zr,e.Class=F,e.Control=pn,e.DivIcon=Va,e.DivOverlay=bn,e.DomEvent=Rh,e.DomUtil=Lh,e.Draggable=Wn,e.Evented=st,e.FeatureGroup=Pn,e.GeoJSON=Cn,e.GridLayer=yr,e.Handler=Tn,e.Icon=Li,e.ImageOverlay=$r,e.LatLng=lt,e.LatLngBounds=W,e.Layer=mn,e.LayerGroup=Ai,e.LineUtil=Vh,e.Map=ae,e.Marker=Xr,e.Mixin=Fh,e.Path=Xn,e.Point=X,e.PolyUtil=Bh,e.Polygon=Pi,e.Polyline=Rn,e.Popup=Jr,e.PosAnimation=ba,e.Projection=Wh,e.Rectangle=ja,e.Renderer=In,e.SVG=Sr,e.SVGOverlay=Ga,e.TileLayer=Ci,e.Tooltip=Qr,e.Transformation=re,e.Util=pt,e.VideoOverlay=Ha,e.bind=h,e.bounds=ot,e.canvas=qa,e.circle=Jh,e.circleMarker=$h,e.control=gr,e.divIcon=au,e.extend=o,e.featureGroup=Yh,e.geoJSON=ka,e.geoJson=eu,e.gridLayer=lu,e.icon=jh,e.imageOverlay=nu,e.latLng=ft,e.latLngBounds=it,e.layerGroup=qh,e.map=Ch,e.marker=Kh,e.point=z,e.polygon=tu,e.polyline=Qh,e.popup=su,e.rectangle=uu,e.setOptions=M,e.stamp=d,e.svg=Ya,e.svgOverlay=ru,e.tileLayer=Wa,e.tooltip=ou,e.transformation=Z,e.version=s,e.videoOverlay=iu;var fu=window.L;e.noConflict=function(){return window.L=fu,this},window.L=e})})(ra,ra.exports);var yv=ra.exports;const Ki=xv(yv),Mv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",Sv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",Ev="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";Ki.Icon.Default.mergeOptions({iconRetinaUrl:Mv,iconUrl:Sv,shadowUrl:Ev});function Tv(){var r;return(r=window.google)!=null&&r.maps?Promise.resolve(window.google):Promise.reject(new Error("no key"))}function bv({onPinGlobe:r,onAddRoute:t,onAddDestination:e}){const s=document.getElementById("mapModal"),o=document.getElementById("mapCanvas"),l=document.getElementById("streetView"),h=document.getElementById("mapTitle"),c=document.getElementById("placeResults"),d=document.getElementById("placeSearchInput");let f=null,p="satellite",m=null,v=null,x=null,S=null,M=!1;document.getElementById("closeMap").onclick=()=>{s.classList.remove("open")},document.querySelectorAll("#mapModal .viewBtn").forEach(I=>{I.onclick=()=>b(I.dataset.mode)}),document.getElementById("placeSearchBtn").onclick=()=>D(d.value),d.addEventListener("keydown",I=>{I.key==="Enter"&&D(d.value)}),document.getElementById("nearbyBtn").onclick=()=>D("");async function y(I,U={}){f=I,h.textContent=`${I.name} — ${I.country}`,s.classList.add("open"),c.innerHTML='<div class="loading">Tip: search a place or hit “Nearby famous places”.</div>',d.value="",U.nearby&&D("");try{await Tv(),M=!0,document.getElementById("svBtnWrap").style.display="",await g(I)}catch{M=!1,document.getElementById("svBtnWrap").style.display="none",P(I)}b("satellite")}async function g(I){const U=window.google,nt={lat:I.lat,lng:I.lng};m=new U.maps.Map(o,{center:nt,zoom:12,mapTypeId:"satellite",streetViewControl:!1}),new U.maps.Marker({position:nt,map:m,title:I.name}),v=new U.maps.StreetViewPanorama(l,{position:nt,pov:{heading:34,pitch:8},zoom:1})}function P(I){x&&(x.remove(),x=null),x=Ki.map(o,{zoomControl:!0}).setView([I.lat,I.lng],11);const U=Ki.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap"}),nt=Ki.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles © Esri"});S={osm:U,sat:nt},nt.addTo(x),Ki.marker([I.lat,I.lng]).addTo(x).bindPopup(I.name).openPopup(),setTimeout(()=>x.invalidateSize(),60)}function b(I){p=I,document.querySelectorAll("#mapModal .viewBtn").forEach(nt=>nt.classList.toggle("active",nt.dataset.mode===I));const U=I==="street";l.style.display=U?"block":"none",o.style.display=U?"none":"block",M?(I==="map"&&m.setMapTypeId("roadmap"),I==="satellite"&&m.setMapTypeId("satellite"),I==="street"&&v&&v.setVisible(!0)):(I==="map"&&(S.sat.remove(),S.osm.addTo(x)),I==="satellite"&&(S.osm.remove(),S.sat.addTo(x)),setTimeout(()=>x.invalidateSize(),60))}async function D(I){if(f){c.innerHTML='<div class="loading">Searching…</div>';try{const U=await Hn.places(f.lat,f.lng,I.trim());if(!U.results.length){c.innerHTML='<div class="loading">No places found.</div>';return}c.innerHTML=U.results.map((nt,w)=>`
        <div class="placeCard" data-i="${w}">
          <div class="pcMain">
            <div class="pcName">${nt.name}</div>
            <div class="pcMeta">${nt.category||"place"}${nt.rating?" · ★ "+nt.rating:""} · ${U.source}</div>
          </div>
          <div class="pcBtns">
            <button data-act="focus" data-i="${w}" title="Show on map">Map</button>
            <button data-act="pin" data-i="${w}" title="Pin on globe">Pin</button>
            <button data-act="route" data-i="${w}" title="Add to route">Route</button>
            <button data-act="dest" data-i="${w}" title="Add as destination">Add</button>
          </div>
        </div>`).join(""),c.querySelectorAll("button").forEach(nt=>{nt.onclick=()=>{const w=U.results[+nt.dataset.i],C=nt.dataset.act;C==="focus"&&B(w),C==="pin"&&r(w),C==="route"&&t({id:"place:"+w.name,name:w.name,lat:w.lat,lng:w.lng}),C==="dest"&&e(w)}})}catch(U){c.innerHTML=`<div class="loading err">Search failed: ${U.message}</div>`}}}function B(I){M&&m?(m.panTo({lat:I.lat,lng:I.lng}),m.setZoom(15),new window.google.maps.Marker({position:{lat:I.lat,lng:I.lng},map:m,title:I.name}),p==="street"&&v&&v.setPosition({lat:I.lat,lng:I.lng})):x&&(x.setView([I.lat,I.lng],15),Ki.marker([I.lat,I.lng]).addTo(x).bindPopup(I.name).openPopup())}return{open:y}}function wv({globe:r}){const t=document.getElementById("routePanel"),e=document.getElementById("routeStops"),s=document.getElementById("routeSummary"),o=document.getElementById("routeBadge");let l=[],h=!0,c=!1;document.getElementById("routeToggle").onclick=()=>t.classList.toggle("open"),document.getElementById("closeRoute").onclick=()=>t.classList.remove("open"),document.getElementById("optFromNYC").onchange=v=>{h=v.target.checked,m()},document.getElementById("optOptimize").onchange=v=>{c=v.target.checked,m()},document.getElementById("clearRoute").onclick=()=>{l=[],m()};function d(v){l.some(x=>x.id===v.id)||(l.push({id:v.id,name:v.name,lat:v.lat,lng:v.lng}),t.classList.add("open"),m())}function f(v){l=l.filter(x=>x.id!==v),m()}function p(){return[...h?[{name:ho.name,lat:ho.lat,lng:ho.lng}]:[],...l.map(x=>({name:x.name,lat:x.lat,lng:x.lng}))]}async function m(){if(o.textContent=l.length,l.length===0){e.innerHTML='<div class="emptyState">No stops yet. Open a destination and hit “Add to route”, or add places from the map.</div>',s.innerHTML="",r.setRoute(null);return}const v=p();if(r.setRoute(v),e.innerHTML=l.map((x,S)=>`
      <div class="routeStop">
        <span class="rsNum">${S+1}</span>
        <span class="rsName">${x.name}</span>
        <button class="rsRemove" data-id="${x.id}">×</button>
      </div>`).join(""),e.querySelectorAll(".rsRemove").forEach(x=>x.onclick=()=>f(x.dataset.id)),v.length<2){s.innerHTML='<div class="hintSmall">Add one more stop to draw a route.</div>';return}try{const x=await Hn.planRoute(v,c,!1);c&&r.setRoute(x.stops),s.innerHTML=`
        <div class="summaryRow"><span>Stops</span><span>${x.stops.length}</span></div>
        <div class="summaryRow"><span>Total distance</span><span>${Math.round(x.total_distance_km).toLocaleString()} km</span></div>
        <div class="summaryRow total"><span>Flight time (approx)</span><span>${x.total_flight_hours} h</span></div>`}catch(x){s.innerHTML=`<div class="hintSmall err">Route calc failed: ${x.message}</div>`}}return m(),{addStop:d,getStops:()=>l.slice()}}function Av(r,t,e){const s=Math.max(1,Math.min(60,Math.round(e)||t)),o=t>0?r/t:0;return{days:s,budget:Math.round(o*s)}}function Lv(r,t){const e=Math.max(1,t||1);return r.reduce((s,o)=>s+o.budget,0)*e}function Pv(r){return r.reduce((t,e)=>t+e.days,0)}function Rv(r,t){const e=Math.max(1,t||1),s={};return r.forEach((o,l)=>{const h=o.year;(s[h]||(s[h]={year:h,items:[],subtotal:0})).items.push({...o,_idx:l}),s[h].subtotal+=o.budget*e}),Object.values(s).sort((o,l)=>o.year-l.year)}const Eh="wa_bucket";function Cv(){try{return JSON.parse(localStorage.getItem(Eh))||[]}catch{return[]}}function Iv(r){localStorage.setItem(Eh,JSON.stringify(r))}function Dv(){const r=document.getElementById("bucketDrawer"),t=document.getElementById("yearsCol"),e=document.getElementById("summaryCol"),s=document.getElementById("statCount"),o=document.getElementById("bucketBadge");let l=Cv(),h=1;document.getElementById("bucketToggle").onclick=()=>r.classList.add("open"),document.getElementById("closeDrawer").onclick=()=>r.classList.remove("open");function c(){Iv(l)}function d(S,M,y,g=S.days,P="Guest"){l.push({destId:S.id,name:S.name,country:S.country,year:M,budget:y,days:g,addedBy:P}),c(),x()}function f(S){l.splice(S,1),c(),x()}function p(S){return l.filter(M=>M.destId===S).map(M=>M.year)}function m(){const S=new Map;return l.forEach(M=>{S.has(M.destId)||S.set(M.destId,{destId:M.destId,name:M.name})}),[...S.values()]}function v(S,M){const y=l[S];if(!y)return;const g=Av(y.budget,y.days,M);y.days=g.days,y.budget=g.budget,c(),x()}function x(){if(s.textContent=l.length,o.textContent=l.length,l.length===0){t.innerHTML='<div class="emptyState">Your atlas is empty.<br>Add a destination or click a pin to plan a trip.</div>',e.innerHTML='<h4>Budget Summary</h4><div class="summaryRow total"><span>Grand total</span><span>$0</span></div>';return}const S=Rv(l,h);t.innerHTML=S.map(({year:M,items:y,subtotal:g})=>`
      <div class="yearGroup">
        <div class="yearTitle"><span>${M}</span><span>$${g.toLocaleString()}</span></div>
        ${y.map(P=>`<div class="bucketCard">
          <div><div class="bcName">${P.name}</div>
          <div class="bcMeta">${P.country} ·
            <input type="number" class="bcDaysInput" data-idx="${P._idx}" value="${P.days}" min="1" max="60"/> days ·
            $${(P.budget*h).toLocaleString()}</div>
          <div class="bcAddedBy">added by ${P.addedBy||"Guest"}</div></div>
          <button class="bcRemove" data-idx="${P._idx}">×</button></div>`).join("")}
      </div>`).join(""),t.querySelectorAll(".bcRemove").forEach(M=>M.onclick=()=>f(+M.dataset.idx)),t.querySelectorAll(".bcDaysInput").forEach(M=>{M.onclick=y=>y.stopPropagation(),M.onchange=()=>v(+M.dataset.idx,M.value)}),e.innerHTML=`<h4>Budget Summary</h4>
      <div class="summaryRow"><span>Destinations added</span><span>${l.length}</span></div>
      <div class="summaryRow"><span>Total travel days</span><span>${Pv(l)}</span></div>
      <div class="summaryRow"><span>Years spanned</span><span>${S.length}</span></div>
      <div class="summaryRow total"><span>Grand total</span><span>$${Lv(l,h).toLocaleString()}</span></div>
      <div class="peopleInput"><label>People traveling</label>
        <input type="number" id="peopleInput" value="${h}" min="1"></div>`,document.getElementById("peopleInput").onchange=M=>{h=Math.max(1,parseInt(M.target.value,10)||1),x()}}return x(),{add:d,yearsFor:p,listDestinations:m}}function Uv({onAdd:r}){const t=document.getElementById("addDestModal"),e=document.getElementById("addSearchInput"),s=document.getElementById("addResults");document.getElementById("addDestToggle").onclick=o,document.getElementById("closeAddDest").onclick=()=>t.classList.remove("open"),document.getElementById("addSearchBtn").onclick=()=>l(e.value),e.addEventListener("keydown",h=>{h.key==="Enter"&&l(e.value)});function o(){t.classList.add("open"),s.innerHTML='<div class="loading">Type a city, landmark, or place (e.g. “Kyoto”, “Machu Picchu”) and hit Search.</div>',e.value="",setTimeout(()=>e.focus(),50)}async function l(h){if(h=h.trim(),!!h){s.innerHTML='<div class="loading">Searching worldwide…</div>';try{const c=await Hn.geocode(h);if(!c.results.length){s.innerHTML='<div class="loading">No matches. Try a more specific name.</div>';return}s.innerHTML=c.results.map((d,f)=>`
        <div class="placeCard">
          <div class="pcMain">
            <div class="pcName">${d.name}</div>
            <div class="pcMeta">${d.country||d.address||""} · ${d.lat.toFixed(2)}, ${d.lng.toFixed(2)} · ${c.source}</div>
          </div>
          <button class="addOneBtn" data-i="${f}">Add</button>
        </div>`).join(""),s.querySelectorAll(".addOneBtn").forEach(d=>{d.onclick=async()=>{d.disabled=!0,d.textContent="…";try{await r(c.results[+d.dataset.i]),d.textContent="Added"}catch{d.disabled=!1,d.textContent="Retry"}}})}catch(c){s.innerHTML=`<div class="loading err">Search failed: ${c.message}. Is the backend running?</div>`}}}return{open:o}}function Nv({getBucketDestinations:r}){const t=document.getElementById("negotiationModal"),e=document.getElementById("negotiationBody");document.getElementById("negotiationToggle").onclick=()=>{t.classList.add("open"),s()},document.getElementById("closeNegotiation").onclick=()=>t.classList.remove("open");function s(){return o()}function o(){e.innerHTML=`
      <div class="negoIntro">Group trip planning runs a real multi-agent backend
        (FastAPI + LangGraph + LangChain + GraphRAG) with real accounts — that
        needs a live Python server + database, which this static demo
        (GitHub Pages) doesn't run.</div>
      <div class="negoCard">
        <h4>Run it locally to try this feature</h4>
        <div class="hintSmall">
          <code>docker compose up --build</code> — then open
          <b>http://localhost:8080</b> and click <b>Group Plan</b> again.
        </div>
      </div>`}return{open:()=>{t.classList.add("open"),s()}}}let zn=[];const Ov=r=>zn.find(t=>t.id===r),ii=dv(document.getElementById("globeCanvas"),{onSelect:r=>xa(r)}),Ns=Dv(),Th=wv({globe:ii}),zc=bv({onPinGlobe:r=>ii.addCustomPin(r.lat,r.lng,"place:"+r.name),onAddRoute:r=>Th.addStop(r),onAddDestination:r=>Ah(r)}),Fv=gv({onAddBucket:(r,t,e,s,o)=>Ns.add(r,t,e,s,o),onAddRoute:r=>Th.addStop({id:r.id,name:r.name,lat:r.lat,lng:r.lng}),onOpenMap:r=>zc.open(r),onSearchNearby:r=>zc.open(r,{nearby:!0}),onRemoveDestination:r=>Bv(r),getBucketYears:r=>Ns.yearsFor(r)});Uv({onAdd:r=>Ah(r)});Nv({getBucketDestinations:()=>Ns.listDestinations()});const bh=document.getElementById("navListItems");function wh(r,t=document.querySelectorAll(".navItem").length){const e=document.createElement("div");e.className="navItem",e.dataset.id=r.id,e.innerHTML=`<span class="dot"></span>${r.name}<span class="rankTag">${r.custom?"★":String(t+1).padStart(2,"0")}</span>`,e.onclick=()=>xa(r.id),bh.appendChild(e)}function xa(r){const t=Ov(r);t&&(ii.setSelected(r),ii.focusOn(t.lat,t.lng),document.querySelectorAll(".navItem").forEach(e=>e.classList.toggle("active",e.dataset.id===r)),Fv.open(t))}async function Ah(r){var o;const t={name:r.name,country:r.country||(r.address?r.address.split(",").slice(-1)[0].trim():""),lat:r.lat,lng:r.lng},e=await Hn.addToAtlas(t);zn.push(e),wh(e),ii.removePin("place:"+r.name),ii.addDestination(e),document.getElementById("addDestModal").classList.remove("open");const s=new Date().getFullYear()+1;return Ns.add(e,s,e.budgetLow*e.days,e.days,((o=kc())==null?void 0:o.name)||"Guest"),xa(e.id),e}async function Bv(r){var t;try{await Hn.removeFromAtlas(r.id)}catch{}zn=zn.filter(e=>e.id!==r.id),ii.removePin(r.id),(t=document.querySelector(`.navItem[data-id="${r.id}"]`))==null||t.remove()}async function zv(){try{zn=await Hn.atlas()}catch(r){console.error("Failed to load your atlas:",r),zn=[]}bh.innerHTML="",ii.addDestinations(zn),zn.forEach((r,t)=>wh(r,t)),document.getElementById("statCount").textContent=zn.length}document.getElementById("authGate").classList.add("hidden"),zv();
