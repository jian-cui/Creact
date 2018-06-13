/**
 * 将props上的属性复制到obj上
 * @param {object} obj 目标对象
 * @param {object} props 被合并对象
 */
export function extend(obj, props) {
    for (let i in props) obj[i] = props[i];
    return obj;
}