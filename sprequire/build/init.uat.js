/*
 RequireJS 2.1.22 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ha){function L(b){return"[object Function]"===R.call(b)}function M(b){return"[object Array]"===R.call(b)}function x(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function Y(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));--d);}}function w(b,c){return la.call(b,c)}function g(b,c){return w(b,c)&&b[c]}function E(b,c){for(var d in b)if(w(b,d)&&c(b[d],d))break}function Z(b,c,d,k){c&&E(c,function(c,g){if(d||!w(b,g))!k||"object"!==typeof c||!c||M(c)||L(c)||c instanceof
RegExp?b[g]=c:(b[g]||(b[g]={}),Z(b[g],c,d,k))});return b}function y(b,c){return function(){return c.apply(b,arguments)}}function ia(b){throw b;}function ja(b){if(!b)return b;var c=ha;x(b.split("."),function(b){c=c[b]});return c}function G(b,c,d,g){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=g;d&&(c.originalError=d);return c}function ma(b){function c(a,n,b){var f,l,c,d,h,k,e,A;n=n&&n.split("/");var q=m.map,p=q&&q["*"];if(a){a=a.split("/");l=a.length-1;m.nodeIdCompat&&
V.test(a[l])&&(a[l]=a[l].replace(V,""));"."===a[0].charAt(0)&&n&&(l=n.slice(0,n.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)d=l[c],"."===d?(l.splice(c,1),--c):".."===d&&0!==c&&(1!==c||".."!==l[2])&&".."!==l[c-1]&&0<c&&(l.splice(c-1,2),c-=2);a=a.join("/")}if(b&&q&&(n||p)){l=a.split("/");c=l.length;a:for(;0<c;--c){h=l.slice(0,c).join("/");if(n)for(d=n.length;0<d;--d)if(b=g(q,n.slice(0,d).join("/")))if(b=g(b,h)){f=b;k=c;break a}!e&&p&&g(p,h)&&(e=g(p,h),A=c)}!f&&e&&(f=e,k=A);f&&(l.splice(0,k,
f),a=l.join("/"))}return(f=g(m.pkgs,a))?f:a}function d(a){F&&x(document.getElementsByTagName("script"),function(n){if(n.getAttribute("data-requiremodule")===a&&n.getAttribute("data-requirecontext")===h.contextName)return n.parentNode.removeChild(n),!0})}function p(a){var n=g(m.paths,a);if(n&&M(n)&&1<n.length)return n.shift(),h.require.undef(a),h.makeRequire(null,{skipMap:!0})([a]),!0}function e(a){var n,b=a?a.indexOf("!"):-1;-1<b&&(n=a.substring(0,b),a=a.substring(b+1,a.length));return[n,a]}function q(a,
n,b,f){var l,d,z=null,k=n?n.name:null,m=a,q=!0,A="";a||(q=!1,a="_@r"+(R+=1));a=e(a);z=a[0];a=a[1];z&&(z=c(z,k,f),d=g(r,z));a&&(z?A=d&&d.normalize?d.normalize(a,function(a){return c(a,k,f)}):-1===a.indexOf("!")?c(a,k,f):a:(A=c(a,k,f),a=e(A),z=a[0],A=a[1],b=!0,l=h.nameToUrl(A)));b=!z||d||b?"":"_unnormalized"+(U+=1);return{prefix:z,name:A,parentMap:n,unnormalized:!!b,url:l,originalName:m,isDefine:q,id:(z?z+"!"+A:A)+b}}function u(a){var b=a.id,c=g(t,b);c||(c=t[b]=new h.Module(a));return c}function v(a,
b,c){var f=a.id,l=g(t,f);if(!w(r,f)||l&&!l.defineEmitComplete)if(l=u(a),l.error&&"error"===b)c(l.error);else l.on(b,c);else"defined"===b&&c(r[f])}function B(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(x(c,function(b){if(b=g(t,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)k.onError(a)}function C(){W.length&&(x(W,function(a){var b=a[0];"string"===typeof b&&(h.defQueueMap[b]=!0);H.push(a)}),W=[])}function D(a){delete t[a];delete aa[a]}function K(a,b,c){var f=a.map.id;a.error?a.emit("error",
a.error):(b[f]=!0,x(a.depMaps,function(f,d){var h=f.id,k=g(t,h);!k||a.depMatched[d]||c[h]||(g(b,h)?(a.defineDep(d,r[h]),a.check()):K(k,b,c))}),c[f]=!0)}function I(){var a,b,c=(a=1E3*m.waitSeconds)&&h.startTime+a<(new Date).getTime(),f=[],l=[],k=!1,g=!0;if(!ba){ba=!0;E(aa,function(a){var h=a.map,e=h.id;if(a.enabled&&(h.isDefine||l.push(a),!a.error))if(!a.inited&&c)p(e)?k=b=!0:(f.push(e),d(e));else if(!a.inited&&a.fetched&&h.isDefine&&(k=!0,!h.prefix))return g=!1});if(c&&f.length)return a=G("timeout",
"Load timeout for modules: "+f,null,f),a.contextName=h.contextName,B(a);g&&x(l,function(a){K(a,{},{})});c&&!b||!k||!F&&!ka||ca||(ca=setTimeout(function(){ca=0;I()},50));ba=!1}}function J(a){w(r,a[0])||u(q(a[0],null,!0)).init(a[1],a[2])}function P(a){a=a.currentTarget||a.srcElement;var b=h.onScriptLoad;a.detachEvent&&!da?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=h.onScriptError;a.detachEvent&&!da||a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}
function Q(){var a;for(C();H.length;){a=H.shift();if(null===a[0])return B(G("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));J(a)}h.defQueueMap={}}var ba,ea,h,S,ca,m={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},t={},aa={},fa={},H=[],r={},X={},ga={},R=1,U=1;S={require:function(a){return a.require?a.require:a.require=h.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]=
{}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return g(m.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};ea=function(a){this.events=g(fa,a.id)||{};this.map=a;this.shim=g(m.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};ea.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=y(this,function(a){this.emit("error",
a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,--this.depCount,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;h.startTime=(new Date).getTime();var a=this.map;if(this.shim)h.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],y(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?
this.callPlugin():this.load()}},load:function(){var a=this.map.url;X[a]||(X[a]=!0,h.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(!this.inited)w(h.defQueueMap,c)||this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(L(l)){try{f=h.execCb(c,l,b,f)}catch(d){a=d}this.map.isDefine&&void 0===f&&((b=this.module)?f=b.exports:
this.usingExports&&(f=this.exports));if(a){if(this.events.error&&this.map.isDefine||k.onError!==ia)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",B(this.error=a);if("undefined"!==typeof console&&console.error)console.error(a);else k.onError(a)}}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(r[c]=f,k.onResourceLoad)){var e=[];x(this.depMaps,function(a){e.push(a.normalizedMap||a)});k.onResourceLoad(h,
this.map,e)}D(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}},callPlugin:function(){var a=this.map,b=a.id,d=q(a.prefix);this.depMaps.push(d);v(d,"defined",y(this,function(f){var l,d,e=g(ga,this.map.id),N=this.map.name,p=this.map.parentMap?this.map.parentMap.name:null,r=h.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(N=f.normalize(N,function(a){return c(a,
p,!0)})||""),d=q(a.prefix+"!"+N,this.map.parentMap),v(d,"defined",y(this,function(a){this.map.normalizedMap=d;this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),f=g(t,d.id)){this.depMaps.push(d);if(this.events.error)f.on("error",y(this,function(a){this.emit("error",a)}));f.enable()}}else e?(this.map.url=h.nameToUrl(e),this.load()):(l=y(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=y(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];
E(t,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&D(a.map.id)});B(a)}),l.fromText=y(this,function(f,c){var d=a.name,e=q(d),N=T;c&&(f=c);N&&(T=!1);u(e);w(m.config,b)&&(m.config[d]=m.config[b]);try{k.exec(f)}catch(g){return B(G("fromtexteval","fromText eval for "+b+" failed: "+g,g,[b]))}N&&(T=!0);this.depMaps.push(e);h.completeLoad(d);r([d],l)}),f.load(a.name,r,l,m))}));h.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){aa[this.map.id]=this;this.enabling=this.enabled=!0;x(this.depMaps,
y(this,function(a,b){var c,f;if("string"===typeof a){a=q(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=g(S,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;v(a,"defined",y(this,function(a){this.undefed||(this.defineDep(b,a),this.check())}));this.errback?v(a,"error",y(this,this.errback)):this.events.error&&v(a,"error",y(this,function(a){this.emit("error",a)}))}c=a.id;f=t[c];w(S,c)||!f||f.enabled||h.enable(a,this)}));E(this.pluginMaps,y(this,function(a){var b=
g(t,a.id);b&&!b.enabled&&h.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){x(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};h={config:m,contextName:b,registry:t,defined:r,urlFetched:X,defQueue:H,defQueueMap:{},Module:ea,makeModuleMap:q,nextTick:k.nextTick,onError:B,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=m.shim,c={paths:!0,
bundles:!0,config:!0,map:!0};E(a,function(a,b){c[b]?(m[b]||(m[b]={}),Z(m[b],a,!0,!0)):m[b]=a});a.bundles&&E(a.bundles,function(a,b){x(a,function(a){a!==b&&(ga[a]=b)})});a.shim&&(E(a.shim,function(a,c){M(a)&&(a={deps:a});!a.exports&&!a.init||a.exportsFn||(a.exportsFn=h.makeShimExports(a));b[c]=a}),m.shim=b);a.packages&&x(a.packages,function(a){var b;a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(m.paths[b]=a.location);m.pkgs[b]=a.name+"/"+(a.main||"main").replace(na,"").replace(V,"")});E(t,
function(a,b){a.inited||a.map.unnormalized||(a.map=q(b,null,!0))});(a.deps||a.callback)&&h.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ha,arguments));return b||a.exports&&ja(a.exports)}},makeRequire:function(a,n){function e(c,d,g){var m,p;n.enableBuildCallback&&d&&L(d)&&(d.__requireJsBuild=!0);if("string"===typeof c){if(L(d))return B(G("requireargs","Invalid require call"),g);if(a&&w(S,c))return S[c](t[a.id]);if(k.get)return k.get(h,
c,a,e);m=q(c,a,!1,!0);m=m.id;return w(r,m)?r[m]:B(G("notloaded",'Module name "'+m+'" has not been loaded yet for context: '+b+(a?"":". Use require([])")))}Q();h.nextTick(function(){Q();p=u(q(null,a));p.skipMap=n.skipMap;p.init(c,d,g,{enabled:!0});I()});return e}n=n||{};Z(e,{isBrowser:F,toUrl:function(b){var d,e=b.lastIndexOf("."),n=b.split("/")[0];-1!==e&&("."!==n&&".."!==n||1<e)&&(d=b.substring(e,b.length),b=b.substring(0,e));return h.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return w(r,
q(b,a,!1,!0).id)},specified:function(b){b=q(b,a,!1,!0).id;return w(r,b)||w(t,b)}});a||(e.undef=function(b){C();var c=q(b,a,!0),e=g(t,b);e.undefed=!0;d(b);delete r[b];delete X[c.url];delete fa[b];Y(H,function(a,c){a[0]===b&&H.splice(c,1)});delete h.defQueueMap[b];e&&(e.events.defined&&(fa[b]=e.events),D(b))});return e},enable:function(a){g(t,a.id)&&u(a).enable()},completeLoad:function(a){var b,c,d=g(m.shim,a)||{},e=d.exports;for(C();H.length;){c=H.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===
a&&(b=!0);J(c)}h.defQueueMap={};c=g(t,a);if(!b&&!w(r,a)&&c&&!c.inited)if(!m.enforceDefine||e&&ja(e))J([a,d.deps||[],d.exportsFn]);else return p(a)?void 0:B(G("nodefine","No define call for "+a,null,[a]));I()},nameToUrl:function(a,b,c){var d,e,p;(d=g(m.pkgs,a))&&(a=d);if(d=g(ga,a))return h.nameToUrl(d,b,c);if(k.jsExtRegExp.test(a))d=a+(b||"");else{d=m.paths;a=a.split("/");for(e=a.length;0<e;--e)if(p=a.slice(0,e).join("/"),p=g(d,p)){M(p)&&(p=p[0]);a.splice(0,e,p);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||
c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":m.baseUrl)+d}return m.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+m.urlArgs):d},load:function(a,b){k.load(h,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||oa.test((a.currentTarget||a.srcElement).readyState))O=null,a=P(a),h.completeLoad(a.id)},onScriptError:function(a){var b=P(a);if(!p(b.id)){var c=[];E(t,function(a,d){0!==d.indexOf("_@r")&&x(a.depMaps,function(a){a.id===b.id&&c.push(d);return!0})});
return B(G("scripterror",'Script error for "'+b.id+(c.length?'", needed by: '+c.join(", "):'"'),a,[b.id]))}}};h.require=h.makeRequire();return h}function pa(){if(O&&"interactive"===O.readyState)return O;Y(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return O=b});return O}var k,C,D,I,P,J,O,Q,u,U,qa=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ra=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,V=/\.js$/,na=/^\.\//;C=Object.prototype;var R=C.toString,la=C.hasOwnProperty,
F=!("undefined"===typeof window||"undefined"===typeof navigator||!window.document),ka=!F&&"undefined"!==typeof importScripts,oa=F&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,da="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),K={},v={},W=[],T=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(L(requirejs))return;v=requirejs;requirejs=void 0}"undefined"===typeof require||L(require)||(v=require,require=void 0);k=requirejs=function(b,
c,d,p){var e,q="_";M(b)||"string"===typeof b||(e=b,M(c)?(b=c,c=d,d=p):b=[]);e&&e.context&&(q=e.context);(p=g(K,q))||(p=K[q]=k.s.newContext(q));e&&p.configure(e);return p.require(b,c,d)};k.config=function(b){return k(b)};k.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=k);k.version="2.1.22";k.jsExtRegExp=/^\/|:|\?|\.js$/;k.isBrowser=F;C=k.s={contexts:K,newContext:ma};k({});x(["toUrl","undef","defined","specified"],function(b){k[b]=function(){var c=
K._;return c.require[b].apply(c,arguments)}});F&&(D=C.head=document.getElementsByTagName("head")[0],I=document.getElementsByTagName("base")[0])&&(D=C.head=I.parentNode);k.onError=ia;k.createNode=function(b,c,d){c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};k.load=function(b,c,d){var g=b&&b.config||{},e;if(F){e=k.createNode(g,c,d);if(g.onNodeCreated)g.onNodeCreated(e,
g,c,d);e.setAttribute("data-requirecontext",b.contextName);e.setAttribute("data-requiremodule",c);!e.attachEvent||e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code")||da?(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)):(T=!0,e.attachEvent("onreadystatechange",b.onScriptLoad));e.src=d;Q=e;I?D.insertBefore(e,I):D.appendChild(e);Q=null;return e}if(ka)try{importScripts(d),b.completeLoad(c)}catch(q){b.onError(G("importscripts","importScripts failed for "+
c+" at "+d,q,[c]))}};F&&!v.skipDataMain&&Y(document.getElementsByTagName("script"),function(b){D||(D=b.parentNode);if(P=b.getAttribute("data-main"))return u=P,v.baseUrl||(J=u.split("/"),u=J.pop(),U=J.length?J.join("/")+"/":"./",v.baseUrl=U),u=u.replace(V,""),k.jsExtRegExp.test(u)&&(u=P),v.deps=v.deps?v.deps.concat(u):[u],!0});define=function(b,c,d){var g,e;"string"!==typeof b&&(d=c,c=b,b=null);M(c)||(d=c,c=null);!c&&L(d)&&(c=[],d.length&&(d.toString().replace(qa,"").replace(ra,function(b,d){c.push(d)}),
c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));T&&(g=Q||pa())&&(b||(b=g.getAttribute("data-requiremodule")),e=K[g.getAttribute("data-requirecontext")]);e?(e.defQueue.push([b,c,d]),e.defQueueMap[b]=!0):W.push([b,c,d])};define.amd={jQuery:!0};k.exec=function(b){return eval(b)};k(v)}})(this);

define("requireLib", function(){});

define('welcome',['require','exports','module'],function(require, exports, module) {
		
	function init(text){
		jQuery('h1#pageTitle').append('<span>' + text + '</span>');		
	}
	
	module.exports = {
		init:init
	}
		
});
define('hbs/handlebars',{});
define('hbs/underscore',{});
define('hbs/json2',{});
define('hbs',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});
/*!

 handlebars v3.0.3

 Copyright (C) 2011-2014 by Yehuda Katz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @license
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define('handlebars',factory);
  else if(typeof exports === 'object')
    exports["Handlebars"] = factory();
  else
    root["Handlebars"] = factory();
})(this, function() {
  return /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

      /******/ 		// Check if module is in cache
      /******/ 		if(installedModules[moduleId])
      /******/ 			return installedModules[moduleId].exports;

      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			exports: {},
        /******/ 			id: moduleId,
        /******/ 			loaded: false
        /******/ 		};

      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

      /******/ 		// Flag the module as loaded
      /******/ 		module.loaded = true;

      /******/ 		// Return the exports of the module
      /******/ 		return module.exports;
      /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {

      'use strict';

      var _interopRequireWildcard = __webpack_require__(7)['default'];

      var _interopRequireDefault = __webpack_require__(8)['default'];

      exports.__esModule = true;

      var _import = __webpack_require__(1);

      var base = _interopRequireWildcard(_import);

      // Each of these augment the Handlebars object. No need to setup here.
      // (This is done to easily share code between commonjs and browse envs)

      var _SafeString = __webpack_require__(2);

      var _SafeString2 = _interopRequireDefault(_SafeString);

      var _Exception = __webpack_require__(3);

      var _Exception2 = _interopRequireDefault(_Exception);

      var _import2 = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_import2);

      var _import3 = __webpack_require__(5);

      var runtime = _interopRequireWildcard(_import3);

      var _noConflict = __webpack_require__(6);

      var _noConflict2 = _interopRequireDefault(_noConflict);

      // For compatibility and usage outside of module systems, make the Handlebars object a namespace
      function create() {
        var hb = new base.HandlebarsEnvironment();

        Utils.extend(hb, base);
        hb.SafeString = _SafeString2['default'];
        hb.Exception = _Exception2['default'];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;

        hb.VM = runtime;
        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };

        return hb;
      }

      var inst = create();
      inst.create = create;

      _noConflict2['default'](inst);

      inst['default'] = inst;

      exports['default'] = inst;
      module.exports = exports['default'];

      /***/ },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {

      'use strict';

      var _interopRequireWildcard = __webpack_require__(7)['default'];

      var _interopRequireDefault = __webpack_require__(8)['default'];

      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;
      exports.createFrame = createFrame;

      var _import = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_import);

      var _Exception = __webpack_require__(3);

      var _Exception2 = _interopRequireDefault(_Exception);

      var VERSION = '3.0.1';
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 6;

      exports.COMPILER_REVISION = COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1'
      };

      exports.REVISION_CHANGES = REVISION_CHANGES;
      var isArray = Utils.isArray,
          isFunction = Utils.isFunction,
          toString = Utils.toString,
          objectType = '[object Object]';

      function HandlebarsEnvironment(helpers, partials) {
        this.helpers = helpers || {};
        this.partials = partials || {};

        registerDefaultHelpers(this);
      }

      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,

        logger: logger,
        log: log,

        registerHelper: function registerHelper(name, fn) {
          if (toString.call(name) === objectType) {
            if (fn) {
              throw new _Exception2['default']('Arg not supported with multiple helpers');
            }
            Utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },

        registerPartial: function registerPartial(name, partial) {
          if (toString.call(name) === objectType) {
            Utils.extend(this.partials, name);
          } else {
            if (typeof partial === 'undefined') {
              throw new _Exception2['default']('Attempting to register a partial as undefined');
            }
            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        }
      };

      function registerDefaultHelpers(instance) {
        instance.registerHelper('helperMissing', function () {
          if (arguments.length === 1) {
            // A missing field in a {{foo}} constuct.
            return undefined;
          } else {
            // Someone is actually trying to call something, blow up.
            throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });

        instance.registerHelper('blockHelperMissing', function (context, options) {
          var inverse = options.inverse,
              fn = options.fn;

          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }

              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = createFrame(options.data);
              data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
              options = { data: data };
            }

            return fn(context, options);
          }
        });

        instance.registerHelper('each', function (context, options) {
          if (!options) {
            throw new _Exception2['default']('Must pass iterator to #each');
          }

          var fn = options.fn,
              inverse = options.inverse,
              i = 0,
              ret = '',
              data = undefined,
              contextPath = undefined;

          if (options.data && options.ids) {
            contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
          }

          if (isFunction(context)) {
            context = context.call(this);
          }

          if (options.data) {
            data = createFrame(options.data);
          }

          function execIteration(field, index, last) {
            if (data) {
              data.key = field;
              data.index = index;
              data.first = index === 0;
              data.last = !!last;

              if (contextPath) {
                data.contextPath = contextPath + field;
              }
            }

            ret = ret + fn(context[field], {
                  data: data,
                  blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
                });
          }

          if (context && typeof context === 'object') {
            if (isArray(context)) {
              for (var j = context.length; i < j; i++) {
                execIteration(i, i, i === context.length - 1);
              }
            } else {
              var priorKey = undefined;

              for (var key in context) {
                if (context.hasOwnProperty(key)) {
                  // We're running the iterations one step out of sync so we can detect
                  // the last iteration without have to scan the object twice and create
                  // an itermediate keys array.
                  if (priorKey) {
                    execIteration(priorKey, i - 1);
                  }
                  priorKey = key;
                  i++;
                }
              }
              if (priorKey) {
                execIteration(priorKey, i - 1, true);
              }
            }
          }

          if (i === 0) {
            ret = inverse(this);
          }

          return ret;
        });

        instance.registerHelper('if', function (conditional, options) {
          if (isFunction(conditional)) {
            conditional = conditional.call(this);
          }

          // Default behavior is to render the positive path if the value is truthy and not empty.
          // The `includeZero` option may be set to treat the condtional as purely not empty based on the
          // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
          if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });

        instance.registerHelper('unless', function (conditional, options) {
          return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
        });

        instance.registerHelper('with', function (context, options) {
          if (isFunction(context)) {
            context = context.call(this);
          }

          var fn = options.fn;

          if (!Utils.isEmpty(context)) {
            if (options.data && options.ids) {
              var data = createFrame(options.data);
              data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
              options = { data: data };
            }

            return fn(context, options);
          } else {
            return options.inverse(this);
          }
        });

        instance.registerHelper('log', function (message, options) {
          var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
          instance.log(level, message);
        });

        instance.registerHelper('lookup', function (obj, field) {
          return obj && obj[field];
        });
      }

      var logger = {
        methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

        // State enum
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 1,

        // Can be overridden in the host environment
        log: function log(level, message) {
          if (typeof console !== 'undefined' && logger.level <= level) {
            var method = logger.methodMap[level];
            (console[method] || console.log).call(console, message); // eslint-disable-line no-console
          }
        }
      };

      exports.logger = logger;
      var log = logger.log;

      exports.log = log;

      function createFrame(object) {
        var frame = Utils.extend({}, object);
        frame._parent = object;
        return frame;
      }

      /* [args, ]options */

      /***/ },
    /* 2 */
    /***/ function(module, exports, __webpack_require__) {

      'use strict';

      exports.__esModule = true;
      // Build out our basic SafeString type
      function SafeString(string) {
        this.string = string;
      }

      SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
        return '' + this.string;
      };

      exports['default'] = SafeString;
      module.exports = exports['default'];

      /***/ },
    /* 3 */
    /***/ function(module, exports, __webpack_require__) {

      'use strict';

      exports.__esModule = true;

      var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

      function Exception(message, node) {
        var loc = node && node.loc,
            line = undefined,
            column = undefined;
        if (loc) {
          line = loc.start.line;
          column = loc.start.column;

          message += ' - ' + line + ':' + column;
        }

        var tmp = Error.prototype.constructor.call(this, message);

        // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }

        if (loc) {
          this.lineNumber = line;
          this.column = column;
        }
      }

      Exception.prototype = new Error();

      exports['default'] = Exception;
      module.exports = exports['default'];

      /***/ },
    /* 4 */
    /***/ function(module, exports, __webpack_require__) {

      'use strict';

      exports.__esModule = true;
      exports.extend = extend;

      // Older IE versions do not directly support indexOf so we must implement our own, sadly.
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#x27;',
        '`': '&#x60;'
      };

      var badChars = /[&<>"'`]/g,
          possible = /[&<>"'`]/;

      function escapeChar(chr) {
        return escape[chr];
      }

      function extend(obj /* , ...source */) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }

        return obj;
      }

      var toString = Object.prototype.toString;

      exports.toString = toString;
      // Sourced from lodash
      // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
      /*eslint-disable func-style, no-var */
      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      };
      // fallback for older versions of Chrome and Safari
      /* istanbul ignore next */
      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function (value) {
          return typeof value === 'function' && toString.call(value) === '[object Function]';
        };
      }
      var isFunction;
      exports.isFunction = isFunction;
      /*eslint-enable func-style, no-var */

      /* istanbul ignore next */
      var isArray = Array.isArray || function (value) {
            return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
          };exports.isArray = isArray;

      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      }

      function escapeExpression(string) {
        if (typeof string !== 'string') {
          // don't escape SafeStrings, since they're already safe
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return '';
          } else if (!string) {
            return string + '';
          }

          // Force a string conversion as this will be done by the append regardless and
          // the regex test will do this transparently behind the scenes, causing issues if
          // an object's to string has escaped characters in it.
          string = '' + string;
        }

        if (!possible.test(string)) {
          return string;
        }
        return string.replace(badChars, escapeChar);
      }

      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }

      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }

      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + '.' : '') + id;
      }

      /***/ },
    /* 5 */
    /***/ function(module, exports, __webpack_require__) {

      'use strict';

      var _interopRequireWildcard = __webpack_require__(7)['default'];

      var _interopRequireDefault = __webpack_require__(8)['default'];

      exports.__esModule = true;
      exports.checkRevision = checkRevision;

      // TODO: Remove this line and break up compilePartial

      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;

      var _import = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_import);

      var _Exception = __webpack_require__(3);

      var _Exception2 = _interopRequireDefault(_Exception);

      var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(1);

      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1,
            currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;

        if (compilerRevision !== currentRevision) {
          if (compilerRevision < currentRevision) {
            var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
                compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
            throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
          } else {
            // Use the embedded version info since the runtime doesn't know about this revision yet
            throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
          }
        }
      }

      function template(templateSpec, env) {
        /* istanbul ignore next */
        if (!env) {
          throw new _Exception2['default']('No environment passed to template');
        }
        if (!templateSpec || !templateSpec.main) {
          throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
        }

        // Note: Using env.VM references rather than local var references throughout this section to allow
        // for external users to override these as psuedo-supported APIs.
        env.VM.checkRevision(templateSpec.compiler);

        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);
          }

          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var result = env.VM.invokePartial.call(this, partial, context, options);

          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, options);
          }
          if (result != null) {
            if (options.indent) {
              var lines = result.split('\n');
              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }

                lines[i] = options.indent + lines[i];
              }
              result = lines.join('\n');
            }
            return result;
          } else {
            throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
          }
        }

        // Just add water
        var container = {
          strict: function strict(obj, name) {
            if (!(name in obj)) {
              throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
            }
            return obj[name];
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;
            for (var i = 0; i < len; i++) {
              if (depths[i] && depths[i][name] != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
          },

          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,

          fn: function fn(i) {
            return templateSpec[i];
          },

          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i],
                fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }
            return programWrapper;
          },

          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }
            return value;
          },
          merge: function merge(param, common) {
            var obj = param || common;

            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }

            return obj;
          },

          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };

        function ret(context) {
          var options = arguments[1] === undefined ? {} : arguments[1];

          var data = options.data;

          ret._setup(options);
          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }
          var depths = undefined,
              blockParams = templateSpec.useBlockParams ? [] : undefined;
          if (templateSpec.useDepths) {
            depths = options.depths ? [context].concat(options.depths) : [context];
          }

          return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        ret.isTop = true;

        ret._setup = function (options) {
          if (!options.partial) {
            container.helpers = container.merge(options.helpers, env.helpers);

            if (templateSpec.usePartial) {
              container.partials = container.merge(options.partials, env.partials);
            }
          } else {
            container.helpers = options.helpers;
            container.partials = options.partials;
          }
        };

        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _Exception2['default']('must pass block params');
          }
          if (templateSpec.useDepths && !depths) {
            throw new _Exception2['default']('must pass parent depths');
          }

          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };
        return ret;
      }

      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments[1] === undefined ? {} : arguments[1];

          return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
        }
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }

      function resolvePartial(partial, context, options) {
        if (!partial) {
          partial = options.partials[options.name];
        } else if (!partial.call && !options.name) {
          // This is a dynamic partial that returned a string
          options.name = partial;
          partial = options.partials[partial];
        }
        return partial;
      }

      function invokePartial(partial, context, options) {
        options.partial = true;

        if (partial === undefined) {
          throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }

      function noop() {
        return '';
      }

      function initData(context, data) {
        if (!data || !('root' in data)) {
          data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
          data.root = context;
        }
        return data;
      }

      /***/ },
    /* 6 */
    /***/ function(module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function(global) {'use strict';

        exports.__esModule = true;
        /*global window */

        exports['default'] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== 'undefined' ? global : window,
              $Handlebars = root.Handlebars;
          /* istanbul ignore next */
          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }
          };
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

      /***/ },
    /* 7 */
    /***/ function(module, exports, __webpack_require__) {

      "use strict";

      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (typeof obj === "object" && obj !== null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj["default"] = obj;
          return newObj;
        }
      };

      exports.__esModule = true;

      /***/ },
    /* 8 */
    /***/ function(module, exports, __webpack_require__) {

      "use strict";

      exports["default"] = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      exports.__esModule = true;

      /***/ }
    /******/ ])
});
;


