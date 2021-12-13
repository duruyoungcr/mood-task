(this["webpackJsonpmood-task"]=this["webpackJsonpmood-task"]||[]).push([[0],[,function(e,t,o){e.exports={container:"MoodHistory_container__1q3ED",brand:"MoodHistory_brand__1cgK2",title:"MoodHistory_title__3GQTi",subtitle:"MoodHistory_subtitle__EDrGQ",history__list:"MoodHistory_history__list__3jaoV",empty:"MoodHistory_empty__27Lec",empty__img:"MoodHistory_empty__img__2lONk",empty__text:"MoodHistory_empty__text__1DYex"}},,function(e,t,o){e.exports={container:"MoodSelection_container__mwB6Y",content:"MoodSelection_content__2JMyu",img:"MoodSelection_img__2srIg",heading:"MoodSelection_heading__1Iicd",selections:"MoodSelection_selections__1gwcr",selection:"MoodSelection_selection__Fb9L5",desc:"MoodSelection_desc__1Ain5",btn:"MoodSelection_btn__n5tfc"}},function(e,t,o){e.exports={container:"MoodHistoryItem_container__3HE-3",content:"MoodHistoryItem_content__o0K9N",selection:"MoodHistoryItem_selection__LFOPQ",desc:"MoodHistoryItem_desc__KeZYi",time:"MoodHistoryItem_time__3hebG",img:"MoodHistoryItem_img__2Zj0z"}},,,,,,,,,,function(e,t,o){},function(e,t,o){},,function(e,t,o){"use strict";o.r(t);var c=o(2),s=o(8),i=o.n(s),n=(o(14),o(15),o(5)),a=[{id:"1",name:"Angry",description:"Cat wasn\u2019t having it",emoji:"\ud83d\ude16"},{id:"2",name:"Indifferent",description:"Cat was indifferent",emoji:"\ud83d\ude10"},{id:"3",name:"Excited",description:"Cat was super excited!",emoji:"\ud83d\ude03"}],r=o(3),d=o.n(r),m=o(0),l=function(e){var t,o=e.setMoodHistory,s=Object(c.useState)(""),i=Object(n.a)(s,2),r=i[0],l=i[1],_=Object(c.useState)(!1),j=Object(n.a)(_,2),b=j[0],g=j[1],h=function(e){l(e)};return Object(m.jsx)("section",{className:d.a.container,children:Object(m.jsxs)("div",{className:d.a.content,children:[Object(m.jsx)("img",{src:"./mood-task/logo.png",alt:"cat",className:d.a.img,width:94,height:79}),Object(m.jsx)("h1",{className:d.a.heading,children:"What is your cat\u2019s current mood?"}),Object(m.jsx)("div",{className:d.a.selections,children:a.map((function(e){return Object(m.jsx)("div",{className:"".concat(d.a.selection," ").concat(e.name.toLowerCase()," ").concat((null===r||void 0===r?void 0:r.id)===e.id&&e.name.toLowerCase()+"--active"),title:e.name,onClick:function(){return h(e)},role:"button","aria-label":"Select ".concat(e.name.toLowerCase()," as your cat's mood"),children:e.emoji},e.id)}))}),Object(m.jsx)("div",{className:d.a.desc,children:r&&Object(m.jsx)("p",{className:"".concat(null===r||void 0===r||null===(t=r.name)||void 0===t?void 0:t.toLowerCase()),children:r.description})}),Object(m.jsx)("button",{onClick:function(){return function(e){g(!0);var t=JSON.parse(localStorage.getItem("moodHistory"))||[];Object.assign(e,{time:new Date}),t.length<4||t.splice(t.length-1,1),t.unshift(e),localStorage.setItem("moodHistory",JSON.stringify(t)),setTimeout((function(){g(!1),o(t),h("")}),2e3)}(r)},disabled:!r,className:"".concat(d.a.btn," ").concat(r?"bg-purple":"bg-gray"),children:b?"Saving...":"Save mood"})]})})},_=o(4),j=o.n(_),b=o(6),g=o.n(b),h=o(9),u=o.n(h),x=function(e){var t=e.mood;return g.a.extend(u.a),Object(m.jsxs)("div",{className:"".concat(j.a.container," ").concat(t.name.toLowerCase()+"--border"),children:[Object(m.jsxs)("div",{className:j.a.content,children:[Object(m.jsx)("div",{className:"".concat(j.a.selection," ").concat(t.name.toLowerCase()," ").concat(t.name.toLowerCase()+"--active"),children:t.emoji}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{className:"".concat(t.name.toLowerCase()," ").concat(j.a.desc),children:t.description}),Object(m.jsxs)("p",{className:j.a.time,children:[g()(t.time).format("DD-MM-YYYY")," / ",g()(t.time).format("HH:mm")]})]})]}),Object(m.jsx)("img",{src:"./mood-task/assets/images/cat.png",alt:"cat",className:j.a.img})]})},p=o(1),y=o.n(p),O=function(e){var t=e.moodHistory;return Object(c.useEffect)((function(){}),[t]),Object(m.jsxs)("section",{className:y.a.container,children:[Object(m.jsxs)("div",{className:y.a.brand,children:[Object(m.jsx)("img",{src:"./mood-task/logo.png",alt:"cat",className:y.a.img,width:49,height:41}),Object(m.jsx)("h1",{className:y.a.title,children:"Cat mood tracker\u2122"})]}),Object(m.jsx)("p",{className:y.a.subtitle,children:"mood history"}),t.length>0?Object(m.jsx)("div",{className:y.a.history__list,children:t.map((function(e){return Object(m.jsx)(x,{mood:e},e.id+"_"+e.time)}))}):Object(m.jsx)("div",{className:y.a.empty,children:Object(m.jsxs)("div",{className:y.a.empty__content,children:[Object(m.jsx)("img",{src:"./mood-task/assets/images/empty.png",alt:"cat",className:y.a.empty__img,width:72,height:61}),Object(m.jsx)("p",{className:y.a.empty__text,children:"No mood history to show yet"})]})})]})},f=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("moodHistory"))||[]),t=Object(n.a)(e,2),o=t[0],s=t[1];return Object(m.jsxs)("main",{className:"px-4 xs:px-12 xl:px-20 py-12 grid grid-cols-1 lg:grid-cols-2",children:[Object(m.jsx)(l,{setMoodHistory:s}),Object(m.jsx)(O,{moodHistory:o})]})};var N=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(f,{})})},v=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,18)).then((function(t){var o=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;o(e),c(e),s(e),i(e),n(e)}))};i.a.render(Object(m.jsx)(N,{}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.5ad27fa4.chunk.js.map