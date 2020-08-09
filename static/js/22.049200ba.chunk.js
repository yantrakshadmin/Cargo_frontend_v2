(this["webpackJsonp@app/web"]=this["webpackJsonp@app/web"]||[]).push([[22],{270:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(20),l=a(8),r=a.n(l),i=a(13),o=a(50),c=a(93),u=a(0),d=a(33),s={loading:!0,data:void 0,error:null,status:0},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.defaultData,l=Object(c.a)(t,["defaultData"]),f=Object(u.useState)(s),m=Object(o.a)(f,2),p=m[0],b=m[1],y=Object(u.useState)(0),h=Object(o.a)(y,2),v=h[0],g=h[1],w=function(){return g(v+1)},O=JSON.stringify(l);return Object(u.useEffect)((function(){b(s),function(){var t=Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b({data:void 0,status:200,error:void 0,loading:!0}),a&&b({data:a,status:200,error:void 0,loading:!1}),t.t0=b,t.next=5,Object(d.a)(e,l);case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()().then()}),[e,O,v]),Object(n.a)(Object(n.a)({},p),{},{reload:w})}},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(76);var l=a(94);function r(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(357);var n=a(356),l=(a(145),a(74)),r=(a(272),a(273)),i=(a(89),a(61)),o=(a(280),a(282)),c=(a(306),a(309)),u=a(50),d=(a(146),a(92)),s=a(0),f=a.n(s),m=d.a.Title,p=function(e){var t=e.title,a=e.data,d=e.columns,p=e.modalParams,b=e.modalBody,y=e.modalStyle,h=e.hideRightButton,v=e.tableOptions,g=e.customModalTitle,w=e.refresh,O=void 0===w?function(){}:w,E=e.customRightButtonLabel,j=e.loading,k=void 0!==j&&j,x=Object(s.useState)(!1),S=Object(u.a)(x,2),I=S[0],T=S[1],A=function(){T(!1),p&&p.setModalParams(void 0)};return Object(s.useEffect)((function(){p&&T(p.showModal)}),[p]),f.a.createElement("div",null,h?null:f.a.createElement(c.a,{visible:I,onCancel:A,style:y||{minWidth:"80vw"},title:g||E||"Add ".concat(t),footer:null},f.a.createElement(b,{id:p?p.id:void 0,onCancel:A,onDone:function(){O(),A()}})),f.a.createElement(r.a,{justify:"space-between"},f.a.createElement(o.a,null,f.a.createElement(m,{level:3},t)),f.a.createElement(o.a,null,h?null:f.a.createElement(i.a,{className:"m-2",type:"primary",onClick:function(){T(!0)}},E||"Add ".concat(t)))),f.a.createElement(l.a,{style:{margin:0,padding:0}}),f.a.createElement(r.a,null,f.a.createElement(o.a,{span:24},f.a.createElement(n.a,Object.assign({bordered:!0,dataSource:a,columns:d,loading:k},v)))))}},818:function(e,t,a){"use strict";a.r(t),a.d(t,"ShippingShipperScreen",(function(){return h}));a(272);var n=a(273),l=(a(280),a(282)),r=(a(89),a(61)),i=a(292),o=a(0),c=a.n(o),u=a(300),d=a(270),s=[{title:"Trip Id",dataIndex:"trip_id",key:"trip_id"},{title:"Origin",dataIndex:"origin",key:"origin"},{title:"Destination",dataIndex:"destination",key:"destination"},{title:"Offered Price",dataIndex:"offered_price",key:"offered_price"}],f=[{title:"Date and Time",dataIndex:"date",key:"date"},{title:"Location",dataIndex:"location",key:"location"},{title:"ETA",dataIndex:"eta",key:"eta"}],m=a(80),p=a.n(m),b=function(){return(b=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},y=function(e){for(var t=e.url,a=e.allowFullScreen,n=e.position,l=e.display,r=e.height,i=e.width,o=e.overflow,u=e.styles,d=e.onLoad,s=e.onMouseOver,f=e.onMouseOut,m=e.scrolling,y=e.id,h=e.frameBorder,v=e.ariaHidden,g=e.sandbox,w=e.allow,O=e.className,E=e.title,j=e.ariaLabel,k=e.ariaLabelledby,x=e.name,S=e.target,I=e.loading,T=e.importance,A=e.referrerpolicy,L=e.allowpaymentrequest,N=e.src,M=p()({src:N||t,target:S||null,style:{position:n||null,display:l||"block",overflow:o||null},scrolling:m||null,allowpaymentrequest:L||null,importance:T||null,sandbox:g||null,loading:I||null,styles:u||null,name:x||null,className:O||null,referrerpolicy:A||null,title:E||null,allow:w||null,id:y||null,"aria-labelledby":k||null,"aria-hidden":v||null,"aria-label":j||null,width:i||null,height:r||null,onLoad:d||null,onMouseOver:s||null,onMouseOut:f||null}),B=Object.create(null),D=0,P=Object.keys(M);D<P.length;D++){var R=P[D];null!=M[R]&&(B[R]=M[R])}for(var _=0,C=Object.keys(B.style);_<C.length;_++){var J=C[_];null==B.style[J]&&delete B.style[J]}if(a)if("allow"in B){var q=B.allow.replace("fullscreen","");B.allow=("fullscreen "+q.trim()).trim()}else B.allow="fullscreen";return h>=0&&(B.style.hasOwnProperty("border")||(B.style.border=h)),c.a.createElement("iframe",b({},B))},h=function(){var e=Object(d.a)("/vendors/"),t=e.data,a=e.loading,o=e.reload,m=[].concat(Object(i.a)(s),[{title:"Track Now",key:"operation",render:function(){return c.a.createElement("div",{className:"row align-center justify-between"},c.a.createElement(r.a,{type:"primary"},"Track Now"))}}]);return c.a.createElement("div",null,c.a.createElement(n.a,null,c.a.createElement(l.a,{span:12},c.a.createElement("br",null),c.a.createElement(u.a,{title:"Assigned Trucks",columns:m,data:t,loading:a,refresh:o,hideRightButton:!0}),c.a.createElement("br",null),c.a.createElement(u.a,{title:"Location Details",columns:f,data:t,loading:a,refresh:o,hideRightButton:!0})),c.a.createElement(l.a,{span:12},c.a.createElement("div",{className:"row justify-center"},c.a.createElement(y,{url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73913991346!2d76.81306505114875!3d28.646677243574906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdeb2202d249%3A0x9b07f2205242de4e!2sRed%20Line!5e0!3m2!1sen!2sin!4v1596549160232!5m2!1sen!2sin",width:"450px",height:"600px",id:"myId"})))))};t.default=h}}]);
//# sourceMappingURL=22.049200ba.chunk.js.map