/* START_TEMPLATE */
define('hbs!modules/youtube/1.0/hbs/youtube',['handlebars'], function( Handlebars ){ 
var t = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<iframe width=\""
    + this.escapeExpression(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"width","hash":{},"data":data}) : helper)))
    + "\" height=\""
    + this.escapeExpression(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"height","hash":{},"data":data}) : helper)))
    + "\" src=\"https://www.youtube.com/embed/"
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" frameborder=\""
    + this.escapeExpression(((helper = (helper = helpers.border || (depth0 != null ? depth0.border : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"border","hash":{},"data":data}) : helper)))
    + "\" "
    + this.escapeExpression(((helper = (helper = helpers.allowfullscreen || (depth0 != null ? depth0.allowfullscreen : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"allowfullscreen","hash":{},"data":data}) : helper)))
    + "></iframe>";
},"useData":true});
Handlebars.registerPartial('modules/youtube/1.0/hbs/youtube', t);
return t;
});
/* END_TEMPLATE */
;
define('youtube',['require','exports','module','hbs!modules/youtube/1.0/hbs/youtube'],function(require, exports, module) {
		
	var hbs 		= 	require('hbs!modules/youtube/1.0/hbs/youtube'),
		$element;
			
	function init(elem){		
		var html,
			data;
		
		$element = jQuery(elem);
		data = $element.data();
		html = hbs(data);
		$element.html(html);
	}
	
	module.exports = {
        init: init
    };	
});
define('utility',['require','exports','module'],function(require, exports, module) {

	function getData(url, data) {
		
		return jQuery.ajax({
			url: url,
			type: "GET",
			cache: true,
			data: data === null ? {} : data,
			dataType: "json",
			contentType: "application/json",
			headers: {
                "ACCEPT": "application/json;odata=nometadata"
            }
		});
	
	}
	
	module.exports = {
        getData: getData
    };
});
define('libs/normalize',{});
define('libs/css.min',[],function(){if("undefined"==typeof window)return{load:function(e,t,n){n()}};var e=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,n=!1,r=!0;t[1]||t[7]?n=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]||t[8]?r=!1:t[4]&&(n=parseInt(t[4])<18);var o={};o.pluginBuilder="./css-builder";var a,i,s,l=function(){a=document.createElement("style"),e.appendChild(a),i=a.styleSheet||a.sheet},u=0,d=[],c=function(e){u++,32==u&&(l(),u=0),i.addImport(e),a.onload=function(){f()}},f=function(){s();var e=d.shift();return e?(s=e[1],void c(e[0])):void(s=null)},h=function(e,t){if(i&&i.addImport||l(),i&&i.addImport)s?d.push([e,t]):(c(e),s=t);else{a.textContent='@import "'+e+'";';var n=setInterval(function(){try{a.sheet.cssRules,clearInterval(n),t()}catch(e){}},10)}},p=function(t,n){var o=document.createElement("link");if(o.type="text/css",o.rel="stylesheet",r)o.onload=function(){o.onload=function(){},setTimeout(n,7)};else var a=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){var t=document.styleSheets[e];if(t.href==o.href)return clearInterval(a),n()}},10);o.href=t,e.appendChild(o)};return o.normalize=function(e,t){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),t(e)},o.load=function(e,t,r){(n?h:p)(t.toUrl(e+".css"),r)},o});

