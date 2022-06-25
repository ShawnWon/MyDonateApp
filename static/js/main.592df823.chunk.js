(this.webpackJsonpdonateapp=this.webpackJsonpdonateapp||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),s=a(2),i=a(3),c=a(10),u=a(9);var m=function(e){var t=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Donation System"),r.a.createElement("input",{ref:t,onChange:function(){var a=t.current.value;e.searchBusstop(a)}.bind(this),type:"text",placeholder:"Search a bus stop...",className:"w3-input"}))},d=a(1);var p=function(e){var t=Object(n.useRef)(null),a=Object(d.c)((function(e){return e.theme.value}));return r.a.createElement("tr",{style:{cursor:"pointer"}},r.a.createElement("td",null,e.item.info.busstopid),r.a.createElement("td",null,e.item.info.busstopname),r.a.createElement("td",null,e.item.info.area),r.a.createElement("td",null,r.a.createElement("a",{href:"/#"},r.a.createElement("button",{id:e.item.info.busstopid,ref:t,onClick:function(){var a=t.current.id;console.log(a),e.refreshDonations(a)}.bind(this),className:"w3-btn ".concat(a.primaryColor)},"Go"))))};var h=function(e){var t=this,a=function(t){e.refreshDonations(t)},n=Object(d.c)((function(e){return e.theme.value})),l=[];return 0===e.items.length?l.push(r.a.createElement("tr",{key:0},r.a.createElement("th",{colSpan:"3",className:"tempEmpty"},"No busstop found, input some other keyword."))):e.items.forEach((function(e){l.push(r.a.createElement(p,{key:e.key,item:e,refreshDonations:a.bind(t)}))})),r.a.createElement("div",{className:"w3-container"},r.a.createElement("table",{className:"w3-table w3-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"w3-card ".concat(n.primaryColor)},r.a.createElement("h6",null,"Bus stop Id"))),r.a.createElement("td",null,r.a.createElement("div",{className:"w3-card ".concat(n.secondaryColor)},r.a.createElement("h6",null,"Busstop Name"))),r.a.createElement("td",{colSpan:"2"},r.a.createElement("div",{className:"w3-card ".concat(n.tertiaryColor)},r.a.createElement("h6",null,"Area"))))),r.a.createElement("tbody",null,l)))},f=a(4);var b=function(e){var t=this,a=Object(d.c)((function(e){return e.theme.value}));return r.a.createElement("div",{className:"paymentForm w3-card"},r.a.createElement("div",{className:"".concat(a.primaryColor)},r.a.createElement("h4",{style:{textAlign:"center"}},"Please input card number:")),r.a.createElement("table",{className:"w3-table w3-striped"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Holder Name"),r.a.createElement("td",null,r.a.createElement("input",{type:"text"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Card Number"),r.a.createElement("td",null,r.a.createElement("input",{type:"text"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"CVV code"),r.a.createElement("td",null,r.a.createElement("input",{type:"text"}))))),r.a.createElement("button",{className:"w3-btn ".concat(a.secondaryColor),"margin-right":"50px",onClick:function(){return t.props.callback("ok")}},"OK"),r.a.createElement("button",{className:"w3-btn ".concat(a.tertiaryColor," w3-margin-left"),onClick:function(){return t.props.callback("cancel")}},"Cancel"))};var E=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(null),i=Object(f.a)(s,2),c=i[0],u=i[1],m=Object(n.useRef)(null),p=Object(n.useRef)(null),h=Object(n.useRef)(null),E=Object(n.useRef)(null),y=Object(n.useRef)(null),v=Object(n.useRef)(null),N=Object(n.useRef)(null),w=Object(n.useRef)(null),O=Object(n.useRef)(null),j=Object(d.c)((function(e){return e.theme.value})),k=m.current,S=p.current,C=O.current;return"0"!==e.currentBSid?C.style.display="block":null!=C&&(C.style.display="none"),r.a.createElement("div",{ref:O,className:"donateForm"},r.a.createElement("div",{style:{textAlign:"center"},className:"w3-cell-middle"},r.a.createElement("h3",null,"Add Donation"),r.a.createElement("hr",null),r.a.createElement("form",{ref:m,className:"addForm"},r.a.createElement("div",{className:"w3-card ".concat(j.primaryColor)},r.a.createElement("label",{htmlFor:"donateAddName",style:{display:"block"}},"Name"),r.a.createElement("input",{ref:v,id:"donateAddName",type:"text",placeholder:"Your Name",className:"w3-input"})),r.a.createElement("div",{className:"w3-card ".concat(j.secondaryColor)},r.a.createElement("label",{htmlFor:"donateAddAmount",style:{display:"block"}},"Amount"),r.a.createElement("input",{ref:N,id:"donateAddAmount",type:"text",placeholder:"Input Your donate amount(0-1000)",className:"w3-input"})),r.a.createElement("div",{className:"w3-card ".concat(j.tertiaryColor)},r.a.createElement("label",{htmlFor:"donateAddEmail",style:{display:"block"}},"Email(Optional)"),r.a.createElement("input",{ref:w,id:"donateAddEmail",type:"text",placeholder:"Your Email",className:"w3-input"})),r.a.createElement("p",{ref:S,className:"tips"},"Submit Successfully"),r.a.createElement("p",{ref:E,className:"tips"},"Please input a name."),r.a.createElement("p",{ref:y,className:"tips"},"Please input a valid amount number."),r.a.createElement("p",{ref:h,className:"tips"},"Please select a bus stop firstly."),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("button",{className:"w3-card ".concat(j.primaryColor),onClick:function(t){t.preventDefault();var a={};if(a.busstopid=e.currentBSid,a.donatername=k.querySelector("#donateAddName").value.trim(),a.donateamount=k.querySelector("#donateAddAmount").value.trim(),a.donateremail=k.querySelector("#donateAddEmail").value.trim(),"0"===a.busstopid){var n=h.current;return n.style.display="block",void setTimeout((function(){n.style.display="none"}),1e3)}if(""===a.donatername){var r=E.current;return r.style.display="block",void setTimeout((function(){r.style.display="none"}),1e3)}if(!/^\d+$/.test(a.donateamount)){var l=y.current;return l.style.display="block",void setTimeout((function(){l.style.display="none"}),1e3)}a.donateamount=parseInt(a.donateamount),o(!0),u(a)}.bind(this)},"Submit"),l?r.a.createElement(b,{callback:function(t){var a=c;"ok"===t?(e.addDonations(a),S.style.display="block",setTimeout((function(){S.style.display="none"}),1e3)):(a.donateamount=0,e.addDonations(a)),k.reset(),o(!1)}.bind(this)}):null))))},y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("tr",{style:{cursor:"pointer"}},r.a.createElement("td",{className:"itemTd"},this.props.item.info.donatername),r.a.createElement("td",{className:"itemTd"},this.props.item.info.donateremail),r.a.createElement("td",{className:"itemTd"},this.props.item.info.donateamount))}}]),a}(r.a.Component);a(26);var v=function(e){var t=Object(n.useRef)(null),a=Object(d.c)((function(e){return e.theme.value})),l=700,o=0,s=l-o,i=[],c=t.current;return"0"!==e.currentBSid?c.style.display="block":null!==c&&(c.style.display="none"),0===e.items.length?(s=(l=700)-(o=0),i.push(r.a.createElement("tr",{key:0},r.a.createElement("th",{colSpan:"3",className:"tempEmpty"},"No donation found.")))):(l=700,s=(o=e.items.reduce((function(e,t){return t.info.donateamount+e}),0))<l?l-o:"This stop has met the target.",e.items.forEach((function(e){i.push(r.a.createElement(y,{key:e.key,item:e}))}))),r.a.createElement("div",{ref:t,className:"donateForm"},r.a.createElement("h3",{style:{textAlign:"center"}},"Busstop Status"),r.a.createElement("hr",null),r.a.createElement("div",{className:"w3-third"},r.a.createElement("div",{className:"w3-card ".concat(a.primaryColor)},r.a.createElement("h6",null,"The target amount to meet: $ ",l))),r.a.createElement("div",{className:"w3-third"},r.a.createElement("div",{className:"w3-card ".concat(a.secondaryColor)},r.a.createElement("h6",null,"Total amount raised by now:$ ",o))),r.a.createElement("div",{className:"w3-third"},r.a.createElement("div",{className:"w3-card ".concat(a.tertiaryColor)},r.a.createElement("h6",null,"Gap left to meet the target: $ ",s))),r.a.createElement("table",{className:"w3-table w3-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"itemTd"},"Donater Name"),r.a.createElement("th",{className:"itemTd"},"Donater Email"),r.a.createElement("th",{className:"itemTd"},"Amount"))),r.a.createElement("tbody",null,i)))},N=a(8),w={primaryColor:"w3-green",secondaryColor:"w3-light-green",tertiaryColor:"w3-lime"},O={primaryColor:"w3-blue",secondaryColor:"w3-aqua",tertiaryColor:"w3-pale-blue"},j=Object(N.b)({name:"theme",initialState:{value:w},reducers:{changeTheme:function(e,t){t.payload?e.value=O:e.value=w}}}),k=j.actions.changeTheme,S=j.reducer;var C=function(){var e=Object(n.useState)(!0),t=Object(f.a)(e,2),a=t[0],l=t[1],o=Object(d.b)();return r.a.createElement("div",{className:"w3-margin"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",defaultChecked:!a,onChange:function(){l(!a),o(k(a))}}),r.a.createElement("span",{className:"slider round"})))},g=(a(27),function e(t){Object(s.a)(this,e),this.info={},this.info.busstopid=t.busstopid,this.info.busstopname=t.busstopname,this.info.area=t.area,this.key=++e.key});g.key=0;var D=function(){function e(){var t=this;Object(s.a)(this,e),this.busstops=[],this.word="",this.area="",fetch("/busstops").then((function(e){return e.json()})).then((function(e){return e.info})).then((function(e){t.state={allBusstop:e.map((function(e){return new g(e)}))}})).catch((function(e){console.log(e)}))}return Object(i.a)(e,[{key:"searchBusstop",value:function(e){return this.word=e,this.busstops=this.state.allBusstop,this.busstops=this.busstops.filter((function(t){return-1!==t.info.busstopname.indexOf(e)||-1!==t.info.area.indexOf(e)})),""===e&&(this.busstops=[]),this}}]),e}(),B=function e(t){Object(s.a)(this,e),this.info={},this.info.busstopid=t.busstopid,this.info.donatername=t.donatername,this.info.donateamount=t.donateamount,this.info.donateremail=t.donateremail||"Anonymous",this.key=++e.key};B.key=0;var A=function(){function e(){var t=this;Object(s.a)(this,e),this.donations=[],this.bstopid="",fetch("/donations").then((function(e){return e.json()})).then((function(e){return e.info})).then((function(e){t.state={allDonations:e.map((function(e){return new B(e)}))}})).catch((function(e){console.log(e)}))}return Object(i.a)(e,[{key:"addDonationItem",value:function(e){var t=this;if(0!==e.donateamount){var a=new B(e);fetch("/donations",{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log(e),"Successfully Added."===e.info&&t.state.allDonations.push(a)})).catch((function(e){console.log(e)}))}return this.donations=this.state.allDonations.filter((function(t){return t.info.busstopid===e.busstopid})),this}},{key:"refreshDonations",value:function(e){return this.bstopid=e,this.donations=this.state.allDonations,this.donations=this.donations.filter((function(t){return t.info.busstopid===parseInt(e)})),this}}]),e}(),x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={busstop:new D,displayBStopId:"0",bsDonationList:new A},e}return Object(i.a)(a,[{key:"addDonationItem",value:function(e){this.setState({bsDonationList:this.state.bsDonationList.addDonationItem(e)})}},{key:"refreshDonationList",value:function(e){this.setState({bsDonationList:this.state.bsDonationList.refreshDonations(e),displayBStopId:e})}},{key:"searchBusstop",value:function(e){this.setState({busstop:this.state.busstop.searchBusstop(e)}),""===e&&this.setState({displayBStopId:"0"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"w3-display-topmiddle"},r.a.createElement(C,null),r.a.createElement("div",null,r.a.createElement(m,{searchBusstop:this.searchBusstop.bind(this)}),r.a.createElement(h,{items:this.state.busstop.busstops,refreshDonations:this.refreshDonationList.bind(this),currentBSid:this.state.displayBStopId,displayBSpanel:this.state.displayBSpanel}),r.a.createElement(v,{items:this.state.bsDonationList.donations,currentBSid:this.state.displayBStopId}),r.a.createElement(E,{currentBSid:this.state.displayBStopId,addDonations:this.addDonationItem.bind(this)})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=Object(N.a)({reducer:{theme:S}});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:T},r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.592df823.chunk.js.map