"use strict";(self.webpackChunkslim=self.webpackChunkslim||[]).push([[143],{7971:(e,t,o)=>{var n=o(538),i=o(1468),s=o(1083),a=o(2577),d=o(629),l=o(4054),c=o(9094);n.Z.config.devtools=!0,n.Z.config.performance=!0,"True"===document.body.getAttribute("developer")&&(n.Z.config.devtools=!0,n.Z.config.performance=!0),(0,i.zb)(),(0,i.VZ)();new n.Z({name:"index",router:s.Z,store:a.Z,data:()=>({isAuthenticated:!1}),async mounted(){const{getShows:e,setLoadingDisplay:t,setLoadingFinished:o}=this;if(l.yG&&console.log("App Mounted!"),await this.$store.dispatch("auth"),!window.location.pathname.includes("/login")){const{$store:n}=this;await n.dispatch("login"),this.isAuthenticated=!0,Promise.all([n.dispatch("getConfig"),n.dispatch("getStats")]).then((n=>{let[i]=n;l.yG&&console.log("App Loaded!");const s=new CustomEvent("medusa-config-loaded",{detail:{general:i.general,layout:i.layout}});window.dispatchEvent(s),e().then((()=>{console.log("Finished loading all shows."),setTimeout((()=>{o(!0),t(!1)}),2e3)}))})).catch((e=>{console.debug(e),alert("Unable to connect to Medusa!")}))}},methods:{...(0,d.nv)({getShows:"getShows"}),...(0,d.OI)(["setLoadingDisplay","setLoadingFinished"])},render(e){if(this.isAuthenticated||window.location.pathname.includes("/login"))return e(c.gV)}}).$mount("#app-wrapper")}},e=>{e.O(0,[886,125],(()=>{return t=7971,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=app.js.map