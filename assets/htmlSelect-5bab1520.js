import{_ as h,H as I,d as M,b4 as N,D as g,L as H,M as P,b5 as y,r as s,l as i,I as A,Q as R}from"./index-e00961be.js";var T=function(t){h(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.render=function(){var a,e=this.props,p=e.className,o=e.disabled,d=e.elementRef,u=e.fill,f=e.iconProps,v=e.large,b=e.minimal,c=e.options,L=c===void 0?[]:c,m=I(e,["className","disabled","elementRef","fill","iconProps","large","minimal","options"]),E=M(N,(a={},a[g]=o,a[H]=u,a[P]=v,a[y]=b,a),p),_=L.map(function(n){var l=typeof n=="object"?n:{value:n};return s.createElement("option",i({},l,{key:l.value,children:l.label||l.value}))});return s.createElement("div",{className:E},s.createElement("select",i({disabled:o,ref:d,value:this.props.value},m,{multiple:!1}),_,m.children),s.createElement(A,i({icon:"double-caret-vertical",title:"Open dropdown"},f)))},r}(R);export{T as H};
