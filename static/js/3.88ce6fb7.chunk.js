(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[3],{444:function(e,t,a){e.exports={dialogs:"Message_dialogs__2baLX",searchUsers:"Message_searchUsers__9t9jj",title:"Message_title__-9VyK",search:"Message_search__gkp-3",inputSearch:"Message_inputSearch__3V8kI",buttonSearch:"Message_buttonSearch__2KJW5",counterUsers:"Message_counterUsers__rp0hV",text:"Message_text__2kiW0",numbers:"Message_numbers__4YsQx",viewingInfo:"Message_viewingInfo___2Tny"}},445:function(e,t,a){e.exports={divButtonSend:"AddMessage_divButtonSend__30J92",block:"AddMessage_block__2zH6u"}},446:function(e,t,a){e.exports={dialog:"Users_dialog__3AOii",active:"Users_active__1d9P7"}},448:function(e,t,a){"use strict";a.r(t);var n=a(111),r=a(112),s=a(115),o=a(113),i=a(116),l=a(0),c=a.n(l),u=a(9),d=a(42),p=a(17),m=function(e){return{isAuth:e.auth.isAuth}};var g=a(444),h=a.n(g),f=a(445),_=a.n(f),b=a(446),v=a.n(b),E=a(13),M=a(36),k=a.n(M),j=function(e){var t=e.massUsers.map((function(e){return c.a.createElement("div",{key:e.id,className:v.a.dialog},c.a.createElement(E.c,{to:"/profile/"+e.id}," ",c.a.createElement("img",{src:e.photos.small||k.a,alt:""})),c.a.createElement("b",null,e.name," "),c.a.createElement("span",null,e.mess||e.status))}));return c.a.createElement("div",null,t," ")},O=a(149),A=a(203),C=a(27),y=a(38),S=a(35),I=Object(C.a)(100),D=Object(A.a)({form:"message"})((function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement(O.a,{name:"message",placeholder:"message",component:y.c,validate:[C.b,I]})),c.a.createElement("div",{className:_.a.divButtonSend}," ",c.a.createElement(S.a,{value:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})))})),U=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).onSubmit=function(e){a.props.addMessActionCreator(e.message,a.props.login,a.props.profile.photos.small,a.props.profile.userId)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getProfileThunkCreator(this.props.userId)}},{key:"render",value:function(){return c.a.createElement("div",{className:_.a.block},c.a.createElement(j,{massUsers:this.props.dataDialogs}),c.a.createElement("h3",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),c.a.createElement(D,{onSubmit:this.onSubmit}))}}]),t}(c.a.Component),x=function(){return c.a.createElement("div",{className:h.a.counterUsers},c.a.createElement("span",{className:h.a.text},"\u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 online"),c.a.createElement("span",{className:h.a.numbers},"5"))},N=function(e){var t=e.dataDialogs,a=e.login,n=e.userId,r=e.profile,s=e.addMessActionCreator,o=e.getProfileThunkCreator;return c.a.createElement("div",{className:h.a.dialogs},c.a.createElement("h1",null,"\u0427\u0430\u0442"),c.a.createElement(x,null),c.a.createElement(U,{dataDialogs:t,login:a,userId:n,profile:r,addMessActionCreator:s,getProfileThunkCreator:o}))},P=a(14),T=a(174),w=a(57),J=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(N,{dataDialogs:this.props.dataDialogs,login:this.props.login,userId:this.props.userId,profile:this.props.profile,addMessActionCreator:this.props.addMessActionCreator,getProfileThunkCreator:this.props.getProfileThunkCreator})}}]),t}(c.a.Component),B=T.a.addMessActionCreator;t.default=Object(P.d)(Object(u.b)((function(e){return{dataDialogs:e.dialogs.dataDialogs,login:e.auth.login,userId:e.auth.userId,profile:e.profile.profile}}),{addMessActionCreator:B,getProfileThunkCreator:w.c}),(function(e){return Object(u.b)(m)((function(t){var a=t.isAuth,n=Object(d.a)(t,["isAuth"]);return a?c.a.createElement(e,n):c.a.createElement(p.a,{to:"/login"})}))}))(J)}}]);
//# sourceMappingURL=3.88ce6fb7.chunk.js.map