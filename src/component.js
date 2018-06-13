import { extend } from './util';
import { renderComponent } from './vdom/component';

/**
 * 组件类
 * @param {object} props 传入组建的props
 * @param {object} context 传入的context
 */
export function Component(props, context) {
  this.context = context;

  this.props = props;

  this.state = this.state || {};

  this._renderCallbacks = [];
}


extend(Component.prototype, {
  setState(state, callback) {
    const s = this.state;
    // 保存旧state
    if (!this.prevState) this.prevState = extend({}, s);
    // 合并新state到this.state
    extend(s, typeof state === 'function' ? state(s, this.props) : state);
    // 渲染组件
    renderComponent(this);
    // if (callback) this._renderCallbacks.push(callback);
    // enqueueRenderer(this);
  },
});
