(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{yZlL:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return g}));t("9VmF"),t("f3/d"),t("0mN4");var r=t("q1tI"),l=t.n(r),n=t("9eSz"),c=t.n(n),i=t("Wbzz"),m=t("IujW"),s=t.n(m),o=t("uNfT"),d=t("L6NH"),u=t("vrFN"),g="2910550386";a.default=function(e){var a=Object(d.g)(e.data.relatedEpisodes.edges),t=Object(d.h)(e.data.relatedPosts.edges),n=e.data.strapiPost,m=(e.data.relatedEpisodes.edges,e.data.relatedPosts.edges,Object(r.useRef)());return Object(r.useEffect)((function(){var e=document.querySelectorAll(".article__content a"),a=document.querySelectorAll(".article__content img");e.forEach((function(e){e.classList.add("link")})),a.forEach((function(e){e.parentElement.style.textAlign="center";var a=e.parentElement;a.innerHTML="";var t=document.createElement("figure");t.classList.add("article__content__figure");var r=document.createElement("figcaption"),l=document.createTextNode(e.getAttribute("alt")?e.getAttribute("alt"):" ");r.appendChild(l),t.appendChild(e),t.appendChild(r),a.appendChild(t)}))}),[]),l.a.createElement(o.j,{className:"blog_post"},l.a.createElement(u.a,{title:n.title,image:{src:n.mainImage.childImageSharp.fixed.src,width:n.mainImage.childImageSharp.fixed.width,height:n.mainImage.childImageSharp.fixed.height},description:n.description,keywords:n.keyword.map((function(e){return e.title}))}),l.a.createElement(o.m,{className:"header--lightgray"}),l.a.createElement("main",{className:"article"},l.a.createElement("header",{ref:m,className:"article__header"},l.a.createElement("div",{className:"article__header__wrapper"},l.a.createElement("div",{className:"article__category"},n.category.name),l.a.createElement("h1",{className:"article__title"},n.title),l.a.createElement("section",{className:"article__info"},l.a.createElement("div",null,l.a.createElement(o.p,{name:"calendar"}),Object(d.d)(new Date(n.created_at))),l.a.createElement("div",null,l.a.createElement(o.p,{name:"feather"}),Object(d.b)(n.author.firstName,n.author.lastName)),l.a.createElement("div",null,l.a.createElement(o.p,{name:"clock"}),Object(d.e)(n.fields.readingTime)+"  دقیقه")),l.a.createElement("figure",{className:"article__figure"},l.a.createElement(c.a,{fluid:n.mainImage.childImageSharp.fluid,className:"article__image",alt:n.title})))),l.a.createElement("article",{className:"article__content"},l.a.createElement(s.a,{source:n.content,transformImageUri:function(e){return e.startsWith("http")?e:""+{}.IMAGE_BASE_URL+e}})),n.resources&&l.a.createElement("div",{className:"article__resources"},l.a.createElement("h4",null,n.resources.length>1?"منابع":"منبع"),l.a.createElement("ul",null,n.resources.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url,target:"_blank",className:"fancy_link english_font"},Object(d.f)(e.title)))})))),l.a.createElement(o.w,{backgroundColor:"var(--lightgray)"},l.a.createElement(o.n,{color:"gray",title:"مطالعه بیشتر...",icon:"file_plus"}),l.a.createElement("div",{className:"article__more"},l.a.createElement("div",{className:"article__more__box"},a.length>=0&&l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement(o.k,{className:"episode-card",tagComponent:l.a.createElement(o.y,{color:"black",children:"اپیزود مرتبط"}),tag:"Link",item:e,standalone:!0})}))),t.length>0&&t.slice(0,4-a.length).map((function(e,a){return l.a.createElement(o.u,{className:"post-card",tagComponent:l.a.createElement(o.y,{color:"white",children:"نوشته بلاگ"}),standalone:!0,tag:"Link",key:a,item:e,overlayColor:"--primary"})}))),t.length>4-a.length&&l.a.createElement("div",{className:"article__more__action"},l.a.createElement(i.Link,{className:"navigator",to:"/blog/tag/"+Object(d.c)(n.people.map((function(e){return e.shownName})).join(" و "))},l.a.createElement(o.h,{color:"primary-outlined"},"مشاهده همه نوشته‌های مرتبط با"," ",n.people.map((function(e){return e.shownName})).join(" و "))))))),l.a.createElement(o.l,null),l.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6059503997bb120c0c99.js.map