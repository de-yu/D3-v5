!function(t){function r(r){for(var n,l,u=r[0],i=r[1],s=r[2],c=0,p=[];c<u.length;c++)l=u[c],a[l]&&p.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);for(f&&f(r);p.length;)p.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,r=0;r<o.length;r++){for(var e=o[r],n=!0,u=1;u<e.length;u++){var i=e[u];0!==a[i]&&(n=!1)}n&&(o.splice(r--,1),t=l(l.s=e[0]))}return t}var n={},a={2:0},o=[];function l(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=n,l.d=function(t,r,e){l.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,r){if(1&r&&(t=l(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)l.d(e,n,function(r){return t[r]}.bind(null,n));return e},l.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(r,"a",r),r},l.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},l.p="/js/";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var f=i;o.push([5,0]),e()}({5:function(t,r,e){"use strict";e.r(r);var n=e(0),a={randomInt:(t,r,e)=>n.range(t).map(()=>{var t=n.randomUniform(r,e)();return n.format("d")(t)}),randomFloat:(t,r,e)=>n.range(t).map(()=>{var t=n.randomUniform(r,e)();return n.format(".2")(t)})},o=e(0);!function(){var t=a.randomFloat(100,0,1),r=a.randomFloat(100,0,1),e=a.randomInt(100,0,1),n=o.select("body").append("svg").attr("width",1020).attr("height",600).append("g");n.attr("transform","translate(30,30)");var l=o.scaleLinear().domain([0,1]).range([0,960]),u=o.scaleLinear().domain([0,1]).range([540,0]),i=o.axisBottom(l),s=o.axisLeft(u);n.selectAll(".dot").data(t).enter().append("g").attr("class","dot").attr("transform",function(t,e){return"translate("+l(t)+","+u(r[e])+")"}).append("circle").data(t).attr("r","5").attr("fill",function(t,r){return o.schemeCategory10[e[r]]}).on("mouseover",function(e,a){n.append("text").attr("id","t"+e.x+"-"+e.y+"-"+a).attr("x",40).attr("y",40).text("("+t[a]+" , "+r[a]+")")}).on("mouseout",function(t,r){o.select("#t"+t.x+"-"+t.y+"-"+r).remove()}),n.append("g").attr("class","x axis").attr("transform","translate(0,540)").call(i),n.append("g").attr("class","y axis").attr("transform","translate(0,0)").call(s)}()}});