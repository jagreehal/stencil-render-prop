/*! Built with http://stenciljs.com */
const{h,Context}=window.StencilRenderProp;class MouseState{constructor(){this.x=0,this.y=0,this.handleMouseMove=(e=>{this.x=e.clientX,this.y=e.clientY})}render(){return h("div",{style:{"min-height":"100vh"},onMouseMove:this.handleMouseMove},this._render({x:this.x,y:this.y}))}static get is(){return"mouse-state"}static get properties(){return{_render:{type:"Any"},x:{state:!0},y:{state:!0}}}}class MouseTracker{render(){return h("div",null,h("h1",null,"Move the mouse around!"),h("mouse-state",{_render:e=>h("mouse-placeholder",{mouse:e})}))}static get is(){return"mouse-tracker"}}export{MouseState,MouseTracker};