(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4u0u":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return p})),t.d(a,"Heading",(function(){return g}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("tUrg"),t("9VmF"),t("f3/d"),t("0mN4");var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),s=t("IujW"),i=t.n(s),c=t("vrFN"),o=t("uNfT"),m=t("L6NH");var p="1827571909",_=function(e){var a=e.link;return r.a.createElement("a",{className:"external_link",href:a.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.p,{name:"external_link"}),r.a.createElement("span",null,a.title))},d=function(e){var a=e.sponsor;return r.a.createElement("a",{href:a.link,className:"episode_page__sponsor navigator",target:"_blank",rel:"sponsored"},r.a.createElement("header",null,r.a.createElement("div",{className:"episode_page__sponsor__title"},a.title),a.svgLogo?r.a.createElement("div",{className:"episode_page__sponsor__logo",dangerouslySetInnerHTML:{__html:a.svgLogo}}):r.a.createElement("div",{className:"episode_page__sponsor__name"},a.name)),a.description&&r.a.createElement("p",{className:"episode_page__sponsor__description"},a.description))},g=r.a.forwardRef((function(e,a){var t=e.title,n=e.icon,l=e.color,s=void 0===l?"primary":l,i=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["title","icon","color"]);return r.a.createElement("header",Object.assign({},i,{ref:a,className:"episode_page__heading",style:{color:"var(--"+s+")"}}),r.a.createElement("div",{className:"episode_page__heading__wrapper"},r.a.createElement(o.p,{name:n}),r.a.createElement("h4",null,t)))}));a.default=function(e){var a=e.data,t=(e.pageContext,Object(n.useState)(!1)),s=t[0],p=t[1],u=Object(n.useRef)(),E=a.strapiEpisode,h=a.strapiEpisode.people[0],f=a.relatedPosts.edges,v=E.components.filter((function(e){var a;return"externalLink"==(null==e||null===(a=e.componentType)||void 0===a?void 0:a.typeName)})),N=E.components.filter((function(e){var a;return"sponsor"==(null==e||null===(a=e.componentType)||void 0===a?void 0:a.typeName)}));return r.a.createElement(o.j,null,r.a.createElement(c.a,{title:"پادکست زندگینامه "+E.title+"، داستان و حواشی زندگی او",image:{src:E.squareImage.childImageSharp.fixed.src,width:E.squareImage.childImageSharp.fixed.width,height:E.squareImage.childImageSharp.fixed.height},description:E.description,keywords:E.keyword.map((function(e){return e.title}))}),r.a.createElement(o.m,{pushed:!0,className:"header__episode_page"}),r.a.createElement("section",{className:"episode_page__header"},r.a.createElement("div",{className:"episode_page__header__info"},r.a.createElement("div",{className:"episode_page__number"},Object(m.e)(E.episodeNumber)),r.a.createElement("h1",{className:"episode_page__title"},E.title),r.a.createElement("h2",{className:"episode_page__subtitle"},E.personTagline)),r.a.createElement("svg",{className:"episode_page__main_image",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 687.192 650.407"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"a"},r.a.createElement("path",{d:"M196.536,51.445c39.985-68.594,139.026-68.594,179.011,0L557.812,364.12c40.3,69.128-9.532,155.942-89.505,155.942H103.777c-79.974,0-129.8-86.814-89.505-155.942Z",transform:"matrix(-0.966, -0.259, 0.259, -0.966, 660.036, 801.234)",fill:"#63a1a3"})),r.a.createElement("pattern",{id:"b",preserveAspectRatio:"none",width:"100%",height:"100%"},r.a.createElement("image",{preserveAspectRatio:"xMidYMid slice",width:"100%",href:E.squareImage.childImageSharp.fluid.src}))),r.a.createElement("g",{transform:"translate(-107.446 -150.827)",clipPath:"url(#a)"},r.a.createElement("rect",{width:"572.708",height:"809.929",transform:"translate(204.464 70.934)",fill:"url(#b)"})))),r.a.createElement(o.w,{className:"episode_page__listen rounded-3"},r.a.createElement("div",{className:"episode_page__wrapper"},r.a.createElement(g,{title:"بشنویم",icon:"headphones"}),r.a.createElement("p",{className:"episode_page__listen__description"},E.description),v&&r.a.createElement("div",{className:"episode_page__links"},v.map((function(e){return r.a.createElement(_,{key:e.url,link:e})}))),r.a.createElement("div",{className:"episode_page__player",dangerouslySetInnerHTML:{__html:E.podbeanEmbedCode}}),r.a.createElement("div",{className:"episode_page__apps"},r.a.createElement("div",{className:"episode_page__apps__title"},"از کجا بشنویم؟"),r.a.createElement("div",{className:"episode_page__apps__apps"},E.spotifyLink&&r.a.createElement("a",{href:E.spotifyLink,className:"navigator",target:"_blank"},r.a.createElement(o.g,null)),E.applePodcastLink&&r.a.createElement("a",{href:E.applePodcastLink,className:"navigator",target:"_blank"},r.a.createElement(o.c,null)),E.castboxLink&&r.a.createElement("a",{href:E.castboxLink,className:"navigator",target:"_blank"},r.a.createElement(o.d,null)),E.googlePodcastLink&&r.a.createElement("a",{href:E.googlePodcastLink,className:"navigator",target:"_blank"},r.a.createElement(o.e,null)),E.overcastLink&&r.a.createElement("a",{href:E.overcastLink,className:"navigator",target:"_blank"},r.a.createElement(o.f,null)))),N&&N.map((function(e){return r.a.createElement(d,{key:e.name,sponsor:e})})))),r.a.createElement(o.w,{className:"episode_page__read",padding:{right:"0",left:"0"},ref:u},r.a.createElement("div",{className:"episode_page__wrapper"+(s?" fixed-heading":"")},r.a.createElement(g,{title:"بخوانیم",icon:"book_open",color:"secondary"})),E.text&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("article",{className:"article__content article__content--close"+(s?" article__content--open":"")},r.a.createElement(i.a,{source:E.fields.convertedText,escapeHtml:!1,transformImageUri:function(e){return e.startsWith("http")?e:""+{}.IMAGE_BASE_URL+e}})),!s&&r.a.createElement("div",{className:"article__show_more"},r.a.createElement(o.h,{color:"primary",onClick:function(){p((function(e){return!e})),u.current.scrollIntoView()}},"مطالعه بیشتر"))))),f.length>0&&r.a.createElement(o.w,{class:"top-rounded-3",backgroundColor:"var(--lightgray)"},r.a.createElement(g,{title:"نوشته‌های مرتبط",icon:"file_text",color:"gray"}),r.a.createElement("div",{className:"episode_page__posts__links"},f.slice(0,5).map((function(e){var a=e.node;return r.a.createElement(l.Link,{key:a.title,className:"link episode_page__posts__link",to:"/blog/"+Object(m.c)(a.title)},r.a.createElement("span",null,a.title)," ✽"," ",r.a.createElement("span",null,Object(m.d)(new Date(a.created_at))))})),f.length>0&&r.a.createElement(o.h,{className:"episode_page__posts__button",Tag:"Link",to:"/blog/tag/"+Object(m.c)(h.shownName)},"مشاهده همه نوشته‌های مرتبط با ",h.shownName))),r.a.createElement(o.l,null),r.a.createElement(o.b,{showMore:s,setShowLess:function(){p(!1),u.current.scrollIntoView()}}))}}}]);
//# sourceMappingURL=component---src-templates-episode-page-js-90461bebd988e87c016a.js.map