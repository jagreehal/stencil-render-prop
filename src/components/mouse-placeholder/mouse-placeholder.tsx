import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'mouse-placeholder'
})
export class MousePlaceholder {
  @Prop() mouse;

  render() {
    const left = `${this.mouse.x}px`;
    const top = `${this.mouse.y}px`;
    return (
      <img
        src="http://via.placeholder.com/350x150"
        style={{ position: 'absolute', left, top }}
      />
    );
  }
}
