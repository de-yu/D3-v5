!function(e){function r(r){for(var n,u,i=r[0],f=r[1],l=r[2],c=0,s=[];c<i.length;c++)u=i[c],o[u]&&s.push(o[u][0]),o[u]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(p&&p(r);s.length;)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var f=t[i];0!==o[f]&&(n=!1)}n&&(a.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={5:0},a=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/js/";var i=window.webpackJsonp=window.webpackJsonp||[],f=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var p=f;a.push([7,0]),t()}({7:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t(2);!function(){for(var e=o.range(0,101,1),r=o.range(101).map(function(){var e=o.randomUniform(0,50)();return o.format("d")(e)}),t=[],a=0;a<e.length;a++)t.push({x:e[a],y:r[a]});var u=o.select("body").append("svg");u=n.a.init(u,960,540,30);var i=n.a.xScale(0,100,960),f=n.a.yScale(0,50,540),l=o.axisBottom(i),p=o.axisLeft(f);n.a.appendxAxis(u,540,l),n.a.appendyAxis(u,p);var c=o.area().x(function(e){return i(e.x)}).y1(function(e){return f(e.y)}).y0(540);u.append("path").attr("fill","steelblue").attr("d",()=>c(t))}()}});