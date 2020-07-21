import clearElement from './clearElement';

const renderReadLaterSection = (url, id) => {
  const readLink = document.createElement('a');
  readLink.classList.add('button', 'button-clear');
  readLink.textContent = 'Read';
  readLink.href = url;

  const removeButton = document.createElement('button');
  removeButton.classList.add('button', 'button-clear');
  removeButton.textContent = 'Remove';
  removeButton.id = id;

  const section = document.createElement('section');
  section.appendChild(readLink);
  section.appendChild(removeButton);

  return section;
};

const renderReadLaterItem = (news) => {
  const h4 = document.createElement('h4');
  h4.classList.add('readLaterItem-title');
  h4.textContent = news.webTitle;

  const readLaterSection = renderReadLaterSection(news.webUrl, news.id);

  const li = document.createElement('li');
  li.appendChild(h4);
  li.appendChild(readLaterSection);

  return li;
};

const renderReadLater = (data) => {
  clearElement('.readLaterList');

  const readLaterList = document.querySelector('.readLaterList');

  data.forEach((news) => {
    const readLaterListItem = renderReadLaterItem(news);

    readLaterList.appendChild(readLaterListItem);
  });
};

export default renderReadLater;
