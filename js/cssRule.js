// 通过 element.style.cssText 可以获取或设置元素的css内联样式
const divEl = document.createElement('div')
divEl.style.cssText = 'color:red;' // 设置元素的 color 为 red（似乎会自动加上分号，但手动加上更好）
// cssText: 'color: red;'

divEl.style.cssText = 'font-size:14px;' // 重新设置会覆盖之前的内联样式
// cssText: 'font-size: 14px;'

divEl.style.cssText += 'color:red;' // 可以使用 += 实现在原有样式后面拼接新的样式
// cssText: 'font-size: 14px;color: red;'

divEl.style.cssText += 'color:green;' // 相同样式后者会覆盖前者
// cssText: 'font-size: 14px;color: green;'