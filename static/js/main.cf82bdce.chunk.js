(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var s=a(3),c=a.n(s),i=a(28),l=a.n(i),n=(a(40),a.p,a(41),a(42),a(34)),r=a(8),o=a(2),d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{style:{color:"white"},children:"This is Route not Found Page"})})},u=a(17),h=a(18),j=a(20),m=a(19),b=a(25);b.a.initializeApp({apiKey:"AIzaSyBTy0z4BABxye6IxG8VxFHLhvBtwQDT1iQ",authDomain:"reactblog-824c0.firebaseapp.com",databaseURL:"https://reactblog-824c0-default-rtdb.firebaseio.com",projectId:"reactblog-824c0",storageBucket:"reactblog-824c0.appspot.com",messagingSenderId:"1080666528942",appId:"1:1080666528942:web:005bda112a2e5ab4fb613f",measurementId:"G-RTMGHXN9V7"}),b.a.analytics();var f=b.a,p=a(9),g=a.n(p),x=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={allPosts:[],countPosts:0,allCategory:[]},s.select=c.a.createRef(),s.categ="",s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref("/posts").orderByChild("id").on("value",(function(t){var a=[];t.forEach((function(e){var t=e.val();a.push({id:t.id,title:t.title,description:t.description,content:t.content,user_id:t.user_id,category_id:t.category_id,image:t.image,time:t.time})})),e.setState({allPosts:a,countPosts:a.length})})),f.database().ref("/category").orderByChild("id").on("value",(function(t){var a=[];t.forEach((function(e){var t=e.val();a.push({id:t.id,title:t.title,description:t.description,time:t.time})})),e.setState({allCategory:a})})),g()(".container-fluid").css("position","relative")}},{key:"moredetails",value:function(e){window.location.href="/reactblog/#/viewpost/"+e}},{key:"selectchange",value:function(){var e=this;1==this.select.current.value?f.database().ref("/posts").orderByChild("id").on("value",(function(t){var a=[];t.forEach((function(e){var t=e.val();a.push({id:t.id,title:t.title,description:t.description,content:t.content,user_id:t.user_id,category_id:t.category_id,image:t.image,time:t.time})})),e.setState({allPosts:a,countPosts:a.length})})):f.database().ref("/posts").orderByChild("id").on("value",(function(t){var a=[];t.forEach((function(t){var s=t.val();s.category_id==e.select.current.value&&a.push({id:s.id,title:s.title,description:s.description,content:s.content,user_id:s.user_id,category_id:s.category_id,image:s.image,time:s.time})})),e.setState({allPosts:a,countPosts:a.length})}))}},{key:"render",value:function(){var e=this,t={marginBottom:"50px",color:"black"};return Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h1",{children:"Home"}),Object(o.jsxs)("div",{id:"demo",className:"carousel slide","data-ride":"carousel",style:{marginBottom:"50px"},children:[Object(o.jsxs)("ul",{className:"carousel-indicators",children:[Object(o.jsx)("li",{"data-target":"#demo","data-slide-to":"0",className:"active"}),Object(o.jsx)("li",{"data-target":"#demo","data-slide-to":"1"}),Object(o.jsx)("li",{"data-target":"#demo","data-slide-to":"2"})]}),Object(o.jsxs)("div",{className:"carousel-inner",children:[Object(o.jsx)("div",{className:"carousel-item active",children:Object(o.jsx)("img",{src:"https://www.w3schools.com/bootstrap4/la.jpg",alt:"Los Angeles"})}),Object(o.jsx)("div",{className:"carousel-item",children:Object(o.jsx)("img",{src:"https://www.w3schools.com/bootstrap4/chicago.jpg",alt:"Chicago"})}),Object(o.jsx)("div",{className:"carousel-item",children:Object(o.jsx)("img",{src:"https://www.w3schools.com/bootstrap4/ny.jpg",alt:"New York"})})]}),Object(o.jsx)("a",{className:"carousel-control-prev",href:"#demo","data-slide":"prev",children:Object(o.jsx)("span",{className:"carousel-control-prev-icon"})}),Object(o.jsx)("a",{className:"carousel-control-next",href:"#demo","data-slide":"next",children:Object(o.jsx)("span",{className:"carousel-control-next-icon"})})]}),Object(o.jsxs)("div",{className:"col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 mx-auto",style:{marginLeft:"0",marginRight:"0",paddingLeft:"0",paddingRinght:"0",marginBottom:"20px"},children:[Object(o.jsxs)("p",{className:"text-left",children:["Count: ",this.state.countPosts]}),Object(o.jsx)("select",{className:"custom-select",ref:this.select,onChange:function(){return e.selectchange()},children:this.state.allCategory.map((function(e,t){return Object(o.jsx)("option",{value:e.id,children:e.title})}))})]}),Object(o.jsx)("div",{className:"col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 mx-auto",style:{marginBottom:"50px"},children:this.state.allPosts.map((function(a,s){return Object(o.jsx)("div",{className:"card mx-auto",style:t,children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("img",{className:"img-fluid",src:"https://firebasestorage.googleapis.com/v0/b/reactblog-824c0.appspot.com/o/image%2F"+a.image+"?alt=media"}),Object(o.jsx)("p",{className:"text-left",children:a.title}),Object(o.jsx)("p",{className:"text-left",children:a.description}),e.state.allCategory.forEach((function(t){t.id==a.category_id&&(e.categ=t.title)})),Object(o.jsxs)("p",{className:"text-left",children:["Category: ",e.categ]}),Object(o.jsxs)("p",{className:"text-left",children:["Author: ",a.user_id]}),Object(o.jsxs)("p",{className:"text-left",children:["Created at: ",a.time]}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.moredetails(a.id)},children:"More Details"})]})})}))})]})}}]),a}(s.Component),v=function(){return Object(s.useEffect)((function(){g()(".container-fluid").css("position","fixed")})),Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h2",{children:"This is About Page"}),Object(o.jsxs)("p",{children:[Object(o.jsxs)("strong",{children:[Object(o.jsx)("u",{children:"Contact at:"})," "]}),Object(o.jsx)("a",{href:"mailto:claudiu.vasile@gmail.com?Subject=Hello%20React%20Material",children:"Mail to: claudiu.vasile@gmail.com"})]})]})},O=a(12),y=a(16),N=a.n(y),k=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),a=Object(s.useState)(0),c=Object(O.a)(a,2),i=c[0],l=c[1],n=Object(s.useState)(""),r=Object(O.a)(n,2),d=r[0],u=r[1],h=Object(s.useState)(""),j=Object(O.a)(h,2),m=j[0],b=j[1],p=Object(s.useState)(""),x=Object(O.a)(p,2),v=(x[0],x[1]),y={borderRadius:"25px",backgroundColor:"lightblue"};return Object(s.useEffect)((function(){f.database().ref("/logs").on("value",(function(e){var t=[];e.forEach((function(e){var a=e.val();t.push({id:a.id,status:a.status,message:a.message,agent:a.agent,ip:a.ip,location:a.location,user_id:a.user_id,time:a.time}),l(t.length),fetch("http://ip-api.com/json").then((function(e){return e.json()})).then((function(e){setTimeout((function(){u(e.query),b(e.country+"#"+e.city)}),300)}))}))})),g()(".container-fluid").css("position","fixed")})),Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h2",{children:"This is Login Page"}),Object(o.jsxs)("div",{className:"card col-6 was-validated mx-auto",style:y,children:[Object(o.jsx)("h1",{className:"h3 mb-3 font-weight-normal",style:{color:"blue"},children:"Please sign in"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email address"}),Object(o.jsx)("input",{ref:e,type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0}),Object(o.jsx)("div",{className:"valid-feedback"}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputPassword",className:"sr-only",children:"Password"}),Object(o.jsx)("input",{ref:t,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),Object(o.jsx)("div",{className:"valid-feedback"}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("div",{className:"checkbox mb-3",children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",value:"remember-me",style:y})," Remember me"]})})}),Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",style:{borderRadius:"15px",margin:"0 0 15px 0"},onClick:function(){var a=f.auth();try{a.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(){!function(e){localStorage.setItem("authlogin","true"),localStorage.setItem("user_id",e),window.location.href="#/dashboard";var t=N()().format("DD/MM/YYYY HH:mm:ss"),a=f.database().ref("/logs").push();a=a.toString().slice(-20);var s=f.database().ref("/logs").child(a);s.child("id").set(i+1),s.child("status").set("1"),s.child("message").set("User Login"),s.child("agent").set(navigator.userAgent),s.child("ip").set(d),s.child("location").set(m),s.child("user_id").set(e),s.child("time").set(t)}(e.current.value),window.location.reload(!1)})).catch((function(a){switch(v("Invalid user or password"),setTimeout((function(){v(""),e.current.value="",t.current.value=""}),2e3),a.code){case"auth/user-not-found":case"auth/wrong-password":alert("Incorect User or Password !")}}))}catch(s){alert("Error : ",s)}},children:"Login"})]})]})},C=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),a=Object(s.useRef)(null),c=Object(s.useRef)(null),i=Object(s.useState)([]),l=Object(O.a)(i,2),n=(l[0],l[1]),r=Object(s.useState)(0),d=Object(O.a)(r,2),u=d[0],h=d[1];return Object(s.useEffect)((function(){f.database().ref("/users").orderByChild("email").on("value",(function(e){var t=[];e.forEach((function(e){var a=e.val();t.push({id:a.id,email:a.email,name:a.name,nickname:a.nickname,password:a.password,phone:a.phone,role:a.role,status:a.status,terms:a.terms,time:a.time})})),n(t),h(t.length)})),g()(".container-fluid").css("position","fixed")})),Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h2",{children:"This is Register Page"}),Object(o.jsxs)("div",{className:"card col-6 was-validated mx-auto",style:{borderRadius:"25px",backgroundColor:"lightblue"},children:[Object(o.jsx)("h1",{className:"h3 mb-3 font-weight-normal",style:{color:"blue"},children:"Please sign up"}),Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",className:"sr-only",children:"User Name"}),Object(o.jsx)("input",{ref:e,type:"text",id:"name",className:"form-control",placeholder:"User Name",required:!0,autofocus:!0}),Object(o.jsx)("div",{class:"valid-feedback"}),Object(o.jsx)("div",{class:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{htmlFor:"nickname",className:"sr-only",children:"Nick Name"}),Object(o.jsx)("input",{ref:t,type:"text",id:"nickname",className:"form-control",placeholder:"Nick Name",required:!0,autofocus:!0}),Object(o.jsx)("div",{class:"valid-feedback"}),Object(o.jsx)("div",{class:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email address"}),Object(o.jsx)("input",{ref:a,type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autofocus:!0}),Object(o.jsx)("div",{class:"valid-feedback"}),Object(o.jsx)("div",{class:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputPassword",className:"sr-only",children:"Password"}),Object(o.jsx)("input",{ref:c,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),Object(o.jsx)("div",{class:"valid-feedback"}),Object(o.jsx)("div",{class:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputConfirmPassword",className:"sr-only",children:"Confirm Password"}),Object(o.jsx)("input",{type:"password",id:"inputConfirmPassword",className:"form-control",placeholder:"Confirm Password",required:!0}),Object(o.jsx)("div",{class:"valid-feedback"}),Object(o.jsx)("div",{class:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",style:{borderRadius:"15px",margin:"0 0 15px 0"},onClick:function(){var s=f.auth();try{s.createUserWithEmailAndPassword(a.current.value,c.current.value).then((function(){!function(){var s=N()().format("DD/MM/YYYY HH:mm:ss"),i=e.current.value,l=a.current.value,n=t.current.value,r="0777888999",o="demo",d=f.database().ref("/users").push();d=d.toString().slice(-20);var h=f.database().ref("/users").child(d);h.child("id").set(u+1),h.child("name").set(i),h.child("email").set(l),h.child("nickname").set(n),h.child("phone").set(r),h.child("time").set(s),h.child("role").set(o),h.child("status").set("active"),h.child("terms").set(0),h.child("password").set(c.current.value),window.location.href="/reactblog/"}()})).catch((function(e){switch(e.code){case"auth/email-already-in-use":alert("Email already in use !")}}))}catch(i){alert("Error : ",i)}},children:"Register"})]})]})},w=function(){var e=Object(s.useState)(null),t=Object(O.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h2",{children:"This is Fileupload Page"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&c(e.target.files[0])}}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){f.storage().ref("image/"+a.name).put(a).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){f.storage().ref("images").child(a.name).getDownloadURL().then((function(e){localStorage.setItem("image_url",a.name)})),localStorage.setItem("image_url",a.name),alert("Image was uploaded!")}))},children:"Upload"})]})},P=a(29),S=a.n(P),_=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={allPosts:[],allMyPosts:[],countPosts:0,allCategory:[],categoryID:1,contentck:""},s.title=c.a.createRef(),s.description=c.a.createRef(),s.content=c.a.createRef(),s.select=c.a.createRef(),s.categ="",s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref("/category").orderByChild("id").on("value",(function(t){var a=[];t.forEach((function(e){var t=e.val();a.push({id:t.id,title:t.title,description:t.description,time:t.time})})),e.setState({allCategory:a,countCategory:a.length})})),f.database().ref("/posts").orderByChild("id").on("value",(function(t){var a=[],s=[];t.forEach((function(e){var t=e.val();a.push({id:t.id,title:t.title,description:t.description,content:t.content,user_id:t.user_id,category_id:t.category_id,image:t.image,time:t.time}),t.user_id==localStorage.getItem("user_id")&&s.push({id:t.id,title:t.title,description:t.description,content:t.content,user_id:t.user_id,category_id:t.category_id,image:t.image,time:t.time})})),e.setState({allPosts:a,allMyPosts:s,countPosts:a.length}),e.state.countPosts>2?g()(".container-fluid").css("position","relative"):g()(".container-fluid").css("position","fixed")})),S.a.config={toolbar:"document"}}},{key:"addpost",value:function(){if(this.title.current.value.length>1&&this.description.current.value.length>1){var e=N()().format("DD/MM/YYYY HH:mm:ss"),t=f.database().ref("/posts").push();t=t.toString().slice(-20),setTimeout(function(){var a=f.database().ref("/posts").child(t);a.child("id").set(this.state.countPosts+1),a.child("user_id").set(localStorage.getItem("user_id")),a.child("category_id").set(this.state.categoryID),a.child("title").set(this.title.current.value),a.child("description").set(this.description.current.value),a.child("content").set(localStorage.getItem("contentck")),a.child("image").set(localStorage.getItem("image_url")),a.child("time").set(e)}.bind(this),300),this.setState({countPost:this.countPosts+1}),alert("Add post done!")}else alert("Please fill the Title and Description fields!")}},{key:"selectchange",value:function(){this.setState({categoryID:this.select.current.value})}},{key:"onChangeCK",value:function(e){var t=e.editor.getData();localStorage.setItem("contentck",t)}},{key:"onBlur",value:function(e){console.log("onBlur event called with event info: ",e)}},{key:"afterPaste",value:function(e){console.log("afterPaste event called with event info: ",e)}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h2",{children:"This is Add Posts Page"}),Object(o.jsxs)("div",{className:"col-6",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"title",className:"sr-only",children:"Title"}),Object(o.jsx)("input",{ref:this.title,type:"text",id:"title",className:"form-control",placeholder:"Title",name:"title",required:!0,autoFocus:!0}),Object(o.jsx)("div",{className:"valid-feedback"}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"description",className:"sr-only",children:"Description"}),Object(o.jsx)("input",{ref:this.description,type:"text",id:"description",className:"form-control",placeholder:"Description",name:"description",required:!0,autoFocus:!0}),Object(o.jsx)("div",{className:"valid-feedback"}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("select",{className:"custom-select",ref:this.select,onChange:function(){return e.selectchange()},children:this.state.allCategory.map((function(e,t){return Object(o.jsx)("option",{value:e.id,children:e.title})}))})}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"content",className:"sr-only",children:"Content"}),Object(o.jsx)(S.a,{activeClass:"p10",content:this.state.contentck,events:{blur:this.onBlur,afterPaste:this.afterPaste,change:this.onChangeCK}}),Object(o.jsx)("div",{className:"valid-feedback"}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsx)(w,{}),Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",style:{borderRadius:"15px",margin:"0 0 15px 0"},onClick:function(){return e.addpost()},children:"Add"})]}),this.state.allMyPosts.map((function(t,a){return Object(o.jsxs)("div",{className:"col-6",children:[Object(o.jsx)("img",{className:"img-fluid",src:"https://firebasestorage.googleapis.com/v0/b/reactblog-824c0.appspot.com/o/image%2F"+t.image+"?alt=media"}),Object(o.jsx)("p",{className:"text-left",children:t.title}),Object(o.jsx)("p",{className:"text-left",children:t.description}),e.state.allCategory.forEach((function(a){a.id==t.category_id&&(e.categ=a.title)})),Object(o.jsxs)("p",{className:"text-left",children:["Category: ",e.categ]}),Object(o.jsx)("p",{className:"text-left",children:Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})}),Object(o.jsx)("p",{className:"text-left",children:t.time})]})}))]})}}]),a}(s.Component),R=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={allCategory:[],countCategory:0},s.title=c.a.createRef(),s.description=c.a.createRef(),s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref("/category").orderByChild("id").on("value",(function(t){var a=[];t.forEach((function(e){var t=e.val();a.push({id:t.id,title:t.title,description:t.description,time:t.time})})),e.setState({allCategory:a,countCategory:a.length}),e.state.countCategory>10?g()(".container-fluid").css("position","relative"):g()(".container-fluid").css("position","fixed")}))}},{key:"addCategory",value:function(){if(this.title.current.value.length>1&&this.description.current.value.length>1){var e=N()().format("DD/MM/YYYY HH:mm:ss"),t=f.database().ref("/category").push();t=t.toString().slice(-20),setTimeout(function(){var a=f.database().ref("/category").child(t);a.child("id").set(this.state.countCategory+1),a.child("title").set(this.title.current.value),a.child("description").set(this.description.current.value),a.child("time").set(e)}.bind(this),300),this.setState({countCategory:this.state.countCategory+1}),alert("Add category done!")}else alert("Please fill the Title and Description fields!")}},{key:"render",value:function(){var e=this,t={left:"0"};return Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h2",{children:"This is Add Category Page"}),Object(o.jsxs)("div",{className:"col-6",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"title",className:"sr-only",children:"Title"}),Object(o.jsx)("input",{ref:this.title,type:"text",id:"title",className:"form-control",placeholder:"Title",name:"title",required:!0,autoFocus:!0}),Object(o.jsx)("div",{className:"valid-feedback"}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"description",className:"sr-only",children:"Description"}),Object(o.jsx)("input",{ref:this.description,type:"text",id:"description",className:"form-control",placeholder:"Description",name:"description",required:!0,autoFocus:!0}),Object(o.jsx)("div",{className:"valid-feedback"}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",style:{borderRadius:"15px",margin:"0 0 15px 0"},onClick:function(){return e.addCategory()},children:"Add"})]}),this.state.allCategory.map((function(e,a){return Object(o.jsxs)("div",{className:"col-6",children:[Object(o.jsx)("p",{className:"text-left",style:t,children:e.title}),Object(o.jsx)("p",{className:"text-left",style:t,children:e.description})]})}))]})}}]),a}(s.Component),I=function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(!1),l=Object(O.a)(i,2),n=l[0],r=l[1],d={listStyleType:"none",left:"0"};return Object(s.useEffect)((function(){g()(".container-fluid").css("position","fixed")})),Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h2",{children:"This is Dashboard Page"}),Object(o.jsx)("div",{style:{height:"50px",left:"0",top:"95px",paddingRight:"30px",marginLeft:"-30px",position:"absolute",backgroundColor:"lightblue",color:"black",width:"193px"},children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("ul",{className:"mx-auto",style:d,children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/dashboard","data-toggle":"collapse","data-target":"#sidebar",children:"Menu"})})})})}),Object(o.jsx)("div",{id:"sidebar",className:"collapse",style:{height:"150px",left:"0",top:"145px",paddingRight:"58px",position:"absolute",backgroundColor:"lightblue",color:"black"},children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("ul",{className:"mx-auto",style:d,children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/dashboard",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/dashboard",onClick:function(){c(!0),r(!1)},children:"Posts"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/dashboard",onClick:function(){c(!1),r(!0)},children:"Category"})})]})})}),Object(o.jsxs)("div",{className:"content",children:[a&&Object(o.jsx)(_,{}),n&&Object(o.jsx)(R,{})]})]})},E=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={allPosts:[],countPosts:0,id:0,allCategory:[]},s.categ="",s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({id:this.props.match.params.id}),setTimeout(function(){var e=this;f.database().ref("/posts").orderByChild("id").on("value",(function(t){var a=[];t.forEach((function(t){var s=t.val();s.id==e.state.id&&a.push({id:s.id,title:s.title,description:s.description,content:s.content,user_id:s.user_id,category_id:s.category_id,image:s.image,time:s.time})})),e.setState({allPosts:a,countPosts:a.length}),1==e.state.countPosts?g()(".container-fluid").css("position","relative"):g()(".container-fluid").css("position","fixed")}))}.bind(this),300),f.database().ref("/category").orderByChild("id").on("value",(function(t){var a=[];t.forEach((function(e){var t=e.val();a.push({id:t.id,title:t.title,description:t.description,time:t.time})})),e.setState({allCategory:a})}))}},{key:"render",value:function(){var e=this,t={left:"0"};return Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#282c34",color:"white"},children:[Object(o.jsx)("h2",{children:"This is Viewpost Page"}),Object(o.jsx)("p",{children:this.state.id}),this.state.allPosts.map((function(a,s){return Object(o.jsxs)("div",{className:"col-6",children:[Object(o.jsx)("img",{className:"img-fluid",src:"https://firebasestorage.googleapis.com/v0/b/reactblog-824c0.appspot.com/o/image%2F"+a.image+"?alt=media"}),Object(o.jsx)("p",{className:"text-left",style:t,children:a.title}),Object(o.jsx)("p",{className:"text-left",style:t,children:a.description}),Object(o.jsx)("p",{className:"text-left",style:t,children:Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:a.content}})}),e.state.allCategory.forEach((function(t){t.id==a.category_id&&(e.categ=t.title)})),Object(o.jsxs)("p",{className:"text-left",children:["Category: ",e.categ]}),Object(o.jsxs)("p",{className:"text-left",style:t,children:["Author: ",a.user_id]}),Object(o.jsxs)("p",{className:"text-left",style:t,children:["Created at: ",a.time]})]})}))]})}}]),a}(s.Component);var D=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#/",children:"React Blog"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:["false"===localStorage.getItem("authlogin")&&Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/",children:"Home"})}),"true"===localStorage.getItem("authlogin")&&Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/dashboard",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/about",children:"About"})})]}),Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:["false"===localStorage.getItem("authlogin")&&Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/register",children:"Register"})}),"false"===localStorage.getItem("authlogin")&&Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#/login",children:"Login"})}),"true"===localStorage.getItem("authlogin")&&Object(o.jsxs)("li",{className:"nav-item dropdown",children:[Object(o.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:localStorage.getItem("user_id")}),Object(o.jsx)("div",{className:"dropdown-menu bg-dark","aria-labelledby":"navbarDropdownMenuLink",children:Object(o.jsx)("a",{className:"nav-link bg-dark",href:"#/logout",children:"Logout"})})]})]})]})]})}),Object(o.jsx)(n.a,{basename:"/",children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",component:x}),Object(o.jsx)(r.a,{exact:!0,path:"/about",component:v}),Object(o.jsx)(r.a,{exact:!0,path:"/login",component:k}),Object(o.jsx)(r.a,{exact:!0,path:"/register",component:C}),Object(o.jsx)(r.a,{exact:!0,path:"/dashboard",component:I}),Object(o.jsx)(r.a,{exact:!0,path:"/viewpost/:id",component:E}),Object(o.jsx)(r.a,{exact:!0,path:"/logout",component:function(){return localStorage.setItem("authlogin","false"),window.location.href="/reactblog/",Object(o.jsx)("div",{})}}),Object(o.jsx)(r.a,{path:"/",component:d})]})}),Object(o.jsx)("div",{className:"container-fluid",style:{height:"50px",position:"fixed",bottom:"0"},children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"mx-auto",style:{color:"white"},children:"\xa9 2021 - React Blog"})})})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),i(e),l(e)}))};a(57),a(58);l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),T()}},[[59,1,2]]]);
//# sourceMappingURL=main.cf82bdce.chunk.js.map