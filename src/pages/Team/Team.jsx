// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getSearchMovie } from 'api/moviedb-api';
// import HomePageList from 'components/HomePageList/HomePageList';
// import SearchForm from 'components/SearchForm/SearchForm';
// import { Container, Section } from 'components/common.styled';

const Movies = () => {
  // const appStatus = {
  //   IDLE: 0,
  //   PENDING: 1,
  //   RESOLVED: 2,
  //   REJECTED: 4,
  // };

  // const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState('');
  // const [searchResult, setSearchResult] = useState(null);
  // const [status, setStatus] = useState(appStatus.IDLE);
  // const [error, setError] = useState(null);

  // const queryStr = searchParams.get('query') ?? '';

  // const onSearch = toSearch => {
  //   const newQuery = toSearch !== '' ? { query: toSearch } : {};
  //   setSearchParams(newQuery);
  // };

  // useEffect(() => {
  //   if (queryStr !== '' && queryStr !== query) {
  //     setStatus(appStatus.PENDING);
  //     getSearchMovie(queryStr)
  //       .then(response => {
  //         setSearchResult(response);
  //         setQuery(queryStr);
  //         setStatus(appStatus.RESOLVED);
  //         return;
  //       })
  //       .catch(error => {
  //         setStatus(appStatus.REJECTED);
  //         setSearchResult(null);
  //         setError(error);
  //       });
  //   }
  //   if (queryStr !== '' && queryStr === query) {
  //     setStatus(appStatus.RESOLVED);
  //     return;
  //   }
  //   if (queryStr === '') {
  //     setStatus(appStatus.IDLE);
  //     setQuery('');
  //     setSearchResult(null);
  //     return;
  //   }
  // }, [
  //   query,
  //   setSearchResult,
  //   setStatus,
  //   queryStr,
  //   setQuery,
  //   setError,
  //   appStatus.PENDING,
  //   appStatus.RESOLVED,
  //   appStatus.REJECTED,
  //   appStatus.IDLE,
  // ]);

  return <>movies</>;
};

export default Movies;
