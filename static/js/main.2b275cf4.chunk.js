(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{22:function(e,t,n){"use strict";(function(e){var c=n(9),i=n(2),r=n(0),o=n(5);t.a=function(){var t=Object(r.useState)(""),n=Object(c.a)(t,2),a=n[0],l=n[1],s=Object(i.b)(),h=Object(i.c)((function(e){return e.list}));return{item:a,handleKeyDown:function(t){var n=t.target.value;(l(n),13===t.charCode)&&(h.some((function(e){return e===n}))?e.alert("The same task is not avalible!"):n.length<3?e.alert("Not Enough letters"):(s(Object(o.c)(a)),l("")))}}}}).call(this,n(36))},29:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c,i,r,o,a,l,s,h,u,d,b,f,p,j,m,O,g=n(0),x=n.n(g),w=n(13),v=n.n(w),k=(n(29),n(2)),y=n(18),C=(n(34),n(3)),S=n(4),E=S.a.header(c||(c=Object(C.a)(["\n  width: 100vw;\n  background: ",";\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-evenly;\n  @media(min-width: 824px) {\n    background: ",";;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 45vh;\n  }\n"])),(function(e){return e.themeSelect?"url('./todo-app-main/images/bg-mobile-light.jpg')":"url('./todo-app-main/images/bg-mobile-dark.jpg')"}),(function(e){return e.themeSelect?"url('./todo-app-main/images/bg-desktop-light.jpg')":"url('./todo-app-main/images/bg-desktop-dark.jpg')"})),T=S.a.div(i||(i=Object(C.a)(["\n  width: 85vw;\n  padding: 0 7.5vw;\n  display: flex;\n  justify-content: space-between;\n  @media(min-width: 824px) {\n    width: 40vw;\n    justify-content: space-between;\n  }\n"]))),A=S.a.h1(r||(r=Object(C.a)(["\n  color: white;\n  letter-spacing: 10px;\n  font-weight: 700;\n  font-size: 20px;\n  @media(min-width: 824px) {\n    font-size: 3vw;\n    letter-spacing: 20px;\n  }\n"]))),M=S.a.img(o||(o=Object(C.a)(["\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  @media(min-width: 824px) {\n    height: 3vw;\n    transition: ease-in-out 0.5s;\n    :hover {\n    transform: rotate(90deg);\n    }\n    width: 3vw;\n  }\n"]))),D=S.a.input(a||(a=Object(C.a)(["\n  width: 80vw;\n  padding: 0 2.5vw;\n  height: 50px;\n  background-color: ",";\n  border-radius: 5px;\n  ::placeholder {\n    color: hsl(236, 9%, 61%);\n    padding-left: 40px;\n  }\n  @media(min-width: 824px) {\n    width: 35vw;\n    height: 10vh;\n    font-size: 2.5vh;\n    ::placeholder {\n    font-size: 2.5vh;\n  }\n  }\n"])),(function(e){return e.themeSelect?"white":"hsl(235, 24%, 19%)"})),z=n(22),H=n(5),F=function(){var e=Object(k.b)();return{changeAppTheme:function(t){e(Object(H.b)(t))},theme:Object(k.c)((function(e){return e.darkMode}))}},I=n(1),K=function(){var e=Object(z.a)(),t=e.item,n=e.handleKeyDown,c=F(),i=c.changeAppTheme,r=c.theme;return Object(I.jsxs)(E,{themeSelect:r,children:[Object(I.jsxs)(T,{children:[Object(I.jsx)(A,{children:"TODO"}),Object(I.jsx)(M,{onClick:function(){return i(!r)},src:r?"./todo-app-main/images/icon-moon.svg":"./todo-app-main/images/icon-sun.svg",alt:"moon-icon"})]}),Object(I.jsx)(D,{onChange:function(e){return n(e)},onKeyPress:function(e){return n(e)},value:t,type:"text",placeholder:"Create a new Todo...",themeSelect:r})]})},L=n(9),R=S.a.section(l||(l=Object(C.a)(["\n  background-color: ",";\n  width: 85vw;\n  height: 50vh;\n  margin: auto;\n  border-radius: 5px;\n  transform: translateY(-30px);\n  margin-bottom: -30px;\n  box-shadow: ",";\n  overflow-y: scroll;\n  @media(min-width: 824px) {\n    transform: translateY(-7vh);\n    margin-bottom: -7vh;\n    width: 40vw;\n    ::-webkit-scrollbar-track {\n      background: transparent;\n    }\n    ::-webkit-scrollbar {\n      background-color: transparent;\n      width: 8px;\n      border-radius: 20px;\n    }\n    ::-webkit-scrollbar-thumb {\n      background: ",";\n      border-radius: 20px;\n    }\n  }\n"])),(function(e){return e.themeSelect?"white":"hsl(235, 24%, 19%)"}),(function(e){return e.themeSelect?"1px 5px 10px hsla(236, 9%, 61%, 0.5)":null}),(function(e){return e.themeSelect?"lightgray":"hsl(234, 11%, 52%)"})),V=S.a.ul(s||(s=Object(C.a)(["\n  height: 50px;\n  width: 100%;\n  @media(min-width: 824px) {\n    height: 10vh;\n  }\n"]))),Y=S.a.div(h||(h=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ",";\n  box-shadow: ",";\n  width: 80vw;\n  padding: 0 2.5vw 1vh 2.5vw;\n  height: 50px;\n  margin: auto;\n  transform: translateY(-50px);\n  margin-bottom: -50px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  @media(min-width: 824px) {\n    transform: translateY(-10vh);\n    margin-bottom: -10vh;\n    width: 35vw;\n    height: 10vh;\n  }\n"])),(function(e){return e.themeSelect?"white":"hsl(235, 24%, 19%)"}),(function(e){return e.themeSelect?"1px 5px 10px hsla(236, 9%, 61%, 0.5)":null})),N=S.a.p(u||(u=Object(C.a)(["\n  font-size: 14px;\n  color: ",";\n  font-weight: ",";\n  cursor: ",";\n  @media(min-width: 824px) {\n    font-size: 1.7vh;\n    :hover {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.select?"hsl(220, 98%, 61%)":"hsl(236, 9%, 61%)"}),(function(e){return e.select?"700":null}),(function(e){return e.point?"pointer":null}),(function(e){return e.select?"hsl(220, 98%, 61%)":"hsl(233, 14%, 35%)"})),P=S.a.section(d||(d=Object(C.a)(["\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  justify-content: center;\n  @media(min-width: 824px) {\n    gap: 2.5vh;\n  }\n"]))),W=S.a.div(b||(b=Object(C.a)(["\n  width:90%;\n  padding: 0 5%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ",";\n  justify-content: space-between;\n  :hover Img{\n      opacity: 1;\n    }\n"])),(function(e){return e.themeSelect?"hsl(236, 33%, 92%)":"hsl(235, 19%, 35%)"})),B=S.a.li(f||(f=Object(C.a)(["\n  color: ",";\n  list-style: none;\n  text-decoration: ",";\n  font-weight: 400;\n  width: 100%;\n  @media(min-width: 824px) {\n    width: 80%;\n    font-size: 2.3vh;\n  }\n"])),(function(e){return e.themeSelect?null:"hsl(234, 39%, 85%)"}),(function(e){return e.check?"line-through":"none"})),G=S.a.div(p||(p=Object(C.a)(["\n  width: 10px;\n  height: 10px;\n  padding: 5px;\n  cursor: pointer;\n  border: ",";\n  border-radius: 100px;\n  background: ",";\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media(min-width: 824px) {\n    width: 3vh;\n    height: 3vh;\n  }\n"])),(function(e){return e.check?"1px solid white":e.themeSelect?"1px solid hsl(233, 11%, 84%)":"1px solid hsl(235, 19%, 35%)"}),(function(e){return e.check?"linear-gradient( hsl(192, 100%, 67%), hsl(280, 87%, 65%))":null})),J=S.a.img(j||(j=Object(C.a)(["\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  @media(min-width: 824px) {\n    width: 3vh;\n    opacity: 0;\n    transition: ease-in-out 0.5s;\n    height: 3vh;\n  }\n"]))),Q=function(e,t){var n=Object(k.c)((function(e){return e.list})),c=Object(k.c)((function(e){return e.check})),i=Object(k.c)((function(e){return e.filtered})),r=Object(k.c)((function(e){return e.filter})),o=Object(k.b)();return{removeItem:function(){var a=n.filter((function(e,n){return t!==n})),l=c.filter((function(t){return t!==e})),s=i.filter((function(t){return t!==e}));o(Object(H.f)(a)),o(Object(H.a)(l)),o(Object(H.e)(s,r))},clearCompleted:function(){var e=n.filter((function(e){return!c.includes(e)})),t=i.filter((function(e){return!c.includes(e)}));o(Object(H.f)(e)),o(Object(H.e)(t,r)),o(Object(H.a)([]))}}},q=function(e){var t=Object(g.useState)(!1),n=Object(L.a)(t,2),c=n[0],i=n[1],r=Object(k.b)(),o=Object(k.c)((function(e){return e.check}));Object(g.useEffect)((function(){o.some((function(t){return t===e}))&&i(!0)}),[]);return{setCheckedDispatch:function(){if(i(!c),o.some((function(t){return t===e}))){var t=o.filter((function(t){return t!==e}));r(Object(H.a)(t))}else r(Object(H.d)(e))},checked:c}},U=function(e){var t=e.item,n=e.index,c=q(t),i=c.checked,r=c.setCheckedDispatch,o=Q(t,n).removeItem,a=F().theme;return Object(I.jsxs)(W,{themeSelect:a,children:[Object(I.jsx)(G,{onClick:function(){return r()},check:i,themeSelect:a,children:Object(I.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"9",children:Object(I.jsx)("path",{fill:"none",stroke:a?"white":"hsl(235, 24%, 19%)",strokeWidth:"2",d:"M1 4.304L3.696 7l6-6"})})}),Object(I.jsx)(B,{themeSelect:a,check:i,children:t}),Object(I.jsx)(J,{onClick:function(){return o()},src:"./todo-app-main/images/icon-cross.svg",alt:"close icon"})]})},X=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.list})),n=Object(k.c)((function(e){return e.check})),c=Object(k.c)((function(e){return e.filter})),i=function(){e(Object(H.e)(t,"all"))},r=function(){var c=t.filter((function(e){return!n.includes(e)}));e(Object(H.e)(c,"active"))},o=function(){e(Object(H.e)(n,"completed"))};return Object(g.useEffect)((function(){"completed"===c?o():"active"===c?r():i()}),[n,t]),{filtered:c,showAllTask:i,showActiveTask:r,ShowCompletedTask:o,showTaskLeftQuantity:function(){return t.filter((function(e){return!n.includes(e)})).length}}},Z=function(){var e=Object(g.useState)([]),t=Object(L.a)(e,2),n=t[0],c=t[1],i=Object(k.c)((function(e){return e.filtered})),r=X(),o=r.filtered,a=r.showAllTask,l=r.showActiveTask,s=r.ShowCompletedTask,h=F().theme,u=X().showTaskLeftQuantity,d=Q().clearCompleted,b=window.innerWidth>=824;return Object(g.useEffect)((function(){c(i)}),[i]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(R,{themeSelect:h,children:Object(I.jsxs)(V,{children:[n&&n.map((function(e,t){return Object(I.jsx)(U,{index:t,item:e},e)})),Object(I.jsx)("li",{style:b?{height:"10vh"}:{height:"50px"}})]})}),Object(I.jsxs)(Y,{themeSelect:h,children:[Object(I.jsx)(N,{children:"".concat(u()," items left")}),b&&Object(I.jsxs)(P,{themeSelect:h,children:[Object(I.jsx)(N,{point:!0,select:"all"===o,onClick:function(){return a()},children:"All"}),Object(I.jsx)(N,{point:!0,select:"active"===o,onClick:function(){return l()},children:"Active"}),Object(I.jsx)(N,{point:!0,select:"completed"===o,onClick:function(){return s()},children:"Completed"})]}),Object(I.jsx)(N,{point:!0,onClick:function(){return d()},children:"Clear Completed"})]})]})},$=S.a.section(m||(m=Object(C.a)(["\n  background-color: ",";\n  width: 85vw;\n  height: 50px;\n  margin: 40px auto 0 auto;\n  border-radius: 5px;\n  box-shadow: ",";\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  justify-content: center;\n  @media(min-width: 824px) {\n    display: none;\n  }\n"])),(function(e){return e.themeSelect?"white":"hsl(235, 24%, 19%)"}),(function(e){return e.themeSelect?"1px 5px 10px hsla(236, 9%, 61%, 0.5)":null})),_=S.a.p(O||(O=Object(C.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.select?"hsl(220, 98%, 61%)":"hsl(236, 9%, 61%)"}));var ee,te=function(){var e=X(),t=e.filtered,n=e.showAllTask,c=e.showActiveTask,i=e.ShowCompletedTask,r=F().theme;return Object(I.jsxs)($,{themeSelect:r,children:[Object(I.jsx)(_,{select:"all"===t,onClick:function(){return n()},children:"All"}),Object(I.jsx)(_,{select:"active"===t,onClick:function(){return c()},children:"Active"}),Object(I.jsx)(_,{select:"completed"===t,onClick:function(){return i()},children:"Completed"})]})},ne=S.a.main(ee||(ee=Object(C.a)(["\n  background-color: ",";\n  overflow-y: none;\n  height: 100vh;\n"])),(function(e){return e.themeSelect?"hsl(0, 0%, 98%)":"hsl(235, 21%, 11%)"}));var ce=function(){var e=F().theme;return Object(I.jsxs)(ne,{themeSelect:e,children:[Object(I.jsx)(K,{}),Object(I.jsx)(Z,{}),Object(I.jsx)(te,{})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))},re=n(7),oe=n(23),ae=n(16),le=n(24),se=n.n(le),he=n(11),ue=n(6),de={list:[],check:[],filtered:[],filter:"all",darkMode:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE":return Object(ue.a)(Object(ue.a)({},e),{},{list:[].concat(Object(he.a)(e.list),[t.list])});case"REMOVE":return Object(ue.a)(Object(ue.a)({},e),{},{list:Object(he.a)(t.list)});case"CHECKED":return Object(ue.a)(Object(ue.a)({},e),{},{check:[].concat(Object(he.a)(e.check),[t.list])});case"REMOVE-CHECK":return Object(ue.a)(Object(ue.a)({},e),{},{check:Object(he.a)(t.list)});case"SET-FILTERED":return Object(ue.a)(Object(ue.a)({},e),{},{filtered:Object(he.a)(t.list),filter:t.filter});case"SET-THEME":return Object(ue.a)(Object(ue.a)({},e),{},{darkMode:t.theme});default:return e}},fe={key:"root",storage:se.a,blacklist:["filter"]},pe=Object(ae.a)(fe,be),je=Object(re.createStore)(pe,Object(oe.composeWithDevTools)(Object(re.applyMiddleware)())),me=Object(ae.b)(je);v.a.render(Object(I.jsx)(k.a,{store:je,children:Object(I.jsx)(y.a,{loading:null,persistor:me,children:Object(I.jsx)(x.a.StrictMode,{children:Object(I.jsx)(ce,{})})})}),document.getElementById("root")),ie()},5:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return l}));var c=function(e){return{type:"CHANGE",list:e}},i=function(e){return{type:"REMOVE-CHECK",list:e}},r=function(e){return{type:"REMOVE",list:e}},o=function(e){return{type:"CHECKED",list:e}},a=function(e,t){return{type:"SET-FILTERED",list:e,filter:t}},l=function(e){return{type:"SET-THEME",theme:e}}}},[[40,1,2]]]);
//# sourceMappingURL=main.2b275cf4.chunk.js.map