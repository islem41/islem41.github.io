(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6002774"],{"0e8f":function(t,e,n){"use strict";n("20f6");var r=n("e8f2");e["a"]=Object(r["a"])("flex")},"190e":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var r=n("db04");function o(){return Object(r["a"])("User_Auth",{},{salt:{method:"GET",url:"user/salt"},checkUnique:{method:"GET",url:"user/checkUnique"},me:{method:"GET",url:"{userType}/me"},register:{method:"POST",url:"{userType}/register"},registerConfirm:{method:"POST",url:"user/register/confirm"},passwordReset:{method:"POST",url:"user/password/reset"},passwordConfirm:{method:"POST",url:"user/password/confirm"},editPassword:{method:"POST",url:"user/password"},getAccount:{method:"GET",url:"{userType}/account"},editAccount:{method:"POST",url:"{userType}/account"}})}function i(){return Object(r["a"])("User_Management_Courrier",{},{query:{method:"POST",url:"admin/user/{entity}/query"},get:{method:"GET",url:"admin/user/{entity}/get"},add:{method:"POST",url:"admin/user/{entity}/add"},edit:{method:"POST",url:"admin/user/{entity}/edit"},convert:{method:"POST",url:"admin/user/{entity}/convert"},remove:{method:"POST",url:"admin/user/{entity}/remove"},statistic:{method:"GET",url:"admin/user/statistic/{type}"},activate:{method:"POST",url:"admin/user/user/account/activate"}})}},2:function(t,e){},"20f6":function(t,e,n){},"7d97":function(t,e,n){"use strict";n("98af")},"98af":function(t,e,n){},a722:function(t,e,n){"use strict";n("20f6");var r=n("e8f2");e["a"]=Object(r["a"])("layout")},cc09:function(t,e,n){"use strict";n.r(e);var r=n("0e8f"),o=n("a722"),i=function(){var t=this,e=t._self._c;return e(o["a"],{attrs:{row:"",wrap:"","ma-0":""}},[e(r["a"],{attrs:{xs12:""}},[e("div",{staticClass:"text-h5"},[t._v(t._s(t.$t("User.title.main")))])]),t._l(t.datasView,(function(n,o){return e(r["a"],{key:o,attrs:{xs12:"",sm6:"",lg4:"",xl3:""}},[e("DataCard",t._b({attrs:{loading:t.loading.get,iconColor:n.iconColor||"white",backgroundColor:n.backgroundColor||"primary",textColor:n.textColor||"white--text",elevation:"0"}},"DataCard",n,!1))],1)}))],2)},s=[],a=n("190e"),u=n("b0af"),c=n("99d9"),d=n("132d"),f=n("8e36"),l=function(){var t=this,e=t._self._c;return e(u["a"],t._b({staticClass:"data_card",attrs:{color:t.backgroundColor,ripple:""},on:{click:t.onClick}},"v-card",t.$attrs,!1),[e(f["a"],{attrs:{active:t.loading,absolute:"",height:"4",indeterminate:!0,color:"white"}}),e(c["b"],{staticClass:"pa-3 py-4"},[e(r["a"],{attrs:{xs12:"","d-flex":"","align-center":"","justify-space-between":""}},[e("div",{staticClass:"text-center px-2"},[e(d["a"],{attrs:{color:t.iconColor,size:t.iconSize}},[t._v(t._s(t.icon))])],1),e("div",{staticClass:"px-3 text-truncate",class:t.textColor},[e("div",{staticClass:"text-h3 text-center text-truncate",attrs:{title:t.data}},[t._v(t._s(t._f("App_formatNumber")(t.data)))]),e("div",{staticClass:"text-h6 text-center text-truncate",attrs:{title:t.title}},[t._v(t._s(t.title))])])])],1)],1)},h=[],p=(n("14d9"),{props:{data:{type:[Number,String],required:!1,default:"-"},loading:Boolean,title:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:"bookmark"},backgroundColor:{type:String,required:!1,default:"primary"},textColor:{type:String,required:!1,default:"white--text"},iconColor:{type:String,required:!1,default:"white"},iconSize:{type:[String,Number],required:!1,default:"90"},to:{type:Object,required:!1,default:null}},methods:{onClick(){this.to&&this.$router.push(this.to)}}}),m=p,v=(n("7d97"),n("2877")),y=Object(v["a"])(m,l,h,!1,null,"05982c20",null),b=y.exports,g={components:{DataCard:b},data(){return{datas:{users:{data:0,title:this.$t("User.title.users"),icon:"group"},adminUsers:{data:0,title:this.$t("User.title.admins"),icon:"mdi-shield-account",to:{name:"User_Management_Admin"}}},loading:{get:!1}}},methods:{get(){this.loading.get=!0,Object(a["b"])().statistic({type:"performance"}).then(t=>{if(this.loading.get=!1,"ok"===t.data.content){const{users:e,adminUsers:n}=t.data.datas;this.datas.users.data=e||0,this.datas.adminUsers.data=n||0}},()=>this.loading.get=!1)}},computed:{datasView(){const{users:t,adminUsers:e}=this.datas;return[t,e]}},mounted(){this.get()}},w=g,x=Object(v["a"])(w,i,s,!1,null,"75107140",null);e["default"]=x.exports},db04:function(t,e,n){"use strict";n.d(e,"a",(function(){return qt}));n("14d9");var r=n("a026"),o=0,i=1,s=2;function a(t){this.state=s,this.value=void 0,this.deferred=[];var e=this;try{t((function(t){e.resolve(t)}),(function(t){e.reject(t)}))}catch(n){e.reject(n)}}a.reject=function(t){return new a((function(e,n){n(t)}))},a.resolve=function(t){return new a((function(e,n){e(t)}))},a.all=function(t){return new a((function(e,n){var r=0,o=[];function i(n){return function(i){o[n]=i,r+=1,r===t.length&&e(o)}}0===t.length&&e(o);for(var s=0;s<t.length;s+=1)a.resolve(t[s]).then(i(s),n)}))},a.race=function(t){return new a((function(e,n){for(var r=0;r<t.length;r+=1)a.resolve(t[r]).then(e,n)}))};var u=a.prototype;function c(t,e){this.promise=t instanceof Promise?t:new Promise(t.bind(e)),this.context=e}u.resolve=function(t){var e=this;if(e.state===s){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var r=t&&t["then"];if(null!==t&&"object"===typeof t&&"function"===typeof r)return void r.call(t,(function(t){n||e.resolve(t),n=!0}),(function(t){n||e.reject(t),n=!0}))}catch(i){return void(n||e.reject(i))}e.state=o,e.value=t,e.notify()}},u.reject=function(t){var e=this;if(e.state===s){if(t===e)throw new TypeError("Promise settled with itself.");e.state=i,e.value=t,e.notify()}},u.notify=function(){var t=this;w((function(){if(t.state!==s)while(t.deferred.length){var e=t.deferred.shift(),n=e[0],r=e[1],a=e[2],u=e[3];try{t.state===o?a("function"===typeof n?n.call(void 0,t.value):t.value):t.state===i&&("function"===typeof r?a(r.call(void 0,t.value)):u(t.value))}catch(c){u(c)}}}))},u.then=function(t,e){var n=this;return new a((function(r,o){n.deferred.push([t,e,r,o]),n.notify()}))},u["catch"]=function(t){return this.then(void 0,t)},"undefined"===typeof Promise&&(window.Promise=a),c.all=function(t,e){return new c(Promise.all(t),e)},c.resolve=function(t,e){return new c(Promise.resolve(t),e)},c.reject=function(t,e){return new c(Promise.reject(t),e)},c.race=function(t,e){return new c(Promise.race(t),e)};var d=c.prototype;d.bind=function(t){return this.context=t,this},d.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new c(this.promise.then(t,e),this.context)},d["catch"]=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new c(this.promise["catch"](t),this.context)},d["finally"]=function(t){return this.then((function(e){return t.call(this),e}),(function(e){return t.call(this),Promise.reject(e)}))};var f,l={},h=l.hasOwnProperty,p=[].slice,m=!1,v="undefined"!==typeof window;function y(t){var e=t.config,n=t.nextTick;f=n,m=e.debug||!e.silent}function b(t){"undefined"!==typeof console&&m&&console.warn("[VueResource warn]: "+t)}function g(t){"undefined"!==typeof console&&console.error(t)}function w(t,e){return f(t,e)}function x(t){return t?t.replace(/^\s*|\s*$/g,""):""}function T(t,e){return t&&void 0===e?t.replace(/\s+$/,""):t&&e?t.replace(new RegExp("["+e+"]+$"),""):t}function j(t){return t?t.toLowerCase():""}function O(t){return t?t.toUpperCase():""}var C=Array.isArray;function P(t){return"string"===typeof t}function E(t){return"function"===typeof t}function S(t){return null!==t&&"object"===typeof t}function k(t){return S(t)&&Object.getPrototypeOf(t)==Object.prototype}function U(t){return"undefined"!==typeof Blob&&t instanceof Blob}function $(t){return"undefined"!==typeof FormData&&t instanceof FormData}function A(t,e,n){var r=c.resolve(t);return arguments.length<2?r:r.then(e,n)}function _(t,e,n){return n=n||{},E(n)&&(n=n.call(e)),L(t.bind({$vm:e,$options:n}),t,{$options:n})}function q(t,e){var n,r;if(C(t))for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(S(t))for(r in t)h.call(t,r)&&e.call(t[r],t[r],r);return t}var R=Object.assign||G;function L(t){var e=p.call(arguments,1);return e.forEach((function(e){H(t,e,!0)})),t}function I(t){var e=p.call(arguments,1);return e.forEach((function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])})),t}function G(t){var e=p.call(arguments,1);return e.forEach((function(e){H(t,e)})),t}function H(t,e,n){for(var r in e)n&&(k(e[r])||C(e[r]))?(k(e[r])&&!k(t[r])&&(t[r]={}),C(e[r])&&!C(t[r])&&(t[r]=[]),H(t[r],e[r],n)):void 0!==e[r]&&(t[r]=e[r])}function N(t,e){var n=e(t);return P(t.root)&&!/^(https?:)?\//.test(n)&&(n=T(t.root,"/")+"/"+n),n}function B(t,e){var n=Object.keys(K.options.params),r={},o=e(t);return q(t.params,(function(t,e){-1===n.indexOf(e)&&(r[e]=t)})),r=K.params(r),r&&(o+=(-1==o.indexOf("?")?"?":"&")+r),o}function D(t,e,n){var r=M(t),o=r.expand(e);return n&&n.push.apply(n,r.vars),o}function M(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(r){return t.replace(/\{([^{}]+)\}|([^{}]+)/g,(function(t,o,i){if(o){var s=null,a=[];if(-1!==e.indexOf(o.charAt(0))&&(s=o.charAt(0),o=o.substr(1)),o.split(/,/g).forEach((function(t){var e=/([^:*]*)(?::(\d+)|(\*))?/.exec(t);a.push.apply(a,J(r,s,e[1],e[2]||e[3])),n.push(e[1])})),s&&"+"!==s){var u=",";return"?"===s?u="&":"#"!==s&&(u=s),(0!==a.length?s:"")+a.join(u)}return a.join(",")}return F(i)}))}}}function J(t,e,n,r){var o=t[n],i=[];if(W(o)&&""!==o)if("string"===typeof o||"number"===typeof o||"boolean"===typeof o)o=o.toString(),r&&"*"!==r&&(o=o.substring(0,parseInt(r,10))),i.push(V(e,o,X(e)?n:null));else if("*"===r)Array.isArray(o)?o.filter(W).forEach((function(t){i.push(V(e,t,X(e)?n:null))})):Object.keys(o).forEach((function(t){W(o[t])&&i.push(V(e,o[t],t))}));else{var s=[];Array.isArray(o)?o.filter(W).forEach((function(t){s.push(V(e,t))})):Object.keys(o).forEach((function(t){W(o[t])&&(s.push(encodeURIComponent(t)),s.push(V(e,o[t].toString())))})),X(e)?i.push(encodeURIComponent(n)+"="+s.join(",")):0!==s.length&&i.push(s.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==o||"&"!==e&&"?"!==e?""===o&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}function W(t){return void 0!==t&&null!==t}function X(t){return";"===t||"&"===t||"?"===t}function V(t,e,n){return e="+"===t||"#"===t?F(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function F(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map((function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t})).join("")}function z(t){var e=[],n=D(t.url,t.params,e);return e.forEach((function(e){delete t.params[e]})),n}function K(t,e){var n,r=this||{},o=t;return P(t)&&(o={url:t,params:e}),o=L({},K.options,r.$options,o),K.transforms.forEach((function(t){P(t)&&(t=K.transform[t]),E(t)&&(n=Q(t,n,r.$vm))})),n(o)}function Q(t,e,n){return function(r){return t.call(n,r,e)}}function Y(t,e,n){var r,o=C(e),i=k(e);q(e,(function(e,s){r=S(e)||C(e),n&&(s=n+"["+(i||r?s:"")+"]"),!n&&o?t.add(e.name,e.value):r?Y(t,e,s):t.add(s,e)}))}function Z(t){return new c((function(e){var n=new XDomainRequest,r=function(r){var o=r.type,i=0;"load"===o?i=200:"error"===o&&(i=500),e(t.respondWith(n.responseText,{status:i}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),t.timeout&&(n.timeout=t.timeout),n.onload=r,n.onabort=r,n.onerror=r,n.ontimeout=r,n.onprogress=function(){},n.send(t.getBody())}))}K.options={url:"",root:null,params:{}},K.transform={template:z,query:B,root:N},K.transforms=["template","query","root"],K.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){E(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},Y(e,t),e.join("&").replace(/%20/g,"+")},K.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var tt=v&&"withCredentials"in new XMLHttpRequest;function et(t){if(v){var e=K.parse(location.href),n=K.parse(t.getUrl());n.protocol===e.protocol&&n.host===e.host||(t.crossOrigin=!0,t.emulateHTTP=!1,tt||(t.client=Z))}}function nt(t){$(t.body)?t.headers["delete"]("Content-Type"):S(t.body)&&t.emulateJSON&&(t.body=K.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded"))}function rt(t){var e=t.headers.get("Content-Type")||"";return S(t.body)&&0===e.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),function(t){return t.bodyText?A(t.text(),(function(e){var n=t.headers.get("Content-Type")||"";if(0===n.indexOf("application/json")||ot(e))try{t.body=JSON.parse(e)}catch(r){t.body=null}else t.body=e;return t})):t}}function ot(t){var e=t.match(/^\s*(\[|\{)/),n={"[":/]\s*$/,"{":/}\s*$/};return e&&n[e[1]].test(t)}function it(t){return new c((function(e){var n,r,o=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),s=null;n=function(n){var o=n.type,a=0;"load"===o&&null!==s?a=200:"error"===o&&(a=500),a&&window[i]&&(delete window[i],document.body.removeChild(r)),e(t.respondWith(s,{status:a}))},window[i]=function(t){s=JSON.stringify(t)},t.abort=function(){n({type:"abort"})},t.params[o]=i,t.timeout&&setTimeout(t.abort,t.timeout),r=document.createElement("script"),r.src=t.getUrl(),r.type="text/javascript",r.async=!0,r.onload=n,r.onerror=n,document.body.appendChild(r)}))}function st(t){"JSONP"==t.method&&(t.client=it)}function at(t){E(t.before)&&t.before.call(this,t)}function ut(t){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST")}function ct(t){var e=R({},jt.headers.common,t.crossOrigin?{}:jt.headers.custom,jt.headers[j(t.method)]);q(e,(function(e,n){t.headers.has(n)||t.headers.set(n,e)}))}function dt(t){return new c((function(e){var n=new XMLHttpRequest,r=function(r){var o=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":x(n.statusText)});q(x(n.getAllResponseHeaders()).split("\n"),(function(t){o.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))})),e(o)};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl(),!0),t.timeout&&(n.timeout=t.timeout),t.responseType&&"responseType"in n&&(n.responseType=t.responseType),(t.withCredentials||t.credentials)&&(n.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),E(t.progress)&&"GET"===t.method&&n.addEventListener("progress",t.progress),E(t.downloadProgress)&&n.addEventListener("progress",t.downloadProgress),E(t.progress)&&/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress),E(t.uploadProgress)&&n.upload&&n.upload.addEventListener("progress",t.uploadProgress),t.headers.forEach((function(t,e){n.setRequestHeader(e,t)})),n.onload=r,n.onabort=r,n.onerror=r,n.ontimeout=r,n.send(t.getBody())}))}function ft(t){var e=n(2);return new c((function(n){var r,o=t.getUrl(),i=t.getBody(),s=t.method,a={};t.headers.forEach((function(t,e){a[e]=t})),e(o,{body:i,method:s,headers:a}).then(r=function(e){var r=t.respondWith(e.body,{status:e.statusCode,statusText:x(e.statusMessage)});q(e.headers,(function(t,e){r.headers.set(e,t)})),n(r)},(function(t){return r(t.response)}))}))}function lt(t){var e=[ht],n=[];function r(r){while(e.length){var o=e.pop();if(E(o)){var i=function(){var e=void 0,i=void 0;if(e=o.call(t,r,(function(t){return i=t}))||i,S(e))return{v:new c((function(r,o){n.forEach((function(n){e=A(e,(function(e){return n.call(t,e)||e}),o)})),A(e,r,o)}),t)};E(e)&&n.unshift(e)}();if("object"===typeof i)return i.v}else b("Invalid interceptor of type "+typeof o+", must be a function")}}return S(t)||(t=null),r.use=function(t){e.push(t)},r}function ht(t){var e=t.client||(v?dt:ft);return e(t)}var pt=function(){function t(t){var e=this;this.map={},q(t,(function(t,n){return e.append(n,t)}))}var e=t.prototype;return e.has=function(t){return null!==mt(this.map,t)},e.get=function(t){var e=this.map[mt(this.map,t)];return e?e.join():null},e.getAll=function(t){return this.map[mt(this.map,t)]||[]},e.set=function(t,e){this.map[vt(mt(this.map,t)||t)]=[x(e)]},e.append=function(t,e){var n=this.map[mt(this.map,t)];n?n.push(x(e)):this.set(t,e)},e["delete"]=function(t){delete this.map[mt(this.map,t)]},e.deleteAll=function(){this.map={}},e.forEach=function(t,e){var n=this;q(this.map,(function(r,o){q(r,(function(r){return t.call(e,r,o,n)}))}))},t}();function mt(t,e){return Object.keys(t).reduce((function(t,n){return j(e)===j(n)?n:t}),null)}function vt(t){if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return x(t)}var yt=function(){function t(t,e){var n=e.url,r=e.headers,o=e.status,i=e.statusText;this.url=n,this.ok=o>=200&&o<300,this.status=o||0,this.statusText=i||"",this.headers=new pt(r),this.body=t,P(t)?this.bodyText=t:U(t)&&(this.bodyBlob=t,gt(t)&&(this.bodyText=bt(t)))}var e=t.prototype;return e.blob=function(){return A(this.bodyBlob)},e.text=function(){return A(this.bodyText)},e.json=function(){return A(this.text(),(function(t){return JSON.parse(t)}))},t}();function bt(t){return new c((function(e){var n=new FileReader;n.readAsText(t),n.onload=function(){e(n.result)}}))}function gt(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}Object.defineProperty(yt.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var wt=function(){function t(t){this.body=null,this.params={},R(this,t,{method:O(t.method||"GET")}),this.headers instanceof pt||(this.headers=new pt(this.headers))}var e=t.prototype;return e.getUrl=function(){return K(this)},e.getBody=function(){return this.body},e.respondWith=function(t,e){return new yt(t,R(e||{},{url:this.getUrl()}))},t}(),xt={Accept:"application/json, text/plain, */*"},Tt={"Content-Type":"application/json;charset=utf-8"};function jt(t){var e=this||{},n=lt(e.$vm);return I(t||{},e.$options,jt.options),jt.interceptors.forEach((function(t){P(t)&&(t=jt.interceptor[t]),E(t)&&n.use(t)})),n(new wt(t)).then((function(t){return t.ok?t:c.reject(t)}),(function(t){return t instanceof Error&&g(t),c.reject(t)}))}function Ot(t,e,n,r){var o=this||{},i={};return n=R({},Ot.actions,n),q(n,(function(n,s){n=L({url:t,params:R({},e)},r,n),i[s]=function(){return(o.$http||jt)(Ct(n,arguments))}})),i}function Ct(t,e){var n,r=R({},t),o={};switch(e.length){case 2:o=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(r.method)?n=e[0]:o=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return r.body=n,r.params=R({},r.params,o),r}function Pt(t){Pt.installed||(y(t),t.url=K,t.http=jt,t.resource=Ot,t.Promise=c,Object.defineProperties(t.prototype,{$url:{get:function(){return _(t.url,this,this.$options.url)}},$http:{get:function(){return _(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}jt.options={},jt.headers={put:Tt,post:Tt,patch:Tt,delete:Tt,common:xt,custom:{}},jt.interceptor={before:at,method:ut,jsonp:st,json:rt,form:nt,header:ct,cors:et},jt.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach((function(t){jt[t]=function(e,n){return this(R(n||{},{url:e,method:t}))}})),["post","put","patch"].forEach((function(t){jt[t]=function(e,n,r){return this(R(r||{},{url:e,method:t,body:n}))}})),Ot.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!==typeof window&&window.Vue&&!window.Vue.resource&&window.Vue.use(Pt);var Et=Pt,St=n("3bc1"),kt=n("4360"),Ut=n("12cb"),$t=n("f121");function At(t,e){return t.body&&t.body[e]||t.params&&t.params[e]}r["default"].use(Et);const _t=Object(St["a"])();r["default"].http.interceptors.push((function(t,e){const n=kt["default"].getters["Locale/locale"];n.value&&(t.params["_locale"]=n.value);const r=At(t,"anonymous");if(r&&!0===r)return void e();let o=null;const i=At(t,"userAuth");if(i)o=i;else{const t=kt["default"].getters["User/auth"];t.state&&(o=t)}o&&t.headers.set("X-WSSE",_t.getCredentials(o.username,o.secret,o.salt)),e((function(e){const n=At(t,"ignoreError");if(!0===n)return;let r=null;switch(e.status){case 200:const{error:t}=e.data;t&&kt["default"].dispatch("Snackbar/setState",{props:{model:!0},text:t});break;case 411:e.bodyText&&(r=e.bodyText);break;case 403:r=Ut["a"].t("App.error.http.forbidden");break;default:r=Ut["a"].t("App.error.http.internet");break}r&&kt["default"].dispatch("Snackbar/setState",{props:{model:!0},text:r})}))})),r["default"].http.options.root=$t["a"].urls.api.root;const qt=r["default"].resource},e8f2:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("a026");function o(t){return r["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:r,children:o}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:i}=r;if(i){r.attrs={};const t=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(r.staticClass+=" "+t.join(" "))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,o)}})}}}]);