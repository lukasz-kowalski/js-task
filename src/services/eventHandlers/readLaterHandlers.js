import storage from '../localStorage/localStorage';

export const handleRemoveClick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    storage.removeItemFromLocalStorage(event.target.id);
  }
};
