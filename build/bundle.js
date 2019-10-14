!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(4)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(3)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r,a={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function i(e,t){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],s=t.base?o[0]+t.base:o[0],i={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(i):n.push(r[s]={id:s,parts:[i]})}return n}function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(h(r.parts[s],t))}else{for(var i=[];s<r.parts.length;s++)i.push(h(r.parts[s],t));a[r.id]={id:r.id,refs:1,parts:i}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var a=s(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a&&e.setAttribute("media",a),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function h(e,t){var n,r,a;if(t.singleton){var o=v++;n=m||(m=c(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=i(e,t);return u(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o],c=a[s.id];c&&(c.refs--,r.push(c))}e&&u(i(e,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete a[d.id]}}}}},function(e,t){var n=document.querySelector("form.registration"),r=document.querySelector(".modal__close-button"),a=document.querySelector(".open-registration-modal"),o=document.querySelector(".registration__button"),s=document.querySelector(".form-modal"),i={},u={};a.onclick=function(e){e.preventDefault(),s.classList.remove("hidden"),o.onclick=function(e){e.preventDefault()}},r.onclick=function(e){e.preventDefault(),n.reset(),s.classList.add("hidden")},passwordRules=[{status:null,regExp:/^.{6,32}$/},{status:null,regExp:/(?=.*[a-z])(?=.*[A-Z])/},{status:null,regExp:/[0-9]/}];var c=document.querySelectorAll(".password-hints__item");function l(e){var t=e.target.value;passwordRules.forEach((function(e,n){var r=e.status,a=e.regExp,o=t.match(a);r||(r=!!o),r&&(o?(c[n].classList.add("password-hints__item--success"),c[n].classList.remove("password-hints__item--error")):(c[n].classList.add("password-hints__item--error"),c[n].classList.remove("password-hints__item--success"),r=!1)),passwordRules[n].status=r}))}function d(e){var t,r=!0,c=e.target,l=function(e,t){var n=/^[0-9a-zA-Z-;]+$/,r=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,a=["Email должен иметь вид example@eample.com","Никнейм должен содержать не менее 3 символов","Никнейм должен содержать не более 40 символов","Никнейм содержит некорректные символы","Никнейм должен начинаться с буквы","Пароль не должен совпадать с адрессом почты","Пароль не должен совпадать с никнеймом","Пароли не совпадают","Примите условия пользовательского соглашения"],o={email:function(){return!r.test(u.email)&&a[0]},nickname:function(){return u.nickname.length<3?a[1]:u.nickname.length>40?a[2]:n.test(u.nickname)?!!/^[^a-zA-Z]/.test(u.nickname)&&a[4]:a[3]+" [".concat(u.nickname.match(/[^0-9a-zA-Z-;]/).join(", "),"]")},password:function(){return u.password===u.email?a[5]:u.password===u.nickname?a[6]:void 0},"password-repeated":function(){if(u["password-repeated"]!==u.password)return a[7]},"user-agreement":function(){if(!u["user-agreement"])return a[8]}};"checkbox"==e.type||"radio"==e.type?e.checked?u[e.name]=!0:u[e.name]=!1:u[e.name]=t;return o[e.name](u[e.name])}(c,e.target.value);for(var f in l?(i[c.name]=!1,function(e,t){e.classList.add("error"),e.parentNode.querySelector(".form-error").innerText=t}(e.target,l),e.target.addEventListener("input",d)):(i[c.name]=!0,(t=e.target).classList.remove("error"),t.parentNode.querySelector(".form-error").innerText="",e.target.removeEventListener("input",d)),i)r&=i[f]||!1;if(!r)return o.classList.add("disabled"),o.onclick=function(e){return e.preventDefault()},!1;o.classList.remove("disabled"),o.onclick=null,n.onsubmit=function(e){e.preventDefault(),console.log(JSON.stringify(u)),a.onclick=function(e){return e.preventDefault()},a.classList.add("disabled"),s.classList.add("hidden")}}Array.from(n.elements).forEach((function(e){"button"!=e.tagName.toLowerCase()&&(i[e.name]=!1,e.addEventListener("change",d),"password"===e.name&&e.addEventListener("input",l))}))}]);
//# sourceMappingURL=bundle.js.map