(this["webpackJsonp@app/web"]=this["webpackJsonp@app/web"]||[]).push([[23],{271:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(20),r=a(8),i=a.n(r),o=a(13),c=a(50),l=a(93),d=a(0),u=a(33),s={loading:!0,data:void 0,error:null,status:0},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.defaultData,r=Object(l.a)(t,["defaultData"]),f=Object(d.useState)(s),m=Object(c.a)(f,2),b=m[0],p=m[1],v=Object(d.useState)(0),y=Object(c.a)(v,2),E=y[0],h=y[1],g=function(){return h(E+1)},O=JSON.stringify(r);return Object(d.useEffect)((function(){p(s),function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p({data:void 0,status:200,error:void 0,loading:!0}),a&&p({data:a,status:200,error:void 0,loading:!1}),t.t0=p,t.next=5,Object(u.a)(e,r);case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()().then()}),[e,O,E]),Object(n.a)(Object(n.a)({},b),{},{reload:g})}},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(76);var r=a(94);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},304:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a(357);var n=a(356),r=(a(145),a(74)),i=(a(278),a(279)),o=(a(89),a(61)),c=(a(287),a(288)),l=(a(353),a(354)),d=a(50),u=(a(146),a(92)),s=a(0),f=a.n(s),m=u.a.Title,b=function(e){var t=e.title,a=e.data,u=e.columns,b=e.modalParams,p=e.modalBody,v=e.hideRightButton,y=e.tableOptions,E=e.customModalTitle,h=e.refresh,g=void 0===h?function(){}:h,O=e.customRightButtonLabel,j=e.loading,k=void 0!==j&&j,w=Object(s.useState)(!1),S=Object(d.a)(w,2),I=S[0],x=S[1],T=function(){x(!1),b&&b.setModalParams(void 0)};return Object(s.useEffect)((function(){b&&x(b.showModal)}),[b]),f.a.createElement("div",null,v?null:f.a.createElement(l.a,{visible:I,onCancel:T,style:{minWidth:"80vw"},title:E||O||"Add ".concat(t),footer:null},f.a.createElement(p,{id:b?b.id:void 0,onCancel:T,onDone:function(){g(),T()}})),f.a.createElement(i.a,{justify:"space-between"},f.a.createElement(c.a,null,f.a.createElement(m,{level:3},t)),f.a.createElement(c.a,null,v?null:f.a.createElement(o.a,{className:"m-2",type:"primary",onClick:function(){x(!0)}},O||"Add ".concat(t)))),f.a.createElement(r.a,{style:{margin:0,padding:0}}),f.a.createElement(i.a,null,f.a.createElement(c.a,{span:24},f.a.createElement(n.a,Object.assign({bordered:!0,dataSource:a,columns:u,loading:k},y)))))}},828:function(e,t,a){"use strict";a.r(t),a.d(t,"ShippingShipperScreen",(function(){return m}));a(278);var n=a(279),r=(a(287),a(288)),i=(a(89),a(61)),o=a(292),c=a(0),l=a.n(c),d=a(304),u=a(271),s=[{title:"Trip Id",dataIndex:"trip_id",key:"trip_id"},{title:"Origin",dataIndex:"origin",key:"origin"},{title:"Destination",dataIndex:"destination",key:"destination"},{title:"Offered Price",dataIndex:"offered_price",key:"offered_price"}],f=[{title:"Date and Time",dataIndex:"date",key:"date"},{title:"Location",dataIndex:"location",key:"location"},{title:"ETA",dataIndex:"eta",key:"eta"}],m=function(){var e=Object(u.a)("/vendors/"),t=e.data,a=e.loading,c=e.reload,m=[].concat(Object(o.a)(s),[{title:"Track Now",key:"operation",render:function(){return l.a.createElement("div",{className:"row align-center justify-between"},l.a.createElement(i.a,{type:"primary"},"Track Now"))}}]);return l.a.createElement("div",null,l.a.createElement(n.a,null,l.a.createElement(r.a,{span:12},l.a.createElement("br",null),l.a.createElement(d.a,{title:"Assigned Trucks",columns:m,data:t,loading:a,refresh:c,hideRightButton:!0}))),l.a.createElement(n.a,null,l.a.createElement(r.a,{span:12},l.a.createElement("br",null),void 0,l.a.createElement(d.a,{title:"Location Details",columns:f,data:t,loading:a,refresh:c,hideRightButton:!0}))))};t.default=m}}]);
//# sourceMappingURL=23.75d2855e.chunk.js.map