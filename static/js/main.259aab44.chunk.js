(this["webpackJsonpthgttg-react"]=this["webpackJsonpthgttg-react"]||[]).push([[0],{209:function(t,e,n){},351:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(30),i=n.n(r),s=(n(209),n(35)),o=n(25),l=n(199),u=n(19),d=n.n(u),h=n(177),m=n(71),j=n(198),b=n(137),f=n(105),O=n(136),x=n(360),p=n(354),g=n(358),y=n(195),w=n(196),k=n(85),v=n(81),N=n(200),P=n(97),S=n(84),C=n(174),z=n(175),D=n(54),$=n.n(D),B=n(107),F=B.c.initializeDefaultAppClient("grenade-tnats"),I=F.getServiceClient(B.b.factory,"mongodb-atlas-grenade-stitch"),E=function(t,e){return d()(t.date)<d()(e.date)?-1:d()(t.date)>d()(e.date)?1:0},A={algo:{monetary:{unit:"algo"},fractional:{unit:"unknown",decimalPlaces:-1}},band:{monetary:{unit:"band"},fractional:{unit:"unknown",decimalPlaces:-1}},bch:{monetary:{unit:"bch"},fractional:{unit:"satoshi",decimalPlaces:8}},btc:{monetary:{unit:"btc"},fractional:{unit:"satoshi",decimalPlaces:8}},celo:{monetary:{unit:"celo"},fractional:{unit:"unknown",decimalPlaces:-1}},comp:{monetary:{unit:"comp"},fractional:{unit:"unknown",decimalPlaces:-1}},dash:{monetary:{unit:"dash"},fractional:{unit:"duff",decimalPlaces:8}},dot:{monetary:{unit:"dot"},fractional:{unit:"planck",decimalPlaces:10}},eth:{monetary:{unit:"eth"},fractional:{unit:"wei",decimalPlaces:18}},grt:{monetary:{unit:"grt"},fractional:{unit:"unknown",decimalPlaces:-1}},ksm:{monetary:{unit:"ksm"},fractional:{unit:"planck",decimalPlaces:12}},ltc:{monetary:{unit:"ltc"},fractional:{unit:"litoshi",decimalPlaces:8}},mkr:{monetary:{unit:"mkr"},fractional:{unit:"unknown",decimalPlaces:-1}},nu:{monetary:{unit:"nu"},fractional:{unit:"unknown",decimalPlaces:-1}},xlm:{monetary:{unit:"xlm"},fractional:{unit:"stroop",decimalPlaces:7}},xrp:{monetary:{unit:"xrp"},fractional:{unit:"drop",decimalPlaces:6}},zec:{monetary:{unit:"zec"},fractional:{unit:"zatoshi",decimalPlaces:8}}},G=function(){function t(e,n){var a=this;Object(C.a)(this,t),this.quotes=n,this.transactions=e.sort(E),this.earliestDate=d()(this.transactions[0].date),this.latestDate=d()(),this.assets=Object(S.a)(new Set(this.transactions.map((function(t){return t.asset})))).sort(),this.balanceAtDate=function(t,e){return a.transactions.filter((function(n){return n.asset===t&&d()(n.date)<=e})).reduce((function(t,e){return t.plus(new $.a(e.amount))}),new $.a(0))};var c=864e5;this.balances=Array.from({length:(this.latestDate-this.earliestDate)/c+1},(function(t,e){return new Date(a.earliestDate.valueOf()+c*e).toISOString().slice(0,10)})).map((function(t){return Object(s.a)(Object(s.a)({},Object.fromEntries(a.assets.map((function(e){var c=new Date(t);c.setHours(23,59,59);var r=a.balanceAtDate(e,c);return[e,Object(s.a)(Object(s.a)({},Object.fromEntries(n.filter((function(n){return n.coin===e&&n.date===t})).map((function(t){return[t.fiat,r.times($()(t.open.amount).plus($()(t.close.amount)).dividedBy($()(2))).decimalPlaces(2).toNumber()||$()(0).toNumber()]})))),{},Object(P.a)({},e,r.toNumber()))]})))),{},{date:t})}))}return Object(z.a)(t,null,[{key:"fromGist",value:function(e){return new Promise((function(n,a){fetch("https://api.github.com/gists/".concat(e)).then((function(t){return t.json()})).then((function(e){var a=Object.keys(e.files).filter((function(t){return t.endsWith(".json")})).map((function(t){return JSON.parse(e.files[t].content)})).reduce((function(t,e){return[].concat(Object(S.a)(t),Object(S.a)(e))})).filter((function(t){return Object.keys(A).includes(t.asset)})).sort(E),c=a[0].date.slice(0,10),r=d()().toISOString().slice(0,10);F.auth.loginWithCredential(new B.a).then((function(){I.db("grenade").collection("quote").find({$and:[{coin:{$in:Object(S.a)(new Set(a.map((function(t){return t.asset}))))}},{date:{$gte:c}},{date:{$lte:r}}]}).asArray().then((function(e){n(new t(a,e))}))}))})).catch((function(t){a(t)}))}))}}]),t}(),M=n(9),J=new l.a,L={bch:"#8dc351",btc:"#f7931a",dash:"#008ce7",dot:"#e71081",eth:"#444eec",ksm:"#8015ab",ltc:"#345d9d",xlm:"#000000",xrp:"#23292f",zec:"#ecb244"};var U=function(){var t=Object(a.useState)({from:d()("2020-11-11").toISOString().slice(0,10),to:d()().toISOString().slice(0,10)}),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(J.get("currency")||"eur"),i=Object(o.a)(r,2),l=i[0],u=i[1],P=Object(a.useState)(window.location.href.match(/#[a-f0-9]{32}$/)?window.location.href.split("#").pop():J.get("gist")),S=Object(o.a)(P,2),C=S[0],z=S[1],D=Object(a.useState)(void 0),$=Object(o.a)(D,2),B=$[0],F=$[1];return Object(a.useEffect)((function(){l&&l.match(/^[a-z]{3}$/)&&J.get("currency")!==l&&J.set("currency",l,{path:"/"})}),[l]),Object(a.useEffect)((function(){C&&C.match(/^[a-f0-9]{32}$/)&&J.get("gist")!==C&&J.set("gist",C,{path:"/"})}),[C]),Object(a.useEffect)((function(){C&&C.match(/^[a-f0-9]{32}$/)&&G.fromGist(C).then(F).catch(console.error)}),[C]),Object(M.jsxs)(h.a,{fluid:!0,children:[Object(M.jsxs)(b.a,{bg:"dark",variant:"dark",children:[Object(M.jsx)(b.a.Brand,{href:"#",children:"don't panic"}),Object(M.jsx)(j.a,{className:"mr-auto"}),Object(M.jsxs)(m.a,{inline:!0,children:[Object(M.jsx)(m.a.Control,{type:"text",style:{width:"7em"},className:"mr-sm-2",size:"sm",disabled:!0,value:n.from,onChange:function(t){var e=t.target.value;e.match(/^20[12][0-9]-[01][0-9]-[0123][0-9]$/)&&c((function(t){return Object(s.a)(Object(s.a)({},t),{},{from:e})}))}}),Object(M.jsx)(m.a.Control,{type:"text",style:{width:"7em"},className:"mr-sm-2",size:"sm",disabled:!0,value:n.to,onChange:function(t){var e=t.target.value;e.match(/^20[12][0-9]-[01][0-9]-[0123][0-9]$/)&&c((function(t){return Object(s.a)(Object(s.a)({},t),{},{to:e})}))}}),Object(M.jsx)(m.a.Control,{type:"text",placeholder:"gist id",style:{width:"19em"},className:"mr-sm-2",size:"sm",disabled:!0,defaultValue:C,onChange:function(t){var e=t.target.value;e.match(/^[a-f0-9]{32}$/)&&z(e)}}),Object(M.jsxs)(m.a.Control,{as:"select",className:"mr-sm-2",size:"sm",disabled:!0,defaultValue:l,onChange:function(t){var e=t.target.value;e.match(/^[a-f]{3}$/)&&u(e)},children:[Object(M.jsx)("option",{children:"eur"}),Object(M.jsx)("option",{children:"usd"})]})]})]}),Object(M.jsx)(f.a,{children:B&&B.balances.length?Object(M.jsx)(x.a,{width:"100%",minHeight:"500px",children:Object(M.jsxs)(p.a,{data:B.balances.filter((function(t){return d()(t.date).isBetween(d()(n.from),d()(n.to))})),margin:{top:50,right:10,left:10,bottom:10},children:[Object(M.jsx)(g.a,{strokeDasharray:"3 3"}),Object(M.jsx)(y.a,{dataKey:"date",tick:{fontSize:11},tickFormatter:function(t){return d()(t).format("MMM D").toLowerCase()}}),Object(M.jsx)(w.a,{tick:{fontSize:11},tickFormatter:function(t){return new Intl.NumberFormat("en-GB",{style:"currency",currency:l.toUpperCase()}).format(t)}}),Object(M.jsx)(k.a,{}),Object(M.jsx)(v.a,{}),B.assets.map((function(t){return Object(M.jsx)(N.a,{type:"monotone",name:"".concat(t),dataKey:"".concat(t,".").concat(l),dot:!1,stroke:L[t]||"#cccccc"},t)}))]})}):null}),Object(M.jsx)(f.a,{children:Object(M.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"dark",style:{margin:"50px 10px 10px 10px"},children:[Object(M.jsxs)("thead",{children:[Object(M.jsx)("tr",{children:Object(M.jsx)("th",{colspan:"4",className:"text-right",children:"transaction history"})}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"date"}),Object(M.jsx)("th",{children:"note"}),Object(M.jsx)("th",{children:"asset"}),Object(M.jsx)("th",{className:"text-right",children:"amount"})]})]}),Object(M.jsx)("tbody",{children:B&&B.transactions.length?B.transactions.filter((function(t){return d()(t.date).isBetween(d()(n.from),d()(n.to))})).map((function(t,e){return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:t.date}),Object(M.jsx)("td",{children:t.note}),Object(M.jsx)("td",{children:t.asset}),Object(M.jsx)("td",{className:"text-right",children:t.amount})]},e)})):null})]})}),Object(M.jsx)(f.a,{children:B&&B.balances.length?Object(M.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"dark",style:{margin:"50px 10px 10px 10px"},children:[Object(M.jsxs)("thead",{children:[Object(M.jsx)("tr",{children:Object(M.jsx)("th",{colspan:B.assets.length+2,className:"text-right",children:"balance history"})}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"date"}),B.assets.map((function(t){return Object(M.jsx)("th",{className:"text-right",children:t},t)})),Object(M.jsx)("th",{className:"text-right",children:"total"})]})]}),Object(M.jsx)("tbody",{children:B.balances.filter((function(t){return d()(t.date).isBetween(d()(n.from),d()(n.to))})).map((function(t){return Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:t.date}),B.assets.map((function(e){return Object(M.jsxs)("td",{className:"text-right",children:[Object(M.jsx)("span",{className:"text-muted",style:{marginRight:"1em"},children:t[e][e]}),new Intl.NumberFormat("en-GB",{style:"currency",currency:l.toUpperCase()}).format(t[e][l]||0)]},"".concat(t.date,"-").concat(e))})),Object(M.jsx)("td",{className:"text-right",children:new Intl.NumberFormat("en-GB",{style:"currency",currency:l.toUpperCase()}).format(B.assets.reduce((function(e,n){return e+(t[n][l]||0)}),0))})]},t.date)}))})]}):null})]})},q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,361)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};n(350);i.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(U,{})}),document.getElementById("root")),q()}},[[351,1,2]]]);
//# sourceMappingURL=main.259aab44.chunk.js.map