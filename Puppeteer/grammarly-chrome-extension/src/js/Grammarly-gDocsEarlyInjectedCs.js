!function(){function e(e){return Boolean(e.className)}function t(e){return!Boolean(e.className)}new Set(["version","title","lang","translate","dir","dataset","hidden","tabIndex","accessKey","draggable","spellcheck","contentEditable","isContentEditable","offsetParent","offsetTop","offsetLeft","offsetWidth","offsetHeight","style","innerText","outerText","onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onscroll","onseeked","onseeking","onselect","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","onvolumechange","onwaiting","onwheel","ongotpointercapture","onlostpointercapture","onpointerdown","onpointermove","onpointerup","onpointercancel","onpointerover","onpointerout","onpointerenter","onpointerleave","click","focus","blur","onauxclick","nonce","namespaceURI","prefix","localName","tagName","id","className","classList","slot","attributes","shadowRoot","assignedSlot","innerHTML","outerHTML","scrollTop","scrollLeft","scrollWidth","scrollHeight","clientTop","clientLeft","clientWidth","clientHeight","onbeforecopy","onbeforecut","onbeforepaste","oncopy","oncut","onpaste","onsearch","onselectstart","previousElementSibling","nextElementSibling","children","firstElementChild","lastElementChild","childElementCount","onwebkitfullscreenchange","onwebkitfullscreenerror","setPointerCapture","releasePointerCapture","hasPointerCapture","hasAttributes","getAttributeNames","getAttribute","getAttributeNS","setAttribute","setAttributeNS","removeAttribute","removeAttributeNS","hasAttribute","hasAttributeNS","getAttributeNode","getAttributeNodeNS","setAttributeNode","setAttributeNodeNS","removeAttributeNode","closest","matches","webkitMatchesSelector","attachShadow","getElementsByTagName","getElementsByTagNameNS","getElementsByClassName","insertAdjacentElement","insertAdjacentText","insertAdjacentHTML","requestPointerLock","getClientRects","getBoundingClientRect","scrollIntoView","scrollIntoViewIfNeeded","createShadowRoot","getDestinationInsertionPoints","animate","remove","querySelector","querySelectorAll","webkitRequestFullScreen","webkitRequestFullscreen","scroll","scrollTo","scrollBy","before","after","replaceWith","prepend","append","ELEMENT_NODE","ATTRIBUTE_NODE","TEXT_NODE","CDATA_SECTION_NODE","ENTITY_REFERENCE_NODE","ENTITY_NODE","PROCESSING_INSTRUCTION_NODE","COMMENT_NODE","DOCUMENT_NODE","DOCUMENT_TYPE_NODE","DOCUMENT_FRAGMENT_NODE","NOTATION_NODE","DOCUMENT_POSITION_DISCONNECTED","DOCUMENT_POSITION_PRECEDING","DOCUMENT_POSITION_FOLLOWING","DOCUMENT_POSITION_CONTAINS","DOCUMENT_POSITION_CONTAINED_BY","DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC","nodeType","nodeName","baseURI","isConnected","ownerDocument","parentNode","parentElement","childNodes","firstChild","lastChild","previousSibling","nextSibling","nodeValue","textContent","hasChildNodes","getRootNode","normalize","cloneNode","isEqualNode","isSameNode","compareDocumentPosition","contains","lookupPrefix","lookupNamespaceURI","isDefaultNamespace","insertBefore","appendChild","replaceChild","removeChild","addEventListener","removeEventListener","dispatchEvent"]);const n=[47,91,61439,61438,59651,26,30,59649,3,59653,59652,16,17,93,47];[n,[...n,103]].map((e=>e.map((e=>String.fromCharCode(e))).join(""))),[[47,91,28,3,60419,59651,26,25,31,92,110,18,59653,16,93,47,103],[47,91,28,3,59653,60419,59651,26,25,31,92,110,18,16,93,47,103],[47,91,28,3,59653,59651,26,25,31,92,110,18,16,93,47,103]].map((e=>e.map((e=>String.fromCharCode(e))).join("")));const o={logError(){},logException(){},log(){}};function r(e,t,n){return{call(o,r,i,s){var a;const c=s(i),l=null===(a=t.postFn)||void 0===a?void 0:a[r];if(l)try{l(o,e,i,c)}catch(e){n.logException(`proxy.call.${String(r)}`,e)}return c},set(o,r,i,s){var a;const c=null===(a=t.overrideSet)||void 0===a?void 0:a[r];if(c)try{const t=c(o,e,i);if(void 0!==t)return s(t)}catch(e){n.logException(`proxy.set.${String(r)}`,e)}return s(i)}}}function i(e,t=[]){function n(e,o,r){for(let i=r;i<t.length;i++){const r=t[i].get;if(r)return r(e,o,(()=>n(e,o,i+1)))}return Reflect.get(e,o)}function o(e,n,r,i,s){for(let a=s;a<t.length;a++){const s=t[a].call;if(s)return s(e,n,i,(t=>o(e,n,r,t,a+1)))}return r.apply(e,i)}function r(e,n,o,i){for(let s=i;s<t.length;s++){const i=t[s].set;if(i)return i(e,n,o,(t=>r(e,n,t,s+1)))}return Reflect.set(e,n,o)}const i=new Map,s=new Proxy(e,{get(e,t,r){const s=n(e,t,0);let a=i.get(t);return void 0!==a&&a[0]===s?a[1]:"function"==typeof s?(a=[s,(...n)=>o(e,t,s,n,0)],i.set(t,a),a[1]):s},set:(e,t,n,o)=>r(e,t,n,0)});return{proxy:s,addMidleware(e){t.push(e)}}}function s(e=new Map){return{get size(){return e.size},getMetrics(t,n){var o;return null===(o=e.get(t))||void 0===o?void 0:o.get(n)},getFontMetrics(t){const n=function(t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}(t);return{get size(){return n.size},getMetrics:e=>n.get(e),addMetrics(e,t){n.set(e,t)}}},toJSON:()=>Object.fromEntries(a(e,(e=>{var t,n,o,r;return{height:[null!==(n=null===(t=e.get(l))||void 0===t?void 0:t.chunk.actualBoundingBoxAscent)&&void 0!==n?n:0,null!==(r=null===(o=e.get(l))||void 0===o?void 0:o.chunk.actualBoundingBoxDescent)&&void 0!==r?r:0],widths:Object.fromEntries(a(e,(({chunk:e})=>e.width)))}})))}}function a(e,t=(e=>e)){return[...e.entries()].sort((([e],[t])=>e<t?-1:t<e?1:0)).map((([e,n])=>[e,t(n)]))}function c(e){return{metricsMap:s(e)}}const l="M",u=" ";const d={overrideSet:{font:(e,t,n)=>(t.fontStyle=function(e){const t=/^(?:([\d\w]+) )?(?:(\w+) )?([\d.]+)px (?:['"])?([\w -]+)(?:['"])?$/.exec(e);if(t){const[e,n,o,r,i]=t;let s="400",a="normal";return n&&(isNaN(parseInt(n,10))?"italic"===n?(a="italic",s=isNaN(parseInt(o,10))?"bold"===o?"700":"400":o):s="bold"===n?"700":"400":(s=n,a=o||a)),`${s} ${a} ${parseFloat(r).toFixed(4)}px "${i}"`}return e}(n),n)},postFn:{measureText(e,t,[n],o){if(!t.fontStyle)return;const r=t.metricsMap.getFontMetrics(t.fontStyle);if(!r.size){const t=e.measureText(l),n=e.measureText("À"),o=e.measureText("g");r.addMetrics(l,{chunk:g(t,n,o),charShifts:[]});const i=e.measureText(u);r.addMetrics(u,{chunk:g(i),charShifts:[]})}const i=8237===n.charCodeAt(0),s=8236===n.charCodeAt(n.length-1),a=n.substring(i?1:0,n.length-(s?1:0));if(a===l)return;const c=[];for(let t=1;t<a.length;t++){const n=a.slice(0,t),i=r.getMetrics(n);if(i)c.push(i.chunk);else{if(a.length-t>30){let e=c.length>0?c[c.length-1].width:0,n=o.width-e;for(;t<a.length;){const r=n/(a.length-t+1);e+=r,n-=r,c.push({...o,width:e}),t++}break}const i=g(e.measureText(n));r.addMetrics(n,{chunk:i,charShifts:[...c]}),c.push(i)}}r.addMetrics(a,{chunk:o,charShifts:c})}}};function g(e,t=e,n=t){return{width:e.width,actualBoundingBoxLeft:e.actualBoundingBoxLeft,actualBoundingBoxRight:e.actualBoundingBoxRight,actualBoundingBoxAscent:t.actualBoundingBoxAscent,actualBoundingBoxDescent:n.actualBoundingBoxDescent}}const p=[],h=[];function f(e){for(const t of p){const n=e(t.canvas,t.originalContext);n&&t.proxy.addMidleware(n)}h.push(e)}const m=c();function N(){return p.map((e=>e.canvas))}!function(){const n=document.documentElement.dataset.grGdcConnId||(document.documentElement.dataset.grGdcConnId=`${Date.now()}-${Math.random()}`);self[(e=>`GR_GDEI_${e}`)(n)]={addMiddleware:f,textMeasuringState:m,getPatchedCanvases:N},function(e){const t=self.HTMLCanvasElement.prototype.getContext;self.HTMLCanvasElement.prototype.getContext=function(...n){var o;const r=t.call(this,...n);try{const[t]=n;if("2d"===t&&null!==(i=r)&&void 0!==i.getTransform&&i.getTransform().is2D)return null!==(o=e(this,r))&&void 0!==o?o:r}catch(e){}var i;return r}}(((n,s)=>{const a=h.map((e=>e(n,s))).filter((e=>Boolean(e)));if(e(n)){const{middleware:e}=(l=e=>{},{middleware:{get(e,t,n){const o=n();return"function"!=typeof o&&l({type:"get",prop:String(t),result:o}),o},call(e,t,n,o){const r=o(n);return l({type:"call",prop:String(t),args:n,result:r}),r},set:(e,t,n,o)=>(l({type:"set",prop:String(t),args:[n]}),o(n))}});a.push(e)}var l;if(t(n)){const{middleware:e}=function({state:e=c(),options:t}){return{state:e,middleware:r(e,d,t)}}({state:m,options:o});a.push(e)}const u=i(s,a);return p.push({canvas:n,originalContext:s,proxy:u}),u.proxy}))}()}();