define('libs/css.min!modules/chart/1.0/css/chart',[],function(){});
/* global _spPageContextInfo */
define('chart',['require','exports','module','chartjs','utility','css!modules/chart/1.0/css/chart'],function(require, exports, module) {
	
	var Chart 		= 	require('chartjs'),
		utility	 	= 	require('utility'),
		css 		= 	require('css!modules/chart/1.0/css/chart'),	
		$element,
		$ctx,
		data;
		
	function init(elem){
		var $promise;
		
		$element = jQuery(elem);			
		$ctx = $element.get(0).getContext('2d');
		data = $element.data();
		
		$promise = utility.getData(_spPageContextInfo.webAbsoluteUrl + '/_api/web/lists/getbytitle(\'' + data.list + '\')/items',{});
		$promise.done(createChart);
	}
	
	function createChart(items){
				
		var chartData = {
		    labels: data.labels,
		    datasets: createDatasetsFromItems(items)		    
		};		
		
		var bar = new Chart($ctx).Bar(chartData, {});	
		
		var $legend = jQuery("<div class='chart-legend'></div>");
		$legend.html(bar.generateLegend());
		$element.parent().append($legend);
		
	}
	
	function createDatasetsFromItems(items){
	
		var datasets = [];
		
		items.value.forEach(function(item,index){
		
			var dataset = {};
			
			dataset.label = item.Title;
			dataset.fillColor = "rgba(" + data.colours[index] + ",0.5)";
		    dataset.strokeColor = "rgba(" + data.colours[index] + ",0.8)";
		    dataset.highlightFill = "rgba(" + data.colours[index] + ",0.75)";
		    dataset.highlightStroke = "rgba(" + data.colours[index] + ",1)";
		    dataset.data = createDataFromFields(item, data.fields);
		    
		    datasets.push(dataset);
		    
		});
	
		return datasets;
		
	}
	
	function createDataFromFields(item, fields){
	
		var plot = [];
		
		fields.forEach(function(field){
			plot.push(item[field]);
		});
		
		return plot;
	}
	
	module.exports = {
		init:init
	}
		
});
define('moduleloader',['require','exports','module'],function (require, exports, module) {

	function welcome() {
		require(['welcome'], function (welcome) {
			welcome.init("Welcome!");
		});
	}

	function youtube() {
		var youtubes = jQuery('div.youtube');

		if (youtubes.length > 0) {
			require(['youtube'], function (youtube) {
				for (var i = 0; i < youtubes.length; i++) {
					youtube.init(youtubes[i]);
				}
			});
		}
	}

	function chart() {
		var charts = jQuery('canvas.chart');

		if (charts.length > 0) {
			require(['chart'], function (chart) {
				for (var i = 0; i < charts.length; i++) {
					chart.init(charts[i]);
				}
			});
		}
	}

	module.exports = {
		welcome: welcome,
		youtube: youtube,
		chart: chart
	};

});
/* global asyncDeltaManager */
define('spweb',['require','exports','module','moduleloader'],function (require, exports, module) {

	var moduleloader = require('moduleloader');

	function init() {
		registerAsyncDeltaManagerEvents();
		handleMdsInitialLoad();
	}

	function registerAsyncDeltaManagerEvents() {
		// prevents ghosting of DOM elements on page transitions	
		asyncDeltaManager.add_beginRequest(function () {
			jQuery('.sprequire').remove();
		});
	}
	
	// load modules when transition has occured
	function handleMdsTransition() {
		moduleloader.youtube();
		moduleloader.chart();
	}
	
	// load modules on initial load
	function handleMdsInitialLoad() {
		moduleloader.welcome();
		handleMdsTransition();
	}

	module.exports = {
		init: init,
		handleMdsTransition: handleMdsTransition
	};

});
/* global RegisterModuleInit */
/* global Type */
/* global SP */
// declare global namespace variable
var sprequire = window.sprequire || {};

