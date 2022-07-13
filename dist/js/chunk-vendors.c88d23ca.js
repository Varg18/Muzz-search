(self["webpackChunkmydiplom"]=self["webpackChunkmydiplom"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return _},Mn:function(){return g},X3:function(){return F},ZR:function(){return w},b$:function(){return p},d:function(){return f},eu:function(){return y},hl:function(){return v},m9:function(){return N},ne:function(){return $},pd:function(){return A},ru:function(){return d},tV:function(){return l},uI:function(){return h},vZ:function(){return S},w1:function(){return m},xO:function(){return I},xb:function(){return T},z$:function(){return u},zd:function(){return x}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,i=0;while(n<t.length){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const e=t[s],r=s+1<t.length,o=r?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],r=s<t.length,o=r?n[t.charAt(s)]:0;++s;const a=s<t.length,l=a?n[t.charAt(s)]:64;++s;const c=s<t.length,u=c?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==l||null==u)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==l){const t=o<<4&240|l>>2;if(i.push(t),64!==u){const t=l<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return r.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},l=function(t){try{return r.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function p(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){return u().indexOf("Electron/")>=0}function m(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function v(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=b,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?k(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new w(i,o,n);return a}}function k(t,e){return t.replace(C,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function S(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(E(n)&&E(r)){if(!S(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function E(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function x(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function A(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){const n=new O(t,e);return n.subscribe.bind(n)}class O{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=D(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=L),void 0===i.error&&(i.error=L),void 0===i.complete&&(i.complete=L);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function D(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){return new Promise(((n,i)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;i(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}}))}class M{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e){return new P(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new V(this._db.createObjectStore(t,e))}close(){this._db.close()}}class P{constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}}))}objectStore(t){return new V(this._transaction.objectStore(t))}}class V{constructor(t){this._store=t}index(t){return new B(this._store.index(t))}createIndex(t,e,n){return new B(this._store.createIndex(t,e,n))}get(t){const e=this._store.get(t);return R(e,"Error reading from IndexedDB")}put(t,e){const n=this._store.put(t,e);return R(n,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return R(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return R(t,"Error clearing IndexedDB object store")}}class B{constructor(t){this._index=t}get(t){const e=this._index.get(t);return R(e,"Error reading from IndexedDB")}}function F(t,e,n){return new Promise(((i,s)=>{try{const r=indexedDB.open(t,e);r.onsuccess=t=>{i(new M(t.target.result))},r.onerror=t=>{var e;s(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)},r.onupgradeneeded=t=>{n(new M(r.result),t.oldVersion,t.newVersion,new P(r.transaction))}}catch(r){s(`Error opening indexedDB: ${r.message}`)}}))}},1001:function(t,e,n){"use strict";function i(t,e,n,i,s,r,o,a){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=a?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,{Z:function(){return i}})},9662:function(t,e,n){var i=n(7854),s=n(614),r=n(6330),o=i.TypeError;t.exports=function(t){if(s(t))return t;throw o(r(t)+" is not a function")}},6077:function(t,e,n){var i=n(7854),s=n(614),r=i.String,o=i.TypeError;t.exports=function(t){if("object"==typeof t||s(t))return t;throw o("Can't set "+r(t)+" as a prototype")}},9670:function(t,e,n){var i=n(7854),s=n(111),r=i.String,o=i.TypeError;t.exports=function(t){if(s(t))return t;throw o(r(t)+" is not an object")}},1318:function(t,e,n){var i=n(5656),s=n(1400),r=n(6244),o=function(t){return function(e,n,o){var a,l=i(e),c=r(l),u=s(o,c);if(t&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var i=n(1702),s=i({}.toString),r=i("".slice);t.exports=function(t){return r(s(t),8,-1)}},648:function(t,e,n){var i=n(7854),s=n(1694),r=n(614),o=n(4326),a=n(5112),l=a("toStringTag"),c=i.Object,u="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=s?o:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=c(t),l))?n:u?o(e):"Object"==(i=o(e))&&r(e.callee)?"Arguments":i}},7741:function(t,e,n){var i=n(1702),s=i("".replace),r=function(t){return String(Error(t).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(r);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=s(t,o,"");return t}},9920:function(t,e,n){var i=n(2597),s=n(3887),r=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=s(e),l=o.f,c=r.f,u=0;u<a.length;u++){var h=a[u];i(t,h)||n&&i(n,h)||l(t,h,c(e,h))}}},8880:function(t,e,n){var i=n(9781),s=n(3070),r=n(9114);t.exports=i?function(t,e,n){return s.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),s=n(111),r=i.document,o=s(r)&&s(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,s,r=n(7854),o=n(8113),a=r.process,l=r.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=u.split("."),s=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!s&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(s=+i[1]))),t.exports=s},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var i=n(7293),s=n(9114);t.exports=!i((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",s(1,7)),7!==t.stack)}))},2109:function(t,e,n){var i=n(7854),s=n(1236).f,r=n(8880),o=n(1320),a=n(3505),l=n(9920),c=n(4705);t.exports=function(t,e){var n,u,h,d,p,f,m=t.target,g=t.global,v=t.stat;if(u=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in e){if(p=e[h],t.noTargetGet?(f=s(u,h),d=f&&f.value):d=u[h],n=c(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;l(p,d)}(t.sham||d&&d.sham)&&r(p,"sham",!0),o(u,h,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var i=n(4374),s=Function.prototype,r=s.apply,o=s.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),s=Function.prototype.call;t.exports=i?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(t,e,n){var i=n(9781),s=n(2597),r=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=s(r,"name"),l=a&&"something"===function(){}.name,c=a&&(!i||i&&o(r,"name").configurable);t.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1702:function(t,e,n){var i=n(4374),s=Function.prototype,r=s.bind,o=s.call,a=i&&r.bind(o,o);t.exports=i?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),s=n(614),r=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?r(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),s=n(7908),r=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return r(s(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var i=n(9781),s=n(7293),r=n(317);t.exports=!i&&!s((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(7854),s=n(1702),r=n(7293),o=n(4326),a=i.Object,l=s("".split);t.exports=r((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?l(t,""):a(t)}:a},9587:function(t,e,n){var i=n(614),s=n(111),r=n(7674);t.exports=function(t,e,n){var o,a;return r&&i(o=e.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&r(t,a),t}},2788:function(t,e,n){var i=n(1702),s=n(614),r=n(5465),o=i(Function.toString);s(r.inspectSource)||(r.inspectSource=function(t){return o(t)}),t.exports=r.inspectSource},8340:function(t,e,n){var i=n(111),s=n(8880);t.exports=function(t,e){i(e)&&"cause"in e&&s(t,"cause",e.cause)}},9909:function(t,e,n){var i,s,r,o=n(8536),a=n(7854),l=n(1702),c=n(111),u=n(8880),h=n(2597),d=n(5465),p=n(6200),f=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return r(t)?s(t):i(t,{})},b=function(t){return function(e){var n;if(!c(e)||(n=s(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=l(w.get),k=l(w.has),C=l(w.set);i=function(t,e){if(k(w,t))throw new g(m);return e.facade=t,C(w,t,e),e},s=function(t){return _(w,t)||{}},r=function(t){return k(w,t)}}else{var T=p("state");f[T]=!0,i=function(t,e){if(h(t,T))throw new g(m);return e.facade=t,u(t,T,e),e},s=function(t){return h(t,T)?t[T]:{}},r=function(t){return h(t,T)}}t.exports={set:i,get:s,has:r,enforce:y,getterFor:b}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),s=n(614),r=/#|\.prototype\./,o=function(t,e){var n=l[a(t)];return n==u||n!=c&&(s(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(r,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var i=n(614);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(7854),s=n(5005),r=n(614),o=n(7976),a=n(3307),l=i.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=s("Symbol");return r(e)&&o(e.prototype,l(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},133:function(t,e,n){var i=n(7392),s=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),s=n(614),r=n(2788),o=i.WeakMap;t.exports=s(o)&&/native code/.test(r(o))},6277:function(t,e,n){var i=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:i(t)}},3070:function(t,e,n){var i=n(7854),s=n(9781),r=n(4664),o=n(3353),a=n(9670),l=n(4948),c=i.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",p="configurable",f="writable";e.f=s?o?function(t,e,n){if(a(t),e=l(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=h(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:p in n?n[p]:i[p],enumerable:d in n?n[d]:i[d],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(a(t),e=l(e),a(n),r)try{return u(t,e,n)}catch(i){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),s=n(6916),r=n(5296),o=n(9114),a=n(5656),l=n(4948),c=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=l(e),u)try{return h(t,e)}catch(n){}if(c(t,e))return o(!s(r.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),s=n(748),r=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),s=n(2597),r=n(5656),o=n(1318).indexOf,a=n(3501),l=i([].push);t.exports=function(t,e){var n,i=r(t),c=0,u=[];for(n in i)!s(a,n)&&s(i,n)&&l(u,n);while(e.length>c)s(i,n=e[c++])&&(~o(u,n)||l(u,n));return u}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!n.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var i=n(1702),s=n(9670),r=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,i){return s(n),r(i),e?t(n,i):n.__proto__=i,n}}():void 0)},2140:function(t,e,n){var i=n(7854),s=n(6916),r=n(614),o=n(111),a=i.TypeError;t.exports=function(t,e){var n,i;if("string"===e&&r(n=t.toString)&&!o(i=s(n,t)))return i;if(r(n=t.valueOf)&&!o(i=s(n,t)))return i;if("string"!==e&&r(n=t.toString)&&!o(i=s(n,t)))return i;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),s=n(1702),r=n(8006),o=n(5181),a=n(9670),l=s([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(a(t)),n=o.f;return n?l(e,n(t)):e}},1320:function(t,e,n){var i=n(7854),s=n(614),r=n(2597),o=n(8880),a=n(3505),l=n(2788),c=n(9909),u=n(6530).CONFIGURABLE,h=c.get,d=c.enforce,p=String(String).split("String");(t.exports=function(t,e,n,l){var c,h=!!l&&!!l.unsafe,f=!!l&&!!l.enumerable,m=!!l&&!!l.noTargetGet,g=l&&void 0!==l.name?l.name:e;s(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!r(n,"name")||u&&n.name!==g)&&o(n,"name",g),c=d(n),c.source||(c.source=p.join("string"==typeof g?g:""))),t!==i?(h?!m&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return s(this)&&h(this).source||l(this)}))},4488:function(t,e,n){var i=n(7854),s=i.TypeError;t.exports=function(t){if(void 0==t)throw s("Can't call method on "+t);return t}},3505:function(t,e,n){var i=n(7854),s=Object.defineProperty;t.exports=function(t,e){try{s(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},6200:function(t,e,n){var i=n(2309),s=n(9711),r=i("keys");t.exports=function(t){return r[t]||(r[t]=s(t))}},5465:function(t,e,n){var i=n(7854),s=n(3505),r="__core-js_shared__",o=i[r]||s(r,{});t.exports=o},2309:function(t,e,n){var i=n(1913),s=n(5465);(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var i=n(9303),s=Math.max,r=Math.min;t.exports=function(t,e){var n=i(t);return n<0?s(n+e,0):r(n,e)}},5656:function(t,e,n){var i=n(8361),s=n(4488);t.exports=function(t){return i(s(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var i=+t;return i!==i||0===i?0:(i>0?n:e)(i)}},7466:function(t,e,n){var i=n(9303),s=Math.min;t.exports=function(t){return t>0?s(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(7854),s=n(4488),r=i.Object;t.exports=function(t){return r(s(t))}},7593:function(t,e,n){var i=n(7854),s=n(6916),r=n(111),o=n(2190),a=n(8173),l=n(2140),c=n(5112),u=i.TypeError,h=c("toPrimitive");t.exports=function(t,e){if(!r(t)||o(t))return t;var n,i=a(t,h);if(i){if(void 0===e&&(e="default"),n=s(i,t,e),!r(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),l(t,e)}},4948:function(t,e,n){var i=n(7593),s=n(2190);t.exports=function(t){var e=i(t,"string");return s(e)?e:e+""}},1694:function(t,e,n){var i=n(5112),s=i("toStringTag"),r={};r[s]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var i=n(7854),s=n(648),r=i.String;t.exports=function(t){if("Symbol"===s(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)}},6330:function(t,e,n){var i=n(7854),s=i.String;t.exports=function(t){try{return s(t)}catch(e){return"Object"}}},9711:function(t,e,n){var i=n(1702),s=0,r=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+r,36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),s=n(7293);t.exports=i&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var i=n(7854),s=n(2309),r=n(2597),o=n(9711),a=n(133),l=n(3307),c=s("wks"),u=i.Symbol,h=u&&u["for"],d=l?u:u&&u.withoutSetter||o;t.exports=function(t){if(!r(c,t)||!a&&"string"!=typeof c[t]){var e="Symbol."+t;a&&r(u,t)?c[t]=u[t]:c[t]=l&&h?h(e):d(e)}return c[t]}},9191:function(t,e,n){"use strict";var i=n(5005),s=n(2597),r=n(8880),o=n(7976),a=n(7674),l=n(9920),c=n(9587),u=n(6277),h=n(8340),d=n(7741),p=n(2914),f=n(1913);t.exports=function(t,e,n,m){var g=m?2:1,v=t.split("."),y=v[v.length-1],b=i.apply(null,v);if(b){var w=b.prototype;if(!f&&s(w,"cause")&&delete w.cause,!n)return b;var _=i("Error"),k=e((function(t,e){var n=u(m?e:t,void 0),i=m?new b(t):new b;return void 0!==n&&r(i,"message",n),p&&r(i,"stack",d(i.stack,2)),this&&o(w,this)&&c(i,this,k),arguments.length>g&&h(i,arguments[g]),i}));if(k.prototype=w,"Error"!==y&&(a?a(k,_):l(k,_,{name:!0})),l(k,b),!f)try{w.name!==y&&r(w,"name",y),w.constructor=k}catch(C){}return k}}},1703:function(t,e,n){var i=n(2109),s=n(7854),r=n(2104),o=n(9191),a="WebAssembly",l=s[a],c=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=o(t,e,c),i({global:!0,forced:c},n)},h=function(t,e){if(l&&l[t]){var n={};n[t]=o(a+"."+t,e,c),i({target:a,stat:!0,forced:c},n)}};u("Error",(function(t){return function(e){return r(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return r(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return r(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return r(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return r(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return r(t,this,arguments)}})),u("URIError",(function(t){return function(e){return r(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return r(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return r(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return r(t,this,arguments)}}))},5503:function(t,e,n){"use strict";n.d(e,{ZF:function(){return i.ZF}});var i=n(2238),s="firebase",r="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(s,r,"app")},949:function(t,e,n){"use strict";n.d(e,{Xb:function(){return ae},v0:function(){return li},Aj:function(){return ce},e5:function(){return le},w7:function(){return ue}});var i=n(4444),s=n(2238);function r(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new i.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${s.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw g(t,...e)}function f(t,...e){return g(t,...e)}function m(t,e,n){const s=Object.assign(Object.assign({},c()),{[e]:n}),r=new i.LL("auth","Firebase",s);return r.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(t){b(t instanceof Function,"Expected a class definition");let e=w.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){const n=(0,s.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),s=n.getOptions();if((0,i.vZ)(s,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const r=n.initialize({options:e});return r}function C(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===E()||"https:"===E()}function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function R(t,e,n,s,r={}){return M(t,r,(async()=>{let r={},o={};s&&("GET"===e?o=s:r={body:JSON.stringify(s)});const a=(0,i.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),O.fetch()(V(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))}))}async function M(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},D),e);try{const e=new B(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw F(t,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const e=i.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(r){if(r instanceof i.ZR)throw r;p(t,"network-request-failed")}}async function P(t,e,n,i,s={}){const r=await R(t,e,n,i,s);return"mfaPendingCredential"in r&&p(t,"multi-factor-auth-required",{_serverResponse:r}),r}function V(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?$(t.config,s):`${t.config.apiScheme}://${s}`}class B{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(f(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=f(t,e,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return R(t,"POST","/v1/accounts:delete",e)}async function j(t,e){return R(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e=!1){const n=(0,i.m9)(t),s=await n.getIdToken(e),r=q(s);v(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"===typeof r.firebase?r.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:r,token:s,authTime:z(H(r.auth_time)),issuedAtTime:z(H(r.iat)),expirationTime:z(H(r.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(t){return 1e3*Number(t)}function q(t){const[e,n,s]=t.split(".");if(void 0===e||void 0===n||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(r){return d("Caught error parsing JWT payload as JSON",r),null}}function W(t){const e=q(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof i.ZR&&G(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function G({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t){var e;const n=t.auth,i=await t.getIdToken(),s=await K(t,j(n,{idToken:i}));v(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?et(r.providerUserInfo):[],a=tt(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new X(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Q(t){const e=(0,i.m9)(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=r(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=V(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):W(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await nt(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new it;return n&&(v("string"===typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(v("number"===typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class rt{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=r(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new X(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Z(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=e.photoURL)&&void 0!==r?r:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:k,stsTokenManager:C}=e;v(b&&C,t,"internal-error");const T=it.fromJSON(this.name,C);v("string"===typeof b,t,"internal-error"),st(u,t.name),st(h,t.name),v("boolean"===typeof w,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),st(d,t.name),st(p,t.name),st(f,t.name),st(m,t.name),st(g,t.name),st(y,t.name);const S=new rt({uid:b,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(S.providerData=k.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const i=new it;i.updateFromServerResponse(e);const s=new rt({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await J(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=lt(this.userKey,i.apiKey,s),this.fullPersistenceKey=lt("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(_(at),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=i[0]||_(at);const r=lt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(r);if(e){const n=rt._fromJSON(t,e);c!==s&&(o=n),s=c;break}}catch(l){}const a=i.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(l){}}))),new ct(s,t,n)):new ct(s,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||pt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,i.z$)()){return/firefox\//i.test(t)}function dt(t=(0,i.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pt(t=(0,i.z$)()){return/crios\//i.test(t)}function ft(t=(0,i.z$)()){return/iemobile/i.test(t)}function mt(t=(0,i.z$)()){return/android/i.test(t)}function gt(t=(0,i.z$)()){return/blackberry/i.test(t)}function vt(t=(0,i.z$)()){return/webos/i.test(t)}function yt(t=(0,i.z$)()){return/iphone|ipad|ipod/i.test(t)}function bt(t=(0,i.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return(0,i.w1)()&&10===document.documentMode}function _t(t=(0,i.z$)()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||ft(t)}function kt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e=[]){let n;switch(t){case"Browser":n=ut((0,i.z$)());break;case"Worker":n=`${ut((0,i.z$)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Et(this),this.idTokenSubscription=new Et(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===n||void 0===n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(t);i&&i!==s||!(null===r||void 0===r?void 0:r.user)||(n=r.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"===typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return v(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function St(t){return(0,i.m9)(t)}class Et{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e){return R(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $t(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}async function Ot(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends It{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Dt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Dt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return At(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $t(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return xt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ot(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="http://localhost";class Rt extends It{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Rt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=r(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Rt(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Lt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Lt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Lt(t,e)}buildRequest(){const t={requestUri:Nt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e){return R(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}async function Pt(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}async function Vt(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const Bt={["USER_NOT_FOUND"]:"user-not-found"};async function Ft(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,n),Bt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends It{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ut({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ut({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Pt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Vt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Ft(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}=t;return n||e||i||s?new Ut({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zt(t){const e=(0,i.zd)((0,i.pd)(t))["link"],n=e?(0,i.zd)((0,i.pd)(e))["deep_link_id"]:null,s=(0,i.zd)((0,i.pd)(t))["deep_link_id"],r=s?(0,i.zd)((0,i.pd)(s))["link"]:null;return r||s||n||e||t}class Zt{constructor(t){var e,n,s,r,o,a;const l=(0,i.zd)((0,i.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=jt(null!==(s=l["mode"])&&void 0!==s?s:null);v(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(r=l["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=zt(t);try{return new Zt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(t,e){return Dt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Zt.parseLink(e);return v(n,"argument-error"),Dt._fromEmailAndCode(t,n.code,n.tenantId)}}Ht.PROVIDER_ID="password",Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends qt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Wt{constructor(){super("facebook.com")}static credential(t){return Rt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Rt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Gt.credential(e,n)}catch(i){return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com",Gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Wt{constructor(){super("github.com")}static credential(t){return Rt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Wt{constructor(){super("twitter.com")}static credential(t,e){return Rt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Xt.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jt(t,e){return P(t,"POST","/v1/accounts:signUp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.TWITTER_SIGN_IN_METHOD="twitter.com",Xt.PROVIDER_ID="twitter.com";class Qt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const s=await rt._fromIdTokenResponse(t,n,i),r=te(n),o=new Qt({user:s,providerId:r,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=te(n);return new Qt({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends i.ZR{constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ee(t,e,n,i)}}function ne(t,e,n,i){const s="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e,n=!1){const i=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await K(t,ne(i,s,e,t),n);v(r.idToken,i,"internal-error");const o=q(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(t.uid===a,i,"user-mismatch"),Qt._forOperation(t,s,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&p(i,"user-mismatch"),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const i="signIn",s=await ne(t,i,e),r=await Qt._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function oe(t,e){return re(St(t),e)}async function ae(t,e,n){const i=St(t),s=await Jt(i,{returnSecureToken:!0,email:e,password:n}),r=await Qt._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function le(t,e,n){return oe((0,i.m9)(t),Ht.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n,s){return(0,i.m9)(t).onAuthStateChanged(e,n,s)}function ue(t){return(0,i.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function de(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}new WeakMap;const pe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(pe,"1"),this.storage.removeItem(pe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){const t=(0,i.z$)();return dt(t)||yt(t)}const ge=1e3,ve=10;class ye extends fe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=me()&&kt(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);wt()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ve):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),ge)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ye.type="LOCAL";const be=ye;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends fe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}we.type="SESSION";const _e=we;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ce(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null===r||void 0===r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await ke(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.receivers=[];class Se{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=Te("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return window}function Ie(t){Ee().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return"undefined"!==typeof Ee()["WorkerGlobalScope"]&&"function"===typeof Ee()["importScripts"]}async function Ae(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function $e(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Oe(){return xe()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="firebaseLocalStorageDb",Le=1,Ne="firebaseLocalStorage",Re="fbase_key";class Me{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Pe(t,e){return t.transaction([Ne],e?"readwrite":"readonly").objectStore(Ne)}function Ve(){const t=indexedDB.deleteDatabase(De);return new Me(t).toPromise()}function Be(){const t=indexedDB.open(De,Le);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ne,{keyPath:Re})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ne)?e(n):(n.close(),await Ve(),e(await Be()))}))}))}async function Fe(t,e,n){const i=Pe(t,!0).put({[Re]:e,value:n});return new Me(i).toPromise()}async function Ue(t,e){const n=Pe(t,!1).get(e),i=await new Me(n).toPromise();return void 0===i?null:i.value}function je(t,e){const n=Pe(t,!0).delete(e);return new Me(n).toPromise()}const ze=800,Ze=3;class He{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Be()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ze)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ce._getInstance(Oe()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ae(),!this.activeServiceWorker)return;this.sender=new Se(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&$e()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Be();return await Fe(t,pe,"1"),await je(t,pe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Fe(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Ue(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>je(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Pe(t,!1).getAll();return new Me(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),ze)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}He.type="LOCAL";const qe=He;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}function Ke(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ye(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=f("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Ge().appendChild(i)}))}function Xe(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xe("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="recaptcha";async function Qe(t,e,n){var i;const s=await n.verify();try{let r;if(v("string"===typeof s,t,"argument-error"),v(n.type===Je,t,"argument-error"),r="string"===typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){v("enroll"===e.type,t,"internal-error");const n=await he(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await We(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Mt(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(t){this.providerId=tn.PROVIDER_ID,this.auth=St(t)}verifyPhoneNumber(t,e){return Qe(this.auth,t,(0,i.m9)(e))}static credential(t,e){return Ut._fromVerification(t,e)}static credentialFromResult(t){const e=t;return tn.credentialFromTaggedObject(e)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ut._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(t,e){return e?_(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class nn extends It{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Lt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Lt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Lt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function sn(t){return re(t.auth,new nn(t),t.bypassAuthState)}function rn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),se(n,new nn(t),t.bypassAuthState)}async function on(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ie(n,new nn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new A(2e3,1e4);class cn extends an{constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Te();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(f(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ln.get())};t()}}cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="pendingRedirect",hn=new Map;class dn extends an{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=hn.get(this.auth._key());if(!t){try{const e=await pn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}hn.set(this.auth._key(),t)}return this.bypassAuthState||hn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(t,e){const n=mn(e),i=fn(t);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}function fn(t){return _(t._redirectPersistence)}function mn(t){return lt(un,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e,n=!1){const i=St(t),s=en(i,e),r=new dn(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=6e5;class yn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!_n(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!wn(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(f(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(t))}saveEventToCache(t){this.cachedEventUids.add(bn(t)),this.lastProcessedEventTime=Date.now()}}function bn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function wn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function _n(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t,e={}){return R(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tn=/^https?/;async function Sn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kn(t);for(const i of e)try{if(En(i))return}catch(n){}p(t,"unauthorized-domain")}function En(t){const e=T(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Tn.test(n))return!1;if(Cn.test(t))return i===t;const s=t.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+s+"|"+s+")$","i");return r.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new A(3e4,6e4);function xn(){const t=Ee().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function An(t){return new Promise(((e,n)=>{var i,s,r;function o(){xn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xn(),n(f(t,"network-request-failed"))},timeout:In.get()})}if(null===(s=null===(i=Ee().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Ee().gapi)||void 0===r?void 0:r.load)){const e=Xe("iframefcb");return Ee()[e]=()=>{gapi.load?o():n(f(t,"network-request-failed"))},Ye(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw $n=null,t}))}let $n=null;function On(t){return $n=$n||An(t),$n}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new A(5e3,15e3),Ln="__/auth/iframe",Nn="emulator/auth/iframe",Rn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$(e,Nn):`https://${t.config.authDomain}/${Ln}`,r={apiKey:e.apiKey,appName:t.name,v:s.Jn},o=Mn.get(t.config.apiHost);o&&(r.eid=o);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Vn(t){const e=await On(t),n=Ee().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Pn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rn,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const s=f(t,"network-request-failed"),r=Ee().setTimeout((()=>{i(s)}),Dn.get());function o(){Ee().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{i(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fn=500,Un=600,jn="_blank",zn="http://localhost";class Zn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Hn(t,e,n,s=Fn,r=Un){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Bn),{width:s.toString(),height:r.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(l=pt(u)?jn:n),ht(u)&&(e=e||zn,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(bt(u)&&"_self"!==l)return qn(e||"",l),new Zn(null);const d=window.open(e||"",l,h);v(d,t,"popup-blocked");try{d.focus()}catch(p){}return new Zn(d)}function qn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="__/auth/handler",Kn="emulator/auth/handler";function Gn(t,e,n,r,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:s.Jn,eventId:o};if(e instanceof qt){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,i.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))l[t]=e}if(e instanceof Wt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];return`${Yn(t)}?${(0,i.xO)(c).slice(1)}`}function Yn({config:t}){return t.emulator?$(t,Kn):`https://${t.authDomain}/${Wn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="webStorageSupport";class Jn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_e,this._completeRedirectFn=gn}async _openPopup(t,e,n,i){var s;b(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const r=Gn(t,e,n,T(),i);return Hn(t,r,Te())}async _openRedirect(t,e,n,i){return await this._originValidation(t),Ie(Gn(t,e,n,T(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Vn(t),n=new yn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Xn,{type:Xn},(n=>{var i;const s=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Xn];void 0!==s&&e(!!s),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Sn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||dt()||yt()}}const Qn=Jn;class ti{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class ei extends ti{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ei(t)}_finalizeEnroll(t,e,n){return de(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ke(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ni{constructor(){}static assertion(t){return ei._fromCredential(t)}}ni.FACTOR_ID="phone";var ii="@firebase/auth",si="0.19.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ri{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ai(t){(0,s.Xd)(new a.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((e,i)=>{v(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const s={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ct(t)},a=new Tt(e,i,s);return C(a,n),a})(i,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,s.Xd)(new a.wA("auth-internal",(t=>{const e=St(t.getProvider("auth").getImmediate());return(t=>new ri(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(ii,si,oi(t)),(0,s.KN)(ii,si,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t=(0,s.Mq)()){const e=(0,s.qX)(t,"auth");return e.isInitialized()?e.getImmediate():k(t,{popupRedirectResolver:Qn,persistence:[qe,be,_e]})}ai("Browser")},5321:function(t,e,n){"use strict";n.d(e,{ET:function(){return ph},hJ:function(){return wu},JU:function(){return _u},QT:function(){return lh},PL:function(){return uh},ad:function(){return Tu},pl:function(){return hh},r7:function(){return dh}});var i,s=n(2238),r=n(8463),o=n(3333),a=n(4444),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(){}function p(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function k(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function C(){this.s=this.s,this.o=this.o}var T=0,S={};C.prototype.s=!1,C.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var t=m(this);delete S[t]}},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"===typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function x(t){t:{var e=qn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function $(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var D,L=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return-1!=t.indexOf(e)}function R(t,e){return t<e?-1:t>e?1:0}t:{var M=h.navigator;if(M){var P=M.userAgent;if(P){D=P;break t}}D=""}function V(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function B(t){const e={};for(const n in t)e[n]=t[n];return e}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(t,e){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)t[n]=i[n];for(let e=0;e<F.length;e++)n=F[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function j(t){return j[" "](t),t}function z(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}j[" "]=d;var Z,H=N(D,"Opera"),q=N(D,"Trident")||N(D,"MSIE"),W=N(D,"Edge"),K=W||q,G=N(D,"Gecko")&&!(N(D.toLowerCase(),"webkit")&&!N(D,"Edge"))&&!(N(D,"Trident")||N(D,"MSIE"))&&!N(D,"Edge"),Y=N(D.toLowerCase(),"webkit")&&!N(D,"Edge");function X(){var t=h.document;return t?t.documentMode:void 0}t:{var J="",Q=function(){var t=D;return G?/rv:([^\);]+)(\)|;)/.exec(t):W?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Y?/WebKit\/(\S+)/.exec(t):H?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(J=Q?Q[1]:""),q){var tt=X();if(null!=tt&&tt>parseFloat(J)){Z=String(tt);break t}}Z=J}var et,nt={};function it(){return z((function(){let t=0;const e=L(String(Z)).split("."),n=L("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=R(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||R(0==s[2].length,0==r[2].length)||R(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(h.document&&q){var st=X();et=st||(parseInt(Z,10)||void 0)}else et=void 0;var rt=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function lt(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{j(e.nodeName);var s=!0;break t}catch(r){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ct[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lt.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},k(lt,at);var ct={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ht=0;function dt(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++ht,this.ca=this.fa=!1}function pt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ft(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=E(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(pt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}ft.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=gt(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function bt(t,e,n,i,s){if(i&&i.once)return kt(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)bt(t,e[r],n,i,s);return null}return n=At(n),t&&t[ut]?t.N(e,n,f(i)?!!i.capture:!!i,s):wt(t,e,n,!1,i,s)}function wt(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=f(s)?!!s.capture:!!s,a=It(t);if(a||(t[vt]=a=new ft(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=_t(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)ot||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(St(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function _t(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function kt(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)kt(t,e[r],n,i,s);return null}return n=At(n),t&&t[ut]?t.O(e,n,f(i)?!!i.capture:!!i,s):wt(t,e,n,!0,i,s)}function Ct(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ct(t,e[r],n,i,s);else i=f(i)?!!i.capture:!!i,n=At(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=gt(r,n,i,s),-1<n&&(pt(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,i,s)),(n=-1<t?e[t]:null)&&Tt(n))}function Tt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])mt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(St(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=It(e))?(mt(n,t),0==n.h&&(n.src=null,e[vt]=null)):pt(t)}}}function St(t){return t in yt?yt[t]:yt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new lt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Tt(t),t=n.call(i,e)}return t}function It(t){return t=t[vt],t instanceof ft?t:null}var xt="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[xt]||(t[xt]=function(e){return t.handleEvent(e)}),t[xt])}function $t(){C.call(this),this.i=new ft(this),this.P=this,this.I=null}function Ot(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var s=e;e=new at(i,t),U(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Dt(o,i,!0,e)&&s}if(o=e.g=t,s=Dt(o,i,!0,e)&&s,s=Dt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Dt(o,i,!1,e)&&s}function Dt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&mt(t.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}k($t,C),$t.prototype[ut]=!0,$t.prototype.removeEventListener=function(t,e,n,i){Ct(this,t,e,n,i)},$t.prototype.M=function(){if($t.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)pt(n[i]);delete e.g[t],e.h--}}this.I=null},$t.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},$t.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Lt=h.JSON.stringify;function Nt(){var t=zt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Pt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,Pt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Vt),(t=>t.reset()));class Vt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Bt(t){h.setTimeout((()=>{throw t}),0)}function Ft(t,e){Mt||Ut(),jt||(Mt(),jt=!0),zt.add(t,e)}function Ut(){var t=h.Promise.resolve(void 0);Mt=function(){t.then(Zt)}}var jt=!1,zt=new Rt;function Zt(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(n){Bt(n)}var e=Pt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function Ht(t,e){$t.call(this),this.h=t||1,this.g=e||h,this.j=w(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Wt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Kt(t){t.g=Wt((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}k(Ht,$t),i=Ht.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(qt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Ht.Z.M.call(this),qt(this),delete this.g};class Gt extends C{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){C.call(this),this.h=t,this.g={}}k(Yt,C);var Xt=[];function Jt(t,e,n,i){Array.isArray(n)||(n&&(Xt[0]=n.toString()),n=Xt);for(var s=0;s<n.length;s++){var r=bt(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Qt(t){V(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Tt(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function ie(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+re(t,n)+(i?" "+i:"")}))}function se(t,e){t.info((function(){return"TIMEOUT: "+e}))}function re(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Lt(n)}catch(a){return e}}Yt.prototype.M=function(){Yt.Z.M.call(this),Qt(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function le(){return ae=ae||new $t}function ce(t){at.call(this,oe.Ma,t)}function ue(t){const e=le();Ot(e,new ce(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=le();Ot(e,new he(e,t))}function pe(t,e){at.call(this,oe.Na,t),this.size=e}function fe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",k(ce,at),oe.STAT_EVENT="statevent",k(he,at),oe.Na="timingevent",k(pe,at);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function be(){}ve.prototype.h=null;var we,_e={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ke(){at.call(this,"d")}function Ce(){at.call(this,"c")}function Te(){}function Se(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Yt(this),this.P=Ie,t=K?125:void 0,this.W=new Ht(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}k(ke,at),k(Ce,at),k(Te,ve),Te.prototype.g=function(){return new XMLHttpRequest},Te.prototype.i=function(){return{}},we=new Te;var Ie=45e3,xe={},Ae={};function $e(t,e,n){t.K=1,t.v=en(Ge(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),Re(t),t.A=Ge(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),vn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Ee,t.g=Ci(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(w(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?B(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Le(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=Ne(t,n),i==Ae){4==e&&(t.o=4,de(14),s=!1),ie(t.j,t.m,null,"[Incomplete Response]");break}if(i==xe){t.o=4,de(15),ie(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}ie(t.j,t.m,i,null),Fe(t,i)}De(t)&&i!=Ae&&i!=xe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mi(e),e.L=!0,de(11))):(ie(t.j,t.m,n,"[Invalid Chunked Response]"),Be(t),Ve(t))}function Ne(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ae:(n=Number(e.substring(n,i)),isNaN(n)?xe:(i+=1,i+n>e.length?Ae:(e=e.substr(i,n),t.C=i+n,e)))}function Re(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=fe(w(t.eb,t),e)}function Pe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Ve(t){0==t.l.G||t.I||yi(t.l,t)}function Be(t){Pe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Sn(n.i,t)))if(n.I=t.N,!t.J&&Sn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vi(n),ri(n)}fi(n),de(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=fe(w(n.ab,n),6e3));if(1>=Tn(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else wi(n,11)}else if((t.J||n.g==t)&&vi(n),!O(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=c[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(N(t,"spdy")||N(t,"quic")||N(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(En(r,r.h),r.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,tn(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=ki(i,i.H?i.la:null,i.W),o.J){In(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Pe(a),Re(a)),i.g=o}else pi(i);0<n.l.length&&li(n)}else"stop"!=c[0]&&"close"!=c[0]||wi(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?wi(n,7):si(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}ue(4)}catch(c){}}function Ue(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(p(t)||"string"===typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=Ue(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function ze(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ze)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ze(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];He(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],He(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function He(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=Se.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const u=Jn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||K||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=d?3:2),Pe(this);var n=this.g.ba();this.N=n;e:if(De(this)){var i=Qn(this.g);t="";var s=i.length,r=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Be(this),Ve(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,de(12),Be(this),Ve(this);break t}ie(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,n)}this.U?(Le(this,u,o),K&&this.i&&3==u&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(ie(this.j,this.m,o,null),Fe(this,o)),4==u&&Be(this),this.i&&!this.I&&(4==u?yi(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Be(this),Ve(this)}}}catch(u){}},i.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Pe(this),Le(this,t,e),this.i&&4!=t&&Re(this))}},i.cancel=function(){this.I=!0,Be(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(se(this.j,this.A),2!=this.K&&(ue(3),de(17)),Be(this),this.o=2,Ve(this)):Me(this,this.Y-t)},i=ze.prototype,i.R=function(){Ze(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Ze(this),this.g.concat()},i.get=function(t,e){return He(this.h,t)?this.h[t]:e},i.set=function(t,e){He(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function We(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,Ye(this,t.j),this.s=t.s,Xe(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new pn;n.i=e.i,e.g&&(n.g=new ze(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,Ye(this,n[1]||"",!0),this.s=rn(n[2]||""),Xe(this,n[3]||"",!0),Je(this,n[4]),this.l=rn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!e,this.h=new pn(null,this.g))}function Ge(t){return new Ke(t)}function Ye(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xe(t,e,n){t.i=n?rn(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof pn?(t.h=e,bn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new pn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ke?Ge(t):new Ke(t,void 0)}function sn(t,e,n,i){var s=new Ke(null,void 0);return t&&Ye(s,t),e&&Xe(s,e),n&&Je(s,n),i&&(s.l=i),s}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,ln,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:cn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var ln=/[#\/\?@]/g,cn=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function pn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fn(t){t.g||(t.g=new ze,t.h=0,t.i&&We(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){fn(t),e=yn(t,e),He(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,He(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ze(t)))}function gn(t,e){return fn(t),e=yn(t,e),He(t.g.h,e)}function vn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),$(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bn(t,e){e&&!t.j&&(fn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),vn(this,n,t))}),t)),t.j=e}i=pn.prototype,i.add=function(t,e){fn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){fn(this),this.g.forEach((function(n,i){I(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},i.R=function(t){fn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=A(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},i.set=function(t,e){return fn(this),this.i=null,t=yn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};var wn=class{constructor(t,e){this.h=t,this.g=e}};function _n(t){this.l=t||kn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kn=10;function Cn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Tn(t){return t.h?1:t.g?t.g.size:0}function Sn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function xn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $(t.i)}function An(){}function $n(){this.g=new An}function On(t,e,n){const i=n||"";try{je(t,(function(t,n){let s=t;f(t)&&(s=Lt(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Dn(t,e){const n=new te;if(h.Image){const i=new Image;i.onload=_(Ln,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_(Ln,n,i,"TestLoadImage: error",!1,e),i.onabort=_(Ln,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_(Ln,n,i,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function Ln(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(r){}}function Nn(t){this.l=t.$b||null,this.j=t.ib||!1}function Rn(t,e){$t.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},An.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return h.JSON.parse(t,void 0)},k(Nn,ve),Nn.prototype.g=function(){return new Rn(this.l,this.j)},Nn.prototype.i=function(t){return function(){return t}}({}),k(Rn,$t);var Mn=0;function Pn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bn(t)}function Bn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=Rn.prototype,i.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vn(this)),this.readyState=Mn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vn(this):Bn(this),3==this.readyState&&Pn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Vn(this))},i.Ta=function(t){this.g&&(this.response=t,Vn(this))},i.ha=function(){this.g&&Vn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Fn=h.JSON.parse;function Un(t){$t.call(this),this.headers=new ze,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jn,this.K=this.L=!1}k(Un,$t);var jn="",zn=/^https?$/i,Zn=["POST","PUT"];function Hn(t){return q&&it()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function Wn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Yn(t)}function Kn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))Wt(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const l=t.ba();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===l){var s=String(t.H).match(qe)[1]||null;if(!s&&h.self&&h.self.location){var r=h.self.location.protocol;s=r.substr(0,r.length-1)}i=!zn.test(s?s.toLowerCase():"")}n=i}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Kn(t)}}finally{Yn(t)}}}function Yn(t,e){if(t.g){Xn(t);const i=t.g,s=t.C[0]?d:null;t.g=null,t.C=null,e||Ot(t,"ready");try{i.onreadystatechange=s}catch(n){}}}function Xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ti(t){let e="";return V(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ei(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ti(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ii(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ni("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ni("baseRetryDelayMs",5e3,t),this.$a=ni("retryDelaySeedMs",1e4,t),this.Ya=ni("forwardChannelMaxRetries",2,t),this.ra=ni("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(t&&t.concurrentRequestLimit),this.Ca=new $n,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function si(t){if(oi(t),3==t.G){var e=t.V++,n=Ge(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hi(t,n),e=new Se(t,t.h,e,void 0),e.K=2,e.v=en(Ge(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ci(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Re(e)}_i(t)}function ri(t){t.g&&(mi(t),t.g.cancel(),t.g=null)}function oi(t){ri(t),t.u&&(h.clearTimeout(t.u),t.u=null),vi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ai(t,e){t.l.push(new wn(t.Za++,e)),3==t.G&&li(t)}function li(t){Cn(t.i)||t.m||(t.m=!0,Ft(t.Ha,t),t.C=0)}function ci(t,e){return!(Tn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=fe(w(t.Ha,t,e),bi(t,t.C)),t.C++,!0))}function ui(t,e){var n;n=e?e.m:t.V++;const i=Ge(t.F);tn(i,"SID",t.J),tn(i,"RID",n),tn(i,"AID",t.U),hi(t,i),t.o&&t.s&&ei(i,t.o,t.s),n=new Se(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=di(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),$e(n,i,e)}function hi(t,e){t.j&&je({},(function(t,n){tn(e,n,t)}))}function di(t,e,n){n=Math.min(t.l.length,n);var i=t.j?w(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{On(a,t,"req"+n+"_")}catch(Yi){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function pi(t){t.g||t.u||(t.Y=1,Ft(t.Ga,t),t.A=0)}function fi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=fe(w(t.Ga,t),bi(t,t.A)),t.A++,!0)}function mi(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function gi(t){t.g=new Se(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hi(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&ei(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Ge(e)),n.s=null,n.U=!0,Oe(n,t)}function vi(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function yi(t,e){var n=null;if(t.g==e){vi(t),mi(t),t.g=null;var i=2}else{if(!Sn(t.i,e))return;n=e.D,In(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=le(),Ot(i,new pe(i,n,e,s)),li(t)}else pi(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==i&&ci(t,e)||2==i&&fi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:wi(t,5);break;case 4:wi(t,10);break;case 3:wi(t,6);break;default:wi(t,2)}}function bi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function wi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=w(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ye(n,"https"),en(n)),Dn(n.toString(),i)}else de(2);t.G=0,t.j&&t.j.va(e),_i(t),oi(t)}function _i(t){t.G=0,t.I=-1,t.j&&(0==xn(t.i).length&&0==t.l.length||(t.i.i.length=0,$(t.l),t.l.length=0),t.j.ua())}function ki(t,e,n){let i=nn(n);if(""!=i.i)e&&Xe(i,e+"."+i.i),Je(i,i.m);else{const t=h.location;i=sn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&V(t.aa,(function(t,e){tn(i,e,t)})),e=t.D,n=t.sa,e&&n&&tn(i,e,n),tn(i,"VER",t.ma),hi(t,i),i}function Ci(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Un(new Nn({ib:!0})):new Un(t.qa),e.L=t.H,e}function Ti(){}function Si(){if(q&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function Ei(t,e){$t.call(this),this.g=new ii(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}function Ii(t){ke.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function xi(){Ce.call(this),this.status=1}function Ai(t){this.g=t}i=Un.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():we.g(),this.C=this.u?ye(this.u):ye(we),this.g.onreadystatechange=w(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Wn(this,r)}t=n||"";const s=new ze(this.headers);i&&je(i,(function(t,e){s.set(e,t)})),i=x(s.T()),n=h.FormData&&t instanceof h.FormData,!(0<=E(Zn,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=Hn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.pa,this)):this.A=Wt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Wn(this,r)}},i.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),Yn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),Un.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},i.cb=function(){Gn(this)},i.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Fn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=ii.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Se(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=B(r),U(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=di(this,s,e),n=Ge(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hi(this,n),this.o&&r&&ei(n,this.o,r),En(this.i,s),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),s.$=!0,$e(s,n,null)):$e(s,n,e),this.G=2}}else 3==this.G&&(t?ui(this,t):0==this.l.length||Cn(this.i)||ui(this))},i.Ga=function(){if(this.u=null,gi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fe(w(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),ri(this),gi(this))},i.ab=function(){null!=this.v&&(this.v=null,ri(this),fi(this),de(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},i=Ti.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Si.prototype.g=function(t,e){return new Ei(t,e)},k(Ei,$t),Ei.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ft(w(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ki(t,null,t.W),li(t)},Ei.prototype.close=function(){si(this.g)},Ei.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ai(this.g,e)}else this.v?(e={},e.__data__=Lt(t),ai(this.g,e)):ai(this.g,t)},Ei.prototype.M=function(){this.g.j=null,delete this.j,si(this.g),delete this.g,Ei.Z.M.call(this)},k(Ii,ke),k(xi,Ce),k(Ai,Ti),Ai.prototype.xa=function(){Ot(this.g,"a")},Ai.prototype.wa=function(t){Ot(this.g,new Ii(t))},Ai.prototype.va=function(t){Ot(this.g,new xi(t))},Ai.prototype.ua=function(){Ot(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,Ei.prototype.send=Ei.prototype.u,Ei.prototype.open=Ei.prototype.m,Ei.prototype.close=Ei.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ge.COMPLETE="complete",be.EventType=_e,_e.OPEN="a",_e.CLOSE="b",_e.ERROR="c",_e.MESSAGE="d",$t.prototype.listen=$t.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var $i=c.createWebChannelTransport=function(){return new Si},Oi=c.getStatEventTarget=function(){return le()},Di=c.ErrorCode=me,Li=c.EventType=ge,Ni=c.Event=oe,Ri=c.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mi=c.FetchXmlHttpFactory=Nn,Pi=c.WebChannel=be,Vi=c.XhrIo=Un;const Bi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Fi.UNAUTHENTICATED=new Fi(null),Fi.GOOGLE_CREDENTIALS=new Fi("google-credentials-uid"),Fi.FIRST_PARTY=new Fi("first-party-uid"),Fi.MOCK_USER=new Fi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ui="9.6.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new o.Yd("@firebase/firestore");function zi(){return ji.logLevel}function Zi(t,...e){if(ji.logLevel<=o["in"].DEBUG){const n=e.map(Wi);ji.debug(`Firestore (${Ui}): ${t}`,...n)}}function Hi(t,...e){if(ji.logLevel<=o["in"].ERROR){const n=e.map(Wi);ji.error(`Firestore (${Ui}): ${t}`,...n)}}function qi(t,...e){if(ji.logLevel<=o["in"].WARN){const n=e.map(Wi);ji.warn(`Firestore (${Ui}): ${t}`,...n)}}function Wi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t="Unexpected state"){const e=`FIRESTORE (${Ui}) INTERNAL ASSERTION FAILED: `+t;throw Hi(e),new Error(e)}function Gi(t,e){t||Ki()}function Yi(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ji extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class es{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Fi.UNAUTHENTICATED)))}shutdown(){}}class ns{constructor(t){this.t=t,this.currentUser=Fi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Qi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qi,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Zi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zi("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qi)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Gi("string"==typeof e.accessToken),new ts(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Gi(null===t||"string"==typeof t),new Fi(t)}}class is{constructor(t,e,n){this.type="FirstParty",this.user=Fi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ss{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new is(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Fi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class os{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Zi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Zi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Zi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Zi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Gi("string"==typeof t.token),this.p=t.token,new rs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class as{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */as.A=-1;class cs{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ls(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function us(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ji(Xi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ji(Xi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ji(Xi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ji(Xi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ds.fromMillis(Date.now())}static fromDate(t){return ds.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ds(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?us(this.nanoseconds,t.nanoseconds):us(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ps(t)}static min(){return new ps(new ds(0,0))}static max(){return new ps(new ds(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ki(),void 0===n?n=t.length-e:n>t.length-e&&Ki(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===vs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ys extends vs{construct(t,e,n){return new ys(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ji(Xi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ys(e)}static emptyPath(){return new ys([])}}const bs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ws extends vs{construct(t,e,n){return new ws(t,e,n)}static isValidIdentifier(t){return bs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ws.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ws(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Ji(Xi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Ji(Xi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ji(Xi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Ji(Xi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ws(e)}static emptyPath(){return new ws([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t){this.fields=t,t.sort(ws.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ks(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ks(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return us(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ks.EMPTY_BYTE_STRING=new ks("");const Cs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ts(t){if(Gi(!!t),"string"==typeof t){let e=0;const n=Cs.exec(t);if(Gi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ss(t.seconds),nanos:Ss(t.nanos)}}function Ss(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Es(t){return"string"==typeof t?ks.fromBase64String(t):ks.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function xs(t){const e=t.mapValue.fields.__previous_value__;return Is(e)?xs(e):e}function As(t){const e=Ts(t.mapValue.fields.__local_write_time__.timestampValue);return new ds(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Os{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Os("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Os&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){return null==t}function Ls(t){return 0===t&&1/t==-1/0}function Ns(t){return"number"==typeof t&&Number.isInteger(t)&&!Ls(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t){this.path=t}static fromPath(t){return new Rs(ys.fromString(t))}static fromName(t){return new Rs(ys.fromString(t).popFirst(5))}static empty(){return new Rs(ys.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ys.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ys.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Rs(new ys(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Is(t)?4:Gs(t)?9:10:Ki()}function Ps(t,e){if(t===e)return!0;const n=Ms(t);if(n!==Ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return As(t).isEqual(As(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ts(t.timestampValue),i=Ts(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Es(t.bytesValue).isEqual(Es(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ss(t.geoPointValue.latitude)===Ss(e.geoPointValue.latitude)&&Ss(t.geoPointValue.longitude)===Ss(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ss(t.integerValue)===Ss(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ss(t.doubleValue),i=Ss(e.doubleValue);return n===i?Ls(n)===Ls(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],Ps);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(fs(n)!==fs(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!Ps(n[s],i[s])))return!1;return!0}(t,e);default:return Ki()}}function Vs(t,e){return void 0!==(t.values||[]).find((t=>Ps(t,e)))}function Bs(t,e){if(t===e)return 0;const n=Ms(t),i=Ms(e);if(n!==i)return us(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return us(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ss(t.integerValue||t.doubleValue),i=Ss(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Fs(t.timestampValue,e.timestampValue);case 4:return Fs(As(t),As(e));case 5:return us(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Es(t),i=Es(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let s=0;s<n.length&&s<i.length;s++){const t=us(n[s],i[s]);if(0!==t)return t}return us(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=us(Ss(t.latitude),Ss(e.latitude));return 0!==n?n:us(Ss(t.longitude),Ss(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const t=Bs(n[s],i[s]);if(t)return t}return us(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const t=us(i[o],r[o]);if(0!==t)return t;const e=Bs(n[i[o]],s[r[o]]);if(0!==e)return e}return us(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Ki()}}function Fs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return us(t,e);const n=Ts(t),i=Ts(e),s=us(n.seconds,i.seconds);return 0!==s?s:us(n.nanos,i.nanos)}function Us(t){return js(t)}function js(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ts(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Rs.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=js(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${js(t.fields[s])}`;return n+"}"}(t.mapValue):Ki();var e,n}function zs(t){return!!t&&"integerValue"in t}function Zs(t){return!!t&&"arrayValue"in t}function Hs(t){return!!t&&"nullValue"in t}function qs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ws(t){return!!t&&"mapValue"in t}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ks(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gs(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys{constructor(t){this.value=t}static empty(){return new Ys({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ws(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ks(e)}setAll(t){let e=ws.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Ks(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Ws(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ps(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Ws(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ms(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new Ys(Ks(this.value))}}function Xs(t){const e=[];return ms(t.fields,((t,n)=>{const i=new ws([t]);if(Ws(n)){const t=Xs(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new _s(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Js{constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new Js(t,0,ps.min(),ps.min(),Ys.empty(),0)}static newFoundDocument(t,e,n){return new Js(t,1,e,ps.min(),n,0)}static newNoDocument(t,e){return new Js(t,2,e,ps.min(),Ys.empty(),0)}static newUnknownDocument(t,e){return new Js(t,3,e,ps.min(),Ys.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ys.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ys.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Js&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Js(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Qs{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Qs.UNKNOWN_ID=-1;function tr(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=ps.fromTimestamp(1e9===i?new ds(n+1,0):new ds(n,i));return new nr(s,Rs.empty(),e)}function er(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new nr(ps.min(),Rs.empty(),-1)}static max(){return new nr(ps.max(),Rs.empty(),-1)}}function ir(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Rs.comparator(t.documentKey,e.documentKey),0!==n?n:us(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.P=null}}function rr(t,e=null,n=[],i=[],s=null,r=null,o=null){return new sr(t,e,n,i,s,r,o)}function or(t){const e=Yi(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Us(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ds(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Us(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Us(t))).join(",")),e.P=t}return e.P}function ar(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Us(e.value)}`;var e})).join(", ")}]`),Ds(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Us(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Us(t))).join(",")),`Target(${e})`}function lr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!_r(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Ps(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cr(t.startAt,e.startAt)&&Cr(t.endAt,e.endAt)}function cr(t){return Rs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ur extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new hr(t,e,n):"array-contains"===e?new mr(t,n):"in"===e?new gr(t,n):"not-in"===e?new vr(t,n):"array-contains-any"===e?new yr(t,n):new ur(t,e,n)}static V(t,e,n){return"in"===e?new dr(t,n):new pr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Bs(e,this.value)):null!==e&&Ms(this.value)===Ms(e)&&this.v(Bs(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ki()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hr extends ur{constructor(t,e,n){super(t,e,n),this.key=Rs.fromName(n.referenceValue)}matches(t){const e=Rs.comparator(t.key,this.key);return this.v(e)}}class dr extends ur{constructor(t,e){super(t,"in",e),this.keys=fr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class pr extends ur{constructor(t,e){super(t,"not-in",e),this.keys=fr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function fr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Rs.fromName(t.referenceValue)))}class mr extends ur{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zs(e)&&Vs(e.arrayValue,this.value)}}class gr extends ur{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Vs(this.value.arrayValue,e)}}class vr extends ur{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Vs(this.value.arrayValue,e)}}class yr extends ur{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Vs(this.value.arrayValue,t)))}}class br{constructor(t,e){this.position=t,this.inclusive=e}}class wr{constructor(t,e="asc"){this.field=t,this.dir=e}}function _r(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function kr(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Rs.comparator(Rs.fromName(o.referenceValue),n.key):Bs(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Cr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ps(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Sr(t,e,n,i,s,r,o,a){return new Tr(t,e,n,i,s,r,o,a)}function Er(t){return new Tr(t)}function Ir(t){return!Ds(t.limit)&&"F"===t.limitType}function xr(t){return!Ds(t.limit)&&"L"===t.limitType}function Ar(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $r(t){for(const e of t.filters)if(e.S())return e.field;return null}function Or(t){return null!==t.collectionGroup}function Dr(t){const e=Yi(t);if(null===e.D){e.D=[];const t=$r(e),n=Ar(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new wr(t)),e.D.push(new wr(ws.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new wr(ws.keyField(),t))}}}return e.D}function Lr(t){const e=Yi(t);if(!e.C)if("F"===e.limitType)e.C=rr(e.path,e.collectionGroup,Dr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Dr(e)){const e="desc"===s.dir?"asc":"desc";t.push(new wr(s.field,e))}const n=e.endAt?new br(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new br(e.startAt.position,!e.startAt.inclusive):null;e.C=rr(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.C}function Nr(t,e,n){return new Tr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rr(t,e){return lr(Lr(t),Lr(e))&&t.limitType===e.limitType}function Mr(t){return`${or(Lr(t))}|lt:${t.limitType}`}function Pr(t){return`Query(target=${ar(Lr(t))}; limitType=${t.limitType})`}function Vr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Rs.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=kr(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Dr(t),e))&&!(t.endAt&&!function(t,e,n){const i=kr(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Dr(t),e))}(t,e)}function Br(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fr(t){return(e,n)=>{let i=!1;for(const s of Dr(t)){const t=Ur(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Ur(t,e,n){const i=t.field.isKeyField()?Rs.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Bs(i,s):Ki()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ki()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(e)?"-0":e}}function zr(t){return{integerValue:""+t}}function Zr(t,e){return Ns(e)?zr(e):jr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this._=void 0}}function qr(t,e,n){return t instanceof Gr?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Yr?Xr(t,e):t instanceof Jr?Qr(t,e):function(t,e){const n=Kr(t,e),i=eo(n)+eo(t.k);return zs(n)&&zs(t.k)?zr(i):jr(t.M,i)}(t,e)}function Wr(t,e,n){return t instanceof Yr?Xr(t,e):t instanceof Jr?Qr(t,e):n}function Kr(t,e){return t instanceof to?zs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Gr extends Hr{}class Yr extends Hr{constructor(t){super(),this.elements=t}}function Xr(t,e){const n=no(e);for(const i of t.elements)n.some((t=>Ps(t,i)))||n.push(i);return{arrayValue:{values:n}}}class Jr extends Hr{constructor(t){super(),this.elements=t}}function Qr(t,e){let n=no(e);for(const i of t.elements)n=n.filter((t=>!Ps(t,i)));return{arrayValue:{values:n}}}class to extends Hr{constructor(t,e){super(),this.M=t,this.k=e}}function eo(t){return Ss(t.integerValue||t.doubleValue)}function no(t){return Zs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Yr&&e instanceof Yr||t instanceof Jr&&e instanceof Jr?hs(t.elements,e.elements,Ps):t instanceof to&&e instanceof to?Ps(t.k,e.k):t instanceof Gr&&e instanceof Gr}(t.transform,e.transform)}class so{constructor(t,e){this.version=t,this.transformResults=e}}class ro{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ro}static exists(t){return new ro(void 0,t)}static updateTime(t){return new ro(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ao{}function lo(t,e,n){t instanceof fo?function(t,e,n){const i=t.value.clone(),s=vo(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof mo?function(t,e,n){if(!oo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=vo(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(go(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function co(t,e,n){t instanceof fo?function(t,e,n){if(!oo(t.precondition,e))return;const i=t.value.clone(),s=yo(t.fieldTransforms,n,e);i.setAll(s),e.convertToFoundDocument(po(e),i).setHasLocalMutations()}(t,e,n):t instanceof mo?function(t,e,n){if(!oo(t.precondition,e))return;const i=yo(t.fieldTransforms,n,e),s=e.data;s.setAll(go(t)),s.setAll(i),e.convertToFoundDocument(po(e),s).setHasLocalMutations()}(t,e,n):function(t,e){oo(t.precondition,e)&&e.convertToNoDocument(ps.min())}(t,e)}function uo(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=Kr(i.transform,t||null);null!=s&&(null==n&&(n=Ys.empty()),n.set(i.field,s))}return n||null}function ho(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hs(t,e,((t,e)=>io(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function po(t){return t.isFoundDocument()?t.version:ps.min()}class fo extends ao{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class mo extends ao{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function go(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function vo(t,e,n){const i=new Map;Gi(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Wr(o,a,n[s]))}return i}function yo(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,qr(t,r,e))}return i}class bo extends ao{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class wo extends ao{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ko,Co;function To(t){switch(t){default:return Ki();case Xi.CANCELLED:case Xi.UNKNOWN:case Xi.DEADLINE_EXCEEDED:case Xi.RESOURCE_EXHAUSTED:case Xi.INTERNAL:case Xi.UNAVAILABLE:case Xi.UNAUTHENTICATED:return!1;case Xi.INVALID_ARGUMENT:case Xi.NOT_FOUND:case Xi.ALREADY_EXISTS:case Xi.PERMISSION_DENIED:case Xi.FAILED_PRECONDITION:case Xi.ABORTED:case Xi.OUT_OF_RANGE:case Xi.UNIMPLEMENTED:case Xi.DATA_LOSS:return!0}}function So(t){if(void 0===t)return Hi("GRPC error has no .code"),Xi.UNKNOWN;switch(t){case ko.OK:return Xi.OK;case ko.CANCELLED:return Xi.CANCELLED;case ko.UNKNOWN:return Xi.UNKNOWN;case ko.DEADLINE_EXCEEDED:return Xi.DEADLINE_EXCEEDED;case ko.RESOURCE_EXHAUSTED:return Xi.RESOURCE_EXHAUSTED;case ko.INTERNAL:return Xi.INTERNAL;case ko.UNAVAILABLE:return Xi.UNAVAILABLE;case ko.UNAUTHENTICATED:return Xi.UNAUTHENTICATED;case ko.INVALID_ARGUMENT:return Xi.INVALID_ARGUMENT;case ko.NOT_FOUND:return Xi.NOT_FOUND;case ko.ALREADY_EXISTS:return Xi.ALREADY_EXISTS;case ko.PERMISSION_DENIED:return Xi.PERMISSION_DENIED;case ko.FAILED_PRECONDITION:return Xi.FAILED_PRECONDITION;case ko.ABORTED:return Xi.ABORTED;case ko.OUT_OF_RANGE:return Xi.OUT_OF_RANGE;case ko.UNIMPLEMENTED:return Xi.UNIMPLEMENTED;case ko.DATA_LOSS:return Xi.DATA_LOSS;default:return Ki()}}(Co=ko||(ko={}))[Co.OK=0]="OK",Co[Co.CANCELLED=1]="CANCELLED",Co[Co.UNKNOWN=2]="UNKNOWN",Co[Co.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Co[Co.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Co[Co.NOT_FOUND=5]="NOT_FOUND",Co[Co.ALREADY_EXISTS=6]="ALREADY_EXISTS",Co[Co.PERMISSION_DENIED=7]="PERMISSION_DENIED",Co[Co.UNAUTHENTICATED=16]="UNAUTHENTICATED",Co[Co.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Co[Co.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Co[Co.ABORTED=10]="ABORTED",Co[Co.OUT_OF_RANGE=11]="OUT_OF_RANGE",Co[Co.UNIMPLEMENTED=12]="UNIMPLEMENTED",Co[Co.INTERNAL=13]="INTERNAL",Co[Co.UNAVAILABLE=14]="UNAVAILABLE",Co[Co.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,s]of n)if(this.equalsFn(i,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ms(this.inner,((e,n)=>{for(const[i,s]of n)t(i,s)}))}isEmpty(){return gs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e){this.comparator=t,this.root=e||Ao.EMPTY}insert(t,e){return new Io(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ao.BLACK,null,null))}remove(t){return new Io(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ao.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xo(this.root,t,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xo(this.root,t,this.comparator,!0)}}class xo{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ao{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Ao.RED,this.left=null!=i?i:Ao.EMPTY,this.right=null!=s?s:Ao.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new Ao(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ao.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ao.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ao.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ao.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ki();if(this.right.isRed())throw Ki();const t=this.left.check();if(t!==this.right.check())throw Ki();return t+(this.isRed()?0:1)}}Ao.EMPTY=null,Ao.RED=!0,Ao.BLACK=!1,Ao.EMPTY=new class{constructor(){this.size=0}get key(){throw Ki()}get value(){throw Ki()}get color(){throw Ki()}get left(){throw Ki()}get right(){throw Ki()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Ao(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{constructor(t){this.comparator=t,this.data=new Io(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oo(this.data.getIterator())}getIteratorFrom(t){return new Oo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof $o))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new $o(this.comparator);return e.data=t,e}}class Oo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Do=new Io(Rs.comparator);function Lo(){return Do}const No=new Io(Rs.comparator);function Ro(){return No}function Mo(){return new Eo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Po=new Io(Rs.comparator),Vo=new $o(Rs.comparator);function Bo(...t){let e=Vo;for(const n of t)e=e.add(n);return e}const Fo=new $o(us);function Uo(){return Fo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,zo.createSynthesizedTargetChangeForCurrentChange(t,e)),new jo(ps.min(),n,Uo(),Lo(),Bo())}}class zo{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new zo(ks.EMPTY_BYTE_STRING,e,Bo(),Bo(),Bo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e,n,i){this.O=t,this.removedTargetIds=e,this.key=n,this.F=i}}class Ho{constructor(t,e){this.targetId=t,this.$=e}}class qo{constructor(t,e,n=ks.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Wo{constructor(){this.B=0,this.L=Yo(),this.U=ks.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return 0!==this.B}get j(){return this.G}W(t){t.approximateByteSize()>0&&(this.G=!0,this.U=t)}H(){let t=Bo(),e=Bo(),n=Bo();return this.L.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Ki()}})),new zo(this.U,this.q,t,e,n)}J(){this.G=!1,this.L=Yo()}Y(t,e){this.G=!0,this.L=this.L.insert(t,e)}X(t){this.G=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class Ko{constructor(t){this.nt=t,this.st=new Map,this.it=Lo(),this.rt=Go(),this.ot=new $o(us)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.K||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.K||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Ki()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,i=this.wt(e);if(i){const t=i.target;if(cr(t))if(0===n){const n=new Rs(t.path);this.ct(e,n,Js.newNoDocument(n,ps.min()))}else Gi(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,i)=>{const s=this.wt(i);if(s){if(n.current&&cr(s.target)){const e=new Rs(s.target.path);null!==this.it.get(e)||this.It(i,e)||this.ct(i,e,Js.newNoDocument(e,t))}n.j&&(e.set(i,n.H()),n.J())}}));let n=Bo();this.rt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const i=new jo(t,e,this.ot,this.it,n);return this.it=Lo(),this.rt=Go(),this.ot=new $o(us),i}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const i=this.lt(t);this.It(t,e)?i.Y(e,1):i.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new Wo,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new $o(us),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Zi("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.K?null:this.nt.Et(t)}dt(t){this.st.set(t,new Wo),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function Go(){return new Io(Rs.comparator)}function Yo(){return new Io(Rs.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Jo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Qo{constructor(t,e){this.databaseId=t,this.N=e}}function ta(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ea(t,e){return t.N?e.toBase64():e.toUint8Array()}function na(t,e){return ta(t,e.toTimestamp())}function ia(t){return Gi(!!t),ps.fromTimestamp(function(t){const e=Ts(t);return new ds(e.seconds,e.nanos)}(t))}function sa(t,e){return function(t){return new ys(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ra(t){const e=ys.fromString(t);return Gi(xa(e)),e}function oa(t,e){return sa(t.databaseId,e.path)}function aa(t,e){const n=ra(e);if(n.get(1)!==t.databaseId.projectId)throw new Ji(Xi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ji(Xi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Rs(ha(n))}function la(t,e){return sa(t.databaseId,e)}function ca(t){const e=ra(t);return 4===e.length?ys.emptyPath():ha(e)}function ua(t){return new ys(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ha(t){return Gi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function da(t,e,n){return{name:oa(t,e),fields:n.value.mapValue.fields}}function pa(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ki()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.N?(Gi(void 0===e||"string"==typeof e),ks.fromBase64String(e||"")):(Gi(void 0===e||e instanceof Uint8Array),ks.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Xi.UNKNOWN:So(t.code);return new Ji(e,t.message||"")}(o);n=new qo(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=aa(t,i.document.name),r=ia(i.document.updateTime),o=new Ys({mapValue:{fields:i.document.fields}}),a=Js.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Zo(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=aa(t,i.document),r=i.readTime?ia(i.readTime):ps.min(),o=Js.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Zo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=aa(t,i.document),r=i.removedTargetIds||[];n=new Zo([],r,s,null)}else{if(!("filter"in e))return Ki();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new _o(i),r=t.targetId;n=new Ho(r,s)}}return n}function fa(t,e){let n;if(e instanceof fo)n={update:da(t,e.key,e.value)};else if(e instanceof bo)n={delete:oa(t,e.key)};else if(e instanceof mo)n={update:da(t,e.key,e.data),updateMask:Ia(e.fieldMask)};else{if(!(e instanceof wo))return Ki();n={verify:oa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Gr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Yr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Jr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof to)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Ki()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:na(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ki()}(t,e.precondition)),n}function ma(t,e){return t&&t.length>0?(Gi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ia(t.updateTime):ia(e);return n.isEqual(ps.min())&&(n=ia(e)),new so(n,t.transformResults||[])}(t,e)))):[]}function ga(t,e){return{documents:[la(t,e.path)]}}function va(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=la(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=la(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(qs(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NAN"}};if(Hs(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(qs(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NAN"}};if(Hs(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ca(t.field),op:ka(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ca(t.field),direction:_a(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||Ds(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ya(t){let e=ca(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Gi(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=wa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new wr(Ta(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ds(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new br(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new br(n,e)}(n.endAt)),Sr(e,s,o,r,a,"F",l,c)}function ba(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ki()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function wa(t){return t?void 0!==t.unaryFilter?[Ea(t)]:void 0!==t.fieldFilter?[Sa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>wa(t))).reduce(((t,e)=>t.concat(e))):Ki():[]}function _a(t){return Xo[t]}function ka(t){return Jo[t]}function Ca(t){return{fieldPath:t.canonicalString()}}function Ta(t){return ws.fromServerFormat(t.fieldPath)}function Sa(t){return ur.create(Ta(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ki()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ea(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ta(t.unaryFilter.field);return ur.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ta(t.unaryFilter.field);return ur.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ta(t.unaryFilter.field);return ur.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ta(t.unaryFilter.field);return ur.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ki()}}function Ia(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function xa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$a=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Oa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ki(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new La(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof La?e:La.resolve(e)}catch(t){return La.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):La.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):La.reject(e)}static resolve(t){return new La(((e,n)=>{e(t)}))}static reject(t){return new La(((e,n)=>{n(t)}))}static waitFor(t){return new La(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=La.resolve(!1);for(const n of t)e=e.next((t=>t?La.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&lo(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&co(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&co(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(ps.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Bo())}isEqual(t){return this.batchId===t.batchId&&hs(this.mutations,t.mutations,((t,e)=>ho(t,e)))&&hs(this.baseMutations,t.baseMutations,((t,e)=>ho(t,e)))}}class Ma{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Gi(t.mutations.length===n.length);let i=Po;const s=t.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,n[r].version);return new Ma(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e,n,i,s=ps.min(),r=ps.min(),o=ks.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Va(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this.Jt=t}}function Fa(t){const e=ya({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Nr(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Ss(t.integerValue));else if("doubleValue"in t){const n=Ss(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Ls(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Es(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?Gs(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Ki()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const i of Object.keys(n))this.re(i,e),this.te(n[i],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const i of n)this.te(i,e)}ae(t,e){this.ne(e,37),Rs.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}Ua.fe=new Ua;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.qe=new za}addToCollectionParentIndex(t,e){return this.qe.add(e),La.resolve()}getCollectionParents(t,e){return La.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return La.resolve()}deleteFieldIndex(t,e){return La.resolve()}getDocumentsMatchingTarget(t,e){return La.resolve(null)}getFieldIndex(t,e){return La.resolve(null)}getFieldIndexes(t,e){return La.resolve([])}getNextCollectionGroupToUpdate(t){return La.resolve(null)}updateCollectionGroup(t,e,n){return La.resolve()}updateIndexEntries(t,e){return La.resolve()}}class za{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new $o(ys.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new $o(ys.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Za{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Za(t,Za.DEFAULT_COLLECTION_PERCENTILE,Za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Za.DEFAULT_COLLECTION_PERCENTILE=10,Za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Za.DEFAULT=new Za(41943040,Za.DEFAULT_COLLECTION_PERCENTILE,Za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Za.DISABLED=new Za(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Ha(0)}static gn(){return new Ha(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qa(t){if(t.code!==Xi.FAILED_PRECONDITION||t.message!==Oa)throw t;Zi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(){this.changes=new Eo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Js.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?La.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(t,e,n){this.fs=t,this.$s=e,this.indexManager=n}Bs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Ls(t,e,n)))}Ls(t,e,n){return this.fs.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Us(t,e){t.forEach(((t,n)=>{for(const i of e)i.applyToLocalView(n)}))}qs(t,e){return this.fs.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Us(e,t)))}Ks(t,e,n){return function(t){return Rs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Qs(t,e.path):Or(e)?this.js(t,e,n):this.Ws(t,e,n)}Qs(t,e){return this.Bs(t,new Rs(e)).next((t=>{let e=Ro();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}js(t,e,n){const i=e.collectionGroup;let s=Ro();return this.indexManager.getCollectionParents(t,i).next((r=>La.forEach(r,(r=>{const o=function(t,e){return new Tr(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.Ws(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}Ws(t,e,n){let i;return this.fs.getAllFromCollection(t,e.path,n).next((n=>(i=n,this.$s.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let s=i.get(n);null==s&&(s=Js.newInvalidDocument(n),i=i.insert(n,s)),co(t,s,e.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}})).next((()=>(i.forEach(((t,n)=>{Vr(e,n)||(i=i.remove(t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.zs=n,this.Hs=i}static Js(t,e){let n=Bo(),i=Bo();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ga(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{Ys(t){this.Xs=t}Ks(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(ps.min())?this.Zs(t,e):this.Xs.qs(t,i).next((s=>{const r=this.ti(e,s);return(Ir(e)||xr(e))&&this.ei(e.limitType,r,i,n)?this.Zs(t,e):(zi()<=o["in"].DEBUG&&Zi("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Pr(e)),this.Xs.Ks(t,e,tr(n,-1)).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ti(t,e){let n=new $o(Fr(t));return e.forEach(((e,i)=>{Vr(t,i)&&(n=n.add(i))})),n}ei(t,e,n,i){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zs(t,e){return zi()<=o["in"].DEBUG&&Zi("QueryEngine","Using full collection scan to execute query:",Pr(e)),this.Xs.Ks(t,e,nr.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e,n,i){this.persistence=t,this.ni=e,this.M=i,this.si=new Io(us),this.ii=new Eo((t=>or(t)),lr),this.ri=new Map,this.oi=t.getRemoteDocumentCache(),this.ls=t.getTargetCache(),this.ds=t.getBundleCache(),this.ui(n)}ui(t){this.indexManager=this.persistence.getIndexManager(t),this.$s=this.persistence.getMutationQueue(t,this.indexManager),this.ai=new Ka(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.si)))}}function Ja(t,e,n,i){return new Xa(t,e,n,i)}async function Qa(t,e){const n=Yi(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.$s.getAllMutationBatches(t).next((s=>(i=s,n.ui(e),n.$s.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Bo();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ai.qs(t,o).next((t=>({ci:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function tl(t,e){const n=Yi(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.oi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=La.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Gi(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.$s.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.$s.performConsistencyCheck(t))).next((()=>n.ai.qs(t,i)))}))}function el(t){const e=Yi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ls.getLastRemoteSnapshotVersion(t)))}function nl(t,e){const n=Yi(t),i=e.snapshotVersion;let s=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.oi.newChangeBuffer({trackRemovals:!0});s=n.si;const o=[];e.targetChanges.forEach(((r,a)=>{const l=s.get(a);if(!l)return;o.push(n.ls.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.ls.addMatchingKeys(t,r.addedDocuments,a))));let c=l.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(ks.EMPTY_BYTE_STRING,ps.min()).withLastLimboFreeSnapshotVersion(ps.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,r)&&o.push(n.ls.updateTargetData(t,c))}));let a=Lo();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(il(t,r,e.documentUpdates).next((t=>{a=t}))),!i.isEqual(ps.min())){const e=n.ls.getLastRemoteSnapshotVersion(t).next((e=>n.ls.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return La.waitFor(o).next((()=>r.apply(t))).next((()=>n.ai.Gs(t,a))).next((()=>a))})).then((t=>(n.si=s,t)))}function il(t,e,n){let i=Bo();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Lo();return n.forEach(((n,s)=>{const r=t.get(n);s.isNoDocument()&&s.version.isEqual(ps.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Zi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",s.version)})),i}))}function sl(t,e){const n=Yi(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.$s.getNextMutationBatchAfterBatchId(t,e))))}function rl(t,e){const n=Yi(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.ls.getTargetData(t,e).next((s=>s?(i=s,La.resolve(i)):n.ls.allocateTargetId(t).next((s=>(i=new Va(e,s,0,t.currentSequenceNumber),n.ls.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.si.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(t.targetId,t),n.ii.set(e,t.targetId)),t}))}async function ol(t,e,n){const i=Yi(t),s=i.si.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Na(t))throw t;Zi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.si=i.si.remove(e),i.ii.delete(s.target)}function al(t,e,n){const i=Yi(t);let s=ps.min(),r=Bo();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Yi(t),s=i.ii.get(n);return void 0!==s?La.resolve(i.si.get(s)):i.ls.getTargetData(e,n)}(i,t,Lr(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.ls.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.ni.Ks(t,e,n?s:ps.min(),n?r:Bo()))).next((t=>(ll(i,Br(e),t),{documents:t,hi:r})))))}function ll(t,e,n){let i=ps.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.ri.set(e,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,e){return La.resolve(this._i.get(e))}saveBundleMetadata(t,e){var n;return this._i.set(e.id,{id:(n=e).id,version:n.version,createTime:ia(n.createTime)}),La.resolve()}getNamedQuery(t,e){return La.resolve(this.wi.get(e))}saveNamedQuery(t,e){return this.wi.set(e.name,function(t){return{name:t.name,query:Fa(t.bundledQuery),readTime:ia(t.readTime)}}(e)),La.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.overlays=new Io(Rs.comparator),this.mi=new Map}getOverlay(t,e){return La.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.Xt(t,e,i)})),La.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.mi.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.mi.delete(n)),La.resolve()}getOverlaysForCollection(t,e,n){const i=Mo(),s=e.length+1,r=new Rs(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return La.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new Io(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Mo(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Mo(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return La.resolve(o)}Xt(t,e,n){if(null===n)return;const i=this.overlays.get(n.key);if(null!==i){const t=this.mi.get(i.largestBatchId).delete(n.key);this.mi.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Pa(e,n));let s=this.mi.get(e);void 0===s&&(s=Bo(),this.mi.set(e,s)),this.mi.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.gi=new $o(dl.yi),this.pi=new $o(dl.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,e){const n=new dl(t,e);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ei(new dl(t,e))}Ai(t,e){t.forEach((t=>this.removeReference(t,e)))}Ri(t){const e=new Rs(new ys([])),n=new dl(e,t),i=new dl(e,t+1),s=[];return this.pi.forEachInRange([n,i],(t=>{this.Ei(t),s.push(t.key)})),s}bi(){this.gi.forEach((t=>this.Ei(t)))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const e=new Rs(new ys([])),n=new dl(e,t),i=new dl(e,t+1);let s=Bo();return this.pi.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new dl(t,0),n=this.gi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class dl{constructor(t,e){this.key=t,this.Vi=e}static yi(t,e){return Rs.comparator(t.key,e.key)||us(t.Vi,e.Vi)}static Ii(t,e){return us(t.Vi,e.Vi)||Rs.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.$s=[],this.vi=1,this.Si=new $o(dl.yi)}checkEmpty(t){return La.resolve(0===this.$s.length)}addMutationBatch(t,e,n,i){const s=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const r=new Ra(s,e,n,i);this.$s.push(r);for(const o of i)this.Si=this.Si.add(new dl(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return La.resolve(r)}lookupMutationBatch(t,e){return La.resolve(this.Di(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Ci(n),s=i<0?0:i;return La.resolve(this.$s.length>s?this.$s[s]:null)}getHighestUnacknowledgedBatchId(){return La.resolve(0===this.$s.length?-1:this.vi-1)}getAllMutationBatches(t){return La.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new dl(e,0),i=new dl(e,Number.POSITIVE_INFINITY),s=[];return this.Si.forEachInRange([n,i],(t=>{const e=this.Di(t.Vi);s.push(e)})),La.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new $o(us);return e.forEach((t=>{const e=new dl(t,0),i=new dl(t,Number.POSITIVE_INFINITY);this.Si.forEachInRange([e,i],(t=>{n=n.add(t.Vi)}))})),La.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Rs.isDocumentKey(s)||(s=s.child(""));const r=new dl(new Rs(s),0);let o=new $o(us);return this.Si.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.Vi)),!0)}),r),La.resolve(this.xi(o))}xi(t){const e=[];return t.forEach((t=>{const n=this.Di(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Gi(0===this.Ni(e.batchId,"removed")),this.$s.shift();let n=this.Si;return La.forEach(e.mutations,(i=>{const s=new dl(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Si=n}))}dn(t){}containsKey(t,e){const n=new dl(e,0),i=this.Si.firstAfterOrEqual(n);return La.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.$s.length,La.resolve()}Ni(t,e){return this.Ci(t)}Ci(t){return 0===this.$s.length?0:t-this.$s[0].batchId}Di(t){const e=this.Ci(t);return e<0||e>=this.$s.length?null:this.$s[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t){this.ki=t,this.docs=new Io(Rs.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.ki(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return La.resolve(n?n.document.mutableCopy():Js.newInvalidDocument(e))}getEntries(t,e){let n=Lo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Js.newInvalidDocument(t))})),La.resolve(n)}getAllFromCollection(t,e,n){let i=Lo();const s=new Rs(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||ir(er(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return La.resolve(i)}getAllFromCollectionGroup(t,e,n,i){Ki()}Mi(t,e){return La.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ml(this)}getSize(t){return La.resolve(this.size)}}class ml extends Wa{constructor(t){super(),this.qn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.qn.addEntry(t,i)):this.qn.removeEntry(n)})),La.waitFor(e)}getFromCache(t,e){return this.qn.getEntry(t,e)}getAllFromCache(t,e){return this.qn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.persistence=t,this.Oi=new Eo((t=>or(t)),lr),this.lastRemoteSnapshotVersion=ps.min(),this.highestTargetId=0,this.Fi=0,this.$i=new hl,this.targetCount=0,this.Bi=Ha.mn()}forEachTarget(t,e){return this.Oi.forEach(((t,n)=>e(n))),La.resolve()}getLastRemoteSnapshotVersion(t){return La.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return La.resolve(this.Fi)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),La.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fi&&(this.Fi=e),La.resolve()}In(t){this.Oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Bi=new Ha(e),this.highestTargetId=e),t.sequenceNumber>this.Fi&&(this.Fi=t.sequenceNumber)}addTargetData(t,e){return this.In(e),this.targetCount+=1,La.resolve()}updateTargetData(t,e){return this.In(e),La.resolve()}removeTargetData(t,e){return this.Oi.delete(e.target),this.$i.Ri(e.targetId),this.targetCount-=1,La.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Oi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Oi.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),La.waitFor(s).next((()=>i))}getTargetCount(t){return La.resolve(this.targetCount)}getTargetData(t,e){const n=this.Oi.get(e)||null;return La.resolve(n)}addMatchingKeys(t,e,n){return this.$i.Ti(e,n),La.resolve()}removeMatchingKeys(t,e,n){this.$i.Ai(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),La.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.$i.Ri(e),La.resolve()}getMatchingKeysForTargetId(t,e){const n=this.$i.Pi(e);return La.resolve(n)}containsKey(t,e){return La.resolve(this.$i.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.Li={},this.overlays={},this.ts=new as(0),this.es=!1,this.es=!0,this.referenceDelegate=t(this),this.ls=new gl(this),this.indexManager=new ja,this.fs=function(t){return new fl(t)}((t=>this.referenceDelegate.Ui(t))),this.M=new Ba(e),this.ds=new cl(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ul,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Li[t.toKey()];return n||(n=new pl(e,this.referenceDelegate),this.Li[t.toKey()]=n),n}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(t,e,n){Zi("MemoryPersistence","Starting transaction:",t);const i=new yl(this.ts.next());return this.referenceDelegate.qi(),n(i).next((t=>this.referenceDelegate.Gi(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ki(t,e){return La.or(Object.values(this.Li).map((n=>()=>n.containsKey(t,e))))}}class yl extends Da{constructor(t){super(),this.currentSequenceNumber=t}}class bl{constructor(t){this.persistence=t,this.Qi=new hl,this.ji=null}static Wi(t){return new bl(t)}get zi(){if(this.ji)return this.ji;throw Ki()}addReference(t,e,n){return this.Qi.addReference(n,e),this.zi.delete(n.toString()),La.resolve()}removeReference(t,e,n){return this.Qi.removeReference(n,e),this.zi.add(n.toString()),La.resolve()}markPotentiallyOrphaned(t,e){return this.zi.add(e.toString()),La.resolve()}removeTarget(t,e){this.Qi.Ri(e.targetId).forEach((t=>this.zi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.zi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}qi(){this.ji=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return La.forEach(this.zi,(n=>{const i=Rs.fromPath(n);return this.Hi(t,i).next((t=>{t||e.removeEntry(i,ps.min())}))})).next((()=>(this.ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hi(t,e).next((t=>{t?this.zi.delete(e.toString()):this.zi.add(e.toString())}))}Ui(t){return 0}Hi(t,e){return La.or([()=>La.resolve(this.Qi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ki(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.activeTargetIds=Uo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _l{constructor(){this.Fr=new wl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new wl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Zi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Gr(){Zi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,i,s){const r=this.oo(t,e);Zi("RestConnection","Sending: ",r,n);const o={};return this.uo(o,i,s),this.ao(t,r,o,n).then((t=>(Zi("RestConnection","Received: ",t),t)),(e=>{throw qi("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}co(t,e,n,i,s){return this.ro(t,e,n,i,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ui,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Tl[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,e,n,i){return new Promise(((s,r)=>{const o=new Vi;o.listenOnce(Li.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Di.NO_ERROR:const e=o.getResponseJson();Zi("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Di.TIMEOUT:Zi("Connection",'RPC "'+t+'" timed out'),r(new Ji(Xi.DEADLINE_EXCEEDED,"Request time out"));break;case Di.HTTP_ERROR:const n=o.getStatus();if(Zi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Xi).indexOf(e)>=0?e:Xi.UNKNOWN}(t.status);r(new Ji(e,t.message))}else r(new Ji(Xi.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Ji(Xi.UNAVAILABLE,"Connection failed."));break;default:Ki()}}finally{Zi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=$i(),r=Oi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mi({})),this.uo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");Zi("Connection","Creating WebChannel: "+l,o);const c=s.createWebChannel(l,o);let u=!1,h=!1;const d=new Sl({jr:t=>{h?Zi("Connection","Not sending because WebChannel is closed:",t):(u||(Zi("Connection","Opening WebChannel transport."),c.open(),u=!0),Zi("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,Pi.EventType.OPEN,(()=>{h||Zi("Connection","WebChannel transport opened.")})),p(c,Pi.EventType.CLOSE,(()=>{h||(h=!0,Zi("Connection","WebChannel transport closed"),d.eo())})),p(c,Pi.EventType.ERROR,(t=>{h||(h=!0,qi("Connection","WebChannel transport errored:",t),d.eo(new Ji(Xi.UNAVAILABLE,"The operation could not be completed")))})),p(c,Pi.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Gi(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){Zi("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=ko[t];if(void 0!==e)return So(e)}(t),n=s.message;void 0===e&&(e=Xi.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),h=!0,d.eo(new Ji(e,n)),c.close()}else Zi("Connection","WebChannel received:",n),d.no(n)}})),p(r,Ni.STAT_EVENT,(t=>{t.stat===Ri.PROXY?Zi("Connection","Detected buffering proxy"):t.stat===Ri.NOPROXY&&Zi("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){return new Qo(t,!0)}class Al{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Jn=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&Zi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e,n,i,s,r,o,a){this.Jn=t,this.Ao=n,this.Ro=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Al(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.Vo&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Xi.RESOURCE_EXHAUSTED?(Hi(e.toString()),Hi("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Xi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Ji(Xi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Go(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Zi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.Jn.enqueueAndForget((()=>this.Po===t?e():(Zi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ol extends $l{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.M=s}Go(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=pa(this.M,t),n=function(t){if(!("targetChange"in t))return ps.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ps.min():e.readTime?ia(e.readTime):ps.min()}(t);return this.listener.Ko(e,n)}Qo(t){const e={};e.database=ua(this.M),e.addTarget=function(t,e){let n;const i=e.target;return n=cr(i)?{documents:ga(t,i)}:{query:va(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ea(t,e.resumeToken):e.snapshotVersion.compareTo(ps.min())>0&&(n.readTime=ta(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=ba(this.M,t);n&&(e.labels=n),this.Oo(e)}jo(t){const e={};e.database=ua(this.M),e.removeTarget=t,this.Oo(e)}}class Dl extends $l{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.M=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Gi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=ma(t.writeResults,t.commitTime),n=ia(t.commitTime);return this.listener.Jo(n,e)}return Gi(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=ua(this.M),this.Oo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>fa(this.M,t)))};this.Oo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=i,this.Zo=!1}tu(){if(this.Zo)throw new Ji(Xi.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ro(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Xi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ji(Xi.UNKNOWN,t.toString())}))}co(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.co(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Xi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ji(Xi.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Nl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.au(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Hi(e),this.su=!1):Zi("OnlineStateTracker",e)}au(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{Zl(this)&&(Zi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Yi(t);e.lu.add(4),await Pl(e),e._u.set("Unknown"),e.lu.delete(4),await Ml(e)}(this))}))})),this._u=new Nl(n,i)}}async function Ml(t){if(Zl(t))for(const e of t.fu)await e(!0)}async function Pl(t){for(const e of t.fu)await e(!1)}function Vl(t,e){const n=Yi(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),zl(n)?jl(n):lc(n).Co()&&Fl(n,e))}function Bl(t,e){const n=Yi(t),i=lc(n);n.hu.delete(e),i.Co()&&Ul(n,e),0===n.hu.size&&(i.Co()?i.ko():Zl(n)&&n._u.set("Unknown"))}function Fl(t,e){t.wu.Z(e.targetId),lc(t).Qo(e)}function Ul(t,e){t.wu.Z(e),lc(t).jo(e)}function jl(t){t.wu=new Ko({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),lc(t).start(),t._u.iu()}function zl(t){return Zl(t)&&!lc(t).Do()&&t.hu.size>0}function Zl(t){return 0===Yi(t).lu.size}function Hl(t){t.wu=void 0}async function ql(t){t.hu.forEach(((e,n)=>{Fl(t,e)}))}async function Wl(t,e){Hl(t),zl(t)?(t._u.uu(e),jl(t)):t._u.set("Unknown")}async function Kl(t,e,n){if(t._u.set("Online"),e instanceof qo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.hu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.hu.delete(i),t.wu.removeTarget(i))}(t,e)}catch(n){Zi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Gl(t,n)}else if(e instanceof Zo?t.wu.ut(e):e instanceof Ho?t.wu._t(e):t.wu.ht(e),!n.isEqual(ps.min()))try{const e=await el(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(i);s&&t.hu.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(ks.EMPTY_BYTE_STRING,n.snapshotVersion)),Ul(t,e);const i=new Va(n.target,e,1,n.sequenceNumber);Fl(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zi("RemoteStore","Failed to raise snapshot:",e),await Gl(t,e)}}async function Gl(t,e,n){if(!Na(e))throw e;t.lu.add(1),await Pl(t),t._u.set("Offline"),n||(n=()=>el(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zi("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ml(t)}))}function Yl(t,e){return e().catch((n=>Gl(t,n,e)))}async function Xl(t){const e=Yi(t),n=cc(e);let i=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;Jl(e);)try{const t=await sl(e.localStore,i);if(null===t){0===e.cu.length&&n.ko();break}i=t.batchId,Ql(e,t)}catch(t){await Gl(e,t)}tc(e)&&ec(e)}function Jl(t){return Zl(t)&&t.cu.length<10}function Ql(t,e){t.cu.push(e);const n=cc(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function tc(t){return Zl(t)&&!cc(t).Do()&&t.cu.length>0}function ec(t){cc(t).start()}async function nc(t){cc(t).Xo()}async function ic(t){const e=cc(t);for(const n of t.cu)e.Ho(n.mutations)}async function sc(t,e,n){const i=t.cu.shift(),s=Ma.from(i,e,n);await Yl(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Xl(t)}async function rc(t,e){e&&cc(t).zo&&await async function(t,e){if(n=e.code,To(n)&&n!==Xi.ABORTED){const n=t.cu.shift();cc(t).No(),await Yl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Xl(t)}var n}(t,e),tc(t)&&ec(t)}async function oc(t,e){const n=Yi(t);n.asyncQueue.verifyOperationInProgress(),Zi("RemoteStore","RemoteStore received new credentials");const i=Zl(n);n.lu.add(3),await Pl(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ml(n)}async function ac(t,e){const n=Yi(t);e?(n.lu.delete(2),await Ml(n)):e||(n.lu.add(2),await Pl(n),n._u.set("Unknown"))}function lc(t){return t.mu||(t.mu=function(t,e,n){const i=Yi(t);return i.tu(),new Ol(e,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:ql.bind(null,t),Jr:Wl.bind(null,t),Ko:Kl.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),zl(t)?jl(t):t._u.set("Unknown")):(await t.mu.stop(),Hl(t))}))),t.mu}function cc(t){return t.gu||(t.gu=function(t,e,n){const i=Yi(t);return i.tu(),new Dl(e,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)}(t.datastore,t.asyncQueue,{zr:nc.bind(null,t),Jr:rc.bind(null,t),Yo:ic.bind(null,t),Jo:sc.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Xl(t)):(await t.gu.stop(),t.cu.length>0&&(Zi("RemoteStore",`Stopping write stream with ${t.cu.length} pending writes`),t.cu=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uc{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new uc(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ji(Xi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hc(t,e){if(Hi("AsyncQueue",`${e}: ${t}`),Na(t))return new Ji(Xi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Rs.comparator(e.key,n.key):(t,e)=>Rs.comparator(t.key,e.key),this.keyedMap=Ro(),this.sortedSet=new Io(this.comparator)}static emptySet(t){return new dc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof dc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new dc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.yu=new Io(Rs.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Ki():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class fc{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new fc(t,e,dc.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.Iu=void 0,this.listeners=[]}}class gc{constructor(){this.queries=new Eo((t=>Mr(t)),Rr),this.onlineState="Unknown",this.Tu=new Set}}async function vc(t,e){const n=Yi(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new mc),s)try{r.Iu=await n.onListen(i)}catch(t){const n=hc(t,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&_c(n)}async function yc(t,e){const n=Yi(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function bc(t,e){const n=Yi(t);let i=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(s)&&(i=!0);e.Iu=s}}i&&_c(n)}function wc(t,e,n){const i=Yi(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function _c(t){t.Tu.forEach((t=>{t.next()}))}class kc{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new fc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.Vu(t)&&(this.Ru.next(t),e=!0):this.vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=fc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(t){this.key=t}}class Tc{constructor(t){this.key=t}}class Sc{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Bo(),this.mutatedKeys=Bo(),this.Lu=Fr(t),this.Uu=new dc(this.Lu)}get qu(){return this.Fu}Gu(t,e){const n=e?e.Ku:new pc,i=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=Ir(this.query)&&i.size===this.query.limit?i.last():null,l=xr(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const c=i.get(t),u=Vr(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.Qu(c,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.Lu(u,a)>0||l&&this.Lu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(a||l)&&(o=!0)),p&&(u?(r=r.add(u),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Ir(this.query)||xr(this.query))for(;r.size>this.query.limit;){const t=Ir(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:r,Ku:n,ei:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Ku.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ki()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const r=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new fc(this.query,t.Uu,i,s,t.mutatedKeys,0===o,a,!1),zu:r}:{zu:r}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new pc,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Bo(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Tc(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Cc(n))})),e}Ju(t){this.Fu=t.hi,this.Bu=Bo();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Yu(){return fc.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Ec{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ic{constructor(t){this.key=t,this.Xu=!1}}class xc{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Zu={},this.ta=new Eo((t=>Mr(t)),Rr),this.ea=new Map,this.na=new Set,this.sa=new Io(Rs.comparator),this.ia=new Map,this.ra=new hl,this.oa={},this.ua=new Map,this.aa=Ha.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return!0===this.ca}}async function Ac(t,e){const n=Kc(t);let i,s;const r=n.ta.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Yu();else{const t=await rl(n.localStore,Lr(e));n.isPrimaryClient&&Vl(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await $c(n,e,i,"current"===r)}return s}async function $c(t,e,n,i){t.ha=(e,n,i)=>async function(t,e,n,i){let s=e.view.Gu(n);s.ei&&(s=await al(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return jc(t,e.targetId,o.zu),o.snapshot}(t,e,n,i);const s=await al(t.localStore,e,!0),r=new Sc(e,s.hi),o=r.Gu(s.documents),a=zo.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),l=r.applyChanges(o,t.isPrimaryClient,a);jc(t,n,l.zu);const c=new Ec(e,n,r);return t.ta.set(e,c),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),l.snapshot}async function Oc(t,e){const n=Yi(t),i=n.ta.get(e),s=n.ea.get(i.targetId);if(s.length>1)return n.ea.set(i.targetId,s.filter((t=>!Rr(t,e)))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ol(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Bl(n.remoteStore,i.targetId),Fc(n,i.targetId)})).catch(qa)):(Fc(n,i.targetId),await ol(n.localStore,i.targetId,!0))}async function Dc(t,e,n){const i=Gc(t);try{const t=await function(t,e){const n=Yi(t),i=ds.now(),s=e.reduce(((t,e)=>t.add(e.key)),Bo());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ai.qs(t,s).next((s=>{r=s;const o=[];for(const t of e){const e=uo(t,r.get(t.key));null!=e&&o.push(new mo(t.key,e,Xs(e.value.mapValue),ro.exists(!0)))}return n.$s.addMutationBatch(t,i,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.oa[t.currentUser.toKey()];i||(i=new Io(us)),i=i.insert(e,n),t.oa[t.currentUser.toKey()]=i}(i,t.batchId,n),await Hc(i,t.changes),await Xl(i.remoteStore)}catch(t){const e=hc(t,"Failed to persist write");n.reject(e)}}async function Lc(t,e){const n=Yi(t);try{const t=await nl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.ia.get(e);i&&(Gi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Xu=!0:t.modifiedDocuments.size>0?Gi(i.Xu):t.removedDocuments.size>0&&(Gi(i.Xu),i.Xu=!1))})),await Hc(n,t,e)}catch(t){await qa(t)}}function Nc(t,e,n){const i=Yi(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ta.forEach(((n,i)=>{const s=i.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Yi(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Eu(e)&&(i=!0)})),i&&_c(n)}(i.eventManager,e),t.length&&i.Zu.Ko(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Rc(t,e,n){const i=Yi(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ia.get(e),r=s&&s.key;if(r){let t=new Io(Rs.comparator);t=t.insert(r,Js.newNoDocument(r,ps.min()));const n=Bo().add(r),s=new jo(ps.min(),new Map,new $o(us),t,n);await Lc(i,s),i.sa=i.sa.remove(r),i.ia.delete(e),Zc(i)}else await ol(i.localStore,e,!1).then((()=>Fc(i,e,n))).catch(qa)}async function Mc(t,e){const n=Yi(t),i=e.batch.batchId;try{const t=await tl(n.localStore,e);Bc(n,i,null),Vc(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Hc(n,t)}catch(t){await qa(t)}}async function Pc(t,e,n){const i=Yi(t);try{const t=await function(t,e){const n=Yi(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.$s.lookupMutationBatch(t,e).next((e=>(Gi(null!==e),i=e.keys(),n.$s.removeMutationBatch(t,e)))).next((()=>n.$s.performConsistencyCheck(t))).next((()=>n.ai.qs(t,i)))}))}(i.localStore,e);Bc(i,e,n),Vc(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Hc(i,t)}catch(n){await qa(n)}}function Vc(t,e){(t.ua.get(e)||[]).forEach((t=>{t.resolve()})),t.ua.delete(e)}function Bc(t,e,n){const i=Yi(t);let s=i.oa[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.oa[i.currentUser.toKey()]=s}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ea.get(e))t.ta.delete(i),n&&t.Zu.la(i,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach((e=>{t.ra.containsKey(e)||Uc(t,e)}))}function Uc(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);null!==n&&(Bl(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),Zc(t))}function jc(t,e,n){for(const i of n)i instanceof Cc?(t.ra.addReference(i.key,e),zc(t,i)):i instanceof Tc?(Zi("SyncEngine","Document no longer in limbo: "+i.key),t.ra.removeReference(i.key,e),t.ra.containsKey(i.key)||Uc(t,i.key)):Ki()}function zc(t,e){const n=e.key,i=n.path.canonicalString();t.sa.get(n)||t.na.has(i)||(Zi("SyncEngine","New document in limbo: "+n),t.na.add(i),Zc(t))}function Zc(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new Rs(ys.fromString(e)),i=t.aa.next();t.ia.set(i,new Ic(n)),t.sa=t.sa.insert(n,i),Vl(t.remoteStore,new Va(Lr(Er(n.path)),i,2,as.A))}}async function Hc(t,e,n){const i=Yi(t),s=[],r=[],o=[];i.ta.isEmpty()||(i.ta.forEach(((t,a)=>{o.push(i.ha(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Ga.Js(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Zu.Ko(s),await async function(t,e){const n=Yi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>La.forEach(e,(e=>La.forEach(e.zs,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>La.forEach(e.Hs,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Na(t))throw t;Zi("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.si.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.si=n.si.insert(t,s)}}}(i.localStore,r))}async function qc(t,e){const n=Yi(t);if(!n.currentUser.isEqual(e)){Zi("SyncEngine","User change. New user:",e.toKey());const t=await Qa(n.localStore,e);n.currentUser=e,function(t,e){t.ua.forEach((t=>{t.forEach((t=>{t.reject(new Ji(Xi.CANCELLED,e))}))})),t.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Hc(n,t.ci)}}function Wc(t,e){const n=Yi(t),i=n.ia.get(e);if(i&&i.Xu)return Bo().add(i.key);{let t=Bo();const i=n.ea.get(e);if(!i)return t;for(const e of i){const i=n.ta.get(e);t=t.unionWith(i.view.qu)}return t}}function Kc(t){const e=Yi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rc.bind(null,e),e.Zu.Ko=bc.bind(null,e.eventManager),e.Zu.la=wc.bind(null,e.eventManager),e}function Gc(t){const e=Yi(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pc.bind(null,e),e}class Yc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=xl(t.databaseInfo.databaseId),this.sharedClientState=this.da(t),this.persistence=this._a(t),await this.persistence.start(),this.gcScheduler=this.wa(t),this.localStore=this.ma(t)}wa(t){return null}ma(t){return Ja(this.persistence,new Ya,t.initialUser,this.M)}_a(t){return new vl(bl.Wi,this.M)}da(t){return new _l}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Nc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=qc.bind(null,this.syncEngine),await ac(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gc}createDatastore(t){const e=xl(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new El(i));var i;return function(t,e,n,i){return new Ll(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Nc(this.syncEngine,t,0),r=Cl.vt()?new Cl:new kl,new Rl(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new xc(t,e,n,i,s,r);return o&&(a.ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Yi(t);Zi("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Pl(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ya(this.observer.next,t)}error(t){this.observer.error?this.ya(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}pa(){this.muted=!0}ya(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Fi.UNAUTHENTICATED,this.clientId=cs.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ji(Xi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=hc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function tu(t,e){t.asyncQueue.verifyOperationInProgress(),Zi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Qa(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function eu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nu(t);Zi("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>oc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>oc(e.remoteStore,n))),t.onlineComponents=e}async function nu(t){return t.offlineComponents||(Zi("FirestoreClient","Using default OfflineComponentProvider"),await tu(t,new Yc)),t.offlineComponents}async function iu(t){return t.onlineComponents||(Zi("FirestoreClient","Using default OnlineComponentProvider"),await eu(t,new Xc)),t.onlineComponents}function su(t){return iu(t).then((t=>t.syncEngine))}async function ru(t){const e=await iu(t),n=e.eventManager;return n.onListen=Ac.bind(null,e.syncEngine),n.onUnlisten=Oc.bind(null,e.syncEngine),n}function ou(t,e,n={}){const i=new Qi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Jc({next:r=>{e.enqueueAndForget((()=>yc(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Ji(Xi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Ji(Xi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new kc(Er(n.path),r,{includeMetadataChanges:!0,Du:!0});return vc(t,o)}(await ru(t),t.asyncQueue,e,n,i))),i.promise}function au(t,e,n={}){const i=new Qi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Jc({next:n=>{e.enqueueAndForget((()=>yc(t,o))),n.fromCache&&"server"===i.source?s.reject(new Ji(Xi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new kc(n,r,{includeMetadataChanges:!0,Du:!0});return vc(t,o)}(await ru(t),t.asyncQueue,e,n,i))),i.promise}const lu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e,n){if(!n)throw new Ji(Xi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uu(t,e,n,i){if(!0===e&&!0===i)throw new Ji(Xi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hu(t){if(!Rs.isDocumentKey(t))throw new Ji(Xi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function du(t){if(Rs.isDocumentKey(t))throw new Ji(Xi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ki()}function fu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ji(Xi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pu(t);throw new Ji(Xi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ji(Xi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ji(Xi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,uu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mu({}),this._settingsFrozen=!1,t instanceof Os?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ji(Xi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Os(t.options.projectId)}(t))}get app(){if(!this._app)throw new Ji(Xi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ji(Xi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new es;switch(t.type){case"gapi":const e=t.client;return Gi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ss(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ji(Xi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=lu.get(t);e&&(Zi("ComponentProvider","Removing Datastore"),lu.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vu(this.firestore,t,this._key)}}class yu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new yu(this.firestore,t,this._query)}}class bu extends yu{constructor(t,e,n){super(t,e,Er(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vu(this.firestore,null,new Rs(t))}withConverter(t){return new bu(this.firestore,t,this._path)}}function wu(t,e,...n){if(t=(0,a.m9)(t),cu("collection","path",e),t instanceof gu){const i=ys.fromString(e,...n);return du(i),new bu(t,null,i)}{if(!(t instanceof vu||t instanceof bu))throw new Ji(Xi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ys.fromString(e,...n));return du(i),new bu(t.firestore,null,i)}}function _u(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=cs.R()),cu("doc","path",e),t instanceof gu){const i=ys.fromString(e,...n);return hu(i),new vu(t,null,new Rs(i))}{if(!(t instanceof vu||t instanceof bu))throw new Ji(Xi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ys.fromString(e,...n));return hu(i),new vu(t.firestore,t instanceof bu?t.converter:null,new Rs(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Al(this,"async_queue_retry"),this.Ua=()=>{const t=Il();t&&Zi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Il();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const e=Il();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise((()=>{}));const e=new Qi;return this.Ga((()=>this.Ma&&this.Ba?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ka.push(t),this.Ka())))}async Ka(){if(0!==this.ka.length){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(k){if(!Na(k))throw k;Zi("AsyncQueue","Operation failed with retryable error: "+k)}this.ka.length>0&&this.So.Io((()=>this.Ka()))}}Ga(t){const e=this.Na.then((()=>(this.$a=!0,t().catch((t=>{this.Fa=t,this.$a=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Hi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.$a=!1,t))))));return this.Na=e,e}enqueueAfterDelay(t,e,n){this.qa(),this.La.indexOf(t)>-1&&(e=0);const i=uc.createAndSchedule(this,t,e,n,(t=>this.Qa(t)));return this.Oa.push(i),i}qa(){this.Fa&&Ki()}verifyOperationInProgress(){}async ja(){let t;do{t=this.Na,await t}while(t!==this.Na)}Wa(t){for(const e of this.Oa)if(e.timerId===t)return!0;return!1}za(t){return this.ja().then((()=>{this.Oa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Oa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ja()}))}Ha(t){this.La.push(t)}Qa(t){const e=this.Oa.indexOf(t);this.Oa.splice(e,1)}}class Cu extends gu{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ku,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Eu(this),this._firestoreClient.terminate()}}function Tu(t=(0,s.Mq)()){return(0,s.qX)(t,"firestore").getImmediate()}function Su(t){return t._firestoreClient||Eu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Eu(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new $s(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Qc(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ji(Xi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ws(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xu(ks.fromBase64String(t))}catch(t){throw new Ji(Xi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new xu(ks.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ji(Xi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ji(Xi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return us(this._lat,t._lat)||us(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=/^__.*__$/;class Du{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new mo(t,this.data,this.fieldMask,e,this.fieldTransforms):new fo(t,this.data,e,this.fieldTransforms)}}class Lu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new mo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Nu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ki()}}class Ru{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Ja(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(t){return new Ru(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Xa({path:n,tc:!1});return i.ec(t),i}nc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Xa({path:n,tc:!1});return i.Ja(),i}sc(t){return this.Xa({path:void 0,tc:!0})}ic(t){return Gu(t,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ja(){if(this.path)for(let t=0;t<this.path.length;t++)this.ec(this.path.get(t))}ec(t){if(0===t.length)throw this.ic("Document fields must not be empty");if(Nu(this.Ya)&&Ou.test(t))throw this.ic('Document fields cannot begin and end with "__"')}}class Mu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||xl(t)}uc(t,e,n,i=!1){return new Ru({Ya:t,methodName:e,oc:n,path:ws.emptyPath(),tc:!1,rc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Pu(t){const e=t._freezeSettings(),n=xl(t._databaseId);return new Mu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vu(t,e,n,i,s,r={}){const o=t.uc(r.merge||r.mergeFields?2:0,e,n,s);Hu("Data must be an object, but it was:",o,i);const a=zu(i,o);let l,c;if(r.merge)l=new _s(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=qu(e,i,n);if(!o.contains(s))throw new Ji(Xi.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Yu(t,s)||t.push(s)}l=new _s(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Du(new Ys(a),l,c)}class Bu extends Au{_toFieldTransform(t){if(2!==t.Ya)throw 1===t.Ya?t.ic(`${this._methodName}() can only appear at the top level of your update data`):t.ic(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Bu}}function Fu(t,e,n,i){const s=t.uc(1,e,n);Hu("Data must be an object, but it was:",s,i);const r=[],o=Ys.empty();ms(i,((t,i)=>{const l=Ku(e,t,n);i=(0,a.m9)(i);const c=s.nc(l);if(i instanceof Bu)r.push(l);else{const t=ju(i,c);null!=t&&(r.push(l),o.set(l,t))}}));const l=new _s(r);return new Lu(o,l,s.fieldTransforms)}function Uu(t,e,n,i,s,r){const o=t.uc(1,e,n),l=[qu(e,i,n)],c=[s];if(r.length%2!=0)throw new Ji(Xi.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<r.length;a+=2)l.push(qu(e,r[a])),c.push(r[a+1]);const u=[],h=Ys.empty();for(let p=l.length-1;p>=0;--p)if(!Yu(u,l[p])){const t=l[p];let e=c[p];e=(0,a.m9)(e);const n=o.nc(t);if(e instanceof Bu)u.push(t);else{const i=ju(e,n);null!=i&&(u.push(t),h.set(t,i))}}const d=new _s(u);return new Lu(h,d,o.fieldTransforms)}function ju(t,e){if(Zu(t=(0,a.m9)(t)))return Hu("Unsupported field value:",e,t),zu(t,e);if(t instanceof Au)return function(t,e){if(!Nu(e.Ya))throw e.ic(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ic(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&4!==e.Ya)throw e.ic("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=ju(s,e.sc(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Zr(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ds.fromDate(t);return{timestampValue:ta(e.M,n)}}if(t instanceof ds){const n=new ds(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ta(e.M,n)}}if(t instanceof $u)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof xu)return{bytesValue:ea(e.M,t._byteString)};if(t instanceof vu){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ic(`Unsupported field value: ${pu(t)}`)}(t,e)}function zu(t,e){const n={};return gs(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,((t,i)=>{const s=ju(i,e.Za(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Zu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ds||t instanceof $u||t instanceof xu||t instanceof vu||t instanceof Au)}function Hu(t,e,n){if(!Zu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=pu(n);throw"an object"===i?e.ic(t+" a custom object"):e.ic(t+" "+i)}}function qu(t,e,n){if((e=(0,a.m9)(e))instanceof Iu)return e._internalPath;if("string"==typeof e)return Ku(t,e);throw Gu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wu=new RegExp("[~\\*/\\[\\]]");function Ku(t,e,n){if(e.search(Wu)>=0)throw Gu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Iu(...e.split("."))._internalPath}catch(i){throw Gu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gu(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Ji(Xi.INVALID_ARGUMENT,a+t+l)}function Yu(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ju(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Qu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ju extends Xu{data(){return super.data()}}function Qu(t,e){return"string"==typeof e?Ku(t,e):e instanceof Iu?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eh extends Xu{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new nh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class nh extends eh{data(t={}){return super.data(t)}}class ih{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new th(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new nh(this._firestore,this._userDataWriter,n.key,n,new th(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ji(Xi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new nh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new th(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new nh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new th(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:sh(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function sh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ki()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rh(t){if(xr(t)&&0===t.explicitOrderBy.length)throw new Ji(Xi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oh{convertValue(t,e="none"){switch(Ms(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ss(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Es(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ki()}}convertObject(t,e){const n={};return ms(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new $u(Ss(t.latitude),Ss(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=xs(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(As(t));default:return null}}convertTimestamp(t){const e=Ts(t);return new ds(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ys.fromString(t);Gi(xa(n));const i=new Os(n.get(1),n.get(3)),s=new Rs(n.popFirst(5));return i.isEqual(e)||Hi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lh(t){t=fu(t,vu);const e=fu(t.firestore,Cu);return ou(Su(e),t._key).then((n=>mh(e,t,n)))}class ch extends oh{constructor(t){super(),this.firestore=t}convertBytes(t){return new xu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new vu(this.firestore,null,e)}}function uh(t){t=fu(t,yu);const e=fu(t.firestore,Cu),n=Su(e),i=new ch(e);return rh(t._query),au(n,t._query).then((n=>new ih(e,i,t,n)))}function hh(t,e,n){t=fu(t,vu);const i=fu(t.firestore,Cu),s=ah(t.converter,e,n);return fh(i,[Vu(Pu(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,ro.none())])}function dh(t,e,n,...i){t=fu(t,vu);const s=fu(t.firestore,Cu),r=Pu(s);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Iu?Uu(r,"updateDoc",t._key,e,n,i):Fu(r,"updateDoc",t._key,e),fh(s,[o.toMutation(t._key,ro.exists(!0))])}function ph(t,e){const n=fu(t.firestore,Cu),i=_u(t),s=ah(t.converter,e);return fh(n,[Vu(Pu(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,ro.exists(!1))]).then((()=>i))}function fh(t,e){return function(t,e){const n=new Qi;return t.asyncQueue.enqueueAndForget((async()=>Dc(await su(t),e,n))),n.promise}(Su(t),e)}function mh(t,e,n){const i=n.docs.get(e._key),s=new ch(t);return new eh(t,s,e._key,i,new th(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Ui=t}(s.Jn),(0,s.Xd)(new r.wA("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Cu(i,new ns(t.getProvider("auth-internal")),new os(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,s.KN)(Bi,"3.4.7",t),(0,s.KN)(Bi,"3.4.7","esm2017")}()},1153:function(t,e,n){"use strict";n.d(e,{Jt:function(){return pe},cF:function(){return me},iH:function(){return fe},B0:function(){return de}});var i=n(2238),s=n(4444),r=n(8463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",l=12e4,c=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends s.ZR{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function d(){const t="An unknown error occurred, please check the error payload for server response.";return new u("unknown",t)}function p(t){return new u("object-not-found","Object '"+t+"' does not exist.")}function f(t){return new u("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u("unauthenticated",t)}function g(){return new u("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new u("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new u("canceled","User canceled the upload/download.")}function w(t){return new u("invalid-url","Invalid URL '"+t+"'.")}function _(t){return new u("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function k(){return new u("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function C(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function T(){return new u("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function S(){return new u("no-download-url","The given file does not have any download URLs.")}function E(t){return new u("invalid-argument",t)}function I(){return new u("app-deleted","The Firebase app was deleted.")}function x(t){return new u("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(t,e){return new u("invalid-format","String does not match format '"+t+"': "+e)}function $(t){throw new u("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=O.makeFromUrl(t,e)}catch(i){return new O(t,"")}if(""===n.path)return n;throw _(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function s(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const r="(/(.*))?$",a=new RegExp("^gs://"+i+r,"i"),l={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),f={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:l,postModify:s},{regex:p,indices:f,postModify:c},{regex:v,indices:y,postModify:c}];for(let o=0;o<b.length;o++){const e=b[o],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let s=i[e.indices.path];s||(s=""),n=new O(t,s),e.postModify(n);break}}if(null==n)throw w(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function h(e){s=setTimeout((()=>{s=null,t(p,l())}),e)}function d(){r&&clearTimeout(r)}function p(t,...e){if(c)return void d();if(t)return d(),void u.call(null,t,...e);const n=l()||o;if(n)return d(),void u.call(null,t,...e);let s;i<64&&(i*=2),1===a?(a=2,s=0):s=1e3*(i+Math.random()),h(s)}let f=!1;function m(t){f||(f=!0,d(),c||(null!==s?(t||(a=2),clearTimeout(s),h(0)):t||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,m(!0)}),n),m}function N(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){return void 0!==t}function M(t){return"function"===typeof t}function P(t){return"object"===typeof t&&!Array.isArray(t)}function V(t){return"string"===typeof t||t instanceof String}function B(t){return F()&&t instanceof Blob}function F(){return"undefined"!==typeof Blob}function U(t,e,n,i){if(i<e)throw E(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw E(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(Z||(Z={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(t,e,n,i,s,r,o,a,l,c,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new q(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===Z.NO_ERROR,s=n.getStatus();if(!e||this.isRetryStatusCode_(s)){const e=n.getErrorCode()===Z.ABORT;return void t(!1,new q(!1,null,e))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new q(r,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());R(t)?n(t):n()}catch(r){i(r)}else if(null!==s){const t=d();t.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,t)):i(t)}else if(e.canceled){const t=this.appDelete_?I():b();i(t)}else{const t=y();i(t)}};this.canceled_?e(!1,new q(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&N(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],i=-1!==n.indexOf(t),s=-1!==this.additionalRetryCodes_.indexOf(t);return e||i||s}}class q{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function W(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function K(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function G(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function X(t,e,n,i,s,r){const o=z(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return G(l,e),W(l,n),K(l,r),Y(l,i),new H(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Q(...t){const e=J();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(F())return new Blob(t);throw new u("unsupported-environment","This browser doesn't seem to support creating Blobs")}function tt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class it{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case nt.RAW:return new it(rt(e));case nt.BASE64:case nt.BASE64URL:return new it(at(t,e));case nt.DATA_URL:return new it(ct(e),ut(e))}throw d()}function rt(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const s=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(s){const s=i,r=t.charCodeAt(++n);i=65536|(1023&s)<<10|1023&r,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function ot(t){let e;try{e=decodeURIComponent(t)}catch(n){throw A(nt.DATA_URL,"Malformed data URL.")}return rt(e)}function at(t,e){switch(t){case nt.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw A(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case nt.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw A(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=et(e)}catch(s){throw A(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class lt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw A(nt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ht(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ct(t){const e=new lt(t);return e.base64?at(nt.BASE64,e.rest):ot(e.rest)}function ut(t){const e=new lt(t);return e.contentType}function ht(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){let n=0,i="";B(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(B(this.data_)){const n=this.data_,i=tt(n,t,e);return null===i?null:new dt(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new dt(n,!0)}}static getBlob(...t){if(F()){const e=t.map((t=>t instanceof dt?t.data_:t));return new dt(Q.apply(null,e))}{const e=t.map((t=>V(t)?st(nt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let s=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[s++]=t[e]})),new dt(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return P(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function gt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return e}class yt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||vt}}let bt=null;function wt(t){return!V(t)||t.length<2?t:gt(t)}function _t(){if(bt)return bt;const t=[];function e(t,e){return wt(e)}t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));const n=new yt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const s=new yt("size");return s.xform=i,t.push(s),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),bt=t,bt}function kt(t,e){function n(){const n=t["bucket"],i=t["fullPath"],s=new O(n,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Ct(t,e,n){const i={type:"file"},s=n.length;for(let r=0;r<s;r++){const t=n[r];i[t.local]=t.xform(i,e[t.server])}return kt(i,t),i}function Tt(t,e,n){const i=pt(e);if(null===i)return null;const s=i;return Ct(t,s,n)}function St(t,e,n,i){const s=pt(e);if(null===s)return null;if(!V(s["downloadTokens"]))return null;const r=s["downloadTokens"];if(0===r.length)return null;const o=encodeURIComponent,a=r.split(","),l=a.map((e=>{const s=t["bucket"],r=t["fullPath"],a="/b/"+o(s)+"/o/"+o(r),l=j(a,n,i),c=z({alt:"media",token:e});return l+c}));return l[0]}function Et(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){if(!t)throw d()}function At(t,e){function n(n,i){const s=Tt(t,i,e);return xt(null!==s),s}return n}function $t(t,e){function n(n,i){const s=Tt(t,i,e);return xt(null!==s),St(s,i,t.host,t._protocol)}return n}function Ot(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===e.getStatus()?f(t.bucket):403===e.getStatus()?v(t.path):n,i.serverResponse=n.serverResponse,i}return e}function Dt(t){const e=Ot(t);function n(n,i){let s=e(n,i);return 404===n.getStatus()&&(s=p(t.path)),s.serverResponse=i.serverResponse,s}return n}function Lt(t,e,n){const i=e.fullServerUrl(),s=j(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new It(s,r,At(t,n),o);return a.errorHandler=Dt(e),a}function Nt(t,e,n){const i=e.fullServerUrl(),s=j(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new It(s,r,$t(t,n),o);return a.errorHandler=Dt(e),a}function Rt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Mt(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=Rt(null,e)),i}function Pt(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Mt(e,i,s),u=Et(c,n),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+l+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",p=dt.getBlob(h,i,d);if(null===p)throw C();const f={name:c["fullPath"]},m=j(r,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new It(m,g,At(t,n),v);return y.urlParams=f,y.headers=o,y.body=p.uploadData(),y.errorHandler=Ot(e),y}class Vt{constructor(t,e,n,i){this.current=t,this.total=e,this.finalized=!!n,this.metadata=i||null}}function Bt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(s){xt(!1)}const i=e||["active"];return xt(!!n&&-1!==i.indexOf(n)),n}function Ft(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o=Mt(e,i,s),a={name:o["fullPath"]},l=j(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Et(o,n),d=t.maxUploadRetryTime;function p(t){let e;Bt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){xt(!1)}return xt(V(e)),e}const f=new It(l,c,p,d);return f.urlParams=a,f.headers=u,f.body=h,f.errorHandler=Ot(e),f}function Ut(t,e,n,i){const s={"X-Goog-Upload-Command":"query"};function r(t){const e=Bt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(r){xt(!1)}n||xt(!1);const s=Number(n);return xt(!isNaN(s)),new Vt(s,i.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,l=new It(n,o,r,a);return l.headers=s,l.errorHandler=Ot(e),l}const jt=262144;function zt(t,e,n,i,s,r,o,a){const l=new Vt(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=i.size()),i.size()!==l.total)throw T();const c=l.total-l.current;let u=c;s>0&&(u=Math.min(u,s));const h=l.current,d=h+u,p=u===c?"upload, finalize":"upload",f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},m=i.slice(h,d);if(null===m)throw C();function g(t,n){const s=Bt(t,["active","final"]),o=l.current+u,a=i.size();let c;return c="final"===s?At(e,r)(t,n):null,new Vt(o,a,"final"===s,c)}const v="POST",y=e.maxUploadRetryTime,b=new It(n,v,g,y);return b.headers=f,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Ot(t),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ht(t){switch(t){case"running":case"pausing":case"canceling":return Zt.RUNNING;case"paused":return Zt.PAUSED;case"success":return Zt.SUCCESS;case"canceled":return Zt.CANCELED;case"error":return Zt.ERROR;default:return Zt.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e,n){const i=M(t)||null!=e||null!=n;if(i)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt=null;class Gt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Z.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Z.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Z.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw $("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw $("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Yt extends Gt{initXhr(){this.xhr_.responseType="text"}}function Xt(){return Kt?Kt():new Yt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=_t(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=Ft(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,Xt,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const i=Ut(this._ref.storage,this._ref._location,t,this._blob),s=this._ref.storage._makeRequest(i,Xt,e,n);this._request=s,s.getPromise().then((t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=jt*this._chunkMultiplier,e=new Vt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((i,s)=>{let r;try{r=zt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(r,Xt,i,s);this._request=o,o.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=jt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Lt(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,Xt,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=Pt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,Xt,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=b(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Ht(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,i){const s=new qt(e||void 0,n||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(Ht(this._state)){case Zt.SUCCESS:Wt(this._resolve.bind(null,this.snapshot))();break;case Zt.CANCELED:case Zt.ERROR:const e=this._reject;Wt(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=Ht(this._state);switch(e){case Zt.RUNNING:case Zt.PAUSED:t.next&&Wt(t.next.bind(t,this.snapshot))();break;case Zt.SUCCESS:t.complete&&Wt(t.complete.bind(t))();break;case Zt.CANCELED:case Zt.ERROR:t.error&&Wt(t.error.bind(t,this._error))();break;default:t.error&&Wt(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e){this._service=t,this._location=e instanceof O?e:O.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Qt(t,e)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gt(this._location.path)}get storage(){return this._service}get parent(){const t=ft(this._location.path);if(null===t)return null;const e=new O(this._location.bucket,t);return new Qt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw x(t)}}function te(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Jt(t,new dt(e),n)}function ee(t){t._throwIfRoot("getDownloadURL");const e=Nt(t.storage,t._location,_t());return t.storage.makeRequestWithTokens(e,Xt).then((t=>{if(null===t)throw S();return t}))}function ne(t,e){const n=mt(t._location.path,e),i=new O(t._location.bucket,n);return new Qt(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return/^[A-Za-z]+:\/\//.test(t)}function se(t,e){return new Qt(t,e)}function re(t,e){if(t instanceof le){const n=t;if(null==n._bucket)throw k();const i=new Qt(n,n._bucket);return null!=e?re(i,e):i}return void 0!==e?ne(t,e):t}function oe(t,e){if(e&&ie(e)){if(t instanceof le)return se(t,e);throw E("To use ref(service, url), the first argument must be a Storage instance.")}return re(t,e)}function ae(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:O.makeFromBucketSpec(n,t)}class le{constructor(t,e,n,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=i?O.makeFromBucketSpec(i,this._host):ae(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=ae(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Qt(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new D(I());{const s=X(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const ce="@firebase/storage",ue="0.9.4",he="storage";function de(t,e,n){return t=(0,s.m9)(t),te(t,e,n)}function pe(t){return t=(0,s.m9)(t),ee(t)}function fe(t,e){return t=(0,s.m9)(t),oe(t,e)}function me(t=(0,i.Mq)(),e){t=(0,s.m9)(t);const n=(0,i.qX)(t,he),r=n.getImmediate({identifier:e});return r}function ge(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new le(n,s,r,e,i.Jn)}function ve(){(0,i.Xd)(new r.wA(he,ge,"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(ce,ue,""),(0,i.KN)(ce,ue,"esm2017")}ve()},9968:function(){},7273:function(){},8582:function(){},9845:function(){},5205:function(t,e,n){"use strict";n.d(e,{z:function(){return r}});var i,s=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function r(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var r=function(t){var n=[],i=arguments.length-1;while(i-- >0)n[i]=arguments[i+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&i.then((function(){s()?(l(t,r,n),navigator.serviceWorker.ready.then((function(t){r("ready",t)})).catch((function(t){return o(r,t)}))):(a(t,r,n),navigator.serviceWorker.ready.then((function(t){r("ready",t)})).catch((function(t){return o(r,t)})))}))}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return o(e,t)}))}function l(t,e,n){fetch(t).then((function(i){404===i.status?(e("error",new Error("Service worker not found at "+t)),c()):-1===i.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+i.headers.get("content-type"))),c()):a(t,e,n)})).catch((function(t){return o(e,t)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(i="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},1234:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(5648),s=n(8119),r=n(172),o=n(2936),a=n(8085),l=n(144),c=l.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),u=n(3325),h=n(1824),d=(0,u.Z)(i.Z,o.Z,c).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(s.Z,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(r.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||a.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,h.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},5206:function(t,e,n){"use strict";var i=n(172),s=n(680),r=n(144);e["Z"]=r.Z.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:n,props:r,data:o}){const a=Object.assign(o,{staticClass:`v-app-bar__nav-icon ${o.staticClass||""}`.trim(),props:{...r,icon:!0},on:n}),l=e().default;return t(s.Z,a,l||[t(i.Z,"$menu")])}})},7524:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});n(1703);var i=n(8085),s=n(3325),r=(0,s.Z)(i.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},8254:function(t,e,n){"use strict";n.d(e,{Z:function(){return j}});n(9845);var i=n(3325),s=n(5827),r=n(172),o=n(6952),a=n(7352),l=n(8085),c=n(2936),u=n(6505),h=n(9131),d=n(1824),p=(0,i.Z)(o.Z,h.Z,u.Z,l.Z,(0,a.d)("chipGroup"),(0,c.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...u.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(u.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,d.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(r.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s.Zq,t)},genClose(){return this.$createElement(r.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:n,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const s=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(s,i),e)}}),f=p,m=n(6768),g=m.Z,v=n(6286),y=n(144),b=n(6428),w=n(6290),_=n(4589),k=y.Z.extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:v.Z},props:{...o.Z.options.props,...l.Z.options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(t,{props:e,data:n,listeners:i}){const s=[];let r=e.offIcon;if(e.indeterminate?r=e.indeterminateIcon:e.value&&(r=e.onIcon),s.push(t(b.Z,o.Z.options.methods.setTextColor(e.value&&e.color,{props:{disabled:e.disabled,dark:e.dark,light:e.light}}),r)),e.ripple&&!e.disabled){const n=t("div",o.Z.options.methods.setTextColor(e.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));s.push(n)}return t("div",(0,w.ZP)(n,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":e.disabled},on:{click:t=>{t.stopPropagation(),n.on&&n.on.input&&!e.disabled&&(0,_.TI)(n.on.input).forEach((t=>t(!e.value)))}}}),[t("div",{staticClass:"v-input--selection-controls__input"},s)])}}),C=n(1418),T=C.Z,S=(0,i.Z)(l.Z).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),E=S,I=n(1179),x=n(7620),A=n(3099),$=n(6816),O=(0,i.Z)(o.Z,l.Z).extend({name:"v-select-list",directives:{ripple:v.Z},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map((t=>this.getValue(t)))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const t={attrs:{role:void 0},on:{mousedown:t=>t.preventDefault()}};return this.$createElement(x.Z,t,[this.genTileContent(this.noDataText)])}},methods:{genAction(t,e){return this.$createElement(A.Z,[this.$createElement(k,{props:{color:this.color,value:e,ripple:!1},on:{input:()=>this.$emit("select",t)}})])},genDivider(t){return this.$createElement(T,{props:t})},genFilteredText(t){if(t=t||"",!this.searchInput||this.noFilter)return(0,_.r)(t);const{start:e,middle:n,end:i}=this.getMaskedCharacters(t);return`${(0,_.r)(e)}${this.genHighlight(n)}${(0,_.r)(i)}`},genHeader(t){return this.$createElement(E,{props:t},t.header)},genHighlight(t){return`<span class="v-list-item__mask">${(0,_.r)(t)}</span>`},getMaskedCharacters(t){const e=(this.searchInput||"").toString().toLocaleLowerCase(),n=t.toLocaleLowerCase().indexOf(e);if(n<0)return{start:t,middle:"",end:""};const i=t.slice(0,n),s=t.slice(n,n+e.length),r=t.slice(n+e.length);return{start:i,middle:s,end:r}},genTile({item:t,index:e,disabled:n=null,value:i=!1}){i||(i=this.hasItem(t)),t===Object(t)&&(n=null!==n?n:this.getDisabled(t));const s={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${e}`,role:"option"},on:{mousedown:t=>{t.preventDefault()},click:()=>n||this.$emit("select",t)},props:{activeClass:this.tileActiveClass,disabled:n,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(x.Z,s,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(t,i):null,this.genTileContent(t,e)]);const r=this,o=this.$scopedSlots.item({parent:r,item:t,attrs:{...s.attrs,...s.props},on:s.on});return this.needsTile(o)?this.$createElement(x.Z,s,o):o},genTileContent(t,e=0){const n=this.genFilteredText(this.getText(t));return this.$createElement(I.km,[this.$createElement(I.V9,{domProps:{innerHTML:n}})])},hasItem(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled(t){return Boolean((0,_.qF)(t,this.itemDisabled,!1))},getText(t){return String((0,_.qF)(t,this.itemText,t))},getValue(t){return(0,_.qF)(t,this.itemValue,this.getText(t))}},render(){const t=[],e=this.items.length;for(let n=0;n<e;n++){const e=this.items[n];this.hideSelected&&this.hasItem(e)||(null==e?t.push(this.genTile({item:e,index:n})):e.header?t.push(this.genHeader(e)):e.divider?t.push(this.genDivider(e)):t.push(this.genTile({item:e,index:n})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement($.Z,{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),D=n(8230),L=n(5978),N=n(4419),R=n(5907),M=y.Z.extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),P=n(5600);const V={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},B=(0,i.Z)(L.Z,N.Z,R.Z,M);var F=B.extend().extend({name:"v-select",directives:{ClickOutside:P.Z},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>V},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...L.Z.options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return`list-${this._uid}`},computedCounterValue(){const t=this.multiple?this.selectedItems:(this.getText(this.selectedItems[0])||"").toString();return"function"===typeof this.counterValue?this.counterValue(t):t.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?{[t]:!0}:{};return{attrs:{...e,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&(0,d.N6)("assert: staticList should not be called if slots are used"),this.$createElement(O,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce(((t,e)=>(t[e.trim()]=!0,t)),{})),{...V,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0,...t}}},watch:{internalValue(t){this.initialValue=t,this.setSelectedItems(),this.multiple&&this.$nextTick((()=>{var t;null==(t=this.$refs.menu)||t.updateDimensions()}))},isMenuActive(t){window.setTimeout((()=>this.onMenuActiveChange(t)))},items:{immediate:!0,handler(t){this.cacheItems&&this.$nextTick((()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(t))})),this.setSelectedItems()}}},methods:{blur(t){L.Z.options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick((()=>this.$refs.input&&this.$refs.input.focus())),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates(t){const e=new Map;for(let n=0;n<t.length;++n){const i=t[n];if(null==i)continue;if(i.header||i.divider){e.set(i,i);continue}const s=this.getValue(i);!e.has(s)&&e.set(s,i)}return Array.from(e.values())},findExistingIndex(t){const e=this.getValue(t);return(this.internalValue||[]).findIndex((t=>this.valueComparator(this.getValue(t),e)))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(t,e){const n=this.isDisabled||this.getDisabled(t),i=!n&&this.isInteractive;return this.$createElement(f,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&i,disabled:n,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:t=>{i&&(t.stopPropagation(),this.selectedIndex=e)},"click:close":()=>this.onChipInput(t)},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection(t,e,n){const i=e===this.selectedIndex&&this.computedColor,s=this.isDisabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":s},key:JSON.stringify(this.getValue(t))}),`${this.getText(t)}${n?"":", "}`)},genDefaultSlot(){const t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(t,e,n){const i=D.Z.options.methods.genIcon.call(this,t,e,n);return"append"===t&&(i.children[0].data=(0,w.ZP)(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const t=L.Z.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=(0,w.ZP)(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":(0,_.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,_.vO)(t.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),t},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const t=L.Z.options.methods.genInputSlot.call(this);return t.data.attrs={...t.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},t},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const t=["prepend-item","no-data","append-item"].filter((t=>this.$slots[t])).map((t=>this.$createElement("template",{slot:t},this.$slots[t])));return this.$createElement(O,{...this.listData},t)},genMenu(){const t=this.$_menuProps;return t.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?t.attach=this.$el:t.attach=this.attach,this.$createElement(g,{attrs:{role:void 0},props:t,on:{input:t=>{this.isMenuActive=t,this.isFocused=t},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let t=this.selectedItems.length;const e=new Array(t);let n;n=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(t--)e[t]=n(this.selectedItems[t],t,t===e.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},e)},genSlotSelection(t,e){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:t=>{t.stopPropagation(),this.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(t){return(0,_.qF)(t,this.itemDisabled,!1)},getText(t){return(0,_.qF)(t,this.itemText,t)},getValue(t){return(0,_.qF)(t,this.itemValue,this.getText(t))},onBlur(t){t&&this.$emit("blur",t)},onChipInput(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress(t){if(this.multiple||!this.isInteractive||this.disableLookup)return;const e=1e3,n=performance.now();n-this.keyboardLookupLastTime>e&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=n;const i=this.allItems.findIndex((t=>{const e=(this.getText(t)||"").toString();return e.toLowerCase().startsWith(this.keyboardLookupPrefix)})),s=this.allItems[i];-1!==i&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?s:this.getValue(s)),this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(i))))},onKeyDown(t){if(this.isReadonly&&t.keyCode!==_.Do.tab)return;const e=t.keyCode,n=this.$refs.menu;return this.$emit("keydown",t),n?(this.isMenuActive&&[_.Do.up,_.Do.down,_.Do.home,_.Do.end,_.Do.enter].includes(e)&&this.$nextTick((()=>{n.changeListIndex(t),this.$emit("update:list-index",n.listIndex)})),[_.Do.enter,_.Do.space].includes(e)&&this.activateMenu(),!this.isMenuActive&&[_.Do.up,_.Do.down,_.Do.home,_.Do.end].includes(e)?this.onUpDown(t):e===_.Do.esc?this.onEscDown(t):e===_.Do.tab?this.onTabDown(t):e===_.Do.space?this.onSpaceDown(t):void 0):void 0},onMenuActiveChange(t){if(this.multiple&&!t||this.getMenuIndex()>-1)return;const e=this.$refs.menu;if(e&&this.isDirty){this.$refs.menu.getTiles();for(let t=0;t<e.tiles.length;t++)if("true"===e.tiles[t].getAttribute("aria-selected")){this.setMenuIndex(t);break}}},onMouseUp(t){this.hasMouseDown&&3!==t.which&&this.isInteractive&&this.isAppendInner(t.target)&&this.$nextTick((()=>this.isMenuActive=!this.isMenuActive)),L.Z.options.methods.onMouseUp.call(this,t)},onScroll(){if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;const t=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;t&&(this.lastItem+=20)}else requestAnimationFrame((()=>this.getContent().scrollTop=0))},onSpaceDown(t){t.preventDefault()},onTabDown(t){const e=this.$refs.menu;if(!e)return;const n=e.activeTile;!this.multiple&&n&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),n.click()):this.blur(t)},onUpDown(t){const e=this.$refs.menu;if(!e)return;if(t.preventDefault(),this.multiple)return this.activateMenu();const n=t.keyCode;e.isBooted=!0,window.requestAnimationFrame((()=>{if(e.getTiles(),!e.hasClickableTiles)return this.activateMenu();switch(n){case _.Do.up:e.prevTile();break;case _.Do.down:e.nextTile();break;case _.Do.home:e.firstTile();break;case _.Do.end:e.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])}))},selectItem(t){if(this.multiple){const e=(this.internalValue||[]).slice(),n=this.findExistingIndex(t);if(-1!==n?e.splice(n,1):e.push(t),this.setValue(e.map((t=>this.returnObject?t:this.getValue(t)))),this.hideSelected)this.setMenuIndex(-1);else{const e=this.allItems.indexOf(t);~e&&(this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(e))))}}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems(){const t=[],e=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const n of e){const e=this.allItems.findIndex((t=>this.valueComparator(this.getValue(t),this.getValue(n))));e>-1&&t.push(this.allItems[e])}this.selectedItems=t},setValue(t){this.valueComparator(t,this.internalValue)||(this.internalValue=t,this.$emit("change",t))},isAppendInner(t){const e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}});const U={...V,offsetY:!0,offsetOverflow:!0,transition:!1};var j=F.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,n)=>n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:F.options.props.menuProps.type,default:()=>U},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...F.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,_.qF)(t,this.itemText),n=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),n)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=F.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...U,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=F.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const n=e[this.$refs.menu.listIndex];n?this.setMenuIndex(t.findIndex((t=>t===n))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===_.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===_.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==_.Do.backspace&&t!==_.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const n=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==n)return void(this.selectedIndex=n);const i=this.selectedItems.length,s=t!==i-1?t:t-1,r=this.selectedItems[s];r?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=s},clearableCallback(){this.internalSearch=null,F.options.methods.clearableCallback.call(this)},genInput(){const t=L.Z.options.methods.genInput.call(this);return t.data=(0,w.ZP)(t.data,{attrs:{"aria-activedescendant":(0,_.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,_.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=F.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?F.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[_.Do.home,_.Do.end].includes(e)||F.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){F.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){F.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){F.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,n;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],s=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",s),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),t.preventDefault()}}})},680:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var i=n(5648),s=n(8083),r=n(6952),o=n(4589),a=r.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=a,c=n(7352),u=n(2936),h=n(3377),d=n(3536),p=n(6505),f=n(9131),m=n(3325),g=n(1824);const v=(0,m.Z)(i.Z,p.Z,d.Z,f.Z,(0,c.d)("btnToggle"),(0,u.d)("inputValue"));var y=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return h.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,g.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),s=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?i:s(this.color,i),e)}})},8119:function(t,e,n){"use strict";var i=n(680);e["Z"]=i.Z},2371:function(t,e,n){"use strict";n(9968);var i=n(5648),s=n(1226),r=n(6505),o=n(3325);e["Z"]=(0,o.Z)(s.Z,r.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=s.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,n){"use strict";n.d(e,{EB:function(){return l},Qq:function(){return o},ZB:function(){return a},h7:function(){return r}});var i=n(2371),s=n(4589);const r=(0,s.Ji)("v-card__actions"),o=(0,s.Ji)("v-card__subtitle"),a=(0,s.Ji)("v-card__text"),l=(0,s.Ji)("v-card__title");i.Z},4484:function(t,e,n){"use strict";n.d(e,{Z:function(){return z}});var i=n(172),s=n(6952),r=n(3325),o=n(4589),a=(0,r.Z)(s.Z).extend({methods:{genPickerButton(t,e,n,i=!1,s=""){const r=this[t]===e,a=n=>{n.stopPropagation(),this.$emit(`update:${(0,o.GL)(t)}`,e)};return this.$createElement("div",{staticClass:`v-picker__title__btn ${s}`.trim(),class:{"v-picker__title__btn--active":r,"v-picker__title__btn--readonly":i},on:r||i?void 0:{click:a}},Array.isArray(n)?n:[n])}}}),l=(0,r.Z)(a).extend({name:"v-date-picker-title",props:{date:{type:String,default:""},disabled:Boolean,readonly:Boolean,selectingYear:Boolean,value:{type:String},year:{type:[Number,String],default:""},yearIcon:{type:String}},data:()=>({isReversing:!1}),computed:{computedTransition(){return this.isReversing?"picker-reverse-transition":"picker-transition"}},watch:{value(t,e){this.isReversing=t<e}},methods:{genYearIcon(){return this.$createElement(i.Z,{props:{dark:!0}},this.yearIcon)},getYearBtn(){return this.genPickerButton("selectingYear",!0,[String(this.year),this.yearIcon?this.genYearIcon():null],!1,"v-date-picker-title__year")},genTitleText(){return this.$createElement("transition",{props:{name:this.computedTransition}},[this.$createElement("div",{domProps:{innerHTML:this.date||"&nbsp;"},key:this.value})])},genTitleDate(){return this.genPickerButton("selectingYear",!1,[this.genTitleText()],!1,"v-date-picker-title__date")}},render(t){return t("div",{staticClass:"v-date-picker-title",class:{"v-date-picker-title--disabled":this.disabled}},[this.getYearBtn(),this.genTitleDate()])}}),c=n(8119),u=n(144),h=u.Z.extend({name:"localable",props:{locale:String},computed:{currentLocale(){return this.locale||this.$vuetify.lang.current}}}),d=n(8085);const p=(t,e,n)=>(e>>=0,t=String(t),n=String(n),t.length>e?String(t):(e-=t.length,e>n.length&&(n+=n.repeat(e/n.length)),n.slice(0,e)+String(t)));var f=(t,e=2)=>p(t,e,"0");function m(t,e,n={start:0,length:0}){const i=t=>{const[e,n,i]=t.trim().split(" ")[0].split("-");return[f(e,4),f(n||1),f(i||1)].join("-")};try{const n=new Intl.DateTimeFormat(t||void 0,e);return t=>n.format(new Date(`${i(t)}T00:00:00+00:00`))}catch(s){return n.start||n.length?t=>i(t).substr(n.start||0,n.length):void 0}}var g=m,v=(t,e)=>{const[n,i]=t.split("-").map(Number);return i+e===0?n-1+"-12":i+e===13?`${n+1}-01`:`${n}-${f(i+e)}`},y=(0,r.Z)(s.Z,h,d.Z).extend({name:"v-date-picker-header",props:{disabled:Boolean,format:Function,min:String,max:String,nextAriaLabel:String,nextIcon:{type:String,default:"$next"},prevAriaLabel:String,prevIcon:{type:String,default:"$prev"},readonly:Boolean,value:{type:[Number,String],required:!0}},data(){return{isReversing:!1}},computed:{formatter(){return this.format?this.format:String(this.value).split("-")[1]?g(this.currentLocale,{month:"long",year:"numeric",timeZone:"UTC"},{length:7}):g(this.currentLocale,{year:"numeric",timeZone:"UTC"},{length:4})}},watch:{value(t,e){this.isReversing=t<e}},methods:{genBtn(t){const e=t>0?this.nextAriaLabel:this.prevAriaLabel,n=e?this.$vuetify.lang.t(e):void 0,s=this.disabled||t<0&&this.min&&this.calculateChange(t)<this.min||t>0&&this.max&&this.calculateChange(t)>this.max;return this.$createElement(c.Z,{attrs:{"aria-label":n},props:{dark:this.dark,disabled:s,icon:!0,light:this.light},on:{click:e=>{e.stopPropagation(),this.$emit("input",this.calculateChange(t))}}},[this.$createElement(i.Z,t<0===!this.$vuetify.rtl?this.prevIcon:this.nextIcon)])},calculateChange(t){const[e,n]=String(this.value).split("-").map(Number);return null==n?`${e+t}`:v(String(this.value),t)},genHeader(){const t=!this.disabled&&(this.color||"accent"),e=this.$createElement("div",this.setTextColor(t,{key:String(this.value)}),[this.$createElement("button",{attrs:{type:"button"},on:{click:()=>this.$emit("toggle")}},[this.$slots.default||this.formatter(String(this.value))])]),n=this.$createElement("transition",{props:{name:this.isReversing===!this.$vuetify.rtl?"tab-reverse-transition":"tab-transition"}},[e]);return this.$createElement("div",{staticClass:"v-date-picker-header__value",class:{"v-date-picker-header__value--disabled":this.disabled}},[n])}},render(){return this.$createElement("div",{staticClass:"v-date-picker-header",class:{"v-date-picker-header--disabled":this.disabled,...this.themeClasses}},[this.genBtn(-1),this.genHeader(),this.genBtn(1)])}}),b=n(5500);function w(t,e,n){return Object.keys(t.$listeners).reduce(((i,s)=>(s.endsWith(e)&&(i[s.slice(0,-e.length)]=e=>t.$emit(s,n,e)),i)),{})}function _(t,e){return Object.keys(t.$listeners).reduce(((n,i)=>(i.endsWith(e)&&(n[i]=t.$listeners[i]),n)),{})}var k=(t,e)=>{const[n,i=1,s=1]=t.split("-");return`${n}-${f(i)}-${f(s)}`.substr(0,{date:10,month:7,year:4}[e])};function C(t,e,n,i){return(!i||i(t))&&(!e||t>=e.substr(0,10))&&(!n||t<=n)}var T=n(6290),S=(0,r.Z)(s.Z,h,d.Z).extend({directives:{Touch:b.Z},props:{allowedDates:Function,current:String,disabled:Boolean,format:Function,events:{type:[Array,Function,Object],default:()=>null},eventColor:{type:[Array,Function,Object,String],default:()=>"warning"},min:String,max:String,range:Boolean,readonly:Boolean,scrollable:Boolean,tableDate:{type:String,required:!0},value:[String,Array]},data:()=>({isReversing:!1,wheelThrottle:null}),computed:{computedTransition(){return this.isReversing===!this.$vuetify.rtl?"tab-reverse-transition":"tab-transition"},displayedMonth(){return Number(this.tableDate.split("-")[1])-1},displayedYear(){return Number(this.tableDate.split("-")[0])}},watch:{tableDate(t,e){this.isReversing=t<e}},mounted(){this.wheelThrottle=(0,o.P2)(this.wheel,250)},methods:{genButtonClasses(t,e,n,i,s,r){return{"v-size--default":!e,"v-date-picker-table__current":i,"v-btn--active":n,"v-btn--flat":!t||this.disabled,"v-btn--text":n===i,"v-btn--rounded":e,"v-btn--disabled":!t||this.disabled,"v-btn--outlined":i&&!n,"v-date-picker--first-in-range":s,"v-date-picker--last-in-range":r,...this.themeClasses}},genButtonEvents(t,e,n){if(!this.disabled)return(0,T.bp)({click:()=>{e&&!this.readonly&&this.$emit("input",t)}},w(this,`:${n}`,t))},genButton(t,e,n,i,s=!1){const r=C(t,this.min,this.max,this.allowedDates),o=this.isSelected(t)&&r,a=t===this.current,l=o?this.setBackgroundColor:this.setTextColor,c=(o||a)&&(this.color||"accent");let u=!1,h=!1;return this.range&&this.value&&Array.isArray(this.value)&&(u=t===this.value[0],h=t===this.value[this.value.length-1]),this.$createElement("button",l(c,{staticClass:"v-btn",class:this.genButtonClasses(r&&!s,e,o,a,u,h),attrs:{type:"button"},domProps:{disabled:this.disabled||!r||s},on:this.genButtonEvents(t,r,n)}),[this.$createElement("div",{staticClass:"v-btn__content"},[i(t)]),this.genEvents(t)])},getEventColors(t){const e=t=>Array.isArray(t)?t:[t];let n,i=[];return n=Array.isArray(this.events)?this.events.includes(t):this.events instanceof Function?this.events(t)||!1:this.events&&this.events[t]||!1,n?(i=!0!==n?e(n):"string"===typeof this.eventColor?[this.eventColor]:"function"===typeof this.eventColor?e(this.eventColor(t)):Array.isArray(this.eventColor)?this.eventColor:e(this.eventColor[t]),i.filter((t=>t))):[]},genEvents(t){const e=this.getEventColors(t);return e.length?this.$createElement("div",{staticClass:"v-date-picker-table__events"},e.map((t=>this.$createElement("div",this.setBackgroundColor(t))))):null},isValidScroll(t,e){const n=e(t),i=1===n.split("-").length?"year":"month";return t<0&&(!this.min||n>=k(this.min,i))||t>0&&(!this.max||n<=k(this.max,i))},wheel(t,e){this.$emit("update:table-date",e(t.deltaY))},touch(t,e){this.$emit("update:table-date",e(t))},genTable(t,e,n){const i=this.$createElement("transition",{props:{name:this.computedTransition}},[this.$createElement("table",{key:this.tableDate},e)]),s={name:"touch",value:{left:t=>t.offsetX<-15&&this.isValidScroll(1,n)&&this.touch(1,n),right:t=>t.offsetX>15&&this.isValidScroll(-1,n)&&this.touch(-1,n)}};return this.$createElement("div",{staticClass:t,class:{"v-date-picker-table--disabled":this.disabled,...this.themeClasses},on:!this.disabled&&this.scrollable?{wheel:t=>{t.preventDefault(),this.isValidScroll(t.deltaY,n)&&this.wheelThrottle(t,n)}}:void 0,directives:[s]},[i])},isSelected(t){if(Array.isArray(this.value)){if(this.range&&2===this.value.length){const[e,n]=[...this.value].sort();return e<=t&&t<=n}return-1!==this.value.indexOf(t)}return t===this.value}}});function E(t,e=0,n=1){let i;return t<100&&t>=0?(i=new Date(Date.UTC(t,e,n)),isFinite(i.getUTCFullYear())&&i.setUTCFullYear(t)):i=new Date(Date.UTC(t,e,n)),i}function I(t,e,n){const i=7+e-n,s=(7+E(t,0,i).getUTCDay()-e)%7;return-s+i-1}function x(t,e,n,i){let s=[0,31,59,90,120,151,181,212,243,273,304,334][e];return e>1&&O(t)&&s++,s+n}function A(t,e,n){const i=I(t,e,n),s=I(t+1,e,n),r=O(t)?366:365;return(r-i+s)/7}function $(t,e,n,i,s){const r=I(t,i,s),o=Math.ceil((x(t,e,n,i)-r)/7);return o<1?o+A(t-1,i,s):o>A(t,i,s)?o-A(t,i,s):o}function O(t){return t%4===0&&t%100!==0||t%400===0}var D=(0,r.Z)(S).extend({name:"v-date-picker-date-table",props:{firstDayOfWeek:{type:[String,Number],default:0},localeFirstDayOfYear:{type:[String,Number],default:0},showAdjacentMonths:Boolean,showWeek:Boolean,weekdayFormat:Function},computed:{formatter(){return this.format||g(this.currentLocale,{day:"numeric",timeZone:"UTC"},{start:8,length:2})},weekdayFormatter(){return this.weekdayFormat||g(this.currentLocale,{weekday:"narrow",timeZone:"UTC"})},weekDays(){const t=parseInt(this.firstDayOfWeek,10);return this.weekdayFormatter?(0,o.MT)(7).map((e=>this.weekdayFormatter(`2017-01-${t+e+15}`))):(0,o.MT)(7).map((e=>["S","M","T","W","T","F","S"][(e+t)%7]))}},methods:{calculateTableDate(t){return v(this.tableDate,Math.sign(t||1))},genTHead(){const t=this.weekDays.map((t=>this.$createElement("th",t)));return this.showWeek&&t.unshift(this.$createElement("th")),this.$createElement("thead",this.genTR(t))},weekDaysBeforeFirstDayOfTheMonth(){const t=new Date(`${this.displayedYear}-${f(this.displayedMonth+1)}-01T00:00:00+00:00`),e=t.getUTCDay();return(e-parseInt(this.firstDayOfWeek)+7)%7},getWeekNumber(t){return $(this.displayedYear,this.displayedMonth,t,parseInt(this.firstDayOfWeek),parseInt(this.localeFirstDayOfYear))},genWeekNumber(t){return this.$createElement("td",[this.$createElement("small",{staticClass:"v-date-picker-table--date__week"},String(t).padStart(2,"0"))])},genTBody(){const t=[],e=new Date(this.displayedYear,this.displayedMonth+1,0).getDate();let n=[],i=this.weekDaysBeforeFirstDayOfTheMonth();this.showWeek&&n.push(this.genWeekNumber(this.getWeekNumber(1)));const s=this.displayedMonth?this.displayedYear:this.displayedYear-1,r=(this.displayedMonth+11)%12,o=new Date(this.displayedYear,this.displayedMonth,0).getDate(),a=this.showWeek?8:7;while(i--){const t=`${s}-${f(r+1)}-${f(o-i)}`;n.push(this.$createElement("td",this.showAdjacentMonths?[this.genButton(t,!0,"date",this.formatter,!0)]:[]))}for(i=1;i<=e;i++){const s=`${this.displayedYear}-${f(this.displayedMonth+1)}-${f(i)}`;n.push(this.$createElement("td",[this.genButton(s,!0,"date",this.formatter)])),n.length%a===0&&(t.push(this.genTR(n)),n=[],this.showWeek&&(i<e||this.showAdjacentMonths)&&n.push(this.genWeekNumber(this.getWeekNumber(i+7))))}const l=11===this.displayedMonth?this.displayedYear+1:this.displayedYear,c=(this.displayedMonth+1)%12;let u=1;while(n.length<a){const t=`${l}-${f(c+1)}-${f(u++)}`;n.push(this.$createElement("td",this.showAdjacentMonths?[this.genButton(t,!0,"date",this.formatter,!0)]:[]))}return n.length&&t.push(this.genTR(n)),this.$createElement("tbody",t)},genTR(t){return[this.$createElement("tr",t)]}},render(){return this.genTable("v-date-picker-table v-date-picker-table--date",[this.genTHead(),this.genTBody()],this.calculateTableDate)}}),L=(0,r.Z)(S).extend({name:"v-date-picker-month-table",computed:{formatter(){return this.format||g(this.currentLocale,{month:"short",timeZone:"UTC"},{start:5,length:2})}},methods:{calculateTableDate(t){return`${parseInt(this.tableDate,10)+Math.sign(t||1)}`},genTBody(){const t=[],e=Array(3).fill(null),n=12/e.length;for(let i=0;i<n;i++){const n=e.map(((t,n)=>{const s=i*e.length+n,r=`${this.displayedYear}-${f(s+1)}`;return this.$createElement("td",{key:s},[this.genButton(r,!1,"month",this.formatter)])}));t.push(this.$createElement("tr",{key:i},n))}return this.$createElement("tbody",t)}},render(){return this.genTable("v-date-picker-table v-date-picker-table--month",[this.genTBody()],this.calculateTableDate)}}),N=(0,r.Z)(s.Z,h).extend({name:"v-date-picker-years",props:{format:Function,min:[Number,String],max:[Number,String],readonly:Boolean,value:[Number,String]},data(){return{defaultColor:"primary"}},computed:{formatter(){return this.format||g(this.currentLocale,{year:"numeric",timeZone:"UTC"},{length:4})}},mounted(){setTimeout((()=>{const t=this.$el.getElementsByClassName("active")[0];t?this.$el.scrollTop=t.offsetTop-this.$el.offsetHeight/2+t.offsetHeight/2:this.min&&!this.max?this.$el.scrollTop=this.$el.scrollHeight:!this.min&&this.max?this.$el.scrollTop=0:this.$el.scrollTop=this.$el.scrollHeight/2-this.$el.offsetHeight/2}))},methods:{genYearItem(t){const e=this.formatter(`${t}`),n=parseInt(this.value,10)===t,i=n&&(this.color||"primary");return this.$createElement("li",this.setTextColor(i,{key:t,class:{active:n},on:(0,T.bp)({click:()=>this.$emit("input",t)},w(this,":year",t))}),e)},genYearItems(){const t=[],e=this.value?parseInt(this.value,10):(new Date).getFullYear(),n=this.max?parseInt(this.max,10):e+100,i=Math.min(n,this.min?parseInt(this.min,10):e-100);for(let s=n;s>=i;s--)t.push(this.genYearItem(s));return t}},render(){return this.$createElement("ul",{staticClass:"v-date-picker-years",ref:"years"},this.genYearItems())}}),R=(n(9968),n(3377)),M=(0,r.Z)(s.Z,R.Z,d.Z).extend({name:"v-picker",props:{flat:Boolean,fullWidth:Boolean,landscape:Boolean,noTitle:Boolean,transition:{type:String,default:"fade-transition"},width:{type:[Number,String],default:290}},computed:{computedTitleColor(){const t=!this.isDark&&(this.color||"primary");return this.color||t}},methods:{genTitle(){return this.$createElement("div",this.setBackgroundColor(this.computedTitleColor,{staticClass:"v-picker__title",class:{"v-picker__title--landscape":this.landscape}}),this.$slots.title)},genBodyTransition(){return this.$createElement("transition",{props:{name:this.transition}},this.$slots.default)},genBody(){return this.$createElement("div",{staticClass:"v-picker__body",class:{"v-picker__body--no-title":this.noTitle,...this.themeClasses},style:this.fullWidth?void 0:{width:(0,o.kb)(this.width)}},[this.genBodyTransition()])},genActions(){return this.$createElement("div",{staticClass:"v-picker__actions v-card__actions",class:{"v-picker__actions--no-title":this.noTitle}},this.$slots.actions)}},render(t){return t("div",{staticClass:"v-picker v-card",class:{"v-picker--flat":this.flat,"v-picker--landscape":this.landscape,"v-picker--full-width":this.fullWidth,...this.themeClasses,...this.elevationClasses}},[this.$slots.title?this.genTitle():null,this.genBody(),this.$slots.actions?this.genActions():null])}}),P=M,V=(0,r.Z)(s.Z,R.Z,d.Z).extend({name:"picker",props:{flat:Boolean,fullWidth:Boolean,headerColor:String,landscape:Boolean,noTitle:Boolean,width:{type:[Number,String],default:290}},methods:{genPickerTitle(){return null},genPickerBody(){return null},genPickerActionsSlot(){return this.$scopedSlots.default?this.$scopedSlots.default({save:this.save,cancel:this.cancel}):this.$slots.default},genPicker(t){const e=[];if(!this.noTitle){const t=this.genPickerTitle();t&&e.push(t)}const n=this.genPickerBody();return n&&e.push(n),e.push(this.$createElement("template",{slot:"actions"},[this.genPickerActionsSlot()])),this.$createElement(P,{staticClass:t,props:{color:this.headerColor||this.color,dark:this.dark,elevation:this.elevation,flat:this.flat,fullWidth:this.fullWidth,landscape:this.landscape,light:this.light,width:this.width,noTitle:this.noTitle}},e)}}});n(1703);const B=[0,31,28,31,30,31,30,31,31,30,31,30,31],F=[0,31,29,31,30,31,30,31,31,30,31,30,31];function U(t,e){return O(t)?F[e]:B[e]}var j=n(1824),z=(0,r.Z)(h,V).extend({name:"v-date-picker",props:{activePicker:String,allowedDates:Function,dayFormat:Function,disabled:Boolean,events:{type:[Array,Function,Object],default:()=>null},eventColor:{type:[Array,Function,Object,String],default:()=>"warning"},firstDayOfWeek:{type:[String,Number],default:0},headerDateFormat:Function,localeFirstDayOfYear:{type:[String,Number],default:0},max:String,min:String,monthFormat:Function,multiple:Boolean,nextIcon:{type:String,default:"$next"},nextMonthAriaLabel:{type:String,default:"$vuetify.datePicker.nextMonthAriaLabel"},nextYearAriaLabel:{type:String,default:"$vuetify.datePicker.nextYearAriaLabel"},pickerDate:String,prevIcon:{type:String,default:"$prev"},prevMonthAriaLabel:{type:String,default:"$vuetify.datePicker.prevMonthAriaLabel"},prevYearAriaLabel:{type:String,default:"$vuetify.datePicker.prevYearAriaLabel"},range:Boolean,reactive:Boolean,readonly:Boolean,scrollable:Boolean,showCurrent:{type:[Boolean,String],default:!0},selectedItemsText:{type:String,default:"$vuetify.datePicker.itemsSelected"},showAdjacentMonths:Boolean,showWeek:Boolean,titleDateFormat:Function,type:{type:String,default:"date",validator:t=>["date","month"].includes(t)},value:[Array,String],weekdayFormat:Function,yearFormat:Function,yearIcon:String},data(){const t=new Date;return{internalActivePicker:this.type.toUpperCase(),inputDay:null,inputMonth:null,inputYear:null,isReversing:!1,now:t,tableDate:(()=>{if(this.pickerDate)return this.pickerDate;const e=(0,o.TI)(this.value),n=e[e.length-1]||("string"===typeof this.showCurrent?this.showCurrent:`${t.getFullYear()}-${t.getMonth()+1}`);return k(n,"date"===this.type?"month":"year")})()}},computed:{multipleValue(){return(0,o.TI)(this.value)},isMultiple(){return this.multiple||this.range},lastValue(){return this.isMultiple?this.multipleValue[this.multipleValue.length-1]:this.value},selectedMonths(){return this.value&&"month"!==this.type?this.isMultiple?this.multipleValue.map((t=>t.substr(0,7))):this.value.substr(0,7):this.value},current(){return!0===this.showCurrent?k(`${this.now.getFullYear()}-${this.now.getMonth()+1}-${this.now.getDate()}`,this.type):this.showCurrent||null},inputDate(){return"date"===this.type?`${this.inputYear}-${f(this.inputMonth+1)}-${f(this.inputDay)}`:`${this.inputYear}-${f(this.inputMonth+1)}`},tableMonth(){return Number((this.pickerDate||this.tableDate).split("-")[1])-1},tableYear(){return Number((this.pickerDate||this.tableDate).split("-")[0])},minMonth(){return this.min?k(this.min,"month"):null},maxMonth(){return this.max?k(this.max,"month"):null},minYear(){return this.min?k(this.min,"year"):null},maxYear(){return this.max?k(this.max,"year"):null},formatters(){return{year:this.yearFormat||g(this.currentLocale,{year:"numeric",timeZone:"UTC"},{length:4}),titleDate:this.titleDateFormat||(this.isMultiple?this.defaultTitleMultipleDateFormatter:this.defaultTitleDateFormatter)}},defaultTitleMultipleDateFormatter(){return t=>t.length?1===t.length?this.defaultTitleDateFormatter(t[0]):this.$vuetify.lang.t(this.selectedItemsText,t.length):"-"},defaultTitleDateFormatter(){const t={year:{year:"numeric",timeZone:"UTC"},month:{month:"long",timeZone:"UTC"},date:{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}},e=g(this.currentLocale,t[this.type],{start:0,length:{date:10,month:7,year:4}[this.type]}),n=t=>e(t).replace(/([^\d\s])([\d])/g,((t,e,n)=>`${e} ${n}`)).replace(", ",",<br>");return this.landscape?n:e}},watch:{internalActivePicker:{immediate:!0,handler(t){this.$emit("update:active-picker",t)}},activePicker(t){this.internalActivePicker=t},tableDate(t,e){const n="month"===this.type?"year":"month";this.isReversing=k(t,n)<k(e,n),this.$emit("update:picker-date",t)},pickerDate(t){t?this.tableDate=t:this.lastValue&&"date"===this.type?this.tableDate=k(this.lastValue,"month"):this.lastValue&&"month"===this.type&&(this.tableDate=k(this.lastValue,"year"))},value(t,e){this.checkMultipleProp(),this.setInputDate(),(this.isMultiple||!this.value||this.pickerDate)&&(!this.isMultiple||!this.multipleValue.length||e&&e.length||this.pickerDate)||(this.tableDate=k(this.inputDate,"month"===this.type?"year":"month"))},type(t){if(this.internalActivePicker=t.toUpperCase(),this.value&&this.value.length){const e=this.multipleValue.map((e=>k(e,t))).filter(this.isDateAllowed);this.$emit("input",this.isMultiple?e:e[0])}}},created(){this.checkMultipleProp(),this.pickerDate!==this.tableDate&&this.$emit("update:picker-date",this.tableDate),this.setInputDate()},methods:{emitInput(t){if(this.range){if(1!==this.multipleValue.length)this.$emit("input",[t]);else{const e=[this.multipleValue[0],t];this.$emit("input",e),this.$emit("change",e)}return}const e=this.multiple?-1===this.multipleValue.indexOf(t)?this.multipleValue.concat([t]):this.multipleValue.filter((e=>e!==t)):t;this.$emit("input",e),this.multiple||this.$emit("change",t)},checkMultipleProp(){if(null==this.value)return;const t=this.value.constructor.name,e=this.isMultiple?"Array":"String";t!==e&&(0,j.Kd)(`Value must be ${this.isMultiple?"an":"a"} ${e}, got ${t}`,this)},isDateAllowed(t){return C(t,this.min,this.max,this.allowedDates)},yearClick(t){this.inputYear=t,"month"===this.type?this.tableDate=`${t}`:this.tableDate=`${t}-${f((this.tableMonth||0)+1)}`,this.internalActivePicker="MONTH",this.reactive&&!this.readonly&&!this.isMultiple&&this.isDateAllowed(this.inputDate)&&this.$emit("input",this.inputDate)},monthClick(t){this.inputYear=parseInt(t.split("-")[0],10),this.inputMonth=parseInt(t.split("-")[1],10)-1,"date"===this.type?(this.inputDay&&(this.inputDay=Math.min(this.inputDay,U(this.inputYear,this.inputMonth+1))),this.tableDate=t,this.internalActivePicker="DATE",this.reactive&&!this.readonly&&!this.isMultiple&&this.isDateAllowed(this.inputDate)&&this.$emit("input",this.inputDate)):this.emitInput(this.inputDate)},dateClick(t){this.inputYear=parseInt(t.split("-")[0],10),this.inputMonth=parseInt(t.split("-")[1],10)-1,this.inputDay=parseInt(t.split("-")[2],10),this.emitInput(this.inputDate)},genPickerTitle(){return this.$createElement(l,{props:{date:this.value?this.formatters.titleDate(this.isMultiple?this.multipleValue:this.value):"",disabled:this.disabled,readonly:this.readonly,selectingYear:"YEAR"===this.internalActivePicker,year:this.formatters.year(this.multipleValue.length?`${this.inputYear}`:this.tableDate),yearIcon:this.yearIcon,value:this.multipleValue[0]},slot:"title",on:{"update:selecting-year":t=>this.internalActivePicker=t?"YEAR":this.type.toUpperCase()}})},genTableHeader(){return this.$createElement(y,{props:{nextIcon:this.nextIcon,color:this.color,dark:this.dark,disabled:this.disabled,format:this.headerDateFormat,light:this.light,locale:this.locale,min:"DATE"===this.internalActivePicker?this.minMonth:this.minYear,max:"DATE"===this.internalActivePicker?this.maxMonth:this.maxYear,nextAriaLabel:"DATE"===this.internalActivePicker?this.nextMonthAriaLabel:this.nextYearAriaLabel,prevAriaLabel:"DATE"===this.internalActivePicker?this.prevMonthAriaLabel:this.prevYearAriaLabel,prevIcon:this.prevIcon,readonly:this.readonly,value:"DATE"===this.internalActivePicker?`${f(this.tableYear,4)}-${f(this.tableMonth+1)}`:`${f(this.tableYear,4)}`},on:{toggle:()=>this.internalActivePicker="DATE"===this.internalActivePicker?"MONTH":"YEAR",input:t=>this.tableDate=t}})},genDateTable(){return this.$createElement(D,{props:{allowedDates:this.allowedDates,color:this.color,current:this.current,dark:this.dark,disabled:this.disabled,events:this.events,eventColor:this.eventColor,firstDayOfWeek:this.firstDayOfWeek,format:this.dayFormat,light:this.light,locale:this.locale,localeFirstDayOfYear:this.localeFirstDayOfYear,min:this.min,max:this.max,range:this.range,readonly:this.readonly,scrollable:this.scrollable,showAdjacentMonths:this.showAdjacentMonths,showWeek:this.showWeek,tableDate:`${f(this.tableYear,4)}-${f(this.tableMonth+1)}`,value:this.value,weekdayFormat:this.weekdayFormat},ref:"table",on:{input:this.dateClick,"update:table-date":t=>this.tableDate=t,..._(this,":date")}})},genMonthTable(){return this.$createElement(L,{props:{allowedDates:"month"===this.type?this.allowedDates:null,color:this.color,current:this.current?k(this.current,"month"):null,dark:this.dark,disabled:this.disabled,events:"month"===this.type?this.events:null,eventColor:"month"===this.type?this.eventColor:null,format:this.monthFormat,light:this.light,locale:this.locale,min:this.minMonth,max:this.maxMonth,range:this.range,readonly:this.readonly&&"month"===this.type,scrollable:this.scrollable,value:this.selectedMonths,tableDate:`${f(this.tableYear,4)}`},ref:"table",on:{input:this.monthClick,"update:table-date":t=>this.tableDate=t,..._(this,":month")}})},genYears(){return this.$createElement(N,{props:{color:this.color,format:this.yearFormat,locale:this.locale,min:this.minYear,max:this.maxYear,value:this.tableYear},on:{input:this.yearClick,..._(this,":year")}})},genPickerBody(){const t="YEAR"===this.internalActivePicker?[this.genYears()]:[this.genTableHeader(),"DATE"===this.internalActivePicker?this.genDateTable():this.genMonthTable()];return this.$createElement("div",{key:this.internalActivePicker},t)},setInputDate(){if(this.lastValue){const t=this.lastValue.split("-");this.inputYear=parseInt(t[0],10),this.inputMonth=parseInt(t[1],10)-1,"date"===this.type&&(this.inputDay=parseInt(t[2],10))}else this.inputYear=this.inputYear||this.now.getFullYear(),this.inputMonth=null==this.inputMonth?this.inputMonth:this.now.getMonth(),this.inputDay=this.inputDay||this.now.getDate()}},render(){return this.genPicker("v-picker--date")}})},4497:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(3242),s=n(5795),r=n(5907),o=n(3944),a=n(390),l=n(423),c=n(5703),u=n(5600),h=n(3325),d=n(1824),p=n(4589);const f=(0,h.Z)(r.Z,o.Z,a.Z,l.Z,c.Z,s.Z);var m=f.extend({name:"v-dialog",directives:{ClickOutside:u.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,d.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):a.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{this.$refs.content.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,this.$refs.content.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===p.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(i.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog",tabindex:this.isActive?0:void 0,"aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,p.kb)(this.maxWidth),width:(0,p.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1418:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(8085),s=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},6232:function(t,e,n){"use strict";var i=n(3325),s=n(6210),r=n(6257);e["Z"]=(0,i.Z)(s.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const n=this.watchers.find((t=>t._uid===e._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},2102:function(t,e,n){"use strict";n(7273);var i=n(144),s=n(6290),r=n(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:r}){let o="";for(const s in e)o+=String(e[s]);let a=d.get(o);if(!a){let t;for(t in a=[],u)u[t].forEach((n=>{const i=e[n],s=h(t,n,i);s&&a.push(s)}));const n=a.some((t=>t.startsWith("col-")));a.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,s.ZP)(n,{class:a}),i)}})},4228:function(t,e,n){"use strict";n(8582),n(7273);var i=n(5109),s=n(6290);e["Z"]=(0,i.Z)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},5972:function(t,e,n){"use strict";n(8582);var i=n(5109);e["Z"]=(0,i.Z)("flex")},4470:function(t,e,n){"use strict";n(8582);var i=n(5109);e["Z"]=(0,i.Z)("layout")},2877:function(t,e,n){"use strict";n(7273);var i=n(144),s=n(6290),r=n(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((n,i)=>(n[t+(0,r.jC)(i)]=e(),n)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),u=l("align",(()=>({type:String,default:null,validator:c}))),h=t=>[...a,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),f=l("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let i=g[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const y=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:n,children:i}){let r="";for(const s in e)r+=String(e[s]);let o=y.get(r);if(!o){let t;for(t in o=[],m)m[t].forEach((n=>{const i=e[n],s=v(t,n,i);s&&o.push(s)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(r,o)}return t(e.tag,(0,s.ZP)(n,{staticClass:"row",class:o}),i)}})},9762:function(t,e,n){"use strict";n(8582);var i=n(4589);e["Z"]=(0,i.Ji)("spacer","div","v-spacer")},5109:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(144);function s(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,s)}})}},6428:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var i,s=n(6210),r=n(6952),o=n(9131),a=n(8085),l=n(4589),c=n(144),u=n(3325);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const p=(0,u.Z)(s.Z,r.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&i[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],i=this.getDefaultData();let s="material-icons";const r=t.indexOf("-"),o=r<=-1;o?n.push(t):(s=t.slice(0,r),h(s)&&(s="")),i.class[s]=!0,i.class[t]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const s=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var f=c.Z.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:n}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,i?[i]:n)}})},172:function(t,e,n){"use strict";var i=n(6428);e["Z"]=i.Z},7047:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(8083),s=n(2529),r=n(3325),o=(0,r.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),a=o,l=n(8085),c=n(6290),u=n(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var d=(0,r.Z)(a,l.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,n){if(!h||n||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,u.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const n=()=>{const{naturalHeight:i,naturalWidth:s}=t;i||s?(this.naturalWidth=s,this.calculatedAspectRatio=s/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(n,e)};n()},genContent(){const t=a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=a.options.render.call(this,t),n=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},8230:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var i=n(172),s=n(5115),r=n(6952),o=n(8085),a=n(3325),l=n(4589),c=(0,a.Z)(r.Z,o.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,l.z9)(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=c,h=n(6210),d=n(6884),p=n(6290);const f=(0,a.Z)(h.Z,d.Z);var m=f.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""})).filter((t=>""!==t)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,n={}){const s=this[`${t}Icon`],r=`click:${(0,l.GL)(t)}`,o=!(!this.listeners$[r]&&!e),a=(0,p.ZP)({attrs:{"aria-label":o?(0,l.GL)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(r,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${(0,l.GL)(t)}`:void 0},[this.$createElement(i.Z,a,s)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,l.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(s.Z,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>(0,l.z9)(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),g=m},8501:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(6952),s=n(8085),r=n(3325),o=n(4589),a=(0,r.Z)(s.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:r,props:a}=e,l={staticClass:"v-label",class:{"v-label--active":a.value,"v-label--is-disabled":a.disabled,...(0,s.X)(e)},attrs:{for:a.for,"aria-hidden":!a.for},on:r,style:{left:(0,o.kb)(a.left),right:(0,o.kb)(a.right),position:a.absolute?"absolute":"relative"},ref:"label"};return t("label",i.Z.options.methods.setTextColor(a.focused&&a.color,l),n)}})},5115:function(t,e,n){"use strict";var i=n(8501);e["Z"]=i.Z},6816:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(3385),s=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},7620:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(6952),s=n(6505),r=n(7352),o=n(8085),a=n(2936),l=n(6286),c=n(4589),u=n(1824),h=n(3325);const d=(0,h.Z)(i.Z,s.Z,o.Z,(0,r.d)("listItemGroup"),(0,a.d)("inputValue"));var p=d.extend().extend({name:"v-list-item",directives:{Ripple:l.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...s.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(s.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,u.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===c.Do.enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,n):n,i)}})},3099:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:n=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=n.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,n)}})},5457:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var i=n(6952),s=n(2529),r=n(3712),o=n(4589),a=n(3325),l=(0,a.Z)(i.Z,s.Z,r.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,o.kb)(this.size),minWidth:(0,o.kb)(this.size),width:(0,o.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),c=l,u=c.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...c.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=c.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},1179:function(t,e,n){"use strict";n.d(e,{km:function(){return x},V9:function(){return A}});var i=n(4589),s=n(6816),r=n(172),o=n(7620),a=n(144),l=a.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:n}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,n)}}),c=n(6210),u=n(8625),h=n(6952),d=n(2936),p=n(6257),f=n(6286),m=n(5827),g=n(3325);const v=(0,g.Z)(c.Z,u.Z,h.Z,(0,p.f)("list"),d.Z);var y=v.extend().extend({name:"v-list-group",directives:{ripple:f.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(r.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(l,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(o.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,i.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(l,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(m.Fx,this.genItems())])}}),b=n(4419),w=n(1431),_=n(8085),k=n(1824);const C=(0,g.Z)(b.Z,w.Z,_.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,k.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find((t=>!t.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((e=>e===t));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});C.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var T=(0,g.Z)(C,h.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...C.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...C.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),S=n(3099),E=n(5457);const I=(0,i.Ji)("v-list-item__action-text","span"),x=(0,i.Ji)("v-list-item__content","div"),A=(0,i.Ji)("v-list-item__title","div"),$=(0,i.Ji)("v-list-item__subtitle","div");s.Z,o.Z,S.Z,E.Z},7877:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(9177),s=i.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:i,insetFooter:s,bottom:r,left:o}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${n}px`,paddingBottom:`${i+s+r}px`,paddingLeft:`${o}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},6768:function(t,e,n){"use strict";n.d(e,{Z:function(){return k}});var i=n(3242),s=n(5795),r=n(4561),o=n(5907),a=n(5703),l=n(3536),c=n(3944),u=n(3325),h=n(4589);const d=(0,u.Z)(a.Z,(0,l.d)(["top","right","bottom","left","absolute"]),s.Z,c.Z);var p=d.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,n=(!1!==this.attach?t.offsetLeft:t.left)||0,i=Math.max(t.width,e.width);let s=0;if(s+=n,(this.left||this.$vuetify.rtl&&!this.right)&&(s-=i-t.width),this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-e:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let n=0;return this.top&&(n+=t.height-e.height),!1!==this.attach?n+=t.offsetTop:n+=t.top+this.pageYOffset,this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return(0,h.kb)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return(0,h.kb)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const n=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),n=this.absoluteYOffset+e,i=this.dimensions.activator,s=this.dimensions.content.height,r=t+s,o=n<r;return o&&this.offsetOverflow&&i.top>s?t=this.pageYOffset+(i.top-s):o&&!this.allowOverflow?t=n-s-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=s.Z.options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const n=window.getComputedStyle(t);e.left=parseInt(n.marginLeft),e.top=parseInt(n.marginTop)}return e},sneakPeek(t){requestAnimationFrame((()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()}))},startTransition(){return new Promise((t=>requestAnimationFrame((()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek((()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t}))}}}),f=n(423),m=n(3712),g=n(8085),v=n(5600),y=n(549),b=n(1824),w=n(1439);const _=(0,u.Z)(o.Z,r.Z,f.Z,m.Z,g.Z,p);var k=_.extend({name:"v-menu",directives:{ClickOutside:v.Z,Resize:y.Z},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?(0,h.kb)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":(0,h.kb)(this.maxHeight);return t||"0"},calculatedMaxWidth(){return(0,h.kb)(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return(0,h.kb)(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return(0,h.kb)(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?(0,h.kb)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find((t=>t.tabIndex>-1)))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const n=this.$refs.content.scrollTop,i=this.$refs.content.clientHeight;n>e.offsetTop-8?(0,w.Z)(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):n+i<e.offsetTop+e.clientHeight+8&&(0,w.Z)(e.offsetTop-i+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,b.Jk)("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame((()=>{this.startTransition().then((()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))}))}))},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),n=t.scrollHeight-t.offsetHeight;return e?Math.min(n,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const n=e.offsetTop-this.calcScrollPosition(),i=t.querySelector(".v-list-item").offsetTop;return this.computedTop-n-i-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==h.Do.tab){if(t.keyCode===h.Do.down)this.nextTile();else if(t.keyCode===h.Do.up)this.prevTile();else if(t.keyCode===h.Do.end)this.lastTile();else if(t.keyCode===h.Do.home)this.firstTile();else{if(t.keyCode!==h.Do.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=s.Z.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=p.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",(()=>{this.hasJustFocused||(this.hasJustFocused=!0)}))},mouseLeaveHandler(t){this.runDelay("close",(()=>{var e;null!=(e=this.$refs.content)&&e.contains(t.relatedTarget)||requestAnimationFrame((()=>{this.isActive=!1,this.callDeactivate()}))}))},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===h.Do.esc){setTimeout((()=>{this.isActive=!1}));const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}else!this.isActive&&[h.Do.up,h.Do.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((()=>this.changeListIndex(t)))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent((()=>[this.$createElement(i.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])]))])}})},200:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var i=n(7047),s=n(3536),r=n(3325);function o(t,e=[]){return(0,r.Z)((0,s.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var a=n(6952),l=n(5907),c=n(1824),u=n(144),h=u.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:n,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const s=parseInt(this.mobileBreakpoint,10),r=!isNaN(s);return r?e<s:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,c.Rn)("mobile-break-point","mobile-breakpoint",this)}}),d=n(390),p=n(9177),f=n(8085),m=n(5600),g=n(549),v=n(5500),y=n(4589);const b=(0,r.Z)(o("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),a.Z,l.Z,h,d.Z,p.Z,f.Z);var w=b.extend({name:"v-navigation-drawer",directives:{ClickOutside:m.Z,Resize:g.Z,Touch:v.Z},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&h.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,y.kb)(this.height),top:this.isBottom?"auto":(0,y.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,y.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,y.kb)(this.computedTransform,"%")})`,width:(0,y.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(i.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,y.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,y.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})},3385:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var i=n(6210),s=n(6952),r=n(3377),o=n(2529),a=n(3712),l=n(8085),c=n(3325),u=(0,c.Z)(i.Z,s.Z,r.Z,o.Z,a.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,n){"use strict";var i=n(3385);e["Z"]=i.Z},5978:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});n(9845);var i=n(8230),s=n(8085),r=n(3325),o=(0,r.Z)(s.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,i=parseInt(n.max,10),r=parseInt(n.value,10),o=i?`${r} / ${i}`:String(n.value),a=i&&r>i;return t("div",{staticClass:"v-counter",class:{"error--text":a,...(0,s.X)(e)}},o)}}),a=o,l=n(5115),c=n(8083),u=n(1824),h=n(144);function d(t){return h.Z.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){c.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){c.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,i){if(this.isIntersecting=i,i)for(let s=0,r=t.onVisible.length;s<r;s++){const e=this[t.onVisible[s]];"function"!==typeof e?(0,u.Kd)(t.onVisible[s]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var p=n(1226),f=n(6884),m=n(549),g=n(6286),v=n(1706),y=n(4589);const b=(0,r.Z)(i.Z,d({onVisible:["onResize","tryAutofocus"]}),p.Z),w=["color","file","time","date","datetime-local","week","month"];var _=b.extend().extend({name:"v-text-field",directives:{resize:m.Z,ripple:g.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=f.Z.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return i.Z.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||w.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&(0,u.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,u.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,u.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=i.Z.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,s={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!=(t=null==(e=(n=this.$scopedSlots).counter)?void 0:e.call(n,{props:s}))?t:this.$createElement(a,{props:s})},genControl(){return i.Z.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(l.Z,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,y.kb)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=i.Z.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick((()=>this.$emit("blur",t)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=(0,v.e)(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===y.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),i.Z.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),i.Z.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=(0,v.e)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},3242:function(t,e,n){"use strict";var i=n(8085);e["Z"]=i.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}})},6656:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(3385),s=n(7047),r=n(4589),o=n(1824),a=i.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,r.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,o.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,r.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(s.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,r.kb)(this.computedContentHeight)}},(0,r.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,r.kb)(this.extensionHeight)}},(0,r.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}})},5827:function(t,e,n){"use strict";n.d(e,{Fx:function(){return h},Zq:function(){return d},Z5:function(){return c},Qn:function(){return u}});var i=n(6290);function s(t=[],...e){return Array().concat(t,...e)}function r(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const r="transition"+(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=s(o.on.leave,(t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:s}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=s+"px"})),o.on.afterLeave=s(o.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:s,height:r}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=s||"",t.style.height=r||""}}))),n.props.hideOnLeave&&(o.on.leave=s(o.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(r,(0,i.ZP)(n.data,o),n.children)}}}function o(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,s){return n("transition",(0,i.ZP)(s.data,{props:{name:t},on:e}),s.children)}}}var a=n(4589);function l(t="",e=!1){const n=e?"width":"height",i=`offset${(0,a.jC)(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const s=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const r=`${e[i]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[n]=r}))},afterEnter:r,enterCancelled:r,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[n]="0"))},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}r("carousel-transition"),r("carousel-reverse-transition"),r("tab-transition"),r("tab-reverse-transition"),r("menu-transition"),r("fab-transition","center center","out-in"),r("dialog-transition"),r("dialog-bottom-transition"),r("dialog-top-transition");const c=r("fade-transition"),u=(r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),h=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),o("expand-transition",l())),d=o("expand-x-transition",l("",!0))},5600:function(t,e,n){"use strict";var i=n(1706);function s(){return!0}function r(t,e,n){if(!t||!1===o(t,n))return!1;const s=(0,i.e)(e);if("undefined"!==typeof ShadowRoot&&s instanceof ShadowRoot&&s.host===t.target)return!1;const r=("object"===typeof n.value&&n.value.include||(()=>[]))();return r.push(e),!r.some((e=>e.contains(t.target)))}function o(t,e){const n="object"===typeof e.value&&e.value.closeConditional||s;return n(t)}function a(t,e,n,i){const s="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&r(t,e,n)&&setTimeout((()=>{o(t,n)&&s&&s(t)}),0)}function l(t,e){const n=(0,i.e)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const c={inserted(t,e,n){const i=i=>a(i,t,e,n),s=n=>{t._clickOutside.lastMousedownWasOutside=r(n,t,e)};l(t,(t=>{t.addEventListener("click",i,!0),t.addEventListener("mousedown",s,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:s}},unbind(t,e,n){t._clickOutside&&(l(t,(e=>{var i;if(!e||null==(i=t._clickOutside)||!i[n.context._uid])return;const{onClick:s,onMousedown:r}=t._clickOutside[n.context._uid];e.removeEventListener("click",s,!0),e.removeEventListener("mousedown",r,!0)})),delete t._clickOutside[n.context._uid])}};e["Z"]=c},8083:function(t,e,n){"use strict";function i(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},r=e.value,{handler:o,options:a}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],a)=>{var l;const c=null==(l=t._observe)?void 0:l[n.context._uid];if(!c)return;const u=r.some((t=>t.isIntersecting));!o||i.quiet&&!c.init||i.once&&!u&&!c.init||o(r,a,u),u&&i.once?s(t,e,n):c.init=!0}),a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:l},l.observe(t)}function s(t,e,n){var i;const s=null==(i=t._observe)?void 0:i[n.context._uid];s&&(s.observer.unobserve(t),delete t._observe[n.context._uid])}const r={inserted:i,unbind:s};e["Z"]=r},549:function(t,e,n){"use strict";function i(t,e,n){const i=e.value,s=e.options||{passive:!0};window.addEventListener("resize",i,s),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:s},e.modifiers&&e.modifiers.quiet||i()}function s(t,e,n){var i;if(null==(i=t._onResize)||!i[n.context._uid])return;const{callback:s,options:r}=t._onResize[n.context._uid];window.removeEventListener("resize",s,r),delete t._onResize[n.context._uid]}const r={inserted:i,unbind:s};e["Z"]=r},6286:function(t,e,n){"use strict";n.d(e,{Z:function(){return T}});var i=n(4589);const s=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,n={})=>{let i=0,s=0;if(!a(t)){const n=e.getBoundingClientRect(),r=o(t)?t.touches[t.touches.length-1]:t;i=r.clientX-n.left,s=r.clientY-n.top}let r=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((i-r)**2+(s-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*r)/2+"px",u=(e.clientHeight-2*r)/2+"px",h=n.center?c:i-r+"px",d=n.center?u:s-r+"px";return{radius:r,scale:l,x:h,y:d,centerX:c,centerY:u}},c={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:c,y:u,centerX:h,centerY:d}=l(t,e,n),p=2*o+"px";s.className="v-ripple__animation",s.style.width=p,s.style.height=p,e.appendChild(i);const f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),r(s,`translate(${c}, ${u}) scale3d(${a},${a},${a})`),s.dataset.activated=String(performance.now()),setTimeout((()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),r(s,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),s=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),s)}};function u(t){return"undefined"===typeof t||!!t}function h(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{c.show(t,n,e)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),s)}else c.show(t,n,e)}}function d(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{d(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let f=!1;function m(t){f||t.keyCode!==i.Do.enter&&t.keyCode!==i.Do.space||(f=!0,h(t))}function g(t){f=!1,d(t)}function v(t){!0===f&&(f=!1,d(t))}function y(t,e,n){const i=u(e.value);i||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),i&&!n?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(t)}function b(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",d),t.removeEventListener("blur",v)}function w(t,e,n){y(t,e,!1)}function _(t){delete t._ripple,b(t)}function k(t,e){if(e.value===e.oldValue)return;const n=u(e.oldValue);y(t,e,n)}const C={bind:w,unbind:_,update:k};var T=C},5500:function(t,e,n){"use strict";var i=n(4589);const s=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:s}=t,r=.5,o=16;t.offsetX=n-e,t.offsetY=s-i,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<i-o&&t.up(t),t.down&&s>i+o&&t.down(t))};function r(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function a(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>o(t,e),touchmove:t=>a(t,e)}}function c(t,e,n){const s=e.value,r=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(!r)return;const a=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=a,(0,i.XP)(a).forEach((t=>{r.addEventListener(t,a[t],o)}))}function u(t,e,n){const s=e.value.parent?t.parentElement:t;if(!s||!s._touchHandlers)return;const r=s._touchHandlers[n.context._uid];(0,i.XP)(r).forEach((t=>{s.removeEventListener(t,r[t])})),delete s._touchHandlers[n.context._uid]}const h={inserted:c,unbind:u};e["Z"]=h},9132:function(t,e,n){"use strict";n.d(e,{Z:function(){return tt}});var i=n(144),s=n(1824);function r(t,e={}){if(r.installed)return;r.installed=!0,i.Z!==t&&(0,s.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=e.components||{},o=e.directives||{};for(const i in o){const e=o[i];t.directive(i,e)}(function e(n){if(n){for(const i in n){const s=n[i];s&&!e(s.$_vuetify_subcomponents)&&t.component(i,s)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var o={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const a={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:o},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var l=n(4589),c=n(4097);class u extends c.t{constructor(t,e){super();const n=(0,l.Ee)({},a),{userPreset:i}=e,{preset:r={},...o}=i;null!=r.preset&&(0,s.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=(0,l.Ee)((0,l.Ee)(n,r),o)}}u.property="presets";class h extends c.t{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,n){this.application[e][t]=n,this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce(((t,e)=>t+e),0)}}h.property="application";class d extends c.t{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:e,scrollBarWidth:n,thresholds:i}=t[d.property];this.mobileBreakpoint=e,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(t=!1){const e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,s=n<this.thresholds.sm&&!i,r=n<this.thresholds.md-this.scrollBarWidth&&!(s||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(r||s||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=s,this.md=r,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=s,this.smAndDown=(i||s)&&!(r||o||a),this.smAndUp=!i&&(s||r||o||a),this.mdOnly=r,this.mdAndDown=(i||s||r)&&!(o||a),this.mdAndUp=!(i||s)&&(r||o||a),this.lgOnly=o,this.lgAndDown=(i||s||r||o)&&!a,this.lgAndUp=!(i||s||r)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case s:this.name="sm";break;case r:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const l={xs:0,sm:1,md:2,lg:3,xl:4},c=l[this.name],u=l[this.mobileBreakpoint];this.mobile=c<=u}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}d.property="breakpoint";const p={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var f=p;const m={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var g=m;const v={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var y=v;const b={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var w=b;const _={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var k=_;function C(t,e){const n={};for(const i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var T=C("font-awesome-icon",w),S=Object.freeze({mdiSvg:f,md:g,mdi:y,fa:w,fa4:k,faSvg:T});class E extends c.t{constructor(t){super();const{iconfont:e,values:n,component:i}=t[E.property];this.component=i,this.iconfont=e,this.values=(0,l.Ee)(S[e],n)}}E.property="icons";const I="$vuetify.",x=Symbol("Lang fallback");function A(t,e,n=!1,i){const r=e.replace(I,"");let o=(0,l.vO)(t,r,x);return o===x&&(n?((0,s.N6)(`Translation key "${r}" not found in fallback`),o=e):((0,s.Kd)(`Translation key "${r}" not found, falling back to default`),o=A(i,e,!0,i))),o}class $ extends c.t{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:n,t:i}=t[$.property];this.current=e,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],n=this.locales[this.defaultLocale];return A(e,t,!1,n)}t(t,...e){return t.startsWith(I)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,((t,n)=>String(e[+n])))}}$.property="lang";var O=n(7093);const D=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],L=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,N=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],R=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function M(t){const e=Array(3),n=L,i=D;for(let s=0;s<3;++s)e[s]=Math.round(255*(0,l.uZ)(n(i[s][0]*t[0]+i[s][1]*t[1]+i[s][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function P(t){const e=[0,0,0],n=R,i=N,s=n((t>>16&255)/255),r=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*s+i[a][1]*r+i[a][2]*o;return e}const V=.20689655172413793,B=t=>t>V**3?Math.cbrt(t):t/(3*V**2)+4/29,F=t=>t>V?t**3:3*V**2*(t-4/29);function U(t){const e=B,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function j(t){const e=F,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}function z(t,e=!1,n=!0){const{anchor:i,...s}=t,r=Object.keys(s),o={};for(let a=0;a<r.length;++a){const i=r[a],s=t[i];null!=s&&(n?e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,O.hq)(s)):o[i]="object"===typeof s?z(s,!0,n):G(i,(0,O.jx)(s)):o[i]={base:(0,O.I4)((0,O.jx)(s))})}return e||(o.anchor=i||o.base||o.primary.base),o}const Z=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,H=(t,e,n)=>{const[i,s]=e.split(/(\d)/,2);return`\n.v-application .${t}.${i}-${s} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${t}--text.text--${i}-${s} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},q=(t,e="base")=>`--v-${t}-${e}`,W=(t,e="base")=>`var(${q(t,e)})`;function K(t,e=!1){const{anchor:n,...i}=t,s=Object.keys(i);if(!s.length)return"";let r="",o="";const a=e?W("anchor"):n;o+=`.v-application a { color: ${a}; }`,e&&(r+=`  ${q("anchor")}: ${n};\n`);for(let c=0;c<s.length;++c){const n=s[c],i=t[n];o+=Z(n,e?W(n):i.base),e&&(r+=`  ${q(n)}: ${i.base};\n`);const a=(0,l.XP)(i);for(let t=0;t<a.length;++t){const s=a[t],l=i[s];"base"!==s&&(o+=H(n,s,e?W(n,s):l),e&&(r+=`  ${q(n,s)}: ${l};\n`))}}return e&&(r=`:root {\n${r}}\n\n`),r+o}function G(t,e){const n={base:(0,O.I4)(e)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,O.I4)(Y(e,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,O.I4)(X(e,i));return n}function Y(t,e){const n=U(P(t));return n[0]=n[0]+10*e,M(j(n))}function X(t,e){const n=U(P(t));return n[0]=n[0]-10*e,M(j(n))}class J extends c.t{constructor(t){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:e,disable:n,options:i,themes:s}=t[J.property];this.dark=Boolean(e),this.defaults=this.themes=s,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(s.dark,!0),light:this.fillVariant(s.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick((()=>{this.applyVueMeta23()}));const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=t.$options[e]||{};t.$options[e]=()=>{n.style=n.style||[];const t=n.style.find((t=>"vuetify-theme-stylesheet"===t.id));return t?t.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(t){const e=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`}initTheme(t){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",(()=>{const e=i.Z.observable({themes:this.themes});this.unwatch=t.$watch((()=>e.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let n;return null!=e.themeCache&&(n=e.themeCache.get(t),null!=n)||(n=K(t,e.customProperties),null!=e.minifyTheme&&(n=e.minifyTheme(n)),null!=e.themeCache&&e.themeCache.set(t,n)),n}get parsedTheme(){return z(this.currentTheme||{},void 0,(0,l.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}J.property="theme";var Q=n(1439);class tt{constructor(t={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(u),this.use(h),this.use(d),this.use(Q.A),this.use(E),this.use($),this.use(J)}init(t,e){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(t,e)})),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}tt.install=r,tt.installed=!1,tt.version="2.6.4",tt.config={silent:!1}},5795:function(t,e,n){"use strict";var i=n(4561),s=n(2936),r=n(3325),o=n(4589),a=n(1824);const l=(0,r.Z)(i.Z,s.Z);e["Z"]=l.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=(0,o.sp)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,a.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=(0,o.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){var e;if(this.activatorElement)return this.activatorElement;let n=null;if(this.activator){const t=this.internalActivator?this.$el:document;n="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;n=t&&t.$options.mixins&&t.$options.mixins.some((t=>t.options&&["activatable","menuable"].includes(t.options.name)))?t.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot(){return(0,o.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},6210:function(t,e,n){"use strict";var i=n(144);function s(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e["Z"]=i.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",s("attrs$"),{immediate:!0}),this.$watch("$listeners",s("listeners$"),{immediate:!0})}})},8625:function(t,e,n){"use strict";var i=n(1824),s=n(144);e["Z"]=s.Z.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},6952:function(t,e,n){"use strict";var i=n(144),s=n(1824),r=n(7093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,s.N6)("style must be an object",this),e):"string"===typeof e.class?((0,s.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,s.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,s.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},4419:function(t,e,n){"use strict";var i=n(144),s=n(4589);e["Z"]=i.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:s.vZ}}})},4561:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}})},5907:function(t,e,n){"use strict";var i=n(3325);function s(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];i.isActive&&i.isDependent?e.push(i):e.push(...s(i.$children))}return e}e["Z"]=(0,i.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?s(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},3944:function(t,e,n){"use strict";var i=n(8625),s=n(4589),r=n(3325),o=n(1824);function a(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function l(t){t.forEach((t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e["Z"]=(0,r.Z)(i.Z).extend({name:"detachable",props:{attach:{default:!1,validator:a},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver((n=>{n.some((t=>Array.from(t.removedNodes).includes(this.$el)))&&(e.disconnect(),l(t))}));e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else l(t)}},methods:{getScopeIdAttrs(){const t=(0,s.vO)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,o.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}})},3377:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,n){"use strict";n.d(e,{d:function(){return s}});var i=n(6257);function s(t,e,n){return(0,i.f)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}s("itemGroup")},1226:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(144),s=n(5827),r=n(8083),o=n(6952),a=n(3536),l=n(1431),c=n(8085),u=n(4589),h=n(3325);const d=(0,h.Z)(o.Z,(0,a.d)(["absolute","fixed","top","bottom"]),l.Z,c.Z);var p=d.extend({name:"v-progress-linear",directives:{intersect:r.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,u.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,u.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,u.kb)(this.normalizedValue,"%"),width:(0,u.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?s.Z5:s.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,u.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,u.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,n){this.isVisible=n},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,u.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=p,m=i.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},2529:function(t,e,n){"use strict";var i=n(4589),s=n(144);e["Z"]=s.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),s=(0,i.kb)(this.minWidth),r=(0,i.kb)(this.maxHeight),o=(0,i.kb)(this.maxWidth),a=(0,i.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),s&&(t.minWidth=s),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},390:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var i=n(6952),s=n(8085),r=n(2936),o=n(3325),a=(0,o.Z)(i.Z,s.Z,r.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),l=a,c=n(4589),u=n(144),h=u.Z.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,c.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,c.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c.Do.up,c.Do.pageup],n=[c.Do.down,c.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",i="y"===n?e.deltaY:e.deltaX||e.deltaY;let s,r;"y"===n?(s=0===t.scrollTop,r=t.scrollTop+t.clientHeight===t.scrollHeight):(s=0===t.scrollLeft,r=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,a=i>0;return!(s||!o)||(!(r||!a)||!(!s&&!r)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,c.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const i=e[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,c.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},3536:function(t,e,n){"use strict";n.d(e,{d:function(){return o}});var i=n(144),s=n(4589);const r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return i.Z.extend({name:"positionable",props:t.length?(0,s.ji)(r,t):r})}e["Z"]=o()},1431:function(t,e,n){"use strict";var i=n(144);function s(t="value",e="change"){return i.Z.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const r=s();e["Z"]=r},6257:function(t,e,n){"use strict";n.d(e,{J:function(){return a},f:function(){return o}});var i=n(144),s=n(1824);function r(t,e){return()=>(0,s.Kd)(`The ${t} component must be used inside a ${e}`)}function o(t,e,n){const s=e&&n?{register:r(e,n),unregister:r(e,n)}:null;return i.Z.extend({name:"registrable-inject",inject:{[t]:{default:s}}})}function a(t,e=!1){return i.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},423:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}})},3712:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,n){"use strict";var i=n(144),s=n(6286),r=n(4589);e["Z"]=i.Z.extend({name:"routable",directives:{Ripple:s.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,s=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),s=`${s} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:s,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,n="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,r.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},9131:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9177:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},5703:function(t,e,n){"use strict";var i=n(144),s=n(4589);e["Z"]=i.Z.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,s.KK)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,(0,s.KK)(e)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let r=0;r<i.length;r++)t.includes(i[r])||n.push((0,s.KK)(i[r]));return Math.max(...n)}}})},8085:function(t,e,n){"use strict";n.d(e,{X:function(){return r}});var i=n(144);const s=i.Z.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function r(t){const e={...t.props,...t.injections},n=s.options.computed.isDark.call(e);return s.options.computed.themeClasses.call({isDark:n})}e["Z"]=s},2936:function(t,e,n){"use strict";n.d(e,{d:function(){return s}});var i=n(144);function s(t="value",e="input"){return i.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const r=s();e["Z"]=r},6884:function(t,e,n){"use strict";var i=n(6952),s=n(8085),r=n(6257),o=n(4589),a=n(1824),l=n(3325);const c=(0,l.Z)(i.Z,(0,r.f)("form"),s.Z);e["Z"]=c.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){(0,o.vZ)(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],s="function"===typeof t?t(e):t;!1===s||"string"===typeof s?n.push(s||""):"boolean"!==typeof s&&(0,a.N6)(`Rules should return a string or boolean, received '${typeof s}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},1439:function(t,e,n){"use strict";n.d(e,{A:function(){return C},Z:function(){return k}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return c},easeInOutCubic:function(){return h},easeInOutQuad:function(){return l},easeInOutQuart:function(){return f},easeInOutQuint:function(){return v},easeInQuad:function(){return o},easeInQuart:function(){return d},easeInQuint:function(){return m},easeOutCubic:function(){return u},easeOutQuad:function(){return a},easeOutQuart:function(){return p},easeOutQuint:function(){return g},linear:function(){return r}});n(1703);var s=n(4097);const r=t=>t,o=t=>t**2,a=t=>t*(2-t),l=t=>t<.5?2*t**2:(4-2*t)*t-1,c=t=>t**3,u=t=>--t**3+1,h=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,d=t=>t**4,p=t=>1- --t**4,f=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,m=t=>t**5,g=t=>1+--t**5,v=t=>t<.5?16*t**5:1+16*--t**5;function y(t){if("number"===typeof t)return t;let e=_(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${w(t)} instead.`);let n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function b(t){const e=_(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${w(t)} instead.`)}function w(t){return null==t?t:t.constructor.name}function _(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function k(t,e={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},s=b(n.container);if(n.appOffset&&k.framework.application){const t=s.classList.contains("v-navigation-drawer"),e=s.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:r}=k.framework.application;n.offset+=i,t&&!e||(n.offset+=r)}const r=performance.now();let o;o="number"===typeof t?y(t)-n.offset:y(t)-y(s)-n.offset;const a=s.scrollTop;if(o===a)return Promise.resolve(o);const l="function"===typeof n.easing?n.easing:i[n.easing];if(!l)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((t=>requestAnimationFrame((function e(i){const c=i-r,u=Math.abs(n.duration?Math.min(c/n.duration,1):1);s.scrollTop=Math.floor(a+(o-a)*l(u));const h=s===document.body?document.documentElement.clientHeight:s.clientHeight,d=h+s.scrollTop>=s.scrollHeight;if(1===u||o>s.scrollTop&&d)return t(o);requestAnimationFrame(e)}))))}k.framework={},k.init=()=>{};class C extends s.t{constructor(){return super(),k}}C.property="goTo"},4097:function(t,e,n){"use strict";n.d(e,{t:function(){return i}});class i{constructor(){this.framework={}}init(t,e){}}},7093:function(t,e,n){"use strict";n.d(e,{I4:function(){return o},NA:function(){return s},hq:function(){return a},jx:function(){return r}});n(1703);var i=n(1824);function s(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function r(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((t=>t+t)).join("")),6!==n.length&&(0,i.Kd)(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}}return e<0?((0,i.Kd)(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&((0,i.Kd)(`'${t}' is not a valid rgb color`),e=16777215),e}function o(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(r(t))}},1824:function(t,e,n){"use strict";n.d(e,{Jk:function(){return c},Kd:function(){return r},N6:function(){return o},Rn:function(){return a},fK:function(){return l}});var i=n(9132);function s(t,e,n){if(!i.Z.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?p(e):"")}}function r(t,e,n){const i=s(t,e,n);null!=i&&console.warn(i)}function o(t,e,n){const i=s(t,e,n);null!=i&&console.error(i)}function a(t,e,n,i){r(`[UPGRADE] '${t}' is deprecated, use '${e}' instead.`,n,i)}function l(t,e,n,i){o(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function c(t,e,n){r(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,n)}const u=/(?:^|[-_])(\w)/g,h=t=>t.replace(u,(t=>t.toUpperCase())).replace(/[-_]/g,"");function d(t,e){if(t.$root===t)return"<Root>";const n="function"===typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const s=n.__file;if(!i&&s){const t=s.match(/([^/\\]+)\.vue$/);i=t&&t[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(s&&!1!==e?` at ${s}`:"")}function p(t){if(t._isVue&&t.$parent){const e=[];let n=0;while(t){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${d(t[0])}... (${t[1]} recursive calls)`:d(t)}`)).join("\n")}return`\n\n(found in ${d(t)})`}},1706:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,{e:function(){return i}})},4589:function(t,e,n){"use strict";n.d(e,{Do:function(){return w},Ee:function(){return O},GL:function(){return y},Ji:function(){return s},KK:function(){return p},MT:function(){return d},P2:function(){return x},RB:function(){return _},TI:function(){return E},XP:function(){return k},_A:function(){return T},iZ:function(){return D},jC:function(){return S},ji:function(){return g},kb:function(){return v},lj:function(){return a},qF:function(){return h},qh:function(){return r},qw:function(){return l},r:function(){return m},sp:function(){return I},uZ:function(){return $},vO:function(){return u},vZ:function(){return c},z9:function(){return A}});var i=n(144);function s(t,e="div",n){return i.Z.extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render(e,{data:n,props:i,children:s}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),e(i.tag,n,s)}})}function r(t,e,n,i=!1){const s=r=>{n(r),t.removeEventListener(e,s,i)};t.addEventListener(e,s,i)}let o=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(L){console.warn(L)}function a(t,e,n,i){t.addEventListener(e,n,!!o&&i)}function l(t,e,n){const i=e.length-1;if(i<0)return void 0===t?n:t;for(let s=0;s<i;s++){if(null==t)return n;t=t[e[s]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function c(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>c(t[n],e[n])))}function u(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),l(t,e.split("."),n)):n}function h(t,e,n){if(null==e)return void 0===t?n:t;if(t!==Object(t))return void 0===n?t:n;if("string"===typeof e)return u(t,e,n);if(Array.isArray(e))return l(t,e,n);if("function"!==typeof e)return n;const i=e(t,n);return"undefined"===typeof i?n:i}function d(t){return Array.from({length:t},((t,e)=>e))}function p(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||p(t.parentNode)}const f={"&":"&amp;","<":"&lt;",">":"&gt;"};function m(t){return t.replace(/[&<>]/g,(t=>f[t]||t))}function g(t,e){const n={};for(let i=0;i<e.length;i++){const s=e[i];"undefined"!==typeof t[s]&&(n[s]=t[s])}return n}function v(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function y(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function b(t){return null!==t&&"object"===typeof t}const w=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function _(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,i=u(t,n,e);if("string"!==typeof i)return i;e=i}return null==n?e:{component:n,props:{icon:e}}}function k(t){return Object.keys(t)}const C=/-(\w)/g,T=t=>t.replace(C,((t,e)=>e?e.toUpperCase():""));function S(t){return t.charAt(0).toUpperCase()+t.slice(1)}function E(t){return null!=t?Array.isArray(t)?t:[t]:[]}function I(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function x(t,e){let n=!1;return(...i)=>{if(!n)return n=!0,setTimeout((()=>n=!1),e),t(...i)}}function A(t,e="default",n,i=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?void 0:t.$slots[e]}function $(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function O(t={},e={}){for(const n in e){const i=t[n],s=e[n];b(i)&&b(s)?t[n]=O(i,s):t[n]=s}return t}function D(t){if(t.composedPath)return t.composedPath();const e=[];let n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},6290:function(t,e,n){"use strict";n.d(e,{ZP:function(){return o},bp:function(){return c}});var i=n(4589);const s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const n of t.split(s.styleList)){let[t,r]=n.split(s.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,i._A)(t)]=r)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},3325:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(144);function s(...t){return i.Z.extend({mixins:t})}},8345:function(t,e){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function n(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},r=/%2C/g,o=function(t){return encodeURIComponent(t).replace(i,s).replace(r,",")};function a(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var i,s=n||u;try{i=s(t||"")}catch(a){i={}}for(var r in e){var o=e[r];i[r]=Array.isArray(o)?o.map(c):c(o)}return i}var c=function(t){return null==t||"object"===typeof t?t:String(t)};function u(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),i=a(n.shift()),s=n.length>0?a(n.join("=")):null;void 0===e[i]?e[i]=s:Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]})),e):e}function h(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return o(e);if(Array.isArray(n)){var i=[];return n.forEach((function(t){void 0!==t&&(null===t?i.push(o(e)):i.push(o(e)+"="+o(t)))})),i.join("&")}return o(e)+"="+o(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,i){var s=i&&i.options.stringifyQuery,r=e.query||{};try{r=f(r)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:r,params:e.params||{},fullPath:v(e,s),matched:t?g(t):[]};return n&&(o.redirectedFrom=v(n,s)),Object.freeze(o)}function f(t){if(Array.isArray(t))return t.map(f);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=f(t[n]);return e}return t}var m=p(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function v(t,e){var n=t.path,i=t.query;void 0===i&&(i={});var s=t.hash;void 0===s&&(s="");var r=e||h;return(n||"/")+r(i)+s}function y(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((function(n,s){var r=t[n],o=i[s];if(o!==n)return!1;var a=e[n];return null==r||null==a?r===a:"object"===typeof r&&"object"===typeof a?b(r,a):String(r)===String(a)}))}function w(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&_(t.query,e.query)}function _(t,e){for(var n in e)if(!(n in t))return!1;return!0}function k(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var i in n.instances){var s=n.instances[i],r=n.enteredCbs[i];if(s&&r){delete n.enteredCbs[i];for(var o=0;o<r.length;o++)s._isBeingDestroyed||r[o](s)}}}}var C={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var i=e.props,s=e.children,r=e.parent,o=e.data;o.routerView=!0;var a=r.$createElement,l=i.name,c=r.$route,u=r._routerViewCache||(r._routerViewCache={}),h=0,d=!1;while(r&&r._routerRoot!==r){var p=r.$vnode?r.$vnode.data:{};p.routerView&&h++,p.keepAlive&&r._directInactive&&r._inactive&&(d=!0),r=r.$parent}if(o.routerViewDepth=h,d){var f=u[l],m=f&&f.component;return m?(f.configProps&&T(m,o,f.route,f.configProps),a(m,o,s)):a()}var g=c.matched[h],v=g&&g.components[l];if(!g||!v)return u[l]=null,a();u[l]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[l];(e&&n!==t||!e&&n===t)&&(g.instances[l]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[l]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[l]&&(g.instances[l]=t.componentInstance),k(c)};var y=g.props&&g.props[l];return y&&(n(u[l],{route:c,configProps:y}),T(v,o,c,y)),a(v,o,s)}};function T(t,e,i,s){var r=e.props=S(i,s);if(r){r=e.props=n({},r);var o=e.attrs=e.attrs||{};for(var a in r)t.props&&a in t.props||(o[a]=r[a],delete r[a])}}function S(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function E(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var r=t.replace(/^\//,"").split("/"),o=0;o<r.length;o++){var a=r[o];".."===a?s.pop():"."!==a&&s.push(a)}return""!==s[0]&&s.unshift(""),s.join("/")}function I(t){var e="",n="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var s=t.indexOf("?");return s>=0&&(n=t.slice(s+1),t=t.slice(0,s)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/+/g,"/")}var A=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},$=G,O=M,D=P,L=F,N=K,R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t,e){var n,i=[],s=0,r=0,o="",a=e&&e.delimiter||"/";while(null!=(n=R.exec(t))){var l=n[0],c=n[1],u=n.index;if(o+=t.slice(r,u),r=u+l.length,c)o+=c[1];else{var h=t[r],d=n[2],p=n[3],f=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,k=f||m;i.push({name:p||s++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:k?j(k):v?".*":"[^"+U(_)+"]+?"})}}return r<t.length&&(o+=t.substr(r)),o&&i.push(o),i}function P(t,e){return F(M(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",Z(e)));return function(e,i){for(var s="",r=e||{},o=i||{},a=o.pretty?V:encodeURIComponent,l=0;l<t.length;l++){var c=t[l];if("string"!==typeof c){var u,h=r[c.name];if(null==h){if(c.optional){c.partial&&(s+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(A(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=a(h[d]),!n[l].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");s+=(0===d?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?B(h):a(h),!n[l].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');s+=c.prefix+u}}else s+=c}return s}}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function j(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function Z(t){return t&&t.sensitive?"":"i"}function H(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function q(t,e,n){for(var i=[],s=0;s<t.length;s++)i.push(G(t[s],e,n).source);var r=new RegExp("(?:"+i.join("|")+")",Z(n));return z(r,e)}function W(t,e,n){return K(M(t,n),e,n)}function K(t,e,n){A(e)||(n=e||n,e=[]),n=n||{};for(var i=n.strict,s=!1!==n.end,r="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)r+=U(a);else{var l=U(a.prefix),c="(?:"+a.pattern+")";e.push(a),a.repeat&&(c+="(?:"+l+c+")*"),c=a.optional?a.partial?l+"("+c+")?":"(?:"+l+"("+c+"))?":l+"("+c+")",r+=c}}var u=U(n.delimiter||"/"),h=r.slice(-u.length)===u;return i||(r=(h?r.slice(0,-u.length):r)+"(?:"+u+"(?=$))?"),r+=s?"$":i&&h?"":"(?="+u+"|$)",z(new RegExp("^"+r,Z(n)),e)}function G(t,e,n){return A(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?H(t,e):A(t)?q(t,e,n):W(t,e,n)}$.parse=O,$.compile=D,$.tokensToFunction=L,$.tokensToRegExp=N;var Y=Object.create(null);function X(t,e,n){e=e||{};try{var i=Y[t]||(Y[t]=$.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch(s){return""}finally{delete e[0]}}function J(t,e,i,s){var r="string"===typeof t?{path:t}:t;if(r._normalized)return r;if(r.name){r=n({},t);var o=r.params;return o&&"object"===typeof o&&(r.params=n({},o)),r}if(!r.path&&r.params&&e){r=n({},r),r._normalized=!0;var a=n(n({},e.params),r.params);if(e.name)r.name=e.name,r.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;r.path=X(c,a,"path "+e.path)}else 0;return r}var u=I(r.path||""),h=e&&e.path||"/",d=u.path?E(u.path,h,i||r.append):h,p=l(u.query,r.query,s&&s.options.parseQuery),f=r.hash||u.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var Q,tt=[String,Object],et=[String,Array],nt=function(){},it={name:"RouterLink",props:{to:{type:tt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:et,default:"click"}},render:function(t){var e=this,i=this.$router,s=this.$route,r=i.resolve(this.to,s,this.append),o=r.location,a=r.route,l=r.href,c={},u=i.options.linkActiveClass,h=i.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,J(a.redirectedFrom),null,i):a;c[g]=y(s,v,this.exactPath),c[m]=this.exact||this.exactPath?c[g]:w(s,v);var b=c[g]?this.ariaCurrentValue:null,_=function(t){st(t)&&(e.replace?i.replace(o,nt):i.push(o,nt))},k={click:st};Array.isArray(this.event)?this.event.forEach((function(t){k[t]=_})):k[this.event]=_;var C={class:c},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:l,route:a,navigate:_,isActive:c[m],isExactActive:c[g]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?t():t("span",{},T)}if("a"===this.tag)C.on=k,C.attrs={href:l,"aria-current":b};else{var S=rt(this.$slots.default);if(S){S.isStatic=!1;var E=S.data=n({},S.data);for(var I in E.on=E.on||{},E.on){var x=E.on[I];I in k&&(E.on[I]=Array.isArray(x)?x:[x])}for(var A in k)A in E.on?E.on[A].push(k[A]):E.on[A]=_;var $=S.data.attrs=n({},S.data.attrs);$.href=l,$["aria-current"]=b}else C.on=k}return t(this.tag,C,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rt(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=rt(e.children)))return e}}function ot(t){if(!ot.installed||Q!==t){ot.installed=!0,Q=t;var e=function(t){return void 0!==t},n=function(t,n){var i=t.$options._parentVnode;e(i)&&e(i=i.data)&&e(i=i.registerRouteInstance)&&i(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",C),t.component("RouterLink",it);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var at="undefined"!==typeof window;function lt(t,e,n,i,s){var r=e||[],o=n||Object.create(null),a=i||Object.create(null);t.forEach((function(t){ct(r,o,a,t,s)}));for(var l=0,c=r.length;l<c;l++)"*"===r[l]&&(r.push(r.splice(l,1)[0]),c--,l--);return{pathList:r,pathMap:o,nameMap:a}}function ct(t,e,n,i,s,r){var o=i.path,a=i.name;var l=i.pathToRegexpOptions||{},c=ht(o,s,l.strict);"boolean"===typeof i.caseSensitive&&(l.sensitive=i.caseSensitive);var u={path:c,regex:ut(c,l),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:s,matchAs:r,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var s=r?x(r+"/"+i.path):void 0;ct(t,e,n,i,u,s)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var p=h[d];0;var f={path:p,children:i.children};ct(t,e,n,f,s,u.path||"/")}a&&(n[a]||(n[a]=u))}function ut(t,e){var n=$(t,[],e);return n}function ht(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function dt(t,e){var n=lt(t),i=n.pathList,s=n.pathMap,r=n.nameMap;function o(t){lt(t,i,s,r)}function a(t,e){var n="object"!==typeof t?r[t]:void 0;lt([e||t],i,s,r,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),i,s,r,n)}function l(){return i.map((function(t){return s[t]}))}function c(t,n,o){var a=J(t,n,!1,e),l=a.name;if(l){var c=r[l];if(!c)return d(null,a);var u=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&u.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(c.path,a.params,'named route "'+l+'"'),d(c,a,o)}if(a.path){a.params={};for(var p=0;p<i.length;p++){var f=i[p],m=s[f];if(pt(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function u(t,n){var i=t.redirect,s="function"===typeof i?i(p(t,n,null,e)):i;if("string"===typeof s&&(s={path:s}),!s||"object"!==typeof s)return d(null,n);var o=s,a=o.name,l=o.path,u=n.query,h=n.hash,f=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){r[a];return c({_normalized:!0,name:a,query:u,hash:h,params:f},void 0,n)}if(l){var m=ft(l,t),g=X(m,f,'redirect route with path "'+m+'"');return c({_normalized:!0,path:g,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var i=X(n,e.params,'aliased route with path "'+n+'"'),s=c({_normalized:!0,path:i});if(s){var r=s.matched,o=r[r.length-1];return e.params=s.params,d(o,e)}return d(null,e)}function d(t,n,i){return t&&t.redirect?u(t,i||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,i,e)}return{match:c,addRoute:a,getRoutes:l,addRoutes:o}}function pt(t,e,n){var i=e.match(t);if(!i)return!1;if(!n)return!0;for(var s=1,r=i.length;s<r;++s){var o=t.keys[s-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[s]?a(i[s]):i[s])}return!0}function ft(t,e){return E(t,e.parent?e.parent.path:"/",!0)}var mt=at&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var vt=gt();function yt(){return vt}function bt(t){return vt=t}var wt=Object.create(null);function _t(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),i=n({},window.history.state);return i.key=yt(),window.history.replaceState(i,"",e),window.addEventListener("popstate",Tt),function(){window.removeEventListener("popstate",Tt)}}function kt(t,e,n,i){if(t.app){var s=t.options.scrollBehavior;s&&t.app.$nextTick((function(){var r=St(),o=s.call(t,e,n,i?r:null);o&&("function"===typeof o.then?o.then((function(t){Dt(t,r)})).catch((function(t){0})):Dt(o,r))}))}}function Ct(){var t=yt();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Tt(t){Ct(),t.state&&t.state.key&&bt(t.state.key)}function St(){var t=yt();if(t)return wt[t]}function Et(t,e){var n=document.documentElement,i=n.getBoundingClientRect(),s=t.getBoundingClientRect();return{x:s.left-i.left-e.x,y:s.top-i.top-e.y}}function It(t){return $t(t.x)||$t(t.y)}function xt(t){return{x:$t(t.x)?t.x:window.pageXOffset,y:$t(t.y)?t.y:window.pageYOffset}}function At(t){return{x:$t(t.x)?t.x:0,y:$t(t.y)?t.y:0}}function $t(t){return"number"===typeof t}var Ot=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var i=Ot.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var s=t.offset&&"object"===typeof t.offset?t.offset:{};s=At(s),e=Et(i,s)}else It(t)&&(e=xt(t))}else n&&It(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=at&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Nt(t,e){Ct();var i=window.history;try{if(e){var s=n({},i.state);s.key=yt(),i.replaceState(s,"",t)}else i.pushState({key:bt(gt())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function Rt(t){Nt(t,!0)}function Mt(t,e,n){var i=function(s){s>=t.length?n():t[s]?e(t[s],(function(){i(s+1)})):i(s+1)};i(0)}var Pt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return jt(t,e,Pt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Zt(e)+'" via a navigation guard.')}function Bt(t,e){var n=jt(t,e,Pt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Ft(t,e){return jt(t,e,Pt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ut(t,e){return jt(t,e,Pt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function jt(t,e,n,i){var s=new Error(i);return s._isRouter=!0,s.from=t,s.to=e,s.type=n,s}var zt=["params","query","hash"];function Zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function qt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t){return function(e,n,i){var s=!1,r=0,o=null;Kt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){s=!0,r++;var l,c=Jt((function(e){Xt(e)&&(e=e.default),t.resolved="function"===typeof e?e:Q.extend(e),n.components[a]=e,r--,r<=0&&i()})),u=Jt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Ht(t)?t:new Error(e),i(o))}));try{l=t(c,u)}catch(d){u(d)}if(l)if("function"===typeof l.then)l.then(c,u);else{var h=l.component;h&&"function"===typeof h.then&&h.then(c,u)}}})),s||i()}}function Kt(t,e){return Gt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Gt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Jt(t){var e=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!e)return e=!0,t.apply(this,n)}}var Qt=function(t,e){this.router=t,this.base=te(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function te(t){if(!t)if(at){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ee(t,e){var n,i=Math.max(t.length,e.length);for(n=0;n<i;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ne(t,e,n,i){var s=Kt(t,(function(t,i,s,r){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,i,s,r)})):n(o,i,s,r)}));return Gt(i?s.reverse():s)}function ie(t,e){return"function"!==typeof t&&(t=Q.extend(t)),t.options[e]}function se(t){return ne(t,"beforeRouteLeave",oe,!0)}function re(t){return ne(t,"beforeRouteUpdate",oe)}function oe(t,e){if(e)return function(){return t.apply(e,arguments)}}function ae(t){return ne(t,"beforeRouteEnter",(function(t,e,n,i){return le(t,n,i)}))}function le(t,e,n){return function(i,s,r){return t(i,s,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),r(t)}))}}Qt.prototype.listen=function(t){this.cb=t},Qt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Qt.prototype.onError=function(t){this.errorCbs.push(t)},Qt.prototype.transitionTo=function(t,e,n){var i,s=this;try{i=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var r=this.current;this.confirmTransition(i,(function(){s.updateRoute(i),e&&e(i),s.ensureURL(),s.router.afterHooks.forEach((function(t){t&&t(i,r)})),s.ready||(s.ready=!0,s.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!s.ready&&(qt(t,Pt.redirected)&&r===m||(s.ready=!0,s.readyErrorCbs.forEach((function(e){e(t)}))))}))},Qt.prototype.confirmTransition=function(t,e,n){var i=this,s=this.current;this.pending=t;var r=function(t){!qt(t)&&Ht(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=s.matched.length-1;if(y(t,s)&&o===a&&t.matched[o]===s.matched[a])return this.ensureURL(),t.hash&&kt(this.router,s,t,!1),r(Bt(s,t));var l=ee(this.current.matched,t.matched),c=l.updated,u=l.deactivated,h=l.activated,d=[].concat(se(u),this.router.beforeHooks,re(c),h.map((function(t){return t.beforeEnter})),Wt(h)),p=function(e,n){if(i.pending!==t)return r(Ft(s,t));try{e(t,s,(function(e){!1===e?(i.ensureURL(!0),r(Ut(s,t))):Ht(e)?(i.ensureURL(!0),r(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(r(Vt(s,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(o){r(o)}};Mt(d,p,(function(){var n=ae(h),o=n.concat(i.router.resolveHooks);Mt(o,p,(function(){if(i.pending!==t)return r(Ft(s,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){k(t)}))}))}))},Qt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Qt.prototype.setupListeners=function(){},Qt.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var ce=function(t){function e(e,n){t.call(this,e,n),this._startLocation=ue(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Lt&&n;i&&this.listeners.push(_t());var s=function(){var n=t.current,s=ue(t.base);t.current===m&&s===t._startLocation||t.transitionTo(s,(function(t){i&&kt(e,t,n,!0)}))};window.addEventListener("popstate",s),this.listeners.push((function(){window.removeEventListener("popstate",s)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var i=this,s=this,r=s.current;this.transitionTo(t,(function(t){Nt(x(i.base+t.fullPath)),kt(i.router,t,r,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,s=this,r=s.current;this.transitionTo(t,(function(t){Rt(x(i.base+t.fullPath)),kt(i.router,t,r,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(ue(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Nt(e):Rt(e)}},e.prototype.getCurrentLocation=function(){return ue(this.base)},e}(Qt);function ue(t){var e=window.location.pathname,n=e.toLowerCase(),i=t.toLowerCase();return!t||n!==i&&0!==n.indexOf(x(i+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var he=function(t){function e(e,n,i){t.call(this,e,n),i&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Lt&&n;i&&this.listeners.push(_t());var s=function(){var e=t.current;pe()&&t.transitionTo(fe(),(function(n){i&&kt(t.router,n,e,!0),Lt||ve(n.fullPath)}))},r=Lt?"popstate":"hashchange";window.addEventListener(r,s),this.listeners.push((function(){window.removeEventListener(r,s)}))}},e.prototype.push=function(t,e,n){var i=this,s=this,r=s.current;this.transitionTo(t,(function(t){ge(t.fullPath),kt(i.router,t,r,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,s=this,r=s.current;this.transitionTo(t,(function(t){ve(t.fullPath),kt(i.router,t,r,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;fe()!==e&&(t?ge(e):ve(e))},e.prototype.getCurrentLocation=function(){return fe()},e}(Qt);function de(t){var e=ue(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function pe(){var t=fe();return"/"===t.charAt(0)||(ve("/"+t),!1)}function fe(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),i=n>=0?e.slice(0,n):e;return i+"#"+t}function ge(t){Lt?Nt(me(t)):window.location.hash=t}function ve(t){Lt?Rt(me(t)):window.location.replace(me(t))}var ye=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index+1).concat(t),i.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var t=e.current;e.index=n,e.updateRoute(i),e.router.afterHooks.forEach((function(e){e&&e(i,t)}))}),(function(t){qt(t,Pt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Qt),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),at||(e="abstract"),this.mode=e,e){case"history":this.history=new ce(this,t.base);break;case"hash":this.history=new he(this,t.base,this.fallback);break;case"abstract":this.history=new ye(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function _e(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function ke(t,e,n){var i="hash"===n?"#"+e:e;return t?x(t+"/"+i):i}be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ce||n instanceof he){var i=function(t){var i=n.current,s=e.options.scrollBehavior,r=Lt&&s;r&&"fullPath"in t&&kt(e,t,i,!1)},s=function(t){n.setupListeners(),i(t)};n.transitionTo(n.getCurrentLocation(),s,s)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return _e(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return _e(this.resolveHooks,t)},be.prototype.afterEach=function(t){return _e(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var i=J(t,e,n,this),s=this.match(i,e),r=s.redirectedFrom||s.fullPath,o=this.history.base,a=ke(o,r,this.mode);return{location:i,route:s,href:a,normalizedTo:i,resolved:s}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,we),be.install=ot,be.version="3.5.3",be.isNavigationFailure=qt,be.NavigationFailureType=Pt,be.START_LOCATION=m,at&&window.Vue&&window.Vue.use(be),e["Z"]=be},144:function(t,e,n){"use strict";
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var i=Object.freeze({});function s(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function l(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function h(t){return"[object Object]"===u.call(t)}function d(t){return"[object RegExp]"===u.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),s=0;s<i.length;s++)n[i[s]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function b(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var w=Object.prototype.hasOwnProperty;function _(t,e){return w.call(t,e)}function k(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var C=/-(\w)/g,T=k((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),S=k((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),E=/\B([A-Z])/g,I=k((function(t){return t.replace(E,"-$1").toLowerCase()}));function x(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var $=Function.prototype.bind?A:x;function O(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function D(t,e){for(var n in e)t[n]=e[n];return t}function L(t){for(var e={},n=0;n<t.length;n++)t[n]&&D(e,t[n]);return e}function N(t,e,n){}var R=function(t,e,n){return!1},M=function(t){return t};function P(t,e){if(t===e)return!0;var n=c(t),i=c(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var s=Array.isArray(t),r=Array.isArray(e);if(s&&r)return t.length===e.length&&t.every((function(t,n){return P(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(s||r)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return P(t[n],e[n])}))}catch(l){return!1}}function V(t,e){for(var n=0;n<t.length;n++)if(P(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",U=["component","directive","filter"],j=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:N,parsePlatformTagName:M,mustUseProp:R,async:!0,_lifecycleHooks:j},Z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var W=new RegExp("[^"+Z.source+".$_\\d]");function K(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,Y="__proto__"in{},X="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=J&&WXEnvironment.platform.toLowerCase(),tt=X&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,it=tt&&tt.indexOf("edge/")>0,st=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===Q),rt=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),ot={}.watch,at=!1;if(X)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){at=!0}}),window.addEventListener("test-passive",null,lt)}catch(So){}var ct=function(){return void 0===G&&(G=!X&&!J&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),G},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,pt="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);dt="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=N,mt=0,gt=function(){this.id=mt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){b(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var vt=[];function yt(t){vt.push(t),gt.target=t}function bt(){vt.pop(),gt.target=vt[vt.length-1]}var wt=function(t,e,n,i,s,r,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=s,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(wt.prototype,_t);var kt=function(t){void 0===t&&(t="");var e=new wt;return e.text=t,e.isComment=!0,e};function Ct(t){return new wt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new wt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var St=Array.prototype,Et=Object.create(St),It=["push","pop","shift","unshift","splice","sort","reverse"];It.forEach((function(t){var e=St[t];q(Et,t,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var s,r=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":s=n;break;case"splice":s=n.slice(2);break}return s&&o.observeArray(s),o.dep.notify(),r}))}));var xt=Object.getOwnPropertyNames(Et),At=!0;function $t(t){At=t}var Ot=function(t){this.value=t,this.dep=new gt,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(Y?Dt(t,Et):Lt(t,Et,xt),this.observeArray(t)):this.walk(t)};function Dt(t,e){t.__proto__=e}function Lt(t,e,n){for(var i=0,s=n.length;i<s;i++){var r=n[i];q(t,r,e[r])}}function Nt(t,e){var n;if(c(t)&&!(t instanceof wt))return _(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:At&&!ct()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function Rt(t,e,n,i,s){var r=new gt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,l=o&&o.set;a&&!l||2!==arguments.length||(n=t[e]);var c=!s&&Nt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(r.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Vt(e))),e},set:function(e){var i=a?a.call(t):n;e===i||e!==e&&i!==i||a&&!l||(l?l.call(t,e):n=e,c=!s&&Nt(e),r.notify())}})}}function Mt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Rt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Vt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Vt(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Rt(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Nt(t[e])};var Bt=z.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,i,s,r=pt?Reflect.ownKeys(e):Object.keys(e),o=0;o<r.length;o++)n=r[o],"__ob__"!==n&&(i=t[n],s=e[n],_(t,n)?i!==s&&h(i)&&h(s)&&Ft(i,s):Mt(t,n,s));return t}function Ut(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,s="function"===typeof t?t.call(n,n):t;return i?Ft(i,s):s}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function jt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?zt(n):n}function zt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Zt(t,e,n,i){var s=Object.create(t||null);return e?D(s,e):s}Bt.data=function(t,e,n){return n?Ut(t,e,n):e&&"function"!==typeof e?t:Ut(t,e)},j.forEach((function(t){Bt[t]=jt})),U.forEach((function(t){Bt[t+"s"]=Zt})),Bt.watch=function(t,e,n,i){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var s={};for(var r in D(s,t),e){var o=s[r],a=e[r];o&&!Array.isArray(o)&&(o=[o]),s[r]=o?o.concat(a):Array.isArray(a)?a:[a]}return s},Bt.props=Bt.methods=Bt.inject=Bt.computed=function(t,e,n,i){if(!t)return e;var s=Object.create(null);return D(s,t),e&&D(s,e),s},Bt.provide=Ut;var Ht=function(t,e){return void 0===e?t:e};function qt(t,e){var n=t.props;if(n){var i,s,r,o={};if(Array.isArray(n)){i=n.length;while(i--)s=n[i],"string"===typeof s&&(r=T(s),o[r]={type:null})}else if(h(n))for(var a in n)s=n[a],r=T(a),o[r]=h(s)?s:{type:s};else 0;t.props=o}}function Wt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var s=0;s<n.length;s++)i[n[s]]={from:n[s]};else if(h(n))for(var r in n){var o=n[r];i[r]=h(o)?D({from:r},o):{from:o}}else 0}}function Kt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Gt(t,e,n){if("function"===typeof e&&(e=e.options),qt(e,n),Wt(e,n),Kt(e),!e._base&&(e.extends&&(t=Gt(t,e.extends,n)),e.mixins))for(var i=0,s=e.mixins.length;i<s;i++)t=Gt(t,e.mixins[i],n);var r,o={};for(r in t)a(r);for(r in e)_(t,r)||a(r);function a(i){var s=Bt[i]||Ht;o[i]=s(t[i],e[i],n,i)}return o}function Yt(t,e,n,i){if("string"===typeof n){var s=t[e];if(_(s,n))return s[n];var r=T(n);if(_(s,r))return s[r];var o=S(r);if(_(s,o))return s[o];var a=s[n]||s[r]||s[o];return a}}function Xt(t,e,n,i){var s=e[t],r=!_(n,t),o=n[t],a=ne(Boolean,s.type);if(a>-1)if(r&&!_(s,"default"))o=!1;else if(""===o||o===I(t)){var l=ne(String,s.type);(l<0||a<l)&&(o=!0)}if(void 0===o){o=Jt(i,s,t);var c=At;$t(!0),Nt(o),$t(c)}return o}function Jt(t,e,n){if(_(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==te(e.type)?i.call(t):i}}var Qt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Qt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(ee(e[n],t))return n;return-1}function ie(t,e,n){yt();try{if(e){var i=e;while(i=i.$parent){var s=i.$options.errorCaptured;if(s)for(var r=0;r<s.length;r++)try{var o=!1===s[r].call(i,t,e,n);if(o)return}catch(So){re(So,i,"errorCaptured hook")}}}re(t,e,n)}finally{bt()}}function se(t,e,n,i,s){var r;try{r=n?t.apply(e,n):t.call(e),r&&!r._isVue&&f(r)&&!r._handled&&(r.catch((function(t){return ie(t,i,s+" (Promise/async)")})),r._handled=!0)}catch(So){ie(So,i,s)}return r}function re(t,e,n){if(z.errorHandler)try{return z.errorHandler.call(null,t,e,n)}catch(So){So!==t&&oe(So,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!X&&!J||"undefined"===typeof console)throw t;console.error(t)}var ae,le=!1,ce=[],ue=!1;function he(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var de=Promise.resolve();ae=function(){de.then(he),st&&setTimeout(N)},le=!0}else if(et||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ae="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var pe=1,fe=new MutationObserver(he),me=document.createTextNode(String(pe));fe.observe(me,{characterData:!0}),ae=function(){pe=(pe+1)%2,me.data=String(pe)},le=!0}function ge(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(So){ie(So,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,ae()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new dt;function ye(t){be(t,ve),ve.clear()}function be(t,e){var n,i,s=Array.isArray(t);if(!(!s&&!c(t)||Object.isFrozen(t)||t instanceof wt)){if(t.__ob__){var r=t.__ob__.dep.id;if(e.has(r))return;e.add(r)}if(s){n=t.length;while(n--)be(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)be(t[i[n]],e)}}}var we=k((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function _e(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return se(i,null,arguments,e,"v-on handler");for(var s=i.slice(),r=0;r<s.length;r++)se(s[r],null,t,e,"v-on handler")}return n.fns=t,n}function ke(t,e,n,i,r,a){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=we(l),s(c)||(s(u)?(s(c.fns)&&(c=t[l]=_e(c,a)),o(h.once)&&(c=t[l]=r(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)s(t[l])&&(h=we(l),i(h.name,e[l],h.capture))}function Ce(t,e,n){var i;t instanceof wt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function l(){n.apply(this,arguments),b(i.fns,l)}s(a)?i=_e([l]):r(a.fns)&&o(a.merged)?(i=a,i.fns.push(l)):i=_e([a,l]),i.merged=!0,t[e]=i}function Te(t,e,n){var i=e.options.props;if(!s(i)){var o={},a=t.attrs,l=t.props;if(r(a)||r(l))for(var c in i){var u=I(c);Se(o,l,c,u,!0)||Se(o,a,c,u,!1)}return o}}function Se(t,e,n,i,s){if(r(e)){if(_(e,n))return t[n]=e[n],s||delete e[n],!0;if(_(e,i))return t[n]=e[i],s||delete e[i],!0}return!1}function Ee(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ie(t){return l(t)?[Ct(t)]:Array.isArray(t)?Ae(t):void 0}function xe(t){return r(t)&&r(t.text)&&a(t.isComment)}function Ae(t,e){var n,i,a,c,u=[];for(n=0;n<t.length;n++)i=t[n],s(i)||"boolean"===typeof i||(a=u.length-1,c=u[a],Array.isArray(i)?i.length>0&&(i=Ae(i,(e||"")+"_"+n),xe(i[0])&&xe(c)&&(u[a]=Ct(c.text+i[0].text),i.shift()),u.push.apply(u,i)):l(i)?xe(c)?u[a]=Ct(c.text+i):""!==i&&u.push(Ct(i)):xe(i)&&xe(c)?u[a]=Ct(c.text+i.text):(o(t._isVList)&&r(i.tag)&&s(i.key)&&r(e)&&(i.key="__vlist"+e+"_"+n+"__"),u.push(i)));return u}function $e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=De(t.$options.inject,t);e&&($t(!1),Object.keys(e).forEach((function(n){Rt(t,n,e[n])})),$t(!0))}function De(t,e){if(t){for(var n=Object.create(null),i=pt?Reflect.ownKeys(t):Object.keys(t),s=0;s<i.length;s++){var r=i[s];if("__ob__"!==r){var o=t[r].from,a=e;while(a){if(a._provided&&_(a._provided,o)){n[r]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[r]){var l=t[r].default;n[r]="function"===typeof l?l.call(e):l}else 0}}return n}}function Le(t,e){if(!t||!t.length)return{};for(var n={},i=0,s=t.length;i<s;i++){var r=t[i],o=r.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,r.context!==e&&r.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(r);else{var a=o.slot,l=n[a]||(n[a]=[]);"template"===r.tag?l.push.apply(l,r.children||[]):l.push(r)}}for(var c in n)n[c].every(Ne)&&delete n[c];return n}function Ne(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Re(t){return t.isComment&&t.asyncFactory}function Me(t,e,n){var s,r=Object.keys(e).length>0,o=t?!!t.$stable:!r,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==i&&a===n.$key&&!r&&!n.$hasNormal)return n;for(var l in s={},t)t[l]&&"$"!==l[0]&&(s[l]=Pe(e,l,t[l]))}else s={};for(var c in e)c in s||(s[c]=Ve(e,c));return t&&Object.isExtensible(t)&&(t._normalized=s),q(s,"$stable",o),q(s,"$key",a),q(s,"$hasNormal",r),s}function Pe(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ie(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Re(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Ve(t,e){return function(){return t[e]}}function Be(t,e){var n,i,s,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,s=t.length;i<s;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(c(t))if(pt&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,s=o.length;i<s;i++)a=o[i],n[i]=e(t[a],a,i);return r(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,i){var s,r=this.$scopedSlots[t];r?(n=n||{},i&&(n=D(D({},i),n)),s=r(n)||("function"===typeof e?e():e)):s=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},s):s}function Ue(t){return Yt(this.$options,"filters",t,!0)||M}function je(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function ze(t,e,n,i,s){var r=z.keyCodes[e]||n;return s&&i&&!z.keyCodes[e]?je(s,i):r?je(r,t):i?I(i)!==e:void 0===t}function Ze(t,e,n,i,s){if(n)if(c(n)){var r;Array.isArray(n)&&(n=L(n));var o=function(o){if("class"===o||"style"===o||y(o))r=t;else{var a=t.attrs&&t.attrs.type;r=i||z.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=T(o),c=I(o);if(!(l in r)&&!(c in r)&&(r[o]=n[o],s)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),We(i,"__static__"+t,!1)),i}function qe(t,e,n){return We(t,"__once__"+e+(n?"_"+n:""),!0),t}function We(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ke(t[i],e+"_"+i,n);else Ke(t,e,n)}function Ke(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ge(t,e){if(e)if(h(e)){var n=t.on=t.on?D({},t.on):{};for(var i in e){var s=n[i],r=e[i];n[i]=s?[].concat(s,r):r}}else;return t}function Ye(t,e,n,i){e=e||{$stable:!n};for(var s=0;s<t.length;s++){var r=t[s];Array.isArray(r)?Ye(r,e,n):r&&(r.proxy&&(r.fn.proxy=!0),e[r.key]=r.fn)}return i&&(e.$key=i),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=qe,t._n=g,t._s=m,t._l=Be,t._t=Fe,t._q=P,t._i=V,t._m=He,t._f=Ue,t._k=ze,t._b=Ze,t._v=Ct,t._e=kt,t._u=Ye,t._g=Ge,t._d=Xe,t._p=Je}function tn(t,e,n,s,r){var a,l=this,c=r.options;_(s,"_uid")?(a=Object.create(s),a._original=s):(a=s,s=s._original);var u=o(c._compiled),h=!u;this.data=t,this.props=e,this.children=n,this.parent=s,this.listeners=t.on||i,this.injections=De(c.inject,s),this.slots=function(){return l.$slots||Me(t.scopedSlots,l.$slots=Le(n,s)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Me(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Me(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var r=fn(a,t,e,n,i,h);return r&&!Array.isArray(r)&&(r.fnScopeId=c._scopeId,r.fnContext=s),r}:this._c=function(t,e,n,i){return fn(a,t,e,n,i,h)}}function en(t,e,n,s,o){var a=t.options,l={},c=a.props;if(r(c))for(var u in c)l[u]=Xt(u,c,e||i);else r(n.attrs)&&sn(l,n.attrs),r(n.props)&&sn(l,n.props);var h=new tn(n,l,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof wt)return nn(d,n,h.parent,a,h);if(Array.isArray(d)){for(var p=Ie(d)||[],f=new Array(p.length),m=0;m<p.length;m++)f[m]=nn(p[m],n,h.parent,a,h);return f}}function nn(t,e,n,i,s){var r=Tt(t);return r.fnContext=n,r.fnOptions=i,e.slot&&((r.data||(r.data={})).slot=e.slot),r}function sn(t,e){for(var n in e)t[T(n)]=e[n]}Qe(tn.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var i=t.componentInstance=ln(t,Dn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Pn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Un(n,"mounted")),t.data.keepAlive&&(e._isMounted?ti(n):Bn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},on=Object.keys(rn);function an(t,e,n,i,a){if(!s(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(s(t.cid)&&(u=t,t=Tn(u,l),void 0===t))return Cn(u,e,n,i,a);e=e||{},Ci(t),r(e.model)&&hn(t.options,e);var h=Te(e,t,a);if(o(t.options.functional))return en(t,h,e,n,i);var d=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}cn(e);var f=t.options.name||a,m=new wt("vue-component-"+t.cid+(f?"-"+f:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:i},u);return m}}}function ln(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var i=on[n],s=e[i],r=rn[i];s===r||s&&s._merged||(e[i]=s?un(r,s):r)}}function un(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[i],a=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[i]=[a].concat(o)):s[i]=a}var dn=1,pn=2;function fn(t,e,n,i,s,r){return(Array.isArray(n)||l(n))&&(s=i,i=n,n=void 0),o(r)&&(s=pn),mn(t,e,n,i,s)}function mn(t,e,n,i,s){if(r(n)&&r(n.__ob__))return kt();if(r(n)&&r(n.is)&&(e=n.is),!e)return kt();var o,a,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===pn?i=Ie(i):s===dn&&(i=Ee(i)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||z.getTagNamespace(e),o=z.isReservedTag(e)?new wt(z.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Yt(t.$options,"components",e))?new wt(e,n,i,void 0,void 0,t):an(l,n,t,i,e)):o=an(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(a)&&gn(o,a),r(n)&&vn(n),o):kt()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var i=0,a=t.children.length;i<a;i++){var l=t.children[i];r(l.tag)&&(s(l.ns)||o(n)&&"svg"!==l.tag)&&gn(l,e,n)}}function vn(t){c(t.style)&&ye(t.style),c(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,s=n&&n.context;t.$slots=Le(e._renderChildren,s),t.$scopedSlots=i,t._c=function(e,n,i,s){return fn(t,e,n,i,s,!1)},t.$createElement=function(e,n,i,s){return fn(t,e,n,i,s,!0)};var r=n&&n.data;Rt(t,"$attrs",r&&r.attrs||i,null,!0),Rt(t,"$listeners",e._parentListeners||i,null,!0)}var bn,wn=null;function _n(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,s=n._parentVnode;s&&(e.$scopedSlots=Me(s.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=s;try{wn=e,t=i.call(e._renderProxy,e.$createElement)}catch(So){ie(So,e,"render"),t=e._vnode}finally{wn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof wt||(t=kt()),t.parent=s,t}}function kn(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function Cn(t,e,n,i,s){var r=kt();return r.asyncFactory=t,r.asyncMeta={data:e,context:n,children:i,tag:s},r}function Tn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=wn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var i=t.owners=[n],a=!0,l=null,u=null;n.$on("hook:destroyed",(function(){return b(i,n)}));var h=function(t){for(var e=0,n=i.length;e<n;e++)i[e].$forceUpdate();t&&(i.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},d=B((function(n){t.resolved=kn(n,e),a?i.length=0:h(!0)})),p=B((function(e){r(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,p);return c(m)&&(f(m)?s(t.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),r(m.error)&&(t.errorComp=kn(m.error,e)),r(m.loading)&&(t.loadingComp=kn(m.loading,e),0===m.delay?t.loading=!0:l=setTimeout((function(){l=null,s(t.resolved)&&s(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),r(m.timeout)&&(u=setTimeout((function(){u=null,s(t.resolved)&&p(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Sn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||Re(n)))return n}}function En(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&$n(t,e)}function In(t,e){bn.$on(t,e)}function xn(t,e){bn.$off(t,e)}function An(t,e){var n=bn;return function i(){var s=e.apply(null,arguments);null!==s&&n.$off(t,i)}}function $n(t,e,n){bn=t,ke(e,n||{},In,xn,An,t),bn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var s=0,r=t.length;s<r;s++)i.$on(t[s],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,s=t.length;i<s;i++)n.$off(t[i],e);return n}var r,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(r=o[a],r===e||r.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?O(n):n;for(var i=O(arguments,1),s='event handler for "'+t+'"',r=0,o=n.length;r<o;r++)se(n[r],e,i,e,s)}return e}}var Dn=null;function Ln(t){var e=Dn;return Dn=t,function(){Dn=e}}function Nn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Rn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,s=n._vnode,r=Ln(n);n._vnode=t,n.$el=s?n.__patch__(s,t):n.__patch__(n.$el,t,e,!1),r(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Un(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||b(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Un(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Mn(t,e,n){var i;return t.$el=e,t.$options.render||(t.$options.render=kt),Un(t,"beforeMount"),i=function(){t._update(t._render(),n)},new si(t,i,N,{before:function(){t._isMounted&&!t._isDestroyed&&Un(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Un(t,"mounted")),t}function Pn(t,e,n,s,r){var o=s.data.scopedSlots,a=t.$scopedSlots,l=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),c=!!(r||t.$options._renderChildren||l);if(t.$options._parentVnode=s,t.$vnode=s,t._vnode&&(t._vnode.parent=s),t.$options._renderChildren=r,t.$attrs=s.data.attrs||i,t.$listeners=n||i,e&&t.$options.props){$t(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var p=h[d],f=t.$options.props;u[p]=Xt(p,f,e,t)}$t(!0),t.$options.propsData=e}n=n||i;var m=t.$options._parentListeners;t.$options._parentListeners=n,$n(t,n,m),c&&(t.$slots=Le(r,s.context),t.$forceUpdate())}function Vn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Bn(t,e){if(e){if(t._directInactive=!1,Vn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Bn(t.$children[n]);Un(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!Vn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Un(t,"deactivated")}}function Un(t,e){yt();var n=t.$options[e],i=e+" hook";if(n)for(var s=0,r=n.length;s<r;s++)se(n[s],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),bt()}var jn=[],zn=[],Zn={},Hn=!1,qn=!1,Wn=0;function Kn(){Wn=jn.length=zn.length=0,Zn={},Hn=qn=!1}var Gn=0,Yn=Date.now;if(X&&!et){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Xn.now()})}function Jn(){var t,e;for(Gn=Yn(),qn=!0,jn.sort((function(t,e){return t.id-e.id})),Wn=0;Wn<jn.length;Wn++)t=jn[Wn],t.before&&t.before(),e=t.id,Zn[e]=null,t.run();var n=zn.slice(),i=jn.slice();Kn(),ei(n),Qn(i),ut&&z.devtools&&ut.emit("flush")}function Qn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Un(i,"updated")}}function ti(t){t._inactive=!1,zn.push(t)}function ei(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Bn(t[e],!0)}function ni(t){var e=t.id;if(null==Zn[e]){if(Zn[e]=!0,qn){var n=jn.length-1;while(n>Wn&&jn[n].id>t.id)n--;jn.splice(n+1,0,t)}else jn.push(t);Hn||(Hn=!0,ge(Jn))}}var ii=0,si=function(t,e,n,i,s){this.vm=t,s&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ii,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()};si.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(So){if(!this.user)throw So;ie(So,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),bt(),this.cleanupDeps()}return t},si.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},si.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},si.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ni(this)},si.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';se(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},si.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},si.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},si.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||b(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ri={enumerable:!0,configurable:!0,get:N,set:N};function oi(t,e,n){ri.get=function(){return this[e][n]},ri.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ri)}function ai(t){t._watchers=[];var e=t.$options;e.props&&li(t,e.props),e.methods&&gi(t,e.methods),e.data?ci(t):Nt(t._data={},!0),e.computed&&di(t,e.computed),e.watch&&e.watch!==ot&&vi(t,e.watch)}function li(t,e){var n=t.$options.propsData||{},i=t._props={},s=t.$options._propKeys=[],r=!t.$parent;r||$t(!1);var o=function(r){s.push(r);var o=Xt(r,e,n,t);Rt(i,r,o),r in t||oi(t,"_props",r)};for(var a in e)o(a);$t(!0)}function ci(t){var e=t.$options.data;e=t._data="function"===typeof e?ui(e,t):e||{},h(e)||(e={});var n=Object.keys(e),i=t.$options.props,s=(t.$options.methods,n.length);while(s--){var r=n[s];0,i&&_(i,r)||H(r)||oi(t,"_data",r)}Nt(e,!0)}function ui(t,e){yt();try{return t.call(e,e)}catch(So){return ie(So,e,"data()"),{}}finally{bt()}}var hi={lazy:!0};function di(t,e){var n=t._computedWatchers=Object.create(null),i=ct();for(var s in e){var r=e[s],o="function"===typeof r?r:r.get;0,i||(n[s]=new si(t,o||N,N,hi)),s in t||pi(t,s,r)}}function pi(t,e,n){var i=!ct();"function"===typeof n?(ri.get=i?fi(e):mi(n),ri.set=N):(ri.get=n.get?i&&!1!==n.cache?fi(e):mi(n.get):N,ri.set=n.set||N),Object.defineProperty(t,e,ri)}function fi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function mi(t){return function(){return t.call(this,this)}}function gi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?N:$(e[n],t)}function vi(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var s=0;s<i.length;s++)yi(t,n,i[s]);else yi(t,n,i)}}function yi(t,e,n,i){return h(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function bi(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var i=this;if(h(e))return yi(i,t,e,n);n=n||{},n.user=!0;var s=new si(i,t,e,n);if(n.immediate){var r='callback for immediate watcher "'+s.expression+'"';yt(),se(e,i,[s.value],i,r),bt()}return function(){s.teardown()}}}var wi=0;function _i(t){t.prototype._init=function(t){var e=this;e._uid=wi++,e._isVue=!0,t&&t._isComponent?ki(e,t):e.$options=Gt(Ci(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Nn(e),En(e),yn(e),Un(e,"beforeCreate"),Oe(e),ai(e),$e(e),Un(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function ki(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var s=i.componentOptions;n.propsData=s.propsData,n._parentListeners=s.listeners,n._renderChildren=s.children,n._componentTag=s.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Ci(t){var e=t.options;if(t.super){var n=Ci(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var s=Ti(t);s&&D(t.extendOptions,s),e=t.options=Gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Ti(t){var e,n=t.options,i=t.sealedOptions;for(var s in n)n[s]!==i[s]&&(e||(e={}),e[s]=n[s]);return e}function Si(t){this._init(t)}function Ei(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ii(t){t.mixin=function(t){return this.options=Gt(this.options,t),this}}function xi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,s=t._Ctor||(t._Ctor={});if(s[i])return s[i];var r=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Gt(n.options,t),o["super"]=n,o.options.props&&Ai(o),o.options.computed&&$i(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,U.forEach((function(t){o[t]=n[t]})),r&&(o.options.components[r]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=D({},o.options),s[i]=o,o}}function Ai(t){var e=t.options.props;for(var n in e)oi(t.prototype,"_props",n)}function $i(t){var e=t.options.computed;for(var n in e)pi(t.prototype,n,e[n])}function Oi(t){U.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Di(t){return t&&(t.Ctor.options.name||t.tag)}function Li(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!d(t)&&t.test(e)}function Ni(t,e){var n=t.cache,i=t.keys,s=t._vnode;for(var r in n){var o=n[r];if(o){var a=o.name;a&&!e(a)&&Ri(n,r,i,s)}}}function Ri(t,e,n,i){var s=t[e];!s||i&&s.tag===i.tag||s.componentInstance.$destroy(),t[e]=null,b(n,e)}_i(Si),bi(Si),On(Si),Rn(Si),_n(Si);var Mi=[String,RegExp,Array],Pi={name:"keep-alive",abstract:!0,props:{include:Mi,exclude:Mi,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,s=t.keyToCache;if(i){var r=i.tag,o=i.componentInstance,a=i.componentOptions;e[s]={name:Di(a),tag:r,componentInstance:o},n.push(s),this.max&&n.length>parseInt(this.max)&&Ri(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ri(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Ni(t,(function(t){return Li(e,t)}))})),this.$watch("exclude",(function(e){Ni(t,(function(t){return!Li(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Sn(t),n=e&&e.componentOptions;if(n){var i=Di(n),s=this,r=s.include,o=s.exclude;if(r&&(!i||!Li(r,i))||o&&i&&Li(o,i))return e;var a=this,l=a.cache,c=a.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,b(c,u),c.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},Vi={KeepAlive:Pi};function Bi(t){var e={get:function(){return z}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:D,mergeOptions:Gt,defineReactive:Rt},t.set=Mt,t.delete=Pt,t.nextTick=ge,t.observable=function(t){return Nt(t),t},t.options=Object.create(null),U.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,D(t.options.components,Vi),Ei(t),Ii(t),xi(t),Oi(t)}Bi(Si),Object.defineProperty(Si.prototype,"$isServer",{get:ct}),Object.defineProperty(Si.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Si,"FunctionalRenderContext",{value:tn}),Si.version="2.6.14";var Fi=v("style,class"),Ui=v("input,textarea,option,select,progress"),ji=function(t,e,n){return"value"===n&&Ui(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},zi=v("contenteditable,draggable,spellcheck"),Zi=v("events,caret,typing,plaintext-only"),Hi=function(t,e){return Yi(e)||"false"===e?"false":"contenteditable"===t&&Zi(e)?e:"true"},qi=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wi="http://www.w3.org/1999/xlink",Ki=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Gi=function(t){return Ki(t)?t.slice(6,t.length):""},Yi=function(t){return null==t||!1===t};function Xi(t){var e=t.data,n=t,i=t;while(r(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=Ji(i.data,e));while(r(n=n.parent))n&&n.data&&(e=Ji(e,n.data));return Qi(e.staticClass,e.class)}function Ji(t,e){return{staticClass:ts(t.staticClass,e.staticClass),class:r(t.class)?[t.class,e.class]:e.class}}function Qi(t,e){return r(t)||r(e)?ts(t,es(e)):""}function ts(t,e){return t?e?t+" "+e:t:e||""}function es(t){return Array.isArray(t)?ns(t):c(t)?is(t):"string"===typeof t?t:""}function ns(t){for(var e,n="",i=0,s=t.length;i<s;i++)r(e=es(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function is(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ss={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rs=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),os=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),as=function(t){return rs(t)||os(t)};function ls(t){return os(t)?"svg":"math"===t?"math":void 0}var cs=Object.create(null);function us(t){if(!X)return!0;if(as(t))return!1;if(t=t.toLowerCase(),null!=cs[t])return cs[t];var e=document.createElement(t);return t.indexOf("-")>-1?cs[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:cs[t]=/HTMLUnknownElement/.test(e.toString())}var hs=v("text,number,password,search,email,tel,url");function ds(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function ps(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fs(t,e){return document.createElementNS(ss[t],e)}function ms(t){return document.createTextNode(t)}function gs(t){return document.createComment(t)}function vs(t,e,n){t.insertBefore(e,n)}function ys(t,e){t.removeChild(e)}function bs(t,e){t.appendChild(e)}function ws(t){return t.parentNode}function _s(t){return t.nextSibling}function ks(t){return t.tagName}function Cs(t,e){t.textContent=e}function Ts(t,e){t.setAttribute(e,"")}var Ss=Object.freeze({createElement:ps,createElementNS:fs,createTextNode:ms,createComment:gs,insertBefore:vs,removeChild:ys,appendChild:bs,parentNode:ws,nextSibling:_s,tagName:ks,setTextContent:Cs,setStyleScope:Ts}),Es={create:function(t,e){Is(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Is(t,!0),Is(e))},destroy:function(t){Is(t,!0)}};function Is(t,e){var n=t.data.ref;if(r(n)){var i=t.context,s=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?b(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var xs=new wt("",{},[]),As=["create","activate","update","remove","destroy"];function $s(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&Os(t,e)||o(t.isAsyncPlaceholder)&&s(e.asyncFactory.error))}function Os(t,e){if("input"!==t.tag)return!0;var n,i=r(n=t.data)&&r(n=n.attrs)&&n.type,s=r(n=e.data)&&r(n=n.attrs)&&n.type;return i===s||hs(i)&&hs(s)}function Ds(t,e,n){var i,s,o={};for(i=e;i<=n;++i)s=t[i].key,r(s)&&(o[s]=i);return o}function Ls(t){var e,n,i={},a=t.modules,c=t.nodeOps;for(e=0;e<As.length;++e)for(i[As[e]]=[],n=0;n<a.length;++n)r(a[n][As[e]])&&i[As[e]].push(a[n][As[e]]);function u(t){return new wt(c.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=c.parentNode(t);r(e)&&c.removeChild(e,t)}function p(t,e,n,i,s,a,l){if(r(t.elm)&&r(a)&&(t=a[l]=Tt(t)),t.isRootInsert=!s,!f(t,e,n,i)){var u=t.data,h=t.children,d=t.tag;r(d)?(t.elm=t.ns?c.createElementNS(t.ns,d):c.createElement(d,t),k(t),b(t,h,e),r(u)&&_(t,e),y(n,t.elm,i)):o(t.isComment)?(t.elm=c.createComment(t.text),y(n,t.elm,i)):(t.elm=c.createTextNode(t.text),y(n,t.elm,i))}}function f(t,e,n,i){var s=t.data;if(r(s)){var a=r(t.componentInstance)&&s.keepAlive;if(r(s=s.hook)&&r(s=s.init)&&s(t,!1),r(t.componentInstance))return m(t,e),y(n,t.elm,i),o(a)&&g(t,e,n,i),!0}}function m(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),k(t)):(Is(t),e.push(t))}function g(t,e,n,s){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,r(o=a.data)&&r(o=o.transition)){for(o=0;o<i.activate.length;++o)i.activate[o](xs,a);e.push(a);break}y(n,t.elm,s)}function y(t,e,n){r(t)&&(r(n)?c.parentNode(n)===t&&c.insertBefore(t,e,n):c.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var i=0;i<e.length;++i)p(e[i],n,t.elm,null,!0,e,i)}else l(t.text)&&c.appendChild(t.elm,c.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return r(t.tag)}function _(t,n){for(var s=0;s<i.create.length;++s)i.create[s](xs,t);e=t.data.hook,r(e)&&(r(e.create)&&e.create(xs,t),r(e.insert)&&n.push(t))}function k(t){var e;if(r(e=t.fnScopeId))c.setStyleScope(t.elm,e);else{var n=t;while(n)r(e=n.context)&&r(e=e.$options._scopeId)&&c.setStyleScope(t.elm,e),n=n.parent}r(e=Dn)&&e!==t.context&&e!==t.fnContext&&r(e=e.$options._scopeId)&&c.setStyleScope(t.elm,e)}function C(t,e,n,i,s,r){for(;i<=s;++i)p(n[i],r,t,e,!1,n,i)}function T(t){var e,n,s=t.data;if(r(s))for(r(e=s.hook)&&r(e=e.destroy)&&e(t),e=0;e<i.destroy.length;++e)i.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)T(t.children[n])}function S(t,e,n){for(;e<=n;++e){var i=t[e];r(i)&&(r(i.tag)?(E(i),T(i)):d(i.elm))}}function E(t,e){if(r(e)||r(t.data)){var n,s=i.remove.length+1;for(r(e)?e.listeners+=s:e=h(t.elm,s),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&E(n,e),n=0;n<i.remove.length;++n)i.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else d(t.elm)}function I(t,e,n,i,o){var a,l,u,h,d=0,f=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,b=n[0],w=n[y],_=!o;while(d<=m&&f<=y)s(g)?g=e[++d]:s(v)?v=e[--m]:$s(g,b)?(A(g,b,i,n,f),g=e[++d],b=n[++f]):$s(v,w)?(A(v,w,i,n,y),v=e[--m],w=n[--y]):$s(g,w)?(A(g,w,i,n,y),_&&c.insertBefore(t,g.elm,c.nextSibling(v.elm)),g=e[++d],w=n[--y]):$s(v,b)?(A(v,b,i,n,f),_&&c.insertBefore(t,v.elm,g.elm),v=e[--m],b=n[++f]):(s(a)&&(a=Ds(e,d,m)),l=r(b.key)?a[b.key]:x(b,e,d,m),s(l)?p(b,i,t,g.elm,!1,n,f):(u=e[l],$s(u,b)?(A(u,b,i,n,f),e[l]=void 0,_&&c.insertBefore(t,u.elm,g.elm)):p(b,i,t,g.elm,!1,n,f)),b=n[++f]);d>m?(h=s(n[y+1])?null:n[y+1].elm,C(t,h,n,f,y,i)):f>y&&S(e,d,m)}function x(t,e,n,i){for(var s=n;s<i;s++){var o=e[s];if(r(o)&&$s(t,o))return s}}function A(t,e,n,a,l,u){if(t!==e){r(e.elm)&&r(a)&&(e=a[l]=Tt(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,p=e.data;r(p)&&r(d=p.hook)&&r(d=d.prepatch)&&d(t,e);var f=t.children,m=e.children;if(r(p)&&w(e)){for(d=0;d<i.update.length;++d)i.update[d](t,e);r(d=p.hook)&&r(d=d.update)&&d(t,e)}s(e.text)?r(f)&&r(m)?f!==m&&I(h,f,m,n,u):r(m)?(r(t.text)&&c.setTextContent(h,""),C(h,null,m,0,m.length-1,n)):r(f)?S(f,0,f.length-1):r(t.text)&&c.setTextContent(h,""):t.text!==e.text&&c.setTextContent(h,e.text),r(p)&&r(d=p.hook)&&r(d=d.postpatch)&&d(t,e)}}}function $(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var O=v("attrs,class,staticClass,staticStyle,key");function D(t,e,n,i){var s,a=e.tag,l=e.data,c=e.children;if(i=i||l&&l.pre,e.elm=t,o(e.isComment)&&r(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(r(l)&&(r(s=l.hook)&&r(s=s.init)&&s(e,!0),r(s=e.componentInstance)))return m(e,n),!0;if(r(a)){if(r(c))if(t.hasChildNodes())if(r(s=l)&&r(s=s.domProps)&&r(s=s.innerHTML)){if(s!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<c.length;d++){if(!h||!D(h,c[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else b(e,c,n);if(r(l)){var p=!1;for(var f in l)if(!O(f)){p=!0,_(e,n);break}!p&&l["class"]&&ye(l["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!s(e)){var l=!1,h=[];if(s(t))l=!0,p(e,h);else{var d=r(t.nodeType);if(!d&&$s(t,e))A(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),o(n)&&D(t,e,h))return $(e,h,!0),t;t=u(t)}var f=t.elm,m=c.parentNode(f);if(p(e,h,f._leaveCb?null:m,c.nextSibling(f)),r(e.parent)){var g=e.parent,v=w(e);while(g){for(var y=0;y<i.destroy.length;++y)i.destroy[y](g);if(g.elm=e.elm,v){for(var b=0;b<i.create.length;++b)i.create[b](xs,g);var _=g.data.hook.insert;if(_.merged)for(var k=1;k<_.fns.length;k++)_.fns[k]()}else Is(g);g=g.parent}}r(m)?S([t],0,0):r(t.tag)&&T(t)}}return $(e,h,l),e.elm}r(t)&&T(t)}}var Ns={create:Rs,update:Rs,destroy:function(t){Rs(t,xs)}};function Rs(t,e){(t.data.directives||e.data.directives)&&Ms(t,e)}function Ms(t,e){var n,i,s,r=t===xs,o=e===xs,a=Vs(t.data.directives,t.context),l=Vs(e.data.directives,e.context),c=[],u=[];for(n in l)i=a[n],s=l[n],i?(s.oldValue=i.value,s.oldArg=i.arg,Fs(s,"update",e,t),s.def&&s.def.componentUpdated&&u.push(s)):(Fs(s,"bind",e,t),s.def&&s.def.inserted&&c.push(s));if(c.length){var h=function(){for(var n=0;n<c.length;n++)Fs(c[n],"inserted",e,t)};r?Ce(e,"insert",h):h()}if(u.length&&Ce(e,"postpatch",(function(){for(var n=0;n<u.length;n++)Fs(u[n],"componentUpdated",e,t)})),!r)for(n in a)l[n]||Fs(a[n],"unbind",t,t,o)}var Ps=Object.create(null);function Vs(t,e){var n,i,s=Object.create(null);if(!t)return s;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=Ps),s[Bs(i)]=i,i.def=Yt(e.$options,"directives",i.name,!0);return s}function Bs(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fs(t,e,n,i,s){var r=t.def&&t.def[e];if(r)try{r(n.elm,t,n,i,s)}catch(So){ie(So,n.context,"directive "+t.name+" "+e+" hook")}}var Us=[Es,Ns];function js(t,e){var n=e.componentOptions;if((!r(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(t.data.attrs)||!s(e.data.attrs))){var i,o,a,l=e.elm,c=t.data.attrs||{},u=e.data.attrs||{};for(i in r(u.__ob__)&&(u=e.data.attrs=D({},u)),u)o=u[i],a=c[i],a!==o&&zs(l,i,o,e.data.pre);for(i in(et||it)&&u.value!==c.value&&zs(l,"value",u.value),c)s(u[i])&&(Ki(i)?l.removeAttributeNS(Wi,Gi(i)):zi(i)||l.removeAttribute(i))}}function zs(t,e,n,i){i||t.tagName.indexOf("-")>-1?Zs(t,e,n):qi(e)?Yi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):zi(e)?t.setAttribute(e,Hi(e,n)):Ki(e)?Yi(n)?t.removeAttributeNS(Wi,Gi(e)):t.setAttributeNS(Wi,e,n):Zs(t,e,n)}function Zs(t,e,n){if(Yi(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var Hs={create:js,update:js};function qs(t,e){var n=e.elm,i=e.data,o=t.data;if(!(s(i.staticClass)&&s(i.class)&&(s(o)||s(o.staticClass)&&s(o.class)))){var a=Xi(e),l=n._transitionClasses;r(l)&&(a=ts(a,es(l))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Ws,Ks={create:qs,update:qs},Gs="__r",Ys="__c";function Xs(t){if(r(t[Gs])){var e=et?"change":"input";t[e]=[].concat(t[Gs],t[e]||[]),delete t[Gs]}r(t[Ys])&&(t.change=[].concat(t[Ys],t.change||[]),delete t[Ys])}function Js(t,e,n){var i=Ws;return function s(){var r=e.apply(null,arguments);null!==r&&er(t,s,n,i)}}var Qs=le&&!(rt&&Number(rt[1])<=53);function tr(t,e,n,i){if(Qs){var s=Gn,r=e;e=r._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=s||t.timeStamp<=0||t.target.ownerDocument!==document)return r.apply(this,arguments)}}Ws.addEventListener(t,e,at?{capture:n,passive:i}:n)}function er(t,e,n,i){(i||Ws).removeEventListener(t,e._wrapper||e,n)}function nr(t,e){if(!s(t.data.on)||!s(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Ws=e.elm,Xs(n),ke(n,i,tr,er,Js,e.context),Ws=void 0}}var ir,sr={create:nr,update:nr};function rr(t,e){if(!s(t.data.domProps)||!s(e.data.domProps)){var n,i,o=e.elm,a=t.data.domProps||{},l=e.data.domProps||{};for(n in r(l.__ob__)&&(l=e.data.domProps=D({},l)),a)n in l||(o[n]="");for(n in l){if(i=l[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=i;var c=s(i)?"":String(i);or(o,c)&&(o.value=c)}else if("innerHTML"===n&&os(o.tagName)&&s(o.innerHTML)){ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+i+"</svg>";var u=ir.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(i!==a[n])try{o[n]=i}catch(So){}}}}function or(t,e){return!t.composing&&("OPTION"===t.tagName||ar(t,e)||lr(t,e))}function ar(t,e){var n=!0;try{n=document.activeElement!==t}catch(So){}return n&&t.value!==e}function lr(t,e){var n=t.value,i=t._vModifiers;if(r(i)){if(i.number)return g(n)!==g(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var cr={create:rr,update:rr},ur=k((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function hr(t){var e=dr(t.style);return t.staticStyle?D(t.staticStyle,e):e}function dr(t){return Array.isArray(t)?L(t):"string"===typeof t?ur(t):t}function pr(t,e){var n,i={};if(e){var s=t;while(s.componentInstance)s=s.componentInstance._vnode,s&&s.data&&(n=hr(s.data))&&D(i,n)}(n=hr(t.data))&&D(i,n);var r=t;while(r=r.parent)r.data&&(n=hr(r.data))&&D(i,n);return i}var fr,mr=/^--/,gr=/\s*!important$/,vr=function(t,e,n){if(mr.test(e))t.style.setProperty(e,n);else if(gr.test(n))t.style.setProperty(I(e),n.replace(gr,""),"important");else{var i=br(e);if(Array.isArray(n))for(var s=0,r=n.length;s<r;s++)t.style[i]=n[s];else t.style[i]=n}},yr=["Webkit","Moz","ms"],br=k((function(t){if(fr=fr||document.createElement("div").style,t=T(t),"filter"!==t&&t in fr)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<yr.length;n++){var i=yr[n]+e;if(i in fr)return i}}));function wr(t,e){var n=e.data,i=t.data;if(!(s(n.staticStyle)&&s(n.style)&&s(i.staticStyle)&&s(i.style))){var o,a,l=e.elm,c=i.staticStyle,u=i.normalizedStyle||i.style||{},h=c||u,d=dr(e.data.style)||{};e.data.normalizedStyle=r(d.__ob__)?D({},d):d;var p=pr(e,!0);for(a in h)s(p[a])&&vr(l,a,"");for(a in p)o=p[a],o!==h[a]&&vr(l,a,null==o?"":o)}}var _r={create:wr,update:wr},kr=/\s+/;function Cr(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(kr).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Tr(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(kr).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Sr(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&D(e,Er(t.name||"v")),D(e,t),e}return"string"===typeof t?Er(t):void 0}}var Er=k((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Ir=X&&!nt,xr="transition",Ar="animation",$r="transition",Or="transitionend",Dr="animation",Lr="animationend";Ir&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&($r="WebkitTransition",Or="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Dr="WebkitAnimation",Lr="webkitAnimationEnd"));var Nr=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Rr(t){Nr((function(){Nr(t)}))}function Mr(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Cr(t,e))}function Pr(t,e){t._transitionClasses&&b(t._transitionClasses,e),Tr(t,e)}function Vr(t,e,n){var i=Fr(t,e),s=i.type,r=i.timeout,o=i.propCount;if(!s)return n();var a=s===xr?Or:Lr,l=0,c=function(){t.removeEventListener(a,u),n()},u=function(e){e.target===t&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),r+1),t.addEventListener(a,u)}var Br=/\b(transform|all)(,|$)/;function Fr(t,e){var n,i=window.getComputedStyle(t),s=(i[$r+"Delay"]||"").split(", "),r=(i[$r+"Duration"]||"").split(", "),o=Ur(s,r),a=(i[Dr+"Delay"]||"").split(", "),l=(i[Dr+"Duration"]||"").split(", "),c=Ur(a,l),u=0,h=0;e===xr?o>0&&(n=xr,u=o,h=r.length):e===Ar?c>0&&(n=Ar,u=c,h=l.length):(u=Math.max(o,c),n=u>0?o>c?xr:Ar:null,h=n?n===xr?r.length:l.length:0);var d=n===xr&&Br.test(i[$r+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Ur(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return jr(e)+jr(t[n])})))}function jr(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function zr(t,e){var n=t.elm;r(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Sr(t.data.transition);if(!s(i)&&!r(n._enterCb)&&1===n.nodeType){var o=i.css,a=i.type,l=i.enterClass,u=i.enterToClass,h=i.enterActiveClass,d=i.appearClass,p=i.appearToClass,f=i.appearActiveClass,m=i.beforeEnter,v=i.enter,y=i.afterEnter,b=i.enterCancelled,w=i.beforeAppear,_=i.appear,k=i.afterAppear,C=i.appearCancelled,T=i.duration,S=Dn,E=Dn.$vnode;while(E&&E.parent)S=E.context,E=E.parent;var I=!S._isMounted||!t.isRootInsert;if(!I||_||""===_){var x=I&&d?d:l,A=I&&f?f:h,$=I&&p?p:u,O=I&&w||m,D=I&&"function"===typeof _?_:v,L=I&&k||y,N=I&&C||b,R=g(c(T)?T.enter:T);0;var M=!1!==o&&!nt,P=qr(D),V=n._enterCb=B((function(){M&&(Pr(n,$),Pr(n,A)),V.cancelled?(M&&Pr(n,x),N&&N(n)):L&&L(n),n._enterCb=null}));t.data.show||Ce(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),D&&D(n,V)})),O&&O(n),M&&(Mr(n,x),Mr(n,A),Rr((function(){Pr(n,x),V.cancelled||(Mr(n,$),P||(Hr(R)?setTimeout(V,R):Vr(n,a,V)))}))),t.data.show&&(e&&e(),D&&D(n,V)),M||P||V()}}}function Zr(t,e){var n=t.elm;r(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Sr(t.data.transition);if(s(i)||1!==n.nodeType)return e();if(!r(n._leaveCb)){var o=i.css,a=i.type,l=i.leaveClass,u=i.leaveToClass,h=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,f=i.afterLeave,m=i.leaveCancelled,v=i.delayLeave,y=i.duration,b=!1!==o&&!nt,w=qr(p),_=g(c(y)?y.leave:y);0;var k=n._leaveCb=B((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Pr(n,u),Pr(n,h)),k.cancelled?(b&&Pr(n,l),m&&m(n)):(e(),f&&f(n)),n._leaveCb=null}));v?v(C):C()}function C(){k.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(Mr(n,l),Mr(n,h),Rr((function(){Pr(n,l),k.cancelled||(Mr(n,u),w||(Hr(_)?setTimeout(k,_):Vr(n,a,k)))}))),p&&p(n,k),b||w||k())}}function Hr(t){return"number"===typeof t&&!isNaN(t)}function qr(t){if(s(t))return!1;var e=t.fns;return r(e)?qr(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Wr(t,e){!0!==e.data.show&&zr(e)}var Kr=X?{create:Wr,activate:Wr,remove:function(t,e){!0!==t.data.show?Zr(t,e):e()}}:{},Gr=[Hs,Ks,sr,cr,_r,Kr],Yr=Gr.concat(Us),Xr=Ls({nodeOps:Ss,modules:Yr});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ro(t,"input")}));var Jr={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Ce(n,"postpatch",(function(){Jr.componentUpdated(t,e,n)})):Qr(t,e,n.context),t._vOptions=[].map.call(t.options,no)):("textarea"===n.tag||hs(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",io),t.addEventListener("compositionend",so),t.addEventListener("change",so),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Qr(t,e,n.context);var i=t._vOptions,s=t._vOptions=[].map.call(t.options,no);if(s.some((function(t,e){return!P(t,i[e])}))){var r=t.multiple?e.value.some((function(t){return eo(t,s)})):e.value!==e.oldValue&&eo(e.value,s);r&&ro(t,"change")}}}};function Qr(t,e,n){to(t,e,n),(et||it)&&setTimeout((function(){to(t,e,n)}),0)}function to(t,e,n){var i=e.value,s=t.multiple;if(!s||Array.isArray(i)){for(var r,o,a=0,l=t.options.length;a<l;a++)if(o=t.options[a],s)r=V(i,no(o))>-1,o.selected!==r&&(o.selected=r);else if(P(no(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));s||(t.selectedIndex=-1)}}function eo(t,e){return e.every((function(e){return!P(e,t)}))}function no(t){return"_value"in t?t._value:t.value}function io(t){t.target.composing=!0}function so(t){t.target.composing&&(t.target.composing=!1,ro(t.target,"input"))}function ro(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function oo(t){return!t.componentInstance||t.data&&t.data.transition?t:oo(t.componentInstance._vnode)}var ao={bind:function(t,e,n){var i=e.value;n=oo(n);var s=n.data&&n.data.transition,r=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&s?(n.data.show=!0,zr(n,(function(){t.style.display=r}))):t.style.display=i?r:"none"},update:function(t,e,n){var i=e.value,s=e.oldValue;if(!i!==!s){n=oo(n);var r=n.data&&n.data.transition;r?(n.data.show=!0,i?zr(n,(function(){t.style.display=t.__vOriginalDisplay})):Zr(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,s){s||(t.style.display=t.__vOriginalDisplay)}},lo={model:Jr,show:ao},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(Sn(e.children)):t}function ho(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var s=n._parentListeners;for(var r in s)e[T(r)]=s[r];return e}function po(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function mo(t,e){return e.key===t.key&&e.tag===t.tag}var go=function(t){return t.tag||Re(t)},vo=function(t){return"show"===t.name},yo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var i=this.mode;0;var s=n[0];if(fo(this.$vnode))return s;var r=uo(s);if(!r)return s;if(this._leaving)return po(t,s);var o="__transition-"+this._uid+"-";r.key=null==r.key?r.isComment?o+"comment":o+r.tag:l(r.key)?0===String(r.key).indexOf(o)?r.key:o+r.key:r.key;var a=(r.data||(r.data={})).transition=ho(this),c=this._vnode,u=uo(c);if(r.data.directives&&r.data.directives.some(vo)&&(r.data.show=!0),u&&u.data&&!mo(r,u)&&!Re(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=D({},a);if("out-in"===i)return this._leaving=!0,Ce(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),po(t,s);if("in-out"===i){if(Re(r))return c;var d,p=function(){d()};Ce(a,"afterEnter",p),Ce(a,"enterCancelled",p),Ce(h,"delayLeave",(function(t){d=t}))}}return s}}},bo=D({tag:String,moveClass:String},co);delete bo.mode;var wo={props:bo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var s=Ln(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,s(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,s=this.$slots.default||[],r=this.children=[],o=ho(this),a=0;a<s.length;a++){var l=s[a];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))r.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(i){for(var c=[],u=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?c.push(d):u.push(d)}this.kept=t(e,null,c),this.removed=u}return t(e,null,r)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(_o),t.forEach(ko),t.forEach(Co),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;Mr(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(Or,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(Or,t),n._moveCb=null,Pr(n,e))})}})))},methods:{hasMove:function(t,e){if(!Ir)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Tr(n,t)})),Cr(n,e),n.style.display="none",this.$el.appendChild(n);var i=Fr(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function _o(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function ko(t){t.data.newPos=t.elm.getBoundingClientRect()}function Co(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,s=e.top-n.top;if(i||s){t.data.moved=!0;var r=t.elm.style;r.transform=r.WebkitTransform="translate("+i+"px,"+s+"px)",r.transitionDuration="0s"}}var To={Transition:yo,TransitionGroup:wo};Si.config.mustUseProp=ji,Si.config.isReservedTag=as,Si.config.isReservedAttr=Fi,Si.config.getTagNamespace=ls,Si.config.isUnknownElement=us,D(Si.options.directives,lo),D(Si.options.components,To),Si.prototype.__patch__=X?Xr:N,Si.prototype.$mount=function(t,e){return t=t&&X?ds(t):void 0,Mn(this,t,e)},X&&setTimeout((function(){z.devtools&&ut&&ut.emit("init",Si)}),0),e["Z"]=Si},3453:function(t){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},629:function(t,e,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */function i(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var s="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},r=s.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){r.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){r.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function l(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(n){i[n]=l(t[n],e)})),i}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var p=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},p.prototype.addChild=function(t,e){this._children[t]=e},p.prototype.removeChild=function(t){delete this._children[t]},p.prototype.getChild=function(t){return this._children[t]},p.prototype.hasChild=function(t){return t in this._children},p.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},p.prototype.forEachChild=function(t){c(this._children,t)},p.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},p.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},p.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(p.prototype,f);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;g(t.concat(i),e.getChild(i),n.modules[i])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var s=new p(e,n);if(0===t.length)this.root=s;else{var r=this.get(t.slice(0,-1));r.addChild(t[t.length-1],s)}e.modules&&c(e.modules,(function(e,s){i.register(t.concat(s),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var s=this,r=this,a=r.dispatch,l=r.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=i;var c=this._modules.root.state;C(this,c,[],this._modules.root),k(this,c),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:v.config.devtools;u&&o(this)},b={state:{configurable:!0}};function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;C(t,n,[],t._modules.root,!0),k(t,n,e)}function k(t,e,n){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,r={};c(s,(function(e,n){r[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:r}),v.config.silent=o,t.strict&&A(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),v.nextTick((function(){return i.$destroy()})))}function C(t,e,n,i,s){var r=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!r&&!s){var a=$(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit((function(){v.set(a,l,i.state)}))}var c=i.context=T(t,o,n);i.forEachMutation((function(e,n){var i=o+n;E(t,i,e,c)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,s=e.handler||e;I(t,i,s,c)})),i.forEachGetter((function(e,n){var i=o+n;x(t,i,e,c)})),i.forEachChild((function(i,r){C(t,e,n.concat(r),i,s)}))}function T(t,e,n){var i=""===e,s={dispatch:i?t.dispatch:function(n,i,s){var r=O(n,i,s),o=r.payload,a=r.options,l=r.type;return a&&a.root||(l=e+l),t.dispatch(l,o)},commit:i?t.commit:function(n,i,s){var r=O(n,i,s),o=r.payload,a=r.options,l=r.type;a&&a.root||(l=e+l),t.commit(l,o,a)}};return Object.defineProperties(s,{getters:{get:i?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return $(t.state,n)}}}),s}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(n,r,{get:function(){return t.getters[s]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function E(t,e,n,i){var s=t._mutations[e]||(t._mutations[e]=[]);s.push((function(e){n.call(t,i.state,e)}))}function I(t,e,n,i){var s=t._actions[e]||(t._actions[e]=[]);s.push((function(e){var s=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return h(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):s}))}function x(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function A(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function $(t,e){return e.reduce((function(t,e){return t[e]}),t)}function O(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function D(t){v&&t===v||(v=t,i(v))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){0},y.prototype.commit=function(t,e,n){var i=this,s=O(t,e,n),r=s.type,o=s.payload,a=(s.options,{type:r,payload:o}),l=this._mutations[r];l&&(this._withCommit((function(){l.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},y.prototype.dispatch=function(t,e){var n=this,i=O(t,e),s=i.type,r=i.payload,o={type:s,payload:r},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(c){0}var l=a.length>1?Promise.all(a.map((function(t){return t(r)}))):a[0](r);return new Promise((function(t,e){l.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(c){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(c){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),C(this,this.state,t,this._modules.get(t),n.preserveState),k(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=$(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,b);var L=F((function(t,e){var n={};return V(e).forEach((function(e){var i=e.key,s=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=U(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof s?s.call(this,e,n):e[s]},n[i].vuex=!0})),n})),N=F((function(t,e){var n={};return V(e).forEach((function(e){var i=e.key,s=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var r=U(this.$store,"mapMutations",t);if(!r)return;i=r.context.commit}return"function"===typeof s?s.apply(this,[i].concat(e)):i.apply(this.$store,[s].concat(e))}})),n})),R=F((function(t,e){var n={};return V(e).forEach((function(e){var i=e.key,s=e.val;s=t+s,n[i]=function(){if(!t||U(this.$store,"mapGetters",t))return this.$store.getters[s]},n[i].vuex=!0})),n})),M=F((function(t,e){var n={};return V(e).forEach((function(e){var i=e.key,s=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var r=U(this.$store,"mapActions",t);if(!r)return;i=r.context.dispatch}return"function"===typeof s?s.apply(this,[i].concat(e)):i.apply(this.$store,[s].concat(e))}})),n})),P=function(t){return{mapState:L.bind(null,t),mapGetters:R.bind(null,t),mapMutations:N.bind(null,t),mapActions:M.bind(null,t)}};function V(t){return B(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function B(t){return Array.isArray(t)||u(t)}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function U(t,e,n){var i=t._modulesNamespaceMap[n];return i}function j(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var i=t.transformer;void 0===i&&(i=function(t){return t});var s=t.mutationTransformer;void 0===s&&(s=function(t){return t});var r=t.actionFilter;void 0===r&&(r=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var c=t.logActions;void 0===c&&(c=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=l(t.state);"undefined"!==typeof u&&(a&&t.subscribe((function(t,r){var o=l(r);if(n(t,h,o)){var a=H(),c=s(t),d="mutation "+t.type+a;z(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",i(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",c),u.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),Z(u)}h=o})),c&&t.subscribeAction((function(t,n){if(r(t,n)){var i=H(),s=o(t),a="action "+t.type+i;z(u,a,e),u.log("%c action","color: #03A9F4; font-weight: bold",s),Z(u)}})))}}function z(t,e,n){var i=n?t.groupCollapsed:t.group;try{i.call(t,e)}catch(s){t.log(e)}}function Z(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+W(t.getHours(),2)+":"+W(t.getMinutes(),2)+":"+W(t.getSeconds(),2)+"."+W(t.getMilliseconds(),3)}function q(t,e){return new Array(e+1).join(t)}function W(t,e){return q("0",e-t.toString().length)+t}var K={Store:y,install:D,version:"3.6.2",mapState:L,mapMutations:N,mapGetters:R,mapActions:M,createNamespacedHelpers:P,createLogger:j};e["ZP"]=K},2238:function(t,e,n){"use strict";n.d(e,{Jn:function(){return q},KN:function(){return G},Mq:function(){return K},Xd:function(){return U},ZF:function(){return W},qX:function(){return j}});var i=n(8463),s=n(3333),r=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const l="@firebase/app",c="0.7.20",u=new s.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",f="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",k="@firebase/installations",C="@firebase/installations-compat",T="@firebase/messaging",S="@firebase/messaging-compat",E="@firebase/performance",I="@firebase/performance-compat",x="@firebase/remote-config",A="@firebase/remote-config-compat",$="@firebase/storage",O="@firebase/storage-compat",D="@firebase/firestore",L="@firebase/firestore-compat",N="firebase",R="9.6.10",M="[DEFAULT]",P={[l]:"fire-core",[h]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[f]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[k]:"fire-iid",[C]:"fire-iid-compat",[T]:"fire-fcm",[S]:"fire-fcm-compat",[E]:"fire-perf",[I]:"fire-perf-compat",[x]:"fire-rc",[A]:"fire-rc-compat",[$]:"fire-gcs",[O]:"fire-gcs-compat",[D]:"fire-fst",[L]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},V=new Map,B=new Map;function F(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function U(t){const e=t.name;if(B.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;B.set(e,t);for(const n of V.values())F(n,t);return!0}function j(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Z=new r.LL("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=R;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw Z.create("bad-app-name",{appName:String(s)});const o=V.get(s);if(o){if((0,r.vZ)(t,o.options)&&(0,r.vZ)(n,o.config))return o;throw Z.create("duplicate-app",{appName:s})}const a=new i.H0(s);for(const i of B.values())a.addComponent(i);const l=new H(t,n,a);return V.set(s,l),l}function K(t=M){const e=V.get(t);if(!e)throw Z.create("no-app",{appName:t});return e}function G(t,e,n){var s;let r=null!==(s=P[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}U(new i.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y="firebase-heartbeat-database",X=1,J="firebase-heartbeat-store";let Q=null;function tt(){return Q||(Q=(0,r.X3)(Y,X,((t,e)=>{switch(e){case 0:t.createObjectStore(J)}})).catch((t=>{throw Z.create("storage-open",{originalErrorMessage:t.message})}))),Q}async function et(t){try{const e=await tt();return e.transaction(J).objectStore(J).get(it(t))}catch(e){throw Z.create("storage-get",{originalErrorMessage:e.message})}}async function nt(t,e){try{const n=await tt(),i=n.transaction(J,"readwrite"),s=i.objectStore(J);return await s.put(e,it(t)),i.complete}catch(n){throw Z.create("storage-set",{originalErrorMessage:n.message})}}function it(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=1024,rt=2592e6;class ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ct(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=at();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=rt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=at(),{heartbeatsToSend:e,unsentEntries:n}=lt(this._heartbeatsCache.heartbeats),i=(0,r.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function at(){const t=new Date;return t.toISOString().substring(0,10)}function lt(t,e=st){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),ut(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ut(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ct{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await et(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ut(t){return(0,r.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){U(new i.wA("platform-logger",(t=>new o(t)),"PRIVATE")),U(new i.wA("heartbeat",(t=>new ot(t)),"PRIVATE")),G(l,c,t),G(l,c,"esm2017"),G("fire-js","")}ht("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return s}});var i=n(4444);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&r.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===r?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return s}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.c88d23ca.js.map