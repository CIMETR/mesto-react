(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(5),i=a.n(c),r=(a(13),a(2)),o=(a(14),a.p+"static/media/Vector.03b78ada.svg"),l=a(0);var u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:o,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 \u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})},p=a(3),d=a(8),_=a(6),h=a(7),j=new(function(){function e(t){Object(_.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(h.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfoApi",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.userName,about:e.userAbout})}).then(this._checkResponse)}},{key:"addUserCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.nameCard,link:e.link})}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"delete",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"handleUserAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"68b64d50-5120-47e2-bc75-6d39addfe324","Content-Type":"application/json"}});var m=function(e){return Object(l.jsxs)("li",{className:"card-grid__item",children:[Object(l.jsx)("img",{src:e.link,className:"card-grid__image",alt:e.name,onClick:function(){e.onCardClick(e.card)}}),Object(l.jsxs)("div",{className:"card-grid__info",children:[Object(l.jsx)("h2",{className:"card-grid__title",children:e.name}),Object(l.jsxs)("div",{className:"card-grid__like-container",children:[Object(l.jsx)("button",{type:"button",className:"card-grid__like",title:"\u041e\u0446\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e","aria-label":"\u041e\u0446\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"}),Object(l.jsx)("span",{className:"card-grid__like-count",children:e.likes.length})]})]}),Object(l.jsx)("button",{type:"button",className:"card-grid__remove"})]})},b=["id"];var f=function(e){var t=e.onEditAvatar,a=e.onEditProfile,s=e.onAddPlace,c=e.onCardClick,i=n.a.useState("sadf"),o=Object(r.a)(i,2),u=o[0],_=o[1],h=n.a.useState(),f=Object(r.a)(h,2),O=f[0],x=f[1],g=n.a.useState(),N=Object(r.a)(g,2),v=N[0],k=N[1],y=n.a.useState([]),C=Object(r.a)(y,2),E=C[0],T=C[1];return n.a.useEffect((function(){j.getUserInfo().then((function(e){_(e.name),x(e.about),k(e.avatar)})).catch((function(e){return console.log(e)}))}),[]),n.a.useEffect((function(){j.getInitialCards().then((function(e){T(e.map((function(e){return{id:e._id,link:e.link,name:e.name,likes:e.likes}})))})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__avatar-wrap",children:[Object(l.jsx)("img",{src:v,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__logo"}),Object(l.jsx)("button",{type:"button",className:"profile__avatar-edit-button",onClick:t})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__info-name",children:[Object(l.jsx)("h1",{className:"profile__title",children:u}),Object(l.jsx)("button",{type:"button",className:"profile__button profile__button_type_edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:a})]}),Object(l.jsx)("p",{className:"profile__job",children:O})]}),Object(l.jsx)("button",{type:"button",className:"profile__button profile__button_type_add",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",onClick:s})]}),Object(l.jsx)("section",{className:"cards-grid",children:Object(l.jsx)("ul",{className:"card-grid",children:E.map((function(e){var t=e.id,a=Object(d.a)(e,b);return Object(l.jsx)(m,Object(p.a)(Object(p.a)({},a),{},{card:Object(p.a)({id:t},a),onCardClick:c}),t)}))})})]})};var O=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021. \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0410\u043d\u0442\u0438\u043f\u0438\u043d"})})};var x=function(e){return Object(l.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""," "),children:Object(l.jsxs)("div",{className:"popup__case",children:[Object(l.jsxs)("form",{className:"popup__form",name:e.name,noValidate:!0,children:[Object(l.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(l.jsx)("button",{type:"submit",className:"popup__submit-button",children:e.buttonText})]}),Object(l.jsx)("button",{type:"button",className:"popup__esc-button",onClick:e.onClose})]})})};var g=function(e){return Object(l.jsx)("div",{className:"popup popup_zoom-image ".concat(e.card?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__figure-container",children:[Object(l.jsxs)("figure",{className:"popup__figure",children:[Object(l.jsx)("img",{src:e.card?e.card.link:"#",className:"popup__image",alt:e.card?e.card.name:""}),Object(l.jsx)("figcaption",{className:"popup__caption",children:e.card?e.card.name:""})]}),Object(l.jsx)("button",{type:"button",className:"popup__esc-button popup__esc-button_zoom-image",onClick:e.onClose})]})})};var N=function(){var e=n.a.useState(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],c=n.a.useState(!1),i=Object(r.a)(c,2),o=i[0],p=i[1],d=n.a.useState(!1),_=Object(r.a)(d,2),h=_[0],j=_[1],m=n.a.useState(null),b=Object(r.a)(m,2),N=b[0],v=b[1];function k(){j(!1),s(!1),p(!1),v(null)}return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(u,{}),Object(l.jsx)(f,{onEditAvatar:function(){j(!0)},onEditProfile:function(){s(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e){v(e)}}),Object(l.jsx)(O,{}),Object(l.jsxs)(x,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:k,children:[Object(l.jsx)("input",{name:"userName",type:"text",className:"popup__item popup__item_edit_name",id:"sign-in-name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"20",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u044f-\\s]+$",required:!0}),Object(l.jsx)("span",{className:"popup__input-error ",id:"sign-in-name-error"}),Object(l.jsx)("input",{name:"userAbout",type:"text",className:"popup__item popup__item_edit_job",id:"sign-in-job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",minLength:"2",maxLength:"100",required:!0}),Object(l.jsx)("span",{className:"popup__input-error ",id:"sign-in-job-error"})]}),Object(l.jsxs)(x,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:o,onClose:k,children:[Object(l.jsx)("input",{name:"nameCard",type:"text",className:"popup__item popup__item_place_name",id:"sign-in-placename",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430",minLength:"2",maxLength:"20",required:!0}),Object(l.jsx)("span",{className:"popup__input-error",id:"sign-in-placename-error"}),Object(l.jsx)("input",{name:"link",type:"url",className:"popup__item popup__item_place_url",id:"sign-in-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",pattern:"https://.*",required:!0}),Object(l.jsx)("span",{className:"popup__input-error",id:"sign-in-url-error"})]}),Object(l.jsx)(g,{card:N,onClose:k}),Object(l.jsx)("div",{className:"popup popup_confirm-delete",children:Object(l.jsxs)("div",{className:"popup__case",children:[Object(l.jsxs)("form",{className:"popup__form",children:[Object(l.jsx)("h2",{className:"popup__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(l.jsx)("button",{type:"submit",className:"popup__submit-button",children:"\u0414\u0430"})]}),Object(l.jsx)("button",{className:"popup__esc-button popup__esc-button_confirm-delete",type:"button"})]})}),Object(l.jsxs)(x,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:h,onClose:k,children:[Object(l.jsx)("input",{type:"url",className:"popup__item popup__item_place_avatar",name:"avatar",id:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(l.jsx)("span",{className:"popup__input-error",id:"avatar-error"})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.8dd11c38.chunk.js.map