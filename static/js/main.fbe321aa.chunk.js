(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,n){e.exports=n.p+"static/media/1.c6c62d52.png"},function(e,a,n){e.exports=n.p+"static/media/2.5f4651d9.png"},function(e,a,n){e.exports=n.p+"static/media/3.e87e808a.png"},,,function(e,a,n){e.exports=n(21)},,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(10),i=n.n(r),s=(n(17),n(18),n(1)),o=n(2),m=n(4),l=n(3),d=n(5),u=(n(19),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-header"},c.a.createElement("ul",{className:"nav navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-brand",href:"https://venkateshkocherlakota.github.io"},c.a.createElement("b",null,"Home"))))))))}}]),a}(c.a.Component)),g=(n(20),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"HandleClick",value:function(e){document.getElementById(e).hidden?document.getElementById(e).hidden=!1:document.getElementById(e).hidden=!0}},{key:"CheckBoxChanged",value:function(e){document.getElementById("check"+e).checked?document.getElementById("collapse"+e).hidden=!0:document.getElementById("collapse"+e).hidden=!1}},{key:"render",value:function(){var e=this;return c.a.createElement("ul",{className:"list-group"},this.props.userdetails.map(function(a){return c.a.createElement("div",{className:"container",key:"container-"+a.name},c.a.createElement("li",{className:"list-group-item",key:"li-"+a.name},c.a.createElement("div",null,c.a.createElement("div",{className:"card-header"},c.a.createElement("input",{type:"checkbox",className:"big-checkbox",id:"check"+a.name,onChange:e.CheckBoxChanged.bind(e,a.name)}),c.a.createElement("img",{className:"img-prof",src:a.imgsrc,width:"50",height:"50",alt:a.name}),c.a.createElement("button",{className:"btn btn-link",onClick:e.HandleClick.bind(e,"collapse"+a.name),type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},a.name),"\xa0\xa0\xa0 Age:\xa0",c.a.createElement("span",{className:"badge badge-pill badge-info"},a.age)),c.a.createElement("div",{id:"collapse"+a.name,className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-header"},"Description:"),c.a.createElement("div",{className:"card-body"},a.desc))))))}))}}]),a}(c.a.Component)),p=n(6),h=n.n(p),b=n(7),v=n.n(b),E=n(8),y=n.n(E),k=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=[{name:"Anne",age:"22",imgsrc:h.a,desc:"Interested in Arts and Crafts. Very creative."},{name:"Johnnie",age:"12",imgsrc:v.a,desc:"Very active and quick learner. Can be hyperactive sometimes."},{name:"Beck",age:"41",imgsrc:y.a,desc:"Cool person. But can be paranoid sometimes."},{name:"Anne1",age:"22",imgsrc:h.a,desc:"Interested in Arts and Crafts. Very creative."},{name:"Johnnie1",age:"12",imgsrc:v.a,desc:"Very active and quick learner. Can be hyperactive sometimes."},{name:"Beck1",age:"41",imgsrc:y.a,desc:"Cool person. But can be paranoid sometimes."},{name:"Anne2",age:"22",imgsrc:h.a,desc:"Interested in Arts and Crafts. Very creative."},{name:"Johnnie2",age:"12",imgsrc:v.a,desc:"Very active and quick learner. Can be hyperactive sometimes."},{name:"Beck2",age:"41",imgsrc:y.a,desc:"Cool person. But can be paranoid sometimes."},{name:"Anne3",age:"22",imgsrc:h.a,desc:"Interested in Arts and Crafts. Very creative."},{name:"Johnnie3",age:"12",imgsrc:v.a,desc:"Very active and quick learner. Can be hyperactive sometimes."},{name:"Beck3",age:"41",imgsrc:y.a,desc:"Cool person. But can be paranoid sometimes."}];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"container w-25 h-100"},c.a.createElement(u,{className:"fixedElement"})),c.a.createElement("div",{className:"container w-75 h-100"},c.a.createElement(g,{userdetails:e}))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.fbe321aa.chunk.js.map