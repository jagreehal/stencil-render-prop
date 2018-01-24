## Example of using render prop for Stencil

So using [render props](https://reactjs.org/docs/render-props.html) is a great pattern.

In the 'mouse-tracker.tsx' file

```jsx
<div>
  <h1>Move the mouse around!</h1>
  <mouse-state _render={mouse => <mouse-placeholder mouse={mouse} />} />
</div>
```

you can change the component 'mouse-placeholder' to 'mouse-cat'

```jsx
<div>
  <h1>Move the mouse around!</h1>
  <mouse-state _render={mouse => <mouse-cat mouse={mouse} />} />
</div>
```

as the component mouse-state does all the work!

```jsx
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
```
