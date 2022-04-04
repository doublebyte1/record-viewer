(window["webpackJsonpreact-portfolio"]=window["webpackJsonpreact-portfolio"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),o=a.n(i),c=(a(24),a(8)),s=a(9),l=a(14),p=a(10),u=a(15),d=(a(25),a(26),a(33)),m=a(34),h=a(32),f=a(35),g="https://emotional.byteroad.net",k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).addMarker=function(e){console.log("comes here");var t=a.state.markers;t.push(e.latlng),console.log(e.latlng),a.setState({markers:t})},a.state={records:[],title:"",description:"",contactPoint:"",type:"",url:"",filter:"",markers:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleInputChange",value:function(e){this.setState({filter:e.target.value})}},{key:"getRecords",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({records:e.features}),t.setState({title:t.state.records[0].properties.title}),t.setState({description:t.state.records[0].properties.description}),t.setState({url:t.getAvatar()}),t.setState({created:t.state.records[0].properties.created}),t.setState({contactPoint:t.state.records[0].properties.contactPoint}),t.setState({type:t.state.records[0].properties.type})})).catch((function(e){}))}},{key:"handleSubmit",value:function(){this.getRecords(""!==this.state.filter?"".concat(g,"/collections/").concat("ec_catalog","/items?q=").concat(this.state.filter):"".concat(g,"/collections/").concat("ec_catalog","/items?limit=").concat(100))}},{key:"componentDidMount",value:function(){this.getRecords("".concat(g,"/collections/").concat("ec_catalog","/items?limit=").concat(100))}},{key:"genDelta",value:function(){return Math.random()}},{key:"handleClick",value:function(e){console.log(e);var t={lat:e.properties.extent.spatial.bbox[0][1],lng:e.properties.extent.spatial.bbox[0][0]+this.genDelta()};console.log(t);var a=this.state.markers;return a.push(t),this.setState({markers:a}),this.refs.map.leafletElement.flyTo(t,12),this.setState({title:e.properties.title,description:e.properties.description,url:this.getAvatar(),created:e.properties.created,contactPoint:e.properties.contactPoint,type:e.properties.type})}},{key:"getAvatar",value:function(){var e=Math.random();return e<.2?"https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png":e<.4?"https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png":e<.6?"https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png":e<.8?"https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png":"https://upload.wikimedia.org/wikipedia/en/a/ab/Wendy_South_Park.png"}},{key:"renderProjectItem",value:function(){var e=this;return this.state.records.map((function(t){return n.a.createElement("div",{className:"project-item",key:t.id,onClick:function(){e.handleClick(t)}},n.a.createElement("img",{src:e.getAvatar(),alt:t.properties.title}),n.a.createElement("h3",null,t.properties.title),n.a.createElement("p",null,"description: ",t.properties.description),n.a.createElement("p",null,"contactPoint: ",t.properties.contactPoint.name),n.a.createElement("p",null,"created: ",t.properties.created),n.a.createElement("p",null,"type: ",t.properties.type))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"featured-section"},n.a.createElement("div",{id:"feature-block"},n.a.createElement(d.a,{ref:"map",center:[38.736946,-9.142685],zoom:11,onClick:this.addMarker},n.a.createElement(m.a,{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",attribution:'\xa9 Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),this.state.markers.map((function(e,t){return n.a.createElement(h.a,{key:"marker-".concat(t),position:e},n.a.createElement(f.a,null,n.a.createElement("span",null,"Hello world!")))}))),n.a.createElement("div",{id:"right"},n.a.createElement("h2",{id:"feature-title"},this.state.title),n.a.createElement("p",{id:"feature-desc"},this.state.description),n.a.createElement("p",{id:"feature-created"},this.state.created)))),n.a.createElement("div",{className:"project-search"},n.a.createElement("div",{className:"form-inline mb-3"},n.a.createElement("input",{type:"text",className:"form-control flex-primary-1",placeholder:"","aria-label":"","aria-describedby":"basic-addon1",name:"title",onChange:function(t){return e.handleInputChange(t)}}),n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("button",{className:"btn btn-primary ml-2",type:"button",onClick:function(t){return e.handleSubmit(t)}},"Filter")))),n.a.createElement("div",{id:"project-grid"},this.renderProjectItem()))}}]),t}(n.a.Component),v=(a(29),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={records:{}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://emotional.byteroad.net/collections/ec_catalog/items?f=json").then((function(e){return e.json()})).then((function(t){e.setState({records:t})})).catch((function(e){}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(k,{records:this.state.records.features,projects:this.state.projects}))}}]),t}(n.a.Component));o.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c2726bd5.chunk.js.map