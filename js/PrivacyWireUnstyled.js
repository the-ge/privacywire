!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t,n;window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),String.prototype.formatUnicorn=String.prototype.formatUnicorn||function(){var t=this.toString();if(arguments.length){var n,o=e(arguments[0]),r="string"===o||"number"===o?Array.prototype.slice.call(arguments):arguments[0];for(n in r)t=t.replace(new RegExp("\\{"+n+"\\}","gi"),r[n])}return t};var o=function(){v.classList.remove("show-banner"),v.classList.remove("show-options")},r=function(){C.necessary=!0,C.functional=!1,C.statistics=!1,C.marketing=!1,C.external_media=!1},i=function(){g.forEach((function(e){e.onclick=function(){C.necessary=!0,C.functional=!0,C.statistics=!0,C.marketing=!0,C.external_media=!0,s()}})),p.onclick=function(){r(),s()},h.onclick=function(){a()},w.onclick=function(){S.forEach((function(e){e.checked=I})),I=!I},k.onclick=function(){C.necessary=!0,C.functional=b.functional.checked,C.statistics=b.statistics.checked,C.marketing=b.marketing.checked,C.external_media=b.external_media.checked,s()},N&&N.forEach((function(e){var t=e.dataset;e.onclick=function(){b[t.consentCategory].checked=1,C[t.consentCategory]=!0,s(),e.parentElement.remove()}}))},a=function(){v.classList.remove("show-banner"),v.classList.add("show-options")},c=function(){v.classList.add("show-message"),setTimeout((function(){v.classList.remove("show-message")}),f.msgTimeout)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];C.version=f.version,window.localStorage.setItem(y,JSON.stringify(C)),o(),e||c(),u(),l()},l=function(){"function"==typeof window[f.cstFn]&&window[f.cstFn]()},u=function(){var e=document.querySelectorAll("[data-category]");0!==e.length&&e.forEach((function(e){var t=e.dataset.category,n=!1;if(t)for(var o in C)if(o===t&&!0===C[o]){n=!0;break}n?m(e):d(e)}))},d=function(e){var t=e.dataset;if(t.askConsent&&"1"!==t.askConsentRendered){var n=e.parentElement,o=t.category,r=f.cookieGroups[o],i=document.createElement("div");i.classList.add("privacywire-ask-consent"),i.classList.add("consent-category-"+o),i.innerHTML=B.innerHTML.formatUnicorn({category:r,categoryname:o}),n.insertBefore(i,e),e.dataset.askConsentRendered=1,N=document.querySelectorAll(".privacywire-consent-button")}},m=function(e){for(var t=e.dataset,n=e.parentElement,o=document.createElement(e.tagName),r=0,i=Object.keys(t);r<i.length;r++){var a=i[r];o.dataset[a]=e.dataset[a]}o.removeAttribute("data-category"),o.removeAttribute("data-ask-consent-rendered"),o.type=t.type,o.innerText=e.innerText,o.text=e.text,o.class=e.class,o.style.cssText=e.style.cssText,o.id=e.id,o.name=e.name,o.defer=e.defer,o.async=e.async,"iframe"===e.tagName.toLowerCase()&&(o.width=e.width,o.height=e.height,o.setAttribute("frameborder",e.getAttribute("frameborder"))),t.src&&(o.src=t.src),t.srcset&&(o.srcset=t.srcset),n.insertBefore(o,e),n.removeChild(e)},f={};f.dnt=Boolean(parseInt(PrivacyWireSettings.dnt)),f.version=parseInt(PrivacyWireSettings.version),f.cstFn=PrivacyWireSettings.customFunction,f.msgTimeout=null!==(t=parseInt(PrivacyWireSettings.messageTimeout))&&void 0!==t?t:1500,f.cookieGroups=null!==(n=PrivacyWireSettings.cookieGroups)&&void 0!==n?n:{};var y="privacywire",v=document.querySelector(".privacywire-wrapper"),g=v.querySelectorAll(".allow-all"),p=v.querySelector(".allow-necessary"),h=v.querySelector(".choose"),k=v.querySelector(".save"),w=v.querySelector(".toggle"),S=v.querySelectorAll(".optional"),b={};b.functional=v.querySelector("#functional"),b.statistics=v.querySelector("#statistics"),b.marketing=v.querySelector("#marketing"),b.external_media=v.querySelector("#external_media");var x,q,L,E,A,T,_,I=!0,B=document.querySelector(".privacywire-ask-consent-blueprint"),N=document.querySelectorAll(".privacywire-consent-button"),C={},P=window.localStorage.getItem(y)?JSON.parse(window.localStorage.getItem(y)):"";P?parseInt(P.version)!==f.version?(window.localStorage.removeItem(y),r()):(C.version=null!==(x=parseInt(P.version))&&void 0!==x?x:0,C.necessary=null===(q=Boolean(P.necessary))||void 0===q||q,C.functional=null!==(L=Boolean(P.functional))&&void 0!==L&&L,C.statistics=null!==(E=Boolean(P.statistics))&&void 0!==E&&E,C.marketing=null!==(A=Boolean(P.marketing))&&void 0!==A&&A,C.external_media=null!==(T=Boolean(P.external_media))&&void 0!==T&&T,b.functional.checked=C.functional,b.statistics.checked=C.statistics,b.marketing.checked=C.marketing,b.external_media.checked=C.external_media):(C.version=0,r(),!0===f.dnt&&"1"===navigator.doNotTrack&&(C.version=1,s(!0)));C.version>0&&C.version===f.version||v.classList.add("show-banner"),u(),i(),(_=document.querySelectorAll(".privacywire-show-options")).length&&_.forEach((function(e){e.onclick=function(e){e.preventDefault(),a(),i()}}))}();