/*! Built with http://stenciljs.com */
const{h,Context}=window.StencilRenderProp;class MouseCat{render(){const t=`${this.mouse.x}px`,e=`${this.mouse.y}px`;return h("img",{src:"http://placekitten.com/350/150",style:{position:"absolute",left:t,top:e}})}static get is(){return"mouse-cat"}static get properties(){return{mouse:{type:"Any"}}}}export{MouseCat};