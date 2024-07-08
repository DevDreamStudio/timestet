import{C,r as D,o as d,b as f,e,y,w as b,t as I,f as v,m as R,l as $,k as o,c6 as O,g as u,Q as V,c as x,R as L,p as k,V as S,I as M,F as U,Z as N,c2 as A,W as F,i as W,A as z,B as T,T as j,c5 as E,c7 as G,G as Q}from"./index-c0c8fa2e.js";const Z={key:0,class:"serviceItem__modal__bg"},H={class:"serviceItem__modal__completed-img",alt:""},J={class:"serviceItem__modal__completed-title error"},K={class:"serviceItem__modal__completed-text"},X={key:0,class:"serviceItem__modal__completed-text",style:{"font-size":"12px"}},Y={style:{display:"flex","justify-content":"center",gap:"10px"}},ee=e("button",{class:"serviceItem__modal__completed-btn first"}," Написать тех поддержке ",-1),te=e("button",{class:"serviceItem__modal__completed-btn"}," Вернуться на главную ",-1),se={__name:"OrderModal",props:["isOpen","successRequest"],setup(n){return(l,s)=>{const a=C("router-link"),c=D("lazy");return n.isOpen?(d(),f("div",Z,[e("div",{class:"serviceItem__modal",onClick:s[1]||(s[1]=y(()=>{},["stop"]))},[e("div",{class:"serviceItem__modal__completed",onClick:s[0]||(s[0]=y(()=>{},["stop"]))},[b(e("img",H,null,512),[[c,n.successRequest?"src/assets/images/check-contained.svg":"src/assets/images/errornetwork.png"]]),e("h3",J,I(n.successRequest?"Поздравляем!":"Ошибка"),1),e("p",K,I(n.successRequest?"Ваш заказ успешно оформлен":"Ошибка. Свяжитесь с администратором"),1),n.successRequest?(d(),f("p",X," Если возникли сложности вы можете обратиться в тех поддержку ")):v("",!0),e("div",Y,[n.successRequest?(d(),R(a,{key:0,to:"/contacts"},{default:$(()=>[ee]),_:1})):v("",!0),o(a,{to:"/"},{default:$(()=>[te]),_:1})])])])])):v("",!0)}}},ae={class:"main__cart-data"},oe=e("h2",{class:"main__cart-data-title"},"оформление заказа",-1),ne={class:"main__cart-data-form-wrapper"},ce=e("h3",{class:"main__cart-data-form-title"},"Заполните данные",-1),re=N('<div class="main__cart-data-form-info"><span class="main__cart-data-form-info-subtitle">ВАЖНО! </span><span class="main__cart-data-form-info-desc">На нашем сайте вы можете приобрести товары только на самовызов и забрать их в клинике по адресу:</span><div class="main__cart-data-form-info-address"><a href="https://2gis.ru/kemerovo/firm/704215723349322?m=86.137079%2C55.351773%2F16">г. Кемерово, ул. Терешковой 18</a><a href="tel:+79043762512">+7 (904) 376-25-12</a><span>Работаем ежедневно: 9:00-21:00</span></div><span class="main__cart-data-form-info-tip">На нашем сайте нет доставки, надеемся на ваше понимание </span></div>',1),le={for:"cartDataCheckBox",class:"main__cart-data-form-checkbox"},ie=e("button",{type:"submit",class:"main__cart-data-form-btn"}," оформить заказ ",-1),ue={__name:"CartData",setup(n){const l=O(),s=u(""),a=u(""),c=u(!1),m=u(!1),p=u(!0),g=t=>t==null||t===""?!0:/^[^\d!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/u.test(t),h={nameUser:{lettersOnly:V.withMessage("Некорректное имя",g)}},P=x(()=>{const t=s.value;return t&&(t.startsWith("+7")||t.startsWith("7"))?"+7 (###) ###-##-##":t&&t.startsWith("8")?"8 (###) ###-##-##":"+7 (###) ###-##-##"}),_=L(h,{nameUser:a});(()=>{const t=l.getContactsFromlocal();t&&(s.value=t.phone,a.value=t.name)})();const w=async()=>{_.value.$touch(),_.value.$invalid?p.value=!1:(l.postProduct(s.value,a.value),p.value=!0),m.value=!0,s.value="",a.value="",c.value=!1};return(t,r)=>{const q=C("Input"),B=D("mask");return d(),f(U,null,[e("div",ae,[oe,e("form",{onSubmit:r[3]||(r[3]=y(i=>w(),["prevent"])),class:"main__cart-data-form"},[e("div",ne,[ce,b(o(q,{required:!0,label:"Ваш номер телефона",name:"phone",placeholder:"+998",type:"text",value:s.value,"onUpdate:value":r[0]||(r[0]=i=>s.value=i)},null,8,["value"]),[[B,P.value]]),o(q,{subtitle:"вы можете указать ФИО, того кто будет забирать заказ, но так же вам нужно указать его номер телефона",required:!0,label:"Ваше имя",name:"name",placeholder:"Ваше имя",type:"text",value:k(_).nameUser.$model,"onUpdate:value":r[1]||(r[1]=i=>k(_).nameUser.$model=i),error:k(_).nameUser.$errors},null,8,["value","error"]),re,e("label",le,[b(e("input",{required:"",name:"cartDataCheckBox",id:"cartDataCheckBox",type:"checkbox","onUpdate:modelValue":r[2]||(r[2]=i=>c.value=i)},null,512),[[S,c.value]]),M(" продолжая, вы подтверждаете обработку персональных данных ")]),ie])],32)]),o(se,{isOpen:m.value,successRequest:p.value},null,8,["isOpen","successRequest"])],64)}}},de={class:"main"},pe={__name:"CartDataPage",setup(n){const l=u(!1),s=A(),a=x(()=>s.products),c=F(),m=x(()=>c.actionList);return W(async()=>{z.refresh(),document.body.classList.add("no-scroll");try{await Promise.all([s.getProducts({limit:10}),c.getActions()])}finally{l.value=!0,document.body.classList.remove("no-scroll")}}),T(()=>{l.value===!1&&document.body.classList.remove("no-scroll")}),(p,g)=>{const h=C("Preloader");return d(),f(U,null,[o(j,{name:"preloader"},{default:$(()=>[l.value?v("",!0):(d(),R(h,{key:0}))]),_:1}),e("div",de,[o(ue),o(E,{discountsContent:m.value},null,8,["discountsContent"]),o(G,{title:"вам понравится",productData:a.value},null,8,["productData"]),o(Q)])],64)}}};export{pe as default};
