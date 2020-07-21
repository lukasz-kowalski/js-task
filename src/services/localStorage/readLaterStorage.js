import readLaterState from '../../state/readLaterState';

export const retrieveSavedArticlesFromStorage = () => {
  readLaterState.clearState();
  const dataFromStorage = JSON.parse(localStorage.getItem('readLater')) || [];

  readLaterState.setState([...dataFromStorage]);

  return readLaterState.state;
};

export const mapNewsToLocalStorage = (data) => ({
  webUrl: data.webUrl,
  webTitle: data.webTitle,
  id: data.id,
});

export const addItemToLocalStorage = (item) => {
  readLaterState.setState([item]);
  localStorage.setItem('readLater', JSON.stringify(readLaterState.state));
};

export const removeItemFromLocalStorage = (id) => {
  readLaterState.removeItem(id);
  localStorage.setItem('readLater', JSON.stringify(readLaterState.state));
};
