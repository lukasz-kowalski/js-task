import createUrl from '../utils/createNewsUrl';
import { formatDate } from '../utils/date';

const testCreateUrl = () => {
  const baseUrl = 'https://test.com/search?from-date=2020-07-20';
  const mockedState1 = {
    page: 2,
  };
  const mockedState2 = {
    page: 3,
    section: 'sport',
  };
  const mockedState3 = {
    page: null,
    section: '',
    query: '',
  };

  const expected1 = 'https://test.com/search?from-date=2020-07-20&page=2';
  const expected2 =
    'https://test.com/search?from-date=2020-07-20&page=3&section=sport';
  const expected3 = 'https://test.com/search?from-date=2020-07-20';

  if (createUrl(baseUrl, mockedState1) !== expected1) {
    throw new Error('returned bad value for mockedState1');
  }

  if (createUrl(baseUrl, mockedState2) !== expected2) {
    throw new Error('returned bad value for mockedState2');
  }

  if (createUrl(baseUrl, mockedState3) !== expected3) {
    throw new Error('returned bad value for mockedState3');
  }
};

const testFormatDate = () => {
  const mockedDate = 1592738238707;
  const expected = '2020-06-21';

  const mockedDate2 = 1591627128909;
  const expected2 = '2020-06-08';

  if (formatDate(mockedDate) !== expected) {
    throw new Error('returned bad date for mockedData');
  }

  if (formatDate(mockedDate2) !== expected2) {
    throw new Error('returned bad date for mockedData2');
  }
};

const runAllTests = () => {
  testCreateUrl();
  testFormatDate();
};

export default runAllTests;
