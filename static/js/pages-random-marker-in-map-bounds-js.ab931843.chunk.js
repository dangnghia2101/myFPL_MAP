(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[41],{128:function(t,n,e){t.exports={leafletRandomMarker:"random-marker-in-map-bounds_leafletRandomMarker__-8KlO"}},67:function(t,n,e){"use strict";e.r(n);var r=e(82),c=e(9),u=e(0),o=e(133),a=e(97),i=e(128),f=e.n(i),s=e(83),l=e.n(s),b=e(92),d=e(1),v=[52.22977,21.01178],p=function(t){var n=t.map;return Object(u.useEffect)((function(){if(n){var t=l.a.control({position:"bottomleft"});t.onAdd=function(){var t=l.a.DomUtil.create("div","description");l.a.DomEvent.disableClickPropagation(t);return t.insertAdjacentHTML("beforeend","Dynamic generation of 30 markers in the map view"),t},t.addTo(n);var e=l.a.Control.extend({options:{position:"topleft",title:"random marker",className:f.a.leafletRandomMarker},onAdd:function(t){return this._map=t,this._initialLayout()},_initialLayout:function(){var t=l.a.DomUtil.create("div","leaflet-bar "+this.options.className);return this._container=t,l.a.DomEvent.disableClickPropagation(t),t.title=this.options.title,t.innerHTML='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M24 22h-3.172l-5-5 5-5h3.172v5l7-7-7-7v5h-4c-0.53 0-1.039 0.211-1.414 0.586l-5.586 5.586-5.586-5.586c-0.375-0.375-0.884-0.586-1.414-0.586h-6v4h5.172l5 5-5 5h-5.172v4h6c0.53 0 1.039-0.211 1.414-0.586l5.586-5.586 5.586 5.586c0.375 0.375 0.884 0.586 1.414 0.586h4v5l7-7-7-7v5z" /></svg>',l.a.DomEvent.on(t,"mousedown dblclic",l.a.DomEvent.stopPropagation).on(t,"click",l.a.DomEvent.stop).on(t,"click",u).on(t,"click",c),this._container}});n.addControl(new e);var r=l.a.featureGroup().addTo(n);c()}function c(){for(var t=n.getBounds(),e=t.getSouthWest(),c=t.getNorthEast(),u=c.lng-e.lng,o=c.lat-e.lat,a=[],i=0;i<30;i++){var f=[e.lat+o*Math.random(),e.lng+u*Math.random()];a.push(f)}for(var s=0;s<a.length;s++)l.a.marker(a[s],{icon:l.a.divIcon({className:"custom-icon-marker",iconSize:l.a.point(40,40),html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker"><path fill-opacity="0.25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/><path stroke="#fff" fill="#'.concat(Math.floor(16777215*Math.random()).toString(16),'" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/></svg>'),iconAnchor:[12,24],popupAnchor:[9,-26]})}).bindPopup("<b>Marker coordinates</b>:<br>".concat(a[s].toString())).addTo(r);n.fitBounds(r.getBounds(),{padding:[20,20]})}function u(){r.clearLayers()}}),[n]),null};n.default=function(){var t=Object(u.useState)(null),n=Object(c.a)(t,2),e=n[0],i=n[1];return Object(d.jsxs)(o.a,{whenCreated:i,center:v,zoom:18,scrollWheelZoom:!1,children:[Object(d.jsx)(a.a,Object(r.a)({},b.a)),Object(d.jsx)(p,{map:e})]})}},80:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(82);function c(t,n){var e,c=null!==(e=t.pane)&&void 0!==e?e:n.pane;return c?Object(r.a)(Object(r.a)({},t),{},{pane:c}):t}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},82:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return u}))},84:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(85),u=e(79),o=e(81),a=e(80);function i(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layersControl)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function f(t){return function(n){var e=Object(u.d)(),r=t(Object(a.a)(n,e),e);return Object(c.a)(e.map,n.attribution),Object(o.a)(r.current,n.eventHandlers),i(r.current,e),r}}},85:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},87:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return s}));var r=e(9),c=e(0),u=e.n(c),o=e(17),a=e(79);function i(t){function n(n,e){var r=t(n).current,o=r.instance,i=r.context;return Object(c.useImperativeHandle)(e,(function(){return o})),null==n.children?null:u.a.createElement(a.c,{value:i},n.children)}return Object(c.forwardRef)(n)}function f(t){function n(n,e){var u=Object(c.useState)(!1),a=Object(r.a)(u,2),i=a[0],f=a[1],s=t(n,f).current.instance;Object(c.useImperativeHandle)(e,(function(){return s})),Object(c.useEffect)((function(){i&&s.update()}),[s,i,n.children]);var l=s._contentNode;return l?Object(o.createPortal)(n.children,l):null}return Object(c.forwardRef)(n)}function s(t){function n(n,e){var r=t(n).current.instance;return Object(c.useImperativeHandle)(e,(function(){return r})),null}return Object(c.forwardRef)(n)}},88:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(79),u=e(81),o=e(84),a=e(80);function i(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r,c=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),e.current=c}}),[t,n])}function f(t){return function(n){var e=Object(c.d)(),r=t(Object(a.a)(n,e),e);return Object(u.a)(r.current,n.eventHandlers),Object(o.b)(r.current,e),i(r.current,n),r}}},89:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,c){var u=Object(r.useRef)(t(e,c)),o=Object(r.useRef)(e),a=u.current.instance;return Object(r.useEffect)((function(){o.current!==e&&(n(a,e,o.current),o.current=e)}),[a,e,c]),u}}},90:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),c=e(79);function u(t){return function(n){var e=Object(c.d)(),u=t(n,e),o=u.current.instance,a=Object(r.useRef)(n.position),i=n.position;return Object(r.useEffect)((function(){return o.addTo(e.map),function(){o.remove()}}),[e.map,o]),Object(r.useEffect)((function(){null!=i&&i!==a.current&&(o.setPosition(i),a.current=i)}),[o,i]),u}}},91:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(85),c=e(79),u=e(81),o=e(80);function a(t,n){return function(e,a){var i=Object(c.d)(),f=t(Object(o.a)(e,i),i);return Object(r.a)(i.map,e.attribution),Object(u.a)(f.current,e.eventHandlers),n(f.current,i,e,a),f}}},92:function(t,n,e){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},94:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return l})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return d}));var r=e(87),c=e(90),u=e(89),o=e(84),a=e(91),i=e(88);function f(t){var n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(c.a)(n);return Object(r.c)(e)}function s(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.a)(c)}function l(t,n){var e=Object(u.a)(t),c=Object(a.a)(e,n);return Object(r.b)(c)}function b(t,n){var e=Object(u.a)(t,n),c=Object(i.a)(e);return Object(r.a)(c)}function d(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.c)(c)}},96:function(t,n,e){"use strict";function r(t,n,e){var r=n.opacity,c=n.zIndex;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=c&&c!==e.zIndex&&t.setZIndex(c)}e.d(n,"a",(function(){return r}))},97:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(93),c=e(94),u=e(80),o=e(96),a=e(83),i=Object(c.e)((function(t,n){var e=t.url,c=Object(r.a)(t,["url"]);return{instance:new a.TileLayer(e,Object(u.a)(c,n)),context:n}}),o.a)}}]);