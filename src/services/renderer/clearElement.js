const clearElement = (selector) => {
  const element = document.querySelector(selector);
  element.innerHTML = '';
};

export default clearElement;
