import storage from '../localStorage/localStorage';
import renderReadLater from './renderReadLater';

const renderHeader = (title) => {
  const header = document.createElement('header');
  const h3 = document.createElement('h3');
  h3.textContent = title;
  header.appendChild(h3);

  return header;
};

const renderNewsListItem = (article) => {
  const li = document.createElement('li');
  li.appendChild(article);

  return li;
};

const renderArticleLink = (link) => {
  const articleLink = document.createElement('a');
  articleLink.classList.add('button');
  articleLink.textContent = 'Full article';
  articleLink.href = link;

  return articleLink;
};

const renderArticleButton = (news) => {
  const articleButton = document.createElement('button');
  articleButton.classList.add('button', 'button-outline');
  articleButton.textContent = 'Read Later';

  const handleClick = () => {
    storage.addItemToLocalStorage(news);
    const data = storage.retrieveSavedArticlesFromStorage();
    renderReadLater(data);
  };

  articleButton.addEventListener('click', handleClick);

  return articleButton;
};

const renderNewsActions = (link, button) => {
  const newsActions = document.createElement('section');
  newsActions.classList.add('newsActions');
  newsActions.appendChild(link);
  newsActions.appendChild(button);

  return newsActions;
};

const renderSectionNameLi = (sectionLabel) => {
  const sectionNameLi = document.createElement('li');
  const sectionTitle = document.createElement('strong');
  sectionTitle.textContent = 'Section Name:';
  const sectionName = document.createTextNode(` ${sectionLabel}`);
  sectionNameLi.appendChild(sectionTitle);
  sectionNameLi.appendChild(sectionName);

  return sectionNameLi;
};

const renderPublicationDateLi = (date) => {
  const publicationDateLi = document.createElement('li');
  const publicationDateTitle = document.createElement('strong');
  publicationDateTitle.textContent = 'Section Name:';
  publicationDateLi.appendChild(publicationDateTitle);
  const publicationDate = document.createTextNode(
    ` ${new Date(date).toLocaleDateString()}`,
  );
  publicationDateLi.appendChild(publicationDate);

  return publicationDateLi;
};

const renderNewsDetailsUl = (elements) => {
  const ul = document.createElement('ul');

  elements.forEach((element) => {
    ul.appendChild(element);
  });

  return ul;
};

const renderNewsDetails = (ul) => {
  const newsDetails = document.createElement('section');
  newsDetails.classList.add('newsDetails');
  newsDetails.appendChild(ul);

  return newsDetails;
};

const renderNewsArticle = (elements) => {
  const newsArticle = document.createElement('article');
  newsArticle.classList.add('news');

  elements.forEach((element) => {
    newsArticle.appendChild(element);
  });

  return newsArticle;
};

const renderListOfNews = (data) => {
  const newsList = document.querySelector('.newsList');

  data.forEach((news) => {
    const header = renderHeader(news.webTitle);

    const sectionNameLi = renderSectionNameLi(news.sectionName);
    const publicationDateLi = renderPublicationDateLi(news.webPublicationDate);

    const ul = renderNewsDetailsUl([sectionNameLi, publicationDateLi]);

    const newsDetails = renderNewsDetails(ul);

    const articleLink = renderArticleLink(news.webUrl);
    const articleButton = renderArticleButton(
      storage.mapNewsToLocalStorage(news),
    );

    const newsActions = renderNewsActions(articleLink, articleButton);

    const newsArticle = renderNewsArticle([header, newsDetails, newsActions]);

    const newsListItem = renderNewsListItem(newsArticle);
    newsList.appendChild(newsListItem);
  });
};

export default renderListOfNews;
