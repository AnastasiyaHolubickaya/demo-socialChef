(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[4],{447:function(e,a,t){e.exports={chat_container:"chat_chat_container__1J-9K",chat_form:"chat_chat_form__1zCED",chat_mess:"chat_chat_mess__2c_Yi",block_message:"chat_block_message__1it4C",avatar_style:"chat_avatar_style__14WuQ"}},449:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(52),s=t(63),l=t(443),m=t(447),o=t.n(m),i=t(441),u=t(62),_=t(151),f=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx\n"),h=function(){return c.a.createElement("div",{className:o.a.chat_container},c.a.createElement(E,null),c.a.createElement(d,null))},E=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){f.addEventListener("message",(function(e){var a=JSON.parse(e.data);l((function(e){return[].concat(Object(r.a)(e),Object(r.a)(a))}))}))}),[]),c.a.createElement("div",{className:o.a.block_message},t.map((function(e,a){return c.a.createElement(b,{key:a,msg:e})})))},b=function(e){var a=e.msg;return c.a.createElement("div",{className:o.a.chat_mess},""!==a.photo?c.a.createElement("img",{src:a.photo,alt:""}):c.a.createElement(i.a,{className:o.a.avatar_style,alt:"avatar",icon:c.a.createElement(l.a,null)}),c.a.createElement("span",null,a.userName),c.a.createElement("p",null,a.message),c.a.createElement("hr",null))},d=function(){var e=Object(n.useState)("pending"),a=Object(s.a)(e,2);a[0],a[1];Object(n.useEffect)((function(){f.addEventListener("open",(function(){}))}),[]);return c.a.createElement("div",{className:o.a.chat_form},c.a.createElement(u.c,{enableReinitialize:!0,initialValues:{message:""},onSubmit:function(e,a){f.send(e.message),a.resetForm()}},(function(e){return c.a.createElement(u.b,{className:o.a.form__formSearch},c.a.createElement(_.a,{control:"textarea",label:"Message",name:"message"}),c.a.createElement("button",{className:o.a.form__button,type:"submit",disabled:f.readyState!==WebSocket.OPEN},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))})))};a.default=function(){return c.a.createElement("div",{style:{width:"400px"}},c.a.createElement(h,null))}}}]);
//# sourceMappingURL=4.2b2cffd0.chunk.js.map