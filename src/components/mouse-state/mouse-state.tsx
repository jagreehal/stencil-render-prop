import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'mouse-state'
})
export class MouseState {
  @State() x: number = 0;
  @State() y: number = 0;
  @Prop() _render;

  handleMouseMove = event => {
    this.x = event.clientX;
    this.y = event.clientY;
  };
  render() {
    return (
      <div style={{ 'min-height': '100vh' }} onMouseMove={this.handleMouseMove}>
        {this._render({ x: this.x, y: this.y })}
      </div>
    );
  }
}
