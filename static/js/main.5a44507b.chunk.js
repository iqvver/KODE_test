(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],{110:function(e,t,n){},138:function(e,t,n){},204:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){},328:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(33),c=n.n(i),o=n(46),r=n(23),l=(n(204),n(16)),j=n(11),d="SET_POKE",u="SET_CURRENT_PAGE",b="SET_TOTAL_POKEMONS_COUNT",h="IS_FETCHING",p={pokemons:[],pageSize:250,totalCount:0,currentPage:1,isFetching:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{pokemons:t.pokemons});case u:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case b:return Object(j.a)(Object(j.a)({},e),{},{totalCount:t.count});case h:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});default:return e}},m=n(10),x=n(181),f=n(388),g=n(381),k=(n(138),n(386)),v=n(383),P=n(389),A=n(390),w=n(391),y=n(1),C=["page","type","selected"],U=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);var a=Object(f.a)({count:t}).items;return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"pagination-Block",children:a.map((function(t,n){var s=t.page,a=t.type,i=t.selected,c=Object(x.a)(t,C),o=null;return o="start-ellipsis"===a||"end-ellipsis"===a?Object(y.jsx)(g.a,{disabled:!0,variant:"contained",children:" ... "}):"page"===a?Object(y.jsx)(g.a,Object(j.a)(Object(j.a)({variant:"contained",style:{fontWeight:i?"bold":void 0,color:i?"#000":void 0}},c),{},{children:s})):Object(y.jsx)(g.a,Object(j.a)(Object(j.a)({variant:"contained"},c),{},{children:a})),Object(y.jsx)("span",{onClick:function(){e.onPageChanged(s)},children:o},n)}))}),Object(y.jsx)(k.a,{container:!0,className:"containerGrid",children:e.pokemons.map((function(e){var t;return Object(y.jsx)(k.a,{className:"cardGrid",children:Object(y.jsx)(v.a,{children:Object(y.jsxs)(P.a,(t={className:"cardMediaGrid",xs:4},Object(m.a)(t,"xs",8),Object(m.a)(t,"children",[Object(y.jsxs)(o.b,{to:"/cards/"+e.id,children:["  ",Object(y.jsx)("img",{src:e.images.small,className:"pokeCard"})," "]}),Object(y.jsx)(A.a,{className:"cardContent",children:Object(y.jsxs)(w.a,{gutterBottom:!0,variant:"h7",component:"div",children:[Object(y.jsxs)("div",{children:["\u0418\u043c\u044f:",e.name]}),Object(y.jsxs)("div",{children:["\u0422\u0438\u043f:",e.types]}),Object(y.jsxs)("div",{children:["\u0425\u043e\u0437\u044f\u0438\u043d:",e.artist]})]})})]),t))})},e.id)}))})]})},N=n(77),S=n(387),I=Object(r.b)((function(e){return{pokemons:e.pokemonCardPage.pokemons,pageSize:e.pokemonCardPage.pageSize,totalCount:e.pokemonCardPage.totalCount,currentPage:e.pokemonCardPage.currentPage,isFetching:e.pokemonCardPage.isFetching,isAuth:e.isAuth.isAuth}}),(function(e){return{setPokemons:function(t){e(function(e){return{type:d,pokemons:e}}(t))},setCurrentPage:function(t){e({type:u,currentPage:t})},setPokemonsTotalCount:function(t){e(function(e){return{type:b,count:e}}(t))},setIsFetching:function(t){e(function(e){return{type:h,isFetching:e}}(t))}}}))((function(e){if("false"==localStorage.getItem("isAuth")||'{"isAuth":""}'==localStorage.getItem("isAuth"))return Object(y.jsx)(l.a,{to:"/login"});0===e.pokemons.length&&(e.setIsFetching(!0),N.get("https://api.pokemontcg.io/v2/cards?page=".concat(e.currentPage,"&count=").concat(e.pageSize)).then((function(t){e.setIsFetching(!1),e.setPokemons(t.data.data),e.setPokemonsTotalCount(t.data.totalCount)})));return Object(y.jsxs)(y.Fragment,{children:[e.isFetching?Object(y.jsx)(S.a,{}):null,Object(y.jsx)(U,{totalCount:e.totalCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:function(t){e.setCurrentPage(t),e.setIsFetching(!0),N.get("https://api.pokemontcg.io/v2/cards?page=".concat(t,"&count=").concat(e.pageSize)).then((function(t){e.setIsFetching(!1),e.setPokemons(t.data.data)}))},pokemons:e.pokemons,setPokemons:e.setPokemons,setPokemonsTotalCount:e.setPokemonsTotalCount,setCurrentPage:e.setCurrentPage,isFetching:e.isFetching})]})})),T=n(52),F=n(53),E=n(65),L=n(63),_=(n(227),n(375)),R=n(376),B=function(e){return e.pokemonsProfile?Object(y.jsx)("div",{className:"pokeCard-Block",children:Object(y.jsxs)(v.a,{sx:{display:"flex"},children:[Object(y.jsx)("div",{className:"buttonBack",children:Object(y.jsx)(g.a,{variant:"text",onClick:function(){return e.history.goBack()},children:"Back"})}),Object(y.jsx)(_.a,{sx:{display:"flex",flexDirection:"column"},children:Object(y.jsx)(A.a,{sx:{flex:""},children:Object(y.jsxs)("div",{className:"infoBlock",children:[Object(y.jsx)("div",{children:Object(y.jsx)("h2",{children:e.pokemonsProfile.data.name})}),Object(y.jsxs)("div",{className:"general",children:[Object(y.jsx)("h4",{children:"General informations"}),Object(y.jsx)(R.a,{}),Object(y.jsxs)("div",{children:["Set identifier  ",e.pokemonsProfile.data.number]}),Object(y.jsxs)("div",{children:[e.pokemonsProfile.data.rarity,"  ",e.pokemonsProfile.data.supertype]}),Object(y.jsxs)("div",{children:["Illustrated by  ",e.pokemonsProfile.data.artist]})]}),Object(y.jsxs)("div",{className:"informations",children:[Object(y.jsx)("h4",{children:"Vullaby's informations"}),Object(y.jsx)(R.a,{}),Object(y.jsxs)("div",{children:["National Pok\xe9dex No  ",e.pokemonsProfile.data.nationalPokedexNumbers]}),Object(y.jsxs)("div",{children:[e.pokemonsProfile.data.hp,"  HP"]}),Object(y.jsxs)("div",{children:[e.pokemonsProfile.data.types,"  type Card"]}),Object(y.jsxs)("div",{children:[e.pokemonsProfile.data.subtypes,"  ",e.pokemonsProfile.data.supertype]})]}),Object(y.jsxs)("div",{className:"attacks",children:[Object(y.jsx)("h4",{children:"Vullaby's Attacks"}),Object(y.jsx)(R.a,{}),Object(y.jsx)("div",{children:e.pokemonsProfile.data.attacks[0].name}),Object(y.jsx)("div",{children:e.pokemonsProfile.data.attacks[0].text}),Object(y.jsxs)("div",{children:[e.pokemonsProfile.data.attacks.name,e.pokemonsProfile.data.attacks.damage]})]}),Object(y.jsxs)("div",{className:"foot",children:[Object(y.jsx)("h4",{children:"Other Informations"}),Object(y.jsx)(R.a,{}),e.pokemonsProfile.data.weaknesses[0].type,e.pokemonsProfile.data.weaknesses[0].value," ",Object(y.jsx)("br",{}),e.pokemonsProfile.data.retreatCost]})]})})}),Object(y.jsx)(P.a,{component:"img",sx:{width:500,height:700,marginTop:5},image:e.pokemonsProfile.data.images.large,alt:"Live from space album cover"})]})}):Object(y.jsx)(S.a,{})},G="SET_POKEMONS_PROFILE",M={pokemonsProfile:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;return t.type===G?Object(j.a)(Object(j.a)({},e),{},{pokemonsProfile:t.pokemonsProfile}):e},D=function(e){Object(E.a)(n,e);var t=Object(L.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.pokeId;N.get("https://api.pokemontcg.io/v2/cards/"+t).then((function(t){e.props.setPokemonsProfile(t.data)}))}},{key:"render",value:function(){return Object(y.jsx)(B,Object(j.a)(Object(j.a)({},this.props),{},{pokemonsProfile:this.props.pokemonsProfile}))}}]),n}(a.a.Component),K=Object(l.f)(D),V=Object(r.b)((function(e){return{pokemonsProfile:e.pokemonsProfilePage.pokemonsProfile}}),{setPokemonsProfile:function(e){return{type:G,pokemonsProfile:e}}})(K),Y=n(8),H="IS_AUTH",Z="ADD_USER",q="IS_US",J={isAuth:"",loginAndPassword:[{id:0,username:"iqvver",login:"iqvver@gamil.com",password:1234},{id:1,username:"smart",login:"smart@gamil.com",password:1488}],isUs:"onLine"},W=function(e){return{type:H,isAuth:e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(j.a)(Object(j.a)({},e),{},{isAuth:t.isAuth});case q:return Object(j.a)(Object(j.a)({},e),{},{isUs:t.isUs});case Z:var n=t.newUserName,s=t.newUserLogin,a=t.newUserPass;return Object(j.a)(Object(j.a)({},e),{},{loginAndPassword:[].concat(Object(Y.a)(e.loginAndPassword),[{username:n,login:s,password:a}])});default:return e}},Q=n(19),X=(n(110),n(42)),ee=n(378),te=n(96),ne=n(377),se=function(e){Object(E.a)(n,e);var t=Object(L.a)(n);function n(e){var s;return Object(T.a)(this,n),(s=t.call(this,e)).handleGenerate=s.handleGenerate.bind(Object(te.a)(s)),s.state={random:""},s}return Object(F.a)(n,[{key:"handleGenerate",value:function(){for(var e="",t=0;t<4;t++)e+="0123456789"[Math.floor(10*Math.random())],this.setState({random:e})}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{align:"center",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(g.a,{onClick:this.handleGenerate.bind(this),children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0434"}),Object(y.jsxs)(ne.a,{children:["\u041a\u043e\u0434: ",this.state.random]})]}),Object(y.jsx)(X.d,{initialValues:{kode:""},validate:function(t){var n={};return t.kode?t.kode!="".concat(e.state.random)&&(n.kode="The kode is not correct!"):n.kode="The kode field is empty!!",n},children:function(t){var n=t.values;return Object(y.jsxs)(X.c,{children:[Object(y.jsx)(X.b,{className:"otpForm",type:"number",name:"kode",maxlength:"4"}),Object(y.jsx)(X.a,{name:"kode",component:"div"}),Object(y.jsx)("br",{}),n.kode?Object(y.jsx)(g.a,{onClick:n.kode=="".concat(e.state.random)?e.props.handleClick:null,children:"LogIn"}):Object(y.jsx)(g.a,{disabled:!0,children:"Login"}),Object(y.jsx)(g.a,{onClick:e.props.onClose,children:"Cansel"})]})}})]})}}]),n}(s.Component),ae={position:"absolute",top:"30%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},ie=function(e){var t=s.useState(!1),n=Object(Q.a)(t,2),a=n[0],i=n[1],c=function(){i(!0)},o=function(){return i(!1)};if("true"===localStorage.getItem("isAuth"))return Object(y.jsx)(l.a,{to:"/home"});var r=Object(Y.a)(e.isReg).map((function(e){return Object(y.jsxs)("div",{children:["name:",e.username," ",Object(y.jsx)("br",{}),"login(email):",e.login," ",Object(y.jsx)("br",{}),"password:",e.password]})}));return Object(y.jsxs)("div",{className:"loginForm",children:[Object(y.jsx)(ee.a,{open:a,onClose:o,children:Object(y.jsxs)(_.a,{sx:ae,children:[Object(y.jsx)(w.a,{variant:"h6",align:"center",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e-\u0431\u044b \u0432\u043e\u0439\u0442\u0438?"}),Object(y.jsx)(se,{handleClick:function(){localStorage.isAuth=!0,e.setIsAuth(!0)},onClose:o})]})}),Object(y.jsx)(g.a,{href:"#Login",children:"Sign In"}),Object(y.jsx)(g.a,{href:"#Registration",children:"Registration"}),Object(y.jsxs)("div",{className:"loginBlock",children:[Object(y.jsx)("h2",{children:"Please enter your login(email) and password!"}),Object(y.jsx)(X.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Email is not entered correctly"):t.email="The email field is empty!",e.password||(t.password="The password field is empty!!"),t},children:function(t){var n=t.values;return Object(y.jsxs)(X.c,{children:[Object(y.jsx)(X.b,{type:"email",name:"email"}),Object(y.jsx)(X.a,{name:"email",component:"div"}),Object(y.jsx)("br",{}),Object(y.jsx)(X.b,{type:"password",name:"password"}),Object(y.jsx)(X.a,{name:"password",component:"div"}),Object(y.jsx)("br",{}),Object(y.jsx)(g.a,{onClick:e.isReg.find((function(e){return e.login==n.email&&e.password==n.password}))?c:null,children:"LogIn"})]})}}),Object(y.jsx)("div",{children:r})]})]})},ce=Object(r.b)((function(e){return{isAuth:e.isAuth.isAuth,isReg:e.isAuth.loginAndPassword,isUs:e.isAuth.isUs}}),(function(e){return{setIsAuth:function(t){e(W(t))}}}))((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)("div",{children:Object(y.jsx)(ie,{isAuth:e.isAuth,setIsAuth:e.setIsAuth,isReg:e.isReg,isUs:e.isUs})})})})),oe=(n.p,n(228),n(392)),re=n(382),le=function(e){return Object(y.jsxs)("div",{children:[e.isAuth?Object(y.jsx)("div",{children:e.isUs}):Object(y.jsx)("div",{children:"offLne"}),"true"==localStorage.getItem("isAuth")?Object(y.jsx)(oe.a,{control:Object(y.jsx)(re.a,{checked:localStorage.isAuth,onChange:function(){localStorage.isAuth=!1,e.setIsAuth(!1)},"aria-label":"login switch"}),label:"\u0412\u044b\u0439\u0442\u0438"}):Object(y.jsx)(oe.a,{disabled:!0,control:Object(y.jsx)(re.a,{}),label:Object(y.jsx)(o.b,{to:"/login"})})]})},je=Object(r.b)((function(e){return{isAuth:e.isAuth.isAuth,isUs:e.isAuth.isUs}}),(function(e){return{setIsAuth:function(t){e(W(t))}}}))((function(e){return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"back",children:[Object(y.jsx)("div",{className:"header-text",children:Object(y.jsx)(o.b,{to:"/home",children:Object(y.jsx)("h1",{children:"Ultra Super Pokemon 5G Pro"})})}),Object(y.jsx)("div",{className:"login-block",children:Object(y.jsx)(le,{isAuth:e.isAuth,isUs:e.isUs,setIsAuth:e.setIsAuth})})]})})})),de=function(e){Object(E.a)(n,e);var t=Object(L.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"refreshAuth",value:function(){this.props.isAuth;localStorage.getItem(!1)}},{key:"componentDidMount",value:function(){this.refreshAuth()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.isAuth==e.isAuth&&this.refreshAuth()}},{key:"render",value:function(){return Object(y.jsx)(je,Object(j.a)({},this.props))}}]),n}(s.Component),ue=Object(r.b)((function(e){return{isAuth:e.isAuth.isAuth,isUs:e.isAuth.isUs}}),(function(e){return{setIsAuth:function(t){e(W(t))}}}))(de),be=n(380),he=n(379),pe=Object(he.a)({form:"userAddForm"})((function(e){return Object(y.jsx)("form",{onSubmit:e.handleSubmit,children:Object(y.jsxs)("div",{className:"registrationBlock",children:[Object(y.jsx)("h2",{children:"Enter the registration details."}),Object(y.jsxs)("div",{className:"inputWrapper",children:[Object(y.jsx)(be.a,{className:"fieldEmail",name:"newUserName",component:"input",type:"text",placeholder:"Enter your name"}),Object(y.jsx)("br",{}),Object(y.jsx)(be.a,{className:"inputEmail",name:"newUserLogin",type:"email",component:"input",placeholder:"Your email"}),Object(y.jsx)("br",{}),Object(y.jsx)("input",{className:"inputPass",name:"newUserPass",component:"input",type:"password",placeholder:"Your password"}),Object(y.jsx)("br",{}),Object(y.jsx)(be.a,{className:"inputPassTo",name:"newUserPass2",component:"input",type:"text",placeholder:"Repeat the password"}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{children:"Registration"})})]})]})})})),Oe=function(e){Object(Y.a)(e.loginAndPassword).reverse().map((function(e){return Object(y.jsxs)("div",{children:["name:",e.username," ",Object(y.jsx)("br",{}),"login(email):",e.login," ",Object(y.jsx)("br",{}),"password:",e.password]})}));return Object(y.jsxs)("div",{className:"registrationForm",children:[Object(y.jsx)(g.a,{href:"#Login",children:"Sign In"}),Object(y.jsx)(g.a,{href:"#Registration",children:"Registration"}),Object(y.jsx)("div",{children:Object(y.jsx)(pe,{onSubmit:function(t){t.newUserPass===t.newUserPass2?(e.addUser(t.newUserName,t.newUserLogin,t.newUserPass),alert("\u0412\u0441\u0435 \u041e\u041a")):t.newUserPass!==t.newUserPass2&&alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")}})})]})},me=Object(r.b)((function(e){return{isAuth:e.isAuth,loginAndPassword:e.isAuth.loginAndPassword,newUserName:e.isAuth.newUserName,newUserLogin:e.isAuth.newUserLogin,newUserPass:e.isAuth.newUserPass}}),(function(e){return{addUser:function(t,n,s,a){e(function(e,t,n){return{type:Z,newUserName:e,newUserLogin:t,newUserPass:n}}(t,n,s))}}}))(Oe);var xe=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("header",{className:"App-header",children:Object(y.jsx)(ue,{})}),Object(y.jsx)("div",{className:"App-navBar"}),Object(y.jsx)("div",{className:"App-content",children:Object(y.jsxs)("div",{children:[Object(y.jsx)(l.a,{from:"/",to:"/login"}),Object(y.jsx)(l.b,{path:"/home",render:function(){return Object(y.jsx)(I,{})}}),Object(y.jsx)(l.b,{path:"/login",render:function(){return Object(y.jsx)(ce,{})}}),Object(y.jsx)(l.b,{path:"/cards/:pokeId?",render:function(){return Object(y.jsx)(V,{})}}),Object(y.jsx)(l.b,{path:"/registration",render:function(){return Object(y.jsx)(me,{})}})]})})]})},fe=(n(328),n(25)),ge="SET_TYPE_POKE",ke="SET_SUBTYPE_POKE",ve={typepoke:[],subtypepoke:[]},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(j.a)(Object(j.a)({},e),{},{typepoke:t.typepoke});case ke:return Object(j.a)(Object(j.a)({},e),{},{subtypepoke:t.subtypepoke});default:return e}},Ae=n(385),we=Object(fe.b)({pokemonCardPage:O,navbarPage:Pe,pokemonsProfilePage:z,isAuth:$,form:Ae.a}),ye=Object(fe.c)(we);window.store=ye;var Ce=ye,Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,394)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};n(329);c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(o.a,{children:Object(y.jsx)(r.a,{store:Ce,children:Object(y.jsx)(xe,{})})})}),document.getElementById("root")),Ue()}},[[330,1,2]]]);
//# sourceMappingURL=main.5a44507b.chunk.js.map