(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),d=n.n(l),i=n(5),r=n(3),u=n(4),c=n(7),s=n(6),h=function(e){return e.data.map((function(t,n){if(e.done===t.done)return o.a.createElement("li",{key:n},o.a.createElement("input",{onChange:function(){return e.toggle(n)},checked:e.done,type:"checkbox",id:"inp"}),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.title}}),o.a.createElement("button",{onClick:function(){return e.delTodo(n)}},"\u5220\u9664"))}))},p=function(e){return o.a.createElement("div",null,o.a.createElement("input",{type:"text",value:e.data,onChange:function(t){return e.handleChange(t)},id:"inp"}),o.a.createElement("button",{onClick:function(){return e.addTodo()}},"add"))},g=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({inpValue:t.target.value})},e.addTodo=function(){""!=e.state.inpValue&&(e.setState({todos:[{title:e.state.inpValue,done:!1}].concat(Object(i.a)(e.state.todos))}),e.setState({inpValue:""}))},e.delTodo=function(t){e.setState({todos:e.state.todos.filter((function(e,n){return n!==t}))})},e.toggle=function(t){var n=JSON.parse(JSON.stringify(e.state.todos));n[t].done=!n[t].done,e.setState({todos:n})},e.state={inpValue:"",todos:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");e&&this.setState({todos:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.inpValue,a=t.filter((function(e){return!e.done})),l=t.filter((function(e){return e.done}));return o.a.createElement("div",null,o.a.createElement("h2",null,"TodoList"),o.a.createElement("div",null,o.a.createElement(p,{data:n,id:"inp",handleChange:this.handleChange,addTodo:this.addTodo}),o.a.createElement("h2",null,"\u672a\u5b8c\u6210",a.length),o.a.createElement(h,{data:t,done:!1,toggle:this.toggle,delTodo:this.delTodo}),"   ",o.a.createElement("h2",null,"\u5df2\u5b8c\u6210",l.length),o.a.createElement(h,{data:t,done:!0,toggle:this.toggle,delTodo:this.delTodo}),"   "))}}]),n}(a.Component);d.a.render(o.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.a14a8ff6.chunk.js.map