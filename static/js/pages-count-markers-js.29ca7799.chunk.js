(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[18],{103:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(82),c=e(93),u=e(94),o=e(83),a=Object(u.d)((function(n,t){n.children;var e=Object(c.a)(n,["children"]),u=new o.FeatureGroup([],e);return{instance:u,context:Object(r.a)(Object(r.a)({},t),{},{layerContainer:u,overlayContainer:u})}}))},116:function(n,t,e){n.exports={LeafletMarkerIcon:"count-markers_LeafletMarkerIcon__CZlSf",animation:"count-markers_animation__33OR8","border-pulse":"count-markers_border-pulse__3xScd"}},46:function(n,t,e){"use strict";e.r(t);var r=e(82),c=e(9),u=e(0),o=e(103),a=e(99),i=e(98),f=e(133),s=e(97),l=e(83),b=e.n(l),p=e(116),d=e.n(p),O=e(92),j=e(1),v=[52.22977,21.01178],m=[[52.22881144379907,21.012790203094486],[52.22972487506327,21.01490378379822],[52.2312362668144,21.015590429306034],[52.23117055519954,21.01240396499634],[52.23036886566593,21.01441025733948],[52.23031629535464,21.00946426391602],[52.23185395123992,21.009035110473636],[52.231926232898196,21.010665893554688],[52.22940287625878,21.008058786392215],[52.230999704545596,21.007372140884403],[52.23494881505829,21.007146835327152],[52.234528294213646,20.998048782348636],[52.229718303682425,20.99847793579102],[52.22364593211137,21.00967884063721],[52.226485066348154,21.023368835449222],[52.23158453674943,21.024527549743656],[52.23773466502915,21.023111343383793],[52.23639432507655,21.01714611053467],[52.23268846867547,21.018304824829105],[52.23011258481046,21.02045059204102],[52.22861429789497,21.007318496704105],[52.23245191414524,21.004357337951664],[52.2348962501706,21.00594520568848],[52.23710392185826,21.010279655456547],[52.23245191414524,21.013627052307132],[52.23163710555889,21.00847721099854],[52.23418661809385,21.006503105163578],[52.23673598420239,20.998263359069828],[52.23279360361761,20.992255210876465],[52.226853088976455,20.990538597106937],[52.22354077550519,20.994787216186523],[52.23736673260212,21.029806137084964],[52.23032943793832,21.012237668037415],[52.229136732626934,21.010800004005436],[52.22988587358971,21.011127233505253],[52.229708446609365,21.012618541717533]],g=b.a.divIcon({className:d.a.LeafletMarkerIcon,html:"<span></span>",popupAnchor:[10,-7]}),y=function(n){var t=n.map,e=Object(u.useState)(!0),r=Object(c.a)(e,2),f=r[0],s=(r[1],Object(u.useRef)(null));return Object(u.useEffect)((function(){if(t){var n=b.a.control({position:"bottomleft"});n.onAdd=function(){var n=b.a.DomUtil.create("div","description");b.a.DomEvent.disableClickPropagation(n);var t=b.a.DomUtil.create("div","markers-in-view");t.insertAdjacentHTML("beforeend","Markers in view: <strong>0</strong>");var e=b.a.DomUtil.create("div","all-markers");return e.insertAdjacentHTML("beforeend","All markers on map: <strong>0</strong>"),n.appendChild(t),n.appendChild(e),n},n.addTo(t);var e=t.getBounds(),r=function(){var n=document.querySelector(".markers-in-view strong"),r=0,c=1;t.eachLayer((function(n){n instanceof b.a.Marker&&e.contains(n.getLatLng())&&(n.bindPopup("index: <strong>".concat(c.toString(),"</strong>")),n._icon.innerHTML="<strong>".concat(c,"<strong>"),n.on("click",(function(){n._icon.classList.add("animation")})),n.on("popupclose",(function(){n._icon.classList.remove("animation")})),r++,c++)})),n.textContent=r};return document.querySelector(".all-markers strong").textContent=m.length,t.on("moveend",r),function(){n.remove(),t.off("moveend",r)}}}),[t,f]),Object(j.jsx)(o.a,{pathOptions:{color:"purple"},children:m.map((function(n,t){return Object(j.jsx)(a.a,{icon:g,ref:s,position:n,children:Object(j.jsx)(i.a,{children:t})},t)}))})};t.default=function(){var n=Object(u.useState)(null),t=Object(c.a)(n,2),e=t[0],o=t[1];return Object(j.jsxs)(f.a,{whenCreated:o,center:v,zoom:18,children:[Object(j.jsx)(s.a,Object(r.a)({},O.a)),Object(j.jsx)(y,{map:e})]})}},80:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(82);function c(n,t){var e,c=null!==(e=n.pane)&&void 0!==e?e:t.pane;return c?Object(r.a)(Object(r.a)({},n),{},{pane:c}):n}},81:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(0);function c(n,t){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=t&&n.instance.on(t),e.current=t,function(){null!=e.current&&n.instance.off(e.current),e.current=null}}),[n,t])}},82:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}e.d(t,"a",(function(){return u}))},84:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return f}));var r=e(0),c=e(85),u=e(79),o=e(81),a=e(80);function i(n,t){Object(r.useEffect)((function(){var e;return(null!==(e=t.layerContainer)&&void 0!==e?e:t.map).addLayer(n.instance),function(){var e;null==(e=t.layersControl)||e.removeLayer(n.instance),t.map.removeLayer(n.instance)}}),[t,n])}function f(n){return function(t){var e=Object(u.d)(),r=n(Object(a.a)(t,e),e);return Object(c.a)(e.map,t.attribution),Object(o.a)(r.current,t.eventHandlers),i(r.current,e),r}}},85:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(0);function c(n,t){var e=Object(r.useRef)(t);Object(r.useEffect)((function(){t!==e.current&&null!=n.attributionControl&&(null!=e.current&&n.attributionControl.removeAttribution(e.current),null!=t&&n.attributionControl.addAttribution(t)),e.current=t}),[n,t])}},87:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return f})),e.d(t,"c",(function(){return s}));var r=e(9),c=e(0),u=e.n(c),o=e(17),a=e(79);function i(n){function t(t,e){var r=n(t).current,o=r.instance,i=r.context;return Object(c.useImperativeHandle)(e,(function(){return o})),null==t.children?null:u.a.createElement(a.c,{value:i},t.children)}return Object(c.forwardRef)(t)}function f(n){function t(t,e){var u=Object(c.useState)(!1),a=Object(r.a)(u,2),i=a[0],f=a[1],s=n(t,f).current.instance;Object(c.useImperativeHandle)(e,(function(){return s})),Object(c.useEffect)((function(){i&&s.update()}),[s,i,t.children]);var l=s._contentNode;return l?Object(o.createPortal)(t.children,l):null}return Object(c.forwardRef)(t)}function s(n){function t(t,e){var r=n(t).current.instance;return Object(c.useImperativeHandle)(e,(function(){return r})),null}return Object(c.forwardRef)(t)}},88:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return f}));var r=e(0),c=e(79),u=e(81),o=e(84),a=e(80);function i(n,t){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(t.pathOptions!==e.current){var r,c=null!==(r=t.pathOptions)&&void 0!==r?r:{};n.instance.setStyle(c),e.current=c}}),[n,t])}function f(n){return function(t){var e=Object(c.d)(),r=n(Object(a.a)(t,e),e);return Object(u.a)(r.current,t.eventHandlers),Object(o.b)(r.current,e),i(r.current,t),r}}},89:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(0);function c(n,t){return null==t?function(t,e){return Object(r.useRef)(n(t,e))}:function(e,c){var u=Object(r.useRef)(n(e,c)),o=Object(r.useRef)(e),a=u.current.instance;return Object(r.useEffect)((function(){o.current!==e&&(t(a,e,o.current),o.current=e)}),[a,e,c]),u}}},90:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(0),c=e(79);function u(n){return function(t){var e=Object(c.d)(),u=n(t,e),o=u.current.instance,a=Object(r.useRef)(t.position),i=t.position;return Object(r.useEffect)((function(){return o.addTo(e.map),function(){o.remove()}}),[e.map,o]),Object(r.useEffect)((function(){null!=i&&i!==a.current&&(o.setPosition(i),a.current=i)}),[o,i]),u}}},91:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(85),c=e(79),u=e(81),o=e(80);function a(n,t){return function(e,a){var i=Object(c.d)(),f=n(Object(o.a)(e,i),i);return Object(r.a)(i.map,e.attribution),Object(u.a)(f.current,e.eventHandlers),t(f.current,i,e,a),f}}},92:function(n,t,e){"use strict";t.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},94:function(n,t,e){"use strict";e.d(t,"a",(function(){return f})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return b})),e.d(t,"e",(function(){return p}));var r=e(87),c=e(90),u=e(89),o=e(84),a=e(91),i=e(88);function f(n){var t=Object(u.a)((function(t,e){return{instance:n(t),context:e}})),e=Object(c.a)(t);return Object(r.c)(e)}function s(n,t){var e=Object(u.a)(n,t),c=Object(o.a)(e);return Object(r.a)(c)}function l(n,t){var e=Object(u.a)(n),c=Object(a.a)(e,t);return Object(r.b)(c)}function b(n,t){var e=Object(u.a)(n,t),c=Object(i.a)(e);return Object(r.a)(c)}function p(n,t){var e=Object(u.a)(n,t),c=Object(o.a)(e);return Object(r.c)(c)}},96:function(n,t,e){"use strict";function r(n,t,e){var r=t.opacity,c=t.zIndex;null!=r&&r!==e.opacity&&n.setOpacity(r),null!=c&&c!==e.zIndex&&n.setZIndex(c)}e.d(t,"a",(function(){return r}))},97:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(93),c=e(94),u=e(80),o=e(96),a=e(83),i=Object(c.e)((function(n,t){var e=n.url,c=Object(r.a)(n,["url"]);return{instance:new a.TileLayer(e,Object(u.a)(c,t)),context:t}}),o.a)},98:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e(94),c=e(83),u=e(0),o=Object(r.c)((function(n,t){return{instance:new c.Popup(n,t.overlayContainer),context:t}}),(function(n,t,e,r){var c=e.onClose,o=e.onOpen,a=e.position;Object(u.useEffect)((function(){var e=n.instance;function u(n){n.popup===e&&(e.update(),r(!0),null==o||o())}function i(n){n.popup===e&&(r(!1),null==c||c())}return t.map.on({popupopen:u,popupclose:i}),null==t.overlayContainer?(null!=a&&e.setLatLng(a),e.openOn(t.map)):t.overlayContainer.bindPopup(e),function(){t.map.off({popupopen:u,popupclose:i}),t.map.removeLayer(e)}}),[n,t,r,c,o,a])}))},99:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(82),c=e(93),u=e(94),o=e(83),a=Object(u.b)((function(n,t){var e=n.position,u=Object(c.a)(n,["position"]),a=new o.Marker(e,u);return{instance:a,context:Object(r.a)(Object(r.a)({},t),{},{overlayContainer:a})}}),(function(n,t,e){t.position!==e.position&&n.setLatLng(t.position),null!=t.icon&&t.icon!==e.icon&&n.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==e.zIndexOffset&&n.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==e.opacity&&n.setOpacity(t.opacity),null!=n.dragging&&t.draggable!==e.draggable&&(!0===t.draggable?n.dragging.enable():n.dragging.disable())}))}}]);