(this["webpackJsonpkitten-world-app"]=this["webpackJsonpkitten-world-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(13),n(3)),s=n(4),l=n(6),m=n(5),u=n(7),d=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},h=function(e){var t=e.onSearchChange;return r.a.createElement("div",{className:"w-50 mx-auto input-group mt-3 input-group-sm mb-3"},r.a.createElement("input",{type:"text",onChange:t,className:"form-control text-center font-weight-bolder","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"}))},p={width:"18rem"},f=function(e){var t=e.name;return r.a.createElement("div",{className:"col-md-3 col-sm-6 ml-3 mb-3"},r.a.createElement("div",{className:"card",style:p},r.a.createElement("img",{src:"https://robohash.org/".concat(t,".png?set=set4"),className:"card-img-top",alt:"pokemon"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-center m-2"},t))))},g=function(e){var t=e.kittens;return r.a.createElement("div",{className:"row kittens"},t.map((function(e,n){return r.a.createElement("div",null,r.a.createElement(f,{key:t[n].id,name:t[n].username}))})))},v=(n(14),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={kittens:[],searchField:"",loading:!1},n.onSearchChange=function(e){n.setState({searchField:e.target.value})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({kittens:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.kittens,n=e.searchField;if(e.loading)return r.a.createElement(d,null);var a=t.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",{className:"text-center m-3 font-weight-bolder"},"Kitten World")),r.a.createElement(h,{onSearchChange:this.onSearchChange}),r.a.createElement(g,{kittens:a,className:"kittens"}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.11b2206c.chunk.js.map