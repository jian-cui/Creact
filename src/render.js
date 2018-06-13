import { createComponent, setComponentProps } from './vdom/component-recycler';
/**
 * 渲染节点，并且插入到container中
 * @param {object} vnode
 * @param {DOM} container
 */
export function render(vnode, container) {
  return container.appendChild(_render(vnode));
}

/**
 * 渲染vnode为真正的节点
 * vnode包括nodeName, attributes, children三个属性
 * @param {object} vnode
 */
export function _render(vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';

  if (typeof vnode === 'number') vnode = vnode.toString();

  // 如果是nodeName是函数，即一个新的组件
  if (typeof vnode.nodeName === 'function') {
    const component = createComponent(vnode.nodeName, vnode.attributes);
    setComponentProps(component, vnode.attributes);

    return component.base;
  }

  // 如果是字符串，直接返回文本节点
  if (vnode.split) return document.createTextNode(vnode);

  // 创建一个DOM节点
  const n = document.createElement(vnode.nodeName);
  // 复制vnode.attributes到DOM节点属性
  const a = vnode.attributes || {};
  let attrValue;
  Object.keys(a).forEach((k) => {
    // 避免类名class和js关键字class冲突，使用了className
    attrValue = a[k];
    if (k === 'className') k = 'class';
    n.setAttribute(k, attrValue);
  });

  // 渲染子节点
  (vnode.children || []).forEach(c => n.appendChild(_render(c)));

  return n;
}
