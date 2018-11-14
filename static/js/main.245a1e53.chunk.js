(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),l=a.n(i),o=(a(89),a(7)),s=a(8),c=a(11),p=a(9),u=a(12),d=a(144),m=a(145),h=a(146),g=a(14),b=(a(96),a(141)),E={landing_page:{card_titles:{resources:{en:"Resources",es:"Recursos"},checklist:{en:"Checklist",es:"Cosas Que Hacer"},transfer:{en:"Transfer",es:"Enviar Dinero"}},card_descriptions:{resources:{en:"The Resources page hosts helpful links and documents for advancing understanding \n                        of the immigration process, understanding of legal rights as an immigrant, and \n                        understanding of availability of help.",es:"La p\xe1gina Recursos organiza enlaces y documentos para avanzar la comprensi\xf3n del \n\t\t\t\t\t\tproceso de inmigraci\xf3n, la comprensi\xf3n de los derechos que tienen los inmigrantes,\n\t\t\t\t\t\t y la comprensi\xf3n del disponibilidad de ayuda."},checklist:{en:"The Checklist page hosts a list of steps you must complete and links to documents \n                        you must complete in order to navigate the immigration process, in the order you \n                        must complete them.",es:"La p\xe1gina de Cosas Que Hacer organiza una lista de paso que tiene que hacer y enlaces \n\t\t\t\t\t\tque tiene que completar para navegar el proceso de inmigraci\xf3n, en el orden que tiene \n\t\t\t\t\t\tque completarlos."},transfer:{en:"The Transfer page, using the TransferWise API, allows you to financially support \n                        your loved ones back home by sending money back home cheaply and quickly.",es:"La p\xe1gina de Enviar Dinero, que usa el API TransferWise, permite apoyar su familia \n\t\t\t\t\t\ten su pa\xeds de origen por enviar dinero a ellos por un proceso barato y r\xe1pido."}}},checklist_page:{},resources_page:{},topBar:{dropdown_title:{en:"Language",es:"Idioma"},languages:{en:{en:"English",es:"Ingl\xe9s"},es:{en:"Spanish",es:"Espa\xf1ol"}}}},f=a(143),y=a(142),v="UPDATE_LANGUAGE",k=function(e){return{language:e.language}},O=E.topBar,j={position:"relative",marginTop:"3em",marginBottom:"3em"},w={textDecoration:"none",color:"black"},C={textAlign:"center"},S={position:"absolute",right:"15%",top:"0%"},x=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TopBar",style:j},r.a.createElement("h1",{style:C},r.a.createElement(b.a,{to:"/",style:w},"HomeBase")),r.a.createElement("span",{style:S},r.a.createElement("img",{src:"/assets/flags/".concat(this.props.language.lang,".gif"),alt:"".concat(this.props.language.name," Flag")}),"\xa0 \xa0",r.a.createElement(f.a,{title:O.dropdown_title[this.props.language.lang],id:"languageDropdown"},r.a.createElement(y.a,{onSelect:function(){e.props.dispatch({type:v,lang:"en"})}},r.a.createElement("img",{src:"/assets/flags/en.gif",alt:"American Flag"}),"\xa0 ",O.languages.en[this.props.language.lang]),r.a.createElement(y.a,{onSelect:function(){e.props.dispatch({type:v,lang:"es"})}},r.a.createElement("img",{src:"/assets/flags/es.gif",alt:"Mexican Flag"}),"\xa0 ",O.languages.es[this.props.language.lang]))))}}]),t}(n.Component),N=Object(g.b)(k)(x),L=a(45),A={padding:"12px",borderBottom:"1px solid",fontSize:"24px",height:"72px"},_={padding:"24px",borderBottom:"1px solid",borderColor:"#CCCCCC",height:"180px"},B={padding:"24px",height:"72px"},z={textDecoration:"none",color:"#333333"},D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={graphicStyle:Object(L.a)({},A,{background:a.props.background,color:a.props.color}),linkStyle:Object(L.a)({},B),descriptionStyle:Object(L.a)({},_)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LinkCard ".concat(this.props.cardClass)},r.a.createElement("div",{className:"cardGraphic",style:this.state.graphicStyle},r.a.createElement("h3",null,this.props.title)),r.a.createElement("div",{className:"cardDescription",style:this.state.descriptionStyle},r.a.createElement("p",null,this.props.description)),this.props.internal?r.a.createElement(b.a,{to:this.props.path,style:z},r.a.createElement("div",{className:"cardLink",style:this.state.linkStyle},this.props.title)):r.a.createElement("a",{href:this.props.path,style:z},r.a.createElement("div",{className:"cardLink",style:this.state.linkStyle},this.props.title)))}}]),t}(n.Component),T=E.landing_page,q=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LandingPage"},r.a.createElement(N,null),r.a.createElement("div",{className:"LandingCardContainer"},r.a.createElement(D,{path:"".concat(this.props.language.lang,"/resources"),background:"hsl(0, 50%, 50%)",color:"hsl(0, 50%, 100%)",cardClass:"landingCardClass",title:T.card_titles.resources[this.props.language.lang],description:T.card_descriptions.resources[this.props.language.lang],internal:!0}),r.a.createElement(D,{path:"".concat(this.props.language.lang,"/checklist"),background:"hsl(185, 50%, 25%)",color:"hsl(185, 50%, 100%)",cardClass:"landingCardClass",title:T.card_titles.checklist[this.props.language.lang],description:T.card_descriptions.checklist[this.props.language.lang],internal:!0}),r.a.createElement(D,{path:"".concat(this.props.language.lang,"/transfer"),background:"hsl(100, 50%, 50%)",color:"hsl(100, 50%, 100%)",cardClass:"landingCardClass",title:T.card_titles.transfer[this.props.language.lang],description:T.card_descriptions.transfer[this.props.language.lang],internal:!0})))}}]),t}(n.Component),F=Object(g.b)(k)(q),I=[{title:"Opening A Bank Account",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo non felis hendrerit \n\t\tporttitor. Sed venenatis a libero at bibendum.",link:"https://www.aclu.org/know-your-rights/what-do-if-immigration-agents-ice-are-your-door"},{title:"Sending Money Home",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo non felis hendrerit \n\t\tporttitor. Sed venenatis a libero at bibendum.",link:"https://www.aclu.org/know-your-rights/know-your-rights-about-daca"},{title:"Sanctuary Cities",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo non felis hendrerit \n\t\tporttitor. Sed venenatis a libero at bibendum.",link:"https://www.aclu.org/know-your-rights/border-zone"},{title:"Finding Work",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo non felis hendrerit \n\t\tporttitor. Sed venenatis a libero at bibendum.",link:"https://www.aclu.org/know-your-rights/what-do-if-youre-stopped-police-immigration-agents-or-fbi"}],P=[{title:"ICE At Your Door",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo non felis hendrerit \n\t\tporttitor. Sed venenatis a libero at bibendum.",link:"https://www.aclu.org/know-your-rights/what-do-if-immigration-agents-ice-are-your-door"},{title:"DACA",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo non felis hendrerit \n\t\tporttitor. Sed venenatis a libero at bibendum.",link:"https://www.aclu.org/know-your-rights/know-your-rights-about-daca"},{title:"Border Zone Rights",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo non felis hendrerit \n\t\tporttitor. Sed venenatis a libero at bibendum.",link:"https://www.aclu.org/know-your-rights/border-zone"},{title:"Stopped By Officers",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo non felis hendrerit \n\t\tporttitor. Sed venenatis a libero at bibendum.",link:"https://www.aclu.org/know-your-rights/what-do-if-youre-stopped-police-immigration-agents-or-fbi"}],R={display:"inline-block",textAlign:"left",width:"80%"},G={Legal:{background:"hsl(0, 50%, 50%)",color:"hsl(0, 50%, 100%)"},General:{background:"hsl(25, 50%, 50%)",color:"hsl(25, 50%, 100%)"}},W=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"resourceGroup"},r.a.createElement("h3",null,this.props.category),this.props.content.map(function(t){return r.a.createElement(D,{path:t.link,background:G[e.props.category].background,color:G[e.props.category].color,cardClass:"resourceCardClass",title:t.title,description:t.description,internal:!1})}))}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ResourcesPage"},r.a.createElement(N,null),r.a.createElement("h2",null,"Resources"),r.a.createElement("div",{className:"resources-content",style:R},r.a.createElement(W,{category:"General",content:I}),r.a.createElement(W,{category:"Legal",content:P})))}}]),t}(n.Component),H=Object(g.b)(k)(M),J=a(43),Y=a(19),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={value:"",name:"",email:"",address:"",city:"",state:"",zip:""},a.handleSubmit=a.handleSubmit.bind(Object(Y.a)(Object(Y.a)(a))),a.handleChange=a.handleChange.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"TransferPage"},r.a.createElement(N,null),r.a.createElement("h2",null,"Transfer"),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-50"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("h3",null,"Billing Address"),r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement("label",{for:"fname"},r.a.createElement("i",{class:"fa fa-user"})," Full Name"),r.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"John M. Doe"}),r.a.createElement("label",{for:"email"},r.a.createElement("i",{class:"fa fa-envelope"})," Email"),r.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:"john@example.com"}),r.a.createElement("label",{for:"adr"},r.a.createElement("i",{class:"fa fa-address-card-o"})," Address"),r.a.createElement("input",{type:"text",id:"adr",name:"address",placeholder:"542 W. 15th Street"}),r.a.createElement("label",{for:"city"},r.a.createElement("i",{class:"fa fa-institution"})," City"),r.a.createElement("input",{type:"text",id:"city",name:"city",placeholder:"New York"}),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-50"},r.a.createElement("label",{for:"state"},"State"),r.a.createElement("input",{type:"text",id:"state",name:"state",placeholder:"NY"})),r.a.createElement("div",{class:"col-50"},r.a.createElement("label",{for:"zip"},"Zip"),r.a.createElement("input",{type:"text",id:"zip",name:"zip",placeholder:"10001"}))),r.a.createElement("div",{class:"col-50"},r.a.createElement("h3",null,"Payment"),r.a.createElement("label",{for:"cname"},"Name on Card"),r.a.createElement("input",{type:"text",id:"cname",name:"cardname",placeholder:"John More Doe"}),r.a.createElement("label",{for:"ccnum"},"Credit card number"),r.a.createElement("input",{type:"text",id:"ccnum",name:"cardnumber",placeholder:"1111-2222-3333-4444"}),r.a.createElement("label",{for:"expmonth"},"Exp Month"),r.a.createElement("input",{type:"text",id:"expmonth",name:"expmonth",placeholder:"September"}),r.a.createElement("input",{type:"text",id:"expyear",name:"expyear",placeholder:"2018"}),r.a.createElement("label",{for:"cvv"},"CVV"),r.a.createElement("input",{type:"text",id:"cvv",name:"cvv",placeholder:"352"}))),r.a.createElement("input",{type:"submit",value:"Submit"})))))}}]),t}(n.Component),U=Object(g.b)(k)(Q),V=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("h2",null,"Checklist"),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(Z,{message:"File Citizenship Form"}))),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(Z,{message:"Study for Citizenship test"}))),r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(Z,{message:"Complete I9"}))))}}]),t}(n.Component),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this))).state={checked:!1},a.handleClick=a.handleClick.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.setState({checked:!this.state.checked})}},{key:"render",value:function(){var e=this.state.checked?r.a.createElement("strike",null,this.props.message):this.props.message;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("input",{type:"checkbox",onClick:this.handleClick}),"\xa0",e,r.a.createElement("hr",null)))}}]),t}(r.a.Component),$=Object(g.b)(k)(V),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).props.language.lang!==a.props.match.params.lang&&a.props.dispatch({type:v,lang:a.props.match.params.lang}),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pages"},r.a.createElement(m.a,{exact:!0,path:"".concat(this.props.match.url,"/"),component:F}),r.a.createElement(m.a,{path:"".concat(this.props.match.url,"/resources"),component:H}),r.a.createElement(m.a,{path:"".concat(this.props.match.url,"/transfer"),component:U}),r.a.createElement(m.a,{path:"".concat(this.props.match.url,"/checklist"),component:$}))}}]),t}(n.Component),X=Object(g.b)(k)(K),ee=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{basename:""},r.a.createElement("div",{className:"router"},r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(h.a,{to:"/".concat(e.props.language.lang)})}}),r.a.createElement(m.a,{path:"/:lang",component:X}))))}}]),t}(n.Component),te=Object(g.b)(k)(ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(26),ne={en:"English",es:"Spanish"},re={lang:"en",name:"English"},ie=Object(ae.b)({language:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{lang:t.lang,name:ne[t.lang]};default:return e}}}),le=Object(ae.c)(ie);l.a.render(r.a.createElement(g.a,{store:le},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,t,a){e.exports=a(139)},89:function(e,t,a){},96:function(e,t,a){}},[[84,2,1]]]);
//# sourceMappingURL=main.245a1e53.chunk.js.map