(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),r=n.n(s),i=(n(14),n(9)),o=n(2),u=n.p+"static/media/Vector.03b78ada.svg",l=n(0);var d=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:u,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 \u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})},p=c.a.createContext();var _=function(e){var t=c.a.useContext(p),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),s="card-grid__remove ".concat(n?"":"card-grid__remove_disabled"),r="card-grid__like ".concat(a?"card-grid__like_target_active":"");return Object(l.jsxs)("li",{className:"card-grid__item",children:[Object(l.jsx)("img",{src:e.card.link,className:"card-grid__image",alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(l.jsxs)("div",{className:"card-grid__info",children:[Object(l.jsx)("h2",{className:"card-grid__title",children:e.card.name}),Object(l.jsxs)("div",{className:"card-grid__like-container",children:[Object(l.jsx)("button",{type:"button",className:r,onClick:function(){e.onCardLike(e.card)},title:"\u041e\u0446\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e","aria-label":"\u041e\u0446\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"}),Object(l.jsx)("span",{className:"card-grid__like-count",children:e.card.likes.length})]})]}),Object(l.jsx)("button",{type:"button",className:s,onClick:function(){e.onCardDelete(e.card)}})]})};var h=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,s=e.onCardClick,r=e.handleCardLike,i=e.handleCardDelete,o=e.cards,u=c.a.useContext(p);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__avatar-wrap",children:[Object(l.jsx)("img",{src:u.avatar,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__logo"}),Object(l.jsx)("button",{type:"button",className:"profile__avatar-edit-button",onClick:t})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__info-name",children:[Object(l.jsx)("h1",{className:"profile__title",children:u.name}),Object(l.jsx)("button",{type:"button",className:"profile__button profile__button_type_edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:n})]}),Object(l.jsx)("p",{className:"profile__job",children:u.about})]}),Object(l.jsx)("button",{type:"button",className:"profile__button profile__button_type_add",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",onClick:a})]}),Object(l.jsx)("section",{className:"cards-grid",children:Object(l.jsx)("ul",{className:"card-grid",children:o.map((function(e){return Object(l.jsx)(_,{card:e,onCardClick:s,onCardLike:r,onCardDelete:i},e._id)}))})})]})};var j=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021. \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0410\u043d\u0442\u0438\u043f\u0438\u043d"})})};var m=function(e){return Object(l.jsx)("div",{className:"popup popup_zoom-image ".concat(e.card?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__figure-container",children:[Object(l.jsxs)("figure",{className:"popup__figure",children:[Object(l.jsx)("img",{src:e.card?e.card.link:"#",className:"popup__image",alt:e.card?e.card.name:""}),Object(l.jsx)("figcaption",{className:"popup__caption",children:e.card?e.card.name:""})]}),Object(l.jsx)("button",{type:"button",className:"popup__esc-button popup__esc-button_zoom-image",onClick:e.onClose})]})})};var b=function(e){return Object(l.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""," "),children:Object(l.jsxs)("div",{className:"popup__case",children:[Object(l.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[Object(l.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(l.jsx)("button",{type:"submit",className:"popup__submit-button",children:e.buttonText})]}),Object(l.jsx)("button",{type:"button",className:"popup__esc-button",onClick:e.onClose})]})})};var f=function(e){var t=c.a.useState(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=c.a.useState(""),i=Object(o.a)(r,2),u=i[0],d=i[1],_=c.a.useContext(p);return c.a.useEffect((function(){s(_.name),d(_.about)}),[_]),Object(l.jsxs)(b,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:u})},children:[Object(l.jsx)("input",{name:"name",type:"text",className:"popup__item popup__item_edit_name",id:"sign-in-name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"20",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u044f-\\s]+$",required:!0,value:a||"",onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error ",id:"sign-in-name-error"}),Object(l.jsx)("input",{name:"about",type:"text",className:"popup__item popup__item_edit_job",id:"sign-in-job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",minLength:"2",maxLength:"100",required:!0,value:u||"",onChange:function(e){d(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error ",id:"sign-in-job-error"})]})};var O=function(e){var t=c.a.useRef("");return Object(l.jsxs)(b,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},children:[Object(l.jsx)("input",{type:"url",className:"popup__item popup__item_place_avatar",name:"avatar",id:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:t}),Object(l.jsx)("span",{className:"popup__input-error",id:"avatar-error"})]})};var x=function(e){var t=c.a.useState(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=c.a.useState(""),i=Object(o.a)(r,2),u=i[0],d=i[1];return Object(l.jsxs)(b,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u})},children:[Object(l.jsx)("input",{name:"nameCard",type:"text",className:"popup__item popup__item_place_name",id:"sign-in-placename",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430",minLength:"2",maxLength:"20",required:!0,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error",id:"sign-in-placename-error"}),Object(l.jsx)("input",{name:"link",type:"url",className:"popup__item popup__item_place_url",id:"sign-in-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",pattern:"https://.*",required:!0,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error",id:"sign-in-url-error"})]})},g=n(7),v=n(8),C=new(function(){function e(t){Object(g.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(v.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfoApi",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addUserCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch(this._url+"/cards/likes/".concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers}).then(this._checkResponse)}},{key:"delete",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"handleUserAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"68b64d50-5120-47e2-bc75-6d39addfe324","Content-Type":"application/json"}});var N=function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),r=Object(o.a)(s,2),u=r[0],_=r[1],b=c.a.useState(!1),g=Object(o.a)(b,2),v=g[0],N=g[1],k=c.a.useState(null),y=Object(o.a)(k,2),S=y[0],A=y[1],E=c.a.useState([]),L=Object(o.a)(E,2),U=L[0],P=L[1],T=c.a.useState({}),D=Object(o.a)(T,2),I=D[0],R=D[1];function q(){N(!1),a(!1),_(!1),A(null)}return c.a.useEffect((function(){C.getInitialCards().then((function(e){P(e)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){C.getUserInfo().then((function(e){R(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)(p.Provider,{value:I,children:Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(d,{}),Object(l.jsx)(h,{onEditAvatar:function(){N(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){_(!0)},onCardClick:function(e){A(e)},handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));C.changeLikeCardStatus(e._id,!t).then((function(t){P((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},handleCardDelete:function(e){C.delete(e._id).then((function(){P(U.filter((function(t){return t!==e})))})).catch((function(e){return console.log(e)}))},cards:U}),Object(l.jsx)(j,{}),Object(l.jsx)(f,{isOpen:n,onClose:q,onUpdateUser:function(e){C.setUserInfoApi(e).then((function(e){R(e),q()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(x,{isOpen:u,onClose:q,onAddPlace:function(e){C.addUserCard(e).then((function(e){P([e].concat(Object(i.a)(U))),q()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(m,{card:S,onClose:q}),Object(l.jsx)("div",{className:"popup popup_confirm-delete",children:Object(l.jsxs)("div",{className:"popup__case",children:[Object(l.jsxs)("form",{className:"popup__form",children:[Object(l.jsx)("h2",{className:"popup__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(l.jsx)("button",{type:"submit",className:"popup__submit-button",children:"\u0414\u0430"})]}),Object(l.jsx)("button",{className:"popup__esc-button popup__esc-button_confirm-delete",type:"button"})]})}),Object(l.jsx)(O,{isOpen:v,onClose:q,onUpdateAvatar:function(e){C.handleUserAvatar(e).then((function(e){R(e),q()})).catch((function(e){return console.log(e)}))}})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.c1febecc.chunk.js.map