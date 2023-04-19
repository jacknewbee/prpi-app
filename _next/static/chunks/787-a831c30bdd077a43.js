"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[787],{10787:function(n,e,r){r.d(e,{Z:function(){return w}});var t=r(92228),i=r(52322),o=r(73921),s=r(33080),c=r(87016),a=r(80751),l=r(42617),d=r(2784),u=r(79074),x=r(3411),p=r(58514),h=r(73120),f=r(36657),m=r(14406),j=r(93665),Z=r(87394),g=r(5406),S=r(32301),D=r(11982),v=r(41410),y=r(85875),k=(0,d.memo)(function(n){var e=n.chartData,r=n.protocolData,t=n.currentDate,o=n.valueProperty,s=n.title,c=n.ChartComponent,a=(0,Z.Z)((0,d.useState)(),2),l=a[0],u=a[1],x=(0,Z.Z)((0,d.useState)(),2),p=x[0],h=x[1];(0,d.useEffect)(function(){u(null)},[r]),(0,d.useEffect)(function(){null==l&&r&&u(r[o])},[r,l,o]);var f=(0,d.useMemo)(function(){return e?e.map(function(n){return{time:(0,v.Z)(n.date),value:n[o]}}):[]},[e,o]);return(0,i.jsxs)(g.ZP,{p:["16px","16px","24px"],children:[(0,i.jsx)(S.Z,{bold:!0,color:"secondary",children:s}),l>-1?(0,i.jsxs)(S.Z,{bold:!0,fontSize:"24px",children:["$",(0,y.d)(l)]}):(0,i.jsx)(D.Z,{width:"128px",height:"36px"}),(0,i.jsx)(S.Z,{children:null!=p?p:t}),(0,i.jsx)(g.ZP,{height:"250px",children:(0,i.jsx)(c,{data:f,setHoverValue:u,setHoverDate:h})})]})}),U=r(9610);function b(){var n=(0,t.Z)(["\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  padding: 0;\n  gap: 1em;\n\n  & > * {\n    width: 100%;\n  }\n\n  "," {\n    flex-direction: row;\n  }\n"]);return b=function(){return n},n}var C=(0,x.ZP)(s.Z).withConfig({componentId:"sc-acd858d3-0"})(b(),function(n){return n.theme.mediaQueries.md}),w=function(){var n=(0,o.$G)(),e=n.t,r=n.currentLanguage.locale,t=(0,u.hw)(),s=(0,u.Xx)(),x=(0,u.H8)(),Z=(0,d.useMemo)(function(){return new Date().toLocaleString(r,{month:"short",year:"numeric",day:"numeric"})},[r]),g=(0,u.jF)(),S=(0,d.useMemo)(function(){return Object.values(g).map(function(n){return n.data}).filter(function(n){return"unknown"!==n.name})},[g]),D=(0,U.R)().poolsData,v=(0,d.useMemo)(function(){return D.some(function(n){return!(null==n?void 0:n.token0Price)})},[D]);return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(c.Z,{scale:"lg",mb:"16px",id:"info-overview-title",children:e("PancakeSwap Info & Analytics")}),(0,i.jsxs)(C,{children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(k,{chartData:s,protocolData:t,currentDate:Z,valueProperty:"liquidityUSD",title:e("Liquidity"),ChartComponent:h.Z})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(k,{chartData:s,protocolData:t,currentDate:Z,valueProperty:"volumeUSD",title:e("Volume 24H"),ChartComponent:p.Z})})]}),(0,i.jsx)(c.Z,{scale:"lg",mt:"40px",mb:"16px",children:e("Top Tokens")}),(0,i.jsx)(m.Z,{tokenDatas:S}),(0,i.jsx)(c.Z,{scale:"lg",mt:"40px",mb:"16px",children:e("Top Pairs")}),(0,i.jsx)(f.Z,{poolDatas:D,loading:v}),(0,i.jsx)(c.Z,{scale:"lg",mt:"40px",mb:"16px",children:e("Transactions")}),(0,i.jsx)(j.Z,{transactions:x})]})}},36657:function(n,e,r){var t=r(87394),i=r(92228),o=r(52322),s=r(73921),c=r(97712),a=r(11982),l=r(32301),d=r(33080),u=r(78861),x=r(59696),p=r(5406),h=r(26390),f=r(2784),m=r(79074),j=r(3411),Z=r(85875),g=r(2869),S=r(14279);function D(){var n=(0,i.Z)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 20px 3.5fr repeat(5, 1fr);\n\n  padding: 0 24px;\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 1.5fr repeat(3, 1fr);\n    & :nth-child(4),\n    & :nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 20px 1.5fr repeat(1, 1fr);\n    & :nth-child(4),\n    & :nth-child(5),\n    & :nth-child(6),\n    & :nth-child(7) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: 2.5fr repeat(1, 1fr);\n    > *:nth-child(1) {\n      display: none;\n    }\n  }\n"]);return D=function(){return n},n}function v(){var n=(0,i.Z)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]);return v=function(){return n},n}var y=j.ZP.div.withConfig({componentId:"sc-4ae98e2a-0"})(D()),k=(0,j.ZP)(c.Z).withConfig({componentId:"sc-4ae98e2a-1"})(v()),U={volumeUSD:"volumeUSD",liquidityUSD:"liquidityUSD",volumeUSDWeek:"volumeUSDWeek",lpFees24h:"lpFees24h",lpApr7d:"lpApr7d"},b=function(){return(0,o.jsxs)(y,{children:[(0,o.jsx)(a.Z,{}),(0,o.jsx)(a.Z,{}),(0,o.jsx)(a.Z,{}),(0,o.jsx)(a.Z,{}),(0,o.jsx)(a.Z,{}),(0,o.jsx)(a.Z,{}),(0,o.jsx)(a.Z,{})]})},C=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{}),(0,o.jsx)(b,{}),(0,o.jsx)(b,{})]})},w=function(n){var e=n.poolData,r=n.index,t=(0,m.qg)(),i=(0,m.hb)(),s=(0,m.U1)();return(0,o.jsx)(k,{to:"/info".concat(i,"/pairs/").concat(e.address).concat(s),children:(0,o.jsxs)(y,{children:[(0,o.jsx)(l.Z,{children:r+1}),(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(g.g,{address0:e.token0.address,address1:e.token1.address,chainName:t}),(0,o.jsxs)(l.Z,{ml:"8px",children:[e.token0.symbol,"/",e.token1.symbol]})]}),(0,o.jsxs)(l.Z,{children:["$",(0,Z.d)(e.volumeUSD)]}),(0,o.jsxs)(l.Z,{children:["$",(0,Z.d)(e.volumeUSDWeek)]}),(0,o.jsxs)(l.Z,{children:["$",(0,Z.d)(e.lpFees24h)]}),(0,o.jsxs)(l.Z,{children:[(0,Z.d)(e.lpApr7d),"%"]}),(0,o.jsxs)(l.Z,{children:["$",(0,Z.d)(e.liquidityUSD)]})]})})};e.Z=function(n){var e=n.poolDatas,r=n.loading,i=(0,t.Z)((0,f.useState)(U.volumeUSD),2),c=i[0],a=i[1],d=(0,t.Z)((0,f.useState)(!0),2),m=d[0],j=d[1],Z=(0,s.$G)().t,g=(0,t.Z)((0,f.useState)(1),2),D=g[0],v=g[1],k=(0,t.Z)((0,f.useState)(1),2),P=k[0],q=k[1];(0,f.useEffect)(function(){var n=1;e.length%h.si==0&&(n=0),q(Math.floor(e.length/h.si)+n)},[e]);var T=(0,f.useMemo)(function(){return e?e.sort(function(n,e){return n&&e?n[c]>e[c]?(m?-1:1)*1:-((m?-1:1)*1):-1}).slice(h.si*(D-1),D*h.si):[]},[D,e,m,c]),z=(0,f.useCallback)(function(n){a(n),j(c!==n||!m)},[m,c]),F=(0,f.useCallback)(function(n){return c===n?m?"↓":"↑":""},[m,c]);return(0,o.jsxs)(S.y6,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(l.Z,{color:"secondary",fontSize:"12px",bold:!0,children:"#"}),(0,o.jsx)(l.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:Z("Pair")}),(0,o.jsxs)(S._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return z(U.volumeUSD)},textTransform:"uppercase",children:[Z("Volume 24H")," ",F(U.volumeUSD)]}),(0,o.jsxs)(S._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return z(U.volumeUSDWeek)},textTransform:"uppercase",children:[Z("Volume 7D")," ",F(U.volumeUSDWeek)]}),(0,o.jsxs)(S._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return z(U.lpFees24h)},textTransform:"uppercase",children:[Z("LP reward fees 24H")," ",F(U.lpFees24h)]}),(0,o.jsxs)(S._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return z(U.lpApr7d)},textTransform:"uppercase",children:[Z("LP reward APR")," ",F(U.lpApr7d)]}),(0,o.jsxs)(S._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return z(U.liquidityUSD)},textTransform:"uppercase",children:[Z("Liquidity")," ",F(U.liquidityUSD)]})]}),(0,o.jsx)(S.SS,{}),T.length>0?(0,o.jsxs)(o.Fragment,{children:[T.map(function(n,e){return n?(0,o.jsxs)(f.Fragment,{children:[(0,o.jsx)(w,{index:(D-1)*h.si+e,poolData:n}),(0,o.jsx)(S.SS,{})]},n.address):null}),r&&(0,o.jsx)(b,{}),(0,o.jsxs)(S.Ob,{children:[(0,o.jsx)(S.Eh,{onClick:function(){v(1===D?D:D-1)},children:(0,o.jsx)(u.Z,{color:1===D?"textDisabled":"primary"})}),(0,o.jsx)(l.Z,{children:Z("Page %page% of %maxPage%",{page:D,maxPage:P})}),(0,o.jsx)(S.Eh,{onClick:function(){v(D===P?D:D+1)},children:(0,o.jsx)(x.Z,{color:D===P?"textDisabled":"primary"})})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(p.ZP,{})]})]})}},14406:function(n,e,r){var t=r(87394),i=r(92228),o=r(52322),s=r(2784),c=r(3411),a=r(97712),l=r(11982),d=r(20870),u=r(33080),x=r(32301),p=r(78861),h=r(59696),f=r(5406),m=r(79074),j=r(2869),Z=r(25374),g=r(73921),S=r(34498),D=r.n(S),v=r(85875),y=r(14279);function k(){var n=(0,i.Z)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 20px 3fr repeat(4, 1fr);\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 2fr repeat(3, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 20px 2fr repeat(2, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 1fr 1fr;\n    > *:first-child {\n      display: none;\n    }\n    > *:nth-child(3) {\n      display: none;\n    }\n  }\n"]);return k=function(){return n},n}function U(){var n=(0,i.Z)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]);return U=function(){return n},n}function b(){var n=(0,i.Z)(["\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n"]);return b=function(){return n},n}var C=c.ZP.div.withConfig({componentId:"sc-c0321ec2-0"})(k()),w=(0,c.ZP)(a.Z).withConfig({componentId:"sc-c0321ec2-1"})(U()),P=(0,c.ZP)(j.X).withConfig({componentId:"sc-c0321ec2-2"})(b()),q=function(){var n=(0,o.jsxs)(C,{children:[(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(l.Z,{})]});return(0,o.jsxs)(o.Fragment,{children:[n,n,n]})},T=function(n){var e=n.tokenData,r=n.index,t=(0,d.Z)(),i=t.isXs,s=t.isSm,c=(0,m.qg)(),a=(0,m.hb)(),l=(0,m.U1)();return(0,o.jsx)(w,{to:"/info".concat(a,"/tokens/").concat(e.address).concat(l),children:(0,o.jsxs)(C,{children:[(0,o.jsx)(u.Z,{children:(0,o.jsx)(x.Z,{children:r+1})}),(0,o.jsxs)(u.Z,{alignItems:"center",children:[(0,o.jsx)(P,{address:e.address,chainName:c}),(i||s)&&(0,o.jsx)(x.Z,{ml:"8px",children:e.symbol}),!i&&!s&&(0,o.jsxs)(u.Z,{marginLeft:"10px",children:[(0,o.jsx)(x.Z,{children:e.name}),(0,o.jsxs)(x.Z,{ml:"8px",children:["(",e.symbol,")"]})]})]}),(0,o.jsxs)(x.Z,{fontWeight:400,children:["$",(0,v.d)(e.priceUSD,{notation:"standard"})]}),(0,o.jsx)(x.Z,{fontWeight:400,children:(0,o.jsx)(Z.Z,{value:e.priceUSDChange,fontWeight:400})}),(0,o.jsxs)(x.Z,{fontWeight:400,children:["$",(0,v.d)(e.volumeUSD)]}),(0,o.jsxs)(x.Z,{fontWeight:400,children:["$",(0,v.d)(e.liquidityUSD)]})]})})},z={name:"name",volumeUSD:"volumeUSD",liquidityUSD:"liquidityUSD",priceUSD:"priceUSD",priceUSDChange:"priceUSDChange",priceUSDChangeWeek:"priceUSDChangeWeek"};e.Z=function(n){var e=n.tokenDatas,r=n.maxItems,i=void 0===r?10:r,c=(0,t.Z)((0,s.useState)(z.volumeUSD),2),a=c[0],d=c[1],u=(0,t.Z)((0,s.useState)(!0),2),m=u[0],j=u[1],Z=(0,g.$G)().t,S=(0,t.Z)((0,s.useState)(1),2),v=S[0],k=S[1],U=(0,t.Z)((0,s.useState)(1),2),b=U[0],w=U[1];(0,s.useEffect)(function(){var n=1;e&&(e.length%i==0&&(n=0),w(Math.floor(e.length/i)+n))},[i,e]);var P=(0,s.useMemo)(function(){return e?D()(e,function(n){return n[a]},m?"desc":"asc").slice(i*(v-1),v*i):[]},[e,i,v,m,a]),F=(0,s.useCallback)(function(n){d(n),j(a!==n||!m)},[m,a]),_=(0,s.useCallback)(function(n){return a===n?m?"↓":"↑":""},[m,a]);return e?(0,o.jsxs)(y.y6,{children:[(0,o.jsxs)(C,{children:[(0,o.jsx)(x.Z,{color:"secondary",fontSize:"12px",bold:!0,children:"#"}),(0,o.jsxs)(y._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return F(z.name)},textTransform:"uppercase",children:[Z("Name")," ",_(z.name)]}),(0,o.jsxs)(y._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return F(z.priceUSD)},textTransform:"uppercase",children:[Z("Price")," ",_(z.priceUSD)]}),(0,o.jsxs)(y._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return F(z.priceUSDChange)},textTransform:"uppercase",children:[Z("Price Change")," ",_(z.priceUSDChange)]}),(0,o.jsxs)(y._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return F(z.volumeUSD)},textTransform:"uppercase",children:[Z("Volume 24H")," ",_(z.volumeUSD)]}),(0,o.jsxs)(y._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return F(z.liquidityUSD)},textTransform:"uppercase",children:[Z("Liquidity")," ",_(z.liquidityUSD)]})]}),(0,o.jsx)(y.SS,{}),P.length>0?(0,o.jsxs)(o.Fragment,{children:[P.map(function(n,e){return n?(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(T,{index:(v-1)*10+e,tokenData:n}),(0,o.jsx)(y.SS,{})]},n.address):null}),(0,o.jsxs)(y.Ob,{children:[(0,o.jsx)(y.Eh,{onClick:function(){k(1===v?v:v-1)},children:(0,o.jsx)(p.Z,{color:1===v?"textDisabled":"primary"})}),(0,o.jsx)(x.Z,{children:Z("Page %page% of %maxPage%",{page:v,maxPage:b})}),(0,o.jsx)(y.Eh,{onClick:function(){k(v===b?v:v+1)},children:(0,o.jsx)(h.Z,{color:v===b?"textDisabled":"primary"})})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(q,{}),(0,o.jsx)(f.ZP,{})]})]}):(0,o.jsx)(l.Z,{})}},9610:function(n,e,r){r.d(e,{R:function(){return c}});var t=r(70865),i=r(2784),o=r(64867),s=r(79074),c=function(){var n=(0,o.J5)(),e=(0,s.ft)(),r=(0,i.useMemo)(function(){return Object.keys(e)},[e]),c=(0,s.BS)(r);return{poolsData:(0,i.useMemo)(function(){return Object.values(e).map(function(e){return(0,t.Z)({},e.data,n&&c&&{lpApr7d:c[e.data.address]})}).filter(function(n){return"unknown"!==n.token1.name&&"unknown"!==n.token0.name})},[e,n,c]),stableSwapsAprs:c}}}}]);