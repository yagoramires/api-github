import React from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { id } = useParams();

  return (
    <section>
      <h1 className='text-text '>{id}</h1>
    </section>
  );
};

export default Search;
