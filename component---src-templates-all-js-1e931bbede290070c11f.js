(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{iSyC:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return g}));var l=t("q1tI"),n=t.n(l),r=t("Wbzz"),i=t("vrFN"),s=t("uNfT"),c=t("vx99"),o=t("L6NH"),m=function(e){var a=e.currentPage,t=e.numberOfPages;return n.a.createElement("div",{className:"pagination"},a+1<=t&&n.a.createElement(r.Link,{to:"/blog/all/"+(a+1),className:"pagination__icon navigator"},n.a.createElement(s.p,{name:"arrow_right"})),n.a.createElement("div",{className:"pagination__current"},"صفحه ",Object(o.e)(a)," از ",Object(o.e)(t)),a-1>0&&n.a.createElement(r.Link,{to:"/blog/all/"+(a-1),className:"pagination__icon navigator"},n.a.createElement(s.p,{name:"arrow_left"})))},g="3875677088";a.default=function(e){var a=e.data,t=e.pageContext,l=a.posts.edges;return n.a.createElement(s.j,null,n.a.createElement(i.a,{title:"همه نوشته ها",description:"نوشته های بلاگ بایوکست در یک جا"}),n.a.createElement(s.m,null),n.a.createElement(s.t,null,n.a.createElement(s.w,{className:"all_posts"},n.a.createElement("h1",{className:"all_posts__title"},"همه نوشته‌ها"),n.a.createElement("div",{className:"inner_wrapper"},n.a.createElement(c.BlogPosts,{posts:l}),n.a.createElement(m,{currentPage:t.currentPage,numberOfPages:t.numberOfPages})))),n.a.createElement(s.l,{beforeColor:"white"}))}},vx99:function(e,a,t){"use strict";t.r(a),t.d(a,"BlogPost",(function(){return g})),t.d(a,"BlogHeading",(function(){return _})),t.d(a,"BlogPosts",(function(){return d})),t.d(a,"query",(function(){return u}));t("f3/d");var l=t("q1tI"),n=t.n(l),r=t("9eSz"),i=t.n(r),s=t("Wbzz"),c=t("vrFN"),o=t("uNfT"),m=t("L6NH"),g=function(e){var a=e.post;return n.a.createElement(s.Link,{className:"navigator blog__post",to:"/blog/"+a.fields.slug},n.a.createElement("figure",{className:"blog__post__image"},n.a.createElement(i.a,{fluid:a.mainImage.childImageSharp.fluid,alt:a.title})),n.a.createElement("div",{className:"blog__post__info"},n.a.createElement("div",{className:"blog__post__details"},a.category.name," ∙ ",Object(m.d)(new Date(a.created_at))," ∙"," ",Object(m.e)(a.fields.readingTime)," دقیقه"),n.a.createElement("div",{className:"blog__post__title"},a.title),n.a.createElement("p",{className:"blog__post__description"},a.description.slice(0,250),"...")))},_=function(e){var a=e.children,t=e.actionTitle,l=e.actionLink,r=e.actionIcon;return n.a.createElement("header",{className:"blog__heading"},n.a.createElement("h3",{className:"blog__heading__title"},a),t&&n.a.createElement("div",{className:"blog__heading__action"},n.a.createElement(o.h,{Tag:"Link",to:l,iconName:r,color:"gray-outlined",size:"small"},t)))},d=function(e){var a=e.posts,t=e.skip,l=void 0===t?0:t;return n.a.createElement("div",{className:"blog__posts"},a.slice(l).map((function(e){var a=e.node;return n.a.createElement(g,{key:a.fields.slug,post:a})})))},u="1594762927";a.default=function(e){var a=e.data,t=a.allStrapiPost.edges,l=t[0].node,r=Object(m.g)(a.episode.edges)[0];a.categories.edges;return n.a.createElement(o.j,null,n.a.createElement(c.a,{title:"بلاگ | جدیدترین اخبار و مقالات درباره زندگی افراد موفق مانند ایلان ماسک، جف بزوس و",description:"اخبار، داستان ها و مقالات مرتبط به افراد موفق را در بلاگ بایوکست دنبال کنید",keywords:["بایوکست","پادکست زندگینامه","زندگینامه افراد موفق"]}),n.a.createElement(o.m,null),n.a.createElement(o.t,{className:"blog"},n.a.createElement(o.w,{className:"blog__header"},n.a.createElement("h1",{className:"blog__title"},"بایوکست بلاگ"),n.a.createElement("div",{className:"inner_wrapper"},n.a.createElement(o.i,{className:"blog__latest_post card--primary",standalone:!0,imageFluid:l.mainImage.childImageSharp.fluid,imageAlt:l.title,imagePosition:l.imagePosition,tagComponent:n.a.createElement(o.y,null,"آخرین نوشته"),tag:"Link",link:"/blog/"+l.fields.slug,overlayColor:"--primary"},n.a.createElement("div",{className:"blog__latest_post__wrapper"},n.a.createElement("div",{className:"blog__latest_post__info"},l.category.name," ∙"," ",Object(m.d)(new Date(l.created_at))," ∙"," ",Object(m.e)(l.fields.readingTime)," دقیقه"),n.a.createElement("div",{className:"blog__latest_post__title"},l.title))),n.a.createElement(o.k,{className:"blog__latest_episode",item:r,standalone:!0,tagComponent:n.a.createElement(o.y,{color:"primary"},"جدیدترین اپیزود"),tag:"Link",link:"/episode/"+r.slug}))),n.a.createElement(o.w,{backgroundColor:"var(--lightgray)"},n.a.createElement("div",{className:"inner_wrapper"},n.a.createElement(_,{actionIcon:"list",actionTitle:"مشاهده همه نوشته‌ها",actionLink:"/blog/all"},"آخرین نوشته ها"),n.a.createElement(d,{posts:t,skip:1})))),n.a.createElement(o.l,null))}}}]);
//# sourceMappingURL=component---src-templates-all-js-1e931bbede290070c11f.js.map