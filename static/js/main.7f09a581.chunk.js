(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"db",function(){return U}),a.d(n,"auth",function(){return C});var r={};a.r(r),a.d(r,"doCreateUserWithEmailAndPassword",function(){return P}),a.d(r,"doSignInWithEmailAndPassword",function(){return x}),a.d(r,"doSignOut",function(){return A}),a.d(r,"doPasswordReset",function(){return M}),a.d(r,"doPasswordUpdate",function(){return D});var s={};a.r(s),a.d(s,"doCreateUser",function(){return F}),a.d(s,"onceGetUsers",function(){return T});var o=a(0),i=a.n(o),l=a(17),c=a.n(l),u=a(10),m=(a(67),a(4)),d=a(6),p=a(8),h=a(7),f=a(9),b=a(131),v=a(130),g=a(16),E=a(129),w=a(24),y=a.n(w),O=(a(74),a(76),{apiKey:"AIzaSyA9v3GrTjCsoM5MT-V2NnEqGsA37NuQOfE",authDomain:"my-first-app-dfd97.firebaseapp.com",databaseURL:"https://my-first-app-dfd97.firebaseio.com",projectId:"my-first-app-dfd97",storageBucket:"my-first-app-dfd97.appspot.com",messagingSenderId:"1021669950976"});y.a.apps.length||y.a.initializeApp(O);var j,N,k,S,I,L,U=y.a.database(),C=y.a.auth(),P=function(e,t){return C.createUserWithEmailAndPassword(e,t)},x=function(e,t){return C.signInWithEmailAndPassword(e,t)},A=function(){return C.signOut()},M=function(e){return C.sendPasswordResetEmail(e)},D=function(e){return C.currentUser.updatePassword(e)},F=function(e,t,a){return U.ref("users/".concat(e)).set({username:t,email:a})},T=function(){return U.ref("users").once("value")},W=function(){return i.a.createElement("button",{type:"button",className:"btn btn-default",onClick:r.doSignOut},"Sign Out")},R="/home",z=function(){return i.a.createElement("div",{id:"navbar",className:"navbar-collapse"},i.a.createElement("ul",{className:"nav navbar-nav navbar-right"},i.a.createElement("li",null,i.a.createElement(E.a,{to:"/"},"Landing")),i.a.createElement("li",null,i.a.createElement(E.a,{to:R},"Home")),i.a.createElement("li",null,i.a.createElement(E.a,{to:"/account"},"Account")),i.a.createElement("li",null,i.a.createElement(W,null))))},G=function(){return i.a.createElement("div",{id:"navbar",className:"navbar-collapse"},i.a.createElement("ul",{className:"nav navbar-nav navbar-right"},i.a.createElement("li",null,i.a.createElement(E.a,{to:"/"},"Landing")),i.a.createElement("li",null,i.a.createElement(E.a,{to:"/signin"},"Sign In"))))},B=Object(g.a)(Object(u.b)("sessionStore"),u.c)(function(e){var t=e.sessionStore;return i.a.createElement("nav",{className:"navbar navbar-default"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"navbar-header"},i.a.createElement("a",{className:"navbar-brand",href:"/"},"Project name")),t.authUser?i.a.createElement(z,null):i.a.createElement(G,null)))}),H=(a(81),function(){return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),i.a.createElement("div",null,i.a.createElement("div",{className:"nested"},i.a.createElement("div",null,"Lorem Ipsum"),i.a.createElement("div",null,"Lorem Ipsum"),i.a.createElement("div",null,"Lorem Ipsum"),i.a.createElement("div",null,"Lorem Ipsum"),i.a.createElement("div",null,"Lorem Ipsum"),i.a.createElement("div",null,"Lorem Ipsum"))),i.a.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),i.a.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),i.a.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),i.a.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))}),J=a(12),q=a(13),K=a(132),Q=(a(83),{username:"",email:"",passwordOne:"",passwordTwo:"",error:null}),V=function(e,t){return function(){return Object(q.a)({},e,t)}},$=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,o=t.email,i=t.passwordOne,l=a.props.history;r.doCreateUserWithEmailAndPassword(o,i).then(function(e){s.doCreateUser(e.user.uid,n,o).then(function(){a.setState(Object(J.a)({},Q)),l.push(R)}).catch(function(e){a.setState(V("error",e))})}).catch(function(e){a.setState(V("error",e))}),e.preventDefault()},a.state=Object(J.a)({},Q),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,r=t.passwordOne,s=t.passwordTwo,o=t.error,l=r!==s||""===r||""===n||""===a;return i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"username",className:"cols-sm-2 control-label"},"Full Name"),i.a.createElement("div",{className:"cols-sm-10"},i.a.createElement("div",{className:"input-group"},i.a.createElement("span",{className:"input-group-addon"},i.a.createElement("i",{className:"fa fa-user fa","aria-hidden":"true"})),i.a.createElement("input",{value:a,onChange:function(t){return e.setState(V("username",t.target.value))},type:"text",placeholder:"Full Name",className:"form-control"})))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"email",className:"cols-sm-2 control-label"},"Email Address"),i.a.createElement("div",{className:"cols-sm-10"},i.a.createElement("div",{className:"input-group"},i.a.createElement("span",{className:"input-group-addon"},i.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})),i.a.createElement("input",{value:n,onChange:function(t){return e.setState(V("email",t.target.value))},type:"email",placeholder:"Email Address",className:"form-control"})))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"passwordOne",className:"cols-sm-2 control-label"},"Password"),i.a.createElement("div",{className:"cols-sm-10"},i.a.createElement("div",{className:"input-group"},i.a.createElement("span",{className:"input-group-addon"},i.a.createElement("i",{className:"fa fa-lock fa-lg","aria-hidden":"true"})),i.a.createElement("input",{value:r,onChange:function(t){return e.setState(V("passwordOne",t.target.value))},type:"password",placeholder:"Password",className:"form-control"})))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"passwordTwo",className:"cols-sm-2 control-label"},"Confirm Password"),i.a.createElement("div",{className:"cols-sm-10"},i.a.createElement("div",{className:"input-group"},i.a.createElement("span",{className:"input-group-addon"},i.a.createElement("i",{className:"fa fa-lock fa-lg","aria-hidden":"true"})),i.a.createElement("input",{value:s,onChange:function(t){return e.setState(V("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm Password",className:"form-control"})))),i.a.createElement("div",{className:"form-group "},i.a.createElement("button",{disabled:l,type:"submit",className:"btn btn-primary btn-lg btn-block login-button"},"Sign Up")),i.a.createElement("div",{className:"form-group "},o&&i.a.createElement("p",null,o.message)))}}]),t}(o.Component),X=function(){return i.a.createElement("div",{id:"register-link",className:"text-left"},"Don't have account?"," ",i.a.createElement(E.a,{to:"/signup"},"Sign Up"))},Y=Object(K.a)(function(e){var t=e.history;return i.a.createElement("div",{className:"row main"},i.a.createElement("div",{className:"main-login main-center"},i.a.createElement("h5",null,"Sign up"),i.a.createElement($,{history:t})))}),Z=a(61),_=a.n(Z),ee=(a(86),function(e,t){return function(){return Object(q.a)({},e,t)}}),te={email:"",error:null},ae=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;r.doPasswordReset(t).then(function(){a.setState(Object(J.a)({},te))}).catch(function(e){a.setState(ee("error",e))}),e.preventDefault()},a.state=Object(J.a)({},te),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.error,r=""===a;return i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("input",{value:this.state.email,onChange:function(t){return e.setState(ee("email",t.target.value))},type:"text",placeholder:"Email Address",className:"form-control"}),i.a.createElement("button",{disabled:r,type:"submit"},"Reset My Password"),n&&i.a.createElement("p",null,n.message))}}]),t}(o.Component),ne=function(){return i.a.createElement("div",{id:"register-link",className:"text-right"},i.a.createElement(E.a,{to:"/pw-forget"},"Forgot Password?"))},re=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"PasswordForget"),i.a.createElement(ae,null))},se=function(e,t){return function(){return Object(q.a)({},e,t)}},oe={email:"",password:"",error:null},ie=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,s=t.password,o=a.props.history;r.doSignInWithEmailAndPassword(n,s).then(function(){a.setState(Object(J.a)({},oe)),o.push(R)}).catch(function(e){a.setState(se("error",e))}),e.preventDefault()},a.state=Object(J.a)({},oe),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,s=""===n||""===a;return i.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},i.a.createElement("h3",{className:"text-center text-info"},"Login"),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"email",className:"text-info"},"Email:"),i.a.createElement("br",null),i.a.createElement("input",{value:a,onChange:function(t){return e.setState(se("email",t.target.value))},type:"email",placeholder:"Email Address",className:"form-control"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"password",className:"text-info"},"Password:"),i.a.createElement("br",null),i.a.createElement("input",{value:n,onChange:function(t){return e.setState(se("password",t.target.value))},type:"password",placeholder:"Password",className:"form-control"})),i.a.createElement("div",{className:"form-group",onClick:this.handleDismiss},i.a.createElement("button",{disabled:s,type:"submit",className:"btn btn-info btn-md"},"Sign In")),r&&i.a.createElement(_.a,{bsStyle:"danger"},i.a.createElement("strong",null,"Error!"),r.message))}}]),t}(o.Component),le=Object(K.a)(function(e){var t=e.history;return i.a.createElement("div",{id:"login"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"login-row",className:"row justify-content-center align-items-center"},i.a.createElement("div",{id:"login-column",className:"login-middle"},i.a.createElement("div",{className:"login-box col-md-12"},i.a.createElement(ie,{history:t}),i.a.createElement("div",{className:"form-group"},i.a.createElement(ne,null),i.a.createElement(X,null)))))))}),ce=function(e){return function(t){var a=function(a){function r(){return Object(m.a)(this,r),Object(p.a)(this,Object(h.a)(r).apply(this,arguments))}return Object(f.a)(r,a),Object(d.a)(r,[{key:"componentDidMount",value:function(){var t=this;n.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/signin")})}},{key:"render",value:function(){return this.props.sessionStore.authUser?i.a.createElement(t,this.props):null}}]),r}(i.a.Component);return Object(g.a)(K.a,Object(u.b)("sessionStore"),u.c)(a)}},ue=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={users:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.userStore;s.onceGetUsers().then(function(t){return e.setUsers(t.val())})}},{key:"render",value:function(){var e=this.props.userStore.users;return i.a.createElement("div",null,i.a.createElement("h1",null,"Home"),i.a.createElement("p",null,"The Home Page is accessible by every signed in user."),!!e&&i.a.createElement(me,{users:e}))}}]),t}(o.Component),me=function(e){var t=e.users;return i.a.createElement("div",null,i.a.createElement("h2",null,"List of Usernames of Users"),i.a.createElement("p",null,"(Saved on Sign Up in Firebase Database)"),Object.keys(t).map(function(e){return i.a.createElement("div",{key:e},t[e].username)}))},de=Object(g.a)(ce(function(e){return!!e}),Object(u.b)("userStore"),u.c)(ue),pe=function(e,t){return function(){return Object(q.a)({},e,t)}},he={passwordOne:"",passwordTwo:"",error:null},fe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;r.doPasswordUpdate(t).then(function(){a.setState(Object(J.a)({},he))}).catch(function(e){a.setState(pe("error",e))}),e.preventDefault()},a.state=Object(J.a)({},he),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.passwordOne,n=t.passwordTwo,r=t.error,s=a!==n||""===a;return i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("input",{value:a,onChange:function(t){return e.setState(pe("passwordOne",t.target.value))},type:"password",placeholder:"New Password"}),i.a.createElement("input",{value:n,onChange:function(t){return e.setState(pe("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm New Password"}),i.a.createElement("button",{disabled:s,type:"submit"},"Reset My Password"),r&&i.a.createElement("p",null,r.message))}}]),t}(o.Component),be=Object(g.a)(ce(function(e){return!!e}),Object(u.b)("sessionStore"),u.c)(function(e){var t=e.sessionStore;return i.a.createElement("div",null,i.a.createElement("h1",null,"Account: ",t.authUser.email),i.a.createElement(ae,null),i.a.createElement(fe,null))}),ve=function(e){var t=function(t){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,t),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.sessionStore;n.auth.onAuthStateChanged(function(t){t?e.setAuthUser(t):e.setAuthUser(null)})}},{key:"render",value:function(){return i.a.createElement(e,this.props)}}]),a}(i.a.Component);return Object(u.b)("sessionStore")(t)}(function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={authUser:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;n.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"render",value:function(){return i.a.createElement(b.a,{basename:"/react-redux-authentication"},i.a.createElement("div",{className:"container"},i.a.createElement(B,{authUser:this.state.authUser}),i.a.createElement("hr",null),i.a.createElement(v.a,{exact:!0,path:"/",component:H}),i.a.createElement(v.a,{exact:!0,path:"/signup",component:Y}),i.a.createElement(v.a,{exact:!0,path:"/signin",component:le}),i.a.createElement(v.a,{exact:!0,path:"/pw-forget",component:re}),i.a.createElement(v.a,{exact:!0,path:R,component:de}),i.a.createElement(v.a,{exact:!0,path:"/account",component:be})))}}]),t}(o.Component)),ge=a(3),Ee=a(19),we=a(20),ye=(a(56),j=function e(t){Object(m.a)(this,e),Object(Ee.a)(this,"authUser",N,this),Object(Ee.a)(this,"setAuthUser",k,this),this.rootStore=t},N=Object(we.a)(j.prototype,"authUser",[ge.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=Object(we.a)(j.prototype,"setAuthUser",[ge.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.authUser=t}}}),j),Oe=(S=function e(t){Object(m.a)(this,e),Object(Ee.a)(this,"users",I,this),Object(Ee.a)(this,"setUsers",L,this),this.rootStore=t},I=Object(we.a)(S.prototype,"users",[ge.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),L=Object(we.a)(S.prototype,"setUsers",[ge.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.users=t}}}),S);Object(ge.e)({enforceActions:!0});var je=new function e(){Object(m.a)(this,e),this.sessionStore=new ye(this),this.userStore=new Oe(this)},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ke(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(i.a.createElement(u.a,je,i.a.createElement(ve,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-redux-authentication",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-redux-authentication","/service-worker.js");Ne?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ke(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ke(e)})}}()},62:function(e,t,a){e.exports=a(127)},67:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){}},[[62,2,1]]]);
//# sourceMappingURL=main.7f09a581.chunk.js.map