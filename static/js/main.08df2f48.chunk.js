(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{122:function(e,t,n){e.exports=n.p+"static/media/dog.09324664.jpg"},123:function(e,t,n){e.exports={dd:"UserInfo_dd__g3N_p"}},127:function(e,t,n){e.exports=n.p+"static/media/user.f8a15e74.png"},128:function(e,t,n){e.exports=n.p+"static/media/free-gif-preloaders-psds-09.87b8671c.gif"},156:function(e,t,n){e.exports=n(281)},161:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(60),l=n.n(o),u=(n(161),function(){return r.a.createElement("div",null,r.a.createElement("div",null,"My Profile"),r.a.createElement("div",null," News"),r.a.createElement("div",null," Pages"),r.a.createElement("div",null,"Events"),r.a.createElement("div",null,"Games"))}),c=function(){return r.a.createElement("div",null,r.a.createElement("div",null," Policy"),r.a.createElement("div",null,"Advertisments "))},s=n(34),i=n.n(s),m=n(15),d=n(23),p=n(24),f=n(27),h=n(26),v=n(29),b=function(e){return r.a.createElement("div",null,e.comment)},E=n(130),g=n(122),w=n.n(g),y=n(118),j=n(119),O=n(123),k=n.n(O),_=function(e){var t=e.input,n=(e.meta,Object(E.a)(e,["input","meta"]));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},t,n,{className:k.a.dd}))))},C=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(y.a,{name:"about me",component:"div"},e.info.aboutMe," "),r.a.createElement(y.a,{name:"fullName",component:"div"},e.info.fullName),r.a.createElement("div",null,r.a.createElement(y.a,{name:"dog",component:"div"},r.a.createElement("img",{src:w.a}))),r.a.createElement(y.a,{name:"forInput",placeholder:"hello",component:_},"    "),r.a.createElement("div",null,r.a.createElement("button",null,"Add")))},M=C=Object(j.a)({form:"UserInfo"})(C),F=n(40),I=n.n(F),N=n(63),x=n(87),T=n(65),S=n.n(T),L=S.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"2a5c057f-adf0-483b-a14e-555af5b69a41"}}),P=function(e){return L.get("users?count=".concat(e))},D=function(e){return L.post("follow/".concat(e))},U=function(e){return L.delete("follow/".concat(e))},A=function(){return L.get("auth/me")},H=function(e){return L.get("profile/status/".concat(e))},J=function(e){return L.put("profile/status",{status:e})},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return L.post("/auth/login",{email:e,password:t,rememberMe:n})},B=function(){return L.delete("/auth/login")},R=function(e){var t=Object(a.useState)(!0),n=Object(x.a)(t,2),o=n[0],l=n[1],u=Object(a.useState)(""),c=Object(x.a)(u,2),s=c[0],i=c[1];Object(a.useEffect)((function(){function t(){return(t=Object(N.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e.myId);case 2:n=t.sent,i(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);return r.a.createElement("div",null,o?r.a.createElement("div",{onDoubleClick:function(){l(!1)}},s||"hello"):r.a.createElement("div",null,r.a.createElement("input",{value:s,onBlur:function(){l(!0),J(s)},onChange:function(e){i(e.currentTarget.value)},autoFocus:!0})))},W=function(e){var t=e.comment.map((function(e){return r.a.createElement("div",null,r.a.createElement(b,{comment:e,id:e.id}))}));return Object(a.useDebugValue)(),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(M,{info:e.info,onSubmit:function(t){return e.addComment(t.forInput)}})),r.a.createElement("div",null,t),r.a.createElement("div",null," ",r.a.createElement(R,e)," "))},K=function(e){return r.a.createElement("div",null,e.message)},X=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(y.a,{name:"postMessage",component:"div"},e.postMessage),r.a.createElement(y.a,{name:"forInput",component:"textarea"}," "),r.a.createElement("div",null,r.a.createElement("button",null,"Add")))};X=Object(j.a)({form:"dialogs"})(X);var Y=function(e){var t=e.posts.map((function(e){return r.a.createElement(K,{message:e.message,key:e.key})}));return r.a.createElement("div",null,r.a.createElement(X,{onSubmit:function(t){return e.addPost(t.forInput)},postMessage:t}))},z=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,"Login"),r.a.createElement("div",null,r.a.createElement(y.a,{name:"email",component:Z,validate:[G]})),r.a.createElement("div",null,r.a.createElement(y.a,{name:"password",component:Z,type:"password",validate:[G]})),r.a.createElement("div",null,r.a.createElement(y.a,{name:"rememberMe",component:Z,type:"checkbox"})),r.a.createElement("button",{disabled:e.submitting},"Login"))},G=function(e){return e&&e.length>30?"max":void 0},Z=function(e){var t=e.input,n=e.type,a=e.meta;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{type:n})),r.a.createElement("div",null,a.error||a.warning?r.a.createElement("span",null,a.error):void 0))},$=z=Object(j.a)({form:"login"})(z),q=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).loggining=function(t){return V(t.email,t.password,t.rememberMe).then((function(t){return 0===t.data.resultCode?e.props.authThunk():null}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(this.props.match.params.userId)).then((function(t){e.props.userId(t.data)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.b,{path:"/body/profile/:".concat(this.props.match.params.userId,"?"),render:function(){return r.a.createElement(W,{comment:e.props.state.comment.comment,addComment:e.props.comment,info:e.props.state.id,myId:e.props.state.authMe.data.id})}}),r.a.createElement(v.b,{exact:!0,path:"/body/Dialogs/:".concat(this.props.match.params.userId,"?"),render:function(){return r.a.createElement(Y,{posts:e.props.state.posts.posts,addPost:e.props.post})}}),r.a.createElement(v.b,{path:"/body/login",render:function(){return r.a.createElement($,{onSubmit:e.props.loginThunk})}}))}}]),n}(r.a.Component),Q=n(7),ee=n(8),te={data:{id:null,login:null,email:null},messages:[],resultCode:1},ne=function(e){return{type:"authMe",action:e}},ae=function(e){return function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:n=e.sent,t(ne(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},re=n(126),oe=n(22),le={email:null,password:null,rememberMe:null},ue=Object(re.a)((function(e){return e}),(function(e){return e})),ce=Object(Q.d)(Object(m.b)((function(e){return{state:ue(e)}}),{post:function(e){return{type:"postPush",textt:e}},comment:function(e){return{type:"postComment",textt:e}},userId:function(e){return{type:"userId",action:e}},authThunk:ae,loginThunk:function(e){return function(t){V(e.email,e.password,e.rememberMe).then((function(e){0==e.data.resultCode?t({type:"login",data:e.data}):t(Object(oe.a)("login",{email:"some error"}))}))}}}),v.f)(q),se=function(e){return r.a.createElement("div",null,r.a.createElement("div",null," ",e.FullName),r.a.createElement("div",null," ",e.Country),r.a.createElement("button",{disabled:e.idFilter.some((function(t){return t===e.id})),onClick:function(){!0===e.followed?e.unfollowFunc(e.id):e.followFunc(e.id)}},!0===e.followed?r.a.createElement("div",null,"unfollow"):r.a.createElement("div",null,"follow")))},ie=n(127),me=n.n(ie),de=n(51),pe=n.n(de),fe=n(128),he=n.n(fe),ve=n(13),be=function(e){var t=e.state.users.users.map((function(t){return r.a.createElement("div",{className:pe.a.main},r.a.createElement("div",{className:pe.a.second},r.a.createElement(ve.b,{to:"/body/profile/".concat(t.id)},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:me.a,alt:t.id,className:pe.a.img})),r.a.createElement(se,{id:t.id,FullName:t.name,Country:t.Country,followed:t.followed,followFunc:e.follow,unfollowFunc:e.unfollow,isLoading:e.isLoading,loadStatus:e.state.users.isLoading,idFilter:e.state.users.idFilter})))}));return r.a.createElement("div",null,r.a.createElement("img",{src:e.state.users.isFetching?null:"".concat(he.a)}),r.a.createElement("div",null,t),r.a.createElement("button",{onClick:function(){return e.showMore(e.state.users.count+2),e.onPageChanged(e.state.users.count)},className:pe.a.showMore},"Show more"))},Ee=n(33),ge={users:[],count:2,isFetching:!1,idFilter:[]},we=function(e){return{type:"togleIsFetching",status:e}},ye=function(e){return{type:"follow",status:e}},je=function(e){return{type:"unfollow",status:e}},Oe=function(e,t){return{type:"isLoading",status:e,id:t}},ke=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(){return e.props.UsersThunk(e.props.state.users.count+2,e.props.state.users.users)},e.followFunc=function(t){return e.props.followThunk(t)},e.unfollowFunc=function(t){return e.props.unfollowThunk(t)},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){return this.props.UsersThunk(this.props.state.users.count)}},{key:"render",value:function(){return r.a.createElement(be,{state:this.props.state,onPageChanged:this.onPageChanged,showMore:this.props.showMore,follow:this.followFunc,unfollow:this.unfollowFunc,isLoading:this.props.isLoading})}}]),n}(r.a.Component),_e=Object(Q.d)(Object(m.b)((function(e){return{state:e}}),{isLoading:Oe,follow:ye,unfollow:je,showMore:function(e){return{type:"showMore",status:e}},UsersThunk:function(e){return function(t){t(we(!1)),P(e).then((function(e){t(we(!0)),t({type:"setUsers",status:e.data.items})}))}},followThunk:function(e){return function(t){t(Oe(!0,e)),D(e).then((function(n){return 0===n.data.resultCode&&t(ye(e)),t(Oe(!1,e))}))}},unfollowThunk:function(e){return function(t){t(Oe(!0,e)),U(e).then((function(n){return 0===n.data.resultCode&&t(je(e)),t(Oe(!1,e))}))}}}))(ke),Ce=n(41),Me=n.n(Ce),Fe=function(e){return 1===e.props.resultCode?r.a.createElement("div",null,"\u0417\u0430\u043b\u043e\u0433\u0438\u043d\u044c\u0441\u044f"):r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement(y.a,{name:"email",component:"div"},e.props.data.email)),r.a.createElement("div",null," ",r.a.createElement(y.a,{name:"id",component:"div"},e.props.data.id)),r.a.createElement("div",null,"  ",r.a.createElement(y.a,{name:"login",component:"div"},e.props.data.login)))};Fe=Object(j.a)({form:"logInfo"})(Fe);var Ie=function(e){return r.a.createElement("div",{className:Me.a.main},r.a.createElement("div",{className:Me.a.profile}," ",r.a.createElement(ve.b,{to:"/body/profile"},"Profile")),r.a.createElement("div",{className:Me.a.dialogs}," ",r.a.createElement(ve.b,{to:"/body/Dialogs"},"Dialogs")),r.a.createElement("div",{className:Me.a.users}," ",r.a.createElement(ve.b,{to:"/users"},"Users")),r.a.createElement("div",{className:Me.a.login},r.a.createElement(ve.b,{to:"/body/login",onClick:e.authThunk},"Login "),1===e.props.resultCode?null:r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return B().then((function(t){return 0===t.data.resultCode?e.authThunk():null}))}},"Logout")),r.a.createElement(v.b,{path:"/body/login",render:function(){return r.a.createElement(Fe,e)}})))},Ne=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){return this.props.authThunk()}},{key:"render",value:function(){return r.a.createElement(Ie,{props:this.props.state,authThunk:this.props.authThunk})}}]),n}(r.a.Component),xe=Object(m.b)((function(e){return{state:e.authMe,loginData:e.login}}),{authMe:ne,authThunk:ae})(Ne),Te=function(){return r.a.createElement("div",{className:i.a.app},r.a.createElement("div",{className:i.a.header},"  ",r.a.createElement(xe,null)," "),r.a.createElement(v.b,{exact:!0,path:"/body/:prof?/:userId?",render:function(){return r.a.createElement("div",{className:i.a.body},r.a.createElement(ce,null))}}),r.a.createElement(v.b,{path:"/users",render:function(){return r.a.createElement("div",{className:i.a.users},r.a.createElement(_e,null))}}),r.a.createElement("div",{className:i.a.sidebar}," ",r.a.createElement(u,null),"  "),r.a.createElement("div",{className:i.a.bottom},"  ",r.a.createElement(c,null)," "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se={posts:[{id:1,message:"Hello",key:1},{id:2,message:"How are you",key:2}]},Le={comment:[]},Pe={aboutMe:"\u044f",contacts:{facebook:"facebom",website:null,vk:"vk.cmych",twitter:"https://twr.com/@sdf",instagram:"instom/sds",youtube:null,github:"githom",mainLink:null},lookingForAJob:!0,lookingForAJobDescription:"\u043d\u0435\u0443\u0440\u0430\u0447\u0443\u0441\u044c",fullName:"samurw name",userId:2,photos:{small:"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",large:"https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"userId":return Object(ee.a)({},e,{},t.action);default:return e}},Ue=n(129),Ae=n(120),He=Object(Q.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"postPush":var n={id:4,message:t.textt,key:4},a=Object(ee.a)({},e,{posts:[].concat(Object(Ee.a)(e.posts),[n])});return a;default:return e}},comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"postComment":var n=Object(ee.a)({},e,{comment:[].concat(Object(Ee.a)(e.comment),[t.textt])});return n;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"follow":return Object(ee.a)({},e,{users:e.users.map((function(e){return e.id===t.status?Object(ee.a)({},e,{followed:!0}):e}))});case"unfollow":return Object(ee.a)({},e,{users:e.users.map((function(e){return e.id===t.status?Object(ee.a)({},e,{followed:!1}):e}))});case"setUsers":return Object(ee.a)({},e,{users:Object(Ee.a)(t.status)});case"showMore":if("showMore"===t.type){var n=Object(ee.a)({},e,{count:t.status});return n}case"togleIsFetching":var a=Object(ee.a)({},e,{isFetching:t.status});return a;case"isLoading":var r=Object(ee.a)({},e,{idFilter:t.status?[].concat(Object(Ee.a)(e.idFilter),[t.id]):e.idFilter.filter((function(e){return e!==t.id}))});return r;default:return e}},id:De,authMe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"authMe":return Object(ee.a)({},e,{},t.action);default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return Object(ee.a)({},e,{},t.data);default:return e}},form:Ae.a}),Je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Ve=Object(Q.e)(He,Je(Object(Q.a)(Ue.a)));window.store=Ve;l.a.render(r.a.createElement(ve.a,null,r.a.createElement(m.a,{store:Ve},r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,n){e.exports={header:"app_header__FM1Zx",sidebar:"app_sidebar__3-JtV",body:"app_body__17Ue8",bottom:"app_bottom__2LsAc",app:"app_app__3CI90"}},41:function(e,t,n){e.exports={login:"Header_login__1rVAi",main:"Header_main__1v7BK",profile:"Header_profile__z7PRU",dialog:"Header_dialog__37CWj",users:"Header_users__2CV_Y"}},51:function(e,t,n){e.exports={img:"usersSteck_img__36ygt",showMore:"usersSteck_showMore__12Ip1"}}},[[156,1,2]]]);
//# sourceMappingURL=main.08df2f48.chunk.js.map