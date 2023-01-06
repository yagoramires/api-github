import React from 'react';
import { DiGithubBadge, DiGithubFull } from 'react-icons/di';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <DiGithubBadge size={130} />
      <DiGithubFull size={80} className='mt-[-20px]' />
      <h1 className='text-title'>404 - Página não encontrada</h1>
      <Link
        to='/'
        className='flex items-center gap-1 mt-20 hover:text-link transition-all duration-300'
      >
        <IoIosArrowBack />
        Voltar
      </Link>
    </main>
  );
};

export default NotFound;
