import{g as n,c as I,Q as R,R as U,U as q,C as k,r as L,o as b,b as g,e as o,y as w,w as h,k as r,p,V as N,I as W}from"./index-c0c8fa2e.js";const A=o("path",{d:"M15 1L1 15M15 15L1 1","stroke-width":"2","stroke-linecap":"round"},null,-1),E=[A],P={class:"booking__modal-wrapper"},Q=o("h3",{class:"booking__modal-wrapper-title"},[W(" Оставьте свои "),o("span",null,"данные")],-1),T={class:"booking__modal-form-inner"},j={class:"booking__modal-form-checkbox"},z=o("a",null,"продолжая, вы подтверждаете обработку персональных данных",-1),F=o("button",{type:"submit",class:"booking__modal-form-btn"},"ОТПРАВИТЬ",-1),J={__name:"BookingModal",emits:["closeModalRewiev"],setup(G,{emit:M}){const d=n(!1),c=n(null);function f(){d.value=!0,document.body.classList.add("no-scroll")}function y(){d.value=!1,document.body.classList.remove("no-scroll")}const x=M,m=()=>{x("closeModalRewiev")},t=n(""),v=n(""),i=n(new Date(Date.now()).toISOString().slice(0,10)),a=n(!1),V=s=>s==null||s===""?!0:/^[^\d!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/u.test(s),$=I(()=>t.value.startsWith("+7")||t.value.startsWith("7")?"+7 (###) ###-##-##":t.value.startsWith("8")?"8 (###) ###-##-##":"+7 (###) ###-##-##"),C={full_name:{lettersOnly:R.withMessage("Некорректное имя",V)}},u=U(C,{full_name:v}),O=q(),S=async s=>{u.value.$touch(),u.value.$invalid?(c.value=!1,f()):(s={phone_number:t.value,full_name:v.value,book_date:i.value},O.postApoint(s),c.value=!0,f()),t.value="",v.value="",i.value=new Date(Date.now()).toISOString().slice(0,10),a.value=!1};return(s,e)=>{const _=k("Input"),D=k("StatusModal"),B=L("mask");return b(),g("div",{class:"booking__modal",onClick:w(m,["self"])},[(b(),g("svg",{onClick:m,class:"reviews__modal-close",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},E)),o("div",P,[Q,o("form",{onSubmit:e[5]||(e[5]=w(l=>S(),["prevent"])),class:"booking__modal-form"},[o("div",T,[h(r(_,{required:!0,type:"text",name:"booking-phone",label:"Ваш номер телефона",placeholder:"Введите ваш номер",class:"booking__modal-form-input",value:t.value,"onUpdate:value":e[0]||(e[0]=l=>t.value=l)},null,8,["value"]),[[B,$.value]]),r(_,{required:!0,type:"date",name:"booking-date",label:"выберите желаемую дату",class:"booking__modal-form-input",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=l=>i.value=l)},null,8,["modelValue"])]),r(_,{required:!0,type:"text",name:"booking-name",label:"Ваше имя",class:"booking__modal-form-input",placeholder:"Ваше имя",value:p(u).full_name.$model,"onUpdate:value":e[2]||(e[2]=l=>p(u).full_name.$model=l),error:p(u).full_name.$errors},null,8,["value","error"]),o("div",j,[h(o("input",{required:"","onUpdate:modelValue":e[3]||(e[3]=l=>a.value=l),onClick:e[4]||(e[4]=l=>a.value=!a.value),type:"checkbox"},null,512),[[N,a.value]]),z]),F,r(D,{onCloseModalRewiev:m,success:c.value,onClose:y,isOpen:d.value},null,8,["success","isOpen"])],32)])])}}};export{J as _};
