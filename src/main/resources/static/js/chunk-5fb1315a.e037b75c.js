(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb1315a"],{"0fd9":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce((i,s)=>{return i[t+Object(a["u"])(s)]=e(),i},{})}const c=t=>[...o,"baseline","stretch"].includes(t),h=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...o,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:d})),v=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",()=>({type:String,default:null,validator:v})),m={align:Object.keys(h),justify:Object.keys(u),alignContent:Object.keys(p)},f={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,i){let s=f[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const y=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:v},...p},render(t,{props:e,data:i,children:s}){let a="";for(const n in e)a+=String(e[n]);let r=y.get(a);if(!r){let t;for(t in r=[],m)m[t].forEach(i=>{const s=e[i],n=g(t,i,s);n&&r.push(n)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(a,r)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:r}),s)}})},"3c93":function(t,e,i){},"4b85":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const r=["sm","md","lg","xl"],o=(()=>{return r.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return r.reduce((t,e)=>{return t["offset"+Object(a["u"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return r.reduce((t,e)=>{return t["order"+Object(a["u"])(e)]={type:[String,Number],default:null},t},{})})(),h={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:a}){let r="";for(const n in e)r+=String(e[n]);let o=u.get(r);if(!o){let t;for(t in o=[],h)h[t].forEach(i=>{const s=e[i],n=d(t,i,s);n&&o.push(n)});const i=o.some(t=>t.startsWith("col-"));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),u.set(r,o)}return t(e.tag,Object(n["a"])(i,{class:o}),s)}})},7958:function(t,e,i){},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var s=i("e8f2"),n=i("d9f7");e["a"]=Object(s["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let a;const{attrs:r}=i;return r&&(i.attrs={},a=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),s)}})},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),n=i("297c"),a=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(n["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},d2cb:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"layout"}},[i("v-navigation-drawer",{attrs:{"expand-on-hover":"true",absolute:"true"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-sheet",{staticClass:"pa-4",attrs:{color:"grey lighten-4"}},[i("v-list",[i("v-list-item",{staticClass:"px-2"},[i("v-list-item-avatar",[i("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/11.jpg"}})],1)],1),i("v-list-item",{attrs:{link:""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h6"},[t._v("\n                                杨正球\n                            ")]),i("v-list-item-subtitle",[t._v("ckqqqq@bupt.edu.cn")])],1)],1)],1)],1),i("v-divider"),i("v-list",{attrs:{nav:""}},t._l(t.links,function(e){var s=e[0],n=e[1];return i("v-list-item",{key:s,attrs:{link:""}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(s))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(n))])],1)],1)}),1)],1),i("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[i("v-row",t._l(t.cards,function(e){return i("v-col",{key:e,attrs:{cols:"12"}},[i("v-card",[i("v-subheader",[t._v(t._s(e))]),i("v-list",{attrs:{"two-line":""}},[t._l(6,function(e){return[i("v-list-item",{key:e},[i("v-list-item-avatar",{attrs:{color:"grey darken-1"}}),i("v-list-item-content",[i("v-list-item-title",[t._v("Message "+t._s(e))]),i("v-list-item-subtitle",[t._v("\n                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique\n                                            ")])],1)],1),6!==e?i("v-divider",{key:"divider-"+e,attrs:{inset:""}}):t._e()]})],2)],1)],1)}),1)],1)],1)},n=[],a={data:function(){return{cards:["Today","Yesterday"],drawer:null,links:[["mdi-inbox-arrow-down","分数查询"],["mdi-send","模拟志愿"],["mdi-delete","提前估分"],["mdi-alert-octagon","更多"]]}}},r=a,o=i("2877"),l=i("6544"),c=i.n(l),h=i("7496"),d=i("b0af"),u=i("62ad"),v=i("a523"),p=i("ce7e"),m=i("132d"),f=i("adda"),g=i("8860"),y=i("da13"),b=i("8270"),w=i("5d23"),O=i("34c3"),$=(i("7958"),i("3a66")),S=i("a9ad"),C=i("b848"),k=(i("3c93"),i("7560")),A=i("f2e7"),j=i("58df"),_=Object(j["a"])(S["a"],k["a"],A["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),x=_,B=i("80d2"),M=i("2b0e"),E=M["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new x({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(B["o"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(B["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[B["q"].up,B["q"].pageup],i=[B["q"].down,B["q"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){const t=this.$refs.dialog,e=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(e,t))||this.shouldScroll(t,i)}for(let s=0;s<e.length;s++){const t=e[s];if(t===document)return!0;if(t===document.documentElement)return!0;if(t===this.$refs.content)return!0;if(this.hasScrollbar(t))return this.shouldScroll(t,i)}return!0},composedPath(t){if(t.composedPath)return t.composedPath();const e=[];let i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(B["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),N=i("d10f"),L=i("a293"),T=i("dc22");const V=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:n}=t,a=.5,r=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&n<s-r&&t.up(t),t.down&&n>s+r&&t.down(t))};function I(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function H(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),V(e)}function X(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function P(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>I(t,e),touchend:t=>H(t,e),touchmove:t=>X(t,e)}}function Y(t,e,i){const s=e.value,n=s.parent?t.parentElement:t,a=s.options||{passive:!0};if(!n)return;const r=P(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[i.context._uid]=r,Object(B["r"])(r).forEach(t=>{n.addEventListener(t,r[t],a)})}function R(t,e,i){const s=e.value.parent?t.parentElement:t;if(!s||!s._touchHandlers)return;const n=s._touchHandlers[i.context._uid];Object(B["r"])(n).forEach(t=>{s.removeEventListener(t,n[t])}),delete s._touchHandlers[i.context._uid]}const W={inserted:Y,unbind:R};var q=W;const z=Object(j["a"])(Object($["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),S["a"],C["a"],E,N["a"],k["a"]);var D=z.extend({name:"v-navigation-drawer",provide(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:L["a"],Resize:T["a"],Touch:q},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:80},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:{required:!1}},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom?100:this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX",e={height:Object(B["f"])(this.height),top:this.isBottom?"auto":Object(B["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${Object(B["f"])(this.computedMaxHeight)})`:void 0,transform:`${t}(${Object(B["f"])(this.computedTransform,"%")})`,width:Object(B["f"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(f["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:()=>this.isActive=!1,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),this.expandOnHover&&(t.mouseenter=()=>this.isMouseover=!0,t.mouseleave=()=>this.isMouseover=!1),t},genPosition(t){const e=Object(B["m"])(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(B["m"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),U=i("0fd9"),Z=i("8dd9"),G=i("e0c7"),J=Object(o["a"])(r,s,n,!1,null,null,null);e["default"]=J.exports;c()(J,{VApp:h["a"],VCard:d["a"],VCol:u["a"],VContainer:v["a"],VDivider:p["a"],VIcon:m["a"],VImg:f["a"],VList:g["a"],VListItem:y["a"],VListItemAvatar:b["a"],VListItemContent:w["a"],VListItemIcon:O["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VNavigationDrawer:D,VRow:U["a"],VSheet:Z["a"],VSubheader:G["a"]})}}]);
//# sourceMappingURL=chunk-5fb1315a.e037b75c.js.map