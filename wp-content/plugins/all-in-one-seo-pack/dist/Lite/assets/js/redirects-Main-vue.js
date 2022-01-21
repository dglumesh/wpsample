(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["redirects-Main-vue","redirects-Redirects-vue","redirects-lite-FullSiteRedirect-vue","redirects-lite-ImportExport-vue","redirects-lite-Logs-vue","redirects-lite-Logs404-vue","redirects-lite-Redirects-vue","redirects-lite-RedirectsActivate-vue","redirects-lite-Settings-vue"],{"011e":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},r=[],n=s("2877"),a={},o=Object(n["a"])(a,i,r,!1,null,null,null);t["default"]=o.exports},"1bc5":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},r=[],n=s("2877"),a={},o=Object(n["a"])(a,i,r,!1,null,null,null);t["default"]=o.exports},"5e56":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-redirects"},[s("core-card",{attrs:{slug:"addNewRedirection","header-text":e.strings.addNewRedirection}},[s("core-blur",[s("core-add-redirection",{attrs:{type:e.$constants.REDIRECT_TYPES[0].value,query:e.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0}})],1)],1),s("core-blur",[s("base-wp-table",{attrs:{filters:[],totals:{total:0,pages:0,page:1},columns:e.columns,rows:[],"search-label":e.strings.searchUrls,"bulk-options":e.bulkOptions,"additional-filters":e.additionalFilters}})],1),s("cta",{attrs:{"cta-link":e.$links.getPricingUrl("redirects","redirects-upsell"),"button-text":e.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("redirects",null,"home"),"feature-list":[e.strings.serverRedirects,e.strings.automaticRedirects,e.strings.redirectMonitoring,e.strings.monitoring404,e.strings.fullSiteRedirects,e.strings.siteAliases]},scopedSlots:e._u([{key:"header-text",fn:function(){return[e._v(" "+e._s(e.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e.$isPro&&e.$addons.requiresUpgrade("aioseo-redirects")&&e.$addons.currentPlans("aioseo-redirects")?s("core-alert",{attrs:{type:"red"}},[e._v(" "+e._s(e.strings.thisFeatureRequires)+" "),s("strong",[e._v(e._s(e.$addons.currentPlans("aioseo-redirects")))])]):e._e(),e._v(" "+e._s(e.strings.redirectsDescription)+" ")]},proxy:!0}])})],1)},r=[],n=(s("99af"),{data:function(){return{strings:{addNewRedirection:this.$t.__("Add New Redirection",this.$td),searchUrls:this.$t.__("Search URLs",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Redirects",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Redirects are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),serverRedirects:this.$t.__("Fast Server Redirects",this.$td),automaticRedirects:this.$t.__("Automatic Redirects",this.$td),redirectMonitoring:this.$t.__("Redirect Monitoring",this.$td),monitoring404:this.$t.__("404 Monitoring",this.$td),fullSiteRedirects:this.$t.__("Full Site Redirects",this.$td),siteAliases:this.$t.__("Site Aliases",this.$td),redirectsDescription:this.$t.__("Our Redirection Manager allows you to easily create and manage redirects for your broken links to avoid confusing search engines and users, as well as losing valuable backlinks. It even automatically sends users and search engines from your old URLs to your new ones.",this.$td),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td)},bulkOptions:[{label:"",value:""}]}},computed:{columns:function(){var e=[{slug:"source_url",label:this.$t.__("Source URL",this.$td)},{slug:"target_url",label:this.$t.__("Target URL",this.$td)},{slug:"hits",label:this.$t.__("Hits",this.$td),width:"97px"},{slug:"type",label:this.$t.__("Type",this.$td),width:"100px"},{slug:"group",label:this.$t.__("Group",this.$td),width:"150px"},{slug:"enabled",label:this.$constants.GLOBAL_STRINGS.enabled,width:"80px"}];return e},additionalFilters:function(){return[{label:this.$t.__("Filter by Group",this.$td),name:"group",options:[{label:this.$t.__("All Groups",this.$td),value:"all"}].concat(this.$constants.REDIRECT_GROUPS)}]}}}),a=n,o=(s("9878"),s("2877")),l=Object(o["a"])(a,i,r,!1,null,null,null);t["default"]=l.exports},6527:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("core-main",{attrs:{"page-name":e.strings.pageName,"show-save-button":e.showSaveButton,"exclude-tabs":e.excludeTabs}},[s(e.$route.name,{tag:"component"})],1)},r=[],n=s("5530"),a=(s("b0c0"),s("2f62")),o=s("cb8d"),l=s("7c0e"),c=s("83c6b"),u=s("1bc5"),d=s("75f1"),h=s("8b23"),f={components:{FullSiteRedirect:o["default"],ImportExport:l["default"],Logs:c["default"],Logs404:u["default"],Redirects:d["default"],Settings:h["default"]},data:function(){return{strings:{pageName:this.$t.__("Redirects",this.$td)}}},computed:Object(n["a"])(Object(n["a"])({},Object(a["e"])("redirects",["options"])),{},{showSaveButton:function(){return"redirects"!==this.$route.name&&"groups"!==this.$route.name&&"logs-404"!==this.$route.name&&"logs"!==this.$route.name&&"import-export"!==this.$route.name},excludeTabs:function(){if(!this.$addons.isActive("aioseo-redirects")||this.$addons.requiresUpgrade("aioseo-redirects"))return["full-site-redirect","logs","logs-404","import-export","settings"];var e=[];return this.options.logs.log404.enabled||e.push("logs-404"),this.options.logs.redirects.enabled&&"server"!==this.options.main.method||e.push("logs"),e}})},_=f,$=(s("a095"),s("2877")),g=Object($["a"])(_,i,r,!1,null,null,null);t["default"]=g.exports},"75f1":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-redirects-main"},[e.isUnlicensed||!e.$addons.isActive("aioseo-redirects")||e.$addons.requiresUpgrade("aioseo-redirects")?e._e():s("redirects"),e.isUnlicensed||e.$addons.isActive("aioseo-redirects")||!e.$addons.canActivate("aioseo-redirects")||e.$addons.requiresUpgrade("aioseo-redirects")?e._e():s("redirects-activate"),e.isUnlicensed||e.$addons.requiresUpgrade("aioseo-redirects")?s("redirects-lite"):e._e()],1)},r=[],n=s("5530"),a=s("2f62"),o=s("5e56"),l=s("011e"),c={components:{Redirects:o["default"],RedirectsActivate:l["default"],RedirectsLite:o["default"]},data:function(){return{strings:{locationsSettings:this.$t.__("Redirects Settings",this.$td)}}},computed:Object(n["a"])(Object(n["a"])({},Object(a["c"])(["isUnlicensed"])),Object(a["e"])(["options","settings"]))},u=c,d=s("2877"),h=Object(d["a"])(u,i,r,!1,null,null,null);t["default"]=h.exports},"7c0e":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},r=[],n=s("2877"),a={},o=Object(n["a"])(a,i,r,!1,null,null,null);t["default"]=o.exports},"83c6b":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},r=[],n=s("2877"),a={},o=Object(n["a"])(a,i,r,!1,null,null,null);t["default"]=o.exports},"8b23":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},r=[],n=s("2877"),a={},o=Object(n["a"])(a,i,r,!1,null,null,null);t["default"]=o.exports},9878:function(e,t,s){"use strict";s("aa64")},a095:function(e,t,s){"use strict";s("d9cf")},aa64:function(e,t,s){},cb8d:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},r=[],n=s("2877"),a={},o=Object(n["a"])(a,i,r,!1,null,null,null);t["default"]=o.exports},d9cf:function(e,t,s){}}]);