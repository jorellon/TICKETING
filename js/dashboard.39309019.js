(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{5677:function(t,i,e){},7277:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-container",{staticClass:"px-5",attrs:{fluid:""}},[e("v-fade-transition",{attrs:{appear:"",origin:"center center"}},[e("v-row",{staticClass:"mt-1"},[e("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[e("v-card",{attrs:{elevation:"0",outlined:""}},[e("v-list",{staticClass:"py-0"},[e("v-list-item-group",[e("v-list-item",{on:{click:function(i){return t.clickTodays("todays_applicant")}}},[e("v-list-item-icon",[e("v-icon",{staticClass:"indigo--text",attrs:{large:""}},[t._v(" mdi-account-tie ")])],1),e("v-list-item-content",[e("v-list-item-title",[t.recordsLoading?e("v-progress-circular",{attrs:{width:"3",color:"grey lighten-1",indeterminate:"",size:"18"}}):e("strong",[t._v(t._s(t.records.todays_applicant.toLocaleString()))])],1),e("v-list-item-subtitle",[t._v("Today's Applicant")])],1),e("v-list-item-action",[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-magnify")])],1)],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[e("v-card",{attrs:{elevation:"0",outlined:""}},[e("v-list",{staticClass:"py-0"},[e("v-list-item-group",[e("v-list-item",{on:{click:function(i){return t.clickTodays("todays_backended")}}},[e("v-list-item-icon",[e("v-icon",{staticClass:"purple--text",attrs:{large:""}},[t._v(" mdi-account-switch ")])],1),e("v-list-item-content",[e("v-list-item-title",[t.recordsLoading?e("v-progress-circular",{attrs:{width:"3",color:"grey lighten-1",indeterminate:"",size:"18"}}):e("strong",[t._v(t._s(t.records.todays_backended.toLocaleString()))])],1),e("v-list-item-subtitle",[t._v("Today's Backended")])],1),e("v-list-item-action",[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-magnify")])],1)],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[e("v-card",{attrs:{elevation:"0",outlined:""}},[e("v-list",{staticClass:"py-0"},[e("v-list-item-group",[e("v-list-item",{on:{click:function(i){return t.clickTodays("todays_qualified")}}},[e("v-list-item-icon",[e("v-icon",{staticClass:"green--text",attrs:{large:""}},[t._v(" mdi-account-check-outline ")])],1),e("v-list-item-content",[e("v-list-item-title",[t.recordsLoading?e("v-progress-circular",{attrs:{width:"3",color:"grey lighten-1",indeterminate:"",size:"18"}}):e("strong",[t._v(t._s(t.records.todays_qualified.toLocaleString()))])],1),e("v-list-item-subtitle",[t._v("Today's Qualified")])],1),e("v-list-item-action",[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-magnify")])],1)],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[e("v-card",{attrs:{elevation:"0",outlined:""}},[e("v-list",{staticClass:"py-0"},[e("v-list-item-group",[e("v-list-item",{on:{click:function(i){return t.clickTodays("for_interview")}}},[e("v-list-item-icon",[e("v-icon",{staticClass:"blue-grey--text",attrs:{large:""}},[t._v(" mdi-comment-account-outline ")])],1),e("v-list-item-content",[e("v-list-item-title",[t.recordsLoading?e("v-progress-circular",{attrs:{width:"3",color:"grey lighten-1",indeterminate:"",size:"18"}}):e("strong",[t._v(t._s(t.records.for_interview.toLocaleString()))])],1),e("v-list-item-subtitle",[t._v("For Interview")])],1),e("v-list-item-action",[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-magnify")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],r=e("1da1"),o=e("5530"),n=(e("96cf"),e("2f62")),c=e("b166"),l={data:function(){return{today:Object(c["a"])(new Date,"yyyy-MM-dd")}},computed:Object(o["a"])({},Object(n["d"])("dashboard",["records","recordsLoading"])),created:function(){this.fetchData()},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])("dashboard",["getRecords"])),{},{clickTodays:function(t){"todays_applicant"==t&&this.$router.push({name:"Applicants",query:{created_at_start:this.today,created_at_end:this.today}}),"todays_backended"==t&&this.$router.push({name:"Applicants",query:{status_updated_at_start:this.today,status_updated_at_end:this.today,status:3}}),"todays_qualified"==t&&this.$router.push({name:"Applicants",query:{status_updated_at_start:this.today,status_updated_at_end:this.today,status:4}}),"for_interview"==t&&this.$router.push({name:"Applicants",query:{status:2}})},fetchData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:t.recordsLoading||(t.$store.commit("dashboard/setRecords",[]),t.getRecords());case 1:case"end":return i.stop()}}),i)})))()}})},d=l,u=(e("9e79"),e("2877")),v=e("6544"),m=e.n(v),g=e("b0af"),p=e("62ad"),_=e("a523"),y=e("0789"),h=e("132d"),f=e("8860"),b=e("da13"),w=e("1800"),L=e("5d23"),k=e("1baa"),C=e("34c3"),V=e("490a"),I=e("0fd9"),T=Object(u["a"])(d,a,s,!1,null,"d9a64ea0",null);i["default"]=T.exports;m()(T,{VCard:g["a"],VCol:p["a"],VContainer:_["a"],VFadeTransition:y["d"],VIcon:h["a"],VList:f["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemContent:L["a"],VListItemGroup:k["a"],VListItemIcon:C["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VProgressCircular:V["a"],VRow:I["a"]})},"9e79":function(t,i,e){"use strict";e("5677")}}]);
//# sourceMappingURL=dashboard.39309019.js.map