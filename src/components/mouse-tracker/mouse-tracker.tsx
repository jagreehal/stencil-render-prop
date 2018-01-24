import { Component, State } from '@stencil/core';

@Component({
  tag: 'mouse-tracker'
})
export class MouseTracker {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <mouse-state _render={mouse => <mouse-placeholder mouse={mouse} />} />
      </div>
    );
  }
}
