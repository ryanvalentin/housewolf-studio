(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(442),i=n(437),c=n(434),s=n(158),u=n.n(s),l=n(159),d=n.n(l),f=(n(4),n(7)),p=n(77),m=n(76),h=n(157);function b(e){var t=e.children,n=e.className,a=e.clearing,o=e.content,i=e.fitted,c=e.hidden,s=e.horizontal,l=e.inverted,y=e.section,v=e.vertical,w=d()("ui",Object(f.a)(a,"clearing"),Object(f.a)(i,"fitted"),Object(f.a)(c,"hidden"),Object(f.a)(s,"horizontal"),Object(f.a)(l,"inverted"),Object(f.a)(y,"section"),Object(f.a)(v,"vertical"),"divider",n),g=Object(p.a)(b,e),E=Object(m.a)(b,e);return r.a.createElement(E,u()({},g,{className:w}),h.a.isNil(t)?o:t)}b.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],b.propTypes={};var y=b,v=n(279),w=n(179);function g(e){var t=e.data.markdownRemark,n=t.id,a=t.frontmatter,s=t.html;return r.a.createElement(w.a,{location:a.path},r.a.createElement(o.a,{basic:!0,style:{margin:"7em 0"}},r.a.createElement(i.a,{text:!0},r.a.createElement(c.a,{as:"h1"},a.title,r.a.createElement(c.a.Subheader,null,a.date)),r.a.createElement(y,null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),r.a.createElement(y,null),r.a.createElement(v.DiscussionEmbed,{shortname:"housewolf",config:{identifier:n,title:a.title}}))))}n.d(t,"default",function(){return g}),n.d(t,"pageQuery",function(){return E});var E="1847265745"},161:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(160),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(29);n.d(t,"waitForRouteChange",function(){return u.c});var l=n(164),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var f=n(40);n.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,n){var a;e.exports=(a=n(173))&&a.default||a},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Housewolf Studios"}}}}},173:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(57),s=n(1),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},174:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAP/SURBVGhD7ZlbyGZTGIB/ZjByGkYkIodpGnGjoVziAo1zKKIZZq4m7hBzuMANLpDClBwSKSUzlENyzEwSLpTDJSMXxnEihxyf55//1dvqO+299vf51ffUU3uvvdb7rm8f1l5rfzNTpkzpjGPwaTxydm+8mMNc5uyUPfEt/Bu/w9U4LoxtDnOZ09ydYXADZ1/Ao7ArjGXMMs8q7ISFuAPLBPoDrsE9sGQvPBpPnNNty0psuxaN1SvHZ7gAqzkXI+hf+GbaD19CO3oa3okf4O9Y1rPMY3egdW3zMpb1vKXMFfvnYDVPYQS0w57Ba7E8g78U+6NYtslX2FxR/iRW8zVGwIssmKPfPV3625y9jmVfxPzMXYxx7CsLajgCc7KDseQazFfnbbwOT8JcfzFatg5fx6hvW2OULMGoo4dha3xII9DPFvTBcf9xvGB2bzS8720z6L1kzsi/3IK2HI8R6A90TPf+vQ1Px64x5q1oDkeqPzHy25fWHIgRSI/FB+a2/WGOUIuwFmM4khnT2PejuXLu/bGKLzCCvZG2dRsegrUYYzvm2Pk5+hyrcc6TE4Sv4r7YFcYyZq9c9qGaK7AM/CEehF1jTGOX+exDNQdgfnH9iFUP3hCW4k8Y+cxtH6qx03m64Xtg3FyPkc8B4ASs5j6MoJ+gk8hxY45PMfLahyq8Z72VIuCVOCnMFXntQ9UzmYPtxL1xUuyD32DkrzqJzjojUPXlbYEvxsjfegbsFCFPBl2XTJqVGPm/xVYLrGUYQRy1Br38rsabd282wjZX7d7sidOSmLaoQ3Nj8nrgIwsGEFOXJj/GurZ5bXavP3n0utCCpmzACDBsivAKRt1Rfkz8CHWpO4hnMOreYkFTHsQIcI8FAzgf8xr7RuyHx6Kebc7DQdyLUd+Zd2PyiLXegiGciY+hJ+BkC/rgsc1o3TMsGEK+M56woCnPYwT4Ep/F29EOj/Pt7iejs9Bc5jR39OM5bExeD5R+jy5TT8GuWIHGLL/OZO1TY+IT6SC9xx/F/bAtDrHeZvkZ66d9asXheCpehpvQESbPvUJXim2WvL6b3sEynjnMtRHNbR/sS6c4B/Il9h7m5K7fm3IX5hjvonMqc0wMv6g4LEcnPIuH4qhYNy+g7ka/nvwneObyl8gbcFRuwmhnjIlehV54S0WHPsZRzqp1XKRFuza3Zecch/lD2tk4DOtEfUercX4DaET+jLMV/bD3EL6PvtDUbcs8tgWjvm3nDZdjdMyrc0naL/VYvoIOr/MGR7B8z/d614T5mG06/Y+wC3xpjfI/SPgrOi2Zl1yKu7BXx7PWceE2r3EEegR7Tf4sexgd6f43+ILzzxmn/er2JD8nTZky5V9mZv4BK83V/ZJglkgAAAAASUVORK5CYII="},177:function(e,t,n){},179:function(e,t,n){"use strict";var a=n(172),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(186),u=n.n(s),l=n(161),d=n(438),f=n(442),p=n(437),m=(n(56),n(440)),h=n(433),b=n(174),y=n.n(b),v=function(e){var t=e.title,n=e.pathname,a=e.transparent;return o.a.createElement(m.a,{fixed:"top",inverted:!0,pointing:!0,secondary:!0,size:"large",style:{border:0,background:a?null:"#a63629"}},o.a.createElement(p.a,null,o.a.createElement(m.a.Item,null,o.a.createElement(h.a,{src:y.a,avatar:!0,alt:t})),[{pathname:"/",label:"Home"},{pathname:"/knights-sky",label:"Knight's Sky"},{pathname:"/about",label:"About"}].map(function(e){return o.a.createElement(m.a.Item,{key:e.pathname,as:l.Link,to:e.pathname,active:e.pathname===n,style:{alignSelf:"center"}},e.label)})))},w=(n(194),n(177),(new Date).getFullYear()),g=function(e){var t=e.children,n=e.location,r=e.transparentHeader;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(d.a,{minWidth:d.a.onlyTablet.minWidth},o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(v,{title:e.site.siteMetadata.title,pathname:n?n.pathname:null,transparent:r}),t,o.a.createElement(f.a,{inverted:!0,vertical:!0,style:{width:"100%"}},o.a.createElement(p.a,{textAlign:"center"},o.a.createElement("p",null,"Copyright ",w," ",e.site.siteMetadata.title))))},data:a})};g.propTypes={children:c.a.node.isRequired};t.a=g},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a=void 0;return function(){var r=this,o=arguments,i=n&&!a;window.clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(r,o)},t),i&&e.apply(r,o)}}},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var a=n(280),r=n(281),o=n(282);t.CommentCount=a.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:a.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=(a=o)&&a.__esModule?a:{default:a},c=n(232);var s=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=(a=o)&&a.__esModule?a:{default:a};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=(a=o)&&a.__esModule?a:{default:a},c=n(232);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},434:function(e,t,n){"use strict";var a=n(158),r=n.n(a),o=(n(183),n(159)),i=n.n(o),c=(n(4),n(0)),s=n.n(c),u=n(7),l=n(77),d=n(76),f=n(157),p=n(83),m=n(433),h=n(78);function b(e){var t=e.children,n=e.className,a=e.content,o=i()("sub header",n),c=Object(l.a)(b,e),u=Object(d.a)(b,e);return s.a.createElement(u,r()({},c,{className:o}),f.a.isNil(t)?a:t)}b.handledProps=["as","children","className","content"],b.propTypes={},b.create=Object(h.a)(b,function(e){return{content:e}});var y=b;function v(e){var t=e.children,n=e.className,a=e.content,o=i()("content",n),c=Object(l.a)(v,e),u=Object(d.a)(v,e);return s.a.createElement(u,r()({},c,{className:o}),f.a.isNil(t)?a:t)}v.handledProps=["as","children","className","content"],v.propTypes={};var w=v;function g(e){var t=e.attached,n=e.block,a=e.children,o=e.className,c=e.color,h=e.content,b=e.disabled,v=e.dividing,E=e.floated,j=e.icon,O=e.image,C=e.inverted,S=e.size,P=e.sub,A=e.subheader,I=e.textAlign,k=i()("ui",c,S,Object(u.a)(n,"block"),Object(u.a)(b,"disabled"),Object(u.a)(v,"dividing"),Object(u.e)(E,"floated"),Object(u.a)(!0===j,"icon"),Object(u.a)(!0===O,"image"),Object(u.a)(C,"inverted"),Object(u.a)(P,"sub"),Object(u.b)(t,"attached"),Object(u.d)(I),"header",o),D=Object(l.a)(g,e),q=Object(d.a)(g,e);if(!f.a.isNil(a))return s.a.createElement(q,r()({},D,{className:k}),a);var x=p.a.create(j,{autoGenerateKey:!1}),_=m.a.create(O,{autoGenerateKey:!1}),M=y.create(A,{autoGenerateKey:!1});return x||_?s.a.createElement(q,r()({},D,{className:k}),x||_,(h||M)&&s.a.createElement(w,null,h,M)):s.a.createElement(q,r()({},D,{className:k}),h,M)}g.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],g.propTypes={},g.Content=w,g.Subheader=y;t.a=g}}]);
//# sourceMappingURL=component---src-templates-post-js-6f97bf2626857e7fe531.js.map