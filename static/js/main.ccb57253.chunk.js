(window["webpackJsonpreact-portfolio"]=window["webpackJsonpreact-portfolio"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),c=(a(22),a(7)),s=a(8),l=a(12),p=a(10),d=(a(23),a(24),a(30)),m=a(32),u=a(31),h="https://emotional.byteroad.net",f={color:"lime"},g=[[38.709803,-9.135388],[38.717261,-9.128275]],v=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).addMarker=function(e){console.log("comes here");var t=n.state.markers;t.push(e.latlng),console.log(e.latlng),n.setState({markers:t})},n.state={map:null,mainTitle:"",mainDescription:"",mainExtent:[[51.49,-.08],[51.5,-.06]],center:[0,0],records:[],title:"",description:"",contactPoint:"",type:"",url:"",filter:"",markers:[]},n}return Object(s.a)(a,[{key:"handleInputChange",value:function(e){this.setState({filter:e.target.value})}},{key:"drawExtent",value:function(e){var t=[[e[1],e[0]],[e[3],e[2]]];this.setState({mainExtent:t}),this.setState({center:[e[1],e[0]]}),console.log(this.state.center),console.log(this.state.mainExtent),console.log(g)}},{key:"getCollectionMetadata",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({mainTitle:e.title}),t.setState({mainDescription:e.description}),t.drawExtent(e.extent.spatial.bbox[0])})).catch((function(e){}))}},{key:"getRecords",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({records:e.features}),t.setState({title:t.state.records[0].properties.title}),t.setState({description:t.state.records[0].propemainTitlerties.description}),t.setState({url:t.getAvatar()}),t.setState({created:t.state.records[0].properties.created}),t.setState({contactPoint:t.state.records[0].properties.contactPoint}),t.setState({type:t.state.records[0].properties.type})})).catch((function(e){}))}},{key:"handleSubmit",value:function(){this.getRecords(""!==this.state.filter?"".concat(h,"/collections/").concat("ec_catalog","/items?q=").concat(this.state.filter):"".concat(h,"/collections/").concat("ec_catalog","/items?limit=").concat(100))}},{key:"componentDidMount",value:function(){this.getCollectionMetadata("".concat(h,"/collections/").concat("ec_catalog","?f=json")),this.getRecords("".concat(h,"/collections/").concat("ec_catalog","/items?limit=").concat(100))}},{key:"genDelta",value:function(){return Math.random()}},{key:"handleClick",value:function(e){console.log(e);var t={lat:e.properties.extent.spatial.bbox[0][1],lng:e.properties.extent.spatial.bbox[0][0]+this.genDelta()};console.log(t);var a=this.state.markers;return a.push(t),this.setState({markers:a}),this.refs.map.leafletElement.flyTo(t,12),this.setState({title:e.properties.title,description:e.properties.description,url:this.getAvatar(),created:e.properties.created,contactPoint:e.properties.contactPoint,type:e.properties.type})}},{key:"getAvatar",value:function(){var e=Math.random();return e<.2?"https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png":e<.4?"https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png":e<.6?"https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png":e<.8?"https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png":"https://upload.wikimedia.org/wikipedia/en/a/ab/Wendy_South_Park.png"}},{key:"renderProjectItem",value:function(){var e=this;return this.state.records.map((function(t){return r.a.createElement("div",{className:"project-item",key:t.id,onClick:function(){e.handleClick(t)}},r.a.createElement("img",{src:e.getAvatar(),alt:t.properties.title}),r.a.createElement("h3",null,t.properties.title),r.a.createElement("p",null,"description: ",t.properties.description),r.a.createElement("p",null,"contactPoint: ",t.properties.contactPoint.name),r.a.createElement("p",null,"created: ",t.properties.created),r.a.createElement("p",null,"type: ",t.properties.type))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-dark text-white text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},""!==this.state.mainTitle?this.state.mainTitle:"My Catalog"),r.a.createElement("p",{className:"card-text"},""!==this.state.mainDescription?this.state.mainDescription:"This is a placeholder for the catalog description."))),r.a.createElement("div",{className:"featured-section"},r.a.createElement("div",{id:"feature-block"},r.a.createElement(d.a,{ref:"map",center:this.state.center,zoom:13,whenCreated:function(t){return e.setState({map:t})},onClick:this.addMarker},r.a.createElement(m.a,{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",attribution:'\xa9 Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(u.a,{bounds:this.state.mainExtent,pathOptions:f})),r.a.createElement("div",{id:"right"},r.a.createElement("h2",{id:"feature-title"},this.state.title),r.a.createElement("p",{id:"feature-desc"},this.state.description),r.a.createElement("p",{id:"feature-created"},this.state.created))),r.a.createElement("div",{className:"project-search"},r.a.createElement("div",{className:"form-inline mb-3"},r.a.createElement("input",{type:"text",className:"form-control flex-primary-1",placeholder:"","aria-label":"","aria-describedby":"basic-addon1",name:"title",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-primary ml-2",type:"button",onClick:function(t){return e.handleSubmit(t)}},"Filter"))))),r.a.createElement("div",{id:"project-grid"},this.renderProjectItem()),r.a.createElement("footer",{className:"page-footer font-small blue pt-4"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},"Developed by ByteRoad:",r.a.createElement("a",{href:"/"}," ByteRoad.net"))))}}]),a}(r.a.Component),y=(a(27),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={records:{}},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://emotional.byteroad.net/collections/ec_catalog/items?f=json").then((function(e){return e.json()})).then((function(t){e.setState({records:t})})).catch((function(e){}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{records:this.state.records.features,projects:this.state.projects}))}}]),a}(r.a.Component));o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ccb57253.chunk.js.map