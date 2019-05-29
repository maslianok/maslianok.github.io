(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(8),a=n(9),l=n(10),c=n(17),u=n(11),f=n(18),s=n(2),p=n.n(s),h=n(12),d=n(13),m=n(16),b=n(1),y=n(5),g=n(15),v={debounce:y.a,throttle:g.a},O=function(e){return v[e]},w=function(e){return"function"===typeof e},E=function(){return"undefined"===typeof window},j=function(e){return e instanceof Element||e instanceof HTMLDocument};function z(e){return(z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==z(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,P(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,s["PureComponent"]),n=t,(r=[{key:"render",value:function(){return this.props.children}}])&&R(n.prototype,r),o&&R(n,o),t}();function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=_(t).call(this,e),n=!o||"object"!==x(o)&&"function"!==typeof o?M(r):o,D(M(n),"cancelHandler",function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)}),D(M(n),"rafClean",function(){n.raf&&n.raf.cancel&&(n.raf.cancel(),n.raf=null)}),D(M(n),"toggleObserver",function(e){var t=n.getElement();t&&n.resizeObserver[e]&&n.resizeObserver[e](t)}),D(M(n),"getElement",function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(!E()){if(t)return document.querySelector(t);if(r&&j(r))return r;var o=n.element&&Object(h.findDOMNode)(n.element);if(o)return o.parentElement}}),D(M(n),"createUpdater",function(){return n.rafClean(),n.raf=Object(m.a)(function(e){var t=e.width,r=e.height,o=n.props.onResize;w(o)&&o(t,r),n.setState({width:t,height:r})}),n.raf}),D(M(n),"createResizeHandler",function(e){var t=n.state,r=t.width,o=t.height,i=n.props,a=i.handleWidth,l=i.handleHeight;if(a||l){var c=n.createUpdater();e.forEach(function(e){var t=e&&e.contentRect||{},i=t.width,u=t.height,f=a&&r!==i||l&&o!==u;!n.skipOnMount&&f&&!E()&&c({width:i,height:u}),n.skipOnMount=!1})}}),D(M(n),"onRef",function(e){n.element=e}),D(M(n),"getRenderType",function(){var e=n.props,t=e.render,r=e.children;return w(t)?"renderProp":w(r)?"childFunction":Object(s.isValidElement)(r)?"child":Array.isArray(r)?"childArray":"parent"}),D(M(n),"getTargetComponent",function(){var e=n.props,t=e.render,r=e.children,o=e.nodeType,i=n.state,a={width:i.width,height:i.height};switch(n.getRenderType()){case"renderProp":return Object(s.cloneElement)(t(a),{key:"resize-detector"});case"childFunction":return Object(s.cloneElement)(r(a));case"child":return Object(s.cloneElement)(r,a);case"childArray":return r.map(function(e){return!!e&&Object(s.cloneElement)(e,a)});default:return Object(s.createElement)(o)}});var i=e.skipOnMount,a=e.refreshMode,l=e.refreshRate,c=e.refreshOptions;n.state={width:void 0,height:void 0},n.skipOnMount=i,n.raf=null,n.element=null,n.unmounted=!1;var u=O(a);return n.resizeHandler=u?u(n.createResizeHandler,l,c):n.createResizeHandler,n.resizeObserver=new d.a(n.resizeHandler),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,s["PureComponent"]),n=t,(r=[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return p.a.createElement(k,{ref:this.onRef},this.getTargetComponent())}}])&&H(n.prototype,r),o&&H(n,o),t}();F.propTypes={handleWidth:b.bool,handleHeight:b.bool,skipOnMount:b.bool,refreshRate:b.number,refreshMode:b.string,refreshOptions:Object(b.shape)({leading:b.bool,trailing:b.bool}),querySelector:b.string,targetDomEl:b.any,onResize:b.func,render:b.func,children:b.any,nodeType:b.node},F.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};var A=F,B={wrapper:{display:"flex",height:"100vh"},leftColumn:{flexBasis:"200px",backgroundColor:"#EAEAEA"},rightColumn:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexBasis:"1000px",position:"relative",flexGrow:1,backgroundColor:"#D9DBFF",fontSize:"30px",textAlign:"center"},toggleLeftColumnBtn:{position:"absolute",top:"5px",left:"5px",fontSize:"14px"},dimensions:{fontSize:"18px"}},W=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={leftPanel:!0,mainFrame:!0,count:0,width:void 0,height:void 0},e.onResize=function(t,n){return e.setState(function(e){return{count:e.count+1,width:t,height:n}})},e.hideLeftPanel=function(){return e.setState(function(e){return{leftPanel:!e.leftPanel}})},e.toggleMainFrame=function(){return e.setState(function(e){return{mainFrame:!e.mainFrame}})},e.parentRef=o.a.createRef(),e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.count,n=e.width,r=e.height,i=e.mainFrame,a=e.leftPanel;return o.a.createElement("div",{style:B.wrapper},a&&o.a.createElement("div",{style:B.leftColumn},o.a.createElement("button",{onClick:this.toggleMainFrame,type:"button"},"Toggle main frame")),i&&o.a.createElement("div",{style:B.rightColumn,ref:this.parentRef},o.a.createElement("div",{style:B.toggleLeftColumnBtn},o.a.createElement("button",{onClick:this.hideLeftPanel,type:"button"},"Toggle left panel"),o.a.createElement("p",null,"or resize window.")),o.a.createElement("div",null,"Main div resized ".concat(t," times")),o.a.createElement("div",{style:B.dimensions},"Width: ".concat(n,", Height: ").concat(r)),o.a.createElement(A,{handleWidth:!0,handleHeight:!0,onResize:this.onResize,targetDomEl:this.parentRef.current})))}}]),t}(r.Component);Object(i.render)(o.a.createElement(W,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6c7632f3.chunk.js.map