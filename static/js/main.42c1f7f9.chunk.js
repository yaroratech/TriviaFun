(this.webpackJsonptriviafun=this.webpackJsonptriviafun||[]).push([[0],{37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(11),s=n.n(i),o=(n(37),n(23)),a=n(29),u=n(14),l=n(63),j=n(62),d=n(22),b=n.n(d),f=n(4);function h(e){var t=e.question,n=e.setNumAnswered,r=Object(c.useState)(!1),i=Object(u.a)(r,2),s=i[0],o=i[1],a=function(){o(!0),n((function(e){return console.log(e+1),e+1}))},l=function(e){return s?e===t.correct_answer?"green":"red":""};return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(f.jsx)("h1",{children:b.a.decode(t.question)}),Object(f.jsx)("div",{children:t.answers.map((function(e){return Object(f.jsx)(j.a,{onClick:a,variant:"contained",disabled:s,style:{backgroundColor:l(e)},children:b.a.decode(e)},e)}))})]})}function O(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(10),s=Object(u.a)(i,2),d=s[0],b=s[1],O=Object(c.useState)(0),p=Object(u.a)(O,2),m=p[0],v=p[1];console.log(d);var x=function(){fetch("https://opentdb.com/api.php?amount="+d).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){var t;if("boolean"===e.type)t=["True","False"];else{t=Object(a.a)(e.incorrect_answers);var n=Math.floor(3*Math.random());t.splice(n,0,e.correct_answer)}return Object(o.a)(Object(o.a)({},e),{},{answers:t})}));r(t)})),v(0)};return 0===n.length?Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(f.jsx)(l.a,{type:"number",value:d,onChange:function(e){b(e.target.value)}}),Object(f.jsx)(j.a,{onClick:x,children:"Go!"})]}):Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[n.map((function(e){return Object(f.jsx)(h,{question:e,setNumAnswered:v},e.question)})),m===parseInt(d)&&Object(f.jsx)(j.a,{onClick:x,children:"Fetch more questions"})]})}var p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),p()}},[[45,1,2]]]);
//# sourceMappingURL=main.42c1f7f9.chunk.js.map