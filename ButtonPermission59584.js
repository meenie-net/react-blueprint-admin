import{b9 as d,r as i,ba as l,j as e,B as n,O as m}from"./index59584.js";import{u}from"./useButtonPermission59584.js";import{C as p}from"./card59584.js";import{C as h}from"./controlGroup59584.js";import"./useRouteHandle59584.js";const B=()=>{const a=d(),{BUTTONS:s,ready:r}=u({name:"userList"}),[t,o]=i.useState("admin");i.useEffect(()=>{a(l(t))},[t]);const c=()=>{o(t==="admin"?"guest":"admin")};return e.jsxs(p,{className:"h-full",children:[e.jsx(n,{icon:"user",intent:"warning",onClick:c,loading:!r,children:"点击切换权限"}),e.jsx("pre",{children:JSON.stringify(s)}),e.jsx(m,{label:`当前权限路由：userList，当前用户按钮权限: ${r?t:"……"}`,className:"mt-4",children:e.jsxs(h,{vertical:!1,children:[s.add&&e.jsx(n,{icon:"plus",intent:"primary",children:"Add"}),s.delete&&e.jsx(n,{icon:"delete",intent:"danger",children:"Delete"}),s.edit&&e.jsx(n,{icon:"edit",intent:"warning",children:"Edit"})]})})]})};export{B as default};