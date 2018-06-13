/**
 * 将virtual DOM jsx转换为json对象，返回一个vnode
 * @see https://jasonformat.com/wtf-is-jsx/
 * @param {string} nodeName 节点名
 * @param {object} attributes 节点属性对象
 * @param {array} args 子节点
 */
export function h(nodeName, attributes, ...args) {
    // 如果nodeName就是一个普通的string, 那么就生成正常vnode对象
    let children = args.length ? [].concat(...args) : null;
    
    // 如果nodeName是一个方法，即一个组件？？？

    return { nodeName, attributes, children };
}
