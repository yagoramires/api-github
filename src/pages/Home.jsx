import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { DiGithubBadge } from 'react-icons/di';
import { BiSearch } from 'react-icons/bi';

const Home = () => {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/${username}/repositories`);
  };

  return (
    <main>
      <DiGithubBadge size={130} />
      <h1 className='text-[42px] font-bold'>API GitHub</h1>
      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-center w-full max-w-[583px]'
      >
        <input
          type='text'
          placeholder='Usuário'
          className='bg-black w-full h-16 leading-[64px] outline-none text-[24px] mr-6 px-6 placeholder:text-metalDark'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type='submit'
          className='flex items-center justify-center w-20 h-16 border-text border-[3px] transition-all duration-300 hover:bg-container'
        >
          <BiSearch size={30} />
        </button>
      </form>
    </main>
  );
};

export default Home;
