/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={487:t=>{var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=e},12:t=>{var e,n;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var o=t[r]<<16|t[r+1]<<8|t[r+2],a=0;a<4;a++)8*r+6*a<=8*t.length?n.push(e.charAt(o>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,o=0;r<t.length;o=++r%4)0!=o&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(r))>>>6-2*o);return n}},t.exports=n},738:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},568:(t,e,n)=>{var r,o,a,s,i;r=n(12),o=n(487).utf8,a=n(738),s=n(487).bin,(i=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?s.stringToBytes(t):o.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var n=r.bytesToWords(t),c=8*t.length,u=1732584193,f=-271733879,h=-1732584194,l=271733878,p=0;p<n.length;p++)n[p]=16711935&(n[p]<<8|n[p]>>>24)|4278255360&(n[p]<<24|n[p]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var g=i._ff,d=i._gg,y=i._hh,b=i._ii;for(p=0;p<n.length;p+=16){var v=u,w=f,m=h,T=l;u=g(u,f,h,l,n[p+0],7,-680876936),l=g(l,u,f,h,n[p+1],12,-389564586),h=g(h,l,u,f,n[p+2],17,606105819),f=g(f,h,l,u,n[p+3],22,-1044525330),u=g(u,f,h,l,n[p+4],7,-176418897),l=g(l,u,f,h,n[p+5],12,1200080426),h=g(h,l,u,f,n[p+6],17,-1473231341),f=g(f,h,l,u,n[p+7],22,-45705983),u=g(u,f,h,l,n[p+8],7,1770035416),l=g(l,u,f,h,n[p+9],12,-1958414417),h=g(h,l,u,f,n[p+10],17,-42063),f=g(f,h,l,u,n[p+11],22,-1990404162),u=g(u,f,h,l,n[p+12],7,1804603682),l=g(l,u,f,h,n[p+13],12,-40341101),h=g(h,l,u,f,n[p+14],17,-1502002290),u=d(u,f=g(f,h,l,u,n[p+15],22,1236535329),h,l,n[p+1],5,-165796510),l=d(l,u,f,h,n[p+6],9,-1069501632),h=d(h,l,u,f,n[p+11],14,643717713),f=d(f,h,l,u,n[p+0],20,-373897302),u=d(u,f,h,l,n[p+5],5,-701558691),l=d(l,u,f,h,n[p+10],9,38016083),h=d(h,l,u,f,n[p+15],14,-660478335),f=d(f,h,l,u,n[p+4],20,-405537848),u=d(u,f,h,l,n[p+9],5,568446438),l=d(l,u,f,h,n[p+14],9,-1019803690),h=d(h,l,u,f,n[p+3],14,-187363961),f=d(f,h,l,u,n[p+8],20,1163531501),u=d(u,f,h,l,n[p+13],5,-1444681467),l=d(l,u,f,h,n[p+2],9,-51403784),h=d(h,l,u,f,n[p+7],14,1735328473),u=y(u,f=d(f,h,l,u,n[p+12],20,-1926607734),h,l,n[p+5],4,-378558),l=y(l,u,f,h,n[p+8],11,-2022574463),h=y(h,l,u,f,n[p+11],16,1839030562),f=y(f,h,l,u,n[p+14],23,-35309556),u=y(u,f,h,l,n[p+1],4,-1530992060),l=y(l,u,f,h,n[p+4],11,1272893353),h=y(h,l,u,f,n[p+7],16,-155497632),f=y(f,h,l,u,n[p+10],23,-1094730640),u=y(u,f,h,l,n[p+13],4,681279174),l=y(l,u,f,h,n[p+0],11,-358537222),h=y(h,l,u,f,n[p+3],16,-722521979),f=y(f,h,l,u,n[p+6],23,76029189),u=y(u,f,h,l,n[p+9],4,-640364487),l=y(l,u,f,h,n[p+12],11,-421815835),h=y(h,l,u,f,n[p+15],16,530742520),u=b(u,f=y(f,h,l,u,n[p+2],23,-995338651),h,l,n[p+0],6,-198630844),l=b(l,u,f,h,n[p+7],10,1126891415),h=b(h,l,u,f,n[p+14],15,-1416354905),f=b(f,h,l,u,n[p+5],21,-57434055),u=b(u,f,h,l,n[p+12],6,1700485571),l=b(l,u,f,h,n[p+3],10,-1894986606),h=b(h,l,u,f,n[p+10],15,-1051523),f=b(f,h,l,u,n[p+1],21,-2054922799),u=b(u,f,h,l,n[p+8],6,1873313359),l=b(l,u,f,h,n[p+15],10,-30611744),h=b(h,l,u,f,n[p+6],15,-1560198380),f=b(f,h,l,u,n[p+13],21,1309151649),u=b(u,f,h,l,n[p+4],6,-145523070),l=b(l,u,f,h,n[p+11],10,-1120210379),h=b(h,l,u,f,n[p+2],15,718787259),f=b(f,h,l,u,n[p+9],21,-343485551),u=u+v>>>0,f=f+w>>>0,h=h+m>>>0,l=l+T>>>0}return r.endian([u,f,h,l])})._ff=function(t,e,n,r,o,a,s){var i=t+(e&n|~e&r)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},i._gg=function(t,e,n,r,o,a,s){var i=t+(e&r|n&~r)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},i._hh=function(t,e,n,r,o,a,s){var i=t+(e^n^r)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},i._ii=function(t,e,n,r,o,a,s){var i=t+(n^(e|~r))+(o>>>0)+s;return(i<<a|i>>>32-a)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=r.wordsToBytes(i(t,e));return e&&e.asBytes?n:e&&e.asString?s.bytesToString(n):r.bytesToHex(n)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){var e,n;switch(t){case"GITHUB_TOKEN":try{e=Deno.env.get(t)}catch(t){e=GITHUB_TOKEN}break;case"GITHUB_MAIN_REPO":try{1==(e=(n=Deno.env.get(t)).split(", ")).length&&(e=n.split(","))}catch(t){1==(e=(n=GITHUB_MAIN_REPO).split(", ")).length&&(e=n.split(","))}break;case"GITHUB_SUB_REPO":try{1==(e=(n=Deno.env.get(t)).split(", ")).length&&(e=n.split(","))}catch(t){1==(e=(n=GITHUB_SUB_REPO).split(", ")).length&&(e=n.split(","))}break;case"GITHUB_CONFIG_NAME":try{e=Deno.env.get(t)}catch(t){e=GITHUB_CONFIG_NAME}break;default:e=Deno.env.get(t)}return e}async function e(t,e){var n=t.username,r=t.repo,o=t.token,a=t.filename,s=t.branch;if(!o||!a||!s)return console.error("[Error] Please Check the Config. (token/filename/branch)"),!1;if(!e)return console.error("[Error] Please Check the key."),!1;let i=encodeURI(`https://api.github.com/repos/${n}/${r}/commits?sha=${s}&dt=${Math.floor(1e8*Math.random())}`),c=await fetch(i,{headers:{Accept:"application/vnd.github.v3.raw",Authorization:`token ${o}`,"User-Agent":"ghKV Clinet"}}),u=await c.json();u=u[0].sha;let f=encodeURI(`https://raw.githubusercontent.com/${n}/${r}/${u}${a}?dt=${Math.floor(1e8*Math.random())}`);console.log(f);let h=await fetch(f,{headers:{Accept:"application/vnd.github.v3.raw",Authorization:`token ${o}`}}),l=await h.text();return console.log(l),l=JSON.parse(l),1==e?l:l[e]}const r="function"==typeof btoa,o="function"==typeof Buffer,a=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder?new TextEncoder:void 0),s=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),i=((t=>{let e={};t.forEach(((t,n)=>e[t]=n))})(s),String.fromCharCode.bind(String)),c=("function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),t=>t.replace(/=/g,"").replace(/[+\/]/g,(t=>"+"==t?"-":"_"))),u=r?t=>btoa(t):o?t=>Buffer.from(t,"binary").toString("base64"):t=>{let e,n,r,o,a="";const i=t.length%3;for(let i=0;i<t.length;){if((n=t.charCodeAt(i++))>255||(r=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=n<<16|r<<8|o,a+=s[e>>18&63]+s[e>>12&63]+s[e>>6&63]+s[63&e]}return i?a.slice(0,i-3)+"===".substring(i):a},f=o?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let n=0,r=t.length;n<r;n+=4096)e.push(i.apply(null,t.subarray(n,n+4096)));return u(e.join(""))},h=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?i(192|e>>>6)+i(128|63&e):i(224|e>>>12&15)+i(128|e>>>6&63)+i(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return i(240|e>>>18&7)+i(128|e>>>12&63)+i(128|e>>>6&63)+i(128|63&e)},l=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,p=o?t=>Buffer.from(t,"utf8").toString("base64"):a?t=>f(a.encode(t)):t=>u(t.replace(l,h)),g=(t,e=!1)=>e?c(p(t)):p(t);function d(t,e,n){return new Response(JSON.stringify({statusCode:t,statusInfo:e}),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},status:n||200})}var y=n(568),b=n.n(y);async function v(t,n){var r=await e(t,"user");return b()(r[0].username+r[0].password+`${new Date(Date.now()).getFullYear()}${new Date(Date.now()).getMonth()+1}`)==n}async function w(t){return JSON.stringify(await m(t,"source/_posts/"))}async function m(t,e){var n=`https://api.github.com/repos/${t.username}/${t.repo}/contents/${e}?ref=${t.branch}`;let r=await fetch(n,{headers:{Accept:"application/vnd.github.v3.raw",Authorization:`token ${t.token}`,"User-Agent":"ghKV Clinet"}}).then((t=>t.json()));var o={"/":[]};console.log("Start.."),console.info(r),console.info(n);for(let n=0;n<r.length;n++)if("dir"==r[n].type){console.log("Dir: "+r[n].name);var a=await m(t,e+r[n].name+"/");console.info(a),o[r[n].name+"/"]=a["/"]}else{console.log("File: "+r[n].name);var s={filename:r[n].name,filepath:r[n].path};o["/"].push(s)}return o}addEventListener("fetch",(n=>{n.respondWith(async function(n){const r=n.url,o=new URL(r),a=(o.hostname,o.pathname),s=(Date.now(new Date),t("GITHUB_TOKEN")),i=t("GITHUB_MAIN_REPO")[0],c=t("GITHUB_MAIN_REPO")[1],u=t("GITHUB_SUB_REPO")[0],f=t("GITHUB_SUB_REPO")[1],h=t("GITHUB_CONFIG_NAME"),l={username:u.split("/")[0],repo:u.split("/")[1],token:s,filename:h,branch:f},p={username:i.split("/")[0],repo:i.split("/")[1],token:s,branch:c};if(a.startsWith("/api/reg")){if(m=await e(l,"user"))return d("403","已有注册账号，如需注册，请删除已有账号重试。");var y=await n.text();return y=JSON.parse(y),/^[a-z0-9_-]{3,15}$/.test(y.username)?await async function(t,n,r,o){var a=t.username,s=t.repo,i=t.token,c=t.filename,u=t.branch;let f=await fetch(`https://api.github.com/repos/${a}/${s}/contents/${c}?ref=${u}`,{method:"GET",headers:{"content-type":"application/json;charset=UTF-8","user-agent":"ghKV Client",Authorization:"token "+i}}),h=(await f.json()).sha;var l;(l=await e(t,!0)).user=r,l=JSON.stringify(l);let p={body:JSON.stringify({branch:u,message:"Upload Database by ghKV.",content:g(l),sha:h}),method:"PUT",headers:{accept:"application/vnd.github.v3+json","content-type":"application/json;charset=UTF-8","user-agent":"ghKV Client",Authorization:"token "+i}},d=await fetch(`https://api.github.com/repos/${a}/${s}/contents${c}?ref=${u}`,p);return 200==d.status||201==d.status}(l,0,[{username:y.username,password:y.password}])?d("200","注册成功。"):d("500","注册失败。"):d("403","用户名或密码不符合要求。")}var m;return a.startsWith("/api/login")?(y=await n.text(),y=JSON.parse(y),(m=await e(l,"user"))&&m[0].username==y.username&&m[0].password==y.password?d("200",b()(m[0].username+m[0].password+`${new Date(Date.now()).getFullYear()}${new Date(Date.now()).getMonth()+1}`)):d("403","用户名或密码错误。")):a.startsWith("/api/check_token")?(y=await n.text(),1==await v(l,y)?d("200","Token 有效。"):d("403","Token 无效。")):a.startsWith("/api/get_posts_list")?(y=await n.text(),1==await v(l,y)?d("200",await w(p)):d("403","Token 无效。")):new Response(JSON.stringify({main:i,mainbranch:c,sub:u,subbranch:f,config:h}))}(n.request))}))})()})();