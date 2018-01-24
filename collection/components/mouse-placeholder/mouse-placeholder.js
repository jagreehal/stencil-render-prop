export class MousePlaceholder {
    render() {
        const left = `${this.mouse.x}px`;
        const top = `${this.mouse.y}px`;
        return (h("img", { src: "http://via.placeholder.com/350x150", style: { position: 'absolute', left, top } }));
    }
    static get is() { return "mouse-placeholder"; }
    static get properties() { return { "mouse": { "type": "Any" } }; }
}
