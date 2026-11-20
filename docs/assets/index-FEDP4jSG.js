(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="170",Vs={ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zm=0,Gh=1,Km=2,Fd=1,Bd=2,zi=3,Sr=0,bn=1,Ei=2,pr=0,Gs=1,Wh=2,Xh=3,Yh=4,Jm=5,Hr=100,Qm=101,t_=102,e_=103,n_=104,i_=200,r_=201,s_=202,a_=203,Gc=204,Wc=205,o_=206,l_=207,c_=208,u_=209,h_=210,f_=211,d_=212,p_=213,m_=214,Xc=0,Yc=1,qc=2,ta=3,$c=4,jc=5,Zc=6,Kc=7,zd=0,__=1,g_=2,mr=0,v_=1,x_=2,M_=3,kd=4,S_=5,y_=6,E_=7,Hd=300,ea=301,na=302,Jc=303,Qc=304,Fl=306,tu=1e3,Gr=1001,eu=1002,gi=1003,T_=1004,go=1005,bi=1006,Yl=1007,Wr=1008,ji=1009,Vd=1010,Gd=1011,Qa=1012,rh=1013,ts=1014,Wi=1015,ho=1016,sh=1017,ah=1018,ia=1020,Wd=35902,Xd=1021,Yd=1022,_i=1023,qd=1024,$d=1025,Ws=1026,ra=1027,jd=1028,oh=1029,Zd=1030,lh=1031,ch=1033,il=33776,rl=33777,sl=33778,al=33779,nu=35840,iu=35841,ru=35842,su=35843,au=36196,ou=37492,lu=37496,cu=37808,uu=37809,hu=37810,fu=37811,du=37812,pu=37813,mu=37814,_u=37815,gu=37816,vu=37817,xu=37818,Mu=37819,Su=37820,yu=37821,ol=36492,Eu=36494,Tu=36495,Kd=36283,bu=36284,Au=36285,wu=36286,b_=3200,A_=3201,Jd=0,w_=1,lr="",Kn="srgb",da="srgb-linear",Bl="linear",pe="srgb",ms=7680,qh=519,R_=512,C_=513,P_=514,Qd=515,D_=516,L_=517,I_=518,U_=519,$h=35044,jh="300 es",Xi=2e3,xl=2001;class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zh=1234567;const Xs=Math.PI/180,to=180/Math.PI;function pa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function un(r,t,e){return Math.max(t,Math.min(e,r))}function uh(r,t){return(r%t+t)%t}function N_(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function O_(r,t,e){return r!==t?(e-r)/(t-r):0}function za(r,t,e){return(1-e)*r+e*t}function F_(r,t,e,n){return za(r,t,1-Math.exp(-e*n))}function B_(r,t=1){return t-Math.abs(uh(r,t*2)-t)}function z_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function k_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function H_(r,t){return r+Math.floor(Math.random()*(t-r+1))}function V_(r,t){return r+Math.random()*(t-r)}function G_(r){return r*(.5-Math.random())}function W_(r){r!==void 0&&(Zh=r);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function X_(r){return r*Xs}function Y_(r){return r*to}function q_(r){return(r&r-1)===0&&r!==0}function $_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function j_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Z_(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Is(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rn={DEG2RAD:Xs,RAD2DEG:to,generateUUID:pa,clamp:un,euclideanModulo:uh,mapLinear:N_,inverseLerp:O_,lerp:za,damp:F_,pingpong:B_,smoothstep:z_,smootherstep:k_,randInt:H_,randFloat:V_,randFloatSpread:G_,seededRandom:W_,degToRad:X_,radToDeg:Y_,isPowerOfTwo:q_,ceilPowerOfTwo:$_,floorPowerOfTwo:j_,setQuaternionFromProperEuler:Z_,normalize:_n,denormalize:Is};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,s,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],T=i[4],v=i[7],C=i[2],w=i[5],b=i[8];return s[0]=a*_+o*E+l*C,s[3]=a*m+o*T+l*w,s[6]=a*p+o*v+l*b,s[1]=c*_+u*E+h*C,s[4]=c*m+u*T+h*w,s[7]=c*p+u*v+h*b,s[2]=d*_+f*E+g*C,s[5]=d*m+f*T+g*w,s[8]=d*p+f*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ql.makeScale(t,e)),this}rotate(t){return this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new $t;function tp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function K_(){const r=Ml("canvas");return r.style.display="block",r}const Kh={};function Ra(r){r in Kh||(Kh[r]=!0,console.warn(r))}function J_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Q_(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tg(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:da,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?Bl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Jh=[.64,.33,.3,.6,.15,.06],Qh=[.2126,.7152,.0722],tf=[.3127,.329],ef=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nf=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[da]:{primaries:Jh,whitePoint:tf,transfer:Bl,toXYZ:ef,fromXYZ:nf,luminanceCoefficients:Qh,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:Jh,whitePoint:tf,transfer:pe,toXYZ:ef,fromXYZ:nf,luminanceCoefficients:Qh,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let _s;class eg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Ml("canvas")),_s.width=t.width,_s.height=t.height;const n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ml("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qi(e[n]/255)*255):e[n]=qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ng=0;class ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=pa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push($l(i[a].image)):s.push($l(i[a]))}else s=$l(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function $l(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ig=0;class Cn extends cs{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=Gr,i=Gr,s=bi,a=Wr,o=_i,l=ji,c=Cn.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=pa(),this.name="",this.source=new ep(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tu:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tu:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Hd;Cn.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,v=(f+1)/2,C=(p+1)/2,w=(u+d)/4,b=(h+_)/4,R=(g+m)/4;return T>v&&T>C?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=b/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=b/s,i=R/s),this.set(n,i,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rg extends cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ep(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends rg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class np extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gi,this.minFilter=gi,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sg extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gi,this.minFilter=gi,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const C=Math.sqrt(T),w=Math.atan2(C,p*E);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const v=o*E;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new N,rf=new ns;class us{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xa),xo.subVectors(this.max,xa),gs.subVectors(t.a,xa),vs.subVectors(t.b,xa),xs.subVectors(t.c,xa),tr.subVectors(vs,gs),er.subVectors(xs,vs),Cr.subVectors(gs,xs);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Cr.z,Cr.y,tr.z,0,-tr.x,er.z,0,-er.x,Cr.z,0,-Cr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Cr.y,Cr.x,0];return!Zl(e,gs,vs,xs,xo)||(e=[1,0,0,0,1,0,0,0,1],!Zl(e,gs,vs,xs,xo))?!1:(Mo.crossVectors(tr,er),e=[Mo.x,Mo.y,Mo.z],Zl(e,gs,vs,xs,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ui=[new N,new N,new N,new N,new N,new N,new N,new N],hi=new N,vo=new us,gs=new N,vs=new N,xs=new N,tr=new N,er=new N,Cr=new N,xa=new N,xo=new N,Mo=new N,Pr=new N;function Zl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Pr.fromArray(r,s);const o=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=t.dot(Pr),c=e.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ag=new us,Ma=new N,Kl=new N;class zl{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ag.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ma.subVectors(t,this.center);const e=Ma.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ma.copy(t.center).add(Kl)),this.expandByPoint(Ma.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new N,Jl=new N,So=new N,nr=new N,Ql=new N,yo=new N,tc=new N;class kl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Jl.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),nr.copy(this.origin).sub(Jl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(So),o=nr.dot(this.direction),l=-nr.dot(So),c=nr.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Jl).addScaledVector(So,d),f}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);const n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,i,s){Ql.subVectors(e,t),yo.subVectors(n,t),tc.crossVectors(Ql,yo);let a=this.direction.dot(tc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,t);const l=o*this.direction.dot(yo.crossVectors(nr,yo));if(l<0)return null;const c=o*this.direction.dot(Ql.cross(nr));if(c<0||l+c>a)return null;const u=-o*nr.dot(tc);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m)}set(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ms.setFromMatrixColumn(t,0).length(),s=1/Ms.setFromMatrixColumn(t,1).length(),a=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(og,t,lg)}lookAt(t,e,n){const i=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ir.crossVectors(n,Fn),ir.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ir.crossVectors(n,Fn)),ir.normalize(),Eo.crossVectors(Fn,ir),i[0]=ir.x,i[4]=Eo.x,i[8]=Fn.x,i[1]=ir.y,i[5]=Eo.y,i[9]=Fn.y,i[2]=ir.z,i[6]=Eo.z,i[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],T=n[7],v=n[11],C=n[15],w=i[0],b=i[4],R=i[8],M=i[12],x=i[1],D=i[5],O=i[9],B=i[13],Y=i[2],$=i[6],W=i[10],X=i[14],V=i[3],et=i[7],P=i[11],ut=i[15];return s[0]=a*w+o*x+l*Y+c*V,s[4]=a*b+o*D+l*$+c*et,s[8]=a*R+o*O+l*W+c*P,s[12]=a*M+o*B+l*X+c*ut,s[1]=u*w+h*x+d*Y+f*V,s[5]=u*b+h*D+d*$+f*et,s[9]=u*R+h*O+d*W+f*P,s[13]=u*M+h*B+d*X+f*ut,s[2]=g*w+_*x+m*Y+p*V,s[6]=g*b+_*D+m*$+p*et,s[10]=g*R+_*O+m*W+p*P,s[14]=g*M+_*B+m*X+p*ut,s[3]=E*w+T*x+v*Y+C*V,s[7]=E*b+T*D+v*$+C*et,s[11]=E*R+T*O+v*W+C*P,s[15]=E*M+T*B+v*X+C*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+m*(+e*c*h-e*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,T=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,v=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,C=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,w=e*E+n*T+i*v+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=E*b,t[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*b,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,t[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*b,t[4]=T*b,t[5]=(u*m*s-g*d*s+g*i*f-e*m*f-u*i*p+e*d*p)*b,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*p-e*l*p)*b,t[7]=(a*d*s-u*l*s+u*i*c-e*d*c-a*i*f+e*l*f)*b,t[8]=v*b,t[9]=(g*h*s-u*_*s-g*n*f+e*_*f+u*n*p-e*h*p)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*b,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*f-e*o*f)*b,t[12]=C*b,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*b,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,E=l*c,T=l*u,v=l*h,C=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+v)*C,i[2]=(g-T)*C,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(m+E)*w,i[7]=0,i[8]=(g+T)*b,i[9]=(m-E)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ms.set(i[0],i[1],i[2]).length();const a=Ms.set(i[4],i[5],i[6]).length(),o=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],fi.copy(this);const c=1/s,u=1/a,h=1/o;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,e.setFromRotationMatrix(fi),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Xi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Xi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===xl)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Xi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),d=(e+t)*c,f=(n+i)*u;let g,_;if(o===Xi)g=(a+s)*h,_=-2*h;else if(o===xl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ms=new N,fi=new we,og=new N(0,0,0),lg=new N(1,1,1),ir=new N,Eo=new N,Fn=new N,sf=new we,af=new ns;class Pi{constructor(t=0,e=0,n=0,i=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return af.setFromEuler(this),this.setFromQuaternion(af,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class hh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cg=0;const of=new N,Ss=new ns,Oi=new we,To=new N,Sa=new N,ug=new N,hg=new ns,lf=new N(1,0,0),cf=new N(0,1,0),uf=new N(0,0,1),hf={type:"added"},fg={type:"removed"},ys={type:"childadded",child:null},ec={type:"childremoved",child:null};class Qe extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new N,e=new Pi,n=new ns,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new $t}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(lf,t)}rotateY(t){return this.rotateOnAxis(cf,t)}rotateZ(t){return this.rotateOnAxis(uf,t)}translateOnAxis(t,e){return of.copy(t).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lf,t)}translateY(t){return this.translateOnAxis(cf,t)}translateZ(t){return this.translateOnAxis(uf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?To.copy(t):To.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Sa,To,this.up):Oi.lookAt(To,Sa,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Oi),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hf),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fg),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hf),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,ug),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,hg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new N(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new N,Fi=new N,nc=new N,Bi=new N,Es=new N,Ts=new N,ff=new N,ic=new N,rc=new N,sc=new N,ac=new _e,oc=new _e,lc=new _e;class ei{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),di.subVectors(t,e),i.cross(di);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){di.subVectors(i,e),Fi.subVectors(n,e),nc.subVectors(t,e);const a=di.dot(di),o=di.dot(Fi),l=di.dot(nc),c=Fi.dot(Fi),u=Fi.dot(nc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ac,s.x),a.addScaledVector(oc,s.y),a.addScaledVector(lc,s.z),a}static isFrontFacing(t,e,n,i){return di.subVectors(n,e),Fi.subVectors(t,e),di.cross(Fi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),di.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ei.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Es.subVectors(i,n),Ts.subVectors(s,n),ic.subVectors(t,n);const l=Es.dot(ic),c=Ts.dot(ic);if(l<=0&&c<=0)return e.copy(n);rc.subVectors(t,i);const u=Es.dot(rc),h=Ts.dot(rc);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Es,a);sc.subVectors(t,s);const f=Es.dot(sc),g=Ts.dot(sc);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ts,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ff.subVectors(s,i),o=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(ff,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},bo={h:0,s:0,l:0};function cc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=uh(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=cc(a,s,t+1/3),this.g=cc(a,s,t),this.b=cc(a,s,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kn){const n=ip[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return oe.fromWorkingColorSpace(on.copy(this),t),Math.round(un(on.r*255,0,255))*65536+Math.round(un(on.g*255,0,255))*256+Math.round(un(on.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(on.copy(this),e);const n=on.r,i=on.g,s=on.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Kn){oe.fromWorkingColorSpace(on.copy(this),t);const e=on.r,n=on.g,i=on.b;return t!==Kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+e,rr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rr),t.getHSL(bo);const n=za(rr.h,bo.h,e),i=za(rr.s,bo.s,e),s=za(rr.l,bo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new jt;jt.NAMES=ip;let dg=0;class hs extends cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=pa(),this.name="",this.blending=Gs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Sr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==Hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fh extends hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new N,Ao=new Xt;class ri{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$h&&(t.usage=this.usage),t}}class rp extends ri{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sp extends ri{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class si extends ri{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pg=0;const jn=new we,uc=new Qe,bs=new N,Bn=new us,ya=new us,je=new N;class vi extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tp(t)?sp:rp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new si(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Bn.min,ya.min),Bn.expandByPoint(je),je.addVectors(Bn.max,ya.max),Bn.expandByPoint(je)):(Bn.expandByPoint(ya.min),Bn.expandByPoint(ya.max))}Bn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(je));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)je.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(t,c),je.add(bs)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new N,l[R]=new N;const c=new N,u=new N,h=new N,d=new Xt,f=new Xt,g=new Xt,_=new N,m=new N;function p(R,M,x){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[R].add(_),o[M].add(_),o[x].add(_),l[R].add(m),l[M].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,M=E.length;R<M;++R){const x=E[R],D=x.start,O=x.count;for(let B=D,Y=D+O;B<Y;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new N,v=new N,C=new N,w=new N;function b(R){C.fromBufferAttribute(i,R),w.copy(C);const M=o[R];T.copy(M),T.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(w,M);const D=v.dot(l[R])<0?-1:1;a.setXYZW(R,T.x,T.y,T.z,D)}for(let R=0,M=E.length;R<M;++R){const x=E[R],D=x.start,O=x.count;for(let B=D,Y=D+O;B<Y;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ri(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new ri(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const df=new we,Dr=new kl,wo=new zl,pf=new N,Ro=new N,Co=new N,Po=new N,hc=new N,Do=new N,mf=new N,Lo=new N;class Re extends Qe{constructor(t=new vi,e=new fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Do.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(hc.fromBufferAttribute(h,t),a?Do.addScaledVector(hc,u):Do.addScaledVector(hc.sub(e),u))}e.add(Do)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),Dr.copy(t.ray).recast(t.near),!(wo.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(wo,pf)===null||Dr.origin.distanceToSquared(pf)>(t.far-t.near)**2))&&(df.copy(s).invert(),Dr.copy(t.ray).applyMatrix4(df),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,C=T;v<C;v+=3){const w=o.getX(v),b=o.getX(v+1),R=o.getX(v+2);i=Io(this,p,t,n,c,u,h,w,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);i=Io(this,a,t,n,c,u,h,E,T,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,C=T;v<C;v+=3){const w=v,b=v+1,R=v+2;i=Io(this,p,t,n,c,u,h,w,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,T=m+1,v=m+2;i=Io(this,a,t,n,c,u,h,E,T,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function mg(r,t,e,n,i,s,a,o){let l;if(t.side===bn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Sr,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Lo);return c<e.near||c>e.far?null:{distance:c,point:Lo.clone(),object:r}}function Io(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ro),r.getVertexPosition(l,Co),r.getVertexPosition(c,Po);const u=mg(r,t,e,n,Ro,Co,Po,mf);if(u){const h=new N;ei.getBarycoord(mf,Ro,Co,Po,h),i&&(u.uv=ei.getInterpolatedAttribute(i,o,l,c,h,new Xt)),s&&(u.uv1=ei.getInterpolatedAttribute(s,o,l,c,h,new Xt)),a&&(u.normal=ei.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};ei.getNormal(Ro,Co,Po,d.normal),u.face=d,u.barycoord=h}return u}class ma extends vi{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(h,2));function g(_,m,p,E,T,v,C,w,b,R,M){const x=v/b,D=C/R,O=v/2,B=C/2,Y=w/2,$=b+1,W=R+1;let X=0,V=0;const et=new N;for(let P=0;P<W;P++){const ut=P*D-B;for(let Lt=0;Lt<$;Lt++){const Kt=Lt*x-O;et[_]=Kt*E,et[m]=ut*T,et[p]=Y,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=w>0?1:-1,u.push(et.x,et.y,et.z),h.push(Lt/b),h.push(1-P/R),X+=1}}for(let P=0;P<R;P++)for(let ut=0;ut<b;ut++){const Lt=d+ut+$*P,Kt=d+ut+$*(P+1),j=d+(ut+1)+$*(P+1),tt=d+(ut+1)+$*P;l.push(Lt,Kt,tt),l.push(Kt,j,tt),V+=6}o.addGroup(f,V,M),f+=V,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sa(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(r){const t={};for(let e=0;e<r.length;e++){const n=sa(r[e]);for(const i in n)t[i]=n[i]}return t}function _g(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ap(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const gg={clone:sa,merge:vn};var vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sa(t.uniforms),this.uniformsGroups=_g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class op extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new N,_f=new Xt,gf=new Xt;class Vn extends op{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,_f,gf),e.subVectors(gf,_f)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,ws=1;class Mg extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vn(As,ws,t,e);i.layers=this.layers,this.add(i);const s=new Vn(As,ws,t,e);s.layers=this.layers,this.add(s);const a=new Vn(As,ws,t,e);a.layers=this.layers,this.add(a);const o=new Vn(As,ws,t,e);o.layers=this.layers,this.add(o);const l=new Vn(As,ws,t,e);l.layers=this.layers,this.add(l);const c=new Vn(As,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lp extends Cn{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ea,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sg extends es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ma(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:pr});s.uniforms.tEquirect.value=e;const a=new Re(i,s),o=e.minFilter;return e.minFilter===Wr&&(e.minFilter=bi),new Mg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const fc=new N,yg=new N,Eg=new $t;class Hi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fc.subVectors(n,e).cross(yg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eg.getNormalMatrix(t),i=this.coplanarPoint(fc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new zl,Uo=new N;class dh{constructor(t=new Hi,e=new Hi,n=new Hi,i=new Hi,s=new Hi,a=new Hi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xi){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],T=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+u,m+g,v+E).normalize(),n[3].setComponents(l-a,d-u,m-g,v-E).normalize(),n[4].setComponents(l-o,d-h,m-_,v-T).normalize(),e===Xi)n[5].setComponents(l+o,d+h,m+_,v+T).normalize();else if(e===xl)n[5].setComponents(o,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Uo.x=i.normal.x>0?t.max.x:t.min.x,Uo.y=i.normal.y>0?t.max.y:t.min.y,Uo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cp(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Tg(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class fo extends vi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-a;for(let T=0;T<c;T++){const v=T*h-s;g.push(v,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const T=E+c*p,v=E+c*(p+1),C=E+1+c*(p+1),w=E+1+c*p;f.push(T,v,w),f.push(v,C,w)}this.setIndex(f),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.width,t.height,t.widthSegments,t.heightSegments)}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ag=`#ifdef USE_ALPHAHASH
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
#endif`,wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
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
#endif`,Lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ig=`#ifdef USE_BATCHING
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
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
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
#endif`,zg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
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
#endif`,E0=`struct PhysicalMaterial {
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
}`,T0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U0=`#if defined( USE_POINTS_UV )
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
#endif`,N0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
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
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cv=`float getShadowMask() {
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
}`,uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dv=`#ifdef USE_SKINNING
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
#endif`,pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#ifdef USE_TRANSMISSION
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`#include <common>
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
}`,Dv=`#if DEPTH_PACKING == 3200
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
}`,Lv=`#define DISTANCE
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
}`,Iv=`#define DISTANCE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,zv=`uniform vec3 diffuse;
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
}`,kv=`#define LAMBERT
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
}`,Hv=`#define LAMBERT
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
}`,Vv=`#define MATCAP
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
}`,Gv=`#define MATCAP
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define NORMAL
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
}`,Yv=`#define PHONG
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
}`,qv=`#define PHONG
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
}`,$v=`#define STANDARD
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
}`,jv=`#define STANDARD
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
}`,Zv=`#define TOON
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
}`,Kv=`#define TOON
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
}`,Jv=`uniform float size;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,ex=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:bg,alphahash_pars_fragment:Ag,alphamap_fragment:wg,alphamap_pars_fragment:Rg,alphatest_fragment:Cg,alphatest_pars_fragment:Pg,aomap_fragment:Dg,aomap_pars_fragment:Lg,batching_pars_vertex:Ig,batching_vertex:Ug,begin_vertex:Ng,beginnormal_vertex:Og,bsdfs:Fg,iridescence_fragment:Bg,bumpmap_pars_fragment:zg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Vg,clipping_planes_vertex:Gg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:Yg,color_vertex:qg,common:$g,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Kg,displacementmap_vertex:Jg,emissivemap_fragment:Qg,emissivemap_pars_fragment:t0,colorspace_fragment:e0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:r0,envmap_pars_fragment:s0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:g0,envmap_vertex:o0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:u0,fog_pars_fragment:h0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:d0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:_0,lights_toon_fragment:v0,lights_toon_pars_fragment:x0,lights_phong_fragment:M0,lights_phong_pars_fragment:S0,lights_physical_fragment:y0,lights_physical_pars_fragment:E0,lights_fragment_begin:T0,lights_fragment_maps:b0,lights_fragment_end:A0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:P0,map_fragment:D0,map_pars_fragment:L0,map_particle_fragment:I0,map_particle_pars_fragment:U0,metalnessmap_fragment:N0,metalnessmap_pars_fragment:O0,morphinstance_vertex:F0,morphcolor_vertex:B0,morphnormal_vertex:z0,morphtarget_pars_vertex:k0,morphtarget_vertex:H0,normal_fragment_begin:V0,normal_fragment_maps:G0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:Y0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:K0,opaque_fragment:J0,packing:Q0,premultiplied_alpha_fragment:tv,project_vertex:ev,dithering_fragment:nv,dithering_pars_fragment:iv,roughnessmap_fragment:rv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:av,shadowmap_pars_vertex:ov,shadowmap_vertex:lv,shadowmask_pars_fragment:cv,skinbase_vertex:uv,skinning_pars_vertex:hv,skinning_vertex:fv,skinnormal_vertex:dv,specularmap_fragment:pv,specularmap_pars_fragment:mv,tonemapping_fragment:_v,tonemapping_pars_fragment:gv,transmission_fragment:vv,transmission_pars_fragment:xv,uv_pars_fragment:Mv,uv_pars_vertex:Sv,uv_vertex:yv,worldpos_vertex:Ev,background_vert:Tv,background_frag:bv,backgroundCube_vert:Av,backgroundCube_frag:wv,cube_vert:Rv,cube_frag:Cv,depth_vert:Pv,depth_frag:Dv,distanceRGBA_vert:Lv,distanceRGBA_frag:Iv,equirect_vert:Uv,equirect_frag:Nv,linedashed_vert:Ov,linedashed_frag:Fv,meshbasic_vert:Bv,meshbasic_frag:zv,meshlambert_vert:kv,meshlambert_frag:Hv,meshmatcap_vert:Vv,meshmatcap_frag:Gv,meshnormal_vert:Wv,meshnormal_frag:Xv,meshphong_vert:Yv,meshphong_frag:qv,meshphysical_vert:$v,meshphysical_frag:jv,meshtoon_vert:Zv,meshtoon_frag:Kv,points_vert:Jv,points_frag:Qv,shadow_vert:tx,shadow_frag:ex,sprite_vert:nx,sprite_frag:ix},_t={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},yi={basic:{uniforms:vn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:vn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:vn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:vn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:vn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:vn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:vn([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:vn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:vn([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:vn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:vn([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:vn([_t.common,_t.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:vn([_t.lights,_t.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};yi.physical={uniforms:vn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const No={r:0,b:0,g:0},Ir=new Pi,rx=new we;function sx(r,t,e,n,i,s,a){const o=new jt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?e:t).get(T)),T}function _(E){let T=!1;const v=g(E);v===null?p(o,l):v&&v.isColor&&(p(v,1),T=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,T){const v=g(T);v&&(v.isCubeTexture||v.mapping===Fl)?(u===void 0&&(u=new Re(new ma(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:sa(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ir.copy(T.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(Ir)),u.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Re(new fo(2,2),new yr({name:"BackgroundMaterial",uniforms:sa(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,T){E.getRGB(No,ap(r)),n.buffers.color.setClear(No.r,No.g,No.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m}}function ax(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(x,D,O,B,Y){let $=!1;const W=h(B,O,D);s!==W&&(s=W,c(s.object)),$=f(x,B,O,Y),$&&g(x,B,O,Y),Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(x,D,O,B),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,D,O){const B=O.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let $=Y[D.id];$===void 0&&($={},Y[D.id]=$);let W=$[B];return W===void 0&&(W=d(l()),$[B]=W),W}function d(x){const D=[],O=[],B=[];for(let Y=0;Y<e;Y++)D[Y]=0,O[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,D,O,B){const Y=s.attributes,$=D.attributes;let W=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){const P=Y[V];let ut=$[V];if(ut===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),P===void 0||P.attribute!==ut||ut&&P.data!==ut.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function g(x,D,O,B){const Y={},$=D.attributes;let W=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){let P=$[V];P===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(P=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(P=x.instanceColor));const ut={};ut.attribute=P,P&&P.data&&(ut.data=P.data),Y[V]=ut,W++}s.attributes=Y,s.attributesNum=W,s.index=B}function _(){const x=s.newAttributes;for(let D=0,O=x.length;D<O;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const O=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;O[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),Y[x]!==D&&(r.vertexAttribDivisor(x,D),Y[x]=D)}function E(){const x=s.newAttributes,D=s.enabledAttributes;for(let O=0,B=D.length;O<B;O++)D[O]!==x[O]&&(r.disableVertexAttribArray(O),D[O]=0)}function T(x,D,O,B,Y,$,W){W===!0?r.vertexAttribIPointer(x,D,O,Y,$):r.vertexAttribPointer(x,D,O,B,Y,$)}function v(x,D,O,B){_();const Y=B.attributes,$=O.getAttributes(),W=D.defaultAttributeValues;for(const X in $){const V=$[X];if(V.location>=0){let et=Y[X];if(et===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const P=et.normalized,ut=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;const Kt=Lt.buffer,j=Lt.type,tt=Lt.bytesPerElement,gt=j===r.INT||j===r.UNSIGNED_INT||et.gpuType===rh;if(et.isInterleavedBufferAttribute){const nt=et.data,Et=nt.stride,At=et.offset;if(nt.isInstancedInterleavedBuffer){for(let zt=0;zt<V.locationSize;zt++)p(V.location+zt,nt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let zt=0;zt<V.locationSize;zt++)m(V.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let zt=0;zt<V.locationSize;zt++)T(V.location+zt,ut/V.locationSize,j,P,Et*tt,(At+ut/V.locationSize*zt)*tt,gt)}else{if(et.isInstancedBufferAttribute){for(let nt=0;nt<V.locationSize;nt++)p(V.location+nt,et.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<V.locationSize;nt++)m(V.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let nt=0;nt<V.locationSize;nt++)T(V.location+nt,ut/V.locationSize,j,P,ut*tt,ut/V.locationSize*nt*tt,gt)}}else if(W!==void 0){const P=W[X];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(V.location,P);break;case 3:r.vertexAttrib3fv(V.location,P);break;case 4:r.vertexAttrib4fv(V.location,P);break;default:r.vertexAttrib1fv(V.location,P)}}}}E()}function C(){R();for(const x in n){const D=n[x];for(const O in D){const B=D[O];for(const Y in B)u(B[Y].object),delete B[Y];delete D[O]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const O in D){const B=D[O];for(const Y in B)u(B[Y].object),delete B[Y];delete D[O]}delete n[x.id]}function b(x){for(const D in n){const O=n[D];if(O[x.id]===void 0)continue;const B=O[x.id];for(const Y in B)u(B[Y].object),delete B[Y];delete O[x.id]}}function R(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function ox(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==_i&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ji&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Wi&&!R)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function cx(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Hi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,T=E*4;let v=p.clippingState||null;l.value=v,v=u(g,d,T,f);for(let C=0;C!==T;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==_;++T,v+=4)a.copy(h[T]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ux(r){let t=new WeakMap;function e(a,o){return o===Jc?a.mapping=ea:o===Qc&&(a.mapping=na),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jc||o===Qc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sg(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class up extends op{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bs=4,vf=[.125,.215,.35,.446,.526,.582],Vr=20,dc=new up,xf=new jt;let pc=null,mc=0,_c=0,gc=!1;const Fr=(1+Math.sqrt(5))/2,Rs=1/Fr,Mf=[new N(-Fr,Rs,0),new N(Fr,Rs,0),new N(-Rs,0,Fr),new N(Rs,0,Fr),new N(0,Fr,-Rs),new N(0,Fr,Rs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ru{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,_c),this._renderer.xr.enabled=gc,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ea||t.mapping===na?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:ho,format:_i,colorSpace:da,depthBuffer:!1},i=Sf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hx(s)),this._blurMaterial=fx(s,t,e)}return i}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,n,i){const o=new Vn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xf),u.toneMapping=mr,u.autoClear=!1;const f=new fh({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new Re(new ma,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(xf),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const T=this._cubeSize;Oo(i,E*T,p>2?T:0,T,T),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ea||t.mapping===na;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Oo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,dc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Mf[(i-s-1)%Mf.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Re(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Vr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const p=[];let E=0;for(let b=0;b<Vr;++b){const R=b/_,M=Math.exp(-R*R/2);p.push(M),b===0?E+=M:b<m&&(E+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const v=this._sizeLods[i],C=3*v*(i>T-Bs?i-T+Bs:0),w=4*(this._cubeSize-v);Oo(e,C,w,3*v,2*v),l.setRenderTarget(e),l.render(h,dc)}}function hx(r){const t=[],e=[],n=[];let i=r;const s=r-Bs+1+vf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Bs?l=vf[a-r+Bs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),T=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,R=w>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];E.set(M,_*g*w),T.set(d,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const C=new vi;C.setAttribute("position",new ri(E,_)),C.setAttribute("uv",new ri(T,m)),C.setAttribute("faceIndex",new ri(v,p)),t.push(C),i>Bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sf(r,t,e){const n=new es(r,t,e);return n.texture.mapping=Fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function fx(r,t,e){const n=new Float32Array(Vr),i=new N(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function yf(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ef(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function dx(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jc||l===Qc,u=l===ea||l===na;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ru(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Ru(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function px(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ra("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mx(r,t,e,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let T=0,v=E.length;T<v;T+=3){const C=E[T+0],w=E[T+1],b=E[T+2];d.push(C,w,w,b,b,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,v=E.length/3-1;T<v;T+=3){const C=T+0,w=T+1,b=T+2;d.push(C,w,w,b,b,C)}}else return;const m=new(tp(d)?sp:rp)(d,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function _x(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function gx(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function vx(r,t,e){const n=new WeakMap,i=new _e;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let x=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=o.attributes.position.count*v,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*w*4*h),R=new np(b,C,w,h);R.type=Wi,R.needsUpdate=!0;const M=v*4;for(let D=0;D<h;D++){const O=p[D],B=E[D],Y=T[D],$=C*w*4*D;for(let W=0;W<O.count;W++){const X=W*M;g===!0&&(i.fromBufferAttribute(O,W),b[$+X+0]=i.x,b[$+X+1]=i.y,b[$+X+2]=i.z,b[$+X+3]=0),_===!0&&(i.fromBufferAttribute(B,W),b[$+X+4]=i.x,b[$+X+5]=i.y,b[$+X+6]=i.z,b[$+X+7]=0),m===!0&&(i.fromBufferAttribute(Y,W),b[$+X+8]=i.x,b[$+X+9]=i.y,b[$+X+10]=i.z,b[$+X+11]=Y.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new Xt(C,w)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function xx(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class hp extends Cn{constructor(t,e,n,i,s,a,o,l,c,u=Ws){if(u!==Ws&&u!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ws&&(n=ts),n===void 0&&u===ra&&(n=ia),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:gi,this.minFilter=l!==void 0?l:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fp=new Cn,Tf=new hp(1,1),dp=new np,pp=new sg,mp=new lp,bf=[],Af=[],wf=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function _a(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=bf[i];if(s===void 0&&(s=new Float32Array(i),bf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function qe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function $e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Hl(r,t){let e=Af[t];e===void 0&&(e=new Int32Array(t),Af[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Mx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Sx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2fv(this.addr,t),$e(e,t)}}function yx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;r.uniform3fv(this.addr,t),$e(e,t)}}function Ex(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4fv(this.addr,t),$e(e,t)}}function Tx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;Cf.set(n),r.uniformMatrix2fv(this.addr,!1,Cf),$e(e,n)}}function bx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;Rf.set(n),r.uniformMatrix3fv(this.addr,!1,Rf),$e(e,n)}}function Ax(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(qe(e,n))return;wf.set(n),r.uniformMatrix4fv(this.addr,!1,wf),$e(e,n)}}function wx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Rx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2iv(this.addr,t),$e(e,t)}}function Cx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3iv(this.addr,t),$e(e,t)}}function Px(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4iv(this.addr,t),$e(e,t)}}function Dx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Lx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2uiv(this.addr,t),$e(e,t)}}function Ix(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3uiv(this.addr,t),$e(e,t)}}function Ux(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4uiv(this.addr,t),$e(e,t)}}function Nx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Tf.compareFunction=Qd,s=Tf):s=fp,e.setTexture2D(t||s,i)}function Ox(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pp,i)}function Fx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mp,i)}function Bx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dp,i)}function zx(r){switch(r){case 5126:return Mx;case 35664:return Sx;case 35665:return yx;case 35666:return Ex;case 35674:return Tx;case 35675:return bx;case 35676:return Ax;case 5124:case 35670:return wx;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Dx;case 36294:return Lx;case 36295:return Ix;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Bx}}function kx(r,t){r.uniform1fv(this.addr,t)}function Hx(r,t){const e=_a(t,this.size,2);r.uniform2fv(this.addr,e)}function Vx(r,t){const e=_a(t,this.size,3);r.uniform3fv(this.addr,e)}function Gx(r,t){const e=_a(t,this.size,4);r.uniform4fv(this.addr,e)}function Wx(r,t){const e=_a(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Xx(r,t){const e=_a(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Yx(r,t){const e=_a(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function qx(r,t){r.uniform1iv(this.addr,t)}function $x(r,t){r.uniform2iv(this.addr,t)}function jx(r,t){r.uniform3iv(this.addr,t)}function Zx(r,t){r.uniform4iv(this.addr,t)}function Kx(r,t){r.uniform1uiv(this.addr,t)}function Jx(r,t){r.uniform2uiv(this.addr,t)}function Qx(r,t){r.uniform3uiv(this.addr,t)}function tM(r,t){r.uniform4uiv(this.addr,t)}function eM(r,t,e){const n=this.cache,i=t.length,s=Hl(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||fp,s[a])}function nM(r,t,e){const n=this.cache,i=t.length,s=Hl(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||pp,s[a])}function iM(r,t,e){const n=this.cache,i=t.length,s=Hl(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||mp,s[a])}function rM(r,t,e){const n=this.cache,i=t.length,s=Hl(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||dp,s[a])}function sM(r){switch(r){case 5126:return kx;case 35664:return Hx;case 35665:return Vx;case 35666:return Gx;case 35674:return Wx;case 35675:return Xx;case 35676:return Yx;case 5124:case 35670:return qx;case 35667:case 35671:return $x;case 35668:case 35672:return jx;case 35669:case 35673:return Zx;case 5125:return Kx;case 36294:return Jx;case 36295:return Qx;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}class aM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zx(e.type)}}class oM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sM(e.type)}}class lM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function Pf(r,t){r.seq.push(t),r.map[t.id]=t}function cM(r,t,e){const n=r.name,i=n.length;for(vc.lastIndex=0;;){const s=vc.exec(n),a=vc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Pf(e,c===void 0?new aM(o,r,t):new oM(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new lM(o),Pf(e,h)),e=h}}}class ll{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);cM(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Df(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const uM=37297;let hM=0;function fM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Lf=new $t;function dM(r){oe._getMatrix(Lf,oe.workingColorSpace,r);const t=`mat3( ${Lf.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(r)){case Bl:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function If(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+fM(r.getShaderSource(t),a)}else return i}function pM(r,t){const e=dM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mM(r,t){let e;switch(t){case v_:e="Linear";break;case x_:e="Reinhard";break;case M_:e="Cineon";break;case kd:e="ACESFilmic";break;case y_:e="AgX";break;case E_:e="Neutral";break;case S_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fo=new N;function _M(){oe.getLuminanceCoefficients(Fo);const r=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function vM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ca(r){return r!==""}function Uf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(r){return r.replace(MM,yM)}const SM=new Map;function yM(r,t){let e=Zt[t];if(e===void 0){const n=SM.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cu(e)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(r){return r.replace(EM,TM)}function TM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ff(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function AM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ea:case na:t="ENVMAP_TYPE_CUBE";break;case Fl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case na:t="ENVMAP_MODE_REFRACTION";break}return t}function RM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zd:t="ENVMAP_BLENDING_MULTIPLY";break;case __:t="ENVMAP_BLENDING_MIX";break;case g_:t="ENVMAP_BLENDING_ADD";break}return t}function CM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function PM(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=bM(e),c=AM(e),u=wM(e),h=RM(e),d=CM(e),f=gM(e),g=vM(s),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ca).join(`
`),p.length>0&&(p+=`
`)):(m=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),p=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mr?"#define TONE_MAPPING":"",e.toneMapping!==mr?Zt.tonemapping_pars_fragment:"",e.toneMapping!==mr?mM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,pM("linearToOutputTexel",e.outputColorSpace),_M(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ca).join(`
`)),a=Cu(a),a=Uf(a,e),a=Nf(a,e),o=Cu(o),o=Uf(o,e),o=Nf(o,e),a=Of(a),o=Of(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+a,v=E+p+o,C=Df(i,i.VERTEX_SHADER,T),w=Df(i,i.FRAGMENT_SHADER,v);i.attachShader(_,C),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(D){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(C).trim(),Y=i.getShaderInfoLog(w).trim();let $=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,w);else{const X=If(i,C,"vertex"),V=If(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+X+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||Y==="")&&(W=!1);W&&(D.diagnostics={runnable:$,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(C),i.deleteShader(w),R=new ll(i,_),M=xM(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,uM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let DM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new IM(t),e.set(t,n)),n}}class IM{constructor(t){this.id=DM++,this.code=t,this.usedTimes=0}}function UM(r,t,e,n,i,s,a){const o=new hh,l=new LM,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,D,O,B){const Y=O.fog,$=B.geometry,W=M.isMeshStandardMaterial?O.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),V=X&&X.mapping===Fl?X.image.height:null,et=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const P=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=P!==void 0?P.length:0;let Lt=0;$.morphAttributes.position!==void 0&&(Lt=1),$.morphAttributes.normal!==void 0&&(Lt=2),$.morphAttributes.color!==void 0&&(Lt=3);let Kt,j,tt,gt;if(et){const vt=yi[et];Kt=vt.vertexShader,j=vt.fragmentShader}else Kt=M.vertexShader,j=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),gt=l.getFragmentShaderID(M);const nt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),At=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,Jt=!!M.map,kt=!!M.matcap,Pt=!!X,I=!!M.aoMap,ge=!!M.lightMap,Nt=!!M.bumpMap,z=!!M.normalMap,Tt=!!M.displacementMap,ie=!!M.emissiveMap,wt=!!M.metalnessMap,A=!!M.roughnessMap,S=M.anisotropy>0,G=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,ht=M.transmission>0,ot=S&&!!M.anisotropyMap,pt=G&&!!M.clearcoatMap,Gt=G&&!!M.clearcoatNormalMap,it=G&&!!M.clearcoatRoughnessMap,at=J&&!!M.iridescenceMap,It=J&&!!M.iridescenceThicknessMap,Dt=Z&&!!M.sheenColorMap,xt=Z&&!!M.sheenRoughnessMap,Yt=!!M.specularMap,Ut=!!M.specularColorMap,ae=!!M.specularIntensityMap,L=ht&&!!M.transmissionMap,ct=ht&&!!M.thicknessMap,q=!!M.gradientMap,K=!!M.alphaMap,lt=M.alphaTest>0,ft=!!M.alphaHash,Ot=!!M.extensions;let le=mr;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=r.toneMapping);const Ie={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Kt,fragmentShader:j,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:da,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:kt,envMap:Pt,envMapMode:Pt&&X.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:ge,bumpMap:Nt,normalMap:z,displacementMap:d&&Tt,emissiveMap:ie,normalMapObjectSpace:z&&M.normalMapType===w_,normalMapTangentSpace:z&&M.normalMapType===Jd,metalnessMap:wt,roughnessMap:A,anisotropy:S,anisotropyMap:ot,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:J,iridescenceMap:at,iridescenceThicknessMap:It,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:xt,specularMap:Yt,specularColorMap:Ut,specularIntensityMap:ae,transmission:ht,transmissionMap:L,thicknessMap:ct,gradientMap:q,opaque:M.transparent===!1&&M.blending===Gs&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:ft,combine:M.combine,mapUv:Jt&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:ge&&_(M.lightMap.channel),bumpMapUv:Nt&&_(M.bumpMap.channel),normalMapUv:z&&_(M.normalMap.channel),displacementMapUv:Tt&&_(M.displacementMap.channel),emissiveMapUv:ie&&_(M.emissiveMap.channel),metalnessMapUv:wt&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:ot&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(M.sheenRoughnessMap.channel),specularMapUv:Yt&&_(M.specularMap.channel),specularColorMapUv:Ut&&_(M.specularColorMap.channel),specularIntensityMapUv:ae&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:K&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(z||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Jt||K),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Et,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Lt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&oe.getTransfer(M.map.colorSpace)===pe,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&oe.getTransfer(M.emissiveMap.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ei,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&M.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(E(x,M),T(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function T(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const x=g[M.type];let D;if(x){const O=yi[x];D=gg.clone(O.uniforms)}else D=M.uniforms;return D}function C(M,x){let D;for(let O=0,B=u.length;O<B;O++){const Y=u[O];if(Y.cacheKey===x){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new PM(r,x,M,s),u.push(D)),D}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:R}}function NM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function OM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Bf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||OM),n.length>1&&n.sort(d||Bf),i.length>1&&i.sort(d||Bf)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function FM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new zf,r.set(n,[a])):i>=s.length?(a=new zf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function BM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new jt};break;case"SpotLight":e={position:new N,direction:new N,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function zM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let kM=0;function HM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function VM(r){const t=new BM,e=zM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new we,a=new we;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,T=0,v=0,C=0,w=0,b=0;c.sort(HM);for(let M=0,x=c.length;M<x;M++){const D=c[M],O=D.color,B=D.intensity,Y=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*B,h+=O.g*B,d+=O.b*B;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],B);b++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,V=e.get(D);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=D.shadow.matrix,E++}n.directional[f]=W,f++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=Y,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;const X=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,X.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=X.matrix,D.castShadow){const V=e.get(D);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=$,v++}_++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const X=D.shadow,V=e.get(D);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=W,g++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(B),W.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==T||R.numSpotShadows!==v||R.numSpotMaps!==C||R.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=T,R.numSpotShadows=v,R.numSpotMaps=C,R.numLightProbes=b,n.version=kM++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const T=c[p];if(T.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(T.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function kf(r){const t=new VM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function GM(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new kf(r),t.set(i,[o])):s>=a.length?(o=new kf(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class WM extends hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XM extends hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
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
}`;function $M(r,t,e){let n=new dh;const i=new Xt,s=new Xt,a=new _e,o=new WM({depthPacking:A_}),l=new XM,c={},u=e.maxTextureSize,h={[Sr]:bn,[bn]:Sr,[Ei]:Ei},d=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:YM,fragmentShader:qM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new vi;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fd;let p=this.type;this.render=function(w,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),O=r.state;O.setBlending(pr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==zi&&this.type===zi,Y=p===zi&&this.type!==zi;for(let $=0,W=w.length;$<W;$++){const X=w[$],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const et=V.getFrameExtents();if(i.multiply(et),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/et.x),i.x=s.x*et.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/et.y),i.y=s.y*et.y,V.mapSize.y=s.y)),V.map===null||B===!0||Y===!0){const ut=this.type!==zi?{minFilter:gi,magFilter:gi}:{};V.map!==null&&V.map.dispose(),V.map=new es(i.x,i.y,ut),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const P=V.getViewportCount();for(let ut=0;ut<P;ut++){const Lt=V.getViewport(ut);a.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),O.viewport(a),V.updateMatrices(X,ut),n=V.getFrustum(),v(b,R,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===zi&&E(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,D)};function E(w,b){const R=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new es(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,R,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,R,f,_,null)}function T(w,b,R,M){let x=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)x=D;else if(x=R.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=x.uuid,B=b.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let $=Y[B];$===void 0&&($=x.clone(),Y[B]=$,b.addEventListener("dispose",C)),x=$}if(x.visible=b.visible,x.wireframe=b.wireframe,M===zi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=r.properties.get(x);O.light=R}return x}function v(w,b,R,M,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===zi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=t.update(w),Y=w.material;if(Array.isArray(Y)){const $=B.groups;for(let W=0,X=$.length;W<X;W++){const V=$[W],et=Y[V.materialIndex];if(et&&et.visible){const P=T(w,et,M,x);w.onBeforeShadow(r,w,b,R,B,P,V),r.renderBufferDirect(R,null,B,P,w,V),w.onAfterShadow(r,w,b,R,B,P,V)}}}else if(Y.visible){const $=T(w,Y,M,x);w.onBeforeShadow(r,w,b,R,B,$,null),r.renderBufferDirect(R,null,B,$,w,null),w.onAfterShadow(r,w,b,R,B,$,null)}}const O=w.children;for(let B=0,Y=O.length;B<Y;B++)v(O[B],b,R,M,x)}function C(w){w.target.removeEventListener("dispose",C);for(const R in c){const M=c[R],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const jM={[Xc]:Yc,[qc]:Zc,[$c]:Kc,[ta]:jc,[Yc]:Xc,[Zc]:qc,[Kc]:$c,[jc]:ta};function ZM(r,t){function e(){let L=!1;const ct=new _e;let q=null;const K=new _e(0,0,0,0);return{setMask:function(lt){q!==lt&&!L&&(r.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){L=lt},setClear:function(lt,ft,Ot,le,Ie){Ie===!0&&(lt*=le,ft*=le,Ot*=le),ct.set(lt,ft,Ot,le),K.equals(ct)===!1&&(r.clearColor(lt,ft,Ot,le),K.copy(ct))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ct=!1,q=null,K=null,lt=null;return{setReversed:function(ft){if(ct!==ft){const Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const le=lt;lt=null,this.setClear(le)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?nt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(ft){q!==ft&&!L&&(r.depthMask(ft),q=ft)},setFunc:function(ft){if(ct&&(ft=jM[ft]),K!==ft){switch(ft){case Xc:r.depthFunc(r.NEVER);break;case Yc:r.depthFunc(r.ALWAYS);break;case qc:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case $c:r.depthFunc(r.EQUAL);break;case jc:r.depthFunc(r.GEQUAL);break;case Zc:r.depthFunc(r.GREATER);break;case Kc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ft}},setLocked:function(ft){L=ft},setClear:function(ft){lt!==ft&&(ct&&(ft=1-ft),r.clearDepth(ft),lt=ft)},reset:function(){L=!1,q=null,K=null,lt=null,ct=!1}}}function i(){let L=!1,ct=null,q=null,K=null,lt=null,ft=null,Ot=null,le=null,Ie=null;return{setTest:function(vt){L||(vt?nt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(vt){ct!==vt&&!L&&(r.stencilMask(vt),ct=vt)},setFunc:function(vt,bt,qt){(q!==vt||K!==bt||lt!==qt)&&(r.stencilFunc(vt,bt,qt),q=vt,K=bt,lt=qt)},setOp:function(vt,bt,qt){(ft!==vt||Ot!==bt||le!==qt)&&(r.stencilOp(vt,bt,qt),ft=vt,Ot=bt,le=qt)},setLocked:function(vt){L=vt},setClear:function(vt){Ie!==vt&&(r.clearStencil(vt),Ie=vt)},reset:function(){L=!1,ct=null,q=null,K=null,lt=null,ft=null,Ot=null,le=null,Ie=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,T=null,v=null,C=null,w=null,b=new jt(0,0,0),R=0,M=!1,x=null,D=null,O=null,B=null,Y=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=X>=2);let et=null,P={};const ut=r.getParameter(r.SCISSOR_BOX),Lt=r.getParameter(r.VIEWPORT),Kt=new _e().fromArray(ut),j=new _e().fromArray(Lt);function tt(L,ct,q,K){const lt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(L,ft),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<q;Ot++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ct+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ft}const gt={};gt[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(r.DEPTH_TEST),a.setFunc(ta),Nt(!1),z(Gh),nt(r.CULL_FACE),I(pr);function nt(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Et(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function At(L,ct){return h[L]!==ct?(r.bindFramebuffer(L,ct),h[L]=ct,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ct),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function zt(L,ct){let q=f,K=!1;if(L){q=d.get(ct),q===void 0&&(q=[],d.set(ct,q));const lt=L.textures;if(q.length!==lt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Ot=lt.length;ft<Ot;ft++)q[ft]=r.COLOR_ATTACHMENT0+ft;q.length=lt.length,K=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,K=!0);K&&r.drawBuffers(q)}function Jt(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const kt={[Hr]:r.FUNC_ADD,[Qm]:r.FUNC_SUBTRACT,[t_]:r.FUNC_REVERSE_SUBTRACT};kt[e_]=r.MIN,kt[n_]=r.MAX;const Pt={[i_]:r.ZERO,[r_]:r.ONE,[s_]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[h_]:r.SRC_ALPHA_SATURATE,[c_]:r.DST_COLOR,[o_]:r.DST_ALPHA,[a_]:r.ONE_MINUS_SRC_COLOR,[Wc]:r.ONE_MINUS_SRC_ALPHA,[u_]:r.ONE_MINUS_DST_COLOR,[l_]:r.ONE_MINUS_DST_ALPHA,[f_]:r.CONSTANT_COLOR,[d_]:r.ONE_MINUS_CONSTANT_COLOR,[p_]:r.CONSTANT_ALPHA,[m_]:r.ONE_MINUS_CONSTANT_ALPHA};function I(L,ct,q,K,lt,ft,Ot,le,Ie,vt){if(L===pr){_===!0&&(Et(r.BLEND),_=!1);return}if(_===!1&&(nt(r.BLEND),_=!0),L!==Jm){if(L!==m||vt!==M){if((p!==Hr||v!==Hr)&&(r.blendEquation(r.FUNC_ADD),p=Hr,v=Hr),vt)switch(L){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wh:r.blendFunc(r.ONE,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,T=null,C=null,w=null,b.set(0,0,0),R=0,m=L,M=vt}return}lt=lt||ct,ft=ft||q,Ot=Ot||K,(ct!==p||lt!==v)&&(r.blendEquationSeparate(kt[ct],kt[lt]),p=ct,v=lt),(q!==E||K!==T||ft!==C||Ot!==w)&&(r.blendFuncSeparate(Pt[q],Pt[K],Pt[ft],Pt[Ot]),E=q,T=K,C=ft,w=Ot),(le.equals(b)===!1||Ie!==R)&&(r.blendColor(le.r,le.g,le.b,Ie),b.copy(le),R=Ie),m=L,M=!1}function ge(L,ct){L.side===Ei?Et(r.CULL_FACE):nt(r.CULL_FACE);let q=L.side===bn;ct&&(q=!q),Nt(q),L.blending===Gs&&L.transparent===!1?I(pr):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){x!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),x=L)}function z(L){L!==Zm?(nt(r.CULL_FACE),L!==D&&(L===Gh?r.cullFace(r.BACK):L===Km?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),D=L}function Tt(L){L!==O&&(W&&r.lineWidth(L),O=L)}function ie(L,ct,q){L?(nt(r.POLYGON_OFFSET_FILL),(B!==ct||Y!==q)&&(r.polygonOffset(ct,q),B=ct,Y=q)):Et(r.POLYGON_OFFSET_FILL)}function wt(L){L?nt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+$-1),et!==L&&(r.activeTexture(L),et=L)}function S(L,ct,q){q===void 0&&(et===null?q=r.TEXTURE0+$-1:q=et);let K=P[q];K===void 0&&(K={type:void 0,texture:void 0},P[q]=K),(K.type!==L||K.texture!==ct)&&(et!==q&&(r.activeTexture(q),et=q),r.bindTexture(L,ct||gt[L]),K.type=L,K.texture=ct)}function G(){const L=P[et];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){Kt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Kt.copy(L))}function xt(L){j.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function Yt(L,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let K=q.get(L);K===void 0&&(K=r.getUniformBlockIndex(ct,L.name),q.set(L,K))}function Ut(L,ct){const K=c.get(ct).get(L);l.get(ct)!==K&&(r.uniformBlockBinding(ct,K,L.__bindingPointIndex),l.set(ct,K))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},et=null,P={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,T=null,v=null,C=null,w=null,b=new jt(0,0,0),R=0,M=!1,x=null,D=null,O=null,B=null,Y=null,Kt.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:Et,bindFramebuffer:At,drawBuffers:zt,useProgram:Jt,setBlending:I,setMaterial:ge,setFlipSided:Nt,setCullFace:z,setLineWidth:Tt,setPolygonOffset:ie,setScissorTest:wt,activeTexture:A,bindTexture:S,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:at,texImage3D:It,updateUBOMapping:Yt,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:ht,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:Dt,viewport:xt,reset:ae}}function Hf(r,t,e,n){const i=KM(n);switch(e){case Xd:return r*t;case qd:return r*t;case $d:return r*t*2;case jd:return r*t/i.components*i.byteLength;case oh:return r*t/i.components*i.byteLength;case Zd:return r*t*2/i.components*i.byteLength;case lh:return r*t*2/i.components*i.byteLength;case Yd:return r*t*3/i.components*i.byteLength;case _i:return r*t*4/i.components*i.byteLength;case ch:return r*t*4/i.components*i.byteLength;case il:case rl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case sl:case al:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case iu:case su:return Math.max(r,16)*Math.max(t,8)/4;case nu:case ru:return Math.max(r,8)*Math.max(t,8)/2;case au:case ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _u:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case gu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Su:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case yu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ol:case Eu:case Tu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kd:case bu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Au:case wu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function KM(r){switch(r){case ji:case Vd:return{byteLength:1,components:1};case Qa:case Gd:case ho:return{byteLength:2,components:1};case sh:case ah:return{byteLength:2,components:4};case ts:case rh:case Wi:return{byteLength:4,components:1};case Wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function JM(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):Ml("canvas")}function _(A,S,G){let Q=1;const J=wt(A);if((J.width>G||J.height>G)&&(Q=G/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(Q*J.width),ht=Math.floor(Q*J.height);h===void 0&&(h=g(Z,ht));const ot=S?g(Z,ht):h;return ot.width=Z,ot.height=ht,ot.getContext("2d").drawImage(A,0,0,Z,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+ht+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(A,S,G,Q,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),S===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),G===r.UNSIGNED_INT&&(Z=r.RGB32UI),G===r.BYTE&&(Z=r.RGB8I),G===r.SHORT&&(Z=r.RGB16I),G===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),G===r.UNSIGNED_INT&&(Z=r.RGBA32UI),G===r.BYTE&&(Z=r.RGBA8I),G===r.SHORT&&(Z=r.RGBA16I),G===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){const ht=J?Bl:oe.getTransfer(Q);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=ht===pe?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(A,S){let G;return A?S===null||S===ts||S===ia?G=r.DEPTH24_STENCIL8:S===Wi?G=r.DEPTH32F_STENCIL8:S===Qa&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===ia?G=r.DEPTH_COMPONENT24:S===Wi?G=r.DEPTH_COMPONENT32F:S===Qa&&(G=r.DEPTH_COMPONENT16),G}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==gi&&A.minFilter!==bi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&u.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),x(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const G=A.source,Q=d.get(G);if(Q){const J=Q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(A),Object.keys(Q).length===0&&d.delete(G)}n.remove(A)}function M(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const G=A.source,Q=d.get(G);delete Q[S.__cacheKey],a.memory.textures--}function x(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let J=0;J<S.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=A.textures;for(let Q=0,J=G.length;Q<J;Q++){const Z=n.get(G[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(G[Q])}n.remove(A)}let D=0;function O(){D=0}function B(){const A=D;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function Y(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){const G=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,A,S);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function W(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function X(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,S);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function V(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){tt(G,A,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const et={[tu]:r.REPEAT,[Gr]:r.CLAMP_TO_EDGE,[eu]:r.MIRRORED_REPEAT},P={[gi]:r.NEAREST,[T_]:r.NEAREST_MIPMAP_NEAREST,[go]:r.NEAREST_MIPMAP_LINEAR,[bi]:r.LINEAR,[Yl]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},ut={[R_]:r.NEVER,[U_]:r.ALWAYS,[C_]:r.LESS,[Qd]:r.LEQUAL,[P_]:r.EQUAL,[I_]:r.GEQUAL,[D_]:r.GREATER,[L_]:r.NOTEQUAL};function Lt(A,S){if(S.type===Wi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bi||S.magFilter===Yl||S.magFilter===go||S.magFilter===Wr||S.minFilter===bi||S.minFilter===Yl||S.minFilter===go||S.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,et[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,et[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,et[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,P[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,P[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gi||S.minFilter!==go&&S.minFilter!==Wr||S.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Kt(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const Q=S.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const Z=Y(S);if(Z!==A.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[Z].usedTimes++;const ht=J[A.__cacheKey];ht!==void 0&&(J[A.__cacheKey].usedTimes--,ht.usedTimes===0&&M(S)),A.__cacheKey=Z,A.__webglTexture=J[Z].texture}return G}function j(A,S,G){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Kt(A,S),Z=S.source;e.bindTexture(Q,A.__webglTexture,r.TEXTURE0+G);const ht=n.get(Z);if(Z.version!==ht.__version||J===!0){e.activeTexture(r.TEXTURE0+G);const ot=oe.getPrimaries(oe.workingColorSpace),pt=S.colorSpace===lr?null:oe.getPrimaries(S.colorSpace),Gt=S.colorSpace===lr||ot===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let it=_(S.image,!1,i.maxTextureSize);it=ie(S,it);const at=s.convert(S.format,S.colorSpace),It=s.convert(S.type);let Dt=T(S.internalFormat,at,It,S.colorSpace,S.isVideoTexture);Lt(Q,S);let xt;const Yt=S.mipmaps,Ut=S.isVideoTexture!==!0,ae=ht.__version===void 0||J===!0,L=Z.dataReady,ct=C(S,it);if(S.isDepthTexture)Dt=v(S.format===ra,S.type),ae&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Dt,it.width,it.height,0,at,It,null));else if(S.isDataTexture)if(Yt.length>0){Ut&&ae&&e.texStorage2D(r.TEXTURE_2D,ct,Dt,Yt[0].width,Yt[0].height);for(let q=0,K=Yt.length;q<K;q++)xt=Yt[q],Ut?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,at,It,xt.data):e.texImage2D(r.TEXTURE_2D,q,Dt,xt.width,xt.height,0,at,It,xt.data);S.generateMipmaps=!1}else Ut?(ae&&e.texStorage2D(r.TEXTURE_2D,ct,Dt,it.width,it.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,at,It,it.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,it.width,it.height,0,at,It,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Dt,Yt[0].width,Yt[0].height,it.depth);for(let q=0,K=Yt.length;q<K;q++)if(xt=Yt[q],S.format!==_i)if(at!==null)if(Ut){if(L)if(S.layerUpdates.size>0){const lt=Hf(xt.width,xt.height,S.format,S.type);for(const ft of S.layerUpdates){const Ot=xt.data.subarray(ft*lt/xt.data.BYTES_PER_ELEMENT,(ft+1)*lt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ft,xt.width,xt.height,1,at,Ot)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,it.depth,at,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Dt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,it.depth,at,It,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Dt,xt.width,xt.height,it.depth,0,at,It,xt.data)}else{Ut&&ae&&e.texStorage2D(r.TEXTURE_2D,ct,Dt,Yt[0].width,Yt[0].height);for(let q=0,K=Yt.length;q<K;q++)xt=Yt[q],S.format!==_i?at!==null?Ut?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,at,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,at,It,xt.data):e.texImage2D(r.TEXTURE_2D,q,Dt,xt.width,xt.height,0,at,It,xt.data)}else if(S.isDataArrayTexture)if(Ut){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Dt,it.width,it.height,it.depth),L)if(S.layerUpdates.size>0){const q=Hf(it.width,it.height,S.format,S.type);for(const K of S.layerUpdates){const lt=it.data.subarray(K*q/it.data.BYTES_PER_ELEMENT,(K+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,at,It,lt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,at,It,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,at,It,it.data);else if(S.isData3DTexture)Ut?(ae&&e.texStorage3D(r.TEXTURE_3D,ct,Dt,it.width,it.height,it.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,at,It,it.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,at,It,it.data);else if(S.isFramebufferTexture){if(ae)if(Ut)e.texStorage2D(r.TEXTURE_2D,ct,Dt,it.width,it.height);else{let q=it.width,K=it.height;for(let lt=0;lt<ct;lt++)e.texImage2D(r.TEXTURE_2D,lt,Dt,q,K,0,at,It,null),q>>=1,K>>=1}}else if(Yt.length>0){if(Ut&&ae){const q=wt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,ct,Dt,q.width,q.height)}for(let q=0,K=Yt.length;q<K;q++)xt=Yt[q],Ut?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,at,It,xt):e.texImage2D(r.TEXTURE_2D,q,Dt,at,It,xt);S.generateMipmaps=!1}else if(Ut){if(ae){const q=wt(it);e.texStorage2D(r.TEXTURE_2D,ct,Dt,q.width,q.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,It,it)}else e.texImage2D(r.TEXTURE_2D,0,Dt,at,It,it);m(S)&&p(Q),ht.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function tt(A,S,G){if(S.image.length!==6)return;const Q=Kt(A,S),J=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+G);const Z=n.get(J);if(J.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);const ht=oe.getPrimaries(oe.workingColorSpace),ot=S.colorSpace===lr?null:oe.getPrimaries(S.colorSpace),pt=S.colorSpace===lr||ht===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Gt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,at=[];for(let K=0;K<6;K++)!Gt&&!it?at[K]=_(S.image[K],!0,i.maxCubemapSize):at[K]=it?S.image[K].image:S.image[K],at[K]=ie(S,at[K]);const It=at[0],Dt=s.convert(S.format,S.colorSpace),xt=s.convert(S.type),Yt=T(S.internalFormat,Dt,xt,S.colorSpace),Ut=S.isVideoTexture!==!0,ae=Z.__version===void 0||Q===!0,L=J.dataReady;let ct=C(S,It);Lt(r.TEXTURE_CUBE_MAP,S);let q;if(Gt){Ut&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Yt,It.width,It.height);for(let K=0;K<6;K++){q=at[K].mipmaps;for(let lt=0;lt<q.length;lt++){const ft=q[lt];S.format!==_i?Dt!==null?Ut?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ft.width,ft.height,Dt,xt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Yt,ft.width,ft.height,0,Dt,xt,ft.data)}}}else{if(q=S.mipmaps,Ut&&ae){q.length>0&&ct++;const K=wt(at[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,at[K].width,at[K].height,Dt,xt,at[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,at[K].width,at[K].height,0,Dt,xt,at[K].data);for(let lt=0;lt<q.length;lt++){const Ot=q[lt].image[K].image;Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Ot.width,Ot.height,Dt,xt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Yt,Ot.width,Ot.height,0,Dt,xt,Ot.data)}}else{Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,xt,at[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Dt,xt,at[K]);for(let lt=0;lt<q.length;lt++){const ft=q[lt];Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Dt,xt,ft.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Yt,Dt,xt,ft.image[K])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function gt(A,S,G,Q,J,Z){const ht=s.convert(G.format,G.colorSpace),ot=s.convert(G.type),pt=T(G.internalFormat,ht,ot,G.colorSpace),Gt=n.get(S),it=n.get(G);if(it.__renderTarget=S,!Gt.__hasExternalTextures){const at=Math.max(1,S.width>>Z),It=Math.max(1,S.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,pt,at,It,S.depth,0,ht,ot,null):e.texImage2D(J,Z,pt,at,It,0,ht,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),z(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,it.__webglTexture,0,Nt(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,it.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(A,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=v(S.stencilBuffer,J),ht=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=Nt(S);z(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,Z,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,A)}else{const Q=S.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],ht=s.convert(Z.format,Z.colorSpace),ot=s.convert(Z.type),pt=T(Z.internalFormat,ht,ot,Z.colorSpace),Gt=Nt(S);G&&z(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,pt,S.width,S.height):z(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,pt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const J=Q.__webglTexture,Z=Nt(S);if(S.depthTexture.format===Ws)z(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===ra)z(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function At(A){const S=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Et(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),nt(S.__webglDepthbuffer[Q],A,!1);else{const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),nt(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(A,S,G){const Q=n.get(A);S!==void 0&&gt(Q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&At(A)}function Jt(A){const S=A.texture,G=n.get(A),Q=n.get(S);A.addEventListener("dispose",b);const J=A.textures,Z=A.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let pt=0;pt<S.mipmaps.length;pt++)G.__webglFramebuffer[ot][pt]=r.createFramebuffer()}else G.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)G.__webglFramebuffer[ot]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ht)for(let ot=0,pt=J.length;ot<pt;ot++){const Gt=n.get(J[ot]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&z(A)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const pt=J[ot];G.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);const Gt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),at=T(pt.internalFormat,Gt,it,pt.colorSpace,A.isXRRenderTarget===!0),It=Nt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,at,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)gt(G.__webglFramebuffer[ot][pt],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else gt(G.__webglFramebuffer[ot],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ot=0,pt=J.length;ot<pt;ot++){const Gt=J[ot],it=n.get(Gt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Lt(r.TEXTURE_2D,Gt),gt(G.__webglFramebuffer,A,Gt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),m(Gt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,Q.__webglTexture),Lt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)gt(G.__webglFramebuffer[pt],A,S,r.COLOR_ATTACHMENT0,ot,pt);else gt(G.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,ot,0);m(S)&&p(ot),e.unbindTexture()}A.depthBuffer&&At(A)}function kt(A){const S=A.textures;for(let G=0,Q=S.length;G<Q;G++){const J=S[G];if(m(J)){const Z=E(A),ht=n.get(J).__webglTexture;e.bindTexture(Z,ht),p(Z),e.unbindTexture()}}}const Pt=[],I=[];function ge(A){if(A.samples>0){if(z(A)===!1){const S=A.textures,G=A.width,Q=A.height;let J=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(A),ot=S.length>1;if(ot)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Gt=n.get(S[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Gt,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,J,r.NEAREST),l===!0&&(Pt.length=0,I.length=0,Pt.push(r.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pt.push(Z),I.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Gt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Nt(A){return Math.min(i.maxSamples,A.samples)}function z(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(A){const S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ie(A,S){const G=A.colorSpace,Q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==da&&G!==lr&&(oe.getTransfer(G)===pe?(Q!==_i||J!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=zt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=z}function QM(r,t){function e(n,i=lr){let s;const a=oe.getTransfer(i);if(n===ji)return r.UNSIGNED_BYTE;if(n===sh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return r.BYTE;if(n===Gd)return r.SHORT;if(n===Qa)return r.UNSIGNED_SHORT;if(n===rh)return r.INT;if(n===ts)return r.UNSIGNED_INT;if(n===Wi)return r.FLOAT;if(n===ho)return r.HALF_FLOAT;if(n===Xd)return r.ALPHA;if(n===Yd)return r.RGB;if(n===_i)return r.RGBA;if(n===qd)return r.LUMINANCE;if(n===$d)return r.LUMINANCE_ALPHA;if(n===Ws)return r.DEPTH_COMPONENT;if(n===ra)return r.DEPTH_STENCIL;if(n===jd)return r.RED;if(n===oh)return r.RED_INTEGER;if(n===Zd)return r.RG;if(n===lh)return r.RG_INTEGER;if(n===ch)return r.RGBA_INTEGER;if(n===il||n===rl||n===sl||n===al)if(a===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===ou||n===lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===ou)return a===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Mu||n===Su||n===yu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_u)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===Eu||n===Tu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ol)return a===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kd||n===bu||n===Au||n===wu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class tS extends Vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pa extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eS={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pa;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const nS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iS=`
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

}`;class rS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Cn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yr({vertexShader:nS,fragmentShader:iS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sS extends cs{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new rS,m=e.getContextAttributes();let p=null,E=null;const T=[],v=[],C=new Xt;let w=null;const b=new Vn;b.viewport=new _e;const R=new Vn;R.viewport=new _e;const M=[b,R],x=new tS;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=T[j];return tt===void 0&&(tt=new xc,T[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=T[j];return tt===void 0&&(tt=new xc,T[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=T[j];return tt===void 0&&(tt=new xc,T[j]=tt),tt.getHandSpace()};function B(j){const tt=v.indexOf(j.inputSource);if(tt===-1)return;const gt=T[tt];gt!==void 0&&(gt.update(j.inputSource,j.frame,c||a),gt.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",$);for(let j=0;j<T.length;j++){const tt=v[j];tt!==null&&(v[j]=null,T[j].disconnect(tt))}D=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,E=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new es(f.framebufferWidth,f.framebufferHeight,{format:_i,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?ra:Ws,gt=m.stencil?ia:ts);const Et={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new es(d.textureWidth,d.textureHeight,{format:_i,type:ji,depthTexture:new hp(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(j){for(let tt=0;tt<j.removed.length;tt++){const gt=j.removed[tt],nt=v.indexOf(gt);nt>=0&&(v[nt]=null,T[nt].disconnect(gt))}for(let tt=0;tt<j.added.length;tt++){const gt=j.added[tt];let nt=v.indexOf(gt);if(nt===-1){for(let At=0;At<T.length;At++)if(At>=v.length){v.push(gt),nt=At;break}else if(v[At]===null){v[At]=gt,nt=At;break}if(nt===-1)break}const Et=T[nt];Et&&Et.connect(gt)}}const W=new N,X=new N;function V(j,tt,gt){W.setFromMatrixPosition(tt.matrixWorld),X.setFromMatrixPosition(gt.matrixWorld);const nt=W.distanceTo(X),Et=tt.projectionMatrix.elements,At=gt.projectionMatrix.elements,zt=Et[14]/(Et[10]-1),Jt=Et[14]/(Et[10]+1),kt=(Et[9]+1)/Et[5],Pt=(Et[9]-1)/Et[5],I=(Et[8]-1)/Et[0],ge=(At[8]+1)/At[0],Nt=zt*I,z=zt*ge,Tt=nt/(-I+ge),ie=Tt*-I;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ie),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Et[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const wt=zt+Tt,A=Jt+Tt,S=Nt-ie,G=z+(nt-ie),Q=kt*Jt/A*wt,J=Pt*Jt/A*wt;j.projectionMatrix.makePerspective(S,G,Q,J,wt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function et(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let tt=j.near,gt=j.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),x.near=R.near=b.near=tt,x.far=R.far=b.far=gt,(D!==x.near||O!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,O=x.far),b.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,x.layers.mask=b.layers.mask|R.layers.mask;const nt=j.parent,Et=x.cameras;et(x,nt);for(let At=0;At<Et.length;At++)et(Et[At],nt);Et.length===2?V(x,b,R):x.projectionMatrix.copy(b.projectionMatrix),P(j,x,nt)};function P(j,tt,gt){gt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(gt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=to*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ut=null;function Lt(j,tt){if(u=tt.getViewerPose(c||a),g=tt,u!==null){const gt=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let nt=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let At=0;At<gt.length;At++){const zt=gt[At];let Jt=null;if(f!==null)Jt=f.getViewport(zt);else{const Pt=h.getViewSubImage(d,zt);Jt=Pt.viewport,At===0&&(t.setRenderTargetTextures(E,Pt.colorTexture,d.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(E))}let kt=M[At];kt===void 0&&(kt=new Vn,kt.layers.enable(At),kt.viewport=new _e,M[At]=kt),kt.matrix.fromArray(zt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(zt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),At===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(kt)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const At=h.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&_.init(t,At,i.renderState)}}for(let gt=0;gt<T.length;gt++){const nt=v[gt],Et=T[gt];nt!==null&&Et!==void 0&&Et.update(nt,tt,c||a)}ut&&ut(j,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Kt=new cp;Kt.setAnimationLoop(Lt),this.setAnimationLoop=function(j){ut=j},this.dispose=function(){}}}const Ur=new Pi,aS=new we;function oS(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ap(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),T=E.envMap,v=E.envMapRotation;T&&(m.envMap.value=T,Ur.copy(v),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),m.envMapRotation.value.setFromMatrix4(aS.makeRotationFromEuler(Ur)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lS(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const v=T.program;n.uniformBlockBinding(E,v)}function c(E,T){let v=i[E.id];v===void 0&&(g(E),v=u(E),i[E.id]=v,E.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(E,C);const w=t.render.frame;s[E.id]!==w&&(d(E),s[E.id]=w)}function u(E){const T=h();E.__bindingPointIndex=T;const v=r.createBuffer(),C=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,v),v}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=i[E.id],v=E.uniforms,C=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let w=0,b=v.length;w<b;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=R.length;M<x;M++){const D=R[M];if(f(D,w,M,C)===!0){const O=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let $=0;$<B.length;$++){const W=B[$],X=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,O+Y,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,Y),Y+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(E,T,v,C){const w=E.value,b=T+"_"+v;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const R=C[b];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[b]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(E){const T=E.uniforms;let v=0;const C=16;for(let b=0,R=T.length;b<R;b++){const M=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,D=M.length;x<D;x++){const O=M[x],B=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,$=B.length;Y<$;Y++){const W=B[Y],X=_(W),V=v%C,et=V%X.boundary,P=V+et;v+=et,P!==0&&C-P<X.storage&&(v+=C-P),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=X.storage}}}const w=v%C;return w>0&&(v+=C-w),E.__size=v,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class cS{constructor(t={}){const{canvas:e=K_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=mr,this.toneMappingExposure=1;const v=this;let C=!1,w=0,b=0,R=null,M=-1,x=null;const D=new _e,O=new _e;let B=null;const Y=new jt(0);let $=0,W=e.width,X=e.height,V=1,et=null,P=null;const ut=new _e(0,0,W,X),Lt=new _e(0,0,W,X);let Kt=!1;const j=new dh;let tt=!1,gt=!1;const nt=new we,Et=new we,At=new N,zt=new _e,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Pt(){return R===null?V:1}let I=n;function ge(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ih}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const U="webgl2";if(I=ge(U,y),I===null)throw ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Nt,z,Tt,ie,wt,A,S,G,Q,J,Z,ht,ot,pt,Gt,it,at,It,Dt,xt,Yt,Ut,ae,L;function ct(){Nt=new px(I),Nt.init(),Ut=new QM(I,Nt),z=new lx(I,Nt,t,Ut),Tt=new ZM(I,Nt),z.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ie=new gx(I),wt=new NM,A=new JM(I,Nt,Tt,wt,z,Ut,ie),S=new ux(v),G=new dx(v),Q=new Tg(I),ae=new ax(I,Q),J=new mx(I,Q,ie,ae),Z=new xx(I,J,Q,ie),Dt=new vx(I,z,A),it=new cx(wt),ht=new UM(v,S,G,Nt,z,ae,it),ot=new oS(v,wt),pt=new FM,Gt=new GM(Nt),It=new sx(v,S,G,Tt,Z,f,l),at=new $M(v,Z,z),L=new lS(I,ie,z,Tt),xt=new ox(I,Nt,ie),Yt=new _x(I,Nt,ie),ie.programs=ht.programs,v.capabilities=z,v.extensions=Nt,v.properties=wt,v.renderLists=pt,v.shadowMap=at,v.state=Tt,v.info=ie}ct();const q=new sS(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,X,!1))},this.getSize=function(y){return y.set(W,X)},this.setSize=function(y,U,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,X=U,e.width=Math.floor(y*V),e.height=Math.floor(U*V),k===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(W*V,X*V).floor()},this.setDrawingBufferSize=function(y,U,k){W=y,X=U,V=k,e.width=Math.floor(y*k),e.height=Math.floor(U*k),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,U,k,H){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,U,k,H),Tt.viewport(D.copy(ut).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Lt)},this.setScissor=function(y,U,k,H){y.isVector4?Lt.set(y.x,y.y,y.z,y.w):Lt.set(y,U,k,H),Tt.scissor(O.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(y){Tt.setScissorTest(Kt=y)},this.setOpaqueSort=function(y){et=y},this.setTransparentSort=function(y){P=y},this.getClearColor=function(y){return y.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(y=!0,U=!0,k=!0){let H=0;if(y){let F=!1;if(R!==null){const rt=R.texture.format;F=rt===ch||rt===lh||rt===oh}if(F){const rt=R.texture.type,st=rt===ji||rt===ts||rt===Qa||rt===ia||rt===sh||rt===ah,dt=It.getClearColor(),Mt=It.getClearAlpha(),Ft=dt.r,Vt=dt.g,yt=dt.b;st?(g[0]=Ft,g[1]=Vt,g[2]=yt,g[3]=Mt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ft,_[1]=Vt,_[2]=yt,_[3]=Mt,I.clearBufferiv(I.COLOR,0,_))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),k&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),Gt.dispose(),wt.dispose(),S.dispose(),G.dispose(),Z.dispose(),ae.dispose(),L.dispose(),ht.dispose(),q.dispose(),q.removeEventListener("sessionstart",mt),q.removeEventListener("sessionend",Ht),Rt.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=ie.autoReset,U=at.enabled,k=at.autoUpdate,H=at.needsUpdate,F=at.type;ct(),ie.autoReset=y,at.enabled=U,at.autoUpdate=k,at.needsUpdate=H,at.type=F}function ft(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ot(y){const U=y.target;U.removeEventListener("dispose",Ot),le(U)}function le(y){Ie(y),wt.remove(y)}function Ie(y){const U=wt.get(y).programs;U!==void 0&&(U.forEach(function(k){ht.releaseProgram(k)}),y.isShaderMaterial&&ht.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,k,H,F,rt){U===null&&(U=Jt);const st=F.isMesh&&F.matrixWorld.determinant()<0,dt=Nn(y,U,k,H,F);Tt.setMaterial(H,st);let Mt=k.index,Ft=1;if(H.wireframe===!0){if(Mt=J.getWireframeAttribute(k),Mt===void 0)return;Ft=2}const Vt=k.drawRange,yt=k.attributes.position;let Wt=Vt.start*Ft,ce=(Vt.start+Vt.count)*Ft;rt!==null&&(Wt=Math.max(Wt,rt.start*Ft),ce=Math.min(ce,(rt.start+rt.count)*Ft)),Mt!==null?(Wt=Math.max(Wt,0),ce=Math.min(ce,Mt.count)):yt!=null&&(Wt=Math.max(Wt,0),ce=Math.min(ce,yt.count));const he=ce-Wt;if(he<0||he===1/0)return;ae.setup(F,H,dt,k,Mt);let Be,fe=xt;if(Mt!==null&&(Be=Q.get(Mt),fe=Yt,fe.setIndex(Be)),F.isMesh)H.wireframe===!0?(Tt.setLineWidth(H.wireframeLinewidth*Pt()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(F.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),Tt.setLineWidth(Ct*Pt()),F.isLineSegments?fe.setMode(I.LINES):F.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else F.isPoints?fe.setMode(I.POINTS):F.isSprite&&fe.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)fe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))fe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ct=F._multiDrawStarts,Ii=F._multiDrawCounts,de=F._multiDrawCount,ui=Mt?Q.get(Mt).bytesPerElement:1,ps=wt.get(H).currentProgram.getUniforms();for(let On=0;On<de;On++)ps.setValue(I,"_gl_DrawID",On),fe.render(Ct[On]/ui,Ii[On])}else if(F.isInstancedMesh)fe.renderInstances(Wt,he,F.count);else if(k.isInstancedBufferGeometry){const Ct=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ii=Math.min(k.instanceCount,Ct);fe.renderInstances(Wt,he,Ii)}else fe.render(Wt,he)};function vt(y,U,k){y.transparent===!0&&y.side===Ei&&y.forceSinglePass===!1?(y.side=bn,y.needsUpdate=!0,ve(y,U,k),y.side=Sr,y.needsUpdate=!0,ve(y,U,k),y.side=Ei):ve(y,U,k)}this.compile=function(y,U,k=null){k===null&&(k=y),p=Gt.get(k),p.init(U),T.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),y!==k&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const rt=F.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){const dt=rt[st];vt(dt,k,F),H.add(dt)}else vt(rt,k,F),H.add(rt)}),T.pop(),p=null,H},this.compileAsync=function(y,U,k=null){const H=this.compile(y,U,k);return new Promise(F=>{function rt(){if(H.forEach(function(st){wt.get(st).currentProgram.isReady()&&H.delete(st)}),H.size===0){F(y);return}setTimeout(rt,10)}Nt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let bt=null;function qt(y){bt&&bt(y)}function mt(){Rt.stop()}function Ht(){Rt.start()}const Rt=new cp;Rt.setAnimationLoop(qt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(y){bt=y,q.setAnimationLoop(y),y===null?Rt.stop():Rt.start()},q.addEventListener("sessionstart",mt),q.addEventListener("sessionend",Ht),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,U,R),p=Gt.get(y,T.length),p.init(U),T.push(p),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,tt=it.init(this.clippingPlanes,gt),m=pt.get(y,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Bt(rt,U,-1/0,v.sortObjects)}Bt(y,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,P),kt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,kt&&It.addToRenderList(m,y),this.info.render.frame++,tt===!0&&it.beginShadows();const k=p.state.shadowsArray;at.render(k,y,U),tt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const rt=U.cameras;if(F.length>0)for(let st=0,dt=rt.length;st<dt;st++){const Mt=rt[st];Qt(H,F,y,Mt)}kt&&It.render(y);for(let st=0,dt=rt.length;st<dt;st++){const Mt=rt[st];Ne(m,y,Mt,Mt.viewport)}}else F.length>0&&Qt(H,F,y,U),kt&&It.render(y),Ne(m,y,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(v,y,U),ae.resetDefaultState(),M=-1,x=null,T.pop(),T.length>0?(p=T[T.length-1],tt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Bt(y,U,k,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){H&&zt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Et);const st=Z.update(y),dt=y.material;dt.visible&&m.push(y,st,dt,k,zt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const st=Z.update(y),dt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),zt.copy(y.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),zt.copy(st.boundingSphere.center)),zt.applyMatrix4(y.matrixWorld).applyMatrix4(Et)),Array.isArray(dt)){const Mt=st.groups;for(let Ft=0,Vt=Mt.length;Ft<Vt;Ft++){const yt=Mt[Ft],Wt=dt[yt.materialIndex];Wt&&Wt.visible&&m.push(y,st,Wt,k,zt.z,yt)}}else dt.visible&&m.push(y,st,dt,k,zt.z,null)}}const rt=y.children;for(let st=0,dt=rt.length;st<dt;st++)Bt(rt[st],U,k,H)}function Ne(y,U,k,H){const F=y.opaque,rt=y.transmissive,st=y.transparent;p.setupLightsView(k),tt===!0&&it.setGlobalState(v.clippingPlanes,k),H&&Tt.viewport(D.copy(H)),F.length>0&&ye(F,U,k),rt.length>0&&ye(rt,U,k),st.length>0&&ye(st,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Qt(y,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new es(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?ho:ji,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const rt=p.state.transmissionRenderTarget[H.id],st=H.viewport||D;rt.setSize(st.z,st.w);const dt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(Y),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),kt&&It.render(k);const Mt=v.toneMapping;v.toneMapping=mr;const Ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),tt===!0&&it.setGlobalState(v.clippingPlanes,H),ye(y,k,H),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let yt=0,Wt=U.length;yt<Wt;yt++){const ce=U[yt],he=ce.object,Be=ce.geometry,fe=ce.material,Ct=ce.group;if(fe.side===Ei&&he.layers.test(H.layers)){const Ii=fe.side;fe.side=bn,fe.needsUpdate=!0,Ge(he,k,H,Be,fe,Ct),fe.side=Ii,fe.needsUpdate=!0,Vt=!0}}Vt===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}v.setRenderTarget(dt),v.setClearColor(Y,$),Ft!==void 0&&(H.viewport=Ft),v.toneMapping=Mt}function ye(y,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,rt=y.length;F<rt;F++){const st=y[F],dt=st.object,Mt=st.geometry,Ft=H===null?st.material:H,Vt=st.group;dt.layers.test(k.layers)&&Ge(dt,U,k,Mt,Ft,Vt)}}function Ge(y,U,k,H,F,rt){y.onBeforeRender(v,U,k,H,F,rt),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(v,U,k,H,y,rt),F.transparent===!0&&F.side===Ei&&F.forceSinglePass===!1?(F.side=bn,F.needsUpdate=!0,v.renderBufferDirect(k,U,H,F,y,rt),F.side=Sr,F.needsUpdate=!0,v.renderBufferDirect(k,U,H,F,y,rt),F.side=Ei):v.renderBufferDirect(k,U,H,F,y,rt),y.onAfterRender(v,U,k,H,F,rt)}function ve(y,U,k){U.isScene!==!0&&(U=Jt);const H=wt.get(y),F=p.state.lights,rt=p.state.shadowsArray,st=F.state.version,dt=ht.getParameters(y,F.state,rt,U,k),Mt=ht.getProgramCacheKey(dt);let Ft=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?G:S).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ft===void 0&&(y.addEventListener("dispose",Ot),Ft=new Map,H.programs=Ft);let Vt=Ft.get(Mt);if(Vt!==void 0){if(H.currentProgram===Vt&&H.lightsStateVersion===st)return ue(y,dt),Vt}else dt.uniforms=ht.getUniforms(y),y.onBeforeCompile(dt,v),Vt=ht.acquireProgram(dt,Mt),Ft.set(Mt,Vt),H.uniforms=dt.uniforms;const yt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=it.uniform),ue(y,dt),H.needsLights=pn(y),H.lightsStateVersion=st,H.needsLights&&(yt.ambientLightColor.value=F.state.ambient,yt.lightProbe.value=F.state.probe,yt.directionalLights.value=F.state.directional,yt.directionalLightShadows.value=F.state.directionalShadow,yt.spotLights.value=F.state.spot,yt.spotLightShadows.value=F.state.spotShadow,yt.rectAreaLights.value=F.state.rectArea,yt.ltc_1.value=F.state.rectAreaLTC1,yt.ltc_2.value=F.state.rectAreaLTC2,yt.pointLights.value=F.state.point,yt.pointLightShadows.value=F.state.pointShadow,yt.hemisphereLights.value=F.state.hemi,yt.directionalShadowMap.value=F.state.directionalShadowMap,yt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,yt.spotShadowMap.value=F.state.spotShadowMap,yt.spotLightMatrix.value=F.state.spotLightMatrix,yt.spotLightMap.value=F.state.spotLightMap,yt.pointShadowMap.value=F.state.pointShadowMap,yt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Vt,H.uniformsList=null,Vt}function xe(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ll.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ue(y,U){const k=wt.get(y);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Nn(y,U,k,H,F){U.isScene!==!0&&(U=Jt),A.resetTextureUnits();const rt=U.fog,st=H.isMeshStandardMaterial?U.environment:null,dt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:da,Mt=(H.isMeshStandardMaterial?G:S).get(H.envMap||st),Ft=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Vt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!k.morphAttributes.position,Wt=!!k.morphAttributes.normal,ce=!!k.morphAttributes.color;let he=mr;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=v.toneMapping);const Be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=Be!==void 0?Be.length:0,Ct=wt.get(H),Ii=p.state.lights;if(tt===!0&&(gt===!0||y!==x)){const $n=y===x&&H.id===M;it.setState(H,y,$n)}let de=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ii.state.version||Ct.outputColorSpace!==dt||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==Mt||H.fog===!0&&Ct.fog!==rt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==it.numPlanes||Ct.numIntersection!==it.numIntersection)||Ct.vertexAlphas!==Ft||Ct.vertexTangents!==Vt||Ct.morphTargets!==yt||Ct.morphNormals!==Wt||Ct.morphColors!==ce||Ct.toneMapping!==he||Ct.morphTargetsCount!==fe)&&(de=!0):(de=!0,Ct.__version=H.version);let ui=Ct.currentProgram;de===!0&&(ui=ve(H,U,F));let ps=!1,On=!1,ga=!1;const be=ui.getUniforms(),xi=Ct.uniforms;if(Tt.useProgram(ui.program)&&(ps=!0,On=!0,ga=!0),H.id!==M&&(M=H.id,On=!0),ps||x!==y){Tt.buffers.depth.getReversed()?(nt.copy(y.projectionMatrix),Q_(nt),tg(nt),be.setValue(I,"projectionMatrix",nt)):be.setValue(I,"projectionMatrix",y.projectionMatrix),be.setValue(I,"viewMatrix",y.matrixWorldInverse);const Ji=be.map.cameraPosition;Ji!==void 0&&Ji.setValue(I,At.setFromMatrixPosition(y.matrixWorld)),z.logarithmicDepthBuffer&&be.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&be.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,On=!0,ga=!0)}if(F.isSkinnedMesh){be.setOptional(I,F,"bindMatrix"),be.setOptional(I,F,"bindMatrixInverse");const $n=F.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),be.setValue(I,"boneTexture",$n.boneTexture,A))}F.isBatchedMesh&&(be.setOptional(I,F,"batchingTexture"),be.setValue(I,"batchingTexture",F._matricesTexture,A),be.setOptional(I,F,"batchingIdTexture"),be.setValue(I,"batchingIdTexture",F._indirectTexture,A),be.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(I,"batchingColorTexture",F._colorsTexture,A));const va=k.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0)&&Dt.update(F,k,ui),(On||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,be.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(xi.envMap.value=Mt,xi.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(xi.envMapIntensity.value=U.environmentIntensity),On&&(be.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&Te(xi,ga),rt&&H.fog===!0&&ot.refreshFogUniforms(xi,rt),ot.refreshMaterialUniforms(xi,H,V,X,p.state.transmissionRenderTarget[y.id]),ll.upload(I,xe(Ct),xi,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ll.upload(I,xe(Ct),xi,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&be.setValue(I,"center",F.center),be.setValue(I,"modelViewMatrix",F.modelViewMatrix),be.setValue(I,"normalMatrix",F.normalMatrix),be.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const $n=H.uniformsGroups;for(let Ji=0,Qi=$n.length;Ji<Qi;Ji++){const Vh=$n[Ji];L.update(Vh,ui),L.bind(Vh,ui)}}return ui}function Te(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function pn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,U,k){wt.get(y.texture).__webglTexture=U,wt.get(y.depthTexture).__webglTexture=k;const H=wt.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const k=wt.get(y);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,k=0){R=y,w=U,b=k;let H=!0,F=null,rt=!1,st=!1;if(y){const Mt=wt.get(y);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Mt.__hasExternalTextures)A.rebindTextures(y,wt.get(y.texture).__webglTexture,wt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const yt=y.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&wt.has(yt)&&(y.width!==yt.image.width||y.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(st=!0);const Vt=wt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?F=Vt[U][k]:F=Vt[U],rt=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?F=wt.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?F=Vt[k]:F=Vt,D.copy(y.viewport),O.copy(y.scissor),B=y.scissorTest}else D.copy(ut).multiplyScalar(V).floor(),O.copy(Lt).multiplyScalar(V).floor(),B=Kt;if(Tt.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&Tt.drawBuffers(y,F),Tt.viewport(D),Tt.scissor(O),Tt.setScissorTest(B),rt){const Mt=wt.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,k)}else if(st){const Mt=wt.get(y.texture),Ft=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,k||0,Ft)}M=-1},this.readRenderTargetPixels=function(y,U,k,H,F,rt,st){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){Tt.bindFramebuffer(I.FRAMEBUFFER,dt);try{const Mt=y.texture,Ft=Mt.format,Vt=Mt.type;if(!z.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&k>=0&&k<=y.height-F&&I.readPixels(U,k,H,F,Ut.convert(Ft),Ut.convert(Vt),rt)}finally{const Mt=R!==null?wt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(y,U,k,H,F,rt,st){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){const Mt=y.texture,Ft=Mt.format,Vt=Mt.type;if(!z.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-H&&k>=0&&k<=y.height-F){Tt.bindFramebuffer(I.FRAMEBUFFER,dt);const yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.bufferData(I.PIXEL_PACK_BUFFER,rt.byteLength,I.STREAM_READ),I.readPixels(U,k,H,F,Ut.convert(Ft),Ut.convert(Vt),0);const Wt=R!==null?wt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,Wt);const ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await J_(I,ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,rt),I.deleteBuffer(yt),I.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,k=0){y.isTexture!==!0&&(Ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-k),F=Math.floor(y.image.width*H),rt=Math.floor(y.image.height*H),st=U!==null?U.x:0,dt=U!==null?U.y:0;A.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,st,dt,F,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(y,U,k=null,H=null,F=0){y.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let rt,st,dt,Mt,Ft,Vt,yt,Wt,ce;const he=y.isCompressedTexture?y.mipmaps[F]:y.image;k!==null?(rt=k.max.x-k.min.x,st=k.max.y-k.min.y,dt=k.isBox3?k.max.z-k.min.z:1,Mt=k.min.x,Ft=k.min.y,Vt=k.isBox3?k.min.z:0):(rt=he.width,st=he.height,dt=he.depth||1,Mt=0,Ft=0,Vt=0),H!==null?(yt=H.x,Wt=H.y,ce=H.z):(yt=0,Wt=0,ce=0);const Be=Ut.convert(U.format),fe=Ut.convert(U.type);let Ct;U.isData3DTexture?(A.setTexture3D(U,0),Ct=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Ct=I.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Ct=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Ii=I.getParameter(I.UNPACK_ROW_LENGTH),de=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ui=I.getParameter(I.UNPACK_SKIP_PIXELS),ps=I.getParameter(I.UNPACK_SKIP_ROWS),On=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,he.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt);const ga=y.isDataArrayTexture||y.isData3DTexture,be=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const xi=wt.get(y),va=wt.get(U),$n=wt.get(xi.__renderTarget),Ji=wt.get(va.__renderTarget);Tt.bindFramebuffer(I.READ_FRAMEBUFFER,$n.__webglFramebuffer),Tt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Qi=0;Qi<dt;Qi++)ga&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.get(y).__webglTexture,F,Vt+Qi),y.isDepthTexture?(be&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,F,ce+Qi),I.blitFramebuffer(Mt,Ft,rt,st,yt,Wt,rt,st,I.DEPTH_BUFFER_BIT,I.NEAREST)):be?I.copyTexSubImage3D(Ct,F,yt,Wt,ce+Qi,Mt,Ft,rt,st):I.copyTexSubImage2D(Ct,F,yt,Wt,ce+Qi,Mt,Ft,rt,st);Tt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else be?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Ct,F,yt,Wt,ce,rt,st,dt,Be,fe,he.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ct,F,yt,Wt,ce,rt,st,dt,Be,he.data):I.texSubImage3D(Ct,F,yt,Wt,ce,rt,st,dt,Be,fe,he):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,yt,Wt,rt,st,Be,fe,he.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,yt,Wt,he.width,he.height,Be,he.data):I.texSubImage2D(I.TEXTURE_2D,F,yt,Wt,rt,st,Be,fe,he);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ii),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ui),I.pixelStorei(I.UNPACK_SKIP_ROWS,ps),I.pixelStorei(I.UNPACK_SKIP_IMAGES,On),F===0&&U.generateMipmaps&&I.generateMipmap(Ct),Tt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,k=null,H=null,F=0){return y.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0),Ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,k,H,F)},this.initRenderTarget=function(y){wt.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Tt.unbindTexture()},this.resetState=function(){w=0,b=0,R=null,Tt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class _p extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mh extends hs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sl=new N,yl=new N,Vf=new we,Ea=new kl,Bo=new zl,Mc=new N,Gf=new N;class uS extends Qe{constructor(t=new vi,e=new mh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Sl.fromBufferAttribute(e,i-1),yl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Sl.distanceTo(yl);t.setAttribute("lineDistance",new si(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=s,t.ray.intersectsSphere(Bo)===!1)return;Vf.copy(i).invert(),Ea.copy(t.ray).applyMatrix4(Vf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),T=zo(this,t,Ea,l,p,E);T&&e.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=zo(this,t,Ea,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=zo(this,t,Ea,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=zo(this,t,Ea,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zo(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(Sl.fromBufferAttribute(a,i),yl.fromBufferAttribute(a,s),e.distanceSqToSegment(Sl,yl,Mc,Gf)>n)return;Mc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Mc);if(!(l<t.near||l>t.far))return{distance:l,point:Gf.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Wf=new N,Xf=new N;class gp extends uS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Wf.fromBufferAttribute(e,i),Xf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wf.distanceTo(Xf);t.setAttribute("lineDistance",new si(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const ko=new N,Ho=new N,Sc=new N,Vo=new ei;class hS extends vi{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Xs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Vo;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Vo.getNormal(Sc),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const T=(E+1)%3,v=h[E],C=h[T],w=Vo[u[E]],b=Vo[u[T]],R=`${v}_${C}`,M=`${C}_${v}`;M in d&&d[M]?(Sc.dot(d[M].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(b.x,b.y,b.z)),d[M]=null):R in d||(d[R]={index0:c[E],index1:c[T],normal:Sc.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];ko.fromBufferAttribute(o,_),Ho.fromBufferAttribute(o,m),f.push(ko.x,ko.y,ko.z),f.push(Ho.x,Ho.y,Ho.z)}this.setAttribute("position",new si(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class fS extends hs{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Pu extends hs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _h extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dS extends _h{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yc=new we,Yf=new N,qf=new N;class vp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dh,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yf),qf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qf),e.updateMatrixWorld(),yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $f=new we,Ta=new N,Ec=new N;class pS extends vp{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ta),Ec.copy(n.position),Ec.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ec),n.updateMatrixWorld(),i.makeTranslation(-Ta.x,-Ta.y,-Ta.z),$f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($f)}}class mS extends _h{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _S extends vp{constructor(){super(new up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gS extends _h{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new _S}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const jf=new we;class vS{constructor(t,e,n=0,i=1/0){this.ray=new kl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new hh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jf),this}intersectObject(t,e=!0,n=[]){return Du(t,this,n,e),n.sort(Zf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Du(t[i],this,n,e);return n.sort(Zf),n}}function Zf(r,t){return r.distance-t.distance}function Du(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Du(s[a],t,e,!0)}}class Kf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(un(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xS extends gp{constructor(t=10,e=10,n=4473924,i=8947848){n=new jt(n),i=new jt(i);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new vi;u.setAttribute("position",new si(l,3)),u.setAttribute("color",new si(c,3));const h=new mh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class MS extends cs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);const Jf={type:"change"},gh={type:"start"},xp={type:"end"},Go=new kl,Qf=new Hi,SS=Math.cos(70*Rn.DEG2RAD),We=new N,An=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tc=1e-6;class yS extends MS{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ns,this._lastTargetPosition=new N,this._quat=new ns().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kf,this._sphericalDelta=new Kf,this._scale=1,this._panOffset=new N,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new N,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TS.bind(this),this._onPointerDown=ES.bind(this),this._onPointerUp=bS.bind(this),this._onContextMenu=LS.bind(this),this._onMouseWheel=RS.bind(this),this._onKeyDown=CS.bind(this),this._onTouchStart=PS.bind(this),this._onTouchMove=DS.bind(this),this._onMouseDown=AS.bind(this),this._onMouseMove=wS.bind(this),this._interceptControlDown=IS.bind(this),this._interceptControlUp=US.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jf),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=An:n>Math.PI&&(n-=An),i<-Math.PI?i+=An:i>Math.PI&&(i-=An),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=We.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Go.origin.copy(this.object.position),Go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Go.direction))<SS?this.object.lookAt(this.target):(Qf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Go.intersectPlane(Qf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Tc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tc||this._lastTargetPosition.distanceToSquared(this.target)>Tc?(this.dispatchEvent(Jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?An/60*this.autoRotateSpeed*t:An/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;We.copy(i).sub(this.target);let s=We.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ES(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function TS(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function bS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xp),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function AS(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=me.DOLLY;break;case Vs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=me.ROTATE}break;case Vs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(gh)}function wS(r){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function RS(r){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(r.preventDefault(),this.dispatchEvent(gh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(xp))}function CS(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function PS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=me.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=me.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(gh)}function DS(r){switch(this._trackPointer(r),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=me.NONE}}function LS(r){this.enabled!==!1&&r.preventDefault()}function IS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function US(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class NS extends _p{constructor(){super();const t=new ma;t.deleteAttribute("uv");const e=new Pu({side:bn}),n=new Pu,i=new mS(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Re(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Re(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Re(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Re(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Re(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Re(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Re(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new Re(t,Cs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Re(t,Cs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Re(t,Cs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Re(t,Cs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Re(t,Cs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Re(t,Cs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Cs(r){const t=new fh;return t.color.setScalar(r),t}function ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Mp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},aa={duration:.5,overwrite:!1,delay:0},vh,fn,Ce,ni=1e8,Ee=1/ni,Lu=Math.PI*2,OS=Lu/4,FS=0,Sp=Math.sqrt,BS=Math.cos,zS=Math.sin,tn=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},Zi=function(t){return typeof t=="number"},xh=function(t){return typeof t>"u"},Di=function(t){return typeof t=="object"},Pn=function(t){return t!==!1},Mh=function(){return typeof window<"u"},Wo=function(t){return Ue(t)||tn(t)},yp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,Iu=/(?:-?\.?\d|\.)+/gi,Ep=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tp=/[+-]=-?[.\d]+/,bp=/[^,'"\[\]\s]+/gi,kS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,Mi,Uu,Sh,qn={},El={},Ap,wp=function(t){return(El=is(t,qn))&&Un},yh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},eo=function(t,e){return!e&&console.warn(t)},Rp=function(t,e){return t&&(qn[t]=e)&&El&&(El[t]=e)||qn},no=function(){return 0},HS={suppressEvents:!0,isStart:!0,kill:!1},cl={suppressEvents:!0,kill:!1},VS={suppressEvents:!0},Eh={},_r=[],Nu={},Cp,Hn={},Ac={},td=30,ul=[],Th="",bh=function(t){var e=t[0],n,i;if(Di(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ul.length;i--&&!ul[i].targetTest(e););n=ul[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Qp(t[i],n)))||t.splice(i,1);return t},qr=function(t){return t._gsap||bh(ii(t))[0]._gsap},Pp=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():xh(n)&&t.getAttribute&&t.getAttribute(e)||n},Dn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},Je=function(t){return Math.round(t*1e7)/1e7||0},qs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},GS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Tl=function(){var t=_r.length,e=_r.slice(0),n,i;for(Nu={},_r.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dp=function(t,e,n,i){_r.length&&!fn&&Tl(),t.render(e,n,fn&&e<0&&(t._initted||t._startAt)),_r.length&&!fn&&Tl()},Lp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(bp).length<2?e:tn(t)?t.trim():t},Ip=function(t){return t},ci=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},WS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},is=function(t,e){for(var n in e)t[n]=e[n];return t},ed=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Di(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},bl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ka=function(t){var e=t.parent||De,n=t.keyframes?WS(dn(t.keyframes)):ci;if(Pn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},XS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Up=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Vl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Er=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},$r=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},YS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ou=function(t,e,n,i){return t._startAt&&(fn?t._startAt.revert(cl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},qS=function r(t){return!t||t._ts&&r(t.parent)},nd=function(t){return t._repeat?oa(t._tTime,t=t.duration()+t._rDelay)*t:0},oa=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Al=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Gl=function(t){return t._end=Je(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Wl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Je(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Gl(t),n._dirty||$r(n,t)),t},Np=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Al(t.rawTime(),e),(!e._dur||po(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),$r(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},Ti=function(t,e,n,i){return e.parent&&Er(e),e._start=Je((Zi(n)?n:n||t!==De?Zn(t,n,e):t._time)+e._delay),e._end=Je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Up(t,e,"_first","_last",t._sort?"_start":0),Fu(e)||(t._recent=e),i||Np(t,e),t._ts<0&&Wl(t,t._tTime),t},Op=function(t,e){return(qn.ScrollTrigger||yh("scrollTrigger",e))&&qn.ScrollTrigger.create(e,t)},Fp=function(t,e,n,i,s){if(wh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Cp!==Gn.frame)return _r.push(t),t._lazy=[s,i],1},$S=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Fu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},jS=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&$S(t)&&!(!t._initted&&Fu(t))||(t._ts<0||t._dp._ts<0)&&!Fu(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=po(0,t._tDur,e),u=oa(l,o),t._yoyo&&u&1&&(a=1-a),u!==oa(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||fn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&Fp(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Ou(t,e,n,!0),t._onUpdate&&!n&&Xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Er(t,1),!n&&!fn&&(Xn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ZS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},la=function(t,e,n,i){var s=t._repeat,a=Je(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Je(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Wl(t,t._tTime=t._tDur*o),t.parent&&Gl(t),n||$r(t.parent,t),t},id=function(t){return t instanceof yn?$r(t):la(t,t._dur)},KS={_start:0,endTime:no,totalDuration:no},Zn=function r(t,e,n){var i=t.labels,s=t._recent||KS,a=t.duration()>=ni?s.endTime(!1):t._dur,o,l,c;return tn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ha=function(t,e,n){var i=Zi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;a.immediateRender=Pn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new He(e[0],a,e[s+1])},wr=function(t,e){return t||t===0?e(t):e},po=function(t,e,n){return n<t?t:n>e?e:n},hn=function(t,e){return!tn(t)||!(e=kS.exec(t))?"":e[1]},JS=function(t,e,n){return wr(n,function(i){return po(t,e,i)})},Bu=[].slice,Bp=function(t,e){return t&&Di(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Di(t[0]))&&!t.nodeType&&t!==Mi},QS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return tn(i)&&!e||Bp(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(t,e,n){return Ce&&!e&&Ce.selector?Ce.selector(t):tn(t)&&!n&&(Uu||!ca())?Bu.call((e||Sh).querySelectorAll(t),0):dn(t)?QS(t,n):Bp(t)?Bu.call(t,0):t?[t]:[]},zu=function(t){return t=ii(t)[0]||eo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?eo("Invalid scope")||Sh.createElement("div"):t)}},zp=function(t){return t.sort(function(){return .5-Math.random()})},kp=function(t){if(Ue(t))return t;var e=Di(t)?t:{each:t},n=jr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return tn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||e).length,m=a[_],p,E,T,v,C,w,b,R,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,ni])[1],!M){for(b=-ni;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*u-.5:i%M,E=M===ni?0:l?_*h/M-.5:i/M|0,b=0,R=ni,w=0;w<_;w++)T=w%M-p,v=E-(w/M|0),m[w]=C=c?Math.abs(c==="y"?v:T):Sp(T*T+v*v),C>b&&(b=C),C<R&&(R=C);i==="random"&&zp(m),m.max=b-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=hn(e.amount||e.each)||0,n=n&&_<0?Zp(n):n}return _=(m[d]-m.min)/m.max||0,Je(m.b+(n?n(_):_)*m.v)+m.u}},ku=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Je(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Zi(n)?0:hn(n))}},Hp=function(t,e){var n=dn(t),i,s;return!n&&Di(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!Zi(t[0]))&&(i*=i)):t=ku(t.increment)),wr(e,n?Ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ni,u=0,h=t.length,d,f;h--;)s?(d=t[h].x-o,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:a,s||u===a||Zi(a)?u:u+hn(a)}:ku(t))},Vp=function(t,e,n,i){return wr(dn(t)?!e:n===!0?!!(n=0):!i,function(){return dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ty=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},ey=function(t,e){return function(n){return t(parseFloat(n))+(e||hn(n))}},ny=function(t,e,n){return Wp(t,e,0,1,n)},Gp=function(t,e,n){return wr(n,function(i){return t[~~e(i)]})},iy=function r(t,e,n){var i=e-t;return dn(t)?Gp(t,r(0,t.length),e):wr(n,function(s){return(i+(s-t)%i)%i+t})},ry=function r(t,e,n){var i=e-t,s=i*2;return dn(t)?Gp(t,r(0,t.length-1),e):wr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},io=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?bp:Iu),n+=t.substr(e,i-e)+Vp(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Wp=function(t,e,n,i,s){var a=e-t,o=i-n;return wr(s,function(l){return n+((l-t)/a*o||0)})},sy=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=tn(t),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(dn(t)&&!dn(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=is(dn(t)?[]:{},t));if(!u){for(l in e)Ah.call(o,t,l,"get",e[l]);s=function(g){return Ph(g,o)||(a?t.p:t)}}}return wr(n,s)},rd=function(t,e,n){var i=t.labels,s=ni,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Xn=function(t,e,n){var i=t.vars,s=i[e],a=Ce,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&_r.length&&Tl(),o&&(Ce=o),u=l?s.apply(c,l):s.call(c),Ce=a,u},Da=function(t){return Er(t),t.scrollTrigger&&t.scrollTrigger.kill(!!fn),t.progress()<1&&Xn(t,"onInterrupt"),t},ks,Xp=[],Yp=function(t){if(t)if(t=!t.name&&t.default||t,Mh()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:no,render:Ph,add:Ah,kill:Sy,modifier:My,rawVars:0},a={targetTest:0,get:0,getSetter:Ch,aliases:{},register:0};if(ca(),t!==i){if(Hn[e])return;ci(i,ci(bl(t,s),a)),is(i.prototype,is(s,bl(t,a))),Hn[i.prop=e]=i,t.targetTest&&(ul.push(i),Eh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Rp(e,i),t.register&&t.register(Un,i,Ln)}else Xp.push(t)},Me=255,La={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},wc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},qp=function(t,e,n){var i=t?Zi(t)?[t>>16,t>>8&Me,t&Me]:0:La.black,s,a,o,l,c,u,h,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),La[t])i=La[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Iu),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=wc(l+1/3,s,a),i[1]=wc(l,s,a),i[2]=wc(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Ep),n&&i.length<4&&(i[3]=1),i}else i=t.match(Iu)||La.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Me,a=i[1]/Me,o=i[2]/Me,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},$p=function(t){var e=[],n=[],i=-1;return t.split(gr).forEach(function(s){var a=s.match(zs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},sd=function(t,e,n){var i="",s=(t+i).match(gr),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=qp(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=$p(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(gr,"1").split(zs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(gr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},gr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in La)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),ay=/hsl[a]?\(/,jp=function(t){var e=t.join(" "),n;if(gr.lastIndex=0,gr.test(e))return n=ay.test(e),t[1]=sd(t[1],n),t[0]=sd(t[0],n,$p(t[1])),!0},ro,Gn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,g=function _(m){var p=r()-i,E=m===!0,T,v,C,w;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,T=C-a,(T>0||E)&&(w=++h.frame,d=C-h.time*1e3,h.time=C=C/1e3,a+=T+(T>=s?4:s-T),v=1),E||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](C,d,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ap&&(!Uu&&Mh()&&(Mi=Uu=window,Sh=Mi.document||{},qn.gsap=Un,(Mi.gsapVersions||(Mi.gsapVersions=[])).push(Un.version),wp(El||Mi.GreenSockGlobals||!Mi.gsap&&Mi||{}),Xp.forEach(Yp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ro=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ro=0,c=no},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,E){var T=p?function(v,C,w,b){m(v,C,w,b),h.remove(T)}:m;return h.remove(m),o[E?"unshift":"push"](T),ca(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h}(),ca=function(){return!ro&&Gn.wake()},se={},oy=/^[\d.\-M][\d.\-,\s]/,ly=/["']/g,cy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(ly,"").trim():+c,i=l.substr(o+1).trim();return e},uy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},hy=function(t){var e=(t+"").split("("),n=se[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[cy(e[1])]:uy(t).split(",").map(Lp)):se._CE&&oy.test(t)?se._CE("",t):n},Zp=function(t){return function(e){return 1-t(1-e)}},Kp=function r(t,e){for(var n=t._first,i;n;)n instanceof yn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},jr=function(t,e){return t&&(Ue(t)?t:se[t]||hy(t))||e},fs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Dn(t,function(o){se[o]=qn[o]=s,se[a=o.toLowerCase()]=n;for(var l in s)se[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[o+"."+l]=s[l]}),s},Jp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Lu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*zS((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Jp(o);return s=Lu/s,l.config=function(c,u){return r(t,c,u)},l},Cc=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Jp(n);return i.config=function(s){return r(t,s)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;fs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;fs("Elastic",Rc("in"),Rc("out"),Rc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};fs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);fs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});fs("Circ",function(r){return-(Sp(1-r*r)-1)});fs("Sine",function(r){return r===1?1:-BS(r*OS)+1});fs("Back",Cc("in"),Cc("out"),Cc());se.SteppedEase=se.steps=qn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ee;return function(o){return((i*po(0,a,o)|0)+s)*n}}};aa.ease=se["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Th+=r+","+r+"Params,"});var Qp=function(t,e){this.id=FS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Pp,this.set=e?e.getSetter:Ch},so=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,la(this,+e.duration,1,1),this.data=e.data,Ce&&(this._ctx=Ce,Ce.data.push(this)),ro||Gn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,la(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ca(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wl(this,n),!s._dp||s.parent||Np(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?oa(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(po(-Math.abs(this._delay),this._tDur,s),i!==!1),Gl(this),YS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ti(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Al(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=VS);var i=fn;return fn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,id(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,id(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Zn(this,n),Pn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=Ue(n)?n:Ip,o=function(){var c=i.then;i.then=null,Ue(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Da(this)},r}();ci(so.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var yn=function(r){Mp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),De&&Ti(n.parent||De,ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Op(ki(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ha(0,arguments,this),this},e.from=function(i,s,a){return Ha(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ha(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ka(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,Zn(this,a),1),this},e.call=function(i,s,a){return Ti(this,He.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new He(i,a,Zn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ka(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ka(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Je(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,E,T,v,C,w,b;if(this!==De&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,T=this._ts,p=!T,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Je(u%m),u===l?(_=this._repeat,d=c):(_=~~(u/m),_&&_===u/m&&(d=c,_--),d>c&&(d=c)),C=oa(this._tTime,m),!o&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(d=c-d,b=1),_!==C&&!this._lock){var R=w&&C&1,M=R===(w&&_&1);if(_<C&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Je(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Kp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=ZS(this,Je(o),Je(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!_&&(Xn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-Ee);break}}f=g}else{f=this._last;for(var x=i<0?i:d;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,a||fn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=x?-Ee:Ee);break}}f=g}}if(E&&!s&&(this.pause(),E.render(d>=o?0:-Ee)._zTime=d>=o?1:-1,this._ts))return this._start=v,Gl(this),this.render(i,s,a);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Zi(s)||(s=Zn(this,s,i)),!(i instanceof so)){if(dn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(tn(i))return this.addLabel(i,s);if(Ue(i))i=He.delayedCall(0,i);else return this}return this!==i?Ti(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ni);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof He?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return tn(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(Vl(this,i),i===this._recent&&(this._recent=this._last),$r(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Je(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=He.delayedCall(0,s||no,a);return o.data="isPause",this._hasPause=1,Ti(this,o,Zn(this,i))},e.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)cr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ii(i),l=this._first,c=Zi(s),u;l;)l instanceof He?GS(l._targets,o)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Zn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=He.to(a,ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ee,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&la(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,ci({startAt:{time:Zn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),rd(this,Zn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),rd(this,Zn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return $r(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=ni,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ti(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;la(a,a===De&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(De._ts&&(Dp(De,Al(i,De)),Cp=Gn.frame),Gn.frame>=td){td+=Yn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Yn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},t}(so);ci(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var fy=function(t,e,n,i,s,a,o){var l=new Ln(this._pt,t,e,0,1,sm,null,s),c=0,u=0,h,d,f,g,_,m,p,E;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=io(i)),a&&(E=[n,i],a(E,t,e),n=E[0],i=E[1]),d=n.match(bc)||[];h=bc.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?qs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=bc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Tp.test(i)||p)&&(l.e=0),this._pt=l,l},Ah=function(t,e,n,i,s,a,o,l,c,u){Ue(i)&&(i=i(s||0,t,a));var h=t[e],d=n!=="get"?n:Ue(h)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=Ue(h)?c?gy:im:Rh,g;if(tn(i)&&(~i.indexOf("random(")&&(i=io(i)),i.charAt(1)==="="&&(g=qs(d,i)+(hn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Hu)return!isNaN(d*i)&&i!==""?(g=new Ln(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?xy:rm,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&yh(e,i),fy.call(this,t,e,d,i,f,l||Yn.stringFilter,c))},dy=function(t,e,n,i,s){if(Ue(t)&&(t=Va(t,s,e,n,i)),!Di(t)||t.style&&t.nodeType||dn(t)||yp(t))return tn(t)?Va(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Va(t[o],s,e,n,i);return a},tm=function(t,e,n,i,s,a){var o,l,c,u;if(Hn[t]&&(o=new Hn[t]).init(s,o.rawVars?e[t]:dy(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ln(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ks))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},cr,Hu,wh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,E=p&&p.data==="nested"?p.vars.targets:m,T=t._overwrite==="auto"&&!vh,v=t.timeline,C,w,b,R,M,x,D,O,B,Y,$,W,X;if(v&&(!d||!s)&&(s="none"),t._ease=jr(s,aa.ease),t._yEase=h?Zp(jr(h===!0?s:h,aa.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(O=m[0]?qr(m[0]).harness:0,W=O&&i[O.prop],C=bl(i,Eh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?cl:HS),_._lazy=0),a){if(Er(t._startAt=He.set(m,ci({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn||!o&&!f)&&t._startAt.revert(cl),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),b=ci({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Pn(l),immediateRender:o,stagger:0,parent:p},C),W&&(b[O.prop]=W),Er(t._startAt=He.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn?t._startAt.revert(cl):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Pn(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],D=M._gsap||bh(m)[w]._gsap,t._ptLookup[w]=Y={},Nu[D.id]&&_r.length&&Tl(),$=E===m?w:E.indexOf(M),O&&(B=new O).init(M,W||C,t,$,E)!==!1&&(t._pt=R=new Ln(t._pt,M,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(V){Y[V]=R}),B.priority&&(x=1)),!O||W)for(b in C)Hn[b]&&(B=tm(b,C,t,$,M,E))?B.priority&&(x=1):Y[b]=R=Ah.call(t,M,b,"get",C[b],$,E,0,i.stringFilter);t._op&&t._op[w]&&t.kill(M,t._op[w]),T&&t._pt&&(cr=t,De.killTweensOf(M,Y,t.globalTime(e)),X=!t.parent,cr=0),t._pt&&l&&(Nu[D.id]=1)}x&&am(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,d&&e<=0&&v.render(ni,!0,!0)},py=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Hu=1,t.vars[e]="+=0",wh(t,o),Hu=0,l?eo(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Oe(n)+hn(h.e)),h.b&&(h.b=u.s+hn(h.b))},my=function(t,e){var n=t[0]?qr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=is({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},_y=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(dn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Va=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):tn(t)&&~t.indexOf("random(")?io(t):t},em=Th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",nm={};Dn(em+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return nm[r]=1});var He=function(r){Mp(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ka(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,E=i.parent||De,T=(dn(n)||yp(n)?Zi(n[0]):"length"in i)?[n]:ii(n),v,C,w,b,R,M,x,D;if(o._targets=T.length?bh(T):eo("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Wo(c)||Wo(u)){if(i=o.vars,v=o.timeline=new yn({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:T}),v.kill(),v.parent=v._dp=ki(o),v._start=0,d||Wo(c)||Wo(u)){if(b=T.length,x=d&&kp(d),Di(d))for(R in d)~em.indexOf(R)&&(D||(D={}),D[R]=d[R]);for(C=0;C<b;C++)w=bl(i,nm),w.stagger=0,p&&(w.yoyoEase=p),D&&is(w,D),M=T[C],w.duration=+Va(c,ki(o),C,M,T),w.delay=(+Va(u,ki(o),C,M,T)||0)-o._delay,!d&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(M,w,x?x(C,M,T):0),v._ease=se.none;v.duration()?c=u=0:o.timeline=0}else if(g){ka(ci(v.vars.defaults,{ease:"none"})),v._ease=jr(g.ease||i.ease||"none");var O=0,B,Y,$;if(dn(g))g.forEach(function(W){return v.to(T,W,">")}),v.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||_y(R,g[R],w,g.easeEach);for(R in w)for(B=w[R].sort(function(W,X){return W.t-X.t}),O=0,C=0;C<B.length;C++)Y=B[C],$={ease:Y.e,duration:(Y.t-(C?B[C-1].t:0))/100*c},$[R]=Y.v,v.to(T,$,O),O+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!vh&&(cr=ki(o),De.killTweensOf(T),cr=0),Ti(E,ki(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Je(E._time)&&Pn(h)&&qS(ki(o))&&E.data!=="nested")&&(o._tTime=-Ee,o.render(Math.max(0,-u)||0)),m&&Op(ki(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ee&&!u?l:i<Ee?0:i,d,f,g,_,m,p,E,T,v;if(!c)jS(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=Je(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===Je(h/_)&&(d=c,g--),d>c&&(d=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=c-d),m=oa(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(T&&this._yEase&&Kp(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Je(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Fp(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(v||this._ease)(d/c),this._from&&(this.ratio=E=1-E),d&&!o&&!s&&!g&&(Xn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ou(this,i,s,a),Xn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ou(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ro||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||wh(this,c),u=this._ease(c/this._dur),py(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Wl(this,0),this.parent||Up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Da(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cr&&cr.vars.overwrite!==!0)._first||Da(this),this.parent&&a!==this.timeline.totalDuration()&&la(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ii(i):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&XS(o,l))return s==="all"&&(this._pt=0),Da(this);for(h=this._op=this._op||[],s!=="all"&&(tn(s)&&(_={},Dn(s,function(E){return _[E]=1}),s=_),s=my(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Vl(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Da(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ha(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ha(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return De.killTweensOf(i,s,a)},t}(so);ci(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new yn,e=Bu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Rh=function(t,e,n){return t[e]=n},im=function(t,e,n){return t[e](n)},gy=function(t,e,n,i){return t[e](i.fp,n)},vy=function(t,e,n){return t.setAttribute(e,n)},Ch=function(t,e){return Ue(t[e])?im:xh(t[e])&&t.setAttribute?vy:Rh},rm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},xy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},sm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ph=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},My=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Sy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Vl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},am=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Ln=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||rm,this.d=l||this,this.set=c||Rh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yy,this.m=n,this.mt=s,this.tween=i},r}();Dn(Th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Eh[r]=1});qn.TweenMax=qn.TweenLite=He;qn.TimelineLite=qn.TimelineMax=yn;De=new yn({sortChildren:!1,defaults:aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=jp;var Zr=[],hl={},Ey=[],ad=0,Ty=0,Pc=function(t){return(hl[t]||Ey).map(function(e){return e()})},Vu=function(){var t=Date.now(),e=[];t-ad>2&&(Pc("matchMediaInit"),Zr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Mi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Pc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ad=t,Pc("matchMedia"))},om=function(){function r(e,n){this.selector=n&&zu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ty++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var a=this,o=function(){var c=Ce,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=zu(s)),Ce=a,h=i.apply(a,arguments),Ue(h)&&a._r.push(h),Ce=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ce;Ce=null,n(this),Ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Zr.length;a--;)Zr[a].id===this.id&&Zr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),by=function(){function r(e){this.contexts=[],this.scope=e,Ce&&Ce.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Di(n)||(n={matches:n});var a=new om(0,s||this.scope),o=a.conditions={},l,c,u;Ce&&!a.selector&&(a.selector=Ce.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Mi.matchMedia(n[c]),l&&(Zr.indexOf(a)<0&&Zr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Vu):l.addEventListener("change",Vu)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),wl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Yp(i)})},timeline:function(t){return new yn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){tn(t)&&(t=ii(t)[0]);var s=qr(t||{}).get,a=n?Ip:Lp;return n==="native"&&(n=""),t&&(e?a((Hn[e]&&Hn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Hn[o]&&Hn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(u){return Un.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Hn[e],o=qr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;ks._pt=0,h.init(t,n?u+n:u,ks,0,[t]),h.render(1,h),ks._pt&&Ph(1,ks)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Un.to(t,is((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=jr(t.ease,aa.ease)),ed(aa,t||{})},config:function(t){return ed(Yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Hn[o]&&!qn[o]&&eo(e+" effect requires "+o+" plugin.")}),Ac[e]=function(o,l,c){return n(ii(o),ci(l||{},s),c)},a&&(yn.prototype[e]=function(o,l,c){return this.add(Ac[e](o,Di(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){se[t]=jr(e)},parseEase:function(t,e){return arguments.length?jr(t,e):se},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new yn(t),i,s;for(n.smoothChildTiming=Pn(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&Ti(n,i,i._start-i._delay),i=s;return Ti(De,n,0),n},context:function(t,e){return t?new om(t,e):Ce},matchMedia:function(t){return new by(t)},matchMediaRefresh:function(){return Zr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Vu()},addEventListener:function(t,e){var n=hl[t]||(hl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=hl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:iy,wrapYoyo:ry,distribute:kp,random:Vp,snap:Hp,normalize:ny,getUnit:hn,clamp:JS,splitColor:qp,toArray:ii,selector:zu,mapRange:Wp,pipe:ty,unitize:ey,interpolate:sy,shuffle:zp},install:wp,effects:Ac,ticker:Gn,updateRoot:yn.updateRoot,plugins:Hn,globalTimeline:De,core:{PropTween:Ln,globals:Rp,Tween:He,Timeline:yn,Animation:so,getCache:qr,_removeLinkedListItem:Vl,reverting:function(){return fn},context:function(t){return t&&Ce&&(Ce.data.push(t),t._ctx=Ce),Ce},suppressOverwrites:function(t){return vh=t}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return wl[r]=He[r]});Gn.add(yn.updateRoot);ks=wl.to({},{duration:0});var Ay=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},wy=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ay(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Dc=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(tn(s)&&(l={},Dn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}wy(o,s)}}}},Un=wl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Dc("roundProps",ku),Dc("modifiers"),Dc("snap",Hp))||wl;He.version=yn.version=Un.version="3.12.5";Ap=1;Mh()&&ca();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var od,ur,$s,Dh,Xr,ld,Lh,Ry=function(){return typeof window<"u"},Ki={},Br=180/Math.PI,js=Math.PI/180,Ps=Math.atan2,cd=1e8,Ih=/([A-Z])/g,Cy=/(left|right|width|margin|padding|x)/i,Py=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Dy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ly=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Iy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},lm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Uy=function(t,e,n){return t.style[e]=n},Ny=function(t,e,n){return t.style.setProperty(e,n)},Oy=function(t,e,n){return t._gsap[e]=n},Fy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},By=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},zy=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Le="transform",In=Le+"Origin",ky=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Vi(i,o)}):this.tfm[t]=a.x?a[t]:Vi(i,t),t===In&&(this.tfm.zOrigin=a.zOrigin);else return Ai.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(In,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},um=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Hy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ih,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Lh(),(!s||!s.isStart)&&!n[Le]&&(um(n),i.zOrigin&&n[In]&&(n[In]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hm=function(t,e){var n={target:t,props:[],revert:Hy,save:ky};return t._gsap||Un.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},fm,Wu=function(t,e){var n=ur.createElementNS?ur.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ur.createElement(t);return n&&n.style?n:ur.createElement(t)},Ri=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ih,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ua(e)||e,1)||""},ud="O,Moz,ms,Ms,Webkit".split(","),ua=function(t,e,n){var i=e||Xr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(ud[a]+t in s););return a<0?null:(a===3?"ms":a>=0?ud[a]:"")+t},Xu=function(){Ry()&&window.document&&(od=window,ur=od.document,$s=ur.documentElement,Xr=Wu("div")||{style:{}},Wu("div"),Le=ua(Le),In=Le+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fm=!!ua("perspective"),Lh=Un.core.reverting,Dh=1)},Lc=function r(t){var e=Wu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if($s.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),$s.removeChild(e),this.style.cssText=s,a},hd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},dm=function(t){var e;try{e=t.getBBox()}catch{e=Lc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Lc||(e=Lc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+hd(t,["x","cx","x1"])||0,y:+hd(t,["y","cy","y1"])||0,width:0,height:0}:e},pm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&dm(t))},rs=function(t,e){if(e){var n=t.style,i;e in Ki&&e!==In&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ih,"-$1").toLowerCase())):n.removeAttribute(e)}},hr=function(t,e,n,i,s,a){var o=new Ln(t._pt,e,n,0,1,a?cm:lm);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},fd={deg:1,rad:1,turn:1},Vy={grid:1,flex:1},Tr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Xr.style,l=Cy.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||fd[i]||fd[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&pm(t),(f||a==="%")&&(Ki[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],Oe(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ur||!_.appendChild)&&(_=ur.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Gn.time&&!m.uncache)return Oe(s/m.width*h);if(f&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=h+i,g=t[u],E?t.style[e]=E:rs(t,e)}else(f||a==="%")&&!Vy[Ri(_,"display")]&&(o.position=Ri(t,"position")),_===t&&(o.position="static"),_.appendChild(Xr),g=Xr[u],_.removeChild(Xr),o.position="absolute";return l&&f&&(m=qr(_),m.time=Gn.time,m.width=_[u]),Oe(d?g*s/h:g&&s?h/g*s:0)},Vi=function(t,e,n,i){var s;return Dh||Xu(),e in Ai&&e!=="transform"&&(e=Ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ki[e]&&e!=="transform"?(s=oo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Cl(Ri(t,In))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Rl[e]&&Rl[e](t,e,n)||Ri(t,e)||Pp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(t,e,s,n)+n:s},Gy=function(t,e,n,i){if(!n||n==="none"){var s=ua(e,t,1),a=s&&Ri(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Ri(t,"borderTopColor"))}var o=new Ln(this._pt,t.style,e,0,1,sm),l=0,c=0,u,h,d,f,g,_,m,p,E,T,v,C;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Ri(t,e)||i,_?t.style[e]=_:rs(t,e)),u=[n,i],jp(u),n=u[0],i=u[1],d=n.match(zs)||[],C=i.match(zs)||[],C.length){for(;h=zs.exec(i);)m=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=qs(f,m)+v),p=parseFloat(m),T=m.substr((p+"").length),l=zs.lastIndex-T.length,T||(T=T||Yn.units[e]||v,l===i.length&&(i+=T,o.e+=T)),v!==T&&(f=Tr(t,e,_,T)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?cm:lm;return Tp.test(i)&&(o.e=0),this._pt=o,o},dd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=dd[n]||n,e[1]=dd[i]||i,e.join(" ")},Xy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ki[o]&&(l=1,o=o==="transformOrigin"?In:Le),rs(n,o);l&&(rs(n,Le),a&&(a.svg&&n.removeAttribute("transform"),oo(n,1),a.uncache=1,um(i)))}},Rl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Ln(t._pt,e,n,0,0,Xy);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ao=[1,0,0,1,0,0],mm={},_m=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pd=function(t){var e=Ri(t,Le);return _m(e)?ao:e.substr(7).match(Ep).map(Oe)},Uh=function(t,e){var n=t._gsap||qr(t),i=t.style,s=pd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ao:s):(s===ao&&!t.offsetParent&&t!==$s&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,$s.appendChild(t)),s=pd(t),l?i.display=l:rs(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):$s.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yu=function(t,e,n,i,s,a){var o=t._gsap,l=s||Uh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],E=l[5],T=e.split(" "),v=parseFloat(T[0])||0,C=parseFloat(T[1])||0,w,b,R,M;n?l!==ao&&(b=f*m-g*_)&&(R=v*(m/b)+C*(-_/b)+(_*E-m*p)/b,M=v*(-g/b)+C*(f/b)-(f*E-g*p)/b,v=R,C=M):(w=dm(t),v=w.x+(~T[0].indexOf("%")?v/100*w.width:v),C=w.y+(~(T[1]||T[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&o.smooth?(p=v-c,E=C-u,o.xOffset=h+(p*f+E*_)-p,o.yOffset=d+(p*g+E*m)-E):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=C,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[In]="0px 0px",a&&(hr(a,o,"xOrigin",c,v),hr(a,o,"yOrigin",u,C),hr(a,o,"xOffset",h,o.xOffset),hr(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+C)},oo=function(t,e){var n=t._gsap||new Qp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Ri(t,In)||"0",u,h,d,f,g,_,m,p,E,T,v,C,w,b,R,M,x,D,O,B,Y,$,W,X,V,et,P,ut,Lt,Kt,j,tt;return u=h=d=_=m=p=E=T=v=0,f=g=1,n.svg=!!(t.getCTM&&pm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),b=Uh(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Yu(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,b)),C=n.xOrigin||0,w=n.yOrigin||0,b!==ao&&(D=b[0],O=b[1],B=b[2],Y=b[3],u=$=b[4],h=W=b[5],b.length===6?(f=Math.sqrt(D*D+O*O),g=Math.sqrt(Y*Y+B*B),_=D||O?Ps(O,D)*Br:0,E=B||Y?Ps(B,Y)*Br+_:0,E&&(g*=Math.abs(Math.cos(E*js))),n.svg&&(u-=C-(C*D+w*B),h-=w-(C*O+w*Y))):(tt=b[6],Kt=b[7],P=b[8],ut=b[9],Lt=b[10],j=b[11],u=b[12],h=b[13],d=b[14],R=Ps(tt,Lt),m=R*Br,R&&(M=Math.cos(-R),x=Math.sin(-R),X=$*M+P*x,V=W*M+ut*x,et=tt*M+Lt*x,P=$*-x+P*M,ut=W*-x+ut*M,Lt=tt*-x+Lt*M,j=Kt*-x+j*M,$=X,W=V,tt=et),R=Ps(-B,Lt),p=R*Br,R&&(M=Math.cos(-R),x=Math.sin(-R),X=D*M-P*x,V=O*M-ut*x,et=B*M-Lt*x,j=Y*x+j*M,D=X,O=V,B=et),R=Ps(O,D),_=R*Br,R&&(M=Math.cos(R),x=Math.sin(R),X=D*M+O*x,V=$*M+W*x,O=O*M-D*x,W=W*M-$*x,D=X,$=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Oe(Math.sqrt(D*D+O*O+B*B)),g=Oe(Math.sqrt(W*W+tt*tt)),R=Ps($,W),E=Math.abs(R)>2e-4?R*Br:0,v=j?1/(j<0?-j:j):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!_m(Ri(t,Le)),X&&t.setAttribute("transform",X))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(f*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Oe(f),n.scaleY=Oe(g),n.rotation=Oe(_)+o,n.rotationX=Oe(m)+o,n.rotationY=Oe(p)+o,n.skewX=E+o,n.skewY=T+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[In]=Cl(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?qy:fm?gm:Yy,n.uncache=0,n},Cl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ic=function(t,e,n){var i=hn(e);return Oe(parseFloat(e)+parseFloat(Tr(t,"x",n+"px",i)))+i},Yy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,gm(t,e)},Nr="0deg",ba="0px",Or=") ",gm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,T=n.zOrigin,v="",C=p==="auto"&&t&&t!==1||p===!0;if(T&&(h!==Nr||u!==Nr)){var w=parseFloat(u)*js,b=Math.sin(w),R=Math.cos(w),M;w=parseFloat(h)*js,M=Math.cos(w),a=Ic(E,a,b*M*-T),o=Ic(E,o,-Math.sin(w)*-T),l=Ic(E,l,R*M*-T+T)}m!==ba&&(v+="perspective("+m+Or),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(C||a!==ba||o!==ba||l!==ba)&&(v+=l!==ba||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Or),c!==Nr&&(v+="rotate("+c+Or),u!==Nr&&(v+="rotateY("+u+Or),h!==Nr&&(v+="rotateX("+h+Or),(d!==Nr||f!==Nr)&&(v+="skew("+d+", "+f+Or),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Or),E.style[Le]=v||"translate(0, 0)"},qy=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,T=parseFloat(a),v=parseFloat(o),C,w,b,R,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=js,c*=js,C=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=js,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,w*=M)),C=Oe(C),w=Oe(w),b=Oe(b),R=Oe(R)):(C=h,R=d,w=b=0),(T&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(T=Tr(f,"x",a,"px"),v=Tr(f,"y",o,"px")),(g||_||m||p)&&(T=Oe(T+g-(g*C+_*b)+m),v=Oe(v+_-(g*w+_*R)+p)),(i||s)&&(M=f.getBBox(),T=Oe(T+i/100*M.width),v=Oe(v+s/100*M.height)),M="matrix("+C+","+w+","+b+","+R+","+T+","+v+")",f.setAttribute("transform",M),E&&(f.style[Le]=M)},$y=function(t,e,n,i,s){var a=360,o=tn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Br:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*cd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*cd)%a-~~(c/a)*a)),t._pt=d=new Ln(t._pt,e,n,i,c,Dy),d.e=u,d.u="deg",t._props.push(n),d},md=function(t,e){for(var n in e)t[n]=e[n];return t},jy=function(t,e,n){var i=md({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Le]=e,o=oo(n,1),rs(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],a[Le]=e,o=oo(n,1),a[Le]=c);for(l in Ki)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=hn(c),g=hn(u),h=f!==g?Tr(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new Ln(t._pt,o,l,h,d-h,Gu),t._pt.u=g||0,t._props.push(l));md(o,i)};Dn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Rl[t>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return Vi(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var vm={name:"css",register:Xu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,E,T,v,C,w,b,R;Dh||Xu(),this.styles=this.styles||hm(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Hn[_]&&tm(_,e,n,i,t,s)))){if(f=typeof u,g=Rl[_],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=io(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",gr.lastIndex=0,gr.test(c)||(m=hn(c),p=hn(u)),p?m!==p&&(c=Tr(t,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],tn(c)&&~c.indexOf("random(")&&(c=io(c)),hn(c+"")||c==="auto"||(c+=Yn.units[_]||hn(Vi(t,_))||""),(c+"").charAt(1)==="="&&(c=Vi(t,_))):c=Vi(t,_),d=parseFloat(c),E=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in Ai&&(_==="autoAlpha"&&(d===1&&Vi(t,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,o.visibility),hr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Ki,T){if(this.styles.save(_),v||(C=t._gsap,C.renderTransform&&!e.parseTransform||oo(t,e.parseTransform),w=e.smoothOrigin!==!1&&C.smooth,v=this._pt=new Ln(this._pt,o,Le,0,1,C.renderTransform,C,0,-1),v.dep=1),_==="scale")this._pt=new Ln(this._pt,C,"scaleY",C.scaleY,(E?qs(C.scaleY,E+h):h)-C.scaleY||0,Gu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(In,0,o[In]),u=Wy(u),C.svg?Yu(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&hr(this,C,"zOrigin",C.zOrigin,p),hr(this,o,_,Cl(c),Cl(u)));continue}else if(_==="svgOrigin"){Yu(t,u,1,w,0,this);continue}else if(_ in mm){$y(this,C,_,d,E?qs(d,E+u):u);continue}else if(_==="smoothOrigin"){hr(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){jy(this,u,t);continue}}else _ in o||(_=ua(_)||_);if(T||(h||h===0)&&(d||d===0)&&!Py.test(u)&&_ in o)m=(c+"").substr((d+"").length),h||(h=0),p=hn(u)||(_ in Yn.units?Yn.units[_]:m),m!==p&&(d=Tr(t,_,c,p)),this._pt=new Ln(this._pt,T?C:o,_,d,(E?qs(d,E+h):h)-d,!T&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Iy:Gu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ly);else if(_ in o)Gy.call(this,t,_,c,E?E+u:u);else if(_ in t)this.add(t,_,c||t[_],E?E+u:u,i,s);else if(_!=="parseTransform"){yh(_,u);continue}T||(_ in o?R.push(_,0,o[_]):R.push(_,1,c||t[_])),a.push(_)}}b&&am(this)},render:function(t,e){if(e.tween._time||!Lh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vi,aliases:Ai,getSetter:function(t,e,n){var i=Ai[e];return i&&i.indexOf(",")<0&&(e=i),e in Ki&&e!==In&&(t._gsap.x||Vi(t,"x"))?n&&ld===n?e==="scale"?Fy:Oy:(ld=n||{})&&(e==="scale"?By:zy):t.style&&!xh(t.style[e])?Uy:~e.indexOf("-")?Ny:Ch(t,e)},core:{_removeProperty:rs,_getMatrix:Uh}};Un.utils.checkPrefix=ua;Un.core.getStyleSaver=hm;(function(r,t,e,n){var i=Dn(r+","+t+","+e,function(s){Ki[s]=1});Dn(t,function(s){Yn.units[s]="deg",mm[s]=1}),Ai[i[13]]=r+","+t,Dn(n,function(s){var a=s.split(":");Ai[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});Un.registerPlugin(vm);var nn=Un.registerPlugin(vm)||Un;nn.core.Tween;function Zy(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ky(r,t,e){return t&&Zy(r.prototype,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn,fl,Wn,fr,dr,Zs,xm,zr,Ga,Mm,Yi,pi,Sm,ym=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},Em=1,Hs=[],ee=[],Ci=[],Wa=Date.now,qu=function(t,e){return e},Jy=function(){var t=Ga.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,Ci),ee=n,Ci=i,qu=function(a,o){return e[a](o)}},vr=function(t,e){return~Ci.indexOf(t)&&Ci[Ci.indexOf(t)+1][e]},Xa=function(t){return!!~Mm.indexOf(t)},gn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Xo="scrollLeft",Yo="scrollTop",$u=function(){return Yi&&Yi.isPressed||ee.cache++},Pl=function(t,e){var n=function i(s){if(s||s===0){Em&&(Wn.history.scrollRestoration="manual");var a=Yi&&Yi.isPressed;s=i.v=Math.round(s)||(Yi&&Yi.iOS?1:0),t(s),i.cacheID=ee.cache,a&&qu("ss",s)}else(e||ee.cache!==i.cacheID||qu("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},En={s:Xo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pl(function(r){return arguments.length?Wn.scrollTo(r,Ye.sc()):Wn.pageXOffset||fr[Xo]||dr[Xo]||Zs[Xo]||0})},Ye={s:Yo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:Pl(function(r){return arguments.length?Wn.scrollTo(En.sc(),r):Wn.pageYOffset||fr[Yo]||dr[Yo]||Zs[Yo]||0})},wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||rn.utils.toArray)(t)[0]||(typeof t=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},br=function(t,e){var n=e.s,i=e.sc;Xa(t)&&(t=fr.scrollingElement||dr);var s=ee.indexOf(t),a=i===Ye.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+a]||gn(t,"scroll",$u);var o=ee[s+a],l=o||(ee[s+a]=Pl(vr(t,n),!0)||(Xa(t)?i:Pl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=rn.getProperty(t,"scrollBehavior")==="smooth"),l},ju=function(t,e,n){var i=t,s=t,a=Wa(),o=a,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=Wa();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},d=function(g){var _=o,m=s,p=Wa();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:d}},Aa=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_d=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Tm=function(){Ga=rn.core.globals().ScrollTrigger,Ga&&Ga.core&&Jy()},bm=function(t){return rn=t||ym(),!fl&&rn&&typeof document<"u"&&document.body&&(Wn=window,fr=document,dr=fr.documentElement,Zs=fr.body,Mm=[Wn,fr,dr,Zs],rn.utils.clamp,Sm=rn.core.context||function(){},zr="onpointerenter"in Zs?"pointer":"mouse",xm=Fe.isTouch=Wn.matchMedia&&Wn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Wn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,pi=Fe.eventTypes=("ontouchstart"in dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Em=0},500),Tm(),fl=1),fl};En.op=Ye;ee.cache=0;var Fe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){fl||bm(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Ga||Tm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,E=n.onDrag,T=n.onPress,v=n.onRelease,C=n.onRight,w=n.onLeft,b=n.onUp,R=n.onDown,M=n.onChangeX,x=n.onChangeY,D=n.onChange,O=n.onToggleX,B=n.onToggleY,Y=n.onHover,$=n.onHoverEnd,W=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,et=n.onGestureStart,P=n.onGestureEnd,ut=n.onWheel,Lt=n.onEnable,Kt=n.onDisable,j=n.onClick,tt=n.scrollSpeed,gt=n.capture,nt=n.allowClicks,Et=n.lockAxis,At=n.onLockAxis;this.target=o=wn(o)||dr,this.vars=n,f&&(f=rn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,tt=tt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Wn.getComputedStyle(Zs).lineHeight)||22);var zt,Jt,kt,Pt,I,ge,Nt,z=this,Tt=0,ie=0,wt=n.passive||!u,A=br(o,En),S=br(o,Ye),G=A(),Q=S(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&pi[0]==="pointerdown",Z=Xa(o),ht=o.ownerDocument||fr,ot=[0,0,0],pt=[0,0,0],Gt=0,it=function(){return Gt=Wa()},at=function(bt,qt){return(z.event=bt)&&f&&~f.indexOf(bt.target)||qt&&J&&bt.pointerType!=="touch"||X&&X(bt,qt)},It=function(){z._vx.reset(),z._vy.reset(),Jt.pause(),h&&h(z)},Dt=function(){var bt=z.deltaX=_d(ot),qt=z.deltaY=_d(pt),mt=Math.abs(bt)>=i,Ht=Math.abs(qt)>=i;D&&(mt||Ht)&&D(z,bt,qt,ot,pt),mt&&(C&&z.deltaX>0&&C(z),w&&z.deltaX<0&&w(z),M&&M(z),O&&z.deltaX<0!=Tt<0&&O(z),Tt=z.deltaX,ot[0]=ot[1]=ot[2]=0),Ht&&(R&&z.deltaY>0&&R(z),b&&z.deltaY<0&&b(z),x&&x(z),B&&z.deltaY<0!=ie<0&&B(z),ie=z.deltaY,pt[0]=pt[1]=pt[2]=0),(Pt||kt)&&(W&&W(z),kt&&(E(z),kt=!1),Pt=!1),ge&&!(ge=!1)&&At&&At(z),I&&(ut(z),I=!1),zt=0},xt=function(bt,qt,mt){ot[mt]+=bt,pt[mt]+=qt,z._vx.update(bt),z._vy.update(qt),c?zt||(zt=requestAnimationFrame(Dt)):Dt()},Yt=function(bt,qt){Et&&!Nt&&(z.axis=Nt=Math.abs(bt)>Math.abs(qt)?"x":"y",ge=!0),Nt!=="y"&&(ot[2]+=bt,z._vx.update(bt,!0)),Nt!=="x"&&(pt[2]+=qt,z._vy.update(qt,!0)),c?zt||(zt=requestAnimationFrame(Dt)):Dt()},Ut=function(bt){if(!at(bt,1)){bt=Aa(bt,u);var qt=bt.clientX,mt=bt.clientY,Ht=qt-z.x,Rt=mt-z.y,Bt=z.isDragging;z.x=qt,z.y=mt,(Bt||Math.abs(z.startX-qt)>=s||Math.abs(z.startY-mt)>=s)&&(E&&(kt=!0),Bt||(z.isDragging=!0),Yt(Ht,Rt),Bt||m&&m(z))}},ae=z.onPress=function(vt){at(vt,1)||vt&&vt.button||(z.axis=Nt=null,Jt.pause(),z.isPressed=!0,vt=Aa(vt),Tt=ie=0,z.startX=z.x=vt.clientX,z.startY=z.y=vt.clientY,z._vx.reset(),z._vy.reset(),gn(V?o:ht,pi[1],Ut,wt,!0),z.deltaX=z.deltaY=0,T&&T(z))},L=z.onRelease=function(vt){if(!at(vt,1)){mn(V?o:ht,pi[1],Ut,!0);var bt=!isNaN(z.y-z.startY),qt=z.isDragging,mt=qt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ht=Aa(vt);!mt&&bt&&(z._vx.reset(),z._vy.reset(),u&&nt&&rn.delayedCall(.08,function(){if(Wa()-Gt>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(ht.createEvent){var Rt=ht.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,Wn,1,Ht.screenX,Ht.screenY,Ht.clientX,Ht.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(Rt)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&qt&&!V&&Jt.restart(!0),p&&qt&&p(z),v&&v(z,mt)}},ct=function(bt){return bt.touches&&bt.touches.length>1&&(z.isGesturing=!0)&&et(bt,z.isDragging)},q=function(){return(z.isGesturing=!1)||P(z)},K=function(bt){if(!at(bt)){var qt=A(),mt=S();xt((qt-G)*tt,(mt-Q)*tt,1),G=qt,Q=mt,h&&Jt.restart(!0)}},lt=function(bt){if(!at(bt)){bt=Aa(bt,u),ut&&(I=!0);var qt=(bt.deltaMode===1?l:bt.deltaMode===2?Wn.innerHeight:1)*g;xt(bt.deltaX*qt,bt.deltaY*qt,0),h&&!V&&Jt.restart(!0)}},ft=function(bt){if(!at(bt)){var qt=bt.clientX,mt=bt.clientY,Ht=qt-z.x,Rt=mt-z.y;z.x=qt,z.y=mt,Pt=!0,h&&Jt.restart(!0),(Ht||Rt)&&Yt(Ht,Rt)}},Ot=function(bt){z.event=bt,Y(z)},le=function(bt){z.event=bt,$(z)},Ie=function(bt){return at(bt)||Aa(bt,u)&&j(z)};Jt=z._dc=rn.delayedCall(d||.25,It).pause(),z.deltaX=z.deltaY=0,z._vx=ju(0,50,!0),z._vy=ju(0,50,!0),z.scrollX=A,z.scrollY=S,z.isDragging=z.isGesturing=z.isPressed=!1,Sm(this),z.enable=function(vt){return z.isEnabled||(gn(Z?ht:o,"scroll",$u),a.indexOf("scroll")>=0&&gn(Z?ht:o,"scroll",K,wt,gt),a.indexOf("wheel")>=0&&gn(o,"wheel",lt,wt,gt),(a.indexOf("touch")>=0&&xm||a.indexOf("pointer")>=0)&&(gn(o,pi[0],ae,wt,gt),gn(ht,pi[2],L),gn(ht,pi[3],L),nt&&gn(o,"click",it,!0,!0),j&&gn(o,"click",Ie),et&&gn(ht,"gesturestart",ct),P&&gn(ht,"gestureend",q),Y&&gn(o,zr+"enter",Ot),$&&gn(o,zr+"leave",le),W&&gn(o,zr+"move",ft)),z.isEnabled=!0,vt&&vt.type&&ae(vt),Lt&&Lt(z)),z},z.disable=function(){z.isEnabled&&(Hs.filter(function(vt){return vt!==z&&Xa(vt.target)}).length||mn(Z?ht:o,"scroll",$u),z.isPressed&&(z._vx.reset(),z._vy.reset(),mn(V?o:ht,pi[1],Ut,!0)),mn(Z?ht:o,"scroll",K,gt),mn(o,"wheel",lt,gt),mn(o,pi[0],ae,gt),mn(ht,pi[2],L),mn(ht,pi[3],L),mn(o,"click",it,!0),mn(o,"click",Ie),mn(ht,"gesturestart",ct),mn(ht,"gestureend",q),mn(o,zr+"enter",Ot),mn(o,zr+"leave",le),mn(o,zr+"move",ft),z.isEnabled=z.isPressed=z.isDragging=!1,Kt&&Kt(z))},z.kill=z.revert=function(){z.disable();var vt=Hs.indexOf(z);vt>=0&&Hs.splice(vt,1),Yi===z&&(Yi=0)},Hs.push(z),V&&Xa(o)&&(Yi=z),z.enable(_)},Ky(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fe.version="3.12.5";Fe.create=function(r){return new Fe(r)};Fe.register=bm;Fe.getAll=function(){return Hs.slice()};Fe.getById=function(r){return Hs.filter(function(t){return t.vars.id===r})[0]};ym()&&rn.registerPlugin(Fe);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var St,Us,re,Pe,mi,Ae,Am,Dl,lo,Ya,Ia,qo,ln,Xl,Zu,Mn,gd,vd,Ns,wm,Uc,Rm,xn,Ku,Cm,Pm,ar,Ju,Nh,Ks,Oh,Ll,Qu,Nc,$o=1,cn=Date.now,Oc=cn(),ai=0,Ua=0,xd=function(t,e,n){var i=kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Md=function(t,e){return e&&(!kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Qy=function r(){return Ua&&requestAnimationFrame(r)},Sd=function(){return Xl=1},yd=function(){return Xl=0},Si=function(t){return t},Na=function(t){return Math.round(t*1e5)/1e5||0},Dm=function(){return typeof window<"u"},Lm=function(){return St||Dm()&&(St=window.gsap)&&St.registerPlugin&&St},ss=function(t){return!!~Am.indexOf(t)},Im=function(t){return(t==="Height"?Oh:re["inner"+t])||mi["client"+t]||Ae["client"+t]},Um=function(t){return vr(t,"getBoundingClientRect")||(ss(t)?function(){return gl.width=re.innerWidth,gl.height=Oh,gl}:function(){return Gi(t)})},tE=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=vr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Im(s):t["client"+s])||0}},eE=function(t,e){return!e||~Ci.indexOf(t)?Um(t):function(){return gl}},wi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=vr(t,n))?a()-Um(t)()[s]:ss(t)?(mi[n]||Ae[n])-Im(i):t[n]-t["offset"+i])},jo=function(t,e){for(var n=0;n<Ns.length;n+=3)(!e||~e.indexOf(Ns[n+1]))&&t(Ns[n],Ns[n+1],Ns[n+2])},kn=function(t){return typeof t=="string"},Tn=function(t){return typeof t=="function"},Oa=function(t){return typeof t=="number"},kr=function(t){return typeof t=="object"},wa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Fc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ds=Math.abs,Nm="left",Om="top",Fh="right",Bh="bottom",Kr="width",Jr="height",qa="Right",$a="Left",ja="Top",Za="Bottom",ke="padding",Jn="margin",ha="Width",zh="Height",Xe="px",Qn=function(t){return re.getComputedStyle(t)},nE=function(t){var e=Qn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ed=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Gi=function(t,e){var n=e&&Qn(t)[Zu]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Il=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Fm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},iE=function(t){return function(e){return St.utils.snap(Fm(t),e)}},kh=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},rE=function(t){return function(e,n){return kh(Fm(t))(e,n.direction)}},Zo=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ke=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ze=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ko=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Td={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Jo={toggleActions:"play",anticipatePin:0},Ul={top:0,left:0,center:.5,bottom:1,right:1},dl=function(t,e){if(kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ul?Ul[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Qo=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=Pe.createElement("div"),_=ss(n)||vr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?Ae:n,E=t.indexOf("start")!==-1,T=E?c:u,v="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Ye?Fh:Bh)+":"+(a+parseFloat(d))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],pl(g,0,i,E),g},pl=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ha]=1,s["border"+o+ha]=0,s[n.p]=e+"px",St.set(t,s)},te=[],th={},co,bd=function(){return cn()-ai>34&&(co||(co=requestAnimationFrame($i)))},Ls=function(){(!xn||!xn.isPressed||xn.startX>Ae.clientWidth)&&(ee.cache++,xn?co||(co=requestAnimationFrame($i)):$i(),ai||os("scrollStart"),ai=cn())},Bc=function(){Pm=re.innerWidth,Cm=re.innerHeight},Fa=function(){ee.cache++,!ln&&!Rm&&!Pe.fullscreenElement&&!Pe.webkitFullscreenElement&&(!Ku||Pm!==re.innerWidth||Math.abs(re.innerHeight-Cm)>re.innerHeight*.25)&&Dl.restart(!0)},as={},sE=[],Bm=function r(){return Ze(ne,"scrollEnd",r)||Yr(!0)},os=function(t){return as[t]&&as[t].map(function(e){return e()})||sE},zn=[],zm=function(t){for(var e=0;e<zn.length;e+=5)(!t||zn[e+4]&&zn[e+4].query===t)&&(zn[e].style.cssText=zn[e+1],zn[e].getBBox&&zn[e].setAttribute("transform",zn[e+2]||""),zn[e+3].uncache=1)},Hh=function(t,e){var n;for(Mn=0;Mn<te.length;Mn++)n=te[Mn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ll=!0,e&&zm(e),e||os("revert")},km=function(t,e){ee.cache++,(e||!Sn)&&ee.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),kn(t)&&(re.history.scrollRestoration=Nh=t)},Sn,Qr=0,Ad,aE=function(){if(Ad!==Qr){var t=Ad=Qr;requestAnimationFrame(function(){return t===Qr&&Yr(!0)})}},Hm=function(){Ae.appendChild(Ks),Oh=!xn&&Ks.offsetHeight||re.innerHeight,Ae.removeChild(Ks)},wd=function(t){return lo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Yr=function(t,e){if(ai&&!t&&!Ll){Ke(ne,"scrollEnd",Bm);return}Hm(),Sn=ne.isRefreshing=!0,ee.forEach(function(i){return Tn(i)&&++i.cacheID&&(i.rec=i())});var n=os("refreshInit");wm&&ne.sort(),e||Hh(),ee.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),Ll=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Qu=1,wd(!0),te.forEach(function(i){var s=wi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),wd(!1),Qu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),km(Nh,1),Dl.pause(),Qr++,Sn=2,$i(2),te.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Sn=ne.isRefreshing=!1,os("refresh")},eh=0,ml=1,Ka,$i=function(t){if(t===2||!Sn&&!Ll){ne.isUpdating=!0,Ka&&Ka.update(0);var e=te.length,n=cn(),i=n-Oc>=50,s=e&&te[0].scroll();if(ml=eh>s?-1:1,Sn||(eh=s),i&&(ai&&!Xl&&n-ai>200&&(ai=0,os("scrollEnd")),Ia=Oc,Oc=n),ml<0){for(Mn=e;Mn-- >0;)te[Mn]&&te[Mn].update(0,i);ml=1}else for(Mn=0;Mn<e;Mn++)te[Mn]&&te[Mn].update(0,i);ne.isUpdating=!1}co=0},nh=[Nm,Om,Bh,Fh,Jn+Za,Jn+qa,Jn+ja,Jn+$a,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_l=nh.concat([Kr,Jr,"boxSizing","max"+ha,"max"+zh,"position",Jn,ke,ke+ja,ke+qa,ke+Za,ke+$a]),oE=function(t,e,n){Js(n);var i=t._gsap;if(i.spacerIsNative)Js(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},zc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=nh.length,a=e.style,o=t.style,l;s--;)l=nh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Bh]=o[Fh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Kr]=Il(t,En)+Xe,a[Jr]=Il(t,Ye)+Xe,a[ke]=o[Jn]=o[Om]=o[Nm]="0",Js(i),o[Kr]=o["max"+ha]=n[Kr],o[Jr]=o["max"+zh]=n[Jr],o[ke]=n[ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},lE=/([A-Z])/g,Js=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(lE,"-$1").toLowerCase())}},tl=function(t){for(var e=_l.length,n=t.style,i=[],s=0;s<e;s++)i.push(_l[s],n[_l[s]]);return i.t=t,i},cE=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},gl={left:0,top:0},Rd=function(t,e,n,i,s,a,o,l,c,u,h,d,f,g){Tn(t)&&(t=t(l)),kn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?dl("0"+t.substr(3),n):0));var _=f?f.time():0,m,p,E;if(f&&f.seek(0),isNaN(t)||(t=+t),Oa(t))f&&(t=St.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),o&&pl(o,n,i,!0);else{Tn(e)&&(e=e(l));var T=(t||"0").split(" "),v,C,w,b;E=wn(e,l)||Ae,v=Gi(E)||{},(!v||!v.left&&!v.top)&&Qn(E).display==="none"&&(b=E.style.display,E.style.display="block",v=Gi(E),b?E.style.display=b:E.style.removeProperty("display")),C=dl(T[0],v[i.d]),w=dl(T[1]||"0",n),t=v[i.p]-c[i.p]-u+C+s-w,o&&pl(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var R=t+n,M=a._isStart;m="scroll"+i.d2,pl(a,R,i,M&&R>20||!M&&(h?Math.max(Ae[m],mi[m]):a.parentNode[m])<=R+1),h&&(c=Gi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Xe))}return f&&E&&(m=Gi(E),f.seek(d),p=Gi(E),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(_),f?t:Math.round(t)},uE=/(webkit|moz|length|cssText|inset)/i,Cd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===Ae){t._stOrig=s.cssText,o=Qn(t);for(a in o)!+a&&!uE.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},Vm=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},el=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},Pd=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,g={};c=c||n();var _=Vm(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ee.cache++,a.tween&&$i()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=St.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ke(t,"wheel",n.wheelHandler),ne.isTouch&&Ke(t,"touchmove",n.wheelHandler),s},ne=function(){function r(e,n){Us||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ju(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ua){this.update=this.refresh=this.kill=Si;return}n=Ed(kn(n)||Oa(n)||n.nodeType?{trigger:n}:n,Jo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,T=s.once,v=s.snap,C=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Ye,D=!h&&h!==0,O=wn(n.scroller||re),B=St.core.getCache(O),Y=ss(O),$=("pinType"in n?n.pinType:vr(O,"pinType")||Y&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=D&&n.toggleActions.split(" "),V="markers"in n?n.markers:Jo.markers,et=Y?0:parseFloat(Qn(O)["border"+x.p2+ha])||0,P=this,ut=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Lt=tE(O,Y,x),Kt=eE(O,Y),j=0,tt=0,gt=0,nt=br(O,x),Et,At,zt,Jt,kt,Pt,I,ge,Nt,z,Tt,ie,wt,A,S,G,Q,J,Z,ht,ot,pt,Gt,it,at,It,Dt,xt,Yt,Ut,ae,L,ct,q,K,lt,ft,Ot,le;if(P._startClamp=P._endClamp=!1,P._dir=x,m*=45,P.scroller=O,P.scroll=b?b.time.bind(b):nt,Jt=nt(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(wm=1,n.refreshPriority===-9999&&(Ka=P)),B.tweenScroll=B.tweenScroll||{top:Pd(O,Ye),left:Pd(O,En)},P.tweenTo=Et=B.tweenScroll[x.p],P.scrubDuration=function(mt){ct=Oa(mt)&&mt,ct?L?L.duration(mt):L=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ct,paused:!0,onComplete:function(){return p&&p(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),Ut=0,l||(l=i.vars.id)),v&&((!kr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Ae.style&&St.set(Y?[Ae,mi]:O,{scrollBehavior:"auto"}),ee.forEach(function(mt){return Tn(mt)&&mt.target===(Y?Pe.scrollingElement||mi:O)&&(mt.smooth=!1)}),zt=Tn(v.snapTo)?v.snapTo:v.snapTo==="labels"?iE(i):v.snapTo==="labelsDirectional"?rE(i):v.directional!==!1?function(mt,Ht){return kh(v.snapTo)(mt,cn()-tt<500?0:Ht.direction)}:St.utils.snap(v.snapTo),q=v.duration||{min:.1,max:2},q=kr(q)?Ya(q.min,q.max):Ya(q,q),K=St.delayedCall(v.delay||ct/2||.1,function(){var mt=nt(),Ht=cn()-tt<500,Rt=Et.tween;if((Ht||Math.abs(P.getVelocity())<10)&&!Rt&&!Xl&&j!==mt){var Bt=(mt-Pt)/A,Ne=i&&!D?i.totalProgress():Bt,Qt=Ht?0:(Ne-ae)/(cn()-Ia)*1e3||0,ye=St.utils.clamp(-Bt,1-Bt,Ds(Qt/2)*Qt/.185),Ge=Bt+(v.inertia===!1?0:ye),ve,xe,ue=v,Nn=ue.onStart,Te=ue.onInterrupt,pn=ue.onComplete;if(ve=zt(Ge,P),Oa(ve)||(ve=Ge),xe=Math.round(Pt+ve*A),mt<=I&&mt>=Pt&&xe!==mt){if(Rt&&!Rt._initted&&Rt.data<=Ds(xe-mt))return;v.inertia===!1&&(ye=ve-Bt),Et(xe,{duration:q(Ds(Math.max(Ds(Ge-Ne),Ds(ve-Ne))*.185/Qt/.05||0)),ease:v.ease||"power3",data:Ds(xe-mt),onInterrupt:function(){return K.restart(!0)&&Te&&Te(P)},onComplete:function(){P.update(),j=nt(),i&&(L?L.resetTo("totalProgress",ve,i._tTime/i._tDur):i.progress(ve)),Ut=ae=i&&!D?i.totalProgress():P.progress,E&&E(P),pn&&pn(P)}},mt,ye*A,xe-mt-ye*A),Nn&&Nn(P,Et.tween)}}else P.isActive&&j!==mt&&K.restart(!0)}).pause()),l&&(th[l]=P),d=P.trigger=wn(d||f!==!0&&f),le=d&&d._gsap&&d._gsap.stRevert,le&&(le=le(P)),f=f===!0?d:wn(f),kn(o)&&(o={targets:d,className:o}),f&&(g===!1||g===Jn||(g=!g&&f.parentNode&&f.parentNode.style&&Qn(f.parentNode).display==="flex"?!1:ke),P.pin=f,At=St.core.getCache(f),At.spacer?S=At.pinState:(w&&(w=wn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),At.spacerIsNative=!!w,w&&(At.spacerState=tl(w))),At.spacer=J=w||Pe.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),At.pinState=S=tl(f)),n.force3D!==!1&&St.set(f,{force3D:!0}),P.spacer=J=At.spacer,Yt=Qn(f),it=Yt[g+x.os2],ht=St.getProperty(f),ot=St.quickSetter(f,x.a,Xe),zc(f,J,Yt),Q=tl(f)),V){ie=kr(V)?Ed(V,Td):Td,z=Qo("scroller-start",l,O,x,ie,0),Tt=Qo("scroller-end",l,O,x,ie,0,z),Z=z["offset"+x.op.d2];var Ie=wn(vr(O,"content")||O);ge=this.markerStart=Qo("start",l,Ie,x,ie,Z,0,b),Nt=this.markerEnd=Qo("end",l,Ie,x,ie,Z,0,b),b&&(Ot=St.quickSetter([ge,Nt],x.a,Xe)),!$&&!(Ci.length&&vr(O,"fixedMarkers")===!0)&&(nE(Y?Ae:O),St.set([z,Tt],{force3D:!0}),It=St.quickSetter(z,x.a,Xe),xt=St.quickSetter(Tt,x.a,Xe))}if(b){var vt=b.vars.onUpdate,bt=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){P.update(0,0,1),vt&&vt.apply(b,bt||[])})}if(P.previous=function(){return te[te.indexOf(P)-1]},P.next=function(){return te[te.indexOf(P)+1]},P.revert=function(mt,Ht){if(!Ht)return P.kill(!0);var Rt=mt!==!1||!P.enabled,Bt=ln;Rt!==P.isReverted&&(Rt&&(lt=Math.max(nt(),P.scroll.rec||0),gt=P.progress,ft=i&&i.progress()),ge&&[ge,Nt,z,Tt].forEach(function(Ne){return Ne.style.display=Rt?"none":"block"}),Rt&&(ln=P,P.update(Rt)),f&&(!C||!P.isActive)&&(Rt?oE(f,J,S):zc(f,J,Qn(f),at)),Rt||P.update(Rt),ln=Bt,P.isReverted=Rt)},P.refresh=function(mt,Ht,Rt,Bt){if(!((ln||!P.enabled)&&!Ht)){if(f&&mt&&ai){Ke(r,"scrollEnd",Bm);return}!Sn&&ut&&ut(P),ln=P,Et.tween&&!Rt&&(Et.tween.kill(),Et.tween=0),L&&L.pause(),_&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ne=Lt(),Qt=Kt(),ye=b?b.duration():wi(O,x),Ge=A<=.01,ve=0,xe=Bt||0,ue=kr(Rt)?Rt.end:n.end,Nn=n.endTrigger||d,Te=kr(Rt)?Rt.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),pn=P.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,P),y=d&&Math.max(0,te.indexOf(P))||0,U=y,k,H,F,rt,st,dt,Mt,Ft,Vt,yt,Wt,ce,he;for(V&&kr(Rt)&&(ce=St.getProperty(z,x.p),he=St.getProperty(Tt,x.p));U--;)dt=te[U],dt.end||dt.refresh(0,1)||(ln=P),Mt=dt.pin,Mt&&(Mt===d||Mt===f||Mt===pn)&&!dt.isReverted&&(yt||(yt=[]),yt.unshift(dt),dt.revert(!0,!0)),dt!==te[U]&&(y--,U--);for(Tn(Te)&&(Te=Te(P)),Te=xd(Te,"start",P),Pt=Rd(Te,d,Ne,x,nt(),ge,z,P,Qt,et,$,ye,b,P._startClamp&&"_startClamp")||(f?-.001:0),Tn(ue)&&(ue=ue(P)),kn(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(kn(Te)?Te.split(" ")[0]:"")+ue:(ve=dl(ue.substr(2),Ne),ue=kn(Te)?Te:(b?St.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Pt):Pt)+ve,Nn=d)),ue=xd(ue,"end",P),I=Math.max(Pt,Rd(ue||(Nn?"100% 0":ye),Nn,Ne,x,nt()+ve,Nt,Tt,P,Qt,et,$,ye,b,P._endClamp&&"_endClamp"))||-.001,ve=0,U=y;U--;)dt=te[U],Mt=dt.pin,Mt&&dt.start-dt._pinPush<=Pt&&!b&&dt.end>0&&(k=dt.end-(P._startClamp?Math.max(0,dt.start):dt.start),(Mt===d&&dt.start-dt._pinPush<Pt||Mt===pn)&&isNaN(Te)&&(ve+=k*(1-dt.progress)),Mt===f&&(xe+=k));if(Pt+=ve,I+=ve,P._startClamp&&(P._startClamp+=ve),P._endClamp&&!Sn&&(P._endClamp=I||-.001,I=Math.min(I,wi(O,x))),A=I-Pt||(Pt-=.01)&&.001,Ge&&(gt=St.utils.clamp(0,1,St.utils.normalize(Pt,I,lt))),P._pinPush=xe,ge&&ve&&(k={},k[x.a]="+="+ve,pn&&(k[x.p]="-="+nt()),St.set([ge,Nt],k)),f&&!(Qu&&P.end>=wi(O,x)))k=Qn(f),rt=x===Ye,F=nt(),pt=parseFloat(ht(x.a))+xe,!ye&&I>1&&(Wt=(Y?Pe.scrollingElement||mi:O).style,Wt={style:Wt,value:Wt["overflow"+x.a.toUpperCase()]},Y&&Qn(Ae)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+x.a.toUpperCase()]="scroll")),zc(f,J,k),Q=tl(f),H=Gi(f,!0),Ft=$&&br(O,rt?En:Ye)(),g?(at=[g+x.os2,A+xe+Xe],at.t=J,U=g===ke?Il(f,x)+A+xe:0,U&&(at.push(x.d,U+Xe),J.style.flexBasis!=="auto"&&(J.style.flexBasis=U+Xe)),Js(at),pn&&te.forEach(function(Be){Be.pin===pn&&Be.vars.pinSpacing!==!1&&(Be._subPinOffset=!0)}),$&&nt(lt)):(U=Il(f,x),U&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=U+Xe)),$&&(st={top:H.top+(rt?F-Pt:Ft)+Xe,left:H.left+(rt?Ft:F-Pt)+Xe,boxSizing:"border-box",position:"fixed"},st[Kr]=st["max"+ha]=Math.ceil(H.width)+Xe,st[Jr]=st["max"+zh]=Math.ceil(H.height)+Xe,st[Jn]=st[Jn+ja]=st[Jn+qa]=st[Jn+Za]=st[Jn+$a]="0",st[ke]=k[ke],st[ke+ja]=k[ke+ja],st[ke+qa]=k[ke+qa],st[ke+Za]=k[ke+Za],st[ke+$a]=k[ke+$a],G=cE(S,st,C),Sn&&nt(0)),i?(Vt=i._initted,Uc(1),i.render(i.duration(),!0,!0),Gt=ht(x.a)-pt+A+xe,Dt=Math.abs(A-Gt)>1,$&&Dt&&G.splice(G.length-2,2),i.render(0,!0,!0),Vt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Uc(0)):Gt=A,Wt&&(Wt.value?Wt.style["overflow"+x.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+x.a));else if(d&&nt()&&!b)for(H=d.parentNode;H&&H!==Ae;)H._pinOffset&&(Pt-=H._pinOffset,I-=H._pinOffset),H=H.parentNode;yt&&yt.forEach(function(Be){return Be.revert(!1,!0)}),P.start=Pt,P.end=I,Jt=kt=Sn?lt:nt(),!b&&!Sn&&(Jt<lt&&nt(lt),P.scroll.rec=0),P.revert(!1,!0),tt=cn(),K&&(j=-1,K.restart(!0)),ln=0,i&&D&&(i._initted||ft)&&i.progress()!==ft&&i.progress(ft||0,!0).render(i.time(),!0,!0),(Ge||gt!==P.progress||b||_)&&(i&&!D&&i.totalProgress(b&&Pt<-.001&&!gt?St.utils.normalize(Pt,I,0):gt,!0),P.progress=Ge||(Jt-Pt)/A===gt?0:gt),f&&g&&(J._pinOffset=Math.round(P.progress*Gt)),L&&L.invalidate(),isNaN(ce)||(ce-=St.getProperty(z,x.p),he-=St.getProperty(Tt,x.p),el(z,x,ce),el(ge,x,ce-(Bt||0)),el(Tt,x,he),el(Nt,x,he-(Bt||0))),Ge&&!Sn&&P.update(),u&&!Sn&&!wt&&(wt=!0,u(P),wt=!1)}},P.getVelocity=function(){return(nt()-kt)/(cn()-Ia)*1e3||0},P.endAnimation=function(){wa(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?D||wa(i,P.direction<0,1):wa(i,i.reversed()))},P.labelToScroll=function(mt){return i&&i.labels&&(Pt||P.refresh()||Pt)+i.labels[mt]/i.duration()*A||0},P.getTrailing=function(mt){var Ht=te.indexOf(P),Rt=P.direction>0?te.slice(0,Ht).reverse():te.slice(Ht+1);return(kn(mt)?Rt.filter(function(Bt){return Bt.vars.preventOverlaps===mt}):Rt).filter(function(Bt){return P.direction>0?Bt.end<=Pt:Bt.start>=I})},P.update=function(mt,Ht,Rt){if(!(b&&!Rt&&!mt)){var Bt=Sn===!0?lt:P.scroll(),Ne=mt?0:(Bt-Pt)/A,Qt=Ne<0?0:Ne>1?1:Ne||0,ye=P.progress,Ge,ve,xe,ue,Nn,Te,pn,y;if(Ht&&(kt=Jt,Jt=b?nt():Bt,v&&(ae=Ut,Ut=i&&!D?i.totalProgress():Qt)),m&&f&&!ln&&!$o&&ai&&(!Qt&&Pt<Bt+(Bt-kt)/(cn()-Ia)*m?Qt=1e-4:Qt===1&&I>Bt+(Bt-kt)/(cn()-Ia)*m&&(Qt=.9999)),Qt!==ye&&P.enabled){if(Ge=P.isActive=!!Qt&&Qt<1,ve=!!ye&&ye<1,Te=Ge!==ve,Nn=Te||!!Qt!=!!ye,P.direction=Qt>ye?1:-1,P.progress=Qt,Nn&&!ln&&(xe=Qt&&!ye?0:Qt===1?1:ye===1?2:3,D&&(ue=!Te&&X[xe+1]!=="none"&&X[xe+1]||X[xe],y=i&&(ue==="complete"||ue==="reset"||ue in i))),M&&(Te||y)&&(y||h||!i)&&(Tn(M)?M(P):P.getTrailing(M).forEach(function(F){return F.endAnimation()})),D||(L&&!ln&&!$o?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Qt,i._tTime/i._tDur):(L.vars.totalProgress=Qt,L.invalidate().restart())):i&&i.totalProgress(Qt,!!(ln&&(tt||mt)))),f){if(mt&&g&&(J.style[g+x.os2]=it),!$)ot(Na(pt+Gt*Qt));else if(Nn){if(pn=!mt&&Qt>ye&&I+1>Bt&&Bt+1>=wi(O,x),C)if(!mt&&(Ge||pn)){var U=Gi(f,!0),k=Bt-Pt;Cd(f,Ae,U.top+(x===Ye?k:0)+Xe,U.left+(x===Ye?0:k)+Xe)}else Cd(f,J);Js(Ge||pn?G:Q),Dt&&Qt<1&&Ge||ot(pt+(Qt===1&&!pn?Gt:0))}}v&&!Et.tween&&!ln&&!$o&&K.restart(!0),o&&(Te||T&&Qt&&(Qt<1||!Nc))&&lo(o.targets).forEach(function(F){return F.classList[Ge||T?"add":"remove"](o.className)}),a&&!D&&!mt&&a(P),Nn&&!ln?(D&&(y&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),a&&a(P)),(Te||!Nc)&&(c&&Te&&Fc(P,c),W[xe]&&Fc(P,W[xe]),T&&(Qt===1?P.kill(!1,1):W[xe]=0),Te||(xe=Qt===1?1:3,W[xe]&&Fc(P,W[xe]))),R&&!Ge&&Math.abs(P.getVelocity())>(Oa(R)?R:2500)&&(wa(P.callbackAnimation),L?L.progress(1):wa(i,ue==="reverse"?1:!Qt,1))):D&&a&&!ln&&a(P)}if(xt){var H=b?Bt/b.duration()*(b._caScrollDist||0):Bt;It(H+(z._isFlipped?1:0)),xt(H)}Ot&&Ot(-Bt/b.duration()*(b._caScrollDist||0))}},P.enable=function(mt,Ht){P.enabled||(P.enabled=!0,Ke(O,"resize",Fa),Y||Ke(O,"scroll",Ls),ut&&Ke(r,"refreshInit",ut),mt!==!1&&(P.progress=gt=0,Jt=kt=j=nt()),Ht!==!1&&P.refresh())},P.getTween=function(mt){return mt&&Et?Et.tween:L},P.setPositions=function(mt,Ht,Rt,Bt){if(b){var Ne=b.scrollTrigger,Qt=b.duration(),ye=Ne.end-Ne.start;mt=Ne.start+ye*mt/Qt,Ht=Ne.start+ye*Ht/Qt}P.refresh(!1,!1,{start:Md(mt,Rt&&!!P._startClamp),end:Md(Ht,Rt&&!!P._endClamp)},Bt),P.update()},P.adjustPinSpacing=function(mt){if(at&&mt){var Ht=at.indexOf(x.d)+1;at[Ht]=parseFloat(at[Ht])+mt+Xe,at[1]=parseFloat(at[1])+mt+Xe,Js(at)}},P.disable=function(mt,Ht){if(P.enabled&&(mt!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ht||L&&L.pause(),lt=0,At&&(At.uncache=1),ut&&Ze(r,"refreshInit",ut),K&&(K.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!Y)){for(var Rt=te.length;Rt--;)if(te[Rt].scroller===O&&te[Rt]!==P)return;Ze(O,"resize",Fa),Y||Ze(O,"scroll",Ls)}},P.kill=function(mt,Ht){P.disable(mt,Ht),L&&!Ht&&L.kill(),l&&delete th[l];var Rt=te.indexOf(P);Rt>=0&&te.splice(Rt,1),Rt===Mn&&ml>0&&Mn--,Rt=0,te.forEach(function(Bt){return Bt.scroller===P.scroller&&(Rt=1)}),Rt||Sn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Ht||i.kill()),ge&&[ge,Nt,z,Tt].forEach(function(Bt){return Bt.parentNode&&Bt.parentNode.removeChild(Bt)}),Ka===P&&(Ka=0),f&&(At&&(At.uncache=1),Rt=0,te.forEach(function(Bt){return Bt.pin===f&&Rt++}),Rt||(At.spacer=0)),n.onKill&&n.onKill(P)},te.push(P),P.enable(!1,!1),le&&le(P),i&&i.add&&!A){var qt=P.update;P.update=function(){P.update=qt,Pt||I||P.refresh()},St.delayedCall(.01,P.update),A=.01,Pt=I=0}else P.refresh();f&&aE()},r.register=function(n){return Us||(St=n||Lm(),Dm()&&window.document&&r.enable(),Us=Ua),Us},r.defaults=function(n){if(n)for(var i in n)Jo[i]=n[i];return Jo},r.disable=function(n,i){Ua=0,te.forEach(function(a){return a[i?"kill":"disable"](n)}),Ze(re,"wheel",Ls),Ze(Pe,"scroll",Ls),clearInterval(qo),Ze(Pe,"touchcancel",Si),Ze(Ae,"touchstart",Si),Zo(Ze,Pe,"pointerdown,touchstart,mousedown",Sd),Zo(Ze,Pe,"pointerup,touchend,mouseup",yd),Dl.kill(),jo(Ze);for(var s=0;s<ee.length;s+=3)Ko(Ze,ee[s],ee[s+1]),Ko(Ze,ee[s],ee[s+2])},r.enable=function(){if(re=window,Pe=document,mi=Pe.documentElement,Ae=Pe.body,St&&(lo=St.utils.toArray,Ya=St.utils.clamp,Ju=St.core.context||Si,Uc=St.core.suppressOverwrites||Si,Nh=re.history.scrollRestoration||"auto",eh=re.pageYOffset,St.core.globals("ScrollTrigger",r),Ae)){Ua=1,Ks=document.createElement("div"),Ks.style.height="100vh",Ks.style.position="absolute",Hm(),Qy(),Fe.register(St),r.isTouch=Fe.isTouch,ar=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ku=Fe.isTouch===1,Ke(re,"wheel",Ls),Am=[re,Pe,mi,Ae],St.matchMedia?(r.matchMedia=function(l){var c=St.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},St.addEventListener("matchMediaInit",function(){return Hh()}),St.addEventListener("matchMediaRevert",function(){return zm()}),St.addEventListener("matchMedia",function(){Yr(0,1),os("matchMedia")}),St.matchMedia("(orientation: portrait)",function(){return Bc(),Bc})):console.warn("Requires GSAP 3.11.0 or later"),Bc(),Ke(Pe,"scroll",Ls);var n=Ae.style,i=n.borderTopStyle,s=St.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Gi(Ae),Ye.m=Math.round(a.top+Ye.sc())||0,En.m=Math.round(a.left+En.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),qo=setInterval(bd,250),St.delayedCall(.5,function(){return $o=0}),Ke(Pe,"touchcancel",Si),Ke(Ae,"touchstart",Si),Zo(Ke,Pe,"pointerdown,touchstart,mousedown",Sd),Zo(Ke,Pe,"pointerup,touchend,mouseup",yd),Zu=St.utils.checkPrefix("transform"),_l.push(Zu),Us=cn(),Dl=St.delayedCall(.2,Yr).pause(),Ns=[Pe,"visibilitychange",function(){var l=re.innerWidth,c=re.innerHeight;Pe.hidden?(gd=l,vd=c):(gd!==l||vd!==c)&&Fa()},Pe,"DOMContentLoaded",Yr,re,"load",Yr,re,"resize",Fa],jo(Ke),te.forEach(function(l){return l.enable(0,1)}),o=0;o<ee.length;o+=3)Ko(Ze,ee[o],ee[o+1]),Ko(Ze,ee[o],ee[o+2])}},r.config=function(n){"limitCallbacks"in n&&(Nc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(qo)||(qo=i)&&setInterval(bd,i),"ignoreMobileResize"in n&&(Ku=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(jo(Ze)||jo(Ke,n.autoRefreshEvents||"none"),Rm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),a=ee.indexOf(s),o=ss(s);~a&&ee.splice(a,o?6:2),i&&(o?Ci.unshift(re,i,Ae,i,mi,i):Ci.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(kn(n)?wn(n):n).getBoundingClientRect(),o=a[s?Kr:Jr]*i||0;return s?a.right-o>0&&a.left+o<re.innerWidth:a.bottom-o>0&&a.top+o<re.innerHeight},r.positionInViewport=function(n,i,s){kn(n)&&(n=wn(n));var a=n.getBoundingClientRect(),o=a[s?Kr:Jr],l=i==null?o/2:i in Ul?Ul[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/re.innerWidth:(a.top+l)/re.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r}();ne.version="3.12.5";ne.saveStyles=function(r){return r?lo(r).forEach(function(t){if(t&&t.style){var e=zn.indexOf(t);e>=0&&zn.splice(e,5),zn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Ju())}}):zn};ne.revert=function(r,t){return Hh(!r,t)};ne.create=function(r,t){return new ne(r,t)};ne.refresh=function(r){return r?Fa():(Us||ne.register())&&Yr(!0)};ne.update=function(r){return++ee.cache&&$i(r===!0?2:0)};ne.clearScrollMemory=km;ne.maxScroll=function(r,t){return wi(r,t?En:Ye)};ne.getScrollFunc=function(r,t){return br(wn(r),t?En:Ye)};ne.getById=function(r){return th[r]};ne.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ne.isScrolling=function(){return!!ai};ne.snapDirectional=kh;ne.addEventListener=function(r,t){var e=as[r]||(as[r]=[]);~e.indexOf(t)||e.push(t)};ne.removeEventListener=function(r,t){var e=as[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ne.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var h=[],d=[],f=St.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Tn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Tn(s)&&(s=s(),Ke(ne,"refresh",function(){return s=t.batchMax()})),lo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(ne.create(c))}),e};var Dd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},kc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===mi&&r(Ae,e)},nl={auto:1,scroll:1},hE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||St.core.getCache(s),o=cn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Ae&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nl[(l=Qn(s)).overflowY]||nl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ss(s)&&(nl[(l=Qn(s)).overflowY]||nl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Gm=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&hE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ke(Pe,Fe.eventTypes[0],Id,!1,!0)},onDisable:function(){return Ze(Pe,Fe.eventTypes[0],Id,!0)}})},fE=/(input|label|select|textarea)/i,Ld,Id=function(t){var e=fE.test(t.target.tagName);(e||Ld)&&(t._gsapAllow=!0,Ld=e)},dE=function(t){kr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=wn(t.target)||mi,u=St.core.globals().ScrollSmoother,h=u&&u.get(),d=ar&&(t.content&&wn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),f=br(c,Ye),g=br(c,En),_=1,m=(Fe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,p=0,E=Tn(i)?function(){return i(o)}:function(){return i||2.8},T,v,C=Gm(c,t.type,!0,s),w=function(){return v=!1},b=Si,R=Si,M=function(){l=wi(c,Ye),R=Ya(ar?1:0,l),n&&(b=Ya(0,wi(c,En))),T=Qr},x=function(){d._gsap.y=Na(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(w);var V=Na(o.deltaY/2),et=R(f.v-V);if(d&&et!==f.v+f.offset){f.offset=et-f.v;var P=Na((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",f.cacheID=ee.cache,$i()}return!0}f.offset&&x(),v=!0},O,B,Y,$,W=function(){M(),O.isActive()&&O.vars.scrollY>l&&(f()>l?O.progress(1)&&f(l):O.resetTo("scrollY",l))};return d&&St.set(d,{y:"+=0"}),t.ignoreCheck=function(X){return ar&&X.type==="touchmove"&&D()||_>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){v=!1;var X=_;_=Na((re.visualViewport&&re.visualViewport.scale||1)/m),O.pause(),X!==_&&kc(c,_>1.01?!0:n?!1:"x"),B=g(),Y=f(),M(),T=Qr},t.onRelease=t.onGestureStart=function(X,V){if(f.offset&&x(),!V)$.restart(!0);else{ee.cache++;var et=E(),P,ut;n&&(P=g(),ut=P+et*.05*-X.velocityX/.227,et*=Dd(g,P,ut,wi(c,En)),O.vars.scrollX=b(ut)),P=f(),ut=P+et*.05*-X.velocityY/.227,et*=Dd(f,P,ut,wi(c,Ye)),O.vars.scrollY=R(ut),O.invalidate().duration(et).play(.01),(ar&&O.vars.scrollY>=l||P>=l-1)&&St.to({},{onUpdate:W,duration:et})}a&&a(X)},t.onWheel=function(){O._ts&&O.pause(),cn()-p>1e3&&(T=0,p=cn())},t.onChange=function(X,V,et,P,ut){if(Qr!==T&&M(),V&&n&&g(b(P[2]===V?B+(X.startX-X.x):g()+V-P[1])),et){f.offset&&x();var Lt=ut[2]===et,Kt=Lt?Y+X.startY-X.y:f()+et-ut[1],j=R(Kt);Lt&&Kt!==j&&(Y+=j-Kt),f(j)}(et||V)&&$i()},t.onEnable=function(){kc(c,n?!1:"x"),ne.addEventListener("refresh",W),Ke(re,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),C.enable()},t.onDisable=function(){kc(c,!0),Ze(re,"resize",W),ne.removeEventListener("refresh",W),C.kill()},t.lockAxis=t.lockAxis!==!1,o=new Fe(t),o.iOS=ar,ar&&!f()&&f(1),ar&&St.ticker.add(Si),$=o._dc,O=St.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vm(f,f(),function(){return O.pause()})},onUpdate:$i,onComplete:$.vars.onComplete}),o};ne.sort=function(r){return te.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};ne.observe=function(r){return new Fe(r)};ne.normalizeScroll=function(r){if(typeof r>"u")return xn;if(r===!0&&xn)return xn.enable();if(r===!1){xn&&xn.kill(),xn=r;return}var t=r instanceof Fe?r:dE(r);return xn&&xn.target===t.target&&xn.kill(),ss(t.target)&&(xn=t),t};ne.core={_getVelocityProp:ju,_inputObserver:Gm,_scrollers:ee,_proxies:Ci,bridge:{ss:function(){ai||os("scrollStart"),ai=cn()},ref:function(){return ln}}};Lm()&&St.registerPlugin(ne);nn.registerPlugin(ne);const Ar={muros:{arq:"#ebe5d9",tec:"#f2f2ef",disc:"Arquitectura",cerr:!0,nombre:"Muros"},ventanas:{arq:"#7f98a6",tec:"#e8edf0",disc:"Arquitectura",cerr:!0,vidrio:!0,nombre:"Ventanas"},paneles:{arq:"#d8d2c6",tec:"#eeeeea",disc:"Arquitectura",cerr:!0,nombre:"Paneles"},puertas:{arq:"#8a5a3b",tec:"#ecebe6",disc:"Arquitectura",nombre:"Puertas"},montantes:{arq:"#3a3d41",tec:"#c9ccd0",disc:"Arquitectura",metal:.6,rough:.4,nombre:"Montantes"},barandas:{arq:"#3a3d41",tec:"#c9ccd0",disc:"Arquitectura",metal:.6,rough:.4,nombre:"Barandas"},escaleras:{arq:"#b4afa5",tec:"#e4e4e0",disc:"Arquitectura",nombre:"Escaleras"},cubiertas:{arq:"#a5563b",tec:"#e9e7e2",disc:"Arquitectura",cerr:!0,nombre:"Cubiertas"},losas:{arq:"#bcb7ae",tec:"#dfe4ea",disc:"Estructura",nombre:"Losas"},columnas:{arq:"#c8c3b9",tec:"#cfd8e2",disc:"Estructura",nombre:"Columnas"},vigas:{arq:"#c8c3b9",tec:"#cfd8e2",disc:"Estructura",nombre:"Vigas"}},pE=["Eléctrica","Hidrosanitaria (AF / ACS / SAN)","Red contra incendios"],mE=[["00","Base existente","Proveedor externo · LOD 300"],["A","Estructurar","BEP y contratación · 1 mes"],["B","Coordinar","Diseños LOD 400 · 2 meses"],["C","Construir","Seguimiento BIM · 8 meses"],["D","Entregar","As-built y gemelo · 1 mes"]],fa=document.getElementById("gl"),Li=new cS({canvas:fa,antialias:!0});Li.setPixelRatio(Math.min(2,devicePixelRatio));Li.setSize(innerWidth,innerHeight);Li.shadowMap.enabled=!0;Li.shadowMap.type=Bd;Li.toneMapping=kd;Li.toneMappingExposure=1.05;Li.localClippingEnabled=!0;const Rr=new _p,_E=new jt("#fbfbfa");Rr.background=_E.clone();const gE=new Ru(Li);Rr.environment=gE.fromScene(new NS,.04).texture;Rr.add(new dS("#fbf7ef","#9a958c",.9));const ds=new gS("#fff3df",2.4);ds.position.set(60,90,40);ds.castShadow=!0;ds.shadow.mapSize.set(2048,2048);Object.assign(ds.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:10,far:260});ds.shadow.bias=-5e-4;Rr.add(ds);const mo=new Re(new fo(600,600),new fS({opacity:.16}));mo.rotation.x=-Math.PI/2;mo.position.y=-1.25;mo.receiveShadow=!0;Rr.add(mo);const _o=new xS(400,80,12568785,15001836);_o.material.transparent=!0;_o.material.opacity=0;_o.position.y=-1.24;Rr.add(_o);const en=new Vn(35,innerWidth/innerHeight,.5,4e3),oi=new yS(en,fa);oi.enableDamping=!0;oi.dampingFactor=.08;oi.maxPolarAngle=Math.PI*.495;oi.minDistance=8;oi.maxDistance=1200;oi.enabled=!1;const Nl=new Hi(new N(0,-1,0),999),vE=new jt("#b79e66"),Se={az:40,el:16,dist:118,tx:0,ty:9,tz:0,orto:0,explode:0,bim:0,cerr:0,bordes:0,tinta:0,corteY:999,verHasta:9,sel:-1,dimOtros:0,grilla:0},sn=[],Wm=[],ti=new Set(Object.keys(Ar));let li="cine";const Ve=r=>document.querySelector(r),vl=(r,t,e)=>{const n=Rn.clamp((e-r)/(t-r),0,1);return n*n*(3-2*n)};async function xE(){const r=await(await fetch("data/manifest.json")).json();let t=0;return await Promise.all(r.niveles.map(async e=>{const n=await(await fetch("data/"+e.archivo)).arrayBuffer(),i=new Pa;i.name=e.nombre;const s=new Map,a=new mh({color:"#4d5966",transparent:!0,opacity:0,depthWrite:!1,clippingPlanes:[Nl]}),o=new us;for(const l of e.cats){const c=Ar[l.nombre];if(!c)continue;const u=new vi;u.setAttribute("position",new ri(new Float32Array(n,l.vOff,l.vLen),3)),u.setIndex(new ri(new Uint32Array(n,l.tOff,l.tLen),1)),u.computeBoundingBox(),o.union(u.boundingBox);const h=new Pu({color:c.arq,roughness:c.rough??(c.vidrio?.08:.88),metalness:c.metal??(c.vidrio?.2:0),flatShading:!0,side:Ei,transparent:!!c.vidrio,opacity:c.vidrio?.5:1,clippingPlanes:[Nl]});h.userData={def:c};const d=new Re(u,h);d.castShadow=!c.vidrio,d.receiveShadow=!0,d.userData={nivel:sn.length,cat:l.nombre,tris:l.tLen/3},d.name=l.nombre,i.add(d);const f=new gp(new hS(u,28),a);f.userData={cat:l.nombre},f.raycast=()=>{},i.add(f),s.set(l.nombre,h)}sn[e.i]={info:e,grupo:i,mats:s,lineas:a,caja:o,destino:0,vis:1,hl:0},Rr.add(i),t++,Ve("#cargando i").style.width=100*t/r.niveles.length+"%"})),sn.forEach((e,n)=>e.grupo.children.forEach(i=>{i.isMesh&&(i.userData.nivel=n,Wm.push(i))})),sn.forEach((e,n)=>{e.destino=n*9+(e.info.nombre==="CUBIERTA"?8:0)}),r}const ME=new jt;function SE(r){const t=r.explode,e=sn.length-1;sn.forEach((n,i)=>{const s=i===e?vl(.2,.45,t):i>=3?vl(.45,.7,t):vl(.7,1,t);n.grupo.position.y=n.destino*s;const a=Rn.clamp(r.verHasta-i+1,0,1),o=r.sel>=0&&r.sel!==i?1-.85*r.dimOtros:1;n.vis=a*o,n.grupo.visible=n.vis>.01,n.hl=Rn.lerp(n.hl,r.sel===i?1:0,.12);for(const[l,c]of n.mats){const u=c.userData.def;c.color.copy(ME.set(u.arq)).lerp(new jt(u.tec),r.bim);let h=u.vidrio?Rn.lerp(.5,.35,r.bim):1;u.cerr&&(h*=Rn.lerp(1,u.vidrio?.25:.14,r.cerr)),h*=n.vis,c.opacity=h,c.transparent=h<.999,c.depthWrite=h>.6,c.emissive.copy(vE).multiplyScalar(.35*n.hl),c.visible=ti.has(l)}n.lineas.opacity=r.bordes*n.vis,n.lineas.color.set("#8f9daa").lerp(new jt("#2f3a45"),r.tinta),n.grupo.children.forEach(l=>{l.isLineSegments&&(l.visible=r.bordes>.01&&ti.has(l.userData.cat))})}),Nl.constant=r.corteY,_o.material.opacity=.6*r.grilla,mo.material.opacity=.16*(1-r.orto)*(1-r.bim*.6),ds.intensity=Rn.lerp(2.4,1.2,r.bim)}const Os=new N;function yE(r){Os.set(r.tx,r.ty,r.tz);const t=Rn.degToRad(r.az),e=Rn.degToRad(r.el),n=Rn.lerp(35,2.2,r.orto),i=Math.tan(Rn.degToRad(17.5))/Math.tan(Rn.degToRad(n/2)),s=r.dist*i;en.position.set(Os.x+s*Math.cos(e)*Math.sin(t),Os.y+s*Math.sin(e),Os.z+s*Math.cos(e)*Math.cos(t)),en.fov=n,en.near=Math.max(.5,s*.02),en.far=s*6+400,en.updateProjectionMatrix(),en.lookAt(Os)}const Xm=[];function Ud(r,t,e,n){const i=document.createElement("div");return i.className="etq",i.textContent=r,n&&i.addEventListener("click",n),Ve("#etiquetas").appendChild(i),Xm.push({el:i,pos:t,vis:e,click:n}),i}const Ba=new N;function EE(){for(const r of Xm){const t=r.vis();if(t<.02){r.el.style.opacity="0",r.el.style.pointerEvents="none";continue}if(Ba.copy(r.pos()).project(en),Ba.z>1){r.el.style.opacity="0";continue}r.el.style.left=(Ba.x+1)/2*innerWidth+"px",r.el.style.top=(1-Ba.y)/2*innerHeight-18+"px",r.el.style.opacity=String(t),r.el.style.pointerEvents="auto"}}let or,Ja;const Hc=10;let xr=1;function TE(){var a;const r=sn.findIndex(o=>o.info.nombre==="PISO 2"),t=((a=sn[r])==null?void 0:a.info.elev)??3,e=t+1.6;or=nn.timeline({defaults:{ease:"none"},paused:!0});const n=(o,l,c)=>or.to(Se,{...o,duration:c},l);n({dist:84},0,2.5),n({az:-38},2.5,3.5),n({el:38,dist:112,ty:6},6,4),or.to(".titulo",{xPercent:-38,opacity:.25,duration:3.5},2.5),n({el:58,dist:150,az:-10,ty:4},10,4),n({az:52},14,6),n({grilla:1},10,3),n({az:45,el:30,dist:165,ty:22},20,3),n({explode:1,dist:190,ty:30},22,8),n({explode:0},30,3),n({verHasta:r,ty:t},31.5,3),n({corteY:e},32.5,2.5),n({az:28,el:42,dist:72},32,4),n({az:-18,el:36,dist:50},36,4),n({verHasta:9,corteY:999,ty:9},40,2),n({az:45,el:28,dist:130},40,3),n({bim:1,bordes:.55},43,3),n({cerr:1},46,2),n({az:70},46,4),n({verHasta:r,corteY:e,cerr:0,ty:t},50,2),n({az:0,el:89.5,dist:105,tx:0,tz:0},50,5),n({bordes:1,tinta:1,grilla:0},52,4),n({orto:1},53,5),n({orto:0,bim:0,bordes:0,tinta:0,verHasta:9,corteY:999},60,3),n({az:70,el:20,dist:120,ty:9},60,4),n({az:105},64,6),n({az:140,el:24,dist:135},70,10);const i=8;for(let o=1;o<=i;o++){const l=`.escena[data-e="${o}"]`,c=(o-1)*Hc;o===1?nn.set(l,{autoAlpha:1}):or.fromTo(l,{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:1},c+.3),o<i&&or.to(l,{autoAlpha:0,y:-40,duration:1},c+Hc-1.2)}or.set({},{},i*Hc);const s=["Emerge","Edificación","Explosión","Interior","BIM","Plano","Remodelación","Ruta BACO"];Ve("#marcas").innerHTML=s.map((o,l)=>`<li style="top:${l/i*100}%">${String(l+1).padStart(2,"0")} ${o}</li>`).join(""),Ja=ne.create({trigger:"#escenario",start:"top top",end:()=>"+="+innerHeight*14,pin:!0,anticipatePin:1,scrub:!0,invalidateOnRefresh:!0,animation:or,onUpdate:o=>{Ve("#progreso i").style.height=o.progress*100+"%",xr=Math.min(i,Math.floor(o.progress*i)+1)}})}let Ym=0;function Qs(r,t,e=1.4){nn.to(en.position,{x:r.x,y:r.y,z:r.z,duration:e,ease:"power2.inOut"}),nn.to(oi.target,{x:t.x,y:t.y,z:t.z,duration:e,ease:"power2.inOut"})}function uo(r){if(li==="libre"){r!==void 0&&Ol(r);return}li="libre",document.body.dataset.modo="libre",document.querySelectorAll(".modos button").forEach(t=>t.classList.toggle("on",t.dataset.modo==="libre")),Ym=scrollY,Ja.disable(!1),document.documentElement.style.overflow="hidden",oi.target.copy(Os),oi.enabled=!0,oi.update(),nn.to(Se,{orto:0,duration:.8}),Ve("#volver").hidden=!1,r!==void 0?Ol(r):nn.to(Se,{explode:0,cerr:0,bim:0,bordes:0,tinta:0,verHasta:9,corteY:999,sel:-1,dimOtros:0,duration:1}),ls()}function Vc(){li!=="cine"&&(li="cine",document.body.dataset.modo="cine",document.querySelectorAll(".modos button").forEach(r=>r.classList.toggle("on",r.dataset.modo==="cine")),oi.enabled=!1,Ve("#volver").hidden=!0,Ve("#ficha").classList.remove("on"),ti.clear(),Object.keys(Ar).forEach(r=>ti.add(r)),document.documentElement.style.overflow="",Se.sel=-1,Se.dimOtros=0,Ja.enable(),window.scrollTo(0,Ym),Ja.update(),or.progress(Ja.progress))}let Mr=-1;function Ol(r){Mr=r;const t=sn[r],e=t.info.elev,n=t.caja.getCenter(new N);nn.to(Se,{sel:r,dimOtros:1,explode:Se.explode>.5?1:0,duration:.6,overwrite:"auto"});const i=t.grupo.position.y+e;Qs(new N(n.x+46,i+34,n.z+52),new N(n.x,i,n.z)),nn.to(Se,{explode:0,verHasta:r,corteY:e+1.6,dimOtros:0,duration:1.2,delay:1.1,ease:"power2.inOut",overwrite:!1}),setTimeout(()=>Qs(new N(n.x+30,e+26,n.z+34),new N(n.x,e,n.z)),1100),ls()}function bE(){Mr=-1,nn.to(Se,{sel:-1,dimOtros:0,verHasta:9,corteY:999,duration:1}),Qs(new N(85,60,95),new N(0,9,0)),ls()}function AE(r){if(document.querySelectorAll(".vistas button").forEach(t=>t.classList.toggle("on",t.dataset.v===r||t.dataset.v==="explotar"&&Se.explode>.5&&r!=="explotar")),r!=="plano"&&Se.orto>.01&&(nn.to(Se,{orto:0,verHasta:9,corteY:999,duration:1.2}),Qs(new N(85,60,95),new N(0,9,0))),r==="arq"&&nn.to(Se,{bim:0,cerr:0,bordes:0,tinta:0,duration:1}),r==="bim"&&nn.to(Se,{bim:1,cerr:1,bordes:.55,tinta:0,duration:1}),r==="explotar"){const t=Se.explode<.5;nn.to(Se,{explode:t?1:0,verHasta:9,corteY:999,duration:2,ease:"power1.inOut"}),Qs(new N(95,t?85:60,105),new N(0,t?28:9,0),2)}if(r==="plano"){const t=Mr>=0?Mr:sn.findIndex(i=>i.info.nombre==="PISO 2"),e=sn[t].info.elev;Mr=t,nn.to(Se,{explode:0,bim:1,cerr:0,bordes:1,tinta:1,verHasta:t,corteY:e+1.6,sel:-1,dimOtros:0,orto:1,duration:1.6});const n=45/Math.tan(Rn.degToRad(2.5));Qs(new N(0,e+n,.01),new N(0,e,0),1.6),ls()}}function ls(){Ve("#listaNiveles").innerHTML=`<li data-n="-1" class="${Mr<0?"sel":""}">Edificio completo</li>`+sn.map((t,e)=>`<li data-n="${e}" class="${Mr===e?"sel":""}">${t.info.nombre}<small>+${t.info.elev.toFixed(2)} m</small></li>`).join("");const r=["Arquitectura","Estructura"];Ve("#listaDisc").innerHTML=r.map(t=>{const e=Object.entries(Ar).some(([n,i])=>i.disc===t&&ti.has(n));return`<li data-d="${t}" class="${e?"":"off"}">${t}<small>${e?"visible":"oculta"}</small></li>`}).join("")+pE.map(t=>`<li class="nd" title="Pendiente: exportar de 1001_Hotel_la_fotona_redes.rvt">${t}<small>sin exportar</small></li>`).join(""),Ve("#listaCats").innerHTML=Object.entries(Ar).filter(([t])=>sn.some(e=>e.mats.has(t))).map(([t,e])=>`<li data-c="${t}" class="${ti.has(t)?"":"off"}">${e.nombre}<small>${e.disc}</small></li>`).join("")}const Nd=new vS,Od=new Xt;function qm(r){return Od.set(r.clientX/innerWidth*2-1,-(r.clientY/innerHeight)*2+1),Nd.setFromCamera(Od,en),Nd.intersectObjects(Wm.filter(e=>e.material.visible&&sn[e.userData.nivel].vis>.3),!1).find(e=>e.point.y<=Nl.constant+.01)}let $m=0;fa.addEventListener("pointerdown",()=>{$m=performance.now()});fa.addEventListener("pointerup",r=>{if(performance.now()-$m>300)return;const t=qm(r);if(!t)return;const e=t.object.userData.nivel;if(li==="cine"){xr===2?uo():xr===3&&uo(e);return}const n=t.object.userData.cat,i=sn[e];Ve("#ficha").innerHTML=`<h4>${i.info.nombre} · ${Ar[n].nombre}</h4><dl>
    <dt>Disciplina</dt><dd>${Ar[n].disc}</dd>
    <dt>Nivel</dt><dd>${i.info.nombre} (+${i.info.elev.toFixed(2)} m)</dd>
    <dt>Punto</dt><dd>z = ${(t.point.y-i.grupo.position.y).toFixed(2)} m</dd>
    <dt>Geometría</dt><dd>${t.object.userData.tris.toLocaleString("es-CO")} triángulos en la categoría</dd>
    <dt>Fuente</dt><dd>HLF_P2-P6.rvt</dd></dl>`,Ve("#ficha").classList.add("on"),Mr!==e&&Ol(e)});fa.addEventListener("pointermove",r=>{const e=li==="libre"||xr===2||xr===3?qm(r):void 0;fa.style.cursor=e?"pointer":"",li==="cine"&&xr===3&&(Se.sel=e?e.object.userData.nivel:-1)});function wE(){document.querySelectorAll(".modos button").forEach(r=>r.addEventListener("click",()=>r.dataset.modo==="libre"?uo():Vc())),Ve("#volver").addEventListener("click",Vc),document.querySelectorAll(".vistas button").forEach(r=>r.addEventListener("click",()=>AE(r.dataset.v))),Ve("#listaNiveles").addEventListener("click",r=>{const t=r.target.closest("li");if(!t)return;const e=+t.dataset.n;e<0?bE():Ol(e)}),Ve("#listaDisc").addEventListener("click",r=>{const t=r.target.closest("li");if(!(t!=null&&t.dataset.d))return;const e=Object.entries(Ar).filter(([,i])=>i.disc===t.dataset.d).map(([i])=>i),n=e.some(i=>ti.has(i));e.forEach(i=>n?ti.delete(i):ti.add(i)),n||nn.fromTo(Se,{bordes:Math.max(Se.bordes,.8)},{bordes:Se.bim>.5?.55:0,duration:1.4}),ls()}),Ve("#listaCats").addEventListener("click",r=>{const t=r.target.closest("li");if(!(t!=null&&t.dataset.c))return;const e=t.dataset.c;ti.has(e)?ti.delete(e):ti.add(e),ls()}),addEventListener("keydown",r=>{r.key==="Escape"&&li==="libre"&&Vc()}),Ve("#etapas").innerHTML=mE.map(([r,t,e])=>`<div class="etapa"><b>${r}</b><strong>${t}</strong><span>${e}</span></div>`).join(""),Ve("#notaMep").textContent="Redes MEP (eléctrica, hidrosanitaria, RCI): están modeladas en 1001_Hotel_la_fotona_redes.rvt y se incorporarán al exportarlas. Aquí no se simulan.",Ve("#notaRemodel").textContent="La comparación con clipping necesita dos modelos: el de condiciones existentes (LOD 300, a cargo del proveedor de escaneo según la propuesta) y el de remodelación. Por ahora solo está cargado el modelo de remodelación HLF_P2-P6."}function RE(){en.aspect=innerWidth/innerHeight,en.updateProjectionMatrix(),Li.setSize(innerWidth,innerHeight)}addEventListener("resize",RE);function jm(){SE(Se),li==="cine"?yE(Se):(oi.update(),en.fov=Rn.lerp(35,5,Se.orto),en.near=.5+20*Se.orto,en.far=4e3,en.updateProjectionMatrix()),EE(),Li.render(Rr,en),requestAnimationFrame(jm)}(async()=>{await xE(),wE();const r=new us;sn.forEach(t=>r.union(t.caja)),Ud("HLF P2–P6 · modelo Revit",()=>new N(0,r.max.y+2,0),()=>li==="cine"&&xr===2?1:0,()=>uo()),sn.forEach((t,e)=>Ud(t.info.nombre,()=>new N(t.caja.max.x,t.info.elev+t.grupo.position.y+1.5,t.caja.getCenter(Ba).z),()=>(li==="cine"&&xr===3?vl(.6,.9,Se.explode):0)||(li==="libre"&&Se.explode>.6?t.vis:0),()=>uo(e))),TE(),ls(),Ve("#cargando").classList.add("fin"),jm()})();
