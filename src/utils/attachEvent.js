const attachEvent = (identifier, eventType, handler) => {
  const element = document.querySelector(identifier);
  element.addEventListener(eventType, handler);
};

export default attachEvent;
