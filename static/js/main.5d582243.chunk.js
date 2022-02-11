(this.webpackJsonptodo16v2=this.webpackJsonptodo16v2||[]).push([[0],{121:function(t,e,n){},122:function(t,e,n){},147:function(t,e,n){"use strict";n.r(e);var a,i,o=n(0),s=n.n(o),c=n(32),r=n.n(c),d=(n(121),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),o(t),s(t)}))}),l=(n(122),n(19)),u=n(24),j=n(95),b=n.n(j).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"9776f825-db80-4051-9f58-6c0d39788ac9"}}),f=function(){return b.get("todo-lists")},h=function(t){return b.post("todo-lists",{title:t})},O=function(t){return b.delete("todo-lists/".concat(t))},p=function(t,e){return b.put("todo-lists/".concat(t),{title:e})},m=function(t){return b.get("todo-lists/".concat(t,"/tasks"))},g=function(t,e){return b.delete("todo-lists/".concat(t,"/tasks/").concat(e))},x=function(t,e){return b.post("todo-lists/".concat(t,"/tasks"),{title:e})},v=function(t,e,n){return b.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},k=function(t){return b.post("auth/login",t)},C=function(){return b.get("auth/me")},T=function(){return b.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var y=function(t,e){t.messages.length?e(z({error:t.messages[0]})):e(z({error:"Some error occurred"})),e(D({status:"failed"}))},I=function(t,e){e(z({error:t.message?t.message:"Some error occurred"})),e(D({status:"failed"}))},A=n(34),w=Object(A.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),S=w.reducer,F=w.actions.setIsLoggedInAC,L=Object(A.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppErrorAC:function(t,e){t.error=e.payload.error},setAppStatusAC:function(t,e){t.status=e.payload.status},setIsInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),E=L.reducer,P=L.actions,z=P.setAppErrorAC,D=P.setAppStatusAC,N=P.setIsInitializedAC,M=Object(A.b)({name:"todolist",initialState:[],reducers:{removeTodolistAC:function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))},addTodolistAC:function(t,e){t.unshift(Object(u.a)(Object(u.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var n=t.findIndex((function(t){return t.id===e.payload.id}));t[n].title=e.payload.title},changeTodolistFilterAC:function(t,e){var n=t.findIndex((function(t){return t.id===e.payload.id}));t[n].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var n=t.findIndex((function(t){return t.id===e.payload.id}));t[n].entityStatus=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),R=M.reducer,B=M.actions,q=B.removeTodolistAC,H=B.changeTodolistFilterAC,U=B.changeTodolistTitleAC,Z=B.addTodolistAC,J=B.changeTodolistEntityStatusAC,K=B.setTodolistsAC,_=n(5),V=Object(A.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var n=t[e.payload.todolistId],a=n.findIndex((function(t){return t.id===e.payload.taskId}));a>-1&&n.splice(a,1)},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var n=t[e.payload.todolistId],a=n.findIndex((function(t){return t.id===e.payload.taskId}));a>-1&&(n[a]=Object(u.a)(Object(u.a)({},n[a]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:function(t){t.addCase(Z,(function(t,e){return Object(u.a)(Object(u.a)({},t),{},Object(_.a)({},e.payload.todolist.id,[]))})),t.addCase(q,(function(t,e){delete t[e.payload.id]})),t.addCase(K,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}}),Y=V.reducer,$=V.actions,G=$.setTasksAC,Q=$.addTaskAC,W=$.updateTaskAC,X=$.removeTaskAC,tt=function(t,e,n){return function(a,i){var o=i().tasks[n].find((function(e){return e.id===t}));if(o){var s=Object(u.a)({deadline:o.deadline,description:o.description,priority:o.priority,startDate:o.startDate,title:o.title,status:o.status},e);v(n,t,s).then((function(i){if(0===i.data.resultCode){var o=W({taskId:t,model:e,todolistId:n});a(o)}else y(i.data,a)})).catch((function(t){I(t,a)}))}else console.warn("task not found in the state")}},et=n(201),nt=n(210),at=n(13),it=n(194),ot=n(202),st=n(190),ct=n(1),rt=s.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var i=Object(o.useState)(""),s=Object(at.a)(i,2),c=s[0],r=s[1],d=Object(o.useState)(null),l=Object(at.a)(d,2),u=l[0],j=l[1],b=function(){""!==c.trim()?(e(c),r("")):j("Title is required")};return Object(ct.jsxs)("div",{children:[Object(ct.jsx)(it.a,{variant:"outlined",disabled:a,error:!!u,value:c,onChange:function(t){r(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(ct.jsx)(ot.a,{color:"primary",onClick:b,disabled:a,children:Object(ct.jsx)(st.a,{})})]})})),dt=n(102),lt=s.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),n=Object(at.a)(e,2),a=n[0],i=n[1],s=Object(o.useState)(t.value),c=Object(at.a)(s,2),r=c[0],d=c[1];return a?Object(ct.jsx)(it.a,{value:r,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(r)}}):Object(ct.jsx)("span",{onDoubleClick:function(){i(!0),d(t.value)},children:t.value})})),ut=n(203),jt=n(191),bt=n(196),ft=s.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(o.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(ct.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(ct.jsx)(bt.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(ct.jsx)(lt,{value:t.task.title,onChange:i}),Object(ct.jsx)(ot.a,{onClick:e,children:Object(ct.jsx)(jt.a,{})})]},t.task.id)})),ht=s.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(dt.a)(t,["demo"]);console.log("Todolist called");var s=Object(l.b)();Object(o.useEffect)((function(){if(!n){var t,e=(t=i.todolist.id,function(e){e(D({status:"loading"})),m(t).then((function(n){var a=n.data.items;e(G({tasks:a,todolistId:t})),e(D({status:"succeeded"}))}))});s(e)}}),[]);var c=Object(o.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),r=Object(o.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),d=Object(o.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(o.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(o.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(ct.jsxs)("div",{children:[Object(ct.jsxs)("h3",{children:[Object(ct.jsx)(lt,{value:i.todolist.title,onChange:r}),Object(ct.jsx)(ot.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(ct.jsx)(jt.a,{})})]}),Object(ct.jsx)(rt,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),Object(ct.jsx)("div",{children:b.map((function(t){return Object(ct.jsx)(ft,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(ct.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(ct.jsx)(ut.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:d,color:"inherit",children:"All"}),Object(ct.jsx)(ut.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(ct.jsx)(ut.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),Ot=n(14),pt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(l.c)((function(t){return t.todolists})),i=Object(l.c)((function(t){return t.tasks})),s=Object(l.c)((function(t){return t.auth.isLoggedIn})),c=Object(l.b)();Object(o.useEffect)((function(){if(!n&&s){var t=function(t){t(D({status:"loading"})),f().then((function(e){t(K({todolists:e.data})),t(D({status:"succeeded"}))})).catch((function(e){I(e,t)}))};c(t)}}),[c,n,s]);var r=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){g(e,t).then((function(a){var i=X({taskId:t,todolistId:e});n(i)}))}}(t,e);c(n)}),[c]),d=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){n(D({status:"loading"})),x(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,a=Q({task:e});n(a),n(D({status:"succeeded"}))}else y(t.data,n)})).catch((function(t){I(t,n)}))}}(t,e);c(n)}),[c]),u=Object(o.useCallback)((function(t,e,n){var a=tt(t,{status:e},n);c(a)}),[c]),j=Object(o.useCallback)((function(t,e,n){var a=tt(t,{title:e},n);c(a)}),[c]),b=Object(o.useCallback)((function(t,e){var n=H({id:e,filter:t});c(n)}),[c]),m=Object(o.useCallback)((function(t){var e,n=(e=t,function(t){t(D({status:"loading"})),t(J({id:e,status:"loading"})),O(e).then((function(n){t(q({id:e})),t(D({status:"succeeded"}))})).catch((function(e){I(e,t)}))});c(n)}),[c]),v=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){p(t,e).then((function(a){n(U({id:t,title:e}))})).catch((function(t){I(t,n)}))}}(t,e);c(n)}),[c]),k=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(D({status:"loading"})),h(t).then((function(t){e(Z({todolist:t.data.data.item})),e(D({status:"succeeded"}))})).catch((function(t){I(t,e)}))}}(t);c(e)}),[c]);return s?Object(ct.jsxs)(ct.Fragment,{children:[Object(ct.jsx)(et.a,{container:!0,style:{padding:"20px"},children:Object(ct.jsx)(rt,{addItem:k})}),Object(ct.jsx)(et.a,{container:!0,spacing:3,children:a.map((function(t){var e=i[t.id];return Object(ct.jsx)(et.a,{item:!0,children:Object(ct.jsx)(nt.a,{style:{padding:"10px"},children:Object(ct.jsx)(ht,{todolist:t,tasks:e,removeTask:r,changeFilter:b,addTask:d,changeTaskStatus:u,removeTodolist:m,changeTaskTitle:j,changeTodolistTitle:v,demo:n})})},t.id)}))})]}):Object(ct.jsx)(Ot.a,{to:"/login"})},mt=n(206),gt=n(207),xt=n(204),vt=n(209),kt=n(205),Ct=n(208),Tt=n(193),yt=n(198),It=n(197),At=s.a.forwardRef((function(t,e){return Object(ct.jsx)(It.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function wt(){var t=Object(l.c)((function(t){return t.app.error})),e=Object(l.b)(),n=function(t,n){"clickaway"!==n&&e(z({error:null}))};return Object(ct.jsx)(yt.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(ct.jsx)(At,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var St=n(199),Ft=n(212),Lt=n(211),Et=n(188),Pt=n(101),zt=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.auth.isLoggedIn})),n=Object(Pt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<4&&(e.password="length less than 3 sym"):e.password="Required",e},onSubmit:function(e){var a;t((a=e,function(t){t(D({status:"loading"})),k(a).then((function(e){0===e.data.resultCode&&(t(F({value:!0})),t(D({status:"succeeded"})))})).catch((function(e){I(e,t)}))})),n.resetForm()}});return e?Object(ct.jsx)(Ot.a,{to:"/"}):Object(ct.jsx)(et.a,{container:!0,justifyContent:"center",children:Object(ct.jsx)(et.a,{item:!0,justifyContent:"center",children:Object(ct.jsxs)(St.a,{children:[Object(ct.jsxs)(Et.a,{children:[Object(ct.jsxs)("p",{children:["To log in get registered",Object(ct.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer",children:" here"})]}),Object(ct.jsx)("p",{children:"or use common test account credentials:"}),Object(ct.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(ct.jsx)("p",{children:"Password: free"})]}),Object(ct.jsx)("form",{onSubmit:n.handleSubmit,children:Object(ct.jsxs)(Lt.a,{children:[Object(ct.jsx)(it.a,Object(u.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?Object(ct.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(ct.jsx)(it.a,Object(u.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?Object(ct.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(ct.jsx)(Ft.a,{label:"Remember me",control:Object(ct.jsx)(bt.a,{name:"rememberMe",onChange:n.handleChange,checked:n.values.rememberMe})}),Object(ct.jsx)(ut.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},Dt=n(45),Nt=function(){return Object(ct.jsxs)("div",{style:{textAlign:"center"},children:[Object(ct.jsx)("h1",{children:"Page not found"}),Object(ct.jsx)(Dt.b,{to:"/",children:"Back to main page"})]})};var Mt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(l.b)();Object(o.useEffect)((function(){a((function(t){C().then((function(e){0===e.data.resultCode&&t(F({value:!0}))})).finally((function(){t(N({isInitialized:!0}))}))}))}),[a]);var i=Object(l.c)((function(t){return t.app.status})),s=Object(l.c)((function(t){return t.app.isInitialized})),c=Object(l.c)((function(t){return t.auth.isLoggedIn}));return s?Object(ct.jsxs)("div",{className:"App",children:[Object(ct.jsx)(wt,{}),Object(ct.jsxs)(mt.a,{position:"static",children:[Object(ct.jsxs)(gt.a,{children:[Object(ct.jsx)(ot.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(ct.jsx)(Tt.a,{})}),Object(ct.jsx)(xt.a,{variant:"h6",children:"News"}),c&&Object(ct.jsx)(ut.a,{color:"inherit",onClick:function(){a((function(t){t(D({status:"loading"})),T().then((function(e){0===e.data.resultCode?(t(F({value:!1})),t(D({status:"succeeded"}))):y(e.data,t)})).catch((function(e){I(e,t)}))}))},children:"Logout"})]}),"loading"===i&&Object(ct.jsx)(Ct.a,{})]}),Object(ct.jsx)(vt.a,{fixed:!0,children:Object(ct.jsxs)(Ot.d,{children:[Object(ct.jsx)(Ot.b,{path:"/",element:Object(ct.jsx)(pt,{demo:n})}),Object(ct.jsx)(Ot.b,{path:"/login",element:Object(ct.jsx)(zt,{})}),Object(ct.jsx)(Ot.b,{path:"/404",element:Object(ct.jsx)(Nt,{})}),Object(ct.jsx)(Ot.b,{path:"*",element:Object(ct.jsx)(Ot.a,{to:"/404"})})]})})]}):Object(ct.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(ct.jsx)(kt.a,{})})},Rt=n(100),Bt=n(99),qt=Object(Rt.a)({tasks:Y,todolists:R,app:E,auth:S}),Ht=Object(A.a)({reducer:qt,middleware:function(t){return t().prepend(Bt.a)}});r.a.render(Object(ct.jsx)(s.a.StrictMode,{children:Object(ct.jsx)(Dt.a,{children:Object(ct.jsx)(l.a,{store:Ht,children:Object(ct.jsx)(Mt,{})})})}),document.getElementById("root")),d()}},[[147,1,2]]]);
//# sourceMappingURL=main.5d582243.chunk.js.map