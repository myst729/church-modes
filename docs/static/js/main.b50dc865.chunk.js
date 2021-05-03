(this["webpackJsonpmedieval-church-modes"]=this["webpackJsonpmedieval-church-modes"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(16),s=n.n(a),o=(n(68),n(4)),l=n(80),r=(n(69),n(81));function u(e){return Object.keys(e).filter((function(e){return Number.isNaN(+e)}))}var j,d=n(6);!function(e){e[e.C=1]="C",e[e.D=2]="D",e[e.E=3]="E",e[e.F=4]="F",e[e.G=5]="G",e[e.A=6]="A",e[e.B=7]="B"}(j||(j={}));var b,f=function(e){var t=e.defaultTonic,n=void 0===t?j.C:t,i=e.onTonicChange,a=Object(c.useState)(n),s=Object(o.a)(a,2),b=s[0],f=s[1],v=u(j).map((function(e){return{label:e,value:j[e]}}));return Object(d.jsxs)("div",{className:"tonics",style:{marginTop:20},children:[Object(d.jsx)(l.a.Title,{level:2,children:"Tonic"}),Object(d.jsx)("div",{children:Object(d.jsx)(r.a.Group,{value:b,options:v,onChange:function(e){var t=e.target.value;f(t),i(t)},optionType:"button",buttonStyle:"solid"})})]})};n(76);!function(e){e[e.Ionian=1]="Ionian",e[e.Dorian=2]="Dorian",e[e.Phrygian=3]="Phrygian",e[e.Lydian=4]="Lydian",e[e.Mixolydian=5]="Mixolydian",e[e.Aeolian=6]="Aeolian",e[e.Locrian=7]="Locrian"}(b||(b={}));var v=function(e){var t=e.defaultMode,n=void 0===t?b.Ionian:t,i=e.onModeChange,a=Object(c.useState)(n),s=Object(o.a)(a,2),j=s[0],f=s[1],v=Object(c.useState)(0),O=Object(o.a)(v,2),m=O[0],x=O[1];Object(c.useEffect)((function(){x(40*(j-1))}),[j]);var h=u(b).map((function(e){return{label:e,value:b[e]}}));return Object(d.jsxs)("div",{className:"modes",style:{marginTop:20},children:[Object(d.jsx)(l.a.Title,{level:2,children:"Mode"}),Object(d.jsx)("div",{children:Object(d.jsx)(r.a.Group,{value:j,options:h,onChange:function(e){var t=e.target.value;f(t),i(t)},optionType:"button",buttonStyle:"solid"})}),Object(d.jsxs)("div",{className:"steps",children:["WWHWWWHWWHWWW".split("").map((function(e,t){return Object(d.jsx)("span",{className:"step",children:e},t)})),Object(d.jsx)("div",{className:"frame",style:{left:m}})]})]})},O=(n(77),function(e){var t=function(e){var t=new AudioContext(e);return{tone:function(e){var n=e.frequency,c=void 0===n?440:n,i=e.value,a=void 0===i?187.5:i,s=t.createOscillator();s.connect(t.destination),s.frequency.value=c,s.start(),s.stop(t.currentTime+a/1e3)}}}({}),n=e.tonic,i=e.mode,a=Object(c.useState)(""),s=Object(o.a)(a,2),l=s[0],r=s[1],u=function(e){t.tone({frequency:e})};return Object(c.useEffect)((function(){var e=j[n],t=b[i];r("keyboard-".concat(e,"-").concat(t).toLowerCase())}),[n,i]),Object(d.jsx)("div",{className:l,children:Object(d.jsxs)("div",{className:"keys",children:[Object(d.jsx)("div",{className:"white",onClick:function(){return u(261.63)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(277.18)},style:{left:40}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(293.66)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(311.13)},style:{left:110}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(329.63)}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(349.23)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(369.99)},style:{left:220}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(392)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(415.3)},style:{left:285}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(440)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(466.16)},style:{left:350}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(493.88)}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(523.25)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(554.37)},style:{left:460}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(587.33)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(622.25)},style:{left:530}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(659.26)}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(698.46)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(739.99)},style:{left:640}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(783.99)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(830.61)},style:{left:705}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(880)}}),Object(d.jsx)("div",{className:"black",onClick:function(){return u(932.33)},style:{left:770}}),Object(d.jsx)("div",{className:"white",onClick:function(){return u(987.77)}})]})})}),m=function(){var e=Object(c.useState)(j.C),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(b.Ionian),s=Object(o.a)(a,2),r=s[0],u=s[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l.a.Title,{children:"Medieval Church Modes"}),Object(d.jsx)(O,{tonic:n,mode:r}),Object(d.jsx)(f,{defaultTonic:n,onTonicChange:i}),Object(d.jsx)(v,{defaultMode:r,onModeChange:u})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()}},[[78,1,2]]]);
//# sourceMappingURL=main.b50dc865.chunk.js.map