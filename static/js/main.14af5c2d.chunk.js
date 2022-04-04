(window["webpackJsonpreact-portfolio"]=window["webpackJsonpreact-portfolio"]||[]).push([[0],{16:function(t,e,a){t.exports=a(27)},21:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),o=(a(21),a(7)),s=a(8),l=a(11),p=a(9),d=a(12),u=(a(22),a(23),a(30)),m=a(29),h="https://emotional.byteroad.net",f=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).addMarker=function(t){console.log("comes here");var e=a.state.markers;e.push(t.latlng),console.log(t.latlng),a.setState({markers:e})},a.state={mainTitle:"",mainDescription:"",records:[],title:"",description:"",contactPoint:"",type:"",url:"",filter:"",markers:[]},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"handleInputChange",value:function(t){this.setState({filter:t.target.value})}},{key:"getTitle",value:function(t){var e=this;fetch(t).then((function(t){return t.json()})).then((function(t){e.setState({mainTitle:t.title}),e.setState({mainDescription:t.description}),console.log(e.state.mainTitle)})).catch((function(t){}))}},{key:"getRecords",value:function(t){var e=this;fetch(t).then((function(t){return t.json()})).then((function(t){e.setState({records:t.features}),e.setState({title:e.state.records[0].properties.title}),e.setState({description:e.state.records[0].properties.description}),e.setState({url:e.getAvatar()}),e.setState({created:e.state.records[0].properties.created}),e.setState({contactPoint:e.state.records[0].properties.contactPoint}),e.setState({type:e.state.records[0].properties.type})})).catch((function(t){}))}},{key:"handleSubmit",value:function(){this.getRecords(""!==this.state.filter?"".concat(h,"/collections/").concat("ec_catalog","/items?q=").concat(this.state.filter):"".concat(h,"/collections/").concat("ec_catalog","/items?limit=").concat(100))}},{key:"componentDidMount",value:function(){this.getTitle("".concat(h,"/collections/").concat("ec_catalog","?f=json")),this.getRecords("".concat(h,"/collections/").concat("ec_catalog","/items?limit=").concat(100))}},{key:"genDelta",value:function(){return Math.random()}},{key:"handleClick",value:function(t){console.log(t);var e={lat:t.properties.extent.spatial.bbox[0][1],lng:t.properties.extent.spatial.bbox[0][0]+this.genDelta()};console.log(e);var a=this.state.markers;return a.push(e),this.setState({markers:a}),this.refs.map.leafletElement.flyTo(e,12),this.setState({title:t.properties.title,description:t.properties.description,url:this.getAvatar(),created:t.properties.created,contactPoint:t.properties.contactPoint,type:t.properties.type})}},{key:"getAvatar",value:function(){var t=Math.random();return t<.2?"https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png":t<.4?"https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png":t<.6?"https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png":t<.8?"https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png":"https://upload.wikimedia.org/wikipedia/en/a/ab/Wendy_South_Park.png"}},{key:"renderProjectItem",value:function(){var t=this;return this.state.records.map((function(e){return r.a.createElement("div",{className:"project-item",key:e.id,onClick:function(){t.handleClick(e)}},r.a.createElement("img",{src:t.getAvatar(),alt:e.properties.title}),r.a.createElement("h3",null,e.properties.title),r.a.createElement("p",null,"description: ",e.properties.description),r.a.createElement("p",null,"contactPoint: ",e.properties.contactPoint.name),r.a.createElement("p",null,"created: ",e.properties.created),r.a.createElement("p",null,"type: ",e.properties.type))}))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-dark text-white text-center"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h2",{class:"card-title"},""!==this.state.mainTitle?this.state.mainTitle:"My Catalog"),r.a.createElement("p",{class:"card-text"},""!==this.state.mainDescription?this.state.mainDescription:"This is a placeholder for the catalog description."))),r.a.createElement("div",{className:"featured-section"},r.a.createElement("div",{id:"feature-block"},r.a.createElement(u.a,{ref:"map",center:[38.736946,-9.142685],zoom:11,onClick:this.addMarker},r.a.createElement(m.a,{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",attribution:'\xa9 Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})),r.a.createElement("div",{id:"right"},r.a.createElement("h2",{id:"feature-title"},this.state.title),r.a.createElement("p",{id:"feature-desc"},this.state.description),r.a.createElement("p",{id:"feature-created"},this.state.created))),r.a.createElement("div",{className:"project-search"},r.a.createElement("div",{className:"form-inline mb-3"},r.a.createElement("input",{type:"text",className:"form-control flex-primary-1",placeholder:"","aria-label":"","aria-describedby":"basic-addon1",name:"title",onChange:function(e){return t.handleInputChange(e)}}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-primary ml-2",type:"button",onClick:function(e){return t.handleSubmit(e)}},"Filter"))))),r.a.createElement("div",{id:"project-grid"},this.renderProjectItem()))}}]),e}(r.a.Component),g=(a(26),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).state={records:{}},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://emotional.byteroad.net/collections/ec_catalog/items?f=json").then((function(t){return t.json()})).then((function(e){t.setState({records:e})})).catch((function(t){}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{records:this.state.records.features,projects:this.state.projects}))}}]),e}(r.a.Component));c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14af5c2d.chunk.js.map