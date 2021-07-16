/**
 * @type {HTMLDivElement}
 */
const space = document.getElementById("space");

/**
 * @param {MouseEvent} event
 */
const createElement = (event) => {
  /**
   * @type {HTMLDivElement}
   */
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.style.position = "absolute";
  wrapper.style.top = `${event.offsetY}px`;
  wrapper.style.left = `${event.offsetX}px`;

  /**
   * @type {HTMLTextAreaElement}
   */
  const element = document.createElement("textarea");
  element.classList.add("element");

  wrapper.appendChild(element);

  return { wrapper, element };
};

/**
 *
 * @param {{event: MouseEvent, wrapper: HTMLDivElement, spaceEvent: MouseEvent}} params
 */
const onMouseDownWrapper = (params) => {
  params.event.stopPropagation();

  const shiftX =
    params.event.clientX - params.wrapper.getBoundingClientRect().left;
  const shiftY =
    params.event.clientY - params.wrapper.getBoundingClientRect().top;

  /**
   *
   * @param {{clientX: MouseEvent['clientX'], clientY: MouseEvent['clientY']}} moveParams
   */
  const move = (moveParams) => {
    const positionX = Number(params.wrapper.style.left.replace("px", ""));
    const positionY = Number(params.wrapper.style.top.replace("px", ""));

    const x =
      positionX +
      (moveParams.clientX - params.wrapper.getBoundingClientRect().left) -
      shiftX;
    const y =
      positionY +
      (moveParams.clientY - params.wrapper.getBoundingClientRect().top) -
      shiftY;

    params.wrapper.style.left = `${x}px`;
    params.wrapper.style.top = `${y}px`;
  };

  /**
   * @param {MouseEvent} event
   */
  const onMove = (event) => {
    move({ clientX: event.clientX, clientY: event.clientY });
  };

  document.addEventListener("mousemove", onMove);

  params.wrapper.onmouseup = () => {
    document.removeEventListener("mousemove", onMove);
  };
};

/**
 * @type {GlobalEventHandlers['onmousedown']}
 */
const onMouseDownSpace = (spaceEvent) => {
  const { offsetX, offsetY } = spaceEvent;
  /**
   * @type {{wrapper: HTMLDivElement, element: HTMLTextAreaElement}}
   */
  const { wrapper, element } = createElement(spaceEvent);

  space.appendChild(wrapper);

  wrapper.onmousedown = (event) =>
    onMouseDownWrapper({ event, wrapper, spaceEvent });

  element.onmousedown = (event) => {
    event.stopPropagation();
  };
};

space.onmousedown = onMouseDownSpace;
