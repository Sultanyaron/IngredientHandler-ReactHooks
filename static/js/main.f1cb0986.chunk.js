(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),l=(n(11),n(2)),i=n(1),u=n(5),s=(n(12),function(e){return a.a.createElement("div",{className:"card"},e.children)}),m=(n(13),n(14),function(){return a.a.createElement("div",{className:"lds-ring"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}),d=a.a.memo(function(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(r.useState)(""),u=Object(i.a)(l,2),d=u[0],E=u[1];console.log("RENDERING INGREDIENT FORM");return a.a.createElement("section",{className:"ingredient-form"},a.a.createElement(s,null,a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAddIngredient({title:c,amount:d})}},a.a.createElement("div",{className:"form-control"},a.a.createElement("label",{htmlFor:"title"},"Name"),a.a.createElement("input",{type:"text",id:"title",value:c,onChange:function(e){o(e.target.value)}})),a.a.createElement("div",{className:"form-control"},a.a.createElement("label",{htmlFor:"amount"},"Amount"),a.a.createElement("input",{type:"number",id:"amount",value:d,onChange:function(e){E(e.target.value)}})),a.a.createElement("div",{className:"ingredient-form__actions"},a.a.createElement("button",{type:"submit"},"Add Ingredient"),e.loading&&a.a.createElement(m,null)))))}),E=(n(15),a.a.memo(function(e){return console.log("RENDERING INGREDIENT LIST"),a.a.createElement("section",{className:"ingredient-list"},a.a.createElement("h2",null,"Loaded Ingredients"),a.a.createElement("ul",null,e.ingredients.map(function(t){return a.a.createElement("li",{key:t.id,onClick:e.onRemoveItem.bind(void 0,t.id)},a.a.createElement("span",null,t.title),a.a.createElement("span",null,t.amount,"x"))})))}));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var b={loading:!1,error:null,data:null,extra:null,identifier:null},p=function(e,t){switch(t.type){case"SEND_REQ":return{loading:!0,error:null,data:null,extra:null,identifier:t.identifier};case"RESPONSE":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{loading:!1,data:t.responseData,extra:t.extra});case"ERROR":return{loading:!1,error:t.errorMsg};case"CLEAR":return b;default:throw new Error("Should not be reached")}},O=function(){var e=Object(r.useReducer)(p,b),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useCallback)(function(){return a({type:"CLEAR"})},[]),o=Object(r.useCallback)(function(e,t,n,r,c){a({type:"SEND_REQ",identifier:c}),fetch(e,{method:t,body:n}).then(function(e){return e.json()}).then(function(e){a({type:"RESPONSE",extra:r,responseData:e})}).catch(function(e){a({type:"ERROR",errorMsg:e.message})})},[]);return{isLoading:n.loading,data:n.data,error:n.error,sendRequest:o,reqExtra:n.extra,reqIdentifier:n.identifier,clear:c}},g=(n(16),a.a.memo(function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"backdrop",onClick:e.onClose}),a.a.createElement("div",{className:"error-modal"},a.a.createElement("h2",null,"An Error Occurred!"),a.a.createElement("p",null,e.children),a.a.createElement("div",{className:"error-modal__actions"},a.a.createElement("button",{type:"button",onClick:e.onClose},"Okay"))))})),v=(n(17),a.a.memo(function(e){var t=e.onLoadIngredients,n=Object(r.useState)(""),c=Object(i.a)(n,2),o=c[0],l=c[1],u=Object(r.useRef)(),m=O(),d=m.isLoading,E=m.data,f=m.error,b=m.sendRequest,p=m.clear;return Object(r.useEffect)(function(){var e=setTimeout(function(){if(o===u.current.value){var e=0===o.length?"":'?orderBy="title"&equalTo="'.concat(o,'"');b("https://react-hooks-db.firebaseio.com/ingredients.json"+e,"GET")}},500);return function(){clearTimeout(e)}},[o,u,b]),Object(r.useEffect)(function(){if(!d&&!f&&E){var e=[];for(var n in E)e.push({id:n,title:E[n].title,amount:E[n].amount});t(e)}},[E,d,f,t]),a.a.createElement("section",{className:"search"},f&&a.a.createElement(g,{onClose:p},f),a.a.createElement(s,null,a.a.createElement("div",{className:"search-input"},a.a.createElement("label",null,"Filter by Title"),d&&a.a.createElement("span",null,"Loading..."),a.a.createElement("input",{type:"text",ref:u,value:o,onChange:function(e){return l(e.target.value)}}))))}));function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y=function(e,t){switch(t.type){case"SET":return t.ingredients;case"ADD":return[].concat(Object(u.a)(e),[t.ingredient]);case"DELETE":return e.filter(function(e){return e.id!==t.id});default:throw new Error("wrong case in ing reducer")}},N=function(){var e=Object(r.useReducer)(y,[]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=O(),l=o.isLoading,u=o.error,s=o.data,m=o.sendRequest,f=o.reqExtra,b=o.reqIdentifier,p=o.clear;Object(r.useEffect)(function(){l||u||"REMOVE_INGREDIENT"!==b?l||u||"ADD_INGREDIENT"!==b||c({type:"ADD",ingredient:h({id:s.name},f)}):c({type:"DELETE",id:f})},[s,f,b,l,u]);var j=Object(r.useCallback)(function(e){c({type:"SET",ingredients:e})},[]),N=Object(r.useCallback)(function(e){m("https://react-hooks-db.firebaseio.com/ingredients.json/","POST",JSON.stringify(e),e,"ADD_INGREDIENT")},[m]),R=Object(r.useCallback)(function(e){m("https://react-hooks-db.firebaseio.com/ingredients/".concat(e,".json"),"DELETE",null,e,"REMOVE_INGREDIENT")},[m]);return a.a.createElement("div",{className:"App"},u&&a.a.createElement(g,{onClose:p},u),a.a.createElement(d,{onAddIngredient:N,loading:l}),a.a.createElement("section",null,a.a.createElement(v,{onLoadIngredients:j}),a.a.createElement(E,{ingredients:n,onRemoveItem:R})))},R=(n(18),a.a.createContext({isAuth:!1,login:function(){}})),D=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1];return a.a.createElement(R.Provider,{value:{login:function(){o(!0)},isAuth:c}},e.children)},I=function(e){var t=Object(r.useContext)(R);return a.a.createElement("div",{className:"auth"},a.a.createElement(s,null,a.a.createElement("h2",null,"You are not authenticated!"),a.a.createElement("p",null,"Please log in to continue."),a.a.createElement("button",{onClick:function(){t.login()}},"Log In")))},w=function(e){var t=Object(r.useContext)(R),n=a.a.createElement(I,null);return t.isAuth&&(n=a.a.createElement(N,null)),n};o.a.render(a.a.createElement(D,null,a.a.createElement(w,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.f1cb0986.chunk.js.map