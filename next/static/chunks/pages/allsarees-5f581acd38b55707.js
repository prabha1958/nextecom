(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{3636:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/allsarees",function(){return s(9146)}])},345:function(e,t,s){"use strict";s.d(t,{Z:function(){return g}});var n=s(5893),r=s(5675),a=s.n(r),l=s(6803),c=s.n(l),i=s(6888);s(9008);var u=s(1664),d=s.n(u),o=s(3247),x=s(6318),m=s(661),f=s(7294);let h=c()(i.L);function g(e){let{saree:t}=e,[s,r]=(0,f.useState)();return(0,f.useEffect)(()=>{let e=(0,o.IO)((0,o.hJ)(x.db,"ratings"),(0,o.ar)("pid","==",t.slug.current));(0,o.cf)(e,e=>{let t=[];e.docs.forEach(e=>{t.push(e.data().rate);let s=0;for(let e=0;e<t.length;e++)s+=t[e];r(s/t.length)})})},[t.slug.current]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d(),{href:"/sarees/".concat(t.slug.current),children:(0,n.jsxs)("div",{className:" max-w-sm mx-autorounded-lg flex flex-col items-center space-y-1",children:[(0,n.jsx)(a(),{className:" object-fill",src:h.image(t.image[0]).width(300).height(300).url(),width:300,height:300,alt:t.name}),(0,n.jsx)("p",{className:"text-sm my-3 px-2  font-medium text-gray-800",children:t.name}),(0,n.jsx)(m.Z,{rate:s}),(0,n.jsxs)("p",{className:"text-xs font-bold text-gray-900 ",children:["₹ ",t.saleprice," ",(0,n.jsxs)("span",{className:"text-xs font-thin text-gray-600 line-through",children:["mrp :₹ ",t.mrp]})]}),(0,n.jsxs)("p",{className:"text-xs font-bold text-gray-400",children:["( ₹",t.mrp-t.saleprice," off )"]})]})})})}},9146:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return a},default:function(){return l}});var n=s(5893),r=s(345);s(7294);var a=!0;function l(e){let{saree:t}=e;return(0,n.jsxs)("div",{className:"max-w-7xl mx-auto ",children:[(0,n.jsx)("div",{className:"w-full flex items-center justify-center mt-16 px-7 py-1 bg-gray-200",children:(0,n.jsx)("p",{className:"text-sm font-bold text-themed4",children:"All womenclothes"})}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 ",children:t&&t.map((e,t)=>(0,n.jsx)(r.Z,{saree:e},t))})]})}},9008:function(e,t,s){s(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3636)}),_N_E=e.O()}]);