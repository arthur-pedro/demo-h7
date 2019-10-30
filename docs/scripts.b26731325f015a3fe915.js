/*!
 * FullCalendar v4.0.0-alpha.4
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("superagent")):"function"==typeof define&&define.amd?define(["superagent"],t):"object"==typeof exports?exports.FullCalendar=t(require("superagent")):e.FullCalendar=t(e.superagent)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=185)}([,function(e,t){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};t.__extends=function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},t.__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}},function(e,t,n){function r(e,t){t.left&&k.applyStyle(e,{borderLeftWidth:1,marginLeft:t.left-1}),t.right&&k.applyStyle(e,{borderRightWidth:1,marginRight:t.right-1})}function i(e){k.applyStyle(e,{marginLeft:"",marginRight:"",borderLeftWidth:"",borderRightWidth:""})}function o(){document.body.classList.add("fc-not-allowed")}function a(){document.body.classList.remove("fc-not-allowed")}function s(e,t,n){var r=Math.floor(t/e.length),i=Math.floor(t-r*(e.length-1)),o=[],a=[],s=[],u=0;l(e),e.forEach(function(t,n){var l=n===e.length-1?i:r,d=x.computeHeightAndMargins(t);d<l?(o.push(t),a.push(d),s.push(t.offsetHeight)):u+=d}),n&&(t-=u,r=Math.floor(t/o.length),i=Math.floor(t-r*(o.length-1))),o.forEach(function(e,t){var n=t===o.length-1?i:r,l=a[t],u=s[t],d=n-(l-u);l<n&&(e.style.height=d+"px")})}function l(e){e.forEach(function(e){e.style.height=""})}function u(e){var t=0;return e.forEach(function(e){var n=e.firstChild;if(n instanceof HTMLElement){var r=n.offsetWidth;r>t&&(t=r)}}),t++,e.forEach(function(e){e.style.width=t+"px"}),t}function d(e,t){var n={position:"relative",left:-1};k.applyStyle(e,n),k.applyStyle(t,n);var r=e.offsetHeight-t.offsetHeight,i={position:"",left:""};return k.applyStyle(e,i),k.applyStyle(t,i),r}function c(e){e.classList.add("fc-unselectable"),e.addEventListener("selectstart",z.preventDefault)}function p(e){e.classList.remove("fc-unselectable"),e.removeEventListener("selectstart",z.preventDefault)}function f(e){e.addEventListener("contextmenu",z.preventDefault)}function h(e){e.removeEventListener("contextmenu",z.preventDefault)}function g(e){var t,n,r=[],i=[];for("string"==typeof e?i=e.split(/\s*,\s*/):"function"==typeof e?i=[e]:Array.isArray(e)&&(i=e),t=0;t<i.length;t++)n=i[t],"string"==typeof n?r.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&r.push({func:n});return r}function v(e,t,n){var r,i;for(r=0;r<n.length;r++)if(i=m(e,t,n[r]))return i;return 0}function m(e,t,n){return n.func?n.func(e,t):y(e[n.field],t[n.field])*(n.order||1)}function y(e,t){return e||t?null==t?-1:null==e?1:"string"==typeof e||"string"==typeof t?String(e).localeCompare(String(t)):e-t:0}function E(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=window.console;if(n&&n.log)return n.log.apply(n,e)}function S(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=window.console;return n&&n.warn?n.warn.apply(n,e):E.apply(null,e)}function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}function D(e,t){var n=String(e);return"000".substr(0,t-n.length)+n}function w(e,t){return e-t}function T(e){return e%1==0}function R(e,t,n){if("function"==typeof e&&(e=[e]),e){var r=void 0,i=void 0;for(r=0;r<e.length;r++)i=e[r].apply(t,n)||i;return i}}function _(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0;n<e.length;n++)if(void 0!==e[n])return e[n]}function C(e,t){var n,r,i,o,a,s=function(){var l=(new Date).valueOf()-o;l<t?n=setTimeout(s,t-l):(n=null,a=e.apply(i,r),i=r=null)};return function(){return i=this,r=arguments,o=(new Date).valueOf(),n||(n=setTimeout(s,t)),a}}function M(e,t,n,r){void 0===n&&(n={});var i={};for(var o in t){var a=t[o];void 0!==e[o]?a===Function?i[o]="function"==typeof e[o]?e[o]:null:i[o]=a?a(e[o]):e[o]:void 0!==n[o]?i[o]=n[o]:a===String?i[o]="":a&&a!==Number&&a!==Boolean&&a!==Function?i[o]=a(null):i[o]=null}if(r)for(var o in e)void 0===t[o]&&(r[o]=e[o]);return i}function P(e){var t=Math.floor(N.diffDays(e.start,e.end))||1,n=N.startOfDay(e.start);return{start:n,end:N.addDays(n,t)}}function I(e,t){void 0===t&&(t=L.createDuration(0));var n=null,r=null;if(e.end){r=N.startOfDay(e.end);var i=e.end.valueOf()-r.valueOf();i&&i>=L.asRoughMs(t)&&(r=N.addDays(r,1))}return e.start&&(n=N.startOfDay(e.start),r&&r<=n&&(r=N.addDays(n,1))),{start:n,end:r}}function O(e){var t=I(e);return N.diffDays(t.start,t.end)>1}function H(e,t,n,r){return"year"===r?L.createDuration(n.diffWholeYears(e,t),"year"):"month"===r?L.createDuration(n.diffWholeMonths(e,t),"month"):N.diffDayAndTime(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var k=n(3),x=n(15),z=n(24),N=n(4),L=n(9);t.compensateScroll=r,t.uncompensateScroll=i,t.disableCursor=o,t.enableCursor=a,t.distributeHeight=s,t.undistributeHeight=l,t.matchCellWidths=u,t.subtractInnerElHeight=d,t.preventSelection=c,t.allowSelection=p,t.preventContextMenu=f,t.allowContextMenu=h,t.parseFieldSpecs=g,t.compareByFieldSpecs=v,t.compareByFieldSpec=m,t.flexibleCompare=y,t.log=E,t.warn=S,t.capitaliseFirstLetter=b,t.padStart=D,t.compareNumbers=w,t.isInt=T,t.applyAll=R,t.firstDefined=_,t.debounce=C,t.refineProps=M,t.computeAlignedDayRange=P,t.computeVisibleDayRange=I,t.isMultiDayRange=O,t.diffDates=H},function(e,t){function n(e,t,n){var r=document.createElement(e);if(t)for(var i in t)"style"===i?m(r,t[i]):E[i]?r[i]=t[i]:r.setAttribute(i,t[i]);return"string"==typeof n?r.innerHTML=n:null!=n&&s(r,n),r}function r(e){e=e.trim();var t=document.createElement(a(e));return t.innerHTML=e,t.firstChild}function i(e){return Array.prototype.slice.call(o(e))}function o(e){e=e.trim();var t=document.createElement(a(e));return t.innerHTML=e,t.childNodes}function a(e){return S[e.substr(0,3)]||"div"}function s(e,t){for(var n=d(t),r=0;r<n.length;r++)e.appendChild(n[r])}function l(e,t){for(var n=d(t),r=e.firstChild||null,i=0;i<n.length;i++)e.insertBefore(n[i],r)}function u(e,t){for(var n=d(t),r=e.nextSibling||null,i=0;i<n.length;i++)e.parentNode.insertBefore(n[i],r)}function d(e){return"string"==typeof e?i(e):e instanceof Node?[e]:Array.prototype.slice.call(e)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t){return D.call(e,t)}function f(e,t){return b.call(e,t)}function h(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].querySelectorAll(t),a=0;a<o.length;a++)r.push(o[a]);return r}function g(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].children,a=0;a<o.length;a++){var s=o[a];t&&!f(s,t)||r.push(s)}return r}function v(e,t,n){n?e.classList.add(t):e.classList.remove(t)}function m(e,t,n){for(var r in t)y(e,r,t[r])}function y(e,t,n){null==n?e.style[t]="":"number"==typeof n&&w.test(t)?e.style[t]=n+"px":e.style[t]=n}Object.defineProperty(t,"__esModule",{value:!0});var E={className:!0,colSpan:!0,rowSpan:!0},S={"<tr":"tbody","<td":"tr"};t.createElement=n,t.htmlToElement=r,t.htmlToElements=i,t.appendToElement=s,t.prependToElement=l,t.insertAfterElement=u,t.removeElement=c;var b=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.msMatchesSelector,D=Element.prototype.closest||function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(f(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null};t.elementClosest=p,t.elementMatches=f,t.findElements=h,t.findChildren=g,t.forceClassName=v;var w=/(top|left|right|bottom|width|height)$/i;t.applyStyle=m,t.applyStyleProp=y},function(e,t){function n(e,t){var n=D(e);return n[2]+=7*t,w(n)}function r(e,t){var n=D(e);return n[2]+=t,w(n)}function i(e,t){var n=D(e);return n[6]+=t,w(n)}function o(e,t){return a(e,t)/7}function a(e,t){return(t.valueOf()-e.valueOf())/864e5}function s(e,t){return(t.valueOf()-e.valueOf())/36e5}function l(e,t){return(t.valueOf()-e.valueOf())/6e4}function u(e,t){return(t.valueOf()-e.valueOf())/1e3}function d(e,t){var n=f(e),r=f(t);return{years:0,months:0,days:Math.round(a(n,r)),milliseconds:t.valueOf()-r.valueOf()-(e.valueOf()-n.valueOf())}}function c(e,t){var n=p(e,t);return null!==n&&n%7==0?n/7:null}function p(e,t){return R(e)===R(t)?Math.round(a(e,t)):null}function f(e){return w([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function h(e){return w([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}function g(e){return w([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}function v(e){return w([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}function m(e,t,n){var r=e.getUTCFullYear(),i=y(e,r,t,n);if(i<1)return y(e,r-1,t,n);var o=y(e,r+1,t,n);return o>=1?Math.min(i,o):i}function y(e,t,n,r){var i=w([t,0,1+E(t,n,r)]),o=f(e),s=Math.round(a(i,o));return Math.floor(s/7)+1}function E(e,t,n){var r=7+t-n;return-(7+w([e,0,r]).getUTCDay()-t)%7+r-1}function S(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function b(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function D(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function w(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function T(e){return!isNaN(e.valueOf())}function R(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}Object.defineProperty(t,"__esModule",{value:!0}),t.DAY_IDS=["sun","mon","tue","wed","thu","fri","sat"],t.addWeeks=n,t.addDays=r,t.addMs=i,t.diffWeeks=o,t.diffDays=a,t.diffHours=s,t.diffMinutes=l,t.diffSeconds=u,t.diffDayAndTime=d,t.diffWholeWeeks=c,t.diffWholeDays=p,t.startOfDay=f,t.startOfHour=h,t.startOfMinute=g,t.startOfSecond=v,t.weekOfYear=m,t.dateToLocalArray=S,t.arrayToLocalDate=b,t.dateToUtcArray=D,t.arrayToUtcDate=w,t.isValidDate=T,t.timeAsMs=R},,,function(e,t,n){function r(e,t){return"object"==typeof e&&e?("string"==typeof t&&(e=u.__assign({separator:t},e)),new c.NativeFormatter(e)):"string"==typeof e?new p.CmdFormatter(e,t):"function"==typeof e?new f.FuncFormatter(e):void 0}function i(e,t,n){void 0===n&&(n=!1);var r=e.toISOString();return r=r.replace(".000",""),n&&(r=r.replace("T00:00:00Z","")),r.length>10&&(null==t?r=r.replace("Z",""):0!==t&&(r=r.replace("Z",a(t,!0)))),r}function o(e){return d.padStart(e.getUTCHours(),2)+":"+d.padStart(e.getUTCMinutes(),2)+":"+d.padStart(e.getUTCSeconds(),2)}function a(e,t){void 0===t&&(t=!1);var n=e<0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=Math.round(r%60);return t?n+d.padStart(i,2)+":"+d.padStart(o,2):"GMT"+n+i+(o?":"+d.padStart(o,2):"")}function s(e,t,n,r){var i=l(e,n.calendarSystem);return{date:i,start:i,end:t?l(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,separator:r}}function l(e,t){var n=t.markerToArray(e.marker);return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),d=n(2),c=n(188),p=n(58),f=n(189);t.createFormatter=r,t.buildIsoString=i,t.formatIsoTimeString=o,t.formatTimeZoneOffset=a,t.createVerboseFormattingArg=s},function(e,t){function n(e,t){var n=null,r=null;return e.start&&(n=t.createMarker(e.start)),e.end&&(r=t.createMarker(e.end)),n||r?n&&r&&r<n?null:{start:n,end:r}:null}function r(e,t){var n,r,o=[],a=t.start;for(e.sort(i),n=0;n<e.length;n++)r=e[n],r.start>a&&o.push({start:a,end:r.start}),r.end>a&&(a=r.end);return a<t.end&&o.push({start:a,end:t.end}),o}function i(e,t){return e.start.valueOf()-t.start.valueOf()}function o(e,t){var n=e.start,r=e.end,i=null;return null!==t.start&&(n=null===n?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),null!=t.end&&(r=null===r?t.end:new Date(Math.min(r.valueOf(),t.end.valueOf()))),(null===n||null===r||n<r)&&(i={start:n,end:r}),i}function a(e,t){return(null===e.start?null:e.start.valueOf())===(null===t.start?null:t.start.valueOf())&&(null===e.end?null:e.end.valueOf())===(null===t.end?null:t.end.valueOf())}function s(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function l(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function u(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function d(e,t){return null!=t.start&&e<t.start?t.start:null!=t.end&&e>=t.end?new Date(t.end.valueOf()-1):e}Object.defineProperty(t,"__esModule",{value:!0}),t.parseRange=n,t.invertRanges=r,t.intersectRanges=o,t.rangesEqual=a,t.rangesIntersect=s,t.rangeContainsRange=l,t.rangeContainsMarker=u,t.constrainMarkerToRange=d},function(e,t,n){function r(e,t){var n;return"string"==typeof e?i(e):"object"==typeof e&&e?o(e):"number"==typeof e?o((n={},n[t||"milliseconds"]=e,n)):null}function i(e){var t=w.exec(e);if(t){var n=t[1]?-1:1;return{years:0,months:0,days:n*(t[2]?parseInt(t[2],10):0),milliseconds:n*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}function o(e){return{years:e.years||e.year||0,months:e.months||e.month||0,days:(e.days||e.day||0)+7*a(e),milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)}}function a(e){return e.weeks||e.week||0}function s(e,t){return e.years===t.years&&e.months===t.months&&e.days===t.days&&e.milliseconds===t.milliseconds}function l(e){return 0===e.years&&0===e.months&&1===e.days&&0===e.milliseconds}function u(e,t){return{years:e.years+t.years,months:e.months+t.months,days:e.days+t.days,milliseconds:e.milliseconds+t.milliseconds}}function d(e,t){return{years:e.years-t.years,months:e.months-t.months,days:e.days-t.days,milliseconds:e.milliseconds-t.milliseconds}}function c(e,t){return{years:e.years*t,months:e.months*t,days:e.days*t,milliseconds:e.milliseconds*t}}function p(e){return h(e)/365}function f(e){return h(e)/30}function h(e){return y(e)/864e5}function g(e){return y(e)/36e5}function v(e){return y(e)/6e4}function m(e){return y(e)/1e3}function y(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function E(e,t){for(var n=null,r=0;r<D.length;r++){var i=D[r];if(t[i]){var o=e[i]/t[i];if(!b.isInt(o)||null!==n&&n!==o)return null;n=o}else if(e[i])return null}return n}function S(e,t){var n=e.milliseconds;if(n){if(n%1e3!=0)return{unit:"millisecond",value:n};if(n%6e4!=0)return{unit:"second",value:n/1e3};if(n%36e5!=0)return{unit:"minute",value:n/6e4};if(n)return{unit:"hour",value:n/36e5}}return e.days?t||e.days%7!=0?{unit:"day",value:e.days}:{unit:"week",value:e.days/7}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}Object.defineProperty(t,"__esModule",{value:!0});var b=n(2),D=["years","months","days","milliseconds"],w=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;t.createDuration=r,t.getWeeksFromInput=a,t.durationsEqual=s,t.isSingleDay=l,t.addDurations=u,t.subtractDurations=d,t.multiplyDuration=c,t.asRoughYears=p,t.asRoughMonths=f,t.asRoughDays=h,t.asRoughHours=g,t.asRoughMinutes=v,t.asRoughSeconds=m,t.asRoughMs=y,t.wholeDivideDurations=E,t.greatestDurationDenominator=S},function(e,t,n){function r(e,t,n,r){var i={},o={},a={},s=[],u=[],p=l(e.defs,t);for(var f in e.defs){var h=e.defs[f];"inverse-background"===h.rendering&&(h.groupId?(i[h.groupId]=[],a[h.groupId]||(a[h.groupId]=h)):o[f]=[])}for(var g in e.instances){var v=e.instances[g],h=e.defs[v.defId],m=p[h.defId],y=v.range,E=!h.allDay&&r?c.computeVisibleDayRange(y,r):y,S=d.intersectRanges(E,n);S&&("inverse-background"===h.rendering?h.groupId?i[h.groupId].push(S):o[v.defId].push(S):("background"===h.rendering?s:u).push({def:h,ui:m,instance:v,range:S,isStart:E.start&&E.start.valueOf()===S.start.valueOf(),isEnd:E.end&&E.end.valueOf()===S.end.valueOf()}))}for(var b in i)for(var D=i[b],w=d.invertRanges(D,n),T=0,R=w;T<R.length;T++){var _=R[T],h=a[b],m=p[h.defId];s.push({def:h,ui:m,instance:null,range:_,isStart:!1,isEnd:!1})}for(var f in o)for(var D=o[f],w=d.invertRanges(D,n),C=0,M=w;C<M.length;C++){var _=M[C];s.push({def:e.defs[f],ui:p[f],instance:null,range:_,isStart:!1,isEnd:!1})}return{bg:s,fg:u}}function i(e){return"background"===e.rendering||"inverse-background"===e.rendering}function o(e,t,n){e.hasPublicHandlers("eventRender")&&(t=t.filter(function(t){var r=e.publiclyTrigger("eventRender",[{event:new p.default(e.calendar,t.eventRange.def,t.eventRange.instance),isMirror:n,isStart:t.isStart,isEnd:t.isEnd,el:t.el,view:e}]);return!1!==r&&(r&&!0!==r&&(t.el=r),!0)}));for(var r=0,i=t;r<i.length;r++){var o=i[r];a(o.el,o)}return t}function a(e,t){e.fcSeg=t}function s(e){return e.fcSeg||null}function l(e,t){return h.mapHash(e,function(e){return u(e,t)})}function u(e,t){var n=[];return t[""]&&n.push(t[""]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),f.combineEventUis(n)}Object.defineProperty(t,"__esModule",{value:!0});var d=n(8),c=n(2),p=n(16),f=n(25),h=n(12);t.sliceEventStore=r,t.hasBgRendering=i,t.filterSegsViaEls=o,t.getElSeg=s,t.compileEventUis=l,t.compileEventUi=u},function(e,t){function n(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function r(e){var t=[];for(var n in e){var r=e[n];null!=r&&""!==r&&t.push(n+":"+r)}return t.join(";")}function i(e){var t=[];for(var r in e){var i=e[r];null!=i&&t.push(r+'="'+n(i)+'"')}return t.join(" ")}function o(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}Object.defineProperty(t,"__esModule",{value:!0}),t.htmlEscape=n,t.cssToStr=r,t.attrsToStr=i,t.parseClassName=o},function(e,t){function n(e,t){var r,i,o,a,s,l,u={};if(t)for(r=0;r<t.length;r++){for(i=t[r],o=[],a=e.length-1;a>=0;a--)if("object"==typeof(s=e[a][i])&&s)o.unshift(s);else if(void 0!==s){u[i]=s;break}o.length&&(u[i]=n(o))}for(r=e.length-1;r>=0;r--){l=e[r];for(i in l)i in u||(u[i]=l[i])}return u}function r(e,t){var n={};for(var r in e)t(e[r],r)&&(n[r]=e[r]);return n}function i(e,t){var n={};for(var r in e)n[r]=t(e[r],r);return n}function o(e){for(var t={},n=0,r=e;n<r.length;n++){t[r[n]]=!0}return t}function a(e,t){for(var n in e)if(e[n]!==t[n])return!1;for(var n in t)if(!(n in e))return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.mergeProps=n,t.filterHash=r,t.mapHash=i,t.arrayToHash=o,t.isPropsEqual=a},,function(e,t,n){function r(e,t,n,r){for(var o=d(),a=0,s=e;a<s.length;a++){var l=s[a],u=h.parseEvent(l,t,n,r);u&&i(u,o)}return o}function i(e,t){return void 0===t&&(t=d()),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function o(e,t,n){var r=n.dateEnv,i=e.defs,o=e.instances;o=v.filterHash(o,function(e){return!i[e.defId].recurringDef});for(var a in i){var s=i[a];if(s.recurringDef){var l=g.expandRecurringRanges(s,t,n.dateEnv),u=s.recurringDef.duration;u||(u=s.allDay?n.defaultAllDayEventDuration:n.defaultTimedEventDuration);for(var d=0,c=l;d<c.length;d++){var p=c[d],f=h.createEventInstance(a,{start:p,end:r.add(p,u)});o[f.instanceId]=f}}}return{defs:i,instances:o}}function a(e,t){var n=e.instances[t];if(n){var r=e.defs[n.defId],i=p(e,function(e){return s(r,e)});return i.defs[r.defId]=r,i.instances[n.instanceId]=n,i}return d()}function s(e,t){return Boolean(e.groupId&&e.groupId===t.groupId)}function l(e,t,n){var r=n.opt("eventDataTransform"),i=t?t.eventDataTransform:null;return i&&(e=u(e,i)),r&&(e=u(e,r)),e}function u(e,t){var n;if(t){n=[];for(var r=0,i=e;r<i.length;r++){var o=i[r],a=t(o);a?n.push(a):null==a&&n.push(o)}}else n=e;return n}function d(){return{defs:{},instances:{}}}function c(e,t){return{defs:f.__assign({},e.defs,t.defs),instances:f.__assign({},e.instances,t.instances)}}function p(e,t){var n=v.filterHash(e.defs,t),r=v.filterHash(e.instances,function(e){return n[e.defId]});return{defs:n,instances:r}}Object.defineProperty(t,"__esModule",{value:!0});var f=n(1),h=n(26),g=n(41),v=n(12);t.parseEvents=r,t.eventTupleToStore=i,t.expandRecurring=o,t.getRelevantEvents=a,t.transformRawEvents=l,t.createEmptyEventStore=d,t.mergeEventStores=c,t.filterEventStoreDefs=p},function(e,t,n){function r(e,t){void 0===t&&(t=!1);var n=window.getComputedStyle(e),r=parseInt(n.borderLeftWidth,10)||0,i=parseInt(n.borderRightWidth,10)||0,o=parseInt(n.borderTopWidth,10)||0,a=parseInt(n.borderBottomWidth,10)||0,s=c.sanitizeScrollbarWidth(e.offsetWidth-e.clientWidth-r-i),l=c.sanitizeScrollbarWidth(e.offsetHeight-e.clientHeight-o-a),u={borderLeft:r,borderRight:i,borderTop:o,borderBottom:a,scrollbarBottom:l,scrollbarLeft:0,scrollbarRight:0};return c.getIsRtlScrollbarOnLeft()&&"rtl"===n.direction?u.scrollbarLeft=s:u.scrollbarRight=s,t&&(u.paddingLeft=parseInt(n.paddingLeft,10)||0,u.paddingRight=parseInt(n.paddingRight,10)||0,u.paddingTop=parseInt(n.paddingTop,10)||0,u.paddingBottom=parseInt(n.paddingBottom,10)||0),u}function i(e,t){void 0===t&&(t=!1);var n=o(e),i=r(e,t),a={left:n.left+i.borderLeft+i.scrollbarLeft,right:n.right-i.borderRight-i.scrollbarRight,top:n.top+i.borderTop,bottom:n.bottom-i.borderBottom-i.scrollbarBottom};return t&&(a.left+=i.paddingLeft,a.right-=i.paddingRight,a.top+=i.paddingTop,a.bottom-=i.paddingBottom),a}function o(e){var t=e.getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}function a(){return{left:window.pageXOffset,right:window.pageXOffset+document.documentElement.clientWidth,top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight}}function s(e){var t=window.getComputedStyle(e);return e.offsetHeight+parseInt(t.marginTop,10)+parseInt(t.marginBottom,10)}function l(e){for(var t=[];e instanceof HTMLElement;){var n=window.getComputedStyle(e);if("fixed"===n.position)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}function u(e){return l(e).map(function(e){return i(e)}).concat(a()).reduce(function(e,t){return d.intersectRects(e,t)||t})}Object.defineProperty(t,"__esModule",{value:!0});var d=n(32),c=n(187);t.computeEdges=r,t.computeInnerRect=i,t.computeRect=o,t.computeHeightAndMargins=s,t.getClippingParents=l,t.computeClippingRect=u},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),i=n(25),o=n(2),a=n(9),s=n(7),l=n(142),u=function(){function e(e,t,n){this._calendar=e,this._def=t,this._instance=n||null}return e.prototype.setProp=function(e,t){var n,o;if(e in r.DATE_PROPS);else if(e in r.NON_DATE_PROPS)"function"==typeof r.NON_DATE_PROPS[e]&&(t=r.NON_DATE_PROPS[e](t)),this.mutate({standardProps:(n={},n[e]=t,n)});else if(e in i.UNSCOPED_EVENT_UI_PROPS){var a=void 0;"function"==typeof i.UNSCOPED_EVENT_UI_PROPS[e]&&(t=i.UNSCOPED_EVENT_UI_PROPS[e](t)),"color"===e?a={backgroundColor:t,borderColor:t}:"editable"===e?a={startEditable:t,durationEditable:t}:(o={},o[e]=t,a=o),this.mutate({standardProps:{ui:a}})}},e.prototype.setExtendedProp=function(e,t){var n;this.mutate({extendedProps:(n={},n[e]=t,n)})},e.prototype.setStart=function(e,t){void 0===t&&(t={});var n=this._calendar.dateEnv,r=n.createMarker(e);if(r&&this._instance){var i=this._instance.range,s=o.diffDates(i.start,r,n,t.granularity),l=null;if(t.maintainDuration){var u=o.diffDates(i.start,i.end,n,t.granularity),d=o.diffDates(r,i.end,n,t.granularity);l=a.subtractDurations(u,d)}this.mutate({startDelta:s,endDelta:l})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={});var n,r=this._calendar.dateEnv;if((null==e||(n=r.createMarker(e)))&&this._instance)if(n){var i=o.diffDates(this._instance.range.end,n,r,t.granularity);this.mutate({endDelta:i})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,n){void 0===n&&(n={});var r,i=this._calendar.dateEnv,a={allDay:n.allDay},s=i.createMarker(e);if(s&&(null==t||(r=i.createMarker(t)))&&this._instance){var l=this._instance.range;!0===n.allDay&&(l=o.computeAlignedDayRange(l));var u=o.diffDates(l.start,s,i,n.granularity);if(r){var d=o.diffDates(l.end,r,i,n.granularity);this.mutate({startDelta:u,endDelta:d,standardProps:a})}else a.hasEnd=!1,this.mutate({startDelta:u,standardProps:a})}},e.prototype.moveStart=function(e){var t=a.createDuration(e);t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=a.createDuration(e);t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=a.createDuration(e);t&&this.mutate({startDelta:t,endDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={});var n={allDay:e},r=t.maintainDuration;null==r&&(r=this._calendar.opt("allDayMaintainDuration")),this._def.allDay!==e&&(n.hasEnd=r),this.mutate({standardProps:n})},e.prototype.formatRange=function(e){var t=this._calendar.dateEnv,n=this._instance,r=s.createFormatter(e,this._calendar.opt("defaultRangeSeparator"));return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,r,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,r,{forcedTzo:n.forcedStartTzo})},e.prototype.mutate=function(e){var t=this._def,n=this._instance;if(n){this._calendar.dispatch({type:"MUTATE_EVENTS",instanceId:n.instanceId,mutation:e,fromApi:!0});var r=this._calendar.state.eventStore;this._def=r.defs[t.defId],this._instance=r.instances[n.instanceId]}},e.prototype.remove=function(){this._calendar.dispatch({type:"REMOVE_EVENT_DEF",defId:this._def.defId})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId;return e?new l.default(this._calendar,this._calendar.state.eventSources[e]):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._calendar.dateEnv.toDate(this._instance.range.start):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._calendar.dateEnv.toDate(this._instance.range.end):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rendering",{get:function(){return this._def.rendering},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!0,configurable:!0}),e}();t.default=u},function(e,t,n){function r(e){var t,n;return function(){return t&&o.isArraysEqual(t,arguments)||(t=arguments,n=e.apply(this,arguments)),n}}function i(e,t){var n=null;return function(){var r=e.apply(this,arguments);return(null===n||n!==r&&!t(n,r))&&(n=r),n}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(57);t.memoize=r,t.memoizeOutput=i},,,function(e,t,n){function r(e,t,n){function r(){if(s){for(var e=0,n=l;e<n.length;e++){n[e].unrender()}t&&t.apply(a,s),s=null}}function o(){s&&i.isArraysEqual(s,arguments)||(r(),a=this,s=arguments,e.apply(this,arguments))}void 0===n&&(n=[]);var a,s,l=[];o.dependents=l,o.unrender=r;for(var u=0,d=n;u<d.length;u++){d[u].dependents.push(o)}return o}Object.defineProperty(t,"__esModule",{value:!0});var i=n(57);t.memoizeRendering=r},function(e,t,n){function r(e,t,n,r){var i,o,s,l,u=e.dateEnv;return t instanceof Date||"object"!=typeof t?i=t:(i=t.date,o=t.type,s=t.forceOff),i=u.createMarker(i),l={date:u.formatIso(i,{omitTime:!0}),type:o||"day"},"string"==typeof n&&(r=n,n=null),n=n?" "+a.attrsToStr(n):"",r=r||"",!s&&e.opt("navLinks")?"<a"+n+' data-goto="'+a.htmlEscape(JSON.stringify(l))+'">'+r+"</a>":"<span"+n+">"+r+"</span>"}function i(e){return e.opt("allDayHtml")||a.htmlEscape(e.opt("allDayText"))}function o(e,t,n,r){var i,o,a=n.calendar,u=n.view,d=n.theme,c=n.dateEnv,p=[];return l.rangeContainsMarker(t.activeRange,e)?(p.push("fc-"+s.DAY_IDS[e.getUTCDay()]),u.opt("monthMode")&&c.getMonth(e)!==c.getMonth(t.currentRange.start)&&p.push("fc-other-month"),i=s.startOfDay(a.getNow()),o=s.addDays(i,1),e<i?p.push("fc-past"):e>=o?p.push("fc-future"):(p.push("fc-today"),!0!==r&&p.push(d.getClass("today")))):p.push("fc-disabled-day"),p}Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),s=n(4),l=n(8);t.buildGotoAnchorHtml=r,t.getAllDayHtml=i,t.getDayClasses=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(34),o=n(8),a=n(61),s=n(3),l=n(42),u=n(16),d=function(e){function t(t,n,r){var i=e.call(this,t,r)||this;return i.needHitsDepth=0,i.el=n,i.isInteractable&&a.default.registerComponent(i),i}return r.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),s.removeElement(this.el),this.isInteractable&&a.default.unregisterComponent(this)},t.prototype.requestPrepareHits=function(){this.needHitsDepth++||this.prepareHits()},t.prototype.requestReleaseHits=function(){--this.needHitsDepth||this.releaseHits()},t.prototype.prepareHits=function(){},t.prototype.releaseHits=function(){},t.prototype.queryHit=function(e,t){return null},t.prototype.isInteractionValid=function(e){var t=this.calendar,n=this.props.dateProfile,r=e.mutatedEvents.instances;if(n)for(var i in r)if(!o.rangeContainsRange(n.validRange,r[i].range))return!1;return l.isInteractionValid(e,t)},t.prototype.isDateSelectionValid=function(e){var t=this.props.dateProfile;return!(t&&!o.rangeContainsRange(t.validRange,e.range))&&l.isDateSelectionValid(e,this.calendar)},t.prototype.publiclyTrigger=function(e,t){return this.calendar.publiclyTrigger(e,t)},t.prototype.publiclyTriggerAfterSizing=function(e,t){return this.calendar.publiclyTriggerAfterSizing(e,t)},t.prototype.hasPublicHandlers=function(e){return this.calendar.hasPublicHandlers(e)},
t.prototype.triggerRenderedSegs=function(e,t){var n=this.calendar;if(this.hasPublicHandlers("eventPositioned"))for(var r=0,i=e;r<i.length;r++){var o=i[r];this.publiclyTriggerAfterSizing("eventPositioned",[{event:new u.default(n,o.eventRange.def,o.eventRange.instance),isMirror:t,isStart:o.isStart,isEnd:o.isEnd,el:o.el,view:this}])}n.state.loadingLevel||(n.afterSizingTriggers._eventsPositioned=[null])},t.prototype.triggerWillRemoveSegs=function(e,t){for(var n=this.calendar,r=0,i=e;r<i.length;r++){var o=i[r];n.trigger("eventElRemove",o.el)}if(this.hasPublicHandlers("eventDestroy"))for(var a=0,s=e;a<s.length;a++){var o=s[a];this.publiclyTrigger("eventDestroy",[{event:new u.default(n,o.eventRange.def,o.eventRange.instance),isMirror:t,el:o.el,view:this}])}},t.prototype.isValidSegDownEl=function(e){return!(this.props.eventDrag||this.props.eventResize||s.elementClosest(e,".fc-mirror")||this.isInPopover(e))},t.prototype.isValidDateDownEl=function(e){var t=s.elementClosest(e,this.fgSegSelector);return(!t||t.classList.contains("fc-mirror"))&&!s.elementClosest(e,".fc-more")&&!s.elementClosest(e,"a[data-goto]")&&!this.isInPopover(e)},t.prototype.isInPopover=function(e){var t=s.elementClosest(e,".fc-popover");return t&&t!==this.el},t}(i.default);t.default=d,d.prototype.isInteractable=!1,d.prototype.useEventCenter=!0,d.prototype.fgSegSelector=".fc-event-container > *",d.prototype.bgSegSelector=".fc-bgevent:not(.fc-nonbusiness)"},,function(e,t,n){function r(e){e.preventDefault()}function i(e,t,n,r){function i(e){var t=s.elementClosest(e.target,n);t&&r.call(t,e,t)}return e.addEventListener(t,i),function(){e.removeEventListener(t,i)}}function o(e,t,n,r){var o;return i(e,"mouseover",t,function(e,t){if(t!==o){o=t,n(e,t);var i=function(e){o=null,r(e,t),t.removeEventListener("mouseleave",i)};t.addEventListener("mouseleave",i)}})}function a(e,t){var n=function(r){t(r),l.forEach(function(t){e.removeEventListener(t,n)})};l.forEach(function(t){e.addEventListener(t,n)})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3);t.preventDefault=r,t.listenBySelector=i,t.listenToHoverBySelector=o;var l=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"];t.whenTransitionDone=a},function(e,t,n){function r(e,n,r){var i=u.refineProps(e,t.UNSCOPED_EVENT_UI_PROPS,{},r),o=s.normalizeConstraint(i.constraint,n);return{startEditable:null!=i.startEditable?i.startEditable:i.editable,durationEditable:null!=i.durationEditable?i.durationEditable:i.editable,constraints:null!=o?[o]:[],overlap:i.overlap,allows:null!=i.allow?[i.allow]:[],backgroundColor:i.backgroundColor||i.color,borderColor:i.borderColor||i.color,textColor:i.textColor,classNames:i.classNames.concat(i.className)}}function i(e,n,i,o){var a={},s={};for(var l in t.UNSCOPED_EVENT_UI_PROPS){var d=e+u.capitaliseFirstLetter(l);a[l]=n[d],s[d]=!0}if("event"===e&&(a.editable=n.editable),o)for(var l in n)s[l]||(o[l]=n[l]);return r(a,i)}function o(e){return e.reduce(a,d)}function a(e,t){return{startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(42),l=n(11),u=n(2);t.UNSCOPED_EVENT_UI_PROPS={editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:null,overlap:null,allow:null,className:l.parseClassName,classNames:l.parseClassName,color:String,backgroundColor:String,borderColor:String,textColor:String},t.processUnscopedUiProps=r,t.processScopedUiProps=i;var d={startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]};t.combineEventUis=o},function(e,t,n){function r(e,t,n,r){var s=u(t,n),l={},d=p.parseRecurring(e,s,n.dateEnv,l);if(d){var c=i(l,t,d.allDay,Boolean(d.duration),n);return c.recurringDef={typeId:d.typeId,typeData:d.typeData,duration:d.duration},{def:c,instance:null}}var f={},h=a(e,s,n,f,r);if(h){var c=i(f,t,h.allDay,h.hasEnd,n);return{def:c,instance:o(c.defId,h.range,h.forcedStartTzo,h.forcedEndTzo)}}return null}function i(e,t,n,r,i){var o={},a=l(e,i,o);a.defId=String(g++),a.sourceId=t,a.allDay=n,a.hasEnd=r;for(var s=0,u=i.pluginSystem.hooks.eventDefParsers;s<u.length;s++){var d=u[s],c={};d(a,o,c),o=c}return a.extendedProps=h.__assign(o,a.extendedProps||{}),Object.freeze(a.ui.classNames),Object.freeze(a.extendedProps),a}function o(e,t,n,r){return{instanceId:String(g++),defId:e,range:t,forcedStartTzo:null==n?null:n,forcedEndTzo:null==r?null:r}}function a(e,t,n,r,i){var o,a,l=s(e,r),u=l.allDay,d=null,p=!1,f=null;if(o=n.dateEnv.createMarkerMeta(l.start))d=o.marker;else if(!i)return null;return null!=l.end&&(a=n.dateEnv.createMarkerMeta(l.end)),null==u&&(u=null!=t?t:(!o||o.isTimeUnspecified)&&(!a||a.isTimeUnspecified)),u&&d&&(d=c.startOfDay(d)),a&&(f=a.marker,u&&(f=c.startOfDay(f)),d&&f<=d&&(f=null)),f?p=!0:i||(p=n.opt("forceEventDuration")||!1,f=n.dateEnv.add(d,u?n.defaultAllDayEventDuration:n.defaultTimedEventDuration)),{allDay:u,hasEnd:p,range:{start:d,end:f},forcedStartTzo:o?o.forcedTzo:null,forcedEndTzo:a?a.forcedTzo:null}}function s(e,n){var r=d.refineProps(e,t.DATE_PROPS,{},n);return r.start=null!==r.start?r.start:r.date,delete r.date,r}function l(e,n,r){var i={},o=d.refineProps(e,t.NON_DATE_PROPS,{},i),a=f.processUnscopedUiProps(i,n,r);return o.publicId=o.id,delete o.id,o.ui=a,o}function u(e,t){var n=null;if(e){n=t.state.eventSources[e].allDayDefault}return null==n&&(n=t.opt("allDayDefault")),n}Object.defineProperty(t,"__esModule",{value:!0});var d=n(2),c=n(4),p=n(41),f=n(25),h=n(1);t.NON_DATE_PROPS={id:String,groupId:String,title:String,url:String,rendering:String,extendedProps:null},t.DATE_PROPS={start:null,date:null,end:null,allDay:null};var g=0;t.parseEvent=r,t.parseEventDef=i,t.createEventInstance=o},function(e,t,n){function r(e,t,n){(e[t]||(e[t]=[])).push(n)}function i(e,t,n){n?e[t]&&(e[t]=e[t].filter(function(e){return e!==n})):delete e[t]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(2),s=n(147),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.on=function(e,t){return r(this._handlers||(this._handlers={}),e,t),this},t.prototype.one=function(e,t){return r(this._oneHandlers||(this._oneHandlers={}),e,t),this},t.prototype.off=function(e,t){return this._handlers&&i(this._handlers,e,t),this._oneHandlers&&i(this._oneHandlers,e,t),this},t.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return this.triggerWith(e,this,t),this},t.prototype.triggerWith=function(e,t,n){return this._handlers&&a.applyAll(this._handlers[e],t,n),this._oneHandlers&&(a.applyAll(this._oneHandlers[e],t,n),delete this._oneHandlers[e]),this},t.prototype.hasHandlers=function(e){return this._handlers&&this._handlers[e]&&this._handlers[e].length||this._oneHandlers&&this._oneHandlers[e]&&this._oneHandlers[e].length},t}(s.default);t.default=l},function(e,t,n){function r(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&a.isDateSpansEqual(e.dateSpan,t.dateSpan)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(27),o=n(22),a=n(46),s=n(15),l=n(32),u=n(8),d=function(){function e(e,t){var n,r=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=r.dragging;r.initialHit=null,r.movingHit=null,r.finalHit=null,r.prepareHits(),r.processFirstCoord(e),r.initialHit||!r.requireInitial?(t.setIgnoreMove(!1),r.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){r.emitter.trigger("dragstart",e),r.handleMove(e,!0)},this.handleDragMove=function(e){r.emitter.trigger("dragmove",e),r.handleMove(e)},this.handlePointerUp=function(e){r.releaseHits(),r.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){r.movingHit&&r.emitter.trigger("hitupdate",null,!0,e),r.finalHit=r.movingHit,r.movingHit=null,r.emitter.trigger("dragend",e)},t instanceof o.default?this.droppableHash=(n={},n[t.uid]=t,n):this.droppableHash=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new i.default}return e.prototype.processFirstCoord=function(e){var t,n={left:e.pageX,top:e.pageY},r=n,i=e.subjectEl;i!==document&&(t=s.computeRect(i),r=l.constrainPoint(r,t));var o=this.initialHit=this.queryHit(r.left,r.top);if(o){if(this.useSubjectCenter&&t){var a=l.intersectRects(t,o.rect);a&&(r=l.getRectCenter(a))}this.coordAdjust=l.diffPoints(r,n)}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHit(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&r(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){var e=this.droppableHash;for(var t in e)e[t].requestPrepareHits()},e.prototype.releaseHits=function(){var e=this.droppableHash;for(var t in e)e[t].requestReleaseHits()},e.prototype.queryHit=function(e,t){var n=this.droppableHash,r=null;for(var i in n){var o=n[i],a=o.queryHit(e,t);!a||o.props.dateProfile&&!u.rangeContainsRange(o.props.dateProfile.activeRange,a.dateSpan.range)||r&&!(a.layer>r.layer)||(r=a)}return r},e}();t.default=d,t.isHitsEqual=r},function(e,t,n){function r(e){c.push(e)}function i(e){return c[e]}function o(e){return!c[e.sourceDefId].ignoreRange}function a(e,t){for(var n=c.length-1;n>=0;n--){var r=c[n],i=r.parseMeta(e);if(i)return s("object"==typeof e?e:{},i,n,t)}return null}function s(e,t,n,r){var i={},o=l.refineProps(e,d,{},i),a={},s=u.processUnscopedUiProps(i,r,a);return o.isFetching=!1,o.latestFetchId="",o.fetchRange=null,o.publicId=String(e.id||""),o.sourceId=String(p++),o.sourceDefId=n,o.meta=t,o.ui=s,o.extendedProps=a,o}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),u=n(25),d={id:String,allDayDefault:Boolean,eventDataTransform:Function,success:Function,failure:Function},c=[],p=0;t.registerEventSourceDef=r,t.getEventSourceDef=i,t.doesSourceNeedRange=o,t.parseEventSource=a},,,function(e,t){function n(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom}function r(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)};return n.left<n.right&&n.top<n.bottom&&n}function i(e,t){return{left:Math.min(Math.max(e.left,t.left),t.right),top:Math.min(Math.max(e.top,t.top),t.bottom)}}function o(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}}function a(e,t){return{left:e.left-t.left,top:e.top-t.top}}Object.defineProperty(t,"__esModule",{value:!0}),t.pointInsideRect=n,t.intersectRects=r,t.constrainPoint=i,t.getRectCenter=o,t.diffPoints=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(){function e(e){this.calendarOptions=e,this.processIconOverride()}return e.prototype.processIconOverride=function(){this.iconOverrideOption&&this.setIconOverride(this.calendarOptions[this.iconOverrideOption])},e.prototype.setIconOverride=function(e){var t,n;if("object"==typeof e&&e){t=r.__assign({},this.iconClasses);for(n in e)t[n]=this.applyIconOverridePrefix(e[n]);this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix;return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e){var t=this.iconClasses[e];return t?this.baseIconClass+" "+t:""},e.prototype.getCustomButtonIconClass=function(e){var t;return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}();t.default=i,i.prototype.classes={},i.prototype.iconClasses={},i.prototype.baseIconClass="",i.prototype.iconOverridePrefix=""},function(e,t,n){function r(e,t,n){var r={},i=!1;for(var o in t)o in e&&(e[o]===t[o]||n[o]&&n[o](e[o],t[o]))?r[o]=e[o]:(r[o]=t[o],i=!0);for(var o in e)if(!(o in t)){i=!0;break}return{anyChanges:i,comboProps:r}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=0,a=function(){function e(e,t){t&&(e.view=this),this.uid=String(o++),this.context=e,this.dateEnv=e.dateEnv,this.theme=e.theme,this.view=e.view,this.calendar=e.calendar,this.isRtl="rtl"===this.opt("dir")}return e.addEqualityFuncs=function(e){this.prototype.equalityFuncs=i.__assign({},this.prototype.equalityFuncs,e)},e.prototype.opt=function(e){return this.context.options[e]},e.prototype.receiveProps=function(e){var t=r(this.props||{},e,this.equalityFuncs),n=t.anyChanges,i=t.comboProps;this.props=i,n&&this.render(i)},e.prototype.render=function(e){},e.prototype.destroy=function(){},e}();t.default=a,a.prototype.equalityFuncs={}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(45),o=n(2),a=n(191),s=n(62),l=n(192),u=function(e){function t(t){var n=e.call(this)||this;n.delay=null,n.minDistance=0,n.touchScrollAllowed=!0,n.mirrorNeedsRevert=!1,n.isInteracting=!1,n.isDragging=!1,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,n.delayTimeoutId=null,n.onPointerDown=function(e){n.isDragging||(n.isInteracting=!0,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,o.preventSelection(document.body),o.preventContextMenu(document.body),e.isTouch||e.origEvent.preventDefault(),n.emitter.trigger("pointerdown",e),n.pointer.shouldIgnoreMove||(n.origX=e.pageX,n.origY=e.pageY,n.mirror.setIsVisible(!1),n.mirror.start(e.subjectEl,e.pageX,e.pageY),n.startDelay(e),n.minDistance||n.handleDistanceSurpassed(e)))},n.onPointerMove=function(e){if(n.isInteracting){if(n.emitter.trigger("pointermove",e),!n.isDistanceSurpassed){var t=e.pageX-n.origX,r=e.pageY-n.origY,i=n.minDistance,o=void 0;o=t*t+r*r,o>=i*i&&n.handleDistanceSurpassed(e)}n.isDragging&&("scroll"!==e.origEvent.type&&(n.mirror.handleMove(e.pageX,e.pageY),n.autoScroller.handleMove(e.pageX,e.pageY)),n.emitter.trigger("dragmove",e))}},n.onPointerUp=function(e){n.isInteracting&&(n.isInteracting=!1,o.allowSelection(document.body),o.allowContextMenu(document.body),n.emitter.trigger("pointerup",e),n.isDragging&&(n.autoScroller.stop(),n.tryStopDrag(e)),n.delayTimeoutId&&(clearTimeout(n.delayTimeoutId),n.delayTimeoutId=null))};var r=n.pointer=new i.default(t);return r.emitter.on("pointerdown",n.onPointerDown),r.emitter.on("pointermove",n.onPointerMove),r.emitter.on("pointerup",n.onPointerUp),n.mirror=new a.default,n.autoScroller=new l.default,n}return r.__extends(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout(function(){t.delayTimeoutId=null,t.handleDelayEnd(e)},this.delay):this.handleDelayEnd(e)},t.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},t.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},t.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},t.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},t.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},t.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},t.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},t}(s.default);t.default=u},function(e,t,n){function r(e){return i.mergeProps(e,o)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12);t.globalDefaults={defaultRangeSeparator:" - ",titleRangeSeparator:" – ",cmdFormatter:null,defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",columnHeader:!0,defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",timeZoneImpl:null,locale:"en",agendaEventMinHeight:0,theme:!1,dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",eventLimit:!1,eventLimitClick:"popover",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5},t.rtlDefaults={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}};var o=["header","footer","buttonText","buttonIcons","themeButtonIcons"];t.mergeOptions=r},function(e,t,n){function r(e){return{id:String(a++),deps:e.deps||[],reducers:e.reducers||[],eventDefParsers:e.eventDefParsers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],viewConfigs:e.viewConfigs||{},viewSpecTransformers:e.viewSpecTransformers||[],viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],eventResizeJoinTransforms:e.eventResizeJoinTransforms||[],viewContainerModifiers:e.viewContainerModifiers||[],eventDropTransformers:e.eventDropTransformers||[]}}function i(e,t){return{reducers:e.reducers.concat(t.reducers),eventDefParsers:e.eventDefParsers.concat(t.eventDefParsers),eventDragMutationMassagers:e.eventDragMutationMassagers.concat(t.eventDragMutationMassagers),eventDefMutationAppliers:e.eventDefMutationAppliers.concat(t.eventDefMutationAppliers),dateSelectionTransformers:e.dateSelectionTransformers.concat(t.dateSelectionTransformers),datePointTransforms:e.datePointTransforms.concat(t.datePointTransforms),dateSpanTransforms:e.dateSpanTransforms.concat(t.dateSpanTransforms),viewConfigs:o.__assign({},e.viewConfigs,t.viewConfigs),viewSpecTransformers:e.viewSpecTransformers.concat(t.viewSpecTransformers),viewPropsTransformers:e.viewPropsTransformers.concat(t.viewPropsTransformers),isPropsValid:t.isPropsValid||e.isPropsValid,externalDefTransforms:e.externalDefTransforms.concat(t.externalDefTransforms),eventResizeJoinTransforms:e.eventResizeJoinTransforms.concat(t.eventResizeJoinTransforms),viewContainerModifiers:e.viewContainerModifiers.concat(t.viewContainerModifiers),eventDropTransformers:e.eventDropTransformers.concat(t.eventDropTransformers)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=0;t.createPlugin=r;var s=function(){function e(){this.hooks={reducers:[],eventDefParsers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],viewConfigs:{},viewSpecTransformers:[],viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],eventResizeJoinTransforms:[],viewContainerModifiers:[],eventDropTransformers:[]},this.addedHash={}}return e.prototype.add=function(e){if(!this.addedHash[e.id]){this.addedHash[e.id]=!0;for(var t=0,n=e.deps;t<n.length;t++){var r=n[t];this.add(r)}this.hooks=i(this.hooks,e)}},e}();t.PluginSystem=s},,,,function(e,t,n){function r(e){s.push(e)}function i(e,t,n,r){for(var i=0;i<s.length;i++){var o=s[i].parse(e,t,r,n);if(o)return{allDay:o.allDay,duration:o.duration,typeData:o.typeData,typeId:i}}return null}function o(e,t,n){var r=s[e.recurringDef.typeId],i=r.expand(e.recurringDef.typeData,e,t,n);return e.allDay&&(i=i.map(a.startOfDay)),i}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),s=[];t.registerRecurringType=r,t.parseRecurring=i,t.expandRecurringRanges=o},function(e,t,n){function r(e,t){return o({eventDrag:e},t)}function i(e,t){return o({dateSelection:e},t)}function o(e,t){var n=t.view,r=h.__assign({businessHours:n?n.props.businessHours:g.createEmptyEventStore(),dateSelection:"",eventStore:t.state.eventStore,eventUiBases:t.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e);return(t.pluginSystem.hooks.isPropsValid||a)(r,t)}function a(e,t,n,r){return void 0===n&&(n={}),!(e.eventDrag&&!s(e,t,n,r))&&!(e.dateSelection&&!l(e,t,n,r))}function s(e,t,n,r){var i=e.eventDrag,o=i.mutatedEvents,a=o.defs,s=o.instances,l=y.compileEventUis(a,i.isEvent?e.eventUiBases:{"":t.selectionConfig});r&&(l=S.mapHash(l,r));var d=E.excludeInstances(e.eventStore,i.affectedEvents.instances),c=d.defs,p=d.instances,f=y.compileEventUis(c,e.eventUiBases);for(var g in s){var b=s[g],D=b.range,w=l[b.defId],T=a[b.defId];if(!u(w.constraints,D,d,e.businessHours,t))return!1;var R=t.opt("eventOverlap");"function"!=typeof R&&(R=null);for(var _ in p){var C=p[_];if(v.rangesIntersect(D,C.range)){if(!1===f[C.defId].overlap&&i.isEvent)return!1;if(!1===w.overlap)return!1;if(R&&!R(new m.default(t,c[C.defId],C),new m.default(t,T,b)))return!1}}for(var M=0,P=w.allows;M<P.length;M++){var I=P[M],O=e.eventStore.defs[T.defId],H=e.eventStore.instances[g],k=h.__assign({},n,{range:b.range,allDay:T.allDay});if(!I(t.buildDateSpanApi(k),new m.default(t,O,H)))return!1}}return!0}function l(e,t,n,r){var i=e.eventStore,o=i.defs,a=i.instances,s=e.dateSelection,l=s.range,d=t.selectionConfig;if(r&&(d=r(d)),!u(d.constraints,l,i,e.businessHours,t))return!1;var c=t.opt("selectOverlap");"function"!=typeof c&&(c=null);for(var p in a){var f=a[p];if(v.rangesIntersect(l,f.range)){if(!1===d.overlap)return!1;if(c&&!c(new m.default(t,o[f.defId],f)))return!1}}for(var g=0,y=d.allows;g<y.length;g++){var E=y[g],S=h.__assign({},n,s);if(!E(t.buildDateSpanApi(S),null))return!1}return!0}function u(e,t,n,r,i){for(var o=0,a=e;o<a.length;o++){if(!p(d(a[o],t,n,r,i),t))return!1}return!0}function d(e,t,n,r,i){return"businessHours"===e?c(g.expandRecurring(r,t,i)):"string"==typeof e?c(g.filterEventStoreDefs(n,function(t){return t.groupId===e})):"object"==typeof e&&e?c(g.expandRecurring(e,t,i)):[]}function c(e){var t=e.instances,n=[];for(var r in t)n.push(t[r].range);return n}function p(e,t){for(var n=0,r=e;n<r.length;n++){var i=r[n];if(v.rangeContainsRange(i,t))return!0}return!1}function f(e,t){return Array.isArray(e)?g.parseEvents(e,"",t,!0):"object"==typeof e&&e?g.parseEvents([e],"",t,!0):null!=e?String(e):null}Object.defineProperty(t,"__esModule",{value:!0});var h=n(1),g=n(14),v=n(8),m=n(16),y=n(10),E=n(143),S=n(12);t.isInteractionValid=r,t.isDateSelectionValid=i,t.isPropsValid=a,t.normalizeConstraint=f},function(e,t,n){function r(e,t,n,r){var o=p.compileEventUis(e.defs,t),s=u.createEmptyEventStore();for(var l in e.defs){var d=e.defs[l];s.defs[l]=i(d,o[l],n,r.pluginSystem.hooks.eventDefMutationAppliers,r)}for(var c in e.instances){var f=e.instances[c],d=s.defs[f.defId];s.instances[c]=a(f,d,o[f.defId],n,r)}return s}function i(e,t,n,r,i){var a=n.standardProps||{};null==a.hasEnd&&o(t.startEditable?n.startDelta:null,t.durationEditable?n.endDelta:null)&&(a.hasEnd=!0);var l=s.__assign({},e,a,{ui:s.__assign({},e.ui,a.ui)});n.extendedProps&&(l.extendedProps=s.__assign({},l.extendedProps,n.extendedProps));for(var u=0,d=r;u<d.length;u++){(0,d[u])(l,n,i)}return!l.hasEnd&&i.opt("forceEventDuration")&&(l.hasEnd=!0),l}function o(e,t){return e&&!l.asRoughMs(e)&&(e=null),t&&!l.asRoughMs(t)&&(t=null),!(!e&&!t)&&(Boolean(e)!==Boolean(t)||!l.durationsEqual(e,t))}function a(e,t,n,r,i){var o=i.dateEnv,a=r.standardProps&&!0===r.standardProps.allDay,l=r.standardProps&&!1===r.standardProps.hasEnd,u=s.__assign({},e);return a&&(u.range=d.computeAlignedDayRange(u.range)),r.startDelta&&n.startEditable&&(u.range={start:o.add(u.range.start,r.startDelta),end:u.range.end}),l?u.range={start:u.range.start,end:i.getDefaultEventEnd(t.allDay,u.range.start)}:r.endDelta&&n.durationEditable&&(u.range={start:u.range.start,end:o.add(u.range.end,r.endDelta)}),t.allDay&&(u.range={start:c.startOfDay(u.range.start),end:c.startOfDay(u.range.end)}),u.range.end<u.range.start&&(u.range.end=i.getDefaultEventEnd(t.allDay,u.range.start)),u}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),l=n(9),u=n(14),d=n(2),c=n(4),p=n(10);t.applyMutationToEventStore=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(15),o=n(3),a=n(150),s=function(e){function t(t,n){var r=e.call(this,o.createElement("div",{className:"fc-scroller"}))||this;return r.overflowX=t,r.overflowY=n,r.applyOverflow(),r}return r.__extends(t,e),t.prototype.clear=function(){this.setHeight("auto"),this.applyOverflow()},t.prototype.destroy=function(){o.removeElement(this.el)},t.prototype.applyOverflow=function(){o.applyStyle(this.el,{overflowX:this.overflowX,overflowY:this.overflowY})},t.prototype.lockOverflow=function(e){var t=this.overflowX,n=this.overflowY;e=e||this.getScrollbarWidths(),"auto"===t&&(t=e.bottom||this.canScrollHorizontally()?"scroll":"hidden"),"auto"===n&&(n=e.left||e.right||this.canScrollVertically()?"scroll":"hidden"),o.applyStyle(this.el,{overflowX:t,overflowY:n})},t.prototype.setHeight=function(e){o.applyStyleProp(this.el,"height",e)},t.prototype.getScrollbarWidths=function(){var e=i.computeEdges(this.el);return{left:e.scrollbarLeft,right:e.scrollbarRight,bottom:e.scrollbarBottom}},t}(a.ElementScrollController);t.default=s},function(e,t,n){function r(e,t){return{origEvent:e,isTouch:!1,subjectEl:t,pageX:e.pageX,pageY:e.pageY}}function i(e,t){var n,r,i=e.touches;return i&&i.length?(n=i[0].pageX,r=i[0].pageY):(n=e.pageX,r=e.pageY),{origEvent:e,isTouch:!0,subjectEl:t,pageX:n,pageY:r}}function o(e){return 0===e.button&&!e.ctrlKey}function a(){f++,setTimeout(function(){f--},d.touchMouseIgnoreWait)}function s(){h++||window.addEventListener("touchmove",u,{passive:!1})}function l(){--h||window.removeEventListener("touchmove",u,{passive:!1})}function u(e){g&&e.preventDefault()}Object.defineProperty(t,"__esModule",{value:!0});var d=n(56),c=n(3),p=n(27);d.touchMouseIgnoreWait=500;var f=0,h=0,g=!1,v=function(){function e(e){var t=this;this.subjectEl=null,this.downEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!t.shouldIgnoreMouse()&&o(e)&&t.tryStart(e)){var n=r(e,t.subjectEl);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n),t.shouldIgnoreMove||document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("mouseup",t.handleMouseUp)}},this.handleMouseMove=function(e){var n=r(e,t.subjectEl);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",t.handleMouseMove),document.removeEventListener("mouseup",t.handleMouseUp),t.emitter.trigger("pointerup",r(e,t.subjectEl)),t.cleanup()},this.handleTouchStart=function(e){if(t.tryStart(e)){t.isTouchDragging=!0;var n=i(e,t.subjectEl);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n);var r=e.target;t.shouldIgnoreMove||r.addEventListener("touchmove",t.handleTouchMove),r.addEventListener("touchend",t.handleTouchEnd),r.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("scroll",t.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var n=i(e,t.subjectEl);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleTouchEnd=function(e){if(t.isDragging){var n=e.target;n.removeEventListener("touchmove",t.handleTouchMove),n.removeEventListener("touchend",t.handleTouchEnd),n.removeEventListener("touchcancel",t.handleTouchEnd),window.removeEventListener("scroll",t.handleTouchScroll,!0),t.emitter.trigger("pointerup",i(e,t.subjectEl)),t.cleanup(),t.isTouchDragging=!1,a()}},this.handleTouchScroll=function(){t.wasTouchScroll=!0},this.handleScroll=function(e){t.shouldIgnoreMove||t.emitter.trigger("pointermove",{origEvent:e,isTouch:t.isTouchDragging,subjectEl:t.subjectEl,pageX:window.pageXOffset-t.prevScrollX+t.prevPageX,pageY:window.pageYOffset-t.prevScrollY+t.prevPageY})},this.containerEl=e,this.emitter=new p.default,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),s()}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),l()},e.prototype.tryStart=function(e){var t=this.querySubjectEl(e),n=e.target;return!(!t||this.handleSelector&&!c.elementClosest(n,this.handleSelector))&&(this.subjectEl=t,this.downEl=n,this.isDragging=!0,this.wasTouchScroll=!1,!0)},e.prototype.cleanup=function(){g=!1,this.isDragging=!1,this.subjectEl=null,this.downEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?c.elementClosest(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return f||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(g=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e}();t.default=v},function(e,t,n){function r(e,t,n){var r=i(e,t),o=r.range;if(!o.start)return null;if(!o.end){if(null==n)return null;o.end=t.add(o.start,n)}return r}function i(e,t){var n={},r=c.refineProps(e,h,{},n),i=r.start?t.createMarkerMeta(r.start):null,o=r.end?t.createMarkerMeta(r.end):null,a=r.allDay;return null==a&&(a=i&&i.isTimeUnspecified&&(!o||o.isTimeUnspecified)),n.range={start:i?i.marker:null,end:o?o.marker:null},n.allDay=a,n}function o(e,t){return d.rangesEqual(e.range,t.range)&&e.allDay===t.allDay&&a(e,t)}function a(e,t){for(var n in t)if("range"!==n&&"allDay"!==n&&e[n]!==t[n])return!1;for(var n in e)if(!(n in t))return!1;return!0}function s(e,t){return{start:t.toDate(e.range.start),end:t.toDate(e.range.end),startStr:t.formatIso(e.range.start,{omitTime:e.allDay}),endStr:t.formatIso(e.range.end,{omitTime:e.allDay}),allDay:e.allDay}}function l(e,t){return{date:t.toDate(e.range.start),dateStr:t.formatIso(e.range.start,{omitTime:e.allDay}),allDay:e.allDay}}function u(e,t,n){var r=p.parseEventDef({editable:!1},"",e.allDay,!0,n);return{def:r,ui:f.compileEventUi(r,t),instance:p.createEventInstance(r.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}Object.defineProperty(t,"__esModule",{value:!0});var d=n(8),c=n(2),p=n(26),f=n(10),h={start:null,end:null,allDay:Boolean};t.parseDateSpan=r,t.parseOpenDateSpan=i,t.isDateSpansEqual=o,t.buildDateSpanApi=s,t.buildDatePointApi=l,t.fabricateEventRange=u},function(e,t,n){function r(e){"auto"===e&&(e=null);var t;t=Array.isArray(e)?e:"string"==typeof e?[e]:[];var n=i(t)||{},r=s.mergeProps([l,n],["buttonText"]),o=r.week;return delete r.week,{codeArg:e,codes:t,week:o,simpleNumberFormat:new Intl.NumberFormat(e),options:r}}function i(e){for(var t=0;t<e.length;t++)for(var n=e[t].toLocaleLowerCase().split("-"),r=n.length;r>0;r--){
var i=n.slice(0,r).join("-");if(u[i])return u[i]}return null}function o(e,t){u[e]=t}function a(){return Object.keys(u)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(12),l={week:{dow:0,doy:4},dir:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekLabel:"W",allDayText:"all-day",eventLimitText:"more",noEventsMessage:"No events to display"},u={};t.getLocale=r,t.defineLocale=o,t.getLocaleCodes=a,o("en",l)},function(e,t,n){function r(e,t){return a.rangesEqual(e.activeRange,t.activeRange)&&a.rangesEqual(e.validRange,t.validRange)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=n(9),a=n(8),s=function(){function e(e,t){this.viewSpec=e,this.options=e.options,this.dateEnv=t.dateEnv,this.calendar=t,this.initHiddenDays()}return e.prototype.buildPrev=function(e){var t=this.dateEnv,n=t.subtract(e.currentRange.start,e.dateIncrement);return this.build(n,-1)},e.prototype.buildNext=function(e){var t=this.dateEnv,n=t.add(e.currentRange.start,e.dateIncrement);return this.build(n,1)},e.prototype.build=function(e,t,n){void 0===n&&(n=!1);var r,i,s,l,u,d,c=null,p=null;return r=this.buildValidRange(),r=this.trimHiddenDays(r),n&&(e=a.constrainMarkerToRange(e,r)),i=this.buildCurrentRangeInfo(e,t),s=/^(year|month|week|day)$/.test(i.unit),l=this.buildRenderRange(this.trimHiddenDays(i.range),i.unit,s),l=this.trimHiddenDays(l),u=l,this.options.showNonCurrentDates||(u=a.intersectRanges(u,i.range)),c=o.createDuration(this.options.minTime),p=o.createDuration(this.options.maxTime),u=this.adjustActiveRange(u,c,p),u=a.intersectRanges(u,r),d=a.rangesIntersect(i.range,r),{validRange:r,currentRange:i.range,currentRangeUnit:i.unit,isRangeAllDay:s,activeRange:u,renderRange:l,minTime:c,maxTime:p,isValid:d,dateIncrement:this.buildDateIncrement(i.duration)}},e.prototype.buildValidRange=function(){return this.getRangeOption("validRange",this.calendar.getNow())||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var n,r=this,i=r.viewSpec,a=r.dateEnv,s=null,l=null,u=null;return i.duration?(s=i.duration,l=i.durationUnit,u=this.buildRangeFromDuration(e,t,s,l)):(n=this.options.dayCount)?(l="day",u=this.buildRangeFromDayCount(e,t,n)):(u=this.buildCustomVisibleRange(e))?l=a.greatestWholeUnit(u.start,u.end).unit:(s=this.getFallbackDuration(),l=o.greatestDurationDenominator(s).unit,u=this.buildRangeFromDuration(e,t,s,l)),{duration:s,unit:l,range:u}},e.prototype.getFallbackDuration=function(){return o.createDuration({day:1})},e.prototype.adjustActiveRange=function(e,t,n){var r=this.dateEnv,a=e.start,s=e.end;return this.viewSpec.class.prototype.usesMinMaxTime&&(o.asRoughDays(t)<0&&(a=i.startOfDay(a),a=r.add(a,t)),o.asRoughDays(n)>1&&(s=i.startOfDay(s),s=i.addDays(s,-1),s=r.add(s,n))),{start:a,end:s}},e.prototype.buildRangeFromDuration=function(e,t,n,r){function a(){u=p.startOf(e,f),d=p.add(u,n),c={start:u,end:d}}var s,l,u,d,c,p=this.dateEnv,f=this.options.dateAlignment;return f||(s=this.options.dateIncrement,s?(l=o.createDuration(s),f=o.asRoughMs(l)<o.asRoughMs(n)?o.greatestDurationDenominator(l,!o.getWeeksFromInput(s)).unit:r):f=r),o.asRoughDays(n)<=1&&this.isHiddenDay(u)&&(u=this.skipHiddenDays(u,t),u=i.startOfDay(u)),a(),this.trimHiddenDays(c)||(e=this.skipHiddenDays(e,t),a()),c},e.prototype.buildRangeFromDayCount=function(e,t,n){var r,o=this.dateEnv,a=this.options.dateAlignment,s=0,l=e;a&&(l=o.startOf(l,a)),l=i.startOfDay(l),l=this.skipHiddenDays(l,t),r=l;do{r=i.addDays(r,1),this.isHiddenDay(r)||s++}while(s<n);return{start:l,end:r}},e.prototype.buildCustomVisibleRange=function(e){var t=this.dateEnv,n=this.getRangeOption("visibleRange",t.toDate(e));return!n||null!=n.start&&null!=n.end?n:null},e.prototype.buildRenderRange=function(e,t,n){return e},e.prototype.buildDateIncrement=function(e){var t,n=this.options.dateIncrement;return n?o.createDuration(n):(t=this.options.dateAlignment)?o.createDuration(1,t):e||o.createDuration({days:1})},e.prototype.getRangeOption=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=this.options[e];if("function"==typeof r&&(r=r.apply(null,t)),r)return a.parseRange(r,this.dateEnv)},e.prototype.initHiddenDays=function(){var e,t=this.options.hiddenDays||[],n=[],r=0;for(!1===this.options.weekends&&t.push(0,6),e=0;e<7;e++)(n[e]=-1!==t.indexOf(e))||r++;if(!r)throw new Error("invalid hiddenDays");this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(e){var t=e.start,n=e.end;return t&&(t=this.skipHiddenDays(t)),n&&(n=this.skipHiddenDays(n,-1,!0)),null==t||null==n||t<n?{start:t,end:n}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,n){for(void 0===t&&(t=1),void 0===n&&(n=!1);this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=i.addDays(e,t);return e},e}();t.default=s,t.isDateProfilesEqual=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),o=n(48),a=n(4),s=n(9),l=n(27),u=n(3),d=n(22),c=n(10),p=n(20),f=n(1),h=function(e){function t(t,n,r,o){var a=e.call(this,t,u.createElement("div",{className:"fc-view fc-"+n.type+"-view"}),!0)||this;return a.renderDatesMem=p.memoizeRendering(a.renderDatesWrap,a.unrenderDatesWrap),a.renderBusinessHoursMem=p.memoizeRendering(a.renderBusinessHours,a.unrenderBusinessHours,[a.renderDatesMem]),a.renderDateSelectionMem=p.memoizeRendering(a.renderDateSelectionWrap,a.unrenderDateSelectionWrap,[a.renderDatesMem]),a.renderEventsMem=p.memoizeRendering(a.renderEvents,a.unrenderEvents,[a.renderDatesMem]),a.renderEventSelectionMem=p.memoizeRendering(a.renderEventSelectionWrap,a.unrenderEventSelectionWrap,[a.renderEventsMem]),a.renderEventDragMem=p.memoizeRendering(a.renderEventDragWrap,a.unrenderEventDragWrap,[a.renderDatesMem]),a.renderEventResizeMem=p.memoizeRendering(a.renderEventResizeWrap,a.unrenderEventResizeWrap,[a.renderDatesMem]),a.viewSpec=n,a.dateProfileGenerator=r,a.type=n.type,a.eventOrderSpecs=i.parseFieldSpecs(a.opt("eventOrder")),a.nextDayThreshold=s.createDuration(a.opt("nextDayThreshold")),o.appendChild(a.el),a.initialize(),a}return r.__extends(t,e),t.prototype.initialize=function(){},Object.defineProperty(t.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.activeRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.activeRange.end)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.currentRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.currentRange.end)},enumerable:!0,configurable:!0}),t.prototype.render=function(e){this.renderDatesMem(e.dateProfile),this.renderBusinessHoursMem(e.businessHours),this.renderDateSelectionMem(e.dateSelection),this.renderEventsMem(e.eventStore),this.renderEventSelectionMem(e.eventSelection),this.renderEventDragMem(e.eventDrag),this.renderEventResizeMem(e.eventResize)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderDatesMem.unrender()},t.prototype.updateSize=function(e,t,n){var r=this.calendar;(e||r.isViewUpdated||r.isDatesUpdated||r.isEventsUpdated)&&this.updateBaseSize(e,t,n)},t.prototype.updateBaseSize=function(e,t,n){},t.prototype.renderDatesWrap=function(e){this.renderDates(e),this.addScroll({isDateInit:!0}),this.startNowIndicator(e)},t.prototype.unrenderDatesWrap=function(){this.stopNowIndicator(),this.unrenderDates()},t.prototype.renderDates=function(e){},t.prototype.unrenderDates=function(){},t.prototype.renderBusinessHours=function(e){},t.prototype.unrenderBusinessHours=function(){},t.prototype.renderDateSelectionWrap=function(e){e&&this.renderDateSelection(e)},t.prototype.unrenderDateSelectionWrap=function(e){e&&this.unrenderDateSelection(e)},t.prototype.renderDateSelection=function(e){},t.prototype.unrenderDateSelection=function(e){},t.prototype.renderEvents=function(e){},t.prototype.unrenderEvents=function(){},t.prototype.sliceEvents=function(e,t){var n=this.props;return c.sliceEventStore(e,n.eventUiBases,n.dateProfile.activeRange,t?this.nextDayThreshold:null).fg},t.prototype.renderEventSelectionWrap=function(e){e&&this.renderEventSelection(e)},t.prototype.unrenderEventSelectionWrap=function(e){e&&this.unrenderEventSelection(e)},t.prototype.renderEventSelection=function(e){},t.prototype.unrenderEventSelection=function(e){},t.prototype.renderEventDragWrap=function(e){e&&this.renderEventDrag(e)},t.prototype.unrenderEventDragWrap=function(e){e&&this.unrenderEventDrag(e)},t.prototype.renderEventDrag=function(e){},t.prototype.unrenderEventDrag=function(e){},t.prototype.renderEventResizeWrap=function(e){e&&this.renderEventResize(e)},t.prototype.unrenderEventResizeWrap=function(e){e&&this.unrenderEventResize(e)},t.prototype.renderEventResize=function(e){},t.prototype.unrenderEventResize=function(e){},t.prototype.startNowIndicator=function(e){var t,n,r,i=this,o=this.dateEnv;this.opt("nowIndicator")&&(t=this.getNowIndicatorUnit(e))&&(n=this.updateNowIndicator.bind(this),this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=(new Date).valueOf(),r=o.add(o.startOf(this.initialNowDate,t),s.createDuration(1,t)).valueOf()-this.initialNowDate.valueOf(),this.nowIndicatorTimeoutID=setTimeout(function(){i.nowIndicatorTimeoutID=null,n(),r="second"===t?1e3:6e4,i.nowIndicatorIntervalID=setInterval(n,r)},r))},t.prototype.updateNowIndicator=function(){this.props.dateProfile&&this.initialNowDate&&(this.unrenderNowIndicator(),this.renderNowIndicator(a.addMs(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs)),this.isNowIndicatorRendered=!0)},t.prototype.stopNowIndicator=function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearInterval(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},t.prototype.getNowIndicatorUnit=function(e){},t.prototype.renderNowIndicator=function(e){},t.prototype.unrenderNowIndicator=function(){},t.prototype.addScroll=function(e){var t=this.queuedScroll||(this.queuedScroll={});f.__assign(t,e)},t.prototype.popScroll=function(){this.applyQueuedScroll(),this.queuedScroll=null},t.prototype.applyQueuedScroll=function(){this.applyScroll(this.queuedScroll||{})},t.prototype.queryScroll=function(){var e={};return this.props.dateProfile&&f.__assign(e,this.queryDateScroll()),e},t.prototype.applyScroll=function(e){e.isDateInit&&(delete e.isDateInit,this.props.dateProfile&&f.__assign(e,this.computeInitialDateScroll())),this.props.dateProfile&&this.applyDateScroll(e)},t.prototype.computeInitialDateScroll=function(){return{}},t.prototype.queryDateScroll=function(){return{}},t.prototype.applyDateScroll=function(e){},t}(d.default);t.default=h,l.default.mixInto(h),h.prototype.usesMinMaxTime=!1,h.prototype.dateProfileGeneratorClass=o.default},function(e,t,n){function r(e){var t=e.eventRange.def,n=e.eventRange.instance.range,r=n.start?n.start.valueOf():0,o=n.end?n.end.valueOf():0;return i.__assign({},t.extendedProps,t,{id:t.publicId,start:r,end:o,duration:o-r,allDay:Number(t.allDay),_seg:e})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(7),a=n(3),s=n(2),l=n(10),u=function(){function e(e){this.segs=[],this.isSizeDirty=!1,this.context=e}return e.prototype.renderSegs=function(e,t){this.rangeUpdated(),e=this.renderSegEls(e,t),this.segs=e,this.attachSegs(e,t),this.isSizeDirty=!0,this.context.view.triggerRenderedSegs(this.segs,Boolean(t))},e.prototype.unrender=function(e,t){this.context.view.triggerWillRemoveSegs(this.segs,Boolean(t)),this.detachSegs(this.segs),this.segs=[]},e.prototype.rangeUpdated=function(){var e,t,n=this.context.options;this.eventTimeFormat=o.createFormatter(n.eventTimeFormat||this.computeEventTimeFormat(),n.defaultRangeSeparator),e=n.displayEventTime,null==e&&(e=this.computeDisplayEventTime()),t=n.displayEventEnd,null==t&&(t=this.computeDisplayEventEnd()),this.displayEventTime=e,this.displayEventEnd=t},e.prototype.renderSegEls=function(e,t){var n,r="";if(e.length){for(n=0;n<e.length;n++)r+=this.renderSegHtml(e[n],t);a.htmlToElements(r).forEach(function(t,n){var r=e[n];t&&(r.el=t)}),e=l.filterSegsViaEls(this.context.view,e,Boolean(t))}return e},e.prototype.getSegClasses=function(e,t,n,r){var i=["fc-event",e.isStart?"fc-start":"fc-not-start",e.isEnd?"fc-end":"fc-not-end"].concat(e.eventRange.ui.classNames);return t&&i.push("fc-draggable"),n&&i.push("fc-resizable"),r&&(i.push("fc-mirror"),r.isDragging&&i.push("fc-dragging"),r.isResizing&&i.push("fc-resizing")),i},e.prototype.getTimeText=function(e,t,n){var r=e.def,i=e.instance;return this._getTimeText(i.range.start,r.hasEnd?i.range.end:null,r.allDay,t,n,i.forcedStartTzo,i.forcedEndTzo)},e.prototype._getTimeText=function(e,t,n,r,i,o,a){var s=this.context.dateEnv;return null==r&&(r=this.eventTimeFormat),null==i&&(i=this.displayEventEnd),this.displayEventTime&&!n?i&&t?s.formatRange(e,t,r,{forcedStartTzo:o,forcedEndTzo:a}):s.format(e,r,{forcedTzo:o}):""},e.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0}},e.prototype.computeDisplayEventTime=function(){return!0},e.prototype.computeDisplayEventEnd=function(){return!0},e.prototype.getSkinCss=function(e){return{"background-color":e.backgroundColor,"border-color":e.borderColor,color:e.textColor}},e.prototype.sortEventSegs=function(e){var t=this.context.view.eventOrderSpecs,n=e.map(r);return n.sort(function(e,n){return s.compareByFieldSpecs(e,n,t)}),n.map(function(e){return e._seg})},e.prototype.computeSizes=function(e){(e||this.isSizeDirty)&&this.computeSegSizes(this.segs)},e.prototype.assignSizes=function(e){(e||this.isSizeDirty)&&(this.assignSegSizes(this.segs),this.isSizeDirty=!1)},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e.prototype.hideByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="hidden")}},e.prototype.showByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="")}},e.prototype.selectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t],i=r.eventRange.instance;i&&i.instanceId===e&&r.el&&r.el.classList.add("fc-selected")}},e.prototype.unselectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];r.el&&r.el.classList.remove("fc-selected")}},e}();t.default=u,t.buildSegCompareObj=r},function(e,t,n){function r(e){var t=e.tagName;return"HTML"===t||"BODY"===t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),o=n(32),a=n(151),s=function(){function e(e){var t=i.computeRect(e);this.origLeft=t.left,this.origTop=t.top,this.origRight=t.right,this.origBottom=t.bottom,this.scrollCaches=i.getClippingParents(e).map(function(e){return new a.ElementScrollGeomCache(e,!0)})}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}},e.prototype.computeLeft=function(){for(var e=this.origLeft,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollLeft-r.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origTop,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollTop-r.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,t){for(var n={left:e,top:t},i=0,a=this.scrollCaches;i<a.length;i++){var s=a[i];if(!r(s.getEventTarget())&&!o.pointInsideRect(n,s.clientRect))return!1}return!0},e}();t.default=s},,,,,function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.version="4.0.0-alpha.4",t.internalApiVersion=12;var r=n(186);t.OptionsInput=r.OptionsInput;var i=n(26);t.EventInput=i.EventInput,t.EventDef=i.EventDef,t.EventDefHash=i.EventDefHash,t.EventInstance=i.EventInstance,t.EventInstanceHash=i.EventInstanceHash;var o=n(144);t.BusinessHoursInput=o.BusinessHoursInput,t.parseBusinessHours=o.parseBusinessHours;var a=n(2);t.applyAll=a.applyAll,t.debounce=a.debounce,t.padStart=a.padStart,t.isInt=a.isInt,t.capitaliseFirstLetter=a.capitaliseFirstLetter,t.parseFieldSpecs=a.parseFieldSpecs,t.compareByFieldSpecs=a.compareByFieldSpecs,t.compareByFieldSpec=a.compareByFieldSpec,t.flexibleCompare=a.flexibleCompare,t.log=a.log,t.warn=a.warn,t.computeVisibleDayRange=a.computeVisibleDayRange;var s=n(11);t.htmlEscape=s.htmlEscape,t.cssToStr=s.cssToStr;var l=n(57);t.removeExact=l.removeExact,t.isArraysEqual=l.isArraysEqual;var u=n(17);t.memoize=u.memoize,t.memoizeOutput=u.memoizeOutput;var d=n(20);t.memoizeRendering=d.memoizeRendering,t.MemoizedRendering=d.MemoizedRendering;var c=n(32);t.intersectRects=c.intersectRects;var p=n(12);t.isPropsEqual=p.isPropsEqual,t.mapHash=p.mapHash,t.filterHash=p.filterHash;var f=n(3);t.findElements=f.findElements,t.findChildren=f.findChildren,t.htmlToElement=f.htmlToElement,t.createElement=f.createElement,t.insertAfterElement=f.insertAfterElement,t.prependToElement=f.prependToElement,t.removeElement=f.removeElement,t.appendToElement=f.appendToElement,t.applyStyle=f.applyStyle,t.applyStyleProp=f.applyStyleProp,t.elementMatches=f.elementMatches,t.forceClassName=f.forceClassName;var h=n(14);t.EventStore=h.EventStore,t.filterEventStoreDefs=h.filterEventStoreDefs,t.createEmptyEventStore=h.createEmptyEventStore,t.mergeEventStores=h.mergeEventStores;var g=n(25);t.EventUiHash=g.EventUiHash,t.EventUi=g.EventUi,t.processScopedUiProps=g.processScopedUiProps,t.combineEventUis=g.combineEventUis;var v=n(145);t.Splitter=v.default,t.SplittableProps=v.SplittableProps;var m=n(21);t.buildGotoAnchorHtml=m.buildGotoAnchorHtml,t.getAllDayHtml=m.getAllDayHtml,t.getDayClasses=m.getDayClasses;var y=n(24);t.preventDefault=y.preventDefault,t.listenBySelector=y.listenBySelector,t.whenTransitionDone=y.whenTransitionDone;var E=n(15);t.computeInnerRect=E.computeInnerRect,t.computeEdges=E.computeEdges,t.computeHeightAndMargins=E.computeHeightAndMargins,t.getClippingParents=E.getClippingParents;var S=n(146);t.unpromisify=S.unpromisify;var b=n(27);t.EmitterMixin=b.default,t.EmitterInterface=b.EmitterInterface;var D=n(8);t.DateRange=D.DateRange,t.rangeContainsMarker=D.rangeContainsMarker,t.intersectRanges=D.intersectRanges,t.rangesEqual=D.rangesEqual,t.rangesIntersect=D.rangesIntersect;var w=n(59);t.defineThemeSystem=w.defineThemeSystem;var T=n(147);t.Mixin=T.default;var R=n(60);t.PositionCache=R.default;var _=n(44);t.ScrollComponent=_.default,t.ScrollbarWidths=_.ScrollbarWidths;var C=n(33);t.Theme=C.default;var M=n(34);t.Component=M.default,t.ComponentContext=M.ComponentContext;var P=n(22);t.DateComponent=P.default,t.Seg=P.Seg,t.EventSegUiInteractionState=P.EventSegUiInteractionState;var I=n(154);t.Calendar=I.default,t.DatePointTransform=I.DatePointTransform,t.DateSpanTransform=I.DateSpanTransform;var O=n(49);t.View=O.default,t.ViewProps=O.ViewProps;var H=n(50);t.FgEventRenderer=H.default;var k=n(64);t.FillRenderer=k.default;var x=n(160);t.AgendaView=x.default,t.buildAgendaDayTable=x.buildDayTable;var z=n(161);t.AbstractAgendaView=z.default;var N=n(170);t.AbstractBasicView=N.default;var L=n(162);t.TimeGrid=L.default,t.TimeGridSeg=L.TimeGridSeg;var A=n(169);t.TimeGridSlicer=A.TimeGridSlicer,t.buildDayRanges=A.buildDayRanges;var j=n(69);t.DayGridSlicer=j.DayGridSlicer;var V=n(65);t.DayGrid=V.default,t.DayGridSeg=V.DayGridSeg;var U=n(171);t.BasicView=U.default,t.buildBasicDayTable=U.buildDayTable;var B=n(172);t.ListView=B.default;var F=n(48);t.DateProfileGenerator=F.default,t.DateProfile=F.DateProfile;var G=n(158);t.ViewDef=G.ViewDef;var W=n(157);t.ViewSpec=W.ViewSpec,t.ViewSpecTransformer=W.ViewSpecTransformer;var Y=n(46);t.DateSpan=Y.DateSpan,t.DateSpanApi=Y.DateSpanApi,t.DatePointApi=Y.DatePointApi;var q=n(4);t.DateMarker=q.DateMarker,t.addDays=q.addDays,t.startOfDay=q.startOfDay,t.addMs=q.addMs,t.diffWholeWeeks=q.diffWholeWeeks,t.diffWholeDays=q.diffWholeDays,t.diffDayAndTime=q.diffDayAndTime,t.isValidDate=q.isValidDate;var Z=n(9);t.Duration=Z.Duration,t.createDuration=Z.createDuration,t.isSingleDay=Z.isSingleDay,t.multiplyDuration=Z.multiplyDuration,t.addDurations=Z.addDurations,t.asRoughMinutes=Z.asRoughMinutes,t.asRoughSeconds=Z.asRoughSeconds,t.asRoughMs=Z.asRoughMs,t.wholeDivideDurations=Z.wholeDivideDurations,t.greatestDurationDenominator=Z.greatestDurationDenominator;var X=n(63);t.DateEnv=X.DateEnv,t.DateMarkerMeta=X.DateMarkerMeta;var K=n(47);t.defineLocale=K.defineLocale,t.getLocale=K.getLocale,t.getLocaleCodes=K.getLocaleCodes;var J=n(7);t.DateFormatter=J.DateFormatter,t.createFormatter=J.createFormatter,t.VerboseFormattingArg=J.VerboseFormattingArg;var Q=n(155);t.NamedTimeZoneImpl=Q.NamedTimeZoneImpl,t.registerNamedTimeZoneImpl=Q.registerNamedTimeZoneImpl;var $=n(58);t.registerCmdFormatter=$.registerCmdFormatter;var ee=n(156);t.parseMarker=ee.parse;var te=n(29);t.registerEventSourceDef=te.registerEventSourceDef;var ne=n(2);t.refineProps=ne.refineProps;var re=n(45);t.PointerDragging=re.default,t.PointerDragEvent=re.PointerDragEvent;var ie=n(62);t.ElementDragging=ie.default;var oe=n(211);t.Draggable=oe.default;var ae=n(213);t.ThirdPartyDraggable=ae.default;var se=n(28);t.Hit=se.Hit;var le=n(152);t.dateSelectionJoinTransformer=le.dateSelectionJoinTransformer;var ue=n(215);t.formatDate=ue.formatDate,t.formatRange=ue.formatRange;var de=n(36);t.globalDefaults=de.globalDefaults;var ce=n(41);t.registerRecurringType=ce.registerRecurringType,t.ParsedRecurring=ce.ParsedRecurring;var pe=n(37);t.createPlugin=pe.createPlugin,t.PluginDef=pe.PluginDef,t.PluginDefInput=pe.PluginDefInput,t.ViewPropsTransformer=pe.ViewPropsTransformer,t.ViewContainerModifier=pe.ViewContainerModifier;var fe=n(216);t.reducerFunc=fe.reducerFunc,t.Action=fe.Action,t.CalendarState=fe.CalendarState;var he=n(159);t.CalendarComponentProps=he.CalendarComponentProps;var ge=n(168);t.computeFallbackHeaderFormat=ge.computeFallbackHeaderFormat,t.renderDateCell=ge.renderDateCell;var ve=n(51);t.OffsetTracker=ve.default;var me=n(66);t.DaySeries=me.default;var ye=n(217);t.EventInteractionState=ye.EventInteractionState;var Ee=n(10);t.EventRenderRange=Ee.EventRenderRange,t.sliceEventStore=Ee.sliceEventStore,t.hasBgRendering=Ee.hasBgRendering;var Se=n(67);t.DayTable=Se.default,t.DayTableSeg=Se.DayTableSeg,t.DayTableCell=Se.DayTableCell;var be=n(68);t.Slicer=be.default,t.SlicedProps=be.SlicedProps;var De=n(43);t.EventMutation=De.EventMutation;var we=n(42);t.Constraint=we.Constraint,t.ConstraintInput=we.ConstraintInput,t.AllowFunc=we.AllowFunc,t.isPropsValid=we.isPropsValid;var Te=n(16);t.EventApi=Te.default},function(e,t){function n(e,t){for(var n=0,r=0;r<e.length;)t(e[r])?(e.splice(r,1),n++):r++;return n}function r(e,t){for(var n=0,r=0;r<e.length;)e[r]===t?(e.splice(r,1),n++):r++;return n}function i(e,t){var n,r=e.length;if(r!==t.length)return!1;for(n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.removeMatching=n,t.removeExact=r,t.isArraysEqual=i},function(e,t,n){function r(e,t){a[e]=t}function i(e){return a[e]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),a={};t.registerCmdFormatter=r,t.getCmdFormatter=i;var s=function(){function e(e,t){this.cmdStr=e,this.separator=t}return e.prototype.format=function(e,t){return t.cmdFormatter(this.cmdStr,o.createVerboseFormattingArg(e,null,t,this.separator))},e.prototype.formatRange=function(e,t,n){return n.cmdFormatter(this.cmdStr,o.createVerboseFormattingArg(e,t,n,this.separator))},e}();t.CmdFormatter=s},function(e,t,n){function r(e,t){s[e]=t}function i(e){return e?!0===e?a.default:s[e]:o.default}Object.defineProperty(t,"__esModule",{value:!0});var o=n(148),a=n(149),s={};t.defineThemeSystem=r,t.getThemeSystemClass=i},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,n,r){this.originEl=e,this.els=t,this.isHorizontal=n,this.isVertical=r}return e.prototype.build=function(){var e=this.originEl,t=this.originClientRect=e.getBoundingClientRect();this.isHorizontal&&this.buildElHorizontals(t.left),this.isVertical&&this.buildElVerticals(t.top)},e.prototype.buildElHorizontals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r],a=o.getBoundingClientRect();t.push(a.left-e),n.push(a.right-e)}this.lefts=t,this.rights=n},e.prototype.buildElVerticals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r],a=o.getBoundingClientRect();t.push(a.top-e),n.push(a.bottom-e)}this.tops=t,this.bottoms=n},e.prototype.leftToIndex=function(e){var t,n=this.lefts,r=this.rights,i=n.length;for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.topToIndex=function(e){var t,n=this.tops,r=this.bottoms,i=n.length;for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}();t.default=n},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(190),i=n(152),o=n(193),a=n(194),s=n(153),l=n(195),u=function(){function e(){this.componentHash={},this.listenerHash={}}return e.prototype.registerComponent=function(e){this.componentHash[e.uid]=e,this.bindComponent(e)},e.prototype.unregisterComponent=function(e){delete this.componentHash[e.uid],this.unbindComponent(e)},e.prototype.bindComponent=function(e){this.listenerHash[e.uid]={dateClicking:new r.default(e),dateSelecting:new i.default(e),eventClicking:new o.default(e),eventHovering:new a.default(e),eventDragging:new s.default(e),eventResizing:new l.default(e)}},e.prototype.unbindComponent=function(e){var t=this.listenerHash[e.uid];t.dateClicking.destroy(),t.dateSelecting.destroy(),t.eventClicking.destroy(),t.eventHovering.destroy(),t.eventDragging.destroy(),t.eventResizing.destroy(),delete this.listenerHash[e.uid]},e}();t.BrowserContext=u,t.default=new u},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),i=function(){function e(){this.emitter=new r.default}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e}();t.default=i},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=n(197),o=n(155),a=n(9),s=n(7),l=n(156),u=n(2),d=n(58),c=function(){function e(e){var t=this.timeZone=e.timeZone,n="local"!==t&&"UTC"!==t;e.timeZoneImpl&&n&&(this.namedTimeZoneImpl=o.createNamedTimeZoneImpl(e.timeZoneImpl,t)),this.canComputeOffset=Boolean(!n||this.namedTimeZoneImpl),this.calendarSystem=i.createCalendarSystem(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation?(this.weekDow=1,this.weekDoy=4):"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekLabel=null!=e.weekLabel?e.weekLabel:e.locale.options.weekLabel,"string"==typeof e.cmdFormatter&&(this.cmdFormatter=d.getCmdFormatter(e.cmdFormatter))}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e);return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):r.arrayToUtcDate(r.dateToLocalArray(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e);var t=null;return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=r.arrayToUtcDate(e)),null!==t&&r.isValidDate(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=l.parse(e);if(null===t)return null;var n=t.marker,r=null;return null!==t.timeZoneOffset&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-60*t.timeZoneOffset*1e3):r=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:r}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.subtract=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.addYears=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.addMonths=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[1]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.diffWholeYears=function(e,t){var n=this.calendarSystem;return r.timeAsMs(e)===r.timeAsMs(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var n=this.calendarSystem;return r.timeAsMs(e)===r.timeAsMs(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+12*(n.getMarkerYear(t)-n.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var n=this.diffWholeYears(e,t);return null!==n?{unit:"year",value:n}:null!==(n=this.diffWholeMonths(e,t))?{unit:"month",value:n}:null!==(n=r.diffWholeWeeks(e,t))?{unit:"week",value:n}:null!==(n=r.diffWholeDays(e,t))?{unit:"day",value:n}:(n=r.diffHours(e,t),u.isInt(n)?{unit:"hour",value:n}:(n=r.diffMinutes(e,t),u.isInt(n)?{unit:"minute",value:n}:(n=r.diffSeconds(e,t),u.isInt(n)?{unit:"second",value:n}:{unit:"millisecond",value:t.valueOf()-e.valueOf()})))},e.prototype.countDurationsBetween=function(e,t,n){var i;return n.years&&null!==(i=this.diffWholeYears(e,t))?i/a.asRoughYears(n):n.months&&null!==(i=this.diffWholeMonths(e,t))?i/a.asRoughMonths(n):n.days&&null!==(i=r.diffWholeDays(e,t))?i/a.asRoughDays(n):(t.valueOf()-e.valueOf())/a.asRoughMs(n)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?r.startOfDay(e):"hour"===t?r.startOfHour(e):"minute"===t?r.startOfMinute(e):"second"===t?r.startOfSecond(e):void 0},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):r.weekOfYear(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,n){return void 0===n&&(n={}),t.format({marker:e,timeZoneOffset:null!=n.forcedTzo?n.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,n,i){return void 0===i&&(i={}),i.isEndExclusive&&(t=r.addMs(t,-1)),n.formatRange({marker:e,timeZoneOffset:null!=i.forcedStartTzo?i.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=i.forcedEndTzo?i.forcedEndTzo:this.offsetForMarker(t)},this)},e.prototype.formatIso=function(e,t){void 0===t&&(t={});var n=null;return t.omitTimeZoneOffset||(n=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),s.buildIsoString(e,n,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?r.arrayToUtcDate(r.dateToLocalArray(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?r.arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},
e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-r.arrayToLocalDate(r.dateToUtcArray(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(r.dateToUtcArray(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?r.arrayToLocalDate(r.dateToUtcArray(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(r.dateToUtcArray(e))*60):new Date(e.valueOf()-(t||0))},e}();t.DateEnv=c},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=n(3),o=n(10),a=function(){function e(e){this.fillSegTag="div",this.dirtySizeFlags={},this.context=e,this.containerElsByType={},this.segsByType={}}return e.prototype.getSegsByType=function(e){return this.segsByType[e]||[]},e.prototype.renderSegs=function(e,t){var n,r=this.renderSegEls(e,t),i=this.attachSegs(e,r);i&&(n=this.containerElsByType[e]||(this.containerElsByType[e]=[])).push.apply(n,i),this.segsByType[e]=r,"bgEvent"===e&&this.context.view.triggerRenderedSegs(r,!1),this.dirtySizeFlags[e]=!0},e.prototype.unrender=function(e){var t=this.segsByType[e];t&&("bgEvent"===e&&this.context.view.triggerWillRemoveSegs(t,!1),this.detachSegs(e,t))},e.prototype.renderSegEls=function(e,t){var n,r=this,a="";if(t.length){for(n=0;n<t.length;n++)a+=this.renderSegHtml(e,t[n]);i.htmlToElements(a).forEach(function(e,n){var r=t[n];e&&(r.el=e)}),"bgEvent"===e&&(t=o.filterSegsViaEls(this.context.view,t,!1)),t=t.filter(function(e){return i.elementMatches(e.el,r.fillSegTag)})}return t},e.prototype.renderSegHtml=function(e,t){var n=null,i=[];return"highlight"!==e&&"businessHours"!==e&&(n={"background-color":t.eventRange.ui.backgroundColor}),"highlight"!==e&&(i=i.concat(t.eventRange.ui.classNames)),"businessHours"===e?i.push("fc-bgevent"):i.push("fc-"+e.toLowerCase()),"<"+this.fillSegTag+(i.length?' class="'+i.join(" ")+'"':"")+(n?' style="'+r.cssToStr(n)+'"':"")+"></"+this.fillSegTag+">"},e.prototype.detachSegs=function(e,t){var n=this.containerElsByType[e];n&&(n.forEach(i.removeElement),delete this.containerElsByType[e])},e.prototype.computeSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.computeSegSizes(this.segsByType[t])},e.prototype.assignSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.assignSegSizes(this.segsByType[t]);this.dirtySizeFlags={}},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e}();t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(3),o=n(15),a=n(60),s=n(204),l=n(165),u=n(205),d=n(206),c=n(4),p=n(7),f=n(22),h=n(207),g=n(8),v=n(21),m=n(164),y=n(20),E=p.createFormatter({day:"numeric"}),S=p.createFormatter({week:"numeric"}),b=function(e){function t(t,n,r){var i=e.call(this,t,n)||this;i.bottomCoordPadding=0,i.isCellSizesDirty=!1;var o=i.eventRenderer=new l.default(i),a=i.fillRenderer=new d.default(i);i.mirrorRenderer=new u.default(i);var s=i.renderCells=y.memoizeRendering(i._renderCells,i._unrenderCells);return i.renderBusinessHours=y.memoizeRendering(a.renderSegs.bind(a,"businessHours"),a.unrender.bind(a,"businessHours"),[s]),i.renderDateSelection=y.memoizeRendering(a.renderSegs.bind(a,"highlight"),a.unrender.bind(a,"highlight"),[s]),i.renderBgEvents=y.memoizeRendering(a.renderSegs.bind(a,"bgEvent"),a.unrender.bind(a,"bgEvent"),[s]),i.renderFgEvents=y.memoizeRendering(o.renderSegs.bind(o),o.unrender.bind(o),[s]),i.renderEventSelection=y.memoizeRendering(o.selectByInstanceId.bind(o),o.unselectByInstanceId.bind(o),[i.renderFgEvents]),i.renderEventDrag=y.memoizeRendering(i._renderEventDrag,i._unrenderEventDrag,[s]),i.renderEventResize=y.memoizeRendering(i._renderEventResize,i._unrenderEventResize,[s]),i.renderProps=r,i}return r.__extends(t,e),t.prototype.render=function(e){var t=e.cells;this.rowCnt=t.length,this.colCnt=t[0].length,this.renderCells(t,e.isRigid),this.renderBusinessHours(e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderBgEvents(e.bgEventSegs),this.renderFgEvents(e.fgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize),this.segPopoverTile&&this.updateSegPopoverTile()},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderCells.unrender()},t.prototype.getCellRange=function(e,t){var n=this.props.cells[e][t].date;return{start:n,end:c.addDays(n,1)}},t.prototype.updateSegPopoverTile=function(e,t){var n=this.props;this.segPopoverTile.receiveProps({date:e||this.segPopoverTile.props.date,fgSegs:t||this.segPopoverTile.props.fgSegs,eventSelection:n.eventSelection,eventDragInstances:n.eventDrag?n.eventDrag.affectedInstances:null,eventResizeInstances:n.eventResize?n.eventResize.affectedInstances:null})},t.prototype._renderCells=function(e,t){var n,r,o=this,s=o.view,l=o.dateEnv,u=this,d=u.rowCnt,c=u.colCnt,p="";for(n=0;n<d;n++)p+=this.renderDayRowHtml(n,t);for(this.el.innerHTML=p,this.rowEls=i.findElements(this.el,".fc-row"),this.cellEls=i.findElements(this.el,".fc-day, .fc-disabled-day"),this.isRtl&&this.cellEls.reverse(),this.rowPositions=new a.default(this.el,this.rowEls,!1,!0),this.colPositions=new a.default(this.el,this.cellEls.slice(0,c),!0,!1),n=0;n<d;n++)for(r=0;r<c;r++)this.publiclyTrigger("dayRender",[{date:l.toDate(e[n][r].date),el:this.getCellEl(n,r),view:s}]);this.isCellSizesDirty=!0},t.prototype._unrenderCells=function(){this.removeSegPopover()},t.prototype.renderDayRowHtml=function(e,t){var n=this.theme,r=["fc-row","fc-week",n.getClass("dayRow")];t&&r.push("fc-rigid");var i=new m.default(this.context);return'<div class="'+r.join(" ")+'"><div class="fc-bg"><table class="'+n.getClass("tableGrid")+'">'+i.renderHtml({cells:this.props.cells[e],dateProfile:this.props.dateProfile,renderIntroHtml:this.renderProps.renderBgIntroHtml})+'</table></div><div class="fc-content-skeleton"><table>'+(this.getIsNumbersVisible()?"<thead>"+this.renderNumberTrHtml(e)+"</thead>":"")+"</table></div></div>"},t.prototype.getIsNumbersVisible=function(){return this.getIsDayNumbersVisible()||this.renderProps.cellWeekNumbersVisible||this.renderProps.colWeekNumbersVisible},t.prototype.getIsDayNumbersVisible=function(){return this.rowCnt>1},t.prototype.renderNumberTrHtml=function(e){var t=this.renderProps.renderNumberIntroHtml(e,this);return"<tr>"+(this.isRtl?"":t)+this.renderNumberCellsHtml(e)+(this.isRtl?t:"")+"</tr>"},t.prototype.renderNumberCellsHtml=function(e){var t,n,r=[];for(t=0;t<this.colCnt;t++)n=this.props.cells[e][t].date,r.push(this.renderNumberCellHtml(n));return this.isRtl&&r.reverse(),r.join("")},t.prototype.renderNumberCellHtml=function(e){var t,n,r=this,i=r.view,o=r.dateEnv,a="",s=g.rangeContainsMarker(this.props.dateProfile.activeRange,e),l=this.getIsDayNumbersVisible()&&s;return l||this.renderProps.cellWeekNumbersVisible?(t=v.getDayClasses(e,this.props.dateProfile,this.context),t.unshift("fc-day-top"),this.renderProps.cellWeekNumbersVisible&&(n=o.weekDow),a+='<td class="'+t.join(" ")+'"'+(s?' data-date="'+o.formatIso(e,{omitTime:!0})+'"':"")+">",this.renderProps.cellWeekNumbersVisible&&e.getUTCDay()===n&&(a+=v.buildGotoAnchorHtml(i,{date:e,type:"week"},{class:"fc-week-number"},o.format(e,S))),l&&(a+=v.buildGotoAnchorHtml(i,e,{class:"fc-day-number"},o.format(e,E))),a+="</td>"):"<td></td>"},t.prototype.updateSize=function(e){var t=this,n=t.fillRenderer,r=t.eventRenderer,i=t.mirrorRenderer;(e||this.isCellSizesDirty)&&(this.buildColPositions(),this.buildRowPositions(),this.isCellSizesDirty=!1),n.computeSizes(e),r.computeSizes(e),i.computeSizes(e),n.assignSizes(e),r.assignSizes(e),i.assignSizes(e)},t.prototype.buildColPositions=function(){this.colPositions.build()},t.prototype.buildRowPositions=function(){this.rowPositions.build(),this.rowPositions.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},t.prototype.positionToHit=function(e,t){var n=this,r=n.colPositions,i=n.rowPositions,o=r.leftToIndex(e),a=i.topToIndex(t);if(null!=a&&null!=o)return{row:a,col:o,dateSpan:{range:this.getCellRange(a,o),allDay:!0},dayEl:this.getCellEl(a,o),relativeRect:{left:r.lefts[o],right:r.rights[o],top:i.tops[a],bottom:i.bottoms[a]}}},t.prototype.getCellEl=function(e,t){return this.cellEls[e*this.colCnt+t]},t.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",e.segs))},t.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"))},t.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",e.segs),this.mirrorRenderer.renderSegs(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"),this.mirrorRenderer.unrender(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype.removeSegPopover=function(){this.segPopover&&this.segPopover.hide()},t.prototype.limitRows=function(e){var t,n,r=this.eventRenderer.rowStructs||[];for(t=0;t<r.length;t++)this.unlimitRow(t),!1!==(n=!!e&&("number"==typeof e?e:this.computeRowLevelLimit(t)))&&this.limitRow(t,n)},t.prototype.computeRowLevelLimit=function(e){var t,n,r=this.rowEls[e],o=r.getBoundingClientRect().bottom,a=i.findChildren(this.eventRenderer.rowStructs[e].tbodyEl);for(t=0;t<a.length;t++)if(n=a[t],n.classList.remove("fc-limited"),n.getBoundingClientRect().bottom>o)return t;return!1},t.prototype.limitRow=function(e,t){var n,r,o,a,s,l,u,d,c,p,f,h,g,v,m,y=this,E=this,S=E.colCnt,b=E.isRtl,D=this.eventRenderer.rowStructs[e],w=[],T=0,R=function(n){for(;T<n;)l=y.getCellSegs(e,T,t),l.length&&(c=r[t-1][T],m=y.renderMoreLink(e,T,l),v=i.createElement("div",null,m),c.appendChild(v),w.push(v[0])),T++};if(t&&t<D.segLevels.length){for(n=D.segLevels[t-1],r=D.cellMatrix,o=i.findChildren(D.tbodyEl).slice(t),o.forEach(function(e){e.classList.add("fc-limited")}),a=0;a<n.length;a++){s=n[a];var _=b?S-1-s.lastCol:s.firstCol,C=b?S-1-s.firstCol:s.lastCol;for(R(_),d=[],u=0;T<=C;)l=this.getCellSegs(e,T,t),d.push(l),u+=l.length,T++;if(u){for(c=r[t-1][_],p=c.rowSpan||1,f=[],h=0;h<d.length;h++)g=i.createElement("td",{className:"fc-more-cell",rowSpan:p}),l=d[h],m=this.renderMoreLink(e,_+h,[s].concat(l)),v=i.createElement("div",null,m),g.appendChild(v),f.push(g),w.push(g);c.classList.add("fc-limited"),i.insertAfterElement(c,f),o.push(c)}}R(this.colCnt),D.moreEls=w,D.limitedEls=o}},t.prototype.unlimitRow=function(e){var t=this.eventRenderer.rowStructs[e];t.moreEls&&(t.moreEls.forEach(i.removeElement),t.moreEls=null),t.limitedEls&&(t.limitedEls.forEach(function(e){e.classList.remove("fc-limited")}),t.limitedEls=null)},t.prototype.renderMoreLink=function(e,t,n){var r=this,o=this,a=o.view,s=o.dateEnv,l=i.createElement("a",{className:"fc-more"});return l.innerText=this.getMoreLinkText(n.length),l.addEventListener("click",function(i){var o=r.opt("eventLimitClick"),l=r.props.cells[e][t].date,u=i.currentTarget,d=r.getCellEl(e,t),c=r.getCellSegs(e,t),p=r.resliceDaySegs(c,l),f=r.resliceDaySegs(n,l);"function"==typeof o&&(o=r.publiclyTrigger("eventLimitClick",[{date:s.toDate(l),allDay:!0,dayEl:d,moreEl:u,segs:p,hiddenSegs:f,jsEvent:i,view:a}])),"popover"===o?r.showSegPopover(e,t,u,p):"string"==typeof o&&a.calendar.zoomTo(l,o)}),l},t.prototype.showSegPopover=function(e,t,n,r){var i,a,l=this,u=this,d=u.calendar,c=u.view,p=u.theme,f=n.parentNode;i=1===this.rowCnt?c.el:this.rowEls[e],a={className:"fc-more-popover "+p.getClass("popover"),parentEl:c.el,top:o.computeRect(i).top,autoHide:!0,content:function(n){l.segPopoverTile=new h.default(l.context,n),l.updateSegPopoverTile(l.props.cells[e][t].date,r)},hide:function(){l.segPopoverTile.destroy(),l.segPopoverTile=null,l.segPopover.destroy(),l.segPopover=null}},this.isRtl?a.right=o.computeRect(f).right+1:a.left=o.computeRect(f).left-1,this.segPopover=new s.default(a),this.segPopover.show(),d.releaseAfterSizingTriggers()},t.prototype.resliceDaySegs=function(e,t){for(var n=t,i=c.addDays(n,1),o={start:n,end:i},a=[],s=0,l=e;s<l.length;s++){var u=l[s],d=u.eventRange,p=d.range,f=g.intersectRanges(p,o);f&&a.push(r.__assign({},u,{eventRange:{def:d.def,ui:r.__assign({},d.ui,{durationEditable:!1}),instance:d.instance,range:f},isStart:u.isStart&&f.start.valueOf()===p.start.valueOf(),isEnd:u.isEnd&&f.end.valueOf()===p.end.valueOf()}))}return a},t.prototype.getMoreLinkText=function(e){var t=this.opt("eventLimitText");return"function"==typeof t?t(e):"+"+e+" "+t},t.prototype.getCellSegs=function(e,t,n){for(var r,i=this.eventRenderer.rowStructs[e].segMatrix,o=n||0,a=[];o<i.length;)r=i[o][t],r&&a.push(r),o++;return a},t}(f.default);t.default=b},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=function(){function e(e,t){for(var n=e.start,i=e.end,o=[],a=[],s=-1;n<i;)t.isHiddenDay(n)?o.push(s+.5):(s++,o.push(s),a.push(n)),n=r.addDays(n,1);this.dates=a,this.indices=o,this.cnt=a.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(r.addDays(e.end,-1)),i=Math.max(0,t),o=Math.min(this.cnt-1,n);return i=Math.ceil(i),o=Math.floor(o),i<=o?{firstIndex:i,lastIndex:o,isStart:t===i,isEnd:n===o}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,n=Math.floor(r.diffDays(this.dates[0],e));return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},e}();t.default=i},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var n,r,i,o=e.dates;if(t){for(r=o[0].getUTCDay(),n=1;n<o.length&&o[n].getUTCDay()!==r;n++);i=Math.ceil(o.length/n)}else i=1,n=o.length;this.rowCnt=i,this.colCnt=n,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t++){for(var n=[],r=0;r<this.colCnt;r++)n.push(this.buildCell(t,r));e.push(n)}return e},e.prototype.buildCell=function(e,t){return{date:this.daySeries.dates[e*this.colCnt+t]}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t++)e.push(this.cells[0][t].date);return e},e.prototype.sliceRange=function(e){var t=this.colCnt,n=this.daySeries.sliceRange(e),r=[];if(n)for(var i=n.firstIndex,o=n.lastIndex,a=i;a<=o;){var s=Math.floor(a/t),l=Math.min((s+1)*t,o+1);r.push({row:s,firstCol:a%t,lastCol:(l-1)%t,isStart:n.isStart&&a===i,isEnd:n.isEnd&&l-1===o}),a=l}return r},e}();t.default=n},function(e,t,n){function r(e){var t=e.activeRange;return{start:l.addMs(t.start,e.minTime.milliseconds),end:l.addMs(t.end,e.maxTime.milliseconds-864e5)}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),o=n(10),a=n(46),s=n(17),l=n(4),u=function(){function e(){this.sliceBusinessHours=s.memoize(this._sliceBusinessHours),this.sliceDateSelection=s.memoize(this._sliceDateSpan),this.sliceEventStore=s.memoize(this._sliceEventStore),this.sliceEventDrag=s.memoize(this._sliceInteraction),this.sliceEventResize=s.memoize(this._sliceInteraction)}return e.prototype.sliceProps=function(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];var a=e.eventUiBases,s=this.sliceEventStore.apply(this,[e.eventStore,a,t,n,r].concat(i));return{dateSelectionSegs:this.sliceDateSelection.apply(this,[e.dateSelection,a,r].concat(i)),businessHourSegs:this.sliceBusinessHours.apply(this,[e.businessHours,t,n,r].concat(i)),fgEventSegs:s.fg,bgEventSegs:s.bg,eventDrag:this.sliceEventDrag.apply(this,[e.eventDrag,a,t,n,r].concat(i)),eventResize:this.sliceEventResize.apply(this,[e.eventResize,a,t,n,r].concat(i)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this._sliceDateSpan.apply(this,[{range:{start:e,end:l.addMs(e,1)},allDay:!1},{},t].concat(n))},e.prototype._sliceBusinessHours=function(e,t,n,o){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];return e?this._sliceEventStore.apply(this,[i.expandRecurring(e,r(t),o.calendar),{},t,n,o].concat(a)).bg:[]},e.prototype._sliceEventStore=function(e,t,n,i,a){for(var s=[],l=5;l<arguments.length;l++)s[l-5]=arguments[l];if(e){var u=o.sliceEventStore(e,t,r(n),i);return{bg:this.sliceEventRanges(u.bg,a,s),fg:this.sliceEventRanges(u.fg,a,s)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,n,i,a){for(var s=[],l=5;l<arguments.length;l++)s[l-5]=arguments[l];if(!e)return null;var u=o.sliceEventStore(e.mutatedEvents,t,r(n),i);return{segs:this.sliceEventRanges(u.fg,a,s),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent,sourceSeg:e.origSeg}},e.prototype._sliceDateSpan=function(e,t,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];if(!e)return[];for(var o=a.fabricateEventRange(e,t,n.calendar),s=this.sliceRange.apply(this,[e.range].concat(r)),l=0,u=s;l<u.length;l++){var d=u[l];d.component=n,d.eventRange=o}return s},e.prototype.sliceEventRanges=function(e,t,n){for(var r=[],i=0,o=e;i<o.length;i++){var a=o[i];r.push.apply(r,this.sliceEventRange(a,t,n))}return r},e.prototype.sliceEventRange=function(e,t,n){for(var r=this.sliceRange.apply(this,[e.range].concat(n)),i=0,o=r;i<o.length;i++){var a=o[i];a.component=t,a.eventRange=e,a.isStart=e.isStart&&a.isStart,a.isEnd=e.isEnd&&a.isEnd}return r},e}();t.default=u},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(22),o=n(68),a=n(51),s=function(e){function t(t,n){var r=e.call(this,t,n.el)||this;return r.slicer=new l,r.dayGrid=n,r}return r.__extends(t,e),t.prototype.render=function(e){var t=this.dayGrid,n=e.dateProfile,i=e.dayTable;t.receiveProps(r.__assign({},this.slicer.sliceProps(e,n,e.nextDayThreshold,t,i),{dateProfile:n,cells:i.cells,isRigid:e.isRigid}))},t.prototype.prepareHits=function(){this.offsetTracker=new a.default(this.dayGrid.el)},t.prototype.releaseHits=function(){this.offsetTracker.destroy()},t.prototype.queryHit=function(e,t){var n=this.offsetTracker;if(n.isWithinClipping(e,t)){var r=n.computeLeft(),i=n.computeTop(),o=this.dayGrid.positionToHit(e-r,t-i);if(o)return{component:this.dayGrid,dateSpan:o.dateSpan,dayEl:o.dayEl,rect:{left:o.relativeRect.left+r,right:o.relativeRect.right+r,top:o.relativeRect.top+i,bottom:o.relativeRect.bottom+i},layer:0}}},t}(i.default);t.default=s,s.prototype.isInteractable=!0;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(o.default);t.DayGridSlicer=l},function(t,n){t.exports=e},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this.calendar=e,this.internalEventSource=t}return e.prototype.remove=function(){this.calendar.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.calendar.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId]})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!0,configurable:!0}),e}();t.default=n},function(e,t,n){function r(e,t,n,r,d){switch(t.type){case"RECEIVE_EVENTS":return i(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,d);case"ADD_EVENTS":return o(e,t.eventStore,r?r.activeRange:null,d);case"MERGE_EVENTS":return f.mergeEventStores(e,t.eventStore);case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return r?f.expandRecurring(e,r.activeRange,d):e;case"CHANGE_TIMEZONE":return a(e,t.oldDateEnv,d.dateEnv);case"MUTATE_EVENTS":return s(e,t.instanceId,t.mutation,t.fromApi,d);case"REMOVE_EVENT_INSTANCES":return u(e,t.instances);case"REMOVE_EVENT_DEF":return f.filterEventStoreDefs(e,function(e){return e.defId!==t.defId});case"REMOVE_EVENT_SOURCE":return l(e,t.sourceId);case"REMOVE_ALL_EVENT_SOURCES":return f.filterEventStoreDefs(e,function(e){return!e.sourceId});case"REMOVE_ALL_EVENTS":return f.createEmptyEventStore();case"RESET_EVENTS":return{defs:e.defs,instances:e.instances};default:return e}}function i(e,t,n,r,i,o){if(t&&n===t.latestFetchId){var a=f.parseEvents(f.transformRawEvents(i,t,o),t.sourceId,o);return r&&(a=f.expandRecurring(a,r,o)),f.mergeEventStores(l(e,t.sourceId),a)}return e}function o(e,t,n,r){return n&&(t=f.expandRecurring(t,n,r)),f.mergeEventStores(e,t)}function a(e,t,n){var r=e.defs,i=c.mapHash(e.instances,function(e){var i=r[e.defId];return i.allDay||i.recurringDef?e:d.__assign({},e,{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo})});return{defs:r,instances:i}}function s(e,t,n,r,i){var o=f.getRelevantEvents(e,t),a=r?{"":{startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}}:i.eventUiBases;return o=p.applyMutationToEventStore(o,a,n,i),f.mergeEventStores(e,o)}function l(e,t){return f.filterEventStoreDefs(e,function(e){return e.sourceId!==t})}function u(e,t){return{defs:e.defs,instances:c.filterHash(e.instances,function(e){return!t[e.instanceId]})}}Object.defineProperty(t,"__esModule",{value:!0});var d=n(1),c=n(12),p=n(43),f=n(14);t.default=r,t.excludeInstances=u},function(e,t,n){function r(e,t){return a.parseEvents(i(e),"",t)}function i(e){var t;return t=!0===e?[{}]:Array.isArray(e)?e.filter(function(e){return e.daysOfWeek}):"object"==typeof e&&e?[e]:[],t=t.map(function(e){return o.__assign({},s,e)})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(14),s={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],rendering:"inverse-background",classNames:"fc-nonbusiness",groupId:"_businessHours"};t.parseBusinessHours=r},function(e,t,n){function r(e,t,n){var r=[];e&&r.push(e),t&&r.push(t);var i={"":s.combineEventUis(r)};return n&&l.__assign(i,n),i}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),o=n(12),a=n(17),s=n(25),l=n(1),u=i.createEmptyEventStore(),d=function(){function e(){this.getKeysForEventDefs=a.memoize(this._getKeysForEventDefs),this.splitDateSelection=a.memoize(this._splitDateSpan),this.splitEventStore=a.memoize(this._splitEventStore),this.splitIndividualUi=a.memoize(this._splitIndividualUi),this.splitEventDrag=a.memoize(this._splitInteraction),this.splitEventResize=a.memoize(this._splitInteraction),this.eventUiBuilders={}}return e.prototype.splitProps=function(e){var t=this,n=this.getKeyInfo(e),i=this.getKeysForEventDefs(e.eventStore),s=this.splitDateSelection(e.dateSelection),l=this.splitIndividualUi(e.eventUiBases,i),d=this.splitEventStore(e.eventStore,i),c=this.splitEventDrag(e.eventDrag),p=this.splitEventResize(e.eventResize),f={};this.eventUiBuilders=o.mapHash(n,function(e,n){return t.eventUiBuilders[n]||a.memoize(r)});for(var h in n){var g=n[h],v=d[h]||u,m=this.eventUiBuilders[h];f[h]={businessHours:g.businessHours||e.businessHours,dateSelection:s[h]||null,eventStore:v,eventUiBases:m(e.eventUiBases[""],g.ui,l[h]),eventSelection:v.instances[e.eventSelection]?e.eventSelection:"",eventDrag:c[h]||null,eventResize:p[h]||null}}return f},e.prototype._splitDateSpan=function(e){var t={};if(e)for(var n=this.getKeysForDateSpan(e),r=0,i=n;r<i.length;r++){var o=i[r];t[o]=e}return t},e.prototype._getKeysForEventDefs=function(e){var t=this;return o.mapHash(e.defs,function(e){return t.getKeysForEventDef(e)})},e.prototype._splitEventStore=function(e,t){var n=e.defs,r=e.instances,o={};for(var a in n)for(var s=0,l=t[a];s<l.length;s++){var u=l[s];o[u]||(o[u]=i.createEmptyEventStore()),o[u].defs[a]=n[a]}for(var d in r)for(var c=r[d],p=0,f=t[c.defId];p<f.length;p++){var u=f[p];o[u]&&(o[u].instances[d]=c)}return o},e.prototype._splitIndividualUi=function(e,t){var n={};for(var r in e)if(r)for(var i=0,o=t[r];i<o.length;i++){var a=o[i];n[a]||(n[a]={}),n[a][r]=e[r]}return n},e.prototype._splitInteraction=function(e){var t={};if(e){var n=this._splitEventStore(e.affectedEvents,this._getKeysForEventDefs(e.affectedEvents)),r=this._getKeysForEventDefs(e.mutatedEvents),i=this._splitEventStore(e.mutatedEvents,r),o=function(r){t[r]||(t[r]={affectedEvents:n[r]||u,mutatedEvents:i[r]||u,isEvent:e.isEvent,origSeg:e.origSeg})};for(var a in n)o(a);for(var a in i)o(a)}return t},e}();t.default=d},function(e,t){function n(e,t,n){var r=!1,i=function(){r||(r=!0,t.apply(this,arguments))},o=function(){r||(r=!0,n&&n.apply(this,arguments))},a=e(i,o);a&&"function"==typeof a.then&&a.then(i,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.unpromisify=n},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.mixInto=function(e){this.mixIntoObj(e.prototype)},e.mixIntoObj=function(e){var t=this;Object.getOwnPropertyNames(this.prototype).forEach(function(n){e[n]||(e[n]=t.prototype[n])})},e.mixOver=function(e){var t=this;Object.getOwnPropertyNames(this.prototype).forEach(function(n){e.prototype[n]=t.prototype[n]})},e}();t.default=n},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(33),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t}(i.default);t.default=o,o.prototype.classes={widget:"fc-unthemed",widgetHeader:"fc-widget-header",widgetContent:"fc-widget-content",buttonGroup:"fc-button-group",button:"fc-button",cornerLeft:"fc-corner-left",cornerRight:"fc-corner-right",stateDefault:"fc-state-default",stateActive:"fc-state-active",stateDisabled:"fc-state-disabled",stateHover:"fc-state-hover",stateDown:"fc-state-down",popoverHeader:"fc-widget-header",popoverContent:"fc-widget-content",headerRow:"fc-widget-header",dayRow:"fc-widget-content",listView:"fc-widget-content"},o.prototype.baseIconClass="fc-icon",o.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-left-single-arrow",next:"fc-icon-right-single-arrow",prevYear:"fc-icon-left-double-arrow",nextYear:"fc-icon-right-double-arrow"},o.prototype.iconOverrideOption="buttonIcons",o.prototype.iconOverrideCustomButtonOption="icon",o.prototype.iconOverridePrefix="fc-icon-"},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(33),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t}(i.default);t.default=o,o.prototype.classes={widget:"ui-widget",widgetHeader:"ui-widget-header",widgetContent:"ui-widget-content",buttonGroup:"fc-button-group",button:"ui-button",cornerLeft:"ui-corner-left",cornerRight:"ui-corner-right",stateDefault:"ui-state-default",stateActive:"ui-state-active",stateDisabled:"ui-state-disabled",stateHover:"ui-state-hover",stateDown:"ui-state-down",today:"ui-state-highlight",popoverHeader:"ui-widget-header",popoverContent:"ui-widget-content",headerRow:"ui-widget-header",dayRow:"ui-widget-content",listView:"ui-widget-content"},o.prototype.baseIconClass="ui-icon",o.prototype.iconClasses={close:"ui-icon-closethick",prev:"ui-icon-circle-triangle-w",next:"ui-icon-circle-triangle-e",prevYear:"ui-icon-seek-prev",nextYear:"ui-icon-seek-next"},o.prototype.iconOverrideOption="themeButtonIcons",o.prototype.iconOverrideCustomButtonOption="themeIcon",o.prototype.iconOverridePrefix="ui-icon-"},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}();t.ScrollController=i;var o=function(e){function t(t){var n=e.call(this)||this;return n.el=t,n}return r.__extends(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(i);t.ElementScrollController=o;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(i);t.WindowScrollController=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(15),o=n(150),a=function(e){function t(t,n){var r=e.call(this)||this;return r.handleScroll=function(){r.scrollTop=r.scrollController.getScrollTop(),r.scrollLeft=r.scrollController.getScrollLeft(),r.handleScrollChange()},r.scrollController=t,r.doesListening=n,r.scrollTop=r.origScrollTop=t.getScrollTop(),r.scrollLeft=r.origScrollLeft=t.getScrollLeft(),r.scrollWidth=t.getScrollWidth(),r.scrollHeight=t.getScrollHeight(),r.clientWidth=t.getClientWidth(),r.clientHeight=t.getClientHeight(),r.clientRect=r.computeClientRect(),r.doesListening&&r.getEventTarget().addEventListener("scroll",r.handleScroll),r}return r.__extends(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(o.ScrollController);t.ScrollGeomCache=a;var s=function(e){function t(t,n){return e.call(this,new o.ElementScrollController(t),n)||this}return r.__extends(t,e),t.prototype.getEventTarget=function(){return this.scrollController.el},t.prototype.computeClientRect=function(){return i.computeInnerRect(this.scrollController.el)},t}(a);t.ElementScrollGeomCache=s;var l=function(e){function t(t){return e.call(this,new o.WindowScrollController,t)||this}return r.__extends(t,e),t.prototype.getEventTarget=function(){return window},t.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},t.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},t}(a)
;t.WindowScrollGeomCache=l},function(e,t,n){function r(e){var t=e.opt("selectLongPressDelay");return null==t&&(t=e.opt("longPressDelay")),t}function i(e,t,n){var r=e.dateSpan,i=t.dateSpan,a=[r.range.start,r.range.end,i.range.start,i.range.end];a.sort(o.compareNumbers);for(var s={},u=0,d=n;u<d.length;u++){var c=d[u],p=c(e,t);if(!1===p)return null;p&&l.__assign(s,p)}return s.range={start:a[0],end:a[3]},s.allDay=r.allDay,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(28),s=n(35),l=n(1),u=function(){function e(e){var t=this;this.dragSelection=null,this.handlePointerDown=function(e){var n=t,i=n.component,o=n.dragging,a=i.opt("selectable")&&i.isValidDateDownEl(e.origEvent.target);o.setIgnoreMove(!a),o.delay=e.isTouch?r(i):null},this.handleDragStart=function(e){t.component.calendar.unselect(e)},this.handleHitUpdate=function(e,n){var r=t.component.calendar,a=null,s=!1;e&&((a=i(t.hitDragging.initialHit,e,r.pluginSystem.hooks.dateSelectionTransformers))&&t.component.isDateSelectionValid(a)||(s=!0,a=null)),a?r.dispatch({type:"SELECT_DATES",selection:a}):n||r.dispatch({type:"UNSELECT_DATES"}),s?o.disableCursor():o.enableCursor(),n||(t.dragSelection=a)},this.handlePointerUp=function(e){t.dragSelection&&(t.component.calendar.triggerDateSelect(t.dragSelection,e),t.dragSelection=null)},this.component=e;var n=this.dragging=new s.default(e.el);n.touchScrollAllowed=!1,n.minDistance=e.opt("selectMinDistance")||0,n.autoScroller.isEnabled=e.opt("dragScroll");var l=this.hitDragging=new a.default(this.dragging,e);l.emitter.on("pointerdown",this.handlePointerDown),l.emitter.on("dragstart",this.handleDragStart),l.emitter.on("hitupdate",this.handleHitUpdate),l.emitter.on("pointerup",this.handlePointerUp)}return e.prototype.destroy=function(){this.dragging.destroy()},e}();t.default=u},function(e,t,n){function r(e,t,n){var r=e.dateSpan,i=t.dateSpan,o=r.range.start,a=i.range.start,s={};r.allDay!==i.allDay&&(s.allDay=i.allDay,s.hasEnd=t.component.opt("allDayMaintainDuration"),i.allDay&&(o=l.startOfDay(o)));var u=p.diffDates(o,a,e.component.dateEnv,e.component===t.component?e.component.largeUnit:null);u.milliseconds&&(s.allDay=!1);for(var d={startDelta:u,endDelta:u,standardProps:s},c=0,f=n;c<f.length;c++){(0,f[c])(d,e,t)}return d}function i(e){var t=e.opt("eventLongPressDelay");return null==t&&(t=e.opt("longPressDelay")),t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(28),a=n(43),s=n(61),l=n(4),u=n(3),d=n(35),c=n(14),p=n(2),f=n(10),h=n(16),g=n(1),v=function(){function e(t){var n=this;this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingCalendar=null,this.validMutation=null,this.mutatedRelevantEvents=null,this.handlePointerDown=function(e){var t=e.origEvent.target,r=n,o=r.component,a=r.dragging,s=a.mirror,l=o.calendar,d=n.subjectSeg=f.getElSeg(e.subjectEl),p=n.eventRange=d.eventRange,h=p.instance.instanceId;n.relevantEvents=c.getRelevantEvents(l.state.eventStore,h),a.minDistance=e.isTouch?0:o.opt("eventDragMinDistance"),a.delay=e.isTouch&&h!==o.props.eventSelection?i(o):null,s.parentNode=l.el,s.revertDuration=o.opt("dragRevertDuration");var g=n.component.isValidSegDownEl(t)&&!u.elementClosest(t,".fc-resizer");a.setIgnoreMove(!g),n.isDragging=g&&e.subjectEl.classList.contains("fc-draggable")},this.handleDragStart=function(e){var t=n.component.calendar,r=n.eventRange,i=r.instance.instanceId;e.isTouch?i!==n.component.props.eventSelection&&t.dispatch({type:"SELECT_EVENT",eventInstanceId:i}):t.dispatch({type:"UNSELECT_EVENT"}),n.isDragging&&(t.unselect(e),t.publiclyTrigger("eventDragStart",[{el:n.subjectSeg.el,event:new h.default(t,r.def,r.instance),jsEvent:e.origEvent,view:n.component.view}]))},this.handleHitUpdate=function(e,t){if(n.isDragging){var i=n.relevantEvents,s=n.hitDragging.initialHit,l=n.component.calendar,u=null,d=null,f=null,h=!1,g={affectedEvents:i,mutatedEvents:c.createEmptyEventStore(),isEvent:!0,origSeg:n.subjectSeg};if(e){var v=e.component;u=v.calendar,l===u||v.opt("editable")&&v.opt("droppable")?(d=r(s,e,u.pluginSystem.hooks.eventDragMutationMassagers))&&(f=a.applyMutationToEventStore(i,u.eventUiBases,d,u),g.mutatedEvents=f,n.component.isInteractionValid(g)||(h=!0,d=null,f=null,g.mutatedEvents=c.createEmptyEventStore())):u=null}n.displayDrag(u,g),h?p.disableCursor():p.enableCursor(),t||(l===u&&o.isHitsEqual(s,e)&&(d=null),n.dragging.setMirrorNeedsRevert(!d),n.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-mirror")),n.receivingCalendar=u,n.validMutation=d,n.mutatedRelevantEvents=f)}},this.handlePointerUp=function(){n.isDragging||n.cleanup()},this.handleDragEnd=function(e){if(n.isDragging){var t=n.component.calendar,r=n.component.view,i=n.receivingCalendar,o=n.eventRange.def,a=n.eventRange.instance,s=new h.default(t,o,a),l=n.relevantEvents,u=n.mutatedRelevantEvents,d=n.hitDragging.finalHit;if(n.clearDrag(),t.publiclyTrigger("eventDragStop",[{el:n.subjectSeg.el,event:s,jsEvent:e.origEvent,view:r}]),n.validMutation){if(i===t){t.dispatch({type:"MERGE_EVENTS",eventStore:u});for(var c={},p=0,f=t.pluginSystem.hooks.eventDropTransformers;p<f.length;p++){var v=f[p];g.__assign(c,v(n.validMutation,t))}g.__assign(c,{el:e.subjectEl,delta:n.validMutation.startDelta,oldEvent:s,event:new h.default(t,u.defs[o.defId],a?u.instances[a.instanceId]:null),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:l})},jsEvent:e.origEvent,view:r}),t.publiclyTrigger("eventDrop",[c])}else if(i){t.publiclyTrigger("eventLeave",[{draggedEl:e.subjectEl,event:s,view:r}]),t.dispatch({type:"REMOVE_EVENT_INSTANCES",instances:n.mutatedRelevantEvents.instances}),i.dispatch({type:"MERGE_EVENTS",eventStore:n.mutatedRelevantEvents}),e.isTouch&&i.dispatch({type:"SELECT_EVENT",eventInstanceId:a.instanceId});var m=i.buildDatePointApi(d.dateSpan);m.draggedEl=e.subjectEl,m.jsEvent=e.origEvent,m.view=d.component,i.publiclyTrigger("drop",[m]),i.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new h.default(i,u.defs[o.defId],u.instances[a.instanceId]),view:d.component}])}}else t.publiclyTrigger("_noEventDrop")}n.cleanup()},this.component=t;var l=this.dragging=new d.default(t.el);l.pointer.selector=e.SELECTOR,l.touchScrollAllowed=!1,l.autoScroller.isEnabled=t.opt("dragScroll");var v=this.hitDragging=new o.default(this.dragging,s.default.componentHash);v.useSubjectCenter=t.useEventCenter,v.emitter.on("pointerdown",this.handlePointerDown),v.emitter.on("dragstart",this.handleDragStart),v.emitter.on("hitupdate",this.handleHitUpdate),v.emitter.on("pointerup",this.handlePointerUp),v.emitter.on("dragend",this.handleDragEnd)}return e.prototype.destroy=function(){this.dragging.destroy()},e.prototype.displayDrag=function(e,t){var n=this.component.calendar,r=this.receivingCalendar;r&&r!==e&&(r===n?r.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:c.createEmptyEventStore(),isEvent:!0,origSeg:t.origSeg}}):r.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){var e=this.component.calendar,t=this.receivingCalendar;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingCalendar=null,this.validMutation=null,this.mutatedRelevantEvents=null},e.SELECTOR=".fc-draggable, .fc-resizable",e}();t.default=v},function(e,t,n){function r(e,t,n,r,i,o,a){return new v.DateEnv({calendarSystem:"gregory",timeZone:t,timeZoneImpl:n,locale:g.getLocale(e),weekNumberCalculation:i,firstDay:r,weekLabel:o,cmdFormatter:a})}function i(e){return new(h.getThemeSystemClass(e.themeSystem||e.theme))(e)}function o(e){var t=this.tryRerender.bind(this);return null!=e&&(t=c.debounce(t,e)),t}function a(e){return w.mapHash(e,function(e){return e.ui})}function s(e,t,n){var r={"":t};for(var i in e){var o=e[i];o.sourceId&&n[o.sourceId]&&(r[i]=n[o.sourceId])}return r}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=n(3),d=n(24),c=n(2),p=n(27),f=n(196),h=n(59),g=n(47),v=n(63),m=n(4),y=n(7),E=n(9),S=n(198),b=n(46),D=n(17),w=n(12),T=n(29),R=n(26),_=n(142),C=n(16),M=n(14),P=n(25),I=n(45),O=n(153),H=n(157),k=n(37),x=n(159),z=n(1),N=function(){function e(t,n){var l=this;this.buildDateEnv=D.memoize(r),this.buildTheme=D.memoize(i),this.buildEventUiSingleBase=D.memoize(this._buildEventUiSingleBase),this.buildSelectionConfig=D.memoize(this._buildSelectionConfig),this.buildEventUiBySource=D.memoizeOutput(a,w.isPropsEqual),this.buildEventUiBases=D.memoize(s),this.isRecentPointerDateSelect=!1,this.actionQueue=[],this.isReducing=!1,this.needsRerender=!1,this.needsFullRerender=!1,this.isRendering=!1,this.renderingPauseDepth=0,this.buildDelayedRerender=D.memoize(o),this.afterSizingTriggers={},this.isViewUpdated=!1,this.isDatesUpdated=!1,this.isEventsUpdated=!1,this.onDocumentPointerUp=function(e){var t=l,n=t.state,r=t.documentPointer;if(!r.wasTouchScroll){if(n.dateSelection&&!l.isRecentPointerDateSelect){var i=l.viewOpt("unselectAuto"),o=l.viewOpt("unselectCancel");!i||i&&u.elementClosest(r.downEl,o)||l.unselect(e)}n.eventSelection&&!u.elementClosest(r.downEl,O.default.SELECTOR)&&l.dispatch({type:"UNSELECT_EVENT"})}l.isRecentPointerDateSelect=!1},this.el=t,this.optionsManager=new f.default(n),this.pluginSystem=new k.PluginSystem;for(var d=e.defaultPlugins.concat(this.optionsManager.computed.plugins||[]),c=0,p=d;c<p.length;c++){var h=p[c];this.pluginSystem.add(h)}this.handleOptions(this.optionsManager.computed),this.publiclyTrigger("_init"),this.hydrate()}return Object.defineProperty(e.prototype,"view",{get:function(){return this.component?this.component.view:null},enumerable:!0,configurable:!0}),e.prototype.render=function(){this.component?this.requestRerender(!0):(this.renderableEventStore=M.createEmptyEventStore(),this.bindHandlers(),this.executeRender())},e.prototype.destroy=function(){this.component&&(this.unbindHandlers(),this.component.destroy(),this.component=null)},e.prototype.bindHandlers=function(){var e=this;this.removeNavLinkListener=d.listenBySelector(this.el,"click","a[data-goto]",function(t,n){var r=n.getAttribute("data-goto");r=r?JSON.parse(r):{};var i=e.dateEnv.createMarker(r.date),o=r.type,a=e.viewOpt("navLink"+c.capitaliseFirstLetter(o)+"Click");"function"==typeof a?a(i,t):("string"==typeof a&&(o=a),e.zoomTo(i,o))});var t=this.documentPointer=new I.default(document);t.shouldIgnoreMove=!0,t.shouldWatchScroll=!1,t.emitter.on("pointerup",this.onDocumentPointerUp),this.opt("handleWindowResize")&&window.addEventListener("resize",this.windowResizeProxy=c.debounce(this.windowResize.bind(this),this.opt("windowResizeDelay")))},e.prototype.unbindHandlers=function(){this.removeNavLinkListener(),this.documentPointer.destroy(),this.windowResizeProxy&&(window.removeEventListener("resize",this.windowResizeProxy),this.windowResizeProxy=null)},e.prototype.hydrate=function(){var e=this;this.state=this.buildInitialState();var t=this.opt("eventSources")||[],n=this.opt("events"),r=[];n&&t.unshift(n);for(var i=0,o=t;i<o.length;i++){var a=o[i],s=T.parseEventSource(a,this);s&&r.push(s)}this.batchRendering(function(){e.dispatch({type:"INIT"}),e.dispatch({type:"ADD_EVENT_SOURCES",sources:r}),e.dispatch({type:"SET_VIEW_TYPE",viewType:e.opt("defaultView")})})},e.prototype.buildInitialState=function(){return{viewType:null,loadingLevel:0,eventSourceLoadingLevel:0,currentDate:this.getInitialDate(),dateProfile:null,eventSources:{},eventStore:M.createEmptyEventStore(),dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null}},e.prototype.dispatch=function(e){if(this.actionQueue.push(e),!this.isReducing){this.isReducing=!0;for(var t=this.state;this.actionQueue.length;)this.state=this.reduce(this.state,this.actionQueue.shift(),this);var n=this.state;this.isReducing=!1,!t.loadingLevel&&n.loadingLevel?this.publiclyTrigger("loading",[!0]):t.loadingLevel&&!n.loadingLevel&&this.publiclyTrigger("loading",[!1]);var r=this.component&&this.component.view;(t.eventStore!==n.eventStore||this.needsFullRerender)&&t.eventStore&&(this.isEventsUpdated=!0),(t.dateProfile!==n.dateProfile||this.needsFullRerender)&&(t.dateProfile&&this.publiclyTrigger("datesDestroy",[{view:r,el:r.el}]),this.isDatesUpdated=!0),(t.viewType!==n.viewType||this.needsFullRerender)&&(t.viewType&&this.publiclyTrigger("viewSkeletonDestroy",[{view:r,el:r.el}]),this.isViewUpdated=!0),this.requestRerender()}},e.prototype.reduce=function(e,t,n){return S.default(e,t,n)},e.prototype.requestRerender=function(e){void 0===e&&(e=!1),this.needsRerender=!0,this.needsFullRerender=this.needsFullRerender||e,this.delayedRerender()},e.prototype.tryRerender=function(){this.component&&this.needsRerender&&!this.renderingPauseDepth&&!this.isRendering&&this.executeRender()},e.prototype.batchRendering=function(e){this.renderingPauseDepth++,e(),this.renderingPauseDepth--,this.requestRerender()},e.prototype.executeRender=function(){var e=this.needsFullRerender;this.needsRerender=!1,this.needsFullRerender=!1,this.isRendering=!0,this.renderComponent(e),this.isRendering=!1,this.needsRerender&&this.delayedRerender()},e.prototype.renderComponent=function(e){var t=this,n=t.state,r=t.component,i=n.viewType,o=this.viewSpecs[i],a=e&&r?r.view.queryScroll():null;if(!o)throw new Error('View type "'+i+'" is not valid');var s=this.renderableEventStore=n.eventSourceLoadingLevel&&!this.opt("progressiveEventRendering")?this.renderableEventStore:n.eventStore,u=this.buildEventUiSingleBase(o.options),d=this.buildEventUiBySource(n.eventSources),c=this.eventUiBases=this.buildEventUiBases(s.defs,u,d);!e&&r||(r&&(r.freezeHeight(),r.destroy()),r=this.component=new x.default({calendar:this,view:null,dateEnv:this.dateEnv,theme:this.theme,options:this.optionsManager.computed},this.el)),r.receiveProps(l.__assign({},n,{viewSpec:o,dateProfile:n.dateProfile,dateProfileGenerator:this.dateProfileGenerators[i],eventStore:s,eventUiBases:c,dateSelection:n.dateSelection,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize})),a&&r.view.applyScroll(a),this.isViewUpdated&&(this.isViewUpdated=!1,this.publiclyTrigger("viewSkeletonRender",[{view:r.view,el:r.view.el}])),this.isDatesUpdated&&(this.isDatesUpdated=!1,this.publiclyTrigger("datesRender",[{view:r.view,el:r.view.el}])),this.isEventsUpdated&&(this.isEventsUpdated=!1),this.releaseAfterSizingTriggers()},e.prototype.setOption=function(e,t){var n=this.dateEnv;this.optionsManager.add(e,t),this.handleOptions(this.optionsManager.computed),"height"===e||"contentHeight"===e||"aspectRatio"===e?this.resizeComponent():"timeZone"===e?this.dispatch({type:"CHANGE_TIMEZONE",oldDateEnv:n}):"defaultDate"===e||"defaultView"===e||/^(event|select)(Overlap|Constraint|Allow)$/.test(e)||(this.needsFullRerender=!0,this.dispatch({type:"SET_VIEW_TYPE",viewType:this.state.viewType}))},e.prototype.getOption=function(e){return this.optionsManager.computed[e]},e.prototype.opt=function(e){return this.optionsManager.computed[e]},e.prototype.viewOpt=function(e){return this.viewOpts()[e]},e.prototype.viewOpts=function(){return this.viewSpecs[this.state.viewType].options},e.prototype.handleOptions=function(e){var t=this,n=this.pluginSystem.hooks;this.defaultAllDayEventDuration=E.createDuration(e.defaultAllDayEventDuration),this.defaultTimedEventDuration=E.createDuration(e.defaultTimedEventDuration),this.delayedRerender=this.buildDelayedRerender(e.rerenderDelay),this.theme=this.buildTheme(e),this.dateEnv=this.buildDateEnv(e.locale,e.timeZone,e.timeZoneImpl,e.firstDay,e.weekNumberCalculation,e.weekLabel,e.cmdFormatter),this.selectionConfig=this.buildSelectionConfig(e),this.viewSpecs=H.buildViewSpecs(n.viewConfigs,this.optionsManager,n.viewSpecTransformers),this.dateProfileGenerators=w.mapHash(this.viewSpecs,function(e){return new e.class.prototype.dateProfileGeneratorClass(e,t)})},e.prototype._buildSelectionConfig=function(e){return P.processScopedUiProps("select",e,this)},e.prototype._buildEventUiSingleBase=function(e){return e.editable&&(e=l.__assign({},e,{eventEditable:!0})),P.processScopedUiProps("event",e,this)},e.prototype.hasPublicHandlers=function(e){return this.hasHandlers(e)||this.opt(e)},e.prototype.publiclyTrigger=function(e,t){var n=this.opt(e);if(this.triggerWith(e,this,t),n)return n.apply(this,t)},e.prototype.publiclyTriggerAfterSizing=function(e,t){var n=this.afterSizingTriggers;(n[e]||(n[e]=[])).push(t)},e.prototype.releaseAfterSizingTriggers=function(){var e=this.afterSizingTriggers;for(var t in e)for(var n=0,r=e[t];n<r.length;n++){var i=r[n];this.publiclyTrigger(t,i)}this.afterSizingTriggers={}},e.prototype.isValidViewType=function(e){return Boolean(this.viewSpecs[e])},e.prototype.changeView=function(e,t){var n=null;t&&(t.start&&t.end?(this.optionsManager.add("visibleRange",t),this.handleOptions(this.optionsManager.computed)):n=this.dateEnv.createMarker(t)),this.unselect(),this.dispatch({type:"SET_VIEW_TYPE",viewType:e,dateMarker:n})},e.prototype.zoomTo=function(e,t){var n;t=t||"day",n=this.viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),n?this.dispatch({type:"SET_VIEW_TYPE",viewType:n.type,dateMarker:e}):this.dispatch({type:"SET_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,n,r;t=this.component.header.viewsWithButtons;for(var i in this.viewSpecs)t.push(i);for(n=0;n<t.length;n++)if((r=this.viewSpecs[t[n]])&&r.singleUnit===e)return r},e.prototype.getInitialDate=function(){var e=this.opt("defaultDate");return null!=e?this.dateEnv.createMarker(e):this.getNow()},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,-1)})},e.prototype.nextYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,1)})},e.prototype.today=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.getNow()})},e.prototype.gotoDate=function(e){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=E.createDuration(e);t&&(this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.add(this.state.currentDate,t)}))},e.prototype.getDate=function(){return this.dateEnv.toDate(this.state.currentDate)},e.prototype.formatDate=function(e,t){var n=this.dateEnv;return n.format(n.createMarker(e),y.createFormatter(t))},e.prototype.formatRange=function(e,t,n){var r=this.dateEnv;return r.formatRange(r.createMarker(e),r.createMarker(t),y.createFormatter(n,this.opt("defaultRangeSeparator")),n)},e.prototype.formatIso=function(e,t){var n=this.dateEnv;return n.formatIso(n.createMarker(e),{omitTime:t})},e.prototype.windowResize=function(e){e.target===window&&this.resizeComponent()&&this.publiclyTrigger("windowResize",[this.view])},e.prototype.updateSize=function(){this.resizeComponent()},e.prototype.resizeComponent=function(){return!(this.isResizing||!this.component)&&(this.isResizing=!0,this.component.updateSize(!0),this.isResizing=!1,!0)},e.prototype.select=function(e,t){var n;n=null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t};var r=b.parseDateSpan(n,this.dateEnv,E.createDuration({days:1}));r&&(this.dispatch({type:"SELECT_DATES",selection:r}),this.triggerDateSelect(r))},e.prototype.unselect=function(e){this.state.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),this.triggerDateUnselect(e))},e.prototype.triggerDateSelect=function(e,t){var n=this.buildDateSpanApi(e);n.jsEvent=t?t.origEvent:null,n.view=this.view,this.publiclyTrigger("select",[n]),t&&(this.isRecentPointerDateSelect=!0)},e.prototype.triggerDateUnselect=function(e){this.publiclyTrigger("unselect",[{jsEvent:e?e.origEvent:null,view:this.view}])},e.prototype.triggerDateClick=function(e,t,n,r){var i=this.buildDatePointApi(e);i.dayEl=t,i.jsEvent=r,i.view=n,this.publiclyTrigger("dateClick",[i])},e.prototype.buildDatePointApi=function(e){for(var t={},n=0,r=this.pluginSystem.hooks.datePointTransforms;n<r.length;n++){var i=r[n];z.__assign(t,i(e,this))}return z.__assign(t,b.buildDatePointApi(e,this.dateEnv)),t},e.prototype.buildDateSpanApi=function(e){for(var t={},n=0,r=this.pluginSystem.hooks.dateSpanTransforms;n<r.length;n++){var i=r[n];z.__assign(t,i(e,this))}return z.__assign(t,b.buildDateSpanApi(e,this.dateEnv)),t},e.prototype.getNow=function(){var e=this.opt("now");return"function"==typeof e&&(e=e()),null==e?this.dateEnv.createNowMarker():this.dateEnv.createMarker(e)},e.prototype.getDefaultEventEnd=function(e,t){var n=t;return e?(n=m.startOfDay(n),n=this.dateEnv.add(n,this.defaultAllDayEventDuration)):n=this.dateEnv.add(n,this.defaultTimedEventDuration),n},e.prototype.addEvent=function(e,t){if(e instanceof C.default){var n=e._def,r=e._instance;return this.state.eventStore.defs[n.defId]||this.dispatch({type:"ADD_EVENTS",eventStore:M.eventTupleToStore({def:n,instance:r})}),e}var i;if(t instanceof _.default)i=t.internalEventSource.sourceId;else if(null!=t){var o=this.getEventSourceById(t);if(!o)return console.warn('Could not find an event source with ID "'+t+'"'),null;i=o.internalEventSource.sourceId}var a=R.parseEvent(e,i,this);return a?(this.dispatch({type:"ADD_EVENTS",eventStore:M.eventTupleToStore(a)}),new C.default(this,a.def,a.def.recurringDef?null:a.instance)):null},e.prototype.getEventById=function(e){var t=this.state.eventStore,n=t.defs,r=t.instances;e=String(e);for(var i in n){var o=n[i];if(o.publicId===e){if(o.recurringDef)return new C.default(this,o,null);for(var a in r){var s=r[a];if(s.defId===o.defId)return new C.default(this,o,s)}}}return null},e.prototype.getEvents=function(){var e=this.state.eventStore,t=e.defs,n=e.instances,r=[];for(var i in n){var o=n[i],a=t[o.defId];r.push(new C.default(this,a,o))}return r},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.rerenderEvents=function(){this.dispatch({type:"RESET_EVENTS"})},e.prototype.getEventSources=function(){var e=this.state.eventSources,t=[];for(var n in e)t.push(new _.default(this,e[n]));return t},e.prototype.getEventSourceById=function(e){var t=this.state.eventSources;e=String(e);for(var n in t)if(t[n].publicId===e)return new _.default(this,t[n]);return null},e.prototype.addEventSource=function(e){if(e instanceof _.default)return this.state.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e;var t=T.parseEventSource(e,this);return t?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[t]}),new _.default(this,t)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES"})},e.defaultPlugins=[],e}();t.default=N,p.default.mixInto(N)},function(e,t){function n(e,t){o[e]=t}function r(e,t){var n=o[e];return n?new n(t):null}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.name=e}return e}();t.NamedTimeZoneImpl=i;var o={};t.registerNamedTimeZoneImpl=n,t.createNamedTimeZoneImpl=r},function(e,t,n){function r(e){var t=null,n=!1,r=o.exec(e);r&&(n=!r[1],n?e+="T00:00:00Z":e=e.replace(a,function(e,n,r,i,o){return t=n?0:(60*parseInt(i,10)+parseInt(o||0,10))*("-"===r?-1:1),""})+"Z");var s=new Date(e);return i.isValidDate(s)?{marker:s,isTimeUnspecified:n,timeZoneOffset:t}:null}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=/^\s*\d{4}-\d\d-\d\d([T ]\d)?/,a=/(?:(Z)|([-+])(\d\d)(?::(\d\d))?)$/;t.parse=r},function(e,t,n){function r(e,t,n){var r=d.parseViewConfigs(e),o=d.parseViewConfigs(t.overrides.views),s=a.compileViewDefs(r,o);return l.mapHash(s,function(e){for(var r=i(e,o,t),a=0,s=n;a<s.length;a++){r=(0,s[a])(r)}return r})}function i(e,t,n){var r=e.overrides.duration||e.defaults.duration||n.dynamicOverrides.duration||n.overrides.duration,i=null,a="",l="",d={};if(r&&(i=s.createDuration(r))){var c=s.greatestDurationDenominator(i,!s.getWeeksFromInput(r));a=c.unit,1===c.value&&(l=a,d=t[a]?t[a].options:{})}var p=function(t){var n=t.buttonText||{},r=e.defaults.buttonTextKey;return null!=r&&null!=n[r]?n[r]:null!=n[e.type]?n[e.type]:null!=n[l]?n[l]:void 0};return{type:e.type,class:e.class,duration:i,durationUnit:a,singleUnit:l,options:o.__assign({},u.globalDefaults,e.defaults,n.dirDefaults,n.localeDefaults,n.overrides,d,e.overrides,n.dynamicOverrides),buttonTextOverride:p(n.dynamicOverrides)||p(n.overrides)||e.overrides.buttonText,buttonTextDefault:p(n.localeDefaults)||p(n.dirDefaults)||e.defaults.buttonText||p(u.globalDefaults)||e.type}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(158),s=n(9),l=n(12),u=n(36),d=n(200);t.buildViewSpecs=r},function(e,t,n){function r(e,t){var n,r={};for(n in e)i(n,r,e,t);for(n in t)i(n,r,e,t);return r}function i(e,t,n,r){if(t[e])return t[e];var i=o(e,t,n,r);return i&&(t[e]=i),i}function o(e,t,n,r){var o=n[e],l=r[e],u=function(e){return o&&null!==o[e]?o[e]:l&&null!==l[e]?l[e]:null},d=u("class"),c=u("superType");!c&&d&&(c=a(d,r)||a(d,n));var p=c?i(c,t,n,r):null;return!d&&p&&(d=p.class),d?{type:e,class:d,defaults:s.__assign({},p?p.defaults:{},o?o.options:{}),overrides:s.__assign({},p?p.overrides:{},l?l.options:{})}:null}function a(e,t){var n=Object.getPrototypeOf(e.prototype);for(var r in t){var i=t[r];if(i.class&&i.class.prototype===n)return r}return""}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1);t.compileViewDefs=r},function(e,t,n){function r(e,t){var n;return n=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,this.dateEnv.formatRange(n.start,n.end,h.createFormatter(t.titleFormat||i(e),t.titleRangeSeparator),{isEndExclusive:e.isRangeAllDay})}function i(e){var t=e.currentRangeUnit;if("year"===t)return{year:"numeric"};if("month"===t)return{year:"numeric",month:"long"};var n=g.diffWholeDays(e.currentRange.start,e.currentRange.end);return null!==n&&n>1?{year:"numeric",month:"short",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"}}function o(e){return e.map(function(e){return new e})}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),s=n(34),l=n(201),u=n(3),d=n(8),c=n(144),p=n(17),f=n(15),h=n(7),g=n(4),v=n(20),m=n(1),y=function(e){function t(t,n){var i=e.call(this,t)||this;i._renderToolbars=v.memoizeRendering(i.renderToolbars),i.buildViewPropTransformers=p.memoize(o),i.el=n,u.prependToElement(n,i.contentEl=u.createElement("div",{className:"fc-view-container"}));for(var a=i.calendar,s=0,l=a.pluginSystem.hooks.viewContainerModifiers;s<l.length;s++){(0,l[s])(i.contentEl,a)}return i.toggleElClassNames(!0),i.computeTitle=p.memoize(r),i.parseBusinessHours=p.memoize(function(e){return c.parseBusinessHours(e,i.calendar)}),i}return a.__extends(t,e),t.prototype.destroy=function(){this.header&&this.header.destroy(),this.footer&&this.footer.destroy(),this.view&&this.view.destroy(),u.removeElement(this.contentEl),this.toggleElClassNames(!1),e.prototype.destroy.call(this)},t.prototype.toggleElClassNames=function(e){var t=this.el.classList,n="fc-"+this.opt("dir"),r=this.theme.getClass("widget");e?(t.add("fc"),t.add(n),t.add(r)):(t.remove("fc"),t.remove(n),t.remove(r))},t.prototype.render=function(e){this.freezeHeight();var t=this.computeTitle(e.dateProfile,e.viewSpec.options);this._renderToolbars(e.viewSpec,e.dateProfile,e.dateProfileGenerator,t),this.renderView(e,t),this.updateSize(),this.thawHeight()},t.prototype.renderToolbars=function(e,t,n,r){var i=this.opt("header"),o=this.opt("footer"),s=this.calendar.getNow(),c=n.build(s),p=n.buildPrev(t),f=n.buildNext(t),h={title:r,activeButton:e.type,isTodayEnabled:c.isValid&&!d.rangeContainsMarker(t.currentRange,s),isPrevEnabled:p.isValid,isNextEnabled:f.isValid};i?(this.header||(this.header=new l.default(this.context,"fc-header-toolbar"),u.prependToElement(this.el,this.header.el)),this.header.receiveProps(a.__assign({layout:i},h))):this.header&&(this.header.destroy(),this.header=null),o?(this.footer||(this.footer=new l.default(this.context,"fc-footer-toolbar"),u.appendToElement(this.el,this.footer.el)),this.footer.receiveProps(a.__assign({layout:o},h))):this.footer&&(this.footer.destroy(),this.footer=null)},t.prototype.renderView=function(e,t){var n=this.view,r=e.viewSpec,i=e.dateProfileGenerator;n&&n.viewSpec===r?n.addScroll(n.queryScroll()):(n&&n.destroy(),n=this.view=new r.class({calendar:this.calendar,view:null,dateEnv:this.dateEnv,theme:this.theme,options:r.options},r,i,this.contentEl)),n.title=t;for(var o={dateProfile:e.dateProfile,businessHours:this.parseBusinessHours(r.options.businessHours),eventStore:e.eventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize},a=this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers),s=0,l=a;s<l.length;s++){var u=l[s];m.__assign(o,u.transform(o,r,e,n))}n.receiveProps(o)},t.prototype.updateSize=function(e){void 0===e&&(e=!1);var t=this.view;e&&t.addScroll(t.queryScroll()),(e||null==this.isHeightAuto)&&this.computeHeightVars(),t.updateSize(e,this.viewHeight,this.isHeightAuto),t.updateNowIndicator(),t.popScroll()},t.prototype.computeHeightVars=function(){var e=this.calendar,t=e.opt("height"),n=e.opt("contentHeight");this.isHeightAuto="auto"===t||"auto"===n,this.viewHeight="number"==typeof n?n:"function"==typeof n?n():"number"==typeof t?t-this.queryToolbarsHeight():"function"==typeof t?t()-this.queryToolbarsHeight():"parent"===t?this.el.parentNode.offsetHeight-this.queryToolbarsHeight():Math.round(this.contentEl.offsetWidth/Math.max(this.opt("aspectRatio"),.5))},t.prototype.queryToolbarsHeight=function(){var e=0;return this.header&&(e+=f.computeHeightAndMargins(this.header.el)),this.footer&&(e+=f.computeHeightAndMargins(this.footer.el)),e},t.prototype.freezeHeight=function(){u.applyStyle(this.el,{height:this.el.offsetHeight,overflow:"hidden"})},t.prototype.thawHeight=function(){u.applyStyle(this.el,{height:"",overflow:""})},t}(s.default);t.default=y},function(e,t,n){function r(e,t){var n=new s.default(e.renderRange,t);return new l.default(n,!1)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(161),a=n(167),s=n(66),l=n(67),u=n(169),d=n(69),c=n(17),p=function(e){function t(t,n,i,o){var s=e.call(this,t,n,i,o)||this;return s.buildDayTable=c.memoize(r),s.opt("columnHeader")&&(s.header=new a.default(s.context,s.el.querySelector(".fc-head-container"))),s.simpleTimeGrid=new u.default(s.context,s.timeGrid),s.dayGrid&&(s.simpleDayGrid=new d.default(s.context,s.dayGrid)),s}return i.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.header&&this.header.destroy(),this.simpleTimeGrid.destroy(),this.simpleDayGrid&&this.simpleDayGrid.destroy()},t.prototype.render=function(t){e.prototype.render.call(this,t);var n=this.props.dateProfile,r=this.buildDayTable(n,this.dateProfileGenerator),o=this.splitter.splitProps(t);this.header&&this.header.receiveProps({dateProfile:n,dates:r.headerDates,datesRepDistinctDays:!0,renderIntroHtml:this.renderHeadIntroHtml}),this.simpleTimeGrid.receiveProps(i.__assign({},o.timed,{dateProfile:n,dayTable:r})),this.simpleDayGrid&&this.simpleDayGrid.receiveProps(i.__assign({},o.allDay,{dateProfile:n,dayTable:r,nextDayThreshold:this.nextDayThreshold,isRigid:!1}))},t.prototype.renderNowIndicator=function(e){this.simpleTimeGrid.renderNowIndicator(e)},t}(o.default);t.default=p,t.buildDayTable=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(11),o=n(3),a=n(2),s=n(44),l=n(49),u=n(162),d=n(65),c=n(9),p=n(7),f=n(21),h=n(4),g=n(208),v=p.createFormatter({week:"short"}),m=function(e){function t(t,n,r,a){var l=e.call(this,t,n,r,a)||this;l.splitter=new g.default,l.renderHeadIntroHtml=function(){var e,t=l,n=t.theme,r=t.dateEnv,o=l.props.dateProfile.renderRange,a=h.diffDays(o.start,o.end);return l.opt("weekNumbers")?(e=r.format(o.start,v),
'<th class="fc-axis fc-week-number '+n.getClass("widgetHeader")+'" '+l.axisStyleAttr()+">"+f.buildGotoAnchorHtml(l,{date:o.start,type:"week",forceOff:a>1},i.htmlEscape(e))+"</th>"):'<th class="fc-axis '+n.getClass("widgetHeader")+'" '+l.axisStyleAttr()+"></th>"},l.renderTimeGridBgIntroHtml=function(){return'<td class="fc-axis '+l.theme.getClass("widgetContent")+'" '+l.axisStyleAttr()+"></td>"},l.renderTimeGridIntroHtml=function(){return'<td class="fc-axis" '+l.axisStyleAttr()+"></td>"},l.renderDayGridBgIntroHtml=function(){return'<td class="fc-axis '+l.theme.getClass("widgetContent")+'" '+l.axisStyleAttr()+"><span>"+f.getAllDayHtml(l)+"</span></td>"},l.renderDayGridIntroHtml=function(){return'<td class="fc-axis" '+l.axisStyleAttr()+"></td>"},l.el.classList.add("fc-agenda-view"),l.el.innerHTML=l.renderSkeletonHtml(),l.scroller=new s.default("hidden","auto");var c=l.scroller.el;l.el.querySelector(".fc-body > tr > td").appendChild(c),c.classList.add("fc-time-grid-container");var p=o.createElement("div",{className:"fc-time-grid"});return c.appendChild(p),l.timeGrid=new u.default(l.context,p,{renderBgIntroHtml:l.renderTimeGridBgIntroHtml,renderIntroHtml:l.renderTimeGridIntroHtml}),l.opt("allDaySlot")&&(l.dayGrid=new d.default(l.context,l.el.querySelector(".fc-day-grid"),{renderNumberIntroHtml:l.renderDayGridIntroHtml,renderBgIntroHtml:l.renderDayGridBgIntroHtml,renderIntroHtml:l.renderDayGridIntroHtml,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1}),l.dayGrid.bottomCoordPadding=l.el.querySelector(".fc-divider").offsetHeight),l}return r.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),this.scroller.destroy()},t.prototype.renderSkeletonHtml=function(){var e=this.theme;return'<table class="'+e.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+e.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+e.getClass("widgetContent")+'">'+(this.opt("allDaySlot")?'<div class="fc-day-grid"></div><hr class="fc-divider '+e.getClass("widgetHeader")+'" />':"")+"</td></tr></tbody></table>"},t.prototype.getNowIndicatorUnit=function(){return this.timeGrid.getNowIndicatorUnit()},t.prototype.unrenderNowIndicator=function(){this.timeGrid.unrenderNowIndicator()},t.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.timeGrid.updateSize(t),this.dayGrid&&this.dayGrid.updateSize(t)},t.prototype.updateBaseSize=function(e,t,n){var r,i,s,l=this;if(this.axisWidth=a.matchCellWidths(o.findElements(this.el,".fc-axis")),!this.timeGrid.colEls)return void(n||(i=this.computeScrollerHeight(t),this.scroller.setHeight(i)));var u=o.findElements(this.el,".fc-row").filter(function(e){return!l.scroller.el.contains(e)});this.timeGrid.bottomRuleEl.style.display="none",this.scroller.clear(),u.forEach(a.uncompensateScroll),this.dayGrid&&(this.dayGrid.removeSegPopover(),r=this.opt("eventLimit"),r&&"number"!=typeof r&&(r=5),r&&this.dayGrid.limitRows(r)),n||(i=this.computeScrollerHeight(t),this.scroller.setHeight(i),s=this.scroller.getScrollbarWidths(),(s.left||s.right)&&(u.forEach(function(e){a.compensateScroll(e,s)}),i=this.computeScrollerHeight(t),this.scroller.setHeight(i)),this.scroller.lockOverflow(s),this.timeGrid.getTotalSlatHeight()<i&&(this.timeGrid.bottomRuleEl.style.display=""))},t.prototype.computeScrollerHeight=function(e){return e-a.subtractInnerElHeight(this.el,this.scroller.el)},t.prototype.computeInitialDateScroll=function(){var e=c.createDuration(this.opt("scrollTime")),t=this.timeGrid.computeTimeTop(e.milliseconds);return t=Math.ceil(t),t&&t++,{top:t}},t.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},t.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},t.prototype.axisStyleAttr=function(){return null!=this.axisWidth?'style="width:'+this.axisWidth+'px"':""},t}(l.default);t.default=m,m.prototype.usesMinMaxTime=!0},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(11),o=n(3),a=n(60),s=n(163),l=n(202),u=n(203),d=n(9),c=n(4),p=n(7),f=n(22),h=n(164),g=n(20),v=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}],m=function(e){function t(t,n,r){var i=e.call(this,t,n)||this;i.isSlatSizesDirty=!1,i.isColSizesDirty=!1,i.renderSlats=g.memoizeRendering(i._renderSlats);var o=i.eventRenderer=new s.default(i),a=i.fillRenderer=new u.default(i);i.mirrorRenderer=new l.default(i);var d=i.renderColumns=g.memoizeRendering(i._renderColumns,i._unrenderColumns);return i.renderBusinessHours=g.memoizeRendering(a.renderSegs.bind(a,"businessHours"),a.unrender.bind(a,"businessHours"),[d]),i.renderDateSelection=g.memoizeRendering(i._renderDateSelection,i._unrenderDateSelection,[d]),i.renderFgEvents=g.memoizeRendering(o.renderSegs.bind(o),o.unrender.bind(o),[d]),i.renderBgEvents=g.memoizeRendering(a.renderSegs.bind(a,"bgEvent"),a.unrender.bind(a,"bgEvent"),[d]),i.renderEventSelection=g.memoizeRendering(o.selectByInstanceId.bind(o),o.unselectByInstanceId.bind(o),[i.renderFgEvents]),i.renderEventDrag=g.memoizeRendering(i._renderEventDrag,i._unrenderEventDrag,[d]),i.renderEventResize=g.memoizeRendering(i._renderEventResize,i._unrenderEventResize,[d]),i.processOptions(),n.innerHTML='<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider '+i.theme.getClass("widgetHeader")+'" style="display:none" />',i.rootBgContainerEl=n.querySelector(".fc-bg"),i.slatContainerEl=n.querySelector(".fc-slats"),i.bottomRuleEl=n.querySelector(".fc-divider"),i.renderProps=r,i}return r.__extends(t,e),t.prototype.processOptions=function(){var e,t,n=this.opt("slotDuration"),r=this.opt("snapDuration");n=d.createDuration(n),r=r?d.createDuration(r):n,e=d.wholeDivideDurations(n,r),null===e&&(r=n,e=1),this.slotDuration=n,this.snapDuration=r,this.snapsPerSlot=e,t=this.opt("slotLabelFormat"),Array.isArray(t)&&(t=t[t.length-1]),this.labelFormat=p.createFormatter(t||{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"}),t=this.opt("slotLabelInterval"),this.labelInterval=t?d.createDuration(t):this.computeLabelInterval(n)},t.prototype.computeLabelInterval=function(e){var t,n,r;for(t=v.length-1;t>=0;t--)if(n=d.createDuration(v[t]),null!==(r=d.wholeDivideDurations(n,e))&&r>1)return n;return e},t.prototype.render=function(e){var t=e.cells;this.colCnt=t.length,this.renderSlats(e.dateProfile),this.renderColumns(e.cells,e.dateProfile),this.renderBusinessHours(e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderFgEvents(e.fgEventSegs),this.renderBgEvents(e.bgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSlats.unrender(),this.renderColumns.unrender()},t.prototype.updateSize=function(e){var t=this,n=t.fillRenderer,r=t.eventRenderer,i=t.mirrorRenderer;(e||this.isSlatSizesDirty)&&(this.buildSlatPositions(),this.isSlatSizesDirty=!1),(e||this.isColSizesDirty)&&(this.buildColPositions(),this.isColSizesDirty=!1),n.computeSizes(e),r.computeSizes(e),i.computeSizes(e),n.assignSizes(e),r.assignSizes(e),i.assignSizes(e)},t.prototype._renderSlats=function(e){var t=this.theme;this.slatContainerEl.innerHTML='<table class="'+t.getClass("tableGrid")+'">'+this.renderSlatRowHtml(e)+"</table>",this.slatEls=o.findElements(this.slatContainerEl,"tr"),this.slatPositions=new a.default(this.el,this.slatEls,!1,!0),this.isSlatSizesDirty=!0},t.prototype.renderSlatRowHtml=function(e){for(var t,n,r,o=this,a=o.dateEnv,s=o.theme,l=o.isRtl,u="",f=c.startOfDay(e.renderRange.start),h=e.minTime,g=d.createDuration(0);d.asRoughMs(h)<d.asRoughMs(e.maxTime);)t=a.add(f,h),n=null!==d.wholeDivideDurations(g,this.labelInterval),r='<td class="fc-axis fc-time '+s.getClass("widgetContent")+'">'+(n?"<span>"+i.htmlEscape(a.format(t,this.labelFormat))+"</span>":"")+"</td>",u+='<tr data-time="'+p.formatIsoTimeString(t)+'"'+(n?"":' class="fc-minor"')+">"+(l?"":r)+'<td class="'+s.getClass("widgetContent")+'"></td>'+(l?r:"")+"</tr>",h=d.addDurations(h,this.slotDuration),g=d.addDurations(g,this.slotDuration);return u},t.prototype._renderColumns=function(e,t){var n=this.theme,r=new h.default(this.context);this.rootBgContainerEl.innerHTML='<table class="'+n.getClass("tableGrid")+'">'+r.renderHtml({cells:e,dateProfile:t,renderIntroHtml:this.renderProps.renderBgIntroHtml})+"</table>",this.colEls=o.findElements(this.el,".fc-day, .fc-disabled-day"),this.isRtl&&this.colEls.reverse(),this.colPositions=new a.default(this.el,this.colEls,!0,!1),this.renderContentSkeleton(),this.isColSizesDirty=!0},t.prototype._unrenderColumns=function(){this.unrenderContentSkeleton()},t.prototype.renderContentSkeleton=function(){var e,t=[];t.push(this.renderProps.renderIntroHtml());for(var n=0;n<this.colCnt;n++)t.push('<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>');this.isRtl&&t.reverse(),e=this.contentSkeletonEl=o.htmlToElement('<div class="fc-content-skeleton"><table><tr>'+t.join("")+"</tr></table></div>"),this.colContainerEls=o.findElements(e,".fc-content-col"),this.mirrorContainerEls=o.findElements(e,".fc-mirror-container"),this.fgContainerEls=o.findElements(e,".fc-event-container:not(.fc-mirror-container)"),this.bgContainerEls=o.findElements(e,".fc-bgevent-container"),this.highlightContainerEls=o.findElements(e,".fc-highlight-container"),this.businessContainerEls=o.findElements(e,".fc-business-container"),this.isRtl&&(this.colContainerEls.reverse(),this.mirrorContainerEls.reverse(),this.fgContainerEls.reverse(),this.bgContainerEls.reverse(),this.highlightContainerEls.reverse(),this.businessContainerEls.reverse()),this.el.appendChild(e)},t.prototype.unrenderContentSkeleton=function(){o.removeElement(this.contentSkeletonEl)},t.prototype.groupSegsByCol=function(e){var t,n=[];for(t=0;t<this.colCnt;t++)n.push([]);for(t=0;t<e.length;t++)n[e[t].col].push(e[t]);return n},t.prototype.attachSegsByCol=function(e,t){var n,r,i;for(n=0;n<this.colCnt;n++)for(r=e[n],i=0;i<r.length;i++)t[n].appendChild(r[i].el)},t.prototype.getNowIndicatorUnit=function(){return"minute"},t.prototype.renderNowIndicator=function(e,t){if(this.colContainerEls){var n,r=this.computeDateTop(t),i=[];for(n=0;n<e.length;n++){var a=o.createElement("div",{className:"fc-now-indicator fc-now-indicator-line"});a.style.top=r+"px",this.colContainerEls[e[n].col].appendChild(a),i.push(a)}if(e.length>0){var s=o.createElement("div",{className:"fc-now-indicator fc-now-indicator-arrow"});s.style.top=r+"px",this.contentSkeletonEl.appendChild(s),i.push(s)}this.nowIndicatorEls=i}},t.prototype.unrenderNowIndicator=function(){this.nowIndicatorEls&&(this.nowIndicatorEls.forEach(o.removeElement),this.nowIndicatorEls=null)},t.prototype.getTotalSlatHeight=function(){return this.slatContainerEl.offsetHeight},t.prototype.computeDateTop=function(e,t){return t||(t=c.startOfDay(e)),this.computeTimeTop(e.valueOf()-t.valueOf())},t.prototype.computeTimeTop=function(e){var t,n,r=this.slatEls.length,i=this.props.dateProfile,o=(e-d.asRoughMs(i.minTime))/d.asRoughMs(this.slotDuration);return o=Math.max(0,o),o=Math.min(r,o),t=Math.floor(o),t=Math.min(t,r-1),n=o-t,this.slatPositions.tops[t]+this.slatPositions.getHeight(t)*n},t.prototype.computeSegVerticals=function(e){var t,n,r,i=this.opt("agendaEventMinHeight");for(t=0;t<e.length;t++)n=e[t],r=this.props.cells[n.col].date,n.top=this.computeDateTop(n.start,r),n.bottom=Math.max(n.top+i,this.computeDateTop(n.end,r))},t.prototype.assignSegVerticals=function(e){var t,n;for(t=0;t<e.length;t++)n=e[t],o.applyStyle(n.el,this.generateSegVerticalCss(n))},t.prototype.generateSegVerticalCss=function(e){return{top:e.top,bottom:-e.bottom}},t.prototype.buildColPositions=function(){this.colPositions.build()},t.prototype.buildSlatPositions=function(){this.slatPositions.build()},t.prototype.positionToHit=function(e,t){var n=this,r=n.dateEnv,i=n.snapsPerSlot,o=n.slatPositions,a=n.colPositions,s=a.leftToIndex(e),l=o.topToIndex(t);if(null!=s&&null!=l){var u=o.tops[l],c=o.getHeight(l),p=(t-u)/c,f=Math.floor(p*i),h=l*i+f,g=this.props.cells[s].date,v=d.addDurations(this.props.dateProfile.minTime,d.multiplyDuration(this.snapDuration,h)),m=r.add(g,v);return{col:s,dateSpan:{range:{start:m,end:r.add(m,this.snapDuration)},allDay:!1},dayEl:this.colEls[s],relativeRect:{left:a.lefts[s],right:a.rights[s],top:u,bottom:u+c}}}},t.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.renderSegs(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.renderSegs("highlight",e.segs))},t.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}),this.fillRenderer.unrender("highlight"))},t.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.mirrorRenderer.renderSegs(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype._renderDateSelection=function(e){e&&(this.opt("selectMirror")?this.mirrorRenderer.renderSegs(e,{isSelecting:!0}):this.fillRenderer.renderSegs("highlight",e))},t.prototype._unrenderDateSelection=function(e){this.mirrorRenderer.unrender(e,{isSelecting:!0}),this.fillRenderer.unrender("highlight")},t}(f.default);t.default=m},function(e,t,n){function r(e){var t,n,r,i=[];for(t=0;t<e.length;t++){for(n=e[t],r=0;r<i.length&&a(n,i[r]).length;r++);n.level=r,(i[r]||(i[r]=[])).push(n)}return i}function i(e){var t,n,r,i,o;for(t=0;t<e.length;t++)for(n=e[t],r=0;r<n.length;r++)for(i=n[r],i.forwardSegs=[],o=t+1;o<e.length;o++)a(i,e[o],i.forwardSegs)}function o(e){var t,n,r=e.forwardSegs,i=0;if(void 0===e.forwardPressure){for(t=0;t<r.length;t++)n=r[t],o(n),i=Math.max(i,1+n.forwardPressure);e.forwardPressure=i}}function a(e,t,n){void 0===n&&(n=[]);for(var r=0;r<t.length;r++)s(e,t[r])&&n.push(t[r]);return n}function s(e,t){return e.bottom>t.top&&e.top<t.bottom}function l(e){var t=f.buildSegCompareObj(e);return t.forwardPressure=e.forwardPressure,t.backwardCoord=e.backwardCoord,t}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),d=n(11),c=n(3),p=n(7),f=n(50),h=n(2),g=function(e){function t(t){var n=e.call(this,t.context)||this;return n.timeGrid=t,n.fullTimeFormat=p.createFormatter({hour:"numeric",minute:"2-digit",separator:n.context.options.defaultRangeSeparator}),n}return u.__extends(t,e),t.prototype.attachSegs=function(e,t){this.segsByCol=this.timeGrid.groupSegsByCol(e),this.timeGrid.attachSegsByCol(this.segsByCol,this.timeGrid.fgContainerEls)},t.prototype.detachSegs=function(e){e.forEach(function(e){c.removeElement(e.el)}),this.segsByCol=null},t.prototype.computeSegSizes=function(e){var t=this,n=t.timeGrid,r=t.segsByCol,i=n.colCnt;if(n.computeSegVerticals(e),r)for(var o=0;o<i;o++)this.computeSegHorizontals(r[o])},t.prototype.assignSegSizes=function(e){var t=this,n=t.timeGrid,r=t.segsByCol,i=n.colCnt;if(n.assignSegVerticals(e),r)for(var o=0;o<i;o++)this.assignSegCss(r[o])},t.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:!1}},t.prototype.computeDisplayEventEnd=function(){return!0},t.prototype.renderSegHtml=function(e,t){var n,r,i,o=e.eventRange,a=o.def,s=o.ui,l=a.allDay,u=s.startEditable,c=e.isStart&&s.durationEditable&&this.context.options.eventResizableFromStart,p=e.isEnd&&s.durationEditable,f=this.getSegClasses(e,u,c||p,t),g=d.cssToStr(this.getSkinCss(s));if(f.unshift("fc-time-grid-event","fc-v-event"),h.isMultiDayRange(o.range)){if(e.isStart||e.isEnd){var v=e.start,m=e.end;n=this._getTimeText(v,m,l),r=this._getTimeText(v,m,l,this.fullTimeFormat),i=this._getTimeText(v,m,l,null,!1)}}else n=this.getTimeText(o),r=this.getTimeText(o,this.fullTimeFormat),i=this.getTimeText(o,null,!1);return'<a class="'+f.join(" ")+'"'+(a.url?' href="'+d.htmlEscape(a.url)+'"':"")+(g?' style="'+g+'"':"")+'><div class="fc-content">'+(n?'<div class="fc-time" data-start="'+d.htmlEscape(i)+'" data-full="'+d.htmlEscape(r)+'"><span>'+d.htmlEscape(n)+"</span></div>":"")+(a.title?'<div class="fc-title">'+d.htmlEscape(a.title)+"</div>":"")+'</div><div class="fc-bg"></div>'+(p?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},t.prototype.computeSegHorizontals=function(e){var t,n,a;if(e=this.sortEventSegs(e),t=r(e),i(t),n=t[0]){for(a=0;a<n.length;a++)o(n[a]);for(a=0;a<n.length;a++)this.computeSegForwardBack(n[a],0,0)}},t.prototype.computeSegForwardBack=function(e,t,n){var r,i=e.forwardSegs;if(void 0===e.forwardCoord)for(i.length?(this.sortForwardSegs(i),this.computeSegForwardBack(i[0],t+1,n),e.forwardCoord=i[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-n)/(t+1),r=0;r<i.length;r++)this.computeSegForwardBack(i[r],0,e.forwardCoord)},t.prototype.sortForwardSegs=function(e){var t=e.map(l),n=[{field:"forwardPressure",order:-1},{field:"backwardCoord",order:1}].concat(this.context.view.eventOrderSpecs);return t.sort(function(e,t){return h.compareByFieldSpecs(e,t,n)}),t.map(function(e){return e._seg})},t.prototype.assignSegCss=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];c.applyStyle(r.el,this.generateSegCss(r)),r.eventRange.def.title&&r.bottom-r.top<30&&r.el.classList.add("fc-short")}},t.prototype.generateSegCss=function(e){var t,n,r=this.context.options.slotEventOverlap,i=e.backwardCoord,o=e.forwardCoord,a=this.timeGrid.generateSegVerticalCss(e),s=this.timeGrid.isRtl;return r&&(o=Math.min(1,i+2*(o-i))),s?(t=1-o,n=i):(t=i,n=1-o),a.zIndex=e.level+1,a.left=100*t+"%",a.right=100*n+"%",r&&e.forwardPressure&&(a[s?"marginLeft":"marginRight"]=20),a},t}(f.default);t.default=g},function(e,t,n){function r(e,t,n,r){var a=n.dateEnv,s=n.theme,l=o.rangeContainsMarker(t.activeRange,e),u=i.getDayClasses(e,t,n);return u.unshift("fc-day",s.getClass("widgetContent")),'<td class="'+u.join(" ")+'"'+(l?' data-date="'+a.formatIso(e,{omitTime:!0})+'"':"")+(r?" "+r:"")+"></td>"}Object.defineProperty(t,"__esModule",{value:!0});var i=n(21),o=n(8),a=function(){function e(e){this.context=e}return e.prototype.renderHtml=function(e){var t=[];e.renderIntroHtml&&t.push(e.renderIntroHtml());for(var n=0,i=e.cells;n<i.length;n++){var o=i[n];t.push(r(o.date,e.dateProfile,this.context,o.htmlAttrs))}return e.cells.length||t.push('<td class="fc-day '+this.context.theme.getClass("widgetContent")+'"></td>'),"rtl"===this.context.options.dir&&t.reverse(),"<tr>"+t.join("")+"</tr>"},e}();t.default=a},function(e,t,n){function r(e,t){var n,r;for(n=0;n<t.length;n++)if(r=t[n],r.firstCol<=e.lastCol&&r.lastCol>=e.firstCol)return!0;return!1}function i(e,t){return e.leftCol-t.leftCol}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(3),s=n(166),l=function(e){function t(t){var n=e.call(this,t.context)||this;return n.dayGrid=t,n}return o.__extends(t,e),t.prototype.attachSegs=function(e,t){var n=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach(function(e,t){e.querySelector(".fc-content-skeleton > table").appendChild(n[t].tbodyEl)}),t||this.dayGrid.removeSegPopover()},t.prototype.detachSegs=function(){for(var e,t=this.rowStructs||[];e=t.pop();)a.removeElement(e.tbodyEl);this.rowStructs=null},t.prototype.renderSegRows=function(e){var t,n,r=[];for(t=this.groupSegRows(e),n=0;n<t.length;n++)r.push(this.renderSegRow(n,t[n]));return r},t.prototype.renderSegRow=function(e,t){function n(e){for(;o<e;)d=(E[r-1]||[])[o],d?d.rowSpan=(d.rowSpan||1)+1:(d=document.createElement("td"),s.appendChild(d)),y[r][o]=d,E[r][o]=d,o++}var r,i,o,s,l,u,d,c=this.dayGrid,p=c.colCnt,f=c.isRtl,h=this.buildSegLevels(t),g=Math.max(1,h.length),v=document.createElement("tbody"),m=[],y=[],E=[];for(r=0;r<g;r++){if(i=h[r],o=0,s=document.createElement("tr"),m.push([]),y.push([]),E.push([]),i)for(l=0;l<i.length;l++){u=i[l];var S=f?p-1-u.lastCol:u.firstCol,b=f?p-1-u.firstCol:u.lastCol;for(n(S),d=a.createElement("td",{className:"fc-event-container"},u.el),S!==b?d.colSpan=b-S+1:E[r][o]=d;o<=b;)y[r][o]=d,m[r][o]=u,o++;s.appendChild(d)}n(p);var D=c.renderProps.renderIntroHtml();D&&(c.isRtl?a.appendToElement(s,D):a.prependToElement(s,D)),v.appendChild(s)}return{row:e,tbodyEl:v,cellMatrix:y,segMatrix:m,segLevels:h,segs:t}},t.prototype.buildSegLevels=function(e){var t,n,o,a=this.dayGrid,s=a.isRtl,l=a.colCnt,u=[];for(e=this.sortEventSegs(e),t=0;t<e.length;t++){for(n=e[t],o=0;o<u.length&&r(n,u[o]);o++);n.level=o,n.leftCol=s?l-1-n.lastCol:n.firstCol,n.rightCol=s?l-1-n.firstCol:n.lastCol,(u[o]||(u[o]=[])).push(n)}for(o=0;o<u.length;o++)u[o].sort(i);return u},t.prototype.groupSegRows=function(e){var t,n=[];for(t=0;t<this.dayGrid.rowCnt;t++)n.push([]);for(t=0;t<e.length;t++)n[e[t].row].push(e[t]);return n},t.prototype.computeDisplayEventEnd=function(){return 1===this.dayGrid.colCnt},t}(s.default);t.default=l},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(11),o=n(50),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.renderSegHtml=function(e,t){var n,r,o=this.context.options,a=e.eventRange,s=a.def,l=a.ui,u=s.allDay,d=l.startEditable,c=u&&e.isStart&&l.durationEditable&&o.eventResizableFromStart,p=u&&e.isEnd&&l.durationEditable,f=this.getSegClasses(e,d,c||p,t),h=i.cssToStr(this.getSkinCss(l)),g="";return f.unshift("fc-day-grid-event","fc-h-event"),e.isStart&&(n=this.getTimeText(a))&&(g='<span class="fc-time">'+i.htmlEscape(n)+"</span>"),r='<span class="fc-title">'+(i.htmlEscape(s.title||"")||"&nbsp;")+"</span>",'<a class="'+f.join(" ")+'"'+(s.url?' href="'+i.htmlEscape(s.url)+'"':"")+(h?' style="'+h+'"':"")+'><div class="fc-content">'+("rtl"===o.dir?r+" "+g:g+" "+r)+"</div>"+(c?'<div class="fc-resizer fc-start-resizer"></div>':"")+(p?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},t.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"}},t.prototype.computeDisplayEventEnd=function(){return!1},t}(o.default);t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(34),o=n(3),a=n(7),s=n(168),l=function(e){function t(t,n){var r=e.call(this,t)||this;return n.innerHTML="",n.appendChild(r.el=o.htmlToElement('<div class="fc-row '+r.theme.getClass("headerRow")+'"><table class="'+r.theme.getClass("tableGrid")+'"><thead></thead></table></div>')),r.thead=r.el.querySelector("thead"),r}return r.__extends(t,e),t.prototype.destroy=function(){o.removeElement(this.el)},t.prototype.render=function(e){var t=e.dates,n=e.datesRepDistinctDays,r=[];e.renderIntroHtml&&r.push(e.renderIntroHtml());for(var i=a.createFormatter(this.opt("columnHeaderFormat")||s.computeFallbackHeaderFormat(n,t.length)),o=0,l=t;o<l.length;o++){var u=l[o];r.push(s.renderDateCell(u,e.dateProfile,n,t.length,i,this.context))}this.isRtl&&r.reverse(),this.thead.innerHTML="<tr>"+r.join("")+"</tr>"},t}(i.default);t.default=l},function(e,t,n){function r(e,t){return!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"}}function i(e,t,n,r,i,u,d,c){var p,f=u.view,h=u.dateEnv,g=u.theme,v=u.options,m=o.rangeContainsMarker(t.activeRange,e),y=["fc-day-header",g.getClass("widgetHeader")];return p="function"==typeof v.columnHeaderHtml?v.columnHeaderHtml(e):"function"==typeof v.columnHeaderText?a.htmlEscape(v.columnHeaderText(e)):a.htmlEscape(h.format(e,i)),n?y=y.concat(s.getDayClasses(e,t,u,!0)):y.push("fc-"+l.DAY_IDS[e.getUTCDay()]),'<th class="'+y.join(" ")+'"'+(m&&n?' data-date="'+h.formatIso(e,{omitTime:!0})+'"':"")+(d>1?' colspan="'+d+'"':"")+(c?" "+c:"")+">"+(m?s.buildGotoAnchorHtml(f,{date:e,forceOff:!n||1===r},p):p)+"</th>"}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),a=n(11),s=n(21),l=n(4);t.computeFallbackHeaderFormat=r,t.renderDateCell=i},function(e,t,n){function r(e,t,n){for(var r=[],i=0,o=e.headerDates;i<o.length;i++){var a=o[i];r.push({start:n.add(a,t.minTime),end:n.add(a,t.maxTime)})}return r}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(22),a=n(17),s=n(8),l=n(68),u=n(51),d=function(e){function t(t,n){var i=e.call(this,t,n.el)||this;return i.buildDayRanges=a.memoize(r),i.slicer=new c,i.timeGrid=n,i}return i.__extends(t,e),t.prototype.render=function(e){var t=e.dateProfile,n=e.dayTable,r=this.dayRanges=this.buildDayRanges(n,t,this.dateEnv);this.timeGrid.receiveProps(i.__assign({},this.slicer.sliceProps(e,t,null,this.timeGrid,r),{dateProfile:t,cells:n.cells[0]}))},t.prototype.renderNowIndicator=function(e){this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(e,this.timeGrid,this.dayRanges),e)},t.prototype.prepareHits=function(){this.offsetTracker=new u.default(this.timeGrid.el)},t.prototype.releaseHits=function(){this.offsetTracker.destroy()},t.prototype.queryHit=function(e,t){var n=this.offsetTracker;if(n.isWithinClipping(e,t)){var r=n.computeLeft(),i=n.computeTop(),o=this.timeGrid.positionToHit(e-r,t-i);if(o)return{component:this.timeGrid,dateSpan:o.dateSpan,dayEl:o.dayEl,rect:{left:o.relativeRect.left+r,right:o.relativeRect.right+r,top:o.relativeRect.top+i,bottom:o.relativeRect.bottom+i},layer:0}}},t}(o.default);t.default=d,d.prototype.isInteractable=!0,t.buildDayRanges=r;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.sliceRange=function(e,t){for(var n=[],r=0;r<t.length;r++){var i=s.intersectRanges(e,t[r]);i&&n.push({start:i.start,end:i.end,isStart:i.start.valueOf()===e.start.valueOf(),isEnd:i.end.valueOf()===e.end.valueOf(),col:r})}return n},t}(l.default);t.TimeGridSlicer=c},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(11),o=n(3),a=n(2),s=n(7),l=n(44),u=n(49),d=n(209),c=n(21),p=n(65),f=s.createFormatter({week:"numeric"}),h=function(e){function t(t,n,r,a){var s=e.call(this,t,n,r,a)||this;s.renderHeadIntroHtml=function(){var e=s.theme;return s.colWeekNumbersVisible?'<th class="fc-week-number '+e.getClass("widgetHeader")+'" '+s.weekNumberStyleAttr()+"><span>"+i.htmlEscape(s.opt("weekLabel"))+"</span></th>":""},s.renderDayGridNumberIntroHtml=function(e,t){var n=s.dateEnv,r=t.props.cells[e][0].date;return s.colWeekNumbersVisible?'<td class="fc-week-number" '+s.weekNumberStyleAttr()+">"+c.buildGotoAnchorHtml(s,{date:r,type:"week",forceOff:1===t.colCnt},n.format(r,f))+"</td>":""},s.renderDayGridBgIntroHtml=function(){var e=s.theme;return s.colWeekNumbersVisible?'<td class="fc-week-number '+e.getClass("widgetContent")+'" '+s.weekNumberStyleAttr()+"></td>":""},s.renderDayGridIntroHtml=function(){return s.colWeekNumbersVisible?'<td class="fc-week-number" '+s.weekNumberStyleAttr()+"></td>":""},s.el.classList.add("fc-basic-view"),s.el.innerHTML=s.renderSkeletonHtml(),s.scroller=new l.default("hidden","auto");var u=s.scroller.el;s.el.querySelector(".fc-body > tr > td").appendChild(u),u.classList.add("fc-day-grid-container");var d=o.createElement("div",{className:"fc-day-grid"});u.appendChild(d);var h;return s.opt("weekNumbers")?s.opt("weekNumbersWithinDays")?(h=!0,s.colWeekNumbersVisible=!1):(h=!1,s.colWeekNumbersVisible=!0):(s.colWeekNumbersVisible=!1,h=!1),s.dayGrid=new p.default(s.context,d,{renderNumberIntroHtml:s.renderDayGridNumberIntroHtml,renderBgIntroHtml:s.renderDayGridBgIntroHtml,renderIntroHtml:s.renderDayGridIntroHtml,colWeekNumbersVisible:s.colWeekNumbersVisible,cellWeekNumbersVisible:h}),s}return r.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.dayGrid.destroy(),this.scroller.destroy()},t.prototype.renderSkeletonHtml=function(){var e=this.theme;return'<table class="'+e.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+e.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+e.getClass("widgetContent")+'"></td></tr></tbody></table>'},t.prototype.weekNumberStyleAttr=function(){return null!=this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},t.prototype.hasRigidRows=function(){var e=this.opt("eventLimit");return e&&"number"!=typeof e},t.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.dayGrid.updateSize(t)},t.prototype.updateBaseSize=function(e,t,n){var r,i,s=this.dayGrid,l=this.opt("eventLimit"),u=this.header?this.header.el:null;if(!s.rowEls)return void(n||(r=this.computeScrollerHeight(t),this.scroller.setHeight(r)));this.colWeekNumbersVisible&&(this.weekNumberWidth=a.matchCellWidths(o.findElements(this.el,".fc-week-number"))),this.scroller.clear(),u&&a.uncompensateScroll(u),s.removeSegPopover(),l&&"number"==typeof l&&s.limitRows(l),r=this.computeScrollerHeight(t),this.setGridHeight(r,n),l&&"number"!=typeof l&&s.limitRows(l),n||(this.scroller.setHeight(r),i=this.scroller.getScrollbarWidths(),(i.left||i.right)&&(u&&a.compensateScroll(u,i),r=this.computeScrollerHeight(t),this.scroller.setHeight(r)),this.scroller.lockOverflow(i))},t.prototype.computeScrollerHeight=function(e){return e-a.subtractInnerElHeight(this.el,this.scroller.el)},t.prototype.setGridHeight=function(e,t){this.opt("monthMode")?(t&&(e*=this.dayGrid.rowCnt/6),a.distributeHeight(this.dayGrid.rowEls,e,!t)):t?a.undistributeHeight(this.dayGrid.rowEls):a.distributeHeight(this.dayGrid.rowEls,e,!0)},t.prototype.computeInitialDateScroll=function(){return{top:0}},t.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},t.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},t}(u.default);t.default=h,h.prototype.dateProfileGeneratorClass=d.default},function(e,t,n){function r(e,t){var n=new u.default(e.renderRange,t);return new d.default(n,/year|month|week/.test(e.currentRangeUnit))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(170),a=n(167),s=n(69),l=n(17),u=n(66),d=n(67),c=function(e){function t(t,n,i,o){var u=e.call(this,t,n,i,o)||this;return u.buildDayTable=l.memoize(r),u.opt("columnHeader")&&(u.header=new a.default(u.context,u.el.querySelector(".fc-head-container"))),u.simpleDayGrid=new s.default(u.context,u.dayGrid),u}return i.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.header&&this.header.destroy(),this.simpleDayGrid.destroy()},t.prototype.render=function(t){e.prototype.render.call(this,t);var n=this.props.dateProfile,r=this.dayTable=this.buildDayTable(n,this.dateProfileGenerator);this.header&&this.header.receiveProps({dateProfile:n,dates:r.headerDates,datesRepDistinctDays:1===r.rowCnt,renderIntroHtml:this.renderHeadIntroHtml}),this.simpleDayGrid.receiveProps({dateProfile:n,dayTable:r,businessHours:t.businessHours,dateSelection:t.dateSelection,eventStore:t.eventStore,eventUiBases:t.eventUiBases,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,isRigid:this.hasRigidRows(),nextDayThreshold:this.nextDayThreshold})},t}(o.default);t.default=c,t.buildDayTable=r},function(e,t,n){function r(e){for(var t=c.startOfDay(e.renderRange.start),n=e.renderRange.end,r=[],i=[];t<n;)r.push(t),i.push({start:t,end:c.addDays(t,1)}),t=c.addDays(t,1);return{dayDates:r,dayRanges:i}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(3),a=n(11),s=n(2),l=n(49),u=n(44),d=n(210),c=n(4),p=n(7),f=n(8),h=n(21),g=n(10),v=n(17),m=n(20),y=function(e){function t(t,n,i,o){var a=e.call(this,t,n,i,o)||this;a.computeDateVars=v.memoize(r),a.eventStoreToSegs=v.memoize(a._eventStoreToSegs);var s=a.eventRenderer=new d.default(a);a.renderContent=m.memoizeRendering(s.renderSegs.bind(s),s.unrender.bind(s)),a.el.classList.add("fc-list-view")
;for(var l=(a.theme.getClass("listView")||"").split(" "),c=0,p=l;c<p.length;c++){var f=p[c];f&&a.el.classList.add(f)}return a.scroller=new u.default("hidden","auto"),a.el.appendChild(a.scroller.el),a.contentEl=a.scroller.el,a}return i.__extends(t,e),t.prototype.render=function(e){var t=this.computeDateVars(e.dateProfile),n=t.dayDates,r=t.dayRanges;this.dayDates=n,this.renderContent(this.eventStoreToSegs(e.eventStore,e.eventUiBases,r))},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.scroller.destroy()},t.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.eventRenderer.computeSizes(t),this.eventRenderer.assignSizes(t),this.scroller.clear(),r||this.scroller.setHeight(this.computeScrollerHeight(n))},t.prototype.computeScrollerHeight=function(e){return e-s.subtractInnerElHeight(this.el,this.scroller.el)},t.prototype._eventStoreToSegs=function(e,t,n){return this.eventRangesToSegs(g.sliceEventStore(e,t,this.props.dateProfile.activeRange,this.nextDayThreshold).fg,n)},t.prototype.eventRangesToSegs=function(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var o=i[r];n.push.apply(n,this.eventRangeToSegs(o,t))}return n},t.prototype.eventRangeToSegs=function(e,t){var n,r,i,o=this,a=o.dateEnv,s=o.nextDayThreshold,l=e.range,u=e.def.allDay,d=[];for(n=0;n<t.length;n++)if((r=f.intersectRanges(l,t[n]))&&(i={component:this,eventRange:e,start:r.start,end:r.end,isStart:e.isStart&&r.start.valueOf()===l.start.valueOf(),isEnd:e.isEnd&&r.end.valueOf()===l.end.valueOf(),dayIndex:n},d.push(i),!i.isEnd&&!u&&n+1<t.length&&l.end<a.add(t[n+1].start,s))){i.end=l.end,i.isEnd=!0;break}return d},t.prototype.renderEmptyMessage=function(){this.contentEl.innerHTML='<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+a.htmlEscape(this.opt("noEventsMessage"))+"</div></div></div>"},t.prototype.renderSegList=function(e){var t,n,r,i=this.groupSegsByDay(e),a=o.htmlToElement('<table class="fc-list-table '+this.calendar.theme.getClass("tableList")+'"><tbody></tbody></table>'),s=a.querySelector("tbody");for(t=0;t<i.length;t++)if(n=i[t])for(s.appendChild(this.buildDayHeaderRow(this.dayDates[t])),n=this.eventRenderer.sortEventSegs(n),r=0;r<n.length;r++)s.appendChild(n[r].el);this.contentEl.innerHTML="",this.contentEl.appendChild(a)},t.prototype.groupSegsByDay=function(e){var t,n,r=[];for(t=0;t<e.length;t++)n=e[t],(r[n.dayIndex]||(r[n.dayIndex]=[])).push(n);return r},t.prototype.buildDayHeaderRow=function(e){var t=this.dateEnv,n=p.createFormatter(this.opt("listDayFormat")),r=p.createFormatter(this.opt("listDayAltFormat"));return o.createElement("tr",{className:"fc-list-heading","data-date":t.formatIso(e,{omitTime:!0})},'<td class="'+(this.calendar.theme.getClass("tableListHeading")||this.calendar.theme.getClass("widgetHeader"))+'" colspan="3">'+(n?h.buildGotoAnchorHtml(this,e,{class:"fc-list-heading-main"},a.htmlEscape(t.format(e,n))):"")+(r?h.buildGotoAnchorHtml(this,e,{class:"fc-list-heading-alt"},a.htmlEscape(t.format(e,r))):"")+"</td>")},t}(l.default);t.default=y,y.prototype.isInteractable=!0,y.prototype.fgSegSelector=".fc-list-item"},function(e,t,n){function r(e,t,n){for(var r=a.__assign({},t.leftoverProps),i=0,o=n.pluginSystem.hooks.externalDefTransforms;i<o.length;i++){var s=o[i];m.__assign(r,s(e,t))}var l=u.parseEventDef(r,t.sourceId,e.allDay,Boolean(t.duration),n),d=e.range.start;e.allDay&&t.startTime&&(d=n.dateEnv.add(d,t.startTime));var c=t.duration?n.dateEnv.add(d,t.duration):n.getDefaultEventEnd(e.allDay,d);return{def:l,instance:u.createEventInstance(l.defId,{start:d,end:c})}}function i(e){var t=o(e,"event"),n=t?JSON.parse(t):{create:!1};return p.parseDragMeta(n)}function o(e,t){var n=c.dataAttrPrefix,r=(n?n+"-":"")+t;return e.getAttribute("data-"+r)||""}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),s=n(28),l=n(61),u=n(26),d=n(14),c=n(56),p=n(212),f=n(16),h=n(3),g=n(2),v=n(42),m=n(1),y=function(){function e(e,t){var n=this;this.receivingCalendar=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){n.dragMeta=n.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,t,i){var o=n.hitDragging.dragging,a=null,s=null,l=!1,u={affectedEvents:d.createEmptyEventStore(),mutatedEvents:d.createEmptyEventStore(),isEvent:n.dragMeta.create,origSeg:null};e&&(a=e.component.calendar,n.canDropElOnCalendar(i.subjectEl,a)&&(s=r(e.dateSpan,n.dragMeta,a),u.mutatedEvents=d.eventTupleToStore(s),(l=!v.isInteractionValid(u,a))&&(u.mutatedEvents=d.createEmptyEventStore(),s=null))),n.displayDrag(a,u),o.setMirrorIsVisible(t||!s||!document.querySelector(".fc-mirror")),l?g.disableCursor():g.enableCursor(),t||(o.setMirrorNeedsRevert(!s),n.receivingCalendar=a,n.droppableEvent=s)},this.handleDragEnd=function(e){var t=n,r=t.receivingCalendar,i=t.droppableEvent;if(n.clearDrag(),r&&i){var o=n.hitDragging.finalHit,a=o.component.view,s=n.dragMeta,l=r.buildDatePointApi(o.dateSpan);l.draggedEl=e.subjectEl,l.jsEvent=e.origEvent,l.view=a,r.publiclyTrigger("drop",[l]),s.create&&(r.dispatch({type:"MERGE_EVENTS",eventStore:d.eventTupleToStore(i)}),e.isTouch&&r.dispatch({type:"SELECT_EVENT",eventInstanceId:i.instance.instanceId}),r.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new f.default(r,i.def,i.instance),view:a}]))}n.receivingCalendar=null,n.droppableEvent=null};var i=this.hitDragging=new s.default(e,l.default.componentHash);i.requireInitial=!1,i.emitter.on("dragstart",this.handleDragStart),i.emitter.on("hitupdate",this.handleHitUpdate),i.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=t}return e.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?p.parseDragMeta(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?p.parseDragMeta(this.suppliedDragMeta(e)):i(e)},e.prototype.displayDrag=function(e,t){var n=this.receivingCalendar;n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){this.receivingCalendar&&this.receivingCalendar.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.canDropElOnCalendar=function(e,t){var n=t.opt("dropAccept");return"function"==typeof n?n(e):"string"!=typeof n||!n||Boolean(h.elementMatches(e,n))},e}();t.default=y,c.dataAttrPrefix=""},,,,,,,,,,,,function(e,t,n){var r=n(56);n(218),n(221),n(222),n(223),n(224);var i=n(225),o=n(226),a=n(227);n(154).default.defaultPlugins.push(i.default,o.default,a.default),e.exports=r},function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){function r(){return null===s&&(s=i()),s}function i(){var e=a.createElement("div",{style:{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}},"<div></div>");document.body.appendChild(e);var t=e.firstChild,n=t.getBoundingClientRect().left>e.getBoundingClientRect().left;return a.removeElement(e),n}function o(e){return e=Math.max(0,e),e=Math.round(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=null;t.getIsRtlScrollbarOnLeft=r,t.sanitizeScrollbarWidth=o},function(e,t,n){function r(e,t,n){var r=Object.keys(e).length;return 1===r&&"short"===e.timeZoneName?function(e){return h.formatTimeZoneOffset(e.timeZoneOffset)}:0===r&&t.week?function(e){return l(n.computeWeekNumber(e.marker),n.weekLabel,n.locale,t.week)}:i(e,t,n)}function i(e,t,n){e=p.__assign({},e),t=p.__assign({},t),o(e,t),e.timeZone="UTC";var r,i=new Intl.DateTimeFormat(n.locale.codes,e);if(t.omitZeroMinute){var s=p.__assign({},e);delete s.minute,r=new Intl.DateTimeFormat(n.locale.codes,s)}return function(o){var s,l=o.marker;return s=r&&!l.getUTCMinutes()?r:i,a(s.format(l),o,e,t,n)}}function o(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit")),"long"===e.timeZoneName&&(e.timeZoneName="short"),t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}function a(e,t,n,r,i){return e=e.replace(b,""),"short"===n.timeZoneName&&(e=s(e,"UTC"===i.timeZone||null==t.timeZoneOffset?"UTC":h.formatTimeZoneOffset(t.timeZoneOffset))),r.omitCommas&&(e=e.replace(E,"").trim()),r.omitZeroMinute&&(e=e.replace(":00","")),!1===r.meridiem?e=e.replace(y,"").trim():"narrow"===r.meridiem?e=e.replace(y,function(e,t){return t.toLocaleLowerCase()}):"short"===r.meridiem?e=e.replace(y,function(e,t){return t.toLocaleLowerCase()+"m"}):"lowercase"===r.meridiem&&(e=e.replace(y,function(e){return e.toLocaleLowerCase()})),e=e.replace(S," "),e=e.trim()}function s(e,t){var n=!1;return e=e.replace(D,function(){return n=!0,t}),n||(e+=" "+t),e}function l(e,t,n,r){var i=[];return"narrow"===r?i.push(t):"short"===r&&i.push(t," "),i.push(n.simpleNumberFormat.format(e)),n.options.isRtl&&i.reverse(),i.join("")}function u(e,t,n){return n.getMarkerYear(e)!==n.getMarkerYear(t)?5:n.getMarkerMonth(e)!==n.getMarkerMonth(t)?4:n.getMarkerDay(e)!==n.getMarkerDay(t)?2:f.timeAsMs(e)!==f.timeAsMs(t)?1:0}function d(e,t){var n={};for(var r in e)r in m&&!(m[r]<=t)||(n[r]=e[r]);return n}function c(e,t,n,r){for(var i=0;i<e.length;){var o=e.indexOf(t,i);if(-1===o)break;var a=e.substr(0,o);i=o+t.length;for(var s=e.substr(i),l=0;l<n.length;){var u=n.indexOf(r,l);if(-1===u)break;var d=n.substr(0,u);l=u+r.length;var c=n.substr(l);if(a===d&&s===c)return{before:a,after:s}}}return null}Object.defineProperty(t,"__esModule",{value:!0});var p=n(1),f=n(4),h=n(7),g=n(17),v={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},m={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},y=/\s*([ap])\.?m\.?/i,E=/,/g,S=/\s+/g,b=/\u200e/g,D=/UTC|GMT/,w=function(){function e(e){var t={},n={},i=0;for(var o in e)o in v?(n[o]=e[o],i=Math.max(v[o],i)):(t[o]=e[o],o in m&&(i=Math.max(m[o],i)));this.standardDateProps=t,this.extendedSettings=n,this.severity=i,this.buildFormattingFunc=g.memoize(r)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,n){var i=this,o=i.standardDateProps,a=i.extendedSettings,s=u(e.marker,t.marker,n.calendarSystem);if(!s)return this.format(e,n);var l=s;!(l>1)||"numeric"!==o.year&&"2-digit"!==o.year||"numeric"!==o.month&&"2-digit"!==o.month||"numeric"!==o.day&&"2-digit"!==o.day||(l=1);var p=this.format(e,n),f=this.format(t,n);if(p===f)return p;var h=d(o,l),g=r(h,a,n),v=g(e),m=g(t),y=c(p,v,f,m),E=a.separator||"";return y?y.before+v+E+m+y.after:p+E+f},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year";case 4:return"month";case 3:return"week";default:return"day"}},e}();t.NativeFormatter=w},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=function(){function e(e){this.func=e}return e.prototype.format=function(e,t){return this.func(r.createVerboseFormattingArg(e,null,t))},e.prototype.formatRange=function(e,t,n){return this.func(r.createVerboseFormattingArg(e,t,n))},e}();t.FuncFormatter=i},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(35),i=n(28),o=function(){function e(e){var t=this;this.handlePointerDown=function(e){var n=t.dragging;n.setIgnoreMove(!t.component.isValidDateDownEl(n.pointer.downEl))},this.handleDragEnd=function(e){var n=t.component;if(!t.dragging.pointer.wasTouchScroll){var r=t.hitDragging,o=r.initialHit,a=r.finalHit;o&&a&&i.isHitsEqual(o,a)&&n.calendar.triggerDateClick(o.dateSpan,o.dayEl,n.view,e.origEvent)}},this.component=e,this.dragging=new r.default(e.el),this.dragging.autoScroller.isEnabled=!1;var n=this.hitDragging=new i.default(this.dragging,e);n.emitter.on("pointerdown",this.handlePointerDown),n.emitter.on("dragend",this.handleDragEnd)}return e.prototype.destroy=function(){this.dragging.destroy()},e}();t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n(24),o=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,r=function(){n.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(r,this.revertDuration):setTimeout(r,0)},e.prototype.doRevertAnimation=function(e,t){var n=this.mirrorEl,o=this.sourceEl.getBoundingClientRect();n.style.transition="top "+t+"ms,left "+t+"ms",r.applyStyle(n,{left:o.left,top:o.top}),i.whenTransitionDone(n,function(){n.style.transition="",e()})},e.prototype.cleanup=function(){this.mirrorEl&&(r.removeElement(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&r.applyStyle(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl;return t||(t=this.mirrorEl=this.sourceEl.cloneNode(!0),t.classList.add("fc-unselectable"),t.classList.add("fc-dragging"),r.applyStyle(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},e}();t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(151),i="function"==typeof performance?performance.now:Date.now,o=function(){function e(){var e=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset);if(t){var n=i();e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,r=t-window.pageYOffset,o=null===this.pointerScreenY?0:r-this.pointerScreenY,a=null===this.pointerScreenX?0:n-this.pointerScreenX;o<0?this.everMovedUp=!0:o>0&&(this.everMovedDown=!0),a<0?this.everMovedLeft=!0:o>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(i()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,i=r-e.distance,o=i*i/(r*r)*this.maxVelocity*t,a=1;switch(e.name){case"left":a=-1;case"right":n.setScrollLeft(n.getScrollLeft()+o*a);break;case"top":a=-1;case"bottom":n.setScrollTop(n.getScrollTop()+o*a)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,i=0,o=this.scrollCaches;i<o.length;i++){var a=o[i],s=a.clientRect,l=e-s.left,u=s.right-e,d=t-s.top,c=s.bottom-t;l>=0&&u>=0&&d>=0&&c>=0&&(d<=n&&this.everMovedUp&&a.canScrollUp()&&(!r||r.distance>d)&&(r={scrollCache:a,name:"top",distance:d}),c<=n&&this.everMovedDown&&a.canScrollDown()&&(!r||r.distance>c)&&(r={scrollCache:a,name:"bottom",distance:c}),l<=n&&this.everMovedLeft&&a.canScrollLeft()&&(!r||r.distance>l)&&(r={scrollCache:a,name:"left",distance:l}),u<=n&&this.everMovedRight&&a.canScrollRight()&&(!r||r.distance>u)&&(r={scrollCache:a,name:"right",distance:u}))}return r},e.prototype.buildCaches=function(){return this.queryScrollEls().map(function(e){return e===window?new r.WindowScrollGeomCache(!1):new r.ElementScrollGeomCache(e,!1)})},e.prototype.queryScrollEls=function(){for(var e=[],t=0,n=this.scrollQuery;t<n.length;t++){var r=n[t];"object"==typeof r?e.push(r):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(r)))}return e},e}();t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=n(16),o=n(3),a=n(10),s=function(){function e(e){var t=this;this.handleSegClick=function(e,n){var r=t.component,s=a.getElSeg(n);if(s&&r.isValidSegDownEl(e.target)){var l=o.elementClosest(e.target,".fc-has-url"),u=l?l.querySelector("a[href]").href:"";r.publiclyTrigger("eventClick",[{el:n,event:new i.default(r.calendar,s.eventRange.def,s.eventRange.instance),jsEvent:e,view:r.view}]),u&&!e.defaultPrevented&&(window.location.href=u)}},this.component=e,this.destroy=r.listenBySelector(e.el,"click",e.fgSegSelector+","+e.bgSegSelector,this.handleSegClick)}return e}();t.default=s},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=n(16),o=n(10),a=function(){function e(e){var t=this;this.handleEventElRemove=function(e){e===t.currentSegEl&&t.handleSegLeave(null,t.currentSegEl)},this.handleSegEnter=function(e,n){o.getElSeg(n)&&(n.classList.add("fc-allow-mouse-resize"),t.currentSegEl=n,t.triggerEvent("eventMouseEnter",e,n))},this.handleSegLeave=function(e,n){t.currentSegEl&&(n.classList.remove("fc-allow-mouse-resize"),t.currentSegEl=null,t.triggerEvent("eventMouseLeave",e,n))},this.component=e,this.removeHoverListeners=r.listenToHoverBySelector(e.el,e.fgSegSelector+","+e.bgSegSelector,this.handleSegEnter,this.handleSegLeave),e.calendar.on("eventElRemove",this.handleEventElRemove)}return e.prototype.destroy=function(){this.removeHoverListeners(),this.component.calendar.off("eventElRemove",this.handleEventElRemove)},e.prototype.triggerEvent=function(e,t,n){var r=this.component,a=o.getElSeg(n);t&&!r.isValidSegDownEl(t.target)||r.publiclyTrigger(e,[{el:n,event:new i.default(this.component.calendar,a.eventRange.def,a.eventRange.instance),jsEvent:t,view:r.view}])},e}();t.default=a},function(e,t,n){function r(e,t,n,r,i){for(var o=e.component.dateEnv,a=e.dateSpan.range.start,s=t.dateSpan.range.start,l=u.diffDates(a,s,o,e.component.largeUnit),d={},c=0,p=i;c<p.length;c++){var h=p[c],g=h(e,t);if(!1===g)return null;g&&f.__assign(d,g)}if(n){if(o.add(r.start,l)<r.end)return d.startDelta=l,d}else if(o.add(r.end,l)>r.start)return d.endDelta=l,d;return null}Object.defineProperty(t,"__esModule",{value:!0});var i=n(28),o=n(43),a=n(3),s=n(35),l=n(14),u=n(2),d=n(16),c=n(10),p=n(9),f=n(1),h=function(){function e(e){var t=this;this.draggingSeg=null,this.eventRange=null,this.relevantEvents=null,this.validMutation=null,this.mutatedRelevantEvents=null,this.handlePointerDown=function(e){var n=t.component,r=t.querySeg(e),i=t.eventRange=r.eventRange;t.dragging.minDistance=n.opt("eventDragMinDistance"),t.dragging.setIgnoreMove(!t.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&t.component.props.eventSelection!==i.instance.instanceId)},this.handleDragStart=function(e){var n=t.component.calendar,r=t.eventRange;t.relevantEvents=l.getRelevantEvents(n.state.eventStore,t.eventRange.instance.instanceId),t.draggingSeg=t.querySeg(e),n.unselect(),n.publiclyTrigger("eventResizeStart",[{el:t.draggingSeg.el,event:new d.default(n,r.def,r.instance),jsEvent:e.origEvent,view:t.component.view}])},this.handleHitUpdate=function(e,n,a){var s=t.component.calendar,d=t.relevantEvents,c=t.hitDragging.initialHit,p=t.eventRange.instance,f=null,h=null,g=!1,v={affectedEvents:d,mutatedEvents:l.createEmptyEventStore(),isEvent:!0,origSeg:t.draggingSeg};e&&(f=r(c,e,a.subjectEl.classList.contains("fc-start-resizer"),p.range,s.pluginSystem.hooks.eventResizeJoinTransforms)),f&&(h=o.applyMutationToEventStore(d,s.eventUiBases,f,s),v.mutatedEvents=h,t.component.isInteractionValid(v)||(g=!0,f=null,h=null,v.mutatedEvents=null)),h?s.dispatch({type:"SET_EVENT_RESIZE",state:v}):s.dispatch({type:"UNSET_EVENT_RESIZE"}),g?u.disableCursor():u.enableCursor(),n||(f&&i.isHitsEqual(c,e)&&(f=null),t.validMutation=f,t.mutatedRelevantEvents=h)},this.handleDragEnd=function(e){var n=t.component.calendar,r=t.component.view,i=t.eventRange.def,o=t.eventRange.instance,a=new d.default(n,i,o),s=t.relevantEvents,l=t.mutatedRelevantEvents;n.publiclyTrigger("eventResizeStop",[{el:t.draggingSeg.el,event:a,jsEvent:e.origEvent,view:r}]),t.validMutation?(n.dispatch({type:"MERGE_EVENTS",eventStore:l}),n.publiclyTrigger("eventResize",[{el:t.draggingSeg.el,startDelta:t.validMutation.startDelta||p.createDuration(0),endDelta:t.validMutation.endDelta||p.createDuration(0),prevEvent:a,event:new d.default(n,l.defs[i.defId],o?l.instances[o.instanceId]:null),revert:function(){n.dispatch({type:"MERGE_EVENTS",eventStore:s})},jsEvent:e.origEvent,view:r}])):n.publiclyTrigger("_noEventResize"),t.draggingSeg=null,t.relevantEvents=null,t.validMutation=null},this.component=e;var n=this.dragging=new s.default(e.el);n.pointer.selector=".fc-resizer",n.touchScrollAllowed=!1,n.autoScroller.isEnabled=e.opt("dragScroll");var a=this.hitDragging=new i.default(this.dragging,e);a.emitter.on("pointerdown",this.handlePointerDown),a.emitter.on("dragstart",this.handleDragStart),a.emitter.on("hitupdate",this.handleHitUpdate),a.emitter.on("dragend",this.handleDragEnd)}return e.prototype.destroy=function(){this.dragging.destroy()},e.prototype.querySeg=function(e){return c.getElSeg(a.elementClosest(e.subjectEl,this.component.fgSegSelector))},e}();t.default=h},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),o=n(36),a=n(47),s=function(){function e(e){this.overrides=r.__assign({},e),this.dynamicOverrides={},this.compute()}return e.prototype.add=function(e,t){this.dynamicOverrides[e]=t,this.compute()},e.prototype.compute=function(){var e,t,n,r;e=i.firstDefined(this.dynamicOverrides.locale,this.overrides.locale,o.globalDefaults.locale),t=a.getLocale(e).options,n=i.firstDefined(this.dynamicOverrides.dir,this.overrides.dir,t.dir),r="rtl"===n?o.rtlDefaults:{},this.dirDefaults=r,this.localeDefaults=t,this.computed=o.mergeOptions([o.globalDefaults,r,t,this.overrides,this.dynamicOverrides])},e}();t.default=s},function(e,t,n){function r(e,t){a[e]=t}function i(e){return new a[e]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),a={};t.registerCalendarSystem=r,t.createCalendarSystem=i,r("gregory",function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return o.arrayToUtcDate(e)},e.prototype.markerToArray=function(e){return o.dateToUtcArray(e)},e}())},function(e,t,n){function r(e,t,n){for(var r=i(e.viewType,t),g=o(e.dateProfile,t,e.currentDate,r,n),v=f.default(e.eventSources,t,g,n),m=p.__assign({},e,{viewType:r,dateProfile:g,currentDate:a(e.currentDate,t,g),eventSources:v,eventStore:h.default(e.eventStore,t,v,g,n),dateSelection:s(e.dateSelection,t,n),eventSelection:l(e.eventSelection,t),eventDrag:u(e.eventDrag,t,v,n),eventResize:d(e.eventResize,t,v,n),eventSourceLoadingLevel:c(v),loadingLevel:c(v)}),y=0,E=n.pluginSystem.hooks.reducers;y<E.length;y++){m=(0,E[y])(m,t,n)}return m}function i(e,t){switch(t.type){case"SET_VIEW_TYPE":return t.viewType;default:return e}}function o(e,t,n,r,i){var o;switch(t.type){case"PREV":o=i.dateProfileGenerators[r].buildPrev(e);break;case"NEXT":o=i.dateProfileGenerators[r].buildNext(e);break;case"SET_DATE":e.activeRange&&v.rangeContainsMarker(e.activeRange,t.dateMarker)||(o=i.dateProfileGenerators[r].build(t.dateMarker,void 0,!0));break;case"SET_VIEW_TYPE":o=i.dateProfileGenerators[r].build(t.dateMarker||n,void 0,!0)}return!o||!o.isValid||e&&g.isDateProfilesEqual(e,o)?e:o}function a(e,t,n){switch(t.type){case"PREV":case"NEXT":return v.rangeContainsMarker(n.currentRange,e)?e:n.currentRange.start;case"SET_DATE":case"SET_VIEW_TYPE":var r=t.dateMarker||e;return n.activeRange&&!v.rangeContainsMarker(n.activeRange,r)?n.currentRange.start:r;default:return e}}function s(e,t,n){switch(t.type){case"SELECT_DATES":return t.selection;case"UNSELECT_DATES":return null;default:return e}}function l(e,t){switch(t.type){case"SELECT_EVENT":return t.eventInstanceId;case"UNSELECT_EVENT":return"";default:return e}}function u(e,t,n,r){switch(t.type){case"SET_EVENT_DRAG":var i=t.state;return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg};case"UNSET_EVENT_DRAG":return null;default:return e}}function d(e,t,n,r){switch(t.type){case"SET_EVENT_RESIZE":var i=t.state;return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg};case"UNSET_EVENT_RESIZE":return null;default:return e}}function c(e){var t=0;for(var n in e)e[n].isFetching&&t++;return t}Object.defineProperty(t,"__esModule",{value:!0});var p=n(1),f=n(199),h=n(143),g=n(48),v=n(8);t.default=r},function(e,t,n){function r(e,t,n,r){switch(t.type){case"ADD_EVENT_SOURCES":return i(e,t.sources,n?n.activeRange:null,r);case"REMOVE_EVENT_SOURCE":return o(e,t.sourceId);case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return n?a(e,n.activeRange,r):e;case"FETCH_EVENT_SOURCES":case"CHANGE_TIMEZONE":return l(e,t.sourceIds?h.arrayToHash(t.sourceIds):c(e),n?n.activeRange:null,r);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return d(e,t.sourceId,t.fetchId,t.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return e}}function i(e,t,n,r){for(var i={},o=0,s=t;o<s.length;o++){var l=s[o];i[l.sourceId]=l}return n&&(i=a(i,n,r)),p.__assign({},e,i)}function o(e,t){return h.filterHash(e,function(e){return e.sourceId!==t})}function a(e,t,n){return l(e,h.filterHash(e,function(e){return s(e,t,n)}),t,n)}function s(e,t,n){return f.doesSourceNeedRange(e)?!n.opt("lazyFetching")||!e.fetchRange||t.start<e.fetchRange.start||t.end>e.fetchRange.end:!e.latestFetchId}function l(e,t,n,r){var i={};for(var o in e){var a=e[o];t[o]?i[o]=u(a,n,r):i[o]=a}return i}function u(e,t,n){var r=f.getEventSourceDef(e.sourceDefId),i=String(v++);return r.fetch({eventSource:e,calendar:n,range:t},function(r){var o,a,s=r.rawEvents,l=n.opt("eventSourceSuccess");e.success&&(a=e.success(s,r.response)),l&&(o=l(s,r.response)),s=a||o||s,n.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:i,fetchRange:t,rawEvents:s})},function(r){var o=n.opt("eventSourceFailure");g.warn(r.message,r),e.failure&&e.failure(r),o&&o(r),n.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:i,fetchRange:t,error:r})}),p.__assign({},e,{isFetching:!0,latestFetchId:i})}function d(e,t,n,r){var i,o=e[t];return o&&n===o.latestFetchId?p.__assign({},e,(i={},i[t]=p.__assign({},o,{isFetching:!1,fetchRange:r}),i)):e}function c(e){return h.filterHash(e,function(e){return f.doesSourceNeedRange(e)})}Object.defineProperty(t,"__esModule",{value:!0});var p=n(1),f=n(29),h=n(12),g=n(2);t.default=r;var v=0},function(e,t,n){function r(e){return a.mapHash(e,i)}function i(e){"function"==typeof e&&(e={class:e});var t={},n=o.refineProps(e,s,{},t);return{superType:n.type,class:n.class,options:t}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(12);t.parseViewConfigs=r;var s={type:String,class:null}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(11),o=n(3),a=n(34),s=n(20),l=function(e){function t(t,n){var r=e.call(this,t)||this;return r._renderLayout=s.memoizeRendering(r.renderLayout,r.unrenderLayout),r._updateTitle=s.memoizeRendering(r.updateTitle,null,[r._renderLayout]),r._updateActiveButton=s.memoizeRendering(r.updateActiveButton,null,[r._renderLayout]),r._updateToday=s.memoizeRendering(r.updateToday,null,[r._renderLayout]),r._updatePrev=s.memoizeRendering(r.updatePrev,null,[r._renderLayout]),r._updateNext=s.memoizeRendering(r.updateNext,null,[r._renderLayout]),r.el=o.createElement("div",{className:"fc-toolbar "+n}),r}return r.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this._renderLayout.unrender(),o.removeElement(this.el)},t.prototype.render=function(e){this._renderLayout(e.layout),this._updateTitle(e.title),this._updateActiveButton(e.activeButton),this._updateToday(e.isTodayEnabled),this._updatePrev(e.isPrevEnabled),this._updateNext(e.isNextEnabled)},t.prototype.renderLayout=function(e){var t=this.el;this.viewsWithButtons=[],o.appendToElement(t,this.renderSection("left",e.left)),o.appendToElement(t,this.renderSection("right",e.right)),o.appendToElement(t,this.renderSection("center",e.center)),o.appendToElement(t,'<div class="fc-clear"></div>')},t.prototype.unrenderLayout=function(){this.el.innerHTML=""},t.prototype.renderSection=function(e,t){var n=this,r=this,a=r.theme,s=r.calendar,l=s.optionsManager,u=s.viewSpecs,d=o.createElement("div",{className:"fc-"+e}),c=l.computed.customButtons||{},p=l.overrides.buttonText||{},f=l.computed.buttonText||{};return t&&t.split(" ").forEach(function(e,t){var r,l=[],h=!0;if(e.split(",").forEach(function(e,t){var r,d,g,v,m,y,E,S,b;if("title"===e)l.push(o.htmlToElement("<h2>&nbsp;</h2>")),h=!1;else if((r=c[e])?(g=function(e){r.click&&r.click.call(S,e)},(v=a.getCustomButtonIconClass(r))||(v=a.getIconClass(e))||(m=r.text)):(d=u[e])?(n.viewsWithButtons.push(e),g=function(){s.changeView(e)},(m=d.buttonTextOverride)||(v=a.getIconClass(e))||(m=d.buttonTextDefault)):s[e]&&(g=function(){s[e]()},(m=p[e])||(v=a.getIconClass(e))||(m=f[e])),g){E=["fc-"+e+"-button",a.getClass("button"),a.getClass("stateDefault")],m?(y=i.htmlEscape(m),b=""):v&&(y="<span class='"+v+"'></span>",b=' aria-label="'+e+'"'),S=o.htmlToElement('<button type="button" class="'+E.join(" ")+'"'+b+">"+y+"</button>");var D=function(){var e=a.getClass("stateActive"),t=a.getClass("stateDisabled");return!(e&&S.classList.contains(e)||t&&S.classList.contains(t))};S.addEventListener("click",function(e){var t=a.getClass("stateDisabled"),n=a.getClass("stateHover");t&&S.classList.contains(t)||(g(e),!D()&&n&&S.classList.remove(n))}),S.addEventListener("mousedown",function(e){var t=a.getClass("stateDown");D()&&t&&S.classList.add(t)}),S.addEventListener("mouseup",function(e){var t=a.getClass("stateDown");t&&S.classList.remove(t)}),S.addEventListener("mouseenter",function(e){var t=a.getClass("stateHover");D()&&t&&S.classList.add(t)}),S.addEventListener("mouseleave",function(e){var t=a.getClass("stateHover"),n=a.getClass("stateDown");t&&S.classList.remove(t),n&&S.classList.remove(n)}),l.push(S)}}),h&&l.length>0){var g=a.getClass("cornerLeft"),v=a.getClass("cornerRight");g&&l[0].classList.add(g),v&&l[l.length-1].classList.add(v)}if(l.length>1){r=document.createElement("div");var m=a.getClass("buttonGroup");h&&m&&r.classList.add(m),o.appendToElement(r,l),d.appendChild(r)}else o.appendToElement(d,l)}),d},t.prototype.updateToday=function(e){this.toggleButtonEnabled("today",e)},t.prototype.updatePrev=function(e){this.toggleButtonEnabled("prev",e)},t.prototype.updateNext=function(e){this.toggleButtonEnabled("next",e)},t.prototype.updateTitle=function(e){o.findElements(this.el,"h2").forEach(function(t){t.innerText=e})},t.prototype.updateActiveButton=function(e){var t=this.theme.getClass("stateActive");o.findElements(this.el,"button").forEach(function(n){e&&n.classList.contains("fc-"+e+"-button")?n.classList.add(t):n.classList.remove(t)})},t.prototype.toggleButtonEnabled=function(e,t){var n=this.theme.getClass("stateDisabled");o.findElements(this.el,".fc-"+e+"-button").forEach(function(e){e.disabled=!t,
t?e.classList.remove(n):e.classList.add(n)})},t}(a.default);t.default=l},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(163),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.attachSegs=function(e,t){this.segsByCol=this.timeGrid.groupSegsByCol(e),this.timeGrid.attachSegsByCol(this.segsByCol,this.timeGrid.mirrorContainerEls),this.sourceSeg=t.sourceSeg},t.prototype.generateSegCss=function(t){var n=e.prototype.generateSegCss.call(this,t),r=this.sourceSeg;if(r&&r.col===t.col){var i=e.prototype.generateSegCss.call(this,r);n.left=i.left,n.right=i.right,n.marginLeft=i.marginLeft,n.marginRight=i.marginRight}return n},t}(i.default);t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(64),o=function(e){function t(t){var n=e.call(this,t.context)||this;return n.timeGrid=t,n}return r.__extends(t,e),t.prototype.attachSegs=function(e,t){var n,r=this.timeGrid;return"bgEvent"===e?n=r.bgContainerEls:"businessHours"===e?n=r.businessContainerEls:"highlight"===e&&(n=r.highlightContainerEls),r.attachSegsByCol(r.groupSegsByCol(t),n),t.map(function(e){return e.el})},t.prototype.computeSegSizes=function(e){this.timeGrid.computeSegVerticals(e)},t.prototype.assignSegSizes=function(e){this.timeGrid.assignSegVerticals(e)},t}(i.default);t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n(24),o=n(15),a=function(){function e(e){var t=this;this.isHidden=!0,this.margin=10,this.documentMousedown=function(e){t.el&&!t.el.contains(e.target)&&t.hide()},this.options=e}return e.prototype.show=function(){this.isHidden&&(this.el||this.render(),this.el.style.display="",this.position(),this.isHidden=!1,this.trigger("show"))},e.prototype.hide=function(){this.isHidden||(this.el.style.display="none",this.isHidden=!0,this.trigger("hide"))},e.prototype.render=function(){var e=this,t=this.options,n=this.el=r.createElement("div",{className:"fc-popover "+(t.className||""),style:{top:"0",left:"0"}});"function"==typeof t.content&&t.content(n),t.parentEl.appendChild(n),i.listenBySelector(n,"click",".fc-close",function(t){e.hide()}),t.autoHide&&document.addEventListener("mousedown",this.documentMousedown)},e.prototype.destroy=function(){this.hide(),this.el&&(r.removeElement(this.el),this.el=null),document.removeEventListener("mousedown",this.documentMousedown)},e.prototype.position=function(){var e,t,n=this.options,i=this.el,a=i.getBoundingClientRect(),s=o.computeRect(i.offsetParent),l=o.computeClippingRect(n.parentEl);e=n.top||0,t=void 0!==n.left?n.left:void 0!==n.right?n.right-a.width:0,e=Math.min(e,l.bottom-a.height-this.margin),e=Math.max(e,l.top+this.margin),t=Math.min(t,l.right-a.width-this.margin),t=Math.max(t,l.left+this.margin),r.applyStyle(i,{top:e-s.top,left:t-s.left})},e.prototype.trigger=function(e){this.options[e]&&this.options[e].apply(this,Array.prototype.slice.call(arguments,1))},e}();t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(3),o=n(165),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.attachSegs=function(e,t){var n=t.sourceSeg,r=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach(function(e,t){var o,a,s=i.htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>');n&&n.row===t?o=n.el:(o=e.querySelector(".fc-content-skeleton tbody"))||(o=e.querySelector(".fc-content-skeleton table")),a=o.getBoundingClientRect().top-e.getBoundingClientRect().top,s.style.top=a+"px",s.querySelector("table").appendChild(r[t].tbodyEl),e.appendChild(s)})},t}(o.default);t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(3),o=n(64),a=function(e){function t(t){var n=e.call(this,t.context)||this;return n.fillSegTag="td",n.dayGrid=t,n}return r.__extends(t,e),t.prototype.renderSegs=function(t,n){"bgEvent"===t&&(n=n.filter(function(e){return e.eventRange.def.allDay})),e.prototype.renderSegs.call(this,t,n)},t.prototype.attachSegs=function(e,t){var n,r,i,o=[];for(n=0;n<t.length;n++)r=t[n],i=this.renderFillRow(e,r),this.dayGrid.rowEls[r.row].appendChild(i),o.push(i);return o},t.prototype.renderFillRow=function(e,t){var n,r,o,a=this.dayGrid,s=a.colCnt,l=a.isRtl,u=l?s-1-t.lastCol:t.firstCol,d=l?s-1-t.firstCol:t.lastCol,c=u,p=d+1;n="businessHours"===e?"bgevent":e.toLowerCase(),r=i.htmlToElement('<div class="fc-'+n+'-skeleton"><table><tr></tr></table></div>'),o=r.getElementsByTagName("tr")[0],c>0&&i.appendToElement(o,new Array(c+1).join("<td></td>")),t.el.colSpan=p-c,o.appendChild(t.el),p<s&&i.appendToElement(o,new Array(s-p+1).join("<td></td>"));var f=a.renderProps.renderIntroHtml();return f&&(a.isRtl?i.appendToElement(o,f):i.prependToElement(o,f)),r},t}(o.default);t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(22),o=n(166),a=n(11),s=n(7),l=n(51),u=n(15),d=n(32),c=n(4),p=n(3),f=n(20),h=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=r.eventRenderer=new g(r),o=r.renderFrame=f.memoizeRendering(r._renderFrame);return r.renderFgEvents=f.memoizeRendering(i.renderSegs.bind(i),i.unrender.bind(i),[o]),r.renderEventSelection=f.memoizeRendering(i.selectByInstanceId.bind(i),i.unselectByInstanceId.bind(i),[r.renderFgEvents]),r.renderEventDrag=f.memoizeRendering(i.hideByHash.bind(i),i.showByHash.bind(i),[o]),r.renderEventResize=f.memoizeRendering(i.hideByHash.bind(i),i.showByHash.bind(i),[o]),r}return r.__extends(t,e),t.prototype.render=function(e){this.renderFrame(e.date),this.renderFgEvents(e.fgSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDragInstances),this.renderEventResize(e.eventResizeInstances)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderFrame.unrender()},t.prototype._renderFrame=function(e){var t=this,n=t.theme,r=t.dateEnv,i=r.format(e,s.createFormatter(this.opt("dayPopoverFormat")));this.el.innerHTML='<div class="fc-header '+n.getClass("popoverHeader")+'"><span class="fc-close '+n.getIconClass("close")+'"></span><span class="fc-title">'+a.htmlEscape(i)+'</span><div class="fc-clear"></div></div><div class="fc-body '+n.getClass("popoverContent")+'"><div class="fc-event-container"></div></div>',this.segContainerEl=this.el.querySelector(".fc-event-container")},t.prototype.prepareHits=function(){var e=u.computeRect(this.el);this.width=e.right-e.left,this.height=e.bottom-e.top,this.offsetTracker=new l.default(this.el)},t.prototype.releaseHits=function(){this.offsetTracker.destroy()},t.prototype.queryHit=function(e,t){var n=this.offsetTracker.computeLeft(),r=this.offsetTracker.computeTop(),i={left:n,right:n+this.width,top:r,bottom:r+this.height};if(d.pointInsideRect({left:e,top:t},i)){var o=this.props.date;return{component:this,dateSpan:{allDay:!0,range:{start:o,end:c.addDays(o,1)}},dayEl:this.el,rect:i,layer:1}}return null},t}(i.default);t.default=h,h.prototype.isInteractable=!0,h.prototype.useEventCenter=!1;var g=function(e){function t(t){var n=e.call(this,t.context)||this;return n.dayTile=t,n}return r.__extends(t,e),t.prototype.attachSegs=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];this.dayTile.segContainerEl.appendChild(r.el)}},t.prototype.detachSegs=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];p.removeElement(r.el)}},t}(o.default);t.DayTileEventRenderer=g},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(145),o=n(10),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},t.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},t.prototype.getKeysForEventDef=function(e){return e.allDay?o.hasBgRendering(e)?["timed","allDay"]:["allDay"]:["timed"]},t}(i.default);t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(48),o=n(4),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.buildRenderRange=function(t,n,r){var i,a=this.dateEnv,s=e.prototype.buildRenderRange.call(this,t,n,r),l=s.start,u=s.end;if(/^(year|month)$/.test(n)&&(l=a.startOfWeek(l),i=a.startOfWeek(u),i.valueOf()!==u.valueOf()&&(u=o.addWeeks(i,1))),this.options.monthMode&&this.options.fixedWeekCount){var d=Math.ceil(o.diffWeeks(l,u));u=o.addWeeks(u,6-d)}return{start:l,end:u}},t}(i.default);t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(11),o=n(50),a=n(2),s=n(21),l=function(e){function t(t){var n=e.call(this,t.context)||this;return n.listView=t,n}return r.__extends(t,e),t.prototype.attachSegs=function(e){e.length?this.listView.renderSegList(e):this.listView.renderEmptyMessage()},t.prototype.detachSegs=function(){},t.prototype.renderSegHtml=function(e){var t,n=this.context,r=n.view,o=n.theme,l=e.eventRange,u=l.def,d=l.instance,c=l.ui,p=u.url,f=["fc-list-item"].concat(c.classNames),h=c.backgroundColor;return t=u.allDay?s.getAllDayHtml(r):a.isMultiDayRange(l.range)?e.isStart?i.htmlEscape(this._getTimeText(d.range.start,e.end,!1)):e.isEnd?i.htmlEscape(this._getTimeText(e.start,d.range.end,!1)):s.getAllDayHtml(r):i.htmlEscape(this.getTimeText(l)),p&&f.push("fc-has-url"),'<tr class="'+f.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+o.getClass("widgetContent")+'">'+(t||"")+"</td>":"")+'<td class="fc-list-item-marker '+o.getClass("widgetContent")+'"><span class="fc-event-dot"'+(h?' style="background-color:'+h+'"':"")+'></span></td><td class="fc-list-item-title '+o.getClass("widgetContent")+'"><a'+(p?' href="'+i.htmlEscape(p)+'"':"")+">"+i.htmlEscape(u.title||"")+"</a></td></tr>"},t.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:"short"}},t}(o.default);t.default=l},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(35),i=n(173),o=n(36),a=function(){function e(e,t){void 0===t&&(t={});var n=this;this.handlePointerDown=function(e){var t=n.dragging,r=n.settings,i=r.minDistance,a=r.longPressDelay;t.minDistance=null!=i?i:e.isTouch?0:o.globalDefaults.eventDragMinDistance,t.delay=e.isTouch?null!=a?a:o.globalDefaults.longPressDelay:0},this.handleDragStart=function(e){e.isTouch&&n.dragging.delay&&e.subjectEl.classList.contains("fc-event")&&n.dragging.mirror.getMirrorEl().classList.add("fc-selected")},this.settings=t;var a=this.dragging=new r.default(e);a.touchScrollAllowed=!1,null!=t.itemSelector&&(a.pointer.selector=t.itemSelector),null!=t.appendTo&&(a.mirror.parentNode=t.appendTo),a.emitter.on("pointerdown",this.handlePointerDown),a.emitter.on("dragstart",this.handleDragStart),new i.default(a,t.eventData)}return e.prototype.destroy=function(){this.dragging.destroy()},e}();t.default=a},function(e,t,n){function r(e){var t={},n=o.refineProps(e,a,s,t);return n.leftoverProps=t,n}Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),o=n(2),a={startTime:i.createDuration,duration:i.createDuration,create:Boolean,sourceId:String},s={create:!0};t.parseDragMeta=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(173),i=n(214),o=function(){function e(e,t){var n=document;e===document||e instanceof Element?(n=e,t=t||{}):t=e||{};var o=this.dragging=new i.default(n);"string"==typeof t.itemSelector?o.pointer.selector=t.itemSelector:n===document&&(o.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(o.mirrorSelector=t.mirrorSelector),new r.default(o,t.eventData)}return e.prototype.destroy=function(){this.dragging.destroy()},e}();t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(45),o=n(62),a=function(e){function t(t){var n=e.call(this)||this;n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)};var r=n.pointer=new i.default(t);return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("pointermove",n.handlePointerMove),r.emitter.on("pointerup",n.handlePointerUp),n}return r.__extends(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}},t}(o.default);t.default=a},function(e,t,n){function r(e,t){void 0===t&&(t={});var n=o(t),r=l.createFormatter(t),i=n.createMarkerMeta(e);return i?n.format(i.marker,r,{forcedTzo:i.forcedTzo}):""}function i(e,t,n){var r=o("object"==typeof n&&n?n:{}),i=l.createFormatter(n,d.globalDefaults.defaultRangeSeparator),a=r.createMarkerMeta(e),s=r.createMarkerMeta(t);return a&&s?r.formatRange(a.marker,s.marker,i,{forcedStartTzo:a.forcedTzo,forcedEndTzo:s.forcedTzo,isEndExclusive:n.isEndExclusive}):""}function o(e){var t=e.locale||d.globalDefaults.locale;return e=a.__assign({timeZone:d.globalDefaults.timeZone,timeZoneImpl:d.globalDefaults.timeZoneImpl,calendarSystem:"gregory"},e,{locale:u.getLocale(t)}),new s.DateEnv(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),s=n(63),l=n(7),u=n(47),d=n(36);t.formatDate=r,t.formatRange=i},function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(59),i=n(148),o=n(149),a=n(219),s=n(220);r.defineThemeSystem("standard",i.default),r.defineThemeSystem("jquery-ui",o.default),r.defineThemeSystem("bootstrap3",a.default),r.defineThemeSystem("bootstrap4",s.default)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(33),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t}(i.default);t.default=o,o.prototype.classes={widget:"fc-bootstrap3",tableGrid:"table-bordered",tableList:"table",tableListHeading:"active",buttonGroup:"btn-group",button:"btn btn-default",stateActive:"active",stateDisabled:"disabled",today:"alert alert-info",popover:"panel panel-default",popoverHeader:"panel-heading",popoverContent:"panel-body",headerRow:"panel-default",dayRow:"panel-default",listView:"panel panel-default"},o.prototype.baseIconClass="glyphicon",o.prototype.iconClasses={close:"glyphicon-remove",prev:"glyphicon-chevron-left",next:"glyphicon-chevron-right",prevYear:"glyphicon-backward",nextYear:"glyphicon-forward"},o.prototype.iconOverrideOption="bootstrapGlyphicons",o.prototype.iconOverrideCustomButtonOption="bootstrapGlyphicon",o.prototype.iconOverridePrefix="glyphicon-"},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(33),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t}(i.default);t.default=o,o.prototype.classes={widget:"fc-bootstrap4",tableGrid:"table-bordered",tableList:"table",tableListHeading:"table-active",buttonGroup:"btn-group",button:"btn btn-primary",stateActive:"active",stateDisabled:"disabled",today:"alert alert-info",popover:"card card-primary",popoverHeader:"card-header",popoverContent:"card-body",headerRow:"table-bordered",dayRow:"table-bordered",listView:"card card-primary"},o.prototype.baseIconClass="fa",o.prototype.iconClasses={close:"fa-times",prev:"fa-chevron-left",next:"fa-chevron-right",prevYear:"fa-angle-double-left",nextYear:"fa-angle-double-right"},o.prototype.iconOverrideOption="bootstrapFontAwesome",o.prototype.iconOverrideCustomButtonOption="bootstrapFontAwesome",o.prototype.iconOverridePrefix="fa-"},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(29).registerEventSourceDef({ignoreRange:!0,parseMeta:function(e){return Array.isArray(e)?e:Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}})},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(146);n(29).registerEventSourceDef({parseMeta:function(e){return"function"==typeof e?e:"function"==typeof e.events?e.events:null},fetch:function(e,t,n){var i=e.calendar.dateEnv,o=e.eventSource.meta;r.unpromisify(o.bind(null,{start:i.toDate(e.range.start),end:i.toDate(e.range.end),startStr:i.formatIso(e.range.start),endStr:i.formatIso(e.range.end),timeZone:i.timeZone}),function(e){t({rawEvents:e})},n)}})},function(e,t,n){function r(e,t,n){var r,i,o,s,l=n.dateEnv,u={};return r=e.startParam,null==r&&(r=n.opt("startParam")),i=e.endParam,null==i&&(i=n.opt("endParam")),o=e.timeZoneParam,null==o&&(o=n.opt("timeZoneParam")),s="function"==typeof e.extraParams?e.extraParams():e.extraParams||{},a.__assign(u,s),u[r]=l.formatIso(t.start),u[i]=l.formatIso(t.end),"local"!==l.timeZone&&(u[o]=l.timeZone),u}Object.defineProperty(t,"__esModule",{value:!0});var i=n(70),o=n(29),a=n(1);o.registerEventSourceDef({parseMeta:function(e){if("string"==typeof e)e={url:e};else if(!e||"object"!=typeof e||!e.url)return null;return{url:e.url,method:(e.method||"GET").toUpperCase(),extraParams:e.data,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}},fetch:function(e,t,n){var o,a=e.eventSource.meta,s=r(a,e.range,e.calendar);o="GET"===a.method?i.get(a.url).query(s):i(a.method,a.url).send(s),o.end(function(e,r){var i;e?n(e):(r.body?i=r.body:r.text&&(i=JSON.parse(r.text)),i?t({rawEvents:i,response:r}):n({message:"Invalid JSON response",response:r}))})}})},function(e,t,n){function r(e,t,n,r){for(var o=e?a.arrayToHash(e):null,s=i.startOfDay(n.start),l=n.end,u=[];s<l;){var d=void 0;o&&!o[s.getUTCDay()]||(d=t?r.add(s,t):s,u.push(d)),s=i.addDays(s,1)}return u}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=n(9),a=n(12),s=n(2),l=n(41),u=n(8);l.registerRecurringType({parse:function(e,t,n,r){var i=r.createMarker.bind(r),a={daysOfWeek:null,startTime:o.createDuration,endTime:o.createDuration,startRecur:i,endRecur:i},l=s.refineProps(e,a,{},n),u=!1;for(var d in l)if(null!=l[d]){u=!0;break}var c;return c=!l.startTime&&!l.endTime&&(null==t||t),u?{allDay:c,duration:l.startTime&&l.endTime?o.subtractDurations(l.endTime,l.startTime):null,typeData:l}:null},expand:function(e,t,n,i){var o=u.intersectRanges(n,{start:e.startRecur,end:e.endRecur});return o?r(e.daysOfWeek,e.startTime,o,i):[]}})},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(37),i=n(171),o=r.createPlugin({viewConfigs:{basic:i.default,basicDay:{type:"basic",duration:{days:1}},basicWeek:{type:"basic",duration:{weeks:1}},month:{type:"basic",monthMode:!0,duration:{months:1},fixedWeekCount:!0}}});t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(37),i=n(160),o=r.createPlugin({viewConfigs:{agenda:{class:i.default,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},agendaDay:{type:"agenda",duration:{days:1}},agendaWeek:{type:"agenda",duration:{weeks:1}}}});t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(37),i=n(172),o=r.createPlugin({viewConfigs:{list:{class:i.default,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDayAltFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDayAltFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDayAltFormat:{weekday:"long"}}}});t.default=o}])});
;!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("fullcalendar")):"function"==typeof define&&define.amd?define(["fullcalendar"],t):t("object"==typeof exports?require("fullcalendar"):e.FullCalendar)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=413)}({0:function(t,n){t.exports=e},100:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("fa",{week:{dow:6,doy:12},dir:"rtl",buttonText:{prev:"قبلی",nex:"بعدی",today:"امروز",month:"ماه",week:"هفته",day:"روز",list:"برنامه"},weekLabel:"هف",allDayText:"تمام روز",eventLimitText:function(e){return"بیش از "+e},noEventsMessage:"هیچ رویدادی به نمایش"})},101:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("fi",{week:{dow:1,doy:4},buttonText:{prev:"Edellinen",next:"Seuraava",today:"Tänään",month:"Kuukausi",week:"Viikko",day:"Päivä",list:"Tapahtumat"},weekLabel:"Vk",allDayText:"Koko päivä",eventLimitText:"lisää",noEventsMessage:"Ei näytettäviä tapahtumia"})},102:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("fr",{buttonText:{prev:"Précédent",next:"Suivant",today:"Aujourd'hui",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekLabel:"Sem.",allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"})},103:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("fr-ch",{week:{dow:1,doy:4},buttonText:{prev:"Précédent",next:"Suivant",today:"Courant",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekLabel:"Sm",allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"})},104:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("fr",{week:{dow:1,doy:4},buttonText:{prev:"Précédent",next:"Suivant",today:"Aujourd'hui",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekLabel:"Sem.",allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"})},105:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("gl",{week:{dow:1,doy:4},buttonText:{prevText:"Ant",nextText:"Seg",currentText:"Hoxe",month:"Mes",week:"Semana",day:"Día",list:"Axenda"},weekLabel:"Sm",allDayHtml:"Todo<br/>o día",eventLimitText:"máis",noEventsMessage:"Non hai eventos para amosar"})},106:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("he",{dir:"rtl",buttonText:{prev:"הקודם",next:"הבא",today:"היום",month:"חודש",week:"שבוע",day:"יום",list:"סדר יום"},allDayText:"כל היום",eventLimitText:"אחר",noEventsMessage:"אין אירועים להצגה",weekLabel:"שבוע"})},107:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("hi",{week:{dow:0,doy:6},buttonText:{prev:"पिछला",next:"अगला",today:"आज",month:"महीना",week:"सप्ताह",day:"दिन",list:"कार्यसूची"},weekLabel:"हफ्ता",allDayText:"सभी दिन",eventLimitText:function(e){return"+अधिक "+e},noEventsMessage:"कोई घटनाओं को प्रदर्शित करने के लिए"})},108:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("hr",{week:{dow:1,doy:7},buttonText:{prev:"Prijašnji",next:"Sljedeći",today:"Danas",month:"Mjesec",week:"Tjedan",day:"Dan",list:"Raspored"},weekLabel:"Tje",allDayText:"Cijeli dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nema događaja za prikaz"})},109:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("hu",{week:{dow:1,doy:4},buttonText:{prev:"vissza",next:"előre",today:"ma",month:"Hónap",week:"Hét",day:"Nap",list:"Napló"},weekLabel:"Hét",allDayText:"Egész nap",eventLimitText:"további",noEventsMessage:"Nincs megjeleníthető esemény"})},110:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("id",{week:{dow:1,doy:7},buttonText:{prev:"mundur",next:"maju",today:"hari ini",month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},weekLabel:"Mg",allDayHtml:"Sehari<br/>penuh",eventLimitText:"lebih",noEventsMessage:"Tidak ada acara untuk ditampilkan"})},111:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("is",{week:{dow:1,doy:4},buttonText:{prev:"Fyrri",next:"Næsti",today:"Í dag",month:"Mánuður",week:"Vika",day:"Dagur",list:"Dagskrá"},weekLabel:"Vika",allDayHtml:"Allan<br/>daginn",eventLimitText:"meira",noEventsMessage:"Engir viðburðir til að sýna"})},112:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("it",{week:{dow:1,doy:4},buttonText:{prev:"Prec",next:"Succ",today:"Oggi",month:"Mese",week:"Settimana",day:"Giorno",list:"Agenda"},weekLabel:"Sm",allDayHtml:"Tutto il<br/>giorno",eventLimitText:function(e){return"+altri "+e},noEventsMessage:"Non ci sono eventi da visualizzare"})},113:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ja",{buttonText:{prev:"前",next:"次",today:"今日",month:"月",week:"週",day:"日",list:"予定リスト"},weekLabel:"週",allDayText:"終日",eventLimitText:function(e){return"他 "+e+" 件"},noEventsMessage:"表示する予定はありません"})},114:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ka",{week:{dow:1,doy:7},buttonText:{prev:"წინა",next:"შემდეგი",today:"დღეს",month:"თვე",week:"კვირა",day:"დღე",list:"დღის წესრიგი"},weekLabel:"კვ",allDayText:"მთელი დღე",eventLimitText:function(e){return"+ კიდევ "+e},noEventsMessage:"ღონისძიებები არ არის"})},115:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("kk",{week:{dow:1,doy:7},buttonText:{prev:"Алдыңғы",next:"Келесі",today:"Бүгін",month:"Ай",week:"Апта",day:"Күн",list:"Күн тәртібі"},weekLabel:"Не",allDayText:"Күні бойы",eventLimitText:function(e){return"+ тағы "+e},noEventsMessage:"Көрсету үшін оқиғалар жоқ"})},116:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ko",{buttonText:{prev:"이전달",next:"다음달",today:"오늘",month:"월",week:"주",day:"일",list:"일정목록"},weekLabel:"주",allDayText:"종일",eventLimitText:"개",noEventsMessage:"일정이 없습니다"})},117:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("lb",{week:{dow:1,doy:4},buttonText:{prev:"Zréck",next:"Weider",today:"Haut",month:"Mount",week:"Woch",day:"Dag",list:"Terminiwwersiicht"},weekLabel:"W",allDayText:"Ganzen Dag",eventLimitText:"méi",noEventsMessage:"Nee Evenementer ze affichéieren"})},118:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("lt",{week:{dow:1,doy:4},buttonText:{prev:"Atgal",next:"Pirmyn",today:"Šiandien",month:"Mėnuo",week:"Savaitė",day:"Diena",list:"Darbotvarkė"},weekLabel:"SAV",allDayText:"Visą dieną",eventLimitText:"daugiau",noEventsMessage:"Nėra įvykių rodyti"})},119:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("lv",{week:{dow:1,doy:4},buttonText:{prev:"Iepr.",next:"Nāk.",today:"Šodien",month:"Mēnesis",week:"Nedēļa",day:"Diena",list:"Dienas kārtība"},weekLabel:"Ned.",allDayText:"Visu dienu",eventLimitText:function(e){return"+vēl "+e},noEventsMessage:"Nav notikumu"})},120:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("mk",{buttonText:{prev:"претходно",next:"следно",today:"Денес",month:"Месец",week:"Недела",day:"Ден",list:"График"},weekLabel:"Сед",allDayText:"Цел ден",eventLimitText:function(e){return"+повеќе "+e},noEventsMessage:"Нема настани за прикажување"})},121:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ms",{week:{dow:1,doy:7},buttonText:{prev:"Sebelum",next:"Selepas",today:"hari ini",month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},weekLabel:"Mg",allDayText:"Sepanjang hari",eventLimitText:function(e){return"masih ada "+e+" acara"},noEventsMessage:"Tiada peristiwa untuk dipaparkan"})},122:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("nb",{week:{dow:1,doy:4},buttonText:{prev:"Forrige",next:"Neste",today:"I dag",month:"Måned",week:"Uke",day:"Dag",list:"Agenda"},weekLabel:"Uke",allDayText:"Hele dagen",eventLimitText:"til",noEventsMessage:"Ingen hendelser å vise"})},123:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("nl",{week:{dow:1,doy:4},buttonText:{prev:"Voorgaand",next:"Volgende",today:"Vandaag",year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Hele dag",eventLimitText:"extra",noEventsMessage:"Geen evenementen om te laten zien"})},124:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("nn",{week:{dow:1,doy:4},buttonText:{prev:"Førre",next:"Neste",today:"I dag",month:"Månad",week:"Veke",day:"Dag",list:"Agenda"},weekLabel:"Veke",allDayText:"Heile dagen",eventLimitText:"til",noEventsMessage:"Ingen hendelser å vise"})},125:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("pl",{week:{dow:1,doy:4},buttonText:{prev:"Poprzedni",next:"Następny",today:"Dziś",month:"Miesiąc",week:"Tydzień",day:"Dzień",list:"Plan dnia"},weekLabel:"Tydz",allDayText:"Cały dzień",eventLimitText:"więcej",noEventsMessage:"Brak wydarzeń do wyświetlenia"})},126:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("pt-br",{buttonText:{prevText:"Anterior",nextText:"Próximo",currentText:"Hoje",month:"Mês",week:"Semana",day:"Dia",list:"Compromissos"},weekLabel:"Sm",allDayText:"dia inteiro",eventLimitText:function(e){return"mais +"+e},noEventsMessage:"Não há eventos para mostrar"})},127:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("pt",{week:{dow:1,doy:4},buttonText:{prevText:"Anterior",nextText:"Seguinte",currentText:"Hoje",month:"Mês",week:"Semana",day:"Dia",list:"Agenda"},weekLabel:"Sem",allDayText:"Todo o dia",eventLimitText:"mais",noEventsMessage:"Não há eventos para mostrar"})},128:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ro",{week:{dow:1,doy:7},buttonText:{prev:"precedentă",next:"următoare",today:"Azi",month:"Lună",week:"Săptămână",day:"Zi",list:"Agendă"},weekLabel:"Săpt",allDayText:"Toată ziua",eventLimitText:function(e){return"+alte "+e},noEventsMessage:"Nu există evenimente de afișat"})},129:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ru",{week:{dow:1,doy:4},buttonText:{prev:"Пред",next:"След",today:"Сегодня",month:"Месяц",week:"Неделя",day:"День",list:"Повестка дня"},weekLabel:"Нед",allDayText:"Весь день",eventLimitText:function(e){return"+ ещё "+e},noEventsMessage:"Нет событий для отображения"})},130:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("sk",{week:{dow:1,doy:4},buttonText:{prev:"Predchádzajúci",next:"Nasledujúci",today:"Dnes",month:"Mesiac",week:"Týždeň",day:"Deň",list:"Rozvrh"},weekLabel:"Ty",allDayText:"Celý deň",eventLimitText:function(e){return"+ďalšie: "+e},noEventsMessage:"Žiadne akcie na zobrazenie"})},131:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("sl",{week:{dow:1,doy:7},buttonText:{prev:"Prejšnji",next:"Naslednji",today:"Trenutni",month:"Mesec",week:"Teden",day:"Dan",list:"Dnevni red"},weekLabel:"Teden",allDayText:"Ves dan",eventLimitText:"več",noEventsMessage:"Ni dogodkov za prikaz"})},132:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("sq",{week:{dow:1,doy:4},buttonText:{prev:"mbrapa",next:"Përpara",today:"sot",month:"Muaj",week:"Javë",day:"Ditë",list:"Listë"},weekLabel:"Ja",allDayHtml:"Gjithë<br/>ditën",eventLimitText:function(e){return"+më tepër "+e},noEventsMessage:"Nuk ka evente për të shfaqur"})},133:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("sr-cyrl",{week:{dow:1,doy:7},buttonText:{prev:"Претходна",next:"следећи",today:"Данас",month:"Месец",week:"Недеља",day:"Дан",list:"Планер"},weekLabel:"Сед",allDayText:"Цео дан",eventLimitText:function(e){return"+ још "+e},noEventsMessage:"Нема догађаја за приказ"})},134:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("sr",{week:{dow:1,doy:7},buttonText:{prev:"Prethodna",next:"Sledeći",today:"Danas",month:"Mеsеc",week:"Nеdеlja",day:"Dan",list:"Planеr"},weekLabel:"Sed",allDayText:"Cеo dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nеma događaja za prikaz"})},135:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("sv",{week:{dow:1,doy:4},buttonText:{prev:"Förra",next:"Nästa",today:"Idag",month:"Månad",week:"Vecka",day:"Dag",list:"Program"},weekLabel:"v.",allDayText:"Heldag",eventLimitText:"till",noEventsMessage:"Inga händelser att visa"})},136:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("th",{buttonText:{prev:"ย้อน",next:"ถัดไป",today:"วันนี้",month:"เดือน",week:"สัปดาห์",day:"วัน",list:"แผนงาน"},allDayText:"ตลอดวัน",eventLimitText:"เพิ่มเติม",noEventsMessage:"ไม่มีกิจกรรมที่จะแสดง"})},137:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("tr",{week:{dow:1,doy:7},buttonText:{prev:"geri",next:"ileri",today:"bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},weekLabel:"Hf",allDayText:"Tüm gün",eventLimitText:"daha fazla",noEventsMessage:"Gösterilecek etkinlik yok"})},138:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("uk",{week:{dow:1,doy:7},buttonText:{prev:"Попередній",next:"далі",today:"Сьогодні",month:"Місяць",week:"Тиждень",day:"День",list:"Порядок денний"},weekLabel:"Тиж",allDayText:"Увесь день",eventLimitText:function(e){return"+ще "+e+"..."},noEventsMessage:"Немає подій для відображення"})},139:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("vi",{week:{dow:1,doy:4},buttonText:{prev:"Trước",next:"Tiếp",today:"Hôm nay",month:"Tháng",week:"Tuần",day:"Ngày",list:"Lịch biểu"},weekLabel:"Tu",allDayText:"Cả ngày",eventLimitText:function(e){return"+ thêm "+e},noEventsMessage:"Không có sự kiện để hiển thị"})},140:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("zh-cn",{week:{dow:1,doy:4},buttonText:{prev:"上月",next:"下月",today:"今天",month:"月",week:"周",day:"日",list:"日程"},weekLabel:"周",allDayText:"全天",eventLimitText:function(e){return"另外 "+e+" 个"},noEventsMessage:"没有事件显示"})},141:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("zh-tw",{buttonText:{prev:"上月",next:"下月",today:"今天",month:"月",week:"週",day:"天",list:"活動列表"},weekLabel:"周",allDayText:"整天",eventLimitText:"顯示更多",noEventsMessage:"没有任何活動"})},413:function(e,t,n){n(78),n(79),n(80),n(81),n(82),n(83),n(84),n(85),n(86),n(87),n(88),n(89),n(90),n(91),n(92),n(93),n(94),n(95),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(105),n(106),n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(140),e.exports=n(141)},78:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("af",{week:{dow:1,doy:4},buttonText:{prev:"Vorige",next:"Volgende",today:"Vandag",year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayHtml:"Heeldag",eventLimitText:"Addisionele",noEventsMessage:"Daar is geen gebeurtenisse nie"})},79:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ar-dz",{week:{dow:0,doy:4},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},80:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ar-kw",{week:{dow:0,doy:12},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},81:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ar-ly",{week:{dow:6,doy:12},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},82:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ar-ma",{week:{dow:6,doy:12},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},83:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ar-sa",{week:{dow:0,doy:6},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},84:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ar-tn",{week:{dow:1,doy:4},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},85:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ar",{week:{dow:6,doy:12},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},86:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("bg",{week:{dow:1,doy:7},buttonText:{prev:"назад",next:"напред",today:"днес",month:"Месец",week:"Седмица",day:"Ден",list:"График"},allDayText:"Цял ден",eventLimitText:function(e){return"+още "+e},noEventsMessage:"Няма събития за показване"})},87:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("bs",{week:{dow:1,doy:7},buttonText:{prev:"Prošli",next:"Sljedeći",today:"Danas",month:"Mjesec",week:"Sedmica",day:"Dan",list:"Raspored"},weekLabel:"Sed",allDayText:"Cijeli dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nema događaja za prikazivanje"})},88:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("ca",{week:{dow:1,doy:4},buttonText:{prev:"Anterior",next:"Següent",today:"Avui",month:"Mes",week:"Setmana",day:"Dia",list:"Agenda"},weekLabel:"Set",allDayText:"Tot el dia",eventLimitText:"més",noEventsMessage:"No hi ha esdeveniments per mostrar"})},89:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("cs",{week:{dow:1,doy:4},buttonText:{prev:"Dříve",next:"Později",today:"Nyní",month:"Měsíc",week:"Týden",day:"Den",list:"Agenda"},weekLabel:"Týd",allDayText:"Celý den",eventLimitText:function(e){return"+další: "+e},noEventsMessage:"Žádné akce k zobrazení"})},90:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("da",{week:{dow:1,doy:4},buttonText:{prev:"Forrige",next:"Næste",today:"Idag",month:"Måned",week:"Uge",day:"Dag",list:"Agenda"},weekLabel:"Uge",allDayText:"Hele dagen",eventLimitText:"flere",noEventsMessage:"Ingen arrangementer at vise"})},91:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("de",{week:{dow:1,doy:4},buttonText:{prev:"Zurück",next:"Vor",today:"Heute",year:"Jahr",month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},weekLabel:"KW",allDayText:"Ganztägig",eventLimitText:function(e){return"+ weitere "+e},noEventsMessage:"Keine Ereignisse anzuzeigen"})},92:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("el",{week:{dow:1,doy:4},buttonText:{prev:"Προηγούμενος",next:"Επόμενος",today:"Σήμερα",month:"Μήνας",week:"Εβδομάδα",day:"Ημέρα",list:"Ατζέντα"},weekLabel:"Εβδ",allDayText:"Ολοήμερο",eventLimitText:"περισσότερα",noEventsMessage:"Δεν υπάρχουν γεγονότα για να εμφανιστεί"})},93:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("en-au",{week:{dow:1,doy:4}})},94:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("en-gb",{week:{dow:1,doy:4}})},95:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("en-nz",{week:{dow:1,doy:4}})},96:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("es",{week:{dow:0,doy:6},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},weekLabel:"Sm",allDayHtml:"Todo<br/>el día",eventLimitText:"más",noEventsMessage:"No hay eventos para mostrar"})},97:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("es",{week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},weekLabel:"Sm",allDayHtml:"Todo<br/>el día",eventLimitText:"más",noEventsMessage:"No hay eventos para mostrar"})},98:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("et",{week:{dow:1,doy:4},buttonText:{prev:"Eelnev",next:"Järgnev",today:"Täna",month:"Kuu",week:"Nädal",day:"Päev",list:"Päevakord"},weekLabel:"näd",allDayText:"Kogu päev",eventLimitText:function(e){return"+ veel "+e},noEventsMessage:"Kuvamiseks puuduvad sündmused"})},99:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(0).defineLocale("eu",{week:{dow:1,doy:7},buttonText:{prev:"Aur",next:"Hur",today:"Gaur",month:"Hilabetea",week:"Astea",day:"Eguna",list:"Agenda"},weekLabel:"As",allDayHtml:"Egun<br/>osoa",eventLimitText:"gehiago",noEventsMessage:"Ez dago ekitaldirik erakusteko"})}})});
;/*!
 * FullCalendar Scheduler v4.0.0-alpha.4
 * Docs & License: https://fullcalendar.io/scheduler/
 * (c) 2018 Adam Shaw
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("fullcalendar"),require("superagent"));else if("function"==typeof define&&define.amd)define(["fullcalendar","superagent"],t);else{var r="object"==typeof exports?t(require("fullcalendar"),require("superagent")):t(e.FullCalendar,e.superagent);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=34)}([function(t,r){t.exports=e},function(e,t){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};t.__extends=function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},t.__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}},,,,,function(e,t,r){function n(e){var t=e.options;return!!t.resources&&(!(!t.groupByResource&&!t.groupByDateAndResource)||t.groupByResource!==!1&&t.groupByDateAndResource!==!1&&"day"===e.singleUnit)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=r(0),i=r(1),a=function(){function e(e,t){this.dayTable=e,this.resources=t,this.resourceIndex=new u(t),this.rowCnt=e.rowCnt,this.colCnt=e.colCnt*t.length,this.cells=this.buildCells()}return e.prototype.buildCells=function(){for(var e=this,t=e.rowCnt,r=e.dayTable,n=e.resources,o=[],s=0;s<t;s++){for(var i=[],a=0;a<r.colCnt;a++)for(var l=0;l<n.length;l++){var c=n[l],u='data-resource-id="'+c.id+'"';i[this.computeCol(a,l)]={date:r.cells[s][a].date,resource:c,htmlAttrs:u}}o.push(i)}return o},e}();t.AbstractResourceDayTable=a;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.computeCol=function(e,t){return t*this.dayTable.colCnt+e},t.prototype.computeColRanges=function(e,t,r){return[{firstCol:this.computeCol(e,r),lastCol:this.computeCol(t,r),isStart:!0,isEnd:!0}]},t}(a);t.ResourceDayTable=l;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.computeCol=function(e,t){return e*this.resources.length+t},t.prototype.computeColRanges=function(e,t,r){for(var n=[],o=e;o<=t;o++){var s=this.computeCol(o,r);n.push({firstCol:s,lastCol:s,isStart:o===e,isEnd:o===t})}return n},t}(a);t.DayResourceTable=c;var u=function(){function e(e){for(var t={},r=[],n=0;n<e.length;n++){var o=e[n].id;r.push(o),t[o]=n}this.ids=r,this.indicesById=t,this.length=e.length}return e}();t.ResourceIndex=u,t.isVResourceViewEnabled=n;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.getKeyInfo=function(e){var t=e.resourceDayTable,r=s.mapHash(t.resourceIndex.indicesById,function(e){return t.resources[e]});return r[""]={},r},t.prototype.getKeysForDateSpan=function(e){return[e.resourceId||""]},t.prototype.getKeysForEventDef=function(e){var t=e.resourceIds;return t.length?t:[""]},t}(s.Splitter);t.VResourceSplitter=d;var p=[],h=function(){function e(){this.joinDateSelection=s.memoize(this.joinSegs),this.joinBusinessHours=s.memoize(this.joinSegs),this.joinFgEvents=s.memoize(this.joinSegs),this.joinBgEvents=s.memoize(this.joinSegs),this.joinEventDrags=s.memoize(this.joinInteractions),this.joinEventResizes=s.memoize(this.joinInteractions)}return e.prototype.joinProps=function(e,t){for(var r=[],n=[],o=[],s=[],i=[],a=[],l="",c=t.resourceIndex.ids.concat([""]),u=0,d=c;u<d.length;u++){var h=d[u],f=e[h];r.push(f.dateSelectionSegs),n.push(h?f.businessHourSegs:p),o.push(h?f.fgEventSegs:p),s.push(f.bgEventSegs),i.push(f.eventDrag),a.push(f.eventResize),l=l||f.eventSelection}return{dateSelectionSegs:this.joinDateSelection.apply(this,[t].concat(r)),businessHourSegs:this.joinBusinessHours.apply(this,[t].concat(n)),fgEventSegs:this.joinFgEvents.apply(this,[t].concat(o)),bgEventSegs:this.joinBgEvents.apply(this,[t].concat(s)),eventDrag:this.joinEventDrags.apply(this,[t].concat(i)),eventResize:this.joinEventResizes.apply(this,[t].concat(a)),eventSelection:l}},e.prototype.joinSegs=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=e.resources.length,o=[],s=0;s<n;s++){for(var i=0,a=t[s];i<a.length;i++){var l=a[i];o.push.apply(o,this.transformSeg(l,e,s))}for(var c=0,u=t[n];c<u.length;c++){var l=u[c];o.push.apply(o,this.transformSeg(l,e,s))}}return o},e.prototype.expandSegs=function(e,t){for(var r=e.resources.length,n=[],o=0;o<r;o++)for(var s=0,i=t;s<i.length;s++){var a=i[s];n.push.apply(n,this.transformSeg(a,e,o))}return n},e.prototype.joinInteractions=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=e.resources.length,o={},s=[],a=!1,l=null,c=0;c<n;c++){var u=t[c];if(u){for(var d=0,p=u.segs;d<p.length;d++){var h=p[d];s.push.apply(s,this.transformSeg(h,e,c))}i.__assign(o,u.affectedInstances),a=a||u.isEvent,l=l||u.sourceSeg}if(t[n])for(var f=0,v=t[n].segs;f<v.length;f++){var h=v[f];s.push.apply(s,this.transformSeg(h,e,c))}}return{affectedInstances:o,segs:s,isEvent:a,sourceSeg:l}},e}();t.VResourceJoiner=h},,function(e,t,r){function n(e,t){return o(e,[],t,!1,{},!0).map(function(e){return e.resource})}function o(e,t,r,n,o,a){var l=i(e,n?-1:1,t,r),c=[];return s(l,c,n,[],0,o,a),c}function s(e,t,r,n,o,i,a){for(var l=0;l<e.length;l++){var c=e[l],u=c.group;if(u)if(r){var d=t.length,p=n.length;if(s(c.children,t,r,n.concat(0),o,i,a),d<t.length){var h=t[d],f=h.rowSpans=h.rowSpans.slice();f[p]=t.length-d}}else{var v=u.spec.field+":"+u.value,y=null!=i[v]?i[v]:a;t.push({id:v,group:u,isExpanded:y}),y&&s(c.children,t,r,n,o+1,i,a)}else if(c.resource){var v=c.resource.id,y=null!=i[v]?i[v]:a;t.push({id:v,rowSpans:n,depth:o,isExpanded:y,hasChildren:Boolean(c.children.length),resource:c.resource,resourceFields:c.resourceFields}),y&&s(c.children,t,r,n,o+1,i,a)}}}function i(e,t,r,n){var o=a(e,n),s=[];for(var i in o){var c=o[i];c.resource.parentId||l(c,s,r,0,t,n)}return s}function a(e,t){var r={};for(var n in e){var o=e[n];r[n]={resource:o,resourceFields:d(o),children:[]}}for(var n in e){var o=e[n];if(o.parentId){var s=r[o.parentId];s&&u(r[n],s.children,t)}}return r}function l(e,t,r,n,o,s){if(r.length&&(o===-1||n<=o)){var i=c(e,t,r[0]);l(e,i.children,r.slice(1),n+1,o,s)}else u(e,t,s)}function c(e,t,r){var n,o,s=e.resourceFields[r.field];if(r.order)for(var i=0;i<t.length;i++){var a=t[i];if(a.group){var l=f.flexibleCompare(s,a.group.value)*r.order;if(0===l){n=a;break}if(l>0){o=i;break}}}else for(o=0;o<t.length;o++){var a=t[o];if(a.group&&s===a.group.value){n=a;break}}return n||(n={group:{value:s,spec:r},children:[]},t.splice(o,0,n)),n}function u(e,t,r){var n;for(n=0;n<t.length;n++){var o=f.compareByFieldSpecs(t[n].resourceFields,e.resourceFields,r);if(o>0)break}t.splice(n,0,e)}function d(e){var t=h.__assign({},e.extendedProps,e.ui,e);return delete t.ui,delete t.extendedProps,t}function p(e,t){return e.spec===t.spec&&e.value===t.value}Object.defineProperty(t,"__esModule",{value:!0});var h=r(1),f=r(0);t.flattenResources=n,t.buildRowNodes=o,t.buildResourceFields=d,t.isGroupsEqual=p},,function(e,t,r){function n(e){u.push(e)}function o(e){return u[e]}function s(e){return Boolean(u[e.sourceDefId].ignoreRange)}function i(e){for(var t=u.length-1;t>=0;t--){var r=u[t],n=r.parseMeta(e);if(n)return a("object"==typeof e&&e?e:{},n,t)}return null}function a(e,t,r){var n=l.refineProps(e,c);return n.sourceId=String(d++),n.sourceDefId=r,n.meta=t,n.publicId=n.id,n.isFetching=!1,n.latestFetchId="",n.fetchRange=null,delete n.id,n}Object.defineProperty(t,"__esModule",{value:!0});var l=r(0),c={id:String},u=[],d=0;t.registerResourceSourceDef=n,t.getResourceSourceDef=o,t.doesSourceIgnoreRange=s,t.parseResourceSource=i},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(){function e(e,t){this._calendar=e,this._resource=t}return e.prototype.setProp=function(e,t){this._calendar.dispatch({type:"SET_RESOURCE_PROP",resourceId:this._resource.id,propName:e,propValue:t})},e.prototype.remove=function(){this._calendar.dispatch({type:"REMOVE_RESOURCE",resourceId:this._resource.id})},e.prototype.getParent=function(){var t=this._calendar,r=this._resource.parentId;return r?new e(t,t.state.resourceSource[r]):null},e.prototype.getChildren=function(){var t=this._resource.id,r=this._calendar,n=r.state.resourceStore,o=[];for(var s in n)n[s].parentId===t&&o.push(new e(r,n[s]));return o},e.prototype.getEvents=function(){var e=this._resource.id,t=this._calendar,r=t.state.eventStore,o=r.defs,s=r.instances,i=[];for(var a in s){var l=s[a],c=o[l.defId];c.resourceIds.indexOf(e)!==-1&&i.push(new n.EventApi(t,c,l))}return i},Object.defineProperty(e.prototype,"id",{get:function(){return this._resource.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._resource.title},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._resource.extendedProps},enumerable:!0,configurable:!0}),e}();t["default"]=o},,,,function(e,t,r){function n(e,t,r,o){void 0===t&&(t="");var u={},d=i.refineProps(e,a,{},u),p={},h=i.processScopedUiProps("event",u,o,p);if(d.id||(d.id=l+c++),d.parentId||(d.parentId=t),d.businessHours=d.businessHours?i.parseBusinessHours(d.businessHours,o):null,d.ui=h,d.extendedProps=s.__assign({},p,d.extendedProps),Object.freeze(d.extendedProps),r[d.id]);else if(r[d.id]=d,d.children){for(var f=0,v=d.children;f<v.length;f++){var y=v[f];n(y,d.id,r,o)}delete d.children}return d}function o(e){return 0===e.indexOf(l)?"":e}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),i=r(0),a={id:String,title:String,parentId:String,businessHours:null,children:null},l="_fc:",c=0;t.parseResource=n,t.getPublicId=o},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(22),i=r(17),a=function(e){function t(t,r,n,o){var a=e.call(this,t,r,n,o)||this;return a.el.classList.add("fc-timeline"),a.opt("eventOverlap")===!1&&a.el.classList.add("fc-no-overlap"),a.el.innerHTML=a.renderSkeletonHtml(),a.timeAxis=new s["default"](a.context,a.el.querySelector("thead .fc-time-area"),a.el.querySelector("tbody .fc-time-area")),a.lane=new i["default"](a.context,a.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl,a.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl,a.timeAxis),a}return n.__extends(t,e),t.prototype.destroy=function(){this.timeAxis.destroy(),this.lane.destroy(),e.prototype.destroy.call(this)},t.prototype.renderSkeletonHtml=function(){var e=this.theme;return'<table class="'+e.getClass("tableGrid")+'"> <thead class="fc-head"> <tr> <td class="fc-time-area '+e.getClass("widgetHeader")+'"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-time-area '+e.getClass("widgetContent")+'"></td> </tr> </tbody> </table>'},t.prototype.render=function(t){e.prototype.render.call(this,t),this.timeAxis.receiveProps({dateProfile:t.dateProfile}),this.lane.receiveProps(n.__assign({},t,{nextDayThreshold:this.nextDayThreshold}))},t.prototype.updateSize=function(e,t,r){this.timeAxis.updateSize(e,t,r),this.lane.updateSize(e)},t.prototype.getNowIndicatorUnit=function(e){return this.timeAxis.getNowIndicatorUnit(e)},t.prototype.renderNowIndicator=function(e){this.timeAxis.renderNowIndicator(e)},t.prototype.unrenderNowIndicator=function(){this.timeAxis.unrenderNowIndicator()},t.prototype.computeInitialDateScroll=function(){return this.timeAxis.computeInitialDateScroll()},t.prototype.applyDateScroll=function(e){this.timeAxis.applyDateScroll(e)},t.prototype.queryScroll=function(){var e=this.timeAxis.layout.bodyScroller.enhancedScroll;return{top:e.getScrollTop(),left:e.getScrollLeft()}},t.prototype.prepareHits=function(){this.offsetTracker=new o.OffsetTracker(this.timeAxis.slats.el)},t.prototype.releaseHits=function(){this.offsetTracker.destroy()},t.prototype.queryHit=function(e,t){var r=this.offsetTracker,n=this.timeAxis.slats;if(r.isWithinClipping(e,t)){var o=n.positionToHit(e-r.computeLeft());if(o)return{component:this,dateSpan:o.dateSpan,rect:{left:o.left,right:o.right,top:r.origTop,bottom:r.origBottom},dayEl:o.dayEl,layer:0}}},t}(o.View);t["default"]=a,a.prototype.isInteractable=!0},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(25),i=r(54),a=r(55),l=function(e){function t(t,r,n,s){var l=e.call(this,t,n)||this;l.slicer=new c,l.renderEventDrag=o.memoizeRendering(l._renderEventDrag,l._unrenderEventDrag),l.renderEventResize=o.memoizeRendering(l._renderEventResize,l._unrenderEventResize);var u=l.fillRenderer=new a["default"](t,n,s),d=l.eventRenderer=new i["default"](t,r,s);return l.mirrorRenderer=new i["default"](t,r,s),l.renderBusinessHours=o.memoizeRendering(u.renderSegs.bind(u,"businessHours"),u.unrender.bind(u,"businessHours")),l.renderDateSelection=o.memoizeRendering(u.renderSegs.bind(u,"highlight"),u.unrender.bind(u,"highlight")),l.renderBgEvents=o.memoizeRendering(u.renderSegs.bind(u,"bgEvent"),u.unrender.bind(u,"bgEvent")),l.renderFgEvents=o.memoizeRendering(d.renderSegs.bind(d),d.unrender.bind(d)),l.renderEventSelection=o.memoizeRendering(d.selectByInstanceId.bind(d),d.unselectByInstanceId.bind(d),[l.renderFgEvents]),l.timeAxis=s,l}return n.__extends(t,e),t.prototype.render=function(e){var t=this.slicer.sliceProps(e,e.dateProfile,this.timeAxis.tDateProfile.isTimeScale?null:e.nextDayThreshold,this,this.timeAxis);this.renderBusinessHours(t.businessHourSegs),this.renderDateSelection(t.dateSelectionSegs),this.renderBgEvents(t.bgEventSegs),this.renderFgEvents(t.fgEventSegs),this.renderEventSelection(t.eventSelection),this.renderEventDrag(t.eventDrag),this.renderEventResize(t.eventResize)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderBusinessHours.unrender(),this.renderDateSelection.unrender(),this.renderBgEvents.unrender(),this.renderFgEvents.unrender(),this.renderEventSelection.unrender(),this.renderEventDrag.unrender(),this.renderEventResize.unrender()},t.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.mirrorRenderer.renderSegs(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}))},t.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}))},t.prototype._renderEventResize=function(e){if(e){var t=e.segs.map(function(e){return n.__assign({},e)});this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",t),this.mirrorRenderer.renderSegs(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg})}},t.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"),this.mirrorRenderer.unrender(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}))},t.prototype.updateSize=function(e){var t=this,r=t.fillRenderer,n=t.eventRenderer,o=t.mirrorRenderer;r.computeSizes(e),n.computeSizes(e),o.computeSizes(e),r.assignSizes(e),n.assignSizes(e),o.assignSizes(e)},t}(o.DateComponent);t["default"]=l;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.sliceRange=function(e,t){var r=t.tDateProfile,n=t.props.dateProfile,i=s.normalizeRange(e,r,t.dateEnv),a=[];if(t.computeDateSnapCoverage(i.start)<t.computeDateSnapCoverage(i.end)){var l=o.intersectRanges(i,r.normalizedRange);l&&a.push({start:l.start,end:l.end,isStart:l.start.valueOf()===i.start.valueOf()&&s.isValidDate(l.start,r,n,t.view),isEnd:l.end.valueOf()===i.end.valueOf()&&s.isValidDate(o.addMs(l.end,-1),r,n,t.view)})}return a},t}(o.Slicer)},function(e,t){function r(e,t,r){var n=e.classList;t?(n.remove(s),n.remove(i),n.add(a)):(n.remove(a),n.add(this.isRtl?s:i))}function n(e){var t=e.classList;t.remove(s),t.remove(i),t.remove(a)}function o(e,t){e.setAttribute("data-resource-id",t)}Object.defineProperty(t,"__esModule",{value:!0});var s="fc-icon-left-triangle",i="fc-icon-right-triangle",a="fc-icon-down-triangle";t.updateExpanderIcon=r,t.clearExpanderIcon=n,t.updateTrResourceId=o},function(e,t,r){function n(e,t){return"function"==typeof e?function(r){return e(new s["default"](t,r))}:function(e){return e.title||o.getPublicId(e.id)}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(15),s=r(11);t.buildResourceTextFunc=n},function(e,t){function r(e,t,r){var n=t.dateSpan.resourceId,o=r.dateSpan.resourceId;n&&o&&n!==o&&(e.resourceMutation={matchResourceId:n,setResourceId:o})}function n(e,t,r){var n=t.resourceMutation;if(n&&o(e,r)){var s=e.resourceIds.indexOf(n.matchResourceId);if(s!==-1){var i=e.resourceIds.slice();i.splice(s,1),i.indexOf(n.setResourceId)===-1&&i.push(n.setResourceId),e.resourceIds=i}}}function o(e,t){var r=e.resourceEditable;if(null==r){var n=e.sourceId&&t.state.eventSources[e.sourceId];n&&(r=n.extendedProps.resourceEditable),null==r&&(r=t.opt("eventResourceEditable"),null==r&&(r=!0))}return r}function s(e,t){var r=e.resourceMutation;return r?{oldResource:t.getResourceById(r.matchResourceId),newResource:t.getResourceById(r.setResourceId)}:{oldResource:null,newResource:null}}Object.defineProperty(t,"__esModule",{value:!0}),t.massageEventDragMutation=r,t.applyEventDefMutation=n,t.computeResourceEditable=o,t.transformEventDrop=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.getKeyInfo=function(e){return n.__assign({"":{}},e.resourceStore)},t.prototype.getKeysForDateSpan=function(e){return[e.resourceId||""]},t.prototype.getKeysForEventDef=function(e){var t=e.resourceIds;return t.length?t:[""]},t}(o.Splitter);t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(23),i=r(51),a=r(52),l=r(25),c=r(53),u=function(e){function t(t,r,n){var o=e.call(this,t)||this,l=o.layout=new s["default"](r,n,"auto");return o.header=new i["default"](t,l.headerScroller.enhancedScroll.canvas.contentEl),o.slats=new a["default"](t,l.bodyScroller.enhancedScroll.canvas.bgEl),o.nowIndicator=new c["default"](l.headerScroller.enhancedScroll.canvas.el,l.bodyScroller.enhancedScroll.canvas.el),o}return n.__extends(t,e),t.prototype.destroy=function(){this.layout.destroy(),this.header.destroy(),this.slats.destroy(),this.nowIndicator.unrender(),e.prototype.destroy.call(this)},t.prototype.render=function(e){var t=this.tDateProfile=l.buildTimelineDateProfile(e.dateProfile,this.view);this.header.receiveProps({dateProfile:e.dateProfile,tDateProfile:t}),this.slats.receiveProps({dateProfile:e.dateProfile,tDateProfile:t})},t.prototype.getNowIndicatorUnit=function(e){var t=this.tDateProfile=l.buildTimelineDateProfile(e,this.view);if(t.isTimeScale)return o.greatestDurationDenominator(t.slotDuration).unit},t.prototype.renderNowIndicator=function(e){o.rangeContainsMarker(this.tDateProfile.normalizedRange,e)&&this.nowIndicator.render(this.dateToCoord(e),this.isRtl)},t.prototype.unrenderNowIndicator=function(){this.nowIndicator.unrender()},t.prototype.updateSize=function(e,t,r){this.applySlotWidth(this.computeSlotWidth()),this.layout.setHeight(t,r),this.slats.updateSize()},t.prototype.computeSlotWidth=function(){var e=this.opt("slotWidth")||"";return""===e&&(e=this.computeDefaultSlotWidth(this.tDateProfile)),e},t.prototype.computeDefaultSlotWidth=function(e){var t=0;this.header.innerEls.forEach(function(e,r){t=Math.max(t,e.offsetWidth)});var r=t+1,n=o.wholeDivideDurations(e.labelInterval,e.slotDuration),s=Math.ceil(r/n),i=window.getComputedStyle(this.header.slatColEls[0]).minWidth;return i&&(i=parseInt(i,10),i&&(s=Math.max(s,i))),s},t.prototype.applySlotWidth=function(e){var t=this,r=t.layout,n=t.tDateProfile,o="",s="",i="";if(""!==e){e=Math.round(e),o=e*n.slotDates.length,s="",i=e;var a=r.bodyScroller.enhancedScroll.getClientWidth();a>o&&(s=a,o="",i=Math.floor(a/n.slotDates.length))}r.headerScroller.enhancedScroll.canvas.setWidth(o),r.headerScroller.enhancedScroll.canvas.setMinWidth(s),r.bodyScroller.enhancedScroll.canvas.setWidth(o),r.bodyScroller.enhancedScroll.canvas.setMinWidth(s),""!==i&&this.header.slatColEls.slice(0,-1).concat(this.slats.slatColEls.slice(0,-1)).forEach(function(e){e.style.width=i+"px"})},t.prototype.computeDateSnapCoverage=function(e){var t=this,r=t.dateEnv,n=t.tDateProfile,s=r.countDurationsBetween(n.normalizedRange.start,e,n.snapDuration);if(s<0)return 0;if(s>=n.snapDiffToIndex.length)return n.snapCnt;var i=Math.floor(s),a=n.snapDiffToIndex[i];return o.isInt(a)?a+=s-i:a=Math.ceil(a),a},t.prototype.dateToCoord=function(e){var t=this.tDateProfile,r=this.computeDateSnapCoverage(e),n=r/t.snapsPerSlot,o=Math.floor(n);o=Math.min(o,t.slotCnt-1);var s=n-o,i=this.slats.innerCoordCache;return this.isRtl?i.rights[o]-i.getWidth(o)*s-i.originClientRect.width:i.lefts[o]+i.getWidth(o)*s},t.prototype.rangeToCoords=function(e){return this.isRtl?{right:this.dateToCoord(e.start),left:this.dateToCoord(e.end)}:{left:this.dateToCoord(e.start),right:this.dateToCoord(e.end)}},t.prototype.computeInitialDateScroll=function(){var e=this.dateEnv,t=this.props.dateProfile,r=0;if(t){var n=this.opt("scrollTime");n&&(n=o.createDuration(n),r=this.dateToCoord(e.add(o.startOfDay(t.activeRange.start),n)))}return{left:r}},t.prototype.queryDateScroll=function(){var e=this.layout.bodyScroller.enhancedScroll;return{left:e.getScrollLeft()}},t.prototype.applyDateScroll=function(e){var t=this.layout.bodyScroller.enhancedScroll;t.setScrollLeft(e.left||0)},t}(o.Component);t["default"]=u},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(48),o=r(24),s=function(){function e(e,t,r){this.headerScroller=new n["default"]("clipped-scroll","hidden",e),this.bodyScroller=new n["default"]("auto",r,t),this.scrollJoiner=new o["default"]("horizontal",[this.headerScroller,this.bodyScroller])}return e.prototype.destroy=function(){this.headerScroller.destroy(),this.bodyScroller.destroy()},e.prototype.setHeight=function(e,t){var r;r=t?"auto":e-this.queryHeadHeight(),this.bodyScroller.setHeight(r),this.headerScroller.updateSize(),this.bodyScroller.updateSize(),this.scrollJoiner.update()},e.prototype.queryHeadHeight=function(){return this.headerScroller.enhancedScroll.canvas.contentEl.offsetHeight},e}();t["default"]=s},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.axis=e,this.scrollers=t;for(var r=0,n=this.scrollers;r<n.length;r++){var o=n[r];this.initScroller(o)}}return e.prototype.initScroller=function(e){var t=this,r=e.enhancedScroll,n=function(){t.assignMasterScroller(e)};"wheel mousewheel DomMouseScroll MozMousePixelScroll".split(" ").forEach(function(e){r.el.addEventListener(e,n)}),r.on("scrollStart",function(){t.masterScroller||t.assignMasterScroller(e)}).on("scroll",function(){if(e===t.masterScroller)for(var n=0,o=t.scrollers;n<o.length;n++){var s=o[n];if(s!==e)switch(t.axis){case"horizontal":s.enhancedScroll.el.scrollLeft=r.el.scrollLeft;break;case"vertical":s.enhancedScroll.setScrollTop(r.getScrollTop())}}}).on("scrollEnd",function(){e===t.masterScroller&&t.unassignMasterScroller()})},e.prototype.assignMasterScroller=function(e){this.unassignMasterScroller(),this.masterScroller=e;for(var t=0,r=this.scrollers;t<r.length;t++){var n=r[t];n!==e&&n.enhancedScroll.disableTouchScroll()}},e.prototype.unassignMasterScroller=function(){if(this.masterScroller){for(var e=0,t=this.scrollers;e<t.length;e++){var r=t[e];r.enhancedScroll.enableTouchScroll()}this.masterScroller=null}},e.prototype.update=function(){for(var e,t,r=this.scrollers.map(function(e){return e.getScrollbarWidths()}),n=0,o=0,s=0,i=0,a=0,l=r;a<l.length;a++)e=l[a],n=Math.max(n,e.left),o=Math.max(o,e.right),s=Math.max(s,e.top),i=Math.max(i,e.bottom);for(t=0;t<this.scrollers.length;t++){var c=this.scrollers[t];e=r[t],c.enhancedScroll.canvas.setGutters("horizontal"===this.axis?{left:n-e.left,right:o-e.right}:{top:s-e.top,bottom:i-e.bottom})}},e}();t["default"]=r},function(e,t,r){function n(e,t){var r=t.dateEnv,n={labelInterval:a(t,"slotLabelInterval"),slotDuration:a(t,"slotDuration")};l(n,e,r),c(n,e,r),u(n,e,r);var s=t.opt("slotLabelFormat"),v=Array.isArray(s)?s:null!=s?[s]:d(n,e,r,t);n.headerFormats=v.map(function(e){return g.createFormatter(e)}),n.isTimeScale=Boolean(n.slotDuration.milliseconds);var y=null;if(!n.isTimeScale){var m=g.greatestDurationDenominator(n.slotDuration).unit;/year|month|week/.test(m)&&(y=m)}n.largeUnit=y,n.emphasizeWeeks=g.isSingleDay(n.slotDuration)&&p("weeks",e,r)>=2&&!t.opt("businessHours");var S,b,E=t.opt("snapDuration");E&&(S=g.createDuration(E),b=g.wholeDivideDurations(n.slotDuration,S)),null==b&&(S=n.slotDuration,b=1),n.snapDuration=S,n.snapsPerSlot=b;var R=g.asRoughMs(e.maxTime)-g.asRoughMs(e.minTime),_=o(e.renderRange.start,n,r),w=o(e.renderRange.end,n,r);n.isTimeScale&&(_=r.add(_,e.minTime),w=r.add(g.addDays(w,-1),e.maxTime)),n.timeWindowMs=R,n.normalizedRange={start:_,end:w};for(var D=[],T=_;T<w;)i(T,n,e,t)&&D.push(T),T=r.add(T,n.slotDuration);n.slotDates=D;var C=-1,x=0,I=[],P=[];for(T=_;T<w;)i(T,n,e,t)?(C++,I.push(C),P.push(x)):I.push(C+.5),T=r.add(T,n.snapDuration),x++;return n.snapDiffToIndex=I,n.snapIndexToDiff=P,n.snapCnt=C+1,n.slotCnt=n.snapCnt/n.snapsPerSlot,n.isWeekStarts=h(n,r),n.cellRows=f(n,r,t),n}function o(e,t,r){var n=e;return t.isTimeScale||(n=g.startOfDay(n),t.largeUnit&&(n=r.startOf(n,t.largeUnit))),n}function s(e,t,r){if(!t.isTimeScale&&(e=g.computeVisibleDayRange(e),t.largeUnit)){var n=e;e={start:r.startOf(e.start,t.largeUnit),end:r.startOf(e.end,t.largeUnit)},(e.end.valueOf()!==n.end.valueOf()||e.end<=e.start)&&(e={start:e.start,end:r.add(e.end,t.slotDuration)})}return e}function i(e,t,r,n){if(n.dateProfileGenerator.isHiddenDay(e))return!1;if(t.isTimeScale){var o=g.startOfDay(e),s=e.valueOf()-o.valueOf(),i=s-g.asRoughMs(r.minTime);return i=(i%864e5+864e5)%864e5,i<t.timeWindowMs}return!0}function a(e,t){var r=e.opt(t);if(null!=r)return g.createDuration(r)}function l(e,t,r){var n=t.currentRange;if(e.labelInterval){var o=r.countDurationsBetween(n.start,n.end,e.labelInterval);o>y.MAX_TIMELINE_SLOTS&&(g.warn("slotLabelInterval results in too many cells"),e.labelInterval=null)}if(e.slotDuration){var s=r.countDurationsBetween(n.start,n.end,e.slotDuration);s>y.MAX_TIMELINE_SLOTS&&(g.warn("slotDuration results in too many cells"),e.slotDuration=null)}if(e.labelInterval&&e.slotDuration){var i=g.wholeDivideDurations(e.labelInterval,e.slotDuration);(null===i||i<1)&&(g.warn("slotLabelInterval must be a multiple of slotDuration"),e.slotDuration=null)}}function c(e,t,r){var n=t.currentRange,o=e.labelInterval;if(!o){var s=void 0;if(e.slotDuration){for(var i=0,a=E;i<a.length;i++){s=a[i];var l=g.createDuration(s),c=g.wholeDivideDurations(l,e.slotDuration);if(null!==c&&c<=S){o=l;break}}o||(o=e.slotDuration)}else for(var u=0,d=E;u<d.length;u++){s=d[u],o=g.createDuration(s);var p=r.countDurationsBetween(n.start,n.end,o);if(p>=m)break}e.labelInterval=o}return o}function u(e,t,r){var n=t.currentRange,o=e.slotDuration;if(!o){for(var s=c(e,t,r),i=0,a=E;i<a.length;i++){var l=a[i],u=g.createDuration(l),d=g.wholeDivideDurations(s,u);if(null!==d&&d>1&&d<=S){o=u;break}}if(o){var p=r.countDurationsBetween(n.start,n.end,o);p>b&&(o=null)}o||(o=s),e.slotDuration=o}return o}function d(e,t,r,n){var o,s,i=e.labelInterval,a=g.greatestDurationDenominator(i).unit,l=n.opt("weekNumbers"),c=o=s=null;switch("week"!==a||l||(a="day"),a){case"year":c={year:"numeric"};break;case"month":p("years",t,r)>1&&(c={year:"numeric"}),o={month:"short"};break;case"week":p("years",t,r)>1&&(c={year:"numeric"}),o={week:"narrow"};break;case"day":p("years",t,r)>1?c={year:"numeric",month:"long"}:p("months",t,r)>1&&(c={month:"long"}),l&&(o={week:"short"}),s={weekday:"narrow",day:"numeric"};break;case"hour":l&&(c={week:"short"}),p("days",t,r)>1&&(o={weekday:"short",day:"numeric",month:"numeric",omitCommas:!0}),s={hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"};break;case"minute":g.asRoughMinutes(i)/60>=S?(c={hour:"numeric",meridiem:"short"},o=function(e){return":"+g.padStart(e.date.minute,2)}):c={hour:"numeric",minute:"numeric",meridiem:"short"};break;case"second":g.asRoughSeconds(i)/60>=S?(c={hour:"numeric",minute:"2-digit",meridiem:"lowercase"},o=function(e){return":"+g.padStart(e.date.second,2)}):c={hour:"numeric",minute:"2-digit",second:"2-digit",meridiem:"lowercase"};break;case"millisecond":c={hour:"numeric",minute:"2-digit",second:"2-digit",meridiem:"lowercase"},o=function(e){return"."+g.padStart(e.millisecond,3)}}return[].concat(c||[],o||[],s||[])}function p(e,t,r){var n=t.currentRange,o=null;return"years"===e?o=r.diffWholeYears(n.start,n.end):"months"===e?o=r.diffWholeMonths(n.start,n.end):"weeks"===e?o=r.diffWholeMonths(n.start,n.end):"days"===e&&(o=g.diffWholeDays(n.start,n.end)),o||0}function h(e,t){for(var r=e.slotDates,n=e.emphasizeWeeks,o=null,s=[],i=0,a=r;i<a.length;i++){var l=a[i],c=t.computeWeekNumber(l),u=n&&null!==o&&o!==c;o=c,s.push(u)}return s}function f(e,t,r){for(var n=e.slotDates,o=e.headerFormats,s=o.map(function(e){return[]}),i=o.map(function(e){return e.getLargestUnit?e.getLargestUnit():null}),a=0;a<n.length;a++)for(var l=n[a],c=e.isWeekStarts[a],u=0;u<o.length;u++){var d=o[u],p=s[u],h=p[p.length-1],f=o.length>1&&u<o.length-1,y=null;if(f){var m=t.format(l,d);h&&h.text===m?h.colspan+=1:y=v(l,m,i[u],r)}else if(!h||g.isInt(t.countDurationsBetween(e.normalizedRange.start,l,e.labelInterval))){var m=t.format(l,d);y=v(l,m,i[u],r)}else h.colspan+=1;y&&(y.weekStart=c,p.push(y))}return s}function v(e,t,r,n){var o=g.buildGotoAnchorHtml(n,{date:e,type:r,forceOff:!r},{"class":"fc-cell-text"},g.htmlEscape(t));return{text:t,spanHtml:o,date:e,colspan:1,isWeekStart:!1}}Object.defineProperty(t,"__esModule",{value:!0});var y=r(0),g=r(0),m=18,S=6,b=200;y.MAX_TIMELINE_SLOTS=1e3;var E=[{years:1},{months:1},{days:1},{hours:1},{minutes:30},{minutes:15},{minutes:10},{minutes:5},{minutes:1},{seconds:30},{seconds:15},{seconds:10},{seconds:5},{seconds:1},{milliseconds:500},{milliseconds:100},{milliseconds:10},{milliseconds:1}];t.buildTimelineDateProfile=n,t.normalizeDate=o,t.normalizeRange=s,t.isValidDate=i},function(e,t,r){function n(e){for(var t in e){var r=e[t];if(r.businessHours)return!0}return!1}function o(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];if(n.group)return!0;if(n.resource&&n.hasChildren)return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),i=r(0),a=r(22),l=r(8),c=r(56),u=r(57),d=r(24),p=r(59),h=r(17),f=r(21),v=r(19),y=r(1),g=function(e){function t(t,r,s,c){var u=e.call(this,t,r,s,c)||this;u.rowNodes=[],u.rowComponents=[],u.rowComponentsById={},u.splitter=new f["default"],u.hasResourceBusinessHours=i.memoize(n),u.buildRowNodes=i.memoize(l.buildRowNodes),u.hasNesting=i.memoize(o),u._updateHasNesting=i.memoizeRendering(u.updateHasNesting);var y=u.opt("resourceColumns")||[],g=u.opt("resourceLabelText"),m="Resources",S=null;y.length?S=g:y.push({labelText:g||m,text:v.buildResourceTextFunc(u.opt("resourceText"),u.calendar)});for(var b=[],E=[],R=[],_=!1,w=!1,D=0,T=y;D<T.length;D++){var C=T[D];C.group?E.push(C):b.push(C)}if(b[0].isMain=!0,E.length)R=E,_=!0;else{var x=u.opt("resourceGroupField");x&&(w=!0,R.push({field:x,text:u.opt("resourceGroupText"),render:u.opt("resourceGroupRender")}))}for(var I=i.parseFieldSpecs(u.opt("resourceOrder")),P=[],H=0,M=I;H<M.length;H++){for(var O=M[H],z=!1,A=0,j=R;A<j.length;A++){var L=j[A];if(L.field===O.field){L.order=O.order,z=!0;break}}z||P.push(O);
}u.superHeaderText=S,u.isVGrouping=_,u.isHGrouping=w,u.groupSpecs=R,u.colSpecs=E.concat(b),u.orderSpecs=P,u.el.classList.add("fc-timeline"),u.opt("eventOverlap")===!1&&u.el.classList.add("fc-no-overlap"),u.el.innerHTML=u.renderSkeletonHtml(),u.miscHeight=u.el.offsetHeight,u.spreadsheet=new p["default"](u.context,u.el.querySelector("thead .fc-resource-area"),u.el.querySelector("tbody .fc-resource-area")),u.timeAxis=new a["default"](u.context,u.el.querySelector("thead .fc-time-area"),u.el.querySelector("tbody .fc-time-area"));var N=i.createElement("div",{className:"fc-rows"},"<table><tbody /></table>");return u.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl.appendChild(N),u.timeAxisTbody=N.querySelector("tbody"),u.lane=new h["default"](u.context,null,u.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl,u.timeAxis),u.bodyScrollJoiner=new d["default"]("vertical",[u.spreadsheet.layout.bodyScroller,u.timeAxis.layout.bodyScroller]),u.spreadsheet.receiveProps({superHeaderText:u.superHeaderText,colSpecs:u.colSpecs}),u}return s.__extends(t,e),t.prototype.renderSkeletonHtml=function(){var e=this.theme,t=this.opt("resourceAreaWidth"),r="";return t&&(r='style="width:'+("number"==typeof t?t+"px":t)+'"'),'<table class="'+e.getClass("tableGrid")+'"> <thead class="fc-head"> <tr> <td class="fc-resource-area '+e.getClass("widgetHeader")+'" '+r+'></td> <td class="fc-divider fc-col-resizer '+e.getClass("widgetHeader")+'"></td> <td class="fc-time-area '+e.getClass("widgetHeader")+'"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-resource-area '+e.getClass("widgetContent")+'"></td> <td class="fc-divider fc-col-resizer '+e.getClass("widgetHeader")+'"></td> <td class="fc-time-area '+e.getClass("widgetContent")+'"></td> </tr> </tbody> </table>'},t.prototype.render=function(t){e.prototype.render.call(this,t);var r=this.splitter.splitProps(t),n=this.hasResourceBusinessHours(t.resourceStore);this.timeAxis.receiveProps({dateProfile:t.dateProfile}),this.lane.receiveProps(s.__assign({},r[""],{dateProfile:t.dateProfile,nextDayThreshold:this.nextDayThreshold,businessHours:n?null:t.businessHours}));var o=this.buildRowNodes(t.resourceStore,this.groupSpecs,this.orderSpecs,this.isVGrouping,t.resourceEntityExpansions,this.opt("resourcesInitiallyExpanded"));this._updateHasNesting(this.hasNesting(o)),this.diffRows(o),this.renderRows(t.dateProfile,n?t.businessHours:null,r)},t.prototype.updateHasNesting=function(e){var t=this.el.classList;e?t.remove("fc-flat"):t.add("fc-flat")},t.prototype.diffRows=function(e){var t=this.rowNodes,r=t.length,n={},o=0,s=0;for(o=0;o<r;o++)n[t[o].id]=o;for(o=0,s=0;s<e.length;s++){var i=e[s],a=n[i.id];null!=a&&a>=o?(this.removeRows(s,a-o,t),o=a+1):this.addRow(s,i)}this.removeRows(s,r-o,t),this.rowNodes=e},t.prototype.addRow=function(e,t){var r=this,n=r.rowComponents,o=r.rowComponentsById,s=n[e],i=this.buildChildComponent(t,this.spreadsheet.bodyTbody,s?s.spreadsheetTr:null,this.timeAxisTbody,s?s.timeAxisTr:null);n.splice(e,0,i),o[t.id]=i},t.prototype.removeRows=function(e,t,r){if(t){for(var n=this,o=n.rowComponents,s=n.rowComponentsById,i=0;i<t;i++){var a=o[e+i];a.destroy(),delete s[r[i].id]}o.splice(e,t)}},t.prototype.buildChildComponent=function(e,t,r,n,o){return e.group?new c["default"](this.context,t,r,n,o):e.resource?new u["default"](this.context,t,r,n,o,this.timeAxis):void 0},t.prototype.renderRows=function(e,t,r){for(var n=this,o=n.rowNodes,i=n.rowComponents,a=0;a<o.length;a++){var l=o[a],c=i[a];if(l.group)c.receiveProps({spreadsheetColCnt:this.colSpecs.length,id:l.id,isExpanded:l.isExpanded,group:l.group});else{var u=l.resource;c.receiveProps(s.__assign({},r[u.id],{dateProfile:e,nextDayThreshold:this.nextDayThreshold,businessHours:u.businessHours||t,colSpecs:this.colSpecs,id:l.id,rowSpans:l.rowSpans,depth:l.depth,isExpanded:l.isExpanded,hasChildren:l.hasChildren,resource:l.resource}))}}},t.prototype.updateSize=function(e,t,r){var n=this.calendar,o=e||n.isViewUpdated||n.isDatesUpdated||n.isEventsUpdated;o&&(this.syncHeadHeights(),this.timeAxis.updateSize(e,t-this.miscHeight,r),this.spreadsheet.updateSize(e,t-this.miscHeight,r));var s=this.updateRowSizes(e);this.lane.updateSize(e),(o||s)&&(this.bodyScrollJoiner.update(),this.timeAxis.layout.scrollJoiner.update())},t.prototype.syncHeadHeights=function(){var e=this.spreadsheet.header.tableEl,t=this.timeAxis.header.tableEl;e.style.height="",t.style.height="";var r=Math.max(e.offsetHeight,t.offsetHeight);e.style.height=t.style.height=r+"px"},t.prototype.updateRowSizes=function(e){var t=this.rowComponents;e||(t=t.filter(function(e){return e.isSizeDirty}));for(var r=t.map(function(e){return e.getHeightEls()}),n=0,o=r;n<o.length;n++)for(var s=o[n],i=0,a=s;i<a.length;i++){var l=a[i];l.style.height=""}for(var c=0,u=t;c<u.length;c++){var d=u[c];d.updateSize(e)}for(var p=r.map(function(e){for(var t=null,r=0,n=e;r<n.length;r++){var o=n[r],s=o.offsetHeight;(null===t||s>t)&&(t=s)}return t}),h=0;h<r.length;h++)for(var f=0,v=r[h];f<v.length;f++){var l=v[f];l.style.height=p[h]+"px"}return t.length},t.prototype.destroy=function(){for(var t=0,r=this.rowComponents;t<r.length;t++){var n=r[t];n.destroy()}this.rowNodes=[],this.rowComponents=[],this.spreadsheet.destroy(),this.timeAxis.destroy(),e.prototype.destroy.call(this)},t.prototype.getNowIndicatorUnit=function(e){return this.timeAxis.getNowIndicatorUnit(e)},t.prototype.renderNowIndicator=function(e){this.timeAxis.renderNowIndicator(e)},t.prototype.unrenderNowIndicator=function(){this.timeAxis.unrenderNowIndicator()},t.prototype.queryScroll=function(){var t=e.prototype.queryScroll.call(this);return this.props.resourceStore&&y.__assign(t,this.queryResourceScroll()),t},t.prototype.applyScroll=function(t){e.prototype.applyScroll.call(this,t),this.props.resourceStore&&this.applyResourceScroll(t)},t.prototype.computeInitialDateScroll=function(){return this.timeAxis.computeInitialDateScroll()},t.prototype.queryDateScroll=function(){return this.timeAxis.queryDateScroll()},t.prototype.applyDateScroll=function(e){this.timeAxis.applyDateScroll(e)},t.prototype.queryResourceScroll=function(){for(var e=this,t=e.rowComponents,r=e.rowNodes,n={},o=this.timeAxis.layout.bodyScroller.el.getBoundingClientRect().top,s=0;s<t.length;s++){var i=t[s],a=r[s],l=i.timeAxisTr,c=l.getBoundingClientRect().bottom;if(c>o){n.rowId=a.id,n.bottom=c-o;break}}return n},t.prototype.applyResourceScroll=function(e){var t=e.forcedRowId||e.rowId;if(t){var r=this.rowComponentsById[t];if(r){var n=r.timeAxisTr;if(n){var o=this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.el.getBoundingClientRect().top,s=n.getBoundingClientRect(),i=(e.forcedRowId?s.top:s.bottom-e.bottom)-o;this.timeAxis.layout.bodyScroller.enhancedScroll.setScrollTop(i),this.spreadsheet.layout.bodyScroller.enhancedScroll.setScrollTop(i)}}}},t.prototype.prepareHits=function(){var e=this.timeAxis.slats.el;this.offsetTracker=new i.OffsetTracker(e),this.rowPositions=new i.PositionCache(e,this.rowComponents.map(function(e){return e.timeAxisTr}),(!1),(!0)),this.rowPositions.build()},t.prototype.releaseHits=function(){this.offsetTracker.destroy(),this.rowPositions=null},t.prototype.queryHit=function(e,t){var r=this,n=r.offsetTracker,o=r.rowPositions,s=this.timeAxis.slats,i=o.topToIndex(t-n.computeTop());if(null!=i){var a=this.rowNodes[i].resource;if(a&&n.isWithinClipping(e,t)){var l=s.positionToHit(e-n.computeLeft());if(l)return{component:this,dateSpan:{range:l.dateSpan.range,allDay:l.dateSpan.allDay,resourceId:a.id},rect:{left:l.left,right:l.right,top:o.tops[i],bottom:o.bottoms[i]},dayEl:l.dayEl,layer:0}}}},t.needsResourceData=!0,t}(i.View);t["default"]=g,g.prototype.isInteractable=!0},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=function(e){function t(t,r,n,o,s){var i=e.call(this,t)||this;return i.isSizeDirty=!1,r.insertBefore(i.spreadsheetTr=document.createElement("tr"),n),o.insertBefore(i.timeAxisTr=document.createElement("tr"),s),i}return n.__extends(t,e),t.prototype.destroy=function(){o.removeElement(this.spreadsheetTr),o.removeElement(this.timeAxisTr),e.prototype.destroy.call(this)},t.prototype.updateSize=function(e){this.isSizeDirty=!1},t}(o.Component);t["default"]=s},function(e,t,r){function n(e,t,r,n){var o=s.buildAgendaDayTable(e,t);return n?new l.DayResourceTable(o,r):new l.ResourceDayTable(o,r)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=r(0),i=r(29),a=r(8),l=r(6),c=r(61),u=r(30),d=function(e){function t(t,r,o,l){var d=e.call(this,t,r,o,l)||this;return d.flattenResources=s.memoize(a.flattenResources),d.buildResourceDayTable=s.memoize(n),d.resourceOrderSpecs=s.parseFieldSpecs(d.opt("resourceOrder")),d.opt("columnHeader")&&(d.header=new i["default"](d.context,d.el.querySelector(".fc-head-container"))),d.resourceTimeGrid=new c["default"](t,d.timeGrid),d.dayGrid&&(d.resourceDayGrid=new u["default"](t,d.dayGrid)),d}return o.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.header&&this.header.destroy(),this.resourceTimeGrid.destroy(),this.resourceDayGrid&&this.resourceDayGrid.destroy()},t.prototype.render=function(t){e.prototype.render.call(this,t);var r=this.splitter.splitProps(t),n=this.flattenResources(t.resourceStore,this.resourceOrderSpecs),s=this.buildResourceDayTable(this.props.dateProfile,this.dateProfileGenerator,n,this.opt("groupByDateAndResource"));this.header&&this.header.receiveProps({resources:n,dates:s.dayTable.headerDates,dateProfile:t.dateProfile,datesRepDistinctDays:!0,renderIntroHtml:this.renderHeadIntroHtml}),this.resourceTimeGrid.receiveProps(o.__assign({},r.timed,{dateProfile:t.dateProfile,resourceDayTable:s})),this.resourceDayGrid&&this.resourceDayGrid.receiveProps(o.__assign({},r.allDay,{dateProfile:t.dateProfile,resourceDayTable:s,isRigid:!1,nextDayThreshold:this.nextDayThreshold}))},t.prototype.renderNowIndicator=function(e){this.resourceTimeGrid.renderNowIndicator(e)},t.needsResourceData=!0,t}(s.AbstractAgendaView);t["default"]=d},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(11),i=r(19),a=function(e){function t(t,r){var n=e.call(this,t)||this;return n.datesAboveResources=n.opt("groupByDateAndResource"),n.resourceTextFunc=i.buildResourceTextFunc(n.opt("resourceText"),n.calendar),r.innerHTML="",r.appendChild(n.el=o.htmlToElement('<div class="fc-row '+n.theme.getClass("headerRow")+'"><table class="'+n.theme.getClass("tableGrid")+'"><thead></thead></table></div>')),n.thead=n.el.querySelector("thead"),n}return n.__extends(t,e),t.prototype.destroy=function(){o.removeElement(this.el)},t.prototype.render=function(e){var t;this.dateFormat=o.createFormatter(this.opt("columnHeaderFormat")||o.computeFallbackHeaderFormat(e.datesRepDistinctDays,e.dates.length)),t=1===e.dates.length?this.renderResourceRow(e.resources):this.datesAboveResources?this.renderDayAndResourceRows(e.dates,e.resources):this.renderResourceAndDayRows(e.resources,e.dates),this.thead.innerHTML=t,this.processResourceEls(e.resources)},t.prototype.renderResourceRow=function(e){var t=this,r=e.map(function(e){return t.renderResourceCell(e,1)});return this.buildTr(r)},t.prototype.renderDayAndResourceRows=function(e,t){for(var r=[],n=[],o=0,s=e;o<s.length;o++){var i=s[o];r.push(this.renderDateCell(i,t.length));for(var a=0,l=t;a<l.length;a++){var c=l[a];n.push(this.renderResourceCell(c,1,i))}}return this.buildTr(r)+this.buildTr(n)},t.prototype.renderResourceAndDayRows=function(e,t){for(var r=[],n=[],o=0,s=e;o<s.length;o++){var i=s[o];r.push(this.renderResourceCell(i,t.length));for(var a=0,l=t;a<l.length;a++){var c=l[a];n.push(this.renderDateCell(c,1,i))}}return this.buildTr(r)+this.buildTr(n)},t.prototype.renderResourceCell=function(e,t,r){var n=this.dateEnv;return'<th class="fc-resource-cell" data-resource-id="'+e.id+'"'+(r?' data-date="'+n.formatIso(r,{omitTime:!0})+'"':"")+(t>1?' colspan="'+t+'"':"")+">"+o.htmlEscape(this.resourceTextFunc(e))+"</th>"},t.prototype.renderDateCell=function(e,t,r){var n=this.props;return o.renderDateCell(e,n.dateProfile,n.datesRepDistinctDays,n.dates.length*n.resources.length,this.dateFormat,this.context,t,r?'data-resource-id="'+r.id+'"':"")},t.prototype.buildTr=function(e){return e.length||(e=["<td>&nbsp;</td>"]),this.props.renderIntroHtml&&(e=[this.props.renderIntroHtml()].concat(e)),this.isRtl&&e.reverse(),"<tr>"+e.join("")+"</tr>"},t.prototype.processResourceEls=function(e){var t=this,r=this.view;o.findElements(this.thead,".fc-resource-cell").forEach(function(n,o){o%=e.length,t.isRtl&&(o=e.length-1-o);var i=e[o];r.publiclyTrigger("resourceRender",[{resource:new s["default"](t.calendar,i),el:n,view:r}])})},t}(o.Component);t["default"]=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(6),i=function(e){function t(t,r){var n=e.call(this,t,r.el)||this;return n.splitter=new s.VResourceSplitter,n.slicers={},n.joiner=new a,n.dayGrid=r,n}return n.__extends(t,e),t.prototype.render=function(e){var t=this,r=this.dayGrid,s=e.dateProfile,i=e.resourceDayTable,a=e.nextDayThreshold,l=this.splitter.splitProps(e);this.slicers=o.mapHash(l,function(e,r){return t.slicers[r]||new o.DayGridSlicer});var c=o.mapHash(this.slicers,function(e,t){return e.sliceProps(l[t],s,a,r,i.dayTable)});r.allowAcrossResources=1===i.dayTable.colCnt,r.receiveProps(n.__assign({},this.joiner.joinProps(c,i),{dateProfile:s,cells:i.cells,isRigid:e.isRigid}))},t.prototype.prepareHits=function(){this.offsetTracker=new o.OffsetTracker(this.dayGrid.el)},t.prototype.releaseHits=function(){this.offsetTracker.destroy()},t.prototype.queryHit=function(e,t){var r=this.offsetTracker;if(r.isWithinClipping(e,t)){var n=r.computeLeft(),o=r.computeTop(),s=this.dayGrid.positionToHit(e-n,t-o);if(s)return{component:this.dayGrid,dateSpan:{range:s.dateSpan.range,allDay:s.dateSpan.allDay,resourceId:this.props.resourceDayTable.cells[s.row][s.col].resource.id},dayEl:s.dayEl,rect:{left:s.relativeRect.left+n,right:s.relativeRect.right+n,top:s.relativeRect.top+o,bottom:s.relativeRect.bottom+o},layer:0}}},t}(o.DateComponent);t["default"]=i,i.prototype.isInteractable=!0;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.transformSeg=function(e,t,r){var o=t.computeColRanges(e.firstCol,e.lastCol,r);return o.map(function(t){return n.__assign({},e,t,{isStart:e.isStart&&t.isStart,isEnd:e.isEnd&&t.isEnd})})},t}(s.VResourceJoiner)},function(e,t,r){function n(e,t,r,n){var o=s.buildBasicDayTable(e,t);return n?new l.DayResourceTable(o,r):new l.ResourceDayTable(o,r)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=r(0),i=r(29),a=r(8),l=r(6),c=r(30),u=function(e){function t(t,r,o,l){var u=e.call(this,t,r,o,l)||this;return u.flattenResources=s.memoize(a.flattenResources),u.buildResourceDayTable=s.memoize(n),u.resourceOrderSpecs=s.parseFieldSpecs(u.opt("resourceOrder")),u.opt("columnHeader")&&(u.header=new i["default"](u.context,u.el.querySelector(".fc-head-container"))),u.resourceDayGrid=new c["default"](t,u.dayGrid),u}return o.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.header&&this.header.destroy(),this.resourceDayGrid.destroy()},t.prototype.render=function(t){e.prototype.render.call(this,t);var r=this.flattenResources(t.resourceStore,this.resourceOrderSpecs),n=this.buildResourceDayTable(this.props.dateProfile,this.dateProfileGenerator,r,this.opt("groupByDateAndResource"));this.header&&this.header.receiveProps({resources:r,dates:n.dayTable.headerDates,dateProfile:t.dateProfile,datesRepDistinctDays:!0,renderIntroHtml:this.renderHeadIntroHtml}),this.resourceDayGrid.receiveProps({dateProfile:t.dateProfile,resourceDayTable:n,businessHours:t.businessHours,eventStore:t.eventStore,eventUiBases:t.eventUiBases,dateSelection:t.dateSelection,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,isRigid:this.hasRigidRows(),nextDayThreshold:this.nextDayThreshold})},t.needsResourceData=!0,t}(s.AbstractBasicView);t["default"]=u},,,function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(35),s=r(36),i=r(40),a=r(20),l=r(41),c=r(42),u=r(43),d=r(44),p=r(45);r(46);var h=r(47),f=r(16),v=r(26),y=r(28),g=r(31);r(62),r(63),r(64);var m=r(66),S=r(67),b=r(68),E=r(69);t.GeneralPlugin=n.createPlugin({reducers:[s["default"]],eventDefParsers:[i.parseEventDef],eventDragMutationMassagers:[a.massageEventDragMutation],eventDefMutationAppliers:[a.applyEventDefMutation],dateSelectionTransformers:[l.transformDateSelectionJoin],datePointTransforms:[c.transformDatePoint],dateSpanTransforms:[c.transformDateSpan],viewPropsTransformers:[o.ResourceDataAdder,o.ResourceEventConfigAdder],isPropsValid:u.isPropsValidWithResources,externalDefTransforms:[d.transformExternalDef],eventResizeJoinTransforms:[p.transformEventResizeJoin],viewContainerModifiers:[h.injectLicenseWarning],eventDropTransformers:[a.transformEventDrop]}),n.Calendar.defaultPlugins.push(t.GeneralPlugin,m["default"],S["default"],b["default"],E["default"]),n.TimelineView=f["default"],n.ResourceTimelineView=v["default"],n.ResourceTimelineView=v["default"],n.ResourceAgendaView=y["default"],n.ResourceBasicView=g["default"]},function(e,t,r){function n(e,t,r,n){if(t){var a=o(r.instances,n),l=s(a,r.defs);return d.__assign(l,i(l,e)),u.filterHash(e,function(e,t){return l[t]})}return e}function o(e,t){return u.filterHash(e,function(e){return u.rangesIntersect(e.range,t)})}function s(e,t){var r={};for(var n in e)for(var o=e[n],s=0,i=t[o.defId].resourceIds;s<i.length;s++){var a=i[s];r[a]=!0}return r}function i(e,t){var r={};for(var n in e)for(var o=void 0;(o=t[n])&&(n=o.parentId);)r[n]=!0;return r}function a(e){return u.mapHash(e,function(e){return e.ui})}function l(e,t,r){return u.mapHash(e,function(e,n){return n?c(e,t[n],r):e})}function c(e,t,r){for(var n=[],o=0,s=t.resourceIds;o<s.length;o++){var i=s[o];r[i]&&n.unshift(r[i])}return n.unshift(e),u.combineEventUis(n)}Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),d=r(1),p=function(){function e(){this.filterResources=u.memoize(n)}return e.prototype.transform=function(e,t,r,n){if(t["class"].needsResourceData)return{resourceStore:this.filterResources(r.resourceStore,n.opt("filterResourcesWithEvents"),r.eventStore,r.dateProfile.activeRange),resourceEntityExpansions:r.resourceEntityExpansions}},e}();t.ResourceDataAdder=p;var h=function(){function e(){this.buildResourceEventUis=u.memoizeOutput(a,u.isPropsEqual),this.injectResourceEventUis=u.memoize(l)}return e.prototype.transform=function(e,t,r){if(!t["class"].needsResourceData)return{eventUiBases:this.injectResourceEventUis(e.eventUiBases,e.eventStore.defs,this.buildResourceEventUis(r.resourceStore))}},e}();t.ResourceEventConfigAdder=h},function(e,t,r){function n(e,t,r){var n=s["default"](e.resourceSource,t,e.dateProfile,r),l=i["default"](e.resourceStore,t,n,r),c=a.reduceResourceEntityExpansions(e.resourceEntityExpansions,t);return o.__assign({},e,{resourceSource:n,resourceStore:l,resourceEntityExpansions:c})}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=r(37),i=r(38),a=r(39);t["default"]=n},function(e,t,r){function n(e,t,r,n){switch(t.type){case"INIT":return o(n);case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return s(e,r.activeRange,n);case"RECEIVE_RESOURCES":case"RECEIVE_RESOURCE_ERROR":return a(e,t.fetchId,t.fetchRange);case"REFETCH_RESOURCES":return i(e,r.activeRange,n);default:return e}}function o(e){var t=e.opt("resources");if(t){var r=u.parseResourceSource(t);return e.opt("refetchResourcesOnNavigate")||(r=i(r,null,e)),r}return null}function s(e,t,r){return!r.opt("refetchResourcesOnNavigate")||u.doesSourceIgnoreRange(e)||e.fetchRange&&c.rangesEqual(e.fetchRange,t)?e:i(e,t,r)}function i(e,t,r){var n=u.getResourceSourceDef(e.sourceDefId),o=String(d++);return n.fetch({resourceSource:e,calendar:r,range:t},function(e){r.afterSizingTriggers._resourcesRendered=[null],r.dispatch({type:"RECEIVE_RESOURCES",fetchId:o,fetchRange:t,rawResources:e.rawResources})},function(e){r.dispatch({type:"RECEIVE_RESOURCE_ERROR",fetchId:o,fetchRange:t,error:e})}),l.__assign({},e,{isFetching:!0,latestFetchId:o})}function a(e,t,r){return t===e.latestFetchId?l.__assign({},e,{isFetching:!1,fetchRange:r}):e}Object.defineProperty(t,"__esModule",{value:!0});var l=r(1),c=r(0),u=r(10);t["default"]=n;var d=0},function(e,t,r){function n(e,t,r,n){switch(t.type){case"INIT":return{};case"RECEIVE_RESOURCES":return o(e,t.rawResources,t.fetchId,r,n);case"ADD_RESOURCE":return s(e,t.resourceHash);case"REMOVE_RESOURCE":return i(e,t.resourceId);case"SET_RESOURCE_PROP":return a(e,t.resourceId,t.propName,t.propValue);case"RESET_RESOURCES":return c.mapHash(e,function(e){return l.__assign({},e)});default:return e}}function o(e,t,r,n,o){if(n.latestFetchId===r){for(var s={},i=0,a=t;i<a.length;i++){var l=a[i];u.parseResource(l,"",s,o)}return s}return e}function s(e,t){return l.__assign({},e,t)}function i(e,t){var r=l.__assign({},e);delete r[t];for(var n in r)r[n].parentId===t&&(r[n]=l.__assign({},r[n],{parentId:""}));return r}function a(e,t,r,n){var o,s,i=e[t];return i?l.__assign({},e,(o={},o[t]=l.__assign({},i,(s={},s[r]=n,s)),o)):e}Object.defineProperty(t,"__esModule",{value:!0});var l=r(1),c=r(0),u=r(15);t["default"]=n},function(e,t,r){function n(e,t){var r;switch(t.type){case"INIT":return{};case"SET_RESOURCE_ENTITY_EXPANDED":return o.__assign({},e,(r={},r[t.id]=t.isExpanded,r));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1);t.reduceResourceEntityExpansions=n},function(e,t,r){function n(e,t,r){var n=o.refineProps(t,s,{},r),i=n.resourceIds;n.resourceId&&i.push(n.resourceId),e.resourceIds=i,e.resourceEditable=n.resourceEditable}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s={resourceId:String,resourceIds:function(e){return(e||[]).map(function(e){return String(e)})},resourceEditable:Boolean};t.parseEventDef=n},function(e,t){function r(e,t){var r=e.dateSpan.resourceId,n=t.dateSpan.resourceId;if(r&&n)return(e.component.allowAcrossResources!==!1||r===n)&&{resourceId:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.transformDateSelectionJoin=r},function(e,t,r){function n(e,t){return e.resourceId?{resource:t.getResourceById(e.resourceId)}:{}}function o(e,t){return e.resourceId?{resource:t.getResourceById(e.resourceId)}:{}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),i=r(11),a=r(15);s.Calendar.prototype.addResource=function(e,t){void 0===t&&(t=!0);var r,n,o;return e instanceof i["default"]?(o=e._resource,r={},r[o.id]=o,n=r):(n={},o=a.parseResource(e,"",n,this)),t&&this.component.view.addScroll({forcedRowId:o.id}),this.dispatch({type:"ADD_RESOURCE",resourceHash:n}),new i["default"](this,o)},s.Calendar.prototype.getResourceById=function(e){if(e=String(e),this.state.resourceStore){var t=this.state.resourceStore[e];if(t)return new i["default"](this,t)}return null},s.Calendar.prototype.getResources=function(){var e=this.state.resourceStore,t=[];if(e)for(var r in e)t.push(new i["default"](this,e[r]));return t},s.Calendar.prototype.getTopLevelResources=function(){var e=this.state.resourceStore,t=[];if(e)for(var r in e)e[r].parentId||t.push(new i["default"](this,e[r]));return t},s.Calendar.prototype.rerenderResources=function(){this.dispatch({type:"RESET_RESOURCES"})},s.Calendar.prototype.refetchResources=function(){this.dispatch({type:"REFETCH_RESOURCES"})},t.transformDatePoint=n,t.transformDateSpan=o},function(e,t,r){function n(e,t){var r=new l["default"],n=r.splitProps(i.__assign({},e,{resourceStore:t.state.resourceStore}));for(var s in n){var c=n[s];if(s&&n[""]&&(c=i.__assign({},c,{eventStore:a.mergeEventStores(n[""].eventStore,c.eventStore),eventUiBases:i.__assign({},n[""].eventUiBases,c.eventUiBases)})),!a.isPropsValid(c,t,{resourceId:s},o.bind(null,s)))return!1}return!0}function o(e,t){return i.__assign({},t,{constraints:s(e,t.constraints)})}function s(e,t){return t.map(function(t){var r=t.defs;if(r)for(var n in r){var o=r[n].resourceIds;if(o.length&&o.indexOf(e)===-1)return!1}return t})}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),a=r(0),l=r(21);t.isPropsValidWithResources=n},function(e,t){function r(e){return e.resourceId?{resourceId:e.resourceId}:{}}Object.defineProperty(t,"__esModule",{value:!0}),t.transformExternalDef=r},function(e,t){function r(e,t){var r=e.component;if(r.allowAcrossResources===!1&&e.dateSpan.resourceId!==t.dateSpan.resourceId)return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.transformEventResizeJoin=r},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);n.EventApi.prototype.getResources=function(){var e=this._calendar;return this._def.resourceIds.map(function(t){return e.getResourceById(t)})}},function(e,t,r){function n(e,t){var r=t.opt("schedulerLicenseKey");s(window.location.href)||o(r)||a.appendToElement(e,'<div class="fc-license-message">Please use a valid license key. <a href="'+u+'">More Info</a></div>')}function o(e){if(d.indexOf(e)!==-1)return!0;var t=(e||"").match(/^(\d+)\-fcs\-(\d+)$/);if(t&&10===t[1].length){var r=new Date(1e3*parseInt(t[2],10)),n=new Date(i.mockSchedulerReleaseDate||l);if(a.isValidDate(n)){var o=a.addDays(n,-c);if(o<r)return!0}}return!1}function s(e){return/\w+\:\/\/fullcalendar\.io\/|\/demos\/[\w-]+\.html$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(0),l="2019-01-11",c=372,u="http://fullcalendar.io/scheduler/license/",d=["GPL-My-Project-Is-Open-Source","CC-Attribution-NonCommercial-NoDerivatives"];t.injectLicenseWarning=n},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(49),s=function(){function e(e,t,r){this.isHScrollbarsClipped=!1,this.isVScrollbarsClipped=!1,"clipped-scroll"===e&&(e="scroll",this.isHScrollbarsClipped=!0),"clipped-scroll"===t&&(t="scroll",this.isVScrollbarsClipped=!0),this.enhancedScroll=new o["default"](e,t),r.appendChild(this.el=n.createElement("div",{className:"fc-scroller-clip"})),this.el.appendChild(this.enhancedScroll.el)}return e.prototype.destroy=function(){n.removeElement(this.el)},e.prototype.updateSize=function(){var e=this.enhancedScroll,t=e.el,r=n.computeEdges(t),o={marginLeft:0,marginRight:0,marginTop:0,marginBottom:0};this.isVScrollbarsClipped&&(o.marginLeft=-r.scrollbarLeft,o.marginRight=-r.scrollbarRight),this.isHScrollbarsClipped&&(o.marginBottom=-r.scrollbarBottom),n.applyStyle(t,o),!this.isHScrollbarsClipped&&"hidden"!==e.overflowX||!this.isVScrollbarsClipped&&"hidden"!==e.overflowY||r.scrollbarLeft||r.scrollbarRight||r.scrollbarBottom?t.classList.remove("fc-no-scrollbars"):t.classList.add("fc-no-scrollbars")},e.prototype.setHeight=function(e){this.enhancedScroll.setHeight(e)},e.prototype.getScrollbarWidths=function(){var e=this.enhancedScroll.getScrollbarWidths();return this.isVScrollbarsClipped&&(e.left=0,e.right=0),this.isHScrollbarsClipped&&(e.bottom=0),e},e}();t["default"]=s},function(e,t,r){function n(){return c||(c=o())}function o(){var e=i.htmlToElement('<div style=" position: absolute; top: -1000px; width: 1px; height: 1px; overflow: scroll; direction: rtl; font-size: 100px; ">A</div>');document.body.appendChild(e);var t;return e.scrollLeft>0?t="positive":(e.scrollLeft=1,t=e.scrollLeft>0?"reverse":"negative"),i.removeElement(e),t}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),i=r(0),a=r(50),l=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.reportScroll=function(){n.isScrolling||n.reportScrollStart(),n.trigger("scroll"),n.isMoving=!0,n.requestMovingEnd()},n.reportScrollStart=function(){n.isScrolling||(n.isScrolling=!0,n.trigger("scrollStart",n.isTouching))},n.reportTouchStart=function(){n.isTouching=!0,n.isTouchedEver=!0},n.reportTouchEnd=function(){n.isTouching&&(n.isTouching=!1,n.isTouchScrollEnabled&&n.unbindPreventTouchScroll(),n.isMoving||n.reportScrollEnd())},n.isScrolling=!1,n.isTouching=!1,n.isTouchedEver=!1,n.isMoving=!1,n.isTouchScrollEnabled=!0,n.requestMovingEnd=i.debounce(n.reportMovingEnd,500),n.canvas=new a["default"],n.el.appendChild(n.canvas.el),n.applyOverflow(),n.bindHandlers(),n}return s.__extends(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.unbindHandlers()},t.prototype.disableTouchScroll=function(){this.isTouchScrollEnabled=!1,this.bindPreventTouchScroll()},t.prototype.enableTouchScroll=function(){this.isTouchScrollEnabled=!0,this.isTouching||this.unbindPreventTouchScroll()},t.prototype.bindPreventTouchScroll=function(){this.preventTouchScrollHandler||this.el.addEventListener("touchmove",this.preventTouchScrollHandler=i.preventDefault)},t.prototype.unbindPreventTouchScroll=function(){this.preventTouchScrollHandler&&(this.el.removeEventListener("touchmove",this.preventTouchScrollHandler),this.preventTouchScrollHandler=null)},t.prototype.bindHandlers=function(){this.el.addEventListener("scroll",this.reportScroll),this.el.addEventListener("touchstart",this.reportTouchStart,{passive:!0}),this.el.addEventListener("touchend",this.reportTouchEnd)},t.prototype.unbindHandlers=function(){this.el.removeEventListener("scroll",this.reportScroll),this.el.removeEventListener("touchstart",this.reportTouchStart,{passive:!0}),this.el.removeEventListener("touchend",this.reportTouchEnd)},t.prototype.reportMovingEnd=function(){this.isMoving=!1,this.isTouching||this.reportScrollEnd()},t.prototype.reportScrollEnd=function(){this.isScrolling&&(this.trigger("scrollEnd"),this.isScrolling=!1)},t.prototype.getScrollLeft=function(){var e=this.el,t=window.getComputedStyle(e).direction,r=e.scrollLeft;if("rtl"===t)switch(n()){case"positive":r=r+e.clientWidth-e.scrollWidth;break;case"reverse":r=-r}return r},t.prototype.setScrollLeft=function(e){var t=this.el,r=window.getComputedStyle(t).direction;if("rtl"===r)switch(n()){case"positive":e=e-t.clientWidth+t.scrollWidth;break;case"reverse":e=-e}t.scrollLeft=e},t.prototype.getScrollFromLeft=function(){var e=this.el,t=window.getComputedStyle(e).direction,r=e.scrollLeft;if("rtl"===t)switch(n()){case"negative":r=r-e.clientWidth+e.scrollWidth;break;case"reverse":r=-r-e.clientWidth+e.scrollWidth}return r},t}(i.ScrollComponent);t["default"]=l,i.EmitterMixin.mixInto(l);var c},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(1),s=function(){function e(){this.gutters={},this.el=n.htmlToElement('<div class="fc-scroller-canvas"> <div class="fc-content"></div> <div class="fc-bg"></div> </div>'),this.contentEl=this.el.querySelector(".fc-content"),this.bgEl=this.el.querySelector(".fc-bg")}return e.prototype.setGutters=function(e){e?o.__assign(this.gutters,e):this.gutters={},this.updateSize()},e.prototype.setWidth=function(e){this.width=e,this.updateSize()},e.prototype.setMinWidth=function(e){this.minWidth=e,this.updateSize()},e.prototype.clearWidth=function(){this.width=null,this.minWidth=null,this.updateSize()},e.prototype.updateSize=function(){var e=this,t=e.gutters,r=e.el;n.forceClassName(r,"fc-gutter-left",t.left),n.forceClassName(r,"fc-gutter-right",t.right),n.forceClassName(r,"fc-gutter-top",t.top),n.forceClassName(r,"fc-gutter-bottom",t.bottom),n.applyStyle(r,{paddingLeft:t.left||"",paddingRight:t.right||"",paddingTop:t.top||"",paddingBottom:t.bottom||"",width:null!=this.width?this.width+(t.left||0)+(t.right||0):"",minWidth:null!=this.minWidth?this.minWidth+(t.left||0)+(t.right||0):""}),n.applyStyle(this.bgEl,{left:t.left||"",right:t.right||"",top:t.top||"",bottom:t.bottom||""})},e}();t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=function(e){function t(t,r){var n=e.call(this,t)||this;return r.appendChild(n.tableEl=o.createElement("table",{className:n.theme.getClass("tableGrid")})),n}return n.__extends(t,e),t.prototype.destroy=function(){o.removeElement(this.tableEl),e.prototype.destroy.call(this)},t.prototype.render=function(e){this.renderDates(e.tDateProfile)},t.prototype.renderDates=function(e){for(var t=this,r=t.dateEnv,n=t.theme,s=e.cellRows,i=s[s.length-1],a=o.asRoughMs(e.labelInterval)>o.asRoughMs(e.slotDuration),l=o.isSingleDay(e.slotDuration),c="<colgroup>",u=0,d=i;u<d.length;u++){
d[u];c+="<col/>"}c+="</colgroup>",c+="<tbody>";for(var p=0,h=s;p<h.length;p++){var f=h[p],v=f===i;c+="<tr"+(a&&v?' class="fc-chrono"':"")+">";for(var y=0,g=f;y<g.length;y++){var m=g[y],S=[n.getClass("widgetHeader")];m.isWeekStart&&S.push("fc-em-cell"),l&&(S=S.concat(o.getDayClasses(m.date,this.props.dateProfile,this.context,!0))),c+='<th class="'+S.join(" ")+'" data-date="'+r.formatIso(m.date,{omitTime:!e.isTimeScale,omitTimeZoneOffset:!0})+'"'+(m.colspan>1?' colspan="'+m.colspan+'"':"")+'><div class="fc-cell-content">'+m.spanHtml+"</div></th>"}c+="</tr>"}c+="</tbody>",this.tableEl.innerHTML=c,this.slatColEls=o.findElements(this.tableEl,"col"),this.innerEls=o.findElements(this.tableEl.querySelector("tr:last-child"),"th .fc-cell-text")},t}(o.Component);t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=function(e){function t(t,r){var n=e.call(this,t)||this;return r.appendChild(n.el=o.createElement("div",{className:"fc-slats"})),n}return n.__extends(t,e),t.prototype.destroy=function(){o.removeElement(this.el),e.prototype.destroy.call(this)},t.prototype.render=function(e){this.renderDates(e.tDateProfile)},t.prototype.renderDates=function(e){for(var t=this.theme,r=e.slotDates,n=e.isWeekStarts,s='<table class="'+t.getClass("tableGrid")+'"><colgroup>',i=0;i<r.length;i++)s+="<col/>";s+="</colgroup>",s+="<tbody><tr>";for(var i=0;i<r.length;i++)s+=this.slatCellHtml(r[i],n[i],e);s+="</tr></tbody></table>",this.el.innerHTML=s,this.slatColEls=o.findElements(this.el,"col"),this.slatEls=o.findElements(this.el,"td"),this.outerCoordCache=new o.PositionCache(this.el,this.slatEls,(!0),(!1)),this.innerCoordCache=new o.PositionCache(this.el,o.findChildren(this.slatEls,"div"),(!0),(!1))},t.prototype.slatCellHtml=function(e,t,r){var n,s=this,i=s.theme,a=s.dateEnv;return r.isTimeScale?(n=[],n.push(o.isInt(a.countDurationsBetween(r.normalizedRange.start,e,r.labelInterval))?"fc-major":"fc-minor")):(n=o.getDayClasses(e,this.props.dateProfile,this.context),n.push("fc-day")),n.unshift(i.getClass("widgetContent")),t&&n.push("fc-em-cell"),'<td class="'+n.join(" ")+'" data-date="'+a.formatIso(e,{omitTime:!r.isTimeScale,omitTimeZoneOffset:!0})+'"><div></div></td>'},t.prototype.updateSize=function(){this.outerCoordCache.build(),this.innerCoordCache.build()},t.prototype.positionToHit=function(e){var t=this.outerCoordCache,r=this.props.tDateProfile,n=t.leftToIndex(e);if(null!=n){var s=t.getWidth(n),i=this.isRtl?(t.rights[n]-e)/s:(e-t.lefts[n])/s,a=Math.floor(i*r.snapsPerSlot),l=this.dateEnv.add(r.slotDates[n],o.multiplyDuration(r.snapDuration,a)),c=this.dateEnv.add(l,r.snapDuration);return{dateSpan:{range:{start:l,end:c},allDay:!this.props.tDateProfile.isTimeScale},dayEl:this.slatColEls[n],left:t.lefts[n],right:t.rights[n]}}return null},t}(o.Component);t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(){function e(e,t){this.headParent=e,this.bodyParent=t}return e.prototype.render=function(e,t){var r=t?{right:-e}:{left:e};this.headParent.appendChild(this.arrowEl=n.createElement("div",{className:"fc-now-indicator fc-now-indicator-arrow",style:r})),this.bodyParent.appendChild(this.lineEl=n.createElement("div",{className:"fc-now-indicator fc-now-indicator-line",style:r}))},e.prototype.unrender=function(){this.arrowEl&&n.removeElement(this.arrowEl),this.lineEl&&n.removeElement(this.lineEl)},e}();t["default"]=o},function(e,t,r){function n(e){for(var t=0,r=0,n=e;r<n.length;r++){var s=n[r];t=Math.max(t,o(s))}return t}function o(e){return null==e.top&&(e.top=n(e.above)),e.top+e.height}function s(e,t){return e.left<t.right&&e.right>t.left}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),a=r(0),l=r(20),c=function(e){function t(t,r,n){var o=e.call(this,t)||this;return o.masterContainerEl=r,o.timeAxis=n,o}return i.__extends(t,e),t.prototype.renderSegHtml=function(e,t){var r=e.eventRange,n=r.def,o=r.ui,s=o.startEditable||l.computeResourceEditable(n,this.timeAxis.calendar),i=e.isStart&&o.durationEditable&&this.context.options.eventResizableFromStart,c=e.isEnd&&o.durationEditable,u=this.getSegClasses(e,s,i||c,t);u.unshift("fc-timeline-event","fc-h-event");var d=this.getTimeText(r);return'<a class="'+u.join(" ")+'" style="'+a.cssToStr(this.getSkinCss(o))+'"'+(n.url?' href="'+a.htmlEscape(n.url)+'"':"")+'><div class="fc-content">'+(d?'<span class="fc-time">'+a.htmlEscape(d)+"</span>":"")+'<span class="fc-title">'+(n.title?a.htmlEscape(n.title):"&nbsp;")+'</span></div><div class="fc-bg"></div>'+(i?'<div class="fc-resizer fc-start-resizer"></div>':"")+(c?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},t.prototype.computeDisplayEventTime=function(){return!this.timeAxis.tDateProfile.isTimeScale},t.prototype.computeDisplayEventEnd=function(){return!1},t.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"}},t.prototype.attachSegs=function(e,t){if(!this.el&&this.masterContainerEl&&(this.el=a.createElement("div",{className:"fc-event-container"}),t&&this.el.classList.add("fc-mirror-container"),this.masterContainerEl.appendChild(this.el)),this.el)for(var r=0,n=e;r<n.length;r++){var o=n[r];this.el.appendChild(o.el)}},t.prototype.detachSegs=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];a.removeElement(n.el)}},t.prototype.computeSegSizes=function(e){for(var t=this.timeAxis,r=0,n=e;r<n.length;r++){var o=n[r],s=t.rangeToCoords(o);a.applyStyle(o.el,{left:o.left=s.left,right:-(o.right=s.right)})}},t.prototype.assignSegSizes=function(e){if(this.el){for(var t=0,r=e;t<r.length;t++){var o=r[t];o.height=a.computeHeightAndMargins(o.el)}this.buildSegLevels(e);var s=n(e);a.applyStyleProp(this.el,"height",s);for(var i=0,l=e;i<l.length;i++){var o=l[i];a.applyStyleProp(o.el,"top",o.top)}}},t.prototype.buildSegLevels=function(e){var t=[];e=this.sortEventSegs(e);for(var r=0,n=e;r<n.length;r++){var o=n[r];o.above=[];for(var i=0;i<t.length;){for(var a=!1,l=0,c=t[i];l<c.length;l++){var u=c[l];s(o,u)&&(o.above.push(u),a=!0)}if(!a)break;i+=1}for((t[i]||(t[i]=[])).push(o),i+=1;i<t.length;){for(var d=0,p=t[i];d<p.length;d++){var h=p[d];s(o,h)&&h.above.push(o)}i+=1}}return t},t}(a.FgEventRenderer);t["default"]=c},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=function(e){function t(t,r,n){var o=e.call(this,t)||this;return o.masterContainerEl=r,o.timeAxis=n,o}return n.__extends(t,e),t.prototype.attachSegs=function(e,t){if(t.length){var r=void 0;r="businessHours"===e?"bgevent":e.toLowerCase();var n=o.createElement("div",{className:"fc-"+r+"-container"});this.masterContainerEl.appendChild(n);for(var s=0,i=t;s<i.length;s++){var a=i[s];n.appendChild(a.el)}return[n]}},t.prototype.computeSegSizes=function(e){for(var t=this.timeAxis,r=0,n=e;r<n.length;r++){var o=n[r],s=t.rangeToCoords(o);o.left=s.left,o.right=s.right}},t.prototype.assignSegSizes=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];o.applyStyle(n.el,{left:n.left,right:-n.right})}},t}(o.FillRenderer);t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(8),i=r(27),a=r(18),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._renderCells=o.memoizeRendering(t.renderCells,t.unrenderCells),t._updateExpanderIcon=o.memoizeRendering(t.updateExpanderIcon,null,[t._renderCells]),t.onExpanderClick=function(e){var r=t.props;t.calendar.dispatch({type:"SET_RESOURCE_ENTITY_EXPANDED",id:r.id,isExpanded:!r.isExpanded})},t}return n.__extends(t,e),t.prototype.render=function(e){this._renderCells(e.group,e.spreadsheetColCnt),this._updateExpanderIcon(e.isExpanded),this.isSizeDirty=!0},t.prototype.destroy=function(){e.prototype.destroy.call(this),this._renderCells.unrender()},t.prototype.renderCells=function(e,t){var r=this.renderSpreadsheetContent(e);this.spreadsheetTr.appendChild(o.createElement("td",{className:"fc-divider",colSpan:t},this.spreadsheetHeightEl=o.createElement("div",null,r))),this.expanderIconEl=r.querySelector(".fc-icon"),this.expanderIconEl.parentElement.addEventListener("click",this.onExpanderClick),this.timeAxisTr.appendChild(o.createElement("td",{className:"fc-divider"},this.timeAxisHeightEl=document.createElement("div")))},t.prototype.unrenderCells=function(){this.spreadsheetTr.innerHTML="",this.timeAxisTr.innerHTML=""},t.prototype.renderSpreadsheetContent=function(e){var t=this.renderCellText(e),r=o.htmlToElement('<div class="fc-cell-content"><span class="fc-expander"><span class="fc-icon"></span></span><span class="fc-cell-text">'+(t?o.htmlEscape(t):"&nbsp;")+"</span></div>"),n=e.spec.render;return"function"==typeof n&&(r=n(r,e.value)||r),r},t.prototype.renderCellText=function(e){var t=e.value||"",r=e.spec.text;return"function"==typeof r&&(t=r(t)||t),t},t.prototype.getHeightEls=function(){return[this.spreadsheetHeightEl,this.timeAxisHeightEl]},t.prototype.updateExpanderIcon=function(e){a.updateExpanderIcon(this.expanderIconEl,e,this.isRtl)},t}(i["default"]);t["default"]=l,l.addEqualityFuncs({group:s.isGroupsEqual})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(27),i=r(58),a=r(17),l=r(18),c=function(e){function t(t,r,n,s,c,u){var d=e.call(this,t,r,n,s,c)||this;return d._updateTrResourceId=o.memoizeRendering(l.updateTrResourceId),d.spreadsheetRow=new i["default"](t,d.spreadsheetTr),d.timeAxisTr.appendChild(o.createElement("td",{className:d.theme.getClass("widgetContent")},d.innerContainerEl=document.createElement("div"))),d.lane=new a["default"](t,d.innerContainerEl,d.innerContainerEl,u),d}return n.__extends(t,e),t.prototype.destroy=function(){this.spreadsheetRow.destroy(),this.lane.destroy(),e.prototype.destroy.call(this)},t.prototype.render=function(e){this.spreadsheetRow.receiveProps({colSpecs:e.colSpecs,id:e.id,rowSpans:e.rowSpans,depth:e.depth,isExpanded:e.isExpanded,hasChildren:e.hasChildren,resource:e.resource}),this._updateTrResourceId(this.timeAxisTr,e.resource.id),this.lane.receiveProps({dateProfile:e.dateProfile,nextDayThreshold:e.nextDayThreshold,businessHours:e.businessHours,eventStore:e.eventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize}),this.isSizeDirty=!0},t.prototype.updateSize=function(t){e.prototype.updateSize.call(this,t),this.lane.updateSize(t)},t.prototype.getHeightEls=function(){return[this.spreadsheetRow.heightEl,this.innerContainerEl]},t}(s["default"]);t["default"]=c,c.addEqualityFuncs({rowSpans:o.isArraysEqual})},function(e,t,r){function n(e){for(var t="",r=0;r<e;r++)t+='<span class="fc-icon"></span>';return t+='<span class="fc-expander-space"><span class="fc-icon"></span></span>'}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=r(0),i=r(18),a=r(11),l=r(8),c=r(19),u=function(e){function t(t,r){var n=e.call(this,t)||this;return n._renderRow=s.memoizeRendering(n.renderRow,n.unrenderRow),n._updateTrResourceId=s.memoizeRendering(i.updateTrResourceId,null,[n._renderRow]),n._updateExpanderIcon=s.memoizeRendering(n.updateExpanderIcon,null,[n._renderRow]),n.onExpanderClick=function(e){var t=n.props;n.calendar.dispatch({type:"SET_RESOURCE_ENTITY_EXPANDED",id:t.id,isExpanded:!t.isExpanded})},n.tr=r,n}return o.__extends(t,e),t.prototype.render=function(e){this._renderRow(e.resource,e.rowSpans,e.depth,e.colSpecs),this._updateTrResourceId(this.tr,e.resource.id),this._updateExpanderIcon(e.hasChildren,e.isExpanded)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this._renderRow.unrender()},t.prototype.renderRow=function(e,t,r,o){for(var i,u=this,d=u.tr,p=u.theme,h=u.calendar,f=u.view,v=l.buildResourceFields(e),y=0;y<o.length;y++){var g=o[y],m=t[y];if(0!==m){null==m&&(m=1);var S=void 0;S=g.field?v[g.field]:c.buildResourceTextFunc(g.text,h)(e);var b=s.htmlToElement('<div class="fc-cell-content">'+(g.isMain?n(r):"")+'<span class="fc-cell-text">'+(S?s.htmlEscape(S):"&nbsp;")+"</span></div>");"function"==typeof g.render&&(b=g.render(new a["default"](h,e),b)||b);var E=s.createElement("td",{className:p.getClass("widgetContent"),rowspan:m},b);g.isMain&&(E.appendChild(this.heightEl=s.createElement("div",null,E.childNodes)),i=E),d.appendChild(E)}}this.expanderIconEl=d.querySelector(".fc-expander-space .fc-icon"),f.publiclyTrigger("resourceRender",[{resource:new a["default"](h,e),el:i,view:f}])},t.prototype.unrenderRow=function(){this.tr.innerHTML=""},t.prototype.updateExpanderIcon=function(e,t){var r=this.expanderIconEl,n=r.parentElement;r&&(e?(n.addEventListener("click",this.onExpanderClick),n.classList.add("fc-expander"),i.updateExpanderIcon(r,t,this.isRtl)):(n.removeEventListener("click",this.onExpanderClick),n.classList.remove("fc-expander"),i.clearExpanderIcon(r)))},t}(s.Component);t["default"]=u},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(60),i=r(23),a=function(e){function t(t,r,n){var a=e.call(this,t)||this;return a._renderCells=o.memoizeRendering(a.renderCells,a.unrenderCells),a.layout=new i["default"](r,n,"clipped-scroll"),a.header=new s["default"](t,a.layout.headerScroller.enhancedScroll.canvas.contentEl),a.layout.bodyScroller.enhancedScroll.canvas.contentEl.appendChild(a.bodyContainerEl=o.createElement("div",{className:"fc-rows"},"<table><colgroup /><tbody /></table>")),a.bodyColGroup=a.bodyContainerEl.querySelector("colgroup"),a.bodyTbody=a.bodyContainerEl.querySelector("tbody"),a}return n.__extends(t,e),t.prototype.destroy=function(){this.header.destroy(),this.layout.destroy(),this._renderCells.unrender(),e.prototype.destroy.call(this)},t.prototype.render=function(e){this._renderCells(e.superHeaderText,e.colSpecs)},t.prototype.renderCells=function(e,t){var r=this.renderColTags(t);this.header.receiveProps({superHeaderText:e,colSpecs:t,colTags:r}),this.bodyColGroup.innerHTML=r},t.prototype.unrenderCells=function(){this.bodyColGroup.innerHTML=""},t.prototype.renderColTags=function(e){for(var t="",r=0,n=e;r<n.length;r++){var o=n[r];t+=o.isMain?'<col class="fc-main-col"/>':"<col/>"}return t},t.prototype.updateSize=function(e,t,r){this.layout.setHeight(t,r)},t}(o.Component);t["default"]=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=function(e){function t(t,r){var n=e.call(this,t)||this;return r.appendChild(n.tableEl=o.createElement("table",{className:n.theme.getClass("tableGrid")})),n}return n.__extends(t,e),t.prototype.destroy=function(){o.removeElement(this.tableEl),e.prototype.destroy.call(this)},t.prototype.render=function(e){var t=this.theme,r=e.colSpecs,n="<colgroup>"+e.colTags+"</colgroup><tbody>";e.superHeaderText&&(n+='<tr class="fc-super"><th class="'+t.getClass("widgetHeader")+'" colspan="'+r.length+'"><div class="fc-cell-content"><span class="fc-cell-text">'+o.htmlEscape(e.superHeaderText)+"</span></div></th></tr>"),n+="<tr>";for(var s=0;s<r.length;s++){var i=r[s],a=s===r.length-1;n+='<th class="'+t.getClass("widgetHeader")+'"><div><div class="fc-cell-content">'+(i.isMain?'<span class="fc-expander-space"><span class="fc-icon"></span></span>':"")+'<span class="fc-cell-text">'+o.htmlEscape(i.labelText||"")+"</span></div>"+(a?"":'<div class="fc-col-resizer"></div>')+"</div></th>"}n+="</tr>",n+="</tbody>",this.tableEl.innerHTML=n},t}(o.Component);t["default"]=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=r(6),i=function(e){function t(t,r){var n=e.call(this,t,r.el)||this;return n.buildDayRanges=o.memoize(o.buildDayRanges),n.splitter=new s.VResourceSplitter,n.slicers={},n.joiner=new a,n.timeGrid=r,n}return n.__extends(t,e),t.prototype.render=function(e){var t=this,r=this.timeGrid,s=e.dateProfile,i=e.resourceDayTable,a=this.dayRanges=this.buildDayRanges(i.dayTable,s,this.dateEnv),l=this.splitter.splitProps(e);this.slicers=o.mapHash(l,function(e,r){return t.slicers[r]||new o.TimeGridSlicer});var c=o.mapHash(this.slicers,function(e,t){return e.sliceProps(l[t],s,null,r,a)});r.allowAcrossResources=1===a.length,r.receiveProps(n.__assign({},this.joiner.joinProps(c,i),{dateProfile:s,cells:i.cells[0]}))},t.prototype.renderNowIndicator=function(e){var t=this.timeGrid,r=this.props.resourceDayTable,n=this.slicers[""].sliceNowDate(e,t,this.dayRanges),o=this.joiner.expandSegs(r,n);t.renderNowIndicator(o,e)},t.prototype.prepareHits=function(){this.offsetTracker=new o.OffsetTracker(this.timeGrid.el)},t.prototype.releaseHits=function(){this.offsetTracker.destroy()},t.prototype.queryHit=function(e,t){var r=this.offsetTracker;if(r.isWithinClipping(e,t)){var n=r.computeLeft(),o=r.computeTop(),s=this.timeGrid.positionToHit(e-n,t-o);if(s)return{component:this.timeGrid,dateSpan:{range:s.dateSpan.range,allDay:s.dateSpan.allDay,resourceId:this.props.resourceDayTable.cells[0][s.col].resource.id},dayEl:s.dayEl,rect:{left:s.relativeRect.left+n,right:s.relativeRect.right+n,top:s.relativeRect.top+o,bottom:s.relativeRect.bottom+o},layer:0}}},t}(o.DateComponent);t["default"]=i,i.prototype.isInteractable=!0;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.transformSeg=function(e,t,r){return[n.__assign({},e,{col:t.computeCol(e.col,r)})]},t}(s.VResourceJoiner)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(10);n.registerResourceSourceDef({ignoreRange:!0,parseMeta:function(e){return Array.isArray(e)?e:Array.isArray(e.resources)?e.resources:null},fetch:function(e,t){t({rawResources:e.resourceSource.meta})}})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(10);o.registerResourceSourceDef({parseMeta:function(e){return"function"==typeof e?e:"function"==typeof e.resources?e.resources:null},fetch:function(e,t,r){var o=e.calendar.dateEnv,s=e.resourceSource.meta,i={};e.range&&(i={start:o.toDate(e.range.start),end:o.toDate(e.range.end),startStr:o.formatIso(e.range.start),endStr:o.formatIso(e.range.end),timeZone:o.timeZone}),n.unpromisify(s.bind(null,i),function(e){t({rawResources:e})},r)}})},function(e,t,r){function n(e,t,r){var n,o,s,a,l=r.dateEnv,c={};return t&&(n=r.opt("startParam"),o=r.opt("endParam"),s=r.opt("timeZoneParam"),c[n]=l.formatIso(t.start),c[o]=l.formatIso(t.end),"local"!==l.timeZone&&(c[s]=l.timeZone)),a="function"==typeof e.extraParams?e.extraParams():e.extraParams||{},i.__assign(c,a),c}Object.defineProperty(t,"__esModule",{value:!0});var o=r(65),s=r(10),i=r(1);s.registerResourceSourceDef({parseMeta:function(e){if("string"==typeof e)e={url:e};else if(!e||"object"!=typeof e||!e.url)return null;return{url:e.url,method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams}},fetch:function(e,t,r){var s,i=e.resourceSource.meta,a=n(i,e.range,e.calendar);s="GET"===i.method?o.get(i.url).query(a):o(i.method,i.url).send(a),s.end(function(e,n){var o;e?r(e):(n.body?o=n.body:n.text&&(o=JSON.parse(n.text)),o?t({rawResources:o,response:n}):r({message:"Invalid JSON response",response:n}))})}})},function(e,r){e.exports=t},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(16);t["default"]=n.createPlugin({viewConfigs:{timeline:{"class":o["default"],eventResizableFromStart:!0},timelineDay:{type:"timeline",duration:{days:1}},timelineWeek:{type:"timeline",duration:{weeks:1}},timelineMonth:{type:"timeline",duration:{months:1}},timelineYear:{type:"timeline",duration:{years:1}}}})},function(e,t,r){function n(e){return e["class"]===a["default"]&&e.options.resources?o.__assign({},e,{"class":i["default"],options:o.__assign({},l,e.options)}):e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=r(0),i=r(26),a=r(16),l={resourceAreaWidth:"30%",resourcesInitiallyExpanded:!0,eventResizableFromStart:!0};t["default"]=s.createPlugin({viewSpecTransformers:[n]})},function(e,t,r){function n(e){return e["class"]===s.AgendaView&&a.isVResourceViewEnabled(e)?o.__assign({},e,{"class":i["default"]}):e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=r(0),i=r(28),a=r(6);t["default"]=s.createPlugin({viewSpecTransformers:[n]})},function(e,t,r){function n(e){return e["class"]===s.BasicView&&a.isVResourceViewEnabled(e)?o.__assign({},e,{"class":i["default"]}):e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=r(0),i=r(31),a=r(6);t["default"]=s.createPlugin({viewSpecTransformers:[n]})}])});
;/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

;