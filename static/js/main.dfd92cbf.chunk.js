(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},25:function(e,a,t){e.exports=t(41)},30:function(e,a,t){},31:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(7),l=t.n(i),c=(t(30),t(14)),r=t.n(c),o=(t(31),t(15)),m=t(17),d=t.n(m);class p extends n.Component{constructor(){super(),this.titles=[],this.state={checked:!1},this.onThemeSwitchChange=this.onThemeSwitchChange.bind(this)}onThemeSwitchChange(e){this.setState({checked:e}),this.setTheme()}setTheme(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}render(){if(this.props.sharedData){var e=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map(e=>[e.toUpperCase(),1500]).flat()}const a=s.a.memo(()=>s.a.createElement(o.a,{className:"title-styles",steps:this.titles,loop:50}),(e,a)=>!0);return s.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",null,s.a.createElement("span",{className:"iconify header-icon","data-icon":"fluent:phone-laptop-24-regular","data-inline":"false"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(o.a,{steps:[e],wrapper:"p"})),s.a.createElement("div",{className:"title-container"},s.a.createElement(a,null)),s.a.createElement(d.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#5f9eca",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:s.a.createElement("span",{className:"iconify","data-icon":"ph:moon-fill","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:s.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}var h=p,u=t(8),f=(t(13),t(9));class g extends n.Component{render(){if(this.props.resumeStudies&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.studies,a=this.props.resumeStudies.map((function(e,a){const t=e.date;var n=e.mainTech.map((e,a)=>s.a.createElement(f.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)),i=t.map((e,a)=>s.a.createElement(f.a,{pill:!0,className:"studies-badge mr-2 mb-2",key:a},e));return s.a.createElement(u.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-graduation-cap study-icon"}),key:a},s.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),s.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),s.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},i))}));return s.a.createElement("section",{id:"studies",className:"pb-5"},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"white"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),s.a.createElement("div",{className:"col-md-8 mx-auto"},s.a.createElement(u.VerticalTimeline,null,a,s.a.createElement(u.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-hourglass-start mx-auto study-icon"})}))))}}var E=g;class y extends n.Component{render(){let e="",a="",t="";this.props.resumeBasicInfo&&this.props.resumeCV&&(e=this.props.resumeBasicInfo.section_name.cv,a=this.props.resumeCV.description,t=this.props.resumeCV.function);const n=s.a.createElement("button",{className:"button",onClick:()=>this.handleDownload()},t);return s.a.createElement("section",{id:"cv"},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("p",null,a)),s.a.createElement("div",{className:"text-center"},n))}handleDownload(){const e=this.props.resumeCV.url;window.open(e,"_blank")}}var v=y;class N extends n.Component{render(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return s.a.createElement("span",{key:e.name,className:"m-4"},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:e.class})))}));return s.a.createElement("footer",null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"social-links"},e),s.a.createElement("div",{className:"copyright py-4 text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}var w=N,x=t(12),b=t(18),k=t.n(b),I=t(19),S=t.n(I),B=t(20),A=t.n(B);class C extends n.Component{render(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.about,t=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{style:{color:"black"}},s.a.createElement("span",null,a)),s.a.createElement("div",{className:"row center mx-auto mb-5"},s.a.createElement("div",{className:"col-md-4 mb-5 center"},s.a.createElement("div",{className:"polaroid"},s.a.createElement("span",{style:{cursor:"auto"}},s.a.createElement("img",{height:"250px",src:e,alt:"Avatar placeholder"}),s.a.createElement(x.Icon,{icon:k.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),s.a.createElement(x.Icon,{icon:S.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),s.a.createElement(x.Icon,{icon:A.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})))),s.a.createElement("div",{className:"col-md-8 center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},s.a.createElement("br",null),s.a.createElement("span",{className:"wave"},t," "),s.a.createElement("br",null),s.a.createElement("br",null),n)))))))}}var L=C;class D extends n.Component{render(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(e,a){const t=e.technologies;var n=e.mainTech.map((e,a)=>s.a.createElement(f.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)),i=t.map((e,a)=>s.a.createElement(f.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e));return s.a.createElement(u.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-briefcase experience-icon"}),key:a},s.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),s.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),s.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},i))}));return s.a.createElement("section",{id:"resume",className:"pb-5"},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),s.a.createElement("div",{className:"col-md-8 mx-auto"},s.a.createElement(u.VerticalTimeline,null,a,s.a.createElement(u.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}var j=D,_=t(44),T=t(21),$=t.n(T),z=t(22),P=t.n(z),V=t(23),W=t.n(V);t(38);class F extends n.Component{render(){if(this.props.data){const l=this.props.data.technologies,c=this.props.data.images;var e=this.props.data.title,a=this.props.data.description,t=this.props.data.url;if(this.props.data.technologies){var n=l.map((e,a)=>s.a.createElement("li",{className:"list-inline-item mx-3",key:a},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name))))));if(this.props.data.images)var i=c.map((e,a)=>s.a.createElement("div",{key:a,"data-src":e}))}}return s.a.createElement(_.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},s.a.createElement("div",{className:"slider-tab"},s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement($.a,{cssModule:[P.a,W.a],animation:"scaleOutAnimation",className:"slider-image"},i)),s.a.createElement("div",{className:"col-md-10 mx-auto"},s.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},e,t?s.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"link-href"},s.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),s.a.createElement("p",{className:"modal-description"},a),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto"},n)))))}}var M=F;class R extends n.Component{constructor(e){super(e),this.state={deps:{},detailsModalShow:!1}}render(){let e=e=>{this.setState({detailsModalShow:!0,deps:e})};if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:()=>e(a)},s.a.createElement("div",null,s.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),s.a.createElement("span",{className:"project-date"},a.startDate),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,a)),s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"row mx-auto"},t)),s.a.createElement(M,{show:this.state.detailsModalShow,onHide:()=>this.setState({detailsModalShow:!1}),data:this.state.deps})))}}var H=R;class U extends n.Component{render(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return s.a.createElement("li",{className:"list-inline-item mx-3",key:a},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center skills-tile"},s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return s.a.createElement("section",{id:"skills"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"text-white"},e))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}var O=U;class J extends n.Component{constructor(e){super(),this.state={foo:"bar",resumeData:{},sharedData:{}}}applyPickedLanguage(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var t=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(t)}swapCurrentlyActiveLanguage(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}componentDidMount(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}loadResumeFromPath(e){r.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}loadSharedData(){r.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}render(){return s.a.createElement("div",null,s.a.createElement(h,{sharedData:this.state.sharedData.basic_info}),s.a.createElement("div",{className:"col-md-12 mx-auto text-center language"},s.a.createElement("div",{onClick:()=>this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId),style:{display:"inline"}},s.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"twemoji-flag-for-flag-united-states","data-inline":"false",id:window.$primaryLanguageIconId})),s.a.createElement("div",{onClick:()=>this.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId),style:{display:"inline"}},s.a.createElement("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-spain","data-inline":"false",id:window.$secondaryLanguageIconId}))),s.a.createElement(L,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),s.a.createElement(O,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(H,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(E,{resumeStudies:this.state.resumeData.studies,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(j,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(v,{resumeCV:this.state.resumeData.cv,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(w,{sharedBasicInfo:this.state.sharedData.basic_info}))}}var q=J;const G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,a){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;null!=t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}t(40);window.$primaryLanguage="en",window.$secondaryLanguage="es",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",l.a.render(s.a.createElement(q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portafolio.github.io",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const a="".concat("/portafolio.github.io","/service-worker.js");G?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(t=>{const n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):K(e,a)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):K(a,e)})}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.dfd92cbf.chunk.js.map