(this["webpackJsonpqcm-blog"]=this["webpackJsonpqcm-blog"]||[]).push([[0],{61:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(27),c=a.n(r),o=a(26),i=a(9),s=a(78);function m(e){var t={height:"35px",width:"35px",border:e.border,borderRadius:"50%",fontSize:"0.9rem",backgroundColor:e.bg};return l.a.createElement("div",{className:"social-media-link"},l.a.createElement(s.a,{href:e.url},l.a.createElement("span",{className:"d-flex justify-content-center align-items-center",style:t},l.a.createElement("i",null,l.a.createElement("i",{class:e.class})))))}function u(e){return l.a.createElement("div",{className:"social-media"},l.a.createElement("ul",{className:"d-flex",style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement(m,{url:"https://www.facebook.com/Quizofficial.manit/",border:e.border,bg:e.bg,class:"fab fa-facebook-f"})),l.a.createElement("li",null,l.a.createElement(m,{url:"https://instagram.com/quizzersclub?igshid=way1wjiqu8pp",border:e.border,bg:e.bg,class:"fab fa-instagram"})),l.a.createElement("li",null,l.a.createElement(m,{url:"https://www.linkedin.com/company/quizzers-club-manit",border:e.border,bg:e.bg,class:"fab fa-linkedin-in"})),l.a.createElement("li",null,l.a.createElement(m,{url:"/contact",border:e.border,bg:e.bg,class:"far fa-envelope"}))))}function d(){return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg brand"},l.a.createElement("div",{className:"social-media-hide"},l.a.createElement(u,{border:"1px solid rgba(0,0,0,0.8)"})),l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("span",{style:{"font-family":"'Roboto Slab', serif",fontWeight:"500"}},"Quizzers' Club"),l.a.createElement("br",null),"MANIT"),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact Us"))))))}var f=a(5),g=a(45),E=a.n(g),p=a(34);p.a.initializeApp({apiKey:"AIzaSyAPBL5tJ2FE3QAaMBIpSGbptBzNnLxBn-M",authDomain:"reading-frenzy.firebaseapp.com",databaseURL:"https://reading-frenzy.firebaseio.com",projectId:"reading-frenzy",storageBucket:"reading-frenzy.appspot.com",messagingSenderId:"1014594846714",appId:"1:1014594846714:web:c3f10c286ff72ec37bae43",measurementId:"G-BLHDHFWL58"});var b=p.a;function h(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b.firestore().collection("Categories").where("top","==",!0).limit(4).onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push(e.data())})),r(t)}))}),[]),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("nav",{class:"navbar navbar-expand-lg"},l.a.createElement("button",{style:{backgroundColor:"#000",color:"#fff",margin:"auto"},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement(E.a,null)),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},a.map((function(e){return l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link hvr-underline-reveal",href:"/"+e.param},e.category))})),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link hvr-underline-reveal",href:"/categories"},"Categories"))))))}function y(){return l.a.createElement("div",{style:window.innerWidth<600?{padding:"0"}:{padding:"0 5%"}},l.a.createElement(d,null),l.a.createElement(h,null))}function v(e){return l.a.createElement("div",null,l.a.createElement("a",{style:{fontSize:"0.8rem"},className:"link",href:e.href},e.text))}function x(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],c=a[1];b.storage().ref().child("images/"+e.bg).getDownloadURL().then((function(e){c(e)}));var o={backgroundImage:"url("+r+")",backgroundSize:"cover",backgroundPosition:"center"};return l.a.createElement("div",{style:o},l.a.createElement("div",{className:"shade d-flex justify-content-center align-items-center",style:{minHeight:"450px"}},l.a.createElement("div",null,l.a.createElement("h6",{style:{textTransform:"upperCase",fontSize:"0.9rem",color:"#eeeeee",opacity:"0.6",letterSpacing:"0.5px"}},e.category),l.a.createElement("h1",{style:{fontFamily:"'EB Garamond', serif",color:"#4ecca3"}},e.title),l.a.createElement("h5",{style:{fontFamily:"'Karla', sans-serif"}},e.content),l.a.createElement("br",null),"none"===e.linkDisplay?"":l.a.createElement(v,{text:"Keep Reading",href:"/posts/"+e.id}))))}var N=a(74),S=a(75);function j(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){b.firestore().collection("Blogs").where("carousel","==","yes").limit(3).onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push([e.id,e.data()])})),c(t)}))}),[]),l.a.createElement("div",null,l.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel","data-pause":"hover","data-interval":"10000"},l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("div",{style:{backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2Fbulb.png?alt=media&token=a2ab8eff-aedf-466b-b9f7-e2c32545da82)",backgroundSize:"cover",backgroundPosition:"center"}},l.a.createElement(x,{category:"Quizzers' Club MANIT",title:"Welcome to Quizzers' Club MANIT's Blog",content:"",linkDisplay:"none"}))),r.map((function(e){return l.a.createElement("div",{className:"carousel-item"},l.a.createElement(x,{category:e[1].category,title:e[1].title,content:e[1].content.substring(0,100)+"...",id:e[0],bg:e[1].time}))}))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},l.a.createElement(N.a,{style:{fontSize:"30",color:"#4ecca3"}}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},l.a.createElement(S.a,{style:{fontSize:"30",color:"#4ecca3"}}),l.a.createElement("span",{className:"sr-only"},"Next"))))}function w(e){return l.a.createElement("div",{style:{background:"url("+e.bg+")",backgroundSize:"cover",backgroundPosition:"center"}},l.a.createElement("div",{className:"categoryTile",style:{backgroundColor:"rgba(0,0,0,0.5)"}},l.a.createElement("div",null,l.a.createElement("span",{style:{textTransform:"upperCase",letterSpacing:"1px",fontSize:"0.9rem"}},e.category))))}function O(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b.firestore().collection("Categories").where("top","==",!0).limit(4).onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push(e.data())})),r(t)}))}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"row category-section"},a.map((function(e){return l.a.createElement("div",{className:"col-lg col-md-6"},l.a.createElement("a",{style:{textDecoration:"none"},href:"/"+e.param},l.a.createElement(w,{category:e.category,bg:e.imgURL})))}))),l.a.createElement("a",{href:"/categories",style:{float:"right",color:"#010101"}},"View all"))}function z(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],c=a[1];return b.storage().ref().child("images/"+e.bg).getDownloadURL().then((function(e){c(e)})),l.a.createElement("div",null,l.a.createElement("div",{className:"featured-tile",style:{backgroundImage:"url("+r+")",backgroundSize:"cover",backgroundPosition:"center"}},l.a.createElement("div",{className:"featured-blog-type"},l.a.createElement("h6",{style:{textTransform:"upperCase",fontSize:"0.9rem",color:"#010101",opacity:"0.6","letter-spacing":"0.5px"}},e.category))),l.a.createElement("div",{className:"featured-blog-described"},l.a.createElement("h2",{style:{fontFamily:'"EB Garamond", serif',padding:"2% 0"}},e.title),l.a.createElement(v,{text:"Read More",href:"/posts/"+e.id})))}function C(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b.firestore().collection("Blogs").where("featured","==","yes").limit(3).onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push([e.id,e.data()])})),r(t)}))}),[]),l.a.createElement("div",{className:"featured-section"},l.a.createElement("h1",{style:{fontFamily:'"EB Garamond", serif'}},"Featured"),l.a.createElement("hr",{style:{border:"0",borderTop:"1px solid rgba(0,0,0,0.3)"}}),l.a.createElement("div",{className:"row row-eq-height"},a.map((function(e){return l.a.createElement("div",{className:"col-lg col-md-6"},l.a.createElement(z,{title:e[1].title,category:e[1].category,id:e[0],bg:e[1].time}))}))))}function k(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],c=a[1];return b.storage().ref().child("images/"+e.bg).getDownloadURL().then((function(e){c(e)})),l.a.createElement("div",{style:{padding:"0 0 0 0"}},l.a.createElement("div",{className:"latest-tile",style:{backgroundImage:"url("+r+")",backgroundSize:"cover",backgroundPosition:"center"}},l.a.createElement("div",{className:"latest-blog-type"},l.a.createElement("h6",{style:{textTransform:"upperCase",fontSize:"0.9rem",color:"#010101",opacity:"0.6",letterSpacing:"0.5px"}},e.category))),l.a.createElement("div",{className:"latest-blog-described"},l.a.createElement("h2",{style:{fontFamily:'"EB Garamond", serif'}},e.title),l.a.createElement("p",{style:{padding:"1.5% 0",opacity:"0.9",letterSpacing:"0.7px"}},e.content),l.a.createElement(v,{text:"Continue Reading.....",href:"/posts/"+e.id}),l.a.createElement("hr",{style:{border:"0",borderTop:"1px solid rgba(0,0,0,0.3)",marginTop:"8%"}}),l.a.createElement("p",{style:{fontFamily:'"EB Garamond", serif',opacity:"0.8",display:"inline",fontSize:"0.8rem"}},e.author,l.a.createElement("span",{style:{float:"right"}},e.date))))}function B(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b.firestore().collection("Blogs").limit(10).orderBy("time","desc").onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push([e.id,e.data()])})),r(t)}))}),[]),l.a.createElement("div",null,l.a.createElement("h1",{style:{fontFamily:'"EB Garamond", serif'}},"Latest"),l.a.createElement("hr",{style:{border:"0",borderTop:"1px solid rgba(0,0,0,0.3)"}}),l.a.createElement("div",{className:"latest-section"},a.map((function(e){return l.a.createElement(k,{author:e[1].author,date:e[1].date,bg:e[1].time,category:e[1].category,title:e[1].title,content:e[1].content.substring(0,100)+"...",id:e[0]})}))))}function T(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],c=a[1];return b.storage().ref().child("images/"+e.bg).getDownloadURL().then((function(e){c(e)})),l.a.createElement("div",{className:"grid-container",style:{"margin-bottom":"3%"}},l.a.createElement("div",{className:"grid-item d-flex align-items-center"},l.a.createElement("span",{className:"d-flex justify-content-center align-items-center",style:{height:"30px",width:"30px",border:"1px solid rgba(0,0,0,0.8)",borderRadius:"3px",transform:"rotate(45deg)"}},l.a.createElement("b",{style:{transform:"rotate(-45deg)"}},e.num))),l.a.createElement("div",{className:"grid-item d-flex align-items-center"},l.a.createElement("h5",{style:{fontFamily:'"EB Garamond",serif',textAlign:"left"}},e.title)),l.a.createElement("div",{className:"grid-item d-flex align-items-center",style:{justifyContent:"flex-end"}},l.a.createElement("div",{className:"liked-img"},l.a.createElement("img",{alt:"",width:"100%",src:r}))))}function F(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b.firestore().collection("Categories").where("top","==",!0).limit(4).onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push(e.data())})),r(t)}))}),[]),l.a.createElement("div",null,a.map((function(e){return l.a.createElement(s.a,{className:"category-link",href:"/"+e.param},l.a.createElement("div",{style:{width:"100%",padding:"2%",borderBottom:"1px solid rgba(0,0,0,0.2)",color:"rgba(0,0,0,0.8)"}},e.category,l.a.createElement("span",{className:"forward",style:{float:"right",opacity:"0.6"}},l.a.createElement(S.a,{style:{fontSize:"20"}}))))})))}function A(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b.firestore().collection("Blogs").where("editorChoice","==","yes").limit(5).onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push([e.id,e.data()])})),r(t)}))}),[]),l.a.createElement("div",{className:"about-section"},l.a.createElement("h2",{style:{fontFamily:'"EB Garamond",serif'}},"About Us"),l.a.createElement("div",{className:"about-img"},l.a.createElement("img",{alt:"logo-img",width:"100%",src:"Assets/logo.png"})),l.a.createElement("p",{style:{textAlign:"center",padding:"5%",letterSpacing:"0.5px","font-family":"'Karla', sans-serif"}},"Quizzers' Club MANIT (QCM) is the official quizzing club of Maulana Azad Institute of Technology, Bhopal. QCM is formed by a bunch of quizzing prodigies of MANIT in Feb 2013. We are a group of enthusiastic quizzers, executives, designers and web developers. The purpose of the society is to promote quizzing, group discussion, debate to increase the general awareness in the student community."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{style:{fontFamily:'"EB Garamond",serif'}},"Editor's Choice"),a.map((function(e,t){return l.a.createElement("a",{style:{color:"#000",textDecoration:"none"},href:"/posts/"+e[0]},l.a.createElement(T,{num:t+1,title:e[1].title,bg:e[1].time}))})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",{style:{fontFamily:'"EB Garamond",serif'}},"Follow Us"),l.a.createElement(u,{border:"1px solid rgba(0,0,0,0.8)"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",{style:{fontFamily:'"EB Garamond",serif'}},"Categories"),l.a.createElement(F,null))}var I=a(76);function q(){var e=(new Date).getFullYear();return l.a.createElement("div",{style:{backgroundColor:"#000",padding:"2% 0"}},l.a.createElement("a",{style:{"text-align":"center",color:"#fff"},class:"navbar-brand",href:"/"},l.a.createElement("span",{style:{"font-family":"'Roboto Slab', serif",fontWeight:"500"}},"QCM")),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("a",{style:{color:"#fff",padding:"1% 1.2%"},href:"/categories"},"Categories"),l.a.createElement("a",{style:{color:"#fff",padding:"1% 1.2%"},href:"/about"},"About Us"),l.a.createElement("a",{style:{color:"#fff",padding:"1% 1.2%"},href:"/contact"},"Contact Us")),l.a.createElement("div",{style:{transform:"translateX(10px)"},className:"d-flex justify-content-center"},l.a.createElement(u,{bg:"#fff",border:"1px solid rgba(255,255,255,1)"})),l.a.createElement("p",{style:{color:"#fff",textAlign:"center",fontFamily:'"Karla", sans-serif;',opacity:"0.8",fontSize:"0.9rem"}},l.a.createElement(I.a,null)," All Rights reserved. Quizzers' Club MANIT ",e))}function M(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{style:{padding:"0 5%"}},l.a.createElement(j,null)),l.a.createElement("br",null),l.a.createElement("div",{style:{padding:"0 5%"}},l.a.createElement(O,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{padding:"0 5%"}},l.a.createElement(C,null)),l.a.createElement("br",null),l.a.createElement("div",{style:{padding:"0 5%"},className:"row"},l.a.createElement("div",{className:"col-lg-8"},l.a.createElement(B,null)),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(A,null))),l.a.createElement(q,null))}function G(){var e=Object(n.useState)("#fff"),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("#000"),o=Object(f.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)("#4ecca3"),u=Object(f.a)(m,2),d=u[0],g=u[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>window.innerHeight/4?(r("#000"),s("#fff"),g("#fff")):(r("#fff"),s("#000"),g("#4ecca3"))}))}),[]),Object(n.useEffect)((function(){window.innerWidth>600&&(document.getElementById("aboutText").style.fontSize="1.3rem")}),[]),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{style:{transition:"background 1s ease",padding:"0 5%",backgroundColor:a,color:i}},l.a.createElement("div",{style:{backgroundImage:"url(Assets/collage.jpeg)",textAlign:"center",backgroundSize:"cover",backgroundAttachment:"fixed",scrollBehaviour:"smooth"}},l.a.createElement("div",{style:{padding:"12%"},className:"shade"},l.a.createElement("h1",{style:{fontFamily:'"EB Garamond",serif',fontSize:"3rem",color:d}},"About Us"))),l.a.createElement("br",null),l.a.createElement("h1",{style:{fontFamily:'"EB Garamond",serif',textAlign:"center",fontWeight:"550"}},"Simplifying Quizzes"),l.a.createElement("div",{style:{width:"50px",height:"3px",backgroundColor:i,margin:"5px auto",borderRadius:"2px"}}),l.a.createElement("div",{style:{width:"40px",height:"3px",backgroundColor:i,margin:"5px auto",borderRadius:"2px"}}),l.a.createElement("div",{style:{width:"30px",height:"3px",backgroundColor:i,margin:"5px auto",borderRadius:"2px"}}),l.a.createElement("br",null),l.a.createElement("p",{id:"aboutText",style:{"font-family":"'Karla', sans-serif",padding:"2% 5%",fontSize:"1rem",fontWeight:"550",marginBottom:"0",textAlign:"justify",textAlignLast:"center"}},"Quizzers' Club MANIT (QCM) is the official quizzing club of Maulana Azad Institute of Technology Bhopal. QCM is formed by a bunch of quizzing prodigies of MANIT in Feb 2013. We are a group of enthusiastic quizzers, executives, designers and web developers. The purpose of the society is to promote quizzing, group discussion and debate to increase general awareness in the student community. Quizzers' Club conducts various events throughout the year, each of them having an excellent footfall from MP and beyond.",l.a.createElement("br",null),l.a.createElement("br",null),"The leading events organized by Quizzers' Club MANIT are Manthan (The Flagship Event), TQQW, Quizzotica and Vihaan. Behind all these events, the purpose is to bring like-minded quizzing enthusiasts together and let them compete & learn with mutual sharing of ideas and knowledge, along the side providing them with an opportunity to prove their mettle in quizzing.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{width:"50px",height:"3px",backgroundColor:i,margin:"5px auto",borderRadius:"2px"}}),l.a.createElement("br",null))),l.a.createElement(q,null))}function U(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(f.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(""),u=Object(f.a)(m,2),d=u[0],g=u[1],E=Object(n.useState)(""),p=Object(f.a)(E,2),h=p[0],v=p[1],N=Object(n.useState)(""),S=Object(f.a)(N,2),j=S[0],w=S[1];return l.a.createElement("div",{style:{backgroundColor:"fff"}},l.a.createElement(y,null),l.a.createElement("div",{style:{padding:"0 5%"}},l.a.createElement("div",{style:{backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/reading-frenzy.appspot.com/o/static%2F2.jpg?alt=media&token=9be2ec0d-c6f6-4d91-b614-780ae225d65d)",backgroundSize:"cover",backgroundPosition:"center"}},l.a.createElement(x,{category:"Get in Touch",title:"Contact Us",content:"Drop us a line. We would love to hear from you. ",linkDisplay:"none"}))),l.a.createElement("br",null),l.a.createElement("div",{style:{padding:"0 5%"},class:"row padding no-gutters"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{style:{fontFamily:'"EB Garamond",serif'}},"Find Us"),l.a.createElement("div",{className:"contact-details"},l.a.createElement("i",{className:"fas fa-university"}),l.a.createElement("p",null,"Address"),l.a.createElement("h6",null,"NIT Bhopal,",l.a.createElement("br",null),"Madhya Pradesh,",l.a.createElement("br",null),"India")),l.a.createElement("div",{className:"contact-details"},l.a.createElement("i",{className:"far fa-envelope"}),l.a.createElement("p",null,"Mail Us"),l.a.createElement("h6",null,"quizzersclubmanit@gmail.com"))),l.a.createElement("div",{className:"col-lg-8 contact-panel"},l.a.createElement("h1",{style:{fontFamily:'"EB Garamond",serif'}},"Message Us"),l.a.createElement("hr",{style:{border:"0",borderTop:"1px solid rgba(0,0,0,0.3)"}}),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:a,onChange:function(e){return r(e.target.value)},type:"text",style:{width:"100%",background:"none"},placeholder:"Name",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:h,onChange:function(e){return v(e.target.value)},type:"text",style:{width:"100%",background:"none"},placeholder:"E-Mail",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:i,onChange:function(e){return s(e.target.value)},type:"text",style:{width:"100%",background:"none"},placeholder:"What is it about?",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{value:d,onChange:function(e){return g(e.target.value)},style:{width:"100%",backgroundColor:"rgba(0,0,0,0)"},placeholder:"Message",required:!0,rows:"4"})),l.a.createElement("button",{onClick:function(e){""===a||""===h||""===i||""===d?(w(l.a.createElement("p",{style:{color:"red"}},"Fill out all the fields first")),setTimeout((function(){w("")}),3e3)):b.firestore().collection("Messages").doc().set({name:a,email:h,topic:i,message:d}).then((function(){w(l.a.createElement("p",{style:{color:"green"}},"Your message has been sent")),setTimeout((function(){w("")}),3e3)}))},className:"contact-form-button"},"Send A Message"),l.a.createElement("br",null),l.a.createElement("p",null,j))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(q,null))}function R(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b.firestore().collection("Categories").onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push(e.data())})),r(t)}))}),[]),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{padding:"0 5%"}},l.a.createElement("h1",{style:{fontFamily:'"EB Garamond",serif'}},"Categories")),l.a.createElement("div",{style:{padding:"0 5%"},className:"row"},a.map((function(e){return l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("a",{href:"/"+e.param,style:{textDecoration:"none"}},l.a.createElement(w,{category:e.category,bg:e.imgURL})))}))),l.a.createElement(q,null))}function D(){var e=Object(i.f)().id,t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)([]),s=Object(f.a)(o,2),m=s[0],u=s[1];Object(n.useEffect)((function(){b.firestore().collection("Blogs").doc(e).get().then((function(t){c(t.data()),b.firestore().collection("Blogs").where("author","==",t.data().author).onSnapshot((function(t){var a=[];t.docs.map((function(t){t.id!==e&&a.push([t.id,t.data()])})),u(a)}))}))}),[]);var d=Object(n.useState)(""),g=Object(f.a)(d,2),E=g[0],p=g[1];return b.storage().ref().child("images/"+r.time).getDownloadURL().then((function(e){p(e)})),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{style:window.innerWidth<600?{padding:"0"}:{padding:"0 20%"}},l.a.createElement("div",{style:{padding:"0 0 0 0"}},l.a.createElement("div",{className:"latest-tile",style:{backgroundImage:"url("+E+")",backgroundSize:"cover",backgroundPosition:"center"}},l.a.createElement("div",{className:"latest-blog-type"},l.a.createElement("h6",{style:{textTransform:"upperCase",fontSize:"0.9rem",color:"#010101",opacity:"0.6",letterSpacing:"0.5px"}},"        ",r.category))),l.a.createElement("div",{className:"latest-blog-described"},l.a.createElement("h2",{style:{fontFamily:'"EB Garamond", serif'}},r.title),l.a.createElement("p",{style:{padding:"2% 0",opacity:"0.9",letterSpacing:"0.7px",whiteSpace:"pre-wrap",textAlign:"justify"}},r.content),l.a.createElement("hr",{style:{border:"0",borderTop:"1px solid rgba(0,0,0,0.3)",marginTop:"8%"}}),l.a.createElement("p",{style:{fontFamily:'"EB Garamond", serif',opacity:"0.8",display:"inline",fontSize:"0.8rem"}},r.author,l.a.createElement("span",{style:{float:"right"}},r.date))))),l.a.createElement("br",null),l.a.createElement("div",{style:window.innerWidth<600?{padding:"2% 0"}:{padding:"2% 20%"}},m.length?l.a.createElement("h4",{style:{fontFamily:'"EB Garamond", serif',padding:"0 20px"}},"More from ",r.author):l.a.createElement("p",null),m.map((function(e,t){return l.a.createElement("a",{style:{color:"#000",textDecoration:"none"},href:"/posts/"+e[0]},l.a.createElement(T,{num:t+1,title:e[1].title,bg:e[1].time}))}))),l.a.createElement(q,null))}function Q(){var e=Object(i.f)().category,t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(),s=Object(f.a)(o,2),m=s[0],d=s[1];Object(n.useEffect)((function(){b.firestore().collection("Blogs").where("category","==",e).onSnapshot((function(e){var t=[];e.docs.forEach((function(e){return t.push([e.id,e.data()])})),c(t)}))}),[]);var g=Object(n.useState)([]),E=Object(f.a)(g,2),p=E[0],h=E[1];return Object(n.useEffect)((function(){b.firestore().collection("Blogs").where("category","==",e).where("trending","==","yes").limit(5).onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push([e.id,e.data()])})),t.length&&d(l.a.createElement(x,{category:t[0][1].category,title:t[0][1].title,content:t[0][1].content.substring(0,100)+"...",id:t[0][0],bg:t[0][1].time})),h(t)}))}),[]),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{style:{padding:"0 5%"}},m,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h6",{style:{textTransform:"upperCase",fontSize:"0.9rem",color:"#000",opacity:"0.6",letterSpacing:"0.5px"}},"Category"),l.a.createElement("h1",{style:{fontFamily:'"EB Garamond", serif'}},e.charAt(0).toUpperCase()+e.slice(1)),l.a.createElement("hr",{style:{border:"0",borderTop:"1px solid rgba(0,0,0,0.3)"}}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("div",{className:"row"},r.map((function(e){return l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(z,{title:e[1].title,category:e[1].category,id:e[0],bg:e[1].time}),l.a.createElement("br",null))})))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("h2",{style:{fontFamily:'"EB Garamond",serif'}},"Trending in ",e.charAt(0).toUpperCase()+e.slice(1)),p.map((function(e,t){return l.a.createElement("a",{href:"/posts/"+e[0],style:{color:"#000",textDecoration:"none"}},l.a.createElement(T,{num:t+1,title:e[1].title,bg:e[1].time}))})),l.a.createElement("br",null),l.a.createElement("h3",{style:{fontFamily:'"EB Garamond",serif'}},"Follow Us"),l.a.createElement(u,{border:"1px solid rgba(0,0,0,0.8)"}),l.a.createElement("br",null),l.a.createElement("h3",{style:{fontFamily:'"EB Garamond",serif'}},"Categories"),l.a.createElement(F,null)))),l.a.createElement(q,null))}var W=a(77);function L(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(f.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(""),u=Object(f.a)(m,2),g=u[0],E=u[1],p=Object(n.useState)(""),h=Object(f.a)(p,2),y=h[0],v=h[1],x=Object(n.useState)(""),N=Object(f.a)(x,2),S=N[0],j=N[1],w=Object(n.useState)(""),O=Object(f.a)(w,2),z=O[0],C=O[1],k=Object(n.useState)(""),B=Object(f.a)(k,2),T=B[0],F=B[1],A=Object(n.useState)(""),I=Object(f.a)(A,2),M=I[0],G=I[1],U=Object(n.useState)(""),R=Object(f.a)(U,2),D=R[0],Q=R[1],L=Object(n.useState)(""),P=Object(f.a)(L,2),Y=P[0],K=P[1],H=Object(n.useState)([]),J=Object(f.a)(H,2),V=J[0],X=J[1];Object(n.useEffect)((function(){b.firestore().collection("Categories").onSnapshot((function(e){var t=[];e.docs.map((function(e){t.push(e.data())})),X(t)}))}),[]);return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{style:window.innerWidth<500?{padding:"0 5%"}:{padding:"0 10%"}},l.a.createElement("div",{className:"contact-panel"},l.a.createElement("h1",{style:{fontFamily:'"EB Garamond",serif'}},"Write a Blog"),l.a.createElement("hr",{style:{border:"0",borderTop:"1px solid rgba(0,0,0,0.3)"}}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Blog Category"),l.a.createElement("select",{value:i,onChange:function(e){return s(e.target.value)},className:"form-control",type:"text",style:{width:"100%",background:"none"},required:!0},l.a.createElement("option",{value:""},"Select a Category"),V.map((function(e){return l.a.createElement("option",{value:e.param},e.category)})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Show in Editor's Choice?"),l.a.createElement("select",{value:y,onChange:function(e){return v(e.target.value)},className:"form-control",type:"text",style:{width:"100%",background:"none"},required:!0},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"yes"},"Yes"),l.a.createElement("option",{value:"no"},"No"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Show in Featured?"),l.a.createElement("select",{value:g,onChange:function(e){return E(e.target.value)},className:"form-control",type:"text",style:{width:"100%",background:"none"},required:!0},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"yes"},"Yes"),l.a.createElement("option",{value:"no"},"No"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Show in Carousel?"),l.a.createElement("select",{value:M,onChange:function(e){return G(e.target.value)},className:"form-control",type:"text",style:{width:"100%",background:"none"},required:!0},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"yes"},"Yes"),l.a.createElement("option",{value:"no"},"No"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Show in Trending?"),l.a.createElement("select",{value:D,onChange:function(e){return Q(e.target.value)},className:"form-control",type:"text",style:{width:"100%",background:"none"},required:!0},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"yes"},"Yes"),l.a.createElement("option",{value:"no"},"No"))),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:S,onChange:function(e){return j(e.target.value)},type:"text",style:{width:"100%",background:"none"},placeholder:"Author",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:z,onChange:function(e){return C(e.target.value)},type:"text",style:{width:"100%",background:"none"},placeholder:"Title",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{value:T,onChange:function(e){return F(e.target.value)},style:{width:"100%",backgroundColor:"rgba(0,0,0,0)"},placeholder:"Content",required:!0,rows:"3"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{id:"photo",value:Y,onChange:function(e){return K(e.target.value)},type:"file",style:{width:"100%",background:"none"},placeholder:"Title",required:!0})),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){var e=(new Date).getTime(),t=document.getElementById("photo").files[0];if(""===i||""===g||""===y||""===S||""===z||""===T||""===M||""===D||void 0===t)document.getElementById("message").style.visibility="visible",r(l.a.createElement("p",{style:{color:"#000",padding:"10px 30px",margin:"auto"}},l.a.createElement("i",{style:{color:"red"},class:"fad fa-exclamation-circle"})," Fill out all the fields first.")),setTimeout((function(){r(""),document.getElementById("message").style.visibility="hidden"}),3e3);else{b.firestore().collection("Blogs").doc().set({category:i,editorChoice:y,featured:g,author:S,title:z,content:T,date:(new Date).toDateString(),carousel:M,trending:D,time:e}).then((function(){document.getElementById("message").style.visibility="visible",r(l.a.createElement("p",{style:{color:"#000",padding:"10px 30px",margin:"auto"}},"Publishing blog  ",l.a.createElement(W.a,{color:"#000",size:"20px"})))})).catch((function(e){r(l.a.createElement("p",{style:{color:"#000",padding:"10px 30px",margin:"auto"}},l.a.createElement("i",{style:{color:"red"},class:"fad fa-exclamation-circle"})," Some error has occured")),setTimeout((function(){r(""),document.getElementById("message").style.visibility="hidden"}),3e3)}));var a={contentType:t.type};b.storage().ref().child("images/"+e).put(t,a).then((function(e){r(l.a.createElement("p",{style:{color:"#000",padding:"10px 30px",margin:"auto"}},l.a.createElement("i",{style:{color:"#38b000"},class:"fa fa-check-circle","aria-hidden":"true"})," Blog published")),j(""),v(""),E(""),Q(""),G(""),s(""),F(""),C(""),setTimeout((function(){r(""),document.getElementById("message").style.visibility="hidden"}),3e3),console.log(e.ref.fullPath)}))}},className:"contact-form-button"},"Publish"),l.a.createElement("div",{id:"message",style:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#fff",display:"flex",justifyContent:"center",alignItems:"center",visibility:"hidden",borderRadius:"8px",border:"2px solid #4ecca3","z-index":"66",boxShadow:"1px 1px 18px 4px rgba(255,255,255,0.2)"}},a))),l.a.createElement("br",null),l.a.createElement(q,null))}function P(){return l.a.createElement("div",{className:"body"},l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0},l.a.createElement(M,null)),l.a.createElement(i.a,{path:"/write-blog"},l.a.createElement(L,null)),l.a.createElement(i.a,{path:"/about"},l.a.createElement(G,null)),l.a.createElement(i.a,{path:"/contact"},l.a.createElement(U,null)),l.a.createElement(i.a,{path:"/categories"},l.a.createElement(R,null)),l.a.createElement(i.a,{path:"/posts/:id",exact:!0},l.a.createElement(D,null)),l.a.createElement(i.a,{path:"/:category",exact:!0},l.a.createElement(Q,null)))))}c.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.367fc456.chunk.js.map