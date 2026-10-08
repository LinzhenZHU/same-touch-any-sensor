(()=>{var of=Object.defineProperty;var af=(i,e)=>{for(var t in e)of(i,t,{get:e[t],enumerable:!0})};var xc="170";var lf=0,ch=1,cf=2;var yu=1,hf=2,si=3,Ai=0,Vt=1,An=2,Gn=0,As=1,To=2,hh=3,uh=4,uf=5,Wi=100,df=101,ff=102,pf=103,mf=104,gf=200,xf=201,vf=202,yf=203,Ya=204,Za=205,Mf=206,Sf=207,bf=208,wf=209,Tf=210,Ef=211,_f=212,Af=213,Rf=214,Ka=0,ja=1,Ja=2,Is=3,Qa=4,$a=5,el=6,tl=7,Mu=0,Cf=1,Pf=2,_i=0,If=1,Lf=2,Uf=3,Df=4,Nf=5,Ff=6,Of=7;var Su=300,Ls=301,Us=302,nl=303,il=304,Zo=306,sl=1e3,Hn=1001,rl=1002,At=1003,Bf=1004;var Yr=1005;var St=1006,pa=1007;var Yi=1008;var Rn=1009,bu=1010,wu=1011,yr=1012,vc=1013,Zi=1014,Yt=1015,Ht=1016,yc=1017,Mc=1018,Ds=1020,Tu=35902,Eu=1021,_u=1022,Bt=1023,Au=1024,Ru=1025,Rs=1026,Ns=1027,Cu=1028,Sc=1029,Pu=1030,bc=1031;var wc=1033,yo=33776,Mo=33777,So=33778,bo=33779,ol=35840,al=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,vl=37813,yl=37814,Ml=37815,Sl=37816,bl=37817,wl=37818,Tl=37819,El=37820,_l=37821,wo=36492,Al=36494,Rl=36495,Iu=36283,Cl=36284,Pl=36285,Il=36286;var Eo=2300,Ll=2301,ma=2302,dh=2400,fh=2401,ph=2402;var zf=3200,kf=3201;var Lu=0,Vf=1,Ei="",un="srgb",Hs="srgb-linear",Ko="linear",lt="srgb";var hs=7680;var mh=519,Hf=512,Gf=513,Wf=514,Uu=515,Xf=516,qf=517,Yf=518,Zf=519,gh=35044;var xh="300 es",ri=2e3,_o=2001,Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=1234567,fr=Math.PI/180,Mr=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Tc(i,e){return(i%e+e)%e}function Kf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jf(i,e,t){return i!==e?(t-i)/(e-i):0}function pr(i,e,t){return(1-t)*i+t*e}function Jf(i,e,t,n){return pr(i,e,1-Math.exp(-t*n))}function Qf(i,e=1){return e-Math.abs(Tc(i,e*2)-e)}function $f(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function np(i,e){return i+Math.random()*(e-i)}function ip(i){return i*(.5-Math.random())}function sp(i){i!==void 0&&(vh=i);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rp(i){return i*fr}function op(i){return i*Mr}function ap(i){return(i&i-1)===0&&i!==0}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lr={DEG2RAD:fr,RAD2DEG:Mr,generateUUID:ts,clamp:Nt,euclideanModulo:Tc,mapLinear:Kf,inverseLerp:jf,lerp:pr,damp:Jf,pingpong:Qf,smoothstep:$f,smootherstep:ep,randInt:tp,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:Xt,denormalize:Ts},oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],x=s[0],p=s[3],f=s[6],T=s[1],S=s[4],M=s[7],U=s[2],A=s[5],_=s[8];return r[0]=o*x+a*T+l*U,r[3]=o*p+a*S+l*A,r[6]=o*f+a*M+l*_,r[1]=c*x+h*T+u*U,r[4]=c*p+h*S+u*A,r[7]=c*f+h*M+u*_,r[2]=d*x+m*T+g*U,r[5]=d*p+m*S+g*A,r[8]=d*f+m*M+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ga=new Ye;function Du(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function up(){let i=Ao("canvas");return i.style.display="block",i}var yh={};function ur(i){i in yh||(yh[i]=!0,console.warn(i))}function dp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function fp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?Ko:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mh=[.64,.33,.3,.6,.15,.06],Sh=[.2126,.7152,.0722],bh=[.3127,.329],wh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Hs]:{primaries:Mh,whitePoint:bh,transfer:Ko,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:Sh,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:Mh,whitePoint:bh,transfer:lt,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:Sh,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});var us,Ul=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Ao("canvas")),us.width=e.width,us.height=e.height;let n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mp=0,Ro=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gp=0,Zt=class i extends Ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=St,o=Yi,a=Bt,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ts(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sl:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sl:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Su;Zt.DEFAULT_ANISOTROPY=1;var it=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(m+1)/2,U=(f+1)/2,A=(h+d)/4,_=(u+x)/4,I=(g+p)/4;return S>M&&S>U?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=_/n):M>U?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=I/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=_/r,s=I/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ut=class extends Dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Co=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==m||h!==g){let p=1-a,f=l*d+c*m+h*g+u*x,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let U=Math.sqrt(S),A=Math.atan2(U,f*T);p=Math.sin(p*A)/U,a=Math.sin(a*A)/U}let M=a*T;if(l=l*p+d*M,c=c*p+m*M,h=h*p+g*M,u=u*p+x*M,p===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new P,Eh=new Ci,Ki=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Kr.subVectors(this.max,or),ds.subVectors(e.a,or),fs.subVectors(e.b,or),ps.subVectors(e.c,or),yi.subVectors(fs,ds),Mi.subVectors(ps,fs),Oi.subVectors(ds,ps);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Oi.z,Oi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Oi.z,0,-Oi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Oi.y,Oi.x,0];return!ya(t,ds,fs,ps,Kr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,ds,fs,ps,Kr))?!1:(jr.crossVectors(yi,Mi),t=[jr.x,jr.y,jr.z],ya(t,ds,fs,ps,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$n=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,Zr=new Ki,ds=new P,fs=new P,ps=new P,yi=new P,Mi=new P,Oi=new P,or=new P,Kr=new P,jr=new P,Bi=new P;function ya(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);let a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xp=new Ki,ar=new P,Ma=new P,Sr=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ma)),this.expandByPoint(ar.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new P,Sa=new P,Jr=new P,Si=new P,ba=new P,Qr=new P,wa=new P,Po=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sa.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Sa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=Si.dot(this.direction),l=-Si.dot(Jr),c=Si.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sa).addScaledVector(Jr,d),m}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,s,r){ba.subVectors(t,e),Qr.subVectors(n,e),wa.crossVectors(ba,Qr);let o=this.direction.dot(wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);let l=a*this.direction.dot(Qr.crossVectors(Si,Qr));if(l<0)return null;let c=a*this.direction.dot(ba.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(wa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,m,g,x,p)}set(e,t,n,s,r,o,a,l,c,h,u,d,m,g,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,yp)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),bi.crossVectors(n,on),bi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),bi.crossVectors(n,on)),bi.normalize(),$r.crossVectors(on,bi),s[0]=bi.x,s[4]=$r.x,s[8]=on.x,s[1]=bi.y,s[5]=$r.y,s[9]=on.y,s[2]=bi.z,s[6]=$r.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],f=n[14],T=n[3],S=n[7],M=n[11],U=n[15],A=s[0],_=s[4],I=s[8],b=s[12],v=s[1],C=s[5],V=s[9],O=s[13],H=s[2],K=s[6],G=s[10],ne=s[14],B=s[3],ue=s[7],re=s[11],ce=s[15];return r[0]=o*A+a*v+l*H+c*B,r[4]=o*_+a*C+l*K+c*ue,r[8]=o*I+a*V+l*G+c*re,r[12]=o*b+a*O+l*ne+c*ce,r[1]=h*A+u*v+d*H+m*B,r[5]=h*_+u*C+d*K+m*ue,r[9]=h*I+u*V+d*G+m*re,r[13]=h*b+u*O+d*ne+m*ce,r[2]=g*A+x*v+p*H+f*B,r[6]=g*_+x*C+p*K+f*ue,r[10]=g*I+x*V+p*G+f*re,r[14]=g*b+x*O+p*ne+f*ce,r[3]=T*A+S*v+M*H+U*B,r[7]=T*_+S*C+M*K+U*ue,r[11]=T*I+S*V+M*G+U*re,r[15]=T*b+S*O+M*ne+U*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*m-n*l*m)+x*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],T=u*p*c-x*d*c+x*l*m-a*p*m-u*l*f+a*d*f,S=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,M=h*x*c-g*u*c+g*a*m-o*x*m-h*a*f+o*u*f,U=g*u*l-h*x*l-g*a*d+o*x*d+h*a*p-o*u*p,A=t*T+n*S+s*M+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/A;return e[0]=T*_,e[1]=(x*d*r-u*p*r-x*s*m+n*p*m+u*s*f-n*d*f)*_,e[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*f+n*l*f)*_,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*m-n*l*m)*_,e[4]=S*_,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*_,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*_,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*m+t*l*m)*_,e[8]=M*_,e[9]=(g*u*r-h*x*r-g*n*m+t*x*m+h*n*f-t*u*f)*_,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*f+t*a*f)*_,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*_,e[12]=U*_,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*p+t*u*p)*_,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*p-t*a*p)*_,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*_,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,x=o*h,p=o*u,f=a*u,T=l*c,S=l*h,M=l*u,U=n.x,A=n.y,_=n.z;return s[0]=(1-(x+f))*U,s[1]=(m+M)*U,s[2]=(g-S)*U,s[3]=0,s[4]=(m-M)*A,s[5]=(1-(d+f))*A,s[6]=(p+T)*A,s[7]=0,s[8]=(g+S)*_,s[9]=(p-T)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);let c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ri){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,g;if(a===ri)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_o)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ri){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,m=(n+s)*h,g,x;if(a===ri)g=(o+r)*u,x=-2*u;else if(a===_o)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ms=new P,En=new vt,vp=new P(0,0,0),yp=new P(1,1,1),bi=new P,$r=new P,on=new P,_h=new vt,Ah=new Ci,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mp=0,Rh=new P,gs=new Ci,ti=new vt,eo=new P,lr=new P,Sp=new P,bp=new Ci,Ch=new P(1,0,0),Ph=new P(0,1,0),Ih=new P(0,0,1),Lh={type:"added"},wp={type:"removed"},xs={type:"childadded",child:null},Ta={type:"childremoved",child:null},$t=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Wn,n=new Ci,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ye}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(lr,eo,this.up):ti.lookAt(eo,lr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ti),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wp),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};$t.DEFAULT_UP=new P(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new P,ni=new P,Ea=new P,ii=new P,vs=new P,ys=new P,Uh=new P,_a=new P,Aa=new P,Ra=new P,Ca=new it,Pa=new it,Ia=new it,Xi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),ni.subVectors(n,t),Ea.subVectors(e,t);let o=_n.dot(_n),a=_n.dot(ni),l=_n.dot(Ea),c=ni.dot(ni),h=ni.dot(Ea),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ca.setScalar(0),Pa.setScalar(0),Ia.setScalar(0),Ca.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,n),Ia.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ca,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(Ia,r.z),o}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),ni.subVectors(e,t),_n.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),_n.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,n),ys.subVectors(r,n),_a.subVectors(e,n);let l=vs.dot(_a),c=ys.dot(_a);if(l<=0&&c<=0)return t.copy(n);Aa.subVectors(e,s);let h=vs.dot(Aa),u=ys.dot(Aa);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vs,o);Ra.subVectors(e,r);let m=vs.dot(Ra),g=ys.dot(Ra);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ys,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Uh.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Uh,a);let f=1/(p+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},to={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Tc(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=La(o,r,e+1/3),this.g=La(o,r,e),this.b=La(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let n=Nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return et.fromWorkingColorSpace(kt.copy(this),e),Math.round(Nt(kt.r*255,0,255))*65536+Math.round(Nt(kt.g*255,0,255))*256+Math.round(Nt(kt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(kt.copy(this),t);let n=kt.r,s=kt.g,r=kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=un){et.fromWorkingColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,s=kt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(to);let n=pr(wi.h,to.h,t),s=pr(wi.s,to.s,t),r=pr(wi.l,to.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new Pe;Pe.NAMES=Nu;var Tp=0,ji=class extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ts(),this.name="",this.blending=As,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Za,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xn=class extends ji{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _t=new P,no=new oe,pn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}};var Io=class extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lo=class extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ep=0,hn=new vt,Ua=new $t,Ms=new P,an=new Ki,cr=new Ki,Dt=new P,ln=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Du(e)?Lo:Io)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(an.min,cr.min),an.expandByPoint(Dt),Dt.addVectors(an.max,cr.max),an.expandByPoint(Dt)):(an.expandByPoint(cr.min),an.expandByPoint(cr.max))}an.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(e,c),Dt.add(Ms)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,d=new oe,m=new oe,g=new oe,x=new P,p=new P;function f(I,b,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),m.sub(d),g.sub(d);let C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[I].add(x),a[b].add(x),a[v].add(x),l[I].add(p),l[b].add(p),l[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,b=T.length;I<b;++I){let v=T[I],C=v.start,V=v.count;for(let O=C,H=C+V;O<H;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let S=new P,M=new P,U=new P,A=new P;function _(I){U.fromBufferAttribute(s,I),A.copy(U);let b=a[I];S.copy(b),S.sub(U.multiplyScalar(U.dot(b))).normalize(),M.crossVectors(A,b);let C=M.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,b=T.length;I<b;++I){let v=T[I],C=v.start,V=v.count;for(let O=C,H=C+V;O<H;O+=3)_(e.getX(O+0)),_(e.getX(O+1)),_(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dh=new vt,zi=new Po,io=new Sr,Nh=new P,so=new P,ro=new P,oo=new P,Da=new P,ao=new P,Fh=new P,lo=new P,Ne=class extends $t{constructor(e=new ln,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Da.fromBufferAttribute(u,e),o?ao.addScaledVector(Da,h):ao.addScaledVector(Da.sub(t),h))}t.add(ao)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(io.containsPoint(zi.origin)===!1&&(zi.intersectSphere(io,Nh)===null||zi.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Dh.copy(r).invert(),zi.copy(e.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=o[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,U=S;M<U;M+=3){let A=a.getX(M),_=a.getX(M+1),I=a.getX(M+2);s=co(this,f,e,n,c,h,u,A,_,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let T=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);s=co(this,o,e,n,c,h,u,T,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=o[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,U=S;M<U;M+=3){let A=M,_=M+1,I=M+2;s=co(this,f,e,n,c,h,u,A,_,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let T=p,S=p+1,M=p+2;s=co(this,o,e,n,c,h,u,T,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function _p(i,e,t,n,s,r,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ai,a),l===null)return null;lo.copy(a),lo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:i}}function co(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,so),i.getVertexPosition(l,ro),i.getVertexPosition(c,oo);let h=_p(i,e,t,n,so,ro,oo,Fh);if(h){let u=new P;Xi.getBarycoord(Fh,so,ro,oo,u),s&&(h.uv=Xi.getInterpolatedAttribute(s,a,l,c,u,new oe)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,a,l,c,u,new oe)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Xi.getNormal(so,ro,oo,d.normal),h.face=d,h.barycoord=u}return h}var ai=class i extends ln{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(x,p,f,T,S,M,U,A,_,I,b){let v=M/_,C=U/I,V=M/2,O=U/2,H=A/2,K=_+1,G=I+1,ne=0,B=0,ue=new P;for(let re=0;re<G;re++){let ce=re*C-O;for(let Fe=0;Fe<K;Fe++){let Qe=Fe*v-V;ue[x]=Qe*T,ue[p]=ce*S,ue[f]=H,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[p]=0,ue[f]=A>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Fe/_),u.push(1-re/I),ne+=1}}for(let re=0;re<I;re++)for(let ce=0;ce<_;ce++){let Fe=d+ce+K*re,Qe=d+ce+K*(re+1),F=d+(ce+1)+K*(re+1),$=d+(ce+1)+K*re;l.push(Fe,Qe,$),l.push(Qe,F,$),B+=6}a.addGroup(m,B,b),m+=B,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=Fs(i[t]);for(let s in n)e[s]=n[s]}return e}function Ap(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Gs={clone:Fs,merge:qt},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dt=class extends ji{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Uo=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new P,Oh=new oe,Bh=new oe,Ft=class extends Uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Bh),t.subVectors(Bh,Oh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ss=-90,bs=1,Fl=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Ss,bs,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Ss,bs,e,t);r.layers=this.layers,this.add(r);let o=new Ft(Ss,bs,e,t);o.layers=this.layers,this.add(o);let a=new Ft(Ss,bs,e,t);a.layers=this.layers,this.add(a);let l=new Ft(Ss,bs,e,t);l.layers=this.layers,this.add(l);let c=new Ft(Ss,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Do=class extends Zt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ol=class extends ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Do(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new dt({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Gn});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=St),new Fl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Na=new P,Pp=new P,Ip=new Ye,dn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Na.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ip.getNormalMatrix(e),s=this.coplanarPoint(Na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new Sr,ho=new P,wr=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,o=new dn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],x=s[10],p=s[11],f=s[12],T=s[13],S=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,p-m,M-f).normalize(),n[1].setComponents(l+r,d+c,p+m,M+f).normalize(),n[2].setComponents(l+o,d+h,p+g,M+T).normalize(),n[3].setComponents(l-o,d-h,p-g,M-T).normalize(),n[4].setComponents(l-a,d-u,p-x,M-S).normalize(),t===ri)n[5].setComponents(l+a,d+u,p+x,M+S).normalize();else if(t===_o)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ou(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lp(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],x=u[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let x=u[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Kt=class i extends ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],x=[],p=[];for(let f=0;f<h;f++){let T=f*d-o;for(let S=0;S<c;S++){let M=S*u-r;g.push(M,-T,0),x.push(0,0,1),p.push(S/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){let S=T+c*f,M=T+c*(f+1),U=T+1+c*(f+1),A=T+1+c*f;m.push(S,M,A),m.push(M,U,A)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
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
#endif`,Im=`struct PhysicalMaterial {
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
}`,Lm=`
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
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
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
}`,zg=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Vg=`#define DISTANCE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#define LAMBERT
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
}`,Kg=`#define LAMBERT
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
}`,jg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,$g=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,t0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,o0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Up,alphahash_pars_fragment:Dp,alphamap_fragment:Np,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:kp,batching_pars_vertex:Vp,batching_vertex:Hp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Jp,color_fragment:Qp,color_pars_fragment:$p,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Em,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:xm,fog_fragment:vm,fog_pars_fragment:ym,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:Sm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:wm,lights_pars_begin:Tm,lights_toon_fragment:_m,lights_toon_pars_fragment:Am,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Im,lights_fragment_begin:Lm,lights_fragment_maps:Um,lights_fragment_end:Dm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Bm,map_fragment:zm,map_pars_fragment:km,map_particle_fragment:Vm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:Zm,morphtarget_vertex:Km,normal_fragment_begin:jm,normal_fragment_maps:Jm,normal_pars_fragment:Qm,normal_pars_vertex:$m,normal_vertex:eg,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:dg,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:xg,skinbase_vertex:vg,skinning_pars_vertex:yg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:bg,specularmap_pars_fragment:wg,tonemapping_fragment:Tg,tonemapping_pars_fragment:Eg,transmission_fragment:_g,transmission_pars_fragment:Ag,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Ig,background_vert:Lg,background_frag:Ug,backgroundCube_vert:Dg,backgroundCube_frag:Ng,cube_vert:Fg,cube_frag:Og,depth_vert:Bg,depth_frag:zg,distanceRGBA_vert:kg,distanceRGBA_frag:Vg,equirect_vert:Hg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:qg,meshbasic_frag:Yg,meshlambert_vert:Zg,meshlambert_frag:Kg,meshmatcap_vert:jg,meshmatcap_frag:Jg,meshnormal_vert:Qg,meshnormal_frag:$g,meshphong_vert:e0,meshphong_frag:t0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:o0,points_frag:a0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},me={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Vn={basic:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:qt([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:qt([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:qt([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:qt([me.common,me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:qt([me.lights,me.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Vn.physical={uniforms:qt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var uo={r:0,b:0,g:0},Vi=new Wn,d0=new vt;function f0(i,e,t,n,s,r,o){let a=new Pe(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1,M=g(T);M===null?f(a,l):M&&M.isColor&&(f(M,1),S=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,S){let M=g(S);M&&(M.isCubeTexture||M.mapping===Zo)?(h===void 0&&(h=new Ne(new ai(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:Fs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(S.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(Vi)),h.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,(u!==M||d!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ne(new Kt(2,2),new dt({name:"BackgroundMaterial",uniforms:Fs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,S){T.getRGB(uo,Fu(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:x,addToRenderList:p}}function p0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,C,V,O,H){let K=!1,G=u(O,V,C);r!==G&&(r=G,c(r.object)),K=m(v,O,V,H),K&&g(v,O,V,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(v,C,V,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,C,V){let O=V.wireframe===!0,H=n[v.id];H===void 0&&(H={},n[v.id]=H);let K=H[C.id];K===void 0&&(K={},H[C.id]=K);let G=K[O];return G===void 0&&(G=d(l()),K[O]=G),G}function d(v){let C=[],V=[],O=[];for(let H=0;H<t;H++)C[H]=0,V[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:O,object:v,attributes:{},index:null}}function m(v,C,V,O){let H=r.attributes,K=C.attributes,G=0,ne=V.getAttributes();for(let B in ne)if(ne[B].location>=0){let re=H[B],ce=K[B];if(ce===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function g(v,C,V,O){let H={},K=C.attributes,G=0,ne=V.getAttributes();for(let B in ne)if(ne[B].location>=0){let re=K[B];re===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));let ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),H[B]=ce,G++}r.attributes=H,r.attributesNum=G,r.index=O}function x(){let v=r.newAttributes;for(let C=0,V=v.length;C<V;C++)v[C]=0}function p(v){f(v,0)}function f(v,C){let V=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;V[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),H[v]!==C&&(i.vertexAttribDivisor(v,C),H[v]=C)}function T(){let v=r.newAttributes,C=r.enabledAttributes;for(let V=0,O=C.length;V<O;V++)C[V]!==v[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function S(v,C,V,O,H,K,G){G===!0?i.vertexAttribIPointer(v,C,V,H,K):i.vertexAttribPointer(v,C,V,O,H,K)}function M(v,C,V,O){x();let H=O.attributes,K=V.getAttributes(),G=C.defaultAttributeValues;for(let ne in K){let B=K[ne];if(B.location>=0){let ue=H[ne];if(ue===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){let re=ue.normalized,ce=ue.itemSize,Fe=e.get(ue);if(Fe===void 0)continue;let Qe=Fe.buffer,F=Fe.type,$=Fe.bytesPerElement,ae=F===i.INT||F===i.UNSIGNED_INT||ue.gpuType===vc;if(ue.isInterleavedBufferAttribute){let ie=ue.data,Te=ie.stride,fe=ue.offset;if(ie.isInstancedInterleavedBuffer){for(let Re=0;Re<B.locationSize;Re++)f(B.location+Re,ie.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Re=0;Re<B.locationSize;Re++)p(B.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Re=0;Re<B.locationSize;Re++)S(B.location+Re,ce/B.locationSize,F,re,Te*$,(fe+ce/B.locationSize*Re)*$,ae)}else{if(ue.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)f(B.location+ie,ue.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<B.locationSize;ie++)p(B.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let ie=0;ie<B.locationSize;ie++)S(B.location+ie,ce/B.locationSize,F,re,ce*$,ce/B.locationSize*ie*$,ae)}}else if(G!==void 0){let re=G[ne];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(B.location,re);break;case 3:i.vertexAttrib3fv(B.location,re);break;case 4:i.vertexAttrib4fv(B.location,re);break;default:i.vertexAttrib1fv(B.location,re)}}}}T()}function U(){I();for(let v in n){let C=n[v];for(let V in C){let O=C[V];for(let H in O)h(O[H].object),delete O[H];delete C[V]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let V in C){let O=C[V];for(let H in O)h(O[H].object),delete O[H];delete C[V]}delete n[v.id]}function _(v){for(let C in n){let V=n[C];if(V[v.id]===void 0)continue;let O=V[v.id];for(let H in O)h(O[H].object),delete O[H];delete V[v.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function m0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,d){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Bt&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let I=_===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Rn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==Yt&&!I)}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:U,maxSamples:A}}function x0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new dn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let T=r?0:n,S=T*4,M=f.clippingState||null;l.value=M,M=h(g,d,S,m);for(let U=0;U!==S;++U)M[U]=t[U];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let f=m+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,M=m;S!==x;++S,M+=4)o.copy(u[S]).applyMatrix4(T,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function v0(i){let e=new WeakMap;function t(o,a){return a===nl?o.mapping=Ls:a===il&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===nl||a===il)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ol(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var en=class extends Uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Es=4,zh=[.125,.215,.35,.446,.526,.582],qi=20,Fa=new en,kh=new Pe,Oa=null,Ba=0,za=0,ka=!1,Gi=(1+Math.sqrt(5))/2,ws=1/Gi,Vh=[new P(-Gi,ws,0),new P(Gi,ws,0),new P(-ws,0,Gi),new P(ws,0,Gi),new P(0,Gi,-ws),new P(0,Gi,ws),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Os=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Ba,za),this._renderer.xr.enabled=ka,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ht,format:Bt,colorSpace:Hs,depthBuffer:!1},s=Hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y0(r)),this._blurMaterial=M0(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,s){let a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(kh),h.toneMapping=_i,h.autoClear=!1;let m=new Xn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Ne(new ai,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(kh),x=!0);for(let f=0;f<6;f++){let T=f%3;T===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):T===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let S=this._cubeSize;fo(s,T*S,f>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ls||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vh[(s-r-1)%Vh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ne(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qi-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):qi;p>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);let f=[],T=0;for(let _=0;_<qi;++_){let I=_/x,b=Math.exp(-I*I/2);f.push(b),_===0?T+=b:_<p&&(T+=2*b)}for(let _=0;_<f.length;_++)f[_]=f[_]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let M=this._sizeLods[s],U=3*M*(s>S-Es?s-S+Es:0),A=4*(this._cubeSize-M);fo(t,U,A,3*M,2*M),l.setRenderTarget(t),l.render(u,Fa)}};function y0(i){let e=[],t=[],n=[],s=i,r=i-Es+1+zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Es?l=zh[o-i+Es-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,f=1,T=new Float32Array(x*g*m),S=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let A=0;A<m;A++){let _=A%3*2/3-1,I=A>2?0:-1,b=[_,I,0,_+2/3,I,0,_+2/3,I+1,0,_,I,0,_+2/3,I+1,0,_,I+1,0];T.set(b,x*g*A),S.set(d,p*g*A);let v=[A,A,A,A,A,A];M.set(v,f*g*A)}let U=new ln;U.setAttribute("position",new pn(T,x)),U.setAttribute("uv",new pn(S,p)),U.setAttribute("faceIndex",new pn(M,f)),e.push(U),s>Es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hh(i,e,t){let n=new ut(i,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function M0(i,e,t){let n=new Float32Array(qi),s=new P(0,1,0);return new dt({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Gh(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Wh(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function S0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===nl||l===il,h=l===Ls||l===Us;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Os(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Os(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function b0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function w0(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let T=m.array;x=m.version;for(let S=0,M=T.length;S<M;S+=3){let U=T[S+0],A=T[S+1],_=T[S+2];d.push(U,A,A,_,_,U)}}else if(g!==void 0){let T=g.array;x=g.version;for(let S=0,M=T.length/3-1;S<M;S+=3){let U=S+0,A=S+1,_=S+2;d.push(U,A,A,_,_,U)}}else return;let p=new(Du(d)?Lo:Io)(d,1);p.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function T0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*o),t.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*o,g),t.update(m,n,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function u(d,m,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,g);let f=0;for(let T=0;T<g;T++)f+=m[T]*x[T];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function E0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _0(i,e,t){let n=new WeakMap,s=new it;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],S=0;m===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*U*4*u),_=new Co(A,M,U,u);_.type=Yt,_.needsUpdate=!0;let I=S*4;for(let v=0;v<u;v++){let C=p[v],V=f[v],O=T[v],H=M*U*4*v;for(let K=0;K<C.count;K++){let G=K*I;m===!0&&(s.fromBufferAttribute(C,K),A[H+G+0]=s.x,A[H+G+1]=s.y,A[H+G+2]=s.z,A[H+G+3]=0),g===!0&&(s.fromBufferAttribute(V,K),A[H+G+4]=s.x,A[H+G+5]=s.y,A[H+G+6]=s.z,A[H+G+7]=0),x===!0&&(s.fromBufferAttribute(O,K),A[H+G+8]=s.x,A[H+G+9]=s.y,A[H+G+10]=s.z,A[H+G+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new oe(M,U)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function A0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var No=class extends Zt{constructor(e,t,n,s,r,o,a,l,c,h=Rs){if(h!==Rs&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=Zi),n===void 0&&h===Ns&&(n=Ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bu=new Zt,Xh=new No(1,1),zu=new Co,ku=new Nl,Vu=new Do,qh=[],Yh=[],Zh=new Float32Array(16),Kh=new Float32Array(9),jh=new Float32Array(4);function Ws(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jo(i,e){let t=Yh[e];t===void 0&&(t=new Int32Array(e),Yh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function R0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function L0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),It(t,n)}}function U0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),It(t,n)}}function D0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),It(t,n)}}function N0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function F0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function k0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function G0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=Uu,r=Xh):r=Bu,t.setTexture2D(e||r,s)}function W0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ku,s)}function X0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vu,s)}function q0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zu,s)}function Y0(i){switch(i){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return U0;case 35676:return D0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return V0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function Z0(i,e){i.uniform1fv(this.addr,e)}function K0(i,e){let t=Ws(e,this.size,2);i.uniform2fv(this.addr,t)}function j0(i,e){let t=Ws(e,this.size,3);i.uniform3fv(this.addr,t)}function J0(i,e){let t=Ws(e,this.size,4);i.uniform4fv(this.addr,t)}function Q0(i,e){let t=Ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $0(i,e){let t=Ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ex(i,e){let t=Ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tx(i,e){i.uniform1iv(this.addr,e)}function nx(i,e){i.uniform2iv(this.addr,e)}function ix(i,e){i.uniform3iv(this.addr,e)}function sx(i,e){i.uniform4iv(this.addr,e)}function rx(i,e){i.uniform1uiv(this.addr,e)}function ox(i,e){i.uniform2uiv(this.addr,e)}function ax(i,e){i.uniform3uiv(this.addr,e)}function lx(i,e){i.uniform4uiv(this.addr,e)}function cx(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bu,r[o])}function hx(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ku,r[o])}function ux(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vu,r[o])}function dx(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zu,r[o])}function fx(i){switch(i){case 5126:return Z0;case 35664:return K0;case 35665:return j0;case 35666:return J0;case 35674:return Q0;case 35675:return $0;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}var Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y0(t.type)}},zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fx(t.type)}},kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Va=/(\w+)(\])?(\[|\.)?/g;function Jh(i,e){i.seq.push(e),i.map[e.id]=e}function px(i,e,t){let n=i.name,s=n.length;for(Va.lastIndex=0;;){let r=Va.exec(n),o=Va.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jh(t,c===void 0?new Bl(a,i,e):new zl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new kl(a),Jh(t,u)),t=u}}}var Ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);px(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Qh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mx=37297,gx=0;function xx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var $h=new Ye;function vx(i){et._getMatrix($h,et.workingColorSpace,i);let e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Ko:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+xx(i.getShaderSource(e),o)}else return s}function yx(i,e){let t=vx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mx(i,e){let t;switch(e){case If:t="Linear";break;case Lf:t="Reinhard";break;case Uf:t="Cineon";break;case Df:t="ACESFilmic";break;case Ff:t="AgX";break;case Of:t="Neutral";break;case Nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var po=new P;function Sx(){et.getLuminanceCoefficients(po);let i=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function wx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function dr(i){return i!==""}function tu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(Ex,Ax)}var _x=new Map;function Ax(i,e){let t=Ke[e];if(t===void 0){let n=_x.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vl(t)}var Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(i){return i.replace(Rx,Cx)}function Cx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Px(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Ix(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Us:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function Ux(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Cf:e="ENVMAP_BLENDING_MIX";break;case Pf:e="ENVMAP_BLENDING_ADD";break}return e}function Dx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Nx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Px(t),c=Ix(t),h=Lx(t),u=Ux(t),d=Dx(t),m=bx(t),g=wx(r),x=s.createProgram(),p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),f.length>0&&(f+=`
`)):(p=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),f=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Ke.tonemapping_pars_fragment:"",t.toneMapping!==_i?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),Sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Vl(o),o=tu(o,t),o=nu(o,t),a=Vl(a),a=tu(a,t),a=nu(a,t),o=iu(o),a=iu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=T+p+o,M=T+f+a,U=Qh(s,s.VERTEX_SHADER,S),A=Qh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,U),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function _(C){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(U).trim(),H=s.getShaderInfoLog(A).trim(),K=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,A);else{let ne=eu(s,U,"vertex"),B=eu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+ne+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||H==="")&&(G=!1);G&&(C.diagnostics={runnable:K,programLog:V,vertexShader:{log:O,prefix:p},fragmentShader:{log:H,prefix:f}})}s.deleteShader(U),s.deleteShader(A),I=new Ps(s,x),b=Tx(s,x)}let I;this.getUniforms=function(){return I===void 0&&_(this),I};let b;this.getAttributes=function(){return b===void 0&&_(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,mx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=A,this}var Fx=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gl(e),t.set(e,n)),n}},Gl=class{constructor(e){this.id=Fx++,this.code=e,this.usedTimes=0}};function Ox(i,e,t,n,s,r,o){let a=new br,l=new Hl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,v,C,V,O){let H=V.fog,K=O.geometry,G=b.isMeshStandardMaterial?V.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),B=ne&&ne.mapping===Zo?ne.image.height:null,ue=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ce=re!==void 0?re.length:0,Fe=0;K.morphAttributes.position!==void 0&&(Fe=1),K.morphAttributes.normal!==void 0&&(Fe=2),K.morphAttributes.color!==void 0&&(Fe=3);let Qe,F,$,ae;if(ue){let q=Vn[ue];Qe=q.vertexShader,F=q.fragmentShader}else Qe=b.vertexShader,F=b.fragmentShader,l.update(b),$=l.getVertexShaderID(b),ae=l.getFragmentShaderID(b);let ie=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),fe=O.isInstancedMesh===!0,Re=O.isBatchedMesh===!0,We=!!b.map,J=!!b.matcap,se=!!ne,R=!!b.aoMap,_e=!!b.lightMap,te=!!b.bumpMap,Se=!!b.normalMap,de=!!b.displacementMap,Oe=!!b.emissiveMap,be=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,z=b.clearcoat>0,Z=b.dispersion>0,ee=b.iridescence>0,j=b.sheen>0,Ae=b.transmission>0,pe=y&&!!b.anisotropyMap,Me=z&&!!b.clearcoatMap,je=z&&!!b.clearcoatNormalMap,le=z&&!!b.clearcoatRoughnessMap,we=ee&&!!b.iridescenceMap,Be=ee&&!!b.iridescenceThicknessMap,ke=j&&!!b.sheenColorMap,Ee=j&&!!b.sheenRoughnessMap,Je=!!b.specularMap,He=!!b.specularColorMap,ot=!!b.specularIntensityMap,L=Ae&&!!b.transmissionMap,ge=Ae&&!!b.thicknessMap,Y=!!b.gradientMap,Q=!!b.alphaMap,ve=b.alphaTest>0,xe=!!b.alphaHash,Ge=!!b.extensions,gt=_i;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(gt=i.toneMapping);let k={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:F,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Re,batchingColor:Re&&O._colorsTexture!==null,instancing:fe,instancingColor:fe&&O.instanceColor!==null,instancingMorph:fe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Hs,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:J,envMap:se,envMapMode:se&&ne.mapping,envMapCubeUVHeight:B,aoMap:R,lightMap:_e,bumpMap:te,normalMap:Se,displacementMap:d&&de,emissiveMap:Oe,normalMapObjectSpace:Se&&b.normalMapType===Vf,normalMapTangentSpace:Se&&b.normalMapType===Lu,metalnessMap:be,roughnessMap:E,anisotropy:y,anisotropyMap:pe,clearcoat:z,clearcoatMap:Me,clearcoatNormalMap:je,clearcoatRoughnessMap:le,dispersion:Z,iridescence:ee,iridescenceMap:we,iridescenceThicknessMap:Be,sheen:j,sheenColorMap:ke,sheenRoughnessMap:Ee,specularMap:Je,specularColorMap:He,specularIntensityMap:ot,transmission:Ae,transmissionMap:L,thicknessMap:ge,gradientMap:Y,opaque:b.transparent===!1&&b.blending===As&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:ve,alphaHash:xe,combine:b.combine,mapUv:We&&x(b.map.channel),aoMapUv:R&&x(b.aoMap.channel),lightMapUv:_e&&x(b.lightMap.channel),bumpMapUv:te&&x(b.bumpMap.channel),normalMapUv:Se&&x(b.normalMap.channel),displacementMapUv:de&&x(b.displacementMap.channel),emissiveMapUv:Oe&&x(b.emissiveMap.channel),metalnessMapUv:be&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:pe&&x(b.anisotropyMap.channel),clearcoatMapUv:Me&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:je&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(b.sheenRoughnessMap.channel),specularMapUv:Je&&x(b.specularMap.channel),specularColorMapUv:He&&x(b.specularColorMap.channel),specularIntensityMapUv:ot&&x(b.specularIntensityMap.channel),transmissionMapUv:L&&x(b.transmissionMap.channel),thicknessMapUv:ge&&x(b.thicknessMap.channel),alphaMapUv:Q&&x(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Se||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(We||Q),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Fe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:Oe&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===An,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return k.vertexUv1s=c.has(1),k.vertexUv2s=c.has(2),k.vertexUv3s=c.has(3),c.clear(),k}function f(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)v.push(C),v.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(T(v,b),S(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function T(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function S(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let v=g[b.type],C;if(v){let V=Vn[v];C=Gs.clone(V.uniforms)}else C=b.uniforms;return C}function U(b,v){let C;for(let V=0,O=h.length;V<O;V++){let H=h[V];if(H.cacheKey===v){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Nx(i,v,b,r),h.push(C)),C}function A(b){if(--b.usedTimes===0){let v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function _(b){l.remove(b)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:U,releaseProgram:A,releaseShaderCache:_,programs:h,dispose:I}}function Bx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ru(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ou(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,m,g,x,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=p),e++,f}function a(u,d,m,g,x,p){let f=o(u,d,m,g,x,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,g,x,p){let f=o(u,d,m,g,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||zx),n.length>1&&n.sort(d||ru),s.length>1&&s.sort(d||ru)}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function kx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ou,i.set(n,[o])):s>=r.length?(o=new ou,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Pe};break;case"SpotLight":t={position:new P,direction:new P,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Hx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Gx=0;function Wx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xx(i){let e=new Vx,t=Hx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new vt,o=new vt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,x=0,p=0,f=0,T=0,S=0,M=0,U=0,A=0,_=0;c.sort(Wx);for(let b=0,v=c.length;b<v;b++){let C=c[b],V=C.color,O=C.intensity,H=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*O,u+=V.g*O,d+=V.b*O;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],O);_++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ne=C.shadow,B=t.get(C);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=C.shadow.matrix,T++}n.directional[m]=G,m++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(V).multiplyScalar(O),G.distance=H,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;let ne=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,ne.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=ne.matrix,C.castShadow){let B=t.get(C);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=K,M++}x++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(V).multiplyScalar(O),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=G,p++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let ne=C.shadow,B=t.get(C);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,B.shadowCameraNear=ne.camera.near,B.shadowCameraFar=ne.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(O),G.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==f||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==M||I.numSpotMaps!==U||I.numLightProbes!==_)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=_,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=f,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=M,I.numSpotMaps=U,I.numLightProbes=_,n.version=Gx++)}function l(c,h){let u=0,d=0,m=0,g=0,x=0,p=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){let S=c[f];if(S.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(S.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function au(i){let e=new Xx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new au(i),e.set(s,[a])):r>=o.length?(a=new au(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Wl=class extends ji{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xl=class extends ji{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`;function Kx(i,e,t){let n=new wr,s=new oe,r=new oe,o=new it,a=new Wl({depthPacking:kf}),l=new Xl,c={},h=t.maxTextureSize,u={[Ai]:Vt,[Vt]:Ai,[An]:An},d=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Yx,fragmentShader:Zx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new ln;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ne(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let f=this.type;this.render=function(A,_,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Gn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let O=f!==si&&this.type===si,H=f===si&&this.type!==si;for(let K=0,G=A.length;K<G;K++){let ne=A[K],B=ne.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let ue=B.getFrameExtents();if(s.multiply(ue),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,B.mapSize.y=r.y)),B.map===null||O===!0||H===!0){let ce=this.type!==si?{minFilter:At,magFilter:At}:{};B.map!==null&&B.map.dispose(),B.map=new ut(s.x,s.y,ce),B.map.texture.name=ne.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let re=B.getViewportCount();for(let ce=0;ce<re;ce++){let Fe=B.getViewport(ce);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),V.viewport(o),B.updateMatrices(ne,ce),n=B.getFrustum(),M(_,I,B.camera,ne,this.type)}B.isPointLightShadow!==!0&&this.type===si&&T(B,I),B.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(b,v,C)};function T(A,_){let I=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ut(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,I,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,I,m,x,null)}function S(A,_,I,b){let v=null,C=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let V=v.uuid,O=_.uuid,H=c[V];H===void 0&&(H={},c[V]=H);let K=H[O];K===void 0&&(K=v.clone(),H[O]=K,_.addEventListener("dispose",U)),v=K}if(v.visible=_.visible,v.wireframe=_.wireframe,b===si?v.side=_.shadowSide!==null?_.shadowSide:_.side:v.side=_.shadowSide!==null?_.shadowSide:u[_.side],v.alphaMap=_.alphaMap,v.alphaTest=_.alphaTest,v.map=_.map,v.clipShadows=_.clipShadows,v.clippingPlanes=_.clippingPlanes,v.clipIntersection=_.clipIntersection,v.displacementMap=_.displacementMap,v.displacementScale=_.displacementScale,v.displacementBias=_.displacementBias,v.wireframeLinewidth=_.wireframeLinewidth,v.linewidth=_.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let V=i.properties.get(v);V.light=I}return v}function M(A,_,I,b,v){if(A.visible===!1)return;if(A.layers.test(_.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===si)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let O=e.update(A),H=A.material;if(Array.isArray(H)){let K=O.groups;for(let G=0,ne=K.length;G<ne;G++){let B=K[G],ue=H[B.materialIndex];if(ue&&ue.visible){let re=S(A,ue,b,v);A.onBeforeShadow(i,A,_,I,O,re,B),i.renderBufferDirect(I,null,O,re,A,B),A.onAfterShadow(i,A,_,I,O,re,B)}}}else if(H.visible){let K=S(A,H,b,v);A.onBeforeShadow(i,A,_,I,O,K,null),i.renderBufferDirect(I,null,O,K,A,null),A.onAfterShadow(i,A,_,I,O,K,null)}}let V=A.children;for(let O=0,H=V.length;O<H;O++)M(V[O],_,I,b,v)}function U(A){A.target.removeEventListener("dispose",U);for(let I in c){let b=c[I],v=A.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var jx={[Ka]:ja,[Ja]:el,[Qa]:tl,[Is]:$a,[ja]:Ka,[el]:Ja,[tl]:Qa,[$a]:Is};function Jx(i,e){function t(){let L=!1,ge=new it,Y=null,Q=new it(0,0,0,0);return{setMask:function(ve){Y!==ve&&!L&&(i.colorMask(ve,ve,ve,ve),Y=ve)},setLocked:function(ve){L=ve},setClear:function(ve,xe,Ge,gt,k){k===!0&&(ve*=gt,xe*=gt,Ge*=gt),ge.set(ve,xe,Ge,gt),Q.equals(ge)===!1&&(i.clearColor(ve,xe,Ge,gt),Q.copy(ge))},reset:function(){L=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,ge=!1,Y=null,Q=null,ve=null;return{setReversed:function(xe){if(ge!==xe){let Ge=e.get("EXT_clip_control");ge?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let gt=ve;ve=null,this.setClear(gt)}ge=xe},getReversed:function(){return ge},setTest:function(xe){xe?ie(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(xe){Y!==xe&&!L&&(i.depthMask(xe),Y=xe)},setFunc:function(xe){if(ge&&(xe=jx[xe]),Q!==xe){switch(xe){case Ka:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case el:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=xe}},setLocked:function(xe){L=xe},setClear:function(xe){ve!==xe&&(ge&&(xe=1-xe),i.clearDepth(xe),ve=xe)},reset:function(){L=!1,Y=null,Q=null,ve=null,ge=!1}}}function s(){let L=!1,ge=null,Y=null,Q=null,ve=null,xe=null,Ge=null,gt=null,k=null;return{setTest:function(q){L||(q?ie(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(q){ge!==q&&!L&&(i.stencilMask(q),ge=q)},setFunc:function(q,Ce,Ze){(Y!==q||Q!==Ce||ve!==Ze)&&(i.stencilFunc(q,Ce,Ze),Y=q,Q=Ce,ve=Ze)},setOp:function(q,Ce,Ze){(xe!==q||Ge!==Ce||gt!==Ze)&&(i.stencilOp(q,Ce,Ze),xe=q,Ge=Ce,gt=Ze)},setLocked:function(q){L=q},setClear:function(q){k!==q&&(i.clearStencil(q),k=q)},reset:function(){L=!1,ge=null,Y=null,Q=null,ve=null,xe=null,Ge=null,gt=null,k=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,m=[],g=null,x=!1,p=null,f=null,T=null,S=null,M=null,U=null,A=null,_=new Pe(0,0,0),I=0,b=!1,v=null,C=null,V=null,O=null,H=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=ne>=1):B.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=ne>=2);let ue=null,re={},ce=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Qe=new it().fromArray(ce),F=new it().fromArray(Fe);function $(L,ge,Y,Q){let ve=new Uint8Array(4),xe=i.createTexture();i.bindTexture(L,xe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Y;Ge++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ge+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return xe}let ae={};ae[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Is),te(!1),Se(ch),ie(i.CULL_FACE),R(Gn);function ie(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Te(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function fe(L,ge){return u[L]!==ge?(i.bindFramebuffer(L,ge),u[L]=ge,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Re(L,ge){let Y=m,Q=!1;if(L){Y=d.get(ge),Y===void 0&&(Y=[],d.set(ge,Y));let ve=L.textures;if(Y.length!==ve.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ge=ve.length;xe<Ge;xe++)Y[xe]=i.COLOR_ATTACHMENT0+xe;Y.length=ve.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function We(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let J={[Wi]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};J[pf]=i.MIN,J[mf]=i.MAX;let se={[gf]:i.ZERO,[xf]:i.ONE,[vf]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[Mf]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[Sf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[_f]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function R(L,ge,Y,Q,ve,xe,Ge,gt,k,q){if(L===Gn){x===!0&&(Te(i.BLEND),x=!1);return}if(x===!1&&(ie(i.BLEND),x=!0),L!==uf){if(L!==p||q!==b){if((f!==Wi||M!==Wi)&&(i.blendEquation(i.FUNC_ADD),f=Wi,M=Wi),q)switch(L){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,S=null,U=null,A=null,_.set(0,0,0),I=0,p=L,b=q}return}ve=ve||ge,xe=xe||Y,Ge=Ge||Q,(ge!==f||ve!==M)&&(i.blendEquationSeparate(J[ge],J[ve]),f=ge,M=ve),(Y!==T||Q!==S||xe!==U||Ge!==A)&&(i.blendFuncSeparate(se[Y],se[Q],se[xe],se[Ge]),T=Y,S=Q,U=xe,A=Ge),(gt.equals(_)===!1||k!==I)&&(i.blendColor(gt.r,gt.g,gt.b,k),_.copy(gt),I=k),p=L,b=!1}function _e(L,ge){L.side===An?Te(i.CULL_FACE):ie(i.CULL_FACE);let Y=L.side===Vt;ge&&(Y=!Y),te(Y),L.blending===As&&L.transparent===!1?R(Gn):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Q=L.stencilWrite;a.setTest(Q),Q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(L){v!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),v=L)}function Se(L){L!==lf?(ie(i.CULL_FACE),L!==C&&(L===ch?i.cullFace(i.BACK):L===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),C=L}function de(L){L!==V&&(G&&i.lineWidth(L),V=L)}function Oe(L,ge,Y){L?(ie(i.POLYGON_OFFSET_FILL),(O!==ge||H!==Y)&&(i.polygonOffset(ge,Y),O=ge,H=Y)):Te(i.POLYGON_OFFSET_FILL)}function be(L){L?ie(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+K-1),ue!==L&&(i.activeTexture(L),ue=L)}function y(L,ge,Y){Y===void 0&&(ue===null?Y=i.TEXTURE0+K-1:Y=ue);let Q=re[Y];Q===void 0&&(Q={type:void 0,texture:void 0},re[Y]=Q),(Q.type!==L||Q.texture!==ge)&&(ue!==Y&&(i.activeTexture(Y),ue=Y),i.bindTexture(L,ge||ae[L]),Q.type=L,Q.texture=ge)}function z(){let L=re[ue];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(L){Qe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function Ee(L){F.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),F.copy(L))}function Je(L,ge){let Y=c.get(ge);Y===void 0&&(Y=new WeakMap,c.set(ge,Y));let Q=Y.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(ge,L.name),Y.set(L,Q))}function He(L,ge){let Q=c.get(ge).get(L);l.get(ge)!==Q&&(i.uniformBlockBinding(ge,Q,L.__bindingPointIndex),l.set(ge,Q))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,re={},u={},d=new WeakMap,m=[],g=null,x=!1,p=null,f=null,T=null,S=null,M=null,U=null,A=null,_=new Pe(0,0,0),I=0,b=!1,v=null,C=null,V=null,O=null,H=null,Qe.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Te,bindFramebuffer:fe,drawBuffers:Re,useProgram:We,setBlending:R,setMaterial:_e,setFlipSided:te,setCullFace:Se,setLineWidth:de,setPolygonOffset:Oe,setScissorTest:be,activeTexture:E,bindTexture:y,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:we,texImage3D:Be,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:je,texStorage3D:le,texSubImage2D:j,texSubImage3D:Ae,compressedTexSubImage2D:pe,compressedTexSubImage3D:Me,scissor:ke,viewport:Ee,reset:ot}}function lu(i,e,t,n){let s=Qx(n);switch(t){case Eu:return i*e;case Au:return i*e;case Ru:return i*e*2;case Cu:return i*e/s.components*s.byteLength;case Sc:return i*e/s.components*s.byteLength;case Pu:return i*e*2/s.components*s.byteLength;case bc:return i*e*2/s.components*s.byteLength;case _u:return i*e*3/s.components*s.byteLength;case Bt:return i*e*4/s.components*s.byteLength;case wc:return i*e*4/s.components*s.byteLength;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:case cl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case ll:return Math.max(i,8)*Math.max(e,8)/2;case hl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wo:case Al:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Iu:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qx(i){switch(i){case Rn:case bu:return{byteLength:1,components:1};case yr:case wu:case Ht:return{byteLength:2,components:1};case yc:case Mc:return{byteLength:2,components:4};case Zi:case vc:case Yt:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $x(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return m?new OffscreenCanvas(E,y):Ao("canvas")}function x(E,y,z){let Z=1,ee=be(E);if((ee.width>z||ee.height>z)&&(Z=z/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let j=Math.floor(Z*ee.width),Ae=Math.floor(Z*ee.height);u===void 0&&(u=g(j,Ae));let pe=y?g(j,Ae):u;return pe.width=j,pe.height=Ae,pe.getContext("2d").drawImage(E,0,0,j,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Ae+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,y,z,Z,ee=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=y;if(y===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),y===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){let Ae=ee?Ko:et.getTransfer(Z);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=Ae===lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(E,y){let z;return E?y===null||y===Zi||y===Ds?z=i.DEPTH24_STENCIL8:y===Yt?z=i.DEPTH32F_STENCIL8:y===yr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Zi||y===Ds?z=i.DEPTH_COMPONENT24:y===Yt?z=i.DEPTH_COMPONENT32F:y===yr&&(z=i.DEPTH_COMPONENT16),z}function U(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==At&&E.minFilter!==St?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){let y=E.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&h.delete(y)}function _(E){let y=E.target;y.removeEventListener("dispose",_),v(y)}function I(E){let y=n.get(E);if(y.__webglInit===void 0)return;let z=E.source,Z=d.get(z);if(Z){let ee=Z[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(E),Object.keys(Z).length===0&&d.delete(z)}n.remove(E)}function b(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let z=E.source,Z=d.get(z);delete Z[y.__cacheKey],o.memory.textures--}function v(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ee=0;ee<y.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(y.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=E.textures;for(let Z=0,ee=z.length;Z<ee;Z++){let j=n.get(z[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(E)}let C=0;function V(){C=0}function O(){let E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function H(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function K(E,y){let z=n.get(E);if(E.isVideoTexture&&de(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(z,E,y);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function G(E,y){let z=n.get(E);if(E.version>0&&z.__version!==E.version){F(z,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function ne(E,y){let z=n.get(E);if(E.version>0&&z.__version!==E.version){F(z,E,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function B(E,y){let z=n.get(E);if(E.version>0&&z.__version!==E.version){$(z,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let ue={[sl]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[rl]:i.MIRRORED_REPEAT},re={[At]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},ce={[Hf]:i.NEVER,[Zf]:i.ALWAYS,[Gf]:i.LESS,[Uu]:i.LEQUAL,[Wf]:i.EQUAL,[Yf]:i.GEQUAL,[Xf]:i.GREATER,[qf]:i.NOTEQUAL};function Fe(E,y){if(y.type===Yt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===St||y.magFilter===pa||y.magFilter===Yr||y.magFilter===Yi||y.minFilter===St||y.minFilter===pa||y.minFilter===Yr||y.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ue[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ue[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ue[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,re[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,re[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===At||y.minFilter!==Yr&&y.minFilter!==Yi||y.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(E,y){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));let Z=y.source,ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));let j=H(y);if(j!==E.__cacheKey){ee[j]===void 0&&(ee[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[j].usedTimes++;let Ae=ee[E.__cacheKey];Ae!==void 0&&(ee[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(y)),E.__cacheKey=j,E.__webglTexture=ee[j].texture}return z}function F(E,y,z){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);let ee=Qe(E,y),j=y.source;t.bindTexture(Z,E.__webglTexture,i.TEXTURE0+z);let Ae=n.get(j);if(j.version!==Ae.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);let pe=et.getPrimaries(et.workingColorSpace),Me=y.colorSpace===Ei?null:et.getPrimaries(y.colorSpace),je=y.colorSpace===Ei||pe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let le=x(y.image,!1,s.maxTextureSize);le=Oe(y,le);let we=r.convert(y.format,y.colorSpace),Be=r.convert(y.type),ke=S(y.internalFormat,we,Be,y.colorSpace,y.isVideoTexture);Fe(Z,y);let Ee,Je=y.mipmaps,He=y.isVideoTexture!==!0,ot=Ae.__version===void 0||ee===!0,L=j.dataReady,ge=U(y,le);if(y.isDepthTexture)ke=M(y.format===Ns,y.type),ot&&(He?t.texStorage2D(i.TEXTURE_2D,1,ke,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,ke,le.width,le.height,0,we,Be,null));else if(y.isDataTexture)if(Je.length>0){He&&ot&&t.texStorage2D(i.TEXTURE_2D,ge,ke,Je[0].width,Je[0].height);for(let Y=0,Q=Je.length;Y<Q;Y++)Ee=Je[Y],He?L&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,we,Be,Ee.data):t.texImage2D(i.TEXTURE_2D,Y,ke,Ee.width,Ee.height,0,we,Be,Ee.data);y.generateMipmaps=!1}else He?(ot&&t.texStorage2D(i.TEXTURE_2D,ge,ke,le.width,le.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,we,Be,le.data)):t.texImage2D(i.TEXTURE_2D,0,ke,le.width,le.height,0,we,Be,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,ke,Je[0].width,Je[0].height,le.depth);for(let Y=0,Q=Je.length;Y<Q;Y++)if(Ee=Je[Y],y.format!==Bt)if(we!==null)if(He){if(L)if(y.layerUpdates.size>0){let ve=lu(Ee.width,Ee.height,y.format,y.type);for(let xe of y.layerUpdates){let Ge=Ee.data.subarray(xe*ve/Ee.data.BYTES_PER_ELEMENT,(xe+1)*ve/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,xe,Ee.width,Ee.height,1,we,Ge)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,le.depth,we,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ke,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,le.depth,we,Be,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ke,Ee.width,Ee.height,le.depth,0,we,Be,Ee.data)}else{He&&ot&&t.texStorage2D(i.TEXTURE_2D,ge,ke,Je[0].width,Je[0].height);for(let Y=0,Q=Je.length;Y<Q;Y++)Ee=Je[Y],y.format!==Bt?we!==null?He?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,we,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?L&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,we,Be,Ee.data):t.texImage2D(i.TEXTURE_2D,Y,ke,Ee.width,Ee.height,0,we,Be,Ee.data)}else if(y.isDataArrayTexture)if(He){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,ke,le.width,le.height,le.depth),L)if(y.layerUpdates.size>0){let Y=lu(le.width,le.height,y.format,y.type);for(let Q of y.layerUpdates){let ve=le.data.subarray(Q*Y/le.data.BYTES_PER_ELEMENT,(Q+1)*Y/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,le.width,le.height,1,we,Be,ve)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,we,Be,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,le.width,le.height,le.depth,0,we,Be,le.data);else if(y.isData3DTexture)He?(ot&&t.texStorage3D(i.TEXTURE_3D,ge,ke,le.width,le.height,le.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,we,Be,le.data)):t.texImage3D(i.TEXTURE_3D,0,ke,le.width,le.height,le.depth,0,we,Be,le.data);else if(y.isFramebufferTexture){if(ot)if(He)t.texStorage2D(i.TEXTURE_2D,ge,ke,le.width,le.height);else{let Y=le.width,Q=le.height;for(let ve=0;ve<ge;ve++)t.texImage2D(i.TEXTURE_2D,ve,ke,Y,Q,0,we,Be,null),Y>>=1,Q>>=1}}else if(Je.length>0){if(He&&ot){let Y=be(Je[0]);t.texStorage2D(i.TEXTURE_2D,ge,ke,Y.width,Y.height)}for(let Y=0,Q=Je.length;Y<Q;Y++)Ee=Je[Y],He?L&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,we,Be,Ee):t.texImage2D(i.TEXTURE_2D,Y,ke,we,Be,Ee);y.generateMipmaps=!1}else if(He){if(ot){let Y=be(le);t.texStorage2D(i.TEXTURE_2D,ge,ke,Y.width,Y.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Be,le)}else t.texImage2D(i.TEXTURE_2D,0,ke,we,Be,le);p(y)&&f(Z),Ae.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function $(E,y,z){if(y.image.length!==6)return;let Z=Qe(E,y),ee=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let j=n.get(ee);if(ee.version!==j.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);let Ae=et.getPrimaries(et.workingColorSpace),pe=y.colorSpace===Ei?null:et.getPrimaries(y.colorSpace),Me=y.colorSpace===Ei||Ae===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let je=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,we=[];for(let Q=0;Q<6;Q++)!je&&!le?we[Q]=x(y.image[Q],!0,s.maxCubemapSize):we[Q]=le?y.image[Q].image:y.image[Q],we[Q]=Oe(y,we[Q]);let Be=we[0],ke=r.convert(y.format,y.colorSpace),Ee=r.convert(y.type),Je=S(y.internalFormat,ke,Ee,y.colorSpace),He=y.isVideoTexture!==!0,ot=j.__version===void 0||Z===!0,L=ee.dataReady,ge=U(y,Be);Fe(i.TEXTURE_CUBE_MAP,y);let Y;if(je){He&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Je,Be.width,Be.height);for(let Q=0;Q<6;Q++){Y=we[Q].mipmaps;for(let ve=0;ve<Y.length;ve++){let xe=Y[ve];y.format!==Bt?ke!==null?He?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,xe.width,xe.height,ke,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Je,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,xe.width,xe.height,ke,Ee,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Je,xe.width,xe.height,0,ke,Ee,xe.data)}}}else{if(Y=y.mipmaps,He&&ot){Y.length>0&&ge++;let Q=be(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(le){He?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we[Q].width,we[Q].height,ke,Ee,we[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,we[Q].width,we[Q].height,0,ke,Ee,we[Q].data);for(let ve=0;ve<Y.length;ve++){let Ge=Y[ve].image[Q].image;He?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Ge.width,Ge.height,ke,Ee,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Je,Ge.width,Ge.height,0,ke,Ee,Ge.data)}}else{He?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,Ee,we[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,ke,Ee,we[Q]);for(let ve=0;ve<Y.length;ve++){let xe=Y[ve];He?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,ke,Ee,xe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Je,ke,Ee,xe.image[Q])}}}p(y)&&f(i.TEXTURE_CUBE_MAP),j.__version=ee.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ae(E,y,z,Z,ee,j){let Ae=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),Me=S(z.internalFormat,Ae,pe,z.colorSpace),je=n.get(y),le=n.get(z);if(le.__renderTarget=y,!je.__hasExternalTextures){let we=Math.max(1,y.width>>j),Be=Math.max(1,y.height>>j);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,Me,we,Be,y.depth,0,Ae,pe,null):t.texImage2D(ee,j,Me,we,Be,0,Ae,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Se(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,le.__webglTexture,0,te(y)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,le.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(E,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let Z=y.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,j=M(y.stencilBuffer,ee),Ae=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=te(y);Se(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,j,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,E)}else{let Z=y.textures;for(let ee=0;ee<Z.length;ee++){let j=Z[ee],Ae=r.convert(j.format,j.colorSpace),pe=r.convert(j.type),Me=S(j.internalFormat,Ae,pe,j.colorSpace),je=te(y);z&&Se(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Me,y.width,y.height):Se(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Me,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Me,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let ee=Z.__webglTexture,j=te(y);if(y.depthTexture.format===Rs)Se(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Ns)Se(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function fe(E){let y=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=Z}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Te(y.__webglFramebuffer,E)}else if(z){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),ie(y.__webglDepthbuffer[Z],E,!1);else{let ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ie(y.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(E,y,z){let Z=n.get(E);y!==void 0&&ae(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&fe(E)}function We(E){let y=E.texture,z=n.get(E),Z=n.get(y);E.addEventListener("dispose",_);let ee=E.textures,j=E.isWebGLCubeRenderTarget===!0,Ae=ee.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let Me=0;Me<y.mipmaps.length;Me++)z.__webglFramebuffer[pe][Me]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let pe=0,Me=ee.length;pe<Me;pe++){let je=n.get(ee[pe]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Se(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){let Me=ee[pe];z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);let je=r.convert(Me.format,Me.colorSpace),le=r.convert(Me.type),we=S(Me.internalFormat,je,le,Me.colorSpace,E.isXRRenderTarget===!0),Be=te(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,we,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)ae(z.__webglFramebuffer[pe][Me],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else ae(z.__webglFramebuffer[pe],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,Me=ee.length;pe<Me;pe++){let je=ee[pe],le=n.get(je);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Fe(i.TEXTURE_2D,je),ae(z.__webglFramebuffer,E,je,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),p(je)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Z.__webglTexture),Fe(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)ae(z.__webglFramebuffer[Me],E,y,i.COLOR_ATTACHMENT0,pe,Me);else ae(z.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,pe,0);p(y)&&f(pe),t.unbindTexture()}E.depthBuffer&&fe(E)}function J(E){let y=E.textures;for(let z=0,Z=y.length;z<Z;z++){let ee=y[z];if(p(ee)){let j=T(E),Ae=n.get(ee).__webglTexture;t.bindTexture(j,Ae),f(j),t.unbindTexture()}}}let se=[],R=[];function _e(E){if(E.samples>0){if(Se(E)===!1){let y=E.textures,z=E.width,Z=E.height,ee=i.COLOR_BUFFER_BIT,j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(E),pe=y.length>1;if(pe)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);let je=n.get(y[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,ee,i.NEAREST),l===!0&&(se.length=0,R.length=0,se.push(i.COLOR_ATTACHMENT0+Me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(se.push(j),R.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);let je=n.get(y[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function te(E){return Math.min(s.maxSamples,E.samples)}function Se(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(E){let y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Oe(E,y){let z=E.colorSpace,Z=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Hs&&z!==Ei&&(et.getTransfer(z)===lt?(Z!==Bt||ee!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=ne,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=We,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Se}function ev(i,e){function t(n,s=Ei){let r,o=et.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.BYTE;if(n===wu)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===vc)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Yt)return i.FLOAT;if(n===Ht)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===_u)return i.RGB;if(n===Bt)return i.RGBA;if(n===Au)return i.LUMINANCE;if(n===Ru)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===Cu)return i.RED;if(n===Sc)return i.RED_INTEGER;if(n===Pu)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===wc)return i.RGBA_INTEGER;if(n===yo||n===Mo||n===So||n===bo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===al||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===ul)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===wl||n===Tl||n===El||n===_l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Al||n===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===Cl||n===Pl||n===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ql=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fn=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},tv={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dt({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends Ri{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,x=new Yl,p=t.getContextAttributes(),f=null,T=null,S=[],M=[],U=new oe,A=null,_=new Ft;_.viewport=new it;let I=new Ft;I.viewport=new it;let b=[_,I],v=new ql,C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=S[F];return $===void 0&&($=new mr,S[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=S[F];return $===void 0&&($=new mr,S[F]=$),$.getGripSpace()},this.getHand=function(F){let $=S[F];return $===void 0&&($=new mr,S[F]=$),$.getHandSpace()};function O(F){let $=M.indexOf(F.inputSource);if($===-1)return;let ae=S[$];ae!==void 0&&(ae.update(F.inputSource,F.frame,c||o),ae.dispatchEvent({type:F.type,data:F.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let F=0;F<S.length;F++){let $=M[F];$!==null&&(M[F]=null,S[F].disconnect($))}C=null,V=null,x.reset(),e.setRenderTarget(f),m=null,d=null,u=null,s=null,T=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){let $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ut(m.framebufferWidth,m.framebufferHeight,{format:Bt,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,ae=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=p.stencil?Ns:Rs,ae=p.stencil?Ds:Zi);let Te={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ut(d.textureWidth,d.textureHeight,{format:Bt,type:Rn,depthTexture:new No(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(F){for(let $=0;$<F.removed.length;$++){let ae=F.removed[$],ie=M.indexOf(ae);ie>=0&&(M[ie]=null,S[ie].disconnect(ae))}for(let $=0;$<F.added.length;$++){let ae=F.added[$],ie=M.indexOf(ae);if(ie===-1){for(let fe=0;fe<S.length;fe++)if(fe>=M.length){M.push(ae),ie=fe;break}else if(M[fe]===null){M[fe]=ae,ie=fe;break}if(ie===-1)break}let Te=S[ie];Te&&Te.connect(ae)}}let G=new P,ne=new P;function B(F,$,ae){G.setFromMatrixPosition($.matrixWorld),ne.setFromMatrixPosition(ae.matrixWorld);let ie=G.distanceTo(ne),Te=$.projectionMatrix.elements,fe=ae.projectionMatrix.elements,Re=Te[14]/(Te[10]-1),We=Te[14]/(Te[10]+1),J=(Te[9]+1)/Te[5],se=(Te[9]-1)/Te[5],R=(Te[8]-1)/Te[0],_e=(fe[8]+1)/fe[0],te=Re*R,Se=Re*_e,de=ie/(-R+_e),Oe=de*-R;if($.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Oe),F.translateZ(de),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Te[10]===-1)F.projectionMatrix.copy($.projectionMatrix),F.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let be=Re+de,E=We+de,y=te-Oe,z=Se+(ie-Oe),Z=J*We/E*be,ee=se*We/E*be;F.projectionMatrix.makePerspective(y,z,Z,ee,be,E),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ue(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let $=F.near,ae=F.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),v.near=I.near=_.near=$,v.far=I.far=_.far=ae,(C!==v.near||V!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,V=v.far),_.layers.mask=F.layers.mask|2,I.layers.mask=F.layers.mask|4,v.layers.mask=_.layers.mask|I.layers.mask;let ie=F.parent,Te=v.cameras;ue(v,ie);for(let fe=0;fe<Te.length;fe++)ue(Te[fe],ie);Te.length===2?B(v,_,I):v.projectionMatrix.copy(_.projectionMatrix),re(F,v,ie)};function re(F,$,ae){ae===null?F.matrix.copy($.matrixWorld):(F.matrix.copy(ae.matrixWorld),F.matrix.invert(),F.matrix.multiply($.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy($.projectionMatrix),F.projectionMatrixInverse.copy($.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Mr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ce=null;function Fe(F,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ie=!1;ae.length!==v.cameras.length&&(v.cameras.length=0,ie=!0);for(let fe=0;fe<ae.length;fe++){let Re=ae[fe],We=null;if(m!==null)We=m.getViewport(Re);else{let se=u.getViewSubImage(d,Re);We=se.viewport,fe===0&&(e.setRenderTargetTextures(T,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(T))}let J=b[fe];J===void 0&&(J=new Ft,J.layers.enable(fe),J.viewport=new it,b[fe]=J),J.matrix.fromArray(Re.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Re.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(We.x,We.y,We.width,We.height),fe===0&&(v.matrix.copy(J.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ie===!0&&v.cameras.push(J)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let fe=u.getDepthInformation(ae[0]);fe&&fe.isValid&&fe.texture&&x.init(e,fe,s.renderState)}}for(let ae=0;ae<S.length;ae++){let ie=M[ae],Te=S[ae];ie!==null&&Te!==void 0&&Te.update(ie,$,c||o)}ce&&ce(F,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Qe=new Ou;Qe.setAnimationLoop(Fe),this.setAnimationLoop=function(F){ce=F},this.dispose=function(){}}},Hi=new Wn,sv=new vt;function rv(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Fu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,T,S,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,T,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Vt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Vt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let T=e.get(f),S=T.envMap,M=T.envMapRotation;S&&(p.envMap.value=S,Hi.copy(M),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),p.envMapRotation.value.setFromMatrix4(sv.makeRotationFromEuler(Hi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=S*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ov(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){let M=S.program;n.uniformBlockBinding(T,M)}function c(T,S){let M=s[T.id];M===void 0&&(g(T),M=h(T),s[T.id]=M,T.addEventListener("dispose",p));let U=S.program;n.updateUBOMapping(T,U);let A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function h(T){let S=u();T.__bindingPointIndex=S;let M=i.createBuffer(),U=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let S=s[T.id],M=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,_=M.length;A<_;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,v=I.length;b<v;b++){let C=I[b];if(m(C,A,b,U)===!0){let V=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],H=0;for(let K=0;K<O.length;K++){let G=O[K],ne=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,V+H,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,H),H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,S,M,U){let A=T.value,_=S+"_"+M;if(U[_]===void 0)return typeof A=="number"||typeof A=="boolean"?U[_]=A:U[_]=A.clone(),!0;{let I=U[_];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return U[_]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(T){let S=T.uniforms,M=0,U=16;for(let _=0,I=S.length;_<I;_++){let b=Array.isArray(S[_])?S[_]:[S[_]];for(let v=0,C=b.length;v<C;v++){let V=b[v],O=Array.isArray(V.value)?V.value:[V.value];for(let H=0,K=O.length;H<K;H++){let G=O[H],ne=x(G),B=M%U,ue=B%ne.boundary,re=B+ue;M+=ue,re!==0&&U-re<ne.storage&&(M+=U-re),V.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=ne.storage}}}let A=M%U;return A>0&&(M+=U-A),T.__size=M,T.__cache={},this}function x(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){let S=T.target;S.removeEventListener("dispose",p);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Fo=class{constructor(e={}){let{canvas:t=up(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,f=null,T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=_i,this.toneMappingExposure=1;let M=this,U=!1,A=0,_=0,I=null,b=-1,v=null,C=new it,V=new it,O=null,H=new Pe(0),K=0,G=t.width,ne=t.height,B=1,ue=null,re=null,ce=new it(0,0,G,ne),Fe=new it(0,0,G,ne),Qe=!1,F=new wr,$=!1,ae=!1,ie=new vt,Te=new vt,fe=new P,Re=new it,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function se(){return I===null?B:1}let R=n;function _e(w,D){return t.getContext(w,D)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),R===null){let D="webgl2";if(R=_e(D,w),R===null)throw _e(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let te,Se,de,Oe,be,E,y,z,Z,ee,j,Ae,pe,Me,je,le,we,Be,ke,Ee,Je,He,ot,L;function ge(){te=new b0(R),te.init(),He=new ev(R,te),Se=new g0(R,te,e,He),de=new Jx(R,te),Se.reverseDepthBuffer&&d&&de.buffers.depth.setReversed(!0),Oe=new E0(R),be=new Bx,E=new $x(R,te,de,be,Se,He,Oe),y=new v0(M),z=new S0(M),Z=new Lp(R),ot=new p0(R,Z),ee=new w0(R,Z,Oe,ot),j=new A0(R,ee,Z,Oe),ke=new _0(R,Se,E),le=new x0(be),Ae=new Ox(M,y,z,te,Se,ot,le),pe=new rv(M,be),Me=new kx,je=new qx(te),Be=new f0(M,y,z,de,j,m,l),we=new Kx(M,j,Se),L=new ov(R,Oe,Se,de),Ee=new m0(R,te,Oe),Je=new T0(R,te,Oe),Oe.programs=Ae.programs,M.capabilities=Se,M.extensions=te,M.properties=be,M.renderLists=Me,M.shadowMap=we,M.state=de,M.info=Oe}ge();let Y=new Zl(M,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let w=te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(G,ne,!1))},this.getSize=function(w){return w.set(G,ne)},this.setSize=function(w,D,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,ne=D,t.width=Math.floor(w*B),t.height=Math.floor(D*B),W===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(G*B,ne*B).floor()},this.setDrawingBufferSize=function(w,D,W){G=w,ne=D,B=W,t.width=Math.floor(w*W),t.height=Math.floor(D*W),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,D,W,X){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,D,W,X),de.viewport(C.copy(ce).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(Fe)},this.setScissor=function(w,D,W,X){w.isVector4?Fe.set(w.x,w.y,w.z,w.w):Fe.set(w,D,W,X),de.scissor(V.copy(Fe).multiplyScalar(B).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){de.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,D=!0,W=!0){let X=0;if(w){let N=!1;if(I!==null){let he=I.texture.format;N=he===wc||he===bc||he===Sc}if(N){let he=I.texture.type,ye=he===Rn||he===Zi||he===yr||he===Ds||he===yc||he===Mc,Ie=Be.getClearColor(),Le=Be.getClearAlpha(),Ve=Ie.r,qe=Ie.g,Ue=Ie.b;ye?(g[0]=Ve,g[1]=qe,g[2]=Ue,g[3]=Le,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ve,x[1]=qe,x[2]=Ue,x[3]=Le,R.clearBufferiv(R.COLOR,0,x))}else X|=R.COLOR_BUFFER_BIT}D&&(X|=R.DEPTH_BUFFER_BIT),W&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Me.dispose(),je.dispose(),be.dispose(),y.dispose(),z.dispose(),j.dispose(),ot.dispose(),L.dispose(),Ae.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",at),Y.removeEventListener("sessionend",Tt),Et.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let w=Oe.autoReset,D=we.enabled,W=we.autoUpdate,X=we.needsUpdate,N=we.type;ge(),Oe.autoReset=w,we.enabled=D,we.autoUpdate=W,we.needsUpdate=X,we.type=N}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){let D=w.target;D.removeEventListener("dispose",Ge),gt(D)}function gt(w){k(w),be.remove(w)}function k(w){let D=be.get(w).programs;D!==void 0&&(D.forEach(function(W){Ae.releaseProgram(W)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,W,X,N,he){D===null&&(D=We);let ye=N.isMesh&&N.matrixWorld.determinant()<0,Ie=qr(w,D,W,X,N);de.setMaterial(X,ye);let Le=W.index,Ve=1;if(X.wireframe===!0){if(Le=ee.getWireframeAttribute(W),Le===void 0)return;Ve=2}let qe=W.drawRange,Ue=W.attributes.position,nt=qe.start*Ve,ht=(qe.start+qe.count)*Ve;he!==null&&(nt=Math.max(nt,he.start*Ve),ht=Math.min(ht,(he.start+he.count)*Ve)),Le!==null?(nt=Math.max(nt,0),ht=Math.min(ht,Le.count)):Ue!=null&&(nt=Math.max(nt,0),ht=Math.min(ht,Ue.count));let ft=ht-nt;if(ft<0||ft===1/0)return;ot.setup(N,X,Ie,W,Le);let Qt,st=Ee;if(Le!==null&&(Qt=Z.get(Le),st=Je,st.setIndex(Qt)),N.isMesh)X.wireframe===!0?(de.setLineWidth(X.wireframeLinewidth*se()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(N.isLine){let De=X.linewidth;De===void 0&&(De=1),de.setLineWidth(De*se()),N.isLineSegments?st.setMode(R.LINES):N.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else N.isPoints?st.setMode(R.POINTS):N.isSprite&&st.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let De=N._multiDrawStarts,Qn=N._multiDrawCounts,rt=N._multiDrawCount,wn=Le?Z.get(Le).bytesPerElement:1,cs=be.get(X).currentProgram.getUniforms();for(let rn=0;rn<rt;rn++)cs.setValue(R,"_gl_DrawID",rn),st.render(De[rn]/wn,Qn[rn])}else if(N.isInstancedMesh)st.renderInstances(nt,ft,N.count);else if(W.isInstancedBufferGeometry){let De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qn=Math.min(W.instanceCount,De);st.renderInstances(nt,ft,Qn)}else st.render(nt,ft)};function q(w,D,W){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=Vt,w.needsUpdate=!0,sn(w,D,W),w.side=Ai,w.needsUpdate=!0,sn(w,D,W),w.side=An):sn(w,D,W)}this.compile=function(w,D,W=null){W===null&&(W=w),f=je.get(W),f.init(D),S.push(f),W.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),w!==W&&w.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let X=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let he=N.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){let Ie=he[ye];q(Ie,W,N),X.add(Ie)}else q(he,W,N),X.add(he)}),S.pop(),f=null,X},this.compileAsync=function(w,D,W=null){let X=this.compile(w,D,W);return new Promise(N=>{function he(){if(X.forEach(function(ye){be.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){N(w);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ce=null;function Ze(w){Ce&&Ce(w)}function at(){Et.stop()}function Tt(){Et.start()}let Et=new Ou;Et.setAnimationLoop(Ze),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(w){Ce=w,Y.setAnimationLoop(w),w===null?Et.stop():Et.start()},Y.addEventListener("sessionstart",at),Y.addEventListener("sessionend",Tt),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,D,I),f=je.get(w,S.length),f.init(D),S.push(f),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),F.setFromProjectionMatrix(Te),ae=this.localClippingEnabled,$=le.init(this.clippingPlanes,ae),p=Me.get(w,T.length),p.init(),T.push(p),Y.enabled===!0&&Y.isPresenting===!0){let he=M.xr.getDepthSensingMesh();he!==null&&zn(he,D,-1/0,M.sortObjects)}zn(w,D,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(ue,re),J=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,J&&Be.addToRenderList(p,w),this.info.render.frame++,$===!0&&le.beginShadows();let W=f.state.shadowsArray;we.render(W,w,D),$===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=p.opaque,N=p.transmissive;if(f.setupLights(),D.isArrayCamera){let he=D.cameras;if(N.length>0)for(let ye=0,Ie=he.length;ye<Ie;ye++){let Le=he[ye];ct(X,N,w,Le)}J&&Be.render(w);for(let ye=0,Ie=he.length;ye<Ie;ye++){let Le=he[ye];Jn(p,w,Le,Le.viewport)}}else N.length>0&&ct(X,N,w,D),J&&Be.render(w),Jn(p,w,D);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(M,w,D),ot.resetDefaultState(),b=-1,v=null,S.pop(),S.length>0?(f=S[S.length-1],$===!0&&le.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function zn(w,D,W,X){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||F.intersectsSprite(w)){X&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);let ye=j.update(w),Ie=w.material;Ie.visible&&p.push(w,ye,Ie,W,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||F.intersectsObject(w))){let ye=j.update(w),Ie=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Re.copy(ye.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){let Le=ye.groups;for(let Ve=0,qe=Le.length;Ve<qe;Ve++){let Ue=Le[Ve],nt=Ie[Ue.materialIndex];nt&&nt.visible&&p.push(w,ye,nt,W,Re.z,Ue)}}else Ie.visible&&p.push(w,ye,Ie,W,Re.z,null)}}let he=w.children;for(let ye=0,Ie=he.length;ye<Ie;ye++)zn(he[ye],D,W,X)}function Jn(w,D,W,X){let N=w.opaque,he=w.transmissive,ye=w.transparent;f.setupLightsView(W),$===!0&&le.setGlobalState(M.clippingPlanes,W),X&&de.viewport(C.copy(X)),N.length>0&&nn(N,D,W),he.length>0&&nn(he,D,W),ye.length>0&&nn(ye,D,W),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function ct(w,D,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new ut(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ht:Rn,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let he=f.state.transmissionRenderTarget[X.id],ye=X.viewport||C;he.setSize(ye.z,ye.w);let Ie=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(H),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),J&&Be.render(W);let Le=M.toneMapping;M.toneMapping=_i;let Ve=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),$===!0&&le.setGlobalState(M.clippingPlanes,X),nn(w,W,X),E.updateMultisampleRenderTarget(he),E.updateRenderTargetMipmap(he),te.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ue=0,nt=D.length;Ue<nt;Ue++){let ht=D[Ue],ft=ht.object,Qt=ht.geometry,st=ht.material,De=ht.group;if(st.side===An&&ft.layers.test(X.layers)){let Qn=st.side;st.side=Vt,st.needsUpdate=!0,bn(ft,W,X,Qt,st,De),st.side=Qn,st.needsUpdate=!0,qe=!0}}qe===!0&&(E.updateMultisampleRenderTarget(he),E.updateRenderTargetMipmap(he))}M.setRenderTarget(Ie),M.setClearColor(H,K),Ve!==void 0&&(X.viewport=Ve),M.toneMapping=Le}function nn(w,D,W){let X=D.isScene===!0?D.overrideMaterial:null;for(let N=0,he=w.length;N<he;N++){let ye=w[N],Ie=ye.object,Le=ye.geometry,Ve=X===null?ye.material:X,qe=ye.group;Ie.layers.test(W.layers)&&bn(Ie,D,W,Le,Ve,qe)}}function bn(w,D,W,X,N,he){w.onBeforeRender(M,D,W,X,N,he),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(M,D,W,X,w,he),N.transparent===!0&&N.side===An&&N.forceSinglePass===!1?(N.side=Vt,N.needsUpdate=!0,M.renderBufferDirect(W,D,X,N,w,he),N.side=Ai,N.needsUpdate=!0,M.renderBufferDirect(W,D,X,N,w,he),N.side=An):M.renderBufferDirect(W,D,X,N,w,he),w.onAfterRender(M,D,W,X,N,he)}function sn(w,D,W){D.isScene!==!0&&(D=We);let X=be.get(w),N=f.state.lights,he=f.state.shadowsArray,ye=N.state.version,Ie=Ae.getParameters(w,N.state,he,D,W),Le=Ae.getProgramCacheKey(Ie),Ve=X.programs;X.environment=w.isMeshStandardMaterial?D.environment:null,X.fog=D.fog,X.envMap=(w.isMeshStandardMaterial?z:y).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",Ge),Ve=new Map,X.programs=Ve);let qe=Ve.get(Le);if(qe!==void 0){if(X.currentProgram===qe&&X.lightsStateVersion===ye)return ir(w,Ie),qe}else Ie.uniforms=Ae.getUniforms(w),w.onBeforeCompile(Ie,M),qe=Ae.acquireProgram(Ie,Le),Ve.set(Le,qe),X.uniforms=Ie.uniforms;let Ue=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=le.uniform),ir(w,Ie),X.needsLights=rf(w),X.lightsStateVersion=ye,X.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=qe,X.uniformsList=null,qe}function mi(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Ps.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function ir(w,D){let W=be.get(w);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function qr(w,D,W,X,N){D.isScene!==!0&&(D=We),E.resetTextureUnits();let he=D.fog,ye=X.isMeshStandardMaterial?D.environment:null,Ie=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Hs,Le=(X.isMeshStandardMaterial?z:y).get(X.envMap||ye),Ve=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color,ft=_i;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ft=M.toneMapping);let Qt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=Qt!==void 0?Qt.length:0,De=be.get(X),Qn=f.state.lights;if($===!0&&(ae===!0||w!==v)){let cn=w===v&&X.id===b;le.setState(X,w,cn)}let rt=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Qn.state.version||De.outputColorSpace!==Ie||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==Le||X.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==le.numPlanes||De.numIntersection!==le.numIntersection)||De.vertexAlphas!==Ve||De.vertexTangents!==qe||De.morphTargets!==Ue||De.morphNormals!==nt||De.morphColors!==ht||De.toneMapping!==ft||De.morphTargetsCount!==st)&&(rt=!0):(rt=!0,De.__version=X.version);let wn=De.currentProgram;rt===!0&&(wn=sn(X,D,N));let cs=!1,rn=!1,sr=!1,pt=wn.getUniforms(),kn=De.uniforms;if(de.useProgram(wn.program)&&(cs=!0,rn=!0,sr=!0),X.id!==b&&(b=X.id,rn=!0),cs||v!==w){de.buffers.depth.getReversed()?(ie.copy(w.projectionMatrix),fp(ie),pp(ie),pt.setValue(R,"projectionMatrix",ie)):pt.setValue(R,"projectionMatrix",w.projectionMatrix),pt.setValue(R,"viewMatrix",w.matrixWorldInverse);let xi=pt.map.cameraPosition;xi!==void 0&&xi.setValue(R,fe.setFromMatrixPosition(w.matrixWorld)),Se.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,rn=!0,sr=!0)}if(N.isSkinnedMesh){pt.setOptional(R,N,"bindMatrix"),pt.setOptional(R,N,"bindMatrixInverse");let cn=N.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),pt.setValue(R,"boneTexture",cn.boneTexture,E))}N.isBatchedMesh&&(pt.setOptional(R,N,"batchingTexture"),pt.setValue(R,"batchingTexture",N._matricesTexture,E),pt.setOptional(R,N,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",N._indirectTexture,E),pt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",N._colorsTexture,E));let rr=W.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&ke.update(N,W,wn),(rn||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,pt.setValue(R,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(kn.envMap.value=Le,kn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&D.environment!==null&&(kn.envMapIntensity.value=D.environmentIntensity),rn&&(pt.setValue(R,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&gi(kn,sr),he&&X.fog===!0&&pe.refreshFogUniforms(kn,he),pe.refreshMaterialUniforms(kn,X,B,ne,f.state.transmissionRenderTarget[w.id]),Ps.upload(R,mi(De),kn,E)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ps.upload(R,mi(De),kn,E),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(R,"center",N.center),pt.setValue(R,"modelViewMatrix",N.modelViewMatrix),pt.setValue(R,"normalMatrix",N.normalMatrix),pt.setValue(R,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let cn=X.uniformsGroups;for(let xi=0,vi=cn.length;xi<vi;xi++){let lh=cn[xi];L.update(lh,wn),L.bind(lh,wn)}}return wn}function gi(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function rf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,D,W){be.get(w.texture).__webglTexture=D,be.get(w.depthTexture).__webglTexture=W;let X=be.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let W=be.get(w);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,W=0){I=w,A=D,_=W;let X=!0,N=null,he=!1,ye=!1;if(w){let Le=be.get(w);if(Le.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(Le.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Le.__hasExternalTextures)E.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ue=w.depthTexture;if(Le.__boundDepthTexture!==Ue){if(Ue!==null&&be.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);let qe=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[D])?N=qe[D][W]:N=qe[D],he=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?N=be.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?N=qe[W]:N=qe,C.copy(w.viewport),V.copy(w.scissor),O=w.scissorTest}else C.copy(ce).multiplyScalar(B).floor(),V.copy(Fe).multiplyScalar(B).floor(),O=Qe;if(de.bindFramebuffer(R.FRAMEBUFFER,N)&&X&&de.drawBuffers(w,N),de.viewport(C),de.scissor(V),de.setScissorTest(O),he){let Le=be.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,Le.__webglTexture,W)}else if(ye){let Le=be.get(w.texture),Ve=D||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Le.__webglTexture,W||0,Ve)}b=-1},this.readRenderTargetPixels=function(w,D,W,X,N,he,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie){de.bindFramebuffer(R.FRAMEBUFFER,Ie);try{let Le=w.texture,Ve=Le.format,qe=Le.type;if(!Se.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-X&&W>=0&&W<=w.height-N&&R.readPixels(D,W,X,N,He.convert(Ve),He.convert(qe),he)}finally{let Le=I!==null?be.get(I).__webglFramebuffer:null;de.bindFramebuffer(R.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,D,W,X,N,he,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie){let Le=w.texture,Ve=Le.format,qe=Le.type;if(!Se.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-X&&W>=0&&W<=w.height-N){de.bindFramebuffer(R.FRAMEBUFFER,Ie);let Ue=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ue),R.bufferData(R.PIXEL_PACK_BUFFER,he.byteLength,R.STREAM_READ),R.readPixels(D,W,X,N,He.convert(Ve),He.convert(qe),0);let nt=I!==null?be.get(I).__webglFramebuffer:null;de.bindFramebuffer(R.FRAMEBUFFER,nt);let ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await dp(R,ht,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ue),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,he),R.deleteBuffer(Ue),R.deleteSync(ht),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,W=0){w.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let X=Math.pow(2,-W),N=Math.floor(w.image.width*X),he=Math.floor(w.image.height*X),ye=D!==null?D.x:0,Ie=D!==null?D.y:0;E.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,ye,Ie,N,he),de.unbindTexture()},this.copyTextureToTexture=function(w,D,W=null,X=null,N=0){w.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],D=arguments[2],N=arguments[3]||0,W=null);let he,ye,Ie,Le,Ve,qe,Ue,nt,ht,ft=w.isCompressedTexture?w.mipmaps[N]:w.image;W!==null?(he=W.max.x-W.min.x,ye=W.max.y-W.min.y,Ie=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Ve=W.min.y,qe=W.isBox3?W.min.z:0):(he=ft.width,ye=ft.height,Ie=ft.depth||1,Le=0,Ve=0,qe=0),X!==null?(Ue=X.x,nt=X.y,ht=X.z):(Ue=0,nt=0,ht=0);let Qt=He.convert(D.format),st=He.convert(D.type),De;D.isData3DTexture?(E.setTexture3D(D,0),De=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),De=R.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),De=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);let Qn=R.getParameter(R.UNPACK_ROW_LENGTH),rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),wn=R.getParameter(R.UNPACK_SKIP_PIXELS),cs=R.getParameter(R.UNPACK_SKIP_ROWS),rn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ft.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ft.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ve),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qe);let sr=w.isDataArrayTexture||w.isData3DTexture,pt=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let kn=be.get(w),rr=be.get(D),cn=be.get(kn.__renderTarget),xi=be.get(rr.__renderTarget);de.bindFramebuffer(R.READ_FRAMEBUFFER,cn.__webglFramebuffer),de.bindFramebuffer(R.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let vi=0;vi<Ie;vi++)sr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(w).__webglTexture,N,qe+vi),w.isDepthTexture?(pt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(D).__webglTexture,N,ht+vi),R.blitFramebuffer(Le,Ve,he,ye,Ue,nt,he,ye,R.DEPTH_BUFFER_BIT,R.NEAREST)):pt?R.copyTexSubImage3D(De,N,Ue,nt,ht+vi,Le,Ve,he,ye):R.copyTexSubImage2D(De,N,Ue,nt,ht+vi,Le,Ve,he,ye);de.bindFramebuffer(R.READ_FRAMEBUFFER,null),de.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else pt?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(De,N,Ue,nt,ht,he,ye,Ie,Qt,st,ft.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(De,N,Ue,nt,ht,he,ye,Ie,Qt,ft.data):R.texSubImage3D(De,N,Ue,nt,ht,he,ye,Ie,Qt,st,ft):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Ue,nt,he,ye,Qt,st,ft.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Ue,nt,ft.width,ft.height,Qt,ft.data):R.texSubImage2D(R.TEXTURE_2D,N,Ue,nt,he,ye,Qt,st,ft);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,wn),R.pixelStorei(R.UNPACK_SKIP_ROWS,cs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,rn),N===0&&D.generateMipmaps&&R.generateMipmap(De),de.unbindTexture()},this.copyTextureToTexture3D=function(w,D,W=null,X=null,N=0){return w.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],D=arguments[3],N=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,W,X,N)},this.initRenderTarget=function(w){be.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){A=0,_=0,I=null,de.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var tn=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Bs=class extends Zt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=At,h=At,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(o-h)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],o=[],a=new P,l=new vt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Nt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Nt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Tr=class extends mn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kl=class extends Tr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,m*=h,s(o,a,d,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var mo=new P,Ha=new _c,Ga=new _c,Wa=new _c,jl=class extends mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(mo.subVectors(s[0],s[1]).add(s[0]),c=mo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Ha.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),Ga.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),Wa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ga.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ha.calc(l),Ga.calc(l),Wa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function av(i,e){let t=1-i;return t*t*e}function lv(i,e){return 2*(1-i)*i*e}function cv(i,e){return i*i*e}function gr(i,e,t,n){return av(i,e)+lv(i,t)+cv(i,n)}function hv(i,e){let t=1-i;return t*t*t*e}function uv(i,e){let t=1-i;return 3*t*t*i*e}function dv(i,e){return 3*(1-i)*i*i*e}function fv(i,e){return i*i*i*e}function xr(i,e,t,n,s){return hv(i,e)+uv(i,t)+dv(i,n)+fv(i,s)}var Oo=class extends mn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jl=class extends mn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y),xr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bo=class extends mn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ql=class extends mn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends mn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,s.x,r.x,o.x),gr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$l=class extends mn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,s.x,r.x,o.x),gr(e,s.y,r.y,o.y),gr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cu(a,l.x,c.x,h.x,u.x),cu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},ec=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:jl,CubicBezierCurve:Oo,CubicBezierCurve3:Jl,EllipseCurve:Tr,LineCurve:Bo,LineCurve3:Ql,QuadraticBezierCurve:zo,QuadraticBezierCurve3:$l,SplineCurve:ko}),tc=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ec[s.type]().fromJSON(s))}return this}},Ji=class extends tc{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Bo(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new zo(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Oo(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ko(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Tr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Pi=class i extends ln{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,x=[],p=n/2,f=0;T(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(m,2));function T(){let M=new P,U=new P,A=0,_=(t-e)/n;for(let I=0;I<=r;I++){let b=[],v=I/r,C=v*(t-e)+e;for(let V=0;V<=s;V++){let O=V/s,H=O*l+a,K=Math.sin(H),G=Math.cos(H);U.x=C*K,U.y=-v*n+p,U.z=C*G,u.push(U.x,U.y,U.z),M.set(K,_,G).normalize(),d.push(M.x,M.y,M.z),m.push(O,1-v),b.push(g++)}x.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let v=x[b][I],C=x[b+1][I],V=x[b+1][I+1],O=x[b][I+1];(e>0||b!==0)&&(h.push(v,C,O),A+=3),(t>0||b!==r-1)&&(h.push(C,V,O),A+=3)}c.addGroup(f,A,0),f+=A}function S(M){let U=g,A=new oe,_=new P,I=0,b=M===!0?e:t,v=M===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,p*v,0),d.push(0,v,0),m.push(.5,.5),g++;let C=g;for(let V=0;V<=s;V++){let H=V/s*l+a,K=Math.cos(H),G=Math.sin(H);_.x=b*G,_.y=p*v,_.z=b*K,u.push(_.x,_.y,_.z),d.push(0,v,0),A.x=K*.5+.5,A.y=G*.5*v+.5,m.push(A.x,A.y),g++}for(let V=0;V<s;V++){let O=U+V,H=C+V;M===!0?h.push(H,H+1,O):h.push(H+1,H,O),I+=3}c.addGroup(f,I,M===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vo=class i extends Pi{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var zs=class extends Ji{constructor(e){super(e),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ji().fromJSON(s))}return this}},pv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,m;if(n&&(r=yv(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Er(r,o,t,a,l,m,0),o}};function Hu(i,e,t,n,s){let r,o;if(s===Pv(i,e,t,n)>0)for(r=e;r<t;r+=n)o=hu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=hu(r,i[r],i[r+1],o);return o&&Jo(o,o.next)&&(Ar(o),o=o.next),o}function Qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Jo(t,t.next)||yt(t.prev,t,t.next)===0)){if(Ar(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Er(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Tv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?gv(i,n,s,r):mv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ar(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=xv(Qi(i),e,t),Er(i,e,t,n,s,r,2)):o===2&&vv(i,e,t,n,s,r):Er(Qi(i),e,t,n,s,r,1);break}}}function mv(i){let e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&_s(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(yt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,f=nc(m,g,e,t,n),T=nc(x,p,e,t,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=f&&M&&M.z<=T;){if(S.x>=m&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&_s(a,h,l,u,c,d,S.x,S.y)&&yt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=m&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&_s(a,h,l,u,c,d,M.x,M.y)&&yt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=f;){if(S.x>=m&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&_s(a,h,l,u,c,d,S.x,S.y)&&yt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=T;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&_s(a,h,l,u,c,d,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function xv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Jo(s,r)&&Gu(s,n,n.next,r)&&_r(s,r)&&_r(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ar(n),Ar(n.next),n=i=r),n=n.next}while(n!==i);return Qi(n)}function vv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Av(o,a)){let l=Wu(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Er(o,e,t,n,s,r,0),Er(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function yv(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Hu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(_v(c));for(s.sort(Mv),r=0;r<s.length;r++)t=Sv(s[r],t);return t}function Mv(i,e){return i.x-e.x}function Sv(i,e){let t=bv(i,e);if(!t)return e;let n=Wu(t,i);return Qi(n,n.next),Qi(t,t.next)}function bv(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&_s(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),_r(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&wv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function wv(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function Tv(i,e,t,n){let s=i;do s.z===0&&(s.z=nc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ev(s)}function Ev(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function nc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _v(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _s(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Av(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rv(i,e)&&(_r(i,e)&&_r(e,i)&&Cv(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Jo(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Jo(i,e){return i.x===e.x&&i.y===e.y}function Gu(i,e,t,n){let s=xo(yt(i,e,t)),r=xo(yt(i,e,n)),o=xo(yt(t,n,i)),a=xo(yt(t,n,e));return!!(s!==r&&o!==a||s===0&&go(i,t,e)||r===0&&go(i,n,e)||o===0&&go(t,i,n)||a===0&&go(t,e,n))}function go(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xo(i){return i>0?1:i<0?-1:0}function Rv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _r(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function Cv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Wu(i,e){let t=new ic(i.i,i.x,i.y),n=new ic(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hu(i,e,t,n){let s=new ic(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ic(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var vr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];uu(e),du(n,e);let o=e.length;t.forEach(uu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,du(n,t[l]);let a=pv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function du(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Rr=class i extends ln{constructor(e=new zs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Iv,S,M=!1,U,A,_,I;f&&(S=f.getSpacedPoints(h),M=!0,d=!1,U=f.computeFrenetFrames(h,!1),A=new P,_=new P,I=new P),d||(p=0,m=0,g=0,x=0);let b=a.extractPoints(c),v=b.shape,C=b.holes;if(!vr.isClockWise(v)){v=v.reverse();for(let J=0,se=C.length;J<se;J++){let R=C[J];vr.isClockWise(R)&&(C[J]=R.reverse())}}let O=vr.triangulateShape(v,C),H=v;for(let J=0,se=C.length;J<se;J++){let R=C[J];v=v.concat(R)}function K(J,se,R){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(se,R)}let G=v.length,ne=O.length;function B(J,se,R){let _e,te,Se,de=J.x-se.x,Oe=J.y-se.y,be=R.x-J.x,E=R.y-J.y,y=de*de+Oe*Oe,z=de*E-Oe*be;if(Math.abs(z)>Number.EPSILON){let Z=Math.sqrt(y),ee=Math.sqrt(be*be+E*E),j=se.x-Oe/Z,Ae=se.y+de/Z,pe=R.x-E/ee,Me=R.y+be/ee,je=((pe-j)*E-(Me-Ae)*be)/(de*E-Oe*be);_e=j+de*je-J.x,te=Ae+Oe*je-J.y;let le=_e*_e+te*te;if(le<=2)return new oe(_e,te);Se=Math.sqrt(le/2)}else{let Z=!1;de>Number.EPSILON?be>Number.EPSILON&&(Z=!0):de<-Number.EPSILON?be<-Number.EPSILON&&(Z=!0):Math.sign(Oe)===Math.sign(E)&&(Z=!0),Z?(_e=-Oe,te=de,Se=Math.sqrt(y)):(_e=de,te=Oe,Se=Math.sqrt(y/2))}return new oe(_e/Se,te/Se)}let ue=[];for(let J=0,se=H.length,R=se-1,_e=J+1;J<se;J++,R++,_e++)R===se&&(R=0),_e===se&&(_e=0),ue[J]=B(H[J],H[R],H[_e]);let re=[],ce,Fe=ue.concat();for(let J=0,se=C.length;J<se;J++){let R=C[J];ce=[];for(let _e=0,te=R.length,Se=te-1,de=_e+1;_e<te;_e++,Se++,de++)Se===te&&(Se=0),de===te&&(de=0),ce[_e]=B(R[_e],R[Se],R[de]);re.push(ce),Fe=Fe.concat(ce)}for(let J=0;J<p;J++){let se=J/p,R=m*Math.cos(se*Math.PI/2),_e=g*Math.sin(se*Math.PI/2)+x;for(let te=0,Se=H.length;te<Se;te++){let de=K(H[te],ue[te],_e);ie(de.x,de.y,-R)}for(let te=0,Se=C.length;te<Se;te++){let de=C[te];ce=re[te];for(let Oe=0,be=de.length;Oe<be;Oe++){let E=K(de[Oe],ce[Oe],_e);ie(E.x,E.y,-R)}}}let Qe=g+x;for(let J=0;J<G;J++){let se=d?K(v[J],Fe[J],Qe):v[J];M?(_.copy(U.normals[0]).multiplyScalar(se.x),A.copy(U.binormals[0]).multiplyScalar(se.y),I.copy(S[0]).add(_).add(A),ie(I.x,I.y,I.z)):ie(se.x,se.y,0)}for(let J=1;J<=h;J++)for(let se=0;se<G;se++){let R=d?K(v[se],Fe[se],Qe):v[se];M?(_.copy(U.normals[J]).multiplyScalar(R.x),A.copy(U.binormals[J]).multiplyScalar(R.y),I.copy(S[J]).add(_).add(A),ie(I.x,I.y,I.z)):ie(R.x,R.y,u/h*J)}for(let J=p-1;J>=0;J--){let se=J/p,R=m*Math.cos(se*Math.PI/2),_e=g*Math.sin(se*Math.PI/2)+x;for(let te=0,Se=H.length;te<Se;te++){let de=K(H[te],ue[te],_e);ie(de.x,de.y,u+R)}for(let te=0,Se=C.length;te<Se;te++){let de=C[te];ce=re[te];for(let Oe=0,be=de.length;Oe<be;Oe++){let E=K(de[Oe],ce[Oe],_e);M?ie(E.x,E.y+S[h-1].y,S[h-1].x+R):ie(E.x,E.y,u+R)}}}F(),$();function F(){let J=s.length/3;if(d){let se=0,R=G*se;for(let _e=0;_e<ne;_e++){let te=O[_e];Te(te[2]+R,te[1]+R,te[0]+R)}se=h+p*2,R=G*se;for(let _e=0;_e<ne;_e++){let te=O[_e];Te(te[0]+R,te[1]+R,te[2]+R)}}else{for(let se=0;se<ne;se++){let R=O[se];Te(R[2],R[1],R[0])}for(let se=0;se<ne;se++){let R=O[se];Te(R[0]+G*h,R[1]+G*h,R[2]+G*h)}}n.addGroup(J,s.length/3-J,0)}function $(){let J=s.length/3,se=0;ae(H,se),se+=H.length;for(let R=0,_e=C.length;R<_e;R++){let te=C[R];ae(te,se),se+=te.length}n.addGroup(J,s.length/3-J,1)}function ae(J,se){let R=J.length;for(;--R>=0;){let _e=R,te=R-1;te<0&&(te=J.length-1);for(let Se=0,de=h+p*2;Se<de;Se++){let Oe=G*Se,be=G*(Se+1),E=se+_e+Oe,y=se+te+Oe,z=se+te+be,Z=se+_e+be;fe(E,y,z,Z)}}}function ie(J,se,R){l.push(J),l.push(se),l.push(R)}function Te(J,se,R){Re(J),Re(se),Re(R);let _e=s.length/3,te=T.generateTopUV(n,s,_e-3,_e-2,_e-1);We(te[0]),We(te[1]),We(te[2])}function fe(J,se,R,_e){Re(J),Re(se),Re(_e),Re(se),Re(R),Re(_e);let te=s.length/3,Se=T.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);We(Se[0]),We(Se[1]),We(Se[3]),We(Se[1]),We(Se[2]),We(Se[3])}function Re(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function We(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Lv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ec[s.type]().fromJSON(s)),new i(n,e.options)}},Iv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],m=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-u),new oe(d,1-g),new oe(x,1-f)]:[new oe(a,1-l),new oe(h,1-u),new oe(m,1-g),new oe(p,1-f)]}};function Lv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Cr=class i extends ln{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,m=[],g=[],x=[],p=[];for(let f=0;f<=n;f++){let T=[],S=f/n,M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let U=0;U<=t;U++){let A=U/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(A+M,1-S),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){let S=h[f][T+1],M=h[f][T],U=h[f+1][T],A=h[f+1][T+1];(f!==0||o>0)&&m.push(S,M,A),(f!==n-1||l<Math.PI)&&m.push(M,U,A)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pr=class i extends ln{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let x=g/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let x=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,T=(s+1)*m+g;o.push(x,p,T),o.push(p,f,T)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Cn=class extends ji{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ks=class extends Cn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function vo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sc=class extends Vs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=e,a=2*t-n;break;case ph:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=e,l=2*n-t;break;case ph:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,f=-d*p+2*d*x-d*g,T=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-m)*p+(1.5+m)*x+.5*g,M=m*p-m*x;for(let U=0;U!==a;++U)r[U]=f*o[h+U]+T*o[c+U]+S*o[l+U]+M*o[u+U];return r}},rc=class extends Vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},oc=class extends Vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case Ll:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Uv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ma,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ll;var $i=class extends Pn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Eo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Pn{};ac.prototype.ValueTypeName="color";var lc=class extends Pn{};lc.prototype.ValueTypeName="number";var cc=class extends Vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ho=class extends Pn{InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Pn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Eo;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends Pn{};hc.prototype.ValueTypeName="vector";var uc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Dv=new uc,dc=class{constructor(e){this.manager=e!==void 0?e:Dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Go=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Xa=new vt,fu=new P,pu=new P,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pu),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var mu=new vt,hr=new P,qa=new P,fc=class extends Wo{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu)}},Xo=class extends Go{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},pc=class extends Wo{constructor(){super(new en(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new pc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function gu(){return performance.now()}var Ac="\\[\\]\\.:\\/",Nv=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",Fv="[^"+Ac.replace("\\.","")+"]",Ov=/((?:WC+[\/:])*)/.source.replace("WC",Rc),Bv=/(WCOD+)?/.source.replace("WCOD",Fv),zv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),kv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),Vv=new RegExp("^"+Ov+Bv+zv+kv+"$"),Hv=["material","materials","bones","map"],mc=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nv,"")}static parseTrackName(e){let t=Vv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=mc;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PM=new Float32Array(1);var xu=new vt,Yo=class{constructor(e,t,n=0,s=1/0){this.ray=new Po(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(e,t=!0,n=[]){return gc(e,this,n,t),n.sort(vu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)gc(e[s],this,n,t);return n.sort(vu),n}};function vu(i,e){return i.distance-e.distance}function gc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)gc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);var Qo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Gv=new en(-1,1,1,-1,0,1),Cc=class extends ln{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}},Wv=new Cc,Xs=class{constructor(e){this._mesh=new Ne(Wv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qs=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gs.clone(e.uniforms),this.material=new dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Xs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Dr=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},$o=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ea=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qs(Qo),this.copyPass.material.blending=Gn,this.clock=new qo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dr!==void 0&&(o instanceof Dr?n=!0:o instanceof $o&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ta=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Xu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ii=class i extends In{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ut(r,o,{type:Ht}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ut(r,o,{type:Ht});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new ut(r,o,{type:Ht});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=Xu;this.highPassUniforms=Gs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Qo;this.copyUniforms=Gs.clone(h.uniforms),this.blendMaterial=new dt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:To,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new Xn,this.fsQuad=new Xs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ii.BlurDirectionX=new oe(1,0);Ii.BlurDirectionY=new oe(0,1);var Nr=new P;function gn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Nr.copy(e),Nr[n]=0,Nr.normalize();let c=.5*o/(o+a),h=1-Nr.angleTo(i)/l;return Math.sign(Nr[t])===1?h*c:a/(o+a)+c+c*(1-h)}var li=class extends ai{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new P,l=new P,c=new P(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,g=new P,x=.5/s;for(let p=0,f=0;p<h.length;p+=3,f+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=gn(g,l,"z","y",r,n),d[f+1]=1-gn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-gn(g,l,"z","y",r,n),d[f+1]=1-gn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-gn(g,l,"x","z",r,e),d[f+1]=gn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-gn(g,l,"x","z",r,e),d[f+1]=1-gn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-gn(g,l,"x","y",r,e),d[f+1]=1-gn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=gn(g,l,"x","y",r,e),d[f+1]=1-gn(g,l,"y","x",r,t);break}}};var na=class extends tn{constructor(){super();let e=new ai;e.deleteAttribute("uv");let t=new Cn({side:Vt}),n=new Cn,s=new Xo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ne(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ne(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Ne(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Ne(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Ne(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Ne(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Ne(e,Ys(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let m=new Ne(e,Ys(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let g=new Ne(e,Ys(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Ne(e,Ys(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new Ne(e,Ys(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let f=new Ne(e,Ys(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ys(i){let e=new Xn;return e.color.setScalar(i),e}var Xv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,qv=`
  uniform vec3 uBg;
  uniform vec3 uGlow;
  uniform vec2 uStage;
  uniform vec2 uCenter;
  uniform float uRadius;
  uniform float uAmount;
  varying vec2 vUv;
  void main() {
    vec2 p = vec2(vUv.x, 1.0 - vUv.y) * uStage;
    float d = length(p - uCenter) / max(uRadius, 1.0);
    gl_FragColor = vec4(mix(uBg, uGlow, uAmount * exp(-d * d)), 1.0);
  }
`;function qu({width:i=1920,height:e=1080}={}){let t={uBg:{value:new Pe},uGlow:{value:new Pe},uStage:{value:new oe(i,e)},uCenter:{value:new oe(i/2,e/2)},uRadius:{value:500},uAmount:{value:0}},n=new dt({vertexShader:Xv,fragmentShader:qv,uniforms:t,depthTest:!1,depthWrite:!1}),s=new Ne(new Kt(2,2),n);return s.frustumCulled=!1,s.renderOrder=-10,s.visible=!1,{mesh:s,setTheme(r){t.uBg.value.set(r.bg),t.uGlow.value.set(r.bg).lerp(new Pe(r.dark?r.ink3:"#ffffff"),r.dark?.035:1)},update({x:r,y:o,radius:a,amount:l}){t.uCenter.value.set(r,o),t.uRadius.value=a,t.uAmount.value=l,s.visible=l>.001}}}function Pc(i={}){let e=new ks({roughness:.42,metalness:.25,clearcoat:.6,transparent:!0,...i}),t={value:0},n={value:new Pe(1,1,1)};return e.userData.rim=t,e.userData.rimColor=n,e.onBeforeCompile=s=>{s.uniforms.uRim=t,s.uniforms.uRimColor=n,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRim;
uniform vec3 uRimColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float rimEdge = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0) * uRim;
        totalEmissiveRadiance += uRimColor * rimEdge;
        diffuseColor.a = clamp(diffuseColor.a + 0.6 * rimEdge, 0.0, 1.0);`)},e}var Yu=new URLSearchParams(location.search).get("clock")==="manual",Ic=0,Gt={manual:Yu,now:()=>Yu?Ic:performance.now()/1e3,set(i){Ic=i},step(i){Ic+=i}};var Xe=224,Yv=2,xn=Xe*Yv,Ks=8,js=6,Lc=64,bt={ball:1,cylinder:2,box:3,torus:4,cone:5,thread:6,corner:7,disc:8,hex:9},Zv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Kv=`
  precision highp float;
  varying vec2 vUv;
  uniform float uFov;
  uniform float uDepth;
  uniform vec3 uPose;
  uniform vec4 uPa[${Ks}];
  uniform vec4 uPb[${Ks}];
  uniform int uCount;
  const float BIG = 1000.0;

  float flatTop(float d, float bevel) {
    return d < 0.0 ? max(d + bevel, 0.0) : BIG;
  }

  float prim(vec4 a, vec4 b, vec2 q) {
    int kind = int(a.x + 0.5);
    vec2 d = q - a.yz;
    float c = cos(a.w), s = sin(a.w);
    vec2 l = vec2(d.x * c + d.y * s, -d.x * s + d.y * c);
    float h = BIG;
    if (kind == 1) {
      float r2 = dot(d, d);
      h = r2 < b.x * b.x ? b.x - sqrt(b.x * b.x - r2) : BIG;
    } else if (kind == 2) {
      h = (abs(l.y) < b.x && abs(l.x) < b.y) ? b.x - sqrt(b.x * b.x - l.y * l.y) : BIG;
    } else if (kind == 3) {
      h = flatTop(max(abs(l.x) - b.x, abs(l.y) - b.y), b.z);
    } else if (kind == 4) {
      float r = length(d) - b.x;
      h = abs(r) < b.y ? b.y - sqrt(b.y * b.y - r * r) : BIG;
    } else if (kind == 5) {
      float r = length(d);
      h = r < b.y ? b.x * r : BIG;
    } else if (kind == 6) {
      float ridge = 0.25 * (1.0 - abs(fract((l.x + 0.35 * l.y) / b.y) * 2.0 - 1.0));
      float base = abs(l.y) < b.x ? b.x - sqrt(b.x * b.x - l.y * l.y) : BIG;
      h = abs(l.x) < b.z ? base + ridge : BIG;
    } else if (kind == 7) {
      float m = -BIG;
      for (int k = 0; k < 3; k++) {
        float t = a.w + float(k) * 2.0943951;
        m = max(m, 1.41421356 * (d.x * cos(t) + d.y * sin(t)));
      }
      h = m < b.x ? m : BIG;
    } else if (kind == 8) {
      h = flatTop(length(d) - b.x, b.y);
    } else if (kind == 9) {
      vec2 v = abs(l);
      float dd = max(dot(v, vec2(0.8660254, 0.5)), v.y) - b.x;
      if (b.z > 0.0) dd = max(dd, b.z - length(d));
      h = flatTop(dd, b.y);
    }
    return h + b.w;
  }

  void main() {
    vec2 p = vec2(vUv.x - 0.5, 0.5 - vUv.y) * uFov;
    vec2 q = p - uPose.xy;
    float c = cos(uPose.z), s = sin(uPose.z);
    q = vec2(q.x * c + q.y * s, -q.x * s + q.y * c);
    float h = BIG;
    for (int i = 0; i < ${Ks}; i++) {
      if (i >= uCount) break;
      h = min(h, prim(uPa[i], uPb[i], q));
    }
    gl_FragColor = vec4(max(uDepth - h, 0.0), h, 0.0, 1.0);
  }
`,jv=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTex;
  uniform vec2 uStep;
  uniform float uSigma;
  void main() {
    float sum = 0.0, wsum = 0.0;
    float radius = min(ceil(uSigma * 3.0), ${Lc}.0);
    for (int i = -${Lc}; i <= ${Lc}; i++) {
      float x = float(i);
      if (abs(x) > radius) continue;
      float w = exp(-0.5 * x * x / (uSigma * uSigma));
      sum += w * texture2D(uTex, vUv + uStep * x).r;
      wsum += w;
    }
    gl_FragColor = vec4(sum / wsum, 0.0, 0.0, 1.0);
  }
`,Jv=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uContact;
  uniform sampler2D uBlurred;
  void main() {
    gl_FragColor = vec4(max(texture2D(uContact, vUv).r, texture2D(uBlurred, vUv).r), 0.0, 0.0, 1.0);
  }
`,Ku=`
  vec3 membraneNormal(sampler2D tex, vec2 uv, vec2 texel, float px) {
    float gx = (texture2D(tex, uv + vec2(texel.x, 0.0)).r - texture2D(tex, uv - vec2(texel.x, 0.0)).r) / (2.0 * px);
    float gy = (texture2D(tex, uv - vec2(0.0, texel.y)).r - texture2D(tex, uv + vec2(0.0, texel.y)).r) / (2.0 * px);
    return normalize(vec3(-gx, -gy, 1.0));
  }
`,Qv=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uU;
  uniform vec2 uTexel;
  uniform float uPx;
  uniform vec3 uLdir[${js}];
  uniform vec3 uLcol[${js}];
  uniform int uLights;
  uniform float uKd, uKs, uShin, uAmb, uFall, uVig, uGain;
  uniform int uMap;
  uniform sampler2D uIllum;
  uniform vec3 uAlpha;
  uniform float uGamma;
  ${Ku}
  // One colour channel of a fitted sensor: how it changes with the normal,
  // 1 on a flat membrane (alpha: the share that does not change at all).
  float channel(vec3 n, vec3 l, float alpha) {
    vec3 hv = normalize(l + vec3(0.0, 0.0, 1.0));
    float num = max(dot(n, l), 0.0) + uKs * pow(max(dot(n, hv), 0.0), uShin);
    float den = l.z + uKs * pow(hv.z, uShin);
    return alpha + (1.0 - alpha) * num / den;
  }
  void main() {
    vec3 n = membraneNormal(uU, vUv, uTexel, uPx);
    if (uMap == 1) {
      vec3 ratio = vec3(channel(n, uLdir[0], uAlpha.x), channel(n, uLdir[1], uAlpha.y), channel(n, uLdir[2], uAlpha.z));
      gl_FragColor = vec4(clamp(texture2D(uIllum, vUv).rgb * pow(max(ratio, 0.0), vec3(uGamma)), 0.0, 1.0), 1.0);
      return;
    }
    vec2 pn = vec2(vUv.x - 0.5, 0.5 - vUv.y) * 2.0;
    vec3 img = vec3(uAmb);
    for (int i = 0; i < ${js}; i++) {
      if (i >= uLights) break;
      vec3 l = uLdir[i];
      vec3 hv = normalize(l + vec3(0.0, 0.0, 1.0));
      float ndl = max(dot(n, l), 0.0);
      float spec = pow(max(dot(n, hv), 0.0), uShin);
      float side = max(1.0 + uFall * dot(pn, normalize(l.xy + vec2(1e-6, 0.0))), 0.1);
      img += (uKd * ndl + uKs * spec) * side * uLcol[i];
    }
    img *= 1.0 - uVig * dot(pn, pn);
    gl_FragColor = vec4(clamp(img * uGain, 0.0, 1.0), 1.0);
  }
`,$v=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uShaded;
  uniform vec2 uTexel;
  uniform float uSigma;
  uniform float uNoise;
  uniform float uSeed;
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031 + uSeed * 0.137);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  void main() {
    vec3 sum = vec3(0.0);
    float wsum = 0.0;
    for (int j = -4; j < 4; j++) {
      for (int i = -4; i < 4; i++) {
        vec2 o = vec2(float(i) + 0.5, float(j) + 0.5);
        float w = exp(-0.5 * dot(o, o) / (uSigma * uSigma));
        sum += w * texture2D(uShaded, vUv + o * uTexel).rgb;
        wsum += w;
      }
    }
    vec3 img = sum / wsum;
    vec2 px = floor(vUv * ${Xe}.0);
    // Sum of three uniforms: close to Gaussian, deterministic for a seed.
    vec3 noise = vec3(
      hash(px + 0.0) + hash(px + 17.0) + hash(px + 31.0),
      hash(px + 47.0) + hash(px + 59.0) + hash(px + 73.0),
      hash(px + 89.0) + hash(px + 101.0) + hash(px + 113.0)) - 1.5;
    gl_FragColor = vec4(clamp(img + noise * 2.0 * uNoise / 255.0, 0.0, 1.0), 1.0);
  }
`,ey=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uU;
  uniform sampler2D uContact;
  uniform vec2 uTexel;
  uniform float uPx;
  ${Ku}
  void main() {
    vec3 n = vec3(0.0);
    float u = 0.0, touch = 0.0;
    for (int j = 0; j < 2; j++) {
      for (int i = 0; i < 2; i++) {
        vec2 uv = vUv + (vec2(float(i), float(j)) - 0.5) * uTexel;
        n += membraneNormal(uU, uv, uTexel, uPx);
        u += texture2D(uU, uv).r;
        touch += texture2D(uContact, uv).r > 0.0 ? 0.25 : 0.0;
      }
    }
    // Displacement in .a; whether the object touches here rides on its sign.
    gl_FragColor = vec4(normalize(n), (u * 0.25 + 1e-4) * (touch > 0.5 ? 1.0 : -1.0));
  }
`;function Zs(i,e){return new dt({vertexShader:Zv,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1})}function Uc(i,e){let t=i*Math.PI/180,n=e*Math.PI/180;return new P(Math.cos(n)*Math.cos(t),Math.cos(n)*Math.sin(t),Math.sin(n))}function Zu(i,e,t,n,s){let r=e*n;for(let o=0;o<t;o+=1)s.set(i.subarray((t-1-o)*r,(t-o)*r),o*r);return s}function ju(i){let e=_=>new ut(_,_,{type:Yt,format:Bt,minFilter:At,magFilter:At,depthBuffer:!1,wrapS:Hn,wrapT:Hn}),t=e(xn),n=[e(xn),e(xn),e(xn)],s=e(xn),r=new ut(xn,xn,{type:Ht,minFilter:At,magFilter:At,depthBuffer:!1}),o=new ut(Xe,Xe,{type:Rn,minFilter:St,magFilter:At,depthBuffer:!1}),a=e(Xe);a.texture.magFilter=At;let l=new oe(1/xn,1/xn),c=Zs(Kv,{uFov:{value:14},uDepth:{value:0},uPose:{value:new P},uPa:{value:Array.from({length:Ks},()=>new it)},uPb:{value:Array.from({length:Ks},()=>new it)},uCount:{value:0}}),h=Zs(jv,{uTex:{value:null},uStep:{value:new oe},uSigma:{value:1}}),u=Zs(Jv,{uContact:{value:t.texture},uBlurred:{value:null}}),d=Zs(Qv,{uU:{value:s.texture},uTexel:{value:l},uPx:{value:1},uLdir:{value:Array.from({length:js},()=>new P(0,0,1))},uLcol:{value:Array.from({length:js},()=>new P)},uLights:{value:0},uKd:{value:1},uKs:{value:0},uShin:{value:20},uAmb:{value:.1},uFall:{value:0},uVig:{value:0},uGain:{value:1},uMap:{value:0},uIllum:{value:null},uAlpha:{value:new P},uGamma:{value:1}}),m=Zs($v,{uShaded:{value:r.texture},uTexel:{value:l},uSigma:{value:1.3},uNoise:{value:1},uSeed:{value:1}}),g=Zs(ey,{uU:{value:s.texture},uContact:{value:t.texture},uTexel:{value:l},uPx:{value:1}}),x=new Ne(new Kt(2,2),c);x.frustumCulled=!1;let p=new tn;p.add(x);let f=new en(-1,1,1,-1,0,1);function T(_,I){x.material=_,i.setRenderTarget(I),i.render(p,f)}function S(_,I,b=n[1]){return h.uniforms.uSigma.value=Math.max(I,.3),h.uniforms.uTex.value=_.texture,h.uniforms.uStep.value.set(1/xn,0),T(h,n[0]),h.uniforms.uTex.value=n[0].texture,h.uniforms.uStep.value.set(0,1/xn),T(h,b),b}function M({sensor:_,prims:I,pose:b={x:0,y:0,rot:0},depth:v=0,seed:C=1}){let V=i.getRenderTarget(),O=i.autoClear;i.autoClear=!1;let H=_.fov/xn,K=c.uniforms;K.uFov.value=_.fov,K.uDepth.value=v,K.uPose.value.set(b.x,b.y,b.rot);let G=Math.min(I.length,Ks);for(let re=0;re<G;re+=1){let ce=I[re];K.uPa.value[re].set(ce.kind,ce.x??0,ce.y??0,ce.angle??0),K.uPb.value[re].set(ce.a??0,ce.b??0,ce.c??0,ce.off??0)}K.uCount.value=G,T(c,t);let ne=t;for(let re of[1,.5,.25,.12]){let ce=S(ne,_.softness*re/H);u.uniforms.uBlurred.value=ce.texture,T(u,n[2]),ne=n[2]}S(ne,.03/H,s);let B=d.uniforms;B.uPx.value=H;let ue=_.lights.slice(0,js);ue.forEach((re,ce)=>{B.uLdir.value[ce].copy(Uc(re.az,re.el)),re.color&&B.uLcol.value[ce].set(re.color[0],re.color[1],re.color[2])}),B.uLights.value=ue.length,B.uKs.value=_.ks,B.uShin.value=_.shin,_.mode==="map"?(B.uMap.value=1,B.uIllum.value=_.illumTexture,B.uAlpha.value.set(_.alpha[0],_.alpha[1],_.alpha[2]),B.uGamma.value=_.gamma):(B.uMap.value=0,B.uKd.value=_.kd,B.uAmb.value=_.amb,B.uFall.value=_.fall,B.uVig.value=_.vig,B.uGain.value=_.gain),T(d,r),m.uniforms.uSeed.value=C,m.uniforms.uNoise.value=_.noise??1,T(m,o),g.uniforms.uPx.value=H,T(g,a),i.setRenderTarget(V),i.autoClear=O}async function U(){let _=await i.readRenderTargetPixelsAsync(o,0,0,Xe,Xe,new Uint8Array(Xe*Xe*4));return Zu(_,Xe,Xe,4,new Uint8Array(Xe*Xe*4))}async function A(){let _=await i.readRenderTargetPixelsAsync(a,0,0,Xe,Xe,new Float32Array(Xe*Xe*4));return Zu(_,Xe,Xe,4,new Float32Array(Xe*Xe*4))}return{N:Xe,render:M,readImage:U,readTruth:A,textures:{image:o.texture,truth:a.texture,membrane:s.texture}}}var ia={mini:{label:"GelSight Mini",source:"fitted to the 9 real ball images of real sensor 0, SITR dataset (Gupta, Mo, Jin, Yuan); fit 8.4 grey levels rms, 21.4 before",mode:"map",fov:14.11,softness:.77,gamma:.792,ks:.013,shin:36.1,lights:[{az:-96.1,el:12.8},{az:6,el:9.9},{az:81.3,el:10.5}],alpha:[.328,.59,.636],illum:"data:image/png;base64,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"},digit:{label:"DIGIT",source:"fitted to the 9 real ball images of real sensor 1, SITR dataset (Gupta, Mo, Jin, Yuan); fit 15.7 grey levels rms, 28.8 before",mode:"map",fov:13.77,softness:.944,gamma:1.078,ks:0,shin:2,lights:[{az:51.4,el:22.8},{az:-62.1,el:20.2},{az:163.8,el:17.8}],alpha:[.619,.811,.705],illum:"data:image/png;base64,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"},hex:{label:"GelSight Hex",source:"fitted to the 9 real ball images of real sensor 2, SITR dataset (Gupta, Mo, Jin, Yuan); fit 7.3 grey levels rms, 22.3 before",mode:"map",fov:12.6,softness:.838,gamma:.785,ks:.001,shin:2.5,lights:[{az:.8,el:39.6},{az:-124.7,el:43.5},{az:117.5,el:29.7}],alpha:[.081,.265,.455],illum:"data:image/png;base64,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"},wedge:{label:"GelSight Wedge",source:"fitted to the 9 real ball images of real sensor 3, SITR dataset (Gupta, Mo, Jin, Yuan); fit 13.0 grey levels rms, 25.0 before",mode:"map",fov:17.91,softness:.494,gamma:.512,ks:.002,shin:2.2,lights:[{az:-106.4,el:5.4},{az:7.7,el:11.9},{az:111.4,el:15.1}],alpha:[0,.381,.324],illum:"data:image/png;base64,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"}};var Ju={tri:{label:"Three lights, 120\xB0 apart",fov:14.3,lights:[{az:90,el:25,color:[1,.08,.08]},{az:210,el:25,color:[.08,1,.08]},{az:330,el:25,color:[.08,.08,1]}],kd:1,ks:.15,shin:20,amb:.1,fall:.25,gain:.55,vig:.15,softness:.3},side:{label:"Grazing lights on three sides",fov:17,lights:[{az:180,el:12,color:[1,.1,.1]},{az:270,el:14,color:[.1,1,.1]},{az:0,el:12,color:[.1,.1,1]}],kd:1,ks:.3,shin:30,amb:.06,fall:.45,gain:.95,vig:.1,softness:.3},oneside:{label:"All lights on one side",fov:16,lights:[{az:240,el:30,color:[1,.15,.1]},{az:270,el:32,color:[.1,1,.15]},{az:300,el:30,color:[.1,.15,1]}],kd:1,ks:.1,shin:12,amb:.05,fall:.6,gain:.42,vig:.3,softness:.3},mixed:{label:"Four lights, mixed colours",fov:12,lights:[{az:40,el:20,color:[1,.7,.2]},{az:150,el:35,color:[.2,.9,.9]},{az:265,el:18,color:[.8,.2,1]},{az:330,el:40,color:[.9,.9,.9]}],kd:.9,ks:.25,shin:25,amb:.12,fall:.3,gain:.36,vig:.2,softness:.3}};for(let i of Object.values(Ju))i.madeUp=!0;var Ln={...ia,...Ju},ci=Object.keys(Ln),Qu=Object.keys(ia);function $u(){return Promise.all(Object.values(ia).map(i=>new Promise((e,t)=>{let n=new Image;n.onload=()=>{let s=new Zt(n);s.minFilter=St,s.magFilter=St,s.generateMipmaps=!1,s.needsUpdate=!0,i.illumTexture=s,e()},n.onerror=t,n.src=i.illum})))}function ed(i,{el:e=0,fov:t,softness:n,ks:s}={}){return{...i,fov:t??i.fov,softness:n??i.softness,ks:s??i.ks,lights:i.lights.map(r=>({...r,el:Math.min(Math.max(r.el+e,4),80)}))}}var Js={ballRadius:2,depth:1.4,cornerAngle:.5,cornerSize:4},td=i=>i.fov/224;var Fr={ball:{label:"Ball",depth:.8,prims:[{kind:bt.ball,a:2}]},block:{label:"Block",depth:.6,prims:[{kind:bt.box,angle:.6,a:2.6,b:1.6,c:.15}]},ring:{label:"Ring",depth:.5,prims:[{kind:bt.torus,a:2.6,b:.7}]},screw:{label:"Screw",depth:1.5,prims:[{kind:bt.cylinder,x:-3.3*Math.cos(.5),y:-3.3*Math.sin(.5),angle:.5,a:2.4,b:1.1},{kind:bt.thread,x:.9*Math.cos(.5),y:.9*Math.sin(.5),angle:.5,a:1.5,b:.9,c:3,off:.9}]},cone:{label:"Cone",depth:1,prims:[{kind:bt.cone,a:.8,b:2.2}]},nut:{label:"Hex nut",depth:.6,prims:[{kind:bt.hex,angle:.2,a:3,b:.2,c:1.5}]},studs:{label:"Four studs",depth:.7,prims:[-1,1].flatMap(i=>[-1,1].map(e=>({kind:bt.disc,x:e*2,y:i*2,a:1.2,b:.12})))},corner:{label:"Cube corner",depth:1.4,prims:[{kind:bt.corner,angle:.5,a:4}]}},qn=Object.keys(Fr);function ty(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function nd(i,e){let t=ty(i),n=(c,h)=>c+(h-c)*t(),s=e*.3,r=["ball","cylinder","box","torus","cone","disc","hex"],o=3+Math.floor(t()*4),a=[];for(let c=0;c<o;c+=1){let h=r[Math.floor(t()*r.length)],u={kind:bt[h],x:n(-s,s),y:n(-s,s),angle:n(0,Math.PI),off:n(0,.5)};h==="ball"?Object.assign(u,{a:n(1,4)}):h==="cylinder"?Object.assign(u,{a:n(.6,2),b:n(1.5,4)}):h==="box"?Object.assign(u,{a:n(.8,2.5),b:n(.8,2.5),c:.15}):h==="torus"?Object.assign(u,{a:n(1.2,2.8),b:n(.3,.8)}):h==="cone"?Object.assign(u,{a:n(.4,1.2),b:n(1,2.5)}):h==="disc"?Object.assign(u,{a:n(.6,1.8),b:.12}):Object.assign(u,{a:n(1.2,2.6),b:.18,c:t()<.5?n(.4,.9):0}),a.push(u)}let l=Math.min(...a.map(c=>c.off));return a.forEach(c=>{c.off-=l}),{label:`Random #${i}`,depth:.8,prims:a}}function Dc(i){let e=i.fov/4,t=[-1,0,1].flatMap(r=>[-1,0,1].map(o=>({x:o*e,y:r*e}))),n=t.map(r=>({prims:[{kind:bt.ball,a:Js.ballRadius}],pose:{...r,rot:0},depth:Js.depth})),s=t.map(r=>({prims:[{kind:bt.corner,angle:Js.cornerAngle,a:Js.cornerSize}],pose:{...r,rot:0},depth:Js.depth}));return[...n,...s]}var sa={url:"models/sitr_b18.onnx?v=da02c127",bytes:388712528},ny=()=>document.documentElement.dataset.model||sa.url;function id({modelUrl:i=ny(),workerUrl:e="dist/estimator.worker.js",ortBase:t="dist/ort/",prefer:n,optimise:s,onProgress:r,autoload:o=!0}={}){let a=new Worker(new URL(e,location.href),{type:"module"}),l=new Map,c=1,h,u=new Promise((g,x)=>{h={resolve:g,reject:x}}),d={provider:"",ready:!1,error:"",info:null};a.onmessage=({data:g})=>{if(g.type==="progress")r?.(g);else if(g.type==="ready")d.provider=g.provider,d.ready=!0,d.info=g,h.resolve(g);else if(g.type==="error"){let x=l.get(g.id);x?(l.delete(g.id),x.reject(new Error(g.message))):(d.error=g.message,h.reject(new Error(g.message)))}else if(l.has(g.id)){let x=l.get(g.id);l.delete(g.id),x.resolve(g)}},a.onerror=g=>{d.error=g.message||"worker failed to start",h.reject(new Error(d.error))};function m(g,x=[]){let p=c;return c+=1,new Promise((f,T)=>{l.set(p,{resolve:f,reject:T}),a.postMessage({...g,id:p},x)})}return o&&a.postMessage({type:"load",modelUrl:new URL(i,location.href).href,ortBase:new URL(t,location.href).href,prefer:n,optimise:s}),{ready:u,state:d,calibrate:(g,x,p)=>m({type:"calibrate",bg:g,images:x,mm:p}),estimate:(g,{raw:x=!1}={})=>m({type:"estimate",image:g,raw:x}),probe:(g,x,p,f)=>m({type:"probe",modelUrl:new URL(g,location.href).href,ortBase:new URL(t,location.href).href,ep:x,image:p,calibration:f}),dispose:()=>a.terminate()}}var ns=qn.length,Un={cols:7,rows:3,tile:112};function Nc(i){if(i===0)return{col:0,row:1};let e=i<10?1:10;return{col:(i<10?1:4)+(i-e)%3,row:Math.floor((i-e)/3)}}var sd=(i,e)=>Math.min(Math.max(Math.round(i),0),e-1);function Fc(i){let e=ci[sd(i.sensor,ci.length)],t=Ln[e],n={el:Math.round(i.tEl*10)/10,softness:i.tSoft>0?Math.round(i.tSoft*100)/100:void 0,fov:i.tFov>0?Math.round(i.tFov*10)/10:void 0,ks:i.tKs>=0?Math.round(i.tKs*100)/100:void 0},s=ed(t,n),r=JSON.stringify([e,n]),o=Math.round(i.calib);if(o>=0){let d=Dc(s)[Math.min(o,17)];return{sensorId:e,sensor:s,sensorKey:r,calib:o,object:{label:o<9?"Calibration ball":"Cube corner",prims:d.prims},objectKey:`c${o}`,pose:d.pose,depth:d.depth*i.calibIn-1.5*(1-i.calibIn)}}let a=Math.round(i.obj),l=Math.max(0,Math.round(i.seed)),c=a>=ns?nd(l,s.fov):Fr[qn[sd(a,qn.length)]],h=s.fov*.45,u={x:Math.min(Math.max(i.px,-h),h),y:Math.min(Math.max(i.py,-h),h),rot:i.prot};return{sensorId:e,sensor:s,sensorKey:r,calib:-1,object:c,objectKey:a>=ns?`r${l}:${s.fov}`:`p${a}`,pose:u,depth:i.depth}}function rd(i,{manual:e=!1}={}){let t=new URLSearchParams(location.search),n=ju(i),s=new Float32Array(Xe*Xe*4);for(let F=0;F<Xe*Xe;F+=1)s[F*4+2]=1;let r=new Bs(s,Xe,Xe,Bt,Yt);r.needsUpdate=!0;let o=new ut(Un.cols*Un.tile,Un.rows*Un.tile,{depthBuffer:!1,minFilter:St,magFilter:St}),a=new ut(4*Xe,Xe,{depthBuffer:!1,minFilter:St,magFilter:St}),l=new ut(Xe,Xe,{depthBuffer:!1,minFilter:St,magFilter:St}),c=new Ne(new Kt(2,2),new Xn({map:n.textures.image,depthTest:!1,depthWrite:!1,toneMapped:!1}));c.frustumCulled=!1;let h=new tn;h.add(c);let u=new en(-1,1,1,-1,0,1),d=new Pe(263949);function m(F,$,ae,ie,Te){let fe=i.getRenderTarget(),Re=i.autoClear;i.autoClear=!1,F.viewport.set($,ae,ie,Te),F.scissor.set($,ae,ie,Te),F.scissorTest=!0,i.setRenderTarget(F),i.render(h,u),i.setRenderTarget(fe),i.autoClear=Re}function g(F){let $=i.getRenderTarget(),ae=i.getClearColor(new Pe),ie=i.getClearAlpha();F.scissorTest=!1,F.viewport.set(0,0,F.width,F.height),i.setRenderTarget(F),i.setClearColor(d,1),i.clear(!0,!1,!1),i.setClearColor(ae,ie),i.setRenderTarget($)}function x(F){let{col:$,row:ae}=Nc(F);m(o,$*Un.tile,(Un.rows-1-ae)*Un.tile,Un.tile,Un.tile)}let p={model:e?"manual clock: the model does not run":t.get("model")==="0"?"off":"waiting",provider:"",got:0,total:sa.bytes,cached:!1,ms:0,fresh:!1,error:"",estimates:0},f=0,T=!1;$u().then(()=>{T=!0,f+=1});let S=null,M=!1;function U(){S||e||t.get("model")==="0"||(p.model="loading",S=id({modelUrl:t.get("model-url")??void 0,prefer:t.get("ep")??void 0,onProgress:({got:F,total:$,cached:ae})=>{p.got=F,p.total=$||sa.bytes,p.cached=ae,f+=1}}),S.ready.then(F=>{M=!0,p.model="ready",p.provider=F.provider,f+=1},F=>{p.model="failed",p.error=F.message,f+=1}),f+=1)}let A="",_=0,I=-1,b=!1,v="",C="",V=!1,O="",H=0,K=null;function G(F){n.render({sensor:F.sensor,prims:F.object.prims,pose:F.pose,depth:F.depth,seed:1})}function ne(F){let $=F.sensorKey,ae=M&&C!==$&&!V,ie=[];g(o),n.render({sensor:F.sensor,prims:[],depth:0,seed:1}),x(0),ae&&ie.push(n.readImage()),Dc(F.sensor).forEach((Te,fe)=>{n.render({sensor:F.sensor,...Te,seed:2+fe}),x(fe+1),ae&&ie.push(n.readImage())}),v=$,G(F),ae&&(V=!0,Promise.all(ie).then(([Te,...fe])=>{let Re=new Uint8Array(18*Xe*Xe*4);return fe.forEach((We,J)=>Re.set(We,J*Xe*Xe*4)),S.calibrate(Te,Re,td(F.sensor))}).then(()=>{C=$},Te=>{p.error=Te.message}).finally(()=>{V=!1,I=-1,f+=1}))}let B="";function ue(F,$){Qu.forEach((ae,ie)=>{n.render({sensor:Ln[ae],prims:F.object.prims,pose:F.pose,depth:F.depth,seed:1}),m(a,ie*Xe,0,Xe,Xe)}),B=$,G(F)}let re="";function ce(F,$){n.render({sensor:Ln[F.sensorId],prims:F.object.prims,pose:F.pose,depth:F.depth,seed:1}),m(l,0,0,Xe,Xe),re=$,G(F)}function Fe(){b=!0;let F=_,$=performance.now();n.readImage().then(ae=>S.estimate(ae)).then(ae=>{s.set(ae.data),r.needsUpdate=!0,I=F,p.ms=performance.now()-$,p.estimates+=1},ae=>{p.error=ae.message,I=F}).finally(()=>{b=!1,f+=1})}function Qe(F,{wantAtlas:$=!1,wantEstimate:ae=!1,wantGallery:ie=!1,wantReference:Te=!1}={}){if(!T)return null;let fe=Fc(F);K=fe;let Re=JSON.stringify([fe.sensorKey,fe.objectKey,fe.pose.x.toFixed(3),fe.pose.y.toFixed(3),fe.pose.rot.toFixed(3),fe.depth.toFixed(3)]);Re!==A&&(G(fe),A=Re,_+=1);let We=JSON.stringify([fe.objectKey,fe.pose.x.toFixed(3),fe.pose.y.toFixed(3),fe.pose.rot.toFixed(3),fe.depth.toFixed(3)]);ie&&B!==We&&ue(fe,We),Te&&re!==`${fe.sensorId}|${We}`&&ce(fe,`${fe.sensorId}|${We}`);let J=performance.now();fe.sensorKey!==O&&(O=fe.sensorKey,H=J);let se=e||J-H>140,R=($||ae)&&v!==fe.sensorKey,_e=ae&&M&&C!==fe.sensorKey&&!V;return se&&(R||_e)?ne(fe):(R||_e)&&!se&&setTimeout(()=>{f+=1},160),ae&&M&&!V&&!b&&C===fe.sensorKey&&I!==_&&Fe(),p.fresh=M&&C===fe.sensorKey&&I===_,fe}return{sim:n,textures:{image:n.textures.image,truth:n.textures.truth,membrane:n.textures.membrane,estimate:r,atlas:o.texture,gallery:a.texture,reference:l.texture},setBackground:F=>d.set(F),update:Qe,start:U,status:p,tick:()=>f,last:()=>K}}var Lt=1920,Rt=1080,iy=15,hi=3.6,ra=15,Oc=23,Dn=14,sy=2,od=12,ry=["view","ref","four","rel","tru","err","cal"],oy={view:["Sensor view \xB7 simulated","Changed \xB7 simulated"],ref:["As fitted \xB7 simulated"],four:["One press, four sensors \xB7 simulated"],rel:["Shape \xB7 from SITR"],tru:["True shape \xB7 simulated","The dent \xB7 simulated"],err:["SITR vs truth \xB7 angle"],cal:["Calibration set \xB7 simulated"]},ad={cal:3/7,four:1/4},Or={tx:0,ty:-6,tz:0,az:.55,el:.5,size:560,fov:28,sx:1300,sy:560,ry:0,visible:1,backdrop:1,bloom:.35,sensor:0,tEl:0,tSoft:0,tFov:0,tKs:-1,shell:.55,lights:1,obj:0,seed:7,object:1,depth:-3,px:0,py:0,prot:0,hot:0,calib:-1,calibIn:1,view:0,viewX:1180,viewY:250,viewS:360,rel:0,relX:1180,relY:250,relS:360,tru:0,truX:1180,truY:250,truS:360,err:0,errX:1180,errY:250,errS:360,cal:0,calX:1180,calY:250,calS:360,calMark:-1,calShow:18,ref:0,refX:1180,refY:250,refS:360,four:0,fourX:1180,fourY:250,fourS:360,fourMark:-1,viewTitle:0,truTitle:0,sandbox:0,tick:0},ld={ry:Math.PI*2},cd=["sensor","obj","seed","calib","calMark","calShow","fourMark","viewTitle","truTitle","sandbox"],Bc=class extends Ii{get glow(){return this.renderTargetsHorizontal[0].texture}render(e,t,n){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let o=0;o<this.nMips;o+=1){let a=this.separableBlurMaterials[o];this.fsQuad.material=a,a.uniforms.colorTexture.value=r.texture,a.uniforms.direction.value=Ii.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this.fsQuad.render(e),a.uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,a.uniforms.direction.value=Ii.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[o]}this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}},ay=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,ly=`
  uniform sampler2D tDiffuse;
  uniform sampler2D tGlow;
  uniform float uGlowOn;
  uniform float uShoulder;
  varying vec2 vUv;
  vec3 shoulder(vec3 c) {
    if (uShoulder >= 0.999) {
      return c;
    }
    float k = uShoulder;
    vec3 x = max(c - k, 0.0);
    return min(c, vec3(k)) + (1.0 - k) * (1.0 - exp(-x / (1.0 - k)));
  }
  vec3 toSRGB(vec3 c) {
    c = max(c, 0.0);
    return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
  }
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  void main() {
    vec4 glow = texture2D(tGlow, vUv) * uGlowOn;
    vec3 col = toSRGB(shoulder(texture2D(tDiffuse, vUv).rgb + glow.rgb * glow.a));
    col += (hash(gl_FragCoord.xy) + hash(gl_FragCoord.yx + 17.0) - 1.0) / 255.0;
    gl_FragColor = vec4(col, 1.0);
  }
`,cy=`
  uniform sampler2D uMembrane;
  uniform float uDent;
  varying vec2 vUv;
  varying vec3 vView;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.y -= texture2D(uMembrane, uv).r * uDent;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,hy=`
  precision highp float;
  uniform sampler2D uMembrane;
  uniform sampler2D uImage;
  uniform vec3 uCoat;
  uniform float uSide;
  uniform float uOpacity;
  uniform float uInside;
  uniform float uLit;
  varying vec2 vUv;
  varying vec3 vView;
  vec3 toLinear(vec3 c) {
    return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
  }
  void main() {
    float t = 1.0 / 448.0;
    float gx = (texture2D(uMembrane, vUv + vec2(t, 0.0)).r - texture2D(uMembrane, vUv - vec2(t, 0.0)).r) / (2.0 * t * uSide);
    float gz = (texture2D(uMembrane, vUv - vec2(0.0, t)).r - texture2D(uMembrane, vUv + vec2(0.0, t)).r) / (2.0 * t * uSide);
    if (gl_FrontFacing) {
      // Outside: the coating, lit from above, with the dent's own shading.
      vec3 n = normalize(vec3(gx, 1.0, gz));
      float lit = 0.35 + 0.65 * max(dot(n, normalize(vec3(0.35, 0.85, 0.4))), 0.0);
      gl_FragColor = vec4(uCoat * lit, uOpacity);
    } else {
      // Inside: with the lights off, the bare dent under a work light; with
      // them on, the picture they paint on it.
      vec3 n = normalize(vec3(-gx, -1.0, -gz));
      float lit = 0.18 + 0.95 * pow(max(dot(n, normalize(vec3(0.45, -0.75, 0.5))), 0.0), 1.5);
      vec3 img = toLinear(texture2D(uImage, vUv).rgb);
      gl_FragColor = vec4(mix(uCoat * lit, img * uInside, uLit), uOpacity);
    }
  }
`,uy=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,dy=`
  precision highp float;
  varying vec2 vUv;
  uniform int uMode;
  uniform sampler2D uA;
  uniform sampler2D uB;
  uniform float uFlipA, uFlipB, uScale, uOpacity, uMark, uShow, uStale;
  uniform vec3 uBg, uData0, uData1, uLit;
  vec3 ramp(float t) {
    t = clamp(t, 0.0, 1.0);
    return mix(uData0, uData1, t * t * (3.0 - 2.0 * t));
  }
  // Inside a tile of a grid cell (a small gap all round), and on its rim.
  float inTile(vec2 f, float gap) {
    return step(gap, f.x) * step(f.x, 1.0 - gap) * step(gap, f.y) * step(f.y, 1.0 - gap);
  }
  void main() {
    vec4 a = texture2D(uA, vec2(vUv.x, mix(vUv.y, 1.0 - vUv.y, uFlipA)));
    vec4 b = texture2D(uB, vec2(vUv.x, mix(vUv.y, 1.0 - vUv.y, uFlipB)));
    vec3 col = a.rgb;
    if (uMode == 1) {
      col = normalize(a.xyz) * 0.5 + 0.5;
    } else if (uMode == 2) {
      col = ramp(degrees(acos(clamp(dot(normalize(a.xyz), normalize(b.xyz)), -1.0, 1.0))) / uScale);
    } else if (uMode == 3) {
      // The calibration set: the background, then two 3 x 3 grids, as the
      // presses were made on the pad. Presses not made yet are empty.
      vec2 g = vUv * vec2(7.0, 3.0);
      vec2 cell = floor(g);
      vec2 f = fract(g);
      float row = 2.0 - cell.y;
      float k = cell.x < 0.5 ? (abs(row - 1.0) < 0.5 ? 0.0 : -1.0) : (cell.x < 3.5 ? 1.0 + row * 3.0 + cell.x - 1.0 : 10.0 + row * 3.0 + cell.x - 4.0);
      float made = step(-0.5, k) * step(k, uShow + 0.5);
      float lit = made * (1.0 - step(0.5, abs(k - uMark)));
      col = mix(uBg, a.rgb * mix(0.78, 1.0, max(lit, step(uMark, -0.5))), inTile(f, 0.045) * made);
      col = mix(col, uLit, lit * (1.0 - inTile(f, 0.045)) * inTile(f, 0.0));
    } else if (uMode == 4) {
      // Four pictures in a row, the lit one framed.
      vec2 g = vUv * vec2(4.0, 1.0);
      float k = floor(g.x);
      vec2 f = fract(g);
      float lit = 1.0 - step(0.5, abs(k - uMark));
      col = mix(uBg, a.rgb, inTile(f, 0.03));
      col = mix(col, uLit, lit * (1.0 - inTile(f, 0.03)));
    }
    col = mix(col, vec3(dot(col, vec3(0.299, 0.587, 0.114))) * 0.45, uStale);
    gl_FragColor = vec4(col, uOpacity);
  }
`,fy=`
  uniform sampler2D uTex;
  uniform float uFlip, uGain, uAbs, uCrop;
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vec2 c = 0.5 + (uv - 0.5) * uCrop;
    vUv = vec2(c.x, mix(c.y, 1.0 - c.y, uFlip));
    float h = texture2D(uTex, vUv).a;
    h = mix(max(h, 0.0), abs(h), uAbs);
    vec3 p = position;
    p.y += h * uGain;
    vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  }
`,py=`
  precision highp float;
  uniform sampler2D uTex;
  uniform vec3 uColor, uShade, uEye;
  uniform float uStale;
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vec3 t = normalize(texture2D(uTex, vUv).xyz);
    // Image x, y (down), z (to the camera)  ->  world x, z, y (up).
    vec3 n = normalize(vec3(t.x, t.z, t.y));
    // A low light from the far left over a soft fill: a flat plate is an even
    // mid tone, a slope towards the light brightens, one away from it darkens.
    vec3 l = normalize(vec3(-0.62, 0.42, -0.5));
    vec3 v = normalize(uEye - vWorld);
    float flatLit = l.y;
    float shade = clamp(0.5 + 1.15 * (dot(n, l) - flatLit), 0.08, 1.0);
    float spec = pow(max(dot(n, normalize(l + v)), 0.0), 30.0);
    vec3 col = mix(uShade, uColor, shade) + vec3(0.18) * spec;
    col = mix(col, vec3(dot(col, vec3(0.299, 0.587, 0.114))) * 0.5, uStale);
    gl_FragColor = vec4(col, 1.0);
  }
`;function my(i,e){let t=i.off??0,n;if(i.kind===bt.ball)n=new Ne(new Cr(i.a,48,32),e),n.position.y=i.a+t;else if(i.kind===bt.cylinder)n=new Ne(new Pi(i.a,i.a,i.b*2,40),e),n.rotation.z=Math.PI/2,n.position.y=i.a+t;else if(i.kind===bt.box)n=new Ne(new li(i.a*2,2.4,i.b*2,3,Math.max(i.c??.15,.05)),e),n.position.y=1.2+t;else if(i.kind===bt.torus)n=new Ne(new Pr(i.a,i.b,24,72),e),n.rotation.x=Math.PI/2,n.position.y=i.b+t;else if(i.kind===bt.cone){let r=i.a*i.b;n=new Ne(new Vo(i.b,r,48),e),n.rotation.x=Math.PI,n.position.y=r/2+t}else if(i.kind===bt.thread){n=new fn;let r=new Ne(new Pi(i.a,i.a,i.c*2,40),e);r.rotation.z=Math.PI/2,n.add(r);for(let o=-i.c+i.b/2;o<i.c;o+=i.b){let a=new Ne(new Pr(i.a+.02,.2,10,48),e);a.rotation.y=Math.PI/2+.33,a.position.x=o,n.add(a)}n.position.y=i.a+.22+t}else if(i.kind===bt.corner)n=new Ne(new li(6.5,6.5,6.5,4,.45),e),n.quaternion.setFromUnitVectors(new P(1,1,1).normalize(),new P(0,1,0)),n.position.y=6.5*Math.sqrt(3)/2+t-.3;else if(i.kind===bt.disc)n=new Ne(new Pi(i.a,i.a,1.8,40),e),n.position.y=.9+t;else{let r=new zs,o=i.a/Math.cos(Math.PI/6);for(let l=0;l<6;l+=1){let c=Math.PI/6+l*Math.PI/3;r[l?"lineTo":"moveTo"](o*Math.cos(c),o*Math.sin(c))}if(r.closePath(),i.c>0){let l=new Ji;l.absarc(0,0,i.c,0,Math.PI*2,!0),r.holes.push(l)}let a=new Rr(r,{depth:2.2,bevelEnabled:!1,curveSegments:32});a.rotateX(-Math.PI/2),n=new Ne(a,e),n.position.y=t}let s=new fn;return s.add(n),s.position.set(i.x??0,0,i.y??0),s.rotation.y=-(i.angle??0),s}function gy(i){i.traverse(e=>e.geometry?.dispose()),i.clear()}function hd(i,{preserve:e=!1,theme:t}={}){let n=new Fo({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:e});n.setPixelRatio(1),n.localClippingEnabled=!0;let s=rd(n,{manual:Gt.manual}),r=new tn,o=new Os(n);r.environment=o.fromScene(new na,.04).texture,o.dispose();let a=new Ft(28,Lt/Rt,.5,2e3),l=new Ir(16777215,1.5);l.position.set(30,60,40),r.add(l);let c=new Ir(16777215,.5);c.position.set(-50,25,10),r.add(c);let h=qu({width:Lt,height:Rt});r.add(h.mesh);let u=new fn;r.add(u);let d=Pc({roughness:.38,metalness:.25,clearcoat:.8}),m=new Ne(new li(Oc,ra,Oc,6,2.4),d);m.position.y=-hi-ra/2+.6,m.renderOrder=4,u.add(m);let g=Pc({roughness:.08,metalness:0,clearcoat:1,color:12375270}),x=new Ne(new li(Dn+.5,hi,Dn+.5,3,.5),g);x.position.y=-hi/2-.03,x.renderOrder=3,u.add(x);let p=new Cn({roughness:.45,metalness:.35,transparent:!0}),f=new zs,T=Oc/2-.9,S=Dn/2+1.9;f.moveTo(-T,-T),f.lineTo(T,-T),f.lineTo(T,T),f.lineTo(-T,T),f.closePath();let M=new Ji;M.moveTo(-S,-S),M.lineTo(-S,S),M.lineTo(S,S),M.lineTo(S,-S),M.closePath(),f.holes.push(M);let U=new Rr(f,{depth:1.2,bevelEnabled:!0,bevelSize:.3,bevelThickness:.3,bevelSegments:3});U.rotateX(Math.PI/2);let A=new Ne(U,p);A.position.y=-hi+1.6,u.add(A);let _={uMembrane:{value:s.textures.membrane},uImage:{value:s.textures.image},uCoat:{value:new Pe(9279142)},uSide:{value:14},uDent:{value:1},uOpacity:{value:1},uInside:{value:1.6},uLit:{value:1}},I=new Kt(Dn,Dn,159,159);I.rotateX(-Math.PI/2);let b=new Ne(I,new dt({vertexShader:cy,fragmentShader:hy,uniforms:_,side:An,transparent:!0}));b.renderOrder=2,u.add(b);let v=[];for(let k=0;k<6;k+=1){let q=new Cn({roughness:.4,metalness:0,emissiveIntensity:1,transparent:!0}),Ce=new Ne(new li(8.4,1.5,1.1,2,.4),q);Ce.visible=!1,u.add(Ce),v.push(Ce)}let C=new Cn({roughness:.35,metalness:.6,transparent:!0}),V=new ks({roughness:.05,metalness:.2,clearcoat:1,transparent:!0}),O=new fn,H=new Ne(new li(8,2.6,8,3,.6),C),K=new Ne(new Pi(2.4,2.8,2.8,40),C);K.position.y=2.5;let G=new Ne(new Cr(2,40,20,0,Math.PI*2,0,Math.PI/2),V);G.position.y=3.7,G.scale.y=.45,O.add(H,K,G),O.position.y=-hi-ra+3.4,u.add(O);let ne=new Cn({roughness:.42,metalness:.45,transparent:!0,clippingPlanes:[new dn(new P(0,1,0),.03)]}),B=new fn;r.add(B);let ue="",re=new ea(n,new ut(Lt,Rt,{samples:4,type:Ht}));re.addPass(new ta(r,a));let ce=new Bc(new oe(Lt,Rt),.6,.45,.9);re.addPass(ce);let Fe=new qs({uniforms:{tDiffuse:{value:null},tGlow:{value:null},uGlowOn:{value:1},uShoulder:{value:.62}},vertexShader:ay,fragmentShader:ly});Fe.uniforms.tGlow.value=ce.glow,Fe.needsSwap=!1,re.addPass(Fe),re.writeBuffer.setSize(1,1);let Qe=new tn,F=new en(0,Lt,Rt,0,-1,1),$=new Bs(new Float32Array([0,0,1,0]),1,1,Bt,Yt);$.needsUpdate=!0;let ae={},ie={},Te={uBg:{value:new Pe},uLit:{value:new Pe}},fe={uData0:{value:new Pe},uData1:{value:new Pe}};function Re(k,q){let Ce={uMode:{value:0},uA:{value:$},uB:{value:$},uFlipA:{value:0},uFlipB:{value:0},uScale:{value:1},uOpacity:{value:0},uMark:{value:-1},uShow:{value:18},uStale:{value:0},...Te,...fe,...q},Ze=new Ne(new Kt(1,1),new dt({vertexShader:uy,fragmentShader:dy,uniforms:Ce,transparent:!0,depthTest:!1,depthWrite:!1}));Ze.visible=!1,Qe.add(Ze),ae[k]=Ce,ie[k]=Ze}Re("view",{uA:{value:s.textures.image}}),Re("ref",{uA:{value:s.textures.reference}}),Re("four",{uMode:{value:4},uA:{value:s.textures.gallery}}),Re("err",{uMode:{value:2},uA:{value:s.textures.truth},uB:{value:s.textures.estimate},uFlipB:{value:1},uScale:{value:45}}),Re("cal",{uMode:{value:3},uA:{value:s.textures.atlas}});let We=["view","ref","four","err","cal"],J=new tn,se=new Ft(30,1,.1,100),R=new Kt(1,1,159,159);R.rotateX(-Math.PI/2);let _e=(k,q,Ce)=>({uTex:{value:k},uFlip:{value:q},uGain:{value:1},uAbs:{value:Ce},uCrop:{value:1},uColor:{value:new Pe},uShade:{value:new Pe},uEye:{value:new P},uStale:{value:0}}),te={rel:_e(s.textures.estimate,1,0),tru:_e(s.textures.truth,0,1)},Se={};for(let k of["rel","tru"]){let q=new Ne(R,new dt({vertexShader:fy,fragmentShader:py,uniforms:te[k]}));q.frustumCulled=!1,J.add(q),Se[k]=q}let de=new Pe,Oe=1,be=!0;function E(k){let q=Ce=>new Pe(Ce);be=k.dark,r.background=q(k.bg),h.setTheme(k),d.color.copy(q(k.bg).lerp(q(k.ink3),k.dark?.06:.6)),d.userData.rimColor.value.copy(k.dark?q(k.ink3):q("#000000")),g.userData.rimColor.value.copy(k.dark?q(k.ink2):q("#000000")),p.color.copy(k.dark?q("#161c28"):q("#3a4250")),C.color.copy(k.dark?q("#1a2130"):q("#39404c")),V.color.copy(k.dark?q("#0a1830"):q("#1b2a44")),ne.color.copy(k.dark?q("#aab3c2"):q("#6f7888")),_.uCoat.value.copy(k.dark?q("#6b7484"):q("#8a93a3")),Te.uBg.value.copy(q(k.bg)),Te.uLit.value.copy(q(k.ink)),fe.uData0.value.copy(q(k.bg)),fe.uData1.value.copy(q(k.ink)),te.rel.uColor.value.copy(q(k.ink).lerp(q(k.accent),.55)),te.rel.uShade.value.copy(q(k.bg).lerp(q(k.accent),.1)),te.tru.uColor.value.copy(q(k.ink)),te.tru.uShade.value.copy(q(k.bg).lerp(q(k.ink),.1)),de.copy(q(k.bg).lerp(q(k.ink3),k.dark?.05:.08)),s.setBackground(k.bg),r.environmentIntensity=k.dark?.9:.55,l.intensity=k.dark?1.5:1.1,c.intensity=k.dark?.5:.35,Oe=k.glow,Fe.uniforms.uShoulder.value=k.dark?.62:1}E(t);let y={...Or},z=null,Z=1;function ee(k){let q=new P(k.tx,k.ty,k.tz),Ce=new P(Math.cos(k.el)*Math.sin(k.az),Math.sin(k.el),Math.cos(k.el)*Math.cos(k.az)),Ze=Lr.degToRad(k.fov)/2,at=iy*Rt/(Math.max(k.size,1)*Math.tan(Ze));a.fov=k.fov,a.position.copy(q).addScaledVector(Ce,at),a.up.set(0,1,0),a.lookAt(q),a.near=Math.max(.5,at*.02),a.far=at+600,a.setViewOffset(Lt,Rt,Lt/2-k.sx,Rt/2-k.sy,Lt,Rt),a.updateProjectionMatrix(),a.updateMatrixWorld()}function j(k){gy(B);for(let q of k.object.prims)B.add(my(q,ne))}function Ae(k){y={...k},ee(k);let q=Lr.clamp(k.visible,0,1),Ce=Fc(k);z=Ce;let Ze=Ce.sensor.fov,at=Ze/Dn;u.rotation.y=k.ry,u.visible=q>.001,u.scale.setScalar(at),_.uSide.value=Ze,_.uDent.value=1/at,_.uOpacity.value=q,_.uInside.value=1.2+.8*(1-k.shell),_.uLit.value=Lr.clamp(k.lights,0,1),d.opacity=q*k.shell*.92,d.depthWrite=k.shell>.97,d.userData.rim.value=q*(.22+.08*(1-k.shell)),g.opacity=q*.16,g.depthWrite=!1,g.userData.rim.value=q*.18,p.opacity=q,C.opacity=q,V.opacity=q;let Tt=Ce.sensor.lights,Et=Ce.sensor.mode==="map"?[[1,.12,.1],[.12,1,.18],[.16,.3,1]]:Tt.map(ct=>ct.color);v.forEach((ct,nn)=>{let bn=Tt[nn];if(ct.visible=!!bn&&q>.001,!bn)return;let sn=Uc(bn.az,bn.el),mi=Math.hypot(sn.x,sn.y)||1,ir=sn.x/mi,qr=sn.y/mi;ct.position.set(ir*(Dn/2+1.2),-hi/2+.1,qr*(Dn/2+1.2)),ct.rotation.y=Math.atan2(ir,qr);let gi=Et[nn]??[1,1,1];ct.material.color.setRGB(gi[0]*.25,gi[1]*.25,gi[2]*.25),ct.material.emissive.setRGB(gi[0],gi[1],gi[2]),ct.material.emissiveIntensity=(.04+1.8*k.lights)*q,ct.material.opacity=q});let zn=`${Ce.objectKey}|${Ce.calib}`;zn!==ue&&(j(Ce),ue=zn);let Jn=k.object*q;B.visible=Jn>.001,ne.opacity=Jn,ne.emissive.setRGB(.25*k.hot,.3*k.hot,.1*k.hot),B.position.set(Ce.pose.x,-Ce.depth,Ce.pose.y),B.rotation.y=-Ce.pose.rot,k.ry!==0&&(B.position.applyAxisAngle(new P(0,1,0),k.ry),B.rotation.y+=k.ry),h.update({x:k.sx,y:k.sy,radius:k.size,amount:k.backdrop*q}),ce.strength=k.bloom*Oe,ce.enabled=ce.strength>.001,Fe.uniforms.uGlowOn.value=ce.enabled?1:0;for(let ct of We){let nn=Lr.clamp(k[ct],0,1),bn=ie[ct];bn.visible=nn>.001;let sn=k[`${ct}S`],mi=sn*(ad[ct]??1);bn.scale.set(sn,mi,1),bn.position.set(k[`${ct}X`]+sn/2,Rt-(k[`${ct}Y`]+mi/2),0),ae[ct].uOpacity.value=nn}ae.cal.uMark.value=Math.round(k.calMark),ae.cal.uShow.value=Math.round(k.calShow),ae.four.uMark.value=Math.round(k.fourMark);for(let ct of["rel","tru"])te[ct].uGain.value=sy/od,te[ct].uCrop.value=Math.min(od/Ze,1)}function pe(k,q=y){if(q[k]<=.02)return null;let Ce=q[`${k}S`],Ze=Ce*(ad[k]??1),at=oy[k],Tt=at[Math.min(Math.round(q[`${k}Title`]??0),at.length-1)];if(k==="rel"||k==="err"){let Et=s.status;Et.model!=="ready"?Tt=k==="rel"?"Shape \xB7 SITR not loaded":"SITR vs truth \xB7 not loaded":Et.fresh||(Tt=k==="rel"?"Shape \xB7 updating\u2026":"SITR vs truth \xB7 updating\u2026")}return{name:k,x0:q[`${k}X`],y0:q[`${k}Y`],x1:q[`${k}X`]+Ce,y1:q[`${k}Y`]+Ze,amount:q[k],title:Tt}}function Me(k){let q=pe(k);if(!q)return;let Ce=Math.round(q.x0*Z),Ze=Math.round((Rt-q.y1)*Z),at=Math.round((q.x1-q.x0)*Z),Tt=Math.round((q.y1-q.y0)*Z);n.setViewport(Ce,Ze,at,Tt),n.setScissor(Ce,Ze,at,Tt),n.setScissorTest(!0),n.setClearColor(de,1),n.clear(!0,!0,!1),se.position.set(0,1.22,1.78),se.lookAt(0,.03,.02),se.updateMatrixWorld(),te[k].uEye.value.copy(se.position);for(let[Et,zn]of Object.entries(Se))zn.visible=Et===k;n.render(J,se),n.setScissorTest(!1)}function je(){let k=y,q=k.rel>.02||k.err>.02;s.update(k,{wantAtlas:k.cal>.02,wantEstimate:q,wantGallery:k.four>.02,wantReference:k.ref>.02});let Ce=s.status.fresh?0:1;ae.err.uStale.value=Ce,te.rel.uStale.value=Ce,re.render();let Ze=n.autoClear;n.autoClear=!1,n.setRenderTarget(null),n.setViewport(0,0,Lt*Z,Rt*Z),n.render(Qe,F),Me("rel"),Me("tru"),n.setViewport(0,0,Lt*Z,Rt*Z),n.autoClear=Ze}function le(k,q){n.setSize(k,q,!1),re.setSize(k,q),re.writeBuffer.setSize(1,1),Z=k/Lt}let we=new P;function Be(k){return we.copy(k).project(a),{x:(we.x+1)/2*Lt,y:(1-we.y)/2*Rt,behind:we.z>1}}function ke(k){let q=(z?z.sensor.fov:Dn)/Dn,Ce=Dn,Ze=at=>at.multiplyScalar(q).applyAxisAngle(new P(0,1,0),y.ry);switch(k){case"camera":return Ze(new P(0,-hi-ra+6,0));case"light":{let at=v.find(Tt=>Tt.visible)??v[0];return Ze(new P(at.position.x,-hi/2,at.position.z))}case"gel":return Ze(new P(Ce*.5,-hi/2,Ce*.2));case"membrane":return Ze(new P(-Ce*.3,0,Ce*.3));case"object":return new P(B.position.x,B.position.y+2,B.position.z);default:return new P(0,0,0)}}function Ee(){return null}let Je=new Yo,He=new oe,ot=new dn(new P(0,1,0),0),L=new P;function ge(k,q){return He.set(k/Lt*2-1,1-q/Rt*2),Je.setFromCamera(He,a),Je.ray.intersectPlane(ot,L)?{x:L.x,y:L.z}:null}let Y={sensor:u,object:B},Q=new P;function ve(k){let q=1/0,Ce=1/0,Ze=-1/0,at=-1/0;return k.updateWorldMatrix(!0,!0),k.traverseVisible(Tt=>{let Et=Tt.isMesh?Tt.geometry.attributes.position:null,zn=Et?Math.max(1,Math.floor(Et.count/400)):1;for(let Jn=0;Et&&Jn<Et.count;Jn+=zn){if(Q.fromBufferAttribute(Et,Jn).applyMatrix4(Tt.matrixWorld).applyMatrix4(a.matrixWorldInverse),Q.z>-a.near)continue;Q.applyMatrix4(a.projectionMatrix);let ct=(Q.x+1)/2*Lt,nn=(1-Q.y)/2*Rt;q=Math.min(q,ct),Ce=Math.min(Ce,nn),Ze=Math.max(Ze,ct),at=Math.max(at,nn)}}),Ze>q?{x0:q,y0:Ce,x1:Ze,y1:at}:null}function xe(){return ry.map(k=>pe(k)).filter(Boolean)}function Ge(){return[...Object.entries(Y).filter(([,q])=>q.visible).map(([q,Ce])=>({name:q,...ve(Ce)})).filter(q=>q.x1>q.x0),...xe().map(({name:q,x0:Ce,y0:Ze,x1:at,y1:Tt})=>({name:q,x0:Ce,y0:Ze,x1:at,y1:Tt}))]}async function gt(){let k=n.getRenderTarget();Ae({...Or,view:1,ref:1,four:1,rel:1,tru:1,err:1,cal:1,depth:.8});let q=new Kt(2,2),Ce=new tn;for(let at of[ce.materialHighPassFilter,...ce.separableBlurMaterials,ce.compositeMaterial,Fe.material])Ce.add(new Ne(q,at));let Ze=new en(-1,1,1,-1,0,1);n.setRenderTarget(re.readBuffer),await n.compileAsync(r,a),n.setRenderTarget(null),await n.compileAsync(Ce,Ze),await n.compileAsync(Qe,F),await n.compileAsync(J,se),n.setRenderTarget(k),q.dispose(),Ae({...Or})}return{setSize:le,applyState:Ae,render:je,project:Be,anchor:ke,cover:Ee,pick:ge,subjectRect:Ge,windows:xe,warmUp:gt,setTheme:E,renderer:n,camera:a,live:s,describe:()=>z}}var vd=["script","yields","pointer","wheel","transition","stage","hint","focus","crop","testPoint","sound"],xy=Object.fromEntries(cd.map(i=>[i,[0,1e-4]])),ud=Object.fromEntries(ci.map((i,e)=>[i,e])),Qs=Object.fromEntries(qn.map((i,e)=>[i,e])),dd={az:.62,el:.4,size:520,sx:1340,sy:600,ty:-8},is={az:.55,el:.42,size:470,sx:1010,sy:590,ty:-7},fd={az:.45,el:-.5,size:600,sx:1240,sy:440,ty:-3,shell:.06},zc={...is,sx:500,sy:735,size:265},pd={view:[.3,.7],four:[.3,.7]},Ct=(i,e,t,n)=>({[i]:1,[`${i}X`]:e,[`${i}Y`]:t,[`${i}S`]:n}),$s={obj:Qs.screw,depth:1.5},md={obj:Qs.ball,depth:.9},kc={...is,sx:980,size:400,...$s,shell:.3,...Ct("ref",1270,300,270),...Ct("view",1580,300,270),viewTitle:1},Vc={...is,sx:825,sy:760,size:270,...$s,...Ct("view",1e3,190,270),...Ct("cal",1e3,560,270)},gd={...is,sx:760,sy:600,size:430,shell:.35,...Ct("cal",1190,220,600)},yd={hero:{...dd,obj:Qs.ball,depth:-4,script:"spin",stage:{view:[0,.7]}},hookOne:{...zc,...$s,sensor:ud.mini,...Ct("view",1100,220,520)},hookSwap:{...zc,...$s,...Ct("view",1100,220,520),script:"cycleSensors",stage:pd},hookReal:{...zc,...$s,sensor:ud.mini,...Ct("four",860,230,944),stage:pd},paintGel:{...is,obj:Qs.ball,script:"pressIn",lights:.5,...Ct("tru",1400,240,420),truTitle:1,stage:{four:[.15,.6],tru:[.35,.8]}},paintLights:{...fd,...md,lights:1},paintCamera:{...fd,sx:1090,size:540,...md,...Ct("view",1500,170,280)},paintPress:{...is,shell:.3,obj:Qs.ball,depth:.8,...Ct("view",1400,240,420),pointer:"press",wheel:{key:"depth",min:0,max:1.8,rate:-.0015},hint:"Move over the pad to slide the object \xB7 scroll to press",testPoint:[1010,495]},differLights:{...kc,script:"sweepLights",yields:["tEl"],wheel:{key:"tEl",min:-6,max:30,rate:-.02,start:0},hint:"Scroll to raise or lower the lights"},differGel:{...kc,script:"sweepGel",yields:["tSoft"],wheel:{key:"tSoft",min:.1,max:1.6,rate:-.001,start:.77},hint:"Scroll to change the gel"},differCamera:{...kc,script:"sweepFov",yields:["tFov"],wheel:{key:"tFov",min:11,max:17.5,rate:-.006,start:14.1},hint:"Scroll to widen or narrow the view"},calBall:{...gd,script:"calibrateBall"},calCorner:{...gd,script:"calibrateCorner"},modelIn:{...Vc},modelOut:{...Vc,...Ct("rel",1560,150,290),...Ct("tru",1560,530,290)},modelSwap:{...Vc,...Ct("rel",1560,150,290),...Ct("tru",1560,530,290),...Ct("four",120,520,520),script:"cycleFour"},sandbox:{...is,sandbox:1,sx:925,sy:640,size:340,shell:.3,...$s,...Ct("view",1170,110,280),...Ct("rel",1520,110,280),...Ct("err",1170,478,280),...Ct("tru",1520,478,280),pointer:"press",wheel:{key:"depth",min:0,max:1.8,rate:-.0015},hint:"Move over the pad to slide the object \xB7 scroll to press",testPoint:[925,567]},credits:{...dd,sx:1480,size:480,obj:Qs.ball,depth:-4,script:"spin"}},Hc=i=>i*i*(3-2*i),Gc=i=>Math.min(Math.max(i,0),1),vy={spin:i=>({ry:i*.12}),pressIn:i=>({depth:-3+3.9*Hc(Gc((i-.4)/2.2))}),cycleSensors:i=>({sensor:Math.floor(i/2.8)%4}),cycleFour:i=>{let e=Math.floor(i/3.4)%4;return{sensor:e,fourMark:e}},sweepLights:i=>({tEl:12-12*Math.cos(i*.7)}),sweepGel:i=>({tSoft:.85-.6*Math.cos(i*.7)}),sweepFov:i=>({tFov:15.2-1.8*Math.cos(i*.6)}),calibrateBall:i=>xd(i,0),calibrateCorner:i=>xd(i,9)};function xd(i,e){if(i>=9*1.1)return{calib:e+8,calibIn:0,calMark:-1,calShow:e+9};let n=Math.floor(i/1.1),s=(i-n*1.1)/1.1,r=Hc(Gc(s/.3))*(1-Hc(Gc((s-.8)/.2))),o=s>=.3;return{calib:e+n,calibIn:r,calMark:o?e+n+1:-1,calShow:e+n+(o?1:0)}}function Li(i,e){let t=yd[i]??{},n={...Or};for(let[s,r]of Object.entries(t))vd.includes(s)||(n[s]=r);return e!==null&&t.script&&Object.assign(n,vy[t.script](e)),n}function ui(i){let e=yd[i]??{},t=Object.fromEntries(vd.map(n=>[n,e[n]??null]));return t.stage={...xy,...e.stage??{}},t}var Xc={};af(Xc,{FIXTURES:()=>yy,debug:()=>Ry,finalize:()=>My,overlay:()=>Ey,pointers:()=>wy,readouts:()=>by,setup:()=>Ay,widgets:()=>_y});var yy=["view","ref","four","rel","tru","err","cal","object"],Wc=null,$e={sensor:0,obj:qn.indexOf("screw"),seed:7,tEl:0,tSoft:0,tFov:0,tKs:-1,px:0,py:0,touched:!1};function My(i){let e={...i,tick:Wc?Wc.live.tick():0};return i.sandbox>.5&&(e.sensor=$e.sensor,e.obj=$e.obj,e.seed=$e.seed,e.tEl=$e.tEl,e.tSoft=$e.tSoft,e.tFov=$e.tFov,e.tKs=$e.tKs,$e.touched&&(e.px=$e.px,e.py=$e.py)),e}function Sy(i){let e=i.status;return e.model==="ready"?`SITR is running live \xB7 ${e.provider==="webgpu"?"on your GPU":"on your CPU (slow without WebGPU)"}`:e.model==="loading"?e.got>=e.total?"Starting SITR\u2026":`Loading SITR \xB7 ${Math.round(e.got/1e6)} / ${Math.round(e.total/1e6)} MB`:e.model==="failed"?"SITR did not start in this browser":e.model==="waiting"?"SITR loads on your first click":"SITR is switched off"}function by(i,{scene:e}){let t=e.describe();if(!t)return{};let n=t.sensor.lights.map(s=>s.el);return{model:Sy(e.live),sensor:t.sensor.madeUp?`Made up \xB7 ${t.sensor.label}`:`${t.sensor.label} \xB7 fitted`,object:t.object.label,depth:t.depth>0?`${t.depth.toFixed(2)} mm`:"lifted",field:`${t.sensor.fov.toFixed(1)} mm`,lights:`${Math.round(n.reduce((s,r)=>s+r,0)/n.length)}\xB0`,skirt:`${t.sensor.softness.toFixed(2)} mm`,seed:Math.round(i.obj)>=ns?`#${Math.round(i.seed)}`:""}}var wy={press:{hits(i,{scene:e,pointer:t}){if(!t.inside)return null;let n=e.describe(),s=e.pick(t.x,t.y),r=n?n.sensor.fov*.5:7;return s&&Math.abs(s.x)<r*1.15&&Math.abs(s.y)<r*1.15?{x:Math.min(Math.max(s.x,-r*.9),r*.9),y:Math.min(Math.max(s.y,-r*.9),r*.9)}:null},hand(i,e){return i.sandbox>.5&&($e.px=e.x,$e.py=e.y,$e.touched=!0),{px:e.x,py:e.y,hot:1}},idle(i){return{...i,hot:0}}}},Ty=12.9;function Ey(i,{scene:e}){let t="";for(let n of e.windows()){let s=Math.min(Math.max(n.amount,0),1).toFixed(3),r=Math.round(n.title.length*Ty+36);if(t+=`<g opacity="${s}">
      <rect x="${(n.x0-1).toFixed(1)}" y="${(n.y0-1).toFixed(1)}" width="${(n.x1-n.x0+2).toFixed(1)}" height="${(n.y1-n.y0+2).toFixed(1)}" rx="6" fill="none" style="stroke:var(--line-strong);stroke-width:2"/>
      <rect x="${n.x0.toFixed(1)}" y="${(n.y1+14).toFixed(1)}" width="${r}" height="40" rx="20" fill="none" style="stroke:var(--line-strong);stroke-width:1.5"/>
      <text x="${(n.x0+18).toFixed(1)}" y="${(n.y1+42).toFixed(1)}" style="fill:var(--ink);font-size:24px;font-weight:700">${n.title}</text>`,n.name==="cal"&&n.x1-n.x0>500&&i.calShow>=0){let o=(n.x1-n.x0)/Un.cols,a=Nc(0);t+=`<text x="${(n.x0+(a.col+.5)*o).toFixed(1)}" y="${(n.y0+(a.row+1)*o+26).toFixed(1)}" text-anchor="middle" style="fill:var(--ink-2);font-size:24px;font-weight:600">empty</text>`}t+="</g>"}return t}var vn={w:560,h:330},_y={slopes:{init(i){i.setAttribute("viewBox",`0 0 ${vn.w} ${vn.h}`),i.setAttribute("width",vn.w),i.setAttribute("height",vn.h),i.innerHTML=`
        <path data-part="object" style="fill:var(--line);stroke:var(--ink-3);stroke-width:2"/>
        <path data-part="flat" fill="none" style="stroke:var(--ink-2);stroke-width:5;stroke-linecap:round"/>
        <path data-part="left" fill="none" style="stroke:#ff5a52;stroke-width:7;stroke-linecap:round"/>
        <path data-part="right" fill="none" style="stroke:#5b8cff;stroke-width:7;stroke-linecap:round"/>
        <g data-part="rays" style="stroke-width:2;stroke-dasharray:3 7;fill:none">
          <path data-part="ray-left" style="stroke:#ff5a52"/>
          <path data-part="ray-right" style="stroke:#5b8cff"/>
        </g>
        <rect x="14" y="196" width="18" height="46" rx="6" style="fill:#ff5a52"/>
        <rect x="${vn.w-32}" y="196" width="18" height="46" rx="6" style="fill:#5b8cff"/>
        <text x="14" y="276" style="fill:var(--ink-2);font-size:24px;font-weight:600">light</text>
        <text x="${vn.w-14}" y="276" text-anchor="end" style="fill:var(--ink-2);font-size:24px;font-weight:600">light</text>
        <text x="${vn.w/2}" y="34" text-anchor="middle" style="fill:var(--ink-2);font-size:24px;font-weight:600">object</text>
        <text x="60" y="150" style="fill:var(--ink-2);font-size:24px;font-weight:600">membrane</text>
        <g data-part="camera">
          <path d="M${vn.w/2-34} 322 h68 v-22 h-18 l-8 -14 h-16 l-8 14 h-18 z" style="fill:none;stroke:var(--ink);stroke-width:2.5"/>
          <text x="${vn.w/2+48}" y="316" style="fill:var(--ink);font-size:24px;font-weight:700">camera</text>
        </g>`},update(i,e){let t=Math.min(Math.max(e.depth,0),1.8),n=e.view>.5?1:0,s=`${t.toFixed(2)}|${n}`;if(i.dataset.key===s)return;i.dataset.key=s;let r=165,o=vn.w/2,a=95,l=t*42,c=Math.sqrt(Math.max(a*a-(a-l)*(a-l),0)),h=x=>r+l-(a-Math.sqrt(Math.max(a*a-(x-o)*(x-o),0))),u=(x,p)=>{let f="";for(let T=0;T<=24;T+=1){let S=x+(p-x)*T/24;f+=`${T?"L":"M"}${S.toFixed(1)} ${h(S).toFixed(1)}`}return f},d=x=>i.querySelector(`[data-part="${x}"]`);d("object").setAttribute("d",`M${o-a} ${r+l-a} a${a} ${a} 0 1 0 ${2*a} 0 a${a} ${a} 0 1 0 ${-2*a} 0`),d("flat").setAttribute("d",`M60 ${r} L${(o-c).toFixed(1)} ${r} M${(o+c).toFixed(1)} ${r} L${vn.w-60} ${r}`),d("left").setAttribute("d",c>2?u(o-c,o-2):""),d("right").setAttribute("d",c>2?u(o+2,o+c):"");let m=o-c*.55,g=o+c*.55;d("ray-left").setAttribute("d",c>2?`M34 214 L${m.toFixed(1)} ${(h(m)+5).toFixed(1)}`:""),d("ray-right").setAttribute("d",c>2?`M${vn.w-34} 214 L${g.toFixed(1)} ${(h(g)+5).toFixed(1)}`:""),d("camera").setAttribute("opacity",n)}}};function Ay({scene:i,stage:e}){Wc=i;let t=()=>i.live.start();window.addEventListener("pointerdown",t,{once:!0,capture:!0}),window.addEventListener("keydown",t,{once:!0,capture:!0}),(navigator.webdriver||new URLSearchParams(location.search).get("model")==="auto")&&t();let n=document.getElementById("sandbox-controls");if(!n)return;for(let u of["click","keydown","wheel","pointerdown"])n.addEventListener(u,d=>d.stopPropagation());let s=n.querySelector("[data-pick='sensor']");ci.forEach((u,d)=>{let m=document.createElement("button");m.type="button",m.textContent=Ln[u].madeUp?`Made up ${d-3}`:Ln[u].label,m.title=Ln[u].label,m.dataset.value=d,s.append(m)});let r=n.querySelector("[data-pick='object']");qn.filter(u=>u!=="corner").forEach(u=>{let d=document.createElement("button");d.type="button",d.textContent=Fr[u].label,d.dataset.value=qn.indexOf(u),r.append(d)});let o={tEl:n.querySelector("[data-slide='tEl']"),tSoft:n.querySelector("[data-slide='tSoft']"),tFov:n.querySelector("[data-slide='tFov']")},a=n.querySelector("[data-seed]"),l={tEl:n.querySelector("[data-out='tEl']"),tSoft:n.querySelector("[data-out='tSoft']"),tFov:n.querySelector("[data-out='tFov']")};function c(){let u=Ln[ci[$e.sensor]],d=u.lights.reduce((m,g)=>m+g.el,0)/u.lights.length;l.tEl.textContent=`${Math.round(d+$e.tEl)}\xB0 up`,l.tSoft.textContent=`${($e.tSoft>0?$e.tSoft:u.softness).toFixed(2)} mm skirt`,l.tFov.textContent=`${($e.tFov>0?$e.tFov:u.fov).toFixed(1)} mm wide`}function h(){for(let d of s.children)d.classList.toggle("on",Number(d.dataset.value)===$e.sensor);for(let d of r.children)d.classList.toggle("on",Number(d.dataset.value)===$e.obj);let u=Ln[ci[$e.sensor]];o.tEl.value=$e.tEl,o.tSoft.value=$e.tSoft>0?$e.tSoft:u.softness,o.tFov.value=$e.tFov>0?$e.tFov:u.fov,a.textContent=$e.obj>=ns?`seed ${$e.seed}`:"",n.querySelector("[data-random]").classList.toggle("on",$e.obj>=ns),c()}s.addEventListener("click",u=>{let d=u.target.closest("button");d&&(Object.assign($e,{sensor:Number(d.dataset.value),tEl:0,tSoft:0,tFov:0,tKs:-1}),h())}),r.addEventListener("click",u=>{let d=u.target.closest("button");d&&(Object.assign($e,{obj:Number(d.dataset.value),px:0,py:0,touched:!1}),h())}),n.querySelector("[data-random]").addEventListener("click",()=>{Object.assign($e,{obj:ns,seed:crypto.getRandomValues(new Uint32Array(1))[0]%1e6,px:0,py:0,touched:!1}),h()});for(let[u,d]of Object.entries(o))d.addEventListener("input",()=>{$e[u]=Number(d.value),c()});n.querySelector("[data-reset]").addEventListener("click",()=>{Object.assign($e,{tEl:0,tSoft:0,tFov:0,tKs:-1,px:0,py:0,touched:!1}),h()}),h()}var Ry={sandbox:$e};var Cy={bg:"--bg",ink:"--ink",ink2:"--ink-2",ink3:"--ink-3",accent:"--accent",second:"--second",interf:"--interf",truth:"--truth",prior:"--prior",data0:"--data-0",data1:"--data-1",line:"--line",lineStrong:"--line-strong"};function qc(){let i=getComputedStyle(document.documentElement),e={name:document.documentElement.dataset.theme||"dark"};for(let[t,n]of Object.entries(Cy))e[t]=i.getPropertyValue(n).trim();return e.glow=Number(i.getPropertyValue("--glow"))||0,e.dark=e.name!=="light",e}function Md(){let i=new URLSearchParams(location.search).get("theme");i&&(document.documentElement.dataset.theme=i)}var Py={paperclip:'<path d="M21.4 11.1l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',note:'<path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/>',strawberry:'<path d="M12 21.5C6.5 18 3.8 13.2 4.6 9.6 5.4 6.4 9 5.6 12 7.2c3-1.6 6.6-.8 7.4 2.4.8 3.6-1.9 8.4-7.4 11.9Z"/><path d="M8.6 4.6 12 7.2l3.4-2.6M12 7.2V3"/><path d="M9 11.2h.01M12 13.6h.01M15 11.2h.01M10.4 16h.01M13.6 16h.01" stroke-width="2.2"/>',apple:'<path d="M12 7.4C9.4 5.4 4.8 6.4 4.8 11.4c0 4.6 3 9.1 5.6 9.1.8 0 1.1-.5 1.6-.5s.8.5 1.6.5c2.6 0 5.6-4.5 5.6-9.1 0-5-4.6-6-7.2-4Z"/><path d="M12 7.4c0-2 .8-3.3 2.2-4.2"/><path d="M14.6 4.4c1.2-.9 2.6-.9 3.6-.4-.4 1.2-1.6 2-3 2"/>',coin:'<circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="5.2"/>',drop:'<path d="M12 3.4c3.6 4.3 6 7.4 6 10.6a6 6 0 0 1-12 0c0-3.2 2.4-6.3 6-10.6Z"/>',hair:'<path d="M9.5 2.5c4.6 3.1-3.6 6.4 1 9.5s-3.6 6.4 1 9.5"/><path d="M14.5 2.5c4.6 3.1-3.6 6.4 1 9.5" opacity="0.45"/>',grain:'<ellipse cx="12" cy="12" rx="3.6" ry="8.4" transform="rotate(38 12 12)"/><path d="M9.4 15.4c1.2-2.6 2.8-4.9 5.2-6.8" opacity="0.45"/>',sheet:'<path d="M4 7.5 14.5 4 20 6 9.5 9.5Z"/><path d="M4 7.5v1.2l5.5 2 10.5-3.5V6"/>',cube:'<path d="M12 3.6 20.4 7.8 12 12 3.6 7.8Z"/><path d="M3.6 7.8v8.2L12 20.2l8.4-4.2V7.8"/><path d="M12 12v8.2"/>',finger:'<path d="M8.4 21.5V8.1a3.6 3.6 0 0 1 7.2 0v13.4"/><path d="M10.2 8.3a1.8 1.8 0 0 1 3.6 0v2.9h-3.6Z"/><path d="M10.2 15.6h3.6"/>',marshmallow:'<rect x="5.5" y="11.6" width="6" height="7.8" rx="2.2" transform="rotate(-45 8.5 15.5)"/><rect x="12" y="5.1" width="6" height="7.8" rx="2.2" transform="rotate(-45 15 9)"/><path d="M2.6 21.4 6.4 17.6M10.6 13.4l2.3-2.3M17.1 6.9 21 3"/>',ruler:'<rect x="2.5" y="8.5" width="19" height="7" rx="1.2"/><path d="M6 8.5v3M9.5 8.5v2M13 8.5v3M16.5 8.5v2"/>',guitar:'<circle cx="8.6" cy="15.4" r="5.4"/><circle cx="8.6" cy="15.4" r="1.5"/><path d="M12.4 11.6 19.6 4.4M18 2.9l3.1 3.1"/>',door:'<rect x="6.5" y="2.8" width="11" height="18.4" rx="0.8"/><path d="M14.3 12h.01" stroke-width="2.4"/>',doorway:'<path d="M5 21V4h14v17"/><path d="M8 16.5h8M8 16.5l1.8-1.6M8 16.5l1.8 1.6M16 16.5l-1.8-1.6M16 16.5l-1.8 1.6"/>',person:'<circle cx="12" cy="5" r="2.3"/><path d="M12 7.6v7.2M8 10.4h8M12 14.8l-3 6.2M12 14.8l3 6.2"/>',clock:'<circle cx="12" cy="12" r="8.6"/><path d="M12 12V5.9M12 12l1.3-5.9"/>'},Iy='fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';function Yc(i,e={}){let t=e[i]??Py[i];return t?`<g ${Iy}>${t}</g>`:""}function Sd(i,e={}){for(let t of i.querySelectorAll("svg[data-icon]")){let n=Yc(t.dataset.icon,e);n&&(t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("aria-hidden","true"),t.innerHTML=n)}}var oa={left:96,right:190,top:44,bottom:86},bd={ours:"var(--accent)",prior:"var(--prior)",truth:"var(--truth)",interf:"var(--interf)",second:"var(--second)"},wd=["","10 8","3 7","14 6 3 6"],er="url(#deck-grad) var(--accent)",Ut=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;");function _d(i,e=24){let t=0;for(let n of String(i))t+=n===" "?.28:n>"\u2E7F"?1:/[ilI.,:;·'’|!]/.test(n)?.3:/[mwMW@]/.test(n)?.9:/[frtj()\-–/]/.test(n)?.4:/[A-Z]/.test(n)?.69:/[0-9]/.test(n)?.64:.58;return t*e}function Td(i,e,t,n,s){let r=_d(i)+32,o=n==="end"?e-r+16:e-r/2;return`<rect class="axis-capsule${s?" glow":""}" x="${o.toFixed(1)}" y="${(t-19).toFixed(1)}" width="${r.toFixed(1)}" height="38" rx="19"${s?` style="--c:${s}"`:""}/>`}var tr="paint-order:stroke;stroke:var(--bg);stroke-width:8px;stroke-linejoin:round";function Ly(i,e=30){i.sort((t,n)=>t.y-n.y);for(let t=1;t<i.length;t+=1)i[t].y=Math.max(i[t].y,i[t-1].y+e);return i.map(t=>`<text class="series-label" x="${t.x.toFixed(1)}" y="${t.y.toFixed(1)}" dominant-baseline="middle" style="fill:${t.color};${tr}">${Ut(t.name)}</text>`).join("")}function Zc(i,e,t){let[n,s]=i.domain;if(i.log){let r=Math.log10(n),o=Math.log10(s);return a=>e+(Math.log10(Math.max(a,n*.001))-r)/(o-r)*(t-e)}return r=>e+(r-n)/(s-n)*(t-e)}function Ed(i,e){let t=bd[i.role]??bd.prior;i.tone==="soft"&&(t=`color-mix(in srgb, ${t} 55%, var(--bg))`);let n=i.dash??(i.role==="truth"?"8 8":i.role==="prior"?wd[e%wd.length]:""),s=i.role==="ours"&&i.tone!=="soft"?5:3.5;return{color:t,dash:n,width:s}}function Uy(i,e,t){let{w:n,h:s}=e,r=e.y.anchors??{},o=Object.keys(r).length>0,a=!!e.capsules,l=e.y.format??(A=>A),c=Math.max(0,...(e.y.ticks??[]).map(A=>_d(l(A)))),h=a?Math.max(150,Math.ceil(c+64)):120,u=n-100,d=h+(o?270:40),m=40,g=s-(e.groups?.length?a?140:120:a?76:62),x=A=>(e.groups??[]).find(_=>A>=_.from&&A<=_.to),p=Zc(e.y,g,m),f=e.ours?.grad===!1?"var(--accent)":er,T=`<line class="axis" x1="${h}" x2="${h}" y1="${m}" y2="${g}"/><line class="axis" x1="${h}" x2="${u}" y1="${g}" y2="${g}"/>`;T+=`<text class="axis-title" x="${h}" y="${m-18}">${Ut(e.y.label??"")}</text>`;for(let A of e.y.ticks??[]){let _=p(A);T+=`<line class="grid" x1="${h}" x2="${u}" y1="${_.toFixed(1)}" y2="${_.toFixed(1)}" stroke-dasharray="4 9"/>`;let I=h-(a?32:16);a&&(T+=Td(l(A),I,_,"end")),T+=`<text class="tick-strong" x="${I}" y="${_.toFixed(1)}" text-anchor="end" dominant-baseline="middle">${Ut(l(A))}</text>`;let b=r[A];b&&(T+=`<g transform="translate(${h+16} ${(_-52).toFixed(1)}) scale(1.9)" style="color:var(--ink)">${Yc(b.icon,t)}</g>`,T+=`<text class="tick-strong" x="${h+70}" y="${(_-16).toFixed(1)}">${Ut(b.label)}</text>`)}let S=(u-d)/e.columns.length,M=A=>d+S*(A+.5),U=(A,_,I,b,v)=>`<circle cx="${A.toFixed(1)}" cy="${_.toFixed(1)}" r="${v?16:13}" style="fill:${v?f:"var(--prior)"}"/><text class="${v?"series-label":"point-label"}" x="${(A+(b?-24:24)).toFixed(1)}" y="${_.toFixed(1)}" dominant-baseline="middle"${b?' text-anchor="end"':""} style="${v?`fill:${f};`:""}${tr}">${Ut(I)}</text>`;e.columns.forEach((A,_)=>{T+=`<g data-col="${_}">`,a?(T+=Td(A.label,M(_),g+38,"middle",x(_)?.color),T+=`<text class="col-label" x="${M(_).toFixed(1)}" y="${g+38}" text-anchor="middle" dominant-baseline="middle">${Ut(A.label)}</text>`):T+=`<text class="col-label" x="${M(_).toFixed(1)}" y="${g+40}" text-anchor="middle">${Ut(A.label)}</text>`;let I=A.points.map(b=>({...b,py:p(b.y)})).sort((b,v)=>b.py-v.py);I.forEach((b,v)=>{let C=H=>H&&Math.abs(H.py-b.py)<32,V=C(I[v-1])&&!I[v-1].left;b.left=!V&&C(I[v+1]);let O=M(_)+(b.left?-18:V?18:0);T+=U(O,b.py,b.name,b.left,!1)}),T+="</g>"});for(let A of e.groups??[]){let _=d+S*A.from+26,I=d+S*(A.to+1)-26,b=(_+I)/2,v=g+(a?72:58),C=A.color??"var(--ink-2)";T+=`<g data-col="${A.to}"><path fill="none" style="stroke:${C};stroke-width:2.5;stroke-linecap:round" d="M${_} ${v}C${_} ${v+9} ${_} ${v+9} ${_+16} ${v+9}L${b-16} ${v+9}C${b} ${v+9} ${b} ${v+9} ${b} ${v+18}C${b} ${v+9} ${b} ${v+9} ${b+16} ${v+9}L${I-16} ${v+9}C${I} ${v+9} ${I} ${v+9} ${I} ${v}"/>`,T+=`<text class="group-label" x="${b.toFixed(1)}" y="${v+50}" text-anchor="middle" style="fill:${C}">${Ut(A.label)}</text></g>`}e.ours&&(T+=`<g data-col="ours">${U(M(e.ours.column),p(e.ours.y),e.ours.name,!1,!0)}</g>`),i.innerHTML=T}function Ad(i,e,t={}){let{w:n,h:s}=e;if(i.setAttribute("viewBox",`0 0 ${n} ${s}`),i.setAttribute("width",n),i.setAttribute("height",s),i.classList.add("chart"),e.type==="landscape"){Uy(i,e,t);return}let r=oa.left,o=n-oa.right,a=s-oa.bottom,l=oa.top,c=e.x.format??(x=>x),h=e.y.format??(x=>x),u=Zc(e.y,a,l),d="";for(let x of e.y.ticks??[]){let p=u(x).toFixed(1);d+=`<line class="grid" x1="${r}" x2="${o}" y1="${p}" y2="${p}"/>`,d+=`<text x="${r-14}" y="${p}" text-anchor="end" dominant-baseline="middle">${Ut(h(x))}</text>`}d+=`<line class="axis" x1="${r}" x2="${o}" y1="${a}" y2="${a}"/>`,d+=`<text class="axis-title" x="${r}" y="${l-18}">${Ut(e.y.label??"")}</text>`,d+=`<text class="axis-title" x="${o}" y="${s-18}" text-anchor="end">${Ut(e.x.label??"")}</text>`;let m=0,g=[];if(e.type==="bar"){let x=e.x.categories,p=(o-r)/x.length,f=e.series.length,T=Math.min(64,p*.7/f);x.forEach((S,M)=>{let U=r+p*(M+.5);d+=`<text x="${U.toFixed(1)}" y="${a+34}" text-anchor="middle">${Ut(S)}</text>`}),e.series.forEach((S,M)=>{let{color:U}=Ed(S,S.role==="prior"?m++:0),A=S.grad?er:S.role==="prior"?`color-mix(in srgb, ${U} ${100-M*18}%, transparent)`:U,_=new Set(S.soft??[]),I=`color-mix(in srgb, ${U} 45%, var(--bg))`;S.values.forEach((C,V)=>{let O=r+p*(V+.5)+(M-(f-1)/2)*(T+8),H=u(C);d+=`<rect class="series-bar" x="${(O-T/2).toFixed(1)}" y="${H.toFixed(1)}" width="${T.toFixed(1)}" height="${(a-H).toFixed(1)}" rx="4" style="fill:${_.has(V)?I:A}"/>`}),e.values&&S.values.forEach((C,V)=>{let O=r+p*(V+.5)+(M-(f-1)/2)*(T+8);d+=`<text class="series-dot bar-value" x="${O.toFixed(1)}" y="${(u(C)-12).toFixed(1)}" text-anchor="middle" style="fill:${S.role==="prior"||_.has(V)?"var(--ink-2)":U};font-variant-numeric:tabular-nums;${tr}">${Ut(h(C))}</text>`});let b=S.values.length-1,v=r+p*(b+.5)+(f-1)/2*(T+8)+T/2+14;g.push({x:v,y:u(S.values[b]),color:S.grad?er:U,name:S.name})});for(let S of e.notes??[])if(S.type==="hline"){let M=u(S.y).toFixed(1);d+=`<g class="note"><line x1="${r}" x2="${o}" y1="${M}" y2="${M}" style="stroke:var(--ink-2);stroke-width:2;stroke-dasharray:6 6"/>`,d+=`<text x="${o+14}" y="${M}" dominant-baseline="middle" style="fill:var(--ink-2);${tr}">${Ut(S.label)}</text></g>`}}else{let x=Zc(e.x,r,o);for(let p of e.x.ticks??[])d+=`<text x="${x(p).toFixed(1)}" y="${a+34}" text-anchor="middle">${Ut(c(p))}</text>`;for(let p of e.notes??[])if(p.type==="band"){let f=x(p.x0),T=x(p.x1);d+=`<g class="note"><rect x="${f.toFixed(1)}" y="${l}" width="${(T-f).toFixed(1)}" height="${a-l}" style="fill:var(--accent-soft)"/>`,d+=`<text x="${((f+T)/2).toFixed(1)}" y="${l+28}" text-anchor="middle" style="fill:var(--ink-2)">${Ut(p.label)}</text></g>`}if(e.diagonal){let[p,f]=e.x.domain;d+=`<line class="series-path" data-dash="8 8" x1="${x(p).toFixed(1)}" y1="${u(p).toFixed(1)}" x2="${x(f).toFixed(1)}" y2="${u(f).toFixed(1)}" style="stroke:var(--truth);stroke-width:2;stroke-dasharray:8 8;opacity:0.6"/>`}for(let p of e.series){let f=Ed(p,p.role==="prior"?m++:0),T=p.points.map(([U,A])=>[x(U),u(A)]);if(e.type==="line"){let U=T.map(([_,I],b)=>`${b?"L":"M"}${_.toFixed(1)} ${I.toFixed(1)}`).join(""),A=f.dash?`data-dash="${f.dash}"`:'pathLength="1"';if(d+=`<path class="series-path" ${A} d="${U}" fill="none" style="stroke:${f.color};stroke-width:${f.width};stroke-linejoin:round;stroke-linecap:round${f.dash?`;stroke-dasharray:${f.dash}`:""}"/>`,p.dots)for(let[_,I]of T)d+=`<circle class="series-dot" cx="${_.toFixed(1)}" cy="${I.toFixed(1)}" r="6.5" style="fill:${p.grad?er:f.color}"/>`}else for(let[U,A]of T)d+=`<circle class="series-dot" cx="${U.toFixed(1)}" cy="${A.toFixed(1)}" r="${p.role==="ours"?7:6}" style="fill:${p.grad?er:f.color}"/>`;let[S,M]=T[T.length-1];g.push({x:S+14,y:M,color:p.grad?er:f.color,name:p.name})}for(let p of e.notes??[])if(p.type==="point"){let f=x(p.x),T=u(p.y);d+=`<g class="note"><circle cx="${f.toFixed(1)}" cy="${T.toFixed(1)}" r="11" fill="none" style="stroke:var(--ink);stroke-width:2.5"/>`,d+=`<text x="${(f+20).toFixed(1)}" y="${(T+8).toFixed(1)}" style="fill:var(--ink);font-size:24px;font-weight:720;${tr}">${Ut(p.label)}</text></g>`}else if(p.type==="hline"||p.type==="vline"){let f=p.type==="hline"?`x1="${r}" x2="${o}" y1="${u(p.y).toFixed(1)}" y2="${u(p.y).toFixed(1)}"`:`x1="${x(p.x).toFixed(1)}" x2="${x(p.x).toFixed(1)}" y1="${a}" y2="${l}"`,T=p.type==="hline"?r+12:x(p.x)+12,S=p.type==="hline"?u(p.y)-12:l+24;d+=`<g class="note"><line ${f} style="stroke:var(--ink-3);stroke-width:2;stroke-dasharray:6 6"/>`,d+=`<text x="${T.toFixed(1)}" y="${S.toFixed(1)}" style="fill:var(--ink-2);${tr}">${Ut(p.label)}</text></g>`}}if(d+=Ly(g),e.kind){let x=Ut(e.kind.toUpperCase()),p=20+x.length*17,f=e.kind==="measured"?"var(--accent)":"var(--ink-2)",T=r+String(e.y?.label??"").length*13.2+24,S=Math.min(n-p,Math.max(o-p,T));d+=`<g class="kind-badge" transform="translate(${S.toFixed(0)} 0)"><rect width="${p.toFixed(0)}" height="40" rx="6" fill="none" style="stroke:${f}"/><text x="${(p/2).toFixed(0)}" y="20.5" text-anchor="middle" dominant-baseline="middle" style="fill:${f};font-size:24px;letter-spacing:0.06em">${x}</text></g>`}i.innerHTML=d}function Rd(i,e,t=0){let n=(o,a=0)=>({duration:o*1e3,delay:(t+a)*1e3,easing:"cubic-bezier(0.2, 0.7, 0.2, 1)",fill:"both"}),s=0;for(let o of i.querySelectorAll(".series-path"))o.dataset.dash?e(o.animate([{opacity:0},{opacity:o.style.opacity||1}],n(.6,.15*s))):(o.style.strokeDasharray="1 1",e(o.animate([{strokeDashoffset:1},{strokeDashoffset:0}],n(1.2,.15*s)))),s+=1;let r=0;for(let o of i.querySelectorAll(".series-bar"))o.style.transformBox="fill-box",o.style.transformOrigin="50% 100%",e(o.animate([{transform:"scaleY(0)"},{transform:"scaleY(1)"}],n(.9,.05*r))),r+=1;for(let o of i.querySelectorAll(".series-dot, .series-label, .note"))e(o.animate([{opacity:0},{opacity:1}],n(.5,.9+.15*(s+r/4))))}var Ui=null,ss=null,yn=null,Cd=new Map;function Pd(){return Ui||(Ui=new(window.AudioContext||window.webkitAudioContext),ss=Ui.createAnalyser(),ss.fftSize=8192,ss.connect(Ui.destination)),Ui.state==="suspended"&&Ui.resume(),Ui}function Dy(){if(!ss)return 0;let i=new Float32Array(ss.fftSize);ss.getFloatTimeDomainData(i);let e=i.length/8,t=0;for(let n=0;n<8;n+=1){let s=0;for(let r=n*e;r<(n+1)*e;r+=1)s+=i[r]*i[r];t=Math.max(t,Math.sqrt(s/e))}return t}var Ny={get sampleRate(){return Pd().sampleRate},loop(i,{level:e=.5,seconds:t=4,delay:n=0}={}){let s=Pd(),r=typeof i=="function"?i(s.sampleRate):i,o=s.createBuffer(1,r.length,s.sampleRate),a=o.getChannelData(0);for(let u=0;u<r.length;u+=1)a[u]=Math.max(-1,Math.min(1,r[u]));let l=s.createBufferSource();l.buffer=o,l.loop=!0;let c=s.createGain(),h=s.currentTime+n;return c.gain.setValueAtTime(0,s.currentTime),c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(e,h+.25),l.connect(c).connect(ss),l.start(h),{kind:"synth",seconds:t,stop(){c.gain.cancelScheduledValues(s.currentTime),c.gain.setValueAtTime(c.gain.value,s.currentTime),c.gain.linearRampToValueAtTime(0,s.currentTime+.25),l.stop(s.currentTime+.3)}}},tape(i,{from:e=0,volume:t=1,seconds:n=10,delay:s=0}={}){let r=Cd.get(i);r||(r=new Audio(i),r.preload="auto",Cd.set(i,r));let o={kind:"tape",seconds:n,element:r,failed:"",ended:!1,onFail:null,onEnd:null},a=()=>{r.currentTime=e,r.volume=t,r.play().catch(h=>{o.failed=h?.name||"error",o.onFail?.()})},l=()=>{o.ended=!0,o.onEnd?.()};r.addEventListener("ended",l);let c=s>0?setTimeout(a,s*1e3):(a(),0);return o.stop=()=>{clearTimeout(c),r.removeEventListener("ended",l),r.pause()},o},all(i,{seconds:e}={}){return{kind:"all",parts:i,seconds:e??Math.max(...i.map(t=>t.seconds??0)),stop(){for(let t of i)t.stop()}}}},aa=i=>i.kind==="all"?i.parts.flatMap(aa):[i];function Id({sounds:i,stepSound:e,stepKey:t,lang:n,addKey:s}){if(!i||!Object.keys(i).length)return null;let r=()=>{let h=e();return h&&i[h]?{name:h,key:t()}:null},o=h=>Number(getComputedStyle(h).opacity)>.5,a=h=>{let u=[...document.querySelectorAll(".slide.is-active .sound")];return u.find(d=>d.dataset.sound===h)??u.find(d=>!d.dataset.sound&&o(d))??null};function l(){yn&&(yn.run.stop(),clearTimeout(yn.timer),yn.chip?.classList.remove("is-playing","is-failed"),yn=null)}function c(){if(yn){l();return}let h=r();if(!h)return;let u=i[h.name](Ny);if(!u||typeof u.stop!="function"){console.warn(`project.sounds.${h.name} must return what audio.loop, audio.tape or audio.all returns`);return}let d=a(h.name);d?.classList.add("is-playing");let m={run:u,chip:d,timer:setTimeout(l,(u.seconds??10)*1e3)};yn=m;let g=aa(u).filter(x=>x.kind==="tape");for(let x of g)x.onFail=()=>{yn===m&&d?.classList.add("is-failed")},x.onEnd=()=>{yn===m&&aa(u).every(p=>p.kind==="tape"&&p.ended)&&l()},x.failed&&x.onFail()}return s("a",{label:String(n||"").toLowerCase().startsWith("zh")?"\u64AD\u653E\u8FD9\u4E00\u6B65\u7684\u58F0\u97F3\uFF08\u6709\u58F0\u97F3\u63D0\u793A\u6761\u7684\u6B65\uFF09":"Play this step\u2019s sound (steps with a sound chip)",run:c}),document.addEventListener("click",h=>{h.target.closest(".sound")&&c()}),window.__sound={names:()=>Object.keys(i),current:r,playing:()=>!!yn,level:Dy,state:()=>Ui?.state??"none",parts:()=>yn?aa(yn.run).map(h=>h.kind==="tape"?{kind:"tape",paused:h.element.paused,time:h.element.currentTime,error:h.element.error?.code??null,failed:h.failed,ended:h.ended}:{kind:h.kind}):[],toggle:c,stop:l},{stop:l}}var mt={...Xc};Md();var Vr=new URLSearchParams(location.search),Ld=Object.fromEntries((Vr.get("tune")??"").split(",").filter(Boolean).map(i=>{let[e,t]=i.split(":");return[e,Number(t)]})),as=Vr.has("profile")?[]:null,Sn={on:Vr.has("reader")||document.documentElement.dataset.reader==="on",waiting:!1},Ud={slide:1.7,step:1.1},Di={duration:.9,slideDelay:.55,stepDelay:.22,stagger:.07},Fy=4,Dd=4,Oy=new Set(mt.FIXTURES??[]),By=[0,.24],zy=[.74,1],Jc=.55,ua="cubic-bezier(0.2, 0.7, 0.2, 1)",da=document.getElementById("stage"),ca=document.getElementById("scene"),ky=document.getElementById("hud"),Vy=document.getElementById("chrome"),Hy=document.getElementById("counter"),Kc=document.getElementById("progress"),Br=document.getElementById("hint"),zr=document.getElementById("caption"),Qc=qc(),Wt=hd(ca,{preserve:Gt.manual,theme:Qc}),wt=Gt.now,Ni=(i,e,t)=>Math.min(t,Math.max(e,i)),jc=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Nd=i=>String(i).padStart(2,"0"),tt=[...document.querySelectorAll("section.slide")].map((i,e)=>{let t=[...i.querySelectorAll(".r, [data-step]")],n=Math.max(1,...t.map(a=>Number(a.dataset.step??0)+1)),s=i.querySelector(".notes")?.textContent.replace(/\s+/g," ").trim()??"",r=i.dataset.stepDurations?i.dataset.stepDurations.trim().split(/\s+/).map(Number):null,o=[...i.querySelectorAll("svg[data-chart][data-col-step]")].map(a=>{let l=mt.CHARTS?.[a.dataset.chart],c=Number(a.dataset.colStep)+(l?.columns?.length??1)-1;return Math.max(c,Number(a.dataset.oursStep??0))+1});return{el:i,index:e,id:i.id,steps:Math.max(n,...o),shots:(i.dataset.shots||"hero").trim().split(/\s+/),title:i.dataset.title||i.id,notes:s,stepDurations:r,duration:r?r.reduce((a,l)=>a+l,0):Number(i.dataset.duration||0),chrome:i.dataset.chrome!=="off",reveal:t}}),Fd="img, video, canvas, svg, picture",Bn=(i,e)=>i.shots[Math.min(e,i.shots.length-1)],Gy=i=>Number(i.dataset.step??0),Wy=i=>i.dataset.until===void 0?1/0:Number(i.dataset.until),Fn=(i,e)=>e>=Gy(i)&&e<=Wy(i);function Wd(i){let e=[],t=/\[Step (\d+)\]/g,n=0,s=0,r;for(;r=t.exec(i);)r.index>n&&e.push({step:s,text:i.slice(n,r.index).trim()}),s=Number(r[1])-1,n=t.lastIndex;return e.push({step:s,text:i.slice(n).trim()}),e.filter(o=>o.text)}var Xy="h1, h2, .display, .h1, .h2";function $c(i,e){let t=[...i.el.querySelectorAll(Xy)].find(n=>Fn(n.closest("[data-step], .r")??n,e));return t?t.textContent.trim().replace(/\s+/g," "):i.title}var Yn=new Set;function On(i,e=null){return i.deckStart=wt(),i.settle=e,Yn.add(i),i.addEventListener("cancel",()=>Yn.delete(i)),Gt.manual&&i.pause(),i}function qy(){for(let i of Yn){if(i.playState==="idle"){Yn.delete(i);continue}i.currentTime=Math.max(0,(wt()-i.deckStart)*1e3)}}function Yy(){let i=wt();for(let e of Yn){let t=e.effect?.getComputedTiming();if(e.playState==="idle"||!t){Yn.delete(e);continue}let n=Gt.manual?i-e.deckStart>=t.endTime/1e3:e.playState==="finished";if(e.settle){n&&(e.settle(),e.settle=null,Gt.manual||(Yn.delete(e),e.cancel()));continue}t.fill==="forwards"||t.fill==="both"||(Gt.manual&&i-e.deckStart>=t.endTime/1e3?(e.currentTime=t.endTime,Yn.delete(e)):!Gt.manual&&e.playState==="finished"&&(Yn.delete(e),e.cancel()))}}function Zy(){let i=fa+Zn;for(let e of Yn){let t=e.effect?.getComputedTiming();e.playState!=="idle"&&t&&Number.isFinite(t.endTime)&&(i=Math.max(i,e.deckStart+t.endTime/1e3))}for(let e of sh.values())i=Math.max(i,e.start+1.4);return i}var sh=new Map;function Od(i,e,t=!1){for(let c of i.getAnimations())c.cancel();i.classList.remove("is-on","is-off","is-dim");let n=i.dataset.dimmed==="1",s=n?Jc:1;e+=Number(i.dataset.delay??0);let r=i.classList.contains("callout")||i.classList.contains("real-cover");r&&!t&&(e=Math.max(e,Zn));let o={duration:t?0:Di.duration*1e3,delay:t?0:e*1e3,easing:ua},a=r?[{opacity:0},{opacity:s}]:[{opacity:0,transform:"translate3d(0, 28px, 0)"},{opacity:s,transform:"none"}];On(i.animate(a,{...o,fill:"both"}),()=>{i.classList.add("is-on"),i.classList.toggle("is-dim",n)}),On(i.animate([{filter:r?"blur(6px)":"blur(8px)"},{filter:"blur(0px)"}],{...o,fill:"backwards"}));for(let c of i.querySelectorAll(".count"))sh.set(c,{start:t?wt()-10:wt()+e+.1,to:Number(c.dataset.to),decimals:Number(c.dataset.decimals??0)});let l=i.matches("svg[data-chart]")?[i]:[...i.querySelectorAll("svg[data-chart]")];for(let c of l)if(t)for(let h of c.querySelectorAll("*"))for(let u of h.getAnimations())u.cancel();else Rd(c,h=>On(h,()=>{}),e+.25)}function Ky(i){let e=getComputedStyle(i).opacity;for(let n of i.getAnimations())n.cancel();let t=Number(i.dataset.hold??0)*1e3;i.classList.remove("is-on","is-dim"),On(i.animate([{opacity:e},{opacity:0}],{duration:200,delay:t,easing:"ease",fill:"both"}),()=>i.classList.add("is-off"))}function jy(i,e){let t=[];for(let n of i.el.querySelectorAll("[data-dim-from]")){let s=n.closest("[data-step], .r")??n,r=Fn(s,e)&&e>=Number(n.dataset.dimFrom);r!==(n.dataset.dimmed==="1")&&(n.dataset.dimmed=r?"1":"",t.push(n))}return t}function Jy(i,e,t){for(let n of i){if(e.has(n))continue;let s=n.dataset.dimmed==="1";for(let o of n.getAnimations())o.dim&&o.cancel();let r=n.animate([{opacity:s?1:Jc},{opacity:s?Jc:1}],{duration:t?0:500,easing:"ease",fill:"both"});r.dim=!0,On(r,()=>n.classList.toggle("is-dim",s))}}function Xd(i){for(let e of[i.el,...i.reveal]){e.classList.remove("is-on","is-dim");for(let t of e.getAnimations())t.cancel()}for(let e of i.el.querySelectorAll("[data-dim-from]")){e.classList.remove("is-dim"),e.dataset.dimmed="";for(let t of e.getAnimations())t.cancel()}Yd(i);for(let e of i.el.querySelectorAll("video"))e.pause(),Kn.delete(e)}function Qy(i){i.innerHTML=i.dataset.tabs.split("\xB7").map(e=>`<span>${nr(e.trim())}</span>`).join("")}function $y(i,e){for(let t of i.el.querySelectorAll("[data-tabs]")){let n=[...t.children],s=t.dataset.tabSteps?t.dataset.tabSteps.trim().split(/\s+/).map(o=>o.split("-").map(Number)):n.map((o,a)=>[a]),r=s.findIndex(([o,a=o])=>e>=o&&e<=a);r<0&&(r=e>(s.at(-1)?.at(-1)??0)?n.length-1:0),n.forEach((o,a)=>o.classList.toggle("current",a===r))}}var ze={slide:0,step:0},qd=null,fa=0,Zn=0,fi=Li(Bn(tt[0],0),0),Fi=fi,Nn=null;function jn(i,e,t={}){let n=Ni(i,0,tt.length-1),s=tt[n],r=Ni(e,0,s.steps-1),o=ze,a=n!==o.slide;if(!a&&r===o.step&&!t.force)return;let l=ui(Bn(s,r)),c=a||t.force&&!t.instant;fi=t.from??Fi,Zn=t.instant?0:l.transition??(c?Ud.slide:Ud.step),fa=wt(),ze={slide:n,step:r},qd?.stop(),jt.clock=0,jt.weight=1,jt.until=0,Gr.value=null,os.values=null,Mn.start=wt(),Mn.active=-1;let h=jy(s,r),u=new Set;if(a||t.force){if(a){Nn&&Nn.slide!==s&&(Nn.slide.el.classList.remove("is-active"),Xd(Nn.slide));let p=tt[o.slide],f=Number(p.el.dataset.leave??0),T=f>0?f:.38;if(On(p.el.animate([{opacity:1},{opacity:0}],{duration:T*1e3,easing:f>0?"ease-in-out":"ease",fill:"both"})),f>0){for(let S of p.reveal)if(Fn(S,o.step)&&!S.matches(Fd)&&!S.querySelector(Fd)){let M=getComputedStyle(S).opacity;On(S.animate([{opacity:M},{opacity:0}],{duration:380,easing:"ease",fill:"both"}))}}Nn={slide:p,until:wt()+T+.02}}for(let p of s.el.getAnimations())p.cancel();s.el.classList.add("is-active");let g=0,x=c?Di.slideDelay:Di.stepDelay;for(let p of s.reveal)if(Fn(p,r))Od(p,x+g*Di.stagger,t.instant),u.add(p),g+=1;else{for(let f of p.getAnimations())f.cancel();p.classList.remove("is-on","is-dim"),p.classList.add("is-off")}}else{let g=0;for(let x of s.reveal){let p=Fn(x,o.step),f=Fn(x,r);!p&&f?(Od(x,Di.stepDelay+g*Di.stagger),u.add(x),g+=1):p&&!f&&Ky(x)}}let d=(g,x,p)=>{let f=getComputedStyle(g).opacity;for(let T of g.getAnimations())T.cancel();On(g.animate([{opacity:f},{opacity:x}],{duration:t.instant?0:p,fill:"both"}))};d(Vy,s.chrome?1:0,500),Br&&(l.hint&&Br.classList.toggle("right",(s.el.dataset.hint??Br.dataset.side)==="right"),Br.querySelector("span").textContent=l.hint??"",d(Br,l.hint?1:0,400)),Jy(h,u,t.instant||a),eM(s,r,t.instant,a||t.force?(c?Di.slideDelay:Di.stepDelay)+.5:.15),Zd(t.instant),$y(s,r),Hy.textContent=`${Nd(n+1)} / ${Nd(tt.length)}`;let m=getComputedStyle(Kc).transform;for(let g of Kc.getAnimations())g.cancel();On(Kc.animate([{transform:m==="none"?"scaleX(0)":m},{transform:`scaleX(${tt.length>1?n/(tt.length-1):1})`}],{duration:t.instant?0:900,easing:ua,fill:"both"})),tM(),history.replaceState(null,"",`${location.search}#${s.id}${r?`.${r}`:""}`),tf()}var eh=new WeakMap;function eM(i,e,t,n){for(let s of i.el.querySelectorAll("svg[data-chart][data-col-step]")){let r=Number(s.dataset.colStep),o=Number(s.dataset.oursStep??1/0),a=0;for(let l of s.querySelectorAll("[data-col]")){let c=l.dataset.col==="ours"?e>=o:e>=r+Number(l.dataset.col);if((eh.get(l)??!1)===c)continue;eh.set(l,c);for(let u of l.getAnimations())u.cancel();l.style.transformBox="fill-box",l.style.transformOrigin="50% 60%";let h={duration:t?0:c?600:200,delay:t||!c?0:(n+a*.12)*1e3,easing:ua,fill:"both"};On(l.animate(c?[{opacity:0,transform:"scale(0.86)"},{opacity:1,transform:"none"}]:[{opacity:1},{opacity:0}],h),()=>{l.style.opacity=c?"1":"0"}),a+=c?1:0}}}function Yd(i){for(let e of i.el.querySelectorAll("svg[data-chart][data-col-step] [data-col]")){eh.delete(e),e.style.opacity="0";for(let t of e.getAnimations())t.cancel()}}function Hr(){let i=tt[ze.slide];ze.step<i.steps-1?jn(ze.slide,ze.step+1):ze.slide<tt.length-1&&jn(ze.slide+1,0)}function rh(){ze.step>0?jn(ze.slide,ze.step-1):ze.slide>0&&jn(ze.slide-1,tt[ze.slide-1].steps-1)}var Kn=new Map;function tM(){tt.forEach((i,e)=>{for(let t of i.el.querySelectorAll("video[data-autoplay]")){let n=t.closest("[data-step], .r"),s=e===ze.slide&&(!n||Fn(n,ze.step));if(s&&!Kn.has(t)){let r=t.closest(".real-cover")?Zn:0;Kn.set(t,wt()+r),t.currentTime=0,!Gt.manual&&r===0&&t.play().catch(()=>{})}else!s&&Kn.has(t)&&(Kn.delete(t),t.pause())}})}function nM(){for(let[i,e]of Kn)i.paused&&!i.ended&&wt()>=e&&i.play().catch(()=>{})}function iM(i){let e=Kn.get(i);if(e===void 0)return 0;if(!Gt.manual)return i.currentTime;let t=i.duration;if(!Number.isFinite(t)||t<=0)return 0;let n=Math.max(0,wt()-e)*i.playbackRate;return i.loop?n%t:Math.min(n,t)}function sM(){for(let[i,e]of Kn){let t=i.duration;if(!Number.isFinite(t)||t<=0)continue;let n=Math.max(0,wt()-e)*i.playbackRate,s=Number(i.dataset.fps??30),r=i.loop?n%t:Math.min(n,t),o=Math.min((Math.floor(r*s+1e-6)+.5)/s,Math.max(0,t-.5/s));Math.abs(i.currentTime-o)>1e-4&&(i.currentTime=o)}}var ha=new Map;function rM(){for(let i of document.querySelectorAll("[data-video-steps][data-hover-loop]")){let e=i.closest("section.slide")?.querySelector(i.dataset.videoSteps);for(let t of i.querySelectorAll("[data-from]"))t.addEventListener("pointerenter",()=>{Gt.manual||!e||(ha.set(i,t),e.currentTime=Number(t.dataset.from),e.play().catch(()=>{}))}),t.addEventListener("pointerleave",()=>{ha.get(i)===t&&ha.delete(i)})}}function oM(i){for(let e of i.el.querySelectorAll("[data-video-steps]")){let t=i.el.querySelector(e.dataset.videoSteps),n=ha.get(e);if(t&&n){let r=Number(n.dataset.from),o=Math.min(Number(n.dataset.to),t.duration||1/0);(t.currentTime<r||t.currentTime>=o-.05)&&(t.currentTime=r)}let s=t?t.currentTime:0;for(let r of e.querySelectorAll("[data-from]"))r.classList.toggle("current",s>=Number(r.dataset.from)&&s<Number(r.dataset.to))}}var nr=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function aM(){let i=tt[ze.slide],e=Wd(i.notes).filter(s=>s.step===ze.step).map(s=>s.text).join(" "),t=nr(e).replace(/\(([^)]*)\)/g,'<span class="do">$1</span>'),n=ui(Bn(i,ze.step)).hint;return n&&!t.includes('class="do"')&&(t+=`${t?" ":""}<span class="do">${nr(n)}</span>`),t}function Zd(i=!1){if(!zr)return;document.body.classList.toggle("reader",Sn.on);let e=Sn.on?aM():"";for(let n of zr.getAnimations())n.cancel();zr.querySelector("p").innerHTML=e,zr.classList.toggle("long",e.length>260);let t=e?1:0;On(zr.animate([{opacity:0},{opacity:t}],{duration:i?0:500,delay:i?0:300,easing:ua,fill:"both"}))}function Kd(i){Sn.on=i,Sn.waiting=!1,document.body.classList.remove("waiting"),Zd(!0)}var jt={clock:0,weight:1,until:0};function oh(){jt.until=wt()+Fy}var Ot={x:0,y:0,inside:!1,down:!1,moved:-1/0},Jt=1,pi={x:0,y:0};function Bd(i){return{x:(i.clientX-pi.x)/Jt,y:(i.clientY-pi.y)/Jt}}function lM(i){let e=i.getBoundingClientRect(),t=Ot.x*Jt+pi.x,n=Ot.y*Jt+pi.y,s=Ot.inside&&t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom,r=i.getScreenCTM?.();if(r){let o=new DOMPoint(t,n).matrixTransform(r.inverse());return{x:o.x,y:o.y,inside:s}}return{x:(t-e.left)/Jt,y:(n-e.top)/Jt,inside:s}}var ls=i=>({scene:Wt,pointer:Ot,local:lM,dt:i,now:wt(),project:Wt.project,takeOver:oh});function jd(i){return i.pointer?mt.pointers?.[i.pointer]??null:null}var os={values:null};function cM(i,e,t){let n=jd(e);if(!n)return i;let s=ls(t),r=Ot.inside?n.hits(i,s):null;r?(oh(),os.values=n.hand(i,r,s)):os.values&&n.idle&&(os.values=n.idle(os.values));let o=1-jt.weight;if(!os.values||o<=0)return i;let a={...i};for(let[l,c]of Object.entries(os.values))a[l]=ah(l,i[l],c,o);return a}var Gr={value:null};function hM(i){let e=ui(Bn(tt[ze.slide],ze.step)).wheel;if(!e)return;i.preventDefault(),oh();let t=Gr.value??Fi[e.key];t>=e.min&&t<=e.max||(t=e.start??(e.min+e.max)/2),Gr.value=Ni(t+i.deltaY*e.rate,e.min,e.max)}function uM(i,e){return e.wheel&&Gr.value!==null?{...i,[e.wheel.key]:Gr.value}:i}var Mn={start:0,active:-1,weights:{}};function dM(i){return Ot.inside?i.findIndex(e=>{let t=e.getBoundingClientRect(),n=(t.left-pi.x)/Jt,s=(t.top-pi.y)/Jt;return Ot.x>=n&&Ot.x<=n+t.width/Jt&&Ot.y>=s&&Ot.y<=s+t.height/Jt}):-1}function fM(i,e,t){let n=[...i.el.querySelectorAll("[data-tile]")].filter(l=>Fn(l.closest("[data-step], .r")??l,ze.step)),s=new Set(n.map(l=>l.dataset.tile)),r=-1;if(n.length){let l=dM(n);l>=0&&(Mn.start=wt()-l*Dd),r=l>=0?l:Math.floor((wt()-Mn.start)/Dd)%n.length,r!==Mn.active&&(n.forEach((c,h)=>c.classList.toggle("active",h===r)),Mn.active=r)}let o=1-Math.exp(-t*5);for(let l of new Set([...s,...Object.keys(Mn.weights)])){let c=r>=0&&n[r].dataset.tile===l?1:0,h=Mn.weights[l]??0;Mn.weights[l]=Math.abs(c-h)<.001?c:h+(c-h)*o}for(let l of n){let h=(.55+.45*(Mn.weights[l.dataset.tile]??0)).toFixed(3);l.style.opacity!==h&&(l.style.opacity=h)}let a=Object.values(Mn.weights).some(l=>l>0);return mt.tiles&&(n.length||a)?mt.tiles(e,Mn.weights):e}var th=[];function pM(i){let e=[...i.el.querySelectorAll(".callout")].map(n=>{let s=n.dataset.side==="left"?"left":"right",r=Wt.project(Wt.anchor(n.dataset.anchor,s)),o=r.y+Number(n.dataset.dy??0);return{el:n,side:s,anchor:r,y:o,w:n.offsetWidth,h:n.offsetHeight||56,opacity:Number(getComputedStyle(n).opacity)}}),t="";th=[];for(let n of["left","right"]){let s=e.filter(o=>o.side===n).sort((o,a)=>o.anchor.y-a.anchor.y);for(let o=1;o<s.length;o+=1)s[o].y=Math.max(s[o].y,s[o-1].y+(s[o-1].h+s[o].h)/2+18);let r=n==="left"?-1:1;for(let o of s){let a=Number(o.el.dataset.x),l=n==="left"?a-o.w:a;if(o.el.style.transform=`translate(${l.toFixed(1)}px, ${(o.y-o.h/2).toFixed(1)}px)`,o.opacity>.01){let c=[[o.anchor.x,o.anchor.y],[a-r*44,o.y],[a-r*16,o.y]];th.push({name:(o.el.querySelector("b")??o.el).textContent.trim().replace(/\s+/g," ").slice(0,26),points:c,opacity:o.opacity}),t+=`<g opacity="${o.opacity.toFixed(3)}"><polyline points="${c.map(([h,u])=>`${h.toFixed(1)},${u.toFixed(1)}`).join(" ")}" fill="none" style="stroke:var(--line-strong);stroke-width:1.5"/><circle cx="${o.anchor.x.toFixed(1)}" cy="${o.anchor.y.toFixed(1)}" r="5" style="fill:var(--accent)"/></g>`}}}return t}function mM(i){if(Wt.cover)for(let e of i.el.querySelectorAll(".real-cover[data-cover]")){let t=Wt.cover(e.dataset.cover);if(!t)continue;let n=t.r===void 0?{x:t.x,y:t.y,w:t.w,h:t.h}:{x:t.x-t.r,y:t.y-t.r,w:2*t.r,h:2*t.r},s=`${n.x.toFixed(1)} ${n.y.toFixed(1)} ${n.w.toFixed(1)} ${n.h.toFixed(1)}`;e.dataset.at!==s&&(e.dataset.at=s,e.classList.toggle("rect",t.r===void 0),e.style.left=`${n.x.toFixed(1)}px`,e.style.top=`${n.y.toFixed(1)}px`,e.style.width=`${n.w.toFixed(1)}px`,e.style.height=`${n.h.toFixed(1)}px`)}}var gM=new Set(mt.CARRIERS??[]),nh=new Set;function xM(i,e,t){if(nh.clear(),!mt.tracks)return e;let n=e;for(let s of i.el.querySelectorAll("video[data-track]")){let r=mt.tracks[s.dataset.track];if(!r||!Kn.has(s))continue;let o=r(iM(s),e);if(o){n={...n};for(let[a,l]of Object.entries(o))n[a]=typeof e[a]=="number"&&!gM.has(a)?ah(a,e[a],l,t):l,nh.add(a)}}return n}var zd=wt(),Wr="",kd="",Vd=new Map;function la(i){as&&(as.at(-1)[i]=performance.now())}function ah(i,e,t,n){let s=ld[i];if(s){let r=(t-e)%s;return r>s/2&&(r-=s),r<-s/2&&(r+=s),e+r*n}return e+(t-e)*n}function Jd(){as&&(as.push({start:performance.now()}),as.length>600&&as.shift()),Yy(),Gt.manual?(qy(),sM()):nM();let i=wt(),e=Ni(i-zd,0,.1);zd=i;let t=tt[ze.slide],n=Bn(t,ze.step),s=ui(n),r=i-fa,o=i<jt.until,a=o?0:1;jt.weight+=(a-jt.weight)*(1-Math.exp(-e*5)),Math.abs(a-jt.weight)<1e-4&&(jt.weight=a),o||(jt.clock+=e);let l=Li(n,r);if(s.yields){let m=Li(n,null),g=Li(n,jt.clock);for(let x of s.yields)l[x]=m[x]+(g[x]-m[x])*jt.weight}if(Zn>0&&r<Zn){let m=Ni(r/Zn,0,1),g=jc(m),x=s.stage??{},p={...l};for(let f of Object.keys(l))if(typeof l[f]=="number"&&typeof fi[f]=="number"){let T=x[f]??(Oy.has(f)&&l[f]!==fi[f]?l[f]<fi[f]?By:zy:null),S=T?jc(Ni((m-T[0])/(T[1]-T[0]),0,1)):g;p[f]=ah(f,fi[f],l[f],S)}l=p}l=xM(t,l,Zn>0?jc(Ni(r/Zn,0,1)):1),l=fM(t,l,e),l=uM(l,s),l=cM(l,s,e),Object.keys(Ld).length&&(l={...l,...Ld}),mt.finalize&&(l=mt.finalize(l,{now:i,elapsed:r,followed:nh})),Fi=l,la("state");let c=JSON.stringify(l);c!==Wr&&(Wt.applyState(l),Wt.render(),Wr=c),la("render"),Nn&&i>=Nn.until&&(Nn.slide!==tt[ze.slide]&&(Nn.slide.el.classList.remove("is-active"),Xd(Nn.slide)),Nn=null);for(let[m,g]of sh){let x=Ni((i-g.start)/1.4,0,1);m.textContent=(g.to*(1-Math.pow(1-x,3))).toFixed(g.decimals)}let h=ls(e),u=mt.readouts?mt.readouts(l,h):{};for(let m of t.el.querySelectorAll("[data-readout]")){let g=m.closest("[data-step], .r");if(g&&!Fn(g,ze.step))continue;let x=u[m.dataset.readout];x!==void 0&&Vd.get(m)!==x&&(m.textContent=x,Vd.set(m,x))}for(let m of t.el.querySelectorAll("[data-widget]")){let g=mt.widgets?.[m.dataset.widget],x=m.closest("[data-step], .r");g&&(!x||Fn(x,ze.step))&&g.update(m,l,h)}oM(t),mM(t),la("dom");let d=pM(t)+(mt.overlay?mt.overlay(l,h):"");d!==kd&&(ky.innerHTML=d,kd=d),la("hud")}function Qd(){Jd(),requestAnimationFrame(Qd)}function $d(){let i=window.innerWidth,e=window.innerHeight;Jt=Math.min(i/Lt,e/Rt),pi={x:(i-Lt*Jt)/2,y:(e-Rt*Jt)/2},da.style.transform=`translate(${pi.x}px, ${pi.y}px) scale(${Jt})`;let t=Math.min(window.devicePixelRatio||1,2),n=Math.round(Math.min(3840,Lt*Jt*t));Wt.setSize(n,Math.round(n*Rt/Lt)),Wr=""}var kr=null;function ef(){let i=tt[ze.slide],e=tt[ze.slide+1],t=tt.slice(0,ze.slide).reduce((r,o)=>r+o.duration,0),n=i.stepDurations?i.stepDurations.slice(0,ze.step).reduce((r,o)=>r+o,0):0,s=$c(i,ze.step);return{type:"state",theme:document.documentElement.dataset.theme||"dark",index:ze.slide,step:ze.step,steps:i.steps,total:tt.length,title:i.title,stepTitle:s===i.title?"":s,parts:Wd(i.notes),duration:i.duration,stepDuration:i.stepDurations?.[ze.step]??null,plannedStart:t+n,next:ze.step+1<i.steps?$c(i,ze.step+1):e?e.title:"End",plan:tt.map(r=>({title:r.title,duration:r.duration}))}}function tf(){kr&&!kr.closed&&kr.postMessage(ef(),"*")}function vM(){kr=window.open("presenter.html","deck-presenter","width=1200,height=760")}window.addEventListener("message",i=>{let e=i.data;!e||typeof e!="object"||(e.type==="hello"?(kr=i.source,tf()):e.type==="nav"?(e.action==="next"&&Hr(),e.action==="prev"&&rh()):e.type==="key"&&Xr.get(String(e.key).toLowerCase())?.run(ls(0)))});var rs="",Hd=0;function yM(i){if(i.key!=="Process"&&!i.isComposing)return i.key.length===1?i.key.toLowerCase():i.key;let e=/^(?:Key([A-Z])|Digit([0-9]))$/.exec(i.code||"");return e?e[1]?e[1].toLowerCase():e[2]:i.code==="Space"?" ":i.code==="Period"?".":i.key}var MM=new Set(["n","p","f","b","s","r","h","?","."," ","0","1","2","3","4","5","6","7","8","9"]),Xr=new Map;function nf(i,e){let t=i.toLowerCase();return MM.has(t)||Xr.has(t)?(console.warn(`key "${i}" is already taken: "${e.label}" was not added`),!1):(Xr.set(t,e),!0)}function SM(i){if(i.metaKey||i.ctrlKey||i.altKey)return;let e=yM(i),t=Xr.get(String(e).toLowerCase());if(t&&!i.repeat){t.run(ls(0));return}Sn.waiting&&(Sn.waiting=!1,document.body.classList.remove("waiting")),["ArrowRight","ArrowDown","PageDown"," ","n"].includes(e)?(i.preventDefault(),(e===" "||rs==="")&&Hr()):e==="Enter"?(i.preventDefault(),rs?(jn(Number(rs)-1,0),rs=""):Hr()):["ArrowLeft","ArrowUp","PageUp","Backspace","p"].includes(e)?(i.preventDefault(),rh()):e==="Home"?jn(0,0):e==="End"?jn(tt.length-1,0):e==="f"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{}):e==="b"||e==="."?document.body.classList.toggle("blackout"):e==="s"?vM():e==="r"?Kd(!Sn.on):e==="h"||e==="?"?ih():/^[0-9]$/.test(e)?rs=(rs+e).slice(-2):e==="Escape"&&(rs="")}function sf(){let[i,e]=decodeURIComponent(location.hash.slice(1)).split("."),t=tt.findIndex(n=>n.id===i);return t>=0?{slide:t,step:Number(e||0)}:{slide:0,step:0}}function bM(){document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&!Gt.manual)for(let[i,e]of Kn)i.paused&&wt()>=e&&i.play().catch(()=>{})}),rM(),window.addEventListener("keydown",SM),window.addEventListener("resize",$d),window.addEventListener("wheel",hM,{passive:!1}),window.addEventListener("hashchange",()=>{let i=sf();jn(i.slide,i.step)}),window.addEventListener("pointermove",i=>{let e=Bd(i);Ot.x=e.x,Ot.y=e.y,Ot.inside=!0,Ot.moved=wt(),document.body.classList.remove("hide-cursor"),clearTimeout(Hd),Hd=setTimeout(()=>document.body.classList.add("hide-cursor"),2500)}),document.addEventListener("pointerleave",()=>{Ot.inside=!1}),window.addEventListener("pointerdown",()=>{Ot.down=!0}),window.addEventListener("pointerup",()=>{Ot.down=!1}),da.addEventListener("click",i=>{if(Sn.waiting){Sn.waiting=!1,document.body.classList.remove("waiting");return}if(i.target.closest("a, video, button, #keys, [data-tile], [data-hover-loop] [data-from]"))return;let e=ui(Bn(tt[ze.slide],ze.step)),t=jd(e),n=Bd(i);t&&t.hits(Fi,{...ls(0),pointer:{...Ot,...n,inside:!0}})||Hr()})}var wM={en:{chip:"Keys",rows:[[["\u2192","Space","N","PgDn","click"],"Next step"],[["\u2190","P","PgUp","\u232B"],"Back"],[["number","Enter"],"Go to that slide"],[["Home","End"],"First slide \xB7 last slide"],[["F"],"Full screen"],[["S"],"Presenter window: script, timer, next step"],[["B","."],"Black screen"],[["R"],"Captions, for reading alone"]],hand:[["mouse","wheel"],"Drive the picture, where a hint says so"],pin:[["H"],"Keep this list open"]},zh:{chip:"\u6309\u952E",rows:[[["\u2192","\u7A7A\u683C","N","PgDn","\u5355\u51FB"],"\u4E0B\u4E00\u6B65"],[["\u2190","P","PgUp","\u232B"],"\u4E0A\u4E00\u6B65"],[["\u9875\u7801","Enter"],"\u8DF3\u5230\u8FD9\u4E00\u9875"],[["Home","End"],"\u7B2C\u4E00\u9875 \xB7 \u6700\u540E\u4E00\u9875"],[["F"],"\u5168\u5C4F"],[["S"],"\u6F14\u8BB2\u8005\u7A97\u53E3\uFF1A\u8BB2\u7A3F\u3001\u8BA1\u65F6\u3001\u4E0B\u4E00\u6B65"],[["B","."],"\u9ED1\u5C4F"],[["R"],"\u9605\u8BFB\u6A21\u5F0F\u5B57\u5E55"]],hand:[["\u9F20\u6807","\u6EDA\u8F6E"],"\u6309\u8FD9\u4E00\u6B65\u7684\u63D0\u793A\u64CD\u4F5C\u753B\u9762"],pin:[["H"],"\u56FA\u5B9A\u663E\u793A\u8FD9\u5F20\u8868"]}},di=null;function TM(){if(document.documentElement.dataset.keys==="off"||Vr.get("keys")==="off")return;let i=wM[(document.documentElement.lang||"en").toLowerCase().startsWith("zh")?"zh":"en"],e=[...i.rows,...[...Xr].map(([t,n])=>[[t.toUpperCase()],n.label]),i.hand,i.pin];di=document.createElement("div"),di.id="keys",di.innerHTML=`<button type="button" class="keys-chip" aria-expanded="false"><kbd>?</kbd><span>${nr(i.chip)}</span></button><dl class="keys-panel">${e.map(([t,n])=>`<div><dt>${t.map(s=>`<kbd>${nr(s)}</kbd>`).join("")}</dt><dd>${nr(n)}</dd></div>`).join("")}</dl>`,da.append(di),di.querySelector(".keys-chip").addEventListener("click",()=>ih()),Vr.get("keys")==="open"&&ih(!0)}function ih(i=!di?.classList.contains("is-open")){di&&(di.classList.toggle("is-open",i),di.querySelector(".keys-chip").setAttribute("aria-expanded",String(i)))}function Gd(){let i=Wt.subjectRect?.()??null,e=ui(Bn(tt[ze.slide],ze.step)).focus,t=typeof Fi.visible=="number"&&Fi.visible<.2;return(Array.isArray(i)?i:[i]).filter(n=>n&&(n.lit||!t&&(!e||e.includes(n.name))))}window.__deck={info:()=>tt.map(i=>({id:i.id,title:i.title,steps:i.steps,shots:i.shots,duration:i.duration,stepDurations:i.stepDurations,stepTitles:Array.from({length:i.steps},(e,t)=>$c(i,t)),notes:i.notes,meta:Array.from({length:i.steps},(e,t)=>ui(Bn(i,t)))})),go(i,e=0,t={}){let n=typeof i=="number"?i:tt.findIndex(s=>s.id===i);jn(n,e,{force:!0,...t})},current:()=>({...ze,id:tt[ze.slide].id}),next:Hr,prev:rh,state:()=>Fi,auto:()=>({...jt,manual:wt()<jt.until}),subjectRects:Gd,subjectRect(){let i=Gd();return i.length?{x0:Math.min(...i.map(e=>e.x0)),y0:Math.min(...i.map(e=>e.y0)),x1:Math.max(...i.map(e=>e.x1)),y1:Math.max(...i.map(e=>e.y1))}:null},leaders:()=>th,carriers:()=>mt.CARRIERS??[],blocks(){return tt[ze.slide].reveal.map(e=>{let t=getComputedStyle(e);return{name:`${e.tagName.toLowerCase()}${[...e.classList].filter(n=>!n.startsWith("is-")).map(n=>`.${n}`).join("")}`,expected:Fn(e,ze.step),opacity:Number(t.opacity),hidden:t.visibility==="hidden",animations:e.getAnimations().length}})},presenter:ef,move:()=>({start:fa,duration:Zn}),settleTime:Zy,frame:Jd,clock:Gt,scene:Wt,profile:()=>as,reader:(i=!Sn.on)=>Kd(i),theme(i){document.documentElement.dataset.theme=i,Qc=qc(),Wt.setTheme(Qc),Wr=""}};function EM(i,e){let t=Li(Bn(tt[i],e),0);return mt.intro?mt.intro(t):Number.isFinite(t.size)?{...t,visible:0,size:t.size*.7}:{...t,visible:0}}{let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width","0"),i.setAttribute("height","0"),i.setAttribute("aria-hidden","true"),i.style.position="absolute",i.innerHTML='<defs><linearGradient id="deck-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--grad-a, var(--accent))"/><stop offset="1" style="stop-color:var(--grad-b, var(--second))"/></linearGradient></defs>',document.body.append(i)}for(let i of document.querySelectorAll("svg[data-chart]")){let e=mt.CHARTS?.[i.dataset.chart];e&&Ad(i,e,mt.ICONS)}Sd(document,mt.ICONS);for(let i of tt)Yd(i);for(let i of document.querySelectorAll("[data-widget]"))mt.widgets?.[i.dataset.widget]?.init?.(i,ls(0));for(let i of document.querySelectorAll("[data-tabs]"))Qy(i);function _M(){let i=ca.style.visibility;ca.style.visibility="hidden";for(let e of new Set(tt.flatMap(t=>t.shots)))Wt.applyState(Li(e,0)),Wt.render();ca.style.visibility=i,Wr=""}$d();bM();qd=Id({sounds:mt.sounds,stepSound:()=>ui(Bn(tt[ze.slide],ze.step)).sound,stepKey:()=>`${ze.slide}.${ze.step}`,lang:document.documentElement.lang,addKey:nf});for(let[i,e]of Object.entries(mt.keys??{}))nf(i,e);TM();mt.setup?.({scene:Wt,stage:da,context:ls});var AM=Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))),RM=Promise.all([...document.querySelectorAll("video")].map(i=>i.readyState>=2?null:(i.preload!=="auto"&&(i.preload="auto",i.load()),new Promise(e=>{i.addEventListener("loadeddata",e,{once:!0}),i.addEventListener("error",e,{once:!0}),setTimeout(e,5e3)}))));Promise.all([Wt.warmUp(),AM,RM]).finally(()=>{_M(),document.body.classList.add("ready"),Sn.on&&(Sn.waiting=!0,document.body.classList.add("reader","waiting"));let i=sf(),e=i.slide===0&&i.step===0;fi=e?EM(0,0):Li(Bn(tt[i.slide],i.step),0),Fi=fi,jn(i.slide,i.step,{instant:!e,force:!0,from:fi}),Qd()});})();
