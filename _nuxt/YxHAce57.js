import{d as Ue,a as N,F as Ie,m as P,I as y,P as J,Q as ee,R as j,U as V,u as L,V as q,o as S}from"./T3Usrav4.js";import{_ as ve,C as Oe,r as te,g as M,a as Ne,b as De,c as Ce,S as xe,d as Pe,F as Le,i as Se,e as Be,f as Fe,h as ne,j as Me}from"./DNoqlh0I.js";/**
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
 */const le="firebasestorage.googleapis.com",ce="storageBucket",He=2*60*1e3,$e=10*60*1e3;/**
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
 */class f extends Le{constructor(t,n,s=0){super(z(t),`Firebase Storage: ${n} (${z(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return z(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var d;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(d||(d={}));function z(e){return"storage/"+e}function K(){const e="An unknown error occurred, please check the error payload for server response.";return new f(d.UNKNOWN,e)}function je(e){return new f(d.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ve(e){return new f(d.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qe(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new f(d.UNAUTHENTICATED,e)}function ze(){return new f(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function We(e){return new f(d.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Xe(){return new f(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ke(){return new f(d.CANCELED,"User canceled the upload/download.")}function Ge(e){return new f(d.INVALID_URL,"Invalid URL '"+e+"'.")}function Qe(e){return new f(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ye(){return new f(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ce+"' property when initializing the app?")}function Ze(){return new f(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Je(){return new f(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function et(e){return new f(d.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function X(e){return new f(d.INVALID_ARGUMENT,e)}function ue(){return new f(d.APP_DELETED,"The Firebase app was deleted.")}function tt(e){return new f(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function C(e,t){return new f(d.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function D(e){throw new f(d.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class T{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=T.makeFromUrl(t,n)}catch{return new T(t,"")}if(s.path==="")return s;throw Qe(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const m="v[A-Za-z0-9_]+",b=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",w=new RegExp(`^https?://${b}/${m}/b/${r}/o${_}`,"i"),h={bucket:1,path:3},p=n===le?"(?:storage.googleapis.com|storage.cloud.google.com)":n,u="([^?#]*)",O=new RegExp(`^https?://${p}/${r}/${u}`,"i"),k=[{regex:a,indices:l,postModify:o},{regex:w,indices:h,postModify:c},{regex:O,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<k.length;R++){const x=k[R],H=x.regex.exec(t);if(H){const Ae=H[x.indices.bucket];let $=H[x.indices.path];$||($=""),s=new T(Ae,$),x.postModify(s);break}}if(s==null)throw Ge(t);return s}}class nt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function st(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function l(){return a===2}let c=!1;function m(...u){c||(c=!0,t.apply(null,u))}function b(u){r=setTimeout(()=>{r=null,e(w,l())},u)}function _(){o&&clearTimeout(o)}function w(u,...O){if(c){_();return}if(u){_(),m.call(null,u,...O);return}if(l()||i){_(),m.call(null,u,...O);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,b(k)}let h=!1;function p(u){h||(h=!0,_(),!c&&(r!==null?(u||(a=2),clearTimeout(r),b(0)):u||(a=1)))}return b(0),o=setTimeout(()=>{i=!0,p(!0)},n),p}function rt(e){e(!1)}/**
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
 */function ot(e){return e!==void 0}function it(e){return typeof e=="object"&&!Array.isArray(e)}function G(e){return typeof e=="string"||e instanceof String}function se(e){return Q()&&e instanceof Blob}function Q(){return typeof Blob<"u"}function re(e,t,n,s){if(s<t)throw X(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw X(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Y(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function he(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var I;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(I||(I={}));/**
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
 */function at(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class lt{constructor(t,n,s,r,o,i,a,l,c,m,b,_=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=m,this.connectionFactory_=b,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,h)=>{this.resolve_=w,this.reject_=h,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new B(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===I.NO_ERROR,l=o.getStatus();if(!a||at(l,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===I.ABORT;s(!1,new B(!1,null,m));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new B(c,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ot(l)?o(l):o()}catch(l){i(l)}else if(a!==null){const l=K();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(r.canceled){const l=this.appDelete_?ue():Ke();i(l)}else{const l=Xe();i(l)}};this.canceled_?n(!1,new B(!1,null,!0)):this.backoffId_=st(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&rt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class B{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function ct(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function ut(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ht(e,t){t&&(e["X-Firebase-GMPID"]=t)}function dt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ft(e,t,n,s,r,o,i=!0){const a=he(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return ht(c,t),ct(c,n),ut(c,o),dt(c,s),new lt(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function pt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _t(...e){const t=pt();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Q())return new Blob(e);throw new f(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function mt(e){if(typeof atob>"u")throw et("base-64");return atob(e)}/**
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
 */const E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class W{constructor(t,n){this.data=t,this.contentType=n||null}}function Rt(e,t){switch(e){case E.RAW:return new W(de(t));case E.BASE64:case E.BASE64URL:return new W(fe(e,t));case E.DATA_URL:return new W(wt(t),Tt(t))}throw K()}function de(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function bt(e){let t;try{t=decodeURIComponent(e)}catch{throw C(E.DATA_URL,"Malformed data URL.")}return de(t)}function fe(e,t){switch(e){case E.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw C(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw C(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mt(t)}catch(r){throw r.message.includes("polyfill")?r:C(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class pe{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw C(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=yt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function wt(e){const t=new pe(e);return t.base64?fe(E.BASE64,t.rest):bt(t.rest)}function Tt(e){return new pe(e).contentType}function yt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class A{constructor(t,n){let s=0,r="";se(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(se(this.data_)){const s=this.data_,r=gt(s,t,n);return r===null?null:new A(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new A(s,!0)}}static getBlob(...t){if(Q()){const n=t.map(s=>s instanceof A?s.data_:s);return new A(_t.apply(null,n))}else{const n=t.map(i=>G(i)?Rt(E.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new A(r,!0)}}uploadData(){return this.data_}}/**
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
 */function _e(e){let t;try{t=JSON.parse(e)}catch{return null}return it(t)?t:null}/**
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
 */function kt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Et(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function ge(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function At(e,t){return t}class g{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||At}}let F=null;function Ut(e){return!G(e)||e.length<2?e:ge(e)}function me(){if(F)return F;const e=[];e.push(new g("bucket")),e.push(new g("generation")),e.push(new g("metageneration")),e.push(new g("name","fullPath",!0));function t(o,i){return Ut(i)}const n=new g("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new g("size");return r.xform=s,e.push(r),e.push(new g("timeCreated")),e.push(new g("updated")),e.push(new g("md5Hash",null,!0)),e.push(new g("cacheControl",null,!0)),e.push(new g("contentDisposition",null,!0)),e.push(new g("contentEncoding",null,!0)),e.push(new g("contentLanguage",null,!0)),e.push(new g("contentType",null,!0)),e.push(new g("metadata","customMetadata",!0)),F=e,F}function It(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new T(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function vt(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return It(s,e),s}function Re(e,t,n){const s=_e(t);return s===null?null:vt(e,s,n)}function Ot(e,t,n,s){const r=_e(t);if(r===null||!G(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const m=e.bucket,b=e.fullPath,_="/b/"+i(m)+"/o/"+i(b),w=Y(_,n,s),h=he({alt:"media",token:c});return w+h})[0]}function Nt(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class be{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function we(e){if(!e)throw K()}function Dt(e,t){function n(s,r){const o=Re(e,r,t);return we(o!==null),o}return n}function Ct(e,t){function n(s,r){const o=Re(e,r,t);return we(o!==null),Ot(o,r,e.host,e._protocol)}return n}function Te(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ze():r=qe():n.getStatus()===402?r=Ve(e.bucket):n.getStatus()===403?r=We(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function xt(e){const t=Te(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=je(e.path)),o.serverResponse=r.serverResponse,o}return n}function Pt(e,t,n){const s=t.fullServerUrl(),r=Y(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new be(r,o,Ct(e,n),i);return a.errorHandler=xt(t),a}function Lt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function St(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Lt(null,t)),s}function Bt(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let R=0;R<2;R++)k=k+Math.random().toString().slice(2);return k}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const c=St(t,s,r),m=Nt(c,n),b="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,_=`\r
--`+l+"--",w=A.getBlob(b,s,_);if(w===null)throw Ze();const h={name:c.fullPath},p=Y(o,e.host,e._protocol),u="POST",O=e.maxUploadRetryTime,U=new be(p,u,Dt(e,n),O);return U.urlParams=h,U.headers=i,U.body=w.uploadData(),U.errorHandler=Te(t),U}class Ft{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=I.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=I.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw D("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Mt extends Ft{initXhr(){this.xhr_.responseType="text"}}function ye(){return new Mt}/**
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
 */class v{constructor(t,n){this._service=t,n instanceof T?this._location=n:this._location=T.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new v(t,n)}get root(){const t=new T(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ge(this._location.path)}get storage(){return this._service}get parent(){const t=kt(this._location.path);if(t===null)return null;const n=new T(this._location.bucket,t);return new v(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw tt(t)}}function Ht(e,t,n){e._throwIfRoot("uploadBytes");const s=Bt(e.storage,e._location,me(),new A(t,!0),n);return e.storage.makeRequestWithTokens(s,ye).then(r=>({metadata:r,ref:e}))}function $t(e){e._throwIfRoot("getDownloadURL");const t=Pt(e.storage,e._location,me());return e.storage.makeRequestWithTokens(t,ye).then(n=>{if(n===null)throw Je();return n})}function jt(e,t){const n=Et(e._location.path,t),s=new T(e._location.bucket,n);return new v(e.storage,s)}/**
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
 */function Vt(e){return/^[A-Za-z]+:\/\//.test(e)}function qt(e,t){return new v(e,t)}function ke(e,t){if(e instanceof Z){const n=e;if(n._bucket==null)throw Ye();const s=new v(n,n._bucket);return t!=null?ke(s,t):s}else return t!==void 0?jt(e,t):e}function zt(e,t){if(t&&Vt(t)){if(e instanceof Z)return qt(e,t);throw X("To use ref(service, url), the first argument must be a Storage instance.")}else return ke(e,t)}function oe(e,t){const n=t==null?void 0:t[ce];return n==null?null:T.makeFromBucketSpec(n,e)}function Wt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:Pe(r,e.app.options.projectId))}class Z{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=le,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=He,this._maxUploadRetryTime=$e,this._requests=new Set,r!=null?this._bucket=T.makeFromBucketSpec(r,this._host):this._bucket=oe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=T.makeFromBucketSpec(this._url,t):this._bucket=oe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){re("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){re("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new v(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new nt(ue());{const i=ft(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const ie="@firebase/storage",ae="0.12.5";/**
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
 */const Ee="storage";function Xt(e,t,n){return e=M(e),Ht(e,t,n)}function Kt(e){return e=M(e),$t(e)}function Gt(e,t){return e=M(e),zt(e,t)}function Qt(e=Ce(),t){e=M(e);const s=Ne(e,Ee).getImmediate({identifier:t}),r=De("storage");return r&&Yt(s,...r),s}function Yt(e,t,n,s={}){Wt(e,t,n,s)}function Zt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Z(n,s,r,t,xe)}function Jt(){ve(new Oe(Ee,Zt,"PUBLIC").setMultipleInstances(!0)),te(ie,ae,""),te(ie,ae,"esm2017")}Jt();const en={class:""},tn={class:"border-b"},nn={class:"container inline-flex items-center justify-center gap-4 py-4"},sn={class:"py-4"},rn={class:"grid grid-cols-4 gap-4 container"},on={class:"aspect-square"},an=["src"],un=Ue({__name:"index",setup(e){const n=Se({apiKey:"AIzaSyBlB1pbQxnwyJrjQTXA0y52oyRkFWQYzl8",authDomain:"landing-862f1.firebaseapp.com",projectId:"landing-862f1",storageBucket:"landing-862f1.appspot.com",messagingSenderId:"254522064407",appId:"1:254522064407:web:1de51ecc45660de37ba652",measurementId:"G-QBTQT2RS7V"}),s=Qt(n),r=Be(n),o=N(null),i=N(""),a=N(""),l=N(""),c=N(""),m=h=>{const p=h.target;p.files&&(o.value=p.files[0])},b=async()=>{if(o.value)try{const h=Gt(s,`images/${o.value.name}`);await Xt(h,o.value);const p=await Kt(h);await Fe(ne(r,"development"),{title:a.value,description:l.value,url:c.value,imageUrl:p}),w(),i.value=p,console.log("Image uploaded successfully:",i.value)}catch(h){console.error("Error uploading image:",h)}else console.error("No file selected for upload")},_=N([]),w=async()=>{try{const h=ne(r,"development"),p=await Me(h);_.value=p.docs.map(u=>({id:u.id,...u.data()})),console.log("Fetched development data:",_.value)}catch(h){console.error("Error fetching development data:",h)}};return Ie(async()=>{await w()}),(h,p)=>(S(),P("div",en,[y("nav",tn,[y("div",nn,[(S(),P(J,null,ee(6,u=>y("div",sn,"Menu 1")),64))])]),y("div",null,[j(y("input",{type:"text","onUpdate:modelValue":p[0]||(p[0]=u=>q(a)?a.value=u:null),placeholder:"title"},null,512),[[V,L(a)]]),j(y("input",{type:"text","onUpdate:modelValue":p[1]||(p[1]=u=>q(l)?l.value=u:null),placeholder:"desc"},null,512),[[V,L(l)]]),j(y("input",{type:"text","onUpdate:modelValue":p[2]||(p[2]=u=>q(c)?c.value=u:null),placeholder:"url"},null,512),[[V,L(c)]])]),y("div",null,[y("input",{type:"file",onChange:m},null,32),y("button",{onClick:b},"Upload Image")]),y("div",rn,[(S(!0),P(J,null,ee(L(_),u=>(S(),P("div",on,[y("img",{class:"w-full h-full object-cover",src:u.imageUrl,alt:""},null,8,an)]))),256))])]))}});export{un as default};
