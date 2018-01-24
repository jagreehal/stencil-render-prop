export class MouseState {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.handleMouseMove = event => {
            this.x = event.clientX;
            this.y = event.clientY;
        };
    }
    render() {
        return (h("div", { style: { 'min-height': '100vh' }, onMouseMove: this.handleMouseMove }, this._render({ x: this.x, y: this.y })));
    }
    static get is() { return "mouse-state"; }
    static get properties() { return { "_render": { "type": "Any" }, "x": { "state": true }, "y": { "state": true } }; }
}
