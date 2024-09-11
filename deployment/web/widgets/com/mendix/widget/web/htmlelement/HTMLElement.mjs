import{useState as e,createElement as t,Fragment as n}from"react";
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function a(e,t,n){return a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a},a.apply(null,arguments)}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=Object.hasOwnProperty,u=Object.setPrototypeOf,s=Object.isFrozen,m=Object.getPrototypeOf,f=Object.getOwnPropertyDescriptor,p=Object.freeze,d=Object.seal,g=Object.create,h="undefined"!=typeof Reflect&&Reflect,y=h.apply,v=h.construct;y||(y=function(e,t,n){return e.apply(t,n)}),p||(p=function(e){return e}),d||(d=function(e){return e}),v||(v=function(e,t){return a(e,i(t))});var b,T=M(Array.prototype.forEach),N=M(Array.prototype.pop),E=M(Array.prototype.push),A=M(String.prototype.toLowerCase),w=M(String.prototype.toString),S=M(String.prototype.match),_=M(String.prototype.replace),x=M(String.prototype.indexOf),L=M(String.prototype.trim),C=M(RegExp.prototype.test),k=(b=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v(b,t)});function M(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return y(e,t,r)}}function O(e,t,n){n=n||A,u&&u(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(s(t)||(t[r]=a),o=a)}e[o]=!0}return e}function R(e){var t,n=g(null);for(t in e)!0===y(c,e,[t])&&(n[t]=e[t]);return n}function D(e,t){for(;null!==e;){var n=f(e,t);if(n){if(n.get)return M(n.get);if("function"==typeof n.value)return M(n.value)}e=m(e)}return function(e){return console.warn("fallback value for",e),null}}var I=p(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=p(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),F=p(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),U=p(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=p(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),P=p(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),j=p(["#text"]),B=p(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),W=p(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),G=p(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),V=p(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),q=d(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Y=d(/<%[\w\W]*|[\w\W]*%>/gm),$=d(/\${[\w\W]*}/gm),K=d(/^data-[\-\w.\u00B7-\uFFFF]/),X=d(/^aria-[\-\w]+$/),Z=d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),J=d(/^(?:\w+script|data):/i),Q=d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ee=d(/^html$/i),te=function(){return"undefined"==typeof window?null:window},ne=function(e,t){if("object"!==r(e)||"function"!=typeof e.createPolicy)return null;var n=null,o="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(o)&&(n=t.currentScript.getAttribute(o));var a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};var re=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te(),n=function(t){return e(t)};if(n.version="2.4.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var o=t.document,a=t.document,l=t.DocumentFragment,c=t.HTMLTemplateElement,u=t.Node,s=t.Element,m=t.NodeFilter,f=t.NamedNodeMap,d=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,g=t.HTMLFormElement,h=t.DOMParser,y=t.trustedTypes,v=s.prototype,b=D(v,"cloneNode"),M=D(v,"nextSibling"),re=D(v,"childNodes"),oe=D(v,"parentNode");if("function"==typeof c){var ae=a.createElement("template");ae.content&&ae.content.ownerDocument&&(a=ae.content.ownerDocument)}var ie=ne(y,o),le=ie?ie.createHTML(""):"",ce=a,ue=ce.implementation,se=ce.createNodeIterator,me=ce.createDocumentFragment,fe=ce.getElementsByTagName,pe=o.importNode,de={};try{de=R(a).documentMode?a.documentMode:{}}catch(e){}var ge={};n.isSupported="function"==typeof oe&&ue&&void 0!==ue.createHTMLDocument&&9!==de;var he,ye,ve=q,be=Y,Te=$,Ne=K,Ee=X,Ae=J,we=Q,Se=Z,_e=null,xe=O({},[].concat(i(I),i(H),i(F),i(z),i(j))),Le=null,Ce=O({},[].concat(i(B),i(W),i(G),i(V))),ke=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,Oe=null,Re=!0,De=!0,Ie=!1,He=!0,Fe=!1,Ue=!1,ze=!1,Pe=!1,je=!1,Be=!1,We=!1,Ge=!0,Ve=!1,qe=!0,Ye=!1,$e={},Ke=null,Xe=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ze=null,Je=O({},["audio","video","img","source","image","track"]),Qe=null,et=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",rt="http://www.w3.org/1999/xhtml",ot=rt,at=!1,it=null,lt=O({},[tt,nt,rt],w),ct=["application/xhtml+xml","text/html"],ut=null,st=a.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},ft=function(e){ut&&ut===e||(e&&"object"===r(e)||(e={}),e=R(e),he=he=-1===ct.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===he?w:A,_e="ALLOWED_TAGS"in e?O({},e.ALLOWED_TAGS,ye):xe,Le="ALLOWED_ATTR"in e?O({},e.ALLOWED_ATTR,ye):Ce,it="ALLOWED_NAMESPACES"in e?O({},e.ALLOWED_NAMESPACES,w):lt,Qe="ADD_URI_SAFE_ATTR"in e?O(R(et),e.ADD_URI_SAFE_ATTR,ye):et,Ze="ADD_DATA_URI_TAGS"in e?O(R(Je),e.ADD_DATA_URI_TAGS,ye):Je,Ke="FORBID_CONTENTS"in e?O({},e.FORBID_CONTENTS,ye):Xe,Me="FORBID_TAGS"in e?O({},e.FORBID_TAGS,ye):{},Oe="FORBID_ATTR"in e?O({},e.FORBID_ATTR,ye):{},$e="USE_PROFILES"in e&&e.USE_PROFILES,Re=!1!==e.ALLOW_ARIA_ATTR,De=!1!==e.ALLOW_DATA_ATTR,Ie=e.ALLOW_UNKNOWN_PROTOCOLS||!1,He=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Fe=e.SAFE_FOR_TEMPLATES||!1,Ue=e.WHOLE_DOCUMENT||!1,je=e.RETURN_DOM||!1,Be=e.RETURN_DOM_FRAGMENT||!1,We=e.RETURN_TRUSTED_TYPE||!1,Pe=e.FORCE_BODY||!1,Ge=!1!==e.SANITIZE_DOM,Ve=e.SANITIZE_NAMED_PROPS||!1,qe=!1!==e.KEEP_CONTENT,Ye=e.IN_PLACE||!1,Se=e.ALLOWED_URI_REGEXP||Se,ot=e.NAMESPACE||rt,ke=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&mt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ke.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&mt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ke.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ke.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(De=!1),Be&&(je=!0),$e&&(_e=O({},i(j)),Le=[],!0===$e.html&&(O(_e,I),O(Le,B)),!0===$e.svg&&(O(_e,H),O(Le,W),O(Le,V)),!0===$e.svgFilters&&(O(_e,F),O(Le,W),O(Le,V)),!0===$e.mathMl&&(O(_e,z),O(Le,G),O(Le,V))),e.ADD_TAGS&&(_e===xe&&(_e=R(_e)),O(_e,e.ADD_TAGS,ye)),e.ADD_ATTR&&(Le===Ce&&(Le=R(Le)),O(Le,e.ADD_ATTR,ye)),e.ADD_URI_SAFE_ATTR&&O(Qe,e.ADD_URI_SAFE_ATTR,ye),e.FORBID_CONTENTS&&(Ke===Xe&&(Ke=R(Ke)),O(Ke,e.FORBID_CONTENTS,ye)),qe&&(_e["#text"]=!0),Ue&&O(_e,["html","head","body"]),_e.table&&(O(_e,["tbody"]),delete Me.tbody),p&&p(e),ut=e)},pt=O({},["mi","mo","mn","ms","mtext"]),dt=O({},["foreignobject","desc","title","annotation-xml"]),gt=O({},["title","style","font","a","script"]),ht=O({},H);O(ht,F),O(ht,U);var yt=O({},z);O(yt,P);var vt=function(e){E(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},bt=function(e,t){try{E(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){E(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Le[e])if(je||Be)try{vt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Tt=function(e){var t,n;if(Pe)e="<remove></remove>"+e;else{var r=S(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===he&&ot===rt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(ot===rt)try{t=(new h).parseFromString(o,he)}catch(e){}if(!t||!t.documentElement){t=ue.createDocument(ot,"template",null);try{t.documentElement.innerHTML=at?le:o}catch(e){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),ot===rt?fe.call(t,Ue?"html":"body")[0]:Ue?t.documentElement:i},Nt=function(e){return se.call(e.ownerDocument||e,e,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT,null,!1)},Et=function(e){return"object"===r(u)?e instanceof u:e&&"object"===r(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},At=function(e,t,r){ge[e]&&T(ge[e],(function(e){e.call(n,t,r,ut)}))},wt=function(e){var t,r;if(At("beforeSanitizeElements",e,null),(r=e)instanceof g&&("string"!=typeof r.nodeName||"string"!=typeof r.textContent||"function"!=typeof r.removeChild||!(r.attributes instanceof d)||"function"!=typeof r.removeAttribute||"function"!=typeof r.setAttribute||"string"!=typeof r.namespaceURI||"function"!=typeof r.insertBefore||"function"!=typeof r.hasChildNodes))return vt(e),!0;if(C(/[\u0080-\uFFFF]/,e.nodeName))return vt(e),!0;var o=ye(e.nodeName);if(At("uponSanitizeElement",e,{tagName:o,allowedTags:_e}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&C(/<[/\w]/g,e.innerHTML)&&C(/<[/\w]/g,e.textContent))return vt(e),!0;if("select"===o&&C(/<template/i,e.innerHTML))return vt(e),!0;if(!_e[o]||Me[o]){if(!Me[o]&&_t(o)){if(ke.tagNameCheck instanceof RegExp&&C(ke.tagNameCheck,o))return!1;if(ke.tagNameCheck instanceof Function&&ke.tagNameCheck(o))return!1}if(qe&&!Ke[o]){var a=oe(e)||e.parentNode,i=re(e)||e.childNodes;if(i&&a)for(var l=i.length-1;l>=0;--l)a.insertBefore(b(i[l],!0),M(e))}return vt(e),!0}return e instanceof s&&!function(e){var t=oe(e);t&&t.tagName||(t={namespaceURI:ot,tagName:"template"});var n=A(e.tagName),r=A(t.tagName);return!!it[e.namespaceURI]&&(e.namespaceURI===nt?t.namespaceURI===rt?"svg"===n:t.namespaceURI===tt?"svg"===n&&("annotation-xml"===r||pt[r]):Boolean(ht[n]):e.namespaceURI===tt?t.namespaceURI===rt?"math"===n:t.namespaceURI===nt?"math"===n&&dt[r]:Boolean(yt[n]):e.namespaceURI===rt?!(t.namespaceURI===nt&&!dt[r])&&!(t.namespaceURI===tt&&!pt[r])&&!yt[n]&&(gt[n]||!ht[n]):!("application/xhtml+xml"!==he||!it[e.namespaceURI]))}(e)?(vt(e),!0):"noscript"!==o&&"noembed"!==o||!C(/<\/no(script|embed)/i,e.innerHTML)?(Fe&&3===e.nodeType&&(t=e.textContent,t=_(t,ve," "),t=_(t,be," "),t=_(t,Te," "),e.textContent!==t&&(E(n.removed,{element:e.cloneNode()}),e.textContent=t)),At("afterSanitizeElements",e,null),!1):(vt(e),!0)},St=function(e,t,n){if(Ge&&("id"===t||"name"===t)&&(n in a||n in st))return!1;if(De&&!Oe[t]&&C(Ne,t));else if(Re&&C(Ee,t));else if(!Le[t]||Oe[t]){if(!(_t(e)&&(ke.tagNameCheck instanceof RegExp&&C(ke.tagNameCheck,e)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(e))&&(ke.attributeNameCheck instanceof RegExp&&C(ke.attributeNameCheck,t)||ke.attributeNameCheck instanceof Function&&ke.attributeNameCheck(t))||"is"===t&&ke.allowCustomizedBuiltInElements&&(ke.tagNameCheck instanceof RegExp&&C(ke.tagNameCheck,n)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))))return!1}else if(Qe[t]);else if(C(Se,_(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==x(n,"data:")||!Ze[e]){if(Ie&&!C(Ae,_(n,we,"")));else if(n)return!1}else;return!0},_t=function(e){return e.indexOf("-")>0},xt=function(e){var t,o,a,i;At("beforeSanitizeAttributes",e,null);var l=e.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Le};for(i=l.length;i--;){var u=t=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?t.value:L(t.value),a=ye(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,At("uponSanitizeAttribute",e,c),o=c.attrValue,!c.forceKeepAttr&&(bt(s,e),c.keepAttr))if(He||!C(/\/>/i,o)){Fe&&(o=_(o,ve," "),o=_(o,be," "),o=_(o,Te," "));var f=ye(e.nodeName);if(St(f,a,o)){if(!Ve||"id"!==a&&"name"!==a||(bt(s,e),o="user-content-"+o),ie&&"object"===r(y)&&"function"==typeof y.getAttributeType)if(m);else switch(y.getAttributeType(f,a)){case"TrustedHTML":o=ie.createHTML(o);break;case"TrustedScriptURL":o=ie.createScriptURL(o)}try{m?e.setAttributeNS(m,s,o):e.setAttribute(s,o),N(n.removed)}catch(e){}}}else bt(s,e)}At("afterSanitizeAttributes",e,null)}},Lt=function e(t){var n,r=Nt(t);for(At("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)At("uponSanitizeShadowNode",n,null),wt(n)||(n.content instanceof l&&e(n.content),xt(n));At("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var a,i,c,s,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((at=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Et(e)){if("function"!=typeof e.toString)throw k("toString is not a function");if("string"!=typeof(e=e.toString()))throw k("dirty is not a string, aborting")}if(!n.isSupported){if("object"===r(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Et(e))return t.toStaticHTML(e.outerHTML)}return e}if(ze||ft(f),n.removed=[],"string"==typeof e&&(Ye=!1),Ye){if(e.nodeName){var p=ye(e.nodeName);if(!_e[p]||Me[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof u)1===(i=(a=Tt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?a=i:a.appendChild(i);else{if(!je&&!Fe&&!Ue&&-1===e.indexOf("<"))return ie&&We?ie.createHTML(e):e;if(!(a=Tt(e)))return je?null:We?le:""}a&&Pe&&vt(a.firstChild);for(var d=Nt(Ye?e:a);c=d.nextNode();)3===c.nodeType&&c===s||wt(c)||(c.content instanceof l&&Lt(c.content),xt(c),s=c);if(s=null,Ye)return e;if(je){if(Be)for(m=me.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return(Le.shadowroot||Le.shadowrootmod)&&(m=pe.call(o,m,!0)),m}var g=Ue?a.outerHTML:a.innerHTML;return Ue&&_e["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&C(ee,a.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+g),Fe&&(g=_(g,ve," "),g=_(g,be," "),g=_(g,Te," ")),ie&&We?ie.createHTML(g):g},n.setConfig=function(e){ft(e),ze=!0},n.clearConfig=function(){ut=null,ze=!1},n.isValidAttribute=function(e,t,n){ut||ft({});var r=ye(e),o=ye(t);return St(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(ge[e]=ge[e]||[],E(ge[e],t))},n.removeHook=function(e){if(ge[e])return N(ge[e])},n.removeHooks=function(e){ge[e]&&(ge[e]=[])},n.removeAllHooks=function(){ge={}},n}();const oe=/(?<prop>[^:]+):(?<value>.+)/s;function ae(e){if(e.startsWith("--"))return e;const t=e.replace(/(-.)/g,(e=>e[1].toUpperCase()));return e.startsWith("-ms")?t[0].toLowerCase()+t.slice(1):t}function ie(e){return t=>[t.eventName,n=>{var r;t.eventPreventDefault&&n.preventDefault(),t.eventStopPropagation&&n.stopPropagation();const o=e?null===(r=t.eventActionRepeat)||void 0===r?void 0:r.get(e):t.eventAction;o&&o.canExecute&&o.execute()}]}function le(e){return t=>{var n,r;const o=t.attributeName;let a;return a=e?null===(n="template"===t.attributeValueType?t.attributeValueTemplateRepeat:t.attributeValueExpressionRepeat)||void 0===n?void 0:n.get(e).value:null===(r="template"===t.attributeValueType?t.attributeValueTemplate:t.attributeValueExpression)||void 0===r?void 0:r.value,[o,null!=a?a:""]}}function ce(e,t,n,r){var o;const a=Object.fromEntries(t.map((t=>{const[n,r]=e(t);switch(n){case"style":return["style",(o=r,Object.fromEntries(o.split(";").filter((e=>e.length)).map((e=>{var t,n;const{prop:r="",value:o=""}=null!==(n=null===(t=oe.exec(e.trim()))||void 0===t?void 0:t.groups)&&void 0!==n?n:{};return[r.trim(),o.trim()]})).filter((e=>2===e.length&&e[0].length&&e[1].length)).map((e=>{let[t,n]=e;return[ae(t),n]}))))];case"class":return["className",r];default:return[n,r]}var o})));return a.style={...r,...a.style},a.className="widget-html-element ".concat(null!=n?n:""," ").concat(null!==(o=a.className)&&void 0!==o?o:"").trim(),a}function ue(e,t){var n,r;if("innerHTML"===e.tagContentMode)return t?null===(r=e.tagContentRepeatHTML)||void 0===r?void 0:r.get(t).value:null===(n=e.tagContentHTML)||void 0===n?void 0:n.value}function se(){const e=re(window);return t=>e.sanitize(t)}function me(n){const r=function(){const[t]=e(se);return t}(),o=n.tagName,{unsafeHTML:a}=n;return void 0!==a?t(o,{...n.attributes,dangerouslySetInnerHTML:{__html:r(a)}}):t(o,{...n.attributes},n.children)}function fe(e){var r;const o=function(e,t){return"__customTag__"===e?t:e}(e.tagName,e.tagNameCustom),a=e.tagUseRepeat?null===(r=e.tagContentRepeatDataSource)||void 0===r?void 0:r.items:[void 0];return(null==a?void 0:a.length)?t(n,null,a.map((n=>{return t(me,{key:null==n?void 0:n.id,tagName:o,attributes:{...ce(le(n),e.attributes,e.class,e.style),...(r=ie(n),a=e.events,Object.fromEntries(a.map((e=>r(e)))))},unsafeHTML:ue(e,n)},function(e,t){var n;if("container"===e.tagContentMode)return t?null===(n=e.tagContentRepeatContainer)||void 0===n?void 0:n.get(t):e.tagContentContainer}(e,n));var r,a}))):null}export{fe as HTMLElement};
