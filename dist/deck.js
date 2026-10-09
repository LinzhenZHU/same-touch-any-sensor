(()=>{var Hf=Object.defineProperty;var Vf=(n,e)=>{for(var t in e)Hf(n,t,{get:e[t],enumerable:!0})};var Oc="170";var Gf=0,Uu=1,Wf=2;var Vh=1,Xf=2,ni=3,Ti=0,zt=1,ln=2,zn=0,Cs=1,Oo=2,Lu=3,Du=4,qf=5,Gi=100,jf=101,Yf=102,Kf=103,Zf=104,Jf=200,Qf=201,$f=202,ep=203,fl=204,pl=205,tp=206,np=207,ip=208,sp=209,rp=210,op=211,ap=212,lp=213,cp=214,ml=0,gl=1,xl=2,Ls=3,vl=4,yl=5,Ml=6,bl=7,Gh=0,up=1,hp=2,Ei=0,dp=1,fp=2,pp=3,mp=4,gp=5,xp=6,vp=7;var Wh=300,Ds=301,Fs=302,Sl=303,wl=304,la=306,El=1e3,cn=1001,Tl=1002,ot=1003,yp=1004;var oo=1005;var bt=1006,Da=1007;var qi=1008;var hn=1009,Xh=1010,qh=1011,Tr=1012,Bc=1013,ji=1014,St=1015,Gt=1016,kc=1017,zc=1018,Ns=1020,jh=35902,Yh=1021,Kh=1022,xt=1023,Zh=1024,Jh=1025,Ps=1026,Os=1027,Ws=1028,Hc=1029,Qh=1030,Vc=1031;var Gc=1033,Uo=33776,Lo=33777,Do=33778,Fo=33779,_l=35840,Al=35841,Rl=35842,Cl=35843,Pl=36196,Il=37492,Ul=37496,Ll=37808,Dl=37809,Fl=37810,Nl=37811,Ol=37812,Bl=37813,kl=37814,zl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,No=36492,jl=36494,Yl=36495,$h=36283,Kl=36284,Zl=36285,Jl=36286;var Bo=2300,Ql=2301,Fa=2302,Fu=2400,Nu=2401,Ou=2402;var Mp=3200,bp=3201;var ed=0,Sp=1,wi="",pn="srgb",Xs="srgb-linear",ca="linear",ut="srgb";var ds=7680;var Bu=519,wp=512,Ep=513,Tp=514,td=515,_p=516,Ap=517,Rp=518,Cp=519,ku=35044;var zu="300 es",ii=2e3,ko=2001,_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=1234567,yr=Math.PI/180,_r=180/Math.PI;function es(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Wc(n,e){return(n%e+e)%e}function Pp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ip(n,e,t){return n!==e?(t-n)/(e-n):0}function Mr(n,e,t){return(1-t)*n+t*e}function Up(n,e,t,i){return Mr(n,e,1-Math.exp(-t*i))}function Lp(n,e=1){return e-Math.abs(Wc(n,e*2)-e)}function Dp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Np(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Op(n,e){return n+Math.random()*(e-n)}function Bp(n){return n*(.5-Math.random())}function kp(n){n!==void 0&&(Hu=n);let e=Hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zp(n){return n*yr}function Hp(n){return n*_r}function Vp(n){return(n&n-1)===0&&n!==0}function Gp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xp(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*p,a*c);break;case"YZY":n.set(l*p,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*p,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Or={DEG2RAD:yr,RAD2DEG:_r,generateUUID:es,clamp:Ct,euclideanModulo:Wc,mapLinear:Pp,inverseLerp:Ip,lerp:Mr,damp:Up,pingpong:Lp,smoothstep:Dp,smootherstep:Fp,randInt:Np,randFloat:Op,randFloatSpread:Bp,seededRandom:kp,degToRad:zp,radToDeg:Hp,isPowerOfTwo:Vp,ceilPowerOfTwo:Gp,floorPowerOfTwo:Wp,setQuaternionFromProperEuler:Xp,normalize:jt,denormalize:_s},ie=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],m=i[5],g=i[8],v=s[0],f=s[3],h=s[6],w=s[1],E=s[4],S=s[7],H=s[2],C=s[5],R=s[8];return r[0]=o*v+a*w+l*H,r[3]=o*f+a*E+l*C,r[6]=o*h+a*S+l*R,r[1]=c*v+u*w+d*H,r[4]=c*f+u*E+d*C,r[7]=c*h+u*S+d*R,r[2]=p*v+m*w+g*H,r[5]=p*f+m*E+g*C,r[8]=p*h+m*S+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,p=a*l-u*r,m=c*r-o*l,g=t*d+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=p*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Na=new Ke;function nd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qp(){let n=zo("canvas");return n.style.display="block",n}var Vu={};function xr(n){n in Vu||(Vu[n]=!0,console.warn(n))}function jp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Yp(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kp(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var tt={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(n.r=si(n.r),n.g=si(n.g),n.b=si(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(n.r=Is(n.r),n.g=Is(n.g),n.b=Is(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===wi?ca:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gu=[.64,.33,.3,.6,.15,.06],Wu=[.2126,.7152,.0722],Xu=[.3127,.329],qu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Xs]:{primaries:Gu,whitePoint:Xu,transfer:ca,toXYZ:qu,fromXYZ:ju,luminanceCoefficients:Wu,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Gu,whitePoint:Xu,transfer:ut,toXYZ:qu,fromXYZ:ju,luminanceCoefficients:Wu,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});var fs,$l=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=zo("canvas")),fs.width=e.width,fs.height=e.height;let i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zp=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$l.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jp=0,Kt=class n extends _i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=cn,s=cn,r=bt,o=qi,a=xt,l=hn,c=n.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=es(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case El:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case El:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Wh;Kt.DEFAULT_ANISOTROPY=1;var nt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],f=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,S=(m+1)/2,H=(h+1)/2,C=(u+p)/4,R=(d+v)/4,U=(g+f)/4;return E>S&&E>H?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=R/i):S>H?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=U/s):H<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(H),i=R/r,s=U/r),this.set(i,s,r,t),this}let w=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(d-v)/w,this.z=(p-u)/w,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ec=class extends _i{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},at=class extends ec{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vo=class extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ot,this.minFilter=ot,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tc=class extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ot,this.minFilter=ot,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],p=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==p||c!==m||u!==g){let f=1-a,h=l*p+c*m+u*g+d*v,w=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){let H=Math.sqrt(E),C=Math.atan2(H,h*w);f=Math.sin(f*C)/H,a=Math.sin(a*C)/H}let S=a*w;if(l=l*f+p*S,c=c*f+m*S,u=u*f+g*S,d=d*f+v*S,f===1-a){let H=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=H,c*=H,u*=H,d*=H}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*p,e[t+1]=l*g+u*p+c*d-a*m,e[t+2]=c*g+u*m+a*p-l*d,e[t+3]=u*g-a*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),p=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"YZX":this._x=p*u*d+c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d-p*m*g;break;case"XZY":this._x=p*u*d-c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new L,Yu=new Ai,Yi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),lo.subVectors(this.max,dr),ps.subVectors(e.a,dr),ms.subVectors(e.b,dr),gs.subVectors(e.c,dr),xi.subVectors(ms,ps),vi.subVectors(gs,ms),Ni.subVectors(ps,gs);let t=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Ni.z,Ni.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Ni.z,0,-Ni.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Ni.y,Ni.x,0];return!ka(t,ps,ms,gs,lo)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,ps,ms,gs,lo))?!1:(co.crossVectors(xi,vi),t=[co.x,co.y,co.z],ka(t,ps,ms,gs,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Jn=[new L,new L,new L,new L,new L,new L,new L,new L],_n=new L,ao=new Yi,ps=new L,ms=new L,gs=new L,xi=new L,vi=new L,Ni=new L,dr=new L,lo=new L,co=new L,Oi=new L;function ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Oi.fromArray(n,r);let a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Qp=new Yi,fr=new L,za=new L,Ar=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(za)),this.expandByPoint(fr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new L,Ha=new L,uo=new L,yi=new L,Va=new L,ho=new L,Ga=new L,Go=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ha.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Ha);let r=e.distanceTo(t)*.5,o=-this.direction.dot(uo),a=yi.dot(this.direction),l=-yi.dot(uo),c=yi.lengthSq(),u=Math.abs(1-o*o),d,p,m,g;if(u>0)if(d=o*l-a,p=o*a-l,g=r*u,d>=0)if(p>=-g)if(p<=g){let v=1/u;d*=v,p*=v,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ha).addScaledVector(uo,p),m}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){Va.subVectors(t,e),ho.subVectors(i,e),Ga.crossVectors(Va,ho);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);let l=a*this.direction.dot(ho.crossVectors(yi,ho));if(l<0)return null;let c=a*this.direction.dot(Va.cross(yi));if(c<0||l+c>o)return null;let u=-a*yi.dot(Ga);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,p,m,g,v,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,p,m,g,v,f)}set(e,t,i,s,r,o,a,l,c,u,d,p,m,g,v,f){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*u,m=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=p-v*c,t[9]=-a*l,t[2]=v-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*u,m=l*d,g=c*u,v=c*d;t[0]=p+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*u,m=l*d,g=c*u,v=c*d;t[0]=p-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*u,m=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-p*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=p-v*d}else if(e.order==="XZY"){let p=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+v,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,em)}lookAt(e,t,i){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),fo.crossVectors(on,Mi),s[0]=Mi.x,s[4]=fo.x,s[8]=on.x,s[1]=Mi.y,s[5]=fo.y,s[9]=on.y,s[2]=Mi.z,s[6]=fo.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],m=i[13],g=i[2],v=i[6],f=i[10],h=i[14],w=i[3],E=i[7],S=i[11],H=i[15],C=s[0],R=s[4],U=s[8],T=s[12],M=s[1],I=s[5],W=s[9],G=s[13],X=s[2],K=s[6],j=s[10],$=s[14],Y=s[3],fe=s[7],ge=s[11],Ae=s[15];return r[0]=o*C+a*M+l*X+c*Y,r[4]=o*R+a*I+l*K+c*fe,r[8]=o*U+a*W+l*j+c*ge,r[12]=o*T+a*G+l*$+c*Ae,r[1]=u*C+d*M+p*X+m*Y,r[5]=u*R+d*I+p*K+m*fe,r[9]=u*U+d*W+p*j+m*ge,r[13]=u*T+d*G+p*$+m*Ae,r[2]=g*C+v*M+f*X+h*Y,r[6]=g*R+v*I+f*K+h*fe,r[10]=g*U+v*W+f*j+h*ge,r[14]=g*T+v*G+f*$+h*Ae,r[3]=w*C+E*M+S*X+H*Y,r[7]=w*R+E*I+S*K+H*fe,r[11]=w*U+E*W+S*j+H*ge,r[15]=w*T+E*G+S*$+H*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*a*p+i*c*p+s*a*m-i*l*m)+v*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*u-r*l*u)+f*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*u-i*c*u)+h*(-s*a*u-t*l*d+t*a*p+s*o*d-i*o*p+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],g=e[12],v=e[13],f=e[14],h=e[15],w=d*f*c-v*p*c+v*l*m-a*f*m-d*l*h+a*p*h,E=g*p*c-u*f*c-g*l*m+o*f*m+u*l*h-o*p*h,S=u*v*c-g*d*c+g*a*m-o*v*m-u*a*h+o*d*h,H=g*d*l-u*v*l-g*a*p+o*v*p+u*a*f-o*d*f,C=t*w+i*E+s*S+r*H;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=w*R,e[1]=(v*p*r-d*f*r-v*s*m+i*f*m+d*s*h-i*p*h)*R,e[2]=(a*f*r-v*l*r+v*s*c-i*f*c-a*s*h+i*l*h)*R,e[3]=(d*l*r-a*p*r-d*s*c+i*p*c+a*s*m-i*l*m)*R,e[4]=E*R,e[5]=(u*f*r-g*p*r+g*s*m-t*f*m-u*s*h+t*p*h)*R,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*h-t*l*h)*R,e[7]=(o*p*r-u*l*r+u*s*c-t*p*c-o*s*m+t*l*m)*R,e[8]=S*R,e[9]=(g*d*r-u*v*r-g*i*m+t*v*m+u*i*h-t*d*h)*R,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*h+t*a*h)*R,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*m-t*a*m)*R,e[12]=H*R,e[13]=(u*v*s-g*d*s+g*i*p-t*v*p-u*i*f+t*d*f)*R,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*f-t*a*f)*R,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*p+t*a*p)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,p=r*c,m=r*u,g=r*d,v=o*u,f=o*d,h=a*d,w=l*c,E=l*u,S=l*d,H=i.x,C=i.y,R=i.z;return s[0]=(1-(v+h))*H,s[1]=(m+S)*H,s[2]=(g-E)*H,s[3]=0,s[4]=(m-S)*C,s[5]=(1-(p+h))*C,s[6]=(f+w)*C,s[7]=0,s[8]=(g+E)*R,s[9]=(f-w)*R,s[10]=(1-(p+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),a=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let c=1/r,u=1/o,d=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ii){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),m,g;if(a===ii)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ko)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ii){let l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),p=(t+e)*c,m=(i+s)*u,g,v;if(a===ii)g=(o+r)*d,v=-2*d;else if(a===ko)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},xs=new L,An=new vt,$p=new L(0,0,0),em=new L(1,1,1),Mi=new L,fo=new L,on=new L,Ku=new vt,Zu=new Ai,Hn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tm=0,Ju=new L,vs=new Ai,$n=new vt,po=new L,pr=new L,nm=new L,im=new Ai,Qu=new L(1,0,0),$u=new L(0,1,0),eh=new L(0,0,1),th={type:"added"},sm={type:"removed"},ys={type:"childadded",child:null},Wa={type:"childremoved",child:null},en=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Hn,i=new Ai,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?po.copy(e):po.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(pr,po,this.up):$n.lookAt(po,pr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),vs.setFromRotationMatrix($n),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sm),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};en.DEFAULT_UP=new L(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new L,ei=new L,Xa=new L,ti=new L,Ms=new L,bs=new L,nh=new L,qa=new L,ja=new L,Ya=new L,Ka=new nt,Za=new nt,Ja=new nt,Wi=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Rn.subVectors(s,t),ei.subVectors(i,t),Xa.subVectors(e,t);let o=Rn.dot(Rn),a=Rn.dot(ei),l=Rn.dot(Xa),c=ei.dot(ei),u=ei.dot(Xa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(c*l-a*u)*p,g=(o*u-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector(Za,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(e,t,i,s){return Rn.subVectors(i,t),ei.subVectors(e,t),Rn.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,i),bs.subVectors(r,i),qa.subVectors(e,i);let l=Ms.dot(qa),c=bs.dot(qa);if(l<=0&&c<=0)return t.copy(i);ja.subVectors(e,s);let u=Ms.dot(ja),d=bs.dot(ja);if(u>=0&&d<=u)return t.copy(s);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ms,o);Ya.subVectors(e,r);let m=Ms.dot(Ya),g=bs.dot(Ya);if(g>=0&&m<=g)return t.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(bs,a);let f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return nh.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(nh,a);let h=1/(f+v+p);return o=v*h,a=p*h,t.copy(i).addScaledVector(Ms,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=Wc(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Qa(o,r,e+1/3),this.g=Qa(o,r,e),this.b=Qa(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let i=id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return tt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ct(kt.r*255,0,255))*65536+Math.round(Ct(kt.g*255,0,255))*256+Math.round(Ct(kt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(kt.copy(this),t);let i=kt.r,s=kt.g,r=kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=pn){tt.fromWorkingColorSpace(kt.copy(this),e);let t=kt.r,i=kt.g,s=kt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(mo);let i=Mr(bi.h,mo.h,t),s=Mr(bi.s,mo.s,t),r=Mr(bi.l,mo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new Re;Re.NAMES=id;var rm=0,Ki=class extends _i{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=es(),this.name="",this.blending=Cs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Vn=class extends Ki{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new L,go=new ie,gn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ku,this.updateRanges=[],this.gpuType=St,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ku&&(e.usage=this.usage),e}};var Wo=class extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xo=class extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},om=0,fn=new vt,$a=new en,Ss=new L,an=new Yi,mr=new Yi,Ft=new L,tn=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(an.min,mr.min),an.expandByPoint(Ft),Ft.addVectors(an.max,mr.max),an.expandByPoint(Ft)):(an.expandByPoint(mr.min),an.expandByPoint(mr.max))}an.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Ft.add(Ss)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new L,l[U]=new L;let c=new L,u=new L,d=new L,p=new ie,m=new ie,g=new ie,v=new L,f=new L;function h(U,T,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),m.sub(p),g.sub(p);let I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(I),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),a[U].add(v),a[T].add(v),a[M].add(v),l[U].add(f),l[T].add(f),l[M].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,T=w.length;U<T;++U){let M=w[U],I=M.start,W=M.count;for(let G=I,X=I+W;G<X;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let E=new L,S=new L,H=new L,C=new L;function R(U){H.fromBufferAttribute(s,U),C.copy(H);let T=a[U];E.copy(T),E.sub(H.multiplyScalar(H.dot(T))).normalize(),S.crossVectors(C,T);let I=S.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,I)}for(let U=0,T=w.length;U<T;++U){let M=w[U],I=M.start,W=M.count;for(let G=I,X=I+W;G<X;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),v=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u),m=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let h=0;h<u;h++)p[g++]=c[m++]}return new gn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let p=c[u],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ih=new vt,Bi=new Go,xo=new Ar,sh=new L,vo=new L,yo=new L,Mo=new L,el=new L,bo=new L,rh=new L,So=new L,De=class extends en{constructor(e=new tn,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(el.fromBufferAttribute(d,e),o?bo.addScaledVector(el,u):bo.addScaledVector(el.sub(t),u))}t.add(bo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(xo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(xo,sh)===null||Bi.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(ih),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){let f=p[g],h=o[f.materialIndex],w=Math.max(f.start,m.start),E=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let S=w,H=E;S<H;S+=3){let C=a.getX(S),R=a.getX(S+1),U=a.getX(S+2);s=wo(this,h,e,i,c,u,d,C,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){let w=a.getX(f),E=a.getX(f+1),S=a.getX(f+2);s=wo(this,o,e,i,c,u,d,w,E,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){let f=p[g],h=o[f.materialIndex],w=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=w,H=E;S<H;S+=3){let C=S,R=S+1,U=S+2;s=wo(this,h,e,i,c,u,d,C,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){let w=f,E=f+1,S=f+2;s=wo(this,o,e,i,c,u,d,w,E,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function am(n,e,t,i,s,r,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ti,a),l===null)return null;So.copy(a),So.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:n}}function wo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,vo),n.getVertexPosition(l,yo),n.getVertexPosition(c,Mo);let u=am(n,e,t,i,vo,yo,Mo,rh);if(u){let d=new L;Wi.getBarycoord(rh,vo,yo,Mo,d),s&&(u.uv=Wi.getInterpolatedAttribute(s,a,l,c,d,new ie)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,a,l,c,d,new ie)),o&&(u.normal=Wi.getInterpolatedAttribute(o,a,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new L,materialIndex:0};Wi.getNormal(vo,yo,Mo,p.normal),u.face=p,u.barycoord=d}return u}var ri=class n extends tn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],p=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function g(v,f,h,w,E,S,H,C,R,U,T){let M=S/R,I=H/U,W=S/2,G=H/2,X=C/2,K=R+1,j=U+1,$=0,Y=0,fe=new L;for(let ge=0;ge<j;ge++){let Ae=ge*I-G;for(let ke=0;ke<K;ke++){let qe=ke*M-W;fe[v]=qe*w,fe[f]=Ae*E,fe[h]=X,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[f]=0,fe[h]=C>0?1:-1,u.push(fe.x,fe.y,fe.z),d.push(ke/R),d.push(1-ge/U),$+=1}}for(let ge=0;ge<U;ge++)for(let Ae=0;Ae<R;Ae++){let ke=p+Ae+K*ge,qe=p+Ae+K*(ge+1),J=p+(Ae+1)+K*(ge+1),oe=p+(Ae+1)+K*ge;l.push(ke,qe,oe),l.push(qe,J,oe),Y+=6}a.addGroup(m,Y,T),m+=Y,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=Bs(n[t]);for(let s in i)e[s]=i[s]}return e}function lm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var qs={clone:Bs,merge:Yt},cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,it=class extends Ki{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qo=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new L,oh=new ie,ah=new ie,Nt=class extends qo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,oh,ah),t.subVectors(ah,oh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,Es=1,nc=class extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(ws,Es,e,t);s.layers=this.layers,this.add(s);let r=new Nt(ws,Es,e,t);r.layers=this.layers,this.add(r);let o=new Nt(ws,Es,e,t);o.layers=this.layers,this.add(o);let a=new Nt(ws,Es,e,t);a.layers=this.layers,this.add(a);let l=new Nt(ws,Es,e,t);l.layers=this.layers,this.add(l);let c=new Nt(ws,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},jo=class extends Kt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ic=class extends at{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),r=new it({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:zn});r.uniforms.tEquirect.value=t;let o=new De(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=bt),new nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},tl=new L,hm=new L,dm=new Ke,mn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=tl.subVectors(i,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dm.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new Ar,Eo=new L,Cr=class{constructor(e=new mn,t=new mn,i=new mn,s=new mn,r=new mn,o=new mn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],p=s[7],m=s[8],g=s[9],v=s[10],f=s[11],h=s[12],w=s[13],E=s[14],S=s[15];if(i[0].setComponents(l-r,p-c,f-m,S-h).normalize(),i[1].setComponents(l+r,p+c,f+m,S+h).normalize(),i[2].setComponents(l+o,p+u,f+g,S+w).normalize(),i[3].setComponents(l-o,p-u,f-g,S-w).normalize(),i[4].setComponents(l-a,p-d,f-v,S-E).normalize(),t===ii)i[5].setComponents(l+a,p+d,f+v,S+E).normalize();else if(t===ko)i[5].setComponents(a,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Eo.x=s.normal.x>0?e.max.x:e.min.x,Eo.y=s.normal.y>0?e.max.y:e.min.y,Eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fm(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){let g=d[p],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){let v=d[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Pt=class n extends tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,p=t/l,m=[],g=[],v=[],f=[];for(let h=0;h<u;h++){let w=h*p-o;for(let E=0;E<c;E++){let S=E*d-r;g.push(S,-w,0),v.push(0,0,1),f.push(E/a),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){let E=w+c*h,S=w+c*(h+1),H=w+1+c*(h+1),C=w+1+c*h;m.push(E,S,C),m.push(S,H,C)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,km=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,dg=`struct PhysicalMaterial {
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
}`,fg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,M0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,S0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,L0=`#define NORMAL
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
}`,D0=`#define NORMAL
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
}`,F0=`#define PHONG
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
}`,N0=`#define PHONG
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
}`,O0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,k0=`#define TOON
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
}`,z0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,V0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,X0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:xm,alphatest_fragment:vm,alphatest_pars_fragment:ym,aomap_fragment:Mm,aomap_pars_fragment:bm,batching_pars_vertex:Sm,batching_vertex:wm,begin_vertex:Em,beginnormal_vertex:Tm,bsdfs:_m,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Um,color_fragment:Lm,color_pars_fragment:Dm,color_pars_vertex:Fm,color_vertex:Nm,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:km,displacementmap_pars_vertex:zm,displacementmap_vertex:Hm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Gm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:jm,envmap_pars_fragment:Ym,envmap_pars_vertex:Km,envmap_physical_pars_fragment:og,envmap_vertex:Zm,fog_vertex:Jm,fog_pars_vertex:Qm,fog_fragment:$m,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:ug,lights_physical_fragment:hg,lights_physical_pars_fragment:dg,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:yg,map_fragment:Mg,map_pars_fragment:bg,map_particle_fragment:Sg,map_particle_pars_fragment:wg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:_g,morphcolor_vertex:Ag,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Pg,normal_fragment_begin:Ig,normal_fragment_maps:Ug,normal_pars_fragment:Lg,normal_pars_vertex:Dg,normal_vertex:Fg,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:zg,opaque_fragment:Hg,packing:Vg,premultiplied_alpha_fragment:Gg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Jg,shadowmask_pars_fragment:Qg,skinbase_vertex:$g,skinning_pars_vertex:e0,skinning_vertex:t0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:o0,transmission_fragment:a0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:u0,uv_vertex:h0,worldpos_vertex:d0,background_vert:f0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:x0,cube_frag:v0,depth_vert:y0,depth_frag:M0,distanceRGBA_vert:b0,distanceRGBA_frag:S0,equirect_vert:w0,equirect_frag:E0,linedashed_vert:T0,linedashed_frag:_0,meshbasic_vert:A0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:P0,meshmatcap_vert:I0,meshmatcap_frag:U0,meshnormal_vert:L0,meshnormal_frag:D0,meshphong_vert:F0,meshphong_frag:N0,meshphysical_vert:O0,meshphysical_frag:B0,meshtoon_vert:k0,meshtoon_frag:z0,points_vert:H0,points_frag:V0,shadow_vert:G0,shadow_frag:W0,sprite_vert:X0,sprite_frag:q0},Ee={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},kn={basic:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Re(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Yt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Yt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Re(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Yt([Ee.points,Ee.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Yt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Yt([Ee.common,Ee.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Yt([Ee.sprite,Ee.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Yt([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Yt([Ee.lights,Ee.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};kn.physical={uniforms:Yt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var To={r:0,b:0,g:0},zi=new Hn,j0=new vt;function Y0(n,e,t,i,s,r,o){let a=new Re(0),l=r===!0?0:1,c,u,d=null,p=0,m=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function v(w){let E=!1,S=g(w);S===null?h(a,l):S&&S.isColor&&(h(S,1),E=!0);let H=n.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(w,E){let S=g(E);S&&(S.isCubeTexture||S.mapping===la)?(u===void 0&&(u=new De(new ri(1,1,1),new it({name:"BackgroundCubeMaterial",uniforms:Bs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zi.copy(E.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(zi)),u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ut,(d!==S||p!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,p=S.version,m=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new De(new Pt(2,2),new it({name:"BackgroundMaterial",uniforms:Bs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,m=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function h(w,E){w.getRGB(To,sd(n)),i.buffers.color.setClear(To.r,To.g,To.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,h(a,l)},render:v,addToRenderList:f}}function K0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(M,I,W,G,X){let K=!1,j=d(G,W,I);r!==j&&(r=j,c(r.object)),K=m(M,G,W,X),K&&g(M,G,W,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(M,I,W,G),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,I,W){let G=W.wireframe===!0,X=i[M.id];X===void 0&&(X={},i[M.id]=X);let K=X[I.id];K===void 0&&(K={},X[I.id]=K);let j=K[G];return j===void 0&&(j=p(l()),K[G]=j),j}function p(M){let I=[],W=[],G=[];for(let X=0;X<t;X++)I[X]=0,W[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:G,object:M,attributes:{},index:null}}function m(M,I,W,G){let X=r.attributes,K=I.attributes,j=0,$=W.getAttributes();for(let Y in $)if($[Y].location>=0){let ge=X[Y],Ae=K[Y];if(Ae===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),ge===void 0||ge.attribute!==Ae||Ae&&ge.data!==Ae.data)return!0;j++}return r.attributesNum!==j||r.index!==G}function g(M,I,W,G){let X={},K=I.attributes,j=0,$=W.getAttributes();for(let Y in $)if($[Y].location>=0){let ge=K[Y];ge===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));let Ae={};Ae.attribute=ge,ge&&ge.data&&(Ae.data=ge.data),X[Y]=Ae,j++}r.attributes=X,r.attributesNum=j,r.index=G}function v(){let M=r.newAttributes;for(let I=0,W=M.length;I<W;I++)M[I]=0}function f(M){h(M,0)}function h(M,I){let W=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;W[M]=1,G[M]===0&&(n.enableVertexAttribArray(M),G[M]=1),X[M]!==I&&(n.vertexAttribDivisor(M,I),X[M]=I)}function w(){let M=r.newAttributes,I=r.enabledAttributes;for(let W=0,G=I.length;W<G;W++)I[W]!==M[W]&&(n.disableVertexAttribArray(W),I[W]=0)}function E(M,I,W,G,X,K,j){j===!0?n.vertexAttribIPointer(M,I,W,X,K):n.vertexAttribPointer(M,I,W,G,X,K)}function S(M,I,W,G){v();let X=G.attributes,K=W.getAttributes(),j=I.defaultAttributeValues;for(let $ in K){let Y=K[$];if(Y.location>=0){let fe=X[$];if(fe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){let ge=fe.normalized,Ae=fe.itemSize,ke=e.get(fe);if(ke===void 0)continue;let qe=ke.buffer,J=ke.type,oe=ke.bytesPerElement,Me=J===n.INT||J===n.UNSIGNED_INT||fe.gpuType===Bc;if(fe.isInterleavedBufferAttribute){let me=fe.data,Pe=me.stride,ze=fe.offset;if(me.isInstancedInterleavedBuffer){for(let Be=0;Be<Y.locationSize;Be++)h(Y.location+Be,me.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Be=0;Be<Y.locationSize;Be++)f(Y.location+Be);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Be=0;Be<Y.locationSize;Be++)E(Y.location+Be,Ae/Y.locationSize,J,ge,Pe*oe,(ze+Ae/Y.locationSize*Be)*oe,Me)}else{if(fe.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)h(Y.location+me,fe.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let me=0;me<Y.locationSize;me++)f(Y.location+me);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let me=0;me<Y.locationSize;me++)E(Y.location+me,Ae/Y.locationSize,J,ge,Ae*oe,Ae/Y.locationSize*me*oe,Me)}}else if(j!==void 0){let ge=j[$];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Y.location,ge);break;case 3:n.vertexAttrib3fv(Y.location,ge);break;case 4:n.vertexAttrib4fv(Y.location,ge);break;default:n.vertexAttrib1fv(Y.location,ge)}}}}w()}function H(){U();for(let M in i){let I=i[M];for(let W in I){let G=I[W];for(let X in G)u(G[X].object),delete G[X];delete I[W]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;let I=i[M.id];for(let W in I){let G=I[W];for(let X in G)u(G[X].object),delete G[X];delete I[W]}delete i[M.id]}function R(M){for(let I in i){let W=i[I];if(W[M.id]===void 0)continue;let G=W[M.id];for(let X in G)u(G[X].object),delete G[X];delete W[M.id]}}function U(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:H,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:f,disableUnusedAttributes:w}}function Z0(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function l(c,u,d,p){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function J0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==xt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let U=R===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==St&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),H=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:H,maxSamples:C}}function Q0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new mn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||i!==0||s;return s=p,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){let g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{let w=r?0:i,E=w*4,S=h.clippingState||null;l.value=S,S=u(g,p,E,m);for(let H=0;H!==E;++H)S[H]=t[H];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,g){let v=d!==null?d.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let h=m+v*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<h)&&(f=new Float32Array(h));for(let E=0,S=m;E!==v;++E,S+=4)o.copy(d[E]).applyMatrix4(w,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function $0(n){let e=new WeakMap;function t(o,a){return a===Sl?o.mapping=Ds:a===wl&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sl||a===wl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ic(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ht=class extends qo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},As=4,lh=[.125,.215,.35,.446,.526,.582],Xi=20,nl=new Ht,ch=new Re,il=null,sl=0,rl=0,ol=!1,Vi=(1+Math.sqrt(5))/2,Ts=1/Vi,uh=[new L(-Vi,Ts,0),new L(Vi,Ts,0),new L(-Ts,0,Vi),new L(Ts,0,Vi),new L(0,Vi,-Ts),new L(0,Vi,Ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=ol,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Gt,format:xt,colorSpace:Xs,depthBuffer:!1},s=hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ex(r)),this._blurMaterial=tx(r,e,t)}return s}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,s){let a=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ch),u.toneMapping=Ei,u.autoClear=!1;let m=new Vn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new De(new ri,m),v=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(ch),v=!0);for(let h=0;h<6;h++){let w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));let E=this._cubeSize;_o(s,w*E,h>2?E:0,E,E),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ds||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;_o(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(s-r-1)%uh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new De(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),v=r/g,f=isFinite(r)?1+Math.floor(u*v):Xi;f>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Xi}`);let h=[],w=0;for(let R=0;R<Xi;++R){let U=R/v,T=Math.exp(-U*U/2);h.push(T),R===0?w+=T:R<f&&(w+=2*T)}for(let R=0;R<h.length;R++)h[R]=h[R]/w;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-i;let S=this._sizeLods[s],H=3*S*(s>E-As?s-E+As:0),C=4*(this._cubeSize-S);_o(t,H,C,3*S,2*S),l.setRenderTarget(t),l.render(d,nl)}};function ex(n){let e=[],t=[],i=[],s=n,r=n-As+1+lh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-As?l=lh[o-n+As-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,f=2,h=1,w=new Float32Array(v*g*m),E=new Float32Array(f*g*m),S=new Float32Array(h*g*m);for(let C=0;C<m;C++){let R=C%3*2/3-1,U=C>2?0:-1,T=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];w.set(T,v*g*C),E.set(p,f*g*C);let M=[C,C,C,C,C,C];S.set(M,h*g*C)}let H=new tn;H.setAttribute("position",new gn(w,v)),H.setAttribute("uv",new gn(E,f)),H.setAttribute("faceIndex",new gn(S,h)),e.push(H),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hh(n,e,t){let i=new at(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tx(n,e,t){let i=new Float32Array(Xi),s=new L(0,1,0);return new it({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function dh(){return new it({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function fh(){return new it({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function nx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Sl||l===wl,u=l===Ds||l===Fs;if(c||u){let d=e.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new ks(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new ks(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ix(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sx(n,e,t,i){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let v=p.morphAttributes[g];for(let f=0,h=v.length;f<h;f++)e.remove(v[f])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let g in p)e.update(p[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let f=0,h=v.length;f<h;f++)e.update(v[f],n.ARRAY_BUFFER)}}function c(d){let p=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let w=m.array;v=m.version;for(let E=0,S=w.length;E<S;E+=3){let H=w[E+0],C=w[E+1],R=w[E+2];p.push(H,C,C,R,R,H)}}else if(g!==void 0){let w=g.array;v=g.version;for(let E=0,S=w.length/3-1;E<S;E+=3){let H=E+0,C=E+1,R=E+2;p.push(H,C,C,R,R,H)}}else return;let f=new(nd(p)?Xo:Wo)(p,1);f.version=v;let h=r.get(d);h&&e.remove(h),r.set(d,f)}function u(d){let p=r.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function rx(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){n.drawElements(i,m,r,p*o),t.update(m,i,1)}function c(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,p*o,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];t.update(f,i,1)}function d(p,m,g,v){if(g===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)c(p[h]/o,m[h],v[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,v,0,g);let h=0;for(let w=0;w<g;w++)h+=m[w]*v[w];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ox(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ax(n,e,t){let i=new WeakMap,s=new nt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,p=i.get(a);if(p===void 0||p.count!==d){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],E=0;m===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let S=a.attributes.position.count*E,H=1;S>e.maxTextureSize&&(H=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let C=new Float32Array(S*H*4*d),R=new Vo(C,S,H,d);R.type=St,R.needsUpdate=!0;let U=E*4;for(let M=0;M<d;M++){let I=f[M],W=h[M],G=w[M],X=S*H*4*M;for(let K=0;K<I.count;K++){let j=K*U;m===!0&&(s.fromBufferAttribute(I,K),C[X+j+0]=s.x,C[X+j+1]=s.y,C[X+j+2]=s.z,C[X+j+3]=0),g===!0&&(s.fromBufferAttribute(W,K),C[X+j+4]=s.x,C[X+j+5]=s.y,C[X+j+6]=s.z,C[X+j+7]=0),v===!0&&(s.fromBufferAttribute(G,K),C[X+j+8]=s.x,C[X+j+9]=s.y,C[X+j+10]=s.z,C[X+j+11]=G.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new ie(S,H)},i.set(a,p),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function lx(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Yo=class extends Kt{constructor(e,t,i,s,r,o,a,l,c,u=Ps){if(u!==Ps&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ps&&(i=ji),i===void 0&&u===Os&&(i=Ns),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ot,this.minFilter=l!==void 0?l:ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},od=new Kt,ph=new Yo(1,1),ad=new Vo,ld=new tc,cd=new jo,mh=[],gh=[],xh=new Float32Array(16),vh=new Float32Array(9),yh=new Float32Array(4);function js(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ua(n,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function fx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;yh.set(i),n.uniformMatrix2fv(this.addr,!1,yh),Ut(t,i)}}function px(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;vh.set(i),n.uniformMatrix3fv(this.addr,!1,vh),Ut(t,i)}}function mx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;xh.set(i),n.uniformMatrix4fv(this.addr,!1,xh),Ut(t,i)}}function gx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function yx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Mx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Ex(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ph.compareFunction=td,r=ph):r=od,t.setTexture2D(e||r,s)}function Tx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ld,s)}function _x(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cd,s)}function Ax(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ad,s)}function Rx(n){switch(n){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return vx;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return bx;case 36295:return Sx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return Ax}}function Cx(n,e){n.uniform1fv(this.addr,e)}function Px(n,e){let t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function Ix(n,e){let t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function Ux(n,e){let t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function Lx(n,e){let t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dx(n,e){let t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fx(n,e){let t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Nx(n,e){n.uniform1iv(this.addr,e)}function Ox(n,e){n.uniform2iv(this.addr,e)}function Bx(n,e){n.uniform3iv(this.addr,e)}function kx(n,e){n.uniform4iv(this.addr,e)}function zx(n,e){n.uniform1uiv(this.addr,e)}function Hx(n,e){n.uniform2uiv(this.addr,e)}function Vx(n,e){n.uniform3uiv(this.addr,e)}function Gx(n,e){n.uniform4uiv(this.addr,e)}function Wx(n,e,t){let i=this.cache,s=e.length,r=ua(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||od,r[o])}function Xx(n,e,t){let i=this.cache,s=e.length,r=ua(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ld,r[o])}function qx(n,e,t){let i=this.cache,s=e.length,r=ua(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cd,r[o])}function jx(n,e,t){let i=this.cache,s=e.length,r=ua(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ad,r[o])}function Yx(n){switch(n){case 5126:return Cx;case 35664:return Px;case 35665:return Ix;case 35666:return Ux;case 35674:return Lx;case 35675:return Dx;case 35676:return Fx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ox;case 35668:case 35672:return Bx;case 35669:case 35673:return kx;case 5125:return zx;case 36294:return Hx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return jx}}var sc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rx(t.type)}},rc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yx(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},al=/(\w+)(\])?(\[|\.)?/g;function Mh(n,e){n.seq.push(e),n.map[e.id]=e}function Kx(n,e,t){let i=n.name,s=i.length;for(al.lastIndex=0;;){let r=al.exec(i),o=al.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mh(t,c===void 0?new sc(a,n,e):new rc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new oc(a),Mh(t,d)),t=d}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Kx(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function bh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Zx=37297,Jx=0;function Qx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Sh=new Ke;function $x(n){tt._getMatrix(Sh,tt.workingColorSpace,n);let e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case ca:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Qx(n.getShaderSource(e),o)}else return s}function ev(n,e){let t=$x(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tv(n,e){let t;switch(e){case dp:t="Linear";break;case fp:t="Reinhard";break;case pp:t="Cineon";break;case mp:t="ACESFilmic";break;case xp:t="AgX";break;case vp:t="Neutral";break;case gp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ao=new L;function nv(){tt.getLuminanceCoefficients(Ao);let n=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function sv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function vr(n){return n!==""}function Eh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(n){return n.replace(ov,lv)}var av=new Map;function lv(n,e){let t=Je[e];if(t===void 0){let i=av.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}var cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(n){return n.replace(cv,uv)}function uv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function dv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case Fs:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function pv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gh:e="ENVMAP_BLENDING_MULTIPLY";break;case up:e="ENVMAP_BLENDING_MIX";break;case hp:e="ENVMAP_BLENDING_ADD";break}return e}function mv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=hv(t),c=dv(t),u=fv(t),d=pv(t),p=mv(t),m=iv(t),g=sv(r),v=s.createProgram(),f,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),h.length>0&&(h+=`
`)):(f=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),h=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ei?tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ev("linearToOutputTexel",t.outputColorSpace),nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=ac(o),o=Eh(o,t),o=Th(o,t),a=ac(a),a=Eh(a,t),a=Th(a,t),o=_h(o),a=_h(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let E=w+f+o,S=w+h+a,H=bh(s,s.VERTEX_SHADER,E),C=bh(s,s.FRAGMENT_SHADER,S);s.attachShader(v,H),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(H).trim(),X=s.getShaderInfoLog(C).trim(),K=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,H,C);else{let $=wh(s,H,"vertex"),Y=wh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+$+`
`+Y)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||X==="")&&(j=!1);j&&(I.diagnostics={runnable:K,programLog:W,vertexShader:{log:G,prefix:f},fragmentShader:{log:X,prefix:h}})}s.deleteShader(H),s.deleteShader(C),U=new Us(s,v),T=rv(s,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Zx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=C,this}var xv=0,lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cc(e),t.set(e,i)),i}},cc=class{constructor(e){this.id=xv++,this.code=e,this.usedTimes=0}};function vv(n,e,t,i,s,r,o){let a=new Rr,l=new lc,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function f(T,M,I,W,G){let X=W.fog,K=G.geometry,j=T.isMeshStandardMaterial?W.environment:null,$=(T.isMeshStandardMaterial?t:e).get(T.envMap||j),Y=$&&$.mapping===la?$.image.height:null,fe=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ae=ge!==void 0?ge.length:0,ke=0;K.morphAttributes.position!==void 0&&(ke=1),K.morphAttributes.normal!==void 0&&(ke=2),K.morphAttributes.color!==void 0&&(ke=3);let qe,J,oe,Me;if(fe){let rt=kn[fe];qe=rt.vertexShader,J=rt.fragmentShader}else qe=T.vertexShader,J=T.fragmentShader,l.update(T),oe=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);let me=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),ze=G.isInstancedMesh===!0,Be=G.isBatchedMesh===!0,je=!!T.map,ee=!!T.matcap,ae=!!$,P=!!T.aoMap,Te=!!T.lightMap,ce=!!T.bumpMap,Se=!!T.normalMap,de=!!T.displacementMap,Fe=!!T.emissiveMap,D=!!T.metalnessMap,b=!!T.roughnessMap,y=T.anisotropy>0,_=T.clearcoat>0,F=T.dispersion>0,N=T.iridescence>0,B=T.sheen>0,te=T.transmission>0,Z=y&&!!T.anisotropyMap,ue=_&&!!T.clearcoatMap,le=_&&!!T.clearcoatNormalMap,se=_&&!!T.clearcoatRoughnessMap,ve=N&&!!T.iridescenceMap,pe=N&&!!T.iridescenceThicknessMap,Ce=B&&!!T.sheenColorMap,ye=B&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,He=!!T.specularColorMap,Ye=!!T.specularIntensityMap,z=te&&!!T.transmissionMap,be=te&&!!T.thicknessMap,q=!!T.gradientMap,ne=!!T.alphaMap,_e=T.alphaTest>0,xe=!!T.alphaHash,We=!!T.extensions,lt=Ei;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(lt=n.toneMapping);let Tt={shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:qe,fragmentShader:J,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Be,batchingColor:Be&&G._colorsTexture!==null,instancing:ze,instancingColor:ze&&G.instanceColor!==null,instancingMorph:ze&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Xs,alphaToCoverage:!!T.alphaToCoverage,map:je,matcap:ee,envMap:ae,envMapMode:ae&&$.mapping,envMapCubeUVHeight:Y,aoMap:P,lightMap:Te,bumpMap:ce,normalMap:Se,displacementMap:p&&de,emissiveMap:Fe,normalMapObjectSpace:Se&&T.normalMapType===Sp,normalMapTangentSpace:Se&&T.normalMapType===ed,metalnessMap:D,roughnessMap:b,anisotropy:y,anisotropyMap:Z,clearcoat:_,clearcoatMap:ue,clearcoatNormalMap:le,clearcoatRoughnessMap:se,dispersion:F,iridescence:N,iridescenceMap:ve,iridescenceThicknessMap:pe,sheen:B,sheenColorMap:Ce,sheenRoughnessMap:ye,specularMap:Ue,specularColorMap:He,specularIntensityMap:Ye,transmission:te,transmissionMap:z,thicknessMap:be,gradientMap:q,opaque:T.transparent===!1&&T.blending===Cs&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:_e,alphaHash:xe,combine:T.combine,mapUv:je&&v(T.map.channel),aoMapUv:P&&v(T.aoMap.channel),lightMapUv:Te&&v(T.lightMap.channel),bumpMapUv:ce&&v(T.bumpMap.channel),normalMapUv:Se&&v(T.normalMap.channel),displacementMapUv:de&&v(T.displacementMap.channel),emissiveMapUv:Fe&&v(T.emissiveMap.channel),metalnessMapUv:D&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:Z&&v(T.anisotropyMap.channel),clearcoatMapUv:ue&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(T.sheenRoughnessMap.channel),specularMapUv:Ue&&v(T.specularMap.channel),specularColorMapUv:He&&v(T.specularColorMap.channel),specularIntensityMapUv:Ye&&v(T.specularIntensityMap.channel),transmissionMapUv:z&&v(T.transmissionMap.channel),thicknessMapUv:be&&v(T.thicknessMap.channel),alphaMapUv:ne&&v(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Se||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(je||ne),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pe,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:je&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===ut,decodeVideoTextureEmissive:Fe&&T.emissiveMap.isVideoTexture===!0&&tt.getTransfer(T.emissiveMap.colorSpace)===ut,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ln,flipSided:T.side===zt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:We&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function h(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let I in T.defines)M.push(I),M.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(w(M,T),E(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function w(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){let M=g[T.type],I;if(M){let W=kn[M];I=qs.clone(W.uniforms)}else I=T.uniforms;return I}function H(T,M){let I;for(let W=0,G=u.length;W<G;W++){let X=u[W];if(X.cacheKey===M){I=X,++I.usedTimes;break}}return I===void 0&&(I=new gv(n,M,T,r),u.push(I)),I}function C(T){if(--T.usedTimes===0){let M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function U(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:S,acquireProgram:H,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:U}}function yv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Mv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ch(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,p,m,g,v,f){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=f),e++,h}function a(d,p,m,g,v,f){let h=o(d,p,m,g,v,f);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,p,m,g,v,f){let h=o(d,p,m,g,v,f);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,p){t.length>1&&t.sort(d||Mv),i.length>1&&i.sort(p||Rh),s.length>1&&s.sort(p||Rh)}function u(){for(let d=e,p=n.length;d<p;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function bv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ch,n.set(i,[o])):s>=r.length?(o=new Ch,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function wv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Ev=0;function Tv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _v(n){let e=new Sv,t=wv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new vt,o=new vt;function a(c){let u=0,d=0,p=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,v=0,f=0,h=0,w=0,E=0,S=0,H=0,C=0,R=0;c.sort(Tv);for(let T=0,M=c.length;T<M;T++){let I=c[T],W=I.color,G=I.intensity,X=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*G,d+=W.g*G,p+=W.b*G;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],G);R++}else if(I.isDirectionalLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,Y=t.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=j,m++}else if(I.isSpotLight){let j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(W).multiplyScalar(G),j.distance=X,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[v]=j;let $=I.shadow;if(I.map&&(i.spotLightMap[H]=I.map,H++,$.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[v]=$.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=K,S++}v++}else if(I.isRectAreaLight){let j=e.get(I);j.color.copy(W).multiplyScalar(G),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[f]=j,f++}else if(I.isPointLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){let $=I.shadow,Y=t.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=j,g++}else if(I.isHemisphereLight){let j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(G),j.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[h]=j,h++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;let U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==f||U.hemiLength!==h||U.numDirectionalShadows!==w||U.numPointShadows!==E||U.numSpotShadows!==S||U.numSpotMaps!==H||U.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+H-C,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=f,U.hemiLength=h,U.numDirectionalShadows=w,U.numPointShadows=E,U.numSpotShadows=S,U.numSpotMaps=H,U.numLightProbes=R,i.version=Ev++)}function l(c,u){let d=0,p=0,m=0,g=0,v=0,f=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){let E=c[h];if(E.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),d++}else if(E.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),m++}else if(E.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),o.identity(),r.copy(E.matrixWorld),r.premultiply(f),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let S=i.point[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){let S=i.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(f),v++}}}return{setup:a,setupView:l,state:i}}function Ph(n){let e=new _v(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Av(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ph(n),e.set(s,[a])):r>=o.length?(a=new Ph(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var uc=class extends Ki{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hc=class extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cv=`uniform sampler2D shadow_pass;
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
}`;function Pv(n,e,t){let i=new Cr,s=new ie,r=new ie,o=new nt,a=new uc({depthPacking:bp}),l=new hc,c={},u=t.maxTextureSize,d={[Ti]:zt,[zt]:Ti,[ln]:ln},p=new it({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Rv,fragmentShader:Cv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new De(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let h=this.type;this.render=function(C,R,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;let T=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),W=n.state;W.setBlending(zn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let G=h!==ni&&this.type===ni,X=h===ni&&this.type!==ni;for(let K=0,j=C.length;K<j;K++){let $=C[K],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let fe=Y.getFrameExtents();if(s.multiply(fe),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||X===!0){let Ae=this.type!==ni?{minFilter:ot,magFilter:ot}:{};Y.map!==null&&Y.map.dispose(),Y.map=new at(s.x,s.y,Ae),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let ge=Y.getViewportCount();for(let Ae=0;Ae<ge;Ae++){let ke=Y.getViewport(Ae);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),W.viewport(o),Y.updateMatrices($,Ae),i=Y.getFrustum(),S(R,U,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===ni&&w(Y,U),Y.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(T,M,I)};function w(C,R){let U=e.update(v);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new at(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,U,p,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,U,m,v,null)}function E(C,R,U,T){let M=null,I=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)M=I;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=M.uuid,G=R.uuid,X=c[W];X===void 0&&(X={},c[W]=X);let K=X[G];K===void 0&&(K=M.clone(),X[G]=K,R.addEventListener("dispose",H)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,T===ni?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=n.properties.get(M);W.light=U}return M}function S(C,R,U,T,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let G=e.update(C),X=C.material;if(Array.isArray(X)){let K=G.groups;for(let j=0,$=K.length;j<$;j++){let Y=K[j],fe=X[Y.materialIndex];if(fe&&fe.visible){let ge=E(C,fe,T,M);C.onBeforeShadow(n,C,R,U,G,ge,Y),n.renderBufferDirect(U,null,G,ge,C,Y),C.onAfterShadow(n,C,R,U,G,ge,Y)}}}else if(X.visible){let K=E(C,X,T,M);C.onBeforeShadow(n,C,R,U,G,K,null),n.renderBufferDirect(U,null,G,K,C,null),C.onAfterShadow(n,C,R,U,G,K,null)}}let W=C.children;for(let G=0,X=W.length;G<X;G++)S(W[G],R,U,T,M)}function H(C){C.target.removeEventListener("dispose",H);for(let U in c){let T=c[U],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var Iv={[ml]:gl,[xl]:Ml,[vl]:bl,[Ls]:yl,[gl]:ml,[Ml]:xl,[bl]:vl,[yl]:Ls};function Uv(n,e){function t(){let z=!1,be=new nt,q=null,ne=new nt(0,0,0,0);return{setMask:function(_e){q!==_e&&!z&&(n.colorMask(_e,_e,_e,_e),q=_e)},setLocked:function(_e){z=_e},setClear:function(_e,xe,We,lt,Tt){Tt===!0&&(_e*=lt,xe*=lt,We*=lt),be.set(_e,xe,We,lt),ne.equals(be)===!1&&(n.clearColor(_e,xe,We,lt),ne.copy(be))},reset:function(){z=!1,q=null,ne.set(-1,0,0,0)}}}function i(){let z=!1,be=!1,q=null,ne=null,_e=null;return{setReversed:function(xe){if(be!==xe){let We=e.get("EXT_clip_control");be?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);let lt=_e;_e=null,this.setClear(lt)}be=xe},getReversed:function(){return be},setTest:function(xe){xe?me(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(xe){q!==xe&&!z&&(n.depthMask(xe),q=xe)},setFunc:function(xe){if(be&&(xe=Iv[xe]),ne!==xe){switch(xe){case ml:n.depthFunc(n.NEVER);break;case gl:n.depthFunc(n.ALWAYS);break;case xl:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case yl:n.depthFunc(n.GEQUAL);break;case Ml:n.depthFunc(n.GREATER);break;case bl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=xe}},setLocked:function(xe){z=xe},setClear:function(xe){_e!==xe&&(be&&(xe=1-xe),n.clearDepth(xe),_e=xe)},reset:function(){z=!1,q=null,ne=null,_e=null,be=!1}}}function s(){let z=!1,be=null,q=null,ne=null,_e=null,xe=null,We=null,lt=null,Tt=null;return{setTest:function(rt){z||(rt?me(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(rt){be!==rt&&!z&&(n.stencilMask(rt),be=rt)},setFunc:function(rt,nn,Qt){(q!==rt||ne!==nn||_e!==Qt)&&(n.stencilFunc(rt,nn,Qt),q=rt,ne=nn,_e=Qt)},setOp:function(rt,nn,Qt){(xe!==rt||We!==nn||lt!==Qt)&&(n.stencilOp(rt,nn,Qt),xe=rt,We=nn,lt=Qt)},setLocked:function(rt){z=rt},setClear:function(rt){Tt!==rt&&(n.clearStencil(rt),Tt=rt)},reset:function(){z=!1,be=null,q=null,ne=null,_e=null,xe=null,We=null,lt=null,Tt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,w=null,E=null,S=null,H=null,C=null,R=new Re(0,0,0),U=0,T=!1,M=null,I=null,W=null,G=null,X=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,$=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=$>=2);let fe=null,ge={},Ae=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),qe=new nt().fromArray(Ae),J=new nt().fromArray(ke);function oe(z,be,q,ne){let _e=new Uint8Array(4),xe=n.createTexture();n.bindTexture(z,xe),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<q;We++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(be+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return xe}let Me={};Me[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(Ls),ce(!1),Se(Uu),me(n.CULL_FACE),P(zn);function me(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function Pe(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function ze(z,be){return d[z]!==be?(n.bindFramebuffer(z,be),d[z]=be,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Be(z,be){let q=m,ne=!1;if(z){q=p.get(be),q===void 0&&(q=[],p.set(be,q));let _e=z.textures;if(q.length!==_e.length||q[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,We=_e.length;xe<We;xe++)q[xe]=n.COLOR_ATTACHMENT0+xe;q.length=_e.length,ne=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ne=!0);ne&&n.drawBuffers(q)}function je(z){return g!==z?(n.useProgram(z),g=z,!0):!1}let ee={[Gi]:n.FUNC_ADD,[jf]:n.FUNC_SUBTRACT,[Yf]:n.FUNC_REVERSE_SUBTRACT};ee[Kf]=n.MIN,ee[Zf]=n.MAX;let ae={[Jf]:n.ZERO,[Qf]:n.ONE,[$f]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[rp]:n.SRC_ALPHA_SATURATE,[ip]:n.DST_COLOR,[tp]:n.DST_ALPHA,[ep]:n.ONE_MINUS_SRC_COLOR,[pl]:n.ONE_MINUS_SRC_ALPHA,[sp]:n.ONE_MINUS_DST_COLOR,[np]:n.ONE_MINUS_DST_ALPHA,[op]:n.CONSTANT_COLOR,[ap]:n.ONE_MINUS_CONSTANT_COLOR,[lp]:n.CONSTANT_ALPHA,[cp]:n.ONE_MINUS_CONSTANT_ALPHA};function P(z,be,q,ne,_e,xe,We,lt,Tt,rt){if(z===zn){v===!0&&(Pe(n.BLEND),v=!1);return}if(v===!1&&(me(n.BLEND),v=!0),z!==qf){if(z!==f||rt!==T){if((h!==Gi||S!==Gi)&&(n.blendEquation(n.FUNC_ADD),h=Gi,S=Gi),rt)switch(z){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oo:n.blendFunc(n.ONE,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Du:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,E=null,H=null,C=null,R.set(0,0,0),U=0,f=z,T=rt}return}_e=_e||be,xe=xe||q,We=We||ne,(be!==h||_e!==S)&&(n.blendEquationSeparate(ee[be],ee[_e]),h=be,S=_e),(q!==w||ne!==E||xe!==H||We!==C)&&(n.blendFuncSeparate(ae[q],ae[ne],ae[xe],ae[We]),w=q,E=ne,H=xe,C=We),(lt.equals(R)===!1||Tt!==U)&&(n.blendColor(lt.r,lt.g,lt.b,Tt),R.copy(lt),U=Tt),f=z,T=!1}function Te(z,be){z.side===ln?Pe(n.CULL_FACE):me(n.CULL_FACE);let q=z.side===zt;be&&(q=!q),ce(q),z.blending===Cs&&z.transparent===!1?P(zn):P(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let ne=z.stencilWrite;a.setTest(ne),ne&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function Se(z){z!==Gf?(me(n.CULL_FACE),z!==I&&(z===Uu?n.cullFace(n.BACK):z===Wf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),I=z}function de(z){z!==W&&(j&&n.lineWidth(z),W=z)}function Fe(z,be,q){z?(me(n.POLYGON_OFFSET_FILL),(G!==be||X!==q)&&(n.polygonOffset(be,q),G=be,X=q)):Pe(n.POLYGON_OFFSET_FILL)}function D(z){z?me(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function b(z){z===void 0&&(z=n.TEXTURE0+K-1),fe!==z&&(n.activeTexture(z),fe=z)}function y(z,be,q){q===void 0&&(fe===null?q=n.TEXTURE0+K-1:q=fe);let ne=ge[q];ne===void 0&&(ne={type:void 0,texture:void 0},ge[q]=ne),(ne.type!==z||ne.texture!==be)&&(fe!==q&&(n.activeTexture(q),fe=q),n.bindTexture(z,be||Me[z]),ne.type=z,ne.texture=be)}function _(){let z=ge[fe];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){qe.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),qe.copy(z))}function ye(z){J.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),J.copy(z))}function Ue(z,be){let q=c.get(be);q===void 0&&(q=new WeakMap,c.set(be,q));let ne=q.get(z);ne===void 0&&(ne=n.getUniformBlockIndex(be,z.name),q.set(z,ne))}function He(z,be){let ne=c.get(be).get(z);l.get(be)!==ne&&(n.uniformBlockBinding(be,ne,z.__bindingPointIndex),l.set(be,ne))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,ge={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,w=null,E=null,S=null,H=null,C=null,R=new Re(0,0,0),U=0,T=!1,M=null,I=null,W=null,G=null,X=null,qe.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Pe,bindFramebuffer:ze,drawBuffers:Be,useProgram:je,setBlending:P,setMaterial:Te,setFlipSided:ce,setCullFace:Se,setLineWidth:de,setPolygonOffset:Fe,setScissorTest:D,activeTexture:b,bindTexture:y,unbindTexture:_,compressedTexImage2D:F,compressedTexImage3D:N,texImage2D:ve,texImage3D:pe,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:le,texStorage3D:se,texSubImage2D:B,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:ue,scissor:Ce,viewport:ye,reset:Ye}}function Ih(n,e,t,i){let s=Lv(i);switch(t){case Yh:return n*e;case Zh:return n*e;case Jh:return n*e*2;case Ws:return n*e/s.components*s.byteLength;case Hc:return n*e/s.components*s.byteLength;case Qh:return n*e*2/s.components*s.byteLength;case Vc:return n*e*2/s.components*s.byteLength;case Kh:return n*e*3/s.components*s.byteLength;case xt:return n*e*4/s.components*s.byteLength;case Gc:return n*e*4/s.components*s.byteLength;case Uo:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Do:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(n,16)*Math.max(e,8)/4;case _l:case Rl:return Math.max(n,8)*Math.max(e,8)/2;case Pl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case No:case jl:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $h:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lv(n){switch(n){case hn:case Xh:return{byteLength:1,components:1};case Tr:case qh:case Gt:return{byteLength:2,components:1};case kc:case zc:return{byteLength:2,components:4};case ji:case Bc:case St:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Dv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return m?new OffscreenCanvas(b,y):zo("canvas")}function v(b,y,_){let F=1,N=D(b);if((N.width>_||N.height>_)&&(F=_/Math.max(N.width,N.height)),F<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let B=Math.floor(F*N.width),te=Math.floor(F*N.height);d===void 0&&(d=g(B,te));let Z=y?g(B,te):d;return Z.width=B,Z.height=te,Z.getContext("2d").drawImage(b,0,0,B,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+B+"x"+te+")."),Z}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),b;return b}function f(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,y,_,F,N=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let B=y;if(y===n.RED&&(_===n.FLOAT&&(B=n.R32F),_===n.HALF_FLOAT&&(B=n.R16F),_===n.UNSIGNED_BYTE&&(B=n.R8)),y===n.RED_INTEGER&&(_===n.UNSIGNED_BYTE&&(B=n.R8UI),_===n.UNSIGNED_SHORT&&(B=n.R16UI),_===n.UNSIGNED_INT&&(B=n.R32UI),_===n.BYTE&&(B=n.R8I),_===n.SHORT&&(B=n.R16I),_===n.INT&&(B=n.R32I)),y===n.RG&&(_===n.FLOAT&&(B=n.RG32F),_===n.HALF_FLOAT&&(B=n.RG16F),_===n.UNSIGNED_BYTE&&(B=n.RG8)),y===n.RG_INTEGER&&(_===n.UNSIGNED_BYTE&&(B=n.RG8UI),_===n.UNSIGNED_SHORT&&(B=n.RG16UI),_===n.UNSIGNED_INT&&(B=n.RG32UI),_===n.BYTE&&(B=n.RG8I),_===n.SHORT&&(B=n.RG16I),_===n.INT&&(B=n.RG32I)),y===n.RGB_INTEGER&&(_===n.UNSIGNED_BYTE&&(B=n.RGB8UI),_===n.UNSIGNED_SHORT&&(B=n.RGB16UI),_===n.UNSIGNED_INT&&(B=n.RGB32UI),_===n.BYTE&&(B=n.RGB8I),_===n.SHORT&&(B=n.RGB16I),_===n.INT&&(B=n.RGB32I)),y===n.RGBA_INTEGER&&(_===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),_===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),_===n.UNSIGNED_INT&&(B=n.RGBA32UI),_===n.BYTE&&(B=n.RGBA8I),_===n.SHORT&&(B=n.RGBA16I),_===n.INT&&(B=n.RGBA32I)),y===n.RGB&&_===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),y===n.RGBA){let te=N?ca:tt.getTransfer(F);_===n.FLOAT&&(B=n.RGBA32F),_===n.HALF_FLOAT&&(B=n.RGBA16F),_===n.UNSIGNED_BYTE&&(B=te===ut?n.SRGB8_ALPHA8:n.RGBA8),_===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),_===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function S(b,y){let _;return b?y===null||y===ji||y===Ns?_=n.DEPTH24_STENCIL8:y===St?_=n.DEPTH32F_STENCIL8:y===Tr&&(_=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ji||y===Ns?_=n.DEPTH_COMPONENT24:y===St?_=n.DEPTH_COMPONENT32F:y===Tr&&(_=n.DEPTH_COMPONENT16),_}function H(b,y){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==ot&&b.minFilter!==bt?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function C(b){let y=b.target;y.removeEventListener("dispose",C),U(y),y.isVideoTexture&&u.delete(y)}function R(b){let y=b.target;y.removeEventListener("dispose",R),M(y)}function U(b){let y=i.get(b);if(y.__webglInit===void 0)return;let _=b.source,F=p.get(_);if(F){let N=F[y.__cacheKey];N.usedTimes--,N.usedTimes===0&&T(b),Object.keys(F).length===0&&p.delete(_)}i.remove(b)}function T(b){let y=i.get(b);n.deleteTexture(y.__webglTexture);let _=b.source,F=p.get(_);delete F[y.__cacheKey],o.memory.textures--}function M(b){let y=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(y.__webglFramebuffer[F]))for(let N=0;N<y.__webglFramebuffer[F].length;N++)n.deleteFramebuffer(y.__webglFramebuffer[F][N]);else n.deleteFramebuffer(y.__webglFramebuffer[F]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[F])}else{if(Array.isArray(y.__webglFramebuffer))for(let F=0;F<y.__webglFramebuffer.length;F++)n.deleteFramebuffer(y.__webglFramebuffer[F]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let F=0;F<y.__webglColorRenderbuffer.length;F++)y.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[F]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let _=b.textures;for(let F=0,N=_.length;F<N;F++){let B=i.get(_[F]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(_[F])}i.remove(b)}let I=0;function W(){I=0}function G(){let b=I;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),I+=1,b}function X(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function K(b,y){let _=i.get(b);if(b.isVideoTexture&&de(b),b.isRenderTargetTexture===!1&&b.version>0&&_.__version!==b.version){let F=b.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(_,b,y);return}}t.bindTexture(n.TEXTURE_2D,_.__webglTexture,n.TEXTURE0+y)}function j(b,y){let _=i.get(b);if(b.version>0&&_.__version!==b.version){J(_,b,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,_.__webglTexture,n.TEXTURE0+y)}function $(b,y){let _=i.get(b);if(b.version>0&&_.__version!==b.version){J(_,b,y);return}t.bindTexture(n.TEXTURE_3D,_.__webglTexture,n.TEXTURE0+y)}function Y(b,y){let _=i.get(b);if(b.version>0&&_.__version!==b.version){oe(_,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+y)}let fe={[El]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[Tl]:n.MIRRORED_REPEAT},ge={[ot]:n.NEAREST,[yp]:n.NEAREST_MIPMAP_NEAREST,[oo]:n.NEAREST_MIPMAP_LINEAR,[bt]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},Ae={[wp]:n.NEVER,[Cp]:n.ALWAYS,[Ep]:n.LESS,[td]:n.LEQUAL,[Tp]:n.EQUAL,[Rp]:n.GEQUAL,[_p]:n.GREATER,[Ap]:n.NOTEQUAL};function ke(b,y){if(y.type===St&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===bt||y.magFilter===Da||y.magFilter===oo||y.magFilter===qi||y.minFilter===bt||y.minFilter===Da||y.minFilter===oo||y.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,fe[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,fe[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,fe[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ge[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ot||y.minFilter!==oo&&y.minFilter!==qi||y.type===St&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let _=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,_.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function qe(b,y){let _=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",C));let F=y.source,N=p.get(F);N===void 0&&(N={},p.set(F,N));let B=X(y);if(B!==b.__cacheKey){N[B]===void 0&&(N[B]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,_=!0),N[B].usedTimes++;let te=N[b.__cacheKey];te!==void 0&&(N[b.__cacheKey].usedTimes--,te.usedTimes===0&&T(y)),b.__cacheKey=B,b.__webglTexture=N[B].texture}return _}function J(b,y,_){let F=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(F=n.TEXTURE_3D);let N=qe(b,y),B=y.source;t.bindTexture(F,b.__webglTexture,n.TEXTURE0+_);let te=i.get(B);if(B.version!==te.__version||N===!0){t.activeTexture(n.TEXTURE0+_);let Z=tt.getPrimaries(tt.workingColorSpace),ue=y.colorSpace===wi?null:tt.getPrimaries(y.colorSpace),le=y.colorSpace===wi||Z===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let se=v(y.image,!1,s.maxTextureSize);se=Fe(y,se);let ve=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),Ce=E(y.internalFormat,ve,pe,y.colorSpace,y.isVideoTexture);ke(F,y);let ye,Ue=y.mipmaps,He=y.isVideoTexture!==!0,Ye=te.__version===void 0||N===!0,z=B.dataReady,be=H(y,se);if(y.isDepthTexture)Ce=S(y.format===Os,y.type),Ye&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ce,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ce,se.width,se.height,0,ve,pe,null));else if(y.isDataTexture)if(Ue.length>0){He&&Ye&&t.texStorage2D(n.TEXTURE_2D,be,Ce,Ue[0].width,Ue[0].height);for(let q=0,ne=Ue.length;q<ne;q++)ye=Ue[q],He?z&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,ve,pe,ye.data):t.texImage2D(n.TEXTURE_2D,q,Ce,ye.width,ye.height,0,ve,pe,ye.data);y.generateMipmaps=!1}else He?(Ye&&t.texStorage2D(n.TEXTURE_2D,be,Ce,se.width,se.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ve,pe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,se.width,se.height,0,ve,pe,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ce,Ue[0].width,Ue[0].height,se.depth);for(let q=0,ne=Ue.length;q<ne;q++)if(ye=Ue[q],y.format!==xt)if(ve!==null)if(He){if(z)if(y.layerUpdates.size>0){let _e=Ih(ye.width,ye.height,y.format,y.type);for(let xe of y.layerUpdates){let We=ye.data.subarray(xe*_e/ye.data.BYTES_PER_ELEMENT,(xe+1)*_e/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,xe,ye.width,ye.height,1,ve,We)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,se.depth,ve,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ce,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,se.depth,ve,pe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ce,ye.width,ye.height,se.depth,0,ve,pe,ye.data)}else{He&&Ye&&t.texStorage2D(n.TEXTURE_2D,be,Ce,Ue[0].width,Ue[0].height);for(let q=0,ne=Ue.length;q<ne;q++)ye=Ue[q],y.format!==xt?ve!==null?He?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?z&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,ve,pe,ye.data):t.texImage2D(n.TEXTURE_2D,q,Ce,ye.width,ye.height,0,ve,pe,ye.data)}else if(y.isDataArrayTexture)if(He){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ce,se.width,se.height,se.depth),z)if(y.layerUpdates.size>0){let q=Ih(se.width,se.height,y.format,y.type);for(let ne of y.layerUpdates){let _e=se.data.subarray(ne*q/se.data.BYTES_PER_ELEMENT,(ne+1)*q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,ve,pe,_e)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,pe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,ve,pe,se.data);else if(y.isData3DTexture)He?(Ye&&t.texStorage3D(n.TEXTURE_3D,be,Ce,se.width,se.height,se.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,pe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,ve,pe,se.data);else if(y.isFramebufferTexture){if(Ye)if(He)t.texStorage2D(n.TEXTURE_2D,be,Ce,se.width,se.height);else{let q=se.width,ne=se.height;for(let _e=0;_e<be;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ce,q,ne,0,ve,pe,null),q>>=1,ne>>=1}}else if(Ue.length>0){if(He&&Ye){let q=D(Ue[0]);t.texStorage2D(n.TEXTURE_2D,be,Ce,q.width,q.height)}for(let q=0,ne=Ue.length;q<ne;q++)ye=Ue[q],He?z&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ve,pe,ye):t.texImage2D(n.TEXTURE_2D,q,Ce,ve,pe,ye);y.generateMipmaps=!1}else if(He){if(Ye){let q=D(se);t.texStorage2D(n.TEXTURE_2D,be,Ce,q.width,q.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,pe,se)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ve,pe,se);f(y)&&h(F),te.__version=B.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function oe(b,y,_){if(y.image.length!==6)return;let F=qe(b,y),N=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+_);let B=i.get(N);if(N.version!==B.__version||F===!0){t.activeTexture(n.TEXTURE0+_);let te=tt.getPrimaries(tt.workingColorSpace),Z=y.colorSpace===wi?null:tt.getPrimaries(y.colorSpace),ue=y.colorSpace===wi||te===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let le=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let ne=0;ne<6;ne++)!le&&!se?ve[ne]=v(y.image[ne],!0,s.maxCubemapSize):ve[ne]=se?y.image[ne].image:y.image[ne],ve[ne]=Fe(y,ve[ne]);let pe=ve[0],Ce=r.convert(y.format,y.colorSpace),ye=r.convert(y.type),Ue=E(y.internalFormat,Ce,ye,y.colorSpace),He=y.isVideoTexture!==!0,Ye=B.__version===void 0||F===!0,z=N.dataReady,be=H(y,pe);ke(n.TEXTURE_CUBE_MAP,y);let q;if(le){He&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ue,pe.width,pe.height);for(let ne=0;ne<6;ne++){q=ve[ne].mipmaps;for(let _e=0;_e<q.length;_e++){let xe=q[_e];y.format!==xt?Ce!==null?He?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,xe.width,xe.height,Ce,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,xe.width,xe.height,Ce,ye,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,Ue,xe.width,xe.height,0,Ce,ye,xe.data)}}}else{if(q=y.mipmaps,He&&Ye){q.length>0&&be++;let ne=D(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ue,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(se){He?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ve[ne].width,ve[ne].height,Ce,ye,ve[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,ve[ne].width,ve[ne].height,0,Ce,ye,ve[ne].data);for(let _e=0;_e<q.length;_e++){let We=q[_e].image[ne].image;He?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,We.width,We.height,Ce,ye,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,Ue,We.width,We.height,0,Ce,ye,We.data)}}else{He?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,ye,ve[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,Ce,ye,ve[ne]);for(let _e=0;_e<q.length;_e++){let xe=q[_e];He?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Ce,ye,xe.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,Ue,Ce,ye,xe.image[ne])}}}f(y)&&h(n.TEXTURE_CUBE_MAP),B.__version=N.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Me(b,y,_,F,N,B){let te=r.convert(_.format,_.colorSpace),Z=r.convert(_.type),ue=E(_.internalFormat,te,Z,_.colorSpace),le=i.get(y),se=i.get(_);if(se.__renderTarget=y,!le.__hasExternalTextures){let ve=Math.max(1,y.width>>B),pe=Math.max(1,y.height>>B);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,B,ue,ve,pe,y.depth,0,te,Z,null):t.texImage2D(N,B,ue,ve,pe,0,te,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,N,se.__webglTexture,0,ce(y)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,N,se.__webglTexture,B),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(b,y,_){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){let F=y.depthTexture,N=F&&F.isDepthTexture?F.type:null,B=S(y.stencilBuffer,N),te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=ce(y);Se(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,B,y.width,y.height):_?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,B,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,B,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,b)}else{let F=y.textures;for(let N=0;N<F.length;N++){let B=F[N],te=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),ue=E(B.internalFormat,te,Z,B.colorSpace),le=ce(y);_&&Se(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,y.width,y.height):Se(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,ue,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ue,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=i.get(y.depthTexture);F.__renderTarget=y,(!F.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let N=F.__webglTexture,B=ce(y);if(y.depthTexture.format===Ps)Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(y.depthTexture.format===Os)Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function ze(b){let y=i.get(b),_=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let F=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),F){let N=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,F.removeEventListener("dispose",N)};F.addEventListener("dispose",N),y.__depthDisposeCallback=N}y.__boundDepthTexture=F}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(_)throw new Error("target.depthTexture not supported in Cube render targets");Pe(y.__webglFramebuffer,b)}else if(_){y.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[F]),y.__webglDepthbuffer[F]===void 0)y.__webglDepthbuffer[F]=n.createRenderbuffer(),me(y.__webglDepthbuffer[F],b,!1);else{let N=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=y.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,B)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),me(y.__webglDepthbuffer,b,!1);else{let F=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,N),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,N)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(b,y,_){let F=i.get(b);y!==void 0&&Me(F.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),_!==void 0&&ze(b)}function je(b){let y=b.texture,_=i.get(b),F=i.get(y);b.addEventListener("dispose",R);let N=b.textures,B=b.isWebGLCubeRenderTarget===!0,te=N.length>1;if(te||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=y.version,o.memory.textures++),B){_.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){_.__webglFramebuffer[Z]=[];for(let ue=0;ue<y.mipmaps.length;ue++)_.__webglFramebuffer[Z][ue]=n.createFramebuffer()}else _.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){_.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)_.__webglFramebuffer[Z]=n.createFramebuffer()}else _.__webglFramebuffer=n.createFramebuffer();if(te)for(let Z=0,ue=N.length;Z<ue;Z++){let le=i.get(N[Z]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Se(b)===!1){_.__webglMultisampledFramebuffer=n.createFramebuffer(),_.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,_.__webglMultisampledFramebuffer);for(let Z=0;Z<N.length;Z++){let ue=N[Z];_.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,_.__webglColorRenderbuffer[Z]);let le=r.convert(ue.format,ue.colorSpace),se=r.convert(ue.type),ve=E(ue.internalFormat,le,se,ue.colorSpace,b.isXRRenderTarget===!0),pe=ce(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,_.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(_.__webglDepthRenderbuffer=n.createRenderbuffer(),me(_.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),ke(n.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Me(_.__webglFramebuffer[Z][ue],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue);else Me(_.__webglFramebuffer[Z],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(y)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let Z=0,ue=N.length;Z<ue;Z++){let le=N[Z],se=i.get(le);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ke(n.TEXTURE_2D,le),Me(_.__webglFramebuffer,b,le,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,0),f(le)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Z=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,F.__webglTexture),ke(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Me(_.__webglFramebuffer[ue],b,y,n.COLOR_ATTACHMENT0,Z,ue);else Me(_.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,Z,0);f(y)&&h(Z),t.unbindTexture()}b.depthBuffer&&ze(b)}function ee(b){let y=b.textures;for(let _=0,F=y.length;_<F;_++){let N=y[_];if(f(N)){let B=w(b),te=i.get(N).__webglTexture;t.bindTexture(B,te),h(B),t.unbindTexture()}}}let ae=[],P=[];function Te(b){if(b.samples>0){if(Se(b)===!1){let y=b.textures,_=b.width,F=b.height,N=n.COLOR_BUFFER_BIT,B=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(b),Z=y.length>1;if(Z)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);let le=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,_,F,0,0,_,F,N,n.NEAREST),l===!0&&(ae.length=0,P.length=0,ae.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ae.push(B),P.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);let le=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ce(b){return Math.min(s.maxSamples,b.samples)}function Se(b){let y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(b){let y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function Fe(b,y){let _=b.colorSpace,F=b.format,N=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||_!==Xs&&_!==wi&&(tt.getTransfer(_)===ut?(F!==xt||N!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",_)),y}function D(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=Be,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Se}function Fv(n,e){function t(i,s=wi){let r,o=tt.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return n.BYTE;if(i===qh)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Bc)return n.INT;if(i===ji)return n.UNSIGNED_INT;if(i===St)return n.FLOAT;if(i===Gt)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===Kh)return n.RGB;if(i===xt)return n.RGBA;if(i===Zh)return n.LUMINANCE;if(i===Jh)return n.LUMINANCE_ALPHA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Os)return n.DEPTH_STENCIL;if(i===Ws)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===Qh)return n.RG;if(i===Vc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===Uo||i===Lo||i===Do||i===Fo)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===Al||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Il||i===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Il)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ll||i===Dl||i===Fl||i===Nl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ll)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===No||i===jl||i===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===No)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$h||i===Kl||i===Zl||i===Jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===No)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var dc=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},un=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nv={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,i),h=this._getHandJoint(c,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`,fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new it({vertexShader:Ov,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Pt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pc=class extends _i{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,g=null,v=new fc,f=t.getContextAttributes(),h=null,w=null,E=[],S=[],H=new ie,C=null,R=new Nt;R.viewport=new nt;let U=new Nt;U.viewport=new nt;let T=[R,U],M=new dc,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=E[J];return oe===void 0&&(oe=new br,E[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=E[J];return oe===void 0&&(oe=new br,E[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=E[J];return oe===void 0&&(oe=new br,E[J]=oe),oe.getHandSpace()};function G(J){let oe=S.indexOf(J.inputSource);if(oe===-1)return;let Me=E[oe];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||o),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let J=0;J<E.length;J++){let oe=S[J];oe!==null&&(S[J]=null,E[J].disconnect(oe))}I=null,W=null,v.reset(),e.setRenderTarget(h),m=null,p=null,d=null,s=null,w=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(H),s.renderState.layers===void 0){let oe={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new at(m.framebufferWidth,m.framebufferHeight,{format:xt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let oe=null,Me=null,me=null;f.depth&&(me=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=f.stencil?Os:Ps,Me=f.stencil?Ns:ji);let Pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(Pe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new at(p.textureWidth,p.textureHeight,{format:xt,type:hn,depthTexture:new Yo(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(J){for(let oe=0;oe<J.removed.length;oe++){let Me=J.removed[oe],me=S.indexOf(Me);me>=0&&(S[me]=null,E[me].disconnect(Me))}for(let oe=0;oe<J.added.length;oe++){let Me=J.added[oe],me=S.indexOf(Me);if(me===-1){for(let ze=0;ze<E.length;ze++)if(ze>=S.length){S.push(Me),me=ze;break}else if(S[ze]===null){S[ze]=Me,me=ze;break}if(me===-1)break}let Pe=E[me];Pe&&Pe.connect(Me)}}let j=new L,$=new L;function Y(J,oe,Me){j.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(Me.matrixWorld);let me=j.distanceTo($),Pe=oe.projectionMatrix.elements,ze=Me.projectionMatrix.elements,Be=Pe[14]/(Pe[10]-1),je=Pe[14]/(Pe[10]+1),ee=(Pe[9]+1)/Pe[5],ae=(Pe[9]-1)/Pe[5],P=(Pe[8]-1)/Pe[0],Te=(ze[8]+1)/ze[0],ce=Be*P,Se=Be*Te,de=me/(-P+Te),Fe=de*-P;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Fe),J.translateZ(de),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let D=Be+de,b=je+de,y=ce-Fe,_=Se+(me-Fe),F=ee*je/b*D,N=ae*je/b*D;J.projectionMatrix.makePerspective(y,_,F,N,D,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function fe(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let oe=J.near,Me=J.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),M.near=U.near=R.near=oe,M.far=U.far=R.far=Me,(I!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,W=M.far),R.layers.mask=J.layers.mask|2,U.layers.mask=J.layers.mask|4,M.layers.mask=R.layers.mask|U.layers.mask;let me=J.parent,Pe=M.cameras;fe(M,me);for(let ze=0;ze<Pe.length;ze++)fe(Pe[ze],me);Pe.length===2?Y(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),ge(J,M,me)};function ge(J,oe,Me){Me===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_r*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ae=null;function ke(J,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){let Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let me=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let ze=0;ze<Me.length;ze++){let Be=Me[ze],je=null;if(m!==null)je=m.getViewport(Be);else{let ae=d.getViewSubImage(p,Be);je=ae.viewport,ze===0&&(e.setRenderTargetTextures(w,ae.colorTexture,p.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(w))}let ee=T[ze];ee===void 0&&(ee=new Nt,ee.layers.enable(ze),ee.viewport=new nt,T[ze]=ee),ee.matrix.fromArray(Be.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Be.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(je.x,je.y,je.width,je.height),ze===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(ee)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){let ze=d.getDepthInformation(Me[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,s.renderState)}}for(let Me=0;Me<E.length;Me++){let me=S[Me],Pe=E[Me];me!==null&&Pe!==void 0&&Pe.update(me,oe,c||o)}Ae&&Ae(J,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let qe=new rd;qe.setAnimationLoop(ke),this.setAnimationLoop=function(J){Ae=J},this.dispose=function(){}}},Hi=new Hn,kv=new vt;function zv(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,sd(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,w,E,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),d(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h)):h.isMeshStandardMaterial?(r(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,S)):h.isMeshMatcapMaterial?(r(f,h),g(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),v(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?l(f,h,w,E):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===zt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===zt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let w=e.get(h),E=w.envMap,S=w.envMapRotation;E&&(f.envMap.value=E,Hi.copy(S),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),f.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Hi)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,w,E){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*w,f.scale.value=E*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,w){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===zt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){let w=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hv(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let S=E.program;i.uniformBlockBinding(w,S)}function c(w,E){let S=s[w.id];S===void 0&&(g(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",f));let H=E.program;i.updateUBOMapping(w,H);let C=e.render.frame;r[w.id]!==C&&(p(w),r[w.id]=C)}function u(w){let E=d();w.__bindingPointIndex=E;let S=n.createBuffer(),H=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,H,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let E=s[w.id],S=w.uniforms,H=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,R=S.length;C<R;C++){let U=Array.isArray(S[C])?S[C]:[S[C]];for(let T=0,M=U.length;T<M;T++){let I=U[T];if(m(I,C,T,H)===!0){let W=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],X=0;for(let K=0;K<G.length;K++){let j=G[K],$=v(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,W+X,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,E,S,H){let C=w.value,R=E+"_"+S;if(H[R]===void 0)return typeof C=="number"||typeof C=="boolean"?H[R]=C:H[R]=C.clone(),!0;{let U=H[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return H[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(w){let E=w.uniforms,S=0,H=16;for(let R=0,U=E.length;R<U;R++){let T=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,I=T.length;M<I;M++){let W=T[M],G=Array.isArray(W.value)?W.value:[W.value];for(let X=0,K=G.length;X<K;X++){let j=G[X],$=v(j),Y=S%H,fe=Y%$.boundary,ge=Y+fe;S+=fe,ge!==0&&H-ge<$.storage&&(S+=H-ge),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=$.storage}}}let C=S%H;return C>0&&(S+=H-C),w.__size=S,w.__cache={},this}function v(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function f(w){let E=w.target;E.removeEventListener("dispose",f);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Ko=class{constructor(e={}){let{canvas:t=qp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),v=new Int32Array(4),f=null,h=null,w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Ei,this.toneMappingExposure=1;let S=this,H=!1,C=0,R=0,U=null,T=-1,M=null,I=new nt,W=new nt,G=null,X=new Re(0),K=0,j=t.width,$=t.height,Y=1,fe=null,ge=null,Ae=new nt(0,0,j,$),ke=new nt(0,0,j,$),qe=!1,J=new Cr,oe=!1,Me=!1,me=new vt,Pe=new vt,ze=new L,Be=new nt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ae(){return U===null?Y:1}let P=i;function Te(x,A){return t.getContext(x,A)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",xe,!1),P===null){let A="webgl2";if(P=Te(A,x),P===null)throw Te(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ce,Se,de,Fe,D,b,y,_,F,N,B,te,Z,ue,le,se,ve,pe,Ce,ye,Ue,He,Ye,z;function be(){ce=new ix(P),ce.init(),He=new Fv(P,ce),Se=new J0(P,ce,e,He),de=new Uv(P,ce),Se.reverseDepthBuffer&&p&&de.buffers.depth.setReversed(!0),Fe=new ox(P),D=new yv,b=new Dv(P,ce,de,D,Se,He,Fe),y=new $0(S),_=new nx(S),F=new fm(P),Ye=new K0(P,F),N=new sx(P,F,Fe,Ye),B=new lx(P,N,F,Fe),Ce=new ax(P,Se,b),se=new Q0(D),te=new vv(S,y,_,ce,Se,Ye,se),Z=new zv(S,D),ue=new bv,le=new Av(ce),pe=new Y0(S,y,_,de,B,m,l),ve=new Pv(S,B,Se),z=new Hv(P,Fe,Se,de),ye=new Z0(P,ce,Fe),Ue=new rx(P,ce,Fe),Fe.programs=te.programs,S.capabilities=Se,S.extensions=ce,S.properties=D,S.renderLists=ue,S.shadowMap=ve,S.state=de,S.info=Fe}be();let q=new pc(S,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let x=ce.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ce.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(j,$,!1))},this.getSize=function(x){return x.set(j,$)},this.setSize=function(x,A,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=x,$=A,t.width=Math.floor(x*Y),t.height=Math.floor(A*Y),k===!0&&(t.style.width=x+"px",t.style.height=A+"px"),this.setViewport(0,0,x,A)},this.getDrawingBufferSize=function(x){return x.set(j*Y,$*Y).floor()},this.setDrawingBufferSize=function(x,A,k){j=x,$=A,Y=k,t.width=Math.floor(x*k),t.height=Math.floor(A*k),this.setViewport(0,0,x,A)},this.getCurrentViewport=function(x){return x.copy(I)},this.getViewport=function(x){return x.copy(Ae)},this.setViewport=function(x,A,k,V){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,A,k,V),de.viewport(I.copy(Ae).multiplyScalar(Y).round())},this.getScissor=function(x){return x.copy(ke)},this.setScissor=function(x,A,k,V){x.isVector4?ke.set(x.x,x.y,x.z,x.w):ke.set(x,A,k,V),de.scissor(W.copy(ke).multiplyScalar(Y).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(x){de.setScissorTest(qe=x)},this.setOpaqueSort=function(x){fe=x},this.setTransparentSort=function(x){ge=x},this.getClearColor=function(x){return x.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(x=!0,A=!0,k=!0){let V=0;if(x){let O=!1;if(U!==null){let Q=U.texture.format;O=Q===Gc||Q===Vc||Q===Hc}if(O){let Q=U.texture.type,re=Q===hn||Q===ji||Q===Tr||Q===Ns||Q===kc||Q===zc,we=pe.getClearColor(),Le=pe.getClearAlpha(),Ve=we.r,Xe=we.g,Ne=we.b;re?(g[0]=Ve,g[1]=Xe,g[2]=Ne,g[3]=Le,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Ve,v[1]=Xe,v[2]=Ne,v[3]=Le,P.clearBufferiv(P.COLOR,0,v))}else V|=P.COLOR_BUFFER_BIT}A&&(V|=P.DEPTH_BUFFER_BIT),k&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ue.dispose(),le.dispose(),D.dispose(),y.dispose(),_.dispose(),B.dispose(),Ye.dispose(),z.dispose(),te.dispose(),q.dispose(),q.removeEventListener("sessionstart",eo),q.removeEventListener("sessionend",to),Zn.stop()};function ne(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let x=Fe.autoReset,A=ve.enabled,k=ve.autoUpdate,V=ve.needsUpdate,O=ve.type;be(),Fe.autoReset=x,ve.enabled=A,ve.autoUpdate=k,ve.needsUpdate=V,ve.type=O}function xe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function We(x){let A=x.target;A.removeEventListener("dispose",We),lt(A)}function lt(x){Tt(x),D.remove(x)}function Tt(x){let A=D.get(x).programs;A!==void 0&&(A.forEach(function(k){te.releaseProgram(k)}),x.isShaderMaterial&&te.releaseShaderCache(x))}this.renderBufferDirect=function(x,A,k,V,O,Q){A===null&&(A=je);let re=O.isMesh&&O.matrixWorld.determinant()<0,we=ro(x,A,k,V,O);de.setMaterial(V,re);let Le=k.index,Ve=1;if(V.wireframe===!0){if(Le=N.getWireframeAttribute(k),Le===void 0)return;Ve=2}let Xe=k.drawRange,Ne=k.attributes.position,$e=Xe.start*Ve,ct=(Xe.start+Xe.count)*Ve;Q!==null&&($e=Math.max($e,Q.start*Ve),ct=Math.min(ct,(Q.start+Q.count)*Ve)),Le!==null?($e=Math.max($e,0),ct=Math.min(ct,Le.count)):Ne!=null&&($e=Math.max($e,0),ct=Math.min(ct,Ne.count));let Oe=ct-$e;if(Oe<0||Oe===1/0)return;Ye.setup(O,V,we,k,Le);let _t,Qe=ye;if(Le!==null&&(_t=F.get(Le),Qe=Ue,Qe.setIndex(_t)),O.isMesh)V.wireframe===!0?(de.setLineWidth(V.wireframeLinewidth*ae()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(O.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),de.setLineWidth(Ie*ae()),O.isLineSegments?Qe.setMode(P.LINES):O.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else O.isPoints?Qe.setMode(P.POINTS):O.isSprite&&Qe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ie=O._multiDrawStarts,qt=O._multiDrawCounts,et=O._multiDrawCount,$t=Le?F.get(Le).bytesPerElement:1,sn=D.get(V).currentProgram.getUniforms();for(let rn=0;rn<et;rn++)sn.setValue(P,"_gl_DrawID",rn),Qe.render(Ie[rn]/$t,qt[rn])}else if(O.isInstancedMesh)Qe.renderInstances($e,Oe,O.count);else if(k.isInstancedBufferGeometry){let Ie=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,qt=Math.min(k.instanceCount,Ie);Qe.renderInstances($e,Oe,qt)}else Qe.render($e,Oe)};function rt(x,A,k){x.transparent===!0&&x.side===ln&&x.forceSinglePass===!1?(x.side=zt,x.needsUpdate=!0,hs(x,A,k),x.side=Ti,x.needsUpdate=!0,hs(x,A,k),x.side=ln):hs(x,A,k)}this.compile=function(x,A,k=null){k===null&&(k=x),h=le.get(k),h.init(A),E.push(h),k.traverseVisible(function(O){O.isLight&&O.layers.test(A.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),x!==k&&x.traverseVisible(function(O){O.isLight&&O.layers.test(A.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();let V=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let Q=O.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){let we=Q[re];rt(we,k,O),V.add(we)}else rt(Q,k,O),V.add(Q)}),E.pop(),h=null,V},this.compileAsync=function(x,A,k=null){let V=this.compile(x,A,k);return new Promise(O=>{function Q(){if(V.forEach(function(re){D.get(re).currentProgram.isReady()&&V.delete(re)}),V.size===0){O(x);return}setTimeout(Q,10)}ce.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let nn=null;function Qt(x){nn&&nn(x)}function eo(){Zn.stop()}function to(){Zn.start()}let Zn=new rd;Zn.setAnimationLoop(Qt),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(x){nn=x,q.setAnimationLoop(x),x===null?Zn.stop():Zn.start()},q.addEventListener("sessionstart",eo),q.addEventListener("sessionend",to),this.render=function(x,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(A),A=q.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,A,U),h=le.get(x,E.length),h.init(A),E.push(h),Pe.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),J.setFromProjectionMatrix(Pe),Me=this.localClippingEnabled,oe=se.init(this.clippingPlanes,Me),f=ue.get(x,w.length),f.init(),w.push(f),q.enabled===!0&&q.isPresenting===!0){let Q=S.xr.getDepthSensingMesh();Q!==null&&us(Q,A,-1/0,S.sortObjects)}us(x,A,0,S.sortObjects),f.finish(),S.sortObjects===!0&&f.sort(fe,ge),ee=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ee&&pe.addToRenderList(f,x),this.info.render.frame++,oe===!0&&se.beginShadows();let k=h.state.shadowsArray;ve.render(k,x,A),oe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=f.opaque,O=f.transmissive;if(h.setupLights(),A.isArrayCamera){let Q=A.cameras;if(O.length>0)for(let re=0,we=Q.length;re<we;re++){let Le=Q[re];no(V,O,x,Le)}ee&&pe.render(x);for(let re=0,we=Q.length;re<we;re++){let Le=Q[re];cr(f,x,Le,Le.viewport)}}else O.length>0&&no(V,O,x,A),ee&&pe.render(x),cr(f,x,A);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,A),Ye.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(h=E[E.length-1],oe===!0&&se.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function us(x,A,k,V){if(x.visible===!1)return;if(x.layers.test(A.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(A);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||J.intersectsSprite(x)){V&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Pe);let re=B.update(x),we=x.material;we.visible&&f.push(x,re,we,k,Be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||J.intersectsObject(x))){let re=B.update(x),we=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Be.copy(re.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(Pe)),Array.isArray(we)){let Le=re.groups;for(let Ve=0,Xe=Le.length;Ve<Xe;Ve++){let Ne=Le[Ve],$e=we[Ne.materialIndex];$e&&$e.visible&&f.push(x,re,$e,k,Be.z,Ne)}}else we.visible&&f.push(x,re,we,k,Be.z,null)}}let Q=x.children;for(let re=0,we=Q.length;re<we;re++)us(Q[re],A,k,V)}function cr(x,A,k,V){let O=x.opaque,Q=x.transmissive,re=x.transparent;h.setupLightsView(k),oe===!0&&se.setGlobalState(S.clippingPlanes,k),V&&de.viewport(I.copy(V)),O.length>0&&fi(O,A,k),Q.length>0&&fi(Q,A,k),re.length>0&&fi(re,A,k),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function no(x,A,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new at(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Gt:hn,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let Q=h.state.transmissionRenderTarget[V.id],re=V.viewport||I;Q.setSize(re.z,re.w);let we=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(X),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),ee&&pe.render(k);let Le=S.toneMapping;S.toneMapping=Ei;let Ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),oe===!0&&se.setGlobalState(S.clippingPlanes,V),fi(x,k,V),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ne=0,$e=A.length;Ne<$e;Ne++){let ct=A[Ne],Oe=ct.object,_t=ct.geometry,Qe=ct.material,Ie=ct.group;if(Qe.side===ln&&Oe.layers.test(V.layers)){let qt=Qe.side;Qe.side=zt,Qe.needsUpdate=!0,io(Oe,k,V,_t,Qe,Ie),Qe.side=qt,Qe.needsUpdate=!0,Xe=!0}}Xe===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}S.setRenderTarget(we),S.setClearColor(X,K),Ve!==void 0&&(V.viewport=Ve),S.toneMapping=Le}function fi(x,A,k){let V=A.isScene===!0?A.overrideMaterial:null;for(let O=0,Q=x.length;O<Q;O++){let re=x[O],we=re.object,Le=re.geometry,Ve=V===null?re.material:V,Xe=re.group;we.layers.test(k.layers)&&io(we,A,k,Le,Ve,Xe)}}function io(x,A,k,V,O,Q){x.onBeforeRender(S,A,k,V,O,Q),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(S,A,k,V,x,Q),O.transparent===!0&&O.side===ln&&O.forceSinglePass===!1?(O.side=zt,O.needsUpdate=!0,S.renderBufferDirect(k,A,V,O,x,Q),O.side=Ti,O.needsUpdate=!0,S.renderBufferDirect(k,A,V,O,x,Q),O.side=ln):S.renderBufferDirect(k,A,V,O,x,Q),x.onAfterRender(S,A,k,V,O,Q)}function hs(x,A,k){A.isScene!==!0&&(A=je);let V=D.get(x),O=h.state.lights,Q=h.state.shadowsArray,re=O.state.version,we=te.getParameters(x,O.state,Q,A,k),Le=te.getProgramCacheKey(we),Ve=V.programs;V.environment=x.isMeshStandardMaterial?A.environment:null,V.fog=A.fog,V.envMap=(x.isMeshStandardMaterial?_:y).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?A.environmentRotation:x.envMapRotation,Ve===void 0&&(x.addEventListener("dispose",We),Ve=new Map,V.programs=Ve);let Xe=Ve.get(Le);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===re)return so(x,we),Xe}else we.uniforms=te.getUniforms(x),x.onBeforeCompile(we,S),Xe=te.acquireProgram(we,Le),Ve.set(Le,Xe),V.uniforms=we.uniforms;let Ne=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ne.clippingPlanes=se.uniform),so(x,we),V.needsLights=La(x),V.lightsStateVersion=re,V.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Xe,V.uniformsList=null,Xe}function pi(x){if(x.uniformsList===null){let A=x.currentProgram.getUniforms();x.uniformsList=Us.seqWithValue(A.seq,x.uniforms)}return x.uniformsList}function so(x,A){let k=D.get(x);k.outputColorSpace=A.outputColorSpace,k.batching=A.batching,k.batchingColor=A.batchingColor,k.instancing=A.instancing,k.instancingColor=A.instancingColor,k.instancingMorph=A.instancingMorph,k.skinning=A.skinning,k.morphTargets=A.morphTargets,k.morphNormals=A.morphNormals,k.morphColors=A.morphColors,k.morphTargetsCount=A.morphTargetsCount,k.numClippingPlanes=A.numClippingPlanes,k.numIntersection=A.numClipIntersection,k.vertexAlphas=A.vertexAlphas,k.vertexTangents=A.vertexTangents,k.toneMapping=A.toneMapping}function ro(x,A,k,V,O){A.isScene!==!0&&(A=je),b.resetTextureUnits();let Q=A.fog,re=V.isMeshStandardMaterial?A.environment:null,we=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Xs,Le=(V.isMeshStandardMaterial?_:y).get(V.envMap||re),Ve=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Xe=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color,Oe=Ei;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Oe=S.toneMapping);let _t=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=_t!==void 0?_t.length:0,Ie=D.get(V),qt=h.state.lights;if(oe===!0&&(Me===!0||x!==M)){let dn=x===M&&V.id===T;se.setState(V,x,dn)}let et=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==qt.state.version||Ie.outputColorSpace!==we||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==Le||V.fog===!0&&Ie.fog!==Q||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==se.numPlanes||Ie.numIntersection!==se.numIntersection)||Ie.vertexAlphas!==Ve||Ie.vertexTangents!==Xe||Ie.morphTargets!==Ne||Ie.morphNormals!==$e||Ie.morphColors!==ct||Ie.toneMapping!==Oe||Ie.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ie.__version=V.version);let $t=Ie.currentProgram;et===!0&&($t=hs(V,A,O));let sn=!1,rn=!1,ur=!1,pt=$t.getUniforms(),Bn=Ie.uniforms;if(de.useProgram($t.program)&&(sn=!0,rn=!0,ur=!0),V.id!==T&&(T=V.id,rn=!0),sn||M!==x){de.buffers.depth.getReversed()?(me.copy(x.projectionMatrix),Yp(me),Kp(me),pt.setValue(P,"projectionMatrix",me)):pt.setValue(P,"projectionMatrix",x.projectionMatrix),pt.setValue(P,"viewMatrix",x.matrixWorldInverse);let mi=pt.map.cameraPosition;mi!==void 0&&mi.setValue(P,ze.setFromMatrixPosition(x.matrixWorld)),Se.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,rn=!0,ur=!0)}if(O.isSkinnedMesh){pt.setOptional(P,O,"bindMatrix"),pt.setOptional(P,O,"bindMatrixInverse");let dn=O.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),pt.setValue(P,"boneTexture",dn.boneTexture,b))}O.isBatchedMesh&&(pt.setOptional(P,O,"batchingTexture"),pt.setValue(P,"batchingTexture",O._matricesTexture,b),pt.setOptional(P,O,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",O._indirectTexture,b),pt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",O._colorsTexture,b));let hr=k.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&Ce.update(O,k,$t),(rn||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,pt.setValue(P,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Bn.envMap.value=Le,Bn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&A.environment!==null&&(Bn.envMapIntensity.value=A.environmentIntensity),rn&&(pt.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&Ua(Bn,ur),Q&&V.fog===!0&&Z.refreshFogUniforms(Bn,Q),Z.refreshMaterialUniforms(Bn,V,Y,$,h.state.transmissionRenderTarget[x.id]),Us.upload(P,pi(Ie),Bn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Us.upload(P,pi(Ie),Bn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(P,"center",O.center),pt.setValue(P,"modelViewMatrix",O.modelViewMatrix),pt.setValue(P,"normalMatrix",O.normalMatrix),pt.setValue(P,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let dn=V.uniformsGroups;for(let mi=0,gi=dn.length;mi<gi;mi++){let Iu=dn[mi];z.update(Iu,$t),z.bind(Iu,$t)}}return $t}function Ua(x,A){x.ambientLightColor.needsUpdate=A,x.lightProbe.needsUpdate=A,x.directionalLights.needsUpdate=A,x.directionalLightShadows.needsUpdate=A,x.pointLights.needsUpdate=A,x.pointLightShadows.needsUpdate=A,x.spotLights.needsUpdate=A,x.spotLightShadows.needsUpdate=A,x.rectAreaLights.needsUpdate=A,x.hemisphereLights.needsUpdate=A}function La(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,A,k){D.get(x.texture).__webglTexture=A,D.get(x.depthTexture).__webglTexture=k;let V=D.get(x);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,A){let k=D.get(x);k.__webglFramebuffer=A,k.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(x,A=0,k=0){U=x,C=A,R=k;let V=!0,O=null,Q=!1,re=!1;if(x){let Le=D.get(x);if(Le.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(Le.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(Le.__hasExternalTextures)b.rebindTextures(x,D.get(x.texture).__webglTexture,D.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ne=x.depthTexture;if(Le.__boundDepthTexture!==Ne){if(Ne!==null&&D.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}let Ve=x.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(re=!0);let Xe=D.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Xe[A])?O=Xe[A][k]:O=Xe[A],Q=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?O=D.get(x).__webglMultisampledFramebuffer:Array.isArray(Xe)?O=Xe[k]:O=Xe,I.copy(x.viewport),W.copy(x.scissor),G=x.scissorTest}else I.copy(Ae).multiplyScalar(Y).floor(),W.copy(ke).multiplyScalar(Y).floor(),G=qe;if(de.bindFramebuffer(P.FRAMEBUFFER,O)&&V&&de.drawBuffers(x,O),de.viewport(I),de.scissor(W),de.setScissorTest(G),Q){let Le=D.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+A,Le.__webglTexture,k)}else if(re){let Le=D.get(x.texture),Ve=A||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Le.__webglTexture,k||0,Ve)}T=-1},this.readRenderTargetPixels=function(x,A,k,V,O,Q,re){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=D.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&re!==void 0&&(we=we[re]),we){de.bindFramebuffer(P.FRAMEBUFFER,we);try{let Le=x.texture,Ve=Le.format,Xe=Le.type;if(!Se.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=x.width-V&&k>=0&&k<=x.height-O&&P.readPixels(A,k,V,O,He.convert(Ve),He.convert(Xe),Q)}finally{let Le=U!==null?D.get(U).__webglFramebuffer:null;de.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(x,A,k,V,O,Q,re){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=D.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&re!==void 0&&(we=we[re]),we){let Le=x.texture,Ve=Le.format,Xe=Le.type;if(!Se.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(A>=0&&A<=x.width-V&&k>=0&&k<=x.height-O){de.bindFramebuffer(P.FRAMEBUFFER,we);let Ne=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ne),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),P.readPixels(A,k,V,O,He.convert(Ve),He.convert(Xe),0);let $e=U!==null?D.get(U).__webglFramebuffer:null;de.bindFramebuffer(P.FRAMEBUFFER,$e);let ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jp(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ne),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(Ne),P.deleteSync(ct),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,A=null,k=0){x.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),A=arguments[0]||null,x=arguments[1]);let V=Math.pow(2,-k),O=Math.floor(x.image.width*V),Q=Math.floor(x.image.height*V),re=A!==null?A.x:0,we=A!==null?A.y:0;b.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,re,we,O,Q),de.unbindTexture()},this.copyTextureToTexture=function(x,A,k=null,V=null,O=0){x.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,x=arguments[1],A=arguments[2],O=arguments[3]||0,k=null);let Q,re,we,Le,Ve,Xe,Ne,$e,ct,Oe=x.isCompressedTexture?x.mipmaps[O]:x.image;k!==null?(Q=k.max.x-k.min.x,re=k.max.y-k.min.y,we=k.isBox3?k.max.z-k.min.z:1,Le=k.min.x,Ve=k.min.y,Xe=k.isBox3?k.min.z:0):(Q=Oe.width,re=Oe.height,we=Oe.depth||1,Le=0,Ve=0,Xe=0),V!==null?(Ne=V.x,$e=V.y,ct=V.z):(Ne=0,$e=0,ct=0);let _t=He.convert(A.format),Qe=He.convert(A.type),Ie;A.isData3DTexture?(b.setTexture3D(A,0),Ie=P.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(b.setTexture2DArray(A,0),Ie=P.TEXTURE_2D_ARRAY):(b.setTexture2D(A,0),Ie=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,A.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,A.unpackAlignment);let qt=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$t=P.getParameter(P.UNPACK_SKIP_PIXELS),sn=P.getParameter(P.UNPACK_SKIP_ROWS),rn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Oe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Oe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ve),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe);let ur=x.isDataArrayTexture||x.isData3DTexture,pt=A.isDataArrayTexture||A.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let Bn=D.get(x),hr=D.get(A),dn=D.get(Bn.__renderTarget),mi=D.get(hr.__renderTarget);de.bindFramebuffer(P.READ_FRAMEBUFFER,dn.__webglFramebuffer),de.bindFramebuffer(P.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<we;gi++)ur&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,D.get(x).__webglTexture,O,Xe+gi),x.isDepthTexture?(pt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,D.get(A).__webglTexture,O,ct+gi),P.blitFramebuffer(Le,Ve,Q,re,Ne,$e,Q,re,P.DEPTH_BUFFER_BIT,P.NEAREST)):pt?P.copyTexSubImage3D(Ie,O,Ne,$e,ct+gi,Le,Ve,Q,re):P.copyTexSubImage2D(Ie,O,Ne,$e,ct+gi,Le,Ve,Q,re);de.bindFramebuffer(P.READ_FRAMEBUFFER,null),de.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pt?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(Ie,O,Ne,$e,ct,Q,re,we,_t,Qe,Oe.data):A.isCompressedArrayTexture?P.compressedTexSubImage3D(Ie,O,Ne,$e,ct,Q,re,we,_t,Oe.data):P.texSubImage3D(Ie,O,Ne,$e,ct,Q,re,we,_t,Qe,Oe):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Ne,$e,Q,re,_t,Qe,Oe.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Ne,$e,Oe.width,Oe.height,_t,Oe.data):P.texSubImage2D(P.TEXTURE_2D,O,Ne,$e,Q,re,_t,Qe,Oe);P.pixelStorei(P.UNPACK_ROW_LENGTH,qt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),P.pixelStorei(P.UNPACK_SKIP_ROWS,sn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,rn),O===0&&A.generateMipmaps&&P.generateMipmap(Ie),de.unbindTexture()},this.copyTextureToTexture3D=function(x,A,k=null,V=null,O=0){return x.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,x=arguments[2],A=arguments[3],O=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,A,k,V,O)},this.initRenderTarget=function(x){D.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),de.unbindTexture()},this.resetState=function(){C=0,R=0,U=null,de.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var Vt=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Gn=class extends Kt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=ot,u=ot,d,p){super(null,o,a,l,c,u,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],p=i[s+1]-u,m=(o-u)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,s=[],r=[],o=[],a=new L,l=new vt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ct(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ct(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pr=class extends xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*u-m*d+this.aX,c=p*d+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mc=class extends Pr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let p=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+d)+(l-a)/d;p*=u,m*=u,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ro=new L,ll=new qc,cl=new qc,ul=new qc,gc=class extends xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ro.subVectors(s[0],s[1]).add(s[0]),c=Ro);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),ll.initNonuniformCatmullRom(c.x,d.x,p.x,u.x,g,v,f),cl.initNonuniformCatmullRom(c.y,d.y,p.y,u.y,g,v,f),ul.initNonuniformCatmullRom(c.z,d.z,p.z,u.z,g,v,f)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(c.x,d.x,p.x,u.x,this.tension),cl.initCatmullRom(c.y,d.y,p.y,u.y,this.tension),ul.initCatmullRom(c.z,d.z,p.z,u.z,this.tension));return i.set(ll.calc(l),cl.calc(l),ul.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uh(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Vv(n,e){let t=1-n;return t*t*e}function Gv(n,e){return 2*(1-n)*n*e}function Wv(n,e){return n*n*e}function Sr(n,e,t,i){return Vv(n,e)+Gv(n,t)+Wv(n,i)}function Xv(n,e){let t=1-n;return t*t*t*e}function qv(n,e){let t=1-n;return 3*t*t*n*e}function jv(n,e){return 3*(1-n)*n*n*e}function Yv(n,e){return n*n*n*e}function wr(n,e,t,i,s){return Xv(n,e)+qv(n,t)+jv(n,i)+Yv(n,s)}var Zo=class extends xn{constructor(e=new ie,t=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends xn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y),wr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends xn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends xn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends xn{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends xn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y),Sr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Uh(a,l.x,c.x,u.x,d.x),Uh(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},Mc=Object.freeze({__proto__:null,ArcCurve:mc,CatmullRomCurve3:gc,CubicBezierCurve:Zo,CubicBezierCurve3:xc,EllipseCurve:Pr,LineCurve:Jo,LineCurve3:vc,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:yc,SplineCurve:$o}),bc=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Mc[s.type]().fromJSON(s))}return this}},Zi=class extends bc{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Jo(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Qo(this.currentPoint.clone(),new ie(e,t),new ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Zo(this.currentPoint.clone(),new ie(e,t),new ie(i,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $o(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Pr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ea=class n extends tn{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new L,p=new ie,m=new L,g=new L,v=new L,f=0,h=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:f=e[w+1].x-e[w].x,h=e[w+1].y-e[w].y,m.x=h*1,m.y=-f,m.z=h*0,v.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:f=e[w+1].x-e[w].x,h=e[w+1].y-e[w].y,m.x=h*1,m.y=-f,m.z=h*0,g.copy(m),m.x+=v.x,m.y+=v.y,m.z+=v.z,m.normalize(),l.push(m.x,m.y,m.z),v.copy(g)}for(let w=0;w<=t;w++){let E=i+w*u*s,S=Math.sin(E),H=Math.cos(E);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*S,d.y=e[C].y,d.z=e[C].x*H,o.push(d.x,d.y,d.z),p.x=w/t,p.y=C/(e.length-1),a.push(p.x,p.y);let R=l[3*C+0]*S,U=l[3*C+1],T=l[3*C+0]*H;c.push(R,U,T)}}for(let w=0;w<t;w++)for(let E=0;E<e.length-1;E++){let S=E+w*e.length,H=S,C=S+e.length,R=S+e.length+1,U=S+1;r.push(H,C,U),r.push(R,U,C)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var oi=class n extends tn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],m=[],g=0,v=[],f=i/2,h=0;w(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(m,2));function w(){let S=new L,H=new L,C=0,R=(t-e)/i;for(let U=0;U<=r;U++){let T=[],M=U/r,I=M*(t-e)+e;for(let W=0;W<=s;W++){let G=W/s,X=G*l+a,K=Math.sin(X),j=Math.cos(X);H.x=I*K,H.y=-M*i+f,H.z=I*j,d.push(H.x,H.y,H.z),S.set(K,R,j).normalize(),p.push(S.x,S.y,S.z),m.push(G,1-M),T.push(g++)}v.push(T)}for(let U=0;U<s;U++)for(let T=0;T<r;T++){let M=v[T][U],I=v[T+1][U],W=v[T+1][U+1],G=v[T][U+1];(e>0||T!==0)&&(u.push(M,I,G),C+=3),(t>0||T!==r-1)&&(u.push(I,W,G),C+=3)}c.addGroup(h,C,0),h+=C}function E(S){let H=g,C=new ie,R=new L,U=0,T=S===!0?e:t,M=S===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,f*M,0),p.push(0,M,0),m.push(.5,.5),g++;let I=g;for(let W=0;W<=s;W++){let X=W/s*l+a,K=Math.cos(X),j=Math.sin(X);R.x=T*j,R.y=f*M,R.z=T*K,d.push(R.x,R.y,R.z),p.push(0,M,0),C.x=K*.5+.5,C.y=j*.5*M+.5,m.push(C.x,C.y),g++}for(let W=0;W<s;W++){let G=H+W,X=I+W;S===!0?u.push(X,X+1,G):u.push(X+1,X,G),U+=3}c.addGroup(h,U,S===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class n extends oi{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var zs=class extends Zi{constructor(e){super(e),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Zi().fromJSON(s))}return this}},Kv={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ud(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,d,p,m;if(i&&(r=ey(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)d=n[g],p=n[g+1],d<a&&(a=d),p<l&&(l=p),d>c&&(c=d),p>u&&(u=p);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return Ir(r,o,t,a,l,m,0),o}};function ud(n,e,t,i,s){let r,o;if(s===hy(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Lh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Lh(r,n[r],n[r+1],o);return o&&ha(o,o.next)&&(Lr(o),o=o.next),o}function Ji(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ha(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ir(n,e,t,i,s,r,o){if(!n)return;!o&&r&&ry(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Jv(n,i,s,r):Zv(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Lr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Qv(Ji(n),e,t),Ir(n,e,t,i,s,r,2)):o===2&&$v(n,e,t,i,s,r):Ir(Ji(n),e,t,i,s,r,1);break}}}function Zv(n){let e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=m&&Rs(s,a,r,l,o,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jv(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Mt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<d?u<p?u:p:d<p?d:p,v=a>l?a>c?a:c:l>c?l:c,f=u>d?u>p?u:p:d>p?d:p,h=Sc(m,g,e,t,i),w=Sc(v,f,e,t,i),E=n.prevZ,S=n.nextZ;for(;E&&E.z>=h&&S&&S.z<=w;){if(E.x>=m&&E.x<=v&&E.y>=g&&E.y<=f&&E!==s&&E!==o&&Rs(a,u,l,d,c,p,E.x,E.y)&&Mt(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=m&&S.x<=v&&S.y>=g&&S.y<=f&&S!==s&&S!==o&&Rs(a,u,l,d,c,p,S.x,S.y)&&Mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=h;){if(E.x>=m&&E.x<=v&&E.y>=g&&E.y<=f&&E!==s&&E!==o&&Rs(a,u,l,d,c,p,E.x,E.y)&&Mt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=w;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=f&&S!==s&&S!==o&&Rs(a,u,l,d,c,p,S.x,S.y)&&Mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Qv(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!ha(s,r)&&hd(s,i,i.next,r)&&Ur(s,r)&&Ur(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Lr(i),Lr(i.next),i=n=r),i=i.next}while(i!==n);return Ji(i)}function $v(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ly(o,a)){let l=dd(o,a);o=Ji(o,o.next),l=Ji(l,l.next),Ir(o,e,t,i,s,r,0),Ir(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ey(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ud(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ay(c));for(s.sort(ty),r=0;r<s.length;r++)t=ny(s[r],t);return t}function ty(n,e){return n.x-e.x}function ny(n,e){let t=iy(n,e);if(!t)return e;let i=dd(t,n);return Ji(i,i.next),Ji(t,t.next)}function iy(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Rs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Ur(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&sy(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function sy(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function ry(n,e,t,i){let s=n;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,oy(s)}function oy(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Sc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ay(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ly(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!cy(n,e)&&(Ur(n,e)&&Ur(e,n)&&uy(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||ha(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ha(n,e){return n.x===e.x&&n.y===e.y}function hd(n,e,t,i){let s=Po(Mt(n,e,t)),r=Po(Mt(n,e,i)),o=Po(Mt(t,i,n)),a=Po(Mt(t,i,e));return!!(s!==r&&o!==a||s===0&&Co(n,t,e)||r===0&&Co(n,i,e)||o===0&&Co(t,n,i)||a===0&&Co(t,e,i))}function Co(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Po(n){return n>0?1:n<0?-1:0}function cy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ur(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function uy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function dd(n,e){let t=new wc(n.i,n.x,n.y),i=new wc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Lh(n,e,t,i){let s=new wc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Er=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Dh(e),Fh(i,e);let o=e.length;t.forEach(Dh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Fh(i,t[l]);let a=Kv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Dh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Dr=class n extends tn{constructor(e=new zs([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:dy,E,S=!1,H,C,R,U;h&&(E=h.getSpacedPoints(u),S=!0,p=!1,H=h.computeFrenetFrames(u,!1),C=new L,R=new L,U=new L),p||(f=0,m=0,g=0,v=0);let T=a.extractPoints(c),M=T.shape,I=T.holes;if(!Er.isClockWise(M)){M=M.reverse();for(let ee=0,ae=I.length;ee<ae;ee++){let P=I[ee];Er.isClockWise(P)&&(I[ee]=P.reverse())}}let G=Er.triangulateShape(M,I),X=M;for(let ee=0,ae=I.length;ee<ae;ee++){let P=I[ee];M=M.concat(P)}function K(ee,ae,P){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ae,P)}let j=M.length,$=G.length;function Y(ee,ae,P){let Te,ce,Se,de=ee.x-ae.x,Fe=ee.y-ae.y,D=P.x-ee.x,b=P.y-ee.y,y=de*de+Fe*Fe,_=de*b-Fe*D;if(Math.abs(_)>Number.EPSILON){let F=Math.sqrt(y),N=Math.sqrt(D*D+b*b),B=ae.x-Fe/F,te=ae.y+de/F,Z=P.x-b/N,ue=P.y+D/N,le=((Z-B)*b-(ue-te)*D)/(de*b-Fe*D);Te=B+de*le-ee.x,ce=te+Fe*le-ee.y;let se=Te*Te+ce*ce;if(se<=2)return new ie(Te,ce);Se=Math.sqrt(se/2)}else{let F=!1;de>Number.EPSILON?D>Number.EPSILON&&(F=!0):de<-Number.EPSILON?D<-Number.EPSILON&&(F=!0):Math.sign(Fe)===Math.sign(b)&&(F=!0),F?(Te=-Fe,ce=de,Se=Math.sqrt(y)):(Te=de,ce=Fe,Se=Math.sqrt(y/2))}return new ie(Te/Se,ce/Se)}let fe=[];for(let ee=0,ae=X.length,P=ae-1,Te=ee+1;ee<ae;ee++,P++,Te++)P===ae&&(P=0),Te===ae&&(Te=0),fe[ee]=Y(X[ee],X[P],X[Te]);let ge=[],Ae,ke=fe.concat();for(let ee=0,ae=I.length;ee<ae;ee++){let P=I[ee];Ae=[];for(let Te=0,ce=P.length,Se=ce-1,de=Te+1;Te<ce;Te++,Se++,de++)Se===ce&&(Se=0),de===ce&&(de=0),Ae[Te]=Y(P[Te],P[Se],P[de]);ge.push(Ae),ke=ke.concat(Ae)}for(let ee=0;ee<f;ee++){let ae=ee/f,P=m*Math.cos(ae*Math.PI/2),Te=g*Math.sin(ae*Math.PI/2)+v;for(let ce=0,Se=X.length;ce<Se;ce++){let de=K(X[ce],fe[ce],Te);me(de.x,de.y,-P)}for(let ce=0,Se=I.length;ce<Se;ce++){let de=I[ce];Ae=ge[ce];for(let Fe=0,D=de.length;Fe<D;Fe++){let b=K(de[Fe],Ae[Fe],Te);me(b.x,b.y,-P)}}}let qe=g+v;for(let ee=0;ee<j;ee++){let ae=p?K(M[ee],ke[ee],qe):M[ee];S?(R.copy(H.normals[0]).multiplyScalar(ae.x),C.copy(H.binormals[0]).multiplyScalar(ae.y),U.copy(E[0]).add(R).add(C),me(U.x,U.y,U.z)):me(ae.x,ae.y,0)}for(let ee=1;ee<=u;ee++)for(let ae=0;ae<j;ae++){let P=p?K(M[ae],ke[ae],qe):M[ae];S?(R.copy(H.normals[ee]).multiplyScalar(P.x),C.copy(H.binormals[ee]).multiplyScalar(P.y),U.copy(E[ee]).add(R).add(C),me(U.x,U.y,U.z)):me(P.x,P.y,d/u*ee)}for(let ee=f-1;ee>=0;ee--){let ae=ee/f,P=m*Math.cos(ae*Math.PI/2),Te=g*Math.sin(ae*Math.PI/2)+v;for(let ce=0,Se=X.length;ce<Se;ce++){let de=K(X[ce],fe[ce],Te);me(de.x,de.y,d+P)}for(let ce=0,Se=I.length;ce<Se;ce++){let de=I[ce];Ae=ge[ce];for(let Fe=0,D=de.length;Fe<D;Fe++){let b=K(de[Fe],Ae[Fe],Te);S?me(b.x,b.y+E[u-1].y,E[u-1].x+P):me(b.x,b.y,d+P)}}}J(),oe();function J(){let ee=s.length/3;if(p){let ae=0,P=j*ae;for(let Te=0;Te<$;Te++){let ce=G[Te];Pe(ce[2]+P,ce[1]+P,ce[0]+P)}ae=u+f*2,P=j*ae;for(let Te=0;Te<$;Te++){let ce=G[Te];Pe(ce[0]+P,ce[1]+P,ce[2]+P)}}else{for(let ae=0;ae<$;ae++){let P=G[ae];Pe(P[2],P[1],P[0])}for(let ae=0;ae<$;ae++){let P=G[ae];Pe(P[0]+j*u,P[1]+j*u,P[2]+j*u)}}i.addGroup(ee,s.length/3-ee,0)}function oe(){let ee=s.length/3,ae=0;Me(X,ae),ae+=X.length;for(let P=0,Te=I.length;P<Te;P++){let ce=I[P];Me(ce,ae),ae+=ce.length}i.addGroup(ee,s.length/3-ee,1)}function Me(ee,ae){let P=ee.length;for(;--P>=0;){let Te=P,ce=P-1;ce<0&&(ce=ee.length-1);for(let Se=0,de=u+f*2;Se<de;Se++){let Fe=j*Se,D=j*(Se+1),b=ae+Te+Fe,y=ae+ce+Fe,_=ae+ce+D,F=ae+Te+D;ze(b,y,_,F)}}}function me(ee,ae,P){l.push(ee),l.push(ae),l.push(P)}function Pe(ee,ae,P){Be(ee),Be(ae),Be(P);let Te=s.length/3,ce=w.generateTopUV(i,s,Te-3,Te-2,Te-1);je(ce[0]),je(ce[1]),je(ce[2])}function ze(ee,ae,P,Te){Be(ee),Be(ae),Be(Te),Be(ae),Be(P),Be(Te);let ce=s.length/3,Se=w.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);je(Se[0]),je(Se[1]),je(Se[3]),je(Se[1]),je(Se[2]),je(Se[3])}function Be(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function je(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return fy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mc[s.type]().fromJSON(s)),new n(i,e.options)}},dy={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ie(r,o),new ie(a,l),new ie(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],p=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[r*3],f=e[r*3+1],h=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ie(o,1-l),new ie(c,1-d),new ie(p,1-g),new ie(v,1-h)]:[new ie(a,1-l),new ie(u,1-d),new ie(m,1-g),new ie(f,1-h)]}};function fy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fr=class n extends tn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new L,p=new L,m=[],g=[],v=[],f=[];for(let h=0;h<=i;h++){let w=[],E=h/i,S=0;h===0&&o===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let H=0;H<=t;H++){let C=H/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),f.push(C+S,1-E),w.push(c++)}u.push(w)}for(let h=0;h<i;h++)for(let w=0;w<t;w++){let E=u[h][w+1],S=u[h][w],H=u[h+1][w],C=u[h+1][w+1];(h!==0||o>0)&&m.push(E,S,C),(h!==i-1||l<Math.PI)&&m.push(S,H,C)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hs=class n extends tn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new L,d=new L,p=new L;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){let v=g/s*r,f=m/i*Math.PI*2;d.x=(e+t*Math.cos(f))*Math.cos(v),d.y=(e+t*Math.cos(f))*Math.sin(v),d.z=t*Math.sin(f),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){let v=(s+1)*m+g-1,f=(s+1)*(m-1)+g-1,h=(s+1)*(m-1)+g,w=(s+1)*m+g;o.push(v,f,w),o.push(f,h,w)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Cn=class extends Ki{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vs=class extends Cn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Io(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function py(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Gs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ec=class extends Gs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nu:r=e,a=2*t-i;break;case Ou:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:o=e,l=2*i-t;break;case Ou:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),v=g*g,f=v*g,h=-p*f+2*p*v-p*g,w=(1+p)*f+(-1.5-2*p)*v+(-.5+p)*g+1,E=(-1-m)*f+(1.5+m)*v+.5*g,S=m*f-m*v;for(let H=0;H!==a;++H)r[H]=h*o[u+H]+w*o[c+H]+E*o[l+H]+S*o[d+H];return r}},Tc=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*u;return r}},_c=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ec(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case Ql:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&py(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,p=d-i,m=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[p+g]||v!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ql;var Qi=class extends Pn{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Bo;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends Pn{};Ac.prototype.ValueTypeName="color";var Rc=class extends Pn{};Rc.prototype.ValueTypeName="number";var Cc=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},na=class extends Pn{InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Pn{constructor(e,t,i){super(e,t,i)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Bo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends Pn{};Pc.prototype.ValueTypeName="vector";var Ic=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},my=new Ic,Uc=class{constructor(e){this.manager=e!==void 0?e:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ia=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var hl=new vt,Nh=new L,Oh=new L,sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Bh=new vt,gr=new L,dl=new L,Lc=class extends sa{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),i.position.copy(gr),dl.copy(i.position),dl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dl),i.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),Bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh)}},ra=class extends ia{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Dc=class extends sa{constructor(){super(new Ht(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nr=class extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Dc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var oa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function kh(){return performance.now()}var jc="\\[\\]\\.:\\/",gy=new RegExp("["+jc+"]","g"),Yc="[^"+jc+"]",xy="[^"+jc.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",Yc),yy=/(WCOD+)?/.source.replace("WCOD",xy),My=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),by=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),Sy=new RegExp("^"+vy+yy+My+by+"$"),wy=["material","materials","bones","map"],Fc=class{constructor(e,t,i){let s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gy,"")}static parseTrackName(e){let t=Sy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);wy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Fc;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L1=new Float32Array(1);var zh=new vt,aa=class{constructor(e,t,i=0,s=1/0){this.ray=new Go(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(e,t=!0,i=[]){return Nc(e,this,i,t),i.sort(Hh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nc(e[s],this,i,t);return i.sort(Hh),i}};function Hh(n,e){return n.distance-e.distance}function Nc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);var da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ey=new Ht(-1,1,1,-1,0,1),Kc=class extends tn{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},Ty=new Kc,Ks=class{constructor(e){this._mesh=new De(Ty,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ey)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Zs=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof it?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qs.clone(e.uniforms),this.material=new it({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ks(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Br=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fa=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var pa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new at(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zs(da),this.copyPass.material.blending=zn,this.clock=new oa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Br!==void 0&&(o instanceof Br?i=!0:o instanceof fa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ma=class extends In{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var fd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ri=class n extends In{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new at(r,o,{type:Gt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new at(r,o,{type:Gt});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new at(r,o,{type:Gt});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=fd;this.highPassUniforms=qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new it({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=da;this.copyUniforms=qs.clone(u.uniforms),this.blendMaterial=new it({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Oo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Vn,this.fsQuad=new Ks(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new it({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new it({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ri.BlurDirectionX=new ie(1,0);Ri.BlurDirectionY=new ie(0,1);var kr=new L;function vn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;kr.copy(e),kr[i]=0,kr.normalize();let c=.5*o/(o+a),u=1-kr.angleTo(n)/l;return Math.sign(kr[t])===1?u*c:a/(o+a)+c+c*(1-u)}var ai=class extends ri{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,m=u.length/6,g=new L,v=.5/s;for(let f=0,h=0;f<u.length;f+=3,h+=2)switch(a.fromArray(u,f),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[f+0]=c.x*Math.sign(a.x)+l.x*r,u[f+1]=c.y*Math.sign(a.y)+l.y*r,u[f+2]=c.z*Math.sign(a.z)+l.z*r,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/m)){case 0:g.set(1,0,0),p[h+0]=vn(g,l,"z","y",r,i),p[h+1]=1-vn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),p[h+0]=1-vn(g,l,"z","y",r,i),p[h+1]=1-vn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),p[h+0]=1-vn(g,l,"x","z",r,e),p[h+1]=vn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),p[h+0]=1-vn(g,l,"x","z",r,e),p[h+1]=1-vn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),p[h+0]=1-vn(g,l,"x","y",r,e),p[h+1]=1-vn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),p[h+0]=vn(g,l,"x","y",r,e),p[h+1]=1-vn(g,l,"y","x",r,t);break}}};var ga=class extends Vt{constructor(){super();let e=new ri;e.deleteAttribute("uv");let t=new Cn({side:zt}),i=new Cn,s=new ra(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new De(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new De(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new De(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new De(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new De(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new De(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let d=new De(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let p=new De(e,Js(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let m=new De(e,Js(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let g=new De(e,Js(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new De(e,Js(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let f=new De(e,Js(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let h=new De(e,Js(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Js(n){let e=new Vn;return e.color.setScalar(n),e}var _y=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Ay=`
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
`;function pd({width:n=1920,height:e=1080}={}){let t={uBg:{value:new Re},uGlow:{value:new Re},uStage:{value:new ie(n,e)},uCenter:{value:new ie(n/2,e/2)},uRadius:{value:500},uAmount:{value:0}},i=new it({vertexShader:_y,fragmentShader:Ay,uniforms:t,depthTest:!1,depthWrite:!1}),s=new De(new Pt(2,2),i);return s.frustumCulled=!1,s.renderOrder=-10,s.visible=!1,{mesh:s,setTheme(r){t.uBg.value.set(r.bg),t.uGlow.value.set(r.bg).lerp(new Re(r.dark?r.ink3:"#ffffff"),r.dark?.035:1)},update({x:r,y:o,radius:a,amount:l}){t.uCenter.value.set(r,o),t.uRadius.value=a,t.uAmount.value=l,s.visible=l>.001}}}function Zc(n={}){let e=new Vs({roughness:.42,metalness:.25,clearcoat:.6,transparent:!0,...n}),t={value:0},i={value:new Re(1,1,1)};return e.userData.rim=t,e.userData.rimColor=i,e.onBeforeCompile=s=>{s.uniforms.uRim=t,s.uniforms.uRimColor=i,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRim;
uniform vec3 uRimColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float rimEdge = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0) * uRim;
        totalEmissiveRadiance += uRimColor * rimEdge;
        diffuseColor.a = clamp(diffuseColor.a + 0.6 * rimEdge, 0.0, 1.0);`)},e}var md=new URLSearchParams(location.search).get("clock")==="manual",Jc=0,Wt={manual:md,now:()=>md?Jc:performance.now()/1e3,set(n){Jc=n},step(n){Jc+=n}};var he=224,Ry=2,yn=he*Ry,$s=8,er=6,Qc=64,yt={ball:1,cylinder:2,box:3,torus:4,cone:5,thread:6,corner:7,disc:8,hex:9},Cy=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,$c=`
  uniform vec3 uPose;
  uniform vec4 uPa[${$s}];
  uniform vec4 uPb[${$s}];
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

  float objectGap(vec2 p) {
    vec2 q = p - uPose.xy;
    float c = cos(uPose.z), s = sin(uPose.z);
    q = vec2(q.x * c + q.y * s, -q.x * s + q.y * c);
    float h = BIG;
    for (int i = 0; i < ${$s}; i++) {
      if (i >= uCount) break;
      h = min(h, prim(uPa[i], uPb[i], q));
    }
    return h;
  }
`,eu=()=>({uPose:{value:new L},uPa:{value:Array.from({length:$s},()=>new nt)},uPb:{value:Array.from({length:$s},()=>new nt)},uCount:{value:0}});function tu(n,e,t){n.uPose.value.set(t.x,t.y,t.rot);let i=Math.min(e.length,$s);for(let s=0;s<i;s+=1){let r=e[s];n.uPa.value[s].set(r.kind,r.x??0,r.y??0,r.angle??0),n.uPb.value[s].set(r.a??0,r.b??0,r.c??0,r.off??0)}n.uCount.value=i}var Py=`
  precision highp float;
  varying vec2 vUv;
  uniform float uFov;
  uniform float uDepth;
  ${$c}
  void main() {
    vec2 p = vec2(vUv.x - 0.5, 0.5 - vUv.y) * uFov;
    float h = objectGap(p);
    gl_FragColor = vec4(max(uDepth - h, 0.0), h, 0.0, 1.0);
  }
`,Iy=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTex;
  uniform vec2 uStep;
  uniform float uSigma;
  void main() {
    float sum = 0.0, wsum = 0.0;
    float radius = min(ceil(uSigma * 3.0), ${Qc}.0);
    for (int i = -${Qc}; i <= ${Qc}; i++) {
      float x = float(i);
      if (abs(x) > radius) continue;
      float w = exp(-0.5 * x * x / (uSigma * uSigma));
      sum += w * texture2D(uTex, vUv + uStep * x).r;
      wsum += w;
    }
    gl_FragColor = vec4(sum / wsum, 0.0, 0.0, 1.0);
  }
`,Uy=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uContact;
  uniform sampler2D uBlurred;
  void main() {
    gl_FragColor = vec4(max(texture2D(uContact, vUv).r, texture2D(uBlurred, vUv).r), 0.0, 0.0, 1.0);
  }
`,xd=`
  vec3 membraneNormal(sampler2D tex, vec2 uv, vec2 texel, float px) {
    float gx = (texture2D(tex, uv + vec2(texel.x, 0.0)).r - texture2D(tex, uv - vec2(texel.x, 0.0)).r) / (2.0 * px);
    float gy = (texture2D(tex, uv - vec2(0.0, texel.y)).r - texture2D(tex, uv + vec2(0.0, texel.y)).r) / (2.0 * px);
    return normalize(vec3(-gx, -gy, 1.0));
  }
`,Ly=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uU;
  uniform vec2 uTexel;
  uniform float uPx;
  uniform vec3 uLdir[${er}];
  uniform vec3 uLcol[${er}];
  uniform int uLights;
  uniform float uKd, uKs, uShin, uAmb, uFall, uVig, uGain;
  uniform int uMap;
  uniform sampler2D uIllum;
  uniform vec3 uAlpha;
  uniform float uGamma;
  ${xd}
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
    for (int i = 0; i < ${er}; i++) {
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
`,Dy=`
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
    vec2 px = floor(vUv * ${he}.0);
    // Sum of three uniforms: close to Gaussian, deterministic for a seed.
    vec3 noise = vec3(
      hash(px + 0.0) + hash(px + 17.0) + hash(px + 31.0),
      hash(px + 47.0) + hash(px + 59.0) + hash(px + 73.0),
      hash(px + 89.0) + hash(px + 101.0) + hash(px + 113.0)) - 1.5;
    gl_FragColor = vec4(clamp(img + noise * 2.0 * uNoise / 255.0, 0.0, 1.0), 1.0);
  }
`,Fy=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uU;
  uniform sampler2D uContact;
  uniform vec2 uTexel;
  uniform float uPx;
  ${xd}
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
`;function Qs(n,e){return new it({vertexShader:Cy,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1})}function nu(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new L(Math.cos(i)*Math.cos(t),Math.cos(i)*Math.sin(t),Math.sin(i))}function gd(n,e,t,i,s){let r=e*i;for(let o=0;o<t;o+=1)s.set(n.subarray((t-1-o)*r,(t-o)*r),o*r);return s}function vd(n){let e=R=>new at(R,R,{type:St,format:xt,minFilter:ot,magFilter:ot,depthBuffer:!1,wrapS:cn,wrapT:cn}),t=e(yn),i=[e(yn),e(yn),e(yn)],s=e(yn),r=new at(yn,yn,{type:Gt,minFilter:ot,magFilter:ot,depthBuffer:!1}),o=new at(he,he,{type:hn,minFilter:bt,magFilter:ot,depthBuffer:!1}),a=e(he);a.texture.magFilter=ot;let l=new ie(1/yn,1/yn),c=Qs(Py,{uFov:{value:14},uDepth:{value:0},...eu()}),u=Qs(Iy,{uTex:{value:null},uStep:{value:new ie},uSigma:{value:1}}),d=Qs(Uy,{uContact:{value:t.texture},uBlurred:{value:null}}),p=Qs(Ly,{uU:{value:s.texture},uTexel:{value:l},uPx:{value:1},uLdir:{value:Array.from({length:er},()=>new L(0,0,1))},uLcol:{value:Array.from({length:er},()=>new L)},uLights:{value:0},uKd:{value:1},uKs:{value:0},uShin:{value:20},uAmb:{value:.1},uFall:{value:0},uVig:{value:0},uGain:{value:1},uMap:{value:0},uIllum:{value:null},uAlpha:{value:new L},uGamma:{value:1}}),m=Qs(Dy,{uShaded:{value:r.texture},uTexel:{value:l},uSigma:{value:1.3},uNoise:{value:1},uSeed:{value:1}}),g=Qs(Fy,{uU:{value:s.texture},uContact:{value:t.texture},uTexel:{value:l},uPx:{value:1}}),v=new De(new Pt(2,2),c);v.frustumCulled=!1;let f=new Vt;f.add(v);let h=new Ht(-1,1,1,-1,0,1);function w(R,U){v.material=R,n.setRenderTarget(U),n.render(f,h)}function E(R,U,T=i[1]){return u.uniforms.uSigma.value=Math.max(U,.3),u.uniforms.uTex.value=R.texture,u.uniforms.uStep.value.set(1/yn,0),w(u,i[0]),u.uniforms.uTex.value=i[0].texture,u.uniforms.uStep.value.set(0,1/yn),w(u,T),T}function S({sensor:R,prims:U,pose:T={x:0,y:0,rot:0},depth:M=0,seed:I=1}){let W=n.getRenderTarget(),G=n.autoClear;n.autoClear=!1;let X=R.fov/yn,K=c.uniforms;K.uFov.value=R.fov,K.uDepth.value=M,tu(K,U,T),w(c,t);let j=t;for(let fe of[1,.5,.25,.12]){let ge=E(j,R.softness*fe/X);d.uniforms.uBlurred.value=ge.texture,w(d,i[2]),j=i[2]}E(j,.03/X,s);let $=p.uniforms;$.uPx.value=X;let Y=R.lights.slice(0,er);Y.forEach((fe,ge)=>{$.uLdir.value[ge].copy(nu(fe.az,fe.el)),fe.color&&$.uLcol.value[ge].set(fe.color[0],fe.color[1],fe.color[2])}),$.uLights.value=Y.length,$.uKs.value=R.ks,$.uShin.value=R.shin,R.mode==="map"?($.uMap.value=1,$.uIllum.value=R.illumTexture,$.uAlpha.value.set(R.alpha[0],R.alpha[1],R.alpha[2]),$.uGamma.value=R.gamma):($.uMap.value=0,$.uKd.value=R.kd,$.uAmb.value=R.amb,$.uFall.value=R.fall,$.uVig.value=R.vig,$.uGain.value=R.gain),w(p,r),m.uniforms.uSeed.value=I,m.uniforms.uNoise.value=R.noise??1,w(m,o),g.uniforms.uPx.value=X,w(g,a),n.setRenderTarget(W),n.autoClear=G}async function H(){let R=await n.readRenderTargetPixelsAsync(o,0,0,he,he,new Uint8Array(he*he*4));return gd(R,he,he,4,new Uint8Array(he*he*4))}async function C(){let R=await n.readRenderTargetPixelsAsync(a,0,0,he,he,new Float32Array(he*he*4));return gd(R,he,he,4,new Float32Array(he*he*4))}return{N:he,render:S,readImage:H,readTruth:C,textures:{image:o.texture,truth:a.texture,membrane:s.texture}}}var xa={mini:{label:"GelSight Mini",source:"fitted to the 9 real ball images of real sensor 0, SITR dataset (Gupta, Mo, Jin, Yuan); fit 8.4 grey levels rms, 21.4 before",mode:"map",fov:14.11,softness:.77,gamma:.792,ks:.013,shin:36.1,lights:[{az:-96.1,el:12.8},{az:6,el:9.9},{az:81.3,el:10.5}],alpha:[.328,.59,.636],illum:"data:image/png;base64,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"},digit:{label:"DIGIT",source:"fitted to the 9 real ball images of real sensor 1, SITR dataset (Gupta, Mo, Jin, Yuan); fit 15.7 grey levels rms, 28.8 before",mode:"map",fov:13.77,softness:.944,gamma:1.078,ks:0,shin:2,lights:[{az:51.4,el:22.8},{az:-62.1,el:20.2},{az:163.8,el:17.8}],alpha:[.619,.811,.705],illum:"data:image/png;base64,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"},hex:{label:"GelSight Hex",source:"fitted to the 9 real ball images of real sensor 2, SITR dataset (Gupta, Mo, Jin, Yuan); fit 7.3 grey levels rms, 22.3 before",mode:"map",fov:12.6,softness:.838,gamma:.785,ks:.001,shin:2.5,lights:[{az:.8,el:39.6},{az:-124.7,el:43.5},{az:117.5,el:29.7}],alpha:[.081,.265,.455],illum:"data:image/png;base64,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"},wedge:{label:"GelSight Wedge",source:"fitted to the 9 real ball images of real sensor 3, SITR dataset (Gupta, Mo, Jin, Yuan); fit 13.0 grey levels rms, 25.0 before",mode:"map",fov:17.91,softness:.494,gamma:.512,ks:.002,shin:2.2,lights:[{az:-106.4,el:5.4},{az:7.7,el:11.9},{az:111.4,el:15.1}],alpha:[0,.381,.324],illum:"data:image/png;base64,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"}};var ts={ambient_intensity:.06,bending_stiffness_n_mm:1e-4,bottom_layer_motion_scale:.5,brightness_gain:1.02,brightness_offset:.005,camera_psf_sigma_px:.45,camera_supersample:2,cavity_depth_mm:8,envelope_contrast:.22,grating_angle_a_deg:18,grating_angle_b_deg:25.06,grating_line_transmittance:.1,grating_open_fraction:.82,grating_pitch_mm:.33,moire_phase_offset_rad:-1.2762720155208536,noise_std:.004,outside_intensity:0,pattern:"parallel",physics_size:192,pressure_kpa:4,radial_distortion_k1:.12,sealed_air_coupling:!0,sensor_id:"moireskin-parallel-v1",sensor_radius_mm:15,slope_to_shift_mm:.12,tension_n_per_mm:.08,tension_stiffening_per_kpa:.04,top_layer_motion_scale:1};var Md={tri:{label:"Three lights, 120\xB0 apart",fov:14.3,lights:[{az:90,el:25,color:[1,.08,.08]},{az:210,el:25,color:[.08,1,.08]},{az:330,el:25,color:[.08,.08,1]}],kd:1,ks:.15,shin:20,amb:.1,fall:.25,gain:.55,vig:.15,softness:.3},side:{label:"Grazing lights on three sides",fov:17,lights:[{az:180,el:12,color:[1,.1,.1]},{az:270,el:14,color:[.1,1,.1]},{az:0,el:12,color:[.1,.1,1]}],kd:1,ks:.3,shin:30,amb:.06,fall:.45,gain:.95,vig:.1,softness:.3},oneside:{label:"All lights on one side",fov:16,lights:[{az:240,el:30,color:[1,.15,.1]},{az:270,el:32,color:[.1,1,.15]},{az:300,el:30,color:[.1,.15,1]}],kd:1,ks:.1,shin:12,amb:.05,fall:.6,gain:.42,vig:.3,softness:.3},mixed:{label:"Four lights, mixed colours",fov:12,lights:[{az:40,el:20,color:[1,.7,.2]},{az:150,el:35,color:[.2,.9,.9]},{az:265,el:18,color:[.8,.2,1]},{az:330,el:40,color:[.9,.9,.9]}],kd:.9,ks:.25,shin:25,amb:.12,fall:.3,gain:.36,vig:.2,softness:.3}};for(let n of Object.values(Md))n.madeUp=!0;var yd={label:"Moir\xE9Skin",moire:!0,fov:2*ts.sensor_radius_mm,objectField:14.1,reach:4,lights:[],softness:0,ks:0,shin:1},Oy={moireskin:{...yd,variety:"fixed",contract:"models/shape1d_w32.json"},moireskinAir:{...yd,variety:"adjustable",contract:"models/shape1d_w32_any.json"}},ft={...xa,...Md,...Oy},Mn=Object.keys(ft),bd=Object.keys(xa),mb=Mn.filter(n=>!ft[n].moire);function Sd(){return Promise.all(Object.values(xa).map(n=>new Promise((e,t)=>{let i=new Image;i.onload=()=>{let s=new Kt(i);s.minFilter=bt,s.magFilter=bt,s.generateMipmaps=!1,s.needsUpdate=!0,n.illumTexture=s,e()},i.onerror=t,i.src=n.illum})))}function wd(n,{el:e=0,fov:t,softness:i,ks:s}={}){return{...n,fov:t??n.fov,softness:i??n.softness,ks:s??n.ks,lights:n.lights.map(r=>({...r,el:Math.min(Math.max(r.el+e,4),80)}))}}var tr={ballRadius:2,depth:1.4,cornerAngle:.5,cornerSize:4},Ed=n=>n.fov/224;var zr={ball:{label:"Ball",depth:.8,prims:[{kind:yt.ball,a:2}]},block:{label:"Block",depth:.6,prims:[{kind:yt.box,angle:.6,a:2.6,b:1.6,c:.15}]},ring:{label:"Ring",depth:.5,prims:[{kind:yt.torus,a:2.6,b:.7}]},screw:{label:"Screw",depth:1.5,prims:[{kind:yt.cylinder,x:-3.3*Math.cos(.5),y:-3.3*Math.sin(.5),angle:.5,a:2.4,b:1.1},{kind:yt.thread,x:.9*Math.cos(.5),y:.9*Math.sin(.5),angle:.5,a:1.5,b:.9,c:3,off:.9}]},cone:{label:"Cone",depth:1,prims:[{kind:yt.cone,a:.8,b:2.2}]},nut:{label:"Hex nut",depth:.6,prims:[{kind:yt.hex,angle:.2,a:3,b:.2,c:1.5}]},studs:{label:"Four studs",depth:.7,prims:[-1,1].flatMap(n=>[-1,1].map(e=>({kind:yt.disc,x:e*2,y:n*2,a:1.2,b:.12})))},corner:{label:"Cube corner",depth:1.4,prims:[{kind:yt.corner,angle:.5,a:4}]}},Wn=Object.keys(zr);function By(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Td(n,e){let t=By(n),i=(c,u)=>c+(u-c)*t(),s=e*.3,r=["ball","cylinder","box","torus","cone","disc","hex"],o=3+Math.floor(t()*4),a=[];for(let c=0;c<o;c+=1){let u=r[Math.floor(t()*r.length)],d={kind:yt[u],x:i(-s,s),y:i(-s,s),angle:i(0,Math.PI),off:i(0,.5)};u==="ball"?Object.assign(d,{a:i(1,4)}):u==="cylinder"?Object.assign(d,{a:i(.6,2),b:i(1.5,4)}):u==="box"?Object.assign(d,{a:i(.8,2.5),b:i(.8,2.5),c:.15}):u==="torus"?Object.assign(d,{a:i(1.2,2.8),b:i(.3,.8)}):u==="cone"?Object.assign(d,{a:i(.4,1.2),b:i(1,2.5)}):u==="disc"?Object.assign(d,{a:i(.6,1.8),b:.12}):Object.assign(d,{a:i(1.2,2.6),b:.18,c:t()<.5?i(.4,.9):0}),a.push(d)}let l=Math.min(...a.map(c=>c.off));return a.forEach(c=>{c.off-=l}),{label:`Random #${n}`,depth:.8,prims:a}}function va(n){let e=n.fov/4,t=[-1,0,1].flatMap(r=>[-1,0,1].map(o=>({x:o*e,y:r*e}))),i=t.map(r=>({prims:[{kind:yt.ball,a:tr.ballRadius}],pose:{...r,rot:0},depth:tr.depth})),s=t.map(r=>({prims:[{kind:yt.corner,angle:tr.cornerAngle,a:tr.cornerSize}],pose:{...r,rot:0},depth:tr.depth}));return[...i,...s]}var ya={url:"models/sitr_b18.onnx?v=da02c127",bytes:388712528},ky=()=>document.documentElement.dataset.model||ya.url;function _d({modelUrl:n=ky(),workerUrl:e="dist/estimator.worker.js",ortBase:t="dist/ort/",prefer:i,optimise:s,onProgress:r,autoload:o=!0}={}){let a=new Worker(new URL(e,location.href),{type:"module"}),l=new Map,c=1,u,d=new Promise((g,v)=>{u={resolve:g,reject:v}}),p={provider:"",ready:!1,error:"",info:null};a.onmessage=({data:g})=>{if(g.type==="progress")r?.(g);else if(g.type==="ready")p.provider=g.provider,p.ready=!0,p.info=g,u.resolve(g);else if(g.type==="error"){let v=l.get(g.id);v?(l.delete(g.id),v.reject(new Error(g.message))):(p.error=g.message,u.reject(new Error(g.message)))}else if(l.has(g.id)){let v=l.get(g.id);l.delete(g.id),v.resolve(g)}},a.onerror=g=>{p.error=g.message||"worker failed to start",u.reject(new Error(p.error))};function m(g,v=[]){let f=c;return c+=1,new Promise((h,w)=>{l.set(f,{resolve:h,reject:w}),a.postMessage({...g,id:f},v)})}return o&&a.postMessage({type:"load",modelUrl:new URL(n,location.href).href,ortBase:new URL(t,location.href).href,prefer:i,optimise:s}),{ready:d,state:p,calibrate:(g,v,f)=>m({type:"calibrate",bg:g,images:v,mm:f}),estimate:(g,{raw:v=!1}={})=>m({type:"estimate",image:g,raw:v}),probe:(g,v,f,h)=>m({type:"probe",modelUrl:new URL(g,location.href).href,ortBase:new URL(t,location.href).href,ep:v,image:f,calibration:h}),dispose:()=>a.terminate()}}var zy={object:.66,background:.2},Hy={sorRelaxation:1.92,sorSweeps:192,sorPerPass:2,sorPressureEvery:8,bendSteps:400,bendPerPass:2,bendCheckEvery:16,bendTolerance:1e-6,bendStepScale:.82},bn=4,ns=8,Vy=101.325,Ad={strength:.16,floor:.78},Gy=`
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Xn=`
  precision highp float;
  precision highp int;
  #define AT(tex, c, r, size) texelFetch(tex, ivec2(c, (size) - 1 - (r)), 0)
`,Wy=`
  ${Xn}
  uniform sampler2D uSums;
  uniform float uReference;   // inflation pressure, kPa
  uniform float uPerVolume;   // 1 / (nodes inside x cavity depth)
  uniform float uSealed;
  uniform float uTolerance;
  void main() {
    float sum = 0.0, update = 0.0;
    for (int j = 0; j < ${ns}; j++) {
      for (int i = 0; i < ${ns}; i++) {
        vec4 s = texelFetch(uSums, ivec2(i, j), 0);
        sum += s.r;
        update = max(update, s.g);
      }
    }
    float fraction = clamp(sum * uPerVolume, 0.0, 0.35);
    float kpa = uReference + uSealed * (${Vy} + uReference) * fraction / (1.0 - fraction);
    gl_FragColor = vec4(kpa, update < uTolerance ? 1.0 : 0.0, 0.0, 1.0);
  }
`,su=`
  uniform sampler2D uCavity;
  uniform float uPressureScale;
`,Xy=n=>`
  ${Xn}
  uniform sampler2D uAxis;
  uniform sampler2D uMask;
  uniform float uDepth;
  uniform vec2 uAlbedo;
  ${$c}
  void main() {
    ivec2 g = ivec2(gl_FragCoord.xy);
    int col = g.x, row = ${n-1} - g.y;
    vec2 p = vec2(texelFetch(uAxis, ivec2(col, 0), 0).r, texelFetch(uAxis, ivec2(row, 0), 0).r);
    float h = objectGap(p);
    vec4 m = texelFetch(uMask, g, 0);
    gl_FragColor = vec4(max(uDepth - h, 0.0) * m.r, h < 0.5 * BIG ? uAlbedo.x : uAlbedo.y, m.g, m.r);
  }
`,qy=`
  ${Xn}
  uniform sampler2D uObject;
  void main() {
    vec4 o = texelFetch(uObject, ivec2(gl_FragCoord.xy), 0);
    float obstacle = o.r * o.b;
    gl_FragColor = vec4(obstacle, obstacle, o.b, 1.0);
  }
`,jy=n=>`
  ${Xn}
  uniform sampler2D uState;
  void main() {
    ivec2 o = ivec2(gl_FragCoord.xy) * ${n/ns};
    float sum = 0.0, update = 0.0;
    for (int j = 0; j < ${n/ns}; j++) {
      for (int i = 0; i < ${n/ns}; i++) {
        vec4 s = texelFetch(uState, o + ivec2(i, j), 0);
        sum += s.r;
        update = max(update, s.a);
      }
    }
    gl_FragColor = vec4(sum, update, 0.0, 1.0);
  }
`,Ci=(n,e,t)=>`${n}${e<0?`m${-e}`:e}_${t<0?`m${-t}`:t}`;function Cd(n,e){for(let t=-n;t<=n;t+=1)for(let i=-n;i<=n;i+=1)Math.abs(i)+Math.abs(t)<=n&&e(i,t)}function Pd(n,e){return[...e].filter(t=>t!=="0,0").map(t=>{let[i,s]=t.split(",").map(Number);return`vec4 ${Ci("s",i,s)} = texelFetch(uState, clamp(g + ivec2(${i}, ${s}), ivec2(0), ivec2(${n-1})), 0);
    float ${Ci("w",i,s)} = ${Ci("s",i,s)}.r;`}).join(`
    `)}function Yy(n,e){let t=2*e,i=new Set,s=(l,c)=>(i.add(`${l},${c}`),Ci("w",l,c)),r=l=>{let c=[];for(let u=1;u<=2*e;u+=1){let d=u-1&1;Cd(t-u,(p,m)=>{if((p+m&1)===(d^l)){let g=Ci("s",p,m);c.push(`${s(p,m)} = ${g}.b * max(${g}.g, uRelax.x * ${s(p,m)} + uRelax.y * (${s(p-1,m)} + ${s(p+1,m)} + ${s(p,m-1)} + ${s(p,m+1)}) - pressure);`)}})}return c.join(`
      `)},o=r(0),a=r(1);return`
  ${Xn}
  uniform sampler2D uState;
  uniform vec2 uRelax;   // 1 - relaxation, relaxation / 4
  ${su}
  void main() {
    ivec2 g = ivec2(gl_FragCoord.xy);
    vec4 s0_0 = texelFetch(uState, g, 0);
    float pressure = texelFetch(uCavity, ivec2(0), 0).r * uPressureScale;
    float w0_0 = s0_0.r;
    ${Pd(n,i)}
    if (((g.x + ${n-1} - g.y) & 1) == 0) {
      ${o}
    } else {
      ${a}
    }
    gl_FragColor = vec4(w0_0, s0_0.g, s0_0.b, 1.0);
  }
`}function Ky(n,e){let t=new Set,i=(r,o,a)=>r===0?(t.add(`${o},${a}`),Ci("w",o,a)):Ci(`w${r}_`,o,a),s=[];for(let r=1;r<=e;r+=1)Cd(2*(e-r),(o,a)=>{let l=(u,d)=>i(r-1,o+u,a+d),c=Ci("s",o,a);t.add(`${o},${a}`),s.push(`float ${i(r,o,a)} = ${c}.b * max(${c}.g, uStencil.x * ${l(0,0)} + uStencil.y * (${l(-1,0)} + ${l(1,0)} + ${l(0,-1)} + ${l(0,1)}) + uStencil.z * (${l(-1,-1)} + ${l(1,-1)} + ${l(-1,1)} + ${l(1,1)}) + uStencil.w * (${l(-2,0)} + ${l(2,0)} + ${l(0,-2)} + ${l(0,2)}) - pressure);`)});return`
  ${Xn}
  uniform sampler2D uState;
  uniform vec4 uStencil;
  ${su}
  void main() {
    ivec2 g = ivec2(gl_FragCoord.xy);
    vec4 s0_0 = texelFetch(uState, g, 0);
    vec4 air = texelFetch(uCavity, ivec2(0), 0);
    if (air.g > 0.5) {
      // The reference has left its loop: the membrane stays as it is.
      gl_FragColor = vec4(s0_0.rgb, 0.0);
      return;
    }
    float pressure = air.r * uPressureScale;
    float w0_0 = s0_0.r;
    ${Pd(n,t)}
    ${s.join(`
    `)}
    gl_FragColor = vec4(${i(e,0,0)}, s0_0.g, s0_0.b, abs(${i(e,0,0)} - ${i(e-1,0,0)}));
  }
`}var Zy=n=>`
  ${Xn}
  uniform sampler2D uState;
  uniform sampler2D uObject;
  uniform vec3 uForce;   // tension / h2, bending / h4, -
  ${su}
  float w(ivec2 g) {
    return texelFetch(uState, clamp(g, ivec2(0), ivec2(${n-1})), 0).r;
  }
  void main() {
    ivec2 g = ivec2(gl_FragCoord.xy);
    vec4 s = texelFetch(uState, g, 0);
    float beside = w(g + ivec2(1, 0)) + w(g - ivec2(1, 0)) + w(g + ivec2(0, 1)) + w(g - ivec2(0, 1));
    float diagonal = w(g + ivec2(1, 1)) + w(g + ivec2(-1, 1)) + w(g + ivec2(1, -1)) + w(g + ivec2(-1, -1));
    float beyond = w(g + ivec2(2, 0)) + w(g - ivec2(2, 0)) + w(g + ivec2(0, 2)) + w(g - ivec2(0, 2));
    float laplacian = beside - 4.0 * s.r;
    float bilaplacian = 20.0 * s.r - 8.0 * beside + 2.0 * diagonal + beyond;
    float pressure = max(-uForce.x * laplacian + uForce.y * bilaplacian + texelFetch(uCavity, ivec2(0), 0).r * uPressureScale, 0.0);
    float touching = (s.g > 0.0 && abs(s.r - s.g) < 1e-4 && pressure > 0.0) ? 1.0 : 0.0;
    gl_FragColor = vec4(s.r, texelFetch(uObject, g, 0).r, touching, pressure * touching);
  }
`,Jy=n=>`
  ${Xn}
  uniform sampler2D uState;
  uniform sampler2D uObject;
  uniform float uTwoSpacing;
  uniform float uSlopeToShift;
  float w(int c, int r) {
    return AT(uState, clamp(c, 0, ${n-1}), clamp(r, 0, ${n-1}), ${n}).r;
  }
  void main() {
    ivec2 g = ivec2(gl_FragCoord.xy);
    int col = g.x, row = ${n-1} - g.y;
    float gx = (w(col + 1, row) - w(col - 1, row)) / uTwoSpacing;
    float gy = (w(col, row + 1) - w(col, row - 1)) / uTwoSpacing;
    gl_FragColor = vec4(texelFetch(uObject, g, 0).g, uSlopeToShift * gx, uSlopeToShift * gy, 1.0);
  }
`,Id=`
  vec4 cubic(float x) {
    const float A = -0.75;
    vec4 c;
    c.x = ((A * (x + 1.0) - 5.0 * A) * (x + 1.0) + 8.0 * A) * (x + 1.0) - 4.0 * A;
    c.y = ((A + 2.0) * x - (A + 3.0)) * x * x + 1.0;
    c.z = ((A + 2.0) * (1.0 - x) - (A + 3.0)) * (1.0 - x) * (1.0 - x) + 1.0;
    c.w = 1.0 - c.x - c.y - c.z;
    return c;
  }
`,Qy=(n,e)=>`
  ${Xn}
  uniform sampler2D uField;
  ${Id}
  void main() {
    ivec2 g = ivec2(gl_FragCoord.xy);
    int col = g.x, row = ${e-1} - g.y;
    float fx = (float(col) + 0.5) * ${(n/e).toFixed(8)} - 0.5;
    float fy = (float(row) + 0.5) * ${(n/e).toFixed(8)} - 0.5;
    int sx = int(floor(fx)), sy = int(floor(fy));
    vec4 a = cubic(fx - float(sx)), b = cubic(fy - float(sy));
    vec3 sum = vec3(0.0);
    for (int j = 0; j < 4; j++) {
      int r = clamp(sy - 1 + j, 0, ${n-1});
      vec3 line = vec3(0.0);
      for (int i = 0; i < 4; i++) {
        line += a[i] * AT(uField, clamp(sx - 1 + i, 0, ${n-1}), r, ${n}).rgb;
      }
      sum += b[j] * line;
    }
    gl_FragColor = vec4(sum, 1.0);
  }
`,$y=n=>{let e=[.625,.875,.125,.375],t=[0,0,1,1];return`
  ${Xn}
  uniform sampler2D uCamera;     // r: albedo; g, b: shift, on the camera grid
  uniform sampler2D uCameraMask; // r: on the membrane; g: which fine points are
  uniform sampler2D uAxis;       // camera grid nodes, mm
  uniform sampler2D uAxisFine;   // fine grid nodes, mm
  uniform float uBlur[3];        // Gaussian weights at 0, 1, 2 pixels
  uniform vec2 uDirA, uDirB;     // across the lines of the top and bottom grating
  uniform vec2 uMotion;          // share of the shift each layer moves with
  uniform float uPitch, uPhaseCycles, uHalfLine, uLine;
  uniform float uDistortion, uRadius2, uContrast;
  uniform float uAmbient, uGain, uOffset, uOutside, uNoise;
  uniform vec2 uSeed;
  ${Id}

  float lines(vec2 top, vec2 bottom) {
    float a = dot(uDirA, top) / uPitch;
    float b = dot(uDirB, bottom) / uPitch - uPhaseCycles;
    return (abs(a - floor(a + 0.5)) <= uHalfLine ? uLine : 1.0) * (abs(b - floor(b + 0.5)) <= uHalfLine ? uLine : 1.0);
  }
  float envelope(float cycles) {
    return clamp(1.0 + uContrast * cos(6.283185307179586 * fract(cycles)), 0.5, 1.5);
  }
  int mirror(int i) {
    // cv2.GaussianBlur's border: gfedcb|abcdefgh|gfedcba
    return i < 0 ? -i : (i > ${n-1} ? ${2*(n-1)} - i : i);
  }
  uint pcg(uint v) {
    uint state = v * 747796405u + 2891336453u;
    uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
    return (word >> 22u) ^ word;
  }
  float camera(float albedo, float transmission, float vignette, float noise, float inside) {
    float image = uAmbient + (1.0 - uAmbient) * albedo * transmission;
    image *= vignette;
    image = image * uGain + uOffset + noise;
    image = mix(uOutside, image, inside);
    return clamp(floor(image * 255.0 + 0.5), 0.0, 255.0) / 255.0;
  }

  void main() {
    ivec2 g = ivec2(gl_FragCoord.xy);
    int col = g.x, row = ${n-1} - g.y;

    // The 5 x 5 pixels around this one.
    vec3 around[25];
    for (int j = 0; j < 5; j++) {
      for (int i = 0; i < 5; i++) {
        around[j * 5 + i] = AT(uCamera, clamp(col + i - 2, 0, ${n-1}), clamp(row + j - 2, 0, ${n-1}), ${n}).rgb;
      }
    }

    // What the camera sees through the membrane, blurred by its lens.
    float albedo = 0.0;
    bool edge = col < 2 || row < 2 || col > ${n-3} || row > ${n-3};
    for (int j = 0; j < 5; j++) {
      float line = 0.0;
      for (int i = 0; i < 5; i++) {
        float v = edge ? AT(uCamera, mirror(col + i - 2), mirror(row + j - 2), ${n}).r : around[j * 5 + i].r;
        line += uBlur[abs(i - 2)] * v;
      }
      albedo += uBlur[abs(j - 2)] * line;
    }

    // The shift at the 4 x 4 fine points: rows first, then columns.
    vec4 weights[4] = vec4[4](cubic(${e[0]}), cubic(${e[1]}), cubic(${e[2]}), cubic(${e[3]}));
    int first[4] = int[4](${t.join(", ")});
    vec2 across[20];
    for (int j = 0; j < 5; j++) {
      for (int a = 0; a < 4; a++) {
        int o = j * 5 + first[a];
        vec4 c = weights[a];
        across[j * 4 + a] = c.x * around[o].gb + c.y * around[o + 1].gb + c.z * around[o + 2].gb + c.w * around[o + 3].gb;
      }
    }
    vec4 mask = texelFetch(uCameraMask, g, 0);
    int bits = int(mask.g + 0.5);
    float rest = 0.0, pressed = 0.0;
    for (int b = 0; b < 4; b++) {
      float y = texelFetch(uAxisFine, ivec2(${bn} * row + b, 0), 0).r;
      vec4 c = weights[b];
      int o = first[b] * 4;
      for (int a = 0; a < 4; a++) {
        float x = texelFetch(uAxisFine, ivec2(${bn} * col + a, 0), 0).r;
        vec2 shift = c.x * across[o + a] + c.y * across[o + 4 + a] + c.z * across[o + 8 + a] + c.w * across[o + 12 + a];
        vec2 at = vec2(x, y) * (1.0 + uDistortion * (x * x + y * y) / uRadius2);
        float open = float((bits >> (a + 4 * b)) & 1);
        rest += open * lines(at, at);
        pressed += open * lines(at - uMotion.x * shift, at - uMotion.y * shift);
      }
    }
    rest = clamp(rest * ${1/(bn*bn)} * mask.r, 0.0, 1.0);
    pressed = clamp(pressed * ${1/(bn*bn)} * mask.r, 0.0, 1.0);

    // The moir\xE9 envelope, on the camera grid. Its phase is the difference of
    // the two gratings' phases, taken here before it is turned into cycles.
    vec2 p = vec2(texelFetch(uAxis, ivec2(col, 0), 0).r, texelFetch(uAxis, ivec2(row, 0), 0).r);
    float r2 = dot(p, p);
    vec2 at = p * (1.0 + uDistortion * r2 / uRadius2);
    vec2 shift = around[12].gb;
    float cycles = dot(uDirA - uDirB, at) / uPitch + uPhaseCycles;
    float moved = cycles - dot(uMotion.x * uDirA - uMotion.y * uDirB, shift) / uPitch;
    rest *= envelope(cycles);
    pressed *= envelope(moved);

    // Camera noise: Gaussian, a value of its own for each pixel of each image.
    vec2 noise = vec2(0.0);
    if (uNoise > 0.0) {
      uint h = pcg(pcg(uint(col) + ${n}u * uint(row)) + 0x9e3779b9u * (uint(uSeed.x) + 1u) + 0x85ebca6bu * uint(uSeed.y));
      uint k = pcg(h ^ 0x68bc21ebu);
      float u1 = (float(h >> 8u) + 0.5) / 16777216.0;
      float u2 = (float(k >> 8u) + 0.5) / 16777216.0;
      noise = uNoise * sqrt(-2.0 * log(u1)) * vec2(cos(6.283185307179586 * u2), sin(6.283185307179586 * u2));
    }

    float vignette = clamp(1.0 - ${Ad.strength} * r2 / uRadius2, ${Ad.floor}, 1.0);
    gl_FragColor = vec4(camera(albedo, rest, vignette, noise.x, mask.r), camera(albedo, pressed, vignette, noise.y, mask.r), 0.0, 1.0);
  }
`};function iu(n,e){let t=new Float32Array(e),i=2*n/(e-1);for(let s=0;s<e;s+=1)t[s]=s*i-n;return t[e-1]=n,t}var Rd=(n,e,t)=>Math.fround(Math.fround(n*n)+Math.fround(e*e))<=t;function Hr(n,e,t,i){let s=new Gn(n,e,t,i,St);return s.minFilter=ot,s.magFilter=ot,s.generateMipmaps=!1,s.needsUpdate=!0,s}function nr(n,e,t,i){for(let s=0;s<e;s+=1){let r=(e-1-s)*e*4+t,o=s*e;for(let a=0;a<e;a+=1)i[o+a]=n[r+a*4]}return i}function Ud(n,e,t={}){let i={...Hy,...t};if(e.pattern!=="parallel")throw new Error(`moire.js renders the parallel grating only, not "${e.pattern}"`);let s=e.physics_size,r=s*e.camera_supersample,o=r*bn,a=e.sensor_radius_mm,l=2*a/(s-1),c=(_,F)=>Number.isInteger(_/F);if(!c(s,ns)||!c(i.sorSweeps,i.sorPerPass)||!c(i.sorPressureEvery,i.sorPerPass)||!c(i.bendSteps,i.bendPerPass)||!c(i.bendCheckEvery,i.bendPerPass))throw new Error("moire.js: sizes and solver plan do not divide");let u=iu(a,s),d=iu(a,r),p=iu(a,o),m=a*a,g=new Uint8Array(s*s);for(let _=0;_<s;_+=1)for(let F=0;F<s;F+=1)g[_*s+F]=Rd(u[F],u[_],m)?1:0;let v=new Float32Array(s*s*4),f=0;for(let _=0;_<s;_+=1)for(let F=0;F<s;F+=1){let N=1;for(let te=-1;te<=1&&N;te+=1)for(let Z=-1;Z<=1&&N;Z+=1){let ue=_+te,le=F+Z;ue>=0&&ue<s&&le>=0&&le<s&&!g[ue*s+le]&&(N=0)}f+=N;let B=((s-1-_)*s+F)*4;v[B]=g[_*s+F],v[B+1]=N}let h=new Uint8Array(o*o);for(let _=0;_<o;_+=1){let F=Math.fround(p[_]*p[_]);for(let N=0;N<o;N+=1)h[_*o+N]=Math.fround(Math.fround(p[N]*p[N])+F)<=m?1:0}let w=new Float32Array(r*r*4);for(let _=0;_<r;_+=1)for(let F=0;F<r;F+=1){let N=0;for(let te=0;te<bn;te+=1)for(let Z=0;Z<bn;Z+=1)N|=h[(bn*_+te)*o+bn*F+Z]<<Z+bn*te;let B=((r-1-_)*r+F)*4;w[B]=Rd(d[F],d[_],m)?1:0,w[B+1]=N}let E=Hr(u,s,1,Ws),S=Hr(d,r,1,Ws),H=Hr(p,o,1,Ws),C=Hr(v,s,s,xt),R=Hr(w,r,r,xt),U=_=>new at(_,_,{type:St,format:xt,minFilter:ot,magFilter:ot,depthBuffer:!1,wrapS:cn,wrapT:cn}),T=U(s),M=[U(s),U(s)],I=U(ns),W=U(1),G=U(s),X=U(s),K=U(r),j=new at(r,r,{type:hn,minFilter:ot,magFilter:ot,depthBuffer:!1}),$=(_,F,N=Gy)=>new it({vertexShader:N,fragmentShader:_,uniforms:F,depthTest:!1,depthWrite:!1}),Y=()=>({uCavity:{value:W.texture},uState:{value:null},uPressureScale:{value:0}}),fe=$(Xy(s),{uAxis:{value:E},uMask:{value:C},uDepth:{value:0},uAlbedo:{value:new ie},...eu()}),ge=$(qy,{uObject:{value:T.texture}}),Ae=$(jy(s),{uState:{value:null}}),ke=$(Wy,{uSums:{value:I.texture},uReference:{value:0},uPerVolume:{value:0},uSealed:{value:1},uTolerance:{value:0}}),qe=$(Yy(s,i.sorPerPass),{...Y(),uRelax:{value:new ie}}),J=$(Ky(s,i.bendPerPass),{...Y(),uStencil:{value:new nt}}),oe=$(Zy(s),{...Y(),uObject:{value:T.texture},uForce:{value:new L}}),Me=$(Jy(s),{uState:{value:null},uObject:{value:T.texture},uTwoSpacing:{value:2*l},uSlopeToShift:{value:0}}),me=$(Qy(s,r),{uField:{value:X.texture}}),Pe=$($y(r),{uCamera:{value:K.texture},uCameraMask:{value:R},uAxis:{value:S},uAxisFine:{value:H},uBlur:{value:[1,0,0]},uDirA:{value:new ie},uDirB:{value:new ie},uMotion:{value:new ie},uPitch:{value:1},uPhaseCycles:{value:0},uHalfLine:{value:0},uLine:{value:0},uDistortion:{value:0},uRadius2:{value:m},uContrast:{value:0},uAmbient:{value:0},uGain:{value:1},uOffset:{value:0},uOutside:{value:0},uNoise:{value:0},uSeed:{value:new ie}}),ze=new De(new Pt(2,2),fe);ze.frustumCulled=!1;let Be=new Vt;Be.add(ze);let je=new Ht(-1,1,1,-1,0,1),ee=0;function ae(_,F){ze.material=_,n.setRenderTarget(F),n.render(Be,je),ee+=1}function P(_,F=0){Ae.uniforms.uState.value=_.texture,ae(Ae,I),ke.uniforms.uTolerance.value=F,ae(ke,W)}function Te(_){if(!(_>0))return[1,0,0];let F=Math.round(_*8+1)|1;if(F>5)throw new Error("moire.js: the lens blur is written for a 5-pixel kernel (sigma up to 0.56)");let N=(F-1)/2,B=[0,1,2].map(Z=>Z<=N?Math.exp(-Z*Z/(2*_*_)):0),te=B[0]+2*B[1]+2*B[2];return B.map(Z=>Z/te)}function ce({prims:_=[],pose:F={x:0,y:0,rot:0},depth:N=0,pressure:B,albedo:te=zy,seed:Z=0,noise:ue,sensor:le=e}={}){let se=n.getRenderTarget(),ve=n.autoClear;n.autoClear=!1,ee=0;let pe=B??le.pressure_kpa,Ce=le.tension_n_per_mm*(1+le.tension_stiffening_per_kpa*pe),ye=le.bending_stiffness_n_mm,Ue=l*l,He=fe.uniforms;He.uDepth.value=N,He.uAlbedo.value.set(te.object,te.background),tu(He,_,F),ae(fe,T),ae(ge,M[0]);let Ye=0,z=xe=>{xe.uniforms.uState.value=M[Ye].texture,ae(xe,M[1-Ye]),Ye=1-Ye};ke.uniforms.uReference.value=pe,ke.uniforms.uPerVolume.value=1/(f*le.cavity_depth_mm),ke.uniforms.uSealed.value=le.sealed_air_coupling?1:0;let be=i.sorRelaxation;qe.uniforms.uRelax.value.set(1-be,be/4),qe.uniforms.uPressureScale.value=be*.001*Ue/(4*Ce);for(let xe=0;xe<i.sorSweeps/i.sorPerPass;xe+=1)xe%(i.sorPressureEvery/i.sorPerPass)===0&&P(M[Ye]),z(qe);if(ye>0){let xe=i.bendStepScale/(8*Ce/Ue+64*ye/(Ue*Ue));J.uniforms.uStencil.value.set(1-xe*(4*Ce/Ue+20*ye/(Ue*Ue)),xe*(Ce/Ue+8*ye/(Ue*Ue)),-2*xe*ye/(Ue*Ue),-xe*ye/(Ue*Ue)),J.uniforms.uPressureScale.value=xe*.001;let We=i.bendCheckEvery/i.bendPerPass;for(let lt=0;lt<i.bendSteps/i.bendPerPass;lt+=1)lt%We===0&&P(M[Ye],i.bendTolerance),z(J)}P(M[Ye]),oe.uniforms.uState.value=M[Ye].texture,oe.uniforms.uPressureScale.value=.001,oe.uniforms.uForce.value.set(Ce/Ue,ye/(Ue*Ue),0),ae(oe,G),Me.uniforms.uState.value=M[Ye].texture,Me.uniforms.uSlopeToShift.value=le.slope_to_shift_mm,ae(Me,X),ae(me,K);let q=Pe.uniforms,ne=le.grating_angle_a_deg*Math.PI/180,_e=le.grating_angle_b_deg*Math.PI/180;return q.uBlur.value=Te(le.camera_psf_sigma_px),q.uDirA.value.set(Math.cos(ne),Math.sin(ne)),q.uDirB.value.set(Math.cos(_e),Math.sin(_e)),q.uMotion.value.set(le.top_layer_motion_scale,le.bottom_layer_motion_scale),q.uPitch.value=le.grating_pitch_mm,q.uPhaseCycles.value=le.moire_phase_offset_rad/(2*Math.PI),q.uHalfLine.value=.5*(1-le.grating_open_fraction),q.uLine.value=le.grating_line_transmittance,q.uDistortion.value=le.radial_distortion_k1,q.uContrast.value=le.envelope_contrast,q.uAmbient.value=le.ambient_intensity,q.uGain.value=le.brightness_gain,q.uOffset.value=le.brightness_offset,q.uOutside.value=le.outside_intensity,q.uNoise.value=ue??le.noise_std,q.uSeed.value.set(Z&65535,Z>>>16&65535),ae(Pe,j),n.setRenderTarget(se),n.autoClear=ve,ee}function Se(_,F){let N=F.length-1,B=F.map((te,Z)=>(ce({..._,pressure:te,seed:(_.seed??0)+(N-Z)}),de()));return Promise.all(B).then(te=>({pre:te[0].pre,posts:te.map(Z=>Z.post)}))}async function de(){let _=await n.readRenderTargetPixelsAsync(j,0,0,r,r,new Uint8Array(r*r*4));return{pre:nr(_,r,0,new Uint8Array(r*r)),post:nr(_,r,1,new Uint8Array(r*r))}}async function Fe(){let _=await n.readRenderTargetPixelsAsync(G,0,0,s,s,new Float32Array(s*s*4)),F=nr(_,s,3,new Float32Array(s*s)),N=0;for(let B=0;B<F.length;B+=1)N+=F[B];return{membrane:nr(_,s,0,new Float32Array(s*s)),obstacle:nr(_,s,1,new Float32Array(s*s)),contact:nr(_,s,2,new Uint8Array(s*s)),pressure:F,force:N*l*l}}async function D(){let[_,F]=await Promise.all([de(),Fe()]);return{..._,...F}}let b=new Uint8Array(4);function y(){n.readRenderTargetPixels(j,0,0,1,1,b)}return{physics:s,camera:r,radius:a,spacing:l,disc:g,plan:i,render:ce,series:Se,read:D,readImages:de,readHeights:Fe,finish:y,textures:{images:j.texture,heights:G.texture}}}var Ld={contract:"models/shape1d_w32.json"},ru=(n=Ld.contract)=>n===Ld.contract&&document.documentElement.dataset.moireModel||n;function Dd(n,e){let t=Object.values(n.input)[0];if(n.pressure_plane_scale_kpa){if(t[1]!==4)throw new Error(`the model's contract names a pressure plane and takes ${t[1]} pictures, not 4`);return[Number(n.sensor?.pressure_kpa??e)]}let i=(t[1]-1)/2,s=n.frame_pressures_kpa;if(Array.isArray(s)){if(s.length!==i)throw new Error(`the model's contract lists ${s.length} pressures for ${i} images after the press`);return s.map(Number)}if(i!==1)throw new Error(`the model's contract takes ${i} images after the press and names no pressures`);return[Number(n.sensor?.pressure_kpa??e)]}function eM(n){if(!n.pressure_plane_scale_kpa)return null;let e=(n.frame_pressures_kpa??[]).map(Number);return{min:Math.min(...e),max:Math.max(...e)}}function Fd({contractUrl:n=ru(),workerUrl:e="dist/moire-estimator.worker.js",ortBase:t="dist/ort/",prefer:i,optimise:s,layout:r,onProgress:o,autoload:a=!0}={}){let l=new Worker(new URL(e,location.href),{type:"module"}),c=new Map,u=1,d,p=new Promise((f,h)=>{d={resolve:f,reject:h}}),m={provider:"",ready:!1,error:"",info:null,contract:null};l.onmessage=({data:f})=>{if(f.type==="progress")o?.(f);else if(f.type==="ready")m.provider=f.provider,m.ready=!0,m.info={...f,contract:m.contract},d.resolve(m.info);else if(f.type==="error"){let h=c.get(f.id);h?(c.delete(f.id),h.reject(new Error(f.message))):(m.error=f.message,d.reject(new Error(f.message)))}else if(c.has(f.id)){let h=c.get(f.id);c.delete(f.id),h.resolve(f)}},l.onerror=f=>{m.error=f.message||"worker failed to start",d.reject(new Error(m.error))};function g(f,h=[]){let w=u;return u+=1,new Promise((E,S)=>{c.set(w,{resolve:E,reject:S}),l.postMessage({...f,id:w},h)})}async function v(){let f=new URL(n,location.href),h=await fetch(f,{cache:"no-store"});if(!h.ok)throw new Error(`the model's contract: HTTP ${h.status}`);let w=await h.json();m.contract=w,Dd(w,0);let E=new URL(w.artifact,f);E.searchParams.set("v",String(w.artifact_sha256??w.bytes??"").slice(0,12)),l.postMessage({type:"load",modelUrl:E.href,ortBase:new URL(t,location.href).href,prefer:i,optimise:s,layout:r??(w.pressure_plane_scale_kpa?"NCHW":void 0),contract:{input:w.input,output:w.output,bytes:w.bytes,pressurePlane:w.pressure_plane_scale_kpa??null}})}return a&&v().catch(f=>{m.error=f.message,d.reject(f)}),{ready:p,state:m,estimate:(f,h,w)=>g({type:"estimate",pre:f,posts:Array.isArray(h)?h:[h],pressure:w}),range:()=>eM(m.contract),pressures:f=>Dd(m.contract,f),channels:()=>m.contract?.output_channels??[],compare:(f,h,w,E,S,H)=>g({type:"compare",modelUrl:new URL(f,location.href).href,ortBase:new URL(t,location.href).href,eps:h,pre:w,post:E,dims:S,optimise:H}),dispose:()=>l.terminate()}}var tM=.01,nM=25,is=Wn.length,wt={cols:7,rows:3,tile:112};function Vr(n){if(n===0)return{col:0,row:1};let e=n<10?1:10;return{col:(n<10?1:4)+(n-e)%3,row:Math.floor((n-e)/3)}}var Nd=(n,e)=>Math.min(Math.max(Math.round(n),0),e-1);function ou(n){let e=Mn[Nd(n.sensor,Mn.length)],t=ft[e],i={el:Math.round(n.tEl*10)/10,softness:n.tSoft>0?Math.round(n.tSoft*100)/100:void 0,fov:n.tFov>0?Math.round(n.tFov*10)/10:void 0,ks:n.tKs>=0?Math.round(n.tKs*100)/100:void 0},s=wd(t,i),r=JSON.stringify([e,i]),o=Math.round(n.calib);if(o>=0){let m=va(s)[Math.min(o,17)];return{sensorId:e,sensor:s,sensorKey:r,calib:o,object:{label:o<9?"Calibration ball":"Cube corner",prims:m.prims},objectKey:`c${o}`,pose:m.pose,depth:m.depth*n.calibIn-1.5*(1-n.calibIn)}}let a=Math.round(n.obj),l=Math.max(0,Math.round(n.seed)),c=s.objectField??s.fov,u=a>=is?Td(l,c):zr[Wn[Nd(a,Wn.length)]],d=s.reach??s.fov*.45,p={x:Math.min(Math.max(n.px,-d),d),y:Math.min(Math.max(n.py,-d),d),rot:n.prot};return{sensorId:e,sensor:s,sensorKey:r,calib:-1,object:u,objectKey:a>=is?`r${l}:${c}`:`p${a}`,pose:p,depth:n.depth}}function Od(n,{manual:e=!1}={}){let t=new URLSearchParams(location.search),i=vd(n),s=new Float32Array(he*he*4);for(let D=0;D<he*he;D+=1)s[D*4+2]=1;let r=new Gn(s,he,he,xt,St);r.needsUpdate=!0;let o=new at(wt.cols*wt.tile,wt.rows*wt.tile,{depthBuffer:!1,minFilter:bt,magFilter:bt}),a=new at(4*he,he,{depthBuffer:!1,minFilter:bt,magFilter:bt}),l=new at(he,he,{depthBuffer:!1,minFilter:bt,magFilter:bt}),c=new De(new Pt(2,2),new Vn({map:i.textures.image,depthTest:!1,depthWrite:!1,toneMapped:!1}));c.frustumCulled=!1;let u=new Vt;u.add(c);let d=new Ht(-1,1,1,-1,0,1),p=new Re(263949);function m(D,b,y,_,F){let N=n.getRenderTarget(),B=n.autoClear;n.autoClear=!1,D.viewport.set(b,y,_,F),D.scissor.set(b,y,_,F),D.scissorTest=!0,n.setRenderTarget(D),n.render(u,d),n.setRenderTarget(N),n.autoClear=B}function g(D){let b=n.getRenderTarget(),y=n.getClearColor(new Re),_=n.getClearAlpha();D.scissorTest=!1,D.viewport.set(0,0,D.width,D.height),n.setRenderTarget(D),n.setClearColor(p,1),n.clear(!0,!1,!1),n.setClearColor(y,_),n.setRenderTarget(b)}function v(D){let{col:b,row:y}=Vr(D);m(o,b*wt.tile,(wt.rows-1-y)*wt.tile,wt.tile,wt.tile)}let f={model:e?"manual clock: the model does not run":t.get("model")==="0"?"off":"waiting",provider:"",got:0,total:ya.bytes,cached:!1,ms:0,fresh:!1,error:"",estimates:0},h=0,w=!1;Sd().then(()=>{w=!0,h+=1});let E=null,S=!1;function H(){E||e||t.get("model")==="0"||(f.model="loading",E=_d({modelUrl:t.get("model-url")??void 0,prefer:t.get("ep")??void 0,onProgress:({got:D,total:b,cached:y})=>{f.got=D,f.total=b||ya.bytes,f.cached=y,h+=1}}),E.ready.then(D=>{S=!0,f.model="ready",f.provider=D.provider,h+=1},D=>{f.model="failed",f.error=D.message,h+=1}),h+=1)}let C="",R=0,U=-1,T=!1,M="",I="",W=!1,G="",X=0,K=null;function j(D){i.render({sensor:D.sensor,prims:D.object.prims,pose:D.pose,depth:D.depth,seed:1})}function $(D){let b=D.sensorKey,y=S&&I!==b&&!W,_=[];g(o),i.render({sensor:D.sensor,prims:[],depth:0,seed:1}),v(0),y&&_.push(i.readImage()),va(D.sensor).forEach((F,N)=>{i.render({sensor:D.sensor,...F,seed:2+N}),v(N+1),y&&_.push(i.readImage())}),M=b,j(D),y&&(W=!0,Promise.all(_).then(([F,...N])=>{let B=new Uint8Array(18*he*he*4);return N.forEach((te,Z)=>B.set(te,Z*he*he*4)),E.calibrate(F,B,Ed(D.sensor))}).then(()=>{I=b},F=>{f.error=F.message}).finally(()=>{W=!1,U=-1,h+=1}))}let Y="";function fe(D,b){bd.forEach((y,_)=>{i.render({sensor:ft[y],prims:D.object.prims,pose:D.pose,depth:D.depth,seed:1}),m(a,_*he,0,he,he)}),Y=b,j(D)}let ge="";function Ae(D,b){i.render({sensor:ft[D.sensorId],prims:D.object.prims,pose:D.pose,depth:D.depth,seed:1}),m(l,0,0,he,he),ge=b,j(D)}function ke(){T=!0;let D=R,b=performance.now();i.readImage().then(y=>E.estimate(y)).then(y=>{K&&K.sensor.moire||(s.set(y.data),r.needsUpdate=!0,U=D,Me&&(Me.estimatedVersion=-1),f.ms=performance.now()-b,f.estimates+=1)},y=>{f.error=y.message,U=D}).finally(()=>{T=!1,h+=1})}let qe=()=>({model:e?"manual clock: the model does not run":t.get("model")==="0"?"off":"waiting",provider:"",got:0,total:0,cached:!1,ms:0,fresh:!1,error:"",estimates:0}),J=new Map;function oe(D){let b=ru(t.get("moireContract")??D.contract),y=J.get(b);return y||(y={url:b,estimator:null,ready:!1,channel:null,pressures:[ts.pressure_kpa],range:null,status:qe()},J.set(b,y)),y}let Me=null;function me(D,b,y){let _=new Float32Array(he*4);for(let F=0;F<he;F+=1){let N=(F+.5)*y/he-y/2,B=Math.round(Math.fround((N+b)/(2*b)*(D-1))*32);_[F*4]=B>>5,_[F*4+1]=(B&31)/32}return _}function Pe(){if(Me)return Me;let D=Ud(n,ts),b=D.physics,y=ft.moireskin.objectField,_=me(b,D.radius,y),F=new Gn(_,he,1,xt,St);F.needsUpdate=!0;let N=new at(he,he,{type:St,format:xt,minFilter:ot,magFilter:ot,depthBuffer:!1}),B=new it({depthTest:!1,depthWrite:!1,uniforms:{uHeights:{value:D.textures.heights},uMap:{value:F},uSpacing:{value:y/he},uMin:{value:tM}},vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        precision highp float;
        precision highp int;
        uniform sampler2D uHeights;
        uniform sampler2D uMap;
        uniform float uSpacing, uMin;
        // Height of the object and whether it is there, at a pixel of the page's grid.
        vec2 at(int px, int py) {
          vec2 mx = texelFetch(uMap, ivec2(px, 0), 0).rg;
          vec2 my = texelFetch(uMap, ivec2(py, 0), 0).rg;
          vec2 sum = vec2(0.0);
          for (int j = 0; j < 2; j++) {
            for (int i = 0; i < 2; i++) {
              float o = texelFetch(uHeights, ivec2(int(mx.x) + i, ${b-1} - (int(my.x) + j)), 0).g;
              float there = o > uMin ? 1.0 : 0.0;
              sum += (i == 0 ? 1.0 - mx.y : mx.y) * (j == 0 ? 1.0 - my.y : my.y) * vec2(o * there, there);
            }
          }
          return sum;
        }
        void main() {
          int px = int(gl_FragCoord.x), py = ${he-1} - int(gl_FragCoord.y);
          int x0 = max(px - 1, 0), x1 = min(px + 1, ${he-1}), y0 = max(py - 1, 0), y1 = min(py + 1, ${he-1});
          float gx = (at(x1, py).x - at(x0, py).x) / (float(x1 - x0) * uSpacing);
          float gy = (at(px, y1).x - at(px, y0).x) / (float(y1 - y0) * uSpacing);
          vec2 here = at(px, py);
          gl_FragColor = vec4(normalize(vec3(-gx, -gy, 1.0)), (here.x + 1e-4) * (here.y > 0.5 ? 1.0 : -1.0));
        }
      `}),te=new it({depthTest:!1,depthWrite:!1,uniforms:{uImages:{value:D.textures.images},uAfter:{value:0},uCrop:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"precision highp float; varying vec2 vUv; uniform sampler2D uImages; uniform float uAfter, uCrop; void main() { vec4 t = texture2D(uImages, 0.5 + (vUv - 0.5) * uCrop); gl_FragColor = vec4(vec3(mix(t.r, t.g, uAfter)), 1.0); }"});return Me={sim:D,nodes:b,field:y,map:_,truth:N,truthMaterial:B,beforeMaterial:te,object:new Float32Array(b*b),height:new Float32Array(he*he),pressed:null,estimatedBy:null,renderedKey:"",renderedAt:-1/0,version:0,estimatedVersion:-1,estimating:!1},Me}function ze(D){D.estimator||e||t.get("model")==="0"||(D.status.model="loading",D.estimator=Fd({contractUrl:D.url,prefer:t.get("ep")??void 0,onProgress:({got:b,total:y,cached:_})=>{D.status.got=b,D.status.total=y,D.status.cached=_,h+=1}}),D.estimator.ready.then(b=>{D.channel=Object.fromEntries(D.estimator.channels().map((y,_)=>[y,_])),D.pressures=D.estimator.pressures(ts.pressure_kpa),D.range=D.estimator.range(),D.ready=!0,D.status.model="ready",D.status.provider=b.provider,h+=1},b=>{D.status.model="failed",D.status.error=b.message,h+=1}),h+=1)}function Be(D,b,y,_,F,N){let B=c.material;c.material=D,m(b,y,_,F,N),c.material=B}function je(D,b){let y=Me,_=y.nodes,F=_*_,N=y.sim.disc,{object_mm:B,target_logit:te}=b;for(let le=0;le<F;le+=1)y.object[le]=D[te*F+le]>0&&N[le]?D[B*F+le]:0;let Z=y.map;for(let le=0;le<he;le+=1){let se=Z[le*4]*_,ve=Z[le*4+1];for(let pe=0;pe<he;pe+=1){let Ce=se+Z[pe*4],ye=Z[pe*4+1];y.height[le*he+pe]=y.object[Ce]*Math.fround((1-ve)*(1-ye))+y.object[Ce+1]*Math.fround((1-ve)*ye)+y.object[Ce+_]*Math.fround(ve*(1-ye))+y.object[Ce+_+1]*Math.fround(ve*ye)}}let ue=y.field/he;for(let le=0;le<he;le+=1){let se=Math.max(le-1,0),ve=Math.min(le+1,he-1);for(let pe=0;pe<he;pe+=1){let Ce=Math.max(pe-1,0),ye=Math.min(pe+1,he-1),Ue=(y.height[le*he+ye]-y.height[le*he+Ce])/((ye-Ce)*ue),He=(y.height[ve*he+pe]-y.height[se*he+pe])/((ve-se)*ue),Ye=1/Math.hypot(Ue,He,1),z=(le*he+pe)*4;s[z]=-Ue*Ye,s[z+1]=-He*Ye,s[z+2]=Ye,s[z+3]=y.height[le*he+pe]}}r.needsUpdate=!0}let ee="moireskin, for SITR";function ae(D,b){let y=new Uint8Array(he*he*4),_=ft.moireskin.objectField,F=Me.sim.radius,N=new Float32Array(he);for(let B=0;B<he;B+=1)N[B]=Math.min(Math.max(((B+.5)*_/he-_/2+F)/(2*F)*(b-1),0),b-1.001);for(let B=0;B<he;B+=1){let te=Math.floor(N[B]),Z=N[B]-te;for(let ue=0;ue<he;ue+=1){let le=Math.floor(N[ue]),se=N[ue]-le,ve=te*b+le,pe=Math.round((D[ve]*(1-se)+D[ve+1]*se)*(1-Z)+(D[ve+b]*(1-se)+D[ve+b+1]*se)*Z),Ce=(B*he+ue)*4;y[Ce]=pe,y[Ce+1]=pe,y[Ce+2]=pe,y[Ce+3]=255}}return y}function P(D){let b=Me,y=ft.moireskin.objectField,_=(N,B)=>{let{col:te,row:Z}=Vr(N);b.beforeMaterial.uniforms.uAfter.value=B,b.beforeMaterial.uniforms.uCrop.value=y/(2*b.sim.radius),Be(b.beforeMaterial,o,te*wt.tile,(wt.rows-1-Z)*wt.tile,wt.tile,wt.tile),b.beforeMaterial.uniforms.uAfter.value=0,b.beforeMaterial.uniforms.uCrop.value=1};W=!0,g(o),b.sim.render({prims:[],depth:0,seed:1}),_(0,0);let F=[b.sim.readImages().then(N=>N.pre)];return va({fov:y}).forEach((N,B)=>{b.sim.render({...N,seed:2+B}),_(B+1,1),F.push(b.sim.readImages().then(te=>te.post))}),M=ee,b.pressed&&b.sim.render({...b.pressed,pressure:D}),Promise.all(F).then(N=>{let B=N.map(Z=>ae(Z,b.sim.camera)),te=new Uint8Array(18*he*he*4);return B.slice(1).forEach((Z,ue)=>te.set(Z,ue*he*he*4)),E.calibrate(B[0],te,y/he)}).then(()=>{I=ee},N=>{f.error=N.message}).finally(()=>{W=!1,U=-1,h+=1})}function Te(){let D=Me;T=!0;let b=D.version,y=performance.now();D.sim.readImages().then(({post:_})=>E.estimate(ae(_,D.sim.camera))).then(_=>{!K||!K.sitrOnSkin||(s.set(_.data),r.needsUpdate=!0,D.estimatedVersion=b,D.estimatedBy=ee,U=-1,f.ms=performance.now()-y,f.estimates+=1)},_=>{f.error=_.message,D.estimatedVersion=b,D.estimatedBy=ee}).finally(()=>{T=!1,h+=1})}function ce(D){let b=Me;b.estimating=!0;let y=b.version,_=performance.now(),F=b.shown;(D.pressures.length===1?b.sim.readImages().then(({pre:B,post:te})=>({pre:B,posts:[te]})):b.sim.series(b.pressed,D.pressures)).then(({pre:B,posts:te})=>D.estimator.estimate(B,te,F)).then(B=>{!K||!K.sensor.moire||(je(B.maps,D.channel),b.estimatedVersion=y,b.estimatedBy=D,U=-1,D.status.ms=performance.now()-_,D.status.estimates+=1)},B=>{D.status.error=B.message,b.estimatedVersion=y,b.estimatedBy=D}).finally(()=>{b.estimating=!1,h+=1})}function Se(D,{wantAtlas:b,wantEstimate:y}){let _=Pe(),F=oe(D.sensor),N=F.range?Math.min(Math.max(D.kpa,F.range.min),F.range.max):F.pressures[F.pressures.length-1],B=JSON.stringify([F.url,N,D.objectKey,D.pose.x.toFixed(3),D.pose.y.toFixed(3),D.pose.rot.toFixed(3),D.depth.toFixed(3)]);if(B!==_.renderedKey){let Z=performance.now();e||Z-_.renderedAt>=nM?(_.pressed={prims:D.object.prims,pose:D.pose,depth:D.depth,seed:1},_.shown=N,_.sim.render({..._.pressed,pressure:N}),Be(_.truthMaterial,_.truth,0,0,he,he),_.renderedKey=B,_.renderedAt=Z,_.version+=1):setTimeout(()=>{h+=1},12)}if(ze(F),F.ready&&D.walking)for(let Z of Mn)ft[Z].moire&&ze(oe(ft[Z]));if(D.sitrOnSkin){let Z=_.estimatedVersion===_.version&&_.estimatedBy===ee,ue=I===ee;return(y||b)&&S&&!W&&!T&&(!ue||M!==ee)?P(N):y&&S&&ue&&!W&&!T&&!Z&&Te(),f.fresh=S&&ue&&Z,D}if(b&&M!==`moire|${_.renderedKey}`){g(o);let{col:Z,row:ue}=Vr(0);Be(_.beforeMaterial,o,Z*wt.tile,(wt.rows-1-ue)*wt.tile,wt.tile,wt.tile),M=`moire|${_.renderedKey}`}let te=_.estimatedVersion===_.version&&_.estimatedBy===F;return y&&(ze(F),F.ready&&!_.estimating&&!te&&ce(F)),F.status.fresh=F.ready&&te,D}function de(D,{wantAtlas:b=!1,wantEstimate:y=!1,wantGallery:_=!1,wantReference:F=!1}={}){if(!w)return null;let N=ou(D);if(N.sitrOnSkin=!!N.sensor.moire&&D.sitrOnSkin>.5,N.kpa=D.kpa??ts.pressure_kpa,N.walking=!(D.sandbox>.5),K=N,N.sensor.moire)return Se(N,{wantAtlas:b,wantEstimate:y});let B=JSON.stringify([N.sensorKey,N.objectKey,N.pose.x.toFixed(3),N.pose.y.toFixed(3),N.pose.rot.toFixed(3),N.depth.toFixed(3)]);B!==C&&(j(N),C=B,R+=1);let te=JSON.stringify([N.objectKey,N.pose.x.toFixed(3),N.pose.y.toFixed(3),N.pose.rot.toFixed(3),N.depth.toFixed(3)]);_&&Y!==te&&fe(N,te),F&&ge!==`${N.sensorId}|${te}`&&Ae(N,`${N.sensorId}|${te}`);let Z=performance.now();N.sensorKey!==G&&(G=N.sensorKey,X=Z);let ue=e||Z-X>140,le=(b||y)&&M!==N.sensorKey,se=y&&S&&I!==N.sensorKey&&!W;return ue&&(le||se)?$(N):(le||se)&&!ue&&setTimeout(()=>{h+=1},160),y&&S&&!W&&!T&&I===N.sensorKey&&U!==R&&ke(),f.fresh=S&&I===N.sensorKey&&U===R,N}async function Fe(){let D=Pe(),b=await n.readRenderTargetPixelsAsync(D.truth,0,0,he,he,new Float32Array(he*he*4)),y=new Float32Array(he*he*4);for(let _=0;_<he;_+=1)y.set(b.subarray((he-1-_)*he*4,(he-_)*he*4),_*he*4);return y}return{sim:i,textures:{image:i.textures.image,truth:i.textures.truth,membrane:i.textures.membrane,estimate:r,atlas:o.texture,gallery:a.texture,reference:l.texture},moire(){let D=Pe();return{images:D.sim.textures.images,heights:D.sim.textures.heights,truth:D.truth.texture,field:D.field,grid:D.nodes}},reader(){if(!K||!K.sensor.moire||K.sitrOnSkin)return{name:"SITR",moire:!1,status:f};let D=oe(K.sensor);return{name:"Moir\xE9Skin\u2019s model",moire:!0,status:D.status,pressures:D.range?[Math.min(Math.max(K.kpa,D.range.min),D.range.max)]:D.pressures,range:D.range,variety:K.sensor.variety}},async readOnSkin({prims:D,pose:b={x:0,y:0,rot:0},depth:y,entry:_="moireskin",kpa:F,sitr:N=!0}){let B=Pe(),te=oe(ft[_]);for(H(),ze(te),await Promise.all([E.ready,te.estimator.ready]);W||T||B.estimating;)await new Promise(pe=>setTimeout(pe,10));let Z=te.range?F:te.pressures[te.pressures.length-1];B.pressed={prims:D.map(pe=>({...pe,kind:typeof pe.kind=="string"?yt[pe.kind]:pe.kind})),pose:b,depth:y,seed:1},B.shown=Z,N&&I!==ee&&await P(Z),B.sim.render({...B.pressed,pressure:Z}),Be(B.truthMaterial,B.truth,0,0,he,he),B.renderedKey="",B.version+=1;let[ue,le]=await Promise.all([B.sim.readImages(),Fe()]),se=N?(await E.estimate(ae(ue.post,B.sim.camera))).data.slice():null,ve=await te.estimator.estimate(ue.pre,[ue.post],Z);return je(ve.maps,te.channel),h+=1,{truth:le,sitr:se,own:s.slice(),calibrated:I}},moirePressures:D=>oe(D).pressures,moireRange:D=>oe(D).range,setBackground:D=>p.set(D),update:de,start:H,status:f,get moireStatus(){return oe(K&&K.sensor.moire?K.sensor:ft.moireskin).status},readMoireTruth:Fe,tick:()=>h,last:()=>K}}var Lt=1920,Rt=1080,iM=15,li=3.6,Ma=15,au=23,Un=14,Bd=2,Gr=12,Ln=10,ba=8/1.5,kd=7.4,zd=Ln+1,sM=1,rM=["view","ref","four","rel","tru","mem","err","cal"],Hd={view:["Sensor view \xB7 simulated","Changed \xB7 simulated"],ref:["As fitted \xB7 simulated"],four:["One press, four sensors \xB7 simulated"],rel:["Shape \xB7 from SITR"],tru:["True shape \xB7 simulated","The dent \xB7 simulated"],err:["SITR vs truth \xB7 angle"],cal:["Calibration set \xB7 simulated"],mem:["The membrane \xB7 simulated"]},Wr=224,Sa={soft:1.6,fill:.44},Vd=1.5,oM={rel:{ready:"Shape \xB7 Moir\xE9Skin model",waiting:"Shape \xB7 not loaded",stale:"Shape \xB7 updating\u2026"},err:{ready:"Model vs truth \xB7 angle",waiting:"Angle \xB7 not loaded",stale:"Angle \xB7 updating\u2026"},cal:"Before the press \xB7 simulated"},Gd={cal:3/7,four:1/4},Xr={tx:0,ty:-6,tz:0,az:.55,el:.5,size:560,fov:28,sx:1300,sy:560,ry:0,visible:1,backdrop:1,bloom:.35,sensor:0,tEl:0,tSoft:0,tFov:0,tKs:-1,shell:.55,lights:1,obj:0,seed:7,object:1,depth:-3,px:0,py:0,prot:0,hot:0,calib:-1,calibIn:1,view:0,viewX:1180,viewY:250,viewS:360,rel:0,relX:1180,relY:250,relS:360,mem:0,memX:1e3,memY:560,memS:270,tru:0,truX:1180,truY:250,truS:360,err:0,errX:1180,errY:250,errS:360,cal:0,calX:1180,calY:250,calS:360,calMark:-1,calShow:18,ref:0,refX:1180,refY:250,refS:360,four:0,fourX:1180,fourY:250,fourS:360,fourMark:-1,viewTitle:0,truTitle:0,sandbox:0,kpa:4,sitrOnSkin:0,tick:0},Wd={ry:Math.PI*2},Xd=["sensor","obj","seed","calib","calMark","calShow","fourMark","viewTitle","truTitle","sandbox","sitrOnSkin"],lu=class extends Ri{get glow(){return this.renderTargetsHorizontal[0].texture}render(e,t,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let o=0;o<this.nMips;o+=1){let a=this.separableBlurMaterials[o];this.fsQuad.material=a,a.uniforms.colorTexture.value=r.texture,a.uniforms.direction.value=Ri.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this.fsQuad.render(e),a.uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,a.uniforms.direction.value=Ri.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[o]}this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}},aM=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,lM=`
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
`,cM=`
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
`,uM=`
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
`,hM=`
  uniform sampler2D uHeights;
  uniform float uDent;
  varying vec2 vUv;
  varying vec3 vView;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.y -= texture2D(uHeights, uv).r * uDent;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,dM=`
  precision highp float;
  uniform sampler2D uHeights;
  uniform vec3 uTint, uLine;
  uniform vec2 uDir;
  uniform float uPitch, uSide, uOpacity, uClear, uSheen, uLive, uEdge;
  varying vec2 vUv;
  varying vec3 vView;
  void main() {
    // Image x (right) and y (down), as a share of the membrane's width.
    vec2 p = vec2(vUv.x - 0.5, 0.5 - vUv.y);
    float r = length(p) * 2.0;
    if (r > 1.0) {
      discard;
    }
    // The plate's own rim, so that it reads as a plate inside the glass.
    float rimLine = uEdge * smoothstep(1.0 - 3.0 * fwidth(r), 1.0 - 1.5 * fwidth(r), r);
    float c = dot(uDir, p) * uSide / uPitch;
    float w = fwidth(c);
    float line = 1.0 - smoothstep(0.26 - w, 0.26 + w, abs(fract(c) - 0.5) * 2.0);
    // Fine lines seen from far away become an even grey, not a shimmer.
    line = mix(line, 0.26, smoothstep(0.35, 0.9, w));
    float t = 1.0 / 192.0;
    // Only the membrane has the dent (uLive); the plate under it stays flat.
    float gx = uLive * (texture2D(uHeights, vUv + vec2(t, 0.0)).r - texture2D(uHeights, vUv - vec2(t, 0.0)).r) / (2.0 * t * uSide);
    float gz = uLive * (texture2D(uHeights, vUv - vec2(0.0, t)).r - texture2D(uHeights, vUv + vec2(0.0, t)).r) / (2.0 * t * uSide);
    // The dent catches the room's light on the slope that faces it.
    vec3 n = normalize(vec3(gx, 1.0, gz) * (gl_FrontFacing ? 1.0 : -1.0));
    float slope = clamp(length(vec2(gx, gz)) * 1.6, 0.0, 1.0);
    float lit = 0.55 + 0.45 * max(dot(n, normalize(vec3(-0.45, 0.75, 0.5))), 0.0);
    vec3 col = mix(uTint * lit, uLine, max(line, rimLine));
    float alpha = mix(uClear + uSheen * slope, 0.92, max(line, rimLine));
    gl_FragColor = vec4(col, alpha * uOpacity * (1.0 - smoothstep(0.985, 1.0, r) * (1.0 - uEdge)));
  }
`,fM=`
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vUp;
  void main() {
    vUp = uv.y;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalMatrix * normal;
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,pM=`
  precision highp float;
  uniform vec3 uGlass;
  uniform float uBody, uRim, uEnds, uOpacity;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vUp;
  void main() {
    float facing = abs(dot(normalize(vNormal), normalize(vView)));
    float rim = pow(1.0 - facing, 2.4);
    float w = fwidth(vUp);
    float ends = max(smoothstep(1.0 - 2.5 * w, 1.0 - 0.5 * w, vUp), smoothstep(2.5 * w, 0.5 * w, vUp));
    // A soft sheen down the wall, strongest at the top.
    float sheen = 0.5 * vUp * vUp;
    float a = uBody * (1.0 + sheen) + uRim * rim + uEnds * ends;
    gl_FragColor = vec4(uGlass, clamp(a, 0.0, 1.0) * uOpacity);
  }
`,mM=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,gM=`
  precision highp float;
  varying vec2 vUv;
  uniform int uMode;
  uniform sampler2D uA;
  uniform sampler2D uB;
  uniform float uFlipA, uFlipB, uScale, uOpacity, uMark, uShow, uStale, uFrame, uGain, uSoft, uSpacing, uBlank;
  uniform vec3 uBg, uData0, uData1, uLit, uGround;
  vec3 ramp(float t) {
    t = clamp(t, 0.0, 1.0);
    return mix(uData0, uData1, t * t * (3.0 - 2.0 * t));
  }
  // The slope (per px of the grid, along its two axes) of a shape's height
  // smoothed as the reliefs smooth it (uSoft, px): absolute 1 for a truth
  // texture, whose height carries a sign, 0 for an estimate.
  vec2 softSlope(sampler2D shape, vec2 at, float absolute) {
    vec2 g = at * ${Wr}.0 - 0.5;
    vec2 base = floor(g + 0.5);
    float s2 = uSoft * uSoft;
    float sum = 0.0;
    float weight = 0.0;
    vec2 sumD = vec2(0.0);
    vec2 weightD = vec2(0.0);
    for (int j = -4; j <= 4; j++) {
      for (int i = -4; i <= 4; i++) {
        vec2 cell = base + vec2(float(i), float(j));
        vec2 d = cell - g;
        float w = exp(-dot(d, d) / (2.0 * s2));
        float h = texture2D(shape, (clamp(cell, 0.0, ${Wr-1}.0) + 0.5) / ${Wr}.0).a;
        h = mix(max(h, 0.0), abs(h), absolute);
        sum += w * h;
        weight += w;
        sumD += w * h * d / s2;
        weightD += w * d / s2;
      }
    }
    return (sumD * weight - sum * weightD) / (weight * weight);
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
      if (uSoft > 0.0) {
        // Between the two shapes as the reliefs draw them (smoothed): two
        // walls a fraction of a px apart are then not a string of beads.
        // Image y is down: a flipped texture's rows run down, an upright one's up.
        vec2 sa = softSlope(uA, vec2(vUv.x, mix(vUv.y, 1.0 - vUv.y, uFlipA)), 1.0) / uSpacing;
        vec2 sb = softSlope(uB, vec2(vUv.x, mix(vUv.y, 1.0 - vUv.y, uFlipB)), 0.0) / uSpacing;
        vec3 na = normalize(vec3(-sa.x, -sa.y * (2.0 * uFlipA - 1.0), 1.0));
        vec3 nb = normalize(vec3(-sb.x, -sb.y * (2.0 * uFlipB - 1.0), 1.0));
        col = ramp(degrees(acos(clamp(dot(na, nb), -1.0, 1.0))) / uScale);
      }
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
    } else if (uMode == 5) {
      // Moir\xE9Skin's camera after the press: a grey picture (held in the green
      // channel) of a round membrane. Outside the disc is the window's own
      // ground; a thin frame marks the square that the shape windows show.
      vec2 q = vUv - 0.5;
      float px = fwidth(vUv.x);
      col = min(vec3(a.g) * uGain, vec3(1.0));
      col = mix(col, uGround, smoothstep(1.0 - 3.0 * px, 1.0 - px, length(q) * 2.0));
      float d = abs(max(abs(q.x), abs(q.y)) - 0.5 * uFrame);
      col = mix(col, vec3(0.93, 0.95, 0.98), (1.0 - smoothstep(0.75 * px, 1.75 * px, d)) * step(0.001, uFrame));
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
    // No model, no map: the window's own ground, not a picture of the truth.
    col = mix(col, uGround, uBlank);
    gl_FragColor = vec4(col, uOpacity);
  }
`,xM=`
  uniform sampler2D uTex;
  uniform float uFlip, uGain, uAbs, uCrop, uSoft, uChan, uGrid;
  varying vec2 vUv;
  varying vec3 vWorld;
  varying vec3 vSoftNormal;
  // (uChan 1: the height is the texture's first channel, as in Moir\xE9Skin's
  // membrane; uGrid: the texture's side in px.)
  float heightAt(vec2 at) {
    vec4 t = texture2D(uTex, at);
    float h = mix(t.a, t.r, uChan);
    return mix(max(h, 0.0), abs(h), uAbs);
  }
  // The height around a point of the grid, weighted by distance (uSoft, px),
  // and its slope per px along the grid's two axes: a wall then rises over a
  // few px, and a step in its outline is rounded.
  vec3 softHeight(vec2 at) {
    vec2 g = at * uGrid - 0.5;
    vec2 base = floor(g + 0.5);
    float s2 = uSoft * uSoft;
    float sum = 0.0;
    float weight = 0.0;
    vec2 sumD = vec2(0.0);
    vec2 weightD = vec2(0.0);
    for (int j = -4; j <= 4; j++) {
      for (int i = -4; i <= 4; i++) {
        vec2 cell = base + vec2(float(i), float(j));
        vec2 d = cell - g;
        float w = exp(-dot(d, d) / (2.0 * s2));
        float h = heightAt((clamp(cell, 0.0, uGrid - 1.0) + 0.5) / uGrid);
        sum += w * h;
        weight += w;
        sumD += w * h * d / s2;
        weightD += w * d / s2;
      }
    }
    return vec3(sum / weight, (sumD * weight - sum * weightD) / (weight * weight));
  }
  void main() {
    vec2 c = 0.5 + (uv - 0.5) * uCrop;
    vUv = vec2(c.x, mix(c.y, 1.0 - c.y, uFlip));
    float h = heightAt(vUv);
    vSoftNormal = vec3(0.0, 1.0, 0.0);
    if (uSoft > 0.0) {
      vec3 soft = softHeight(vUv);
      h = soft.x;
      // Slope of the drawn surface: per px of the grid -> per unit of the
      // plane (x to the right, z towards the viewer, which is down the grid).
      float perUnit = uGain * uGrid * uCrop;
      vSoftNormal = normalize(vec3(-soft.y * perUnit, 1.0, soft.z * perUnit * (1.0 - 2.0 * uFlip)));
    }
    vec3 p = position;
    p.y += h * uGain;
    vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  }
`,vM=`
  precision highp float;
  uniform sampler2D uTex;
  uniform vec3 uColor, uShade, uEye;
  uniform float uStale, uStaleGrey, uSoft, uFill;
  varying vec2 vUv;
  varying vec3 vWorld;
  varying vec3 vSoftNormal;
  void main() {
    vec3 t = normalize(texture2D(uTex, vUv).xyz);
    // Image x, y (down), z (to the camera)  ->  world x, z, y (up).
    vec3 n = normalize(vec3(t.x, t.z, t.y));
    if (uSoft > 0.0) {
      // A smoothed surface is lit by its own slope, as it is drawn.
      n = normalize(vSoftNormal);
    }
    // A low light from the far left over a soft fill: a flat plate is an even
    // mid tone, a slope towards the light brightens, one away from it darkens.
    vec3 l = normalize(vec3(-0.62, 0.42, -0.5));
    vec3 v = normalize(uEye - vWorld);
    float flatLit = l.y;
    float shade = clamp(0.5 + 1.15 * (dot(n, l) - flatLit), 0.08, 1.0);
    if (uFill > 0.0) {
      // A wall turned from the light is still seen: a floor that follows how
      // far it faces the viewer.
      shade = max(shade, uFill * (0.5 + 0.5 * max(dot(n, v), 0.0)));
    }
    float spec = pow(max(dot(n, normalize(l + v)), 0.0), 30.0);
    vec3 col = mix(uShade, uColor, shade) + vec3(0.18) * spec;
    col = mix(col, vec3(dot(col, vec3(0.299, 0.587, 0.114))) * uStaleGrey, uStale);
    gl_FragColor = vec4(col, 1.0);
  }
`;function yM(n,e){let t=n.off??0,i;if(n.kind===yt.ball)i=new De(new Fr(n.a,48,32),e),i.position.y=n.a+t;else if(n.kind===yt.cylinder)i=new De(new oi(n.a,n.a,n.b*2,40),e),i.rotation.z=Math.PI/2,i.position.y=n.a+t;else if(n.kind===yt.box)i=new De(new ai(n.a*2,2.4,n.b*2,3,Math.max(n.c??.15,.05)),e),i.position.y=1.2+t;else if(n.kind===yt.torus)i=new De(new Hs(n.a,n.b,24,72),e),i.rotation.x=Math.PI/2,i.position.y=n.b+t;else if(n.kind===yt.cone){let r=n.a*n.b;i=new De(new ta(n.b,r,48),e),i.rotation.x=Math.PI,i.position.y=r/2+t}else if(n.kind===yt.thread){i=new un;let r=new De(new oi(n.a,n.a,n.c*2,40),e);r.rotation.z=Math.PI/2,i.add(r);for(let o=-n.c+n.b/2;o<n.c;o+=n.b){let a=new De(new Hs(n.a+.02,.2,10,48),e);a.rotation.y=Math.PI/2+.33,a.position.x=o,i.add(a)}i.position.y=n.a+.22+t}else if(n.kind===yt.corner)i=new De(new ai(6.5,6.5,6.5,4,.45),e),i.quaternion.setFromUnitVectors(new L(1,1,1).normalize(),new L(0,1,0)),i.position.y=6.5*Math.sqrt(3)/2+t-.3;else if(n.kind===yt.disc)i=new De(new oi(n.a,n.a,1.8,40),e),i.position.y=.9+t;else{let r=new zs,o=n.a/Math.cos(Math.PI/6);for(let l=0;l<6;l+=1){let c=Math.PI/6+l*Math.PI/3;r[l?"lineTo":"moveTo"](o*Math.cos(c),o*Math.sin(c))}if(r.closePath(),n.c>0){let l=new Zi;l.absarc(0,0,n.c,0,Math.PI*2,!0),r.holes.push(l)}let a=new Dr(r,{depth:2.2,bevelEnabled:!1,curveSegments:32});a.rotateX(-Math.PI/2),i=new De(a,e),i.position.y=t}let s=new un;return s.add(i),s.position.set(n.x??0,0,n.y??0),s.rotation.y=-(n.angle??0),s}function MM(n){n.traverse(e=>e.geometry?.dispose()),n.clear()}function qd(n,{preserve:e=!1,theme:t}={}){let i=new Ko({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:e});i.setPixelRatio(1),i.localClippingEnabled=!0;let s=Od(i,{manual:Wt.manual}),r=new Vt,o=new ks(i);r.environment=o.fromScene(new ga,.04).texture,o.dispose();let a=new Nt(28,Lt/Rt,.5,2e3),l=new Nr(16777215,1.5);l.position.set(30,60,40),r.add(l);let c=new Nr(16777215,.5);c.position.set(-50,25,10),r.add(c);let u=pd({width:Lt,height:Rt});r.add(u.mesh);let d=new un;r.add(d);let p=Zc({roughness:.38,metalness:.25,clearcoat:.8}),m=new De(new ai(au,Ma,au,6,2.4),p);m.position.y=-li-Ma/2+.6,m.renderOrder=4,d.add(m);let g=Zc({roughness:.08,metalness:0,clearcoat:1,color:12375270}),v=new De(new ai(Un+.5,li,Un+.5,3,.5),g);v.position.y=-li/2-.03,v.renderOrder=3,d.add(v);let f=new Cn({roughness:.45,metalness:.35,transparent:!0}),h=new zs,w=au/2-.9,E=Un/2+1.9;h.moveTo(-w,-w),h.lineTo(w,-w),h.lineTo(w,w),h.lineTo(-w,w),h.closePath();let S=new Zi;S.moveTo(-E,-E),S.lineTo(-E,E),S.lineTo(E,E),S.lineTo(E,-E),S.closePath(),h.holes.push(S);let H=new Dr(h,{depth:1.2,bevelEnabled:!0,bevelSize:.3,bevelThickness:.3,bevelSegments:3});H.rotateX(Math.PI/2);let C=new De(H,f);C.position.y=-li+1.6,d.add(C);let R={uMembrane:{value:s.textures.membrane},uImage:{value:s.textures.image},uCoat:{value:new Re(9279142)},uSide:{value:14},uDent:{value:1},uOpacity:{value:1},uInside:{value:1.6},uLit:{value:1}},U=new Pt(Un,Un,159,159);U.rotateX(-Math.PI/2);let T=new De(U,new it({vertexShader:cM,fragmentShader:uM,uniforms:R,side:ln,transparent:!0}));T.renderOrder=2,d.add(T);let M=[];for(let x=0;x<6;x+=1){let A=new Cn({roughness:.4,metalness:0,emissiveIntensity:1,transparent:!0}),k=new De(new ai(8.4,1.5,1.1,2,.4),A);k.visible=!1,d.add(k),M.push(k)}let I=new un;I.visible=!1,d.add(I);let W=new Gn(new Float32Array([0,0,0,0]),1,1,xt,St);W.needsUpdate=!0;let G=(x,A)=>({uHeights:{value:W},uTint:{value:new Re},uLine:{value:new Re},uDir:{value:new ie(Math.cos(x*Math.PI/180),Math.sin(x*Math.PI/180))},uPitch:{value:sM},uSide:{value:30},uOpacity:{value:1},uClear:{value:.1},uSheen:{value:.5},uDent:{value:A},uLive:{value:A},uEdge:{value:1-A}}),X={top:G(18,1),plate:G(25.06,0)},K=new Pt(2*Ln,2*Ln,159,159);K.rotateX(-Math.PI/2);let j=new Pt(2*Ln,2*Ln,1,1);j.rotateX(-Math.PI/2);let $=x=>new it({vertexShader:hM,fragmentShader:dM,uniforms:x,side:ln,transparent:!0,depthWrite:!1}),Y=new De(j,$(X.plate));Y.scale.setScalar((Ln-.35)/Ln),Y.position.y=-1.2,Y.renderOrder=2;let fe=new De(K,$(X.top));fe.renderOrder=4;let ge={uGlass:{value:new Re},uBody:{value:.06},uRim:{value:.6},uEnds:{value:.5},uOpacity:{value:1}},Ae=new De(new oi(Ln+.25,Ln+.25,ba,120,1,!0),new it({vertexShader:fM,fragmentShader:pM,uniforms:ge,side:ln,transparent:!0,depthWrite:!1}));Ae.position.y=-ba/2,Ae.renderOrder=3;let ke=new De(new Hs(Ln+.25,.3,14,120),f);ke.rotation.x=Math.PI/2,ke.position.y=-.1,ke.renderOrder=5;let qe=[],J=1.1;qe.push(new ie(0,0));for(let x=0;x<=8;x+=1){let A=x/8*(Math.PI/2);qe.push(new ie(zd-J+J*Math.sin(A),-J+J*Math.cos(A)))}for(let x=0;x<=8;x+=1){let A=x/8*(Math.PI/2);qe.push(new ie(zd-J+J*Math.cos(A),-kd+J-J*Math.sin(A)))}qe.push(new ie(0,-kd));let oe=new De(new ea(qe,120),p);oe.position.y=-ba,oe.renderOrder=4,I.add(oe,Y,Ae,fe,ke);let Me=new Cn({roughness:.35,metalness:.6,transparent:!0}),me=new Vs({roughness:.05,metalness:.2,clearcoat:1,transparent:!0}),Pe=new un,ze=new De(new ai(8,2.6,8,3,.6),Me),Be=new De(new oi(2.4,2.8,2.8,40),Me);Be.position.y=2.5;let je=new De(new Fr(2,40,20,0,Math.PI*2,0,Math.PI/2),me);je.position.y=3.7,je.scale.y=.45,Pe.add(ze,Be,je);let ee=-li-Ma+3.4,ae=-ba-5.4;Pe.position.y=ee,d.add(Pe);let P=new Cn({roughness:.42,metalness:.45,transparent:!0,clippingPlanes:[new mn(new L(0,1,0),.03)]}),Te=new un;r.add(Te);let ce="",Se=new pa(i,new at(Lt,Rt,{samples:4,type:Gt}));Se.addPass(new ma(r,a));let de=new lu(new ie(Lt,Rt),.6,.45,.9);Se.addPass(de);let Fe=new Zs({uniforms:{tDiffuse:{value:null},tGlow:{value:null},uGlowOn:{value:1},uShoulder:{value:.62}},vertexShader:aM,fragmentShader:lM});Fe.uniforms.tGlow.value=de.glow,Fe.needsSwap=!1,Se.addPass(Fe),Se.writeBuffer.setSize(1,1);let D=new Vt,b=new Ht(0,Lt,Rt,0,-1,1),y=new Gn(new Float32Array([0,0,1,0]),1,1,xt,St);y.needsUpdate=!0;let _={},F={},N={uBg:{value:new Re},uLit:{value:new Re},uGround:{value:new Re}},B={uData0:{value:new Re},uData1:{value:new Re}};function te(x,A){let k={uMode:{value:0},uA:{value:y},uB:{value:y},uFlipA:{value:0},uFlipB:{value:0},uScale:{value:1},uOpacity:{value:0},uMark:{value:-1},uShow:{value:18},uStale:{value:0},uFrame:{value:0},uGain:{value:1},uSoft:{value:0},uSpacing:{value:1},uBlank:{value:0},...N,...B,...A},V=new De(new Pt(1,1),new it({vertexShader:mM,fragmentShader:gM,uniforms:k,transparent:!0,depthTest:!1,depthWrite:!1}));V.visible=!1,D.add(V),_[x]=k,F[x]=V}te("view",{uA:{value:s.textures.image}}),te("ref",{uA:{value:s.textures.reference}}),te("four",{uMode:{value:4},uA:{value:s.textures.gallery}}),te("err",{uMode:{value:2},uA:{value:s.textures.truth},uB:{value:s.textures.estimate},uFlipB:{value:1},uScale:{value:45}}),te("cal",{uMode:{value:3},uA:{value:s.textures.atlas}});let Z=["view","ref","four","err","cal"],ue=new Vt,le=new Nt(30,1,.1,100),se=new Pt(1,1,159,159);se.rotateX(-Math.PI/2);let ve=(x,A,k)=>({uTex:{value:x},uFlip:{value:A},uGain:{value:1},uAbs:{value:k},uCrop:{value:1},uColor:{value:new Re},uShade:{value:new Re},uEye:{value:new L},uStale:{value:0},uStaleGrey:{value:.5},uSoft:{value:0},uFill:{value:0},uChan:{value:0},uGrid:{value:Wr}}),pe={rel:ve(s.textures.estimate,1,0),tru:ve(s.textures.truth,0,1),mem:ve(W,0,0)},Ce={};for(let x of["rel","tru","mem"]){let A=new De(se,new it({vertexShader:xM,fragmentShader:vM,uniforms:pe[x]}));A.frustumCulled=!1,ue.add(A),Ce[x]=A}let ye=new Re,Ue={sitr:{color:new Re,shade:new Re},skin:{color:new Re,shade:new Re}},He=1,Ye=!0;function z(x){let A=V=>new Re(V);Ye=x.dark,r.background=A(x.bg),u.setTheme(x),p.color.copy(A(x.bg).lerp(A(x.ink3),x.dark?.06:.6)),p.userData.rimColor.value.copy(x.dark?A(x.ink3):A("#000000")),g.userData.rimColor.value.copy(x.dark?A(x.ink2):A("#000000")),f.color.copy(x.dark?A("#161c28"):A("#3a4250")),Me.color.copy(x.dark?A("#1a2130"):A("#39404c")),me.color.copy(x.dark?A("#0a1830"):A("#1b2a44")),P.color.copy(x.dark?A("#aab3c2"):A("#6f7888")),R.uCoat.value.copy(x.dark?A("#6b7484"):A("#8a93a3")),X.top.uLine.value.copy(x.dark?A("#dfe7f2"):A("#1c2430")),X.plate.uLine.value.copy(x.dark?A("#c2cddd"):A("#39424f"));for(let V of Object.values(X))V.uTint.value.copy(x.dark?A("#9fc0de"):A("#7f97b4")),V.uClear.value=x.dark?.08:.12;ge.uGlass.value.copy(x.dark?A("#cfe0f7"):A("#5d6f8a")),ge.uBody.value=x.dark?.05:.1,ge.uRim.value=x.dark?.55:.6,ge.uEnds.value=x.dark?.5:.55,N.uBg.value.copy(A(x.bg)),N.uLit.value.copy(A(x.ink)),B.uData0.value.copy(A(x.bg)),B.uData1.value.copy(A(x.ink)),Ue.sitr.color.copy(A(x.ink).lerp(A(x.accent),.55)),Ue.sitr.shade.copy(A(x.bg).lerp(A(x.accent),.1));let k=getComputedStyle(document.documentElement).getPropertyValue("--skin").trim()||x.accent;Ue.skin.color.copy(A(x.ink).lerp(A(k),.55)),Ue.skin.shade.copy(A(x.bg).lerp(A(k),.1)),pe.rel.uColor.value.copy(Ue.sitr.color),pe.rel.uShade.value.copy(Ue.sitr.shade);for(let V of["tru","mem"])pe[V].uColor.value.copy(A(x.ink)),pe[V].uShade.value.copy(A(x.bg).lerp(A(x.ink),.1));ye.copy(A(x.bg).lerp(A(x.ink3),x.dark?.05:.08)),N.uGround.value.copy(ye).convertLinearToSRGB(),s.setBackground(x.bg),r.environmentIntensity=x.dark?.9:.55,l.intensity=x.dark?1.5:1.1,c.intensity=x.dark?.5:.35,He=x.glow,Fe.uniforms.uShoulder.value=x.dark?.62:1}z(t);let be={...Xr},q=null,ne=1;function _e(x){let A=new L(x.tx,x.ty,x.tz),k=new L(Math.cos(x.el)*Math.sin(x.az),Math.sin(x.el),Math.cos(x.el)*Math.cos(x.az)),V=Or.degToRad(x.fov)/2,O=iM*Rt/(Math.max(x.size,1)*Math.tan(V));a.fov=x.fov,a.position.copy(A).addScaledVector(k,O),a.up.set(0,1,0),a.lookAt(A),a.near=Math.max(.5,O*.02),a.far=O+600,a.setViewOffset(Lt,Rt,Lt/2-x.sx,Rt/2-x.sy,Lt,Rt),a.updateProjectionMatrix(),a.updateMatrixWorld()}function xe(x){MM(Te);for(let A of x.object.prims)Te.add(yM(A,P))}function We(x){be={...x};let A=ou(x),k=!!A.sensor.moire,V=A.sensor.fov,O=k?V/(2*Ln):V/Un;_e(x);let Q=Or.clamp(x.visible,0,1);q=A,d.rotation.y=x.ry,d.visible=Q>.001,d.scale.setScalar(O),R.uSide.value=V,R.uDent.value=1/O,R.uOpacity.value=Q,R.uInside.value=1.2+.8*(1-x.shell),R.uLit.value=Or.clamp(x.lights,0,1),p.opacity=Q*x.shell*.92,p.depthWrite=x.shell>.97,p.userData.rim.value=Q*(.22+.08*(1-x.shell)),g.opacity=Q*.16,g.depthWrite=!1,g.userData.rim.value=Q*.18,f.opacity=Q,Me.opacity=Q,me.opacity=Q,m.visible=!k,v.visible=!k,T.visible=!k,C.visible=!k,I.visible=k&&Q>.001,Pe.position.y=k?ae:ee,ge.uOpacity.value=Q;let re=k?s.moire():null;if(re){for(let Oe of Object.values(X))Oe.uHeights.value=re.heights,Oe.uSide.value=V,Oe.uOpacity.value=Q;X.top.uDent.value=1/O}let we=A.sensor.lights,Le=A.sensor.mode==="map"?[[1,.12,.1],[.12,1,.18],[.16,.3,1]]:we.map(Oe=>Oe.color);M.forEach((Oe,_t)=>{let Qe=we[_t];if(Oe.visible=!!Qe&&Q>.001,!Qe)return;let Ie=nu(Qe.az,Qe.el),qt=Math.hypot(Ie.x,Ie.y)||1,et=Ie.x/qt,$t=Ie.y/qt;Oe.position.set(et*(Un/2+1.2),-li/2+.1,$t*(Un/2+1.2)),Oe.rotation.y=Math.atan2(et,$t);let sn=Le[_t]??[1,1,1];Oe.material.color.setRGB(sn[0]*.25,sn[1]*.25,sn[2]*.25),Oe.material.emissive.setRGB(sn[0],sn[1],sn[2]),Oe.material.emissiveIntensity=(.04+1.8*x.lights)*Q,Oe.material.opacity=Q});let Ve=`${A.objectKey}|${A.calib}`;Ve!==ce&&(xe(A),ce=Ve);let Xe=x.object*Q;Te.visible=Xe>.001,P.opacity=Xe,P.emissive.setRGB(.25*x.hot,.3*x.hot,.1*x.hot),Te.position.set(A.pose.x,-A.depth,A.pose.y),P.clippingPlanes[0].constant=k?100:.03,Te.rotation.y=-A.pose.rot,x.ry!==0&&(Te.position.applyAxisAngle(new L(0,1,0),x.ry),Te.rotation.y+=x.ry),u.update({x:x.sx,y:x.sy,radius:x.size,amount:x.backdrop*Q}),de.strength=x.bloom*He,de.enabled=de.strength>.001,Fe.uniforms.uGlowOn.value=de.enabled?1:0;for(let Oe of Z){let _t=Or.clamp(x[Oe],0,1),Qe=F[Oe];Qe.visible=_t>.001;let Ie=x[`${Oe}S`],qt=Ie*(Gd[Oe]??1);Qe.scale.set(Ie,qt,1),Qe.position.set(x[`${Oe}X`]+Ie/2,Rt-(x[`${Oe}Y`]+qt/2),0),_[Oe].uOpacity.value=_t}_.cal.uMark.value=Math.round(x.calMark),_.cal.uShow.value=k&&x.sitrOnSkin<.5?0:Math.round(x.calShow),_.four.uMark.value=Math.round(x.fourMark),_.view.uA.value=re?re.images:s.textures.image,_.view.uMode.value=re?5:0,_.view.uFrame.value=re?Gr/V:0,_.view.uGain.value=re?Vd:1,_.ref.uA.value=re?re.images:s.textures.reference,_.ref.uMode.value=re?5:0,_.ref.uFrame.value=0,_.ref.uGain.value=re?Vd:1;let Ne=k&&x.sitrOnSkin>.5,$e=k&&!Ne?Ue.skin:Ue.sitr;pe.rel.uColor.value.copy($e.color),pe.rel.uShade.value.copy($e.shade),pe.rel.uStaleGrey.value=k&&!Ne?.68:.5,_.err.uA.value=re?re.truth:s.textures.truth,_.err.uSoft.value=re?Sa.soft:0,_.err.uSpacing.value=re?re.field/Wr:1,pe.tru.uTex.value=re?re.truth:s.textures.truth;let ct=re?re.field:V;for(let Oe of["rel","tru"])pe[Oe].uGain.value=Bd/Gr,pe[Oe].uCrop.value=Math.min(Gr/ct,1),pe[Oe].uSoft.value=re?Sa.soft:0,pe[Oe].uFill.value=re?Sa.fill:0;if(re){let Oe=pe.mem;Oe.uTex.value=re.heights,Oe.uChan.value=1,Oe.uGrid.value=re.grid,Oe.uGain.value=Bd/Gr,Oe.uCrop.value=Gr/V,Oe.uSoft.value=1,Oe.uFill.value=Sa.fill}}function lt(x,A=be){if(A[x]<=.02)return null;let k=A[`${x}S`],V=k*(Gd[x]??1),O=Hd[x],Q=O[Math.min(Math.round(A[`${x}Title`]??0),O.length-1)],re=s.reader();if(x==="ref"&&q&&q.sensor.moire)Q=Hd.view[0];else if(x==="mem")Q=`Membrane at ${(re.pressures??[A.kpa])[0].toFixed(1).padStart(4,"\u2007")} kPa \xB7 simulated`;else if(re.moire){let we=oM[x];typeof we=="string"?Q=we:we&&(Q=re.status.model!=="ready"?we.waiting:re.status.fresh?we.ready:we.stale)}else if(x==="rel"||x==="err"){let we=s.status;we.model!=="ready"?Q=x==="rel"?"Shape \xB7 SITR not loaded":"Angle \xB7 SITR not loaded":we.fresh||(Q=x==="rel"?"Shape \xB7 updating\u2026":"Angle \xB7 updating\u2026")}return{name:x,x0:A[`${x}X`],y0:A[`${x}Y`],x1:A[`${x}X`]+k,y1:A[`${x}Y`]+V,amount:A[x],title:Q}}function Tt(x){let A=lt(x);if(!A)return;let k=Math.round(A.x0*ne),V=Math.round((Rt-A.y1)*ne),O=Math.round((A.x1-A.x0)*ne),Q=Math.round((A.y1-A.y0)*ne);i.setViewport(k,V,O,Q),i.setScissor(k,V,O,Q),i.setScissorTest(!0),i.setClearColor(ye,1),i.clear(!0,!0,!1),le.position.set(0,1.22,1.78),le.lookAt(0,.03,.02),le.updateMatrixWorld(),pe[x].uEye.value.copy(le.position);for(let[re,we]of Object.entries(Ce))we.visible=re===x;i.render(ue,le),i.setScissorTest(!1)}function rt(){let x=be,A=x.rel>.02||x.err>.02;s.update(x,{wantAtlas:x.cal>.02,wantEstimate:A,wantGallery:x.four>.02,wantReference:x.ref>.02});let k=s.reader().status,V=k.fresh?0:1;_.err.uStale.value=V,_.err.uBlank.value=k.model==="ready"?0:1,pe.rel.uStale.value=V,Se.render();let O=i.autoClear;i.autoClear=!1,i.setRenderTarget(null),i.setViewport(0,0,Lt*ne,Rt*ne),i.render(D,b),Tt("rel"),Tt("tru"),Tt("mem"),i.setViewport(0,0,Lt*ne,Rt*ne),i.autoClear=O}function nn(x,A){i.setSize(x,A,!1),Se.setSize(x,A),Se.writeBuffer.setSize(1,1),ne=x/Lt}let Qt=new L;function eo(x){return Qt.copy(x).project(a),{x:(Qt.x+1)/2*Lt,y:(1-Qt.y)/2*Rt,behind:Qt.z>1}}function to(x){let A=(q?q.sensor.fov:Un)/Un,k=Un,V=O=>O.multiplyScalar(A).applyAxisAngle(new L(0,1,0),be.ry);switch(x){case"camera":return V(new L(0,-li-Ma+6,0));case"light":{let O=M.find(Q=>Q.visible)??M[0];return V(new L(O.position.x,-li/2,O.position.z))}case"gel":return V(new L(k*.5,-li/2,k*.2));case"membrane":return V(new L(-k*.3,0,k*.3));case"object":return new L(Te.position.x,Te.position.y+2,Te.position.z);default:return new L(0,0,0)}}function Zn(){return null}let us=new aa,cr=new ie,no=new mn(new L(0,1,0),0),fi=new L;function io(x,A){return cr.set(x/Lt*2-1,1-A/Rt*2),us.setFromCamera(cr,a),us.ray.intersectPlane(no,fi)?{x:fi.x,y:fi.z}:null}let hs={sensor:d,object:Te},pi=new L;function so(x){let A=1/0,k=1/0,V=-1/0,O=-1/0;return x.updateWorldMatrix(!0,!0),x.traverseVisible(Q=>{let re=Q.isMesh?Q.geometry.attributes.position:null,we=re?Math.max(1,Math.floor(re.count/400)):1;for(let Le=0;re&&Le<re.count;Le+=we){if(pi.fromBufferAttribute(re,Le).applyMatrix4(Q.matrixWorld).applyMatrix4(a.matrixWorldInverse),pi.z>-a.near)continue;pi.applyMatrix4(a.projectionMatrix);let Ve=(pi.x+1)/2*Lt,Xe=(1-pi.y)/2*Rt;A=Math.min(A,Ve),k=Math.min(k,Xe),V=Math.max(V,Ve),O=Math.max(O,Xe)}}),V>A?{x0:A,y0:k,x1:V,y1:O}:null}function ro(){return rM.map(x=>lt(x)).filter(Boolean)}function Ua(){return[...Object.entries(hs).filter(([,A])=>A.visible).map(([A,k])=>({name:A,...so(k)})).filter(A=>A.x1>A.x0),...ro().map(({name:A,x0:k,y0:V,x1:O,y1:Q})=>({name:A,x0:k,y0:V,x1:O,y1:Q}))]}async function La(){let x=i.getRenderTarget();We({...Xr,view:1,ref:1,four:1,rel:1,tru:1,err:1,cal:1,depth:.8});let A=new Pt(2,2),k=new Vt;for(let O of[de.materialHighPassFilter,...de.separableBlurMaterials,de.compositeMaterial,Fe.material])k.add(new De(A,O));let V=new Ht(-1,1,1,-1,0,1);i.setRenderTarget(Se.readBuffer),await i.compileAsync(r,a),i.setRenderTarget(null),await i.compileAsync(k,V),await i.compileAsync(D,b),await i.compileAsync(ue,le),i.setRenderTarget(x),A.dispose(),We({...Xr})}return{setSize:nn,applyState:We,render:rt,project:eo,anchor:to,cover:Zn,pick:io,subjectRect:Ua,windows:ro,warmUp:La,setTheme:z,renderer:i,camera:a,live:s,describe:()=>q}}var $d=["script","yields","pointer","wheel","transition","stage","hint","focus","crop","testPoint","sound"],bM=Object.fromEntries(Xd.map(n=>[n,[0,1e-4]])),ir=Object.fromEntries(Mn.map((n,e)=>[n,e])),rr=Object.fromEntries(Wn.map((n,e)=>[n,e])),jd={az:.62,el:.4,size:520,sx:1340,sy:600,ty:-8},Pi={az:.55,el:.42,size:470,sx:1010,sy:590,ty:-7},Yd={az:.45,el:-.5,size:600,sx:1240,sy:440,ty:-3,shell:.06},cu={...Pi,sx:500,sy:735,size:265},Kd={view:[.3,.7],four:[.3,.7]},ht=(n,e,t,i)=>({[n]:1,[`${n}X`]:e,[`${n}Y`]:t,[`${n}S`]:i}),ss={obj:rr.screw,depth:1.5},Zd={obj:rr.ball,depth:.9},uu={...Pi,sx:980,size:400,...ss,shell:.3,...ht("ref",1270,300,270),...ht("view",1580,300,270),viewTitle:1},sr={...Pi,sx:825,sy:760,size:270,...ss,...ht("view",1e3,190,270),...ht("cal",1e3,560,270)},Jd={...Pi,sx:760,sy:600,size:430,shell:.35,...ht("cal",1190,220,600)},ef={hero:{...jd,obj:rr.ball,depth:-4,script:"spin",stage:{view:[0,.7]}},hookOne:{...cu,...ss,sensor:ir.mini,...ht("view",1100,220,520)},hookSwap:{...cu,...ss,...ht("view",1100,220,520),script:"cycleSensors",stage:Kd},hookReal:{...cu,...ss,sensor:ir.mini,...ht("four",860,230,944),stage:Kd},paintGel:{...Pi,obj:rr.ball,script:"pressIn",lights:.5,...ht("tru",1400,240,420),truTitle:1,stage:{four:[.15,.6],tru:[.35,.8]}},paintLights:{...Yd,...Zd,lights:1},paintCamera:{...Yd,sx:1090,size:540,...Zd,...ht("view",1500,170,280)},paintPress:{...Pi,shell:.3,obj:rr.ball,depth:.8,...ht("view",1400,240,420),pointer:"press",wheel:{key:"depth",min:0,max:1.8,rate:-.0015},hint:"Move over the pad to slide the object \xB7 scroll to press",testPoint:[1010,495]},differLights:{...uu,script:"sweepLights",yields:["tEl"],wheel:{key:"tEl",min:-6,max:30,rate:-.02,start:0},hint:"Scroll to raise or lower the lights"},differGel:{...uu,script:"sweepGel",yields:["tSoft"],wheel:{key:"tSoft",min:.1,max:1.6,rate:-.001,start:.77},hint:"Scroll to change the gel"},differCamera:{...uu,script:"sweepFov",yields:["tFov"],wheel:{key:"tFov",min:11,max:17.5,rate:-.006,start:14.1},hint:"Scroll to widen or narrow the view"},calBall:{...Jd,script:"calibrateBall"},calCorner:{...Jd,script:"calibrateCorner"},modelIn:{...sr},modelOut:{...sr,...ht("rel",1560,150,290),...ht("tru",1560,530,290)},modelSwap:{...sr,...ht("rel",1560,150,290),...ht("tru",1560,530,290),...ht("four",120,520,520),script:"cycleFour"},skinSee:{...Pi,sx:1040,size:430,shell:.3,...ss,sensor:ir.moireskin,...ht("ref",1400,240,420),stage:{view:[0,.4],cal:[0,.4],rel:[0,.4],tru:[0,.4],four:[0,.4],ref:[.5,1]},pointer:"press",wheel:{key:"depth",min:0,max:1.8,rate:-.0015},hint:"Move over the membrane to slide the object \xB7 scroll to press",testPoint:[1040,498]},skinSitr:{...sr,sy:740,size:230,sensor:ir.moireskin,sitrOnSkin:1,...ht("rel",1530,150,290),...ht("tru",1530,530,290),stage:{ref:[0,.4],view:[.45,.9],cal:[.45,.9],rel:[.55,1],tru:[.55,1]}},skinOwn:{...sr,sy:740,size:230,sensor:ir.moireskin,cal:0,...ht("rel",1530,150,290),...ht("tru",1530,530,290)},skinAir:{...sr,sy:740,size:230,sensor:ir.moireskinAir,cal:0,...ht("rel",1530,150,290),...ht("tru",1530,530,290),...ht("mem",1e3,560,270),script:"breathe",yields:["kpa"],wheel:{key:"kpa",min:0,max:16,rate:-.012,start:4},hint:"Scroll to change the air pressure \xB7 0 to 16 kPa"},sandbox:{...Pi,sandbox:1,sx:940,sy:668,size:340,shell:.3,...ss,...ht("view",1170,110,280),...ht("rel",1520,110,280),...ht("err",1170,478,280),...ht("tru",1520,478,280),pointer:"press",wheel:{key:"depth",min:0,max:1.8,rate:-.0015},hint:"Move over the pad to slide the object \xB7 scroll to press",testPoint:[940,595]},credits:{...jd,sx:1480,size:480,obj:rr.ball,depth:-4,script:"spin"}},hu=n=>n*n*(3-2*n),du=n=>Math.min(Math.max(n,0),1),SM={spin:n=>({ry:n*.12}),pressIn:n=>({depth:-3+3.9*hu(du((n-.4)/2.2))}),cycleSensors:n=>({sensor:Math.floor(n/2.8)%4}),cycleFour:n=>{let e=Math.floor(n/3.4)%4;return{sensor:e,fourMark:e}},sweepLights:n=>({tEl:12-12*Math.cos(n*.7)}),sweepGel:n=>({tSoft:.85-.6*Math.cos(n*.7)}),sweepFov:n=>({tFov:15.2-1.8*Math.cos(n*.6)}),breathe:n=>({kpa:2*Math.round(4-4*Math.cos(n*.25))}),calibrateBall:n=>Qd(n,0),calibrateCorner:n=>Qd(n,9)};function Qd(n,e){if(n>=9*1.1)return{calib:e+8,calibIn:0,calMark:-1,calShow:e+9};let i=Math.floor(n/1.1),s=(n-i*1.1)/1.1,r=hu(du(s/.3))*(1-hu(du((s-.8)/.2))),o=s>=.3;return{calib:e+i,calibIn:r,calMark:o?e+i+1:-1,calShow:e+i+(o?1:0)}}function Ii(n,e){let t=ef[n]??{},i={...Xr};for(let[s,r]of Object.entries(t))$d.includes(s)||(i[s]=r);return e!==null&&t.script&&Object.assign(i,SM[t.script](e)),i}function ci(n){let e=ef[n]??{},t=Object.fromEntries($d.map(i=>[i,e[i]??null]));return t.stage={...bM,...e.stage??{}},t}var pu={};Vf(pu,{FIXTURES:()=>wM,debug:()=>wa,finalize:()=>EM,overlay:()=>CM,pointers:()=>AM,readouts:()=>_M,setup:()=>IM,widgets:()=>PM});var wM=["view","ref","four","rel","tru","err","cal","object"],fu=null,Ze={sensor:0,obj:Wn.indexOf("screw"),seed:7,tEl:0,tSoft:0,tFov:0,tKs:-1,kpa:4,px:0,py:0,touched:!1};function EM(n){let e={...n,tick:fu?fu.live.tick():0};return n.sandbox>.5&&(e.sensor=Ze.sensor,e.obj=Ze.obj,e.seed=Ze.seed,e.tEl=Ze.tEl,e.tSoft=Ze.tSoft,e.tFov=Ze.tFov,e.tKs=Ze.tKs,e.kpa=Ze.kpa,Ze.touched&&(e.px=Ze.px,e.py=Ze.py)),e}function TM(n){let{name:e,moire:t,status:i}=n.reader();return i.model==="ready"?`${e} is running live \xB7 ${i.provider==="webgpu"?"on your GPU":"on your CPU (slow without WebGPU)"}`:i.model==="loading"?i.got>=i.total?`Starting ${e}\u2026`:`Loading ${e} \xB7 ${Math.round(i.got/1e6)} / ${Math.round(i.total/1e6)} MB`:i.model==="failed"?`${e} did not start in this browser`:i.model==="waiting"?t?`${e} loads now`:"SITR loads on your first click":`${e} is switched off`}var tf="";function _M(n,{scene:e}){let t=e.describe();if(!t)return{};if(t.sensor.moire){let s=`${e.live.moirePressures(t.sensor).join()}|${JSON.stringify(e.live.moireRange(t.sensor))}`;s!==tf&&(tf=s,wa.sync?.())}let i=t.sensor.lights.map(s=>s.el);return{model:TM(e.live),air:t.sensor.moire?`${(e.live.reader().pressures??[n.kpa??4])[0].toFixed(1)} kPa`:"",note:t.sensor.moire?"Trained on simulation \xB7 simulated air \xB7 shapes: framed 12 mm, \xD7 2":"Simulated picture \xB7 real model \xB7 heights \xD7 2",sensor:t.sensor.moire?`${t.sensor.label} \xB7 simulated`:t.sensor.madeUp?`Made up \xB7 ${t.sensor.label}`:`${t.sensor.label} \xB7 fitted`,object:t.object.label,depth:t.depth>0?`${t.depth.toFixed(2)} mm`:"lifted",field:`${t.sensor.fov.toFixed(1)} mm`,lights:i.length?`${Math.round(i.reduce((s,r)=>s+r,0)/i.length)}\xB0`:"none",skirt:t.sensor.moire?"none":`${t.sensor.softness.toFixed(2)} mm`,seed:Math.round(n.obj)>=is?`#${Math.round(n.seed)}`:""}}var AM={press:{hits(n,{scene:e,pointer:t}){if(!t.inside)return null;let i=e.describe(),s=e.pick(t.x,t.y),r=i?i.sensor.fov*.5:7;if(i&&i.sensor.reach&&s){let o=i.sensor.reach;return Math.hypot(s.x,s.y)<r*1.1?{x:Math.min(Math.max(s.x,-o),o),y:Math.min(Math.max(s.y,-o),o)}:null}return s&&Math.abs(s.x)<r*1.15&&Math.abs(s.y)<r*1.15?{x:Math.min(Math.max(s.x,-r*.9),r*.9),y:Math.min(Math.max(s.y,-r*.9),r*.9)}:null},hand(n,e){return n.sandbox>.5&&(Ze.px=e.x,Ze.py=e.y,Ze.touched=!0),{px:e.x,py:e.y,hot:1}},idle(n){return{...n,hot:0}}}},RM=12.9;function CM(n,{scene:e}){let t="";for(let i of e.windows()){let s=Math.min(Math.max(i.amount,0),1).toFixed(3),r=e.describe()?.sensor.moire,o=Math.min(Math.round(i.title.length*RM+36),r?Math.round(1856-i.x0):1/0);if(t+=`<g opacity="${s}">
      <rect x="${(i.x0-1).toFixed(1)}" y="${(i.y0-1).toFixed(1)}" width="${(i.x1-i.x0+2).toFixed(1)}" height="${(i.y1-i.y0+2).toFixed(1)}" rx="6" fill="none" style="stroke:var(--line-strong);stroke-width:2"/>
      <rect x="${i.x0.toFixed(1)}" y="${(i.y1+14).toFixed(1)}" width="${o}" height="40" rx="20" fill="none" style="stroke:var(--line-strong);stroke-width:1.5"/>
      <text x="${(i.x0+18).toFixed(1)}" y="${(i.y1+42).toFixed(1)}" style="fill:var(--ink);font-size:24px;font-weight:700">${i.title}</text>`,i.name==="cal"&&i.x1-i.x0>500&&n.calShow>=0&&!e.live.reader().moire){let a=(i.x1-i.x0)/wt.cols,l=Vr(0);t+=`<text x="${(i.x0+(l.col+.5)*a).toFixed(1)}" y="${(i.y0+(l.row+1)*a+26).toFixed(1)}" text-anchor="middle" style="fill:var(--ink-2);font-size:24px;font-weight:600">empty</text>`}t+="</g>"}return t}var Sn={w:560,h:330},PM={slopes:{init(n){n.setAttribute("viewBox",`0 0 ${Sn.w} ${Sn.h}`),n.setAttribute("width",Sn.w),n.setAttribute("height",Sn.h),n.innerHTML=`
        <path data-part="object" style="fill:var(--line);stroke:var(--ink-3);stroke-width:2"/>
        <path data-part="flat" fill="none" style="stroke:var(--ink-2);stroke-width:5;stroke-linecap:round"/>
        <path data-part="left" fill="none" style="stroke:#ff5a52;stroke-width:7;stroke-linecap:round"/>
        <path data-part="right" fill="none" style="stroke:#5b8cff;stroke-width:7;stroke-linecap:round"/>
        <g data-part="rays" style="stroke-width:2;stroke-dasharray:3 7;fill:none">
          <path data-part="ray-left" style="stroke:#ff5a52"/>
          <path data-part="ray-right" style="stroke:#5b8cff"/>
        </g>
        <rect x="14" y="196" width="18" height="46" rx="6" style="fill:#ff5a52"/>
        <rect x="${Sn.w-32}" y="196" width="18" height="46" rx="6" style="fill:#5b8cff"/>
        <text x="14" y="276" style="fill:var(--ink-2);font-size:24px;font-weight:600">light</text>
        <text x="${Sn.w-14}" y="276" text-anchor="end" style="fill:var(--ink-2);font-size:24px;font-weight:600">light</text>
        <text x="${Sn.w/2}" y="34" text-anchor="middle" style="fill:var(--ink-2);font-size:24px;font-weight:600">object</text>
        <text x="60" y="150" style="fill:var(--ink-2);font-size:24px;font-weight:600">membrane</text>
        <g data-part="camera">
          <path d="M${Sn.w/2-34} 322 h68 v-22 h-18 l-8 -14 h-16 l-8 14 h-18 z" style="fill:none;stroke:var(--ink);stroke-width:2.5"/>
          <text x="${Sn.w/2+48}" y="316" style="fill:var(--ink);font-size:24px;font-weight:700">camera</text>
        </g>`},update(n,e){let t=Math.min(Math.max(e.depth,0),1.8),i=e.view>.5?1:0,s=`${t.toFixed(2)}|${i}`;if(n.dataset.key===s)return;n.dataset.key=s;let r=165,o=Sn.w/2,a=95,l=t*42,c=Math.sqrt(Math.max(a*a-(a-l)*(a-l),0)),u=v=>r+l-(a-Math.sqrt(Math.max(a*a-(v-o)*(v-o),0))),d=(v,f)=>{let h="";for(let w=0;w<=24;w+=1){let E=v+(f-v)*w/24;h+=`${w?"L":"M"}${E.toFixed(1)} ${u(E).toFixed(1)}`}return h},p=v=>n.querySelector(`[data-part="${v}"]`);p("object").setAttribute("d",`M${o-a} ${r+l-a} a${a} ${a} 0 1 0 ${2*a} 0 a${a} ${a} 0 1 0 ${-2*a} 0`),p("flat").setAttribute("d",`M60 ${r} L${(o-c).toFixed(1)} ${r} M${(o+c).toFixed(1)} ${r} L${Sn.w-60} ${r}`),p("left").setAttribute("d",c>2?d(o-c,o-2):""),p("right").setAttribute("d",c>2?d(o+2,o+c):"");let m=o-c*.55,g=o+c*.55;p("ray-left").setAttribute("d",c>2?`M34 214 L${m.toFixed(1)} ${(u(m)+5).toFixed(1)}`:""),p("ray-right").setAttribute("d",c>2?`M${Sn.w-34} 214 L${g.toFixed(1)} ${(u(g)+5).toFixed(1)}`:""),p("camera").setAttribute("opacity",i)}}};function IM({scene:n,stage:e}){fu=n,n.debug=wa;let t=()=>n.live.start();window.addEventListener("pointerdown",t,{once:!0,capture:!0}),window.addEventListener("keydown",t,{once:!0,capture:!0}),(navigator.webdriver||new URLSearchParams(location.search).get("model")==="auto")&&t();let i=document.getElementById("sandbox-controls");if(!i)return;for(let g of["click","keydown","wheel","pointerdown"])i.addEventListener(g,v=>v.stopPropagation());let s=i.querySelector("[data-pick='sensor']");Mn.forEach((g,v)=>{let f=document.createElement("button");if(f.type="button",f.textContent=ft[g].madeUp?`Made up ${v-3}`:ft[g].moire?ft[g].variety:ft[g].label,f.title=ft[g].moire?"Our own see-through sensor, read by its own model":ft[g].label,f.dataset.value=v,ft[g].moire&&(f.dataset.own=ft[g].variety,!s.querySelector(".own-row"))){let h=document.createElement("span");h.className="own-row";let w=document.createElement("span");w.className="own-label",w.textContent=`${ft[g].label} \xB7 air`,s.append(h,w)}s.append(f)});let r=i.querySelector("[data-slide='tSoft']").closest("label").querySelector("span"),o={min:"0.1",max:"1.6",step:"0.05"},a=i.querySelector("[data-pick='object']");Wn.filter(g=>g!=="corner").forEach(g=>{let v=document.createElement("button");v.type="button",v.textContent=zr[g].label,v.dataset.value=Wn.indexOf(g),a.append(v)});let l={tEl:i.querySelector("[data-slide='tEl']"),tSoft:i.querySelector("[data-slide='tSoft']"),tFov:i.querySelector("[data-slide='tFov']")},c=i.querySelector("[data-seed]"),u={tEl:i.querySelector("[data-out='tEl']"),tSoft:i.querySelector("[data-out='tSoft']"),tFov:i.querySelector("[data-out='tFov']")};function d(){let g=ft[Mn[Ze.sensor]];if(g.moire){u.tEl.textContent="no side lights",u.tSoft.textContent=p(g)?`${Ze.kpa.toFixed(1)} kPa`:`${n.live.moirePressures(g)[0].toFixed(1)} kPa \xB7 fixed`,u.tFov.textContent=`${g.fov.toFixed(0)} mm \xB7 fixed`;return}let v=g.lights.reduce((f,h)=>f+h.el,0)/g.lights.length;u.tEl.textContent=`${Math.round(v+Ze.tEl)}\xB0 up`,u.tSoft.textContent=`${(Ze.tSoft>0?Ze.tSoft:g.softness).toFixed(2)} mm skirt`,u.tFov.textContent=`${(Ze.tFov>0?Ze.tFov:g.fov).toFixed(1)} mm wide`}let p=g=>g.moire?n.live.moireRange(g):null;function m(){for(let h of s.querySelectorAll("button"))h.classList.toggle("on",Number(h.dataset.value)===Ze.sensor);for(let h of a.children)h.classList.toggle("on",Number(h.dataset.value)===Ze.obj);let g=ft[Mn[Ze.sensor]],v=!!g.moire,f=p(g);for(let[h,w]of Object.entries(l)){let E=v&&!(h==="tSoft"&&f);w.disabled=E,w.closest("label").classList.toggle("off",E)}i.querySelector("[data-reset]").disabled=v&&!f,r.textContent=v?"Air":"Gel",Object.assign(l.tSoft,v?{min:"0",max:"16",step:"0.5"}:o),l.tEl.value=v?l.tEl.min:Ze.tEl,l.tSoft.value=f?Ze.kpa:v?n.live.moirePressures(g)[0]:Ze.tSoft>0?Ze.tSoft:g.softness,l.tFov.value=Ze.tFov>0?Ze.tFov:g.fov,c.textContent=Ze.obj>=is?`seed ${Ze.seed}`:"",i.querySelector("[data-random]").classList.toggle("on",Ze.obj>=is),d()}s.addEventListener("click",g=>{let v=g.target.closest("button");v&&(Object.assign(Ze,{sensor:Number(v.dataset.value),tEl:0,tSoft:0,tFov:0,tKs:-1}),m())}),a.addEventListener("click",g=>{let v=g.target.closest("button");v&&(Object.assign(Ze,{obj:Number(v.dataset.value),px:0,py:0,touched:!1}),m())}),i.querySelector("[data-random]").addEventListener("click",()=>{Object.assign(Ze,{obj:is,seed:crypto.getRandomValues(new Uint32Array(1))[0]%1e6,px:0,py:0,touched:!1}),m()});for(let[g,v]of Object.entries(l))v.addEventListener("input",()=>{let f=ft[Mn[Ze.sensor]];if(f.moire){g==="tSoft"&&p(f)&&(Ze.kpa=Number(v.value),d());return}Ze[g]=Number(v.value),d()});i.querySelector("[data-reset]").addEventListener("click",()=>{Object.assign(Ze,{tEl:0,tSoft:0,tFov:0,tKs:-1,kpa:4,px:0,py:0,touched:!1}),m()}),m(),wa.sync=m}var wa={sandbox:Ze,sync:null};var UM={bg:"--bg",ink:"--ink",ink2:"--ink-2",ink3:"--ink-3",accent:"--accent",second:"--second",interf:"--interf",truth:"--truth",prior:"--prior",data0:"--data-0",data1:"--data-1",line:"--line",lineStrong:"--line-strong"};function mu(){let n=getComputedStyle(document.documentElement),e={name:document.documentElement.dataset.theme||"dark"};for(let[t,i]of Object.entries(UM))e[t]=n.getPropertyValue(i).trim();return e.glow=Number(n.getPropertyValue("--glow"))||0,e.dark=e.name!=="light",e}function nf(){let n=new URLSearchParams(location.search).get("theme");n&&(document.documentElement.dataset.theme=n)}var LM={paperclip:'<path d="M21.4 11.1l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',note:'<path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/>',strawberry:'<path d="M12 21.5C6.5 18 3.8 13.2 4.6 9.6 5.4 6.4 9 5.6 12 7.2c3-1.6 6.6-.8 7.4 2.4.8 3.6-1.9 8.4-7.4 11.9Z"/><path d="M8.6 4.6 12 7.2l3.4-2.6M12 7.2V3"/><path d="M9 11.2h.01M12 13.6h.01M15 11.2h.01M10.4 16h.01M13.6 16h.01" stroke-width="2.2"/>',apple:'<path d="M12 7.4C9.4 5.4 4.8 6.4 4.8 11.4c0 4.6 3 9.1 5.6 9.1.8 0 1.1-.5 1.6-.5s.8.5 1.6.5c2.6 0 5.6-4.5 5.6-9.1 0-5-4.6-6-7.2-4Z"/><path d="M12 7.4c0-2 .8-3.3 2.2-4.2"/><path d="M14.6 4.4c1.2-.9 2.6-.9 3.6-.4-.4 1.2-1.6 2-3 2"/>',coin:'<circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="5.2"/>',drop:'<path d="M12 3.4c3.6 4.3 6 7.4 6 10.6a6 6 0 0 1-12 0c0-3.2 2.4-6.3 6-10.6Z"/>',hair:'<path d="M9.5 2.5c4.6 3.1-3.6 6.4 1 9.5s-3.6 6.4 1 9.5"/><path d="M14.5 2.5c4.6 3.1-3.6 6.4 1 9.5" opacity="0.45"/>',grain:'<ellipse cx="12" cy="12" rx="3.6" ry="8.4" transform="rotate(38 12 12)"/><path d="M9.4 15.4c1.2-2.6 2.8-4.9 5.2-6.8" opacity="0.45"/>',sheet:'<path d="M4 7.5 14.5 4 20 6 9.5 9.5Z"/><path d="M4 7.5v1.2l5.5 2 10.5-3.5V6"/>',cube:'<path d="M12 3.6 20.4 7.8 12 12 3.6 7.8Z"/><path d="M3.6 7.8v8.2L12 20.2l8.4-4.2V7.8"/><path d="M12 12v8.2"/>',finger:'<path d="M8.4 21.5V8.1a3.6 3.6 0 0 1 7.2 0v13.4"/><path d="M10.2 8.3a1.8 1.8 0 0 1 3.6 0v2.9h-3.6Z"/><path d="M10.2 15.6h3.6"/>',marshmallow:'<rect x="5.5" y="11.6" width="6" height="7.8" rx="2.2" transform="rotate(-45 8.5 15.5)"/><rect x="12" y="5.1" width="6" height="7.8" rx="2.2" transform="rotate(-45 15 9)"/><path d="M2.6 21.4 6.4 17.6M10.6 13.4l2.3-2.3M17.1 6.9 21 3"/>',ruler:'<rect x="2.5" y="8.5" width="19" height="7" rx="1.2"/><path d="M6 8.5v3M9.5 8.5v2M13 8.5v3M16.5 8.5v2"/>',guitar:'<circle cx="8.6" cy="15.4" r="5.4"/><circle cx="8.6" cy="15.4" r="1.5"/><path d="M12.4 11.6 19.6 4.4M18 2.9l3.1 3.1"/>',door:'<rect x="6.5" y="2.8" width="11" height="18.4" rx="0.8"/><path d="M14.3 12h.01" stroke-width="2.4"/>',doorway:'<path d="M5 21V4h14v17"/><path d="M8 16.5h8M8 16.5l1.8-1.6M8 16.5l1.8 1.6M16 16.5l-1.8-1.6M16 16.5l-1.8 1.6"/>',person:'<circle cx="12" cy="5" r="2.3"/><path d="M12 7.6v7.2M8 10.4h8M12 14.8l-3 6.2M12 14.8l3 6.2"/>',clock:'<circle cx="12" cy="12" r="8.6"/><path d="M12 12V5.9M12 12l1.3-5.9"/>'},DM='fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';function gu(n,e={}){let t=e[n]??LM[n];return t?`<g ${DM}>${t}</g>`:""}function sf(n,e={}){for(let t of n.querySelectorAll("svg[data-icon]")){let i=gu(t.dataset.icon,e);i&&(t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("aria-hidden","true"),t.innerHTML=i)}}var Ea={left:96,right:190,top:44,bottom:86},rf={ours:"var(--accent)",prior:"var(--prior)",truth:"var(--truth)",interf:"var(--interf)",second:"var(--second)"},of=["","10 8","3 7","14 6 3 6"],or="url(#deck-grad) var(--accent)",Dt=n=>String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;");function cf(n,e=24){let t=0;for(let i of String(n))t+=i===" "?.28:i>"\u2E7F"?1:/[ilI.,:;·'’|!]/.test(i)?.3:/[mwMW@]/.test(i)?.9:/[frtj()\-–/]/.test(i)?.4:/[A-Z]/.test(i)?.69:/[0-9]/.test(i)?.64:.58;return t*e}function af(n,e,t,i,s){let r=cf(n)+32,o=i==="end"?e-r+16:e-r/2;return`<rect class="axis-capsule${s?" glow":""}" x="${o.toFixed(1)}" y="${(t-19).toFixed(1)}" width="${r.toFixed(1)}" height="38" rx="19"${s?` style="--c:${s}"`:""}/>`}var ar="paint-order:stroke;stroke:var(--bg);stroke-width:8px;stroke-linejoin:round";function FM(n,e=30){n.sort((t,i)=>t.y-i.y);for(let t=1;t<n.length;t+=1)n[t].y=Math.max(n[t].y,n[t-1].y+e);return n.map(t=>`<text class="series-label" x="${t.x.toFixed(1)}" y="${t.y.toFixed(1)}" dominant-baseline="middle" style="fill:${t.color};${ar}">${Dt(t.name)}</text>`).join("")}function xu(n,e,t){let[i,s]=n.domain;if(n.log){let r=Math.log10(i),o=Math.log10(s);return a=>e+(Math.log10(Math.max(a,i*.001))-r)/(o-r)*(t-e)}return r=>e+(r-i)/(s-i)*(t-e)}function lf(n,e){let t=rf[n.role]??rf.prior;n.tone==="soft"&&(t=`color-mix(in srgb, ${t} 55%, var(--bg))`);let i=n.dash??(n.role==="truth"?"8 8":n.role==="prior"?of[e%of.length]:""),s=n.role==="ours"&&n.tone!=="soft"?5:3.5;return{color:t,dash:i,width:s}}function NM(n,e,t){let{w:i,h:s}=e,r=e.y.anchors??{},o=Object.keys(r).length>0,a=!!e.capsules,l=e.y.format??(C=>C),c=Math.max(0,...(e.y.ticks??[]).map(C=>cf(l(C)))),u=a?Math.max(150,Math.ceil(c+64)):120,d=i-100,p=u+(o?270:40),m=40,g=s-(e.groups?.length?a?140:120:a?76:62),v=C=>(e.groups??[]).find(R=>C>=R.from&&C<=R.to),f=xu(e.y,g,m),h=e.ours?.grad===!1?"var(--accent)":or,w=`<line class="axis" x1="${u}" x2="${u}" y1="${m}" y2="${g}"/><line class="axis" x1="${u}" x2="${d}" y1="${g}" y2="${g}"/>`;w+=`<text class="axis-title" x="${u}" y="${m-18}">${Dt(e.y.label??"")}</text>`;for(let C of e.y.ticks??[]){let R=f(C);w+=`<line class="grid" x1="${u}" x2="${d}" y1="${R.toFixed(1)}" y2="${R.toFixed(1)}" stroke-dasharray="4 9"/>`;let U=u-(a?32:16);a&&(w+=af(l(C),U,R,"end")),w+=`<text class="tick-strong" x="${U}" y="${R.toFixed(1)}" text-anchor="end" dominant-baseline="middle">${Dt(l(C))}</text>`;let T=r[C];T&&(w+=`<g transform="translate(${u+16} ${(R-52).toFixed(1)}) scale(1.9)" style="color:var(--ink)">${gu(T.icon,t)}</g>`,w+=`<text class="tick-strong" x="${u+70}" y="${(R-16).toFixed(1)}">${Dt(T.label)}</text>`)}let E=(d-p)/e.columns.length,S=C=>p+E*(C+.5),H=(C,R,U,T,M)=>`<circle cx="${C.toFixed(1)}" cy="${R.toFixed(1)}" r="${M?16:13}" style="fill:${M?h:"var(--prior)"}"/><text class="${M?"series-label":"point-label"}" x="${(C+(T?-24:24)).toFixed(1)}" y="${R.toFixed(1)}" dominant-baseline="middle"${T?' text-anchor="end"':""} style="${M?`fill:${h};`:""}${ar}">${Dt(U)}</text>`;e.columns.forEach((C,R)=>{w+=`<g data-col="${R}">`,a?(w+=af(C.label,S(R),g+38,"middle",v(R)?.color),w+=`<text class="col-label" x="${S(R).toFixed(1)}" y="${g+38}" text-anchor="middle" dominant-baseline="middle">${Dt(C.label)}</text>`):w+=`<text class="col-label" x="${S(R).toFixed(1)}" y="${g+40}" text-anchor="middle">${Dt(C.label)}</text>`;let U=C.points.map(T=>({...T,py:f(T.y)})).sort((T,M)=>T.py-M.py);U.forEach((T,M)=>{let I=X=>X&&Math.abs(X.py-T.py)<32,W=I(U[M-1])&&!U[M-1].left;T.left=!W&&I(U[M+1]);let G=S(R)+(T.left?-18:W?18:0);w+=H(G,T.py,T.name,T.left,!1)}),w+="</g>"});for(let C of e.groups??[]){let R=p+E*C.from+26,U=p+E*(C.to+1)-26,T=(R+U)/2,M=g+(a?72:58),I=C.color??"var(--ink-2)";w+=`<g data-col="${C.to}"><path fill="none" style="stroke:${I};stroke-width:2.5;stroke-linecap:round" d="M${R} ${M}C${R} ${M+9} ${R} ${M+9} ${R+16} ${M+9}L${T-16} ${M+9}C${T} ${M+9} ${T} ${M+9} ${T} ${M+18}C${T} ${M+9} ${T} ${M+9} ${T+16} ${M+9}L${U-16} ${M+9}C${U} ${M+9} ${U} ${M+9} ${U} ${M}"/>`,w+=`<text class="group-label" x="${T.toFixed(1)}" y="${M+50}" text-anchor="middle" style="fill:${I}">${Dt(C.label)}</text></g>`}e.ours&&(w+=`<g data-col="ours">${H(S(e.ours.column),f(e.ours.y),e.ours.name,!1,!0)}</g>`),n.innerHTML=w}function uf(n,e,t={}){let{w:i,h:s}=e;if(n.setAttribute("viewBox",`0 0 ${i} ${s}`),n.setAttribute("width",i),n.setAttribute("height",s),n.classList.add("chart"),e.type==="landscape"){NM(n,e,t);return}let r=Ea.left,o=i-Ea.right,a=s-Ea.bottom,l=Ea.top,c=e.x.format??(v=>v),u=e.y.format??(v=>v),d=xu(e.y,a,l),p="";for(let v of e.y.ticks??[]){let f=d(v).toFixed(1);p+=`<line class="grid" x1="${r}" x2="${o}" y1="${f}" y2="${f}"/>`,p+=`<text x="${r-14}" y="${f}" text-anchor="end" dominant-baseline="middle">${Dt(u(v))}</text>`}p+=`<line class="axis" x1="${r}" x2="${o}" y1="${a}" y2="${a}"/>`,p+=`<text class="axis-title" x="${r}" y="${l-18}">${Dt(e.y.label??"")}</text>`,p+=`<text class="axis-title" x="${o}" y="${s-18}" text-anchor="end">${Dt(e.x.label??"")}</text>`;let m=0,g=[];if(e.type==="bar"){let v=e.x.categories,f=(o-r)/v.length,h=e.series.length,w=Math.min(64,f*.7/h);v.forEach((E,S)=>{let H=r+f*(S+.5);p+=`<text x="${H.toFixed(1)}" y="${a+34}" text-anchor="middle">${Dt(E)}</text>`}),e.series.forEach((E,S)=>{let{color:H}=lf(E,E.role==="prior"?m++:0),C=E.grad?or:E.role==="prior"?`color-mix(in srgb, ${H} ${100-S*18}%, transparent)`:H,R=new Set(E.soft??[]),U=`color-mix(in srgb, ${H} 45%, var(--bg))`;E.values.forEach((I,W)=>{let G=r+f*(W+.5)+(S-(h-1)/2)*(w+8),X=d(I);p+=`<rect class="series-bar" x="${(G-w/2).toFixed(1)}" y="${X.toFixed(1)}" width="${w.toFixed(1)}" height="${(a-X).toFixed(1)}" rx="4" style="fill:${R.has(W)?U:C}"/>`}),e.values&&E.values.forEach((I,W)=>{let G=r+f*(W+.5)+(S-(h-1)/2)*(w+8);p+=`<text class="series-dot bar-value" x="${G.toFixed(1)}" y="${(d(I)-12).toFixed(1)}" text-anchor="middle" style="fill:${E.role==="prior"||R.has(W)?"var(--ink-2)":H};font-variant-numeric:tabular-nums;${ar}">${Dt(u(I))}</text>`});let T=E.values.length-1,M=r+f*(T+.5)+(h-1)/2*(w+8)+w/2+14;g.push({x:M,y:d(E.values[T]),color:E.grad?or:H,name:E.name})});for(let E of e.notes??[])if(E.type==="hline"){let S=d(E.y).toFixed(1);p+=`<g class="note"><line x1="${r}" x2="${o}" y1="${S}" y2="${S}" style="stroke:var(--ink-2);stroke-width:2;stroke-dasharray:6 6"/>`,p+=`<text x="${o+14}" y="${S}" dominant-baseline="middle" style="fill:var(--ink-2);${ar}">${Dt(E.label)}</text></g>`}}else{let v=xu(e.x,r,o);for(let f of e.x.ticks??[])p+=`<text x="${v(f).toFixed(1)}" y="${a+34}" text-anchor="middle">${Dt(c(f))}</text>`;for(let f of e.notes??[])if(f.type==="band"){let h=v(f.x0),w=v(f.x1);p+=`<g class="note"><rect x="${h.toFixed(1)}" y="${l}" width="${(w-h).toFixed(1)}" height="${a-l}" style="fill:var(--accent-soft)"/>`,p+=`<text x="${((h+w)/2).toFixed(1)}" y="${l+28}" text-anchor="middle" style="fill:var(--ink-2)">${Dt(f.label)}</text></g>`}if(e.diagonal){let[f,h]=e.x.domain;p+=`<line class="series-path" data-dash="8 8" x1="${v(f).toFixed(1)}" y1="${d(f).toFixed(1)}" x2="${v(h).toFixed(1)}" y2="${d(h).toFixed(1)}" style="stroke:var(--truth);stroke-width:2;stroke-dasharray:8 8;opacity:0.6"/>`}for(let f of e.series){let h=lf(f,f.role==="prior"?m++:0),w=f.points.map(([H,C])=>[v(H),d(C)]);if(e.type==="line"){let H=w.map(([R,U],T)=>`${T?"L":"M"}${R.toFixed(1)} ${U.toFixed(1)}`).join(""),C=h.dash?`data-dash="${h.dash}"`:'pathLength="1"';if(p+=`<path class="series-path" ${C} d="${H}" fill="none" style="stroke:${h.color};stroke-width:${h.width};stroke-linejoin:round;stroke-linecap:round${h.dash?`;stroke-dasharray:${h.dash}`:""}"/>`,f.dots)for(let[R,U]of w)p+=`<circle class="series-dot" cx="${R.toFixed(1)}" cy="${U.toFixed(1)}" r="6.5" style="fill:${f.grad?or:h.color}"/>`}else for(let[H,C]of w)p+=`<circle class="series-dot" cx="${H.toFixed(1)}" cy="${C.toFixed(1)}" r="${f.role==="ours"?7:6}" style="fill:${f.grad?or:h.color}"/>`;let[E,S]=w[w.length-1];g.push({x:E+14,y:S,color:f.grad?or:h.color,name:f.name})}for(let f of e.notes??[])if(f.type==="point"){let h=v(f.x),w=d(f.y);p+=`<g class="note"><circle cx="${h.toFixed(1)}" cy="${w.toFixed(1)}" r="11" fill="none" style="stroke:var(--ink);stroke-width:2.5"/>`,p+=`<text x="${(h+20).toFixed(1)}" y="${(w+8).toFixed(1)}" style="fill:var(--ink);font-size:24px;font-weight:720;${ar}">${Dt(f.label)}</text></g>`}else if(f.type==="hline"||f.type==="vline"){let h=f.type==="hline"?`x1="${r}" x2="${o}" y1="${d(f.y).toFixed(1)}" y2="${d(f.y).toFixed(1)}"`:`x1="${v(f.x).toFixed(1)}" x2="${v(f.x).toFixed(1)}" y1="${a}" y2="${l}"`,w=f.type==="hline"?r+12:v(f.x)+12,E=f.type==="hline"?d(f.y)-12:l+24;p+=`<g class="note"><line ${h} style="stroke:var(--ink-3);stroke-width:2;stroke-dasharray:6 6"/>`,p+=`<text x="${w.toFixed(1)}" y="${E.toFixed(1)}" style="fill:var(--ink-2);${ar}">${Dt(f.label)}</text></g>`}}if(p+=FM(g),e.kind){let v=Dt(e.kind.toUpperCase()),f=20+v.length*17,h=e.kind==="measured"?"var(--accent)":"var(--ink-2)",w=r+String(e.y?.label??"").length*13.2+24,E=Math.min(i-f,Math.max(o-f,w));p+=`<g class="kind-badge" transform="translate(${E.toFixed(0)} 0)"><rect width="${f.toFixed(0)}" height="40" rx="6" fill="none" style="stroke:${h}"/><text x="${(f/2).toFixed(0)}" y="20.5" text-anchor="middle" dominant-baseline="middle" style="fill:${h};font-size:24px;letter-spacing:0.06em">${v}</text></g>`}n.innerHTML=p}function hf(n,e,t=0){let i=(o,a=0)=>({duration:o*1e3,delay:(t+a)*1e3,easing:"cubic-bezier(0.2, 0.7, 0.2, 1)",fill:"both"}),s=0;for(let o of n.querySelectorAll(".series-path"))o.dataset.dash?e(o.animate([{opacity:0},{opacity:o.style.opacity||1}],i(.6,.15*s))):(o.style.strokeDasharray="1 1",e(o.animate([{strokeDashoffset:1},{strokeDashoffset:0}],i(1.2,.15*s)))),s+=1;let r=0;for(let o of n.querySelectorAll(".series-bar"))o.style.transformBox="fill-box",o.style.transformOrigin="50% 100%",e(o.animate([{transform:"scaleY(0)"},{transform:"scaleY(1)"}],i(.9,.05*r))),r+=1;for(let o of n.querySelectorAll(".series-dot, .series-label, .note"))e(o.animate([{opacity:0},{opacity:1}],i(.5,.9+.15*(s+r/4))))}var Ui=null,rs=null,wn=null,df=new Map;function ff(){return Ui||(Ui=new(window.AudioContext||window.webkitAudioContext),rs=Ui.createAnalyser(),rs.fftSize=8192,rs.connect(Ui.destination)),Ui.state==="suspended"&&Ui.resume(),Ui}function OM(){if(!rs)return 0;let n=new Float32Array(rs.fftSize);rs.getFloatTimeDomainData(n);let e=n.length/8,t=0;for(let i=0;i<8;i+=1){let s=0;for(let r=i*e;r<(i+1)*e;r+=1)s+=n[r]*n[r];t=Math.max(t,Math.sqrt(s/e))}return t}var BM={get sampleRate(){return ff().sampleRate},loop(n,{level:e=.5,seconds:t=4,delay:i=0}={}){let s=ff(),r=typeof n=="function"?n(s.sampleRate):n,o=s.createBuffer(1,r.length,s.sampleRate),a=o.getChannelData(0);for(let d=0;d<r.length;d+=1)a[d]=Math.max(-1,Math.min(1,r[d]));let l=s.createBufferSource();l.buffer=o,l.loop=!0;let c=s.createGain(),u=s.currentTime+i;return c.gain.setValueAtTime(0,s.currentTime),c.gain.setValueAtTime(0,u),c.gain.linearRampToValueAtTime(e,u+.25),l.connect(c).connect(rs),l.start(u),{kind:"synth",seconds:t,stop(){c.gain.cancelScheduledValues(s.currentTime),c.gain.setValueAtTime(c.gain.value,s.currentTime),c.gain.linearRampToValueAtTime(0,s.currentTime+.25),l.stop(s.currentTime+.3)}}},tape(n,{from:e=0,volume:t=1,seconds:i=10,delay:s=0}={}){let r=df.get(n);r||(r=new Audio(n),r.preload="auto",df.set(n,r));let o={kind:"tape",seconds:i,element:r,failed:"",ended:!1,onFail:null,onEnd:null},a=()=>{r.currentTime=e,r.volume=t,r.play().catch(u=>{o.failed=u?.name||"error",o.onFail?.()})},l=()=>{o.ended=!0,o.onEnd?.()};r.addEventListener("ended",l);let c=s>0?setTimeout(a,s*1e3):(a(),0);return o.stop=()=>{clearTimeout(c),r.removeEventListener("ended",l),r.pause()},o},all(n,{seconds:e}={}){return{kind:"all",parts:n,seconds:e??Math.max(...n.map(t=>t.seconds??0)),stop(){for(let t of n)t.stop()}}}},Ta=n=>n.kind==="all"?n.parts.flatMap(Ta):[n];function pf({sounds:n,stepSound:e,stepKey:t,lang:i,addKey:s}){if(!n||!Object.keys(n).length)return null;let r=()=>{let u=e();return u&&n[u]?{name:u,key:t()}:null},o=u=>Number(getComputedStyle(u).opacity)>.5,a=u=>{let d=[...document.querySelectorAll(".slide.is-active .sound")];return d.find(p=>p.dataset.sound===u)??d.find(p=>!p.dataset.sound&&o(p))??null};function l(){wn&&(wn.run.stop(),clearTimeout(wn.timer),wn.chip?.classList.remove("is-playing","is-failed"),wn=null)}function c(){if(wn){l();return}let u=r();if(!u)return;let d=n[u.name](BM);if(!d||typeof d.stop!="function"){console.warn(`project.sounds.${u.name} must return what audio.loop, audio.tape or audio.all returns`);return}let p=a(u.name);p?.classList.add("is-playing");let m={run:d,chip:p,timer:setTimeout(l,(d.seconds??10)*1e3)};wn=m;let g=Ta(d).filter(v=>v.kind==="tape");for(let v of g)v.onFail=()=>{wn===m&&p?.classList.add("is-failed")},v.onEnd=()=>{wn===m&&Ta(d).every(f=>f.kind==="tape"&&f.ended)&&l()},v.failed&&v.onFail()}return s("a",{label:String(i||"").toLowerCase().startsWith("zh")?"\u64AD\u653E\u8FD9\u4E00\u6B65\u7684\u58F0\u97F3\uFF08\u6709\u58F0\u97F3\u63D0\u793A\u6761\u7684\u6B65\uFF09":"Play this step\u2019s sound (steps with a sound chip)",run:c}),document.addEventListener("click",u=>{u.target.closest(".sound")&&c()}),window.__sound={names:()=>Object.keys(n),current:r,playing:()=>!!wn,level:OM,state:()=>Ui?.state??"none",parts:()=>wn?Ta(wn.run).map(u=>u.kind==="tape"?{kind:"tape",paused:u.element.paused,time:u.element.currentTime,error:u.element.error?.code??null,failed:u.failed,ended:u.ended}:{kind:u.kind}):[],toggle:c,stop:l},{stop:l}}var mt={...pu};nf();var Kr=new URLSearchParams(location.search),mf=Object.fromEntries((Kr.get("tune")??"").split(",").filter(Boolean).map(n=>{let[e,t]=n.split(":");return[e,Number(t)]})),ls=Kr.has("profile")?[]:null,Tn={on:Kr.has("reader")||document.documentElement.dataset.reader==="on",waiting:!1},gf={slide:1.7,step:1.1},Li={duration:.9,slideDelay:.55,stepDelay:.22,stagger:.07},kM=4,xf=4,zM=new Set(mt.FIXTURES??[]),HM=[0,.24],VM=[.74,1],Mu=.55,Ca="cubic-bezier(0.2, 0.7, 0.2, 1)",Pa=document.getElementById("stage"),Aa=document.getElementById("scene"),GM=document.getElementById("hud"),WM=document.getElementById("chrome"),XM=document.getElementById("counter"),vu=document.getElementById("progress"),qr=document.getElementById("hint"),jr=document.getElementById("caption"),bu=mu(),Xt=qd(Aa,{preserve:Wt.manual,theme:bu}),Et=Wt.now,Di=(n,e,t)=>Math.min(t,Math.max(e,n)),yu=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,vf=n=>String(n).padStart(2,"0"),st=[...document.querySelectorAll("section.slide")].map((n,e)=>{let t=[...n.querySelectorAll(".r, [data-step]")],i=Math.max(1,...t.map(a=>Number(a.dataset.step??0)+1)),s=n.querySelector(".notes")?.textContent.replace(/\s+/g," ").trim()??"",r=n.dataset.stepDurations?n.dataset.stepDurations.trim().split(/\s+/).map(Number):null,o=[...n.querySelectorAll("svg[data-chart][data-col-step]")].map(a=>{let l=mt.CHARTS?.[a.dataset.chart],c=Number(a.dataset.colStep)+(l?.columns?.length??1)-1;return Math.max(c,Number(a.dataset.oursStep??0))+1});return{el:n,index:e,id:n.id,steps:Math.max(i,...o),shots:(n.dataset.shots||"hero").trim().split(/\s+/),title:n.dataset.title||n.id,notes:s,stepDurations:r,duration:r?r.reduce((a,l)=>a+l,0):Number(n.dataset.duration||0),chrome:n.dataset.chrome!=="off",reveal:t}}),yf="img, video, canvas, svg, picture",On=(n,e)=>n.shots[Math.min(e,n.shots.length-1)],qM=n=>Number(n.dataset.step??0),jM=n=>n.dataset.until===void 0?1/0:Number(n.dataset.until),Fn=(n,e)=>e>=qM(n)&&e<=jM(n);function Af(n){let e=[],t=/\[Step (\d+)\]/g,i=0,s=0,r;for(;r=t.exec(n);)r.index>i&&e.push({step:s,text:n.slice(i,r.index).trim()}),s=Number(r[1])-1,i=t.lastIndex;return e.push({step:s,text:n.slice(i).trim()}),e.filter(o=>o.text)}var YM="h1, h2, .display, .h1, .h2";function Su(n,e){let t=[...n.el.querySelectorAll(YM)].find(i=>Fn(i.closest("[data-step], .r")??i,e));return t?t.textContent.trim().replace(/\s+/g," "):n.title}var qn=new Set;function Nn(n,e=null){return n.deckStart=Et(),n.settle=e,qn.add(n),n.addEventListener("cancel",()=>qn.delete(n)),Wt.manual&&n.pause(),n}function KM(){for(let n of qn){if(n.playState==="idle"){qn.delete(n);continue}n.currentTime=Math.max(0,(Et()-n.deckStart)*1e3)}}function ZM(){let n=Et();for(let e of qn){let t=e.effect?.getComputedTiming();if(e.playState==="idle"||!t){qn.delete(e);continue}let i=Wt.manual?n-e.deckStart>=t.endTime/1e3:e.playState==="finished";if(e.settle){i&&(e.settle(),e.settle=null,Wt.manual||(qn.delete(e),e.cancel()));continue}t.fill==="forwards"||t.fill==="both"||(Wt.manual&&n-e.deckStart>=t.endTime/1e3?(e.currentTime=t.endTime,qn.delete(e)):!Wt.manual&&e.playState==="finished"&&(qn.delete(e),e.cancel()))}}function JM(){let n=Ia+jn;for(let e of qn){let t=e.effect?.getComputedTiming();e.playState!=="idle"&&t&&Number.isFinite(t.endTime)&&(n=Math.max(n,e.deckStart+t.endTime/1e3))}for(let e of Au.values())n=Math.max(n,e.start+1.4);return n}var Au=new Map;function Mf(n,e,t=!1){for(let c of n.getAnimations())c.cancel();n.classList.remove("is-on","is-off","is-dim");let i=n.dataset.dimmed==="1",s=i?Mu:1;e+=Number(n.dataset.delay??0);let r=n.classList.contains("callout")||n.classList.contains("real-cover");r&&!t&&(e=Math.max(e,jn));let o={duration:t?0:Li.duration*1e3,delay:t?0:e*1e3,easing:Ca},a=r?[{opacity:0},{opacity:s}]:[{opacity:0,transform:"translate3d(0, 28px, 0)"},{opacity:s,transform:"none"}];Nn(n.animate(a,{...o,fill:"both"}),()=>{n.classList.add("is-on"),n.classList.toggle("is-dim",i)}),Nn(n.animate([{filter:r?"blur(6px)":"blur(8px)"},{filter:"blur(0px)"}],{...o,fill:"backwards"}));for(let c of n.querySelectorAll(".count"))Au.set(c,{start:t?Et()-10:Et()+e+.1,to:Number(c.dataset.to),decimals:Number(c.dataset.decimals??0)});let l=n.matches("svg[data-chart]")?[n]:[...n.querySelectorAll("svg[data-chart]")];for(let c of l)if(t)for(let u of c.querySelectorAll("*"))for(let d of u.getAnimations())d.cancel();else hf(c,u=>Nn(u,()=>{}),e+.25)}function QM(n){let e=getComputedStyle(n).opacity;for(let i of n.getAnimations())i.cancel();let t=Number(n.dataset.hold??0)*1e3;n.classList.remove("is-on","is-dim"),Nn(n.animate([{opacity:e},{opacity:0}],{duration:200,delay:t,easing:"ease",fill:"both"}),()=>n.classList.add("is-off"))}function $M(n,e){let t=[];for(let i of n.el.querySelectorAll("[data-dim-from]")){let s=i.closest("[data-step], .r")??i,r=Fn(s,e)&&e>=Number(i.dataset.dimFrom);r!==(i.dataset.dimmed==="1")&&(i.dataset.dimmed=r?"1":"",t.push(i))}return t}function e1(n,e,t){for(let i of n){if(e.has(i))continue;let s=i.dataset.dimmed==="1";for(let o of i.getAnimations())o.dim&&o.cancel();let r=i.animate([{opacity:s?1:Mu},{opacity:s?Mu:1}],{duration:t?0:500,easing:"ease",fill:"both"});r.dim=!0,Nn(r,()=>i.classList.toggle("is-dim",s))}}function Rf(n){for(let e of[n.el,...n.reveal]){e.classList.remove("is-on","is-dim");for(let t of e.getAnimations())t.cancel()}for(let e of n.el.querySelectorAll("[data-dim-from]")){e.classList.remove("is-dim"),e.dataset.dimmed="";for(let t of e.getAnimations())t.cancel()}Pf(n);for(let e of n.el.querySelectorAll("video"))e.pause(),Yn.delete(e)}function t1(n){n.innerHTML=n.dataset.tabs.split("\xB7").map(e=>`<span>${lr(e.trim())}</span>`).join("")}function n1(n,e){for(let t of n.el.querySelectorAll("[data-tabs]")){let i=[...t.children],s=t.dataset.tabSteps?t.dataset.tabSteps.trim().split(/\s+/).map(o=>o.split("-").map(Number)):i.map((o,a)=>[a]),r=s.findIndex(([o,a=o])=>e>=o&&e<=a);r<0&&(r=e>(s.at(-1)?.at(-1)??0)?i.length-1:0),i.forEach((o,a)=>o.classList.toggle("current",a===r))}}var Ge={slide:0,step:0},Cf=null,Ia=0,jn=0,hi=Ii(On(st[0],0),0),Fi=hi,Dn=null;function Kn(n,e,t={}){let i=Di(n,0,st.length-1),s=st[i],r=Di(e,0,s.steps-1),o=Ge,a=i!==o.slide;if(!a&&r===o.step&&!t.force)return;let l=ci(On(s,r)),c=a||t.force&&!t.instant;hi=t.from??Fi,jn=t.instant?0:l.transition??(c?gf.slide:gf.step),Ia=Et(),Ge={slide:i,step:r},Cf?.stop(),Zt.clock=0,Zt.weight=1,Zt.until=0,Jr.value=null,as.values=null,En.start=Et(),En.active=-1;let u=$M(s,r),d=new Set;if(a||t.force){if(a){Dn&&Dn.slide!==s&&(Dn.slide.el.classList.remove("is-active"),Rf(Dn.slide));let f=st[o.slide],h=Number(f.el.dataset.leave??0),w=h>0?h:.38;if(Nn(f.el.animate([{opacity:1},{opacity:0}],{duration:w*1e3,easing:h>0?"ease-in-out":"ease",fill:"both"})),h>0){for(let E of f.reveal)if(Fn(E,o.step)&&!E.matches(yf)&&!E.querySelector(yf)){let S=getComputedStyle(E).opacity;Nn(E.animate([{opacity:S},{opacity:0}],{duration:380,easing:"ease",fill:"both"}))}}Dn={slide:f,until:Et()+w+.02}}for(let f of s.el.getAnimations())f.cancel();s.el.classList.add("is-active");let g=0,v=c?Li.slideDelay:Li.stepDelay;for(let f of s.reveal)if(Fn(f,r))Mf(f,v+g*Li.stagger,t.instant),d.add(f),g+=1;else{for(let h of f.getAnimations())h.cancel();f.classList.remove("is-on","is-dim"),f.classList.add("is-off")}}else{let g=0;for(let v of s.reveal){let f=Fn(v,o.step),h=Fn(v,r);!f&&h?(Mf(v,Li.stepDelay+g*Li.stagger),d.add(v),g+=1):f&&!h&&QM(v)}}let p=(g,v,f)=>{let h=getComputedStyle(g).opacity;for(let w of g.getAnimations())w.cancel();Nn(g.animate([{opacity:h},{opacity:v}],{duration:t.instant?0:f,fill:"both"}))};p(WM,s.chrome?1:0,500),qr&&(l.hint&&qr.classList.toggle("right",(s.el.dataset.hint??qr.dataset.side)==="right"),qr.querySelector("span").textContent=l.hint??"",p(qr,l.hint?1:0,400)),e1(u,d,t.instant||a),i1(s,r,t.instant,a||t.force?(c?Li.slideDelay:Li.stepDelay)+.5:.15),If(t.instant),n1(s,r),XM.textContent=`${vf(i+1)} / ${vf(st.length)}`;let m=getComputedStyle(vu).transform;for(let g of vu.getAnimations())g.cancel();Nn(vu.animate([{transform:m==="none"?"scaleX(0)":m},{transform:`scaleX(${st.length>1?i/(st.length-1):1})`}],{duration:t.instant?0:900,easing:Ca,fill:"both"})),s1(),history.replaceState(null,"",`${location.search}#${s.id}${r?`.${r}`:""}`),Bf()}var wu=new WeakMap;function i1(n,e,t,i){for(let s of n.el.querySelectorAll("svg[data-chart][data-col-step]")){let r=Number(s.dataset.colStep),o=Number(s.dataset.oursStep??1/0),a=0;for(let l of s.querySelectorAll("[data-col]")){let c=l.dataset.col==="ours"?e>=o:e>=r+Number(l.dataset.col);if((wu.get(l)??!1)===c)continue;wu.set(l,c);for(let d of l.getAnimations())d.cancel();l.style.transformBox="fill-box",l.style.transformOrigin="50% 60%";let u={duration:t?0:c?600:200,delay:t||!c?0:(i+a*.12)*1e3,easing:Ca,fill:"both"};Nn(l.animate(c?[{opacity:0,transform:"scale(0.86)"},{opacity:1,transform:"none"}]:[{opacity:1},{opacity:0}],u),()=>{l.style.opacity=c?"1":"0"}),a+=c?1:0}}}function Pf(n){for(let e of n.el.querySelectorAll("svg[data-chart][data-col-step] [data-col]")){wu.delete(e),e.style.opacity="0";for(let t of e.getAnimations())t.cancel()}}function Zr(){let n=st[Ge.slide];Ge.step<n.steps-1?Kn(Ge.slide,Ge.step+1):Ge.slide<st.length-1&&Kn(Ge.slide+1,0)}function Ru(){Ge.step>0?Kn(Ge.slide,Ge.step-1):Ge.slide>0&&Kn(Ge.slide-1,st[Ge.slide-1].steps-1)}var Yn=new Map;function s1(){st.forEach((n,e)=>{for(let t of n.el.querySelectorAll("video[data-autoplay]")){let i=t.closest("[data-step], .r"),s=e===Ge.slide&&(!i||Fn(i,Ge.step));if(s&&!Yn.has(t)){let r=t.closest(".real-cover")?jn:0;Yn.set(t,Et()+r),t.currentTime=0,!Wt.manual&&r===0&&t.play().catch(()=>{})}else!s&&Yn.has(t)&&(Yn.delete(t),t.pause())}})}function r1(){for(let[n,e]of Yn)n.paused&&!n.ended&&Et()>=e&&n.play().catch(()=>{})}function o1(n){let e=Yn.get(n);if(e===void 0)return 0;if(!Wt.manual)return n.currentTime;let t=n.duration;if(!Number.isFinite(t)||t<=0)return 0;let i=Math.max(0,Et()-e)*n.playbackRate;return n.loop?i%t:Math.min(i,t)}function a1(){for(let[n,e]of Yn){let t=n.duration;if(!Number.isFinite(t)||t<=0)continue;let i=Math.max(0,Et()-e)*n.playbackRate,s=Number(n.dataset.fps??30),r=n.loop?i%t:Math.min(i,t),o=Math.min((Math.floor(r*s+1e-6)+.5)/s,Math.max(0,t-.5/s));Math.abs(n.currentTime-o)>1e-4&&(n.currentTime=o)}}var Ra=new Map;function l1(){for(let n of document.querySelectorAll("[data-video-steps][data-hover-loop]")){let e=n.closest("section.slide")?.querySelector(n.dataset.videoSteps);for(let t of n.querySelectorAll("[data-from]"))t.addEventListener("pointerenter",()=>{Wt.manual||!e||(Ra.set(n,t),e.currentTime=Number(t.dataset.from),e.play().catch(()=>{}))}),t.addEventListener("pointerleave",()=>{Ra.get(n)===t&&Ra.delete(n)})}}function c1(n){for(let e of n.el.querySelectorAll("[data-video-steps]")){let t=n.el.querySelector(e.dataset.videoSteps),i=Ra.get(e);if(t&&i){let r=Number(i.dataset.from),o=Math.min(Number(i.dataset.to),t.duration||1/0);(t.currentTime<r||t.currentTime>=o-.05)&&(t.currentTime=r)}let s=t?t.currentTime:0;for(let r of e.querySelectorAll("[data-from]"))r.classList.toggle("current",s>=Number(r.dataset.from)&&s<Number(r.dataset.to))}}var lr=n=>n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function u1(){let n=st[Ge.slide],e=Af(n.notes).filter(s=>s.step===Ge.step).map(s=>s.text).join(" "),t=lr(e).replace(/\(([^)]*)\)/g,'<span class="do">$1</span>'),i=ci(On(n,Ge.step)).hint;return i&&!t.includes('class="do"')&&(t+=`${t?" ":""}<span class="do">${lr(i)}</span>`),t}function If(n=!1){if(!jr)return;document.body.classList.toggle("reader",Tn.on);let e=Tn.on?u1():"";for(let i of jr.getAnimations())i.cancel();jr.querySelector("p").innerHTML=e,jr.classList.toggle("long",e.length>260);let t=e?1:0;Nn(jr.animate([{opacity:0},{opacity:t}],{duration:n?0:500,delay:n?0:300,easing:Ca,fill:"both"}))}function Uf(n){Tn.on=n,Tn.waiting=!1,document.body.classList.remove("waiting"),If(!0)}var Zt={clock:0,weight:1,until:0};function Cu(){Zt.until=Et()+kM}var Ot={x:0,y:0,inside:!1,down:!1,moved:-1/0},Jt=1,di={x:0,y:0};function bf(n){return{x:(n.clientX-di.x)/Jt,y:(n.clientY-di.y)/Jt}}function h1(n){let e=n.getBoundingClientRect(),t=Ot.x*Jt+di.x,i=Ot.y*Jt+di.y,s=Ot.inside&&t>=e.left&&t<=e.right&&i>=e.top&&i<=e.bottom,r=n.getScreenCTM?.();if(r){let o=new DOMPoint(t,i).matrixTransform(r.inverse());return{x:o.x,y:o.y,inside:s}}return{x:(t-e.left)/Jt,y:(i-e.top)/Jt,inside:s}}var cs=n=>({scene:Xt,pointer:Ot,local:h1,dt:n,now:Et(),project:Xt.project,takeOver:Cu});function Lf(n){return n.pointer?mt.pointers?.[n.pointer]??null:null}var as={values:null};function d1(n,e,t){let i=Lf(e);if(!i)return n;let s=cs(t),r=Ot.inside?i.hits(n,s):null;r?(Cu(),as.values=i.hand(n,r,s)):as.values&&i.idle&&(as.values=i.idle(as.values));let o=1-Zt.weight;if(!as.values||o<=0)return n;let a={...n};for(let[l,c]of Object.entries(as.values))a[l]=Pu(l,n[l],c,o);return a}var Jr={value:null};function f1(n){let e=ci(On(st[Ge.slide],Ge.step)).wheel;if(!e)return;n.preventDefault(),Cu();let t=Jr.value??Fi[e.key];t>=e.min&&t<=e.max||(t=e.start??(e.min+e.max)/2),Jr.value=Di(t+n.deltaY*e.rate,e.min,e.max)}function p1(n,e){return e.wheel&&Jr.value!==null?{...n,[e.wheel.key]:Jr.value}:n}var En={start:0,active:-1,weights:{}};function m1(n){return Ot.inside?n.findIndex(e=>{let t=e.getBoundingClientRect(),i=(t.left-di.x)/Jt,s=(t.top-di.y)/Jt;return Ot.x>=i&&Ot.x<=i+t.width/Jt&&Ot.y>=s&&Ot.y<=s+t.height/Jt}):-1}function g1(n,e,t){let i=[...n.el.querySelectorAll("[data-tile]")].filter(l=>Fn(l.closest("[data-step], .r")??l,Ge.step)),s=new Set(i.map(l=>l.dataset.tile)),r=-1;if(i.length){let l=m1(i);l>=0&&(En.start=Et()-l*xf),r=l>=0?l:Math.floor((Et()-En.start)/xf)%i.length,r!==En.active&&(i.forEach((c,u)=>c.classList.toggle("active",u===r)),En.active=r)}let o=1-Math.exp(-t*5);for(let l of new Set([...s,...Object.keys(En.weights)])){let c=r>=0&&i[r].dataset.tile===l?1:0,u=En.weights[l]??0;En.weights[l]=Math.abs(c-u)<.001?c:u+(c-u)*o}for(let l of i){let u=(.55+.45*(En.weights[l.dataset.tile]??0)).toFixed(3);l.style.opacity!==u&&(l.style.opacity=u)}let a=Object.values(En.weights).some(l=>l>0);return mt.tiles&&(i.length||a)?mt.tiles(e,En.weights):e}var Eu=[];function x1(n){let e=[...n.el.querySelectorAll(".callout")].map(i=>{let s=i.dataset.side==="left"?"left":"right",r=Xt.project(Xt.anchor(i.dataset.anchor,s)),o=r.y+Number(i.dataset.dy??0);return{el:i,side:s,anchor:r,y:o,w:i.offsetWidth,h:i.offsetHeight||56,opacity:Number(getComputedStyle(i).opacity)}}),t="";Eu=[];for(let i of["left","right"]){let s=e.filter(o=>o.side===i).sort((o,a)=>o.anchor.y-a.anchor.y);for(let o=1;o<s.length;o+=1)s[o].y=Math.max(s[o].y,s[o-1].y+(s[o-1].h+s[o].h)/2+18);let r=i==="left"?-1:1;for(let o of s){let a=Number(o.el.dataset.x),l=i==="left"?a-o.w:a;if(o.el.style.transform=`translate(${l.toFixed(1)}px, ${(o.y-o.h/2).toFixed(1)}px)`,o.opacity>.01){let c=[[o.anchor.x,o.anchor.y],[a-r*44,o.y],[a-r*16,o.y]];Eu.push({name:(o.el.querySelector("b")??o.el).textContent.trim().replace(/\s+/g," ").slice(0,26),points:c,opacity:o.opacity}),t+=`<g opacity="${o.opacity.toFixed(3)}"><polyline points="${c.map(([u,d])=>`${u.toFixed(1)},${d.toFixed(1)}`).join(" ")}" fill="none" style="stroke:var(--line-strong);stroke-width:1.5"/><circle cx="${o.anchor.x.toFixed(1)}" cy="${o.anchor.y.toFixed(1)}" r="5" style="fill:var(--accent)"/></g>`}}}return t}function v1(n){if(Xt.cover)for(let e of n.el.querySelectorAll(".real-cover[data-cover]")){let t=Xt.cover(e.dataset.cover);if(!t)continue;let i=t.r===void 0?{x:t.x,y:t.y,w:t.w,h:t.h}:{x:t.x-t.r,y:t.y-t.r,w:2*t.r,h:2*t.r},s=`${i.x.toFixed(1)} ${i.y.toFixed(1)} ${i.w.toFixed(1)} ${i.h.toFixed(1)}`;e.dataset.at!==s&&(e.dataset.at=s,e.classList.toggle("rect",t.r===void 0),e.style.left=`${i.x.toFixed(1)}px`,e.style.top=`${i.y.toFixed(1)}px`,e.style.width=`${i.w.toFixed(1)}px`,e.style.height=`${i.h.toFixed(1)}px`)}}var y1=new Set(mt.CARRIERS??[]),Tu=new Set;function M1(n,e,t){if(Tu.clear(),!mt.tracks)return e;let i=e;for(let s of n.el.querySelectorAll("video[data-track]")){let r=mt.tracks[s.dataset.track];if(!r||!Yn.has(s))continue;let o=r(o1(s),e);if(o){i={...i};for(let[a,l]of Object.entries(o))i[a]=typeof e[a]=="number"&&!y1.has(a)?Pu(a,e[a],l,t):l,Tu.add(a)}}return i}var Sf=Et(),Qr="",wf="",Ef=new Map;function _a(n){ls&&(ls.at(-1)[n]=performance.now())}function Pu(n,e,t,i){let s=Wd[n];if(s){let r=(t-e)%s;return r>s/2&&(r-=s),r<-s/2&&(r+=s),e+r*i}return e+(t-e)*i}function Df(){ls&&(ls.push({start:performance.now()}),ls.length>600&&ls.shift()),ZM(),Wt.manual?(KM(),a1()):r1();let n=Et(),e=Di(n-Sf,0,.1);Sf=n;let t=st[Ge.slide],i=On(t,Ge.step),s=ci(i),r=n-Ia,o=n<Zt.until,a=o?0:1;Zt.weight+=(a-Zt.weight)*(1-Math.exp(-e*5)),Math.abs(a-Zt.weight)<1e-4&&(Zt.weight=a),o||(Zt.clock+=e);let l=Ii(i,r);if(s.yields){let m=Ii(i,null),g=Ii(i,Zt.clock);for(let v of s.yields)l[v]=m[v]+(g[v]-m[v])*Zt.weight}if(jn>0&&r<jn){let m=Di(r/jn,0,1),g=yu(m),v=s.stage??{},f={...l};for(let h of Object.keys(l))if(typeof l[h]=="number"&&typeof hi[h]=="number"){let w=v[h]??(zM.has(h)&&l[h]!==hi[h]?l[h]<hi[h]?HM:VM:null),E=w?yu(Di((m-w[0])/(w[1]-w[0]),0,1)):g;f[h]=Pu(h,hi[h],l[h],E)}l=f}l=M1(t,l,jn>0?yu(Di(r/jn,0,1)):1),l=g1(t,l,e),l=p1(l,s),l=d1(l,s,e),Object.keys(mf).length&&(l={...l,...mf}),mt.finalize&&(l=mt.finalize(l,{now:n,elapsed:r,followed:Tu})),Fi=l,_a("state");let c=JSON.stringify(l);c!==Qr&&(Xt.applyState(l),Xt.render(),Qr=c),_a("render"),Dn&&n>=Dn.until&&(Dn.slide!==st[Ge.slide]&&(Dn.slide.el.classList.remove("is-active"),Rf(Dn.slide)),Dn=null);for(let[m,g]of Au){let v=Di((n-g.start)/1.4,0,1);m.textContent=(g.to*(1-Math.pow(1-v,3))).toFixed(g.decimals)}let u=cs(e),d=mt.readouts?mt.readouts(l,u):{};for(let m of t.el.querySelectorAll("[data-readout]")){let g=m.closest("[data-step], .r");if(g&&!Fn(g,Ge.step))continue;let v=d[m.dataset.readout];v!==void 0&&Ef.get(m)!==v&&(m.textContent=v,Ef.set(m,v))}for(let m of t.el.querySelectorAll("[data-widget]")){let g=mt.widgets?.[m.dataset.widget],v=m.closest("[data-step], .r");g&&(!v||Fn(v,Ge.step))&&g.update(m,l,u)}c1(t),v1(t),_a("dom");let p=x1(t)+(mt.overlay?mt.overlay(l,u):"");p!==wf&&(GM.innerHTML=p,wf=p),_a("hud")}function Ff(){Df(),requestAnimationFrame(Ff)}function Nf(){let n=window.innerWidth,e=window.innerHeight;Jt=Math.min(n/Lt,e/Rt),di={x:(n-Lt*Jt)/2,y:(e-Rt*Jt)/2},Pa.style.transform=`translate(${di.x}px, ${di.y}px) scale(${Jt})`;let t=Math.min(window.devicePixelRatio||1,2),i=Math.round(Math.min(3840,Lt*Jt*t));Xt.setSize(i,Math.round(i*Rt/Lt)),Qr=""}var Yr=null;function Of(){let n=st[Ge.slide],e=st[Ge.slide+1],t=st.slice(0,Ge.slide).reduce((r,o)=>r+o.duration,0),i=n.stepDurations?n.stepDurations.slice(0,Ge.step).reduce((r,o)=>r+o,0):0,s=Su(n,Ge.step);return{type:"state",theme:document.documentElement.dataset.theme||"dark",index:Ge.slide,step:Ge.step,steps:n.steps,total:st.length,title:n.title,stepTitle:s===n.title?"":s,parts:Af(n.notes),duration:n.duration,stepDuration:n.stepDurations?.[Ge.step]??null,plannedStart:t+i,next:Ge.step+1<n.steps?Su(n,Ge.step+1):e?e.title:"End",plan:st.map(r=>({title:r.title,duration:r.duration}))}}function Bf(){Yr&&!Yr.closed&&Yr.postMessage(Of(),"*")}function b1(){Yr=window.open("presenter.html","deck-presenter","width=1200,height=760")}window.addEventListener("message",n=>{let e=n.data;!e||typeof e!="object"||(e.type==="hello"?(Yr=n.source,Bf()):e.type==="nav"?(e.action==="next"&&Zr(),e.action==="prev"&&Ru()):e.type==="key"&&$r.get(String(e.key).toLowerCase())?.run(cs(0)))});var os="",Tf=0;function S1(n){if(n.key!=="Process"&&!n.isComposing)return n.key.length===1?n.key.toLowerCase():n.key;let e=/^(?:Key([A-Z])|Digit([0-9]))$/.exec(n.code||"");return e?e[1]?e[1].toLowerCase():e[2]:n.code==="Space"?" ":n.code==="Period"?".":n.key}var w1=new Set(["n","p","f","b","s","r","h","?","."," ","0","1","2","3","4","5","6","7","8","9"]),$r=new Map;function kf(n,e){let t=n.toLowerCase();return w1.has(t)||$r.has(t)?(console.warn(`key "${n}" is already taken: "${e.label}" was not added`),!1):($r.set(t,e),!0)}function E1(n){if(n.metaKey||n.ctrlKey||n.altKey)return;let e=S1(n),t=$r.get(String(e).toLowerCase());if(t&&!n.repeat){t.run(cs(0));return}Tn.waiting&&(Tn.waiting=!1,document.body.classList.remove("waiting")),["ArrowRight","ArrowDown","PageDown"," ","n"].includes(e)?(n.preventDefault(),(e===" "||os==="")&&Zr()):e==="Enter"?(n.preventDefault(),os?(Kn(Number(os)-1,0),os=""):Zr()):["ArrowLeft","ArrowUp","PageUp","Backspace","p"].includes(e)?(n.preventDefault(),Ru()):e==="Home"?Kn(0,0):e==="End"?Kn(st.length-1,0):e==="f"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{}):e==="b"||e==="."?document.body.classList.toggle("blackout"):e==="s"?b1():e==="r"?Uf(!Tn.on):e==="h"||e==="?"?_u():/^[0-9]$/.test(e)?os=(os+e).slice(-2):e==="Escape"&&(os="")}function zf(){let[n,e]=decodeURIComponent(location.hash.slice(1)).split("."),t=st.findIndex(i=>i.id===n);return t>=0?{slide:t,step:Number(e||0)}:{slide:0,step:0}}function T1(){document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&!Wt.manual)for(let[n,e]of Yn)n.paused&&Et()>=e&&n.play().catch(()=>{})}),l1(),window.addEventListener("keydown",E1),window.addEventListener("resize",Nf),window.addEventListener("wheel",f1,{passive:!1}),window.addEventListener("hashchange",()=>{let n=zf();Kn(n.slide,n.step)}),window.addEventListener("pointermove",n=>{let e=bf(n);Ot.x=e.x,Ot.y=e.y,Ot.inside=!0,Ot.moved=Et(),document.body.classList.remove("hide-cursor"),clearTimeout(Tf),Tf=setTimeout(()=>document.body.classList.add("hide-cursor"),2500)}),document.addEventListener("pointerleave",()=>{Ot.inside=!1}),window.addEventListener("pointerdown",()=>{Ot.down=!0}),window.addEventListener("pointerup",()=>{Ot.down=!1}),Pa.addEventListener("click",n=>{if(Tn.waiting){Tn.waiting=!1,document.body.classList.remove("waiting");return}if(n.target.closest("a, video, button, #keys, [data-tile], [data-hover-loop] [data-from]"))return;let e=ci(On(st[Ge.slide],Ge.step)),t=Lf(e),i=bf(n);t&&t.hits(Fi,{...cs(0),pointer:{...Ot,...i,inside:!0}})||Zr()})}var _1={en:{chip:"Keys",rows:[[["\u2192","Space","N","PgDn","click"],"Next step"],[["\u2190","P","PgUp","\u232B"],"Back"],[["number","Enter"],"Go to that slide"],[["Home","End"],"First slide \xB7 last slide"],[["F"],"Full screen"],[["S"],"Presenter window: script, timer, next step"],[["B","."],"Black screen"],[["R"],"Captions, for reading alone"]],hand:[["mouse","wheel"],"Drive the picture, where a hint says so"],pin:[["H"],"Keep this list open"]},zh:{chip:"\u6309\u952E",rows:[[["\u2192","\u7A7A\u683C","N","PgDn","\u5355\u51FB"],"\u4E0B\u4E00\u6B65"],[["\u2190","P","PgUp","\u232B"],"\u4E0A\u4E00\u6B65"],[["\u9875\u7801","Enter"],"\u8DF3\u5230\u8FD9\u4E00\u9875"],[["Home","End"],"\u7B2C\u4E00\u9875 \xB7 \u6700\u540E\u4E00\u9875"],[["F"],"\u5168\u5C4F"],[["S"],"\u6F14\u8BB2\u8005\u7A97\u53E3\uFF1A\u8BB2\u7A3F\u3001\u8BA1\u65F6\u3001\u4E0B\u4E00\u6B65"],[["B","."],"\u9ED1\u5C4F"],[["R"],"\u9605\u8BFB\u6A21\u5F0F\u5B57\u5E55"]],hand:[["\u9F20\u6807","\u6EDA\u8F6E"],"\u6309\u8FD9\u4E00\u6B65\u7684\u63D0\u793A\u64CD\u4F5C\u753B\u9762"],pin:[["H"],"\u56FA\u5B9A\u663E\u793A\u8FD9\u5F20\u8868"]}},ui=null;function A1(){if(document.documentElement.dataset.keys==="off"||Kr.get("keys")==="off")return;let n=_1[(document.documentElement.lang||"en").toLowerCase().startsWith("zh")?"zh":"en"],e=[...n.rows,...[...$r].map(([t,i])=>[[t.toUpperCase()],i.label]),n.hand,n.pin];ui=document.createElement("div"),ui.id="keys",ui.innerHTML=`<button type="button" class="keys-chip" aria-expanded="false"><kbd>?</kbd><span>${lr(n.chip)}</span></button><dl class="keys-panel">${e.map(([t,i])=>`<div><dt>${t.map(s=>`<kbd>${lr(s)}</kbd>`).join("")}</dt><dd>${lr(i)}</dd></div>`).join("")}</dl>`,Pa.append(ui),ui.querySelector(".keys-chip").addEventListener("click",()=>_u()),Kr.get("keys")==="open"&&_u(!0)}function _u(n=!ui?.classList.contains("is-open")){ui&&(ui.classList.toggle("is-open",n),ui.querySelector(".keys-chip").setAttribute("aria-expanded",String(n)))}function _f(){let n=Xt.subjectRect?.()??null,e=ci(On(st[Ge.slide],Ge.step)).focus,t=typeof Fi.visible=="number"&&Fi.visible<.2;return(Array.isArray(n)?n:[n]).filter(i=>i&&(i.lit||!t&&(!e||e.includes(i.name))))}window.__deck={info:()=>st.map(n=>({id:n.id,title:n.title,steps:n.steps,shots:n.shots,duration:n.duration,stepDurations:n.stepDurations,stepTitles:Array.from({length:n.steps},(e,t)=>Su(n,t)),notes:n.notes,meta:Array.from({length:n.steps},(e,t)=>ci(On(n,t)))})),go(n,e=0,t={}){let i=typeof n=="number"?n:st.findIndex(s=>s.id===n);Kn(i,e,{force:!0,...t})},current:()=>({...Ge,id:st[Ge.slide].id}),next:Zr,prev:Ru,state:()=>Fi,auto:()=>({...Zt,manual:Et()<Zt.until}),subjectRects:_f,subjectRect(){let n=_f();return n.length?{x0:Math.min(...n.map(e=>e.x0)),y0:Math.min(...n.map(e=>e.y0)),x1:Math.max(...n.map(e=>e.x1)),y1:Math.max(...n.map(e=>e.y1))}:null},leaders:()=>Eu,carriers:()=>mt.CARRIERS??[],blocks(){return st[Ge.slide].reveal.map(e=>{let t=getComputedStyle(e);return{name:`${e.tagName.toLowerCase()}${[...e.classList].filter(i=>!i.startsWith("is-")).map(i=>`.${i}`).join("")}`,expected:Fn(e,Ge.step),opacity:Number(t.opacity),hidden:t.visibility==="hidden",animations:e.getAnimations().length}})},presenter:Of,move:()=>({start:Ia,duration:jn}),settleTime:JM,frame:Df,clock:Wt,scene:Xt,profile:()=>ls,reader:(n=!Tn.on)=>Uf(n),theme(n){document.documentElement.dataset.theme=n,bu=mu(),Xt.setTheme(bu),Qr=""}};function R1(n,e){let t=Ii(On(st[n],e),0);return mt.intro?mt.intro(t):Number.isFinite(t.size)?{...t,visible:0,size:t.size*.7}:{...t,visible:0}}{let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("width","0"),n.setAttribute("height","0"),n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.innerHTML='<defs><linearGradient id="deck-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--grad-a, var(--accent))"/><stop offset="1" style="stop-color:var(--grad-b, var(--second))"/></linearGradient></defs>',document.body.append(n)}for(let n of document.querySelectorAll("svg[data-chart]")){let e=mt.CHARTS?.[n.dataset.chart];e&&uf(n,e,mt.ICONS)}sf(document,mt.ICONS);for(let n of st)Pf(n);for(let n of document.querySelectorAll("[data-widget]"))mt.widgets?.[n.dataset.widget]?.init?.(n,cs(0));for(let n of document.querySelectorAll("[data-tabs]"))t1(n);function C1(){let n=Aa.style.visibility;Aa.style.visibility="hidden";for(let e of new Set(st.flatMap(t=>t.shots)))Xt.applyState(Ii(e,0)),Xt.render();Aa.style.visibility=n,Qr=""}Nf();T1();Cf=pf({sounds:mt.sounds,stepSound:()=>ci(On(st[Ge.slide],Ge.step)).sound,stepKey:()=>`${Ge.slide}.${Ge.step}`,lang:document.documentElement.lang,addKey:kf});for(let[n,e]of Object.entries(mt.keys??{}))kf(n,e);A1();mt.setup?.({scene:Xt,stage:Pa,context:cs});var P1=Promise.all([...document.images].map(n=>n.decode().catch(()=>{}))),I1=Promise.all([...document.querySelectorAll("video")].map(n=>n.readyState>=2?null:(n.preload!=="auto"&&(n.preload="auto",n.load()),new Promise(e=>{n.addEventListener("loadeddata",e,{once:!0}),n.addEventListener("error",e,{once:!0}),setTimeout(e,5e3)}))));Promise.all([Xt.warmUp(),P1,I1]).finally(()=>{C1(),document.body.classList.add("ready"),Tn.on&&(Tn.waiting=!0,document.body.classList.add("reader","waiting"));let n=zf(),e=n.slide===0&&n.step===0;hi=e?R1(0,0):Ii(On(st[n.slide],n.step),0),Fi=hi,Kn(n.slide,n.step,{instant:!e,force:!0,from:hi}),Ff()});})();
