webpackJsonp([0x8dc7eb5d7b47],{72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(59),l=n(1),r=n(16);t.default=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return l.createElement(r.Menu,{pagination:!0},a.times(e.pageCount,function(n){var a=(n+1).toString(),u=e.pageCount<10?5:3,o=+a-u<+t&&+a+u>+t,i=+a===e.pageCount,c=1===+a;return o||c||i?l.createElement(r.Menu.Item,{key:a,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+a+"/",name:a,active:t===a}):+a===e.pageCount-1||2===+a?l.createElement(r.Menu.Item,{key:a,disabled:!0},"..."):null}))}},73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(16);t.default=function(e){return a.createElement(l.Card,null,a.createElement(l.Card.Content,null,a.createElement(l.Card.Header,null,"Tags")),a.createElement(l.Card.Content,null,a.createElement(l.List,null,e.tags.map(function(t){var n=t.fieldValue===e.tag,r={fontWeight:"700"},u=n?"/blog":"/blog/tags/"+t.fieldValue+"/";return a.createElement(l.List.Item,{as:"span",key:t.fieldValue},a.createElement(l.List.Icon,{name:"tag",color:n?"blue":null}),a.createElement(l.List.Content,{style:n?r:null},a.createElement(e.Link,{to:u},t.fieldValue," (",t.totalCount,")")))}))))}},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(86),l=n(59),r=n(1),u=n(16),o=n(72),i=n(97),c=n(73);t.default=function(e){var t=e.data.tags.group,n=e.data.posts.edges,m=e.location.pathname,s=Math.ceil(e.data.posts.totalCount/10),d=r.createElement(u.Container,null,n.map(function(e){var t=e.node,n=t.frontmatter,o=t.timeToRead,i=t.fields.slug,c=t.excerpt,m=n.author.avatar.children[0],s=l.get(n,"image.children.0.responsiveResolution",{}),d=r.createElement(u.Comment.Group,null,r.createElement(u.Comment,null,r.createElement(u.Comment.Avatar,{src:m.responsiveResolution.src,srcSet:m.responsiveResolution.srcSet}),r.createElement(u.Comment.Content,null,r.createElement(u.Comment.Author,{style:{fontWeight:400}},n.author.id),r.createElement(u.Comment.Metadata,{style:{margin:0}},n.updatedDate," - ",o," min read")))),p=r.createElement(u.Card.Description,null,c,r.createElement("br",null),r.createElement(a.default,{to:i},"Read more…"));return r.createElement(u.Card,{key:i,fluid:!0,image:s,header:n.title,extra:d,description:p})}));return r.createElement(u.Container,null,r.createElement(i.default,null),r.createElement(u.Segment,{vertical:!0},r.createElement(u.Grid,{padded:!0,style:{justifyContent:"space-around"}},r.createElement("div",{style:{maxWidth:600}},d,r.createElement(u.Segment,{vertical:!0,textAlign:"center"},r.createElement(o.default,{Link:a.default,pathname:m,pageCount:s}))),r.createElement("div",null,r.createElement(c.default,{Link:a.default,tags:t,tag:e.pathContext.tag})))))},t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-tsx-b5e3057a84df7fdc2368.js.map