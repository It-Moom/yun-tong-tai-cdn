import{e,f as a}from"./dict.25022818.js";import{B as t}from"./index.8633880b.js";import{n as l}from"./index.71ff1e5b.js";import"./vendor.23ac6402.js";import"./index.2b522acf.js";import"./index.esm.3b94485e.js";const i={};var o=l({data:()=>({tableApi:"/platform/payment-conf/alipay/list",apiMethod:"post",tableColumns:[{name:"platformPaymentConfId",label:"支付配置",enumMapApi:"/platform/payment-conf/list-selector"},{name:"pid",label:"支付宝合作者 ID"},{name:"appId",label:"应用 ID"},{name:"status",label:"状态",type:"chip",enumMap:e},{name:"gmtCreate",label:"创建时间"},{name:"gmtModified",label:"修改时间"}].map((e=>Object.assign(e,{fluid:!Reflect.has(e,"fluid")||e.fluid}))),tableActions:[{label:"编辑",type:"edit"},{label:"删除",type:"delete",title:'确定删除微信支付配置 <code class="red--text">{{ pid }}</code> ?'}],editDialogDataApi:"/platform/payment-conf/alipay/info/{{ id }}",addRowApi:"/platform/payment-conf/alipay/create",editRowApi:"/platform/payment-conf/alipay/update/{{ id }}",deleteRowApi:"/platform/payment-conf/alipay/delete/{{ id }}",addDialogTitle:"新增微信支付配置",editDialogTitle:"编辑微信支付配置信息",form:[{name:"id",hidden:!0},{name:"platformPaymentConfId",label:"支付配置",required:!0,type:"select",api:"/platform/payment-conf/list-selector"},{name:"pid",label:"支付宝合作者 ID",required:!0},{name:"appId",label:"应用 ID",required:!0},{name:"publicKey",label:"支付宝公钥",required:!0},{name:"appKey",label:"应用私钥",required:!0},{name:"status",label:"状态",required:!0,type:"select",items:a,default:"1"}],formValidateRules:{platformPaymentConfId:[e=>!!e||"请选择支付配置"],pid:[e=>!!e||"请输入支付宝合作者 ID"],appId:[e=>!!e||"请输入应用 ID"],secretKey:[e=>!!e||"请输入支付宝公钥"],appKey:[e=>!!e||"请输入应用私钥"]}}),components:{BasicPage:t}},(function(){var e=this,a=e.$createElement;return(e._self._c||a)("BasicPage",{attrs:{"table-api":e.tableApi,"table-api-method":e.apiMethod,"table-columns":e.tableColumns,"table-actions":e.tableActions,form:e.form,"form-validate-rules":e.formValidateRules,"add-dialog-title":e.addDialogTitle,"edit-dialog-title":e.editDialogTitle,"edit-dialog-data-api":e.editDialogDataApi,"add-row-api":e.addRowApi,"edit-row-api":e.editRowApi,"delete-row-api":e.deleteRowApi}})}),[],!1,d,null,null,null);function d(e){for(let a in i)this[a]=i[a]}var p=function(){return o.exports}();export default p;
