(this["webpackJsonp@app/web"]=this["webpackJsonp@app/web"]||[]).push([[23],{271:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(20),r=a(8),i=a.n(r),o=a(13),c=a(50),l=a(93),u=a(0),d=a(33),s={loading:!0,data:void 0,error:null,status:0},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.defaultData,r=Object(l.a)(t,["defaultData"]),f=Object(u.useState)(s),m=Object(c.a)(f,2),b=m[0],p=m[1],v=Object(u.useState)(0),y=Object(c.a)(v,2),O=y[0],j=y[1],g=function(){return j(O+1)},h=JSON.stringify(r);return Object(u.useEffect)((function(){p(s),function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p({data:void 0,status:200,error:void 0,loading:!0}),a&&p({data:a,status:200,error:void 0,loading:!1}),t.t0=p,t.next=5,Object(d.a)(e,r);case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()().then()}),[e,h,O]),Object(n.a)(Object(n.a)({},b),{},{reload:g})}},290:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(76);var r=a(94);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a(357);var n=a(356),r=(a(145),a(74)),i=(a(278),a(280)),o=(a(89),a(61)),c=(a(288),a(289)),l=(a(311),a(312)),u=a(50),d=(a(146),a(92)),s=a(0),f=a.n(s),m=d.a.Title,b=function(e){var t=e.title,a=e.data,d=e.columns,b=e.modalParams,p=e.modalBody,v=e.hideRightButton,y=e.tableOptions,O=e.customModalTitle,j=e.refresh,g=void 0===j?function(){}:j,h=e.customRightButtonLabel,E=e.loading,w=void 0!==E&&E,k=Object(s.useState)(!1),S=Object(u.a)(k,2),A=S[0],I=S[1],x=function(){I(!1),b&&b.setModalParams(void 0)};return Object(s.useEffect)((function(){b&&I(b.showModal)}),[b]),f.a.createElement("div",null,v?null:f.a.createElement(l.a,{visible:A,onCancel:x,style:{minWidth:"80vw"},title:O||h||"Add ".concat(t),footer:null},f.a.createElement(p,{id:b?b.id:void 0,onCancel:x,onDone:function(){g(),x()}})),f.a.createElement(i.a,{justify:"space-between"},f.a.createElement(c.a,null,f.a.createElement(m,{level:3},t)),f.a.createElement(c.a,null,v?null:f.a.createElement(o.a,{className:"m-2",type:"primary",onClick:function(){I(!0)}},h||"Add ".concat(t)))),f.a.createElement(r.a,{style:{margin:0,padding:0}}),f.a.createElement(i.a,null,f.a.createElement(c.a,{span:24},f.a.createElement(n.a,Object.assign({bordered:!0,dataSource:a,columns:d,loading:w},y)))))}},826:function(e,t,a){"use strict";a.r(t);a(89);var n=a(61),r=a(290),i=a(0),o=a.n(i),c=a(300),l=a(271),u=[{title:"Order ID",dataIndex:"order_id",key:"order_id"},{title:"Origin",dataIndex:"origin",key:"origin"},{title:"Destination",dataIndex:"destination",key:"destination"},{title:"Date",dataIndex:"date",key:"date"}];t.default=function(){var e=Object(l.a)("/vendors/"),t=e.data,a=e.loading,i=e.reload,d=[].concat(Object(r.a)(u),[{title:"Assign",key:"operation",render:function(){return o.a.createElement("div",{className:"row align-center justify-between"},o.a.createElement(n.a,{type:"primary"},"Assign Now"))}}]);return o.a.createElement(c.a,{title:"View Pickup Request",columns:d,data:t,loading:a,refresh:i,hideRightButton:!0})}}}]);
//# sourceMappingURL=23.9db8cc31.chunk.js.map