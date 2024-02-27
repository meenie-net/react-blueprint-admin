import{_ as Z,d as x,T as de,D as ue,f as fe,h as pe,k as K,r as d,l as V,I as W,m as he,n as _e,C as ye,o as Ee,p as me,q as Ne,s as Ce,t as ve,v as ee,w as be,x as xe,y as Se,A as De,j as f,F as Pe}from"./index59584.js";import{C as ke}from"./card59584.js";var Te=function(e){Z(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.handleCaretClick=function(r){var o;r.stopPropagation();var i=n.props,s=i.isExpanded,a=i.onCollapse,c=i.onExpand;(o=s?a:c)===null||o===void 0||o(n,r)},n.handleClick=function(r){var o,i;(i=(o=n.props).onClick)===null||i===void 0||i.call(o,n,r)},n.handleContentRef=function(r){var o,i;(i=(o=n.props).contentRef)===null||i===void 0||i.call(o,n,r)},n.handleContextMenu=function(r){var o,i;(i=(o=n.props).onContextMenu)===null||i===void 0||i.call(o,n,r)},n.handleDoubleClick=function(r){var o,i;(i=(o=n.props).onDoubleClick)===null||i===void 0||i.call(o,n,r)},n.handleMouseEnter=function(r){var o,i;(i=(o=n.props).onMouseEnter)===null||i===void 0||i.call(o,n,r)},n.handleMouseLeave=function(r){var o,i;(i=(o=n.props).onMouseLeave)===null||i===void 0||i.call(o,n,r)},n}return t.ofType=function(){return t},t.prototype.render=function(){var n,r=this.props,o=r.children,i=r.className,s=r.disabled,a=r.icon,c=r.isExpanded,l=r.isSelected,u=r.label,y=x(de,(n={},n[ue]=s,n[fe]=l,n[pe]=c,n),i),E=x(K,"".concat(K,"-").concat(this.props.depth)),le=s===!0?{}:{onClick:this.handleClick,onContextMenu:this.handleContextMenu,onDoubleClick:this.handleDoubleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave};return d.createElement("li",{className:y},d.createElement("div",V({className:E,ref:this.handleContentRef},le),this.maybeRenderCaret(),d.createElement(W,{className:he,icon:a,"aria-hidden":!0,tabIndex:-1}),d.createElement("span",{className:_e},u),this.maybeRenderSecondaryLabel()),d.createElement(ye,{isOpen:c},o))},t.prototype.maybeRenderCaret=function(){var n=this.props,r=n.children,o=n.isExpanded,i=n.disabled,s=n.hasCaret,a=s===void 0?d.Children.count(r)>0:s;if(a){var c=x(Ee,o?me:Ne),l=i===!0?void 0:this.handleCaretClick;return d.createElement(W,{title:o?"Collapse group":"Expand group",className:c,onClick:l,icon:"chevron-right"})}return d.createElement("span",{className:Ce})},t.prototype.maybeRenderSecondaryLabel=function(){if(this.props.secondaryLabel!=null)return d.createElement("span",{className:ve},this.props.secondaryLabel)},t.displayName="".concat(ee,".TreeNode"),t}(d.Component),te=function(e){Z(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.nodeRefs={},n.handleNodeCollapse=function(r,o){n.handlerHelper(n.props.onNodeCollapse,r,o)},n.handleNodeClick=function(r,o){n.handlerHelper(n.props.onNodeClick,r,o)},n.handleContentRef=function(r,o){o!=null?n.nodeRefs[r.props.id]=o:delete n.nodeRefs[r.props.id]},n.handleNodeContextMenu=function(r,o){n.handlerHelper(n.props.onNodeContextMenu,r,o)},n.handleNodeDoubleClick=function(r,o){n.handlerHelper(n.props.onNodeDoubleClick,r,o)},n.handleNodeExpand=function(r,o){n.handlerHelper(n.props.onNodeExpand,r,o)},n.handleNodeMouseEnter=function(r,o){n.handlerHelper(n.props.onNodeMouseEnter,r,o)},n.handleNodeMouseLeave=function(r,o){n.handlerHelper(n.props.onNodeMouseLeave,r,o)},n}return t.ofType=function(){return t},t.nodeFromPath=function(n,r){return n.length===1?r[n[0]]:t.nodeFromPath(n.slice(1),r[n[0]].childNodes)},t.prototype.render=function(){return d.createElement("div",{className:x(be,this.props.className)},this.renderNodes(this.props.contents,[],xe))},t.prototype.getNodeContentElement=function(n){return this.nodeRefs[n]},t.prototype.renderNodes=function(n,r,o){var i=this;if(n==null)return null;var s=n.map(function(a,c){var l=r.concat(c);return d.createElement(Te,V({},a,{key:a.id,contentRef:i.handleContentRef,depth:l.length-1,onClick:i.handleNodeClick,onContextMenu:i.handleNodeContextMenu,onCollapse:i.handleNodeCollapse,onDoubleClick:i.handleNodeDoubleClick,onExpand:i.handleNodeExpand,onMouseEnter:i.handleNodeMouseEnter,onMouseLeave:i.handleNodeMouseLeave,path:l}),i.renderNodes(a.childNodes,l))});return d.createElement("ul",{className:x(Se,o)},s)},t.prototype.handlerHelper=function(n,r,o){if(De(n)){var i=t.nodeFromPath(r.props.path,this.props.contents);n(i,r.props.path,o)}},t.displayName="".concat(ee,".Tree"),t}(d.Component),ne=Symbol.for("immer-nothing"),U=Symbol.for("immer-draftable"),p=Symbol.for("immer-state");function _(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var v=Object.getPrototypeOf;function b(e){return!!e&&!!e[p]}function N(e){var t;return e?re(e)||Array.isArray(e)||!!e[U]||!!((t=e.constructor)!=null&&t[U])||R(e)||g(e):!1}var Oe=Object.prototype.constructor.toString();function re(e){if(!e||typeof e!="object")return!1;const t=v(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===Oe}function S(e,t){O(e)===0?Object.entries(e).forEach(([n,r])=>{t(n,r,e)}):e.forEach((n,r)=>t(r,n,e))}function O(e){const t=e[p];return t?t.type_:Array.isArray(e)?1:R(e)?2:g(e)?3:0}function F(e,t){return O(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function oe(e,t,n){const r=O(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Re(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function R(e){return e instanceof Map}function g(e){return e instanceof Set}function m(e){return e.copy_||e.base_}function z(e,t){if(R(e))return new Map(e);if(g(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&re(e))return v(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[p];let r=Reflect.ownKeys(n);for(let o=0;o<r.length;o++){const i=r[o],s=n[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(n[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(v(e),n)}function X(e,t=!1){return A(e)||b(e)||!N(e)||(O(e)>1&&(e.set=e.add=e.clear=e.delete=ge),Object.freeze(e),t&&S(e,(n,r)=>X(r,!0))),e}function ge(){_(2)}function A(e){return Object.isFrozen(e)}var Ae={};function C(e){const t=Ae[e];return t||_(0,e),t}var D;function ie(){return D}function Me(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Y(e,t){t&&(C("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function L(e){I(e),e.drafts_.forEach(we),e.drafts_=null}function I(e){e===D&&(D=e.parent_)}function q(e){return D=Me(D,e)}function we(e){const t=e[p];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function G(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[p].modified_&&(L(t),_(4)),N(e)&&(e=k(t,e),t.parent_||T(t,e)),t.patches_&&C("Patches").generateReplacementPatches_(n[p].base_,e,t.patches_,t.inversePatches_)):e=k(t,n,[]),L(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ne?e:void 0}function k(e,t,n){if(A(t))return t;const r=t[p];if(!r)return S(t,(o,i)=>$(e,r,t,o,i,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return T(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let i=o,s=!1;r.type_===3&&(i=new Set(o),o.clear(),s=!0),S(i,(a,c)=>$(e,r,o,a,c,n,s)),T(e,o,!1),n&&e.patches_&&C("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function $(e,t,n,r,o,i,s){if(b(o)){const a=i&&t&&t.type_!==3&&!F(t.assigned_,r)?i.concat(r):void 0,c=k(e,o,a);if(oe(n,r,c),b(c))e.canAutoFreeze_=!1;else return}else s&&n.add(o);if(N(o)&&!A(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;k(e,o),(!t||!t.scope_.parent_)&&T(e,o)}}function T(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&X(t,n)}function Fe(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:ie(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=B;n&&(o=[r],i=P);const{revoke:s,proxy:a}=Proxy.revocable(o,i);return r.draft_=a,r.revoke_=s,a}var B={get(e,t){if(t===p)return e;const n=m(e);if(!F(n,t))return ze(e,n,t);const r=n[t];return e.finalized_||!N(r)?r:r===M(e.base_,t)?(w(e),e.copy_[t]=H(r,e)):r},has(e,t){return t in m(e)},ownKeys(e){return Reflect.ownKeys(m(e))},set(e,t,n){const r=se(m(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const o=M(m(e),t),i=o==null?void 0:o[p];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(Re(n,o)&&(n!==void 0||F(e.base_,t)))return!0;w(e),j(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return M(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,w(e),j(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=m(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){_(11)},getPrototypeOf(e){return v(e.base_)},setPrototypeOf(){_(12)}},P={};S(B,(e,t)=>{P[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});P.deleteProperty=function(e,t){return P.set.call(this,e,t,void 0)};P.set=function(e,t,n){return B.set.call(this,e[0],t,n,e[0])};function M(e,t){const n=e[p];return(n?m(n):e)[t]}function ze(e,t,n){var o;const r=se(t,n);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function se(e,t){if(!(t in e))return;let n=v(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=v(n)}}function j(e){e.modified_||(e.modified_=!0,e.parent_&&j(e.parent_))}function w(e){e.copy_||(e.copy_=z(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Le=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const i=n;n=t;const s=this;return function(c=i,...l){return s.produce(c,u=>n.call(this,u,...l))}}typeof n!="function"&&_(6),r!==void 0&&typeof r!="function"&&_(7);let o;if(N(t)){const i=q(this),s=H(t,void 0);let a=!0;try{o=n(s),a=!1}finally{a?L(i):I(i)}return Y(i,r),G(o,i)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===ne&&(o=void 0),this.autoFreeze_&&X(o,!0),r){const i=[],s=[];C("Patches").generateReplacementPatches_(t,o,i,s),r(i,s)}return o}else _(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,c=>t(c,...a));let r,o;return[this.produce(t,n,(s,a)=>{r=s,o=a}),r,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){N(e)||_(8),b(e)&&(e=Ie(e));const t=q(this),n=H(e,void 0);return n[p].isManual_=!0,I(t),n}finishDraft(e,t){const n=e&&e[p];(!n||!n.isManual_)&&_(9);const{scope_:r}=n;return Y(r,t),G(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const r=C("Patches").applyPatches_;return b(e)?r(e,t):this.produce(e,o=>r(o,t))}};function H(e,t){const n=R(e)?C("MapSet").proxyMap_(e,t):g(e)?C("MapSet").proxySet_(e,t):Fe(e,t);return(t?t.scope_:ie()).drafts_.push(n),n}function Ie(e){return b(e)||_(10,e),ae(e)}function ae(e){if(!N(e)||A(e))return e;const t=e[p];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=z(e,t.scope_.immer_.useStrictShallowCopy_)}else n=z(e,!0);return S(n,(r,o)=>{oe(n,r,ae(o))}),t&&(t.finalized_=!1),n}var h=new Le,je=h.produce;h.produceWithPatches.bind(h);h.setAutoFreeze.bind(h);h.setUseStrictShallowCopy.bind(h);h.applyPatches.bind(h);h.createDraft.bind(h);h.finishDraft.bind(h);function He(e,t,n){var r=d.useMemo(function(){return je(e)},[e]);return d.useReducer(r,t,n)}function ce(e,t){if(e!==void 0)for(const n of e)t(n),ce(n.childNodes,t)}function J(e,t,n){n(te.nodeFromPath(t,e))}function Xe(e,t){switch(t.type){case"DESELECT_ALL":ce(e,n=>n.isSelected=!1);break;case"SET_IS_EXPANDED":J(e,t.payload.path,n=>n.isExpanded=t.payload.isExpanded);break;case"SET_IS_SELECTED":return J(e,t.payload.path,n=>{n.isSelected=t.payload.isSelected,t.payload.multiple&&n.childNodes?(n.className="tree-bg-none",t.payload.isSelected?(n.icon=f.jsx("input",{type:"checkbox",checked:!0,className:"mr-2",readOnly:!0}),n.childNodes.forEach(r=>{r.isSelected=!0,r.icon=f.jsx("input",{type:"checkbox",checked:!0,className:"mr-2",readOnly:!0})})):(n.icon=f.jsx("input",{type:"checkbox",checked:!1,className:"mr-2",readOnly:!0}),n.childNodes.forEach(r=>{r.isSelected=!1,r.icon=f.jsx("input",{type:"checkbox",checked:!1,className:"mr-2",readOnly:!0})}))):t.payload.multiple&&!n.childNodes&&(n.className="tree-bg-none",t.payload.isSelected?n.icon=f.jsx("input",{type:"checkbox",checked:!0,className:"mr-2",readOnly:!0}):n.icon=f.jsx("input",{type:"checkbox",checked:!1,className:"mr-2",readOnly:!0}))}),e;default:return e}}const Q=({options:e=[],multiple:t,onChange:n})=>{const r=l=>l.map(u=>{let y=[];return u.childNodes?(y=r(u.childNodes),{...u,isSelected:!1,icon:t?f.jsx("input",{type:"checkbox",checked:!1,className:"mr-2",readOnly:!0}):null,childNodes:y}):{...u,isSelected:!1,icon:t?f.jsx("input",{type:"checkbox",checked:!1,className:"mr-2",readOnly:!0}):null}}),[o,i]=He(Xe,e,r),s=(l,u,y)=>{if(l.childNodes&&!t)return;!y.shiftKey&&!t&&i({type:"DESELECT_ALL"});const E=l.isSelected;i({payload:{path:u,multiple:t,isSelected:E==null?!0:!E},type:"SET_IS_SELECTED"})},a=d.useCallback((l,u)=>{i({payload:{path:u,isExpanded:!1},type:"SET_IS_EXPANDED"})},[]),c=d.useCallback((l,u)=>{i({payload:{path:u,isExpanded:!0},type:"SET_IS_EXPANDED"})},[]);return d.useEffect(()=>{const l=u=>{const y=[];return u.forEach(E=>{E.childNodes&&y.push(l(E.childNodes)),E.isSelected&&!E.childNodes&&y.push(E.id)}),y.flat()};n(l(o))},[o]),f.jsx(te,{contents:o,onNodeClick:s,onNodeCollapse:a,onNodeExpand:c,className:Pe})},We=()=>{const e=[{id:0,label:"总公司"},{id:1,label:"上海分公司",childNodes:[{id:10,label:"销售部"},{id:11,label:"事业部"},{id:12,label:"人事部"}]},{id:2,label:"广州分公司"}],t=n=>{console.log("res",n)};return f.jsx(ke,{className:"h-full",children:f.jsxs("div",{className:"flex",children:[f.jsx("div",{className:"w-48",children:f.jsx(Q,{options:e,onChange:t})}),f.jsx("div",{className:"w-48",children:f.jsx(Q,{options:e,onChange:t,multiple:!0})})]})})};export{We as default};