(this.webpackJsonpdash=this.webpackJsonpdash||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(6),r=a.n(s),i=(a(12),a(2)),d=(a(13),a(7)),l=a(1);function o(){return"dark"===("dark"===window.localStorage.getItem("colorMode")?"dark":"light")||(window.localStorage.setItem("colorMode","light"),!1)}var j=function(){var e=n.a.useState(o),t=Object(i.a)(e,2),a=t[0],c=t[1],s=n.a.useState(30),r=Object(i.a)(s,2),j=r[0],h=r[1],u=n.a.useState(90),b=Object(i.a)(u,2),O=b[0],m=(b[1],n.a.useState(new Date)),x=Object(i.a)(m,2),v=x[0],f=x[1];n.a.useEffect((function(){console.log("Color mode changed",a?"dark":"light"),window.localStorage.setItem("colorMode",a?"dark":"light")}),[a]),n.a.useEffect((function(){var e=setInterval((function(){f(new Date)}),1e3),t=setInterval((function(){fetch("/api/speed").then((function(e){e.json().then((function(e){h(e.speed)}))})).catch((function(e){}))}),1e3);return function(){clearInterval(e),clearInterval(t)}}));var g=a?" dark":" light";return document.body.style.backgroundColor=a?"#282c34":"white",document.body.style.transition="background-color 1s",Object(l.jsxs)("div",{className:"container"+g,children:[Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:"header-content",children:[Object(l.jsx)("h3",{className:"date",children:"27 Nov, 2021 Sat"}),Object(l.jsx)("h3",{className:"date",children:v.toLocaleTimeString()}),Object(l.jsx)(d.a,{onChange:c,isDarkMode:a,size:80})]})}),Object(l.jsx)("section",{className:"main",children:Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsxs)("div",{className:"data-container",children:[Object(l.jsx)("h3",{children:"Speed"}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("span",{className:"data-value",children:j})," km/hr"]})]}),Object(l.jsxs)("div",{className:"data-container",children:[Object(l.jsx)("h3",{children:"Battery"}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("span",{className:"data-value",children:O})," %"]})]}),Object(l.jsxs)("div",{className:"data-container",children:[Object(l.jsx)("h3",{children:"Distance"}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("span",{className:"data-value",children:"1942"})," km"]})]}),Object(l.jsxs)("div",{className:"data-container",children:[Object(l.jsx)("h3",{children:"Temperature"}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("span",{className:"data-value",children:"65"})," \u2103"]})]})]})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.10849271.chunk.js.map