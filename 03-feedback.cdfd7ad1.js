!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var i,o,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function w(e){return c=e,f=setTimeout(O,t),d?g(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=b();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?g(e):(i=o=void 0,u)}function T(){var e=b(),n=S(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return w(l);if(s)return f=setTimeout(O,t),g(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:h(b())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};var w=document.querySelector(".feedback-form"),S=w.querySelector('input[name="email"]'),O=w.querySelector('textarea[name="message"]');w.addEventListener("input",e(t)((function(){var e={email:S.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(S.value=e.email,O.value=e.message)})),w.addEventListener("submit",(function(e){e.preventDefault();var t={email:S.value,message:O.value};console.log(t),localStorage.removeItem("feedback-form-state"),S.value="",O.value=""}))}();
//# sourceMappingURL=03-feedback.cdfd7ad1.js.map
