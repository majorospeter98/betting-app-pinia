(function(){"use strict";var t={5619:function(t,e,s){var n=s(5130),a=s(6768);function r(t,e,s,n,r,i){const o=(0,a.g2)("the-header"),u=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(o),(0,a.bF)(u)])}const i={id:"header"};function o(t,e,s,n,r,o){const u=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(u,{to:"/matches"},{default:(0,a.k6)((()=>[(0,a.eW)("Matches")])),_:1}),(0,a.bF)(u,{to:"/myBets"},{default:(0,a.k6)((()=>[(0,a.eW)("My Bets")])),_:1})])}var u={},l=s(1241);const c=(0,l.A)(u,[["render",o],["__scopeId","data-v-53b500b4"]]);var h=c,d={components:{TheHeader:h}};const f=(0,l.A)(d,[["render",r]]);var m=f,p=s(3367),v=s(1387),A=s(4232),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA40lEQVR4nO3VwQ0BQRTG8UmY700TaIQKsO5UwJmEBqiACqiACmwFVEAHe1zZZJ+Ms4N5b3DY/SdznPllZyd5xtR9GAMjBhLz65jowUT5dw4HEn84E3HgyhkYSsBUgL1fQPov+Bz85dWKibIIV51J4GsE+CKBTxHgYzgM7CK86K0EXkWAl+GwtRM1bO04HHaup4ad60rgdgS4FQ4b02CiQgEXbEwzGPYxcFc8rJuRxpphoRkOTHRQwHsNvFH847UGningqRwGBoqr7sth5zpMVArg0u8Vwz4GFoGzOWNg/tpcV+meLcOy+nFXCzcAAAAASUVORK5CYII=";const w={id:"flex",class:"container"},k={id:"matches"},y={id:"betslip"},g={key:0},C=["onClick"],E={key:1};function B(t,e,s,n,r,i){const o=(0,a.g2)("MatchItem");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("section",w,[(0,a.Lk)("section",k,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.getMatches,(t=>((0,a.uX)(),(0,a.Wv)(o,{key:t.id,id:t.id,match:t.match,home:t.home,away:t.away,onSaveData:i.betslip},null,8,["id","match","home","away","onSaveData"])))),128))]),(0,a.Lk)("section",y,[r.results.length>0?((0,a.uX)(),(0,a.CE)("ul",g,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.results,(t=>((0,a.uX)(),(0,a.CE)("li",{key:t},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.results,(e=>((0,a.uX)(),(0,a.CE)("span",{key:e},[(0,a.Lk)("h3",null,(0,A.v_)(e),1),(0,a.Lk)("p",null,(0,A.v_)(t.matchinfo),1),(0,a.Lk)("img",{class:"removebtn",src:b,onClick:s=>i.deleteBets(t,e)},null,8,C)])))),128))])))),128))])):((0,a.uX)(),(0,a.CE)("h3",E,"You don't have bets")),r.results.length>0?((0,a.uX)(),(0,a.CE)("button",{key:2,class:"button2",onClick:e[0]||(e[0]=(...t)=>i.addTheBets&&i.addTheBets(...t))}," Confirm ")):(0,a.Q3)("",!0)])])])}s(4114);function M(t,e,s,n,r,i){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("h1",null,(0,A.v_)(s.match),1),(0,a.Lk)("button",{class:"button",onClick:e[0]||(e[0]=t=>i.setMatch("Home",+s.id))},"Home"),(0,a.Lk)("button",{class:"button",onClick:e[1]||(e[1]=t=>i.setMatch("Draw",+s.id))},"Draw"),(0,a.Lk)("button",{class:"button",onClick:e[2]||(e[2]=t=>i.setMatch("away",+s.id))},"Away")])}var X={emits:["save-data"],props:["id","match","home","away"],data(){return{results:[]}},methods:{setMatch(t,e){this.selectedMatch=this.match,"Home"===t&&(this.results.includes(this.home)?this.results=this.results.filter((t=>t!==this.home)):this.results.push(this.home)),"Draw"===t&&(this.results.includes("Draw")?this.results=this.results.filter((t=>"Draw"!==t)):this.results.push("Draw")),"away"===t&&(this.results.includes(this.away)?this.results=this.results.filter((t=>t!==this.away)):this.results.push(this.away)),this.$emit("save-data",this.match,this.results,e,t)}}};const L=(0,l.A)(X,[["render",M]]);var O=L;const F=(0,p.nY)("bet",{state:()=>({bets:[],count:10,matches:[{id:1,match:"Valencia-Getafe",home:"Valencia",away:"Getafe"},{id:2,match:"Espanyol-Osasuna",home:"Espanyol",away:"Osasuna"},{id:3,match:"Atletico Madrid-Athletic Club",home:"Atletico Madrid",away:"Athletic Club"},{id:4,match:"Barcelona-Real Madrid",home:"Barcelona",away:"Real Madrid"},{id:5,match:"Sevilla-Cadiz",home:"Sevilla",away:"Cadiz"}]}),getters:{match(){return this.matches},getBets(){return this.bets}},actions:{addBet(){}}});var _={name:"BetApp",components:{MatchItem:O},data(){return{results:[],dataSaved:!1}},computed:{getMatches(){const t=F();return t.match}},methods:{addTheBets(){const t=F();for(const e in this.results){const s=this.results[e].matchinfo,n=this.results[e].results;t.bets.push({info:s},{result:n})}this.results=[],this.dataSaved=!0},deleteBets(t,e){t.results=t.results.filter((t=>t!==e)),0===t.results.length&&(this.results=this.results.filter((e=>e.id!==t.id)))},betslip(t,e,s){this.filterResult=e;const n=this.results.filter((t=>t.id!==s));0!==e.length&&n.push({id:s,matchinfo:t,results:e}),this.results=n}},beforeRouteLeave(t,e,s){if(0===this.results.length)s();else{let t=confirm("You have unsaved data, you wanna still leave?");s(t)}}};const I=(0,l.A)(_,[["render",B],["__scopeId","data-v-6171503e"]]);var H=I;const R={class:"container"},K={id:"newbets"};function T(t,e,s,n,r,i){return(0,a.uX)(),(0,a.CE)("div",R,[(0,a.Lk)("section",K,[(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.getBets,(t=>((0,a.uX)(),(0,a.CE)("li",{key:t},[(0,a.Lk)("p",null,(0,A.v_)(t.info),1),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.result,(t=>((0,a.uX)(),(0,a.CE)("span",{key:t},[(0,a.Lk)("h3",null,(0,A.v_)(t),1)])))),128))])))),128))])])])}var z={created(){},computed:{getBets(){const t=F();return t.bets}}};const G=(0,l.A)(z,[["render",T],["__scopeId","data-v-2420a2ea"]]);var x=G;const S={class:"center"};function V(t,e,s,n,r,i){const o=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",S,[(0,a.Lk)("h2",null,[(0,a.eW)(" The page doesn't exist. Here is the main page "),(0,a.bF)(o,{to:"/matches"},{default:(0,a.k6)((()=>[(0,a.eW)("Matches")])),_:1})])])}var Y={};const D=(0,l.A)(Y,[["render",V],["__scopeId","data-v-5475f88a"]]);var Q=D;const W=(0,v.aE)({history:(0,v.LA)(),routes:[{path:"/",redirect:"/matches"},{path:"/matches",component:H},{path:"/mybets",component:x},{path:"/:NotFound(.*)",component:Q}]}),j=(0,p.Ey)(),U=(0,n.Ef)(m);U.use(W),U.use(j),U.mount("#app")}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,r){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],r=t[c][2];for(var o=!0,u=0;u<n.length;u++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(o=!1,r<i&&(i=r));if(o){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,i=n[0],o=n[1],u=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(u)var c=u(s)}for(e&&e(n);l<i.length;l++)r=i[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},n=self["webpackChunksport"]=self["webpackChunksport"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(5619)}));n=s.O(n)})();
//# sourceMappingURL=app.6f06f34b.js.map