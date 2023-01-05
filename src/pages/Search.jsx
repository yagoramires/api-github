import React from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { id } = useParams();

  return <section>{id}</section>;
};

export default Search;
