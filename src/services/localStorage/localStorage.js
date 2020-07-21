import {
  mapNewsToLocalStorage,
  addItemToLocalStorage,
  removeItemFromLocalStorage,
  retrieveSavedArticlesFromStorage,
} from './readLaterStorage';

const storage = {
  mapNewsToLocalStorage,
  addItemToLocalStorage,
  removeItemFromLocalStorage,
  retrieveSavedArticlesFromStorage,
};

export default storage;
