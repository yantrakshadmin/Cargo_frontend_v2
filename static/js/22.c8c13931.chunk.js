(this["webpackJsonp@app/web"]=this["webpackJsonp@app/web"]||[]).push([[22],{311:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={INPUT:"input",MULTIPLE_CHECKBOX:"MULTIPLE_CHECKBOX",INPUT_NUMBER:"input-number",PASSWORD:"password",TEXTAREA:"textarea",MARKDOWN:"markdown",SELECT:"select",CAPTCHA:"captcha",MONTH_PICKER:"month-picker",FILE_DRAG_DROP:"file-drag-drop",RANGE_PICKER:"range-picker",RADIO:"radio",SWITCH:"switch",HIDDEN:"hidden",DATE:"date",CASCADER:"cascader"};n.CAPTCHA},315:function(e,a,t){"use strict";t(43),t(332)},332:function(e,a,t){},333:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));t(339);var n=t(342),r=(t(392),t(390)),c=(t(345),t(343)),s=(t(309),t(310)),l=(t(190),t(338)),i=(t(393),t(391)),u=(t(394),t(389)),o=t(0),m=t.n(o),p=t(406),E=t(311),d=u.a.Option,f=i.a.Group,b=function(e,a,t,o,b,g,y){var h={};switch(b&&b.formOptions&&(h=b.formOptions),o){case E.a.INPUT:return m.a.createElement(s.a.Item,Object.assign({key:e,label:y?null:g||e.charAt(0).toUpperCase()+e.slice(1),name:e,rules:a},h),m.a.createElement(l.a,t));case E.a.FILE_DRAG_DROP:return m.a.createElement(s.a.Item,Object.assign({key:e,label:y?null:g||e.charAt(0).toUpperCase()+e.slice(1),name:e,rules:a},h),m.a.createElement(c.a.Dragger,t,m.a.createElement("p",{className:"ant-upload-drag-icon"},m.a.createElement(p.a,{type:"inbox"})),m.a.createElement("p",{className:"ant-upload-text p-1"},b.p1),m.a.createElement("p",{className:"ant-upload-hint p-1"},b.p2)));case E.a.SELECT:return m.a.createElement(s.a.Item,Object.assign({key:e,label:y?null:g||e.charAt(0).toUpperCase()+e.slice(1),name:e,rules:a},h),m.a.createElement(u.a,t,b.selectOptions.map((function(e,a){return m.a.createElement(d,{search:b.customTitle?e[b.customTitle]:e.label||e[b.key]||e,key:a.toString(),value:b.valueIndex?a:e.value||e[b.key]||e},b.customTitle?m.a.createElement("text",{style:{fontSize:13,fontWeight:"bold"}},e[b.customTitle]):e.label||e[b.key]||e,b.dataKeys?m.a.createElement("div",{className:"row",style:{flexWrap:"wrap"}},b.dataKeys.map((function(a,t){return m.a.createElement("div",{className:"row"},b.dataLabel?m.a.createElement("text",{style:{fontSize:11,fontWeight:"bold",marginLeft:5,marginRight:5}},b.dataLabel[t]?b.dataLabel[t]:null):null,m.a.createElement("text",{style:{fontSize:11,marginLeft:5,marginRight:5}},e[a]))}))):null)}))));case E.a.RADIO:return m.a.createElement(s.a.Item,Object.assign({key:e,label:y?null:g||e.charAt(0).toUpperCase()+e.slice(1),name:e,rules:a},h),m.a.createElement(r.a.Group,{value:"Ggg"},b.radioOptions.map((function(e){return m.a.createElement(r.a,{key:e.value,value:e.value},e.label)}))));case E.a.DATE:return m.a.createElement(s.a.Item,Object.assign({key:e},h,{label:y?null:g||e.charAt(0).toUpperCase()+e.slice(1),name:e,rules:a}),m.a.createElement(n.a,null));case E.a.MULTIPLE_CHECKBOX:return m.a.createElement(s.a.Item,Object.assign({key:e,label:y?null:g||e.charAt(0).toUpperCase()+e.slice(1),name:e,rules:a},h),m.a.createElement(f,{onChange:b.onChange},b.checkOptions.map((function(e){return m.a.createElement(i.a,{value:e.value},e.label)}))));default:return null}}},780:function(e,a,t){"use strict";t.r(a),t.d(a,"SignInScreen",(function(){return A}));t(121);var n=t(88),r=(t(189),t(125)),c=t(0),s=t.n(c),l=t(324),i=t(51),u=(t(309),t(310)),o=t(22),m=t.n(o),p=(t(315),t(127)),E=t(33),d=t(77),f=t(47),b=t(406),g=t(44),y=t(148),h=t(333),v=t(311),O=(t(341),t(344)),w=(t(190),t(338)),k=t(330),x=t(139),T=r.a.Title,C=function(e){var a=e.username,t=e.password,n=e.signIn,r=e.close,l=e.open,i=Object(c.useState)(""),u=Object(d.a)(i,2),o=u[0],f=u[1],g=function(){var e=Object(E.a)(m.a.mark((function e(){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.f)({username:a,otp:o});case 2:if(c=e.sent,!(s=c.error)){e.next=8;break}p.a.error({message:"Cant verify user: ".concat(a),description:s.toString()}),e.next=11;break;case 8:return e.next=10,n({username:a,password:t});case 10:r();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(O.a,{onOk:g,onCancel:r,visible:l,okText:"Verify my account"},s.a.createElement(T,{level:4},s.a.createElement(k.a,{style:{color:"#FFB108"}})," ","Your account is not verified yet"),s.a.createElement("div",null,"Enter verification OTP you received in mail",s.a.createElement(w.a,{value:o,prefix:s.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"6 digit OTP",onChange:function(e){return f(e.target.value)},type:"number",onPressEnter:g})))},I=function(){var e=Object(c.useState)({open:!1,username:"",password:""}),a=Object(d.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(!1),i=Object(d.a)(l,2),o=i[0],O=i[1],w=Object(f.b)(),k=function(){var e=Object(E.a)(m.a.mark((function e(a){var t,n,r,c,s,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.username,n=a.password,e.prev=1,O(!0),e.next=5,Object(x.c)({username:t,password:n});case 5:return r=e.sent,c=r.data,s=c.access,l=c.refresh,e.next=10,window.storage.set(g.a,s);case 10:return e.next=12,window.storage.set(g.b,l);case 12:return e.next=14,Object(y.a)(w);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),p.a.error({message:"Can't SignIn user: ".concat(t),description:e.t0.toString()});case 19:O(!1);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(a){return e.apply(this,arguments)}}(),T=function(){var e=Object(E.a)(m.a.mark((function e(a){var t,n,c,s,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.username,n=a.password,e.next=3,Object(x.e)({username:t});case 3:if(c=e.sent,s=c.data,!(l=c.error)){e.next=10;break}p.a.error({message:"Error with user: ".concat(t),description:l.toString()}),e.next=16;break;case 10:if(!s.verified){e.next=15;break}return e.next=13,k({username:t,password:n});case 13:e.next=16;break;case 15:r({open:!0,username:t,password:n});case 16:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"sign-in-form"},s.a.createElement("div",{className:"sign-heading-container"},s.a.createElement("h1",null,"Login"),s.a.createElement("p",null,"Sign in to your account")),s.a.createElement(C,Object.assign({},t,{signIn:k,close:function(){return r({open:!1,username:"",password:""})}})),s.a.createElement(u.a,{onFinish:T,layout:"vertical",hideRequiredMark:!0},Object(h.a)("username",[{required:!0,message:"Please input your username!"}],{prefix:s.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"},v.a.INPUT),Object(h.a)("password",[{required:!0,message:"Please input your password!"}],{prefix:s.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Password",type:"password"},v.a.INPUT),s.a.createElement(u.a.Item,null,s.a.createElement(n.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:o},"Sign in"))))},S=r.a.Title,A=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"main-sign-in"},s.a.createElement("div",{className:"sign-in-left-container"},s.a.createElement(I,null)),s.a.createElement("div",{className:"sign-in-right-container"},s.a.createElement(S,{level:3,style:{color:"#fff"}},"Sign Up"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(i.a,{to:"/sign-up/shipper/"},s.a.createElement(n.a,{type:"default",htmlType:"submit",icon:s.a.createElement(l.a,null)},"Sign-Up as Shipper")),s.a.createElement("br",null),s.a.createElement(i.a,{to:"/sign-up/supplier/"},s.a.createElement(n.a,{type:"default",htmlType:"submit",icon:s.a.createElement(l.a,null)},"Sign-Up as Supplier")))))};a.default=A}}]);
//# sourceMappingURL=22.c8c13931.chunk.js.map