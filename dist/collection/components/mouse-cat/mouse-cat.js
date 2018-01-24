export class MouseCat {
    render() {
        const left = `${this.mouse.x}px`;
        const top = `${this.mouse.y}px`;
        return (h("img", { src: "http://placekitten.com/350/150", style: { position: 'absolute', left, top } }));
    }
    static get is() { return "mouse-cat"; }
    static get properties() { return { "mouse": { "type": "Any" } }; }
}
