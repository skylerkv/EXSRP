(function(){"use strict";var i={167:function(i,t,e){var o=e(395),s=e(271),a=e(160),n=e.p+"img/home.09e0db4a.svg",c=e.p+"img/category.b7817485.svg",l=e.p+"img/member.8c9f2878.svg",r=e.p+"img/about_us.54bd6565.svg",u=e.p+"img/vip.f55ff043.svg";const d={class:"top"},p=(0,s.uE)('<div class="item website_name" data-v-64bf8ad4>ECSRP</div><div class="item page_name" data-v-64bf8ad4>Volunteer</div><div class="item page_name" data-v-64bf8ad4>Alerts</div><div class="item page_name" data-v-64bf8ad4>Health home</div><div class="item page_name" data-v-64bf8ad4>Home</div><div class="item page_name" data-v-64bf8ad4>resources</div><div class="item page_name" data-v-64bf8ad4>Forums</div><div class="item botton" data-v-64bf8ad4>Login in</div>',8),v=[p];var m={props:{foo:String},setup(i){const t=i;return console.log(t),(i,t)=>((0,s.wg)(),(0,s.iD)("div",d,v))}},f=e(110);const g=(0,f.Z)(m,[["__scopeId","data-v-64bf8ad4"]]);var _=g,b=e.p+"img/bugfeedback.3cb9bebb.jpg",w=e.p+"img/sharefun.95558d00.png",h=e.p+"img/game.4cba78c6.jpg",y=e.p+"img/friends.858cfce7.png",k=e.p+"img/inbound.97c594eb.webp",O=e.p+"img/study.cb7b8200.jpg",j=e(348);const C={class:"topic_list"},D={class:"list"},H={class:"topic_name"},L=["src"],U={class:"text"};var x={props:{name:{type:String,required:!0},topicList:{type:Array,required:!0,default(){return[{id:"",name:"",image:"",followCount:0}]}}},setup(i){const t=i;return console.log("Topic list",t),(i,e)=>((0,s.wg)(),(0,s.iD)("div",C,[(0,s._)("div",D,[(0,s._)("div",H,(0,j.zw)(t.name),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.topicList,(i=>((0,s.wg)(),(0,s.iD)("div",{class:"topic",key:i.id},[(0,s._)("img",{class:"image",alt:"Vue logo",src:i.image},null,8,L),(0,s._)("div",U,(0,j.zw)(i.name),1)])))),128))])]))}};const A=(0,f.Z)(x,[["__scopeId","data-v-3d6e5575"]]);var F=A;const S=i=>((0,s.dD)("data-v-6180e6d9"),i=i(),(0,s.Cn)(),i),T={class:"topic"},q=["src"],I={class:"info"},W={class:"name"},z={class:"follow_btn"},P=S((()=>(0,s._)("div",{class:"follow"},"+Follow",-1))),Z={class:"follow_info"};var E={props:{topic:{type:Object,required:!0,default(){return{id:"",name:"",image:"",followCount:0}}},width:{type:Number,required:!0}},setup(i){const t=i;return console.log(t),(i,e)=>((0,s.wg)(),(0,s.iD)("div",T,[(0,s._)("img",{class:"image",style:(0,j.j5)({width:t.width+"px"}),alt:"Vue logo",src:t.topic.image},null,12,q),(0,s._)("div",I,[(0,s._)("div",W,(0,j.zw)(t.topic.name),1),(0,s._)("div",z,[P,(0,s._)("div",Z,(0,j.zw)(t.topic.followCount)+"people",1)])])]))}};const M=(0,f.Z)(E,[["__scopeId","data-v-6180e6d9"]]);var V=M;const Y={class:"slideshow"};var B={props:{topicList:{type:Array,required:!0,default(){return[{id:"",name:"",image:"",followCount:0}]}}},setup(i){const t=i,e=18,o=200,n=[...t.topicList,...t.topicList,...t.topicList],c=(0,a.iH)(!1),l=(0,a.iH)(0);function r(){const i=o+e;l.value-=1,l.value<=-n.length*i/2&&(l.value=0)}function u(){c.value=!c.value}function d(){c.value=!1,p()}function p(){1!=c.value?setTimeout((()=>{r(),p()}),10):console.log("If pause is set, scroll is not performed")}return c.value||p(),(i,t)=>((0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("div",{class:"content",onMouseenter:u,onMouseleave:d},[(0,s._)("div",{class:"move",style:(0,j.j5)({left:l.value+"px"})},[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(n,(i=>(0,s.Wm)(V,{topic:i,width:o,key:i.id},null,8,["topic"]))),64))],4)],32)]))}};const K=(0,f.Z)(B,[["__scopeId","data-v-383fafc3"]]);var R=K;const N={class:"content"},G=(0,s._)("div",{class:"page_list"},[(0,s._)("div",{class:"item"},[(0,s._)("img",{class:"icon",src:n,alt:""}),(0,s.Uk)(" ForumHomePage ")]),(0,s._)("div",{class:"item"},[(0,s._)("img",{class:"icon",src:c,alt:""}),(0,s.Uk)(" ForumClassification ")]),(0,s._)("div",{class:"item"},[(0,s._)("img",{class:"icon",src:l,alt:""}),(0,s.Uk)(" ForumMember ")]),(0,s._)("div",{class:"item"},[(0,s._)("img",{class:"icon",src:r,alt:""}),(0,s.Uk)(" About ")]),(0,s._)("div",{class:"item"},[(0,s._)("img",{class:"icon",src:u,alt:""}),(0,s.Uk)(" AdministratorOnly ")])],-1),J={class:"page"},Q=(0,s._)("div",{class:"topic_name"},"Recommended Topic",-1),X={class:"list"},$=(0,s._)("div",{class:"right_space"},null,-1);var ii={setup(i){const t=[b,w,h,y,k,O],e=new Array(6).fill(666).map(((i,e)=>({image:t[e],name:"test",followCount:10*e,id:"B"+e}))),o=new Array(5).fill(666).map(((i,t)=>({image:b,name:"Forum rules and regulations",followCount:10*t,id:"B"+t})));return(i,t)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(_),(0,s._)("div",N,[G,(0,s._)("div",J,[Q,(0,s.Wm)(R,{"topic-list":(0,a.SU)(e)},null,8,["topic-list"]),(0,s._)("div",X,[(0,s.Wm)(F,{name:"Hot Topic","topic-list":(0,a.SU)(o)},null,8,["topic-list"]),(0,s.Wm)(F,{name:"Latest comments","topic-list":(0,a.SU)(o)},null,8,["topic-list"])])]),$])],64))}};const ti=ii;var ei=ti;(0,o.ri)(ei).mount("#app")}},t={};function e(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return i[o](a,a.exports,e),a.exports}e.m=i,function(){var i=[];e.O=function(t,o,s,a){if(!o){var n=1/0;for(u=0;u<i.length;u++){o=i[u][0],s=i[u][1],a=i[u][2];for(var c=!0,l=0;l<o.length;l++)(!1&a||n>=a)&&Object.keys(e.O).every((function(i){return e.O[i](o[l])}))?o.splice(l--,1):(c=!1,a<n&&(n=a));if(c){i.splice(u--,1);var r=s();void 0!==r&&(t=r)}}return t}a=a||0;for(var u=i.length;u>0&&i[u-1][2]>a;u--)i[u]=i[u-1];i[u]=[o,s,a]}}(),function(){e.d=function(i,t){for(var o in t)e.o(t,o)&&!e.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){e.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)}}(),function(){e.p=""}(),function(){var i={143:0};e.O.j=function(t){return 0===i[t]};var t=function(t,o){var s,a,n=o[0],c=o[1],l=o[2],r=0;if(n.some((function(t){return 0!==i[t]}))){for(s in c)e.o(c,s)&&(e.m[s]=c[s]);if(l)var u=l(e)}for(t&&t(o);r<n.length;r++)a=n[r],e.o(i,a)&&i[a]&&i[a][0](),i[a]=0;return e.O(u)},o=self["webpackChunkbbs"]=self["webpackChunkbbs"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(167)}));o=e.O(o)})();
//# sourceMappingURL=app.798f9ad8.js.map