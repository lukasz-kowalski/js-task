import fetcher from './services/fetcher/fetcher';
import attachEvent from './utils/attachEvent';
import newsHandlers from './services/eventHandlers/newsHandlers';
import { handleRemoveClick } from './services/eventHandlers/readLaterHandlers';
import storage from './services/localStorage/localStorage';
import renderer from './services/renderer/renderer';
import './styles/main.css';

import runAllTests from './tests/tests';

// Please use https://open-platform.theguardian.com/documentation/

const { fetchNews } = fetcher;

const data = storage.retrieveSavedArticlesFromStorage();
renderer.renderReadLater(data);

fetchNews();
attachEvent('.readLaterList', 'click', handleRemoveClick);
attachEvent('#newsContentSearch', 'keydown', newsHandlers.handleSearch);
attachEvent('#sectionSelect', 'change', newsHandlers.handleSectionSelect);
attachEvent('#activePageSelect', 'change', newsHandlers.handlePageSelect);

runAllTests();
