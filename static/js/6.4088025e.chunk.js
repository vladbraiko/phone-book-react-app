(this["webpackJsonpphone-book-ls"]=this["webpackJsonpphone-book-ls"]||[]).push([[6],{86:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(29),r=t(30),o=t(32),s=t(31),i=t(0),m=t.n(i),u=t(7),c=t(19),p={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},h=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=a.call.apply(a,[this].concat(o))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,l=t.name,r=t.value;e.setState(Object(n.a)({},l,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return m.a.createElement("div",null,m.a.createElement("h1",null,"Sign Up"),m.a.createElement("form",{onSubmit:this.handleSubmit,style:p.form,autoComplete:"off"},m.a.createElement("label",{style:p.label},"Name",m.a.createElement("input",{type:"text",name:"name",value:a,onChange:this.handleChange})),m.a.createElement("label",{style:p.label},"Email",m.a.createElement("input",{type:"email",name:"email",value:t,onChange:this.handleChange})),m.a.createElement("label",{style:p.label},"Password",m.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange})),m.a.createElement("button",{type:"submit"},"Sign Up")))}}]),t}(i.Component),b={onRegister:c.d};a.default=Object(u.b)(null,b)(h)}}]);
//# sourceMappingURL=6.4088025e.chunk.js.map