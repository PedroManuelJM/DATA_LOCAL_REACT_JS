(this["webpackJsonpdatalocal-react"]=this["webpackJsonpdatalocal-react"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var r=a(106),c=a(74),n=a(2);test("renders learn react link",(function(){Object(r.a)(Object(n.jsx)(c.default,{}));var e=r.b.getByText(/learn react/i);expect(e).toBeInTheDocument()}))},161:function(e,t,a){"use strict";a.r(t);a(488)},201:function(e,t,a){var r={"./":53,"./App":74,"./App.js":74,"./App.test":111,"./App.test.js":111,"./Pages/Home":73,"./Pages/Home.js":73,"./dataLocal":36,"./dataLocal/":36,"./dataLocal/index":36,"./dataLocal/index.js":36,"./index":53,"./index.css":110,"./index.js":53,"./logo.svg":487,"./reportWebVitals":72,"./reportWebVitals.js":72,"./setupTests":161,"./setupTests.js":161};function c(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=n,e.exports=c,c.id=201},36:function(e,t,a){"use strict";a.r(t),a.d(t,"SuperHeroesData",(function(){return r}));var r=[{id:1,nombres:"Peter Parker",cargo:"Gerente de ventas",ciudad:"Lima",foto:"peterparker.jpg"},{id:2,nombres:"Tony Stark",cargo:"Gerente de producci\xf3n",ciudad:"Puno",foto:"tonystark.jpg"},{id:3,nombres:"Bruce Banner",cargo:"Jefe de Seguridad",ciudad:"Ica",foto:"brucebanner.jpg"},{id:4,nombres:"Susan Storm",cargo:"Jefe de Investigaci\xf3n",ciudad:"Tacna",foto:"susanstorm.jpg"},{id:5,nombres:"Natasha Romanoff",cargo:"Gerente de sistemas",ciudad:"Iquitos",foto:"natasha.jpg"},{id:6,nombres:"Peper Potts",cargo:"Asistente de Gerencia",ciudad:"Huancayo",foto:"pepperpotts.jpg"},{id:7,nombres:"Clark Kent",cargo:"Vendedor",ciudad:"Huaraz",foto:"clarkkent.jpg"},{id:8,nombres:"Bruce Wayne",cargo:"Contador",ciudad:"Cajamarca",foto:"brucewayne.jpg"},{id:9,nombres:"Donald Blake",cargo:"Jefe de Almac\xe9n",ciudad:"Trujillo",foto:"donaldblake.jpg"},{id:10,nombres:"Diana Prince",cargo:"Gerente General",ciudad:"Piura",foto:"dianaprince.jpg"}]},487:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logo.6ce24c58.svg"},53:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(23),o=a.n(n),s=(a(197),a(110),a(198),a(190)),i=a(4),d=a(72),u=a(73),l=a(2);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{basename:"/DATA_LOCAL_REACT_JS/",children:Object(l.jsx)(i.c,{children:Object(l.jsx)(i.a,{exact:!0,path:"/",component:u.default})})})}),document.getElementById("root")),Object(d.default)()},72:function(e,t,a){"use strict";a.r(t);t.default=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,635)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),r(e),c(e),n(e),o(e)}))}},73:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(186),c=a(187),n=a(193),o=a(192),s=a(1),i=a(36),d=a(2),u=function(e){Object(n.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={listaSuperheroes:[]},a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.setState({listaSuperheroes:i.SuperHeroesData}),console.log(i.SuperHeroesData)}},{key:"dibujarTabla",value:function(e){return Object(d.jsxs)("table",{id:"example",className:"table table-striped table-bordered ",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Cod"}),Object(d.jsx)("th",{children:"Nombres"}),Object(d.jsx)("th",{children:"Cargo"}),Object(d.jsx)("th",{})]})}),Object(d.jsx)("tbody",{children:e.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.nombres}),Object(d.jsx)("td",{children:e.cargo}),Object(d.jsxs)("td",{children:[" ",Object(d.jsx)("img",{src:"/img/"+e.foto,className:"img-fluid"})]})]},e.id)}))})]})}},{key:"mostrarColaborador",value:function(){var e=this.state.colaboradorSeleccionado;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Colaborador Seleccionado"}),Object(d.jsx)("h4",{children:e.nombres}),Object(d.jsx)("img",{src:a(201)("./"+e.foto),className:"img-fluid",alt:e.nombres}),Object(d.jsx)("p",{children:e.cargo}),Object(d.jsx)("p",{children:e.ciudad})]})}},{key:"render",value:function(){var e=this.dibujarTabla(this.state.listaSuperheroes);return Object(d.jsx)("section",{id:"colaboradores",className:"padded-40",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{children:"Colaboradores"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-7",children:e}),Object(d.jsx)("div",{className:"col-md-5"})]})]})})}}]),s}(s.Component)},74:function(e,t,a){"use strict";a.r(t);a(1);var r=a(2);t.default=function(){return Object(r.jsx)(r.Fragment,{})}}},[[53,1,2]]]);
//# sourceMappingURL=main.2a1c171c.chunk.js.map