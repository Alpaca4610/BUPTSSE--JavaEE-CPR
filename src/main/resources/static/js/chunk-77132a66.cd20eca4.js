(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77132a66"],{"13b3":function(t,e,i){},"169a":function(t,e,i){"use strict";i("368e");var s=i("4ad4"),n=i("b848"),a=i("75eb"),r=i("e707"),o=i("e4d3"),l=i("21be"),c=i("f2e7"),d=i("a293"),h=i("80d2"),u=i("bfc5"),v=i("58df"),f=i("d9bd");const m=Object(v["a"])(s["a"],n["a"],a["a"],r["a"],o["a"],l["a"],c["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(f["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.activeZIndex>=this.getMaxZIndex()&&(this.isActive=!1)},onKeydown(t){if(t.keyCode===h["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],i={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(i.style={maxWidth:"none"===this.maxWidth?void 0:Object(h["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(h["g"])(this.width)}),e.push(this.genActivator());let s=t("div",i,this.showLazyContent(this.getContentSlot()));return this.transition&&(s=t("transition",{props:{name:this.transition,origin:this.origin}},[s])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(u["a"],{props:{root:!0,light:this.light,dark:this.dark}},[s])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},"1bfb":function(t,e,i){},"368e":function(t,e,i){},"608c":function(t,e,i){},"71a3":function(t,e,i){"use strict";var s=i("4e82"),n=i("1c87"),a=i("7560"),r=i("80d2"),o=i("58df");const l=Object(o["a"])(n["a"],Object(s["a"])("tabsBar"),a["a"]);e["a"]=l.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...n["a"].options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.attrs={...i.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},i.on={...i.on,keydown:t=>{t.keyCode===r["w"].enter&&this.click(t),this.$emit("keydown",t)}},t(e,i,this.$slots.default)}})},"75d4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",[i("v-card",[i("v-card-title",[t._v("管理员面板：院校信息")]),i("v-card-subtitle",{staticStyle:{"margin-top":"1vh"}},[t._v("欢迎，管理员"+t._s(t.supervisor)+"!")]),i("v-tabs",{attrs:{"fixed-tabs":"","background-color":"indigo",dark:""}},[i("v-spacer"),i("v-tab",{attrs:{to:"/universityTable"}},[t._v("\n            院校信息管理\n          ")]),i("v-tab",{attrs:{to:"/layout/TestPage"},on:{click:t.getStudent}},[t._v("\n            学生账户管理\n          ")]),i("v-tab",{attrs:{to:"/teacherTable"}},[t._v("\n            教师账户管理\n          ")]),i("v-tab",{attrs:{to:"/adminTable"}},[t._v("\n            管理员账户管理\n          ")]),i("v-tab",{attrs:{to:"/uploadTable"}},[t._v("\n            Excel文件上传\n          ")])],1),i("v-btn",{staticClass:"blue white--text",staticStyle:{"margin-top":"1vh","margin-bottom":"1vh",width:"100%"}},[t._v("欢迎！")])],1)],1)],1),i("v-row",[i("v-col",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.stdData,"sort-by":"class"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v(t._s(t.choosedTitle))]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",{staticClass:"mb-2",staticStyle:{"margin-left":"1vh","margin-right":"1vh"},attrs:{color:"success",dark:""},on:{click:t.getStudent}},[t._v("刷新")]),i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"indigo",dark:""}},"v-btn",n,!1),s),[t._v("\n                  新建\n                ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"招生代码"},model:{value:t.editedItem.collegeID,callback:function(e){t.$set(t.editedItem,"collegeID",e)},expression:"editedItem.collegeID"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"院校名称"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"批次"},model:{value:t.editedItem.tier,callback:function(e){t.$set(t.editedItem,"tier",e)},expression:"editedItem.tier"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"投档线分数"},model:{value:t.editedItem.score,callback:function(e){t.$set(t.editedItem,"score",e)},expression:"editedItem.score"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{cols:"12",sm:"6",md:"4",label:"大学种类"},model:{value:t.editedItem.kind,callback:function(e){t.$set(t.editedItem,"kind",e)},expression:"editedItem.kind"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{cols:"12",sm:"6",md:"4",label:"前年投档线排名"},model:{value:t.editedItem.rank1,callback:function(e){t.$set(t.editedItem,"rank1",e)},expression:"editedItem.rank1"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{cols:"12",sm:"6",md:"4",label:"前2年投档线排名"},model:{value:t.editedItem.rank2,callback:function(e){t.$set(t.editedItem,"rank2",e)},expression:"editedItem.rank2"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{cols:"12",sm:"6",md:"4",label:"前3年投档线排名"},model:{value:t.editedItem.rank3,callback:function(e){t.$set(t.editedItem,"rank3",e)},expression:"editedItem.rank3"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{cols:"12",sm:"6",md:"4",label:"前4年投档线排名"},model:{value:t.editedItem.rank4,callback:function(e){t.$set(t.editedItem,"rank4",e)},expression:"editedItem.rank4"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("\n                    取消\n                  ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("\n                    保存\n                  ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"20%"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"text-h3 red--text text-center",staticStyle:{"margin-bottom":"1.5vh"}},[t._v("是否删除该学生数据？")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("确定")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("取消")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var s=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(s)}}},[t._v("\n            mdi-pencil\n          ")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(s)}}},[t._v("\n            mdi-delete\n          ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("\n            Reset\n          ")])]},proxy:!0}])})],1)],1)],1)},n=[],a=(i("7f7f"),i("bc3a")),r=i.n(a),o={name:"Contacts",data:function(){return{snack:!0,supervisor:"",stdGet:"",stdUpdate:"",stdDelete:"",stdRegister:"",selectPage:"",choosedTitle:"院校信息管理",dialog:!1,dialogDelete:!1,headers:[{text:"招生代码",align:"start",sortable:!1,value:"collegeID"},{text:"名称",value:"name"},{text:"投档线分数",value:"score"},{text:"批次",value:"tier"},{text:"种类",value:"kind"},{text:"修改",value:"actions",sortable:!1}],stdData:[],editedIndex:-1,editedItem:{collegeID:"",name:"",tier:"",score:"",kind:"",rank1:"",rank2:"",rank3:"",rank4:""},defaultItem:{collegeID:"",name:"",score:"",tier:"",kind:"",rank1:"",rank2:"",rank3:"",rank4:""}}},mounted:function(){this.getStudent()},computed:{formTitle:function(){return-1===this.editedIndex?"新建":"编辑"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{getStudent:function(){var t=this,e="http://127.0.0.1:9090/college/all";r.a.defaults.headers.common["token"]=localStorage.getItem("token"),r()({url:e,method:"get"}).then((function(e){Object.assign(t.stdData,e.data.data),t.stdData.push()}))},updateStudent:function(){var t=this,e="http://127.0.0.1:9090/college/update";r()({url:e,method:"post",params:{id:t.editedItem.collegeID,name:t.editedItem.name,tier:t.editedItem.tier,score:t.editedItem.score,kind:t.editedItem.kind}}).then((function(t){alert("更新信息状态"+t.data.msg)}))},deleteStudent:function(t){var e=this,i="http://127.0.0.1:9090/college/delete";r()({url:i,method:"post",params:{id:e.stdData[t]["id"]}}).then((function(t){alert("删除操作状态："+t.data.msg)}))},registerStudent:function(){var t=this,e="http://127.0.0.1:9090/college/add";r()({url:e,method:"post",params:{id:t.editedItem.collegeID,name:t.editedItem.name,tier:t.editedItem.tier,score:t.editedItem.score,kind:t.editedItem.kind}}).then((function(t){alert("注册操作状态："+t.data.msg)}))},initialize:function(){this.stdData=[]},editItem:function(t){this.editedIndex=this.stdData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.stdData.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.deleteStudent(this.editedIndex),this.stdData.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.stdData[this.editedIndex],this.editedItem):this.stdData.push(this.editedItem),-1===this.editedIndex?this.registerStudent(this.editedIndex):this.updateStudent(this.editedIndex),this.close()}}},l=o,c=i("2877"),d=i("6544"),h=i.n(d),u=i("8336"),v=i("b0af"),f=i("99d9"),m=i("62ad"),p=i("a523"),g=i("8fea"),b=i("169a"),x=i("ce7e"),w=i("132d"),k=i("0fd9"),I=i("2fa4"),y=i("71a3"),$=i("fe57"),C=i("8654"),O=i("71d9"),S=i("2a7f"),_=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=_.exports;h()(_,{VBtn:u["a"],VCard:v["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCol:m["a"],VContainer:p["a"],VDataTable:g["a"],VDialog:b["a"],VDivider:x["a"],VIcon:w["a"],VRow:k["a"],VSpacer:I["a"],VTab:y["a"],VTabs:$["a"],VTextField:C["a"],VToolbar:O["a"],VToolbarTitle:S["a"]})},"7f7f":function(t,e,i){var s=i("86cc").f,n=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in n||i("9e1e")&&s(n,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return l}));var s=i("b0af"),n=i("80d2");const a=Object(n["i"])("v-card__actions"),r=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),l=Object(n["i"])("v-card__title");s["a"]},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),n=i("297c"),a=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(n["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},f665:function(t,e,i){"use strict";i("13b3");var s=i("afdd"),n=i("9d26"),a=i("604c"),r=i("c3f0");e["a"]=a["a"].extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:r["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...a["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return`v-window-${t}${i}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){return this.$createElement("div",{staticClass:"v-window__"+t},[this.$createElement(s["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},on:{click:()=>{this.changedByDelimiters=!0,i()}}},[this.$createElement(n["a"],{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}})},fe57:function(t,e,i){"use strict";i("1bfb"),i("608c");var s=i("9d26"),n=i("0789"),a=i("604c"),r=i("dc22"),o=i("c3f0"),l=i("58df");const c=Object(l["a"])(a["a"]).extend({name:"base-slide-group",directives:{Resize:r["a"],Touch:o["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:t=>!isNaN(parseInt(t))},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...a["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){if(!this.hasAffixes)return null;const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const i=`${t[0].toUpperCase()}${t.slice(1)}`,n=this["has"+i];return this.showArrows||n?this.$createElement(s["a"],{props:{disabled:!n}},this[e+"Icon"]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(n["c"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,i,s){const n=i?-1:1,a=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(a,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:t,wrapper:e}=this.$refs,i=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,i,s){const n=t.clientWidth,a=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);const r=e.wrapper+s,o=n+a,l=.4*n;return a<s?s=Math.max(a-l,0):r<o&&(s=Math.min(s-(r-o-l),e.content-e.wrapper)),i?-s:s},calculateCenteredOffset(t,e,i){const{offsetLeft:s,clientWidth:n}=t;if(i){const t=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});c.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var d=i("7560"),h=i("d10f"),u=Object(l["a"])(c,h["a"],d["a"]).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...c.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=c.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const i=this.items,s=t.path,n=e.path;let a=!1,r=!1;for(const o of i)if(o.to===s?a=!0:o.to===n&&(r=!0),a&&r)break;!a&&r&&(this.internalValue=void 0)}},render(t){const e=c.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),v=i("f665"),f=v["a"].extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...v["a"].options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||a["a"].options.methods.getValue.call(this,t,e)}}}),m=i("a9ad"),p=Object(l["a"])(m["a"]).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),g=i("a452"),b=i("80d2");const x=Object(l["a"])(m["a"],g["a"],d["a"]);e["a"]=x.extend().extend({name:"v-tabs",directives:{Resize:r["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakPoint:{type:[Number,String],default:1264},nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:Boolean,sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(b["g"])(this.slider.height),left:this.isReversed?void 0:Object(b["g"])(this.slider.left),right:this.isReversed?Object(b["g"])(this.slider.right):void 0,top:this.vertical?Object(b["g"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(b["g"])(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const i={style:{height:Object(b["g"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakPoint:this.mobileBreakPoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,i),this.setBackgroundColor(this.backgroundColor,i),this.$createElement(u,i,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(f,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(p,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const i=[],s=[],n=this.$slots.default||[],a=n.length;for(let r=0;r<a;r++){const a=n[r];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":e=a;break;case"v-tabs-items":t=a;break;case"v-tab-item":i.push(a);break;default:s.push(a)}else s.push(a)}return{tab:s,slider:e,items:t,item:i}}},render(t){const{tab:e,slider:i,items:s,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,i),this.genItems(s,n)])}})}}]);
//# sourceMappingURL=chunk-77132a66.cd20eca4.js.map