(this["webpackJsonpmern-app"]=this["webpackJsonpmern-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),o=n.n(r),a=n(18),s=n.n(a),i=n(14),u=(n(25),n(1)),p=(n(26),n(8)),j=n.n(p),h=n(11),l=n(9),b=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],p=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u("Wait..."),e.next=3,fetch("https://mern-api-robson.herokuapp.com/",{mode:"cors",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000/"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}));case 3:(n=e.sent).message&&u(n.message);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Create a page!"}),Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)}}),Object(c.jsx)("button",{type:"button",onClick:function(){return p({name:n})},children:"Submit!"}),i&&Object(c.jsx)("p",{children:i})]})},f=function(e){var t=e.match.params.name,n=Object(r.useState)(null),o=Object(l.a)(n,2),a=o[0],s=o[1],i=Object(r.useState)(null),u=Object(l.a)(i,2),p=u[0],b=u[1];console.log(t);var f=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mern-api-robson.herokuapp.com/".concat(t),{mode:"cors",method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000/"}}).then((function(e){return e.json()})).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}));case 2:n=e.sent,s(n.name),n.message&&b(n.message);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a||f(t)})),a?Object(c.jsx)("p",{children:"This page belongs to ".concat(a)}):p?Object(c.jsx)("p",{children:p}):Object(c.jsx)("p",{children:"Loading..."})};var m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(u.a,{path:"/:name",component:f})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)(m,{})})}),document.getElementById("root")),O()}},[[33,1,2]]]);
//# sourceMappingURL=main.b9a9136d.chunk.js.map