import{r as d,j as a,B as m}from"./index-edf92eab.js";import{C as f}from"./card-d3556e38.js";const v=i=>{const{options:n,onChange:u}=i,p=(e,s)=>{const l=JSON.parse(JSON.stringify(e)),{item:t}=s.payload;switch(s.type){case"SELECT_SINGLE":if(t.multiple){const r=l[t.key];return r.includes(s.payload.option.value)?r.splice(l[t.key].indexOf(s.payload.option.value),1):r.push(s.payload.option.value),{...l,[t.key]:r}}else return l[t.key]===s.payload.option.value?{...l,[t.key]:""}:{...l,[t.key]:s.payload.option.value};case"SELECT_ALL":return l[t.key].length===t.options.length?{...l,[t.key]:[]}:{...l,[t.key]:t.options.map(r=>r.value)};default:return l}},c={};for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)){const s=n[e];s.multiple?c[s.key]=[]:c[s.key]=""}const[o,y]=d.useReducer(p,c),h=e=>{y({type:"SELECT_ALL",payload:{item:e}})},k=(e,s)=>{y({type:"SELECT_SINGLE",payload:{item:e,option:s}})};return d.useEffect(()=>u(o),[o]),a.jsx("div",{children:n?n.map((e,s)=>a.jsxs("div",{className:"mt-4 flex items-center",children:[a.jsxs("span",{className:"text-base",children:[e.title,"（",`${e.multiple?"多":"单"}`,"）："]}),e.multiple&&a.jsx(m,{className:"mr-4 rounded-full",intent:"primary",outlined:!0,active:o[e.key]?o[e.key].length===e.options.length:!1,small:!0,onClick:()=>h(e),children:"全部"}),e.options.map((l,t)=>a.jsx(m,{className:"mr-4 rounded-full",intent:"primary",outlined:!0,active:e.multiple?o[e.key]?o[e.key].includes(l.value):!1:l.value===o[e.key],small:!0,icon:l.icon||"grid-view",onClick:()=>k(e,l),children:l.label},t))]},s)):null})},E=()=>{const i=[{title:"部门",key:"department",multiple:!0,options:[{value:"sales",label:"销售部",icon:"shop"},{value:"back",label:"后勤部",icon:"clean"},{value:"eaar",label:"事业部",icon:"shop"}]},{title:"权限",key:"permission",multiple:!1,options:[{value:"admin",label:"管理员",icon:"user"},{value:"superAdmin",label:"超级管理员",icon:"mugshot"},{value:"sales",label:"普通",icon:"new-person"}]}],[n,u]=d.useState({}),p=c=>{u(c)};return a.jsxs(f,{className:"h-full",children:[a.jsx(v,{options:i,onChange:p}),a.jsxs("pre",{className:"mt-4",children:["结果：",JSON.stringify(n)]})]})};export{E as default};
