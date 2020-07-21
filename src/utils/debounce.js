const debounce = (fnToDebounce, interval) => {
  let timer;
  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => fnToDebounce(...args), interval);
  };
};

export default debounce;
