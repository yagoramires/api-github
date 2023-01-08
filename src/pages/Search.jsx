import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';
import axios from 'axios';
import Filter from '../components/Filter';
import Repositories from '../components/Repositories';

const Search = () => {
  // const { id } = useParams();
  const id = 'yagoramires';
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    (async () => {
      const userData = await axios.get(`https://api.github.com/users/${id}`);
      setProfile(userData.data);
    })();
    (async () => {
      const reposData = await axios.get(
        `https://api.github.com/users/${id}/repos`,
      );
      setRepos(reposData.data);
    })();
  }, [id]);

  return (
    <div className='bg-container flex flex-row md:flex-col w-full min-h-[100vh] text-text p-0 '>
      <aside className='fixed md:static md:min-w-full md:min-h-[auto] bg-background max-w-[20rem] min-h-[100vh] '>
        <Profile user={profile} />
        <Filter repos={repos} setFilter={setFilter} />
      </aside>
      <section className='ml-[20rem] md:ml-0 flex flex-col w-full h-full p-10 overflow-x-hidden bg-container md:h-full sm:py-10 sm:px-5'>
        <h1 className='mb-4 font-bold text-title'>Projetos</h1>
        <Repositories repos={filter ? filter : repos} />
      </section>
    </div>
  );
};

export default Search;
