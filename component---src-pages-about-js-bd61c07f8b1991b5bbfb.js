(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),c=a(441),o=a(173);t.default=function(e){var t=e.location;return r.a.createElement(o.a,{location:t},r.a.createElement(c.a,{basic:!0,style:{margin:"7em 0"}},r.a.createElement("h1",null,"About"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage")))}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(5),c=a.n(i),o=a(150),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(28);a.d(t,"waitForRouteChange",function(){return l.c});var s=a(159),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(39);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},159:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Housewolf Studio"}}}}},167:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),o=a(56),u=a(1),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},168:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAP/SURBVGhD7ZlbyGZTGIB/ZjByGkYkIodpGnGjoVziAo1zKKIZZq4m7hBzuMANLpDClBwSKSUzlENyzEwSLpTDJSMXxnEihxyf55//1dvqO+299vf51ffUU3uvvdb7rm8f1l5rfzNTpkzpjGPwaTxydm+8mMNc5uyUPfEt/Bu/w9U4LoxtDnOZ09ydYXADZ1/Ao7ArjGXMMs8q7ISFuAPLBPoDrsE9sGQvPBpPnNNty0psuxaN1SvHZ7gAqzkXI+hf+GbaD19CO3oa3okf4O9Y1rPMY3egdW3zMpb1vKXMFfvnYDVPYQS0w57Ba7E8g78U+6NYtslX2FxR/iRW8zVGwIssmKPfPV3625y9jmVfxPzMXYxx7CsLajgCc7KDseQazFfnbbwOT8JcfzFatg5fx6hvW2OULMGoo4dha3xII9DPFvTBcf9xvGB2bzS8720z6L1kzsi/3IK2HI8R6A90TPf+vQ1Px64x5q1oDkeqPzHy25fWHIgRSI/FB+a2/WGOUIuwFmM4khnT2PejuXLu/bGKLzCCvZG2dRsegrUYYzvm2Pk5+hyrcc6TE4Sv4r7YFcYyZq9c9qGaK7AM/CEehF1jTGOX+exDNQdgfnH9iFUP3hCW4k8Y+cxtH6qx03m64Xtg3FyPkc8B4ASs5j6MoJ+gk8hxY45PMfLahyq8Z72VIuCVOCnMFXntQ9UzmYPtxL1xUuyD32DkrzqJzjojUPXlbYEvxsjfegbsFCFPBl2XTJqVGPm/xVYLrGUYQRy1Br38rsabd282wjZX7d7sidOSmLaoQ3Nj8nrgIwsGEFOXJj/GurZ5bXavP3n0utCCpmzACDBsivAKRt1Rfkz8CHWpO4hnMOreYkFTHsQIcI8FAzgf8xr7RuyHx6Kebc7DQdyLUd+Zd2PyiLXegiGciY+hJ+BkC/rgsc1o3TMsGEK+M56woCnPYwT4Ep/F29EOj/Pt7iejs9Bc5jR39OM5bExeD5R+jy5TT8GuWIHGLL/OZO1TY+IT6SC9xx/F/bAtDrHeZvkZ66d9asXheCpehpvQESbPvUJXim2WvL6b3sEynjnMtRHNbR/sS6c4B/Il9h7m5K7fm3IX5hjvonMqc0wMv6g4LEcnPIuH4qhYNy+g7ka/nvwneObyl8gbcFRuwmhnjIlehV54S0WHPsZRzqp1XKRFuza3Zecch/lD2tk4DOtEfUercX4DaET+jLMV/bD3EL6PvtDUbcs8tgWjvm3nDZdjdMyrc0naL/VYvoIOr/MGR7B8z/d614T5mG06/Y+wC3xpjfI/SPgrOi2Zl1yKu7BXx7PWceE2r3EEegR7Tf4sexgd6f43+ILzzxmn/er2JD8nTZky5V9mZv4BK83V/ZJglkgAAAAASUVORK5CYII="},171:function(e,t,a){},173:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),c=a(5),o=a.n(c),u=a(184),l=a.n(u),s=a(152),d=a(436),m=a(441),p=a(435),f=(a(55),a(439)),h=a(431),A=a(168),y=a.n(A),g=function(e){var t=e.title,a=e.pathname,n=e.transparent;return i.a.createElement(f.a,{fixed:"top",inverted:!0,pointing:!0,secondary:!0,size:"large",style:{border:0,background:n?null:"#a63629"}},i.a.createElement(p.a,null,i.a.createElement(f.a.Item,null,i.a.createElement(h.a,{src:y.a,avatar:!0,alt:t})),[{pathname:"/",label:"Knight's Sky"},{pathname:"/about",label:"About"}].map(function(e){return i.a.createElement(f.a.Item,{key:e.pathname,as:s.Link,to:e.pathname,active:e.pathname===a,style:{alignSelf:"center"}},e.label)})))},v=(a(197),a(171),(new Date).getFullYear()),b=function(e){var t=e.children,a=e.location,r=e.transparentHeader;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(d.a,{minWidth:d.a.onlyTablet.minWidth},i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(g,{title:e.site.siteMetadata.title,pathname:a?a.pathname:null,transparent:r}),t,i.a.createElement(m.a,{inverted:!0,vertical:!0,style:{width:"100%"}},i.a.createElement(p.a,{textAlign:"center"},i.a.createElement("p",null,"Copyright ",v," ",e.site.siteMetadata.title))))},data:n})};b.propTypes={children:o.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-about-js-bd61c07f8b1991b5bbfb.js.map