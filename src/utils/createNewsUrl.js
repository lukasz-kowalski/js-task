const createUrl = (base, state) => {
  const url = [base];
  if (state.page) {
    url.push(`page=${state.page}`);
  }

  if (state.section) {
    url.push(`section=${state.section}`);
  }

  if (state.query) {
    url.push(`q=${state.query}`);
  }

  return url.length > 1 ? url.join('&') : base;
};

export default createUrl;
