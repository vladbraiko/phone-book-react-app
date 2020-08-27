(this["webpackJsonpcontacts-book-react-app"]=this["webpackJsonpcontacts-book-react-app"]||[]).push([[1],{16:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return b})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return f})),n.d(e,"j",(function(){return d}));var c=n(1),r=Object(c.b)("phoneBook/fetchContactRequest"),a=Object(c.b)("phoneBook/fetchContactSuccess"),o=Object(c.b)("phoneBook/fetchContactError"),u=Object(c.b)("phoneBook/addContactRequest"),i=Object(c.b)("phoneBook/addContactSuccess"),b=Object(c.b)("phoneBook/addContactError"),s=Object(c.b)("phoneBook/deleteContactRequest"),l=Object(c.b)("phoneBook/deleteContactSuccess"),f=Object(c.b)("phoneBook/deleteContactError"),d=Object(c.b)("phoneBook/filterContacts")},2:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return b})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return O}));var c=n(1),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),o=Object(c.b)("auth/registerError"),u=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),b=Object(c.b)("auth/loginError"),s=Object(c.b)("auth/logoutRequest"),l=Object(c.b)("auth/logoutSuccess"),f=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getCurrentUserRequest"),j=Object(c.b)("auth/getCurrentUserSuccess"),O=Object(c.b)("auth/getCurrentUserError")},22:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l}));var c=n(17),r=n.n(c),a=n(2);r.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var o=function(t){r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(){r.a.defaults.headers.common.Authorization=""},i=function(t){return function(e){e(Object(a.k)()),r.a.post("/users/signup",t).then((function(t){var n=t.data;return e(Object(a.l)(n),o(n.token))})).catch((function(t){return e(Object(a.j)(t.message))}))}},b=function(t){return function(e){e(Object(a.e)()),r.a.post("/users/login",t).then((function(t){var n=t.data;return e(Object(a.f)(n),o(n.token))})).catch((function(t){return e(Object(a.d)(t.message))}))}},s=function(){return function(t){t(a.h),r.a.post("/users/logout").then((function(){return t(Object(a.i)())}),u()).catch((function(e){return t(Object(a.g)(e.message))}))}},l=function(){return function(t,e){var n=e().auth.token;n&&(o(n),t(Object(a.b)()),r.a.get("/users/current").then((function(e){var n=e.data;return t(Object(a.c)(n))})).catch((function(e){return t(Object(a.a)(e.message))})))}}},29:function(t,e,n){t.exports={navigation:"Navigation_navigation__RQrHh",navigationItem:"Navigation_navigationItem__3_vOi"}},32:function(t,e,n){t.exports={container:"UserMenu_container__23cPO",button:"UserMenu_button__H-49V"}},52:function(t,e,n){t.exports={header:"AppBar_header__1Yk8v"}},53:function(t,e,n){t.exports={container:"App_container__1MQN3"}},55:function(t,e,n){t.exports=n(87)},87:function(t,e,n){"use strict";n.r(e);var c,r,a,o,u,i,b=n(0),s=n.n(b),l=n(21),f=n.n(l),d=n(7),j=n(15),O=n(49),h=n(23),p=n(1),m=n(3),g=n(6),E=n(16),k=Object(p.c)([],(c={},Object(m.a)(c,E.i,(function(t,e){return e.payload})),Object(m.a)(c,E.c,(function(t,e){var n=e.payload;return[].concat(Object(h.a)(t),[n])})),Object(m.a)(c,E.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),v=Object(p.c)("",Object(m.a)({},E.j,(function(t,e){return e.payload}))),y=function(t,e){return e.payload},_=Object(p.c)(null,(r={},Object(m.a)(r,E.g,y),Object(m.a)(r,E.a,y),Object(m.a)(r,E.d,y),r)),C=Object(g.c)({items:k,filter:v,error:_}),A=n(2),B={name:null,email:null},N=Object(p.c)(B,(a={},Object(m.a)(a,A.l,(function(t,e){return e.payload.user})),Object(m.a)(a,A.f,(function(t,e){return e.payload.user})),Object(m.a)(a,A.i,(function(){return B})),Object(m.a)(a,A.c,(function(t,e){return e.payload})),a)),R=Object(p.c)(null,(o={},Object(m.a)(o,A.l,(function(t,e){return e.payload.token})),Object(m.a)(o,A.f,(function(t,e){return e.payload.token})),Object(m.a)(o,A.i,(function(){return null})),o)),S=function(t,e){return e.payload},x=Object(p.c)(null,(u={},Object(m.a)(u,A.j,S),Object(m.a)(u,A.d,S),Object(m.a)(u,A.g,S),Object(m.a)(u,A.a,S),u)),U=Object(p.c)(!1,(i={},Object(m.a)(i,A.l,(function(){return!0})),Object(m.a)(i,A.f,(function(){return!0})),Object(m.a)(i,A.c,(function(){return!0})),Object(m.a)(i,A.j,(function(){return!1})),Object(m.a)(i,A.d,(function(){return!1})),Object(m.a)(i,A.a,(function(){return!1})),Object(m.a)(i,A.i,(function(){return!1})),i)),q=Object(g.c)({user:N,token:R,error:x,isAuthenticated:U}),z=n(50),T=n.n(z),M=n(14),I=Object(h.a)(Object(p.d)({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})),w={key:"auth",storage:T.a,whitelist:["token"]},L=Object(p.a)({reducer:{auth:Object(M.g)(w,q),contacts:C},middleware:I}),P={persistor:Object(M.h)(L),store:L},H=n(33),G=n(34),J=n(36),Q=n(35),D=n(4),V=function(t){return t.auth.isAuthenticated},W=function(t){return t.auth.user.name},Y=n(29),F=n.n(Y),K=Object(d.b)((function(t){return{isAuthenticated:V(t)}}))((function(t){var e=t.isAuthenticated;return s.a.createElement("nav",null,e?s.a.createElement(j.b,{to:"/contacts",exact:!0,className:F.a.navigationItem},"My contacts"):s.a.createElement(j.b,{to:"/",exact:!0,className:F.a.navigationItem},"Home"))})),X=n(22),Z=n(32),$=n.n(Z),tt={onLogout:X.c},et=Object(d.b)((function(t){return{name:W(t)}}),tt)((function(t){var e=t.name,n=t.onLogout;return s.a.createElement("div",{className:$.a.container},s.a.createElement("span",null,"Welcome, ",e),s.a.createElement("button",{type:"button",onClick:n,className:$.a.button},"Logout"))})),nt=n(52),ct=n.n(nt),rt=Object(d.b)((function(t){return{isAuthenticated:V(t)}}),null)((function(t){var e=t.isAuthenticated;return s.a.createElement("header",{className:ct.a.header},s.a.createElement(K,null),e&&s.a.createElement(et,null))})),at=n(24),ot=Object(d.b)((function(t){return{isAuthenticated:V(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(at.a)(t,["component","isAuthenticated","redirectTo"]);return s.a.createElement(D.b,Object.assign({},r,{render:function(t){return n?s.a.createElement(e,t):s.a.createElement(D.a,{to:c})}}))})),ut=Object(d.b)((function(t){return{isAuthenticated:V(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(at.a)(t,["component","isAuthenticated","redirectTo"]);return s.a.createElement(D.b,Object.assign({},r,{render:function(t){return n&&r.restricted?s.a.createElement(D.a,{to:c}):s.a.createElement(e,t)}}))})),it=n(53),bt=n.n(it),st=Object(b.lazy)((function(){return n.e(5).then(n.bind(null,133))})),lt=Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,129))})),ft=Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,130))})),dt=Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,132))})),jt=function(t){Object(J.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(H.a)(this,n),e.apply(this,arguments)}return Object(G.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return s.a.createElement("div",{className:bt.a.container},s.a.createElement(rt,null),s.a.createElement(b.Suspense,{fallback:s.a.createElement("p",null,"...")},s.a.createElement(D.d,null,s.a.createElement(D.b,{exact:!0,path:"/",component:st}),s.a.createElement(ut,{path:"/register",component:lt,restricted:!0,redirectTo:"/contacts"}),s.a.createElement(ut,{path:"/login",component:ft,restricted:!0,redirectTo:"/contacts"}),s.a.createElement(ot,{path:"/contacts",component:dt,redirectTo:"/login"}))))}}]),n}(b.Component),Ot={onGetCurrentUser:X.a},ht=Object(d.b)(null,Ot)(jt);f.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d.a,{store:P.store},s.a.createElement(O.a,{loading:null,persistor:P.persistor},s.a.createElement(j.a,null,s.a.createElement(ht,null))))),document.getElementById("root"))}},[[55,2,3]]]);
//# sourceMappingURL=main.f01528d6.chunk.js.map