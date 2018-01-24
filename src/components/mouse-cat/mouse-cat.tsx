import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'mouse-cat'
})
export class MouseCat {
  @Prop() mouse;

  render() {
    const left = `${this.mouse.x}px`;
    const top = `${this.mouse.y}px`;
    return (
      <img
        src="http://placekitten.com/350/150"
        style={{ position: 'absolute', left, top }}
      />
    );
  }
}
