"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9179],{26390:function(n,e,r){r.d(e,{BY:function(){return o},Bq:function(){return s},DY:function(){return f},Lb:function(){return g},MV:function(){return c},OZ:function(){return t},Rr:function(){return d},Tb:function(){return l},US:function(){return h},Vd:function(){return v},hT:function(){return i},om:function(){return a},si:function(){return b},tE:function(){return p},xy:function(){return u}});var t=2,c=52.1429,a=.0025,o=.0017,i=225e-6,u=575e-6,d=1619136e3,f=1664130827,s=86400,l=3600,b=10,h=[],p=["0x495c7f3a713870f68f8b418b355c085dfdc412c3","0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea","0xe31debd7abff90b06bca21010dd860d8701fd901","0xfc989fbb6b3024de5ca0144dc23c18a063942ac1","0xe40fc6ff5f2895b44268fd2e1a421e07f567e007","0xfd158609228b43aa380140b46fff3cdf9ad315de","0xc00af6212fcf0e6fd3143e692ccd4191dc308bea","0x205969b3ad459f7eba0dee07231a6357183d3fb6","0x0bd67d358636fd7b0597724aa4f20beedbf3073a","0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075","0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30","0x041929a760d7049edaef0db246fa76ec975e90cc","0xba098df8c6409669f5e6ec971ac02cd5982ac108","0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94","0xe99512305bf42745fae78003428dcaf662afb35d","0xbE609EAcbFca10F6E5504D39E3B113F808389056","0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e","0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b","0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653","0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b"],v=["0x72b169ad8af6c4fb53056b6a2a85602ad6863864"],g=["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","0xdac17f958d2ee523a2206206994597c13d831ec7","0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","0x993864e43caa7f7f12953ad6feb1d1ca635b875f"]},64867:function(n,e,r){r.d(e,{Dw:function(){return b},Ho:function(){return p},J5:function(){return w},OO:function(){return f},Pi:function(){return l},WR:function(){return d},YM:function(){return s},nA:function(){return v},rf:function(){return x},tO:function(){return m},z2:function(){return g}});var t,c=r(47842),a=r(80173),o=r(74958),i=r(72027),u=r(26390),d={BSC:"BNB",ETH:"ETH"},f={BSC:a.I0,ETH:a.Hs},s={BSC:u.Rr,ETH:u.DY},l={BSC:i.a_.BSC,ETH:i.a_.ETHEREUM},b=(t={},(0,c.Z)(t,i.a_.BSC,""),(0,c.Z)(t,i.a_.ETHEREUM,"/eth"),t),h={BSC:o.dQ,ETH:o.GJ},p={BSC:a.JY,ETH:a.EC},v={BSC:"BscScan",ETH:"EtherScan"},g={BSC:u.tE,ETH:u.Vd},m={BSC:u.US,ETH:u.Lb},x=function(n){return w()?o.MS:h[n]},w=function(){return window.location.href.includes("stableSwap")}},85875:function(n,e,r){r.d(e,{d:function(){return a}});var t=r(1246),c=r.n(t),a=function(n,e){var r=e||{notation:n>=1e4?"compact":"standard"},t=r.notation,a=r.displayThreshold,o=r.tokenPrecision,i=r.isInteger;if(0===n)return i?"0":"0.00";if(!n)return"-";if(a&&n<a)return"<".concat(a);if(n<1&&!o)return n.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];var u=2;o&&(u=n<1?3:2);var d="0.".concat("0".repeat(u),"a");"standard"===(void 0===t?n>=1e4?"compact":"standard":t)&&(d="0,0.".concat("0".repeat(u))),i&&n<1e3&&(d="0");var f=parseFloat(n.toFixed(u));return c()(f).format(d).toUpperCase()}},20337:function(n,e,r){r.d(e,{z:function(){return h}});var t,c=r(98788),a=r(92228),o=r(45680),i=r(6647),u=r(34498),d=r.n(u),f=r(64867),s=r(70050);function l(){var n=(0,a.Z)(["query blocks {\n    ","\n  }"]);return l=function(){return n},n}var b=function(n){return(0,i.gql)(l(),n)},h=(t=(0,c.Z)(function(n){var e,r,t,c,a,i,u,l,h,p,v,g=arguments;return(0,o.__generator)(this,function(o){switch(o.label){case 0:if(e=g.length>1&&void 0!==g[1]?g[1]:"desc",r=g.length>2&&void 0!==g[2]?g[2]:500,t=g.length>3&&void 0!==g[3]?g[3]:"BSC",(null==n?void 0:n.length)===0)return[2,[]];return[4,(0,s.L)(b,n.map(function(n){return"t".concat(n,":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ").concat(n,", timestamp_lt: ").concat(n+600," }) {\n      number\n    }")}),f.OO[t],r)];case 1:if(c=o.sent(),a=[],c){i=!0,u=!1,l=void 0;try{for(h=Object.keys(c)[Symbol.iterator]();!(i=(p=h.next()).done);i=!0)c[v=p.value].length>0&&a.push({timestamp:v.split("t")[1],number:parseInt(c[v][0].number,10)})}catch(m){u=!0,l=m}finally{try{i||null==h.return||h.return()}finally{if(u)throw l}}return[2,d()(a,function(n){return n.number},e)]}return[2,a]}})}),function(n){return t.apply(this,arguments)})},75583:function(n,e,r){r.d(e,{B:function(){return s}});var t,c=r(47842),a=r(58194),o=r(30733),i=r.n(o),u=r(72027),d=(t={},(0,c.Z)(t,u.a_.BSC,"smartchain"),(0,c.Z)(t,u.a_.ETHEREUM,"ethereum"),t),f=i()(function(n){return n&&d[n.chainId]?"https://assets-cdn.trustwallet.com/blockchains/".concat(d[n.chainId],"/assets/").concat((0,a.getAddress)(n.address),"/logo.png"):null},function(n){return"".concat(n.chainId,"#").concat(n.address)}),s=i()(function(n,e){return n&&e&&d[e]?"https://assets-cdn.trustwallet.com/blockchains/".concat(d[e],"/assets/").concat((0,a.getAddress)(n),"/logo.png"):null},function(n,e){return"".concat(e,"#").concat(n)});e.Z=f},74958:function(n,e,r){r.d(e,{GJ:function(){return u},MS:function(){return d},Wt:function(){return f},dQ:function(){return i},vA:function(){return o}});var t=r(80173),c=r(6647),a=r(34406),o=function(n){if(n===t.JY)return{origin:a.env.NEXT_PUBLIC_NODE_REAL_HEADER||window.nrHeader}},i=new c.GraphQLClient(t.JY),u=new c.GraphQLClient(t.EC),d=new c.GraphQLClient(t.gr);new c.GraphQLClient(t.JY,{timeout:5e3,headers:{origin:"https://pancakeswap.finance"}});var f=new c.GraphQLClient(t.gr);new c.GraphQLClient(t.d$,{headers:{"X-API-KEY":a.env.BIT_QUERY_HEADER},timeout:5e3})},90074:function(n,e){e.Z=function(n,e,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e4;return Promise.race([r?n.request(e,r):n.request(e),new Promise(function(n,e){setTimeout(function(){e(Error("Request timed out after ".concat(t," milliseconds")))},t)})])}},70050:function(n,e,r){r.d(e,{L:function(){return f}});var t,c=r(98788),a=r(70865),o=r(45680),i=r(6647),u=r(74958),d=r(90074),f=(t=(0,c.Z)(function(n,e,r){var t,c,f,s,l,b,h,p,v=arguments;return(0,o.__generator)(this,function(o){switch(o.label){case 0:t=v.length>3&&void 0!==v[3]?v[3]:1e3,c={},f=!1,s=0,l=new i.GraphQLClient(r,{headers:(0,u.vA)(r)}),o.label=1;case 1:if(o.trys.push([1,4,,5]),f)return[3,3];return b=e.length,s+t<e.length&&(b=s+t),h=e.slice(s,b),[4,(0,d.Z)(l,n(h))];case 2:return p=o.sent(),c=(0,a.Z)({},c,p),f=Object.keys(p).length<t||s+t>e.length,s+=t,[3,1];case 3:return[2,c];case 4:return console.error("Failed to fetch info data",o.sent()),[2,null];case 5:return[2]}})}),function(n,e,r){return t.apply(this,arguments)})},80751:function(n,e,r){r.d(e,{Z:function(){return g}});var t=r(70865),c=r(96670),a=r(26297),o=r(52322);r(2784);var i=r(92228),u=r(3411),d=r(78545),f=r(26074),s=r(5406);function l(){var n=(0,i.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return l=function(){return n},n}function b(){var n=(0,i.Z)(["\n  background: ",";\n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return b=function(){return n},n}function h(){var n=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: ",";\n"]);return h=function(){return n},n}var p=u.ZP.div.withConfig({componentId:"sc-69ac18f9-0"})(b(),function(n){var e=n.isActive,r=n.isSuccess,t=n.isWarning,c=n.borderBackground,a=n.theme;return c||(t?a.colors.warning:r?a.colors.success:e?"linear-gradient(180deg, ".concat(a.colors.primaryBright,", ").concat(a.colors.secondary,")"):a.colors.cardBorder)},function(n){return n.theme.radii.card},function(n){var e=n.theme,r=n.isDisabled;return e.colors[r?"textDisabled":"text"]},function(n){return n.isActive&&(0,u.iv)(l(),f.DS)},d.Dh),v=(0,u.ZP)(s.ZP).withConfig({componentId:"sc-69ac18f9-1"})(h(),function(n){return n.hasCustomBorder?"initial":"inherit"},function(n){var e=n.theme,r=n.background;return null!=r?r:e.card.background},function(n){return n.theme.radii.card});p.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var g=function(n){var e=n.ribbon,r=n.children,i=n.background,u=(0,a.Z)(n,["ribbon","children","background"]);return(0,o.jsx)(p,(0,c.Z)((0,t.Z)({},u),{children:(0,o.jsxs)(v,{background:i,hasCustomBorder:!!u.borderBackground,children:[e,r]})}))}},64170:function(n,e,r){var t=r(92228),c=r(3411),a=r(29708);function o(){var n=(0,t.Z)(["\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  display: block;\n  font-size: 16px;\n  height: ",";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ",";\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    box-shadow: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",";\n  }\n"]);return o=function(){return n},n}var i=c.ZP.input.withConfig({componentId:"sc-c22a9310-0"})(o(),function(n){return n.theme.colors.input},function(n){var e=n.isSuccess,r=n.isWarning,t=n.theme;return void 0!==r&&r?t.shadows.warning:void 0!==e&&e?t.shadows.success:t.shadows.inset},function(n){return n.theme.colors.text},function(n){var e=n.scale;switch(void 0===e?a.Q.MD:e){case a.Q.SM:return"32px";case a.Q.LG:return"48px";case a.Q.MD:default:return"40px"}},function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.colors.textSubtle},function(n){return n.theme.colors.backgroundDisabled},function(n){return n.theme.colors.textDisabled},function(n){var e=n.theme,r=n.isWarning,t=n.isSuccess;return r?e.shadows.warning:t?e.shadows.success:e.shadows.focus});i.defaultProps={scale:a.Q.MD,isSuccess:!1,isWarning:!1},e.Z=i},29708:function(n,e,r){r.d(e,{Q:function(){return t}});var t={SM:"sm",MD:"md",LG:"lg"}}}]);