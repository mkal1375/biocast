(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{vx99:function(e,a,t){"use strict";t.r(a),t.d(a,"BlogPost",(function(){return _})),t.d(a,"BlogHeading",(function(){return d})),t.d(a,"BlogPosts",(function(){return g}));var l=t("q1tI"),n=t.n(l),i=t("9eSz"),o=t.n(i),s=t("Wbzz"),r=t("vrFN"),c=t("uNfT"),m=t("L6NH"),_=function(e){var a,t=e.post;return n.a.createElement(s.Link,{className:"navigator blog__post",to:"/blog/"+t.fields.slug},n.a.createElement("figure",{className:"blog__post__image"},n.a.createElement(o.a,{fluid:null==t||null===(a=t.mainImage)||void 0===a?void 0:a.childImageSharp.fluid,alt:t.title})),n.a.createElement("div",{className:"blog__post__info"},n.a.createElement("div",{className:"blog__post__details"},t.category.name," ∙ ",Object(m.d)(new Date(t.created_at))," ∙"," ",Object(m.e)(t.fields.readingTime)," دقیقه"),n.a.createElement("div",{className:"blog__post__title"},t.title),n.a.createElement("p",{className:"blog__post__description"},t.description.slice(0,250),"...")))},d=function(e){var a=e.children,t=e.actionTitle,l=e.actionLink,i=e.actionIcon;return n.a.createElement("header",{className:"blog__heading"},n.a.createElement("h3",{className:"blog__heading__title"},a),t&&n.a.createElement("div",{className:"blog__heading__action"},n.a.createElement(c.h,{Tag:"Link",to:l,iconName:i,color:"gray-outlined",size:"small"},t)))},g=function(e){var a=e.posts,t=e.skip,l=void 0===t?0:t;return n.a.createElement("div",{className:"blog__posts"},a.slice(l).map((function(e){var a=e.node;return n.a.createElement(_,{key:a.fields.slug,post:a})})))};a.default=function(e){var a=e.data,t=a.allStrapiPost.edges,l=t[0].node,i=Object(m.g)(a.episode.edges)[0];a.categories.edges;return n.a.createElement(c.j,null,n.a.createElement(r.a,{title:"بلاگ | جدیدترین اخبار و مقالات درباره زندگی افراد موفق مانند ایلان ماسک، جف بزوس و",description:"اخبار، داستان ها و مقالات مرتبط به افراد موفق را در بلاگ بایوکست دنبال کنید",keywords:["بایوکست","پادکست زندگینامه","زندگینامه افراد موفق"]}),n.a.createElement(c.m,null),n.a.createElement(c.t,{className:"blog"},n.a.createElement(c.w,{className:"blog__header"},n.a.createElement("h1",{className:"blog__title"},"بایوکست بلاگ"),n.a.createElement("div",{className:"inner_wrapper"},n.a.createElement(c.i,{className:"blog__latest_post card--primary",standalone:!0,imageFluid:l.mainImage.childImageSharp.fluid,imageAlt:l.title,imagePosition:l.imagePosition,tagComponent:n.a.createElement(c.y,null,"آخرین نوشته"),tag:"Link",link:"/blog/"+l.fields.slug,overlayColor:"--primary"},n.a.createElement("div",{className:"blog__latest_post__wrapper"},n.a.createElement("div",{className:"blog__latest_post__info"},l.category.name," ∙"," ",Object(m.d)(new Date(l.created_at))," ∙"," ",Object(m.e)(l.fields.readingTime)," دقیقه"),n.a.createElement("div",{className:"blog__latest_post__title"},l.title))),n.a.createElement(c.k,{className:"blog__latest_episode",item:i,standalone:!0,tagComponent:n.a.createElement(c.y,{color:"primary"},"جدیدترین اپیزود"),tag:"Link",link:"/episode/"+i.slug}))),n.a.createElement(c.w,{backgroundColor:"var(--lightgray)"},n.a.createElement("div",{className:"inner_wrapper"},n.a.createElement(d,{actionIcon:"list",actionTitle:"مشاهده همه نوشته‌ها",actionLink:"/blog/all"},"آخرین نوشته ها"),n.a.createElement(g,{posts:t,skip:1})))),n.a.createElement(c.l,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-c6c84515ec5be1831887.js.map