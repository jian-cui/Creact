import { _render } from '../render';

export function renderComponent(component) {
  // 组件对应生成的DOM或子组件
  let base;

  // 获取组件vnode
  const renderer = component.render();

  if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate();
  }

  // 渲染生成DOM
  base = _render(renderer);
  if (component.base) {
    if (component.componentDidUpdate) component.componentDidUpdate();
  } else if (component.componentDidMount) {
    componet.componentDidMount();
  }

  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base);
  }
  
  component.base = base;

  base._component = component;
}
