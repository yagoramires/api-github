import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';
import axios from 'axios';
import Filter from '../components/Filter';

const Search = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

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
    <div className='bg-background flex flex-row md:flex-col w-full min-h-[100vh] text-text p-0'>
      <aside className='bg-background min-w-[20rem] max-h-[100vh] overflow-y-hidden'>
        <Profile user={profile} />
        <Filter repos={repos} />
      </aside>
      <section className='bg-container p-10 w-full flex h-[100vh] overflow-hidden  md:h-full sm:py-10 sm:px-5'>
        main
      </section>
    </div>
  );
};

export default Search;
