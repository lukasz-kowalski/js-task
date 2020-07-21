import state from '../../state/newsState';
import createHTTPClient from '../httpClient';
import renderer from '../renderer/renderer';
import createUrl from '../../utils/createNewsUrl';
import populatePagination from '../../utils/populatePagination';
import { formatDate, calculateBeforeDate } from '../../utils/date';

const guardianClient = createHTTPClient(
  '2e1098e3-9395-4237-b088-e806a6e2f490',
  'https://content.guardianapis.com',
);

const handleFetch = (response) => {
  populatePagination(response.pages);
  renderer.renderListOfNews(response.results);
};

const getNews = (callback, client) => {
  const formattedDate = formatDate(calculateBeforeDate(new Date()));
  const baseUrl = `search?from-date=${formattedDate}`;

  client.get(createUrl(baseUrl, state)).then((data) => {
    callback(data.response);
  });
};

const fetchNews = () => getNews(handleFetch, guardianClient);

export default fetchNews;
