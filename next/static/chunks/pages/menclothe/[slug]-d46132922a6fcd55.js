(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[349],{5703:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menclothe/[slug]",function(){return s(348)}])},348:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return v},default:function(){return _}});var l=s(5893),r=s(7297),a=s(5675),c=s.n(a),n=s(6803),i=s.n(n),d=s(6888),x=s(7294),m=s(7288),h=s(1664),u=s.n(h),o=s(1359),f=s(661),p=s(2844),j=s(9783),g=s(3247),N=s(6318),y=s(6353);function b(){let e=(0,r.Z)(["*[_type == 'mensclothe' && category == '","']"]);return b=function(){return e},e}function w(e){let{menclothe:t}=e,s=i()(d.L),[r,a]=(0,x.useState)(0),[n,h]=(0,x.useState)(),w=(t.mrp-t.saleprice)/t.mrp*100,[v,_]=(0,x.useState)(t.category),[E,S]=(0,x.useState)(!1),{currentUser:Z,getrate:k}=(0,j.E)(),[C,O]=(0,x.useState)(null),[A,I]=(0,x.useState)();(0,x.useEffect)(()=>{!async function(){let e=(0,m.Z)(b(),v),t=await d.L.fetch(e);h(t)}()},[t._id]);let J=(n||[]).filter(e=>e.slug.current!==t.slug.current),L=()=>{S(!1)};return(0,x.useEffect)(()=>{(async function(){if(Z){let e=(0,g.IO)((0,g.hJ)(N.db,"ratings"),(0,g.ar)("userid","==",Z.uid),(0,g.ar)("pid","==",t.slug.current));(0,g.cf)(e,e=>{e.docs.forEach(e=>{O(e.data().rate)})})}})()},[t.slug.current]),(0,x.useEffect)(()=>{let e=(0,g.IO)((0,g.hJ)(N.db,"ratings"),(0,g.ar)("pid","==",t.slug.current));(0,g.cf)(e,e=>{let t=[];e.docs.forEach(e=>{t.push(e.data().rate);let s=0;for(let e=0;e<t.length;e++)s+=t[e];I(s/t.length)})})},[t.slug.current]),(0,l.jsxs)("div",{className:"w-full mt-12 ",children:[(0,l.jsx)("div",{className:"w-full text-center py-3",children:(0,l.jsx)("h1",{className:"text-xl font-bold text-themed4",children:t.name})}),(0,l.jsxs)("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row itmes-center justify-center px-2 mb-8 mt- ",children:[(0,l.jsxs)("div",{className:"flex-1 flex gap-3  items-center justify-center",children:[(0,l.jsx)("div",{className:"grid grid-cols-1 gap-2 ",children:t.image&&t.image.map((e,n)=>(0,l.jsx)(c(),{className:n==r?"border-2 border-themered":"border border-themed3",style:{cursor:"pointer"},src:s.image(e).width(70).height(90).url(),width:70,height:90,alt:t.name,onClick:()=>a(n)}))}),(0,l.jsx)("div",{className:" flex items-center justify-center  ",children:(0,l.jsx)(c(),{className:"object-cover",src:s.image(t.image[r]).width(450).height(500).url(),width:450,height:500,alt:t.name})})]}),(0,l.jsxs)("div",{className:"flex-1 flex flex-col px-6 mt-10 md:mt-0 items-start ",children:[(0,l.jsx)("p",{className:"text-2xl font-extrabold text-themed4",children:t.shortdesc}),(0,l.jsx)(f.Z,{rate:A}),(0,l.jsx)("p",{className:"text-sm font-medium text-gray-500",children:t.fulldesc[0]}),(0,l.jsxs)("div",{className:"flex flex-col mt-8 items-start space-y-2",children:[(0,l.jsxs)("p",{className:"px-4 py-1 bg-themered rounded-lg text-white text-xl",children:[Math.trunc(w)," % off"]}),(0,l.jsxs)("p",{className:"text-2xl font-bold text-gray-900 ",children:["₹ ",t.saleprice," ",(0,l.jsxs)("span",{className:"text-xs font-thin text-gray-600 line-through",children:["mrp :₹ ",t.mrp]})]}),(0,l.jsxs)("p",{className:"text-xs font-bold text-gray-400",children:["( ₹",t.mrp-t.saleprice," off )"]})]}),(0,l.jsxs)("div",{className:" flex items-start mt-8 justify-sgart gap-2",children:[(0,l.jsx)("button",{className:"text-md rounded-lg font-thin bg-themered text-themel4 px-4 py-2",children:"By Now"}),(0,l.jsx)("button",{className:"text-md rounded-lg font-thin bg-themeblue text-themel4 px-4 py-2 ",children:"Add to cart"})]}),(0,l.jsx)("div",{className:"flex items-start mt-8 justify-sgart",children:(0,l.jsx)("p",{className:"text-xl font-bold text-themed4",children:"About the product"})}),(0,l.jsx)("div",{className:" flex flex-col items-start mt-8 justify-sgart gap-2",children:t.fulldesc&&t.fulldesc.map((e,t)=>(0,l.jsxs)("p",{className:"text-sm font-semibold text-gray-600",children:[t+1,". ",e]},t))})]})]}),(0,l.jsxs)("div",{className:"max-w-7xl mx-auto my-8 ",children:[(0,l.jsx)("hr",{className:"w-full h-1 bg-themed4 "}),(0,l.jsxs)("div",{className:"w-full text-center",children:[(0,l.jsx)("h1",{className:"text-xl font-bold text-themed4 my-5",children:"Other related products"}),(0,l.jsx)("div",{className:"w-full flex flex-col md:flex-row items-center justify-center gap-2",children:J&&J.map((e,t)=>(0,l.jsx)(u(),{href:"/menclothe/".concat(e.slug.current),children:(0,l.jsx)(y.Z,{other:e})}))})]})]}),(0,l.jsx)("div",{className:" max-w-7xl mx-auto  my-2 flex items-start px-2",children:(0,l.jsxs)("div",{className:"max-w-4xl py-2",children:[Z&&(0,l.jsxs)("div",{className:"flex items-center justify-center gap-4 mb-5",children:[(0,l.jsx)("p",{className:"text-xl font-bold text-themed4 ",children:"Reviews"}),(0,l.jsxs)("div",{className:"mt-2 text-left",children:[(0,l.jsx)("p",{onClick:()=>S(!0),className:"text-sm font-medium text-themed4 cursor-pointer",children:"Rate and review this product"}),E&&(0,l.jsx)(p.Z,{handleClose:L,pid:t._id})]})]}),Z&&!C&&(0,l.jsx)(o.Z,{pid:t.slug.current}),(0,l.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[Z&&C&&(0,l.jsx)("p",{children:"your rating is"}),C&&(0,l.jsx)(f.Z,{rate:C})]})]})})]})}var v=!0;function _(e){let{menclothe:t}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(w,{menclothe:t})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5703)}),_N_E=e.O()}]);