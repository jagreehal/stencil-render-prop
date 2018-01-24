export class MouseTracker {
    render() {
        return (h("div", null,
            h("h1", null, "Move the mouse around!"),
            h("mouse-state", { _render: mouse => h("mouse-placeholder", { mouse: mouse }) })));
    }
    static get is() { return "mouse-tracker"; }
}
