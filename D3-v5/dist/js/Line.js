!function(t){function e(e){for(var n,l,i=e[0],u=e[1],c=e[2],f=0,s=[];f<i.length;f++)l=i[f],a[l]&&s.push(a[l][0]),a[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(p&&p(e);s.length;)s.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={3:0},o=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/js/";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=u;o.push([5,0]),r()}({5:function(t,e,r){"use strict";r.r(e);var n=r(0),a=(r(1),r(2));!function(){for(var t=a.range(1,101,1),e=a.range(100).map(function(){var t=a.randomUniform(0,50)();return a.format("d")(t)}),r=[],o=0;o<t.length;o++)r.push({x:t[o],y:e[o]});var l=a.select("body").append("svg");l=n.a.init(l,960,540,30);var i=n.a.xScale(0,100,960),u=n.a.yScale(0,50,540),c=a.axisBottom(i),p=a.axisLeft(u);n.a.appendxAxis(l,540,c),n.a.appendyAxis(l,p);var f=a.line();f.x((t,e)=>i(t.x)),f.y((t,e)=>u(t.y)),l.append("path").attr("d",()=>f(r)).style("stroke","steelblue").style("fill","none");var s=l.append("g").attr("id","point").selectAll(".dot").data(t).enter().append("g").attr("class","dot");s.append("circle").data(r).attr("r","2").attr("transform",function(t,e){return"translate("+i(t.x)+","+u(t.y)+")"}),s.append("rect").data(r).attr("x",function(t,e){return i(t.x)-4.8}).attr("y","0").attr("height",()=>540).attr("width",()=>960/r.length).attr("fill-opacity","0.0").on("mouseover",function(t,e){var r="("+t.x+","+t.y+")";l.append("g").attr("id","text").attr("transform",function(){return"translate("+i(t.x)+","+u(t.y)+")"}),l.select("#text").append("text").text(()=>r).attr("fill","#000"),l.select("#point :nth-child("+(e+1)+") circle").attr("r","5")}).on("mouseout",function(t,e){a.select("#text").remove(),l.select("#point :nth-child("+(e+1)+") circle").attr("r","2")}),console.log(l.selectAll(".dot"))}()}});