(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"025c":function(t,e,o){},"07ac":function(t,e,o){var n=o("23e7"),a=o("6f53").values;n({target:"Object",stat:!0},{values:function(t){return a(t)}})},"159b":function(t,e,o){var n=o("da84"),a=o("fdbc"),c=o("785a"),r=o("17c2"),i=o("9112"),s=function(t){if(t&&t.forEach!==r)try{i(t,"forEach",r)}catch(e){t.forEach=r}};for(var l in a)a[l]&&s(n[l]&&n[l].prototype);s(c)},"17c2":function(t,e,o){"use strict";var n=o("b727").forEach,a=o("a640"),c=a("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4937:function(t,e,o){"use strict";o.r(e);var n=o("7a23"),a=function(t){return Object(n["pushScopeId"])("data-v-42514f0a"),t=t(),Object(n["popScopeId"])(),t},c={class:"container"},r={class:"nav"},i={class:"station-name"},s={class:"options"},l={class:"btn"},u={class:"btn"},f={class:"btn"},p={class:"route-direction"},d={class:"stop-list"},h={class:"stop-time"},b={key:0,class:"stop-status"},m={key:2,class:"text-danger"},v={class:"stop-name"},O={class:"bus-info"},j={key:0},g={class:"bus-plate-numb"},w={class:"update-timer"},N=a((function(){return Object(n["createElementVNode"])("div",{class:"copyright pb-0"},"Design by Zoe Kang/Code by DotSea",-1)})),E={class:"pb-0"};function k(t,e,o,a,k,S){var B=Object(n["resolveComponent"])("BackIcon"),y=Object(n["resolveComponent"])("LikeIconActive"),I=Object(n["resolveComponent"])("LikeIconNormal"),V=Object(n["resolveComponent"])("InfoIcon"),R=Object(n["resolveComponent"])("NotificationIcon"),D=Object(n["resolveComponent"])("MapIcon"),x=Object(n["resolveComponent"])("UpdateIcon"),C=Object(n["resolveComponent"])("BusPlateNumb"),z=Object(n["resolveComponent"])("BarrierFreeBus"),F=Object(n["resolveComponent"])("NormalBus"),$=Object(n["resolveComponent"])("CircleIcon");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("button",{onClick:e[0]||(e[0]=function(){return S.backToIndex&&S.backToIndex.apply(S,arguments)}),class:"btn back-to-index"},[Object(n["createVNode"])(B)]),Object(n["createElementVNode"])("div",i,Object(n["toDisplayString"])(this.$route.params.route),1),Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("button",{class:"btn",onClick:e[1]||(e[1]=function(){return S.addToFavList&&S.addToFavList.apply(S,arguments)})},[S.isRouteInFavList?(Object(n["openBlock"])(),Object(n["createBlock"])(y,{key:0})):(Object(n["openBlock"])(),Object(n["createBlock"])(I,{key:1}))]),Object(n["createElementVNode"])("button",l,[Object(n["createVNode"])(V)]),Object(n["createElementVNode"])("button",u,[Object(n["createVNode"])(R)]),Object(n["createElementVNode"])("button",f,[Object(n["createVNode"])(D)]),Object(n["createElementVNode"])("button",{onClick:e[2]||(e[2]=function(){return S.getRouteInfo&&S.getRouteInfo.apply(S,arguments)}),class:"btn"},[Object(n["createVNode"])(x)])])]),Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("button",{class:Object(n["normalizeClass"])({btn:!0,"forth-route":!0,"btn-active":k.isForthRoutePage}),onClick:e[3]||(e[3]=function(){return S.changeDirection&&S.changeDirection.apply(S,arguments)})}," 去程往"+Object(n["toDisplayString"])(this.endStop),3),Object(n["createElementVNode"])("button",{class:Object(n["normalizeClass"])({btn:!0,"forth-route":!0,"btn-active":!k.isForthRoutePage}),onClick:e[4]||(e[4]=function(){return S.changeDirection&&S.changeDirection.apply(S,arguments)})}," 回程往"+Object(n["toDisplayString"])(this.startStop),3)]),Object(n["createElementVNode"])("div",d,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(k.isForthRoutePage?k.forthRoute:k.returnRoute,(function(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e,class:"stop-item"},[Object(n["createElementVNode"])("div",h,[0!==t.StopStatus?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",b,Object(n["toDisplayString"])(1===t.StopStatus?"未發車":2===t.StopStatus?"交管不停":3===t.StopStatus?"末班駛離":"今日未營運"),1)):0===t.StopStatus&&Math.floor(t.EstimateTime/60)>=1?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",{key:1,class:Object(n["normalizeClass"])({"text-danger":Math.floor(t.EstimateTime/60)<=3})},Object(n["toDisplayString"])(Math.floor(t.EstimateTime/60))+"分 ",3)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",m,"進站中"))]),Object(n["createElementVNode"])("div",v,Object(n["toDisplayString"])(t.StopName.Zh_tw),1),Object(n["createElementVNode"])("div",O,[t.PlateNumb?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",j,[Object(n["createVNode"])(C,{class:Object(n["normalizeClass"])({"background-icon":!0,"bg-melon":1===t.VehicleType})},null,8,["class"]),Object(n["createElementVNode"])("div",g,[1===t.VehicleType?(Object(n["openBlock"])(),Object(n["createBlock"])(z,{key:0,class:"type-icon"})):(Object(n["openBlock"])(),Object(n["createBlock"])(F,{key:1,class:"type-icon"})),Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])({"text-black":1===t.VehicleType})},Object(n["toDisplayString"])(t.PlateNumb),3)])])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])($,{class:"stop-icon"})])])})),128))]),Object(n["createElementVNode"])("div",w,[N,Object(n["createElementVNode"])("div",E,Object(n["toDisplayString"])(this.countNumber)+"秒前更新",1)])])}var S=o("1da1"),B=(o("96cf"),o("4de4"),o("d3b7"),o("e9c4"),o("99af"),o("159b"),o("d81d"),o("07ac"),o("a15b"),{width:"8",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),y=Object(n["createElementVNode"])("path",{d:"M7.256.91a.833.833 0 010 1.18L2.846 6.5l4.41 4.41a.833.833 0 11-1.179 1.18l-5-5a.833.833 0 010-1.18l5-5a.833.833 0 011.179 0z",fill:"#212121"},null,-1),I=[y];function V(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",B,I)}const R={};R.render=V;var D=R,x={width:"20",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C=Object(n["createElementVNode"])("path",{d:"M.833 5.7A4.95 4.95 0 015.875.75 5.492 5.492 0 0110 2.583 5.492 5.492 0 0114.125.75a4.95 4.95 0 015.042 4.95c0 4.91-5.848 8.617-9.167 11.55C6.688 14.292.833 10.613.833 5.7z",fill:"#FFC3AE"},null,-1),z=[C];function F(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",x,z)}const $={};$.render=F;var A=$,L={width:"20",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M=Object(n["createElementVNode"])("path",{d:"M10 17.25c-.591-.524-1.26-1.07-1.966-1.65h-.01c-2.488-2.035-5.309-4.338-6.554-7.097A6.804 6.804 0 01.833 5.7 4.94 4.94 0 015.875.75a5.645 5.645 0 013.05.901c.4.26.762.573 1.075.932a5.297 5.297 0 011.075-.932 5.639 5.639 0 013.05-.901 4.94 4.94 0 015.042 4.95 6.805 6.805 0 01-.637 2.808c-1.245 2.759-4.065 5.06-6.554 7.092l-.009.007a58.356 58.356 0 00-1.966 1.65L10 17.25zM5.875 2.583a3.24 3.24 0 00-2.292.91A3.064 3.064 0 002.667 5.7a5 5 0 00.469 2.042 11.289 11.289 0 002.344 3.183c.908.917 1.953 1.804 2.857 2.55l.76.623.16.13c.245.2.498.408.743.611l.012-.01.005-.005h.006l.008-.007H10.04l.017-.014.037-.03.007-.005.01-.008h.005l.009-.007.608-.5.16-.13.762-.625c.904-.746 1.95-1.632 2.859-2.554a11.275 11.275 0 002.344-3.182 4.986 4.986 0 00.475-2.062 3.064 3.064 0 00-.916-2.2 3.24 3.24 0 00-2.292-.917 3.656 3.656 0 00-2.74 1.202L10 5.38 8.616 3.785a3.656 3.656 0 00-2.741-1.202z",fill:"#FFC3AE"},null,-1),T=[M];function U(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",L,T)}const P={};P.render=U;var H=P,J={width:"18",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z=Object(n["createElementVNode"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9 2.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM.75 9a8.25 8.25 0 1116.5 0A8.25 8.25 0 01.75 9zm9.188-3.562a.937.937 0 11-1.875 0 .937.937 0 011.874 0zM8.25 7.5a.75.75 0 000 1.5v3.75a.75.75 0 001.5 0v-4.5A.75.75 0 009 7.5h-.75z",fill:"#212121"},null,-1),_=[Z];function q(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",J,_)}const K={};K.render=q;var G=K,Q={width:"14",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=Object(n["createElementVNode"])("path",{d:"M5.61 1.436a1.5 1.5 0 012.78 0A5.252 5.252 0 0112.25 6.5v3.523l1.374 2.061A.75.75 0 0113 13.25H9.598a2.626 2.626 0 01-5.196 0H1a.75.75 0 01-.624-1.166l1.374-2.061V6.5a5.252 5.252 0 013.86-5.064zm.329 11.814a1.126 1.126 0 002.122 0H5.939zM7 2.75A3.75 3.75 0 003.25 6.5v3.75a.75.75 0 01-.126.416l-.723 1.084H11.6l-.723-1.084a.75.75 0 01-.126-.416V6.5A3.75 3.75 0 007 2.75z",fill:"#212121"},null,-1),X=[W];function Y(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",Q,X)}const tt={};tt.render=Y;var et=tt,ot={width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nt=Object(n["createElementVNode"])("path",{d:"M.5 2.75L5.75.5l4.5 2.25L14.977.724a.375.375 0 01.523.345V13.25l-5.25 2.25-4.5-2.25-4.727 2.026A.376.376 0 01.5 14.93V2.75zm9.75 11.073V4.382l-.049.021L5.75 2.177v9.441l.049-.021 4.451 2.226z",fill:"#212121"},null,-1),at=[nt];function ct(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",ot,at)}const rt={};rt.render=ct;var it=rt,st={width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},lt=Object(n["createElementVNode"])("path",{d:"M13.932 10.633h-3.397a.75.75 0 100 1.5h1.8A6 6 0 012 8 .75.75 0 00.5 8a7.5 7.5 0 0012.66 5.422v1.328a.75.75 0 101.5 0v-3.375a.75.75 0 00-.728-.742zM8 .5a7.5 7.5 0 00-5.16 2.078V1.25a.75.75 0 00-1.5 0v3.375a.75.75 0 00.75.75h3.375a.75.75 0 000-1.5h-1.8A6 6 0 0114 8a.75.75 0 101.5 0A7.5 7.5 0 008 .5z",fill:"#212121"},null,-1),ut=[lt];function ft(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",st,ut)}const pt={};pt.render=ft;var dt=pt,ht={width:"12",height:"12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},bt=Object(n["createElementVNode"])("circle",{cx:"6",cy:"6",r:"6",transform:"rotate(90 6 6)",fill:"#E8E8E8"},null,-1),mt=[bt];function vt(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",ht,mt)}const Ot={};Ot.render=vt;var jt=Ot,gt={width:"65",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wt=Object(n["createElementVNode"])("rect",{width:"65",height:"22",rx:"8",fill:"#212121"},null,-1),Nt=Object(n["createElementVNode"])("path",{d:"M32.866 26.5a1 1 0 01-1.732 0L28.536 22a1 1 0 01.866-1.5h5.196a1 1 0 01.866 1.5l-2.598 4.5z",fill:"#212121"},null,-1),Et=[wt,Nt];function kt(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",gt,Et)}const St={};St.render=kt;var Bt=St,yt={width:"18",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},It=Object(n["createElementVNode"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 14.25h6a1.5 1.5 0 003 0V3.75a1.5 1.5 0 00-1.5-1.5h-9A1.5 1.5 0 003 3.75v10.5a1.5 1.5 0 003 0zm7.5-3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-8.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zm8.25-7.5h-9v4.5h9v-4.5z",fill:"#FFF"},null,-1),Vt=[It];function Rt(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",yt,Vt)}const Dt={};Dt.render=Rt;var xt=Dt,Ct={width:"14",height:"15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},zt=Object(n["createElementVNode"])("path",{d:"M10 3.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7.525 11.8A3 3 0 114.788 7a.754.754 0 10-.165-1.5 4.507 4.507 0 00.502 9 4.5 4.5 0 003.6-1.8.75.75 0 00-1.2-.9zm5.1 1.2h-.75V9.25a.75.75 0 00-.75-.75H7.698l1.267-3.495v-.232a.825.825 0 000-.135.794.794 0 000-.143 1.05 1.05 0 00-.15-.24.48.48 0 00-.112-.098s0-.045-.06-.06l-3.36-1.935h-.09a.795.795 0 00-.143-.044h-.3a.6.6 0 00-.15.052h-.082L2.5 3.348a.75.75 0 00.36 1.402.75.75 0 00.39-.098l1.673-.974 2.43 1.41-1.418 3.907a.66.66 0 000 .12.435.435 0 000 .135c.014.096.034.191.06.285l.083.113c.02.044.048.085.082.12.032.026.067.049.105.067a.915.915 0 00.143.09.75.75 0 00.255.045h3.75v3.75a.75.75 0 00.75.75h1.5a.75.75 0 100-1.5l-.038.03z",fill:"#000"},null,-1),Ft=[zt];function $t(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",Ct,Ft)}const At={};At.render=$t;var Lt=At,Mt={data:function(){return{isForthRoutePage:!0,startStop:"",endStop:"",forthRoute:"",returnRoute:"",countNumber:0,favRouteList:[],isThisRouteInFavList:!1}},props:["name"],inject:["getAuthorizationHeader"],components:{BackIcon:D,InfoIcon:G,LikeIconActive:A,LikeIconNormal:H,NotificationIcon:et,MapIcon:it,UpdateIcon:dt,CircleIcon:jt,BusPlateNumb:Bt,NormalBus:xt,BarrierFreeBus:Lt},methods:{addToFavList:function(){var t=this;this.isRouteInFavList?(this.favRouteList=this.favRouteList.filter((function(e){return e.RouteUID!==t.$route.params.routeUID})),alert("已從常用路線內移除")):(this.favRouteList.push({RouteUID:this.$route.params.routeUID,City:this.$route.params.city,RouteName:{Zh_tw:this.$route.params.route},startStop:this.startStop,endStop:this.endStop}),alert("已加入至常用路線")),localStorage.setItem("favRouteList",JSON.stringify(this.favRouteList))},backToIndex:function(){this.$router.push("/")},changeDirection:function(){this.isForthRoutePage=!this.isForthRoutePage},getRouteInfo:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var o,n,a,c,r,i,s,l,u,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.countNumber=0,e.next=3,t.axios.get("https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/".concat(t.$route.params.city,"?$select=DepartureStopNameZh%2C%20DestinationStopNameZh&$filter=RouteName%2FZh_tw%20eq%20'").concat(t.$route.params.route,"'&$top=30&$format=JSON"),{headers:t.getAuthorizationHeader()});case 3:return o=e.sent,t.startStop=o.data[0].DepartureStopNameZh,t.endStop=o.data[0].DestinationStopNameZh,e.next=8,t.axios.get("https://ptx.transportdata.tw/MOTC/v2/Bus/".concat("Taipei"===t.$route.params.city?"DisplayStopOfRoute":"StopOfRoute","/City/").concat(t.$route.params.city,"?$filter=RouteName%2FZh_tw%20eq%20'").concat(t.$route.params.route,"'&$top=30&$format=JSON"),{headers:t.getAuthorizationHeader()});case 8:return n=e.sent,t.forthRoute=n.data.filter((function(t){return 0===t.Direction}))[0].Stops,t.returnRoute=n.data.filter((function(t){return 1===t.Direction}))[0].Stops,e.next=13,t.axios.get("https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(t.$route.params.city,"/").concat(t.$route.params.route,"?$format=JSON"),{headers:t.getAuthorizationHeader()});case 13:return a=e.sent,c=a.data.filter((function(t){return 0===t.Direction})),r=a.data.filter((function(t){return 1===t.Direction})),t.forthRoute.forEach((function(t){c.forEach((function(e){t.StopUID===e.StopUID&&Object.assign(t,e)}))})),t.returnRoute.forEach((function(t){r.forEach((function(e){t.StopUID===e.StopUID&&Object.assign(t,e)}))})),e.next=20,t.axios.get("https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeNearStop/City/".concat(t.$route.params.city,"?$select=PlateNumb%20%2C%20StopUID%2C%20BusStatus%2C%20DutyStatus&$filter=RouteName%2FZh_tw%20eq%20%27").concat(t.$route.params.route,"%27&$format=JSON"),{headers:t.getAuthorizationHeader()});case 20:if(i=e.sent,s=i.data.map((function(t){return Object.values(t)[0]})),0===s.length){e.next=28;break}return l=s.map((function(t){return"(PlateNumb eq '".concat(t,"')")})).join("or"),e.next=26,t.axios.get("https://ptx.transportdata.tw/MOTC/v2/Bus/Vehicle/City/".concat(t.$route.params.city,"?$filter=").concat(l,"&$top=30&$format=JSON"),{headers:t.getAuthorizationHeader()});case 26:u=e.sent,i.data.forEach((function(t){u.data.forEach((function(e){t.PlateNumb===e.PlateNumb&&Object.assign(t,e)}))}));case 28:f=i.data.filter((function(t){return 0===t.Direction})),p=i.data.filter((function(t){return 1===t.Direction})),t.forthRoute.forEach((function(t){f.forEach((function(e){t.StopUID===e.StopUID&&Object.assign(t,e)}))})),t.returnRoute.forEach((function(t){p.forEach((function(e){t.StopUID===e.StopUID&&Object.assign(t,e)}))}));case 32:case"end":return e.stop()}}),e)})))()}},computed:{isRouteInFavList:function(){var t=this;return this.favRouteList.some((function(e){return e.RouteUID===t.$route.params.routeUID}))}},mounted:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getRouteInfo();case 3:setInterval((function(){"visible"===document.visibilityState?(t.countNumber+=1,60===t.countNumber&&(t.getRouteInfo(),t.countNumber=0)):t.countNumber=59}),1e3),null!==localStorage.getItem("favRouteList")?t.favRouteList=JSON.parse(localStorage.getItem("favRouteList")):t.favRouteList=[],e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},Tt=(o("b711"),o("55cf"),o("6b0d")),Ut=o.n(Tt);const Pt=Ut()(Mt,[["render",k],["__scopeId","data-v-42514f0a"]]);e["default"]=Pt},"4de4":function(t,e,o){"use strict";var n=o("23e7"),a=o("b727").filter,c=o("1dde"),r=c("filter");n({target:"Array",proto:!0,forced:!r},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"55cf":function(t,e,o){"use strict";o("025c")},"6f53":function(t,e,o){var n=o("83ab"),a=o("e330"),c=o("df75"),r=o("fc6a"),i=o("d1e7").f,s=a(i),l=a([].push),u=function(t){return function(e){var o,a=r(e),i=c(a),u=i.length,f=0,p=[];while(u>f)o=i[f++],n&&!s(a,o)||l(p,t?[o,a[o]]:a[o]);return p}};t.exports={entries:u(!0),values:u(!1)}},"86a3":function(t,e,o){},a15b:function(t,e,o){"use strict";var n=o("23e7"),a=o("e330"),c=o("44ad"),r=o("fc6a"),i=o("a640"),s=a([].join),l=c!=Object,u=i("join",",");n({target:"Array",proto:!0,forced:l||!u},{join:function(t){return s(r(this),void 0===t?",":t)}})},a640:function(t,e,o){"use strict";var n=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&n((function(){o.call(null,e||function(){throw 1},1)}))}},b711:function(t,e,o){"use strict";o("86a3")},b727:function(t,e,o){var n=o("0366"),a=o("e330"),c=o("44ad"),r=o("7b0b"),i=o("07fa"),s=o("65f0"),l=a([].push),u=function(t){var e=1==t,o=2==t,a=3==t,u=4==t,f=6==t,p=7==t,d=5==t||f;return function(h,b,m,v){for(var O,j,g=r(h),w=c(g),N=n(b,m),E=i(w),k=0,S=v||s,B=e?S(h,E):o||p?S(h,0):void 0;E>k;k++)if((d||k in w)&&(O=w[k],j=N(O,k,g),t))if(e)B[k]=j;else if(j)switch(t){case 3:return!0;case 5:return O;case 6:return k;case 2:l(B,O)}else switch(t){case 4:return!1;case 7:l(B,O)}return f?-1:a||u?u:B}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},d81d:function(t,e,o){"use strict";var n=o("23e7"),a=o("b727").map,c=o("1dde"),r=c("map");n({target:"Array",proto:!0,forced:!r},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e9c4:function(t,e,o){var n=o("23e7"),a=o("da84"),c=o("d066"),r=o("2ba4"),i=o("e330"),s=o("d039"),l=a.Array,u=c("JSON","stringify"),f=i(/./.exec),p=i("".charAt),d=i("".charCodeAt),h=i("".replace),b=i(1..toString),m=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,O=/^[\uDC00-\uDFFF]$/,j=function(t,e,o){var n=p(o,e-1),a=p(o,e+1);return f(v,t)&&!f(O,a)||f(O,t)&&!f(v,n)?"\\u"+b(d(t,0),16):t},g=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:g},{stringify:function(t,e,o){for(var n=0,a=arguments.length,c=l(a);n<a;n++)c[n]=arguments[n];var i=r(u,null,c);return"string"==typeof i?h(i,m,j):i}})}}]);
//# sourceMappingURL=about.644f522e.js.map