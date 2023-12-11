(function(){"use strict";var e={304:function(e,t,a){var o=a(395),l=a(271),i=a(348),n=a(160);const s={class:"top"},c=(0,l.uE)('<div class="websitename" data-v-540f5032><h1 data-v-540f5032>Eau Claire Student Resilience Platform</h1></div><nav data-v-540f5032><ul class="nav-ul" data-v-540f5032><li class="nav-li" data-v-540f5032><a href="../homepage.html" data-v-540f5032>Home</a></li><li class="nav-li" data-v-540f5032><a href="../emergencyAlerts.html" data-v-540f5032>Alerts</a></li><li class="nav-li" data-v-540f5032><a href="../volunteer.html" data-v-540f5032>Volunteer</a></li><li class="nav-li" data-v-540f5032><a href="../resources.html" data-v-540f5032>Resources</a></li><li class="nav-li" data-v-540f5032><a href="../forum.html" data-v-540f5032>Forum</a></li><li class="nav-li" data-v-540f5032><a href="../planscheck.html" data-v-540f5032>List</a></li><li class="nav-li" data-v-540f5032><a href="../healthmonitor.html" data-v-540f5032>Health</a></li></ul></nav>',2),r=[c];var u={setup(e){return(e,t)=>((0,l.wg)(),(0,l.iD)("div",s,r))}},d=a(110);const v=(0,d.Z)(u,[["__scopeId","data-v-540f5032"]]);var p=v;const m="/bbs/bbs_api";async function w(e,t){const a=m+e;console.log("请求地址",a);const o=await fetch(m+e,{mode:"cors",...t});return o}async function g(e){if(!e.json)return void console.log("isOk fail:Perhaps the request method was forgottenawait",e);const t=await e.json();return t?{ok:"ok"==t.status,message:t.message,data:t.data}:null}a.p,a.p,a.p,a.p,a.p,a.p;async function _(e){const t=await w(`/get_topic.php?name=${e}`);return t}async function f(){const e=await w("/get_all_topic.php");return e}async function h(e){const t=await w(`/follow_topic.php?topic_id=${e}`);return t}async function y(){const e=await w("/get_all_article_unpublished.php");return e}async function k(e){const t=await w(`/allow_publish_article.php?article_id=${e}`);return t}async function b(e){const t=await w(`/delete_article.php?article_id=${e}`);return t}async function D(e,t,a,o){const l=await w(`/create_topic.php?name=${a}&desp=${o}&type=${t}`,{body:e,method:"POST"});return l}async function H(e){const t=await _(e.value.name),{ok:a,data:o}=await g(t);return console.log("获得话题详情",e,a,o),a&&(console.log("话题详情",o),e.value=o),o}const C={updateHotTopic:[]},U="updateTopicList",z="updateTopicFollowStatus";function S(e,t){C[e]?C[e].push(t):C[e]=[t]}function I(e,t){C[e].forEach((e=>{e(t)}))}const W=["onClick"],$={key:0,class:"follow"},j={key:1,class:"follow"},F={class:"follow_info"};var x={props:{topic:Object},emits:["update:topic"],setup(e,{emit:t}){const a=e,s=(0,n.Fl)({get(){return a.topic},set(e){t("update:topic",e)}});async function c(){const e=await h(s.value.id),{ok:t,message:a}=await g(e);if(t){I(U);const e=await H(s);I(z,e)}else alert(a)}return(0,l.bv)((()=>{H(s)})),S(z,(e=>{s.value.id==e.id&&(console.log("Found that the user clicked another follow button on the same topic to update the status of this component"),s.value=e)})),(e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"follow_btn",onClick:(0,o.iM)(c,["stop"])},[(0,n.SU)(s).followed?((0,l.wg)(),(0,l.iD)("div",$,"followed")):((0,l.wg)(),(0,l.iD)("div",j,"+follow")),(0,l._)("div",F,(0,i.zw)((0,n.SU)(s).followers)+"people followed",1)],8,W))}};const O=(0,d.Z)(x,[["__scopeId","data-v-60814ceb"]]);var Y=O;async function M(e,t,a){const o=`/publish_article.php?topic_id=${e}&article_name=${t}&article_content=${a}`,l=await w(o);return l}var Z={props:{onClick:{type:Function,required:!0}},setup(e){const t=e;return(e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:"btn",onClick:a[0]||(a[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,l.WI)(e.$slots,"default")]))}};const q=(0,d.Z)(Z,[["__scopeId","data-v-4cb20c31"]]);var V=q,L=a.p+"img/close.933f4e52.svg";const A={key:0,class:"dialog"},K={class:"title"},P=["src","onClick"],T={class:"slot"};var E={props:{showing:{type:Boolean,required:!0},name:{type:String,required:!0},background:{type:Boolean},height:String,width:String},emits:["update:showing"],setup(e,{emit:t}){const a=e,s=(0,n.Fl)({get(){return a.showing},set(e){t("update:showing",e)}});function c(){s.value=!1}return(e,t)=>(0,n.SU)(s)?((0,l.wg)(),(0,l.iD)("div",A,[(0,l._)("div",{class:"dialog_content",style:(0,i.j5)({width:a.width,height:a.height})},[(0,l._)("div",{class:(0,i.C_)(a.background?"dialog_name":"dialog_name_no_background")},[(0,l._)("div",K,(0,i.zw)(a.name),1),(0,l._)("img",{src:(0,n.SU)(L),class:"close",onClick:(0,o.iM)(c,["stop"])},null,8,P)],2),(0,l._)("div",T,[(0,l.WI)(e.$slots,"default")])],4)])):(0,l.kq)("",!0)}};const R=(0,d.Z)(E,[["__scopeId","data-v-2178a8f7"]]);var N=R;function B(e){const t=new Date(1e3*e),a=new Date,o=new Date(a-864e5),l=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0"),n=`${l}:${i}`,s=`${t.getMonth()+1}-${t.getDate()}`;if(G(t,a))return"今天"+n;if(G(t,o))return"昨天"+n;if(Q(t,a)){const e=J(t,a);return e<7?`${e}天前`:s}return`${t.getFullYear()}-${s}`}function G(e,t){const a=e.getFullYear(),o=(e.getMonth()+1).toString().padStart(2,"0"),l=e.getDate().toString().padStart(2,"0"),i=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");return a===i&&o===n&&l===s}function J(e,t){var a=864e5,o=Math.round(Math.abs((e-t)/a));return o}function Q(e,t){const a=e.getFullYear(),o=t.getFullYear();return a===o}const X=e=>((0,l.dD)("data-v-f2bb3a04"),e=e(),(0,l.Cn)(),e),ee={class:"the_article"},te={class:"col",style:{flex:"1 1 auto"}},ae={class:"article_name"},oe={class:"article_content"},le={class:"col"},ie=X((()=>(0,l._)("div",{class:"comment"},"comment",-1))),ne={class:"comment_list"},se={class:"nickname"},ce={class:"text"},re={class:"create_time"},ue={class:"publish_comment"},de=(0,l.Uk)("publish comment");var ve={props:{article:{type:Object,required:!0,default(){return{id:0,name:"",topic_id:0,author_id:0,content:"",create_time:0}}}},setup(e){const t=e,a=(0,n.iH)([]);async function s(){const e=await w(`/get_comment.php?article_id=${t.article.id}`),{ok:o,data:l,message:i}=await g(e);o?a.value=l:alert(i)}s();const c=(0,n.iH)("");async function r(){const e=await w(`/publish_comment.php?article_id=${t.article.id}&comment_content=${c.value}`),{ok:a,message:o}=await g(e);a?(I(U),s()):alert(o)}return(e,s)=>((0,l.wg)(),(0,l.iD)("div",ee,[(0,l._)("div",te,[(0,l._)("div",ae,(0,i.zw)(t.article.name),1),(0,l._)("div",oe,(0,i.zw)(t.article.content),1)]),(0,l._)("div",le,[ie,(0,l._)("div",ne,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.value,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"comment",key:e.id},[(0,l._)("div",se,(0,i.zw)(e.nickname),1),(0,l._)("div",ce,(0,i.zw)(e.comment),1),(0,l._)("div",re,(0,i.zw)((0,n.SU)(B)(e.create_time)),1)])))),128))]),(0,l._)("div",ue,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>c.value=e)},null,512),[[o.nr,c.value]]),(0,l.Wm)(V,{onClick:r},{default:(0,l.w5)((()=>[de])),_:1})])])]))}};const pe=(0,d.Z)(ve,[["__scopeId","data-v-f2bb3a04"]]);var me=pe;const we=e=>((0,l.dD)("data-v-5516dade"),e=e(),(0,l.Cn)(),e),ge={class:"topic"},_e={class:"title"},fe=["src"],he={class:"info"},ye={class:"name"},ke={class:"count"},be={class:"desp"},De={class:"articleList"},He={class:"count"},Ce={class:"text"},Ue=we((()=>(0,l._)("article",null,null,-1))),ze=(0,l.Uk)("publish articles"),Se={class:"list"},Ie=["onClick"],We={class:"info"},$e={class:"name"},je={class:"desp"},Fe={class:"comment"},xe=(0,l.Uk)("publish the article");var Oe={props:{topic:Object,width:Number},emits:["update:topic"],setup(e,{emit:t}){const a=e;console.log("TopicInfo",a.topic);const s=(0,n.iH)(a.topic),c=(0,n.iH)(!1),r=(0,n.iH)(),u=(0,n.iH)(!1),d=(0,n.iH)(),v=(0,n.iH)();function p(e){s.value=e,t("update:topic",e)}function m(e){return"string"===typeof e?e.slice(0,35):e}async function w(){console.log("话题详情组件 reload",s),H(s)}async function _(){const e=await M(s.value.id,d.value,v.value),{ok:t}=await g(e);t?(u.value=!1,alert("The release is successful. Please wait for the administrator's approval！"),w()):alert("Unable to publish article")}function f(e){r.value=e,c.value=!0}return(0,l.bv)((()=>{w()})),(0,l.YP)((()=>c.value),(()=>{!1===c.value&&w()})),(e,t)=>((0,l.wg)(),(0,l.iD)("div",ge,[(0,l._)("div",_e,[(0,l._)("img",{class:"image",style:(0,i.j5)({width:a.width+"px"}),alt:"Vue logo",src:s.value.image},null,12,fe),(0,l._)("div",he,[(0,l._)("div",ye,(0,i.zw)(s.value.name),1),(0,l._)("div",ke,(0,i.zw)(s.value.article_count)+" articles",1),(0,l._)("div",be,(0,i.zw)(s.value.desp),1),(0,l.Wm)(Y,{topic:s.value,"onUpdate:topic":p},null,8,["topic"])])]),(0,l._)("div",De,[(0,l._)("div",He,[(0,l._)("div",Ce,[(0,l.Uk)((0,i.zw)(s.value.article_count)+" ",1),Ue]),(0,l.Wm)(V,{onClick:t[0]||(t[0]=e=>u.value=!0)},{default:(0,l.w5)((()=>[ze])),_:1})]),(0,l._)("div",Se,[(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.value.articles,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"article",onClick:t=>f(e),key:e.name},[(0,l._)("div",We,[(0,l._)("div",$e,(0,i.zw)(m(e.name)),1),(0,l._)("div",je,(0,i.zw)(m(e.content)),1)]),(0,l._)("div",Fe,(0,i.zw)(e.comments.length)+"comments",1)],8,Ie)))),128))])])]),(0,l.Wm)(N,{name:"publish article",showing:u.value,"onUpdate:showing":t[3]||(t[3]=e=>u.value=e)},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"please enter the name of article","onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e)},null,512),[[o.nr,d.value]]),(0,l.wy)((0,l._)("textarea",{rows:"6",placeholder:"please enter the content of article","onUpdate:modelValue":t[2]||(t[2]=e=>v.value=e)},null,512),[[o.nr,v.value]]),(0,l.Wm)(V,{onClick:_},{default:(0,l.w5)((()=>[xe])),_:1})])),_:1},8,["showing"]),(0,l.Wm)(N,{name:"article",showing:c.value,"onUpdate:showing":t[4]||(t[4]=e=>c.value=e),width:"80vw",height:"80vh"},{default:(0,l.w5)((()=>[(0,l.Wm)(me,{article:r.value},null,8,["article"])])),_:1},8,["showing"])]))}};const Ye=(0,d.Z)(Oe,[["__scopeId","data-v-5516dade"]]);var Me=Ye;const Ze={class:"topic_list"},qe={class:"topic_name"},Ve={class:"list"},Le=["onClick"],Ae=["src"],Ke={class:"name"},Pe={class:"followers"},Te={class:"page_us"};var Ee={props:{name:{type:String,required:!0},topicList:{type:Array,required:!0,default(){return[{id:"",name:"",image:"",followers:""}]}}},setup(e){const t=e,a=(0,n.iH)(),s=(0,n.iH)(!1);function c(e){console.log("list of topic onclick",e),a.value=e,s.value=!0}return console.log("list of topic",t),(e,n)=>((0,l.wg)(),(0,l.iD)("div",Ze,[(0,l._)("div",qe,(0,i.zw)(t.name),1),(0,l._)("div",Ve,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.topicList,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"topic",onClick:(0,o.iM)((t=>c(e)),["stop"]),key:e.id},[(0,l._)("img",{class:"image",alt:"Vue logo",src:e.image},null,8,Ae),(0,l._)("div",Ke,(0,i.zw)(e.name),1),(0,l._)("div",Pe,(0,i.zw)(e.followers)+"people followed",1)],8,Le)))),128))]),(0,l.Wm)(N,{name:"topic",showing:s.value,"onUpdate:showing":n[0]||(n[0]=e=>s.value=e),width:"70vw",height:"90vh"},{default:(0,l.w5)((()=>[(0,l._)("div",Te,[(0,l.Wm)(Me,{topic:a.value},null,8,["topic"])])])),_:1},8,["showing"])]))}};const Re=(0,d.Z)(Ee,[["__scopeId","data-v-0f97bcaa"]]);var Ne=Re;const Be={class:"comment_list"},Ge={class:"comment_name"},Je={class:"list"},Qe={class:"text"};var Xe={props:{name:{type:String,required:!0},commentList:{type:Array,required:!0,default(){return[{article_id:"4",comment:"try to send a comment",create_time:"1696346873",id:"6",nickname:"hsiui",user_id:"7"}]}}},setup(e){const t=e;return(e,a)=>((0,l.wg)(),(0,l.iD)("div",Be,[(0,l._)("div",Ge,(0,i.zw)(t.name),1),(0,l._)("div",Je,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.commentList,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"comment",key:e.id},[(0,l._)("div",Qe,(0,i.zw)(e.comment),1)])))),128))])]))}};const et=(0,d.Z)(Xe,[["__scopeId","data-v-32cb530a"]]);var tt=et;const at=["onClick"],ot=["src"],lt={class:"info"},it={class:"name"},nt={class:"page_us"};var st={props:{topic:{type:Object,required:!0,default(){return{id:"",name:"",image:"",followers:""}}},width:{type:Number,required:!0}},setup(e){const t=e,a=(0,n.iH)(t.topic);async function s(){H(a)}function c(e){a.value=e}(0,l.bv)((()=>{s()}));const r=(0,n.iH)(!1);function u(){r.value=!0}return console.log(t),(e,n)=>((0,l.wg)(),(0,l.iD)("div",{class:"topic",onClick:(0,o.iM)(u,["stop"])},[(0,l._)("img",{class:"image",style:(0,i.j5)({width:t.width+"px"}),alt:"Vue logo",src:t.topic.image},null,12,ot),(0,l._)("div",lt,[(0,l._)("div",it,(0,i.zw)(t.topic.name),1),(0,l.Wm)(Y,{topic:a.value,"onUpdate:topic":c},null,8,["topic"])]),(0,l.Wm)(N,{name:"topic",showing:r.value,"onUpdate:showing":n[0]||(n[0]=e=>r.value=e),width:"70vw",height:"90vh"},{default:(0,l.w5)((()=>[(0,l._)("div",nt,[(0,l.Wm)(Me,{topic:a.value,"onUpdate:topic":c},null,8,["topic"])])])),_:1},8,["showing"])],8,at))}};const ct=(0,d.Z)(st,[["__scopeId","data-v-6a0827c9"]]);var rt=ct;const ut={class:"slideshow"};var dt={props:{topicList:{type:Array,required:!0,default(){return[{id:"",name:"",image:"",followers:""}]}}},setup(e){const t=e,a=18,o=200,s=(0,n.Fl)((()=>[...t.topicList,...t.topicList])),c=(0,n.iH)(!1),r=(0,n.iH)(0);function u(){const e=o+a;r.value-=1,r.value<=-s.value.length*e/2&&(r.value=0)}function d(){c.value=!c.value}function v(){c.value=!1,p()}function p(){1!=c.value?requestAnimationFrame((()=>{u(),p()})):console.log("If pause is set, scroll is not performed")}return c.value||p(),(e,t)=>((0,l.wg)(),(0,l.iD)("div",ut,[(0,l._)("div",{class:"show",onMouseenter:d,onMouseleave:v},[(0,l._)("div",{class:"move",style:(0,i.j5)({left:r.value+"px"})},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(s),(e=>((0,l.wg)(),(0,l.j4)(rt,{topic:e,width:o,key:e.name},null,8,["topic"])))),128))],4)],32)]))}};const vt=(0,d.Z)(dt,[["__scopeId","data-v-a9e82028"]]);var pt=vt;const mt=e=>((0,l.dD)("data-v-48d2802e"),e=e(),(0,l.Cn)(),e),wt={class:"home_contrainer"},gt=mt((()=>(0,l._)("div",{class:"topic_name"},"Recommended topic",-1))),_t={class:"list"};var ft={setup(e){const t=(0,n.iH)([]),a=(0,n.iH)([]);async function o(){i(),c(),r()}async function i(){const e=await w("/get_recommend_topic.php");console.log("获得推荐的话题",e);const{ok:a,message:o,data:l}=await g(e);a?(console.log("推荐的话题",l),t.value=l):alert(o)}(0,l.bv)((()=>{o()})),S(U,(()=>{c(),r()}));const s=(0,n.iH)([]);async function c(){const e=await w("/get_hot_topic.php");console.log("获得热门的话题",e);const{ok:t,message:o,data:l}=await g(e);t?(console.log("热门的话题",l),a.value=l):alert(o)}async function r(){const e=await w("/get_latest_comment.php");console.log("获得最新的评论",e);const{ok:t,message:a,data:o}=await g(e);t?(console.log("最新的评论",o),s.value=o):alert(a)}return(e,o)=>((0,l.wg)(),(0,l.iD)("div",wt,[gt,(0,l.Wm)(pt,{"topic-list":t.value},null,8,["topic-list"]),(0,l._)("div",_t,[(0,l.Wm)(Ne,{name:"Hot topic","topic-list":a.value},null,8,["topic-list"]),(0,l.Wm)(tt,{name:"Latest comments","comment-list":s.value},null,8,["comment-list"])])]))}};const ht=(0,d.Z)(ft,[["__scopeId","data-v-48d2802e"]]);var yt=ht,kt=a.p+"img/abss.7812f1c7.jpg";const bt={class:"user"},Dt={class:"head"},Ht=["src"],Ct={class:"info"},Ut={class:"name"},zt={key:0,class:"follow"},St={key:1,class:"follow"},It={class:"follow_info"};var Wt={props:{user:{name:String,headimage:String,followers:Number,followed:Number}},emits:["update:user"],setup(e,{emit:t}){const a=e;console.log(a);const o=(0,n.Fl)({get:()=>a.user,set:e=>{t("update:user",e)}});async function s(){const e=await w(`/follow_user.php?id=${o.value.id}`);console.log("Follow an account",e,o.value.followed);const{ok:t,message:a}=await g(e);t?"取消关注成功"==a?(o.value.followed=!1,o.value.followers=o.value.followers-1):"关注成功"==a?(o.value.followed=!0,o.value.followers=o.value.followers+1):alert(a):alert(a)}return console.log("data of account",o.value),(e,t)=>((0,l.wg)(),(0,l.iD)("div",bt,[(0,l._)("div",Dt,[(0,l._)("img",{class:"image",style:(0,i.j5)({width:a.width+"px"}),alt:"Vue logo",src:a.user.headimage},null,12,Ht)]),(0,l._)("div",Ct,[(0,l._)("div",Ut,(0,i.zw)(a.user.name),1),(0,l._)("div",{class:"follow_btn",onClick:s},[a.user.followed?((0,l.wg)(),(0,l.iD)("div",zt,"followed")):((0,l.wg)(),(0,l.iD)("div",St,"+follow")),(0,l._)("div",It,(0,i.zw)(a.user.followers)+"people followed",1)])])]))}};const $t=(0,d.Z)(Wt,[["__scopeId","data-v-489e18c3"]]);var jt=$t;const Ft={class:"member_contrainer"},xt={class:"members"};var Ot={setup(e){const t=(0,n.iH)([].map(((e,t)=>(console.log("生成测试用户",e,t),{name:e,headimage:kt,followers:10*t,id:t}))));async function a(){const e=await w("/alluser.php");console.log("获得网站上所有用户的账号信息",e);const{ok:a,message:o,data:l}=await g(e);a?(console.log("所有用户",l),t.value=l.map((e=>({id:e.id,name:e.nickname,headimage:kt,followers:e.followers,followed:e.followed})))):alert("login failure:"+o)}return a(),(e,a)=>((0,l.wg)(),(0,l.iD)("div",Ft,[(0,l._)("div",xt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value,(e=>((0,l.wg)(),(0,l.j4)(jt,{user:e,key:e.id},null,8,["user"])))),128))])]))}};const Yt=(0,d.Z)(Ot,[["__scopeId","data-v-2fe80be4"]]);var Mt=Yt;const Zt={class:"category_contrainer"},qt={class:"categorys"},Vt={class:"category_name"},Lt={class:"topic_list"};var At={setup(e){const t=["Inbound","Alerts","Resources","Health","Volunteers"],a=(0,n.iH)([]);async function o(){const e=await f(),{ok:t,data:o}=await g(e);t&&(a.value=s(o))}function s(e){const t={};return e.forEach((e=>{t[e.type]?t[e.type].push(e):t[e.type]=[e]})),t}return o(),(e,o)=>((0,l.wg)(),(0,l.iD)("div",Zt,[(0,l._)("div",qt,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(t,(e=>(0,l._)("div",{class:"category",key:e},[(0,l._)("div",Vt,(0,i.zw)(e),1),(0,l._)("div",Lt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.value[e],(e=>((0,l.wg)(),(0,l.j4)(rt,{topic:e,key:e.id,width:240},null,8,["topic"])))),128))])]))),64))])]))}};const Kt=(0,d.Z)(At,[["__scopeId","data-v-2ba24da4"]]);var Pt=Kt;const Tt={class:"page_us"};var Et={setup(e){const t=(0,n.iH)({name:"Indbound"});return(e,a)=>((0,l.wg)(),(0,l.iD)("div",Tt,[(0,l.Wm)(Me,{topic:t.value},null,8,["topic"])]))}};const Rt=(0,d.Z)(Et,[["__scopeId","data-v-1b8bfba8"]]);var Nt=Rt;const Bt=e=>((0,l.dD)("data-v-151ce893"),e=e(),(0,l.Cn)(),e),Gt={class:"manager"},Jt={class:"tool"},Qt=(0,l.Uk)("create new topic"),Xt=Bt((()=>(0,l._)("div",{class:"table_name"},"User-created list of articles to be reviewed",-1))),ea={class:"article_table"},ta=(0,l.uE)('<div class="head" data-v-151ce893><div class="item" data-v-151ce893>ID</div><div class="item" data-v-151ce893>author</div><div class="item" data-v-151ce893>name</div><div class="item" data-v-151ce893>content</div><div class="item" data-v-151ce893>create time</div><div class="item" data-v-151ce893>operation</div></div>',1),aa={class:"list"},oa={class:"item"},la={class:"item"},ia={class:"item"},na={class:"item"},sa={class:"item"},ca={class:"item operation"},ra=(0,l.Uk)("publish this article"),ua=(0,l.Uk)("delete this article"),da=Bt((()=>(0,l._)("label",{for:"image"},"Choose a picture of the topic：",-1))),va=Bt((()=>(0,l._)("option",{value:"Alerts"},"Alerts",-1))),pa=Bt((()=>(0,l._)("option",{value:"Volunteers"},"Volunteers",-1))),ma=Bt((()=>(0,l._)("option",{value:"Resources"},"Resources",-1))),wa=Bt((()=>(0,l._)("option",{value:"Health",selected:""},"Health",-1))),ga=[va,pa,ma,wa],_a=(0,l.Uk)("Create a new topic immediately");var fa={setup(e){const t=(0,n.iH)(!1),a=(0,n.iH)(""),s=(0,n.iH)(""),c=(0,n.iH)(""),r=(0,n.iH)(new FormData);function u(e){r.value.append("image",e.target.files[0])}async function d(){const e=await D(r.value,c.value,a.value,s.value),{ok:o,message:l}=await g(e);o?(console.log("创建话题结果",l),t.value=!1):alert(l)}const v=(0,n.iH)();async function p(){const e=await y(),{ok:t,data:a,message:o}=await g(e);t?(console.log("获得未发布的所有文章",a),v.value=a):alert(o)}async function m(e){const t=await k(e),{ok:a,message:o}=await g(t);a?p():alert(o)}async function w(e){const t=await b(e),{ok:a,message:o}=await g(t);a?p():alert(o)}return p(),(e,r)=>((0,l.wg)(),(0,l.iD)("div",Gt,[(0,l._)("div",Jt,[(0,l.Wm)(V,{onClick:r[0]||(r[0]=e=>t.value=!0)},{default:(0,l.w5)((()=>[Qt])),_:1})]),Xt,(0,l._)("div",ea,[ta,(0,l._)("div",aa,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.value,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"article",key:e.id},[(0,l._)("div",oa,(0,i.zw)(e.id),1),(0,l._)("div",la,(0,i.zw)(e.author_name),1),(0,l._)("div",ia,(0,i.zw)(e.name),1),(0,l._)("div",na,(0,i.zw)(e.content),1),(0,l._)("div",sa,(0,i.zw)((0,n.SU)(B)(e.create_time)),1),(0,l._)("div",ca,[(0,l.Wm)(V,{onClick:t=>m(e.id)},{default:(0,l.w5)((()=>[ra])),_:2},1032,["onClick"]),(0,l.Wm)(V,{onClick:t=>w(e.id)},{default:(0,l.w5)((()=>[ua])),_:2},1032,["onClick"])])])))),128))])]),(0,l.Wm)(N,{name:"create new topic",noBackground:!0,showing:t.value,"onUpdate:showing":r[4]||(r[4]=e=>t.value=e)},{default:(0,l.w5)((()=>[da,(0,l._)("input",{type:"file",name:"image",id:"image",onChange:u,required:""},null,32),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Please enter the topic name","onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e)},null,512),[[o.nr,a.value]]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Please enter the topic brief","onUpdate:modelValue":r[2]||(r[2]=e=>s.value=e)},null,512),[[o.nr,s.value]]),(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":r[3]||(r[3]=e=>c.value=e)},ga,512),[[o.bM,c.value]]),(0,l.Wm)(V,{onClick:d},{default:(0,l.w5)((()=>[_a])),_:1})])),_:1},8,["showing"])]))}};const ha=(0,d.Z)(fa,[["__scopeId","data-v-151ce893"]]);var ya=ha,ka=a.p+"img/home.09e0db4a.svg",ba=a.p+"img/category.b7817485.svg",Da=a.p+"img/member.8c9f2878.svg",Ha=a.p+"img/about_us.54bd6565.svg",Ca=a.p+"img/vip.f55ff043.svg";async function Ua(){const e=await w("/get_unread_message.php");return console.log("获得未读取的消息",e),e}async function za(){const e=await w("/mark_message_has_read.php");return console.log("获得未读取的消息",e),e}const Sa={class:"app_content"},Ia={class:"page_list"},Wa=["onClick"],$a=["src","alt"],ja={class:"message_list"},Fa=(0,l.Uk)("unread message"),xa={key:0,class:"red_dot"},Oa={class:"top_menu",style:{width:"420px"}},Ya={key:0,class:"messages"},Ma={class:"content"},Za={class:"create_time"},qa={key:1,class:"empty_messages"},Va=["onClick"],La={class:"page"};var Aa={setup(e){const t=(0,n.iH)(yt),a=[{name:"ForumHomePage",src:ka,component:yt},{name:"Classification",src:ba,component:Pt},{name:"ForumMember",src:Da,component:Mt},{name:"About",src:Ha,component:Nt},{name:"AdministratorOnly",src:Ca,component:ya}],s=(0,n.iH)(a[0].name);function c(e){console.log("页面",e),s.value=e.name,t.value=e.component}const r=(0,n.iH)([]),u=(0,n.iH)();async function d(){const e=await Ua("/get_unread_message.php");console.log("获得未读取的消息",e);const{ok:t,data:a}=await g(e);t&&(r.value=a)}async function v(){const e=await za();console.log("标记消息已读",e);const{ok:t,message:a}=await g(e);t?d():alert("Mark message read failed:"+a)}return S("Logged in",(()=>{d(),u.value=setInterval((()=>{d()}),5e3)})),S("Logged out",(()=>{u.value&&clearInterval(u.value)})),(0,l.Ah)((()=>{u.value&&clearInterval(u.value)})),(e,u)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(p),(0,l._)("div",Sa,[(0,l._)("div",Ia,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(a,(e=>(0,l._)("div",{class:(0,i.C_)({item:!0,choosed:s.value===e.name}),key:e.name,onClick:t=>c(e)},[(0,l._)("img",{class:"icon",src:e.src,alt:e.name},null,8,$a),(0,l.Uk)(" "+(0,i.zw)(e.name),1)],10,Wa))),64)),(0,l._)("div",ja,[(0,l._)("a",null,[Fa,r.value.length>0?((0,l.wg)(),(0,l.iD)("div",xa)):(0,l.kq)("",!0)]),(0,l._)("div",Oa,[r.value.length>0?((0,l.wg)(),(0,l.iD)("div",Ya,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.value,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"message",key:e.id},[(0,l._)("div",Ma,(0,i.zw)(e.content),1),(0,l._)("div",Za,(0,i.zw)((0,n.SU)(B)(e.create_time)),1)])))),128))])):((0,l.wg)(),(0,l.iD)("div",qa,"(No unread messages)")),(0,l._)("div",{class:"mark_all_read",onClick:(0,o.iM)(v,["stop"])},"Mark all read",8,Va)])])]),(0,l._)("div",La,[((0,l.wg)(),(0,l.j4)((0,l.LL)(t.value)))])])],64))}};const Ka=Aa;var Pa=Ka;(0,o.ri)(Pa).mount("#app")}},t={};function a(o){var l=t[o];if(void 0!==l)return l.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,l,i){if(!o){var n=1/0;for(u=0;u<e.length;u++){o=e[u][0],l=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||n>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var r=l();void 0!==r&&(t=r)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,l,i]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,i,n=o[0],s=o[1],c=o[2],r=0;if(n.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(c)var u=c(a)}for(t&&t(o);r<n.length;r++)i=n[r],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},o=self["webpackChunkbbs"]=self["webpackChunkbbs"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(304)}));o=a.O(o)})();
//# sourceMappingURL=app.2016a7b3.js.map