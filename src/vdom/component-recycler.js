import { Component } from '../component';
import { renderComponent } from './component';

// 创建组件
export function createComponent(cmp, props, context) {
  let inst;

  if (cmp.prototype && cmp.prototype.render) {
    // 如果是类定义组件，则直接返回实例
    inst = new cmp(props);
  } else {
    // 如果是函数定义组件，则将其扩展为类定义组件
    inst = new Component(props);
    inst.constructor = cmp;
    inst.render = function () {
      return this.constructor(props);
    }
    // Component.call(inst, props, context);
  }
  return inst;
}

// set props
export function setComponentProps(component, props) {
  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount();
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }

  component.props = props;
  
  renderComponent(component);
}
