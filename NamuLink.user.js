// ==UserScript==
// @name         NamuLink
// @encoding     utf-8
// @namespace    https://github.com/List-KR/NamuLink
// @homepageURL  https://github.com/List-KR/NamuLink
// @supportURL   https://github.com/List-KR/NamuLink/issues
// @updateURL    https://cdn.jsdelivr.net/gh/List-KR/NamuLink@latest/NamuLink.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/List-KR/NamuLink@latest/NamuLink.user.js
// @license      MIT
//
// @version      3.1.2
// @author       PiQuark6046 and contributors
//
// @match        https://namu.wiki/*
//
// @description        NamuLink blocks the license-abused PowerLink advertisement on NamuWiki.
// @description:ko     NamuLink는 나무위키에 있는 라이선스를 위반한 파워링크 광고를 차단합니다.
//
// @grant        unsafeWindow
// @run-at       document-start
// @inject-into  page
// ==/UserScript==
// Used libraries:
// - Superstruct https://github.com/ianstormtaylor/superstruct
(()=>{var _=Object.defineProperty;var W=(e,n)=>{for(var t in n)_(e,t,{get:n[t],enumerable:!0})};var b={};W(b,{Struct:()=>f,StructError:()=>k,any:()=>ee,array:()=>ne,assert:()=>T,assign:()=>U,bigint:()=>te,boolean:()=>re,coerce:()=>S,create:()=>A,date:()=>ie,defaulted:()=>we,define:()=>p,deprecated:()=>B,dynamic:()=>G,empty:()=>$e,enums:()=>oe,func:()=>ce,instance:()=>se,integer:()=>fe,intersection:()=>ae,is:()=>j,lazy:()=>K,literal:()=>de,map:()=>ue,mask:()=>C,max:()=>ke,min:()=>Le,never:()=>M,nonempty:()=>xe,nullable:()=>le,number:()=>pe,object:()=>g,omit:()=>Q,optional:()=>O,partial:()=>X,pattern:()=>je,pick:()=>Y,record:()=>ye,refine:()=>h,regexp:()=>me,set:()=>he,size:()=>Me,string:()=>v,struct:()=>Z,trimmed:()=>ge,tuple:()=>be,type:()=>H,union:()=>Ee,unknown:()=>P,validate:()=>E});var k=class extends TypeError{constructor(n,t){let r,{message:i,explanation:o,...s}=n,{path:c}=n,d=c.length===0?i:`At path: ${c.join(".")} -- ${i}`;super(o??d),o!=null&&(this.cause=d),Object.assign(this,s),this.name=this.constructor.name,this.failures=()=>r??(r=[n,...t()])}};function R(e){return m(e)&&typeof e[Symbol.iterator]=="function"}function m(e){return typeof e=="object"&&e!=null}function N(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let n=Object.getPrototypeOf(e);return n===null||n===Object.prototype}function u(e){return typeof e=="symbol"?e.toString():typeof e=="string"?JSON.stringify(e):`${e}`}function V(e){let{done:n,value:t}=e.next();return n?void 0:t}function J(e,n,t,r){if(e===!0)return;e===!1?e={}:typeof e=="string"&&(e={message:e});let{path:i,branch:o}=n,{type:s}=t,{refinement:c,message:d=`Expected a value of type \`${s}\`${c?` with refinement \`${c}\``:""}, but received: \`${u(r)}\``}=e;return{value:r,type:s,refinement:c,key:i[i.length-1],path:i,branch:o,...e,message:d}}function*L(e,n,t,r){R(e)||(e=[e]);for(let i of e){let o=J(i,n,t,r);o&&(yield o)}}function*x(e,n,t={}){let{path:r=[],branch:i=[e],coerce:o=!1,mask:s=!1}=t,c={path:r,branch:i};if(o&&(e=n.coercer(e,c),s&&n.type!=="type"&&m(n.schema)&&m(e)&&!Array.isArray(e)))for(let a in e)n.schema[a]===void 0&&delete e[a];let d="valid";for(let a of n.validator(e,c))a.explanation=t.message,d="not_valid",yield[a,void 0];for(let[a,y,F]of n.entries(e,c)){let D=x(y,F,{path:a===void 0?r:[...r,a],branch:a===void 0?i:[...i,y],coerce:o,mask:s,message:t.message});for(let $ of D)$[0]?(d=$[0].refinement!=null?"not_refined":"not_valid",yield[$[0],void 0]):o&&(y=$[1],a===void 0?e=y:e instanceof Map?e.set(a,y):e instanceof Set?e.add(y):m(e)&&(y!==void 0||a in e)&&(e[a]=y))}if(d!=="not_valid")for(let a of n.refiner(e,c))a.explanation=t.message,d="not_refined",yield[a,void 0];d==="valid"&&(yield[void 0,e])}var f=class{constructor(n){let{type:t,schema:r,validator:i,refiner:o,coercer:s=d=>d,entries:c=function*(){}}=n;this.type=t,this.schema=r,this.entries=c,this.coercer=s,i?this.validator=(d,a)=>{let y=i(d,a);return L(y,a,this,d)}:this.validator=()=>[],o?this.refiner=(d,a)=>{let y=o(d,a);return L(y,a,this,d)}:this.refiner=()=>[]}assert(n,t){return T(n,this,t)}create(n,t){return A(n,this,t)}is(n){return j(n,this)}mask(n,t){return C(n,this,t)}validate(n,t={}){return E(n,this,t)}};function T(e,n,t){let r=E(e,n,{message:t});if(r[0])throw r[0]}function A(e,n,t){let r=E(e,n,{coerce:!0,message:t});if(r[0])throw r[0];return r[1]}function C(e,n,t){let r=E(e,n,{coerce:!0,mask:!0,message:t});if(r[0])throw r[0];return r[1]}function j(e,n){return!E(e,n)[0]}function E(e,n,t={}){let r=x(e,n,t),i=V(r);return i[0]?[new k(i[0],function*(){for(let s of r)s[0]&&(yield s[0])}),void 0]:[void 0,i[1]]}function U(...e){let n=e[0].type==="type",t=e.map(i=>i.schema),r=Object.assign({},...t);return n?H(r):g(r)}function p(e,n){return new f({type:e,schema:null,validator:n})}function B(e,n){return new f({...e,refiner:(t,r)=>t===void 0||e.refiner(t,r),validator(t,r){return t===void 0?!0:(n(t,r),e.validator(t,r))}})}function G(e){return new f({type:"dynamic",schema:null,*entries(n,t){yield*e(n,t).entries(n,t)},validator(n,t){return e(n,t).validator(n,t)},coercer(n,t){return e(n,t).coercer(n,t)},refiner(n,t){return e(n,t).refiner(n,t)}})}function K(e){let n;return new f({type:"lazy",schema:null,*entries(t,r){n??(n=e()),yield*n.entries(t,r)},validator(t,r){return n??(n=e()),n.validator(t,r)},coercer(t,r){return n??(n=e()),n.coercer(t,r)},refiner(t,r){return n??(n=e()),n.refiner(t,r)}})}function Q(e,n){let{schema:t}=e,r={...t};for(let i of n)delete r[i];switch(e.type){case"type":return H(r);default:return g(r)}}function X(e){let n=e instanceof f?{...e.schema}:{...e};for(let t in n)n[t]=O(n[t]);return g(n)}function Y(e,n){let{schema:t}=e,r={};for(let i of n)r[i]=t[i];return g(r)}function Z(e,n){return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),p(e,n)}function ee(){return p("any",()=>!0)}function ne(e){return new f({type:"array",schema:e,*entries(n){if(e&&Array.isArray(n))for(let[t,r]of n.entries())yield[t,r,e]},coercer(n){return Array.isArray(n)?n.slice():n},validator(n){return Array.isArray(n)||`Expected an array value, but received: ${u(n)}`}})}function te(){return p("bigint",e=>typeof e=="bigint")}function re(){return p("boolean",e=>typeof e=="boolean")}function ie(){return p("date",e=>e instanceof Date&&!isNaN(e.getTime())||`Expected a valid \`Date\` object, but received: ${u(e)}`)}function oe(e){let n={},t=e.map(r=>u(r)).join();for(let r of e)n[r]=r;return new f({type:"enums",schema:n,validator(r){return e.includes(r)||`Expected one of \`${t}\`, but received: ${u(r)}`}})}function ce(){return p("func",e=>typeof e=="function"||`Expected a function, but received: ${u(e)}`)}function se(e){return p("instance",n=>n instanceof e||`Expected a \`${e.name}\` instance, but received: ${u(n)}`)}function fe(){return p("integer",e=>typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${u(e)}`)}function ae(e){return new f({type:"intersection",schema:null,*entries(n,t){for(let r of e)yield*r.entries(n,t)},*validator(n,t){for(let r of e)yield*r.validator(n,t)},*refiner(n,t){for(let r of e)yield*r.refiner(n,t)}})}function de(e){let n=u(e),t=typeof e;return new f({type:"literal",schema:t==="string"||t==="number"||t==="boolean"?e:null,validator(r){return r===e||`Expected the literal \`${n}\`, but received: ${u(r)}`}})}function ue(e,n){return new f({type:"map",schema:null,*entries(t){if(e&&n&&t instanceof Map)for(let[r,i]of t.entries())yield[r,r,e],yield[r,i,n]},coercer(t){return t instanceof Map?new Map(t):t},validator(t){return t instanceof Map||`Expected a \`Map\` object, but received: ${u(t)}`}})}function M(){return p("never",()=>!1)}function le(e){return new f({...e,validator:(n,t)=>n===null||e.validator(n,t),refiner:(n,t)=>n===null||e.refiner(n,t)})}function pe(){return p("number",e=>typeof e=="number"&&!isNaN(e)||`Expected a number, but received: ${u(e)}`)}function g(e){let n=e?Object.keys(e):[],t=M();return new f({type:"object",schema:e||null,*entries(r){if(e&&m(r)){let i=new Set(Object.keys(r));for(let o of n)i.delete(o),yield[o,r[o],e[o]];for(let o of i)yield[o,r[o],t]}},validator(r){return m(r)||`Expected an object, but received: ${u(r)}`},coercer(r){return m(r)?{...r}:r}})}function O(e){return new f({...e,validator:(n,t)=>n===void 0||e.validator(n,t),refiner:(n,t)=>n===void 0||e.refiner(n,t)})}function ye(e,n){return new f({type:"record",schema:null,*entries(t){if(m(t))for(let r in t){let i=t[r];yield[r,r,e],yield[r,i,n]}},validator(t){return m(t)||`Expected an object, but received: ${u(t)}`}})}function me(){return p("regexp",e=>e instanceof RegExp)}function he(e){return new f({type:"set",schema:null,*entries(n){if(e&&n instanceof Set)for(let t of n)yield[t,t,e]},coercer(n){return n instanceof Set?new Set(n):n},validator(n){return n instanceof Set||`Expected a \`Set\` object, but received: ${u(n)}`}})}function v(){return p("string",e=>typeof e=="string"||`Expected a string, but received: ${u(e)}`)}function be(e){let n=M();return new f({type:"tuple",schema:null,*entries(t){if(Array.isArray(t)){let r=Math.max(e.length,t.length);for(let i=0;i<r;i++)yield[i,t[i],e[i]||n]}},validator(t){return Array.isArray(t)||`Expected an array, but received: ${u(t)}`}})}function H(e){let n=Object.keys(e);return new f({type:"type",schema:e,*entries(t){if(m(t))for(let r of n)yield[r,t[r],e[r]]},validator(t){return m(t)||`Expected an object, but received: ${u(t)}`},coercer(t){return m(t)?{...t}:t}})}function Ee(e){let n=e.map(t=>t.type).join(" | ");return new f({type:"union",schema:null,coercer(t){for(let r of e){let[i,o]=r.validate(t,{coerce:!0});if(!i)return o}return t},validator(t,r){let i=[];for(let o of e){let[...s]=x(t,o,r),[c]=s;if(c[0])for(let[d]of s)d&&i.push(d);else return[]}return[`Expected the value to satisfy a union of \`${n}\`, but received: ${u(t)}`,...i]}})}function P(){return p("unknown",()=>!0)}function S(e,n,t){return new f({...e,coercer:(r,i)=>j(r,n)?e.coercer(t(r,i),i):e.coercer(r,i)})}function we(e,n,t={}){return S(e,P(),r=>{let i=typeof n=="function"?n():n;if(r===void 0)return i;if(!t.strict&&N(r)&&N(i)){let o={...r},s=!1;for(let c in i)o[c]===void 0&&(o[c]=i[c],s=!0);if(s)return o}return r})}function ge(e){return S(e,v(),n=>n.trim())}function $e(e){return h(e,"empty",n=>{let t=z(n);return t===0||`Expected an empty ${e.type} but received one with a size of \`${t}\``})}function z(e){return e instanceof Map||e instanceof Set?e.size:e.length}function ke(e,n,t={}){let{exclusive:r}=t;return h(e,"max",i=>r?i<n:i<=n||`Expected a ${e.type} less than ${r?"":"or equal to "}${n} but received \`${i}\``)}function Le(e,n,t={}){let{exclusive:r}=t;return h(e,"min",i=>r?i>n:i>=n||`Expected a ${e.type} greater than ${r?"":"or equal to "}${n} but received \`${i}\``)}function xe(e){return h(e,"nonempty",n=>z(n)>0||`Expected a nonempty ${e.type} but received an empty one`)}function je(e,n){return h(e,"pattern",t=>n.test(t)||`Expected a ${e.type} matching \`/${n.source}/\` but received "${t}"`)}function Me(e,n,t=n){let r=`Expected a ${e.type}`,i=n===t?`of \`${n}\``:`between \`${n}\` and \`${t}\``;return h(e,"size",o=>{if(typeof o=="number"||o instanceof Date)return n<=o&&o<=t||`${r} ${i} but received \`${o}\``;if(o instanceof Map||o instanceof Set){let{size:s}=o;return n<=s&&s<=t||`${r} with a size ${i} but received one with a size of \`${s}\``}else{let{length:s}=o;return n<=s&&s<=t||`${r} with a length ${i} but received one with a length of \`${s}\``}})}function h(e,n,t){return new f({...e,*refiner(r,i){yield*e.refiner(r,i);let o=t(r,i),s=L(o,i,e,r);for(let c of s)yield{...c,refinement:n}}})}var l=typeof unsafeWindow<"u"?unsafeWindow:window,He=new Event("namuwikinavigationwithadvert"),I=new Event("namuwikinavigation"),Se=new Event("namuwikifristvisit"),Ne=e=>{if(Array.isArray(e)){if(e.toString().includes("//adcr.naver.com/adcr?"))return!0}else for(let n of Object.keys(e))try{if(typeof e[n]=="string"&&e[n].includes("//adcr.naver.com/adcr?"))return!0}catch{}return!1},Te=e=>!Number.isNaN(Number(e)),Ae=b.object({enable_ads:b.define("IsFakeNumber",Te)}),Ce=e=>typeof e[0]<"u"&&typeof e[0]=="object"&&b.validate(e,Ae)&&Ne(e[0]);l.Object.defineProperty=new Proxy(l.Object.defineProperty,{apply(e,n,t){Ce(t)?console.debug("[NamuLink:index]: Object.defineProperty:",[e,n,t]):Reflect.apply(e,n,t)}});l.TextDecoder.prototype.decode=new Proxy(l.TextDecoder.prototype.decode,{apply(e,n,t){let r=Reflect.apply(e,n,t);return r.includes("//adcr.naver.com/adcr?")?(console.debug("[NamuLink:index]: TextDecoder.prototype.decode:",[e,n,t]),l.dispatchEvent(I),l.dispatchEvent(He),new Error):((r==="enable_ads"||decodeURIComponent(location.href).includes(r))&&l.dispatchEvent(I),r)}});l.Array.prototype.push=new Proxy(l.Array.prototype.push,{apply(e,n,t){t.toString().includes("//adcr.naver.com/adcr?")?(console.debug("[NamuLink:index]: Array.prototype.push:",[e,n,t]),l.dispatchEvent(Se)):Reflect.apply(e,n,t)}});var w=[],Oe=e=>{w.push(...e),e.forEach(n=>{n.style.setProperty("display","none","important")})},ve=()=>{console.debug("[NamuLink:index]: ShowElements:",w),w=w.filter(e=>e.parentElement!==null),w.forEach(e=>{e.style.removeProperty("display")}),w=[]},q=()=>{let e=Array.from(l.document.querySelectorAll('article div:not([class*=" "]):has(h1)~ div * ~ div[class]'));e.push(...Array.from(l.document.querySelectorAll('article div:not([class*=" "]):has(h1) ~ *')));let n=e.filter(i=>i instanceof HTMLElement);var t=[];let r=[];t=n.filter(i=>i.innerText.length<25),t=t.filter(i=>Array.from(i.querySelectorAll("*")).filter(c=>c instanceof HTMLElement).some(c=>Number(getComputedStyle(c).getPropertyValue("margin-bottom").replace(/px$/,""))>=4)),t=t.filter(i=>Array.from(i.querySelectorAll("*")).filter(s=>s instanceof HTMLIFrameElement).length===0),r.push(...t.filter(i=>Array.from(i.querySelectorAll("*")).filter(c=>c instanceof HTMLElement).filter(c=>getComputedStyle(c).getPropertyValue("animation-iteration-count")==="infinite").length>=6)),t=t.filter(i=>Array.from(i.querySelectorAll("*")).filter(c=>c instanceof HTMLElement).some(c=>Number(getComputedStyle(c).getPropertyValue("margin-bottom").replace(/px$/,""))>=10)),r.push(...t.filter(i=>Array.from(i.querySelectorAll("*")).filter(c=>c instanceof HTMLElement).every(c=>Number(getComputedStyle(c).getPropertyValue("margin-left").replace(/px$/,""))<=10))),console.debug("[NamuLink:index]: HideLeftoverElement:",r),Oe(r)};l.addEventListener("namuwikinavigationwithadvert",q);l.addEventListener("namuwikifristvisit",q);l.addEventListener("namuwikinavigation",ve);})();
