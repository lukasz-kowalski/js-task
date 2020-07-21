const populatePagination = (pages) => {
  const select = document.querySelector('#activePageSelect');

  for (let i = 1; i < pages + 1; i += 1) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;

    select.appendChild(option);
  }
};

export default populatePagination;
