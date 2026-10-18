(()=>{var Rf=0,_u=1,Cf=2;var sr=1,Pf=2,jr=3,Ds=0,cn=1,zt=2,si=0,eo=1,hn=2,xu=3,yu=4,If=5;var rr=100,Lf=101,Df=102,Nf=103,Uf=104,Ff=200,Bf=201,Of=202,kf=203,vu=204,Mu=205,zf=206,Hf=207,Gf=208,Vf=209,Wf=210,Xf=211,qf=212,Yf=213,Zf=214,xl=0,yl=1,vl=2,Or=3,Ml=4,Sl=5,bl=6,El=7,Su=0,$f=1,Jf=2,yi=0,da=1,fa=2,pa=3,or=4,ma=5,ga=6,_a=7;var bu=300,Ns=301,ar=302,Ql=303,jl=304,xa=306,kr=1e3,Ii=1001,wl=1002,ln=1003,Kf=1004;var ya=1005;var fn=1006,ec=1007;var Us=1008;var zn=1009,Eu=1010,wu=1011,to=1012,tc=1013,vi=1014,Mi=1015,mn=1016,nc=1017,ic=1018,no=1020,Tu=35902,Au=35899,Ru=1021,Cu=1022,ri=1023,Ni=1026,Fs=1027,Pu=1028,sc=1029,Bs=1030,rc=1031;var oc=1033,va=33776,Ma=33777,Sa=33778,ba=33779,ac=35840,lc=35841,cc=35842,hc=35843,uc=36196,dc=37492,fc=37496,pc=37488,mc=37489,Ea=37490,gc=37491,_c=37808,xc=37809,yc=37810,vc=37811,Mc=37812,Sc=37813,bc=37814,Ec=37815,wc=37816,Tc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,Ic=36492,Lc=36494,Dc=36495,Nc=36283,Uc=36284,wa=36285,Fc=36286;var Fo=2300,Tl=2301,gl=2302,su=2303,ru=2400,ou=2401,au=2402;var Qf=3200;var Bc=0,jf=1,as="",dn="srgb",Bo="srgb-linear",Oo="linear",Mt="srgb";var _l=7680;var ep=519,tp=512,np=513,ip=514,Oc=515,sp=516,rp=517,kc=518,op=519,Iu=35044;var Lu="300 es",mi=2e3,zr=2001;function ig(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ap(){let i=ko("canvas");return i.style.display="block",i}var Yd={},Hr=null;function zo(...i){let e="THREE."+i.shift();Hr?Hr("log",e,...i):console.log(e,...i)}function lp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=lp(i);let e="THREE."+i.shift();if(Hr)Hr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=lp(i);let e="THREE."+i.shift();if(Hr)Hr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $s(...i){let e=i.join(" ");e in Yd||(Yd[e]=!0,Je(...i))}function cp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var hp={[xl]:yl,[vl]:bl,[Ml]:El,[Or]:Sl,[yl]:xl,[bl]:vl,[El]:Ml,[Sl]:Or},Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,Lo=Math.PI/180,Js=180/Math.PI;function Di(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Du(i,e){return(i%e+e)%e}function rg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function og(i,e,t){return i!==e?(t-i)/(e-i):0}function Do(i,e,t){return(1-t)*i+t*e}function ag(i,e,t,n){return Do(i,e,1-Math.exp(-t*n))}function lg(i,e=1){return e-Math.abs(Du(i,e*2)-e)}function cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ug(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dg(i,e){return i+Math.random()*(e-i)}function fg(i){return i*(.5-Math.random())}function pg(i){i!==void 0&&(Zd=i);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mg(i){return i*Lo}function gg(i){return i*Js}function _g(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ta={DEG2RAD:Lo,RAD2DEG:Js,generateUUID:Di,clamp:st,euclideanModulo:Du,mapLinear:rg,inverseLerp:og,lerp:Do,damp:ag,pingpong:lg,smoothstep:cg,smootherstep:hg,randInt:ug,randFloat:dg,randFloatSpread:fg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:_g,ceilPowerOfTwo:xg,floorPowerOfTwo:yg,setQuaternionFromProperEuler:vg,normalize:Ct,denormalize:pi},ku=class ku{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ku.prototype.isVector2=!0;var he=ku,Fi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let E=Math.acos(g),R=Math.sin(E);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a;let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-a*f,e[t+2]=c*m+h*f+a*u-l*d,e[t+3]=h*m-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zu=class zu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zu.prototype.isVector3=!0;var P=zu,Lh=new P,$d=new Fi,Hu=class Hu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],E=s[1],R=s[4],v=s[7],A=s[2],w=s[5],N=s[8];return r[0]=o*_+a*E+l*A,r[3]=o*g+a*R+l*w,r[6]=o*p+a*v+l*N,r[1]=c*_+h*E+d*A,r[4]=c*g+h*R+d*w,r[7]=c*p+h*v+d*N,r[2]=u*_+f*E+m*A,r[5]=u*g+f*R+m*w,r[8]=u*p+f*v+m*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hu.prototype.isMatrix3=!0;var ot=Hu,Dh=new ot,Jd=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){let i={enabled:!0,workingColorSpace:Bo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Mt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(s.r=Br(s.r),s.g=Br(s.g),s.b=Br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bo]:{primaries:e,whitePoint:n,transfer:Oo,toXYZ:Jd,fromXYZ:Kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Jd,fromXYZ:Kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}var dt=Mg();function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xr,Al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xr===void 0&&(xr=ko("canvas")),xr.width=e.width,xr.height=e.height;let s=xr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sg=0,Gr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nh(s[o].image)):r.push(Nh(s[o]))}else r=Nh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var bg=0,Uh=new P,Bn=class i extends Ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=fn,o=Us,a=ri,l=zn,c=i.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Di(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=bu;Bn.DEFAULT_ANISOTROPY=1;var Gu=class Gu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+u)/4,N=(d+_)/4,y=(m+g)/4;return R>v&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=N/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=N/r,s=y/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(d-_)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gu.prototype.isVector4=!0;var Rt=Gu,Rl=class extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Bn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ho=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Kl=class Kl{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,m,_,g)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;t[0]=u+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eg,e,wg)}lookAt(e,t,n){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),xs.crossVectors(n,Yn),xs.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),xs.crossVectors(n,Yn)),xs.normalize(),Va.crossVectors(Yn,xs),s[0]=xs.x,s[4]=Va.x,s[8]=Yn.x,s[1]=xs.y,s[5]=Va.y,s[9]=Yn.y,s[2]=xs.z,s[6]=Va.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],E=n[3],R=n[7],v=n[11],A=n[15],w=s[0],N=s[4],y=s[8],M=s[12],S=s[1],C=s[5],U=s[9],F=s[13],D=s[2],O=s[6],G=s[10],Z=s[14],re=s[3],J=s[7],se=s[11],ae=s[15];return r[0]=o*w+a*S+l*D+c*re,r[4]=o*N+a*C+l*O+c*J,r[8]=o*y+a*U+l*G+c*se,r[12]=o*M+a*F+l*Z+c*ae,r[1]=h*w+d*S+u*D+f*re,r[5]=h*N+d*C+u*O+f*J,r[9]=h*y+d*U+u*G+f*se,r[13]=h*M+d*F+u*Z+f*ae,r[2]=m*w+_*S+g*D+p*re,r[6]=m*N+_*C+g*O+p*J,r[10]=m*y+_*U+g*G+p*se,r[14]=m*M+_*F+g*Z+p*ae,r[3]=E*w+R*S+v*D+A*re,r[7]=E*N+R*C+v*O+A*J,r[11]=E*y+R*U+v*G+A*se,r[15]=E*M+R*F+v*Z+A*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],E=l*f-c*u,R=a*f-c*d,v=a*u-l*d,A=o*f-c*h,w=o*u-l*h,N=o*d-a*h;return t*(_*E-g*R+p*v)-n*(m*E-g*A+p*w)+s*(m*R-_*A+p*N)-r*(m*v-_*w+g*N)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],E=t*a-n*o,R=t*l-s*o,v=t*c-r*o,A=n*l-s*a,w=n*c-r*a,N=s*c-r*l,y=h*_-d*m,M=h*g-u*m,S=h*p-f*m,C=d*g-u*_,U=d*p-f*_,F=u*p-f*g,D=E*F-R*U+v*C+A*S-w*M+N*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(a*F-l*U+c*C)*O,e[1]=(s*U-n*F-r*C)*O,e[2]=(_*N-g*w+p*A)*O,e[3]=(u*w-d*N-f*A)*O,e[4]=(l*S-o*F-c*M)*O,e[5]=(t*F-s*S+r*M)*O,e[6]=(g*v-m*N-p*R)*O,e[7]=(h*N-u*v+f*R)*O,e[8]=(o*U-a*S+c*y)*O,e[9]=(n*S-t*U-r*y)*O,e[10]=(m*w-_*v+p*E)*O,e[11]=(d*v-h*w-f*E)*O,e[12]=(a*M-o*C-l*y)*O,e[13]=(t*C-n*M+s*y)*O,e[14]=(_*R-m*A-g*E)*O,e[15]=(h*A-d*R+u*E)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,_=o*h,g=o*d,p=a*d,E=l*c,R=l*h,v=l*d,A=n.x,w=n.y,N=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+v)*A,s[2]=(m-R)*A,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+p))*w,s[6]=(g+E)*w,s[7]=0,s[8]=(m+R)*N,s[9]=(g-E)*N,s[10]=(1-(u+_))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=yr.set(s[0],s[1],s[2]).length(),a=yr.set(s[4],s[5],s[6]).length(),l=yr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),hi.copy(this);let c=1/o,h=1/a,d=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,t.setFromRotationMatrix(hi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=mi,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===mi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===zr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===mi)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===zr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Kl.prototype.isMatrix4=!0;var At=Kl,yr=new P,hi=new At,Eg=new P(0,0,0),wg=new P(1,1,1),xs=new P,Va=new P,Yn=new P,Qd=new At,jd=new Fi,ss=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tg=0,ef=new P,vr=new Fi,Ki=new At,Wa=new P,Eo=new P,Ag=new P,Rg=new Fi,tf=new P(1,0,0),nf=new P(0,1,0),sf=new P(0,0,1),rf={type:"added"},Cg={type:"removed"},Mr={type:"childadded",child:null},Fh={type:"childremoved",child:null},Qt=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new ss,n=new Fi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new ot}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Eo,Wa,this.up):Ki.lookAt(Wa,Eo,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),vr.setFromRotationMatrix(Ki),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cg),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,Ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qt.DEFAULT_UP=new P(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Bh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Du(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bh(o,r,e+1/3),this.g=Bh(o,r,e),this.b=Bh(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let n=up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return dt.workingToColorSpace(An.copy(this),e),Math.round(st(An.r*255,0,255))*65536+Math.round(st(An.g*255,0,255))*256+Math.round(st(An.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(An.copy(this),t);let n=An.r,s=An.g,r=An.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=dn){dt.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,s=An.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Xa);let n=Do(ys.h,Xa.h,t),s=Do(ys.s,Xa.s,t),r=Do(ys.l,Xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new We;We.NAMES=up;var Vo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Wo=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ui=new P,Qi=new P,Oh=new P,ji=new P,Sr=new P,br=new P,of=new P,kh=new P,zh=new P,Hh=new P,Gh=new Rt,Vh=new Rt,Wh=new Rt,ns=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ui.subVectors(e,t),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ui.subVectors(s,t),Qi.subVectors(n,t),Oh.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Qi),l=ui.dot(Oh),c=Qi.dot(Qi),h=Qi.dot(Oh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Gh.setScalar(0),Vh.setScalar(0),Wh.setScalar(0),Gh.fromBufferAttribute(e,t),Vh.fromBufferAttribute(e,n),Wh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gh,r.x),o.addScaledVector(Vh,r.y),o.addScaledVector(Wh,r.z),o}static isFrontFacing(e,t,n,s){return ui.subVectors(n,t),Qi.subVectors(e,t),ui.cross(Qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),ui.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Sr.subVectors(s,n),br.subVectors(r,n),kh.subVectors(e,n);let l=Sr.dot(kh),c=br.dot(kh);if(l<=0&&c<=0)return t.copy(n);zh.subVectors(e,s);let h=Sr.dot(zh),d=br.dot(zh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Sr,o);Hh.subVectors(e,r);let f=Sr.dot(Hh),m=br.dot(Hh);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(br,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return of.subVectors(r,s),a=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(of,a);let p=1/(g+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(Sr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$n=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Ya.subVectors(this.max,wo),Er.subVectors(e.a,wo),wr.subVectors(e.b,wo),Tr.subVectors(e.c,wo),vs.subVectors(wr,Er),Ms.subVectors(Tr,wr),Xs.subVectors(Er,Tr);let t=[0,-vs.z,vs.y,0,-Ms.z,Ms.y,0,-Xs.z,Xs.y,vs.z,0,-vs.x,Ms.z,0,-Ms.x,Xs.z,0,-Xs.x,-vs.y,vs.x,0,-Ms.y,Ms.x,0,-Xs.y,Xs.x,0];return!Xh(t,Er,wr,Tr,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,Er,wr,Tr,Ya))?!1:(Za.crossVectors(vs,Ms),t=[Za.x,Za.y,Za.z],Xh(t,Er,wr,Tr,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new P,new P,new P,new P,new P,new P,new P,new P],di=new P,qa=new $n,Er=new P,wr=new P,Tr=new P,vs=new P,Ms=new P,Xs=new P,wo=new P,Ya=new P,Za=new P,qs=new P;function Xh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qs.fromArray(i,r);let a=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),h=n.dot(qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Jt=new P,$a=new he,Ig=0,qt=class extends Ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ig++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Xo=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qo=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lg=new $n,To=new P,qh=new P,gi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);let t=To.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(To,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(qh)),this.expandByPoint(To.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dg=0,ni=new At,Yh=new Qt,Ar=new P,Zn=new $n,Ao=new $n,on=new P,St=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?qo:Xo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Zn.min,Ao.min),Zn.expandByPoint(on),on.addVectors(Zn.max,Ao.max),Zn.expandByPoint(on)):(Zn.expandByPoint(Ao.min),Zn.expandByPoint(Ao.max))}Zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),on.add(Ar)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new P,l[y]=new P;let c=new P,h=new P,d=new P,u=new he,f=new he,m=new he,_=new P,g=new P;function p(y,M,S){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,S),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(C),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[y].add(_),a[M].add(_),a[S].add(_),l[y].add(g),l[M].add(g),l[S].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let y=0,M=E.length;y<M;++y){let S=E[y],C=S.start,U=S.count;for(let F=C,D=C+U;F<D;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let R=new P,v=new P,A=new P,w=new P;function N(y){A.fromBufferAttribute(s,y),w.copy(A);let M=a[y];R.copy(M),R.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);let C=v.dot(l[y])<0?-1:1;o.setXYZW(y,R.x,R.y,R.z,C)}for(let y=0,M=E.length;y<M;++y){let S=E[y],C=S.start,U=S.count;for(let F=C,D=C+U;F<D;F+=3)N(e.getX(F+0)),N(e.getX(F+1)),N(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new qt(u,h,d)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Fn=new P,Jn=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zh=new P,Ng=new P,Ug=new ot,fi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zh.subVectors(n,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ug.getNormalMatrix(e),s=this.coplanarPoint(Zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fg=0,Bi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=eo,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=Mu,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_l,this.stencilZFail=_l,this.stencilZPass=_l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oi=class extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rr,Ro=new P,Cr=new P,Pr=new P,Ir=new he,Co=new he,dp=new At,Ja=new P,Po=new P,Ka=new P,af=new he,$h=new he,lf=new he,rs=class extends Qt{constructor(e=new Oi){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new St;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yo(t,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Jn(n,3,0,!1)),Rr.setAttribute("uv",new Jn(n,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Pr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Qa(Ja.set(-.5,-.5,0),Pr,o,Cr,s,r),Qa(Po.set(.5,-.5,0),Pr,o,Cr,s,r),Qa(Ka.set(.5,.5,0),Pr,o,Cr,s,r),af.set(0,0),$h.set(1,0),lf.set(1,1);let a=e.ray.intersectTriangle(Ja,Po,Ka,!1,Ro);if(a===null&&(Qa(Po.set(-.5,.5,0),Pr,o,Cr,s,r),$h.set(0,1),a=e.ray.intersectTriangle(Ja,Ka,Po,!1,Ro),a===null))return;let l=e.ray.origin.distanceTo(Ro);l<e.near||l>e.far||t.push({distance:l,point:Ro.clone(),uv:ns.getInterpolation(Ro,Ja,Po,Ka,af,$h,lf,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qa(i,e,t,n,s,r){Ir.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Co.x=r*Ir.x-s*Ir.y,Co.y=s*Ir.x+r*Ir.y):Co.copy(Ir),i.copy(e),i.x+=Co.x,i.y+=Co.y,i.applyMatrix4(dp)}var ts=new P,Jh=new P,ja=new P,el=new P,Zo=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jh.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),el.copy(this.origin).sub(Jh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ja),a=el.dot(this.direction),l=-el.dot(ja),c=el.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jh).addScaledVector(ja,u),f}intersectSphere(e,t){if(e.radius<0)return null;ts.subVectors(e.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=t.x-o.x,_=t.y-o.y,g=t.z-o.z,p=n.x-o.x,E=n.y-o.y,R=n.z-o.z,v=Math.abs(l),A=Math.abs(c),w=Math.abs(h),N,y,M,S,C,U,F,D,O,G,Z,re;if(v>=A&&v>=w?(M=l,U=d,O=m,re=p,l>=0?(N=c,y=h,S=u,C=f,F=_,D=g,G=E,Z=R):(N=h,y=c,S=f,C=u,F=g,D=_,G=R,Z=E)):A>=w?(M=c,U=u,O=_,re=E,c>=0?(N=h,y=l,S=f,C=d,F=g,D=m,G=R,Z=p):(N=l,y=h,S=d,C=f,F=m,D=g,G=p,Z=R)):(M=h,U=f,O=g,re=R,h>=0?(N=l,y=c,S=d,C=u,F=m,D=_,G=p,Z=E):(N=c,y=l,S=u,C=d,F=_,D=m,G=E,Z=p)),M===0)return null;let J=N/M,se=y/M,ae=1/M,ye=S-J*U,_e=C-se*U,rt=F-J*O,tt=D-se*O,it=G-J*re,oe=Z-se*re,z=it*tt-oe*rt,fe=ye*oe-_e*it,Ne=rt*_e-tt*ye;if(s){if(z<0||fe<0||Ne<0)return null}else if((z<0||fe<0||Ne<0)&&(z>0||fe>0||Ne>0))return null;let ve=z+fe+Ne;if(ve===0)return null;let q=ae*(z*U+fe*O+Ne*re);return(ve>0?q<0:q>0)?null:this.at(q/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cf=new At,Ys=new Zo,tl=new gi,hf=new P,nl=new P,il=new P,sl=new P,Kh=new P,rl=new P,uf=new P,ol=new P,ie=class extends Qt{constructor(e=new St,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Kh.fromBufferAttribute(d,e),o?rl.addScaledVector(Kh,h):rl.addScaledVector(Kh.sub(t),h))}t.add(rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(tl.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(tl,hf)===null||Ys.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(cf.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(cf),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],E=Math.max(g.start,f.start),R=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=E,A=R;v<A;v+=3){let w=a.getX(v),N=a.getX(v+1),y=a.getX(v+2);s=al(this,p,e,n,c,h,d,w,N,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let E=a.getX(g),R=a.getX(g+1),v=a.getX(g+2);s=al(this,o,e,n,c,h,d,E,R,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],E=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=E,A=R;v<A;v+=3){let w=v,N=v+1,y=v+2;s=al(this,p,e,n,c,h,d,w,N,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let E=g,R=g+1,v=g+2;s=al(this,o,e,n,c,h,d,E,R,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Bg(i,e,t,n,s,r,o,a){let l;if(e.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ds,a),l===null)return null;ol.copy(a),ol.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ol);return c<t.near||c>t.far?null:{distance:c,point:ol.clone(),object:i}}function al(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,nl),i.getVertexPosition(l,il),i.getVertexPosition(c,sl);let h=Bg(i,e,t,n,nl,il,sl,uf);if(h){let d=new P;ns.getBarycoord(uf,nl,il,sl,d),s&&(h.uv=ns.getInterpolatedAttribute(s,a,l,c,d,new he)),r&&(h.uv1=ns.getInterpolatedAttribute(r,a,l,c,d,new he)),o&&(h.normal=ns.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};ns.getNormal(nl,il,sl,u.normal),h.face=u,h.barycoord=d}return h}var Pl=class extends Bn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=ln,h=ln,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=new gi,Og=new he(.5,.5),ll=new P,Wr=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],E=r[12],R=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,p-m,A-E).normalize(),s[1].setComponents(c+o,f+h,p+m,A+E).normalize(),s[2].setComponents(c+a,f+d,p+_,A+R).normalize(),s[3].setComponents(c-a,f-d,p-_,A-R).normalize(),n)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,f-u,p-g,A-v).normalize();else if(s[4].setComponents(c-l,f-u,p-g,A-v).normalize(),t===mi)s[5].setComponents(c+l,f+u,p+g,A+v).normalize();else if(t===zr)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);let t=Og.distanceTo(e.center);return Zs.radius=.7071067811865476+t,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},df=new At,lu=new Zo,cl=new gi,hl=new P,bs=class extends Qt{constructor(e=new St,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;df.copy(s).invert(),lu.copy(e.ray).applyMatrix4(df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,_=f;m<_;m++){let g=c.getX(m);hl.fromBufferAttribute(d,g),ff(hl,g,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)hl.fromBufferAttribute(d,m),ff(hl,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ff(i,e,t,n,s,r,o){let a=lu.distanceSqToPoint(i);if(a<t){let l=new P;lu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var $o=class extends Bn{constructor(e=[],t=Ns,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qs=class extends Bn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Es=class extends Bn{constructor(e,t,n=vi,s,r,o,a=ln,l=ln,c,h=Ni,d=1){if(h!==Ni&&h!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Il=class extends Es{constructor(e,t=vi,n=Ns,s,r,o=ln,a=ln,l,c=Ni){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jo=class extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xt=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function m(_,g,p,E,R,v,A,w,N,y,M){let S=v/N,C=A/y,U=v/2,F=A/2,D=w/2,O=N+1,G=y+1,Z=0,re=0,J=new P;for(let se=0;se<G;se++){let ae=se*C-F;for(let ye=0;ye<O;ye++){let _e=ye*S-U;J[_]=_e*E,J[g]=ae*R,J[p]=D,c.push(J.x,J.y,J.z),J[_]=0,J[g]=0,J[p]=w>0?1:-1,h.push(J.x,J.y,J.z),d.push(ye/N),d.push(1-se/y),Z+=1}}for(let se=0;se<y;se++)for(let ae=0;ae<N;ae++){let ye=u+ae+O*se,_e=u+ae+O*(se+1),rt=u+(ae+1)+O*(se+1),tt=u+(ae+1)+O*se;l.push(ye,_e,tt),l.push(_e,rt,tt),re+=6}a.addGroup(f,re,M),f+=re,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Xr=class i extends St{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,m=n*2+r,_=s+1,g=new P,p=new P;for(let E=0;E<=m;E++){let R=0,v=0,A=0,w=0;if(E<=n){let M=E/n,S=M*Math.PI/2;v=-h-e*Math.cos(S),A=e*Math.sin(S),w=-e*Math.cos(S),R=M*d}else if(E<=n+r){let M=(E-n)/r;v=-h+M*t,A=e,w=0,R=d+M*u}else{let M=(E-n-r)/n,S=M*Math.PI/2;v=h+e*Math.sin(S),A=e*Math.cos(S),w=e*Math.sin(S),R=d+u+M*d}let N=Math.max(0,Math.min(1,R/f)),y=0;E===0?y=.5/s:E===m&&(y=-.5/s);for(let M=0;M<=s;M++){let S=M/s,C=S*Math.PI*2,U=Math.sin(C),F=Math.cos(C);p.x=-A*F,p.y=v,p.z=A*U,a.push(p.x,p.y,p.z),g.set(-A*F,w,A*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+y,N)}if(E>0){let M=(E-1)*_;for(let S=0;S<s;S++){let C=M+S,U=M+S+1,F=E*_+S,D=E*_+S+1;o.push(C,U,F),o.push(U,D,F)}}}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},_i=class i extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pt=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,_=[],g=n/2,p=0;E(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function E(){let v=new P,A=new P,w=0,N=(t-e)/n;for(let y=0;y<=r;y++){let M=[],S=y/r,C=S*(t-e)+e;for(let U=0;U<=s;U++){let F=U/s,D=F*l+a,O=Math.sin(D),G=Math.cos(D);A.x=C*O,A.y=-S*n+g,A.z=C*G,d.push(A.x,A.y,A.z),v.set(O,N,G).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-S),M.push(m++)}_.push(M)}for(let y=0;y<s;y++)for(let M=0;M<r;M++){let S=_[M][y],C=_[M+1][y],U=_[M+1][y+1],F=_[M][y+1];(e>0||M!==0)&&(h.push(S,C,F),w+=3),(t>0||M!==r-1)&&(h.push(C,U,F),w+=3)}c.addGroup(p,w,0),p+=w}function R(v){let A=m,w=new he,N=new P,y=0,M=v===!0?e:t,S=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,g*S,0),u.push(0,S,0),f.push(.5,.5),m++;let C=m;for(let U=0;U<=s;U++){let D=U/s*l+a,O=Math.cos(D),G=Math.sin(D);N.x=M*G,N.y=g*S,N.z=M*O,d.push(N.x,N.y,N.z),u.push(0,S,0),w.x=O*.5+.5,w.y=G*.5*S+.5,f.push(w.x,w.y),m++}for(let U=0;U<s;U++){let F=A+U,D=C+U;v===!0?h.push(D,D+1,F):h.push(D+1,D,F),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class i extends pt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new At;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qr=class extends Kn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ll=class extends qr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var pf=new P,mf=new P,Qh=new Nu,jh=new Nu,eu=new Nu,ws=class extends Kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(mf.subVectors(s[0],s[1]).add(s[0]),c=mf);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Qh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,g),jh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,g),eu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),jh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),eu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Qh.calc(l),jh.calc(l),eu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function kg(i,e){let t=1-i;return t*t*e}function zg(i,e){return 2*(1-i)*i*e}function Hg(i,e){return i*i*e}function No(i,e,t,n){return kg(i,e)+zg(i,t)+Hg(i,n)}function Gg(i,e){let t=1-i;return t*t*t*e}function Vg(i,e){let t=1-i;return 3*t*t*i*e}function Wg(i,e){return 3*(1-i)*i*i*e}function Xg(i,e){return i*i*i*e}function Uo(i,e,t,n,s){return Gg(i,e)+Vg(i,t)+Wg(i,n)+Xg(i,s)}var Ko=class extends Kn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Uo(e,s.x,r.x,o.x,a.x),Uo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dl=class extends Kn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Uo(e,s.x,r.x,o.x,a.x),Uo(e,s.y,r.y,o.y,a.y),Uo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends Kn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends Kn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Kn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(No(e,s.x,r.x,o.x),No(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends Kn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(No(e,s.x,r.x,o.x),No(e,s.y,r.y,o.y),No(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ts=class extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(gf(a,l.x,c.x,h.x,d.x),gf(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Ul=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:ws,CubicBezierCurve:Ko,CubicBezierCurve3:Dl,EllipseCurve:qr,LineCurve:Qo,LineCurve3:Nl,QuadraticBezierCurve:jo,QuadraticBezierCurve3:ea,SplineCurve:Ts}),Fl=class extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ul[s.type]().fromJSON(s))}return this}},js=class extends Fl{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qo(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new jo(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ko(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ts(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new qr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},os=class extends js{constructor(e){super(e),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new js().fromJSON(s))}return this}};function qg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=fp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Kg(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return ta(r,o,t,a,l,c,0),o}function fp(i,e,t,n,s){let r;if(s===l0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=_f(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=_f(o/n|0,i[o],i[o+1],r);return r&&Yr(r,r.next)&&(ia(r),r=r.next),r}function er(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Yr(t,t.next)||Ht(t.prev,t,t.next)===0)){if(ia(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ta(i,e,t,n,s,r,o){if(!i)return;!o&&r&&n0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Zg(i,n,s,r):Yg(i)){e.push(l.i,i.i,c.i),ia(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=$g(er(i),e),ta(i,e,t,n,s,r,2)):o===2&&Jg(i,e,t,n,s,r):ta(er(i),e,t,n,s,r,1);break}}}function Yg(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Io(s,a,r,l,o,c,m.x,m.y)&&Ht(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Zg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),_=Math.max(a,l,c),g=Math.max(h,d,u),p=cu(f,m,e,t,n),E=cu(_,g,e,t,n),R=i.prevZ,v=i.nextZ;for(;R&&R.z>=p&&v&&v.z<=E;){if(R.x>=f&&R.x<=_&&R.y>=m&&R.y<=g&&R!==s&&R!==o&&Io(a,h,l,d,c,u,R.x,R.y)&&Ht(R.prev,R,R.next)>=0||(R=R.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Io(a,h,l,d,c,u,v.x,v.y)&&Ht(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=_&&R.y>=m&&R.y<=g&&R!==s&&R!==o&&Io(a,h,l,d,c,u,R.x,R.y)&&Ht(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Io(a,h,l,d,c,u,v.x,v.y)&&Ht(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $g(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Yr(n,s)&&mp(n,t,t.next,s)&&na(n,s)&&na(s,n)&&(e.push(n.i,t.i,s.i),ia(t),ia(t.next),t=i=s),t=t.next}while(t!==i);return er(t)}function Jg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r0(o,a)){let l=gp(o,a);o=er(o,o.next),l=er(l,l.next),ta(o,e,t,n,s,r,0),ta(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Kg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=fp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(s0(c))}s.sort(Qg);for(let r=0;r<s.length;r++)t=jg(s[r],t);return t}function Qg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function jg(i,e){let t=e0(i,e);if(!t)return e;let n=gp(t,i);return er(n,n.next),er(t,t.next)}function e0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Yr(i,t))return t;do{if(Yr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&pp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);na(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&t0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function t0(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function n0(i,e,t,n){let s=i;do s.z===0&&(s.z=cu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i0(s)}function i0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function cu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function s0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Io(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&pp(i,e,t,n,s,r,o,a)}function r0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!o0(i,e)&&(na(i,e)&&na(e,i)&&a0(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Yr(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Yr(i,e){return i.x===e.x&&i.y===e.y}function mp(i,e,t,n){let s=dl(Ht(i,e,t)),r=dl(Ht(i,e,n)),o=dl(Ht(t,n,i)),a=dl(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&ul(i,t,e)||r===0&&ul(i,n,e)||o===0&&ul(t,i,n)||a===0&&ul(t,e,n))}function ul(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dl(i){return i>0?1:i<0?-1:0}function o0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function na(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function a0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gp(i,e){let t=hu(i.i,i.x,i.y),n=hu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _f(i,e,t,n){let s=hu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ia(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var uu=class{static triangulate(e,t,n=2){return qg(e,t,n)}},Li=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];xf(e),yf(n,e);let o=e.length;t.forEach(xf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,yf(n,t[l]);let a=uu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Zr=class i extends St{constructor(e=new os([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:c0,R,v=!1,A,w,N,y;if(p){R=p.getSpacedPoints(h),v=!0,u=!1;let B=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,B),w=new P,N=new P,y=new P}u||(g=0,f=0,m=0,_=0);let M=a.extractPoints(c),S=M.shape,C=M.holes;if(!Li.isClockWise(S)){S=S.reverse();for(let B=0,k=C.length;B<k;B++){let W=C[B];Li.isClockWise(W)&&(C[B]=W.reverse())}}function F(B){let W=10000000000000001e-36,Y=B[0];for(let K=1;K<=B.length;K++){let me=K%B.length,Me=B[me],ke=Me.x-Y.x,Qe=Me.y-Y.y,H=ke*ke+Qe*Qe,gt=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(Y.x),Math.abs(Y.y)),at=W*gt*gt;if(H<=at){B.splice(me,1),K--;continue}Y=Me}}F(S),C.forEach(F);let D=C.length,O=S;for(let B=0;B<D;B++){let k=C[B];S=S.concat(k)}function G(B,k,W){return k||je("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(k,W)}let Z=S.length;function re(B,k,W){let Y,K,me,Me=B.x-k.x,ke=B.y-k.y,Qe=W.x-B.x,H=W.y-B.y,gt=Me*Me+ke*ke,at=Me*H-ke*Qe;if(Math.abs(at)>Number.EPSILON){let I=Math.sqrt(gt),x=Math.sqrt(Qe*Qe+H*H),$=k.x-ke/I,ee=k.y+Me/I,le=W.x-H/x,xe=W.y+Qe/x,Se=((le-$)*H-(xe-ee)*Qe)/(Me*H-ke*Qe);Y=$+Me*Se-B.x,K=ee+ke*Se-B.y;let ce=Y*Y+K*K;if(ce<=2)return new he(Y,K);me=Math.sqrt(ce/2)}else{let I=!1;Me>Number.EPSILON?Qe>Number.EPSILON&&(I=!0):Me<-Number.EPSILON?Qe<-Number.EPSILON&&(I=!0):Math.sign(ke)===Math.sign(H)&&(I=!0),I?(Y=-ke,K=Me,me=Math.sqrt(gt)):(Y=Me,K=ke,me=Math.sqrt(gt/2))}return new he(Y/me,K/me)}let J=[];for(let B=0,k=O.length,W=k-1,Y=B+1;B<k;B++,W++,Y++)W===k&&(W=0),Y===k&&(Y=0),J[B]=re(O[B],O[W],O[Y]);let se=[],ae,ye=J.concat();for(let B=0,k=D;B<k;B++){let W=C[B];ae=[];for(let Y=0,K=W.length,me=K-1,Me=Y+1;Y<K;Y++,me++,Me++)me===K&&(me=0),Me===K&&(Me=0),ae[Y]=re(W[Y],W[me],W[Me]);se.push(ae),ye=ye.concat(ae)}let _e;if(g===0)_e=Li.triangulateShape(O,C);else{let B=[],k=[];for(let W=0;W<g;W++){let Y=W/g,K=f*Math.cos(Y*Math.PI/2),me=m*Math.sin(Y*Math.PI/2)+_;for(let Me=0,ke=O.length;Me<ke;Me++){let Qe=G(O[Me],J[Me],me);fe(Qe.x,Qe.y,-K),Y===0&&B.push(Qe)}for(let Me=0,ke=D;Me<ke;Me++){let Qe=C[Me];ae=se[Me];let H=[];for(let gt=0,at=Qe.length;gt<at;gt++){let I=G(Qe[gt],ae[gt],me);fe(I.x,I.y,-K),Y===0&&H.push(I)}Y===0&&k.push(H)}}_e=Li.triangulateShape(B,k)}let rt=_e.length,tt=m+_;for(let B=0;B<Z;B++){let k=u?G(S[B],ye[B],tt):S[B];v?(N.copy(A.normals[0]).multiplyScalar(k.x),w.copy(A.binormals[0]).multiplyScalar(k.y),y.copy(R[0]).add(N).add(w),fe(y.x,y.y,y.z)):fe(k.x,k.y,0)}for(let B=1;B<=h;B++)for(let k=0;k<Z;k++){let W=u?G(S[k],ye[k],tt):S[k];v?(N.copy(A.normals[B]).multiplyScalar(W.x),w.copy(A.binormals[B]).multiplyScalar(W.y),y.copy(R[B]).add(N).add(w),fe(y.x,y.y,y.z)):fe(W.x,W.y,d/h*B)}for(let B=g-1;B>=0;B--){let k=B/g,W=f*Math.cos(k*Math.PI/2),Y=m*Math.sin(k*Math.PI/2)+_;for(let K=0,me=O.length;K<me;K++){let Me=G(O[K],J[K],Y);fe(Me.x,Me.y,d+W)}for(let K=0,me=C.length;K<me;K++){let Me=C[K];ae=se[K];for(let ke=0,Qe=Me.length;ke<Qe;ke++){let H=G(Me[ke],ae[ke],Y);v?fe(H.x,H.y+R[h-1].y,R[h-1].x+W):fe(H.x,H.y,d+W)}}}it(),oe();function it(){let B=s.length/3;if(u){let k=0,W=Z*k;for(let Y=0;Y<rt;Y++){let K=_e[Y];Ne(K[2]+W,K[1]+W,K[0]+W)}k=h+g*2,W=Z*k;for(let Y=0;Y<rt;Y++){let K=_e[Y];Ne(K[0]+W,K[1]+W,K[2]+W)}}else{for(let k=0;k<rt;k++){let W=_e[k];Ne(W[2],W[1],W[0])}for(let k=0;k<rt;k++){let W=_e[k];Ne(W[0]+Z*h,W[1]+Z*h,W[2]+Z*h)}}n.addGroup(B,s.length/3-B,0)}function oe(){let B=s.length/3,k=0;z(O,k),k+=O.length;for(let W=0,Y=C.length;W<Y;W++){let K=C[W];z(K,k),k+=K.length}n.addGroup(B,s.length/3-B,1)}function z(B,k){let W=B.length;for(;--W>=0;){let Y=W,K=W-1;K<0&&(K=B.length-1);for(let me=0,Me=h+g*2;me<Me;me++){let ke=Z*me,Qe=Z*(me+1),H=k+Y+ke,gt=k+K+ke,at=k+K+Qe,I=k+Y+Qe;ve(H,gt,at,I)}}}function fe(B,k,W){l.push(B),l.push(k),l.push(W)}function Ne(B,k,W){q(B),q(k),q(W);let Y=s.length/3,K=E.generateTopUV(n,s,Y-3,Y-2,Y-1);te(K[0]),te(K[1]),te(K[2])}function ve(B,k,W,Y){q(B),q(k),q(Y),q(k),q(W),q(Y);let K=s.length/3,me=E.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);te(me[0]),te(me[1]),te(me[3]),te(me[1]),te(me[2]),te(me[3])}function q(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function te(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return h0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ul[s.type]().fromJSON(s)),new i(n,e.options)}},c0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-d),new he(u,1-m),new he(_,1-p)]:[new he(a,1-l),new he(h,1-d),new he(f,1-m),new he(g,1-p)]}};function h0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var xi=class i extends St{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new P,u=new he,f=new P,m=new P,_=new P,g=0,p=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:g=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let E=0;E<=t;E++){let R=n+E*h*s,v=Math.sin(R),A=Math.cos(R);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*v,d.y=e[w].y,d.z=e[w].x*A,o.push(d.x,d.y,d.z),u.x=E/t,u.y=w/(e.length-1),a.push(u.x,u.y);let N=l[3*w+0]*v,y=l[3*w+1],M=l[3*w+0]*A;c.push(N,y,M)}}for(let E=0;E<t;E++)for(let R=0;R<e.length-1;R++){let v=R+E*e.length,A=v,w=v+e.length,N=v+e.length+1,y=v+1;r.push(A,w,y),r.push(N,y,w)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ki=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let E=p*u-o;for(let R=0;R<c;R++){let v=R*d-r;m.push(v,-E,0),_.push(0,0,1),g.push(R/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let R=E+c*p,v=E+c*(p+1),A=E+1+c*(p+1),w=E+1+c*p;f.push(R,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},sa=class i extends St{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new P,m=new he;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let E=p+g,R=E,v=E+n+1,A=E+n+2,w=E+1;a.push(R,v,w),a.push(v,A,w)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ii=class i extends St{constructor(e=new os([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,m=u.holes;Li.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let E=m[g];Li.isClockWise(E)===!0&&(m[g]=E.reverse())}let _=Li.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let E=m[g];f=f.concat(E)}for(let g=0,p=f.length;g<p;g++){let E=f[g];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let g=0,p=_.length;g<p;g++){let E=_[g],R=E[0]+d,v=E[1]+d,A=E[2]+d;n.push(R,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return u0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function u0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Bt=class i extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let E=[],R=p/n,v=o+R*a,A=e*Math.cos(v),w=Math.sqrt(e*e-A*A),N=0;p===0&&o===0?N=.5/t:p===n&&l===Math.PI&&(N=-.5/t);for(let y=0;y<=t;y++){let M=y/t,S=s+M*r;d.x=-w*Math.cos(S),d.y=A,d.z=w*Math.sin(S),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(M+N,1-R),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){let R=h[p][E+1],v=h[p][E],A=h[p+1][E],w=h[p+1][E+1];(p!==0||o>0)&&f.push(R,v,w),(p!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Cn=class i extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,m=new P;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let p=0;p<=s;p++){let E=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(E),f.y=(e+t*Math.cos(g))*Math.sin(E),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(E),u.y=e*Math.sin(E),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,E=(s+1)*(_-1)+g-1,R=(s+1)*(_-1)+g,v=(s+1)*_+g;l.push(p,E,v),l.push(E,R,v)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var tr=class i extends St{constructor(e=new ea(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new he,h=new P,d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function _(){for(let R=0;R<t;R++)g(R);g(r===!1?t:0),E(),p()}function g(R){h=e.getPointAt(R/t,h);let v=o.normals[R],A=o.binormals[R];for(let w=0;w<=s;w++){let N=w/s*Math.PI*2,y=Math.sin(N),M=-Math.cos(N);l.x=M*v.x+y*A.x,l.y=M*v.y+y*A.y,l.z=M*v.z+y*A.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let R=1;R<=t;R++)for(let v=1;v<=s;v++){let A=(s+1)*(R-1)+(v-1),w=(s+1)*R+(v-1),N=(s+1)*R+v,y=(s+1)*(R-1)+v;m.push(A,w,y),m.push(w,N,y)}}function E(){for(let R=0;R<=t;R++)for(let v=0;v<=s;v++)c.x=R/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ul[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ra=class extends St{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new P,r=new P;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let m=u,_=u+f;m<_;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),E=a.getX(m+(g+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,E),vf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),vf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new nt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function vf(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Mf(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Mf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pn(i){let e={};for(let t=0;t<i.length;t++){let n=lr(i[t]);for(let s in n)e[s]=n[s]}return e}function Mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function d0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var oi={clone:lr,merge:Pn},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new At().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$r=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nr=class extends et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Bl=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ol=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Lr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function tu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var As=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kl=class extends As{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,l=2*n-t;break;case au:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,E=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,R=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+E*o[c+A]+R*o[l+A]+v*o[d+A];return r}},zl=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Hl=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gl=class extends As{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(s-t),_=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*m;return r}let u=a*2,f=e-1;for(let m=0;m!==a;++m){let _=o[c+m],g=o[l+m],p=f*u+m*2,E=d[p],R=d[p+1],v=e*u+m*2,A=h[v],w=h[v+1],N=g0(n,t,E,A,s);r[m]=_p(N,_,R,w,g)}return r}};function _p(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function m0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function g0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=_p(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=m0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),tu(e.settings)&&(n.settings={inTangents:Lr(e.settings.inTangents,Array),outTangents:Lr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fo:t=this.InterpolantFactoryMethodDiscrete;break;case Tl:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case su:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;tu(this.settings)&&(Sf(this.settings.inTangents,e),Sf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&sg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=t[d+m];if(_!==t[u+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,tu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Tl;var Rs=class extends Qn{constructor(e,t,n){super(e,t,n)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Fo;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}};Vl.prototype.ValueTypeName="color";var Wl=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}};Wl.prototype.ValueTypeName="number";var Xl=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Fi.slerpFlat(r,0,o,c-a,o,c,l);return r}},oa=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Qn{constructor(e,t,n){super(e,t,n)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Fo;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}};ql.prototype.ValueTypeName="vector";var Yl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xp=new Yl,Zl=class{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},aa=class extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nu=new At,bf=new P,Ef=new P,Jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(bf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){nu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===zr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fl=new P,pl=new Fi,Pi=new P,la=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fl,pl,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,pl,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fl,pl,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,pl,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new P,wf=new he,Tf=new he,an=class extends la{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,wf,Tf),t.subVectors(Tf,wf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},du=class extends Jr{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Kr=class extends ir{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new du}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},fu=class extends Jr{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Ps=class extends ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Is=class extends la{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pu=class extends Jr{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new pu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ca=class extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Dr=-90,Nr=1,$l=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Dr,Nr,e,t);s.layers=this.layers,this.add(s);let r=new an(Dr,Nr,e,t);r.layers=this.layers,this.add(r);let o=new an(Dr,Nr,e,t);o.layers=this.layers,this.add(o);let a=new an(Dr,Nr,e,t);a.layers=this.layers,this.add(a);let l=new an(Dr,Nr,e,t);l.layers=this.layers,this.add(l);let c=new an(Dr,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Jl=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function _0(){this._document.hidden===!1&&this.reset()}var Fu="\\[\\]\\.:\\/",x0=new RegExp("["+Fu+"]","g"),Bu="[^"+Fu+"]",y0="[^"+Fu.replace("\\.","")+"]",v0=/((?:WC+[\/:])*)/.source.replace("WC",Bu),M0=/(WCOD+)?/.source.replace("WCOD",y0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),E0=new RegExp("^"+v0+M0+S0+b0+"$"),w0=["material","materials","bones","map"],mu=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(e){let t=E0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);w0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=mu;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fS=new Float32Array(1);var Ls=class extends Yo{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Vu=class Vu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Vu.prototype.isMatrix2=!0;var gu=Vu;var Af=new P,ml=new P,Ur=new P,Fr=new P,iu=new P,T0=new P,A0=new P,ua=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Af.subVectors(e,this.start),ml.subVectors(this.end,this.start);let n=ml.dot(ml);if(n===0)return 0;let r=ml.dot(Af)/n;return t&&(r=st(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=T0,n=A0){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Ur.subVectors(c,a),Fr.subVectors(h,l),iu.subVectors(a,l);let d=Ur.dot(Ur),u=Fr.dot(Fr),f=Fr.dot(iu);if(d<=s&&u<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(d<=s)r=0,o=f/u,o=st(o,0,1);else{let m=Ur.dot(iu);if(u<=s)o=0,r=st(-m/d,0,1);else{let _=Ur.dot(Fr),g=d*u-_*_;g!==0?r=st((_*f-m*u)/g,0,1):r=0,o=(_*r+f)/u,o<0?(o=0,r=st(-m/d,0,1)):o>1&&(o=1,r=st((_-m)/d,0,1))}}return t.copy(a).addScaledVector(Ur,r),n.copy(l).addScaledVector(Fr,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ou(i,e,t,n){let s=R0(n);switch(t){case Ru:return i*e;case Pu:return i*e/s.components*s.byteLength;case sc:return i*e/s.components*s.byteLength;case Bs:return i*e*2/s.components*s.byteLength;case rc:return i*e*2/s.components*s.byteLength;case Cu:return i*e*3/s.components*s.byteLength;case ri:return i*e*4/s.components*s.byteLength;case oc:return i*e*4/s.components*s.byteLength;case va:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:case hc:return Math.max(i,16)*Math.max(e,8)/4;case ac:case cc:return Math.max(i,8)*Math.max(e,8)/2;case uc:case dc:case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fc:case Ea:case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wa:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R0(i){switch(i){case zn:case Eu:return{byteLength:1,components:1};case to:case wu:case mn:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case vi:case tc:case Mi:return{byteLength:4,components:1};case Tu:case Au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function P0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
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
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,b_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,C_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,H_=`#if defined( USE_POINTS_UV )
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
#endif`,G_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
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
#endif`,Z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
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
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,gx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kx=`#define DISTANCE
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
}`,zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 diffuse;
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
}`,Yx=`#define LAMBERT
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
}`,Zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,$x=`#define MATCAP
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
}`,Jx=`#define MATCAP
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
}`,Kx=`#define NORMAL
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
}`,Qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
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
}`,ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ty=`#define STANDARD
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
}`,ny=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,iy=`#define TOON
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
}`,sy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ry=`uniform float size;
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
}`,oy=`uniform vec3 diffuse;
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
}`,ay=`#include <common>
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
}`,ly=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,cy=`uniform float rotation;
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
}`,hy=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:I0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:N0,alphatest_fragment:U0,alphatest_pars_fragment:F0,aomap_fragment:B0,aomap_pars_fragment:O0,batching_pars_vertex:k0,batching_vertex:z0,begin_vertex:H0,beginnormal_vertex:G0,bsdfs:V0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:$0,color_fragment:J0,color_pars_fragment:K0,color_pars_vertex:Q0,color_vertex:j0,common:e_,cube_uv_reflection_fragment:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:s_,emissivemap_fragment:r_,emissivemap_pars_fragment:o_,colorspace_fragment:a_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:h_,envmap_pars_fragment:u_,envmap_pars_vertex:d_,envmap_physical_pars_fragment:b_,envmap_vertex:f_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:x_,lightmap_pars_fragment:y_,lights_lambert_fragment:v_,lights_lambert_pars_fragment:M_,lights_pars_begin:S_,lights_toon_fragment:E_,lights_toon_pars_fragment:w_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:P_,lights_fragment_maps:I_,lights_fragment_end:L_,lightprobes_pars_fragment:D_,logdepthbuf_fragment:N_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:F_,logdepthbuf_vertex:B_,map_fragment:O_,map_pars_fragment:k_,map_particle_fragment:z_,map_particle_pars_fragment:H_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:V_,morphinstance_vertex:W_,morphcolor_vertex:X_,morphnormal_vertex:q_,morphtarget_pars_vertex:Y_,morphtarget_vertex:Z_,normal_fragment_begin:$_,normal_fragment_maps:J_,normal_pars_fragment:K_,normal_pars_vertex:Q_,normal_vertex:j_,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:sx,opaque_fragment:rx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:hx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:dx,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:_x,skinning_pars_vertex:xx,skinning_vertex:yx,skinnormal_vertex:vx,specularmap_fragment:Mx,specularmap_pars_fragment:Sx,tonemapping_fragment:bx,tonemapping_pars_fragment:Ex,transmission_fragment:wx,transmission_pars_fragment:Tx,uv_pars_fragment:Ax,uv_pars_vertex:Rx,uv_vertex:Cx,worldpos_vertex:Px,background_vert:Ix,background_frag:Lx,backgroundCube_vert:Dx,backgroundCube_frag:Nx,cube_vert:Ux,cube_frag:Fx,depth_vert:Bx,depth_frag:Ox,distance_vert:kx,distance_frag:zx,equirect_vert:Hx,equirect_frag:Gx,linedashed_vert:Vx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:qx,meshlambert_vert:Yx,meshlambert_frag:Zx,meshmatcap_vert:$x,meshmatcap_frag:Jx,meshnormal_vert:Kx,meshnormal_frag:Qx,meshphong_vert:jx,meshphong_frag:ey,meshphysical_vert:ty,meshphysical_frag:ny,meshtoon_vert:iy,meshtoon_frag:sy,points_vert:ry,points_frag:oy,shadow_vert:ay,shadow_frag:ly,sprite_vert:cy,sprite_frag:hy},be={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},On={basic:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Pn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Pn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Pn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Pn([be.points,be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Pn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Pn([be.common,be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Pn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Pn([be.sprite,be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Pn([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Pn([be.lights,be.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};On.physical={uniforms:Pn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var zc={r:0,b:0,g:0},uy=new At,Hp=new ot;Hp.set(-1,0,0,0,1,0,0,0,1);function dy(i,e,t,n,s,r){let o=new We(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let v=E.backgroundBlurriness>0;R=e.get(R,v)}return R}function m(E){let R=!1,v=f(E);v===null?g(o,a):v&&v.isColor&&(g(v,1),R=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,R){let v=f(R);v&&(v.isCubeTexture||v.mapping===xa)?(c===void 0&&(c=new ie(new xt(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:lr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hp),c.material.toneMapped=dt.getTransfer(v.colorSpace)!==Mt,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ie(new ki(2,2),new Ot({name:"BackgroundMaterial",uniforms:lr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=dt.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,R){E.getRGB(zc,Uu(i)),t.buffers.color.setClear(zc.r,zc.g,zc.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,R=1){o.set(E),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,g(o,a)},render:m,addToRenderList:_,dispose:p}}function fy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(C,U,F,D,O){let G=!1,Z=d(C,D,F,U);r!==Z&&(r=Z,c(r.object)),G=f(C,D,F,O),G&&m(C,D,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(C,U,F,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,U,F,D){let O=D.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let Z=C.isInstancedMesh===!0?C.id:0,re=G[Z];re===void 0&&(re={},G[Z]=re);let J=re[F.id];J===void 0&&(J={},re[F.id]=J);let se=J[O];return se===void 0&&(se=u(l()),J[O]=se),se}function u(C){let U=[],F=[],D=[];for(let O=0;O<t;O++)U[O]=0,F[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:D,object:C,attributes:{},index:null}}function f(C,U,F,D){let O=r.attributes,G=U.attributes,Z=0,re=F.getAttributes();for(let J in re)if(re[J].location>=0){let ae=O[J],ye=G[J];if(ye===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),ae===void 0||ae.attribute!==ye||ye&&ae.data!==ye.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function m(C,U,F,D){let O={},G=U.attributes,Z=0,re=F.getAttributes();for(let J in re)if(re[J].location>=0){let ae=G[J];ae===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));let ye={};ye.attribute=ae,ae&&ae.data&&(ye.data=ae.data),O[J]=ye,Z++}r.attributes=O,r.attributesNum=Z,r.index=D}function _(){let C=r.newAttributes;for(let U=0,F=C.length;U<F;U++)C[U]=0}function g(C){p(C,0)}function p(C,U){let F=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;F[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),O[C]!==U&&(i.vertexAttribDivisor(C,U),O[C]=U)}function E(){let C=r.newAttributes,U=r.enabledAttributes;for(let F=0,D=U.length;F<D;F++)U[F]!==C[F]&&(i.disableVertexAttribArray(F),U[F]=0)}function R(C,U,F,D,O,G,Z){Z===!0?i.vertexAttribIPointer(C,U,F,O,G):i.vertexAttribPointer(C,U,F,D,O,G)}function v(C,U,F,D){_();let O=D.attributes,G=F.getAttributes(),Z=U.defaultAttributeValues;for(let re in G){let J=G[re];if(J.location>=0){let se=O[re];if(se===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),se!==void 0){let ae=se.normalized,ye=se.itemSize,_e=e.get(se);if(_e===void 0)continue;let rt=_e.buffer,tt=_e.type,it=_e.bytesPerElement,oe=tt===i.INT||tt===i.UNSIGNED_INT||se.gpuType===tc;if(se.isInterleavedBufferAttribute){let z=se.data,fe=z.stride,Ne=se.offset;if(z.isInstancedInterleavedBuffer){for(let ve=0;ve<J.locationSize;ve++)p(J.location+ve,z.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ve=0;ve<J.locationSize;ve++)g(J.location+ve);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ve=0;ve<J.locationSize;ve++)R(J.location+ve,ye/J.locationSize,tt,ae,fe*it,(Ne+ye/J.locationSize*ve)*it,oe)}else{if(se.isInstancedBufferAttribute){for(let z=0;z<J.locationSize;z++)p(J.location+z,se.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let z=0;z<J.locationSize;z++)g(J.location+z);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let z=0;z<J.locationSize;z++)R(J.location+z,ye/J.locationSize,tt,ae,ye*it,ye/J.locationSize*z*it,oe)}}else if(Z!==void 0){let ae=Z[re];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(J.location,ae);break;case 3:i.vertexAttrib3fv(J.location,ae);break;case 4:i.vertexAttrib4fv(J.location,ae);break;default:i.vertexAttrib1fv(J.location,ae)}}}}E()}function A(){M();for(let C in n){let U=n[C];for(let F in U){let D=U[F];for(let O in D){let G=D[O];for(let Z in G)h(G[Z].object),delete G[Z];delete D[O]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;let U=n[C.id];for(let F in U){let D=U[F];for(let O in D){let G=D[O];for(let Z in G)h(G[Z].object),delete G[Z];delete D[O]}}delete n[C.id]}function N(C){for(let U in n){let F=n[U];for(let D in F){let O=F[D];if(O[C.id]===void 0)continue;let G=O[C.id];for(let Z in G)h(G[Z].object),delete G[Z];delete O[C.id]}}}function y(C){for(let U in n){let F=n[U],D=C.isInstancedMesh===!0?C.id:0,O=F[D];if(O!==void 0){for(let G in O){let Z=O[G];for(let re in Z)h(Z[re].object),delete Z[re];delete O[G]}delete F[D],Object.keys(F).length===0&&delete n[U]}}}function M(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function py(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function my(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==ri&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let y=N===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==zn&&N!==Mi&&!y&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:v,maxSamples:A,samples:w}}function gy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new fi,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,R=E*4,v=p.clippingState||null;l.value=v,v=h(m,u,R,f);for(let A=0;A!==R;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,v=f;R!==_;++R,v+=4)o.copy(d[R]).applyMatrix4(E,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var so=4,_y=6,xy=20,yy=256,Aa=new Is,yp=new We,Wu=null,Xu=0,qu=0,Yu=!1,vy=new P,cr=new P,Gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=vy}=r;Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,qu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:mn,format:ri,colorSpace:Bo,depthBuffer:!1},s=vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=My(r)),this._blurMaterial=by(r,e,t),this._ggxMaterial=Sy(r,e,t)}return s}_compileMaterial(e){let t=new ie(new St,e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,s,r){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(yp),d.toneMapping=yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new xt,new pn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,p=!0):(g.color.copy(yp),p=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):v===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let A=this._cubeSize;io(s,v*A,R>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ns||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Aa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-so?n-m+so:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,io(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,io(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Aa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-so?s-this._lodMax+so:0),u=4*(this._cubeSize-h);io(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,Aa)}};function My(i){let e=[],t=[],n=i,s=i-so+1+_y;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,R=p>2?0:-1,v=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];m.set(v,f*u*p);for(let A=0;A<u;A++){let w=h[A*2]*2-1,N=h[A*2+1]*2-1;p===0?cr.set(1,N,w):p===1?cr.set(-w,1,-N):p===2?cr.set(-w,N,1):p===3?cr.set(-1,N,-w):p===4?cr.set(-w,-1,N):cr.set(w,N,-1),cr.toArray(_,(p*u+A)*f)}}let g=new St;g.setAttribute("position",new qt(m,f)),g.setAttribute("outputDirection",new qt(_,f)),t.push(new ie(g,null)),n>so&&n--}return{lodMeshes:t,sizeLods:e}}function vp(i,e,t){let n=new Kt(i,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sy(i,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function by(i,e,t){return new Ot({name:"SphericalGaussianBlur",defines:{SAMPLES:xy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Mp(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Sp(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vc=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $o(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xt(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:si});r.uniforms.tEquirect.value=t;let o=new ie(s,r),a=t.minFilter;return t.minFilter===Us&&(t.minFilter=fn),new $l(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Ey(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ql||f===jl)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Vc(m.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Ql||f===jl,_=f===Ns||f===ar;if(m||_){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Gc(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let E=u.image;return m&&E&&E.height>0||_&&E&&l(E)?(n===null&&(n=new Gc(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Ql?u.mapping=Ns:f===jl&&(u.mapping=ar),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function wy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$s("WebGLRenderer: "+n+" extension not supported."),s}}}function Ty(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let E=f.array;_=f.version;for(let R=0,v=E.length;R<v;R+=3){let A=E[R+0],w=E[R+1],N=E[R+2];u.push(A,w,w,N,N,A)}}else{let E=m.array;_=m.version;for(let R=0,v=E.length/3-1;R<v;R+=3){let A=R+0,w=R+1,N=R+2;u.push(A,w,w,N,N,A)}}let g=new(m.count>=65535?qo:Xo)(u,1);g.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ay(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ry(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cy(i,e,t){let n=new WeakMap,s=new Rt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let M=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],R=0;f===!0&&(R=1),m===!0&&(R=2),_===!0&&(R=3);let v=a.attributes.position.count*R,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*A*4*d),N=new Ho(w,v,A,d);N.type=Mi,N.needsUpdate=!0;let y=R*4;for(let S=0;S<d;S++){let C=g[S],U=p[S],F=E[S],D=v*A*4*S;for(let O=0;O<C.count;O++){let G=O*y;f===!0&&(s.fromBufferAttribute(C,O),w[D+G+0]=s.x,w[D+G+1]=s.y,w[D+G+2]=s.z,w[D+G+3]=0),m===!0&&(s.fromBufferAttribute(U,O),w[D+G+4]=s.x,w[D+G+5]=s.y,w[D+G+6]=s.z,w[D+G+7]=0),_===!0&&(s.fromBufferAttribute(F,O),w[D+G+8]=s.x,w[D+G+9]=s.y,w[D+G+10]=s.z,w[D+G+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:N,size:new he(v,A)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Py(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Iy={[da]:"LINEAR_TONE_MAPPING",[fa]:"REINHARD_TONE_MAPPING",[pa]:"CINEON_TONE_MAPPING",[or]:"ACES_FILMIC_TONE_MAPPING",[ga]:"AGX_TONE_MAPPING",[_a]:"NEUTRAL_TONE_MAPPING",[ma]:"CUSTOM_TONE_MAPPING"};function Ly(i,e,t,n,s,r){let o=new Kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new St;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));let h=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ie(c,h),u=new Is(-1,1,1,-1,0,1),f=null,m=null,_=!1,g,p=null,E=[],R=!1;this.setSize=function(v,A){o.setSize(v,A),a!==null&&a.setSize(v,A),l!==null&&l.setSize(v,A);for(let w=0;w<E.length;w++){let N=E[w];N.setSize&&N.setSize(v,A)}},this.setEffects=function(v){E=v,R=E.length>0&&E[0].isRenderPass===!0;let A=o.width,w=o.height;E.length>0&&a===null&&(a=new Kt(A,w,{type:mn,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(A,w,{type:mn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<E.length;N++){let y=E[N];y.setSize&&y.setSize(A,w)}},this.begin=function(v,A){if(_||v.toneMapping===yi&&E.length===0)return!1;if(p=A,A!==null){let w=A.width,N=A.height;(o.width!==w||o.height!==N)&&this.setSize(w,N)}return R===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=yi,!0},this.hasRenderPass=function(){return R},this.end=function(v,A){v.toneMapping=g,_=!0;let w=o,N=a;for(let y=0;y<E.length;y++){let M=E[y];M.enabled!==!1&&(M.render(v,N,w,A),M.needsSwap!==!1&&(w=N,N=N===a?l:a))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},dt.getTransfer(f)===Mt&&(h.defines.SRGB_TRANSFER="");let y=Iy[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Gp=new Bn,Ju=new Es(1,1),Vp=new Ho,Wp=new Cl,Xp=new $o,bp=[],Ep=[],wp=new Float32Array(16),Tp=new Float32Array(9),Ap=new Float32Array(4);function oo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bp[s];if(r===void 0&&(r=new Float32Array(s),bp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qc(i,e){let t=Ep[e];t===void 0&&(t=new Int32Array(e),Ep[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ap.set(n),i.uniformMatrix2fv(this.addr,!1,Ap),nn(t,n)}}function Oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Tp.set(n),i.uniformMatrix3fv(this.addr,!1,Tp),nn(t,n)}}function ky(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;wp.set(n),i.uniformMatrix4fv(this.addr,!1,wp),nn(t,n)}}function zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function Wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ju.compareFunction=t.isReversedDepthBuffer()?kc:Oc,r=Ju):r=Gp,t.setTexture2D(e||r,s)}function $y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wp,s)}function Jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xp,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vp,s)}function Qy(i){switch(i){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Fy;case 35674:return By;case 35675:return Oy;case 35676:return ky;case 5124:case 35670:return zy;case 35667:case 35671:return Hy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Ky}}function jy(i,e){i.uniform1fv(this.addr,e)}function ev(i,e){let t=oo(e,this.size,2);i.uniform2fv(this.addr,t)}function tv(i,e){let t=oo(e,this.size,3);i.uniform3fv(this.addr,t)}function nv(i,e){let t=oo(e,this.size,4);i.uniform4fv(this.addr,t)}function iv(i,e){let t=oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sv(i,e){let t=oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rv(i,e){let t=oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ov(i,e){i.uniform1iv(this.addr,e)}function av(i,e){i.uniform2iv(this.addr,e)}function lv(i,e){i.uniform3iv(this.addr,e)}function cv(i,e){i.uniform4iv(this.addr,e)}function hv(i,e){i.uniform1uiv(this.addr,e)}function uv(i,e){i.uniform2uiv(this.addr,e)}function dv(i,e){i.uniform3uiv(this.addr,e)}function fv(i,e){i.uniform4uiv(this.addr,e)}function pv(i,e,t){let n=this.cache,s=e.length,r=qc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ju:o=Gp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function mv(i,e,t){let n=this.cache,s=e.length,r=qc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wp,r[o])}function gv(i,e,t){let n=this.cache,s=e.length,r=qc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xp,r[o])}function _v(i,e,t){let n=this.cache,s=e.length,r=qc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vp,r[o])}function xv(i){switch(i){case 5126:return jy;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return hv;case 36294:return uv;case 36295:return dv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}var Ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qy(t.type)}},Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}},ju=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Zu=/(\w+)(\])?(\[|\.)?/g;function Rp(i,e){i.seq.push(e),i.map[e.id]=e}function yv(i,e,t){let n=i.name,s=n.length;for(Zu.lastIndex=0;;){let r=Zu.exec(n),o=Zu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rp(t,c===void 0?new Ku(a,i,e):new Qu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new ju(a),Rp(t,d)),t=d}}}var ro=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);yv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Cp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vv=37297,Mv=0;function Sv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Pp=new ot;function bv(i){dt._getMatrix(Pp,dt.workingColorSpace,i);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Oo:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ip(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Sv(i.getShaderSource(e),a)}else return r}function Ev(i,e){let t=bv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var wv={[da]:"Linear",[fa]:"Reinhard",[pa]:"Cineon",[or]:"ACESFilmic",[ga]:"AgX",[_a]:"Neutral",[ma]:"Custom"};function Tv(i,e){let t=wv[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hc=new P;function Av(){dt.getLuminanceCoefficients(Hc);let i=Hc.x.toFixed(4),e=Hc.y.toFixed(4),t=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function Cv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ca(i){return i!==""}function Lp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(i){return i.replace(Iv,Dv)}var Lv=new Map;function Dv(i,e){let t=ht[e];if(t===void 0){let n=Lv.get(e);if(n!==void 0)t=ht[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ed(t)}var Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(i){return i.replace(Nv,Uv)}function Uv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Up(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Fv={[sr]:"SHADOWMAP_TYPE_PCF",[jr]:"SHADOWMAP_TYPE_VSM"};function Bv(i){return Fv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ov={[Ns]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE_UV"};function kv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ov[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var zv={[ar]:"ENVMAP_MODE_REFRACTION"};function Hv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gv={[Su]:"ENVMAP_BLENDING_MULTIPLY",[$f]:"ENVMAP_BLENDING_MIX",[Jf]:"ENVMAP_BLENDING_ADD"};function Vv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gv[i.combine]||"ENVMAP_BLENDING_NONE"}function Wv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Bv(t),c=kv(t),h=Hv(t),d=Vv(t),u=Wv(t),f=Rv(t),m=Cv(r),_=s.createProgram(),g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ca).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ca).join(`
`),p.length>0&&(p+=`
`)):(g=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),p=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ht.tonemapping_pars_fragment:"",t.toneMapping!==yi?Tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Ev("linearToOutputTexel",t.outputColorSpace),Av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),o=ed(o),o=Lp(o,t),o=Dp(o,t),a=ed(a),a=Lp(a,t),a=Dp(a,t),o=Np(o),a=Np(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=E+g+o,v=E+p+a,A=Cp(s,s.VERTEX_SHADER,R),w=Cp(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function N(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(A)||"",D=s.getShaderInfoLog(w)||"",O=U.trim(),G=F.trim(),Z=D.trim(),re=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{let se=Ip(s,A,"vertex"),ae=Ip(s,w,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+se+`
`+ae)}else O!==""?Je("WebGLProgram: Program Info Log:",O):(G===""||Z==="")&&(J=!1);J&&(C.diagnostics={runnable:re,programLog:O,vertexShader:{log:G,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(A),s.deleteShader(w),y=new ro(s,_),M=Pv(s,_)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let M;this.getAttributes=function(){return M===void 0&&N(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,vv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}var qv=0,td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nd(e),t.set(e,n)),n}},nd=class{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}};function Yv(i){return i===Bs||i===Ea||i===wa}function Zv(i,e,t,n,s,r){let o=new Go,a=new td,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,M,S,C,U,F){let D=C.fog,O=U.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,re=e.get(y.envMap||G,Z),J=re&&re.mapping===xa?re.image.height:null,se=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Je("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ye=ae!==void 0?ae.length:0,_e=0;O.morphAttributes.position!==void 0&&(_e=1),O.morphAttributes.normal!==void 0&&(_e=2),O.morphAttributes.color!==void 0&&(_e=3);let rt,tt,it,oe;if(se){let Dt=On[se];rt=Dt.vertexShader,tt=Dt.fragmentShader}else{rt=y.vertexShader,tt=y.fragmentShader;let Dt=a.getVertexShaderStage(y),wt=a.getFragmentShaderStage(y);a.update(y,Dt,wt),it=Dt.id,oe=wt.id}let z=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,ve=U.isBatchedMesh===!0,q=!!y.map,te=!!y.matcap,B=!!re,k=!!y.aoMap,W=!!y.lightMap,Y=!!y.bumpMap&&y.wireframe===!1,K=!!y.normalMap,me=!!y.displacementMap,Me=!!y.emissiveMap,ke=!!y.metalnessMap,Qe=!!y.roughnessMap,H=y.anisotropy>0,gt=y.clearcoat>0,at=y.dispersion>0,I=y.retroreflectivity>0,x=y.iridescence>0,$=y.sheen>0,ee=y.transmission>0,le=H&&!!y.anisotropyMap,xe=gt&&!!y.clearcoatMap,Se=gt&&!!y.clearcoatNormalMap,ce=gt&&!!y.clearcoatRoughnessMap,de=x&&!!y.iridescenceMap,we=x&&!!y.iridescenceThicknessMap,qe=$&&!!y.sheenColorMap,Ce=$&&!!y.sheenRoughnessMap,Te=!!y.specularMap,Ye=!!y.specularColorMap,$e=!!y.specularIntensityMap,lt=ee&&!!y.transmissionMap,X=ee&&!!y.thicknessMap,Ae=!!y.gradientMap,ue=!!y.alphaMap,Re=y.alphaTest>0,Le=!!y.alphaHash,pe=!!y.extensions,Ze=yi;y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ze=i.toneMapping);let Ve={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:tt,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ve,batchingColor:ve&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:q,matcap:te,envMap:B,envMapMode:B&&re.mapping,envMapCubeUVHeight:J,aoMap:k,lightMap:W,bumpMap:Y,normalMap:K,displacementMap:me,emissiveMap:Me,normalMapObjectSpace:K&&y.normalMapType===jf,normalMapTangentSpace:K&&y.normalMapType===Bc,packedNormalMap:K&&y.normalMapType===Bc&&Yv(y.normalMap.format),metalnessMap:ke,roughnessMap:Qe,anisotropy:H,anisotropyMap:le,clearcoat:gt,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:ce,dispersion:at,retroreflection:I,iridescence:x,iridescenceMap:de,iridescenceThicknessMap:we,sheen:$,sheenColorMap:qe,sheenRoughnessMap:Ce,specularMap:Te,specularColorMap:Ye,specularIntensityMap:$e,transmission:ee,transmissionMap:lt,thicknessMap:X,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===eo&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Re,alphaHash:Le,combine:y.combine,mapUv:q&&m(y.map.channel),aoMapUv:k&&m(y.aoMap.channel),lightMapUv:W&&m(y.lightMap.channel),bumpMapUv:Y&&m(y.bumpMap.channel),normalMapUv:K&&m(y.normalMap.channel),displacementMapUv:me&&m(y.displacementMap.channel),emissiveMapUv:Me&&m(y.emissiveMap.channel),metalnessMapUv:ke&&m(y.metalnessMap.channel),roughnessMapUv:Qe&&m(y.roughnessMap.channel),anisotropyMapUv:le&&m(y.anisotropyMap.channel),clearcoatMapUv:xe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(y.sheenRoughnessMap.channel),specularMapUv:Te&&m(y.specularMap.channel),specularColorMapUv:Ye&&m(y.specularColorMap.channel),specularIntensityMapUv:$e&&m(y.specularIntensityMap.channel),transmissionMapUv:lt&&m(y.transmissionMap.channel),thicknessMapUv:X&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(K||H),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(q||ue),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&K===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:_e,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:q&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:Me&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function g(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)M.push(S),M.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(p(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function p(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numSunLights),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numSunLightShadows),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function R(y){let M=f[y.type],S;if(M){let C=On[M];S=oi.clone(C.uniforms)}else S=y.uniforms;return S}function v(y,M){let S=h.get(M);return S!==void 0?++S.usedTimes:(S=new Xv(i,M,y,s),c.push(S),h.set(M,S)),S}function A(y){if(--y.usedTimes===0){let M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function N(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:R,acquireProgram:v,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:N}}function $v(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Jv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,g,p){let E=i[e];return E===void 0?(E={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[e]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=m,E.materialVariant=o(u),E.groupOrder=_,E.renderOrder=u.renderOrder,E.z=g,E.group=p),e++,E}function l(u,f,m,_,g,p,E){E.reversedDepth===!0&&(g=-g);let R=a(u,f,m,_,g,p);m.transmission>0?n.push(R):m.transparent===!0?s.push(R):t.push(R)}function c(u,f,m,_,g,p){let E=a(u,f,m,_,g,p);m.transmission>0?n.unshift(E):m.transparent===!0?s.unshift(E):t.unshift(E)}function h(u,f){t.length>1&&t.sort(u||Jv),n.length>1&&n.sort(f||Fp),s.length>1&&s.sort(f||Fp)}function d(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Kv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Bp,i.set(n,[o])):s>=r.length?(o=new Bp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function jv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var eM=0;function tM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nM(i){let e=new Qv,t=jv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new At,o=new At;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,E=0,R=0,v=0,A=0,w=0,N=0,y=0,M=0,S=0;c.sort(tM);for(let U=0,F=c.length;U<F;U++){let D=c[U],O=D.color,G=D.intensity,Z=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Bs?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*G,d+=O.g*G,u+=O.b*G;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],G);S++}else if(D.isSunLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,ae=t.get(D);ae.shadowIntensity=se.intensity,ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[m]=ae,n.sunShadowMap[m]=re;let ye=se.getViewportCount();for(let _e=0;_e<ye;_e++)n.sunShadowMatrix[_+_e]=se.getMatrix(_e),n.sunShadowCascade[_+_e]=se._cascadeData[_e];_+=ye,m++}n.sun[f]=J,f++}else if(D.isDirectionalLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,ae=t.get(D);ae.shadowIntensity=se.intensity,ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,n.directionalShadow[g]=ae,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=D.shadow.matrix,A++}n.directional[g]=J,g++}else if(D.isSpotLight){let J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(O).multiplyScalar(G),J.distance=Z,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[E]=J;let se=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,se.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[E]=se.matrix,D.castShadow){let ae=t.get(D);ae.shadowIntensity=se.intensity,ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,n.spotShadow[E]=ae,n.spotShadowMap[E]=re,N++}E++}else if(D.isRectAreaLight){let J=e.get(D);J.color.copy(O).multiplyScalar(G),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=J,R++}else if(D.isPointLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let se=D.shadow,ae=t.get(D);ae.shadowIntensity=se.intensity,ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,ae.shadowCameraNear=se.camera.near,ae.shadowCameraFar=se.camera.far,n.pointShadow[p]=ae,n.pointShadowMap[p]=re,n.pointShadowMatrix[p]=D.shadow.matrix,w++}n.point[p]=J,p++}else if(D.isHemisphereLight){let J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(G),J.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[v]=J,v++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==E||C.rectAreaLength!==R||C.hemiLength!==v||C.numSunShadows!==m||C.numDirectionalShadows!==A||C.numPointShadows!==w||C.numSpotShadows!==N||C.numSpotMaps!==y||C.numLightProbes!==S)&&(n.sun.length=f,n.directional.length=g,n.spot.length=E,n.rectArea.length=R,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+y-M,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=S,C.sunLength=f,C.directionalLength=g,C.pointLength=p,C.spotLength=E,C.rectAreaLength=R,C.hemiLength=v,C.numSunShadows=m,C.numDirectionalShadows=A,C.numPointShadows=w,C.numSpotShadows=N,C.numSpotMaps=y,C.numLightProbes=S,n.version=eM++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let E=0,R=c.length;E<R;E++){let v=c[E];if(v.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(v.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Op(i){let e=new nM(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function iM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Op(i),e.set(s,[a])):r>=o.length?(a=new Op(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oM=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],aM=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],kp=new At,Ra=new P,$u=new P;function lM(i,e,t){let n=new Wr,s=new he,r=new he,o=new Rt,a=new Bl,l=new Ol,c={},h=t.maxTextureSize,d={[Ds]:cn,[cn]:Ds,[zt]:zt},u=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:sM,fragmentShader:rM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new St;m.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ie(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let p=this.type;this.render=function(w,N,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Pf&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);let M=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(si),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=p!==this.type;F&&N.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=w.length;D<O;D++){let G=w[D],Z=G.shadow;if(Z===void 0){Je("WebGLShadowMap:",G,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let re=Z.getFrameExtents();s.multiply(re),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,Z.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=J,Z.map===null||F===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===jr){if(G.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Kt(s.x,s.y,{format:Bs,type:mn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),Z.map.texture.name=G.name+".shadowMap",Z.map.depthTexture=new Es(s.x,s.y,Mi),Z.map.depthTexture.name=G.name+".shadowMapDepth",Z.map.depthTexture.format=Ni,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=ln,Z.map.depthTexture.magFilter=ln}else G.isPointLight?(Z.map=new Vc(s.x),Z.map.depthTexture=new Il(s.x,vi)):(Z.map=new Kt(s.x,s.y),Z.map.depthTexture=new Es(s.x,s.y,vi)),Z.map.depthTexture.name=G.name+".shadowMap",Z.map.depthTexture.format=Ni,this.type===sr?(Z.map.depthTexture.compareFunction=J?kc:Oc,Z.map.depthTexture.minFilter=fn,Z.map.depthTexture.magFilter=fn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=ln,Z.map.depthTexture.magFilter=ln);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let se=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();G.isPointLight!==!0&&Z.updateMatrices(G,y);for(let ae=0;ae<se;ae++){let ye=Z.getCamera(ae);if(G.isPointLight){let _e=Z.camera,rt=Z.matrix,tt=G.distance||_e.far;tt!==_e.far&&(_e.far=tt,_e.updateProjectionMatrix()),Ra.setFromMatrixPosition(G.matrixWorld),_e.position.copy(Ra),$u.copy(_e.position),$u.add(oM[ae]),_e.up.copy(aM[ae]),_e.lookAt($u),_e.updateMatrixWorld(),rt.makeTranslation(-Ra.x,-Ra.y,-Ra.z),kp.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(kp,_e.coordinateSystem,_e.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(Z.map),i.clear());let _e=Z.getViewport(ae);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),U.viewport(o)}n=Z.getFrustum(ae),v(N,y,ye,G,this.type)}Z.isPointLightShadow!==!0&&this.type===jr&&E(Z,y),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,C)};function E(w,N){let y=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Kt(s.x,s.y,{format:Bs,type:mn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(N,null,y,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(N,null,y,f,_,null)}function R(w,N,y,M){let S=null,C=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=y.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let U=S.uuid,F=N.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let O=D[F];O===void 0&&(O=S.clone(),D[F]=O,N.addEventListener("dispose",A)),S=O}if(S.visible=N.visible,S.wireframe=N.wireframe,M===jr?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:d[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let U=i.properties.get(S);U.light=y}return S}function v(w,N,y,M,S){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===jr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let F=e.update(w),D=w.material;if(Array.isArray(D)){let O=F.groups;for(let G=0,Z=O.length;G<Z;G++){let re=O[G],J=D[re.materialIndex];if(J&&J.visible){let se=R(w,J,M,S);w.onBeforeShadow(i,w,N,y,F,se,re),i.renderBufferDirect(y,null,F,se,w,re),w.onAfterShadow(i,w,N,y,F,se,re)}}}else if(D.visible){let O=R(w,D,M,S);w.onBeforeShadow(i,w,N,y,F,O,null),i.renderBufferDirect(y,null,F,O,w,null),w.onAfterShadow(i,w,N,y,F,O,null)}}let U=w.children;for(let F=0,D=U.length;F<D;F++)v(U[F],N,y,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(let y in c){let M=c[y],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function cM(i,e){function t(){let X=!1,Ae=new Rt,ue=null,Re=new Rt(0,0,0,0);return{setMask:function(Le){ue!==Le&&!X&&(i.colorMask(Le,Le,Le,Le),ue=Le)},setLocked:function(Le){X=Le},setClear:function(Le,pe,Ze,Ve,Dt){Dt===!0&&(Le*=Ve,pe*=Ve,Ze*=Ve),Ae.set(Le,pe,Ze,Ve),Re.equals(Ae)===!1&&(i.clearColor(Le,pe,Ze,Ve),Re.copy(Ae))},reset:function(){X=!1,ue=null,Re.set(-1,0,0,0)}}}function n(){let X=!1,Ae=!1,ue=null,Re=null,Le=null;return{setReversed:function(pe){if(Ae!==pe){let Ze=e.get("EXT_clip_control");pe?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=pe;let Ve=Le;Le=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(pe){pe?z(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!X&&(i.depthMask(pe),ue=pe)},setFunc:function(pe){if(Ae&&(pe=hp[pe]),Re!==pe){switch(pe){case xl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case Or:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=pe}},setLocked:function(pe){X=pe},setClear:function(pe){Le!==pe&&(Le=pe,Ae&&(pe=1-pe),i.clearDepth(pe))},reset:function(){X=!1,ue=null,Re=null,Le=null,Ae=!1}}}function s(){let X=!1,Ae=null,ue=null,Re=null,Le=null,pe=null,Ze=null,Ve=null,Dt=null;return{setTest:function(wt){X||(wt?z(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!X&&(i.stencilMask(wt),Ae=wt)},setFunc:function(wt,ci,Ri){(ue!==wt||Re!==ci||Le!==Ri)&&(i.stencilFunc(wt,ci,Ri),ue=wt,Re=ci,Le=Ri)},setOp:function(wt,ci,Ri){(pe!==wt||Ze!==ci||Ve!==Ri)&&(i.stencilOp(wt,ci,Ri),pe=wt,Ze=ci,Ve=Ri)},setLocked:function(wt){X=wt},setClear:function(wt){Dt!==wt&&(i.clearStencil(wt),Dt=wt)},reset:function(){X=!1,Ae=null,ue=null,Re=null,Le=null,pe=null,Ze=null,Ve=null,Dt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,E=null,R=null,v=null,A=null,w=null,N=null,y=new We(0,0,0),M=0,S=!1,C=null,U=null,F=null,D=null,O=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,re=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=re>=1):J.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=re>=2);let se=null,ae={},ye=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),rt=new Rt().fromArray(ye),tt=new Rt().fromArray(_e);function it(X,Ae,ue,Re){let Le=new Uint8Array(4),pe=i.createTexture();i.bindTexture(X,pe),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ue;Ze++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Ae+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return pe}let oe={};oe[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(i.DEPTH_TEST),o.setFunc(Or),Y(!1),K(_u),z(i.CULL_FACE),k(si);function z(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function fe(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function Ne(X,Ae){return u[X]!==Ae?(i.bindFramebuffer(X,Ae),u[X]=Ae,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ve(X,Ae){let ue=m,Re=!1;if(X){ue=f.get(Ae),ue===void 0&&(ue=[],f.set(Ae,ue));let Le=X.textures;if(ue.length!==Le.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ze=Le.length;pe<Ze;pe++)ue[pe]=i.COLOR_ATTACHMENT0+pe;ue.length=Le.length,Re=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ue)}function q(X){return _!==X?(i.useProgram(X),_=X,!0):!1}let te={[rr]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Df]:i.FUNC_REVERSE_SUBTRACT};te[Nf]=i.MIN,te[Uf]=i.MAX;let B={[Ff]:i.ZERO,[Bf]:i.ONE,[Of]:i.SRC_COLOR,[vu]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Gf]:i.DST_COLOR,[zf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[Mu]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Xf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[Zf]:i.ONE_MINUS_CONSTANT_ALPHA};function k(X,Ae,ue,Re,Le,pe,Ze,Ve,Dt,wt){if(X===si){g===!0&&(fe(i.BLEND),g=!1);return}if(g===!1&&(z(i.BLEND),g=!0),X!==If){if(X!==p||wt!==S){if((E!==rr||A!==rr)&&(i.blendEquation(i.FUNC_ADD),E=rr,A=rr),wt)switch(X){case eo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFunc(i.ONE,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",X);break}else switch(X){case eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xu:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",X);break}R=null,v=null,w=null,N=null,y.set(0,0,0),M=0,p=X,S=wt}return}Le=Le||Ae,pe=pe||ue,Ze=Ze||Re,(Ae!==E||Le!==A)&&(i.blendEquationSeparate(te[Ae],te[Le]),E=Ae,A=Le),(ue!==R||Re!==v||pe!==w||Ze!==N)&&(i.blendFuncSeparate(B[ue],B[Re],B[pe],B[Ze]),R=ue,v=Re,w=pe,N=Ze),(Ve.equals(y)===!1||Dt!==M)&&(i.blendColor(Ve.r,Ve.g,Ve.b,Dt),y.copy(Ve),M=Dt),p=X,S=!1}function W(X,Ae){X.side===zt?fe(i.CULL_FACE):z(i.CULL_FACE);let ue=X.side===cn;Ae&&(ue=!ue),Y(ue),X.blending===eo&&X.transparent===!1?k(si):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Re=X.stencilWrite;a.setTest(Re),Re&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Me(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(X){C!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),C=X)}function K(X){X!==Rf?(z(i.CULL_FACE),X!==U&&(X===_u?i.cullFace(i.BACK):X===Cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),U=X}function me(X){X!==F&&(Z&&i.lineWidth(X),F=X)}function Me(X,Ae,ue){X?(z(i.POLYGON_OFFSET_FILL),(D!==Ae||O!==ue)&&(D=Ae,O=ue,o.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,ue))):fe(i.POLYGON_OFFSET_FILL)}function ke(X){X?z(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function Qe(X){X===void 0&&(X=i.TEXTURE0+G-1),se!==X&&(i.activeTexture(X),se=X)}function H(X,Ae,ue){ue===void 0&&(se===null?ue=i.TEXTURE0+G-1:ue=se);let Re=ae[ue];Re===void 0&&(Re={type:void 0,texture:void 0},ae[ue]=Re),(Re.type!==X||Re.texture!==Ae)&&(se!==ue&&(i.activeTexture(ue),se=ue),i.bindTexture(X,Ae||oe[X]),Re.type=X,Re.texture=Ae)}function gt(){let X=ae[se];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function at(){try{i.compressedTexImage2D(...arguments)}catch(X){je("WebGLState:",X)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(X){je("WebGLState:",X)}}function x(){try{i.texSubImage2D(...arguments)}catch(X){je("WebGLState:",X)}}function $(){try{i.texSubImage3D(...arguments)}catch(X){je("WebGLState:",X)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(X){je("WebGLState:",X)}}function le(){try{i.compressedTexSubImage3D(...arguments)}catch(X){je("WebGLState:",X)}}function xe(){try{i.texStorage2D(...arguments)}catch(X){je("WebGLState:",X)}}function Se(){try{i.texStorage3D(...arguments)}catch(X){je("WebGLState:",X)}}function ce(){try{i.texImage2D(...arguments)}catch(X){je("WebGLState:",X)}}function de(){try{i.texImage3D(...arguments)}catch(X){je("WebGLState:",X)}}function we(X){return d[X]!==void 0?d[X]:i.getParameter(X)}function qe(X,Ae){d[X]!==Ae&&(i.pixelStorei(X,Ae),d[X]=Ae)}function Ce(X){rt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),rt.copy(X))}function Te(X){tt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),tt.copy(X))}function Ye(X,Ae){let ue=c.get(Ae);ue===void 0&&(ue=new WeakMap,c.set(Ae,ue));let Re=ue.get(X);Re===void 0&&(Re=i.getUniformBlockIndex(Ae,X.name),ue.set(X,Re))}function $e(X,Ae){let Re=c.get(Ae).get(X);l.get(Ae)!==Re&&(i.uniformBlockBinding(Ae,Re,X.__bindingPointIndex),l.set(Ae,Re))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},se=null,ae={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,E=null,R=null,v=null,A=null,w=null,N=null,y=new We(0,0,0),M=0,S=!1,C=null,U=null,F=null,D=null,O=null,rt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:fe,bindFramebuffer:Ne,drawBuffers:ve,useProgram:q,setBlending:k,setMaterial:W,setFlipSided:Y,setCullFace:K,setLineWidth:me,setPolygonOffset:Me,setScissorTest:ke,activeTexture:Qe,bindTexture:H,unbindTexture:gt,compressedTexImage2D:at,compressedTexImage3D:I,texImage2D:ce,texImage3D:de,pixelStorei:qe,getParameter:we,updateUBOMapping:Ye,uniformBlockBinding:$e,texStorage2D:xe,texStorage3D:Se,texSubImage2D:x,texSubImage3D:$,compressedTexSubImage2D:ee,compressedTexSubImage3D:le,scissor:Ce,viewport:Te,reset:lt}}function hM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,x){return m?new OffscreenCanvas(I,x):ko("canvas")}function g(I,x,$){let ee=1,le=at(I);if((le.width>$||le.height>$)&&(ee=$/Math.max(le.width,le.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(ee*le.width),Se=Math.floor(ee*le.height);u===void 0&&(u=_(xe,Se));let ce=x?_(xe,Se):u;return ce.width=xe,ce.height=Se,ce.getContext("2d").drawImage(I,0,0,xe,Se),Je("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+Se+")."),ce}else return"data"in I&&Je("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),I;return I}function p(I){return I.generateMipmaps}function E(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,x,$,ee,le,xe=!1){if(I!==null){if(i[I]!==void 0)return i[I];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Se;ee&&(Se=e.get("EXT_texture_norm16"),Se||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=x;if(x===i.RED&&($===i.FLOAT&&(ce=i.R32F),$===i.HALF_FLOAT&&(ce=i.R16F),$===i.UNSIGNED_BYTE&&(ce=i.R8),$===i.UNSIGNED_SHORT&&Se&&(ce=Se.R16_EXT),$===i.SHORT&&Se&&(ce=Se.R16_SNORM_EXT)),x===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ce=i.R8UI),$===i.UNSIGNED_SHORT&&(ce=i.R16UI),$===i.UNSIGNED_INT&&(ce=i.R32UI),$===i.BYTE&&(ce=i.R8I),$===i.SHORT&&(ce=i.R16I),$===i.INT&&(ce=i.R32I)),x===i.RG&&($===i.FLOAT&&(ce=i.RG32F),$===i.HALF_FLOAT&&(ce=i.RG16F),$===i.UNSIGNED_BYTE&&(ce=i.RG8),$===i.UNSIGNED_SHORT&&Se&&(ce=Se.RG16_EXT),$===i.SHORT&&Se&&(ce=Se.RG16_SNORM_EXT)),x===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ce=i.RG8UI),$===i.UNSIGNED_SHORT&&(ce=i.RG16UI),$===i.UNSIGNED_INT&&(ce=i.RG32UI),$===i.BYTE&&(ce=i.RG8I),$===i.SHORT&&(ce=i.RG16I),$===i.INT&&(ce=i.RG32I)),x===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),$===i.UNSIGNED_INT&&(ce=i.RGB32UI),$===i.BYTE&&(ce=i.RGB8I),$===i.SHORT&&(ce=i.RGB16I),$===i.INT&&(ce=i.RGB32I)),x===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),$===i.UNSIGNED_INT&&(ce=i.RGBA32UI),$===i.BYTE&&(ce=i.RGBA8I),$===i.SHORT&&(ce=i.RGBA16I),$===i.INT&&(ce=i.RGBA32I)),x===i.RGB&&($===i.UNSIGNED_SHORT&&Se&&(ce=Se.RGB16_EXT),$===i.SHORT&&Se&&(ce=Se.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),x===i.RGBA){let de=xe?Oo:dt.getTransfer(le);$===i.FLOAT&&(ce=i.RGBA32F),$===i.HALF_FLOAT&&(ce=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ce=de===Mt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&Se&&(ce=Se.RGBA16_EXT),$===i.SHORT&&Se&&(ce=Se.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(I,x){let $;return I?x===null||x===vi||x===no?$=i.DEPTH24_STENCIL8:x===Mi?$=i.DEPTH32F_STENCIL8:x===to&&($=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===no?$=i.DEPTH_COMPONENT24:x===Mi?$=i.DEPTH_COMPONENT32F:x===to&&($=i.DEPTH_COMPONENT16),$}function w(I,x){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function N(I){let x=I.target;x.removeEventListener("dispose",N),M(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(I){let x=I.target;x.removeEventListener("dispose",y),C(x)}function M(I){let x=n.get(I);if(x.__webglInit===void 0)return;let $=I.source,ee=f.get($);if(ee){let le=ee[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(I),Object.keys(ee).length===0&&f.delete($)}n.remove(I)}function S(I){let x=n.get(I);i.deleteTexture(x.__webglTexture);let $=I.source,ee=f.get($);delete ee[x.__cacheKey],o.memory.textures--}function C(I){let x=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let le=0;le<x.__webglFramebuffer[ee].length;le++)i.deleteFramebuffer(x.__webglFramebuffer[ee][le]);else i.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[ee]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let $=I.textures;for(let ee=0,le=$.length;ee<le;ee++){let xe=n.get($[ee]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove($[ee])}n.remove(I)}let U=0;function F(){U=0}function D(){return U}function O(I){U=I}function G(){let I=U;return I>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function Z(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function re(I,x){let $=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){let ee=I.image;if(ee===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{fe($,I,x);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+x)}function J(I,x){let $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){fe($,I,x);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+x)}function se(I,x){let $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){fe($,I,x);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+x)}function ae(I,x){let $=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){Ne($,I,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+x)}let ye={[kr]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[wl]:i.MIRRORED_REPEAT},_e={[ln]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[ec]:i.LINEAR_MIPMAP_NEAREST,[Us]:i.LINEAR_MIPMAP_LINEAR},rt={[tp]:i.NEVER,[op]:i.ALWAYS,[np]:i.LESS,[Oc]:i.LEQUAL,[ip]:i.EQUAL,[kc]:i.GEQUAL,[sp]:i.GREATER,[rp]:i.NOTEQUAL};function tt(I,x){if(x.type===Mi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===ec||x.magFilter===ya||x.magFilter===Us||x.minFilter===fn||x.minFilter===ec||x.minFilter===ya||x.minFilter===Us)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ye[x.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ye[x.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ye[x.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,_e[x.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,rt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==ya&&x.minFilter!==Us||x.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function it(I,x){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",N));let ee=x.source,le=f.get(ee);le===void 0&&(le={},f.set(ee,le));let xe=Z(x);if(xe!==I.__cacheKey){le[xe]===void 0&&(le[xe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),le[xe].usedTimes++;let Se=le[I.__cacheKey];Se!==void 0&&(le[I.__cacheKey].usedTimes--,Se.usedTimes===0&&S(x)),I.__cacheKey=xe,I.__webglTexture=le[xe].texture}return $}function oe(I,x,$){return Math.floor(Math.floor(I/$)/x)}function z(I,x,$,ee){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,$,ee,x.data);else{xe.sort((qe,Ce)=>qe.start-Ce.start);let Se=0;for(let qe=1;qe<xe.length;qe++){let Ce=xe[Se],Te=xe[qe],Ye=Ce.start+Ce.count,$e=oe(Te.start,x.width,4),lt=oe(Ce.start,x.width,4);Te.start<=Ye+1&&$e===lt&&oe(Te.start+Te.count-1,x.width,4)===$e?Ce.count=Math.max(Ce.count,Te.start+Te.count-Ce.start):(++Se,xe[Se]=Te)}xe.length=Se+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let qe=0,Ce=xe.length;qe<Ce;qe++){let Te=xe[qe],Ye=Math.floor(Te.start/4),$e=Math.ceil(Te.count/4),lt=Ye%x.width,X=Math.floor(Ye/x.width),Ae=$e,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,lt,X,Ae,ue,$,ee,x.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function fe(I,x,$){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);let le=it(I,x),xe=x.source;t.bindTexture(ee,I.__webglTexture,i.TEXTURE0+$);let Se=n.get(xe);if(xe.version!==Se.__version||le===!0){if(t.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ue=dt.getPrimaries(dt.workingColorSpace),Re=x.colorSpace===as?null:dt.getPrimaries(x.colorSpace),Le=x.colorSpace===as||ue===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let de=g(x.image,!1,s.maxTextureSize);de=gt(x,de);let we=r.convert(x.format,x.colorSpace),qe=r.convert(x.type),Ce=v(x.internalFormat,we,qe,x.normalized,x.colorSpace,x.isVideoTexture);tt(ee,x);let Te,Ye=x.mipmaps,$e=x.isVideoTexture!==!0,lt=Se.__version===void 0||le===!0,X=xe.dataReady,Ae=w(x,de);if(x.isDepthTexture)Ce=A(x.format===Fs,x.type),lt&&($e?t.texStorage2D(i.TEXTURE_2D,1,Ce,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ce,de.width,de.height,0,we,qe,null));else if(x.isDataTexture)if(Ye.length>0){$e&&lt&&t.texStorage2D(i.TEXTURE_2D,Ae,Ce,Ye[0].width,Ye[0].height);for(let ue=0,Re=Ye.length;ue<Re;ue++)Te=Ye[ue],$e?X&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,qe,Te.data):t.texImage2D(i.TEXTURE_2D,ue,Ce,Te.width,Te.height,0,we,qe,Te.data);x.generateMipmaps=!1}else $e?(lt&&t.texStorage2D(i.TEXTURE_2D,Ae,Ce,de.width,de.height),X&&z(x,de,we,qe)):t.texImage2D(i.TEXTURE_2D,0,Ce,de.width,de.height,0,we,qe,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$e&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ce,Ye[0].width,Ye[0].height,de.depth);for(let ue=0,Re=Ye.length;ue<Re;ue++)if(Te=Ye[ue],x.format!==ri)if(we!==null)if($e){if(X)if(x.layerUpdates.size>0){let Le=Ou(Te.width,Te.height,x.format,x.type);for(let pe of x.layerUpdates){let Ze=Te.data.subarray(pe*Le/Te.data.BYTES_PER_ELEMENT,(pe+1)*Le/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,pe,Te.width,Te.height,1,we,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,de.depth,we,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Ce,Te.width,Te.height,de.depth,0,Te.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,de.depth,we,qe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Ce,Te.width,Te.height,de.depth,0,we,qe,Te.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{$e&&lt&&t.texStorage2D(i.TEXTURE_2D,Ae,Ce,Ye[0].width,Ye[0].height);for(let ue=0,Re=Ye.length;ue<Re;ue++)Te=Ye[ue],x.format!==ri?we!==null?$e?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Ce,Te.width,Te.height,0,Te.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?X&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,qe,Te.data):t.texImage2D(i.TEXTURE_2D,ue,Ce,Te.width,Te.height,0,we,qe,Te.data)}else if(x.isDataArrayTexture)if($e){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ce,de.width,de.height,de.depth),X)if(x.layerUpdates.size>0){let ue=Ou(de.width,de.height,x.format,x.type);for(let Re of x.layerUpdates){let Le=de.data.subarray(Re*ue/de.data.BYTES_PER_ELEMENT,(Re+1)*ue/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,de.width,de.height,1,we,qe,Le)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,qe,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,we,qe,de.data);else if(x.isData3DTexture)$e?(lt&&t.texStorage3D(i.TEXTURE_3D,Ae,Ce,de.width,de.height,de.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,qe,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,we,qe,de.data);else if(x.isFramebufferTexture){if(lt)if($e)t.texStorage2D(i.TEXTURE_2D,Ae,Ce,de.width,de.height);else{let ue=de.width,Re=de.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ce,ue,Re,0,we,qe,null),ue>>=1,Re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),de.parentNode!==ue){ue.appendChild(de),d.add(x),ue.onpaint=Re=>{let Le=Re.changedElements;for(let pe of d)Le.includes(pe.image)&&(pe.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let Le=i.RGBA,pe=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Le,pe,Ze,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ye.length>0){if($e&&lt){let ue=at(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Ce,ue.width,ue.height)}for(let ue=0,Re=Ye.length;ue<Re;ue++)Te=Ye[ue],$e?X&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,we,qe,Te):t.texImage2D(i.TEXTURE_2D,ue,Ce,we,qe,Te);x.generateMipmaps=!1}else if($e){if(lt){let ue=at(de);t.texStorage2D(i.TEXTURE_2D,Ae,Ce,ue.width,ue.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,qe,de)}else t.texImage2D(i.TEXTURE_2D,0,Ce,we,qe,de);p(x)&&E(ee),Se.__version=xe.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function Ne(I,x,$){if(x.image.length!==6)return;let ee=it(I,x),le=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);let xe=n.get(le);if(le.version!==xe.__version||ee===!0){t.activeTexture(i.TEXTURE0+$);let Se=dt.getPrimaries(dt.workingColorSpace),ce=x.colorSpace===as?null:dt.getPrimaries(x.colorSpace),de=x.colorSpace===as||Se===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let we=x.isCompressedTexture||x.image[0].isCompressedTexture,qe=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let pe=0;pe<6;pe++)!we&&!qe?Ce[pe]=g(x.image[pe],!0,s.maxCubemapSize):Ce[pe]=qe?x.image[pe].image:x.image[pe],Ce[pe]=gt(x,Ce[pe]);let Te=Ce[0],Ye=r.convert(x.format,x.colorSpace),$e=r.convert(x.type),lt=v(x.internalFormat,Ye,$e,x.normalized,x.colorSpace),X=x.isVideoTexture!==!0,Ae=xe.__version===void 0||ee===!0,ue=le.dataReady,Re=w(x,Te);tt(i.TEXTURE_CUBE_MAP,x);let Le;if(we){X&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,lt,Te.width,Te.height);for(let pe=0;pe<6;pe++){Le=Ce[pe].mipmaps;for(let Ze=0;Ze<Le.length;Ze++){let Ve=Le[Ze];x.format!==ri?Ye!==null?X?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ze,0,0,Ve.width,Ve.height,Ye,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ze,lt,Ve.width,Ve.height,0,Ve.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ze,0,0,Ve.width,Ve.height,Ye,$e,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ze,lt,Ve.width,Ve.height,0,Ye,$e,Ve.data)}}}else{if(Le=x.mipmaps,X&&Ae){Le.length>0&&Re++;let pe=at(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(qe){X?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ce[pe].width,Ce[pe].height,Ye,$e,Ce[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Ce[pe].width,Ce[pe].height,0,Ye,$e,Ce[pe].data);for(let Ze=0;Ze<Le.length;Ze++){let Dt=Le[Ze].image[pe].image;X?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ze+1,0,0,Dt.width,Dt.height,Ye,$e,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ze+1,lt,Dt.width,Dt.height,0,Ye,$e,Dt.data)}}else{X?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ye,$e,Ce[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Ye,$e,Ce[pe]);for(let Ze=0;Ze<Le.length;Ze++){let Ve=Le[Ze];X?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ze+1,0,0,Ye,$e,Ve.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ze+1,lt,Ye,$e,Ve.image[pe])}}}p(x)&&E(i.TEXTURE_CUBE_MAP),xe.__version=le.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function ve(I,x,$,ee,le,xe){let Se=r.convert($.format,$.colorSpace),ce=r.convert($.type),de=v($.internalFormat,Se,ce,$.normalized,$.colorSpace),we=n.get(x),qe=n.get($);if(qe.__renderTarget=x,!we.__hasExternalTextures){let Ce=Math.max(1,x.width>>xe),Te=Math.max(1,x.height>>xe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,de,Ce,Te,x.depth,0,Se,ce,null):t.texImage2D(le,xe,de,Ce,Te,0,Se,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Qe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,le,qe.__webglTexture,0,ke(x)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,le,qe.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(I,x,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),x.depthBuffer){let ee=x.depthTexture,le=ee&&ee.isDepthTexture?ee.type:null,xe=A(x.stencilBuffer,le),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(x),xe,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(x),xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,I)}else{let ee=x.textures;for(let le=0;le<ee.length;le++){let xe=ee[le],Se=r.convert(xe.format,xe.colorSpace),ce=r.convert(xe.type),de=v(xe.internalFormat,Se,ce,xe.normalized,xe.colorSpace);Qe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(x),de,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(x),de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(I,x,$){let ee=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(x.depthTexture);if(le.__renderTarget=x,(!le.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee){if(le.__webglInit===void 0&&(le.__webglInit=!0,x.depthTexture.addEventListener("dispose",N)),le.__webglTexture===void 0){le.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),tt(i.TEXTURE_CUBE_MAP,x.depthTexture);let we=r.convert(x.depthTexture.format),qe=r.convert(x.depthTexture.type),Ce;x.depthTexture.format===Ni?Ce=i.DEPTH_COMPONENT24:x.depthTexture.format===Fs&&(Ce=i.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ce,x.width,x.height,0,we,qe,null)}}else re(x.depthTexture,0);let xe=le.__webglTexture,Se=ke(x),ce=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,de=x.depthTexture.format===Fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ni)Qe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ce,xe,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,de,ce,xe,0);else if(x.depthTexture.format===Fs)Qe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ce,xe,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,de,ce,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function B(I){let x=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let ee=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){let le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",le)};ee.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=ee}if(I.depthTexture&&!x.__autoAllocateDepthBuffer)if($)for(let ee=0;ee<6;ee++)te(x.__webglFramebuffer[ee],I,ee);else{let ee=I.texture.mipmaps;ee&&ee.length>0?te(x.__webglFramebuffer[0],I,0):te(x.__webglFramebuffer,I,0)}else if($){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=i.createRenderbuffer(),q(x.__webglDepthbuffer[ee],I,!1);else{let le=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=x.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}else{let ee=I.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),q(x.__webglDepthbuffer,I,!1);else{let le=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(I,x,$){let ee=n.get(I);x!==void 0&&ve(ee.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&B(I)}function W(I){let x=I.texture,$=n.get(I),ee=n.get(x);I.addEventListener("dispose",y);let le=I.textures,xe=I.isWebGLCubeRenderTarget===!0,Se=le.length>1;if(Se||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,o.memory.textures++),xe){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let de=0;de<x.mipmaps.length;de++)$.__webglFramebuffer[ce][de]=i.createFramebuffer()}else $.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)$.__webglFramebuffer[ce]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ce=0,de=le.length;ce<de;ce++){let we=n.get(le[ce]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Qe(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<le.length;ce++){let de=le[ce];$.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);let we=r.convert(de.format,de.colorSpace),qe=r.convert(de.type),Ce=v(de.internalFormat,we,qe,de.normalized,de.colorSpace,I.isXRRenderTarget===!0),Te=ke(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ce,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),q($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),tt(i.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ve($.__webglFramebuffer[ce][de],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else ve($.__webglFramebuffer[ce],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(x)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ce=0,de=le.length;ce<de;ce++){let we=le[ce],qe=n.get(we),Ce=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,qe.__webglTexture),tt(Ce,we),ve($.__webglFramebuffer,I,we,i.COLOR_ATTACHMENT0+ce,Ce,0),p(we)&&E(Ce)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),tt(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ve($.__webglFramebuffer[de],I,x,i.COLOR_ATTACHMENT0,ce,de);else ve($.__webglFramebuffer,I,x,i.COLOR_ATTACHMENT0,ce,0);p(x)&&E(ce),t.unbindTexture()}I.depthBuffer&&B(I)}function Y(I){let x=I.textures;for(let $=0,ee=x.length;$<ee;$++){let le=x[$];if(p(le)){let xe=R(I),Se=n.get(le).__webglTexture;t.bindTexture(xe,Se),E(xe),t.unbindTexture()}}}let K=[],me=[];function Me(I){if(I.samples>0){if(Qe(I)===!1){let x=I.textures,$=I.width,ee=I.height,le=i.COLOR_BUFFER_BIT,xe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(I),ce=x.length>1;if(ce)for(let we=0;we<x.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let de=I.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<x.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let qe=n.get(x[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,$,ee,0,0,$,ee,le,i.NEAREST),l===!0&&(K.length=0,me.length=0,K.push(i.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(K.push(xe),me.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let we=0;we<x.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let qe=n.get(x[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let x=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ke(I){return Math.min(s.maxSamples,I.samples)}function Qe(I){let x=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function H(I){let x=o.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())}function gt(I,x){let $=I.colorSpace,ee=I.format,le=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Bo&&$!==as&&(dt.getTransfer($)===Mt?(ee!==ri||le!==zn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",$)),x}function at(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=re,this.setTexture2DArray=J,this.setTexture3D=se,this.setTextureCube=ae,this.rebindTextures=k,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uM(i,e){function t(n,s=as){let r,o=dt.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eu)return i.BYTE;if(n===wu)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===Ru)return i.ALPHA;if(n===Cu)return i.RGB;if(n===ri)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Pu)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===Bs)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===va||n===Ma||n===Sa||n===ba)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===dc||n===fc||n===pc||n===mc||n===Ea||n===gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===dc)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pc)return r.COMPRESSED_R11_EAC;if(n===mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ea)return r.COMPRESSED_RG11_EAC;if(n===gc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_c||n===xc||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Ec||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_c)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Lc||n===Dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ic)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Uc||n===wa||n===Fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===no?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fM=`
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

}`,id=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:dM,fragmentShader:fM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ie(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sd=class extends Ui{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new id,p={},E=t.getContextAttributes(),R=null,v=null,A=[],w=[],N=new he,y=null,M=null,S=new an;S.viewport=new Rt;let C=new an;C.viewport=new Rt;let U=[S,C],F=new Jl,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let z=A[oe];return z===void 0&&(z=new Vr,A[oe]=z),z.getTargetRaySpace()},this.getControllerGrip=function(oe){let z=A[oe];return z===void 0&&(z=new Vr,A[oe]=z),z.getGripSpace()},this.getHand=function(oe){let z=A[oe];return z===void 0&&(z=new Vr,A[oe]=z),z.getHandSpace()};function G(oe){let z=w.indexOf(oe.inputSource);if(z===-1)return;let fe=A[z];fe!==void 0&&(fe.update(oe.inputSource,oe.frame,c||o),fe.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",re);for(let oe=0;oe<A.length;oe++){let z=w[oe];z!==null&&(w[oe]=null,A[oe].disconnect(z))}D=null,O=null,g.reset();for(let oe in p)delete p[oe];if(e.setRenderTarget(R),f=null,u=null,d=null,s=null,v=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(N.width,N.height,!1),M!==null){let oe=M.camera;oe.fov=M.fov,oe.zoom=M.zoom,oe.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",re),E.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(N),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ne=null,ve=null;E.depth&&(ve=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=E.stencil?Fs:Ni,Ne=E.stencil?no:vi);let q={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(q),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Kt(u.textureWidth,u.textureHeight,{format:ri,type:zn,depthTexture:new Es(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let fe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kt(f.framebufferWidth,f.framebufferHeight,{format:ri,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(oe){for(let z=0;z<oe.removed.length;z++){let fe=oe.removed[z],Ne=w.indexOf(fe);Ne>=0&&(w[Ne]=null,A[Ne].disconnect(fe))}for(let z=0;z<oe.added.length;z++){let fe=oe.added[z],Ne=w.indexOf(fe);if(Ne===-1){for(let q=0;q<A.length;q++)if(q>=w.length){w.push(fe),Ne=q;break}else if(w[q]===null){w[q]=fe,Ne=q;break}if(Ne===-1)break}let ve=A[Ne];ve&&ve.connect(fe)}}let J=new P,se=new P;function ae(oe,z,fe){J.setFromMatrixPosition(z.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);let Ne=J.distanceTo(se),ve=z.projectionMatrix.elements,q=fe.projectionMatrix.elements,te=ve[14]/(ve[10]-1),B=ve[14]/(ve[10]+1),k=(ve[9]+1)/ve[5],W=(ve[9]-1)/ve[5],Y=(ve[8]-1)/ve[0],K=(q[8]+1)/q[0],me=te*Y,Me=te*K,ke=Ne/(-Y+K),Qe=ke*-Y;if(z.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Qe),oe.translateZ(ke),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),ve[10]===-1)oe.projectionMatrix.copy(z.projectionMatrix),oe.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let H=te+ke,gt=B+ke,at=me-Qe,I=Me+(Ne-Qe),x=k*B/gt*H,$=W*B/gt*H;oe.projectionMatrix.makePerspective(at,I,x,$,H,gt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ye(oe,z){z===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(z.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let z=oe.near,fe=oe.far;g.texture!==null&&(g.depthNear>0&&(z=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),F.near=C.near=S.near=z,F.far=C.far=S.far=fe,(D!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,O=F.far),F.layers.mask=oe.layers.mask|6,S.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;let Ne=oe.parent,ve=F.cameras;ye(F,Ne);for(let q=0;q<ve.length;q++)ye(ve[q],Ne);ve.length===2?ae(F,S,C):F.projectionMatrix.copy(S.projectionMatrix),M===null&&oe.isPerspectiveCamera&&(M={camera:oe,fov:oe.fov,zoom:oe.zoom}),_e(oe,F,Ne)};function _e(oe,z,fe){fe===null?oe.matrix.copy(z.matrixWorld):(oe.matrix.copy(fe.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(z.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(z.projectionMatrix),oe.projectionMatrixInverse.copy(z.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Js*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(oe){l=oe,u!==null&&(u.fixedFoveation=oe),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(oe){return p[oe]};let rt=null;function tt(oe,z){if(h=z.getViewerPose(c||o),m=z,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ne=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,Ne=!0);for(let B=0;B<fe.length;B++){let k=fe[B],W=null;if(f!==null)W=f.getViewport(k);else{let K=d.getViewSubImage(u,k);W=K.viewport,B===0&&(e.setRenderTargetTextures(v,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(v))}let Y=U[B];Y===void 0&&(Y=new an,Y.layers.enable(B),Y.viewport=new Rt,U[B]=Y),Y.matrix.fromArray(k.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(k.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(W.x,W.y,W.width,W.height),B===0&&(F.matrix.copy(Y.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ne===!0&&F.cameras.push(Y)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let B=d.getDepthInformation(fe[0]);B&&B.isValid&&B.texture&&g.init(B,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let B=0;B<fe.length;B++){let k=fe[B].camera;if(k){let W=p[k];W||(W=new Jo,p[k]=W);let Y=d.getCameraImage(k);W.sourceTexture=Y}}}}for(let fe=0;fe<A.length;fe++){let Ne=w[fe],ve=A[fe];Ne!==null&&ve!==void 0&&ve.update(Ne,z,c||o)}rt&&rt(oe,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),m=null}let it=new zp;it.setAnimationLoop(tt),this.setAnimationLoop=function(oe){rt=oe},this.dispose=function(){}}},pM=new At,qp=new ot;qp.set(-1,0,0,0,1,0,0,0,1);function mM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,R,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,E,R):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=e.get(p),R=E.envMap,v=E.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(pM.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=R*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let w=A.program;n.uniformBlockBinding(v,w)}function c(v,A){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",E));let N=A.program;n.updateUBOMapping(v,N);let y=e.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let A=d();v.__bindingPointIndex=A;let w=i.createBuffer(),N=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=s[v.id],w=v.uniforms,N=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let y=0,M=w.length;y<M;y++){let S=w[y];if(Array.isArray(S))for(let C=0,U=S.length;C<U;C++)f(S[C],y,C,N);else f(S,y,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,A,w,N){if(_(v,A,w,N)===!0){let y=v.__offset,M=v.value;if(Array.isArray(M)){let S=0;for(let C=0;C<M.length;C++){let U=M[C],F=p(U);m(U,v.__data,S),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(S+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(M,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function m(v,A,w){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,w)}function _(v,A,w,N){let y=v.value,M=A+"_"+w;if(N[M]===void 0)return typeof y=="number"||typeof y=="boolean"?N[M]=y:ArrayBuffer.isView(y)?N[M]=y.slice():N[M]=y.clone(),!0;{let S=N[M];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return N[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function g(v){let A=v.uniforms,w=0,N=16;for(let M=0,S=A.length;M<S;M++){let C=Array.isArray(A[M])?A[M]:[A[M]];for(let U=0,F=C.length;U<F;U++){let D=C[U],O=Array.isArray(D.value)?D.value:[D.value];for(let G=0,Z=O.length;G<Z;G++){let re=O[G],J=p(re),se=w%N,ae=se%J.boundary,ye=se+ae;w+=ae,ye!==0&&N-ye<J.storage&&(w+=N-ye),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=J.storage}}}let y=w%N;return y>0&&(w+=N-y),v.__size=w,v.__cache={},this}function p(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",v),A}function E(v){let A=v.target;A.removeEventListener("dispose",E);let w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function R(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var _M=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function xM(){return zi===null&&(zi=new Pl(_M,16,16,Bs,mn),zi.name="DFG_LUT",zi.minFilter=fn,zi.magFilter=fn,zi.wrapS=Ii,zi.wrapT=Ii,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var Wc=class{constructor(e={}){let{canvas:t=ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=zn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,g=new Set([oc,rc,sc]),p=new Set([zn,vi,to,no,nc,ic]),E=new Uint32Array(4),R=new Int32Array(4),v=new P,A=null,w=null,N=[],y=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1,U=null,F=null,D=null,O=null;this._outputColorSpace=dn;let G=0,Z=0,re=null,J=-1,se=null,ae=new Rt,ye=new Rt,_e=null,rt=new We(0),tt=0,it=t.width,oe=t.height,z=1,fe=null,Ne=null,ve=new Rt(0,0,it,oe),q=new Rt(0,0,it,oe),te=!1,B=new Wr,k=!1,W=!1,Y=new At,K=new P,me=new Rt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Qe(){return re===null?z:1}let H=n;function gt(b,V){return t.getContext(b,V)}let at,I,x,$,ee,le,xe,Se,ce,de,we,qe,Ce,Te,Ye,$e,lt,X,Ae,ue,Re,Le,pe;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",ci,!1),H===null){let V="webgl2";if(H=gt(V,b),H===null)throw gt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(b){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",ci,!1),je("WebGLRenderer: "+b.message),b}function Ze(){at=new wy(H),at.init(),Re=new uM(H,at),I=new my(H,at,e,Re),x=new cM(H,at),I.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),F=H.createFramebuffer(),D=H.createFramebuffer(),O=H.createFramebuffer(),$=new Ry(H),ee=new $v,le=new hM(H,at,x,ee,I,Re,$),xe=new Ey(S),Se=new P0(H),Le=new fy(H,Se),ce=new Ty(H,Se,$,Le),de=new Py(H,ce,Se,Le,$),X=new Cy(H,I,le),Ye=new gy(ee),we=new Zv(S,xe,at,I,Le,Ye),qe=new mM(S,ee),Ce=new Kv,Te=new iM(at),lt=new dy(S,xe,x,de,m,l),$e=new lM(S,de,I),pe=new gM(H,$,I,x),Ae=new py(H,at,$),ue=new Ay(H,at,$),$.programs=we.programs,S.capabilities=I,S.extensions=at,S.properties=ee,S.renderLists=Ce,S.shadowMap=$e,S.state=x,S.info=$}_!==zn&&(M=new Ly(_,t.width,t.height,a,s,r));let Ve=new sd(S,H);this.xr=Ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let b=at.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=at.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(it,oe,!1))},this.getSize=function(b){return b.set(it,oe)},this.setSize=function(b,V,ne=!0){if(Ve.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}it=b,oe=V,t.width=Math.floor(b*z),t.height=Math.floor(V*z),ne===!0&&(t.style.width=b+"px",t.style.height=V+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(it*z,oe*z).floor()},this.setDrawingBufferSize=function(b,V,ne){it=b,oe=V,z=ne,t.width=Math.floor(b*ne),t.height=Math.floor(V*ne),this.setViewport(0,0,b,V)},this.setEffects=function(b){if(_===zn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let V=0;V<b.length;V++)if(b[V].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ae)},this.getViewport=function(b){return b.copy(ve)},this.setViewport=function(b,V,ne,Q){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,V,ne,Q),x.viewport(ae.copy(ve).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(q)},this.setScissor=function(b,V,ne,Q){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,V,ne,Q),x.scissor(ye.copy(q).multiplyScalar(z).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){x.setScissorTest(te=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){Ne=b},this.getClearColor=function(b){return b.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,ne=!0){let Q=0;if(b){let j=!1;if(re!==null){let Ie=re.texture.format;j=g.has(Ie)}if(j){let Ie=re.texture.type,Oe=p.has(Ie),Pe=lt.getClearColor(),ze=lt.getClearAlpha(),Xe=Pe.r,ct=Pe.g,ft=Pe.b;Oe?(E[0]=Xe,E[1]=ct,E[2]=ft,E[3]=ze,H.clearBufferuiv(H.COLOR,0,E)):(R[0]=Xe,R[1]=ct,R[2]=ft,R[3]=ze,H.clearBufferiv(H.COLOR,0,R))}else Q|=H.COLOR_BUFFER_BIT}V&&(Q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",ci,!1),lt.dispose(),Ce.dispose(),Te.dispose(),ee.dispose(),xe.dispose(),de.dispose(),Le.dispose(),pe.dispose(),we.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Od),Ve.removeEventListener("sessionend",kd),Ws.stop()};function Dt(b){b.preventDefault(),zo("WebGLRenderer: Context Lost."),C=!0}function wt(){zo("WebGLRenderer: Context Restored."),C=!1;let b=$.autoReset,V=$e.enabled,ne=$e.autoUpdate,Q=$e.needsUpdate,j=$e.type;Ze(),$.autoReset=b,$e.enabled=V,$e.autoUpdate=ne,$e.needsUpdate=Q,$e.type=j}function ci(b){je("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ri(b){let V=b.target;V.removeEventListener("dispose",Ri),Jm(V)}function Jm(b){Km(b),ee.remove(b)}function Km(b){let V=ee.get(b).programs;V!==void 0&&(V.forEach(function(ne){we.releaseProgram(ne)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,ne,Q,j,Ie){V===null&&(V=Me);let Oe=j.isMesh&&j.matrixWorld.determinantAffine()<0,Pe=eg(b,V,ne,Q,j);x.setMaterial(Q,Oe);let ze=ne.index,Xe=1;if(Q.wireframe===!0){if(ze=ce.getWireframeAttribute(ne),ze===void 0)return;Xe=2}let ct=ne.drawRange,ft=ne.attributes.position,He=ct.start*Xe,Tt=(ct.start+ct.count)*Xe;Ie!==null&&(He=Math.max(He,Ie.start*Xe),Tt=Math.min(Tt,(Ie.start+Ie.count)*Xe)),ze!==null?(He=Math.max(He,0),Tt=Math.min(Tt,ze.count)):ft!=null&&(He=Math.max(He,0),Tt=Math.min(Tt,ft.count));let $t=Tt-He;if($t<0||$t===1/0)return;Le.setup(j,Q,Pe,ne,ze);let Ut,Lt=Ae;if(ze!==null&&(Ut=Se.get(ze),Lt=ue,Lt.setIndex(Ut)),j.isMesh)Q.wireframe===!0?(x.setLineWidth(Q.wireframeLinewidth*Qe()),Lt.setMode(H.LINES)):Lt.setMode(H.TRIANGLES);else if(j.isLine){let wn=Q.linewidth;wn===void 0&&(wn=1),x.setLineWidth(wn*Qe()),j.isLineSegments?Lt.setMode(H.LINES):j.isLineLoop?Lt.setMode(H.LINE_LOOP):Lt.setMode(H.LINE_STRIP)}else j.isPoints?Lt.setMode(H.POINTS):j.isSprite&&Lt.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let wn=j._multiDrawStarts,Fe=j._multiDrawCounts,Un=j._multiDrawCount,vt=ze?Se.get(ze).bytesPerElement:1,ti=ee.get(Q).currentProgram.getUniforms();for(let Ci=0;Ci<Un;Ci++)ti.setValue(H,"_gl_DrawID",Ci),Lt.render(wn[Ci]/vt,Fe[Ci])}else if(j.isInstancedMesh)Lt.renderInstances(He,$t,j.count);else if(ne.isInstancedBufferGeometry){let wn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Fe=Math.min(ne.instanceCount,wn);Lt.renderInstances(He,$t,Fe)}else Lt.render(He,$t)};function Bd(b,V,ne,Q){U!==null&&b.isNodeMaterial&&U.setObject(Q,b),k===!0&&Ye.setState(b,ne,!1),b.transparent===!0&&b.side===zt&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,Ga(b,V,Q),b.side=Ds,b.needsUpdate=!0,Ga(b,V,Q),b.side=zt):Ga(b,V,Q)}this.compile=function(b,V,ne=null){ne===null&&(ne=b),U!==null&&U.renderStart(b,V,ne),w=Te.get(ne),w.init(V),y.push(w),ne.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),b!==ne&&b.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),W=this.localClippingEnabled,k=Ye.init(this.clippingPlanes,W),k===!0&&Ye.setGlobalState(this.clippingPlanes,V),U!==null&&$e.render(w.state.shadowsArray,ne,V);let Q=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ie=j.material;if(Ie)if(Array.isArray(Ie))for(let Oe=0;Oe<Ie.length;Oe++){let Pe=Ie[Oe];Bd(Pe,ne,V,j),Q.add(Pe)}else Bd(Ie,ne,V,j),Q.add(Ie)}),w=y.pop(),U!==null&&U.renderEnd(),Q},this.compileAsync=function(b,V,ne=null){let Q=this.compile(b,V,ne);return new Promise(j=>{function Ie(){if(Q.forEach(function(Oe){let ze=ee.get(Oe).currentProgram;(ze===void 0||ze.isReady())&&Q.delete(Oe)}),Q.size===0){j(b);return}setTimeout(Ie,10)}at.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ph=null;function Qm(b){Ph&&Ph(b)}function Od(){Ws.stop()}function kd(){Ws.start()}let Ws=new zp;Ws.setAnimationLoop(Qm),typeof self<"u"&&Ws.setContext(self),this.setAnimationLoop=function(b){Ph=b,Ve.setAnimationLoop(b),b===null?Ws.stop():Ws.start()},Ve.addEventListener("sessionstart",Od),Ve.addEventListener("sessionend",kd),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(b,V);let ne=Ve.enabled===!0&&Ve.isPresenting===!0,Q=M!==null&&(re===null||ne)&&M.begin(S,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(V),V=Ve.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,V,re),w=Te.get(b,y.length),w.init(V),w.state.textureUnits=le.getTextureUnits(),y.push(w),Y.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),B.setFromProjectionMatrix(Y,mi,V.reversedDepth),W=this.localClippingEnabled,k=Ye.init(this.clippingPlanes,W),A=Ce.get(b,N.length),A.init(),N.push(A),Ve.enabled===!0&&Ve.isPresenting===!0){let Oe=S.xr.getDepthSensingMesh();Oe!==null&&Ih(Oe,V,-1/0,S.sortObjects)}Ih(b,V,0,S.sortObjects),A.finish(),U!==null&&U.updateLights(w.state.lightsArray),S.sortObjects===!0&&A.sort(fe,Ne),ke=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,ke&&lt.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),k===!0&&Ye.beginShadows();let j=w.state.shadowsArray;if($e.render(j,b,V),k===!0&&Ye.endShadows(),(Q&&M.hasRenderPass())===!1){let Oe=A.opaque,Pe=A.transmissive;if(w.setupLights(),V.isArrayCamera){let ze=V.cameras;if(Pe.length>0)for(let Xe=0,ct=ze.length;Xe<ct;Xe++){let ft=ze[Xe];Hd(Oe,Pe,b,ft)}ke&&lt.render(b);for(let Xe=0,ct=ze.length;Xe<ct;Xe++){let ft=ze[Xe];zd(A,b,ft,ft.viewport)}}else Pe.length>0&&Hd(Oe,Pe,b,V),ke&&lt.render(b),zd(A,b,V)}re!==null&&Z===0&&(le.updateMultisampleRenderTarget(re),le.updateRenderTargetMipmap(re)),Q&&M.end(S),b.isScene===!0&&b.onAfterRender(S,b,V),Le.resetDefaultState(),J=-1,se=null,y.pop(),y.length>0?(w=y[y.length-1],le.setTextureUnits(w.state.textureUnits),k===!0&&Ye.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,N.pop(),N.length>0?A=N[N.length-1]:A=null,U!==null&&U.renderEnd()};function Ih(b,V,ne,Q){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(B)){Q&&me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Y);let Oe=de.update(b),Pe=b.material;Pe.visible&&A.push(b,Oe,Pe,ne,me.z,null,V)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(B))){let Oe=de.update(b),Pe=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),me.copy(b.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),me.copy(Oe.boundingSphere.center)),me.applyMatrix4(b.matrixWorld).applyMatrix4(Y)),Array.isArray(Pe)){let ze=Oe.groups;for(let Xe=0,ct=ze.length;Xe<ct;Xe++){let ft=ze[Xe],He=Pe[ft.materialIndex];He&&He.visible&&A.push(b,Oe,He,ne,me.z,ft,V)}}else Pe.visible&&A.push(b,Oe,Pe,ne,me.z,null,V)}}let Ie=b.children;for(let Oe=0,Pe=Ie.length;Oe<Pe;Oe++)Ih(Ie[Oe],V,ne,Q)}function zd(b,V,ne,Q){let{opaque:j,transmissive:Ie,transparent:Oe}=b;w.setupLightsView(ne),k===!0&&Ye.setGlobalState(S.clippingPlanes,ne),Q&&x.viewport(ae.copy(Q)),j.length>0&&Ha(j,V,ne),Ie.length>0&&Ha(Ie,V,ne),Oe.length>0&&Ha(Oe,V,ne),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Hd(b,V,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){let He=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new Kt(1,1,{generateMipmaps:!0,type:He?mn:zn,minFilter:Us,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ie=w.state.transmissionRenderTarget[Q.id],Oe=Q.viewport||ae;Ie.setSize(Oe.z*S.transmissionResolutionScale,Oe.w*S.transmissionResolutionScale);let Pe=S.getRenderTarget(),ze=S.getActiveCubeFace(),Xe=S.getActiveMipmapLevel();S.setRenderTarget(Ie),S.getClearColor(rt),tt=S.getClearAlpha(),tt<1&&S.setClearColor(16777215,.5),S.clear(),ke&&lt.render(ne);let ct=S.toneMapping;S.toneMapping=yi;let ft=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),k===!0&&Ye.setGlobalState(S.clippingPlanes,Q),Ha(b,ne,Q),le.updateMultisampleRenderTarget(Ie),le.updateRenderTargetMipmap(Ie),at.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Tt=0,$t=V.length;Tt<$t;Tt++){let Ut=V[Tt],{object:Lt,geometry:wn,material:Fe,group:Un}=Ut;if(Fe.side===zt&&Lt.layers.test(Q.layers)){let vt=Fe.side;Fe.side=cn,Fe.needsUpdate=!0,Gd(Lt,ne,Q,wn,Fe,Un),Fe.side=vt,Fe.needsUpdate=!0,He=!0}}He===!0&&(le.updateMultisampleRenderTarget(Ie),le.updateRenderTargetMipmap(Ie))}S.setRenderTarget(Pe,ze,Xe),S.setClearColor(rt,tt),ft!==void 0&&(Q.viewport=ft),S.toneMapping=ct}function Ha(b,V,ne){let Q=V.isScene===!0?V.overrideMaterial:null;for(let j=0,Ie=b.length;j<Ie;j++){let Oe=b[j],{object:Pe,geometry:ze,group:Xe}=Oe,ct=Oe.material;ct.allowOverride===!0&&Q!==null&&(ct=Q),Pe.layers.test(ne.layers)&&Gd(Pe,V,ne,ze,ct,Xe)}}function Gd(b,V,ne,Q,j,Ie){U!==null&&j.isNodeMaterial&&U.setObject(b,j),b.onBeforeRender(S,V,ne,Q,j,Ie),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(S,V,ne,Q,b,Ie),j.transparent===!0&&j.side===zt&&j.forceSinglePass===!1?(j.side=cn,j.needsUpdate=!0,S.renderBufferDirect(ne,V,Q,j,b,Ie),j.side=Ds,j.needsUpdate=!0,S.renderBufferDirect(ne,V,Q,j,b,Ie),j.side=zt):S.renderBufferDirect(ne,V,Q,j,b,Ie),b.onAfterRender(S,V,ne,Q,j,Ie)}function Ga(b,V,ne){V.isScene!==!0&&(V=Me);let Q=ee.get(b),j=w.state.lights,Ie=w.state.shadowsArray,Oe=j.state.version,Pe=we.getParameters(b,j.state,Ie,V,ne,w.state.lightProbeGridArray),ze=we.getProgramCacheKey(Pe),Xe=Q.programs;Q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,Q.fog=V.fog;let ct=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Q.envMap=xe.get(b.envMap||Q.environment,ct),Q.envMapRotation=Q.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Xe===void 0&&(b.addEventListener("dispose",Ri),Xe=new Map,Q.programs=Xe);let ft=Xe.get(ze);if(ft!==void 0){if(Q.currentProgram===ft&&Q.lightsStateVersion===Oe)return Wd(b,Pe),ft}else Pe.uniforms=we.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,ne,Pe),b.onBeforeCompile(Pe,S),ft=we.acquireProgram(Pe,ze),Xe.set(ze,ft),Q.uniforms=Pe.uniforms;let He=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Ye.uniform),Wd(b,Pe),Q.needsLights=ng(b),Q.lightsStateVersion=Oe,Q.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.sunLights.value=j.state.sun,He.sunLightShadows.value=j.state.sunShadow,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.sunShadowMatrix.value=j.state.sunShadowMatrix,He.sunShadowCascade.value=j.state.sunShadowCascade,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=w.state.lightProbeGridArray.length>0,Q.currentProgram=ft,Q.uniformsList=null,ft}function Vd(b){if(b.uniformsList===null){let V=b.currentProgram.getUniforms();b.uniformsList=ro.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Wd(b,V){let ne=ee.get(b);ne.outputColorSpace=V.outputColorSpace,ne.batching=V.batching,ne.batchingColor=V.batchingColor,ne.instancing=V.instancing,ne.instancingColor=V.instancingColor,ne.instancingMorph=V.instancingMorph,ne.skinning=V.skinning,ne.morphTargets=V.morphTargets,ne.morphNormals=V.morphNormals,ne.morphColors=V.morphColors,ne.morphTargetsCount=V.morphTargetsCount,ne.numClippingPlanes=V.numClippingPlanes,ne.numIntersection=V.numClipIntersection,ne.vertexAlphas=V.vertexAlphas,ne.vertexTangents=V.vertexTangents,ne.toneMapping=V.toneMapping}function jm(b,V){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(V.matrixWorld);for(let ne=0,Q=b.length;ne<Q;ne++){let j=b[ne];if(j.texture!==null&&j.boundingBox.containsPoint(v))return j}return null}function eg(b,V,ne,Q,j){V.isScene!==!0&&(V=Me),le.resetTextureUnits();let Ie=V.fog,Oe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?V.environment:null,Pe=re===null?S.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:dt.workingColorSpace,ze=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Xe=xe.get(Q.envMap||Oe,ze),ct=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ft=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),He=!!ne.morphAttributes.position,Tt=!!ne.morphAttributes.normal,$t=!!ne.morphAttributes.color,Ut=yi;Q.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ut=S.toneMapping);let Lt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,wn=Lt!==void 0?Lt.length:0,Fe=ee.get(Q),Un=w.state.lights;if(k===!0&&(W===!0||b!==se)){let Nt=b===se&&Q.id===J;Ye.setState(Q,b,Nt)}let vt=!1;Q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Un.state.version||Fe.outputColorSpace!==Pe||j.isBatchedMesh&&Fe.batching===!1||!j.isBatchedMesh&&Fe.batching===!0||j.isBatchedMesh&&Fe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Fe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||j.isInstancedMesh&&Fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Fe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Fe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Fe.instancingMorph===!1&&j.morphTexture!==null||Fe.envMap!==Xe||Q.fog===!0&&Fe.fog!==Ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ye.numPlanes||Fe.numIntersection!==Ye.numIntersection)||Fe.vertexAlphas!==ct||Fe.vertexTangents!==ft||Fe.morphTargets!==He||Fe.morphNormals!==Tt||Fe.morphColors!==$t||Fe.toneMapping!==Ut||Fe.morphTargetsCount!==wn||!!Fe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Fe.__version=Q.version);let ti=Fe.currentProgram;vt===!0&&(ti=Ga(Q,V,j),U&&Q.isNodeMaterial&&U.onUpdateProgram(Q,ti,Fe));let Ci=!1,ms=!1,gr=!1,Pt=ti.getUniforms(),Xt=Fe.uniforms;if(x.useProgram(ti.program)&&(Ci=!0,ms=!0,gr=!0),Q.id!==J&&(J=Q.id,ms=!0),Fe.needsLights){let Nt=jm(w.state.lightProbeGridArray,j);Fe.lightProbeGrid!==Nt&&(Fe.lightProbeGrid=Nt,ms=!0)}if(Ci||se!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Pt.setValue(H,"projectionMatrix",b.projectionMatrix),Pt.setValue(H,"viewMatrix",b.matrixWorldInverse);let _s=Pt.map.cameraPosition;_s!==void 0&&_s.setValue(H,K.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),se!==b&&(se=b,ms=!0,gr=!0)}if(Fe.needsLights&&(Un.state.sunShadowMap.length>0&&Pt.setValue(H,"sunShadowMap",Un.state.sunShadowMap,le),Un.state.directionalShadowMap.length>0&&Pt.setValue(H,"directionalShadowMap",Un.state.directionalShadowMap,le),Un.state.spotShadowMap.length>0&&Pt.setValue(H,"spotShadowMap",Un.state.spotShadowMap,le),Un.state.pointShadowMap.length>0&&Pt.setValue(H,"pointShadowMap",Un.state.pointShadowMap,le)),j.isSkinnedMesh){Pt.setOptional(H,j,"bindMatrix"),Pt.setOptional(H,j,"bindMatrixInverse");let Nt=j.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Pt.setValue(H,"boneTexture",Nt.boneTexture,le))}j.isBatchedMesh&&(Pt.setOptional(H,j,"batchingTexture"),Pt.setValue(H,"batchingTexture",j._matricesTexture,le),Pt.setOptional(H,j,"batchingIdTexture"),Pt.setValue(H,"batchingIdTexture",j._indirectTexture,le),Pt.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(H,"batchingColorTexture",j._colorsTexture,le));let gs=ne.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&X.update(j,ne,ti),(ms||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,Pt.setValue(H,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&V.environment!==null&&(Xt.envMapIntensity.value=V.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=xM()),ms){if(Pt.setValue(H,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&tg(Xt,gr),Ie&&Q.fog===!0&&qe.refreshFogUniforms(Xt,Ie),qe.refreshMaterialUniforms(Xt,Q,z,oe,w.state.transmissionRenderTarget[b.id]),Fe.needsLights&&Fe.lightProbeGrid){let Nt=Fe.lightProbeGrid;Xt.probesSH.value=Nt.texture,Xt.probesMin.value.copy(Nt.boundingBox.min),Xt.probesMax.value.copy(Nt.boundingBox.max),Xt.probesResolution.value.copy(Nt.resolution)}ro.upload(H,Vd(Fe),Xt,le)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ro.upload(H,Vd(Fe),Xt,le),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Pt.setValue(H,"center",j.center),Pt.setValue(H,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(H,"normalMatrix",j.normalMatrix),Pt.setValue(H,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){let Nt=Q.uniformsGroups;for(let _s=0,_r=Nt.length;_s<_r;_s++){let qd=Nt[_s];pe.update(qd,ti),pe.bind(qd,ti)}}return ti}function tg(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.sunLights.needsUpdate=V,b.sunLightShadows.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function ng(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,V,ne){let Q=ee.get(b);Q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ee.get(b.texture).__webglTexture=V,ee.get(b.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){let ne=ee.get(b);ne.__webglFramebuffer=V,ne.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,ne=0){re=b,G=V,Z=ne;let Q=null,j=!1,Ie=!1;if(b){let Pe=ee.get(b);if(Pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(H.FRAMEBUFFER,Pe.__webglFramebuffer),ae.copy(b.viewport),ye.copy(b.scissor),_e=b.scissorTest,x.viewport(ae),x.scissor(ye),x.setScissorTest(_e),J=-1;return}else if(Pe.__webglFramebuffer===void 0)le.setupRenderTarget(b);else if(Pe.__hasExternalTextures)le.rebindTextures(b,ee.get(b.texture).__webglTexture,ee.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ct=b.depthTexture;if(Pe.__boundDepthTexture!==ct){if(ct!==null&&ee.has(ct)&&(b.width!==ct.image.width||b.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(b)}}let ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ie=!0);let Xe=ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[V])?Q=Xe[V][ne]:Q=Xe[V],j=!0):b.samples>0&&le.useMultisampledRTT(b)===!1?Q=ee.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?Q=Xe[ne]:Q=Xe,ae.copy(b.viewport),ye.copy(b.scissor),_e=b.scissorTest}else ae.copy(ve).multiplyScalar(z).floor(),ye.copy(q).multiplyScalar(z).floor(),_e=te;if(ne!==0&&(Q=F),x.bindFramebuffer(H.FRAMEBUFFER,Q)&&x.drawBuffers(b,Q),x.viewport(ae),x.scissor(ye),x.setScissorTest(_e),j){let Pe=ee.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,ne)}else if(Ie){let Pe=V;for(let ze=0;ze<b.textures.length;ze++){let Xe=ee.get(b.textures[ze]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ze,Xe.__webglTexture,ne,Pe)}}else if(b!==null&&ne!==0){let Pe=ee.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pe.__webglTexture,ne)}J=-1};function Xd(b){let V=ee.get(b);return(V.__readFormat!==b.format||V.__readType!==b.type)&&(V.__readFormat=b.format,V.__readType=b.type,V.__formatReadable=I.textureFormatReadable(b.format),V.__typeReadable=I.textureTypeReadable(b.type)),V}this.readRenderTargetPixels=function(b,V,ne,Q,j,Ie,Oe,Pe=0){if(!(b&&b.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){x.bindFramebuffer(H.FRAMEBUFFER,ze);try{let Xe=b.textures[Pe],ct=Xe.format,ft=Xe.type;b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe);let He=Xd(Xe);if(He.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-Q&&ne>=0&&ne<=b.height-j&&H.readPixels(V,ne,Q,j,Re.convert(ct),Re.convert(ft),Ie)}finally{let Xe=re!==null?ee.get(re).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(b,V,ne,Q,j,Ie,Oe,Pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(V>=0&&V<=b.width-Q&&ne>=0&&ne<=b.height-j){x.bindFramebuffer(H.FRAMEBUFFER,ze);let Xe=b.textures[Pe],ct=Xe.format,ft=Xe.type;b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe);let He=Xd(Xe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Tt),H.bufferData(H.PIXEL_PACK_BUFFER,Ie.byteLength,H.STREAM_READ),H.readPixels(V,ne,Q,j,Re.convert(ct),Re.convert(ft),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let $t=re!==null?ee.get(re).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,$t);let Ut=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await cp(H,Ut,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Tt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ie),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Tt),H.deleteSync(Ut),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,ne=0){let Q=Math.pow(2,-ne),j=Math.floor(b.image.width*Q),Ie=Math.floor(b.image.height*Q),Oe=V!==null?V.x:0,Pe=V!==null?V.y:0;le.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,Oe,Pe,j,Ie),x.unbindTexture()},this.copyTextureToTexture=function(b,V,ne=null,Q=null,j=0,Ie=0){let Oe,Pe,ze,Xe,ct,ft,He,Tt,$t,Ut=b.isCompressedTexture?b.mipmaps[Ie]:b.image;if(ne!==null)Oe=ne.max.x-ne.min.x,Pe=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,Xe=ne.min.x,ct=ne.min.y,ft=ne.isBox3?ne.min.z:0;else{let Xt=Math.pow(2,-j);Oe=Math.floor(Ut.width*Xt),Pe=Math.floor(Ut.height*Xt),b.isDataArrayTexture?ze=Ut.depth:b.isData3DTexture?ze=Math.floor(Ut.depth*Xt):ze=1,Xe=0,ct=0,ft=0}Q!==null?(He=Q.x,Tt=Q.y,$t=Q.z):(He=0,Tt=0,$t=0);let Lt=Re.convert(V.format),wn=Re.convert(V.type),Fe;V.isData3DTexture?(le.setTexture3D(V,0),Fe=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(le.setTexture2DArray(V,0),Fe=H.TEXTURE_2D_ARRAY):(le.setTexture2D(V,0),Fe=H.TEXTURE_2D),x.activeTexture(H.TEXTURE0),x.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let Un=x.getParameter(H.UNPACK_ROW_LENGTH),vt=x.getParameter(H.UNPACK_IMAGE_HEIGHT),ti=x.getParameter(H.UNPACK_SKIP_PIXELS),Ci=x.getParameter(H.UNPACK_SKIP_ROWS),ms=x.getParameter(H.UNPACK_SKIP_IMAGES);x.pixelStorei(H.UNPACK_ROW_LENGTH,Ut.width),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ut.height),x.pixelStorei(H.UNPACK_SKIP_PIXELS,Xe),x.pixelStorei(H.UNPACK_SKIP_ROWS,ct),x.pixelStorei(H.UNPACK_SKIP_IMAGES,ft);let gr=b.isDataArrayTexture||b.isData3DTexture,Pt=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){let Xt=ee.get(b),gs=ee.get(V),Nt=ee.get(Xt.__renderTarget),_s=ee.get(gs.__renderTarget);x.bindFramebuffer(H.READ_FRAMEBUFFER,Nt.__webglFramebuffer),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,_s.__webglFramebuffer);for(let _r=0;_r<ze;_r++)gr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ee.get(b).__webglTexture,j,ft+_r),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ee.get(V).__webglTexture,Ie,$t+_r)),H.blitFramebuffer(Xe,ct,Oe,Pe,He,Tt,Oe,Pe,H.DEPTH_BUFFER_BIT,H.NEAREST);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||ee.has(b)){let Xt=ee.get(b),gs=ee.get(V);x.bindFramebuffer(H.READ_FRAMEBUFFER,D),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,O);for(let Nt=0;Nt<ze;Nt++)gr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.__webglTexture,j,ft+Nt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Xt.__webglTexture,j),Pt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gs.__webglTexture,Ie,$t+Nt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gs.__webglTexture,Ie),j!==0?H.blitFramebuffer(Xe,ct,Oe,Pe,He,Tt,Oe,Pe,H.COLOR_BUFFER_BIT,H.NEAREST):Pt?H.copyTexSubImage3D(Fe,Ie,He,Tt,$t+Nt,Xe,ct,Oe,Pe):H.copyTexSubImage2D(Fe,Ie,He,Tt,Xe,ct,Oe,Pe);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Pt?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(Fe,Ie,He,Tt,$t,Oe,Pe,ze,Lt,wn,Ut.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Fe,Ie,He,Tt,$t,Oe,Pe,ze,Lt,Ut.data):H.texSubImage3D(Fe,Ie,He,Tt,$t,Oe,Pe,ze,Lt,wn,Ut):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ie,He,Tt,Oe,Pe,Lt,wn,Ut.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ie,He,Tt,Ut.width,Ut.height,Lt,Ut.data):H.texSubImage2D(H.TEXTURE_2D,Ie,He,Tt,Oe,Pe,Lt,wn,Ut);x.pixelStorei(H.UNPACK_ROW_LENGTH,Un),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt),x.pixelStorei(H.UNPACK_SKIP_PIXELS,ti),x.pixelStorei(H.UNPACK_SKIP_ROWS,Ci),x.pixelStorei(H.UNPACK_SKIP_IMAGES,ms),Ie===0&&V.generateMipmaps&&H.generateMipmap(Fe),x.unbindTexture()},this.initRenderTarget=function(b){ee.get(b).__webglFramebuffer===void 0&&le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?le.setTextureCube(b,0):b.isData3DTexture?le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?le.setTexture2DArray(b,0):le.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){G=0,Z=0,re=null,x.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var lo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yM=new Is(-1,1,1,-1,0,1),rd=class extends St{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},vM=new rd,Os=class{constructor(e){this._mesh=new ie(vM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yc=class extends jn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oi.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Os(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Pa=class extends jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Zc=class extends jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yc(lo),this.copyPass.material.blending=si,this.timer=new ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pa!==void 0&&(o instanceof Pa?n=!0:o instanceof Zc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jc=class extends jn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Yp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var co=class i extends jn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(r,o,{type:mn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Kt(r,o,{type:mn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Kt(r,o,{type:mn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Yp;this.highPassUniforms=oi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=oi.clone(lo.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader,premultipliedAlpha:!0,blending:hn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new pn,this._fsQuad=new Os(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Ot({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};co.BlurDirectionX=new he(1,0);co.BlurDirectionY=new he(0,1);var Ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Kc=class extends jn{constructor(){super(),this.isOutputPass=!0,this.uniforms=oi.clone(Ia.uniforms),this.material=new $r({name:Ia.name,uniforms:this.uniforms,vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader}),this._fsQuad=new Os(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===da?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===or?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ma&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zp=new $n,Qc=new P,ho=class extends ca{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new nt(e,3)),this.setAttribute("uv",new nt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Ls(t,6,1);return this.setAttribute("instanceStart",new Jn(n,3,0)),this.setAttribute("instanceEnd",new Jn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Ls(t,6,1);return this.setAttribute("instanceColorStart",new Jn(n,3,0)),this.setAttribute("instanceColorEnd",new Jn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ra(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Zp.setFromBufferAttribute(t),this.boundingBox.union(Zp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qc)),Qc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new he},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};On.line={uniforms:oi.merge([be.common,be.fog,be.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var ks=class extends Ot{constructor(e){super({type:"LineMaterial",uniforms:oi.clone(On.line.uniforms),vertexShader:On.line.vertexShader,fragmentShader:On.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var od=new Rt,$p=new P,Jp=new P,gn=new Rt,_n=new Rt,Hi=new Rt,ad=new P,ld=new At,xn=new ua,Kp=new P,jc=new $n,eh=new gi,Gi=new Rt,Vi,hr;function Qp(i,e,t){return Gi.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Gi.multiplyScalar(1/Gi.w),Gi.x=hr/t.width,Gi.y=hr/t.height,Gi.applyMatrix4(i.projectionMatrixInverse),Gi.multiplyScalar(1/Gi.w),Math.abs(Math.max(Gi.x,Gi.y))}function MM(i,e){let t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){xn.start.fromBufferAttribute(s,a),xn.end.fromBufferAttribute(r,a),xn.applyMatrix4(t);let c=new P,h=new P;Vi.distanceSqToSegment(xn.start,xn.end,h,c),h.distanceTo(c)<hr*.5&&e.push({point:h,pointOnLine:c,distance:Vi.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function SM(i,e,t){let n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),d=-e.near;Vi.at(1,Hi),Hi.w=1,Hi.applyMatrix4(e.matrixWorldInverse),Hi.applyMatrix4(n),Hi.multiplyScalar(1/Hi.w),Hi.x*=r.x/2,Hi.y*=r.y/2,Hi.z=0,ad.copy(Hi),ld.multiplyMatrices(e.matrixWorldInverse,o);for(let u=0,f=h;u<f;u++){if(gn.fromBufferAttribute(l,u),_n.fromBufferAttribute(c,u),gn.w=1,_n.w=1,gn.applyMatrix4(ld),_n.applyMatrix4(ld),gn.z>d&&_n.z>d)continue;if(gn.z>d){let R=gn.z-_n.z,v=(gn.z-d)/R;gn.lerp(_n,v)}else if(_n.z>d){let R=_n.z-gn.z,v=(_n.z-d)/R;_n.lerp(gn,v)}gn.applyMatrix4(n),_n.applyMatrix4(n),gn.multiplyScalar(1/gn.w),_n.multiplyScalar(1/_n.w),gn.x*=r.x/2,gn.y*=r.y/2,_n.x*=r.x/2,_n.y*=r.y/2,xn.start.copy(gn),xn.start.z=0,xn.end.copy(_n),xn.end.z=0;let _=xn.closestPointToPointParameter(ad,!0);xn.at(_,Kp);let g=Ta.lerp(gn.z,_n.z,_),p=g>=-1&&g<=1,E=ad.distanceTo(Kp)<hr*.5;if(p&&E){xn.start.fromBufferAttribute(l,u),xn.end.fromBufferAttribute(c,u),xn.start.applyMatrix4(o),xn.end.applyMatrix4(o);let R=new P,v=new P;Vi.distanceSqToSegment(xn.start,xn.end,v,R),t.push({point:v,pointOnLine:R,distance:Vi.origin.distanceTo(v),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var th=class extends ie{constructor(e=new ho,t=new ks({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)$p.fromBufferAttribute(t,o),Jp.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+$p.distanceTo(Jp);let r=new Ls(s,2,1);return e.setAttribute("instanceDistanceStart",new Jn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Jn(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,s=e.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Vi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;hr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),eh.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=hr*.5;else{let d=Math.max(s.near,eh.distanceToPoint(Vi.origin));c=Qp(s,d,l.resolution)}if(eh.radius+=c,Vi.intersectsSphere(eh)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),jc.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=hr*.5;else{let d=Math.max(s.near,jc.distanceToPoint(Vi.origin));h=Qp(s,d,l.resolution)}jc.expandByScalar(h),Vi.intersectsBox(jc)!==!1&&(n?MM(this,t):SM(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(od),this.material.uniforms.resolution.value.set(od.z,od.w))}};var uo=class extends ho{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var nh=class extends th{constructor(e=new uo,t=new ks({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var sn=(i,e)=>{let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d",{willReadFrequently:!0})]},Yt=(i,e=!0,t)=>{let n=new Qs(i);return e&&(n.colorSpace=dn),t&&(n.wrapS=n.wrapT=kr,n.repeat.set(...t)),n.anisotropy=8,n};function Si(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function fo(i){let e=Si(i),t=64,n=new Float32Array(t*t);for(let r=0;r<t*t;r++)n[r]=e();let s=(r,o)=>{let a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=g=>g*g*(3-2*g),u=n[(l&63)*t+(a&63)],f=n[(l&63)*t+(a+1&63)],m=n[(l+1&63)*t+(a&63)],_=n[(l+1&63)*t+(a+1&63)];return u+(f-u)*d(c)+(m-u)*d(h)+(u-f-m+_)*d(c)*d(h)};return(r,o)=>s(r,o)*.5+s(r*2.1,o*2.1)*.3+s(r*4.3,o*4.3)*.2}function jp(i,e=2){let t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,[r,o]=sn(t,n),a=o.createImageData(t,n),l=(c,h)=>s[((h+n)%n*t+(c+t)%t)*4]/255;for(let c=0;c<n;c++)for(let h=0;h<t;h++){let d=(l(h+1,c)-l(h-1,c))*e,u=(l(h,c+1)-l(h,c-1))*e,f=Math.hypot(d,u,1),m=(c*t+h)*4;a.data[m]=(-d/f*.5+.5)*255,a.data[m+1]=(u/f*.5+.5)*255,a.data[m+2]=(1/f*.5+.5)*255,a.data[m+3]=255}return o.putImageData(a,0,0),r}function em(){let[i,e]=sn(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Qs(i)}function tm(i=5){let[e,t]=sn(256,256),n=Si(i);for(let s=0;s<30;s++){let r=128+(n()-.5)*120,o=128+(n()-.5)*120,a=30+n()*60,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,.2)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.fillRect(0,0,256,256)}return new Qs(e)}function nm(i,e=1024,t=512){let[n,s]=sn(e,t),[r,o]=sn(e,t),a=Si(i),l=fo(i+2);s.fillStyle="#17141c",s.fillRect(0,0,e,t),o.fillStyle="#000",o.fillRect(0,0,e,t);let c=9,h=t/c;for(let f=0;f<c;f++){let m=-a()*60;for(;m<e;){let _=70+a()*90,g=22+a()*16,p=245+a()*35,E=6+a()*8;s.fillStyle=`hsl(${p},${E}%,${g}%)`;let R=f*h;s.beginPath(),s.roundRect(m+3,R+3,_-6,h-6,6),s.fill(),o.fillStyle=`rgb(${150+a()*80},150,150)`,o.beginPath(),o.roundRect(m+3,R+3,_-6,h-6,9),o.fill();for(let v=0;v<14;v++){let A=m+a()*_,w=R+a()*h;s.fillStyle=`rgba(${a()<.5?0:255},${a()<.5?0:255},255,${.03+a()*.04})`,s.fillRect(A,w,2+a()*10,1+a()*4)}m+=_}}let d=s.getImageData(0,0,e,t),u=o.getImageData(0,0,e,t);for(let f=0;f<t;f++)for(let m=0;m<e;m++){let _=(f*e+m)*4,g=l(m/40,f/40),p=Math.max(0,1-f/t*1.4)*0,E=.75+g*.5-p;d.data[_]*=E,d.data[_+1]*=E,d.data[_+2]*=E,u.data[_]=u.data[_]*(.7+g*.3)}return s.putImageData(d,0,0),o.putImageData(u,0,0),{map:n,normal:jp(r,4)}}function im(i){let[t,n]=sn(1024,1024),[s,r]=sn(1024,1024),o=Si(i),a=fo(i+5);n.fillStyle="#121016",n.fillRect(0,0,1024,1024),r.fillStyle="#000",r.fillRect(0,0,1024,1024);let l=6,c=1024/l;for(let u=0;u<l;u++)for(let f=0;f<l;f++){let m=f*c,_=u*c,g=17+o()*12;n.fillStyle=`hsl(${250+o()*30},${7+o()*6}%,${g}%)`,n.beginPath(),n.roundRect(m+4,_+4,c-8,c-8,10),n.fill(),r.fillStyle=`rgb(${140+o()*90},0,0)`,r.beginPath(),r.roundRect(m+5,_+5,c-10,c-10,14),r.fill()}let h=n.getImageData(0,0,1024,1024),d=r.getImageData(0,0,1024,1024);for(let u=0;u<1024;u++)for(let f=0;f<1024;f++){let m=(u*1024+f)*4,_=a(f/36,u/36),g=.7+_*.6;h.data[m]*=g,h.data[m+1]*=g,h.data[m+2]*=g,d.data[m]=d.data[m]*(.6+_*.4)}return n.putImageData(h,0,0),r.putImageData(d,0,0),{map:t,normal:jp(s,3)}}function ih(i,e=[70,44,30]){let[t,n]=sn(256,512),s=Si(i),r=fo(i),o=n.createImageData(256,512);for(let a=0;a<512;a++)for(let l=0;l<256;l++){let c=r(l/6,a/60)*.6+Math.sin(l/9+r(l/30,a/30)*6)*.2+.4,h=(a*256+l)*4;o.data[h]=e[0]*c,o.data[h+1]=e[1]*c,o.data[h+2]=e[2]*c,o.data[h+3]=255}n.putImageData(o,0,0);for(let a=0;a<6;a++)n.fillStyle="rgba(0,0,0,.35)",n.fillRect(0,s()*512,256,2);return t}function sm(){let[i,e]=sn(64,512);for(let t=0;t<512;t+=4){let n=40+(t%8?10:0);e.fillStyle=`hsl(24,62%,${n}%)`,e.fillRect(0,t,64,3),e.fillStyle="hsl(20,50%,16%)",e.fillRect(0,t+3,64,1)}return i}function cd(i,e=256,t=512){let[n,s]=sn(e,t),r=Si(i),o=fo(i),a=s.createLinearGradient(0,0,0,t);a.addColorStop(0,"#0b0d1f"),a.addColorStop(.6,"#1a1c3a"),a.addColorStop(1,"#2a2440"),s.fillStyle=a,s.fillRect(0,0,e,t);let l=s.getImageData(0,0,e,t);for(let c=0;c<t;c++)for(let h=0;h<e;h++){let d=o(h/50+3,c/34),u=(c*e+h)*4,f=Math.max(0,d-.45)*1.8;l.data[u]+=60*f,l.data[u+1]+=64*f,l.data[u+2]+=96*f}s.putImageData(l,0,0),s.fillStyle="#05060c",s.beginPath(),s.moveTo(0,t);for(let c=0;c<=e;c+=8)s.lineTo(c,t*.86-Math.max(0,Math.sin(c/23)*30+r()*10)-(c>e*.55&&c<e*.7?70:0));s.lineTo(e,t),s.fill();for(let c=0;c<7;c++)s.fillStyle="rgba(255,200,110,.75)",s.fillRect(20+r()*(e-40),t*.9+r()*t*.06,2,3);return n}function rm(i){let[e,t]=sn(128,256),n=Si(i);t.clearRect(0,0,128,256);for(let s=0;s<90;s++){let r=n()*128,o=n()*256,a=10+n()*22;t.strokeStyle=`rgba(190,205,255,${.12+n()*.25})`,t.lineWidth=1,t.beginPath(),t.moveTo(r,o),t.lineTo(r-2,o+a),t.stroke()}return e}var Gs={low:{dpr:1,shadows:!1,bloom:.7,parts:.45,dust:60},mid:{dpr:1.25,shadows:!0,shadowSize:1024,bloom:1,parts:.75,dust:140},high:{dpr:1.6,shadows:!0,shadowSize:2048,bloom:1,parts:1,dust:220},ultra:{dpr:2,shadows:!0,shadowSize:2048,bloom:1,parts:1.3,dust:300}},yn=7.6,Hn=8.6,kt=.62,ch=[new P(-7.25,0,1.1),new P(0,0,-7.2),new P(7.25,0,1.1)],Wi=i=>Number.isFinite(i)?i:0;function Hs(i,e){let t=new os;return t.moveTo(-i/2,0),t.lineTo(-i/2,e-i/2),t.absarc(0,e-i/2,i/2,Math.PI,0,!0),t.lineTo(i/2,0),t.lineTo(-i/2,0),t}function om(i,e,t){let n=Hs(i+t*2,e+t);return n.holes.push(new js(Hs(i,e).getPoints(24).map(s=>new he(s.x,s.y)))),n}function sh(i,e,t=yn-.04,n=0){return i.position.set(Math.sin(e)*t,n,Math.cos(e)*t),i.rotation.y=e+Math.PI,i}function am(i,e,t=7){let n=new Wo,s=Si(t),r={scene:n,soft:em(),smokeTex:tm(),colliders:[],arcs:[],flasks:[],lamps:[],windows:[],doors:[],torches:[],shelves:[],t:0,flash:0,flicker:0,charge:0,lever:0,strike:0,disco:0,beat:0,hatch:0,glassBroken:0};n.background=new We("#07060d"),n.fog=new Vo("#0c0a16",.035),r.hemi=new aa("#6d6aa8","#1a1420",.55),n.add(r.hemi),r.key=new Kr("#ffd9a8",46,22,.62,.55,1.6),r.key.position.set(-3.2,7.4,4.6),r.key.target.position.set(0,1.2,0),n.add(r.key,r.key.target),r.key.castShadow=!0,r.key.shadow.bias=-4e-4,r.key.shadow.normalBias=.02,r.key.shadow.camera.near=2,r.key.shadow.camera.far=20,r.rim=new Qr("#8fa6ff",.9),r.rim.position.set(1.5,5,-8),n.add(r.rim),r.flashLight=new Qr("#c9d6ff",0),r.flashLight.position.set(-2,7,-9),n.add(r.flashLight),r.boltLight=new Ps("#bcd2ff",0,12,1.6),r.boltLight.position.set(0,3.2,.3),n.add(r.boltLight),r.disco=new Kr("#ff5ad6",0,16,.5,.6,1.2),r.disco.position.set(0,7.8,2.5),r.disco.target.position.set(0,1,0),n.add(r.disco,r.disco.target);let o=im(t),a=new ie(new _i(yn,72),new et({map:Yt(o.map,!0,[3.4,3.4]),normalMap:Yt(o.normal,!1,[3.4,3.4]),roughness:.82,metalness:.05}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);{let[M,S]=sn(1024,1024);S.translate(512,512),S.strokeStyle="rgba(150,255,190,.55)",S.lineWidth=6;for(let F of[470,430,250])S.beginPath(),S.arc(0,0,F,0,7),S.stroke();S.lineWidth=4,S.beginPath();for(let F=0;F<=5;F++){let D=F*4*Math.PI/5-Math.PI/2;S[F?"lineTo":"moveTo"](Math.cos(D)*430,Math.sin(D)*430)}S.stroke(),S.font="64px serif",S.fillStyle="rgba(150,255,190,.5)",S.textAlign="center";let C="\u263F\u2644\u2643\u2642\u2609\u2640\u263D\u2697";for(let F=0;F<8;F++)S.save(),S.rotate(F/8*Math.PI*2),S.fillText(C[F],0,-330),S.restore();let U=Yt(M);r.circle=new ie(new ki(4.4,4.4),new pn({map:U,transparent:!0,opacity:.16,depthWrite:!1,blending:hn,color:"#7dffb0"})),r.circle.rotation.x=-Math.PI/2,r.circle.position.y=.012,n.add(r.circle)}let l=nm(t+1),c=new et({map:Yt(l.map,!0,[7,3.2]),normalMap:Yt(l.normal,!1,[7,3.2]),roughness:.9,side:cn,color:"#b8b0c8"}),h=new ie(new pt(yn,yn,Hn,80,1,!0),c);h.position.y=Hn/2,h.receiveShadow=!0,n.add(h);let d=ih(t+3),u=new et({map:Yt(d,!0,[1,1]),roughness:.75,color:"#c9b1a0"}),f=new et({map:Yt(ih(t+4,[46,30,24]),!0,[1,1]),roughness:.8}),m=new ie(new sa(1.15,yn,64,1),new et({color:"#141018",roughness:1,side:zt}));m.rotation.x=Math.PI/2,m.position.y=Hn,n.add(m);for(let M=0;M<8;M++){let S=new ie(new xt(.3,.34,yn-1.1),f),C=M/8*Math.PI*2+.2;S.position.set(Math.sin(C)*(yn+1.1)/2,Hn-.2,Math.cos(C)*(yn+1.1)/2),S.rotation.y=C,n.add(S)}{let M=new ie(new Cn(1.2,.09,8,40),f);M.rotation.x=Math.PI/2,M.position.y=Hn-.2,n.add(M)}r.skyC=cd(t+9,256,256),r.hatchMat=new pn({map:Yt(r.skyC),fog:!1,color:"#8890b8"});{let M=new ie(new _i(1.15,40),r.hatchMat);M.rotation.x=Math.PI/2,M.position.y=Hn+.02,n.add(M)}{let M=new ie(new pt(yn-.02,yn-.02,.35,80,1,!0),new et({color:"#2a2532",roughness:.9,side:cn}));M.position.y=.17,n.add(M)}let _=new et({color:"#2b2633",roughness:.85}),g=new et({color:"#0d0c10",roughness:.6,metalness:.4}),p=Yt(rm(t+2),!1,[1.2,1.4]);for(let M of[Math.PI-.62,Math.PI+.62]){let S=new Be;sh(S,M,yn-.03,1.9),n.add(S);let C=1.5,U=3.6,F=cd(t+11+M*10),D=new pn({map:Yt(F),fog:!1,color:"#9aa2c8"}),O=new ie(new ii(Hs(C,U),24),D);rh(O.geometry,C,U),S.add(O);let[G,Z]=sn(128,256),re=Yt(G),J=new ie(new ii(Hs(C,U),24),new pn({map:re,transparent:!0,opacity:0,fog:!1,blending:hn,depthWrite:!1}));rh(J.geometry,C,U),J.position.z=.005,S.add(J);let se=new ie(new ii(Hs(C,U),24),new pn({map:p,transparent:!0,opacity:.55,fog:!1,depthWrite:!1}));rh(se.geometry,C,U),se.position.z=.01,S.add(se);let ae=new ie(new Zr(om(C,U,.22),{depth:.32,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2,curveSegments:20}),_);ae.position.z=-.12,S.add(ae);for(let _e of[-.25,.25]){let rt=new ie(new xt(.05,U-.2,.05),g);rt.position.set(_e,(U-.2)/2,.04),S.add(rt)}for(let _e=1;_e<5;_e++){let rt=new ie(new xt(C,.04,.05),g);rt.position.set(0,_e*U/5.2,.04),S.add(rt)}let ye=new ie(new xt(C+.6,.14,.5),_);ye.position.set(0,-.07,.15),S.add(ye),r.windows.push({g:S,skyMat:D,boltM:J,bc:G,bg:Z,boltT:re,rain:se,flash:0})}{let[M,S]=sn(64,256),C=S.createLinearGradient(0,0,0,256);C.addColorStop(0,"rgba(255,255,255,0)"),C.addColorStop(.2,"rgba(255,255,255,.7)"),C.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=C,S.fillRect(0,0,64,256);let U=S.createLinearGradient(0,0,64,0);U.addColorStop(0,"rgba(0,0,0,1)"),U.addColorStop(.5,"rgba(0,0,0,0)"),U.addColorStop(1,"rgba(0,0,0,1)"),S.globalCompositeOperation="destination-out",S.fillStyle=U,S.fillRect(0,0,64,256);let F=Yt(M);r.shafts=[];for(let D of r.windows){let O=new ie(new ki(1.6,7),new pn({map:F,transparent:!0,opacity:.05,depthWrite:!1,blending:hn,color:"#8a9cff",side:zt})),G=D.g.position;O.position.set(G.x*.62,2.6,G.z*.62),O.lookAt(0,2.6,0),O.rotateX(-.95),O.rotateY(Math.PI/2),n.add(O),r.shafts.push(O)}}for(let[M,S]of[[0,-Math.PI/2+.14],[1,Math.PI],[2,Math.PI/2-.14]]){let C=new Be;sh(C,S,yn-.03,0),n.add(C);let U=M===1?1.7:1.45,F=M===1?3.1:2.75,D=new ie(new ii(Hs(U,F),20),new pn({color:"#030205"}));D.position.z=-.01,C.add(D);let O=new ie(new ii(Hs(U,F),20),new pn({color:"#ff9a40",transparent:!0,opacity:0,blending:hn,depthWrite:!1}));O.position.z=0,C.add(O);let G=new ie(new Zr(om(U,F,.2),{depth:.3,bevelEnabled:!1,curveSegments:16}),_);G.position.z=-.1,C.add(G);let Z=new Be;Z.position.set(-U/2,0,.05),C.add(Z);let re=new ii(Hs(U-.04,F-.02),16);re.translate(U/2,0,0),rh(re,U,F,U/2);let J=new ie(re,new et({map:Yt(ih(t+20+M,[64,40,28]),!0,[1,1]),roughness:.8,side:zt}));Z.add(J);for(let ae of[.5,F-1]){let ye=new ie(new xt(U-.1,.09,.04),g);ye.position.set(U/2,ae,.02),Z.add(ye)}let se=new ie(new Cn(.09,.018,6,16),g);se.position.set(U-.25,1.15,.06),Z.add(se),r.doors.push({g:C,hinge:Z,glow:O,open:0,target:0,pos:ch[M]})}{let[M,S]=sn(64,128),C=S.createRadialGradient(32,84,2,32,74,50);C.addColorStop(0,"rgba(255,240,200,1)"),C.addColorStop(.25,"rgba(255,170,60,.9)"),C.addColorStop(.6,"rgba(220,70,20,.35)"),C.addColorStop(1,"rgba(120,20,0,0)"),S.fillStyle=C,S.beginPath(),S.ellipse(32,74,24,54,0,0,7),S.fill(),r.flameT=Yt(M);for(let U of[Math.PI-.28,Math.PI+.28,-1.05,1.05]){let F=new Be;sh(F,U,yn-.2,2.5),n.add(F);let D=new ie(new pt(.06,.035,.5,8),g);D.rotation.x=-.5,D.position.z=.12,F.add(D);let O=new ie(new pt(.11,.06,.14,10),g);O.position.set(0,.22,.26),F.add(O);let G=new rs(new Oi({map:r.flameT,color:"#ffffff",transparent:!0,depthWrite:!1,blending:hn}));G.position.set(0,.45,.27),G.scale.set(.32,.62,1),F.add(G),r.torches.push(G)}}let E=new et({map:Yt(l.map,!0,[.5,.3]),normalMap:Yt(l.normal,!1,[.5,.3]),roughness:.7,color:"#9a94a8"}),R=new et({color:"#2a2a30",roughness:.45,metalness:.8}),v=new et({color:"#c06a34",roughness:.32,metalness:.9});{let M=new ie(new xt(2.3,.24,1.7),E);M.position.y=kt-.12,M.castShadow=M.receiveShadow=!0,n.add(M),r.slab=M;for(let S of[-.75,.75]){let C=new ie(new xt(.45,kt-.24,1.3),E);C.position.set(S,(kt-.24)/2,0),C.castShadow=!0,n.add(C)}for(let S of[-.5,.5]){let C=new ie(new xt(2.36,.05,.14),R);C.position.set(0,kt+.005,S),n.add(C)}for(let S of[-1.16,1.16])for(let C of[-.5,.5]){let U=new ie(new Cn(.07,.018,6,14),R);U.position.set(S,kt-.12,C),U.rotation.y=Math.PI/2,n.add(U);let F=new Be;for(let D=0;D<5;D++){let O=new ie(new Cn(.045,.012,5,10),R);O.position.y=-D*.075,O.rotation.y=D%2?Math.PI/2:0,F.add(O)}F.position.set(S+Math.sign(S)*.03,kt-.2,C),n.add(F)}r.colliders.push({p:new P(0,.4,0),r:1.6})}{let M=new ie(new pt(.05,.05,Hn-4.7,10),v);M.position.y=4.7+(Hn-4.7)/2,n.add(M),r.ringMat=new et({color:"#c06a34",roughness:.3,metalness:.9,emissive:"#6fa8ff",emissiveIntensity:0});let S=new ie(new Cn(.62,.06,10,40),r.ringMat);S.rotation.x=Math.PI/2,S.position.y=4.55,n.add(S);for(let U=0;U<4;U++){let F=new ie(new pt(.02,.02,.64,6),v),D=U*Math.PI/2;F.position.set(Math.sin(D)*.31,4.6,Math.cos(D)*.31),F.rotation.z=Math.PI/2,F.rotation.y=D+Math.PI/2,n.add(F)}let C=new ie(new Rn(.09,.3,10),v);C.position.y=4.42,C.rotation.x=Math.PI,n.add(C),r.rodTip=new P(0,4.3,0)}let A=Yt(sm(),!0,[1,1]);r.coils=[];for(let M of[-3.35,3.35]){let S=new Be;S.position.set(M,0,-3.25),n.add(S);let C=new ie(new pt(.55,.62,.5,20),R);C.position.y=.25,C.castShadow=!0,S.add(C);let U=new ie(new pt(.42,.42,.06,20),v);U.position.y=.53,S.add(U);let F=new ie(new pt(.21,.21,2.6,24,1,!0),new et({map:A,roughness:.35,metalness:.85,emissive:"#3a6cff",emissiveIntensity:0}));F.position.y=1.85,S.add(F);let D=new ie(new pt(.19,.19,2.6,12),new et({color:"#1b1410",roughness:.8}));D.position.y=1.85,S.add(D);let O=new ie(new Cn(.48,.17,16,40),new et({color:"#b9bcc8",roughness:.22,metalness:1}));O.rotation.x=Math.PI/2,O.position.y=3.3,S.add(O);let G=new ie(new Bt(.2,16,12),O.material);G.position.y=3.42,S.add(G);let Z=new Ps("#7f9bff",0,7,1.8);Z.position.y=3.3,S.add(Z),r.coils.push({g:S,col:F,top:new P(M,3.3,-3.25),light:Z,next:0}),r.colliders.push({p:new P(M,1.5,-3.25),r:.75})}{let M=new Be;M.position.set(2.75,0,-1.25),M.rotation.y=-.55,n.add(M),r.console=M;let S=new ie(new xt(1.1,1.05,.62),f);S.position.y=.52,S.castShadow=!0,M.add(S);let C=new ie(new xt(1.2,.08,.7),R);C.position.y=1.08,M.add(C);let U=new ie(new xt(1,.55,.06),R);U.position.set(0,1.45,-.22),U.rotation.x=-.2,M.add(U),r.dials=[];for(let Z of[-.28,.28]){let re=new ie(new _i(.15,24),new et({color:"#e8dcc0",roughness:.6,emissive:"#3a2a10",emissiveIntensity:.3}));re.position.set(Z,1.48,-.18),re.rotation.x=-.2,M.add(re);let J=new ie(new xt(.012,.12,.01),new pn({color:"#a01010"}));J.geometry.translate(0,.05,0),J.position.set(Z,1.47,-.17),J.rotation.x=-.2,M.add(J),r.dials.push(J)}r.bulbs=[];for(let Z=0;Z<4;Z++){let re=new ie(new Bt(.045,10,8),new et({color:"#331",emissive:["#ff5040","#ffd040","#60ff80","#60c0ff"][Z],emissiveIntensity:.3}));re.position.set(-.36+Z*.24,1.13,.2),M.add(re),r.bulbs.push(re)}let F=new Be;F.position.set(.38,1.12,.12),M.add(F),r.leverPiv=F;let D=new ie(new xt(.16,.12,.22),R);D.position.set(.38,1.13,.12),M.add(D);let O=new ie(new pt(.03,.035,.75,10),R);O.position.y=.37,F.add(O);let G=new ie(new pt(.06,.06,.22,14),new et({color:"#b01818",roughness:.4}));G.position.y=.78,F.add(G),r.grip=G,r.colliders.push({p:new P(2.75,.8,-1.25),r:.8})}let w=new nr({color:"#cfe8ff",roughness:.08,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,side:zt}),N=["#5dff6e","#c06bff","#ff8a2a","#3ad8ff","#ff4fa0","#b8ff3a"];function y(M,S,C){let U=new Be,F;M===0?F=[[0,0],[.16,.01],[.22,.1],[.22,.22],[.15,.33],[.06,.38],[.05,S]]:M===1?F=[[0,0],[.2,0],[.2,.02],[.07,.3],[.05,.32],[.05,S]]:F=[[0,0],[.07,0],[.075,.02],[.075,S]];let D=new xi(F.map(J=>new he(J[0],J[1])),20),O=new ie(D,w);U.add(O);let G=F.filter(J=>J[1]<S*.55).map(J=>new he(Math.max(0,J[0]-.012),J[1]+.005));G.push(new he(0,G[G.length-1].y));let Z=new et({color:C,emissive:C,emissiveIntensity:.9,roughness:.3,transparent:!0,opacity:.9}),re=new ie(new xi(G,18),Z);return U.add(re),{g:U,lm:Z,top:G[G.length-1].y}}{let M=new Be;M.position.set(-3.45,0,-1.35),M.rotation.y=.6,n.add(M);let S=new ie(new xt(2,.1,.85),u);S.position.y=.95,S.castShadow=S.receiveShadow=!0,M.add(S);for(let D of[-.9,.9])for(let O of[-.35,.35]){let G=new ie(new xt(.09,.95,.09),f);G.position.set(D,.47,O),M.add(G)}let C=new ie(new xt(1.9,.05,.7),f);C.position.y=.32,M.add(C),[[0,.62,-.7,0],[1,.5,-.25,.1],[2,.55,.05,-.15],[0,.7,.45,.05],[1,.45,.8,-.1],[2,.5,-.95,.2]].forEach(([D,O,G,Z],re)=>{let J=y(D,O,N[re]);J.g.position.set(G,1,Z),M.add(J.g),r.flasks.push({...J,world:new P,col:new We(N[re]),h:O})});let F=new ie(new tr(new ws([new P(-.7,1.38,0),new P(-.4,1.7,-.1),new P(.1,1.6,-.2),new P(.45,1.3,0)]),30,.02,6),w);M.add(F),r.benchLight=new Ps("#5dff8a",2.2,5,1.8),r.benchLight.position.set(0,1.5,0),M.add(r.benchLight),n.updateMatrixWorld(!0),r.flasks.forEach(D=>D.g.getWorldPosition(D.world)),r.colliders.push({p:new P(-3.45,.8,-1.35),r:1.2})}for(let M of[Math.PI+1.25,Math.PI-1.25]){let S=new Be;sh(S,M,yn-.32,0),n.add(S);for(let C of[1.2,2,2.8]){let U=new ie(new xt(1.8,.06,.4),f);U.position.set(0,C,0),S.add(U);for(let F=0;F<4;F++){let D=.25+s()*.2,O=.09+s()*.05,G=new ie(new pt(O,O,D,14),w);G.position.set(-.65+F*.43+(s()-.5)*.1,C+.03+D/2,(s()-.5)*.1),S.add(G);let Z=N[Math.floor(s()*N.length)],re=new ie(new pt(O*.88,O*.88,D*.7,12),new et({color:Z,emissive:Z,emissiveIntensity:.35,roughness:.4,transparent:!0,opacity:.85}));if(re.position.copy(G.position),re.position.y-=D*.13,S.add(re),s()<.4){let J=new ie(new Bt(O*.5,10,8),new et({color:"#d8c8b0",roughness:.6}));J.position.copy(re.position),S.add(J)}r.shelves.push(G)}}r.colliders.push({p:S.position.clone().setY(1.5),r:1})}for(let[M,S]of[[-1.9,1.2],[1.9,1.2],[0,-2.4]]){let C=new Be;C.position.set(M,Hn,S),n.add(C);let U=Hn-4.9-(S<0?-.4:0),F=new ie(new pt(.012,.012,U,4),R);F.position.y=-U/2,C.add(F);let D=new ie(new Rn(.28,.22,16,1,!0),new et({color:"#2a3a34",roughness:.5,metalness:.6,side:zt}));D.position.y=-U,C.add(D);let O=new et({color:"#ffe2a0",emissive:"#ffb050",emissiveIntensity:2.2}),G=new ie(new Bt(.08,12,10),O);G.position.y=-U-.1,C.add(G);let Z=new Ps("#ffb870",5,9,1.7);Z.position.y=-U-.2,C.add(Z),r.lamps.push({g:C,bm:O,pl:Z,base:5,sw:s()*6})}{let S=new Float32Array(900);for(let U=0;U<300;U++){let F=s()*Math.PI*2,D=Math.sqrt(s())*(yn-1);S[U*3]=Math.sin(F)*D,S[U*3+1]=.3+s()*6,S[U*3+2]=Math.cos(F)*D}let C=new St;C.setAttribute("position",new qt(S,3)),r.dust=new bs(C,new Ks({map:r.soft,color:"#b8b0ff",size:.05,transparent:!0,opacity:.35,depthWrite:!1,blending:hn})),n.add(r.dust)}{let S=new Float32Array(210),C=new St;C.setAttribute("position",new qt(S,3)),r.bub={pts:new bs(C,new Ks({map:r.soft,color:"#d8ffe0",size:.045,transparent:!0,opacity:.8,depthWrite:!1,blending:hn})),p:S,life:new Float32Array(70),f:new Int16Array(70)},n.add(r.bub.pts)}for(let M=0;M<12;M++){let S=(C,U,F)=>{let D=new uo;D.setPositions(new Float32Array(78));let O=new ks({color:U,linewidth:C,transparent:!0,opacity:F,depthWrite:!1,blending:hn,worldUnits:!1}),G=new nh(D,O);return G.frustumCulled=!1,G.visible=!1,n.add(G),G};r.arcs.push({core:S(2.2,"#f2f6ff",1),glow:S(7,"#7aa0ff",.4),life:0,max:1,a:new P,b:new P,amp:.3,jt:0})}return r.setRes=(M,S)=>r.arcs.forEach(C=>{C.core.material.resolution.set(M,S),C.glow.material.resolution.set(M,S)}),r}function rh(i,e,t,n=0){let s=i.attributes.position,r=i.attributes.uv;for(let o=0;o<s.count;o++)r.setXY(o,(s.getX(o)-n)/e+.5,s.getY(o)/t);r.needsUpdate=!0}var oh=new P,zs=new P,La=new P,ah=new P;function bM(i,e,t,n,s=Math.random){zs.subVectors(e,i);let o=zs.length();ah.set(zs.y,-zs.x+.3,zs.z+.2).normalize(),La.crossVectors(zs,ah).normalize(),ah.crossVectors(La,zs).normalize();let a=0,l=0;for(let c=0;c<26;c++){let h=c/25,d=Math.sin(Math.PI*h);a=a*.55+(s()-.5)*t*o*.35,l=l*.55+(s()-.5)*t*o*.35,oh.copy(i).addScaledVector(zs,h).addScaledVector(ah,a*d).addScaledVector(La,l*d),n[c*3]=Wi(oh.x),n[c*3+1]=Wi(oh.y),n[c*3+2]=Wi(oh.z)}}var hd=new Float32Array(78);function Xi(i,e,t,n={}){let s=i.arcs.find(r=>r.life<=0);return s||(s=i.arcs.reduce((r,o)=>o.life<r.life?o:r,i.arcs[0])),s.a.copy(e),s.b.copy(t),s.life=s.max=n.life||.25,s.amp=n.amp??.35,s.jt=0,s.big=n.big||0,s.core.material.linewidth=n.big?4.5:2.2,s.glow.material.linewidth=n.big?16:7,s.glow.material.color.set(n.color||"#7aa0ff"),s}function lm(i,e){i.strike=1,i.flash=Math.max(i.flash,1);let t=new P(0,Hn+.2,0);Xi(i,t,i.rodTip,{life:.55,amp:.22,big:1,color:"#9fc0ff"}),Xi(i,i.rodTip,e,{life:.65,amp:.3,big:1,color:"#9fc0ff"}),Xi(i,i.rodTip,e.clone().add(new P(.4,-.5,.2)),{life:.4,amp:.45});for(let n of i.coils)Xi(i,n.top,i.rodTip,{life:.5,amp:.3});lh(i,0),lh(i,1)}function lh(i,e,t=Math.random){let n=i.windows[e];if(!n)return;let s=n.bg;s.clearRect(0,0,128,256);let r=(o,a,l,c,h)=>{s.lineWidth=c,s.beginPath(),s.moveTo(o,a);for(let d=0;d<l;d++)if(o+=(t()-.5)*18,a+=8+t()*8,s.lineTo(o,a),h<2&&t()<.08){let u=o,f=a;s.stroke(),r(u,f,l*.4,c*.6,h+1),s.lineWidth=c,s.beginPath(),s.moveTo(u,f)}s.stroke()};s.shadowColor="rgba(160,190,255,1)",s.shadowBlur=10,s.strokeStyle="rgba(235,240,255,1)",s.lineCap="round",r(30+t()*70,-5,22,3,0),n.boltT.needsUpdate=!0,n.flash=1}function cm(i,e,t,n={}){i.t=e;let s=Math.random;i.flash=Math.max(0,i.flash-t*2.6),i.strike=Math.max(0,i.strike-t*1.6),i.flicker=Math.max(0,i.flicker-t*.5);let r=Wi(i.flash);i.flashLight.intensity=r*2.4,i.boltLight.intensity=Wi(i.strike)*26,i.hatchMat.color.setScalar(.55+r*.9);for(let a of i.windows)a.flash=Math.max(0,a.flash-t*2.2),a.skyMat.color.setRGB(.6+a.flash*.8+r*.3,.63+a.flash*.8+r*.3,.8+a.flash*.6+r*.2),a.boltM.material.opacity=Math.min(1,a.flash*1.6)*(a.flash>.5||s()<.7?1:.3),a.rain.material.map.offset.y=e*1.6%1,a.rain.material.map.offset.x=e*.1%1;i.shafts.forEach((a,l)=>a.material.opacity=.045+r*.06+i.windows[l].flash*.05);let o=Wi(i.charge);for(let a of i.coils)if(a.col.material.emissiveIntensity=o*.6+.04,a.light.intensity=o*6+(a.arcK||0)*3,a.arcK=Math.max(0,(a.arcK||0)-t*6),a.next-=t,a.next<=0){a.next=o>.1?.05+s()*(.35-o*.3):.9+s()*2.6;let l=s()*Math.PI*2,c=s()-.3;La.set(a.top.x+Math.cos(l)*(.9+s()*.6),a.top.y+c*1.1,a.top.z+Math.sin(l)*(.9+s()*.6)),Xi(i,a.top,La.clone(),{life:.12+s()*.12,amp:.5}),a.arcK=1,n.onArc&&n.onArc(a,o)}if(o>.55&&s()<t*8*o){let a=i.coils[s()<.5?0:1];Xi(i,a.top,i.rodTip,{life:.15,amp:.35})}i.ringMat.emissiveIntensity=o*1.4+r*.8;for(let a of i.arcs){if(a.life<=0){a.core.visible=a.glow.visible=!1;continue}a.life-=t,a.jt-=t,a.jt<=0&&(a.jt=1/24,bM(a.a,a.b,a.amp,hd),a.core.geometry.setPositions(hd),a.glow.geometry.setPositions(hd));let l=Math.max(0,a.life/a.max),c=l*(s()<.25?.45:1);a.core.material.opacity=Math.min(1,c*1.3),a.glow.material.opacity=.35*c,a.core.visible=a.glow.visible=a.life>0}if(i.leverPiv.rotation.x=-.95+Wi(i.lever)*1.9,i.grip.material.emissive.set("#ff2020"),i.grip.material.emissiveIntensity=n.leverHint?.25+.25*Math.sin(e*6):0,i.dials.forEach((a,l)=>a.rotation.z=-1.1+o*2.2+Math.sin(e*(3+l))*(.05+o*.2)),i.bulbs.forEach((a,l)=>a.material.emissiveIntensity=.25+(o>l*.25?1.6:0)*(s()<.9?1:.3)),i.lamps.forEach(a=>{a.g.rotation.z=Math.sin(e*.7+a.sw)*.02+(n.shake||0)*.05*Math.sin(e*9+a.sw),a.g.rotation.x=Math.cos(e*.6+a.sw)*.02;let c=(i.flicker>0?s()<.55-i.flicker*.3?1:.05:1)*(1-Wi(i.disco)*.55);a.pl.intensity=a.base*c,a.bm.emissiveIntensity=2.2*c}),i.key.intensity=46*(i.flicker>0&&s()<.25?.35:1)*(1-Wi(i.disco)*.45),i.disco.intensity=Wi(i.disco)*140,i.disco.intensity>0){let a=i.beat*.17%1;i.disco.color.setHSL(a,.85,.6),i.disco.position.set(Math.sin(e*1.3)*2.5,7.8,2.5+Math.cos(e*1.1))}i.torches.forEach((a,l)=>{let c=.85+Math.sin(e*13+l*3)*.08+Math.sin(e*29+l)*.06;a.scale.set(.32*c,.62*(2-c),1)});for(let a of i.doors)a.open+=(a.target-a.open)*(1-Math.exp(-t*5)),a.hinge.rotation.y=-a.open*1.45,a.glow.material.opacity=a.open*.18;i.flasks.forEach((a,l)=>a.lm.emissiveIntensity=.75+Math.sin(e*2+l)*.15+o*.5),i.benchLight.intensity=2+Math.sin(e*3.1)*.25+o*2;{let a=i.bub,l=a.p;for(let c=0;c<a.life.length;c++)if(a.life[c]-=t,a.life[c]<=0){let h=i.flasks[Math.floor(s()*i.flasks.length)];a.f[c]=i.flasks.indexOf(h),a.life[c]=.6+s()*.9,l[c*3]=h.world.x+(s()-.5)*.06,l[c*3+1]=h.world.y+.03,l[c*3+2]=h.world.z+(s()-.5)*.06}else{let h=i.flasks[a.f[c]];l[c*3+1]=Math.min(l[c*3+1]+t*(.25+o*.4),h.world.y+h.top*1.05),l[c*3]+=(s()-.5)*t*.05}a.pts.geometry.attributes.position.needsUpdate=!0}{let a=i.dust.geometry.attributes.position;for(let l=0;l<a.count;l++){let c=a.getY(l)+t*(.03+l%5*.006);c>6.5&&(c=.3),a.setY(l,c),a.setX(l,a.getX(l)+Math.sin(e*.3+l)*t*.02)}a.needsUpdate=!0}i.circle.material.opacity=.12+o*.25+r*.1}var Da=new P;function ai(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Da.copy(e),Da[n]=0,Da.normalize();let c=.5*o/(o+a),h=1-Da.angleTo(i)/l;return Math.sign(Da[t])===1?h*c:a/(o+a)+c+c*(1-h)}var qi=class i extends xt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new P,g=.5/o;for(let p=0,E=0;p<d.length;p+=3,E+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),f[E+0]=ai(_,c,"z","y",r,n),f[E+1]=1-ai(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[E+0]=1-ai(_,c,"z","y",r,n),f[E+1]=1-ai(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[E+0]=1-ai(_,c,"x","z",r,e),f[E+1]=ai(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[E+0]=1-ai(_,c,"x","z",r,e),f[E+1]=1-ai(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[E+0]=1-ai(_,c,"x","y",r,e),f[E+1]=1-ai(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[E+0]=ai(_,c,"x","y",r,e),f[E+1]=1-ai(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var li=["head","horns","eyes","mouth","body","arms","legs","tail","wings","color","pattern"],mm={head:"\u{1F5FF}",horns:"\u{1F98C}",eyes:"\u{1F441}\uFE0F",mouth:"\u{1F444}",body:"\u{1FAC3}",arms:"\u{1F4AA}",legs:"\u{1F9B5}",tail:"\u{1F98E}",wings:"\u{1F987}",color:"\u{1F3A8}",pattern:"\u{1F43E}"},cs={head:[{id:"bolt",e:"\u{1F529}",s:[3,2,1]},{id:"round",e:"\u{1F7E2}",s:[1,1,3]},{id:"pumpkin",e:"\u{1F383}",s:[1,3,2]},{id:"dragon",e:"\u{1F432}",s:[3,3,0]},{id:"alien",e:"\u{1F47D}",s:[0,2,3]},{id:"bat",e:"\u{1F987}",s:[1,2,3]}],horns:[{id:"none",e:"\u2B55",s:[0,0,0]},{id:"devil",e:"\u{1F608}",s:[1,2,0]},{id:"ram",e:"\u{1F40F}",s:[2,1,0]},{id:"antennae",e:"\u{1F4E1}",s:[0,1,2]},{id:"unicorn",e:"\u{1F984}",s:[0,0,3]},{id:"antlers",e:"\u{1F98C}",s:[1,2,1]}],eyes:[{id:"two",e:"\u{1F440}",s:[0,1,1]},{id:"cyclops",e:"\u{1F441}\uFE0F",s:[1,2,0]},{id:"three",e:"\u{1F53A}",s:[0,2,1]},{id:"many",e:"\u{1F577}\uFE0F",s:[0,3,0]},{id:"stalks",e:"\u{1F40C}",s:[0,1,2]}],mouth:[{id:"grin",e:"\u{1F601}",s:[1,1,2]},{id:"fangs",e:"\u{1F9DB}",s:[2,2,0]},{id:"tusks",e:"\u{1F417}",s:[3,1,0]},{id:"stitched",e:"\u{1F9F5}",s:[0,2,1]},{id:"beak",e:"\u{1F99C}",s:[1,1,2]},{id:"jaw",e:"\u{1F988}",s:[3,2,0]}],body:[{id:"blob",e:"\u{1FAE7}",s:[1,0,2]},{id:"brute",e:"\u{1F98D}",s:[3,1,0]},{id:"slim",e:"\u{1F992}",s:[0,1,3]},{id:"pear",e:"\u{1F350}",s:[1,1,1]},{id:"bug",e:"\u{1F41B}",s:[0,3,1]}],arms:[{id:"claws",e:"\u{1F43E}",s:[1,2,1]},{id:"muscle",e:"\u{1F4AA}",s:[3,1,0]},{id:"stubby",e:"\u{1F9F8}",s:[0,0,2]},{id:"tentacles",e:"\u{1F419}",s:[0,2,3]},{id:"pincers",e:"\u{1F980}",s:[1,3,0]}],legs:[{id:"stompers",e:"\u{1F9B6}",s:[3,0,1]},{id:"chicken",e:"\u{1F414}",s:[0,1,3]},{id:"spider",e:"\u{1F578}\uFE0F",s:[0,3,1]},{id:"stubby",e:"\u{1F954}",s:[1,0,1]},{id:"tentacle",e:"\u{1F991}",s:[0,2,2]}],tail:[{id:"none",e:"\u2B55",s:[0,0,0]},{id:"lizard",e:"\u{1F98E}",s:[1,0,1]},{id:"devil",e:"\u{1F531}",s:[0,2,1]},{id:"fluffy",e:"\u{1F43F}\uFE0F",s:[0,0,2]},{id:"scorpion",e:"\u{1F982}",s:[0,3,0]}],wings:[{id:"none",e:"\u2B55",s:[0,0,0]},{id:"bat",e:"\u{1F987}",s:[1,2,1]},{id:"dragon",e:"\u{1F409}",s:[2,2,0]},{id:"bug",e:"\u{1F98B}",s:[0,1,2]},{id:"tiny",e:"\u{1FAB6}",s:[0,0,2]}],color:[{id:"green",c:"#5fae3c"},{id:"purple",c:"#8a58d0"},{id:"orange",c:"#e2782c"},{id:"blue",c:"#3f7fd6"},{id:"red",c:"#c23a3a"},{id:"teal",c:"#2fa79a"},{id:"pink",c:"#e06aa8"},{id:"bone",c:"#d6ccb2"}],pattern:[{id:"plain",e:"\u2B1C",s:[0,0,0]},{id:"spots",e:"\u{1F534}",s:[0,0,1]},{id:"stripes",e:"\u{1F993}",s:[0,1,0]},{id:"scales",e:"\u{1F40A}",s:[1,0,0]},{id:"stitches",e:"\u{1F9F5}",s:[0,1,0]},{id:"glow",e:"\u2728",s:[0,2,0]}]};cs.color.forEach(i=>{i.s=[0,0,0],i.e="\u25CF"});var EM=[0,1,2].map(i=>li.reduce((e,t)=>e+Math.max(...cs[t].map(n=>n.s[i])),0)),hh=(i,e)=>cs[i].find(t=>t.id===e)||cs[i][0];function Vs(i){let e=[0,0,0];for(let t of li){let n=hh(t,i[t]);for(let s=0;s<3;s++)e[s]+=n.s[s]}return e.map((t,n)=>t/EM[n]*1.75).map(t=>Math.min(1,t))}var gm={head:"bolt",horns:"none",eyes:"two",mouth:"stitched",body:"brute",arms:"claws",legs:"stompers",tail:"none",wings:"none",color:"green",pattern:"stitches"};function dd(i=Math.random){let e={};for(let t of li){let n=cs[t],s=n[Math.floor(i()*n.length)];(t==="wings"||t==="tail"||t==="horns")&&i()<.25&&(s=n[0]),e[t]=s.id}return e}var hm={bolt:["Volt","Sparky","Boltz"],round:["Blub","Gloop","Bobo"],pumpkin:["Gourd","Pumpo","Jack-o"],dragon:["Drako","Scorch","Fang"],alien:["Zorb","Quark","Bleep"],bat:["Flitter","Nyx","Squeak"]},wM={claws:"claw",muscle:"crusher",stubby:"hugger",tentacles:"tangle",pincers:"snapper"},TM={stompers:"the Stomper",chicken:"the Strutter",spider:"the Creeper",stubby:"the Waddler",tentacle:"the Slitherer"};function mo(i,e="en"){let t=hm[i.head]||hm.bolt,n=(i.color.length+i.eyes.length+i.mouth.length)%t.length,s={"the Stomper":"der Stampfer","the Strutter":"der Stolzierer","the Creeper":"der Krabbler","the Waddler":"der Watschler","the Slitherer":"der Schl\xE4ngler"},r=TM[i.legs];return`${t[n]}${wM[i.arms]} ${e==="de"?s[r]:r}`}var ud={};function AM(i){if(ud[i])return ud[i];let e=512,t=256,[n,s]=sn(e,t),[r,o]=sn(e,t),a=fo(31),l=Si(i.length*977+3),c=s.createImageData(e,t);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let f=a(u/18,d/18)*.5+a(u/4,d/4)*.5,m=(d*e+u)*4,_=205+f*50;c.data[m]=c.data[m+1]=c.data[m+2]=_,c.data[m+3]=255}s.putImageData(c,0,0),o.fillStyle="#000",o.fillRect(0,0,e,t);let h=d=>{for(let u of[-e,0,e])s.save(),s.translate(u,0),d(s),s.restore()};if(i==="spots")for(let d=0;d<46;d++){let u=l()*e,f=l()*t,m=6+l()*20;h(_=>{let g=_.createRadialGradient(u,f,m*.6,u,f,m);g.addColorStop(0,"rgba(40,20,30,.55)"),g.addColorStop(1,"rgba(40,20,30,0)"),_.fillStyle=g,_.beginPath(),_.arc(u,f,m,0,7),_.fill()})}if(i==="stripes")for(let d=0;d<12;d++){let u=d*e/12;s.fillStyle="rgba(20,10,30,.5)",s.beginPath();for(let f=0;f<=t;f+=8)s.lineTo(u+Math.sin(f/30+d)*10,f);for(let f=t;f>=0;f-=8)s.lineTo(u+14+Math.sin(f/30+d)*12,f);s.fill()}if(i==="scales")for(let u=-22;u<t+22;u+=22*.55)for(let f=-22;f<e+22;f+=22){let m=Math.round(u/12.100000000000001)%2*22*.5;s.strokeStyle="rgba(20,20,20,.42)",s.lineWidth=2.2,s.beginPath(),s.arc(f+m,u,22*.55,0,Math.PI),s.stroke(),s.fillStyle="rgba(255,255,255,.08)",s.beginPath(),s.arc(f+m,u-3,22*.35,0,Math.PI),s.fill()}if(i==="stitches"){for(let d=0;d<9;d++){s.fillStyle=`rgba(${l()<.5?0:255},${l()<.5?0:255},${l()<.5?0:255},.07)`,s.beginPath();let u=l()*e,f=l()*t;for(let m=0;m<6;m++)s.lineTo(u+(l()-.5)*220,f+(l()-.5)*160);s.fill()}for(let d=0;d<8;d++){let u=l()*e,f=l()*t,m=l()*Math.PI,_=90+l()*120;s.strokeStyle="rgba(30,15,20,.75)",s.lineWidth=2.5,s.beginPath(),s.moveTo(u,f),s.lineTo(u+Math.cos(m)*_,f+Math.sin(m)*_),s.stroke();for(let g=0;g<_;g+=11){let p=u+Math.cos(m)*g,E=f+Math.sin(m)*g;s.beginPath(),s.moveTo(p-Math.sin(m)*6,E+Math.cos(m)*6),s.lineTo(p+Math.sin(m)*6,E-Math.cos(m)*6),s.stroke()}}}if(i==="glow"){o.strokeStyle="#fff",o.lineCap="round";for(let d=0;d<16;d++){let u=l()*e,f=l()*t,m=l()*6;o.lineWidth=2+l()*3,o.beginPath(),o.moveTo(u,f);for(let _=0;_<40;_++)m+=(l()-.5)*.9,u+=Math.cos(m)*7,f+=Math.sin(m)*7,o.lineTo(u,f);o.stroke()}o.filter="blur(2px)",o.drawImage(r,0,0),o.filter="none",s.globalAlpha=.35,s.drawImage(r,0,0),s.globalAlpha=1}return ud[i]={c:n,e:i==="glow"?r:null}}var Zt=(i,e,t)=>new P(i,e,t);function Zi(i,e,t,n,s=10){let r=new Xr((e+t)/2,Math.max(.01,i-(e+t)),4,s);r.translate(0,-i/2,0);let o=new ie(r,n);return o.castShadow=!0,o}function In(i,e,t,n=10){let s=new Rn(i,e,n);s.translate(0,e/2,0);let r=new ie(s,t);return r.castShadow=!0,r}function It(i,e,t=20,n=14){let s=new ie(new Bt(i,t,n),e);return s.castShadow=!0,s}function ur(i,e,t,n=24){let s=new ws(i),r=new tr(s,n,1,10,!1),o=r.attributes.position,a=r.attributes.normal;for(let c=0;c<=n;c++){let h=1-c/n,d=e*(.08+.92*h),u=s.getPointAt(c/n);for(let f=0;f<=10;f++){let m=c*11+f;o.setXYZ(m,u.x+a.getX(m)*d,u.y+a.getY(m)*d,u.z+a.getZ(m)*d)}}r.computeVertexNormals();let l=new ie(r,t);return l.castShadow=!0,l}function RM(i){let e=new os;if(i==="bat"||i==="dragon"){let t=i==="dragon"?1.45:1;e.moveTo(0,.05),e.lineTo(.35*t,.32*t),e.lineTo(.9*t,.42*t),e.quadraticCurveTo(.78*t,.1*t,.82*t,-.22*t),e.quadraticCurveTo(.6*t,-.08*t,.5*t,-.28*t),e.quadraticCurveTo(.33*t,-.12*t,.2*t,-.3*t),e.quadraticCurveTo(.1*t,-.12*t,0,-.18),e.lineTo(0,.05)}else i==="tiny"&&(e.moveTo(0,0),e.quadraticCurveTo(.12,.3,.34,.26),e.quadraticCurveTo(.3,.12,.36,.02),e.quadraticCurveTo(.24,-.02,.26,-.12),e.quadraticCurveTo(.12,-.06,0,-.08));return e}var CM={bolt:{ell:null,boxZ:.3,eyeY:.44,eyeW:.14,mouthY:.2,mouthW:.34,top:.7,hornX:.2,hornZ:0,eyeS:1},round:{ell:[0,.34,0,.37,.37,.37],eyeY:.43,eyeW:.14,mouthY:.21,mouthW:.3,top:.7,hornX:.17,hornZ:0,eyeS:1},pumpkin:{ell:[0,.33,0,.43,.34,.4],eyeY:.41,eyeW:.16,mouthY:.21,mouthW:.34,top:.66,hornX:.2,hornZ:0,eyeS:1},dragon:{ell:[0,.38,-.04,.3,.3,.3],snout:!0,eyeY:.5,eyeW:.15,mouthY:.2,mouthW:.26,mouthZ:.47,top:.67,hornX:.16,hornZ:-.12,eyeS:.9},alien:{ell:[0,.45,0,.31,.42,.3],eyeY:.44,eyeW:.14,mouthY:.2,mouthW:.14,top:.86,hornX:.15,hornZ:0,eyeS:1.3},bat:{ell:[0,.34,0,.34,.34,.33],eyeY:.43,eyeW:.14,mouthY:.19,mouthW:.26,top:.66,hornX:.1,hornZ:.02,eyeS:1}};function um(i,e,t){if(i.boxZ)return i.boxZ;let[n,s,r,o,a,l]=i.ell,c=1-((e-n)/o)**2-((t-s)/a)**2;return r+l*Math.sqrt(Math.max(.02,c))}var PM={blob:{neck:[0,.98,.04],sh:[.55,.62,.03],legX:.27,tail:[0,.3,-.5],wing:[.24,.78,-.4],w:.62},brute:{neck:[0,1.2,.1],sh:[.64,.98,.05],legX:.3,tail:[0,.3,-.4],wing:[.26,1.02,-.36],w:.66},slim:{neck:[0,1.12,0],sh:[.33,.92,0],legX:.16,tail:[0,.24,-.24],wing:[.16,.9,-.22],w:.32},pear:{neck:[0,1.03,0],sh:[.37,.8,0],legX:.27,tail:[0,.26,-.5],wing:[.2,.84,-.3],w:.56},bug:{neck:[0,1.05,.18],sh:[.28,.86,.12],legX:.22,tail:[0,.38,-.98],wing:[.2,.92,-.06],w:.4}},dm={stompers:{hipY:.72,a:.38,b:.36,r:.13},chicken:{hipY:.86,a:.4,b:.48,r:.085,dig:!0},spider:{hipY:.55},stubby:{hipY:.34,a:.17,b:.17,r:.11},tentacle:{hipY:.44}};function _m(i,e={}){let t=new We(hh("color",i.color).c),n=AM(i.pattern),s=Yt(n.c,!0,[1,1]),r=n.e?Yt(n.e,!0,[1,1]):null,o=new et({color:t,map:s,roughness:.6,metalness:0,bumpMap:s,bumpScale:1.2,emissiveMap:r,emissive:r?t.clone().offsetHSL(0,.15,.25):new We("#000"),emissiveIntensity:0}),a=new et({color:t.clone().multiplyScalar(.55),map:s,roughness:.7,side:zt}),l=new et({color:"#e8dcc0",roughness:.42}),c=new et({color:i.horns==="devil"?"#8a1c1c":i.horns==="unicorn"?"#f0e6ff":"#d9c9a4",roughness:.38,metalness:i.horns==="unicorn"?.2:0}),h=new et({color:"#2a070a",roughness:.8}),d=new et({color:"#f6f0e0",roughness:.3}),u=new et({color:"#5a5e66",roughness:.35,metalness:.9}),f=new We(i.color==="green"||i.color==="teal"?"#ffd23a":i.color==="orange"||i.color==="red"?"#7dff6a":"#ffe14a"),m=new et({color:f,emissive:f,emissiveIntensity:0,roughness:.3}),_=new et({color:"#f2eee4",roughness:.25}),g=new et({color:"#050505",roughness:.2}),p={spec:i,root:new Be,parts:{},eyes:[],arms:[],legs:[],tail:[],wings:[],ants:[],mats:{skin:o,skinDark:a,bone:l,hornM:c,dark:h,tooth:d,iron:u,irisM:m,sclera:_,pupilM:g},geos:[],anim:{look:Zt(0,1.5,5),blink:0,nextBlink:2,yaw:0,t:0},stats:Vs(i)};p.root.name="monster";let E=new Be;p.root.add(E),p.rig=E;let R=PM[i.body],v=dm[i.legs];p.hipY=v.hipY,p.B=R;let A=new Be;A.position.y=v.hipY,E.add(A),p.hips=A;let w=new Be;A.add(w),p.torso=w;let N=new Be;if(w.add(N),p.parts.body=N,i.body==="blob"){let q=It(.6,o,32,24);q.scale.set(1,.92,.88),q.position.y=.5,N.add(q);let te=It(.42,o,24,16);te.scale.set(1,.9,.6),te.position.set(0,.42,.26),N.add(te)}else if(i.body==="brute"){let q=It(.5,o,32,24);q.scale.set(1.3,1.05,.85),q.position.y=.8,N.add(q);let te=It(.42,o,24,18);te.scale.set(1.05,.9,.92),te.position.set(0,.33,.03),N.add(te);for(let B of[-.36,.36]){let k=It(.26,o,20,14);k.scale.set(1.1,.7,.8),k.position.set(B,.98,.1),N.add(k)}}else if(i.body==="slim"){let q=new ie(new Xr(.27,.62,8,24),o);q.position.y=.58,q.castShadow=!0,N.add(q);let te=It(.25,o,20,14);te.scale.set(1.15,.8,.9),te.position.y=.86,N.add(te)}else if(i.body==="pear"){let q=[[0,0],[.4,.03],[.56,.24],[.53,.48],[.42,.72],[.31,.92],[.2,1.04],[0,1.08]].map(B=>new he(B[0],B[1])),te=new ie(new xi(new Ts(q).getPoints(24),32),o);te.castShadow=!0,N.add(te)}else{let q=It(.42,o,28,18);q.scale.set(.9,.85,1.25),q.position.set(0,.38,-.45),N.add(q);for(let k=0;k<4;k++){let W=new ie(new Cn(.33-k*.03,.025,6,24),a);W.position.set(0,.38,-.2-k*.2),W.scale.set(1.1,.95,1),N.add(W)}let te=It(.3,o,24,16);te.position.set(0,.52,.04),N.add(te);let B=It(.27,o,24,16);B.scale.set(1.05,1,.95),B.position.set(0,.84,.12),N.add(B)}let y=new Be;y.position.set(...R.neck),w.add(y),p.neck=y;let M=new Be;y.add(M),p.head=M;let S=new Be;M.add(S),p.parts.head=S;let C=CM[i.head];p.H=C;{let q=Zi(.16,.14,.14,o);q.position.y=.1,y.add(q)}if(i.head==="bolt"){let q=new ie(new qi(.62,.66,.58,4,.08),o);q.position.y=.36,q.castShadow=!0,S.add(q);let te=new ie(new qi(.66,.13,.62,3,.04),new et({color:"#141414",roughness:.9}));te.position.y=.68,S.add(te);for(let W of[-.34,.34]){let Y=new ie(new pt(.045,.045,.16,10),u);Y.rotation.z=Math.PI/2,Y.position.set(W,.14,-.02),S.add(Y);let K=new ie(new pt(.065,.065,.05,6),u);K.rotation.z=Math.PI/2,K.position.set(W*1.22,.14,-.02),S.add(K)}let B=new ie(new xt(.3,.012,.012),h);B.position.set(.04,.6,.3),B.rotation.z=-.15,S.add(B);for(let W=0;W<6;W++){let Y=new ie(new xt(.01,.05,.012),h);Y.position.set(-.08+W*.05,.6+(-.08+W*.05)*.15*-1,.305),S.add(Y)}let k=new ie(new qi(.56,.07,.08,2,.03),o);k.position.set(0,.53,.29),S.add(k)}else if(i.head==="pumpkin"){let q=new Bt(.38,40,24),te=q.attributes.position;for(let W=0;W<te.count;W++){let Y=te.getX(W),K=te.getZ(W),me=te.getY(W),Me=Math.atan2(K,Y),ke=1-.07*Math.pow(Math.abs(Math.cos(Me*4)),.6)*(1-Math.abs(me)/.38);te.setXYZ(W,Y*ke,me,K*ke)}q.computeVertexNormals();let B=new ie(q,o);B.scale.set(1.12,.88,1.05),B.position.y=.33,B.castShadow=!0,S.add(B);let k=ur([Zt(0,.6,0),Zt(.03,.7,0),Zt(.09,.76,.02)],.05,new et({color:"#3d5a1e",roughness:.8}),10);S.add(k)}else if(i.head==="dragon"){let q=It(.3,o,28,20);q.position.set(0,.38,-.04),S.add(q);let te=new ie(new qi(.3,.2,.42,4,.08),o);te.position.set(0,.27,.25),te.castShadow=!0,S.add(te);for(let B of[-.06,.06]){let k=It(.022,h,8,6);k.position.set(B,.33,.46),S.add(k)}for(let B of[-.13,.13]){let k=new ie(new qi(.16,.06,.14,2,.025),a);k.position.set(B,.58,.17),k.rotation.z=-B*2.4,S.add(k)}for(let B=0;B<4;B++){let k=In(.04,.12,l,6);k.position.set(0,.64-B*.05,-.08-B*.1),k.rotation.x=-.5-B*.25,S.add(k)}}else if(i.head==="alien"){let q=[[0,0],[.1,.02],[.2,.12],[.3,.35],[.32,.55],[.27,.75],[.15,.86],[0,.88]].map(B=>new he(B[0],B[1])),te=new ie(new xi(new Ts(q).getPoints(20),32),o);te.scale.z=.95,te.castShadow=!0,S.add(te)}else if(i.head==="bat"){let q=It(.34,o,28,20);q.position.y=.34,S.add(q);for(let B of[-1,1]){let k=In(.12,.34,o,12);k.position.set(B*.2,.55,-.02),k.rotation.z=-B*.45,k.scale.z=.45,S.add(k);let W=In(.07,.24,new et({color:"#d98a9a",roughness:.7}),10);W.position.set(B*.205,.57,.02),W.rotation.z=-B*.45,W.scale.z=.25,S.add(W)}let te=It(.07,a,14,10);te.scale.set(1.3,.8,.9),te.position.set(0,.32,.32),S.add(te)}else{let q=It(.37,o,32,24);q.position.y=.34,S.add(q)}let U=new Be;M.add(U),p.parts.eyes=U;let F=C.eyeS||1,D=[],O=C.eyeW,G=C.eyeY;if(i.eyes==="two"?D=[[-O,G,.085],[O,G,.085]]:i.eyes==="cyclops"?D=[[0,G+.02,.14]]:i.eyes==="three"?D=[[-O,G-.01,.072],[O,G-.01,.072],[0,G+.13,.065]]:i.eyes==="many"&&(D=[[-O*1.05,G-.02,.055],[O*1.05,G-.02,.055],[0,G+.04,.06],[-O*.6,G+.15,.045],[O*.6,G+.15,.045],[0,G+.2,.04]]),i.eyes==="stalks")for(let q of[-1,1]){let te=new Be;te.position.set(q*(C.hornX*.8+.04),C.top-.06,C.hornZ+.02),te.rotation.z=-q*.35,te.rotation.x=.25,U.add(te);let B=Zi(.32,.035,.03,o);B.rotation.x=Math.PI,te.add(B);let k=Z(.08*F);k.g.position.y=.34,te.add(k.g),k.stalk=te,p.eyes.push(k)}else for(let[q,te,B]of D){let k=B*F,W=Z(k),Y=um(C,q,te);W.g.position.set(q,te,Y-k*.45),U.add(W.g),p.eyes.push(W)}function Z(q){let te=new Be,B=It(q,_,18,14);te.add(B);let k=It(q*.62,m,16,12);k.scale.z=.45,k.position.z=q*.7,te.add(k);let W=It(q*.28,g,12,8);W.scale.z=.4,W.position.z=q*.94,te.add(W);let Y=new ie(new Bt(q*1.12,18,10,0,Math.PI*2,0,Math.PI/2),o);te.add(Y);let K=new ie(new Bt(q*1.1,18,8,0,Math.PI*2,Math.PI/2,Math.PI/2),o);return K.rotation.x=-.35,te.add(K),{g:te,lid:Y,r:q}}let re=new Be,J=C.mouthZ||um(C,0,C.mouthY);re.position.set(0,C.mouthY,J-.02),M.add(re),p.parts.mouth=re,p.mouth={kind:i.mouth,g:re};{let q=C.mouthW,te=It(1,h,20,12);te.scale.set(q/2,.03,.06),re.add(te),p.mouth.cav=te,p.mouth.w=q;let B=new Be,k=new Be;if(re.add(B,k),p.mouth.top=B,p.mouth.bot=k,i.mouth==="grin")for(let W=0;W<7;W++){let Y=(W/6-.5)*q*.82,K=In(.022,.05,d,6);K.rotation.x=Math.PI,K.position.set(Y,.012,.035-Math.abs(Y)*.25),B.add(K);let me=In(.02,.045,d,6);me.position.set(Y,-.012,.03-Math.abs(Y)*.25),k.add(me)}else if(i.mouth==="fangs"){for(let W of[-q*.28,q*.28]){let Y=In(.03,.13,d,8);Y.rotation.x=Math.PI,Y.position.set(W,.02,.04),B.add(Y)}for(let W=0;W<4;W++){let Y=In(.016,.03,d,5);Y.position.set((W/3-.5)*q*.4,-.01,.04),k.add(Y)}}else if(i.mouth==="tusks")for(let W of[-1,1]){let Y=ur([Zt(W*q*.38,-.02,.03),Zt(W*q*.46,.06,.09),Zt(W*q*.5,.16,.1)],.045,d,12);k.add(Y)}else if(i.mouth==="stitched"){for(let Y=0;Y<6;Y++){let K=new ie(new xt(.012,.08,.012),h);K.position.set((Y/5-.5)*q*.85,0,.055),B.add(K)}let W=new ie(new xt(q*.95,.012,.012),h);W.position.z=.05,B.add(W)}else if(i.mouth==="beak"){te.visible=!1;let W=new et({color:"#e8b13a",roughness:.4}),Y=In(.11,.26,W,14);Y.rotation.x=Math.PI/2,Y.scale.set(1.2,1,.6),Y.position.set(0,.03,0),B.add(Y);let K=In(.09,.2,W,12);K.rotation.x=Math.PI/2,K.scale.set(1.1,1,.45),K.position.set(0,-.02,-.01),k.add(K)}else if(i.mouth==="jaw"){let W=new ie(new qi(q*1.1,.09,.16,3,.035),a);W.position.set(0,-.04,.04),k.add(W);for(let Y of[-q*.38,q*.38]){let K=In(.03,.1,d,7);K.position.set(Y,-.01,.1),k.add(K)}for(let Y=0;Y<5;Y++){let K=In(.018,.04,d,5);K.rotation.x=Math.PI,K.position.set((Y/4-.5)*q*.7,.02,.05),B.add(K)}}}let se=new Be;M.add(se),p.parts.horns=se;let ae=C.top-.04,ye=C.hornX,_e=C.hornZ;if(i.horns==="devil")for(let q of[-1,1])se.add(ur([Zt(q*ye,ae-.05,_e),Zt(q*(ye+.07),ae+.12,_e+.02),Zt(q*(ye+.04),ae+.28,_e-.02)],.07,c,16));else if(i.horns==="ram")for(let q of[-1,1]){let te=[];for(let B=0;B<=12;B++){let k=B/12*Math.PI*1.6,W=.16*(1-B/22);te.push(Zt(q*(ye+.06+Math.sin(k)*.02+B*.004),ae-.1+Math.cos(k)*W*.2+Math.sin(k)*W*.9,_e-.05-(1-Math.cos(k))*W*.8+.1))}se.add(ur(te,.075,c,30))}else if(i.horns==="antennae")for(let q of[-1,1]){let te=new Be;te.position.set(q*ye*.7,ae-.02,_e),se.add(te);let B=Zi(.34,.015,.012,u);B.rotation.z=Math.PI-q*.3,te.add(B);let k=It(.05,new et({color:f,emissive:f,emissiveIntensity:0,roughness:.3}),14,10);k.position.set(q*.1,.33,0),te.add(k),p.ants.push({g:te,s:q,ball:k})}else if(i.horns==="unicorn"){let q=new Rn(.06,.4,16,8),te=q.attributes.position;for(let k=0;k<te.count;k++){let W=te.getY(k)+.2,Y=W*40,K=1+.12*Math.sin(Math.atan2(te.getZ(k),te.getX(k))*2+Y);te.setX(k,te.getX(k)*K),te.setZ(k,te.getZ(k)*K)}q.computeVertexNormals(),q.translate(0,.2,0);let B=new ie(q,c);B.position.set(0,ae-.06,_e+(C.boxZ?.14:.12)),B.rotation.x=.45,B.castShadow=!0,se.add(B)}else if(i.horns==="antlers")for(let q of[-1,1])se.add(ur([Zt(q*ye,ae-.04,_e),Zt(q*(ye+.1),ae+.14,_e),Zt(q*(ye+.26),ae+.3,_e-.04)],.04,c,14)),se.add(ur([Zt(q*(ye+.1),ae+.13,_e),Zt(q*(ye+.08),ae+.3,_e+.06)],.026,c,8)),se.add(ur([Zt(q*(ye+.19),ae+.23,_e-.02),Zt(q*(ye+.2),ae+.38,_e+.02)],.022,c,8));let rt=new Be;w.add(rt),p.parts.arms=rt;let tt=i.arms;for(let q of[-1,1]){let te=new Be;te.position.set(q*R.sh[0],R.sh[1],R.sh[2]),rt.add(te);let B={s:q,sh:te,kind:tt,chain:[]};if(tt==="tentacles"){let k=te;for(let W=0;W<8;W++){let Y=new Be;W&&(Y.position.y=-.11),k.add(Y);let K=Zi(.13,.085-W*.008,.08-W*.008,o);if(Y.add(K),W%2===0&&W<7){let me=It(.018,a,6,4);me.position.set(0,-.06,.06-W*.004),Y.add(me)}B.chain.push(Y),k=Y}}else{let k=tt==="muscle"?[.36,.36,.14,.12]:tt==="stubby"?[.15,.13,.1,.09]:tt==="pincers"?[.34,.32,.06,.05]:[.36,.35,.075,.065];te.add(Zi(k[0],k[2],k[2]*.9,o));let W=new Be;W.position.y=-k[0]+k[2]*.4,te.add(W),W.add(Zi(k[1],k[3],k[3]*.85,o));let Y=new Be;if(Y.position.y=-k[1]+k[3]*.3,W.add(Y),B.el=W,B.hand=Y,tt==="muscle"){let K=It(.15,o,18,14);K.position.y=-.08,Y.add(K);for(let me=0;me<3;me++){let Me=It(.045,a,8,6);Me.position.set((me-1)*.07,-.14,.1),Y.add(Me)}}else if(tt==="stubby"){let K=It(.1,o,16,12);K.scale.set(1,.85,1),K.position.y=-.05,Y.add(K)}else if(tt==="claws"){let K=It(.07,o,12,10);K.position.y=-.03,Y.add(K);for(let me=0;me<3;me++){let Me=In(.022,.15,l,6);Me.position.set((me-1)*.045,-.06,.03),Me.rotation.x=Math.PI+.5,Me.rotation.z=(me-1)*.2,Y.add(Me)}}else{let K=a,me=new ie(new Bt(.12,16,10,0,Math.PI*2,0,Math.PI/2),K);me.scale.set(.6,1.6,1),me.rotation.z=Math.PI/2*q*0,me.position.y=-.1,Y.add(me);let Me=new Be;Me.position.y=-.06,Y.add(Me);let ke=new ie(new Bt(.1,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2),K);ke.scale.set(.55,1.5,.9),ke.position.y=-.05,Me.add(ke),B.pin=Me;let Qe=It(.1,K,14,10);Qe.scale.set(.9,1.15,.8),Y.add(Qe)}}p.arms.push(B)}let it=new Be;A.add(it),p.parts.legs=it;let oe=i.legs;if(oe==="spider")for(let q of[-1,1])for(let te=0;te<3;te++){let B=new Be;B.position.set(q*.26,.14,(te-1)*.3-.05);let k=(te-1)*.6;B.rotation.y=q>0?-k:Math.PI+k,it.add(B);let W=new Be;B.add(W);let Y=new Be;W.add(Y),Y.add(fm(.48,.06,.05,a));let K=new Be;K.position.x=.46,Y.add(K),K.add(fm(.7,.05,.025,a));let me=In(.026,.08,l,6);me.position.x=.7,me.rotation.z=-Math.PI/2,K.add(me),p.legs.push({kind:"spider",s:q,k:te,root:B,a:Y,b:K,ph:(te+(q>0?1:0))%2*.5})}else if(oe==="tentacle"){let q=It(.42,o,24,12);q.scale.set(1,.55,1),q.position.y=.02,it.add(q);for(let te=0;te<8;te++){let B=te/8*Math.PI*2+.2,k=new Be;k.position.set(Math.sin(B)*.3,-.05,Math.cos(B)*.3),k.rotation.y=B,it.add(k);let W=[],Y=k;for(let K=0;K<6;K++){let me=new Be;K&&(me.position.z=.12),Y.add(me);let Me=po(.14,.085-K*.011,.075-K*.011,o);me.add(Me),W.push(me),Y=me}p.legs.push({kind:"tentacle",a:B,root:k,ch:W,k:te})}}else{let q=dm[oe];for(let te of[-1,1]){let B=new Be;B.position.set(te*R.legX,.06,0),it.add(B),B.add(Zi(q.a+q.r*.4,q.r,q.r*.85,o));let k=new Be;k.position.y=-q.a,B.add(k),k.add(Zi(q.b+q.r*.3,q.r*.85,q.r*.7,oe==="chicken"?new et({color:"#d9a43a",roughness:.5}):o));let W=new Be;if(W.position.y=-q.b,k.add(W),oe==="stompers"){let Y=new ie(new qi(.28,.13,.38,3,.05),o);Y.position.set(0,-.02,.07),Y.castShadow=!0,W.add(Y);for(let K=0;K<3;K++){let me=In(.03,.08,l,6);me.rotation.x=Math.PI/2,me.position.set((K-1)*.08,-.04,.25),W.add(me)}}else if(oe==="chicken"){let Y=new et({color:"#d9a43a",roughness:.5});for(let me=0;me<3;me++){let Me=po(.2,.025,.015,Y);Me.position.y=-.02,Me.rotation.y=(me-1)*.5,W.add(Me);let ke=In(.016,.05,l,5);ke.rotation.x=Math.PI/2,ke.position.set(Math.sin((me-1)*.5)*.2,-.02,Math.cos((me-1)*.5)*.2),W.add(ke)}let K=po(.1,.02,.012,Y);K.rotation.y=Math.PI,K.position.y=-.02,W.add(K)}else{let Y=It(.12,o,16,12);Y.scale.set(1,.6,1.25),Y.position.set(0,-.03,.04),W.add(Y)}p.legs.push({kind:"biped",s:te,hip:B,knee:k,foot:W,D:q})}}let z=new Be;z.position.set(...R.tail),w.add(z),p.parts.tail=z;let fe=i.tail;if(fe!=="none"){let q=z,te=fe==="fluffy"?4:fe==="scorpion"?9:fe==="devil"?10:8;for(let B=0;B<te;B++){let k=new Be;B&&(k.position.z=fe==="fluffy"?-.15:fe==="devil"?-.09:-.11),q.add(k);let W;fe==="fluffy"?(W=It(.13+B*.02,o,14,10),W.position.z=-.08):fe==="devil"?W=po(.1,.035,.03,o,-1):fe==="scorpion"?W=po(.12,.085-B*.005,.075-B*.005,a,-1):W=po(.12,.12-B*.013,.105-B*.013,o,-1),k.add(W),p.tail.push(k),q=k}if(fe==="devil"){let B=new ie(new Rn(.08,.16,4),a);B.rotation.x=-Math.PI/2,B.scale.set(1.3,1,.35),B.position.z=-.16,q.add(B)}if(fe==="scorpion"){let B=In(.05,.16,l,8);B.rotation.x=-Math.PI/2-.6,B.position.z=-.12,q.add(B)}}let Ne=new Be;w.add(Ne),p.parts.wings=Ne;let ve=i.wings;if(ve!=="none")for(let q of[-1,1]){let te=new Be;te.position.set(q*R.wing[0],R.wing[1],R.wing[2]),Ne.add(te);let B=new Be;te.add(B);let k=new Be;if(k.scale.x=q,B.add(k),ve==="bug"){let W=new nr({color:"#bfe8ff",transparent:!0,opacity:.42,roughness:.15,iridescence:1,iridescenceIOR:1.6,side:zt,depthWrite:!1});for(let[Y,K,me]of[[.08,1,.25],[-.08,.75,-.25]]){let Me=new ie(new _i(.3,24),W);Me.scale.set(1.25*K,.42*K,1),Me.position.set(.36*K,Y,0),Me.rotation.z=me,k.add(Me)}}else{let W=RM(ve),Y=new ie(new ii(W,16),ve==="tiny"?new et({color:"#f4f0ff",roughness:.7,side:zt}):a);if(Y.castShadow=!0,k.add(Y),ve!=="tiny"){let K=ve==="dragon"?1.45:1;for(let[ke,Qe]of[[.9,.42],[.82,-.22],[.5,-.28],[.2,-.3]]){let H=Math.hypot(ke*K-.35*K*(ke>.6?1:0),Qe*K),gt=new ie(new pt(.014,.02,1,6),l),at=new P(.35*K,.32*K,0),I=new P(ke*K,Qe*K,0);ke<.6&&at.set(0,0,0),gt.position.copy(at).lerp(I,.5),gt.scale.y=at.distanceTo(I),gt.lookAt(k.localToWorld(I.clone())),gt.quaternion.setFromUnitVectors(Zt(0,1,0),I.clone().sub(at).normalize()),k.add(gt)}let me=new ie(new pt(.025,.03,1,6),l),Me=Zt(.35*K,.32*K,0);me.position.copy(Me).multiplyScalar(.5),me.scale.y=Me.length(),me.quaternion.setFromUnitVectors(Zt(0,1,0),Me.clone().normalize()),k.add(me)}}p.wings.push({s:q,root:te,flap:B,kind:ve})}return p.root.traverse(q=>{q.isMesh&&(q.castShadow=!0)}),p.headTop=v.hipY+R.neck[1]+C.top+(i.horns!=="none"?.25:0),p.headY=v.hipY+R.neck[1]+.35,p.chestY=v.hipY+R.sh[1],p.size=Math.max(1.6,p.headTop),p}function fm(i,e,t,n){let s=Zi(i,e,t,n);s.rotation.z=Math.PI/2,s.position.x=0;let r=new Be;return s.position.set(i/2,0,0),s.geometry.translate(0,i/2,0),s.rotation.z=-Math.PI/2,r.add(s),r}function po(i,e,t,n,s=1){let r=Zi(i,e,t,n);r.geometry.translate(0,i/2,0),r.rotation.x=s*Math.PI/2,r.position.z=s*i/2;let o=new Be;return o.add(r),o}function xm(i){i.root.traverse(e=>{e.geometry&&e.geometry.dispose()});for(let e in i.mats)i.mats[e].dispose();i.root.parent&&i.root.parent.remove(i.root)}var vn=(i,e,t)=>Math.max(e,Math.min(t,i)),Yi=(i,e,t)=>i+(e-i)*t,ls=i=>i<=0?0:i>=1?1:i*i*(3-2*i),Na=i=>Math.sin(Math.PI*vn(i,0,1)),dr=new P,pm=new At;function IM(i,e,t,n,s){let r=vn(Math.hypot(t,n),.05,i+e-.002),o=Math.atan2(t,n),a=Math.acos(vn((i*i+r*r-e*e)/(2*i*r),-1,1)),l=Math.PI-Math.acos(vn((i*i+e*e-r*r)/(2*i*e),-1,1));return s?[-o+a,-l]:[-o-a,l]}function fd(i,e,t,n){let s=i.anim,r=vn(Number.isFinite(n.life)?n.life:1,0,1),o=1-r;s.t=e;let a=i.spec,l=n.act,c=vn(n.actP||0,0,1),h=Na(c),d=vn(n.inhale||0,0,1),u=Number.isFinite(n.twitch)?n.twitch:0,f=z=>u*(Math.sin(e*37+z*9.1)*.6+Math.sin(e*23+z*4.7)*.4),m=Math.sin(e*2.2)*.5+.5,_=r*(m*.012),g=0,p=o*.2-r*.02-d*.16,E=o*.06,R=s.yaw||0,v=0,A=0,w=Yi(.1,.32+Math.sin(e*1.3)*.05,r)+d*.45,N=Yi(.06,-.18,r),y=Yi(.12,.55,r),M=0,S=0,C=0,U=r*(.15+.1*Math.sin(e*2.4)),F=o*.32-d*.32,D=o*.12,O=o*.22,G=(n.open||0)*1,Z=1+d*.07+r*m*.012,re=r*.45+d*.4,J=r*Math.sin(e*2.6)*.14,se=Yi(-.35,.12,r),ae=r*Math.sin(e*2.3)*.35,ye=0,_e=0;if(l==="roar"){let z=ls(c/.25);p+=-.18*(1-z)*(c<.25?1:0)+.16*h*(c>.2?1:0),F+=-.35*Na(c/.35)*(c<.35?1:0)+.22*h*(c>.3?1:0),w+=1.05*h,N+=-.55*h,y-=.25*h,G=Math.max(G,ls(c/.15)*(1-ls((c-.8)/.2))),re+=.7*h,J+=Math.sin(e*18)*.25*h,se+=.5*h,Z+=.06*h}else if(l==="lunge"){let z=ls(c/.3)*(1-ls((c-.65)/.35));R=(n.dir||0)*z,p+=.38*z,N+=-1.25*z,w-=.1*z,y-=.3*z,G=Math.max(G,z),F-=.15*z,ye=_e=.18*z,re+=.6*z,se+=.4*z}else if(l==="left"||l==="right"){let z=l==="left"?-1:1;g=z*.22*h,E+=-z*.22*h,O+=z*.25*h,z<0?(w+=.9*h,M+=-.1*h,S+=-.5*h):(M+=.9*h,w+=-.1*h,N+=-.5*h),z<0?ye=0:_e=0,ae+=-z*.6*h}else if(l==="up")v=.34*Na(vn((c-.15)/.7,0,1)),A=.12*Na(c/.2)*(c<.2?1:0),w+=2.3*h,y-=.4*h,F-=.25*h,G=Math.max(G,.6*h),re+=.9*h,J+=Math.sin(e*20)*.35*h;else if(l==="down")A=.2*h,p+=.22*h,w+=.8*h,N+=-.3*h,F+=.35*h,se-=.3*h;else if(l==="spin")R=Math.PI*2*ls(c),w+=1.1*h,v=.1*h,se+=.4*h;else if(l==="cheer")v=.15*Math.abs(Math.sin(c*Math.PI*3)),w+=2.2*ls(c/.2),y-=.2,G=Math.max(G,.5*h),F-=.2*h,re+=.6*h,J+=Math.sin(e*16)*.2*h;else if(l==="sad")p+=.25*h,F+=.45*h,w-=.15*h,N+=.1*h,se-=.3*h,re-=.3*h;else if(l==="flinch")p+=-.25*h,F+=-.2*h,D+=Math.sin(c*30)*.2*h,N+=-.8*h,w+=.3*h;else if(l==="walk"){let z=e*6.5;ye=Math.sin(z)*.22,_e=-ye,_+=Math.abs(Math.cos(z))*.04,N+=Math.sin(z)*.3,S=-Math.sin(z)*.3-N+N,E+=Math.sin(z)*.05}if(n.walk){let z=e*6.5;ye=Math.sin(z)*.22*n.walk,_e=-ye,_+=Math.abs(Math.cos(z))*.04*n.walk}s.yaw=l==="lunge"||l==="spin"?s.yaw:(s.yaw||0)*Math.exp(-t*6),i.rig.rotation.y=l==="lunge"||l==="spin"?R:s.yaw,i.rig.position.set(g*.4,0,l==="lunge"?.25*ls(c/.3)*(1-ls((c-.65)/.35)):0);let rt=i.hipY+_+v-A;if(i.hips.position.set(g,rt,0),i.torso.rotation.set(p+f(1)*.15,f(2)*.1,E+f(3)*.15),i.parts.body.scale.set(Z,Z,Z),n.look){dr.copy(n.look),i.neck.updateWorldMatrix(!0,!1),pm.copy(i.neck.matrixWorld).invert(),dr.applyMatrix4(pm);let z=vn(Math.atan2(dr.x,dr.z),-.8,.8),fe=vn(-Math.atan2(dr.y-.3,Math.hypot(dr.x,dr.z)),-.5,.5);s.ly=Yi(s.ly||0,z,1-Math.exp(-t*4)),s.lp=Yi(s.lp||0,fe,1-Math.exp(-t*4)),D+=s.ly*r*.8,F+=s.lp*r*.6}i.head.rotation.set(F+f(4)*.3,D+f(5)*.3,O+f(6)*.2),s.nextBlink-=t,s.nextBlink<=0&&(s.blink=1,s.nextBlink=2.5+Math.random()*3),s.blink=Math.max(0,s.blink-t*7);let tt=vn(o+(s.blink>0?Na(1-s.blink):0)-d*.2+(l==="roar"?-.3*h:0),0,1);for(let z of i.eyes)z.lid.rotation.x=Yi(-.5,1.35,tt),z.g.rotation.set((s.lp||0)*.4*r,(s.ly||0)*.5*r,0),z.stalk&&(z.stalk.rotation.x=.25+Math.sin(e*2+z.r)*.12*r+o*.9);i.mats.irisM.emissiveIntensity=r*(1.6+(l==="roar"?1.2*h:0))+u*2;for(let z of i.ants)z.g.rotation.z=z.s*(Math.sin(e*3+z.s)*.15*r)+o*z.s*.9,z.g.rotation.x=Math.sin(e*4.1+z.s)*.1*r+o*.3,z.ball.material.emissiveIntensity=r*1.5;i.mats.skin.emissiveMap&&(i.mats.skin.emissiveIntensity=r*(.9+.35*Math.sin(e*3))+u*1.5);let it=vn(G+r*.06*Math.max(0,Math.sin(e*.9)),0,1),oe=i.mouth.kind==="stitched"?.02+it*.08:.025+it*.13;i.mouth.cav.scale.set(i.mouth.w/2*(1+it*.15),oe,.06+it*.04),i.mouth.bot.position.y=-oe*.9,i.mouth.top.position.y=oe*.25,i.mouth.kind==="beak"&&(i.mouth.bot.rotation.x=it*.5,i.mouth.bot.position.y=0),(i.mouth.kind==="jaw"||i.mouth.kind==="tusks")&&(i.mouth.bot.rotation.x=it*.25);for(let z of i.arms){let fe=z.s>0,Ne=w+(fe?M:0)+f(7+z.s)*.4,ve=N+(fe?S:0)+r*Math.sin(e*1.7+z.s)*.05,q=y+(fe?C:0);z.kind==="tentacles"?(z.sh.rotation.set(ve*.8,0,z.s*(Ne*.9+.1)),z.chain.forEach((te,B)=>{B&&(te.rotation.x=-(.08+q*.18)-r*Math.sin(e*3-B*.7+z.s)*.16-o*.02,te.rotation.z=z.s*(r*Math.cos(e*2.4-B*.6)*.12+o*.05))})):(z.sh.rotation.set(ve,0,z.s*Ne),z.el.rotation.set(-q,0,0),z.pin&&(z.pin.rotation.x=U+(l==="lunge"?.5*h:0)),z.hand&&z.hand.rotation.set(-.1*r,0,0))}for(let z of i.legs)if(z.kind==="biped"){let fe=z.D,Ne=z.s<0?ye:_e,ve=a.legs==="stompers"?.09:a.legs==="stubby"?.1:.04,q=Math.max(.05,rt+.06-ve),[te,B]=IM(fe.a,fe.b,Ne,q,fe.dig);z.hip.rotation.set(te,0,z.s*(.03+o*.03)),z.knee.rotation.x=B,z.foot.rotation.x=-(te+B)}else if(z.kind==="spider"){let fe=e*(n.walk||l==="walk"?7:1.4)+z.ph*Math.PI*2,Ne=n.walk||l==="walk"?Math.max(0,Math.sin(fe))*.12:r*Math.max(0,Math.sin(fe))*.015,ve=rt+.14-Ne,q=.78,te=Math.hypot(q,ve),B=.48,k=.7,W=Math.acos(vn((B*B+te*te-k*k)/(2*B*te),-1,1)),Y=Math.acos(vn((B*B+k*k-te*te)/(2*B*k),-1,1)),K=Math.atan2(-ve,q);z.a.rotation.z=K+W,z.b.rotation.z=-(Math.PI-Y)}else z.ch.forEach((fe,Ne)=>{fe.rotation.x=(Ne===0?.9+o*.1:-.12)+r*Math.sin(e*2.4-Ne*.8+z.k)*.12*(Ne/5),fe.rotation.y=r*Math.sin(e*1.7+z.k*2-Ne*.5)*.08});i.tail.forEach((z,fe)=>{let Ne=fe/Math.max(1,i.tail.length-1);a.tail==="scorpion"?(z.rotation.x=-(fe?.32:-.3)*Yi(.2,1,r)-(se-.12)*.1,z.rotation.y=ae*.15*(1-Ne)):a.tail==="fluffy"?(z.rotation.x=-(.3+se*.6)*(fe?.6:1)-(fe?.25:-.6)*r,z.rotation.y=ae*.25):(z.rotation.x=fe===0?.6-se*1.2:-.05-se*.25+o*.04,z.rotation.y=ae*(.25+Ne*.2)*Math.sin(e*2.3-fe*.5+1)+(fe?0:ae*.3))});for(let z of i.wings){let fe=vn(re,0,1.4),Ne=z.kind==="bug"?r*Math.sin(e*40)*.25+J:J;z.root.rotation.set(-.15,z.s*Yi(1.15,.3,vn(fe,0,1)),0),z.flap.rotation.set(0,0,z.s*(Yi(-.5,.3,vn(fe,0,1))+Ne))}}function fr(i,e){let[t,n]=e.split(":");return t==="any"?i[n]!=="none":t==="tentacles"?i.arms==="tentacles"||i.legs==="tentacle":t==="stat"?Vs(i)[+n]>=.6:i[t]===n}var jt=(i,e={})=>new et({color:i,roughness:.75,...e}),pd=[{id:"mayor",e:"\u{1F3A9}",coat:"#2b3a6a",hat:"top",skin:"#e8b896"},{id:"witch",e:"\u{1F9D9}",coat:"#3a2450",hat:"witch",skin:"#9fc28a"},{id:"count",e:"\u{1F9DB}",coat:"#151018",hat:"none",cape:!0,skin:"#e6e0ea"},{id:"ghost",e:"\u{1F47B}",ghost:!0},{id:"baker",e:"\u{1F950}",coat:"#efe8da",hat:"chef",skin:"#d9a07a"},{id:"pirate",e:"\u{1F3F4}\u200D\u2620\uFE0F",coat:"#8a1f22",hat:"tricorn",patch:!0,skin:"#c98f6a"},{id:"gardener",e:"\u{1F33B}",coat:"#3f6a34",hat:"straw",skin:"#f0c8a0"}];function md(i={},e){let t=new Be,n=new Be;t.add(n);let s={g:t,body:n,t:Math.random()*10,arms:[],legs:[],o:i},r=jt(i.skin||"#e0b090"),o=jt(i.coat||"#5a4632"),a=jt("#141010");if(i.ghost){let l=new ie(new xi([[0,0],[.42,.02],[.36,.3],[.32,.8],[.3,1.15],[.22,1.4],[0,1.5]].map(h=>new he(h[0],h[1])),24),jt("#f2f2fa",{roughness:.6,emissive:"#8890b0",emissiveIntensity:.25}));n.add(l);for(let h of[-.1,.1]){let d=new ie(new Bt(.05,10,8),a);d.scale.set(.8,1.3,.5),d.position.set(h,1.25,.26),n.add(d)}let c=new ie(new Bt(.05,10,8),a);c.scale.set(1,1.3,.5),c.position.set(0,1.08,.29),n.add(c),s.mouth=c,s.ghost=!0,s.height=1.5}else{for(let m of[-1,1]){let _=new Be;_.position.set(m*.1,.62,0),n.add(_);let g=new ie(new pt(.06,.05,.6,8),jt("#2a2420"));g.position.y=-.3,_.add(g);let p=new ie(new xt(.12,.07,.2),a);p.position.set(0,-.6,.04),_.add(p),s.legs.push(_)}let l=new ie(new pt(.2,.32,.72,12),o);if(l.position.y=.95,l.castShadow=!0,n.add(l),i.cape){let m=new ie(new Rn(.48,1.15,14,1,!0,Math.PI*.15,Math.PI*1.7),jt("#6a0a14",{side:zt}));m.position.set(0,.82,-.04),m.rotation.y=Math.PI,n.add(m);let _=new ie(new Rn(.3,.3,12,1,!0,Math.PI*.1,Math.PI*1.8),jt("#151018",{side:zt}));_.position.set(0,1.36,-.05),_.rotation.set(Math.PI,Math.PI,0),n.add(_)}if(i.id==="mayor"){let m=new ie(new Cn(.25,.025,6,20),jt("#c0262a"));m.position.set(0,1,.02),m.rotation.set(.1,0,.7),m.scale.set(1,1.25,.8),n.add(m)}if(i.id==="baker"){let m=new ie(new ki(.34,.5),jt("#ffffff",{side:zt}));m.position.set(0,.86,.27),m.rotation.x=-.15,n.add(m)}let c=new Be;c.position.y=1.46,n.add(c),s.head=c;let h=new ie(new Bt(.17,16,12),r);h.castShadow=!0,c.add(h);let d=new ie(new Bt(.035,8,6),r);d.position.set(0,-.01,.17),c.add(d);for(let m of[-.06,.06]){let _=new ie(new Bt(.022,8,6),a);_.position.set(m,.04,.15),c.add(_)}if(i.patch){let m=new ie(new _i(.04,10),a);m.position.set(.06,.04,.168),c.add(m);let _=new ie(new Cn(.172,.006,4,24),a);_.rotation.set(0,0,.45),c.add(_)}let u=new ie(new Cn(.04,.01,4,10,Math.PI),a);u.position.set(0,-.07,.155),u.rotation.z=Math.PI,c.add(u),s.mouth=u;let f=i.hat||(Math.random()<.5?"cap":"hood");if(f==="top"){let m=new ie(new pt(.13,.14,.3,14),a);m.position.y=.27,c.add(m);let _=new ie(new pt(.24,.24,.02,18),a);_.position.y=.12,c.add(_)}else if(f==="witch"){let m=new ie(new Rn(.17,.5,14),jt("#2a1838"));m.position.y=.36,m.rotation.z=.15,c.add(m);let _=new ie(new pt(.32,.32,.02,18),jt("#2a1838"));_.position.y=.12,c.add(_)}else if(f==="chef"){let m=new ie(new pt(.16,.13,.22,14),jt("#ffffff"));m.position.y=.22,c.add(m);let _=new ie(new Bt(.2,14,10),jt("#ffffff"));_.scale.y=.6,_.position.y=.36,c.add(_)}else if(f==="tricorn"){let m=new ie(new Rn(.28,.16,3),a);m.position.y=.18,m.rotation.y=Math.PI,c.add(m)}else if(f==="straw"){let m=new ie(new pt(.3,.3,.025,20),jt("#d8b860"));m.position.y=.13,c.add(m);let _=new ie(new pt(.13,.15,.14,14),jt("#d8b860"));_.position.y=.2,c.add(_)}else if(f==="cap"){let m=new ie(new Bt(.18,14,8,0,Math.PI*2,0,Math.PI/2),jt(["#4a3a2a","#3a4a3a","#5a2a2a"][Math.floor(Math.random()*3)]));m.position.y=.03,c.add(m)}else if(f==="hood"){let m=new ie(new Bt(.21,14,10,0,Math.PI*2,0,Math.PI*.6),o);m.position.set(0,.01,-.02),c.add(m)}for(let m of[-1,1]){let _=new Be;_.position.set(m*.25,1.24,0),n.add(_);let g=new ie(new pt(.05,.045,.5,8),o);g.position.y=-.25,_.add(g);let p=new ie(new Bt(.05,8,6),r);p.position.y=-.52,_.add(p),s.arms.push(_)}if(s.height=1.7,i.torch||i.fork){let m=s.arms[1],_=new ie(new pt(.022,.022,i.fork?1.5:.6,6),jt("#4a3020"));if(_.position.set(0,-.52,.12),_.rotation.x=Math.PI/2-.25,m.add(_),s.tool=_,i.torch){let g=new ie(new pt(.05,.035,.12,8),jt("#2a1a10"));g.position.y=.32,_.add(g);let p=new rs(new Oi({map:e,color:"#ffffff",transparent:!0,depthWrite:!1,blending:hn}));p.scale.set(.26,.5,1),p.position.y=.55,_.add(p),s.flame=p}else{let g=new ie(new xt(.28,.02,.02),jt("#555",{metalness:.8}));g.position.y=.75,_.add(g);for(let p of[-.13,0,.13]){let E=new ie(new Rn(.012,.2,5),jt("#777",{metalness:.8}));E.position.set(p,.85,0),_.add(E)}}}}return t.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),s}function hs(i,e,t="idle",n=1){i.t+=e;let s=i.t;if(i.ghost){i.body.position.y=.25+Math.sin(s*2)*.08+(t==="happy"?Math.abs(Math.sin(s*8))*.25:0),i.body.rotation.z=Math.sin(s*1.3)*.06+(t==="grumpy"?Math.sin(s*14)*.12:0),i.mouth.scale.y=t==="flee"||t==="scared"?2.4:t==="happy"?.6:1.3;return}let r=t==="walk"||t==="flee"?1:0,o=t==="flee"?14:7.5;i.legs.forEach((l,c)=>l.rotation.x=r*Math.sin(s*o+c*Math.PI)*.6),i.body.position.y=r*Math.abs(Math.sin(s*o))*.05+(t==="happy"?Math.abs(Math.sin(s*9))*.22:0)+(t==="scared"?.12*Math.abs(Math.sin(s*20)):0),i.body.rotation.x=t==="poke"?.25*Math.max(0,Math.sin(s*9)):t==="flee"?.18:0;let a=t==="flee"||t==="scared"||t==="happy";if(i.arms.forEach((l,c)=>{let h=c?1:-1;l.rotation.z=h*(a?2.6+Math.sin(s*18+c)*.2:.15),l.rotation.x=a?0:r*Math.sin(s*o+c*Math.PI+Math.PI)*.5-(i.tool&&c?.5+(t==="poke"?Math.max(0,Math.sin(s*9))*.9:0):0)}),t==="grumpy"?(i.head.rotation.y=Math.sin(s*9)*.35,i.arms.forEach((l,c)=>{l.rotation.x=-1.2,l.rotation.z=(c?-1:1)*.9})):i.head.rotation.y*=.9,i.mouth&&i.mouth.scale.set(1,t==="flee"||t==="scared"?-2.2:t==="grumpy"?-1:1,1),i.flame){let l=.85+Math.sin(s*13)*.1;i.flame.scale.set(.26*l,.5*(2-l),1)}}var bi=2400;function ym(i,e,t){let n={scene:i},s=new St;n.pos=new Float32Array(bi*3),n.col=new Float32Array(bi*3),n.size=new Float32Array(bi),n.alpha=new Float32Array(bi),n.vel=new Float32Array(bi*3),n.life=new Float32Array(bi),n.max=new Float32Array(bi),n.grav=new Float32Array(bi),n.s0=new Float32Array(bi),n.n=0,n.cursor=0,s.setAttribute("position",new qt(n.pos,3)),s.setAttribute("color",new qt(n.col,3)),s.setAttribute("size",new qt(n.size,1)),s.setAttribute("alpha",new qt(n.alpha,1));let r=new Ot({uniforms:{map:{value:e},scale:{value:800}},transparent:!0,depthWrite:!1,blending:hn,vertexColors:!0,vertexShader:"attribute float size; attribute float alpha; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); }"});n.points=new bs(s,r),n.points.frustumCulled=!1,i.add(n.points),n.geo=s,n.mat=r,n.puffs=[];for(let o=0;o<30;o++){let a=new rs(new Oi({map:t,color:"#8a7a9a",transparent:!0,opacity:0,depthWrite:!1}));a.visible=!1,i.add(a),n.puffs.push({s:a,life:0,max:1,v:new P,g:1})}return n}function us(i,e,t,n={}){let s=new We,r=(n.colors||["#ffffff"]).map(o=>new We(o));for(let o=0;o<t;o++){let a=i.cursor;i.cursor=(i.cursor+1)%bi,i.n=Math.max(i.n,i.cursor===0?bi:i.cursor);let l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),d=(n.speed||3)*(.35+Math.random()*.8);i.pos[a*3]=e.x,i.pos[a*3+1]=e.y,i.pos[a*3+2]=e.z,i.vel[a*3]=Math.cos(c)*h*d+(n.vx||0),i.vel[a*3+1]=l*d+(n.up||0),i.vel[a*3+2]=Math.sin(c)*h*d+(n.vz||0),s.copy(r[o%r.length]),i.col[a*3]=s.r,i.col[a*3+1]=s.g,i.col[a*3+2]=s.b,i.max[a]=i.life[a]=(n.life||1)*(.6+Math.random()*.8),i.grav[a]=n.grav??3,i.s0[a]=(n.size||.12)*(.5+Math.random())}}function go(i,e,t,n,s=1){let r=0;for(let o of i.puffs)if(!(o.life>0)){if(r++>=t)break;o.life=o.max=1+Math.random()*.7,o.s.visible=!0,o.s.material.color.set(n||"#8a7a9a"),o.s.position.copy(e).add(new P((Math.random()-.5)*.8,Math.random()*.4,(Math.random()-.5)*.8)),o.v.set((Math.random()-.5)*1.6,.6+Math.random(),(Math.random()-.5)*1.6),o.g=s*(1+Math.random()),o.s.material.rotation=Math.random()*6}}function vm(i,e,t){i.mat.uniforms.scale.value=t;for(let n=0;n<i.n;n++){if(i.life[n]<=0){i.alpha[n]=0;continue}i.life[n]-=e;let s=Math.max(0,i.life[n]/i.max[n]);i.vel[n*3+1]-=i.grav[n]*e,i.vel[n*3]*=1-e*1.2,i.vel[n*3+2]*=1-e*1.2,i.pos[n*3]+=i.vel[n*3]*e,i.pos[n*3+1]+=i.vel[n*3+1]*e,i.pos[n*3+2]+=i.vel[n*3+2]*e,i.pos[n*3+1]<.12&&(i.pos[n*3+1]=.12,i.vel[n*3+1]*=-.3),i.alpha[n]=Math.min(1,s*2.5),i.size[n]=i.s0[n]*(.4+s*.6)}i.geo.attributes.position.needsUpdate=!0,i.geo.attributes.color.needsUpdate=!0,i.geo.attributes.size.needsUpdate=!0,i.geo.attributes.alpha.needsUpdate=!0;for(let n of i.puffs){if(n.life<=0)continue;n.life-=e;let s=1-n.life/n.max;n.s.position.addScaledVector(n.v,e),n.v.multiplyScalar(1-e*1.2),n.s.scale.setScalar(n.g*(.6+s*2.2)),n.s.material.opacity=Math.sin(Math.PI*Math.min(1,s*1.3))*.5,n.life<=0&&(n.s.visible=!1)}}var Gt=null,pr=null,dh=null,Ua=null,xo={},gd=!1,_d=!1,fh={},_o=[],xd=()=>0;function Sm(i){xd=i}function LM(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}var DM={org:Object.fromEntries([48,51,54,57,60,63,66,69,72,75,78,81].map(i=>[i,i])),ped:Object.fromEntries([24,27,30,33,36,39,42].map(i=>[i,i])),pz:{D3:50,A3:57,C4:60,E4:64,G4:67,D5:74},cb:{E1:28,Fs1:30,A1:33,Cs2:37,E2:40},xy:{C5:72,G5:79,C6:84},hp:{D4:62,A4:69}},NM=Object.fromEntries(Object.entries(DM).map(([i,e])=>[i,Object.entries(e).sort((t,n)=>t[1]-n[1])]));function UM(i,e){let t=NM[i],n=t[0];for(let s of t)Math.abs(s[1]-e)<Math.abs(n[1]-e)&&(n=s);return{n:i+"_"+n[0],r:Math.pow(2,(e-n[1])/12)}}function FM(i=2.8){let e=Gt.sampleRate,t=Math.floor(e*i),n=Gt.createBuffer(2,t,e),s=11,r=()=>(s=s*16807%2147483647,s/2147483647*2-1);for(let o=0;o<2;o++){let a=n.getChannelData(o),l=0;for(let c=0;c<t;c++){let h=c/e;l+=(r()-l)*(.5-.38*h/i),a[c]=l*Math.exp(-h*2.2)*(c<e*.02?c/(e*.02):1)}}return n}async function Mn(){if(Gt){Gt.state==="suspended"&&Gt.resume().catch(()=>{});return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Gt=new i,pr=Gt.createGain(),pr.gain.value=_d?0:.9;let e=Gt.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=3,e.attack.value=.004,e.release.value=.2,pr.connect(e),e.connect(Gt.destination),dh=Gt.createGain(),dh.connect(pr),Ua=Gt.createConvolver(),Ua.buffer=FM();let t=Gt.createGain();t.gain.value=.32,Ua.connect(t),t.connect(pr);let n=window.MM_SOUNDS||{};await Promise.all(Object.keys(n).map(s=>new Promise(r=>{try{Gt.decodeAudioData(LM(n[s]),o=>{xo[s]=o,r()},()=>r())}catch{r()}}))),gd=!0,window.__mmAudioReady=Object.keys(xo).length;for(let s in fh)bm(s)}function Ge(i,e=1,t=1,n=0,s=.4,r=0,o=0){if(Number.isFinite(e)||(e=0),(!Number.isFinite(t)||t<=0)&&(t=1),Number.isFinite(n)||(n=0),Number.isFinite(s)||(s=0),Number.isFinite(r)||(r=0),Number.isFinite(o)||(o=0),n=Math.max(0,n),_o.push({n:i,t:xd()+n,v:e,r:t,rv:s,d:r,p:o}),_o.length>8e3&&_o.splice(0,1500),!gd||!xo[i]||!(e>0))return null;let a=Gt.createBufferSource();a.buffer=xo[i],a.playbackRate.value=t;let l=Gt.createGain();l.gain.value=e,a.connect(l);let c=l;if(o&&Gt.createStereoPanner){let d=Gt.createStereoPanner();d.pan.value=Math.max(-1,Math.min(1,o)),l.connect(d),c=d}if(c.connect(dh),s>0){let d=Gt.createGain();d.gain.value=s,c.connect(d),d.connect(Ua)}let h=Gt.currentTime+n;return a.start(h),r>0&&(l.gain.setValueAtTime(e,h+r),l.gain.exponentialRampToValueAtTime(8e-4,h+r+.4),a.stop(h+r+.45)),a}function Vt(i,e,t=.7,n=0,s=0,r=.4,o=0){let{n:a,r:l}=UM(i,e);return Ge(a,t,l,s,r,n,o)}function bm(i){let e=fh[i];if(!gd||e.src||!xo[i])return;e.g=Gt.createGain(),e.g.gain.value=e.v,e.src=Gt.createBufferSource(),e.src.buffer=xo[i],e.src.loop=!0,e.src.playbackRate.value=e.r,e.src.connect(e.g),e.g.connect(dh);let t=Gt.createGain();t.gain.value=.25,e.g.connect(t),t.connect(Ua),e.src.start()}function yo(i,e,t=1,n=.4){Number.isFinite(e)||(e=0),(!Number.isFinite(t)||t<=0)&&(t=1),Number.isFinite(n)||(n=.4);let s=fh[i]||(fh[i]={v:0,r:1});if(!(Math.abs(s.v-e)<.004&&Math.abs(s.r-t)<.004)&&(s.v=e,s.r=t,_o.push({n:"~"+i,t:xd(),v:e,r:t,f:n}),bm(i),s.g)){let r=Gt.currentTime;s.g.gain.cancelScheduledValues(r),s.g.gain.setValueAtTime(s.g.gain.value,r),s.g.gain.linearRampToValueAtTime(e,r+n),s.src.playbackRate.setTargetAtTime(t,r,.15)}}function Em(i){_d=i,pr&&(pr.gain.value=i?0:.9)}function ph(){return _d}var Mm=i=>i[Math.floor(Math.random()*i.length)],uh={bolt:["roar_big",.92],round:["growl",1.05],pumpkin:["roar_b",1],dragon:["roar_dragon",1],alien:["roar_hiss",1.08],bat:["roar_small",1]},Ke={ui(){Ge("cl_1",.28,1.25,0,.15)},tab(){Ge("cl_2",.22,1.1,0,.15)},part(i){let e={horns:["clank",.18,1.6],wings:["wing",.5,1],eyes:["splat",.3,1.5],color:["bubbles_a",.5,1.1],pattern:["magic",.2,1.2],tail:["splat",.35,.9],legs:["stomp",.25,1.3],head:["splat",.45,.8],mouth:["splat",.35,1.2],arms:["splat",.4,1],body:["splat",.5,.75]}[i]||["splat",.4,1];Ge(e[0],e[1],e[2]*(.95+Math.random()*.1),0,.3),Ge("splat",.18,1.3+Math.random()*.2,.03,.2)},random(){Ge("magic",.3,1,0,.4),Ge("bubbles_b",.4,1.2,0,.3),Ge("splat",.3,.9,.1,.2)},lever(){Ge("lever",.8,1,0,.3),Ge("clank",.4,.9,.25,.4),Ge("chain",.45,1,.05,.3)},charge(){Ge("tproll",.35,1,0,.5),Ge("heart",.55,1,.2,.3),Ge("zap_crackle",.4,1,.1,.4),Ge("cymcresc",.25,1,.4,.5)},arc(i=.3){Ge(Mm(["zap_1","zap_2","zap_3","zap_short","spark"]),i,.9+Math.random()*.25,0,.35,0,(Math.random()-.5)*.8)},strike(){Ge("thunder",.9,1,0,.25),Ge("zap_big",.8,1,0,.3),Ge("crash",.45,.9,0,.5),Ge("sub",.6,1,0,.2),Ge("gong",.3,.8,.05,.5),Ge("glass",.25,1.1,.3,.4,0,-.5)},alive(i){Ge("choir_swell",.5,1,0,.6);let[e,t]=uh[i]||uh.bolt;Ge(e,.85,t,.55,.4),Ge("mad_laugh",.5,1,1.9,.5,0,.5)},roar(i,e=1,t=1){let[n,s]=uh[i]||uh.bolt;Ge(n,.5+.45*t,s*(1.15-.25*Math.min(1,e/2.4))*(.97+Math.random()*.06),0,.45),t>.7&&(Ge("sub",.35*t,1,0,.2),Ge("impact",.3*t,.8,0,.3))},fizzle(){Ge("roar_tiny",.45,.8,0,.3),Ge("zap_short",.2,.7,.1,.3)},inhale(i){Ge("fwoosh",.2+.2*i,.6+i*.3,0,.3)},glass(){Ge("glass",.55,.95+Math.random()*.1,0,.45,0,Math.random()-.5)},cheer(i=.5){Ge("applause",i,1,0,.5),Ge("cheer",i*.6,1,.1,.5)},boo(){Ge("boo",.4,1,0,.5)},door(){Ge("chain",.35,.8,0,.4),Ge("clank",.25,.7,.1,.5)},scream(i=0){Ge("crowd_panic",.55,1+(Math.random()-.5)*.1,0,.4,1.3,i)},poke(){Ge("impact",.55,1.1,0,.3),Ge("growl",.4,1.3,.05,.3)},stomp(i=.4){Ge("stomp",i,.9+Math.random()*.2,0,.3)},whiff(){Ge("fwoosh",.35,1.2,0,.3)},thunder(i=!1){Ge(i?"thunder_soft":"thunder",i?.45:.7,1,0,.25)},judge(i){i&&Ge("xy_C6",.25,1,0,.4)},kids(){Ge("laugh_kids",.45,1,0,.4)},win(){Ge("success",.5,1,0,.4),Ge("sparkle",.35,1,.3,.5)},fail(){Ge("crowd_panic",.3,.8,0,.5),Ge("roar_tiny",.4,.7,.2,.4),Ge("gong",.35,.7,0,.5)},tick(){Ge("cl_2",.18,1.5,0,.1)},bubble(){Ge(Mm(["bubbles_a","bubbles_b"]),.25,.9+Math.random()*.3,0,.3,0,-.4)},torch(){Ge("torch",.3,1,0,.4)}};function yd(i=.6){let e=[],t=(n,s,r,o=i)=>{e.push([n,()=>{Vt("org",s,o,r,0,.6),Vt("org",s-12,o*.8,r,0,.6)}])};return t(0,81,.09),t(.09,79,.09),t(.18,81,1.25),t(1.6,79,.1),t(1.71,77,.1),t(1.82,76,.1),t(1.93,74,.14),t(2.12,73,.5),e.push([2.75,()=>{Vt("org",74,i,1.9,0,.7),Vt("org",62,i*.8,1.9,0,.7),Vt("org",65,i*.7,1.9,0,.7),Vt("org",69,i*.7,1.9,0,.7),Vt("ped",26,i*1.1,2.1,0,.6),Vt("ped",38,i*.8,2.1,0,.6)}]),e.sort((n,s)=>n[0]-s[0])}var OM={Dm:{b:38,p:[62,65,69,74],o:[62,65,69]},Bb:{b:34,p:[58,62,65,70],o:[58,62,65]},Gm:{b:31,p:[55,58,62,67],o:[55,58,62]},A:{b:33,p:[57,61,64,69],o:[57,61,64]},F:{b:29,p:[57,60,65,69],o:[57,60,65]},C:{b:36,p:[60,64,67,72],o:[60,64,67]}},kM={lab:{bpm:84,prog:["Dm","Bb","Gm","A"],bar(i,e,t){let n=[],s=e.p;return[0,1,2,1,3,1,2,1].forEach((o,a)=>n.push([a*.5,()=>Vt("pz",s[o],(a===0?.32:.2)*t,0,0,.45,(o-1.5)*.2)])),n.push([0,()=>Vt("cb",e.b,.42*t,0,0,.35)]),n.push([2,()=>Vt("cb",e.b,.3*t,0,0,.35)]),i%2===0&&n.push([0,()=>e.o.forEach(o=>Vt("org",o,.07*t,3.4,0,.7))]),i%4===3&&n.push([3.5,()=>Vt("xy",84,.14*t,0,0,.5)]),n}},order:{bpm:108,prog:["F","C","Dm","A"],bar(i,e,t){let n=[],s=e.p;[0,2,1,3].forEach((r,o)=>n.push([o,()=>Vt("pz",s[r],.26*t,0,0,.4,(r-1.5)*.2)])),n.push([.5,()=>Vt("pz",s[1]+12,.12*t,0,0,.4)]),n.push([2.5,()=>Vt("pz",s[2]+12,.12*t,0,0,.4)]),n.push([0,()=>Vt("cb",e.b,.4*t,0,0,.3)]),n.push([2,()=>Vt("cb",e.b+7,.3*t,0,0,.3)]);for(let r=0;r<4;r++)n.push([r,()=>Ge(r%2?"cl_2":"cl_1",.1*t,1.4,0,.1)]);return i%4===3&&n.push([3,()=>Vt("xy",79,.16*t,0,0,.5)]),n}},show:{bpm:120,prog:["Dm","Dm","Bb","A"],bar(i,e,t){let n=[];[0,0,3,0,5,3,7,5].forEach((r,o)=>n.push([o*.5,()=>Vt("cb",e.b+r,(o%2?.3:.42)*t,0,0,.3)])),n.push([0,()=>{Ge("bd",.5*t,1,0,.3),zM(e.b,.45*t)}]),n.push([2,()=>Ge("bd",.4*t,1,0,.3)]);for(let r of[1,3])n.push([r,()=>{e.o.forEach(o=>Vt("org",o+12,.11*t,.22,0,.5)),Ge("cl_1",.16*t,1,0,.2)}]);for(let r of[.5,1.5,2.5,3.5])n.push([r,()=>Ge("cl_2",.08*t,1.3,0,.15)]);return i%8===7&&n.push([3,()=>Ge("crash",.18*t,1,0,.4)]),n}}};function zM(i,e){let t=50+((i-38)%12+12)%12*0;Ge("tp_4",e,Math.pow(2,(t-52.5)/12),0,.4)}var mh=class{constructor(){this.g=null,this.on=!1,this.vol=1}start(e,t){this.g=kM[e],this.name=e,this.t0=t,this.spb=60/this.g.bpm,this.bar=-1,this.q=[],this.on=!0}stop(){this.on=!1,this.q=[]}beat(e){return this.on?(e-this.t0)/this.spb:0}step(e){if(!this.on)return;let t=this.beat(e),n=Math.floor(t/4);for(;this.bar<n+1;){if(this.bar++,this.bar<0)continue;let s=OM[this.g.prog[this.bar%this.g.prog.length]];for(let[r,o]of this.g.bar(this.bar,s,this.vol))this.q.push([this.t0+(this.bar*4+r)*this.spb,o]);this.q.sort((r,o)=>r[0]-o[0])}for(;this.q.length&&this.q[0][0]<=e;){let[,s]=this.q.shift();s()}}},gh=class{constructor(){this.q=[]}add(e,t){for(let[n,s]of e)this.q.push([t+n,s]);this.q.sort((n,s)=>n[0]-s[0])}step(e){for(;this.q.length&&this.q[0][0]<=e;)this.q.shift()[1]()}clear(){this.q=[]}};var Tm={head:{bolt:"Bolt-neck",round:"Round",pumpkin:"Pumpkin",dragon:"Dragon",alien:"Alien",bat:"Bat"},horns:{none:"None",devil:"Devil",ram:"Ram",antennae:"Antennae",unicorn:"Unicorn",antlers:"Antlers"},eyes:{two:"Two",cyclops:"Cyclops",three:"Three",many:"Many",stalks:"Stalks"},mouth:{grin:"Grin",fangs:"Fangs",tusks:"Tusks",stitched:"Stitched",beak:"Beak",jaw:"Big jaw"},body:{blob:"Blob",brute:"Brute",slim:"Slim",pear:"Pear",bug:"Bug"},arms:{claws:"Claws",muscle:"Muscle",stubby:"Stubby",tentacles:"Tentacles",pincers:"Pincers"},legs:{stompers:"Stompers",chicken:"Chicken",spider:"Spider",stubby:"Stubby",tentacle:"Tentacle"},tail:{none:"None",lizard:"Lizard",devil:"Devil",fluffy:"Fluffy",scorpion:"Scorpion"},wings:{none:"None",bat:"Bat",dragon:"Dragon",bug:"Bug",tiny:"Tiny"},pattern:{plain:"Plain",spots:"Spots",stripes:"Stripes",scales:"Scales",stitches:"Stitches",glow:"Glow"}},Am={head:{bolt:"Bolzenhals",round:"Rund",pumpkin:"K\xFCrbis",dragon:"Drache",alien:"Alien",bat:"Fledermaus"},horns:{none:"Keine",devil:"Teufel",ram:"Widder",antennae:"F\xFChler",unicorn:"Einhorn",antlers:"Geweih"},eyes:{two:"Zwei",cyclops:"Zyklop",three:"Drei",many:"Viele",stalks:"Stielaugen"},mouth:{grin:"Grinsen",fangs:"Fangz\xE4hne",tusks:"Hauer",stitched:"Gen\xE4ht",beak:"Schnabel",jaw:"Riesenkiefer"},body:{blob:"Klops",brute:"Koloss",slim:"Schlank",pear:"Birne",bug:"K\xE4fer"},arms:{claws:"Klauen",muscle:"Muckis",stubby:"Stummel",tentacles:"Tentakel",pincers:"Scheren"},legs:{stompers:"Stampfer",chicken:"Huhn",spider:"Spinne",stubby:"Stummel",tentacle:"Tentakel"},tail:{none:"Keiner",lizard:"Echse",devil:"Teufel",fluffy:"Flauschig",scorpion:"Skorpion"},wings:{none:"Keine",bat:"Fledermaus",dragon:"Drache",bug:"Insekt",tiny:"Winzig"},pattern:{plain:"Uni",spots:"Punkte",stripes:"Streifen",scales:"Schuppen",stitches:"N\xE4hte",glow:"Leuchten"}},Rm={green:"Green",purple:"Purple",orange:"Orange",blue:"Blue",red:"Red",teal:"Teal",pink:"Pink",bone:"Bone"},Cm={green:"Gr\xFCn",purple:"Lila",orange:"Orange",blue:"Blau",red:"Rot",teal:"T\xFCrkis",pink:"Pink",bone:"Knochen"},Pm={head:"Head",horns:"Horns",eyes:"Eyes",mouth:"Mouth",body:"Body",arms:"Arms",legs:"Legs",tail:"Tail",wings:"Wings",color:"Colour",pattern:"Pattern"},Im={head:"Kopf",horns:"H\xF6rner",eyes:"Augen",mouth:"Mund",body:"K\xF6rper",arms:"Arme",legs:"Beine",tail:"Schwanz",wings:"Fl\xFCgel",color:"Farbe",pattern:"Muster"};function wm(i,e,t){let n={};for(let s in i)for(let r in i[s])n[`p_${s}_${r}`]=i[s][r];for(let s in e)n["col_"+s]=e[s];for(let s in t)n["cat_"+s]=t[s];return n}var vd={en:{...wm(Tm,Rm,Pm),scoreL:"Score",sub:"Build a monster. Pull the lever. Bring it to life!",play:"\u26A1 Monster Showdown",playSub:"Build it, zap it, then roar, scare & dance",order:"Order",orders:"Orders",orderTitle:"Monster Orders",orderBtn:"\u{1F4DC} Monster Orders",orderSub:"Customers want monsters \u2014 build them against the clock",labBtn:"\u{1F9EA} Free Lab",labSub:"No rules, just mad science",easy:"Easy",medium:"Medium",hard:"Hard",kidsMode:"\u{1F9F8} Kids mode",kidsHint:"Kids mode: nobody can lose.",keysHint:"Keys: \u2190\u2192 part \xB7 \u2191\u2193 category \xB7 R random \xB7 Space lever",lab:"Free Lab",showdown:"Monster Showdown",lever:"\u26A1 Pull the lever!",zapAgain:"\u26A1 Zap again",zapOrder:"\u26A1 Zap & deliver!",random:"\u{1F3B2} Random",quit:"\u2715",charging:"Charging the coils\u2026",alive:"IT'S ALIVE!",roar:"Roar",scare:"Scare",groove:"Groove",aRoar:"\u{1F981} Roar",aDance:"\u{1F483} Dance",aDone:"\u2713 Done",ch1:"Challenge 1",ch2:"Challenge 2",ch3:"Challenge 3",c_roar:"Roar Contest",c_scare:"Scare the Villagers",c_dance:"Dance-off",h_roar:"Hold SPACE to fill your lungs \u2014 let go in the gold zone!",h_roarT:"Hold the ROAR button \u2014 let go in the gold zone!",h_scare:"Villagers sneak in! Press \u2190 \u2191 \u2192 for the door when they come close.",h_scareT:"Villagers sneak in! Tap left, middle or right when they come close.",h_dance:"Watch the moves, then copy them on the beat with the arrow keys.",h_danceT:"Watch the moves, then copy them on the beat with the arrow pads.",h_build:"Pick parts in the dock, drag to look around, then pull the lever!",h_buildT:"Tap parts, drag to look around, then pull the lever!",r_hold:"Hold!",r_over:"Fizzle! Too much",r_mon:"MONSTROUS!",r_great:"Great roar!",r_ok:"Not bad",r_weak:"A squeak\u2026",s_boo:"BOO! Perfect",s_great:"Scary!",s_ok:"Boo",s_early:"Too early!",s_none:"Nobody there",s_tickle:"Tickle attack! \u{1F604}",s_ouch:"Ouch! Poked!",mobWins:"The mob chased you off!",d_watch:"Watch\u2026",d_you:"Your turn!",d_round:"Flawless round!",round:"Round",j_perfect:"Perfect!",j_good:"Good",j_miss:"Miss",j_mon:"Monstrous!",j_great:"Great!",j_weak:"Keep practising!",cu_mayor:"The Mayor",cu_witch:"The Swamp Witch",cu_count:"The Count",cu_ghost:"A lonely Ghost",cu_baker:"The Baker",cu_pirate:"The Pirate Captain",cu_gardener:"The Gardener",cs_mayor:'"A fearsome guard for the town hall, please!"',cs_witch:'"I need a pet for my cauldron."',cs_count:'"Something dreadful for my dungeon."',cs_ghost:'"A friend who is not afraid of me\u2026"',cs_baker:'"A helper for my midnight bakery!"',cs_pirate:'"A shipmate to scare the seven seas!"',cs_gardener:'"Something to scare the crows away."',o_new:"New order!",o_time:"Time's up!",o_closed:"The shop is closed!",o_perfect:"Exactly what I wanted!",o_happy:"Lovely!",o_meh:"Hmm\u2026 not quite.",e_lab:"What a creation!",e_s:"Monster legend!",e_a:"Terrific terror!",e_b:"Spooky good!",newBest:"\u{1F3C6} New best!",best:"Best",yourName:"Your name",again:"\u21BB Play again",menu:"\u2630 Menu",card:"\u{1F5BC}\uFE0F Save card",share:"\u{1F4E4} Share",by:"by",cardTag:"Build your own monster!",saved:"Card saved \u2714",autoQ:"Quality lowered to",q_low:"Low",q_mid:"Normal",q_high:"High",q_ultra:"Ultra",credit:"Sounds: CC0 \xB7 Organ: VSCO-2 CE (CC0) \xB7 Music after J. S. Bach (public domain)",loading:"Waking the lab\u2026"},de:{...wm(Am,Cm,Im),scoreL:"Punkte",sub:"Bau ein Monster. Zieh den Hebel. Erweck es zum Leben!",play:"\u26A1 Monster-Showdown",playSub:"Bauen, schocken, dann br\xFCllen, erschrecken & tanzen",order:"Auftrag",orders:"Auftr\xE4ge",orderTitle:"Monster-Auftr\xE4ge",orderBtn:"\u{1F4DC} Monster-Auftr\xE4ge",orderSub:"Kunden wollen Monster \u2013 bau sie gegen die Uhr",labBtn:"\u{1F9EA} Freies Labor",labSub:"Keine Regeln, nur verr\xFCckte Wissenschaft",easy:"Leicht",medium:"Mittel",hard:"Schwer",kidsMode:"\u{1F9F8} Kindermodus",kidsHint:"Kindermodus: Niemand kann verlieren.",keysHint:"Tasten: \u2190\u2192 Teil \xB7 \u2191\u2193 Kategorie \xB7 R Zufall \xB7 Leertaste Hebel",lab:"Freies Labor",showdown:"Monster-Showdown",lever:"\u26A1 Zieh den Hebel!",zapAgain:"\u26A1 Nochmal schocken",zapOrder:"\u26A1 Schocken & liefern!",random:"\u{1F3B2} Zufall",quit:"\u2715",charging:"Die Spulen laden\u2026",alive:"ES LEBT!",roar:"Br\xFCllen",scare:"Schrecken",groove:"Groove",aRoar:"\u{1F981} Br\xFCllen",aDance:"\u{1F483} Tanzen",aDone:"\u2713 Fertig",ch1:"Pr\xFCfung 1",ch2:"Pr\xFCfung 2",ch3:"Pr\xFCfung 3",c_roar:"Br\xFCll-Wettbewerb",c_scare:"Dorfbewohner erschrecken",c_dance:"Tanz-Duell",h_roar:"LEERTASTE halten \u2013 in der goldenen Zone loslassen!",h_roarT:"BR\xDCLL-Taste halten \u2013 in der goldenen Zone loslassen!",h_scare:"Dorfbewohner schleichen herein! Dr\xFCck \u2190 \u2191 \u2192 f\xFCr die T\xFCr, wenn sie nah sind.",h_scareT:"Dorfbewohner schleichen herein! Tippe links, Mitte oder rechts, wenn sie nah sind.",h_dance:"Schau dir die Moves an und tanz sie im Takt mit den Pfeiltasten nach.",h_danceT:"Schau dir die Moves an und tanz sie im Takt mit den Pfeilfeldern nach.",h_build:"W\xE4hle Teile im Dock, zieh zum Umsehen, dann zieh den Hebel!",h_buildT:"Tippe Teile an, wische zum Umsehen, dann zieh den Hebel!",r_hold:"Halten!",r_over:"Verpufft! Zu viel",r_mon:"MONSTR\xD6S!",r_great:"Starkes Br\xFCllen!",r_ok:"Nicht schlecht",r_weak:"Ein Piepsen\u2026",s_boo:"BUH! Perfekt",s_great:"Gruselig!",s_ok:"Buh",s_early:"Zu fr\xFCh!",s_none:"Da ist niemand",s_tickle:"Kitzel-Angriff! \u{1F604}",s_ouch:"Autsch! Gepikst!",mobWins:"Der Mob hat dich verjagt!",d_watch:"Zuschauen\u2026",d_you:"Du bist dran!",d_round:"Fehlerfreie Runde!",round:"Runde",j_perfect:"Perfekt!",j_good:"Gut",j_miss:"Daneben",j_mon:"Monstr\xF6s!",j_great:"Super!",j_weak:"Weiter \xFCben!",cu_mayor:"Der B\xFCrgermeister",cu_witch:"Die Sumpfhexe",cu_count:"Der Graf",cu_ghost:"Ein einsames Gespenst",cu_baker:"Der B\xE4cker",cu_pirate:"Die Piratenkapit\xE4nin",cu_gardener:"Die G\xE4rtnerin",cs_mayor:"\u201EEinen furchterregenden W\xE4chter f\xFCrs Rathaus, bitte!\u201C",cs_witch:"\u201EIch brauche ein Haustier f\xFCr meinen Kessel.\u201C",cs_count:"\u201EEtwas Schreckliches f\xFCr mein Verlies.\u201C",cs_ghost:"\u201EEinen Freund, der keine Angst vor mir hat\u2026\u201C",cs_baker:"\u201EEinen Helfer f\xFCr meine Mitternachtsb\xE4ckerei!\u201C",cs_pirate:"\u201EEinen Maat, der die sieben Meere erschreckt!\u201C",cs_gardener:"\u201EEtwas, das die Kr\xE4hen verscheucht.\u201C",o_new:"Neuer Auftrag!",o_time:"Zeit ist um!",o_closed:"Der Laden ist zu!",o_perfect:"Genau so wollte ich es!",o_happy:"Wunderbar!",o_meh:"Hmm\u2026 nicht ganz.",e_lab:"Was f\xFCr eine Sch\xF6pfung!",e_s:"Monster-Legende!",e_a:"Tolles Grauen!",e_b:"Schaurig gut!",newBest:"\u{1F3C6} Neuer Rekord!",best:"Rekord",yourName:"Dein Name",again:"\u21BB Nochmal",menu:"\u2630 Men\xFC",card:"\u{1F5BC}\uFE0F Karte speichern",share:"\u{1F4E4} Teilen",by:"von",cardTag:"Bau dein eigenes Monster!",saved:"Karte gespeichert \u2714",autoQ:"Qualit\xE4t gesenkt auf",q_low:"Niedrig",q_mid:"Normal",q_high:"Hoch",q_ultra:"Ultra",credit:"Sounds: CC0 \xB7 Orgel: VSCO-2 CE (CC0) \xB7 Musik nach J. S. Bach (gemeinfrei)",loading:"Das Labor erwacht\u2026"}},HM={color:"\u{1F3A8}",any:"",eyes:"\u{1F441}\uFE0F",wings:"\u{1FABD}",legs:"\u{1F9B5}",head:"\u{1F5FF}",pattern:"\u{1F43E}",mouth:"\u{1F444}",tentacles:"\u{1F419}",horns:"\u{1F98C}",arms:"\u{1F4AA}",body:"\u{1FAC3}",tail:"\u{1F98E}",stat:""};function Lm(i,e){let[t,n]=i.split(":"),s=e==="de";if(t==="any")return{wings:s?"\u{1FABD} Mit Fl\xFCgeln":"\u{1FABD} Has wings",horns:s?"\u{1F98C} Mit H\xF6rnern":"\u{1F98C} Has horns",tail:s?"\u{1F98E} Mit Schwanz":"\u{1F98E} Has a tail"}[n];if(t==="tentacles")return s?"\u{1F419} Tentakel":"\u{1F419} Tentacles";if(t==="stat")return[s?"\u{1F981} Lautes Br\xFCllen (60+)":"\u{1F981} Loud roar (60+)",s?"\u{1F47B} Sehr gruselig (60+)":"\u{1F47B} Very scary (60+)",s?"\u{1F483} Guter T\xE4nzer (60+)":"\u{1F483} Good dancer (60+)"][+n];if(t==="color")return`\u{1F3A8} ${(s?Cm:Rm)[n]}`;let r=s?Am:Tm,o=(s?Im:Pm)[t];return`${HM[t]||""} ${o}: ${r[t][n]}`}var Dm="frank-otto.github.io/monster-maker",ge=i=>document.getElementById(i),bn={get(i,e){try{let t=localStorage.getItem(i);return t===null?e:t}catch{return e}},set(i,e){try{localStorage.setItem(i,e)}catch{}}},Md=(window.__mmSeed||Date.now()&16777215)>>>0;function mt(){Md=Md+1831565813>>>0;let i=Md;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}var Gn=(i,e,t)=>i+(e-i)*t,Ti=(i,e,t)=>Math.max(e,Math.min(t,i)),mr=i=>i<=0?0:i>=1?1:i*i*(3-2*i),GM=i=>Number.isFinite(i)?i:0,Bm={easy:{zone:[.66,.95],rs:.78,scareN:9,gap:2.5,spd:.72,hearts:4,dance:[3,4,4],win:[.11,.2],orderN:4,orderT:60,reqN:2,failO:3},medium:{zone:[.75,.93],rs:1,scareN:12,gap:1.95,spd:.92,hearts:3,dance:[4,5,6],win:[.085,.16],orderN:5,orderT:45,reqN:3,failO:3},hard:{zone:[.82,.93],rs:1.25,scareN:15,gap:1.5,spd:1.15,hearts:2,dance:[5,6,8],win:[.065,.125],orderN:6,orderT:34,reqN:4,failO:2},kids:{zone:[.5,1.01],rs:.72,cap:.97,scareN:8,gap:2.9,spd:.6,hearts:0,dance:[2,3,3],win:[.22,.38],orderN:4,orderT:0,reqN:2,failO:99}},VM=["left","down","up","right"],WM={left:"\u2B05\uFE0F",down:"\u2B07\uFE0F",up:"\u2B06\uFE0F",right:"\u27A1\uFE0F"},XM={left:"#c79bff",down:"#5fd3ff",up:"#7dffb4",right:"#ffb65e"},T={state:"menu",mode:"show",lang:bn.get("mm-lang","en"),diff:bn.get("mm-diff","medium"),kids:bn.get("mm-kids","0")==="1",q:bn.get("mm-q",""),qUser:!!bn.get("mm-q",""),name:bn.get("mm-name","Player")||"Player",cat:"head",az:.25,gt:0,pel:0,score:0,shake:0,newBest:!1,failed:!1,grade:"",alive:!1,results:[],vx:0,vy:0};(!Bm[T.diff]||T.diff==="kids")&&(T.diff="medium");Gs[T.q]||(T.q="mid",T.qUser=!1);var yh=()=>T.kids?"kids":T.diff,Xn=()=>Bm[yh()],Nm=()=>`mm-best-${T.mode}-${yh()}`;Sm(()=>T.gt);var De=i=>vd[T.lang][i]??vd.en[i]??i,Et=(()=>{try{let i=JSON.parse(bn.get("mm-spec",""));if(i&&li.every(e=>cs[e].some(t=>t.id===i[e])))return i}catch{}return{...gm}})(),Fa=ge("game"),kn=new Wc({canvas:Fa,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__mmPDB});kn.outputColorSpace=dn;kn.toneMapping=or;kn.toneMappingExposure=1.05;kn.shadowMap.type=sr;var Ue=am(kn,Gs[T.q],7),qn=Ue.scene,_t=new an(45,1,.1,60),En=ym(qn,Ue.soft,Ue.smokeTex),Vn,Oa;function qM(){Vn&&Vn.dispose(),Vn=new $c(kn),Vn.addPass(new Jc(qn,_t)),Oa=new co(new he(256,256),.3,.45,.86),Vn.addPass(Oa),Vn.addPass(new Kc)}function bh(i,e){T.q=i,e&&(T.qUser=!0,bn.set("mm-q",i));let t=Gs[i];kn.shadowMap.enabled=t.shadows,Ue.key.castShadow=t.shadows,t.shadows&&(Ue.key.shadow.mapSize.set(t.shadowSize,t.shadowSize),Ue.key.shadow.map&&(Ue.key.shadow.map.dispose(),Ue.key.shadow.map=null)),Ue.dust.geometry.setDrawRange(0,t.dust),Ue.shafts.forEach(n=>n.visible=i!=="low"),qn.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>s.needsUpdate=!0)}),qM(),Rd(),ge("btnQ").textContent="\u2699 "+De("q_"+i)}var Nn=1,Wn=1,Om=()=>Nn/Wn<.85,YM=()=>Nn>=820&&Nn>=Wn;function Rd(){Nn=window.innerWidth,Wn=window.innerHeight;let i=Math.min(window.devicePixelRatio||1,Gs[T.q].dpr);kn.setPixelRatio(i),kn.setSize(Nn,Wn,!1),Vn&&(Vn.setPixelRatio(i),Vn.setSize(Nn,Wn)),_t.aspect=Nn/Wn,_t.fov=Om()?60:45,_t.updateProjectionMatrix(),Ue.setRes(Nn*i,Wn*i)}var bt=null,ut={life:0,act:null,actT:0,actD:1,dir:0,inhale:0,open:0,twitch:0,look:new P(0,1.6,5),walk:0},Ei={};function ka(i,e){Et={...i},bt&&xm(bt),bt=_m(Et),bt.root.position.set(0,kt,0),qn.add(bt.root),bt.root.traverse(t=>{t.isMesh&&(t.castShadow=Gs[T.q].shadows,t.receiveShadow=!1)}),e&&(Ei[e]=1,e==="all"&&li.forEach(t=>Ei[t]=1)),bn.set("mm-spec",JSON.stringify(Et)),Wm(),(T.state==="build"||T.state==="order")&&ps(),Ee&&Ee.reqs&&Rh(),fd(bt,T.gt,0,ut)}function en(i,e=.6,t=0){ut.act=i,ut.actT=T.gt,ut.actD=e,ut.dir=t}function wi(){return new P(0,kt+(bt?bt.chestY:1.2),.15)}function ZM(){return new P(0,kt+(bt?bt.headY:1.8),.1)}function Cd(i,e){if(Et[i]===e)return;let t={...Et,[i]:e};ka(t,i),Mn(),Ke.part(i);let n=i==="legs"?new P(0,kt+.3,.3):i==="head"||i==="horns"||i==="eyes"||i==="mouth"?ZM():wi();go(En,n,3,"#9a8ab0",.5),us(En,n,18,{colors:["#b8ffb0","#ffffff",hh("color",Et.color).c],speed:2.2,up:1,life:.6,grav:3,size:.07}),T.state==="build"&&T.alive&&ut.life>.9&&en(mt()<.5?"cheer":"roar",1.1)}function $M(i,e){let t=cs[i],n=t.findIndex(s=>s.id===Et[i]);Cd(i,t[(n+e+t.length)%t.length].id)}function Pd(){Mn(),ka(dd(mt),"all"),Ke.random(),go(En,wi(),8,"#9a8ab0",1),us(En,wi(),50,{colors:["#b8ffb0","#ffffff","#c79bff"],speed:3,up:1.4,life:.8,grav:3,size:.08})}var vo=[];function un(i,e){vo.push({t:T.gt+i,f:e})}function km(){vo.length=0}var Wt=new mh,Mo=new gh;function JM(){let i=T.state,e=Ue.charge;yo("rain",.3,1),yo("bubble_loop",i==="menu"?.18:.26,1),yo("coil_loop",.1+e*.5,1+e*.25),yo("hum_loop",e*.55,.8+e*.5),yo("mob_loop",L&&L.kind==="scare"&&!L.done?.5:0,1,1)}var Sd=6;function KM(i){if(Sd-=i,Sd<=0){Sd=14+mt()*14;let e=mt()<.5?0:1;lh(Ue,e,mt),Ue.flash=Math.max(Ue.flash,.45),un(.25+mt()*.8,()=>Ke.thunder(mt()<.6))}}var yt=null;function Eh(){if(yt||!(T.state==="build"||T.state==="order"&&Ee&&Ee.phase==="build"))return;Mn();let i=T.state==="build"&&!T.alive,e=T.gt;yt={t0:e,full:i,struck:!1,fromAlive:T.alive},Ke.lever(),ge("btnLever").classList.add("pulled"),document.body.dataset.cine="1",Ch(),ge("hint").classList.remove("show"),T.state==="order"&&(Ee.phase="zap");let t=i?1:.55;yt.k=t,yt.strikeAt=i?2.75:1.35,yt.end=i?5.6:3.2,un(.25,()=>Ke.charge()),i?Mo.add(yd(.55),e+.05):Mo.add(yd(.5).slice(0,3),e+.05),Wt.stop(),fs(De("charging"))}function QM(i){if(!yt)return;let e=T.gt-yt.t0;if(Ue.lever=mr(e/.35),yt.struck){let t=e-yt.strikeAt;if(Ue.charge=Math.max(0,1-t*.9)*(yt.full?1:.8),ut.twitch=Math.max(0,.9-t*.9)*(t<.9?1:0),ut.life=yt.fromAlive?1:mr((t-.25)/1.1),!yt.roared&&t>.7&&(yt.roared=!0,en("roar",1.7),Ke.alive(Et.head),fs(De("alive")),T.shake=Math.max(T.shake,.9),T.kids&&un(2,()=>Ke.kids())),mt()<i*10*Math.max(0,1-t)&&Xi(Ue,wi(),wi().add(new P((mt()-.5)*1.4,(mt()-.3)*1.2,(mt()-.5)*.8)),{life:.1,amp:.5}),e>=yt.end){let n=yt;yt=null,Ue.lever=0,Ue.charge=0,ut.twitch=0,ut.life=1,T.alive=!0,ge("btnLever").classList.remove("pulled"),delete document.body.dataset.cine,jM(n)}}else{if(Ue.charge=mr(e/yt.strikeAt)*(yt.full?1:.8),ut.twitch=Ue.charge*.45,e>yt.strikeAt*.45&&(Ue.flicker=Math.max(Ue.flicker,.4)),mt()<i*14*Ue.charge){let t=Ue.coils[mt()<.5?0:1];Xi(Ue,t.top,wi().add(new P((mt()-.5)*.8,mt()*.8,0)),{life:.12,amp:.4}),Ke.arc(.18+Ue.charge*.25)}e>=yt.strikeAt&&(yt.struck=!0,lm(Ue,wi()),Ke.strike(),T.shake=1.4,Ue.flicker=1.6,eS(.3),go(En,wi(),8,"#c8d0ff",1.2),us(En,wi(),Math.round(160*Gs[T.q].parts),{colors:["#ffffff","#bcd2ff","#7aa0ff","#fff2a8"],speed:5,up:1.5,life:1,grav:4,size:.09}),us(En,Ue.rodTip.clone(),60,{colors:["#ffffff","#9fc0ff"],speed:3.5,up:.5,life:.7,grav:5,size:.07}))}}function jM(i){if(T.state==="order"){lS();return}if(T.mode==="show"){tS();return}Ud(),ps()}function eS(i){let e=ge("flash");e.style.transition="none",e.style.opacity=Math.min(.3,i),e.offsetWidth,e.style.transition="opacity .7s ease-out",e.style.opacity=0}var L=null,Ln=[],ei=new P,_h=[new P(-1.8,0,.8),new P(0,0,-1.55),new P(1.8,0,.8)];function tS(){T.results=[],T.score=0,T.chI=0,T.state="show",Ai(),Id("roar")}function Id(i){let e=Vs(Et);L={kind:i,t0:T.gt,done:!1,pts:0,max:1,stat:e[i==="roar"?0:i==="scare"?1:2]};let t=.7+.3*L.stat;if(L.mult=t,fs(`${De("ch"+(T.chI+1))}: ${De("c_"+i)}`),ge("hint").textContent=De("h_"+i+(Mh?"T":"")),un(1.2,()=>ge("hint").classList.add("show")),un(6,()=>ge("hint").classList.remove("show")),i==="roar"){L.n=0,L.phase="ready",L.pt=T.gt+1.4,L.m=0,L.list=[];let n=Xn().zone,s=(n[1]-n[0])*.5*(1+L.stat*.35),r=(n[0]+n[1])/2;L.zone=[r-s,Math.min(1.01,r+s)],L.max=3*400,Wt.stop()}if(i==="scare"){let n=Xn();L.n=n.scareN,L.spawned=0,L.next=T.gt+2.2,L.hearts=n.hearts,L.scared=0,L.combo=0,L.range=2.6+1.4*L.stat+(T.kids?.8:0),L.lastLane=-1,L.max=n.scareN*250*1.3,Wt.start("show",T.gt+.2),Wt.vol=.55}if(i==="dance"){let n=Xn();Wt.start("show",T.gt+.3),Wt.vol=1,L.rounds=n.dance.slice(),L.r=-1,L.seq=[],L.k=0,L.phase="wait",L.max=L.rounds.reduce((s,r)=>s+r*120+100,0),L.win=n.win.map(s=>s*(1+.3*L.stat)),L.perf=0,L.good=0,L.miss=0,Ue.disco=0,zm()}Ai()}function Ld(){if(L.done)return;L.done=!0;let i=Ti(L.pts/L.max/(L.kind==="scare"?.95:1),0,1),e=Math.round(L.pts*L.mult);T.results.push({kind:L.kind,pts:e,rating:i}),T.score+=e,fs(`${De("c_"+L.kind)} \xB7 +${e}`),Ji(i>.85?De("j_mon"):i>.6?De("j_great"):i>.35?De("j_good"):De("j_weak"),"#ffe08a",1.4),i>.6&&Ke.cheer(.4+i*.3),Ue.disco=0,un(2.4,()=>{T.state==="show"&&(T.chI++,T.chI<3?Id(["roar","scare","dance"][T.chI]):$i())}),Ai()}function wh(){!L||L.kind!=="roar"||L.phase!=="ready"||T.gt<L.pt||(L.phase="hold",L.m=0,L.ht=T.gt,Ke.inhale(.4))}function Dd(){!L||L.kind!=="roar"||L.phase!=="hold"||Td(L.m,!1)}function Td(i,e){let t=L.zone,n=!e&&i>=t[0]&&i<=t[1],s,r;if(e)s=40,r=De("r_over"),Ke.fizzle(),en("flinch",.8);else{let a=n?1-Math.abs(i-(t[0]+t[1])/2)/((t[1]-t[0])/2+1e-6):0;s=Math.round(n?260+140*Ti(a,0,1):240*i*i),r=n?a>.6?De("r_mon"):De("r_great"):i>.45?De("r_ok"):De("r_weak");let l=Ti(i,.2,1);if(en("roar",1.1+l*.8),Ke.roar(Et.head,bt.size,l),T.shake=Math.max(T.shake,l*(n?1.3:.6)),Ue.flicker=n?.8:0,n){for(let c=0;c<3;c++)un(.15+c*.12,()=>{let h=Ue.shelves[Math.floor(mt()*Ue.shelves.length)],d=new P;h.getWorldPosition(d),us(En,d,20,{colors:["#dff4ff","#a8e0ff","#ffffff"],speed:2.2,up:1.5,life:.9,grav:7,size:.05}),Ke.glass()});for(let c=0;c<4;c++)go(En,new P((mt()-.5)*6,Hn-.6,(mt()-.5)*5),1,"#6a6070",.8);T.kids&&Ke.kids()}}let o=Math.round(55+i*75);L.list.push({m:i,pts:s,dB:o}),L.pts+=s,Ji(`${r} \xB7 ${o} dB`,n?"#ffe08a":"#cfd8ff",1.25),(window.__banners=window.__banners||[]).push(r),L.phase="result",L.m=i,L.rt=T.gt,ut.inhale=0}function nS(i){let e=Xn();L.phase==="ready"?(ut.inhale=Gn(ut.inhale,0,1-Math.exp(-i*6)),T.gt>L.pt+7&&Td(0,!1)):L.phase==="hold"?(L.m+=i*e.rs*(.42+1.05*L.m),e.cap&&(L.m=Math.min(L.m,e.cap)),ut.inhale=Ti(L.m,0,1),mt()<i*3&&Ke.inhale(L.m),L.m>1&&Td(1,!0)):L.phase==="result"&&T.gt-L.rt>2.1&&(L.n++,L.n>=3?Ld():(L.phase="ready",L.pt=T.gt+.3,L.m=0));let t=ge("rmFill");t.style.height=Ti(L.phase==="hold"||L.phase==="result"?L.m:0,0,1)*100+"%",ge("rmZone").style.bottom=L.zone[0]*100+"%",ge("rmZone").style.height=(Math.min(1,L.zone[1])-L.zone[0])*100+"%",ge("rmLabel").textContent=L.phase==="hold"?`${Math.round(55+L.m*75)} dB`:L.phase==="ready"?T.gt>=L.pt?De("r_hold"):"\u2026":`${L.list.length?L.list[L.list.length-1].dB:0} dB`,ge("roarMeter").classList.toggle("hot",L.phase==="hold"&&L.m>=L.zone[0]&&L.m<=L.zone[1]),ge("rmN").textContent=`${Math.min(L.n+1,3)}/3`}function Ad(){let i=Math.floor(mt()*3);i===L.lastLane&&(i=(i+1+Math.floor(mt()*2))%3),L.lastLane=i,L.spawned++;let e=mt()<.55,t=md({torch:e,fork:!e,coat:["#5a4632","#4a5a3a","#6a3a2a","#3a3a5a"][Math.floor(mt()*4)]},Ue.flameT);t.g.scale.setScalar(1.15),qn.add(t.g);let n=ch[i].clone(),s=_h[i].clone();t.g.position.copy(n),t.g.lookAt(s.x,0,s.z);let r={P:t,lane:i,from:n,to:s,len:n.distanceTo(s),d:0,st:"walk",spd:Xn().spd*(.9+mt()*.2),t:0};Ln.push(r),Ue.doors[i].target=1,un(1.6,()=>{Ln.some(o=>o.lane===i&&o.st==="walk"&&o.d<1.4)||(Ue.doors[i].target=0)}),Ke.door(),t.flame&&Ke.torch()}function Th(i){if(!L||L.kind!=="scare"||L.done)return;Mn();let e=Math.atan2(_h[i].x,_h[i].z),n=Ln.filter(s=>s.lane===i&&s.st==="walk").sort((s,r)=>r.d-s.d)[0];if(n&&n.len-n.d<=L.range){let r=1-(n.len-n.d)/L.range,o=Math.round((100+150*Ti(r,0,1))*(1+Math.min(L.combo,5)*.06));L.pts+=o,L.combo++,L.scared++,n.st="flee",n.t=0,en("lunge",.7,e),Ke.roar(Et.head,bt.size,.55+r*.4),un(.12,()=>Ke.scream(Ti(_h[i].x/3,-.9,.9))),T.shake=Math.max(T.shake,.4),Ji(`${r>.66?De("s_boo"):r>.33?De("s_great"):De("s_ok")} +${o}`,r>.66?"#ffe08a":"#cfe8ff",1.1),(window.__banners=window.__banners||[]).push("scare"),Ue.doors[i].target=1,un(1.6,()=>Ue.doors[i].target=0)}else L.combo=0,en("lunge",.5,e),Ke.whiff(),Ji(De(n?"s_early":"s_none"),"#b8b0d0",.9)}function Um(i){!L.done&&L.spawned<L.n&&T.gt>=L.next&&(Ad(),!T.kids&&T.diff==="hard"&&mt()<.25&&L.spawned<L.n&&un(.5,()=>{L&&L.kind==="scare"&&!L.done&&L.spawned<L.n&&Ad()}),L.next=T.gt+Xn().gap*(.8+mt()*.4));for(let t of Ln){t.t+=i;let n=t.P;if(t.st==="walk"){t.d+=t.spd*i;let s=Math.min(1,t.d/t.len);n.g.position.lerpVectors(t.from,t.to,s),hs(n,i,"walk"),s>=1&&(t.st="poke",t.t=0)}else if(t.st==="poke"){if(hs(n,i,"poke"),t.t>.35&&!t.hit){if(t.hit=!0,L.combo=0,en("flinch",.7),T.kids)Ke.kids(),Ji(De("s_tickle"),"#ffd0f0",1);else if(Ke.poke(),L.hearts--,Ji(De("s_ouch"),"#ff8a8a",1.2),T.shake=.5,L.hearts<=0){iS();return}}t.t>1.1&&(t.st="flee",t.t=0,t.calm=!0)}else if(t.st==="flee"){let r=t.from.clone().sub(n.g.position),o=r.length();o>.05&&(n.g.lookAt(t.from.x,0,t.from.z),n.g.position.addScaledVector(r.normalize(),Math.min(o,i*(t.calm?2.2:4.2)))),hs(n,i,t.calm?"walk":"flee"),o<.2&&(t.st="gone",qn.remove(n.g))}}for(let t=Ln.length-1;t>=0;t--)Ln[t].st==="gone"&&Ln.splice(t,1);!L.done&&L.spawned>=L.n&&!Ln.length&&Ld(),ge("hHearts").textContent=T.kids?"\u{1F496}":"\u2764\uFE0F".repeat(Math.max(0,L.hearts))+"\u{1F5A4}".repeat(Math.max(0,Xn().hearts-L.hearts));let e=ge("vmarks");for(;e.children.length<Ln.length;)e.appendChild(document.createElement("span"));[...e.children].forEach((t,n)=>{let s=Ln[n];if(!s||s.st!=="walk"){t.style.display="none";return}ei.copy(s.P.g.position).setY(1.2).project(_t);let r=Math.abs(ei.x)>.96||Math.abs(ei.y)>.96||ei.z>1;if(t.style.display=r?"":"none",!r)return;let o=ei.z>1?-ei.x:ei.x,a=ei.z>1?-ei.y:ei.y,l=Math.max(Math.abs(o),Math.abs(a))||1;o/=l,a/=l,t.style.left=Ti((o*.5+.5)*Nn,30,Nn-30)+"px",t.style.top=Ti((-a*.5+.5)*Wn,80,Wn-120)+"px",t.textContent=s.P.flame?"\u{1F525}":"\u{1F531}",t.className=s.len-s.d<=L.range?"hot":""}),document.querySelectorAll("#lanesPad button").forEach((t,n)=>t.classList.toggle("warn",Ln.some(s=>s.lane===n&&s.st==="walk"&&s.len-s.d<=L.range)))}function Ah(){for(let i of Ln)qn.remove(i.P.g);Ln.length=0,ge("vmarks").innerHTML="",Ue.doors.forEach(i=>i.target=0)}function iS(){L.done=!0,T.failed=!0,Ke.fail(),fs(De("mobWins")),en("sad",2.2),un(2.6,()=>$i())}function zm(){if(L.r++,L.r>=L.rounds.length){L.phase="finale",en("spin",1.1),un(1.1,()=>en("cheer",1.6)),Ke.cheer(.55),un(2.2,()=>Ld());return}let i=L.rounds[L.r];L.seq=[];for(let n=0;n<i;n++){let s;do s=VM[Math.floor(mt()*4)];while(n>1&&s===L.seq[n-1]&&s===L.seq[n-2]);L.seq.push(s)}let e=Math.ceil(Wt.beat(T.gt)+.6),t=Math.ceil(e/4)*4;L.callB=t,L.respB=t+Math.ceil(i/4)*4+(i%4===0,0),L.k=0,L.res=[],L.phase="call",L.shown=-1,vh()}function sS(i){let e=Wt.beat(T.gt);if(Ue.beat=e,Ue.disco=Gn(Ue.disco,L.phase==="finale"?1:.75,1-Math.exp(-i*2)),L.phase==="call"){let t=Math.floor(e-L.callB+1e-6);t>=0&&t<L.seq.length&&t!==L.shown&&(L.shown=t,vh(),Ke.tick(),en(L.seq[t],.45)),e>=L.respB-1&&L.shown>=L.seq.length-1&&(L.phase="resp",vh(),Ji(De("d_you"),"#7dffb4",1.1))}else if(L.phase==="resp"){let t=L.respB+L.k;L.k<L.seq.length&&(e-t)*Wt.spb>L.win[1]&&Hm(null,"miss"),L.k>=L.seq.length&&!L.next2&&(L.next2=!0,L.res.every(s=>s!=="miss")&&(L.pts+=100,Ji(De("d_round"),"#ffe08a",1.2),Ke.cheer(.35)),un(.8,()=>{L.next2=!1,zm()}))}else L.phase==="finale"&&mt()<i*6&&us(En,wi().setY(kt+.2),8,{colors:["#ff5ad6","#7dffb4","#5fd3ff","#ffe08a"],speed:2.4,up:2,life:.8,grav:2,size:.07})}function Nd(i){if(!L||L.kind!=="dance"||L.phase!=="resp"||L.k>=L.seq.length){L&&L.kind==="dance"&&en(i,.45);return}let e=Wt.beat(T.gt),t=L.respB+L.k,n=(e-t)*Wt.spb;if(n<-L.win[1]*1.6){en(i,.45);return}Hm(i,i!==L.seq[L.k]?"miss":Math.abs(n)<=L.win[0]?"perfect":Math.abs(n)<=L.win[1]?"good":"late")}function Hm(i,e){let t=L.seq[L.k];e==="late"&&(e="good"),e==="perfect"?(L.pts+=120,L.perf++):e==="good"?(L.pts+=70,L.good++):L.miss++,L.res.push(e),L.k++,T.lastJ=e,en(e==="miss"?"flinch":t,.45),e!=="miss"&&(Ke.stomp(.3),Ke.judge(!0),us(En,new P(0,kt+.05,.4),10,{colors:[XM[t]],speed:2,up:1.5,life:.6,grav:3,size:.07})),Ji(De("j_"+e),e==="perfect"?"#ffe08a":e==="good"?"#7dffb4":"#ff9a9a",1),vh()}function vh(){let i=ge("dseq");if(!L||L.kind!=="dance"){i.innerHTML="";return}i.innerHTML="",L.seq.forEach((e,t)=>{let n=document.createElement("div");n.className="ds";let s=L.phase==="call"?t<=L.shown:!0;n.textContent=s?WM[e]:"\u2022",L.phase==="call"&&t===L.shown&&n.classList.add("now"),L.phase!=="call"&&L.res[t]&&n.classList.add(L.res[t]),L.phase==="resp"&&t===L.k&&n.classList.add("next"),i.appendChild(n)}),ge("dlab").textContent=L.phase==="call"?De("d_watch"):L.phase==="resp"?De("d_you"):"",ge("dround").textContent=`${De("round")} ${Math.min(L.r+1,L.rounds.length)}/${L.rounds.length}`}var Ee=null,rn=null;function rS(){T.mode="order",T.state="order",T.score=0,T.failed=!1,T.results=[],T.orderI=0,T.stars=0,T.failedO=0,T.alive=!1,ut.life=0,Wt.start("order",T.gt+.2),Wt.vol=.8,Ai(),Gm()}function oS(i){let e=["color:red","color:blue","color:purple","color:orange","color:pink","color:teal","color:bone","color:green","any:wings","any:horns","any:tail","eyes:cyclops","eyes:three","eyes:many","wings:bat","legs:spider","head:pumpkin","head:dragon","pattern:spots","pattern:stripes","mouth:fangs","tentacles:1","head:bat","legs:chicken"],t=["pattern:glow","pattern:scales","mouth:tusks","horns:antlers","arms:pincers","body:bug","wings:bug","tail:scorpion","stat:0","stat:1","stat:2","horns:unicorn","eyes:stalks"],n=T.kids?e.filter(a=>!a.startsWith("mouth")&&!a.startsWith("pattern")):T.diff==="easy"?e:e.concat(t,t),s=[],r=new Set,o=0;for(;s.length<i&&o++<400;){let a=n[Math.floor(mt()*n.length)],l=a.split(":")[0],c=l==="any"?a.split(":")[1]:l==="tentacles"?"arms":l;r.has(c)||s.includes(a)||fr(Et,a)&&s.filter(h=>fr(Et,h)).length>=0||l==="stat"&&s.some(h=>h.startsWith("stat"))||(r.add(c),l==="any"&&c==="wings"&&r.add("wings"),a==="tentacles:1"&&r.add("legs"),s.push(a))}return s}function Gm(){let i=Xn();if(T.orderI>=i.orderN){$i();return}let e=pd[(T.orderI*3+Math.floor(mt()*7))%pd.length];rn&&qn.remove(rn.g),rn=md(e,Ue.flameT),rn.def=e,qn.add(rn.g);let t=ch[0].clone(),n=new P(-2.05,0,1.05);rn.g.position.copy(t),Ue.doors[0].target=1,Ke.door(),Ee={def:e,reqs:oS(i.reqN),t0:T.gt,phase:"arrive",from:t,to:n,tLimit:i.orderT,tLeft:i.orderT,met:0},T.alive=!1,ut.life=0,Rh(),ge("order").classList.add("show"),Ch(),Ai()}function aS(i){let e=rn;if(!(!Ee||!e)){if(Ee.phase==="arrive"){let t=mr((T.gt-Ee.t0)/2.2);e.g.position.lerpVectors(Ee.from,Ee.to,t),e.g.lookAt(Gn(Ee.to.x+1,0,t),0,Gn(Ee.to.z,0,t)+(1-t)*0),hs(e,i,"walk"),t>=1&&(Ee.phase="build",Ee.bt=T.gt,Ue.doors[0].target=0,Ud(),ps(),e.g.lookAt(0,0,.3),fs(De("o_new")),Ke.ui())}else if(Ee.phase==="build")hs(e,i,"idle"),e.g.lookAt(0,0,.3),Ee.tLimit&&(Ee.tLeft=Math.max(0,Ee.tLimit-(T.gt-Ee.bt)),Ee.tLeft<=0&&(fs(De("o_time")),Eh()),Ee.tLeft<8&&Math.floor(Ee.tLeft*2)!==Ee._tk&&(Ee._tk=Math.floor(Ee.tLeft*2),Ke.tick())),Vm();else if(Ee.phase==="zap")hs(e,i,yt&&yt.struck?"scared":"idle");else if(Ee.phase==="react")hs(e,i,Ee.happy?"happy":"grumpy"),T.gt-Ee.rt>2.6&&(Ee.phase="leave",Ee.lt=T.gt,Ue.doors[0].target=1,go(En,wi(),10,"#b0a0c8",1.2),Ke.random());else if(Ee.phase==="leave"){let t=mr((T.gt-Ee.lt)/1.8);if(e.g.position.lerpVectors(Ee.to,Ee.from,t),e.g.lookAt(Ee.from.x,0,Ee.from.z),hs(e,i,"walk"),!Ee.swapped&&t>.05){Ee.swapped=!0;let n=dd(mt);ka(n,"all"),T.alive=!1,ut.life=0}t>=1&&(Ue.doors[0].target=0,T.orderI++,T.failedO>=Xn().failO?(T.failed=!0,fs(De("o_closed")),Ke.fail(),un(1.8,()=>$i()),Ee.phase="done"):Gm())}}}function lS(){let i=Ee.reqs.filter(s=>fr(Et,s)).length,e=Ee.reqs.length;Ee.met=i,Ee.happy=i/e>=.6;let t=i===e?3:i/e>=.6?2:i>0?1:0;Ee.stars=t,T.stars+=t,i/e<.5&&T.failedO++;let n=i*100+(i===e?150+Math.round((Ee.tLimit?Ee.tLeft:20)*4):0);T.score+=n,T.results.push({kind:"order",pts:n,stars:t,cust:Ee.def.id}),Ee.phase="react",Ee.rt=T.gt,en(Ee.happy?"cheer":"sad",1.6),Ee.happy?(Ke.cheer(.5),us(En,rn.g.position.clone().setY(1.7),30,{colors:["#ffe08a","#ff7ab0","#ffffff"],speed:2.4,up:1.6,life:1,grav:2,size:.08})):Ke.boo(),fs(`${"\u2B50".repeat(t)}${"\u2606".repeat(3-t)}  +${n}`),Ji(De(Ee.happy?t===3?"o_perfect":"o_happy":"o_meh"),Ee.happy?"#ffe08a":"#cfd0e8",1.3),Rh(),Ai()}function Rh(){if(!Ee)return;let i=Ee.def;ge("oFace").textContent=i.e,ge("oWho").textContent=De("cu_"+i.id),ge("oSay").textContent=De("cs_"+i.id);let e=ge("oReqs");e.innerHTML="";for(let t of Ee.reqs){let n=fr(Et,t),s=document.createElement("span");s.className="req"+(n?" ok":""),s.textContent=(n?"\u2714 ":"")+Lm(t,T.lang),e.appendChild(s)}ge("oNum").textContent=`${De("order")} ${T.orderI+1}/${Xn().orderN}`,Vm()}function Vm(){let i=ge("oTime");if(!Ee||!Ee.tLimit){i.style.display="none";return}i.style.display="",ge("oTimeFill").style.width=Ee.tLeft/Ee.tLimit*100+"%",ge("oTimeFill").classList.toggle("low",Ee.tLeft<8)}function So(i){if(Mn(),km(),Ah(),Mo.clear(),yt=null,Ue.lever=0,Ue.charge=0,Ue.disco=0,L=null,Ee=null,rn&&(qn.remove(rn.g),rn=null),T.mode=i,T.score=0,T.failed=!1,T.newBest=!1,T.results=[],T.grade="",T.pel=0,window.__banners=[],ge("end").classList.remove("show"),ge("menu").classList.remove("show"),ge("order").classList.remove("show"),i==="order"){rS();return}T.state="build",T.alive=!1,ut.life=0,T.cat="head",Ud(),ps(),Wt.start("lab",T.gt+.2),Wt.vol=.9,Ai(),Ke.ui(),ge("hint").textContent=De(Mh?"h_buildT":"h_build"),un(.6,()=>ge("hint").classList.add("show")),un(7,()=>ge("hint").classList.remove("show"))}function za(){km(),Ah(),Mo.clear(),yt=null,L=null,Ee=null,rn&&(qn.remove(rn.g),rn=null),Ue.disco=0,Ue.charge=0,Ue.lever=0,T.state="menu",T.alive=!0,ut.life=1,ge("menu").classList.add("show"),ge("end").classList.remove("show"),ge("order").classList.remove("show"),Ch(),Wt.start("lab",T.gt+.3),Wt.vol=.6,Ai(),bo()}function $i(){if(T.state==="end")return;Ah(),Mo.clear(),yt=null,Ue.disco=0,Ue.charge=0,Ue.lever=0,rn&&(qn.remove(rn.g),rn=null),ge("order").classList.remove("show"),Ch();let i=T.state;T.state="end",ut.life=Math.max(ut.life,T.mode==="lab"?1:ut.life),T.mode!=="lab"&&(ut.life=1,T.alive=!0);let e=0;T.mode==="show"?e=T.results.reduce((r,o)=>r+o.rating,0)/3:T.mode==="order"&&(e=T.stars/(3*Xn().orderN));let t=T.mode==="lab"?"":e>=.88?"S":e>=.74?"A":e>=.58?"B":e>=.4?"C":"D";T.failed&&!T.kids&&(t="D"),T.kids&&t&&"CD".includes(t)&&(t="B"),T.grade=t;let n=+bn.get(Nm(),0);T.newBest=T.mode!=="lab"&&T.score>n&&T.score>0,T.newBest&&bn.set(Nm(),T.score),T.best=Math.max(n,T.score),Wt.start("lab",T.gt+.5),Wt.vol=.6,en(T.failed?"sad":"cheer",1.8),!T.failed&&T.mode!=="lab"&&Ke.win(),T.failed&&Ke.fail(),ge("eTitle").textContent=T.mode==="lab"?De("e_lab"):T.failed?T.mode==="order"?De("o_closed"):De("mobWins"):De(t==="S"?"e_s":t==="A"?"e_a":"e_b"),ge("eScore").textContent=T.mode==="lab"?mo(Et,T.lang):T.score,ge("eGrade").textContent=t,ge("eGrade").style.display=t?"":"none",ge("eBest").textContent=T.mode==="lab"?"":T.newBest?De("newBest"):`${De("best")}: ${T.best}`;let s=Vs(Et);ge("eStats").innerHTML=(T.mode==="show"?T.results.map(r=>`<span>${De("c_"+r.kind)}: <b>${r.pts}</b></span>`).join(""):T.mode==="order"?`<span>\u2B50 ${T.stars}/${3*Xn().orderN}</span><span>${De("orders")}: ${T.results.length}</span>`:"")+`<span>\u{1F981} ${Math.round(s[0]*100)}</span><span>\u{1F47B} ${Math.round(s[1]*100)}</span><span>\u{1F483} ${Math.round(s[2]*100)}</span>`,ge("eName").value=T.name,ge("end").classList.add("show"),Ai()}function Ai(){let i=T.state;document.body.dataset.state=i,document.body.dataset.mode=T.mode,document.body.dataset.ch=L&&!L.done?L.kind:"",document.body.dataset.kids=T.kids?"1":"0",ge("hScore").textContent=T.score,ge("hMode").textContent=i==="show"&&L?`${De("ch"+(T.chI+1))} \xB7 ${De("c_"+L.kind)}`:i==="order"?`${De("order")} ${Math.min(T.orderI+1,Xn().orderN)}/${Xn().orderN} \xB7 \u2B50 ${T.stars||0}`:i==="build"?T.mode==="lab"?De("lab"):De("showdown"):"",ge("lanesPad").style.display=i==="show"&&L&&L.kind==="scare"&&!L.done?"":"none",ge("roarMeter").style.display=i==="show"&&L&&L.kind==="roar"&&!L.done?"":"none",ge("roarBtn").style.display=ge("roarMeter").style.display,ge("dance").style.display=i==="show"&&L&&L.kind==="dance"&&!L.done?"":"none",ge("hHeartsBox").style.display=i==="show"&&L&&L.kind==="scare"?"":"none"}function Ud(){ge("dock").classList.add("show")}function Ch(){ge("dock").classList.remove("show")}function ps(){let i=ge("tabs");i.children.length||li.forEach(t=>{let n=document.createElement("button");n.dataset.c=t,n.innerHTML=`<span>${mm[t]}</span><small></small>`,n.onclick=()=>{T.cat=t,Mn(),Ke.tab(),ps()},i.appendChild(n)}),i.querySelectorAll("button").forEach(t=>{t.classList.toggle("on",t.dataset.c===T.cat),t.querySelector("small").textContent=De("cat_"+t.dataset.c)});let e=ge("opts");e.innerHTML="";for(let t of cs[T.cat]){let n=document.createElement("button");n.dataset.p=t.id,n.className=Et[T.cat]===t.id?"on":"",T.cat==="color"?n.innerHTML=`<i class="sw" style="background:${t.c}"></i><small>${De("col_"+t.id)}</small>`:n.innerHTML=`<span>${t.e}</span><small>${De("p_"+T.cat+"_"+t.id)}</small>`,n.onclick=()=>{Cd(T.cat,t.id),ps()},e.appendChild(n)}ge("btnLever").textContent=T.state==="order"?De("zapOrder"):T.alive?De("zapAgain"):De("lever"),ge("lifeRow").style.display=T.state==="build"&&T.mode==="lab"&&T.alive?"":"none",ge("dName").textContent=mo(Et,T.lang),Wm()}function Wm(){let i=Vs(Et);["Roar","Scare","Groove"].forEach((t,n)=>{let s=ge("st"+t);s&&(s.style.width=Math.round(i[n]*100)+"%")});let e=ge("dName");e&&(e.textContent=mo(Et,T.lang))}function bo(){document.documentElement.lang=T.lang,document.querySelectorAll("[data-t]").forEach(t=>t.textContent=De(t.dataset.t)),ge("btnLang").textContent=T.lang==="en"?"DE":"EN",ge("btnKids").classList.toggle("on",T.kids),ge("btnKids").setAttribute("aria-pressed",T.kids),document.querySelectorAll("#diff button").forEach(t=>t.classList.toggle("on",t.dataset.d===T.diff)),ge("diff").style.display=T.kids?"none":"";let i=+bn.get(`mm-best-show-${yh()}`,0),e=+bn.get(`mm-best-order-${yh()}`,0);ge("bestShow").textContent=i?`\u{1F3C6} ${i}`:"",ge("bestOrder").textContent=e?`\u{1F3C6} ${e}`:"",ge("btnSound").classList.toggle("on",!ph()),ge("btnSound").textContent=ph()?"\u{1F507}":"\u{1F50A}",ge("btnQ").textContent="\u2699 "+De("q_"+T.q),ps(),Ee&&Rh(),Ai()}function Ji(i,e,t=1){let n=document.createElement("div");n.className="pop",n.textContent=i,n.style.color=e,n.style.fontSize=28*t*(Nn<600?.8:1)+"px",ge("pops").appendChild(n),setTimeout(()=>n.remove(),1300)}function fs(i){(window.__banners=window.__banners||[]).push(i);let e=ge("banner");e.textContent=i,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function Xm(i){let e=ge("toast");e.textContent=i,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2500)}var Mh=!1,Ba=null;Fa.addEventListener("pointerdown",i=>{if(Mn(),Mh=i.pointerType==="touch",i.preventDefault(),T.state==="show"&&L&&L.kind==="roar"){wh();return}if(T.state==="show"&&L&&L.kind==="scare"&&Mh){let e=i.clientX/Nn;Th(e<.36?0:e>.64?2:1);return}(T.state==="build"||T.state==="order"||T.state==="menu"||T.state==="end")&&(Ba={x:i.clientX,az:T.az},Fa.setPointerCapture&&Fa.setPointerCapture(i.pointerId))});Fa.addEventListener("pointermove",i=>{Ba&&(T.az=Ti(Ba.az-(i.clientX-Ba.x)*.006,-1.3,1.3),T.azT=T.gt)});var qm=()=>{Ba=null,Dd()};window.addEventListener("pointerup",qm);window.addEventListener("pointercancel",qm);ge("roarBtn").addEventListener("pointerdown",i=>{i.preventDefault(),Mn(),wh()});document.querySelectorAll("#lanesPad button").forEach((i,e)=>i.addEventListener("pointerdown",t=>{t.preventDefault(),Th(e)}));document.querySelectorAll("#pad button").forEach(i=>i.addEventListener("pointerdown",e=>{e.preventDefault(),Mn(),Nd(i.dataset.d)}));var cS={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down"};window.addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT")return;Mn();let e=i.code;if(T.state==="show"&&L&&L.kind==="roar"&&(e==="Space"||e==="Enter"||e==="ArrowUp")){i.preventDefault(),i.repeat||wh();return}if(!i.repeat){if(e==="Escape"){if(T.state==="build"&&T.mode==="lab"){$i();return}(T.state==="build"||T.state==="show"||T.state==="order")&&(T.mode==="lab"||T.state==="show"||T.state==="order"?$i():za());return}if(T.state==="menu"&&e==="Enter"){So("show");return}if(T.state==="show"&&L&&L.kind==="scare"){let t={ArrowLeft:0,KeyA:0,ArrowUp:1,KeyW:1,ArrowRight:2,KeyD:2}[e];t!==void 0&&(i.preventDefault(),Th(t));return}if(T.state==="show"&&L&&L.kind==="dance"){let t=cS[e];t&&(i.preventDefault(),Nd(t));return}if((T.state==="build"||T.state==="order"&&Ee&&Ee.phase==="build")&&!yt)if(e==="ArrowLeft"||e==="ArrowRight")i.preventDefault(),$M(T.cat,e==="ArrowLeft"?-1:1),ps();else if(e==="ArrowUp"||e==="ArrowDown"){i.preventDefault();let t=li.indexOf(T.cat);T.cat=li[(t+(e==="ArrowDown"?1:-1)+li.length)%li.length],Ke.tab(),ps()}else e==="KeyR"?Pd():(e==="Space"||e==="Enter"||e==="KeyL")&&(i.preventDefault(),Eh())}});window.addEventListener("keyup",i=>{(i.code==="Space"||i.code==="Enter"||i.code==="ArrowUp")&&Dd()});ge("btnPlay").onclick=()=>So("show");ge("btnOrder").onclick=()=>So("order");ge("btnLab").onclick=()=>So("lab");ge("btnAgain").onclick=()=>So(T.mode);ge("btnMenu").onclick=()=>{Ke.ui(),za()};ge("btnQuit").onclick=()=>{T.state==="build"&&T.mode!=="lab"&&!yt?za():(T.state==="build"||T.state==="show"||T.state==="order")&&$i()};ge("btnLever").onclick=()=>Eh();ge("btnRandom").onclick=()=>Pd();ge("btnRoar").onclick=()=>{Mn(),en("roar",1.6),Ke.roar(Et.head,bt.size,.8),T.shake=.6};ge("btnDance").onclick=()=>{Mn();let i=["left","right","up","down","spin"][Math.floor(mt()*5)];en(i,.9),Ke.stomp(.35)};ge("btnDone").onclick=()=>$i();ge("btnCard").onclick=()=>Fd(!1);ge("btnShare").onclick=()=>Fd(!0);ge("btnLang").onclick=()=>{T.lang=T.lang==="en"?"de":"en",bn.set("mm-lang",T.lang),bo(),Ke.ui()};document.querySelectorAll("#diff button").forEach(i=>i.onclick=()=>{T.diff=i.dataset.d,bn.set("mm-diff",T.diff),bo(),Mn(),Ke.ui()});ge("btnKids").onclick=()=>{T.kids=!T.kids,bn.set("mm-kids",T.kids?"1":"0"),bo(),Mn(),Ke.ui()};ge("btnSound").onclick=()=>{Mn(),Em(!ph()),bo()};ge("btnQ").onclick=()=>{let i=["low","mid","high","ultra"];bh(i[(i.indexOf(T.q)+1)%4],!0)};ge("eName").addEventListener("keydown",i=>i.stopPropagation());window.addEventListener("resize",Rd);document.addEventListener("pointerdown",()=>Mn(),{once:!0});async function Fd(i){T.name=(ge("eName").value||"").trim()||"Player",bn.set("mm-name",T.name);try{await document.fonts.load("700 40px Fredoka")}catch{}let e=1080,t=1350;kn.setPixelRatio(1),kn.setSize(e,t,!1),Vn.setPixelRatio(1),Vn.setSize(e,t),Oa.strength=.22;let n={a:_t.aspect,f:_t.fov,p:_t.position.clone(),q:_t.quaternion.clone()},s=bt.size;_t.clearViewOffset(),_t.aspect=e/t,_t.fov=42,_t.updateProjectionMatrix(),_t.position.set(1.15,kt+s*.62,2.4+s*1.15),_t.lookAt(0,kt+s*.5+.05,0),Vn.render();let r=document.createElement("canvas");r.width=e,r.height=t;let o=r.getContext("2d");o.drawImage(kn.domElement,0,0,e,t),_t.aspect=n.a,_t.fov=n.f,_t.position.copy(n.p),_t.quaternion.copy(n.q),Rd();let a=o.createLinearGradient(0,0,0,t);a.addColorStop(0,"rgba(8,6,18,.9)"),a.addColorStop(.24,"rgba(8,6,18,.05)"),a.addColorStop(.7,"rgba(8,6,18,.1)"),a.addColorStop(1,"rgba(8,6,18,.94)"),o.fillStyle=a,o.fillRect(0,0,e,t);let l=(g,p)=>`${g} ${p}px Fredoka, "Arial Rounded MT Bold", sans-serif`;o.textAlign="center",o.lineJoin="round";let c=(g,p,E,R,v="rgba(10,8,26,.85)",A=8)=>{o.strokeStyle=v,o.lineWidth=A,o.strokeText(g,p,E),o.fillStyle=R,o.fillText(g,p,E)};o.font=l(700,84),c("\u{1F9EA} Monster Maker",e/2,112,"#d9ffe0","rgba(16,30,22,.9)",10),o.font=l(700,58),c(mo(Et,T.lang),e/2,192,"#fff0c8"),o.font=l(500,38),c(`${De("by")} ${T.name.slice(0,18)}`,e/2,246,"#ffffff");let h=Vs(Et),d=210,u=660;["\u{1F981} "+De("roar"),"\u{1F47B} "+De("scare"),"\u{1F483} "+De("groove")].forEach((g,p)=>{let E=1030+p*54;o.textAlign="left",o.font=l(600,32),c(g,d-40,E+11,"#f0e8ff"),o.fillStyle="rgba(255,255,255,.14)",o.beginPath(),o.roundRect(d+200,E-12,u-200,24,12),o.fill(),o.fillStyle=["#ff9a5a","#b48cff","#5fe0b0"][p],o.beginPath(),o.roundRect(d+200,E-12,Math.max(24,(u-200)*h[p]),24,12),o.fill()}),o.textAlign="center",T.mode!=="lab"&&T.state==="end"&&(o.font=l(700,44),c(`${T.mode==="order"?De("orderTitle"):De("showdown")}: ${T.score}${T.grade?" \xB7 "+T.grade:""}`,e/2,990,"#ffe08a")),o.font=l(600,44),c(De("cardTag"),e/2,1238,"#9dffb8"),o.font=l(400,32),c(Dm,e/2,1292,"rgba(255,255,255,.92)");let f=await new Promise(g=>r.toBlob(g,"image/png"));window.__mmCard={w:r.width,h:r.height};let m=new File([f],"my-monster.png",{type:"image/png"});if(i&&navigator.canShare&&navigator.canShare({files:[m]}))try{await navigator.share({files:[m],text:`Monster Maker \u2014 ${De("cardTag")} https://${Dm}/`});return}catch(g){if(g&&g.name==="AbortError")return}let _=document.createElement("a");_.href=URL.createObjectURL(f),_.download="my-monster.png",document.body.appendChild(_),_.click(),setTimeout(()=>{URL.revokeObjectURL(_.href),_.remove()},1500),Xm(De("saved"))}var bd=new P(0,2.2,6.2),Fm=new P(0,1.5,0),Dn=new P,ds=new P,Ed=3;function hS(i){for(let n of Ue.colliders){Dn.subVectors(i,n.p),Dn.y*=.45;let s=Dn.length(),r=n.r+.7;s<r&&i.addScaledVector(Dn.normalize(),r-s)}let e=Math.hypot(i.x,i.z),t=yn-.95;return e>t&&(i.x*=t/e,i.z*=t/e),i.y=Ti(i.y,.55,Hn-1),i}var wd=45;function uS(i){let e=T.state,t=Om(),n=bt?bt.size:2,s=kt+n*.5,r=t?1.35:1;if(wd=t?60:45,e==="menu"){let d=Math.sin(T.gt*.08)*.55+.15,u=(2.8+n*.95)*r;Dn.set(Math.sin(d)*u,kt+n*.62+.25,Math.cos(d)*u),ds.set(0,s+(t?.35:.1),0)}else if(e==="build"||e==="order"&&Ee&&Ee.phase==="build"){let d=T.cat,u=["head","horns","eyes","mouth"].includes(d),f=d==="legs",m=d==="tail"||d==="wings";(T.azT===void 0||T.gt-T.azT>6)&&(T.az=Gn(T.az,m?2.4:e==="order"?t?-.55:.45:.25,1-Math.exp(-i*(m?1.5:.5))));let _=(u?2.6+n*.85:f?2.8+n*.9:3+n*1.05)*r,g=u?Gn(s,kt+bt.headY,.6):f?Gn(s,kt+bt.hipY*.6,.35):s;Dn.set(Math.sin(T.az)*_,g+.35,Math.cos(T.az)*_),ds.set(e==="order"?t?-.35:-.55:0,g-(t?-.05:0),0)}else if(yt){let d=T.gt-yt.t0,u=mr(d/(yt.end||5)),f=Gn(-.55,.18,u),m=Gn(3.7,5.2,u)*r;Dn.set(Math.sin(f)*m,Gn(kt+.5,kt+n*.7,mr(d/3)),Math.cos(f)*m),ds.set(0,Gn(s+.2,s,u),0)}else if(e==="show"&&L&&L.kind==="scare")Dn.set(Math.sin(T.gt*.1)*.3,t?7.3:5.5,t?4.6:5.9),ds.set(0,t?.2:.5,t?-.9:-1.1),wd=t?80:60;else if(e==="show"&&L&&L.kind==="dance"){let d=Math.sin(T.gt*.35)*.45,u=(2.9+n*1)*r;Dn.set(Math.sin(d)*u,kt+n*.55+.2,Math.cos(d)*u),ds.set(0,s,0)}else if(e==="show"){let d=ut.inhale,u=.18+Math.sin(T.gt*.2)*.05,f=(2.6+n*.8-d*.9)*r;Dn.set(Math.sin(u)*f,kt+n*.45+.1-d*.2,Math.cos(u)*f),ds.set(0,s+.1+d*.2,0)}else if(e==="order"){let d=t?-.55:.42,u=(3.4+n*1)*r;Dn.set(Math.sin(d)*u,kt+n*.6,Math.cos(d)*u),ds.set(-.8,s-.1,.3)}else{let d=.3+Math.sin(T.gt*.07)*.25,u=(2.8+n*1.05)*r;Dn.set(Math.sin(d)*u,kt+n*.6+.2,Math.cos(d)*u),ds.set(0,s,0)}let o=YM(),a=ge("dock").classList.contains("show"),l=e==="menu"?o?-.17:0:e==="end"?o?-.2:0:a&&o?.17:e==="order"&&o?.1:0,c=o?0:e==="menu"?.17:e==="end"?.22:a?.21:e==="order"?.08:0,h=1-Math.exp(-i*2.5);T.vx=Gn(T.vx,l,h),T.vy=Gn(T.vy,c,h),_t.setViewOffset(Nn,Wn,T.vx*Nn,T.vy*Wn,Nn,Wn),_t.fov=GM(Gn(_t.fov,wd,1-Math.exp(-i*2.5)))||45,_t.updateProjectionMatrix()}function Sh(i){i=Math.max(0,Math.min(i||0,1/20)),T.gt+=i,T.pel+=i;for(let n=vo.length-1;n>=0;n--)if(vo[n].t<=T.gt){let s=vo[n].f;vo.splice(n,1),s()}for(let n of["flash","charge","flicker","strike","lever","disco","beat"])Number.isFinite(Ue[n])||(Ue[n]=0);for(let n of["life","inhale","twitch","open","actP"])Number.isFinite(ut[n])||(ut[n]=n==="life"?1:0);Number.isFinite(T.shake)||(T.shake=0),Mo.step(T.gt),Wt.step(T.gt),QM(i),KM(i),JM();let e=T.state;if(e==="show"&&L&&!L.done?L.kind==="roar"?nS(i):L.kind==="scare"?Um(i):sS(i):e==="show"&&L&&L.kind==="scare"&&Um(i),e==="order"&&aS(i),e==="menu"&&Math.floor(T.gt/5.5)!==T._mm&&(T._mm=Math.floor(T.gt/5.5),en(["roar","left","right","up","spin","cheer"][T._mm%6],T._mm%6===0?1.6:.9),T._mm%6===0&&Ke.roar(Et.head,bt.size,.5),T._mm%3===1)){let n=Ue.coils[T._mm%2];Xi(Ue,n.top,Ue.rodTip,{life:.3,amp:.35}),Ke.arc(.2)}if(e==="end"&&mt()<i*.25&&!ut.act&&en(["cheer","roar","spin"][Math.floor(mt()*3)],1.4),Ed-=i,Ed<0&&(Ed=4+mt()*5,Ke.bubble()),bt){ut.act?(ut.actP=(T.gt-ut.actT)/ut.actD,ut.actP>=1&&(ut.act=null)):ut.actP=0,T.state,ut.look.copy(e==="show"&&L&&L.kind==="scare"&&Ln.length?Ln.filter(n=>n.st==="walk").sort((n,s)=>s.d-n.d)[0]?.P.g.position.clone().setY(1.4)||_t.position:e==="order"&&rn?rn.g.position.clone().setY(1.5):_t.position),fd(bt,T.gt,i,ut);for(let n of li)if(Ei[n]>0&&(Ei[n]=Math.max(0,Ei[n]-i*2.6)),Ei[n]>0&&bt.parts[n]){let s=Ei[n],r=1+Math.sin(s*Math.PI)*.22*s;bt.parts[n].scale.setScalar(n==="body"?bt.parts.body.scale.x*r:r)}if(Ei.color>0||Ei.pattern>0){let n=Math.max(Ei.color||0,Ei.pattern||0);bt.mats.skin.emissive.setRGB(n*.15,n*.2,n*.12),bt.mats.skin.emissiveMap||(bt.mats.skin.emissiveIntensity=1)}else bt.mats.skin.emissiveMap||bt.mats.skin.emissive.setRGB(0,0,0)}uS(i);let t=1-Math.exp(-i*(yt?1.4:2));bd.lerp(Dn,t),Fm.lerp(ds,t),hS(bd),_t.position.copy(bd),T.shake>.01&&_t.position.add(new P(mt()-.5,mt()-.5,0).multiplyScalar(T.shake*.05)),T.shake*=Math.exp(-i*5),_t.lookAt(Fm),_t.updateMatrixWorld(),cm(Ue,T.gt,i,{leverHint:e==="build"&&!T.alive&&T.pel>4||e==="order"&&Ee&&Ee.phase==="build",shake:T.shake}),Oa.strength=(e==="menu"||e==="end"?.2:.3)*Gs[T.q].bloom,vm(En,i,Wn*kn.getPixelRatio()*.5/Math.tan(Ta.degToRad(_t.fov/2))),(e==="show"||e==="order")&&Math.floor(T.gt*8)!==T._h&&(T._h=Math.floor(T.gt*8),Ai())}function Ym(){Vn.render()}var Sn={n:0,acc:0,frames:0,bad:0,since:0};function dS(i){if(!document.hidden&&(Sn.since+=i,!(Sn.since<6||i>.25)&&(Sn.acc+=i,Sn.frames++,Sn.acc>=1))){let e=Sn.frames/Sn.acc;if(Sn.acc=0,Sn.frames=0,Sn.n++,Sn.bad=e<32?Sn.bad+1:0,Sn.last=e,!T.qUser&&!window.__mmNoAutoQ&&Sn.bad>=4&&T.q!=="low"){let t=["low","mid","high","ultra"],n=t[t.indexOf(T.q)-1];bh(n),Xm(`${De("autoQ")} ${De("q_"+n)} (${Math.round(e)} fps)`),Sn.bad=0,Sn.since=0}}}ka(Et);bh(T.q);bo();za();ut.life=1;T.alive=!0;try{kn.compile(qn,_t)}catch{}for(let i=0;i<60;i++)Sh(1/30);var xh=performance.now();function Zm(i){let e=Math.max(0,(i-xh)/1e3)||0;return xh=Math.max(xh,i||0),window.__mmManual||(Sh(e),dS(e)),e}function $m(i){Zm(i),Ym(),requestAnimationFrame($m)}requestAnimationFrame($m);window.__mm={S:T,MP:ut,L:Ue,step:(i,e=1)=>{for(let t=0;t<e;t++)Sh(i);Ym()},stepq:(i,e=1)=>{for(let t=0;t<e;t++)Sh(i)},log:_o,quality:i=>i?bh(i,!0):T.q,renderer:kn,start:So,end:$i,toMenu:za,pull:Eh,set:Cd,spec:()=>({...Et}),setSpec:i=>ka(i,"all"),randomize:Pd,stats:()=>Vs(Et),name:()=>mo(Et,T.lang),M:()=>bt,LV:()=>yt,roarDown:wh,roarUp:Dd,C:()=>L&&{kind:L.kind,phase:L.phase,m:L.m,zone:L.zone,n:L.n,pts:L.pts,done:L.done,hearts:L.hearts,range:L.range,scared:L.scared,spawned:L.spawned,N:L.n,seq:L.seq,k:L.k,res:L.res,respB:L.respB,callB:L.callB,r:L.r,win:L.win},scare:Th,vill:()=>Ln.map(i=>({lane:i.lane,st:i.st,rem:i.len-i.d})),dance:Nd,beat:()=>Wt.beat(T.gt),spb:()=>Wt.spb,O:()=>Ee&&{phase:Ee.phase,reqs:Ee.reqs.slice(),met:Ee.reqs.filter(i=>fr(Et,i)).length,tLeft:Ee.tLeft,stars:Ee.stars},has:i=>fr(Et,i),cam:()=>({p:_t.position.toArray(),near:_t.near}),camClear:()=>Math.min(...Ue.colliders.map(i=>(Dn.subVectors(_t.position,i.p),Dn.y*=.45,Dn.length()-i.r))),screen:i=>(ei.set(...i).project(_t),{x:(ei.x*.5+.5)*Nn,y:(-ei.y*.5+.5)*Wn}),fps:Sn,card:Fd,sparks:()=>{let i=0;for(let e=0;e<En.n;e++)En.life[e]>0&&i++;return i},diff:()=>T.diff,advance:Zm,challenge:i=>{Ah(),T.state="show",T.chI=["roar","scare","dance"].indexOf(i),L=null,Id(i)},spawn:()=>Ad(),last:()=>xh,_dbg:{scene:qn,camera:_t,composer:Vn,bloom:Oa,F:En}};document.body.classList.add("ready");})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
