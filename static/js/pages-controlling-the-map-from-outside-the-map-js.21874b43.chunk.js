(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[14],{100:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return o}));var r=e(79),c=e(0);function u(){return Object(r.d)().map}function o(t,n){var e=u();return Object(c.useEffect)((function(){return e.on(t,n),function(){e.off(t,n)}}),[e,t,n]),e}},114:function(t,n,e){t.exports={markersList:"controlling-the-map-from-outside-the-map_markersList__LEPe0",markerItem:"controlling-the-map-from-outside-the-map_markerItem__13e19"}},43:function(t,n,e){"use strict";e.r(n);var r=e(82),c=e(9),u=e(0),o=e(100),i=e(99),a=e(98),f=e(133),s=e(97),l=e(114),b=e.n(l),p=e(92),O=e(1),j=[52.2295,21.01],d=[{id:"1",lat:52.228785157729114,lng:21.006867885589603,title:"Marker 1"},{id:"2",lat:52.22923201880194,lng:21.00897073745728,title:"Marker 2"},{id:"3",lat:52.22963944703663,lng:21.01091265678406,title:"Marker 3"},{id:"4",lat:52.229928587386496,lng:21.01218938827515,title:"Marker 4"}],v=function(t){var n=t.onItemClick;return Object(O.jsx)("div",{className:b.a.markersList,children:d.map((function(t,e){var r=t.title;return Object(O.jsx)("div",{className:b.a.markerItem,onClick:function(t){t.preventDefault(),n(e)},children:r},e)}))})},m=function(t){var n=t.data,e=t.selectedIndex;return n.map((function(t,n){return Object(O.jsx)(g,{content:t.title,center:{lat:t.lat,lng:t.lng},openPopup:e===n},n)}))},g=function(t){var n=t.center,e=t.content,r=t.openPopup,c=Object(o.a)(),f=Object(u.useRef)(null);return Object(u.useEffect)((function(){r&&(c.flyToBounds([n]),f.current.openPopup())}),[c,n,r]),Object(O.jsx)(i.a,{ref:f,position:n,children:Object(O.jsx)(a.a,{children:e})})};n.default=function(){var t=Object(u.useState)(),n=Object(c.a)(t,2),e=n[0],o=n[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(f.a,{center:j,zoom:16,scrollWheelZoom:!1,children:[Object(O.jsx)(s.a,Object(r.a)({},p.a)),Object(O.jsx)(m,{selectedIndex:e,data:d})]}),Object(O.jsx)(v,{data:d,onItemClick:function(t){o(t)}})]})}},80:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(82);function c(t,n){var e,c=null!==(e=t.pane)&&void 0!==e?e:n.pane;return c?Object(r.a)(Object(r.a)({},t),{},{pane:c}):t}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},82:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return u}))},84:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(85),u=e(79),o=e(81),i=e(80);function a(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layersControl)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function f(t){return function(n){var e=Object(u.d)(),r=t(Object(i.a)(n,e),e);return Object(c.a)(e.map,n.attribution),Object(o.a)(r.current,n.eventHandlers),a(r.current,e),r}}},85:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},87:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return s}));var r=e(9),c=e(0),u=e.n(c),o=e(17),i=e(79);function a(t){function n(n,e){var r=t(n).current,o=r.instance,a=r.context;return Object(c.useImperativeHandle)(e,(function(){return o})),null==n.children?null:u.a.createElement(i.c,{value:a},n.children)}return Object(c.forwardRef)(n)}function f(t){function n(n,e){var u=Object(c.useState)(!1),i=Object(r.a)(u,2),a=i[0],f=i[1],s=t(n,f).current.instance;Object(c.useImperativeHandle)(e,(function(){return s})),Object(c.useEffect)((function(){a&&s.update()}),[s,a,n.children]);var l=s._contentNode;return l?Object(o.createPortal)(n.children,l):null}return Object(c.forwardRef)(n)}function s(t){function n(n,e){var r=t(n).current.instance;return Object(c.useImperativeHandle)(e,(function(){return r})),null}return Object(c.forwardRef)(n)}},88:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(79),u=e(81),o=e(84),i=e(80);function a(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r,c=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),e.current=c}}),[t,n])}function f(t){return function(n){var e=Object(c.d)(),r=t(Object(i.a)(n,e),e);return Object(u.a)(r.current,n.eventHandlers),Object(o.b)(r.current,e),a(r.current,n),r}}},89:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,c){var u=Object(r.useRef)(t(e,c)),o=Object(r.useRef)(e),i=u.current.instance;return Object(r.useEffect)((function(){o.current!==e&&(n(i,e,o.current),o.current=e)}),[i,e,c]),u}}},90:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),c=e(79);function u(t){return function(n){var e=Object(c.d)(),u=t(n,e),o=u.current.instance,i=Object(r.useRef)(n.position),a=n.position;return Object(r.useEffect)((function(){return o.addTo(e.map),function(){o.remove()}}),[e.map,o]),Object(r.useEffect)((function(){null!=a&&a!==i.current&&(o.setPosition(a),i.current=a)}),[o,a]),u}}},91:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(85),c=e(79),u=e(81),o=e(80);function i(t,n){return function(e,i){var a=Object(c.d)(),f=t(Object(o.a)(e,a),a);return Object(r.a)(a.map,e.attribution),Object(u.a)(f.current,e.eventHandlers),n(f.current,a,e,i),f}}},92:function(t,n,e){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},94:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return l})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return p}));var r=e(87),c=e(90),u=e(89),o=e(84),i=e(91),a=e(88);function f(t){var n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(c.a)(n);return Object(r.c)(e)}function s(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.a)(c)}function l(t,n){var e=Object(u.a)(t),c=Object(i.a)(e,n);return Object(r.b)(c)}function b(t,n){var e=Object(u.a)(t,n),c=Object(a.a)(e);return Object(r.a)(c)}function p(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.c)(c)}},96:function(t,n,e){"use strict";function r(t,n,e){var r=n.opacity,c=n.zIndex;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=c&&c!==e.zIndex&&t.setZIndex(c)}e.d(n,"a",(function(){return r}))},97:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(93),c=e(94),u=e(80),o=e(96),i=e(83),a=Object(c.e)((function(t,n){var e=t.url,c=Object(r.a)(t,["url"]);return{instance:new i.TileLayer(e,Object(u.a)(c,n)),context:n}}),o.a)},98:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(94),c=e(83),u=e(0),o=Object(r.c)((function(t,n){return{instance:new c.Popup(t,n.overlayContainer),context:n}}),(function(t,n,e,r){var c=e.onClose,o=e.onOpen,i=e.position;Object(u.useEffect)((function(){var e=t.instance;function u(t){t.popup===e&&(e.update(),r(!0),null==o||o())}function a(t){t.popup===e&&(r(!1),null==c||c())}return n.map.on({popupopen:u,popupclose:a}),null==n.overlayContainer?(null!=i&&e.setLatLng(i),e.openOn(n.map)):n.overlayContainer.bindPopup(e),function(){n.map.off({popupopen:u,popupclose:a}),n.map.removeLayer(e)}}),[t,n,r,c,o,i])}))},99:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(82),c=e(93),u=e(94),o=e(83),i=Object(u.b)((function(t,n){var e=t.position,u=Object(c.a)(t,["position"]),i=new o.Marker(e,u);return{instance:i,context:Object(r.a)(Object(r.a)({},n),{},{overlayContainer:i})}}),(function(t,n,e){n.position!==e.position&&t.setLatLng(n.position),null!=n.icon&&n.icon!==e.icon&&t.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==e.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==e.opacity&&t.setOpacity(n.opacity),null!=t.dragging&&n.draggable!==e.draggable&&(!0===n.draggable?t.dragging.enable():t.dragging.disable())}))}}]);