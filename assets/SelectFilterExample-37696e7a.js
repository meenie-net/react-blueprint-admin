import{r as d,j as t,B as h}from"./index-e00961be.js";import{C as f}from"./card-4c8dd9fd.js";const v=i=>{const{options:n,onChange:p}=i,u=(e,s)=>{const l=JSON.parse(JSON.stringify(e)),{item:a}=s.payload;switch(s.type){case"SELECT_SINGLE":if(a.multiple){const r=l[a.key];return r.includes(s.payload.option.value)?r.splice(l[a.key].indexOf(s.payload.option.value),1):r.push(s.payload.option.value),{...l,[a.key]:r}}else return l[a.key]===s.payload.option.value?{...l,[a.key]:""}:{...l,[a.key]:s.payload.option.value};case"SELECT_ALL":return l[a.key].length===a.options.length?{...l,[a.key]:[]}:{...l,[a.key]:a.options.map(r=>r.value)};default:return l}},c={};for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)){const s=n[e];s.multiple?c[s.key]=[]:c[s.key]=""}const[o,y]=d.useReducer(u,c),m=e=>{y({type:"SELECT_ALL",payload:{item:e}})},k=(e,s)=>{y({type:"SELECT_SINGLE",payload:{item:e,option:s}})};return d.useEffect(()=>p(o),[o]),t.jsx("div",{children:n?n.map((e,s)=>t.jsxs("div",{className:"mt-4 flex flex-wrap items-center",children:[t.jsxs("span",{className:"text-base",children:[e.title,"（",e.multiple?"多":"单","）："]}),e.multiple&&t.jsx(h,{className:"mr-4 whitespace-nowrap rounded-full",intent:"primary",outlined:!0,active:o[e.key]?o[e.key].length===e.options.length:!1,small:!0,onClick:()=>m(e),children:"全部"}),e.options.map((l,a)=>t.jsx(h,{className:"mr-4 whitespace-nowrap rounded-full",intent:"primary",outlined:!0,active:e.multiple?o[e.key]?o[e.key].includes(l.value):!1:l.value===o[e.key],small:!0,icon:l.icon||"grid-view",onClick:()=>k(e,l),children:l.label},a))]},s)):null})},E=()=>{const i=[{title:"部门",key:"department",multiple:!0,options:[{value:"sales",label:"销售部",icon:"shop"},{value:"back",label:"后勤部",icon:"clean"},{value:"eaar",label:"事业部",icon:"shop"}]},{title:"权限",key:"permission",multiple:!1,options:[{value:"admin",label:"管理员",icon:"user"},{value:"superAdmin",label:"超级管理员",icon:"mugshot"},{value:"sales",label:"普通",icon:"new-person"}]}],[n,p]=d.useState({}),u=c=>{p(c)};return t.jsxs(f,{className:"h-full",children:[t.jsx(v,{options:i,onChange:u}),t.jsxs("pre",{className:"mt-4",children:["结果：",JSON.stringify(n)]})]})};export{E as default};
