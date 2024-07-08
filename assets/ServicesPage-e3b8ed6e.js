import{d as F,a as C,H as k,h as $,g as l,v as N,x as j,i as L,A as B,o as t,b as c,e as i,t as b,F as u,j as p,m as v,f as y,l as x,p as w,S as z,k as _,q as G,n as M,c as O,B as T,C as U,T as q,G as D}from"./index-c0c8fa2e.js";import{_ as V}from"./ServicesItem-d6e58e8f.js";import{_ as H}from"./parameters-icon-29b1bfab.js";import{_ as Q}from"./Content-9659fb43.js";const P=F("Services",{state:()=>({services:null,categories:null,selectedCategory:null}),actions:{async getServices(s){if(s)try{const e=await C.get(`${k}?category_id=${s}`,$);if(e.status===200||e.data){const a=e.data.results;this.services=a}}catch(e){console.error("Ошибка в файле Services(getServices)",e)}else try{const e=await C.get(`${k}`,$);if(e.status===200||e.data){const a=e.data.results;this.services=a}}catch(e){console.error("Ошибка в файле Services(getServices)",e)}},async getCategories(){const s=await C.get(`${k}categories/`,$);this.categories=s.data.results},selectCategory(s){this.selectedCategory=s}}});const R={key:0},I=["id"],J={class:"services__cosmetology-title"},K={class:"services__cosmetology__wrapper"},W={key:1,"data-aos":"fade-down",class:"services__wrapper"},X={class:"services__wrapper-title"},Y={__name:"ServicesCosmetology",props:["item"],setup(s){const e=s,a=P(),m=l([]),g=l(!0),r=h=>{const S=a.selectedCategory;return S===null||S===h},d=l(!1),o=window.matchMedia("(min-width: 710px)"),n=()=>{d.value=o.matches};N(()=>{n(),o.addEventListener("change",n)}),j(()=>{o.removeEventListener("change",n)});const E=l({breakpoints:{360:{slidesPerView:1,spaceBetween:16},680:{slidesPerView:2}}});return L(async()=>{B.refresh();try{await a.getServices(e.item.id),g.value=!1,m.value=a.services}catch(h){console.error("Ошибка при загрузке услуг: ",h)}}),(h,S)=>d.value?(t(),c("div",R,[s.item&&r(s.item.id)?(t(),c("div",{key:0,"data-aos":"fade-down",id:`service-${s.item.id}`,class:"services__cosmetology"},[i("h2",J,b(s.item.title),1),i("div",K,[(t(!0),c(u,null,p(s.item.services,(f,A)=>(t(),v(V,{item:f,key:A},null,8,["item"]))),128))])],8,I)):y("",!0)])):s.item&&r(s.item.id)?(t(),c("div",W,[i("h2",X,b(s.item.title),1),s.item.services&&s.item.services.length?(t(),v(w(G),{key:s.item.id,loop:s.item.services.length>4,breakpoints:E.value.breakpoints,class:"services__wrapper-slider"},{default:x(()=>[(t(!0),c(u,null,p(s.item.services,f=>(t(),v(w(z),{key:f.id,class:"services__wrapper-slider-slide"},{default:x(()=>[_(V,{item:f},null,8,["item"])]),_:2},1024))),128))]),_:1},8,["loop","breakpoints"])):y("",!0)])):y("",!0)}},Z={"data-aos":"fade-down",class:"services__parameters"},ee={class:"services__parameters-wrapper"},se=i("div",{class:"services__parameters-title"},[i("img",{src:H,alt:"иконка параметров"}),i("span",null,"подбор параметров")],-1),te={class:"services__parameters__body"},ae=i("span",{class:"services__parameters__body-title"},"категория",-1),re={class:"services__parameters__body__btns"},ie=["onClick"],ce={__name:"ServicesParameters",setup(s){const e=P(),a=l([]);(async()=>{await e.getCategories(),e.categories.forEach(r=>{a.value.push({title:r.title,id:r.id,active:!1})})})();const g=r=>{r.active?e.selectedCategory=null:e.selectedCategory=r.id,r.active=!r.active};return L(()=>{B.refresh(),e.getServices()}),(r,d)=>(t(),c("div",Z,[i("div",ee,[se,i("div",te,[ae,i("div",re,[(t(!0),c(u,null,p(a.value,(o,n)=>(t(),c("button",{key:n,class:M({active:w(e).selectedCategory==o.id}),onClick:E=>g(o)},b(o.title),11,ie))),128))])])])]))}},oe="/timestet/assets/content-services-72f21529.jpg",ne={class:"services"},ue={__name:"ServicesPage",setup(s){const e=l(!1),a=P(),m=O(()=>a.categories);return L(async()=>{B.refresh(),document.body.classList.add("no-scroll");try{await a.getCategories()}finally{e.value=!0,document.body.classList.remove("no-scroll")}}),T(()=>{e.value===!1&&document.body.classList.remove("no-scroll")}),(g,r)=>{const d=U("Preloader");return t(),c(u,null,[_(q,{name:"preloader"},{default:x(()=>[e.value?y("",!0):(t(),v(d,{key:0}))]),_:1}),i("div",ne,[_(Q,{title:"Услуги",height:"260%",img:w(oe)},null,8,["img"]),_(ce),(t(!0),c(u,null,p(m.value,(o,n)=>(t(),v(Y,{key:n,item:o},null,8,["item"]))),128)),_(D)])],64)}}};export{ue as default};
