(this.webpackJsonpfur=this.webpackJsonpfur||[]).push([[0],{162:function(e,t,a){e.exports=a(252)},252:function(e,t,a){"use strict";a.r(t);a(163),a(189),a(191),a(192),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231);var n=a(0),l=a.n(n),r=a(41),c=a.n(r),o=a(29),i=a.n(o),s=a(64),m=a(9),d=(a(90),a(96)),u=a.n(d),p=a(97),E=a.n(p),h=a(98),g=a(99),v=a(104),b=a(103),f=a(254),y=a(256),j=a(255),k=(a(249),function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={lat:56.2558114,lng:43.3155113},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.coords)}},{key:"render",value:function(){return 0===this.props.coords.lat?l.a.createElement("div",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u0438 \u0435\u0449\u0435 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b"):l.a.createElement("div",{style:{height:"100%",width:"100%"}},l.a.createElement("div",null,this.props.coords.lat+this.props.coords.long),l.a.createElement(f.a,{style:{height:"100%",width:"100%",position:"absolute"},zoom:12,center:[this.props.coords.lat,this.props.coords.long]},l.a.createElement(y.a,{url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(j.a,{center:[this.props.coords.lat,this.props.coords.long]})))}}]),a}(l.a.Component)),O=a(102),z=a.n(O),w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.g,{separator:"hide"},l.a.createElement(m.b,null,l.a.createElement(m.a,{size:"s"},l.a.createElement("div",{style:{height:96}})),l.a.createElement(m.a,{size:"s"},l.a.createElement("div",{style:{height:96}})),l.a.createElement(m.a,{size:"s"},l.a.createElement("div",{style:{height:96}})))),l.a.createElement(m.f,null,l.a.createElement("div",null,l.a.createElement(m.k,{name:"radio",value:"1",description:"\u0422\u0440\u0435\u043d\u043e\u0433\u0430",defaultChecked:!0},"\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u043d\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430"),l.a.createElement(m.k,{name:"radio",value:"2",description:"\u0421\u0442\u0430\u0446\u0438\u043e\u043d\u0430\u0440\u043d\u044b\u0439"},"\u041f\u043e\u0441\u0442 \u0414\u041f\u0421"),l.a.createElement(m.k,{name:"radio",value:"3",description:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438 \u0441\u043f\u0435\u0446\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"},"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0414\u041f\u0421"))),l.a.createElement(m.g,{header:l.a.createElement(m.h,{mode:"secondary"},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435")},l.a.createElement(m.d,{before:l.a.createElement(z.a,null)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0443")))},x=function(){var e=Object(n.useState)({lat:0,long:0}),t=Object(s.a)(e,2),a=t[0],r=t[1];i.a.send("VKWebAppGetGeodata",{}).then((function(e){r({lat:e.lat,long:e.long})})).catch((function(e){return console.log(e)}));var c=Object(n.useState)("map"),o=Object(s.a)(c,2),d=o[0],p=o[1];return 0===a.lat?l.a.createElement(m.c,null,"\u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f \u0435\u0449\u0435 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0430"):l.a.createElement(m.e,{activeStory:d,tabbar:l.a.createElement(m.l,null,l.a.createElement(m.m,{onClick:function(){return p("map")},selected:"map"===d,"data-story":"map",text:"\u041a\u0430\u0440\u0442\u0430"},l.a.createElement(u.a,null)),l.a.createElement(m.m,{onClick:function(){return p("add")},selected:"add"===d,"data-story":"add",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"},l.a.createElement(E.a,null)))},l.a.createElement(m.n,{id:"map",activePanel:"map"},l.a.createElement(m.i,{id:"map"},l.a.createElement(m.j,null,"\u041a\u0430\u0440\u0442\u0430"),l.a.createElement(k,{coords:a}))),l.a.createElement(m.n,{id:"add",activePanel:"add"},l.a.createElement(m.i,{id:"add"},l.a.createElement(m.j,null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement(w,null))))};i.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.78ff9d7f.chunk.js.map