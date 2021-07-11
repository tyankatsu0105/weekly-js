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
  console.log('a');
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

  space.appendChild(element)
  element.onclick = onClickElement
}

space.onclick = onClick