/**
 * @type {HTMLDivElement}
 */
const space = document.getElementById('space')

/**
 * @param {MouseEvent} params 
 * @returns {HTMLTextAreaElement} element
 */
const createElement = (handler) => {
  /**
   * @type {HTMLTextAreaElement}
   */
  const element = document.createElement('textarea')
  element.classList.add('element')
  element.style.position = 'absolute'
  element.style.top = `${handler.offsetY}px`
  element.style.left = `${handler.offsetX}px`

  return element
}


/**
 * @type {GlobalEventHandlers['onclick']}
 */
const onClickElement = (handler) => {
  handler.stopPropagation()
}

/**
 * @type {GlobalEventHandlers['ondragend']}
 */
const onDragEndElement = (handler,a) => {
  const { target } = handler

  target.style.top = `${Number(target.style.top.replace('px', '')) + handler.offsetY}px`
  target.style.left = `${Number(target.style.left.replace('px', '')) + handler.offsetX}px`
}

/**
 * @type {GlobalEventHandlers['onclick']}
 */
const onClick = (handler) => {
  const { offsetX, offsetY } = handler
  /**
   * @type {HTMLTextAreaElement} element
   */
  const element = createElement(handler)
  element.draggable = true

  space.appendChild(element)
  element.onclick = onClickElement
  element.ondragend = onDragEndElement
}

space.onclick = onClick