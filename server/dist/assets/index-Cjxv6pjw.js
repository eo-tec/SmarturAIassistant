(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var nh={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function Zx(){if(O_)return Co;O_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var P_;function Kx(){return P_||(P_=1,nh.exports=Zx()),nh.exports}var nt=Kx(),ih={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function Qx(){if(z_)return ot;z_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function _(N,Q,ye){this.props=N,this.context=Q,this.refs=y,this.updater=ye||T}_.prototype.isReactComponent={},_.prototype.setState=function(N,Q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Q,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function C(){}C.prototype=_.prototype;function L(N,Q,ye){this.props=N,this.context=Q,this.refs=y,this.updater=ye||T}var U=L.prototype=new C;U.constructor=L,E(U,_.prototype),U.isPureReactComponent=!0;var H=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(N,Q,ye){var Me=ye.ref;return{$$typeof:s,type:N,key:Q,ref:Me!==void 0?Me:null,props:ye}}function D(N,Q){return w(N.type,Q,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ne(N){var Q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return Q[ye]})}var ue=/\/+/g;function ve(N,Q){return typeof N=="object"&&N!==null&&N.key!=null?ne(""+N.key):Q.toString(36)}function he(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(Q){N.status==="pending"&&(N.status="fulfilled",N.value=Q)},function(Q){N.status==="pending"&&(N.status="rejected",N.reason=Q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,Q,ye,Me,Re){var J=typeof N;(J==="undefined"||J==="boolean")&&(N=null);var ae=!1;if(N===null)ae=!0;else switch(J){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(N.$$typeof){case s:case e:ae=!0;break;case g:return ae=N._init,z(ae(N._payload),Q,ye,Me,Re)}}if(ae)return Re=Re(N),ae=Me===""?"."+ve(N,0):Me,H(Re)?(ye="",ae!=null&&(ye=ae.replace(ue,"$&/")+"/"),z(Re,Q,ye,"",function(ke){return ke})):Re!=null&&(G(Re)&&(Re=D(Re,ye+(Re.key==null||N&&N.key===Re.key?"":(""+Re.key).replace(ue,"$&/")+"/")+ae)),Q.push(Re)),1;ae=0;var Ue=Me===""?".":Me+":";if(H(N))for(var Be=0;Be<N.length;Be++)Me=N[Be],J=Ue+ve(Me,Be),ae+=z(Me,Q,ye,J,Re);else if(Be=M(N),typeof Be=="function")for(N=Be.call(N),Be=0;!(Me=N.next()).done;)Me=Me.value,J=Ue+ve(Me,Be++),ae+=z(Me,Q,ye,J,Re);else if(J==="object"){if(typeof N.then=="function")return z(he(N),Q,ye,Me,Re);throw Q=String(N),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ae}function Z(N,Q,ye){if(N==null)return N;var Me=[],Re=0;return z(N,Me,"","",function(J){return Q.call(ye,J,Re++)}),Me}function X(N){if(N._status===-1){var Q=N._result;Q=Q(),Q.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=Q)}if(N._status===1)return N._result.default;throw N._result}var ce=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ge={map:Z,forEach:function(N,Q,ye){Z(N,function(){Q.apply(this,arguments)},ye)},count:function(N){var Q=0;return Z(N,function(){Q++}),Q},toArray:function(N){return Z(N,function(Q){return Q})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ot.Activity=v,ot.Children=ge,ot.Component=_,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=L,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ot.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ot.cache=function(N){return function(){return N.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(N,Q,ye){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Me=E({},N.props),Re=N.key;if(Q!=null)for(J in Q.key!==void 0&&(Re=""+Q.key),Q)!W.call(Q,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&Q.ref===void 0||(Me[J]=Q[J]);var J=arguments.length-2;if(J===1)Me.children=ye;else if(1<J){for(var ae=Array(J),Ue=0;Ue<J;Ue++)ae[Ue]=arguments[Ue+2];Me.children=ae}return w(N.type,Re,Me)},ot.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ot.createElement=function(N,Q,ye){var Me,Re={},J=null;if(Q!=null)for(Me in Q.key!==void 0&&(J=""+Q.key),Q)W.call(Q,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Re[Me]=Q[Me]);var ae=arguments.length-2;if(ae===1)Re.children=ye;else if(1<ae){for(var Ue=Array(ae),Be=0;Be<ae;Be++)Ue[Be]=arguments[Be+2];Re.children=Ue}if(N&&N.defaultProps)for(Me in ae=N.defaultProps,ae)Re[Me]===void 0&&(Re[Me]=ae[Me]);return w(N,J,Re)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(N){return{$$typeof:d,render:N}},ot.isValidElement=G,ot.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:X}},ot.memo=function(N,Q){return{$$typeof:p,type:N,compare:Q===void 0?null:Q}},ot.startTransition=function(N){var Q=P.T,ye={};P.T=ye;try{var Me=N(),Re=P.S;Re!==null&&Re(ye,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(I,ce)}catch(J){ce(J)}finally{Q!==null&&ye.types!==null&&(Q.types=ye.types),P.T=Q}},ot.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ot.use=function(N){return P.H.use(N)},ot.useActionState=function(N,Q,ye){return P.H.useActionState(N,Q,ye)},ot.useCallback=function(N,Q){return P.H.useCallback(N,Q)},ot.useContext=function(N){return P.H.useContext(N)},ot.useDebugValue=function(){},ot.useDeferredValue=function(N,Q){return P.H.useDeferredValue(N,Q)},ot.useEffect=function(N,Q){return P.H.useEffect(N,Q)},ot.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ot.useId=function(){return P.H.useId()},ot.useImperativeHandle=function(N,Q,ye){return P.H.useImperativeHandle(N,Q,ye)},ot.useInsertionEffect=function(N,Q){return P.H.useInsertionEffect(N,Q)},ot.useLayoutEffect=function(N,Q){return P.H.useLayoutEffect(N,Q)},ot.useMemo=function(N,Q){return P.H.useMemo(N,Q)},ot.useOptimistic=function(N,Q){return P.H.useOptimistic(N,Q)},ot.useReducer=function(N,Q,ye){return P.H.useReducer(N,Q,ye)},ot.useRef=function(N){return P.H.useRef(N)},ot.useState=function(N){return P.H.useState(N)},ot.useSyncExternalStore=function(N,Q,ye){return P.H.useSyncExternalStore(N,Q,ye)},ot.useTransition=function(){return P.H.useTransition()},ot.version="19.2.0",ot}var B_;function Pd(){return B_||(B_=1,ih.exports=Qx()),ih.exports}var te=Pd(),ah={exports:{}},wo={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function Jx(){return I_||(I_=1,(function(s){function e(z,Z){var X=z.length;z.push(Z);e:for(;0<X;){var ce=X-1>>>1,ge=z[ce];if(0<l(ge,Z))z[ce]=Z,z[X]=ge,X=ce;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],X=z.pop();if(X!==Z){z[0]=X;e:for(var ce=0,ge=z.length,N=ge>>>1;ce<N;){var Q=2*(ce+1)-1,ye=z[Q],Me=Q+1,Re=z[Me];if(0>l(ye,X))Me<ge&&0>l(Re,ye)?(z[ce]=Re,z[Me]=X,ce=Me):(z[ce]=ye,z[Q]=X,ce=Q);else if(Me<ge&&0>l(Re,X))z[ce]=Re,z[Me]=X,ce=Me;else break e}}return Z}function l(z,Z){var X=z.sortIndex-Z.sortIndex;return X!==0?X:z.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,T=!1,E=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=z)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function H(z){if(E=!1,U(z),!T)if(i(m)!==null)T=!0,I||(I=!0,ne());else{var Z=i(p);Z!==null&&he(H,Z.startTime-z)}}var I=!1,P=-1,W=5,w=-1;function D(){return y?!0:!(s.unstable_now()-w<W)}function G(){if(y=!1,I){var z=s.unstable_now();w=z;var Z=!0;try{e:{T=!1,E&&(E=!1,C(P),P=-1),M=!0;var X=x;try{t:{for(U(z),v=i(m);v!==null&&!(v.expirationTime>z&&D());){var ce=v.callback;if(typeof ce=="function"){v.callback=null,x=v.priorityLevel;var ge=ce(v.expirationTime<=z);if(z=s.unstable_now(),typeof ge=="function"){v.callback=ge,U(z),Z=!0;break t}v===i(m)&&r(m),U(z)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var N=i(p);N!==null&&he(H,N.startTime-z),Z=!1}}break e}finally{v=null,x=X,M=!1}Z=void 0}}finally{Z?ne():I=!1}}}var ne;if(typeof L=="function")ne=function(){L(G)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ve=ue.port2;ue.port1.onmessage=G,ne=function(){ve.postMessage(null)}}else ne=function(){_(G,0)};function he(z,Z){P=_(function(){z(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var X=x;x=Z;try{return z()}finally{x=X}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=x;x=z;try{return Z()}finally{x=X}},s.unstable_scheduleCallback=function(z,Z,X){var ce=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ce+X:ce):X=ce,z){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=X+ge,z={id:g++,callback:Z,priorityLevel:z,startTime:X,expirationTime:ge,sortIndex:-1},X>ce?(z.sortIndex=X,e(p,z),i(m)===null&&z===i(p)&&(E?(C(P),P=-1):E=!0,he(H,X-ce))):(z.sortIndex=ge,e(m,z),T||M||(T=!0,I||(I=!0,ne()))),z},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(z){var Z=x;return function(){var X=x;x=Z;try{return z.apply(this,arguments)}finally{x=X}}}})(sh)),sh}var F_;function $x(){return F_||(F_=1,rh.exports=Jx()),rh.exports}var oh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function ey(){if(H_)return An;H_=1;var s=Pd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.2.0",An}var G_;function ty(){if(G_)return oh.exports;G_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),oh.exports=ey(),oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function ny(){if(V_)return wo;V_=1;var s=$x(),e=Pd(),i=ty();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,o=f;break}if(A===o){S=!0,o=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=c;break}if(A===o){S=!0,o=f,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var he=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ce=[],ge=-1;function N(t){return{current:t}}function Q(t){0>ge||(t.current=ce[ge],ce[ge]=null,ge--)}function ye(t,n){ge++,ce[ge]=t.current,t.current=n}var Me=N(null),Re=N(null),J=N(null),ae=N(null);function Ue(t,n){switch(ye(J,n),ye(Re,t),ye(Me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?i_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=i_(n),t=a_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Me),ye(Me,t)}function Be(){Q(Me),Q(Re),Q(J)}function ke(t){t.memoizedState!==null&&ye(ae,t);var n=Me.current,a=a_(n,t.type);n!==a&&(ye(Re,t),ye(Me,a))}function dt(t){Re.current===t&&(Q(Me),Q(Re)),ae.current===t&&(Q(ae),To._currentValue=X)}var rn,F;function bt(t){if(rn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);rn=n&&n[1]||"",F=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+t+F}var at=!1;function et(t,n){if(!t||at)return"";at=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var ie=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){ie=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){ie=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&ie&&typeof le.stack=="string")return[le.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var B=S.split(`
`),$=A.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===$.length)for(o=B.length-1,c=$.length-1;1<=o&&0<=c&&B[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==$[c]){var de=`
`+B[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=c);break}}}finally{at=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?bt(a):""}function We(t,n){switch(t.tag){case 26:case 27:case 5:return bt(t.type);case 16:return bt("Lazy");case 13:return t.child!==n&&n!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return et(t.type,!1);case 11:return et(t.type.render,!1);case 1:return et(t.type,!0);case 31:return bt("Activity");default:return""}}function Gt(t){try{var n="",a=null;do n+=We(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xe=Object.prototype.hasOwnProperty,st=s.unstable_scheduleCallback,Kt=s.unstable_cancelCallback,jt=s.unstable_shouldYield,O=s.unstable_requestPaint,b=s.unstable_now,ee=s.unstable_getCurrentPriorityLevel,pe=s.unstable_ImmediatePriority,Ee=s.unstable_UserBlockingPriority,fe=s.unstable_NormalPriority,Ze=s.unstable_LowPriority,Ce=s.unstable_IdlePriority,Ye=s.log,je=s.unstable_setDisableYieldValue,be=null,we=null;function Ke(t){if(typeof Ye=="function"&&je(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(be,t)}catch{}}var ze=Math.clz32?Math.clz32:k,Le=Math.log,lt=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Le(t)/lt|0)|0}var Ae=256,De=262144,Ie=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?c=Te(o):(S&=A,S!==0?c=Te(S):a||(a=A&~t,a!==0&&(c=Te(a))))):(A=o&~f,A!==0?c=Te(A):S!==0?c=Te(S):a||(a=o&~t,a!==0&&(c=Te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function rt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ti(t,n,a,o,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=S&~a;0<a;){var de=31-ze(a),_e=1<<de;A[de]=0,B[de]=-1;var ie=$[de];if(ie!==null)for($[de]=null,de=0;de<ie.length;de++){var le=ie[de];le!==null&&(le.lane&=-536870913)}a&=~_e}o!==0&&Bs(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Bs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ei(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Cr(t,n){var a=n&-n;return a=(a&42)!==0?1:wr(a),(a&(t.suspendedLanes|n))!==0?0:a}function wr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ja(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:R_(t.type))}function Is(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var kn=Math.random().toString(36).slice(2),sn="__reactFiber$"+kn,Sn="__reactProps$"+kn,da="__reactContainer$"+kn,Fs="__reactEvents$"+kn,Zu="__reactListeners$"+kn,Ku="__reactHandles$"+kn,Jo="__reactResources$"+kn,Za="__reactMarker$"+kn;function R(t){delete t[sn],delete t[Sn],delete t[Fs],delete t[Zu],delete t[Ku]}function q(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[da]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=f_(t);t!==null;){if(a=t[sn])return a;t=f_(t)}return n}t=a,a=t.parentNode}return null}function re(t){if(t=t[sn]||t[da]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function se(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function j(t){var n=t[Jo];return n||(n=t[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xe(t){t[Za]=!0}var Ne=new Set,Ge={};function Pe(t,n){Qe(t,n),Qe(t+"Capture",n)}function Qe(t,n){for(Ge[t]=n,t=0;t<n.length;t++)Ne.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},pt={};function Lt(t){return Xe.call(pt,t)?!0:Xe.call(Je,t)?!1:it.test(t)?pt[t]=!0:(Je[t]=!0,!1)}function Vt(t,n,a){if(Lt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Nt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function mt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function xn(t){if(!t._valueTracker){var n=Xt(t)?"checked":"value";t._valueTracker=Tt(t,n,""+t[n])}}function zi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Xt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ka=/[\n"\\]/g;function vt(t){return t.replace(Ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(t,n,a,o,c,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ve(n)):t.value!==""+Ve(n)&&(t.value=""+Ve(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?hn(t,S,Ve(n)):a!=null?hn(t,S,Ve(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Ve(A):t.removeAttribute("name")}function Un(t,n,a,o,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){xn(t);return}a=a!=null?""+Ve(a):"",n=n!=null?""+Ve(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),xn(t)}function hn(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function tn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ve(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ur(t,n,a){if(n!=null&&(n=""+Ve(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ve(a):""}function Ti(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(he(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ve(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),xn(t)}function Lr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var X0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||X0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function tp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&ep(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&ep(t,f,n[f])}function Qu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),q0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(t){return q0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var Ju=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nr=null,Or=null;function np(t){var n=re(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(bn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Sn]||null;if(!c)throw Error(r(90));bn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&zi(o)}break e;case"textarea":Ur(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&tn(t,!!a.multiple,n,!1)}}}var ec=!1;function ip(t,n,a){if(ec)return t(n,a);ec=!0;try{var o=t(n);return o}finally{if(ec=!1,(Nr!==null||Or!==null)&&(Hl(),Nr&&(n=Nr,t=Or,Or=Nr=null,np(n),t)))for(n=0;n<t.length;n++)np(t[n])}}function Hs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=!1;if(Ii)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){tc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{tc=!1}var pa=null,nc=null,el=null;function ap(){if(el)return el;var t,n=nc,a=n.length,o,c="value"in pa?pa.value:pa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return el=c.slice(t,1<o?1-o:void 0)}function tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function rp(){return!1}function On(t){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:rp,this.isPropagationStopped=rp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=On(Qa),Vs=v({},Qa,{view:0,detail:0}),Y0=On(Vs),ic,ac,ks,al=v({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(ic=t.screenX-ks.screenX,ac=t.screenY-ks.screenY):ac=ic=0,ks=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),sp=On(al),j0=v({},al,{dataTransfer:0}),Z0=On(j0),K0=v({},Vs,{relatedTarget:0}),rc=On(K0),Q0=v({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=On(Q0),$0=v({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eS=On($0),tS=v({},Qa,{data:0}),op=On(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=aS[t])?!!n[t]:!1}function sc(){return rS}var sS=v({},Vs,{key:function(t){if(t.key){var n=nS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oS=On(sS),lS=v({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=On(lS),uS=v({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),cS=On(uS),fS=v({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=On(fS),dS=v({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=On(dS),mS=v({},Qa,{newState:0,oldState:0}),gS=On(mS),_S=[9,13,27,32],oc=Ii&&"CompositionEvent"in window,Xs=null;Ii&&"documentMode"in document&&(Xs=document.documentMode);var vS=Ii&&"TextEvent"in window&&!Xs,up=Ii&&(!oc||Xs&&8<Xs&&11>=Xs),cp=" ",fp=!1;function hp(t,n){switch(t){case"keyup":return _S.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function SS(t,n){switch(t){case"compositionend":return dp(n);case"keypress":return n.which!==32?null:(fp=!0,cp);case"textInput":return t=n.data,t===cp&&fp?null:t;default:return null}}function xS(t,n){if(Pr)return t==="compositionend"||!oc&&hp(t,n)?(t=ap(),el=nc=pa=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yS[t.type]:n==="textarea"}function mp(t,n,a,o){Nr?Or?Or.push(o):Or=[o]:Nr=o,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ws=null,qs=null;function MS(t){Qg(t,0)}function rl(t){var n=se(t);if(zi(n))return t}function gp(t,n){if(t==="change")return n}var _p=!1;if(Ii){var lc;if(Ii){var uc="oninput"in document;if(!uc){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),uc=typeof vp.oninput=="function"}lc=uc}else lc=!1;_p=lc&&(!document.documentMode||9<document.documentMode)}function Sp(){Ws&&(Ws.detachEvent("onpropertychange",xp),qs=Ws=null)}function xp(t){if(t.propertyName==="value"&&rl(qs)){var n=[];mp(n,qs,t,$u(t)),ip(MS,n)}}function ES(t,n,a){t==="focusin"?(Sp(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",xp)):t==="focusout"&&Sp()}function TS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(qs)}function bS(t,n){if(t==="click")return rl(n)}function AS(t,n){if(t==="input"||t==="change")return rl(n)}function RS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:RS;function Ys(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Xe.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,n){var a=yp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yp(a)}}function Ep(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ep(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Tp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function cc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var CS=Ii&&"documentMode"in document&&11>=document.documentMode,zr=null,fc=null,js=null,hc=!1;function bp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hc||zr==null||zr!==gn(o)||(o=zr,"selectionStart"in o&&cc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Ys(js,o)||(js=o,o=Yl(fc,"onSelect"),0<o.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=zr)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Br={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},dc={},Ap={};Ii&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function $a(t){if(dc[t])return dc[t];if(!Br[t])return t;var n=Br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ap)return dc[t]=n[a];return t}var Rp=$a("animationend"),Cp=$a("animationiteration"),wp=$a("animationstart"),wS=$a("transitionrun"),DS=$a("transitionstart"),US=$a("transitioncancel"),Dp=$a("transitionend"),Up=new Map,pc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pc.push("scrollEnd");function di(t,n){Up.set(t,n),Pe(n,[t])}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Ir=0,mc=0;function ol(){for(var t=Ir,n=mc=Ir=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&Lp(a,c,f)}}function ll(t,n,a,o){ni[Ir++]=t,ni[Ir++]=n,ni[Ir++]=a,ni[Ir++]=o,mc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function gc(t,n,a,o){return ll(t,n,a,o),ul(t)}function er(t,n){return ll(t,null,null,n),ul(t)}function Lp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ze(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ul(t){if(50<_o)throw _o=0,Af=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Fr={};function LS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new LS(t,n,a,o)}function _c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Np(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,o,c,f){var S=0;if(o=t,typeof t=="function")_c(t)&&(S=1);else if(typeof t=="string")S=Bx(t,a,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Wn(31,a,n,c),t.elementType=w,t.lanes=f,t;case E:return tr(a.children,c,f,n);case y:S=8,c|=24;break;case _:return t=Wn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case H:return t=Wn(13,a,n,c),t.elementType=H,t.lanes=f,t;case I:return t=Wn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case C:S=9;break e;case U:S=11;break e;case P:S=14;break e;case W:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Wn(S,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function tr(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function vc(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Op(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function Sc(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Pp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=Pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Gt(n)},Pp.set(t,n),n)}return{value:t,source:n,stack:Gt(n)}}var Hr=[],Gr=0,fl=null,Zs=0,ai=[],ri=0,ma=null,bi=1,Ai="";function Hi(t,n){Hr[Gr++]=Zs,Hr[Gr++]=fl,fl=t,Zs=n}function zp(t,n,a){ai[ri++]=bi,ai[ri++]=Ai,ai[ri++]=ma,ma=t;var o=bi;t=Ai;var c=32-ze(o)-1;o&=~(1<<c),a+=1;var f=32-ze(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,bi=1<<32-ze(n)+c|a<<c|o,Ai=f+t}else bi=1<<f|a<<c|o,Ai=t}function xc(t){t.return!==null&&(Hi(t,1),zp(t,1,0))}function yc(t){for(;t===fl;)fl=Hr[--Gr],Hr[Gr]=null,Zs=Hr[--Gr],Hr[Gr]=null;for(;t===ma;)ma=ai[--ri],ai[ri]=null,Ai=ai[--ri],ai[ri]=null,bi=ai[--ri],ai[ri]=null}function Bp(t,n){ai[ri++]=bi,ai[ri++]=Ai,ai[ri++]=ma,bi=n.id,Ai=n.overflow,ma=t}var yn=null,Wt=null,yt=!1,ga=null,si=!1,Mc=Error(r(519));function _a(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ks(ii(n,t)),Mc}function Ip(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[Sn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)_t(So[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ti(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||_a(t,!0)}function Fp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:yn=yn.return}}function Vr(t){if(t!==yn)return!1;if(!yt)return Fp(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gf(t.type,t.memoizedProps)),a=!a),a&&Wt&&_a(t),Fp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Wt=c_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Wt=c_(t)}else n===27?(n=Wt,Ua(t.type)?(t=qf,qf=null,Wt=t):Wt=n):Wt=yn?li(t.stateNode.nextSibling):null;return!0}function nr(){Wt=yn=null,yt=!1}function Ec(){var t=ga;return t!==null&&(In===null?In=t:In.push.apply(In,t),ga=null),t}function Ks(t){ga===null?ga=[t]:ga.push(t)}var Tc=N(null),ir=null,Gi=null;function va(t,n,a){ye(Tc,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=Tc.current,Q(Tc)}function bc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ac(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=c;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),bc(f.return,a,t),o||(S=null);break e}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),bc(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function kr(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Xn(c.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(c===ae.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}c=c.return}t!==null&&Ac(n,t,a,o),n.flags|=262144}function hl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Hp(ir,t)}function dl(t,n){return ir===null&&ar(t),Hp(t,n)}function Hp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var NS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},OS=s.unstable_scheduleCallback,PS=s.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rc(){return{controller:new NS,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&OS(PS,function(){t.controller.abort()})}var Js=null,Cc=0,Xr=0,Wr=null;function zS(t,n){if(Js===null){var a=Js=[];Cc=0,Xr=Lf(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cc++,n.then(Gp,Gp),n}function Gp(){if(--Cc===0&&Js!==null){Wr!==null&&(Wr.status="fulfilled");var t=Js;Js=null,Xr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function BS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Vp=z.S;z.S=function(t,n){bg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zS(t,n),Vp!==null&&Vp(t,n)};var rr=N(null);function wc(){var t=rr.current;return t!==null?t:kt.pooledCache}function pl(t,n){n===null?ye(rr,rr.current):ye(rr,n.pool)}function kp(){var t=wc();return t===null?null:{parent:on._currentValue,pool:t}}var qr=Error(r(460)),Dc=Error(r(474)),ml=Error(r(542)),gl={then:function(){}};function Xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t}throw or=n,qr}}function sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,qr):a}}var or=null;function qp(){if(or===null)throw Error(r(459));var t=or;return or=null,t}function Yp(t){if(t===qr||t===ml)throw Error(r(483))}var Yr=null,$s=0;function _l(t){var n=$s;return $s+=1,Yr===null&&(Yr=[]),Wp(Yr,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jp(t){function n(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Fi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function S(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,K,me){return V===null||V.tag!==6?(V=vc(K,Y.mode,me),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function B(Y,V,K,me){var $e=K.type;return $e===E?de(Y,V,K.props.children,me,K.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===W&&sr($e)===V.type)?(V=c(V,K.props),eo(V,K),V.return=Y,V):(V=cl(K.type,K.key,K.props,null,Y.mode,me),eo(V,K),V.return=Y,V)}function $(Y,V,K,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Sc(K,Y.mode,me),V.return=Y,V):(V=c(V,K.children||[]),V.return=Y,V)}function de(Y,V,K,me,$e){return V===null||V.tag!==7?(V=tr(K,Y.mode,me,$e),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function _e(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=vc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return K=cl(V.type,V.key,V.props,null,Y.mode,K),eo(K,V),K.return=Y,K;case T:return V=Sc(V,Y.mode,K),V.return=Y,V;case W:return V=sr(V),_e(Y,V,K)}if(he(V)||ne(V))return V=tr(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return _e(Y,_l(V),K);if(V.$$typeof===L)return _e(Y,dl(Y,V),K);vl(Y,V)}return null}function ie(Y,V,K,me){var $e=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return $e!==null?null:A(Y,V,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===$e?B(Y,V,K,me):null;case T:return K.key===$e?$(Y,V,K,me):null;case W:return K=sr(K),ie(Y,V,K,me)}if(he(K)||ne(K))return $e!==null?null:de(Y,V,K,me,null);if(typeof K.then=="function")return ie(Y,V,_l(K),me);if(K.$$typeof===L)return ie(Y,V,dl(Y,K),me);vl(Y,K)}return null}function le(Y,V,K,me,$e){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(K)||null,A(V,Y,""+me,$e);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case M:return Y=Y.get(me.key===null?K:me.key)||null,B(V,Y,me,$e);case T:return Y=Y.get(me.key===null?K:me.key)||null,$(V,Y,me,$e);case W:return me=sr(me),le(Y,V,K,me,$e)}if(he(me)||ne(me))return Y=Y.get(K)||null,de(V,Y,me,$e,null);if(typeof me.then=="function")return le(Y,V,K,_l(me),$e);if(me.$$typeof===L)return le(Y,V,K,dl(V,me),$e);vl(V,me)}return null}function He(Y,V,K,me){for(var $e=null,At=null,qe=V,ct=V=0,xt=null;qe!==null&&ct<K.length;ct++){qe.index>ct?(xt=qe,qe=null):xt=qe.sibling;var Rt=ie(Y,qe,K[ct],me);if(Rt===null){qe===null&&(qe=xt);break}t&&qe&&Rt.alternate===null&&n(Y,qe),V=f(Rt,V,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt,qe=xt}if(ct===K.length)return a(Y,qe),yt&&Hi(Y,ct),$e;if(qe===null){for(;ct<K.length;ct++)qe=_e(Y,K[ct],me),qe!==null&&(V=f(qe,V,ct),At===null?$e=qe:At.sibling=qe,At=qe);return yt&&Hi(Y,ct),$e}for(qe=o(qe);ct<K.length;ct++)xt=le(qe,Y,ct,K[ct],me),xt!==null&&(t&&xt.alternate!==null&&qe.delete(xt.key===null?ct:xt.key),V=f(xt,V,ct),At===null?$e=xt:At.sibling=xt,At=xt);return t&&qe.forEach(function(za){return n(Y,za)}),yt&&Hi(Y,ct),$e}function tt(Y,V,K,me){if(K==null)throw Error(r(151));for(var $e=null,At=null,qe=V,ct=V=0,xt=null,Rt=K.next();qe!==null&&!Rt.done;ct++,Rt=K.next()){qe.index>ct?(xt=qe,qe=null):xt=qe.sibling;var za=ie(Y,qe,Rt.value,me);if(za===null){qe===null&&(qe=xt);break}t&&qe&&za.alternate===null&&n(Y,qe),V=f(za,V,ct),At===null?$e=za:At.sibling=za,At=za,qe=xt}if(Rt.done)return a(Y,qe),yt&&Hi(Y,ct),$e;if(qe===null){for(;!Rt.done;ct++,Rt=K.next())Rt=_e(Y,Rt.value,me),Rt!==null&&(V=f(Rt,V,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt);return yt&&Hi(Y,ct),$e}for(qe=o(qe);!Rt.done;ct++,Rt=K.next())Rt=le(qe,Y,ct,Rt.value,me),Rt!==null&&(t&&Rt.alternate!==null&&qe.delete(Rt.key===null?ct:Rt.key),V=f(Rt,V,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt);return t&&qe.forEach(function(jx){return n(Y,jx)}),yt&&Hi(Y,ct),$e}function Ft(Y,V,K,me){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:e:{for(var $e=K.key;V!==null;){if(V.key===$e){if($e=K.type,$e===E){if(V.tag===7){a(Y,V.sibling),me=c(V,K.props.children),me.return=Y,Y=me;break e}}else if(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===W&&sr($e)===V.type){a(Y,V.sibling),me=c(V,K.props),eo(me,K),me.return=Y,Y=me;break e}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===E?(me=tr(K.props.children,Y.mode,me,K.key),me.return=Y,Y=me):(me=cl(K.type,K.key,K.props,null,Y.mode,me),eo(me,K),me.return=Y,Y=me)}return S(Y);case T:e:{for($e=K.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),me=c(V,K.children||[]),me.return=Y,Y=me;break e}else{a(Y,V);break}else n(Y,V);V=V.sibling}me=Sc(K,Y.mode,me),me.return=Y,Y=me}return S(Y);case W:return K=sr(K),Ft(Y,V,K,me)}if(he(K))return He(Y,V,K,me);if(ne(K)){if($e=ne(K),typeof $e!="function")throw Error(r(150));return K=$e.call(K),tt(Y,V,K,me)}if(typeof K.then=="function")return Ft(Y,V,_l(K),me);if(K.$$typeof===L)return Ft(Y,V,dl(Y,K),me);vl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),me=c(V,K),me.return=Y,Y=me):(a(Y,V),me=vc(K,Y.mode,me),me.return=Y,Y=me),S(Y)):a(Y,V)}return function(Y,V,K,me){try{$s=0;var $e=Ft(Y,V,K,me);return Yr=null,$e}catch(qe){if(qe===qr||qe===ml)throw qe;var At=Wn(29,qe,null,Y.mode);return At.lanes=me,At.return=Y,At}finally{}}}var lr=jp(!0),Zp=jp(!1),Sa=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ul(t),Lp(t,null,a),n}return ll(t,o,n,a),ul(t)}function to(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ei(t,a)}}function Nc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Oc=!1;function no(){if(Oc){var t=Wr;if(t!==null)throw t}}function io(t,n,a,o){Oc=!1;var c=t.updateQueue;Sa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var B=A,$=B.next;B.next=null,S===null?f=$:S.next=$,S=B;var de=t.alternate;de!==null&&(de=de.updateQueue,A=de.lastBaseUpdate,A!==S&&(A===null?de.firstBaseUpdate=$:A.next=$,de.lastBaseUpdate=B))}if(f!==null){var _e=c.baseState;S=0,de=$=B=null,A=f;do{var ie=A.lane&-536870913,le=ie!==A.lane;if(le?(St&ie)===ie:(o&ie)===ie){ie!==0&&ie===Xr&&(Oc=!0),de!==null&&(de=de.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var He=t,tt=A;ie=n;var Ft=a;switch(tt.tag){case 1:if(He=tt.payload,typeof He=="function"){_e=He.call(Ft,_e,ie);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=tt.payload,ie=typeof He=="function"?He.call(Ft,_e,ie):He,ie==null)break e;_e=v({},_e,ie);break e;case 2:Sa=!0}}ie=A.callback,ie!==null&&(t.flags|=64,le&&(t.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ie]:le.push(ie))}else le={lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},de===null?($=de=le,B=_e):de=de.next=le,S|=ie;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;le=A,A=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(B=_e),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Aa|=S,t.lanes=S,t.memoizedState=_e}}function Kp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Qp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Kp(a[t],n)}var jr=N(null),Sl=N(0);function Jp(t,n){t=Qi,ye(Sl,t),ye(jr,n),Qi=t|n.baseLanes}function Pc(){ye(Sl,Qi),ye(jr,jr.current)}function zc(){Qi=Sl.current,Q(jr),Q(Sl)}var qn=N(null),oi=null;function Ma(t){var n=t.alternate;ye(nn,nn.current&1),ye(qn,t),oi===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(oi=t)}function Bc(t){ye(nn,nn.current),ye(qn,t),oi===null&&(oi=t)}function $p(t){t.tag===22?(ye(nn,nn.current),ye(qn,t),oi===null&&(oi=t)):Ea()}function Ea(){ye(nn,nn.current),ye(qn,qn.current)}function Yn(t){Q(qn),oi===t&&(oi=null),Q(nn)}var nn=N(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,ut=null,Bt=null,ln=null,yl=!1,Zr=!1,ur=!1,Ml=0,ao=0,Kr=null,IS=0;function Qt(){throw Error(r(321))}function Ic(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Fc(t,n,a,o,c,f){return ki=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?zm:ef,ur=!1,f=a(o,c),ur=!1,Zr&&(f=tm(n,a,o,c)),em(t),f}function em(t){z.H=oo;var n=Bt!==null&&Bt.next!==null;if(ki=0,ln=Bt=ut=null,yl=!1,ao=0,Kr=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&hl(t)&&(un=!0))}function tm(t,n,a,o){ut=t;var c=0;do{if(Zr&&(Kr=null),ao=0,Zr=!1,25<=c)throw Error(r(301));if(c+=1,ln=Bt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Bm,f=n(a,o)}while(Zr);return f}function FS(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(ut.flags|=1024),n}function Hc(){var t=Ml!==0;return Ml=0,t}function Gc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vc(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}ki=0,ln=Bt=ut=null,Zr=!1,ao=Ml=0,Kr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ut.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(Bt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=ln===null?ut.memoizedState:ln.next;if(n!==null)ln=n,Bt=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},ln===null?ut.memoizedState=ln=t:ln=ln.next=t}return ln}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=ao;return ao+=1,Kr===null&&(Kr=[]),t=Wp(Kr,t,n),n=ut,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?zm:ef),t}function Tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===L)return Mn(t)}throw Error(r(438,String(t)))}function kc(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function bl(t){var n=an();return Xc(n,Bt,t)}function Xc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=S=null,B=null,$=n,de=!1;do{var _e=$.lane&-536870913;if(_e!==$.lane?(St&_e)===_e:(ki&_e)===_e){var ie=$.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_e===Xr&&(de=!0);else if((ki&ie)===ie){$=$.next,ie===Xr&&(de=!0);continue}else _e={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=_e,S=f):B=B.next=_e,ut.lanes|=ie,Aa|=ie;_e=$.action,ur&&a(f,_e),f=$.hasEagerState?$.eagerState:a(f,_e)}else ie={lane:_e,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=ie,S=f):B=B.next=ie,ut.lanes|=_e,Aa|=_e;$=$.next}while($!==null&&$!==n);if(B===null?S=f:B.next=A,!Xn(f,t.memoizedState)&&(un=!0,de&&(a=Wr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Wc(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Xn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function nm(t,n,a){var o=ut,c=an(),f=yt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Xn((Bt||c).memoizedState,a);if(S&&(c.memoizedState=a,un=!0),c=c.queue,jc(rm.bind(null,o,c,t),[t]),c.getSnapshot!==n||S||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Qr(9,{destroy:void 0},am.bind(null,o,c,a,n),null),kt===null)throw Error(r(349));f||(ki&127)!==0||im(o,n,a)}return a}function im(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=El(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function am(t,n,a,o){n.value=a,n.getSnapshot=o,sm(n)&&om(t)}function rm(t,n,a){return a(function(){sm(n)&&om(t)})}function sm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function om(t){var n=er(t,2);n!==null&&Fn(n,t,2)}function qc(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ur){Ke(!0);try{a()}finally{Ke(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function lm(t,n,a,o){return t.baseState=a,Xc(t,Bt,typeof o=="function"?o:Xi)}function HS(t,n,a,o,c){if(Cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,um(n,f)):(f.next=a.next,n.pending=a.next=f)}}function um(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=z.T,S={};z.T=S;try{var A=a(c,o),B=z.S;B!==null&&B(S,A),cm(t,n,A)}catch($){Yc(t,n,$)}finally{f!==null&&S.types!==null&&(f.types=S.types),z.T=f}}else try{f=a(c,o),cm(t,n,f)}catch($){Yc(t,n,$)}}function cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){fm(t,n,o)},function(o){return Yc(t,n,o)}):fm(t,n,a)}function fm(t,n,a){n.status="fulfilled",n.value=a,hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,um(t,a)))}function Yc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,hm(n),n=n.next;while(n!==o)}t.action=null}function hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dm(t,n){return n}function pm(t,n){if(yt){var a=kt.formState;if(a!==null){e:{var o=ut;if(yt){if(Wt){t:{for(var c=Wt,f=si;c.nodeType!==8;){if(!f){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Wt=li(c.nextSibling),o=c.data==="F!";break e}}_a(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:n},a.queue=o,a=Nm.bind(null,ut,o),o.dispatch=a,o=qc(!1),f=$c.bind(null,ut,!1,o.queue),o=Ln(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=HS.bind(null,ut,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function mm(t){var n=an();return gm(n,Bt,t)}function gm(t,n,a){if(n=Xc(t,n,dm)[0],t=bl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ro(n)}catch(S){throw S===qr?ml:S}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,Qr(9,{destroy:void 0},GS.bind(null,c,a),null)),[o,f,t]}function GS(t,n){t.action=n}function _m(t){var n=an(),a=Bt;if(a!==null)return gm(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Qr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=El(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function vm(){return an().memoizedState}function Al(t,n,a,o){var c=Ln();ut.flags|=t,c.memoizedState=Qr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Rl(t,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Bt!==null&&o!==null&&Ic(o,Bt.memoizedState.deps)?c.memoizedState=Qr(n,f,a,o):(ut.flags|=t,c.memoizedState=Qr(1|n,f,a,o))}function Sm(t,n){Al(8390656,8,t,n)}function jc(t,n){Rl(2048,8,t,n)}function VS(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=El(),ut.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function xm(t){var n=an().memoizedState;return VS({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ym(t,n){return Rl(4,2,t,n)}function Mm(t,n){return Rl(4,4,t,n)}function Em(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Tm(t,n,a){a=a!=null?a.concat([t]):null,Rl(4,4,Em.bind(null,n,t),a)}function Zc(){}function bm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ic(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Am(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ic(n,o[1]))return o[0];if(o=t(),ur){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[o,n],o}function Kc(t,n,a){return a===void 0||(ki&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Rg(),ut.lanes|=t,Aa|=t,a)}function Rm(t,n,a,o){return Xn(a,n)?a:jr.current!==null?(t=Kc(t,a,o),Xn(t,n)||(un=!0),t):(ki&42)===0||(ki&1073741824)!==0&&(St&261930)===0?(un=!0,t.memoizedState=a):(t=Rg(),ut.lanes|=t,Aa|=t,n)}function Cm(t,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=z.T,A={};z.T=A,$c(t,!1,n,a);try{var B=c(),$=z.S;if($!==null&&$(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=BS(B,o);so(t,n,de,Kn(t))}else so(t,n,o,Kn(t))}catch(_e){so(t,n,{then:function(){},status:"rejected",reason:_e},Kn())}finally{Z.p=f,S!==null&&A.types!==null&&(S.types=A.types),z.T=S}}function kS(){}function Qc(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=wm(t).queue;Cm(t,c,n,X,a===null?kS:function(){return Dm(t),a(o)})}function wm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Dm(t){var n=wm(t);n.next===null&&(n=t.alternate.memoizedState),so(t,n.next.queue,{},Kn())}function Jc(){return Mn(To)}function Um(){return an().memoizedState}function Lm(){return an().memoizedState}function XS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=xa(a);var o=ya(n,t,a);o!==null&&(Fn(o,n,a),to(o,n,a)),n={cache:Rc()},t.payload=n;return}n=n.return}}function WS(t,n,a){var o=Kn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?Om(n,a):(a=gc(t,n,a,o),a!==null&&(Fn(a,t,o),Pm(a,n,o)))}function Nm(t,n,a){var o=Kn();so(t,n,a,o)}function so(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))Om(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,Xn(A,S))return ll(t,n,c,0),kt===null&&ol(),!1}catch{}finally{}if(a=gc(t,n,c,o),a!==null)return Fn(a,t,o),Pm(a,n,o),!0}return!1}function $c(t,n,a,o){if(o={lane:2,revertLane:Lf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(r(479))}else n=gc(t,a,o,2),n!==null&&Fn(n,t,2)}function Cl(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function Om(t,n){Zr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Pm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ei(t,a)}}var oo={readContext:Mn,use:Tl,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt};oo.useEffectEvent=Qt;var zm={readContext:Mn,use:Tl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Sm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,Em.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var o=t();if(ur){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Ln();if(a!==void 0){var c=a(n);if(ur){Ke(!0);try{a(n)}finally{Ke(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=WS.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=qc(t);var n=t.queue,a=Nm.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zc,useDeferredValue:function(t,n){var a=Ln();return Kc(a,t,n)},useTransition:function(){var t=qc(!1);return t=Cm.bind(null,ut,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,c=Ln();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(St&127)!==0||im(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Sm(rm.bind(null,o,f,t),[t]),o.flags|=2048,Qr(9,{destroy:void 0},am.bind(null,o,f,a,n),null),a},useId:function(){var t=Ln(),n=kt.identifierPrefix;if(yt){var a=Ai,o=bi;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=IS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Jc,useFormState:pm,useActionState:pm,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$c.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:kc,useCacheRefresh:function(){return Ln().memoizedState=XS.bind(null,ut)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ef={readContext:Mn,use:Tl,useCallback:bm,useContext:Mn,useEffect:jc,useImperativeHandle:Tm,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:bl,useRef:vm,useState:function(){return bl(Xi)},useDebugValue:Zc,useDeferredValue:function(t,n){var a=an();return Rm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=bl(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:Jc,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=an();return lm(a,Bt,t,n)},useMemoCache:kc,useCacheRefresh:Lm};ef.useEffectEvent=xm;var Bm={readContext:Mn,use:Tl,useCallback:bm,useContext:Mn,useEffect:jc,useImperativeHandle:Tm,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:Wc,useRef:vm,useState:function(){return Wc(Xi)},useDebugValue:Zc,useDeferredValue:function(t,n){var a=an();return Bt===null?Kc(a,t,n):Rm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Wc(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:Jc,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var a=an();return Bt!==null?lm(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:kc,useCacheRefresh:Lm};Bm.useEffectEvent=xm;function tf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),c=xa(o);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,o),n!==null&&(Fn(n,t,o),to(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),c=xa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,o),n!==null&&(Fn(n,t,o),to(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(t,o,a),n!==null&&(Fn(n,t,a),to(n,t,a))}};function Im(t,n,a,o,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,o)||!Ys(c,f):!0}function Fm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&nf.enqueueReplaceState(n,n.state,null)}function cr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Hm(t){sl(t)}function Gm(t){console.error(t)}function Vm(t){sl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function km(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function af(t,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Xm(t){return t=xa(t),t.tag=3,t}function Wm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){km(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){km(n,a,o),typeof c!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function qS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Gl():a.alternate===null&&Jt===0&&(Jt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(t,o,c)),!1;case 22:return a.flags|=65536,o===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(t,o,c)),!1}throw Error(r(435,a.tag))}return wf(t,o,c),Gl(),!1}if(yt)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Mc&&(t=Error(r(422),{cause:o}),Ks(ii(t,a)))):(o!==Mc&&(n=Error(r(423),{cause:o}),Ks(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ii(o,a),c=af(t.stateNode,o,c),Nc(t,c),Jt!==4&&(Jt=2)),!1;var f=Error(r(520),{cause:o});if(f=ii(f,a),go===null?go=[f]:go.push(f),Jt!==4&&(Jt=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=af(a.stateNode,o,t),Nc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Xm(c),Wm(c,t,a,o),Nc(a,c),!1}a=a.return}while(a!==null);return!1}var rf=Error(r(461)),un=!1;function En(t,n,a,o){n.child=t===null?Zp(n,null,a,o):lr(n,t.child,a,o)}function qm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return ar(n),o=Fc(t,n,a,S,f,c),A=Hc(),t!==null&&!un?(Gc(t,n,c),Wi(t,n,c)):(yt&&A&&xc(n),n.flags|=1,En(t,n,o,c),n.child)}function Ym(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!_c(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,jm(t,n,f,o,c)):(t=cl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!df(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(S,o)&&t.ref===n.ref)return Wi(t,n,c)}return n.flags|=1,t=Fi(f,o),t.ref=n.ref,t.return=n,n.child=t}function jm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Ys(f,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=f,df(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Wi(t,n,c)}return sf(t,n,a,o,c)}function Zm(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Km(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Jp(n,f):Pc(),$p(n);else return o=n.lanes=536870912,Km(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(pl(n,f.cachePool),Jp(n,f),Ea(),n.memoizedState=null):(t!==null&&pl(n,null),Pc(),Ea());return En(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Km(t,n,a,o,c){var f=wc();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&pl(n,null),Pc(),$p(n),t!==null&&kr(t,n,o,!0),n.childLanes=c,null}function Dl(t,n){return n=Ll({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Qm(t,n,a){return lr(n,t.child,null,a),t=Dl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function YS(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Dl(n,o),n.lanes=536870912,lo(null,t);if(Bc(n),(t=Wt)?(t=u_(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ma!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=Op(t),a.return=n,n.child=a,yn=n,Wt=null)):t=null,t===null)throw _a(n);return n.lanes=536870912,null}return Dl(n,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(Bc(n),c)if(n.flags&256)n.flags&=-257,n=Qm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||kr(t,n,a,!1),c=(a&t.childLanes)!==0,un||c){if(o=kt,o!==null&&(S=Cr(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,er(t,S),Fn(o,t,S),rf;Gl(),n=Qm(t,n,a)}else t=f.treeContext,Wt=li(S.nextSibling),yn=n,yt=!0,ga=null,si=!1,t!==null&&Bp(n,t),n=Dl(n,o),n.flags|=4096;return n}return t=Fi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sf(t,n,a,o,c){return ar(n),a=Fc(t,n,a,o,void 0,c),o=Hc(),t!==null&&!un?(Gc(t,n,c),Wi(t,n,c)):(yt&&o&&xc(n),n.flags|=1,En(t,n,a,c),n.child)}function Jm(t,n,a,o,c,f){return ar(n),n.updateQueue=null,a=tm(n,o,a,c),em(t),o=Hc(),t!==null&&!un?(Gc(t,n,f),Wi(t,n,f)):(yt&&o&&xc(n),n.flags|=1,En(t,n,a,f),n.child)}function $m(t,n,a,o,c){if(ar(n),n.stateNode===null){var f=Fr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Mn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Uc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Mn(S):Fr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(tf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&nf.enqueueReplaceState(f,f.state,null),io(n,o,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=cr(a,A);f.props=B;var $=f.context,de=a.contextType;S=Fr,typeof de=="object"&&de!==null&&(S=Mn(de));var _e=a.getDerivedStateFromProps;de=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==S)&&Fm(n,f,o,S),Sa=!1;var ie=n.memoizedState;f.state=ie,io(n,o,f,c),no(),$=n.memoizedState,A||ie!==$||Sa?(typeof _e=="function"&&(tf(n,a,_e,o),$=n.memoizedState),(B=Sa||Im(n,a,B,o,ie,$,S))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=S,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Lc(t,n),S=n.memoizedProps,de=cr(a,S),f.props=de,_e=n.pendingProps,ie=f.context,$=a.contextType,B=Fr,typeof $=="object"&&$!==null&&(B=Mn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_e||ie!==B)&&Fm(n,f,o,B),Sa=!1,ie=n.memoizedState,f.state=ie,io(n,o,f,c),no();var le=n.memoizedState;S!==_e||ie!==le||Sa||t!==null&&t.dependencies!==null&&hl(t.dependencies)?(typeof A=="function"&&(tf(n,a,A,o),le=n.memoizedState),(de=Sa||Im(n,a,de,o,ie,le,B)||t!==null&&t.dependencies!==null&&hl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=B,o=de):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ul(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=lr(n,t.child,null,c),n.child=lr(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Wi(t,n,c),t}function eg(t,n,a,o){return nr(),n.flags|=256,En(t,n,a,o),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(t){return{baseLanes:t,cachePool:kp()}}function uf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function tg(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(c?Ma(n):Ea(),(t=Wt)?(t=u_(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ma!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=Op(t),a.return=n,n.child=a,yn=n,Wt=null)):t=null,t===null)throw _a(n);return Wf(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(Ea(),c=n.mode,A=Ll({mode:"hidden",children:A},c),o=tr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=lf(a),o.childLanes=uf(t,S,a),n.memoizedState=of,lo(null,o)):(Ma(n),cf(n,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=ff(t,n,a)):n.memoizedState!==null?(Ea(),n.child=t.child,n.flags|=128,n=null):(Ea(),A=o.fallback,c=n.mode,o=Ll({mode:"visible",children:o.children},c),A=tr(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,lr(n,t.child,null,a),o=n.child,o.memoizedState=lf(a),o.childLanes=uf(t,S,a),n.memoizedState=of,n=lo(null,o));else if(Ma(n),Wf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(r(419)),o.stack="",o.digest=S,Ks({value:o,source:null,stack:null}),n=ff(t,n,a)}else if(un||kr(t,n,a,!1),S=(a&t.childLanes)!==0,un||S){if(S=kt,S!==null&&(o=Cr(S,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,er(t,o),Fn(S,t,o),rf;Xf(A)||Gl(),n=ff(t,n,a)}else Xf(A)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Wt=li(A.nextSibling),yn=n,yt=!0,ga=null,si=!1,t!==null&&Bp(n,t),n=cf(n,o.children),n.flags|=4096);return n}return c?(Ea(),A=o.fallback,c=n.mode,B=t.child,$=B.sibling,o=Fi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?A=Fi($,A):(A=tr(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,lo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=lf(a):(c=A.cachePool,c!==null?(B=on._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=kp(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=uf(t,S,a),n.memoizedState=of,lo(t.child,o)):(Ma(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function cf(t,n){return n=Ll({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ll(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function ff(t,n,a){return lr(n,t.child,null,a),t=cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ng(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),bc(t.return,n,a)}function hf(t,n,a,o,c,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=f)}function ig(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var S=nn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ye(nn,S),En(t,n,o,a),o=yt?Zs:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,a,n);else if(t.tag===19)ng(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),hf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&xl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}hf(n,!0,a,null,f,o);break;case"together":hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(kr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hl(t)))}function jS(t,n,a){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),va(n,on,t.memoizedState.cache),nr();break;case 27:case 5:ke(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(t,n,a):(Ma(n),t=Wi(t,n,a),t!==null?t.sibling:null);Ma(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(kr(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return ig(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(nn,nn.current),o)break;return null;case 22:return n.lanes=0,Zm(t,n,a,n.pendingProps);case 24:va(n,on,t.memoizedState.cache)}return Wi(t,n,a)}function ag(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!df(t,a)&&(n.flags&128)===0)return un=!1,jS(t,n,a);un=(t.flags&131072)!==0}else un=!1,yt&&(n.flags&1048576)!==0&&zp(n,Zs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=sr(n.elementType),n.type=t,typeof t=="function")_c(t)?(o=cr(t,o),n.tag=1,n=$m(null,n,t,o,a)):(n.tag=0,n=sf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===U){n.tag=11,n=qm(null,n,t,o,a);break e}else if(c===P){n.tag=14,n=Ym(null,n,t,o,a);break e}}throw n=ve(t)||t,Error(r(306,n,""))}}return n;case 0:return sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=cr(o,n.pendingProps),$m(t,n,o,c,a);case 3:e:{if(Ue(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Lc(t,n),io(n,o,null,a);var S=n.memoizedState;if(o=S.cache,va(n,on,o),o!==f.cache&&Ac(n,[on],a,!0),no(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=eg(t,n,o,a);break e}else if(o!==c){c=ii(Error(r(424)),n),Ks(c),n=eg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Wt=li(t.firstChild),yn=n,yt=!0,ga=null,si=!0,a=Zp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(nr(),o===c){n=Wi(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return Ul(t,n),t===null?(a=m_(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=jl(J.current).createElement(a),o[sn]=n,o[Sn]=t,Tn(o,a,t),xe(o),n.stateNode=o):n.memoizedState=m_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ke(n),t===null&&yt&&(o=n.stateNode=h_(n.type,n.pendingProps,J.current),yn=n,si=!0,c=Wt,Ua(n.type)?(qf=c,Wt=li(o.firstChild)):Wt=c),En(t,n,n.pendingProps.children,a),Ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((c=o=Wt)&&(o=Tx(o,n.type,n.pendingProps,si),o!==null?(n.stateNode=o,yn=n,Wt=li(o.firstChild),si=!1,c=!0):c=!1),c||_a(n)),ke(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,Gf(c,f)?o=null:S!==null&&Gf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Fc(t,n,FS,null,null,a),To._currentValue=c),Ul(t,n),En(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Wt)&&(a=bx(a,n.pendingProps,si),a!==null?(n.stateNode=a,yn=n,Wt=null,t=!0):t=!1),t||_a(n)),null;case 13:return tg(t,n,a);case 4:return Ue(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=lr(n,null,o,a):En(t,n,o,a),n.child;case 11:return qm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ar(n),c=Mn(c),o=o(c),n.flags|=1,En(t,n,o,a),n.child;case 14:return Ym(t,n,n.type,n.pendingProps,a);case 15:return jm(t,n,n.type,n.pendingProps,a);case 19:return ig(t,n,a);case 31:return YS(t,n,a);case 22:return Zm(t,n,a,n.pendingProps);case 24:return ar(n),o=Mn(on),t===null?(c=wc(),c===null&&(c=kt,f=Rc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Uc(n),va(n,on,c)):((t.lanes&a)!==0&&(Lc(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,on,o)):(o=f.cache,va(n,on,o),o!==c.cache&&Ac(n,[on],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(t){t.flags|=4}function pf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Ug())t.flags|=8192;else throw or=gl,Dc}else t.flags&=-16777217}function rg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!x_(n))if(Ug())t.flags|=8192;else throw or=gl,Dc}function Nl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ot():536870912,t.lanes|=n,ts|=n)}function uo(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ZS(t,n,a){var o=n.pendingProps;switch(yc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(on),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vr(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ec())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(qi(n),f!==null?(qt(n),rg(n,f)):(qt(n),pf(n,c,null,o,a))):f?f!==t.memoizedState?(qi(n),qt(n),rg(n,f)):(qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&qi(n),qt(n),pf(n,c,t,o,a)),null;case 27:if(dt(n),a=J.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}t=Me.current,Vr(n)?Ip(n):(t=h_(c,o,a),n.stateNode=t,qi(n))}return qt(n),null;case 5:if(dt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(f=Me.current,Vr(n))Ip(n);else{var S=jl(J.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}f[sn]=n,f[Sn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(Tn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&qi(n)}}return qt(n),pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,Vr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=yn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(t.nodeValue,a)),t||_a(n,!0)}else t=jl(t).createTextNode(o),t[sn]=n,n.stateNode=t}return qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Vr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),t=!1}else a=Ec(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Vr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=Ec(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),qt(n),null);case 4:return Be(),t===null&&zf(n.stateNode.containerInfo),qt(n),null;case 10:return Vi(n.type),qt(n),null;case 19:if(Q(nn),o=n.memoizedState,o===null)return qt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)uo(o,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xl(t),f!==null){for(n.flags|=128,uo(o,!1),t=f.updateQueue,n.updateQueue=t,Nl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Np(a,t),a=a.sibling;return ye(nn,nn.current&1|2),yt&&Hi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>Il&&(n.flags|=128,c=!0,uo(o,!1),n.lanes=4194304)}else{if(!c)if(t=xl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Nl(n,t),uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!yt)return qt(n),null}else 2*b()-o.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,c=!0,uo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=nn.current,ye(nn,c?a&1|2:a&1),yt&&Hi(n,o.treeForkCount),t):(qt(n),null);case 22:case 23:return Yn(n),zc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(on),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function KS(t,n){switch(yc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(on),Be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(nn),null;case 4:return Be(),null;case 10:return Vi(n.type),null;case 22:case 23:return Yn(n),zc(),t!==null&&Q(rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function sg(t,n){switch(yc(n),n.tag){case 3:Vi(on),Be();break;case 26:case 27:case 5:dt(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:Q(nn);break;case 10:Vi(n.type);break;case 22:case 23:Yn(n),zc(),t!==null&&Q(rr);break;case 24:Vi(on)}}function co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(A){zt(n,n.return,A)}}function Ta(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var B=a,$=A;try{$()}catch(de){zt(c,B,de)}}}o=o.next}while(o!==f)}}catch(de){zt(n,n.return,de)}}function og(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Qp(n,a)}catch(o){zt(t,t.return,o)}}}function lg(t,n,a){a.props=cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){zt(t,n,c)}}function Ri(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){zt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(t,n,c)}else a.current=null}function ug(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){zt(t,t.return,c)}}function mf(t,n,a){try{var o=t.stateNode;vx(o,t.type,a,n),o[Sn]=n}catch(c){zt(t,t.return,c)}}function cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ua(t.type)||t.tag===4}function gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ua(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&Ua(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function Ol(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ua(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function fg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[sn]=t,n[Sn]=a}catch(f){zt(t,t.return,f)}}var Yi=!1,cn=!1,vf=!1,hg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function QS(t,n){if(t=t.containerInfo,Ff=tu,t=Tp(t),cc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,A=-1,B=-1,$=0,de=0,_e=t,ie=null;t:for(;;){for(var le;_e!==a||c!==0&&_e.nodeType!==3||(A=S+c),_e!==f||o!==0&&_e.nodeType!==3||(B=S+o),_e.nodeType===3&&(S+=_e.nodeValue.length),(le=_e.firstChild)!==null;)ie=_e,_e=le;for(;;){if(_e===t)break t;if(ie===a&&++$===c&&(A=S),ie===f&&++de===o&&(B=S),(le=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=le}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hf={focusedElem:t,selectionRange:a},tu=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var He=cr(a.type,c);t=o.getSnapshotBeforeUpdate(He,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function dg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),o&4&&co(5,a);break;case 1:if(Zi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){zt(a,a.return,S)}else{var c=cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){zt(a,a.return,S)}}o&64&&og(a),o&512&&fo(a,a.return);break;case 3:if(Zi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Qp(t,n)}catch(S){zt(a,a.return,S)}}break;case 27:n===null&&o&4&&fg(a);case 26:case 5:Zi(t,a),n===null&&o&4&&ug(a),o&512&&fo(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),o&4&&gg(t,a);break;case 13:Zi(t,a),o&4&&_g(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sx.bind(null,a),Ax(t,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||cn,c=Yi;var f=cn;Yi=o,(cn=n)&&!f?Ki(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),Yi=c,cn=f}break;case 30:break;default:Zi(t,a)}}function pg(t){var n=t.alternate;n!==null&&(t.alternate=null,pg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,Pn=!1;function ji(t,n,a){for(a=a.child;a!==null;)mg(t,n,a),a=a.sibling}function mg(t,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:cn||Ri(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ri(a,n);var o=Yt,c=Pn;Ua(a.type)&&(Yt=a.stateNode,Pn=!1),ji(t,n,a),yo(a.stateNode),Yt=o,Pn=c;break;case 5:cn||Ri(a,n);case 6:if(o=Yt,c=Pn,Yt=null,ji(t,n,a),Yt=o,Pn=c,Yt!==null)if(Pn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Yt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Yt!==null&&(Pn?(t=Yt,o_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),us(t)):o_(Yt,a.stateNode));break;case 4:o=Yt,c=Pn,Yt=a.stateNode.containerInfo,Pn=!0,ji(t,n,a),Yt=o,Pn=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),cn||Ta(4,a,n),ji(t,n,a);break;case 1:cn||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&lg(a,n,o)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:cn=(o=cn)||a.memoizedState!==null,ji(t,n,a),cn=o;break;default:ji(t,n,a)}}function gg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{us(t)}catch(a){zt(n,n.return,a)}}}function _g(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{us(t)}catch(a){zt(n,n.return,a)}}function JS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new hg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new hg),n;default:throw Error(r(435,t.tag))}}function Pl(t,n){var a=JS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=ox.bind(null,t,o);o.then(c,c)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Ua(A.type)){Yt=A.stateNode,Pn=!1;break e}break;case 5:Yt=A.stateNode,Pn=!1;break e;case 3:case 4:Yt=A.stateNode.containerInfo,Pn=!0;break e}A=A.return}if(Yt===null)throw Error(r(160));mg(f,S,c),Yt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)vg(n,t),n=n.sibling}var pi=null;function vg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Bn(t),o&4&&(Ta(3,t,t.return),co(3,t),Ta(5,t,t.return));break;case 1:zn(n,t),Bn(t),o&512&&(cn||a===null||Ri(a,a.return)),o&64&&Yi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=pi;if(zn(n,t),Bn(t),o&512&&(cn||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Za]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,o,a),f[sn]=t,xe(f),o=f;break e;case"link":var S=v_("link","href",c).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=v_("meta","content",c).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=t,xe(f),o=f}t.stateNode=o}else S_(c,t.type,t.stateNode);else t.stateNode=__(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?S_(c,t.type,t.stateNode):__(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Bn(t),o&512&&(cn||a===null||Ri(a,a.return)),a!==null&&o&4&&mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Bn(t),o&512&&(cn||a===null||Ri(a,a.return)),t.flags&32){c=t.stateNode;try{Lr(c,"")}catch(He){zt(t,t.return,He)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,mf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(vf=!0);break;case 6:if(zn(n,t),Bn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(He){zt(t,t.return,He)}}break;case 3:if(Ql=null,c=pi,pi=Zl(n.containerInfo),zn(n,t),pi=c,Bn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{us(n.containerInfo)}catch(He){zt(t,t.return,He)}vf&&(vf=!1,Sg(t));break;case 4:o=pi,pi=Zl(t.stateNode.containerInfo),zn(n,t),Bn(t),pi=o;break;case 12:zn(n,t),Bn(t);break;case 31:zn(n,t),Bn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pl(t,o)));break;case 13:zn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pl(t,o)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Yi,de=cn;if(Yi=$||c,cn=de||B,zn(n,t),cn=de,Yi=$,Bn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Yi||cn||fr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var _e=B.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;A.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(He){zt(B,B.return,He)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(He){zt(B,B.return,He)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;c?l_(le,!0):l_(B.stateNode,!1)}catch(He){zt(B,B.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Pl(t,a))));break;case 19:zn(n,t),Bn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pl(t,o)));break;case 30:break;case 21:break;default:zn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(cg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=gf(t);Ol(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Lr(S,""),a.flags&=-33);var A=gf(t);Ol(t,A,S);break;case 3:case 4:var B=a.stateNode.containerInfo,$=gf(t);_f(t,$,B);break;default:throw Error(r(161))}}catch(de){zt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Sg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dg(t,n.alternate,n),n=n.sibling}function fr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),fr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&lg(n,n.return,a),fr(n);break;case 27:yo(n.stateNode);case 26:case 5:Ri(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}t=t.sibling}}function Ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(c,f,a),co(4,f);break;case 1:if(Ki(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){zt(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var A=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Kp(B[c],A)}catch($){zt(o,o.return,$)}}a&&S&64&&og(f),fo(f,f.return);break;case 27:fg(f);case 26:case 5:Ki(c,f,a),a&&o===null&&S&4&&ug(f),fo(f,f.return);break;case 12:Ki(c,f,a);break;case 31:Ki(c,f,a),a&&S&4&&gg(c,f);break;case 13:Ki(c,f,a),a&&S&4&&_g(c,f);break;case 22:f.memoizedState===null&&Ki(c,f,a),fo(f,f.return);break;case 30:break;default:Ki(c,f,a)}n=n.sibling}}function Sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function mi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(t,n,a,o),n=n.sibling}function xg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,o),c&2048&&co(9,n);break;case 1:mi(t,n,a,o);break;case 3:mi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(c&2048){mi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else mi(t,n,a,o);break;case 31:mi(t,n,a,o);break;case 13:mi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?mi(t,n,a,o):ho(t,n):f._visibility&2?mi(t,n,a,o):(f._visibility|=2,Jr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Sf(S,n);break;case 24:mi(t,n,a,o),c&2048&&xf(n.alternate,n);break;default:mi(t,n,a,o)}}function Jr(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,A=a,B=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:Jr(f,S,A,B,c),co(8,S);break;case 23:break;case 22:var de=S.stateNode;S.memoizedState!==null?de._visibility&2?Jr(f,S,A,B,c):ho(f,S):(de._visibility|=2,Jr(f,S,A,B,c)),c&&$&2048&&Sf(S.alternate,S);break;case 24:Jr(f,S,A,B,c),c&&$&2048&&xf(S.alternate,S);break;default:Jr(f,S,A,B,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:ho(a,o),c&2048&&Sf(o.alternate,o);break;case 24:ho(a,o),c&2048&&xf(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function $r(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)yg(t,n,a),t=t.sibling}function yg(t,n,a){switch(t.tag){case 26:$r(t,n,a),t.flags&po&&t.memoizedState!==null&&Ix(a,pi,t.memoizedState,t.memoizedProps);break;case 5:$r(t,n,a);break;case 3:case 4:var o=pi;pi=Zl(t.stateNode.containerInfo),$r(t,n,a),pi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=po,po=16777216,$r(t,n,a),po=o):$r(t,n,a));break;default:$r(t,n,a)}}function Mg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Tg(o,t)}Mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Eg(t),t=t.sibling}function Eg(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):mo(t);break;default:mo(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Tg(o,t)}Mg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function Tg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var c=o.sibling,f=o.return;if(pg(o),o===a){_n=null;break e}if(c!==null){c.return=f,_n=c;break e}_n=f}}}var $S={getCacheForType:function(t){var n=Mn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(on).controller.signal}},ex=typeof WeakMap=="function"?WeakMap:Map,Ut=0,kt=null,gt=null,St=0,Pt=0,jn=null,ba=!1,es=!1,yf=!1,Qi=0,Jt=0,Aa=0,hr=0,Mf=0,Zn=0,ts=0,go=null,In=null,Ef=!1,Bl=0,bg=0,Il=1/0,Fl=null,Ra=null,dn=0,Ca=null,ns=null,Ji=0,Tf=0,bf=null,Ag=null,_o=0,Af=null;function Kn(){return(Ut&2)!==0&&St!==0?St&-St:z.T!==null?Lf():ja()}function Rg(){if(Zn===0)if((St&536870912)===0||yt){var t=De;De<<=1,(De&3932160)===0&&(De=262144),Zn=t}else Zn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Zn}function Fn(t,n,a){(t===kt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(is(t,0),wa(t,St,Zn,!1)),Dn(t,a),((Ut&2)===0||t!==kt)&&(t===kt&&((Ut&2)===0&&(hr|=a),Jt===4&&wa(t,St,Zn,!1)),Ci(t))}function Cg(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),c=o?ix(t,n):Cf(t,n,!0),f=o;do{if(c===0){es&&!o&&wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!tx(a)){c=Cf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;c=go;var B=A.current.memoizedState.isDehydrated;if(B&&(is(A,S).flags|=256),S=Cf(A,S,!1),S!==2){if(yf&&!B){A.errorRecoveryDisabledLanes|=f,hr|=f,c=4;break e}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){is(t,0),wa(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,Zn,!ba);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Bl+300-b(),10<c)){if(wa(o,n,Zn,!ba),Se(o,0,!0)!==0)break e;Ji=n,o.timeoutHandle=r_(wg.bind(null,o,a,In,Fl,Ef,n,Zn,hr,ts,ba,f,"Throttled",-0,0),c);break e}wg(o,a,In,Fl,Ef,n,Zn,hr,ts,ba,f,null,-0,0)}}break}while(!0);Ci(t)}function wg(t,n,a,o,c,f,S,A,B,$,de,_e,ie,le){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},yg(n,f,_e);var He=(f&62914560)===f?Bl-b():(f&4194048)===f?bg-b():0;if(He=Fx(_e,He),He!==null){Ji=f,t.cancelPendingCommit=He(Bg.bind(null,t,n,f,a,o,c,S,A,B,de,_e,null,ie,le)),wa(t,f,S,!$);return}}Bg(t,n,f,a,o,c,S,A,B)}function tx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(t,n,a,o){n&=~Mf,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-ze(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&Bs(t,a,n)}function Hl(){return(Ut&6)===0?(vo(0),!1):!0}function Rf(){if(gt!==null){if(Pt===0)var t=gt.return;else t=gt,Gi=ir=null,Vc(t),Yr=null,$s=0,t=gt;for(;t!==null;)sg(t.alternate,t),t=t.return;gt=null}}function is(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,Rf(),kt=t,gt=a=Fi(t.current,null),St=n,Pt=0,jn=null,ba=!1,es=Fe(t,n),yf=!1,ts=Zn=Mf=hr=Aa=Jt=0,In=go=null,Ef=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-ze(o),f=1<<c;n|=t[c],o&=~f}return Qi=n,ol(),a}function Dg(t,n){ut=null,z.H=oo,n===qr||n===ml?(n=qp(),Pt=3):n===Dc?(n=qp(),Pt=4):Pt=n===rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,gt===null&&(Jt=1,wl(t,ii(n,t.current)))}function Ug(){var t=qn.current;return t===null?!0:(St&4194048)===St?oi===null:(St&62914560)===St||(St&536870912)!==0?t===oi:!1}function Lg(){var t=z.H;return z.H=oo,t===null?oo:t}function Ng(){var t=z.A;return z.A=$S,t}function Gl(){Jt=4,ba||(St&4194048)!==St&&qn.current!==null||(es=!0),(Aa&134217727)===0&&(hr&134217727)===0||kt===null||wa(kt,St,Zn,!1)}function Cf(t,n,a){var o=Ut;Ut|=2;var c=Lg(),f=Ng();(kt!==t||St!==n)&&(Fl=null,is(t,n)),n=!1;var S=Jt;e:do try{if(Pt!==0&&gt!==null){var A=gt,B=jn;switch(Pt){case 8:Rf(),S=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var $=Pt;if(Pt=0,jn=null,as(t,A,B,$),a&&es){S=0;break e}break;default:$=Pt,Pt=0,jn=null,as(t,A,B,$)}}nx(),S=Jt;break}catch(de){Dg(t,de)}while(!0);return n&&t.shellSuspendCounter++,Gi=ir=null,Ut=o,z.H=c,z.A=f,gt===null&&(kt=null,St=0,ol()),S}function nx(){for(;gt!==null;)Og(gt)}function ix(t,n){var a=Ut;Ut|=2;var o=Lg(),c=Ng();kt!==t||St!==n?(Fl=null,Il=b()+500,is(t,n)):es=Fe(t,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var f=jn;t:switch(Pt){case 1:Pt=0,jn=null,as(t,n,f,1);break;case 2:case 9:if(Xp(f)){Pt=0,jn=null,Pg(n);break}n=function(){Pt!==2&&Pt!==9||kt!==t||(Pt=7),Ci(t)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:Xp(f)?(Pt=0,jn=null,Pg(n)):(Pt=0,jn=null,as(t,n,f,7));break;case 5:var S=null;switch(gt.tag){case 26:S=gt.memoizedState;case 5:case 27:var A=gt;if(S?x_(S):A.stateNode.complete){Pt=0,jn=null;var B=A.sibling;if(B!==null)gt=B;else{var $=A.return;$!==null?(gt=$,Vl($)):gt=null}break t}}Pt=0,jn=null,as(t,n,f,5);break;case 6:Pt=0,jn=null,as(t,n,f,6);break;case 8:Rf(),Jt=6;break e;default:throw Error(r(462))}}ax();break}catch(de){Dg(t,de)}while(!0);return Gi=ir=null,z.H=o,z.A=c,Ut=a,gt!==null?0:(kt=null,St=0,ol(),Jt)}function ax(){for(;gt!==null&&!jt();)Og(gt)}function Og(t){var n=ag(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Vl(t):gt=n}function Pg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Jm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Jm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Vc(n);default:sg(a,n),n=gt=Np(n,Qi),n=ag(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Vl(t):gt=n}function as(t,n,a,o){Gi=ir=null,Vc(n),Yr=null,$s=0;var c=n.return;try{if(qS(t,c,n,a,St)){Jt=1,wl(t,ii(a,t.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;Jt=1,wl(t,ii(a,t.current)),gt=null;return}n.flags&32768?(yt||o===1?t=!0:es||(St&536870912)!==0?t=!1:(ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),zg(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){zg(n,ba);return}t=n.return;var a=ZS(n.alternate,n,Qi);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);Jt===0&&(Jt=5)}function zg(t,n){do{var a=KS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);Jt=6,gt=null}function Bg(t,n,a,o,c,f,S,A,B){t.cancelPendingCommit=null;do kl();while(dn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=mc,ti(t,a,f,S,A,B),t===kt&&(gt=kt=null,St=0),ns=n,Ca=t,Ji=a,Tf=f,bf=c,Ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lx(fe,function(){return Vg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=Z.p,Z.p=2,S=Ut,Ut|=4;try{QS(t,n,a)}finally{Ut=S,Z.p=c,z.T=o}}dn=1,Ig(),Fg(),Hg()}}function Ig(){if(dn===1){dn=0;var t=Ca,n=ns,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var c=Ut;Ut|=4;try{vg(n,t);var f=Hf,S=Tp(t.containerInfo),A=f.focusedElem,B=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Ep(A.ownerDocument.documentElement,A)){if(B!==null&&cc(A)){var $=B.start,de=B.end;if(de===void 0&&(de=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(de,A.value.length);else{var _e=A.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var le=ie.getSelection(),He=A.textContent.length,tt=Math.min(B.start,He),Ft=B.end===void 0?tt:Math.min(B.end,He);!le.extend&&tt>Ft&&(S=Ft,Ft=tt,tt=S);var Y=Mp(A,tt),V=Mp(A,Ft);if(Y&&V&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var K=_e.createRange();K.setStart(Y.node,Y.offset),le.removeAllRanges(),tt>Ft?(le.addRange(K),le.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),le.addRange(K))}}}}for(_e=[],le=A;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_e.length;A++){var me=_e[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}tu=!!Ff,Hf=Ff=null}finally{Ut=c,Z.p=o,z.T=a}}t.current=n,dn=2}}function Fg(){if(dn===2){dn=0;var t=Ca,n=ns,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var c=Ut;Ut|=4;try{dg(t,n.alternate,n)}finally{Ut=c,Z.p=o,z.T=a}}dn=3}}function Hg(){if(dn===4||dn===3){dn=0,O();var t=Ca,n=ns,a=Ji,o=Ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,ns=Ca=null,Gg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ra=null),Dr(a),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=Z.p,Z.p=2,z.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{z.T=n,Z.p=c}}(Ji&3)!==0&&kl(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Af?_o++:(_o=0,Af=t):_o=0,vo(0)}}function Gg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function kl(){return Ig(),Fg(),Hg(),Vg()}function Vg(){if(dn!==5)return!1;var t=Ca,n=Tf;Tf=0;var a=Dr(Ji),o=z.T,c=Z.p;try{Z.p=32>a?32:a,z.T=null,a=bf,bf=null;var f=Ca,S=Ji;if(dn=0,ns=Ca=null,Ji=0,(Ut&6)!==0)throw Error(r(331));var A=Ut;if(Ut|=4,Eg(f.current),xg(f,f.current,S,a),Ut=A,vo(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{Z.p=c,z.T=o,Gg(t,n)}}function kg(t,n,a){n=ii(a,n),n=af(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(Dn(t,2),Ci(t))}function zt(t,n,a){if(t.tag===3)kg(t,t,a);else for(;n!==null;){if(n.tag===3){kg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){t=ii(a,t),a=Xm(2),o=ya(n,a,2),o!==null&&(Wm(a,o,n,t),Dn(o,2),Ci(o));break}}n=n.return}}function wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ex;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(yf=!0,c.add(a),t=rx.bind(null,t,n,a),n.then(t,t))}function rx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(St&a)===a&&(Jt===4||Jt===3&&(St&62914560)===St&&300>b()-Bl?(Ut&2)===0&&is(t,0):Mf|=a,ts===St&&(ts=0)),Ci(t)}function Xg(t,n){n===0&&(n=Ot()),t=er(t,n),t!==null&&(Dn(t,n),Ci(t))}function sx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Xg(t,a)}function ox(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Xg(t,a)}function lx(t,n){return st(t,n)}var Xl=null,rs=null,Df=!1,Wl=!1,Uf=!1,Da=0;function Ci(t){t!==rs&&t.next===null&&(rs===null?Xl=rs=t:rs=rs.next=t),Wl=!0,Df||(Df=!0,cx())}function vo(t,n){if(!Uf&&Wl){Uf=!0;do for(var a=!1,o=Xl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=c&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,jg(o,f))}else f=St,f=Se(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fe(o,f)||(a=!0,jg(o,f));o=o.next}while(a);Uf=!1}}function ux(){Wg()}function Wg(){Wl=Df=!1;var t=0;Da!==0&&xx()&&(t=Da);for(var n=b(),a=null,o=Xl;o!==null;){var c=o.next,f=qg(o,n);f===0?(o.next=null,a===null?Xl=c:a.next=c,c===null&&(rs=a)):(a=o,(t!==0||(f&3)!==0)&&(Wl=!0)),o=c}dn!==0&&dn!==5||vo(t),Da!==0&&(Da=0)}function qg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-ze(f),A=1<<S,B=c[S];B===-1?((A&a)===0||(A&o)!==0)&&(c[S]=rt(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=kt,a=St,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Kt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Kt(o),Dr(a)){case 2:case 8:a=Ee;break;case 32:a=fe;break;case 268435456:a=Ce;break;default:a=fe}return o=Yg.bind(null,t),a=st(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Kt(o),t.callbackPriority=2,t.callbackNode=null,2}function Yg(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kl()&&t.callbackNode!==a)return null;var o=St;return o=Se(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Cg(t,o,n),qg(t,b()),t.callbackNode!=null&&t.callbackNode===a?Yg.bind(null,t):null)}function jg(t,n){if(kl())return null;Cg(t,n,!0)}function cx(){Mx(function(){(Ut&6)!==0?st(pe,ux):Wg()})}function Lf(){if(Da===0){var t=Xr;t===0&&(t=Ae,Ae<<=1,(Ae&261888)===0&&(Ae=256)),Da=t}return Da}function Zg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$o(""+t)}function Kg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function fx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Zg((c[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?Zg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new il("action","action",null,o,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Da!==0){var B=S?Kg(c,S):new FormData(c);Qc(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=S?Kg(c,S):new FormData(c),Qc(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Nf=0;Nf<pc.length;Nf++){var Of=pc[Nf],hx=Of.toLowerCase(),dx=Of[0].toUpperCase()+Of.slice(1);di(hx,"on"+dx)}di(Rp,"onAnimationEnd"),di(Cp,"onAnimationIteration"),di(wp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(wS,"onTransitionRun"),di(DS,"onTransitionStart"),di(US,"onTransitionCancel"),di(Dp,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Qg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],B=A.instance,$=A.currentTarget;if(A=A.listener,B!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=$;try{f(c)}catch(de){sl(de)}c.currentTarget=null,f=B}else for(S=0;S<o.length;S++){if(A=o[S],B=A.instance,$=A.currentTarget,A=A.listener,B!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=$;try{f(c)}catch(de){sl(de)}c.currentTarget=null,f=B}}}}function _t(t,n){var a=n[Fs];a===void 0&&(a=n[Fs]=new Set);var o=t+"__bubble";a.has(o)||(Jg(n,t,2,!1),a.add(o))}function Pf(t,n,a){var o=0;n&&(o|=4),Jg(a,t,o,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function zf(t){if(!t[ql]){t[ql]=!0,Ne.forEach(function(a){a!=="selectionchange"&&(px.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,Pf("selectionchange",!1,n))}}function Jg(t,n,a,o){switch(R_(n)){case 2:var c=Vx;break;case 8:c=kx;break;default:c=Qf}a=c.bind(null,n,a,t),c=void 0,!tc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Bf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=q(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=f=S;continue e}A=A.parentNode}}o=o.return}ip(function(){var $=f,de=$u(a),_e=[];e:{var ie=Up.get(t);if(ie!==void 0){var le=il,He=t;switch(t){case"keypress":if(tl(a)===0)break e;case"keydown":case"keyup":le=oS;break;case"focusin":He="focus",le=rc;break;case"focusout":He="blur",le=rc;break;case"beforeblur":case"afterblur":le=rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=cS;break;case Rp:case Cp:case wp:le=J0;break;case Dp:le=hS;break;case"scroll":case"scrollend":le=Y0;break;case"wheel":le=pS;break;case"copy":case"cut":case"paste":le=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=lp;break;case"toggle":case"beforetoggle":le=gS}var tt=(n&4)!==0,Ft=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var V=$,K;V!==null;){var me=V;if(K=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||K===null||Y===null||(me=Hs(V,Y),me!=null&&tt.push(xo(V,me,K))),Ft)break;V=V.return}0<tt.length&&(ie=new le(ie,He,null,a,de),_e.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ie&&a!==Ju&&(He=a.relatedTarget||a.fromElement)&&(q(He)||He[da]))break e;if((le||ie)&&(ie=de.window===de?de:(ie=de.ownerDocument)?ie.defaultView||ie.parentWindow:window,le?(He=a.relatedTarget||a.toElement,le=$,He=He?q(He):null,He!==null&&(Ft=u(He),tt=He.tag,He!==Ft||tt!==5&&tt!==27&&tt!==6)&&(He=null)):(le=null,He=$),le!==He)){if(tt=sp,me="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=lp,me="onPointerLeave",Y="onPointerEnter",V="pointer"),Ft=le==null?ie:se(le),K=He==null?ie:se(He),ie=new tt(me,V+"leave",le,a,de),ie.target=Ft,ie.relatedTarget=K,me=null,q(de)===$&&(tt=new tt(Y,V+"enter",He,a,de),tt.target=K,tt.relatedTarget=Ft,me=tt),Ft=me,le&&He)t:{for(tt=mx,Y=le,V=He,K=0,me=Y;me;me=tt(me))K++;me=0;for(var $e=V;$e;$e=tt($e))me++;for(;0<K-me;)Y=tt(Y),K--;for(;0<me-K;)V=tt(V),me--;for(;K--;){if(Y===V||V!==null&&Y===V.alternate){tt=Y;break t}Y=tt(Y),V=tt(V)}tt=null}else tt=null;le!==null&&$g(_e,ie,le,tt,!1),He!==null&&Ft!==null&&$g(_e,Ft,He,tt,!0)}}e:{if(ie=$?se($):window,le=ie.nodeName&&ie.nodeName.toLowerCase(),le==="select"||le==="input"&&ie.type==="file")var At=gp;else if(pp(ie))if(_p)At=AS;else{At=TS;var qe=ES}else le=ie.nodeName,!le||le.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&Qu($.elementType)&&(At=gp):At=bS;if(At&&(At=At(t,$))){mp(_e,At,a,de);break e}qe&&qe(t,ie,$),t==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&hn(ie,"number",ie.value)}switch(qe=$?se($):window,t){case"focusin":(pp(qe)||qe.contentEditable==="true")&&(zr=qe,fc=$,js=null);break;case"focusout":js=fc=zr=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,bp(_e,a,de);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":bp(_e,a,de)}var ct;if(oc)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Pr?hp(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(up&&a.locale!=="ko"&&(Pr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Pr&&(ct=ap()):(pa=de,nc="value"in pa?pa.value:pa.textContent,Pr=!0)),qe=Yl($,xt),0<qe.length&&(xt=new op(xt,t,null,a,de),_e.push({event:xt,listeners:qe}),ct?xt.data=ct:(ct=dp(a),ct!==null&&(xt.data=ct)))),(ct=vS?SS(t,a):xS(t,a))&&(xt=Yl($,"onBeforeInput"),0<xt.length&&(qe=new op("onBeforeInput","beforeinput",null,a,de),_e.push({event:qe,listeners:xt}),qe.data=ct)),fx(_e,t,$,a,de)}Qg(_e,n)})}function xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hs(t,a),c!=null&&o.unshift(xo(t,c,f)),c=Hs(t,n),c!=null&&o.push(xo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function mx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $g(t,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,B=A.alternate,$=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||$===null||(B=$,c?($=Hs(a,f),$!=null&&S.unshift(xo(a,$,B))):c||($=Hs(a,f),$!=null&&S.push(xo(a,$,B)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var gx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function e_(t){return(typeof t=="string"?t:""+t).replace(gx,`
`).replace(_x,"")}function t_(t,n){return n=e_(n),e_(t)===n}function It(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Lr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Lr(t,""+o);break;case"className":Nt(t,"class",o);break;case"tabIndex":Nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(t,a,o);break;case"style":tp(t,o,f);break;case"data":if(n!=="object"){Nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=$o(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(t,n,"name",c.name,c,null),It(t,n,"formEncType",c.formEncType,c,null),It(t,n,"formMethod",c.formMethod,c,null),It(t,n,"formTarget",c.formTarget,c,null)):(It(t,n,"encType",c.encType,c,null),It(t,n,"method",c.method,c,null),It(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=$o(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Bi);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=$o(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Vt(t,"popover",o);break;case"xlinkActuate":mt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":mt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":mt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":mt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":mt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":mt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":mt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":mt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":mt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Vt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=W0.get(a)||a,Vt(t,a,o))}}function If(t,n,a,o,c,f){switch(a){case"style":tp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Lr(t,o):(typeof o=="number"||typeof o=="bigint")&&Lr(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ge.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Vt(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,f,S,a,null)}}c&&It(t,n,"srcSet",a.srcSet,a,null),o&&It(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var A=f=S=c=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":c=de;break;case"type":S=de;break;case"checked":B=de;break;case"defaultChecked":$=de;break;case"value":f=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:It(t,n,o,de,a,null)}}Un(t,f,A,B,$,S,c,!1);return;case"select":_t("invalid",t),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:It(t,n,c,A,a,null)}n=f,a=S,t.multiple=!!o,n!=null?tn(t,!!o,n,!1):a!=null&&tn(t,!!o,a,!0);return;case"textarea":_t("invalid",t),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:It(t,n,S,A,a,null)}Ti(t,o,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(t,n,B,o,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<So.length;o++)_t(So[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,$,o,a,null)}return;default:if(Qu(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&If(t,n,de,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&It(t,n,A,o,a,null))}function vx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,B=null,$=null,de=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=_e;default:o.hasOwnProperty(le)||It(t,n,le,null,o,_e)}}for(var ie in o){var le=o[ie];if(_e=a[ie],o.hasOwnProperty(ie)&&(le!=null||_e!=null))switch(ie){case"type":f=le;break;case"name":c=le;break;case"checked":$=le;break;case"defaultChecked":de=le;break;case"value":S=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==_e&&It(t,n,ie,le,o,_e)}}bn(t,S,A,B,$,de,f,c);return;case"select":le=S=A=ie=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(f)||It(t,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ie=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==B&&It(t,n,c,f,o,B)}n=A,a=S,o=le,ie!=null?tn(t,!!a,ie,!1):!!o!=!!a&&(n!=null?tn(t,!!a,n,!0):tn(t,!!a,a?[]:"",!1));return;case"textarea":le=ie=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:It(t,n,A,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ie=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(t,n,S,c,o,f)}Ur(t,ie,le);return;case"option":for(var He in a)if(ie=a[He],a.hasOwnProperty(He)&&ie!=null&&!o.hasOwnProperty(He))switch(He){case"selected":t.selected=!1;break;default:It(t,n,He,null,o,ie)}for(B in o)if(ie=o[B],le=a[B],o.hasOwnProperty(B)&&ie!==le&&(ie!=null||le!=null))switch(B){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:It(t,n,B,ie,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ie=a[tt],a.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&It(t,n,tt,null,o,ie);for($ in o)if(ie=o[$],le=a[$],o.hasOwnProperty($)&&ie!==le&&(ie!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:It(t,n,$,ie,o,le)}return;default:if(Qu(n)){for(var Ft in a)ie=a[Ft],a.hasOwnProperty(Ft)&&ie!==void 0&&!o.hasOwnProperty(Ft)&&If(t,n,Ft,void 0,o,ie);for(de in o)ie=o[de],le=a[de],!o.hasOwnProperty(de)||ie===le||ie===void 0&&le===void 0||If(t,n,de,ie,o,le);return}}for(var Y in a)ie=a[Y],a.hasOwnProperty(Y)&&ie!=null&&!o.hasOwnProperty(Y)&&It(t,n,Y,null,o,ie);for(_e in o)ie=o[_e],le=a[_e],!o.hasOwnProperty(_e)||ie===le||ie==null&&le==null||It(t,n,_e,ie,o,le)}function n_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,S=c.initiatorType,A=c.duration;if(f&&A&&n_(S)){for(S=0,A=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>A)break;var de=B.transferSize,_e=B.initiatorType;de&&n_(_e)&&(B=B.responseEnd,S+=de*(B<A?1:(A-$)/(B-$)))}if(--o,n+=8*(f+S)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ff=null,Hf=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function i_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Gf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function xx(){var t=window.event;return t&&t.type==="popstate"?t===Vf?!1:(Vf=t,!0):(Vf=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,yx=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(t){return s_.resolve(null).then(t).catch(Ex)}:r_;function Ex(t){setTimeout(function(){throw t})}function Ua(t){return t==="head"}function o_(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),us(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[Za]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);us(n)}function l_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Tx(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function bx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function u_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ax(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qf=null;function c_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function f_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function h_(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var ui=new Map,d_=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=Z.d;Z.d={f:Rx,r:Cx,D:wx,C:Dx,L:Ux,m:Lx,X:Ox,S:Nx,M:Px};function Rx(){var t=$i.f(),n=Hl();return t||n}function Cx(t){var n=re(t);n!==null&&n.tag===5&&n.type==="form"?Dm(n):$i.r(t)}var ss=typeof document>"u"?null:document;function p_(t,n,a){var o=ss;if(o&&typeof n=="string"&&n){var c=vt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),d_.has(c)||(d_.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",t),xe(n),o.head.appendChild(n)))}}function wx(t){$i.D(t),p_("dns-prefetch",t,null)}function Dx(t,n){$i.C(t,n),p_("preconnect",t,n)}function Ux(t,n,a){$i.L(t,n,a);var o=ss;if(o&&t&&n){var c='link[rel="preload"][as="'+vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+vt(a.imageSizes)+'"]')):c+='[href="'+vt(t)+'"]';var f=c;switch(n){case"style":f=os(t);break;case"script":f=ls(t)}ui.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Mo(f))||n==="script"&&o.querySelector(Eo(f))||(n=o.createElement("link"),Tn(n,"link",t),xe(n),o.head.appendChild(n)))}}function Lx(t,n){$i.m(t,n);var a=ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+vt(o)+'"][href="'+vt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ls(t)}if(!ui.has(f)&&(t=v({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}o=a.createElement("link"),Tn(o,"link",t),xe(o),a.head.appendChild(o)}}}function Nx(t,n,a){$i.S(t,n,a);var o=ss;if(o&&t){var c=j(o).hoistableStyles,f=os(t);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Mo(f)))A.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Yf(t,a);var B=S=o.createElement("link");xe(B),Tn(B,"link",t),B._p=new Promise(function($,de){B.onload=$,B.onerror=de}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Kl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function Ox(t,n){$i.X(t,n);var a=ss;if(a&&t){var o=j(a).hoistableScripts,c=ls(t),f=o.get(c);f||(f=a.querySelector(Eo(c)),f||(t=v({src:t,async:!0},n),(n=ui.get(c))&&jf(t,n),f=a.createElement("script"),xe(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Px(t,n){$i.M(t,n);var a=ss;if(a&&t){var o=j(a).hoistableScripts,c=ls(t),f=o.get(c);f||(f=a.querySelector(Eo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&jf(t,n),f=a.createElement("script"),xe(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function m_(t,n,a,o){var c=(c=J.current)?Zl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=os(a.href),a=j(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=os(a.href);var f=j(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(Mo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||zx(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ls(a),a=j(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function os(t){return'href="'+vt(t)+'"'}function Mo(t){return'link[rel="stylesheet"]['+t+"]"}function g_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function zx(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),xe(n),t.head.appendChild(n))}function ls(t){return'[src="'+vt(t)+'"]'}function Eo(t){return"script[async]"+t}function __(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+vt(a.href)+'"]');if(o)return n.instance=o,xe(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),xe(o),Tn(o,"style",c),Kl(o,a.precedence,t),n.instance=o;case"stylesheet":c=os(a.href);var f=t.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,xe(f),f;o=g_(a),(c=ui.get(c))&&Yf(o,c),f=(t.ownerDocument||t).createElement("link"),xe(f);var S=f;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Tn(f,"link",o),n.state.loading|=4,Kl(f,a.precedence,t),n.instance=f;case"script":return f=ls(a.src),(c=t.querySelector(Eo(f)))?(n.instance=c,xe(c),c):(o=a,(c=ui.get(f))&&(o=v({},a),jf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),xe(c),Tn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Kl(o,a.precedence,t));return n.instance}function Kl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function v_(t,n,a){if(Ql===null){var o=new Map,c=Ql=new Map;c.set(a,o)}else c=Ql,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Za]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function S_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Bx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ix(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=os(o.href),f=n.querySelector(Mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,xe(f);return}f=n.ownerDocument||n,o=g_(o),(c=ui.get(c))&&Yf(o,c),f=f.createElement("link"),xe(f);var S=f;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Tn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zf=0;function Fx(t,n){return t.stylesheets&&t.count===0&&eu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&eu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Zf===0&&(Zf=62500*Sx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&eu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function eu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(Hx,t),$l=null,Jl.call(t))}function Hx(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var o=a.get(null);else{a=new Map,$l.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Jl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var To={$$typeof:L,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Gx(t,n,a,o,c,f,S,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function y_(t,n,a,o,c,f,S,A,B,$,de,_e){return t=new Gx(t,n,a,S,B,$,de,_e,A),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=Rc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Uc(f),t}function M_(t){return t?(t=Fr,t):Fr}function E_(t,n,a,o,c,f){c=M_(c),o.context===null?o.context=c:o.pendingContext=c,o=xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ya(t,o,n),a!==null&&(Fn(a,t,n),to(a,t,n))}function T_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kf(t,n){T_(t,n),(t=t.alternate)&&T_(t,n)}function b_(t){if(t.tag===13||t.tag===31){var n=er(t,67108864);n!==null&&Fn(n,t,67108864),Kf(t,67108864)}}function A_(t){if(t.tag===13||t.tag===31){var n=Kn();n=wr(n);var a=er(t,n);a!==null&&Fn(a,t,n),Kf(t,n)}}var tu=!0;function Vx(t,n,a,o){var c=z.T;z.T=null;var f=Z.p;try{Z.p=2,Qf(t,n,a,o)}finally{Z.p=f,z.T=c}}function kx(t,n,a,o){var c=z.T;z.T=null;var f=Z.p;try{Z.p=8,Qf(t,n,a,o)}finally{Z.p=f,z.T=c}}function Qf(t,n,a,o){if(tu){var c=Jf(o);if(c===null)Bf(t,n,o,nu,a),C_(t,o);else if(Wx(c,t,n,a,o))o.stopPropagation();else if(C_(t,o),n&4&&-1<Xx.indexOf(t)){for(;c!==null;){var f=re(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Te(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-ze(S);A.entanglements[1]|=B,S&=~B}Ci(f),(Ut&6)===0&&(Il=b()+500,vo(0))}}break;case 31:case 13:A=er(f,2),A!==null&&Fn(A,f,2),Hl(),Kf(f,2)}if(f=Jf(o),f===null&&Bf(t,n,o,nu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Bf(t,n,o,null,a)}}function Jf(t){return t=$u(t),$f(t)}var nu=null;function $f(t){if(nu=null,t=q(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nu=t,null}function R_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case pe:return 2;case Ee:return 8;case fe:case Ze:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var eh=!1,La=null,Na=null,Oa=null,bo=new Map,Ao=new Map,Pa=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C_(t,n){switch(t){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=re(n),n!==null&&b_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Wx(t,n,a,o,c){switch(n){case"focusin":return La=Ro(La,t,n,a,o,c),!0;case"dragenter":return Na=Ro(Na,t,n,a,o,c),!0;case"mouseover":return Oa=Ro(Oa,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ro(bo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,o,c)),!0}return!1}function w_(t){var n=q(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Is(t.priority,function(){A_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Is(t.priority,function(){A_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function iu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ju=o,a.target.dispatchEvent(o),Ju=null}else return n=re(a),n!==null&&b_(n),t.blockedOn=a,!1;n.shift()}return!0}function D_(t,n,a){iu(t)&&a.delete(n)}function qx(){eh=!1,La!==null&&iu(La)&&(La=null),Na!==null&&iu(Na)&&(Na=null),Oa!==null&&iu(Oa)&&(Oa=null),bo.forEach(D_),Ao.forEach(D_)}function au(t,n){t.blockedOn===n&&(t.blockedOn=null,eh||(eh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qx)))}var ru=null;function U_(t){ru!==t&&(ru=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ru===t&&(ru=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if($f(o||a)===null)continue;break}var f=re(a);f!==null&&(t.splice(n,3),n-=3,Qc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function us(t){function n(B){return au(B,t)}La!==null&&au(La,t),Na!==null&&au(Na,t),Oa!==null&&au(Oa,t),bo.forEach(n),Ao.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)w_(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[Sn]||null;if(typeof f=="function")S||U_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Sn]||null)A=S.formAction;else if($f(c)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),U_(a)}}}function L_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function th(t){this._internalRoot=t}su.prototype.render=th.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Kn();E_(a,o,t,n,null,null)},su.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;E_(t.current,2,null,t,null,null),Hl(),n[da]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var n=ja();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&w_(t)}};var N_=e.version;if(N_!=="19.2.0")throw Error(r(527,N_,"19.2.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Yx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{be=ou.inject(Yx),we=ou}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Hm,f=Gm,S=Vm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=y_(t,1,!1,null,null,a,o,null,c,f,S,L_),t[da]=n.current,zf(t),new th(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Hm,S=Gm,A=Vm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=y_(t,1,!0,n,a??null,o,c,B,f,S,A,L_),n.context=M_(null),a=n.current,o=Kn(),o=wr(o),c=xa(o),c.callback=null,ya(a,c,o),a=o,n.current.lanes=a,Dn(n,a),Ci(n),t[da]=n.current,zf(t),new su(n)},wo.version="19.2.0",wo}var k_;function iy(){if(k_)return ah.exports;k_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ah.exports=ny(),ah.exports}var ay=iy();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var X_="popstate";function ry(s={}){function e(r,l){let{pathname:u,search:h,hash:d}=r.location;return Vh("",{pathname:u,search:h,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Bo(l)}return oy(e,i,null,s)}function Zt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ni(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sy(){return Math.random().toString(36).substring(2,10)}function W_(s,e){return{usr:s.state,key:s.key,idx:e}}function Vh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ns(e):e,state:i,key:e&&e.key||r||sy()}}function Bo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ns(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function oy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=g();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function g(){return(h.state||{idx:null}).idx}function v(){d="POP";let y=g(),_=y==null?null:y-p;p=y,m&&m({action:d,location:E.location,delta:_})}function x(y,_){d="PUSH";let C=Vh(E.location,y,_);p=g()+1;let L=W_(C,p),U=E.createHref(C);try{h.pushState(L,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(U)}u&&m&&m({action:d,location:E.location,delta:1})}function M(y,_){d="REPLACE";let C=Vh(E.location,y,_);p=g();let L=W_(C,p),U=E.createHref(C);h.replaceState(L,"",U),u&&m&&m({action:d,location:E.location,delta:0})}function T(y){return ly(y)}let E={get action(){return d},get location(){return s(l,h)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(X_,v),m=y,()=>{l.removeEventListener(X_,v),m=null}},createHref(y){return e(l,y)},createURL:T,encodeLocation(y){let _=T(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(y){return h.go(y)}};return E}function ly(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Zt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Bo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function jv(s,e,i="/"){return uy(s,e,i,!1)}function uy(s,e,i,r){let l=typeof e=="string"?Ns(e):e,u=ua(l.pathname||"/",i);if(u==null)return null;let h=Zv(s);cy(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=yy(u);d=Sy(h[m],p,r)}return d}function Zv(s,e=[],i=[],r="",l=!1){let u=(h,d,m=l,p)=>{let g={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:d,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Zt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=oa([r,g.relativePath]),x=i.concat(g);h.children&&h.children.length>0&&(Zt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Zv(h.children,e,x,v,m)),!(h.path==null&&!h.index)&&e.push({path:v,score:_y(v,h.index),routesMeta:x})};return s.forEach((h,d)=>{if(h.path===""||!h.path?.includes("?"))u(h,d);else for(let m of Kv(h.path))u(h,d,!0,m)}),e}function Kv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=Kv(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function cy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:vy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var fy=/^:[\w-]+$/,hy=3,dy=2,py=1,my=10,gy=-2,q_=s=>s==="*";function _y(s,e){let i=s.split("/"),r=i.length;return i.some(q_)&&(r+=gy),e&&(r+=dy),i.filter(l=>!q_(l)).reduce((l,u)=>l+(fy.test(u)?hy:u===""?py:my),r)}function vy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Sy(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=Fu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=Fu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),h.push({params:l,pathname:oa([u,v.pathname]),pathnameBase:by(oa([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=oa([u,v.pathnameBase]))}return h}function Fu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=xy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let T=d[x]||"";h=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const M=d[x];return v&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function xy(s,e=!1,i=!0){Ni(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function yy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ni(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ua(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function My(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ns(s):s;return{pathname:i?i.startsWith("/")?i:Ey(i,e):e,search:Ay(r),hash:Ry(l)}}function Ey(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function lh(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ty(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Qv(s){let e=Ty(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Jv(s,e,i,r=!1){let l;typeof s=="string"?l=Ns(s):(l={...s},Zt(!l.pathname||!l.pathname.includes("?"),lh("?","pathname","search",l)),Zt(!l.pathname||!l.pathname.includes("#"),lh("#","pathname","hash",l)),Zt(!l.search||!l.search.includes("#"),lh("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let v=e.length-1;if(!r&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}d=v>=0?e[v]:"/"}let m=My(l,d),p=h&&h!=="/"&&h.endsWith("/"),g=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var oa=s=>s.join("/").replace(/\/\/+/g,"/"),by=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ay=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Ry=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Cy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var $v=["POST","PUT","PATCH","DELETE"];new Set($v);var wy=["GET",...$v];new Set(wy);var Os=te.createContext(null);Os.displayName="DataRouter";var Xu=te.createContext(null);Xu.displayName="DataRouterState";te.createContext(!1);var e0=te.createContext({isTransitioning:!1});e0.displayName="ViewTransition";var Dy=te.createContext(new Map);Dy.displayName="Fetchers";var Uy=te.createContext(null);Uy.displayName="Await";var Pi=te.createContext(null);Pi.displayName="Navigation";var ko=te.createContext(null);ko.displayName="Location";var fa=te.createContext({outlet:null,matches:[],isDataRoute:!1});fa.displayName="Route";var zd=te.createContext(null);zd.displayName="RouteError";function Ly(s,{relative:e}={}){Zt(Xo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=te.useContext(Pi),{hash:l,pathname:u,search:h}=Wo(s,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:oa([i,u])),r.createHref({pathname:d,search:h,hash:l})}function Xo(){return te.useContext(ko)!=null}function Rr(){return Zt(Xo(),"useLocation() may be used only in the context of a <Router> component."),te.useContext(ko).location}var t0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function n0(s){te.useContext(Pi).static||te.useLayoutEffect(s)}function Ny(){let{isDataRoute:s}=te.useContext(fa);return s?qy():Oy()}function Oy(){Zt(Xo(),"useNavigate() may be used only in the context of a <Router> component.");let s=te.useContext(Os),{basename:e,navigator:i}=te.useContext(Pi),{matches:r}=te.useContext(fa),{pathname:l}=Rr(),u=JSON.stringify(Qv(r)),h=te.useRef(!1);return n0(()=>{h.current=!0}),te.useCallback((m,p={})=>{if(Ni(h.current,t0),!h.current)return;if(typeof m=="number"){i.go(m);return}let g=Jv(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:oa([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}te.createContext(null);function Wo(s,{relative:e}={}){let{matches:i}=te.useContext(fa),{pathname:r}=Rr(),l=JSON.stringify(Qv(i));return te.useMemo(()=>Jv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function Py(s,e){return i0(s,e)}function i0(s,e,i,r,l){Zt(Xo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=te.useContext(Pi),{matches:h}=te.useContext(fa),d=h[h.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let C=v&&v.path||"";a0(p,!v||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let x=Rr(),M;if(e){let C=typeof e=="string"?Ns(e):e;Zt(g==="/"||C.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${C.pathname}" was given in the \`location\` prop.`),M=C}else M=x;let T=M.pathname||"/",E=T;if(g!=="/"){let C=g.replace(/^\//,"").split("/");E="/"+T.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=jv(s,{pathname:E});Ni(v||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ni(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Hy(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},m,C.params),pathname:oa([g,u.encodeLocation?u.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?g:oa([g,u.encodeLocation?u.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),h,i,r,l);return e&&_?te.createElement(ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function zy(){let s=Wy(),e=Cy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=te.createElement(te.Fragment,null,te.createElement("p",null,"💿 Hey developer 👋"),te.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",te.createElement("code",{style:u},"ErrorBoundary")," or"," ",te.createElement("code",{style:u},"errorElement")," prop on your route.")),te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),i?te.createElement("pre",{style:l},i):null,h)}var By=te.createElement(zy,null),Iy=class extends te.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.unstable_onError?this.props.unstable_onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?te.createElement(fa.Provider,{value:this.props.routeContext},te.createElement(zd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Fy({routeContext:s,match:e,children:i}){let r=te.useContext(Os);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),te.createElement(fa.Provider,{value:s},i)}function Hy(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,h=i?.errors;if(h!=null){let p=u.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);Zt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,m=-1;if(i)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:v,errors:x}=i,M=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||M){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,g,v)=>{let x,M=!1,T=null,E=null;i&&(x=h&&g.route.id?h[g.route.id]:void 0,T=g.route.errorElement||By,d&&(m<0&&v===0?(a0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,E=null):m===v&&(M=!0,E=g.route.hydrateFallbackElement||null)));let y=e.concat(u.slice(0,v+1)),_=()=>{let C;return x?C=T:M?C=E:g.route.Component?C=te.createElement(g.route.Component,null):g.route.element?C=g.route.element:C=p,te.createElement(Fy,{match:g,routeContext:{outlet:p,matches:y,isDataRoute:i!=null},children:C})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?te.createElement(Iy,{location:i.location,revalidation:i.revalidation,component:T,error:x,children:_(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:r}):_()},null)}function Bd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gy(s){let e=te.useContext(Os);return Zt(e,Bd(s)),e}function Vy(s){let e=te.useContext(Xu);return Zt(e,Bd(s)),e}function ky(s){let e=te.useContext(fa);return Zt(e,Bd(s)),e}function Id(s){let e=ky(s),i=e.matches[e.matches.length-1];return Zt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Xy(){return Id("useRouteId")}function Wy(){let s=te.useContext(zd),e=Vy("useRouteError"),i=Id("useRouteError");return s!==void 0?s:e.errors?.[i]}function qy(){let{router:s}=Gy("useNavigate"),e=Id("useNavigate"),i=te.useRef(!1);return n0(()=>{i.current=!0}),te.useCallback(async(l,u={})=>{Ni(i.current,t0),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var Y_={};function a0(s,e,i){!e&&!Y_[s]&&(Y_[s]=!0,Ni(!1,i))}te.memo(Yy);function Yy({routes:s,future:e,state:i,unstable_onError:r}){return i0(s,void 0,i,r,e)}function kh(s){Zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jy({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Zt(!Xo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=te.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=Ns(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=i,M=te.useMemo(()=>{let T=ua(m,h);return T==null?null:{location:{pathname:T,search:p,hash:g,state:v,key:x},navigationType:r}},[h,m,p,g,v,x,r]);return Ni(M!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:te.createElement(Pi.Provider,{value:d},te.createElement(ko.Provider,{children:e,value:M}))}function Zy({children:s,location:e}){return Py(Xh(s),e)}function Xh(s,e=[]){let i=[];return te.Children.forEach(s,(r,l)=>{if(!te.isValidElement(r))return;let u=[...e,l];if(r.type===te.Fragment){i.push.apply(i,Xh(r.props.children,u));return}Zt(r.type===kh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Zt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Xh(r.props.children,u)),i.push(h)}),i}var Lu="get",Nu="application/x-www-form-urlencoded";function Wu(s){return s!=null&&typeof s.tagName=="string"}function Ky(s){return Wu(s)&&s.tagName.toLowerCase()==="button"}function Qy(s){return Wu(s)&&s.tagName.toLowerCase()==="form"}function Jy(s){return Wu(s)&&s.tagName.toLowerCase()==="input"}function $y(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function eM(s,e){return s.button===0&&(!e||e==="_self")&&!$y(s)}var lu=null;function tM(){if(lu===null)try{new FormData(document.createElement("form"),0),lu=!1}catch{lu=!0}return lu}var nM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uh(s){return s!=null&&!nM.has(s)?(Ni(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nu}"`),null):s}function iM(s,e){let i,r,l,u,h;if(Qy(s)){let d=s.getAttribute("action");r=d?ua(d,e):null,i=s.getAttribute("method")||Lu,l=uh(s.getAttribute("enctype"))||Nu,u=new FormData(s)}else if(Ky(s)||Jy(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ua(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Lu,l=uh(s.getAttribute("formenctype"))||uh(d.getAttribute("enctype"))||Nu,u=new FormData(d,s),!tM()){let{name:p,type:g,value:v}=s;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(Wu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Lu,r=null,l=Nu,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fd(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function aM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ua(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function rM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function oM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let h=await rM(u,i);return h.links?h.links():[]}return[]}));return fM(r.flat(1).filter(sM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function j_(s,e,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function lM(s,e,{includeHydrateFallback:i}={}){return uM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function uM(s){return[...new Set(s)]}function cM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function fM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(cM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function r0(){let s=te.useContext(Os);return Fd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function hM(){let s=te.useContext(Xu);return Fd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Hd=te.createContext(void 0);Hd.displayName="FrameworkContext";function s0(){let s=te.useContext(Hd);return Fd(s,"You must render this element inside a <HydratedRouter> element"),s}function dM(s,e){let i=te.useContext(Hd),[r,l]=te.useState(!1),[u,h]=te.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=te.useRef(null);te.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let E=_=>{_.forEach(C=>{h(C.isIntersecting)})},y=new IntersectionObserver(E,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),te.useEffect(()=>{if(r){let E=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(E)}}},[r]);let M=()=>{l(!0)},T=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Do(d,M),onBlur:Do(m,T),onMouseEnter:Do(p,M),onMouseLeave:Do(g,T),onTouchStart:Do(v,M)}]:[!1,x,{}]}function Do(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function pM({page:s,...e}){let{router:i}=r0(),r=te.useMemo(()=>jv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?te.createElement(gM,{page:s,matches:r,...e}):null}function mM(s){let{manifest:e,routeModules:i}=s0(),[r,l]=te.useState([]);return te.useEffect(()=>{let u=!1;return oM(s,e,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,e,i]),r}function gM({page:s,matches:e,...i}){let r=Rr(),{manifest:l,routeModules:u}=s0(),{basename:h}=r0(),{loaderData:d,matches:m}=hM(),p=te.useMemo(()=>j_(s,e,m,l,r,"data"),[s,e,m,l,r]),g=te.useMemo(()=>j_(s,e,m,l,r,"assets"),[s,e,m,l,r]),v=te.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,E=!1;if(e.forEach(_=>{let C=l.routes[_.route.id];!C||!C.hasLoader||(!p.some(L=>L.route.id===_.route.id)&&_.route.id in d&&u[_.route.id]?.shouldRevalidate||C.hasClientLoader?E=!0:T.add(_.route.id))}),T.size===0)return[];let y=aM(s,h,"data");return E&&T.size>0&&y.searchParams.set("_routes",e.filter(_=>T.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[h,d,r,l,p,e,s,u]),x=te.useMemo(()=>lM(g,l),[g,l]),M=mM(g);return te.createElement(te.Fragment,null,v.map(T=>te.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),x.map(T=>te.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),M.map(({key:T,link:E})=>te.createElement("link",{key:T,nonce:i.nonce,...E})))}function _M(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var o0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{o0&&(window.__reactRouterVersion="7.9.4")}catch{}function vM({basename:s,children:e,window:i}){let r=te.useRef();r.current==null&&(r.current=ry({window:i,v5Compat:!0}));let l=r.current,[u,h]=te.useState({action:l.action,location:l.location}),d=te.useCallback(m=>{te.startTransition(()=>h(m))},[h]);return te.useLayoutEffect(()=>l.listen(d),[l,d]),te.createElement(jy,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var l0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,u0=te.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:g,viewTransition:v,...x},M){let{basename:T}=te.useContext(Pi),E=typeof p=="string"&&l0.test(p),y,_=!1;if(typeof p=="string"&&E&&(y=p,o0))try{let w=new URL(window.location.href),D=p.startsWith("//")?new URL(w.protocol+p):new URL(p),G=ua(D.pathname,T);D.origin===w.origin&&G!=null?p=G+D.search+D.hash:_=!0}catch{Ni(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=Ly(p,{relative:l}),[L,U,H]=dM(r,x),I=MM(p,{replace:h,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:v});function P(w){e&&e(w),w.defaultPrevented||I(w)}let W=te.createElement("a",{...x,...H,href:y||C,onClick:_||u?e:P,ref:_M(M,U),target:m,"data-discover":!E&&i==="render"?"true":void 0});return L&&!E?te.createElement(te.Fragment,null,W,te.createElement(pM,{page:C})):W});u0.displayName="Link";var SM=te.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},g){let v=Wo(h,{relative:p.relative}),x=Rr(),M=te.useContext(Xu),{navigator:T,basename:E}=te.useContext(Pi),y=M!=null&&RM(v)&&d===!0,_=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,C=x.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(C=C.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&E&&(L=ua(L,E)||L);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=C===_||!l&&C.startsWith(_)&&C.charAt(U)==="/",I=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),P={isActive:H,isPending:I,isTransitioning:y},W=H?e:void 0,w;typeof r=="function"?w=r(P):w=[r,H?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof u=="function"?u(P):u;return te.createElement(u0,{...p,"aria-current":W,className:w,ref:g,style:D,to:h,viewTransition:d},typeof m=="function"?m(P):m)});SM.displayName="NavLink";var xM=te.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Lu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...x},M)=>{let T=bM(),E=AM(d,{relative:p}),y=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&l0.test(d),C=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let U=L.nativeEvent.submitter,H=U?.getAttribute("formmethod")||h;T(U||L.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return te.createElement("form",{ref:M,method:y,action:E,onSubmit:r?m:C,...x,"data-discover":!_&&s==="render"?"true":void 0})});xM.displayName="Form";function yM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function c0(s){let e=te.useContext(Os);return Zt(e,yM(s)),e}function MM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=Ny(),m=Rr(),p=Wo(s,{relative:u});return te.useCallback(g=>{if(eM(g,e)){g.preventDefault();let v=i!==void 0?i:Bo(m)===Bo(p);d(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,e,s,l,u,h])}var EM=0,TM=()=>`__${String(++EM)}__`;function bM(){let{router:s}=c0("useSubmit"),{basename:e}=te.useContext(Pi),i=Xy();return te.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=iM(r,e);if(l.navigate===!1){let g=l.fetcherKey||TM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function AM(s,{relative:e}={}){let{basename:i}=te.useContext(Pi),r=te.useContext(fa);Zt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Wo(s||".",{relative:e})},h=Rr();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:oa([i,u.pathname])),Bo(u)}function RM(s,{relative:e}={}){let i=te.useContext(e0);Zt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=c0("useViewTransitionState"),l=Wo(s,{relative:e});if(!i.isTransitioning)return!1;let u=ua(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=ua(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Fu(l.pathname,h)!=null||Fu(l.pathname,u)!=null}const f0=(s={})=>{const{onAudioChunk:e,chunkIntervalMs:i=100,sampleRate:r=24e3}=s,[l,u]=te.useState(!1),[h,d]=te.useState(0),[m,p]=te.useState(null),g=te.useRef(null),v=te.useRef(null),x=te.useRef(null),M=te.useRef(null),T=te.useRef(new Float32Array(0)),E=te.useRef(null);te.useEffect(()=>()=>{_()},[]);const y=te.useCallback(async()=>{try{p(null),console.log("🎤 Starting microphone stream...");const C=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,sampleRate:r,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});g.current=C;const L=new AudioContext({sampleRate:r});v.current=L;const U=L.createMediaStreamSource(C);x.current=U;const H=L.createScriptProcessor(4096,1,1);M.current=H,H.onaudioprocess=P=>{const W=P.inputBuffer.getChannelData(0),D=W.reduce((ne,ue)=>ne+Math.abs(ue),0)/W.length;d(Math.min(D*10,1));const G=new Float32Array(T.current.length+W.length);G.set(T.current),G.set(W,T.current.length),T.current=G},U.connect(H),H.connect(L.destination);const I=()=>{T.current.length>0&&(e?.(T.current),T.current=new Float32Array(0))};E.current=window.setInterval(I,i),u(!0),console.log("✅ Microphone stream started"),console.log(`📊 Sample rate: ${r}Hz, Chunk interval: ${i}ms`)}catch(C){console.error("❌ Error starting microphone stream:",C),p(C instanceof Error?C.message:"Failed to access microphone"),u(!1)}},[e,i,r]),_=te.useCallback(()=>{console.log("⏹️ Stopping microphone stream..."),E.current!==null&&(clearInterval(E.current),E.current=null),M.current&&(M.current.disconnect(),M.current.onaudioprocess=null,M.current=null),x.current&&(x.current.disconnect(),x.current=null),v.current&&(v.current.close(),v.current=null),g.current&&(g.current.getTracks().forEach(C=>C.stop()),g.current=null),T.current=new Float32Array(0),u(!1),d(0),console.log("✅ Microphone stream stopped")},[]);return{isStreaming:l,audioLevel:h,startStreaming:y,stopStreaming:_,error:m}};function CM(s,e=16e3){const i=new Int16Array(s.length);for(let u=0;u<s.length;u++){const h=Math.max(-1,Math.min(1,s[u]));i[u]=h<0?h*32768:h*32767}const r=wM(i,e);let l="";for(let u=0;u<r.length;u++)l+=String.fromCharCode(r[u]);return btoa(l)}function wM(s,e){const l=e*1*2,u=1*(16/8),h=s.length*2,m=44+h,p=new ArrayBuffer(m),g=new DataView(p);uu(g,0,"RIFF"),g.setUint32(4,m-8,!0),uu(g,8,"WAVE"),uu(g,12,"fmt "),g.setUint32(16,16,!0),g.setUint16(20,1,!0),g.setUint16(22,1,!0),g.setUint32(24,e,!0),g.setUint32(28,l,!0),g.setUint16(32,u,!0),g.setUint16(34,16,!0),uu(g,36,"data"),g.setUint32(40,h,!0);const v=new Uint8Array(p),x=new Uint8Array(s.buffer);return v.set(x,44),new Uint8Array(p)}function uu(s,e,i){for(let r=0;r<i.length;r++)s.setUint8(e+r,i.charCodeAt(r))}function DM(s){const e=atob(s),i=new Uint8Array(e.length);for(let m=0;m<e.length;m++)i[m]=e.charCodeAt(m);const r=new DataView(i.buffer);let l=44;if(String.fromCharCode(r.getUint8(0),r.getUint8(1),r.getUint8(2),r.getUint8(3))!=="RIFF"){console.warn("Not a valid WAV file, trying to decode as raw PCM16");const m=new Int16Array(i.buffer),p=new Float32Array(m.length);for(let g=0;g<m.length;g++)p[g]=m[g]/(m[g]<0?32768:32767);return p}const h=new Int16Array(i.buffer,l),d=new Float32Array(h.length);for(let m=0;m<h.length;m++)d[m]=h[m]/(h[m]<0?32768:32767);return d}class UM{audioContext;sampleRate;isPlaying;audioQueue;nextStartTime;onPlaybackStart;onPlaybackEnd;analyser;gainNode;audioLevel=0;animationFrameId=null;constructor(e=24e3){this.audioContext=new AudioContext({sampleRate:e}),this.sampleRate=e,this.isPlaying=!1,this.audioQueue=[],this.nextStartTime=0,this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=.8,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=1,this.gainNode.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.startAudioAnalysis()}startAudioAnalysis(){const e=new Uint8Array(this.analyser.frequencyBinCount),i=()=>{this.analyser.getByteTimeDomainData(e);let r=0;for(let u=0;u<e.length;u++){const h=(e[u]-128)/128;r+=h*h}const l=Math.sqrt(r/e.length);this.audioLevel=Math.min(l*2,1),this.animationFrameId=requestAnimationFrame(i)};i()}getAudioLevel(){return this.audioLevel}setOnPlaybackStart(e){this.onPlaybackStart=e}setOnPlaybackEnd(e){this.onPlaybackEnd=e}addAudioChunk(e){this.audioQueue.push(e),this.isPlaying||this.startPlayback()}startPlayback(){if(this.audioQueue.length===0){this.isPlaying=!1,this.onPlaybackEnd?.();return}this.isPlaying=!0,this.nextStartTime===0&&this.onPlaybackStart?.();const e=this.audioQueue.shift(),i=this.audioContext.createBuffer(1,e.length,this.sampleRate);i.getChannelData(0).set(e);const r=this.audioContext.createBufferSource();r.buffer=i,r.connect(this.gainNode);const l=Math.max(this.audioContext.currentTime,this.nextStartTime);r.start(l),this.nextStartTime=l+i.duration,r.onended=()=>{this.startPlayback()}}clear(){this.audioQueue=[],this.nextStartTime=0,this.isPlaying=!1,this.onPlaybackEnd?.()}async close(){this.clear(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.gainNode.disconnect(),this.analyser.disconnect(),await this.audioContext.close()}}const h0=s=>{const[e,i]=te.useState("disconnected"),[r,l]=te.useState(null),[u,h]=te.useState(0),d=te.useRef(null),m=te.useRef(null),p=te.useRef("disconnected"),g=te.useRef(null);te.useEffect(()=>{p.current=e,s.onStateChange?.(e)},[e,s]),te.useEffect(()=>(m.current=new UM(24e3),m.current.setOnPlaybackStart(()=>{console.log("🔊 Audio playback started"),i("speaking")}),m.current.setOnPlaybackEnd(()=>{console.log("🔇 Audio playback ended"),p.current==="speaking"&&i("idle")}),()=>{m.current&&(m.current.close(),m.current=null)}),[]),te.useEffect(()=>{const y=setInterval(()=>{m.current&&h(m.current.getAudioLevel())},50);return()=>{clearInterval(y)}},[]),te.useEffect(()=>()=>{d.current&&(d.current.close(),d.current=null)},[]);const v=te.useCallback(async()=>{try{i("connecting"),l(null),d.current&&(d.current.close(),d.current=null),console.log("🔌 Connecting to OpenAI via relay server..."),console.log("📡 Using relay server for secure connection");const E="ws://localhost:8080";console.log("🔗 Relay URL:",E);const y=new WebSocket(E);y.addEventListener("open",()=>{console.log("✅ WebSocket connected to relay");const _={type:"session.update",session:{modalities:["text","audio"],instructions:"Eres la recepcionista del Hotel Jokin. Responde en español, breve y profesionalmente.",voice:s.voice||"shimmer",input_audio_format:"pcm16",output_audio_format:"pcm16",input_audio_transcription:{model:"whisper-1"},turn_detection:{type:"server_vad",threshold:.5,prefix_padding_ms:500,silence_duration_ms:2e3},temperature:.8}};console.log("📤 Sending session config (brief instructions - full context sent as conversation item)"),y.send(JSON.stringify(_))}),y.addEventListener("message",async _=>{try{let C;if(_.data instanceof Blob){const L=await _.data.text();C=JSON.parse(L)}else if(typeof _.data=="string")C=JSON.parse(_.data);else{console.warn("⚠️ Unexpected message format:",typeof _.data);return}T(C)}catch(C){console.error("❌ Error parsing server message:",C)}}),y.addEventListener("error",_=>{console.error("❌ WebSocket error:",_),l("connection_error"),i("error")}),y.addEventListener("close",_=>{console.log("🔌 WebSocket closed:",_.code,_.reason),_.code===1002?(console.error("❌ Protocol error - check API key format"),l("Invalid API key or protocol error")):_.code===1006?(console.error("❌ Abnormal closure - connection lost"),l("Connection lost unexpectedly")):_.code===1008?(console.error("❌ Policy violation - likely authentication issue"),l("Authentication failed - check your API key")):_.reason&&l(_.reason),p.current!=="disconnected"&&i("disconnected"),d.current=null}),d.current=y}catch(E){console.error("❌ Error connecting to OpenAI:",E),l("connection_failed"),i("error")}},[s]),x=te.useCallback(()=>{console.log("🔌 Disconnecting from OpenAI..."),d.current&&(d.current.close(),d.current=null),m.current&&m.current.clear(),i("disconnected")},[]),M=te.useCallback(E=>{if(!d.current||d.current.readyState!==WebSocket.OPEN){console.warn("⚠️ WebSocket not ready, cannot send audio");return}try{const _={type:"input_audio_buffer.append",audio:CM(E)};d.current.send(JSON.stringify(_)),console.log("📤 Sent audio chunk:",E.length,"samples")}catch(y){console.error("❌ Error sending audio:",y)}},[]),T=te.useCallback(E=>{switch(console.log("📥 Server event:",E.type),E.type){case"relay.connected":console.log("✅ Connected to relay server");break;case"session.created":if(console.log("✅ Session created:",E.session),l(null),d.current&&d.current.readyState===WebSocket.OPEN){const _={type:"conversation.item.create",item:{type:"message",role:"system",content:[{type:"input_text",text:s.instructions||LM()}]}};console.log("📤 Sending context as conversation item"),d.current.send(JSON.stringify(_))}i("idle");break;case"session.updated":console.log("✅ Session updated"),console.log("📋 Session config received:",JSON.stringify(E.session,null,2)),console.log("📝 Instructions confirmed:",E.session?.instructions?.substring(0,100)+"..."),i("idle");break;case"input_audio_buffer.speech_started":console.log("🎤 User speech started"),(p.current==="speaking"||g.current)&&(console.log("⚠️ Interrupting assistant response..."),g.current&&d.current&&d.current.readyState===WebSocket.OPEN&&(d.current.send(JSON.stringify({type:"response.cancel"})),console.log("📤 Sent response.cancel to OpenAI (response ID:",g.current,")")),m.current&&(m.current.clear(),console.log("🧹 Cleared audio playback buffer"))),i("listening");break;case"input_audio_buffer.speech_stopped":console.log("🔇 User speech stopped"),i("thinking");break;case"input_audio_buffer.committed":console.log("✅ Audio buffer committed");break;case"conversation.item.created":console.log("💬 Conversation item created:",E.item);break;case"response.created":console.log("🤖 Response created:",E.response),g.current=E.response?.id||null,i("thinking");break;case"response.output_item.added":console.log("📝 Output item added:",E.item);break;case"response.audio.delta":if(console.log("🔊 Audio delta received:",E.delta?.length||0,"chars"),E.delta&&m.current)try{const _=DM(E.delta);m.current.addAudioChunk(_)}catch(_){console.error("❌ Error processing audio delta:",_)}break;case"response.audio.done":console.log("✅ Audio response complete");break;case"response.done":console.log("✅ Response complete:",E.response),g.current=null,p.current==="thinking"&&i("idle");break;case"response.cancelled":console.log("🚫 Response cancelled (interrupted by user)"),g.current=null,i("idle");break;case"response.text.delta":console.log("📝 Text delta:",E.delta);break;case"response.text.done":console.log("✅ Text complete:",E.text);break;case"error":if(console.error("❌ Server error:",E.error),E.error?.code==="response_cancel_not_active"){console.log("ℹ️ Attempted to cancel but no active response (audio was playing locally only)");break}const y=E.error?.message||JSON.stringify(E.error)||"server_error";l(y),i("error"),(y.includes("server had an error")||y.includes("500"))&&console.log("💡 Sugerencia: Este es un error temporal de OpenAI. Intenta de nuevo en unos segundos.");break;default:console.log("📥 Unhandled event type:",E.type)}},[]);return{state:e,error:r,connect:v,disconnect:x,sendAudio:M,isConnected:e==="connected"||e==="idle"||e==="listening"||e==="thinking"||e==="speaking",outputAudioLevel:u}};function LM(){return`Eres la recepcionista del Hotel Jokin, un hotel de lujo en Santiago de Compostela, Galicia, España.

El usuario siempre es un huésped del hotel.
Tu función es atenderle con educación, profesionalidad y discreción, ofreciendo información y recomendaciones solo sobre el hotel, sus servicios o el entorno local (restaurantes, transporte, actividades, cultura, etc.).

CRÍTICO - NUNCA DEJAR COLGANDO AL HUÉSPED:
❌ NUNCA JAMÁS digas:
- "Déjame revisar..."
- "Voy a comprobar..."
- "Un momento, por favor..."
- "Estoy consultando..."
- "Permíteme verificar..."
- "Voy a mirar..."
- "Dame un segundo..."

✅ SIEMPRE responde de forma INMEDIATA y CONCLUYENTE:
- Para reservas: "Perfecto, he realizado su reserva. Confirmado."
- Para información: Da la información directamente sin preámbulos
- Para recomendaciones: Pregunta preferencias PRIMERO, luego recomienda directamente

Antes de ofrecer cualquier recomendación, pregunta siempre los gustos o preferencias del huésped.

Tus respuestas deben ser breves, claras y educadas, con un máximo de 200 caracteres.
Evita comentarios personales o información ajena al contexto del hotel.

Mantén siempre un tono cálido, servicial y propio de una recepcionista de hotel de lujo.

Solo tienes permiso a recomendar estos restaurantes:
- Estilo moderno: Indómito.
- Estilo tradicional: A noiesa Casa de Comidas.`}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="180",NM=0,Z_=1,OM=2,d0=1,PM=2,ra=3,qa=0,Gn=1,Si=2,Xa=0,As=1,K_=2,Q_=3,J_=4,zM=5,yr=100,BM=101,IM=102,FM=103,HM=104,GM=200,VM=201,kM=202,XM=203,Wh=204,qh=205,WM=206,qM=207,YM=208,jM=209,ZM=210,KM=211,QM=212,JM=213,$M=214,Yh=0,jh=1,Zh=2,Cs=3,Kh=4,Qh=5,Jh=6,$h=7,p0=0,eE=1,tE=2,Wa=0,nE=1,iE=2,aE=3,rE=4,sE=5,oE=6,lE=7,m0=300,ws=301,Ds=302,ed=303,td=304,qu=306,nd=1e3,Er=1001,id=1002,Mi=1003,uE=1004,cu=1005,Di=1006,ch=1007,Tr=1008,Oi=1009,g0=1010,_0=1011,Io=1012,Vd=1013,br=1014,sa=1015,qo=1016,kd=1017,Xd=1018,Fo=1020,v0=35902,S0=35899,x0=1021,y0=1022,yi=1023,Ho=1026,Go=1027,M0=1028,Wd=1029,E0=1030,qd=1031,Yd=1033,Ou=33776,Pu=33777,zu=33778,Bu=33779,ad=35840,rd=35841,sd=35842,od=35843,ld=36196,ud=37492,cd=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,Sd=37816,xd=37817,yd=37818,Md=37819,Ed=37820,Td=37821,bd=36492,Ad=36494,Rd=36495,Cd=36283,wd=36284,Dd=36285,Ud=36286,cE=3200,fE=3201,hE=0,dE=1,ka="",fi="srgb",Us="srgb-linear",Hu="linear",Ht="srgb",cs=7680,$_=519,pE=512,mE=513,gE=514,T0=515,_E=516,vE=517,SE=518,xE=519,ev=35044,tv="300 es",Ui=2e3,Gu=2001;class Ps{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,Ld=180/Math.PI;function Yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function yE(s,e){return(s%e+e)%e}function hh(s,e,i){return(1-i)*s+i*e}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,i=0){Dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],T=u[h+2],E=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=T,e[i+3]=E;return}if(v!==E||m!==x||p!==M||g!==T){let y=1-d;const _=m*x+p*M+g*T+v*E,C=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const H=Math.sqrt(L),I=Math.atan2(H,_*C);y=Math.sin(y*I)/H,d=Math.sin(d*I)/H}const U=d*C;if(m=m*y+x*U,p=p*y+M*U,g=g*y+T*U,v=v*y+E*U,y===1-d){const H=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=H,p*=H,g*=H,v*=H}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],M=u[h+2],T=u[h+3];return e[i]=d*T+g*v+m*M-p*x,e[i+1]=m*T+g*x+p*v-d*M,e[i+2]=p*T+g*M+d*x-m*v,e[i+3]=g*T-d*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v-x*M*T;break;case"YXZ":this._x=x*g*v+p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v+x*M*T;break;case"ZXY":this._x=x*g*v-p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v-x*M*T;break;case"ZYX":this._x=x*g*v-p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v+x*M*T;break;case"YZX":this._x=x*g*v+p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v-x*M*T;break;case"XZY":this._x=x*g*v-p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(nv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(nv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dh=new oe,nv=new jo;class ft{constructor(e,i,r,l,u,h,d,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],T=r[8],E=l[0],y=l[3],_=l[6],C=l[1],L=l[4],U=l[7],H=l[2],I=l[5],P=l[8];return u[0]=h*E+d*C+m*H,u[3]=h*y+d*L+m*I,u[6]=h*_+d*U+m*P,u[1]=p*E+g*C+v*H,u[4]=p*y+g*L+v*I,u[7]=p*_+g*U+v*P,u[2]=x*E+M*C+T*H,u[5]=x*y+M*L+T*I,u[8]=x*_+M*U+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,T=i*v+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(l*p-g*r)*E,e[2]=(d*r-l*h)*E,e[3]=x*E,e[4]=(g*i-l*m)*E,e[5]=(l*u-d*i)*E,e[6]=M*E,e[7]=(r*m-p*i)*E,e[8]=(h*i-r*u)*E,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ph.makeScale(e,i)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,i){return this.premultiply(ph.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new ft;function b0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ME(){const s=Vu("canvas");return s.style.display="block",s}const iv={};function Vo(s){s in iv||(iv[s]=!0,console.warn(s))}function EE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const av=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TE(){const s={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ht&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ht&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Us]:{primaries:e,whitePoint:r,transfer:Hu,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Ct=TE();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class bE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{fs===void 0&&(fs=Vu("canvas")),fs.width=e.width,fs.height=e.height;const l=fs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=fs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=la(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AE=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(mh(l[h].image)):u.push(mh(l[h]))}else u=mh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function mh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RE=0;const gh=new oe;class Vn extends Ps{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Er,l=Er,u=Di,h=Tr,d=yi,m=Oi,p=Vn.DEFAULT_ANISOTROPY,g=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Yo(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=m0;Vn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,i=0,r=0,l=1){$t.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],T=m[9],E=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-E)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+E)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(M+1)/2,H=(_+1)/2,I=(g+x)/4,P=(v+E)/4,W=(T+y)/4;return L>U&&L>H?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=I/r,u=P/r):U>H?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=I/l,u=W/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=P/u,l=W/u),this.set(r,l,u,i),this}let C=Math.sqrt((y-T)*(y-T)+(v-E)*(v-E)+(x-g)*(x-g));return Math.abs(C)<.001&&(C=1),this.x=(y-T)/C,this.y=(v-E)/C,this.z=(x-g)/C,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends Ps{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new $t(0,0,e,i),this.scissorTest=!1,this.viewport=new $t(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Vn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends CE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class A0 extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,gi):gi.fromBufferAttribute(u,h),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),hu.subVectors(this.max,Lo),hs.subVectors(e.a,Lo),ds.subVectors(e.b,Lo),ps.subVectors(e.c,Lo),Ba.subVectors(ds,hs),Ia.subVectors(ps,ds),dr.subVectors(hs,ps);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-dr.z,dr.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,dr.z,0,-dr.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-dr.y,dr.x,0];return!_h(i,hs,ds,ps,hu)||(i=[1,0,0,0,1,0,0,0,1],!_h(i,hs,ds,ps,hu))?!1:(du.crossVectors(Ba,Ia),i=[du.x,du.y,du.z],_h(i,hs,ds,ps,hu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ea=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],gi=new oe,fu=new Zo,hs=new oe,ds=new oe,ps=new oe,Ba=new oe,Ia=new oe,dr=new oe,Lo=new oe,hu=new oe,du=new oe,pr=new oe;function _h(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){pr.fromArray(s,u);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=e.dot(pr),p=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const DE=new Zo,No=new oe,vh=new oe;class Zd{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):DE.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(vh)),this.expandByPoint(No.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new oe,Sh=new oe,pu=new oe,Fa=new oe,xh=new oe,mu=new oe,yh=new oe;class R0{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Sh.copy(e).add(i).multiplyScalar(.5),pu.copy(i).sub(e).normalize(),Fa.copy(this.origin).sub(Sh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(pu),d=Fa.dot(this.direction),m=-Fa.dot(pu),p=Fa.lengthSq(),g=Math.abs(1-h*h);let v,x,M,T;if(g>0)if(v=h*m-d,x=h*d-m,T=u*g,v>=0)if(x>=-T)if(x<=T){const E=1/g;v*=E,x*=E,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-T?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=T?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Sh).addScaledVector(pu,x),M}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,r,l,u){xh.subVectors(i,e),mu.subVectors(r,e),yh.crossVectors(xh,mu);let h=this.direction.dot(yh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,e);const m=d*this.direction.dot(mu.crossVectors(Fa,mu));if(m<0)return null;const p=d*this.direction.dot(xh.cross(Fa));if(p<0||m+p>h)return null;const g=-d*Fa.dot(yh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,u,h,d,m,p,g,v,x,M,T,E,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,x,M,T,E,y)}set(e,i,r,l,u,h,d,m,p,g,v,x,M,T,E,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=T,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ms.setFromMatrixColumn(e,0).length(),u=1/ms.setFromMatrixColumn(e,1).length(),h=1/ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*g,M=h*v,T=d*g,E=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=x-E*p,i[9]=-d*m,i[2]=E-x*p,i[6]=T+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,M=m*v,T=p*g,E=p*v;i[0]=x+E*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-T,i[6]=E+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,M=m*v,T=p*g,E=p*v;i[0]=x-E*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*g,i[9]=E-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,M=h*v,T=d*g,E=d*v;i[0]=m*g,i[4]=T*p-M,i[8]=x*p+E,i[1]=m*v,i[5]=E*p+x,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,T=d*m,E=d*p;i[0]=m*g,i[4]=E-x*v,i[8]=T*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+T,i[10]=x-E*v}else if(e.order==="XZY"){const x=h*m,M=h*p,T=d*m,E=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+E,i[5]=h*g,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*g,i[10]=E*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UE,e,LE)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ha.crossVectors(r,Qn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ha.crossVectors(r,Qn)),Ha.normalize(),gu.crossVectors(Qn,Ha),l[0]=Ha.x,l[4]=gu.x,l[8]=Qn.x,l[1]=Ha.y,l[5]=gu.y,l[9]=Qn.y,l[2]=Ha.z,l[6]=gu.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],T=r[2],E=r[6],y=r[10],_=r[14],C=r[3],L=r[7],U=r[11],H=r[15],I=l[0],P=l[4],W=l[8],w=l[12],D=l[1],G=l[5],ne=l[9],ue=l[13],ve=l[2],he=l[6],z=l[10],Z=l[14],X=l[3],ce=l[7],ge=l[11],N=l[15];return u[0]=h*I+d*D+m*ve+p*X,u[4]=h*P+d*G+m*he+p*ce,u[8]=h*W+d*ne+m*z+p*ge,u[12]=h*w+d*ue+m*Z+p*N,u[1]=g*I+v*D+x*ve+M*X,u[5]=g*P+v*G+x*he+M*ce,u[9]=g*W+v*ne+x*z+M*ge,u[13]=g*w+v*ue+x*Z+M*N,u[2]=T*I+E*D+y*ve+_*X,u[6]=T*P+E*G+y*he+_*ce,u[10]=T*W+E*ne+y*z+_*ge,u[14]=T*w+E*ue+y*Z+_*N,u[3]=C*I+L*D+U*ve+H*X,u[7]=C*P+L*G+U*he+H*ce,u[11]=C*W+L*ne+U*z+H*ge,u[15]=C*w+L*ue+U*Z+H*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],M=e[14],T=e[3],E=e[7],y=e[11],_=e[15];return T*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*M-r*m*M)+E*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],M=e[11],T=e[12],E=e[13],y=e[14],_=e[15],C=v*y*p-E*x*p+E*m*M-d*y*M-v*m*_+d*x*_,L=T*x*p-g*y*p-T*m*M+h*y*M+g*m*_-h*x*_,U=g*E*p-T*v*p+T*d*M-h*E*M-g*d*_+h*v*_,H=T*v*m-g*E*m-T*d*x+h*E*x+g*d*y-h*v*y,I=i*C+r*L+l*U+u*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=C*P,e[1]=(E*x*u-v*y*u-E*l*M+r*y*M+v*l*_-r*x*_)*P,e[2]=(d*y*u-E*m*u+E*l*p-r*y*p-d*l*_+r*m*_)*P,e[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*M-r*m*M)*P,e[4]=L*P,e[5]=(g*y*u-T*x*u+T*l*M-i*y*M-g*l*_+i*x*_)*P,e[6]=(T*m*u-h*y*u-T*l*p+i*y*p+h*l*_-i*m*_)*P,e[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*P,e[8]=U*P,e[9]=(T*v*u-g*E*u-T*r*M+i*E*M+g*r*_-i*v*_)*P,e[10]=(h*E*u-T*d*u+T*r*p-i*E*p-h*r*_+i*d*_)*P,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*M-i*d*M)*P,e[12]=H*P,e[13]=(g*E*l-T*v*l+T*r*x-i*E*x-g*r*y+i*v*y)*P,e[14]=(T*d*l-h*E*l-T*r*m+i*E*m+h*r*y-i*d*y)*P,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,T=u*v,E=h*g,y=h*v,_=d*v,C=m*p,L=m*g,U=m*v,H=r.x,I=r.y,P=r.z;return l[0]=(1-(E+_))*H,l[1]=(M+U)*H,l[2]=(T-L)*H,l[3]=0,l[4]=(M-U)*I,l[5]=(1-(x+_))*I,l[6]=(y+C)*I,l[7]=0,l[8]=(T+L)*P,l[9]=(y-C)*P,l[10]=(1-(x+E))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ms.set(l[0],l[1],l[2]).length();const h=ms.set(l[4],l[5],l[6]).length(),d=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,g=1/h,v=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ui,m=!1){const p=this.elements,g=2*u/(i-e),v=2*u/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let T,E;if(m)T=u/(h-u),E=h*u/(h-u);else if(d===Ui)T=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Gu)T=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ui,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,E;if(m)T=1/(h-u),E=h/(h-u);else if(d===Ui)T=-2/(h-u),E=-(h+u)/(h-u);else if(d===Gu)T=-1/(h-u),E=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ms=new oe,_i=new en,UE=new oe(0,0,0),LE=new oe(1,1,1),Ha=new oe,gu=new oe,Qn=new oe,sv=new en,ov=new jo;class ca{constructor(e=0,i=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ov.setFromEuler(this),this.setFromQuaternion(ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NE=0;const lv=new oe,gs=new jo,na=new en,_u=new oe,Oo=new oe,OE=new oe,PE=new jo,uv=new oe(1,0,0),cv=new oe(0,1,0),fv=new oe(0,0,1),hv={type:"added"},zE={type:"removed"},_s={type:"childadded",child:null},Mh={type:"childremoved",child:null};class wn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new oe,i=new ca,r=new jo,l=new oe(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ft}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(uv,e)}rotateY(e){return this.rotateOnAxis(cv,e)}rotateZ(e){return this.rotateOnAxis(fv,e)}translateOnAxis(e,i){return lv.copy(e).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(uv,e)}translateY(e){return this.translateOnAxis(cv,e)}translateZ(e){return this.translateOnAxis(fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?_u.copy(e):_u.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Oo,_u,this.up):na.lookAt(_u,Oo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(na),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hv),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zE),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hv),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,OE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,PE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new oe(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new oe,ia=new oe,Eh=new oe,aa=new oe,vs=new oe,Ss=new oe,dv=new oe,Th=new oe,bh=new oe,Ah=new oe,Rh=new $t,Ch=new $t,wh=new $t;class xi{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){vi.subVectors(l,i),ia.subVectors(r,i),Eh.subVectors(e,i);const h=vi.dot(vi),d=vi.dot(ia),m=vi.dot(Eh),p=ia.dot(ia),g=ia.dot(Eh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,T=(h*g-d*m)*x;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,r),wh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Rh,u.x),h.addScaledVector(Ch,u.y),h.addScaledVector(wh,u.z),h}static isFrontFacing(e,i,r,l){return vi.subVectors(r,i),ia.subVectors(e,i),vi.cross(ia).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),vi.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return xi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;vs.subVectors(l,r),Ss.subVectors(u,r),Th.subVectors(e,r);const m=vs.dot(Th),p=Ss.dot(Th);if(m<=0&&p<=0)return i.copy(r);bh.subVectors(e,l);const g=vs.dot(bh),v=Ss.dot(bh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(vs,h);Ah.subVectors(e,u);const M=vs.dot(Ah),T=Ss.dot(Ah);if(T>=0&&M<=T)return i.copy(u);const E=M*p-m*T;if(E<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(Ss,d);const y=g*T-M*v;if(y<=0&&v-g>=0&&M-T>=0)return dv.subVectors(u,l),d=(v-g)/(v-g+(M-T)),i.copy(l).addScaledVector(dv,d);const _=1/(y+E+x);return h=E*_,d=x*_,i.copy(r).addScaledVector(vs,h).addScaledVector(Ss,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},vu={h:0,s:0,l:0};function Dh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class wt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ct.workingColorSpace){if(e=yE(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Dh(h,u,e+1/3),this.g=Dh(h,u,e),this.b=Dh(h,u,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=C0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ct.workingToColorSpace(Cn.copy(this),e),Math.round(Mt(Cn.r*255,0,255))*65536+Math.round(Mt(Cn.g*255,0,255))*256+Math.round(Mt(Cn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=fi){Ct.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+e,Ga.s+i,Ga.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ga),e.getHSL(vu);const r=hh(Ga.h,vu.h,i),l=hh(Ga.s,vu.s,i),u=hh(Ga.l,vu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new wt;wt.NAMES=C0;let BE=0;class Yu extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=As,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wh&&(r.blendSrc=this.blendSrc),this.blendDst!==qh&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ts extends Yu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new oe,Su=new Dt;let IE=0;class Li{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=ev,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Su.fromBufferAttribute(this,i),Su.applyMatrix3(e),this.setXY(i,Su.x,Su.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ev&&(e.usage=this.usage),e}}class w0 extends Li{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class D0 extends Li{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ei extends Li{constructor(e,i,r){super(new Float32Array(e),i,r)}}let FE=0;const ci=new en,Uh=new wn,xs=new oe,Jn=new Zo,Po=new Zo,vn=new oe;class ha extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?D0:w0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ei(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Jn.min,Po.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,Po.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(Po.min),Jn.expandByPoint(Po.max))}Jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(xs.fromBufferAttribute(e,p),vn.add(xs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new oe,m[W]=new oe;const p=new oe,g=new oe,v=new oe,x=new Dt,M=new Dt,T=new Dt,E=new oe,y=new oe;function _(W,w,D){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,D),x.fromBufferAttribute(u,W),M.fromBufferAttribute(u,w),T.fromBufferAttribute(u,D),g.sub(p),v.sub(p),M.sub(x),T.sub(x);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(E.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(G),d[W].add(E),d[w].add(E),d[D].add(E),m[W].add(y),m[w].add(y),m[D].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let W=0,w=C.length;W<w;++W){const D=C[W],G=D.start,ne=D.count;for(let ue=G,ve=G+ne;ue<ve;ue+=3)_(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new oe,U=new oe,H=new oe,I=new oe;function P(W){H.fromBufferAttribute(l,W),I.copy(H);const w=d[W];L.copy(w),L.sub(H.multiplyScalar(H.dot(w))).normalize(),U.crossVectors(I,w);const G=U.dot(m[W])<0?-1:1;h.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,w=C.length;W<w;++W){const D=C[W],G=D.start,ne=D.count;for(let ue=G,ve=G+ne;ue<ve;ue+=3)P(e.getX(ue+0)),P(e.getX(ue+1)),P(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new oe,u=new oe,h=new oe,d=new oe,m=new oe,p=new oe,g=new oe,v=new oe;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),E=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,T=0;for(let E=0,y=m.length;E<y;E++){d.isInterleavedBufferAttribute?M=m[E]*d.data.stride+d.offset:M=m[E]*g;for(let _=0;_<g;_++)x[T++]=p[M++]}return new Li(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ha,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pv=new en,mr=new R0,xu=new Zd,mv=new oe,yu=new oe,Mu=new oe,Eu=new oe,Lh=new oe,Tu=new oe,gv=new oe,bu=new oe;class $n extends wn{constructor(e=new ha,i=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Tu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(Lh.fromBufferAttribute(v,e),h?Tu.addScaledVector(Lh,g):Tu.addScaledVector(Lh.sub(i),g))}i.add(Tu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(u),mr.copy(e.ray).recast(e.near),!(xu.containsPoint(mr.origin)===!1&&(mr.intersectSphere(xu,mv)===null||mr.origin.distanceToSquared(mv)>(e.far-e.near)**2))&&(pv.copy(u).invert(),mr.copy(e.ray).applyMatrix4(pv),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,E=x.length;T<E;T++){const y=x[T],_=h[y.materialIndex],C=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=C,H=L;U<H;U+=3){const I=d.getX(U),P=d.getX(U+1),W=d.getX(U+2);l=Au(this,_,e,r,p,g,v,I,P,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let y=T,_=E;y<_;y+=3){const C=d.getX(y),L=d.getX(y+1),U=d.getX(y+2);l=Au(this,h,e,r,p,g,v,C,L,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,E=x.length;T<E;T++){const y=x[T],_=h[y.materialIndex],C=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=C,H=L;U<H;U+=3){const I=U,P=U+1,W=U+2;l=Au(this,_,e,r,p,g,v,I,P,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),E=Math.min(m.count,M.start+M.count);for(let y=T,_=E;y<_;y+=3){const C=y,L=y+1,U=y+2;l=Au(this,h,e,r,p,g,v,C,L,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function HE(s,e,i,r,l,u,h,d){let m;if(e.side===Gn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===qa,d),m===null)return null;bu.copy(d),bu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(bu);return p<i.near||p>i.far?null:{distance:p,point:bu.clone(),object:s}}function Au(s,e,i,r,l,u,h,d,m,p){s.getVertexPosition(d,yu),s.getVertexPosition(m,Mu),s.getVertexPosition(p,Eu);const g=HE(s,e,i,r,yu,Mu,Eu,gv);if(g){const v=new oe;xi.getBarycoord(gv,yu,Mu,Eu,v),l&&(g.uv=xi.getInterpolatedAttribute(l,d,m,p,v,new Dt)),u&&(g.uv1=xi.getInterpolatedAttribute(u,d,m,p,v,new Dt)),h&&(g.normal=xi.getInterpolatedAttribute(h,d,m,p,v,new oe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new oe,materialIndex:0};xi.getNormal(yu,Mu,Eu,x.normal),g.face=x,g.barycoord=v}return g}class Ko extends ha{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,e,h,u,0),T("z","y","x",1,-1,r,i,-e,h,u,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ei(p,3)),this.setAttribute("normal",new ei(g,3)),this.setAttribute("uv",new ei(v,2));function T(E,y,_,C,L,U,H,I,P,W,w){const D=U/P,G=H/W,ne=U/2,ue=H/2,ve=I/2,he=P+1,z=W+1;let Z=0,X=0;const ce=new oe;for(let ge=0;ge<z;ge++){const N=ge*G-ue;for(let Q=0;Q<he;Q++){const ye=Q*D-ne;ce[E]=ye*C,ce[y]=N*L,ce[_]=ve,p.push(ce.x,ce.y,ce.z),ce[E]=0,ce[y]=0,ce[_]=I>0?1:-1,g.push(ce.x,ce.y,ce.z),v.push(Q/P),v.push(1-ge/W),Z+=1}}for(let ge=0;ge<W;ge++)for(let N=0;N<P;N++){const Q=x+N+he*ge,ye=x+N+he*(ge+1),Me=x+(N+1)+he*(ge+1),Re=x+(N+1)+he*ge;m.push(Q,ye,Re),m.push(ye,Me,Re),X+=6}d.addGroup(M,X,w),M+=X,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(s){const e={};for(let i=0;i<s.length;i++){const r=Ls(s[i]);for(const l in r)e[l]=r[l]}return e}function GE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function U0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const VE={clone:Ls,merge:Nn};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Yu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=GE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class L0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new oe,_v=new Dt,vv=new Dt;class hi extends L0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-e/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-e/Va.z)}getViewSize(e,i){return this.getViewBounds(e,_v,vv),i.subVectors(vv,_v)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Ms=1;class WE extends wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(ys,Ms,e,i);l.layers=this.layers,this.add(l);const u=new hi(ys,Ms,e,i);u.layers=this.layers,this.add(u);const h=new hi(ys,Ms,e,i);h.layers=this.layers,this.add(h);const d=new hi(ys,Ms,e,i);d.layers=this.layers,this.add(d);const m=new hi(ys,Ms,e,i);m.layers=this.layers,this.add(m);const p=new hi(ys,Ms,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class N0 extends Vn{constructor(e=[],i=ws,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qE extends Ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new N0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ko(5,5,5),u=new Ya({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Xa});u.uniforms.tEquirect.value=i;const h=new $n(l,u),d=i.minFilter;return i.minFilter===Tr&&(i.minFilter=Di),new WE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class Ru extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const E of e.hand.values()){const y=i.getJointPose(E,r),_=this._getHandJoint(p,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ru;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class jE extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oh=new oe,ZE=new oe,KE=new ft;class Sr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Oh.subVectors(r,i).cross(ZE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Oh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||KE.getNormalMatrix(e),l=this.coplanarPoint(Oh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Zd,QE=new Dt(.5,.5),Cu=new oe;class Qd{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,h=new Sr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],M=u[7],T=u[8],E=u[9],y=u[10],_=u[11],C=u[12],L=u[13],U=u[14],H=u[15];if(l[0].setComponents(p-h,M-g,_-T,H-C).normalize(),l[1].setComponents(p+h,M+g,_+T,H+C).normalize(),l[2].setComponents(p+d,M+v,_+E,H+L).normalize(),l[3].setComponents(p-d,M-v,_-E,H-L).normalize(),r)l[4].setComponents(m,x,y,U).normalize(),l[5].setComponents(p-m,M-x,_-y,H-U).normalize();else if(l[4].setComponents(p-m,M-x,_-y,H-U).normalize(),i===Ui)l[5].setComponents(p+m,M+x,_+y,H+U).normalize();else if(i===Gu)l[5].setComponents(m,x,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=QE.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cu.x=l.normal.x>0?e.max.x:e.min.x,Cu.y=l.normal.y>0?e.max.y:e.min.y,Cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O0 extends Vn{constructor(e,i,r=br,l,u,h,d=Mi,m=Mi,p,g=Ho,v=1){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class P0 extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qo extends ha{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,M=[],T=[],E=[],y=[];for(let _=0;_<g;_++){const C=_*x-h;for(let L=0;L<p;L++){const U=L*v-u;T.push(U,-C,0),E.push(0,0,1),y.push(L/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let C=0;C<d;C++){const L=C+p*_,U=C+p*(_+1),H=C+1+p*(_+1),I=C+1+p*_;M.push(L,U,I),M.push(U,H,I)}this.setIndex(M),this.setAttribute("position",new ei(T,3)),this.setAttribute("normal",new ei(E,3)),this.setAttribute("uv",new ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jd extends ha{constructor(e=.5,i=1,r=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let v=e;const x=(i-e)/l,M=new oe,T=new Dt;for(let E=0;E<=l;E++){for(let y=0;y<=r;y++){const _=u+y/r*h;M.x=v*Math.cos(_),M.y=v*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,g.push(T.x,T.y)}v+=x}for(let E=0;E<l;E++){const y=E*(r+1);for(let _=0;_<r;_++){const C=_+y,L=C,U=C+r+1,H=C+r+2,I=C+1;d.push(L,U,I),d.push(U,H,I)}}this.setIndex(d),this.setAttribute("position",new ei(m,3)),this.setAttribute("normal",new ei(p,3)),this.setAttribute("uv",new ei(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ku extends ha{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new oe,x=new oe,M=[],T=[],E=[],y=[];for(let _=0;_<=r;_++){const C=[],L=_/r;let U=0;_===0&&h===0?U=.5/i:_===r&&m===Math.PI&&(U=-.5/i);for(let H=0;H<=i;H++){const I=H/i;v.x=-e*Math.cos(l+I*u)*Math.sin(h+L*d),v.y=e*Math.cos(h+L*d),v.z=e*Math.sin(l+I*u)*Math.sin(h+L*d),T.push(v.x,v.y,v.z),x.copy(v).normalize(),E.push(x.x,x.y,x.z),y.push(I+U,1-L),C.push(p++)}g.push(C)}for(let _=0;_<r;_++)for(let C=0;C<i;C++){const L=g[_][C+1],U=g[_][C],H=g[_+1][C],I=g[_+1][C+1];(_!==0||h>0)&&M.push(L,U,I),(_!==r-1||m<Math.PI)&&M.push(U,H,I)}this.setIndex(M),this.setAttribute("position",new ei(T,3)),this.setAttribute("normal",new ei(E,3)),this.setAttribute("uv",new ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class JE extends Yu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $E extends Yu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class z0 extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ph=new en,Sv=new oe,xv=new oe;class eT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Sv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sv),xv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(xv),i.updateMatrixWorld(),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class B0 extends L0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class tT extends eT{constructor(){super(new B0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nT extends z0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new tT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iT extends z0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class aT extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yv=new en;class rT{constructor(e,i,r=0,l=1/0){this.ray=new R0(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return yv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yv),this}intersectObject(e,i=!0,r=[]){return Nd(e,this,r,i),r.sort(Mv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)Nd(e[l],this,r,i);return r.sort(Mv),r}}function Mv(s,e){return s.distance-e.distance}function Nd(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const u=s.children;for(let h=0,d=u.length;h<d;h++)Nd(u[h],e,i,!0)}}function Ev(s,e,i,r){const l=sT(r);switch(i){case x0:return s*e;case M0:return s*e/l.components*l.byteLength;case Wd:return s*e/l.components*l.byteLength;case E0:return s*e*2/l.components*l.byteLength;case qd:return s*e*2/l.components*l.byteLength;case y0:return s*e*3/l.components*l.byteLength;case yi:return s*e*4/l.components*l.byteLength;case Yd:return s*e*4/l.components*l.byteLength;case Ou:case Pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zu:case Bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:case od:return Math.max(s,16)*Math.max(e,8)/4;case ad:case sd:return Math.max(s,8)*Math.max(e,8)/2;case ld:case ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bd:case Ad:case Rd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cd:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dd:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sT(s){switch(s){case Oi:case g0:return{byteLength:1,components:1};case Io:case _0:case qo:return{byteLength:2,components:1};case kd:case Xd:return{byteLength:2,components:4};case br:case Vd:case sa:return{byteLength:4,components:1};case v0:case S0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function oT(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,g);else{v.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<v.length;M++){const T=v[x],E=v[M];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++x,v[x]=E)}v.length=x+1;for(let M=0,T=v.length;M<T;M++){const E=v[M];s.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var lT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uT=`#ifdef USE_ALPHAHASH
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
#endif`,cT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pT=`#ifdef USE_AOMAP
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
#endif`,mT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gT=`#ifdef USE_BATCHING
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
#endif`,_T=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ST=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yT=`#ifdef USE_IRIDESCENCE
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
#endif`,MT=`#ifdef USE_BUMPMAP
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
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UT=`#define PI 3.141592653589793
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
} // validated`,LT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NT=`vec3 transformedNormal = objectNormal;
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
#endif`,OT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IT="gl_FragColor = linearToOutputTexel( gl_FragColor );",FT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HT=`#ifdef USE_ENVMAP
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
#endif`,GT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
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
#endif`,WT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZT=`#ifdef USE_GRADIENTMAP
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
}`,KT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$T=`uniform bool receiveShadow;
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
#endif`,eb=`#ifdef USE_ENVMAP
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
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
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
#endif`,sb=`struct PhysicalMaterial {
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
}`,ob=`
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_b=`#if defined( USE_POINTS_UV )
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
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
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
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
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
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qb=`float getShadowMask() {
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
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,nA=`#ifdef USE_TRANSMISSION
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
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
}`,pA=`#if DEPTH_PACKING == 3200
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
}`,mA=`#define DISTANCE
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
}`,gA=`#define DISTANCE
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
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
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
}`,xA=`uniform vec3 diffuse;
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
}`,yA=`#include <common>
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
}`,MA=`uniform vec3 diffuse;
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
}`,EA=`#define LAMBERT
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
}`,TA=`#define LAMBERT
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
}`,bA=`#define MATCAP
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
}`,AA=`#define MATCAP
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
}`,RA=`#define NORMAL
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
}`,CA=`#define NORMAL
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
}`,wA=`#define PHONG
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
}`,DA=`#define PHONG
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
}`,UA=`#define STANDARD
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
}`,LA=`#define STANDARD
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
}`,NA=`#define TOON
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
}`,OA=`#define TOON
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
}`,PA=`uniform float size;
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
}`,zA=`uniform vec3 diffuse;
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
}`,BA=`#include <common>
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
}`,IA=`uniform vec3 color;
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
}`,FA=`uniform float rotation;
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
}`,HA=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:lT,alphahash_pars_fragment:uT,alphamap_fragment:cT,alphamap_pars_fragment:fT,alphatest_fragment:hT,alphatest_pars_fragment:dT,aomap_fragment:pT,aomap_pars_fragment:mT,batching_pars_vertex:gT,batching_vertex:_T,begin_vertex:vT,beginnormal_vertex:ST,bsdfs:xT,iridescence_fragment:yT,bumpmap_pars_fragment:MT,clipping_planes_fragment:ET,clipping_planes_pars_fragment:TT,clipping_planes_pars_vertex:bT,clipping_planes_vertex:AT,color_fragment:RT,color_pars_fragment:CT,color_pars_vertex:wT,color_vertex:DT,common:UT,cube_uv_reflection_fragment:LT,defaultnormal_vertex:NT,displacementmap_pars_vertex:OT,displacementmap_vertex:PT,emissivemap_fragment:zT,emissivemap_pars_fragment:BT,colorspace_fragment:IT,colorspace_pars_fragment:FT,envmap_fragment:HT,envmap_common_pars_fragment:GT,envmap_pars_fragment:VT,envmap_pars_vertex:kT,envmap_physical_pars_fragment:eb,envmap_vertex:XT,fog_vertex:WT,fog_pars_vertex:qT,fog_fragment:YT,fog_pars_fragment:jT,gradientmap_pars_fragment:ZT,lightmap_pars_fragment:KT,lights_lambert_fragment:QT,lights_lambert_pars_fragment:JT,lights_pars_begin:$T,lights_toon_fragment:tb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:ab,lights_physical_fragment:rb,lights_physical_pars_fragment:sb,lights_fragment_begin:ob,lights_fragment_maps:lb,lights_fragment_end:ub,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:hb,logdepthbuf_vertex:db,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:_b,metalnessmap_fragment:vb,metalnessmap_pars_fragment:Sb,morphinstance_vertex:xb,morphcolor_vertex:yb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Eb,morphtarget_vertex:Tb,normal_fragment_begin:bb,normal_fragment_maps:Ab,normal_pars_fragment:Rb,normal_pars_vertex:Cb,normal_vertex:wb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Nb,iridescence_pars_fragment:Ob,opaque_fragment:Pb,packing:zb,premultiplied_alpha_fragment:Bb,project_vertex:Ib,dithering_fragment:Fb,dithering_pars_fragment:Hb,roughnessmap_fragment:Gb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Xb,shadowmap_vertex:Wb,shadowmask_pars_fragment:qb,skinbase_vertex:Yb,skinning_pars_vertex:jb,skinning_vertex:Zb,skinnormal_vertex:Kb,specularmap_fragment:Qb,specularmap_pars_fragment:Jb,tonemapping_fragment:$b,tonemapping_pars_fragment:eA,transmission_fragment:tA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:aA,uv_vertex:rA,worldpos_vertex:sA,background_vert:oA,background_frag:lA,backgroundCube_vert:uA,backgroundCube_frag:cA,cube_vert:fA,cube_frag:hA,depth_vert:dA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:gA,equirect_vert:_A,equirect_frag:vA,linedashed_vert:SA,linedashed_frag:xA,meshbasic_vert:yA,meshbasic_frag:MA,meshlambert_vert:EA,meshlambert_frag:TA,meshmatcap_vert:bA,meshmatcap_frag:AA,meshnormal_vert:RA,meshnormal_frag:CA,meshphong_vert:wA,meshphong_frag:DA,meshphysical_vert:UA,meshphysical_frag:LA,meshtoon_vert:NA,meshtoon_frag:OA,points_vert:PA,points_frag:zA,shadow_vert:BA,shadow_frag:IA,sprite_vert:FA,sprite_frag:HA},Oe={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Nn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Nn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Nn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Nn([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Nn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Nn([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Nn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Nn([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Nn([Oe.common,Oe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Nn([Oe.lights,Oe.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const wu={r:0,b:0,g:0},_r=new ca,GA=new en;function VA(s,e,i,r,l,u,h){const d=new wt(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function T(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:e).get(U)),U}function E(L){let U=!1;const H=T(L);H===null?_(d,m):H&&H.isColor&&(_(H,1),U=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,U){const H=T(U);H&&(H.isCubeTexture||H.mapping===qu)?(g===void 0&&(g=new $n(new Ko(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Ls(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_r.copy(U.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(GA.makeRotationFromEuler(_r)),g.material.toneMapped=Ct.getTransfer(H.colorSpace)!==Ht,(v!==H||x!==H.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=H,x=H.version,M=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new $n(new Qo(2,2),new Ya({name:"BackgroundMaterial",uniforms:Ls(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(H.colorSpace)!==Ht,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=H,x=H.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,U){L.getRGB(wu,U0(s)),r.buffers.color.setClear(wu.r,wu.g,wu.b,U,h)}function C(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:E,addToRenderList:y,dispose:C}}function kA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(D,G,ne,ue,ve){let he=!1;const z=v(ue,ne,G);u!==z&&(u=z,p(u.object)),he=M(D,ue,ne,ve),he&&T(D,ue,ne,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(he||h)&&(h=!1,U(D,G,ne,ue),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function v(D,G,ne){const ue=ne.wireframe===!0;let ve=r[D.id];ve===void 0&&(ve={},r[D.id]=ve);let he=ve[G.id];he===void 0&&(he={},ve[G.id]=he);let z=he[ue];return z===void 0&&(z=x(m()),he[ue]=z),z}function x(D){const G=[],ne=[],ue=[];for(let ve=0;ve<i;ve++)G[ve]=0,ne[ve]=0,ue[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ne,attributeDivisors:ue,object:D,attributes:{},index:null}}function M(D,G,ne,ue){const ve=u.attributes,he=G.attributes;let z=0;const Z=ne.getAttributes();for(const X in Z)if(Z[X].location>=0){const ge=ve[X];let N=he[X];if(N===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),ge===void 0||ge.attribute!==N||N&&ge.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==ue}function T(D,G,ne,ue){const ve={},he=G.attributes;let z=0;const Z=ne.getAttributes();for(const X in Z)if(Z[X].location>=0){let ge=he[X];ge===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor));const N={};N.attribute=ge,ge&&ge.data&&(N.data=ge.data),ve[X]=N,z++}u.attributes=ve,u.attributesNum=z,u.index=ue}function E(){const D=u.newAttributes;for(let G=0,ne=D.length;G<ne;G++)D[G]=0}function y(D){_(D,0)}function _(D,G){const ne=u.newAttributes,ue=u.enabledAttributes,ve=u.attributeDivisors;ne[D]=1,ue[D]===0&&(s.enableVertexAttribArray(D),ue[D]=1),ve[D]!==G&&(s.vertexAttribDivisor(D,G),ve[D]=G)}function C(){const D=u.newAttributes,G=u.enabledAttributes;for(let ne=0,ue=G.length;ne<ue;ne++)G[ne]!==D[ne]&&(s.disableVertexAttribArray(ne),G[ne]=0)}function L(D,G,ne,ue,ve,he,z){z===!0?s.vertexAttribIPointer(D,G,ne,ve,he):s.vertexAttribPointer(D,G,ne,ue,ve,he)}function U(D,G,ne,ue){E();const ve=ue.attributes,he=ne.getAttributes(),z=G.defaultAttributeValues;for(const Z in he){const X=he[Z];if(X.location>=0){let ce=ve[Z];if(ce===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),ce!==void 0){const ge=ce.normalized,N=ce.itemSize,Q=e.get(ce);if(Q===void 0)continue;const ye=Q.buffer,Me=Q.type,Re=Q.bytesPerElement,J=Me===s.INT||Me===s.UNSIGNED_INT||ce.gpuType===Vd;if(ce.isInterleavedBufferAttribute){const ae=ce.data,Ue=ae.stride,Be=ce.offset;if(ae.isInstancedInterleavedBuffer){for(let ke=0;ke<X.locationSize;ke++)_(X.location+ke,ae.meshPerAttribute);D.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ke=0;ke<X.locationSize;ke++)y(X.location+ke);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let ke=0;ke<X.locationSize;ke++)L(X.location+ke,N/X.locationSize,Me,ge,Ue*Re,(Be+N/X.locationSize*ke)*Re,J)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)_(X.location+ae,ce.meshPerAttribute);D.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<X.locationSize;ae++)y(X.location+ae);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let ae=0;ae<X.locationSize;ae++)L(X.location+ae,N/X.locationSize,Me,ge,N*Re,N/X.locationSize*ae*Re,J)}}else if(z!==void 0){const ge=z[Z];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(X.location,ge);break;case 3:s.vertexAttrib3fv(X.location,ge);break;case 4:s.vertexAttrib4fv(X.location,ge);break;default:s.vertexAttrib1fv(X.location,ge)}}}}C()}function H(){W();for(const D in r){const G=r[D];for(const ne in G){const ue=G[ne];for(const ve in ue)g(ue[ve].object),delete ue[ve];delete G[ne]}delete r[D]}}function I(D){if(r[D.id]===void 0)return;const G=r[D.id];for(const ne in G){const ue=G[ne];for(const ve in ue)g(ue[ve].object),delete ue[ve];delete G[ne]}delete r[D.id]}function P(D){for(const G in r){const ne=r[G];if(ne[D.id]===void 0)continue;const ue=ne[D.id];for(const ve in ue)g(ue[ve].object),delete ue[ve];delete ne[D.id]}}function W(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:y,disableUnusedAttributes:C}}function XA(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let T=0;for(let E=0;E<v;E++)T+=g[E]*x[E];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function WA(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==yi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const W=P===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Oi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==sa&&!W)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:H,maxSamples:I}}function qA(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Sr,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const T=v.clippingPlanes,E=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||T===null||T.length===0||u&&!y)u?g(null):p();else{const C=u?0:r,L=C*4;let U=_.clippingState||null;m.value=U,U=g(T,x,L,M);for(let H=0;H!==L;++H)U[H]=i[H];_.clippingState=U,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,M,T){const E=v!==null?v.length:0;let y=null;if(E!==0){if(y=m.value,T!==!0||y===null){const _=M+E*4,C=x.matrixWorldInverse;d.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,U=M;L!==E;++L,U+=4)h.copy(v[L]).applyMatrix4(C,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function YA(s){let e=new WeakMap;function i(h,d){return d===ed?h.mapping=ws:d===td&&(h.mapping=Ds),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ed||d===td)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new qE(m.height);return p.fromEquirectangularTexture(s,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const bs=4,Tv=[.125,.215,.35,.446,.526,.582],Mr=20,zh=new B0,bv=new wt;let Bh=null,Ih=0,Fh=0,Hh=!1;const xr=(1+Math.sqrt(5))/2,Es=1/xr,Av=[new oe(-xr,Es,0),new oe(xr,Es,0),new oe(-Es,0,xr),new oe(Es,0,xr),new oe(0,xr,-Es),new oe(0,xr,Es),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],jA=new oe;class Rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=jA}=u;Bh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Ih,Fh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,Du(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ws||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:qo,format:yi,colorSpace:Us,depthBuffer:!1},l=Cv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZA(u)),this._blurMaterial=KA(u,e,i)}return l}_compileMaterial(e){const i=new $n(this._lodPlanes[0],e);this._renderer.compile(i,zh)}_sceneToCubeUV(e,i,r,l,u){const m=new hi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(bv),v.toneMapping=Wa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const E=new Ts({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),y=new $n(new Ko,E);let _=!1;const C=e.background;C?C.isColor&&(E.color.copy(C),e.background=null,_=!0):(E.color.copy(bv),_=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const H=this._cubeSize;Du(l,U*H,L>2?H:0,H,H),v.setRenderTarget(l),_&&v.render(y,m),v.render(e,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=C}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ws||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new $n(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Du(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,zh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Av[(l-u-1)%Av.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new $n(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),E=u/T,y=isFinite(u)?1+Math.floor(g*E):Mr;y>Mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const _=[];let C=0;for(let P=0;P<Mr;++P){const W=P/E,w=Math.exp(-W*W/2);_.push(w),P===0?C+=w:P<y&&(C+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/C;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const U=this._sizeLods[l],H=3*U*(l>L-bs?l-L+bs:0),I=4*(this._cubeSize-U);Du(i,H,I,3*U,2*U),m.setRenderTarget(i),m.render(v,zh)}}function ZA(s){const e=[],i=[],r=[];let l=s;const u=s-bs+1+Tv.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-bs?m=Tv[h-s+bs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,T=6,E=3,y=2,_=1,C=new Float32Array(E*T*M),L=new Float32Array(y*T*M),U=new Float32Array(_*T*M);for(let I=0;I<M;I++){const P=I%3*2/3-1,W=I>2?0:-1,w=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];C.set(w,E*T*I),L.set(x,y*T*I);const D=[I,I,I,I,I,I];U.set(D,_*T*I)}const H=new ha;H.setAttribute("position",new Li(C,E)),H.setAttribute("uv",new Li(L,y)),H.setAttribute("faceIndex",new Li(U,_)),e.push(H),l>bs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Cv(s,e,i){const r=new Ar(s,e,i);return r.texture.mapping=qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Du(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function KA(s,e,i){const r=new Float32Array(Mr),l=new oe(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function wv(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Dv(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function QA(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===ed||m===td,g=m===ws||m===Ds;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Rv(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Rv(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function JA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Vo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function $A(s,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,T=v.attributes.position;let E=0;if(M!==null){const C=M.array;E=M.version;for(let L=0,U=C.length;L<U;L+=3){const H=C[L+0],I=C[L+1],P=C[L+2];x.push(H,I,I,P,P,H)}}else if(T!==void 0){const C=T.array;E=T.version;for(let L=0,U=C.length/3-1;L<U;L+=3){const H=L+0,I=L+1,P=L+2;x.push(H,I,I,P,P,H)}}else return;const y=new(b0(x)?D0:w0)(x,1);y.version=E;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function e1(s,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){s.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,x*h,T),i.update(M,r,T))}function g(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,T);let y=0;for(let _=0;_<T;_++)y+=M[_];i.update(y,r,1)}function v(x,M,T,E){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],E[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,E,0,T);let _=0;for(let C=0;C<T;C++)_+=M[C]*E[C];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function t1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function n1(s,e,i){const r=new WeakMap,l=new $t;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let D=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),E===!0&&(U=2),y===!0&&(U=3);let H=d.attributes.position.count*U,I=1;H>e.maxTextureSize&&(I=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*I*4*v),W=new A0(P,H,I,v);W.type=sa,W.needsUpdate=!0;const w=U*4;for(let G=0;G<v;G++){const ne=_[G],ue=C[G],ve=L[G],he=H*I*4*G;for(let z=0;z<ne.count;z++){const Z=z*w;T===!0&&(l.fromBufferAttribute(ne,z),P[he+Z+0]=l.x,P[he+Z+1]=l.y,P[he+Z+2]=l.z,P[he+Z+3]=0),E===!0&&(l.fromBufferAttribute(ue,z),P[he+Z+4]=l.x,P[he+Z+5]=l.y,P[he+Z+6]=l.z,P[he+Z+7]=0),y===!0&&(l.fromBufferAttribute(ve,z),P[he+Z+8]=l.x,P[he+Z+9]=l.y,P[he+Z+10]=l.z,P[he+Z+11]=ve.itemSize===4?l.w:1)}}x={count:v,texture:W,size:new Dt(H,I)},r.set(d,x),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const E=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function i1(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const F0=new Vn,Uv=new O0(1,1),H0=new A0,G0=new wE,V0=new N0,Lv=[],Nv=[],Ov=new Float32Array(16),Pv=new Float32Array(9),zv=new Float32Array(4);function zs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=Lv[l];if(u===void 0&&(u=new Float32Array(l),Lv[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(u,d)}return u}function pn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function ju(s,e){let i=Nv[e];i===void 0&&(i=new Int32Array(e),Nv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function a1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function r1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2fv(this.addr,e),mn(i,e)}}function s1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;s.uniform3fv(this.addr,e),mn(i,e)}}function o1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4fv(this.addr,e),mn(i,e)}}function l1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;zv.set(r),s.uniformMatrix2fv(this.addr,!1,zv),mn(i,r)}}function u1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Pv.set(r),s.uniformMatrix3fv(this.addr,!1,Pv),mn(i,r)}}function c1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Ov.set(r),s.uniformMatrix4fv(this.addr,!1,Ov),mn(i,r)}}function f1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function h1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2iv(this.addr,e),mn(i,e)}}function d1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;s.uniform3iv(this.addr,e),mn(i,e)}}function p1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4iv(this.addr,e),mn(i,e)}}function m1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function g1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2uiv(this.addr,e),mn(i,e)}}function _1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;s.uniform3uiv(this.addr,e),mn(i,e)}}function v1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4uiv(this.addr,e),mn(i,e)}}function S1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Uv.compareFunction=T0,u=Uv):u=F0,i.setTexture2D(e||u,l)}function x1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||G0,l)}function y1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||V0,l)}function M1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||H0,l)}function E1(s){switch(s){case 5126:return a1;case 35664:return r1;case 35665:return s1;case 35666:return o1;case 35674:return l1;case 35675:return u1;case 35676:return c1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}function T1(s,e){s.uniform1fv(this.addr,e)}function b1(s,e){const i=zs(e,this.size,2);s.uniform2fv(this.addr,i)}function A1(s,e){const i=zs(e,this.size,3);s.uniform3fv(this.addr,i)}function R1(s,e){const i=zs(e,this.size,4);s.uniform4fv(this.addr,i)}function C1(s,e){const i=zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function w1(s,e){const i=zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function D1(s,e){const i=zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function U1(s,e){s.uniform1iv(this.addr,e)}function L1(s,e){s.uniform2iv(this.addr,e)}function N1(s,e){s.uniform3iv(this.addr,e)}function O1(s,e){s.uniform4iv(this.addr,e)}function P1(s,e){s.uniform1uiv(this.addr,e)}function z1(s,e){s.uniform2uiv(this.addr,e)}function B1(s,e){s.uniform3uiv(this.addr,e)}function I1(s,e){s.uniform4uiv(this.addr,e)}function F1(s,e,i){const r=this.cache,l=e.length,u=ju(i,l);pn(r,u)||(s.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||F0,u[h])}function H1(s,e,i){const r=this.cache,l=e.length,u=ju(i,l);pn(r,u)||(s.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||G0,u[h])}function G1(s,e,i){const r=this.cache,l=e.length,u=ju(i,l);pn(r,u)||(s.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||V0,u[h])}function V1(s,e,i){const r=this.cache,l=e.length,u=ju(i,l);pn(r,u)||(s.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||H0,u[h])}function k1(s){switch(s){case 5126:return T1;case 35664:return b1;case 35665:return A1;case 35666:return R1;case 35674:return C1;case 35675:return w1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return L1;case 35668:case 35672:return N1;case 35669:case 35673:return O1;case 5125:return P1;case 36294:return z1;case 36295:return B1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return V1}}class X1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=E1(i.type)}}class W1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=k1(i.type)}}class q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function Bv(s,e){s.seq.push(e),s.map[e.id]=e}function Y1(s,e,i){const r=s.name,l=r.length;for(Gh.lastIndex=0;;){const u=Gh.exec(r),h=Gh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Bv(i,p===void 0?new X1(d,s,e):new W1(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new q1(d),Bv(i,v)),i=v}}}class Iu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Y1(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Iv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const j1=37297;let Z1=0;function K1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Fv=new ft;function Q1(s){Ct._getMatrix(Fv,Ct.workingColorSpace,s);const e=`mat3( ${Fv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Hu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+K1(s.getShaderSource(e),d)}else return u}function J1(s,e){const i=Q1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function $1(s,e){let i;switch(e){case nE:i="Linear";break;case iE:i="Reinhard";break;case aE:i="Cineon";break;case rE:i="ACESFilmic";break;case oE:i="AgX";break;case lE:i="Neutral";break;case sE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uu=new oe;function eR(){Ct.getLuminanceCoefficients(Uu);const s=Uu.x.toFixed(4),e=Uu.y.toFixed(4),i=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function nR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function iR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function zo(s){return s!==""}function Gv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(s){return s.replace(aR,sR)}const rR=new Map;function sR(s,e){let i=ht[e];if(i===void 0){const r=rR.get(e);if(r!==void 0)i=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Od(i)}const oR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(s){return s.replace(oR,lR)}function lR(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Xv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===PM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(e="SHADOWMAP_TYPE_VSM"),e}function cR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Ds:e="ENVMAP_TYPE_CUBE";break;case qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function hR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case eE:e="ENVMAP_BLENDING_MIX";break;case tE:e="ENVMAP_BLENDING_ADD";break}return e}function dR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function pR(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=uR(i),p=cR(i),g=fR(i),v=hR(i),x=dR(i),M=tR(i),T=nR(u),E=l.createProgram();let y,_,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(zo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(y=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?ht.tonemapping_pars_fragment:"",i.toneMapping!==Wa?$1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,J1("linearToOutputTexel",i.outputColorSpace),eR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),h=Od(h),h=Gv(h,i),h=Vv(h,i),d=Od(d),d=Gv(d,i),d=Vv(d,i),h=kv(h),d=kv(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=C+y+h,U=C+_+d,H=Iv(l,l.VERTEX_SHADER,L),I=Iv(l,l.FRAGMENT_SHADER,U);l.attachShader(E,H),l.attachShader(E,I),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function P(G){if(s.debug.checkShaderErrors){const ne=l.getProgramInfoLog(E)||"",ue=l.getShaderInfoLog(H)||"",ve=l.getShaderInfoLog(I)||"",he=ne.trim(),z=ue.trim(),Z=ve.trim();let X=!0,ce=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,E,H,I);else{const ge=Hv(l,H,"vertex"),N=Hv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+he+`
`+ge+`
`+N)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(z===""||Z==="")&&(ce=!1);ce&&(G.diagnostics={runnable:X,programLog:he,vertexShader:{log:z,prefix:y},fragmentShader:{log:Z,prefix:_}})}l.deleteShader(H),l.deleteShader(I),W=new Iu(l,E),w=iR(l,E)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(E,j1)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Z1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=I,this}let mR=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new _R(e),i.set(e,r)),r}}class _R{constructor(e){this.id=mR++,this.code=e,this.usedTimes=0}}function vR(s,e,i,r,l,u,h){const d=new Kd,m=new gR,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,D,G,ne,ue){const ve=ne.fog,he=ue.geometry,z=w.isMeshStandardMaterial?ne.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),X=Z&&Z.mapping===qu?Z.image.height:null,ce=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ge=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=ge!==void 0?ge.length:0;let Q=0;he.morphAttributes.position!==void 0&&(Q=1),he.morphAttributes.normal!==void 0&&(Q=2),he.morphAttributes.color!==void 0&&(Q=3);let ye,Me,Re,J;if(ce){const Et=wi[ce];ye=Et.vertexShader,Me=Et.fragmentShader}else ye=w.vertexShader,Me=w.fragmentShader,m.update(w),Re=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const ae=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Be=ue.isInstancedMesh===!0,ke=ue.isBatchedMesh===!0,dt=!!w.map,rn=!!w.matcap,F=!!Z,bt=!!w.aoMap,at=!!w.lightMap,et=!!w.bumpMap,We=!!w.normalMap,Gt=!!w.displacementMap,Xe=!!w.emissiveMap,st=!!w.metalnessMap,Kt=!!w.roughnessMap,jt=w.anisotropy>0,O=w.clearcoat>0,b=w.dispersion>0,ee=w.iridescence>0,pe=w.sheen>0,Ee=w.transmission>0,fe=jt&&!!w.anisotropyMap,Ze=O&&!!w.clearcoatMap,Ce=O&&!!w.clearcoatNormalMap,Ye=O&&!!w.clearcoatRoughnessMap,je=ee&&!!w.iridescenceMap,be=ee&&!!w.iridescenceThicknessMap,we=pe&&!!w.sheenColorMap,Ke=pe&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Le=!!w.specularColorMap,lt=!!w.specularIntensityMap,k=Ee&&!!w.transmissionMap,Ae=Ee&&!!w.thicknessMap,De=!!w.gradientMap,Ie=!!w.alphaMap,Te=w.alphaTest>0,Se=!!w.alphaHash,Fe=!!w.extensions;let rt=Wa;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Ot={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:ye,fragmentShader:Me,defines:w.defines,customVertexShaderID:Re,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:ke,batchingColor:ke&&ue._colorsTexture!==null,instancing:Be,instancingColor:Be&&ue.instanceColor!==null,instancingMorph:Be&&ue.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Us,alphaToCoverage:!!w.alphaToCoverage,map:dt,matcap:rn,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:X,aoMap:bt,lightMap:at,bumpMap:et,normalMap:We,displacementMap:x&&Gt,emissiveMap:Xe,normalMapObjectSpace:We&&w.normalMapType===dE,normalMapTangentSpace:We&&w.normalMapType===hE,metalnessMap:st,roughnessMap:Kt,anisotropy:jt,anisotropyMap:fe,clearcoat:O,clearcoatMap:Ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,dispersion:b,iridescence:ee,iridescenceMap:je,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:we,sheenRoughnessMap:Ke,specularMap:ze,specularColorMap:Le,specularIntensityMap:lt,transmission:Ee,transmissionMap:k,thicknessMap:Ae,gradientMap:De,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:Se,combine:w.combine,mapUv:dt&&E(w.map.channel),aoMapUv:bt&&E(w.aoMap.channel),lightMapUv:at&&E(w.lightMap.channel),bumpMapUv:et&&E(w.bumpMap.channel),normalMapUv:We&&E(w.normalMap.channel),displacementMapUv:Gt&&E(w.displacementMap.channel),emissiveMapUv:Xe&&E(w.emissiveMap.channel),metalnessMapUv:st&&E(w.metalnessMap.channel),roughnessMapUv:Kt&&E(w.roughnessMap.channel),anisotropyMapUv:fe&&E(w.anisotropyMap.channel),clearcoatMapUv:Ze&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&E(w.sheenRoughnessMap.channel),specularMapUv:ze&&E(w.specularMap.channel),specularColorMapUv:Le&&E(w.specularColorMap.channel),specularIntensityMapUv:lt&&E(w.specularIntensityMap.channel),transmissionMapUv:k&&E(w.transmissionMap.channel),thicknessMapUv:Ae&&E(w.thicknessMap.channel),alphaMapUv:Ie&&E(w.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(We||jt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!he.attributes.uv&&(dt||Ie),fog:!!ve,useFog:w.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:ue.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:dt&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:Xe&&w.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Si,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function _(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)D.push(G),D.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(C(D,w),L(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function C(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function L(w,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const D=T[w.type];let G;if(D){const ne=wi[D];G=VE.clone(ne.uniforms)}else G=w.uniforms;return G}function H(w,D){let G;for(let ne=0,ue=g.length;ne<ue;ne++){const ve=g[ne];if(ve.cacheKey===D){G=ve,++G.usedTimes;break}}return G===void 0&&(G=new pR(s,D,w,u),g.push(G)),G}function I(w){if(--w.usedTimes===0){const D=g.indexOf(w);g[D]=g[g.length-1],g.pop(),w.destroy()}}function P(w){m.remove(w)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:H,releaseProgram:I,releaseShaderCache:P,programs:g,dispose:W}}function SR(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function xR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,T,E,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:T,renderOrder:v.renderOrder,z:E,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=E,_.group=y),e++,_}function d(v,x,M,T,E,y){const _=h(v,x,M,T,E,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,T,E,y){const _=h(v,x,M,T,E,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||xR),r.length>1&&r.sort(x||Wv),l.length>1&&l.sort(x||Wv)}function g(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function yR(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new qv,s.set(r,[h])):l>=u.length?(h=new qv,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function MR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new wt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function ER(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let TR=0;function bR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AR(s){const e=new MR,i=ER(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const l=new oe,u=new en,h=new en;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,T=0,E=0,y=0,_=0,C=0,L=0,U=0,H=0,I=0,P=0;p.sort(bR);for(let w=0,D=p.length;w<D;w++){const G=p[w],ne=G.color,ue=G.intensity,ve=G.distance,he=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ne.r*ue,v+=ne.g*ue,x+=ne.b*ue;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],ue);P++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,X=i.get(G);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=G.shadow.matrix,C++}r.directional[M]=z,M++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(ne).multiplyScalar(ue),z.distance=ve,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[E]=z;const Z=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,Z.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[E]=Z.matrix,G.castShadow){const X=i.get(G);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,r.spotShadow[E]=X,r.spotShadowMap[E]=he,U++}E++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(ne).multiplyScalar(ue),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=z,y++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const Z=G.shadow,X=i.get(G);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=G.shadow.matrix,L++}r.point[T]=z,T++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(ue),z.groundColor.copy(G.groundColor).multiplyScalar(ue),r.hemi[_]=z,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==E||W.rectAreaLength!==y||W.hemiLength!==_||W.numDirectionalShadows!==C||W.numPointShadows!==L||W.numSpotShadows!==U||W.numSpotMaps!==H||W.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=U+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=P,W.directionalLength=M,W.pointLength=T,W.spotLength=E,W.rectAreaLength=y,W.hemiLength=_,W.numDirectionalShadows=C,W.numPointShadows=L,W.numSpotShadows=U,W.numSpotMaps=H,W.numLightProbes=P,r.version=TR++)}function m(p,g){let v=0,x=0,M=0,T=0,E=0;const y=g.matrixWorldInverse;for(let _=0,C=p.length;_<C;_++){const L=p[_];if(L.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(L.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const U=r.rectArea[T];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const U=r.hemi[E];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(y),E++}}}return{setup:d,setupView:m,state:r}}function Yv(s){const e=new AR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function RR(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Yv(s),e.set(l,[d])):u>=h.length?(d=new Yv(s),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const CR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wR=`uniform sampler2D shadow_pass;
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
}`;function DR(s,e,i){let r=new Qd;const l=new Dt,u=new Dt,h=new $t,d=new JE({depthPacking:fE}),m=new $E,p={},g=i.maxTextureSize,v={[qa]:Gn,[Gn]:qa,[Si]:Si},x=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:CR,fragmentShader:wR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new ha;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new $n(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d0;let _=this.type;this.render=function(I,P,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const w=s.getRenderTarget(),D=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Xa),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ue=_!==ra&&this.type===ra,ve=_===ra&&this.type!==ra;for(let he=0,z=I.length;he<z;he++){const Z=I[he],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ce=X.getFrameExtents();if(l.multiply(ce),u.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ce.x),l.x=u.x*ce.x,X.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ce.y),l.y=u.y*ce.y,X.mapSize.y=u.y)),X.map===null||ue===!0||ve===!0){const N=this.type!==ra?{minFilter:Mi,magFilter:Mi}:{};X.map!==null&&X.map.dispose(),X.map=new Ar(l.x,l.y,N),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const ge=X.getViewportCount();for(let N=0;N<ge;N++){const Q=X.getViewport(N);h.set(u.x*Q.x,u.y*Q.y,u.x*Q.z,u.y*Q.w),ne.viewport(h),X.updateMatrices(Z,N),r=X.getFrustum(),U(P,W,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ra&&C(X,W),X.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(w,D,G)};function C(I,P){const W=e.update(E);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ar(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,W,x,E,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,W,M,E,null)}function L(I,P,W,w){let D=null;const G=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)D=G;else if(D=W.isPointLight===!0?m:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ne=D.uuid,ue=P.uuid;let ve=p[ne];ve===void 0&&(ve={},p[ne]=ve);let he=ve[ue];he===void 0&&(he=D.clone(),ve[ue]=he,P.addEventListener("dispose",H)),D=he}if(D.visible=P.visible,D.wireframe=P.wireframe,w===ra?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:v[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,W.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ne=s.properties.get(D);ne.light=W}return D}function U(I,P,W,w,D){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===ra)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const ue=e.update(I),ve=I.material;if(Array.isArray(ve)){const he=ue.groups;for(let z=0,Z=he.length;z<Z;z++){const X=he[z],ce=ve[X.materialIndex];if(ce&&ce.visible){const ge=L(I,ce,w,D);I.onBeforeShadow(s,I,P,W,ue,ge,X),s.renderBufferDirect(W,null,ue,ge,I,X),I.onAfterShadow(s,I,P,W,ue,ge,X)}}}else if(ve.visible){const he=L(I,ve,w,D);I.onBeforeShadow(s,I,P,W,ue,he,null),s.renderBufferDirect(W,null,ue,he,I,null),I.onAfterShadow(s,I,P,W,ue,he,null)}}const ne=I.children;for(let ue=0,ve=ne.length;ue<ve;ue++)U(ne[ue],P,W,w,D)}function H(I){I.target.removeEventListener("dispose",H);for(const W in p){const w=p[W],D=I.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const UR={[Yh]:jh,[Zh]:Jh,[Kh]:$h,[Cs]:Qh,[jh]:Yh,[Jh]:Zh,[$h]:Kh,[Qh]:Cs};function LR(s,e){function i(){let k=!1;const Ae=new $t;let De=null;const Ie=new $t(0,0,0,0);return{setMask:function(Te){De!==Te&&!k&&(s.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){k=Te},setClear:function(Te,Se,Fe,rt,Ot){Ot===!0&&(Te*=rt,Se*=rt,Fe*=rt),Ae.set(Te,Se,Fe,rt),Ie.equals(Ae)===!1&&(s.clearColor(Te,Se,Fe,rt),Ie.copy(Ae))},reset:function(){k=!1,De=null,Ie.set(-1,0,0,0)}}}function r(){let k=!1,Ae=!1,De=null,Ie=null,Te=null;return{setReversed:function(Se){if(Ae!==Se){const Fe=e.get("EXT_clip_control");Se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ae=Se;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return Ae},setTest:function(Se){Se?ae(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(Se){De!==Se&&!k&&(s.depthMask(Se),De=Se)},setFunc:function(Se){if(Ae&&(Se=UR[Se]),Ie!==Se){switch(Se){case Yh:s.depthFunc(s.NEVER);break;case jh:s.depthFunc(s.ALWAYS);break;case Zh:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Kh:s.depthFunc(s.EQUAL);break;case Qh:s.depthFunc(s.GEQUAL);break;case Jh:s.depthFunc(s.GREATER);break;case $h:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Te!==Se&&(Ae&&(Se=1-Se),s.clearDepth(Se),Te=Se)},reset:function(){k=!1,De=null,Ie=null,Te=null,Ae=!1}}}function l(){let k=!1,Ae=null,De=null,Ie=null,Te=null,Se=null,Fe=null,rt=null,Ot=null;return{setTest:function(Et){k||(Et?ae(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(Et){Ae!==Et&&!k&&(s.stencilMask(Et),Ae=Et)},setFunc:function(Et,Dn,ti){(De!==Et||Ie!==Dn||Te!==ti)&&(s.stencilFunc(Et,Dn,ti),De=Et,Ie=Dn,Te=ti)},setOp:function(Et,Dn,ti){(Se!==Et||Fe!==Dn||rt!==ti)&&(s.stencilOp(Et,Dn,ti),Se=Et,Fe=Dn,rt=ti)},setLocked:function(Et){k=Et},setClear:function(Et){Ot!==Et&&(s.clearStencil(Et),Ot=Et)},reset:function(){k=!1,Ae=null,De=null,Ie=null,Te=null,Se=null,Fe=null,rt=null,Ot=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],T=null,E=!1,y=null,_=null,C=null,L=null,U=null,H=null,I=null,P=new wt(0,0,0),W=0,w=!1,D=null,G=null,ne=null,ue=null,ve=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=Z>=2);let ce=null,ge={};const N=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),ye=new $t().fromArray(N),Me=new $t().fromArray(Q);function Re(k,Ae,De,Ie){const Te=new Uint8Array(4),Se=s.createTexture();s.bindTexture(k,Se),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<De;Fe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ae+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Se}const J={};J[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ae(s.DEPTH_TEST),h.setFunc(Cs),et(!1),We(Z_),ae(s.CULL_FACE),bt(Xa);function ae(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Ue(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Be(k,Ae){return v[k]!==Ae?(s.bindFramebuffer(k,Ae),v[k]=Ae,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ke(k,Ae){let De=M,Ie=!1;if(k){De=x.get(Ae),De===void 0&&(De=[],x.set(Ae,De));const Te=k.textures;if(De.length!==Te.length||De[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Fe=Te.length;Se<Fe;Se++)De[Se]=s.COLOR_ATTACHMENT0+Se;De.length=Te.length,Ie=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(De)}function dt(k){return T!==k?(s.useProgram(k),T=k,!0):!1}const rn={[yr]:s.FUNC_ADD,[BM]:s.FUNC_SUBTRACT,[IM]:s.FUNC_REVERSE_SUBTRACT};rn[FM]=s.MIN,rn[HM]=s.MAX;const F={[GM]:s.ZERO,[VM]:s.ONE,[kM]:s.SRC_COLOR,[Wh]:s.SRC_ALPHA,[ZM]:s.SRC_ALPHA_SATURATE,[YM]:s.DST_COLOR,[WM]:s.DST_ALPHA,[XM]:s.ONE_MINUS_SRC_COLOR,[qh]:s.ONE_MINUS_SRC_ALPHA,[jM]:s.ONE_MINUS_DST_COLOR,[qM]:s.ONE_MINUS_DST_ALPHA,[KM]:s.CONSTANT_COLOR,[QM]:s.ONE_MINUS_CONSTANT_COLOR,[JM]:s.CONSTANT_ALPHA,[$M]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(k,Ae,De,Ie,Te,Se,Fe,rt,Ot,Et){if(k===Xa){E===!0&&(Ue(s.BLEND),E=!1);return}if(E===!1&&(ae(s.BLEND),E=!0),k!==zM){if(k!==y||Et!==w){if((_!==yr||U!==yr)&&(s.blendEquation(s.FUNC_ADD),_=yr,U=yr),Et)switch(k){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K_:s.blendFunc(s.ONE,s.ONE);break;case Q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case J_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Q_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}C=null,L=null,H=null,I=null,P.set(0,0,0),W=0,y=k,w=Et}return}Te=Te||Ae,Se=Se||De,Fe=Fe||Ie,(Ae!==_||Te!==U)&&(s.blendEquationSeparate(rn[Ae],rn[Te]),_=Ae,U=Te),(De!==C||Ie!==L||Se!==H||Fe!==I)&&(s.blendFuncSeparate(F[De],F[Ie],F[Se],F[Fe]),C=De,L=Ie,H=Se,I=Fe),(rt.equals(P)===!1||Ot!==W)&&(s.blendColor(rt.r,rt.g,rt.b,Ot),P.copy(rt),W=Ot),y=k,w=!1}function at(k,Ae){k.side===Si?Ue(s.CULL_FACE):ae(s.CULL_FACE);let De=k.side===Gn;Ae&&(De=!De),et(De),k.blending===As&&k.transparent===!1?bt(Xa):bt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ie=k.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(k){D!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),D=k)}function We(k){k!==NM?(ae(s.CULL_FACE),k!==G&&(k===Z_?s.cullFace(s.BACK):k===OM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),G=k}function Gt(k){k!==ne&&(z&&s.lineWidth(k),ne=k)}function Xe(k,Ae,De){k?(ae(s.POLYGON_OFFSET_FILL),(ue!==Ae||ve!==De)&&(s.polygonOffset(Ae,De),ue=Ae,ve=De)):Ue(s.POLYGON_OFFSET_FILL)}function st(k){k?ae(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function Kt(k){k===void 0&&(k=s.TEXTURE0+he-1),ce!==k&&(s.activeTexture(k),ce=k)}function jt(k,Ae,De){De===void 0&&(ce===null?De=s.TEXTURE0+he-1:De=ce);let Ie=ge[De];Ie===void 0&&(Ie={type:void 0,texture:void 0},ge[De]=Ie),(Ie.type!==k||Ie.texture!==Ae)&&(ce!==De&&(s.activeTexture(De),ce=De),s.bindTexture(k,Ae||J[k]),Ie.type=k,Ie.texture=Ae)}function O(){const k=ge[ce];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(k){ye.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ye.copy(k))}function Ke(k){Me.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Me.copy(k))}function ze(k,Ae){let De=p.get(Ae);De===void 0&&(De=new WeakMap,p.set(Ae,De));let Ie=De.get(k);Ie===void 0&&(Ie=s.getUniformBlockIndex(Ae,k.name),De.set(k,Ie))}function Le(k,Ae){const Ie=p.get(Ae).get(k);m.get(Ae)!==Ie&&(s.uniformBlockBinding(Ae,Ie,k.__bindingPointIndex),m.set(Ae,Ie))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ce=null,ge={},v={},x=new WeakMap,M=[],T=null,E=!1,y=null,_=null,C=null,L=null,U=null,H=null,I=null,P=new wt(0,0,0),W=0,w=!1,D=null,G=null,ne=null,ue=null,ve=null,ye.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ae,disable:Ue,bindFramebuffer:Be,drawBuffers:ke,useProgram:dt,setBlending:bt,setMaterial:at,setFlipSided:et,setCullFace:We,setLineWidth:Gt,setPolygonOffset:Xe,setScissorTest:st,activeTexture:Kt,bindTexture:jt,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:ee,texImage2D:je,texImage3D:be,updateUBOMapping:ze,uniformBlockBinding:Le,texStorage2D:Ce,texStorage3D:Ye,texSubImage2D:pe,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ze,scissor:we,viewport:Ke,reset:lt}}function NR(s,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,b){return M?new OffscreenCanvas(O,b):Vu("canvas")}function E(O,b,ee){let pe=1;const Ee=jt(O);if((Ee.width>ee||Ee.height>ee)&&(pe=ee/Math.max(Ee.width,Ee.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(pe*Ee.width),Ze=Math.floor(pe*Ee.height);v===void 0&&(v=T(fe,Ze));const Ce=b?T(fe,Ze):v;return Ce.width=fe,Ce.height=Ze,Ce.getContext("2d").drawImage(O,0,0,fe,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+fe+"x"+Ze+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(O,b,ee,pe,Ee=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=b;if(b===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8)),b===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),b===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8)),b===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),b===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),b===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),b===s.RGB&&(ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),b===s.RGBA){const Ze=Ee?Hu:Ct.getTransfer(pe);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=Ze===Ht?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(O,b){let ee;return O?b===null||b===br||b===Fo?ee=s.DEPTH24_STENCIL8:b===sa?ee=s.DEPTH32F_STENCIL8:b===Io&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===Fo?ee=s.DEPTH_COMPONENT24:b===sa?ee=s.DEPTH_COMPONENT32F:b===Io&&(ee=s.DEPTH_COMPONENT16),ee}function H(O,b){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Mi&&O.minFilter!==Di?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function I(O){const b=O.target;b.removeEventListener("dispose",I),W(b),b.isVideoTexture&&g.delete(b)}function P(O){const b=O.target;b.removeEventListener("dispose",P),D(b)}function W(O){const b=r.get(O);if(b.__webglInit===void 0)return;const ee=O.source,pe=x.get(ee);if(pe){const Ee=pe[b.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&w(O),Object.keys(pe).length===0&&x.delete(ee)}r.remove(O)}function w(O){const b=r.get(O);s.deleteTexture(b.__webglTexture);const ee=O.source,pe=x.get(ee);delete pe[b.__cacheKey],h.memory.textures--}function D(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Ee=0;Ee<b.__webglFramebuffer[pe].length;Ee++)s.deleteFramebuffer(b.__webglFramebuffer[pe][Ee]);else s.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[pe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=O.textures;for(let pe=0,Ee=ee.length;pe<Ee;pe++){const fe=r.get(ee[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),h.memory.textures--),r.remove(ee[pe])}r.remove(O)}let G=0;function ne(){G=0}function ue(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function ve(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function he(O,b){const ee=r.get(O);if(O.isVideoTexture&&st(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ee.__version!==O.version){const pe=O.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ee,O,b);return}}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+b)}function z(O,b){const ee=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){J(ee,O,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+b)}function Z(O,b){const ee=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){J(ee,O,b);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+b)}function X(O,b){const ee=r.get(O);if(O.version>0&&ee.__version!==O.version){ae(ee,O,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+b)}const ce={[nd]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[id]:s.MIRRORED_REPEAT},ge={[Mi]:s.NEAREST,[uE]:s.NEAREST_MIPMAP_NEAREST,[cu]:s.NEAREST_MIPMAP_LINEAR,[Di]:s.LINEAR,[ch]:s.LINEAR_MIPMAP_NEAREST,[Tr]:s.LINEAR_MIPMAP_LINEAR},N={[pE]:s.NEVER,[xE]:s.ALWAYS,[mE]:s.LESS,[T0]:s.LEQUAL,[gE]:s.EQUAL,[SE]:s.GEQUAL,[_E]:s.GREATER,[vE]:s.NOTEQUAL};function Q(O,b){if(b.type===sa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Di||b.magFilter===ch||b.magFilter===cu||b.magFilter===Tr||b.minFilter===Di||b.minFilter===ch||b.minFilter===cu||b.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,ce[b.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,ce[b.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,ce[b.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,ge[b.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,ge[b.minFilter]),b.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mi||b.minFilter!==cu&&b.minFilter!==Tr||b.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ye(O,b){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",I));const pe=b.source;let Ee=x.get(pe);Ee===void 0&&(Ee={},x.set(pe,Ee));const fe=ve(b);if(fe!==O.__cacheKey){Ee[fe]===void 0&&(Ee[fe]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,ee=!0),Ee[fe].usedTimes++;const Ze=Ee[O.__cacheKey];Ze!==void 0&&(Ee[O.__cacheKey].usedTimes--,Ze.usedTimes===0&&w(b)),O.__cacheKey=fe,O.__webglTexture=Ee[fe].texture}return ee}function Me(O,b,ee){return Math.floor(Math.floor(O/ee)/b)}function Re(O,b,ee,pe){const fe=O.updateRanges;if(fe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,ee,pe,b.data);else{fe.sort((be,we)=>be.start-we.start);let Ze=0;for(let be=1;be<fe.length;be++){const we=fe[Ze],Ke=fe[be],ze=we.start+we.count,Le=Me(Ke.start,b.width,4),lt=Me(we.start,b.width,4);Ke.start<=ze+1&&Le===lt&&Me(Ke.start+Ke.count-1,b.width,4)===Le?we.count=Math.max(we.count,Ke.start+Ke.count-we.start):(++Ze,fe[Ze]=Ke)}fe.length=Ze+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),Ye=s.getParameter(s.UNPACK_SKIP_PIXELS),je=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let be=0,we=fe.length;be<we;be++){const Ke=fe[be],ze=Math.floor(Ke.start/4),Le=Math.ceil(Ke.count/4),lt=ze%b.width,k=Math.floor(ze/b.width),Ae=Le,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,lt,k,Ae,De,ee,pe,b.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,je)}}function J(O,b,ee){let pe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=s.TEXTURE_3D);const Ee=ye(O,b),fe=b.source;i.bindTexture(pe,O.__webglTexture,s.TEXTURE0+ee);const Ze=r.get(fe);if(fe.version!==Ze.__version||Ee===!0){i.activeTexture(s.TEXTURE0+ee);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Ye=b.colorSpace===ka?null:Ct.getPrimaries(b.colorSpace),je=b.colorSpace===ka||Ce===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let be=E(b.image,!1,l.maxTextureSize);be=Kt(b,be);const we=u.convert(b.format,b.colorSpace),Ke=u.convert(b.type);let ze=L(b.internalFormat,we,Ke,b.colorSpace,b.isVideoTexture);Q(pe,b);let Le;const lt=b.mipmaps,k=b.isVideoTexture!==!0,Ae=Ze.__version===void 0||Ee===!0,De=fe.dataReady,Ie=H(b,be);if(b.isDepthTexture)ze=U(b.format===Go,b.type),Ae&&(k?i.texStorage2D(s.TEXTURE_2D,1,ze,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,ze,be.width,be.height,0,we,Ke,null));else if(b.isDataTexture)if(lt.length>0){k&&Ae&&i.texStorage2D(s.TEXTURE_2D,Ie,ze,lt[0].width,lt[0].height);for(let Te=0,Se=lt.length;Te<Se;Te++)Le=lt[Te],k?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,we,Ke,Le.data):i.texImage2D(s.TEXTURE_2D,Te,ze,Le.width,Le.height,0,we,Ke,Le.data);b.generateMipmaps=!1}else k?(Ae&&i.texStorage2D(s.TEXTURE_2D,Ie,ze,be.width,be.height),De&&Re(b,be,we,Ke)):i.texImage2D(s.TEXTURE_2D,0,ze,be.width,be.height,0,we,Ke,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Ae&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,ze,lt[0].width,lt[0].height,be.depth);for(let Te=0,Se=lt.length;Te<Se;Te++)if(Le=lt[Te],b.format!==yi)if(we!==null)if(k){if(De)if(b.layerUpdates.size>0){const Fe=Ev(Le.width,Le.height,b.format,b.type);for(const rt of b.layerUpdates){const Ot=Le.data.subarray(rt*Fe/Le.data.BYTES_PER_ELEMENT,(rt+1)*Fe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,rt,Le.width,Le.height,1,we,Ot)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,be.depth,we,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,ze,Le.width,Le.height,be.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,be.depth,we,Ke,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,ze,Le.width,Le.height,be.depth,0,we,Ke,Le.data)}else{k&&Ae&&i.texStorage2D(s.TEXTURE_2D,Ie,ze,lt[0].width,lt[0].height);for(let Te=0,Se=lt.length;Te<Se;Te++)Le=lt[Te],b.format!==yi?we!==null?k?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,we,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,ze,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,we,Ke,Le.data):i.texImage2D(s.TEXTURE_2D,Te,ze,Le.width,Le.height,0,we,Ke,Le.data)}else if(b.isDataArrayTexture)if(k){if(Ae&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,ze,be.width,be.height,be.depth),De)if(b.layerUpdates.size>0){const Te=Ev(be.width,be.height,b.format,b.type);for(const Se of b.layerUpdates){const Fe=be.data.subarray(Se*Te/be.data.BYTES_PER_ELEMENT,(Se+1)*Te/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,be.width,be.height,1,we,Ke,Fe)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,we,Ke,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,be.width,be.height,be.depth,0,we,Ke,be.data);else if(b.isData3DTexture)k?(Ae&&i.texStorage3D(s.TEXTURE_3D,Ie,ze,be.width,be.height,be.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,we,Ke,be.data)):i.texImage3D(s.TEXTURE_3D,0,ze,be.width,be.height,be.depth,0,we,Ke,be.data);else if(b.isFramebufferTexture){if(Ae)if(k)i.texStorage2D(s.TEXTURE_2D,Ie,ze,be.width,be.height);else{let Te=be.width,Se=be.height;for(let Fe=0;Fe<Ie;Fe++)i.texImage2D(s.TEXTURE_2D,Fe,ze,Te,Se,0,we,Ke,null),Te>>=1,Se>>=1}}else if(lt.length>0){if(k&&Ae){const Te=jt(lt[0]);i.texStorage2D(s.TEXTURE_2D,Ie,ze,Te.width,Te.height)}for(let Te=0,Se=lt.length;Te<Se;Te++)Le=lt[Te],k?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,we,Ke,Le):i.texImage2D(s.TEXTURE_2D,Te,ze,we,Ke,Le);b.generateMipmaps=!1}else if(k){if(Ae){const Te=jt(be);i.texStorage2D(s.TEXTURE_2D,Ie,ze,Te.width,Te.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ke,be)}else i.texImage2D(s.TEXTURE_2D,0,ze,we,Ke,be);y(b)&&_(pe),Ze.__version=fe.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function ae(O,b,ee){if(b.image.length!==6)return;const pe=ye(O,b),Ee=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+ee);const fe=r.get(Ee);if(Ee.version!==fe.__version||pe===!0){i.activeTexture(s.TEXTURE0+ee);const Ze=Ct.getPrimaries(Ct.workingColorSpace),Ce=b.colorSpace===ka?null:Ct.getPrimaries(b.colorSpace),Ye=b.colorSpace===ka||Ze===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const je=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,we=[];for(let Se=0;Se<6;Se++)!je&&!be?we[Se]=E(b.image[Se],!0,l.maxCubemapSize):we[Se]=be?b.image[Se].image:b.image[Se],we[Se]=Kt(b,we[Se]);const Ke=we[0],ze=u.convert(b.format,b.colorSpace),Le=u.convert(b.type),lt=L(b.internalFormat,ze,Le,b.colorSpace),k=b.isVideoTexture!==!0,Ae=fe.__version===void 0||pe===!0,De=Ee.dataReady;let Ie=H(b,Ke);Q(s.TEXTURE_CUBE_MAP,b);let Te;if(je){k&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,lt,Ke.width,Ke.height);for(let Se=0;Se<6;Se++){Te=we[Se].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){const rt=Te[Fe];b.format!==yi?ze!==null?k?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,rt.width,rt.height,ze,rt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,lt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,rt.width,rt.height,ze,Le,rt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,lt,rt.width,rt.height,0,ze,Le,rt.data)}}}else{if(Te=b.mipmaps,k&&Ae){Te.length>0&&Ie++;const Se=jt(we[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,lt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(be){k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,we[Se].width,we[Se].height,ze,Le,we[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,lt,we[Se].width,we[Se].height,0,ze,Le,we[Se].data);for(let Fe=0;Fe<Te.length;Fe++){const Ot=Te[Fe].image[Se].image;k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,Ot.width,Ot.height,ze,Le,Ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,lt,Ot.width,Ot.height,0,ze,Le,Ot.data)}}else{k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ze,Le,we[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,lt,ze,Le,we[Se]);for(let Fe=0;Fe<Te.length;Fe++){const rt=Te[Fe];k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,ze,Le,rt.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,lt,ze,Le,rt.image[Se])}}}y(b)&&_(s.TEXTURE_CUBE_MAP),fe.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ue(O,b,ee,pe,Ee,fe){const Ze=u.convert(ee.format,ee.colorSpace),Ce=u.convert(ee.type),Ye=L(ee.internalFormat,Ze,Ce,ee.colorSpace),je=r.get(b),be=r.get(ee);if(be.__renderTarget=b,!je.__hasExternalTextures){const we=Math.max(1,b.width>>fe),Ke=Math.max(1,b.height>>fe);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?i.texImage3D(Ee,fe,Ye,we,Ke,b.depth,0,Ze,Ce,null):i.texImage2D(Ee,fe,Ye,we,Ke,0,Ze,Ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Xe(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,Ee,be.__webglTexture,0,Gt(b)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,Ee,be.__webglTexture,fe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(O,b,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,O),b.depthBuffer){const pe=b.depthTexture,Ee=pe&&pe.isDepthTexture?pe.type:null,fe=U(b.stencilBuffer,Ee),Ze=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=Gt(b);Xe(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,b.width,b.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,O)}else{const pe=b.textures;for(let Ee=0;Ee<pe.length;Ee++){const fe=pe[Ee],Ze=u.convert(fe.format,fe.colorSpace),Ce=u.convert(fe.type),Ye=L(fe.internalFormat,Ze,Ce,fe.colorSpace),je=Gt(b);ee&&Xe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Ye,b.width,b.height):Xe(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,Ye,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ye,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(b.depthTexture);pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const Ee=pe.__webglTexture,fe=Gt(b);if(b.depthTexture.format===Ho)Xe(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(b.depthTexture.format===Go)Xe(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function dt(O){const b=r.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Ee)};pe.addEventListener("dispose",Ee),b.__depthDisposeCallback=Ee}b.__boundDepthTexture=pe}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const pe=O.texture.mipmaps;pe&&pe.length>0?ke(b.__webglFramebuffer[0],O):ke(b.__webglFramebuffer,O)}else if(ee){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=s.createRenderbuffer(),Be(b.__webglDepthbuffer[pe],O,!1);else{const Ee=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,fe)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Be(b.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,fe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function rn(O,b,ee){const pe=r.get(O);b!==void 0&&Ue(pe.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&dt(O)}function F(O){const b=O.texture,ee=r.get(O),pe=r.get(b);O.addEventListener("dispose",P);const Ee=O.textures,fe=O.isWebGLCubeRenderTarget===!0,Ze=Ee.length>1;if(Ze||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=b.version,h.memory.textures++),fe){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Ye=0;Ye<b.mipmaps.length;Ye++)ee.__webglFramebuffer[Ce][Ye]=s.createFramebuffer()}else ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Ce=0,Ye=Ee.length;Ce<Ye;Ce++){const je=r.get(Ee[Ce]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),h.memory.textures++)}if(O.samples>0&&Xe(O)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Ee.length;Ce++){const Ye=Ee[Ce];ee.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const je=u.convert(Ye.format,Ye.colorSpace),be=u.convert(Ye.type),we=L(Ye.internalFormat,je,be,Ye.colorSpace,O.isXRRenderTarget===!0),Ke=Gt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,we,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(ee.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){i.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),Q(s.TEXTURE_CUBE_MAP,b);for(let Ce=0;Ce<6;Ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)Ue(ee.__webglFramebuffer[Ce][Ye],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ye);else Ue(ee.__webglFramebuffer[Ce],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let Ce=0,Ye=Ee.length;Ce<Ye;Ce++){const je=Ee[Ce],be=r.get(je);let we=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,be.__webglTexture),Q(we,je),Ue(ee.__webglFramebuffer,O,je,s.COLOR_ATTACHMENT0+Ce,we,0),y(je)&&_(we)}i.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,pe.__webglTexture),Q(Ce,b),b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)Ue(ee.__webglFramebuffer[Ye],O,b,s.COLOR_ATTACHMENT0,Ce,Ye);else Ue(ee.__webglFramebuffer,O,b,s.COLOR_ATTACHMENT0,Ce,0);y(b)&&_(Ce),i.unbindTexture()}O.depthBuffer&&dt(O)}function bt(O){const b=O.textures;for(let ee=0,pe=b.length;ee<pe;ee++){const Ee=b[ee];if(y(Ee)){const fe=C(O),Ze=r.get(Ee).__webglTexture;i.bindTexture(fe,Ze),_(fe),i.unbindTexture()}}}const at=[],et=[];function We(O){if(O.samples>0){if(Xe(O)===!1){const b=O.textures,ee=O.width,pe=O.height;let Ee=s.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(O),Ce=b.length>1;if(Ce)for(let je=0;je<b.length;je++)i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let je=0;je<b.length;je++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[je]);const be=r.get(b[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,Ee,s.NEAREST),m===!0&&(at.length=0,et.length=0,at.push(s.COLOR_ATTACHMENT0+je),O.depthBuffer&&O.resolveDepthBuffer===!1&&(at.push(fe),et.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let je=0;je<b.length;je++){i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[je]);const be=r.get(b[je]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Gt(O){return Math.min(l.maxSamples,O.samples)}function Xe(O){const b=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function st(O){const b=h.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function Kt(O,b){const ee=O.colorSpace,pe=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==Us&&ee!==ka&&(Ct.getTransfer(ee)===Ht?(pe!==yi||Ee!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function jt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=ne,this.setTexture2D=he,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=rn,this.setupRenderTarget=F,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Xe}function OR(s,e){function i(r,l=ka){let u;const h=Ct.getTransfer(l);if(r===Oi)return s.UNSIGNED_BYTE;if(r===kd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===v0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===S0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===g0)return s.BYTE;if(r===_0)return s.SHORT;if(r===Io)return s.UNSIGNED_SHORT;if(r===Vd)return s.INT;if(r===br)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===qo)return s.HALF_FLOAT;if(r===x0)return s.ALPHA;if(r===y0)return s.RGB;if(r===yi)return s.RGBA;if(r===Ho)return s.DEPTH_COMPONENT;if(r===Go)return s.DEPTH_STENCIL;if(r===M0)return s.RED;if(r===Wd)return s.RED_INTEGER;if(r===E0)return s.RG;if(r===qd)return s.RG_INTEGER;if(r===Yd)return s.RGBA_INTEGER;if(r===Ou||r===Pu||r===zu||r===Bu)if(h===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ou)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ou)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ad||r===rd||r===sd||r===od)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===ad)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===od)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ld||r===ud||r===cd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ld||r===ud)return h===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===cd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===Sd||r===xd||r===yd||r===Md||r===Ed||r===Td)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===fd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===md)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yd)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Md)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ed)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Td)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bd||r===Ad||r===Rd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===bd)return h===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ad)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cd||r===wd||r===Dd||r===Ud)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Cd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===wd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ud)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const PR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
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

}`;class BR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new P0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ya({vertexShader:PR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new Qo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IR extends Ps{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,T=null;const E=typeof XRWebGLBinding<"u",y=new BR,_={},C=i.getContextAttributes();let L=null,U=null;const H=[],I=[],P=new Dt;let W=null;const w=new hi;w.viewport=new $t;const D=new hi;D.viewport=new $t;const G=[w,D],ne=new aT;let ue=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=H[J];return ae===void 0&&(ae=new Nh,H[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=H[J];return ae===void 0&&(ae=new Nh,H[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=H[J];return ae===void 0&&(ae=new Nh,H[J]=ae),ae.getHandSpace()};function he(J){const ae=I.indexOf(J.inputSource);if(ae===-1)return;const Ue=H[ae];Ue!==void 0&&(Ue.update(J.inputSource,J.frame,p||h),Ue.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){l.removeEventListener("select",he),l.removeEventListener("selectstart",he),l.removeEventListener("selectend",he),l.removeEventListener("squeeze",he),l.removeEventListener("squeezestart",he),l.removeEventListener("squeezeend",he),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",Z);for(let J=0;J<H.length;J++){const ae=I[J];ae!==null&&(I[J]=null,H[J].disconnect(ae))}ue=null,ve=null,y.reset();for(const J in _)delete _[J];e.setRenderTarget(L),M=null,x=null,v=null,l=null,U=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",he),l.addEventListener("selectstart",he),l.addEventListener("selectend",he),l.addEventListener("squeeze",he),l.addEventListener("squeezestart",he),l.addEventListener("squeezeend",he),l.addEventListener("end",z),l.addEventListener("inputsourceschange",Z),C.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Be=null,ke=null;C.depth&&(ke=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ue=C.stencil?Go:Ho,Be=C.stencil?Fo:br);const dt={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(dt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new Ar(x.textureWidth,x.textureHeight,{format:yi,type:Oi,depthTexture:new O0(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ue={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ue),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Ar(M.framebufferWidth,M.framebufferHeight,{format:yi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Re.setContext(l),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(J){for(let ae=0;ae<J.removed.length;ae++){const Ue=J.removed[ae],Be=I.indexOf(Ue);Be>=0&&(I[Be]=null,H[Be].disconnect(Ue))}for(let ae=0;ae<J.added.length;ae++){const Ue=J.added[ae];let Be=I.indexOf(Ue);if(Be===-1){for(let dt=0;dt<H.length;dt++)if(dt>=I.length){I.push(Ue),Be=dt;break}else if(I[dt]===null){I[dt]=Ue,Be=dt;break}if(Be===-1)break}const ke=H[Be];ke&&ke.connect(Ue)}}const X=new oe,ce=new oe;function ge(J,ae,Ue){X.setFromMatrixPosition(ae.matrixWorld),ce.setFromMatrixPosition(Ue.matrixWorld);const Be=X.distanceTo(ce),ke=ae.projectionMatrix.elements,dt=Ue.projectionMatrix.elements,rn=ke[14]/(ke[10]-1),F=ke[14]/(ke[10]+1),bt=(ke[9]+1)/ke[5],at=(ke[9]-1)/ke[5],et=(ke[8]-1)/ke[0],We=(dt[8]+1)/dt[0],Gt=rn*et,Xe=rn*We,st=Be/(-et+We),Kt=st*-et;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Kt),J.translateZ(st),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ke[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const jt=rn+st,O=F+st,b=Gt-Kt,ee=Xe+(Be-Kt),pe=bt*F/O*jt,Ee=at*F/O*jt;J.projectionMatrix.makePerspective(b,ee,pe,Ee,jt,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function N(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ae=J.near,Ue=J.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(Ue=y.depthFar)),ne.near=D.near=w.near=ae,ne.far=D.far=w.far=Ue,(ue!==ne.near||ve!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),ue=ne.near,ve=ne.far),ne.layers.mask=J.layers.mask|6,w.layers.mask=ne.layers.mask&3,D.layers.mask=ne.layers.mask&5;const Be=J.parent,ke=ne.cameras;N(ne,Be);for(let dt=0;dt<ke.length;dt++)N(ke[dt],Be);ke.length===2?ge(ne,w,D):ne.projectionMatrix.copy(w.projectionMatrix),Q(J,ne,Be)};function Q(J,ae,Ue){Ue===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Ue.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ld*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(J){m=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(J){return _[J]};let ye=null;function Me(J,ae){if(g=ae.getViewerPose(p||h),T=ae,g!==null){const Ue=g.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Be=!1;Ue.length!==ne.cameras.length&&(ne.cameras.length=0,Be=!0);for(let F=0;F<Ue.length;F++){const bt=Ue[F];let at=null;if(M!==null)at=M.getViewport(bt);else{const We=v.getViewSubImage(x,bt);at=We.viewport,F===0&&(e.setRenderTargetTextures(U,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(U))}let et=G[F];et===void 0&&(et=new hi,et.layers.enable(F),et.viewport=new $t,G[F]=et),et.matrix.fromArray(bt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(bt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(at.x,at.y,at.width,at.height),F===0&&(ne.matrix.copy(et.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Be===!0&&ne.cameras.push(et)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){v=r.getBinding();const F=v.getDepthInformation(Ue[0]);F&&F.isValid&&F.texture&&y.init(F,l.renderState)}if(ke&&ke.includes("camera-access")&&E){e.state.unbindTexture(),v=r.getBinding();for(let F=0;F<Ue.length;F++){const bt=Ue[F].camera;if(bt){let at=_[bt];at||(at=new P0,_[bt]=at);const et=v.getCameraImage(bt);at.sourceTexture=et}}}}for(let Ue=0;Ue<H.length;Ue++){const Be=I[Ue],ke=H[Ue];Be!==null&&ke!==void 0&&ke.update(Be,ae,p||h)}ye&&ye(J,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),T=null}const Re=new I0;Re.setAnimationLoop(Me),this.setAnimationLoop=function(J){ye=J},this.dispose=function(){}}}const vr=new ca,FR=new en;function HR(s,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,U0(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,C,L,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),T(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),E(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,C,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Gn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Gn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),L=C.envMap,U=C.envMapRotation;L&&(y.envMap.value=L,vr.copy(U),vr.x*=-1,vr.y*=-1,vr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),y.envMapRotation.value.setFromMatrix4(FR.makeRotationFromEuler(vr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,C,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function GR(s,e,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const U=L.program;r.uniformBlockBinding(C,U)}function p(C,L){let U=l[C.id];U===void 0&&(T(C),U=g(C),l[C.id]=U,C.addEventListener("dispose",y));const H=L.program;r.updateUBOMapping(C,H);const I=e.render.frame;u[C.id]!==I&&(x(C),u[C.id]=I)}function g(C){const L=v();C.__bindingPointIndex=L;const U=s.createBuffer(),H=C.__size,I=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,H,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,U),U}function v(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const L=l[C.id],U=C.uniforms,H=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let I=0,P=U.length;I<P;I++){const W=Array.isArray(U[I])?U[I]:[U[I]];for(let w=0,D=W.length;w<D;w++){const G=W[w];if(M(G,I,w,H)===!0){const ne=G.__offset,ue=Array.isArray(G.value)?G.value:[G.value];let ve=0;for(let he=0;he<ue.length;he++){const z=ue[he],Z=E(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,ne+ve,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,ve),ve+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,L,U,H){const I=C.value,P=L+"_"+U;if(H[P]===void 0)return typeof I=="number"||typeof I=="boolean"?H[P]=I:H[P]=I.clone(),!0;{const W=H[P];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return H[P]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function T(C){const L=C.uniforms;let U=0;const H=16;for(let P=0,W=L.length;P<W;P++){const w=Array.isArray(L[P])?L[P]:[L[P]];for(let D=0,G=w.length;D<G;D++){const ne=w[D],ue=Array.isArray(ne.value)?ne.value:[ne.value];for(let ve=0,he=ue.length;ve<he;ve++){const z=ue[ve],Z=E(z),X=U%H,ce=X%Z.boundary,ge=X+ce;U+=ce,ge!==0&&H-ge<Z.storage&&(U+=H-ge),ne.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=U,U+=Z.storage}}}const I=U%H;return I>0&&(U+=H-I),C.__size=U,C.__cache={},this}function E(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),L}function y(C){const L=C.target;L.removeEventListener("dispose",y);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const C in l)s.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class VR{constructor(e={}){const{canvas:i=ME(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),E=new Int32Array(4);let y=null,_=null;const C=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let H=!1;this._outputColorSpace=fi;let I=0,P=0,W=null,w=-1,D=null;const G=new $t,ne=new $t;let ue=null;const ve=new wt(0);let he=0,z=i.width,Z=i.height,X=1,ce=null,ge=null;const N=new $t(0,0,z,Z),Q=new $t(0,0,z,Z);let ye=!1;const Me=new Qd;let Re=!1,J=!1;const ae=new en,Ue=new oe,Be=new $t,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function rn(){return W===null?X:1}let F=r;function bt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gd}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Te,!1),F===null){const q="webgl2";if(F=bt(q,R),F===null)throw bt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,et,We,Gt,Xe,st,Kt,jt,O,b,ee,pe,Ee,fe,Ze,Ce,Ye,je,be,we,Ke,ze,Le,lt;function k(){at=new JA(F),at.init(),ze=new OR(F,at),et=new WA(F,at,e,ze),We=new LR(F,at),et.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),Gt=new t1(F),Xe=new SR,st=new NR(F,at,We,Xe,et,ze,Gt),Kt=new YA(U),jt=new QA(U),O=new oT(F),Le=new kA(F,O),b=new $A(F,O,Gt,Le),ee=new i1(F,b,O,Gt),be=new n1(F,et,st),Ce=new qA(Xe),pe=new vR(U,Kt,jt,at,et,Le,Ce),Ee=new HR(U,Xe),fe=new yR,Ze=new RR(at),je=new VA(U,Kt,jt,We,ee,M,m),Ye=new DR(U,ee,et),lt=new GR(F,Gt,et,We),we=new XA(F,at,Gt),Ke=new e1(F,at,Gt),Gt.programs=pe.programs,U.capabilities=et,U.extensions=at,U.properties=Xe,U.renderLists=fe,U.shadowMap=Ye,U.state=We,U.info=Gt}k();const Ae=new IR(U,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(z,Z,!1))},this.getSize=function(R){return R.set(z,Z)},this.setSize=function(R,q,re=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,Z=q,i.width=Math.floor(R*X),i.height=Math.floor(q*X),re===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(z*X,Z*X).floor()},this.setDrawingBufferSize=function(R,q,re){z=R,Z=q,X=re,i.width=Math.floor(R*re),i.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,q,re,se){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,q,re,se),We.viewport(G.copy(N).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,q,re,se){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,q,re,se),We.scissor(ne.copy(Q).multiplyScalar(X).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){We.setScissorTest(ye=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){ge=R},this.getClearColor=function(R){return R.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,re=!0){let se=0;if(R){let j=!1;if(W!==null){const xe=W.texture.format;j=xe===Yd||xe===qd||xe===Wd}if(j){const xe=W.texture.type,Ne=xe===Oi||xe===br||xe===Io||xe===Fo||xe===kd||xe===Xd,Ge=je.getClearColor(),Pe=je.getClearAlpha(),Qe=Ge.r,it=Ge.g,Je=Ge.b;Ne?(T[0]=Qe,T[1]=it,T[2]=Je,T[3]=Pe,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=Qe,E[1]=it,E[2]=Je,E[3]=Pe,F.clearBufferiv(F.COLOR,0,E))}else se|=F.COLOR_BUFFER_BIT}q&&(se|=F.DEPTH_BUFFER_BIT),re&&(se|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),je.dispose(),fe.dispose(),Ze.dispose(),Xe.dispose(),Kt.dispose(),jt.dispose(),ee.dispose(),Le.dispose(),lt.dispose(),pe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ti),Ae.removeEventListener("sessionend",Bs),Ei.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Gt.autoReset,q=Ye.enabled,re=Ye.autoUpdate,se=Ye.needsUpdate,j=Ye.type;k(),Gt.autoReset=R,Ye.enabled=q,Ye.autoUpdate=re,Ye.needsUpdate=se,Ye.type=j}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Se(R){const q=R.target;q.removeEventListener("dispose",Se),Fe(q)}function Fe(R){rt(R),Xe.remove(R)}function rt(R){const q=Xe.get(R).programs;q!==void 0&&(q.forEach(function(re){pe.releaseProgram(re)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,se,j,xe){q===null&&(q=ke);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Ge=da(R,q,re,se,j);We.setMaterial(se,Ne);let Pe=re.index,Qe=1;if(se.wireframe===!0){if(Pe=b.getWireframeAttribute(re),Pe===void 0)return;Qe=2}const it=re.drawRange,Je=re.attributes.position;let pt=it.start*Qe,Lt=(it.start+it.count)*Qe;xe!==null&&(pt=Math.max(pt,xe.start*Qe),Lt=Math.min(Lt,(xe.start+xe.count)*Qe)),Pe!==null?(pt=Math.max(pt,0),Lt=Math.min(Lt,Pe.count)):Je!=null&&(pt=Math.max(pt,0),Lt=Math.min(Lt,Je.count));const Vt=Lt-pt;if(Vt<0||Vt===1/0)return;Le.setup(j,se,Ge,re,Pe);let Nt,mt=we;if(Pe!==null&&(Nt=O.get(Pe),mt=Ke,mt.setIndex(Nt)),j.isMesh)se.wireframe===!0?(We.setLineWidth(se.wireframeLinewidth*rn()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(j.isLine){let Ve=se.linewidth;Ve===void 0&&(Ve=1),We.setLineWidth(Ve*rn()),j.isLineSegments?mt.setMode(F.LINES):j.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else j.isPoints?mt.setMode(F.POINTS):j.isSprite&&mt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ve=j._multiDrawStarts,Xt=j._multiDrawCounts,Tt=j._multiDrawCount,xn=Pe?O.get(Pe).bytesPerElement:1,zi=Xe.get(se).currentProgram.getUniforms();for(let gn=0;gn<Tt;gn++)zi.setValue(F,"_gl_DrawID",gn),mt.render(Ve[gn]/xn,Xt[gn])}else if(j.isInstancedMesh)mt.renderInstances(pt,Vt,j.count);else if(re.isInstancedBufferGeometry){const Ve=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xt=Math.min(re.instanceCount,Ve);mt.renderInstances(pt,Vt,Xt)}else mt.render(pt,Vt)};function Ot(R,q,re){R.transparent===!0&&R.side===Si&&R.forceSinglePass===!1?(R.side=Gn,R.needsUpdate=!0,kn(R,q,re),R.side=qa,R.needsUpdate=!0,kn(R,q,re),R.side=Si):kn(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),_=Ze.get(re),_.init(q),L.push(_),re.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==re&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const se=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xe=j.material;if(xe)if(Array.isArray(xe))for(let Ne=0;Ne<xe.length;Ne++){const Ge=xe[Ne];Ot(Ge,re,j),se.add(Ge)}else Ot(xe,re,j),se.add(xe)}),_=L.pop(),se},this.compileAsync=function(R,q,re=null){const se=this.compile(R,q,re);return new Promise(j=>{function xe(){if(se.forEach(function(Ne){Xe.get(Ne).currentProgram.isReady()&&se.delete(Ne)}),se.size===0){j(R);return}setTimeout(xe,10)}at.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Et=null;function Dn(R){Et&&Et(R)}function ti(){Ei.stop()}function Bs(){Ei.start()}const Ei=new I0;Ei.setAnimationLoop(Dn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){Et=R,Ae.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},Ae.addEventListener("sessionstart",ti),Ae.addEventListener("sessionend",Bs),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(q),q=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,W),_=Ze.get(R,L.length),_.init(q),L.push(_),ae.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Me.setFromProjectionMatrix(ae,Ui,q.reversedDepth),J=this.localClippingEnabled,Re=Ce.init(this.clippingPlanes,J),y=fe.get(R,C.length),y.init(),C.push(y),Ae.enabled===!0&&Ae.isPresenting===!0){const xe=U.xr.getDepthSensingMesh();xe!==null&&Cr(xe,q,-1/0,U.sortObjects)}Cr(R,q,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(ce,ge),dt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,dt&&je.addToRenderList(y,R),this.info.render.frame++,Re===!0&&Ce.beginShadows();const re=_.state.shadowsArray;Ye.render(re,R,q),Re===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,j=y.transmissive;if(_.setupLights(),q.isArrayCamera){const xe=q.cameras;if(j.length>0)for(let Ne=0,Ge=xe.length;Ne<Ge;Ne++){const Pe=xe[Ne];Dr(se,j,R,Pe)}dt&&je.render(R);for(let Ne=0,Ge=xe.length;Ne<Ge;Ne++){const Pe=xe[Ne];wr(y,R,Pe,Pe.viewport)}}else j.length>0&&Dr(se,j,R,q),dt&&je.render(R),wr(y,R,q);W!==null&&P===0&&(st.updateMultisampleRenderTarget(W),st.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(U,R,q),Le.resetDefaultState(),w=-1,D=null,L.pop(),L.length>0?(_=L[L.length-1],Re===!0&&Ce.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,C.pop(),C.length>0?y=C[C.length-1]:y=null};function Cr(R,q,re,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Me.intersectsSprite(R)){se&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ae);const Ne=ee.update(R),Ge=R.material;Ge.visible&&y.push(R,Ne,Ge,re,Be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Me.intersectsObject(R))){const Ne=ee.update(R),Ge=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Be.copy(Ne.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(ae)),Array.isArray(Ge)){const Pe=Ne.groups;for(let Qe=0,it=Pe.length;Qe<it;Qe++){const Je=Pe[Qe],pt=Ge[Je.materialIndex];pt&&pt.visible&&y.push(R,Ne,pt,re,Be.z,Je)}}else Ge.visible&&y.push(R,Ne,Ge,re,Be.z,null)}}const xe=R.children;for(let Ne=0,Ge=xe.length;Ne<Ge;Ne++)Cr(xe[Ne],q,re,se)}function wr(R,q,re,se){const j=R.opaque,xe=R.transmissive,Ne=R.transparent;_.setupLightsView(re),Re===!0&&Ce.setGlobalState(U.clippingPlanes,re),se&&We.viewport(G.copy(se)),j.length>0&&ja(j,q,re),xe.length>0&&ja(xe,q,re),Ne.length>0&&ja(Ne,q,re),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Dr(R,q,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new Ar(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?qo:Oi,minFilter:Tr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const xe=_.state.transmissionRenderTarget[se.id],Ne=se.viewport||G;xe.setSize(Ne.z*U.transmissionResolutionScale,Ne.w*U.transmissionResolutionScale);const Ge=U.getRenderTarget(),Pe=U.getActiveCubeFace(),Qe=U.getActiveMipmapLevel();U.setRenderTarget(xe),U.getClearColor(ve),he=U.getClearAlpha(),he<1&&U.setClearColor(16777215,.5),U.clear(),dt&&je.render(re);const it=U.toneMapping;U.toneMapping=Wa;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),Re===!0&&Ce.setGlobalState(U.clippingPlanes,se),ja(R,re,se),st.updateMultisampleRenderTarget(xe),st.updateRenderTargetMipmap(xe),at.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Lt=0,Vt=q.length;Lt<Vt;Lt++){const Nt=q[Lt],mt=Nt.object,Ve=Nt.geometry,Xt=Nt.material,Tt=Nt.group;if(Xt.side===Si&&mt.layers.test(se.layers)){const xn=Xt.side;Xt.side=Gn,Xt.needsUpdate=!0,Is(mt,re,se,Ve,Xt,Tt),Xt.side=xn,Xt.needsUpdate=!0,pt=!0}}pt===!0&&(st.updateMultisampleRenderTarget(xe),st.updateRenderTargetMipmap(xe))}U.setRenderTarget(Ge,Pe,Qe),U.setClearColor(ve,he),Je!==void 0&&(se.viewport=Je),U.toneMapping=it}function ja(R,q,re){const se=q.isScene===!0?q.overrideMaterial:null;for(let j=0,xe=R.length;j<xe;j++){const Ne=R[j],Ge=Ne.object,Pe=Ne.geometry,Qe=Ne.group;let it=Ne.material;it.allowOverride===!0&&se!==null&&(it=se),Ge.layers.test(re.layers)&&Is(Ge,q,re,Pe,it,Qe)}}function Is(R,q,re,se,j,xe){R.onBeforeRender(U,q,re,se,j,xe),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(U,q,re,se,R,xe),j.transparent===!0&&j.side===Si&&j.forceSinglePass===!1?(j.side=Gn,j.needsUpdate=!0,U.renderBufferDirect(re,q,se,j,R,xe),j.side=qa,j.needsUpdate=!0,U.renderBufferDirect(re,q,se,j,R,xe),j.side=Si):U.renderBufferDirect(re,q,se,j,R,xe),R.onAfterRender(U,q,re,se,j,xe)}function kn(R,q,re){q.isScene!==!0&&(q=ke);const se=Xe.get(R),j=_.state.lights,xe=_.state.shadowsArray,Ne=j.state.version,Ge=pe.getParameters(R,j.state,xe,q,re),Pe=pe.getProgramCacheKey(Ge);let Qe=se.programs;se.environment=R.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(R.isMeshStandardMaterial?jt:Kt).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",Se),Qe=new Map,se.programs=Qe);let it=Qe.get(Pe);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===Ne)return Sn(R,Ge),it}else Ge.uniforms=pe.getUniforms(R),R.onBeforeCompile(Ge,U),it=pe.acquireProgram(Ge,Pe),Qe.set(Pe,it),se.uniforms=Ge.uniforms;const Je=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=Ce.uniform),Sn(R,Ge),se.needsLights=Zu(R),se.lightsStateVersion=Ne,se.needsLights&&(Je.ambientLightColor.value=j.state.ambient,Je.lightProbe.value=j.state.probe,Je.directionalLights.value=j.state.directional,Je.directionalLightShadows.value=j.state.directionalShadow,Je.spotLights.value=j.state.spot,Je.spotLightShadows.value=j.state.spotShadow,Je.rectAreaLights.value=j.state.rectArea,Je.ltc_1.value=j.state.rectAreaLTC1,Je.ltc_2.value=j.state.rectAreaLTC2,Je.pointLights.value=j.state.point,Je.pointLightShadows.value=j.state.pointShadow,Je.hemisphereLights.value=j.state.hemi,Je.directionalShadowMap.value=j.state.directionalShadowMap,Je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Je.spotShadowMap.value=j.state.spotShadowMap,Je.spotLightMatrix.value=j.state.spotLightMatrix,Je.spotLightMap.value=j.state.spotLightMap,Je.pointShadowMap.value=j.state.pointShadowMap,Je.pointShadowMatrix.value=j.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function sn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Iu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Sn(R,q){const re=Xe.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function da(R,q,re,se,j){q.isScene!==!0&&(q=ke),st.resetTextureUnits();const xe=q.fog,Ne=se.isMeshStandardMaterial?q.environment:null,Ge=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Us,Pe=(se.isMeshStandardMaterial?jt:Kt).get(se.envMap||Ne),Qe=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,it=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!re.morphAttributes.position,pt=!!re.morphAttributes.normal,Lt=!!re.morphAttributes.color;let Vt=Wa;se.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Vt=U.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,mt=Nt!==void 0?Nt.length:0,Ve=Xe.get(se),Xt=_.state.lights;if(Re===!0&&(J===!0||R!==D)){const hn=R===D&&se.id===w;Ce.setState(se,R,hn)}let Tt=!1;se.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Xt.state.version||Ve.outputColorSpace!==Ge||j.isBatchedMesh&&Ve.batching===!1||!j.isBatchedMesh&&Ve.batching===!0||j.isBatchedMesh&&Ve.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ve.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ve.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ve.instancingMorph===!1&&j.morphTexture!==null||Ve.envMap!==Pe||se.fog===!0&&Ve.fog!==xe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ce.numPlanes||Ve.numIntersection!==Ce.numIntersection)||Ve.vertexAlphas!==Qe||Ve.vertexTangents!==it||Ve.morphTargets!==Je||Ve.morphNormals!==pt||Ve.morphColors!==Lt||Ve.toneMapping!==Vt||Ve.morphTargetsCount!==mt)&&(Tt=!0):(Tt=!0,Ve.__version=se.version);let xn=Ve.currentProgram;Tt===!0&&(xn=kn(se,q,j));let zi=!1,gn=!1,Ka=!1;const vt=xn.getUniforms(),bn=Ve.uniforms;if(We.useProgram(xn.program)&&(zi=!0,gn=!0,Ka=!0),se.id!==w&&(w=se.id,gn=!0),zi||D!==R){We.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),vt.setValue(F,"projectionMatrix",R.projectionMatrix),vt.setValue(F,"viewMatrix",R.matrixWorldInverse);const tn=vt.map.cameraPosition;tn!==void 0&&tn.setValue(F,Ue.setFromMatrixPosition(R.matrixWorld)),et.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&vt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,gn=!0,Ka=!0)}if(j.isSkinnedMesh){vt.setOptional(F,j,"bindMatrix"),vt.setOptional(F,j,"bindMatrixInverse");const hn=j.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),vt.setValue(F,"boneTexture",hn.boneTexture,st))}j.isBatchedMesh&&(vt.setOptional(F,j,"batchingTexture"),vt.setValue(F,"batchingTexture",j._matricesTexture,st),vt.setOptional(F,j,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",j._indirectTexture,st),vt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",j._colorsTexture,st));const Un=re.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&be.update(j,re,xn),(gn||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,vt.setValue(F,"receiveShadow",j.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(bn.envMap.value=Pe,bn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),gn&&(vt.setValue(F,"toneMappingExposure",U.toneMappingExposure),Ve.needsLights&&Fs(bn,Ka),xe&&se.fog===!0&&Ee.refreshFogUniforms(bn,xe),Ee.refreshMaterialUniforms(bn,se,X,Z,_.state.transmissionRenderTarget[R.id]),Iu.upload(F,sn(Ve),bn,st)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Iu.upload(F,sn(Ve),bn,st),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&vt.setValue(F,"center",j.center),vt.setValue(F,"modelViewMatrix",j.modelViewMatrix),vt.setValue(F,"normalMatrix",j.normalMatrix),vt.setValue(F,"modelMatrix",j.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const hn=se.uniformsGroups;for(let tn=0,Ur=hn.length;tn<Ur;tn++){const Ti=hn[tn];lt.update(Ti,xn),lt.bind(Ti,xn)}}return xn}function Fs(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Zu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,q,re){const se=Xe.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Xe.get(R.texture).__webglTexture=q,Xe.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const re=Xe.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const Ku=F.createFramebuffer();this.setRenderTarget=function(R,q=0,re=0){W=R,I=q,P=re;let se=!0,j=null,xe=!1,Ne=!1;if(R){const Pe=Xe.get(R);if(Pe.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(F.FRAMEBUFFER,null),se=!1;else if(Pe.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(Pe.__hasExternalTextures)st.rebindTextures(R,Xe.get(R.texture).__webglTexture,Xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Pe.__boundDepthTexture!==Je){if(Je!==null&&Xe.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ne=!0);const it=Xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[q])?j=it[q][re]:j=it[q],xe=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?j=Xe.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[re]:j=it,G.copy(R.viewport),ne.copy(R.scissor),ue=R.scissorTest}else G.copy(N).multiplyScalar(X).floor(),ne.copy(Q).multiplyScalar(X).floor(),ue=ye;if(re!==0&&(j=Ku),We.bindFramebuffer(F.FRAMEBUFFER,j)&&se&&We.drawBuffers(R,j),We.viewport(G),We.scissor(ne),We.setScissorTest(ue),xe){const Pe=Xe.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,re)}else if(Ne){const Pe=q;for(let Qe=0;Qe<R.textures.length;Qe++){const it=Xe.get(R.textures[Qe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Qe,it.__webglTexture,re,Pe)}}else if(R!==null&&re!==0){const Pe=Xe.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pe.__webglTexture,re)}w=-1},this.readRenderTargetPixels=function(R,q,re,se,j,xe,Ne,Ge=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){We.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Qe=R.textures[Ge],it=Qe.format,Je=Qe.type;if(!et.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&re>=0&&re<=R.height-j&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ge),F.readPixels(q,re,se,j,ze.convert(it),ze.convert(Je),xe))}finally{const Qe=W!==null?Xe.get(W).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(R,q,re,se,j,xe,Ne,Ge=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe)if(q>=0&&q<=R.width-se&&re>=0&&re<=R.height-j){We.bindFramebuffer(F.FRAMEBUFFER,Pe);const Qe=R.textures[Ge],it=Qe.format,Je=Qe.type;if(!et.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ge),F.readPixels(q,re,se,j,ze.convert(it),ze.convert(Je),0);const Lt=W!==null?Xe.get(W).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,Lt);const Vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await EE(F,Vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(pt),F.deleteSync(Vt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,re=0){const se=Math.pow(2,-re),j=Math.floor(R.image.width*se),xe=Math.floor(R.image.height*se),Ne=q!==null?q.x:0,Ge=q!==null?q.y:0;st.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,Ne,Ge,j,xe),We.unbindTexture()};const Jo=F.createFramebuffer(),Za=F.createFramebuffer();this.copyTextureToTexture=function(R,q,re=null,se=null,j=0,xe=null){xe===null&&(j!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=j,j=0):xe=0);let Ne,Ge,Pe,Qe,it,Je,pt,Lt,Vt;const Nt=R.isCompressedTexture?R.mipmaps[xe]:R.image;if(re!==null)Ne=re.max.x-re.min.x,Ge=re.max.y-re.min.y,Pe=re.isBox3?re.max.z-re.min.z:1,Qe=re.min.x,it=re.min.y,Je=re.isBox3?re.min.z:0;else{const Un=Math.pow(2,-j);Ne=Math.floor(Nt.width*Un),Ge=Math.floor(Nt.height*Un),R.isDataArrayTexture?Pe=Nt.depth:R.isData3DTexture?Pe=Math.floor(Nt.depth*Un):Pe=1,Qe=0,it=0,Je=0}se!==null?(pt=se.x,Lt=se.y,Vt=se.z):(pt=0,Lt=0,Vt=0);const mt=ze.convert(q.format),Ve=ze.convert(q.type);let Xt;q.isData3DTexture?(st.setTexture3D(q,0),Xt=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(st.setTexture2DArray(q,0),Xt=F.TEXTURE_2D_ARRAY):(st.setTexture2D(q,0),Xt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Tt=F.getParameter(F.UNPACK_ROW_LENGTH),xn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),zi=F.getParameter(F.UNPACK_SKIP_PIXELS),gn=F.getParameter(F.UNPACK_SKIP_ROWS),Ka=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,it),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const vt=R.isDataArrayTexture||R.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Un=Xe.get(R),hn=Xe.get(q),tn=Xe.get(Un.__renderTarget),Ur=Xe.get(hn.__renderTarget);We.bindFramebuffer(F.READ_FRAMEBUFFER,tn.__webglFramebuffer),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let Ti=0;Ti<Pe;Ti++)vt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.get(R).__webglTexture,j,Je+Ti),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.get(q).__webglTexture,xe,Vt+Ti)),F.blitFramebuffer(Qe,it,Ne,Ge,pt,Lt,Ne,Ge,F.DEPTH_BUFFER_BIT,F.NEAREST);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Xe.has(R)){const Un=Xe.get(R),hn=Xe.get(q);We.bindFramebuffer(F.READ_FRAMEBUFFER,Jo),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,Za);for(let tn=0;tn<Pe;tn++)vt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,j,Je+tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,j),bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,xe,Vt+tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,xe),j!==0?F.blitFramebuffer(Qe,it,Ne,Ge,pt,Lt,Ne,Ge,F.COLOR_BUFFER_BIT,F.NEAREST):bn?F.copyTexSubImage3D(Xt,xe,pt,Lt,Vt+tn,Qe,it,Ne,Ge):F.copyTexSubImage2D(Xt,xe,pt,Lt,Qe,it,Ne,Ge);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Xt,xe,pt,Lt,Vt,Ne,Ge,Pe,mt,Ve,Nt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Xt,xe,pt,Lt,Vt,Ne,Ge,Pe,mt,Nt.data):F.texSubImage3D(Xt,xe,pt,Lt,Vt,Ne,Ge,Pe,mt,Ve,Nt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,pt,Lt,Ne,Ge,mt,Ve,Nt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,pt,Lt,Nt.width,Nt.height,mt,Nt.data):F.texSubImage2D(F.TEXTURE_2D,xe,pt,Lt,Ne,Ge,mt,Ve,Nt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zi),F.pixelStorei(F.UNPACK_SKIP_ROWS,gn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ka),xe===0&&q.generateMipmaps&&F.generateMipmap(Xt),We.unbindTexture()},this.initRenderTarget=function(R){Xe.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){I=0,P=0,W=null,We.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const k0=({state:s,audioLevel:e=0,onClick:i})=>{const r=te.useRef(null),l=te.useRef(s),u=te.useRef(e);return te.useEffect(()=>{l.current=s},[s]),te.useEffect(()=>{u.current=e},[e]),te.useEffect(()=>{if(!r.current)return;const h=new jE;h.background=new wt(0);const d=new hi(75,window.innerWidth/window.innerHeight,.1,1e3),m=new VR({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(m.domElement);let p=0,g=l.current,v=0;const x=(X,ce,ge)=>X+(ce-X)*ge,M=new ku(1.5,64,64),T=new Ts({color:16777215}),E=new $n(M,T);h.add(E);const y=new Jd(2,2.3,64),_=new Ts({color:16777215,transparent:!0,opacity:.2,side:Si}),C=new $n(y,_);C.rotation.x=Math.PI/2,h.add(C);const L=12,U=new ku(.08,16,16),H=new Ts({color:16777215,transparent:!0,opacity:.6}),I=[];for(let X=0;X<L;X++){const ce=new $n(U,H.clone());h.add(ce),I.push({mesh:ce,angle:Math.PI*2*X/L,radius:3+Math.random()*.5,speed:.001+Math.random()*.002,height:(Math.random()-.5)*.5})}const P=new Qo(3,.6,32,4),W=new Ts({color:16777215,transparent:!0,opacity:0,side:Si,wireframe:!0}),w=new $n(P,W);w.position.z=2.5,h.add(w);const D=new iT(16777215,.5);h.add(D);const G=new nT(16777215,1);G.position.set(5,5,5),h.add(G),d.position.z=8;const ne=new rT,ue=new Dt,ve=X=>{if(!i)return;ue.x=X.clientX/window.innerWidth*2-1,ue.y=-(X.clientY/window.innerHeight)*2+1,ne.setFromCamera(ue,d),ne.intersectObject(E).length>0&&i()};i&&(m.domElement.addEventListener("click",ve),m.domElement.style.cursor="pointer");const he=X=>-(Math.cos(Math.PI*X)-1)/2,z=()=>{requestAnimationFrame(z),p+=.016;const X=u.current||0;if(v=x(v,X,.15),g!==l.current&&(g=l.current),g==="inactive"){const ce=.995+.005*he((Math.sin(p*.15)+1)/2);E.scale.setScalar(ce),E.rotation.y=0,E.rotation.x=0,T.color.setHex(13882323),_.opacity=.05,C.scale.setScalar(1),I.forEach(ge=>{ge.mesh.visible=!1}),W.opacity=0}else if(g==="idle"){const ce=.98+.02*he((Math.sin(p*.3)+1)/2);E.scale.setScalar(ce),E.rotation.y+=.002,E.rotation.x+=.001,T.color.setHex(13421772),_.opacity=.18+Math.sin(p*.5)*.02,C.scale.setScalar(1+Math.sin(p*.4)*.01),I.forEach((ge,N)=>{if(N<6){ge.mesh.visible=!0,ge.angle+=ge.speed*.3;const Q=Math.sin(p*.3+N)*.05;ge.mesh.position.set(Math.cos(ge.angle)*ge.radius+Q,ge.height+Math.sin(p*.2+N)*.1,Math.sin(ge.angle)*ge.radius+Q),ge.mesh.material.opacity=.3}else ge.mesh.visible=!1}),W.opacity=0}else if(g==="listening"){const ce=v,ge=1+Math.sin(p*3)*.02,N=ce*.15;E.scale.setScalar(ge+N),E.rotation.y+=.003+ce*.005,T.color.setHex(16777215);const Q=6+ce*4,ye=.15+ce*.1,Me=Math.sin(p*Q)*ye;C.scale.setScalar(1.2-Math.abs(Me)),_.opacity=.3+Math.abs(Me)*.2+ce*.15,I.forEach((Re,J)=>{if(J<8){Re.mesh.visible=!0,Re.angle+=Re.speed*(2+ce*3);const ae=Math.sin(p*2)*(.3+ce*.2);Re.mesh.position.set(Math.cos(Re.angle)*(Re.radius*.8-ae),Re.height*.5,Math.sin(Re.angle)*(Re.radius*.8-ae)),Re.mesh.material.opacity=.6+ce*.2}else Re.mesh.visible=!1}),W.opacity=0}else if(g==="thinking"){const ce=1+Math.sin(p*2)*.02;E.scale.setScalar(ce),E.rotation.y+=.004,E.rotation.x+=.002;const ge=(Math.sin(p*.5)+1)/2,N=new wt(6710886),Q=new wt(14540253);T.color.lerpColors(N,Q,ge);const ye=p*.4%(Math.PI*2);_.opacity=.25,C.rotation.z=ye,C.scale.setScalar(1.1),I.forEach((Me,Re)=>{Me.mesh.visible=!0,Me.angle+=Me.speed;const J=Math.sin(p*.8+Re*.5)*.8,ae=Re%2===0?Math.sin(p*1.2)*.1:0;Me.mesh.position.set(Math.cos(Me.angle)*(Me.radius+ae),J,Math.sin(Me.angle)*(Me.radius+ae)),Me.mesh.material.opacity=.5}),W.opacity=0}else if(g==="speaking"){const ce=v,ge=1+Math.sin(p*8)*.02,N=ce*.12;E.scale.setScalar(ge+N),E.rotation.y+=.002,T.color.setHex(16777215);const Q=1+Math.sin(p*4)*.03,ye=ce*.08;C.scale.setScalar(Q+ye),_.opacity=.35+ce*.15;const Me=1+N*1.2;I.forEach((ae,Ue)=>{Ue<8?(ae.mesh.visible=!0,ae.mesh.position.set(Math.cos(ae.angle)*ae.radius*Me,ae.height,Math.sin(ae.angle)*ae.radius*Me),ae.mesh.material.opacity=.4+ce*.3):ae.mesh.visible=!1});const Re=.4+ce*.4;W.opacity=Re;const J=P.attributes.position;for(let ae=0;ae<J.count;ae++){const Ue=J.getX(ae),Be=.3*ce+.05,ke=Math.sin(Ue*2+p*4)*Be;J.setY(ae,ke)}J.needsUpdate=!0}m.render(h,d)};z();const Z=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Z),()=>{window.removeEventListener("resize",Z),i&&m.domElement.removeEventListener("click",ve),r.current?.removeChild(m.domElement),M.dispose(),y.dispose(),U.dispose(),P.dispose(),T.dispose(),_.dispose(),H.dispose(),W.dispose(),I.forEach(X=>{X.mesh.material.dispose()}),m.dispose()}},[]),nt.jsx("div",{ref:r})};function kR(){const[s,e]=te.useState("inactive"),[i,r]=te.useState(!1),l=te.useRef(null),u=te.useRef(!1),h=h0({voice:"shimmer",onStateChange:v=>{if(console.log("🔄 Realtime state changed:",v),!u.current){console.log("⏸️ Assistant not activated yet, ignoring state change");return}switch(v){case"disconnected":case"connected":e("idle");break;case"connecting":e("idle");break;case"idle":e("idle");break;case"listening":e("listening");break;case"thinking":e("thinking");break;case"speaking":e("speaking");break;case"error":e("idle");break}}});te.useEffect(()=>{l.current=h},[h]);const d=f0({onAudioChunk:v=>{const x=l.current;x&&x.isConnected&&x.sendAudio(v)},chunkIntervalMs:100,sampleRate:24e3});te.useEffect(()=>()=>{i&&(d.stopStreaming(),h.disconnect())},[]);const m=async()=>{if(s==="inactive"){console.log("▶️ Activating assistant...");try{u.current=!0,console.log("📡 Connecting to OpenAI Realtime..."),await h.connect(),console.log("✅ Connected to Realtime API"),await d.startStreaming(),console.log("✅ Microphone stream started"),e("idle"),r(!0)}catch(v){console.error("❌ Error activating assistant:",v),alert("Error al iniciar el asistente: "+(v instanceof Error?v.message:"Unknown error")),e("inactive"),r(!1),u.current=!1}}},p=async()=>{i?(console.log("⏹️ Stopping assistant..."),d.stopStreaming(),h.disconnect(),e("inactive"),r(!1),u.current=!1):await m()},g=s==="listening"?d.audioLevel:s==="speaking"?h.outputAudioLevel:0;return nt.jsxs(nt.Fragment,{children:[nt.jsx(k0,{state:s,audioLevel:g,onClick:s==="inactive"?m:void 0}),s==="inactive"&&nt.jsx("div",{className:"welcome-message",children:nt.jsx("p",{children:"Haz click en la bola para empezar"})}),i&&nt.jsxs("div",{className:"controls",children:[nt.jsx("button",{className:`control-btn ${i?"active":""}`,onClick:p,disabled:h.state==="error",style:{marginBottom:"20px",width:"240px",fontSize:"16px",backgroundColor:h.state==="error"?"#999":i?"#4CAF50":"#f44336"},children:h.state==="error"?"❌ Error de conexión":i?"⏹️ Detener Asistente":"▶️ Iniciar Asistente"}),nt.jsxs("div",{style:{marginBottom:"20px"},children:[nt.jsxs("p",{style:{color:"#999",fontSize:"14px",marginBottom:"5px"},children:["Estado Realtime: ",nt.jsx("strong",{children:h.state})]}),nt.jsxs("p",{style:{color:"#999",fontSize:"14px",marginBottom:"5px"},children:["Micrófono: ",d.isStreaming?"🎤 Activo":"⏸️ Inactivo",d.isStreaming&&d.audioLevel>.01&&nt.jsxs("span",{style:{marginLeft:"10px"},children:["🔊 ",(d.audioLevel*100).toFixed(0),"%"]})]}),nt.jsxs("p",{style:{color:"#999",fontSize:"14px"},children:["Estado visual: ",nt.jsx("strong",{children:s})]})]}),h.error&&nt.jsxs("div",{style:{marginBottom:"20px",padding:"10px",backgroundColor:"#fee",borderRadius:"5px"},children:[nt.jsxs("p",{style:{color:"#f44336",fontSize:"14px",marginBottom:"10px",fontWeight:"bold"},children:["❌ Error: ",h.error]}),nt.jsx("p",{style:{color:"#666",fontSize:"12px"},children:"💡 Asegúrate de que el servidor relay esté corriendo en http://localhost:8080"})]})]})]})}function XR(){const[s,e]=te.useState("idle"),[i,r]=te.useState(!1),l=te.useRef(null),u=h0({voice:"shimmer",onStateChange:p=>{switch(console.log("🔄 Realtime state changed:",p),p){case"disconnected":case"connected":e("idle");break;case"connecting":e("idle");break;case"idle":e("idle");break;case"listening":e("listening");break;case"thinking":e("thinking");break;case"speaking":e("speaking");break;case"error":e("idle");break}}});te.useEffect(()=>{l.current=u},[u]);const h=f0({onAudioChunk:p=>{const g=l.current;g&&g.isConnected&&g.sendAudio(p)},chunkIntervalMs:100,sampleRate:24e3});te.useEffect(()=>()=>{i&&(h.stopStreaming(),u.disconnect())},[]);const d=async()=>{if(i)console.log("⏹️ Stopping assistant..."),h.stopStreaming(),u.disconnect(),e("idle"),r(!1);else{console.log("▶️ Starting assistant...");try{console.log("📡 Connecting to OpenAI Realtime..."),await u.connect(),console.log("✅ Connected to Realtime API"),await h.startStreaming(),console.log("✅ Microphone stream started"),e("idle"),r(!0)}catch(p){console.error("❌ Error starting assistant:",p),alert("Error al iniciar el asistente: "+(p instanceof Error?p.message:"Unknown error")),e("idle"),r(!1)}}},m=s==="listening"?h.audioLevel:s==="speaking"?u.outputAudioLevel:0;return nt.jsxs(nt.Fragment,{children:[nt.jsx(k0,{state:s,audioLevel:m}),nt.jsxs("div",{className:"controls",children:[nt.jsx("button",{className:`control-btn ${i?"active":""}`,onClick:d,disabled:u.state==="error",style:{marginBottom:"20px",width:"240px",fontSize:"16px",backgroundColor:u.state==="error"?"#999":i?"#4CAF50":"#f44336"},children:u.state==="error"?"❌ Error de conexión":i?"⏹️ Detener Asistente":"▶️ Iniciar Asistente"}),i&&nt.jsxs("div",{style:{marginBottom:"20px"},children:[nt.jsxs("p",{style:{color:"#999",fontSize:"14px",marginBottom:"5px"},children:["Estado Realtime: ",nt.jsx("strong",{children:u.state})]}),nt.jsxs("p",{style:{color:"#999",fontSize:"14px",marginBottom:"5px"},children:["Micrófono: ",h.isStreaming?"🎤 Activo":"⏸️ Inactivo",h.isStreaming&&h.audioLevel>.01&&nt.jsxs("span",{style:{marginLeft:"10px"},children:["🔊 ",(h.audioLevel*100).toFixed(0),"%"]})]}),nt.jsxs("p",{style:{color:"#999",fontSize:"14px"},children:["Estado visual: ",nt.jsx("strong",{children:s})]})]}),u.error&&nt.jsxs("div",{style:{marginBottom:"20px",padding:"10px",backgroundColor:"#fee",borderRadius:"5px"},children:[nt.jsxs("p",{style:{color:"#f44336",fontSize:"14px",marginBottom:"10px",fontWeight:"bold"},children:["❌ Error: ",u.error]}),nt.jsx("p",{style:{color:"#666",fontSize:"12px"},children:"💡 Asegúrate de que el servidor relay esté corriendo en http://localhost:8080"})]}),nt.jsxs("div",{style:{borderTop:"1px solid #ccc",paddingTop:"20px",marginTop:"10px"},children:[nt.jsx("p",{style:{color:"#999",fontSize:"12px",marginBottom:"10px"},children:"Controles manuales (para pruebas):"}),nt.jsx("button",{className:`control-btn ${s==="idle"?"active":""}`,onClick:()=>e("idle"),children:"Idle"}),nt.jsx("button",{className:`control-btn ${s==="listening"?"active":""}`,onClick:()=>e("listening"),children:"Listening"}),nt.jsx("button",{className:`control-btn ${s==="thinking"?"active":""}`,onClick:()=>e("thinking"),children:"Thinking"}),nt.jsx("button",{className:`control-btn ${s==="speaking"?"active":""}`,onClick:()=>e("speaking"),children:"Speaking"})]}),nt.jsxs("div",{style:{borderTop:"1px solid #ccc",paddingTop:"20px",marginTop:"20px"},children:[nt.jsx("p",{style:{color:"#666",fontSize:"11px",textAlign:"center",lineHeight:"1.5"},children:"⚠️ Servidor relay WebSocket: cd server && npm install && npm start"}),nt.jsx("p",{style:{color:"#666",fontSize:"11px",textAlign:"center",lineHeight:"1.5",marginTop:"5px"},children:"🔑 Configura OPENAI_API_KEY en server/.env"}),nt.jsx("p",{style:{color:"#666",fontSize:"11px",textAlign:"center",lineHeight:"1.5",marginTop:"5px"},children:"🤖 Modelo: gpt-realtime-mini-2025-10-06 (con Server VAD)"})]})]})]})}function WR(){return nt.jsx(vM,{children:nt.jsxs(Zy,{children:[nt.jsx(kh,{path:"/",element:nt.jsx(kR,{})}),nt.jsx(kh,{path:"/debug",element:nt.jsx(XR,{})})]})})}ay.createRoot(document.getElementById("root")).render(nt.jsx(te.StrictMode,{children:nt.jsx(WR,{})}));
