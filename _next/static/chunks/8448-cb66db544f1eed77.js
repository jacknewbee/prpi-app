"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8448],{32331:function(e,n,t){var r=t(92228),i=t(52322),o=t(16775),s=t(3411);function c(){var e=(0,r.Z)(["\n  border: 1px solid ",";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  "," {\n    border-width: 2px;\n  }\n"]);return c=function(){return e},e}function a(){var e=(0,r.Z)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"]);return a=function(){return e},e}function u(){var e=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n"]);return u=function(){return e},e}var l=s.ZP.img.withConfig({componentId:"sc-c5c8ef7c-0"})(c(),function(e){return e.theme.card.background},function(e){return e.theme.mediaQueries.sm}),d=s.ZP.div.withConfig({componentId:"sc-c5c8ef7c-1"})(a(),function(e){return e.bg}),p=(0,s.ZP)(o.Z).withConfig({componentId:"sc-c5c8ef7c-2"})(u());n.Z=function(e){var n,t=e.profile;return(0,i.jsxs)(d,{bg:null===(n=t.nft)||void 0===n?void 0:n.image.thumbnail,children:[!t.isActive&&(0,i.jsx)(p,{}),t.team&&(0,i.jsx)(l,{src:"/images/teams/".concat(t.team.images.alt),alt:t.team.name})]})}},19671:function(e,n,t){t.d(n,{z:function(){return x}});var r=t(87394),i=t(2784),o=t(46267),s=t(32288),c=t(95625),a=t(97124),u=t(72027),l=t(8160),d=t(99743),p=t(7384),f=t(76631),h=t(90327),m=t(86891),v=t(57535),x=function(e){var n=(0,h.Z)(),t=n.account,x=n.chainId,g=(0,c.TL)(),b=(0,r.Z)((0,i.useState)(!1),2),C=b[0],Z=b[1],w=(0,r.Z)((0,i.useState)(),2),k=w[0],j=w[1],A=(0,o.ub)(k),T=(0,i.useMemo)(function(){return(0,s.NJ)(e)},[e]),y=(0,d.Z)(T,l.cr[x]),P=(0,p.in)(u._r.onChain(u.a_.BSC),y),E=(0,m.R)(P,v.gv,null),R=(0,f.o)(P,v.gv,null,E).callback;return(0,i.useEffect)(function(){C&&k&&!A&&(g((0,a.yi)({sousId:0,account:t})),Z(A))},[t,g,k,C,A]),{handleEnable:(0,i.useCallback)(function(){R&&(Z(!0),R().then(function(e){j(e)}).catch(function(){Z(!1)}))},[R]),pendingEnableTx:C}}},70985:function(e,n,t){var r=t(92228);function i(){var e=(0,r.Z)(["\n  background: url('/images/nfts/no-profile-md.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n\n  & > img {\n    border-radius: 50%;\n  }\n"]);return i=function(){return e},e}var o=t(3411).ZP.div.withConfig({componentId:"sc-9689af5c-0"})(i());n.Z=o},56581:function(e,n,t){t.d(n,{Z:function(){return ea}});var r,i,o=t(52322),s=t(25385),c=t(73921),a=t(70865),u=t(96670),l=t(87394),d=t(2784);(r=i||(i={})).START="start",r.CHANGE="change",r.REMOVE="remove",r.APPROVE="approve";var p=function(e,n){switch(n.type){case"set_view":return(0,u.Z)((0,a.Z)({},e),{currentView:n.view,previousView:e.currentView});case"go_previous":return(0,u.Z)((0,a.Z)({},e),{currentView:e.previousView,previousView:e.currentView});default:return e}},f=function(){var e=(0,l.Z)((0,d.useReducer)(p,{currentView:i.START,previousView:null}),2),n=e[0],t=e[1];return(0,u.Z)((0,a.Z)({},n),{goToStart:function(){return t({type:"set_view",view:i.START})},goToChange:function(){return t({type:"set_view",view:i.CHANGE})},goToRemove:function(){return t({type:"set_view",view:i.REMOVE})},goToApprove:function(){return t({type:"set_view",view:i.APPROVE})},goPrevious:function(){return t({type:"go_previous"})}})},h=t(98788),m=t(92228),v=t(45680),x=t(3411),g=t(517),b=t(6391),C=t.n(b),Z=t(68303),w=t(33080),k=t(60052),j=t(81254),A=t(56521),T=t(78040),y=t(19671),P=t(90711),E=t(60242),R=t(92335),S=t(25130),I=function(){var e=(0,c.$G)().t,n=(0,l.Z)((0,d.useState)(!0),2),t=n[0],r=n[1],i=(0,l.Z)((0,d.useState)({numberCakeToReactivate:P._Y,numberCakeToRegister:P._Y,numberCakeToUpdate:P._Y}),2),o=i[0],s=i[1],a=(0,S.p)().toastError;return(0,d.useEffect)(function(){var n;(n=(0,h.Z)(function(){var n,t;return(0,v.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=["numberCakeToReactivate","numberCakeToRegister","numberCakeToUpdate"].map(function(e){return{address:(0,j.Re)(),name:e}}),[4,(0,E.vf)({abi:R,calls:n})];case 1:return t=l.Z.apply(void 0,[i.sent(),3]),s({numberCakeToReactivate:(0,l.Z)(t[0],1)[0],numberCakeToRegister:(0,l.Z)(t[1],1)[0],numberCakeToUpdate:(0,l.Z)(t[2],1)[0]}),r(!1),[3,3];case 2:return i.sent(),a(e("Error"),e("Could not retrieve CAKE costs for profile")),[3,3];case 3:return[2]}})}),function(){return n.apply(this,arguments)})()},[s,a,e]),{costs:o,isLoading:t}},_=t(57647),V=t(35136),D=t(61491),L=t(32331),G=t(33132);function M(){var e=(0,m.Z)(["\n  border-color: ",";\n  color: ",";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ",";\n    opacity: 0.8;\n  }\n"]);return M=function(){return e},e}function U(){var e=(0,m.Z)(["\n  height: 64px;\n  width: 64px;\n\n  "," {\n    height: 128px;\n    width: 128px;\n  }\n"]);return U=function(){return e},e}var z=(0,x.ZP)(Z.Z).attrs({variant:"secondary"}).withConfig({componentId:"sc-fb038da4-0"})(M(),function(e){return e.theme.colors.failure},function(e){return e.theme.colors.failure},function(e){return e.theme.colors.failure}),F=x.ZP.div.withConfig({componentId:"sc-fb038da4-1"})(U(),function(e){return e.theme.mediaQueries.sm}),O=function(e){var n=e.goToApprove,t=e.goToChange,r=e.goToRemove,i=(0,c.$G)().t,s=(0,g.mA)().address,a=(0,A.kL)().reader,u=(0,D.Un)().profile,p=(0,T.Nn)(),f=p.balance,m=p.fetchStatus,x=I(),b=x.costs,P=b.numberCakeToUpdate,E=b.numberCakeToReactivate,R=x.isLoading,S=(0,l.Z)((0,d.useState)(null),2),M=S[0],U=S[1],O=(null==u?void 0:u.isActive)?P:E,W=m===_.iF.Fetched&&f.gte(O),H=(0,y.z)(new(C())(O.toString())),N=H.handleEnable,Y=H.pendingEnableTx,B=(0,l.Z)((0,d.useState)(!1),2),$=B[0],K=B[1];return((0,d.useEffect)(function(){R||W||$||K(!0)},[R,W,$]),(0,d.useEffect)(function(){var e,n=(e=(0,h.Z)(function(){return(0,v.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,V.S)(a,s,(0,j.Re)(),O)];case 1:return U(e.sent()),[2]}})}),function(){return e.apply(this,arguments)});s&&!R&&n()},[s,O,U,a,R]),u)?(0,o.jsxs)(w.Z,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:[(0,o.jsx)(F,{children:(0,o.jsx)(L.Z,{profile:u})}),u.isActive?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k.Z,{variant:"warning",my:"16px",children:(0,o.jsx)(k.Y,{children:i("Before editing your profile, please make sure you've claimed all the unspent CAKE from previous IFOs!")})}),$?(0,o.jsx)(w.Z,{mb:"8px",children:(0,o.jsx)(G.Z,{isApproveDisabled:R||W,isApproving:Y,isConfirmDisabled:R||!W||null===M,isConfirming:!1,onApprove:N,onConfirm:!0===M?n:t,confirmLabel:i("Change Profile Pic")})}):(0,o.jsx)(Z.Z,{width:"100%",mb:"8px",onClick:!0===M?n:t,disabled:R||!W||null===M,children:i("Change Profile Pic")}),(0,o.jsx)(z,{width:"100%",onClick:r,children:i("Remove Profile Pic")})]}):$?(0,o.jsx)(w.Z,{mb:"8px",children:(0,o.jsx)(G.Z,{isApproveDisabled:R||W,isApproving:Y,isConfirmDisabled:R||!W||null===M,isConfirming:!1,onApprove:N,onConfirm:!0===M?n:t,confirmLabel:i("Reactivate Profile")})}):(0,o.jsx)(Z.Z,{width:"100%",mb:"8px",onClick:!0===M?n:t,disabled:R||!W||null===M,children:i("Reactivate Profile")})]}):null},W=t(32301),H=t(12628),N=t(40330),Y=t(32288),B=t(25571),$=t(90395),K=t(86054),Q=function(e){var n,t=e.onDismiss,r=e.onSuccess,i=(0,l.Z)((0,d.useState)(!1),2),s=i[0],a=i[1],u=(0,D.Un)(),p=u.profile,f=u.refresh,m=I().costs.numberCakeToReactivate,x=(0,c.$G)().t,g=(0,A.wr)(),b=(0,B.d)().callWithGasPrice,C=(0,S.p)().toastSuccess,k=(0,$.Z)(),j=k.fetchWithCatchTxError,T=k.loading,y=(n=(0,h.Z)(function(){var e;return(0,v.__generator)(this,function(n){switch(n.label){case 0:return[4,j(function(){return b(g,"pauseProfile")})];case 1:return(null==(e=n.sent())?void 0:e.status)&&(f(),C(x("Profile Paused!"),(0,o.jsx)(K.Y,{txHash:e.transactionHash})),null==r||r(),null==t||t()),[2]}})}),function(){return n.apply(this,arguments)});return p?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(W.Z,{as:"p",color:"failure",mb:"24px",children:x("This will suspend your profile and send your Collectible back to your wallet")}),(0,o.jsx)(W.Z,{as:"p",color:"textSubtle",mb:"24px",children:x("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile")}),(0,o.jsx)(W.Z,{as:"p",color:"textSubtle",mb:"24px",children:x("Cost to reactivate in the future: %cost% CAKE",{cost:(0,Y.dp)(m)})}),(0,o.jsx)("label",{htmlFor:"acknowledgement",style:{cursor:"pointer",display:"block",marginBottom:"24px"},children:(0,o.jsxs)(w.Z,{alignItems:"center",children:[(0,o.jsx)(H.Z,{id:"acknowledgement",checked:s,onChange:function(){return a(!s)},scale:"sm"}),(0,o.jsx)(W.Z,{ml:"8px",children:x("I understand")})]})}),(0,o.jsx)(Z.Z,{width:"100%",isLoading:T,endIcon:T?(0,o.jsx)(N.Z,{spin:!0,color:"currentColor"}):null,disabled:!s||T,onClick:y,mb:"8px",children:x("Confirm")}),(0,o.jsx)(Z.Z,{variant:"text",width:"100%",onClick:t,children:x("Close Window")})]}):null},J=t(11982),q=t(5406),X=t(42351),ee=t(8266),en=t(36813),et=t(17466),er=t(45077),ei=t(40015),eo=function(e){var n,t=e.onDismiss,r=e.onSuccess,i=(0,l.Z)((0,d.useState)({tokenId:null,collectionAddress:null}),2),s=i[0],a=i[1],u=(0,c.$G)().t,p=(0,g.mA)().address,f=(0,g.mx)().data,m=(0,D.Un)(),x=m.isLoading,b=m.profile,C=m.refresh,w=(0,ei.L)(p,b,x),k=w.nfts,T=w.isLoading,y=(0,A.wr)(),P=(0,S.p)().toastSuccess,E=(0,B.d)().callWithGasPrice,R=(0,d.useMemo)(function(){return k.filter(function(e){return e.location===en.Fb.WALLET})},[k]),I=(0,ee.mN)(R).data,_=(0,d.useMemo)(function(){return!!I&&!!I[s.tokenId]},[I,s.tokenId]),V=(0,X.Z)({onApprove:function(){return E((0,et.vE)(s.collectionAddress,f),"approve",[(0,j.Re)(),s.tokenId])},onConfirm:function(){return b.isActive?E(y,"updateProfile",[s.collectionAddress,s.tokenId]):E(y,"reactivateProfile",[s.collectionAddress,s.tokenId])},onSuccess:(n=(0,h.Z)(function(e){var n;return(0,v.__generator)(this,function(i){return n=e.receipt,C(),P(u("Profile Updated!"),(0,o.jsx)(K.Y,{txHash:n.transactionHash})),null==r||r(),null==t||t(),[2]})}),function(e){return n.apply(this,arguments)})}),L=V.isApproving,M=V.isApproved,U=V.isConfirmed,z=V.isConfirming,F=V.handleApprove,O=V.handleConfirm,H=M||_;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(W.Z,{as:"p",color:"textSubtle",mb:"24px",children:u("Choose a new Collectible to use as your profile pic.")}),T?(0,o.jsx)(J.Z,{width:"100%",height:"80px",mb:"16px"}):R.length>0?(0,o.jsx)(q.ZP,{maxHeight:"300px",overflowY:"scroll",children:R.map(function(e){return(0,o.jsx)(er.Z,{name:"profilePicture",value:e.tokenId,image:e.image.thumbnail,isChecked:e.tokenId===s.tokenId,onChange:function(){a({tokenId:e.tokenId,collectionAddress:e.collectionAddress})},disabled:L||z||U,children:(0,o.jsx)(W.Z,{bold:!0,children:e.name})},"".concat(e.collectionAddress,"#").concat(e.tokenId))})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(W.Z,{as:"p",color:"textSubtle",mb:"16px",children:u("Sorry! You don’t have any eligible Collectibles in your wallet to use!")}),(0,o.jsx)(W.Z,{as:"p",color:"textSubtle",mb:"24px",children:u("Make sure you have a Pancake Collectible in your wallet and try again!")})]}),(0,o.jsx)(G.Z,{isApproveDisabled:U||z||H||null===s.tokenId,isApproving:L,isConfirmDisabled:!H||U||null===s.tokenId,isConfirming:z,onApprove:F,onConfirm:O}),(0,o.jsx)(Z.Z,{mt:"8px",variant:"text",width:"100%",onClick:t,disabled:L||z,children:u("Close Window")})]})},es=function(e){var n,t=e.goToChange,r=e.onDismiss,i=(0,D.Un)().profile,s=(0,c.$G)().t,a=(0,$.Z)(),u=a.fetchWithCatchTxError,l=a.loading,d=I().costs,p=d.numberCakeToUpdate,f=d.numberCakeToReactivate,m=(0,A.kL)().signer;if(!i)return null;var x=i.isActive?p:f,g=(n=(0,h.Z)(function(){var e;return(0,v.__generator)(this,function(n){switch(n.label){case 0:return[4,u(function(){return m.approve((0,j.Re)(),x.mul(2).toString())})];case 1:return(null==(e=n.sent())?void 0:e.status)&&t(),[2]}})}),function(){return n.apply(this,arguments)});return(0,o.jsxs)(w.Z,{flexDirection:"column",children:[(0,o.jsxs)(w.Z,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[(0,o.jsx)(W.Z,{children:s(i.isActive?"Cost to update:":"Cost to reactivate:")}),(0,o.jsxs)(W.Z,{children:[(0,Y.dp)(x)," CAKE"]})]}),(0,o.jsx)(Z.Z,{disabled:l,isLoading:l,endIcon:l?(0,o.jsx)(N.Z,{spin:!0,color:"currentColor"}):null,width:"100%",mb:"8px",onClick:g,children:s("Enable")}),(0,o.jsx)(Z.Z,{variant:"text",width:"100%",onClick:r,disabled:l,children:s("Close Window")})]})},ec=function(e,n){switch(n){case i.START:return e("Edit Profile");case i.CHANGE:return e("Change Profile Pic");case i.REMOVE:return e("Remove Profile Pic");case i.APPROVE:return e("Enable CAKE");default:return""}},ea=function(e){var n=e.onDismiss,t=e.onSuccess,r=f(),a=r.currentView,u=r.goToChange,l=r.goToRemove,d=r.goToApprove,p=r.goPrevious,h=(0,c.$G)().t,m=a===i.START;return(0,o.jsx)(s.ZP,{title:ec(h,a),onBack:m?null:function(){return p()},onDismiss:n,hideCloseButton:!m,children:(0,o.jsxs)("div",{style:{maxWidth:"400px"},children:[a===i.START&&(0,o.jsx)(O,{goToApprove:d,goToChange:u,goToRemove:l,onDismiss:n}),a===i.REMOVE&&(0,o.jsx)(Q,{onDismiss:n,onSuccess:t}),a===i.CHANGE&&(0,o.jsx)(eo,{onDismiss:n,onSuccess:t}),a===i.APPROVE&&(0,o.jsx)(es,{goToChange:u,onDismiss:n})]})})}},16775:function(e,n,t){var r=t(70865),i=t(96670),o=t(52322);t(2784);var s=t(3411),c=t(6816);n.Z=function(e){var n=(0,s.Fg)(),t=n.isDark?"#3C3742":"#e9eaeb",a=n.isDark?"#666171":"#bdc2c4";return(0,o.jsxs)(c.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 32 32"},e),{children:[(0,o.jsx)("path",{d:"M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",fill:t}),(0,o.jsx)("mask",{id:"A","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"32",height:"32",children:(0,o.jsx)("path",{d:"M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",fill:"#c4c4c4"})}),(0,o.jsxs)("g",{mask:"url(#A)",children:[(0,o.jsx)("path",{d:"M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z",fill:a}),(0,o.jsx)("path",{fillRule:"evenodd",d:"M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z",fill:a}),(0,o.jsx)("ellipse",{cx:"12.308",cy:"14.846",rx:"1.026",ry:"1.538",fill:t}),(0,o.jsx)("ellipse",{cx:"19.385",cy:"14.846",rx:"1.026",ry:"1.538",fill:t})]})]}))}}}]);