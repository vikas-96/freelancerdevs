(this["webpackJsonpFreelancer-developers"]=this["webpackJsonpFreelancer-developers"]||[]).push([[12],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),s=a(50),l=a(33);t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null,c.a.createElement("meta",{name:"description",content:"Contact Us for creating an outstanding Professional Web Development, Website designing, eCommerce web development & seo services globally."}),c.a.createElement("meta",{name:"keyword",content:"Contact us, website developers india, web development services, web design services, seo services india, mobile application development, eCommerce web development, custom wordpress development"}),c.a.createElement("title",null,"Contact Website Developers Freelancer India for your Web Development Needs | freelancerdevs")),c.a.createElement("section",{className:"hero-wrap hero-wrap-2","data-stellar-background-ratio":"0.5"},c.a.createElement("div",{className:"overlay"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters slider-text js-fullheight align-items-end"},c.a.createElement("div",{className:"col-md-9 ftco-animate pb-5"},c.a.createElement("p",{className:"breadcrumbs"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(r.a,{to:"/"},"Home ",c.a.createElement("i",{className:"fa fa-chevron-right"})))," ",c.a.createElement("span",null,"Contact us ",c.a.createElement("i",{className:"fa fa-chevron-right"}))),c.a.createElement("h4",{className:"mb-3 bread"},"Get in touch with Our Experts!"))))),c.a.createElement("section",{className:"ftco-section contact-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row block-9 justify-content-center mb-5"},c.a.createElement("div",{className:"col-md-8 mb-md-5"},c.a.createElement("h2",{className:"text-center"},"Get in touch with Our Experts!"),c.a.createElement("div",{className:"bg-light p-5 contact-form"},c.a.createElement(s.a,{buttontext:"Send Message",page:"contactus"})),c.a.createElement("h2",{className:"text-center mt-5"},"If you got any questions please do not hesitate to send us a message. One of our Experts will contact you within 2 business days."))),c.a.createElement("div",{className:"row d-flex mb-5 contact-info justify-content-center"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"row mb-5"},c.a.createElement("div",{className:"col-md-6 text-center border-height py-4"},c.a.createElement("div",{className:"icon"},c.a.createElement("span",{className:"fa fa-phone"})),c.a.createElement("p",null,c.a.createElement("span",null,"Phone:")," ",c.a.createElement("a",{href:"tel:+919870352109"},"(+91) 9076352109"))),c.a.createElement("div",{className:"col-md-6 text-center py-4"},c.a.createElement("div",{className:"icon"},c.a.createElement("span",{className:"fa fa-paper-plane"})),c.a.createElement("p",null,c.a.createElement("span",null,"Email:")," ",c.a.createElement("a",{href:"mailto:freelancerdevelops@gmail.com"},"freelancerdevelops@gmail.com")))))))))}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=a(42),c=a.n(n);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c.a.post("https://api.forextwist.com/api/contactus_it",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data}))}function s(){return c.a.get("https://api.forextwist.com/api/contactus_it",{headers:{"Content-Type":"application/json",Authorization:null}}).then((function(e){return e.data}))}},50:function(e,t,a){"use strict";var n=a(41),c=a(61),r=a(49),s=a(0),l=a.n(s),o=a(62),m=a.n(o),i=a(63),u=a(64),p=a.n(u),d=(a(65),a(66),function(e){return new p.a(Object.assign({layout:"topRight",closeWith:["click","button"]},e)).show()}),h=a(14),f=function e(){Object(i.a)(this,e)};f.show=function(e){if(""!==e.message)switch(e.type){case"success":d({type:e.type,text:e.message,timeout:6e3}),e.path&&f.redirect(e.path);break;case"error":d({type:e.type,text:e.message,timeout:1e4}),e.path&&f.redirect(e.path);break;case"warning":case"info":d({type:e.type,text:e.message,timeout:8e3}),e.path&&f.redirect(e.path)}},f.redirect=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;setTimeout((function(){h.a.push(e)}),t||1e3)};var g=f,v=a(36),E={name:"",email:"",contact:"",comment:""};t.a=function(e){var t=Object(s.useState)(E),a=Object(r.a)(t,2),o=a[0],i=a[1],u=Object(s.useState)(!1),p=Object(r.a)(u,2),d=p[0],h=p[1],f=Object(s.useState)(),b=Object(r.a)(f,2)[1],N=Object(s.useRef)(new m.a),w=function(e){e.persist(),i((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(n.a)({},e.target.name,e.target.value))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"Your Name",value:o.name,onChange:w}),N.current.message("Name",o.name,"required")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Your Email",value:o.email,onChange:w}),N.current.message("Email-id",o.email,"required")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"number",className:"form-control",name:"contact",placeholder:"Phone No.",value:o.contact,onChange:w}),N.current.message("Phone No.",o.contact,"required")),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"comment",id:"",cols:"30",rows:"contactus"===e.page?"7":"5",className:"form-control",placeholder:"Message",value:o.comment,onChange:w}),N.current.message("Message",o.comment,"required")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:e.buttontext,className:"btn btn-primary py-3 px-5",onClick:function(e){if(e.preventDefault(),!N.current.allValid())return N.current.showMessages(),b(1),!1;h(!0),Object(v.a)(o).then((function(e){h(!1),g.show({type:"success",message:e.message}),i(E)})).catch((function(e){h(!1),g.show({type:"error",message:"Something went wrong, try again later."})}))},disabled:d})))}}}]);