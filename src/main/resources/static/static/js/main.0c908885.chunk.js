(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(27),s=a.n(n),o=(a(49),a(50),a(4)),i=a(5),l=a(7),j=a(6),d=a(9),p=a(0),u=function(){return Object(p.jsx)(c.a.Fragment,{children:Object(p.jsx)(d.b,{to:"/addProject",className:"btn btn-lg btn-info",children:"Create a Project"})})},h=a(2),m=a(8),b=a.n(m),O=a(17),v=a(14),f=a.n(v),x="GET_ERRORS",g="GET_PROJECTS",y="GET_PROJECT",N="DELETE_PROJECT",k="GET_BACKLOG",C="GET_PROJECT_TASK",w="DELETE_PROJECT_TASK",S="SET_CURRENT_USER",D=function(e,t){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/api/project",e);case 3:window.location.href="/dashboard",a({type:x,payload:{}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),a({type:x,payload:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.project;return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-2",children:Object(p.jsx)("span",{className:"mx-auto",children:e.projectIdentifier})}),Object(p.jsxs)("div",{className:"col-lg-6 col-md-4 col-8",children:[Object(p.jsx)("h3",{children:e.projectName}),Object(p.jsx)("p",{children:e.description})]}),Object(p.jsx)("div",{className:"col-md-4 d-none d-lg-block",children:Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsx)(d.b,{to:"/projectBoard/".concat(e.projectIdentifier),children:Object(p.jsx)("li",{className:"list-group-item board",children:Object(p.jsx)("i",{className:"fa fa-flag-checkered pr-1",children:"Project Board "})})}),Object(p.jsx)(d.b,{to:"/updateProject/".concat(e.projectIdentifier),children:Object(p.jsx)("li",{className:"list-group-item update",children:Object(p.jsx)("i",{className:"fa fa-edit pr-1",children:"Update Project Info"})})}),Object(p.jsx)("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier),children:Object(p.jsx)("i",{className:"fa fa-minus-circle pr-1",children:"Delete Project"})})]})})]})})})}}]),a}(r.Component),I=Object(h.b)(null,{deleteProject:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.delete("http://localhost:8080/api/project/".concat(e));case 2:a({type:N,payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(P),T=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("This is calling"),this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return Object(p.jsx)("div",{className:"projects",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("h1",{className:"display-4 text-center",children:"Projects"}),Object(p.jsx)("br",{}),Object(p.jsx)(u,{}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{}),e.map((function(e){return Object(p.jsx)(I,{project:e},e.id)}))]})})})})}}]),a}(r.Component),_=Object(h.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/project/all");case 3:a=e.sent,console.log(a),t({type:g,payload:a.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t({type:g,payload:e.t0.response.data});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})(T),E=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},R=a(28),B=function(){return function(e){localStorage.removeItem("jwtToken"),E(!1),e({type:S,payload:{}})}},U=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:[Object(p.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{className:"nav-link",href:"/dashboard",children:"Dashboard"})})}),Object(p.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link ",to:"/dashboard",children:Object(p.jsx)("i",{className:"fas fa-user-circle mr-1",children:r.fullname})})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this),children:"Logout"})})]})]}),n=Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:Object(p.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",to:"/register",children:"Sign Up"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",to:"/login",children:"Login"})})]})});return e=a&&r?c:n,Object(p.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("a",{className:"navbar-brand",href:"/",children:"Personal Project Management Tool"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#mobile-nav",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),e]})})}}]),a}(r.Component),A=Object(h.b)((function(e){return{security:e.security}}),{logout:B})(U),M=(a(77),a(10)),q=a(15),G=a(12),L=a(13),W=a.n(L),J=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onChange=e.onChange.bind(Object(G.a)(e)),e.onSubmit=e.onSubmit.bind(Object(G.a)(e)),e.state={projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){console.log(e),e.error&&(console.log(e.error),this.setState({errors:e.error}))}},{key:"onChange",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"register",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h5",{className:"display-4 text-center",children:"Create Project form"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:W()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:W()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("textarea",{className:W()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(p.jsx)("h6",{children:"Start Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:this.state.startDate,onChange:this.onChange})}),Object(p.jsx)("h6",{children:"Estimated End Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:this.state.endDate,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),F=Object(h.b)((function(e){return{error:e.errors}}),{createProject:D})(J),H=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority?(t="bg-danger text-light",e="HIGH"):2===a.priority?(t="bg-warning text-light",e="MEDIUM"):(t="bg-info text-light",e="LOW"),Object(p.jsxs)("div",{className:"card mb-1 bg-light",children:[Object(p.jsxs)("div",{className:"card-header text-primary  ".concat(t),children:["ID: ",a.projectSequence," -- Priority:"," ".concat(e," "),a.priority]}),Object(p.jsxs)("div",{className:"card-body bg-light",children:[Object(p.jsx)("h5",{className:"card-title",children:a.summary}),Object(p.jsx)("p",{className:"card-text text-truncate ",children:a.acceptanceCriteria}),Object(p.jsx)(d.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary",children:"View / Update"}),Object(p.jsx)("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence),children:"Delete"})]})]})}}]),a}(r.Component),X=Object(h.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting project task ".concat(t,", this action cannot be undone"))){a.next=5;break}return a.next=3,f.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:a.sent,r({type:w,payload:t});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(H),K=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return Object(p.jsx)(X,{project_task:e},e.id)})),t=[],a=[],r=[],c=0;c<e.length;c++)console.log(e[c].props.project_task.status),"TO_DO"==e[c].props.project_task.status&&t.push(e[c]),"IN_PROGRESS"==e[c].props.project_task.status&&a.push(e[c]),"DONE"==e[c].props.project_task.status&&r.push(e[c]);return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("div",{className:"card text-center mb-2",children:Object(p.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(p.jsx)("h3",{children:"TO DO"})})}),t]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("div",{className:"card text-center mb-2",children:Object(p.jsx)("div",{className:"card-header bg-primary text-white",children:Object(p.jsx)("h3",{children:"In Progress"})})}),a]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("div",{className:"card text-center mb-2",children:Object(p.jsx)("div",{className:"card-header bg-success text-white",children:Object(p.jsx)("h3",{children:"Done"})})}),r]})]})})}}]),a}(r.Component),V=K,z=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.length<1?e.projectNotFound?Object(p.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectNotFound}):e.projectIdentifier?Object(p.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectIdentifier}):Object(p.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:"No project task on this board"}):Object(p.jsx)(V,{project_tasks_prop:t})}(this.state.errors,a),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(d.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3",children:Object(p.jsx)("i",{className:"fas fa-plus-circle",children:" Create Project Task"})}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{}),e]})}}]),a}(r.Component),Y=Object(h.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:k,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(z),Q=a(23),Z=a(43),$={},ee=a(11),te={projects:[],project:{}},ae={project_tasks:[],project_task:{}},re={user:{},validToken:!1},ce=function(e){return!!e},ne=Object(Q.b)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type===x?t.payload:e},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(ee.a)(Object(ee.a)({},e),{},{projects:t.payload});case y:return Object(ee.a)(Object(ee.a)({},e),{},{project:t.payload});case N:return Object(ee.a)(Object(ee.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(ee.a)(Object(ee.a)({},e),{},{project_tasks:t.payload});case C:return Object(ee.a)(Object(ee.a)({},e),{},{project_task:t.payload});case w:return Object(ee.a)(Object(ee.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;return t.type===S?Object(ee.a)(Object(ee.a)({},e),{},{validToken:ce(t.payload),user:t.payload}):e}}),se=[Z.a],oe=(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(Q.d)(ne,{},Object(Q.c)(Q.a.apply(void 0,se)))),ie=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onChange=e.onChange.bind(Object(G.a)(e)),e.onSubmit=e.onSubmit.bind(Object(G.a)(e)),e.state={id:"",projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.project,a=t.id,r=t.projectName,c=t.projectIdentifier,n=t.description,s=t.startDate,o=t.endDate;this.setState({id:a,projectName:r,projectIdentifier:c,description:n,startDate:s,endDate:o}),console.log(e.error),e.error&&(console.log(e.error),this.setState({errors:e.error}))}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e)}},{key:"onChange",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"project",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h5",{className:"display-4 text-center",children:"Update Project form"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:W()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:W()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0}),e.projectIdentifier&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("textarea",{className:W()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",onChange:this.onChange,value:this.state.description}),e.description&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(p.jsx)("h6",{children:"Start Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"startDate",onChange:this.onChange,value:this.state.startDate})}),Object(p.jsx)("h6",{children:"Estimated End Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"endDate",onChange:this.onChange,value:this.state.endDate})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),le=Object(h.b)((function(e){return{project:e.project.project,error:e.errors}}),{getProject:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/project/".concat(e));case 3:r=t.sent,a({type:y,payload:r.data}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),a({type:g,payload:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},createProject:D})(ie),je=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var r;Object(o.a)(this,a);var c=(r=t.call(this,e)).props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:c,errors:{}},r.onChange=r.onChange.bind(Object(G.a)(r)),r.onSubmit=r.onSubmit.bind(Object(G.a)(r)),r}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return Object(p.jsx)("div",{className:"add-PBI",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)(d.b,{to:"/projectBoard/".concat(e),className:"btn btn-light",children:"Back to Project Board"}),Object(p.jsx)("h4",{className:"display-4 text-center",children:"Add Project Task"}),Object(p.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:W()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&Object(p.jsx)("div",{className:"invalid-feedback",children:t.summary})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(p.jsx)("h6",{children:"Due Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(p.jsx)("option",{value:0,children:"Select Priority"}),Object(p.jsx)("option",{value:1,children:"High"}),Object(p.jsx)("option",{value:2,children:"Medium"}),Object(p.jsx)("option",{value:3,children:"Low"})]})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(p.jsx)("option",{value:"",children:"Select Status"}),Object(p.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(p.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(p.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),de=Object(h.b)(null,{addProjectTask:function(e,t,a){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/backlog/".concat(e),t);case 3:window.location.href="/projectBoard/".concat(e),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(je),pe=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var r;Object(o.a)(this,a);var c=(r=t.call(this,e)).props.match.params.id;return r.state={id:"",summary:"",projectSequence:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:c,errors:{}},r.onChange=r.onChange.bind(Object(G.a)(r)),r.onSubmit=r.onSubmit.bind(Object(G.a)(r)),r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a)}},{key:"componentWillReceiveProps",value:function(e){console.log(e.errors),e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.summary,c=t.projectSequence,n=t.acceptanceCriteria,s=t.status,o=t.priority,i=t.dueDate,l=t.projectIdentifier;this.setState({id:a,summary:r,projectSequence:c,acceptanceCriteria:n,status:s,priority:o,dueDate:i,projectIdentifier:l})}},{key:"onChange",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,projectSequence:this.state.projectSequence};console.log(t),this.props.updateProjectTask(this.state.projectIdentifier,t)}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"add-PBI",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)(d.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light",children:"Back to Project Board"}),Object(p.jsx)("h4",{className:"display-4 text-center",children:"Update Project Task"}),Object(p.jsxs)("p",{className:"lead text-center",children:["Project Name: ",this.state.projectIdentifier," + Project Code:"," ",this.state.projectSequence]}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:W()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.summary})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(p.jsx)("h6",{children:"Due Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(p.jsx)("option",{value:0,children:"Select Priority"}),Object(p.jsx)("option",{value:1,children:"High"}),Object(p.jsx)("option",{value:2,children:"Medium"}),Object(p.jsx)("option",{value:3,children:"Low"})]})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(p.jsx)("option",{value:"",children:"Select Status"}),Object(p.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(p.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(p.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),ue=Object(h.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){var c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:c=a.sent,r({type:C,payload:c.data}),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),window.location.href="/dashboard",r({type:x,payload:a.t0.response.data});case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},updateProjectTask:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.patch("/api/backlog/".concat(e),t);case 3:window.location.href="/projectBoard/".concat(e),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(pe),he=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&(window.location.href="/dashboard")}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"landing",children:Object(p.jsx)("div",{className:"light-overlay landing-inner text-dark",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12 text-center",children:[Object(p.jsx)("h1",{className:"display-3 mb-4",children:"Personal Project Management Tool"}),Object(p.jsx)("p",{className:"lead",children:"Create your account to join active projects or start your own"}),Object(p.jsx)("hr",{}),Object(p.jsx)(d.b,{className:"btn btn-lg btn-primary mr-2",to:"/register",children:"Sign Up"}),Object(p.jsx)(d.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2",children:"Login"})]})})})})})}}]),a}(r.Component),me=Object(h.b)((function(e){return{security:e.security}}))(he),be=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",fullname:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(G.a)(e)),e.onSubmit=e.onSubmit.bind(Object(G.a)(e)),e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullname:this.state.fullname,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t)}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"register",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(p.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:W()("form-control form-control-lg",{"is-invalid":e.fullname}),placeholder:"Full Name",name:"fullname",value:this.state.fullname,onChange:this.onChange}),e.fullname&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.fullname})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:W()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address {Username}",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"password",className:W()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"password",className:W()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.confirmPassword})]}),Object(p.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}]),a}(r.Component),Oe=Object(h.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/api/users/register",e);case 3:window.location.href="/login",a({type:x,payload:{}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),a({type:x,payload:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(be),ve=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(G.a)(e)),e.onSubmit=e.onSubmit.bind(Object(G.a)(e)),e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors}),console.log(e.security.validToken),e.security.validToken&&(window.location.href="/dashboard")}},{key:"componentDidMount",value:function(){this.props.security.validToken&&(window.location.href="/dashboard")}},{key:"onChange",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"login",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"email",className:W()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"password",className:W()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(p.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}]),a}(r.Component),fe=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){var r,c,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/api/users/login",e);case 3:r=t.sent,console.log(r),c=r.data.token,localStorage.setItem("jwtToken",c),E(c),n=Object(R.a)(c),a({type:S,payload:n}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),a({type:x,payload:t.t0.response.data});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})(ve),xe=a(44),ge=["component","security"],ye=Object(h.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(xe.a)(e,ge);return Object(p.jsx)(M.b,Object(ee.a)(Object(ee.a)({},r),{},{render:function(e){return!0===a.validToken?Object(p.jsx)(t,Object(ee.a)({},e)):Object(p.jsx)(M.a,{to:"login"})}}))})),Ne=localStorage.jwtToken;if(Ne){E(Ne);var ke=Object(R.a)(Ne);oe.dispatch({type:S,payload:ke});var Ce=Date.now()/1e3;ke.exp<Ce&&(oe.dispatch(B()),window.location.href="/")}var we=function(){return Object(p.jsx)(h.a,{store:oe,children:Object(p.jsx)(d.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(A,{}),Object(p.jsx)(M.b,{exact:!0,path:"/",component:me}),Object(p.jsx)(M.b,{exact:!0,path:"/register",component:Oe}),Object(p.jsx)(M.b,{exact:!0,path:"/login",component:fe}),Object(p.jsxs)(M.d,{children:[Object(p.jsx)(ye,{exact:!0,path:"/dashboard",component:_}),Object(p.jsx)(ye,{exact:!0,path:"/addProject",component:F}),Object(p.jsx)(ye,{exact:!0,path:"/updateProject/:id",component:le}),Object(p.jsx)(ye,{exact:!0,path:"/projectBoard/:id",component:Y}),Object(p.jsx)(ye,{exact:!0,path:"/addProjectTask/:id",component:de}),Object(p.jsx)(ye,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:ue})]})]})})})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(we,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.0c908885.chunk.js.map