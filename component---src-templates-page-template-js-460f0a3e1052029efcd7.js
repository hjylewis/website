"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[395],{7134:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),r="Page-module--page--24e03",n="Page-module--page__inner--8a961",c="Page-module--page__title--5d268",m="Page-module--page__body--2ab2f";var o=e=>{let{title:t,children:a}=e;const o=(0,l.useRef)();return(0,l.useEffect)((()=>{o.current.scrollIntoView()})),l.createElement("div",{ref:o,className:r},l.createElement("div",{className:n},t&&l.createElement("h1",{className:c},t),l.createElement("div",{className:m},a)))}},2661:function(e,t,a){a.d(t,{Z:function(){return L}});var l=a(7294),r=a(4854),n={author__photo:"Author-module--author__photo--f9011",author__title:"Author-module--author__title--c2773",author__titleLink:"Author-module--author__title-link--eb7bd",author__subtitle:"Author-module--author__subtitle--69a39"};var c=e=>{let{author:t,isIndex:a}=e;return l.createElement("div",{className:n.author},l.createElement(r.Link,{to:"/"},l.createElement("img",{src:(0,r.withPrefix)(t.photo),className:n.author__photo,width:"75",height:"75",alt:t.name})),a?l.createElement("h1",{className:n.author__title},l.createElement(r.Link,{className:n.author__titleLink,to:"/"},t.name)):l.createElement("h2",{className:n.author__title},l.createElement(r.Link,{className:n.author__titleLink,to:"/"},t.name)),l.createElement("p",{className:n.author__subtitle},t.bio))},m=a(8022),o="Icon-module--icon--1d7da";var s=e=>{let{icon:t}=e;return l.createElement("svg",{className:o,viewBox:t.viewBox},l.createElement("path",{d:t.path}))},i="Contacts-module--contacts--09178",u="Contacts-module--contacts__list--251ba",d="Contacts-module--contacts__list-item--586d6",h="Contacts-module--contacts__list-item-link--5ca10";var _=e=>{let{contacts:t}=e;return l.createElement("div",{className:i},l.createElement("ul",{className:u},Object.keys(t).map((e=>l.createElement("li",{className:d,key:e},l.createElement("a",{className:h,href:(0,m.K)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},l.createElement(s,{icon:(0,m.q)(e)})))))))},E="Copyright-module--copyright--2c602";var p=e=>{let{copyright:t}=e;return l.createElement("div",{className:E},t)},b="Menu-module--menu--113a9",N="Menu-module--menu__list--26b24",f="Menu-module--menu__list-item--41e5e",k="Menu-module--menu__list-item-link--7b43a";var v=e=>{let{menu:t}=e;return l.createElement("nav",{className:b},l.createElement("ul",{className:N},t.map((e=>l.createElement("li",{className:f,key:e.path},e.path.match(/^https/)?l.createElement("a",{className:k,href:e.path,rel:"noopener noreferrer",target:"_blank"},e.label):l.createElement(r.Link,{to:e.path,className:k},e.label))))))},g="Sidebar-module--sidebar--1bfa1",y="Sidebar-module--sidebar__inner--e8eff";const w=e=>{let{data:t,isIndex:a}=e;const{author:r,copyright:n,menu:m}=t.site.siteMetadata;return l.createElement("div",{className:g},l.createElement("div",{className:y},l.createElement(c,{author:r,isIndex:a}),l.createElement(v,{menu:m}),l.createElement(_,{contacts:r.contacts}),l.createElement(p,{copyright:n})))};var L=e=>l.createElement(r.StaticQuery,{query:"329091279",render:t=>l.createElement(w,Object.assign({},e,{data:t}))})},1173:function(e,t,a){a.r(t);var l=a(7294),r=a(3650),n=a(2661),c=a(7134);t.default=e=>{let{data:t}=e;const{title:a,subtitle:m}=t.site.siteMetadata,{title:o,description:s}=t.markdownRemark.frontmatter,{html:i}=t.markdownRemark,u=null!==s?s:m;return l.createElement(r.Z,{title:o+" - "+a,description:u},l.createElement(n.Z,null),l.createElement(c.Z,{title:o},l.createElement("div",{dangerouslySetInnerHTML:{__html:i}})))}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-460f0a3e1052029efcd7.js.map