(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(t,e,n){"use strict";n(28),n(18),n(14),n(7),n(23);var r=n(3),l=(n(46),n(60),n(21)),c=n(1),o=n(11);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var d={name:"Header",props:{type:{type:String,default:"",validator:function(t){return!t.length||["static"].includes(t)}}},data:function(){return{isFixed:!1,minHeight:null}},computed:_({},Object(l.c)({tabs:"".concat(c.e.COMMON,"/").concat(c.d.VIEWS)}),{classes:function(){return this.type&&"header_".concat(this.type)},isStatic:function(){return"static"===this.type}}),mounted:function(){var t=this;Object(o.a)(function(){return!t.isStatic&&window.addEventListener("scroll",t.handleScroll)})},destroyed:function(){var t=this;Object(o.a)(function(){return!t.isStatic&&window.removeEventListener("scroll",t.handleScroll)})},methods:_({},Object(l.b)({changeView:"".concat(c.e.COMMON,"/").concat(c.a.CHANGE_VIEW)}),{handleScroll:function(){var t=this.$refs,e=t.inner;t.main.getBoundingClientRect().top>0?(this.isFixed=!1,this.minHeight=null,this.$emit("fixed",!1)):(this.isFixed=!0,this.minHeight="".concat(e.offsetHeight,"px"),this.$emit("fixed",!0)),this.$emit("scroll",{height:e.offsetHeight})}})},f=n(10),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:"main",staticClass:"header",class:t.classes,style:{"min-height":t.minHeight}},[n("div",{ref:"inner",staticClass:"header__inner",class:{"is-fixed":t.isFixed}},[n("div",{staticClass:"container header__container"},[n("div",{staticClass:"title-xl header__title"},[t._v("Safnaðu")]),t._v(" "),n("ul",{staticClass:"header__tabs"},t._l(t.tabs,function(e){return n("li",{key:e.target,staticClass:"header__tabs-item"},[n("button",{staticClass:"header__tabs-btn",class:{"is-active":e.isActive},on:{click:function(n){return n.preventDefault(),t.changeView(e.target)}}},[t._v("\n            "+t._s(e.text)+"\n          ")])])}),0)])])])},[],!1,null,null,null);e.a=component.exports},213:function(t,e,n){"use strict";n.r(e);n(34);var r=n(83),l=(n(28),n(18),n(14),n(7),n(23),n(3)),c=n(21),o=n(1),v=n(208),_={name:"Icon",props:{name:{type:String,required:!0}},computed:{className:function(){return"icon icon-".concat(this.name)}}},d=n(10),f=Object(d.a)(_,function(){var t=this.$createElement;return(this._self._c||t)("i",{class:this.className})},[],!1,null,null,null).exports,h={name:"ButtonIcon",components:{Icon:f},props:{tag:{type:String,default:"button"},name:{type:String,default:""},text:{type:String,default:""}}},m=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,t._g(t._b({tag:"component",staticClass:"btn-icon"},"component",t.$attrs,!1),t.$listeners),[n("Icon",{staticClass:"btn-icon__figure",attrs:{name:t.name}}),t._v(" "),n("span",{staticClass:"btn-icon__text"},[t._v(t._s(t.text))])],1)},[],!1,null,null,null).exports;function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var O={name:"EventDetails",components:{Header:v.a,Icon:f,ButtonIcon:m},props:{isVisible:{type:Boolean,default:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(source,!0).forEach(function(e){Object(l.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({getPageData:"".concat(o.e.COMMON,"/").concat(o.d.GET_EVENT_DETAILS)}),{pageData:function(){var t=this.$route.query.id;return this.getPageData(t)||{}},eventListLink:function(){return o.k},hasPageData:function(){return!!Object.keys(this.pageData).length},hasMedia:function(){return Array.isArray(this.pageData.media)&&this.pageData.media.length},hasMapLink:function(){return!!this.pageData.mapLink},hasPrevEventLink:function(){return!!this.pageData.prevEventLink},hasNextEventLink:function(){return!!this.pageData.nextEventLink}})},y=Object(d.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-details"},[n("Header",{ref:"header",attrs:{"is-visible":t.isVisible,type:"static"}}),t._v(" "),t.hasPageData?n("div",{staticClass:"container event-details__container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"event-details__inner"},[n("div",{staticClass:"event-details__box"},[n("ul",{staticClass:"event-details__controls"},[t.hasMapLink?n("li",{staticClass:"event-details__controls-item"},[n("ButtonIcon",{attrs:{tag:"a",href:t.pageData.mapLink,text:t.pageData.mapLinkText,name:"marker",target:"_blank",rel:"noopener noreferrer"}})],1):t._e(),t._v(" "),t.hasPrevEventLink?n("li",{staticClass:"event-details__controls-item"},[n("ButtonIcon",{attrs:{tag:"NuxtLink",to:t.pageData.prevEventLink,name:"angle-left",text:"Go to previous event"}})],1):t._e(),t._v(" "),t.hasNextEventLink?n("li",{staticClass:"event-details__controls-item"},[n("ButtonIcon",{attrs:{tag:"NuxtLink",to:t.pageData.nextEventLink,name:"angle-right",text:"Go to next event"}})],1):t._e(),t._v(" "),n("li",{staticClass:"event-details__controls-item"},[n("ButtonIcon",{attrs:{tag:"NuxtLink",to:t.eventListLink,name:"close",text:"Go to event list"}})],1)]),t._v(" "),n("div",{staticClass:"event-details__box-in"},[n("div",{staticClass:"event-details__main"},[n("img",{staticClass:"event-details__img",attrs:{src:t.pageData.img,alt:"main image"}}),t._v(" "),n("div",{staticClass:"event-details__main-content"},[n("div",{staticClass:"title-md event-details__title"},[t._v("\n                  "+t._s(t.pageData.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"text event-details__text"},[t._v("\n                  "+t._s(t.pageData.text)+"\n                ")])])]),t._v(" "),n("div",{staticClass:"event-details__aside"},[n("div",{staticClass:"title-md event-details__label"},[t._v("Upplýsingar")]),t._v(" "),n("ul",{staticClass:"text event-details__info"},[n("li",{staticClass:"event-details__info-item"},[n("div",{staticClass:"event-details__info-label"},[t._v("Tímasetning")]),t._v(" "),n("div",{staticClass:"event-details__info-value"},[t._v("\n                    "+t._s(t.pageData.date)+"\n                  ")])]),t._v(" "),n("li",{staticClass:"event-details__info-item"},[n("div",{staticClass:"event-details__info-label"},[t._v("Staðsetning")]),t._v(" "),n("div",{staticClass:"event-details__info-value"},[t._v("\n                    "+t._s(t.pageData.place)+"\n                  ")])]),t._v(" "),n("li",{staticClass:"event-details__info-item"},[n("div",{staticClass:"event-details__info-label"},[t._v("Heimilisfang")]),t._v(" "),n("div",{staticClass:"event-details__info-value"},[t._v("\n                    "+t._s(t.pageData.address)+"\n                  ")])])]),t._v(" "),t.hasMedia?n("ul",{staticClass:"event-details__media"},t._l(t.pageData.media,function(e){return n("li",{key:e.id,staticClass:"event-details__media-item"},[n("a",{staticClass:"event-details__media-link",attrs:{href:e.href,target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"event-details__media-figure"},[n("Icon",{staticClass:"event-details__media-icon",attrs:{name:e.icon}})],1),t._v(" "),n("div",{staticClass:"event-details__media-text"},[t._v("\n                      "+t._s(e.text)+"\n                    ")])])])}),0):t._e()])])])])])]):t._e()],1)},[],!1,null,null,null).exports,x={name:"Index",components:{WithScroll:r.a,EventDetails:y},computed:{section:function(){return{eventDetails:"eventDetails"}}},methods:{showSection:function(t){var section=this.$refs[t];section&&"function"==typeof section.show&&section.show()}}},D=Object(d.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("WithScroll",{on:{visible:function(e){return t.showSection(t.section.eventDetails)}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.isVisible;return[n("EventDetails",{ref:t.section.header,attrs:{"is-visible":r}})]}}])})],1)},[],!1,null,null,null);e.default=D.exports}}]);