(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghu-add-or-update"],{"04b3":function(r,e,t){"use strict";t.r(e);var i=t("825a"),n=t.n(i);for(var a in i)"default"!==a&&function(r){t.d(e,r,(function(){return i[r]}))}(a);e["default"]=n.a},"2b86":function(r,e,t){"use strict";var i=t("3abc"),n=t.n(i);n.a},"3abc":function(r,e,t){var i=t("ec10");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var n=t("4f06").default;n("12167aa1",i,!0,{sourceMap:!1,shadowMode:!1})},"6e35":function(r,e,t){"use strict";t.r(e);var i=t("c9d1"),n=t("04b3");for(var a in n)"default"!==a&&function(r){t.d(e,r,(function(){return n[r]}))}(a);t("2b86");var o,s=t("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"573a3220",null,!1,i["a"],o);e["default"]=l.exports},"825a":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("28a5"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o={data:function(){return{ruleForm:{zhanghao:"",mima:"",xingming:"",xingbie:"",nianling:"",shouji:"",shenfenzheng:"",zhaopian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,mima:!1,xingming:!1,xingbie:!1,nianling:!1,shouji:!1,shenfenzheng:!1,zhaopian:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(e){var t,i,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(i=r.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=14;break}return this.ruleForm.id=e.id,r.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:i=r.sent,this.ruleForm=i.data;case 14:if(!e.cross){r.next=53;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 17:if((r.t1=r.t0()).done){r.next=53;break}if(a=r.t1.value,"zhanghao"!=a){r.next=23;break}return this.ruleForm.zhanghao=n[a],this.ro.zhanghao=!0,r.abrupt("continue",17);case 23:if("mima"!=a){r.next=27;break}return this.ruleForm.mima=n[a],this.ro.mima=!0,r.abrupt("continue",17);case 27:if("xingming"!=a){r.next=31;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,r.abrupt("continue",17);case 31:if("xingbie"!=a){r.next=35;break}return this.ruleForm.xingbie=n[a],this.ro.xingbie=!0,r.abrupt("continue",17);case 35:if("nianling"!=a){r.next=39;break}return this.ruleForm.nianling=n[a],this.ro.nianling=!0,r.abrupt("continue",17);case 39:if("shouji"!=a){r.next=43;break}return this.ruleForm.shouji=n[a],this.ro.shouji=!0,r.abrupt("continue",17);case 43:if("shenfenzheng"!=a){r.next=47;break}return this.ruleForm.shenfenzheng=n[a],this.ro.shenfenzheng=!0,r.abrupt("continue",17);case 47:if("zhaopian"!=a){r.next=51;break}return this.ruleForm.zhaopian=n[a],this.ro.zhaopian=!0,r.abrupt("continue",17);case 51:r.next=17;break;case 53:this.styleChange();case 54:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.zhaopian=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.zhanghao){r.next=3;break}return this.$utils.msg("账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(this.ruleForm.xingming){r.next=9;break}return this.$utils.msg("姓名不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){r.next=12;break}return this.$utils.msg("年龄应输入整数"),r.abrupt("return");case 12:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=15;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 15:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){r.next=18;break}return this.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 18:if(!this.ruleForm.id){r.next=23;break}return r.next=21,this.$api.update("yonghu",this.ruleForm);case 21:r.next=25;break;case 23:return r.next=25,this.$api.add("yonghu",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},c9d1:function(r,e,t){"use strict";var i,n=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[r._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.zhanghao,placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[r._v("密码")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[r._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[r._v("性别")]),t("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(242, 8, 8, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[r._v("年龄")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.nianling,placeholder:"年龄"},model:{value:r.ruleForm.nianling,callback:function(e){r.$set(r.ruleForm,"nianling",e)},expression:"ruleForm.nianling"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[r._v("手机")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shouji,placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[r._v("身份证")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shenfenzheng,placeholder:"身份证"},model:{value:r.ruleForm.shenfenzheng,callback:function(e){r.$set(r.ruleForm,"shenfenzheng",e)},expression:"ruleForm.shenfenzheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.zhaopianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[r._v("照片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.zhaopian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.zhaopian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(0, 204, 0, 1)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},a=[];t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},ec10:function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-573a3220]{padding:%?20?%}.content[data-v-573a3220]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20201207/18e60648bb684cf196230ae29d4e8f96.jpg);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-573a3220]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-573a3220]{width:%?180?%}.avator[data-v-573a3220]{width:%?150?%;height:%?60?%}.right-input[data-v-573a3220]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-573a3220]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-573a3220]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-573a3220]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-573a3220]{border:0}.cu-form-group uni-input[data-v-573a3220]{padding:0 %?30?%}.uni-input[data-v-573a3220]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-573a3220]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-573a3220]::after{line-height:%?88?%}.select .uni-input[data-v-573a3220]{line-height:%?88?%}.input .right-input[data-v-573a3220]{line-height:%?88?%}',""]),r.exports=e}}]);