(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="170",fo={ROTATE:0,DOLLY:1,PAN:2},ao={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jg=0,od=1,Qg=2,Sm=1,bm=2,or=3,yr=0,On=1,Ri=2,Xr=0,po=1,Bu=2,ad=3,cd=4,e0=5,_s=100,t0=101,n0=102,i0=103,r0=104,s0=200,o0=201,a0=202,c0=203,ku=204,zu=205,l0=206,u0=207,h0=208,f0=209,d0=210,p0=211,m0=212,_0=213,g0=214,Hu=0,Vu=1,Gu=2,Ao=3,Wu=4,Xu=5,qu=6,Yu=7,Tm=0,x0=1,v0=2,qr=0,y0=1,M0=2,S0=3,rf=4,b0=5,T0=6,E0=7,ld="attached",A0="detached",Em=300,wo=301,Ro=302,ju=303,$u=304,bl=306,ws=1e3,Fr=1001,rl=1002,Fn=1003,Am=1004,ca=1005,ti=1006,zc=1007,dr=1008,Mr=1009,wm=1010,Rm=1011,Ia=1012,sf=1013,Rs=1014,Li=1015,qa=1016,of=1017,af=1018,Co=1020,Cm=35902,Pm=1021,Lm=1022,pi=1023,Dm=1024,Im=1025,mo=1026,Po=1027,cf=1028,lf=1029,Nm=1030,uf=1031,hf=1033,Hc=33776,Vc=33777,Gc=33778,Wc=33779,Ku=35840,Zu=35841,Ju=35842,Qu=35843,eh=36196,th=37492,nh=37496,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,ch=37813,lh=37814,uh=37815,hh=37816,fh=37817,dh=37818,ph=37819,mh=37820,_h=37821,Xc=36492,gh=36494,xh=36495,Um=36283,vh=36284,yh=36285,Mh=36286,Na=2300,Ua=2301,Ul=2302,ud=2400,hd=2401,fd=2402,w0=2500,R0=0,Om=1,Sh=2,C0=3200,P0=3201,Fm=0,L0=1,ur="",Wt="srgb",bn="srgb-linear",Tl="linear",yt="srgb",ks=7680,dd=519,D0=512,I0=513,N0=514,Bm=515,U0=516,O0=517,F0=518,B0=519,bh=35044,pd="300 es",pr=2e3,sl=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let md=1234567;const _o=Math.PI/180,Lo=180/Math.PI;function Di(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function un(r,e,t){return Math.max(e,Math.min(t,r))}function ff(r,e){return(r%e+e)%e}function k0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function z0(r,e,t){return r!==e?(t-r)/(e-r):0}function xa(r,e,t){return(1-t)*r+t*e}function H0(r,e,t,n){return xa(r,e,1-Math.exp(-t*n))}function V0(r,e=1){return e-Math.abs(ff(r,e*2)-e)}function G0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function W0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function X0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function q0(r,e){return r+Math.random()*(e-r)}function Y0(r){return r*(.5-Math.random())}function j0(r){r!==void 0&&(md=r);let e=md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $0(r){return r*_o}function K0(r){return r*Lo}function Z0(r){return(r&r-1)===0&&r!==0}function J0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Q0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ex(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*_,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*_,a*l);break;case"ZYZ":r.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ii={DEG2RAD:_o,RAD2DEG:Lo,generateUUID:Di,clamp:un,euclideanModulo:ff,mapLinear:k0,inverseLerp:z0,lerp:xa,damp:H0,pingpong:V0,smoothstep:G0,smootherstep:W0,randInt:X0,randFloat:q0,randFloatSpread:Y0,seededRandom:j0,degToRad:$0,radToDeg:K0,isPowerOfTwo:Z0,ceilPowerOfTwo:J0,floorPowerOfTwo:Q0,setQuaternionFromProperEuler:ex,normalize:xt,denormalize:Ci};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,s,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],R=i[2],A=i[5],M=i[8];return s[0]=o*g+a*v+c*R,s[3]=o*m+a*y+c*A,s[6]=o*p+a*x+c*M,s[1]=l*g+u*v+h*R,s[4]=l*m+u*y+h*A,s[7]=l*p+u*x+h*M,s[2]=f*g+d*v+_*R,s[5]=f*m+d*y+_*A,s[8]=f*p+d*x+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*c)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new Je;function km(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tx(){const r=Oa("canvas");return r.style.display="block",r}const _d={};function la(r){r in _d||(_d[r]=!0,console.warn(r))}function nx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ix(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?Tl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function xr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function go(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const gd=[.64,.33,.3,.6,.15,.06],xd=[.2126,.7152,.0722],vd=[.3127,.329],yd=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Md=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[bn]:{primaries:gd,whitePoint:vd,transfer:Tl,toXYZ:yd,fromXYZ:Md,luminanceCoefficients:xd,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:gd,whitePoint:vd,transfer:yt,toXYZ:yd,fromXYZ:Md,luminanceCoefficients:xd,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});let zs;class sx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=Oa("canvas")),zs.width=e.width,zs.height=e.height;const n=zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ox=0;class zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Fl(i[o].image)):s.push(Fl(i[o]))}else s=Fl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ax=0;class cn extends Us{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Fr,i=Fr,s=ti,o=dr,a=pi,c=Mr,l=cn.DEFAULT_ANISOTROPY,u=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Di(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Em;cn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(d+1)/2,R=(p+1)/2,A=(u+f)/4,M=(h+g)/4,w=(_+m)/4;return y>x&&y>R?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=M/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=w/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=M/s,i=w/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cx extends Us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends cx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hm extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lx extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==f||l!==d||u!==_){let m=1-a;const p=c*f+l*d+u*_+h*g,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,p*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*v;if(c=c*m+f*x,l=l*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-a*d,e[t+2]=l*_+u*d+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new I,Sd=new Yi;class yi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$a.copy(n.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Ka.subVectors(this.max,Ko),Hs.subVectors(e.a,Ko),Vs.subVectors(e.b,Ko),Gs.subVectors(e.c,Ko),Rr.subVectors(Vs,Hs),Cr.subVectors(Gs,Vs),ns.subVectors(Hs,Gs);let t=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-ns.z,ns.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,ns.z,0,-ns.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-ns.y,ns.x,0];return!kl(t,Hs,Vs,Gs,Ka)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,Hs,Vs,Gs,Ka))?!1:(Za.crossVectors(Rr,Cr),t=[Za.x,Za.y,Za.z],kl(t,Hs,Vs,Gs,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const er=[new I,new I,new I,new I,new I,new I,new I,new I],Si=new I,$a=new yi,Hs=new I,Vs=new I,Gs=new I,Rr=new I,Cr=new I,ns=new I,Ko=new I,Ka=new I,Za=new I,is=new I;function kl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){is.fromArray(r,s);const a=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),c=e.dot(is),l=t.dot(is),u=n.dot(is);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ux=new yi,Zo=new I,zl=new I;class Ki{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ux.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const t=Zo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(zl)),this.expandByPoint(Zo.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tr=new I,Hl=new I,Ja=new I,Pr=new I,Vl=new I,Qa=new I,Gl=new I;class Vo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hl.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Hl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ja),a=Pr.dot(this.direction),c=-Pr.dot(Ja),l=Pr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Hl).addScaledVector(Ja,f),d}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const n=tr.dot(this.direction),i=tr.dot(tr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,n,i,s){Vl.subVectors(t,e),Qa.subVectors(n,e),Gl.crossVectors(Vl,Qa);let o=this.direction.dot(Gl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pr.subVectors(this.origin,e);const c=a*this.direction.dot(Qa.crossVectors(Pr,Qa));if(c<0)return null;const l=a*this.direction.dot(Vl.cross(Pr));if(l<0||c+l>o)return null;const u=-a*Pr.dot(Gl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,_,g,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,_,g,m)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ws.setFromMatrixColumn(e,0).length(),s=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,g=l*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,g=l*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hx,e,fx)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Lr.crossVectors(n,jn),Lr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Lr.crossVectors(n,jn)),Lr.normalize(),ec.crossVectors(jn,Lr),i[0]=Lr.x,i[4]=ec.x,i[8]=jn.x,i[1]=Lr.y,i[5]=ec.y,i[9]=jn.y,i[2]=Lr.z,i[6]=ec.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],R=n[15],A=i[0],M=i[4],w=i[8],S=i[12],b=i[1],P=i[5],N=i[9],B=i[13],W=i[2],X=i[6],q=i[10],Y=i[14],V=i[3],te=i[7],L=i[11],ue=i[15];return s[0]=o*A+a*b+c*W+l*V,s[4]=o*M+a*P+c*X+l*te,s[8]=o*w+a*N+c*q+l*L,s[12]=o*S+a*B+c*Y+l*ue,s[1]=u*A+h*b+f*W+d*V,s[5]=u*M+h*P+f*X+d*te,s[9]=u*w+h*N+f*q+d*L,s[13]=u*S+h*B+f*Y+d*ue,s[2]=_*A+g*b+m*W+p*V,s[6]=_*M+g*P+m*X+p*te,s[10]=_*w+g*N+m*q+p*L,s[14]=_*S+g*B+m*Y+p*ue,s[3]=v*A+y*b+x*W+R*V,s[7]=v*M+y*P+x*X+R*te,s[11]=v*w+y*N+x*q+R*L,s[15]=v*S+y*B+x*Y+R*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*d-n*c*d)+g*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=h*m*l-g*f*l+g*c*d-a*m*d-h*c*p+a*f*p,y=_*f*l-u*m*l-_*c*d+o*m*d+u*c*p-o*f*p,x=u*g*l-_*h*l+_*a*d-o*g*d-u*a*p+o*h*p,R=_*h*c-u*g*c-_*a*f+o*g*f+u*a*m-o*h*m,A=t*v+n*y+i*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=v*M,e[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*M,e[2]=(a*m*s-g*c*s+g*i*l-n*m*l-a*i*p+n*c*p)*M,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*M,e[4]=y*M,e[5]=(u*m*s-_*f*s+_*i*d-t*m*d-u*i*p+t*f*p)*M,e[6]=(_*c*s-o*m*s-_*i*l+t*m*l+o*i*p-t*c*p)*M,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*M,e[8]=x*M,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*M,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*p+t*a*p)*M,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*M,e[12]=R*M,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*M,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*M,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,v=c*l,y=c*u,x=c*h,R=n.x,A=n.y,M=n.z;return i[0]=(1-(g+p))*R,i[1]=(d+x)*R,i[2]=(_-y)*R,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(_+y)*M,i[9]=(m-v)*M,i[10]=(1-(f+g))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ws.set(i[0],i[1],i[2]).length();const o=Ws.set(i[4],i[5],i[6]).length(),a=Ws.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],bi.copy(this);const l=1/s,u=1/o,h=1/a;return bi.elements[0]*=l,bi.elements[1]*=l,bi.elements[2]*=l,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=h,bi.elements[9]*=h,bi.elements[10]*=h,t.setFromRotationMatrix(bi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=pr){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===pr)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===sl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=pr){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*l,d=(n+i)*u;let _,g;if(a===pr)_=(o+s)*h,g=-2*h;else if(a===sl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ws=new I,bi=new $e,hx=new I(0,0,0),fx=new I(1,1,1),Lr=new I,ec=new I,jn=new I,bd=new $e,Td=new Yi;class ji{constructor(e=0,t=0,n=0,i=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dx=0;const Ed=new I,Xs=new Yi,nr=new $e,tc=new I,Jo=new I,px=new I,mx=new Yi,Ad=new I(1,0,0),wd=new I(0,1,0),Rd=new I(0,0,1),Cd={type:"added"},_x={type:"removed"},qs={type:"childadded",child:null},Wl={type:"childremoved",child:null};class Nt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new I,t=new ji,n=new Yi,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Ad,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Rd,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ad,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Jo,tc,this.up):nr.lookAt(tc,Jo,this.up),this.quaternion.setFromRotationMatrix(nr),i&&(nr.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(nr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Nt.DEFAULT_UP=new I(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new I,ir=new I,Xl=new I,rr=new I,Ys=new I,js=new I,Pd=new I,ql=new I,Yl=new I,jl=new I,$l=new dt,Kl=new dt,Zl=new dt;class di{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),ir.subVectors(n,t),Xl.subVectors(e,t);const o=Ti.dot(Ti),a=Ti.dot(ir),c=Ti.dot(Xl),l=ir.dot(ir),u=ir.dot(Xl),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,rr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,rr.x),c.addScaledVector(o,rr.y),c.addScaledVector(a,rr.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return $l.setScalar(0),Kl.setScalar(0),Zl.setScalar(0),$l.fromBufferAttribute(e,t),Kl.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector($l,s.x),o.addScaledVector(Kl,s.y),o.addScaledVector(Zl,s.z),o}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),ir.subVectors(e,t),Ti.cross(ir).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ti.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return di.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ys.subVectors(i,n),js.subVectors(s,n),ql.subVectors(e,n);const c=Ys.dot(ql),l=js.dot(ql);if(c<=0&&l<=0)return t.copy(n);Yl.subVectors(e,i);const u=Ys.dot(Yl),h=js.dot(Yl);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ys,o);jl.subVectors(e,s);const d=Ys.dot(jl),_=js.dot(jl);if(_>=0&&d<=_)return t.copy(s);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(js,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Pd.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Pd,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Ys,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Jl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=ff(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Jl(o,s,e+1/3),this.g=Jl(o,s,e),this.b=Jl(o,s,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Vm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ot.fromWorkingColorSpace(pn.copy(this),e),Math.round(un(pn.r*255,0,255))*65536+Math.round(un(pn.g*255,0,255))*256+Math.round(un(pn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Wt){ot.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(nc);const n=xa(Dr.h,nc.h,t),i=xa(Dr.s,nc.s,t),s=xa(Dr.l,nc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ue;Ue.NAMES=Vm;let gx=0;class Wi extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Di(),this.name="",this.blending=po,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=zu,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ku&&(n.blendSrc=this.blendSrc),this.blendDst!==zu&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mr extends Wi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new I,ic=new Ge;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bh,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),e}}class Gm extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wm extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zn extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xx=0;const ai=new $e,Ql=new Nt,$s=new I,$n=new yi,Qo=new yi,nn=new I;class Tn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?Wm:Gm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Ql.lookAt(e),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zn(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors($n.min,Qo.min),$n.expandByPoint(nn),nn.addVectors($n.max,Qo.max),$n.expandByPoint(nn)):($n.expandByPoint(Qo.min),$n.expandByPoint(Qo.max))}$n.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&($s.fromBufferAttribute(e,l),nn.add($s)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new I,c[w]=new I;const l=new I,u=new I,h=new I,f=new Ge,d=new Ge,_=new Ge,g=new I,m=new I;function p(w,S,b){l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),f.fromBufferAttribute(s,w),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,b),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),a[w].add(g),a[S].add(g),a[b].add(g),c[w].add(m),c[S].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let w=0,S=v.length;w<S;++w){const b=v[w],P=b.start,N=b.count;for(let B=P,W=P+N;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new I,x=new I,R=new I,A=new I;function M(w){R.fromBufferAttribute(i,w),A.copy(R);const S=a[w];y.copy(S),y.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(A,S);const P=x.dot(c[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,P)}for(let w=0,S=v.length;w<S;++w){const b=v[w],P=b.start,N=b.count;for(let B=P,W=P+N;B<W;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new Ft(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ld=new $e,rs=new Vo,rc=new Ki,Dd=new I,sc=new I,oc=new I,ac=new I,eu=new I,cc=new I,Id=new I,lc=new I;class Mt extends Nt{constructor(e=new Tn,t=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){cc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(eu.fromBufferAttribute(h,e),o?cc.addScaledVector(eu,u):cc.addScaledVector(eu.sub(t),u))}t.add(cc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(s),rs.copy(e.ray).recast(e.near),!(rc.containsPoint(rs.origin)===!1&&(rs.intersectSphere(rc,Dd)===null||rs.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Ld.copy(s).invert(),rs.copy(e.ray).applyMatrix4(Ld),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,R=y;x<R;x+=3){const A=a.getX(x),M=a.getX(x+1),w=a.getX(x+2);i=uc(this,p,e,n,l,u,h,A,M,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=uc(this,o,e,n,l,u,h,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,R=y;x<R;x+=3){const A=x,M=x+1,w=x+2;i=uc(this,p,e,n,l,u,h,A,M,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=m,y=m+1,x=m+2;i=uc(this,o,e,n,l,u,h,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function vx(r,e,t,n,i,s,o,a){let c;if(e.side===On?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===yr,a),c===null)return null;lc.copy(a),lc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(lc);return l<t.near||l>t.far?null:{distance:l,point:lc.clone(),object:r}}function uc(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,sc),r.getVertexPosition(c,oc),r.getVertexPosition(l,ac);const u=vx(r,e,t,n,sc,oc,ac,Id);if(u){const h=new I;di.getBarycoord(Id,sc,oc,ac,h),i&&(u.uv=di.getInterpolatedAttribute(i,a,c,l,h,new Ge)),s&&(u.uv1=di.getInterpolatedAttribute(s,a,c,l,h,new Ge)),o&&(u.normal=di.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};di.getNormal(sc,oc,ac,f.normal),u.face=f,u.barycoord=h}return u}class Go extends Tn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new zn(l,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(h,2));function _(g,m,p,v,y,x,R,A,M,w,S){const b=x/M,P=R/w,N=x/2,B=R/2,W=A/2,X=M+1,q=w+1;let Y=0,V=0;const te=new I;for(let L=0;L<q;L++){const ue=L*P-B;for(let Ie=0;Ie<X;Ie++){const et=Ie*b-N;te[g]=et*v,te[m]=ue*y,te[p]=W,l.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=A>0?1:-1,u.push(te.x,te.y,te.z),h.push(Ie/M),h.push(1-L/w),Y+=1}}for(let L=0;L<w;L++)for(let ue=0;ue<M;ue++){const Ie=f+ue+X*L,et=f+ue+X*(L+1),$=f+(ue+1)+X*(L+1),ee=f+(ue+1)+X*L;c.push(Ie,et,ee),c.push(et,$,ee),V+=6}a.addGroup(d,V,S),d+=V,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=Do(r[t]);for(const i in n)e[i]=n[i]}return e}function yx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Mx={clone:Do,merge:Cn};var Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zr extends Wi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qm extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=pr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new I,Nd=new Ge,Ud=new Ge;class xn extends qm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Ud),t.subVectors(Ud,Nd)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class Tx extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new xn(Ks,Zs,e,t);i.layers=this.layers,this.add(i);const s=new xn(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const o=new xn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new xn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const c=new xn(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const l=new xn(Ks,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===pr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ym extends cn{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ex extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ym(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Go(5,5,5),s=new Zr({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Xr});s.uniforms.tEquirect.value=t;const o=new Mt(i,s),a=t.minFilter;return t.minFilter===dr&&(t.minFilter=ti),new Tx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const tu=new I,Ax=new I,wx=new Je;class Bi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=tu.subVectors(n,t).cross(Ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wx.getNormalMatrix(e),i=this.coplanarPoint(tu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Ki,hc=new I;class pf{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,s=new Bi,o=new Bi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-s,f-l,m-d,x-p).normalize(),n[1].setComponents(c+s,f+l,m+d,x+p).normalize(),n[2].setComponents(c+o,f+u,m+_,x+v).normalize(),n[3].setComponents(c-o,f-u,m-_,x-v).normalize(),n[4].setComponents(c-a,f-h,m-g,x-y).normalize(),t===pr)n[5].setComponents(c+a,f+h,m+g,x+y).normalize();else if(t===sl)n[5].setComponents(a,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hc.x=i.normal.x>0?e.max.x:e.min.x,hc.y=i.normal.y>0?e.max.y:e.min.y,hc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Rx(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,a),h.length===0)r.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class El extends Tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let y=0;y<l;y++){const x=y*h-s;_.push(x,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),R=v+1+l*(p+1),A=v+1+l*p;d.push(y,x,A),d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
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
#endif`,Lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ux=`#ifdef USE_AOMAP
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
#endif`,Ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jx=`#define PI 3.141592653589793
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
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ev=`vec3 transformedNormal = objectNormal;
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
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ov=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,av=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_v=`#ifdef USE_GRADIENTMAP
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
}`,gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Mv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Av=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,wv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Rv=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bv=`#if defined( USE_POINTS_UV )
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
#endif`,kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zv=`#ifdef USE_NORMALMAP
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
#endif`,Jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,_y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,xy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,by=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cy=`uniform sampler2D t2D;
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Uy=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Oy=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Fy=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Gy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Wy=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Xy=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,qy=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Yy=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jy=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,$y=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ky=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Zy=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jy=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Qy=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,eM=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,tM=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,nM=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,iM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,sM=`uniform vec3 color;
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
}`,oM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,aM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Qe={alphahash_fragment:Cx,alphahash_pars_fragment:Px,alphamap_fragment:Lx,alphamap_pars_fragment:Dx,alphatest_fragment:Ix,alphatest_pars_fragment:Nx,aomap_fragment:Ux,aomap_pars_fragment:Ox,batching_pars_vertex:Fx,batching_vertex:Bx,begin_vertex:kx,beginnormal_vertex:zx,bsdfs:Hx,iridescence_fragment:Vx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:Yx,color_fragment:jx,color_pars_fragment:$x,color_pars_vertex:Kx,color_vertex:Zx,common:Jx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:ev,displacementmap_pars_vertex:tv,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:rv,colorspace_fragment:sv,colorspace_pars_fragment:ov,envmap_fragment:av,envmap_common_pars_fragment:cv,envmap_pars_fragment:lv,envmap_pars_vertex:uv,envmap_physical_pars_fragment:Mv,envmap_vertex:hv,fog_vertex:fv,fog_pars_vertex:dv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:_v,lightmap_pars_fragment:gv,lights_lambert_fragment:xv,lights_lambert_pars_fragment:vv,lights_pars_begin:yv,lights_toon_fragment:Sv,lights_toon_pars_fragment:bv,lights_phong_fragment:Tv,lights_phong_pars_fragment:Ev,lights_physical_fragment:Av,lights_physical_pars_fragment:wv,lights_fragment_begin:Rv,lights_fragment_maps:Cv,lights_fragment_end:Pv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Dv,logdepthbuf_pars_vertex:Iv,logdepthbuf_vertex:Nv,map_fragment:Uv,map_pars_fragment:Ov,map_particle_fragment:Fv,map_particle_pars_fragment:Bv,metalnessmap_fragment:kv,metalnessmap_pars_fragment:zv,morphinstance_vertex:Hv,morphcolor_vertex:Vv,morphnormal_vertex:Gv,morphtarget_pars_vertex:Wv,morphtarget_vertex:Xv,normal_fragment_begin:qv,normal_fragment_maps:Yv,normal_pars_fragment:jv,normal_pars_vertex:$v,normal_vertex:Kv,normalmap_pars_fragment:Zv,clearcoat_normal_fragment_begin:Jv,clearcoat_normal_fragment_maps:Qv,clearcoat_pars_fragment:ey,iridescence_pars_fragment:ty,opaque_fragment:ny,packing:iy,premultiplied_alpha_fragment:ry,project_vertex:sy,dithering_fragment:oy,dithering_pars_fragment:ay,roughnessmap_fragment:cy,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:hy,shadowmap_vertex:fy,shadowmask_pars_fragment:dy,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:_y,skinnormal_vertex:gy,specularmap_fragment:xy,specularmap_pars_fragment:vy,tonemapping_fragment:yy,tonemapping_pars_fragment:My,transmission_fragment:Sy,transmission_pars_fragment:by,uv_pars_fragment:Ty,uv_pars_vertex:Ey,uv_vertex:Ay,worldpos_vertex:wy,background_vert:Ry,background_frag:Cy,backgroundCube_vert:Py,backgroundCube_frag:Ly,cube_vert:Dy,cube_frag:Iy,depth_vert:Ny,depth_frag:Uy,distanceRGBA_vert:Oy,distanceRGBA_frag:Fy,equirect_vert:By,equirect_frag:ky,linedashed_vert:zy,linedashed_frag:Hy,meshbasic_vert:Vy,meshbasic_frag:Gy,meshlambert_vert:Wy,meshlambert_frag:Xy,meshmatcap_vert:qy,meshmatcap_frag:Yy,meshnormal_vert:jy,meshnormal_frag:$y,meshphong_vert:Ky,meshphong_frag:Zy,meshphysical_vert:Jy,meshphysical_frag:Qy,meshtoon_vert:eM,meshtoon_frag:tM,points_vert:nM,points_frag:iM,shadow_vert:rM,shadow_frag:sM,sprite_vert:oM,sprite_frag:aM},_e={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ki={basic:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Cn([_e.points,_e.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Cn([_e.common,_e.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Cn([_e.sprite,_e.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Cn([_e.common,_e.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Cn([_e.lights,_e.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ki.physical={uniforms:Cn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const fc={r:0,b:0,g:0},os=new ji,cM=new $e;function lM(r,e,t,n,i,s,o){const a=new Ue(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function g(v){let y=!1;const x=_(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const x=_(y);x&&(x.isCubeTexture||x.mapping===bl)?(u===void 0&&(u=new Mt(new Go(1,1,1),new Zr({name:"BackgroundCubeMaterial",uniforms:Do(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),os.copy(y.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cM.makeRotationFromEuler(os)),u.material.toneMapped=ot.getTransfer(x.colorSpace)!==yt,(h!==x||f!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Mt(new El(2,2),new Zr({name:"BackgroundMaterial",uniforms:Do(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(fc,Xm(r)),n.buffers.color.setClear(fc.r,fc.g,fc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:g,addToRenderList:m}}function uM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(b,P,N,B,W){let X=!1;const q=h(B,N,P);s!==q&&(s=q,l(s.object)),X=d(b,B,N,W),X&&_(b,B,N,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(b,P,N,B),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return r.createVertexArray()}function l(b){return r.bindVertexArray(b)}function u(b){return r.deleteVertexArray(b)}function h(b,P,N){const B=N.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let q=X[B];return q===void 0&&(q=f(c()),X[B]=q),q}function f(b){const P=[],N=[],B=[];for(let W=0;W<t;W++)P[W]=0,N[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:b,attributes:{},index:null}}function d(b,P,N,B){const W=s.attributes,X=P.attributes;let q=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){const L=W[V];let ue=X[V];if(ue===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),L===void 0||L.attribute!==ue||ue&&L.data!==ue.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function _(b,P,N,B){const W={},X=P.attributes;let q=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){let L=X[V];L===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(L=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(L=b.instanceColor));const ue={};ue.attribute=L,L&&L.data&&(ue.data=L.data),W[V]=ue,q++}s.attributes=W,s.attributesNum=q,s.index=B}function g(){const b=s.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const N=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;N[b]=1,B[b]===0&&(r.enableVertexAttribArray(b),B[b]=1),W[b]!==P&&(r.vertexAttribDivisor(b,P),W[b]=P)}function v(){const b=s.newAttributes,P=s.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==b[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function y(b,P,N,B,W,X,q){q===!0?r.vertexAttribIPointer(b,P,N,W,X):r.vertexAttribPointer(b,P,N,B,W,X)}function x(b,P,N,B){g();const W=B.attributes,X=N.getAttributes(),q=P.defaultAttributeValues;for(const Y in X){const V=X[Y];if(V.location>=0){let te=W[Y];if(te===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){const L=te.normalized,ue=te.itemSize,Ie=e.get(te);if(Ie===void 0)continue;const et=Ie.buffer,$=Ie.type,ee=Ie.bytesPerElement,ge=$===r.INT||$===r.UNSIGNED_INT||te.gpuType===sf;if(te.isInterleavedBufferAttribute){const ne=te.data,be=ne.stride,we=te.offset;if(ne.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)p(V.location+Ve,ne.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)m(V.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,et);for(let Ve=0;Ve<V.locationSize;Ve++)y(V.location+Ve,ue/V.locationSize,$,L,be*ee,(we+ue/V.locationSize*Ve)*ee,ge)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,te.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);r.bindBuffer(r.ARRAY_BUFFER,et);for(let ne=0;ne<V.locationSize;ne++)y(V.location+ne,ue/V.locationSize,$,L,ue*ee,ue/V.locationSize*ne*ee,ge)}}else if(q!==void 0){const L=q[Y];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(V.location,L);break;case 3:r.vertexAttrib3fv(V.location,L);break;case 4:r.vertexAttrib4fv(V.location,L);break;default:r.vertexAttrib1fv(V.location,L)}}}}v()}function R(){w();for(const b in n){const P=n[b];for(const N in P){const B=P[N];for(const W in B)u(B[W].object),delete B[W];delete P[N]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const N in P){const B=P[N];for(const W in B)u(B[W].object),delete B[W];delete P[N]}delete n[b.id]}function M(b){for(const P in n){const N=n[P];if(N[b.id]===void 0)continue;const B=N[b.id];for(const W in B)u(B[W].object),delete B[W];delete N[b.id]}}function w(){S(),o=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function hM(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==pi&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const w=M===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Mr&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Li&&!w)}function c(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function dM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Bi,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=u(_,f,y,d);for(let R=0;R!==y;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==g;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function pM(r){let e=new WeakMap;function t(o,a){return a===ju?o.mapping=wo:a===$u&&(o.mapping=Ro),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ju||a===$u)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ex(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class mf extends qm{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const co=4,Od=[.125,.215,.35,.446,.526,.582],gs=20,nu=new mf,Fd=new Ue;let iu=null,ru=0,su=0,ou=!1;const fs=(1+Math.sqrt(5))/2,Js=1/fs,Bd=[new I(-fs,Js,0),new I(fs,Js,0),new I(-Js,0,fs),new I(Js,0,fs),new I(0,fs,-Js),new I(0,fs,Js),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,ru,su),this._renderer.xr.enabled=ou,e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:qa,format:pi,colorSpace:bn,depthBuffer:!1},i=kd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mM(s)),this._blurMaterial=_M(s,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,nu)}_sceneToCubeUV(e,t,n,i){const a=new xn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fd),u.toneMapping=qr,u.autoClear=!1;const d=new mr({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),_=new Mt(new Go,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Fd),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;dc(i,v*y,p>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wo||e.mapping===Ro;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;dc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,nu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bd[(i-s-1)%Bd.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gs-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):gs;m>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const p=[];let v=0;for(let M=0;M<gs;++M){const w=M/g,S=Math.exp(-w*w/2);p.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const x=this._sizeLods[i],R=3*x*(i>y-co?i-y+co:0),A=4*(this._cubeSize-x);dc(t,R,A,3*x,2*x),c.setRenderTarget(t),c.render(h,nu)}}function mM(r){const e=[],t=[],n=[];let i=r;const s=r-co+1+Od.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-co?c=Od[o-r+co-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*d),y=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let A=0;A<d;A++){const M=A%3*2/3-1,w=A>2?0:-1,S=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];v.set(S,g*_*A),y.set(f,m*_*A);const b=[A,A,A,A,A,A];x.set(b,p*_*A)}const R=new Tn;R.setAttribute("position",new Ft(v,g)),R.setAttribute("uv",new Ft(y,m)),R.setAttribute("faceIndex",new Ft(x,p)),e.push(R),i>co&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kd(r,e,t){const n=new Cs(r,e,t);return n.texture.mapping=bl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function _M(r,e,t){const n=new Float32Array(gs),i=new I(0,1,0);return new Zr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function zd(){return new Zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Hd(){return new Zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function _f(){return`

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
	`}function gM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ju||c===$u,u=c===wo||c===Ro;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ol(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new ol(r)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&la("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vM(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const v=d.array;g=d.version;for(let y=0,x=v.length;y<x;y+=3){const R=v[y+0],A=v[y+1],M=v[y+2];f.push(R,A,A,M,M,R)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const R=y+0,A=y+1,M=y+2;f.push(R,A,A,M,M,R)}}else return;const m=new(km(f)?Wm:Gm)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function yM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function l(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v]*g[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function MM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function SM(r,e,t){const n=new WeakMap,i=new dt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const M=new Float32Array(R*A*4*h),w=new Hm(M,R,A,h);w.type=Li,w.needsUpdate=!0;const S=x*4;for(let P=0;P<h;P++){const N=p[P],B=v[P],W=y[P],X=R*A*4*P;for(let q=0;q<N.count;q++){const Y=q*S;_===!0&&(i.fromBufferAttribute(N,q),M[X+Y+0]=i.x,M[X+Y+1]=i.y,M[X+Y+2]=i.z,M[X+Y+3]=0),g===!0&&(i.fromBufferAttribute(B,q),M[X+Y+4]=i.x,M[X+Y+5]=i.y,M[X+Y+6]=i.z,M[X+Y+7]=0),m===!0&&(i.fromBufferAttribute(W,q),M[X+Y+8]=i.x,M[X+Y+9]=i.y,M[X+Y+10]=i.z,M[X+Y+11]=W.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new Ge(R,A)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function bM(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class $m extends cn{constructor(e,t,n,i,s,o,a,c,l,u=mo){if(u!==mo&&u!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mo&&(n=Rs),n===void 0&&u===Po&&(n=Co),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=c!==void 0?c:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Km=new cn,Vd=new $m(1,1),Zm=new Hm,Jm=new lx,Qm=new Ym,Gd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function Wo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Gd[i];if(s===void 0&&(s=new Float32Array(i),Gd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Al(r,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function TM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function EM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function AM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function wM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function RM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Yd.set(n),r.uniformMatrix2fv(this.addr,!1,Yd),tn(t,n)}}function CM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;qd.set(n),r.uniformMatrix3fv(this.addr,!1,qd),tn(t,n)}}function PM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Xd.set(n),r.uniformMatrix4fv(this.addr,!1,Xd),tn(t,n)}}function LM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function DM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function NM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function UM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function OM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function kM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Vd.compareFunction=Bm,s=Vd):s=Km,t.setTexture2D(e||s,i)}function zM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jm,i)}function HM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qm,i)}function VM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zm,i)}function GM(r){switch(r){case 5126:return TM;case 35664:return EM;case 35665:return AM;case 35666:return wM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return DM;case 35668:case 35672:return IM;case 35669:case 35673:return NM;case 5125:return UM;case 36294:return OM;case 36295:return FM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return VM}}function WM(r,e){r.uniform1fv(this.addr,e)}function XM(r,e){const t=Wo(e,this.size,2);r.uniform2fv(this.addr,t)}function qM(r,e){const t=Wo(e,this.size,3);r.uniform3fv(this.addr,t)}function YM(r,e){const t=Wo(e,this.size,4);r.uniform4fv(this.addr,t)}function jM(r,e){const t=Wo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function $M(r,e){const t=Wo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function KM(r,e){const t=Wo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ZM(r,e){r.uniform1iv(this.addr,e)}function JM(r,e){r.uniform2iv(this.addr,e)}function QM(r,e){r.uniform3iv(this.addr,e)}function eS(r,e){r.uniform4iv(this.addr,e)}function tS(r,e){r.uniform1uiv(this.addr,e)}function nS(r,e){r.uniform2uiv(this.addr,e)}function iS(r,e){r.uniform3uiv(this.addr,e)}function rS(r,e){r.uniform4uiv(this.addr,e)}function sS(r,e,t){const n=this.cache,i=e.length,s=Al(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Km,s[o])}function oS(r,e,t){const n=this.cache,i=e.length,s=Al(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jm,s[o])}function aS(r,e,t){const n=this.cache,i=e.length,s=Al(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qm,s[o])}function cS(r,e,t){const n=this.cache,i=e.length,s=Al(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zm,s[o])}function lS(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return jM;case 35675:return $M;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return cS}}class uS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}}class hS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lS(t.type)}}class fS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const au=/(\w+)(\])?(\[|\.)?/g;function jd(r,e){r.seq.push(e),r.map[e.id]=e}function dS(r,e,t){const n=r.name,i=n.length;for(au.lastIndex=0;;){const s=au.exec(n),o=au.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){jd(t,l===void 0?new uS(a,r,e):new hS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new fS(a),jd(t,h)),t=h}}}class qc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);dS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function $d(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const pS=37297;let mS=0;function _S(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Kd=new Je;function gS(r){ot._getMatrix(Kd,ot.workingColorSpace,r);const e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case Tl:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Zd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+_S(r.getShaderSource(e),o)}else return i}function xS(r,e){const t=gS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vS(r,e){let t;switch(e){case y0:t="Linear";break;case M0:t="Reinhard";break;case S0:t="Cineon";break;case rf:t="ACESFilmic";break;case T0:t="AgX";break;case E0:t="Neutral";break;case b0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pc=new I;function yS(){ot.getLuminanceCoefficients(pc);const r=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function SS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ua(r){return r!==""}function Jd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(r){return r.replace(TS,AS)}const ES=new Map;function AS(r,e){let t=Qe[e];if(t===void 0){const n=ES.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Th(t)}const wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(r){return r.replace(wS,RS)}function RS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function PS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wo:case Ro:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ro:e="ENVMAP_MODE_REFRACTION";break}return e}function DS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Tm:e="ENVMAP_BLENDING_MULTIPLY";break;case x0:e="ENVMAP_BLENDING_MIX";break;case v0:e="ENVMAP_BLENDING_ADD";break}return e}function IS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function NS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=CS(t),l=PS(t),u=LS(t),h=DS(t),f=IS(t),d=MS(t),_=SS(s),g=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ua).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ua).join(`
`),p.length>0&&(p+=`
`)):(m=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),p=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qr?"#define TONE_MAPPING":"",t.toneMapping!==qr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==qr?vS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,xS("linearToOutputTexel",t.outputColorSpace),yS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),o=Th(o),o=Jd(o,t),o=Qd(o,t),a=Th(a),a=Jd(a,t),a=Qd(a,t),o=ep(o),a=ep(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,R=$d(i,i.VERTEX_SHADER,y),A=$d(i,i.FRAGMENT_SHADER,x);i.attachShader(g,R),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function M(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(A).trim();let X=!0,q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const Y=Zd(i,R,"vertex"),V=Zd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Y+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||W==="")&&(q=!1);q&&(P.diagnostics={runnable:X,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(R),i.deleteShader(A),w=new qc(i,g),S=bS(i,g)}let w;this.getUniforms=function(){return w===void 0&&M(this),w};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,pS)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let US=0;class OS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new FS(e),t.set(e,n)),n}}class FS{constructor(e){this.id=US++,this.code=e,this.usedTimes=0}}function BS(r,e,t,n,i,s,o){const a=new df,c=new OS,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,N,B){const W=N.fog,X=B.geometry,q=S.isMeshStandardMaterial?N.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),V=Y&&Y.mapping===bl?Y.image.height:null,te=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=L!==void 0?L.length:0;let Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let et,$,ee,ge;if(te){const xe=ki[te];et=xe.vertexShader,$=xe.fragmentShader}else et=S.vertexShader,$=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),ge=c.getFragmentShaderID(S);const ne=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,tt=!!S.map,We=!!S.matcap,Le=!!Y,U=!!S.aoMap,bt=!!S.lightMap,Fe=!!S.bumpMap,k=!!S.normalMap,Te=!!S.displacementMap,at=!!S.emissiveMap,Re=!!S.metalnessMap,C=!!S.roughnessMap,T=S.anisotropy>0,G=S.clearcoat>0,Q=S.dispersion>0,J=S.iridescence>0,K=S.sheen>0,he=S.transmission>0,ae=T&&!!S.anisotropyMap,pe=G&&!!S.clearcoatMap,Ye=G&&!!S.clearcoatNormalMap,ie=G&&!!S.clearcoatRoughnessMap,oe=J&&!!S.iridescenceMap,Ne=J&&!!S.iridescenceThicknessMap,De=K&&!!S.sheenColorMap,ve=K&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,Oe=!!S.specularColorMap,ut=!!S.specularIntensityMap,D=he&&!!S.transmissionMap,le=he&&!!S.thicknessMap,j=!!S.gradientMap,Z=!!S.alphaMap,ce=S.alphaTest>0,fe=!!S.alphaHash,Be=!!S.extensions;let ht=qr;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ht=r.toneMapping);const kt={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:$,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:bn,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:We,envMap:Le,envMapMode:Le&&Y.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:bt,bumpMap:Fe,normalMap:k,displacementMap:f&&Te,emissiveMap:at,normalMapObjectSpace:k&&S.normalMapType===L0,normalMapTangentSpace:k&&S.normalMapType===Fm,metalnessMap:Re,roughnessMap:C,anisotropy:T,anisotropyMap:ae,clearcoat:G,clearcoatMap:pe,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:oe,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:Ke,specularColorMap:Oe,specularIntensityMap:ut,transmission:he,transmissionMap:D,thicknessMap:le,gradientMap:j,opaque:S.transparent===!1&&S.blending===po&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:fe,combine:S.combine,mapUv:tt&&g(S.map.channel),aoMapUv:U&&g(S.aoMap.channel),lightMapUv:bt&&g(S.lightMap.channel),bumpMapUv:Fe&&g(S.bumpMap.channel),normalMapUv:k&&g(S.normalMap.channel),displacementMapUv:Te&&g(S.displacementMap.channel),emissiveMapUv:at&&g(S.emissiveMap.channel),metalnessMapUv:Re&&g(S.metalnessMap.channel),roughnessMapUv:C&&g(S.roughnessMap.channel),anisotropyMapUv:ae&&g(S.anisotropyMap.channel),clearcoatMapUv:pe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(S.sheenRoughnessMap.channel),specularMapUv:Ke&&g(S.specularMap.channel),specularColorMapUv:Oe&&g(S.specularColorMap.channel),specularIntensityMapUv:ut&&g(S.specularIntensityMap.channel),transmissionMapUv:D&&g(S.transmissionMap.channel),thicknessMapUv:le&&g(S.thicknessMap.channel),alphaMapUv:Z&&g(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(k||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(tt||Z),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===yt,decodeVideoTextureEmissive:at&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ri,flipSided:S.side===On,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(b,S),y(b,S),b.push(r.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const b=_[S.type];let P;if(b){const N=ki[b];P=Mx.clone(N.uniforms)}else P=S.uniforms;return P}function R(S,b){let P;for(let N=0,B=u.length;N<B;N++){const W=u[N];if(W.cacheKey===b){P=W,++P.usedTimes;break}}return P===void 0&&(P=new NS(r,b,S,s),u.push(P)),P}function A(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function M(S){c.remove(S)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:w}}function kS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function zS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function np(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ip(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||zS),n.length>1&&n.sort(f||np),i.length>1&&i.sort(f||np)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function HS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ip,r.set(n,[o])):i>=s.length?(o=new ip,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function VS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function GS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let WS=0;function XS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function qS(r){const e=new VS,t=GS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,s=new $e,o=new $e;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,v=0,y=0,x=0,R=0,A=0,M=0;l.sort(XS);for(let S=0,b=l.length;S<b;S++){const P=l[S],N=P.color,B=P.intensity,W=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*B,h+=N.g*B,f+=N.b*B;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],B);M++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=q,d++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(N).multiplyScalar(B),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[g]=q;const Y=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Y.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=Y.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=X,x++}g++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(N).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Y=P.shadow,V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=q,_++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(B),q.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=q,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==d||w.pointLength!==_||w.spotLength!==g||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==v||w.numPointShadows!==y||w.numSpotShadows!==x||w.numSpotMaps!==R||w.numLightProbes!==M)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=M,w.directionalLength=d,w.pointLength=_,w.spotLength=g,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=v,w.numPointShadows=y,w.numSpotShadows=x,w.numSpotMaps=R,w.numLightProbes=M,n.version=WS++)}function c(l,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function rp(r){const e=new qS(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function YS(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new rp(r),e.set(i,[a])):s>=o.length?(a=new rp(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class jS extends Wi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends Wi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZS=`uniform sampler2D shadow_pass;
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
}`;function JS(r,e,t){let n=new pf;const i=new Ge,s=new Ge,o=new dt,a=new jS({depthPacking:P0}),c=new $S,l={},u=t.maxTextureSize,h={[yr]:On,[On]:yr,[Ri]:Ri},f=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:KS,fragmentShader:ZS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let p=this.type;this.render=function(A,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Xr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==or&&this.type===or,W=p===or&&this.type!==or;for(let X=0,q=A.length;X<q;X++){const Y=A[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();if(i.multiply(te),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,V.mapSize.y=s.y)),V.map===null||B===!0||W===!0){const ue=this.type!==or?{minFilter:Fn,magFilter:Fn}:{};V.map!==null&&V.map.dispose(),V.map=new Cs(i.x,i.y,ue),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const L=V.getViewportCount();for(let ue=0;ue<L;ue++){const Ie=V.getViewport(ue);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),N.viewport(o),V.updateMatrices(Y,ue),n=V.getFrustum(),x(M,w,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===or&&v(V,w),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,b,P)};function v(A,M){const w=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cs(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(M,null,w,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(M,null,w,d,g,null)}function y(A,M,w,S){let b=null;const P=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=w.isPointLight===!0?c:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=b.uuid,B=M.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let X=W[B];X===void 0&&(X=b.clone(),W[B]=X,M.addEventListener("dispose",R)),b=X}if(b.visible=M.visible,b.wireframe=M.wireframe,S===or?b.side=M.shadowSide!==null?M.shadowSide:M.side:b.side=M.shadowSide!==null?M.shadowSide:h[M.side],b.alphaMap=M.alphaMap,b.alphaTest=M.alphaTest,b.map=M.map,b.clipShadows=M.clipShadows,b.clippingPlanes=M.clippingPlanes,b.clipIntersection=M.clipIntersection,b.displacementMap=M.displacementMap,b.displacementScale=M.displacementScale,b.displacementBias=M.displacementBias,b.wireframeLinewidth=M.wireframeLinewidth,b.linewidth=M.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=r.properties.get(b);N.light=w}return b}function x(A,M,w,S,b){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===or)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const X=B.groups;for(let q=0,Y=X.length;q<Y;q++){const V=X[q],te=W[V.materialIndex];if(te&&te.visible){const L=y(A,te,S,b);A.onBeforeShadow(r,A,M,w,B,L,V),r.renderBufferDirect(w,null,B,L,A,V),A.onAfterShadow(r,A,M,w,B,L,V)}}}else if(W.visible){const X=y(A,W,S,b);A.onBeforeShadow(r,A,M,w,B,X,null),r.renderBufferDirect(w,null,B,X,A,null),A.onAfterShadow(r,A,M,w,B,X,null)}}const N=A.children;for(let B=0,W=N.length;B<W;B++)x(N[B],M,w,S,b)}function R(A){A.target.removeEventListener("dispose",R);for(const w in l){const S=l[w],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const QS={[Hu]:Vu,[Gu]:qu,[Wu]:Yu,[Ao]:Xu,[Vu]:Hu,[qu]:Gu,[Yu]:Wu,[Xu]:Ao};function eb(r,e){function t(){let D=!1;const le=new dt;let j=null;const Z=new dt(0,0,0,0);return{setMask:function(ce){j!==ce&&!D&&(r.colorMask(ce,ce,ce,ce),j=ce)},setLocked:function(ce){D=ce},setClear:function(ce,fe,Be,ht,kt){kt===!0&&(ce*=ht,fe*=ht,Be*=ht),le.set(ce,fe,Be,ht),Z.equals(le)===!1&&(r.clearColor(ce,fe,Be,ht),Z.copy(le))},reset:function(){D=!1,j=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,j=null,Z=null,ce=null;return{setReversed:function(fe){if(le!==fe){const Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const ht=ce;ce=null,this.setClear(ht)}le=fe},getReversed:function(){return le},setTest:function(fe){fe?ne(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(fe){j!==fe&&!D&&(r.depthMask(fe),j=fe)},setFunc:function(fe){if(le&&(fe=QS[fe]),Z!==fe){switch(fe){case Hu:r.depthFunc(r.NEVER);break;case Vu:r.depthFunc(r.ALWAYS);break;case Gu:r.depthFunc(r.LESS);break;case Ao:r.depthFunc(r.LEQUAL);break;case Wu:r.depthFunc(r.EQUAL);break;case Xu:r.depthFunc(r.GEQUAL);break;case qu:r.depthFunc(r.GREATER);break;case Yu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=fe}},setLocked:function(fe){D=fe},setClear:function(fe){ce!==fe&&(le&&(fe=1-fe),r.clearDepth(fe),ce=fe)},reset:function(){D=!1,j=null,Z=null,ce=null,le=!1}}}function i(){let D=!1,le=null,j=null,Z=null,ce=null,fe=null,Be=null,ht=null,kt=null;return{setTest:function(xe){D||(xe?ne(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(xe){le!==xe&&!D&&(r.stencilMask(xe),le=xe)},setFunc:function(xe,Ae,Ze){(j!==xe||Z!==Ae||ce!==Ze)&&(r.stencilFunc(xe,Ae,Ze),j=xe,Z=Ae,ce=Ze)},setOp:function(xe,Ae,Ze){(fe!==xe||Be!==Ae||ht!==Ze)&&(r.stencilOp(xe,Ae,Ze),fe=xe,Be=Ae,ht=Ze)},setLocked:function(xe){D=xe},setClear:function(xe){kt!==xe&&(r.clearStencil(xe),kt=xe)},reset:function(){D=!1,le=null,j=null,Z=null,ce=null,fe=null,Be=null,ht=null,kt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,y=null,x=null,R=null,A=null,M=new Ue(0,0,0),w=0,S=!1,b=null,P=null,N=null,B=null,W=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Y>=2);let te=null,L={};const ue=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),et=new dt().fromArray(ue),$=new dt().fromArray(Ie);function ee(D,le,j,Z){const ce=new Uint8Array(4),fe=r.createTexture();r.bindTexture(D,fe),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<j;Be++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(le+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return fe}const ge={};ge[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(r.DEPTH_TEST),o.setFunc(Ao),Fe(!1),k(od),ne(r.CULL_FACE),U(Xr);function ne(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function be(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function we(D,le){return h[D]!==le?(r.bindFramebuffer(D,le),h[D]=le,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Ve(D,le){let j=d,Z=!1;if(D){j=f.get(le),j===void 0&&(j=[],f.set(le,j));const ce=D.textures;if(j.length!==ce.length||j[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,Be=ce.length;fe<Be;fe++)j[fe]=r.COLOR_ATTACHMENT0+fe;j.length=ce.length,Z=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,Z=!0);Z&&r.drawBuffers(j)}function tt(D){return _!==D?(r.useProgram(D),_=D,!0):!1}const We={[_s]:r.FUNC_ADD,[t0]:r.FUNC_SUBTRACT,[n0]:r.FUNC_REVERSE_SUBTRACT};We[i0]=r.MIN,We[r0]=r.MAX;const Le={[s0]:r.ZERO,[o0]:r.ONE,[a0]:r.SRC_COLOR,[ku]:r.SRC_ALPHA,[d0]:r.SRC_ALPHA_SATURATE,[h0]:r.DST_COLOR,[l0]:r.DST_ALPHA,[c0]:r.ONE_MINUS_SRC_COLOR,[zu]:r.ONE_MINUS_SRC_ALPHA,[f0]:r.ONE_MINUS_DST_COLOR,[u0]:r.ONE_MINUS_DST_ALPHA,[p0]:r.CONSTANT_COLOR,[m0]:r.ONE_MINUS_CONSTANT_COLOR,[_0]:r.CONSTANT_ALPHA,[g0]:r.ONE_MINUS_CONSTANT_ALPHA};function U(D,le,j,Z,ce,fe,Be,ht,kt,xe){if(D===Xr){g===!0&&(be(r.BLEND),g=!1);return}if(g===!1&&(ne(r.BLEND),g=!0),D!==e0){if(D!==m||xe!==S){if((p!==_s||x!==_s)&&(r.blendEquation(r.FUNC_ADD),p=_s,x=_s),xe)switch(D){case po:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bu:r.blendFunc(r.ONE,r.ONE);break;case ad:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ad:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,R=null,A=null,M.set(0,0,0),w=0,m=D,S=xe}return}ce=ce||le,fe=fe||j,Be=Be||Z,(le!==p||ce!==x)&&(r.blendEquationSeparate(We[le],We[ce]),p=le,x=ce),(j!==v||Z!==y||fe!==R||Be!==A)&&(r.blendFuncSeparate(Le[j],Le[Z],Le[fe],Le[Be]),v=j,y=Z,R=fe,A=Be),(ht.equals(M)===!1||kt!==w)&&(r.blendColor(ht.r,ht.g,ht.b,kt),M.copy(ht),w=kt),m=D,S=!1}function bt(D,le){D.side===Ri?be(r.CULL_FACE):ne(r.CULL_FACE);let j=D.side===On;le&&(j=!j),Fe(j),D.blending===po&&D.transparent===!1?U(Xr):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){b!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),b=D)}function k(D){D!==Jg?(ne(r.CULL_FACE),D!==P&&(D===od?r.cullFace(r.BACK):D===Qg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),P=D}function Te(D){D!==N&&(q&&r.lineWidth(D),N=D)}function at(D,le,j){D?(ne(r.POLYGON_OFFSET_FILL),(B!==le||W!==j)&&(r.polygonOffset(le,j),B=le,W=j)):be(r.POLYGON_OFFSET_FILL)}function Re(D){D?ne(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function C(D){D===void 0&&(D=r.TEXTURE0+X-1),te!==D&&(r.activeTexture(D),te=D)}function T(D,le,j){j===void 0&&(te===null?j=r.TEXTURE0+X-1:j=te);let Z=L[j];Z===void 0&&(Z={type:void 0,texture:void 0},L[j]=Z),(Z.type!==D||Z.texture!==le)&&(te!==j&&(r.activeTexture(j),te=j),r.bindTexture(D,le||ge[D]),Z.type=D,Z.texture=le)}function G(){const D=L[te];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){et.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function ve(D){$.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Ke(D,le){let j=l.get(le);j===void 0&&(j=new WeakMap,l.set(le,j));let Z=j.get(D);Z===void 0&&(Z=r.getUniformBlockIndex(le,D.name),j.set(D,Z))}function Oe(D,le){const Z=l.get(le).get(D);c.get(le)!==Z&&(r.uniformBlockBinding(le,Z,D.__bindingPointIndex),c.set(le,Z))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,L={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,y=null,x=null,R=null,A=null,M=new Ue(0,0,0),w=0,S=!1,b=null,P=null,N=null,B=null,W=null,et.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:be,bindFramebuffer:we,drawBuffers:Ve,useProgram:tt,setBlending:U,setMaterial:bt,setFlipSided:Fe,setCullFace:k,setLineWidth:Te,setPolygonOffset:at,setScissorTest:Re,activeTexture:C,bindTexture:T,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:oe,texImage3D:Ne,updateUBOMapping:Ke,uniformBlockBinding:Oe,texStorage2D:Ye,texStorage3D:ie,texSubImage2D:K,texSubImage3D:he,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:De,viewport:ve,reset:ut}}function sp(r,e,t,n){const i=tb(n);switch(t){case Pm:return r*e;case Dm:return r*e;case Im:return r*e*2;case cf:return r*e/i.components*i.byteLength;case lf:return r*e/i.components*i.byteLength;case Nm:return r*e*2/i.components*i.byteLength;case uf:return r*e*2/i.components*i.byteLength;case Lm:return r*e*3/i.components*i.byteLength;case pi:return r*e*4/i.components*i.byteLength;case hf:return r*e*4/i.components*i.byteLength;case Hc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zu:case Qu:return Math.max(r,16)*Math.max(e,8)/4;case Ku:case Ju:return Math.max(r,8)*Math.max(e,8)/2;case eh:case th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ch:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case hh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _h:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Xc:case gh:case xh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Um:case vh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yh:case Mh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tb(r){switch(r){case Mr:case wm:return{byteLength:1,components:1};case Ia:case Rm:case qa:return{byteLength:2,components:1};case of:case af:return{byteLength:2,components:4};case Rs:case sf:case Li:return{byteLength:4,components:1};case Cm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function nb(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,T){return d?new OffscreenCanvas(C,T):Oa("canvas")}function g(C,T,G){let Q=1;const J=Re(C);if((J.width>G||J.height>G)&&(Q=G/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(Q*J.width),he=Math.floor(Q*J.height);h===void 0&&(h=_(K,he));const ae=T?_(K,he):h;return ae.width=K,ae.height=he,ae.getContext("2d").drawImage(C,0,0,K,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+he+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,T,G,Q,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=T;if(T===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8)),T===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),T===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8)),T===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),T===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),T===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),T===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),T===r.RGBA){const he=J?Tl:ot.getTransfer(Q);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=he===yt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(C,T){let G;return C?T===null||T===Rs||T===Co?G=r.DEPTH24_STENCIL8:T===Li?G=r.DEPTH32F_STENCIL8:T===Ia&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rs||T===Co?G=r.DEPTH_COMPONENT24:T===Li?G=r.DEPTH_COMPONENT32F:T===Ia&&(G=r.DEPTH_COMPONENT16),G}function R(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){const T=C.target;T.removeEventListener("dispose",A),w(T),T.isVideoTexture&&u.delete(T)}function M(C){const T=C.target;T.removeEventListener("dispose",M),b(T)}function w(C){const T=n.get(C);if(T.__webglInit===void 0)return;const G=C.source,Q=f.get(G);if(Q){const J=Q[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(C),Object.keys(Q).length===0&&f.delete(G)}n.remove(C)}function S(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const G=C.source,Q=f.get(G);delete Q[T.__cacheKey],o.memory.textures--}function b(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let J=0;J<T.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(T.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[Q]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=C.textures;for(let Q=0,J=G.length;Q<J;Q++){const K=n.get(G[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(C)}let P=0;function N(){P=0}function B(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function W(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function X(C,T){const G=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,C,T);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+T)}function q(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){$(G,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+T)}function Y(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){$(G,C,T);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+T)}function V(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ee(G,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+T)}const te={[ws]:r.REPEAT,[Fr]:r.CLAMP_TO_EDGE,[rl]:r.MIRRORED_REPEAT},L={[Fn]:r.NEAREST,[Am]:r.NEAREST_MIPMAP_NEAREST,[ca]:r.NEAREST_MIPMAP_LINEAR,[ti]:r.LINEAR,[zc]:r.LINEAR_MIPMAP_NEAREST,[dr]:r.LINEAR_MIPMAP_LINEAR},ue={[D0]:r.NEVER,[B0]:r.ALWAYS,[I0]:r.LESS,[Bm]:r.LEQUAL,[N0]:r.EQUAL,[F0]:r.GEQUAL,[U0]:r.GREATER,[O0]:r.NOTEQUAL};function Ie(C,T){if(T.type===Li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ti||T.magFilter===zc||T.magFilter===ca||T.magFilter===dr||T.minFilter===ti||T.minFilter===zc||T.minFilter===ca||T.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,te[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,te[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,te[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fn||T.minFilter!==ca&&T.minFilter!==dr||T.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function et(C,T){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",A));const Q=T.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const K=W(T);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[K].usedTimes++;const he=J[C.__cacheKey];he!==void 0&&(J[C.__cacheKey].usedTimes--,he.usedTimes===0&&S(T)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return G}function $(C,T,G){let Q=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=r.TEXTURE_3D);const J=et(C,T),K=T.source;t.bindTexture(Q,C.__webglTexture,r.TEXTURE0+G);const he=n.get(K);if(K.version!==he.__version||J===!0){t.activeTexture(r.TEXTURE0+G);const ae=ot.getPrimaries(ot.workingColorSpace),pe=T.colorSpace===ur?null:ot.getPrimaries(T.colorSpace),Ye=T.colorSpace===ur||ae===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ie=g(T.image,!1,i.maxTextureSize);ie=at(T,ie);const oe=s.convert(T.format,T.colorSpace),Ne=s.convert(T.type);let De=y(T.internalFormat,oe,Ne,T.colorSpace,T.isVideoTexture);Ie(Q,T);let ve;const Ke=T.mipmaps,Oe=T.isVideoTexture!==!0,ut=he.__version===void 0||J===!0,D=K.dataReady,le=R(T,ie);if(T.isDepthTexture)De=x(T.format===Po,T.type),ut&&(Oe?t.texStorage2D(r.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,De,ie.width,ie.height,0,oe,Ne,null));else if(T.isDataTexture)if(Ke.length>0){Oe&&ut&&t.texStorage2D(r.TEXTURE_2D,le,De,Ke[0].width,Ke[0].height);for(let j=0,Z=Ke.length;j<Z;j++)ve=Ke[j],Oe?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ve.width,ve.height,oe,Ne,ve.data):t.texImage2D(r.TEXTURE_2D,j,De,ve.width,ve.height,0,oe,Ne,ve.data);T.generateMipmaps=!1}else Oe?(ut&&t.texStorage2D(r.TEXTURE_2D,le,De,ie.width,ie.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,oe,Ne,ie.data)):t.texImage2D(r.TEXTURE_2D,0,De,ie.width,ie.height,0,oe,Ne,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Oe&&ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,De,Ke[0].width,Ke[0].height,ie.depth);for(let j=0,Z=Ke.length;j<Z;j++)if(ve=Ke[j],T.format!==pi)if(oe!==null)if(Oe){if(D)if(T.layerUpdates.size>0){const ce=sp(ve.width,ve.height,T.format,T.type);for(const fe of T.layerUpdates){const Be=ve.data.subarray(fe*ce/ve.data.BYTES_PER_ELEMENT,(fe+1)*ce/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,fe,ve.width,ve.height,1,oe,Be)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,ie.depth,oe,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,De,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,ie.depth,oe,Ne,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,De,ve.width,ve.height,ie.depth,0,oe,Ne,ve.data)}else{Oe&&ut&&t.texStorage2D(r.TEXTURE_2D,le,De,Ke[0].width,Ke[0].height);for(let j=0,Z=Ke.length;j<Z;j++)ve=Ke[j],T.format!==pi?oe!==null?Oe?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,ve.width,ve.height,oe,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,j,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ve.width,ve.height,oe,Ne,ve.data):t.texImage2D(r.TEXTURE_2D,j,De,ve.width,ve.height,0,oe,Ne,ve.data)}else if(T.isDataArrayTexture)if(Oe){if(ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,De,ie.width,ie.height,ie.depth),D)if(T.layerUpdates.size>0){const j=sp(ie.width,ie.height,T.format,T.type);for(const Z of T.layerUpdates){const ce=ie.data.subarray(Z*j/ie.data.BYTES_PER_ELEMENT,(Z+1)*j/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,oe,Ne,ce)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,oe,Ne,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,oe,Ne,ie.data);else if(T.isData3DTexture)Oe?(ut&&t.texStorage3D(r.TEXTURE_3D,le,De,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,oe,Ne,ie.data)):t.texImage3D(r.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,oe,Ne,ie.data);else if(T.isFramebufferTexture){if(ut)if(Oe)t.texStorage2D(r.TEXTURE_2D,le,De,ie.width,ie.height);else{let j=ie.width,Z=ie.height;for(let ce=0;ce<le;ce++)t.texImage2D(r.TEXTURE_2D,ce,De,j,Z,0,oe,Ne,null),j>>=1,Z>>=1}}else if(Ke.length>0){if(Oe&&ut){const j=Re(Ke[0]);t.texStorage2D(r.TEXTURE_2D,le,De,j.width,j.height)}for(let j=0,Z=Ke.length;j<Z;j++)ve=Ke[j],Oe?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,oe,Ne,ve):t.texImage2D(r.TEXTURE_2D,j,De,oe,Ne,ve);T.generateMipmaps=!1}else if(Oe){if(ut){const j=Re(ie);t.texStorage2D(r.TEXTURE_2D,le,De,j.width,j.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Ne,ie)}else t.texImage2D(r.TEXTURE_2D,0,De,oe,Ne,ie);m(T)&&p(Q),he.__version=K.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ee(C,T,G){if(T.image.length!==6)return;const Q=et(C,T),J=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const K=n.get(J);if(J.version!==K.__version||Q===!0){t.activeTexture(r.TEXTURE0+G);const he=ot.getPrimaries(ot.workingColorSpace),ae=T.colorSpace===ur?null:ot.getPrimaries(T.colorSpace),pe=T.colorSpace===ur||he===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,ie=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!Ye&&!ie?oe[Z]=g(T.image[Z],!0,i.maxCubemapSize):oe[Z]=ie?T.image[Z].image:T.image[Z],oe[Z]=at(T,oe[Z]);const Ne=oe[0],De=s.convert(T.format,T.colorSpace),ve=s.convert(T.type),Ke=y(T.internalFormat,De,ve,T.colorSpace),Oe=T.isVideoTexture!==!0,ut=K.__version===void 0||Q===!0,D=J.dataReady;let le=R(T,Ne);Ie(r.TEXTURE_CUBE_MAP,T);let j;if(Ye){Oe&&ut&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Ke,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){j=oe[Z].mipmaps;for(let ce=0;ce<j.length;ce++){const fe=j[ce];T.format!==pi?De!==null?Oe?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,fe.width,fe.height,De,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Ke,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,fe.width,fe.height,De,ve,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Ke,fe.width,fe.height,0,De,ve,fe.data)}}}else{if(j=T.mipmaps,Oe&&ut){j.length>0&&le++;const Z=Re(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Oe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,De,ve,oe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,oe[Z].width,oe[Z].height,0,De,ve,oe[Z].data);for(let ce=0;ce<j.length;ce++){const Be=j[ce].image[Z].image;Oe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Be.width,Be.height,De,ve,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Ke,Be.width,Be.height,0,De,ve,Be.data)}}else{Oe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,ve,oe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,De,ve,oe[Z]);for(let ce=0;ce<j.length;ce++){const fe=j[ce];Oe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,De,ve,fe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Ke,De,ve,fe.image[Z])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),K.__version=J.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ge(C,T,G,Q,J,K){const he=s.convert(G.format,G.colorSpace),ae=s.convert(G.type),pe=y(G.internalFormat,he,ae,G.colorSpace),Ye=n.get(T),ie=n.get(G);if(ie.__renderTarget=T,!Ye.__hasExternalTextures){const oe=Math.max(1,T.width>>K),Ne=Math.max(1,T.height>>K);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,K,pe,oe,Ne,T.depth,0,he,ae,null):t.texImage2D(J,K,pe,oe,Ne,0,he,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),k(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,ie.__webglTexture,0,Fe(T)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,ie.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(C,T,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){const Q=T.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=x(T.stencilBuffer,J),he=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=Fe(T);k(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,K,T.width,T.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,C)}else{const Q=T.textures;for(let J=0;J<Q.length;J++){const K=Q[J],he=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),pe=y(K.internalFormat,he,ae,K.colorSpace),Ye=Fe(T);G&&k(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,pe,T.width,T.height):k(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,pe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const J=Q.__webglTexture,K=Fe(T);if(T.depthTexture.format===mo)k(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(T.depthTexture.format===Po)k(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function we(C){const T=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=Q}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");be(T.__webglFramebuffer,C)}else if(G){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=r.createRenderbuffer(),ne(T.__webglDepthbuffer[Q],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ne(T.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(C,T,G){const Q=n.get(C);T!==void 0&&ge(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&we(C)}function tt(C){const T=C.texture,G=n.get(C),Q=n.get(T);C.addEventListener("dispose",M);const J=C.textures,K=C.isWebGLCubeRenderTarget===!0,he=J.length>1;if(he||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=T.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let pe=0;pe<T.mipmaps.length;pe++)G.__webglFramebuffer[ae][pe]=r.createFramebuffer()}else G.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<T.mipmaps.length;ae++)G.__webglFramebuffer[ae]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(he)for(let ae=0,pe=J.length;ae<pe;ae++){const Ye=n.get(J[ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&k(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const pe=J[ae];G.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);const Ye=s.convert(pe.format,pe.colorSpace),ie=s.convert(pe.type),oe=y(pe.internalFormat,Ye,ie,pe.colorSpace,C.isXRRenderTarget===!0),Ne=Fe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,oe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ne(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,T);for(let ae=0;ae<6;ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)ge(G.__webglFramebuffer[ae][pe],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else ge(G.__webglFramebuffer[ae],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ae=0,pe=J.length;ae<pe;ae++){const Ye=J[ae],ie=n.get(Ye);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),Ie(r.TEXTURE_2D,Ye),ge(G.__webglFramebuffer,C,Ye,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),m(Ye)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Ie(ae,T),T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)ge(G.__webglFramebuffer[pe],C,T,r.COLOR_ATTACHMENT0,ae,pe);else ge(G.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,ae,0);m(T)&&p(ae),t.unbindTexture()}C.depthBuffer&&we(C)}function We(C){const T=C.textures;for(let G=0,Q=T.length;G<Q;G++){const J=T[G];if(m(J)){const K=v(C),he=n.get(J).__webglTexture;t.bindTexture(K,he),p(K),t.unbindTexture()}}}const Le=[],U=[];function bt(C){if(C.samples>0){if(k(C)===!1){const T=C.textures,G=C.width,Q=C.height;let J=r.COLOR_BUFFER_BIT;const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=n.get(C),ae=T.length>1;if(ae)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ye=n.get(T[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ye,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,J,r.NEAREST),c===!0&&(Le.length=0,U.length=0,Le.push(r.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Le.push(K),U.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ye=n.get(T[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,Ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Fe(C){return Math.min(i.maxSamples,C.samples)}function k(C){const T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Te(C){const T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function at(C,T){const G=C.colorSpace,Q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==bn&&G!==ur&&(ot.getTransfer(G)===yt?(Q!==pi||J!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=k}function ib(r,e){function t(n,i=ur){let s;const o=ot.getTransfer(i);if(n===Mr)return r.UNSIGNED_BYTE;if(n===of)return r.UNSIGNED_SHORT_4_4_4_4;if(n===af)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Cm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===wm)return r.BYTE;if(n===Rm)return r.SHORT;if(n===Ia)return r.UNSIGNED_SHORT;if(n===sf)return r.INT;if(n===Rs)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===qa)return r.HALF_FLOAT;if(n===Pm)return r.ALPHA;if(n===Lm)return r.RGB;if(n===pi)return r.RGBA;if(n===Dm)return r.LUMINANCE;if(n===Im)return r.LUMINANCE_ALPHA;if(n===mo)return r.DEPTH_COMPONENT;if(n===Po)return r.DEPTH_STENCIL;if(n===cf)return r.RED;if(n===lf)return r.RED_INTEGER;if(n===Nm)return r.RG;if(n===uf)return r.RG_INTEGER;if(n===hf)return r.RGBA_INTEGER;if(n===Hc||n===Vc||n===Gc||n===Wc)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ku||n===Zu||n===Ju||n===Qu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ku)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ju)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eh||n===th||n===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===eh||n===th)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ih||n===rh||n===sh||n===oh||n===ah||n===ch||n===lh||n===uh||n===hh||n===fh||n===dh||n===ph||n===mh||n===_h)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ih)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ah)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ch)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ph)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_h)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===gh||n===xh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xc)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Um||n===vh||n===yh||n===Mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class rb extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _r extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sb={type:"move"};class cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _r;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new cn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zr({vertexShader:ob,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new El(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lb extends Us{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const g=new cb,m=t.getContextAttributes();let p=null,v=null;const y=[],x=[],R=new Ge;let A=null;const M=new xn;M.viewport=new dt;const w=new xn;w.viewport=new dt;const S=[M,w],b=new rb;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=y[$];return ee===void 0&&(ee=new cu,y[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=y[$];return ee===void 0&&(ee=new cu,y[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=y[$];return ee===void 0&&(ee=new cu,y[$]=ee),ee.getHandSpace()};function B($){const ee=x.indexOf($.inputSource);if(ee===-1)return;const ge=y[ee];ge!==void 0&&(ge.update($.inputSource,$.frame,l||o),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let $=0;$<y.length;$++){const ee=x[$];ee!==null&&(x[$]=null,y[$].disconnect(ee))}P=null,N=null,g.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Cs(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Mr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ge=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Po:mo,ge=m.stencil?Co:Rs);const be={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Cs(f.textureWidth,f.textureHeight,{format:pi,type:Mr,depthTexture:new $m(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X($){for(let ee=0;ee<$.removed.length;ee++){const ge=$.removed[ee],ne=x.indexOf(ge);ne>=0&&(x[ne]=null,y[ne].disconnect(ge))}for(let ee=0;ee<$.added.length;ee++){const ge=$.added[ee];let ne=x.indexOf(ge);if(ne===-1){for(let we=0;we<y.length;we++)if(we>=x.length){x.push(ge),ne=we;break}else if(x[we]===null){x[we]=ge,ne=we;break}if(ne===-1)break}const be=y[ne];be&&be.connect(ge)}}const q=new I,Y=new I;function V($,ee,ge){q.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ge.matrixWorld);const ne=q.distanceTo(Y),be=ee.projectionMatrix.elements,we=ge.projectionMatrix.elements,Ve=be[14]/(be[10]-1),tt=be[14]/(be[10]+1),We=(be[9]+1)/be[5],Le=(be[9]-1)/be[5],U=(be[8]-1)/be[0],bt=(we[8]+1)/we[0],Fe=Ve*U,k=Ve*bt,Te=ne/(-U+bt),at=Te*-U;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(at),$.translateZ(Te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Re=Ve+Te,C=tt+Te,T=Fe-at,G=k+(ne-at),Q=We*tt/C*Re,J=Le*tt/C*Re;$.projectionMatrix.makePerspective(T,G,Q,J,Re,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ee=$.near,ge=$.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),b.near=w.near=M.near=ee,b.far=w.far=M.far=ge,(P!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,N=b.far),M.layers.mask=$.layers.mask|2,w.layers.mask=$.layers.mask|4,b.layers.mask=M.layers.mask|w.layers.mask;const ne=$.parent,be=b.cameras;te(b,ne);for(let we=0;we<be.length;we++)te(be[we],ne);be.length===2?V(b,M,w):b.projectionMatrix.copy(M.projectionMatrix),L($,b,ne)};function L($,ee,ge){ge===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Lo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let ue=null;function Ie($,ee){if(u=ee.getViewerPose(l||o),_=ee,u!==null){const ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ne=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,ne=!0);for(let we=0;we<ge.length;we++){const Ve=ge[we];let tt=null;if(d!==null)tt=d.getViewport(Ve);else{const Le=h.getViewSubImage(f,Ve);tt=Le.viewport,we===0&&(e.setRenderTargetTextures(v,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(v))}let We=S[we];We===void 0&&(We=new xn,We.layers.enable(we),We.viewport=new dt,S[we]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(tt.x,tt.y,tt.width,tt.height),we===0&&(b.matrix.copy(We.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ne===!0&&b.cameras.push(We)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const we=h.getDepthInformation(ge[0]);we&&we.isValid&&we.texture&&g.init(e,we,i.renderState)}}for(let ge=0;ge<y.length;ge++){const ne=x[ge],be=y[ge];ne!==null&&be!==void 0&&be.update(ne,ee,l||o)}ue&&ue($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const et=new jm;et.setAnimationLoop(Ie),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}}const as=new ji,ub=new $e;function hb(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,as.copy(x),as.x*=-1,as.y*=-1,as.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(ub.makeRotationFromEuler(as)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fb(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(_(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function u(v){const y=h();v.__bindingPointIndex=y;const x=r.createBuffer(),R=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],x=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,M=x.length;A<M;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,b=w.length;S<b;S++){const P=w[S];if(d(P,A,S,R)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let X=0;X<B.length;X++){const q=B[X],Y=g(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,N+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,y,x,R){const A=v.value,M=y+"_"+x;if(R[M]===void 0)return typeof A=="number"||typeof A=="boolean"?R[M]=A:R[M]=A.clone(),!0;{const w=R[M];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return R[M]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function _(v){const y=v.uniforms;let x=0;const R=16;for(let M=0,w=y.length;M<w;M++){const S=Array.isArray(y[M])?y[M]:[y[M]];for(let b=0,P=S.length;b<P;b++){const N=S[b],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,X=B.length;W<X;W++){const q=B[W],Y=g(q),V=x%R,te=V%Y.boundary,L=V+te;x+=te,L!==0&&R-L<Y.storage&&(x+=R-L),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Y.storage}}}const A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class e_{constructor(e={}){const{canvas:t=tx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=qr,this.toneMappingExposure=1;const x=this;let R=!1,A=0,M=0,w=null,S=-1,b=null;const P=new dt,N=new dt;let B=null;const W=new Ue(0);let X=0,q=t.width,Y=t.height,V=1,te=null,L=null;const ue=new dt(0,0,q,Y),Ie=new dt(0,0,q,Y);let et=!1;const $=new pf;let ee=!1,ge=!1;const ne=new $e,be=new $e,we=new I,Ve=new dt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Le(){return w===null?V:1}let U=n;function bt(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nf}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){const O="webgl2";if(U=bt(O,E),U===null)throw bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Fe,k,Te,at,Re,C,T,G,Q,J,K,he,ae,pe,Ye,ie,oe,Ne,De,ve,Ke,Oe,ut,D;function le(){Fe=new xM(U),Fe.init(),Oe=new ib(U,Fe),k=new fM(U,Fe,e,Oe),Te=new eb(U,Fe),k.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),at=new MM(U),Re=new kS,C=new nb(U,Fe,Te,Re,k,Oe,at),T=new pM(x),G=new gM(x),Q=new Rx(U),ut=new uM(U,Q),J=new vM(U,Q,at,ut),K=new bM(U,J,Q,at),De=new SM(U,k,C),ie=new dM(Re),he=new BS(x,T,G,Fe,k,ut,ie),ae=new hb(x,Re),pe=new HS,Ye=new YS(Fe),Ne=new lM(x,T,G,Te,K,d,c),oe=new JS(x,K,k),D=new fb(U,at,k,Te),ve=new hM(U,Fe,at),Ke=new yM(U,Fe,at),at.programs=he.programs,x.capabilities=k,x.extensions=Fe,x.properties=Re,x.renderLists=pe,x.shadowMap=oe,x.state=Te,x.info=at}le();const j=new lb(x,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(q,Y,!1))},this.getSize=function(E){return E.set(q,Y)},this.setSize=function(E,O,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,Y=O,t.width=Math.floor(E*V),t.height=Math.floor(O*V),z===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(q*V,Y*V).floor()},this.setDrawingBufferSize=function(E,O,z){q=E,Y=O,V=z,t.width=Math.floor(E*z),t.height=Math.floor(O*z),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,O,z,H){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,O,z,H),Te.viewport(P.copy(ue).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ie)},this.setScissor=function(E,O,z,H){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,O,z,H),Te.scissor(N.copy(Ie).multiplyScalar(V).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){Te.setScissorTest(et=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){L=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,O=!0,z=!0){let H=0;if(E){let F=!1;if(w!==null){const re=w.texture.format;F=re===hf||re===uf||re===lf}if(F){const re=w.texture.type,se=re===Mr||re===Rs||re===Ia||re===Co||re===of||re===af,de=Ne.getClearColor(),ye=Ne.getClearAlpha(),ke=de.r,qe=de.g,Se=de.b;se?(_[0]=ke,_[1]=qe,_[2]=Se,_[3]=ye,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=ke,g[1]=qe,g[2]=Se,g[3]=ye,U.clearBufferiv(U.COLOR,0,g))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT),z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),pe.dispose(),Ye.dispose(),Re.dispose(),T.dispose(),G.dispose(),K.dispose(),ut.dispose(),D.dispose(),he.dispose(),j.dispose(),j.removeEventListener("sessionstart",me),j.removeEventListener("sessionend",Xe),Ce.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=at.autoReset,O=oe.enabled,z=oe.autoUpdate,H=oe.needsUpdate,F=oe.type;le(),at.autoReset=E,oe.enabled=O,oe.autoUpdate=z,oe.needsUpdate=H,oe.type=F}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const O=E.target;O.removeEventListener("dispose",Be),ht(O)}function ht(E){kt(E),Re.remove(E)}function kt(E){const O=Re.get(E).programs;O!==void 0&&(O.forEach(function(z){he.releaseProgram(z)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,z,H,F,re){O===null&&(O=tt);const se=F.isMesh&&F.matrixWorld.determinant()<0,de=qn(E,O,z,H,F);Te.setMaterial(H,se);let ye=z.index,ke=1;if(H.wireframe===!0){if(ye=J.getWireframeAttribute(z),ye===void 0)return;ke=2}const qe=z.drawRange,Se=z.attributes.position;let je=qe.start*ke,ft=(qe.start+qe.count)*ke;re!==null&&(je=Math.max(je,re.start*ke),ft=Math.min(ft,(re.start+re.count)*ke)),ye!==null?(je=Math.max(je,0),ft=Math.min(ft,ye.count)):Se!=null&&(je=Math.max(je,0),ft=Math.min(ft,Se.count));const mt=ft-je;if(mt<0||mt===1/0)return;ut.setup(F,H,de,z,ye);let qt,_t=ve;if(ye!==null&&(qt=Q.get(ye),_t=Ke,_t.setIndex(qt)),F.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Le()),_t.setMode(U.LINES)):_t.setMode(U.TRIANGLES);else if(F.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),Te.setLineWidth(Pe*Le()),F.isLineSegments?_t.setMode(U.LINES):F.isLineLoop?_t.setMode(U.LINE_LOOP):_t.setMode(U.LINE_STRIP)}else F.isPoints?_t.setMode(U.POINTS):F.isSprite&&_t.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)_t.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))_t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,Qi=F._multiDrawCounts,gt=F._multiDrawCount,Mi=ye?Q.get(ye).bytesPerElement:1,Bs=Re.get(H).currentProgram.getUniforms();for(let Yn=0;Yn<gt;Yn++)Bs.setValue(U,"_gl_DrawID",Yn),_t.render(Pe[Yn]/Mi,Qi[Yn])}else if(F.isInstancedMesh)_t.renderInstances(je,mt,F.count);else if(z.isInstancedBufferGeometry){const Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Qi=Math.min(z.instanceCount,Pe);_t.renderInstances(je,mt,Qi)}else _t.render(je,mt)};function xe(E,O,z){E.transparent===!0&&E.side===Ri&&E.forceSinglePass===!1?(E.side=On,E.needsUpdate=!0,Tt(E,O,z),E.side=yr,E.needsUpdate=!0,Tt(E,O,z),E.side=Ri):Tt(E,O,z)}this.compile=function(E,O,z=null){z===null&&(z=E),p=Ye.get(z),p.init(O),y.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let se=0;se<re.length;se++){const de=re[se];xe(de,z,F),H.add(de)}else xe(re,z,F),H.add(re)}),y.pop(),p=null,H},this.compileAsync=function(E,O,z=null){const H=this.compile(E,O,z);return new Promise(F=>{function re(){if(H.forEach(function(se){Re.get(se).currentProgram.isReady()&&H.delete(se)}),H.size===0){F(E);return}setTimeout(re,10)}Fe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ae=null;function Ze(E){Ae&&Ae(E)}function me(){Ce.stop()}function Xe(){Ce.start()}const Ce=new jm;Ce.setAnimationLoop(Ze),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(E){Ae=E,j.setAnimationLoop(E),E===null?Ce.stop():Ce.start()},j.addEventListener("sessionstart",me),j.addEventListener("sessionend",Xe),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,w),p=Ye.get(E,y.length),p.init(O),y.push(p),be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(be),ge=this.localClippingEnabled,ee=ie.init(this.clippingPlanes,ge),m=pe.get(E,v.length),m.init(),v.push(m),j.enabled===!0&&j.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&He(re,O,-1/0,x.sortObjects)}He(E,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,L),We=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,We&&Ne.addToRenderList(m,E),this.info.render.frame++,ee===!0&&ie.beginShadows();const z=p.state.shadowsArray;oe.render(z,E,O),ee===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){const re=O.cameras;if(F.length>0)for(let se=0,de=re.length;se<de;se++){const ye=re[se];nt(H,F,E,ye)}We&&Ne.render(E);for(let se=0,de=re.length;se<de;se++){const ye=re[se];Vt(m,E,ye,ye.viewport)}}else F.length>0&&nt(H,F,E,O),We&&Ne.render(E),Vt(m,E,O);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,O),ut.resetDefaultState(),S=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],ee===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function He(E,O,z,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){H&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const se=K.update(E),de=E.material;de.visible&&m.push(E,se,de,z,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const se=K.update(E),de=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ve.copy(se.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(de)){const ye=se.groups;for(let ke=0,qe=ye.length;ke<qe;ke++){const Se=ye[ke],je=de[Se.materialIndex];je&&je.visible&&m.push(E,se,je,z,Ve.z,Se)}}else de.visible&&m.push(E,se,de,z,Ve.z,null)}}const re=E.children;for(let se=0,de=re.length;se<de;se++)He(re[se],O,z,H)}function Vt(E,O,z,H){const F=E.opaque,re=E.transmissive,se=E.transparent;p.setupLightsView(z),ee===!0&&ie.setGlobalState(x.clippingPlanes,z),H&&Te.viewport(P.copy(H)),F.length>0&&wt(F,O,z),re.length>0&&wt(re,O,z),se.length>0&&wt(se,O,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function nt(E,O,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Cs(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?qa:Mr,minFilter:dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const re=p.state.transmissionRenderTarget[H.id],se=H.viewport||P;re.setSize(se.z,se.w);const de=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(W),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),We&&Ne.render(z);const ye=x.toneMapping;x.toneMapping=qr;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ee===!0&&ie.setGlobalState(x.clippingPlanes,H),wt(E,z,H),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Se=0,je=O.length;Se<je;Se++){const ft=O[Se],mt=ft.object,qt=ft.geometry,_t=ft.material,Pe=ft.group;if(_t.side===Ri&&mt.layers.test(H.layers)){const Qi=_t.side;_t.side=On,_t.needsUpdate=!0,Kt(mt,z,H,qt,_t,Pe),_t.side=Qi,_t.needsUpdate=!0,qe=!0}}qe===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}x.setRenderTarget(de),x.setClearColor(W,X),ke!==void 0&&(H.viewport=ke),x.toneMapping=ye}function wt(E,O,z){const H=O.isScene===!0?O.overrideMaterial:null;for(let F=0,re=E.length;F<re;F++){const se=E[F],de=se.object,ye=se.geometry,ke=H===null?se.material:H,qe=se.group;de.layers.test(z.layers)&&Kt(de,O,z,ye,ke,qe)}}function Kt(E,O,z,H,F,re){E.onBeforeRender(x,O,z,H,F,re),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,O,z,H,E,re),F.transparent===!0&&F.side===Ri&&F.forceSinglePass===!1?(F.side=On,F.needsUpdate=!0,x.renderBufferDirect(z,O,H,F,E,re),F.side=yr,F.needsUpdate=!0,x.renderBufferDirect(z,O,H,F,E,re),F.side=Ri):x.renderBufferDirect(z,O,H,F,E,re),E.onAfterRender(x,O,z,H,F,re)}function Tt(E,O,z){O.isScene!==!0&&(O=tt);const H=Re.get(E),F=p.state.lights,re=p.state.shadowsArray,se=F.state.version,de=he.getParameters(E,F.state,re,O,z),ye=he.getProgramCacheKey(de);let ke=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?G:T).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Be),ke=new Map,H.programs=ke);let qe=ke.get(ye);if(qe!==void 0){if(H.currentProgram===qe&&H.lightsStateVersion===se)return pt(E,de),qe}else de.uniforms=he.getUniforms(E),E.onBeforeCompile(de,x),qe=he.acquireProgram(de,ye),ke.set(ye,qe),H.uniforms=de.uniforms;const Se=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=ie.uniform),pt(E,de),H.needsLights=En(E),H.lightsStateVersion=se,H.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=qe,H.uniformsList=null,qe}function Et(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=qc.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function pt(E,O){const z=Re.get(E);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function qn(E,O,z,H,F){O.isScene!==!0&&(O=tt),C.resetTextureUnits();const re=O.fog,se=H.isMeshStandardMaterial?O.environment:null,de=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:bn,ye=(H.isMeshStandardMaterial?G:T).get(H.envMap||se),ke=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,qe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,ft=!!z.morphAttributes.color;let mt=qr;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=x.toneMapping);const qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_t=qt!==void 0?qt.length:0,Pe=Re.get(H),Qi=p.state.lights;if(ee===!0&&(ge===!0||E!==b)){const oi=E===b&&H.id===S;ie.setState(H,E,oi)}let gt=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Qi.state.version||Pe.outputColorSpace!==de||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==ye||H.fog===!0&&Pe.fog!==re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==ke||Pe.vertexTangents!==qe||Pe.morphTargets!==Se||Pe.morphNormals!==je||Pe.morphColors!==ft||Pe.toneMapping!==mt||Pe.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,Pe.__version=H.version);let Mi=Pe.currentProgram;gt===!0&&(Mi=Tt(H,O,F));let Bs=!1,Yn=!1,jo=!1;const Pt=Mi.getUniforms(),Ui=Pe.uniforms;if(Te.useProgram(Mi.program)&&(Bs=!0,Yn=!0,jo=!0),H.id!==S&&(S=H.id,Yn=!0),Bs||b!==E){Te.buffers.depth.getReversed()?(ne.copy(E.projectionMatrix),ix(ne),rx(ne),Pt.setValue(U,"projectionMatrix",ne)):Pt.setValue(U,"projectionMatrix",E.projectionMatrix),Pt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Ar=Pt.map.cameraPosition;Ar!==void 0&&Ar.setValue(U,we.setFromMatrixPosition(E.matrixWorld)),k.logarithmicDepthBuffer&&Pt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Pt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Yn=!0,jo=!0)}if(F.isSkinnedMesh){Pt.setOptional(U,F,"bindMatrix"),Pt.setOptional(U,F,"bindMatrixInverse");const oi=F.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),Pt.setValue(U,"boneTexture",oi.boneTexture,C))}F.isBatchedMesh&&(Pt.setOptional(U,F,"batchingTexture"),Pt.setValue(U,"batchingTexture",F._matricesTexture,C),Pt.setOptional(U,F,"batchingIdTexture"),Pt.setValue(U,"batchingIdTexture",F._indirectTexture,C),Pt.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&Pt.setValue(U,"batchingColorTexture",F._colorsTexture,C));const $o=z.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0)&&De.update(F,z,Mi),(Yn||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,Pt.setValue(U,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ui.envMap.value=ye,Ui.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Ui.envMapIntensity.value=O.environmentIntensity),Yn&&(Pt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Ct(Ui,jo),re&&H.fog===!0&&ae.refreshFogUniforms(Ui,re),ae.refreshMaterialUniforms(Ui,H,V,Y,p.state.transmissionRenderTarget[E.id]),qc.upload(U,Et(Pe),Ui,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qc.upload(U,Et(Pe),Ui,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Pt.setValue(U,"center",F.center),Pt.setValue(U,"modelViewMatrix",F.modelViewMatrix),Pt.setValue(U,"normalMatrix",F.normalMatrix),Pt.setValue(U,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const oi=H.uniformsGroups;for(let Ar=0,wr=oi.length;Ar<wr;Ar++){const sd=oi[Ar];D.update(sd,Mi),D.bind(sd,Mi)}}return Mi}function Ct(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function En(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,O,z){Re.get(E.texture).__webglTexture=O,Re.get(E.depthTexture).__webglTexture=z;const H=Re.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const z=Re.get(E);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,z=0){w=E,A=O,M=z;let H=!0,F=null,re=!1,se=!1;if(E){const ye=Re.get(E);if(ye.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(ye.__hasExternalTextures)C.rebindTextures(E,Re.get(E.texture).__webglTexture,Re.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Se=E.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Re.has(Se)&&(E.width!==Se.image.width||E.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(se=!0);const qe=Re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[O])?F=qe[O][z]:F=qe[O],re=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=Re.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?F=qe[z]:F=qe,P.copy(E.viewport),N.copy(E.scissor),B=E.scissorTest}else P.copy(ue).multiplyScalar(V).floor(),N.copy(Ie).multiplyScalar(V).floor(),B=et;if(Te.bindFramebuffer(U.FRAMEBUFFER,F)&&H&&Te.drawBuffers(E,F),Te.viewport(P),Te.scissor(N),Te.setScissorTest(B),re){const ye=Re.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,z)}else if(se){const ye=Re.get(E.texture),ke=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,ke)}S=-1},this.readRenderTargetPixels=function(E,O,z,H,F,re,se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){Te.bindFramebuffer(U.FRAMEBUFFER,de);try{const ye=E.texture,ke=ye.format,qe=ye.type;if(!k.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&z>=0&&z<=E.height-F&&U.readPixels(O,z,H,F,Oe.convert(ke),Oe.convert(qe),re)}finally{const ye=w!==null?Re.get(w).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,O,z,H,F,re,se){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){const ye=E.texture,ke=ye.format,qe=ye.type;if(!k.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-H&&z>=0&&z<=E.height-F){Te.bindFramebuffer(U.FRAMEBUFFER,de);const Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(O,z,H,F,Oe.convert(ke),Oe.convert(qe),0);const je=w!==null?Re.get(w).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,je);const ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nx(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Se),U.deleteSync(ft),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,z=0){E.isTexture!==!0&&(la("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(E.image.width*H),re=Math.floor(E.image.height*H),se=O!==null?O.x:0,de=O!==null?O.y:0;C.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,se,de,F,re),Te.unbindTexture()},this.copyTextureToTexture=function(E,O,z=null,H=null,F=0){E.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],O=arguments[2],F=arguments[3]||0,z=null);let re,se,de,ye,ke,qe,Se,je,ft;const mt=E.isCompressedTexture?E.mipmaps[F]:E.image;z!==null?(re=z.max.x-z.min.x,se=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,ye=z.min.x,ke=z.min.y,qe=z.isBox3?z.min.z:0):(re=mt.width,se=mt.height,de=mt.depth||1,ye=0,ke=0,qe=0),H!==null?(Se=H.x,je=H.y,ft=H.z):(Se=0,je=0,ft=0);const qt=Oe.convert(O.format),_t=Oe.convert(O.type);let Pe;O.isData3DTexture?(C.setTexture3D(O,0),Pe=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Pe=U.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Pe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Qi=U.getParameter(U.UNPACK_ROW_LENGTH),gt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mi=U.getParameter(U.UNPACK_SKIP_PIXELS),Bs=U.getParameter(U.UNPACK_SKIP_ROWS),Yn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qe);const jo=E.isDataArrayTexture||E.isData3DTexture,Pt=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Ui=Re.get(E),$o=Re.get(O),oi=Re.get(Ui.__renderTarget),Ar=Re.get($o.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,oi.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let wr=0;wr<de;wr++)jo&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(E).__webglTexture,F,qe+wr),E.isDepthTexture?(Pt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,F,ft+wr),U.blitFramebuffer(ye,ke,re,se,Se,je,re,se,U.DEPTH_BUFFER_BIT,U.NEAREST)):Pt?U.copyTexSubImage3D(Pe,F,Se,je,ft+wr,ye,ke,re,se):U.copyTexSubImage2D(Pe,F,Se,je,ft+wr,ye,ke,re,se);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Pt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Pe,F,Se,je,ft,re,se,de,qt,_t,mt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,F,Se,je,ft,re,se,de,qt,mt.data):U.texSubImage3D(Pe,F,Se,je,ft,re,se,de,qt,_t,mt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,Se,je,re,se,qt,_t,mt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,Se,je,mt.width,mt.height,qt,mt.data):U.texSubImage2D(U.TEXTURE_2D,F,Se,je,re,se,qt,_t,mt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Qi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yn),F===0&&O.generateMipmaps&&U.generateMipmap(Pe),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,O,z=null,H=null,F=0){return E.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],O=arguments[3],F=arguments[4]||0),la('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,z,H,F)},this.initRenderTarget=function(E){Re.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){A=0,M=0,w=null,Te.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class gf{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new gf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xf extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class db{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new I;class vf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const op=new I,ap=new dt,cp=new dt,pb=new I,lp=new $e,mc=new I,lu=new Ki,up=new $e,uu=new Vo;class mb extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ld,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingSphere.expandByPoint(mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lu.copy(this.boundingSphere),lu.applyMatrix4(i),e.ray.intersectsSphere(lu)!==!1&&(up.copy(i).invert(),uu.copy(e.ray).applyMatrix4(up),!(this.boundingBox!==null&&uu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ld?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===A0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ap.fromBufferAttribute(i.attributes.skinIndex,e),cp.fromBufferAttribute(i.attributes.skinWeight,e),op.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=cp.getComponent(s);if(o!==0){const a=ap.getComponent(s);lp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(pb.copy(op).applyMatrix4(lp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class t_ extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class n_ extends cn{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Fn,u=Fn,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hp=new $e,_b=new $e;class yf{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:_b;hp.multiplyMatrices(a,t[s]),hp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new n_(t,e,e,pi,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new t_),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Eh extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qs=new $e,fp=new $e,_c=[],dp=new yi,gb=new $e,ea=new Mt,ta=new Ki;class xb extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),dp.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(dp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),ta.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Qs),fp.multiplyMatrices(n,Qs),ea.matrixWorld=fp,ea.raycast(e,_c);for(let o=0,a=_c.length;o<a;o++){const c=_c[o];c.instanceId=s,c.object=this,t.push(c)}_c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new n_(new Float32Array(i*this.count),i,this.count,cf,Li));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Mf extends Wi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new I,cl=new I,pp=new $e,na=new Vo,gc=new Ki,hu=new I,mp=new I;class Sf extends Nt{constructor(e=new Tn,t=new Mf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)al.fromBufferAttribute(t,i-1),cl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=al.distanceTo(cl);e.setAttribute("lineDistance",new zn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;pp.copy(i).invert(),na.copy(e.ray).applyMatrix4(pp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=u.getX(g),v=u.getX(g+1),y=xc(this,e,na,c,p,v);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=xc(this,e,na,c,g,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=xc(this,e,na,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=xc(this,e,na,c,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xc(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(al.fromBufferAttribute(o,i),cl.fromBufferAttribute(o,s),t.distanceSqToSegment(al,cl,hu,mp)>n)return;hu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(hu);if(!(c<e.near||c>e.far))return{distance:c,point:mp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const _p=new I,gp=new I;class i_ extends Sf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_p.fromBufferAttribute(t,i),gp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_p.distanceTo(gp);e.setAttribute("lineDistance",new zn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vb extends Sf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bf extends Wi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xp=new $e,Ah=new Vo,vc=new Ki,yc=new I;class r_ extends Nt{constructor(e=new Tn,t=new bf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(i),vc.radius+=s,e.ray.intersectsSphere(vc)===!1)return;xp.copy(i).invert(),Ah.copy(e.ray).applyMatrix4(xp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);yc.fromBufferAttribute(h,m),vp(yc,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)yc.fromBufferAttribute(h,_),vp(yc,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vp(r,e,t,n,i,s,o){const a=Ah.distanceSqToPoint(r);if(a<t){const c=new I;Ah.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}const Mc=new I,Sc=new I,fu=new I,bc=new di;class yb extends Tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(_o*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:p}=bc;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),bc.getNormal(fu),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const y=(v+1)%3,x=h[v],R=h[y],A=bc[u[v]],M=bc[u[y]],w=`${x}_${R}`,S=`${R}_${x}`;S in f&&f[S]?(fu.dot(f[S].normal)<=s&&(d.push(A.x,A.y,A.z),d.push(M.x,M.y,M.z)),f[S]=null):w in f||(f[w]={index0:l[v],index1:l[y],normal:fu.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:m}=f[_];Mc.fromBufferAttribute(a,g),Sc.fromBufferAttribute(a,m),d.push(Mc.x,Mc.y,Mc.z),d.push(Sc.x,Sc.y,Sc.z)}this.setAttribute("position",new zn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Tf extends Tn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(A+x,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=u[p][v+1],x=u[p][v],R=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&d.push(y,x,A),(p!==n-1||c<Math.PI)&&d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sr extends Wi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fm,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends Sr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Tc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Mb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Sb(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function yp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function s_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ya{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bb extends Ya{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ud,endingEnd:ud}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hd:s=e,a=2*t-n;break;case fd:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hd:o=e,c=2*n-t;break;case fd:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,v=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,y=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let R=0;R!==a;++R)s[R]=p*o[u+R]+v*o[l+R]+y*o[c+R]+x*o[h+R];return s}}class Tb extends Ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class Eb extends Ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tc(t,this.TimeBufferType),this.values=Tc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tc(e.times,Array),values:Tc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case Ul:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Mb(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ul,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=Ua;class Xo extends Ji{constructor(e,t,n){super(e,t,n)}}Xo.prototype.ValueTypeName="bool";Xo.prototype.ValueBufferType=Array;Xo.prototype.DefaultInterpolation=Na;Xo.prototype.InterpolantFactoryMethodLinear=void 0;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;class o_ extends Ji{}o_.prototype.ValueTypeName="color";class Io extends Ji{}Io.prototype.ValueTypeName="number";class Ab extends Ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Yi.slerpFlat(s,0,o,l-a,o,l,c);return s}}class No extends Ji{InterpolantFactoryMethodLinear(e){return new Ab(this.times,this.values,this.getValueSize(),e)}}No.prototype.ValueTypeName="quaternion";No.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends Ji{constructor(e,t,n){super(e,t,n)}}qo.prototype.ValueTypeName="string";qo.prototype.ValueBufferType=Array;qo.prototype.DefaultInterpolation=Na;qo.prototype.InterpolantFactoryMethodLinear=void 0;qo.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends Ji{}Uo.prototype.ValueTypeName="vector";class wb{constructor(e="",t=-1,n=[],i=w0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Cb(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Sb(c);c=yp(c,1,u),l=yp(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Io(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];s_(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let v=0;v!==f[_].morphTargets.length;++v){const y=f[_];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new Io(".morphTargetInfluence["+g+"]",m,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Uo,d+".position",f,"pos",i),n(No,d+".quaternion",f,"rot",i),n(Uo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Io;case"vector":case"vector2":case"vector3":case"vector4":return Uo;case"color":return o_;case"quaternion":return No;case"bool":case"boolean":return Xo;case"string":return qo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Cb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rb(r.type);if(r.times===void 0){const t=[],n=[];s_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Br={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Pb{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Lb=new Pb;class Os{constructor(e){this.manager=e!==void 0?e:Lb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const sr={};class Db extends Error{constructor(e,t){super(e),this.response=t}}class ll extends Os{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Br.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(sr[e]!==void 0){sr[e].push({onLoad:t,onProgress:n,onError:i});return}sr[e]=[],sr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=sr[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,M=u.length;A<M;A++){const w=u[A];w.onProgress&&w.onProgress(R)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Db(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{Br.add(e,l);const u=sr[e];delete sr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=sr[e];if(u===void 0)throw this.manager.itemError(e),l;delete sr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ib extends Os{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Br.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Oa("img");function c(){u(),Br.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class a_ extends Os{constructor(e){super(e)}load(e,t,n,i){const s=new cn,o=new Ib(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class wl extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class c_ extends wl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const du=new $e,Mp=new I,Sp=new I;class Ef{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pf,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mp),Sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sp),t.updateMatrixWorld(),du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nb extends Ef{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Lo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ub extends wl{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Nb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bp=new $e,ia=new I,pu=new I;class Ob extends Ef{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),n.position.copy(ia),pu.copy(n.position),pu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pu),n.updateMatrixWorld(),i.makeTranslation(-ia.x,-ia.y,-ia.z),bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp)}}class l_ extends wl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ob}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fb extends Ef{constructor(){super(new mf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rl extends wl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Fb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class va{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bb extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Br.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Br.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Br.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Br.add(e,c),s.manager.itemStart(e)}}const Af="\\[\\]\\.:\\/",kb=new RegExp("["+Af+"]","g"),wf="[^"+Af+"]",zb="[^"+Af.replace("\\.","")+"]",Hb=/((?:WC+[\/:])*)/.source.replace("WC",wf),Vb=/(WCOD+)?/.source.replace("WCOD",zb),Gb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wf),Wb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wf),Xb=new RegExp("^"+Hb+Vb+Gb+Wb+"$"),qb=["material","materials","bones","map"];class Yb{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kb,"")}static parseTrackName(e){const t=Xb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);qb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=Yb;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Tp=new $e;class jb{constructor(e,t,n=0,i=1/0){this.ray=new Vo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new df,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tp),this}intersectObject(e,t=!0,n=[]){return wh(e,this,n,t),n.sort(Ep),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)wh(e[i],this,n,t);return n.sort(Ep),n}}function Ep(r,e){return r.distance-e.distance}function wh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)wh(s[o],e,t,!0)}}class Ap{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $b extends Us{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);const wp={type:"change"},Rf={type:"start"},u_={type:"end"},Ec=new Vo,Rp=new Bi,Kb=Math.cos(70*ii.DEG2RAD),Zt=new I,Bn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mu=1e-6;class Zb extends $b{constructor(e,t=null){super(e,t),this.state=St.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:ao.ROTATE,TWO:ao.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Yi,this._lastTargetPosition=new I,this._quat=new Yi().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ap,this._sphericalDelta=new Ap,this._scale=1,this._panOffset=new I,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new I,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qb.bind(this),this._onPointerDown=Jb.bind(this),this._onPointerUp=eT.bind(this),this._onContextMenu=aT.bind(this),this._onMouseWheel=iT.bind(this),this._onKeyDown=rT.bind(this),this._onTouchStart=sT.bind(this),this._onTouchMove=oT.bind(this),this._onMouseDown=tT.bind(this),this._onMouseMove=nT.bind(this),this._interceptControlDown=cT.bind(this),this._interceptControlUp=lT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wp),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),i<-Math.PI?i+=Bn:i>Math.PI&&(i-=Bn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Zt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ec.origin.copy(this.object.position),Ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ec.direction))<Kb?this.object.lookAt(this.target):(Rp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ec.intersectPlane(Rp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>mu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mu||this._lastTargetPosition.distanceToSquared(this.target)>mu?(this.dispatchEvent(wp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Zt.copy(i).sub(this.target);let s=Zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jb(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Qb(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function eT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(u_),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tT(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=St.DOLLY;break;case fo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=St.ROTATE}break;case fo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(Rf)}function nT(r){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function iT(r){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(r.preventDefault(),this.dispatchEvent(Rf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(u_))}function rT(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function sT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ao.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=St.TOUCH_ROTATE;break;case ao.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case ao.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=St.TOUCH_DOLLY_PAN;break;case ao.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(Rf)}function oT(r){switch(this._trackPointer(r),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=St.NONE}}function aT(r){this.enabled!==!1&&r.preventDefault()}function cT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class h_ extends xf{constructor(){super();const e=new Go;e.deleteAttribute("uv");const t=new Sr({side:On}),n=new Sr,i=new l_(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Mt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Mt(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Mt(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Mt(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Mt(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new Mt(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Mt(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new Mt(e,eo(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Mt(e,eo(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const _=new Mt(e,eo(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new Mt(e,eo(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const m=new Mt(e,eo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Mt(e,eo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function eo(r){const e=new mr;return e.color.setScalar(r),e}function Cp(r,e){if(e===R0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Sh||e===Om){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Sh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class f_ extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new gT(t)}),this.register(function(t){return new xT(t)}),this.register(function(t){return new vT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new dT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new hT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new RT(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=va.extractUrlBase(e);o=va.resolveURL(l,this.path)}else o=va.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ll(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===d_){try{o[st.KHR_BINARY_GLTF]=new CT(e)}catch(h){i&&i(h);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new VT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new fT;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new PT(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new LT;break;case st.KHR_MESH_QUANTIZATION:o[h]=new DT;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function uT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hT{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ue(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],bn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Rl(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new l_(u),l.distance=h;break;case"spot":l=new Ub(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ar(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class fT{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return mr}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Wt))}return Promise.all(i)}}class dT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class pT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(a,a)}return Promise.all(s)}}class mT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class _T{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class gT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],bn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class xT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class vT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],bn),Promise.all(s)}}class yT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class MT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],bn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Wt)),Promise.all(s)}}class ST{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class bT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class TT{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class ET{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class AT{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wT{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class RT{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==li.TRIANGLES&&l.mode!==li.TRIANGLE_STRIP&&l.mode!==li.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const _ of h){const g=new $e,m=new I,p=new Yi,v=new I(1,1,1),y=new xb(_.geometry,_.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,g.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const R=c[x];y.instanceColor=new Eh(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,c[x]);Nt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const d_="glTF",ra=12,Pp={JSON:1313821514,BIN:5130562};class CT{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==d_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ra,s=new DataView(e,ra);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Pp.JSON){const l=new Uint8Array(e,ra+o,a);this.content=n.decode(l)}else if(c===Pp.BIN){const l=ra+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Rh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Rh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=xo[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}h(d)},a,l,bn,f)})})}}class LT{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class DT{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class p_ extends Ya{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*l,g=_-l,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+h;for(let x=0;x!==a;x++){const R=o[g+x+a],A=o[g+x+c]*u,M=o[_+x+a],w=o[_+x]*u;s[x]=v*R+y*A+m*M+p*w}return s}}const IT=new Yi;class NT extends p_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return IT.fromArray(s).normalize().toArray(s),s}}const li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lp={9728:Fn,9729:ti,9984:Am,9985:zc,9986:ca,9987:dr},Dp={33071:Fr,33648:rl,10497:ws},_u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UT={CUBICSPLINE:void 0,LINEAR:Ua,STEP:Na},gu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Sr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yr})),r.DefaultMaterial}function cs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ar(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FT(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function BT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kT(r){let e;const t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xu(t.attributes):e=r.indices+":"+xu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+xu(r.targets[n]);return e}function xu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ch(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HT=new $e;class VT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new a_(this.options.manager):this.textureLoader=new Bb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ll(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return cs(s,a,i),ar(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(va.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=_u[i.type],a=xo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ft(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=_u[i.type],l=xo[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(g=new l(a,p*d,i.count*d/u),y=new db(g,d/u),t.cache.add(v,y)),m=new vf(y,c,f%d/u,_)}else a===null?g=new l(i.count*c):g=new l(a,f,i.count*c),m=new Ft(g,c,_);if(i.sparse!==void 0){const p=_u.SCALAR,v=xo[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new v(o[1],y,i.sparse.count*p),A=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,w=R.length;M<w;M++){const S=R[M];if(m.setX(S,A[M*c]),c>=2&&m.setY(S,A[M*c+1]),c>=3&&m.setZ(S,A[M*c+2]),c>=4&&m.setW(S,A[M*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Lp[f.magFilter]||ti,u.minFilter=Lp[f.minFilter]||dr,u.wrapS=Dp[f.wrapS]||ws,u.wrapT=Dp[f.wrapT]||ws,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Fn&&u.minFilter!==ti,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new cn(g);m.needsUpdate=!0,f(m)}),t.load(va.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ar(h,o),h.userData.mimeType=o.mimeType||zT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new bf,Wi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Mf,Wi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Sr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){const h=i[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],bn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Wt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ri);const u=s.alphaMode||gu.OPAQUE;if(u===gu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===gu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==mr&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==mr&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==mr){const h=s.emissiveFactor;a.emissive=new Ue().setRGB(h[0],h[1],h[2],bn)}return s.emissiveTexture!==void 0&&o!==mr&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Wt)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),ar(h,s),t.associations.set(h,{materials:e}),s.extensions&&cs(i,h,s),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ip(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=kT(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Ip(new Tn,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?OT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=o[d];let p;const v=l[d];if(m.mode===li.TRIANGLES||m.mode===li.TRIANGLE_STRIP||m.mode===li.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new mb(g,v):new Mt(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===li.TRIANGLE_STRIP?p.geometry=Cp(p.geometry,Om):m.mode===li.TRIANGLE_FAN&&(p.geometry=Cp(p.geometry,Sh));else if(m.mode===li.LINES)p=new i_(g,v);else if(m.mode===li.LINE_STRIP)p=new Sf(g,v);else if(m.mode===li.LINE_LOOP)p=new vb(g,v);else if(m.mode===li.POINTS)p=new r_(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&BT(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ar(p,s),m.extensions&&cs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&cs(i,h[0],s),h[0];const f=new _r;s.extensions&&cs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(ii.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new mf(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ar(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new $e;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yf(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],R=d[v],A=_[v],M=g[v],w=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,R,A,M,w);if(S)for(let b=0;b<S.length;b++)p.push(S[b])}return new wb(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,HT)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new t_:l.length>1?u=new _r:l.length===1?u=l[0]:u=new Nt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ar(u,s),s.extensions&&cs(n,u,s),s.matrix!==void 0){const h=new $e;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new _r;n.name&&(s.name=i.createUniqueName(n.name)),ar(s,n),n.extensions&&cs(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Wi||f instanceof cn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Nr[s.path]===Nr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Nr[s.path]){case Nr.weights:l=Io;break;case Nr.rotation:l=No;break;case Nr.position:case Nr.scale:l=Uo;break;default:switch(n.itemSize){case 1:l=Io;break;case 2:case 3:default:l=Uo;break}break}const u=i.interpolation!==void 0?UT[i.interpolation]:Ua,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const _=new l(c[f]+"."+Nr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ch(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof No?NT:p_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function GT(r,e,t){const n=e.attributes,i=new yi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const u=Ch(xo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,c=new I;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Ch(xo[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ki;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ip(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Rh[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ot.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),ar(r,e),GT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?FT(r,e.targets,t):r})}const vu=new WeakMap;class m_ extends Os{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new ll(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Wt,n).catch(n)}decodeDracoFile(e,t,n,i,s=bn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(vu.has(e)){const c=vu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[s]={resolve:l,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),vu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Tn;e.index&&t.setIndex(new Ft(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new Ft(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Wt)return;const n=new Ue;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),ot.toWorkingColorSpace(n,Wt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ll(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=WT.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function WT(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(c),l),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,c,l){const u=l.attributeIDs,h=l.attributeTypes;let f,d;const _=a.GetEncodedGeometryType(c);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let v,y;if(l.useUniqueIDs)y=u[m],v=a.GetAttributeByUniqueId(f,y);else{if(y=a.GetAttributeId(f,o[u[m]]),y===-1)continue;v=a.GetAttribute(f,y)}const x=i(o,a,f,m,p,v);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),g.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,c){const u=c.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(c,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,c,l,u,h){const f=h.num_components(),_=c.num_points()*f,g=_*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(c,h,m,g,p);const v=new u(o.HEAPF32.buffer,p,_).slice();return o._free(p),{name:l,array:v,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function __(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oo={duration:.5,overwrite:!1,delay:0},Cf,yn,It,mi=1e8,Rt=1/mi,Ph=Math.PI*2,XT=Ph/4,qT=0,g_=Math.sqrt,YT=Math.cos,jT=Math.sin,ln=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},br=function(e){return typeof e=="number"},Pf=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},Lf=function(){return typeof window<"u"},Ac=function(e){return Ht(e)||ln(e)},x_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,Lh=/(?:-?\.?\d|\.)+/gi,v_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,lo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,y_=/[+-]=-?[.\d]+/,M_=/[^,'"\[\]\s]+/gi,$T=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Oi,Dh,Df,si={},ul={},S_,b_=function(e){return(ul=Ps(e,si))&&Xn},If=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fa=function(e,t){return!t&&console.warn(e)},T_=function(e,t){return e&&(si[e]=t)&&ul&&(ul[e]=t)||si},Ba=function(){return 0},KT={suppressEvents:!0,isStart:!0,kill:!1},Yc={suppressEvents:!0,kill:!1},ZT={suppressEvents:!0},Nf={},Yr=[],Ih={},E_,Jn={},Mu={},Np=30,jc=[],Uf="",Of=function(e){var t=e[0],n,i;if($i(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=jc.length;i--&&!jc[i].targetTest(t););n=jc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new $_(e[i],n)))||e.splice(i,1);return e},ys=function(e){return e._gsap||Of(_i(e))[0]._gsap},A_=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():Pf(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},an=function(e){return Math.round(e*1e7)/1e7||0},vo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},JT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hl=function(){var e=Yr.length,t=Yr.slice(0),n,i;for(Ih={},Yr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},w_=function(e,t,n,i){Yr.length&&!yn&&hl(),e.render(t,n,yn&&t<0&&(e._initted||e._startAt)),Yr.length&&!yn&&hl()},R_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(M_).length<2?t:ln(e)?e.trim():e},C_=function(e){return e},vi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},QT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ps=function(e,t){for(var n in t)e[n]=t[n];return e},Up=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ya=function(e){var t=e.parent||Ot,n=e.keyframes?QT(Mn(e.keyframes)):vi;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},eE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},P_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Cl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Jr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nh=function(e,t,n,i){return e._startAt&&(yn?e._startAt.revert(Yc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},nE=function r(e){return!e||e._ts&&r(e.parent)},Op=function(e){return e._repeat?Fo(e._tTime,e=e.duration()+e._rDelay)*e:0},Fo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pl=function(e){return e._end=an(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},Ll=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=an(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pl(e),n._dirty||Ms(n,e)),e},L_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dl(e.rawTime(),t),(!t._dur||ja(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),Ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},Hi=function(e,t,n,i){return t.parent&&Jr(t),t._start=an((br(n)?n:n||e!==Ot?ci(e,n,t):e._time)+t._delay),t._end=an(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),P_(e,t,"_first","_last",e._sort?"_start":0),Uh(t)||(e._recent=t),i||L_(e,t),e._ts<0&&Ll(e,e._tTime),e},D_=function(e,t){return(si.ScrollTrigger||If("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},I_=function(e,t,n,i,s){if(Bf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&E_!==Qn.frame)return Yr.push(e),e._lazy=[s,i],1},iE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Uh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rE=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&iE(e)&&!(!e._initted&&Uh(e))||(e._ts<0||e._dp._ts<0)&&!Uh(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=ja(0,e._tDur,t),u=Fo(c,a),e._yoyo&&u&1&&(o=1-o),u!==Fo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yn||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&I_(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Nh(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Jr(e,1),!n&&!yn&&(ni(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Bo=function(e,t,n,i){var s=e._repeat,o=an(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:an(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ll(e,e._tTime=e._tDur*a),e.parent&&Pl(e),n||Ms(e.parent,e),e},Fp=function(e){return e instanceof In?Ms(e):Bo(e,e._dur)},oE={_start:0,endTime:Ba,totalDuration:Ba},ci=function r(e,t,n){var i=e.labels,s=e._recent||oE,o=e.duration()>=mi?s.endTime(!1):e._dur,a,c,l;return ln(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Mn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Ma=function(e,t,n){var i=br(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Hn(c.vars.inherit)&&c.parent;o.immediateRender=Hn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},ts=function(e,t){return e||e===0?t(e):t},ja=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!ln(e)||!(t=$T.exec(e))?"":t[1]},aE=function(e,t,n){return ts(n,function(i){return ja(e,t,i)})},Oh=[].slice,N_=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Oi},cE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||N_(i,1)?(s=n).push.apply(s,_i(i)):n.push(i)})||n},_i=function(e,t,n){return It&&!t&&It.selector?It.selector(e):ln(e)&&!n&&(Dh||!ko())?Oh.call((t||Df).querySelectorAll(e),0):Mn(e)?cE(e,n):N_(e)?Oh.call(e,0):e?[e]:[]},Fh=function(e){return e=_i(e)[0]||Fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _i(t,n.querySelectorAll?n:n===e?Fa("Invalid scope")||Df.createElement("div"):e)}},U_=function(e){return e.sort(function(){return .5-Math.random()})},O_=function(e){if(Ht(e))return e;var t=$i(e)?e:{each:e},n=Ss(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return ln(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,v,y,x,R,A,M,w,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,mi])[1],!S){for(M=-mi;M<(M=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=c?Math.min(S,g)*u-.5:i%S,v=S===mi?0:c?g*h/S-.5:i/S|0,M=0,w=mi,A=0;A<g;A++)y=A%S-p,x=v-(A/S|0),m[A]=R=l?Math.abs(l==="y"?x:y):g_(y*y+x*x),R>M&&(M=R),R<w&&(w=R);i==="random"&&U_(m),m.max=M-w,m.min=w,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:l?l==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=vn(t.amount||t.each)||0,n=n&&g<0?q_(n):n}return g=(m[f]-m.min)/m.max||0,an(m.b+(n?n(g):g)*m.v)+m.u}},Bh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=an(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(br(n)?0:vn(n))}},F_=function(e,t){var n=Mn(e),i,s;return!n&&$i(e)&&(i=n=e.radius||mi,e.values?(e=_i(e.values),(s=!br(e[0]))&&(i*=i)):e=Bh(e.increment)),ts(t,n?Ht(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=mi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-a),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:o,s||u===o||br(o)?u:u+vn(o)}:Bh(e))},B_=function(e,t,n,i){return ts(Mn(e)?!t:n===!0?!!(n=0):!i,function(){return Mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},lE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},uE=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},hE=function(e,t,n){return z_(e,t,0,1,n)},k_=function(e,t,n){return ts(n,function(i){return e[~~t(i)]})},fE=function r(e,t,n){var i=t-e;return Mn(e)?k_(e,r(0,e.length),t):ts(n,function(s){return(i+(s-e)%i)%i+e})},dE=function r(e,t,n){var i=t-e,s=i*2;return Mn(e)?k_(e,r(0,e.length-1),t):ts(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ka=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?M_:Lh),n+=e.substr(t,i-t)+B_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},z_=function(e,t,n,i,s){var o=t-e,a=i-n;return ts(s,function(c){return n+((c-e)/o*a||0)})},pE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=ln(e),a={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Mn(e)&&!Mn(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(r(e[l-1],e[l]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Ps(Mn(e)?[]:{},e));if(!u){for(c in t)Ff.call(a,e,c,"get",t[c]);s=function(_){return Hf(_,a)||(o?e.p:e)}}}return ts(n,s)},Bp=function(e,t,n){var i=e.labels,s=mi,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},ni=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Yr.length&&hl(),a&&(It=a),u=c?s.apply(l,c):s.call(l),It=o,u},ha=function(e){return Jr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&ni(e,"onInterrupt"),e},uo,H_=[],V_=function(e){if(e)if(e=!e.name&&e.default||e,Lf()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ba,render:Hf,add:Ff,kill:PE,modifier:CE,rawVars:0},o={targetTest:0,get:0,getSetter:zf,aliases:{},register:0};if(ko(),e!==i){if(Jn[t])return;vi(i,vi(fl(e,s),o)),Ps(i.prototype,Ps(s,fl(e,o))),Jn[i.prop=t]=i,e.targetTest&&(jc.push(i),Nf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}T_(t,i),e.register&&e.register(Xn,i,Gn)}else H_.push(e)},At=255,fa={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Su=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},G_=function(e,t,n){var i=e?br(e)?[e>>16,e>>8&At,e&At]:0:fa.black,s,o,a,c,l,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])i=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Lh),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Su(c+1/3,s,o),i[1]=Su(c,s,o),i[2]=Su(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(v_),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lh)||fa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/At,o=i[1]/At,a=i[2]/At,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},W_=function(e){var t=[],n=[],i=-1;return e.split(jr).forEach(function(s){var o=s.match(lo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},kp=function(e,t,n){var i="",s=(e+i).match(jr),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(f){return(f=G_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=W_(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(jr,"1").split(lo),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(jr),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},jr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),mE=/hsl[a]?\(/,X_=function(e){var t=e.join(" "),n;if(jr.lastIndex=0,jr.test(t))return n=mE.test(t),e[1]=kp(e[1],n),e[0]=kp(e[0],n,W_(e[1])),!0},za,Qn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,u,h,f,d,_=function g(m){var p=r()-i,v=m===!0,y,x,R,A;if((p>e||p<0)&&(n+=p-t),i+=p,R=i-n,y=R-o,(y>0||v)&&(A=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=y+(y>=s?4:s-y),x=1),v||(c=l(g)),x)for(d=0;d<a.length;d++)a[d](R,f,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){S_&&(!Dh&&Lf()&&(Oi=Dh=window,Df=Oi.document||{},si.gsap=Xn,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(Xn.version),b_(ul||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),H_.forEach(V_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},za=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),za=0,l=Ba},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,v){var y=p?function(x,R,A,M){m(x,R,A,M),h.remove(y)}:m;return h.remove(m),a[v?"unshift":"push"](y),ko(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),ko=function(){return!za&&Qn.wake()},lt={},_E=/^[\d.\-M][\d.\-,\s]/,gE=/["']/g,xE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(gE,"").trim():+l,i=c.substr(a+1).trim();return t},vE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yE=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xE(t[1])]:vE(e).split(",").map(R_)):lt._CE&&_E.test(e)?lt._CE("",e):n},q_=function(e){return function(t){return 1-e(1-t)}},Y_=function r(e,t){for(var n=e._first,i;n;)n instanceof In?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ss=function(e,t){return e&&(Ht(e)?e:lt[e]||yE(e))||t},Fs=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Vn(e,function(a){lt[a]=si[a]=s,lt[o=a.toLowerCase()]=n;for(var c in s)lt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=lt[a+"."+c]=s[c]}),s},j_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ph*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*jT((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:j_(a);return s=Ph/s,c.config=function(l,u){return r(e,l,u)},c},Tu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:j_(n);return i.config=function(s){return r(e,s)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Fs("Elastic",bu("in"),bu("out"),bu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Fs("Circ",function(r){return-(g_(1-r*r)-1)});Fs("Sine",function(r){return r===1?1:-YT(r*XT)+1});Fs("Back",Tu("in"),Tu("out"),Tu());lt.SteppedEase=lt.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Rt;return function(a){return((i*ja(0,o,a)|0)+s)*n}}};Oo.ease=lt["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uf+=r+","+r+"Params,"});var $_=function(e,t){this.id=qT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:A_,this.set=t?t.getSetter:zf},Ha=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Bo(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),za||Qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Bo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ko(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ll(this,n),!s._dp||s.parent||L_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),w_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Op(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Op(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Fo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(ja(-Math.abs(this._delay),this._tDur,s),i!==!1),Pl(this),tE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ZT);var i=yn;return yn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),Hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Hn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ht(n)?n:C_,a=function(){var l=i.then;i.then=null,Ht(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ha(this)},r}();vi(Ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var In=function(r){__(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Hn(n.sortChildren),Ot&&Hi(n.parent||Ot,cr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&D_(cr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ma(0,arguments,this),this},t.from=function(i,s,o){return Ma(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ma(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(i,s,ci(this,o),1),this},t.call=function(i,s,o){return Hi(this,$t.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new $t(i,o,ci(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,u){return o.runBackwards=1,ya(o).immediateRender=Hn(o.immediateRender),this.staggerTo(i,s,o,a,c,l,u)},t.staggerFromTo=function(i,s,o,a,c,l,u,h){return a.startAt=o,ya(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,s,a,c,l,u,h)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:an(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,_,g,m,p,v,y,x,R,A,M;if(this!==Ot&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,y=this._ts,p=!y,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=an(u%m),u===c?(g=this._repeat,f=l):(g=~~(u/m),g&&g===u/m&&(f=l,g--),f>l&&(f=l)),R=Fo(this._tTime,m),!a&&this._tTime&&R!==g&&this._tTime-R*m-this._dur<=0&&(R=g),A&&g&1&&(f=l-f,M=1),g!==R&&!this._lock){var w=A&&R&1,S=w===(A&&g&1);if(g<R&&(w=!w),a=w?0:u%l?l:u,this._lock=1,this.render(a||(M?0:an(g*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,a=w?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Y_(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=sE(this,an(a),an(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=-Rt);break}}d=_}else{d=this._last;for(var b=i<0?i:f;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||yn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=b?-Rt:Rt);break}}d=_}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Rt)._zTime=f>=a?1:-1,this._ts))return this._start=x,Pl(this),this.render(i,s,o);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Jr(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(ni(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(br(s)||(s=ci(this,s,i)),!(i instanceof Ha)){if(Mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ln(i))return this.addLabel(i,s);if(Ht(i))i=$t.delayedCall(0,i);else return this}return this!==i?Hi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof $t?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return ln(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(Cl(this,i),i===this._recent&&(this._recent=this._last),Ms(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=an(Qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=$t.delayedCall(0,s||Ba,o);return a.data="isPause",this._hasPause=1,Hi(this,a,ci(this,i))},t.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&Jr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)kr!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=_i(i),c=this._first,l=br(s),u;c;)c instanceof $t?JT(c._targets,a)&&(l?(!kr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ci(o,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,_=$t.to(o,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Rt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&Bo(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,vi({startAt:{time:ci(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bp(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bp(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return Ms(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ms(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=mi,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Hi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Bo(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ot._ts&&(w_(Ot,dl(i,Ot)),E_=Qn.frame),Qn.frame>=Np){Np+=ri.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&ri.autoSleep&&Qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qn.sleep()}}},e}(Ha);vi(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var ME=function(e,t,n,i,s,o,a){var c=new Gn(this._pt,e,t,0,1,tg,null,s),l=0,u=0,h,f,d,_,g,m,p,v;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ka(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match(yu)||[];h=yu.exec(i);)_=h[0],g=i.substring(l,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?vo(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},l=yu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(y_.test(i)||p)&&(c.e=0),this._pt=c,c},Ff=function(e,t,n,i,s,o,a,c,l,u){Ht(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ht(h)?l?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=Ht(h)?l?AE:Q_:kf,_;if(ln(i)&&(~i.indexOf("random(")&&(i=ka(i)),i.charAt(1)==="="&&(_=vo(f,i)+(vn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||kh)return!isNaN(f*i)&&i!==""?(_=new Gn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?RE:eg,0,d),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&If(t,i),ME.call(this,e,t,f,i,d,c||ri.stringFilter,l))},SE=function(e,t,n,i,s){if(Ht(e)&&(e=Sa(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||Mn(e)||x_(e))return ln(e)?Sa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Sa(e[a],s,t,n,i);return o},K_=function(e,t,n,i,s,o){var a,c,l,u;if(Jn[e]&&(a=new Jn[e]).init(s,a.rawVars?t[e]:SE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new Gn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==uo))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},kr,kh,Bf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Cf,x=e.timeline,R,A,M,w,S,b,P,N,B,W,X,q,Y;if(x&&(!f||!s)&&(s="none"),e._ease=Ss(s,Oo.ease),e._yEase=h?q_(Ss(h===!0?s:h,Oo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(N=m[0]?ys(m[0]).harness:0,q=N&&i[N.prop],R=fl(i,Nf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Yc:KT),g._lazy=0),o){if(Jr(e._startAt=$t.set(m,vi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Hn(c),startAt:null,delay:0,onUpdate:l&&function(){return ni(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!d)&&e._startAt.revert(Yc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),M=vi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Hn(c),immediateRender:a,stagger:0,parent:p},R),q&&(M[N.prop]=q),Jr(e._startAt=$t.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(Yc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&Hn(c)||c&&!_,A=0;A<m.length;A++){if(S=m[A],P=S._gsap||Of(m)[A]._gsap,e._ptLookup[A]=W={},Ih[P.id]&&Yr.length&&hl(),X=v===m?A:v.indexOf(S),N&&(B=new N).init(S,q||R,e,X,v)!==!1&&(e._pt=w=new Gn(e._pt,S,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(V){W[V]=w}),B.priority&&(b=1)),!N||q)for(M in R)Jn[M]&&(B=K_(M,R,e,X,S,v))?B.priority&&(b=1):W[M]=w=Ff.call(e,S,M,"get",R[M],X,v,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),y&&e._pt&&(kr=e,Ot.killTweensOf(S,W,e.globalTime(t)),Y=!e.parent,kr=0),e._pt&&c&&(Ih[P.id]=1)}b&&ng(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&x.render(mi,!0,!0)},bE=function(e,t,n,i,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return kh=1,e.vars[t]="+=0",Bf(e,a),kh=0,c?Fa(t+" not eligible for reset"):1;l.push(u)}for(d=l.length;d--;)h=l[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+vn(h.e)),h.b&&(h.b=u.s+vn(h.b))},TE=function(e,t){var n=e[0]?ys(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=Ps({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},EE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Mn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Sa=function(e,t,n,i,s){return Ht(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?ka(e):e},Z_=Uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",J_={};Vn(Z_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return J_[r]=1});var $t=function(r){__(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ya(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,v=i.parent||Ot,y=(Mn(n)||x_(n)?br(n[0]):"length"in i)?[n]:_i(n),x,R,A,M,w,S,b,P;if(a._targets=y.length?Of(y):Fa("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Ac(l)||Ac(u)){if(i=a.vars,x=a.timeline=new In({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=cr(a),x._start=0,f||Ac(l)||Ac(u)){if(M=y.length,b=f&&O_(f),$i(f))for(w in f)~Z_.indexOf(w)&&(P||(P={}),P[w]=f[w]);for(R=0;R<M;R++)A=fl(i,J_),A.stagger=0,p&&(A.yoyoEase=p),P&&Ps(A,P),S=y[R],A.duration=+Sa(l,cr(a),R,S,y),A.delay=(+Sa(u,cr(a),R,S,y)||0)-a._delay,!f&&M===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(S,A,b?b(R,S,y):0),x._ease=lt.none;x.duration()?l=u=0:a.timeline=0}else if(_){ya(vi(x.vars.defaults,{ease:"none"})),x._ease=Ss(_.ease||i.ease||"none");var N=0,B,W,X;if(Mn(_))_.forEach(function(q){return x.to(y,q,">")}),x.duration();else{A={};for(w in _)w==="ease"||w==="easeEach"||EE(w,_[w],A,_.easeEach);for(w in A)for(B=A[w].sort(function(q,Y){return q.t-Y.t}),N=0,R=0;R<B.length;R++)W=B[R],X={ease:W.e,duration:(W.t-(R?B[R-1].t:0))/100*l},X[w]=W.v,x.to(y,X,N),N+=X.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return d===!0&&!Cf&&(kr=cr(a),Ot.killTweensOf(y),kr=0),Hi(v,cr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!_&&a._start===an(v._time)&&Hn(h)&&nE(cr(a))&&v.data!=="nested")&&(a._tTime=-Rt,a.render(Math.max(0,-u)||0)),m&&D_(cr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Rt&&!u?c:i<Rt?0:i,f,d,_,g,m,p,v,y,x;if(!l)rE(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,y=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=an(h%g),h===c?(_=this._repeat,f=l):(_=~~(h/g),_&&_===an(h/g)&&(f=l,_--),f>l&&(f=l)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=l-f),m=Fo(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(y&&this._yEase&&Y_(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(an(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(I_(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(f/l),this._from&&(this.ratio=v=1-v),f&&!a&&!s&&!_&&(ni(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Nh(this,i,s,o),ni(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Nh(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Jr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(ni(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,c){za||Qn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Bf(this,l),u=this._ease(l/this._dur),bE(this,i,s,o,a,u,l,c)?this.resetTo(i,s,o,a,1):(Ll(this,0),this.parent||P_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ha(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,kr&&kr.vars.overwrite!==!0)._first||ha(this),this.parent&&o!==this.timeline.totalDuration()&&Bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?_i(i):a,l=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&eE(a,c))return s==="all"&&(this._pt=0),ha(this);for(h=this._op=this._op||[],s!=="all"&&(ln(s)&&(g={},Vn(s,function(v){return g[v]=1}),s=g),s=TE(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){f=l[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Cl(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ha(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ma(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ma(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ot.killTweensOf(i,s,o)},e}(Ha);vi($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var e=new In,t=Oh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var kf=function(e,t,n){return e[t]=n},Q_=function(e,t,n){return e[t](n)},AE=function(e,t,n,i){return e[t](i.fp,n)},wE=function(e,t,n){return e.setAttribute(t,n)},zf=function(e,t){return Ht(e[t])?Q_:Pf(e[t])&&e.setAttribute?wE:kf},eg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},RE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},tg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Hf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},CE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},PE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Cl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},LE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ng=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Gn=function(){function r(t,n,i,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||eg,this.d=c||this,this.set=l||kf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=LE,this.m=n,this.mt=s,this.tween=i},r}();Vn(Uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Nf[r]=1});si.TweenMax=si.TweenLite=$t;si.TimelineLite=si.TimelineMax=In;Ot=new In({sortChildren:!1,defaults:Oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=X_;var bs=[],$c={},DE=[],zp=0,IE=0,Eu=function(e){return($c[e]||DE).map(function(t){return t()})},zh=function(){var e=Date.now(),t=[];e-zp>2&&(Eu("matchMediaInit"),bs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=Oi.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Eu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zp=e,Eu("matchMedia"))},ig=function(){function r(t,n){this.selector=n&&Fh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=IE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ht(n)&&(s=i,i=n,n=Ht);var o=this,a=function(){var l=It,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=Fh(s)),It=o,h=i.apply(o,arguments),Ht(h)&&o._r.push(h),It=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ht?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof In?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof $t)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=bs.length;o--;)bs[o].id===this.id&&bs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),NE=function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$i(n)||(n={matches:n});var o=new ig(0,s||this.scope),a=o.conditions={},c,l,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Oi.matchMedia(n[l]),c&&(bs.indexOf(o)<0&&bs.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(zh):c.addEventListener("change",zh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return V_(i)})},timeline:function(e){return new In(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=_i(e)[0]);var s=ys(e||{}).get,o=n?C_:R_;return n==="native"&&(n=""),e&&(t?o((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(a,c,l){return o((Jn[a]&&Jn[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=_i(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Jn[t],a=ys(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;uo._pt=0,h.init(e,n?u+n:u,uo,0,[e]),h.render(1,h),uo._pt&&Hf(1,uo)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Xn.to(e,Ps((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,Oo.ease)),Up(Oo,e||{})},config:function(e){return Up(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!si[a]&&Fa(t+" effect requires "+a+" plugin.")}),Mu[t]=function(a,c,l){return n(_i(a),vi(c||{},s),l)},o&&(In.prototype[t]=function(a,c,l){return this.add(Mu[t](a,$i(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){lt[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):lt},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new In(e),i,s;for(n.smoothChildTiming=Hn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Hi(n,i,i._start-i._delay),i=s;return Hi(Ot,n,0),n},context:function(e,t){return e?new ig(e,t):It},matchMedia:function(e){return new NE(e)},matchMediaRefresh:function(){return bs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||zh()},addEventListener:function(e,t){var n=$c[e]||($c[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$c[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:fE,wrapYoyo:dE,distribute:O_,random:B_,snap:F_,normalize:hE,getUnit:vn,clamp:aE,splitColor:G_,toArray:_i,selector:Fh,mapRange:z_,pipe:lE,unitize:uE,interpolate:pE,shuffle:U_},install:b_,effects:Mu,ticker:Qn,updateRoot:In.updateRoot,plugins:Jn,globalTimeline:Ot,core:{PropTween:Gn,globals:T_,Tween:$t,Timeline:In,Animation:Ha,getCache:ys,_removeLinkedListItem:Cl,reverting:function(){return yn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return Cf=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pl[r]=$t[r]});Qn.add(In.updateRoot);uo=pl.to({},{duration:0});var UE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},OE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=UE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Au=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(ln(s)&&(c={},Vn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}OE(a,s)}}}},Xn=pl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Au("roundProps",Bh),Au("modifiers"),Au("snap",F_))||pl;$t.version=In.version=Xn.version="3.12.5";S_=1;Lf()&&ko();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hp,zr,yo,Vf,xs,Vp,Gf,FE=function(){return typeof window<"u"},Tr={},ds=180/Math.PI,Mo=Math.PI/180,to=Math.atan2,Gp=1e8,Wf=/([A-Z])/g,BE=/(left|right|width|margin|padding|x)/i,kE=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},sg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},GE=function(e,t,n){return e.style[t]=n},WE=function(e,t,n){return e.style.setProperty(t,n)},XE=function(e,t,n){return e._gsap[t]=n},qE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},YE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},jE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Bt="transform",Wn=Bt+"Origin",$E=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=lr(i,a)}):this.tfm[e]=o.x?o[e]:lr(i,e),e===Wn&&(this.tfm.zOrigin=o.zOrigin);else return Vi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},og=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},KE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Wf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Gf(),(!s||!s.isStart)&&!n[Bt]&&(og(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ag=function(e,t){var n={target:e,props:[],revert:KE,save:$E};return e._gsap||Xn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},cg,Vh=function(e,t){var n=zr.createElementNS?zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zr.createElement(e);return n&&n.style?n:zr.createElement(e)},Xi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Wf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,zo(t)||t,1)||""},Wp="O,Moz,ms,Ms,Webkit".split(","),zo=function(e,t,n){var i=t||xs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Wp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Wp[o]:"")+e},Gh=function(){FE()&&window.document&&(Hp=window,zr=Hp.document,yo=zr.documentElement,xs=Vh("div")||{style:{}},Vh("div"),Bt=zo(Bt),Wn=Bt+"Origin",xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cg=!!zo("perspective"),Gf=Xn.core.reverting,Vf=1)},wu=function r(e){var t=Vh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(yo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),yo.removeChild(t),this.style.cssText=s,o},Xp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},lg=function(e){var t;try{t=e.getBBox()}catch{t=wu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===wu||(t=wu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Xp(e,["x","cx","x1"])||0,y:+Xp(e,["y","cy","y1"])||0,width:0,height:0}:t},ug=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&lg(e))},Ls=function(e,t){if(t){var n=e.style,i;t in Tr&&t!==Wn&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Wf,"-$1").toLowerCase())):n.removeAttribute(t)}},Hr=function(e,t,n,i,s,o){var a=new Gn(e._pt,t,n,0,1,o?sg:rg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},qp={deg:1,rad:1,turn:1},ZE={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=xs.style,c=BE.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||qp[i]||qp[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&ug(e),(d||o==="%")&&(Tr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[u],Gt(d?s/_*h:s/100*_);if(a[c?"width":"height"]=h+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===zr||!g.appendChild)&&(g=zr.body),m=g._gsap,m&&d&&m.width&&c&&m.time===Qn.time&&!m.uncache)return Gt(s/m.width*h);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,_=e[u],v?e.style[t]=v:Ls(e,t)}else(d||o==="%")&&!ZE[Xi(g,"display")]&&(a.position=Xi(e,"position")),g===e&&(a.position="static"),g.appendChild(xs),_=xs[u],g.removeChild(xs),a.position="absolute";return c&&d&&(m=ys(g),m.time=Qn.time,m.width=g[u]),Gt(f?_*s/h:_&&s?h/_*s:0)},lr=function(e,t,n,i){var s;return Vf||Gh(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tr[t]&&t!=="transform"?(s=Ga(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_l(Xi(e,Wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ml[t]&&ml[t](e,t,n)||Xi(e,t)||A_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},JE=function(e,t,n,i){if(!n||n==="none"){var s=zo(t,e,1),o=s&&Xi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Xi(e,"borderTopColor"))}var a=new Gn(this._pt,e.style,t,0,1,tg),c=0,l=0,u,h,f,d,_,g,m,p,v,y,x,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Xi(e,t)||i,g?e.style[t]=g:Ls(e,t)),u=[n,i],X_(u),n=u[0],i=u[1],f=n.match(lo)||[],R=i.match(lo)||[],R.length){for(;h=lo.exec(i);)m=h[0],v=i.substring(c,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[l++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=vo(d,m)+x),p=parseFloat(m),y=m.substr((p+"").length),c=lo.lastIndex-y.length,y||(y=y||ri.units[t]||x,c===i.length&&(i+=y,a.e+=y)),x!==y&&(d=Qr(e,t,g,y)||0),a._pt={_next:a._pt,p:v||l===1?v:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?sg:rg;return y_.test(i)&&(a.e=0),this._pt=a,a},Yp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},QE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Yp[n]||n,t[1]=Yp[i]||i,t.join(" ")},eA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Tr[a]&&(c=1,a=a==="transformOrigin"?Wn:Bt),Ls(n,a);c&&(Ls(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),Ga(n,1),o.uncache=1,og(i)))}},ml={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Gn(e._pt,t,n,0,0,eA);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Va=[1,0,0,1,0,0],hg={},fg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jp=function(e){var t=Xi(e,Bt);return fg(t)?Va:t.substr(7).match(v_).map(Gt)},Xf=function(e,t){var n=e._gsap||ys(e),i=e.style,s=jp(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Va:s):(s===Va&&!e.offsetParent&&e!==yo&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,yo.appendChild(e)),s=jp(e),c?i.display=c:Ls(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):yo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wh=function(e,t,n,i,s,o){var a=e._gsap,c=s||Xf(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=c[0],_=c[1],g=c[2],m=c[3],p=c[4],v=c[5],y=t.split(" "),x=parseFloat(y[0])||0,R=parseFloat(y[1])||0,A,M,w,S;n?c!==Va&&(M=d*m-_*g)&&(w=x*(m/M)+R*(-g/M)+(g*v-m*p)/M,S=x*(-_/M)+R*(d/M)-(d*v-_*p)/M,x=w,R=S):(A=lg(e),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),R=A.y+(~(y[1]||y[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(p=x-l,v=R-u,a.xOffset=h+(p*d+v*g)-p,a.yOffset=f+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Wn]="0px 0px",o&&(Hr(o,a,"xOrigin",l,x),Hr(o,a,"yOrigin",u,R),Hr(o,a,"xOffset",h,a.xOffset),Hr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+R)},Ga=function(e,t){var n=e._gsap||new $_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Xi(e,Wn)||"0",u,h,f,d,_,g,m,p,v,y,x,R,A,M,w,S,b,P,N,B,W,X,q,Y,V,te,L,ue,Ie,et,$,ee;return u=h=f=g=m=p=v=y=x=0,d=_=1,n.svg=!!(e.getCTM&&ug(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Bt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Bt]!=="none"?c[Bt]:"")),i.scale=i.rotate=i.translate="none"),M=Xf(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),l=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Wh(e,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,M)),R=n.xOrigin||0,A=n.yOrigin||0,M!==Va&&(P=M[0],N=M[1],B=M[2],W=M[3],u=X=M[4],h=q=M[5],M.length===6?(d=Math.sqrt(P*P+N*N),_=Math.sqrt(W*W+B*B),g=P||N?to(N,P)*ds:0,v=B||W?to(B,W)*ds+g:0,v&&(_*=Math.abs(Math.cos(v*Mo))),n.svg&&(u-=R-(R*P+A*B),h-=A-(R*N+A*W))):(ee=M[6],et=M[7],L=M[8],ue=M[9],Ie=M[10],$=M[11],u=M[12],h=M[13],f=M[14],w=to(ee,Ie),m=w*ds,w&&(S=Math.cos(-w),b=Math.sin(-w),Y=X*S+L*b,V=q*S+ue*b,te=ee*S+Ie*b,L=X*-b+L*S,ue=q*-b+ue*S,Ie=ee*-b+Ie*S,$=et*-b+$*S,X=Y,q=V,ee=te),w=to(-B,Ie),p=w*ds,w&&(S=Math.cos(-w),b=Math.sin(-w),Y=P*S-L*b,V=N*S-ue*b,te=B*S-Ie*b,$=W*b+$*S,P=Y,N=V,B=te),w=to(N,P),g=w*ds,w&&(S=Math.cos(w),b=Math.sin(w),Y=P*S+N*b,V=X*S+q*b,N=N*S-P*b,q=q*S-X*b,P=Y,X=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Gt(Math.sqrt(P*P+N*N+B*B)),_=Gt(Math.sqrt(q*q+ee*ee)),w=to(X,q),v=Math.abs(w)>2e-4?w*ds:0,x=$?1/($<0?-$:$):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fg(Xi(e,Bt)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Gt(d),n.scaleY=Gt(_),n.rotation=Gt(g)+a,n.rotationX=Gt(m)+a,n.rotationY=Gt(p)+a,n.skewX=v+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Wn]=_l(l)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?nA:cg?dg:tA,n.uncache=0,n},_l=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ru=function(e,t,n){var i=vn(t);return Gt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},tA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,dg(e,t)},ls="0deg",sa="0px",us=") ",dg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,y=n.zOrigin,x="",R=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==ls||u!==ls)){var A=parseFloat(u)*Mo,M=Math.sin(A),w=Math.cos(A),S;A=parseFloat(h)*Mo,S=Math.cos(A),o=Ru(v,o,M*S*-y),a=Ru(v,a,-Math.sin(A)*-y),c=Ru(v,c,w*S*-y+y)}m!==sa&&(x+="perspective("+m+us),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(R||o!==sa||a!==sa||c!==sa)&&(x+=c!==sa||R?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+us),l!==ls&&(x+="rotate("+l+us),u!==ls&&(x+="rotateY("+u+us),h!==ls&&(x+="rotateX("+h+us),(f!==ls||d!==ls)&&(x+="skew("+f+", "+d+us),(_!==1||g!==1)&&(x+="scale("+_+", "+g+us),v.style[Bt]=x||"translate(0, 0)"},nA=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,y=parseFloat(o),x=parseFloat(a),R,A,M,w,S;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Mo,l*=Mo,R=Math.cos(c)*h,A=Math.sin(c)*h,M=Math.sin(c-l)*-f,w=Math.cos(c-l)*f,l&&(u*=Mo,S=Math.tan(l-u),S=Math.sqrt(1+S*S),M*=S,w*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),R*=S,A*=S)),R=Gt(R),A=Gt(A),M=Gt(M),w=Gt(w)):(R=h,w=f,A=M=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=Qr(d,"x",o,"px"),x=Qr(d,"y",a,"px")),(_||g||m||p)&&(y=Gt(y+_-(_*R+g*M)+m),x=Gt(x+g-(_*A+g*w)+p)),(i||s)&&(S=d.getBBox(),y=Gt(y+i/100*S.width),x=Gt(x+s/100*S.height)),S="matrix("+R+","+A+","+M+","+w+","+y+","+x+")",d.setAttribute("transform",S),v&&(d.style[Bt]=S)},iA=function(e,t,n,i,s){var o=360,a=ln(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),l=c-i,u=i+l+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*Gp)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*Gp)%o-~~(l/o)*o)),e._pt=f=new Gn(e._pt,t,n,i,l,zE),f.e=u,f.u="deg",e._props.push(n),f},$p=function(e,t){for(var n in t)e[n]=t[n];return e},rA=function(e,t,n){var i=$p({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,f,d,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=Ga(n,1),Ls(n,Bt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Bt],o[Bt]=t,a=Ga(n,1),o[Bt]=l);for(c in Tr)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(d=vn(l),_=vn(u),h=d!==_?Qr(n,c,l,_):parseFloat(l),f=parseFloat(u),e._pt=new Gn(e._pt,a,c,h,f-h,Hh),e._pt.u=_||0,e._props.push(c));$p(a,i)};Vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ml[e>1?"border"+r:r]=function(a,c,l,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return lr(a,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(c,d,h)}});var pg={name:"css",register:Gh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,f,d,_,g,m,p,v,y,x,R,A,M,w;Vf||Gh(),this.styles=this.styles||ag(e),w=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Jn[g]&&K_(g,t,n,i,e,s)))){if(d=typeof u,_=ml[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ka(u)),_)_(this,e,g,u,n)&&(M=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",jr.lastIndex=0,jr.test(l)||(m=vn(l),p=vn(u)),p?m!==p&&(l=Qr(e,g,l,p)+p):m&&(u+=m),this.add(a,"setProperty",l,u,i,s,0,0,g),o.push(g),w.push(g,0,a[g]);else if(d!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],ln(l)&&~l.indexOf("random(")&&(l=ka(l)),vn(l+"")||l==="auto"||(l+=ri.units[g]||vn(lr(e,g))||""),(l+"").charAt(1)==="="&&(l=lr(e,g))):l=lr(e,g),f=parseFloat(l),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),g in Vi&&(g==="autoAlpha"&&(f===1&&lr(e,"visibility")==="hidden"&&h&&(f=0),w.push("visibility",0,a.visibility),Hr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Tr,y){if(this.styles.save(g),x||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ga(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,x=this._pt=new Gn(this._pt,a,Bt,0,1,R.renderTransform,R,0,-1),x.dep=1),g==="scale")this._pt=new Gn(this._pt,R,"scaleY",R.scaleY,(v?vo(R.scaleY,v+h):h)-R.scaleY||0,Hh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){w.push(Wn,0,a[Wn]),u=QE(u),R.svg?Wh(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&Hr(this,R,"zOrigin",R.zOrigin,p),Hr(this,a,g,_l(l),_l(u)));continue}else if(g==="svgOrigin"){Wh(e,u,1,A,0,this);continue}else if(g in hg){iA(this,R,g,f,v?vo(f,v+u):u);continue}else if(g==="smoothOrigin"){Hr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){rA(this,u,e);continue}}else g in a||(g=zo(g)||g);if(y||(h||h===0)&&(f||f===0)&&!kE.test(u)&&g in a)m=(l+"").substr((f+"").length),h||(h=0),p=vn(u)||(g in ri.units?ri.units[g]:m),m!==p&&(f=Qr(e,g,l,p)),this._pt=new Gn(this._pt,y?R:a,g,f,(v?vo(f,v+h):h)-f,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?VE:Hh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=HE);else if(g in a)JE.call(this,e,g,l,v?v+u:u);else if(g in e)this.add(e,g,l||e[g],v?v+u:u,i,s);else if(g!=="parseTransform"){If(g,u);continue}y||(g in a?w.push(g,0,a[g]):w.push(g,1,l||e[g])),o.push(g)}}M&&ng(this)},render:function(e,t){if(t.tween._time||!Gf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:lr,aliases:Vi,getSetter:function(e,t,n){var i=Vi[t];return i&&i.indexOf(",")<0&&(t=i),t in Tr&&t!==Wn&&(e._gsap.x||lr(e,"x"))?n&&Vp===n?t==="scale"?qE:XE:(Vp=n||{})&&(t==="scale"?YE:jE):e.style&&!Pf(e.style[t])?GE:~t.indexOf("-")?WE:zf(e,t)},core:{_removeProperty:Ls,_getMatrix:Xf}};Xn.utils.checkPrefix=zo;Xn.core.getStyleSaver=ag;(function(r,e,t,n){var i=Vn(r+","+e+","+t,function(s){Tr[s]=1});Vn(e,function(s){ri.units[s]="deg",hg[s]=1}),Vi[i[13]]=r+","+e,Vn(n,function(s){var o=s.split(":");Vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});Xn.registerPlugin(pg);var Ee=Xn.registerPlugin(pg)||Xn;Ee.core.Tween;function sA(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function oA(r,e,t){return e&&sA(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fn,Kc,ei,Vr,Gr,So,mg,ps,ba,_g,gr,Ei,gg,xg=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},vg=1,ho=[],rt=[],qi=[],Ta=Date.now,Xh=function(e,t){return t},aA=function(){var e=ba.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,qi),rt=n,qi=i,Xh=function(o,a){return t[o](a)}},$r=function(e,t){return~qi.indexOf(e)&&qi[qi.indexOf(e)+1][t]},Ea=function(e){return!!~_g.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},wc="scrollLeft",Rc="scrollTop",qh=function(){return gr&&gr.isPressed||rt.cache++},gl=function(e,t){var n=function i(s){if(s||s===0){vg&&(ei.history.scrollRestoration="manual");var o=gr&&gr.isPressed;s=i.v=Math.round(s)||(gr&&gr.iOS?1:0),e(s),i.cacheID=rt.cache,o&&Xh("ss",s)}else(t||rt.cache!==i.cacheID||Xh("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:wc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gl(function(r){return arguments.length?ei.scrollTo(r,Qt.sc()):ei.pageXOffset||Vr[wc]||Gr[wc]||So[wc]||0})},Qt={s:Rc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:gl(function(r){return arguments.length?ei.scrollTo(Nn.sc(),r):ei.pageYOffset||Vr[Rc]||Gr[Rc]||So[Rc]||0})},kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||fn.utils.toArray)(e)[0]||(typeof e=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},es=function(e,t){var n=t.s,i=t.sc;Ea(e)&&(e=Vr.scrollingElement||Gr);var s=rt.indexOf(e),o=i===Qt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Rn(e,"scroll",qh);var a=rt[s+o],c=a||(rt[s+o]=gl($r(e,n),!0)||(Ea(e)?i:gl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=fn.getProperty(e,"scrollBehavior")==="smooth"),c},Yh=function(e,t,n){var i=e,s=e,o=Ta(),a=o,c=t||50,l=Math.max(500,c*3),u=function(_,g){var m=Ta();g||m-o>c?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,m=s,p=Ta();return(_||_===0)&&_!==i&&u(_),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},oa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Kp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},yg=function(){ba=fn.core.globals().ScrollTrigger,ba&&ba.core&&aA()},Mg=function(e){return fn=e||xg(),!Kc&&fn&&typeof document<"u"&&document.body&&(ei=window,Vr=document,Gr=Vr.documentElement,So=Vr.body,_g=[ei,Vr,Gr,So],fn.utils.clamp,gg=fn.core.context||function(){},ps="onpointerenter"in So?"pointer":"mouse",mg=Xt.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=Xt.eventTypes=("ontouchstart"in Gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return vg=0},500),yg(),Kc=1),Kc};Nn.op=Qt;rt.cache=0;var Xt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Kc||Mg(fn)||console.warn("Please gsap.registerPlugin(Observer)"),ba||yg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,y=n.onPress,x=n.onRelease,R=n.onRight,A=n.onLeft,M=n.onUp,w=n.onDown,S=n.onChangeX,b=n.onChangeY,P=n.onChange,N=n.onToggleX,B=n.onToggleY,W=n.onHover,X=n.onHoverEnd,q=n.onMove,Y=n.ignoreCheck,V=n.isNormalizer,te=n.onGestureStart,L=n.onGestureEnd,ue=n.onWheel,Ie=n.onEnable,et=n.onDisable,$=n.onClick,ee=n.scrollSpeed,ge=n.capture,ne=n.allowClicks,be=n.lockAxis,we=n.onLockAxis;this.target=a=kn(a)||Gr,this.vars=n,d&&(d=fn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,ee=ee||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(ei.getComputedStyle(So).lineHeight)||22);var Ve,tt,We,Le,U,bt,Fe,k=this,Te=0,at=0,Re=n.passive||!u,C=es(a,Nn),T=es(a,Qt),G=C(),Q=T(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",K=Ea(a),he=a.ownerDocument||Vr,ae=[0,0,0],pe=[0,0,0],Ye=0,ie=function(){return Ye=Ta()},oe=function(Ae,Ze){return(k.event=Ae)&&d&&~d.indexOf(Ae.target)||Ze&&J&&Ae.pointerType!=="touch"||Y&&Y(Ae,Ze)},Ne=function(){k._vx.reset(),k._vy.reset(),tt.pause(),h&&h(k)},De=function(){var Ae=k.deltaX=Kp(ae),Ze=k.deltaY=Kp(pe),me=Math.abs(Ae)>=i,Xe=Math.abs(Ze)>=i;P&&(me||Xe)&&P(k,Ae,Ze,ae,pe),me&&(R&&k.deltaX>0&&R(k),A&&k.deltaX<0&&A(k),S&&S(k),N&&k.deltaX<0!=Te<0&&N(k),Te=k.deltaX,ae[0]=ae[1]=ae[2]=0),Xe&&(w&&k.deltaY>0&&w(k),M&&k.deltaY<0&&M(k),b&&b(k),B&&k.deltaY<0!=at<0&&B(k),at=k.deltaY,pe[0]=pe[1]=pe[2]=0),(Le||We)&&(q&&q(k),We&&(v(k),We=!1),Le=!1),bt&&!(bt=!1)&&we&&we(k),U&&(ue(k),U=!1),Ve=0},ve=function(Ae,Ze,me){ae[me]+=Ae,pe[me]+=Ze,k._vx.update(Ae),k._vy.update(Ze),l?Ve||(Ve=requestAnimationFrame(De)):De()},Ke=function(Ae,Ze){be&&!Fe&&(k.axis=Fe=Math.abs(Ae)>Math.abs(Ze)?"x":"y",bt=!0),Fe!=="y"&&(ae[2]+=Ae,k._vx.update(Ae,!0)),Fe!=="x"&&(pe[2]+=Ze,k._vy.update(Ze,!0)),l?Ve||(Ve=requestAnimationFrame(De)):De()},Oe=function(Ae){if(!oe(Ae,1)){Ae=oa(Ae,u);var Ze=Ae.clientX,me=Ae.clientY,Xe=Ze-k.x,Ce=me-k.y,He=k.isDragging;k.x=Ze,k.y=me,(He||Math.abs(k.startX-Ze)>=s||Math.abs(k.startY-me)>=s)&&(v&&(We=!0),He||(k.isDragging=!0),Ke(Xe,Ce),He||m&&m(k))}},ut=k.onPress=function(xe){oe(xe,1)||xe&&xe.button||(k.axis=Fe=null,tt.pause(),k.isPressed=!0,xe=oa(xe),Te=at=0,k.startX=k.x=xe.clientX,k.startY=k.y=xe.clientY,k._vx.reset(),k._vy.reset(),Rn(V?a:he,Ei[1],Oe,Re,!0),k.deltaX=k.deltaY=0,y&&y(k))},D=k.onRelease=function(xe){if(!oe(xe,1)){wn(V?a:he,Ei[1],Oe,!0);var Ae=!isNaN(k.y-k.startY),Ze=k.isDragging,me=Ze&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Xe=oa(xe);!me&&Ae&&(k._vx.reset(),k._vy.reset(),u&&ne&&fn.delayedCall(.08,function(){if(Ta()-Ye>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(he.createEvent){var Ce=he.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,ei,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Ce)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Ze&&!V&&tt.restart(!0),p&&Ze&&p(k),x&&x(k,me)}},le=function(Ae){return Ae.touches&&Ae.touches.length>1&&(k.isGesturing=!0)&&te(Ae,k.isDragging)},j=function(){return(k.isGesturing=!1)||L(k)},Z=function(Ae){if(!oe(Ae)){var Ze=C(),me=T();ve((Ze-G)*ee,(me-Q)*ee,1),G=Ze,Q=me,h&&tt.restart(!0)}},ce=function(Ae){if(!oe(Ae)){Ae=oa(Ae,u),ue&&(U=!0);var Ze=(Ae.deltaMode===1?c:Ae.deltaMode===2?ei.innerHeight:1)*_;ve(Ae.deltaX*Ze,Ae.deltaY*Ze,0),h&&!V&&tt.restart(!0)}},fe=function(Ae){if(!oe(Ae)){var Ze=Ae.clientX,me=Ae.clientY,Xe=Ze-k.x,Ce=me-k.y;k.x=Ze,k.y=me,Le=!0,h&&tt.restart(!0),(Xe||Ce)&&Ke(Xe,Ce)}},Be=function(Ae){k.event=Ae,W(k)},ht=function(Ae){k.event=Ae,X(k)},kt=function(Ae){return oe(Ae)||oa(Ae,u)&&$(k)};tt=k._dc=fn.delayedCall(f||.25,Ne).pause(),k.deltaX=k.deltaY=0,k._vx=Yh(0,50,!0),k._vy=Yh(0,50,!0),k.scrollX=C,k.scrollY=T,k.isDragging=k.isGesturing=k.isPressed=!1,gg(this),k.enable=function(xe){return k.isEnabled||(Rn(K?he:a,"scroll",qh),o.indexOf("scroll")>=0&&Rn(K?he:a,"scroll",Z,Re,ge),o.indexOf("wheel")>=0&&Rn(a,"wheel",ce,Re,ge),(o.indexOf("touch")>=0&&mg||o.indexOf("pointer")>=0)&&(Rn(a,Ei[0],ut,Re,ge),Rn(he,Ei[2],D),Rn(he,Ei[3],D),ne&&Rn(a,"click",ie,!0,!0),$&&Rn(a,"click",kt),te&&Rn(he,"gesturestart",le),L&&Rn(he,"gestureend",j),W&&Rn(a,ps+"enter",Be),X&&Rn(a,ps+"leave",ht),q&&Rn(a,ps+"move",fe)),k.isEnabled=!0,xe&&xe.type&&ut(xe),Ie&&Ie(k)),k},k.disable=function(){k.isEnabled&&(ho.filter(function(xe){return xe!==k&&Ea(xe.target)}).length||wn(K?he:a,"scroll",qh),k.isPressed&&(k._vx.reset(),k._vy.reset(),wn(V?a:he,Ei[1],Oe,!0)),wn(K?he:a,"scroll",Z,ge),wn(a,"wheel",ce,ge),wn(a,Ei[0],ut,ge),wn(he,Ei[2],D),wn(he,Ei[3],D),wn(a,"click",ie,!0),wn(a,"click",kt),wn(he,"gesturestart",le),wn(he,"gestureend",j),wn(a,ps+"enter",Be),wn(a,ps+"leave",ht),wn(a,ps+"move",fe),k.isEnabled=k.isPressed=k.isDragging=!1,et&&et(k))},k.kill=k.revert=function(){k.disable();var xe=ho.indexOf(k);xe>=0&&ho.splice(xe,1),gr===k&&(gr=0)},ho.push(k),V&&Ea(a)&&(gr=k),k.enable(g)},oA(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Xt.version="3.12.5";Xt.create=function(r){return new Xt(r)};Xt.register=Mg;Xt.getAll=function(){return ho.slice()};Xt.getById=function(r){return ho.filter(function(e){return e.vars.id===r})[0]};xg()&&fn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Me,ro,ct,Ut,wi,Dt,Sg,xl,Wa,Aa,da,Cc,mn,Dl,jh,Ln,Zp,Jp,so,bg,Cu,Tg,Pn,$h,Eg,Ag,Ur,Kh,qf,bo,Yf,vl,Zh,Pu,Pc=1,_n=Date.now,Lu=_n(),gi=0,pa=0,Qp=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},em=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},cA=function r(){return pa&&requestAnimationFrame(r)},tm=function(){return Dl=1},nm=function(){return Dl=0},Fi=function(e){return e},ma=function(e){return Math.round(e*1e5)/1e5||0},wg=function(){return typeof window<"u"},Rg=function(){return Me||wg()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Ds=function(e){return!!~Sg.indexOf(e)},Cg=function(e){return(e==="Height"?Yf:ct["inner"+e])||wi["client"+e]||Dt["client"+e]},Pg=function(e){return $r(e,"getBoundingClientRect")||(Ds(e)?function(){return tl.width=ct.innerWidth,tl.height=Yf,tl}:function(){return hr(e)})},lA=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=$r(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Cg(s):e["client"+s])||0}},uA=function(e,t){return!t||~qi.indexOf(e)?Pg(e):function(){return tl}},Gi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=$r(e,n))?o()-Pg(e)()[s]:Ds(e)?(wi[n]||Dt[n])-Cg(i):e[n]-e["offset"+i])},Lc=function(e,t){for(var n=0;n<so.length;n+=3)(!t||~t.indexOf(so[n+1]))&&e(so[n],so[n+1],so[n+2])},Zn=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},_a=function(e){return typeof e=="number"},ms=function(e){return typeof e=="object"},aa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Du=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},no=Math.abs,Lg="left",Dg="top",jf="right",$f="bottom",Ts="width",Es="height",wa="Right",Ra="Left",Ca="Top",Pa="Bottom",jt="padding",hi="margin",Ho="Width",Kf="Height",Jt="px",fi=function(e){return ct.getComputedStyle(e)},hA=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},im=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hr=function(e,t){var n=t&&fi(e)[jh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},yl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ig=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},fA=function(e){return function(t){return Me.utils.snap(Ig(e),t)}},Zf=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},dA=function(e){return function(t,n){return Zf(Ig(e))(t,n.direction)}},Dc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ic=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},rm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nc={toggleActions:"play",anticipatePin:0},Ml={top:0,left:0,center:.5,bottom:1,right:1},Zc=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ml?Ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Uc=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=Ut.createElement("div"),g=Ds(n)||$r(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Dt:n,v=e.indexOf("start")!==-1,y=v?l:u,x="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||c)&&g?"fixed;":"absolute;"),(m||c||!g)&&(x+=(i===Qt?jf:$f)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Jc(_,0,i,v),_},Jc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ho]=1,s["border"+a+Ho]=0,s[n.p]=t+"px",Me.set(e,s)},it=[],Jh={},Xa,sm=function(){return _n()-gi>34&&(Xa||(Xa=requestAnimationFrame(vr)))},io=function(){(!Pn||!Pn.isPressed||Pn.startX>Dt.clientWidth)&&(rt.cache++,Pn?Xa||(Xa=requestAnimationFrame(vr)):vr(),gi||Ns("scrollStart"),gi=_n())},Iu=function(){Ag=ct.innerWidth,Eg=ct.innerHeight},ga=function(){rt.cache++,!mn&&!Tg&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!$h||Ag!==ct.innerWidth||Math.abs(ct.innerHeight-Eg)>ct.innerHeight*.25)&&xl.restart(!0)},Is={},pA=[],Ng=function r(){return rn(ze,"scrollEnd",r)||vs(!0)},Ns=function(e){return Is[e]&&Is[e].map(function(t){return t()})||pA},Kn=[],Ug=function(e){for(var t=0;t<Kn.length;t+=5)(!e||Kn[t+4]&&Kn[t+4].query===e)&&(Kn[t].style.cssText=Kn[t+1],Kn[t].getBBox&&Kn[t].setAttribute("transform",Kn[t+2]||""),Kn[t+3].uncache=1)},Jf=function(e,t){var n;for(Ln=0;Ln<it.length;Ln++)n=it[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));vl=!0,t&&Ug(t),t||Ns("revert")},Og=function(e,t){rt.cache++,(t||!Dn)&&rt.forEach(function(n){return Un(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(ct.history.scrollRestoration=qf=e)},Dn,As=0,om,mA=function(){if(om!==As){var e=om=As;requestAnimationFrame(function(){return e===As&&vs(!0)})}},Fg=function(){Dt.appendChild(bo),Yf=!Pn&&bo.offsetHeight||ct.innerHeight,Dt.removeChild(bo)},am=function(e){return Wa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vs=function(e,t){if(gi&&!e&&!vl){sn(ze,"scrollEnd",Ng);return}Fg(),Dn=ze.isRefreshing=!0,rt.forEach(function(i){return Un(i)&&++i.cacheID&&(i.rec=i())});var n=Ns("refreshInit");bg&&ze.sort(),t||Jf(),rt.forEach(function(i){Un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),vl=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Zh=1,am(!0),it.forEach(function(i){var s=Gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),am(!1),Zh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){Un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Og(qf,1),xl.pause(),As++,Dn=2,vr(2),it.forEach(function(i){return Un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=ze.isRefreshing=!1,Ns("refresh")},Qh=0,Qc=1,La,vr=function(e){if(e===2||!Dn&&!vl){ze.isUpdating=!0,La&&La.update(0);var t=it.length,n=_n(),i=n-Lu>=50,s=t&&it[0].scroll();if(Qc=Qh>s?-1:1,Dn||(Qh=s),i&&(gi&&!Dl&&n-gi>200&&(gi=0,Ns("scrollEnd")),da=Lu,Lu=n),Qc<0){for(Ln=t;Ln-- >0;)it[Ln]&&it[Ln].update(0,i);Qc=1}else for(Ln=0;Ln<t;Ln++)it[Ln]&&it[Ln].update(0,i);ze.isUpdating=!1}Xa=0},ef=[Lg,Dg,$f,jf,hi+Pa,hi+wa,hi+Ca,hi+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],el=ef.concat([Ts,Es,"boxSizing","max"+Ho,"max"+Kf,"position",hi,jt,jt+Ca,jt+wa,jt+Pa,jt+Ra]),_A=function(e,t,n){To(n);var i=e._gsap;if(i.spacerIsNative)To(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=ef.length,o=t.style,a=e.style,c;s--;)c=ef[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[$f]=a[jf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ts]=yl(e,Nn)+Jt,o[Es]=yl(e,Qt)+Jt,o[jt]=a[hi]=a[Dg]=a[Lg]="0",To(i),a[Ts]=a["max"+Ho]=n[Ts],a[Es]=a["max"+Kf]=n[Es],a[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},gA=/([A-Z])/g,To=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(gA,"-$1").toLowerCase())}},Oc=function(e){for(var t=el.length,n=e.style,i=[],s=0;s<t;s++)i.push(el[s],n[el[s]]);return i.t=e,i},xA=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},tl={left:0,top:0},cm=function(e,t,n,i,s,o,a,c,l,u,h,f,d,_){Un(e)&&(e=e(c)),Zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Zc("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),_a(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Jc(a,n,i,!0);else{Un(t)&&(t=t(c));var y=(e||"0").split(" "),x,R,A,M;v=kn(t,c)||Dt,x=hr(v)||{},(!x||!x.left&&!x.top)&&fi(v).display==="none"&&(M=v.style.display,v.style.display="block",x=hr(v),M?v.style.display=M:v.style.removeProperty("display")),R=Zc(y[0],x[i.d]),A=Zc(y[1]||"0",n),e=x[i.p]-l[i.p]-u+R+s-A,a&&Jc(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(c[_]=e||-.001,e<0&&(e=0)),o){var w=e+n,S=o._isStart;m="scroll"+i.d2,Jc(o,w,i,S&&w>20||!S&&(h?Math.max(Dt[m],wi[m]):o.parentNode[m])<=w+1),h&&(l=hr(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Jt))}return d&&v&&(m=hr(v),d.seek(f),p=hr(v),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},vA=/(webkit|moz|length|cssText|inset)/i,lm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Dt){e._stOrig=s.cssText,a=fi(e);for(o in a)!+o&&!vA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},Bg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Fc=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},um=function(e,t){var n=es(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,h){var f=o.tween,d=c.onComplete,_={};l=l||n();var g=Bg(n,l,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,f&&f.kill(),c[i]=a,c.inherit=!1,c.modifiers=_,_[i]=function(){return g(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){rt.cache++,o.tween&&vr()},c.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Me.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(e,"wheel",n.wheelHandler),ze.isTouch&&sn(e,"touchmove",n.wheelHandler),s},ze=function(){function r(t,n){ro||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Kh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!pa){this.update=this.refresh=this.kill=Fi;return}n=im(Zn(n)||_a(n)||n.nodeType?{trigger:n}:n,Nc);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,y=s.once,x=s.snap,R=s.pinReparent,A=s.pinSpacer,M=s.containerAnimation,w=s.fastScrollEnd,S=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:Qt,P=!h&&h!==0,N=kn(n.scroller||ct),B=Me.core.getCache(N),W=Ds(N),X=("pinType"in n?n.pinType:$r(N,"pinType")||W&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),V="markers"in n?n.markers:Nc.markers,te=W?0:parseFloat(fi(N)["border"+b.p2+Ho])||0,L=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ie=lA(N,W,b),et=uA(N,W),$=0,ee=0,ge=0,ne=es(N,b),be,we,Ve,tt,We,Le,U,bt,Fe,k,Te,at,Re,C,T,G,Q,J,K,he,ae,pe,Ye,ie,oe,Ne,De,ve,Ke,Oe,ut,D,le,j,Z,ce,fe,Be,ht;if(L._startClamp=L._endClamp=!1,L._dir=b,m*=45,L.scroller=N,L.scroll=M?M.time.bind(M):ne,tt=ne(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(bg=1,n.refreshPriority===-9999&&(La=L)),B.tweenScroll=B.tweenScroll||{top:um(N,Qt),left:um(N,Nn)},L.tweenTo=be=B.tweenScroll[b.p],L.scrubDuration=function(me){le=_a(me)&&me,le?D?D.duration(me):D=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return p&&p(L)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Oe=0,c||(c=i.vars.id)),x&&((!ms(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Dt.style&&Me.set(W?[Dt,wi]:N,{scrollBehavior:"auto"}),rt.forEach(function(me){return Un(me)&&me.target===(W?Ut.scrollingElement||wi:N)&&(me.smooth=!1)}),Ve=Un(x.snapTo)?x.snapTo:x.snapTo==="labels"?fA(i):x.snapTo==="labelsDirectional"?dA(i):x.directional!==!1?function(me,Xe){return Zf(x.snapTo)(me,_n()-ee<500?0:Xe.direction)}:Me.utils.snap(x.snapTo),j=x.duration||{min:.1,max:2},j=ms(j)?Aa(j.min,j.max):Aa(j,j),Z=Me.delayedCall(x.delay||le/2||.1,function(){var me=ne(),Xe=_n()-ee<500,Ce=be.tween;if((Xe||Math.abs(L.getVelocity())<10)&&!Ce&&!Dl&&$!==me){var He=(me-Le)/C,Vt=i&&!P?i.totalProgress():He,nt=Xe?0:(Vt-ut)/(_n()-da)*1e3||0,wt=Me.utils.clamp(-He,1-He,no(nt/2)*nt/.185),Kt=He+(x.inertia===!1?0:wt),Tt,Et,pt=x,qn=pt.onStart,Ct=pt.onInterrupt,En=pt.onComplete;if(Tt=Ve(Kt,L),_a(Tt)||(Tt=Kt),Et=Math.round(Le+Tt*C),me<=U&&me>=Le&&Et!==me){if(Ce&&!Ce._initted&&Ce.data<=no(Et-me))return;x.inertia===!1&&(wt=Tt-He),be(Et,{duration:j(no(Math.max(no(Kt-Vt),no(Tt-Vt))*.185/nt/.05||0)),ease:x.ease||"power3",data:no(Et-me),onInterrupt:function(){return Z.restart(!0)&&Ct&&Ct(L)},onComplete:function(){L.update(),$=ne(),i&&(D?D.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),Oe=ut=i&&!P?i.totalProgress():L.progress,v&&v(L),En&&En(L)}},me,wt*C,Et-me-wt*C),qn&&qn(L,be.tween)}}else L.isActive&&$!==me&&Z.restart(!0)}).pause()),c&&(Jh[c]=L),f=L.trigger=kn(f||d!==!0&&d),ht=f&&f._gsap&&f._gsap.stRevert,ht&&(ht=ht(L)),d=d===!0?f:kn(d),Zn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===hi||(_=!_&&d.parentNode&&d.parentNode.style&&fi(d.parentNode).display==="flex"?!1:jt),L.pin=d,we=Me.core.getCache(d),we.spacer?T=we.pinState:(A&&(A=kn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),we.spacerIsNative=!!A,A&&(we.spacerState=Oc(A))),we.spacer=J=A||Ut.createElement("div"),J.classList.add("pin-spacer"),c&&J.classList.add("pin-spacer-"+c),we.pinState=T=Oc(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),L.spacer=J=we.spacer,Ke=fi(d),ie=Ke[_+b.os2],he=Me.getProperty(d),ae=Me.quickSetter(d,b.a,Jt),Nu(d,J,Ke),Q=Oc(d)),V){at=ms(V)?im(V,rm):rm,k=Uc("scroller-start",c,N,b,at,0),Te=Uc("scroller-end",c,N,b,at,0,k),K=k["offset"+b.op.d2];var kt=kn($r(N,"content")||N);bt=this.markerStart=Uc("start",c,kt,b,at,K,0,M),Fe=this.markerEnd=Uc("end",c,kt,b,at,K,0,M),M&&(Be=Me.quickSetter([bt,Fe],b.a,Jt)),!X&&!(qi.length&&$r(N,"fixedMarkers")===!0)&&(hA(W?Dt:N),Me.set([k,Te],{force3D:!0}),Ne=Me.quickSetter(k,b.a,Jt),ve=Me.quickSetter(Te,b.a,Jt))}if(M){var xe=M.vars.onUpdate,Ae=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){L.update(0,0,1),xe&&xe.apply(M,Ae||[])})}if(L.previous=function(){return it[it.indexOf(L)-1]},L.next=function(){return it[it.indexOf(L)+1]},L.revert=function(me,Xe){if(!Xe)return L.kill(!0);var Ce=me!==!1||!L.enabled,He=mn;Ce!==L.isReverted&&(Ce&&(ce=Math.max(ne(),L.scroll.rec||0),ge=L.progress,fe=i&&i.progress()),bt&&[bt,Fe,k,Te].forEach(function(Vt){return Vt.style.display=Ce?"none":"block"}),Ce&&(mn=L,L.update(Ce)),d&&(!R||!L.isActive)&&(Ce?_A(d,J,T):Nu(d,J,fi(d),oe)),Ce||L.update(Ce),mn=He,L.isReverted=Ce)},L.refresh=function(me,Xe,Ce,He){if(!((mn||!L.enabled)&&!Xe)){if(d&&me&&gi){sn(r,"scrollEnd",Ng);return}!Dn&&ue&&ue(L),mn=L,be.tween&&!Ce&&(be.tween.kill(),be.tween=0),D&&D.pause(),g&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Vt=Ie(),nt=et(),wt=M?M.duration():Gi(N,b),Kt=C<=.01,Tt=0,Et=He||0,pt=ms(Ce)?Ce.end:n.end,qn=n.endTrigger||f,Ct=ms(Ce)?Ce.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),En=L.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,L),E=f&&Math.max(0,it.indexOf(L))||0,O=E,z,H,F,re,se,de,ye,ke,qe,Se,je,ft,mt;for(V&&ms(Ce)&&(ft=Me.getProperty(k,b.p),mt=Me.getProperty(Te,b.p));O--;)de=it[O],de.end||de.refresh(0,1)||(mn=L),ye=de.pin,ye&&(ye===f||ye===d||ye===En)&&!de.isReverted&&(Se||(Se=[]),Se.unshift(de),de.revert(!0,!0)),de!==it[O]&&(E--,O--);for(Un(Ct)&&(Ct=Ct(L)),Ct=Qp(Ct,"start",L),Le=cm(Ct,f,Vt,b,ne(),bt,k,L,nt,te,X,wt,M,L._startClamp&&"_startClamp")||(d?-.001:0),Un(pt)&&(pt=pt(L)),Zn(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(Zn(Ct)?Ct.split(" ")[0]:"")+pt:(Tt=Zc(pt.substr(2),Vt),pt=Zn(Ct)?Ct:(M?Me.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Le):Le)+Tt,qn=f)),pt=Qp(pt,"end",L),U=Math.max(Le,cm(pt||(qn?"100% 0":wt),qn,Vt,b,ne()+Tt,Fe,Te,L,nt,te,X,wt,M,L._endClamp&&"_endClamp"))||-.001,Tt=0,O=E;O--;)de=it[O],ye=de.pin,ye&&de.start-de._pinPush<=Le&&!M&&de.end>0&&(z=de.end-(L._startClamp?Math.max(0,de.start):de.start),(ye===f&&de.start-de._pinPush<Le||ye===En)&&isNaN(Ct)&&(Tt+=z*(1-de.progress)),ye===d&&(Et+=z));if(Le+=Tt,U+=Tt,L._startClamp&&(L._startClamp+=Tt),L._endClamp&&!Dn&&(L._endClamp=U||-.001,U=Math.min(U,Gi(N,b))),C=U-Le||(Le-=.01)&&.001,Kt&&(ge=Me.utils.clamp(0,1,Me.utils.normalize(Le,U,ce))),L._pinPush=Et,bt&&Tt&&(z={},z[b.a]="+="+Tt,En&&(z[b.p]="-="+ne()),Me.set([bt,Fe],z)),d&&!(Zh&&L.end>=Gi(N,b)))z=fi(d),re=b===Qt,F=ne(),pe=parseFloat(he(b.a))+Et,!wt&&U>1&&(je=(W?Ut.scrollingElement||wi:N).style,je={style:je,value:je["overflow"+b.a.toUpperCase()]},W&&fi(Dt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(je.style["overflow"+b.a.toUpperCase()]="scroll")),Nu(d,J,z),Q=Oc(d),H=hr(d,!0),ke=X&&es(N,re?Nn:Qt)(),_?(oe=[_+b.os2,C+Et+Jt],oe.t=J,O=_===jt?yl(d,b)+C+Et:0,O&&(oe.push(b.d,O+Jt),J.style.flexBasis!=="auto"&&(J.style.flexBasis=O+Jt)),To(oe),En&&it.forEach(function(qt){qt.pin===En&&qt.vars.pinSpacing!==!1&&(qt._subPinOffset=!0)}),X&&ne(ce)):(O=yl(d,b),O&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=O+Jt)),X&&(se={top:H.top+(re?F-Le:ke)+Jt,left:H.left+(re?ke:F-Le)+Jt,boxSizing:"border-box",position:"fixed"},se[Ts]=se["max"+Ho]=Math.ceil(H.width)+Jt,se[Es]=se["max"+Kf]=Math.ceil(H.height)+Jt,se[hi]=se[hi+Ca]=se[hi+wa]=se[hi+Pa]=se[hi+Ra]="0",se[jt]=z[jt],se[jt+Ca]=z[jt+Ca],se[jt+wa]=z[jt+wa],se[jt+Pa]=z[jt+Pa],se[jt+Ra]=z[jt+Ra],G=xA(T,se,R),Dn&&ne(0)),i?(qe=i._initted,Cu(1),i.render(i.duration(),!0,!0),Ye=he(b.a)-pe+C+Et,De=Math.abs(C-Ye)>1,X&&De&&G.splice(G.length-2,2),i.render(0,!0,!0),qe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Cu(0)):Ye=C,je&&(je.value?je.style["overflow"+b.a.toUpperCase()]=je.value:je.style.removeProperty("overflow-"+b.a));else if(f&&ne()&&!M)for(H=f.parentNode;H&&H!==Dt;)H._pinOffset&&(Le-=H._pinOffset,U-=H._pinOffset),H=H.parentNode;Se&&Se.forEach(function(qt){return qt.revert(!1,!0)}),L.start=Le,L.end=U,tt=We=Dn?ce:ne(),!M&&!Dn&&(tt<ce&&ne(ce),L.scroll.rec=0),L.revert(!1,!0),ee=_n(),Z&&($=-1,Z.restart(!0)),mn=0,i&&P&&(i._initted||fe)&&i.progress()!==fe&&i.progress(fe||0,!0).render(i.time(),!0,!0),(Kt||ge!==L.progress||M||g)&&(i&&!P&&i.totalProgress(M&&Le<-.001&&!ge?Me.utils.normalize(Le,U,0):ge,!0),L.progress=Kt||(tt-Le)/C===ge?0:ge),d&&_&&(J._pinOffset=Math.round(L.progress*Ye)),D&&D.invalidate(),isNaN(ft)||(ft-=Me.getProperty(k,b.p),mt-=Me.getProperty(Te,b.p),Fc(k,b,ft),Fc(bt,b,ft-(He||0)),Fc(Te,b,mt),Fc(Fe,b,mt-(He||0))),Kt&&!Dn&&L.update(),u&&!Dn&&!Re&&(Re=!0,u(L),Re=!1)}},L.getVelocity=function(){return(ne()-We)/(_n()-da)*1e3||0},L.endAnimation=function(){aa(L.callbackAnimation),i&&(D?D.progress(1):i.paused()?P||aa(i,L.direction<0,1):aa(i,i.reversed()))},L.labelToScroll=function(me){return i&&i.labels&&(Le||L.refresh()||Le)+i.labels[me]/i.duration()*C||0},L.getTrailing=function(me){var Xe=it.indexOf(L),Ce=L.direction>0?it.slice(0,Xe).reverse():it.slice(Xe+1);return(Zn(me)?Ce.filter(function(He){return He.vars.preventOverlaps===me}):Ce).filter(function(He){return L.direction>0?He.end<=Le:He.start>=U})},L.update=function(me,Xe,Ce){if(!(M&&!Ce&&!me)){var He=Dn===!0?ce:L.scroll(),Vt=me?0:(He-Le)/C,nt=Vt<0?0:Vt>1?1:Vt||0,wt=L.progress,Kt,Tt,Et,pt,qn,Ct,En,E;if(Xe&&(We=tt,tt=M?ne():He,x&&(ut=Oe,Oe=i&&!P?i.totalProgress():nt)),m&&d&&!mn&&!Pc&&gi&&(!nt&&Le<He+(He-We)/(_n()-da)*m?nt=1e-4:nt===1&&U>He+(He-We)/(_n()-da)*m&&(nt=.9999)),nt!==wt&&L.enabled){if(Kt=L.isActive=!!nt&&nt<1,Tt=!!wt&&wt<1,Ct=Kt!==Tt,qn=Ct||!!nt!=!!wt,L.direction=nt>wt?1:-1,L.progress=nt,qn&&!mn&&(Et=nt&&!wt?0:nt===1?1:wt===1?2:3,P&&(pt=!Ct&&Y[Et+1]!=="none"&&Y[Et+1]||Y[Et],E=i&&(pt==="complete"||pt==="reset"||pt in i))),S&&(Ct||E)&&(E||h||!i)&&(Un(S)?S(L):L.getTrailing(S).forEach(function(F){return F.endAnimation()})),P||(D&&!mn&&!Pc?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",nt,i._tTime/i._tDur):(D.vars.totalProgress=nt,D.invalidate().restart())):i&&i.totalProgress(nt,!!(mn&&(ee||me)))),d){if(me&&_&&(J.style[_+b.os2]=ie),!X)ae(ma(pe+Ye*nt));else if(qn){if(En=!me&&nt>wt&&U+1>He&&He+1>=Gi(N,b),R)if(!me&&(Kt||En)){var O=hr(d,!0),z=He-Le;lm(d,Dt,O.top+(b===Qt?z:0)+Jt,O.left+(b===Qt?0:z)+Jt)}else lm(d,J);To(Kt||En?G:Q),De&&nt<1&&Kt||ae(pe+(nt===1&&!En?Ye:0))}}x&&!be.tween&&!mn&&!Pc&&Z.restart(!0),a&&(Ct||y&&nt&&(nt<1||!Pu))&&Wa(a.targets).forEach(function(F){return F.classList[Kt||y?"add":"remove"](a.className)}),o&&!P&&!me&&o(L),qn&&!mn?(P&&(E&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),o&&o(L)),(Ct||!Pu)&&(l&&Ct&&Du(L,l),q[Et]&&Du(L,q[Et]),y&&(nt===1?L.kill(!1,1):q[Et]=0),Ct||(Et=nt===1?1:3,q[Et]&&Du(L,q[Et]))),w&&!Kt&&Math.abs(L.getVelocity())>(_a(w)?w:2500)&&(aa(L.callbackAnimation),D?D.progress(1):aa(i,pt==="reverse"?1:!nt,1))):P&&o&&!mn&&o(L)}if(ve){var H=M?He/M.duration()*(M._caScrollDist||0):He;Ne(H+(k._isFlipped?1:0)),ve(H)}Be&&Be(-He/M.duration()*(M._caScrollDist||0))}},L.enable=function(me,Xe){L.enabled||(L.enabled=!0,sn(N,"resize",ga),W||sn(N,"scroll",io),ue&&sn(r,"refreshInit",ue),me!==!1&&(L.progress=ge=0,tt=We=$=ne()),Xe!==!1&&L.refresh())},L.getTween=function(me){return me&&be?be.tween:D},L.setPositions=function(me,Xe,Ce,He){if(M){var Vt=M.scrollTrigger,nt=M.duration(),wt=Vt.end-Vt.start;me=Vt.start+wt*me/nt,Xe=Vt.start+wt*Xe/nt}L.refresh(!1,!1,{start:em(me,Ce&&!!L._startClamp),end:em(Xe,Ce&&!!L._endClamp)},He),L.update()},L.adjustPinSpacing=function(me){if(oe&&me){var Xe=oe.indexOf(b.d)+1;oe[Xe]=parseFloat(oe[Xe])+me+Jt,oe[1]=parseFloat(oe[1])+me+Jt,To(oe)}},L.disable=function(me,Xe){if(L.enabled&&(me!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Xe||D&&D.pause(),ce=0,we&&(we.uncache=1),ue&&rn(r,"refreshInit",ue),Z&&(Z.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!W)){for(var Ce=it.length;Ce--;)if(it[Ce].scroller===N&&it[Ce]!==L)return;rn(N,"resize",ga),W||rn(N,"scroll",io)}},L.kill=function(me,Xe){L.disable(me,Xe),D&&!Xe&&D.kill(),c&&delete Jh[c];var Ce=it.indexOf(L);Ce>=0&&it.splice(Ce,1),Ce===Ln&&Qc>0&&Ln--,Ce=0,it.forEach(function(He){return He.scroller===L.scroller&&(Ce=1)}),Ce||Dn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Xe||i.kill()),bt&&[bt,Fe,k,Te].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),La===L&&(La=0),d&&(we&&(we.uncache=1),Ce=0,it.forEach(function(He){return He.pin===d&&Ce++}),Ce||(we.spacer=0)),n.onKill&&n.onKill(L)},it.push(L),L.enable(!1,!1),ht&&ht(L),i&&i.add&&!C){var Ze=L.update;L.update=function(){L.update=Ze,Le||U||L.refresh()},Me.delayedCall(.01,L.update),C=.01,Le=U=0}else L.refresh();d&&mA()},r.register=function(n){return ro||(Me=n||Rg(),wg()&&window.document&&r.enable(),ro=pa),ro},r.defaults=function(n){if(n)for(var i in n)Nc[i]=n[i];return Nc},r.disable=function(n,i){pa=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),rn(ct,"wheel",io),rn(Ut,"scroll",io),clearInterval(Cc),rn(Ut,"touchcancel",Fi),rn(Dt,"touchstart",Fi),Dc(rn,Ut,"pointerdown,touchstart,mousedown",tm),Dc(rn,Ut,"pointerup,touchend,mouseup",nm),xl.kill(),Lc(rn);for(var s=0;s<rt.length;s+=3)Ic(rn,rt[s],rt[s+1]),Ic(rn,rt[s],rt[s+2])},r.enable=function(){if(ct=window,Ut=document,wi=Ut.documentElement,Dt=Ut.body,Me&&(Wa=Me.utils.toArray,Aa=Me.utils.clamp,Kh=Me.core.context||Fi,Cu=Me.core.suppressOverwrites||Fi,qf=ct.history.scrollRestoration||"auto",Qh=ct.pageYOffset,Me.core.globals("ScrollTrigger",r),Dt)){pa=1,bo=document.createElement("div"),bo.style.height="100vh",bo.style.position="absolute",Fg(),cA(),Xt.register(Me),r.isTouch=Xt.isTouch,Ur=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),$h=Xt.isTouch===1,sn(ct,"wheel",io),Sg=[ct,Ut,wi,Dt],Me.matchMedia?(r.matchMedia=function(c){var l=Me.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},Me.addEventListener("matchMediaInit",function(){return Jf()}),Me.addEventListener("matchMediaRevert",function(){return Ug()}),Me.addEventListener("matchMedia",function(){vs(0,1),Ns("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return Iu(),Iu})):console.warn("Requires GSAP 3.11.0 or later"),Iu(),sn(Ut,"scroll",io);var n=Dt.style,i=n.borderTopStyle,s=Me.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=hr(Dt),Qt.m=Math.round(o.top+Qt.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Cc=setInterval(sm,250),Me.delayedCall(.5,function(){return Pc=0}),sn(Ut,"touchcancel",Fi),sn(Dt,"touchstart",Fi),Dc(sn,Ut,"pointerdown,touchstart,mousedown",tm),Dc(sn,Ut,"pointerup,touchend,mouseup",nm),jh=Me.utils.checkPrefix("transform"),el.push(jh),ro=_n(),xl=Me.delayedCall(.2,vs).pause(),so=[Ut,"visibilitychange",function(){var c=ct.innerWidth,l=ct.innerHeight;Ut.hidden?(Zp=c,Jp=l):(Zp!==c||Jp!==l)&&ga()},Ut,"DOMContentLoaded",vs,ct,"load",vs,ct,"resize",ga],Lc(sn),it.forEach(function(c){return c.enable(0,1)}),a=0;a<rt.length;a+=3)Ic(rn,rt[a],rt[a+1]),Ic(rn,rt[a],rt[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Pu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Cc)||(Cc=i)&&setInterval(sm,i),"ignoreMobileResize"in n&&($h=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Lc(rn)||Lc(sn,n.autoRefreshEvents||"none"),Tg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),o=rt.indexOf(s),a=Ds(s);~o&&rt.splice(o,a?6:2),i&&(a?qi.unshift(ct,i,Dt,i,wi,i):qi.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?kn(n):n).getBoundingClientRect(),a=o[s?Ts:Es]*i||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[s?Ts:Es],c=i==null?a/2:i in Ml?Ml[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/ct.innerWidth:(o.top+c)/ct.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Is.killAll||[];Is={},i.forEach(function(s){return s()})}},r}();ze.version="3.12.5";ze.saveStyles=function(r){return r?Wa(r).forEach(function(e){if(e&&e.style){var t=Kn.indexOf(e);t>=0&&Kn.splice(t,5),Kn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),Kh())}}):Kn};ze.revert=function(r,e){return Jf(!r,e)};ze.create=function(r,e){return new ze(r,e)};ze.refresh=function(r){return r?ga():(ro||ze.register())&&vs(!0)};ze.update=function(r){return++rt.cache&&vr(r===!0?2:0)};ze.clearScrollMemory=Og;ze.maxScroll=function(r,e){return Gi(r,e?Nn:Qt)};ze.getScrollFunc=function(r,e){return es(kn(r),e?Nn:Qt)};ze.getById=function(r){return Jh[r]};ze.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ze.isScrolling=function(){return!!gi};ze.snapDirectional=Zf;ze.addEventListener=function(r,e){var t=Is[r]||(Is[r]=[]);~t.indexOf(e)||t.push(e)};ze.removeEventListener=function(r,e){var t=Is[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var h=[],f=[],d=Me.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Un(s)&&(s=s(),sn(ze,"refresh",function(){return s=e.batchMax()})),Wa(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(ze.create(l))}),t};var hm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Uu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===wi&&r(Dt,t)},Bc={auto:1,scroll:1},yA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=_n(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Dt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Bc[(c=fi(s)).overflowY]||Bc[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ds(s)&&(Bc[(c=fi(s)).overflowY]||Bc[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},kg=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&yA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(Ut,Xt.eventTypes[0],dm,!1,!0)},onDisable:function(){return rn(Ut,Xt.eventTypes[0],dm,!0)}})},MA=/(input|label|select|textarea)/i,fm,dm=function(e){var t=MA.test(e.target.tagName);(t||fm)&&(e._gsapAllow=!0,fm=t)},SA=function(e){ms(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=kn(e.target)||wi,u=Me.core.globals().ScrollSmoother,h=u&&u.get(),f=Ur&&(e.content&&kn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=es(l,Qt),_=es(l,Nn),g=1,m=(Xt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,v=Un(i)?function(){return i(a)}:function(){return i||2.8},y,x,R=kg(l,e.type,!0,s),A=function(){return x=!1},M=Fi,w=Fi,S=function(){c=Gi(l,Qt),w=Aa(Ur?1:0,c),n&&(M=Aa(0,Gi(l,Nn))),y=As},b=function(){f._gsap.y=ma(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(x){requestAnimationFrame(A);var V=ma(a.deltaY/2),te=w(d.v-V);if(f&&te!==d.v+d.offset){d.offset=te-d.v;var L=ma((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=rt.cache,vr()}return!0}d.offset&&b(),x=!0},N,B,W,X,q=function(){S(),N.isActive()&&N.vars.scrollY>c&&(d()>c?N.progress(1)&&d(c):N.resetTo("scrollY",c))};return f&&Me.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return Ur&&Y.type==="touchmove"&&P()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){x=!1;var Y=g;g=ma((ct.visualViewport&&ct.visualViewport.scale||1)/m),N.pause(),Y!==g&&Uu(l,g>1.01?!0:n?!1:"x"),B=_(),W=d(),S(),y=As},e.onRelease=e.onGestureStart=function(Y,V){if(d.offset&&b(),!V)X.restart(!0);else{rt.cache++;var te=v(),L,ue;n&&(L=_(),ue=L+te*.05*-Y.velocityX/.227,te*=hm(_,L,ue,Gi(l,Nn)),N.vars.scrollX=M(ue)),L=d(),ue=L+te*.05*-Y.velocityY/.227,te*=hm(d,L,ue,Gi(l,Qt)),N.vars.scrollY=w(ue),N.invalidate().duration(te).play(.01),(Ur&&N.vars.scrollY>=c||L>=c-1)&&Me.to({},{onUpdate:q,duration:te})}o&&o(Y)},e.onWheel=function(){N._ts&&N.pause(),_n()-p>1e3&&(y=0,p=_n())},e.onChange=function(Y,V,te,L,ue){if(As!==y&&S(),V&&n&&_(M(L[2]===V?B+(Y.startX-Y.x):_()+V-L[1])),te){d.offset&&b();var Ie=ue[2]===te,et=Ie?W+Y.startY-Y.y:d()+te-ue[1],$=w(et);Ie&&et!==$&&(W+=$-et),d($)}(te||V)&&vr()},e.onEnable=function(){Uu(l,n?!1:"x"),ze.addEventListener("refresh",q),sn(ct,"resize",q),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){Uu(l,!0),rn(ct,"resize",q),ze.removeEventListener("refresh",q),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=Ur,Ur&&!d()&&d(1),Ur&&Me.ticker.add(Fi),X=a._dc,N=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bg(d,d(),function(){return N.pause()})},onUpdate:vr,onComplete:X.vars.onComplete}),a};ze.sort=function(r){return it.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ze.observe=function(r){return new Xt(r)};ze.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof Xt?r:SA(r);return Pn&&Pn.target===e.target&&Pn.kill(),Ds(e.target)&&(Pn=e),e};ze.core={_getVelocityProp:Yh,_inputObserver:kg,_scrollers:rt,_proxies:qi,bridge:{ss:function(){gi||Ns("scrollStart"),gi=_n()},ref:function(){return mn}}};Rg()&&Me.registerPlugin(ze);Ee.registerPlugin(ze);const on=(r,e=document)=>e.querySelector(r),Lt=(r,e=document)=>[...e.querySelectorAll(r)],zg=matchMedia("(prefers-reduced-motion: reduce)").matches;function bA(r){if(r.dataset.partido)return;r.dataset.partido="1";const e=t=>{[...t.childNodes].forEach(n=>{if(n.nodeType===3){const i=document.createDocumentFragment();(n.textContent??"").split(/(\s+)/).forEach(s=>{if(s)if(/^\s+$/.test(s))i.appendChild(document.createTextNode(" "));else{const o=document.createElement("span");o.className="w",o.textContent=s,i.appendChild(o)}}),n.replaceWith(i)}else n.nodeType===1&&n.tagName!=="BR"&&e(n)})};e(r)}function TA(r,e=1.6,t=0){const n=+r.dataset.n,i=r.dataset.suf??"",s={v:0},o=a=>r.dataset.fmt==="m2"?Math.round(a).toLocaleString("es-CO")+" m²":Math.round(a).toLocaleString("es-CO")+i;Ee.fromTo(s,{v:0},{v:n,duration:e,delay:t,ease:"power2.out",onUpdate:()=>r.textContent=o(s.v)})}function EA(r,e,t){return Array.from({length:r},(n,i)=>{const s=i*2.399963+.6,o=.45+.55*((i+1)/r);return{x:Math.cos(s)*e*o,y:Math.sin(s)*t*o}})}function AA(r){const e=Ee.timeline({defaults:{ease:"power3.out"}});Ee.set(Lt("[data-a]",r).filter(i=>!["chips","pills"].includes(i.dataset.a)),{clearProps:"transform,filter"});let t=0;Lt('[data-a="up"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,y:36,filter:"blur(8px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:1},.1+s*.12)),Lt('[data-a="words"]',r).forEach(i=>{bA(i),Ee.set(i,{autoAlpha:1}),e.fromTo(Lt(".w",i),{autoAlpha:0,yPercent:70,rotateX:-70,filter:"blur(14px)",transformPerspective:600},{autoAlpha:1,yPercent:0,rotateX:0,filter:"blur(0px)",duration:1.1,stagger:.07},.05),t=Math.max(t,.05+Lt(".w",i).length*.07+.6)});const n=on('[data-a="strike"]',r);if(n){e.fromTo(n,{autoAlpha:0,x:-30,filter:"blur(10px)"},{autoAlpha:1,x:0,filter:"blur(0px)",duration:.8},t),e.fromTo(n,{"--s":0},{"--s":1,duration:.6,ease:"power2.inOut"},t+.9),e.to(n,{opacity:.4,duration:.5},t+1.4);const i=on('[data-a="deblur"]',r);i&&e.fromTo(i,{autoAlpha:0,x:60,scale:1.25,filter:"blur(22px)"},{autoAlpha:1,x:0,scale:1,filter:"blur(0px)",duration:1.1},t+1.5)}return Lt('[data-a="fly"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,z:-500,y:140,rotateX:38,rotateY:s%2?14:-14,filter:"blur(14px)",transformPerspective:1e3},{autoAlpha:1,z:0,y:0,rotateX:0,rotateY:0,filter:"blur(0px)",duration:1.3},.35+s*.14)),Lt('[data-a="flip"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,rotateY:-95,x:-80,z:-300,transformPerspective:1400,transformOrigin:"left center"},{autoAlpha:1,rotateY:0,x:0,z:0,duration:1.2,ease:"power4.out"},.4+s*.22)),Lt('[data-a="tilt"]',r).forEach(i=>e.fromTo(i,{autoAlpha:0,rotateX:45,rotateY:-25,y:160,z:-300,transformPerspective:1600},{autoAlpha:1,rotateX:6,rotateY:-7,y:0,z:0,duration:1.6,ease:"power3.out"},.3)),Lt('[data-a="msg"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,x:i.classList.contains("der")?70:-70,scale:.85,filter:"blur(8px)"},{autoAlpha:1,x:0,scale:1,filter:"blur(0px)",duration:.7,ease:"back.out(1.6)"},1.4+s*.75)),Lt('[data-a="stagger"]',r).forEach((i,s)=>{Ee.set(i,{autoAlpha:1}),e.fromTo([...i.children],{autoAlpha:0,y:26,x:-16,scale:.9,filter:"blur(8px)"},{autoAlpha:1,y:0,x:0,scale:1,filter:"blur(0px)",duration:.7,stagger:.07,ease:"back.out(1.5)"},.5+s*.15)}),Lt('[data-a="pop"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,scale:.6,y:20,filter:"blur(10px)"},{autoAlpha:1,scale:1,y:0,filter:"blur(0px)",duration:.8,ease:"back.out(1.8)"},.55+s*.12)),Lt(".etapa",r).forEach((i,s)=>e.fromTo([...i.children],{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.5,stagger:.08},.9+s*.22)),Lt('[data-a="chips"], [data-a="pills"]',r).forEach(i=>{const s=Lt(":scope > *",i),o=i.clientWidth,a=i.clientHeight,c=EA(s.length,o*.46,a*.44);s.forEach((l,u)=>{Ee.killTweensOf(l),e.fromTo(l,{xPercent:-50,yPercent:-50,x:0,y:0,z:-600,scale:.2,autoAlpha:0,filter:"blur(16px)"},{x:c[u].x,y:c[u].y,z:0,scale:1,autoAlpha:1,filter:"blur(0px)",duration:1.3,ease:"expo.out",onComplete:()=>{zg||Ee.to(l,{y:c[u].y+(u%2?10:-10),x:c[u].x+(u%3?6:-6),duration:2.6+u%4*.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})}},.5+u*.07)})}),Lt("[data-n]",r).forEach(i=>e.call(()=>TA(i,i.closest(".leyendo")?2.4:1.6),[],.6)),Lt(".leyendo",r).forEach(i=>{e.fromTo(on(".barra i",i),{width:"0%"},{width:"100%",duration:2.4,ease:"power2.out"},.6);const s=Lt(".checks span",i);s.forEach(o=>o.classList.remove("ok")),s.forEach((o,a)=>e.call(()=>o.classList.add("ok"),[],.9+a*(1.8/s.length)))}),e}function wA(){Lt("[data-escena]").forEach(r=>{const e=Lt("[data-a]",r).filter(o=>!["words","chips","pills"].includes(o.dataset.a));Ee.set(e,{autoAlpha:0});let t=null;const n=()=>{t==null||t.kill(),t=AA(r)},i=o=>{t==null||t.kill(),Ee.to(Lt("[data-a]",r).filter(a=>!["chips","pills"].includes(a.dataset.a)),{autoAlpha:0,y:-40*o,filter:"blur(10px)",duration:.5,ease:"power2.in",overwrite:"auto"})};r.dataset.escena==="hero"&&setTimeout(n,500);const s=r.dataset.escena==="capas";ze.create({trigger:r,start:s?"top 40%":"top 68%",end:s?"bottom 60%":"bottom 32%",onEnter:n,onEnterBack:n,onLeave:()=>i(1),onLeaveBack:()=>i(-1)})}),RA(),Ee.from("#top > *",{autoAlpha:0,y:-24,stagger:.1,duration:.9,ease:"power3.out",delay:.3}),Ee.from("#dock",{autoAlpha:0,y:60,scale:.9,duration:1,ease:"back.out(1.6)",delay:.8}),Ee.fromTo("#capas .capa",{autoAlpha:0,y:14},{autoAlpha:1,y:0,stagger:.07,duration:.5,delay:1.2,clearProps:"opacity,visibility,transform"})}function RA(){if(zg||matchMedia("(hover: none)").matches)return;const r=".stat, .etapa, .tcapa, .leyendo, .alerta, .msg, .total, .grafico, .frente, .linea, .renders figure, .actor, .resp, .info-lamina, .hab-frame";document.addEventListener("pointermove",e=>{const t=e.target.closest(r);if(Lt(r).forEach(a=>{a!==t&&a.dataset.inclinada&&(delete a.dataset.inclinada,Ee.to(a,{rotateX:0,rotateY:0,"--gx":"50%","--gy":"-20%",duration:.7,ease:"power3.out"}))}),!t)return;const n=t.getBoundingClientRect(),i=(e.clientX-n.left)/n.width-.5,s=(e.clientY-n.top)/n.height-.5,o=t.classList.contains("hab-frame")||t.classList.contains("grafico")?4:9;t.dataset.inclinada="1",Ee.to(t,{rotateY:i*o,rotateX:-s*o,transformPerspective:900,"--gx":`${(i+.5)*100}%`,"--gy":`${(s+.5)*100}%`,duration:.5,ease:"power2.out"})})}function CA(){let r=!1;const e=o=>"$"+Math.round(o*1e6).toLocaleString("es-CO"),t={total:0,iva:0},n=on("#barras");n.innerHTML=["A","B","C","D"].map(o=>`<div class="barra-et"><b>${o}</b><div class="t"><i></i></div><span>—</span></div>`).join("");const i=on("#curva"),s=(o=!0)=>{const a=+on("#rMeses").value,c=r?13.8:23;on("#vMeses").textContent=a+" meses";const l=[33,47,a*c,31],u=l.reduce((A,M)=>A+M,0);Ee.to(t,{total:u,iva:u*1.19,duration:.8,ease:"power2.out",onUpdate:()=>{on("#oTotal").textContent=e(t.total),on("#oIva").textContent=e(t.iva)}});const h=23*9;Lt(".barra-et",n).forEach((A,M)=>{Ee.to(on("i",A),{width:100*l[M]/h+"%",duration:o?1:0,ease:"power3.out",delay:o?M*.08:0}),on("span",A).textContent=e(l[M])});const f=A=>{const M=[0,33,56.5,80];for(let w=1;w<=a;w++)M.push(80+w*A);return M.push(M[M.length-1]+31),M},d=600,_=230,g=3+a+2,m=340,p=A=>A.map((M,w)=>`${w?"L":"M"}${w/(g-1)*d},${_-M/m*_}`).join(" "),v=f(23),y=f(13.8);i.innerHTML=`
      <defs><linearGradient id="gA" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#D5BE91" stop-opacity=".35"/><stop offset="1" stop-color="#D5BE91" stop-opacity="0"/></linearGradient></defs>
      ${[100,200,300].map(A=>`<line x1="0" x2="${d}" y1="${_-A/m*_}" y2="${_-A/m*_}" stroke="rgba(220,229,236,.08)"/><text x="${d}" y="${_-A/m*_-6}" text-anchor="end">$${A} M</text>`).join("")}
      <path d="${p(r?y:v)} L${d},${_} L0,${_} Z" fill="url(#gA)" class="area"/>
      <path d="${p(v)}" fill="none" stroke="${r?"rgba(220,229,236,.3)":"#D5BE91"}" stroke-width="${r?1.5:3}" class="ln"/>
      <path d="${p(y)}" fill="none" stroke="${r?"#D5BE91":"rgba(220,229,236,.3)"}" stroke-width="${r?3:1.5}" stroke-dasharray="${r?"":"5 6"}" class="ln2"/>
      <text x="6" y="${_+22}">Mes 0</text><text x="${d}" y="${_+22}" text-anchor="end">Mes ${g-1}</text>`;const x=i.querySelector(".ln"),R=x.getTotalLength();o&&(Ee.fromTo(x,{strokeDasharray:R,strokeDashoffset:R},{strokeDashoffset:0,duration:1.8,ease:"power2.inOut",onComplete:()=>{r||(x.style.strokeDasharray="")}}),Ee.fromTo(i.querySelector(".area"),{opacity:0},{opacity:1,duration:1.2,delay:.8}))};on("#rMeses").addEventListener("input",()=>s(!1)),on("#segModo").addEventListener("click",o=>{const a=o.target.closest("button");a&&(r=a.dataset.m==="int",Lt("#segModo button").forEach(c=>c.classList.toggle("on",c===a)),s(!0))}),s(!1),ze.create({trigger:'[data-escena="honorarios"]',start:"top 60%",onEnter:()=>s(!0),onEnterBack:()=>s(!0)})}const PA=[{f:"Frente 1",s:["214","215","216","217"],c:"1 JS + 3 estándar"},{f:"Frente 2",s:["225","218","219","220"],c:"1 JS + 3 estándar"},{f:"Frente 3",s:["223","222","224","221"],c:"3 JS + 1 estándar"}],LA=[["01 sep","Inicio real","Entrega del piso e inspecciones preliminares en las doce habitaciones."],["03 sep","Inicio flujo productivo","Cuadrillas civiles, plomeros y eléctricos circulan por habitaciones."],["21 sep","Control de redes","Cada baño con redes y pruebas liberadas antes de autorizar enchapes."],["05 oct","Control de acabados","Enchape terminado antes de cielos RH y dilatación perimetral."],["31 oct","Cierre físico del piso","Pruebas, punch list, aseo y dossier terminados."],["02 nov","Entrega formal conjunta","Recepción consolidada del piso completo."]];function DA(){on("#frentes").innerHTML=PA.map(e=>`<div class="glass frente"><b>${e.f}</b><div class="habs">${e.s.map(t=>`<span>${t}</span>`).join("<em>→</em>")}</div></div>`).join(""),on("#hitos").innerHTML='<i class="traz"></i>'+LA.map(([e,t,n])=>`<div class="hito"><time>${e} · 2026</time><b>${t}</b><p>${n}</p></div>`).join("");const r=()=>{const e=Ee.timeline({delay:.5});e.fromTo(".frente",{autoAlpha:0,x:-60,rotateY:25,transformPerspective:800},{autoAlpha:1,x:0,rotateY:0,stagger:.15,duration:.9,ease:"power3.out"},0),e.fromTo(".frente .habs span",{autoAlpha:0,scale:.4},{autoAlpha:1,scale:1,stagger:.04,duration:.4,ease:"back.out(2)"},.4),e.fromTo(".eje .traz",{height:0},{height:"calc(100% - 12px)",duration:2.6,ease:"power1.inOut"},.6),e.fromTo(".hito",{autoAlpha:0,x:40,filter:"blur(6px)"},{autoAlpha:1,x:0,filter:"blur(0px)",stagger:.4,duration:.6},.7)};Ee.set(".hito, .frente",{autoAlpha:0}),ze.create({trigger:'[data-escena="obra"]',start:"top 65%",onEnter:r,onEnterBack:r})}function IA(){const r=on("#resp");Lt(".actor").forEach(e=>e.addEventListener("click",()=>{Lt(".actor").forEach(t=>t.classList.toggle("on",t===e)),Ee.to(r,{autoAlpha:0,y:10,duration:.2,onComplete:()=>{on("small",r).textContent=e.textContent,on("p",r).textContent=e.dataset.r,Ee.to(r,{autoAlpha:1,y:0,duration:.4})}})}))}function NA(){const r=document.getElementById("hab");let e=!1,t=!1;ze.create({trigger:'[data-escena="interior"]',start:"top bottom+=800",end:"bottom top",onToggle:i=>{t=i.isActive,i.isActive&&!e&&(e=!0,n())}});function n(){const i=new e_({canvas:r,antialias:!0,alpha:!0});i.setPixelRatio(Math.min(2,devicePixelRatio)),i.toneMapping=rf,i.toneMappingExposure=.78,i.setClearColor(0,0);const s=new xf,o=new ol(i);s.environment=o.fromScene(new h_,.04).texture,s.add(new c_("#fff6e8","#3a4656",.7));const a=new Rl("#ffe7c4",1.1);a.position.set(4,10,6),s.add(a);const c=new xn(32,1,.05,200),l=new Bi(new I(0,-1,0),0);i.clippingPlanes=[l];const u=new I;let h=6;const f={az:35,el:52,auto:0,cut:1},d=()=>{const y=r.clientWidth,x=r.clientHeight;!y||!x||(i.setSize(y,x,!1),c.aspect=y/x,c.updateProjectionMatrix())};addEventListener("resize",d),d(),new f_().setDRACOLoader(new m_().setDecoderPath("draco/")).load("img/hab216.glb",y=>{const x=y.scene,R=new yi().setFromObject(x),A=R.getSize(new I),M=A.y>100?.001:A.y>10?.01:1;x.scale.setScalar(M),R.setFromObject(x),R.getCenter(u),R.getSize(A),x.position.sub(u),u.set(0,0,0);const w=-A.y/2;h=Math.max(A.x,A.z)*.95,l.constant=w+Math.min(A.y*.82,2.35),x.traverse(S=>{const b=S;b.isMesh&&(b.frustumCulled=!0)}),s.add(x),document.getElementById("habCarga").classList.add("fin"),Ee.fromTo(f,{el:85,cut:0},{el:48,cut:1,duration:2.4,ease:"power3.out"}),Ee.fromTo(x.scale,{x:M*.85,y:M*.85,z:M*.85},{x:M,y:M,z:M,duration:2,ease:"power3.out"})},void 0,()=>{document.getElementById("habCarga").textContent="No se pudo cargar la habitación"});let g=!1,m=0,p=0;r.addEventListener("pointerdown",y=>{g=!0,m=y.clientX,p=y.clientY,r.setPointerCapture(y.pointerId)}),r.addEventListener("pointerup",()=>{g=!1}),r.addEventListener("pointermove",y=>{g&&(f.az-=(y.clientX-m)*.35,f.el=ii.clamp(f.el+(y.clientY-p)*.25,15,88),m=y.clientX,p=y.clientY)});const v=()=>{if(requestAnimationFrame(v),!t)return;g||(f.az+=.12),d();const y=ii.degToRad(f.az),x=ii.degToRad(f.el),R=h*1.45/Math.max(.75,Math.min(1.2,c.aspect));c.position.set(u.x+R*Math.cos(x)*Math.sin(y),u.y+R*Math.sin(x),u.z+R*Math.cos(x)*Math.cos(y)),c.lookAt(u.x,u.y-.3,u.z),i.render(s,c)};v()}}Ee.registerPlugin(ze);const nl=["214","215","216","217","218","219","220","221","222","223","224","225"],UA=["215","216","217","218","219","220","221","222"],Ou="https://alejagoguti-cpu.github.io/planosfinales/assets/planos/",hs={arq:{nombre:"Arquitectónico",color:"#D5BE91",lam:nl.flatMap(r=>{const e=Ou+`arquitectonico/HLF-${r}-arquitectonico.pdf`;return UA.includes(r)?[{h:r,f:`arq-${r}-presentacion`,t:"Planta, sección y 3D",pdf:e},{h:r,f:`arq-${r}-1`,t:"Planta arquitectónica y amoblamiento",pdf:e}]:[{h:r,f:`arq-${r}-1`,t:"Planta arquitectónica y amoblamiento",pdf:e},{h:r,f:`arq-${r}-2`,t:"Pisos, enchapes y cielos",pdf:e}]})},agua:{nombre:"Agua fría y caliente",color:"#3d8bff",lam:nl.map(r=>({h:r,f:`agu-${r}-1`,t:"Red de agua fría y caliente · planta, axonometría y detalles",pdf:Ou+`agua/HLF-${r}-agua.pdf`}))},san:{nombre:"Desagües",color:"#c08a52",lam:nl.map(r=>({h:r,f:`san-${r}-1`,t:"Red sanitaria (desagües) · planta, axonometría y detalles",pdf:Ou+`desagues/HLF-${r}-desagues.pdf`}))}};function OA(r){const e=document.getElementById("pista"),t=document.getElementById("habsCarrusel"),n=document.getElementById("infoLamina"),i=document.getElementById("lightbox"),s=document.getElementById("tabsPlanos");s.innerHTML=Object.keys(hs).map(M=>`<button data-s="${M}" style="--c:${hs[M].color}" class="${M==="arq"?"on":""}"><i></i>${hs[M].nombre}<small>${hs[M].lam.length}</small></button>`).join(""),t.innerHTML=nl.map(M=>`<button data-h="${M}">${M}</button>`).join("");let o="arq",a=hs.arq.lam,c=[];const l=()=>{e.innerHTML=a.map((M,w)=>`<figure class="lamina" data-i="${w}" style="--c:${hs[o].color}"><img data-src="planos/${M.f}-t.webp" alt="Habitación ${M.h} · ${M.t}" draggable="false" /><figcaption><b>${M.h}</b>${M.t}</figcaption></figure>`).join(""),c=[...e.querySelectorAll(".lamina")]};l();let u=0,h,f=!1;s.addEventListener("click",M=>{var P;const w=M.target.closest("button");if(!w||w.dataset.s===o)return;const S=w.dataset.s,b=(P=a[u])==null?void 0:P.h;s.querySelectorAll("button").forEach(N=>N.classList.toggle("on",N===w)),clearInterval(h),Ee.to(c,{autoAlpha:0,rotateX:-70,y:160,z:-500,duration:.45,stagger:.012,ease:"power2.in",overwrite:!0,onComplete:()=>{o=S,a=hs[o].lam,l(),u=Math.max(0,a.findIndex(N=>N.h===b)),R(),m()}}),r==null||r(S)});const d=M=>{var S;const w=(S=c[(M+a.length)%a.length])==null?void 0:S.querySelector("img");w&&w.dataset.src&&(w.src=w.dataset.src,delete w.dataset.src)};function _(M=.9){const w=a.length,S=e.clientWidth,b=Math.min(300,S*.3);c.forEach((N,B)=>{let W=B-u;W>w/2&&(W-=w),W<-w/2&&(W+=w);const X=Math.abs(W);X<=3&&d(B),Ee.to(N,{x:W*b*(X>1?.92:1),z:-X*220,rotateY:W*-28,scale:X===0?1:.86,autoAlpha:X>3?0:1-X*.22,filter:`blur(${X>1?(X-1)*2:0}px) brightness(${X===0?1:.7})`,zIndex:100-X,duration:M,ease:"power3.out",overwrite:"auto"}),N.classList.toggle("on",X===0)});const P=a[u];t.querySelectorAll("button").forEach(N=>N.classList.toggle("on",N.dataset.h===P.h)),Ee.fromTo(n,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.5}),n.innerHTML=`<b>Habitación ${P.h}</b><span>${P.t}</span><span class="num">${String(u+1).padStart(2,"0")} / ${a.length}</span><a href="${P.pdf}" target="_blank" rel="noopener">PDF ↗</a>`}const g=M=>{u=(M+a.length)%a.length,_(),m()},m=()=>{clearInterval(h),f&&(h=window.setInterval(()=>{u=(u+1)%a.length,_(1.1)},3800))};document.getElementById("cPrev").addEventListener("click",()=>g(u-1)),document.getElementById("cNext").addEventListener("click",()=>g(u+1)),t.addEventListener("click",M=>{const w=M.target.closest("button");w&&g(a.findIndex(S=>S.h===w.dataset.h))}),e.addEventListener("click",M=>{const w=M.target.closest(".lamina");if(!w)return;const S=+w.dataset.i;if(S!==u)return g(S);y(S)});let p=0,v=!1;e.addEventListener("pointerdown",M=>{p=M.clientX,v=!0}),addEventListener("pointerup",M=>{if(!v)return;v=!1;const w=M.clientX-p;Math.abs(w)>50&&g(u+(w<0?1:-1))}),e.addEventListener("mouseenter",()=>clearInterval(h)),e.addEventListener("mouseleave",m),addEventListener("keydown",M=>{if(i.classList.contains("on")){M.key==="Escape"&&x(),M.key==="ArrowRight"&&y(u=(u+1)%a.length),M.key==="ArrowLeft"&&y(u=(u-1+a.length)%a.length);return}f&&(M.key==="ArrowRight"&&g(u+1),M.key==="ArrowLeft"&&g(u-1))});function y(M){const w=a[M];i.innerHTML=`<div class="lb-top"><b>Habitación ${w.h}</b><span>${w.t}</span><a href="${w.pdf}" target="_blank" rel="noopener">Abrir PDF ↗</a><button class="lb-x" aria-label="Cerrar">✕</button></div><div class="lb-img"><img src="planos/${w.f}-t.webp" alt="" /></div>`;const S=i.querySelector("img"),b=new Image;b.onload=()=>S.src=b.src,b.src=`planos/${w.f}.webp`,i.classList.add("on"),clearInterval(h),Ee.fromTo(i.querySelector(".lb-img"),{scale:.7,rotateX:25,autoAlpha:0,transformPerspective:1200},{scale:1,rotateX:0,autoAlpha:1,duration:.7,ease:"power3.out"}),i.querySelector(".lb-x").addEventListener("click",x);let P=!1;S.addEventListener("click",N=>{P=!P;const B=S.getBoundingClientRect();S.style.transformOrigin=`${(N.clientX-B.left)/B.width*100}% ${(N.clientY-B.top)/B.height*100}%`,Ee.to(S,{scale:P?2.6:1,duration:.6,ease:"power3.inOut"})})}function x(){i.classList.remove("on"),m(),_()}i.addEventListener("click",M=>{M.target===i&&x()}),addEventListener("resize",()=>_(0)),Ee.set(c,{autoAlpha:0});const R=()=>{c.forEach((M,w)=>{let S=w-u;S>a.length/2&&(S-=a.length),Math.abs(S)<=3&&d(w)}),Ee.fromTo(c,{x:0,y:0,z:-1400,rotateY:0,rotateX:60,autoAlpha:0,scale:.6},{x:0,z:-600,rotateX:0,autoAlpha:.9,scale:.7,duration:.7,stagger:.025,ease:"power2.out",onComplete:()=>_(1.2)})},A=M=>{f=!1,clearInterval(h),Ee.to(c,{autoAlpha:0,z:-900,y:-120*M,rotateX:30*M,duration:.6,stagger:.015,ease:"power2.in",overwrite:"auto"})};_(0),Ee.set(c,{autoAlpha:0}),ze.create({trigger:'[data-escena="planos"]',start:"top 70%",end:"bottom 30%",onEnter:()=>{f=!0,R(),m()},onEnterBack:()=>{f=!0,R(),m()},onLeave:()=>A(1),onLeaveBack:()=>A(-1)})}const pm=["coordinar los diseños","controlar la obra","detectar interferencias","registrar cada cambio","entregar el gemelo digital"],FA=[["A","BEP y EIR/AIR"],["B","Federación de modelos"],["B","Control de interferencias"],["C","Mesa BIM semanal"],["C","RFI y cambios"],["C","Informe mensual"],["D","As-built"],["D","Gemelo digital"],["","ISO 19650"],["","IFC"],["","BIMForum LOD 2025"],["","CDE"]];function BA(){const r=FA.map(([i,s])=>`<span>${i?`<b>${i}</b>`:""}${s}</span>`).join("");document.getElementById("marquee").innerHTML=r+r;const e=document.getElementById("rota");let t=0;setInterval(()=>{t=(t+1)%pm.length,Ee.timeline().to(e,{autoAlpha:0,y:-18,filter:"blur(10px)",duration:.4,ease:"power2.in"}).call(()=>{e.textContent=pm[t]}).fromTo(e,{autoAlpha:0,y:18,filter:"blur(10px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:.6,ease:"power3.out"})},2600);const n=[...document.querySelectorAll(".fl")].map(i=>({p:+(i.dataset.p??1),x:Ee.quickTo(i,"x",{duration:1.2,ease:"power3.out"}),y:Ee.quickTo(i,"y",{duration:1.2,ease:"power3.out"})}));addEventListener("pointermove",i=>{const s=i.clientX/innerWidth-.5,o=i.clientY/innerHeight-.5;n.forEach(a=>{a.x(-s*40*a.p),a.y(-o*30*a.p)})}),addEventListener("scroll",()=>{const i=Math.min(1,scrollY/innerHeight);document.querySelectorAll(".flotantes").forEach(s=>{s.style.opacity=String(1-i*1.4),s.style.transform=`translateY(${-i*120}px) scale(${1+i*.15})`})},{passive:!0}),document.querySelectorAll("[data-ir]").forEach(i=>i.addEventListener("click",()=>{const s=document.querySelector(`[data-escena="${i.dataset.ir}"]`);s&&window.scrollTo({top:s.offsetTop+10,behavior:"smooth"})}))}Ee.registerPlugin(ze);const fr=[{d:"Arquitectura",corto:"Arquitectura",color:"#D5BE91",texto:"Muros en ladrillo, fachadas, ventanería, puertas, barandas, escaleras y cubiertas de los siete niveles."},{d:"Estructura",corto:"Estructura",color:"#9fb6cc",texto:"Losas, columnas y vigas: la base para verificar alturas libres y pasos de instalaciones."},{d:"Hidrosanitaria",corto:"Hidro",color:"#3d8bff",texto:"Agua fría, agua caliente, red sanitaria y aparatos de los baños del Piso 2."},{d:"Red contra incendios",corto:"RCI",color:"#ff7a2f",texto:"Red de rociadores del Piso 2: ramales, bajantes y cabezas en habitaciones y pasillo."},{d:"Eléctrica",corto:"Eléctrica",color:"#2fd0b5",texto:"Conduit, cajas, tomas, aparatos y luminarias de cada habitación del Piso 2."},{d:"Mecánica",corto:"Mecánica",color:"#c3cbd4",texto:"Ductos de ventilación y extracción coordinados con las demás redes."}],Eo={muros:{arq:"#dcae95",tec:"#2a4664",disc:"Arquitectura",cerr:!0,nombre:"Muros"},ventanas:{arq:"#7f98a6",tec:"#6f93b8",disc:"Arquitectura",cerr:!0,vidrio:!0,nombre:"Ventanas"},paneles:{arq:"#d8d2c6",tec:"#2f4a66",disc:"Arquitectura",cerr:!0,nombre:"Paneles"},puertas:{arq:"#8a5a3b",tec:"#3a5674",disc:"Arquitectura",nombre:"Puertas"},montantes:{arq:"#3a3d41",tec:"#5c7896",disc:"Arquitectura",metal:.6,rough:.4,nombre:"Montantes"},barandas:{arq:"#3a3d41",tec:"#5c7896",disc:"Arquitectura",metal:.6,rough:.4,nombre:"Barandas"},escaleras:{arq:"#b4afa5",tec:"#35516e",disc:"Arquitectura",nombre:"Escaleras"},cubiertas:{arq:"#ffffff",tec:"#2a4664",disc:"Arquitectura",cerr:!0,nombre:"Cubiertas"},losas:{arq:"#bcb7ae",tec:"#8aa2bb",disc:"Estructura",nombre:"Losas"},columnas:{arq:"#c8c3b9",tec:"#c9d6e3",disc:"Estructura",nombre:"Columnas"},vigas:{arq:"#c8c3b9",tec:"#c9d6e3",disc:"Estructura",nombre:"Vigas"},af:{arq:"#3d8bff",tec:"#3d8bff",disc:"Hidrosanitaria",mep:!0,rough:.45,nombre:"Agua fría"},acs:{arq:"#ff4b3e",tec:"#ff4b3e",disc:"Hidrosanitaria",mep:!0,rough:.45,nombre:"Agua caliente"},san:{arq:"#c08a52",tec:"#c08a52",disc:"Hidrosanitaria",mep:!0,rough:.6,nombre:"Sanitaria"},sanitarios:{arq:"#f4f4f2",tec:"#f4f4f2",disc:"Hidrosanitaria",mep:!0,rough:.25,nombre:"Aparatos sanitarios"},otras:{arq:"#8b8f96",tec:"#8b8f96",disc:"Hidrosanitaria",mep:!0,nombre:"Otras tuberías"},rci:{arq:"#ff7a2f",tec:"#ff7a2f",disc:"Red contra incendios",mep:!0,rough:.45,nombre:"Rociadores y red RCI"},conduit:{arq:"#2fd0b5",tec:"#2fd0b5",disc:"Eléctrica",mep:!0,rough:.5,nombre:"Conduit"},aparatos:{arq:"#7fb2ff",tec:"#7fb2ff",disc:"Eléctrica",mep:!0,nombre:"Tomas y aparatos"},luminarias:{arq:"#ffd447",tec:"#ffd447",disc:"Eléctrica",mep:!0,nombre:"Luminarias"},ductos:{arq:"#c3cbd4",tec:"#c3cbd4",disc:"Mecánica",mep:!0,metal:.5,rough:.4,nombre:"Ductos"}},Il=document.getElementById("gl"),Ni=new e_({canvas:Il,antialias:!0,alpha:!0});Ni.setPixelRatio(Math.min(2,devicePixelRatio));Ni.setSize(innerWidth,innerHeight);Ni.setClearColor(0,0);Ni.shadowMap.enabled=!0;Ni.shadowMap.type=bm;Ni.toneMapping=rf;Ni.toneMappingExposure=1;Ni.localClippingEnabled=!0;const Er=new xf,kA=new ol(Ni);Er.environment=kA.fromScene(new h_,.04).texture;Er.environmentIntensity=.55;const zA=new c_("#dce5ec","#101d2c",.75);Er.add(zA);const Yo=new Rl("#ffe9c9",2.6);Yo.position.set(70,110,50);Yo.castShadow=!0;Yo.shadow.mapSize.set(2048,2048);Yo.shadow.bias=-5e-4;Object.assign(Yo.shadow.camera,{left:-110,right:110,top:110,bottom:-110,near:10,far:320});Er.add(Yo);const Hg=new Rl("#5d8fd6",1.1);Hg.position.set(-80,40,-90);Er.add(Hg);const HA=new gf("#101D2C",160,650);Er.fog=HA;const gn=new xn(35,innerWidth/innerHeight,.5,4e3),xi=new Zb(gn,Il);xi.enableDamping=!0;xi.dampingFactor=.08;xi.maxPolarAngle=Math.PI*.495;xi.minDistance=4;xi.maxDistance=900;xi.enabled=!1;const Da=new Bi(new I(0,-1,0),999),Vg=new Ue("#D5BE91"),zt={az:40,el:16,dist:125,tx:0,ty:10,tz:0,shift:.14,nube:1,bim:0,cerr:0,bordes:0,explode:0,corteY:999,verHasta:9,ctx:1,obra:1,alerta:0,giro:0},Nl={...zt,nube:0},Qf={Arquitectura:1,Estructura:1,Hidrosanitaria:0,"Red contra incendios":0,Eléctrica:0,Mecánica:0},Wr=new Set(["Arquitectura","Estructura"]),ui={px:0,py:0,tpx:0,tpy:0,drift:0};let Ii="cine";const Sn=[],Gg=[],hn=r=>document.querySelector(r),kc=(r,e,t)=>{const n=ii.clamp((t-r)/(e-r),0,1);return n*n*(3-2*n)},VA=new a_;function il(r,e,t=!0){const n=VA.load(r);return n.wrapS=n.wrapT=ws,n.repeat.set(1/e,1/e),n.colorSpace=t?Wt:ur,n.anisotropy=8,n}const mm={ladrillo:{map:il("ctx/tex_ladrillo_hlf.webp",1.28),normal:il("ctx/tex_ladrillo_hlf_n.webp",1.28,!1)},teja:{map:il("ctx/tex_teja.webp",1.5),normal:null}};function GA(r){const e={value:1};r.userData.uMapa=e,r.onBeforeCompile=t=>{t.uniforms.uMapa=e,t.fragmentShader=t.fragmentShader.replace("void main() {",`uniform float uMapa;
void main() {`).replace("#include <map_fragment>",`#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 diffuseColor *= mix(vec4(1.0), sampledDiffuseColor, uMapa);
#endif`)}}const Sl=new _r;Er.add(Sl);const Wg=[];function WA(r,e,t){let n=!1;for(let i=0,s=r.length-1;i<r.length;s=i++){const[o,a]=r[i],[c,l]=r[s];a>t!=l>t&&e<(c-o)*(t-a)/(l-a)+o&&(n=!n)}return n}async function XA(r){Sl.position.set(-r.e,-r.z,r.n);const{huella:e}=await(await fetch("ctx/huella.json")).json(),t=(a,c)=>[[0,0],[1,0],[-1,0],[0,1],[0,-1]].some(([l,u])=>e.some(h=>WA(h,a+l,c+u))),n=new f_().setDRACOLoader(new m_().setDecoderPath("draco/")),i={Terreno:["ctx/tex_prado.webp",6],Vias:["ctx/tex_asfalto.webp",5],Andenes:["ctx/tex_anden.webp",2],Separadores:["ctx/tex_prado.webp",6],Ciclorrutas:["ctx/tex_ciclo.webp",3]},s=["T01","T02","T03","T10","T11","T12","T13","T20","T21","T22","T23","T30","T31","T32"],o=[...Object.keys(i).map(a=>"suelo_"+a),"hotel_plazoleta","hotel_fachadas","hotel_cubiertas","torres_vecinas",...s.map(a=>"edificios_"+a)];await Promise.all(o.map(async a=>{let c;try{c=await n.loadAsync(`ctx/${a}.glb`)}catch{return}const l=a==="hotel_fachadas"||a==="hotel_cubiertas";c.scene.traverse(u=>{const h=u;if(!h.isMesh)return;const f=h.geometry,d=f.getAttribute("position");if(l&&f.index){const m=f.index.array,p=[];for(let v=0;v<m.length;v+=3){let y=0,x=0;for(let R=0;R<3;R++)y+=d.getX(m[v+R]),x+=d.getZ(m[v+R]);t(y/3,-x/3)||p.push(m[v],m[v+1],m[v+2])}f.setIndex(p)}const _=a.startsWith("suelo_")?a.slice(6):"";let g=h.material;if(_){const m=new Float32Array(d.count*2);for(let y=0;y<d.count;y++)m[y*2]=d.getX(y),m[y*2+1]=d.getZ(y);f.setAttribute("uv",new Ft(m,2));const[p,v]=i[_];g=new Sr({map:il(p,v),roughness:.95,color:"#4f5f71"}),(_==="Vias"||_==="Andenes"||_==="Ciclorrutas")&&(g.polygonOffset=!0,g.polygonOffsetFactor=-1,g.polygonOffsetUnits=-2),h.material=g}else a.startsWith("edificios_")&&(g=new Sr({color:"#34465b",roughness:.9,flatShading:!0}),h.material=g);g.userData.baseOp=g.transparent?g.opacity:1,Wg.push(g),h.receiveShadow=!0,h.castShadow=!_&&(a.startsWith("hotel")||a==="torres_vecinas"),h.raycast=()=>{}}),Sl.add(c.scene)}))}const ed=new yi,Ai=new I;let Xg=[];function _m(r,e,t,n,i,s={}){const o=new Mt(t,n);o.name=e,o.castShadow=!i.vidrio&&!i.mep,o.receiveShadow=!i.mep,o.userData={cat:e,...s},r.grupo.add(o),r.mats.set(e,n);const a=new i_(new yb(t,28),r.lmat);a.raycast=()=>{},a.visible=!1,i.mep||(r.grupo.add(a),r.lineas.set(e,a))}async function qA(){const r=await(await fetch("data/manifest.json")).json();let e=0;await Promise.all(r.niveles.map(async n=>{const i=await(await fetch("data/"+n.archivo)).arrayBuffer(),s={info:n,grupo:new _r,mats:new Map,lineas:new Map,lmat:new Mf({color:Vg,transparent:!0,opacity:0,depthWrite:!1,clippingPlanes:[Da]}),caja:new yi,destino:0,vis:1};s.grupo.name=n.nombre;for(const o of n.cats){const a=Eo[o.nombre];if(!a)continue;const c=new Tn;c.setAttribute("position",new Ft(new Float32Array(i,o.vOff,o.vLen),3)),o.tOff!==void 0&&c.setIndex(new Ft(new Uint32Array(i,o.tOff,o.tLen),1)),o.uvOff!==void 0&&c.setAttribute("uv",new Ft(new Float32Array(i,o.uvOff,o.uvLen),2)),c.computeBoundingBox(),s.caja.union(c.boundingBox);const l=o.nombre==="muros"?mm.ladrillo:o.nombre==="cubiertas"?mm.teja:null,u=new Sr({color:a.arq,roughness:a.rough??(a.vidrio?.08:.88),metalness:a.metal??(a.vidrio?.3:0),flatShading:!l,side:Ri,transparent:!!a.vidrio,opacity:a.vidrio?.5:1,clippingPlanes:[Da],map:(l==null?void 0:l.map)??null,normalMap:(l==null?void 0:l.normal)??null});l&&(c.computeVertexNormals(),GA(u)),u.userData.def=a,_m(s,o.nombre,c,u,a,{tris:(o.tLen??o.vLen/3)/3})}Sn[n.i]=s,Er.add(s.grupo),e++,hn("#cargando i b").style.width=90*e/r.niveles.length+"%"}));const t=Sn.find(n=>n.info.nombre==="PISO 2");try{const n=await(await fetch("data/mep.json")).json(),i=await(await fetch("data/mep.bin")).arrayBuffer();Xg=n.cats;for(const s of n.cats){const o=Eo[s.nombre];if(!o||!t)continue;const a=new Tn;if(a.setAttribute("position",new Ft(new Float32Array(i,s.vOff,s.vLen),3)),a.setIndex(new Ft(new Uint32Array(i,s.tOff,s.tLen),1)),a.computeVertexNormals(),a.computeBoundingBox(),ed.union(a.boundingBox),["af","acs","san","rci","conduit"].includes(s.nombre)){const l=a.getAttribute("position");let u=0,h=0,f=0;for(let d=0;d<l.count;d++)l.getY(d)<6&&(u+=l.getX(d),h+=l.getZ(d),f++);f&&(Ai.x+=u,Ai.z+=h,Ai.y+=f)}const c=new Sr({color:o.arq,roughness:o.rough??.6,metalness:o.metal??.05,clippingPlanes:[Da],transparent:!0,opacity:0,emissive:new Ue(o.arq).multiplyScalar(.55)});c.userData.def=o,_m(t,s.nombre,a,c,o,{elementos:s.elementos,tris:s.tLen/3,mep:!0}),t.grupo.children[t.grupo.children.length-1].renderOrder=2}}catch(n){console.warn("mep",n)}return Ai.y>0&&Ai.set(Ai.x/Ai.y,0,Ai.z/Ai.y),YA(),jA(),Sn.forEach((n,i)=>{n.destino=i*9+(n.info.nombre==="CUBIERTA"?8:0),n.grupo.children.forEach(s=>{s.isMesh&&(s.userData.nivel=i,Gg.push(s))})}),r}const qg=[];function YA(){const r=["muros","ventanas","losas","cubiertas","paneles","columnas"],e=new I,t=new I,n=new I,i=new I,s=new I;Sn.forEach(o=>{const a=[];o.grupo.children.forEach(h=>{const f=h;if(!f.isMesh||!r.includes(f.name))return;const d=f.geometry,_=d.getAttribute("position"),g=d.index,m=g?g.count/3:_.count/3;for(let p=0;p<m;p++){const v=g?g.getX(p*3):p*3,y=g?g.getX(p*3+1):p*3+1,x=g?g.getX(p*3+2):p*3+2;e.fromBufferAttribute(_,v),t.fromBufferAttribute(_,y),n.fromBufferAttribute(_,x);let R=i.subVectors(t,e).cross(s.subVectors(n,e)).length()/2*2.2;for(;R>0&&!(R<1&&Math.random()>R);){let A=Math.random(),M=Math.random();A+M>1&&(A=1-A,M=1-M),a.push(e.x+(t.x-e.x)*A+(n.x-e.x)*M,e.y+(t.y-e.y)*A+(n.y-e.y)*M,e.z+(t.z-e.z)*A+(n.z-e.z)*M),R--}}});const c=new Tn;c.setAttribute("position",new zn(a,3));const l=new bf({color:"#e6cf9c",size:.16,transparent:!0,opacity:0,depthWrite:!1,blending:Bu}),u=new r_(c,l);u.raycast=()=>{},u.visible=!1,o.grupo.add(u),qg.push(u)})}const zi={p:new I,d:1/0,ok:!1};let Pi=null;function jA(){const r=Sn.find(u=>u.info.nombre==="PISO 2");if(!r)return;const e=u=>r.grupo.children.find(h=>h.name===u&&h.isMesh),t=e("rci"),n=e("conduit");if(!t||!n)return;const i=.25,s=new Map,o=n.geometry.getAttribute("position");for(let u=0;u<o.count;u++){const h=`${Math.floor(o.getX(u)/i)},${Math.floor(o.getY(u)/i)},${Math.floor(o.getZ(u)/i)}`;(s.get(h)??s.set(h,[]).get(h)).push(u)}const a=t.geometry.getAttribute("position"),c=new I,l=new I;for(let u=0;u<a.count;u++){if(c.fromBufferAttribute(a,u),c.y>6.5)continue;const h=Math.floor(c.x/i),f=Math.floor(c.y/i),d=Math.floor(c.z/i);for(let _=-1;_<=1;_++)for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){const p=s.get(`${h+_},${f+g},${d+m}`);if(p)for(const v of p){l.fromBufferAttribute(o,v);const y=c.distanceTo(l);y<zi.d&&(zi.d=y,zi.p.copy(c).add(l).multiplyScalar(.5),zi.ok=!0)}}}zi.ok&&(Pi=new Mt(new Tf(.35,32,16),new mr({color:"#e0533f",transparent:!0,opacity:0,depthTest:!1})),Pi.position.copy(zi.p),Pi.renderOrder=10,Pi.raycast=()=>{},r.grupo.add(Pi))}const $A=new Ue,KA=new Ue;function gm(r){const e=r.explode,t=Sn.length-1,n=Sn.length,i=performance.now()/1e3;if(Sn.forEach((s,o)=>{const a=o===t?kc(.2,.45,e):o>=3?kc(.45,.7,e):kc(.7,1,e);s.grupo.position.y=s.destino*a,s.vis=ii.clamp(r.verHasta-o+1,0,1),s.grupo.visible=s.vis>.01;const c=kc(o/n,(o+1)/n,r.obra),l=Math.max(r.bim,1-c),u=Math.sin(Math.PI*c)*(r.obra<.999?1:0),h=1-r.nube;for(const[d,_]of s.mats){const g=_.userData.def,m=Qf[g.disc];_.color.copy($A.set(g.arq)).lerp(KA.set(g.tec),g.mep?0:l);let p=g.vidrio?ii.lerp(.5,.4,l):1;(g.cerr||g.disc==="Arquitectura")&&(p*=ii.lerp(1,g.vidrio?.18:.1,r.cerr)),p*=m*s.vis*h,_.opacity=p,_.transparent=p<.999,_.depthWrite=p>.6,g.mep||_.emissive.copy(Vg).multiplyScalar(.55*u),_.visible=p>.005,_.userData.uMapa&&(_.userData.uMapa.value=1-l,_.normalScale.setScalar(1-l));const v=s.lineas.get(d);if(v){const y=Math.max(r.bordes,.5*(1-c)*h)*s.vis*m*(g.disc==="Arquitectura"?1-.5*r.cerr:1);v.visible=y>.01}}s.lmat.opacity=Math.max(r.bordes,.5*(1-c)*(1-r.nube))*s.vis;const f=qg[o];if(f){const d=f.material;d.opacity=r.nube*s.vis*(.75+.25*Math.sin(i*2+o)),f.visible=d.opacity>.01}}),Pi){const s=Pi.material;s.opacity=r.alerta*(.55+.35*Math.sin(i*6)),Pi.visible=s.opacity>.01,Pi.scale.setScalar(1+.4*Math.sin(i*3))}Da.constant=r.corteY,Sl.visible=r.ctx>.01;for(const s of Wg){const o=s.userData.baseOp*r.ctx;s.opacity=o,s.transparent=o<.999,s.depthWrite=o>.5}}const oo=new I;function ZA(r){oo.set(r.tx,r.ty,r.tz);const e=ii.degToRad(r.az+r.giro),t=ii.degToRad(r.el),n=r.dist;gn.position.set(oo.x+n*Math.cos(t)*Math.sin(e),oo.y+n*Math.sin(t),oo.z+n*Math.cos(t)*Math.cos(e)),gn.fov=35,gn.near=Math.max(.3,n*.01),gn.far=n*8+600,gn.updateProjectionMatrix(),gn.lookAt(oo);const i=innerWidth<900?0:r.shift;Math.abs(i)>.001?gn.setViewOffset(innerWidth,innerHeight,-innerWidth*i,innerWidth<900?innerHeight*.12:0,innerWidth,innerHeight):gn.clearViewOffset()}function Kr(r,e=1.1){Wr.clear(),r.forEach(t=>Wr.add(t));for(const t of fr)Ee.to(Qf,{[t.d]:Wr.has(t.d)?1:0,duration:e,ease:"power2.inOut",overwrite:"auto"});td()}function td(){document.querySelectorAll("#capas .capa").forEach(r=>r.classList.toggle("on",Wr.has(r.dataset.d)))}const Yg=["Hidrosanitaria","Red contra incendios","Eléctrica","Mecánica"];function JA(r){const e=!Wr.has(r);e?Wr.add(r):Wr.delete(r),Ee.to(Qf,{[r]:e?1:0,duration:.9,ease:"power2.inOut",overwrite:"auto"}),e&&Yg.includes(r)&&(Ii==="libre"?rd("p2",!1):Ee.to(zt,{cerr:Math.max(zt.cerr,.9),duration:1})),e&&r==="Estructura"&&!Wr.has("Arquitectura")&&Ee.to(zt,{bim:1,duration:1}),td()}let nd={};const id=[];function QA(){var c;const r=Sn.findIndex(l=>l.info.nombre==="PISO 2"),e=((c=Sn[r])==null?void 0:c.info.elev)??3,t=Sn[r].caja.getCenter(new I),n=ed.isEmpty()?t:Ai,i=zi.ok?zi.p:n,s={verHasta:r,corteY:e+2.75,cerr:.92,bim:1,bordes:.18,ctx:0,ty:e+1.5,tx:n.x,tz:n.z,explode:0,nube:0,obra:1},o=["Arquitectura","Estructura"];nd={hero:{st:{az:38,el:15,dist:158,ty:12,tx:0,tz:0,ctx:1,shift:.24},capas:o},problema:{st:{bim:1,bordes:.55,cerr:.55,az:-40,el:22,dist:150,ctx:.12,shift:0},capas:["Arquitectura","Estructura","Hidrosanitaria","Eléctrica","Red contra incendios"],velo:"centro"},escaneo:{st:{nube:1,bim:1,ctx:0,az:70,el:16,dist:108,shift:.16},capas:o},critico:{st:{...s,tx:i.x,ty:i.y,tz:i.z,dist:8,el:34,az:40,alerta:1,shift:.18},capas:["Arquitectura","Red contra incendios","Eléctrica"]},etapas:{st:{bim:0,ctx:.6,az:-50,el:26,dist:170,ty:14,shift:0,cerr:0},capas:o,enter:()=>{Ee.fromTo(zt,{obra:0},{obra:1,duration:5,ease:"power1.inOut",overwrite:!1})}},obra:{st:{verHasta:r,corteY:e+1.4,bim:1,bordes:.6,cerr:0,ctx:0,el:62,dist:82,az:10,tx:t.x,tz:t.z,ty:e,shift:.2},capas:o},interior:{st:{bim:1,bordes:.25,ctx:.1,az:140,el:20,dist:220,ty:10,shift:0},capas:o,velo:"centro"},planos:{st:{verHasta:r,corteY:e+1.4,bim:1,bordes:.7,cerr:0,ctx:0,el:82,dist:120,az:0,tx:t.x,tz:t.z,ty:e,shift:0},capas:o,velo:"centro"},actores:{st:{explode:1,bim:1,bordes:.45,ctx:0,az:95,el:24,dist:190,ty:30,shift:0},capas:["Arquitectura","Estructura","Hidrosanitaria","Eléctrica"],velo:"centro"},honorarios:{st:{bim:1,bordes:.3,ctx:.15,az:200,el:18,dist:210,ty:10,shift:0},capas:o,velo:"centro"},gemelo:{st:{cerr:.8,bim:0,bordes:.15,ctx:.25,az:55,el:30,dist:78,tx:t.x,tz:t.z,ty:8,shift:.18},capas:fr.map(l=>l.d)},cierre:{st:{az:25,el:12,dist:140,ctx:1,ty:10,tx:0,tz:0,shift:0},capas:o,velo:"centro"}};const a=[{az:14,el:52,dist:46},{az:60,el:40,dist:38},{az:-30,el:48,dist:42},{az:100,el:36,dist:44}];id.push({d:"Arquitectura",st:{az:30,el:18,dist:120,ty:10,tx:0,tz:0,ctx:.5,bim:0,cerr:0,bordes:0,verHasta:9,corteY:999,explode:0,shift:-.14},capas:["Arquitectura"]},{d:"Estructura",st:{az:-35,el:24,dist:135,ty:14,tx:0,tz:0,ctx:0,bim:1,cerr:0,bordes:.4,verHasta:9,corteY:999,explode:.55,shift:-.14},capas:["Estructura"]},...Yg.map((l,u)=>({d:l,st:{...s,...a[u],shift:-.14},capas:["Arquitectura","Estructura",l]})))}let xm=!1;function tf(r){var t;const e=nd[r];if(!(!e||Ii!=="cine")){if(r==="hero"&&!xm){xm=!0;return}Ee.to(zt,{...Nl,alerta:0,...e.st,duration:1.9,ease:"power3.inOut",overwrite:"auto"}),Kr(e.capas),document.body.dataset.velo=e.velo??"",(t=e.enter)==null||t.call(e)}}let Or=-1;function e1(){const r=s=>Xg.filter(o=>{var a;return((a=Eo[o.nombre])==null?void 0:a.disc)===s});hn("#pasosCapas").innerHTML=fr.map((s,o)=>`<li data-i="${o}" style="--c:${s.color}"><i></i><span class="t">${s.d}</span><span class="p"><b></b></span></li>`).join(""),hn("#tarjetasCapa").innerHTML=fr.map((s,o)=>{let a;return o<2?a=Object.entries(Eo).filter(([,l])=>l.disc===s.d).map(([l,u])=>{const h=Sn.reduce((f,d)=>f+(d.info.cats.find(_=>_.nombre===l)?1:0),0);return h?`<li>${u.nombre}<b>${h} niveles</b></li>`:""}).join(""):a=r(s.d).map(c=>`<li>${Eo[c.nombre].nombre}<b>${c.elementos.toLocaleString("es-CO")} elem.</b></li>`).join(""),`<div class="glass tcapa" style="--c:${s.color}"><span class="num">CAPA 0${o+1} / 06</span><h3><i></i>${s.d}</h3><p>${s.texto}</p><ul>${a}</ul></div>`}).join("");const e=[...document.querySelectorAll(".tcapa")],t=[...document.querySelectorAll("#pasosCapas .p b")],n=s=>{if(s===Or)return;const o=Or;if(Or=s,document.querySelectorAll("#pasosCapas li").forEach((a,c)=>a.classList.toggle("on",c===s)),o>=0&&Ee.to(e[o],{autoAlpha:0,rotateY:s>o?-35:35,x:s>o?-120:120,z:-200,filter:"blur(10px)",duration:.6,ease:"power2.in",overwrite:!0}),Ee.fromTo(e[s],{autoAlpha:0,rotateY:s>o?40:-40,x:s>o?160:-160,z:-260,filter:"blur(14px)"},{autoAlpha:1,rotateY:0,x:0,z:0,filter:"blur(0px)",duration:.95,ease:"power3.out",delay:o>=0?.2:0,overwrite:!0}),Ee.fromTo(e[s].querySelectorAll("li"),{autoAlpha:0,x:30},{autoAlpha:1,x:0,stagger:.06,duration:.5,delay:.5}),Ii==="cine"){const a=id[s];Ee.to(zt,{...Nl,...a.st,duration:1.7,ease:"power3.inOut",overwrite:"auto"}),Kr(a.capas),document.body.dataset.velo=""}},i=ze.create({trigger:".capas-sec",start:"top top",end:"bottom bottom",onUpdate:s=>{const o=s.progress*fr.length,a=Math.min(fr.length-1,Math.floor(o));t.forEach((c,l)=>c.style.width=ii.clamp(o-l,0,1)*100+"%"),s.isActive&&n(a)},onEnter:()=>{Or=-1,n(0)},onEnterBack:()=>{const s=Or;Or=-1,n(Math.max(0,s))}});hn("#pasosCapas").addEventListener("click",s=>{const o=s.target.closest("li");if(!o)return;const a=+o.dataset.i;window.scrollTo({top:i.start+(i.end-i.start)*((a+.5)/fr.length),behavior:"smooth"})})}let jg=0;function Fu(r,e,t=1.5){Ee.to(gn.position,{x:r.x,y:r.y,z:r.z,duration:t,ease:"power2.inOut"}),Ee.to(xi.target,{x:e.x,y:e.y,z:e.z,duration:t,ease:"power2.inOut"})}function t1(){Ii!=="libre"&&(Ii="libre",document.body.dataset.modo="libre",jg=scrollY,document.documentElement.style.overflow="hidden",gn.clearViewOffset(),xi.target.copy(oo),xi.enabled=!0,xi.update(),Ee.to(zt,{nube:0,alerta:0,obra:1,explode:0,duration:.8}),rd("ext"))}function $g(){if(Ii==="cine")return;Ii="cine",document.body.dataset.modo="cine",xi.enabled=!1,hn("#ficha").classList.remove("on"),document.documentElement.style.overflow="",window.scrollTo(0,jg);const r=[...document.querySelectorAll("[data-escena]")].find(e=>{const t=e.getBoundingClientRect();return t.top<=innerHeight/2&&t.bottom>=innerHeight/2});if((r==null?void 0:r.dataset.escena)==="capas"){const e=Or;if(Or=-1,ze.refresh(),e>=0){const t=id[e];Ee.to(zt,{...Nl,...t.st,duration:1.5}),Kr(t.capas)}}else tf((r==null?void 0:r.dataset.escena)??"hero")}function rd(r,e=!0){const t=Sn.findIndex(s=>s.info.nombre==="PISO 2"),n=Sn[t].info.elev,i=ed.isEmpty()?Sn[t].caja.getCenter(new I):Ai;if(r==="salir")return $g();if(r==="ext"&&(Ee.to(zt,{...Nl,ctx:1,duration:1.2}),e&&Kr(["Arquitectura","Estructura"]),Fu(new I(85,55,95),new I(0,9,0))),r==="rx"&&(Ee.to(zt,{cerr:.85,bim:1,bordes:.35,ctx:.2,verHasta:9,corteY:999,explode:0,duration:1.2}),e&&Kr(fr.map(s=>s.d))),r==="exp"){const s=zt.explode<.5;Ee.to(zt,{explode:s?1:0,verHasta:9,corteY:999,duration:2,ease:"power1.inOut"}),Fu(new I(110,s?90:60,120),new I(0,s?28:9,0),2)}r==="p2"&&(Ee.to(zt,{verHasta:t,corteY:n+2.75,cerr:.9,bim:1,bordes:.2,ctx:0,explode:0,duration:1.2}),Fu(new I(i.x+22,n+30,i.z+26),new I(i.x,n+1.5,i.z)))}const vm=new jb,ym=new Ge;let Kg=0;Il.addEventListener("pointerdown",()=>{Kg=performance.now()});Il.addEventListener("pointerup",r=>{if(Ii!=="libre"||performance.now()-Kg>300)return;ym.set(r.clientX/innerWidth*2-1,-(r.clientY/innerHeight)*2+1),vm.setFromCamera(ym,gn);const e=vm.intersectObjects(Gg.filter(s=>s.material.visible&&s.material.opacity>.3),!1).find(s=>s.point.y<=Da.constant+.01);if(!e){hn("#ficha").classList.remove("on");return}const t=Sn[e.object.userData.nivel],n=e.object.userData.cat,i=Eo[n];hn("#ficha").innerHTML=`<h4>${i.nombre}</h4><dl><dt>Capa</dt><dd>${i.disc}</dd><dt>Nivel</dt><dd>${t.info.nombre} (+${t.info.elev.toFixed(2)} m)</dd>
    <dt>Cota</dt><dd>${(e.point.y-t.grupo.position.y).toFixed(2)} m</dd>
    <dt>Fuente</dt><dd>${i.mep?"1001_Hotel_la_fotona_redes.rvt · "+e.object.userData.elementos+" elementos":"HLF_P2-P6.rvt"}</dd></dl>`,hn("#ficha").classList.add("on")});function n1(){hn("#capas").innerHTML=fr.map(r=>`<button class="capa" data-d="${r.d}" style="--c:${r.color}"><i></i>${r.corto}</button>`).join(""),hn("#capas").addEventListener("click",r=>{const e=r.target.closest(".capa");e&&JA(e.dataset.d)}),td(),document.querySelectorAll("[data-explorar]").forEach(r=>r.addEventListener("click",t1)),document.querySelectorAll("#vistasLibres button").forEach(r=>r.addEventListener("click",()=>rd(r.dataset.v))),addEventListener("keydown",r=>{r.key==="Escape"&&$g()}),addEventListener("pointermove",r=>{ui.tpx=r.clientX/innerWidth-.5,ui.tpy=r.clientY/innerHeight-.5}),document.querySelectorAll("[data-escena]").forEach(r=>{const e=r.dataset.escena;e!=="capas"&&ze.create({trigger:r,start:"top 55%",end:"bottom 45%",onEnter:()=>tf(e),onEnterBack:()=>tf(e)})}),ze.create({start:0,end:"max",onUpdate:r=>{hn("#barra i").style.width=r.progress*100+"%",ui.drift=r.progress}})}addEventListener("resize",()=>{gn.aspect=innerWidth/innerHeight,gn.updateProjectionMatrix(),Ni.setSize(innerWidth,innerHeight)});let Mm=performance.now();function Zg(){const r=performance.now(),e=Math.min(.05,(r-Mm)/1e3);Mm=r;const t={...zt};if(Ii==="cine"?(ui.px+=(ui.tpx-ui.px)*.04,ui.py+=(ui.tpy-ui.py)*.04,zt.giro+=e*1.6,t.az+=ui.px*8+ui.drift*40,t.el=ii.clamp(t.el-ui.py*4,3,85),gm(t),ZA(t)):(gm(t),xi.update()),Pi){const n=hn("#etqCritico"),i=Pi.getWorldPosition(new I).add(new I(0,.7,0)).project(gn);n.style.opacity=String(Ii==="cine"?zt.alerta:0),n.style.left=(i.x+1)/2*innerWidth+"px",n.style.top=(1-i.y)/2*innerHeight-10+"px"}Ni.render(Er,gn),requestAnimationFrame(Zg)}(async()=>{const r=await qA();QA();const e=document.createElement("div");if(e.className="etq",e.id="etqCritico",e.textContent="Interferencia · RCI ↔ conduit",hn("#etiquetas").appendChild(e),zi.ok){const t=(zi.d*100).toFixed(1).replace(".",",")+" cm";hn("#dCritico").textContent=t,hn("#dCritico2").textContent=t}BA(),n1(),e1(),wA(),CA(),DA(),IA(),NA(),OA(t=>{Ii==="cine"&&(t==="arq"?(Kr(["Arquitectura","Estructura"]),Ee.to(zt,{cerr:0,bordes:.7,duration:1})):(Kr(["Arquitectura","Hidrosanitaria"]),Ee.to(zt,{cerr:.92,bordes:.2,dist:60,el:70,duration:1.4,ease:"power3.inOut"})))}),hn("#cargando i b").style.width="100%",setTimeout(()=>hn("#cargando").classList.add("fin"),250),Zg(),Object.assign(zt,{...nd.hero.st,nube:1}),Ee.from(zt,{az:120,el:58,dist:260,ty:22,duration:5,ease:"power3.inOut",delay:.2}),Ee.to(zt,{nube:0,duration:3.4,delay:1.4,ease:"power2.inOut"}),Kr(["Arquitectura","Estructura"],0),XA(r.enu).catch(t=>console.warn("contexto",t)),ze.refresh()})();
