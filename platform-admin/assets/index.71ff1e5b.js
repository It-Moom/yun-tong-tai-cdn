var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var i in r||(r={}))n.call(r,i)&&o(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&o(e,i,r[i]);return e};import{l as i,a as m,D as c,V as d,c as s,R as l,H as p,b as u,i as h,d as f,P as g,h as _,e as y}from"./vendor.23ac6402.js";let M;const A={},P=function(e,t){if(!t||0===t.length)return e();if(void 0===M){const e=document.createElement("link").relList;M=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`https://cdn.jsdelivr.net/gh/it-moom/yun-tong-tai-cdn@1.2.0/platform-admin/${e}`)in A)return;A[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":M,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},v={admin:{name:"平台管理后台",adminTitle:"云桐泰平台端",authLoginApi:"/platform/auth/login",authInfoApi:"/platform/auth/info",userFields:["id","username","name","email","phone","avatar"]},"merchant-admin":{name:"商户管理后台",adminTitle:"云桐泰商户端",authLoginApi:"/merchant/admin/auth/login",authInfoApi:"/merchant/admin/auth/info",userFields:["id","username","name","phone","avatar"]}};function E(){return"admin"}function x(e="admin"){return v[e]}function b(e,t,n,a,o,r,i,m){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),a&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):o&&(c=m?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var s=d.render;d.render=function(e,t){return c.call(t),s(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:d}}const j={};var I=b({name:"App",render:e=>e("router-view"),async created(){null==this.$route.name&&await new Promise((e=>{const t=this.$watch((()=>this.$route.name),(()=>{t(),e()}))}));const e="admin";if(x(e)){const t=`${i.exports.upperFirst(i.exports.camelCase(e))}/Login`;this.$route.name!==t&&this.$store.dispatch("auth/getUserInfo")}}},undefined,undefined,!1,S,null,null,null);function S(e){for(let t in j)this[t]=j[t]}var T=function(){return I.exports}();function O(e="admin"){return m.get(`${i.exports.camelCase(e)}Token`)}const k=c.create({baseURL:"https://api.jipinwulian.com",method:"POST"});Reflect.defineProperty(d.prototype,"$axios",{get:()=>k}),k.interceptors.request.use((e=>{const t=O();return t&&e.url!==x().authLoginApi&&(e.headers.Authorization=t),e}),(e=>{console.error(e)})),k.interceptors.response.use((e=>{const t=e.data||{};if(t instanceof Blob)return e;if(t&&!t.success){const{message:e,code:n}=t;if(40005===n){const e="admin",t=`${i.exports.upperFirst(i.exports.camelCase(e))}/Login`;k.vm.$route.name!==t&&k.vm.$dialog.confirm({type:"error",title:"提示",text:"登录信息已失效, 请重新登录 !",actions:[{text:"返回登录",color:"primary",key:!0,handler:async()=>{k.vm.$router.push({name:t})}}]})}else if(e){let n=`<div class="font-weight-black">${e}</div>`;t.errors&&t.errors.length&&(n+=`<ol class="mt-2 mb-0">${t.errors.reduce(((e,t)=>e+`<li><i>${t}</i></li>`),"")}</ol>`),k.vm.$dialog.notify.error(n,{position:"top-right",timeout:5e3})}return Promise.reject(t)}return t}),(e=>{k.vm.$dialog.notify.error(e.message,{position:"top-right",timeout:5e3})}));const $={info:{}};i.exports.entries(v).forEach((([e,t])=>{const n=$[e]={};n.token=O(e),t.userFields.forEach((e=>{n[e]=null}))}));var L={state:$,mutations:{setInfo(e){const t=e.admin;e.info=t||{}},setToken(e,t){const n="admin";e.admin.token=t,function(e,t){m.set(`${i.exports.camelCase(t)}Token`,e)}(t,n)},removeToken(e){const t="admin";e.admin.token=null,function(e="admin"){m.remove(`${i.exports.camelCase(e)}Token`)}(t)},setUserInfo(e,t){const n="admin",a=e.admin,o=x(n).userFields;i.exports.entries(i.exports.pick(t,o)).forEach((([e,t])=>{a[e]=t}))},removeUserInfo(e){const t="admin",n=e.admin;x(t).userFields.forEach((e=>{n[e]=null}))}},actions:{login({commit:e,dispatch:t},n){const a=x();return a?k.post(a.authLoginApi,n).then((({data:n})=>{e("setToken",n.accessToken),t("getUserInfo")})):Promise.reject(new Error("未找到登录 API"))},logout({commit:e}){e("removeToken"),e("removeUserInfo")},getUserInfo({state:e,commit:t}){const n="admin",a=e.admin;if(a&&a.token){const e=x(n);e&&k.get(e.authInfoApi).then((({data:e})=>{t("setUserInfo",e)}))}}}},R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});function w(e){return"[object Object]"===Object.prototype.toString.call(e)}function D(...e){return e.length>1?function(e,t){const n=`${e}`;if(null==t)return void localStorage.removeItem(n);const a=typeof t,o={type:a,value:t};switch(a){case"boolean":case"number":case"string":break;case"bigint":o.value=`${t}`;break;case"object":Array.isArray(t)||w(t)||(o.value={})}localStorage.setItem(n,JSON.stringify(o))}(...e):function(e){const t=`${e}`,n=localStorage.getItem(t);let a=null,o=null;try{a=JSON.parse(n)}catch(r){}if(null!==a&&a.type)switch(a.type){case"boolean":case"number":case"string":case"object":o=a.value;break;case"bigint":o=BigInt(a.value)}return o}(...e)}const{white:C,black:V}=s.shades,U={text:{primary:l(Object.assign(p(V),{a:.87}))}},F={text:{primary:C}};d.use(u);var z=new u({theme:{dark:D("theme.dark")||!1,themes:{light:{settings:U},dark:{settings:F}}}});var N={state:{dark:D("theme.dark")||!1,loading:!1},mutations:{updateDark:(e,t)=>{D("theme.dark",z.framework.theme.dark=e.dark=!!t)},updateLoading:(e,t)=>{e.loading=t}},actions:{}},W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});d.use(h);const q={"./modules/auth.js":R,"./modules/theme.js":W},B=Object.entries(q).reduce(((e,[t,n])=>{const a=t.split("/").reverse()[0].split(".")[0];return Object.assign(e,{[a]:r({namespaced:!0},n.default)})}),{}),J=new h.Store({strict:!1,modules:B}),X=()=>P((()=>import("./index.dad860f0.js")),["assets/index.dad860f0.js","assets/index.f28d5f8f.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.esm.3b94485e.js"]),H={render:e=>e("router-view")};var K=[{path:"/",component:H,children:[{name:"Admin/Default",path:"",meta:{title:"平台管理后台",fullScreen:!0,hidden:!0},component:X},{name:"Admin/Login",path:"login",meta:{title:"平台管理后台登录",fullScreen:!0,hidden:!0},component:()=>P((()=>import("./index.daf1f6de.js")),["assets/index.daf1f6de.js","assets/index.c6a2c98a.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css"])},...[{path:"platform-manage",name:"Admin/PlatformManage",meta:{title:"平台管理",icon:"mdi-shield-lock-outline"},component:X,children:[{name:"Admin/PlatformManage/PlatformAdminManage",path:"platform-admin-manage",meta:{title:"平台管理员",fullScreen:!0},component:()=>P((()=>import("./index.b39d391b.js")),["assets/index.b39d391b.js","assets/mobile.d11c903b.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/dict.25022818.js"])}]}],...[{path:"merchant-manage",name:"Admin/MerchantManage",meta:{title:"商户管理",icon:"mdi-shield-lock-outline"},component:X,children:[{name:"Admin/MerchantManage/Index",path:"index",meta:{title:"商户管理",fullScreen:!0},component:()=>P((()=>import("./index.e8a75b56.js")),["assets/index.e8a75b56.js","assets/mobile.d11c903b.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/dict.25022818.js"])},{name:"Admin/MerchantManage/MerchantDealerManage",path:"merchant-dealer-manage",meta:{title:"零售商管理",fullScreen:!0},component:()=>P((()=>import("./index.0f0f3ac7.js")),["assets/index.0f0f3ac7.js","assets/index.cfb815bd.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/mobile.d11c903b.js","assets/dict.25022818.js"])}]}],...[{path:"payment-manage",name:"Admin/PaymentManage",meta:{title:"支付管理",icon:"mdi-shield-lock-outline"},component:X,children:[{name:"Admin/PaymentManage/PaymentConfManage",path:"payment-conf-manage",meta:{title:"支付配置管理",fullScreen:!0},component:()=>P((()=>import("./index.78ea8b51.js")),["assets/index.78ea8b51.js","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/dict.25022818.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/index.7d762579.js","assets/index.c201d3dc.css"])},{name:"Admin/PaymentManage/PaymentConfWxpayManage",path:"payment-conf-wxpay-manage",meta:{title:"微信支付配置管理",fullScreen:!0},component:()=>P((()=>import("./index.41328e26.js")),["assets/index.41328e26.js","assets/dict.25022818.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js"])},{name:"Admin/PaymentManage/PaymentConfAlipayManage",path:"payment-conf-alipay-manage",meta:{title:"支付宝支付配置管理",fullScreen:!0},component:()=>P((()=>import("./index.013dcda2.js")),["assets/index.013dcda2.js","assets/dict.25022818.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js"])}]}],...[{path:"trade-manage",name:"Admin/TradeManage",meta:{title:"交易管理",icon:"mdi-shield-lock-outline"},component:X,children:[{name:"Admin/TradeManage/OrderManage",path:"order-manage",meta:{title:"订单管理",fullScreen:!0},component:()=>P((()=>import("./index.30de9c9a.js")),["assets/index.30de9c9a.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/dict.25022818.js"])}]}]]}],G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",AdminLayout:X,EmptyComponent:H,default:K});var Q=[{path:"/",component:H,children:[{name:"MerchantAdmin/Default",path:"",meta:{title:"商户管理后台",fullScreen:!0,hidden:!0},component:X},{name:"MerchantAdmin/Login",path:"login",meta:{title:"商户管理后台登录",fullScreen:!0,hidden:!0},component:()=>P((()=>import("./index.daf1f6de.js")),["assets/index.daf1f6de.js","assets/index.c6a2c98a.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css"])},...[{path:"dealer-manage",name:"MerchantAdmin/DealerManage",meta:{title:"零售商管理",icon:"mdi-shield-lock-outline"},component:X,children:[{name:"MerchantAdmin/DealerManage/Index",path:"index",meta:{title:"零售商管理",fullScreen:!0},component:()=>P((()=>import("./index.b70cf117.js")),["assets/index.b70cf117.js","assets/index.3c970265.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/mobile.d11c903b.js","assets/dict.25022818.js"])}]}],...[{path:"product-manage",name:"MerchantAdmin/ProductManage",meta:{title:"商品管理",icon:"mdi-shield-lock-outline"},component:X,children:[{name:"MerchantAdmin/ProductManage/ProductCategoryManage",path:"product-category-manage",meta:{title:"商品分类管理",fullScreen:!0},component:()=>P((()=>import("./index.25d10ef1.js")),["assets/index.25d10ef1.js","assets/index.908a062b.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js"])},{name:"MerchantAdmin/ProductManage/Index",path:"index",meta:{title:"商品管理",fullScreen:!0},component:()=>P((()=>import("./index.a6c30cc4.js")),["assets/index.a6c30cc4.js","assets/index.3e3d76ab.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/index.7d762579.js","assets/index.c201d3dc.css","assets/dict.25022818.js"])},{name:"MerchantAdmin/ProductManage/ProductPropertyManage",path:"product-property-manage/:productCategoryId",meta:{title:"商品属性管理",fullScreen:!0,hidden:!0},component:()=>P((()=>import("./index.7c9eb2c4.js")),["assets/index.7c9eb2c4.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/dict.25022818.js"])},{path:"product-property-manage",meta:{hidden:!0},redirect:{name:"MerchantAdmin/ProductManage/ProductCategoryManage"}},{name:"MerchantAdmin/ProductManage/ProductPropertyValueManage",path:"product-property-value-manage/:productId",meta:{title:"商品属性值管理",fullScreen:!0,hidden:!0},component:()=>P((()=>import("./index.581e430a.js")),["assets/index.581e430a.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js"])},{path:"product-property-value-manage",meta:{hidden:!0},redirect:{name:"MerchantAdmin/ProductManage/Index"}},{name:"MerchantAdmin/ProductManage/ProductSkuManage",path:"product-sku-manage/:productId",meta:{title:"商品 SKU 管理",fullScreen:!0,hidden:!0},component:()=>P((()=>import("./index.26d38b87.js")),["assets/index.26d38b87.js","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/index.7d762579.js","assets/index.c201d3dc.css"])},{path:"product-sku-manage",meta:{hidden:!0},redirect:{name:"MerchantAdmin/ProductManage/Index"}},{name:"MerchantAdmin/ProductManage/ProductCategoryAllotManage",path:"product-category-allot-manage",meta:{title:"商品分类划拨管理",fullScreen:!0},component:()=>P((()=>import("./index.1869ac85.js")),["assets/index.1869ac85.js","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js"])}]}],...[{path:"payment-manage",name:"MerchantAdmin/PaymentManage",meta:{title:"支付管理",icon:"mdi-shield-lock-outline"},component:X,children:[{name:"MerchantAdmin/PaymentManage/PaymentConfManage",path:"payment-conf-manage",meta:{title:"支付配置管理",fullScreen:!0},component:()=>P((()=>import("./index.1f371abd.js")),["assets/index.1f371abd.js","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/dict.25022818.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/index.7d762579.js","assets/index.c201d3dc.css"])},{name:"MerchantAdmin/PaymentManage/PaymentConfWxpayManage",path:"payment-conf-wxpay-manage",meta:{title:"微信支付配置管理",fullScreen:!0},component:()=>P((()=>import("./index.5a564cc2.js")),["assets/index.5a564cc2.js","assets/dict.25022818.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js"])}]}],...[{path:"trade-manage",name:"MerchantAdmin/TradeManage",meta:{title:"交易管理",icon:"mdi-shield-lock-outline"},component:X,children:[{name:"MerchantAdmin/TradeManage/OrderManage",path:"order-manage",meta:{title:"订单管理",fullScreen:!0},component:()=>P((()=>import("./index.1da93c41.js")),["assets/index.1da93c41.js","assets/index.8633880b.js","assets/index.3451c0dc.css","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css","assets/index.2b522acf.js","assets/index.4633aac0.css","assets/index.esm.3b94485e.js","assets/dict.25022818.js"])}]}]]}],Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const Z="云桐泰管理端";d.use(f);const ee={"./routes/admin.js":G,"./routes/merchant-admin.js":Y},te=[];te.push(...ee["./routes/admin.js"].default);const ne=new f({mode:"history",routes:te});ne.beforeEach(((e,t,n)=>{var a;const o="admin",r=x(o);if(e.name&&r){const t=i.exports.upperFirst(i.exports.camelCase(o));if(e.name.startsWith(`${t}/`)&&e.name!==`${t}/Login`&&!O(o))return n({name:`${t}/Login`})}J.commit("auth/setInfo");const{title:m,fullScreen:c}=null!=(a=e.meta)?a:{};document.documentElement.style.overflow=c?"hidden":"",document.title=`${m?`${m} - `:""}${r?`${r.name} - `:""}云桐泰管理端`,ne.vm&&(J.commit("theme/updateLoading",!0),ne.vm.$emit("loadingChange")),n()})),ne.afterEach(((e,t)=>{ne.vm&&(J.commit("theme/updateLoading",!1),ne.vm.$emit("loadingChange"))}));d.use(g,{context:{vuetify:z}});window.Vue=d,window.moment=_,d.use(y);d.config.productionTip=!1,P((()=>import("./antd.806657f7.js").then((function(e){return e.a}))),["assets/antd.806657f7.js","assets/vendor.23ac6402.js","assets/vendor.51862a3c.css"]).then((()=>{const e=new d({store:J,router:ne,vuetify:z,render:e=>e(T)}).$mount("#app");k.vm=e,ne.vm=e}));export{E as a,k as b,x as g,w as i,b as n,Z as t};
