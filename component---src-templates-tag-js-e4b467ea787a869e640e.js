(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7],{ccoC:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),o=t("Wbzz"),i=t("vrFN"),s=t("uNfT"),r=t("vx99"),c=t("L6NH"),m=function(e){var a=e.slug,t=e.currentPage,l=e.numberOfPages;return n.a.createElement("div",{className:"pagination"},t+1<=l&&n.a.createElement(o.Link,{to:"/blog/tag/"+a+"/"+(t+1),className:"pagination__icon navigator"},n.a.createElement(s.p,{name:"arrow_right"})),n.a.createElement("div",{className:"pagination__current"},"صفحه ",Object(c.e)(t)," از ",Object(c.e)(l)),t-1>0&&n.a.createElement(o.Link,{to:"/blog/tag/"+a+"/"+(t-1),className:"pagination__icon navigator"},n.a.createElement(s.p,{name:"arrow_left"})))};a.default=function(e){var a=e.data,t=e.pageContext,l=a.posts.edges,o=a.people.edges;return n.a.createElement(s.j,null,n.a.createElement(i.a,{title:"نوشته های مرتبط به "+Object(c.a)(o),description:"داستان و نوشته های درباره "+Object(c.a)(o)+" را دربلاگ بایوکست بخوانید",keywords:l[0].node.keyword.map((function(e){return e.title}))}),n.a.createElement(s.m,{className:"header--standalone header--blog"}),n.a.createElement(s.t,null,n.a.createElement(s.w,{className:"all_posts"},n.a.createElement("h1",{className:"all_posts__title"},"نوشته‌های مرتبط به ",Object(c.a)(o)),n.a.createElement("div",{className:"inner_wrapper"},n.a.createElement(r.BlogPosts,{posts:l}),n.a.createElement(m,{slug:t.slug,currentPage:t.currentPage,numberOfPages:t.numberOfPages})))),n.a.createElement(s.l,{beforeColor:"white"}))}},vx99:function(e,a,t){"use strict";t.r(a),t.d(a,"BlogPost",(function(){return d})),t.d(a,"BlogHeading",(function(){return g})),t.d(a,"BlogPosts",(function(){return u}));var l=t("q1tI"),n=t.n(l),o=t("9eSz"),i=t.n(o),s=t("Wbzz"),r=t("vrFN"),c=t("uNfT"),m=t("L6NH"),d=function(e){var a,t,l,o,r,c,d=e.post;return n.a.createElement(s.Link,{className:"navigator blog__post",to:"/blog/"+(null==d||null===(a=d.fields)||void 0===a?void 0:a.slug)},n.a.createElement("figure",{className:"blog__post__image"},n.a.createElement(i.a,{fluid:null==d||null===(t=d.mainImage)||void 0===t||null===(l=t.childImageSharp)||void 0===l?void 0:l.fluid,alt:null==d?void 0:d.title})),n.a.createElement("div",{className:"blog__post__info"},n.a.createElement("div",{className:"blog__post__details"},null==d||null===(o=d.category)||void 0===o?void 0:o.name," ∙ ",Object(m.d)(new Date(null==d?void 0:d.created_at))," ∙"," ",Object(m.e)(null==d||null===(r=d.fields)||void 0===r?void 0:r.readingTime)," دقیقه"),n.a.createElement("div",{className:"blog__post__title"},null==d?void 0:d.title),n.a.createElement("p",{className:"blog__post__description"},null==d||null===(c=d.description)||void 0===c?void 0:c.slice(0,250),"...")))},g=function(e){var a=e.children,t=e.actionTitle,l=e.actionLink,o=e.actionIcon;return n.a.createElement("header",{className:"blog__heading"},n.a.createElement("h3",{className:"blog__heading__title"},a),t&&n.a.createElement("div",{className:"blog__heading__action"},n.a.createElement(c.h,{Tag:"Link",to:l,iconName:o,color:"gray-outlined",size:"small"},t)))},u=function(e){var a=e.posts,t=e.skip,l=void 0===t?0:t;return n.a.createElement("div",{className:"blog__posts"},a.slice(l).map((function(e){var a=e.node;return n.a.createElement(d,{key:null==a?void 0:a.fields.slug,post:a})})))};a.default=function(e){var a,t,l,o,i,s,d,_,p,v=e.data,E=null===(a=v.allStrapipost)||void 0===a?void 0:a.edges,b=(E[0].node,Object(m.g)(v.episode.edges)[0]);v.categories.edges;return n.a.createElement(c.j,null,n.a.createElement(r.a,{title:"بلاگ | جدیدترین اخبار و مقالات درباره زندگی افراد موفق مانند ایلان ماسک، جف بزوس و",description:"اخبار، داستان ها و مقالات مرتبط به افراد موفق را در بلاگ بایوکست دنبال کنید",keywords:["بایوکست","پادکست زندگینامه","زندگینامه افراد موفق"]}),n.a.createElement(c.m,null),n.a.createElement(c.t,{className:"blog"},n.a.createElement(c.w,{className:"blog__header"},n.a.createElement("h1",{className:"blog__title"},"بایوکست بلاگ"),n.a.createElement("div",{className:"inner_wrapper"},n.a.createElement(c.i,{className:"blog__latest_post card--primary",standalone:!0,imageFluid:null===(t=latestpost)||void 0===t?void 0:t.mainImage.childImageSharp.fluid,imageAlt:null===(l=latestpost)||void 0===l?void 0:l.title,imagePosition:null===(o=latestpost)||void 0===o?void 0:o.imagePosition,tagComponent:n.a.createElement(c.y,null,"آخرین نوشته"),tag:"Link",link:"/blog/"+(null===(i=latestpost)||void 0===i?void 0:i.fields.slug),overlayColor:"--primary"},n.a.createElement("div",{className:"blog__latest_post__wrapper"},n.a.createElement("div",{className:"blog__latest_post__info"},null===(s=latestpost)||void 0===s?void 0:s.category.name," ∙"," ",Object(m.d)(new Date(null===(d=latestpost)||void 0===d?void 0:d.created_at))," ∙"," ",Object(m.e)(null===(_=latestpost)||void 0===_?void 0:_.fields.readingTime)," دقیقه"),n.a.createElement("div",{className:"blog__latest_post__title"},null===(p=latestpost)||void 0===p?void 0:p.title))),n.a.createElement(c.k,{className:"blog__latest_episode",item:b,standalone:!0,tagComponent:n.a.createElement(c.y,{color:"primary"},"جدیدترین اپیزود"),tag:"Link",link:"/episode/"+b.slug}))),n.a.createElement(c.w,{backgroundColor:"var(--lightgray)"},n.a.createElement("div",{className:"inner_wrapper"},n.a.createElement(g,{actionIcon:"list",actionTitle:"مشاهده همه نوشته‌ها",actionLink:"/blog/all"},"آخرین نوشته ها"),n.a.createElement(u,{posts:E,skip:1})))),n.a.createElement(c.l,null))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-e4b467ea787a869e640e.js.map