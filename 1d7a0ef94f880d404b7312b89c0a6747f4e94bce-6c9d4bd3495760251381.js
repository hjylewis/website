(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[307],{7134:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="Page-module--page--24e03",u="Page-module--page__inner--8a961",o="Page-module--page__title--5d268",c="Page-module--page__body--2ab2f";var l=e=>{let{title:t,children:n}=e;const l=(0,r.useRef)();return(0,r.useEffect)((()=>{l.current.scrollIntoView()})),r.createElement("div",{ref:l,className:a},r.createElement("div",{className:u},t&&r.createElement("h1",{className:o},t),r.createElement("div",{className:c},n)))}},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(7294),a=n(4854),u={author__photo:"Author-module--author__photo--f9011",author__title:"Author-module--author__title--c2773",author__titleLink:"Author-module--author__title-link--eb7bd",author__subtitle:"Author-module--author__subtitle--69a39"};var o=e=>{let{author:t,isIndex:n}=e;return r.createElement("div",{className:u.author},r.createElement(a.Link,{to:"/"},r.createElement("img",{src:(0,a.withPrefix)(t.photo),className:u.author__photo,width:"75",height:"75",alt:t.name})),n?r.createElement("h1",{className:u.author__title},r.createElement(a.Link,{className:u.author__titleLink,to:"/"},t.name)):r.createElement("h2",{className:u.author__title},r.createElement(a.Link,{className:u.author__titleLink,to:"/"},t.name)),r.createElement("p",{className:u.author__subtitle},t.bio))},c=n(8022),l="Icon-module--icon--1d7da";var i=e=>{let{icon:t}=e;return r.createElement("svg",{className:l,viewBox:t.viewBox},r.createElement("path",{d:t.path}))},s="Contacts-module--contacts--09178",f="Contacts-module--contacts__list--251ba",m="Contacts-module--contacts__list-item--586d6",d="Contacts-module--contacts__list-item-link--5ca10";var p=e=>{let{contacts:t}=e;return r.createElement("div",{className:s},r.createElement("ul",{className:f},Object.keys(t).map((e=>r.createElement("li",{className:m,key:e},r.createElement("a",{className:d,href:(0,c.K)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.createElement(i,{icon:(0,c.q)(e)})))))))},x="Copyright-module--copyright--2c602";var h=e=>{let{copyright:t}=e;return r.createElement("div",{className:x},t)},v="Menu-module--menu--113a9",b="Menu-module--menu__list--26b24",_="Menu-module--menu__list-item--41e5e",E="Menu-module--menu__list-item-link--7b43a";var g=e=>{let{menu:t}=e;return r.createElement("nav",{className:v},r.createElement("ul",{className:b},t.map((e=>r.createElement("li",{className:_,key:e.path},e.path.match(/^https/)?r.createElement("a",{className:E,href:e.path,rel:"noopener noreferrer",target:"_blank"},e.label):r.createElement(a.Link,{to:e.path,className:E},e.label))))))},y="Sidebar-module--sidebar--1bfa1",N="Sidebar-module--sidebar__inner--e8eff";const A=e=>{let{data:t,isIndex:n}=e;const{author:a,copyright:u,menu:c}=t.site.siteMetadata;return r.createElement("div",{className:y},r.createElement("div",{className:N},r.createElement(o,{author:a,isIndex:n}),r.createElement(g,{menu:c}),r.createElement(p,{contacts:a.contacts}),r.createElement(h,{copyright:u})))};var j=e=>r.createElement(a.StaticQuery,{query:"329091279",render:t=>r.createElement(A,Object.assign({},e,{data:t}))})},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},2663:function(e){e.exports=function(e,t,n,r){var a=-1,u=null==e?0:e.length;for(r&&u&&(n=e[++a]);++a<u;)n=t(n,e[a],a,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),a=n(9607),u=n(2333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):u(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),a=n(9932),u=n(1469),o=n(3448),c=r?r.prototype:void 0,l=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return a(t,e)+"";if(o(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),a=n(3816),u=n(8748),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(u(a(t).replace(o,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),a=Object.prototype,u=a.hasOwnProperty,o=a.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(l){}var a=o.call(e);return r&&(t?e[c]=n:delete e[c]),a}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),a="object"==typeof self&&self&&self.Object===Object&&self,u=r||a||Function("return this")();e.exports=u},2757:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+u+"]",c="\\d+",l="["+n+"]",i="["+r+"]",s="[^"+t+u+c+n+r+a+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+a+"]",p="(?:"+i+"|"+s+")",x="(?:"+d+"|"+s+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",_="[\\ufe0e\\ufe0f]?",E=_+b+("(?:\\u200d(?:"+["[^"+t+"]",f,m].join("|")+")"+_+b+")*"),g="(?:"+[l,f,m].join("|")+")"+E,y=RegExp([d+"?"+i+"+"+h+"(?="+[o,d,"$"].join("|")+")",x+"+"+v+"(?="+[o,d+p,"$"].join("|")+")",d+"?"+p+"+"+h,d+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",c,g].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},3816:function(e,t,n){var r=n(9389),a=n(9833),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(u,r).replace(o,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),a=n(7005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),a=n(3157),u=n(9833),o=n(2757);e.exports=function(e,t,n){return e=u(e),void 0===(t=n?void 0:t)?a(e)?o(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=1d7a0ef94f880d404b7312b89c0a6747f4e94bce-6c9d4bd3495760251381.js.map