// register namespace with Microsoft Ajax
Type.registerNamespace('sprequire');

sprequire.init = function () {
	
	// development - removed at build time as we bundle require with production code
	
	
	//production - uncommented at build time, ensures only our require is loaded
	sprequire.configure();

};

sprequire.configure = function () {

	require.config({
		// define the base path for all modules in require
		baseUrl: '/sites/ontaplayouts/Style Library/sprequire/',
		// define global require mappings
		map: {
			'*': {
				'css': 'libs/css.min'
			}
		},
		// define alias to paths of modules for easy access
		paths: {
			'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
			'hbs': 'libs/hbs',
			'chartjs': '//cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min',
			'utility': 'libs/utility',
			'text': 'libs/text',
			'moduleloader': 'modules/moduleloader',
			'chart': 'modules/chart/1.0/js/chart',
			'youtube': 'modules/youtube/1.0/js/youtube',
			'welcome': 'modules/welcome/1.0/js/welcome',
			'spweb': 'modules/spweb/1.0/js/spweb',
		},
		//define the dependencies on require
		deps: ['jquery'],
		// fire callback when require deps have loaded
		callback: function () {
			require(['spweb'], function (spweb) {
				// get spweb module and run init
				spweb.init();
				// register function with MDS to handle page transitions
				RegisterModuleInit('https://idonline1com.sharepoint.com/sites/dev/sprequire/SiteAssets/init.min.js', spweb.handleMdsTransition);
			});
		}
	});

};

// initialise sprequire
sprequire.init();
define("init", function(){});


(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('div.chart-legend {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\ndiv.chart-legend ul {\r\n  list-style: none;\r\n}\r\n\r\ndiv.chart-legend ul li {\r\n  display: block;\r\n  padding-left: 30px;\r\n  position: relative;\r\n  margin-bottom: 4px;\r\n  border-radius: 5px;\r\n  padding: 2px 8px 2px 28px;\r\n  font-size: 14px;\r\n  cursor: default;\r\n  -webkit-transition: background-color 200ms ease-in-out;\r\n  -moz-transition: background-color 200ms ease-in-out;\r\n  -o-transition: background-color 200ms ease-in-out;\r\n  transition: background-color 200ms ease-in-out;\r\n}\r\n\r\ndiv.chart-legend li span {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 20px;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n}');
