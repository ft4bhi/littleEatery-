(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8459:function(e,t,s){Promise.resolve().then(s.bind(s,5768)),Promise.resolve().then(s.bind(s,8015)),Promise.resolve().then(s.bind(s,5175)),Promise.resolve().then(s.bind(s,3624)),Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.t.bind(s,3429,23)),Promise.resolve().then(s.t.bind(s,7527,23)),Promise.resolve().then(s.t.bind(s,9051,23)),Promise.resolve().then(s.t.bind(s,5291,23))},5175:function(e,t,s){"use strict";var l=s(7437),a=s(2265),i=s(518),r=s(7592);t.default=()=>{let[e,t]=(0,a.useState)(2),[s,n]=(0,a.useState)(0),o=[{id:1,name:"Straw Cake",price:"$10",rating:"4.5",img:"/images/cake.jpeg"},{id:2,name:"Pancake",price:"$8",rating:"4.7",img:"/images/pancake.jpeg"},{id:3,name:"Special Pizza",price:"$20",rating:"4.8",img:"/images/pizza.jpeg"},{id:4,name:"Meatball",price:"$15",rating:"4.6",img:"/images/meatball.jpeg"},{id:5,name:"Burger",price:"$12",rating:"4.4",img:"/images/burger.jpeg"}];return(0,l.jsxs)("div",{className:"pt-10 mb-10 px-4 overflow-hidden relative",children:[(0,l.jsx)("p",{className:"text-center text-[#EC994B] md:text-[20px] text-[16px]",children:"-Popular Delivery-"}),(0,l.jsx)("h2",{className:"text-center md:text-[40px] text-[30px] font-bold mb-6",children:"Trending Food"}),(0,l.jsxs)("div",{className:"relative h-[500px] max-w-6xl mx-auto",children:[(0,l.jsx)("div",{className:"relative h-full flex items-center justify-center",children:(()=>{let t=[],s=o.length;for(let l=2;l>0;l--){let a=(e-l+s)%s;t.push({...o[a],position:-l})}t.push({...o[e],position:0});for(let l=1;l<=2;l++){let a=(e+l)%s;t.push({...o[a],position:l})}return t})().map(e=>{let t,s,a;let i=e.position;return 0===Math.abs(i)?(t=1,s=1,a="0%"):1===Math.abs(i)?(t=.9,s=.85,a=60*i+"%"):(t=.8,s=.7,a=63*i+"%"),(0,l.jsx)("div",{className:"absolute  transition-all ease-in-out duration-500 md:w-[500px]",style:{transform:"translateX(".concat(a,") scale(").concat(s,")"),zIndex:5-Math.abs(i),opacity:t},children:(0,l.jsxs)("div",{className:"relative rounded-lg overflow-hidden shadow-lg",children:[(0,l.jsx)("img",{src:e.img,alt:e.name,className:"h-[400px] w-full object-cover"}),(0,l.jsxs)("div",{className:"absolute bottom-4 left-4 text-left",children:[(0,l.jsx)("h3",{className:"text-3xl font-poppins font-semibold text-white",children:e.name}),(0,l.jsxs)("p",{className:"text-white text-xl",children:[e.rating," ","⭐".repeat(Math.floor(parseFloat(e.rating)))]})]}),(0,l.jsx)("div",{className:"absolute top-4 right-3 px-6 py-1 border-4 text-center rounded-full text-lg",children:(0,l.jsx)("p",{className:"text-white",children:e.price})})]})},e.id)})}),(0,l.jsx)("button",{onClick:()=>{n(-1),t(e=>(e-1+o.length)%o.length)},className:"absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors",children:(0,l.jsx)(i.Z,{className:"w-6 h-6"})}),(0,l.jsx)("button",{onClick:()=>{n(1),t(e=>(e+1)%o.length)},className:"absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors",children:(0,l.jsx)(r.Z,{className:"w-6 h-6"})})]}),(0,l.jsx)("div",{className:"absolute bottom-4 right-0 left-0 z-40",children:(0,l.jsx)("div",{className:"flex items-center justify-center gap-2",children:o.map((s,a)=>(0,l.jsx)("div",{onClick:()=>t(a),className:"cursor-pointer transition-all w-2 h-2 rounded-full ".concat(e===a?"bg-[#EC994b] p-2":"bg-gray-500 bg-opacity-50")},a))})})]})}},5768:function(e,t,s){"use strict";var l=s(7437),a=s(518),i=s(7592),r=s(2265);t.default=e=>{let{children:t}=e,[s,n]=(0,r.useState)(0),o=()=>n(e=>e===t.length-1?0:e+1);return(0,r.useEffect)(()=>{let e=setInterval(o,3e3);return()=>clearInterval(e)},[t.length]),(0,l.jsxs)("div",{className:"relative w-full md:h-[500px] h-[600px] overflow-hidden",children:[(0,l.jsx)("div",{className:"flex transition-transform ease-out duration-500 w-full h-full",style:{transform:"translateX(-".concat(100*s,"%)")},children:t.map((e,t)=>(0,l.jsx)("div",{className:"w-full flex-shrink-0",style:{backgroundSize:"cover",backgroundPosition:"center",boxShadow:"-2px -4px 5px rgba(0, 0, 0, 0.5)"},children:e},t))}),(0,l.jsx)("button",{onClick:()=>n(e=>0===e?t.length-1:e-1),className:"absolute left-4 md:block hidden sm:left-8 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors","aria-label":"Previous slide",children:(0,l.jsx)(a.Z,{className:"w-6 h-6"})}),(0,l.jsx)("button",{onClick:o,className:"absolute md:block hidden right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors","aria-label":"Next slide",children:(0,l.jsx)(i.Z,{className:"w-6 h-6"})}),(0,l.jsx)("div",{className:"absolute bottom-4 w-full flex justify-center gap-2",children:t.map((e,t)=>(0,l.jsx)("div",{onClick:()=>n(t),className:"cursor-pointer transition-all w-2 h-2 rounded-full ".concat(s===t?"bg-[#EC994B] p-2":"bg-white bg-opacity-50")},t))})]})}},8015:function(e,t,s){"use strict";var l=s(7437),a=s(2265),i=s(3153);s(9051),s(5291);var r=s(518),n=s(7592);let o=[{name:"Ama Ampomah",title:"CEO & Founder Inc",text:"Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque.",imgSrc:"/images/Rectangle 10.svg"},{name:"Kweku Annan",title:"CEO & Founder Inc",text:"Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque.",imgSrc:"/images/Rectangle 10.svg"}];t.default=()=>{let[e,t]=(0,a.useState)(null);return(0,l.jsxs)("div",{className:"w-full relative h-auto text-center text-base text-dimgray font-inter my-20",children:[(0,l.jsx)("b",{className:"leading-tight inline-block font-david-libre md:text-[40px] text-[28px]",children:"Our Happy Customers"}),(0,l.jsx)(i.Z,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,ref:t,className:"mt-12 mx-auto md:w-[60%] w-[75%]",children:o.map((e,t)=>(0,l.jsxs)("div",{className:"border-2 p-8 rounded-md relative flex flex-col items-center h-[250px]",children:[(0,l.jsx)("img",{className:"w-20 h-20 rounded-full mx-auto mb-4",alt:"".concat(e.name,"'s photo"),src:e.imgSrc}),(0,l.jsx)("p",{className:"mb-2 text-sm text-gray-700",children:e.text}),(0,l.jsx)("b",{className:"text-gray-900",children:e.name}),(0,l.jsx)("div",{className:"text-sm text-gray-500",children:e.title})]},t))}),(0,l.jsx)("button",{onClick:()=>null==e?void 0:e.slickPrev(),className:"absolute md:left-20 left-4 top-[50%] -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors","aria-label":"Previous Slide",children:(0,l.jsx)(r.Z,{className:"w-6 h-6"})}),(0,l.jsx)("button",{onClick:()=>null==e?void 0:e.slickNext(),className:"absolute md:right-20 right-4 top-[50%] -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors","aria-label":"Next Slide",children:(0,l.jsx)(n.Z,{className:"w-6 h-6"})})]})}},3624:function(e,t,s){"use strict";var l=s(7437),a=s(2265),i=s(7138),r=s(6648),n=s(4697),o=s(2873);t.default=()=>{let[e,t]=(0,a.useState)(!1);return(0,l.jsxs)("nav",{className:"w-full border-gray-200 bg-white relative z-50",children:[(0,l.jsxs)("div",{className:"max-w-screen-xl flex items-center justify-between mx-auto py-6 px-4 md:py-10",children:[(0,l.jsxs)("div",{className:"flex items-center font-poppins font-bold text-xl md:text-[26px] relative px-8 md:p-0 md:ml-0 ml-6",children:[(0,l.jsx)("div",{className:"absolute left-[-20px] md:left-[-50px] -top-[13px]",children:(0,l.jsx)(r.default,{src:"/images/logo 2.png",alt:"Logo",width:40,height:40,objectFit:"contain"})}),(0,l.jsx)("div",{className:"font-montserrat",children:"The Little Eatery"})]}),(0,l.jsxs)("div",{className:"hidden md:flex gap-8 text-[17.5px] font-inter",children:[(0,l.jsx)(i.default,{href:"/",className:"hover:text-[#EA6D27]",children:"About"}),(0,l.jsx)(i.default,{href:"/",className:"hover:text-[#EA6D27]",children:"Gallery"}),(0,l.jsx)(i.default,{href:"/",className:"hover:text-[#EA6D27]",children:"Delivery"}),(0,l.jsx)(i.default,{href:"/",className:"hover:text-[#EA6D27]",children:"Contact"})]}),(0,l.jsx)("button",{className:"hidden md:block",children:(0,l.jsx)("div",{className:"w-[117px] h-[45px] bg-[#EA6D27] rounded-tl-lg rounded-br-lg text-white font-davidLibre flex items-center justify-center text-[15.5px] hover:bg-[#df631b] drop-shadow-lg",children:"MENU"})}),(0,l.jsx)("button",{onClick:()=>{t(!e)},className:"md:hidden p-2 text-gray-600 ml-auto","aria-expanded":e,"aria-label":"Toggle navigation",children:e?(0,l.jsx)(n.Z,{size:24}):(0,l.jsx)(o.Z,{size:24})})]}),e&&(0,l.jsx)("div",{className:"md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50",children:(0,l.jsxs)("div",{className:"flex flex-col items-center py-4 space-y-4 font-inter",children:[(0,l.jsx)(i.default,{href:"/",className:"hover:text-[#EA6D27]",children:"About"}),(0,l.jsx)(i.default,{href:"/",className:"hover:text-[#EA6D27]",children:"Gallery"}),(0,l.jsx)(i.default,{href:"/",className:"hover:text-[#EA6D27]",children:"Delivery"}),(0,l.jsx)(i.default,{href:"/",className:"hover:text-[#EA6D27]",children:"Contact"}),(0,l.jsx)("button",{className:"w-[117px] h-[45px] bg-[#EA6D27] rounded-tl-lg rounded-br-lg text-white font-davidLibre flex items-center justify-center text-[15.5px] hover:bg-[#df631b] drop-shadow-lg",children:"MENU"})]})}),(0,l.jsx)("div",{className:"absolute -z-20 h-[750px] w-[750px] border border-[#101A2433] rounded-full -top-[353.58px] -left-[399.69px]"}),(0,l.jsx)("div",{className:"absolute h-[750px] w-[750px] border border-[#101A2433] rounded-full -z-20 -top-[316.35px] -left-[483px]",style:{transform:"rotate(17.41deg)"}}),(0,l.jsx)("div",{className:"absolute -z-20 h-[750px] w-[750px] border border-[#101A2433] rounded-full -top-[326.58px] -left-[368.69px]"})]})}}},function(e){e.O(0,[576,309,971,23,744],function(){return e(e.s=8459)}),_N_E=e.O()}]);