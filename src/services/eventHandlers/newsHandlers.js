import state from '../../state/newsState';
import debounce from '../../utils/debounce';
import renderer from '../renderer/renderer';
import fetcher from '../fetcher/fetcher';

const { fetchNews } = fetcher;

const handleSearch = (event) => {
  state.query = event.target.value.toLowerCase() || '';
  renderer.clearElement('.newsList');
  fetchNews();
};

const debouncedHandleSearch = debounce(handleSearch, 300);

const handleSectionSelect = (event) => {
  state.section =
    event.target.value !== 'all' ? event.target.value.toLowerCase() : '';
  renderer.clearElement('.newsList');
  fetchNews();
};

const handlePageSelect = (event) => {
  state.page = event.target.value;
  renderer.clearElement('.newsList');
  fetchNews();
};

const handlers = {
  handleSearch: debouncedHandleSearch,
  handleSectionSelect,
  handlePageSelect,
};

export default handlers;
